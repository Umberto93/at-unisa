import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Session } from 'src/app/interfaces/session';

@Injectable({
    providedIn: 'root'
})
export class SessionsService {

    private readonly base = 'https://www.unisa.it/proxy-test/easycourse/AgendaStudenti/';

    constructor(
        private http: HttpClient
    ) { }

    private parseResponse(res: String): String {
        return JSON.parse(res.replace(';', '').split('=')[1]);
    }

    private toDateTime(date: string, time: string): Date {
        return new Date(
            `${date.split('-').reverse().join('-')}T${time}`
        );
    }

    private sortSessions(s1: Session, s2: Session): number {
        if (s1.name < s2.name) {
            return -1;
        }

        if (s1.name > s2.name) {
            return 1;
        }

        return 0;
    }

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

    getSessionsFiltersByCourse(): Observable<any> {
        return this.http.get(`${this.base}/combo_call_new.php`, {
            params: new HttpParams()
                .set('sw', 'et_')
                .set('page', 'corsi')
        });
    }

    getSessionsFiltersByProf(): Observable<any> {
        return this.http.get(`${this.base}/combo_call_new.php`, {
            params: new HttpParams()
                .set('sw', 'et_')
                .set('page', 'docente')
        });
    }

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
