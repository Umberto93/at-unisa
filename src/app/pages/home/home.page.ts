import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Plugins } from '@capacitor/core';
import { ToastService } from 'src/app/services/toast/toast.service';
import { ToastController } from '@ionic/angular';
const { LocalNotifications } = Plugins;

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(
        private router: Router,
        private storage: Storage,
        private toastService: ToastService,
        private toastController: ToastController
    ) { }

    ngOnInit() {
    }

    /* Method used only for testing */
    testMethod() {
        /*LocalNotifications.schedule({
            notifications: [
                {
                    id: 1,
                    title: 'Promemoria',
                    body: 'Testo della notifica',
                    schedule: { at: new Date(Date.now() + 1000) }
                }
            ]
        });*/

        /*const t = this.toastController.create({
            header: 'ciao',
            message: 'miao',
            buttons: [
                {
                    icon: 'cloud-offline',
                    side: 'start',
                    role: 'image'
                }
            ]
        }).then(t => {
            t.present();
        });*/

        this.toastService.presentSuccessToast({
            duration: 2000,
            header: 'Online',
            message: 'Sei di nuovo online.'
        });

        /*this.toastService.presentToastWithIcon('cloud-offline', {
            header: 'Offline',
            message: 'Nessuna connessione ad Internet.'
        });*/
    }
}
