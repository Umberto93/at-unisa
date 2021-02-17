import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Exam } from 'src/app/interfaces/exam';
import { TranscriptStats } from 'src/app/interfaces/transcript-stats';
import { ExamDetails } from 'src/app/interfaces/exam-details';
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
                .set('fields', 'aaFreqId,adsceId,adDes,annoCorso,esito.dataEsa,esito.modValCod.value,esito.voto,esito.lodeFlg,peso,stato.value')
        }).pipe(map((res: any) => {
            return res.map((exam: any) => {
                return {
                    id: exam.adsceId,
                    name: exam.adDes.toLowerCase(),
                    credits: exam.peso,
                    attendanceYear: exam.aaFreqId,
                    courseYear: exam.annoCorso,
                    grade: exam.esito.voto,
                    maxGrade: Boolean(exam.esito.lodeFlg),
                    passedDate: this.toDate(exam.esito.dataEsa),
                    passed: exam.stato.value === 'S',
                    isExam: this.isExam(exam)
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
            const avgs = res[0];
            const credits = res[1];
            const stats = {} as TranscriptStats;

            avgs.forEach((avg: any) => {
                if (avg.definizioneBase.value === 'CDSORD') {
                    stats.avg = avg.media;
                } else {
                    stats.degreeMark = Math.round(avg.media);
                }
            });

            stats.acquiredCredits = credits.umPesoSuperato;
            stats.validatedCredits = credits.umPesoConvalidato;
            stats.totalCredits = credits.umPesoPiano;

            return stats;
        }));
    }

    getExamDetails(matId: number, examId: number): Observable<ExamDetails> {
        return this.http.get(`${this.base}/${matId}/righe/${examId}/syllabus/AD`)
            .pipe(map((res: any) => {
                return {
                    goals: res[0].obiettiviFormativi,
                    requirements: res[0].prerequisiti,
                    contents: res[0].contenuti,
                    teachingMethods: res[0].metodiDidattici,
                    verificationMode: res[0].modalitaVerificaApprendimento,
                    books: res[0].testiRiferimento,
                    other: res[0].altreInfo
                } as ExamDetails;
            }));
    }

    private toDate(dateTime: string): Date {
        const date = dateTime.split(' ')[0];
        return new Date(date.split('/').reverse().join('/'));
    }

    private isExam(exam: any) {
        return exam.esito.modValCod.value !== 'G' &&
            exam.adDes !== 'PROVA FINALE';
    }
}
