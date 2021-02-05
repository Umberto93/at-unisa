import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, filter, map } from 'rxjs/operators';
import { Exam } from 'src/app/interfaces/exam';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TranscriptService {

    readonly base = `${environment.esse3Api}/libretto-service-v2/libretti`;

    constructor(
        private http: HttpClient
    ) { }

    getExams(matId: number) {
        return this.http.get(`${this.base}/${matId}/righe/`, {
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
                    passedDate: exam.esito.dataEsa,
                    passed: exam.stato.value === 'S'
                } as Exam;
            });
        }));
    }

    getAverage(matId: number) {
        return this.http.get(`${this.base}/${matId}/medie/`)
            .pipe(filter((avg: any) => avg.tipoMediaCod.value === 'P'));
    }

    getStats(matId: number) {
        return this.http.get(`${this.base} / ${matId} / stats /`);
    }
}
