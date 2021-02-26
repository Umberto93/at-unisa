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

    /**
     * Recupera le informazioni sul libretto universitario dello studente.
     * 
     * @param matId L'id relativo alla matricola dello studente che viene restituito all'utente
     * dopo aver effettuato l'autenticazione.
     */
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

    /**
     * Recupera le informazioni di media e stima del voto di laurea.
     * 
     * @param matId L'id relativo alla matricola dello studente che viene restituito all'utente
     * dopo aver effettuato l'autenticazione.
     */
    getAverage(matId: number) {
        return this.http.get(`${this.base}/${matId}/medie/`)
            .pipe(map((res: any) => res.filter((el: any) => el.tipoMediaCod.value === 'P')));
    }

    /**
     * Recupera le statistiche sui dati carriera conseguiti dallo studenti (es. cfu conseguiti).
     * 
     * @param matId L'id relativo alla matricola dello studente che viene restituito all'utente
     * dopo aver effettuato l'autenticazione.
     */
    getStats(matId: number) {
        return this.http.get(`${this.base}/${matId}/stats/`);
    }

    /**
     * Combina le due richieste precedenti al fine di restituire un'unica risposta che contenga:
     * 
     * 1. Media ponderata degli esami;
     * 2. Stima del voto di laurea;
     * 3. Numero di cfu conseguiti fino a quel momento.
     * 
     * @param matId L'id relativo alla matricola dello studente che viene restituito all'utente
     * dopo aver effettuato l'autenticazione.
     */
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

    /**
     * Recupera le informazioni sul singolo esame.
     * 
     * @param matId L'id relativo alla matricola dello studente che viene restituito all'utente
     * dopo aver effettuato l'autenticazione.
     * @param examId L'id dello specifico esame.
     */
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

    /**
     * Manipola la data restituita dal server creando un oggetto Date.
     * 
     * @param dateTime La data in formato stringa.
     */
    private toDate(dateTime: string): Date {
        const date = dateTime.split(' ')[0];
        return new Date(date.split('/').reverse().join('/'));
    }

    /**
     * Verifica se l'esame passato come parametro è un'idoneità oppure un esame a tutti gli effetti.
     * Vengono considerate idoneità attività di orientamento al lavoro, conoscenza della lingua 
     * inglese, ecc.
     * 
     * NB: La prova finale in alcuni casi viene vista come un esame, sebbebe sia un'idoneità a tutti
     * gli effetti. Di conseguenza il suo modValCod è diverso da 'G'. Ecco perché viene fatto un 
     * controllo sul nome dell'esame. È bene precisare che tale controllo potrebbe fallire nel caso
     * di altri dipartimenti per cui la prova finale non viene chiamata allo stesso modo.
     * 
     * @param exam L'esame da verificare.
     */
    private isExam(exam: any) {
        return exam.esito.modValCod.value !== 'G' &&
            exam.adDes !== 'PROVA FINALE';
    }
}
