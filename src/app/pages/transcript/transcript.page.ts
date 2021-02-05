import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Exam } from 'src/app/interfaces/exam';
import { TranscriptService } from 'src/app/services/esse3/transcript.service';

@Component({
    selector: 'app-transcript',
    templateUrl: './transcript.page.html',
    styleUrls: ['./transcript.page.scss'],
})
export class TranscriptPage implements OnInit {
    private exams: Exam[];

    constructor(
        private storage: Storage,
        private transcripts: TranscriptService
    ) {
        this.exams = [];
    }

    ngOnInit() {
        this.storage.get('user').then(user => {
            const matId = user.user.trattiCarriera[0].matId;
            this.transcripts.getExams(matId)
                .subscribe(exams => {
                    this.exams = exams;
                    console.log(this.exams);
                });
        });
    }

}
