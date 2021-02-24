import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Plugins } from '@capacitor/core';
import { ToastService } from 'src/app/services/toast/toast.service';
import { ToastController } from '@ionic/angular';
import { RoomsService } from 'src/app/services/agendaweb/rooms/rooms.service';
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
        private toastController: ToastController,
        private roomsService: RoomsService
    ) { }

    ngOnInit() {
    }

    /* Method used only for testing */
    testMethod() {
        this.roomsService.getRoomsFilter()
            .subscribe(res => {
                console.log(res);
            });
    }
}
