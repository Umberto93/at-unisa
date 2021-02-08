import { IonSlides } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Exam } from 'src/app/interfaces/exam';
import { TranscriptService } from 'src/app/services/esse3/transcript.service';

@Component({
    selector: 'app-transcript',
    templateUrl: './transcript.page.html',
    styleUrls: ['./transcript.page.scss'],
})
export class TranscriptPage implements OnInit {

    @ViewChild(IonSlides) slides: IonSlides;

    private isReady: boolean;
    private activeIndex: number;
    private labels: String[];
    private slideOpts: any;
    private examsList: Exam[][];

    constructor(
        private storage: Storage,
        private transcripts: TranscriptService
    ) {
        this.examsList = [[], []];
        this.labels = ['Sostenuti', 'Da sostenere'];
        this.activeIndex = 0;
        this.isReady = false;
        this.slideOpts = {
            autoHeight: true,
            spaceBetween: 20
        }
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
                    this.isReady = true;
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

    slideTo(event: CustomEvent) {
        const target = event.target as HTMLIonSegmentButtonElement;
        const value = parseInt(target.value);

        this.slides.slideTo(value).then(() => {
            this.activeIndex = value;
        });
    }

    setActiveIndex() {
        this.slides.getActiveIndex().then(index => {
            this.activeIndex = index;
        });
    }

}
