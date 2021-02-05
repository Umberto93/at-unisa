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
    private slideOpts: any;
    private activeSegment: string;
    private labels: any;

    constructor(
        private storage: Storage,
        private transcripts: TranscriptService
    ) {
        this.exams = [];
        this.activeSegment = 'done';
        this.labels = [
            {
                name: 'done',
                displayName: 'Sostenuti'
            },
            {
                name: 'todo',
                displayName: 'Da sostenere'
            }
        ];
    }

    ngOnInit() {
        this.storage.get('user').then(user => {
            const matId = user.user.trattiCarriera[0].matId;
            this.transcripts.getExams(matId)
                .subscribe((exams: Exam[]) => {
                    this.exams = exams;
                    console.log(this.exams);
                });
        });
    }

    _getDoneExams(): Exam[] {
        return this.exams.filter((exam: Exam) => exam.passed);
    }

    _getToDoExams(): Exam[] {
        return this.exams.filter((exam: Exam) => !exam.passed);
    }

    _toggleSlide(slider: any): void {
        slider.isEnd().then((ended: boolean) => {
            if (!ended) {
                slider.slideNext();
            } else {
                slider.slidePrev();
            }
        })
    }

    getExams(examType: string): Exam[] {
        return examType === 'done'
            ? this._getDoneExams()
            : this._getToDoExams();
    }

    handleChange(event: any, slider: any): void {
        if (this.activeSegment !== event.target.value) {
            this.activeSegment = event.target.value;
            this._toggleSlide(slider);
        }
    }

    handleSlideChange(event: any) {
        if (event.target.swiper.activeIndex === 0) {
            this.activeSegment = 'done';
        } else {
            this.activeSegment = 'todo';
        }
    }

    getGrade(exam: Exam): number | string {
        if (exam.passed) {
            return exam.grade || 'IDO';
        }

        return '--';
    }

}
