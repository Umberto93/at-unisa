import { KeyValue } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, IonSegment, IonSelect, IonSlides, ModalController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Lesson } from 'src/app/interfaces/lesson';
import { Scheduler } from 'src/app/interfaces/scheduler';
import { LessonModalComponent } from '../lesson-modal/lesson-modal.component';
import { CourseFilterModalComponent } from '../course-filter-modal/course-filter-modal.component';
import { LessonsService } from 'src/app/services/agendaweb/lessons/lessons.service';
import { SearchModalComponent } from 'src/app/pages/components/search-modal/search-modal.component';


@Component({
    selector: 'app-lessons-prof',
    templateUrl: './lessons-prof.component.html',
    styleUrls: ['./lessons-prof.component.scss'],
})
export class LessonsProfComponent implements OnInit {

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

    private readonly daysLabels: any = {
        0: 'Lunedì',
        1: 'Martedì',
        2: 'Mercoledì',
        3: 'Giovedì',
        4: 'Venerdì'
    };

    private labels: String[];
    private activeIndex: number;
    private isReady: boolean;
    private lessonsForm: FormGroup;
    private scheduler: Scheduler;
    private lessonsSet: Set<string>;
    private yearIndex: number;
    private profIndex: number;
    private yearOptions: any;
    private profOptions: any;

    constructor(
        private lessonsService: LessonsService,
        private formBuilder: FormBuilder,
        private modalController: ModalController,
        private actionSheetController: ActionSheetController
    ) {
        this.labels = ['Ricerca', 'Riepilogo'];
        this.activeIndex = 0;
        this.isReady = false;

        // Set dei corsi di cui visualizzare le lezioni.
        this.lessonsSet = new Set();

        // Indici per le informazioni di riferimento.
        this.yearIndex = -1;
        this.profIndex = -1;

        // Opzioni select.
        this.yearOptions = {};
        this.profOptions = [];

        this.lessonsForm = this.formBuilder.group({
            year: new FormControl('', Validators.required),
            prof: new FormControl('', Validators.required),
            term: new FormControl('', Validators.required)
        });

        this.initOperations = this.initOperations.bind(this);
        this.updateSetCallback = this.updateSetCallback.bind(this);
    }

    ngOnInit() {
        this.initOperations();
    }

    /**
     * Permette di inizializzare il componente e di ottenere le opzioni 
     * relative al select per l'Anno Accademico.
     */
    private initOperations() {
        return this.lessonsService.getLessonsYearOptions()
            .subscribe((res: any) => {
                // Reset indici per le informazioni di riferimento.
                this.yearIndex = -1;
                this.profIndex = -1;

                // Reset opzioni select e form.
                this.yearOptions = {};
                this.profOptions = [];
                this.lessonsForm.reset();

                // Aggiornamento dati.
                this.yearOptions = res;
                this.isReady = true;
            })
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
     * Effettua l'ordinamento decrescente delle opzioni relative all'Anno Accademico.
     * 
     * @param a E' la prima coppia <chiave, valore>. La chiave è una stringa che 
     * rappresenta l'Anno Accademico mentre il valore è l'oggetto opzione. 
     * @param b E' la seconda coppia <chiave, valore>. La chiave è una stringa che
     * rappresenta l'Anno Accademico mentre il valore è l'oggetto opzione.
     */
    private descSort(a: KeyValue<string, any>, b: KeyValue<string, any>) {
        return b.key.localeCompare(a.key);
    }

    /**
     * Restituisce le opzioni del select relative all'Anno Accademico.
     */
    private getYears(): any {
        return this.yearOptions;
    }

    /**
     * Restituisce le opzioni del select relative al Docente.
     */
    private getProfs(): any {
        if (this.yearIndex === -1) {
            return [];
        }

        return this.profOptions;
    }

    /**
     * Restituisce le opzioni del select relative al Periodo Didattico.
     */
    private getTerms() {
        if (this.profIndex === -1) {
            return [];
        }

        return this.profOptions[this.profIndex].periodi;
    }

    /**
     * Imposta l'indice relativo all'Anno Accademico di riferimento.
     * 
     * @param event L'evento di change emesso dallo Ion Select.
     */
    private setYearIndex(event: CustomEvent) {
        const optionValue = event.detail.value;

        if (this.yearIndex !== -1) {
            this.lessonsForm.controls.prof.reset();
            this.lessonsForm.controls.term.reset();
            this.profIndex = -1;
        }

        if (optionValue !== '') {
            this.yearIndex = optionValue.index;

            const activeYear = this.lessonsForm.value.year.value;
            this.lessonsService.getLessonsProfOptions(activeYear)
                .subscribe((res) => {
                    this.profOptions = res;
                })
        }
    }

    /**
     * Imposta l'indice relativo al Docente di riferimento.
     * 
     * @param event L'evento di change emesso dallo Ion Select.
     */
    private setProfIndex(event: CustomEvent) {
        const optionValue = event.detail.value;

        if (this.profIndex !== -1) {
            this.lessonsForm.controls.term.reset();
        }

        if (optionValue !== '') {
            this.profIndex = optionValue.index;
        }
    }

    /**
     * Recupera il calendario delle lezioni sulla base dell'Anno Accademico,
     * del Docente e del Periodo Didattico di riferimento.
     */
    private getScheduler() {
        this.lessonsService.getLessonsByProf(
            this.lessonsForm.value.year.value,
            this.lessonsForm.value.prof.value,
            this.lessonsForm.value.term.value,
        ).subscribe(
            (scheduler: Scheduler) => {
                this.scheduler = scheduler;
                this.lessonsSet = new Set(Object.keys(scheduler.legend));

                setTimeout(() => {
                    this.activeIndex++;
                    this.slides.slideTo(this.activeIndex);
                }, 300);
            }
        );
    }

    /**
     * Restituisce l'orario delle lezioni.
     */
    private getSchedule() {
        return this.scheduler.schedule;
    }

    /**
     * Restituisce la legenda dei corsi presenti nell'orario delle lezioni.
     */
    private getLegend() {
        return this.scheduler.legend;
    }

    /**
     * Restituisce le lezioni sulla base del filtro applicato dall'utente.
     * 
     * @param lessons Le lezioni relative ad un certo giorno della settimana.
     */
    private getLessons(lessons: Lesson[]) {
        return lessons
            .filter((lesson: Lesson) => this.lessonsSet.has(lesson.teachingCode));
    }

    /**
     * Permette di ottenere il giorno della settimana associato al relativo indice intero. 
     * 
     * @param dayIndex L'indice intero che identifica il giorno della settimana. 
     */
    private getDay(dayIndex: number) {
        return this.daysLabels[dayIndex];
    }

    /**
     * Mostra un modale per poter effettuare un filtraggio attraverso cui selezionare
     * i corsi di cui si intende visualizzare le lezioni.
     * 
     * @param courses Rappresenta la legenda dei corsi.
     * @param checkedSet Rappresenta un Set contenente i codici dei corsi di cui si intende
     * visualizzarne le lezioni.
     * @param confirmCallback Rappresenta una callback che verrà invocata durante la chiusura
     * del modale.
     */
    private async presentCourseFilterModal() {
        const modal = await this.modalController.create({
            component: CourseFilterModalComponent,
            componentProps: {
                courses: this.scheduler.legend,
                checkedSet: this.lessonsSet,
                confirmCallback: this.updateSetCallback
            },
            cssClass: 'app-modal',
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
                options: this.profOptions.map((prof: any) => {
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
                const index = this.profOptions.findIndex((prof: any) => prof.valore === value);
                
                select.value = {
                    index: index,
                    value: value
                };
            }
        });

        await modal.present();
    }

    /**
     * Permette di aggiornare il Set dei corsi di cui si intende visualizzarne le lezioni.
     * 
     * @param newSet Indica il nuovo Set. 
     */
    private updateSetCallback(newSet: Set<string>) {
        this.lessonsSet = newSet;
        // Aggiornamento altezza slide.
        setTimeout(() => { this.slides.update() }, 300);
    }

    /**
     * Mostra un modale per poter visualizzare i dettagli di una lezione.
     * 
     * @param lesson Indica la lezione di riferimento.
     */
    private async presentLessonModal(lesson: Lesson) {
        const modal = await this.modalController.create({
            component: LessonModalComponent,
            componentProps: {
                lesson: lesson
            },
            cssClass: 'app-modal'
        })

        return await modal.present();
    }

}
