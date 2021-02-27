(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-not-found-not-found-module"], {
    /***/
    "CsCB":
    /*!***************************************************!*\
      !*** ./src/app/pages/not-found/not-found.page.ts ***!
      \***************************************************/

    /*! exports provided: NotFoundPage */

    /***/
    function CsCB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundPage", function () {
        return NotFoundPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_not_found_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./not-found.page.html */
      "SHFN");
      /* harmony import */


      var _not_found_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./not-found.page.scss */
      "XEu9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NotFoundPage = /*#__PURE__*/function () {
        function NotFoundPage() {
          _classCallCheck(this, NotFoundPage);
        }

        _createClass(NotFoundPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotFoundPage;
      }();

      NotFoundPage.ctorParameters = function () {
        return [];
      };

      NotFoundPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-not-found',
        template: _raw_loader_not_found_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_not_found_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NotFoundPage);
      /***/
    },

    /***/
    "SHFN":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/not-found/not-found.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function SHFN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n    <div class=\"container-flex\">\r\n        <div class=\"container\">\r\n            <h2>Oops!</h2>\r\n            <p>La pagina che stai cercando non esiste.</p>\r\n            <ion-button routerLink>Home</ion-button>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "XEu9":
    /*!*****************************************************!*\
      !*** ./src/app/pages/not-found/not-found.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function XEu9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  text-align: center;\n}\n.container h2 {\n  color: var(--ion-color-unisa-blue);\n  font-weight: var(--ion-font-weight-bold);\n  font-size: 40px;\n}\n.container p {\n  margin-bottom: var(--ion-app-margin);\n  font-size: 18px;\n}\n.container ion-button {\n  --background: var(--ion-color-unisa-orange);\n  --border-radius: 25px;\n  --color: white;\n  min-height: 50px;\n  min-width: 200px;\n  text-align: center;\n  text-transform: capitalize;\n  font-size: 16px;\n  font-weight: var(--ion-font-weight-semibold);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxub3QtZm91bmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjtBQUNJO0VBQ0ksa0NBQUE7RUFDQSx3Q0FBQTtFQUNBLGVBQUE7QUFDUjtBQUVJO0VBQ0ksb0NBQUE7RUFDQSxlQUFBO0FBQVI7QUFHSTtFQUNJLDJDQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7QUFGUiIsImZpbGUiOiJub3QtZm91bmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaDIge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdW5pc2EtYmx1ZSk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWlvbi1mb250LXdlaWdodC1ib2xkKTtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLWFwcC1tYXJnaW4pO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci11bmlzYS1vcmFuZ2UpO1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgbWluLWhlaWdodDogNTBweDtcclxuICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWlvbi1mb250LXdlaWdodC1zZW1pYm9sZCk7XHJcbiAgICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "jSwP":
    /*!*****************************************************!*\
      !*** ./src/app/pages/not-found/not-found.module.ts ***!
      \*****************************************************/

    /*! exports provided: NotFoundPageModule */

    /***/
    function jSwP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundPageModule", function () {
        return NotFoundPageModule;
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


      var _not_found_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./not-found-routing.module */
      "kzfG");
      /* harmony import */


      var _not_found_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./not-found.page */
      "CsCB");

      var NotFoundPageModule = function NotFoundPageModule() {
        _classCallCheck(this, NotFoundPageModule);
      };

      NotFoundPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _not_found_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotFoundPageRoutingModule"]],
        declarations: [_not_found_page__WEBPACK_IMPORTED_MODULE_6__["NotFoundPage"]]
      })], NotFoundPageModule);
      /***/
    },

    /***/
    "kzfG":
    /*!*************************************************************!*\
      !*** ./src/app/pages/not-found/not-found-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: NotFoundPageRoutingModule */

    /***/
    function kzfG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundPageRoutingModule", function () {
        return NotFoundPageRoutingModule;
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


      var _not_found_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./not-found.page */
      "CsCB");

      var routes = [{
        path: '',
        component: _not_found_page__WEBPACK_IMPORTED_MODULE_3__["NotFoundPage"]
      }];

      var NotFoundPageRoutingModule = function NotFoundPageRoutingModule() {
        _classCallCheck(this, NotFoundPageRoutingModule);
      };

      NotFoundPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NotFoundPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-not-found-not-found-module-es5.js.map