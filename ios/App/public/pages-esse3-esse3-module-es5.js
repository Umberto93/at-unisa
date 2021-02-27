(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-esse3-esse3-module"], {
    /***/
    "JVhs":
    /*!*********************************************!*\
      !*** ./src/app/pages/esse3/esse3.module.ts ***!
      \*********************************************/

    /*! exports provided: Esse3PageModule */

    /***/
    function JVhs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Esse3PageModule", function () {
        return Esse3PageModule;
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


      var _esse3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./esse3-routing.module */
      "zok9");

      var Esse3PageModule = function Esse3PageModule() {
        _classCallCheck(this, Esse3PageModule);
      };

      Esse3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _esse3_routing_module__WEBPACK_IMPORTED_MODULE_5__["Esse3PageRoutingModule"]]
      })], Esse3PageModule);
      /***/
    },

    /***/
    "zok9":
    /*!*****************************************************!*\
      !*** ./src/app/pages/esse3/esse3-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: Esse3PageRoutingModule */

    /***/
    function zok9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Esse3PageRoutingModule", function () {
        return Esse3PageRoutingModule;
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
        redirectTo: 'profile'
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | profile-profile-module */
          [__webpack_require__.e("default~lessons-lessons-module~pages-home-home-module~pages-settings-settings-module~profile-profile~502ce0e3"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null,
          /*! ./profile/profile.module */
          "8GCl")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: 'transcript',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | transcript-transcript-module */
          [__webpack_require__.e("default~lessons-lessons-module~pages-home-home-module~pages-settings-settings-module~profile-profile~502ce0e3"), __webpack_require__.e("transcript-transcript-module")]).then(__webpack_require__.bind(null,
          /*! ./transcript/transcript.module */
          "TLbm")).then(function (m) {
            return m.TranscriptPageModule;
          });
        }
      }, {
        path: 'tax',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | tax-tax-module */
          [__webpack_require__.e("default~lessons-lessons-module~pages-home-home-module~pages-settings-settings-module~profile-profile~502ce0e3"), __webpack_require__.e("common"), __webpack_require__.e("tax-tax-module")]).then(__webpack_require__.bind(null,
          /*! ./tax/tax.module */
          "o5to")).then(function (m) {
            return m.TaxPageModule;
          });
        }
      }];

      var Esse3PageRoutingModule = function Esse3PageRoutingModule() {
        _classCallCheck(this, Esse3PageRoutingModule);
      };

      Esse3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Esse3PageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-esse3-esse3-module-es5.js.map