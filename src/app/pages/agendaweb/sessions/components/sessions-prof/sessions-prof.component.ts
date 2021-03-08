import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonSegment, IonSelect, IonSlides, ModalController } from '@ionic/angular';
import { Session } from 'src/app/interfaces/session';
import { SearchModalComponent } from 'src/app/pages/components/search-modal/search-modal.component';
import { SessionsService } from 'src/app/services/agendaweb/sessions/sessions.service';
import { SessionModalComponent } from '../session-modal/session-modal.component';

@Component({
    selector: 'app-sessions-prof',
    templateUrl: './sessions-prof.component.html',
    styleUrls: ['./sessions-prof.component.scss'],
})
export class SessionsProfComponent implements OnInit {

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
    private profIndex: number;
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
        this.profIndex = -1;
        this.sessions = [];

        this.sessionsForm = this.formBuilder.group({
            year: new FormControl('', Validators.required),
            prof: new FormControl('', Validators.required),
            term: new FormControl('', Validators.required)
        });

        this.getSessionsFiltersByProf = this.getSessionsFiltersByProf.bind(this);
    }

    ngOnInit() {
        this.getSessionsFiltersByProf();
    }

    /**
     * Recupera le combo di filtraggio.
     */
    private getSessionsFiltersByProf() {
        return this.sessionsService.getSessionsFiltersByProf()
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
     * Imposta l'anno corrente.
     * 
     * @param event L'evento associato allo Ion Select.
     */
    private setYearIndex(event: CustomEvent) {
        if (this.yearIndex !== -1) {
            this.sessionsForm.controls.prof.reset();
            this.sessionsForm.controls.term.reset();
            this.profIndex = -1;
        }

        this.yearIndex = event.detail.value.index;
    }

    /**
     * Imposta l'indice del professore selezionato.
     * 
     * @param event L'evento associato allo Ion Select.
     */
    private setProfIndex(event: CustomEvent) {
        if (this.profIndex !== -1) {
            this.sessionsForm.controls.term.reset();
        }

        this.profIndex = event.detail.value.index;
    }

    /**
     * Recupera l'elenco dei docenti sulla base dell'anno selezionato.
     */
    private getProfs(): any {
        if (this.yearIndex === -1) {
            return [];
        }

        return this.searchParams[this.yearIndex].elenco;
    }

    /**
     * Recupera l'elenco delle sessioni attive sulla base dello specifico docente.
     */
    private getTerms(): any {
        if (this.profIndex === -1) {
            return [];
        }

        return this.getProfs()[this.profIndex].elenco;
    }

    /**
     * Recupera il calendario degli appelli relativo allo specifico docente.
     */
    private getSessions() {
        this.sessionsService.getSessionsByProf(
            this.sessionsForm.value.year.value,
            this.sessionsForm.value.prof.value,
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
     * Mostra un modale contenente i dati relativi allo specifico appello d'esame.
     * 
     * @param session Lo specifico appello d'esame.
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

    /**
     * Mostra un modale per la selezione del docente.
     * 
     * @param select Lo IonSelect a cui assegnare il valore di ritorno del modale.
     */
    private async presentProfSearchModal(select: IonSelect) {
        const modal = await this.modalController.create({
            component: SearchModalComponent,
            componentProps: {
                options: this.getProfs().map((prof: any) => {
                    return {
                        label: prof.label,
                        value: prof.valore
                    };
                }),
                title: 'Seleziona'
            },
            cssClass: 'app-modal'
        });

        modal.onWillDismiss().then((modal: any) => {
            if (modal.data) {
                const value = modal.data;
                const index = this.getProfs().findIndex((prof: any) => prof.valore === value);
                
                select.value = {
                    index: index,
                    value: value
                };
            }
        });

        await modal.present();
    }

}
