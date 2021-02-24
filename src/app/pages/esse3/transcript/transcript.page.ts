import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment, IonSlides, ModalController } from '@ionic/angular';
import { Exam } from 'src/app/interfaces/exam';
import { TranscriptService } from 'src/app/services/esse3/transcript/transcript.service';
import { SortModalComponent } from './components/sort-modal/sort-modal.component';
import { TranscriptSortingService } from 'src/app/services/transcript-sorting.service';
import { StatsModalComponent } from './components/stats-modal/stats-modal.component';
import { ExamModalComponent } from './components/exam-modal/exam-modal.component';
import { PrevisionModalComponent } from './components/prevision-modal/prevision-modal.component';
import { UserService } from 'src/app/services/user/user.service';

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
        private userService: UserService,
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
        };

        this.getExams = this.getExams.bind(this);
        this.sortingCallback = this.sortingCallback.bind(this);
    }

    ngOnInit() { }

    async ionViewWillEnter() {
        const user = await this.userService.getUser();
        const activeCareer = await this.userService.getActiveCareer() || 0;

        this.matId = user.user.trattiCarriera[activeCareer].matId;
        this.getExams();
    }

    private getExams() {
        return this.transcripts.getExams(this.matId)
            .subscribe((exams: Exam[]) => {
                const examsList = [[], []];

                exams.forEach(exam => {
                    const index = exam.passed ? 0 : 1;
                    examsList[index].push(exam);
                });

                this.examsList = examsList;
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
            component: SortModalComponent,
            componentProps: {
                'confirmCallback': this.sortingCallback
            },
            cssClass: 'app-modal'
        });

        return await modal.present();
    }

    private async presentStatsModal() {
        const modal = await this.modalController.create({
            component: StatsModalComponent,
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
            component: ExamModalComponent,
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
            component: PrevisionModalComponent,
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
