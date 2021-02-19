import { Storage } from '@ionic/storage';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment, IonSlides, ModalController } from '@ionic/angular';
import { Exam } from 'src/app/interfaces/exam';
import { TranscriptService } from 'src/app/services/esse3/transcript/transcript.service';
import { TranscriptSortModalComponent } from '../components/transcript-sort-modal/transcript-sort-modal.component';
import { TranscriptSortingService } from 'src/app/services/transcript-sorting.service';
import { TranscriptStatsModalComponent } from '../components/transcript-stats-modal/transcript-stats-modal.component';
import { TranscriptExamModalComponent } from '../components/transcript-exam-modal/transcript-exam-modal.component';
import { TranscriptPrevisionModalComponent } from '../components/transcript-prevision-modal/transcript-prevision-modal.component';

@Component({
    selector: 'app-transcript',
    templateUrl: './transcript.page.html',
    styleUrls: ['./transcript.page.scss'],
})
export class TranscriptPage implements OnInit {

    @ViewChild(IonSlides) slides: IonSlides;
    @ViewChild(IonSegment) segment: IonSegment;

    private matId: number;
    private isReady: boolean;
    private activeIndex: number;
    private labels: String[];
    private slideOpts: any;
    private examsList: Exam[][];

    constructor(
        private storage: Storage,
        private transcripts: TranscriptService,
        private modalController: ModalController,
        private transcriptSortingService: TranscriptSortingService
    ) {
        this.examsList = [[], []];
        this.labels = ['Sostenuti', 'Da sostenere'];
        this.activeIndex = 0;
        this.isReady = false;
        this.slideOpts = {
            autoHeight: true,
            spaceBetween: 20
        }

        this.getExams = this.getExams.bind(this);
        this.sortingCallback = this.sortingCallback.bind(this);
    }

    async ngOnInit() {
        const user = await this.storage.get('user');

        this.matId = user.user.trattiCarriera[0].matId;

        this.getExams();
    }

    private getExams() {
        return this.transcripts.getExams(this.matId)
            .subscribe((exams: Exam[]) => {
                exams.forEach(exam => {
                    const index = exam.passed ? 0 : 1;
                    this.examsList[index].push(exam);
                });
                this.isReady = true;
                this.sortingCallback();
            });
    }

    private async sortingCallback() {
        const activeSorting = await this.transcriptSortingService.loadPreferences();

        if (activeSorting) {
            this.transcriptSortingService.sort(
                this.examsList,
                activeSorting.value,
                activeSorting.asc
            );
        }
    }

    private async presentSortingModal() {
        const modal = await this.modalController.create({
            component: TranscriptSortModalComponent,
            componentProps: {
                'confirmCallback': this.sortingCallback
            },
            cssClass: 'app-modal'
        });

        return await modal.present();
    }

    private async presentStatsModal() {
        const modal = await this.modalController.create({
            component: TranscriptStatsModalComponent,
            componentProps: {
                'matId': this.matId,
                'exams': this.examsList[0]
            },
            cssClass: 'app-modal'
        });

        await modal.present();

    }

    private async presentDetailsModal(examId: number) {
        const modal = await this.modalController.create({
            component: TranscriptExamModalComponent,
            componentProps: {
                'matId': this.matId,
                'examId': examId
            },
            cssClass: 'app-modal'
        });

        await modal.present();
    }

    private async presentPrevisionModal(exam: Exam) {
        const modal = await this.modalController.create({
            component: TranscriptPrevisionModalComponent,
            componentProps: {
                'matId': this.matId,
                'exam': exam
            },
            cssClass: 'app-modal'
        });

        await modal.present();
    }

    private getGrade(exam: Exam): number | string {
        if (exam.passed) {
            return exam.grade || 'IDO';
        }

        return '--';
    }

    private async slideTo(event: CustomEvent) {
        const target = event.target as HTMLIonSegmentButtonElement;
        const value = parseInt(target.value);

        await this.slides.slideTo(value);
        this.activeIndex = value;
    }

    private async setActiveIndex() {
        const index = await this.slides.getActiveIndex();

        if (index !== this.activeIndex) {
            const button = this.segment['el'].children[index] as HTMLElement;
            button.click();
        }
    }

}
