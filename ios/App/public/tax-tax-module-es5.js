(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tax-tax-module"], {
    /***/
    "HyxV":
    /*!*********************************************!*\
      !*** ./src/app/pages/esse3/tax/tax.page.ts ***!
      \*********************************************/

    /*! exports provided: TaxPage */

    /***/
    function HyxV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaxPage", function () {
        return TaxPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tax_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tax.page.html */
      "xSrw");
      /* harmony import */


      var _tax_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tax.page.scss */
      "wVQI");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_esse3_tax_tax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/esse3/tax/tax.service */
      "tPuo");
      /* harmony import */


      var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/user/user.service */
      "CFL1");

      var TaxPage = /*#__PURE__*/function () {
        function TaxPage(userService, taxService) {
          _classCallCheck(this, TaxPage);

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

        _createClass(TaxPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var profile;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.userService.getUser();

                    case 2:
                      profile = _context.sent;
                      this.persId = profile.user.persId;
                      this.getTax();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
          /**
           * Recupera le tasse dello studente.
           */

        }, {
          key: "getTax",
          value: function getTax() {
            var _this = this;

            return this.taxService.getTax(this.persId).subscribe(function (taxs) {
              taxs.forEach(function (tax) {
                var index = tax.payed ? 0 : 1;

                _this.taxsList[index].push(tax);
              });
              _this.isReady = true;
            });
          }
          /**
           * Restituisce la data della tase in base a se la tassa è stata pagata o meno.
           *
           * @param tax la specifica tassa.
           */

        }, {
          key: "getDate",
          value: function getDate(tax) {
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

        }, {
          key: "slideTo",
          value: function slideTo(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var target, value;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      target = event.target;
                      value = parseInt(target.value);
                      _context2.next = 4;
                      return this.slides.slideTo(value);

                    case 4:
                      this.activeIndex = value;

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
          /**
           * Aggiorna il Segment Button sulla base dell'indice corrente della slide.
           */

        }, {
          key: "setActiveIndex",
          value: function setActiveIndex() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var index, button;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.slides.getActiveIndex();

                    case 2:
                      index = _context3.sent;

                      if (index !== this.activeIndex) {
                        button = this.segment['el'].children[index];
                        button.click();
                      }

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return TaxPage;
      }();

      TaxPage.ctorParameters = function () {
        return [{
          type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }, {
          type: src_app_services_esse3_tax_tax_service__WEBPACK_IMPORTED_MODULE_5__["TaxService"]
        }];
      };

      TaxPage.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"]]
        }],
        segment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSegment"]]
        }]
      };
      TaxPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-tax',
        template: _raw_loader_tax_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tax_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TaxPage);
      /***/
    },

    /***/
    "lI8M":
    /*!*******************************************************!*\
      !*** ./src/app/pages/esse3/tax/tax-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: TaxPageRoutingModule */

    /***/
    function lI8M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaxPageRoutingModule", function () {
        return TaxPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _tax_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tax.page */
      "HyxV");

      var routes = [{
        path: '',
        component: _tax_page__WEBPACK_IMPORTED_MODULE_3__["TaxPage"]
      }];

      var TaxPageRoutingModule = function TaxPageRoutingModule() {
        _classCallCheck(this, TaxPageRoutingModule);
      };

      TaxPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TaxPageRoutingModule);
      /***/
    },

    /***/
    "o5to":
    /*!***********************************************!*\
      !*** ./src/app/pages/esse3/tax/tax.module.ts ***!
      \***********************************************/

    /*! exports provided: TaxPageModule */

    /***/
    function o5to(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaxPageModule", function () {
        return TaxPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _tax_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tax-routing.module */
      "lI8M");
      /* harmony import */


      var _tax_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tax.page */
      "HyxV");
      /* harmony import */


      var _utility_utility_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../utility/utility.module */
      "SovF");

      var TaxPageModule = function TaxPageModule() {
        _classCallCheck(this, TaxPageModule);
      };

      TaxPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tax_routing_module__WEBPACK_IMPORTED_MODULE_5__["TaxPageRoutingModule"], _utility_utility_module__WEBPACK_IMPORTED_MODULE_7__["UtilityModule"]],
        declarations: [_tax_page__WEBPACK_IMPORTED_MODULE_6__["TaxPage"]]
      })], TaxPageModule);
      /***/
    },

    /***/
    "wVQI":
    /*!***********************************************!*\
      !*** ./src/app/pages/esse3/tax/tax.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function wVQI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXgucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "xSrw":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/esse3/tax/tax.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function xSrw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"page-content\">\r\n    <app-refresher [refreshCallback]=\"getTax\"></app-refresher>\r\n    <div class=\"flex flex-direction-column\">\r\n        <app-header>\r\n            <ion-toolbar>\r\n                <ion-title class=\"page-title\">Tasse</ion-title>\r\n            </ion-toolbar>\r\n            <ion-toolbar class=\"segment-toolbar\">\r\n                <ion-segment\r\n                    [value]=\"activeIndex\"\r\n                    (ionChange)=\"slideTo($event)\"\r\n                    swipeGesture=\"false\"\r\n                >\r\n                    <ion-segment-button\r\n                        *ngFor=\"let label of labels; index as i\"\r\n                        [value]=\"i\"\r\n                    >\r\n                        <ion-label>{{label}}</ion-label>\r\n                    </ion-segment-button>\r\n                </ion-segment>\r\n            </ion-toolbar>\r\n        </app-header>\r\n        <div class=\"page-main\">\r\n            <ion-slides\r\n                *ngIf=\"isReady\"\r\n                (ionSlideWillChange)=\"setActiveIndex()\"\r\n                [options]=\"slideOpts\"\r\n            >\r\n                <ion-slide *ngFor=\"let taxs of taxsList\">\r\n                    <ion-list class=\"app-list\">\r\n                        <ion-item *ngFor=\"let tax of taxs\">\r\n                            <ion-label>\r\n                                <h3>{{tax.name}}</h3>\r\n                                <div>\r\n                                    <i class=\"far fa-calendar\"></i>\r\n                                    <span>{{getDate(tax) | date:'dd/MM/yyyy'}}</span>\r\n                                </div>\r\n                                <div>\r\n                                    <i class=\"fas fa-money-bill\"></i>\r\n                                    <span>{{tax.amount}} €</span>\r\n                                </div>\r\n                            </ion-label>\r\n                        </ion-item>\r\n                        <ion-item *ngIf=\"taxs.length === 0\">Nessun elemento da mostrare.</ion-item>\r\n                    </ion-list>\r\n                </ion-slide>\r\n            </ion-slides>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=tax-tax-module-es5.js.map