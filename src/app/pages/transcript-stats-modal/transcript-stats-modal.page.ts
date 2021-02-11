import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Exam } from 'src/app/interfaces/exam';
import { Chart } from 'chart.js';

@Component({
    selector: 'app-transcript-stats-modal',
    templateUrl: './transcript-stats-modal.page.html',
    styleUrls: ['./transcript-stats-modal.page.scss'],
})
export class TranscriptStatsModalPage implements OnInit {

    @ViewChild('ctx') ctx: ElementRef;

    private chart: any;
    private avg: number;
    private degreeMark: number;
    private acquiredCredits: number;
    private totalCredits: number;
    private exams: Exam[];

    constructor(
        private navParams: NavParams
    ) {
        this.exams = this.navParams.get('exams');
        this.exams = this.exams.filter(exam => exam.grade);
        this.createStatsChart();
    }

    ngOnInit() {

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
