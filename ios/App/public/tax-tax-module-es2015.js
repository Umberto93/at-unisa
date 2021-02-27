(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tax-tax-module"],{

/***/ "HyxV":
/*!*********************************************!*\
  !*** ./src/app/pages/esse3/tax/tax.page.ts ***!
  \*********************************************/
/*! exports provided: TaxPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxPage", function() { return TaxPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tax_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tax.page.html */ "xSrw");
/* harmony import */ var _tax_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tax.page.scss */ "wVQI");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_esse3_tax_tax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/esse3/tax/tax.service */ "tPuo");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");







let TaxPage = class TaxPage {
    constructor(userService, taxService) {
        this.userService = userService;
        this.taxService = taxService;
        this.taxsList = [[], []];
        this.labels = ['Pagate', 'Da pagare'];
        this.activeIndex = 0;
        this.isReady = false;
        this.slideOpts = {
            autoHeight: true,
            spaceBetween: 20
        };
        this.getTax = this.getTax.bind(this);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const profile = yield this.userService.getUser();
            this.persId = profile.user.persId;
            this.getTax();
        });
    }
    /**
     * Recupera le tasse dello studente.
     */
    getTax() {
        return this.taxService.getTax(this.persId)
            .subscribe((taxs) => {
            taxs.forEach(tax => {
                const index = tax.payed ? 0 : 1;
                this.taxsList[index].push(tax);
            });
            this.isReady = true;
        });
    }
    /**
     * Restituisce la data della tase in base a se la tassa è stata pagata o meno.
     *
     * @param tax la specifica tassa.
     */
    getDate(tax) {
        if (tax.payed) {
            return tax.paymentDate;
        }
        return tax.expirationDate;
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
};
TaxPage.ctorParameters = () => [
    { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: src_app_services_esse3_tax_tax_service__WEBPACK_IMPORTED_MODULE_5__["TaxService"] }
];
TaxPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"],] }],
    segment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSegment"],] }]
};
TaxPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-tax',
        template: _raw_loader_tax_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tax_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TaxPage);



/***/ }),

/***/ "lI8M":
/*!*******************************************************!*\
  !*** ./src/app/pages/esse3/tax/tax-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TaxPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxPageRoutingModule", function() { return TaxPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tax_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tax.page */ "HyxV");




const routes = [
    {
        path: '',
        component: _tax_page__WEBPACK_IMPORTED_MODULE_3__["TaxPage"]
    }
];
let TaxPageRoutingModule = class TaxPageRoutingModule {
};
TaxPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TaxPageRoutingModule);



/***/ }),

/***/ "o5to":
/*!***********************************************!*\
  !*** ./src/app/pages/esse3/tax/tax.module.ts ***!
  \***********************************************/
/*! exports provided: TaxPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxPageModule", function() { return TaxPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tax_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tax-routing.module */ "lI8M");
/* harmony import */ var _tax_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tax.page */ "HyxV");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utility/utility.module */ "SovF");








let TaxPageModule = class TaxPageModule {
};
TaxPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tax_routing_module__WEBPACK_IMPORTED_MODULE_5__["TaxPageRoutingModule"],
            _utility_utility_module__WEBPACK_IMPORTED_MODULE_7__["UtilityModule"]
        ],
        declarations: [_tax_page__WEBPACK_IMPORTED_MODULE_6__["TaxPage"]]
    })
], TaxPageModule);



/***/ }),

/***/ "wVQI":
/*!***********************************************!*\
  !*** ./src/app/pages/esse3/tax/tax.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXgucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "xSrw":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/esse3/tax/tax.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"page-content\">\r\n    <app-refresher [refreshCallback]=\"getTax\"></app-refresher>\r\n    <div class=\"flex flex-direction-column\">\r\n        <app-header>\r\n            <ion-toolbar>\r\n                <ion-title class=\"page-title\">Tasse</ion-title>\r\n            </ion-toolbar>\r\n            <ion-toolbar class=\"segment-toolbar\">\r\n                <ion-segment\r\n                    [value]=\"activeIndex\"\r\n                    (ionChange)=\"slideTo($event)\"\r\n                    swipeGesture=\"false\"\r\n                >\r\n                    <ion-segment-button\r\n                        *ngFor=\"let label of labels; index as i\"\r\n                        [value]=\"i\"\r\n                    >\r\n                        <ion-label>{{label}}</ion-label>\r\n                    </ion-segment-button>\r\n                </ion-segment>\r\n            </ion-toolbar>\r\n        </app-header>\r\n        <div class=\"page-main\">\r\n            <ion-slides\r\n                *ngIf=\"isReady\"\r\n                (ionSlideWillChange)=\"setActiveIndex()\"\r\n                [options]=\"slideOpts\"\r\n            >\r\n                <ion-slide *ngFor=\"let taxs of taxsList\">\r\n                    <ion-list class=\"app-list\">\r\n                        <ion-item *ngFor=\"let tax of taxs\">\r\n                            <ion-label>\r\n                                <h3>{{tax.name}}</h3>\r\n                                <div>\r\n                                    <i class=\"far fa-calendar\"></i>\r\n                                    <span>{{getDate(tax) | date:'dd/MM/yyyy'}}</span>\r\n                                </div>\r\n                                <div>\r\n                                    <i class=\"fas fa-money-bill\"></i>\r\n                                    <span>{{tax.amount}} €</span>\r\n                                </div>\r\n                            </ion-label>\r\n                        </ion-item>\r\n                        <ion-item *ngIf=\"taxs.length === 0\">Nessun elemento da mostrare.</ion-item>\r\n                    </ion-list>\r\n                </ion-slide>\r\n            </ion-slides>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=tax-tax-module-es2015.js.map