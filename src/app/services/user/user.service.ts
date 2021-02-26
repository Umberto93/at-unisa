import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class UserService {

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
     * Preleva la carriera attiva dell'utente.
     */
    getActiveCareer(): Promise<number> {
        return this.storage.get('activeCareer');
    }

    /**
     * Setta la carriera attiva dell'utente.
     * 
     * @param careerId L'indice della carriera attiva.
     */
    setActiveCareer(careerId: number) {
        this.storage.set('activeCareer', careerId);
    }
}
