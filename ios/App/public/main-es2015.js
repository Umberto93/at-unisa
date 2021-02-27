(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+XFQ":
/*!******************************************************!*\
  !*** ./src/app/services/guard/auth-guard.service.ts ***!
  \******************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user.service */ "CFL1");




let AuthGuardService = class AuthGuardService {
    constructor(router, userService) {
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
    canActivate(route, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const credentials = yield this.userService.getCredentials();
            return credentials !== null || this.router.navigateByUrl('/login');
        });
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
AuthGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], AuthGuardService);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\linki\Documents\Progetti\at-unisa\src\main.ts */"zUnb");


/***/ }),

/***/ "9ZKQ":
/*!*************************************************!*\
  !*** ./src/app/services/toast/toast.service.ts ***!
  \*************************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let ToastService = class ToastService {
    constructor(toastController) {
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
    presentToast(props) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(props);
            const toast = yield this.toastController.create(Object.assign(Object.assign(Object.assign({}, this.toastProps), props), (props.cssClass &&
                { cssClass: [].concat(this.toastProps.cssClass, props.cssClass) })));
            yield toast.present();
        });
    }
    /**
     * Inserisce un nuovo toast con icona laterale sul lato sinistro.
     *
     * @param icon L'icona da inserire (vedi IonIcons).
     * @param props Le proprietà del toast.
     */
    presentToastWithIcon(icon, props) {
        this.presentToast(Object.assign(Object.assign({}, props), { buttons: [
                {
                    handler: () => false,
                    icon: icon,
                    side: 'start'
                }
            ], message: props.message }));
    }
    /**
     * Inserisce un toast in seguito ad un'azione andata a buon fine.
     *
     * @param props Le proprietà del toast.
     */
    presentSuccessToast(props) {
        this.presentToastWithIcon('checkmark-circle', Object.assign(Object.assign({}, props), { color: 'unisa-success-dark-green' }));
    }
    /**
     * Inserisce un toast in seguito ad un'azione non andata a buon fine.
     *
     * @param props Le proprietà del toast.
     */
    presentFailureToast(props) {
        this.presentToastWithIcon('close-circle', Object.assign(Object.assign({}, props), { color: 'unisa-danger-dark-red' }));
    }
    /**
     * Inserisce un toast informativo.
     *
     * @param props Le proprietà del toast.
     */
    presentInfoToast(props) {
        this.presentToastWithIcon('information-circle', Object.assign(Object.assign({}, props), { color: 'unisa-info-blue' }));
    }
    /**
     * Inserisce un toast di avvertimento.
     *
     * @param props Le proprietà del toast.
     */
    presentWarningToast(props) {
        this.presentToastWithIcon('alert-circle', Object.assign(Object.assign({}, props), { color: 'unisa-warning-yellow' }));
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToastService);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    esse3Api: 'https://www.unisa.it/proxy-test/esse3/e3rest/api',
    easycourseApi: 'https://www.unisa.it/proxy-test/easycourse',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BVzC":
/*!*************************************************!*\
  !*** ./src/app/services/error/error.service.ts ***!
  \*************************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _toast_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toast/toast.service */ "9ZKQ");



let ErrorService = class ErrorService {
    constructor(toastService) {
        this.toastService = toastService;
    }
    /**
     * Riconosce il tipo di errore che si è verificato e chiama l'opportuno handler per la gestione.
     *
     * @param error L'errore che si è verificato.
     */
    handleError(error) {
        switch (true) {
            case (error.status === 401):
                this.handleError401();
                break;
            case (error.status >= 500 && error.status <= 599):
                this.handleError50X();
                break;
        }
        console.log(error);
    }
    /**
     * Handler per la gestione di errori 401 (Unauthorized).
     */
    handleError401() {
        this.toastService.presentFailureToast({
            message: 'Utente e/o password non corretti.'
        });
    }
    /**
     * Handler per la gestione di errori lato server.
     */
    handleError50X() {
        this.toastService.presentFailureToast({
            message: 'Non è stato possibile recuperare i dati.'
        });
    }
};
ErrorService.ctorParameters = () => [
    { type: _toast_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"] }
];
ErrorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ErrorService);



/***/ }),

/***/ "C8K0":
/*!*******************************************************!*\
  !*** ./src/app/services/guard/guest-guard.service.ts ***!
  \*******************************************************/
/*! exports provided: GuestGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestGuardService", function() { return GuestGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user.service */ "CFL1");




let GuestGuardService = class GuestGuardService {
    constructor(router, userService) {
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
    canActivate(route, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const credentials = yield this.userService.getCredentials();
            return !credentials || this.router.navigateByUrl('/home');
        });
    }
};
GuestGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
GuestGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GuestGuardService);



/***/ }),

/***/ "CFL1":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/Subject */ "ds6q");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__);




let UserService = class UserService {
    constructor(storage) {
        this.storage = storage;
        this.userSubject = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    /**
     * Preleva i dati dell'utente dallo Storage.
     *
     * NB: Si tratta dei dati che vengono memorizzati dopo che il proceesso di autenticazione è
     * andato a buon fine.
     */
    getUser() {
        return this.storage.get('user');
    }
    /**
     * Setta i dati dell'utente nello Storage.
     *
     * NB: Si tratta dei dati ottenuti nel momento in cui il proceesso di autenticazione è
     * andato a buon fine.
     */
    setUser(user) {
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
    getCredentials() {
        return this.storage.get('credentials');
    }
    /**
     * Setta le credenziali dell'utente, utili per effettuare la "Basic Authentication".
     *
     * @param credentials Le credenziali dell'utente, ovvero la conversione in Base64 della stringa
     * "uesername:password".
     */
    setCredentials(credentials) {
        return this.storage.set('credentials', credentials);
    }
    /**
     * Preleva la carriera attiva dell'utente.
     */
    getActiveCareer() {
        return this.storage.get('activeCareer');
    }
    /**
     * Setta la carriera attiva dell'utente e la emette.
     *
     * @param careerId L'indice della carriera attiva.
     */
    setActiveCareer(careerId) {
        this.storage.set('activeCareer', careerId);
        this.userSubject.next({ activeCareer: careerId });
    }
    /**
     * Restituisce lo userSubject.
     */
    getUserSubject() {
        return this.userSubject.asObservable();
    }
};
UserService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "KRBT":
/*!*************************************************!*\
  !*** ./src/app/services/interceptor.service.ts ***!
  \*************************************************/
/*! exports provided: InterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorService", function() { return InterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.service */ "CFL1");






let InterceptorService = class InterceptorService {
    constructor(userService, loadingController) {
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
    intercept(req, next) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.prepareRequest(req, next));
    }
    prepareRequest(req, next) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.presentLoading();
            const credentials = yield this.userService.getCredentials();
            if (credentials) {
                req = req.clone({
                    setHeaders: {
                        'Authorization': 'Basic ' + credentials
                    }
                });
            }
            return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.dismissLoading();
            }))).toPromise();
        });
    }
    /**
     * Inserisce l'icona di caricamento.
     */
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (++this.requests === 1) {
                const loading = yield this.loadingController.create({
                    spinner: 'circular',
                    mode: 'ios',
                    cssClass: 'app-loading'
                });
                yield loading.present();
            }
        });
    }
    /**
     * Rimuove l'icona di caricamento.
     */
    dismissLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (--this.requests === 0) {
                yield this.loadingController.dismiss();
            }
        });
    }
};
InterceptorService.ctorParameters = () => [
    { type: _user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
InterceptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InterceptorService);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "b6o4");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_toast_toast_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/toast/toast.service */ "9ZKQ");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/user/user.service */ "CFL1");













let AppComponent = class AppComponent {
    constructor(menuController, network, platform, router, statusBar, screenOrientation, storage, toastService, userService) {
        this.menuController = menuController;
        this.network = network;
        this.platform = platform;
        this.router = router;
        this.statusBar = statusBar;
        this.screenOrientation = screenOrientation;
        this.storage = storage;
        this.toastService = toastService;
        this.userService = userService;
        this.menuItems = {
            'home': {
                name: 'Home',
                icon: 'fa-home'
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
                }
            },
            'agendaweb': {
                name: 'Agenda Web',
                icon: 'fa-calendar-check',
                routes: {
                    'lessons?searchBy=course': {
                        name: 'Lezioni (Ins)'
                    },
                    'lessons?searchBy=prof': {
                        name: 'Lezioni (Doc)'
                    },
                    'sessions?searchBy=course': {
                        name: 'Appelli (Ins)'
                    },
                    'sessions?searchBy=prof': {
                        name: 'Appelli (Doc)'
                    },
                    'rooms': {
                        name: 'Aule'
                    }
                }
            },
            'settings': {
                name: 'Impostazioni',
                icon: 'fa-cog'
            }
        };
        this.initializeApp();
        this.isLoginPage = false;
        this.account = {};
        this.activeItem = 'home';
        this.activeSubItem = '';
        this.subMenuOpened = false;
        this.wasOffline = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.events.subscribe((event) => {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__["NavigationEnd"]) {
                    this.isLoginPage = event.urlAfterRedirects === '/login';
                    this.getAccount();
                    this.setMenuInitailState();
                }
            });
            this.network.onConnect().subscribe(() => {
                if (this.network.type === this.network.Connection.CELL ||
                    this.network.type === this.network.Connection.CELL_2G ||
                    this.network.type === this.network.Connection.CELL_3G ||
                    this.network.type === this.network.Connection.CELL_4G) {
                    this.wasOffline = false;
                    this.toastService.presentWarningToast({
                        header: 'Online',
                        message: 'È attiva la connessione dati.'
                    });
                }
                if (this.wasOffline) {
                    this.wasOffline = false;
                    this.toastService.presentSuccessToast({
                        header: 'Online',
                        message: 'Di nuovo online.'
                    });
                }
            });
            this.network.onDisconnect().subscribe(() => {
                setTimeout(() => {
                    if (this.network.type === this.network.Connection.NONE) {
                        this.wasOffline = true;
                        this.toastService.presentToastWithIcon('cloud-offline', {
                            header: 'Offline',
                            message: 'Nessuna connessione Internet.'
                        });
                    }
                }, 3000);
            });
            this.userService.getUserSubject()
                .subscribe((value) => {
                this.getAccount(value.activeCareer);
            });
        });
    }
    initializeApp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.platform.ready();
            this.statusBar.styleDefault();
            _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"].hide();
            if (Object(_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["isPlatform"])('android') || Object(_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["isPlatform"])('ios')) {
                this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
            }
        });
    }
    getAccount(career) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const activeCareer = career !== undefined ? career : yield this.userService.getActiveCareer();
            const user = yield this.userService.getUser();
            if (user) {
                this.account.id = user.user.trattiCarriera[activeCareer].matricola;
                this.account.firstname = user.user.firstName.toLowerCase();
                this.account.lastname = user.user.lastName.toLowerCase();
                this.account.email = `${user.user.userId.toLowerCase()}@studenti.unisa.it`;
                this.account.avatar = this.account.firstname[0] + this.account.lastname[0];
            }
        });
    }
    noSort() {
        return 0;
    }
    setMenuInitailState() {
        const pathParams = this.router.url.split('/');
        this.activeItem = pathParams[1];
        if (pathParams.length > 2) {
            this.activeSubItem = pathParams[2];
            this.subMenuOpened = true;
        }
    }
    closeMenu() {
        this.menuController.close();
    }
    toggleSubMenu() {
        this.subMenuOpened = !this.subMenuOpened;
    }
    navigateForward(item, path) {
        this.activeItem = path;
        if (!item.routes) {
            this.closeMenu();
            return this.router.navigateByUrl(path);
        }
        this.toggleSubMenu();
    }
    navigateBack() {
        this.toggleSubMenu();
    }
    navigateTo(path) {
        this.closeMenu();
        this.router.navigateByUrl(`${this.activeItem}/${path}`);
    }
    logout() {
        this.storage.clear();
        this.router.navigateByUrl('/login');
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _services_toast_toast_service__WEBPACK_IMPORTED_MODULE_11__["ToastService"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n    <ion-split-pane contentId=\"main\">\r\n        <ion-menu\r\n            [hidden]=\"isLoginPage\"\r\n            type=\"reveal\"\r\n            contentId=\"main\"\r\n        >\r\n            <ion-header class=\"ion-no-border\">\r\n                <ion-toolbar>\r\n                    <ion-buttons slot=\"end\">\r\n                        <ion-menu-toggle>\r\n                            <ion-button>\r\n                                <i class=\"fas fa-times app-icon\"></i>\r\n                            </ion-button>\r\n                        </ion-menu-toggle>\r\n                    </ion-buttons>\r\n                </ion-toolbar>\r\n                <ion-item>\r\n                    <ion-avatar slot=\"start\">{{account.avatar}}</ion-avatar>\r\n                    <ion-label>\r\n                        <h3>\r\n                            {{account.firstname}} {{account.lastname}}\r\n                        </h3>\r\n                        <p>{{account.email}}</p>\r\n                        <p>{{account.id}}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ion-header>\r\n            <ion-content>\r\n                <ion-list *ngIf=\"!subMenuOpened\">\r\n                    <ion-item\r\n                        *ngFor=\"let item of menuItems | keyvalue: noSort\"\r\n                        [class.active]=\"item.key === activeItem\"\r\n                    >\r\n                        <ion-label (click)=\"navigateForward(item.value, item.key)\">\r\n                            <i class=\"fas {{item.value.icon}} app-icon app-icon-left\"></i>\r\n                            {{item.value.name}}\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item (click)=\"logout()\">\r\n                        <ion-label>\r\n                            <i class=\"fas fa-power-off app-icon app-icon-left\"></i>\r\n                            Logout\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ion-list>\r\n                <ion-list *ngIf=\"subMenuOpened\">\r\n                    <ion-item\r\n                        class=\"active\"\r\n                        (click)=\"navigateBack()\"\r\n                    >\r\n                        <ion-label class=\"close\">\r\n                            <i class=\"fas {{menuItems[activeItem].icon}} app-icon app-icon-left\"></i>\r\n                            {{menuItems[activeItem].name}}\r\n                            <i class=\"fas fa-angle-left app-icon app-icon-right\"></i>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item\r\n                        *ngFor=\"let item of menuItems[activeItem].routes | keyvalue: noSort\"\r\n                        class=\"subitem\"\r\n                        [class.active]=\"item.key === activeSubItem\"\r\n                    >\r\n                        <ion-label (click)=\"navigateTo(item.key)\">{{item.value.name}}</ion-label>\r\n                    </ion-item>\r\n                </ion-list>\r\n            </ion-content>\r\n        </ion-menu>\r\n        <ion-router-outlet id=\"main\"></ion-router-outlet>\r\n    </ion-split-pane>\r\n</ion-app>\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "b6o4");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _services_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/interceptor.service */ "KRBT");
/* harmony import */ var _services_error_error_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/error/error.service */ "BVzC");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"].forRoot(),
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["IonicStorageModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"]
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_14__["Network"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicRouteStrategy"] },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["InterceptorService"], multi: true },
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _services_error_error_service__WEBPACK_IMPORTED_MODULE_13__["ErrorService"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/guard/auth-guard.service */ "+XFQ");
/* harmony import */ var _services_guard_guest_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/guard/guest-guard.service */ "C8K0");





const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-login-login-module */ "pages-login-login-module").then(__webpack_require__.bind(null, /*! ./pages/login/login.module */ "F4UR")).then(m => m.LoginPageModule),
        canActivate: [_services_guard_guest_guard_service__WEBPACK_IMPORTED_MODULE_4__["GuestGuardService"]]
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() | pages-home-home-module */[__webpack_require__.e("default~lessons-lessons-module~pages-home-home-module~pages-settings-settings-module~profile-profile~502ce0e3"), __webpack_require__.e("common"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "99Un")).then(m => m.HomePageModule),
        canActivate: [_services_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'esse3',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-esse3-esse3-module */ "pages-esse3-esse3-module").then(__webpack_require__.bind(null, /*! ./pages/esse3/esse3.module */ "JVhs")).then(m => m.Esse3PageModule),
        canActivate: [_services_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'agendaweb',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-agendaweb-agendaweb-module */ "pages-agendaweb-agendaweb-module").then(__webpack_require__.bind(null, /*! ./pages/agendaweb/agendaweb.module */ "h8eA")).then(m => m.AgendawebPageModule),
        canActivate: [_services_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'settings',
        loadChildren: () => Promise.all(/*! import() | pages-settings-settings-module */[__webpack_require__.e("default~lessons-lessons-module~pages-home-home-module~pages-settings-settings-module~profile-profile~502ce0e3"), __webpack_require__.e("pages-settings-settings-module")]).then(__webpack_require__.bind(null, /*! ./pages/settings/settings.module */ "yPrK")).then(m => m.SettingsPageModule)
    },
    {
        path: '**',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-not-found-not-found-module */ "pages-not-found-not-found-module").then(__webpack_require__.bind(null, /*! ./pages/not-found/not-found.module */ "jSwP")).then(m => m.NotFoundPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu {\n  --background: var(--ion-color-unisa-cobalt-blue);\n}\nion-menu ion-content:after {\n  position: absolute;\n  left: -50%;\n  width: 100%;\n  height: 100%;\n  content: \"\";\n  background: url('unisa-lineart-inverse.png') no-repeat center;\n  background-size: contain;\n  mix-blend-mode: lighten;\n  opacity: 0.1;\n}\nion-menu ion-header {\n  padding: var(--ion-app-padding) var(--ion-app-padding) 0;\n  margin-bottom: var(--ion-app-margin);\n}\nion-menu ion-header ion-toolbar {\n  margin-bottom: var(--ion-app-margin);\n}\nion-menu ion-header .app-icon {\n  color: white;\n}\nion-menu ion-avatar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 60px;\n  width: 60px;\n  background: white;\n  color: var(--ion-color-unisa-cobalt-blue);\n  font-size: 20px;\n  font-weight: var(--ion-font-weight-bold);\n  text-transform: uppercase;\n}\nion-menu ion-label {\n  color: white;\n}\nion-menu ion-label h3 {\n  margin-bottom: 5px;\n  font-size: 16px;\n  font-weight: var(--ion-font-weight-bold);\n  text-transform: capitalize;\n}\nion-menu ion-label p {\n  margin-bottom: 5px;\n  color: white;\n  font-size: 14px;\n  opacity: 0.5;\n}\nion-menu ion-label p:last-child {\n  margin-bottom: 0;\n}\nion-menu ion-content {\n  --background: none;\n}\nion-menu ion-content::part(scroll) {\n  z-index: 1;\n}\nion-menu ion-list {\n  z-index: 1;\n  padding: 0;\n  background: none;\n}\nion-menu ion-list ion-item {\n  --padding-end: var(--ion-app-padding);\n  padding: 20px 0;\n  margin-bottom: -20px;\n}\nion-menu ion-list ion-item:last-child {\n  margin-bottom: 0;\n}\nion-menu ion-list ion-item ion-label {\n  flex: initial;\n  padding: 15px 30px;\n  font-size: 15px;\n  font-weight: var(--ion-font-weight-semibold);\n  cursor: pointer;\n}\nion-menu ion-list ion-item ion-label .app-icon {\n  color: white;\n}\nion-menu ion-list ion-item ion-label .app-icon-left {\n  margin-right: 20px;\n}\nion-menu ion-list ion-item ion-label .app-icon-right {\n  margin-left: 20px;\n}\nion-menu ion-list ion-item.subitem {\n  padding: 10px 0;\n  opacity: 0.5;\n}\nion-menu ion-list ion-item.subitem.active {\n  opacity: 1;\n}\nion-menu ion-list ion-item.active:not(.subitem) {\n  background: url('menu-round-top.svg') no-repeat top left, url('menu-round-bottom.svg') no-repeat bottom left;\n}\nion-menu ion-list ion-item.active:not(.subitem) ion-label {\n  background: white;\n  border-top-right-radius: 25px;\n  border-bottom-right-radius: 25px;\n  color: var(--ion-color-unisa-cobalt-blue);\n}\nion-menu ion-list ion-item.active:not(.subitem) ion-label .app-icon {\n  color: var(--ion-color-unisa-cobalt-blue);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0RBQUE7QUFDSjtBQUNJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNkRBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUNSO0FBRUk7RUFDSSx3REFBQTtFQUNBLG9DQUFBO0FBQVI7QUFFUTtFQUNJLG9DQUFBO0FBQVo7QUFHUTtFQUNJLFlBQUE7QUFEWjtBQUtJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtBQUhSO0FBTUk7RUFDSSxZQUFBO0FBSlI7QUFNUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsMEJBQUE7QUFKWjtBQU9RO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFMWjtBQU9ZO0VBQ0ksZ0JBQUE7QUFMaEI7QUFVSTtFQUNJLGtCQUFBO0FBUlI7QUFVUTtFQUNJLFVBQUE7QUFSWjtBQVlJO0VBQ0ksVUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQVZSO0FBWVE7RUFDSSxxQ0FBQTtFQUVBLGVBQUE7RUFDQSxvQkFBQTtBQVhaO0FBYVk7RUFDSSxnQkFBQTtBQVhoQjtBQWNZO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDRDQUFBO0VBQ0EsZUFBQTtBQVpoQjtBQWNnQjtFQUNJLFlBQUE7QUFacEI7QUFlZ0I7RUFDSSxrQkFBQTtBQWJwQjtBQWdCZ0I7RUFDSSxpQkFBQTtBQWRwQjtBQW1CUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBakJaO0FBbUJZO0VBQ0ksVUFBQTtBQWpCaEI7QUFzQlk7RUFDSSw0R0FBQTtBQXBCaEI7QUF1QmdCO0VBQ0ksaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EseUNBQUE7QUFyQnBCO0FBdUJvQjtFQUNJLHlDQUFBO0FBckJ4QiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci11bmlzYS1jb2JhbHQtYmx1ZSk7XHJcblxyXG4gICAgaW9uLWNvbnRlbnQ6YWZ0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAtNTAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvdW5pc2EtbGluZWFydC1pbnZlcnNlLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICBtaXgtYmxlbmQtbW9kZTogbGlnaHRlbjtcclxuICAgICAgICBvcGFjaXR5OiAwLjE7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLWFwcC1wYWRkaW5nKSB2YXIoLS1pb24tYXBwLXBhZGRpbmcpIDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLWFwcC1tYXJnaW4pO1xyXG5cclxuICAgICAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1hcHAtbWFyZ2luKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hcHAtaWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWF2YXRhciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXVuaXNhLWNvYmFsdC1ibHVlKTtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWlvbi1mb250LXdlaWdodC1ib2xkKTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0taW9uLWZvbnQtd2VpZ2h0LWJvbGQpO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcblxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tY29udGVudCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG5cclxuICAgICAgICAmOjpwYXJ0KHNjcm9sbCkge1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcblxyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLWFwcC1wYWRkaW5nKTtcclxuXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XHJcblxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZsZXg6IGluaXRpYWw7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0taW9uLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAuYXBwLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYXBwLWljb24tbGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5hcHAtaWNvbi1yaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1pdGVtLnN1Yml0ZW0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuXHJcbiAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1pdGVtLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICY6bm90KC5zdWJpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL21lbnUtcm91bmQtdG9wLnN2Z1wiKSBuby1yZXBlYXQgdG9wIGxlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9tZW51LXJvdW5kLWJvdHRvbS5zdmdcIikgbm8tcmVwZWF0IGJvdHRvbSBsZWZ0O1xyXG5cclxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci11bmlzYS1jb2JhbHQtYmx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5hcHAtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdW5pc2EtY29iYWx0LWJsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map