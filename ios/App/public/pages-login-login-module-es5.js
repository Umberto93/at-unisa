(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
    /***/
    "F4UR":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.module.ts ***!
      \*********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function F4UR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "aTZN");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "bP1B");
      /* harmony import */


      var _utility_utility_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../utility/utility.module */
      "SovF");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"], _utility_utility_module__WEBPACK_IMPORTED_MODULE_7__["UtilityModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "H+1c":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function H1c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".page-title {\n  margin: 47px 0;\n}\n\nion-img {\n  height: 150px;\n}\n\nform ion-list {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.form-control {\n  margin-bottom: 30px;\n}\n\n.form-control ion-input {\n  --padding-start: 20px;\n  font-size: 14px;\n}\n\n.form-control__icon:last-of-type {\n  cursor: pointer;\n}\n\n.form-options {\n  --min-height: auto;\n  font-size: 14px;\n}\n\n.form-options ion-checkbox {\n  margin-right: 10px;\n}\n\n.form-submit--round {\n  display: block;\n  height: 60px;\n  width: 60px;\n  margin-top: 47px;\n  margin-left: auto;\n  --border-radius: 50%;\n  transition: opacity var(--ion-transition-fast);\n}\n\n.form-submit__icon {\n  color: white;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBR0k7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFBUjs7QUFJQTtFQUNJLG1CQUFBO0FBREo7O0FBR0k7RUFDSSxxQkFBQTtFQUNBLGVBQUE7QUFEUjs7QUFLQTtFQUNJLGVBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUlJO0VBQ0ksa0JBQUE7QUFGUjs7QUFNQTtFQUdJLGNBQUE7RUFDQSxZQUhPO0VBSVAsV0FKTztFQUtQLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUVBLDhDQUFBO0FBTko7O0FBU0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQU5KIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXRpdGxlIHtcclxuICAgIG1hcmdpbjogNDdweCAwO1xyXG59XHJcblxyXG5pb24taW1nIHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgfSAgICBcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxufVxyXG5cclxuLmZvcm0tY29udHJvbF9faWNvbjpsYXN0LW9mLXR5cGUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZm9ybS1vcHRpb25zIHtcclxuICAgIC0tbWluLWhlaWdodDogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICBpb24tY2hlY2tib3gge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmZvcm0tc3VibWl0LS1yb3VuZCB7XHJcbiAgICAkc2l6ZTogNjBweDtcclxuXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogJHNpemU7XHJcbiAgICB3aWR0aDogJHNpemU7XHJcbiAgICBtYXJnaW4tdG9wOiA0N3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IHZhcigtLWlvbi10cmFuc2l0aW9uLWZhc3QpO1xyXG59XHJcblxyXG4uZm9ybS1zdWJtaXRfX2ljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "TuYN":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function TuYN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"ion-align-self-center\">\r\n    <div class=\"flex flex-direction-column\">\r\n        <app-header></app-header>\r\n        <div class=\"container\">\r\n            <ion-img src=\"../../assets/icon/icon.png\"></ion-img>\r\n            <h1 class=\"page-title\">Accedi</h1>\r\n            <form\r\n                [formGroup]=\"loginForm\"\r\n                (submit)=\"login()\"\r\n                (keyup.enter)=\"login()\"\r\n            >\r\n                <ion-list>\r\n                    <ion-item class=\"form-control form-control--text\">\r\n                        <i class=\"fas fa-user  form-control__icon\"></i>\r\n                        <ion-input\r\n                            placeholder=\"Username (es. m.rossi)\"\r\n                            formControlName=\"username\"\r\n                            type=\"text\"\r\n                            required\r\n                        ></ion-input>\r\n                    </ion-item>\r\n                    <ion-item class=\"form-control form-control--text\">\r\n                        <i class=\"fas fa-lock form-control__icon\"></i>\r\n                        <ion-input\r\n                            placeholder=\"Password\"\r\n                            formControlName=\"password\"\r\n                            [type]=\"showPassword ? 'text' : 'password'\"\r\n                            required\r\n                        ></ion-input>\r\n                        <i\r\n                            class=\"fas form-control__icon\"\r\n                            [class.fa-eye]=\"!showPassword\"\r\n                            [class.fa-eye-slash]=\"showPassword\"\r\n                            (click)=\"showPassword = !showPassword\"\r\n                        ></i>\r\n                    </ion-item>\r\n                </ion-list>\r\n                <ion-button\r\n                    class=\"ion-no-margin form-submit form-submit--round\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"!loginForm.valid\"\r\n                >\r\n                    <i class=\"fas fa-arrow-right form-submit__icon\"></i>\r\n                </ion-button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "aTZN":
    /*!*****************************************************!*\
      !*** ./src/app/pages/login/login-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function aTZN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "bP1B");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "bP1B":
    /*!*******************************************!*\
      !*** ./src/app/pages/login/login.page.ts ***!
      \*******************************************/

    /*! exports provided: LoginPage */

    /***/
    function bP1B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.page.html */
      "TuYN");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "H+1c");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/toast/toast.service */
      "9ZKQ");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(router, formBuilder, auth, toastService) {
          _classCallCheck(this, LoginPage);

          this.router = router;
          this.formBuilder = formBuilder;
          this.auth = auth;
          this.toastService = toastService;
          this.loginForm = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[a-z]{1}\.[a-z0-9]+$/i)])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
          });
          this.showPassword = false;
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.loginForm.reset(); //this.loginSubscription.unsubscribe();
          }
          /**
           * Effettua il login se e solo se i dati inseriti rispettano le condizioni imposte dai
           * Validators.
           */

        }, {
          key: "login",
          value: function login() {
            var _this = this;

            if (this.loginForm.valid) {
              this.loginSubscription = this.auth.loginWithCredentials(this.loginForm.value.username, this.loginForm.value.password).subscribe(function () {}, function (err) {
                throw err;
              }, function () {
                _this.toastService.presentSuccessToast({
                  message: 'Login effettuato con successo!'
                });

                _this.router.navigateByUrl('/home');
              });
            }
          }
          /**
           * Cambia l'input da password a testuale o viceversa permettendo all'utente di poter vedere la
           * propria password durante la digitazione.
           */

        }, {
          key: "togglePassword",
          value: function togglePassword() {
            this.showPassword = !this.showPassword;
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginPage);
      /***/
    },

    /***/
    "lGQG":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function lGQG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./user/user.service */
      "CFL1");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, userService) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.userService = userService;
        }
        /**
         * Effettua il login utilizzando le credenziali inserite dall'utente.
         *
         * Il metodo di autenticazione è detto "Basic Authentication" e prevede che le credenziali
         * vengano inviate in un formato standard "username:password". La stringa risultante viene poi
         * codificata in Base64 e inserita all'interno dell'header "Authorization".
         *
         * NB: Codificare in Base64 non significa effettuare l'hash o la cifratura della stringa.
         * Essendo reversibile, questa procedura equivale al mandare le credenziali in chiaro! Ecco
         * perché è preferibile utilizzarla in combinazione con un protocollo sicuro come HTTPS.
         * Dal momento che l'UNISA non ha ancora a disposizione meccanismi per la gestione del login
         * che sfruttano protocolli come OAuth2, abbiamo deciso di optare per questa strada.
         *
         * Se il processo di autenticazione va a buon fine, i dati dell'utente vengono memorizzati nello
         * Ionic Storage assieme alle credenziali precedentemente inviate per la richiesta.
         *
         * @param username Lo username dell'utente.
         * @param password La passweord dell'utente.
         */


        _createClass(AuthService, [{
          key: "loginWithCredentials",
          value: function loginWithCredentials(username, password) {
            var _this2 = this;

            var credentials = btoa("".concat(username, ":").concat(password));
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].esse3Api, "/login"), {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': "Basic ".concat(credentials)
              })
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) {
              if (user) {
                _this2.userService.setUser(user);

                _this2.userService.setCredentials(credentials);

                _this2.userService.setActiveCareer(0);

                return user;
              }

              return null;
            }));
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-login-login-module-es5.js.map