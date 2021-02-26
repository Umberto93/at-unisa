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

    /**
     * Effettua il login utilizzando le credenziali inserite dall'utente.
     * 
     * Il metodo di autenticazione è detto "Basic Authentication" e prevede che le credenziali
     * vengano inviate in un formato standard "username:password". La stringa risultante viene poi
     * codificata in Base64 e inserita all'interno dell'header "Authorization".
     * 
     * NB: Codificare in Base64 non significa effettuare l'hash o la cifratura della stringa. 
     * Essendo reversibile, questa procedura equivale al mandare le credenziali in chiaro! Ecco
     * perché è preferibile utilizzarla in combinazione con un protocollo sicuro come HTTPS. 
     * Dal momento che l'UNISA non ha ancora a disposizione meccanismi per la gestione del login
     * che sfruttano protocolli come OAuth2, abbiamo deciso di optare per questa strada.
     * 
     * Se il processo di autenticazione va a buon fine, i dati dell'utente vengono memorizzati nello
     * Ionic Storage assieme alle credenziali precedentemente inviate per la richiesta.
     * 
     * @param username Lo username dell'utente.
     * @param password La passweord dell'utente.
     */
    loginWithCredentials(
        username: string,
        password: string
    ): Observable<any> {
        const credentials = btoa(`${username}:${password}`);

        return this.http.get(`${environment.esse3Api}/login`, {
            headers: new HttpHeaders({
                'Authorization': `Basic ${credentials}`
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

}
