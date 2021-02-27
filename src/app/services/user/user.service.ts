import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private userSubject = new Subject<any>();

    constructor(
        private storage: Storage
    ) { }

    /**
     * Preleva i dati dell'utente dallo Storage.
     * 
     * NB: Si tratta dei dati che vengono memorizzati dopo che il proceesso di autenticazione è
     * andato a buon fine.
     */
    getUser(): Promise<any> {
        return this.storage.get('user');
    }

    /**
     * Setta i dati dell'utente nello Storage.
     * 
     * NB: Si tratta dei dati ottenuti nel momento in cui il proceesso di autenticazione è
     * andato a buon fine.
     */
    setUser(user: any): Promise<any> {
        return this.storage.set('user', user);
    }

    /**
     * Permette di recuperare le credenziali dell'utente, utili per effettuare la "Basic Authentication".
     * 
     * N.B.
     * Il metodo di autenticazione è detto "Basic Authentication" e prevede che le credenziali
     * vengano inviate in un formato standard "username:password". La stringa risultante viene poi
     * codificata in Base64 e inserita all'interno dell'header "Authorization" di ogni richiesta.
     */
    getCredentials(): Promise<any> {
        return this.storage.get('credentials');
    }

    /**
     * Setta le credenziali dell'utente, utili per effettuare la "Basic Authentication".
     * 
     * @param credentials Le credenziali dell'utente, ovvero la conversione in Base64 della stringa
     * "uesername:password". 
     */
    setCredentials(credentials: string): Promise<any> {
        return this.storage.set('credentials', credentials);
    }
   
    /**
     * Preleva la carriera attiva dell'utente.
     */
    getActiveCareer(): Promise<number> {
        return this.storage.get('activeCareer');
    }

    /**
     * Setta la carriera attiva dell'utente e la emette.
     * 
     * @param careerId L'indice della carriera attiva.
     */
    setActiveCareer(careerId: number) {
        this.storage.set('activeCareer', careerId);
        this.userSubject.next({ activeCareer: careerId });
    }

    /**
     * Restituisce lo userSubject.
     */
    getUserSubject(): Observable<any> {
        return this.userSubject.asObservable();
    }

}
