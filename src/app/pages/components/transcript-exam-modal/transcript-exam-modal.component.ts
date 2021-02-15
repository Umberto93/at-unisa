import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ExamDetails } from 'src/app/interfaces/exam-details';
import { TranscriptService } from 'src/app/services/esse3/transcript/transcript.service';

@Component({
    selector: 'app-transcript-exam-modal',
    templateUrl: './transcript-exam-modal.component.html',
    styleUrls: ['./transcript-exam-modal.component.scss'],
})
export class TranscriptExamModalComponent implements OnInit {

    private details: ExamDetails;
    private matId: number;
    private examId: number;

    constructor(
        private transcriptService: TranscriptService,
        private navParams: NavParams
    ) {
        this.details = {} as ExamDetails;
        this.matId = navParams.get('matId');
        this.examId = navParams.get('examId');
    }

    ngOnInit() {
        this.transcriptService.getExamDetails(this.matId, this.examId)
            .subscribe(details => {
                this.details = details;
            });
    }

}
