import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonSegment, IonSlides, ModalController } from '@ionic/angular';
import { Session } from 'src/app/interfaces/session';
import { SessionsService } from 'src/app/services/agendaweb/sessions/sessions.service';
import { SessionModalComponent } from '../session-modal/session-modal.component';

@Component({
    selector: 'app-sessions-course',
    templateUrl: './sessions-course.component.html',
    styleUrls: ['./sessions-course.component.scss'],
})
export class SessionsCourseComponent implements OnInit {

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
    private sessionsForm: FormGroup;
    private isReady: boolean;
    private searchParams: any[];
    private yearIndex: number;
    private courseIndex: number;
    private courseYearIndex: number;
    private sessions: Session[];


    constructor(
        private sessionsService: SessionsService,
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

        this.sessionsForm = this.formBuilder.group({
            year: new FormControl('', Validators.required),
            course: new FormControl('', Validators.required),
            courseYear: new FormControl('', Validators.required),
            term: new FormControl('', Validators.required)
        });

        this.getSessionsFiltersByCourse = this.getSessionsFiltersByCourse.bind(this);
    }

    ngOnInit() {
        this.getSessionsFiltersByCourse();
    }

    /**
     * Recupera le combo di filtraggio.
     */
    private getSessionsFiltersByCourse() {
        return this.sessionsService.getSessionsFiltersByCourse()
            .subscribe(res => {
                this.isReady = true;
                this.searchParams = res as any[];
            });
    }

    /**
     * Aggiorna la slide alla pressione in base allo specifico Segment Button.
     * 
     * @param event L'evento associato al Segment Button.
     */
    private async slideTo(event: CustomEvent) {
        const target = event.target as HTMLIonSegmentButtonElement;
        const value = parseInt(target.value);

        await this.slides.slideTo(value);
        this.activeIndex = value;
    }

    /**
     * Aggiorna il Segment Button sulla base dell'indice corrente della slide.
     */
    private async setActiveIndex() {
        const index = await this.slides.getActiveIndex();

        if (index !== this.activeIndex) {
            const button = this.segment['el'].children[index] as HTMLElement;
            button.click();
        }
    }

    /**
     * Aggiorna l'indice dell'anno corrente.
     * 
     * @param event L'evento associato allo Ion Select.
     */
    private setYearIndex(event: CustomEvent) {
        if (this.yearIndex !== -1) {
            this.sessionsForm.controls.course.reset();
            this.sessionsForm.controls.courseYear.reset();
            this.sessionsForm.controls.term.reset();
            this.courseIndex = -1;
            this.courseYearIndex = -1;
        }

        this.yearIndex = event.detail.value.index;
    }

    /**
     * Aggiorna l'indice del corso di laurea.
     * 
     * @param event L'evento associato allo Ion Select.
     */
    private setCourseIndex(event: CustomEvent) {
        if (this.courseIndex !== -1) {
            this.sessionsForm.controls.courseYear.reset();
            this.sessionsForm.controls.term.reset();
            this.courseYearIndex = -1;
        }

        this.courseIndex = event.detail.value.index;
    }

    /**
     * Aggiorna l'indice dell'anno del corso di laurea.
     * 
     * @param event L'evento associato allo Ion Select.
     */
    private setCourseYearIndex(event: CustomEvent) {
        if (this.courseYearIndex !== -1) {
            this.sessionsForm.controls.term.reset();
        }

        this.courseYearIndex = event.detail.value.index;
    }

    /**
     * Recupera l'elenco dei corsi di laurea in base all'anno.
     */
    private getCourses(): any {
        if (this.yearIndex === -1) {
            return [];
        }

        return this.searchParams[this.yearIndex].elenco;
    }

    /**
     * Recupera l'elenco degli anni relativi allo specifico corsoo di laurea.
     */
    private getCourseYears(): any {
        if (this.courseIndex === -1) {
            return [];
        }

        return this.getCourses()[this.courseIndex].elenco_anni;
    }

    /**
     * Recupera le sessioni attive sulla base dell'anno di corso selezionato.
     */
    private getTerms(): any {
        if (this.courseYearIndex === -1) {
            return [];
        }

        return this.getCourseYears()[this.courseYearIndex].elenco_sessioni;
    }

    /**
     * Recupera la lista degli appelli sulla base dei filtri selezionati dallo studente.
     */
    private getSessions() {
        this.sessionsService.getSessionsByCourse(
            this.sessionsForm.value.year.value,
            this.sessionsForm.value.course.value,
            this.sessionsForm.value.courseYear.value,
            this.sessionsForm.value.term.value,
        ).subscribe(
            (res: Session[]) => {
                this.sessions = res;
                setTimeout(() => {
                    this.activeIndex++;
                    this.slides.slideTo(this.activeIndex);
                }, 300);
            }
        );
    }

    /**
     * Mostra un modale contenete i dettagli di uno specifico appello.
     * 
     * @param session Lo specifico appello.
     */
    private async getSessionDetails(session: Session) {
        const modal = await this.modalController.create({
            component: SessionModalComponent,
            componentProps: {
                session: session
            },
            cssClass: 'app-modal'
        });

        return await modal.present();
    }

}
