import { NavParams } from '@ionic/angular';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Exam } from 'src/app/interfaces/exam';
import { TranscriptStats } from 'src/app/interfaces/transcript-stats';
import { TranscriptService } from 'src/app/services/esse3/transcript/transcript.service';

@Component({
    selector: 'app-transcript-stats-modal',
    templateUrl: './transcript-stats-modal.component.html',
    styleUrls: ['./transcript-stats-modal.component.scss'],
})
export class TranscriptStatsModalComponent implements OnInit {

    @ViewChild('ctx') ctx: ElementRef;

    private chart: any;
    private stats: TranscriptStats;
    private exams: Exam[];

    constructor(
        private storage: Storage,
        private navParams: NavParams,
        private transcriptService: TranscriptService
    ) {
        this.exams = this.navParams.get('exams');
        this.exams = this.exams.filter(exam => exam.grade);
        this.createStatsChart();
    }

    async ngOnInit() {
        const user = await this.storage.get('user');
        const matId = user.user.trattiCarriera[0].matId;
        this.transcriptService.getStats(matId)
            .subscribe((stats: TranscriptStats) => {
                this.stats = stats;
            })

    }

    private createStatsChart() {
        const grades = this.exams.map((exam: Exam) => exam.grade);
        const gradesDist = this.getGradesDist(grades);

        this.chart = new Chart(this.ctx.nativeElement, {
            type: 'bar',
            data: {
                labels: Object.keys(gradesDist),
                datasets: [
                    {
                        label: 'Numero di esami per voto',
                        data: Object.values(gradesDist),
                        backgroundColor: 'rgba(255, 240, 225, .5)',

                    }
                ]
            }
        });
    }

    private getGradesDist(grades: number[]) {
        return grades.reduce((data, grade) => {
            data[grade] = data[grade] + 1 || 1;
            return data;
        }, {});

    }

}
