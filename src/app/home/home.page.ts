import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(
        private storage: Storage,
    ) { }

    testMethod() {
        this.storage.get('user').then(user => {
            console.log(user);
        });
    }
}
