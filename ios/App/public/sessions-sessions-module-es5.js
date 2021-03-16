(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sessions-sessions-module"], {
    /***/
    "/pR7":
    /*!*************************************************************!*\
      !*** ./src/app/pages/agendaweb/sessions/sessions.module.ts ***!
      \*************************************************************/

    /*! exports provided: SessionsPageModule */

    /***/
    function pR7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionsPageModule", function () {
        return SessionsPageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _sessions_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sessions.page */
      "LL5f");
      /* harmony import */


      var _utility_utility_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../utility/utility.module */
      "SovF");
      /* harmony import */


      var _sessions_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./sessions-routing.module */
      "i4ex");
      /* harmony import */


      var _components_session_modal_session_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/session-modal/session-modal.component */
      "DJpq");
      /* harmony import */


      var _components_sessions_course_sessions_course_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/sessions-course/sessions-course.component */
      "54PU");
      /* harmony import */


      var _components_sessions_prof_sessions_prof_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/sessions-prof/sessions-prof.component */
      "UYoB");

      var SessionsPageModule = function SessionsPageModule() {
        _classCallCheck(this, SessionsPageModule);
      };

      SessionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _sessions_routing_module__WEBPACK_IMPORTED_MODULE_7__["SessionsPageRoutingModule"], _utility_utility_module__WEBPACK_IMPORTED_MODULE_6__["UtilityModule"]],
        declarations: [_sessions_page__WEBPACK_IMPORTED_MODULE_5__["SessionsPage"], _components_sessions_course_sessions_course_component__WEBPACK_IMPORTED_MODULE_9__["SessionsCourseComponent"], _components_sessions_prof_sessions_prof_component__WEBPACK_IMPORTED_MODULE_10__["SessionsProfComponent"], _components_session_modal_session_modal_component__WEBPACK_IMPORTED_MODULE_8__["SessionModalComponent"]],
        exports: [_components_sessions_course_sessions_course_component__WEBPACK_IMPORTED_MODULE_9__["SessionsCourseComponent"], _components_sessions_prof_sessions_prof_component__WEBPACK_IMPORTED_MODULE_10__["SessionsProfComponent"], _components_session_modal_session_modal_component__WEBPACK_IMPORTED_MODULE_8__["SessionModalComponent"]]
      })], SessionsPageModule);
      /***/
    },

    /***/
    "24r6":
    /*!*************************************************************!*\
      !*** ./src/app/pages/agendaweb/sessions/sessions.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function r6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXNzaW9ucy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "54PU":
    /*!**************************************************************************************************!*\
      !*** ./src/app/pages/agendaweb/sessions/components/sessions-course/sessions-course.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: SessionsCourseComponent */

    /***/
    function PU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionsCourseComponent", function () {
        return SessionsCourseComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sessions_course_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sessions-course.component.html */
      "Nf6N");
      /* harmony import */


      var _sessions_course_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sessions-course.component.scss */
      "OISu");
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


      var src_app_services_agendaweb_sessions_sessions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/agendaweb/sessions/sessions.service */
      "Cdw7");
      /* harmony import */


      var _session_modal_session_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../session-modal/session-modal.component */
      "DJpq");

      var SessionsCourseComponent = /*#__PURE__*/function () {
        function SessionsCourseComponent(sessionsService, formBuilder, modalController) {
          _classCallCheck(this, SessionsCourseComponent);

          this.sessionsService = sessionsService;
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
          this.labels = ['Ricerca', 'Riepilogo'];
          this.activeIndex = 0;
          this.isReady = false;
          this.searchParams = [];
          this.yearIndex = -1;
          this.courseIndex = -1;
          this.courseYearIndex = -1;
          this.sessions = [];
          this.sessionsForm = this.formBuilder.group({
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            course: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            courseYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            term: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
          });
          this.getSessionsFiltersByCourse = this.getSessionsFiltersByCourse.bind(this);
        }

        _createClass(SessionsCourseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getSessionsFiltersByCourse();
          }
          /**
           * Recupera le combo di filtraggio.
           */

        }, {
          key: "getSessionsFiltersByCourse",
          value: function getSessionsFiltersByCourse() {
            var _this = this;

            return this.sessionsService.getSessionsFiltersByCourse().subscribe(function (res) {
              _this.isReady = true;
              _this.searchParams = res;
            });
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
           * Aggiorna l'indice dell'anno corrente.
           *
           * @param event L'evento associato allo Ion Select.
           */

        }, {
          key: "setYearIndex",
          value: function setYearIndex(event) {
            if (this.yearIndex !== -1) {
              this.sessionsForm.controls.course.reset();
              this.sessionsForm.controls.courseYear.reset();
              this.sessionsForm.controls.term.reset();
              this.courseIndex = -1;
              this.courseYearIndex = -1;
            }

            this.yearIndex = event.detail.value.index;
          }
          /**
           * Aggiorna l'indice del corso di laurea.
           *
           * @param event L'evento associato allo Ion Select.
           */

        }, {
          key: "setCourseIndex",
          value: function setCourseIndex(event) {
            if (this.courseIndex !== -1) {
              this.sessionsForm.controls.courseYear.reset();
              this.sessionsForm.controls.term.reset();
              this.courseYearIndex = -1;
            }

            this.courseIndex = event.detail.value.index;
          }
          /**
           * Aggiorna l'indice dell'anno del corso di laurea.
           *
           * @param event L'evento associato allo Ion Select.
           */

        }, {
          key: "setCourseYearIndex",
          value: function setCourseYearIndex(event) {
            if (this.courseYearIndex !== -1) {
              this.sessionsForm.controls.term.reset();
            }

            this.courseYearIndex = event.detail.value.index;
          }
          /**
           * Recupera l'elenco dei corsi di laurea in base all'anno.
           */

        }, {
          key: "getCourses",
          value: function getCourses() {
            if (this.yearIndex === -1) {
              return [];
            }

            return this.searchParams[this.yearIndex].elenco;
          }
          /**
           * Recupera l'elenco degli anni relativi allo specifico corsoo di laurea.
           */

        }, {
          key: "getCourseYears",
          value: function getCourseYears() {
            if (this.courseIndex === -1) {
              return [];
            }

            return this.getCourses()[this.courseIndex].elenco_anni;
          }
          /**
           * Recupera le sessioni attive sulla base dell'anno di corso selezionato.
           */

        }, {
          key: "getTerms",
          value: function getTerms() {
            if (this.courseYearIndex === -1) {
              return [];
            }

            return this.getCourseYears()[this.courseYearIndex].elenco_sessioni;
          }
          /**
           * Recupera la lista degli appelli sulla base dei filtri selezionati dallo studente.
           */

        }, {
          key: "getSessions",
          value: function getSessions() {
            var _this2 = this;

            this.sessionsService.getSessionsByCourse(this.sessionsForm.value.year.value, this.sessionsForm.value.course.value, this.sessionsForm.value.courseYear.value, this.sessionsForm.value.term.value).subscribe(function (res) {
              _this2.sessions = res;
              setTimeout(function () {
                _this2.activeIndex++;

                _this2.slides.slideTo(_this2.activeIndex);
              }, 300);
            });
          }
          /**
           * Mostra un modale contenete i dettagli di uno specifico appello.
           *
           * @param session Lo specifico appello.
           */

        }, {
          key: "getSessionDetails",
          value: function getSessionDetails(session) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: _session_modal_session_modal_component__WEBPACK_IMPORTED_MODULE_7__["SessionModalComponent"],
                        componentProps: {
                          session: session
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

        return SessionsCourseComponent;
      }();

      SessionsCourseComponent.ctorParameters = function () {
        return [{
          type: src_app_services_agendaweb_sessions_sessions_service__WEBPACK_IMPORTED_MODULE_6__["SessionsService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }];
      };

      SessionsCourseComponent.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"]]
        }],
        segment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSegment"]]
        }]
      };
      SessionsCourseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sessions-course',
        template: _raw_loader_sessions_course_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sessions_course_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SessionsCourseComponent);
      /***/
    },

    /***/
    "6fxl":
    /*!************************************************************************************************!*\
      !*** ./src/app/pages/agendaweb/sessions/components/sessions-prof/sessions-prof.component.scss ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fxl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-slide:first-child ion-item::part(native) {\n  align-items: flex-start;\n  flex-direction: column;\n}\nion-slide:first-child ion-label {\n  transform: scale(1);\n  font-size: 16px;\n  font-weight: var(--ion-font-weight-semibold);\n}\nion-slide form {\n  width: 100%;\n}\n.app-list {\n  margin-bottom: 30px;\n}\n.app-list ion-item span {\n  font-size: 14px;\n}\n.app-list ion-select {\n  padding: 0;\n  font-size: 14px;\n}\n.app-list ion-select::part(placeholder) {\n  color: var(--ion-color-unisa-base);\n  opacity: 1;\n}\n.app-list ion-select::part(icon) {\n  display: none;\n}\n.app-list ion-datetime {\n  padding: 0;\n  color: var(--ion-color-unisa-base);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhZ2VuZGF3ZWIucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNlc3Npb25zLXByb2YuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0FDRFo7QURJUTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDRDQUFBO0FDRlo7QURNSTtFQUNJLFdBQUE7QUNKUjtBRFFBO0VBQ0ksbUJBQUE7QUNMSjtBRE9JO0VBQ0ksZUFBQTtBQ0xSO0FEUUk7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQ05SO0FEUVE7RUFDSSxrQ0FBQTtFQUNBLFVBQUE7QUNOWjtBRFNRO0VBQ0ksYUFBQTtBQ1BaO0FEV0k7RUFDSSxVQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0FDVFIiLCJmaWxlIjoic2Vzc2lvbnMtcHJvZi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZSB7XHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBpb24taXRlbTo6cGFydChuYXRpdmUpIHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1pb24tZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3JtIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmFwcC1saXN0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgaW9uLWl0ZW0gc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1zZWxlY3Qge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgICAgICAmOjpwYXJ0KHBsYWNlaG9sZGVyKSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdW5pc2EtYmFzZSk7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjpwYXJ0KGljb24pIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWRhdGV0aW1lIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdW5pc2EtYmFzZSk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG59XHJcbiIsImlvbi1zbGlkZTpmaXJzdC1jaGlsZCBpb24taXRlbTo6cGFydChuYXRpdmUpIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5pb24tc2xpZGU6Zmlyc3QtY2hpbGQgaW9uLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogdmFyKC0taW9uLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcbn1cbmlvbi1zbGlkZSBmb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hcHAtbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uYXBwLWxpc3QgaW9uLWl0ZW0gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5hcHAtbGlzdCBpb24tc2VsZWN0IHtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmFwcC1saXN0IGlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci11bmlzYS1iYXNlKTtcbiAgb3BhY2l0eTogMTtcbn1cbi5hcHAtbGlzdCBpb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5hcHAtbGlzdCBpb24tZGF0ZXRpbWUge1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXVuaXNhLWJhc2UpO1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */";
      /***/
    },

    /***/
    "Cdw7":
    /*!*****************************************************************!*\
      !*** ./src/app/services/agendaweb/sessions/sessions.service.ts ***!
      \*****************************************************************/

    /*! exports provided: SessionsService */

    /***/
    function Cdw7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionsService", function () {
        return SessionsService;
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

      var SessionsService = /*#__PURE__*/function () {
        function SessionsService(http) {
          _classCallCheck(this, SessionsService);

          this.http = http;
          this.base = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].easycourseApi, "/AgendaStudenti/");
        }
        /**
         * Effettua il parsing della risposta restituendo i dati in formato JSON.
         *
         * @param res La risposta da parsare.
         */


        _createClass(SessionsService, [{
          key: "parseResponse",
          value: function parseResponse(res) {
            return JSON.parse(res.replace(';', '').split('=')[1]);
          }
          /**
           * Converte la data da stringa al tipo Date.
           *
           * @param date La data in formato testuale.
           * @param time L'orario in formato testuale.
           */

        }, {
          key: "toDateTime",
          value: function toDateTime(date, time) {
            return new Date("".concat(date.split('-').reverse().join('-'), "T").concat(time));
          }
          /**
           * Ordina gli appelli in base al nome.
           *
           * @param s1 Appello 1.
           * @param s2 Appello 2.
           */

        }, {
          key: "sortSessions",
          value: function sortSessions(s1, s2) {
            if (s1.name < s2.name) {
              return -1;
            }

            if (s1.name > s2.name) {
              return 1;
            }

            return 0;
          }
          /**
           * Manipola la risposta ottenuta al fine di ottenere i dati in un certo formato.
           *
           * @param res La risposta ottenuta dal server.
           */

        }, {
          key: "getSessions",
          value: function getSessions(res) {
            var _this3 = this;

            var sessionsList = [];
            var teachings = res.Insegnamenti;
            teachings.forEach(function (teaching) {
              var sessions = teaching.Appelli;
              var prof = teaching.DatiDocente;
              var courses = teaching.Manifesto.map(function (course) {
                return {
                  name: course.LaureaNome,
                  year: course.AnnoCorso,
                  type: course.Nome
                };
              });
              sessions.forEach(function (session) {
                sessionsList.push({
                  name: session.nome,
                  dateStart: _this3.toDateTime(session.Data, session.OraInizio),
                  dateEnd: _this3.toDateTime(session.Data, session.OraFine),
                  room: session.Aula,
                  prof: {
                    firstname: prof.Nome,
                    lastname: prof.Cognome,
                    mail: prof.Mail1
                  },
                  notes: session.Notes,
                  type: session.TipoEsame,
                  courses: courses
                });
              });
            });
            return sessionsList.sort(this.sortSessions);
          }
          /**
           * Recupera le combo di filtraggio relative alla pagina dei corsi.
           */

        }, {
          key: "getSessionsFiltersByCourse",
          value: function getSessionsFiltersByCourse() {
            return this.http.get("".concat(this.base, "/combo_call_new.php"), {
              params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('sw', 'et_').set('page', 'corsi')
            });
          }
          /**
           * Recupera le combo di filtraggio relative alla pagina dei docenti.
           */

        }, {
          key: "getSessionsFiltersByProf",
          value: function getSessionsFiltersByProf() {
            return this.http.get("".concat(this.base, "/combo_call_new.php"), {
              params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('sw', 'et_').set('page', 'docente')
            });
          }
          /**
           * Recupera il calendario degli appelli per insegnamento.
           *
           * @param year L'anno.
           * @param course Il codice del corso di laurea.
           * @param courseYear L'anno di corso.
           * @param term La sessione.
           */

        }, {
          key: "getSessionsByCourse",
          value: function getSessionsByCourse(year, course, courseYear, term) {
            var _this4 = this;

            return this.http.get("".concat(this.base, "/test_call_new.php"), {
              params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('view', 'easytest').set('include', 'et_cdl').set('anno', year).set('cdl', course).set('annocdl', courseYear).set('sessione', term)
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return _this4.getSessions(res);
            }));
          }
          /**
           * Recupera il calendario degli appelli di un determinato docente.
           *
           * @param year L'anno.
           * @param prof Il codice del docente.
           * @param term La sessione.
           */

        }, {
          key: "getSessionsByProf",
          value: function getSessionsByProf(year, prof, term) {
            var _this5 = this;

            return this.http.get("".concat(this.base, "/test_call_new.php"), {
              params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('view', 'easytest').set('include', 'et_docente').set('anno', year).set('docente', prof).set('sessione', term)
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return _this5.getSessions(res);
            }));
          }
        }]);

        return SessionsService;
      }();

      SessionsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      SessionsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], SessionsService);
      /***/
    },

    /***/
    "DJpq":
    /*!**********************************************************************************************!*\
      !*** ./src/app/pages/agendaweb/sessions/components/session-modal/session-modal.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: SessionModalComponent */

    /***/
    function DJpq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionModalComponent", function () {
        return SessionModalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_session_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./session-modal.component.html */
      "o4Xi");
      /* harmony import */


      var _session_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./session-modal.component.scss */
      "Q3WD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var SessionModalComponent = /*#__PURE__*/function () {
        function SessionModalComponent(navParams) {
          _classCallCheck(this, SessionModalComponent);

          this.navParams = navParams;
          this.days = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
          this.months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
          this.session = navParams.get('session');
        }

        _createClass(SessionModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "zeroPadding",
          value: function zeroPadding(entity) {
            return "0".concat(entity.toString()).slice(-2);
          }
        }]);

        return SessionModalComponent;
      }();

      SessionModalComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }];
      };

      SessionModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-session-modal',
        template: _raw_loader_session_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_session_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SessionModalComponent);
      /***/
    },

    /***/
    "HbRU":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agendaweb/sessions/components/sessions-prof/sessions-prof.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HbRU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-refresher [refreshCallback]=\"getSessionsFiltersByProf\"></app-refresher>\r\n<div class=\"flex flex-direction-column\">\r\n    <app-header>\r\n        <ion-toolbar>\r\n            <div class=\"flex flex-direction-column\">\r\n                <ion-title class=\"page-title\">Appelli</ion-title>\r\n                <ion-title class=\"page-subtitle\">Docente</ion-title>\r\n            </div>\r\n        </ion-toolbar>\r\n        <ion-toolbar class=\"segment-toolbar\">\r\n            <ion-segment\r\n                [value]=\"activeIndex\"\r\n                (ionChange)=\"slideTo($event)\"\r\n                swipeGesture=\"false\"\r\n            >\r\n                <ion-segment-button\r\n                    *ngFor=\"let label of labels; index as i\"\r\n                    [value]=\"i\"\r\n                >\r\n                    <ion-label>{{label}}</ion-label>\r\n                </ion-segment-button>\r\n            </ion-segment>\r\n        </ion-toolbar>\r\n    </app-header>\r\n    <div class=\"page-main\">\r\n        <ion-slides\r\n            *ngIf=\"isReady\"\r\n            (ionSlideWillChange)=\"setActiveIndex()\"\r\n            [options]=\"slideOpts\"\r\n        >\r\n            <ion-slide>\r\n                <form\r\n                    [formGroup]=\"sessionsForm\"\r\n                    (submit)=\"getSessions()\"\r\n                >\r\n                    <ion-list class=\"app-list\">\r\n                        <ion-item>\r\n                            <ion-label>\r\n                                <h3>Anno accademico</h3>\r\n                            </ion-label>\r\n                            <ion-select\r\n                                cancelText=\"Cancella\"\r\n                                formControlName=\"year\"\r\n                                interface=\"action-sheet\"\r\n                                placeholder=\"Seleziona\"\r\n                                [interfaceOptions]=\"customActionSheetOptions\"\r\n                                (ionChange)=\"setYearIndex($event)\"\r\n                            >\r\n                                <ion-select-option\r\n                                    *ngFor=\"let param of searchParams; index as i\"\r\n                                    [value]=\"{index: i, value: param.valore}\"\r\n                                >\r\n                                    {{param.label}}\r\n                                </ion-select-option>\r\n                            </ion-select>\r\n                        </ion-item>\r\n                        <ion-item \r\n                            [disabled]=\"yearIndex === -1\"\r\n                            (click)=\"presentProfSearchModal(profSelect)\"\r\n                        >\r\n                            <ion-label>\r\n                                <h3>Docente</h3>\r\n                            </ion-label>\r\n                            <span>{{profSelect.value ? getProfs()[profSelect.value.index].label : 'Seleziona'}}</span>\r\n                            <ion-select\r\n                                #profSelect\r\n                                hidden=\"true\"\r\n                                cancelText=\"Cancella\"\r\n                                formControlName=\"prof\"\r\n                                placeholder=\"Seleziona\"\r\n                                interface=\"action-sheet\"\r\n                                [interfaceOptions]=\"customActionSheetOptions\"\r\n                                (ionChange)=\"setProfIndex($event)\"\r\n                            >\r\n                                <ion-select-option\r\n                                    *ngFor=\"let prof of getProfs(); index as i\"\r\n                                    [value]=\"{index: i, value: prof.valore}\"\r\n                                >\r\n                                    {{prof.label}}\r\n                                </ion-select-option>\r\n                            </ion-select>\r\n                        </ion-item>\r\n                        <ion-item [disabled]=\"profIndex === -1\">\r\n                            <ion-label>\r\n                                <h3>Sessione</h3>\r\n                            </ion-label>\r\n                            <ion-select\r\n                                cancelText=\"Cancella\"\r\n                                formControlName=\"term\"\r\n                                placeholder=\"Seleziona\"\r\n                                interface=\"action-sheet\"\r\n                                [interfaceOptions]=\"customActionSheetOptions\"\r\n                            >\r\n                                <ion-select-option\r\n                                    *ngFor=\"let term of getTerms(); index as i\"\r\n                                    [value]=\"{index: i, value: term.valore}\"\r\n                                >\r\n                                    {{term.label}}\r\n                                </ion-select-option>\r\n                            </ion-select>\r\n                        </ion-item>\r\n                    </ion-list>\r\n                    <ion-button\r\n                        class=\"form-submit form-submit--button\"\r\n                        type=\"submit\"\r\n                        [disabled]=\"!sessionsForm.valid\"\r\n                    >\r\n                        Cerca\r\n                    </ion-button>\r\n                </form>\r\n            </ion-slide>\r\n            <ion-slide>\r\n                <ion-list class=\"app-list\">\r\n                    <ion-item\r\n                        *ngFor=\"let session of sessions\"\r\n                        class=\"session\"\r\n                        (click)=\"getSessionDetails(session)\"\r\n                    >\r\n                        <ion-label>\r\n                            <h3>{{session.name}}</h3>\r\n                            <div>\r\n                                <i class=\"far fa-calendar\"></i>\r\n                                <span>\r\n                                    {{session.dateStart | date: 'dd/MM/yyyy'}}\r\n                                </span>\r\n                            </div>\r\n                            <div>\r\n                                <i class=\"fas fa-map\"></i>\r\n                                <span>{{session.room}}</span>\r\n                            </div>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item *ngIf=\"sessions.length === 0\">Nessun elemento da mostrare.</ion-item>\r\n                </ion-list>\r\n            </ion-slide>\r\n        </ion-slides>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "LL5f":
    /*!***********************************************************!*\
      !*** ./src/app/pages/agendaweb/sessions/sessions.page.ts ***!
      \***********************************************************/

    /*! exports provided: SessionsPage */

    /***/
    function LL5f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionsPage", function () {
        return SessionsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sessions_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sessions.page.html */
      "x2xi");
      /* harmony import */


      var _sessions_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sessions.page.scss */
      "24r6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SessionsPage = /*#__PURE__*/function () {
        function SessionsPage(route) {
          _classCallCheck(this, SessionsPage);

          this.route = route;
          this.searchBy = 'course';
        }

        _createClass(SessionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.route.queryParams.subscribe(function (params) {
              if (params['searchBy']) {
                _this6.searchBy = params['searchBy'];
              }
            });
          }
        }]);

        return SessionsPage;
      }();

      SessionsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      };

      SessionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sessions',
        template: _raw_loader_sessions_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sessions_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SessionsPage);
      /***/
    },

    /***/
    "Nf6N":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agendaweb/sessions/components/sessions-course/sessions-course.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Nf6N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-refresher [refreshCallback]=\"getSessionsFiltersByCourse\"></app-refresher>\r\n<div class=\"flex flex-direction-column\">\r\n    <app-header>\r\n        <ion-toolbar>\r\n            <div class=\"flex flex-direction-column\">\r\n                <ion-title class=\"page-title\">Appelli</ion-title>\r\n                <ion-title class=\"page-subtitle\">Insegnamento</ion-title>\r\n            </div>\r\n        </ion-toolbar>\r\n        <ion-toolbar class=\"segment-toolbar\">\r\n            <ion-segment\r\n                [value]=\"activeIndex\"\r\n                (ionChange)=\"slideTo($event)\"\r\n                swipeGesture=\"false\"\r\n            >\r\n                <ion-segment-button\r\n                    *ngFor=\"let label of labels; index as i\"\r\n                    [value]=\"i\"\r\n                >\r\n                    <ion-label>{{label}}</ion-label>\r\n                </ion-segment-button>\r\n            </ion-segment>\r\n        </ion-toolbar>\r\n    </app-header>\r\n    <div class=\"page-main\">\r\n        <ion-slides\r\n            *ngIf=\"isReady\"\r\n            (ionSlideWillChange)=\"setActiveIndex()\"\r\n            [options]=\"slideOpts\"\r\n        >\r\n            <ion-slide>\r\n                <form\r\n                    [formGroup]=\"sessionsForm\"\r\n                    (submit)=\"getSessions()\"\r\n                >\r\n                    <ion-list class=\"app-list\">\r\n                        <ion-item>\r\n                            <ion-label>\r\n                                <h3>Anno accademico</h3>\r\n                            </ion-label>\r\n                            <ion-select\r\n                                cancelText=\"Cancella\"\r\n                                formControlName=\"year\"\r\n                                interface=\"action-sheet\"\r\n                                placeholder=\"Seleziona\"\r\n                                [interfaceOptions]=\"customActionSheetOptions\"\r\n                                (ionChange)=\"setYearIndex($event)\"\r\n                            >\r\n                                <ion-select-option\r\n                                    *ngFor=\"let param of searchParams; index as i\"\r\n                                    [value]=\"{index: i, value: param.valore}\"\r\n                                >\r\n                                    {{param.label}}\r\n                                </ion-select-option>\r\n                            </ion-select>\r\n                        </ion-item>\r\n                        <ion-item [disabled]=\"yearIndex === -1\">\r\n                            <ion-label>\r\n                                <h3>Corso di studio</h3>\r\n                            </ion-label>\r\n                            <ion-select\r\n                                cancelText=\"Cancella\"\r\n                                formControlName=\"course\"\r\n                                placeholder=\"Seleziona\"\r\n                                interface=\"action-sheet\"\r\n                                [interfaceOptions]=\"customActionSheetOptions\"\r\n                                (ionChange)=\"setCourseIndex($event)\"\r\n                            >\r\n                                <ion-select-option\r\n                                    *ngFor=\"let course of getCourses(); index as i\"\r\n                                    [value]=\"{index: i, value: course.valore}\"\r\n                                >\r\n                                    [{{course.valore}}] - {{course.label}}\r\n                                </ion-select-option>\r\n                            </ion-select>\r\n                        </ion-item>\r\n                        <ion-item [disabled]=\"courseIndex === -1\">\r\n                            <ion-label>\r\n                                <h3>Anno di studio</h3>\r\n                            </ion-label>\r\n                            <ion-select\r\n                                cancelText=\"Cancella\"\r\n                                formControlName=\"courseYear\"\r\n                                placeholder=\"Seleziona\"\r\n                                interface=\"action-sheet\"\r\n                                [interfaceOptions]=\"customActionSheetOptions\"\r\n                                (ionChange)=\"setCourseYearIndex($event)\"\r\n                            >\r\n                                <ion-select-option\r\n                                    *ngFor=\"let year of getCourseYears(); index as i\"\r\n                                    [value]=\"{index: i, value: year.valore}\"\r\n                                >\r\n                                    {{year.label}}\r\n                                </ion-select-option>\r\n                            </ion-select>\r\n                        </ion-item>\r\n                        <ion-item [disabled]=\"courseYearIndex === -1\">\r\n                            <ion-label>\r\n                                <h3>Sessione</h3>\r\n                            </ion-label>\r\n                            <ion-select\r\n                                cancelText=\"Cancella\"\r\n                                formControlName=\"term\"\r\n                                placeholder=\"Seleziona\"\r\n                                interface=\"action-sheet\"\r\n                                [interfaceOptions]=\"customActionSheetOptions\"\r\n                            >\r\n                                <ion-select-option\r\n                                    *ngFor=\"let term of getTerms(); index as i\"\r\n                                    [value]=\"{index: i, value: term.valore}\"\r\n                                >\r\n                                    {{term.label}}\r\n                                </ion-select-option>\r\n                            </ion-select>\r\n                        </ion-item>\r\n                    </ion-list>\r\n                    <ion-button\r\n                        class=\"form-submit form-submit--button\"\r\n                        type=\"submit\"\r\n                        [disabled]=\"!sessionsForm.valid\"\r\n                    >\r\n                        Cerca\r\n                    </ion-button>\r\n                </form>\r\n            </ion-slide>\r\n            <ion-slide>\r\n                <ion-list class=\"app-list\">\r\n                    <ion-item\r\n                        *ngFor=\"let session of sessions\"\r\n                        class=\"session\"\r\n                        (click)=\"getSessionDetails(session)\"\r\n                    >\r\n                        <ion-label>\r\n                            <h3>{{session.name}}</h3>\r\n                            <div>\r\n                                <i class=\"far fa-calendar\"></i>\r\n                                <span>\r\n                                    {{session.dateStart | date: 'dd/MM/yyyy'}}\r\n                                </span>\r\n                            </div>\r\n                            <div>\r\n                                <i class=\"fas fa-map\"></i>\r\n                                <span>{{session.room}}</span>\r\n                            </div>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item *ngIf=\"sessions.length === 0\">Nessun elemento da mostrare.</ion-item>\r\n                </ion-list>\r\n            </ion-slide>\r\n        </ion-slides>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "OISu":
    /*!****************************************************************************************************!*\
      !*** ./src/app/pages/agendaweb/sessions/components/sessions-course/sessions-course.component.scss ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OISu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-slide:first-child ion-item::part(native) {\n  align-items: flex-start;\n  flex-direction: column;\n}\nion-slide:first-child ion-label {\n  transform: scale(1);\n  font-size: 16px;\n  font-weight: var(--ion-font-weight-semibold);\n}\nion-slide form {\n  width: 100%;\n}\n.app-list {\n  margin-bottom: 30px;\n}\n.app-list ion-item span {\n  font-size: 14px;\n}\n.app-list ion-select {\n  padding: 0;\n  font-size: 14px;\n}\n.app-list ion-select::part(placeholder) {\n  color: var(--ion-color-unisa-base);\n  opacity: 1;\n}\n.app-list ion-select::part(icon) {\n  display: none;\n}\n.app-list ion-datetime {\n  padding: 0;\n  color: var(--ion-color-unisa-base);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhZ2VuZGF3ZWIucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNlc3Npb25zLWNvdXJzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7QUNEWjtBRElRO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7QUNGWjtBRE1JO0VBQ0ksV0FBQTtBQ0pSO0FEUUE7RUFDSSxtQkFBQTtBQ0xKO0FET0k7RUFDSSxlQUFBO0FDTFI7QURRSTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FDTlI7QURRUTtFQUNJLGtDQUFBO0VBQ0EsVUFBQTtBQ05aO0FEU1E7RUFDSSxhQUFBO0FDUFo7QURXSTtFQUNJLFVBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7QUNUUiIsImZpbGUiOiJzZXNzaW9ucy1jb3Vyc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGUge1xyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgaW9uLWl0ZW06OnBhcnQobmF0aXZlKSB7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0taW9uLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hcHAtbGlzdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICAgIGlvbi1pdGVtIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tc2VsZWN0IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICAgICAgJjo6cGFydChwbGFjZWhvbGRlcikge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXVuaXNhLWJhc2UpO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6cGFydChpY29uKSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1kYXRldGltZSB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXVuaXNhLWJhc2UpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxufVxyXG4iLCJpb24tc2xpZGU6Zmlyc3QtY2hpbGQgaW9uLWl0ZW06OnBhcnQobmF0aXZlKSB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuaW9uLXNsaWRlOmZpcnN0LWNoaWxkIGlvbi1sYWJlbCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWlvbi1mb250LXdlaWdodC1zZW1pYm9sZCk7XG59XG5pb24tc2xpZGUgZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYXBwLWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmFwcC1saXN0IGlvbi1pdGVtIHNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uYXBwLWxpc3QgaW9uLXNlbGVjdCB7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5hcHAtbGlzdCBpb24tc2VsZWN0OjpwYXJ0KHBsYWNlaG9sZGVyKSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdW5pc2EtYmFzZSk7XG4gIG9wYWNpdHk6IDE7XG59XG4uYXBwLWxpc3QgaW9uLXNlbGVjdDo6cGFydChpY29uKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYXBwLWxpc3QgaW9uLWRhdGV0aW1lIHtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci11bmlzYS1iYXNlKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "Q3WD":
    /*!************************************************************************************************!*\
      !*** ./src/app/pages/agendaweb/sessions/components/session-modal/session-modal.component.scss ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Q3WD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  margin-bottom: 30px;\n}\nion-item:last-child {\n  margin-bottom: 0;\n}\nion-item.name ion-thumbnail {\n  background: #eaf7ff;\n}\nion-item.prof ion-thumbnail {\n  background: #FFF4F4;\n}\nion-item.date ion-thumbnail {\n  background: #FAF8E9;\n}\nion-item.notes ion-thumbnail {\n  background: #CEF5F8;\n}\nion-item.room ion-thumbnail {\n  background: #FFF1FF;\n}\nion-item.type ion-thumbnail {\n  background: #FDF7D7;\n}\nion-item.courses ion-thumbnail {\n  background: #E4F6E5;\n}\nion-item ion-thumbnail {\n  margin-right: 15px;\n  border-radius: 15px;\n}\nion-item ion-thumbnail i {\n  color: rgba(0, 0, 0, 0.2);\n  mix-blend-mode: color-burn;\n}\nion-item ion-label h3 {\n  font-size: 15px;\n  font-weight: var(--ion-font-weight-medium);\n}\nion-item ion-label p {\n  color: var(--ion-color-unisa-base);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzZXNzaW9uLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjtBQUNJO0VBQ0ksZ0JBQUE7QUFDUjtBQUVJO0VBQ0ksbUJBQUE7QUFBUjtBQUdJO0VBQ0ksbUJBQUE7QUFEUjtBQUlJO0VBQ0ksbUJBQUE7QUFGUjtBQUtJO0VBQ0ksbUJBQUE7QUFIUjtBQU1JO0VBQ0ksbUJBQUE7QUFKUjtBQU9JO0VBQ0ksbUJBQUE7QUFMUjtBQVFJO0VBQ0ksbUJBQUE7QUFOUjtBQVNJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQVBSO0FBU1E7RUFDSSx5QkFBQTtFQUNBLDBCQUFBO0FBUFo7QUFZUTtFQUNJLGVBQUE7RUFDQSwwQ0FBQTtBQVZaO0FBYVE7RUFDSSxrQ0FBQTtBQVhaIiwiZmlsZSI6InNlc3Npb24tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICAmLm5hbWUgaW9uLXRodW1ibmFpbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2VhZjdmZjtcclxuICAgIH1cclxuXHJcbiAgICAmLnByb2YgaW9uLXRodW1ibmFpbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRjRGNDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJi5kYXRlIGlvbi10aHVtYm5haWwge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGQUY4RTk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5ub3RlcyBpb24tdGh1bWJuYWlsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjQ0VGNUY4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLnJvb20gaW9uLXRodW1ibmFpbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRjFGRjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJi50eXBlIGlvbi10aHVtYm5haWwge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGREY3RDc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYuY291cnNlcyBpb24tdGh1bWJuYWlsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRTRGNkU1O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi10aHVtYm5haWwge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgICAgbWl4LWJsZW5kLW1vZGU6IGNvbG9yLWJ1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1pb24tZm9udC13ZWlnaHQtbWVkaXVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXVuaXNhLWJhc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "UYoB":
    /*!**********************************************************************************************!*\
      !*** ./src/app/pages/agendaweb/sessions/components/sessions-prof/sessions-prof.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: SessionsProfComponent */

    /***/
    function UYoB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionsProfComponent", function () {
        return SessionsProfComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sessions_prof_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sessions-prof.component.html */
      "HbRU");
      /* harmony import */


      var _sessions_prof_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sessions-prof.component.scss */
      "6fxl");
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


      var src_app_pages_components_search_modal_search_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/pages/components/search-modal/search-modal.component */
      "Qsbk");
      /* harmony import */


      var src_app_services_agendaweb_sessions_sessions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/agendaweb/sessions/sessions.service */
      "Cdw7");
      /* harmony import */


      var _session_modal_session_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../session-modal/session-modal.component */
      "DJpq");

      var SessionsProfComponent = /*#__PURE__*/function () {
        function SessionsProfComponent(sessionsService, formBuilder, modalController) {
          _classCallCheck(this, SessionsProfComponent);

          this.sessionsService = sessionsService;
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
          this.labels = ['Ricerca', 'Riepilogo'];
          this.activeIndex = 0;
          this.isReady = false;
          this.searchParams = [];
          this.yearIndex = -1;
          this.profIndex = -1;
          this.sessions = [];
          this.sessionsForm = this.formBuilder.group({
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            prof: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            term: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
          });
          this.getSessionsFiltersByProf = this.getSessionsFiltersByProf.bind(this);
        }

        _createClass(SessionsProfComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getSessionsFiltersByProf();
          }
          /**
           * Recupera le combo di filtraggio.
           */

        }, {
          key: "getSessionsFiltersByProf",
          value: function getSessionsFiltersByProf() {
            var _this7 = this;

            return this.sessionsService.getSessionsFiltersByProf().subscribe(function (res) {
              _this7.isReady = true;
              _this7.searchParams = res;
            });
          }
          /**
           * Aggiorna la slide alla pressione in base allo specifico Segment Button.
           *
           * @param event L'evento associato al Segment Button.
           */

        }, {
          key: "slideTo",
          value: function slideTo(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var target, value;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      target = event.target;
                      value = parseInt(target.value);
                      _context4.next = 4;
                      return this.slides.slideTo(value);

                    case 4:
                      this.activeIndex = value;

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
          /**
           * Aggiorna il Segment Button sulla base dell'indice corrente della slide.
           */

        }, {
          key: "setActiveIndex",
          value: function setActiveIndex() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var index, button;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.slides.getActiveIndex();

                    case 2:
                      index = _context5.sent;

                      if (index !== this.activeIndex) {
                        button = this.segment['el'].children[index];
                        button.click();
                      }

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
          /**
           * Imposta l'anno corrente.
           *
           * @param event L'evento associato allo Ion Select.
           */

        }, {
          key: "setYearIndex",
          value: function setYearIndex(event) {
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

        }, {
          key: "setProfIndex",
          value: function setProfIndex(event) {
            if (this.profIndex !== -1) {
              this.sessionsForm.controls.term.reset();
            }

            this.profIndex = event.detail.value.index;
          }
          /**
           * Recupera l'elenco dei docenti sulla base dell'anno selezionato.
           */

        }, {
          key: "getProfs",
          value: function getProfs() {
            if (this.yearIndex === -1) {
              return [];
            }

            return this.searchParams[this.yearIndex].elenco;
          }
          /**
           * Recupera l'elenco delle sessioni attive sulla base dello specifico docente.
           */

        }, {
          key: "getTerms",
          value: function getTerms() {
            if (this.profIndex === -1) {
              return [];
            }

            return this.getProfs()[this.profIndex].elenco;
          }
          /**
           * Recupera il calendario degli appelli relativo allo specifico docente.
           */

        }, {
          key: "getSessions",
          value: function getSessions() {
            var _this8 = this;

            this.sessionsService.getSessionsByProf(this.sessionsForm.value.year.value, this.sessionsForm.value.prof.value, this.sessionsForm.value.term.value).subscribe(function (res) {
              _this8.sessions = res;
              setTimeout(function () {
                _this8.activeIndex++;

                _this8.slides.slideTo(_this8.activeIndex);
              }, 300);
            });
          }
          /**
           * Mostra un modale contenente i dati relativi allo specifico appello d'esame.
           *
           * @param session Lo specifico appello d'esame.
           */

        }, {
          key: "getSessionDetails",
          value: function getSessionDetails(session) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var modal;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.modalController.create({
                        component: _session_modal_session_modal_component__WEBPACK_IMPORTED_MODULE_8__["SessionModalComponent"],
                        componentProps: {
                          session: session
                        },
                        cssClass: 'app-modal'
                      });

                    case 2:
                      modal = _context6.sent;
                      _context6.next = 5;
                      return modal.present();

                    case 5:
                      return _context6.abrupt("return", _context6.sent);

                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
          /**
           * Mostra un modale per la selezione del docente.
           *
           * @param select Lo IonSelect a cui assegnare il valore di ritorno del modale.
           */

        }, {
          key: "presentProfSearchModal",
          value: function presentProfSearchModal(select) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this9 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.modalController.create({
                        component: src_app_pages_components_search_modal_search_modal_component__WEBPACK_IMPORTED_MODULE_6__["SearchModalComponent"],
                        componentProps: {
                          options: this.getProfs().map(function (prof) {
                            return {
                              label: prof.label,
                              value: prof.valore
                            };
                          }),
                          title: 'Seleziona'
                        },
                        cssClass: 'app-modal'
                      });

                    case 2:
                      modal = _context7.sent;
                      modal.onWillDismiss().then(function (modal) {
                        if (modal.data) {
                          var value = modal.data;

                          var index = _this9.getProfs().findIndex(function (prof) {
                            return prof.valore === value;
                          });

                          select.value = {
                            index: index,
                            value: value
                          };
                        }
                      });
                      _context7.next = 6;
                      return modal.present();

                    case 6:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }]);

        return SessionsProfComponent;
      }();

      SessionsProfComponent.ctorParameters = function () {
        return [{
          type: src_app_services_agendaweb_sessions_sessions_service__WEBPACK_IMPORTED_MODULE_7__["SessionsService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }];
      };

      SessionsProfComponent.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"]]
        }],
        segment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSegment"]]
        }]
      };
      SessionsProfComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sessions-prof',
        template: _raw_loader_sessions_prof_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sessions_prof_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SessionsProfComponent);
      /***/
    },

    /***/
    "i4ex":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/agendaweb/sessions/sessions-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: SessionsPageRoutingModule */

    /***/
    function i4ex(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionsPageRoutingModule", function () {
        return SessionsPageRoutingModule;
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


      var _sessions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sessions.page */
      "LL5f");

      var routes = [{
        path: '',
        component: _sessions_page__WEBPACK_IMPORTED_MODULE_3__["SessionsPage"]
      }];

      var SessionsPageRoutingModule = function SessionsPageRoutingModule() {
        _classCallCheck(this, SessionsPageRoutingModule);
      };

      SessionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SessionsPageRoutingModule);
      /***/
    },

    /***/
    "o4Xi":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agendaweb/sessions/components/session-modal/session-modal.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function o4Xi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-modal title=\"Dettagli appello\">\r\n    <ion-list>\r\n        <ion-item class=\"name\">\r\n            <ion-thumbnail slot=\"start\">\r\n                <i class=\"fas fa-book\"></i>\r\n            </ion-thumbnail>\r\n            <ion-label>\r\n                <h3>{{session.name}}</h3>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"prof\">\r\n            <ion-thumbnail slot=\"start\">\r\n                <i class=\"fas fa-user-tie\"></i>\r\n            </ion-thumbnail>\r\n            <ion-label>\r\n                <h3>\r\n                    {{session.prof.firstname}} {{session.prof.lastname}}\r\n                </h3>\r\n                <p>{{session.prof.mail}}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"date\">\r\n            <ion-thumbnail slot=\"start\">\r\n                <i class=\"fas fa-calendar-alt\"></i>\r\n            </ion-thumbnail>\r\n            <ion-label>\r\n                <h3>\r\n                    {{days[session.dateStart.getDay()]}}\r\n                    {{zeroPadding(session.dateStart.getDate())}}\r\n                    {{months[session.dateStart.getMonth()]}}\r\n                    {{session.dateStart.getFullYear()}}\r\n                </h3>\r\n                <p>\r\n                    {{zeroPadding(session.dateStart.getHours())}}:{{zeroPadding(session.dateStart.getMinutes())}}\r\n                    -\r\n                    {{zeroPadding(session.dateEnd.getHours())}}:{{zeroPadding(session.dateEnd.getMinutes())}}\r\n                </p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"notes\">\r\n            <ion-thumbnail slot=\"start\">\r\n                <i class=\"fas fa-pen-alt\"></i>\r\n            </ion-thumbnail>\r\n            <ion-label>\r\n                <h3>{{session.notes || 'Nessuna nota'}}</h3>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"room\">\r\n            <ion-thumbnail slot=\"start\">\r\n                <i class=\"fas fa-map\"></i>\r\n            </ion-thumbnail>\r\n            <ion-label>\r\n                <h3>{{session.room}}</h3>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"type\">\r\n            <ion-thumbnail slot=\"start\">\r\n                <i class=\"fas fa-tag\"></i>\r\n            </ion-thumbnail>\r\n            <ion-label>\r\n                <h3>{{session.type}}</h3>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"courses\">\r\n            <ion-thumbnail slot=\"start\">\r\n                <i class=\"fas fa-graduation-cap\"></i>\r\n            </ion-thumbnail>\r\n            <ion-label>\r\n                <h3 *ngFor=\"let course of session.courses\">\r\n                    {{course.name}}\r\n                    {{course.year}}\r\n                    ({{course.type}})\r\n                </h3>\r\n            </ion-label>\r\n        </ion-item>\r\n    </ion-list>\r\n</app-modal>\r\n";
      /***/
    },

    /***/
    "x2xi":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agendaweb/sessions/sessions.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function x2xi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"page-content\">\r\n    <app-sessions-course *ngIf=\"searchBy === 'course'\"></app-sessions-course>\r\n    <app-sessions-prof *ngIf=\"searchBy === 'prof'\"></app-sessions-prof>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=sessions-sessions-module-es5.js.map