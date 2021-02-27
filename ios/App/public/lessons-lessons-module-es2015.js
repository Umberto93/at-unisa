(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lessons-lessons-module"],{

/***/ "/4rY":
/*!***********************************************************!*\
  !*** ./src/app/pages/agendaweb/lessons/lessons.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZXNzb25zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "0QUc":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agendaweb/lessons/lessons.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"page-content\">\n    <app-lessons-course *ngIf=\"searchBy === 'course'\"></app-lessons-course>\n    <app-lessons-prof *ngIf=\"searchBy === 'prof'\"></app-lessons-prof>\n</ion-content>\n");

/***/ }),

/***/ "98Zd":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/agendaweb/lessons/components/course-filter-modal/course-filter-modal.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CourseFilterModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseFilterModalComponent", function() { return CourseFilterModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_course_filter_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./course-filter-modal.component.html */ "9NBu");
/* harmony import */ var _course_filter_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-filter-modal.component.scss */ "ps91");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let CourseFilterModalComponent = class CourseFilterModalComponent {
    constructor(navParams) {
        this.navParams = navParams;
        this.courses = this.navParams.get('courses');
        /* Set contenente i codici dei corsi di cui l'utente sta attualmente visualizzando
         * le lezioni.
         */
        this.checkedSet = this.navParams.get('checkedSet');
        /* Nuovo Set contenente i nuovi codici dei corsi di cui l'utente vorrà visualizzare
         * le lezioni
         */
        this.lessonsSet = new Set(this.checkedSet);
        this.confirmCallback = this.navParams.get('confirmCallback');
        this.filterCallback = this.filterCallback.bind(this);
    }
    ngOnInit() { }
    /**
     * Effettua l'ordinamento crescente delle opzioni mostrate nel modale.
     *
     * @param a E' la prima coppia <chiave, valore>. La chiave è una stringa che
     * rappresenta il codice di un corso mentre il valore ne rappresenta il nome.
     * @param b E' la seconda coppia <chiave, valore>. La chiave è una stringa che
     * rappresenta il codice di un corso mentre il valore ne rappresenta il nome.
     */
    ascSort(a, b) {
        return a.value.localeCompare(b.value);
    }
    /**
     * Permette di verificare se l'opzione in esame è associata a un corso di cui
     * l'utente desidera visualizzare le lezioni.
     * Il metodo verifica la presenza del codice del corso, passato come parametro
     * di input, all'interno del checkedSet (parametro passato come input al componente).
     *
     * @param key Indica il codice dell'esame.
     */
    isChecked(key) {
        return this.checkedSet.has(key);
    }
    /**
     * Permette di aggiornare il lessonsSet (nuovo Set) sulla base dell'opzione
     * selezionata/deselezionata.
     *
     * @param event L'evento di change della Ion Checkbox.
     */
    handleChange(event) {
        const detail = event.detail;
        const checked = detail.checked;
        const value = detail.value;
        if (!checked) {
            this.lessonsSet.delete(value);
        }
        else {
            this.lessonsSet.add(value);
        }
    }
    /**
     * Callback per effettuare il filtraggio delle lezioni sulla base del lessonsSet
     * (nuovo Set).
     */
    filterCallback() {
        this.confirmCallback(this.lessonsSet);
    }
};
CourseFilterModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] }
];
CourseFilterModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-course-filter-modal',
        template: _raw_loader_course_filter_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_course_filter_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CourseFilterModalComponent);



/***/ }),

/***/ "9NBu":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agendaweb/lessons/components/course-filter-modal/course-filter-modal.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-modal\n    title=\"Seleziona insegnamenti\"\n    [confirmButton]=\"true\"\n    [confirmCallback]=\"filterCallback\"\n>\n    <ion-list>\n        <ion-item *ngFor=\"let course of courses | keyvalue: ascSort\">\n            <ion-label>{{course.value}}</ion-label>\n            <ion-checkbox\n                slot=\"end\"\n                [value]=\"course.key\"\n                [checked]=\"isChecked(course.key)\"\n                (ionChange)=\"handleChange($event)\"\n            ></ion-checkbox>\n        </ion-item>\n    </ion-list>\n</app-modal>\n");

/***/ }),

/***/ "DeCB":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/agendaweb/lessons/components/lessons-prof/lessons-prof.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: LessonsProfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonsProfComponent", function() { return LessonsProfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lessons_prof_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lessons-prof.component.html */ "d+RO");
/* harmony import */ var _lessons_prof_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lessons-prof.component.scss */ "IrJl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _lesson_modal_lesson_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lesson-modal/lesson-modal.component */ "lkMg");
/* harmony import */ var _course_filter_modal_course_filter_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../course-filter-modal/course-filter-modal.component */ "98Zd");
/* harmony import */ var src_app_services_agendaweb_lessons_lessons_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/agendaweb/lessons/lessons.service */ "y9px");









let LessonsProfComponent = class LessonsProfComponent {
    constructor(lessonsService, formBuilder, modalController) {
        this.lessonsService = lessonsService;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.customActionSheetOptions = {
            cssClass: 'form-select-action-sheet',
            header: 'Seleziona',
            mode: 'md'
        };
        this.slideOpts = {
            autoHeight: true,
            spaceBetween: 20
        };
        this.daysLabels = {
            0: 'Lunedì',
            1: 'Martedì',
            2: 'Mercoledì',
            3: 'Giovedì',
            4: 'Venerdì'
        };
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
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            prof: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            term: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
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
    initOperations() {
        return this.lessonsService.getLessonsYearOptions()
            .subscribe((res) => {
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
        });
    }
    /**
     * Aggiorna la slide alla pressione in base allo specifico Segment Button.
     *
     * @param event L'evento associato al Segment Button.
     */
    slideTo(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const target = event.target;
            const value = parseInt(target.value);
            yield this.slides.slideTo(value);
            this.activeIndex = value;
        });
    }
    /**
     * Aggiorna il Segment Button sulla base dell'indice corrente della slide.
     */
    setActiveIndex() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const index = yield this.slides.getActiveIndex();
            if (index !== this.activeIndex) {
                const button = this.segment['el'].children[index];
                button.click();
            }
        });
    }
    /**
     * Effettua l'ordinamento decrescente delle opzioni relative all'Anno Accademico.
     *
     * @param a E' la prima coppia <chiave, valore>. La chiave è una stringa che
     * rappresenta l'Anno Accademico mentre il valore è l'oggetto opzione.
     * @param b E' la seconda coppia <chiave, valore>. La chiave è una stringa che
     * rappresenta l'Anno Accademico mentre il valore è l'oggetto opzione.
     */
    descSort(a, b) {
        return b.key.localeCompare(a.key);
    }
    /**
     * Restituisce le opzioni del select relative all'Anno Accademico.
     */
    getYears() {
        return this.yearOptions;
    }
    /**
     * Restituisce le opzioni del select relative al Docente.
     */
    getProfs() {
        if (this.yearIndex === -1) {
            return [];
        }
        return this.profOptions;
    }
    /**
     * Restituisce le opzioni del select relative al Periodo Didattico.
     */
    getTerms() {
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
    setYearIndex(event) {
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
            });
        }
    }
    /**
     * Imposta l'indice relativo al Docente di riferimento.
     *
     * @param event L'evento di change emesso dallo Ion Select.
     */
    setProfIndex(event) {
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
    getScheduler() {
        this.lessonsService.getLessonsByProf(this.lessonsForm.value.year.value, this.lessonsForm.value.prof.value, this.lessonsForm.value.term.value).subscribe((scheduler) => {
            this.scheduler = scheduler;
            this.lessonsSet = new Set(Object.keys(scheduler.legend));
            setTimeout(() => {
                this.activeIndex++;
                this.slides.slideTo(this.activeIndex);
            }, 300);
        });
    }
    /**
     * Restituisce l'orario delle lezioni.
     */
    getSchedule() {
        return this.scheduler.schedule;
    }
    /**
     * Restituisce la legenda dei corsi presenti nell'orario delle lezioni.
     */
    getLegend() {
        return this.scheduler.legend;
    }
    /**
     * Restituisce le lezioni sulla base del filtro applicato dall'utente.
     *
     * @param lessons Le lezioni relative ad un certo giorno della settimana.
     */
    getLessons(lessons) {
        return lessons
            .filter((lesson) => this.lessonsSet.has(lesson.teachingCode));
    }
    /**
     * Permette di ottenere il giorno della settimana associato al relativo indice intero.
     *
     * @param dayIndex L'indice intero che identifica il giorno della settimana.
     */
    getDay(dayIndex) {
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
    presentCourseFilterModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _course_filter_modal_course_filter_modal_component__WEBPACK_IMPORTED_MODULE_7__["CourseFilterModalComponent"],
                componentProps: {
                    courses: this.scheduler.legend,
                    checkedSet: this.lessonsSet,
                    confirmCallback: this.updateSetCallback
                },
                cssClass: 'app-modal',
            });
            return yield modal.present();
        });
    }
    /**
     * Permette di aggiornare il Set dei corsi di cui si intende visualizzarne le lezioni.
     *
     * @param newSet Indica il nuovo Set.
     */
    updateSetCallback(newSet) {
        this.lessonsSet = newSet;
        // Aggiornamento altezza slide.
        setTimeout(() => { this.slides.update(); }, 300);
    }
    /**
     * Mostra un modale per poter visualizzare i dettagli di una lezione.
     *
     * @param lesson Indica la lezione di riferimento.
     */
    presentLessonModal(lesson) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _lesson_modal_lesson_modal_component__WEBPACK_IMPORTED_MODULE_6__["LessonModalComponent"],
                componentProps: {
                    lesson: lesson
                },
                cssClass: 'app-modal'
            });
            return yield modal.present();
        });
    }
};
LessonsProfComponent.ctorParameters = () => [
    { type: src_app_services_agendaweb_lessons_lessons_service__WEBPACK_IMPORTED_MODULE_8__["LessonsService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
LessonsProfComponent.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"],] }],
    segment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSegment"],] }]
};
LessonsProfComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lessons-prof',
        template: _raw_loader_lessons_prof_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lessons_prof_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LessonsProfComponent);



/***/ }),

/***/ "IrJl":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/agendaweb/lessons/components/lessons-prof/lessons-prof.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slide:first-child ion-item::part(native) {\n  align-items: flex-start;\n  flex-direction: column;\n}\nion-slide:first-child ion-label {\n  transform: scale(1);\n  font-size: 16px;\n  font-weight: var(--ion-font-weight-semibold);\n}\nion-slide form {\n  width: 100%;\n}\n.app-list {\n  margin-bottom: 30px;\n}\n.app-list ion-select {\n  padding: 0;\n  font-size: 14px;\n}\n.app-list ion-select::part(placeholder) {\n  color: var(--ion-color-unisa-base);\n  opacity: 1;\n}\n.app-list ion-select::part(icon) {\n  display: none;\n}\n.app-list ion-datetime {\n  padding: 0;\n  color: var(--ion-color-unisa-base);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhZ2VuZGF3ZWIucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGxlc3NvbnMtcHJvZi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7QUNEWjtBRElRO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7QUNGWjtBRE1JO0VBQ0ksV0FBQTtBQ0pSO0FEUUE7RUFDSSxtQkFBQTtBQ0xKO0FET0k7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQ0xSO0FET1E7RUFDSSxrQ0FBQTtFQUNBLFVBQUE7QUNMWjtBRFFRO0VBQ0ksYUFBQTtBQ05aO0FEVUk7RUFDSSxVQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0FDUlIiLCJmaWxlIjoibGVzc29ucy1wcm9mLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlIHtcclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIGlvbi1pdGVtOjpwYXJ0KG5hdGl2ZSkge1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWlvbi1mb250LXdlaWdodC1zZW1pYm9sZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvcm0ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYXBwLWxpc3Qge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgICBpb24tc2VsZWN0IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICAgICAgJjo6cGFydChwbGFjZWhvbGRlcikge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXVuaXNhLWJhc2UpO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6cGFydChpY29uKSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1kYXRldGltZSB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXVuaXNhLWJhc2UpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxufVxyXG4iLCJpb24tc2xpZGU6Zmlyc3QtY2hpbGQgaW9uLWl0ZW06OnBhcnQobmF0aXZlKSB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuaW9uLXNsaWRlOmZpcnN0LWNoaWxkIGlvbi1sYWJlbCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWlvbi1mb250LXdlaWdodC1zZW1pYm9sZCk7XG59XG5pb24tc2xpZGUgZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYXBwLWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmFwcC1saXN0IGlvbi1zZWxlY3Qge1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uYXBwLWxpc3QgaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlcikge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXVuaXNhLWJhc2UpO1xuICBvcGFjaXR5OiAxO1xufVxuLmFwcC1saXN0IGlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmFwcC1saXN0IGlvbi1kYXRldGltZSB7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdW5pc2EtYmFzZSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */");

/***/ }),

/***/ "SS/C":
/*!*********************************************************!*\
  !*** ./src/app/pages/agendaweb/lessons/lessons.page.ts ***!
  \*********************************************************/
/*! exports provided: LessonsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonsPage", function() { return LessonsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lessons_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lessons.page.html */ "0QUc");
/* harmony import */ var _lessons_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lessons.page.scss */ "/4rY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let LessonsPage = class LessonsPage {
    constructor(route) {
        this.route = route;
        this.searchBy = 'course';
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params['searchBy']) {
                this.searchBy = params['searchBy'];
            }
        });
    }
};
LessonsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
LessonsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lessons',
        template: _raw_loader_lessons_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lessons_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LessonsPage);



/***/ }),

/***/ "d+RO":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agendaweb/lessons/components/lessons-prof/lessons-prof.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-refresher [refreshCallback]=\"initOperations\"></app-refresher>\n<div class=\"flex flex-direction-column\">\n    <app-header>\n        <ion-toolbar>\n            <ion-title class=\"page-title\">Lezioni (Docente)</ion-title>\n            <ion-buttons slot=\"end\">\n                <ion-button\n                    class=\"ion-no-margin\"\n                    [disabled]=\"!scheduler\"\n                    (click)=\"presentCourseFilterModal()\"\n                >\n                    <i class=\"fas fa-eye app-icon\"></i>\n                </ion-button>\n            </ion-buttons>\n        </ion-toolbar>\n        <ion-toolbar class=\"segment-toolbar\">\n            <ion-segment\n                [value]=\"activeIndex\"\n                (ionChange)=\"slideTo($event)\"\n                swipeGesture=\"false\"\n            >\n                <ion-segment-button\n                    *ngFor=\"let label of labels; index as i\"\n                    [value]=\"i\"\n                >\n                    <ion-label>{{label}}</ion-label>\n                </ion-segment-button>\n            </ion-segment>\n        </ion-toolbar>\n    </app-header>\n    <div class=\"page-main\">\n        <ion-slides\n            *ngIf=\"isReady\"\n            (ionSlideWillChange)=\"setActiveIndex()\"\n            [options]=\"slideOpts\"\n        >\n            <ion-slide>\n                <form\n                    [formGroup]=\"lessonsForm\"\n                    (submit)=\"getScheduler()\"\n                >\n                    <ion-list class=\"app-list\">\n                        <ion-item>\n                            <ion-label>\n                                <h3>Anno accademico</h3>\n                            </ion-label>\n                            <ion-select\n                                cancelText=\"Cancella\"\n                                formControlName=\"year\"\n                                interface=\"action-sheet\"\n                                placeholder=\"Seleziona\"\n                                [interfaceOptions]=\"customActionSheetOptions\"\n                                (ionChange)=\"setYearIndex($event)\"\n                            >\n                                <ion-select-option\n                                    *ngFor=\"let year of getYears() | keyvalue: descSort; index as i\"\n                                    [value]=\"{index: i, value: year.value.valore}\"\n                                >\n                                    {{year.value.label}}\n                                </ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                        <ion-item [disabled]=\"yearIndex === -1\">\n                            <ion-label>\n                                <h3>Docente</h3>\n                            </ion-label>\n                            <ion-select\n                                cancelText=\"Cancella\"\n                                formControlName=\"prof\"\n                                placeholder=\"Seleziona\"\n                                interface=\"action-sheet\"\n                                [interfaceOptions]=\"customActionSheetOptions\"\n                                (ionChange)=\"setProfIndex($event)\"\n                            >\n                                <ion-select-option\n                                    *ngFor=\"let prof of getProfs(); index as i\"\n                                    [value]=\"{index: i, value: prof.valore}\"\n                                >\n                                    {{prof.label}}\n                                </ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                        <ion-item [disabled]=\"profIndex === -1\">\n                            <ion-label>\n                                <h3>Periodo Didattico</h3>\n                            </ion-label>\n                            <ion-select\n                                cancelText=\"Cancella\"\n                                formControlName=\"term\"\n                                placeholder=\"Seleziona\"\n                                interface=\"action-sheet\"\n                                [interfaceOptions]=\"customActionSheetOptions\"\n                            >\n                                <ion-select-option\n                                    *ngFor=\"let term of getTerms(); index as i\"\n                                    [value]=\"{index: i, value: term.valore}\"\n                                >\n                                    {{term.label}}\n                                </ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                    </ion-list>\n                    <ion-button\n                        class=\"form-submit form-submit--button\"\n                        type=\"submit\"\n                        [disabled]=\"!lessonsForm.valid\"\n                    >\n                        Cerca\n                    </ion-button>\n                </form>\n            </ion-slide>\n            <ion-slide>\n                <ion-list class=\"app-list\">\n                    <ng-container *ngIf=\"scheduler\">\n                        <ng-container *ngFor=\"let schedule of getSchedule() | keyvalue\">\n                            <ion-list-header>\n                                <ion-label>{{getDay(schedule.key)}}</ion-label>\n                            </ion-list-header>\n                            <ion-item\n                                *ngFor=\"let lesson of getLessons(schedule.value)\"\n                                (click)=\"presentLessonModal(lesson)\"\n                            >\n                                <ion-label>\n                                    <h3>{{lesson.name}}</h3>\n                                    <div>\n                                        <i class=\"far fa-calendar\"></i>\n                                        <span>\n                                            {{lesson.timeStart}} - {{lesson.timeEnd}}\n                                        </span>\n                                    </div>\n                                    <div>\n                                        <i class=\"fas fa-map\"></i>\n                                        <span>{{lesson.room}}</span>\n                                    </div>\n                                </ion-label>\n                            </ion-item>\n                        </ng-container>\n                    </ng-container>\n                    <ion-item *ngIf=\"!scheduler\">Nessun elemento da mostrare.</ion-item>\n                </ion-list>\n            </ion-slide>\n        </ion-slides>\n    </div>\n</div>\n");

/***/ }),

/***/ "dsNC":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agendaweb/lessons/components/lessons-course/lessons-course.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-refresher [refreshCallback]=\"initOperations\"></app-refresher>\n<div class=\"flex flex-direction-column\">\n    <app-header>\n        <ion-toolbar>\n            <ion-title class=\"page-title\">Lezioni (Insegnamento)</ion-title>\n            <ion-buttons slot=\"end\">\n                <ion-button\n                    class=\"ion-no-margin\"\n                    [disabled]=\"!scheduler\"\n                    (click)=\"presentCourseFilterModal()\"\n                >\n                    <i class=\"fas fa-eye app-icon\"></i>\n                </ion-button>\n            </ion-buttons>\n        </ion-toolbar>\n        <ion-toolbar class=\"segment-toolbar\">\n            <ion-segment\n                [value]=\"activeIndex\"\n                (ionChange)=\"slideTo($event)\"\n                swipeGesture=\"false\"\n            >\n                <ion-segment-button\n                    *ngFor=\"let label of labels; index as i\"\n                    [value]=\"i\"\n                >\n                    <ion-label>{{label}}</ion-label>\n                </ion-segment-button>\n            </ion-segment>\n        </ion-toolbar>\n    </app-header>\n    <div class=\"page-main\">\n        <ion-slides\n            *ngIf=\"isReady\"\n            (ionSlideWillChange)=\"setActiveIndex()\"\n            [options]=\"slideOpts\"\n        >\n            <ion-slide>\n                <form\n                    [formGroup]=\"lessonsForm\"\n                    (submit)=\"getScheduler()\"\n                >\n                    <ion-list class=\"app-list\">\n                        <ion-item>\n                            <ion-label>\n                                <h3>Anno accademico</h3>\n                            </ion-label>\n                            <ion-select\n                                cancelText=\"Cancella\"\n                                formControlName=\"year\"\n                                interface=\"action-sheet\"\n                                placeholder=\"Seleziona\"\n                                [interfaceOptions]=\"customActionSheetOptions\"\n                                (ionChange)=\"setYearIndex($event)\"\n                            >\n                                <ion-select-option\n                                    *ngFor=\"let year of getYears() | keyvalue: descSort; index as i\"\n                                    [value]=\"{index: i, value: year.value.valore}\"\n                                >\n                                    {{year.value.label}}\n                                </ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                        <ion-item [disabled]=\"yearIndex === -1\">\n                            <ion-label>\n                                <h3>Corso di studio</h3>\n                            </ion-label>\n                            <ion-select\n                                cancelText=\"Cancella\"\n                                formControlName=\"course\"\n                                placeholder=\"Seleziona\"\n                                interface=\"action-sheet\"\n                                [interfaceOptions]=\"customActionSheetOptions\"\n                                (ionChange)=\"setCourseIndex($event)\"\n                            >\n                                <ion-select-option\n                                    *ngFor=\"let course of getCourses(); index as i\"\n                                    [value]=\"{index: i, value: course.valore}\"\n                                >\n                                    [{{course.valore}}] - {{course.label}}\n                                </ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                        <ion-item [disabled]=\"courseIndex === -1\">\n                            <ion-label>\n                                <h3>Anno di studio</h3>\n                            </ion-label>\n                            <ion-select\n                                cancelText=\"Cancella\"\n                                formControlName=\"courseYear\"\n                                placeholder=\"Seleziona\"\n                                interface=\"action-sheet\"\n                                [interfaceOptions]=\"customActionSheetOptions\"\n                                (ionChange)=\"setCourseYearIndex($event)\"\n                            >\n                                <ion-select-option\n                                    *ngFor=\"let courseYear of getCourseYears(); index as i\"\n                                    [value]=\"{index: i, value: courseYear.valore}\"\n                                >\n                                    {{courseYear.label}}\n                                </ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                        <ion-item [disabled]=\"courseYearIndex === -1\">\n                            <ion-label>\n                                <h3>Periodo Didattico</h3>\n                            </ion-label>\n                            <ion-select\n                                cancelText=\"Cancella\"\n                                formControlName=\"term\"\n                                placeholder=\"Seleziona\"\n                                interface=\"action-sheet\"\n                                [interfaceOptions]=\"customActionSheetOptions\"\n                            >\n                                <ion-select-option\n                                    *ngFor=\"let term of getTerms(); index as i\"\n                                    [value]=\"{index: i, value: term.valore}\"\n                                >\n                                    {{term.label}}\n                                </ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                    </ion-list>\n                    <ion-button\n                        class=\"form-submit form-submit--button\"\n                        type=\"submit\"\n                        [disabled]=\"!lessonsForm.valid\"\n                    >\n                        Cerca\n                    </ion-button>\n                </form>\n            </ion-slide>\n            <ion-slide>\n                <ion-list class=\"app-list\">\n                    <ng-container *ngIf=\"scheduler\">\n                        <ng-container *ngFor=\"let schedule of getSchedule() | keyvalue\">\n                            <ion-list-header>\n                                <ion-label>{{getDay(schedule.key)}}</ion-label>\n                            </ion-list-header>\n                            <ion-item\n                                *ngFor=\"let lesson of getLessons(schedule.value)\"\n                                (click)=\"presentLessonModal(lesson)\"\n                            >\n                                <ion-label>\n                                    <h3>{{lesson.name}}</h3>\n                                    <div>\n                                        <i class=\"far fa-calendar\"></i>\n                                        <span>\n                                            {{lesson.timeStart}} - {{lesson.timeEnd}}\n                                        </span>\n                                    </div>\n                                    <div>\n                                        <i class=\"fas fa-map\"></i>\n                                        <span>{{lesson.room}}</span>\n                                    </div>\n                                </ion-label>\n                            </ion-item>\n                        </ng-container>\n                    </ng-container>\n                    <ion-item *ngIf=\"!scheduler\">Nessun elemento da mostrare.</ion-item>\n                </ion-list>\n            </ion-slide>\n        </ion-slides>\n    </div>\n</div>\n");

/***/ }),

/***/ "j3Hh":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/agendaweb/lessons/components/lessons-course/lessons-course.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slide:first-child ion-item::part(native) {\n  align-items: flex-start;\n  flex-direction: column;\n}\nion-slide:first-child ion-label {\n  transform: scale(1);\n  font-size: 16px;\n  font-weight: var(--ion-font-weight-semibold);\n}\nion-slide form {\n  width: 100%;\n}\n.app-list {\n  margin-bottom: 30px;\n}\n.app-list ion-select {\n  padding: 0;\n  font-size: 14px;\n}\n.app-list ion-select::part(placeholder) {\n  color: var(--ion-color-unisa-base);\n  opacity: 1;\n}\n.app-list ion-select::part(icon) {\n  display: none;\n}\n.app-list ion-datetime {\n  padding: 0;\n  color: var(--ion-color-unisa-base);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhZ2VuZGF3ZWIucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGxlc3NvbnMtY291cnNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksdUJBQUE7RUFDQSxzQkFBQTtBQ0RaO0FESVE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtBQ0ZaO0FETUk7RUFDSSxXQUFBO0FDSlI7QURRQTtFQUNJLG1CQUFBO0FDTEo7QURPSTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FDTFI7QURPUTtFQUNJLGtDQUFBO0VBQ0EsVUFBQTtBQ0xaO0FEUVE7RUFDSSxhQUFBO0FDTlo7QURVSTtFQUNJLFVBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7QUNSUiIsImZpbGUiOiJsZXNzb25zLWNvdXJzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZSB7XHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBpb24taXRlbTo6cGFydChuYXRpdmUpIHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1pb24tZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3JtIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmFwcC1saXN0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgaW9uLXNlbGVjdCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgICAgICY6OnBhcnQocGxhY2Vob2xkZXIpIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci11bmlzYS1iYXNlKTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6OnBhcnQoaWNvbikge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tZGF0ZXRpbWUge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci11bmlzYS1iYXNlKTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbn1cclxuIiwiaW9uLXNsaWRlOmZpcnN0LWNoaWxkIGlvbi1pdGVtOjpwYXJ0KG5hdGl2ZSkge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbmlvbi1zbGlkZTpmaXJzdC1jaGlsZCBpb24tbGFiZWwge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1pb24tZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xufVxuaW9uLXNsaWRlIGZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFwcC1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5hcHAtbGlzdCBpb24tc2VsZWN0IHtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmFwcC1saXN0IGlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci11bmlzYS1iYXNlKTtcbiAgb3BhY2l0eTogMTtcbn1cbi5hcHAtbGlzdCBpb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5hcHAtbGlzdCBpb24tZGF0ZXRpbWUge1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXVuaXNhLWJhc2UpO1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */");

/***/ }),

/***/ "k8KA":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/agendaweb/lessons/components/lessons-course/lessons-course.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: LessonsCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonsCourseComponent", function() { return LessonsCourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lessons_course_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lessons-course.component.html */ "dsNC");
/* harmony import */ var _lessons_course_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lessons-course.component.scss */ "j3Hh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _lesson_modal_lesson_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lesson-modal/lesson-modal.component */ "lkMg");
/* harmony import */ var _course_filter_modal_course_filter_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../course-filter-modal/course-filter-modal.component */ "98Zd");
/* harmony import */ var src_app_services_agendaweb_lessons_lessons_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/agendaweb/lessons/lessons.service */ "y9px");









let LessonsCourseComponent = class LessonsCourseComponent {
    constructor(lessonsService, formBuilder, modalController) {
        this.lessonsService = lessonsService;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.customActionSheetOptions = {
            cssClass: 'form-select-action-sheet',
            header: 'Seleziona',
            mode: 'md'
        };
        this.slideOpts = {
            autoHeight: true,
            spaceBetween: 20
        };
        this.daysLabels = {
            0: 'Lunedì',
            1: 'Martedì',
            2: 'Mercoledì',
            3: 'Giovedì',
            4: 'Venerdì'
        };
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
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            course: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            courseYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            term: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
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
    initOperations() {
        return this.lessonsService.getLessonsYearOptions()
            .subscribe((res) => {
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
        });
    }
    /**
     * Aggiorna la slide alla pressione in base allo specifico Segment Button.
     *
     * @param event L'evento associato al Segment Button.
     */
    slideTo(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const target = event.target;
            const value = parseInt(target.value);
            yield this.slides.slideTo(value);
            this.activeIndex = value;
        });
    }
    /**
     * Aggiorna il Segment Button sulla base dell'indice corrente della slide.
     */
    setActiveIndex() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const index = yield this.slides.getActiveIndex();
            if (index !== this.activeIndex) {
                const button = this.segment['el'].children[index];
                button.click();
            }
        });
    }
    /**
     * Effettua l'ordinamento decrescente delle opzioni relative all'Anno Accademico.
     *
     * @param a E' la prima coppia <chiave, valore>. La chiave è una stringa che
     * rappresenta l'Anno Accademico mentre il valore è l'oggetto opzione.
     * @param b E' la seconda coppia <chiave, valore>. La chiave è una stringa che
     * rappresenta l'Anno Accademico mentre il valore è l'oggetto opzione.
     */
    descSort(a, b) {
        return b.key.localeCompare(a.key);
    }
    /**
     * Restituisce le opzioni del select relative all'Anno Accademico.
     */
    getYears() {
        return this.yearOptions;
    }
    /**
     * Restituisce le opzioni del select relative al Corso di Studio.
     */
    getCourses() {
        if (this.yearIndex === -1) {
            return [];
        }
        return this.courseOptions;
    }
    /**
     * Restituisce le opzioni del select relative all'Anno di Studio.
     */
    getCourseYears() {
        if (this.courseIndex === -1) {
            return [];
        }
        return this.courseYearOptions;
    }
    /**
     * Restituisce le opzioni del select relative al Periodo Didattico.
     */
    getTerms() {
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
    setYearIndex(event) {
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
            });
        }
    }
    /**
     * Imposta l'indice relativo al Corso di Stuio di riferimento.
     *
     * @param event L'evento di change emesso dallo Ion Select.
     */
    setCourseIndex(event) {
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
                .subscribe((res) => {
                this.courseYearOptions = res;
            });
        }
    }
    /**
     * Imposta l'indice relativo all'Anno di Studio di riferimento.
     *
     * @param event L'evento di change emesso dallo Ion Select.
     */
    setCourseYearIndex(event) {
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
    getScheduler() {
        this.lessonsService.getLessonsByCourse(this.lessonsForm.value.year.value, this.lessonsForm.value.course.value, this.lessonsForm.value.courseYear.value, this.lessonsForm.value.term.value).subscribe((scheduler) => {
            this.scheduler = scheduler;
            this.lessonsSet = new Set(Object.keys(scheduler.legend));
            setTimeout(() => {
                this.activeIndex++;
                this.slides.slideTo(this.activeIndex);
            }, 300);
        });
    }
    /**
     * Restituisce l'orario delle lezioni.
     */
    getSchedule() {
        return this.scheduler.schedule;
    }
    /**
     * Restituisce la legenda dei corsi presenti nell'orario delle lezioni.
     */
    getLegend() {
        return this.scheduler.legend;
    }
    /**
     * Restituisce le lezioni sulla base del filtro applicato dall'utente.
     *
     * @param lessons Le lezioni relative ad un certo giorno della settimana.
     */
    getLessons(lessons) {
        return lessons
            .filter((lesson) => this.lessonsSet.has(lesson.teachingCode));
    }
    /**
     * Permette di ottenere il giorno della settimana associato al relativo indice intero.
     *
     * @param dayIndex L'indice intero che identifica il giorno della settimana.
     */
    getDay(dayIndex) {
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
    presentCourseFilterModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _course_filter_modal_course_filter_modal_component__WEBPACK_IMPORTED_MODULE_7__["CourseFilterModalComponent"],
                componentProps: {
                    courses: this.scheduler.legend,
                    checkedSet: this.lessonsSet,
                    confirmCallback: this.updateSetCallback
                },
                cssClass: 'app-modal',
            });
            return yield modal.present();
        });
    }
    /**
     * Permette di aggiornare il Set dei corsi di cui si intende visualizzarne le lezioni.
     *
     * @param newSet Indica il nuovo Set.
     */
    updateSetCallback(newSet) {
        this.lessonsSet = newSet;
        // Aggiornamento altezza slide.
        setTimeout(() => { this.slides.update(); }, 300);
    }
    /**
     * Mostra un modale per poter visualizzare i dettagli di una lezione.
     *
     * @param lesson Indica la lezione di riferimento.
     */
    presentLessonModal(lesson) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _lesson_modal_lesson_modal_component__WEBPACK_IMPORTED_MODULE_6__["LessonModalComponent"],
                componentProps: {
                    lesson: lesson
                },
                cssClass: 'app-modal'
            });
            return yield modal.present();
        });
    }
};
LessonsCourseComponent.ctorParameters = () => [
    { type: src_app_services_agendaweb_lessons_lessons_service__WEBPACK_IMPORTED_MODULE_8__["LessonsService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
LessonsCourseComponent.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"],] }],
    segment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSegment"],] }]
};
LessonsCourseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lessons-course',
        template: _raw_loader_lessons_course_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lessons_course_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LessonsCourseComponent);



/***/ }),

/***/ "lkMg":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/agendaweb/lessons/components/lesson-modal/lesson-modal.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: LessonModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonModalComponent", function() { return LessonModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lesson_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lesson-modal.component.html */ "m29h");
/* harmony import */ var _lesson_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lesson-modal.component.scss */ "mIjH");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let LessonModalComponent = class LessonModalComponent {
    constructor(navParams) {
        this.navParams = navParams;
        this.daysLabels = {
            0: 'Lunedì',
            1: 'Martedì',
            2: 'Mercoledì',
            3: 'Giovedì',
            4: 'Venerdì'
        };
        this.lesson = this.navParams.get('lesson');
    }
    ngOnInit() { }
    getDay() {
        return this.daysLabels[this.lesson.day];
    }
};
LessonModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] }
];
LessonModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-lesson-modal',
        template: _raw_loader_lesson_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lesson_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LessonModalComponent);



/***/ }),

/***/ "m29h":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agendaweb/lessons/components/lesson-modal/lesson-modal.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-modal title=\"Dettagli lezione\">\n    <ion-list>\n        <ion-item class=\"name\">\n            <ion-thumbnail slot=\"start\">\n                <i class=\"fas fa-book\"></i>\n            </ion-thumbnail>\n            <ion-label>\n                <h3>{{lesson.name}}</h3>\n            </ion-label>\n        </ion-item>\n        <ion-item class=\"profs\">\n            <ion-thumbnail slot=\"start\">\n                <i class=\"fas fa-user-tie\"></i>\n            </ion-thumbnail>\n            <ion-label *ngFor=\"let prof of lesson.profs\">\n                <h3>\n                    {{prof.firstname}} {{prof.lastname}}\n                </h3>\n                <p>{{prof.mail}}</p>\n            </ion-label>\n        </ion-item>\n        <ion-item class=\"date\">\n            <ion-thumbnail slot=\"start\">\n                <i class=\"fas fa-calendar-alt\"></i>\n            </ion-thumbnail>\n            <ion-label>\n                <h3>{{getDay()}}</h3>\n                <p>\n                    {{lesson.timeStart}} - {{lesson.timeEnd}}\n                </p>\n            </ion-label>\n        </ion-item>\n        <ion-item class=\"room\">\n            <ion-thumbnail slot=\"start\">\n                <i class=\"fas fa-map\"></i>\n            </ion-thumbnail>\n            <ion-label>\n                <h3>{{lesson.room}}</h3>\n            </ion-label>\n        </ion-item>\n        <ion-item class=\"courses\">\n            <ion-thumbnail slot=\"start\">\n                <i class=\"fas fa-graduation-cap\"></i>\n            </ion-thumbnail>\n            <ion-label>\n                <h3 *ngFor=\"let course of lesson.courses\">{{course}}</h3>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n</app-modal>\n");

/***/ }),

/***/ "mIjH":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/agendaweb/lessons/components/lesson-modal/lesson-modal.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  margin-bottom: 30px;\n}\nion-item:last-child {\n  margin-bottom: 0;\n}\nion-item.name ion-thumbnail {\n  background: #eaf7ff;\n}\nion-item.profs ion-thumbnail {\n  background: #FFF4F4;\n}\nion-item.date ion-thumbnail {\n  background: #FAF8E9;\n}\nion-item.room ion-thumbnail {\n  background: #FFF1FF;\n}\nion-item.courses ion-thumbnail {\n  background: #E4F6E5;\n}\nion-item ion-thumbnail {\n  margin-right: 15px;\n  border-radius: 15px;\n}\nion-item ion-thumbnail i {\n  color: rgba(0, 0, 0, 0.2);\n  mix-blend-mode: color-burn;\n}\nion-item ion-label h3 {\n  font-size: 15px;\n  font-weight: var(--ion-font-weight-medium);\n}\nion-item ion-label p {\n  color: var(--ion-color-unisa-base);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxsZXNzb24tbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKO0FBQ0k7RUFDSSxnQkFBQTtBQUNSO0FBRUk7RUFDSSxtQkFBQTtBQUFSO0FBR0k7RUFDSSxtQkFBQTtBQURSO0FBSUk7RUFDSSxtQkFBQTtBQUZSO0FBS0k7RUFDSSxtQkFBQTtBQUhSO0FBTUk7RUFDSSxtQkFBQTtBQUpSO0FBT0k7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBTFI7QUFPUTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7QUFMWjtBQVVRO0VBQ0ksZUFBQTtFQUNBLDBDQUFBO0FBUlo7QUFXUTtFQUNJLGtDQUFBO0FBVFoiLCJmaWxlIjoibGVzc29uLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJi5uYW1lIGlvbi10aHVtYm5haWwge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlYWY3ZmY7XHJcbiAgICB9XHJcblxyXG4gICAgJi5wcm9mcyBpb24tdGh1bWJuYWlsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGNEY0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLmRhdGUgaW9uLXRodW1ibmFpbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZBRjhFOTtcclxuICAgIH1cclxuXHJcbiAgICAmLnJvb20gaW9uLXRodW1ibmFpbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRjFGRjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJi5jb3Vyc2VzIGlvbi10aHVtYm5haWwge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNFNEY2RTU7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLXRodW1ibmFpbCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgICBtaXgtYmxlbmQtbW9kZTogY29sb3ItYnVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWlvbi1mb250LXdlaWdodC1tZWRpdW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdW5pc2EtYmFzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "n4SE":
/*!*******************************************************************!*\
  !*** ./src/app/pages/agendaweb/lessons/lessons-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: LessonsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonsPageRoutingModule", function() { return LessonsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _lessons_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lessons.page */ "SS/C");




const routes = [
    {
        path: '',
        component: _lessons_page__WEBPACK_IMPORTED_MODULE_3__["LessonsPage"]
    }
];
let LessonsPageRoutingModule = class LessonsPageRoutingModule {
};
LessonsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LessonsPageRoutingModule);



/***/ }),

/***/ "ps91":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/agendaweb/lessons/components/course-filter-modal/course-filter-modal.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2UtZmlsdGVyLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "uiw9":
/*!***********************************************************!*\
  !*** ./src/app/pages/agendaweb/lessons/lessons.module.ts ***!
  \***********************************************************/
/*! exports provided: LessonsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonsPageModule", function() { return LessonsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _lessons_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lessons-routing.module */ "n4SE");
/* harmony import */ var _lessons_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lessons.page */ "SS/C");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utility/utility.module */ "SovF");
/* harmony import */ var _components_lessons_course_lessons_course_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/lessons-course/lessons-course.component */ "k8KA");
/* harmony import */ var _components_lessons_prof_lessons_prof_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/lessons-prof/lessons-prof.component */ "DeCB");
/* harmony import */ var _components_course_filter_modal_course_filter_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/course-filter-modal/course-filter-modal.component */ "98Zd");
/* harmony import */ var _components_lesson_modal_lesson_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/lesson-modal/lesson-modal.component */ "lkMg");












let LessonsPageModule = class LessonsPageModule {
};
LessonsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lessons_routing_module__WEBPACK_IMPORTED_MODULE_5__["LessonsPageRoutingModule"],
            _utility_utility_module__WEBPACK_IMPORTED_MODULE_7__["UtilityModule"]
        ],
        declarations: [
            _lessons_page__WEBPACK_IMPORTED_MODULE_6__["LessonsPage"],
            _components_lessons_course_lessons_course_component__WEBPACK_IMPORTED_MODULE_8__["LessonsCourseComponent"],
            _components_lessons_prof_lessons_prof_component__WEBPACK_IMPORTED_MODULE_9__["LessonsProfComponent"],
            _components_course_filter_modal_course_filter_modal_component__WEBPACK_IMPORTED_MODULE_10__["CourseFilterModalComponent"],
            _components_lesson_modal_lesson_modal_component__WEBPACK_IMPORTED_MODULE_11__["LessonModalComponent"]
        ],
        exports: [
            _components_lessons_course_lessons_course_component__WEBPACK_IMPORTED_MODULE_8__["LessonsCourseComponent"],
            _components_lessons_prof_lessons_prof_component__WEBPACK_IMPORTED_MODULE_9__["LessonsProfComponent"],
            _components_course_filter_modal_course_filter_modal_component__WEBPACK_IMPORTED_MODULE_10__["CourseFilterModalComponent"],
        ]
    })
], LessonsPageModule);



/***/ }),

/***/ "y9px":
/*!***************************************************************!*\
  !*** ./src/app/services/agendaweb/lessons/lessons.service.ts ***!
  \***************************************************************/
/*! exports provided: LessonsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonsService", function() { return LessonsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");





let LessonsService = class LessonsService {
    constructor(http) {
        this.http = http;
        this.base = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].easycourseApi}/AgendaStudenti/`;
    }
    /**
     * Effettua il parsing della risposta restituendo i dati in formato JSON.
     *
     * @param res La risposta da parsare.
     */
    parseResponse(res) {
        return JSON.parse(res.split(';')[0]);
    }
    /**
     * Recupera le combo di filtraggio relative all'opzione 'Anno Accademico', sia per
     * la pagina dei corsi che per la pagina dei docenti.
     */
    getLessonsYearOptions() {
        return this.http.get(`${this.base}/combo_call_new.php`, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('sw', 'ec_')
                .set('aa', '1')
        });
    }
    /**
     * Recupera le opzioni di filtraggio relative all'opzione 'Corso di Studio' per la
     * pagina dei corsi.
     *
     * @param year Indica l'Anno Accademico di riferimento.
     */
    getLessonsCourseOptions(year) {
        return this.http.get(`${this.base}/combo_call_new.php`, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('sw', 'ec_')
                .set('aa', year)
                .set('page', 'corsi'),
            responseType: 'text'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            return this.parseResponse(res);
        }));
    }
    /**
     * Recupera le opzioni di filtraggio relative all'opzione 'Docente' per la pagina
     * dei docenti.
     *
     * @param year Indica l'Anno Accademico di riferimento.
     */
    getLessonsProfOptions(year) {
        return this.http.get(`${this.base}/combo_call_new.php`, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('sw', 'ec_')
                .set('aa', year)
                .set('page', 'docenti')
        });
    }
    /**
     * Recupera le opzioni di filtraggio relative all'opzione 'Anno di Studio' per la
     * pagina dei corsi.
     *
     * @param year Indica l'Anno Accademico di riferimento.
     * @param course Indica il codice identificativo del Corso di Studio di riferimento.
     */
    getLessonsCourseYearsOptions(year, course) {
        return this.http.get(`${this.base}/call_redis.php`, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('key', `UNISA_${year}_ec_elenco_anno2_${course}`)
        });
    }
    /**
     * Recupera il Calendario delle Lezioni per Insegnamento.
     *
     * @param year Indica l'Anno Accademico di riferimento.
     * @param course Indica il codice identificativo del Corso di Studio di riferimento.
     * @param courseYear Indica il Codice del Curriculum e l'Anno di Corso di riferimento,
     * separati dal carattere | (pipe).
     * @param term Indica il codice del Periodo Didattico di riferimento.
     */
    getLessonsByCourse(year, course, courseYear, term) {
        return this.http.get(`${this.base}/grid_call_new.php`, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('view', 'easycourse')
                .set('include', 'corso')
                .set('anno', year)
                .set('corso', course)
                .set('anno2', courseYear)
                .set('visualizzazione_orario', 'std')
                .set('periodo_didattico', term)
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => this.getLessons(res)));
    }
    /**
     * ecupera il Calendario delle Lezioni per Docente.
     *
     * @param year Indica l'Anno Accademico di riferimento.
     * @param prof Indica la matricola del Docente di riferimento.
     * @param term Indica il codice del Periodo Didattico di riferimento
     */
    getLessonsByProf(year, prof, term) {
        return this.http.get(`${this.base}/grid_call_new.php`, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('view', 'easycourse')
                .set('include', 'docente')
                .set('anno', year)
                .set('docente', prof)
                .set('visualizzazione_orario', 'std')
                .set('periodo_didattico', term)
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => this.getLessons(res)));
    }
    /**
     * Manipola la risposta ottenuta dal server al fine di ottenere i dati in un unico formato.
     *
     * @param res La risposta ottenuta dal server.
     */
    getLessons(res) {
        const daysLabels = {
            'monday': 0,
            'tuesday': 1,
            'wednesday': 2,
            'thursday': 3,
            'friday': 4
        };
        const lessons = res.celle;
        const schedule = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: []
        };
        const legend = {};
        lessons.forEach((lesson) => {
            const name = lesson.nome_insegnamento.replace('<i class="fa fa-asterisk" aria-hidden title="*"></i>', '').trim();
            const teachingCode = lesson.codice_insegnamento;
            const day = lesson.data.toLocaleLowerCase();
            const courses = lesson.percorso_didattico.split('<br />');
            let profsFullnames = lesson.docente;
            let profsMails = lesson.mail_docente;
            const profs = [];
            if (profsFullnames) {
                profsFullnames = profsFullnames.split(',');
                profsMails = profsMails ? profsMails.split(',') : [];
                profsFullnames.forEach((fullname, index) => {
                    const [lastname, firstname] = fullname.trim().split(' ');
                    const mail = profsMails[index] || '';
                    profs.push({
                        firstname: firstname,
                        lastname: lastname,
                        mail: mail
                    });
                });
            }
            const dayIndex = daysLabels[day];
            schedule[dayIndex].push({
                name: name,
                teachingCode: teachingCode,
                day: dayIndex,
                timeStart: lesson.ora_inizio,
                timeEnd: lesson.ora_fine,
                room: lesson.aula,
                profs: profs,
                courses: courses,
            });
            legend[teachingCode] || (legend[teachingCode] = name);
        });
        return {
            schedule: schedule,
            legend: legend
        };
    }
};
LessonsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
LessonsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], LessonsService);



/***/ })

}]);
//# sourceMappingURL=lessons-lessons-module-es2015.js.map