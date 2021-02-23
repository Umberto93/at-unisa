import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Plugins } from '@capacitor/core';
import { ToastService } from 'src/app/services/toast/toast.service';
import { ToastController } from '@ionic/angular';
import { ExamsService } from 'src/app/services/agendaweb/exams/exams.service';
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
        private examsService: ExamsService
    ) { }

    ngOnInit() {
    }

    /* Method used only for testing */
    testMethod() {
        this.examsService.getExamsSearchParams()
            .subscribe(res => {
                console.log(res);
            });
    }
}
