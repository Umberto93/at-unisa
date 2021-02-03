import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TranscriptService } from '../services/esse3/transcript.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    private exams: any = [];

    constructor(
        private storage: Storage,
        private transcripts: TranscriptService
    ) { }

    ngOnInit() {
        this.storage.get('user').then(user => {
            const matId = user.user.trattiCarriera[0].matId;
            this.transcripts.getExams(matId)
                .subscribe(exams => {
                    this.exams = exams;
                });
        });
    }

    testMethod() {
        this.storage.get('user').then(user => {
            console.log(user);
        });
    }
}
