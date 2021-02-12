import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Exam } from 'src/app/interfaces/exam';
import { TranscriptStats } from 'src/app/interfaces/transcript-stats';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TranscriptService {

    readonly base = `${environment.esse3Api}/libretto-service-v2/libretti`;

    constructor(
        private http: HttpClient
    ) { }

    getExams(matId: number): Observable<Exam[]> {
        return this.http.get<Exam[]>(`${this.base}/${matId}/righe/`, {
            params: new HttpParams()
                .set('order', '+adDes')
                .set('fields', 'aaFreqId,adDes,annoCorso,esito.dataEsa,esito.modValCod.value,esito.voto,esito.lodeFlg,peso,stato.value')
        }).pipe(map((res: any) => {
            return res.map((exam: any) => {
                return {
                    name: exam.adDes.toLowerCase(),
                    credits: exam.peso,
                    attendanceYear: exam.aaFreqId,
                    courseYear: exam.annoCorso,
                    grade: exam.esito.voto,
                    maxGrade: Boolean(exam.esito.lodeFlg),
                    passedDate: this.toDate(exam.esito.dataEsa),
                    passed: exam.stato.value === 'S'
                } as Exam;
            });
        }));
    }

    getAverage(matId: number) {
        return this.http.get(`${this.base}/${matId}/medie/`)
            .pipe(map((res: any) => res.filter(el => el.tipoMediaCod.value === 'P')));
    }

    getStats(matId: number) {
        return this.http.get(`${this.base}/${matId}/stats/`);
    }

    getCareerStats(matId: number): Observable<TranscriptStats> {
        return combineLatest([
            this.getAverage(matId),
            this.getStats(matId)
        ]).pipe(map((res: any) => {
            let stats = {} as TranscriptStats;

            const avgs = res[0];
            avgs.forEach((avg: any) => {
                if (avg.definizioneBase.value === 'CDSORD') {
                    stats.avg = avg.media;
                } else {
                    stats.degreeMark = avg.media
                }
            });

            const credits = res[1];
            stats.acquiredCredits = credits.umPesoSuperato;
            stats.totalCredits = credits.umPesoPiano;

            return stats;
        }));
    }

    private toDate(dateTime: string): Date {
        const date = dateTime.split(' ')[0];
        return new Date(date.split('/').reverse().join('/'));
    }
}
