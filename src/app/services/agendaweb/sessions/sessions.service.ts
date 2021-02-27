import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Session } from 'src/app/interfaces/session';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SessionsService {

    private readonly base = `${environment.easycourseApi}/AgendaStudenti/`;

    constructor(
        private http: HttpClient
    ) { }

    /**
     * Effettua il parsing della risposta restituendo i dati in formato JSON.
     * 
     * @param res La risposta da parsare.
     */
    private parseResponse(res: String): String {
        return JSON.parse(res.replace(';', '').split('=')[1]);
    }

    /**
     * Converte la data da stringa al tipo Date.
     * 
     * @param date La data in formato testuale.
     * @param time L'orario in formato testuale.
     */
    private toDateTime(date: string, time: string): Date {
        return new Date(
            `${date.split('-').reverse().join('-')}T${time}`
        );
    }

    /**
     * Ordina gli appelli in base al nome.
     * 
     * @param s1 Appello 1.
     * @param s2 Appello 2.
     */
    private sortSessions(s1: Session, s2: Session): number {
        if (s1.name < s2.name) {
            return -1;
        }

        if (s1.name > s2.name) {
            return 1;
        }

        return 0;
    }

    /**
     * Manipola la risposta ottenuta al fine di ottenere i dati in un certo formato.
     * 
     * @param res La risposta ottenuta dal server.
     */
    private getSessions(res: any) {
        const sessionsList = [] as Array<Session>;
        const teachings = res.Insegnamenti;

        teachings.forEach((teaching: any) => {
            const sessions = teaching.Appelli;
            const prof = teaching.DatiDocente;
            const courses = teaching.Manifesto.map((course: any) => {
                return {
                    name: course.LaureaNome,
                    year: course.AnnoCorso,
                    type: course.Nome
                };
            });

            sessions.forEach((session: any) => {
                sessionsList.push({
                    name: session.nome,
                    dateStart: this.toDateTime(session.Data, session.OraInizio),
                    dateEnd: this.toDateTime(session.Data, session.OraFine),
                    room: session.Aula,
                    prof: {
                        firstname: prof.Nome,
                        lastname: prof.Cognome,
                        mail: prof.Mail1
                    },
                    notes: session.Notes,
                    type: session.TipoEsame,
                    courses: courses
                });
            });
        });

        return sessionsList.sort(this.sortSessions);
    }

    /**
     * Recupera le combo di filtraggio relative alla pagina dei corsi.
     */
    getSessionsFiltersByCourse(): Observable<any> {
        return this.http.get(`${this.base}/combo_call_new.php`, {
            params: new HttpParams()
                .set('sw', 'et_')
                .set('page', 'corsi')
        });
    }

    /**
     * Recupera le combo di filtraggio relative alla pagina dei docenti.
     */
    getSessionsFiltersByProf(): Observable<any> {
        return this.http.get(`${this.base}/combo_call_new.php`, {
            params: new HttpParams()
                .set('sw', 'et_')
                .set('page', 'docente')
        });
    }

    /**
     * Recupera il calendario degli appelli per insegnamento.
     * 
     * @param year L'anno.
     * @param course Il codice del corso di laurea.
     * @param courseYear L'anno di corso.
     * @param term La sessione.
     */
    getSessionsByCourse(
        year: string,
        course: string,
        courseYear: string,
        term: string
    ): Observable<Session[]> {
        return this.http.get(`${this.base}/test_call_new.php`, {
            params: new HttpParams()
                .set('view', 'easytest')
                .set('include', 'et_cdl')
                .set('anno', year)
                .set('cdl', course)
                .set('annocdl', courseYear)
                .set('sessione', term)
        }).pipe(
            map((res: any) => {
                return this.getSessions(res);
            })
        );
    }

    /**
     * Recupera il calendario degli appelli di un determinato docente.
     * 
     * @param year L'anno.
     * @param prof Il codice del docente.
     * @param term La sessione.
     */
    getSessionsByProf(
        year: string,
        prof: string,
        term: string
    ): Observable<Session[]> {
        return this.http.get(`${this.base}/test_call_new.php`, {
            params: new HttpParams()
                .set('view', 'easytest')
                .set('include', 'et_docente')
                .set('anno', year)
                .set('docente', prof)
                .set('sessione', term)
        }).pipe(
            map((res: any) => {
                return this.getSessions(res);
            })
        );
    }
}
