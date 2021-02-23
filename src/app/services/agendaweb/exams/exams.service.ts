import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Session } from 'src/app/interfaces/session';

@Injectable({
    providedIn: 'root'
})
export class ExamsService {

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

    private sortExams(s1: Session, s2: Session): number {
        if (s1.name < s2.name) {
            return -1;
        }

        if (s1.name > s2.name) {
            return 1;
        }

        return 0;
    }

    getExamsSearchParams() {
        return this.http.get(`${this.base}/combo_call_new.php`, {
            params: new HttpParams()
                .set('sw', 'et_')
                .set('page', 'corsi')
        });
    }

    getExams(
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
                const exams = [] as Array<Session>;
                const teachings = res.Insegnamenti;

                teachings.forEach((teaching: any) => {
                    const sessions = teaching.Appelli;
                    const prof = teaching.DatiDocente;
                    const course = teaching.Manifesto.find((course: any) => {
                        return courseYear.startsWith(course.Codice);
                    });

                    sessions.forEach((session: any) => {
                        exams.push({
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
                            course: {
                                name: course.LaureaNome,
                                year: course.AnnoCorso,
                                type: course.Nome
                            }
                        });
                    });
                });

                return exams.sort(this.sortExams);
            })
        );
    }
}
