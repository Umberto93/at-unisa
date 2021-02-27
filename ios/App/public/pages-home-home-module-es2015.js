(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "/rnz":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-title span {\n  display: inline-block;\n  font-weight: inherit;\n  text-transform: lowercase;\n}\n.page-title span::first-letter {\n  text-transform: uppercase;\n}\n.page-main {\n  width: 100%;\n  border-top-left-radius: 25px;\n}\n.page-main .page-subtitle {\n  margin: 30px 0;\n  color: var(--ion-color-unisa-blue);\n  font-size: 16px;\n  font-weight: var(--ion-font-weight-semibold);\n}\n.page-main .page-subtitle:first-child {\n  margin-top: 0;\n}\n.app-list ion-note {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-self: center;\n  margin-right: 20px;\n  padding: 0;\n  color: var(--ion-color-unisa-blue);\n  font-size: 18px;\n  font-weight: var(--ion-font-weight-bold);\n}\n.app-list ion-note div:last-child {\n  font-size: 14px;\n  text-transform: uppercase;\n}\n.app-list ion-label h3 {\n  text-transform: initial;\n}\n.app-list ion-label p {\n  color: var(--ion-color-unisa-base);\n}\nion-slides .swiper-slide {\n  justify-content: flex-start;\n  width: 40%;\n  padding: 20px;\n  background: white;\n  border-radius: 10px;\n}\nion-slides .swiper-slide.empty {\n  width: 100%;\n  font-size: 15px;\n}\nion-slides .swiper-slide h3 {\n  margin: 0;\n}\nion-slides .swiper-slide .tax-subtitle {\n  margin-bottom: 3px;\n  font-size: 12px;\n}\nion-slides .swiper-slide .tax-expiration {\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n  font-size: 13px;\n}\nion-slides .swiper-slide .tax-expiration:before {\n  content: \"\";\n  height: 8px;\n  width: 8px;\n  margin-right: 5px;\n  background: var(--ion-color-unisa-success-green);\n  border-radius: 50%;\n}\nion-slides .swiper-slide .tax-title {\n  color: var(--ion-color-unisa-blue);\n  font-weight: var(--ion-font-weight-bold);\n}\nion-slides .swiper-slide .expired .tax-expiration:before {\n  background: var(--ion-color-unisa-danger-red);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQUFSO0FBRVE7RUFDSSx5QkFBQTtBQUFaO0FBS0E7RUFDSSxXQUFBO0VBQ0EsNEJBQUE7QUFGSjtBQUlJO0VBQ0ksY0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLDRDQUFBO0FBRlI7QUFJUTtFQUNJLGFBQUE7QUFGWjtBQVFJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0FBTFI7QUFPUTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtBQUxaO0FBVVE7RUFDSSx1QkFBQTtBQVJaO0FBV1E7RUFDSSxrQ0FBQTtBQVRaO0FBZUk7RUFDSSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQVpSO0FBY1E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQVpaO0FBZVE7RUFDSSxTQUFBO0FBYlo7QUFnQlE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFkWjtBQWlCUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQWZaO0FBaUJZO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0FBZmhCO0FBbUJRO0VBQ0ksa0NBQUE7RUFDQSx3Q0FBQTtBQWpCWjtBQW9CUTtFQUNJLDZDQUFBO0FBbEJaIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtdGl0bGUge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XHJcblxyXG4gICAgICAgICY6OmZpcnN0LWxldHRlciB7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucGFnZS1tYWluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcclxuXHJcbiAgICAucGFnZS1zdWJ0aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci11bmlzYS1ibHVlKTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWlvbi1mb250LXdlaWdodC1zZW1pYm9sZCk7XHJcblxyXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmFwcC1saXN0IHtcclxuICAgIGlvbi1ub3RlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci11bmlzYS1ibHVlKTtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWlvbi1mb250LXdlaWdodC1ib2xkKTtcclxuXHJcbiAgICAgICAgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXVuaXNhLWJhc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLXNsaWRlcyB7XHJcbiAgICAuc3dpcGVyLXNsaWRlIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICAgICYuZW1wdHkge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGF4LXN1YnRpdGxlIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGF4LWV4cGlyYXRpb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcblxyXG4gICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXVuaXNhLXN1Y2Nlc3MtZ3JlZW4pOztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRheC10aXRsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdW5pc2EtYmx1ZSk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1pb24tZm9udC13ZWlnaHQtYm9sZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZXhwaXJlZCAudGF4LWV4cGlyYXRpb246YmVmb3JlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXVuaXNhLWRhbmdlci1yZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "5c9h":
/*!**************************************************************************!*\
  !*** ./src/app/pages/home/components/news-modal/news-modal.component.ts ***!
  \**************************************************************************/
/*! exports provided: NewsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModalComponent", function() { return NewsModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_news_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./news-modal.component.html */ "Dtru");
/* harmony import */ var _news_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news-modal.component.scss */ "8s7m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let NewsModalComponent = class NewsModalComponent {
    constructor(navParams) {
        this.navParams = navParams;
        this.news = navParams.get('news');
    }
    ngOnInit() { }
};
NewsModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] }
];
NewsModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-news-modal',
        template: _raw_loader_news_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_news_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NewsModalComponent);



/***/ }),

/***/ "8s7m":
/*!****************************************************************************!*\
  !*** ./src/app/pages/home/components/news-modal/news-modal.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".news-content {\n  font-size: 15px;\n  line-height: 20px;\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG5ld3MtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6Im5ld3MtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3cy1jb250ZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufSJdfQ== */");

/***/ }),

/***/ "99Un":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "hsj+");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "9oos");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utility/utility.module */ "SovF");
/* harmony import */ var _components_news_modal_news_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/news-modal/news-modal.component */ "5c9h");









let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"],
            _utility_utility_module__WEBPACK_IMPORTED_MODULE_7__["UtilityModule"]
        ],
        declarations: [
            _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"],
            _components_news_modal_news_modal_component__WEBPACK_IMPORTED_MODULE_8__["NewsModalComponent"]
        ],
        exports: [
            _components_news_modal_news_modal_component__WEBPACK_IMPORTED_MODULE_8__["NewsModalComponent"]
        ]
    })
], HomePageModule);



/***/ }),

/***/ "9oos":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "hsj+");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "Dtru":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/components/news-modal/news-modal.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-modal [title]=\"news.title\">\r\n    <p class=\"news-content\">{{news.content}}</p>\r\n</app-modal>\r\n");

/***/ }),

/***/ "eUf4":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"page-content\">\r\n    <app-refresher [refreshCallback]=\"initOperations\"></app-refresher>\r\n    <div class=\"flex flex-direction-column\">\r\n        <app-header>\r\n            <ion-toolbar>\r\n                <ion-title class=\"page-title\">\r\n                    Ciao,\r\n                    <span *ngIf=\"profile\">{{profile.user.firstName}}</span>\r\n                </ion-title>\r\n            </ion-toolbar>\r\n        </app-header>\r\n        <div class=\"page-main\">\r\n            <h2 class=\"page-subtitle\">Scadenze</h2>\r\n            <ion-slides\r\n                *ngIf=\"taxes.length\"\r\n                [options]=\"slideOpts\"\r\n            >\r\n                <ion-slide *ngFor=\"let tax of taxes\">\r\n                    <ion-item\r\n                        class=\"tax\"\r\n                        [class.expired]=\"taxIsExpired(tax)\"\r\n                    >\r\n                        <ion-label>\r\n                            <div class=\"tax-subtitle\">Scadenza</div>\r\n                            <div\r\n                                *ngIf=\"taxIsExpired(tax)\"\r\n                                class=\"tax-expiration\"\r\n                            >\r\n                                Scadute\r\n                            </div>\r\n                            <div\r\n                                *ngIf=\"!taxIsExpired(tax)\"\r\n                                class=\"tax-expiration\"\r\n                            >\r\n                                {{getTimeLeft(tax)}} giorni rimasti\r\n                            </div>\r\n                            <h3 class=\"tax-title\">{{tax.name}}</h3>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ion-slide>\r\n            </ion-slides>\r\n            <ion-slides\r\n                *ngIf=\"!taxes.length\"\r\n                [options]=\"slideOpts\"\r\n            >\r\n                <ion-slide class=\"empty\">Nessun elemento da mostrare.</ion-slide>\r\n            </ion-slides>\r\n            <h2 class=\"page-subtitle\">News</h2>\r\n            <ion-list class=\"app-list\">\r\n                <ion-item\r\n                    *ngFor=\"let newsItem of news\"\r\n                    (click)=\"presentNewsModal(newsItem)\"\r\n                >\r\n                    <ion-note>\r\n                        <div>{{getNewsDate(newsItem).date}}</div>\r\n                        <div>{{getNewsDate(newsItem).month}}</div>\r\n                    </ion-note>\r\n                    <ion-label>\r\n                        <h3>{{newsItem.title}}</h3>\r\n                        <p>{{newsItem.content}}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ion-list>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "hsj+":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "eUf4");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "/rnz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_esse3_tax_tax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/esse3/tax/tax.service */ "tPuo");
/* harmony import */ var src_app_services_news_news_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/news/news.service */ "nulM");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var _components_news_modal_news_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/news-modal/news-modal.component */ "5c9h");










let HomePage = class HomePage {
    constructor(userService, newsService, taxService, modalController) {
        this.userService = userService;
        this.newsService = newsService;
        this.taxService = taxService;
        this.modalController = modalController;
        this.NEWS_TO_SHOW = 3;
        this.NEWS_MAX_CONTENT = 100;
        this.ONE_DAY = 640000000;
        this.months = [
            'Gennaio',
            'Febbraio',
            'Marzo',
            'Aprile',
            'Maggio',
            'Giugno',
            'Luglio',
            'Agosto',
            'Settembre',
            'Ottobre',
            'Novembre',
            'Dicembre'
        ];
        this.slideOpts = {
            spaceBetween: 20,
            slidesPerView: 'auto'
        };
        this.profile = null;
        this.taxes = [];
        this.initOperations = this.initOperations.bind(this);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.profile = yield this.userService.getUser();
            this.initOperations();
        });
    }
    /**
     * Permette di inizializzare il componente ottenendo le ultime news
     * dell'ateneo e le tasse da pagare.
     */
    initOperations() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([
            this.newsService.getNews(),
            this.taxService.getTax(this.profile.user.persId)
        ])
            .subscribe((results) => {
            const news = results[0];
            const taxes = results[1];
            this.news = this.getLatestNews(news);
            this.taxes = this.getDueTax(taxes);
        });
    }
    /**
     * Preleva le ultime news di ateneo.
     *
     * @param news L'array di news dell'atenero.
     */
    getLatestNews(news) {
        return news.slice(0, this.NEWS_TO_SHOW);
    }
    /**
     * Preleva le tasse da pagare.
     *
     * @param tax L'array di tasse.
     */
    getDueTax(taxes) {
        return taxes.filter(tax => !tax.payed)
            .sort((t1, t2) => {
            return t1.expirationDate.getTime() - t2.expirationDate.getTime();
        });
    }
    /**
     * Restituisce la data della notizia specificando il giorno e il mese in italiano.
     *
     * @param news La notizia.
     */
    getNewsDate(news) {
        return {
            date: `0${news.date.getDate().toString()}`.slice(-2),
            month: this.months[news.date.getMonth()].slice(0, 3)
        };
    }
    /**
     * Verifica se una tassa è scaduta.
     *
     * @param tax La tassa da analizzare.
     */
    taxIsExpired(tax) {
        return new Date() > tax.expirationDate;
    }
    /**
     * Restituisce i giorni rimanenti per il pagamento della specifica tassa.
     *
     * @param tax La tassa da analizzare.
     */
    getTimeLeft(tax) {
        const now = new Date();
        const expirationDate = tax.expirationDate;
        return expirationDate.getDate() - now.getDate();
    }
    /**
     * Mostra i dettagli di una specifica news.
     *
     * @param news News.
     */
    presentNewsModal(news) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_news_modal_news_modal_component__WEBPACK_IMPORTED_MODULE_9__["NewsModalComponent"],
                componentProps: {
                    news: news
                },
                cssClass: 'app-modal'
            });
            yield modal.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: src_app_services_news_news_service__WEBPACK_IMPORTED_MODULE_7__["NewsService"] },
    { type: src_app_services_esse3_tax_tax_service__WEBPACK_IMPORTED_MODULE_6__["TaxService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ }),

/***/ "nulM":
/*!***********************************************!*\
  !*** ./src/app/services/news/news.service.ts ***!
  \***********************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let NewsService = class NewsService {
    constructor(http) {
        this.http = http;
        this.base = 'https://www.unisa.it/proxy-test/rss/news/';
    }
    /**
     * Effettua il parsinga di una stringa HTML.
     *
     * @param html La stringa HTML da parsare.
     */
    parseHTML(html) {
        const div = document.createElement('DIV');
        div.innerHTML = html;
        return div.textContent.trim();
    }
    /**
     * Preleva le news di ateneo sfruttando il servizio RSS messo a disposizione dall'Università.
     * La risposta restituita è in formato XML, quindi si vede necessario manipolarla opportunamente
     * al fine di restituire i dati di interesse in maniera pulita.
     */
    getNews() {
        return this.http.get(this.base, {
            responseType: 'text'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            const doc = new DOMParser().parseFromString(res, 'text/xml');
            const items = doc.querySelectorAll('item');
            const news = [];
            Array.from(items).forEach(item => {
                const title = item.querySelector('title');
                const date = item.querySelector('pubDate');
                const content = item.querySelector('encoded');
                news.push({
                    title: title.textContent,
                    date: new Date(date.textContent),
                    content: this.parseHTML(content.textContent)
                });
            });
            return news;
        }));
    }
};
NewsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
NewsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], NewsService);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map