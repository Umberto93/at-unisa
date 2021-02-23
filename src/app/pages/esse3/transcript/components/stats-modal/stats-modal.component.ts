import { NavParams } from '@ionic/angular';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Chart } from 'chart.js';
import { Exam } from 'src/app/interfaces/exam';
import { TranscriptStats } from 'src/app/interfaces/transcript-stats';
import { TranscriptService } from 'src/app/services/esse3/transcript/transcript.service';

@Component({
    selector: 'app-stats-modal',
    templateUrl: './stats-modal.component.html',
    styleUrls: ['./stats-modal.component.scss'],
})
export class StatsModalComponent implements OnInit {

    @ViewChild('ctx') ctx: ElementRef;

    private chart: any;
    private stats: TranscriptStats;
    private matId: number;
    private exams: Exam[];

    constructor(
        private storage: Storage,
        private navParams: NavParams,
        private transcriptService: TranscriptService
    ) {
        this.stats = {} as TranscriptStats;
        this.matId = this.navParams.get('matId');
        this.exams = this.navParams.get('exams');
    }

    async ngOnInit() {
        this.transcriptService.getCareerStats(this.matId)
            .subscribe((stats: TranscriptStats) => {
                this.stats = stats;
                this.createStatsChart();
            });
    }

    private getGrades(exams: Exam[]) {
        return exams.reduce((grades: number[], exam: Exam) => {
            exam.grade !== null && grades.push(exam.grade);
            return grades;
        }, []);
    }

    private getGradesDist(grades: number[]) {
        return grades.reduce((dist: any, grade: number) => {
            dist[grade] = dist[grade] + 1 || 1;
            return dist;
        }, {});
    }

    private createStatsChart() {
        const grades = this.getGrades(this.exams);
        const gradesDist = this.getGradesDist(grades);

        this.chart = new Chart(this.ctx.nativeElement, {
            type: 'bar',
            data: {
                labels: Object.keys(gradesDist),
                datasets: [
                    {
                        label: 'Numero di esami per voto',
                        data: Object.values(gradesDist),
                        backgroundColor: 'rgba(253, 151, 56, .5)',

                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize: 1
                        }
                    }]
                }
            }
        });
    }
}
