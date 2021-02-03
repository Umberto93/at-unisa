import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
        return this.http.get(`${this.base}/${matId}/righe/`);
    }
}
