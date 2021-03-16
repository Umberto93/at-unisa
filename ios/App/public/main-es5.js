(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+XFQ":
    /*!******************************************************!*\
      !*** ./src/app/services/guard/auth-guard.service.ts ***!
      \******************************************************/

    /*! exports provided: AuthGuardService */

    /***/
    function XFQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
        return AuthGuardService;
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


      var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../user/user.service */
      "CFL1");

      var AuthGuardService = /*#__PURE__*/function () {
        function AuthGuardService(router, userService) {
          _classCallCheck(this, AuthGuardService);

          this.router = router;
          this.userService = userService;
        }
        /**
         * Verifica se l'utente è autenticato. In tal caso può navigare liberamente tra le varie pagine
         * dell'applicazione. In caso contrario viene fatto automaticamente il redirect alla pagina di
         * login.
         *
         * @param route La rotta a cui l'utente vuole accedere.
         * @param state Lo stato attuale del Router.
         */


        _createClass(AuthGuardService, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var credentials;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.userService.getCredentials();

                    case 2:
                      credentials = _context.sent;
                      return _context.abrupt("return", credentials !== null || this.router.navigateByUrl('/login'));

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return AuthGuardService;
      }();

      AuthGuardService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }];
      };

      AuthGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], AuthGuardService);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\linki\Desktop\at-unisa\at-unisa\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "9ZKQ":
    /*!*************************************************!*\
      !*** ./src/app/services/toast/toast.service.ts ***!
      \*************************************************/

    /*! exports provided: ToastService */

    /***/
    function ZKQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastService", function () {
        return ToastService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ToastService = /*#__PURE__*/function () {
        function ToastService(toastController) {
          _classCallCheck(this, ToastService);

          this.toastController = toastController;
          this.toastProps = {
            color: 'dark',
            cssClass: 'app-toast',
            duration: 2000,
            mode: 'ios'
          };
        }
        /**
         * Inserisce un nuovo toast.
         *
         * @param props Le proprietà del toast.
         */


        _createClass(ToastService, [{
          key: "presentToast",
          value: function presentToast(props) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log(props);
                      _context2.next = 3;
                      return this.toastController.create(Object.assign(Object.assign(Object.assign({}, this.toastProps), props), props.cssClass && {
                        cssClass: [].concat(this.toastProps.cssClass, props.cssClass)
                      }));

                    case 3:
                      toast = _context2.sent;
                      _context2.next = 6;
                      return toast.present();

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
          /**
           * Inserisce un nuovo toast con icona laterale sul lato sinistro.
           *
           * @param icon L'icona da inserire (vedi IonIcons).
           * @param props Le proprietà del toast.
           */

        }, {
          key: "presentToastWithIcon",
          value: function presentToastWithIcon(icon, props) {
            this.presentToast(Object.assign(Object.assign({}, props), {
              buttons: [{
                handler: function handler() {
                  return false;
                },
                icon: icon,
                side: 'start'
              }],
              message: props.message
            }));
          }
          /**
           * Inserisce un toast in seguito ad un'azione andata a buon fine.
           *
           * @param props Le proprietà del toast.
           */

        }, {
          key: "presentSuccessToast",
          value: function presentSuccessToast(props) {
            this.presentToastWithIcon('checkmark-circle', Object.assign(Object.assign({}, props), {
              color: 'unisa-success-dark-green'
            }));
          }
          /**
           * Inserisce un toast in seguito ad un'azione non andata a buon fine.
           *
           * @param props Le proprietà del toast.
           */

        }, {
          key: "presentFailureToast",
          value: function presentFailureToast(props) {
            this.presentToastWithIcon('close-circle', Object.assign(Object.assign({}, props), {
              color: 'unisa-danger-dark-red'
            }));
          }
          /**
           * Inserisce un toast informativo.
           *
           * @param props Le proprietà del toast.
           */

        }, {
          key: "presentInfoToast",
          value: function presentInfoToast(props) {
            this.presentToastWithIcon('information-circle', Object.assign(Object.assign({}, props), {
              color: 'unisa-info-blue'
            }));
          }
          /**
           * Inserisce un toast di avvertimento.
           *
           * @param props Le proprietà del toast.
           */

        }, {
          key: "presentWarningToast",
          value: function presentWarningToast(props) {
            this.presentToastWithIcon('alert-circle', Object.assign(Object.assign({}, props), {
              color: 'unisa-warning-yellow'
            }));
          }
        }]);

        return ToastService;
      }();

      ToastService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }];
      };

      ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ToastService);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        esse3Api: 'https://www.unisa.it/proxy-test/esse3/e3rest/api',
        easycourseApi: 'https://www.unisa.it/proxy-test/easycourse'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BVzC":
    /*!*************************************************!*\
      !*** ./src/app/services/error/error.service.ts ***!
      \*************************************************/

    /*! exports provided: ErrorService */

    /***/
    function BVzC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorService", function () {
        return ErrorService;
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


      var _toast_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../toast/toast.service */
      "9ZKQ");

      var ErrorService = /*#__PURE__*/function () {
        function ErrorService(toastService) {
          _classCallCheck(this, ErrorService);

          this.toastService = toastService;
        }
        /**
         * Riconosce il tipo di errore che si è verificato e chiama l'opportuno handler per la gestione.
         *
         * @param error L'errore che si è verificato.
         */


        _createClass(ErrorService, [{
          key: "handleError",
          value: function handleError(error) {
            switch (true) {
              case error.status === 401:
                this.handleError401();
                break;

              case error.status >= 500 && error.status <= 599:
                this.handleError50X();
                break;
            }

            console.log(error);
          }
          /**
           * Handler per la gestione di errori 401 (Unauthorized).
           */

        }, {
          key: "handleError401",
          value: function handleError401() {
            this.toastService.presentFailureToast({
              message: 'Utente e/o password non corretti.'
            });
          }
          /**
           * Handler per la gestione di errori lato server.
           */

        }, {
          key: "handleError50X",
          value: function handleError50X() {
            this.toastService.presentFailureToast({
              message: 'Non è stato possibile recuperare i dati.'
            });
          }
        }]);

        return ErrorService;
      }();

      ErrorService.ctorParameters = function () {
        return [{
          type: _toast_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]
        }];
      };

      ErrorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ErrorService);
      /***/
    },

    /***/
    "C8K0":
    /*!*******************************************************!*\
      !*** ./src/app/services/guard/guest-guard.service.ts ***!
      \*******************************************************/

    /*! exports provided: GuestGuardService */

    /***/
    function C8K0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GuestGuardService", function () {
        return GuestGuardService;
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


      var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../user/user.service */
      "CFL1");

      var GuestGuardService = /*#__PURE__*/function () {
        function GuestGuardService(router, userService) {
          _classCallCheck(this, GuestGuardService);

          this.router = router;
          this.userService = userService;
        }
        /**
         * Verifica se l'utente è un visitatore. In tal caso può accedere solamente alla pagina di
         * login. In caso contrario viene effettuato il redirect alla home.
         *
         * @param route La rotta a cui l'utente vuole accedere.
         * @param state Lo stato attuale del Router.
         */


        _createClass(GuestGuardService, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var credentials;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.userService.getCredentials();

                    case 2:
                      credentials = _context3.sent;
                      return _context3.abrupt("return", !credentials || this.router.navigateByUrl('/home'));

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return GuestGuardService;
      }();

      GuestGuardService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }];
      };

      GuestGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], GuestGuardService);
      /***/
    },

    /***/
    "CFL1":
    /*!***********************************************!*\
      !*** ./src/app/services/user/user.service.ts ***!
      \***********************************************/

    /*! exports provided: UserService */

    /***/
    function CFL1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/internal/Subject */
      "ds6q");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__);

      var UserService = /*#__PURE__*/function () {
        function UserService(storage) {
          _classCallCheck(this, UserService);

          this.storage = storage;
          this.userSubject = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        }
        /**
         * Preleva i dati dell'utente dallo Storage.
         *
         * NB: Si tratta dei dati che vengono memorizzati dopo che il proceesso di autenticazione è
         * andato a buon fine.
         */


        _createClass(UserService, [{
          key: "getUser",
          value: function getUser() {
            return this.storage.get('user');
          }
          /**
           * Setta i dati dell'utente nello Storage.
           *
           * NB: Si tratta dei dati ottenuti nel momento in cui il proceesso di autenticazione è
           * andato a buon fine.
           */

        }, {
          key: "setUser",
          value: function setUser(user) {
            return this.storage.set('user', user);
          }
          /**
           * Permette di recuperare le credenziali dell'utente, utili per effettuare la "Basic Authentication".
           *
           * N.B.
           * Il metodo di autenticazione è detto "Basic Authentication" e prevede che le credenziali
           * vengano inviate in un formato standard "username:password". La stringa risultante viene poi
           * codificata in Base64 e inserita all'interno dell'header "Authorization" di ogni richiesta.
           */

        }, {
          key: "getCredentials",
          value: function getCredentials() {
            return this.storage.get('credentials');
          }
          /**
           * Setta le credenziali dell'utente, utili per effettuare la "Basic Authentication".
           *
           * @param credentials Le credenziali dell'utente, ovvero la conversione in Base64 della stringa
           * "uesername:password".
           */

        }, {
          key: "setCredentials",
          value: function setCredentials(credentials) {
            return this.storage.set('credentials', credentials);
          }
          /**
           * Preleva la carriera attiva dell'utente.
           */

        }, {
          key: "getActiveCareer",
          value: function getActiveCareer() {
            return this.storage.get('activeCareer');
          }
          /**
           * Setta la carriera attiva dell'utente e la emette.
           *
           * @param careerId L'indice della carriera attiva.
           */

        }, {
          key: "setActiveCareer",
          value: function setActiveCareer(careerId) {
            this.storage.set('activeCareer', careerId);
            this.userSubject.next({
              activeCareer: careerId
            });
          }
          /**
           * Restituisce lo userSubject.
           */

        }, {
          key: "getUserSubject",
          value: function getUserSubject() {
            return this.userSubject.asObservable();
          }
        }]);

        return UserService;
      }();

      UserService.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }];
      };

      UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UserService);
      /***/
    },

    /***/
    "KRBT":
    /*!*************************************************!*\
      !*** ./src/app/services/interceptor.service.ts ***!
      \*************************************************/

    /*! exports provided: InterceptorService */

    /***/
    function KRBT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InterceptorService", function () {
        return InterceptorService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user/user.service */
      "CFL1");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var InterceptorService = /*#__PURE__*/function () {
        function InterceptorService(userService, loadingController) {
          _classCallCheck(this, InterceptorService);

          this.userService = userService;
          this.loadingController = loadingController;
          this.requests = 0;
        }
        /**
         * Intercetta le richieste inviate dal client concatenando automaticamente l'header di
         * autenticazione se i dati dell'utente sono presenti nello Ionic Storage. All'inizio viene
         * presentato un loading in attesa di ricevere la risposta da parte del server.
         *
         * @param req La richiesta da inviare.
         * @param next L'handler per far andare avanti la richiesta.
         */


        _createClass(InterceptorService, [{
          key: "intercept",
          value: function intercept(req, next) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.prepareRequest(req, next));
          }
        }, {
          key: "prepareRequest",
          value: function prepareRequest(req, next) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this = this;

              var credentials;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.presentLoading();

                    case 2:
                      _context5.next = 4;
                      return this.userService.getCredentials();

                    case 4:
                      credentials = _context5.sent;

                      if (credentials) {
                        if (req.url.includes(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].esse3Api)) {
                          req = req.clone({
                            setHeaders: {
                              'Authorization': 'Basic ' + credentials
                            }
                          });
                        }
                      }

                      return _context5.abrupt("return", next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  _context4.next = 2;
                                  return this.dismissLoading();

                                case 2:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4, this);
                        }));
                      })).toPromise());

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
          /**
           * Inserisce l'icona di caricamento.
           */

        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var loading;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (!(++this.requests === 1)) {
                        _context6.next = 6;
                        break;
                      }

                      _context6.next = 3;
                      return this.loadingController.create({
                        spinner: 'circular',
                        mode: 'ios',
                        cssClass: 'app-loading'
                      });

                    case 3:
                      loading = _context6.sent;
                      _context6.next = 6;
                      return loading.present();

                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
          /**
           * Rimuove l'icona di caricamento.
           */

        }, {
          key: "dismissLoading",
          value: function dismissLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      if (!(--this.requests === 0)) {
                        _context7.next = 3;
                        break;
                      }

                      _context7.next = 3;
                      return this.loadingController.dismiss();

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }]);

        return InterceptorService;
      }();

      InterceptorService.ctorParameters = function () {
        return [{
          type: _user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      };

      InterceptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], InterceptorService);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "kwrG");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/screen-orientation/ngx */
      "0QAI");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_toast_toast_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./services/toast/toast.service */
      "9ZKQ");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./services/user/user.service */
      "CFL1");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(menuController, network, platform, router, statusBar, splashScreen, screenOrientation, storage, toastService, userService) {
          var _this2 = this;

          _classCallCheck(this, AppComponent);

          this.menuController = menuController;
          this.network = network;
          this.platform = platform;
          this.router = router;
          this.statusBar = statusBar;
          this.splashScreen = splashScreen;
          this.screenOrientation = screenOrientation;
          this.storage = storage;
          this.toastService = toastService;
          this.userService = userService;
          this.menuItems = {
            'login': {
              name: 'Login',
              icon: 'fa-sign-in-alt',
              active: function active() {
                return !_this2.isLogged;
              }
            },
            'home': {
              name: 'Home',
              icon: 'fa-home',
              active: function active() {
                return _this2.isLogged;
              }
            },
            'esse3': {
              name: 'Carriera',
              icon: 'fa-user-graduate',
              routes: {
                'profile': {
                  name: 'Profilo'
                },
                'transcript': {
                  name: 'Libretto'
                },
                'tax': {
                  name: 'Tasse'
                }
              },
              active: function active() {
                return _this2.isLogged;
              }
            },
            'agendaweb': {
              name: 'Agenda Web',
              icon: 'fa-calendar-check',
              routes: {
                'lessons?searchBy=course': {
                  name: 'Lezioni (Insegnamento)'
                },
                'lessons?searchBy=prof': {
                  name: 'Lezioni (Docente)'
                },
                'sessions?searchBy=course': {
                  name: 'Appelli (Insegnamento)'
                },
                'sessions?searchBy=prof': {
                  name: 'Appelli (Docente)'
                },
                'rooms': {
                  name: 'Aule'
                },
                'freerooms': {
                  name: 'Cerca aule libere'
                }
              },
              active: function active() {
                return true;
              }
            },
            'settings': {
              name: 'Impostazioni',
              icon: 'fa-cog',
              active: function active() {
                return _this2.isLogged;
              }
            }
          };
          this.initializeApp();
          this.isLogged = false;
          this.account = {};
          this.activeItem = 'home';
          this.activeSubItem = '';
          this.subMenuOpened = false;
          this.wasOffline = false;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      this.router.events.subscribe(function (event) {
                        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__["NavigationEnd"]) {
                          _this3.getAccount();

                          _this3.setMenuInitailState();
                        }
                      });
                      this.network.onConnect().subscribe(function () {
                        if (_this3.network.type === _this3.network.Connection.CELL || _this3.network.type === _this3.network.Connection.CELL_2G || _this3.network.type === _this3.network.Connection.CELL_3G || _this3.network.type === _this3.network.Connection.CELL_4G) {
                          _this3.wasOffline = false;

                          _this3.toastService.presentWarningToast({
                            header: 'Online',
                            message: 'È attiva la connessione dati.'
                          });
                        }

                        if (_this3.wasOffline) {
                          _this3.wasOffline = false;

                          _this3.toastService.presentSuccessToast({
                            header: 'Online',
                            message: 'Di nuovo online.'
                          });
                        }
                      });
                      this.network.onDisconnect().subscribe(function () {
                        setTimeout(function () {
                          if (_this3.network.type === _this3.network.Connection.NONE) {
                            _this3.wasOffline = true;

                            _this3.toastService.presentToastWithIcon('cloud-offline', {
                              header: 'Offline',
                              message: 'Nessuna connessione Internet.'
                            });
                          }
                        }, 3000);
                      });
                      this.userService.getUserSubject().subscribe(function (value) {
                        _this3.getAccount(value.activeCareer);
                      });

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "initializeApp",
          value: function initializeApp() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.platform.ready();

                    case 2:
                      this.statusBar.styleDefault();
                      this.splashScreen.hide();

                      if (Object(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["isPlatform"])('android') || Object(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["isPlatform"])('ios')) {
                        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
                      }

                    case 5:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "getAccount",
          value: function getAccount(career) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var activeCareer, user;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      if (!(career !== undefined)) {
                        _context10.next = 4;
                        break;
                      }

                      _context10.t0 = career;
                      _context10.next = 7;
                      break;

                    case 4:
                      _context10.next = 6;
                      return this.userService.getActiveCareer();

                    case 6:
                      _context10.t0 = _context10.sent;

                    case 7:
                      activeCareer = _context10.t0;
                      _context10.next = 10;
                      return this.userService.getUser();

                    case 10:
                      user = _context10.sent;

                      if (user) {
                        this.isLogged = true;
                        this.account.id = user.user.trattiCarriera[activeCareer].matricola;
                        this.account.firstname = user.user.firstName.toLowerCase();
                        this.account.lastname = user.user.lastName.toLowerCase();
                        this.account.email = "".concat(user.user.userId.toLowerCase(), "@studenti.unisa.it");
                        this.account.avatar = this.account.firstname[0] + this.account.lastname[0];
                      }

                    case 12:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "noSort",
          value: function noSort() {
            return 0;
          }
        }, {
          key: "setMenuInitailState",
          value: function setMenuInitailState() {
            var pathParams = this.router.url.split('/');
            this.activeItem = pathParams[1];

            if (pathParams.length > 2) {
              this.activeSubItem = pathParams[2];
              this.subMenuOpened = true;
            }
          }
        }, {
          key: "closeMenu",
          value: function closeMenu() {
            this.menuController.close();
          }
        }, {
          key: "toggleSubMenu",
          value: function toggleSubMenu() {
            this.subMenuOpened = !this.subMenuOpened;
          }
        }, {
          key: "navigateForward",
          value: function navigateForward(item, path) {
            this.activeItem = path;

            if (!item.routes) {
              this.closeMenu();
              return this.router.navigateByUrl(path);
            }

            this.toggleSubMenu();
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.toggleSubMenu();
          }
        }, {
          key: "navigateTo",
          value: function navigateTo(path) {
            this.closeMenu();
            this.router.navigateByUrl("".concat(this.activeItem, "/").concat(path));
          }
        }, {
          key: "logout",
          value: function logout() {
            this.isLogged = false;
            this.storage.clear();
            this.router.navigateByUrl('/login');
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]
        }, {
          type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"]
        }, {
          type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _services_toast_toast_service__WEBPACK_IMPORTED_MODULE_11__["ToastService"]
        }, {
          type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n    <ion-split-pane contentId=\"main\">\r\n        <ion-menu\r\n            type=\"reveal\"\r\n            contentId=\"main\"\r\n        >\r\n            <ion-header class=\"ion-no-border\">\r\n                <ion-toolbar>\r\n                    <ion-buttons slot=\"end\">\r\n                        <ion-menu-toggle>\r\n                            <ion-button>\r\n                                <i class=\"fas fa-times app-icon\"></i>\r\n                            </ion-button>\r\n                        </ion-menu-toggle>\r\n                    </ion-buttons>\r\n                </ion-toolbar>\r\n                <ion-item *ngIf=\"isLogged\">\r\n                    <ion-avatar slot=\"start\">{{account.avatar}}</ion-avatar>\r\n                    <ion-label>\r\n                        <h3>\r\n                            {{account.firstname}} {{account.lastname}}\r\n                        </h3>\r\n                        <p>{{account.email}}</p>\r\n                        <p>{{account.id}}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ion-header>\r\n            <ion-content>\r\n                <ion-list *ngIf=\"!subMenuOpened\">\r\n                    <ion-item\r\n                        *ngFor=\"let item of menuItems | keyvalue: noSort\"\r\n                        [hidden]=\"!item.value.active()\"\r\n                        [class.active]=\"item.key === activeItem\"\r\n                    >\r\n                        <ion-label (click)=\"navigateForward(item.value, item.key)\">\r\n                            <i class=\"fas {{item.value.icon}} app-icon app-icon-left\"></i>\r\n                            {{item.value.name}}\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item\r\n                        *ngIf=\"isLogged\"\r\n                        (click)=\"logout()\"\r\n                    >\r\n                        <ion-label>\r\n                            <i class=\"fas fa-sign-out-alt app-icon app-icon-left\"></i>\r\n                            Logout\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ion-list>\r\n                <ion-list *ngIf=\"subMenuOpened\">\r\n                    <ion-item\r\n                        class=\"active\"\r\n                        (click)=\"navigateBack()\"\r\n                    >\r\n                        <ion-label class=\"close\">\r\n                            <i class=\"fas {{menuItems[activeItem].icon}} app-icon app-icon-left\"></i>\r\n                            {{menuItems[activeItem].name}}\r\n                            <i class=\"fas fa-angle-left app-icon app-icon-right\"></i>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item\r\n                        *ngFor=\"let item of menuItems[activeItem].routes | keyvalue: noSort\"\r\n                        class=\"subitem\"\r\n                        [class.active]=\"item.key === activeSubItem\"\r\n                    >\r\n                        <ion-label (click)=\"navigateTo(item.key)\">{{item.value.name}}</ion-label>\r\n                    </ion-item>\r\n                </ion-list>\r\n            </ion-content>\r\n        </ion-menu>\r\n        <ion-router-outlet id=\"main\"></ion-router-outlet>\r\n    </ion-split-pane>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/screen-orientation/ngx */
      "0QAI");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _services_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./services/interceptor.service */
      "KRBT");
      /* harmony import */


      var _services_error_error_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./services/error/error.service */
      "BVzC");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "kwrG");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_14__["Network"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicRouteStrategy"]
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
          useClass: _services_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["InterceptorService"],
          multi: true
        }, {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"],
          useClass: _services_error_error_service__WEBPACK_IMPORTED_MODULE_13__["ErrorService"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _services_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/guard/auth-guard.service */
      "+XFQ");
      /* harmony import */


      var _services_guard_guest_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/guard/guest-guard.service */
      "C8K0");

      var routes = [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-login-login-module */
          [__webpack_require__.e("default~free-rooms-free-rooms-module~lessons-lessons-module~pages-home-home-module~pages-login-login~86e98099"), __webpack_require__.e("pages-login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/login/login.module */
          "F4UR")).then(function (m) {
            return m.LoginPageModule;
          });
        },
        canActivate: [_services_guard_guest_guard_service__WEBPACK_IMPORTED_MODULE_4__["GuestGuardService"]]
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-home-home-module */
          [__webpack_require__.e("default~free-rooms-free-rooms-module~lessons-lessons-module~pages-home-home-module~pages-login-login~86e98099"), __webpack_require__.e("common"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/home/home.module */
          "99Un")).then(function (m) {
            return m.HomePageModule;
          });
        },
        canActivate: [_services_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'esse3',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-esse3-esse3-module */
          "pages-esse3-esse3-module").then(__webpack_require__.bind(null,
          /*! ./pages/esse3/esse3.module */
          "JVhs")).then(function (m) {
            return m.Esse3PageModule;
          });
        },
        canActivate: [_services_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'agendaweb',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-agendaweb-agendaweb-module */
          "pages-agendaweb-agendaweb-module").then(__webpack_require__.bind(null,
          /*! ./pages/agendaweb/agendaweb.module */
          "h8eA")).then(function (m) {
            return m.AgendawebPageModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-settings-settings-module */
          [__webpack_require__.e("default~free-rooms-free-rooms-module~lessons-lessons-module~pages-home-home-module~pages-login-login~86e98099"), __webpack_require__.e("pages-settings-settings-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/settings/settings.module */
          "yPrK")).then(function (m) {
            return m.SettingsPageModule;
          });
        },
        canActivate: [_services_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: '**',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-not-found-not-found-module */
          "pages-not-found-not-found-module").then(__webpack_require__.bind(null,
          /*! ./pages/not-found/not-found.module */
          "jSwP")).then(function (m) {
            return m.NotFoundPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-menu {\n  --background: var(--ion-color-unisa-cobalt-blue);\n}\nion-menu ion-content:after {\n  position: absolute;\n  left: -50%;\n  width: 100%;\n  height: 100%;\n  content: \"\";\n  background: url('unisa-lineart-inverse.png') no-repeat center;\n  background-size: contain;\n  mix-blend-mode: lighten;\n  opacity: 0.1;\n}\nion-menu ion-header {\n  padding: var(--ion-app-padding) var(--ion-app-padding) 0;\n  margin-bottom: var(--ion-app-margin);\n}\nion-menu ion-header ion-toolbar {\n  margin-bottom: var(--ion-app-margin);\n}\nion-menu ion-header .app-icon {\n  color: white;\n}\nion-menu ion-avatar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 60px;\n  width: 60px;\n  background: white;\n  color: var(--ion-color-unisa-cobalt-blue);\n  font-size: 20px;\n  font-weight: var(--ion-font-weight-bold);\n  text-transform: uppercase;\n}\nion-menu ion-label {\n  color: white;\n}\nion-menu ion-label h3 {\n  margin-bottom: 5px;\n  font-size: 16px;\n  font-weight: var(--ion-font-weight-bold);\n  text-transform: capitalize;\n}\nion-menu ion-label p {\n  margin-bottom: 5px;\n  color: white;\n  font-size: 14px;\n  opacity: 0.5;\n}\nion-menu ion-label p:last-child {\n  margin-bottom: 0;\n}\nion-menu ion-content {\n  --background: none;\n}\nion-menu ion-content::part(scroll) {\n  z-index: 1;\n}\nion-menu ion-list {\n  z-index: 1;\n  padding-top: 0;\n  padding-bottom: 20px;\n  background: none;\n}\nion-menu ion-list ion-item {\n  --padding-end: var(--ion-app-padding);\n  padding: 20px 0;\n  margin-bottom: -20px;\n}\nion-menu ion-list ion-item:last-child {\n  margin-bottom: 0;\n}\nion-menu ion-list ion-item ion-label {\n  flex: initial;\n  padding: 15px 30px;\n  font-size: 15px;\n  font-weight: var(--ion-font-weight-semibold);\n  cursor: pointer;\n}\nion-menu ion-list ion-item ion-label .app-icon {\n  color: white;\n}\nion-menu ion-list ion-item ion-label .app-icon-left {\n  margin-right: 20px;\n}\nion-menu ion-list ion-item ion-label .app-icon-right {\n  margin-left: 20px;\n}\nion-menu ion-list ion-item.subitem {\n  padding: 10px 0;\n  opacity: 0.5;\n}\nion-menu ion-list ion-item.subitem.active {\n  opacity: 1;\n}\nion-menu ion-list ion-item.active:not(.subitem) {\n  background: url('menu-round-top.svg') no-repeat top left, url('menu-round-bottom.svg') no-repeat bottom left;\n}\nion-menu ion-list ion-item.active:not(.subitem) ion-label {\n  background: white;\n  border-top-right-radius: 25px;\n  border-bottom-right-radius: 25px;\n  color: var(--ion-color-unisa-cobalt-blue);\n}\nion-menu ion-list ion-item.active:not(.subitem) ion-label .app-icon {\n  color: var(--ion-color-unisa-cobalt-blue);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0RBQUE7QUFDSjtBQUNJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNkRBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUNSO0FBRUk7RUFDSSx3REFBQTtFQUNBLG9DQUFBO0FBQVI7QUFFUTtFQUNJLG9DQUFBO0FBQVo7QUFHUTtFQUNJLFlBQUE7QUFEWjtBQUtJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtBQUhSO0FBTUk7RUFDSSxZQUFBO0FBSlI7QUFNUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsMEJBQUE7QUFKWjtBQU9RO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFMWjtBQU9ZO0VBQ0ksZ0JBQUE7QUFMaEI7QUFVSTtFQUNJLGtCQUFBO0FBUlI7QUFVUTtFQUNJLFVBQUE7QUFSWjtBQVlJO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBVlI7QUFZUTtFQUNJLHFDQUFBO0VBRUEsZUFBQTtFQUNBLG9CQUFBO0FBWFo7QUFhWTtFQUNJLGdCQUFBO0FBWGhCO0FBY1k7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7RUFDQSxlQUFBO0FBWmhCO0FBY2dCO0VBQ0ksWUFBQTtBQVpwQjtBQWVnQjtFQUNJLGtCQUFBO0FBYnBCO0FBZ0JnQjtFQUNJLGlCQUFBO0FBZHBCO0FBbUJRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFqQlo7QUFtQlk7RUFDSSxVQUFBO0FBakJoQjtBQXNCWTtFQUNJLDRHQUFBO0FBcEJoQjtBQXVCZ0I7RUFDSSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5Q0FBQTtBQXJCcEI7QUF1Qm9CO0VBQ0kseUNBQUE7QUFyQnhCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXVuaXNhLWNvYmFsdC1ibHVlKTtcclxuXHJcbiAgICBpb24tY29udGVudDphZnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IC01MCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy91bmlzYS1saW5lYXJ0LWludmVyc2UucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgIG1peC1ibGVuZC1tb2RlOiBsaWdodGVuO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMTtcclxuICAgIH1cclxuXHJcbiAgICBpb24taGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tYXBwLXBhZGRpbmcpIHZhcigtLWlvbi1hcHAtcGFkZGluZykgMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tYXBwLW1hcmdpbik7XHJcblxyXG4gICAgICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLWFwcC1tYXJnaW4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFwcC1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tYXZhdGFyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdW5pc2EtY29iYWx0LWJsdWUpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogdmFyKC0taW9uLWZvbnQtd2VpZ2h0LWJvbGQpO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1pb24tZm9udC13ZWlnaHQtYm9sZCk7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuXHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jb250ZW50IHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcblxyXG4gICAgICAgICY6OnBhcnQoc2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcblxyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLWFwcC1wYWRkaW5nKTtcclxuXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XHJcblxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZsZXg6IGluaXRpYWw7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0taW9uLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAuYXBwLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYXBwLWljb24tbGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5hcHAtaWNvbi1yaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1pdGVtLnN1Yml0ZW0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuXHJcbiAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1pdGVtLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICY6bm90KC5zdWJpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL21lbnUtcm91bmQtdG9wLnN2Z1wiKSBuby1yZXBlYXQgdG9wIGxlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9tZW51LXJvdW5kLWJvdHRvbS5zdmdcIikgbm8tcmVwZWF0IGJvdHRvbSBsZWZ0O1xyXG5cclxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci11bmlzYS1jb2JhbHQtYmx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5hcHAtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdW5pc2EtY29iYWx0LWJsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map