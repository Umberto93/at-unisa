import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Chart } from 'chart.js';
import { Exam } from 'src/app/interfaces/exam';
import { TranscriptService } from 'src/app/services/esse3/transcript/transcript.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    @ViewChild('ctx') ctx;

    private chart: any;
    private avg: number;
    private degreeMark: number;
    private acquiredCredits: number;
    private totalCredits: number;
    private exams: Exam[];

    constructor(
        private router: Router,
        private storage: Storage,
        private transcriptService: TranscriptService
    ) {
        this.avg = 28;
        this.degreeMark = 105;
        this.acquiredCredits = 103;
        this.totalCredits = 120;
    }

    ngOnInit() {
        this.storage.get('user').then(user => {
            const matId = user.user.trattiCarriera[0].matId;
            this.transcriptService.getCareerStats(matId);
            this.transcriptService.getExams(matId)
                .subscribe((exams: Exam[]) => {
                    this.exams = exams.filter(exam => exam.passed && exam.grade);

                    const grades = this.exams.map((exam: Exam) => exam.grade);
                    const gradesDist = grades.reduce((data, grade) => {
                        data[grade] = data[grade] + 1 || 1;
                        return data;
                    }, {});

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
                });
        });
    }

    /* Method used only for testing */
    testMethod() {
        this.storage.clear();
        this.router.navigateByUrl('/login');
    }
}
