import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Exam } from 'src/app/interfaces/exam';
import { TranscriptStats } from 'src/app/interfaces/transcript-stats';
import { TranscriptService } from 'src/app/services/esse3/transcript/transcript.service';

@Component({
    selector: 'app-prevision-modal',
    templateUrl: './prevision-modal.component.html',
    styleUrls: ['./prevision-modal.component.scss'],
})
export class PrevisionModalComponent implements OnInit {

    private matId: number;
    private exam: Exam;
    private stats: TranscriptStats;
    private avg: number;
    private increment: number;

    constructor(
        private navParams: NavParams,
        private transcriptService: TranscriptService
    ) {
        this.matId = this.navParams.get('matId');
        this.exam = this.navParams.get('exam');
        this.stats = {} as TranscriptStats;
        this.avg = 0;
        this.increment = 0;
    }

    async ngOnInit() {
        this.transcriptService.getCareerStats(this.matId)
            .subscribe((stats: TranscriptStats) => {
                this.stats = stats;
            });
    }

    private calcExpectedAvg(event: CustomEvent) {
        this.avg = parseFloat((((this.stats.avg * this.stats.validatedCredits) +
            (event.detail.value * this.exam.credits)) /
            (this.stats.validatedCredits + this.exam.credits))
            .toFixed(3));
        this.increment = parseFloat((this.avg - this.stats.avg).toFixed(3));
    }

}
