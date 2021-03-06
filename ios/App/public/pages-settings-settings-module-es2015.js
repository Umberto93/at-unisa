(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"],{

/***/ "HATU":
/*!***********************************************************!*\
  !*** ./src/app/pages/settings/settings-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "nD9t");




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ "JLDx":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"page-content\">\r\n    <app-header>\r\n        <ion-toolbar>\r\n            <ion-title class=\"page-title\">Impostazioni</ion-title>\r\n        </ion-toolbar>\r\n    </app-header>\r\n    <ion-list>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h3>Carriera attiva</h3>\r\n            </ion-label>\r\n            <ion-select\r\n                cancelText=\"Cancella\"\r\n                interface=\"action-sheet\"\r\n                [value]=\"activeCareer\"\r\n                [interfaceOptions]=\"customActionSheetOptions\"\r\n                (ionChange)=\"setCareer($event)\"\r\n            >\r\n                <ion-select-option\r\n                    *ngFor=\"let studentId of studentIds; index as i\"\r\n                    [value]=\"i\"\r\n                >\r\n                    {{studentId}}\r\n                </ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n    </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "j/5A":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\nion-list {\n  padding: var(--ion-app-padding);\n}\nion-list ion-item::part(native) {\n  flex-direction: column;\n  align-items: flex-start;\n}\nion-list ion-item ion-label {\n  margin-bottom: 10px;\n}\nion-list ion-item ion-label h3 {\n  font-size: 16px;\n  font-weight: var(--ion-font-weight-semibold);\n}\nion-list ion-item ion-select {\n  width: 100%;\n  max-width: initial;\n  padding: 15px;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  border-radius: 5px;\n  font-size: 14px;\n}\nion-list ion-item ion-select::part(icon) {\n  display: none;\n}\nion-list ion-item ion-select:after {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksK0JBQUE7QUFFSjtBQUNRO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtBQUNaO0FBRVE7RUFDSSxtQkFBQTtBQUFaO0FBRVk7RUFDSSxlQUFBO0VBQ0EsNENBQUE7QUFBaEI7QUFJUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUZaO0FBSVk7RUFDSSxhQUFBO0FBRmhCO0FBS1k7RUFDSSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtBQUhoQiIsImZpbGUiOiJzZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5pb24tbGlzdCB7XG4gIHBhZGRpbmc6IHZhcigtLWlvbi1hcHAtcGFkZGluZyk7XG59XG5pb24tbGlzdCBpb24taXRlbTo6cGFydChuYXRpdmUpIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5pb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIGgzIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogdmFyKC0taW9uLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIGlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiBpbml0aWFsO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIGlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xuICBkaXNwbGF5OiBub25lO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLXNlbGVjdDphZnRlciB7XG4gIGNvbnRlbnQ6IFwi74G4XCI7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn0iXX0= */");

/***/ }),

/***/ "nD9t":
/*!*************************************************!*\
  !*** ./src/app/pages/settings/settings.page.ts ***!
  \*************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./settings.page.html */ "JLDx");
/* harmony import */ var _settings_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.page.scss */ "j/5A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");





let SettingsPage = class SettingsPage {
    constructor(userService) {
        this.userService = userService;
        this.customActionSheetOptions = {
            cssClass: 'form-select-action-sheet',
            header: 'Seleziona',
            mode: 'md'
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const profile = yield this.userService.getUser();
            const activeCareer = (yield this.userService.getActiveCareer()) || 0;
            this.studentIds = profile.user.trattiCarriera.map((career) => {
                return career.matricola;
            });
            this.activeCareer = activeCareer;
        });
    }
    /**
     * Permette allo studente di cambiare la propria carriera attiva attraverso un menù di
     * selezione. La scelta effettuata verrà poi salvata nello Ionic Storage e verrà utilizzata
     * come riferimento durante la visualizzazione delle altre pagine dell'applicazione.
     *
     * @param event L'evento associato allo IonSelect.
     */
    setCareer(event) {
        this.userService.setActiveCareer(event.detail.value);
    }
};
SettingsPage.ctorParameters = () => [
    { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SettingsPage);



/***/ }),

/***/ "yPrK":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "HATU");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "nD9t");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utility/utility.module */ "SovF");








let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"],
            _utility_utility_module__WEBPACK_IMPORTED_MODULE_7__["UtilityModule"]
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-settings-settings-module-es2015.js.map