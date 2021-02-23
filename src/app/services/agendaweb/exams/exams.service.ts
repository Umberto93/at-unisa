import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

    getExamsSearchParams() {
        return this.http.get(`${this.base}/combo_call_new.php`, {
            params: new HttpParams()
                .set('sw', 'et_')
                .set('page', 'corsi')
        });
    }
}
