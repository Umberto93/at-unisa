(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~lessons-lessons-module~pages-home-home-module~pages-settings-settings-module~profile-profile~502ce0e3"],{

/***/ "AS83":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/slides-controller/slides-controller.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-segment\r\n    [value]=\"activeIndex\"\r\n    (ionChange)=\"slideTo($event)\"\r\n    swipeGesture=\"false\"\r\n>\r\n    <ion-segment-button\r\n        *ngFor=\"let label of labels; index as i\"\r\n        [value]=\"i\"\r\n    >\r\n        <ion-label>{{label}}</ion-label>\r\n    </ion-segment-button>\r\n</ion-segment>\r\n");

/***/ }),

/***/ "DerZ":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/components/slides-controller/slides-controller.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-segment {\n  --ion-segment-height: 50px;\n  height: var(--ion-segment-height);\n  background: var(--ion-color-unisa-soft-orange);\n  border-radius: calc(var(--ion-segment-height) / 2);\n}\nion-segment ion-segment-button {\n  --indicator-height: var(--ion-segment-height);\n  --indicator-color: var(--ion-color-unisa-orange);\n  --background-hover: transparent;\n  --ripple-color: transparent;\n  --color: var(--ion-color-unisa-orange);\n  --color-checked: white;\n  width: 50%;\n  min-width: initial;\n  max-width: initial;\n  font-size: 15px;\n  font-weight: var(--ion-font-weight-semibold);\n  text-transform: capitalize;\n}\nion-segment ion-segment-button::part(indicator-background) {\n  border-radius: calc(var(--ion-segment-height) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2xpZGVzLWNvbnRyb2xsZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUVBLGlDQUFBO0VBQ0EsOENBQUE7RUFDQSxrREFBQTtBQUFKO0FBRUk7RUFDSSw2Q0FBQTtFQUNBLGdEQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7RUFFQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7RUFDQSw0Q0FBQTtFQUNBLDBCQUFBO0FBRlI7QUFJUTtFQUNJLGtEQUFBO0FBRloiLCJmaWxlIjoic2xpZGVzLWNvbnRyb2xsZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VnbWVudCB7XHJcbiAgICAtLWlvbi1zZWdtZW50LWhlaWdodDogNTBweDtcclxuXHJcbiAgICBoZWlnaHQ6IHZhcigtLWlvbi1zZWdtZW50LWhlaWdodCk7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdW5pc2Etc29mdC1vcmFuZ2UpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1pb24tc2VnbWVudC1oZWlnaHQpIC8gMik7XHJcblxyXG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgICAgICAtLWluZGljYXRvci1oZWlnaHQ6IHZhcigtLWlvbi1zZWdtZW50LWhlaWdodCk7XHJcbiAgICAgICAgLS1pbmRpY2F0b3ItY29sb3I6IHZhcigtLWlvbi1jb2xvci11bmlzYS1vcmFuZ2UpO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLS1yaXBwbGUtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci11bmlzYS1vcmFuZ2UpO1xyXG4gICAgICAgIC0tY29sb3ItY2hlY2tlZDogd2hpdGU7XHJcblxyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgbWluLXdpZHRoOiBpbml0aWFsO1xyXG4gICAgICAgIG1heC13aWR0aDogaW5pdGlhbDtcclxuXHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1pb24tZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5cclxuICAgICAgICAmOjpwYXJ0KGluZGljYXRvci1iYWNrZ3JvdW5kKSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0taW9uLXNlZ21lbnQtaGVpZ2h0KSAvIDIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "GGAZ":
/*!*******************************************************************!*\
  !*** ./src/app/pages/components/refresher/refresher.component.ts ***!
  \*******************************************************************/
/*! exports provided: RefresherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefresherComponent", function() { return RefresherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_refresher_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./refresher.component.html */ "Valo");
/* harmony import */ var _refresher_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./refresher.component.scss */ "uETG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let RefresherComponent = class RefresherComponent {
    constructor() { }
    ngOnInit() { }
    /**
     * Chiama una callback al refresh della pagina.
     *
     * @param event L'evento associato allo Ion Refresher.
     */
    refresh(event) {
        this.refreshCallback().add(() => {
            event.target.complete();
        });
    }
};
RefresherComponent.ctorParameters = () => [];
RefresherComponent.propDecorators = {
    refreshCallback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
RefresherComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-refresher',
        template: _raw_loader_refresher_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_refresher_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RefresherComponent);



/***/ }),

/***/ "Ni+c":
/*!***************************************************************!*\
  !*** ./src/app/pages/components/header/header.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-header {\n  margin-bottom: var(--ion-app-margin);\n  padding-left: var(--ion-app-padding);\n  padding-right: var(--ion-app-padding);\n  padding-top: var(--ion-app-padding);\n}\n.app-header ion-toolbar {\n  margin-bottom: var(--ion-app-margin);\n}\n.app-header ion-toolbar:last-child {\n  margin-bottom: 0;\n}\n.app-header ion-toolbar ion-button {\n  margin-right: 15px;\n}\n.app-header ion-toolbar ion-button:last-child {\n  margin-right: 0;\n}\n.app-header .segment-toolbar ion-segment {\n  --ion-segment-height: 50px;\n  height: var(--ion-segment-height);\n  background: var(--ion-color-unisa-soft-orange);\n  border-radius: calc(var(--ion-segment-height) / 2);\n}\n.app-header .segment-toolbar ion-segment ion-segment-button {\n  --indicator-height: var(--ion-segment-height);\n  --indicator-color: var(--ion-color-unisa-orange);\n  --background-hover: transparent;\n  --ripple-color: transparent;\n  --color: var(--ion-color-unisa-orange);\n  --color-checked: white;\n  width: 50%;\n  min-width: initial;\n  max-width: initial;\n  font-size: 15px;\n  font-weight: var(--ion-font-weight-semibold);\n  text-transform: capitalize;\n}\n.app-header .segment-toolbar ion-segment ion-segment-button::part(indicator-background) {\n  border-radius: calc(var(--ion-segment-height) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7QUFDSjtBQUNJO0VBQ0ksb0NBQUE7QUFDUjtBQUNRO0VBQ0ksZ0JBQUE7QUFDWjtBQUVRO0VBQ0ksa0JBQUE7QUFBWjtBQUVZO0VBQ0ksZUFBQTtBQUFoQjtBQU1RO0VBQ0ksMEJBQUE7RUFFQSxpQ0FBQTtFQUNBLDhDQUFBO0VBQ0Esa0RBQUE7QUFMWjtBQU9ZO0VBQ0ksNkNBQUE7RUFDQSxnREFBQTtFQUNBLCtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0VBRUEsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFFQSxlQUFBO0VBQ0EsNENBQUE7RUFDQSwwQkFBQTtBQVBoQjtBQVNnQjtFQUNJLGtEQUFBO0FBUHBCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtaGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1hcHAtbWFyZ2luKTtcclxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0taW9uLWFwcC1wYWRkaW5nKTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLWlvbi1hcHAtcGFkZGluZyk7XHJcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0taW9uLWFwcC1wYWRkaW5nKTtcclxuXHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLWFwcC1tYXJnaW4pO1xyXG5cclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuXHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlZ21lbnQtdG9vbGJhciB7XHJcbiAgICAgICAgaW9uLXNlZ21lbnQge1xyXG4gICAgICAgICAgICAtLWlvbi1zZWdtZW50LWhlaWdodDogNTBweDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaGVpZ2h0OiB2YXIoLS1pb24tc2VnbWVudC1oZWlnaHQpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdW5pc2Etc29mdC1vcmFuZ2UpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWlvbi1zZWdtZW50LWhlaWdodCkgLyAyKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIC0taW5kaWNhdG9yLWhlaWdodDogdmFyKC0taW9uLXNlZ21lbnQtaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIC0taW5kaWNhdG9yLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdW5pc2Etb3JhbmdlKTtcclxuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdW5pc2Etb3JhbmdlKTtcclxuICAgICAgICAgICAgICAgIC0tY29sb3ItY2hlY2tlZDogd2hpdGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiBpbml0aWFsO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBpbml0aWFsO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWlvbi1mb250LXdlaWdodC1zZW1pYm9sZCk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICY6OnBhcnQoaW5kaWNhdG9yLWJhY2tncm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWlvbi1zZWdtZW50LWhlaWdodCkgLyAyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "SovF":
/*!*************************************************!*\
  !*** ./src/app/pages/utility/utility.module.ts ***!
  \*************************************************/
/*! exports provided: UtilityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityModule", function() { return UtilityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header/header.component */ "pI0V");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/modal/modal.component */ "VHo0");
/* harmony import */ var _components_refresher_refresher_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/refresher/refresher.component */ "GGAZ");
/* harmony import */ var _components_slides_controller_slides_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/slides-controller/slides-controller.component */ "viTe");







let UtilityModule = class UtilityModule {
};
UtilityModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
            _components_slides_controller_slides_controller_component__WEBPACK_IMPORTED_MODULE_6__["SlidesControllerComponent"],
            _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"],
            _components_refresher_refresher_component__WEBPACK_IMPORTED_MODULE_5__["RefresherComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
            _components_slides_controller_slides_controller_component__WEBPACK_IMPORTED_MODULE_6__["SlidesControllerComponent"],
            _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"],
            _components_refresher_refresher_component__WEBPACK_IMPORTED_MODULE_5__["RefresherComponent"]
        ]
    })
], UtilityModule);



/***/ }),

/***/ "UfoF":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/modal/modal.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n        <ion-title>{{title}}</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button (click)=\"dismiss()\">\r\n                <i class=\"fas fa-times app-icon\"></i>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ng-content></ng-content>\r\n</ion-content>\r\n<ion-footer\r\n    *ngIf=\"confirmButton\"\r\n    class=\"ion-no-border\"\r\n>\r\n    <ion-buttons>\r\n        <ion-button\r\n            class=\"app-button\"\r\n            (click)=\"handleConfirm()\"\r\n        >\r\n            Conferma\r\n        </ion-button>\r\n    </ion-buttons>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "VHo0":
/*!***********************************************************!*\
  !*** ./src/app/pages/components/modal/modal.component.ts ***!
  \***********************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal.component.html */ "UfoF");
/* harmony import */ var _modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.component.scss */ "tfv/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ModalComponent = class ModalComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.confirmButton = false;
    }
    ngOnInit() { }
    /**
     * Richiama la callback passata al modale alla presione del tasto conferma.
     */
    handleConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.confirmCallback();
            yield this.dismiss();
        });
    }
    /**
     * Rimuove il modale.
     */
    dismiss() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
};
ModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ModalComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    confirmButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    confirmCallback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal',
        template: _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalComponent);



/***/ }),

/***/ "Valo":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/refresher/refresher.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-refresher\r\n    slot=\"fixed\"\r\n    (ionRefresh)=\"refresh($event)\"\r\n>\r\n    <ion-refresher-content></ion-refresher-content>\r\n</ion-refresher>\r\n");

/***/ }),

/***/ "dpWz":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/header/header.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"app-header ion-no-border\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-toggle>\r\n                <ion-button>\r\n                    <i class=\"fas fa-bars app-icon\"></i>\r\n                </ion-button>\r\n            </ion-menu-toggle>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button>\r\n                <i class=\"fas fa-bell app-icon\"></i>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n    <ng-content></ng-content>\r\n</ion-header>\r\n");

/***/ }),

/***/ "pI0V":
/*!*************************************************************!*\
  !*** ./src/app/pages/components/header/header.component.ts ***!
  \*************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "dpWz");
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.scss */ "Ni+c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() { }
};
HeaderComponent.ctorParameters = () => [];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HeaderComponent);



/***/ }),

/***/ "tfv/":
/*!*************************************************************!*\
  !*** ./src/app/pages/components/modal/modal.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-modal {\n  align-items: flex-end;\n}\n.app-modal .modal-wrapper {\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n}\n.app-modal .modal-wrapper ion-header {\n  padding: var(--ion-app-padding);\n}\n.app-modal .modal-wrapper ion-header ion-title {\n  --color: var(--ion-color-unisa-blue);\n  padding-right: 30px;\n  font-size: 18px;\n  font-weight: var(--ion-font-weight-bold);\n}\n.app-modal .modal-wrapper ion-content {\n  --padding-end: var(--ion-app-padding);\n  --padding-start: var(--ion-app-padding);\n}\n.app-modal .modal-wrapper ion-footer {\n  padding: var(--ion-app-padding);\n}\n.app-modal .modal-wrapper ion-footer ion-button {\n  --background: var(--ion-color-unisa-orange);\n  --border-radius: 25px;\n  --color: white;\n  width: 100%;\n  min-height: 50px;\n  text-align: center;\n  text-transform: capitalize;\n  font-size: 16px;\n  font-weight: var(--ion-font-weight-semibold);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKO0FBQ0k7RUFDSSw0QkFBQTtFQUNBLDZCQUFBO0FBQ1I7QUFDUTtFQUNJLCtCQUFBO0FBQ1o7QUFDWTtFQUNJLG9DQUFBO0VBRUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7QUFBaEI7QUFJUTtFQUNJLHFDQUFBO0VBQ0EsdUNBQUE7QUFGWjtBQUtRO0VBQ0ksK0JBQUE7QUFIWjtBQUtZO0VBQ0ksMkNBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFFQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLDRDQUFBO0FBSmhCIiwiZmlsZSI6Im1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1tb2RhbCB7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblxyXG4gICAgLm1vZGFsLXdyYXBwZXIge1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XHJcblxyXG4gICAgICAgIGlvbi1oZWFkZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tYXBwLXBhZGRpbmcpO1xyXG5cclxuICAgICAgICAgICAgaW9uLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci11bmlzYS1ibHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWlvbi1mb250LXdlaWdodC1ib2xkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1pb24tYXBwLXBhZGRpbmcpO1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1hcHAtcGFkZGluZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tZm9vdGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLWFwcC1wYWRkaW5nKTtcclxuXHJcbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdW5pc2Etb3JhbmdlKTtcclxuICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICAgICAgICAgIC0tY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWlvbi1mb250LXdlaWdodC1zZW1pYm9sZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "uETG":
/*!*********************************************************************!*\
  !*** ./src/app/pages/components/refresher/refresher.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWZyZXNoZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "viTe":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/components/slides-controller/slides-controller.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SlidesControllerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesControllerComponent", function() { return SlidesControllerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_slides_controller_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./slides-controller.component.html */ "AS83");
/* harmony import */ var _slides_controller_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slides-controller.component.scss */ "DerZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SlidesControllerComponent = class SlidesControllerComponent {
    constructor() {
        this.activeIndex = 0;
    }
    ngOnInit() {
    }
    slideTo(event) {
    }
};
SlidesControllerComponent.ctorParameters = () => [];
SlidesControllerComponent.propDecorators = {
    labels: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    slidesRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
SlidesControllerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-slides-controller',
        template: _raw_loader_slides_controller_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_slides_controller_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SlidesControllerComponent);



/***/ })

}]);
//# sourceMappingURL=default~lessons-lessons-module~pages-home-home-module~pages-settings-settings-module~profile-profile~502ce0e3-es2015.js.map