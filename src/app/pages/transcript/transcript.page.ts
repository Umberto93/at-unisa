import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Exam } from 'src/app/interfaces/exam';
import { TranscriptService } from 'src/app/services/esse3/transcript.service';

@Component({
    selector: 'app-transcript',
    templateUrl: './transcript.page.html',
    styleUrls: ['./transcript.page.scss'],
})
export class TranscriptPage implements OnInit {

    @ViewChild(IonSlides) slides: IonSlides;

    private examsList: Exam[][];
    private labels: String[];
    private activeIndex: number;
    private test: boolean;

    constructor(
        private storage: Storage,
        private transcripts: TranscriptService
    ) {
        this.examsList = [[], []];
        this.labels = ['Sostenuti', 'Da sostenere'];
        this.activeIndex = 0;
        this.test = false;
    }

    ngOnInit() {
        this.storage.get('user').then(user => {
            const matId = user.user.trattiCarriera[0].matId;
            this.transcripts.getExams(matId)
                .subscribe((exams: Exam[]) => {
                    exams.forEach(exam => {
                        const index = exam.passed ? 0 : 1;
                        this.examsList[index].push(exam);
                    });
                    this.test = true;
                });
        });
    }

    getDate(exam: Exam): string {
        if (exam.passedDate) {
            return exam.passedDate.split(' ')[0];
        }

        return '--/--/----';
    }

    getGrade(exam: Exam): number | string {
        if (exam.passed) {
            return exam.grade || 'IDO';
        }

        return '--';
    }

    slideTo(event: any): void {
        this.slides.slideTo(event.target.value).then(() => {
            this.activeIndex = event.target.value;
        });
    }

    setActiveIndex(): void {
        this.slides.getActiveIndex().then(index => {
            this.activeIndex = index;
        });
    }

}
