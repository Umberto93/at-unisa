(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-agendaweb-agendaweb-module"], {
    /***/
    "h8eA":
    /*!*****************************************************!*\
      !*** ./src/app/pages/agendaweb/agendaweb.module.ts ***!
      \*****************************************************/

    /*! exports provided: AgendawebPageModule */

    /***/
    function h8eA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgendawebPageModule", function () {
        return AgendawebPageModule;
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


      var _agendaweb_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./agendaweb-routing.module */
      "p3bu");

      var AgendawebPageModule = function AgendawebPageModule() {
        _classCallCheck(this, AgendawebPageModule);
      };

      AgendawebPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _agendaweb_routing_module__WEBPACK_IMPORTED_MODULE_5__["AgendawebPageRoutingModule"]]
      })], AgendawebPageModule);
      /***/
    },

    /***/
    "p3bu":
    /*!*************************************************************!*\
      !*** ./src/app/pages/agendaweb/agendaweb-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: AgendawebPageRoutingModule */

    /***/
    function p3bu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgendawebPageRoutingModule", function () {
        return AgendawebPageRoutingModule;
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

      var routes = [{
        path: '',
        redirectTo: 'lessions'
      }, {
        path: 'lessons',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | lessons-lessons-module */
          [__webpack_require__.e("default~lessons-lessons-module~pages-home-home-module~pages-settings-settings-module~profile-profile~502ce0e3"), __webpack_require__.e("lessons-lessons-module")]).then(__webpack_require__.bind(null,
          /*! ./lessons/lessons.module */
          "uiw9")).then(function (m) {
            return m.LessonsPageModule;
          });
        }
      }, {
        path: 'sessions',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | sessions-sessions-module */
          [__webpack_require__.e("default~lessons-lessons-module~pages-home-home-module~pages-settings-settings-module~profile-profile~502ce0e3"), __webpack_require__.e("sessions-sessions-module")]).then(__webpack_require__.bind(null,
          /*! ./sessions/sessions.module */
          "/pR7")).then(function (m) {
            return m.SessionsPageModule;
          });
        }
      }, {
        path: 'rooms',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | rooms-rooms-module */
          [__webpack_require__.e("default~lessons-lessons-module~pages-home-home-module~pages-settings-settings-module~profile-profile~502ce0e3"), __webpack_require__.e("rooms-rooms-module")]).then(__webpack_require__.bind(null,
          /*! ./rooms/rooms.module */
          "WBLT")).then(function (m) {
            return m.RoomsPageModule;
          });
        }
      }];

      var AgendawebPageRoutingModule = function AgendawebPageRoutingModule() {
        _classCallCheck(this, AgendawebPageRoutingModule);
      };

      AgendawebPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AgendawebPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-agendaweb-agendaweb-module-es5.js.map