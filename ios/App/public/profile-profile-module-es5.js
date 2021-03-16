(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "81+i":
    /*!***********************************************************!*\
      !*** ./src/app/services/esse3/profile/profile.service.ts ***!
      \***********************************************************/

    /*! exports provided: ProfileService */

    /***/
    function i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
        return ProfileService;
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

      var ProfileService = /*#__PURE__*/function () {
        function ProfileService(http) {
          _classCallCheck(this, ProfileService);

          this.http = http;
          this.base = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].esse3Api, "/anagrafica-service-v2");
        }
        /**
         * Preleva le informazioni relative all'anagrafica dell'utente.
         *
         * @param persId L'id relativo alla specifica persona che viene restituito all'utente dopo
         * aver effettuato l'autenticazione.
         */


        _createClass(ProfileService, [{
          key: "getProfile",
          value: function getProfile(persId) {
            var _this = this;

            return this.http.get("".concat(this.base, "/persone/").concat(persId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              var details = {
                birthCountry: res.naziNascDes,
                birthDate: _this.getDate(res.dataNascita),
                birthDistrict: res.comuNascDes,
                birthProvince: res.provNascDes,
                citizenship: res.desCittadinanza,
                gender: res.sesso,
                firstname: res.nome,
                fiscalCode: res.codFis,
                lastname: res.cognome
              };
              var residence = {
                address: res.viaRes,
                district: res.comuResDes,
                nation: res.naziResDes,
                province: res.comuResSigla,
                phone: res.telRes,
                streetNumber: res.numCivRes,
                zipCode: res.capRes
              };
              var domicile = {
                address: res.viaDom,
                district: res.comuDomDes,
                nation: res.naziDomDes,
                province: res.comuDomSigla,
                phone: res.telDom,
                streetNumber: res.numCivDom,
                zipCode: res.capDom
              };

              var isResEqualDom = _this.isEqual(residence, domicile);

              return Object.assign({
                details: details,
                residence: residence,
                isResEqualDom: isResEqualDom
              }, !isResEqualDom && {
                domicile: domicile
              });
            }));
          }
          /**
           * Manipola la data restituita dal server, prelevando solo la porzione di interesse, eliminando
           * l'orario.
           *
           * @param dateTime La data restituita in risposta dal server.
           */

        }, {
          key: "getDate",
          value: function getDate(dateTime) {
            return dateTime.split(' ')[0];
          }
          /**
           * Il metodo ritorna true se la residenza e il domicilio coincidono.
           *
           * @param resObj L'oggetto residenza.
           * @param domObj L'oggetto domicilio.
           */

        }, {
          key: "isEqual",
          value: function isEqual(resObj, domObj) {
            var keysRes = Object.keys(resObj);
            keysRes.forEach(function (key) {
              if (resObj[key] !== domObj[key]) {
                return false;
              }
            });
            return true;
          }
        }]);

        return ProfileService;
      }();

      ProfileService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      ProfileService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], ProfileService);
      /***/
    },

    /***/
    "8GCl":
    /*!*******************************************************!*\
      !*** ./src/app/pages/esse3/profile/profile.module.ts ***!
      \*******************************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function GCl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "qD2B");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "q0IE");
      /* harmony import */


      var _utility_utility_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../utility/utility.module */
      "SovF");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"], _utility_utility_module__WEBPACK_IMPORTED_MODULE_7__["UtilityModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "k5TE":
    /*!*******************************************************!*\
      !*** ./src/app/pages/esse3/profile/profile.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function k5TE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "l+8E":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/esse3/profile/profile.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function l8E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"page-content\">\r\n    <app-refresher [refreshCallback]=\"getProfile\"></app-refresher>\r\n    <div class=\"flex flex-direction-column\">\r\n        <app-header>\r\n            <ion-toolbar>\r\n                <ion-title class=\"page-title\">Profilo</ion-title>\r\n            </ion-toolbar>\r\n            <ion-toolbar class=\"segment-toolbar\">\r\n                <ion-segment\r\n                    [value]=\"activeIndex\"\r\n                    (ionChange)=\"slideTo($event)\"\r\n                    swipeGesture=\"false\"\r\n                >\r\n                    <ion-segment-button\r\n                        *ngFor=\"let label of labels; index as i\"\r\n                        [value]=\"i\"\r\n                    >\r\n                        <ion-label>{{label}}</ion-label>\r\n                    </ion-segment-button>\r\n                </ion-segment>\r\n            </ion-toolbar>\r\n        </app-header>\r\n        <div class=\"page-main\">\r\n            <ion-slides\r\n                *ngIf=\"isReady\"\r\n                (ionSlideWillChange)=\"setActiveIndex()\"\r\n                [options]=\"slideOpts\"\r\n            >\r\n                <ion-slide>\r\n                    <ion-list class=\"app-list\">\r\n                        <ion-item *ngFor=\"let item of detailsTranslation | keyvalue: noSort\">\r\n                            <ion-label>\r\n                                <h3>{{item.value}}</h3>\r\n                                <div>{{profile.details[item.key]}}</div>\r\n                            </ion-label>\r\n                        </ion-item>\r\n                    </ion-list>\r\n                </ion-slide>\r\n                <ion-slide>\r\n                    <ion-list class=\"app-list\">\r\n                        <ion-list-header>\r\n                            <ion-label>Residenza</ion-label>\r\n                        </ion-list-header>\r\n                        <ion-item *ngFor=\"let item of homeTranslation | keyvalue: noSort\">\r\n                            <ion-label>\r\n                                <h3>{{item.value}}</h3>\r\n                                <div>{{profile.residence[item.key]}}</div>\r\n                            </ion-label>\r\n                        </ion-item>\r\n                        <div *ngIf=\"!profile.isResEqualDom\">\r\n                            <ion-list-header>\r\n                                <ion-label>Domicilio</ion-label>\r\n                            </ion-list-header>\r\n                            <ion-item *ngFor=\"let item of homeTranslation | keyvalue: noSort\">\r\n                                <ion-label>\r\n                                    <h3>{{item.value}}</h3>\r\n                                    <div>{{profile.domicile[item.key]}}</div>\r\n                                </ion-label>\r\n                            </ion-item>\r\n                        </div>\r\n                    </ion-list>\r\n                </ion-slide>\r\n            </ion-slides>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "q0IE":
    /*!*****************************************************!*\
      !*** ./src/app/pages/esse3/profile/profile.page.ts ***!
      \*****************************************************/

    /*! exports provided: ProfilePage */

    /***/
    function q0IE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile.page.html */
      "l+8E");
      /* harmony import */


      var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile.page.scss */
      "k5TE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_esse3_profile_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/esse3/profile/profile.service */
      "81+i");
      /* harmony import */


      var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/user/user.service */
      "CFL1");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(userService, profileService) {
          _classCallCheck(this, ProfilePage);

          this.userService = userService;
          this.profileService = profileService;
          this.labels = ['Anagrafica', 'Abitazione'];
          this.activeIndex = 0;
          this.isReady = false;
          this.slideOpts = {
            autoHeight: true,
            spaceBetween: 20
          };
          this.detailsTranslation = {
            firstname: 'nome',
            lastname: 'cognome',
            gender: 'sesso',
            birthDate: 'data di nascita',
            citizenship: 'cittadinanza',
            birthCountry: 'nazione di nascita',
            birthProvince: 'provincia di nascita',
            birthDistrict: 'comune/città di nascita',
            fiscalCode: 'codice fiscale'
          };
          this.homeTranslation = {
            nation: 'nazione',
            province: 'provincia',
            district: 'comune/città',
            zipCode: 'CAP',
            address: 'indirizzo',
            streetNumber: 'n° civico',
            phone: 'telefono'
          };
          this.getProfile = this.getProfile.bind(this);
        }

        _createClass(ProfilePage, [{
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
                      this.getProfile();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
          /**
           * Recupera i dati dell'utenti relativi all'anagrafica e alla residenza / domicilio.
           */

        }, {
          key: "getProfile",
          value: function getProfile() {
            var _this2 = this;

            return this.profileService.getProfile(this.persId).subscribe(function (profile) {
              _this2.isReady = true;
              _this2.profile = profile;
            });
          }
          /**
           * Non imposta alcun tipo di ordinamento sull'oggetto.
           */

        }, {
          key: "noSort",
          value: function noSort() {
            return 0;
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

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }, {
          type: src_app_services_esse3_profile_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
        }];
      };

      ProfilePage.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"]]
        }],
        segment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSegment"]]
        }]
      };
      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProfilePage);
      /***/
    },

    /***/
    "qD2B":
    /*!***************************************************************!*\
      !*** ./src/app/pages/esse3/profile/profile-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function qD2B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "q0IE");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map