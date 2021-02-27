(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rooms-rooms-module"], {
    /***/
    "413l":
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/agendaweb/rooms/components/event-modal/event-modal.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: EventModalComponent */

    /***/
    function l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventModalComponent", function () {
        return EventModalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_event_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./event-modal.component.html */
      "efMm");
      /* harmony import */


      var _event_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./event-modal.component.scss */
      "hSX2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var EventModalComponent = /*#__PURE__*/function () {
        function EventModalComponent(navParams) {
          _classCallCheck(this, EventModalComponent);

          this.navParams = navParams;
          this.events = navParams.get('events');
        }

        _createClass(EventModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EventModalComponent;
      }();

      EventModalComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }];
      };

      EventModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-event-modal',
        template: _raw_loader_event_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_event_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EventModalComponent);
      /***/
    },

    /***/
    "6amI":
    /*!*******************************************************!*\
      !*** ./src/app/pages/agendaweb/rooms/rooms.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function amI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-slide:first-child ion-item::part(native) {\n  align-items: flex-start;\n  flex-direction: column;\n}\nion-slide:first-child ion-label {\n  transform: scale(1);\n  font-size: 16px;\n  font-weight: var(--ion-font-weight-semibold);\n}\nion-slide form {\n  width: 100%;\n}\n.app-list {\n  margin-bottom: 30px;\n}\n.app-list ion-select {\n  padding: 0;\n  font-size: 14px;\n}\n.app-list ion-select::part(placeholder) {\n  color: var(--ion-color-unisa-base);\n  opacity: 1;\n}\n.app-list ion-select::part(icon) {\n  display: none;\n}\n.app-list ion-datetime {\n  padding: 0;\n  color: var(--ion-color-unisa-base);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFnZW5kYXdlYi5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXHJvb21zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7QUNEWjtBRElRO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7QUNGWjtBRE1JO0VBQ0ksV0FBQTtBQ0pSO0FEUUE7RUFDSSxtQkFBQTtBQ0xKO0FET0k7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQ0xSO0FET1E7RUFDSSxrQ0FBQTtFQUNBLFVBQUE7QUNMWjtBRFFRO0VBQ0ksYUFBQTtBQ05aO0FEVUk7RUFDSSxVQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0FDUlIiLCJmaWxlIjoicm9vbXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlIHtcclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIGlvbi1pdGVtOjpwYXJ0KG5hdGl2ZSkge1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWlvbi1mb250LXdlaWdodC1zZW1pYm9sZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvcm0ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYXBwLWxpc3Qge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgICBpb24tc2VsZWN0IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICAgICAgJjo6cGFydChwbGFjZWhvbGRlcikge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXVuaXNhLWJhc2UpO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6cGFydChpY29uKSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1kYXRldGltZSB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXVuaXNhLWJhc2UpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxufVxyXG4iLCJpb24tc2xpZGU6Zmlyc3QtY2hpbGQgaW9uLWl0ZW06OnBhcnQobmF0aXZlKSB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuaW9uLXNsaWRlOmZpcnN0LWNoaWxkIGlvbi1sYWJlbCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWlvbi1mb250LXdlaWdodC1zZW1pYm9sZCk7XG59XG5pb24tc2xpZGUgZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYXBwLWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmFwcC1saXN0IGlvbi1zZWxlY3Qge1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uYXBwLWxpc3QgaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlcikge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXVuaXNhLWJhc2UpO1xuICBvcGFjaXR5OiAxO1xufVxuLmFwcC1saXN0IGlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmFwcC1saXN0IGlvbi1kYXRldGltZSB7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdW5pc2EtYmFzZSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "7okq":
    /*!*****************************************************!*\
      !*** ./src/app/pages/agendaweb/rooms/rooms.page.ts ***!
      \*****************************************************/

    /*! exports provided: RoomsPage */

    /***/
    function okq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoomsPage", function () {
        return RoomsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_rooms_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./rooms.page.html */
      "DS06");
      /* harmony import */


      var _rooms_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./rooms.page.scss */
      "6amI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_agendaweb_rooms_rooms_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/agendaweb/rooms/rooms.service */
      "w1wo");
      /* harmony import */


      var _components_event_modal_event_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/event-modal/event-modal.component */
      "413l");

      var RoomsPage = /*#__PURE__*/function () {
        function RoomsPage(formBuilder, roomsService, modalController) {
          _classCallCheck(this, RoomsPage);

          this.formBuilder = formBuilder;
          this.roomsService = roomsService;
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
          this.pickerOptions = {
            cssClass: 'form-picker'
          };
          this.labels = ['Ricerca', 'Riepilogo'];
          this.activeIndex = 0;
          this.isReady = false;
          this.buildings = [];
          this.rooms = {};
          this.roomsForm = this.formBuilder.group({
            building: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
          });
          this.getRoomsFilter = this.getRoomsFilter.bind(this);
        }

        _createClass(RoomsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getRoomsFilter();
          }
          /**
           * Aggiorna la slide alla pressione in base allo specifico Segment Button.
           *
           * @param event L'evento associato al Segment Button.
           */

        }, {
          key: "slideTo",
          value: function slideTo(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var target, value;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      target = event.target;
                      value = parseInt(target.value);
                      _context.next = 4;
                      return this.slides.slideTo(value);

                    case 4:
                      this.activeIndex = value;

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
          /**
           * Aggiorna il Segment Button sulla base dell'indice corrente della slide.
           */

        }, {
          key: "setActiveIndex",
          value: function setActiveIndex() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var index, button;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.slides.getActiveIndex();

                    case 2:
                      index = _context2.sent;

                      if (index !== this.activeIndex) {
                        button = this.segment['el'].children[index];
                        button.click();
                      }

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
          /**
           * Trasforma la data nel formato locale (italiano DD/MM/YYYY).
           *
           * @param date La data da manipolare.
           */

        }, {
          key: "toLocalDateString",
          value: function toLocalDateString(date) {
            return new Date(date).toLocaleDateString().replace(/\//g, '-');
          }
          /**
           * Verifica se l'oggetto rooms è vuoto.
           */

        }, {
          key: "roomsIsEmpty",
          value: function roomsIsEmpty() {
            return !Object.keys(this.rooms).length;
          }
          /**
           * Recupera le combo di filtraggio.
           */

        }, {
          key: "getRoomsFilter",
          value: function getRoomsFilter() {
            var _this = this;

            return this.roomsService.getRoomsFilter().subscribe(function (res) {
              _this.isReady = true;
              _this.buildings = res;
            });
          }
          /**
           * Recupera l'elenco delle aule e dei relativi eventi ad esse associati.
           */

        }, {
          key: "getRooms",
          value: function getRooms() {
            var _this2 = this;

            this.roomsService.getRooms(this.roomsForm.value.building, this.toLocalDateString(this.roomsForm.value.date)).subscribe(function (res) {
              _this2.rooms = res;
              setTimeout(function () {
                _this2.activeIndex++;

                _this2.slides.slideTo(_this2.activeIndex);
              }, 300);
            });
          }
          /**
           * Mostra un modale contenente gli eventi relativi ad una specifica aula.
           *
           * @param events La lista degli eventi.
           */

        }, {
          key: "getRoomEvents",
          value: function getRoomEvents(events) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: _components_event_modal_event_modal_component__WEBPACK_IMPORTED_MODULE_7__["EventModalComponent"],
                        componentProps: {
                          events: events
                        },
                        cssClass: 'app-modal'
                      });

                    case 2:
                      modal = _context3.sent;
                      _context3.next = 5;
                      return modal.present();

                    case 5:
                      return _context3.abrupt("return", _context3.sent);

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return RoomsPage;
      }();

      RoomsPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_services_agendaweb_rooms_rooms_service__WEBPACK_IMPORTED_MODULE_6__["RoomsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }];
      };

      RoomsPage.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"]]
        }],
        segment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSegment"]]
        }]
      };
      RoomsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-rooms',
        template: _raw_loader_rooms_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_rooms_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RoomsPage);
      /***/
    },

    /***/
    "DS06":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agendaweb/rooms/rooms.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function DS06(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"page-content\">\r\n    <app-refresher [refreshCallback]=\"getRoomsFilter\"></app-refresher>\r\n    <div class=\"flex flex-direction-column\">\r\n        <app-header>\r\n            <ion-toolbar>\r\n                <ion-title class=\"page-title\">Aule</ion-title>\r\n            </ion-toolbar>\r\n            <ion-toolbar class=\"segment-toolbar\">\r\n                <ion-segment\r\n                    [value]=\"activeIndex\"\r\n                    (ionChange)=\"slideTo($event)\"\r\n                    swipeGesture=\"false\"\r\n                >\r\n                    <ion-segment-button\r\n                        *ngFor=\"let label of labels; index as i\"\r\n                        [value]=\"i\"\r\n                    >\r\n                        <ion-label>{{label}}</ion-label>\r\n                    </ion-segment-button>\r\n                </ion-segment>\r\n            </ion-toolbar>\r\n        </app-header>\r\n        <div class=\"page-main\">\r\n            <ion-slides\r\n                *ngIf=\"isReady\"\r\n                (ionSlideWillChange)=\"setActiveIndex()\"\r\n                [options]=\"slideOpts\"\r\n            >\r\n                <ion-slide>\r\n                    <form\r\n                        [formGroup]=\"roomsForm\"\r\n                        (submit)=\"getRooms()\"\r\n                    >\r\n                        <ion-list class=\"app-list\">\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h3>Edificio</h3>\r\n                                </ion-label>\r\n                                <ion-select\r\n                                    cancelText=\"Cancella\"\r\n                                    formControlName=\"building\"\r\n                                    interface=\"action-sheet\"\r\n                                    placeholder=\"Seleziona\"\r\n                                    [interfaceOptions]=\"customActionSheetOptions\"\r\n                                >\r\n                                    <ion-select-option\r\n                                        *ngFor=\"let building of buildings; index as i\"\r\n                                        [value]=\"building.valore\"\r\n                                    >\r\n                                        {{building.label}}\r\n                                    </ion-select-option>\r\n                                </ion-select>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h3>Data</h3>\r\n                                </ion-label>\r\n                                <ion-datetime\r\n                                    cancelText=\"Cancella\"\r\n                                    displayFormat=\"DD-MM-YYYY\"\r\n                                    doneText=\"Ok\"\r\n                                    formControlName=\"date\"\r\n                                    mode=\"md\"\r\n                                    placeholder=\"Seleziona\"\r\n                                    [pickerOptions]=\"pickerOptions\"\r\n                                ></ion-datetime>\r\n                            </ion-item>\r\n                        </ion-list>\r\n                        <ion-button\r\n                            class=\"form-submit form-submit--button\"\r\n                            type=\"submit\"\r\n                            [disabled]=\"!roomsForm.valid\"\r\n                        >\r\n                            Cerca\r\n                        </ion-button>\r\n                    </form>\r\n                </ion-slide>\r\n                <ion-slide>\r\n                    <ion-list class=\"app-list\">\r\n                        <ion-item\r\n                            *ngFor=\"let room of rooms | keyvalue\"\r\n                            (click)=\"getRoomEvents(room.value.events)\"\r\n                        >\r\n                            <ion-label>\r\n                                <h3>Aula {{room.value.name}}</h3>\r\n                                <div>\r\n                                    <i class=\"fas fa-clock\"></i>\r\n                                    <div>\r\n                                        <span *ngFor=\"let slot of room.value.timeSlots\">\r\n                                            {{slot.from | date:'HH:mm'}} - {{slot.to  | date:'HH:mm'}}\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                            </ion-label>\r\n                        </ion-item>\r\n                        <ion-item *ngIf=\"roomsIsEmpty()\">\r\n                            Nessun elemento da mostrare.\r\n                        </ion-item>\r\n                    </ion-list>\r\n                </ion-slide>\r\n            </ion-slides>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "H5/n":
    /*!***************************************************************!*\
      !*** ./src/app/pages/agendaweb/rooms/rooms-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: RoomsPageRoutingModule */

    /***/
    function H5N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoomsPageRoutingModule", function () {
        return RoomsPageRoutingModule;
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


      var _rooms_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./rooms.page */
      "7okq");

      var routes = [{
        path: '',
        component: _rooms_page__WEBPACK_IMPORTED_MODULE_3__["RoomsPage"]
      }];

      var RoomsPageRoutingModule = function RoomsPageRoutingModule() {
        _classCallCheck(this, RoomsPageRoutingModule);
      };

      RoomsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RoomsPageRoutingModule);
      /***/
    },

    /***/
    "WBLT":
    /*!*******************************************************!*\
      !*** ./src/app/pages/agendaweb/rooms/rooms.module.ts ***!
      \*******************************************************/

    /*! exports provided: RoomsPageModule */

    /***/
    function WBLT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoomsPageModule", function () {
        return RoomsPageModule;
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


      var _rooms_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./rooms-routing.module */
      "H5/n");
      /* harmony import */


      var _rooms_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./rooms.page */
      "7okq");
      /* harmony import */


      var _utility_utility_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../utility/utility.module */
      "SovF");
      /* harmony import */


      var _components_event_modal_event_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/event-modal/event-modal.component */
      "413l");

      var RoomsPageModule = function RoomsPageModule() {
        _classCallCheck(this, RoomsPageModule);
      };

      RoomsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _rooms_routing_module__WEBPACK_IMPORTED_MODULE_5__["RoomsPageRoutingModule"], _utility_utility_module__WEBPACK_IMPORTED_MODULE_7__["UtilityModule"]],
        declarations: [_rooms_page__WEBPACK_IMPORTED_MODULE_6__["RoomsPage"], _components_event_modal_event_modal_component__WEBPACK_IMPORTED_MODULE_8__["EventModalComponent"]],
        exports: [_components_event_modal_event_modal_component__WEBPACK_IMPORTED_MODULE_8__["EventModalComponent"]]
      })], RoomsPageModule);
      /***/
    },

    /***/
    "efMm":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agendaweb/rooms/components/event-modal/event-modal.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function efMm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-modal title=\"Eventi\">\r\n    <ion-list>\r\n        <ion-item *ngFor=\"let event of events\">\r\n            <ion-label>\r\n                <h3>{{event.name}}</h3>\r\n                <div>\r\n                    <i class=\"fas fa-tag\"></i>\r\n                    <span>{{event.type}}</span>\r\n                </div>\r\n                <div>\r\n                    <i class=\"fas fa-clock\"></i>\r\n                    <span>\r\n                        {{event.from | date:'HH:mm'}} - {{event.to  | date:'HH:mm'}}\r\n                    </span>\r\n                </div>\r\n            </ion-label>\r\n        </ion-item>\r\n    </ion-list>\r\n</app-modal>\r\n";
      /***/
    },

    /***/
    "hSX2":
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/agendaweb/rooms/components/event-modal/event-modal.component.scss ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function hSX2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  margin-bottom: 30px;\n}\nion-item:last-child {\n  margin-bottom: 0;\n}\nion-item ion-label h3 {\n  overflow: visible;\n  margin-top: 0;\n  margin-bottom: 10px;\n  color: var(--ion-color-unisa-blue);\n  font-size: 16px;\n  font-weight: var(--ion-font-weight-semibold);\n  text-transform: lowercase;\n  text-overflow: initial;\n  white-space: initial;\n}\nion-item ion-label h3::first-letter {\n  text-transform: uppercase;\n}\nion-item ion-label div:not(:last-child) {\n  margin-bottom: 5px;\n}\nion-item ion-label span {\n  margin-left: 10px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxldmVudC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7QUFDSTtFQUNJLGdCQUFBO0FBQ1I7QUFHUTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFEWjtBQUdZO0VBQ0kseUJBQUE7QUFEaEI7QUFLUTtFQUNJLGtCQUFBO0FBSFo7QUFNUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQUpaIiwiZmlsZSI6ImV2ZW50LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXVuaXNhLWJsdWUpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1pb24tZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBpbml0aWFsO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcclxuXHJcbiAgICAgICAgICAgICY6OmZpcnN0LWxldHRlciB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "w1wo":
    /*!***********************************************************!*\
      !*** ./src/app/services/agendaweb/rooms/rooms.service.ts ***!
      \***********************************************************/

    /*! exports provided: RoomsService */

    /***/
    function w1wo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoomsService", function () {
        return RoomsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var RoomsService = /*#__PURE__*/function () {
        function RoomsService(http) {
          _classCallCheck(this, RoomsService);

          this.http = http;
          this.base = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].easycourseApi, "/AgendaStudenti/");
        }

        _createClass(RoomsService, [{
          key: "parseResponse",
          value: function parseResponse(res) {
            return JSON.parse(res.split(';')[0]);
          }
          /**
           * Preleva le combo di filtraggio per la selezione delle aule.
           */

        }, {
          key: "getRoomsFilter",
          value: function getRoomsFilter() {
            var _this3 = this;

            return this.http.get("".concat(this.base, "/combo_call_new.php"), {
              params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('sw', 'rooms_'),
              responseType: 'text'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return _this3.parseResponse(res);
            }));
          }
          /**
           * Preleva l'elenco delle aule con le relative attività durante la specifica giornata.
           *
           * @param building Il codice dell'edificio.
           * @param date La data.
           */

        }, {
          key: "getRooms",
          value: function getRooms(building, date) {
            return this.http.get("".concat(this.base, "/rooms_call_new.php"), {
              params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('view', 'rooms').set('include', 'rooms').set('sede', building).set('date', date)
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              var events = res.events;
              var rooms = {};
              events.forEach(function (event) {
                if (!(event.CodiceAula in rooms)) {
                  var room = {};
                  room.name = event.NomeAula;
                  room.code = event.CodiceAula;
                  room.timeSlots = [{
                    from: new Date(event.timestamp_from * 1000),
                    to: new Date(event.timestamp_to * 1000)
                  }];
                  room.events = [{
                    name: event.nome.replace('<i class="fa fa-asterisk" aria-hidden title="*"></i>', '').trim(),
                    type: event.tipo,
                    profs: event.Utenti.map(function (user) {
                      return {
                        firstname: user.Nome,
                        lastname: user.Cognome,
                        mail: user.Mail
                      };
                    }),
                    from: new Date(event.timestamp_from * 1000),
                    to: new Date(event.timestamp_to * 1000)
                  }];
                  rooms[event.CodiceAula] = room;
                } else {
                  rooms[event.CodiceAula].timeSlots.push({
                    from: new Date(event.timestamp_from * 1000),
                    to: new Date(event.timestamp_to * 1000)
                  });
                  rooms[event.CodiceAula].events.push({
                    name: event.nome.replace('<i class="fa fa-asterisk" aria-hidden title="*"></i>', '').trim(),
                    type: event.tipo,
                    profs: event.Utenti.map(function (user) {
                      return {
                        firstname: user.Nome,
                        lastname: user.Cognome,
                        mail: user.Mail
                      };
                    }),
                    from: new Date(event.timestamp_from * 1000),
                    to: new Date(event.timestamp_to * 1000)
                  });
                }
              });
              return rooms;
            }));
          }
        }]);

        return RoomsService;
      }();

      RoomsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      RoomsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], RoomsService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=rooms-rooms-module-es5.js.map