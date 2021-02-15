import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
        private storage: Storage
    ) { }

    loginWithCredentials(
        username: string,
        password: string
    ): Observable<any> {
        const credentials = btoa(`${username}:${password}`);

        return this.http.get(`${environment.esse3Api}/login`, {
            headers: new HttpHeaders({
                'Authorization': `Basic ${credentials}}`
            })
        }).pipe(map(res => {
            if (res) {
                this.storage.set('user', res);
                this.storage.set('credentials', credentials);
                return res;
            }

            return null;
        }));
    }

    canHoldSession(): Promise<boolean> {
        return this.storage.get('storeCredentials');
    }

}
