import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Lesson } from 'src/app/interfaces/lesson';
import { Schedule } from 'src/app/interfaces/schedule';
import { Scheduler } from 'src/app/interfaces/scheduler';
import { SessionProf } from 'src/app/interfaces/session-prof';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LessonsService {

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
        return JSON.parse(res.split(';')[0]);
    }

    /**
     * Recupera le combo di filtraggio relative all'opzione 'Anno Accademico', sia per 
     * la pagina dei corsi che per la pagina dei docenti.
     */
    getLessonsYearOptions(): Observable<any> {
        return this.http.get(`${this.base}/combo_call_new.php`, {
            params: new HttpParams()
                .set('sw', 'ec_')
                .set('aa', '1')
        });
    }

    /**
     * Recupera le opzioni di filtraggio relative all'opzione 'Corso di Studio' per la
     * pagina dei corsi.
     * 
     * @param year Indica l'Anno Accademico di riferimento.
     */
    getLessonsCourseOptions(year: string): Observable<any> {
        return this.http.get(`${this.base}/combo_call_new.php`, {
            params: new HttpParams()
                .set('sw', 'ec_')
                .set('aa', year)
                .set('page', 'corsi'),
            responseType: 'text'
        }).pipe(
            map((res: any) => {
                return this.parseResponse(res);
            })
        )
    }

    /**
     * Recupera le opzioni di filtraggio relative all'opzione 'Docente' per la pagina
     * dei docenti.
     * 
     * @param year Indica l'Anno Accademico di riferimento. 
     */
    getLessonsProfOptions(year: string): Observable<any> {
        return this.http.get(`${this.base}/combo_call_new.php`, {
            params: new HttpParams()
                .set('sw', 'ec_')
                .set('aa', year)
                .set('page', 'docenti')
        });
    }

    /**
     * Recupera le opzioni di filtraggio relative all'opzione 'Anno di Studio' per la
     * pagina dei corsi.
     * 
     * @param year Indica l'Anno Accademico di riferimento. 
     * @param course Indica il codice identificativo del Corso di Studio di riferimento.
     */
    getLessonsCourseYearsOptions(year: string, course: string): Observable<any> {
        return this.http.get(`${this.base}/call_redis.php`, {
            params: new HttpParams()
                .set('key', `UNISA_${year}_ec_elenco_anno2_${course}`)
        });
    }

    /**
     * Recupera il Calendario delle Lezioni per Insegnamento.
     * 
     * @param year Indica l'Anno Accademico di riferimento.
     * @param course Indica il codice identificativo del Corso di Studio di riferimento.
     * @param courseYear Indica il Codice del Curriculum e l'Anno di Corso di riferimento,
     * separati dal carattere | (pipe).
     * @param term Indica il codice del Periodo Didattico di riferimento.
     */
    getLessonsByCourse(
        year: string,
        course: string,
        courseYear: string,
        term: string
    ): Observable<Scheduler> {
        return this.http.get(`${this.base}/grid_call_new.php`, {
            params: new HttpParams()
                .set('view', 'easycourse')
                .set('include', 'corso')
                .set('anno', year)
                .set('corso', course)
                .set('anno2', courseYear)
                .set('visualizzazione_orario', 'std')
                .set('periodo_didattico', term)
        }).pipe(
            map((res: any) => this.getLessons(res))
        )
    }

    /**
     * ecupera il Calendario delle Lezioni per Docente.
     * 
     * @param year Indica l'Anno Accademico di riferimento.
     * @param prof Indica la matricola del Docente di riferimento.
     * @param term Indica il codice del Periodo Didattico di riferimento
     */
    getLessonsByProf(
        year: string,
        prof: string,
        term: string
    ): Observable<Scheduler> {
        return this.http.get(`${this.base}/grid_call_new.php`, {
            params: new HttpParams()
                .set('view', 'easycourse')
                .set('include', 'docente')
                .set('anno', year)
                .set('docente', prof)
                .set('visualizzazione_orario', 'std')
                .set('periodo_didattico', term)
        }).pipe(
            map((res: any) => this.getLessons(res))
        )
    }

    /**
     * Manipola la risposta ottenuta dal server al fine di ottenere i dati in un unico formato.
     * 
     * @param res La risposta ottenuta dal server. 
     */
    private getLessons(res: any) {
        const daysLabels = {
            'monday': 0,
            'tuesday': 1,
            'wednesday': 2,
            'thursday': 3,
            'friday': 4
        };

        const lessons: Array<any> = res.celle;
        const schedule = {
            0: [] as Lesson[],
            1: [] as Lesson[],
            2: [] as Lesson[],
            3: [] as Lesson[],
            4: [] as Lesson[]
        } as Schedule;
        const legend: any = {};

        lessons.forEach((lesson: any) => {
            const name = lesson.nome_insegnamento.replace('<i class="fa fa-asterisk" aria-hidden title="*"></i>', '').trim();
            const teachingCode = lesson.codice_insegnamento;
            const day = lesson.data.toLocaleLowerCase();
            const courses = lesson.percorso_didattico.split('<br />');

            let profsFullnames = lesson.docente;
            let profsMails = lesson.mail_docente;
            const profs: SessionProf[] = [];

            if (profsFullnames) {
                profsFullnames = profsFullnames.split(',');
                profsMails = profsMails ? profsMails.split(',') : [];

                profsFullnames.forEach((fullname: string, index: number) => {
                    const [lastname, firstname] = fullname.trim().split(' ');
                    const mail = profsMails[index] || '';

                    profs.push({
                        firstname: firstname,
                        lastname: lastname,
                        mail: mail
                    })
                })
            }

            const dayIndex = daysLabels[day];
            schedule[dayIndex].push({
                name: name,
                teachingCode: teachingCode,
                day: dayIndex,
                timeStart: lesson.ora_inizio,
                timeEnd: lesson.ora_fine,
                room: lesson.aula,
                profs: profs,
                courses: courses,
            } as Lesson);

            legend[teachingCode] || (legend[teachingCode] = name);
        });

        return {
            schedule: schedule,
            legend: legend
        } as Scheduler;
    }

}
