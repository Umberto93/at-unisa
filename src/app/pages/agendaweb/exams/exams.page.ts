import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonSegment, IonSlides, ModalController } from '@ionic/angular';
import { Session } from 'src/app/interfaces/session';
import { ExamsService } from 'src/app/services/agendaweb/exams/exams.service';
import { ExamModalComponent } from './components/exam-modal/exam-modal.component';

@Component({
    selector: 'app-exams',
    templateUrl: './exams.page.html',
    styleUrls: ['./exams.page.scss'],
})
export class ExamsPage implements OnInit {

    @ViewChild(IonSlides) slides: IonSlides;
    @ViewChild(IonSegment) segment: IonSegment;

    private readonly customActionSheetOptions: any = {
        cssClass: 'form-select-action-sheet',
        header: 'Seleziona',
        mode: 'md'
    };

    private readonly slideOpts: any = {
        autoHeight: true,
        spaceBetween: 20
    };

    private labels: String[];
    private activeIndex: number;
    private examsForm: FormGroup;
    private isReady: boolean;
    private searchParams: any[];
    private yearIndex: number;
    private courseIndex: number;
    private courseYearIndex: number;
    private sessions: Session[];

    constructor(
        private examsService: ExamsService,
        private formBuilder: FormBuilder,
        private modalController: ModalController
    ) {
        this.labels = ['Ricerca', 'Riepilogo'];
        this.activeIndex = 0;
        this.isReady = false;
        this.searchParams = [];
        this.yearIndex = -1;
        this.courseIndex = -1;
        this.courseYearIndex = -1;
        this.sessions = [];

        this.examsForm = this.formBuilder.group({
            year: new FormControl('', Validators.required),
            course: new FormControl('', Validators.required),
            courseYear: new FormControl('', Validators.required),
            term: new FormControl('', Validators.required)
        });
    }

    ngOnInit() {
        this.examsService.getExamsSearchParams()
            .subscribe(res => {
                this.isReady = true;
                this.searchParams = res as any[];
            });
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

    private setYearIndex(event: CustomEvent) {
        if (this.yearIndex !== -1) {
            this.examsForm.controls.course.reset();
            this.examsForm.controls.courseYear.reset();
            this.examsForm.controls.term.reset();
            this.courseIndex = -1;
            this.courseYearIndex = -1;
        }

        this.yearIndex = event.detail.value.index;
    }

    private setCourseIndex(event: CustomEvent) {
        if (this.courseIndex !== -1) {
            this.examsForm.controls.courseYear.reset();
            this.examsForm.controls.term.reset();
            this.courseYearIndex = -1;
        }

        this.courseIndex = event.detail.value.index;
    }

    private setCourseYearIndex(event: CustomEvent) {
        if (this.courseYearIndex !== -1) {
            this.examsForm.controls.term.reset();
        }

        this.courseYearIndex = event.detail.value.index;
    }

    private getCourses(): any {
        if (this.yearIndex === -1) {
            return [];
        }

        return this.searchParams[this.yearIndex].elenco;
    }

    private getCourseYears(): any {
        if (this.courseIndex === -1) {
            return [];
        }

        return this.getCourses()[this.courseIndex].elenco_anni;
    }

    private getTerms(): any {
        if (this.courseYearIndex === -1) {
            return [];
        }

        return this.getCourseYears()[this.courseYearIndex].elenco_sessioni;
    }

    private getSessions() {
        this.examsService.getExams(
            this.examsForm.value.year.value,
            this.examsForm.value.course.value,
            this.examsForm.value.courseYear.value,
            this.examsForm.value.term.value,
        ).subscribe(
            (res: Session[]) => {
                this.sessions = res;
                setTimeout(() => {
                    this.activeIndex++;
                    this.slides.slideTo(this.activeIndex);
                });
            }
        );
    }

    private async getSessionDetails(session: Session) {
        const modal = await this.modalController.create({
            component: ExamModalComponent,
            componentProps: {
                session: session
            },
            cssClass: 'app-modal'
        });

        return await modal.present();
    }

}
