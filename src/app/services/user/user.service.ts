import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private storage: Storage
    ) { }

    getUser(): Promise<any> {
        return this.storage.get('user');
    }

    getActiveCareer(): Promise<number> {
        return this.storage.get('activeCareer');
    }

    setActiveCareer(careerId: number) {
        this.storage.set('activeCareer', careerId);
    }
}
