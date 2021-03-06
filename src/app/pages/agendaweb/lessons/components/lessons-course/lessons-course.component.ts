import { KeyValue } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, IonSegment, ModalController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Lesson } from 'src/app/interfaces/lesson';
import { Scheduler } from 'src/app/interfaces/scheduler';
import { LessonModalComponent } from '../lesson-modal/lesson-modal.component';
import { CourseFilterModalComponent } from '../course-filter-modal/course-filter-modal.component';
import { LessonsService } from 'src/app/services/agendaweb/lessons/lessons.service';


@Component({
    selector: 'app-lessons-course',
    templateUrl: './lessons-course.component.html',
    styleUrls: ['./lessons-course.component.scss'],
})
export class LessonsCourseComponent implements OnInit {

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
    private courseIndex: number;
    private courseYearIndex: number;
    private yearOptions: any;
    private courseOptions: any;
    private courseYearOptions: any;

    constructor(
        private lessonsService: LessonsService,
        private formBuilder: FormBuilder,
        private modalController: ModalController
    ) {
        this.labels = ['Ricerca', 'Riepilogo'];
        this.activeIndex = 0;
        this.isReady = false;

        // Set dei corsi di cui visualizzare le lezioni.
        this.lessonsSet = new Set();

        // Indici per le informazioni di riferimento.
        this.yearIndex = -1;
        this.courseIndex = -1;
        this.courseYearIndex = -1;

        // Opzioni select.
        this.yearOptions = {};
        this.courseOptions = [];
        this.courseYearOptions = [];

        this.lessonsForm = this.formBuilder.group({
            year: new FormControl('', Validators.required),
            course: new FormControl('', Validators.required),
            courseYear: new FormControl('', Validators.required),
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
                this.courseIndex = -1;
                this.courseYearIndex = -1;

                // Reset opzioni select e form.
                this.yearOptions = {};
                this.courseOptions = [];
                this.courseYearOptions = [];
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
     * Restituisce le opzioni del select relative al Corso di Studio.
     */
    private getCourses(): any {
        if (this.yearIndex === -1) {
            return [];
        }

        return this.courseOptions;
    }

    /**
     * Restituisce le opzioni del select relative all'Anno di Studio.
     */
    private getCourseYears(): any {
        if (this.courseIndex === -1) {
            return [];
        }

        return this.courseYearOptions;
    }

    /**
     * Restituisce le opzioni del select relative al Periodo Didattico.
     */
    private getTerms() {
        if (this.courseYearIndex === -1) {
            return [];
        }

        return this.courseOptions[this.courseIndex].pub_periodi;
    }

    /**
     * Imposta l'indice relativo all'Anno Accademico di riferimento.
     * 
     * @param event L'evento di change emesso dallo Ion Select.
     */
    private setYearIndex(event: CustomEvent) {
        const optionValue = event.detail.value;

        if (this.yearIndex !== -1) {
            this.lessonsForm.controls.course.reset();
            this.lessonsForm.controls.courseYear.reset();
            this.lessonsForm.controls.term.reset();
            this.courseIndex = -1;
            this.courseYearIndex = -1;
        }

        if (optionValue !== '') {
            this.yearIndex = optionValue.index;

            const activeYear = this.lessonsForm.value.year.value;
            this.lessonsService.getLessonsCourseOptions(activeYear)
                .subscribe((res) => {
                    this.courseOptions = res;
                })
        }
    }

    /**
     * Imposta l'indice relativo al Corso di Stuio di riferimento.
     * 
     * @param event L'evento di change emesso dallo Ion Select.
     */
    private setCourseIndex(event: CustomEvent) {
        const optionValue = event.detail.value;

        if (this.courseIndex !== -1) {
            this.lessonsForm.controls.courseYear.reset();
            this.lessonsForm.controls.term.reset();
            this.courseYearIndex = -1;
        }

        if (optionValue !== '') {
            this.courseIndex = optionValue.index;

            const activeYear = this.lessonsForm.value.year.value;
            const activeCourse = this.lessonsForm.value.course.value;
            this.lessonsService.getLessonsCourseYearsOptions(activeYear, activeCourse)
                .subscribe((res: any) => {
                    this.courseYearOptions = res;
                })
        }
    }

    /**
     * Imposta l'indice relativo all'Anno di Studio di riferimento.
     * 
     * @param event L'evento di change emesso dallo Ion Select.
     */
    private setCourseYearIndex(event: CustomEvent) {
        const optionValue = event.detail.value;

        if (this.courseYearIndex !== -1) {
            this.lessonsForm.controls.term.reset();
        }

        if (optionValue !== '') {
            this.courseYearIndex = optionValue.index;
        }
    }

    /**
     * Recupera il calendario delle lezioni sulla base dell'Anno Accademico,
     * del Corso di Studio, dell'Anno di Studio e del Periodo Didattico di riferimento.
     */
    private getScheduler() {
        this.lessonsService.getLessonsByCourse(
            this.lessonsForm.value.year.value,
            this.lessonsForm.value.course.value,
            this.lessonsForm.value.courseYear.value,
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
