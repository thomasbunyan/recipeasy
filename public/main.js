(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".windowWrapper {\r\n  /******* Vars *******/\r\n  --nav-height: 60px;\r\n  --sidenav-small: 60px;\r\n  --sidenav-big: 300px;\r\n  min-height: 100vh;\r\n  width: 100vw;\r\n  overflow: hidden;\r\n}\r\n\r\n.nav {\r\n  height: var(--nav-height);\r\n  width: calc(100vw - var(--sidenav-small));\r\n  margin: 0;\r\n  padding: 0;\r\n  position: fixed;\r\n  z-index: 100 !important;\r\n  transition: all 0.3s ease-in-out 0.1s;\r\n  box-shadow: 0px 1px 5px rgba(78, 78, 78, 0.205);\r\n}\r\n\r\n.bigNav {\r\n  width: calc(100vw - var(--sidenav-big));\r\n  transition: all 0.3s ease-in-out 0.1s;\r\n}\r\n\r\n.container {\r\n  min-height: calc(100vh - var(--nav-height));\r\n  margin-top: var(--nav-height) !important;\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.containerLO {\r\n  min-height: 100vh;\r\n  margin: 0 !important;\r\n}\r\n\r\n.sidenavLO {\r\n  min-width: 100vw;\r\n  margin: 0 !important;\r\n}\r\n\r\n/*** Sidenav ***/\r\n\r\nmat-sidenav {\r\n  min-width: var(--sidenav-small);\r\n  max-width: var(--sidenav-small);\r\n  width: var(--sidenav-small);\r\n  transition: all 0.3s ease-in-out 0.1s;\r\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.big {\r\n  min-width: var(--sidenav-big) !important;\r\n  max-width: var(--sidenav-big) !important;\r\n  width: var(--sidenav-big) !important;\r\n  transition: all 0.3s ease-in-out 0.1s;\r\n}\r\n\r\n/*** Content area ***/\r\n\r\nmat-sidenav-content {\r\n  max-width: 100vw;\r\n  overflow: hidden;\r\n  transition: all 0.3s ease-in-out 0.1s;\r\n  margin-left: var(--sidenav-small) !important;\r\n}\r\n\r\n.bigCont {\r\n  margin-left: var(--sidenav-big) !important;\r\n  transition: all 0.3s ease-in-out 0.1s;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIsMENBQTBDO0VBQzFDLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixzQ0FBc0M7RUFDdEMsZ0RBQWdEO0NBQ2pEOztBQUNEO0VBQ0Usd0NBQXdDO0VBQ3hDLHNDQUFzQztDQUN2Qzs7QUFFRDtFQUNFLDRDQUE0QztFQUM1Qyx5Q0FBeUM7RUFDekMsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0NBQ3RCOztBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtDQUN0Qjs7QUFFRCxpQkFBaUI7O0FBQ2pCO0VBQ0UsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsc0NBQXNDO0VBQ3RDLGdIQUFnSDtDQUNqSDs7QUFDRDtFQUNFLHlDQUF5QztFQUN6Qyx5Q0FBeUM7RUFDekMscUNBQXFDO0VBQ3JDLHNDQUFzQztDQUN2Qzs7QUFFRCxzQkFBc0I7O0FBQ3RCO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixzQ0FBc0M7RUFDdEMsNkNBQTZDO0NBQzlDOztBQUNEO0VBQ0UsMkNBQTJDO0VBQzNDLHNDQUFzQztDQUN2QyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpbmRvd1dyYXBwZXIge1xyXG4gIC8qKioqKioqIFZhcnMgKioqKioqKi9cclxuICAtLW5hdi1oZWlnaHQ6IDYwcHg7XHJcbiAgLS1zaWRlbmF2LXNtYWxsOiA2MHB4O1xyXG4gIC0tc2lkZW5hdi1iaWc6IDMwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubmF2IHtcclxuICBoZWlnaHQ6IHZhcigtLW5hdi1oZWlnaHQpO1xyXG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gdmFyKC0tc2lkZW5hdi1zbWFsbCkpO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxMDAgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwLjFzO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoNzgsIDc4LCA3OCwgMC4yMDUpO1xyXG59XHJcbi5iaWdOYXYge1xyXG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gdmFyKC0tc2lkZW5hdi1iaWcpKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwLjFzO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tbmF2LWhlaWdodCkpO1xyXG4gIG1hcmdpbi10b3A6IHZhcigtLW5hdi1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5jb250YWluZXJMTyB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNpZGVuYXZMTyB7XHJcbiAgbWluLXdpZHRoOiAxMDB2dztcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyoqKiBTaWRlbmF2ICoqKi9cclxubWF0LXNpZGVuYXYge1xyXG4gIG1pbi13aWR0aDogdmFyKC0tc2lkZW5hdi1zbWFsbCk7XHJcbiAgbWF4LXdpZHRoOiB2YXIoLS1zaWRlbmF2LXNtYWxsKTtcclxuICB3aWR0aDogdmFyKC0tc2lkZW5hdi1zbWFsbCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMC4xcztcclxuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuLmJpZyB7XHJcbiAgbWluLXdpZHRoOiB2YXIoLS1zaWRlbmF2LWJpZykgIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IHZhcigtLXNpZGVuYXYtYmlnKSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiB2YXIoLS1zaWRlbmF2LWJpZykgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwLjFzO1xyXG59XHJcblxyXG4vKioqIENvbnRlbnQgYXJlYSAqKiovXHJcbm1hdC1zaWRlbmF2LWNvbnRlbnQge1xyXG4gIG1heC13aWR0aDogMTAwdnc7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwLjFzO1xyXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlbmF2LXNtYWxsKSAhaW1wb3J0YW50O1xyXG59XHJcbi5iaWdDb250IHtcclxuICBtYXJnaW4tbGVmdDogdmFyKC0tc2lkZW5hdi1iaWcpICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMC4xcztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"windowWrapper\">\r\n  <mat-sidenav-container autosize>\r\n    <mat-sidenav *ngIf=\"authService.loggedIn()\" #sidenav mode=\"side\" opened=\"true\" [ngClass]=\"{ big: big }\">\r\n      <app-sidenav></app-sidenav>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content [ngClass]=\"{ bigCont: big, sidenavLO: !authService.loggedIn() }\">\r\n      <div class=\"nav\" *ngIf=\"authService.loggedIn()\" [ngClass]=\"{ bigNav: big }\">\r\n        <app-navbar></app-navbar>\r\n      </div>\r\n      <div class=\"container\" [ngClass]=\"{ containerLO: !authService.loggedIn() }\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sidenav/sidenav.service */ "./src/app/components/sidenav/sidenav.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(sidenavService, authService) {
        this.sidenavService = sidenavService;
        this.authService = authService;
        this.big = false;
    }
    // ? Must be after view for the view child to find the element.
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sidenavService.change.subscribe(function (isOpen) {
            _this.big = !_this.big;
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_components_sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_1__["SidenavService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ "./src/app/components/sidenav/sidenav.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_register_verify_verify_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/register/verify/verify.component */ "./src/app/components/register/verify/verify.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_results_results_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/results/results.component */ "./src/app/components/results/results.component.ts");
/* harmony import */ var _components_history_history_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/history/history.component */ "./src/app/components/history/history.component.ts");
/* harmony import */ var _components_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/recommended/recommended.component */ "./src/app/components/recommended/recommended.component.ts");
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/create/create.component */ "./src/app/components/create/create.component.ts");
/* harmony import */ var _components_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/recipe/recipe.component */ "./src/app/components/recipe/recipe.component.ts");
/* harmony import */ var _components_saved_cookbooks_cookbooks_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/saved-cookbooks/cookbooks.component */ "./src/app/components/saved-cookbooks/cookbooks.component.ts");
/* harmony import */ var _components_saved_recipes_saved_recipes_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/saved-recipes/saved-recipes.component */ "./src/app/components/saved-recipes/saved-recipes.component.ts");
/* harmony import */ var _components_cookbook_cookbook_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/cookbook/cookbook.component */ "./src/app/components/cookbook/cookbook.component.ts");
/* harmony import */ var _components_info_info_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/info/info.component */ "./src/app/components/info/info.component.ts");
/* harmony import */ var _components_cookbook_edit_cookbook_dialog_edit_cookbook_dialog_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/cookbook/edit-cookbook-dialog/edit-cookbook-dialog.component */ "./src/app/components/cookbook/edit-cookbook-dialog/edit-cookbook-dialog.component.ts");
/* harmony import */ var _components_recipe_dialog_recipe_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/recipe-dialog/recipe-dialog.component */ "./src/app/components/recipe-dialog/recipe-dialog.component.ts");
/* harmony import */ var _components_create_ingredient_dialog_ingredient_dialog_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/create/ingredient-dialog/ingredient-dialog.component */ "./src/app/components/create/ingredient-dialog/ingredient-dialog.component.ts");
/* harmony import */ var _pipes_text_limit_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pipes/text-limit.pipe */ "./src/app/pipes/text-limit.pipe.ts");
/* harmony import */ var _pipes_text_capitalise_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pipes/text-capitalise.pipe */ "./src/app/pipes/text-capitalise.pipe.ts");
/* harmony import */ var _pipes_find_image_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pipes/find-image.pipe */ "./src/app/pipes/find-image.pipe.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_validate_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/user-validate.service */ "./src/app/services/user-validate.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_recipe_validate_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./services/recipe-validate.service */ "./src/app/services/recipe-validate.service.ts");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./services/recipe.service */ "./src/app/services/recipe.service.ts");
/* harmony import */ var _services_recipe_create_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/recipe-create.service */ "./src/app/services/recipe-create.service.ts");
/* harmony import */ var _services_cookbook_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./services/cookbook.service */ "./src/app/services/cookbook.service.ts");
/* harmony import */ var _components_sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/sidenav/sidenav.service */ "./src/app/components/sidenav/sidenav.service.ts");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _components_recipe_dialog_recipe_dialog_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/recipe-dialog/recipe-dialog.service */ "./src/app/components/recipe-dialog/recipe-dialog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













































var appRoutes = [
    { path: "", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], pathMatch: "full" },
    { path: "register", component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"] },
    { path: "info", component: _components_info_info_component__WEBPACK_IMPORTED_MODULE_27__["InfoComponent"] },
    { path: "verify", component: _components_register_verify_verify_component__WEBPACK_IMPORTED_MODULE_16__["VerifyComponent"] },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"] },
    {
        path: "dashboard",
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"]]
    },
    {
        path: "results",
        component: _components_results_results_component__WEBPACK_IMPORTED_MODULE_19__["ResultsComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"]]
    },
    {
        path: "cookbooks",
        component: _components_saved_cookbooks_cookbooks_component__WEBPACK_IMPORTED_MODULE_24__["CookbooksComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"]]
    },
    {
        path: "cookbook/:id",
        component: _components_cookbook_cookbook_component__WEBPACK_IMPORTED_MODULE_26__["CookbookComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"]]
    },
    { path: "history", component: _components_history_history_component__WEBPACK_IMPORTED_MODULE_20__["HistoryComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"]] },
    { path: "recommended", component: _components_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_21__["RecommendedComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"]] },
    { path: "profile", component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"]] },
    {
        path: "create",
        component: _components_create_create_component__WEBPACK_IMPORTED_MODULE_22__["CreateComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"]]
    },
    {
        path: "recipes",
        component: _components_saved_recipes_saved_recipes_component__WEBPACK_IMPORTED_MODULE_25__["SavedRecipesComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"]]
    },
    {
        path: "recipe/:id",
        component: _components_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_23__["RecipeComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"]]
    },
    { path: "**", redirectTo: "" }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_12__["SidenavComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
                _components_results_results_component__WEBPACK_IMPORTED_MODULE_19__["ResultsComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["ProfileComponent"],
                _components_create_create_component__WEBPACK_IMPORTED_MODULE_22__["CreateComponent"],
                _components_cookbook_edit_cookbook_dialog_edit_cookbook_dialog_component__WEBPACK_IMPORTED_MODULE_28__["EditCookbookDialogComponent"],
                _components_recipe_dialog_recipe_dialog_component__WEBPACK_IMPORTED_MODULE_29__["RecipeDialogComponent"],
                _components_create_ingredient_dialog_ingredient_dialog_component__WEBPACK_IMPORTED_MODULE_30__["IngredientDialogComponent"],
                _components_saved_recipes_saved_recipes_component__WEBPACK_IMPORTED_MODULE_25__["SavedRecipesComponent"],
                _components_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_23__["RecipeComponent"],
                _components_register_verify_verify_component__WEBPACK_IMPORTED_MODULE_16__["VerifyComponent"],
                _components_saved_cookbooks_cookbooks_component__WEBPACK_IMPORTED_MODULE_24__["CookbooksComponent"],
                _components_cookbook_cookbook_component__WEBPACK_IMPORTED_MODULE_26__["CookbookComponent"],
                _components_info_info_component__WEBPACK_IMPORTED_MODULE_27__["InfoComponent"],
                _components_history_history_component__WEBPACK_IMPORTED_MODULE_20__["HistoryComponent"],
                _components_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_21__["RecommendedComponent"],
                _pipes_text_limit_pipe__WEBPACK_IMPORTED_MODULE_31__["TextLimitPipe"],
                _pipes_text_capitalise_pipe__WEBPACK_IMPORTED_MODULE_32__["TextCapitalisePipe"],
                _pipes_find_image_pipe__WEBPACK_IMPORTED_MODULE_33__["FindImagePipe"]
            ],
            imports: [_angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes), _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__["InfiniteScrollModule"]],
            providers: [
                _services_user_validate_service__WEBPACK_IMPORTED_MODULE_36__["UserValidateService"],
                _services_recipe_validate_service__WEBPACK_IMPORTED_MODULE_38__["RecipeValidateService"],
                _components_sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_42__["SidenavService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_35__["AuthService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_37__["UserService"],
                _services_recipe_service__WEBPACK_IMPORTED_MODULE_39__["RecipeService"],
                _services_recipe_create_service__WEBPACK_IMPORTED_MODULE_40__["RecipeCreateService"],
                _services_cookbook_service__WEBPACK_IMPORTED_MODULE_41__["CookbookService"],
                _services_general_service__WEBPACK_IMPORTED_MODULE_43__["GeneralService"],
                _components_recipe_dialog_recipe_dialog_service__WEBPACK_IMPORTED_MODULE_44__["RecipeDialogService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
            entryComponents: [_components_cookbook_edit_cookbook_dialog_edit_cookbook_dialog_component__WEBPACK_IMPORTED_MODULE_28__["EditCookbookDialogComponent"], _components_recipe_dialog_recipe_dialog_component__WEBPACK_IMPORTED_MODULE_29__["RecipeDialogComponent"], _components_create_ingredient_dialog_ingredient_dialog_component__WEBPACK_IMPORTED_MODULE_30__["IngredientDialogComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/cookbook/cookbook.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/cookbook/cookbook.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*** Coobook viewing page ***/\r\n.cookbookPage {\r\n  min-height: calc(100vh - 60px);\r\n  width: 100%;\r\n  /* overflow: hidden; */\r\n}\r\n.wrapper {\r\n  /* background-color: red; */\r\n  min-height: 100%;\r\n  width: 1350px;\r\n  margin: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 40px 0;\r\n}\r\n/*** Top area ***/\r\n.topArea {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-bottom: 20px;\r\n}\r\n.cookbookImage {\r\n  height: 300px;\r\n  width: 300px;\r\n  background-color: #f1f0f5;\r\n  border-radius: 25px;\r\n}\r\n.cookbookImage img {\r\n  height: 100%;\r\n  width: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  border-radius: 25px;\r\n}\r\n.cookbookTitle {\r\n  padding-top: 10px;\r\n  font-size: 50px;\r\n}\r\n.cookbookDescription {\r\n  font-size: 17px;\r\n}\r\n.cookbookInfo {\r\n  font-size: 13px;\r\n}\r\n.cookbookButtons {\r\n  height: 35px;\r\n  width: 100%;\r\n  margin-top: 40px;\r\n  text-align: center;\r\n  font-size: 25px;\r\n}\r\n.cookbookButtons i {\r\n  margin: 0 8px;\r\n  cursor: pointer;\r\n}\r\n/*** Lower area ***/\r\n.bottomArea {\r\n  /* background-color: red; */\r\n  padding-top: 40px;\r\n  width: 70%;\r\n}\r\n/*** Recipe table ***/\r\n.recipe-table {\r\n  width: 100%;\r\n  font-family: inherit;\r\n  margin: auto;\r\n  background-color: rgba(255, 255, 255, 0);\r\n}\r\nth,\r\ntd {\r\n  vertical-align: middle;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\nth {\r\n  font-size: 13px;\r\n}\r\ntd {\r\n  font-size: 15px;\r\n}\r\n.elementRow:hover {\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n  transition: all 0.2s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n.recipeColumn {\r\n  width: 50%;\r\n}\r\n.ellipColumn {\r\n  text-align: right;\r\n  color: rgba(255, 255, 255, 0);\r\n}\r\n.elementRow:hover .ellipColumn {\r\n  color: #000;\r\n}\r\n.endColumn {\r\n  text-align: right;\r\n  width: 22%;\r\n}\r\n.endColumn i {\r\n  padding-left: 5px;\r\n}\r\n/*** Table interaction ***/\r\n.remove {\r\n  font-size: 20px;\r\n  display: flex;\r\n  justify-content: center;\r\n  color: #3f3f3f;\r\n  width: 30px;\r\n  transition: all 0.1s ease-in-out;\r\n}\r\n.remove:hover {\r\n  color: #3f3f3f !important;\r\n  transition: all 0.1s ease-in-out;\r\n}\r\n.removet {\r\n  color: #3f3f3f;\r\n  transition: all 0.1s ease-in-out;\r\n}\r\n.removet:hover {\r\n  color: #3f3f3f !important;\r\n}\r\n/* .remove:hover .fa-heart,\r\n.remove .fa-times {\r\n  display: none;\r\n}\r\n.remove:hover .fa-times {\r\n  display: inline;\r\n}  */\r\n/*** General components ***/\r\n.breakLine {\r\n  width: 100%;\r\n  height: 2px;\r\n  background-color: #eaeaea;\r\n  border-radius: 25px;\r\n}\r\n.saved {\r\n  color: #eb4d44;\r\n}\r\n.hidden {\r\n  visibility: hidden;\r\n}\r\n/* .clickable {\r\n  cursor: pointer;\r\n}\r\n.infoWrapper {\r\n  margin: auto;\r\n  display: table;\r\n} */\r\n/* .cookbookInfo {\r\n  background-color: #fff;\r\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n  border-radius: 3px;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 15px;\r\n  margin-top: 40px;\r\n} */\r\n/* .editButton {\r\n  padding-left: 10px;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb29rYm9vay9jb29rYm9vay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhCQUE4QjtBQUM5QjtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osdUJBQXVCO0NBQ3hCO0FBQ0Q7RUFDRSw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsZ0JBQWdCO0NBQ2pCO0FBRUQsa0JBQWtCO0FBQ2xCO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsb0JBQW9CO0NBQ3JCO0FBRUQ7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1oscUJBQWtCO0tBQWxCLGtCQUFrQjtFQUNsQixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0NBQ2pCO0FBRUQsb0JBQW9CO0FBQ3BCO0VBQ0UsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixXQUFXO0NBQ1o7QUFFRCxzQkFBc0I7QUFDdEI7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYix5Q0FBeUM7Q0FDMUM7QUFDRDs7RUFFRSx1QkFBdUI7RUFDdkIsaUNBQWlDO0NBQ2xDO0FBQ0Q7RUFDRSxnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UscUNBQXFDO0VBQ3JDLGlDQUFpQztFQUNqQyxnQkFBZ0I7Q0FDakI7QUFFRDtFQUNFLFdBQVc7Q0FDWjtBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLDhCQUE4QjtDQUMvQjtBQUNEO0VBQ0UsWUFBWTtDQUNiO0FBQ0Q7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztDQUNaO0FBQ0Q7RUFDRSxrQkFBa0I7Q0FDbkI7QUFFRCwyQkFBMkI7QUFDM0I7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsWUFBWTtFQUNaLGlDQUFpQztDQUNsQztBQUNEO0VBQ0UsMEJBQTBCO0VBQzFCLGlDQUFpQztDQUNsQztBQUVEO0VBQ0UsZUFBZTtFQUNmLGlDQUFpQztDQUNsQztBQUNEO0VBQ0UsMEJBQTBCO0NBQzNCO0FBQ0Q7Ozs7OztLQU1LO0FBRUwsNEJBQTRCO0FBQzVCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsb0JBQW9CO0NBQ3JCO0FBRUQ7RUFDRSxlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7QUFFRDs7Ozs7O0lBTUk7QUFDSjs7Ozs7Ozs7O0lBU0k7QUFDSjs7SUFFSSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29va2Jvb2svY29va2Jvb2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogQ29vYm9vayB2aWV3aW5nIHBhZ2UgKioqL1xyXG4uY29va2Jvb2tQYWdlIHtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cclxufVxyXG4ud3JhcHBlciB7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEzNTBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNDBweCAwO1xyXG59XHJcblxyXG4vKioqIFRvcCBhcmVhICoqKi9cclxuLnRvcEFyZWEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jb29rYm9va0ltYWdlIHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMGY1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuLmNvb2tib29rSW1hZ2UgaW1nIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG4uY29va2Jvb2tUaXRsZSB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG59XHJcbi5jb29rYm9va0Rlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuLmNvb2tib29rSW5mbyB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5jb29rYm9va0J1dHRvbnMge1xyXG4gIGhlaWdodDogMzVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuLmNvb2tib29rQnV0dG9ucyBpIHtcclxuICBtYXJnaW46IDAgOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyoqKiBMb3dlciBhcmVhICoqKi9cclxuLmJvdHRvbUFyZWEge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4vKioqIFJlY2lwZSB0YWJsZSAqKiovXHJcbi5yZWNpcGUtdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG59XHJcbnRoLFxyXG50ZCB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG50aCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbnRkIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmVsZW1lbnRSb3c6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yZWNpcGVDb2x1bW4ge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuLmVsbGlwQ29sdW1uIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxufVxyXG4uZWxlbWVudFJvdzpob3ZlciAuZWxsaXBDb2x1bW4ge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5lbmRDb2x1bW4ge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHdpZHRoOiAyMiU7XHJcbn1cclxuLmVuZENvbHVtbiBpIHtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLyoqKiBUYWJsZSBpbnRlcmFjdGlvbiAqKiovXHJcbi5yZW1vdmUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiAjM2YzZjNmO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5yZW1vdmU6aG92ZXIge1xyXG4gIGNvbG9yOiAjM2YzZjNmICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5yZW1vdmV0IHtcclxuICBjb2xvcjogIzNmM2YzZjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcclxufVxyXG4ucmVtb3ZldDpob3ZlciB7XHJcbiAgY29sb3I6ICMzZjNmM2YgIWltcG9ydGFudDtcclxufVxyXG4vKiAucmVtb3ZlOmhvdmVyIC5mYS1oZWFydCxcclxuLnJlbW92ZSAuZmEtdGltZXMge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnJlbW92ZTpob3ZlciAuZmEtdGltZXMge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufSAgKi9cclxuXHJcbi8qKiogR2VuZXJhbCBjb21wb25lbnRzICoqKi9cclxuLmJyZWFrTGluZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcblxyXG4uc2F2ZWQge1xyXG4gIGNvbG9yOiAjZWI0ZDQ0O1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qIC5jbGlja2FibGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaW5mb1dyYXBwZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufSAqL1xyXG4vKiAuY29va2Jvb2tJbmZvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn0gKi9cclxuLyogLmVkaXRCdXR0b24ge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufSAqL1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/cookbook/cookbook.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/cookbook/cookbook.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cookbookPage\">\n  <div class=\"wrapper\">\n    <div class=\"topArea\">\n      <div class=\"cookbookImage\">\n        <img [ngClass]=\"{ hidden: !cookbook?.image }\" src=\"{{ generalService.getImageLink(cookbook?.image) }}\" #rImg />\n      </div>\n      <h1 class=\"cookbookTitle\">{{ cookbook.title }}</h1>\n      <p class=\"cookbookDescription\">{{ cookbook.description }}</p>\n      <p class=\"cookbookInfo\">Created by {{ cookbook.author }} {{ generalService.getTimeAgo(cookbook.date) }}.</p>\n      <div class=\"cookbookButtons\">\n        <i class=\"fas fa-edit\" (click)=\"editCookbook()\" style=\"padding-right: 20px\" *ngIf=\"owner\"></i><i class=\"fas fa-heart removet\" (click)=\"toggleCookbookSave()\" [ngClass]=\"{ saved: saved == true }\"></i>\n      </div>\n    </div>\n    <div class=\"breakLine\"></div>\n    <div class=\"bottomArea\">\n      <table mat-table [dataSource]=\"cookbook.recipes\" class=\"recipe-table\">\n        <ng-container matColumnDef=\"save\">\n          <th mat-header-cell *matHeaderCellDef></th>\n          <td mat-cell *matCellDef=\"let recipe\">\n            <i class=\"fas fa-heart remove\" [ngClass]=\"{ saved: recipe.recipe.saved }\" (click)=\"$event.stopPropagation(); toggleSave(recipe.recipe)\"></i>\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"recipe\">\n          <th mat-header-cell *matHeaderCellDef>Recipe</th>\n          <td mat-cell *matCellDef=\"let recipe\" class=\"recipeColumn\">{{ recipe.recipe.title }}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"type\">\n          <th mat-header-cell *matHeaderCellDef>Type</th>\n          <td mat-cell *matCellDef=\"let recipe\">{{ recipe.recipe.mealType }}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"ellipsis\">\n          <th mat-header-cell *matHeaderCellDef></th>\n          <td mat-cell *matCellDef=\"let recipe\" class=\"ellipColumn\"><i class=\"fas fa-ellipsis-h\" (click)=\"$event.stopPropagation(); openMenu(recipe)\"></i></td>\n        </ng-container>\n        <ng-container matColumnDef=\"added\">\n          <th mat-header-cell *matHeaderCellDef class=\"endColumn\" title=\"Added\">Added<i class=\"far fa-calendar-alt\"></i></th>\n          <td mat-cell *matCellDef=\"let recipe\" class=\"endColumn\">{{ generalService.getTimeAgo(recipe.timestamp) }}</td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"['save', 'recipe', 'type', 'ellipsis', 'added']\"></tr>\n        <tr mat-row *matRowDef=\"let myRowData; columns: ['save', 'recipe', 'type', 'ellipsis', 'added']\" (click)=\"viewRecipe(myRowData)\" class=\"elementRow\"></tr>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/cookbook/cookbook.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/cookbook/cookbook.component.ts ***!
  \***********************************************************/
/*! exports provided: CookbookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookbookComponent", function() { return CookbookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_cookbook_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cookbook.service */ "./src/app/services/cookbook.service.ts");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/recipe.service */ "./src/app/services/recipe.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _cookbook_edit_cookbook_dialog_edit_cookbook_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cookbook/edit-cookbook-dialog/edit-cookbook-dialog.component */ "./src/app/components/cookbook/edit-cookbook-dialog/edit-cookbook-dialog.component.ts");
/* harmony import */ var _recipe_dialog_recipe_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../recipe-dialog/recipe-dialog.service */ "./src/app/components/recipe-dialog/recipe-dialog.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/general.service */ "./src/app/services/general.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CookbookComponent = /** @class */ (function () {
    function CookbookComponent(route, titleService, cookbookService, recipeService, router, dialog, userService, generalService, recipeDialog) {
        this.route = route;
        this.titleService = titleService;
        this.cookbookService = cookbookService;
        this.recipeService = recipeService;
        this.router = router;
        this.dialog = dialog;
        this.userService = userService;
        this.generalService = generalService;
        this.recipeDialog = recipeDialog;
        this.cookbook = "";
        this.cookbookRecipes = "";
        this.saveLock = false;
    }
    CookbookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (val) {
            _this.userId = _this.generalService.getUser().id;
            _this.cookbookId = _this.route.snapshot.paramMap.get("id");
            _this.userService.addToHistory(_this.cookbookId, "cookbooks");
            _this.cookbookService.getCookBookById(_this.cookbookId).subscribe(function (data) {
                if (!data.success) {
                    _this.router.navigate([""]);
                }
                else {
                    _this.cookbook = data.cookbook;
                    _this.titleService.setTitle(_this.cookbook.title);
                    if (_this.generalService.getUser().username === _this.cookbook.author) {
                        _this.owner = true;
                    }
                    else {
                        _this.owner = false;
                    }
                    _this.userService.getUserData().subscribe(function (data) {
                        _this.usersData = data;
                        _this.usersData.cookbooks.saved.map(function (e) {
                            if (e.cookbook._id === _this.cookbookId) {
                                _this.saved = true;
                            }
                        });
                        var savedRecipes = _this.usersData.recipes.saved.map(function (e) {
                            return e.recipe._id;
                        });
                        _this.cookbook.recipes.forEach(function (recipe) {
                            if (savedRecipes.indexOf(recipe.recipe._id) > -1) {
                                recipe.recipe.saved = true;
                            }
                        });
                    });
                }
            });
        });
    };
    CookbookComponent.prototype.editCookbook = function () {
        var _this = this;
        if (!this.owner) {
            return;
        }
        var editDialog = this.dialog.open(_cookbook_edit_cookbook_dialog_edit_cookbook_dialog_component__WEBPACK_IMPORTED_MODULE_6__["EditCookbookDialogComponent"], {
            data: {
                title: this.cookbook.title,
                description: this.cookbook.description,
                public: this.cookbook.public,
                image: this.cookbook.image
            }
        });
        editDialog.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result !== undefined) {
                if (result.length < 1) {
                    return console.log("No update required");
                }
                _this.cookbookService.updateCookbook(_this.cookbookId, { type: "info", data: result }).subscribe(function (data) {
                    if (!data.success) {
                        console.log("Could not update cookbook");
                    }
                    else {
                        _this.cookbook.title = data.cookbook.title;
                        _this.cookbook.description = data.cookbook.description;
                        _this.cookbook.public = data.cookbook.public;
                        _this.cookbook.image = data.cookbook.image;
                    }
                });
            }
        });
    };
    CookbookComponent.prototype.viewRecipe = function (cookbook) {
        this.router.navigate(["/recipe/" + cookbook.recipe._id]);
    };
    CookbookComponent.prototype.toggleCookbookSave = function () {
        var _this = this;
        if (!this.saveLock) {
            this.saveLock = true;
            var userData = { id: this.userId, data: this.usersData.cookbooks };
            this.userService.addUserData(userData, { data: "cookbooks", type: "save" }, this.cookbook._id).subscribe(function (data) {
                if (!data.success) {
                    console.log("Failed to toggle save");
                }
                else {
                    _this.saved = !_this.saved;
                }
                _this.saveLock = false;
            });
        }
    };
    CookbookComponent.prototype.toggleSave = function (recipe) {
        var _this = this;
        if (!this.saveLock) {
            this.saveLock = true;
            var userData = { id: this.userId, data: this.usersData.recipes };
            this.userService.addUserData(userData, { data: "recipes", type: "save" }, recipe._id).subscribe(function (data) {
                if (!data.success) {
                    console.log("Failed to toggle save");
                }
                else {
                    recipe.saved = !recipe.saved;
                }
                _this.saveLock = false;
            });
        }
    };
    CookbookComponent.prototype.openMenu = function (recipe) {
        this.recipeDialog.open(recipe.recipe).subscribe(function (data) { });
    };
    CookbookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-cookbook",
            template: __webpack_require__(/*! ./cookbook.component.html */ "./src/app/components/cookbook/cookbook.component.html"),
            styles: [__webpack_require__(/*! ./cookbook.component.css */ "./src/app/components/cookbook/cookbook.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _services_cookbook_service__WEBPACK_IMPORTED_MODULE_3__["CookbookService"],
            _services_recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _services_general_service__WEBPACK_IMPORTED_MODULE_9__["GeneralService"],
            _recipe_dialog_recipe_dialog_service__WEBPACK_IMPORTED_MODULE_7__["RecipeDialogService"]])
    ], CookbookComponent);
    return CookbookComponent;
}());



/***/ }),

/***/ "./src/app/components/cookbook/edit-cookbook-dialog/edit-cookbook-dialog.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/cookbook/edit-cookbook-dialog/edit-cookbook-dialog.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialogWindow {\r\n  height: 50vh;\r\n  max-height: 550px;\r\n  width: 350px;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n.scrollArea {\r\n  overflow-y: auto;\r\n  height: calc(100% - 100px);\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 1;\r\n  visibility: visible;\r\n  opacity: 1;\r\n  transition: all 0.3s ease-in-out;\r\n  box-sizing: border-box;\r\n  margin: auto;\r\n  text-align: center;\r\n}\r\n.scrollArea h1 {\r\n  text-align: center;\r\n  margin: auto;\r\n  margin-bottom: 10px;\r\n}\r\n.hideScrollArea {\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n/*** Top buttons ***/\r\n.topButtons {\r\n  /* background-color: red; */\r\n  margin: auto;\r\n  height: 40px;\r\n  width: 95%;\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 28px;\r\n}\r\n.topButtons i {\r\n  cursor: pointer;\r\n}\r\n/*** Cookbook image ***/\r\n.cookbookImage {\r\n  border-radius: 25px;\r\n  text-align: center;\r\n}\r\n.imageOverlay {\r\n  width: 200px;\r\n  height: 200px;\r\n  border-radius: 25px;\r\n  position: absolute;\r\n  z-index: 100 !important;\r\n  background-color: rgba(51, 51, 51, 0.664);\r\n  opacity: 1;\r\n  transition: all 0.2s ease-in-out;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: #fff;\r\n  font-size: 40px;\r\n  pointer-events: none;\r\n}\r\n.oHidden {\r\n  opacity: 0;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n.cookbookImageWrapper {\r\n  overflow: hidden;\r\n  position: relative;\r\n  display: inline-block;\r\n  border-radius: 25px;\r\n  margin: auto;\r\n}\r\n.image {\r\n  width: 200px;\r\n  height: 200px;\r\n  border-radius: 25px;\r\n  background-color: #f1eff4;\r\n}\r\n.image img {\r\n  height: 100%;\r\n  width: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  border-radius: 25px;\r\n}\r\n.cookbookImageWrapper input[type=\"file\"] {\r\n  font-size: 1000px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  opacity: 0;\r\n}\r\n/*** Public buttons ***/\r\n.public-switch {\r\n  height: 35px;\r\n  width: 50%;\r\n  margin: auto;\r\n  margin-top: 10px;\r\n  display: inline-table;\r\n  border-radius: 8px;\r\n  text-align: center;\r\n}\r\n.switch-button {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n  background-color: #f1f0f5;\r\n  color: rgba(0, 0, 0, 0.5);\r\n  border-top-left-radius: 8px;\r\n  border-bottom-left-radius: 8px;\r\n  width: 50%;\r\n  height: 100%;\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n  transition: all 0.25s ease-in-out;\r\n}\r\n.switch-right {\r\n  border-top-left-radius: 0px;\r\n  border-bottom-left-radius: 0px;\r\n  border-top-right-radius: 8px;\r\n  border-bottom-right-radius: 8px;\r\n}\r\n.switch-good {\r\n  background-color: #03a9f4;\r\n  color: #fff;\r\n  transition: all 0.25s ease-in-out;\r\n}\r\n.switch-bad {\r\n  background-color: #cc0033;\r\n  color: #fff;\r\n  transition: all 0.25s ease-in-out;\r\n}\r\n/*** Input fields ***/\r\n.inputFields {\r\n  width: 90%;\r\n  margin: auto;\r\n  margin-top: 15px;\r\n}\r\n.inputArea {\r\n  position: relative;\r\n  display: inline-flex;\r\n  padding-bottom: 5px;\r\n  width: 100%;\r\n}\r\n.inputField {\r\n  background-color: #f1f0f5;\r\n  border: 2px solid transparent;\r\n  border-radius: 8px;\r\n  flex-grow: 1;\r\n  resize: none;\r\n  font-size: 16px;\r\n  width: 100%;\r\n  font-weight: 200;\r\n  padding: 10px 10px;\r\n  transition: border 0.5s;\r\n  font-family: inherit;\r\n}\r\n/*** Buttons ***/\r\n.buttonArea {\r\n  /* margin: 10px 0; */\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  position: absolute;\r\n  bottom: 0;\r\n}\r\n.submitButton {\r\n  font-family: inherit;\r\n  outline: none;\r\n  height: 40px;\r\n  text-align: center;\r\n  padding: 0px 17px;\r\n  border-radius: 8px;\r\n  background: #03a9f4;\r\n  color: #fff;\r\n  /* letter-spacing: 1px; */\r\n  /* text-shadow: 0; */\r\n  font-size: 16px;\r\n  /* font-weight: bold; */\r\n  cursor: pointer;\r\n  transition: all 0.25s ease;\r\n}\r\n.submitButton:hover {\r\n  background-color: #43bbf3;\r\n}\r\n.cancel {\r\n  background-color: #cc0033;\r\n}\r\n.cancel:hover {\r\n  background-color: rgb(143, 12, 45);\r\n}\r\n/*** Colors and stuff ***/\r\n.saved {\r\n  color: #f1c921;\r\n}\r\n/*** General changes ***/\r\n::-webkit-scrollbar {\r\n  width: 0px;\r\n  background: transparent;\r\n}\r\n.scrollArea::-webkit-scrollbar,\r\n.cookbookList::-webkit-scrollbar {\r\n  width: 4px;\r\n}\r\n.scrollArea::-webkit-scrollbar-thumb,\r\n.cookbookList::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  background-color: #ffffff00;\r\n  margin: 2px 0;\r\n}\r\n.scrollArea:hover::-webkit-scrollbar-thumb,\r\n.cookbookList:hover::-webkit-scrollbar-thumb {\r\n  background-color: #dadada;\r\n}\r\n.hidden {\r\n  visibility: hidden;\r\n}\r\n.noselect {\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb29rYm9vay9lZGl0LWNvb2tib29rLWRpYWxvZy9lZGl0LWNvb2tib29rLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGlDQUFpQztFQUNqQyx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsaUNBQWlDO0NBQ2xDO0FBRUQscUJBQXFCO0FBQ3JCO0VBQ0UsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixhQUFhO0VBQ2IsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLG9CQUFvQjtFQUNwQixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUVELHdCQUF3QjtBQUN4QjtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsMENBQTBDO0VBQzFDLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixxQkFBcUI7Q0FDdEI7QUFDRDtFQUNFLFdBQVc7RUFDWCxpQ0FBaUM7Q0FDbEM7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0NBQ2Q7QUFDRDtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixxQkFBa0I7S0FBbEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsT0FBTztFQUNQLFdBQVc7Q0FDWjtBQUVELHdCQUF3QjtBQUN4QjtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtDQUFrQztDQUNuQztBQUNEO0VBQ0UsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0NBQ2pDO0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGtDQUFrQztDQUNuQztBQUNEO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixrQ0FBa0M7Q0FDbkM7QUFFRCxzQkFBc0I7QUFDdEI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsWUFBWTtDQUNiO0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIscUJBQXFCO0NBQ3RCO0FBRUQsaUJBQWlCO0FBQ2pCO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsVUFBVTtDQUNYO0FBQ0Q7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsMkJBQTJCO0NBQzVCO0FBQ0Q7RUFDRSwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsbUNBQW1DO0NBQ3BDO0FBRUQsMEJBQTBCO0FBQzFCO0VBQ0UsZUFBZTtDQUNoQjtBQUVELHlCQUF5QjtBQUN6QjtFQUNFLFdBQVc7RUFDWCx3QkFBd0I7Q0FDekI7QUFFRDs7RUFFRSxXQUFXO0NBQ1o7QUFDRDs7RUFFRSxvQkFBb0I7RUFDcEIsNEJBQTRCO0VBQzVCLGNBQWM7Q0FDZjtBQUNEOztFQUVFLDBCQUEwQjtDQUMzQjtBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBRTFCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsa0JBQWtCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb29rYm9vay9lZGl0LWNvb2tib29rLWRpYWxvZy9lZGl0LWNvb2tib29rLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZ1dpbmRvdyB7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG4gIG1heC1oZWlnaHQ6IDU1MHB4O1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uc2Nyb2xsQXJlYSB7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMTtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zY3JvbGxBcmVhIGgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmhpZGVTY3JvbGxBcmVhIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLyoqKiBUb3AgYnV0dG9ucyAqKiovXHJcbi50b3BCdXR0b25zIHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogOTUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG59XHJcbi50b3BCdXR0b25zIGkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyoqKiBDb29rYm9vayBpbWFnZSAqKiovXHJcbi5jb29rYm9va0ltYWdlIHtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW1hZ2VPdmVybGF5IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxMDAgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCA1MSwgNTEsIDAuNjY0KTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLm9IaWRkZW4ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmNvb2tib29rSW1hZ2VXcmFwcGVyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmltYWdlIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWVmZjQ7XHJcbn1cclxuLmltYWdlIGltZyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuLmNvb2tib29rSW1hZ2VXcmFwcGVyIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICBmb250LXNpemU6IDEwMDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLyoqKiBQdWJsaWMgYnV0dG9ucyAqKiovXHJcbi5wdWJsaWMtc3dpdGNoIHtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc3dpdGNoLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYwZjU7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLnN3aXRjaC1yaWdodCB7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XHJcbn1cclxuLnN3aXRjaC1nb29kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNhOWY0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcclxufVxyXG4uc3dpdGNoLWJhZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjMDAzMztcclxuICBjb2xvcjogI2ZmZjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi8qKiogSW5wdXQgZmllbGRzICoqKi9cclxuLmlucHV0RmllbGRzIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbi5pbnB1dEFyZWEge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5pbnB1dEZpZWxkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMGY1O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC41cztcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxufVxyXG5cclxuLyoqKiBCdXR0b25zICoqKi9cclxuLmJ1dHRvbkFyZWEge1xyXG4gIC8qIG1hcmdpbjogMTBweCAwOyAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG4uc3VibWl0QnV0dG9uIHtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGhlaWdodDogNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMHB4IDE3cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwM2E5ZjQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgLyogbGV0dGVyLXNwYWNpbmc6IDFweDsgKi9cclxuICAvKiB0ZXh0LXNoYWRvdzogMDsgKi9cclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xyXG59XHJcbi5zdWJtaXRCdXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0M2JiZjM7XHJcbn1cclxuLmNhbmNlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjMDAzMztcclxufVxyXG4uY2FuY2VsOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQzLCAxMiwgNDUpO1xyXG59XHJcblxyXG4vKioqIENvbG9ycyBhbmQgc3R1ZmYgKioqL1xyXG4uc2F2ZWQge1xyXG4gIGNvbG9yOiAjZjFjOTIxO1xyXG59XHJcblxyXG4vKioqIEdlbmVyYWwgY2hhbmdlcyAqKiovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAwcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5zY3JvbGxBcmVhOjotd2Via2l0LXNjcm9sbGJhcixcclxuLmNvb2tib29rTGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA0cHg7XHJcbn1cclxuLnNjcm9sbEFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iLFxyXG4uY29va2Jvb2tMaXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMDA7XHJcbiAgbWFyZ2luOiAycHggMDtcclxufVxyXG4uc2Nyb2xsQXJlYTpob3Zlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsXHJcbi5jb29rYm9va0xpc3Q6aG92ZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5ub3NlbGVjdCB7XHJcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/cookbook/edit-cookbook-dialog/edit-cookbook-dialog.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/cookbook/edit-cookbook-dialog/edit-cookbook-dialog.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"edit-dialog\">\n  <h2 style=\"padding-bottom: 10px\">Edit cookbook</h2>\n  <div class=\"edit-area\">\n    <div class=\"left\">\n      <div class=\"recipeImage\" (mouseenter)=\"imageHover = true\" (mouseleave)=\"imageHover = false\" [ngClass]=\"{ pointer: imageHover }\">\n        <div class=\"recipeImageWrapper\">\n          <div class=\"image\">\n            <img [ngClass]=\"{ hidden: !cookbookImage }\" src=\"{{ cookbookImage }}\" #rImg />\n          </div>\n          <input type=\"file\" accept=\"image/png, image/jpeg\" (change)=\"uploadImage($event, rImg)\" />\n        </div>\n      </div>\n      <div class=\"public-switch noselect\">\n        <div class=\"switch-button\" [ngClass]=\"{ 'switch-good': public }\" (click)=\"public = true\">Public</div>\n        <div class=\"switch-button switch-right\" [ngClass]=\"{ 'switch-bad': !public }\" (click)=\"public = false\">Private</div>\n      </div>\n    </div>\n    <div class=\"right\">\n      <div class=\"input-area\"><input type=\"text\" class=\"input-field\" [(ngModel)]=\"title\" name=\"title\" placeholder=\"Title\" maxlength=\"64\" value=\"{{ title }}\" /></div>\n      <div class=\"input-area\"><textarea class=\"input-field\" [(ngModel)]=\"description\" rows=\"8\" type=\"text\" maxlength=\"199\" name=\"description\" placeholder=\"Description\"></textarea></div>\n    </div>\n  </div>\n  <div class=\"button-area\"><input class=\"submit-button\" type=\"button\" (click)=\"update()\" value=\"Update\" /> <input class=\"submit-button cancel\" type=\"button\" (click)=\"close()\" value=\"Cancel\" /></div>\n</div> -->\n\n<div class=\"dialogWindow\">\n  <div class=\"topButtons\">\n    <div><i class=\"fas fa-arrow-left\" *ngIf=\"cookbookAreaOpen\" (click)=\"cookbookAreaOpen = cookbookNameOpen = false; scrollAreaOpen = true\"></i></div>\n    <div><i class=\"fas fa-times\" (click)=\"dialog.close()\"></i></div>\n  </div>\n  <div class=\"scrollArea\">\n    <h1>Edit cookbook</h1>\n    <div class=\"cookbookImage\">\n      <div class=\"cookbookImageWrapper\" (mouseenter)=\"imageHover = true\" (mouseleave)=\"imageHover = false\">\n        <div class=\"imageOverlay\" [ngClass]=\"{ oHidden: !imageHover }\">\n          <i class=\"fas fa-file-upload\"></i>\n        </div>\n        <div class=\"image\">\n          <img [ngClass]=\"{ hidden: !cookbookImage }\" src=\"{{ cookbookImage }}\" #rImg />\n        </div>\n        <input type=\"file\" accept=\"image/*\" (change)=\"uploadImage($event, rImg)\" />\n      </div>\n    </div>\n    <div class=\"public-switch noselect\">\n      <div class=\"switch-button\" [ngClass]=\"{ 'switch-good': public }\" (click)=\"public = true\">Public</div>\n      <div class=\"switch-button switch-right\" [ngClass]=\"{ 'switch-bad': !public }\" (click)=\"public = false\">Private</div>\n    </div>\n    <div class=\"inputFields\">\n      <div class=\"inputArea\"><input type=\"text\" class=\"inputField\" [(ngModel)]=\"title\" name=\"title\" placeholder=\"Title\" maxlength=\"64\" value=\"{{ title }}\" /></div>\n      <div class=\"inputArea\"><textarea class=\"inputField\" [(ngModel)]=\"description\" rows=\"8\" type=\"text\" maxlength=\"199\" name=\"description\" placeholder=\"Description\"></textarea></div>\n    </div>\n    <!-- <div class=\"recipeInfo\">\n      <div class=\"recipeImage\">\n        <div class=\"image\">\n          <img [ngClass]=\"{ hidden: !recipe?.image }\" src=\"{{ generalService.getImageLink(recipe?.image) }}\" #rImg />\n        </div>\n      </div>\n      <div class=\"recipeTitle\">{{ recipe.title }}</div>\n    </div>\n    <div class=\"recipeButtons noselect\">\n      <div class=\"recipeButton\" (click)=\"saveRecipe()\">\n        <i class=\"fas fa-heart\" [ngClass]=\"{ saved: this.recipe.saved }\"></i>\n        <p *ngIf=\"!this.recipe.saved\">Save</p>\n        <p *ngIf=\"this.recipe.saved\">Remove</p>\n      </div>\n      <div class=\"recipeButton\" (click)=\"cookbookAreaOpen = true; scrollAreaOpen = false\">\n        <i class=\"fas fa-plus\"></i>\n        <p>Add to Cookbook</p>\n      </div>\n      <div class=\"recipeButton\" (click)=\"viewAuthor()\">\n        <i class=\"fas fa-user\"></i>\n        <p>View Author</p>\n      </div>\n      <div class=\"recipeButton\" (click)=\"getLink()\">\n        <i class=\"fas fa-link\"></i>\n        <p>Link</p>\n      </div>\n      <div class=\"recipeButton\" (click)=\"report()\">\n        <i class=\"fas fa-flag\"></i>\n        <p>Report</p>\n      </div>\n    </div> -->\n  </div>\n  <div class=\"buttonArea\">\n    <input class=\"submitButton cancel\" type=\"button\" (click)=\"close()\" value=\"Cancel\" />\n    <input class=\"submitButton\" type=\"button\" (click)=\"update()\" value=\"Update\" />\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/cookbook/edit-cookbook-dialog/edit-cookbook-dialog.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/cookbook/edit-cookbook-dialog/edit-cookbook-dialog.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EditCookbookDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCookbookDialogComponent", function() { return EditCookbookDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_cookbook_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/cookbook.service */ "./src/app/services/cookbook.service.ts");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _services_recipe_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/recipe-validate.service */ "./src/app/services/recipe-validate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var EditCookbookDialogComponent = /** @class */ (function () {
    function EditCookbookDialogComponent(dialog, data, cookbookService, generalService, recipeService) {
        this.dialog = dialog;
        this.data = data;
        this.cookbookService = cookbookService;
        this.generalService = generalService;
        this.recipeService = recipeService;
        this.public = true;
    }
    EditCookbookDialogComponent.prototype.ngOnInit = function () {
        this.title = this.data.title;
        this.description = this.data.description;
        this.public = this.data.public;
        if (this.data.image) {
            this.cookbookImage = this.generalService.getImageLink(this.data.image);
        }
    };
    EditCookbookDialogComponent.prototype.close = function () {
        this.dialog.close();
    };
    EditCookbookDialogComponent.prototype.uploadImage = function (e, image) {
        if (e.target.files && e.target.files[0]) {
            this.cookbookImage = e.target.files[0];
            if (this.cookbookImage.type.split("/")[0] !== "image") {
                if (this.data.image) {
                    this.cookbookImage = this.generalService.getImageLink(this.data.image);
                }
                else {
                    this.cookbookImage = undefined;
                }
                return;
            }
            var reader = new FileReader();
            reader.onload = function (e) {
                image.src = e.target.result;
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    EditCookbookDialogComponent.prototype.update = function () {
        var data = [];
        if (this.cookbookImage) {
            this.updateImage(data);
        }
        else {
            this.addData(data);
        }
    };
    EditCookbookDialogComponent.prototype.addData = function (data) {
        if (this.title !== this.data.title && !this.recipeService.validateTitle(this.title).err) {
            data.push({ name: "title", value: this.title });
        }
        if (this.description !== this.data.description && !this.recipeService.validateTitle(this.description).err) {
            data.push({ name: "description", value: this.description });
        }
        if (this.public !== this.data.public) {
            data.push({ name: "public", value: this.public });
        }
        this.dialog.close(data);
    };
    EditCookbookDialogComponent.prototype.updateImage = function (dataA) {
        var _this = this;
        var fd = new FormData();
        fd.append("cookbookImage", this.cookbookImage, this.cookbookImage.name);
        this.cookbookService.addCookbookImage(fd).subscribe(function (data) {
            dataA.push({ name: "image", value: data.path });
            _this.addData(dataA);
        });
    };
    EditCookbookDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-edit-cookbook-dialog",
            template: __webpack_require__(/*! ./edit-cookbook-dialog.component.html */ "./src/app/components/cookbook/edit-cookbook-dialog/edit-cookbook-dialog.component.html"),
            styles: [__webpack_require__(/*! ./edit-cookbook-dialog.component.css */ "./src/app/components/cookbook/edit-cookbook-dialog/edit-cookbook-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_cookbook_service__WEBPACK_IMPORTED_MODULE_2__["CookbookService"],
            _services_general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"],
            _services_recipe_validate_service__WEBPACK_IMPORTED_MODULE_4__["RecipeValidateService"]])
    ], EditCookbookDialogComponent);
    return EditCookbookDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/create/create.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/create/create.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*** Create ***/\r\n.createPage {\r\n  min-height: calc(100vh - 60px);\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n.wrapper {\r\n  width: 1350px;\r\n  /* min-height: 100%; */\r\n  margin: auto;\r\n  margin-bottom: 60px;\r\n}\r\n.wrapper h1 {\r\n  font-size: 50px;\r\n  margin-top: 40px;\r\n  margin-bottom: 10px;\r\n}\r\n/*** Form area ***/\r\n.formArea {\r\n  width: 90%;\r\n  /* min-height: 300px; */\r\n  margin: 30px auto;\r\n  /* padding: 20px 0; */\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: flex-start;\r\n  overflow: hidden;\r\n  scroll-behavior: smooth;\r\n}\r\n.formPage {\r\n  min-width: 100%;\r\n  height: 100%;\r\n  padding: 20px;\r\n  margin: auto;\r\n}\r\n/*** Name area ***/\r\n.nameArea {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.nameImage {\r\n  height: 300px;\r\n  width: 300px;\r\n  background-color: rgba(224, 215, 189, 0.336);\r\n  border-radius: 50%;\r\n  border: rgb(128, 128, 128) 5px solid;\r\n  padding: 15px;\r\n}\r\n.nameImage img {\r\n  height: 95%;\r\n  width: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n.nameInput {\r\n  margin-top: 80px;\r\n  margin-bottom: 15px;\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 60%;\r\n}\r\n.nameInput input {\r\n  font-family: \"ProductSansRegular\", sans-serif;\r\n  border-bottom: #707070 2px solid;\r\n  padding: 5px;\r\n  font-size: 28px;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n.nameButton {\r\n  width: 100%;\r\n  height: 100px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.nameButton input {\r\n  font-family: \"ProductSansRegular\", sans-serif;\r\n  font-size: 22px;\r\n  background-color: #3e7ef2;\r\n  padding: 15px 40px;\r\n  border-radius: 60px;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n.nameButton input:hover {\r\n  background-color: #135ee7;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n.nameButton span {\r\n  margin-left: 10px;\r\n}\r\n/*** Description ***/\r\n.descriptionInput {\r\n  width: 60%;\r\n  margin: auto;\r\n  margin-top: 50px;\r\n}\r\n/*********** OLD **************/\r\n.stepper {\r\n  background-color: rgba(255, 255, 255, 0);\r\n}\r\n.mat-horizontal-content-container {\r\n  height: 80vh !important;\r\n}\r\n.stepLabel {\r\n  font-family: \"ProductSansRegular\", sans-serif;\r\n}\r\n.formInputArea {\r\n  width: 100%;\r\n  height: 500px;\r\n}\r\n/*** Inputs ***/\r\n.inputContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.inputContainer label {\r\n  color: #545454;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  letter-spacing: 0.5px;\r\n  display: inline-block;\r\n  width: 70%;\r\n  margin-bottom: 10px;\r\n  text-align: center;\r\n}\r\n.leftLabel {\r\n  width: 100% !important;\r\n  text-align: start !important;\r\n}\r\n.inputBar {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n.inputBar input,\r\n.inputBar textarea {\r\n  width: 100%;\r\n  padding: 12px;\r\n  background-color: #fff;\r\n  border: 2px solid #f0f0f0;\r\n  border-radius: 3px;\r\n  transition: border 0.3s;\r\n  resize: none;\r\n  box-sizing: border-box;\r\n  font-family: \"ProductSansRegular\", sans-serif;\r\n  font-size: 16px;\r\n}\r\n.inputBar input:focus,\r\n.inputBar textarea:focus {\r\n  border: 2px solid #03a9f4;\r\n  transition: border 0.3s;\r\n}\r\n.inputBar textarea {\r\n}\r\n.inputBar i {\r\n  color: #545454;\r\n  position: absolute;\r\n  right: 0;\r\n  padding-right: 20px;\r\n  cursor: pointer;\r\n  transition: all 0.2s ease-in-out 0s;\r\n  visibility: visible;\r\n  opacity: 0;\r\n  font-size: 20px;\r\n}\r\n.visible {\r\n  opacity: 1 !important;\r\n  transition: all 0.2s ease-in-out 0s;\r\n}\r\n/*** Details ***/\r\n.dArea {\r\n  width: 720px;\r\n  margin: auto;\r\n  margin-top: 40px;\r\n}\r\n.dArea .inputContainer {\r\n  margin-bottom: 20px;\r\n}\r\n/***************************************************************************************/\r\n/*** Input areas ***/\r\n.inputArea {\r\n  font-family: \"ProductSansRegular\", sans-serif;\r\n  min-height: 500px;\r\n}\r\n.inputArea h2 {\r\n  /* font-size: 32px; */\r\n  font-weight: bold;\r\n  padding-top: 20px;\r\n  text-align: center;\r\n}\r\n.inputArea label {\r\n  font-size: 15px;\r\n  /* text-decoration: underline; */\r\n  color: #696969;\r\n}\r\n.detailArea {\r\n  width: 50% !important;\r\n  margin: auto;\r\n}\r\n.inputField {\r\n  font-family: \"ProductSansRegular\", sans-serif;\r\n  background-color: #ecf0f1;\r\n  border: 2px solid transparent;\r\n  border-radius: 8px;\r\n  resize: none;\r\n  font-size: 16px;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  font-weight: 200;\r\n  /* margin: auto; */\r\n  margin-top: 5px;\r\n  padding: 10px;\r\n  transition: border 0.5s;\r\n}\r\n.inputField:focus {\r\n  border: 2px solid #03a9f4;\r\n}\r\n/*** Meal type area ***/\r\n.mealTypeArea {\r\n  padding: 40px 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n}\r\n.mType {\r\n  text-align: center;\r\n  font-size: 14px;\r\n}\r\n.mTypeError {\r\n  font-weight: bold;\r\n  color: #cc0033;\r\n}\r\n.typeIcon {\r\n  background-color: #eceff0;\r\n  text-align: center;\r\n  height: 175px;\r\n  width: 175px;\r\n  border-radius: 25px;\r\n  margin: 20px 20px;\r\n  cursor: pointer;\r\n  border: transparent 2px solid;\r\n  transition: border ease-in-out 0.15s;\r\n}\r\n.selectedMeal {\r\n  border: 2px solid #03a9f4 !important;\r\n  transition: border ease-in-out 0.15s;\r\n}\r\n/*** Cuisine type area ***/\r\n.cType {\r\n  text-align: center;\r\n  font-size: 14px;\r\n}\r\n.cTypeError {\r\n  font-weight: bold;\r\n  color: #cc0033;\r\n}\r\n.cuisineIcon {\r\n  background-color: #eceff0;\r\n  text-align: center;\r\n  height: 90px;\r\n  width: 175px;\r\n  border-radius: 8px;\r\n  margin: 15px 10px;\r\n  cursor: pointer;\r\n  border: transparent 2px solid;\r\n  position: relative;\r\n  transition: border ease-in-out 0.15s;\r\n}\r\n.cuisineIcon img {\r\n  height: 100%;\r\n  width: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  border-radius: 4px;\r\n}\r\n.catOverlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  border-radius: 4px;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: rgba(27, 27, 27, 0.308);\r\n  color: #fff;\r\n  font-weight: bold;\r\n  font-size: 22px;\r\n  letter-spacing: 0.5px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  overflow: hidden;\r\n  pointer-events: none;\r\n  opacity: 0;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n.cuisineIcon:hover .catOverlay {\r\n  opacity: 1;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n/*** Information area ***/\r\n.informationArea {\r\n  /* background-color: red; */\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: baseline;\r\n}\r\n.informationArea .formSection {\r\n  margin-right: 75px;\r\n}\r\n.recipeSkill {\r\n  margin-top: 100px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n}\r\n.skillSwitch {\r\n  /* height: 46px; */\r\n  width: 300px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-radius: 8px;\r\n  border: 2px solid transparent;\r\n  box-sizing: border-box;\r\n}\r\n.switch-button {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n  text-align: center;\r\n  background-color: #ecf0f1;\r\n  color: rgba(0, 0, 0, 0.5);\r\n  font-size: 24px;\r\n  padding: 20px 50px;\r\n  height: 100%;\r\n  cursor: pointer;\r\n  transition: all 0.25s ease-in-out;\r\n}\r\n.switch-good {\r\n  background-color: #03a9f4;\r\n  color: #fff;\r\n  transition: all 0.25s ease-in-out;\r\n}\r\n.switch-med {\r\n  background-color: #4caf50;\r\n  color: #fff;\r\n  transition: all 0.25s ease-in-out;\r\n}\r\n.switch-bad {\r\n  background-color: #cc0033;\r\n  color: #fff;\r\n  transition: all 0.25s ease-in-out;\r\n}\r\n.recipeTime {\r\n  display: flex;\r\n  align-items: baseline;\r\n  justify-content: flex-start;\r\n}\r\n.timeArea {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top: 100px;\r\n}\r\n.timeArea span {\r\n  font-size: 40px;\r\n}\r\n.cookTime {\r\n  width: 90px;\r\n  margin-right: 20px;\r\n  /* background-color: #03a9f4; */\r\n}\r\n.cookTimeLabel {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 15px;\r\n  margin-top: 10px;\r\n  margin-bottom: 5px !important;\r\n}\r\n.timeInput {\r\n  width: 200px;\r\n  padding: 10px;\r\n  font-size: 50px;\r\n  margin-top: 5px;\r\n  text-align: center;\r\n  background-color: #ecf0f1;\r\n  box-sizing: border-box;\r\n  border: 2px solid transparent;\r\n  border-radius: 8px;\r\n  font-family: inherit;\r\n}\r\n.recipeServingArea {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  margin-top: 100px;\r\n}\r\n.recipeServings {\r\n  width: 150px;\r\n  height: 150px;\r\n  font-size: 50px;\r\n  padding: 20px;\r\n  text-align: center;\r\n}\r\n.checkButton {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.publicCheck {\r\n  margin-left: 5px;\r\n  height: 18px;\r\n  width: 18px;\r\n  border: rgb(134, 134, 134) 2px solid;\r\n  border-radius: 4px;\r\n  background-color: rgb(211, 211, 211);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n.check {\r\n  font-size: 80%;\r\n  opacity: 0;\r\n  transition: all 0.1s ease-out;\r\n}\r\n.checkAppear {\r\n  opacity: 1;\r\n  transition: all 0.1s ease-in;\r\n}\r\n/*** Ingredients ***/\r\n.addIngredients {\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  /* justify-content: space-around; */\r\n  align-items: flex-start;\r\n  margin-top: 20px;\r\n  margin-bottom: 10px;\r\n}\r\n.addIngredientButton {\r\n  display: flex;\r\n  height: 100%;\r\n}\r\n.ingredientContainer {\r\n  flex-grow: 1;\r\n  margin-top: 50px;\r\n  position: relative;\r\n}\r\n.ingredientContainer label {\r\n  color: #545454;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  text-decoration: none;\r\n  letter-spacing: 0.5px;\r\n}\r\n.ingredientInputContainer {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.loadingRing {\r\n  position: absolute;\r\n  right: 0;\r\n  margin-top: 5px;\r\n  margin-right: 20px;\r\n}\r\n.ingredientField {\r\n  position: absolute;\r\n  font-family: \"ProductSansRegular\", sans-serif;\r\n  background-color: #ecf0f1;\r\n  border: 2px solid #949494;\r\n  /* border-radius: 8px; */\r\n  resize: none;\r\n  font-size: 16px;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  font-weight: 200;\r\n  padding: 12px;\r\n  transition: border 0.5s;\r\n}\r\n.ingredientField:focus {\r\n  border: 2px solid #03a9f4;\r\n}\r\n.noflex {\r\n  display: inline !important;\r\n}\r\n.ingredientDropdown {\r\n  /* height: 200px; */\r\n  max-height: 300px;\r\n  background-color: #ecf0f1;\r\n  position: absolute;\r\n  border-bottom-left-radius: 8px;\r\n  border-bottom-right-radius: 8px;\r\n  width: 100%;\r\n  z-index: 200 !important;\r\n  overflow-y: auto;\r\n}\r\n.ingredientElement {\r\n  padding: 10px;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n  color: rgb(75, 74, 74);\r\n  text-transform: lowercase;\r\n}\r\n.ingredientElement:hover {\r\n  background-color: #bdbdbd;\r\n}\r\n.smallField {\r\n  width: 150px;\r\n}\r\n.button {\r\n  width: 50px;\r\n  height: 40px;\r\n  border-radius: 8px;\r\n  margin-left: 5px;\r\n  background-color: #03a9f4;\r\n  color: #fff;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  /* font-size: 1.5em; */\r\n  /* overflow: hidden; */\r\n  cursor: pointer;\r\n}\r\n.emptyTable {\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 14px;\r\n  padding-top: 20px;\r\n}\r\n.etError {\r\n  font-weight: bold;\r\n  color: #cc0033;\r\n}\r\n/*** Ingredient table ***/\r\n.addedIngredients {\r\n  margin-top: 15px;\r\n}\r\n.ingredientTable {\r\n  width: 70%;\r\n  font-family: inherit;\r\n  margin: auto;\r\n  background-color: rgba(255, 255, 255, 0);\r\n}\r\nth,\r\ntd {\r\n  vertical-align: middle;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\nth {\r\n  font-size: 13px;\r\n}\r\ntd {\r\n  font-size: 15px;\r\n}\r\n.elementRow:hover {\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n  transition: all 0.2s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n.ingredientCol {\r\n  width: 40%;\r\n  text-transform: lowercase;\r\n  text-transform: capitalize;\r\n}\r\n.detailCol {\r\n  text-align: center;\r\n}\r\n.elementRow:hover .hiddenRow {\r\n  opacity: 1;\r\n}\r\n.hiddenRow {\r\n  opacity: 0;\r\n}\r\n/*** Method area ***/\r\n.methodArea {\r\n  margin-top: 50px;\r\n}\r\n.viewStep {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  flex-wrap: nowrap;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  padding: 10px 0;\r\n}\r\n.stepInfo {\r\n  padding: 10px 0;\r\n  margin-right: 20px;\r\n  text-align: left;\r\n}\r\n.addIngredients {\r\n  margin: auto;\r\n  max-width: 800px;\r\n}\r\n.methodTable {\r\n  width: 60%;\r\n  font-family: inherit;\r\n  margin: auto;\r\n  background-color: rgba(255, 255, 255, 0);\r\n}\r\n.methodTable td {\r\n  padding: 10px;\r\n}\r\n.endColumn {\r\n  text-align: right;\r\n}\r\n.endColumn i {\r\n  padding-right: 10px;\r\n  color: rgba(255, 255, 255, 0);\r\n}\r\n.elementRow:hover .endColumn i {\r\n  color: #000;\r\n}\r\n.narrow {\r\n  width: 50px;\r\n}\r\n.methodButtons {\r\n  display: inline-flex;\r\n}\r\n/*** Review area ***/\r\n/*** Top recipe information ***/\r\n.recipeHeader {\r\n  margin: auto;\r\n  margin-bottom: 20px;\r\n  width: 70%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n.recipeInfo {\r\n  /* background-color: red; */\r\n  text-align: center;\r\n  width: 70%;\r\n  margin-bottom: 20px;\r\n}\r\n.recipeInfo h1 {\r\n  font-size: 50px;\r\n  margin-top: 0;\r\n}\r\n.recipeInfo p {\r\n  width: 80%;\r\n  margin: auto;\r\n}\r\n.recipeDetails {\r\n  margin: 20px auto;\r\n}\r\n.recipeDetails2 {\r\n  font-size: 28px;\r\n}\r\n.recipeInformation {\r\n  margin: 0 auto;\r\n  width: 90%;\r\n  display: flex;\r\n}\r\n.reviewPanel {\r\n  width: 50%;\r\n  min-width: 360px;\r\n  text-align: center;\r\n}\r\n.buttonWrapper {\r\n  width: 100%;\r\n  display: flex;\r\n  margin-top: 50px;\r\n  justify-content: center;\r\n}\r\n.saveRecipeButton {\r\n  padding: 20px 40px;\r\n  background-color: #03a9f4;\r\n  display: inline-block;\r\n  border-radius: 8px;\r\n  color: #fff;\r\n  font-size: 24px;\r\n  letter-spacing: 0.5px;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n.saveRecipeButton:hover {\r\n  background-color: #1c93ca;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n/*** Recipe image ***/\r\n.mainImg {\r\n  height: 350px;\r\n  min-width: 350px !important;\r\n  background-color: #f1f0f5;\r\n  border-radius: 25px;\r\n  position: relative;\r\n  border: transparent 2px solid;\r\n}\r\n.image {\r\n  height: 350px;\r\n  width: 350px !important;\r\n}\r\n.image img {\r\n  height: 100%;\r\n  width: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  border-radius: 25px;\r\n}\r\n.hidden {\r\n  visibility: hidden;\r\n}\r\n/*** Image upload ***/\r\n.imageOverlay {\r\n  width: 350px;\r\n  height: 350px;\r\n  border-radius: 25px;\r\n  position: absolute;\r\n  z-index: 10 !important;\r\n  background-color: rgba(51, 51, 51, 0.664);\r\n  opacity: 1;\r\n  transition: all 0.2s ease-in-out;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: #fff;\r\n  font-size: 40px;\r\n  pointer-events: none;\r\n}\r\n.oHidden {\r\n  opacity: 0;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n.rImageWrapper {\r\n  overflow: hidden;\r\n  position: relative;\r\n  display: inline-block;\r\n  border-radius: 25px;\r\n  margin: auto;\r\n}\r\n.rImageWrapper input[type=\"file\"] {\r\n  font-size: 1000px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  opacity: 0;\r\n}\r\n/*** Lower form area ***/\r\n.lowerFormArea {\r\n  margin-top: 20px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.stepButton {\r\n  background-color: #eceeef;\r\n  color: #777977;\r\n  padding: 10px 20px;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n}\r\n.continue {\r\n  background-color: #03a9f4;\r\n  color: #fff;\r\n}\r\n/*** General elements ***/\r\n.breakLine {\r\n  width: 100%;\r\n  height: 2px;\r\n  background-color: #eaeaea;\r\n  border-radius: 25px;\r\n}\r\n.error {\r\n  color: #cc0033 !important;\r\n  background-color: #fce4e4 !important;\r\n  border: 2px solid #cc0033 !important;\r\n}\r\n.errorMessage {\r\n  visibility: hidden;\r\n  margin-top: 15px;\r\n  color: #cc0033;\r\n  font-size: 14px;\r\n  padding-left: 5px;\r\n  text-align: center;\r\n}\r\n.showErrorMessage {\r\n  visibility: visible;\r\n}\r\n.hidden {\r\n  visibility: hidden;\r\n}\r\n.pointer {\r\n  cursor: pointer !important;\r\n}\r\n.formSection {\r\n  margin-bottom: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n}\r\n.noselect {\r\n  -webkit-touch-callout: none; /* iOS Safari */\r\n  -webkit-user-select: none; /* Safari */ /* Konqueror HTML */\r\n  -moz-user-select: none; /* Firefox */\r\n  -ms-user-select: none; /* Internet Explorer/Edge */\r\n  user-select: none; /* Non-prefixed version, currently\r\n                                  supported by Chrome and Opera */\r\n}\r\n/*** Css spinner credit:https://loading.io/css/ ***/\r\n.lds-ring {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 32px;\r\n  height: 32px;\r\n}\r\n.lds-ring div {\r\n  box-sizing: border-box;\r\n  display: block;\r\n  position: absolute;\r\n  width: 25px;\r\n  height: 25px;\r\n  margin: 3px;\r\n  border: 3px solid rgb(56, 56, 56);\r\n  border-radius: 50%;\r\n  -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n  border-color: rgb(56, 56, 56) transparent transparent transparent;\r\n}\r\n.lds-ring div:nth-child(1) {\r\n  -webkit-animation-delay: -0.45s;\r\n          animation-delay: -0.45s;\r\n}\r\n.lds-ring div:nth-child(2) {\r\n  -webkit-animation-delay: -0.3s;\r\n          animation-delay: -0.3s;\r\n}\r\n.lds-ring div:nth-child(3) {\r\n  -webkit-animation-delay: -0.15s;\r\n          animation-delay: -0.15s;\r\n}\r\n@-webkit-keyframes lds-ring {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes lds-ring {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ2hCO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvQkFBb0I7Q0FDckI7QUFFRCxtQkFBbUI7QUFDbkI7RUFDRSxXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtDQUN6QjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixjQUFjO0VBQ2QsYUFBYTtDQUNkO0FBRUQsbUJBQW1CO0FBQ25CO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsY0FBYztDQUNmO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLHFCQUFrQjtLQUFsQixrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixXQUFXO0NBQ1o7QUFDRDtFQUNFLDhDQUE4QztFQUM5QyxpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSw4Q0FBOEM7RUFDOUMsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUNBQWlDO0NBQ2xDO0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsaUNBQWlDO0NBQ2xDO0FBQ0Q7RUFDRSxrQkFBa0I7Q0FDbkI7QUFFRCxxQkFBcUI7QUFDckI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtDQUNsQjtBQUVELGdDQUFnQztBQUVoQztFQUNFLHlDQUF5QztDQUMxQztBQUNEO0VBQ0Usd0JBQXdCO0NBQ3pCO0FBRUQ7RUFDRSw4Q0FBOEM7Q0FDL0M7QUFDRDtFQUNFLFlBQVk7RUFDWixjQUFjO0NBQ2Y7QUFFRCxnQkFBZ0I7QUFDaEI7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtDQUM5QjtBQUNEO0VBQ0UsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFlBQVk7Q0FDYjtBQUNEOztFQUVFLFlBQVk7RUFDWixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsOENBQThDO0VBQzlDLGdCQUFnQjtDQUNqQjtBQUNEOztFQUVFLDBCQUEwQjtFQUMxQix3QkFBd0I7Q0FDekI7QUFDRDtDQUNDO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0Usc0JBQXNCO0VBQ3RCLG9DQUFvQztDQUNyQztBQUVELGlCQUFpQjtBQUNqQjtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7QUFFRCx5RkFBeUY7QUFFekYscUJBQXFCO0FBQ3JCO0VBQ0UsOENBQThDO0VBQzlDLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsaUNBQWlDO0VBQ2pDLGVBQWU7Q0FDaEI7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0NBQ2Q7QUFFRDtFQUNFLDhDQUE4QztFQUM5QywwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHdCQUF3QjtDQUN6QjtBQUNEO0VBQ0UsMEJBQTBCO0NBQzNCO0FBRUQsd0JBQXdCO0FBQ3hCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixxQ0FBcUM7Q0FDdEM7QUFDRDtFQUNFLHFDQUFxQztFQUNyQyxxQ0FBcUM7Q0FDdEM7QUFFRCwyQkFBMkI7QUFDM0I7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIscUNBQXFDO0NBQ3RDO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHFCQUFrQjtLQUFsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsT0FBTztFQUNQLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWiwwQ0FBMEM7RUFDMUMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGlDQUFpQztDQUNsQztBQUNEO0VBQ0UsV0FBVztFQUNYLGlDQUFpQztDQUNsQztBQUVELDBCQUEwQjtBQUMxQjtFQUNFLDRCQUE0QjtFQUM1QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtDQUN2QjtBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQix3QkFBd0I7Q0FDekI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHVCQUF1QjtDQUN4QjtBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0NBQWtDO0NBQ25DO0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGtDQUFrQztDQUNuQztBQUNEO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixrQ0FBa0M7Q0FDbkM7QUFDRDtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osa0NBQWtDO0NBQ25DO0FBRUQ7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLDRCQUE0QjtDQUM3QjtBQUNEO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0NBQWdDO0NBQ2pDO0FBQ0Q7RUFDRSxjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDhCQUE4QjtDQUMvQjtBQUNEO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIscUJBQXFCO0NBQ3RCO0FBRUQ7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7Q0FDcEI7QUFFRDtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7Q0FDekI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCw4QkFBOEI7Q0FDL0I7QUFDRDtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7Q0FDOUI7QUFFRCxxQkFBcUI7QUFDckI7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsY0FBYztFQUNkLGFBQWE7Q0FDZDtBQUVEO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FDcEI7QUFFRDtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixzQkFBc0I7Q0FDdkI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQiw4Q0FBOEM7RUFDOUMsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsd0JBQXdCO0NBQ3pCO0FBQ0Q7RUFDRSwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLDJCQUEyQjtDQUM1QjtBQUVEO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QiwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLDBCQUEwQjtDQUMzQjtBQUVEO0VBQ0UsYUFBYTtDQUNkO0FBRUQ7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtDQUNqQjtBQUVEO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtDQUNoQjtBQUVELDBCQUEwQjtBQUMxQjtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IseUNBQXlDO0NBQzFDO0FBQ0Q7O0VBRUUsdUJBQXVCO0VBQ3ZCLGlDQUFpQztDQUNsQztBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLHFDQUFxQztFQUNyQyxpQ0FBaUM7RUFDakMsZ0JBQWdCO0NBQ2pCO0FBRUQ7RUFDRSxXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLDJCQUEyQjtDQUM1QjtBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSxXQUFXO0NBQ1o7QUFDRDtFQUNFLFdBQVc7Q0FDWjtBQUVELHFCQUFxQjtBQUNyQjtFQUNFLGlCQUFpQjtDQUNsQjtBQUVEO0VBQ0UscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtDQUNsQjtBQUVEO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IseUNBQXlDO0NBQzFDO0FBQ0Q7RUFDRSxjQUFjO0NBQ2Y7QUFDRDtFQUNFLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLDhCQUE4QjtDQUMvQjtBQUNEO0VBQ0UsWUFBWTtDQUNiO0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7QUFFRDtFQUNFLHFCQUFxQjtDQUN0QjtBQUVELHFCQUFxQjtBQUNyQixnQ0FBZ0M7QUFDaEM7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7Q0FDZjtBQUNEO0VBQ0UsV0FBVztFQUNYLGFBQWE7Q0FDZDtBQUNEO0VBQ0Usa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxnQkFBZ0I7Q0FDakI7QUFFRDtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYztDQUNmO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsd0JBQXdCO0NBQ3pCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQ0FBaUM7Q0FDbEM7QUFDRDtFQUNFLDBCQUEwQjtFQUMxQixpQ0FBaUM7Q0FDbEM7QUFFRCxzQkFBc0I7QUFDdEI7RUFDRSxjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLDhCQUE4QjtDQUMvQjtBQUNEO0VBQ0UsY0FBYztFQUNkLHdCQUF3QjtDQUN6QjtBQUNEO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixxQkFBa0I7S0FBbEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBRUQsc0JBQXNCO0FBQ3RCO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QiwwQ0FBMEM7RUFDMUMsV0FBVztFQUNYLGlDQUFpQztFQUNqQyxjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHFCQUFxQjtDQUN0QjtBQUNEO0VBQ0UsV0FBVztFQUNYLGlDQUFpQztDQUNsQztBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGFBQWE7Q0FDZDtBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsT0FBTztFQUNQLFdBQVc7Q0FDWjtBQUVELHlCQUF5QjtBQUN6QjtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsK0JBQStCO0NBQ2hDO0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsWUFBWTtDQUNiO0FBRUQsMEJBQTBCO0FBQzFCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsb0JBQW9CO0NBQ3JCO0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIscUNBQXFDO0VBQ3JDLHFDQUFxQztDQUN0QztBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSwyQkFBMkI7Q0FDNUI7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtDQUM3QjtBQUVEO0VBQ0UsNEJBQTRCLENBQUMsZ0JBQWdCO0VBQzdDLDBCQUEwQixDQUFDLFlBQVksQ0FDYixvQkFBb0I7RUFDOUMsdUJBQXVCLENBQUMsYUFBYTtFQUNyQyxzQkFBc0IsQ0FBQyw0QkFBNEI7RUFDbkQsa0JBQWtCLENBQUM7a0VBQzZDO0NBQ2pFO0FBRUQsb0RBQW9EO0FBQ3BEO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtDQUNkO0FBQ0Q7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLHVFQUErRDtVQUEvRCwrREFBK0Q7RUFDL0Qsa0VBQWtFO0NBQ25FO0FBQ0Q7RUFDRSxnQ0FBd0I7VUFBeEIsd0JBQXdCO0NBQ3pCO0FBQ0Q7RUFDRSwrQkFBdUI7VUFBdkIsdUJBQXVCO0NBQ3hCO0FBQ0Q7RUFDRSxnQ0FBd0I7VUFBeEIsd0JBQXdCO0NBQ3pCO0FBQ0Q7RUFDRTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7R0FDekI7RUFDRDtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEI7R0FDM0I7Q0FDRjtBQVBEO0VBQ0U7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0dBQ3pCO0VBQ0Q7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0dBQzNCO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogQ3JlYXRlICoqKi9cclxuLmNyZWF0ZVBhZ2Uge1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi53cmFwcGVyIHtcclxuICB3aWR0aDogMTM1MHB4O1xyXG4gIC8qIG1pbi1oZWlnaHQ6IDEwMCU7ICovXHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbn1cclxuLndyYXBwZXIgaDEge1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi8qKiogRm9ybSBhcmVhICoqKi9cclxuLmZvcm1BcmVhIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIC8qIG1pbi1oZWlnaHQ6IDMwMHB4OyAqL1xyXG4gIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gIC8qIHBhZGRpbmc6IDIwcHggMDsgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxufVxyXG4uZm9ybVBhZ2Uge1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi8qKiogTmFtZSBhcmVhICoqKi9cclxuLm5hbWVBcmVhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubmFtZUltYWdlIHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNCwgMjE1LCAxODksIDAuMzM2KTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiByZ2IoMTI4LCAxMjgsIDEyOCkgNXB4IHNvbGlkO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLm5hbWVJbWFnZSBpbWcge1xyXG4gIGhlaWdodDogOTUlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5uYW1lSW5wdXQge1xyXG4gIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiA2MCU7XHJcbn1cclxuLm5hbWVJbnB1dCBpbnB1dCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUHJvZHVjdFNhbnNSZWd1bGFyXCIsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyLWJvdHRvbTogIzcwNzA3MCAycHggc29saWQ7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm5hbWVCdXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5uYW1lQnV0dG9uIGlucHV0IHtcclxuICBmb250LWZhbWlseTogXCJQcm9kdWN0U2Fuc1JlZ3VsYXJcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlN2VmMjtcclxuICBwYWRkaW5nOiAxNXB4IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLm5hbWVCdXR0b24gaW5wdXQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzVlZTc7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLm5hbWVCdXR0b24gc3BhbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi8qKiogRGVzY3JpcHRpb24gKioqL1xyXG4uZGVzY3JpcHRpb25JbnB1dCB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLyoqKioqKioqKioqIE9MRCAqKioqKioqKioqKioqKi9cclxuXHJcbi5zdGVwcGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG59XHJcbi5tYXQtaG9yaXpvbnRhbC1jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiA4MHZoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdGVwTGFiZWwge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlByb2R1Y3RTYW5zUmVndWxhclwiLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5mb3JtSW5wdXRBcmVhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4vKioqIElucHV0cyAqKiovXHJcbi5pbnB1dENvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmlucHV0Q29udGFpbmVyIGxhYmVsIHtcclxuICBjb2xvcjogIzU0NTQ1NDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNzAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sZWZ0TGFiZWwge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcclxufVxyXG4uaW5wdXRCYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmlucHV0QmFyIGlucHV0LFxyXG4uaW5wdXRCYXIgdGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZjBmMGYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4zcztcclxuICByZXNpemU6IG5vbmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogXCJQcm9kdWN0U2Fuc1JlZ3VsYXJcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmlucHV0QmFyIGlucHV0OmZvY3VzLFxyXG4uaW5wdXRCYXIgdGV4dGFyZWE6Zm9jdXMge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwM2E5ZjQ7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuM3M7XHJcbn1cclxuLmlucHV0QmFyIHRleHRhcmVhIHtcclxufVxyXG4uaW5wdXRCYXIgaSB7XHJcbiAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgb3BhY2l0eTogMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLnZpc2libGUge1xyXG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcztcclxufVxyXG5cclxuLyoqKiBEZXRhaWxzICoqKi9cclxuLmRBcmVhIHtcclxuICB3aWR0aDogNzIwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuLmRBcmVhIC5pbnB1dENvbnRhaW5lciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qKiogSW5wdXQgYXJlYXMgKioqL1xyXG4uaW5wdXRBcmVhIHtcclxuICBmb250LWZhbWlseTogXCJQcm9kdWN0U2Fuc1JlZ3VsYXJcIiwgc2Fucy1zZXJpZjtcclxuICBtaW4taGVpZ2h0OiA1MDBweDtcclxufVxyXG4uaW5wdXRBcmVhIGgyIHtcclxuICAvKiBmb250LXNpemU6IDMycHg7ICovXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5pbnB1dEFyZWEgbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICAvKiB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgKi9cclxuICBjb2xvcjogIzY5Njk2OTtcclxufVxyXG5cclxuLmRldGFpbEFyZWEge1xyXG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5pbnB1dEZpZWxkIHtcclxuICBmb250LWZhbWlseTogXCJQcm9kdWN0U2Fuc1JlZ3VsYXJcIiwgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYxO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAvKiBtYXJnaW46IGF1dG87ICovXHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuNXM7XHJcbn1cclxuLmlucHV0RmllbGQ6Zm9jdXMge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwM2E5ZjQ7XHJcbn1cclxuXHJcbi8qKiogTWVhbCB0eXBlIGFyZWEgKioqL1xyXG4ubWVhbFR5cGVBcmVhIHtcclxuICBwYWRkaW5nOiA0MHB4IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLm1UeXBlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5tVHlwZUVycm9yIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI2NjMDAzMztcclxufVxyXG4udHlwZUljb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VmZjA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogMTc1cHg7XHJcbiAgd2lkdGg6IDE3NXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgbWFyZ2luOiAyMHB4IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQgMnB4IHNvbGlkO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlciBlYXNlLWluLW91dCAwLjE1cztcclxufVxyXG4uc2VsZWN0ZWRNZWFsIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDNhOWY0ICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyIGVhc2UtaW4tb3V0IDAuMTVzO1xyXG59XHJcblxyXG4vKioqIEN1aXNpbmUgdHlwZSBhcmVhICoqKi9cclxuLmNUeXBlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5jVHlwZUVycm9yIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI2NjMDAzMztcclxufVxyXG4uY3Vpc2luZUljb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VmZjA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogOTBweDtcclxuICB3aWR0aDogMTc1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbjogMTVweCAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IHRyYW5zcGFyZW50IDJweCBzb2xpZDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyIGVhc2UtaW4tb3V0IDAuMTVzO1xyXG59XHJcbi5jdWlzaW5lSWNvbiBpbWcge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmNhdE92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjcsIDI3LCAyNywgMC4zMDgpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG4uY3Vpc2luZUljb246aG92ZXIgLmNhdE92ZXJsYXkge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi8qKiogSW5mb3JtYXRpb24gYXJlYSAqKiovXHJcbi5pbmZvcm1hdGlvbkFyZWEge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbn1cclxuLmluZm9ybWF0aW9uQXJlYSAuZm9ybVNlY3Rpb24ge1xyXG4gIG1hcmdpbi1yaWdodDogNzVweDtcclxufVxyXG5cclxuLnJlY2lwZVNraWxsIHtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnNraWxsU3dpdGNoIHtcclxuICAvKiBoZWlnaHQ6IDQ2cHg7ICovXHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uc3dpdGNoLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYxO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHBhZGRpbmc6IDIwcHggNTBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcclxufVxyXG4uc3dpdGNoLWdvb2Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwM2E5ZjQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5zd2l0Y2gtbWVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcclxufVxyXG4uc3dpdGNoLWJhZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjMDAzMztcclxuICBjb2xvcjogI2ZmZjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5yZWNpcGVUaW1lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuLnRpbWVBcmVhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG4udGltZUFyZWEgc3BhbiB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbi5jb29rVGltZSB7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICMwM2E5ZjQ7ICovXHJcbn1cclxuLmNvb2tUaW1lTGFiZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxufVxyXG4udGltZUlucHV0IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYxO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG59XHJcblxyXG4ucmVjaXBlU2VydmluZ0FyZWEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG4ucmVjaXBlU2VydmluZ3Mge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNoZWNrQnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5wdWJsaWNDaGVjayB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgYm9yZGVyOiByZ2IoMTM0LCAxMzQsIDEzNCkgMnB4IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjExLCAyMTEsIDIxMSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY2hlY2sge1xyXG4gIGZvbnQtc2l6ZTogODAlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1vdXQ7XHJcbn1cclxuLmNoZWNrQXBwZWFyIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW47XHJcbn1cclxuXHJcbi8qKiogSW5ncmVkaWVudHMgKioqL1xyXG4uYWRkSW5ncmVkaWVudHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7ICovXHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5hZGRJbmdyZWRpZW50QnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmluZ3JlZGllbnRDb250YWluZXIge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmluZ3JlZGllbnRDb250YWluZXIgbGFiZWwge1xyXG4gIGNvbG9yOiAjNTQ1NDU0O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG59XHJcbi5pbmdyZWRpZW50SW5wdXRDb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmxvYWRpbmdSaW5nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4uaW5ncmVkaWVudEZpZWxkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUHJvZHVjdFNhbnNSZWd1bGFyXCIsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjOTQ5NDk0O1xyXG4gIC8qIGJvcmRlci1yYWRpdXM6IDhweDsgKi9cclxuICByZXNpemU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjVzO1xyXG59XHJcbi5pbmdyZWRpZW50RmllbGQ6Zm9jdXMge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwM2E5ZjQ7XHJcbn1cclxuLm5vZmxleCB7XHJcbiAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbmdyZWRpZW50RHJvcGRvd24ge1xyXG4gIC8qIGhlaWdodDogMjAwcHg7ICovXHJcbiAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMjAwICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4uaW5ncmVkaWVudEVsZW1lbnQge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogcmdiKDc1LCA3NCwgNzQpO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XHJcbn1cclxuLmluZ3JlZGllbnRFbGVtZW50OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiZGJkO1xyXG59XHJcblxyXG4uc21hbGxGaWVsZCB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzYTlmNDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLyogZm9udC1zaXplOiAxLjVlbTsgKi9cclxuICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmVtcHR5VGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuLmV0RXJyb3Ige1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjY2MwMDMzO1xyXG59XHJcblxyXG4vKioqIEluZ3JlZGllbnQgdGFibGUgKioqL1xyXG4uYWRkZWRJbmdyZWRpZW50cyB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4uaW5ncmVkaWVudFRhYmxlIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG59XHJcbnRoLFxyXG50ZCB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG50aCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbnRkIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmVsZW1lbnRSb3c6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pbmdyZWRpZW50Q29sIHtcclxuICB3aWR0aDogNDAlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLmRldGFpbENvbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZWxlbWVudFJvdzpob3ZlciAuaGlkZGVuUm93IHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5oaWRkZW5Sb3cge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi8qKiogTWV0aG9kIGFyZWEgKioqL1xyXG4ubWV0aG9kQXJlYSB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLnZpZXdTdGVwIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG4uc3RlcEluZm8ge1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uYWRkSW5ncmVkaWVudHMge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG59XHJcblxyXG4ubWV0aG9kVGFibGUge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbn1cclxuLm1ldGhvZFRhYmxlIHRkIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5lbmRDb2x1bW4ge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5lbmRDb2x1bW4gaSB7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxufVxyXG4uZWxlbWVudFJvdzpob3ZlciAuZW5kQ29sdW1uIGkge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5uYXJyb3cge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4ubWV0aG9kQnV0dG9ucyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuXHJcbi8qKiogUmV2aWV3IGFyZWEgKioqL1xyXG4vKioqIFRvcCByZWNpcGUgaW5mb3JtYXRpb24gKioqL1xyXG4ucmVjaXBlSGVhZGVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB3aWR0aDogNzAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5yZWNpcGVJbmZvIHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4ucmVjaXBlSW5mbyBoMSB7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuLnJlY2lwZUluZm8gcCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLnJlY2lwZURldGFpbHMge1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG59XHJcbi5yZWNpcGVEZXRhaWxzMiB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG59XHJcblxyXG4ucmVjaXBlSW5mb3JtYXRpb24ge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4ucmV2aWV3UGFuZWwge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWluLXdpZHRoOiAzNjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b25XcmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnNhdmVSZWNpcGVCdXR0b24ge1xyXG4gIHBhZGRpbmc6IDIwcHggNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNhOWY0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLnNhdmVSZWNpcGVCdXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzkzY2E7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi8qKiogUmVjaXBlIGltYWdlICoqKi9cclxuLm1haW5JbWcge1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbiAgbWluLXdpZHRoOiAzNTBweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYwZjU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyOiB0cmFuc3BhcmVudCAycHggc29saWQ7XHJcbn1cclxuLmltYWdlIHtcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG4gIHdpZHRoOiAzNTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5pbWFnZSBpbWcge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcbi5oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLyoqKiBJbWFnZSB1cGxvYWQgKioqL1xyXG4uaW1hZ2VPdmVybGF5IHtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxMCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgMC42NjQpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4ub0hpZGRlbiB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG4uckltYWdlV3JhcHBlciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5ySW1hZ2VXcmFwcGVyIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICBmb250LXNpemU6IDEwMDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLyoqKiBMb3dlciBmb3JtIGFyZWEgKioqL1xyXG4ubG93ZXJGb3JtQXJlYSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnN0ZXBCdXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VlZWY7XHJcbiAgY29sb3I6ICM3Nzc5Nzc7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNvbnRpbnVlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNhOWY0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4vKioqIEdlbmVyYWwgZWxlbWVudHMgKioqL1xyXG4uYnJlYWtMaW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgY29sb3I6ICNjYzAwMzMgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNlNGU0ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2NjMDAzMyAhaW1wb3J0YW50O1xyXG59XHJcbi5lcnJvck1lc3NhZ2Uge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGNvbG9yOiAjY2MwMDMzO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNob3dFcnJvck1lc3NhZ2Uge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuLmhpZGRlbiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi5wb2ludGVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm1TZWN0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5ub3NlbGVjdCB7XHJcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXHJcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEZpcmVmb3ggKi9cclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cclxuICB1c2VyLXNlbGVjdDogbm9uZTsgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSBhbmQgT3BlcmEgKi9cclxufVxyXG5cclxuLyoqKiBDc3Mgc3Bpbm5lciBjcmVkaXQ6aHR0cHM6Ly9sb2FkaW5nLmlvL2Nzcy8gKioqL1xyXG4ubGRzLXJpbmcge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG59XHJcbi5sZHMtcmluZyBkaXYge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBtYXJnaW46IDNweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCByZ2IoNTYsIDU2LCA1Nik7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGFuaW1hdGlvbjogbGRzLXJpbmcgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDU2LCA1NiwgNTYpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG59XHJcbi5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjQ1cztcclxufVxyXG4ubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zcztcclxufVxyXG4ubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNXM7XHJcbn1cclxuQGtleWZyYW1lcyBsZHMtcmluZyB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/create/create.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/create/create.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"createPage\">\r\n  <div class=\"wrapper\">\r\n    <h1>Create a recipe</h1>\r\n    <div class=\"breakLine\"></div>\r\n    <div class=\"formArea\" #formArea>\r\n      <div class=\"formPage nameArea\">\r\n        <div class=\"nameImage\">\r\n          <img src=\"../../../assets/images/inApp/book.svg\" />\r\n        </div>\r\n        <div class=\"nameInput\">\r\n          <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" placeholder=\"Enter a name to get started\" />\r\n        </div>\r\n        <div class=\"errorMessage\" [ngClass]=\"{ showErrorMessage: newErrors[0].err == true }\">Error: {{ newErrors[0].msg }}</div>\r\n        <div class=\"nameButton\">\r\n          <input type=\"button\" value=\"Start creating\" (click)=\"nextPage(formArea)\" />\r\n        </div>\r\n        <div class=\"checkButton\">\r\n          <span>Make public?</span>\r\n          <div class=\"publicCheck\" (click)=\"public = !public\">\r\n            <i class=\"fas fa-check check\" [ngClass]=\"{ checkAppear: public }\"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"formPage\">\r\n        <h2>Before you start...</h2>\r\n        <div class=\"descriptionInput\">\r\n          <h3>Add a brief description for your new recipe:</h3>\r\n          <textarea class=\"inputField\" rows=\"3\" type=\"text\" maxlength=\"192\" [(ngModel)]=\"description\" [ngClass]=\"{ error: newErrors[1].err == true }\" name=\"description\" placeholder=\" \"></textarea>\r\n        </div>\r\n        <div class=\"errorMessage\" [ngClass]=\"{ showErrorMessage: newErrors[1].err == true }\">Error: {{ newErrors[1].msg }}</div>\r\n      </div>\r\n      <div class=\"formPage\">\r\n        <h2>Recipe type:</h2>\r\n        <div class=\"mealTypeArea\">\r\n          <div class=\"cuisineIcon\" *ngFor=\"let meal of recipeTypes\" (click)=\"mealType = meal; checkErrors2()\" [ngClass]=\"{ selectedMeal: mealType == meal }\">\r\n            <img src=\"../../../assets/images/meals/{{ meal }}.jpg\" [ngClass]=\"{ hidden: !meal }\" />\r\n            <div class=\"catOverlay\">\r\n              <p>{{ meal | textCapitalise }}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"mType\" [ngClass]=\"{ mTypeError: newErrors[2] == true }\">Please select a general meal type.</div>\r\n      </div>\r\n      <div class=\"formPage\">\r\n        <h2>Cuisine type:</h2>\r\n        <div class=\"mealTypeArea\">\r\n          <div class=\"cuisineIcon\" *ngFor=\"let cuisine of cuisineTypes\" (click)=\"cuisineType = cuisine; checkErrors2()\" [ngClass]=\"{ selectedMeal: cuisineType == cuisine }\">\r\n            <img src=\"../../../assets/images/cuisines/{{ cuisine }}.jpg\" [ngClass]=\"{ hidden: !cuisine }\" />\r\n            <div class=\"catOverlay\">\r\n              <p>{{ cuisine | textCapitalise }}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"mType\" [ngClass]=\"{ mTypeError: newErrors[3] == true }\">Please select a cuisine category.</div>\r\n      </div>\r\n      <div class=\"formPage\">\r\n        <h2>Recipe time:</h2>\r\n        <div class=\"timeArea\">\r\n          <div>\r\n            <span>Prep-time:&nbsp;</span>\r\n            <input\r\n              class=\"timeInput\"\r\n              type=\"text\"\r\n              [(ngModel)]=\"prepTime\"\r\n              name=\"prepTime\"\r\n              [ngClass]=\"{ error: newErrors[4].err == true }\"\r\n              (keydown)=\"timeInput($event, 'prep')\"\r\n              placeholder=\"00:00\"\r\n              maxlength=\"5\"\r\n              onpaste=\"return false\"\r\n              (focusout)=\"clickOut('prep', prepTime, stepper)\"\r\n              (focusin)=\"prepTime = ''\"\r\n            />\r\n          </div>\r\n          <div>\r\n            <span>Cook-time:&nbsp;</span>\r\n            <input\r\n              class=\"timeInput\"\r\n              type=\"text\"\r\n              [(ngModel)]=\"cookTime\"\r\n              name=\"cookTime\"\r\n              [ngClass]=\"{ error: newErrors[4].err == true }\"\r\n              (keydown)=\"timeInput($event, 'cook')\"\r\n              placeholder=\"00:00\"\r\n              maxlength=\"5\"\r\n              onpaste=\"return false\"\r\n              (focusout)=\"clickOut('cook', cookTime, stepper)\"\r\n              (focusin)=\"cookTime = ''\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"errorMessage\" [ngClass]=\"{ showErrorMessage: newErrors[4].err == true }\">{{ newErrors[4].msg }}</div>\r\n      </div>\r\n      <div class=\"formPage\">\r\n        <h2>Servings:</h2>\r\n        <div class=\"recipeServingArea\">\r\n          <input\r\n            type=\"text\"\r\n            class=\"inputField recipeServings\"\r\n            [(ngModel)]=\"servings\"\r\n            [ngClass]=\"{ error: newErrors[5].err == true }\"\r\n            name=\"servings\"\r\n            placeholder=\"eg. 8\"\r\n            (keydown)=\"enterInt($event)\"\r\n            (keyup)=\"checkErrors2()\"\r\n          />\r\n        </div>\r\n        <div class=\"errorMessage\" [ngClass]=\"{ showErrorMessage: newErrors[5].err == true }\">Error: {{ newErrors[5].msg }}</div>\r\n      </div>\r\n      <div class=\"formPage\">\r\n        <h2>Difficulty:</h2>\r\n        <div class=\"recipeSkill\">\r\n          <div class=\"skillSwitch noselect\" [ngClass]=\"{ error: newErrors[6].err == true }\" (click)=\"checkErrors2()\">\r\n            <div class=\"switch-button\" style=\"border-top-left-radius: 8px; border-top-right-radius: 8px;\" [ngClass]=\"{ 'switch-med': difficulty == 0 }\" (click)=\"difficulty = 0\">Easy</div>\r\n            <div class=\"switch-button\" [ngClass]=\"{ 'switch-good': difficulty == 1 }\" (click)=\"difficulty = 1\">Intermediate</div>\r\n            <div class=\"switch-button\" style=\"border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;\" [ngClass]=\"{ 'switch-bad': difficulty == 2 }\" (click)=\"difficulty = 2\">Hard</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"errorMessage\" [ngClass]=\"{ showErrorMessage: newErrors[6].err == true }\">Error: {{ newErrors[6].msg }}</div>\r\n      </div>\r\n      <div class=\"formPage\">\r\n        <h2>Ingredients:</h2>\r\n        <div>\r\n          <div class=\"ingredientContainer detailArea\">\r\n            <div class=\"formSection noflex\">\r\n              <label for=\"food\">Ingredient:</label>\r\n              <div class=\"ingredientInputContainer\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"ingredientField\"\r\n                  [(ngModel)]=\"food\"\r\n                  name=\"food\"\r\n                  placeholder=\"eg. 'Apple'\"\r\n                  (keyup)=\"getIngredients()\"\r\n                  (focusin)=\"food = ''; ingredientsList = []; dropdownOpen = true\"\r\n                  (focusout)=\"dropdownOpen = false\"\r\n                />\r\n                <div class=\"loadingRing\" *ngIf=\"loading\">\r\n                  <div class=\"lds-ring\">\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"ingredientDropdown\" *ngIf=\"dropdownOpen || dropdownHover\" (mouseover)=\"dropdownHover = true\" (mouseout)=\"dropdownHover = false\">\r\n                <div class=\"ingredientElement\" *ngFor=\"let item of ingredientsList\" (click)=\"addIngredient(item)\">{{ item.ingredient }}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"addedIngredients\">\r\n            <div class=\"emptyTable\" *ngIf=\"ingredients.length == 0\" [ngClass]=\"{ etError: newErrors[7]?.err }\">\r\n              Add some ingredients!\r\n            </div>\r\n            <table *ngIf=\"ingredients.length > 0\" mat-table [dataSource]=\"dataSource\" class=\"ingredientTable\">\r\n              <ng-container matColumnDef=\"ingredient\">\r\n                <th mat-header-cell *matHeaderCellDef class=\"ingredientCol\">Ingredient</th>\r\n                <td mat-cell *matCellDef=\"let ingredient\" class=\"ingredientCol\">{{ ingredient.name }}</td>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"amount\">\r\n                <th mat-header-cell *matHeaderCellDef class=\"narrow\">Amount</th>\r\n                <td mat-cell *matCellDef=\"let ingredient\" class=\"narrow\">{{ getAmount(ingredient.amount, ingredient.unit) }}</td>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"details\">\r\n                <th mat-header-cell *matHeaderCellDef class=\"detailCol\">Details</th>\r\n                <td mat-cell *matCellDef=\"let ingredient\" class=\"detailCol\">\r\n                  <span *ngIf=\"ingredient.details\">{{ ingredient.details }}</span>\r\n                  <span *ngIf=\"!ingredient.details\">-</span>\r\n                </td>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"button\">\r\n                <th mat-header-cell *matHeaderCellDef class=\"narrow endColumn\"></th>\r\n                <td mat-cell *matCellDef=\"let ingredient; let i = index\" class=\"narrow endColumn\">\r\n                  <i class=\"fas fa-times\" (click)=\"removeIngredient(i)\"></i>\r\n                </td>\r\n              </ng-container>\r\n              <tr mat-header-row *matHeaderRowDef=\"['ingredient', 'amount', 'details', 'button']\"></tr>\r\n              <tr mat-row *matRowDef=\"let myRowData; columns: ['ingredient', 'amount', 'details', 'button']\" class=\"elementRow\"></tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"formPage\">\r\n        <h2>Methods:</h2>\r\n        <div class=\"methodArea\">\r\n          <div class=\"addIngredients\" (keyup.enter)=\"addStep(step); step = ''\">\r\n            <textarea class=\"inputField\" (keydown)=\"disableEnter($event)\" rows=\"3\" type=\"text\" maxlength=\"184\" [(ngModel)]=\"step\" name=\"step\" placeholder=\"Add a step\"></textarea>\r\n          </div>\r\n          <div class=\"addedSteps\">\r\n            <div *ngIf=\"method.length == 0\" class=\"emptyTable\" [ngClass]=\"{ etError: newErrors[8]?.err }\">Add some instructions for your recipe!</div>\r\n            <table *ngIf=\"method.length > 0\" mat-table [dataSource]=\"dataSource2\" class=\"methodTable\">\r\n              <ng-container matColumnDef=\"step\">\r\n                <th mat-header-cell *matHeaderCellDef class=\"narrow\">Step</th>\r\n                <td mat-cell *matCellDef=\"let step; let i = index\" class=\"narrow\">{{ i + 1 }}.</td>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"instruction\">\r\n                <th mat-header-cell *matHeaderCellDef></th>\r\n                <td mat-cell *matCellDef=\"let step\">{{ step }}</td>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"remove\">\r\n                <th mat-header-cell *matHeaderCellDef class=\"narrow endColumn\"></th>\r\n                <td mat-cell *matCellDef=\"let step; let i = index\" class=\"narrow endColumn\"><i class=\"fas fa-times\" (click)=\"removeStep(i)\"></i></td>\r\n              </ng-container>\r\n              <tr mat-header-row *matHeaderRowDef=\"['step', 'instruction', 'remove']\"></tr>\r\n              <tr mat-row *matRowDef=\"let myRowData; columns: ['step', 'instruction', 'remove']\" class=\"elementRow\"></tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"formPage\">\r\n        <div class=\"recipeHeader\">\r\n          <div class=\"recipeInfo\">\r\n            <h1>{{ title }}</h1>\r\n            <p>{{ description }}</p>\r\n          </div>\r\n          <div class=\"mainImg\" [ngClass]=\"{ error: newErrors[9]?.err }\">\r\n            <div class=\"rImageWrapper\" (mouseenter)=\"imageHover = true\" (mouseleave)=\"imageHover = false\">\r\n              <div class=\"imageOverlay\" [ngClass]=\"{ oHidden: !imageHover }\">\r\n                <i class=\"fas fa-file-upload\"></i>\r\n              </div>\r\n              <div class=\"image\">\r\n                <img [ngClass]=\"{ hidden: !recipeImage }\" src=\"{{ recipeImage }}\" #rImg />\r\n              </div>\r\n              <input type=\"file\" accept=\"image/*\" (change)=\"uploadImage($event, rImg)\" />\r\n            </div>\r\n          </div>\r\n          <div class=\"recipeDetails\">\r\n            Prep-time: <span>{{ prepTime }}</span> • Cook-time: <span>{{ prepTime }}</span> • Difficulty: <span>{{ difficulty }}</span> • Servings:<span>{{ servings }}</span>\r\n          </div>\r\n          <div class=\"recipeDetails2\">\r\n            <span>{{ cuisineType }}</span> • <span>{{ mealType }}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"recipeInformation\">\r\n          <div class=\"reviewPanel\">\r\n            <h2>Ingredients:</h2>\r\n            <p *ngFor=\"let ing of ingredients\">{{ generalService.formatIngredient(ing, servings) }}</p>\r\n          </div>\r\n          <div class=\"reviewPanel\">\r\n            <h2>Method:</h2>\r\n            <p *ngFor=\"let meth of method; let i = index\">{{ i + 1 }}. {{ meth }}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"buttonWrapper\"><div class=\"saveRecipeButton noselect\" *ngIf=\"page == 9\" (click)=\"onRecipeSubmit()\">Save</div></div>\r\n        <div class=\"errorMessage\" [ngClass]=\"{ showErrorMessage: newErrors[9]?.err == true }\">Error: {{ newErrors[9]?.msg }}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"breakLine\"></div>\r\n    <div class=\"lowerFormArea\">\r\n      <div class=\"stepButton noselect\" [ngClass]=\"{ hidden: page == 0 }\" (click)=\"prevPage(formArea)\">Prev</div>\r\n      <div class=\"stepButton noselect\" *ngIf=\"page != 9 && page != 0\" [ngClass]=\"{ continue: canContinue }\" (click)=\"nextPage(formArea)\">Next</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/create/create.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/create/create.component.ts ***!
  \*******************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/recipe.service */ "./src/app/services/recipe.service.ts");
/* harmony import */ var _services_recipe_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/recipe-validate.service */ "./src/app/services/recipe-validate.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ingredient_dialog_ingredient_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ingredient-dialog/ingredient-dialog.component */ "./src/app/components/create/ingredient-dialog/ingredient-dialog.component.ts");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var convert_units__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! convert-units */ "./node_modules/convert-units/lib/index.js");
/* harmony import */ var convert_units__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(convert_units__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CreateComponent = /** @class */ (function () {
    function CreateComponent(titleService, router, recipeService, recipeValidateService, userService, dialog, generalService) {
        this.titleService = titleService;
        this.router = router;
        this.recipeService = recipeService;
        this.recipeValidateService = recipeValidateService;
        this.userService = userService;
        this.dialog = dialog;
        this.generalService = generalService;
        this.recipeTypes = ["main", "salad", "side", "dessert", "soup", "appetizer", "bread", "lunch", "breakfast", "beverage", "cocktail", "tea"];
        this.cuisineTypes = ["american", "british", "caribbean", "chinese", "french", "greek", "indian", "italian", "japanese", "mediterranean", "mexican", "moroccan", "spanish", "thai", "turkish", "vietnamese"];
        this.servings = "";
        this.cookTime = "";
        this.prepTime = "";
        this.public = true;
        this.amount = "";
        this.ingredients = [];
        this.ingredientsList = [];
        this.dropdownOpen = false;
        this.units = ["mcg", "mg", "g", "kg", "oz", "lb", "mt", "t", "ml", "l", "tsp", "Tbs", "fl-oz", "cup", "pnt", "qt", "gal"];
        this.method = [];
        this.recipeImage = null;
        this.loading = false;
        this.page = 0;
        this.mealError = false;
        this.newErrors = new Array(9).fill({ err: false });
        this.canContinue = false;
    }
    CreateComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Create a recipe");
        this.user = this.generalService.getUser().id;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.ingredients);
        this.dataSource2 = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.method);
    };
    CreateComponent.prototype.nextPage = function (stepper) {
        if (!this.checkErrors2()) {
            var amount = stepper.scrollLeft + stepper.offsetWidth + 40;
            if (amount + stepper.offsetWidth + 40 <= stepper.scrollWidth && stepper.scrollLeft % (stepper.offsetWidth + 40) === 0) {
                this.page++;
                this.canContinue = false;
                stepper.scrollLeft = amount;
            }
        }
    };
    CreateComponent.prototype.prevPage = function (stepper) {
        var amount = stepper.scrollLeft - (stepper.offsetWidth + 40);
        if (amount >= 0 && stepper.scrollLeft % (stepper.offsetWidth + 40) === 0) {
            this.page--;
            stepper.scrollLeft = amount;
        }
    };
    CreateComponent.prototype.checkErrors2 = function () {
        var err;
        switch (this.page) {
            case 0:
                err = this.recipeValidateService.validateTitle(this.title);
                this.newErrors[0] = err;
                if (!err.err) {
                    this.canContinue = true;
                }
                return err.err;
            case 1:
                err = this.recipeValidateService.validateDescription(this.description);
                this.newErrors[1] = err;
                if (!err.err) {
                    this.canContinue = true;
                }
                return err.err;
            case 2:
                if (!this.mealType) {
                    this.newErrors[2] = true;
                    return true;
                }
                else {
                    this.newErrors[2] = false;
                    this.canContinue = true;
                    return false;
                }
            case 3:
                if (!this.cuisineType) {
                    this.newErrors[3] = true;
                    return true;
                }
                else {
                    this.newErrors[3] = false;
                    this.canContinue = true;
                    return false;
                }
            case 4:
                err = this.recipeValidateService.validateTime({ prepTime: this.prepTime, cookTime: this.cookTime });
                this.newErrors[4] = err;
                if (!err.err) {
                    this.canContinue = true;
                }
                return err.err;
            case 5:
                err = this.recipeValidateService.validateServings(this.servings);
                this.newErrors[5] = err;
                if (!err.err) {
                    this.canContinue = true;
                }
                return err.err;
            case 6:
                err = this.recipeValidateService.validateDifficulty(this.difficulty);
                this.newErrors[6] = err;
                if (!err.err) {
                    this.canContinue = true;
                }
                return err.err;
            case 7:
                if (this.ingredients.length === 0) {
                    this.newErrors[7] = { err: true, msg: "Please add some ingredients to your recipe." };
                    this.canContinue = false;
                }
                else {
                    this.newErrors[7] = { err: false };
                    this.canContinue = true;
                }
                return this.newErrors[7].err;
            case 8:
                if (this.method.length === 0) {
                    this.newErrors[8] = { err: true, msg: "Please add some instructions for your recipe." };
                    this.canContinue = false;
                }
                else {
                    this.newErrors[8] = { err: false };
                    this.canContinue = true;
                }
                return this.newErrors[8].err;
            default:
                console.log("Error page");
        }
        return false;
    };
    CreateComponent.prototype.addStep = function (step) {
        if (step === null || step === undefined) {
            return;
        }
        step = step.replace(/\s\s+/g, " ");
        var re = /^[A-Za-z0-9,\.\-/;()'" ]+$/;
        if (step !== null && step !== undefined && re.test(step)) {
            step = step.charAt(0).toUpperCase() + step.slice(1);
            this.method.push(step);
            this.dataSource2._updateChangeSubscription();
            this.canContinue = true;
        }
    };
    CreateComponent.prototype.removeStep = function (i) {
        this.method.splice(i, 1);
        this.dataSource2._updateChangeSubscription();
        if (this.method.length === 0) {
            this.canContinue = false;
        }
    };
    CreateComponent.prototype.updateStep = function (step, index) {
        if (step === null || step === undefined) {
            return;
        }
        step = step.replace(/\s\s+/g, " ");
        var re = /^[A-Za-z0-9,\.\-/;()'" ]+$/;
        if (step !== null && step !== undefined && re.test(step)) {
            step = step.charAt(0).toUpperCase() + step.slice(1);
            this.method[index] = { step: step };
            this.dataSource2._updateChangeSubscription();
        }
    };
    CreateComponent.prototype.disableEnter = function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
        }
    };
    CreateComponent.prototype.uploadImage = function (e, image) {
        if (e.target.files && e.target.files[0]) {
            this.recipeImage = e.target.files[0];
            if (this.recipeImage.type.split("/")[0] !== "image") {
                this.recipeImage = undefined;
                this.newErrors[9] = { err: true, msg: "Bad file type, make sure it's an image" };
                return;
            }
            this.newErrors[9] = { err: false };
            var reader = new FileReader();
            reader.onload = function (e) {
                image.src = e.target.result;
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    CreateComponent.prototype.onRecipeSubmit = function () {
        var _this = this;
        var ing = this.ingredients.map(function (e) {
            if (e.unit === "1") {
                // console.log(e);
                e.amount = e.amount * e.i.servings.standard.amount;
                e.unit = "g";
            }
            else {
                try {
                    e.amount = convert_units__WEBPACK_IMPORTED_MODULE_9__(e.amount)
                        .from(e.unit)
                        .to("g");
                    e.unit = "g";
                }
                catch (e) {
                    // console.log("Can't convert");
                }
            }
            return e;
        });
        var recipeData = {
            title: this.title,
            description: this.description,
            image: "",
            public: this.public,
            mealType: this.mealType,
            cuisine: this.cuisineType,
            prepTime: this.generalService.getSeconds(this.prepTime),
            cookTime: this.generalService.getSeconds(this.cookTime),
            difficulty: this.difficulty,
            servings: parseInt(this.servings, 10),
            ingredients: ing,
            method: this.method,
            author: this.generalService.getUser().username
        };
        recipeData["tags"] = this.addTags(recipeData);
        // this.errors = this.recipeValidateService.validateRecipe(recipeData);
        // let anyError = false;
        // for (let i = 0; i < this.errors.length; i++) {
        //   if (this.errors[i].err) {
        //     anyError = true;
        //     console.log("Validation errors", this.errors[i].msg);
        //   }
        // }
        if (this.recipeImage) {
            this.newErrors[9] = { err: false };
            var fd = new FormData();
            fd.append("recipeImage", this.recipeImage, this.recipeImage.name);
            this.recipeService.addRecipeImage(fd).subscribe(function (data) {
                recipeData.image = data.path;
                _this.recipeService.addRecipe(recipeData).subscribe(function (data) {
                    if (data.success) {
                        _this.userService.addToAuthor(data.recipe._id, "recipes");
                        _this.router.navigate(["/recipe" + data.recipe._id]);
                    }
                });
            });
        }
        else {
            this.newErrors[9] = { err: true, msg: "Please upload an image for your recipe" };
        }
        return;
    };
    CreateComponent.prototype.addTags = function (recipe) {
        var tags = [];
        // User defined types.
        tags.push(recipe.mealType);
        // tags.push(recipe.cuisine);
        // Time.
        var time = recipe.cookTime + recipe.prepTime;
        if (time < 900) {
            tags.push("quick", "instant", "15 minutes", "15");
        }
        else if (time < 1800) {
            tags.push("quick", "short", "30 minutes", "30", "half hour");
        }
        else if (time < 3600) {
            tags.push("average", "60 minutes", "hour");
        }
        else {
            tags.push("long", "time consuming", "lengthy", "slow cooking", "slow cook");
        }
        // Difficulty.
        switch (recipe.difficulty) {
            case 0:
                tags.push("easy", "simple", "beginner", "novice", "accessible", "straightforward");
                break;
            case 1:
                tags.push("medium", "average", "experienced", "skill", "complicated", "resources");
                break;
            case 2:
                tags.push("difficult", "ambitious", "challenging", "tough", "professional");
                break;
        }
        var ings = recipe.ingredients.map(function (e) {
            var name = e.name;
            // delete e.name;
            delete e.i;
            return { ing: name, amount: e.amount };
        });
        ings.sort(function (a, b) {
            return b.amount - a.amount;
        });
        for (var i = 0; i < 5 && i < ings.length; i++) {
            var name_1 = ings[i].ing;
            tags.push(name_1);
        }
        return tags;
    };
    // Formatting for the time inputs.
    CreateComponent.prototype.timeInput = function (key, time) {
        if (key.key === "Tab") {
            return;
        }
        key.preventDefault();
        var keyPressed = key.key;
        var re = /([0-9]|:)/;
        var re2 = /([0-5]|:)/;
        if (time === "cook") {
            if (re.test(keyPressed) && this.cookTime.length < 5) {
                if (keyPressed === ":") {
                    if (this.cookTime.length === 2) {
                        this.cookTime += ":";
                    }
                    else if (this.cookTime.length === 0) {
                        this.cookTime = "00:" + this.cookTime;
                    }
                    else if (this.cookTime.length === 1) {
                        this.cookTime = "0" + this.cookTime + ":";
                    }
                }
                else if (this.cookTime.length === 2) {
                    if (re2.test(keyPressed)) {
                        this.cookTime += ":" + keyPressed;
                    }
                }
                else if (this.cookTime.length === 3) {
                    if (re2.test(keyPressed)) {
                        this.cookTime += keyPressed;
                    }
                }
                else {
                    this.cookTime += keyPressed;
                }
            }
            else if (keyPressed === "Backspace") {
                if (this.cookTime.length === 4) {
                    this.cookTime = this.cookTime.substr(0, this.cookTime.length - 2);
                }
                else {
                    this.cookTime = this.cookTime.substr(0, this.cookTime.length - 1);
                }
            }
        }
        else {
            if (re.test(keyPressed) && this.prepTime.length < 5) {
                if (keyPressed === ":") {
                    if (this.prepTime.length === 2) {
                        this.prepTime += ":";
                    }
                    else if (this.prepTime.length === 0) {
                        this.prepTime = "00:" + this.prepTime;
                    }
                    else if (this.prepTime.length === 1) {
                        this.prepTime = "0" + this.prepTime + ":";
                    }
                }
                else if (this.prepTime.length === 2) {
                    if (re2.test(keyPressed)) {
                        this.prepTime += ":" + keyPressed;
                    }
                }
                else if (this.prepTime.length === 3) {
                    if (re2.test(keyPressed)) {
                        this.prepTime += keyPressed;
                    }
                }
                else {
                    this.prepTime += keyPressed;
                }
            }
            else if (keyPressed === "Backspace") {
                if (this.prepTime.length === 4) {
                    this.prepTime = this.prepTime.substr(0, this.prepTime.length - 2);
                }
                else {
                    this.prepTime = this.prepTime.substr(0, this.prepTime.length - 1);
                }
            }
        }
    };
    CreateComponent.prototype.clickOut = function (type, value, stepper) {
        var time = "";
        if (value === "") {
            time = "";
        }
        else if (!value.includes(":")) {
            if (value < 4 && value.length < 2) {
                time = "0" + value + ":00";
            }
            else if (value < 10 && value.length < 2) {
                time = "00:0" + value;
            }
            else {
                time = "00:" + value;
            }
        }
        else {
            var right = value.substr(value.indexOf(":") + 1);
            if (right.length === 0) {
                time = value + "00";
            }
            else if (right.length === 1) {
                time = value + "0";
            }
            else {
                time = value;
            }
        }
        if (type === "prep") {
            this.prepTime = time;
        }
        else {
            this.cookTime = time;
            this.newErrors[this.page] = { err: false };
        }
        if (time !== "") {
            this.checkErrors2();
        }
    };
    CreateComponent.prototype.enterInt = function (key) {
        if (key.key === "Tab") {
            return;
        }
        key.preventDefault();
        var keyPressed = key.key;
        var re = /^[0-9]$/;
        if (keyPressed === "Backspace") {
            this.servings = this.servings.substr(0, this.servings.length - 1);
        }
        if (re.test(keyPressed)) {
            this.servings += keyPressed;
        }
    };
    CreateComponent.prototype.addIngredient = function (ingredient) {
        var _this = this;
        // console.log(ingredient);
        var ingredientDialog = this.dialog.open(_ingredient_dialog_ingredient_dialog_component__WEBPACK_IMPORTED_MODULE_7__["IngredientDialogComponent"], {
            data: {
                ingredient: ingredient
            }
        });
        ingredientDialog.afterClosed().subscribe(function (data) {
            if (data !== undefined) {
                data["ingredient"] = ingredient._id;
                data["name"] = ingredient.ingredient;
                data["i"] = ingredient;
                _this.dropdownOpen = false;
                _this.food = undefined;
                _this.ingredients.push(data);
                _this.dataSource._updateChangeSubscription();
                _this.checkErrors2();
            }
        });
    };
    CreateComponent.prototype.removeIngredient = function (i) {
        this.checkErrors2();
        this.ingredients.splice(i, 1);
        this.dataSource._updateChangeSubscription();
    };
    CreateComponent.prototype.getAmount = function (amount, unit) {
        if (isNaN(unit)) {
            return amount + unit;
        }
        else {
            return amount;
        }
    };
    CreateComponent.prototype.getIngredients = function () {
        var _this = this;
        this.loading = true;
        var query = this.food;
        if (query === "" || query === undefined) {
            return false;
        }
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
        this.timeout = setTimeout(function () {
            _this.recipeValidateService.getIngredients(query).subscribe(function (data) {
                _this.ingredientsList = data.ingredients;
                _this.loading = false;
            });
        }, 200);
    };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-create",
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/components/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/components/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"],
            _services_recipe_validate_service__WEBPACK_IMPORTED_MODULE_4__["RecipeValidateService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _services_general_service__WEBPACK_IMPORTED_MODULE_8__["GeneralService"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/components/create/ingredient-dialog/ingredient-dialog.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/create/ingredient-dialog/ingredient-dialog.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*** Top buttons ***/\r\n.dialogWindow {\r\n  /* height: 50vh;\r\n  max-height: 550px; */\r\n  width: 350px;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n/*** Top buttons ***/\r\n.topButtons {\r\n  /* background-color: red; */\r\n  margin: auto;\r\n  height: 40px;\r\n  width: 95%;\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 28px;\r\n}\r\n.topButtons i {\r\n  cursor: pointer;\r\n}\r\n/*** Main info ***/\r\n.mainInfo h1 {\r\n  text-align: center;\r\n  font-size: 38px;\r\n  text-transform: capitalize;\r\n}\r\n/*** Amount area ***/\r\n.amountArea {\r\n  /* background-color: rgba(255, 0, 0, 0.226); */\r\n  margin: 20px auto;\r\n  width: 80%;\r\n}\r\nlabel {\r\n  font-size: 14px;\r\n}\r\n.amounts {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: nowrap;\r\n  align-items: center;\r\n}\r\n.amounts input {\r\n  font-family: \"ProductSansRegular\", sans-serif;\r\n  background-color: #ecf0f1;\r\n  padding: 10px;\r\n  border-radius: 8px;\r\n  font-size: 16px;\r\n  width: 50px;\r\n  border: 2px solid transparent;\r\n}\r\n.wide {\r\n  flex-grow: 1;\r\n  margin-right: 10px;\r\n}\r\n/*** Details area ***/\r\n.details {\r\n  margin: 20px 0;\r\n}\r\n.details input {\r\n  font-family: \"ProductSansRegular\", sans-serif;\r\n  background-color: #ecf0f1;\r\n  padding: 10px;\r\n  border-radius: 8px;\r\n  font-size: 16px;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  border: 2px solid transparent;\r\n}\r\n/*** Add btn ***/\r\n.btnArea {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.addBtn {\r\n  display: inline-block;\r\n  background-color: #03a9f4;\r\n  color: #fff;\r\n  margin: 10px 0;\r\n  padding: 0.7em 1.6em;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n}\r\n/*** Errors ***/\r\n.error {\r\n  color: #cc0033 !important;\r\n  background-color: #fce4e4 !important;\r\n  border: 2px solid #cc0033 !important;\r\n}\r\n/*** General ***/\r\n.noselect {\r\n  -webkit-touch-callout: none; /* iOS Safari */\r\n  -webkit-user-select: none; /* Safari */ /* Konqueror HTML */\r\n  -moz-user-select: none; /* Firefox */\r\n  -ms-user-select: none; /* Internet Explorer/Edge */\r\n  user-select: none; /* Non-prefixed version, currently\r\n                                  supported by Chrome and Opera */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUvaW5ncmVkaWVudC1kaWFsb2cvaW5ncmVkaWVudC1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQkFBcUI7QUFDckI7RUFDRTt1QkFDcUI7RUFDckIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FDcEI7QUFFRCxxQkFBcUI7QUFDckI7RUFDRSw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLGFBQWE7RUFDYixXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0Isb0JBQW9CO0VBQ3BCLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBRUQsbUJBQW1CO0FBQ25CO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwyQkFBMkI7Q0FDNUI7QUFFRCxxQkFBcUI7QUFDckI7RUFDRSwrQ0FBK0M7RUFDL0Msa0JBQWtCO0VBQ2xCLFdBQVc7Q0FDWjtBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBRUQ7RUFDRSxjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLDhDQUE4QztFQUM5QywwQkFBMEI7RUFDMUIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDhCQUE4QjtDQUMvQjtBQUNEO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtDQUNwQjtBQUVELHNCQUFzQjtBQUN0QjtFQUNFLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLDhDQUE4QztFQUM5QywwQkFBMEI7RUFDMUIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qiw4QkFBOEI7Q0FDL0I7QUFFRCxpQkFBaUI7QUFDakI7RUFDRSxjQUFjO0VBQ2Qsd0JBQXdCO0NBQ3pCO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixnQkFBZ0I7Q0FDakI7QUFFRCxnQkFBZ0I7QUFDaEI7RUFDRSwwQkFBMEI7RUFDMUIscUNBQXFDO0VBQ3JDLHFDQUFxQztDQUN0QztBQUVELGlCQUFpQjtBQUNqQjtFQUNFLDRCQUE0QixDQUFDLGdCQUFnQjtFQUM3QywwQkFBMEIsQ0FBQyxZQUFZLENBQ2Isb0JBQW9CO0VBQzlDLHVCQUF1QixDQUFDLGFBQWE7RUFDckMsc0JBQXNCLENBQUMsNEJBQTRCO0VBQ25ELGtCQUFrQixDQUFDO2tFQUM2QztDQUNqRSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlL2luZ3JlZGllbnQtZGlhbG9nL2luZ3JlZGllbnQtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIFRvcCBidXR0b25zICoqKi9cclxuLmRpYWxvZ1dpbmRvdyB7XHJcbiAgLyogaGVpZ2h0OiA1MHZoO1xyXG4gIG1heC1oZWlnaHQ6IDU1MHB4OyAqL1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLyoqKiBUb3AgYnV0dG9ucyAqKiovXHJcbi50b3BCdXR0b25zIHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogOTUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG59XHJcbi50b3BCdXR0b25zIGkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyoqKiBNYWluIGluZm8gKioqL1xyXG4ubWFpbkluZm8gaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDM4cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi8qKiogQW1vdW50IGFyZWEgKioqL1xyXG4uYW1vdW50QXJlYSB7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMjI2KTsgKi9cclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uYW1vdW50cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5hbW91bnRzIGlucHV0IHtcclxuICBmb250LWZhbWlseTogXCJQcm9kdWN0U2Fuc1JlZ3VsYXJcIiwgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYxO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB3aWR0aDogNTBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG4ud2lkZSB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLyoqKiBEZXRhaWxzIGFyZWEgKioqL1xyXG4uZGV0YWlscyB7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuLmRldGFpbHMgaW5wdXQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlByb2R1Y3RTYW5zUmVndWxhclwiLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2YwZjE7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi8qKiogQWRkIGJ0biAqKiovXHJcbi5idG5BcmVhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5hZGRCdG4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNhOWY0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIHBhZGRpbmc6IDAuN2VtIDEuNmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qKiogRXJyb3JzICoqKi9cclxuLmVycm9yIHtcclxuICBjb2xvcjogI2NjMDAzMyAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2U0ZTQgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjY2MwMDMzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qKiogR2VuZXJhbCAqKiovXHJcbi5ub3NlbGVjdCB7XHJcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXHJcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEZpcmVmb3ggKi9cclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cclxuICB1c2VyLXNlbGVjdDogbm9uZTsgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSBhbmQgT3BlcmEgKi9cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/create/ingredient-dialog/ingredient-dialog.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/create/ingredient-dialog/ingredient-dialog.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialogWindow\">\r\n  <div class=\"topButtons\">\r\n    <div></div>\r\n    <div><i class=\"fas fa-times\" (click)=\"dialog.close()\"></i></div>\r\n  </div>\r\n  <form autocomplete=\"off\">\r\n    <div class=\"mainInfo\">\r\n      <h1>{{ ingredient?.ingredient }}</h1>\r\n      <div class=\"amountArea\">\r\n        <label>Add an amount:</label>\r\n        <div class=\"amounts\">\r\n          <input placeholder='\"100\"' class=\"wide\" name=\"amount\" [(ngModel)]=\"amount\" [ngClass]=\"{ error: errors[0] }\" />\r\n          <input placeholder='\"g\"' list=\"acceptedUnits\" name=\"unit\" [(ngModel)]=\"unit\" [ngClass]=\"{ error: errors[1] }\" />\r\n          <datalist id=\"acceptedUnits\" style=\"overflow-y: auto!important; max-height: 300px;\">\r\n            <option *ngFor=\"let uom of units\" value=\"{{ uom.id }}\">{{ uom.unit }}</option>\r\n          </datalist>\r\n        </div>\r\n        <div class=\"details\">\r\n          <label for=\"details\">Additional details (optional):</label>\r\n          <input placeholder='\"Peeled and chopped\"' name=\"details\" name=\"details\" [(ngModel)]=\"details\" [ngClass]=\"{ error: errors[2] }\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <div class=\"btnArea\">\r\n    <div class=\"addBtn noselect\" (click)=\"addIngredient()\">Add</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/create/ingredient-dialog/ingredient-dialog.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/create/ingredient-dialog/ingredient-dialog.component.ts ***!
  \************************************************************************************/
/*! exports provided: IngredientDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientDialogComponent", function() { return IngredientDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var IngredientDialogComponent = /** @class */ (function () {
    function IngredientDialogComponent(dialog, data) {
        this.dialog = dialog;
        this.data = data;
        // units = ["mcg", "mg", "g", "kg", "oz", "lb", "mt", "t", "ml", "l", "tsp", "Tbs", "fl-oz", "cup", "pnt", "qt", "gal"];
        this.units = [
            { unit: "Microgramme", id: "mcg" },
            { unit: "Milligram", id: "mg" },
            { unit: "Gram", id: "g" },
            { unit: "Kilogram", id: "kg" },
            { unit: "Ounce", id: "oz" },
            { unit: "Pound", id: "lb" },
            { unit: "Tonne", id: "mt" },
            { unit: "Ton", id: "t" },
            { unit: "Millilitre ", id: "ml" },
            { unit: "Litre", id: "l" },
            { unit: "Teaspoon", id: "tsp" },
            { unit: "Tablespoon", id: "Tbs" },
            { unit: "Fluid ounce", id: "fl-oz" },
            { unit: "Cup", id: "cup" },
            { unit: "Pint", id: "pnt" },
            { unit: "Quart", id: "qt" },
            { unit: "Gallon", id: "gal" },
            { unit: "Whole", id: "1" }
        ];
        this.errors = [];
    }
    IngredientDialogComponent.prototype.ngOnInit = function () {
        this.ingredient = this.data.ingredient;
        // if (this.ingredient.servings.house) {
        //   this.units.push(this.ingredient.servings.house.uom.toLowerCase());
        // }
        // console.log(this.ingredient);
    };
    IngredientDialogComponent.prototype.addIngredient = function () {
        if (this.checkIngredient()) {
            return;
        }
        var ing = {
            amount: this.amount,
            unit: this.unit,
            details: this.details
        };
        this.dialog.close(ing);
    };
    IngredientDialogComponent.prototype.checkIngredient = function () {
        var errors = false;
        if (this.amount === "" || this.amount === undefined || isNaN(this.amount) || this.amount > 10000) {
            this.errors[0] = { err: true, msg: "Amount not valid." };
            errors = true;
        }
        else {
            this.errors[0] = undefined;
        }
        var map = this.units.map(function (x) {
            return x.id;
        });
        if (this.unit === "" || this.unit === undefined || map.indexOf(this.unit) < 0) {
            this.errors[1] = { err: true, msg: "Unit not valid." };
            errors = true;
        }
        else {
            this.errors[1] = undefined;
        }
        if (this.details === undefined || this.details === "") {
            this.errors[2] = undefined;
        }
        else if (this.details.length > 15) {
            this.errors[2] = { err: true, msg: "Notes not valid." };
            errors = true;
        }
        return errors;
    };
    IngredientDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-ingredient-dialog",
            template: __webpack_require__(/*! ./ingredient-dialog.component.html */ "./src/app/components/create/ingredient-dialog/ingredient-dialog.component.html"),
            styles: [__webpack_require__(/*! ./ingredient-dialog.component.css */ "./src/app/components/create/ingredient-dialog/ingredient-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], IngredientDialogComponent);
    return IngredientDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard {\r\n  min-height: calc(100vh - 60px);\r\n  background-color: #f8f9fa;\r\n  /* background-color: #fff; */\r\n  padding-top: 1px;\r\n  width: 100%;\r\n  max-width: 1800px;\r\n  margin: auto;\r\n}\r\n\r\n/***  Welcome message ***/\r\n\r\n.welcomeMessage {\r\n  overflow: hidden;\r\n  padding-left: 60px;\r\n}\r\n\r\n.welcomeMessage label {\r\n  font-size: 35px;\r\n  font-weight: 900;\r\n}\r\n\r\n/***  Main window area ***/\r\n\r\n.wrapper {\r\n  width: 100%;\r\n  padding-bottom: 100px;\r\n}\r\n\r\n.breakLine {\r\n  width: 100%;\r\n  height: 2px;\r\n  background-color: #eaeaea;\r\n  border-radius: 25px;\r\n}\r\n\r\n/*** Categories ***/\r\n\r\n.categories {\r\n  width: 90%;\r\n  margin: 50px auto;\r\n  padding-bottom: 10px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  /* justify-content: center; */\r\n  overflow: scroll;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.categoryBox {\r\n  height: 80px;\r\n  min-width: 160px;\r\n  margin: 0 20px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  background-color: #f1f1f5;\r\n  position: relative;\r\n}\r\n\r\n.categoryBox:nth-child(1) {\r\n  margin-left: 0;\r\n}\r\n\r\n.categoryBox img {\r\n  height: 100%;\r\n  width: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  border-radius: 4px;\r\n}\r\n\r\n.catOverlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  border-radius: 4px;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: rgba(27, 27, 27, 0.308);\r\n  color: #fff;\r\n  font-weight: bold;\r\n  font-size: 22px;\r\n  letter-spacing: 0.5px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  overflow: hidden;\r\n  pointer-events: none;\r\n  opacity: 0;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.categoryBox:hover .catOverlay {\r\n  opacity: 1;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.categories::-webkit-scrollbar {\r\n  height: 4px;\r\n}\r\n\r\n.categories::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  background-color: #ffffff00;\r\n}\r\n\r\n.categories:hover::-webkit-scrollbar-thumb {\r\n  background-color: #dadada;\r\n}\r\n\r\n/***  Top 'front' box ***/\r\n\r\n.front {\r\n  border-bottom: #eaeaea 1px solid;\r\n  width: 95%;\r\n  height: auto;\r\n  margin: 0 auto;\r\n  padding: 20px 0;\r\n}\r\n\r\n.front:nth-child(1) {\r\n  border-top: #eaeaea 1px solid;\r\n}\r\n\r\n.cookbookTitle p {\r\n  font-size: 14px;\r\n  color: rgb(88, 88, 88);\r\n}\r\n\r\n.topArea {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.topArea i {\r\n  cursor: pointer;\r\n}\r\n\r\n.boxContainer {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  overflow: hidden;\r\n}\r\n\r\n.itemBox {\r\n  margin-right: 20px;\r\n  width: 210px;\r\n}\r\n\r\n/*** Style for the image boxes ***/\r\n\r\n.cookbooks {\r\n  width: 100%;\r\n  margin: auto;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n}\r\n\r\n.cookbook {\r\n  margin: 10px;\r\n  width: 10vw;\r\n  height: 10vw;\r\n  min-width: 170px;\r\n  min-height: 170px;\r\n  display: inline-block;\r\n  align-content: center;\r\n}\r\n\r\n.tImage {\r\n  width: 210px;\r\n  height: 210px;\r\n  margin: auto;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n\r\n.tPic {\r\n  width: 210px;\r\n  height: 210px;\r\n  border-radius: 25px;\r\n  background: #f1f1f5;\r\n}\r\n\r\n.tPic img {\r\n  height: 100%;\r\n  width: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  border-radius: 25px;\r\n}\r\n\r\n.tImageOverlay {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(39, 39, 39, 0.6);\r\n  opacity: 0;\r\n  transition: all 0.3s ease-in-out 0s;\r\n  position: absolute;\r\n  z-index: 10;\r\n  top: 0;\r\n  left: 0;\r\n  border-radius: 25px;\r\n}\r\n\r\n.tImage:hover .tImageOverlay {\r\n  transition: all 0.3s ease-in-out 0s;\r\n  opacity: 1;\r\n}\r\n\r\n.tImageFav {\r\n  font-size: 24pt;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  color: #fff;\r\n  cursor: default;\r\n}\r\n\r\n.tInfo {\r\n  padding: 10px 0 0 5px;\r\n  font-size: 10pt;\r\n  text-align: left;\r\n  font-family: \"ProductSansRegular\", sans-serif;\r\n  white-space: normal;\r\n}\r\n\r\n.tInfo-title {\r\n  display: inline-block;\r\n}\r\n\r\n.tInfo-title:hover {\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n\r\n.tFol {\r\n  padding-top: 5px;\r\n  font-size: 9pt;\r\n}\r\n\r\n/*** Trending box ***/\r\n\r\n.recBox {\r\n  width: 95%;\r\n  margin: auto;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  border-bottom: #eaeaea 1px solid;\r\n}\r\n\r\n.featuredRecipe {\r\n  min-height: 500px;\r\n  width: 750px;\r\n  padding: 0 30px;\r\n  margin: 0;\r\n  /* margin: auto; */\r\n  flex-grow: 1;\r\n  border-right: #eaeaea 1px solid;\r\n  overflow: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n/*** Search area ***/\r\n\r\n.searchArea {\r\n  /* margin: auto; */\r\n  width: 100%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 50px;\r\n  /* margin-bottom: 50px; */\r\n  padding: 0 15px;\r\n}\r\n\r\n.searchArea i {\r\n  font-size: 20px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.searchItem {\r\n  padding: 7px 12px;\r\n  margin: 5px 7px;\r\n  font-size: 14px;\r\n  border-radius: 25px;\r\n  font-weight: 500;\r\n  cursor: default;\r\n  background-color: #f1eff4;\r\n}\r\n\r\n.searchItem:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.searchItem i {\r\n  margin-left: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n/*** Recipe scroll ***/\r\n\r\n.recipeScroll {\r\n  flex-grow: 1;\r\n  display: flex;\r\n  flex-direction: row;\r\n  /* justify-content: center; */\r\n  /* margin: 0 30px; */\r\n  padding-left: 250px;\r\n  box-sizing: border-box;\r\n  align-items: center;\r\n  overflow: hidden;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n.proMsg {\r\n  width: 100%;\r\n  text-align: right;\r\n  padding: 15px;\r\n  box-sizing: border-box;\r\n  color: rgb(107, 107, 107);\r\n}\r\n\r\n/*** Top table ***/\r\n\r\n.topRec {\r\n  height: 100%;\r\n  width: 450px;\r\n  padding: 20px;\r\n}\r\n\r\n.tableControls {\r\n  width: 100%;\r\n  margin: auto;\r\n  margin-top: 10px;\r\n  margin-bottom: 20px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  font-size: 20px;\r\n}\r\n\r\n.hotTopToggle {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.httItem {\r\n  cursor: pointer;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.httItem:nth-child(1) {\r\n  margin-right: 10px;\r\n  padding-right: 10px;\r\n  border-right: #cfcfcf 2px solid;\r\n}\r\n\r\n.hotSelected {\r\n  color: #ea5f1e;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.topSelected {\r\n  color: #4286f5;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\n/*** Drop down ***/\r\n\r\n.topLength {\r\n  opacity: 0;\r\n  transition: all 0.2s ease-in-out;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  font-size: inherit;\r\n}\r\n\r\n.shown {\r\n  opacity: 1;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.menu,\r\n.dropMenu {\r\n  list-style-type: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  right: 0;\r\n  text-align: right;\r\n  background-color: #f8f9fa;\r\n}\r\n\r\n.menuItem {\r\n  position: relative;\r\n  text-decoration: none;\r\n  display: block;\r\n}\r\n\r\n.currentTime {\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n\r\n.dropMenu {\r\n  display: none;\r\n  position: absolute;\r\n}\r\n\r\n.dropMenuItem {\r\n  color: #000;\r\n  cursor: pointer;\r\n}\r\n\r\n.dropMenuItem:hover {\r\n  color: #4286f5;\r\n}\r\n\r\n.showMenu {\r\n  display: block;\r\n}\r\n\r\n/*** Top recipe table ***/\r\n\r\n.topRec table {\r\n  display: inline-block;\r\n  font-family: inherit;\r\n  margin: auto;\r\n  background-color: rgba(255, 255, 255, 0);\r\n}\r\n\r\nth,\r\ntd {\r\n  vertical-align: middle;\r\n  transition: all 0.2s ease-in-out;\r\n  width: 945px;\r\n}\r\n\r\nth {\r\n  font-size: 13px;\r\n}\r\n\r\ntd {\r\n  font-size: 15px;\r\n}\r\n\r\n.elementRow:hover {\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n  transition: all 0.2s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\n.topRow {\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 5px 0;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  /* justify-content: center; */\r\n}\r\n\r\n.counter {\r\n  font-size: 20px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.topRowImage {\r\n  height: 50px;\r\n  width: 50px;\r\n  min-width: 50px;\r\n  margin-right: 10px;\r\n  border-radius: 8px;\r\n  background-color: #f1f1f5;\r\n}\r\n\r\n.topRowImage img {\r\n  height: 100%;\r\n  width: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  border-radius: 8px;\r\n}\r\n\r\n/**********************************************************************/\r\n\r\n/***  Featured box ***/\r\n\r\n.featured {\r\n  background-color: #fff;\r\n  border-radius: 8px;\r\n  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.09), 0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 8px 0 rgba(0, 0, 0, 0.08);\r\n  border: rgb(235, 235, 235) solid 1px;\r\n  padding: 20px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n/***  Trending box ***/\r\n\r\n.trending {\r\n  background-color: #fff;\r\n  border-radius: 8px;\r\n  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.09), 0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 8px 0 rgba(0, 0, 0, 0.08);\r\n  border: rgb(235, 235, 235) solid 1px;\r\n  padding: 20px;\r\n}\r\n\r\n.trending h3 {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.trendItem {\r\n  background-color: #f1f1f5;\r\n  color: #fff;\r\n  margin: 15px 0 0 0;\r\n  border-radius: 5px;\r\n  padding-top: 10px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  height: 55px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  display: flex;\r\n  position: relative;\r\n  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.trendItem:hover {\r\n  background-color: #ff6e9e;\r\n}\r\n\r\n.trendItem:nth-child(1) {\r\n  background-color: #ea1e63;\r\n}\r\n\r\n.trendItem:nth-child(2) {\r\n  background-color: #4286f5;\r\n}\r\n\r\n.trendItem:nth-child(3) {\r\n  background-color: #8bc24a;\r\n}\r\n\r\n.trendItem:nth-child(4) {\r\n  background-color: #d177f6;\r\n}\r\n\r\n.trendItem:nth-child(5) {\r\n  background-color: #ff9700;\r\n}\r\n\r\n.trendInfo {\r\n  font-size: 14px;\r\n  text-align: left;\r\n}\r\n\r\n.trendInfo p {\r\n  font-size: 12px;\r\n}\r\n\r\n.trendAmount {\r\n  position: absolute;\r\n  bottom: 10px;\r\n  right: 10px;\r\n  font-size: 12px;\r\n}\r\n\r\n.hidden {\r\n  visibility: hidden;\r\n}\r\n\r\n/*** Discover more ***/\r\n\r\n/* .discoverMore {\r\n  background-color: blue;\r\n  margin: auto;\r\n  margin-top: 75px;\r\n  margin-bottom: 75px;\r\n  height: 40px;\r\n  width: 150px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n} */\r\n\r\n.discoverMore {\r\n  margin: auto;\r\n  margin-top: 75px;\r\n  margin-bottom: 75px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.moreRecipes {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.recipeCard {\r\n  background-color: #fff;\r\n  min-width: 650px;\r\n  min-height: 450px;\r\n  height: 450px;\r\n  border-radius: 25px;\r\n  margin-right: 700px;\r\n  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);\r\n  position: relative;\r\n}\r\n\r\n.mainImg {\r\n  height: 65%;\r\n  background-color: #f1f1f5;\r\n  border-top-left-radius: 25px;\r\n  border-top-right-radius: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n.mainImg img {\r\n  height: 100%;\r\n  width: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  border-top-left-radius: 25px;\r\n  border-top-right-radius: 25px;\r\n}\r\n\r\n.hidden {\r\n  visibility: hidden;\r\n}\r\n\r\n.rInfo {\r\n  height: 35%;\r\n  padding: 20px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.rTitle {\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\n.rDetails {\r\n  padding-top: 10px;\r\n  font-size: 14px;\r\n}\r\n\r\n.rDetails span {\r\n  color: #4286f5;\r\n}\r\n\r\n.rInteraction {\r\n  width: 100%;\r\n  position: absolute;\r\n  bottom: 20px;\r\n  left: 0;\r\n  padding: 0 20px;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  font-size: 18px;\r\n}\r\n\r\n.interactionButtons i {\r\n  margin: 0 9px;\r\n  font-size: 18px;\r\n  cursor: pointer;\r\n}\r\n\r\n/***  General code ***/\r\n\r\n.wide {\r\n  grid-column: 1/5;\r\n}\r\n\r\n.med {\r\n  grid-column: 1/4;\r\n}\r\n\r\n.saved {\r\n  color: #df2064;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBK0I7RUFDL0IsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0NBQ2Q7O0FBRUQsMEJBQTBCOztBQUMxQjtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FDcEI7O0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCOztBQUVELDJCQUEyQjs7QUFDM0I7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0NBQ3ZCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsb0JBQW9CO0NBQ3JCOztBQUVELG9CQUFvQjs7QUFDcEI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCOztBQUNEO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0NBQ3BCOztBQUNEO0VBQ0UsZUFBZTtDQUNoQjs7QUFDRDtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1oscUJBQWtCO0tBQWxCLGtCQUFrQjtFQUNsQixtQkFBbUI7Q0FDcEI7O0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsT0FBTztFQUNQLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWiwwQ0FBMEM7RUFDMUMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGlDQUFpQztDQUNsQzs7QUFDRDtFQUNFLFdBQVc7RUFDWCxpQ0FBaUM7Q0FDbEM7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsNEJBQTRCO0NBQzdCOztBQUNEO0VBQ0UsMEJBQTBCO0NBQzNCOztBQUVELDBCQUEwQjs7QUFDMUI7RUFDRSxpQ0FBaUM7RUFDakMsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0NBQ2pCOztBQUNEO0VBQ0UsOEJBQThCO0NBQy9COztBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtDQUN4Qjs7QUFDRDtFQUNFLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0Isb0JBQW9CO0VBQ3BCLG9CQUFvQjtDQUNyQjs7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFDRDtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixpQkFBaUI7Q0FDbEI7O0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtDQUNkOztBQUVELG1DQUFtQzs7QUFDbkM7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixpQkFBaUI7Q0FDbEI7O0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixzQkFBc0I7Q0FDdkI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0NBQ2pCOztBQUNEO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsb0JBQW9CO0NBQ3JCOztBQUNEO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixxQkFBa0I7S0FBbEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtDQUNyQjs7QUFDRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isd0NBQXdDO0VBQ3hDLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixPQUFPO0VBQ1AsUUFBUTtFQUNSLG9CQUFvQjtDQUNyQjs7QUFDRDtFQUNFLG9DQUFvQztFQUNwQyxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0VBQ1YseUNBQWlDO1VBQWpDLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsOENBQThDO0VBQzlDLG9CQUFvQjtDQUNyQjs7QUFDRDtFQUNFLHNCQUFzQjtDQUN2Qjs7QUFDRDtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtDQUNoQjs7QUFFRCxzQkFBc0I7O0FBQ3RCO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixpQ0FBaUM7Q0FDbEM7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx1QkFBdUI7Q0FDeEI7O0FBRUQscUJBQXFCOztBQUNyQjtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0NBQ2pCOztBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtDQUNwQjs7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtDQUMzQjs7QUFDRDtFQUNFLDJCQUEyQjtDQUM1Qjs7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7Q0FDakI7O0FBRUQsdUJBQXVCOztBQUN2QjtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtDQUN6Qjs7QUFFRDtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHVCQUF1QjtFQUN2QiwwQkFBMEI7Q0FDM0I7O0FBRUQsbUJBQW1COztBQUNuQjtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsY0FBYztDQUNmOztBQUNEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtDQUNqQjs7QUFDRDtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7Q0FDckI7O0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsaUNBQWlDO0NBQ2xDOztBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixnQ0FBZ0M7Q0FDakM7O0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsaUNBQWlDO0NBQ2xDOztBQUNEO0VBQ0UsZUFBZTtFQUNmLGlDQUFpQztDQUNsQzs7QUFFRCxtQkFBbUI7O0FBQ25CO0VBQ0UsV0FBVztFQUNYLGlDQUFpQztFQUNqQyxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixtQkFBbUI7Q0FDcEI7O0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsaUNBQWlDO0NBQ2xDOztBQUVEOztFQUVFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsVUFBVTtFQUNWLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsMEJBQTBCO0NBQzNCOztBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixlQUFlO0NBQ2hCOztBQUNEO0VBQ0UsMkJBQTJCO0VBQzNCLGdCQUFnQjtDQUNqQjs7QUFDRDtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7Q0FDcEI7O0FBQ0Q7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0NBQ2pCOztBQUNEO0VBQ0UsZUFBZTtDQUNoQjs7QUFDRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQsMEJBQTBCOztBQUMxQjtFQUNFLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHlDQUF5QztDQUMxQzs7QUFDRDs7RUFFRSx1QkFBdUI7RUFDdkIsaUNBQWlDO0VBQ2pDLGFBQWE7Q0FDZDs7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFDRDtFQUNFLHFDQUFxQztFQUNyQyxpQ0FBaUM7RUFDakMsZ0JBQWdCO0NBQ2pCOztBQUNEO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsOEJBQThCO0NBQy9COztBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtDQUNwQjs7QUFDRDtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsMEJBQTBCO0NBQzNCOztBQUNEO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixxQkFBa0I7S0FBbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtDQUNwQjs7QUFFRCx3RUFBd0U7O0FBRXhFLHVCQUF1Qjs7QUFDdkI7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlIQUFpSDtFQUNqSCxxQ0FBcUM7RUFDckMsY0FBYztFQUNkLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsb0JBQW9CO0NBQ3JCOztBQUVELHVCQUF1Qjs7QUFDdkI7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlIQUFpSDtFQUNqSCxxQ0FBcUM7RUFDckMsY0FBYztDQUNmOztBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUNEO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMENBQTBDO0NBQzNDOztBQUNEO0VBQ0UsMEJBQTBCO0NBQzNCOztBQUNEO0VBQ0UsMEJBQTBCO0NBQzNCOztBQUNEO0VBQ0UsMEJBQTBCO0NBQzNCOztBQUNEO0VBQ0UsMEJBQTBCO0NBQzNCOztBQUNEO0VBQ0UsMEJBQTBCO0NBQzNCOztBQUNEO0VBQ0UsMEJBQTBCO0NBQzNCOztBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjs7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRCx1QkFBdUI7O0FBQ3ZCOzs7Ozs7Ozs7O0lBVUk7O0FBQ0o7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLG9CQUFvQjtDQUNyQjs7QUFDRDtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsMENBQTBDO0VBQzFDLG1CQUFtQjtDQUNwQjs7QUFDRDtFQUNFLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5QixnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHFCQUFrQjtLQUFsQixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLDhCQUE4QjtDQUMvQjs7QUFDRDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFDRDtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsdUJBQXVCO0NBQ3hCOztBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0NBQ2pCOztBQUNEO0VBQ0UsZUFBZTtDQUNoQjs7QUFDRDtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtDQUNqQjs7QUFDRDtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0NBQ2pCOztBQUVELHVCQUF1Qjs7QUFDdkI7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGJvYXJkIHtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAqL1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxODAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4vKioqICBXZWxjb21lIG1lc3NhZ2UgKioqL1xyXG4ud2VsY29tZU1lc3NhZ2Uge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG59XHJcbi53ZWxjb21lTWVzc2FnZSBsYWJlbCB7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbi8qKiogIE1haW4gd2luZG93IGFyZWEgKioqL1xyXG4ud3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG59XHJcblxyXG4uYnJlYWtMaW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbi8qKiogQ2F0ZWdvcmllcyAqKiovXHJcbi5jYXRlZ29yaWVzIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG4uY2F0ZWdvcnlCb3gge1xyXG4gIGhlaWdodDogODBweDtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gIG1hcmdpbjogMCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmNTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNhdGVnb3J5Qm94Om50aC1jaGlsZCgxKSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuLmNhdGVnb3J5Qm94IGltZyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uY2F0T3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNywgMjcsIDI3LCAwLjMwOCk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5jYXRlZ29yeUJveDpob3ZlciAuY2F0T3ZlcmxheSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNhdGVnb3JpZXM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBoZWlnaHQ6IDRweDtcclxufVxyXG4uY2F0ZWdvcmllczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjAwO1xyXG59XHJcbi5jYXRlZ29yaWVzOmhvdmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYTtcclxufVxyXG5cclxuLyoqKiAgVG9wICdmcm9udCcgYm94ICoqKi9cclxuLmZyb250IHtcclxuICBib3JkZXItYm90dG9tOiAjZWFlYWVhIDFweCBzb2xpZDtcclxuICB3aWR0aDogOTUlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuLmZyb250Om50aC1jaGlsZCgxKSB7XHJcbiAgYm9yZGVyLXRvcDogI2VhZWFlYSAxcHggc29saWQ7XHJcbn1cclxuLmNvb2tib29rVGl0bGUgcCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiByZ2IoODgsIDg4LCA4OCk7XHJcbn1cclxuLnRvcEFyZWEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4udG9wQXJlYSBpIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJveENvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uaXRlbUJveCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAyMTBweDtcclxufVxyXG5cclxuLyoqKiBTdHlsZSBmb3IgdGhlIGltYWdlIGJveGVzICoqKi9cclxuLmNvb2tib29rcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uY29va2Jvb2sge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICB3aWR0aDogMTB2dztcclxuICBoZWlnaHQ6IDEwdnc7XHJcbiAgbWluLXdpZHRoOiAxNzBweDtcclxuICBtaW4taGVpZ2h0OiAxNzBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udEltYWdlIHtcclxuICB3aWR0aDogMjEwcHg7XHJcbiAgaGVpZ2h0OiAyMTBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udFBpYyB7XHJcbiAgd2lkdGg6IDIxMHB4O1xyXG4gIGhlaWdodDogMjEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWY1O1xyXG59XHJcbi50UGljIGltZyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuLnRJbWFnZU92ZXJsYXkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgMzksIDAuNik7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG4udEltYWdlOmhvdmVyIC50SW1hZ2VPdmVybGF5IHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi50SW1hZ2VGYXYge1xyXG4gIGZvbnQtc2l6ZTogMjRwdDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLnRJbmZvIHtcclxuICBwYWRkaW5nOiAxMHB4IDAgMCA1cHg7XHJcbiAgZm9udC1zaXplOiAxMHB0O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiUHJvZHVjdFNhbnNSZWd1bGFyXCIsIHNhbnMtc2VyaWY7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxufVxyXG4udEluZm8tdGl0bGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4udEluZm8tdGl0bGU6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udEZvbCB7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBmb250LXNpemU6IDlwdDtcclxufVxyXG5cclxuLyoqKiBUcmVuZGluZyBib3ggKioqL1xyXG4ucmVjQm94IHtcclxuICB3aWR0aDogOTUlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItYm90dG9tOiAjZWFlYWVhIDFweCBzb2xpZDtcclxufVxyXG5cclxuLmZlYXR1cmVkUmVjaXBlIHtcclxuICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICB3aWR0aDogNzUwcHg7XHJcbiAgcGFkZGluZzogMCAzMHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICAvKiBtYXJnaW46IGF1dG87ICovXHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGJvcmRlci1yaWdodDogI2VhZWFlYSAxcHggc29saWQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi8qKiogU2VhcmNoIGFyZWEgKioqL1xyXG4uc2VhcmNoQXJlYSB7XHJcbiAgLyogbWFyZ2luOiBhdXRvOyAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICAvKiBtYXJnaW4tYm90dG9tOiA1MHB4OyAqL1xyXG4gIHBhZGRpbmc6IDAgMTVweDtcclxufVxyXG4uc2VhcmNoQXJlYSBpIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5zZWFyY2hJdGVtIHtcclxuICBwYWRkaW5nOiA3cHggMTJweDtcclxuICBtYXJnaW46IDVweCA3cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZWZmNDtcclxufVxyXG4uc2VhcmNoSXRlbTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLnNlYXJjaEl0ZW0gaSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qKiogUmVjaXBlIHNjcm9sbCAqKiovXHJcbi5yZWNpcGVTY3JvbGwge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgLyogbWFyZ2luOiAwIDMwcHg7ICovXHJcbiAgcGFkZGluZy1sZWZ0OiAyNTBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxufVxyXG5cclxuLnByb01zZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGNvbG9yOiByZ2IoMTA3LCAxMDcsIDEwNyk7XHJcbn1cclxuXHJcbi8qKiogVG9wIHRhYmxlICoqKi9cclxuLnRvcFJlYyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA0NTBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi50YWJsZUNvbnRyb2xzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uaG90VG9wVG9nZ2xlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLmh0dEl0ZW0ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG4uaHR0SXRlbTpudGgtY2hpbGQoMSkge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1yaWdodDogI2NmY2ZjZiAycHggc29saWQ7XHJcbn1cclxuLmhvdFNlbGVjdGVkIHtcclxuICBjb2xvcjogI2VhNWYxZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG4udG9wU2VsZWN0ZWQge1xyXG4gIGNvbG9yOiAjNDI4NmY1O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4vKioqIERyb3AgZG93biAqKiovXHJcbi50b3BMZW5ndGgge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcbi5zaG93biB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm1lbnUsXHJcbi5kcm9wTWVudSB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuLm1lbnVJdGVtIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5jdXJyZW50VGltZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kcm9wTWVudSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmRyb3BNZW51SXRlbSB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kcm9wTWVudUl0ZW06aG92ZXIge1xyXG4gIGNvbG9yOiAjNDI4NmY1O1xyXG59XHJcbi5zaG93TWVudSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qKiogVG9wIHJlY2lwZSB0YWJsZSAqKiovXHJcbi50b3BSZWMgdGFibGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxufVxyXG50aCxcclxudGQge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgd2lkdGg6IDk0NXB4O1xyXG59XHJcbnRoIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxudGQge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uZWxlbWVudFJvdzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udG9wUm93IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNXB4IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbn1cclxuLmNvdW50ZXIge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnRvcFJvd0ltYWdlIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgbWluLXdpZHRoOiA1MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmNTtcclxufVxyXG4udG9wUm93SW1hZ2UgaW1nIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qKiogIEZlYXR1cmVkIGJveCAqKiovXHJcbi5mZWF0dXJlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA5KSwgMCAzcHggM3B4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICBib3JkZXI6IHJnYigyMzUsIDIzNSwgMjM1KSBzb2xpZCAxcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qKiogIFRyZW5kaW5nIGJveCAqKiovXHJcbi50cmVuZGluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA5KSwgMCAzcHggM3B4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICBib3JkZXI6IHJnYigyMzUsIDIzNSwgMjM1KSBzb2xpZCAxcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG4udHJlbmRpbmcgaDMge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnRyZW5kSXRlbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmNTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW46IDE1cHggMCAwIDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIGhlaWdodDogNTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcbi50cmVuZEl0ZW06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjZlOWU7XHJcbn1cclxuLnRyZW5kSXRlbTpudGgtY2hpbGQoMSkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTFlNjM7XHJcbn1cclxuLnRyZW5kSXRlbTpudGgtY2hpbGQoMikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Mjg2ZjU7XHJcbn1cclxuLnRyZW5kSXRlbTpudGgtY2hpbGQoMykge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YmMyNGE7XHJcbn1cclxuLnRyZW5kSXRlbTpudGgtY2hpbGQoNCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMTc3ZjY7XHJcbn1cclxuLnRyZW5kSXRlbTpudGgtY2hpbGQoNSkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjk3MDA7XHJcbn1cclxuLnRyZW5kSW5mbyB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnRyZW5kSW5mbyBwIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnRyZW5kQW1vdW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4vKioqIERpc2NvdmVyIG1vcmUgKioqL1xyXG4vKiAuZGlzY292ZXJNb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDc1cHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0gKi9cclxuLmRpc2NvdmVyTW9yZSB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNzVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm1vcmVSZWNpcGVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnJlY2lwZUNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbWluLXdpZHRoOiA2NTBweDtcclxuICBtaW4taGVpZ2h0OiA0NTBweDtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA3MDBweDtcclxuICBib3gtc2hhZG93OiAwIDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm1haW5JbWcge1xyXG4gIGhlaWdodDogNjUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1haW5JbWcgaW1nIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcclxufVxyXG4uaGlkZGVuIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLnJJbmZvIHtcclxuICBoZWlnaHQ6IDM1JTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLnJUaXRsZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uckRldGFpbHMge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uckRldGFpbHMgc3BhbiB7XHJcbiAgY29sb3I6ICM0Mjg2ZjU7XHJcbn1cclxuLnJJbnRlcmFjdGlvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICBsZWZ0OiAwO1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmludGVyYWN0aW9uQnV0dG9ucyBpIHtcclxuICBtYXJnaW46IDAgOXB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qKiogIEdlbmVyYWwgY29kZSAqKiovXHJcbi53aWRlIHtcclxuICBncmlkLWNvbHVtbjogMS81O1xyXG59XHJcbi5tZWQge1xyXG4gIGdyaWQtY29sdW1uOiAxLzQ7XHJcbn1cclxuXHJcbi5zYXZlZCB7XHJcbiAgY29sb3I6ICNkZjIwNjQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard\">\r\n  <div class=\"categories\">\r\n    <div class=\"categoryBox\" *ngFor=\"let cuisine of cuisines\">\r\n      <img src=\"../../../assets/images/cuisines/{{ cuisine }}.jpg\" (click)=\"searchCuisine(cuisine)\" [ngClass]=\"{ hidden: !cuisine }\" />\r\n      <div class=\"catOverlay\">\r\n        <p>{{ cuisine | textCapitalise }}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"wrapper\">\r\n    <div class=\"front\" *ngFor=\"let library of dash?.libraries\">\r\n      <div class=\"topArea\">\r\n        <div class=\"cookbookTitle\">\r\n          <h3>{{ library.title }}</h3>\r\n          <p>{{ library.description }}</p>\r\n        </div>\r\n        <div class=\"frontNav\">\r\n          <i class=\"fas fa-chevron-left\" (click)=\"scrollCookbooks('left', ref)\" [ngClass]=\"{ unclickable: cookbookPos === 'left' }\"></i>\r\n          <i class=\"fas fa-chevron-right\" (click)=\"scrollCookbooks('right', ref)\" [ngClass]=\"{ unclickable: cookbookPos === 'right' }\" class=\"fas fa-chevron-right\" style=\"margin-left: 15px; padding-right: 20px\"></i>\r\n        </div>\r\n      </div>\r\n      <div class=\"boxContainer\">\r\n        <div class=\"itemBox\" *ngFor=\"let cookbook of library.cookbooks\">\r\n          <div class=\"tImage\">\r\n            <div class=\"tPic\">\r\n              <img [ngClass]=\"{ hidden: !cookbook?.image }\" src=\"{{ generalService.getImageLink(cookbook?.image) }}\" #rImg />\r\n            </div>\r\n            <div class=\"tImageOverlay\" (click)=\"viewCookbook(cookbook)\">\r\n              <i class=\"tImageFav fas fa-heart\" [ngClass]=\"{ saved: cookbook.saved == true }\" (click)=\"$event.stopPropagation(); toggleSave(cookbook)\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"tInfo\">\r\n            <h4 class=\"tInfo-title\" (click)=\"viewCookbook(cookbook)\">{{ cookbook.title }}</h4>\r\n            <p>{{ cookbook.description }}</p>\r\n            <p class=\"tFol\">{{ cookbook.followers | number: \".2\" }} followers.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"recBox\">\r\n      <div class=\"featuredRecipe\">\r\n        <div class=\"searchArea\">\r\n          <i class=\"fas fa-chart-line\" title=\"Trending searches\"></i>\r\n          <div class=\"searchItem\" (click)=\"searchQuery(query.query)\" *ngFor=\"let query of dash?.searches; let i = index\">\"{{ query.query }}\"</div>\r\n        </div>\r\n        <div class=\"recipeScroll\" #recipeScroll>\r\n          <div class=\"recipeCard\" *ngFor=\"let recipe of promotedRecipes\">\r\n            <div class=\"mainImg\">\r\n              <img src=\"{{ generalService.getImageLink(recipe?.image) }}\" [ngClass]=\"{ hidden: !recipe.image }\" />\r\n            </div>\r\n            <div class=\"rInfo\">\r\n              <div class=\"rTitle\">{{ recipe.title }}</div>\r\n              <div class=\"rDetails\">\r\n                {{ recipe.author }} ● <span>{{ recipe.mealType }}</span> ● {{ generalService.getTimeAgo(recipe.timestamp) }}\r\n              </div>\r\n              <div class=\"rInteraction\">\r\n                <p>{{ recipe.score }} points</p>\r\n                <p><i class=\"far fa-clock\" style=\"padding-right:3px\"></i>{{ generalService.getTotalTime(recipe.cookTime, recipe.prepTime) }}</p>\r\n                <p>\r\n                  Servings: <span style=\"font-weight: bold\">{{ recipe.servings }}</span>\r\n                </p>\r\n                <p>{{ generalService.getDifficulty(recipe.difficulty) }}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"proMsg\"><i class=\"fas fa-ad\"></i> Promoted recipes</div>\r\n      </div>\r\n      <div class=\"topRec\">\r\n        <div class=\"tableControls\">\r\n          <div class=\"hotTopToggle\">\r\n            <div class=\"httItem\" (click)=\"topType = 'hot'; changeTableData()\"><i class=\"fas fa-fire\" [ngClass]=\"{ hotSelected: topType == 'hot' }\"></i> hot</div>\r\n            <div class=\"httItem\" (click)=\"topType = 'top'; changeTableData()\"><i class=\"fas fa-arrow-up\" [ngClass]=\"{ topSelected: topType == 'top' }\"></i> top</div>\r\n          </div>\r\n          <div class=\"topLength\" [ngClass]=\"{ shown: topType == 'top' }\">\r\n            &nbsp;of<span *ngIf=\"topTime != 'all'\">&nbsp;the</span>&nbsp;\r\n            <span>\r\n              <ul class=\"menu\" (mouseleave)=\"openDrop = false\">\r\n                <li class=\"menuItem\">\r\n                  <span class=\"currentTime\" (click)=\"openDrop = true\">{{ topTime }}</span>\r\n                  <ul class=\"dropMenu\" [ngClass]=\"{ showMenu: openDrop == true }\">\r\n                    <li *ngFor=\"let time of topTimes\">\r\n                      <span class=\"dropMenuItem\" *ngIf=\"time != topTime\" (click)=\"topTime = time; openDrop = false; changeTableData()\">{{ time }}</span>\r\n                    </li>\r\n                  </ul>\r\n                </li>\r\n              </ul>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <table mat-table [dataSource]=\"topTable\">\r\n          <ng-container matColumnDef=\"recipes\">\r\n            <td mat-cell *matCellDef=\"let recipe; let i = index\">\r\n              <div class=\"topRow\">\r\n                <div class=\"counter\">#{{ i + 1 }}</div>\r\n                <div class=\"topRowImage\">\r\n                  <img [ngClass]=\"{ hidden: !recipe?.image }\" src=\"{{ generalService.getImageLink(recipe?.image) }}\" #rImg />\r\n                </div>\r\n                <div>{{ recipe.title | textLimit: 45 }}</div>\r\n              </div>\r\n            </td>\r\n          </ng-container>\r\n          <tr mat-row *matRowDef=\"let myRowData; columns: ['recipes']\" (click)=\"viewRecipe(myRowData)\" class=\"elementRow\"></tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"featured med\">\r\n      <h3>Feature recipes</h3>\r\n      <div class=\"recipeCard\">\r\n        <div class=\"mainImg\"></div>\r\n        <div class=\"rInfo\">\r\n          <div class=\"rTitle\">Snowman biscuits with icing on their faces and a hat as well. Lots of decoration and very delicious</div>\r\n          <div class=\"rDetails\">Thomas Bunyan ● <span>Snack</span> ● 2 days ago</div>\r\n          <div class=\"rInteraction\">\r\n            <p>149 points</p>\r\n            <p><i class=\"far fa-clock\" style=\"padding-right:3px\"></i>1:15</p>\r\n            <p>Serves: <span style=\"font-weight: bold\">20</span></p>\r\n            <p>Easy</p>\r\n            <div class=\"interactionButtons\"><i class=\"fas fa-arrow-up\"></i> <i class=\"fas fa-arrow-down\"></i> <i class=\"fas fa-star\"></i></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"trending\">\r\n      <h3>Top recipes</h3>\r\n      <div class=\"trendingList\">\r\n        <div class=\"trendItem\" *ngFor=\"let recipe of dash?.top.day\" (click)=\"viewRecipe(recipe)\">\r\n          <div class=\"trendInfo\">\r\n            {{ recipe.title }}\r\n            <p>{{ recipe.description }}</p>\r\n          </div>\r\n          <div class=\"trendAmount\">{{ recipe.views }}</div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidenav/sidenav.service */ "./src/app/components/sidenav/sidenav.service.ts");
/* harmony import */ var _services_cookbook_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cookbook.service */ "./src/app/services/cookbook.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/general.service */ "./src/app/services/general.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(titleService, router, sidenavService, cookbookService, userService, generalService) {
        this.titleService = titleService;
        this.router = router;
        this.sidenavService = sidenavService;
        this.cookbookService = cookbookService;
        this.userService = userService;
        this.generalService = generalService;
        this.cookbooks = [];
        this.userRecipes = [];
        this.loading = true;
        this.searchQueries = [];
        this.cuisines = ["american", "british", "caribbean", "chinese", "french", "greek", "indian", "italian", "japanese", "mediterranean", "mexican", "moroccan", "spanish", "thai", "turkish", "vietnamese"];
        this.promotedRecipes = [];
        this.topType = "hot";
        this.topTime = "day";
        this.topTimes = ["day", "week", "month", "all"];
        this.topTable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("Dashboard");
        this.sidenavService.open();
        this.userId = this.generalService.getUser().id;
        this.generalService.getDash().subscribe(function (data) {
            _this.dash = data.dash;
            _this.promotedRecipes = _this.dash.recipes;
            _this.dash.top.day = _this.dash.top.day.splice(0, 5);
            _this.userService.getUserData().subscribe(function (data) {
                _this.userCookbooks = data.cookbooks;
                _this.topTable = _this.dash.trending;
                _this.scrollRecipes();
                _this.dash.libraries.forEach(function (e) {
                    e.cookbooks.forEach(function (x) {
                        var indexSave = _this.userCookbooks.saved.findIndex(function (y) { return y.cookbook._id === x._id; });
                        if (indexSave !== -1) {
                            x.saved = true;
                        }
                    });
                });
                _this.loading = false;
            });
        });
    };
    DashboardComponent.prototype.scrollRecipes = function () {
        var _this = this;
        var scroll = setInterval(function () {
            var amount = _this.recipeScroll.nativeElement.scrollLeft;
            if (amount >= _this.recipeScroll.nativeElement.scrollWidth - _this.recipeScroll.nativeElement.clientWidth) {
                _this.recipeScroll.nativeElement.scrollLeft = 0;
            }
            else {
                _this.recipeScroll.nativeElement.scrollLeft = amount + 1350;
            }
        }, 5000);
    };
    DashboardComponent.prototype.viewRecipe = function (recipe) {
        this.router.navigate(["/recipe", recipe._id]);
    };
    DashboardComponent.prototype.viewCookbook = function (cookbook) {
        this.router.navigate(["/cookbook", cookbook._id]);
    };
    DashboardComponent.prototype.toggleSave = function (cookbook) {
        var _this = this;
        this.userService.addUserData({ id: this.userId, data: this.userCookbooks }, { data: "cookbooks", type: "save" }, cookbook._id).subscribe(function (data) {
            if (!data.success) {
                console.log("Couldn't add cookbook");
            }
            else {
                _this.userCookbooks = data.cookbooks;
                cookbook.saved = !cookbook.saved;
            }
        });
    };
    DashboardComponent.prototype.searchQuery = function (query) {
        this.router.navigate(["/results"], {
            queryParams: { search_query: query }
        });
    };
    DashboardComponent.prototype.searchCuisine = function (cuisine) {
        this.router.navigate(["/results"], {
            queryParams: { cuisine: cuisine }
        });
    };
    DashboardComponent.prototype.changeTableData = function () {
        if (this.topType === "top") {
            switch (this.topTime) {
                case "day":
                    this.topTable = this.dash.top.day;
                    break;
                case "week":
                    this.topTable = this.dash.top.week;
                    break;
                case "month":
                    this.topTable = this.dash.top.month;
                    break;
                case "all":
                    this.topTable = this.dash.top.all;
                    break;
            }
        }
        else {
            this.topTable = this.dash.trending;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("recipeScroll"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DashboardComponent.prototype, "recipeScroll", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-dashboard",
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_2__["SidenavService"],
            _services_cookbook_service__WEBPACK_IMPORTED_MODULE_3__["CookbookService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services_general_service__WEBPACK_IMPORTED_MODULE_6__["GeneralService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/history/history.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/history/history.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*** History ***/\r\n.history {\r\n  min-height: calc(100vh - 60px);\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n.wrapper {\r\n  width: 1350px;\r\n  min-height: 100%;\r\n  margin: auto;\r\n}\r\n.wrapper h1 {\r\n  font-size: 50px;\r\n  margin-top: 40px;\r\n  margin-bottom: 10px;\r\n}\r\n/*** Search area ***/\r\n.searchArea {\r\n  margin: auto;\r\n  width: 100%;\r\n  padding: 20px 0px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n.searchItem {\r\n  padding: 7px 12px;\r\n  margin: 5px 7px;\r\n  font-size: 14px;\r\n  border-radius: 25px;\r\n  font-weight: 500;\r\n  cursor: default;\r\n  background-color: #f1eff4;\r\n}\r\n.searchItem:hover {\r\n  text-decoration: underline;\r\n}\r\n.searchItem i {\r\n  margin-left: 5px;\r\n  cursor: pointer;\r\n}\r\n/*** History area ***/\r\n.historyArea {\r\n  margin-top: 20px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n.historyTile {\r\n  padding: 10px;\r\n  margin: 10px;\r\n  width: 175px;\r\n}\r\n.historyImage {\r\n  width: 175px;\r\n  height: 175px;\r\n  border-radius: 25px;\r\n  background-color: #f1eff4;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n.historyImage img{\r\n  height: 100%;\r\n  width: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  border-radius: 25px;\r\n}\r\n.hidden{\r\n  visibility:hidden;\r\n}\r\n.historyOverlay {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(39, 39, 39, 0.2);\r\n  opacity: 0;\r\n  transition: all 0.3s ease-in-out 0s;\r\n  position: absolute;\r\n  z-index: 10;\r\n  top: 0;\r\n  left: 0;\r\n  border-radius: 25px;\r\n}\r\n.historyImage:hover .historyOverlay {\r\n  transition: all 0.3s ease-in-out 0s;\r\n  opacity: 1;\r\n}\r\n.historyInfo {\r\n  padding-top: 5px;\r\n  font-size: 10pt;\r\n  text-align: left;\r\n  font-family: \"ProductSansRegular\", sans-serif;\r\n  width: 90%;\r\n  margin: auto;\r\n}\r\n.historyInfo h3:hover {\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n/*** General elements ***/\r\n.breakLine {\r\n  width: 100%;\r\n  height: 2px;\r\n  background-color: #eaeaea;\r\n  border-radius: 25px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUFDakI7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixhQUFhO0NBQ2Q7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0JBQW9CO0NBQ3JCO0FBRUQscUJBQXFCO0FBQ3JCO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix3QkFBd0I7Q0FDekI7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsMkJBQTJCO0NBQzVCO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0NBQ2pCO0FBRUQsc0JBQXNCO0FBQ3RCO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsd0JBQXdCO0NBQ3pCO0FBRUQ7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1oscUJBQWtCO0tBQWxCLGtCQUFrQjtFQUNsQixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLGtCQUFrQjtDQUNuQjtBQUVEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix3Q0FBd0M7RUFDeEMsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLE9BQU87RUFDUCxRQUFRO0VBQ1Isb0JBQW9CO0NBQ3JCO0FBRUQ7RUFDRSxvQ0FBb0M7RUFDcEMsV0FBVztDQUNaO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiw4Q0FBOEM7RUFDOUMsV0FBVztFQUNYLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsMkJBQTJCO0VBQzNCLGdCQUFnQjtDQUNqQjtBQUVELDBCQUEwQjtBQUMxQjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLG9CQUFvQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEhpc3RvcnkgKioqL1xyXG4uaGlzdG9yeSB7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLndyYXBwZXIge1xyXG4gIHdpZHRoOiAxMzUwcHg7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLndyYXBwZXIgaDEge1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi8qKiogU2VhcmNoIGFyZWEgKioqL1xyXG4uc2VhcmNoQXJlYSB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5zZWFyY2hJdGVtIHtcclxuICBwYWRkaW5nOiA3cHggMTJweDtcclxuICBtYXJnaW46IDVweCA3cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZWZmNDtcclxufVxyXG4uc2VhcmNoSXRlbTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLnNlYXJjaEl0ZW0gaSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qKiogSGlzdG9yeSBhcmVhICoqKi9cclxuLmhpc3RvcnlBcmVhIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaGlzdG9yeVRpbGUge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHdpZHRoOiAxNzVweDtcclxufVxyXG4uaGlzdG9yeUltYWdlIHtcclxuICB3aWR0aDogMTc1cHg7XHJcbiAgaGVpZ2h0OiAxNzVweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWVmZjQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaGlzdG9yeUltYWdlIGltZ3tcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG4uaGlkZGVue1xyXG4gIHZpc2liaWxpdHk6aGlkZGVuO1xyXG59XHJcblxyXG4uaGlzdG9yeU92ZXJsYXkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgMzksIDAuMik7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG5cclxuLmhpc3RvcnlJbWFnZTpob3ZlciAuaGlzdG9yeU92ZXJsYXkge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLmhpc3RvcnlJbmZvIHtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTBwdDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlByb2R1Y3RTYW5zUmVndWxhclwiLCBzYW5zLXNlcmlmO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5oaXN0b3J5SW5mbyBoMzpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKioqIEdlbmVyYWwgZWxlbWVudHMgKioqL1xyXG4uYnJlYWtMaW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/history/history.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/history/history.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"history\">\n  <div class=\"wrapper\">\n    <h1>History</h1>\n    <div class=\"breakLine\"></div>\n    <div class=\"searchArea\" *ngIf=\"searchQueries.length\">\n      <div class=\"searchItem\" (click)=\"searchQuery(query)\" *ngFor=\"let query of searchQueries; let i = index\">\"{{ query }}\"<i class=\"fas fa-times\" (click)=\"$event.stopPropagation(); removeQuery(i)\"></i></div>\n    </div>\n    <div class=\"breakLine\" *ngIf=\"searchQueries.length\"></div>\n    <div class=\"historyArea\">\n      <div class=\"historyTile\" *ngFor=\"let item of history\">\n        <div class=\"historyImage\" (click)=\"viewItem(item)\">\n          <img *ngIf=\"item.cookbook == undefined\" [ngClass]=\"{ hidden: !item?.recipe.image }\" src=\"{{ generalService.getImageLink(item?.recipe.image) }}\" #rImg />\n          <img *ngIf=\"item.cookbook != undefined\" [ngClass]=\"{ hidden: !item?.cookbook.image }\" src=\"{{ generalService.getImageLink(item?.cookbook.image) }}\" #rImg />\n          <div class=\"historyOverlay\"></div>\n        </div>\n        <div class=\"historyInfo\">\n          <h3 (click)=\"viewItem(item)\" *ngIf=\"item.cookbook == undefined\">{{ item.recipe.title | textLimit: 50 }}</h3>\n          <h3 (click)=\"viewItem(item)\" *ngIf=\"item.cookbook != undefined\">{{ item.cookbook.title | textLimit: 50 }}</h3>\n          <p *ngIf=\"item.cookbook == undefined\">{{ item.recipe.description | textLimit: 50 }}</p>\n          <p *ngIf=\"item.cookbook != undefined\">{{ item.cookbook.description | textLimit: 50 }}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/history/history.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/history/history.component.ts ***!
  \*********************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(userService, titleService, router, generalService) {
        this.userService = userService;
        this.titleService = titleService;
        this.router = router;
        this.generalService = generalService;
        this.searchQueries = [];
        this.history = [];
    }
    HistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("History");
        this.userService.getUserData().subscribe(function (data) {
            _this.userData = data;
            _this.compileData();
        });
    };
    HistoryComponent.prototype.compileData = function () {
        this.searchQueries = this.userData.history.slice();
        var recipes = this.userData.recipes.history.slice();
        var cookbooks = this.userData.cookbooks.history.slice();
        this.history = recipes.concat(cookbooks).sort(function (a, b) {
            return b.timestamp - a.timestamp;
        });
    };
    HistoryComponent.prototype.searchQuery = function (query) {
        this.router.navigate(["/results"], {
            queryParams: { search_query: query }
        });
    };
    HistoryComponent.prototype.removeQuery = function (index) {
        var _this = this;
        this.userService
            .updateSearchHistory(this.searchQueries, index)
            .subscribe(function (data) {
            if (data.success) {
                _this.searchQueries.splice(index, 1);
            }
            else {
                console.log("Error removing query.");
            }
        });
    };
    HistoryComponent.prototype.viewItem = function (item) {
        if (item.cookbook === undefined) {
            this.router.navigate(["/recipe", item.recipe._id]);
        }
        else {
            this.router.navigate(["/cookbook", item.cookbook._id]);
        }
    };
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-history",
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/components/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.css */ "./src/app/components/history/history.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/******* Global *******/\r\n.home {\r\n  /******* Vars *******/\r\n  --main-text: #555555;\r\n  --main-dark-text: #363636;\r\n  --main-light-text: #696c80;\r\n  --light-background: #e7e7e7;\r\n  --button-color: #4286f5;\r\n  --circle: #e7e7e7;\r\n  --circle-top: #6d6d6d;\r\n  --circle-bottom: #c5c5c5;\r\n\r\n  min-height: 100%;\r\n  max-width: 100vw;\r\n  background-color: #fff;\r\n  color: var(--main-text);\r\n  overflow: hidden;\r\n  z-index: -2;\r\n}\r\n.wrapper {\r\n  width: 100%;\r\n  position: relative;\r\n  margin: auto;\r\n  z-index: 2;\r\n  color: var(--main-text);\r\n  overflow: hidden;\r\n}\r\n/*** ***/\r\n.initialScreen {\r\n  z-index: 1;\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: 100vh;\r\n}\r\n/******* Nav *******/\r\n@media screen and (max-width: 800px) {\r\n  #nav {\r\n    display: none !important;\r\n  }\r\n  #nav2 {\r\n    display: inline-block !important;\r\n  }\r\n}\r\n#nav2 {\r\n  display: none;\r\n  width: 100%;\r\n  padding-left: 20px;\r\n  font-size: 24px;\r\n}\r\n#nav2 i {\r\n  cursor: pointer;\r\n}\r\n.extraNav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  margin-top: 20px;\r\n  height: auto;\r\n  max-height: 0px;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n.shown {\r\n  height: auto;\r\n  transition: all 0.3s ease-in-out;\r\n  max-height: 100px;\r\n}\r\nnav {\r\n  width: 80%;\r\n  margin: auto;\r\n  margin-top: 58px;\r\n  overflow: hidden;\r\n  z-index: 100 !important;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\na {\r\n  text-decoration: none;\r\n  color: var(--main-text);\r\n  font-size: 18px;\r\n  font-weight: 300;\r\n  margin: 0 10px;\r\n}\r\n.navLeft {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n.navRight {\r\n  display: flex;\r\n  align-items: center;\r\n  /* margin-right: -10px; */\r\n}\r\n.logo {\r\n  padding: 0;\r\n  font-size: 32px;\r\n  font-weight: 900;\r\n  margin-right: 30px;\r\n}\r\n.subPoint {\r\n  padding: 0;\r\n  font-size: 17px;\r\n  margin-left: 25px;\r\n  /* font-weight: 900; */\r\n}\r\n.btnSmall {\r\n  color: var(--button-color);\r\n  border: var(--button-color) 2px solid;\r\n  border-radius: 5px;\r\n  font-size: 17px;\r\n  padding: 0.6em 1.4em;\r\n  text-align: center;\r\n  transition: 0.15s all ease-in-out;\r\n}\r\n.btnSmall:hover {\r\n  color: #fff;\r\n  background-color: var(--button-color);\r\n  transition: 0.15s all ease-in-out;\r\n}\r\n/******* Landing *******/\r\n.landingArea {\r\n  margin: auto;\r\n  /* background-color: red; */\r\n  margin-top: 170px;\r\n  max-width: 1170px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  flex-wrap: wrap;\r\n  /* background-color: red; */\r\n}\r\n.landingLeft {\r\n  /* margin: auto; */\r\n}\r\n.landingRight {\r\n  /* margin: auto; */\r\n}\r\n.slogan {\r\n  /* margin: 0 10px; */\r\n}\r\n.slogan h1 {\r\n  margin: 0 auto;\r\n  font-size: 60px;\r\n  overflow: hidden;\r\n  white-space: normal;\r\n}\r\n.slogan p {\r\n  font-size: 17px;\r\n  max-width: 450px;\r\n  padding: 20px 0;\r\n  /* white-space: pre-wrap; */\r\n}\r\n.continue {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n.btnMed {\r\n  color: #fff;\r\n  background-color: var(--button-color);\r\n  border-radius: 5px;\r\n  padding: 1.15em 2.3em;\r\n  text-align: center;\r\n  font-size: 17px;\r\n  transition: 0.15s all ease-in-out;\r\n}\r\n.moreLink {\r\n  margin-left: 50px;\r\n  text-align: center;\r\n  font-size: 16px;\r\n}\r\n.btnMed:hover {\r\n  background-color: rgb(63, 0, 158);\r\n  transition: 0.15s all ease-in-out;\r\n}\r\n.gifArea {\r\n  margin: auto;\r\n  height: 500px;\r\n  width: 500px;\r\n  overflow: hidden;\r\n}\r\n.imageBox {\r\n  margin: 0;\r\n  height: 400px;\r\n  min-width: 500px;\r\n  /* background-color: rgba(0, 0, 0, 0.274); */\r\n}\r\n.imageBox img {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n}\r\n.imageBoxContainer {\r\n  margin: auto;\r\n  height: 500px;\r\n  width: 500px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  -webkit-animation: slideShow 8.5s ease-in-out 0s infinite;\r\n          animation: slideShow 8.5s ease-in-out 0s infinite;\r\n}\r\n@-webkit-keyframes slideShow {\r\n  10% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n  }\r\n  15%,\r\n  45% {\r\n    -webkit-transform: translateX(-500px);\r\n            transform: translateX(-500px);\r\n  }\r\n  50%,\r\n  80% {\r\n    -webkit-transform: translateX(-1000px);\r\n            transform: translateX(-1000px);\r\n  }\r\n  85%,\r\n  100% {\r\n    -webkit-transform: translateX(-1500px);\r\n            transform: translateX(-1500px);\r\n  }\r\n}\r\n@keyframes slideShow {\r\n  10% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n  }\r\n  15%,\r\n  45% {\r\n    -webkit-transform: translateX(-500px);\r\n            transform: translateX(-500px);\r\n  }\r\n  50%,\r\n  80% {\r\n    -webkit-transform: translateX(-1000px);\r\n            transform: translateX(-1000px);\r\n  }\r\n  85%,\r\n  100% {\r\n    -webkit-transform: translateX(-1500px);\r\n            transform: translateX(-1500px);\r\n  }\r\n}\r\n/******* Screenshot *******/\r\n.imageBackground {\r\n  width: 100vw;\r\n  position: relative;\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n.imageBackground img {\r\n  z-index: -1;\r\n  width: 100%;\r\n  min-width: 1000px;\r\n  height: 100%;\r\n  position: absolute;\r\n}\r\n.screenShot {\r\n  position: relative;\r\n  margin: 70px auto;\r\n  overflow: auto;\r\n  z-index: 100 !important;\r\n  overflow: hidden;\r\n}\r\n.screenShot img {\r\n  position: relative;\r\n  max-width: 1150px;\r\n}\r\n/*** Affiliates ***/\r\n.affiliates {\r\n  width: 100%;\r\n  height: 180px;\r\n  background-color: #f2f2f2;\r\n}\r\n.affRow {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  margin: auto;\r\n  width: 1170px;\r\n  height: 100%;\r\n}\r\n.affiliate {\r\n  font-size: 24px;\r\n  color: #a3a3a3;\r\n}\r\n/******* More info *******/\r\n.moreInfo {\r\n  margin: auto;\r\n  margin-top: 150px;\r\n  margin-bottom: 150px;\r\n  max-width: 1170px;\r\n}\r\n.column {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.row {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  margin: 75px 0;\r\n}\r\n.infoBox {\r\n  width: 470px;\r\n  font-size: 16px;\r\n  font-weight: normal;\r\n}\r\n.infoBox i {\r\n  font-size: 20px;\r\n  padding-bottom: 10px;\r\n}\r\n.infoBox h2 {\r\n  font-size: 30px;\r\n  font-weight: normal;\r\n  padding-bottom: 10px;\r\n}\r\n.infoBox p {\r\n  padding-bottom: 15px;\r\n  padding-right: 25px;\r\n}\r\n/******* Mobile area *******/\r\n.mobileArea {\r\n  background-color: #03a9f5;\r\n  width: 100%;\r\n  height: 750px;\r\n  text-align: center;\r\n  color: #fff;\r\n  margin-bottom: 150px;\r\n}\r\n.mobileArea h2 {\r\n  padding-top: 3%;\r\n  padding-bottom: 1%;\r\n  font-size: 50px;\r\n  font-weight: normal;\r\n}\r\n.phone {\r\n  height: 635px;\r\n  width: 340px;\r\n  border-radius: 15px;\r\n  background-color: #efefef;\r\n  margin: 75px auto;\r\n  box-shadow: 0px 5px 25px 0px rgba(63, 71, 102, 0.5);\r\n}\r\n/******* Spaced Area *******/\r\n.spacedArea {\r\n  overflow: hidden;\r\n}\r\n.breakerBar {\r\n  height: 200px;\r\n  width: 18px;\r\n  background-color: #e8e8e8;\r\n  border-radius: 25px;\r\n  margin: auto;\r\n  margin-top: 50px;\r\n  margin-bottom: 50px;\r\n}\r\n.infoPanel {\r\n  width: 60%;\r\n  height: 350px;\r\n  margin: auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 17px;\r\n}\r\n.infoPanelL {\r\n  width: 50%;\r\n  font-size: 17px;\r\n}\r\n.infoPanelR {\r\n  width: 50%;\r\n  padding-left: 100px;\r\n}\r\n.infoPanelR h2 {\r\n  width: 80%;\r\n  font-size: 50px;\r\n  font-weight: normal;\r\n  padding-bottom: 10px;\r\n}\r\n.infoPanelR p {\r\n  width: 80%;\r\n}\r\n.infoPanelS {\r\n  height: 350px;\r\n  width: 600px;\r\n  border-radius: 25px;\r\n  float: left;\r\n  background-color: #adadad;\r\n}\r\n/******* More *******/\r\n.more {\r\n  width: 70%;\r\n  margin: auto;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n.feature {\r\n  --feature-color1: #d177f6;\r\n  --feature-color2: #fed15a;\r\n  --feature-color3: #00bcd5;\r\n  width: 350px;\r\n  background-color: #fff;\r\n  box-shadow: 0px 5px 25px 0px rgba(63, 71, 102, 0.25);\r\n  padding: 85px 30px 90px 30px;\r\n  font-size: 17px;\r\n  text-align: center;\r\n  border-bottom-right-radius: 15px;\r\n  border-bottom-left-radius: 15px;\r\n}\r\n.feature i {\r\n  padding-bottom: 30px;\r\n  font-size: 55px;\r\n}\r\n.feature h2 {\r\n  font-weight: normal;\r\n  font-size: 30px;\r\n}\r\n.feature p {\r\n  width: 90%;\r\n  padding-top: 30px;\r\n  margin: auto;\r\n  color: #9498b8;\r\n}\r\n#feature-1 {\r\n  border-top: 5px solid var(--feature-color1);\r\n}\r\n#feature-1 i {\r\n  color: var(--feature-color1);\r\n}\r\n#feature-2 {\r\n  border-top: 5px solid var(--feature-color2);\r\n}\r\n#feature-2 i {\r\n  color: var(--feature-color2);\r\n}\r\n#feature-3 {\r\n  border-top: 5px solid var(--feature-color3);\r\n}\r\n#feature-3 i {\r\n  color: var(--feature-color3);\r\n}\r\n/******* Image Bar *******/\r\n.image-bar {\r\n  margin-top: 300px;\r\n  height: 400px;\r\n  width: 100%;\r\n  position: relative;\r\n  background-color: #f6f6f6;\r\n}\r\n.about {\r\n  width: 50%;\r\n  height: 70%;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  background-color: #fff;\r\n  box-shadow: 0px 5px 25px 0px rgba(63, 71, 102, 0.25);\r\n  border-radius: 8px;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n.profile-text {\r\n  background-color: #fff;\r\n  width: 100px;\r\n  padding: 6% 15% 6% 15%;\r\n  flex: 1;\r\n  border-radius: 15px;\r\n  font-size: 17px;\r\n}\r\n.profile-text h2 {\r\n  font-weight: normal;\r\n  padding-bottom: 10px;\r\n  font-size: 30px;\r\n}\r\n.profile-image {\r\n  width: 280px;\r\n  height: 280px;\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n  background-color: #adadad;\r\n  box-shadow: 0px 5px 25px 0px rgba(63, 71, 102, 0.25);\r\n  border-radius: 8px;\r\n}\r\n.profile-image img {\r\n  border-radius: 8px;\r\n}\r\n/******* Bottom *******/\r\n.bottomArea {\r\n  height: 80vh;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.bottomArea h1 {\r\n  font-weight: normal;\r\n  font-size: 50px;\r\n}\r\n.bottomArea a {\r\n  margin-top: 25px;\r\n  font-size: 17px;\r\n  padding: 18px 40px;\r\n  color: #fff;\r\n  border-radius: 30px;\r\n  background-color: #4286f5;\r\n  transition: 0.15s all ease-in-out;\r\n  cursor: pointer;\r\n}\r\n.bottomArea a:hover {\r\n  background-color: #7aadff;\r\n  transition: 0.15s all ease-in-out;\r\n}\r\n/******* Footer *******/\r\nfooter {\r\n  padding-bottom: 50px;\r\n  width: 72%;\r\n  margin: auto;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n.logoB {\r\n  font-size: 32px;\r\n  font-weight: 900;\r\n  margin-right: 50px;\r\n}\r\n/******* Other *******/\r\n/* !REMOVE THIS */\r\n/* Logged in page. */\r\n.card {\r\n  background-color: #fff;\r\n  /* border: 1px solid #dadce0; */\r\n  border-radius: 8px;\r\n  padding: 20px;\r\n  transition: all 0.1s ease-in-out;\r\n  box-shadow: 0 0 2rem rgba(0, 0, 99, 0.1);\r\n}\r\n.card:hover {\r\n  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\r\n  box-shadow: 0 6px 0 0 rgba(0, 0, 0, 0.01), 0 15px 32px 0 rgba(0, 0, 0, 0.06); */\r\n\r\n  transition: all 0.1s ease-in-out;\r\n}\r\n.search-bar {\r\n  width: 100%;\r\n  padding: 20px;\r\n  overflow: hidden;\r\n}\r\n.search {\r\n  border-radius: 25px;\r\n  background-color: #fff;\r\n  padding: 20px;\r\n}\r\n.input-field {\r\n  font-family: inherit;\r\n  flex-grow: 1;\r\n  resize: none;\r\n  font-size: 16px;\r\n  width: 400px;\r\n  font-weight: 200;\r\n  padding: 10px 10px;\r\n}\r\n.picked {\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n.picked-card {\r\n  padding: 10px;\r\n  margin: 20px;\r\n}\r\n.cookbookTitle {\r\n  margin: auto;\r\n  text-align: left;\r\n  font-family: \"ProductSansRegular\", sans-serif;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-left: 10px;\r\n}\r\n.tTitle {\r\n  font-size: 14pt;\r\n}\r\n.tNav {\r\n}\r\n.cookbooks {\r\n  width: 100%;\r\n  margin: auto;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n}\r\n.cookbook {\r\n  margin: 10px;\r\n  width: 10vw;\r\n  height: 10vw;\r\n  min-width: 170px;\r\n  min-height: 170px;\r\n  display: inline-block;\r\n  align-content: center;\r\n}\r\n.tImage {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n.tPic {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 8px;\r\n  background: #f953c6; /* fallback for old browsers */ /* Chrome 10-25, Safari 5.1-6 */\r\n  background: linear-gradient(to right, #b91d73, #f953c6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n}\r\n.tImageOverlay {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(39, 39, 39, 0.6);\r\n  opacity: 0;\r\n  transition: all 0.3s ease-in-out 0s;\r\n  position: absolute;\r\n  z-index: 10;\r\n  top: 0;\r\n  left: 0;\r\n  border-radius: 8px;\r\n}\r\n.tImage:hover .tImageOverlay {\r\n  transition: all 0.3s ease-in-out 0s;\r\n  opacity: 1;\r\n}\r\n.tImageFav {\r\n  font-size: 24pt;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  color: #fff;\r\n  cursor: default;\r\n}\r\n.tInfo {\r\n  width: 100%;\r\n  padding-top: 5px;\r\n  font-size: 10pt;\r\n  margin: auto;\r\n  text-align: left;\r\n  font-family: \"ProductSansRegular\", sans-serif;\r\n  white-space: normal;\r\n}\r\n.tInfo-title {\r\n  display: inline-block;\r\n}\r\n.tInfo-title:hover {\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n.tFol {\r\n  padding-top: 5px;\r\n  font-size: 9pt;\r\n}\r\n.unclickable,\r\n.unclickable:hover {\r\n  color: rgba(82, 82, 82, 0.445);\r\n  cursor: default !important;\r\n}\r\n.dash-area {\r\n  display: flex;\r\n  align-content: flex-start;\r\n  justify-content: flex-start;\r\n  flex-wrap: wrap;\r\n}\r\n.info {\r\n  flex-grow: 1;\r\n  min-width: 400px;\r\n  height: 400px;\r\n  margin: 20px;\r\n}\r\n.trending {\r\n  width: 375px;\r\n  min-height: 10px;\r\n  margin: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-wrap: nowrap;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n.trending-title {\r\n  padding: 10px;\r\n}\r\n.trending-recipe {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 40px;\r\n  width: 90%;\r\n  border-radius: 3px;\r\n  margin-top: 5px;\r\n  text-align: center;\r\n  background-color: rgba(0, 0, 0, 0.075);\r\n}\r\n.trending-recipe:hover {\r\n  background-color: rgba(0, 0, 0, 0.253);\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBd0I7QUFDeEI7RUFDRSxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHlCQUF5Qjs7RUFFekIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixZQUFZO0NBQ2I7QUFDRDtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsaUJBQWlCO0NBQ2xCO0FBRUQsU0FBUztBQUNUO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsY0FBYztDQUNmO0FBRUQscUJBQXFCO0FBQ3JCO0VBQ0U7SUFDRSx5QkFBeUI7R0FDMUI7RUFDRDtJQUNFLGlDQUFpQztHQUNsQztDQUNGO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUNBQWlDO0NBQ2xDO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLGtCQUFrQjtDQUNuQjtBQUVEO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLCtCQUErQjtDQUNoQztBQUNEO0VBQ0Usc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsK0JBQStCO0NBQ2hDO0FBQ0Q7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix1QkFBdUI7Q0FDeEI7QUFDRDtFQUNFLDJCQUEyQjtFQUMzQixzQ0FBc0M7RUFDdEMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtDQUFrQztDQUNuQztBQUNEO0VBQ0UsWUFBWTtFQUNaLHNDQUFzQztFQUN0QyxrQ0FBa0M7Q0FDbkM7QUFFRCx5QkFBeUI7QUFDekI7RUFDRSxhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLCtCQUErQjtFQUMvQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtDQUM3QjtBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLHFCQUFxQjtDQUN0QjtBQUNEO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQiw0QkFBNEI7Q0FDN0I7QUFFRDtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQ0FBa0M7Q0FDbkM7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxrQ0FBa0M7RUFDbEMsa0NBQWtDO0NBQ25DO0FBRUQ7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGFBQWE7RUFDYixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLDZDQUE2QztDQUM5QztBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix1QkFBb0I7S0FBcEIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLDBEQUFrRDtVQUFsRCxrREFBa0Q7Q0FDbkQ7QUFDRDtFQUNFO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QjtHQUMxQjtFQUNEOztJQUVFLHNDQUE4QjtZQUE5Qiw4QkFBOEI7R0FDL0I7RUFDRDs7SUFFRSx1Q0FBK0I7WUFBL0IsK0JBQStCO0dBQ2hDO0VBQ0Q7O0lBRUUsdUNBQStCO1lBQS9CLCtCQUErQjtHQUNoQztDQUNGO0FBaEJEO0VBQ0U7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0dBQzFCO0VBQ0Q7O0lBRUUsc0NBQThCO1lBQTlCLDhCQUE4QjtHQUMvQjtFQUNEOztJQUVFLHVDQUErQjtZQUEvQiwrQkFBK0I7R0FDaEM7RUFDRDs7SUFFRSx1Q0FBK0I7WUFBL0IsK0JBQStCO0dBQ2hDO0NBQ0Y7QUFFRCw0QkFBNEI7QUFDNUI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixjQUFjO0NBQ2Y7QUFDRDtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7Q0FDbkI7QUFFRCxvQkFBb0I7QUFDcEI7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixjQUFjO0VBQ2QsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtDQUNoQjtBQUVELDJCQUEyQjtBQUMzQjtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtDQUN4QjtBQUNEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtDQUN0QjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixxQkFBcUI7Q0FDdEI7QUFDRDtFQUNFLHFCQUFxQjtFQUNyQixvQkFBb0I7Q0FDckI7QUFFRCw2QkFBNkI7QUFDN0I7RUFDRSwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHFCQUFxQjtDQUN0QjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLG9EQUFvRDtDQUNyRDtBQUVELDZCQUE2QjtBQUM3QjtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLG9CQUFvQjtFQUNwQixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtDQUN0QjtBQUNEO0VBQ0UsV0FBVztDQUNaO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osMEJBQTBCO0NBQzNCO0FBRUQsc0JBQXNCO0FBQ3RCO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxREFBcUQ7RUFDckQsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLGdDQUFnQztDQUNqQztBQUNEO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsNENBQTRDO0NBQzdDO0FBQ0Q7RUFDRSw2QkFBNkI7Q0FDOUI7QUFDRDtFQUNFLDRDQUE0QztDQUM3QztBQUNEO0VBQ0UsNkJBQTZCO0NBQzlCO0FBQ0Q7RUFDRSw0Q0FBNEM7Q0FDN0M7QUFDRDtFQUNFLDZCQUE2QjtDQUM5QjtBQUVELDJCQUEyQjtBQUMzQjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixTQUFTO0VBQ1QseUNBQWlDO1VBQWpDLGlDQUFpQztFQUNqQyx1QkFBdUI7RUFDdkIscURBQXFEO0VBQ3JELG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsOEJBQThCO0NBQy9CO0FBQ0Q7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1Isb0JBQW9CO0VBQ3BCLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIscURBQXFEO0VBQ3JELG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBRUQsd0JBQXdCO0FBQ3hCO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLGtDQUFrQztFQUNsQyxnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLDBCQUEwQjtFQUMxQixrQ0FBa0M7Q0FDbkM7QUFFRCx3QkFBd0I7QUFDeEI7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLCtCQUErQjtDQUNoQztBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FDcEI7QUFFRCx1QkFBdUI7QUFFdkIsa0JBQWtCO0FBQ2xCLHFCQUFxQjtBQUVyQjtFQUNFLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxpQ0FBaUM7RUFDakMseUNBQXlDO0NBQzFDO0FBQ0Q7RUFDRTtrRkFDZ0Y7O0VBRWhGLGlDQUFpQztDQUNsQztBQUVEO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsY0FBYztDQUNmO0FBQ0Q7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FDcEI7QUFFRDtFQUNFLFlBQVk7RUFDWixhQUFhO0NBQ2Q7QUFDRDtFQUNFLGNBQWM7RUFDZCxhQUFhO0NBQ2Q7QUFFRDtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsOENBQThDO0VBQzlDLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBQ0Q7Q0FDQztBQUNEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixzQkFBc0I7Q0FDdkI7QUFDRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsb0JBQW9CLENBQUMsK0JBQStCLENBQ2EsZ0NBQWdDO0VBQ2pHLHdEQUF3RCxDQUFDLHNFQUFzRTtDQUNoSTtBQUNEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix3Q0FBd0M7RUFDeEMsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLE9BQU87RUFDUCxRQUFRO0VBQ1IsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxvQ0FBb0M7RUFDcEMsV0FBVztDQUNaO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0VBQ1YseUNBQWlDO1VBQWpDLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDhDQUE4QztFQUM5QyxvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLHNCQUFzQjtDQUN2QjtBQUNEO0VBQ0UsMkJBQTJCO0VBQzNCLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7Q0FDaEI7QUFDRDs7RUFFRSwrQkFBK0I7RUFDL0IsMkJBQTJCO0NBQzVCO0FBRUQ7RUFDRSxjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsY0FBYztDQUNmO0FBQ0Q7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHVDQUF1QztDQUN4QztBQUNEO0VBQ0UsdUNBQXVDO0VBQ3ZDLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKiBHbG9iYWwgKioqKioqKi9cclxuLmhvbWUge1xyXG4gIC8qKioqKioqIFZhcnMgKioqKioqKi9cclxuICAtLW1haW4tdGV4dDogIzU1NTU1NTtcclxuICAtLW1haW4tZGFyay10ZXh0OiAjMzYzNjM2O1xyXG4gIC0tbWFpbi1saWdodC10ZXh0OiAjNjk2YzgwO1xyXG4gIC0tbGlnaHQtYmFja2dyb3VuZDogI2U3ZTdlNztcclxuICAtLWJ1dHRvbi1jb2xvcjogIzQyODZmNTtcclxuICAtLWNpcmNsZTogI2U3ZTdlNztcclxuICAtLWNpcmNsZS10b3A6ICM2ZDZkNmQ7XHJcbiAgLS1jaXJjbGUtYm90dG9tOiAjYzVjNWM1O1xyXG5cclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0KTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHotaW5kZXg6IC0yO1xyXG59XHJcbi53cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLyoqKiAqKiovXHJcbi5pbml0aWFsU2NyZWVuIHtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLyoqKioqKiogTmF2ICoqKioqKiovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgI25hdiB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICNuYXYyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4jbmF2MiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbiNuYXYyIGkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZXh0cmFOYXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5zaG93biB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG5uYXYge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDU4cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB6LWluZGV4OiAxMDAgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0KTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG4ubmF2TGVmdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4ubmF2UmlnaHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvKiBtYXJnaW4tcmlnaHQ6IC0xMHB4OyAqL1xyXG59XHJcbi5sb2dvIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG4uc3ViUG9pbnQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gIC8qIGZvbnQtd2VpZ2h0OiA5MDA7ICovXHJcbn1cclxuLmJ0blNtYWxsIHtcclxuICBjb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcclxuICBib3JkZXI6IHZhcigtLWJ1dHRvbi1jb2xvcikgMnB4IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgcGFkZGluZzogMC42ZW0gMS40ZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IDAuMTVzIGFsbCBlYXNlLWluLW91dDtcclxufVxyXG4uYnRuU21hbGw6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XHJcbiAgdHJhbnNpdGlvbjogMC4xNXMgYWxsIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4vKioqKioqKiBMYW5kaW5nICoqKioqKiovXHJcbi5sYW5kaW5nQXJlYSB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cclxuICBtYXJnaW4tdG9wOiAxNzBweDtcclxuICBtYXgtd2lkdGg6IDExNzBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xyXG59XHJcbi5sYW5kaW5nTGVmdCB7XHJcbiAgLyogbWFyZ2luOiBhdXRvOyAqL1xyXG59XHJcbi5sYW5kaW5nUmlnaHQge1xyXG4gIC8qIG1hcmdpbjogYXV0bzsgKi9cclxufVxyXG4uc2xvZ2FuIHtcclxuICAvKiBtYXJnaW46IDAgMTBweDsgKi9cclxufVxyXG4uc2xvZ2FuIGgxIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59XHJcbi5zbG9nYW4gcCB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIG1heC13aWR0aDogNDUwcHg7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIC8qIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDsgKi9cclxufVxyXG5cclxuLmNvbnRpbnVlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYnRuTWVkIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAxLjE1ZW0gMi4zZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICB0cmFuc2l0aW9uOiAwLjE1cyBhbGwgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLm1vcmVMaW5rIHtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5idG5NZWQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MywgMCwgMTU4KTtcclxuICB0cmFuc2l0aW9uOiAwLjE1cyBhbGwgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5naWZBcmVhIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uaW1hZ2VCb3gge1xyXG4gIG1hcmdpbjogMDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIG1pbi13aWR0aDogNTAwcHg7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI3NCk7ICovXHJcbn1cclxuLmltYWdlQm94IGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG4uaW1hZ2VCb3hDb250YWluZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZVNob3cgOC41cyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIHNsaWRlU2hvdyB7XHJcbiAgMTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcbiAgMTUlLFxyXG4gIDQ1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwMHB4KTtcclxuICB9XHJcbiAgNTAlLFxyXG4gIDgwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMDBweCk7XHJcbiAgfVxyXG4gIDg1JSxcclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUwMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqIFNjcmVlbnNob3QgKioqKioqKi9cclxuLmltYWdlQmFja2dyb3VuZCB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmltYWdlQmFja2dyb3VuZCBpbWcge1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMTAwMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLnNjcmVlblNob3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDcwcHggYXV0bztcclxuICBvdmVyZmxvdzogYXV0bztcclxuICB6LWluZGV4OiAxMDAgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5zY3JlZW5TaG90IGltZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aDogMTE1MHB4O1xyXG59XHJcblxyXG4vKioqIEFmZmlsaWF0ZXMgKioqL1xyXG4uYWZmaWxpYXRlcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxODBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59XHJcbi5hZmZSb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogMTE3MHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uYWZmaWxpYXRlIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6ICNhM2EzYTM7XHJcbn1cclxuXHJcbi8qKioqKioqIE1vcmUgaW5mbyAqKioqKioqL1xyXG4ubW9yZUluZm8ge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDExNzBweDtcclxufVxyXG4uY29sdW1uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbjogNzVweCAwO1xyXG59XHJcbi5pbmZvQm94IHtcclxuICB3aWR0aDogNDcwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLmluZm9Cb3ggaSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi5pbmZvQm94IGgyIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG4uaW5mb0JveCBwIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4vKioqKioqKiBNb2JpbGUgYXJlYSAqKioqKioqL1xyXG4ubW9iaWxlQXJlYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzYTlmNTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDc1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tYm90dG9tOiAxNTBweDtcclxufVxyXG4ubW9iaWxlQXJlYSBoMiB7XHJcbiAgcGFkZGluZy10b3A6IDMlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxJTtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4ucGhvbmUge1xyXG4gIGhlaWdodDogNjM1cHg7XHJcbiAgd2lkdGg6IDM0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcclxuICBtYXJnaW46IDc1cHggYXV0bztcclxuICBib3gtc2hhZG93OiAwcHggNXB4IDI1cHggMHB4IHJnYmEoNjMsIDcxLCAxMDIsIDAuNSk7XHJcbn1cclxuXHJcbi8qKioqKioqIFNwYWNlZCBBcmVhICoqKioqKiovXHJcbi5zcGFjZWRBcmVhIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5icmVha2VyQmFyIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcbi5pbmZvUGFuZWwge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuLmluZm9QYW5lbEwge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcbi5pbmZvUGFuZWxSIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XHJcbn1cclxuLmluZm9QYW5lbFIgaDIge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuLmluZm9QYW5lbFIgcCB7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG4uaW5mb1BhbmVsUyB7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRhZGFkO1xyXG59XHJcblxyXG4vKioqKioqKiBNb3JlICoqKioqKiovXHJcbi5tb3JlIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmZlYXR1cmUge1xyXG4gIC0tZmVhdHVyZS1jb2xvcjE6ICNkMTc3ZjY7XHJcbiAgLS1mZWF0dXJlLWNvbG9yMjogI2ZlZDE1YTtcclxuICAtLWZlYXR1cmUtY29sb3IzOiAjMDBiY2Q1O1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMjVweCAwcHggcmdiYSg2MywgNzEsIDEwMiwgMC4yNSk7XHJcbiAgcGFkZGluZzogODVweCAzMHB4IDkwcHggMzBweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XHJcbn1cclxuLmZlYXR1cmUgaSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgZm9udC1zaXplOiA1NXB4O1xyXG59XHJcbi5mZWF0dXJlIGgyIHtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4uZmVhdHVyZSBwIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBjb2xvcjogIzk0OThiODtcclxufVxyXG4jZmVhdHVyZS0xIHtcclxuICBib3JkZXItdG9wOiA1cHggc29saWQgdmFyKC0tZmVhdHVyZS1jb2xvcjEpO1xyXG59XHJcbiNmZWF0dXJlLTEgaSB7XHJcbiAgY29sb3I6IHZhcigtLWZlYXR1cmUtY29sb3IxKTtcclxufVxyXG4jZmVhdHVyZS0yIHtcclxuICBib3JkZXItdG9wOiA1cHggc29saWQgdmFyKC0tZmVhdHVyZS1jb2xvcjIpO1xyXG59XHJcbiNmZWF0dXJlLTIgaSB7XHJcbiAgY29sb3I6IHZhcigtLWZlYXR1cmUtY29sb3IyKTtcclxufVxyXG4jZmVhdHVyZS0zIHtcclxuICBib3JkZXItdG9wOiA1cHggc29saWQgdmFyKC0tZmVhdHVyZS1jb2xvcjMpO1xyXG59XHJcbiNmZWF0dXJlLTMgaSB7XHJcbiAgY29sb3I6IHZhcigtLWZlYXR1cmUtY29sb3IzKTtcclxufVxyXG5cclxuLyoqKioqKiogSW1hZ2UgQmFyICoqKioqKiovXHJcbi5pbWFnZS1iYXIge1xyXG4gIG1hcmdpbi10b3A6IDMwMHB4O1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbn1cclxuLmFib3V0IHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogNzAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwcHggNXB4IDI1cHggMHB4IHJnYmEoNjMsIDcxLCAxMDIsIDAuMjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcbi5wcm9maWxlLXRleHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDYlIDE1JSA2JSAxNSU7XHJcbiAgZmxleDogMTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG4ucHJvZmlsZS10ZXh0IGgyIHtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4ucHJvZmlsZS1pbWFnZSB7XHJcbiAgd2lkdGg6IDI4MHB4O1xyXG4gIGhlaWdodDogMjgwcHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZGFkYWQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCAyNXB4IDBweCByZ2JhKDYzLCA3MSwgMTAyLCAwLjI1KTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuLnByb2ZpbGUtaW1hZ2UgaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi8qKioqKioqIEJvdHRvbSAqKioqKioqL1xyXG4uYm90dG9tQXJlYSB7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5ib3R0b21BcmVhIGgxIHtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG4uYm90dG9tQXJlYSBhIHtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBwYWRkaW5nOiAxOHB4IDQwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4NmY1O1xyXG4gIHRyYW5zaXRpb246IDAuMTVzIGFsbCBlYXNlLWluLW91dDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJvdHRvbUFyZWEgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdhYWRmZjtcclxuICB0cmFuc2l0aW9uOiAwLjE1cyBhbGwgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi8qKioqKioqIEZvb3RlciAqKioqKioqL1xyXG5mb290ZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIHdpZHRoOiA3MiU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmxvZ29CIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi8qKioqKioqIE90aGVyICoqKioqKiovXHJcblxyXG4vKiAhUkVNT1ZFIFRISVMgKi9cclxuLyogTG9nZ2VkIGluIHBhZ2UuICovXHJcblxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCAjZGFkY2UwOyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAycmVtIHJnYmEoMCwgMCwgOTksIDAuMSk7XHJcbn1cclxuLmNhcmQ6aG92ZXIge1xyXG4gIC8qIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgYm94LXNoYWRvdzogMCA2cHggMCAwIHJnYmEoMCwgMCwgMCwgMC4wMSksIDAgMTVweCAzMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KTsgKi9cclxuXHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5zZWFyY2gtYmFyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnNlYXJjaCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLmlucHV0LWZpZWxkIHtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5waWNrZWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4ucGlja2VkLWNhcmQge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4uY29va2Jvb2tUaXRsZSB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiUHJvZHVjdFNhbnNSZWd1bGFyXCIsIHNhbnMtc2VyaWY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLnRUaXRsZSB7XHJcbiAgZm9udC1zaXplOiAxNHB0O1xyXG59XHJcbi50TmF2IHtcclxufVxyXG4uY29va2Jvb2tzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5jb29rYm9vayB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHdpZHRoOiAxMHZ3O1xyXG4gIGhlaWdodDogMTB2dztcclxuICBtaW4td2lkdGg6IDE3MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDE3MHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnRJbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnRQaWMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZDogI2Y5NTNjNjsgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYjkxZDczLCAjZjk1M2M2KTsgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNiOTFkNzMsICNmOTUzYzYpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbn1cclxuLnRJbWFnZU92ZXJsYXkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgMzksIDAuNik7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcbi50SW1hZ2U6aG92ZXIgLnRJbWFnZU92ZXJsYXkge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLnRJbWFnZUZhdiB7XHJcbiAgZm9udC1zaXplOiAyNHB0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcbi50SW5mbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBmb250LXNpemU6IDEwcHQ7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiUHJvZHVjdFNhbnNSZWd1bGFyXCIsIHNhbnMtc2VyaWY7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxufVxyXG4udEluZm8tdGl0bGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4udEluZm8tdGl0bGU6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udEZvbCB7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBmb250LXNpemU6IDlwdDtcclxufVxyXG4udW5jbGlja2FibGUsXHJcbi51bmNsaWNrYWJsZTpob3ZlciB7XHJcbiAgY29sb3I6IHJnYmEoODIsIDgyLCA4MiwgMC40NDUpO1xyXG4gIGN1cnNvcjogZGVmYXVsdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGFzaC1hcmVhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4uaW5mbyB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIG1pbi13aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuLnRyZW5kaW5nIHtcclxuICB3aWR0aDogMzc1cHg7XHJcbiAgbWluLWhlaWdodDogMTBweDtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi50cmVuZGluZy10aXRsZSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4udHJlbmRpbmctcmVjaXBlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XHJcbn1cclxuLnRyZW5kaW5nLXJlY2lwZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1Myk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\r\n  <div class=\"wrapper\">\r\n    <nav id=\"nav\">\r\n      <div class=\"navLeft\"><a href=\"/\" class=\"logo\">Recipeasy</a></div>\r\n      <div class=\"navRight\">\r\n        <a [routerLink]=\"['/info']\" class=\"subPoint\">About</a>\r\n        <a [routerLink]=\"['/info']\" class=\"subPoint\">Features</a> <a [routerLink]=\"['/info']\" class=\"subPoint\">Contact</a>\r\n        <a class=\"subPoint btnSmall\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/login']\">Login</a>\r\n      </div>\r\n    </nav>\r\n    <nav id=\"nav2\">\r\n      <i class=\"fas fa-bars\" (click)=\"displayExtra = !displayExtra\"></i>\r\n      <div class=\"extraNav\" [ngClass]=\"{ shown: displayExtra }\">\r\n        <a [routerLink]=\"['/info']\" class=\"subPoint\">About</a>\r\n        <a [routerLink]=\"['/info']\" class=\"subPoint\">Features</a> <a [routerLink]=\"['/info']\" class=\"subPoint\">Contact</a>\r\n        <a class=\"subPoint\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/login']\">Login</a>\r\n      </div>\r\n    </nav>\r\n    <div class=\"landingArea\">\r\n      <div class=\"landingLeft\">\r\n        <div class=\"slogan\">\r\n          <h1>Recipes made easy.</h1>\r\n          <p>The recipe creation, discovery and sharing application which aims to provide you with a service like none other. Sign up now to get started and begin to develop your culinary skills.</p>\r\n          <div class=\"continue\">\r\n            <a [routerLinkActive]=\"['active']\" [routerLink]=\"['/register']\" class=\"btnMed\">Register now</a>\r\n            <a class=\"moreLink\" [routerLink]=\"['/info']\">Learn More</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"landingRight\">\r\n        <div class=\"gifArea\">\r\n          <div class=\"imageBoxContainer\">\r\n            <div class=\"imageBox\"><img src=\"../../../assets//images/1.jpg\" /></div>\r\n            <div class=\"imageBox\"><img src=\"../../../assets//images/2.jpg\" /></div>\r\n            <div class=\"imageBox\"><img src=\"../../../assets//images/3.jpg\" /></div>\r\n            <div class=\"imageBox\"><img src=\"../../../assets//images/1.jpg\" /></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"imageBackground\">\r\n      <img src=\"../../../assets/images/Path 11.svg\" />\r\n      <div class=\"screenShot\">\r\n        <img src=\"../../../assets/images/Group 16@2x.png\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"affiliates\">\r\n    <div class=\"affRow\">\r\n      <div class=\"affiliate\">Node.js</div>\r\n      <div class=\"affiliate\">Angular</div>\r\n      <div class=\"affiliate\">MongoDB</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"moreInfo\">\r\n    <div class=\"column\">\r\n      <div class=\"row\">\r\n        <div class=\"infoBox\">\r\n          <i class=\"fas fa-book\" style=\"color: #FF9700\"></i>\r\n          <h2>An archive of recipes</h2>\r\n          <p>Explore 10,000+ recipes, filled with a range of creative ideas which you can try out for yourself. From breakfast to dessert, we've got it all.</p>\r\n          <p>Simply search for what you fancy to pick out the meal that's right for you. Or take some of our recommendations to get a personalised experience.</p>\r\n        </div>\r\n        <div class=\"infoBox\">\r\n          <i class=\"fas fa-desktop\" style=\"color: #EA1E63\"></i>\r\n          <h2>Multi-Browser support</h2>\r\n          <p>This handy application should work anywhere. Providing you have an internet connection just search us up and away you go.</p>\r\n          <p>We don't expect you to have to make a change for us, so let us make the changes for you.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"infoBox\">\r\n          <i class=\"fas fa-save\" style=\"color: #8BC24A\"></i>\r\n          <h2>Save them for later</h2>\r\n          <p>Every single recipe can be saved for you to checkout later. No longer will you have to compile long lists of cluttered recipes.</p>\r\n          <p>Now all of your recipes are accessible in one easy to find location. Try adding a few to a cookbook to add greater filing and organisation.</p>\r\n        </div>\r\n        <div class=\"infoBox\">\r\n          <i class=\"fas fa-edit\" style=\"color: #673BB7\"></i>\r\n          <h2>Edit your own</h2>\r\n          <p>We want to see what you've got. So go ahead and change how your cooking and add recipes to be seen by yourself and others.</p>\r\n          <p>Use our simple to use form to add to the ever growing list of recipes and inspire others with your brilliant and exciting ideas.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"mobileArea\">\r\n    <h2>Go Mobile</h2>\r\n    <p>Explore recipes anywhere</p>\r\n    <div class=\"phone\"></div>\r\n  </div>\r\n  <div class=\"bottomArea\">\r\n    <h1>What are you waiting for?</h1>\r\n    <a [routerLinkActive]=\"['active']\" [routerLink]=\"['/register']\" href=\"#\" class=\"startedButton\">Get started</a>\r\n  </div>\r\n  <footer>\r\n    <div class=\"navLeft\"><a href=\"#\" class=\"logoB\">Recipeasy</a> <a [routerLink]=\"['/info']\" class=\"subPoint\">Privacy and Terms</a> <a [routerLink]=\"['/info']\" class=\"subPoint\">About Recipeasy</a></div>\r\n    <div class=\"navRight\">\r\n      <a [routerLink]=\"['/info']\" class=\"subPoint\"><i class=\"far fa-question-circle\" style=\"padding-right: 5px;\"></i>Help</a>\r\n    </div>\r\n  </footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.show = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn()) {
            this.router.navigate(["/dashboard"]);
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/info/info.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/info/info.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n  min-height: 100vh;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  background-color: #fff;\r\n  font-family: \"ProductSansRegular\";\r\n  color: #555555;\r\n}\r\n\r\n.infoCard {\r\n  background-color: #fff;\r\n  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.25);\r\n  margin: 4vh auto;\r\n  width: 400px;\r\n  text-align: center;\r\n  padding: 50px;\r\n  border-radius: 25px;\r\n}\r\n\r\nh3 {\r\n  margin-top: 40px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmZvL2luZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLHVCQUF1QjtFQUN2QiwyQ0FBMkM7RUFDM0MsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5mby9pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlByb2R1Y3RTYW5zUmVndWxhclwiO1xyXG4gIGNvbG9yOiAjNTU1NTU1O1xyXG59XHJcblxyXG4uaW5mb0NhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIG1hcmdpbjogNHZoIGF1dG87XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbmgzIHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/info/info.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/info/info.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"infoCard\">\n    <h1>FAQs</h1>\n    <div class=\"infoSection\">\n      <h3>About</h3>\n      <p>Recipeasy is a web application which aims to provide users with a unique cooking experience. It was made as part of my final year project.</p>\n      <h3>Features</h3>\n      <p>\n        The application allows for creation, saving and discovery of recipes. Management by adding recipes to cookbooks; a unique method to create lists of recipes as well as a method to recommend to users recipes which\n        might be of interest to them.\n      </p>\n      <h3>Privacy and terms</h3>\n      <p>\n        The application makes use of cookies. Therefore by making an account you consent to the use of these session tracking cookies.\n      </p>\n      <h3>Help</h3>\n      <p>\n        In the face of issues, requests regarding the application should be directed towards: recipe@email.com\n      </p>\n      <h3>Author</h3>\n      <p>Thomas Bunyan.</p>\n      <h3>Contact</h3>\n      <p>thomaspaulbunyan@gmail.com</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/info/info.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/info/info.component.ts ***!
  \***************************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoComponent = /** @class */ (function () {
    function InfoComponent() {
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/components/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.css */ "./src/app/components/info/info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .login {\r\n  height: 100vh;\r\n  width: 100%;\r\n  font-family: \"ProductSansRegular\";\r\n}\r\n\r\n.login-form {\r\n  background-color: #fff;\r\n  border: 1px solid #dadce0;\r\n  border-radius: 8px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 300px;\r\n  text-align: center;\r\n  padding: 20px;\r\n  transition: all 0.1s ease-in-out;\r\n}\r\n.login-form:hover {\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\r\n  transition: all 0.1s ease-in-out;\r\n}\r\n\r\n.login-title {\r\n  font-family: inherit;\r\n  font-weight: 800;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.input-field {\r\n  font-family: inherit;\r\n  text-align: center;\r\n  background-color: #ecf0f1;\r\n  border: 2px solid transparent;\r\n  border-radius: 3px;\r\n  font-size: 16px;\r\n  font-weight: 200;\r\n  padding: 10px 0;\r\n  width: 250px;\r\n  margin-bottom: 10px;\r\n  transition: border 0.5s;\r\n}\r\n.input-field:focus {\r\n  border: 2px solid #71c6f7;\r\n  box-shadow: none;\r\n}\r\n\r\n.login-button {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  font-family: inherit;\r\n  font-size: 16px;\r\n}\r\n\r\n.forgot-button {\r\n  padding-top: 10px;\r\n  font-size: 12px;\r\n  color: #444;\r\n  display: block;\r\n  cursor: pointer;\r\n  text-decoration-line: underline;\r\n}\r\n\r\n.error {\r\n  color: #cc0033;\r\n  background-color: #fce4e4;\r\n  border: 2px solid #cc0033;\r\n}\r\n.error::placeholder {\r\n  color: #cc0033;\r\n}\r\n.errorBtn {\r\n  color: #cc0033;\r\n  background-color: #fce4e4;\r\n  border: 2px solid #cc0033;\r\n}\r\n.errorBtn:hover {\r\n  background-color: #cc0033;\r\n  color: #fce4e4;\r\n}\r\n.success {\r\n  background-color: #dff0d8;\r\n  color: #1ecd97;\r\n  border: 2px solid #1ecd97;\r\n}\r\n.success::placeholder {\r\n  color: #1ecd97;\r\n}\r\n.errorMessage {\r\n  width: 90%;\r\n  margin: auto;\r\n  padding-top: 10px;\r\n  font-size: 10pt;\r\n  color: #cc0033;\r\n} */\r\n\r\n.login {\r\n  min-height: 100vh;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  background-color: #fff;\r\n  font-family: \"ProductSansRegular\";\r\n  color: #555555;\r\n}\r\n\r\n/******* Nav *******/\r\n\r\nnav {\r\n  width: 86%;\r\n  margin: auto;\r\n  text-align: right;\r\n  margin-top: 50px;\r\n  padding: 1vh 20px;\r\n  overflow: hidden;\r\n  z-index: 100 !important;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--main-dark-text);\r\n  font-size: 20px;\r\n  font-weight: 300;\r\n  margin: 0 10px;\r\n}\r\n\r\n.navLeft {\r\n  /* background-color: #0066ff; */\r\n  /* width: 450px; */\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.navRight {\r\n  display: flex;\r\n  align-items: flex-end;\r\n}\r\n\r\n.logo {\r\n  padding: 0;\r\n  font-size: 32px;\r\n  font-weight: 900;\r\n  margin-right: 30px;\r\n}\r\n\r\n.subPoint {\r\n  padding: 0;\r\n  font-size: 18px;\r\n}\r\n\r\n.btnSmall {\r\n  background-color: #4286f5;\r\n  color: #fff;\r\n  border-radius: 5px;\r\n  font-size: 18px;\r\n  padding: 0.75em 1.1em;\r\n  text-align: center;\r\n}\r\n\r\n/*** Form ***/\r\n\r\n.content-area {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.loginForm h1 {\r\n  font-family: \"ProductSansRegular\", sans-serif;\r\n  font-weight: normal;\r\n  font-size: 30px;\r\n}\r\n\r\n.loginForm h3 {\r\n  font-family: \"ProductSansRegular\", sans-serif;\r\n  font-weight: normal;\r\n  font-size: 14px;\r\n  margin-top: 5px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.loginForm {\r\n  background-color: #fff;\r\n  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.25);\r\n  margin-top: 4vh;\r\n  width: 250px;\r\n  text-align: center;\r\n  padding: 60px;\r\n  border-radius: 25px;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transition: all 0.3s ease-in-out;\r\n  position: absolute;\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n}\r\n\r\n.input-col {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  justify-content: center;\r\n}\r\n\r\n.input-field {\r\n  font-family: \"ProductSansRegular\", sans-serif;\r\n  text-align: left;\r\n  background-color: #f0f0f0;\r\n  border: 2px solid transparent;\r\n  border-radius: 5px;\r\n  font-size: 16px;\r\n  font-weight: normal;\r\n  padding: 10px 0px 10px 10px;\r\n  width: 95%;\r\n  margin-top: 20px;\r\n  transition: border 0.5s;\r\n}\r\n\r\n.input-field::-webkit-input-placeholder {\r\n  color: #c4c4c4;\r\n}\r\n\r\n.input-field::-ms-input-placeholder {\r\n  color: #c4c4c4;\r\n}\r\n\r\n.input-field::placeholder {\r\n  color: #c4c4c4;\r\n}\r\n\r\n.input-field:focus {\r\n  border: 2px solid #71c6f7;\r\n  box-shadow: none;\r\n}\r\n\r\n.errorMessage {\r\n  width: 100%;\r\n  height: 15px;\r\n  margin: auto;\r\n  font-size: 10pt;\r\n  /* padding: 10px 0; */\r\n  margin-top: 5px;\r\n  margin-bottom: 15px;\r\n  color: #cc0033;\r\n}\r\n\r\n.forgotInput {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n/*** Bottom buttons ***/\r\n\r\n.loginButton {\r\n  font-family: \"ProductSansRegular\", sans-serif;\r\n  /* margin-top: 30px; */\r\n  margin-bottom: 20px;\r\n  font-size: 17px;\r\n  padding: 10px 20px;\r\n  color: #fff;\r\n  border-radius: 5px;\r\n  background-color: #4286f5;\r\n  transition: 0.15s all ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\n.loginButton:hover {\r\n  background-color: #7aadff;\r\n  transition: 0.15s all ease-in-out;\r\n}\r\n\r\n.forgot-button {\r\n  padding-top: 5px;\r\n  font-size: 14px;\r\n  color: #c4c4c4;\r\n  display: block;\r\n  cursor: pointer;\r\n  -webkit-text-decoration-line: underline;\r\n          text-decoration-line: underline;\r\n}\r\n\r\n/*** Form validation ***/\r\n\r\n.flag {\r\n  position: absolute;\r\n  color: #cc0033;\r\n  margin-left: 8px;\r\n  margin-top: 13px;\r\n}\r\n\r\n.error {\r\n  color: #cc0033;\r\n  background-color: #fce4e4;\r\n  border: 2px solid #cc0033;\r\n}\r\n\r\n.error::-webkit-input-placeholder {\r\n  color: #cc0033;\r\n}\r\n\r\n.error::-ms-input-placeholder {\r\n  color: #cc0033;\r\n}\r\n\r\n.error::placeholder {\r\n  color: #cc0033;\r\n}\r\n\r\n.errorBtn {\r\n  color: #cc0033;\r\n  background-color: #fce4e4;\r\n  border: 2px solid #cc0033;\r\n}\r\n\r\n.errorBtn:hover {\r\n  background-color: #cc0033;\r\n  color: #fce4e4;\r\n}\r\n\r\n.success {\r\n  background-color: #dff0d8;\r\n  color: #1ecd97;\r\n  border: 2px solid #1ecd97;\r\n}\r\n\r\n.success::-webkit-input-placeholder {\r\n  color: #1ecd97;\r\n}\r\n\r\n.success::-ms-input-placeholder {\r\n  color: #1ecd97;\r\n}\r\n\r\n.success::placeholder {\r\n  color: #1ecd97;\r\n}\r\n\r\n.show {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQStGSTs7QUFFSjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsZUFBZTtDQUNoQjs7QUFFRCxxQkFBcUI7O0FBQ3JCO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsK0JBQStCO0NBQ2hDOztBQUNEO0VBQ0Usc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7Q0FDaEI7O0FBQ0Q7RUFDRSxnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsK0JBQStCO0NBQ2hDOztBQUNEO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtDQUN2Qjs7QUFDRDtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjs7QUFDRDtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtDQUNwQjs7QUFFRCxjQUFjOztBQUVkO0VBQ0UsYUFBYTtFQUNiLFlBQVk7Q0FDYjs7QUFDRDtFQUNFLDhDQUE4QztFQUM5QyxvQkFBb0I7RUFDcEIsZ0JBQWdCO0NBQ2pCOztBQUNEO0VBQ0UsOENBQThDO0VBQzlDLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtDQUNyQjs7QUFDRDtFQUNFLHVCQUF1QjtFQUN2QiwyQ0FBMkM7RUFDM0MsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLG9DQUE0QjtVQUE1Qiw0QkFBNEI7Q0FDN0I7O0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5Qix3QkFBd0I7Q0FDekI7O0FBQ0Q7RUFDRSw4Q0FBOEM7RUFDOUMsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsd0JBQXdCO0NBQ3pCOztBQUNEO0VBQ0UsZUFBZTtDQUNoQjs7QUFGRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRkQ7RUFDRSxlQUFlO0NBQ2hCOztBQUNEO0VBQ0UsMEJBQTBCO0VBQzFCLGlCQUFpQjtDQUNsQjs7QUFDRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixlQUFlO0NBQ2hCOztBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUVELHdCQUF3Qjs7QUFDeEI7RUFDRSw4Q0FBOEM7RUFDOUMsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLGtDQUFrQztFQUNsQyxnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsa0NBQWtDO0NBQ25DOztBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0NBQ2pDOztBQUVELHlCQUF5Qjs7QUFDekI7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7Q0FDbEI7O0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLDBCQUEwQjtDQUMzQjs7QUFDRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRkQ7RUFDRSxlQUFlO0NBQ2hCOztBQUZEO0VBQ0UsZUFBZTtDQUNoQjs7QUFDRDtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsMEJBQTBCO0NBQzNCOztBQUNEO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7Q0FDaEI7O0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLDBCQUEwQjtDQUMzQjs7QUFDRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRkQ7RUFDRSxlQUFlO0NBQ2hCOztBQUZEO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsaUNBQWlDO0NBQ2xDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmxvZ2luIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlByb2R1Y3RTYW5zUmVndWxhclwiO1xyXG59XHJcblxyXG4ubG9naW4tZm9ybSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGFkY2UwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcclxufVxyXG4ubG9naW4tZm9ybTpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmxvZ2luLXRpdGxlIHtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCB7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2YwZjE7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC41cztcclxufVxyXG4uaW5wdXQtZmllbGQ6Zm9jdXMge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM3MWM2Zjc7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmxvZ2luLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmZvcmdvdC1idXR0b24ge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzQ0NDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICBjb2xvcjogI2NjMDAzMztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNlNGU0O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjYzAwMzM7XHJcbn1cclxuLmVycm9yOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNjYzAwMzM7XHJcbn1cclxuLmVycm9yQnRuIHtcclxuICBjb2xvcjogI2NjMDAzMztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNlNGU0O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjYzAwMzM7XHJcbn1cclxuLmVycm9yQnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MwMDMzO1xyXG4gIGNvbG9yOiAjZmNlNGU0O1xyXG59XHJcbi5zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmMGQ4O1xyXG4gIGNvbG9yOiAjMWVjZDk3O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMxZWNkOTc7XHJcbn1cclxuLnN1Y2Nlc3M6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzFlY2Q5NztcclxufVxyXG4uZXJyb3JNZXNzYWdlIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBmb250LXNpemU6IDEwcHQ7XHJcbiAgY29sb3I6ICNjYzAwMzM7XHJcbn0gKi9cclxuXHJcbi5sb2dpbiB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlByb2R1Y3RTYW5zUmVndWxhclwiO1xyXG4gIGNvbG9yOiAjNTU1NTU1O1xyXG59XHJcblxyXG4vKioqKioqKiBOYXYgKioqKioqKi9cclxubmF2IHtcclxuICB3aWR0aDogODYlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmc6IDF2aCAyMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgei1pbmRleDogMTAwICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tZGFyay10ZXh0KTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG4ubmF2TGVmdCB7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzAwNjZmZjsgKi9cclxuICAvKiB3aWR0aDogNDUwcHg7ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4ubmF2UmlnaHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcbi5sb2dvIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG4uc3ViUG9pbnQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5idG5TbWFsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyODZmNTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmc6IDAuNzVlbSAxLjFlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qKiogRm9ybSAqKiovXHJcblxyXG4uY29udGVudC1hcmVhIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmxvZ2luRm9ybSBoMSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUHJvZHVjdFNhbnNSZWd1bGFyXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLmxvZ2luRm9ybSBoMyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUHJvZHVjdFNhbnNSZWd1bGFyXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuLmxvZ2luRm9ybSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDVweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgbWFyZ2luLXRvcDogNHZoO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNjBweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcbi5pbnB1dC1jb2wge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uaW5wdXQtZmllbGQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlByb2R1Y3RTYW5zUmVndWxhclwiLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAxMHB4O1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC41cztcclxufVxyXG4uaW5wdXQtZmllbGQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2M0YzRjNDtcclxufVxyXG4uaW5wdXQtZmllbGQ6Zm9jdXMge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM3MWM2Zjc7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uZXJyb3JNZXNzYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMTBwdDtcclxuICAvKiBwYWRkaW5nOiAxMHB4IDA7ICovXHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgY29sb3I6ICNjYzAwMzM7XHJcbn1cclxuXHJcbi5mb3Jnb3RJbnB1dCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLyoqKiBCb3R0b20gYnV0dG9ucyAqKiovXHJcbi5sb2dpbkJ1dHRvbiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUHJvZHVjdFNhbnNSZWd1bGFyXCIsIHNhbnMtc2VyaWY7XHJcbiAgLyogbWFyZ2luLXRvcDogMzBweDsgKi9cclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Mjg2ZjU7XHJcbiAgdHJhbnNpdGlvbjogMC4xNXMgYWxsIGVhc2UtaW4tb3V0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubG9naW5CdXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3YWFkZmY7XHJcbiAgdHJhbnNpdGlvbjogMC4xNXMgYWxsIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5mb3Jnb3QtYnV0dG9uIHtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogI2M0YzRjNDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxufVxyXG5cclxuLyoqKiBGb3JtIHZhbGlkYXRpb24gKioqL1xyXG4uZmxhZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbG9yOiAjY2MwMDMzO1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgbWFyZ2luLXRvcDogMTNweDtcclxufVxyXG4uZXJyb3Ige1xyXG4gIGNvbG9yOiAjY2MwMDMzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2U0ZTQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2NjMDAzMztcclxufVxyXG4uZXJyb3I6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2NjMDAzMztcclxufVxyXG4uZXJyb3JCdG4ge1xyXG4gIGNvbG9yOiAjY2MwMDMzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2U0ZTQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2NjMDAzMztcclxufVxyXG4uZXJyb3JCdG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYzAwMzM7XHJcbiAgY29sb3I6ICNmY2U0ZTQ7XHJcbn1cclxuLnN1Y2Nlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmYwZDg7XHJcbiAgY29sb3I6ICMxZWNkOTc7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzFlY2Q5NztcclxufVxyXG4uc3VjY2Vzczo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjMWVjZDk3O1xyXG59XHJcblxyXG4uc2hvdyB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\r\n  <nav id=\"nav\">\r\n    <div class=\"navLeft\">\r\n      <a href=\"#\" class=\"logo\">Recipeasy</a> <a [routerLink]=\"['/info']\" class=\"subPoint\">About</a> <a [routerLink]=\"['/info']\" class=\"subPoint\">How it works</a> <a [routerLink]=\"['/info']\" class=\"subPoint\">Contact</a>\r\n    </div>\r\n    <div class=\"navRight\"><a class=\"subPoint\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/register']\">Register</a></div>\r\n  </nav>\r\n  <div class=\"content-area\">\r\n    <div class=\"loginForm\" [ngClass]=\"{ show: !forgot }\">\r\n      <h1>Log in</h1>\r\n      <form autocomplete=\"off\">\r\n        <div class=\"input-col\">\r\n          <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"input-field\" placeholder=\"Username\" />\r\n        </div>\r\n        <div class=\"input-col\">\r\n          <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"input-field\" placeholder=\"Password\" autocomplete=\"password\" />\r\n        </div>\r\n        <div class=\"errorMessage\">\r\n          <p>{{ errorMessage }}</p>\r\n        </div>\r\n        <input class=\"loginButton\" (click)=\"onLoginSubmit()\" type=\"button\" value=\"Log in\" />\r\n        <a class=\"forgot-button\" (click)=\"forgot = !forgot\">Forgot your username or password?</a>\r\n        <a class=\"forgot-button\" [routerLink]=\"['/register']\">Don't have an account? Register!</a>\r\n      </form>\r\n    </div>\r\n    <div class=\"loginForm\" [ngClass]=\"{ show: forgot }\">\r\n      <h1 class=\"login-title\">Recover</h1>\r\n      <input class=\"input-field forgotInput\" type=\"text\" [(ngModel)]=\"recovery\" name=\"recovery\" placeholder=\"Email\" />\r\n      <input class=\"loginButton\" (click)=\"onRecoverSubmit()\" type=\"button\" value=\"Send recovery\" />\r\n      <a class=\"forgot-button\" (click)=\"forgot = !forgot\">Go back.</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, titleService, route) {
        this.authService = authService;
        this.router = router;
        this.titleService = titleService;
        this.route = route;
        this.username = "";
        this.password = "";
        this.forgot = false;
        this.returnUrl = "/";
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn()) {
            return this.router.navigate(["/"]);
        }
        this.titleService.setTitle("Login");
        this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/dashboard";
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.jwt, data.user);
                _this.error = false;
                _this.router.navigate([_this.returnUrl]);
            }
            else {
                if (data.inactive) {
                    _this.error = true;
                    _this.errorMessage = "The account has not yet been authenticated. Please check your email to activate your account.";
                }
                else {
                    _this.error = true;
                    _this.errorMessage = data.message;
                }
            }
        });
    };
    LoginComponent.prototype.onRecoverSubmit = function () {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(this.recovery).toLowerCase())) {
            this.router.navigate(["/"]);
        }
        else {
            this.router.navigate(["/"]);
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n  width: 100%;\r\n  height: 59px;\r\n  background-color: #fff;\r\n  color: #000;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  overflow: hidden;\r\n  border-bottom: #e2e2e2 1px solid;\r\n}\r\n\r\n/*** Button to toggle sidebar ***/\r\n\r\n.sidebarToggle {\r\n  font-size: 16pt;\r\n  z-index: 1;\r\n}\r\n\r\n.sideToggle {\r\n  cursor: pointer;\r\n}\r\n\r\n.sideGraphic {\r\n  background-color: #192b4000;\r\n  width: 300px;\r\n  height: 100%;\r\n  transition: all 0.275s ease-out 0s;\r\n  position: absolute;\r\n  align-self: flex-start;\r\n}\r\n\r\n.wideGraphic {\r\n  width: 0px;\r\n  transition: all 0.25s ease-out 0s;\r\n}\r\n\r\n/*** Logo area ***/\r\n\r\n@media screen and (max-width: 1000px) {\r\n  .leftNav {\r\n    display: none !important;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .searchBar input:focus {\r\n    width: 200px !important;\r\n  }\r\n}\r\n\r\n.leftNav {\r\n  display: flex;\r\n  /* background-color: #4286f5; */\r\n  height: 100%;\r\n  padding: 0 50px;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.logoArea {\r\n  font-family: \"ProductSansRegular\", sans-serif;\r\n}\r\n\r\n.logo {\r\n  font-size: 22pt;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  color: #000;\r\n}\r\n\r\n.logoContainer {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n  opacity: 1;\r\n  transition: all 0.2s ease-out 0.2s;\r\n}\r\n\r\n.hidden {\r\n  opacity: 0;\r\n  transition: all 0.2s ease-out 0s;\r\n}\r\n\r\n/*** Main nav area ***/\r\n\r\n.rightNav {\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n  /* background-color: green; */\r\n  padding-left: 20px;\r\n}\r\n\r\n/*** Search bar ***/\r\n\r\n.searchBar {\r\n  height: 65%;\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.searchBar input {\r\n  height: 100%;\r\n  width: 200px;\r\n  border-radius: 25px;\r\n  padding-left: 20px;\r\n  padding-right: 45px;\r\n  border: #e2e2e2 1px solid;\r\n  font-size: 16px;\r\n  box-sizing: border-box;\r\n  font-family: \"ProductSansRegular\", sans-serif;\r\n  transition: all 0.4s ease-in-out 0s;\r\n}\r\n\r\n.searchBar input:focus {\r\n  width: 400px;\r\n  border: #92b1ff 2px solid;\r\n  transition: all 0.4s ease-in-out 0s;\r\n}\r\n\r\n.searchBar input::-webkit-input-placeholder {\r\n  color: #afafaf;\r\n}\r\n\r\n.searchBar input::-ms-input-placeholder {\r\n  color: #afafaf;\r\n}\r\n\r\n.searchBar input::placeholder {\r\n  color: #afafaf;\r\n}\r\n\r\n.searchBar i {\r\n  color: #e2e2e2;\r\n  position: absolute;\r\n  right: 0;\r\n  padding-right: 20px;\r\n  cursor: pointer;\r\n  transition: all 0.2s ease-in-out 0s;\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n.textPresent {\r\n  visibility: hidden !important;\r\n  opacity: 0 !important;\r\n  transition: all 0.2s ease-in-out 0s;\r\n}\r\n\r\n.profileInformation {\r\n  margin-left: 30px;\r\n  margin-right: 20px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.username {\r\n  margin-right: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.profileIcon {\r\n  height: 40px;\r\n  width: 40px;\r\n  border-radius: 50%;\r\n  margin-right: 20px;\r\n  cursor: pointer;\r\n  background-color: #fff;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.profileIcon i {\r\n  font-size: 40px;\r\n  color: rgb(110, 110, 110);\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osY0FBYztFQUNkLCtCQUErQjtFQUMvQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGlDQUFpQztDQUNsQzs7QUFFRCxrQ0FBa0M7O0FBQ2xDO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7Q0FDWjs7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFDRDtFQUNFLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsdUJBQXVCO0NBQ3hCOztBQUNEO0VBQ0UsV0FBVztFQUNYLGtDQUFrQztDQUNuQzs7QUFFRCxtQkFBbUI7O0FBQ25CO0VBQ0U7SUFDRSx5QkFBeUI7R0FDMUI7Q0FDRjs7QUFDRDtFQUNFO0lBQ0Usd0JBQXdCO0dBQ3pCO0NBQ0Y7O0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLDhCQUE4QjtDQUMvQjs7QUFDRDtFQUNFLDhDQUE4QztDQUMvQzs7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7Q0FDYjs7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLG1DQUFtQztDQUNwQzs7QUFDRDtFQUNFLFdBQVc7RUFDWCxpQ0FBaUM7Q0FDbEM7O0FBRUQsdUJBQXVCOztBQUN2QjtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0NBQ3BCOztBQUVELG9CQUFvQjs7QUFDcEI7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLG9CQUFvQjtFQUNwQixtQkFBbUI7Q0FDcEI7O0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLDhDQUE4QztFQUM5QyxvQ0FBb0M7Q0FDckM7O0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLG9DQUFvQztDQUNyQzs7QUFDRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRkQ7RUFDRSxlQUFlO0NBQ2hCOztBQUZEO0VBQ0UsZUFBZTtDQUNoQjs7QUFDRDtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsU0FBUztFQUNULG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsb0NBQW9DO0VBQ3BDLG9CQUFvQjtFQUNwQixXQUFXO0NBQ1o7O0FBRUQ7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLG9DQUFvQztDQUNyQzs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG9CQUFvQjtDQUNyQjs7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLG9CQUFvQjtDQUNyQjs7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQiwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1OXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1ib3R0b206ICNlMmUyZTIgMXB4IHNvbGlkO1xyXG59XHJcblxyXG4vKioqIEJ1dHRvbiB0byB0b2dnbGUgc2lkZWJhciAqKiovXHJcbi5zaWRlYmFyVG9nZ2xlIHtcclxuICBmb250LXNpemU6IDE2cHQ7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4uc2lkZVRvZ2dsZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zaWRlR3JhcGhpYyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MmI0MDAwO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjc1cyBlYXNlLW91dCAwcztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxufVxyXG4ud2lkZUdyYXBoaWMge1xyXG4gIHdpZHRoOiAwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2Utb3V0IDBzO1xyXG59XHJcblxyXG4vKioqIExvZ28gYXJlYSAqKiovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIC5sZWZ0TmF2IHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuc2VhcmNoQmFyIGlucHV0OmZvY3VzIHtcclxuICAgIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4ubGVmdE5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4NmY1OyAqL1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAwIDUwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG4ubG9nb0FyZWEge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlByb2R1Y3RTYW5zUmVndWxhclwiLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5sb2dvIHtcclxuICBmb250LXNpemU6IDIycHQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5sb2dvQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dCAwLjJzO1xyXG59XHJcbi5oaWRkZW4ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQgMHM7XHJcbn1cclxuXHJcbi8qKiogTWFpbiBuYXYgYXJlYSAqKiovXHJcbi5yaWdodE5hdiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGdyZWVuOyAqL1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxuLyoqKiBTZWFyY2ggYmFyICoqKi9cclxuLnNlYXJjaEJhciB7XHJcbiAgaGVpZ2h0OiA2NSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uc2VhcmNoQmFyIGlucHV0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQ1cHg7XHJcbiAgYm9yZGVyOiAjZTJlMmUyIDFweCBzb2xpZDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogXCJQcm9kdWN0U2Fuc1JlZ3VsYXJcIiwgc2Fucy1zZXJpZjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dCAwcztcclxufVxyXG4uc2VhcmNoQmFyIGlucHV0OmZvY3VzIHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgYm9yZGVyOiAjOTJiMWZmIDJweCBzb2xpZDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dCAwcztcclxufVxyXG4uc2VhcmNoQmFyIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNhZmFmYWY7XHJcbn1cclxuLnNlYXJjaEJhciBpIHtcclxuICBjb2xvcjogI2UyZTJlMjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHM7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4udGV4dFByZXNlbnQge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcztcclxufVxyXG5cclxuLnByb2ZpbGVJbmZvcm1hdGlvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4udXNlcm5hbWUge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnByb2ZpbGVJY29uIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnByb2ZpbGVJY29uIGkge1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBjb2xvcjogcmdiKDExMCwgMTEwLCAxMTApO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\r\n  <div class=\"leftNav\">\r\n    <div class=\"logoArea\">\r\n      <div class=\"logoContainer\" [ngClass]=\"{ hidden: big }\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/']\"><a class=\"logo\" [routerLink]=\"['/']\">Recipeasy</a></div>\r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"middleNav\"></div> -->\r\n  <div class=\"rightNav\">\r\n    <div class=\"searchBar\">\r\n      <i class=\"fas fa-search\" [ngClass]=\"{ textPresent: deleteText }\" (click)=\"enterSearch()\"></i>\r\n      <i class=\"fas fa-times\" [ngClass]=\"{ textPresent: !deleteText }\" (click)=\"searchQuery = undefined; this.deleteText = false\"></i>\r\n      <input type=\"text\" [(ngModel)]=\"searchQuery\" (keyup.enter)=\"enterSearch()\" placeholder=\"Search...\" />\r\n    </div>\r\n    <div class=\"profileInformation\">\r\n      <div class=\"profileIcon\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/profile']\">\r\n        <i class=\"fas fa-user-circle\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidenav/sidenav.service */ "./src/app/components/sidenav/sidenav.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/general.service */ "./src/app/services/general.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, sidenav, userService, generalService) {
        this.authService = authService;
        this.router = router;
        this.sidenav = sidenav;
        this.userService = userService;
        this.generalService = generalService;
        this.sidenavOpen = false;
        this.big = false;
        this.deleteText = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.generalService.getUser().username;
        this.userService.getUserData().subscribe(function (data) {
            _this.userData = data;
        });
        this.sidenav.change.subscribe(function (change) {
            _this.big = change;
        });
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigate(["/"]);
        return false;
    };
    NavbarComponent.prototype.enterSearch = function () {
        var _this = this;
        if (this.searchQuery === undefined || this.searchQuery === "") {
        }
        else {
            this.deleteText = true;
            this.router.navigate(["/results"], {
                queryParams: { search_query: this.searchQuery }
            });
            this.userService.updateSearchHistory(this.userData.history, this.searchQuery).subscribe(function (data) {
                _this.userData = data;
            });
        }
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-navbar",
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_2__["SidenavService"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_general_service__WEBPACK_IMPORTED_MODULE_5__["GeneralService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profilePage {\r\n  min-height: 100%;\r\n  overflow: hidden;\r\n\r\n  --button-color: #4286f5;\r\n}\r\n\r\n.profileCard {\r\n  margin: auto;\r\n  background-color: #fff;\r\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n  border-radius: 5px;\r\n  text-align: center;\r\n  margin-top: 100px;\r\n  padding: 20px;\r\n  width: 300px;\r\n}\r\n\r\n.lowerArea {\r\n  width: 100%;\r\n  display: flex;\r\n  margin: 100px 0;\r\n  justify-content: center;\r\n}\r\n\r\n.btn {\r\n  color: #fff;\r\n  background-color: var(--button-color);\r\n  display: inline-block;\r\n  border-radius: 5px;\r\n  padding: 1.15em 2.3em;\r\n  text-align: center;\r\n  font-size: 17px;\r\n  cursor: pointer;\r\n  transition: 0.15s all ease-in-out;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: rgb(53, 92, 165);\r\n  transition: 0.15s all ease-in-out;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7O0VBRWpCLHdCQUF3QjtDQUN6Qjs7QUFFRDtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIseUVBQXlFO0VBQ3pFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQix3QkFBd0I7Q0FDekI7O0FBQ0Q7RUFDRSxZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtDQUFrQztDQUNuQzs7QUFDRDtFQUNFLG1DQUFtQztFQUNuQyxrQ0FBa0M7Q0FDbkMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGVQYWdlIHtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIC0tYnV0dG9uLWNvbG9yOiAjNDI4NmY1O1xyXG59XHJcblxyXG4ucHJvZmlsZUNhcmQge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4ubG93ZXJBcmVhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMTAwcHggMDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYnRuIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMS4xNWVtIDIuM2VtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuMTVzIGFsbCBlYXNlLWluLW91dDtcclxufVxyXG4uYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTMsIDkyLCAxNjUpO1xyXG4gIHRyYW5zaXRpb246IDAuMTVzIGFsbCBlYXNlLWluLW91dDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profilePage\">\r\n  <div *ngIf=\"user\">\r\n    <div class=\"profileCard\">\r\n      <h2>{{ user.username }}</h2>\r\n      <p>{{ user.email }}</p>\r\n      <div class=\"profileStats\">\r\n        <p>Cookbook follows: {{ scores?.cbF }}</p>\r\n        <p>Recipe views: {{ scores?.rV }}</p>\r\n        <p>Score: {{ scores?.rS }}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"lowerArea\">\r\n      <div class=\"btn\" (click)=\"logout()\">Log out</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, userService, title, router) {
        this.authService = authService;
        this.userService = userService;
        this.title = title;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title.setTitle("Profile");
        this.authService.getProfile().subscribe(function (data) {
            if (data.success) {
                _this.user = data;
                _this.userService.getUserData().subscribe(function (data) {
                    _this.data = data;
                    _this.getStats();
                });
            }
        });
    };
    ProfileComponent.prototype.getStats = function () {
        var cookbookFollowers = 0;
        var recipeViews = 0;
        var recipeScore = 0;
        this.data.cookbooks.author.forEach(function (e) {
            cookbookFollowers = cookbookFollowers + e.cookbook.followers;
        });
        this.data.recipes.author.forEach(function (e) {
            recipeViews = recipeViews + e.recipe.views;
            recipeScore = recipeScore + e.recipe.score;
        });
        this.scores = { cbF: cookbookFollowers, rV: recipeViews, rS: recipeScore };
        console.log(this.scores);
    };
    ProfileComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(["/"]);
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-profile",
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/recipe-dialog/recipe-dialog.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/recipe-dialog/recipe-dialog.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialogWindow {\r\n  height: 50vh;\r\n  max-height: 550px;\r\n  width: 350px;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n.scrollArea {\r\n  overflow-y: auto;\r\n  height: calc(100% - 40px);\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 1;\r\n  visibility: visible;\r\n  opacity: 1;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n.hideScrollArea {\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n/*** Top buttons ***/\r\n.topButtons {\r\n  /* background-color: red; */\r\n  margin: auto;\r\n  height: 40px;\r\n  width: 95%;\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 28px;\r\n}\r\n.topButtons i {\r\n  cursor: pointer;\r\n}\r\n/*** Recipe info ***/\r\n.recipeInfo {\r\n  width: 100%;\r\n  margin-top: 10px;\r\n  margin-bottom: 35px;\r\n}\r\n.recipeImage {\r\n  height: 200px;\r\n  width: 200px;\r\n  background-color: #f1f0f5;\r\n  border-radius: 25px;\r\n  margin: auto;\r\n}\r\n.image {\r\n  height: 200px;\r\n  width: 200px;\r\n}\r\n.image img {\r\n  height: 100%;\r\n  width: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  border-radius: 25px;\r\n}\r\n.hidden {\r\n  visibility: hidden;\r\n}\r\n.recipeTitle {\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  padding: 10px 0 0 0;\r\n}\r\n/*** Recipe buttons ***/\r\n.recipeButtons {\r\n  margin: auto;\r\n  width: 90%;\r\n}\r\n.recipeButton {\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  font-size: 16px;\r\n  margin: 20px 0;\r\n}\r\n.recipeButton i {\r\n  margin-right: 10px;\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n}\r\n.recipeButton p {\r\n  cursor: pointer;\r\n}\r\n/*** Cookbook area ***/\r\n.cookbookArea {\r\n  height: calc(100% - 40px);\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 2;\r\n  visibility: hidden;\r\n  background-color: #fff;\r\n  margin: auto;\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  opacity: 0;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n.showCookbookArea {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n.cookbookArea h3 {\r\n  text-align: center;\r\n}\r\n.newBtn {\r\n  margin: 20px auto;\r\n  display: inline-block;\r\n  text-align: center;\r\n  padding: 1em 1.9em;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  border-radius: 25px;\r\n  background-color: #5c7cf2;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n.cookbookList {\r\n  overflow-y: auto;\r\n  flex-grow: 1;\r\n  width: 100%;\r\n  transition: all 0.3s ease-in-out;\r\n  /* height: 255px; */\r\n}\r\n.cookbookItem {\r\n  /* padding: 15px; */\r\n  border-radius: 8px;\r\n  margin-bottom: 10px;\r\n  text-align: left;\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n}\r\n.cookbookImage {\r\n  height: 50px;\r\n  width: 50px;\r\n  background-color: #f1f0f5;\r\n  margin-right: 10px;\r\n  border-radius: 8px;\r\n}\r\n.sImage {\r\n  height: 50px;\r\n  width: 50px;\r\n}\r\n.sImage img {\r\n  height: 100%;\r\n  width: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  border-radius: 8px;\r\n}\r\n/*** Name cookbook ***/\r\n.newCookbook {\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: all 0.3s ease-in-out;\r\n\r\n  height: calc(100% - 40px);\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 3;\r\n  background-color: #fff;\r\n  margin: auto;\r\n  text-align: center;\r\n}\r\n.showNewCookbook {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n.newCoobook h3 {\r\n  font-size: 14px;\r\n}\r\n.newCookbook input {\r\n  width: 50%;\r\n  margin: auto;\r\n  border-bottom: 1px #000 solid;\r\n  padding: 3px 0;\r\n  margin: 40px 0;\r\n  font-size: 18px;\r\n  font-family: \"ProductSansRegular\", sans-serif;\r\n  text-align: center;\r\n}\r\n.nameBtns {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n.btn {\r\n  font-size: 13px;\r\n  font-weight: bold;\r\n  color: #000;\r\n  cursor: pointer;\r\n}\r\n/*** Colors and stuff ***/\r\n.saved {\r\n  color: #eb4d44;\r\n}\r\n/*** General changes ***/\r\n::-webkit-scrollbar {\r\n  width: 0px;\r\n  background: transparent;\r\n}\r\n.scrollArea::-webkit-scrollbar,\r\n.cookbookList::-webkit-scrollbar {\r\n  width: 4px;\r\n}\r\n.scrollArea::-webkit-scrollbar-thumb,\r\n.cookbookList::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  background-color: #ffffff00;\r\n  margin: 2px 0;\r\n}\r\n.scrollArea:hover::-webkit-scrollbar-thumb,\r\n.cookbookList:hover::-webkit-scrollbar-thumb {\r\n  background-color: #dadada;\r\n}\r\n.noselect {\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWNpcGUtZGlhbG9nL3JlY2lwZS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxpQ0FBaUM7Q0FDbEM7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsaUNBQWlDO0NBQ2xDO0FBRUQscUJBQXFCO0FBQ3JCO0VBQ0UsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixhQUFhO0VBQ2IsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLG9CQUFvQjtFQUNwQixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUVELHFCQUFxQjtBQUNyQjtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHFCQUFrQjtLQUFsQixrQkFBa0I7RUFDbEIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtDQUNyQjtBQUVELHdCQUF3QjtBQUN4QjtFQUNFLGFBQWE7RUFDYixXQUFXO0NBQ1o7QUFDRDtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUVELHVCQUF1QjtBQUN2QjtFQUNFLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsaUNBQWlDO0NBQ2xDO0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGlDQUFpQztDQUNsQztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixnQkFBZ0I7Q0FDakI7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGFBQWE7RUFDYixZQUFZO0NBQ2I7QUFDRDtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1oscUJBQWtCO0tBQWxCLGtCQUFrQjtFQUNsQixtQkFBbUI7Q0FDcEI7QUFFRCx1QkFBdUI7QUFDdkI7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGlDQUFpQzs7RUFFakMsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGlDQUFpQztDQUNsQztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiw4Q0FBOEM7RUFDOUMsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtDQUNqQjtBQUVELDBCQUEwQjtBQUMxQjtFQUNFLGVBQWU7Q0FDaEI7QUFFRCx5QkFBeUI7QUFDekI7RUFDRSxXQUFXO0VBQ1gsd0JBQXdCO0NBQ3pCO0FBRUQ7O0VBRUUsV0FBVztDQUNaO0FBQ0Q7O0VBRUUsb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1QixjQUFjO0NBQ2Y7QUFDRDs7RUFFRSwwQkFBMEI7Q0FDM0I7QUFFRDtFQUNFLDRCQUE0QjtFQUM1QiwwQkFBMEI7RUFFMUIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixrQkFBa0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlY2lwZS1kaWFsb2cvcmVjaXBlLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZ1dpbmRvdyB7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG4gIG1heC1oZWlnaHQ6IDU1MHB4O1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uc2Nyb2xsQXJlYSB7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG4uaGlkZVNjcm9sbEFyZWEge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4vKioqIFRvcCBidXR0b25zICoqKi9cclxuLnRvcEJ1dHRvbnMge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cclxuICBtYXJnaW46IGF1dG87XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbn1cclxuLnRvcEJ1dHRvbnMgaSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKioqIFJlY2lwZSBpbmZvICoqKi9cclxuLnJlY2lwZUluZm8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxufVxyXG4ucmVjaXBlSW1hZ2Uge1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYwZjU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmltYWdlIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG4uaW1hZ2UgaW1nIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG4uaGlkZGVuIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLnJlY2lwZVRpdGxlIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggMCAwIDA7XHJcbn1cclxuXHJcbi8qKiogUmVjaXBlIGJ1dHRvbnMgKioqL1xyXG4ucmVjaXBlQnV0dG9ucyB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuLnJlY2lwZUJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuLnJlY2lwZUJ1dHRvbiBpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucmVjaXBlQnV0dG9uIHAge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyoqKiBDb29rYm9vayBhcmVhICoqKi9cclxuLmNvb2tib29rQXJlYSB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMjtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5zaG93Q29va2Jvb2tBcmVhIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5jb29rYm9va0FyZWEgaDMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubmV3QnRuIHtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFlbSAxLjllbTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM3Y2YyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNvb2tib29rTGlzdCB7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLyogaGVpZ2h0OiAyNTVweDsgKi9cclxufVxyXG4uY29va2Jvb2tJdGVtIHtcclxuICAvKiBwYWRkaW5nOiAxNXB4OyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNvb2tib29rSW1hZ2Uge1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMGY1O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuLnNJbWFnZSB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcbi5zSW1hZ2UgaW1nIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4vKioqIE5hbWUgY29va2Jvb2sgKioqL1xyXG4ubmV3Q29va2Jvb2sge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2hvd05ld0Nvb2tib29rIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5uZXdDb29ib29rIGgzIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLm5ld0Nvb2tib29rIGlucHV0IHtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBib3JkZXItYm90dG9tOiAxcHggIzAwMCBzb2xpZDtcclxuICBwYWRkaW5nOiAzcHggMDtcclxuICBtYXJnaW46IDQwcHggMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiUHJvZHVjdFNhbnNSZWd1bGFyXCIsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5uYW1lQnRucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYnRuIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKioqIENvbG9ycyBhbmQgc3R1ZmYgKioqL1xyXG4uc2F2ZWQge1xyXG4gIGNvbG9yOiAjZWI0ZDQ0O1xyXG59XHJcblxyXG4vKioqIEdlbmVyYWwgY2hhbmdlcyAqKiovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAwcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5zY3JvbGxBcmVhOjotd2Via2l0LXNjcm9sbGJhcixcclxuLmNvb2tib29rTGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA0cHg7XHJcbn1cclxuLnNjcm9sbEFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iLFxyXG4uY29va2Jvb2tMaXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMDA7XHJcbiAgbWFyZ2luOiAycHggMDtcclxufVxyXG4uc2Nyb2xsQXJlYTpob3Zlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsXHJcbi5jb29rYm9va0xpc3Q6aG92ZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xyXG59XHJcblxyXG4ubm9zZWxlY3Qge1xyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/recipe-dialog/recipe-dialog.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/recipe-dialog/recipe-dialog.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialogWindow\">\r\n  <div class=\"topButtons\">\r\n    <div><i class=\"fas fa-arrow-left\" *ngIf=\"cookbookAreaOpen\" (click)=\"cookbookAreaOpen = cookbookNameOpen = false; scrollAreaOpen = true\"></i></div>\r\n    <div><i class=\"fas fa-times\" (click)=\"dialog.close()\"></i></div>\r\n  </div>\r\n  <div class=\"scrollArea\" [ngClass]=\"{ hideScrollArea: !scrollAreaOpen }\">\r\n    <div class=\"recipeInfo\">\r\n      <div class=\"recipeImage\">\r\n        <div class=\"image\">\r\n          <img [ngClass]=\"{ hidden: !recipe?.image }\" src=\"{{ generalService.getImageLink(recipe?.image) }}\" #rImg />\r\n        </div>\r\n      </div>\r\n      <div class=\"recipeTitle\">{{ recipe.title }}</div>\r\n    </div>\r\n    <div class=\"recipeButtons noselect\">\r\n      <div class=\"recipeButton\" (click)=\"saveRecipe()\">\r\n        <i class=\"fas fa-heart\" [ngClass]=\"{ saved: this.recipe.saved }\"></i>\r\n        <p *ngIf=\"!this.recipe.saved\">Save</p>\r\n        <p *ngIf=\"this.recipe.saved\">Remove</p>\r\n      </div>\r\n      <div class=\"recipeButton\" (click)=\"cookbookAreaOpen = true; scrollAreaOpen = false\">\r\n        <i class=\"fas fa-plus\"></i>\r\n        <p>Add to Cookbook</p>\r\n      </div>\r\n      <div class=\"recipeButton\" (click)=\"getLink()\">\r\n        <i class=\"fas fa-link\"></i>\r\n        <p>Link</p>\r\n      </div>\r\n      <div class=\"recipeButton\" (click)=\"report()\">\r\n        <i class=\"fas fa-flag\"></i>\r\n        <p>Report</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"cookbookArea\" [ngClass]=\"{ showCookbookArea: cookbookAreaOpen }\">\r\n    <div>\r\n      <h3>Add to cookbook</h3>\r\n      <div class=\"newBtn\" (click)=\"cookbookNameOpen = true; cookbookAreaOpen = false\">NEW COOKBOOK</div>\r\n    </div>\r\n    <div class=\"cookbookList\">\r\n      <div class=\"cookbookItem\" *ngFor=\"let cookbook of userData?.cookbooks.author\" (click)=\"addToCookbook(cookbook)\">\r\n        <div class=\"cookbookImage\">\r\n          <div class=\"sImage\">\r\n            <img [ngClass]=\"{ hidden: !cookbook?.cookbook.image }\" src=\"{{ generalService.getImageLink(cookbook?.cookbook.image) }}\" #cImg />\r\n          </div>\r\n        </div>\r\n        <p>{{ cookbook.cookbook.title }}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"newCookbook\" [ngClass]=\"{ showNewCookbook: cookbookNameOpen }\">\r\n    <h3>Give your cookbook a name</h3>\r\n    <input type=\"text\" maxlength=\"20\" [(ngModel)]=\"newCookbookName\" />\r\n    <div class=\"nameBtns\">\r\n      <div class=\"btn\" (click)=\"addNewCookbook()\">ACCEPT</div>\r\n      <div class=\"btn\" (click)=\"cookbookAreaOpen = true; cookbookNameOpen = false\">CANCEL</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/recipe-dialog/recipe-dialog.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/recipe-dialog/recipe-dialog.component.ts ***!
  \*********************************************************************/
/*! exports provided: RecipeDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDialogComponent", function() { return RecipeDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_cookbook_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cookbook.service */ "./src/app/services/cookbook.service.ts");
/* harmony import */ var _services_recipe_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/recipe-validate.service */ "./src/app/services/recipe-validate.service.ts");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/general.service */ "./src/app/services/general.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var RecipeDialogComponent = /** @class */ (function () {
    function RecipeDialogComponent(dialog, data, userService, cookbookService, recipeValService, generalService) {
        this.dialog = dialog;
        this.data = data;
        this.userService = userService;
        this.cookbookService = cookbookService;
        this.recipeValService = recipeValService;
        this.generalService = generalService;
        this.scrollAreaOpen = true;
        this.cookbookAreaOpen = false;
        this.cookbookNameOpen = false;
    }
    RecipeDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recipe = this.data.recipe;
        this.userService.getUserData().subscribe(function (data) {
            _this.userData = { recipes: data.recipes, cookbooks: data.cookbooks };
        });
    };
    RecipeDialogComponent.prototype.saveRecipe = function () {
        var _this = this;
        this.recipeValService.toggleSave(this.userData, this.recipe).subscribe(function (data) {
            if (data.success) {
                _this.recipe.saved ? (_this.recipe.saved = false) : (_this.recipe.saved = true);
            }
        });
    };
    RecipeDialogComponent.prototype.addToCookbook = function (cookbook) {
        var recipe = this.recipe._id;
        this.cookbookService.addRecipeToCookbook(cookbook.cookbook, recipe).subscribe(function (data) {
            if (!data.success) {
                console.log("Error adding recipe to cookbook");
            }
        });
        this.dialog.close();
    };
    RecipeDialogComponent.prototype.addNewCookbook = function () {
        var name = this.newCookbookName;
        var recipe = this.recipe._id;
        this.cookbookService.addCookbook(name, recipe).subscribe(function (data) {
            if (!data.success) {
                console.log("Failed to create cookbook");
            }
        });
        this.dialog.close();
    };
    RecipeDialogComponent.prototype.getLink = function () {
        /*** Credit: https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f ***/
        var selectionBox = document.createElement("textarea");
        selectionBox.style.position = "fixed";
        selectionBox.style.left = "0";
        selectionBox.style.top = "0";
        selectionBox.style.opacity = "0";
        selectionBox.value = "http://recipeazy.uk/recipe/" + this.recipe._id;
        document.body.appendChild(selectionBox);
        selectionBox.focus();
        selectionBox.select();
        document.execCommand("copy");
        document.body.removeChild(selectionBox);
        this.dialog.close();
    };
    RecipeDialogComponent.prototype.report = function () {
        console.log("Report sent.");
        this.dialog.close();
    };
    RecipeDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-recipe-dialog",
            template: __webpack_require__(/*! ./recipe-dialog.component.html */ "./src/app/components/recipe-dialog/recipe-dialog.component.html"),
            styles: [__webpack_require__(/*! ./recipe-dialog.component.css */ "./src/app/components/recipe-dialog/recipe-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_cookbook_service__WEBPACK_IMPORTED_MODULE_3__["CookbookService"],
            _services_recipe_validate_service__WEBPACK_IMPORTED_MODULE_4__["RecipeValidateService"],
            _services_general_service__WEBPACK_IMPORTED_MODULE_5__["GeneralService"]])
    ], RecipeDialogComponent);
    return RecipeDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/recipe-dialog/recipe-dialog.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/recipe-dialog/recipe-dialog.service.ts ***!
  \*******************************************************************/
/*! exports provided: RecipeDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDialogService", function() { return RecipeDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _recipe_dialog_recipe_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../recipe-dialog/recipe-dialog.component */ "./src/app/components/recipe-dialog/recipe-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecipeDialogService = /** @class */ (function () {
    function RecipeDialogService(http, dialog) {
        this.http = http;
        this.dialog = dialog;
    }
    RecipeDialogService.prototype.open = function (recipe) {
        var recipeDialog = this.dialog.open(_recipe_dialog_recipe_dialog_component__WEBPACK_IMPORTED_MODULE_3__["RecipeDialogComponent"], {
            data: {
                recipe: recipe
            }
        });
        return recipeDialog.afterClosed();
    };
    RecipeDialogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], RecipeDialogService);
    return RecipeDialogService;
}());



/***/ }),

/***/ "./src/app/components/recipe/recipe.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/recipe/recipe.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-icon {\r\n  -webkit-touch-callout: none; /* iOS Safari */\r\n  -webkit-user-select: none; /* Safari */ /* Konqueror HTML */\r\n  -moz-user-select: none; /* Firefox */\r\n  -ms-user-select: none; /* Internet Explorer/Edge */\r\n  user-select: none; /* Non-prefixed version, currently\r\n                                  supported by Chrome and Opera */\r\n}\r\n\r\n.breakLine {\r\n  width: 100%;\r\n  height: 2px;\r\n  background-color: #eaeaea;\r\n  border-radius: 25px;\r\n}\r\n\r\n.recipePage {\r\n  width: 100%;\r\n  min-height: calc(100vh - 60px);\r\n  overflow: hidden;\r\n  padding-bottom: 80px;\r\n}\r\n\r\n.recipePageArea {\r\n  width: 1350px;\r\n  margin: auto;\r\n  padding-top: 30px;\r\n}\r\n\r\n/*** Top recipe information ***/\r\n\r\n.recipeHeader {\r\n  margin: auto;\r\n  margin-bottom: 20px;\r\n  width: 70%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n\r\n.recipeInfo {\r\n  /* background-color: red; */\r\n  text-align: center;\r\n  width: 70%;\r\n  margin: 20px auto;\r\n}\r\n\r\n.recipeInfo h1 {\r\n  font-size: 50px;\r\n}\r\n\r\n.recipeInfo p {\r\n  width: 80%;\r\n  margin: auto;\r\n}\r\n\r\n.recipeInfoSmall {\r\n  padding-top: 5px;\r\n  font-size: 13px;\r\n}\r\n\r\n/*** Recipe image ***/\r\n\r\n.mainImg {\r\n  height: 350px;\r\n  min-width: 350px !important;\r\n  background-color: #f1f0f5;\r\n  border-radius: 25px;\r\n  position: relative;\r\n}\r\n\r\n.image {\r\n  height: 350px;\r\n  width: 350px !important;\r\n}\r\n\r\n.image img {\r\n  height: 100%;\r\n  width: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  border-radius: 25px;\r\n}\r\n\r\n.hidden {\r\n  visibility: hidden;\r\n}\r\n\r\n.imageOverlay {\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  background-color: rgba(0, 0, 0, 0.45);\r\n  border-radius: 25px;\r\n  opacity: 0;\r\n  transition: all 0.15s ease-in-out;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 50px;\r\n  color: white;\r\n}\r\n\r\n.imageOverlay:hover {\r\n  opacity: 1;\r\n  transition: all 0.15s ease-in-out;\r\n}\r\n\r\n.imageOverlay p {\r\n  margin: 10px 0;\r\n}\r\n\r\n/*** Recipe buttons ***/\r\n\r\n.recipeButtons {\r\n  font-size: 22px;\r\n  display: flex;\r\n  align-items: center;\r\n  /* background-color: red; */\r\n  /* padding: 10px; */\r\n  margin-top: 30px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.recipeButtons i {\r\n  margin: 0 12px;\r\n  cursor: pointer;\r\n}\r\n\r\n/*** Recipe details ***/\r\n\r\n.recipeDetails {\r\n  margin: 10px 0;\r\n  padding: 5px;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  color: rgb(41, 41, 41);\r\n  /* padding-left: 3ch;? */\r\n}\r\n\r\n.recipeDetails span {\r\n  color: #5292ed;\r\n}\r\n\r\n.recipeDetails input {\r\n  width: 3.5ch;\r\n  font-size: 16px;\r\n  font-family: \"ProductSansRegular\", sans-serif;\r\n  color: #5292ed;\r\n  background-color: rgb(231, 231, 231);\r\n  border-radius: 8px;\r\n  padding: 5px;\r\n  margin-left: 3px;\r\n  font-weight: bold;\r\n}\r\n\r\n.recipeDetails input:hover {\r\n  color: #070707;\r\n}\r\n\r\n/*** Nutritional information ***/\r\n\r\n.nutrition {\r\n  width: 100%;\r\n  /* height: 60px; */\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding: 8px;\r\n  overflow: hidden;\r\n}\r\n\r\n.nut {\r\n  margin: auto 5px;\r\n  font-size: 13px;\r\n  border-radius: 8px;\r\n  color: rgb(68, 68, 68);\r\n  text-align: center;\r\n  padding: 2px;\r\n  white-space: nowrap;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n/*** Lower recipe information ***/\r\n\r\n.recipeInformation {\r\n  padding-top: 30px;\r\n  padding-bottom: 200px;\r\n  width: 80%;\r\n  margin: auto;\r\n}\r\n\r\n.titles {\r\n  width: 100%;\r\n  font-size: 25px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n.titles h1 {\r\n  cursor: pointer;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.deselected {\r\n  transition: all 0.2s ease-in-out;\r\n  color: rgb(165, 165, 165);\r\n}\r\n\r\n.infoWrapper {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  overflow: hidden;\r\n  scroll-behavior: smooth;\r\n  transition: height 0.3s ease-in-out;\r\n}\r\n\r\n.infoPanel {\r\n  height: auto;\r\n  min-width: 100%;\r\n  display: inline-block;\r\n}\r\n\r\n.infoPanel p {\r\n  width: 50%;\r\n  margin: auto;\r\n  text-align: center;\r\n}\r\n\r\n/*** Similar recipes ***/\r\n\r\n.simTitle {\r\n  padding: 15px 0 0 40px;\r\n}\r\n\r\n.similarRecipes {\r\n  width: 100%;\r\n  margin: 20px 0;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n}\r\n\r\n.recommendedRecipe {\r\n  width: 200px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 10px;\r\n}\r\n\r\n.rImage {\r\n  height: 200px;\r\n  width: 200px;\r\n  background-color: #f1f0f5;\r\n  border-radius: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n.rImage img {\r\n  height: 100%;\r\n  width: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  border-radius: 25px;\r\n}\r\n\r\n.rName {\r\n  font-weight: bold;\r\n  padding-top: 10px;\r\n}\r\n\r\n.rName:hover {\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n\r\n/*** Colours ***/\r\n\r\n.upvote {\r\n  color: #eb6c1a;\r\n}\r\n\r\n.downvote {\r\n  color: #6664bd;\r\n}\r\n\r\n.saved {\r\n  color: #eb4d44;\r\n  /* f8c518 */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEIsQ0FBQyxnQkFBZ0I7RUFDN0MsMEJBQTBCLENBQUMsWUFBWSxDQUNiLG9CQUFvQjtFQUM5Qyx1QkFBdUIsQ0FBQyxhQUFhO0VBQ3JDLHNCQUFzQixDQUFDLDRCQUE0QjtFQUNuRCxrQkFBa0IsQ0FBQztrRUFDNkM7Q0FDakU7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQixxQkFBcUI7Q0FDdEI7O0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGtCQUFrQjtDQUNuQjs7QUFFRCxnQ0FBZ0M7O0FBQ2hDO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsY0FBYztFQUNkLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsb0JBQW9CO0NBQ3JCOztBQUNEO0VBQ0UsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0NBQ25COztBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUNEO0VBQ0UsV0FBVztFQUNYLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7Q0FDakI7O0FBRUQsc0JBQXNCOztBQUN0QjtFQUNFLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQixtQkFBbUI7Q0FDcEI7O0FBQ0Q7RUFDRSxjQUFjO0VBQ2Qsd0JBQXdCO0NBQ3pCOztBQUNEO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixxQkFBa0I7S0FBbEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtDQUNyQjs7QUFDRDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNDQUFzQztFQUN0QyxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGtDQUFrQztFQUNsQyxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGFBQWE7Q0FDZDs7QUFDRDtFQUNFLFdBQVc7RUFDWCxrQ0FBa0M7Q0FDbkM7O0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCOztBQUVELHdCQUF3Qjs7QUFDeEI7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixvQkFBb0I7Q0FDckI7O0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0NBQ2pCOztBQUVELHdCQUF3Qjs7QUFDeEI7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtDQUMxQjs7QUFDRDtFQUNFLGVBQWU7Q0FDaEI7O0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLDhDQUE4QztFQUM5QyxlQUFlO0VBQ2YscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtDQUNuQjs7QUFDRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQsaUNBQWlDOztBQUNqQztFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsaUJBQWlCO0NBQ2xCOztBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxvQkFBb0I7Q0FDckI7O0FBRUQsa0NBQWtDOztBQUNsQztFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiwrQkFBK0I7Q0FDaEM7O0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsaUNBQWlDO0NBQ2xDOztBQUNEO0VBQ0UsaUNBQWlDO0VBQ2pDLDBCQUEwQjtDQUMzQjs7QUFFRDtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsb0NBQW9DO0NBQ3JDOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixzQkFBc0I7Q0FDdkI7O0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtDQUNwQjs7QUFFRCx5QkFBeUI7O0FBQ3pCO0VBQ0UsdUJBQXVCO0NBQ3hCOztBQUNEO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHdCQUF3QjtDQUN6Qjs7QUFFRDtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQixnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHFCQUFrQjtLQUFsQixrQkFBa0I7RUFDbEIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtDQUNuQjs7QUFDRDtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7Q0FDakI7O0FBRUQsaUJBQWlCOztBQUNqQjtFQUNFLGVBQWU7Q0FDaEI7O0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCOztBQUNEO0VBQ0UsZUFBZTtFQUNmLFlBQVk7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjaXBlL3JlY2lwZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWljb24ge1xyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLyogaU9TIFNhZmFyaSAqL1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xyXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94ICovXHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRlZCBieSBDaHJvbWUgYW5kIE9wZXJhICovXHJcbn1cclxuXHJcbi5icmVha0xpbmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG5cclxuLnJlY2lwZVBhZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG59XHJcbi5yZWNpcGVQYWdlQXJlYSB7XHJcbiAgd2lkdGg6IDEzNTBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi8qKiogVG9wIHJlY2lwZSBpbmZvcm1hdGlvbiAqKiovXHJcbi5yZWNpcGVIZWFkZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnJlY2lwZUluZm8ge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxufVxyXG4ucmVjaXBlSW5mbyBoMSB7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG59XHJcbi5yZWNpcGVJbmZvIHAge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ucmVjaXBlSW5mb1NtYWxsIHtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLyoqKiBSZWNpcGUgaW1hZ2UgKioqL1xyXG4ubWFpbkltZyB7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxuICBtaW4td2lkdGg6IDM1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjBmNTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaW1hZ2Uge1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbiAgd2lkdGg6IDM1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmltYWdlIGltZyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuLmhpZGRlbiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uaW1hZ2VPdmVybGF5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5pbWFnZU92ZXJsYXk6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5pbWFnZU92ZXJsYXkgcCB7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuXHJcbi8qKiogUmVjaXBlIGJ1dHRvbnMgKioqL1xyXG4ucmVjaXBlQnV0dG9ucyB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXHJcbiAgLyogcGFkZGluZzogMTBweDsgKi9cclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnJlY2lwZUJ1dHRvbnMgaSB7XHJcbiAgbWFyZ2luOiAwIDEycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKioqIFJlY2lwZSBkZXRhaWxzICoqKi9cclxuLnJlY2lwZURldGFpbHMge1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHJnYig0MSwgNDEsIDQxKTtcclxuICAvKiBwYWRkaW5nLWxlZnQ6IDNjaDs/ICovXHJcbn1cclxuLnJlY2lwZURldGFpbHMgc3BhbiB7XHJcbiAgY29sb3I6ICM1MjkyZWQ7XHJcbn1cclxuLnJlY2lwZURldGFpbHMgaW5wdXQge1xyXG4gIHdpZHRoOiAzLjVjaDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiUHJvZHVjdFNhbnNSZWd1bGFyXCIsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICM1MjkyZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjMxLCAyMzEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ucmVjaXBlRGV0YWlscyBpbnB1dDpob3ZlciB7XHJcbiAgY29sb3I6ICMwNzA3MDc7XHJcbn1cclxuXHJcbi8qKiogTnV0cml0aW9uYWwgaW5mb3JtYXRpb24gKioqL1xyXG4ubnV0cml0aW9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICAvKiBoZWlnaHQ6IDYwcHg7ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5udXQge1xyXG4gIG1hcmdpbjogYXV0byA1cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBjb2xvcjogcmdiKDY4LCA2OCwgNjgpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi8qKiogTG93ZXIgcmVjaXBlIGluZm9ybWF0aW9uICoqKi9cclxuLnJlY2lwZUluZm9ybWF0aW9uIHtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi50aXRsZXMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi50aXRsZXMgaDEge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG4uZGVzZWxlY3RlZCB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgY29sb3I6IHJnYigxNjUsIDE2NSwgMTY1KTtcclxufVxyXG5cclxuLmluZm9XcmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmluZm9QYW5lbCB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmluZm9QYW5lbCBwIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qKiogU2ltaWxhciByZWNpcGVzICoqKi9cclxuLnNpbVRpdGxlIHtcclxuICBwYWRkaW5nOiAxNXB4IDAgMCA0MHB4O1xyXG59XHJcbi5zaW1pbGFyUmVjaXBlcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucmVjb21tZW5kZWRSZWNpcGUge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG5cclxuLnJJbWFnZSB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjBmNTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uckltYWdlIGltZyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbi5yTmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuLnJOYW1lOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qKiogQ29sb3VycyAqKiovXHJcbi51cHZvdGUge1xyXG4gIGNvbG9yOiAjZWI2YzFhO1xyXG59XHJcbi5kb3dudm90ZSB7XHJcbiAgY29sb3I6ICM2NjY0YmQ7XHJcbn1cclxuLnNhdmVkIHtcclxuICBjb2xvcjogI2ViNGQ0NDtcclxuICAvKiBmOGM1MTggKi9cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/recipe/recipe.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/recipe/recipe.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"recipePage\">\r\n  <div class=\"recipePageArea\">\r\n    <div class=\"recipeHeader\">\r\n      <div class=\"recipeInfo\">\r\n        <h1>{{ recipe?.title }}</h1>\r\n        <p>{{ recipe?.description }}</p>\r\n        <p class=\"recipeInfoSmall\">Created by {{ recipe?.author }} {{ generalService.getTimeAgo(recipe?.timestamp) }}.</p>\r\n      </div>\r\n      <div class=\"mainImg\">\r\n        <div class=\"imageOverlay\">\r\n          <p><i class=\"fas fa-star\" title=\"Score\"></i> : {{ recipe?.score }}</p>\r\n          <p><i class=\"fas fa-eye\" title=\"Views\"></i> : {{ recipe?.views }}</p>\r\n        </div>\r\n        <div class=\"image\">\r\n          <img [ngClass]=\"{ hidden: !recipe?.image }\" src=\"{{ generalService.getImageLink(recipe?.image) }}\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"recipeButtons\">\r\n        <i class=\"fas fa-arrow-up\" (click)=\"castVote('up')\" [ngClass]=\"{ upvote: recipe?.vote == 'up' }\"></i>\r\n        <i class=\"fas fa-arrow-down\" (click)=\"castVote('down')\" [ngClass]=\"{ downvote: recipe?.vote == 'down' }\"></i>\r\n        <i class=\"fas fa-heart\" (click)=\"toggleSave()\" [ngClass]=\"{ saved: recipe?.saved }\"></i>\r\n        <i class=\"fas fa-ellipsis-v\" (click)=\"openRecipeOptions()\"></i>\r\n      </div>\r\n      <div class=\"recipeDetails\">\r\n        Prep-time: <span>{{ generalService.getTime(recipe?.prepTime) }}</span> • Cook-time: <span>{{ generalService.getTime(recipe?.cookTime) }}</span> • Difficulty:\r\n        <span>{{ generalService.getDifficulty(recipe?.difficulty) }}</span> • Servings:\r\n        <input type=\"number\" min=\"1\" max=\"99\" [(ngModel)]=\"servings\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"breakLine\"></div>\r\n    <div class=\"nutrition\">\r\n      <div class=\"nut\" *ngFor=\"let nut of recipe?.nutrition\">\r\n        <div class=\"nutName\">{{ nut.nutrient }}&nbsp;</div>\r\n        <div class=\"nutVal\">{{ nut.val }} {{ nut.uom }}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"breakLine\"></div>\r\n    <div class=\"recipeInformation\">\r\n      <div class=\"titles\">\r\n        <h1 (click)=\"selected = 'ing'; scroll(ingPanel)\" [ngClass]=\"{ deselected: selected != 'ing' }\">Ingredients</h1>\r\n        <h1 (click)=\"selected = 'meth'; scroll(methPanel)\" [ngClass]=\"{ deselected: selected != 'meth' }\">Method</h1>\r\n      </div>\r\n      <div class=\"infoWrapper\" #infoWrapper>\r\n        <div class=\"infoPanel\">\r\n          <div #ingPanel>\r\n            <p *ngFor=\"let ingredient of recipe?.ingredients\">{{ generalService.formatIngredient(ingredient, servings) }}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"infoPanel\">\r\n          <div #methPanel>\r\n            <p *ngFor=\"let step of recipe?.method; let i = index\">{{ i + 1 }}. {{ step }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"breakLine\" *ngIf=\"recipe?.similar.length != 0\"></div>\r\n    <h2 class=\"simTitle\" *ngIf=\"recipe?.similar.length != 0\">Similar to this...</h2>\r\n    <div class=\"similarRecipes\" *ngIf=\"recipe?.similar.length != 0\">\r\n      <div class=\"recommendedRecipe\" *ngFor=\"let recommendedRecipe of recipe?.similar\">\r\n        <div class=\"rImage\" (click)=\"viewRecipe(recommendedRecipe._id)\">\r\n          <img [ngClass]=\"{ hidden: !recommendedRecipe?.image }\" src=\"{{ generalService.getImageLink(recommendedRecipe.image) }}\" />\r\n        </div>\r\n        <div class=\"rName\" (click)=\"viewRecipe(recommendedRecipe._id)\">{{ recommendedRecipe.title + \"\" | textLimit: 25 }}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"breakLine\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/recipe/recipe.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/recipe/recipe.component.ts ***!
  \*******************************************************/
/*! exports provided: RecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeComponent", function() { return RecipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/recipe.service */ "./src/app/services/recipe.service.ts");
/* harmony import */ var _services_recipe_validate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/recipe-validate.service */ "./src/app/services/recipe-validate.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _recipe_dialog_recipe_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../recipe-dialog/recipe-dialog.service */ "./src/app/components/recipe-dialog/recipe-dialog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RecipeComponent = /** @class */ (function () {
    function RecipeComponent(route, recipeService, recipeValidateService, userService, titleService, router, generalService, recipeDialog) {
        this.route = route;
        this.recipeService = recipeService;
        this.recipeValidateService = recipeValidateService;
        this.userService = userService;
        this.titleService = titleService;
        this.router = router;
        this.generalService = generalService;
        this.recipeDialog = recipeDialog;
        this.voteLock = false;
        this.saveLock = false;
        this.servings = 0;
        this.selected = "ing";
    }
    RecipeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (val) {
            _this.recipeId = _this.route.snapshot.paramMap.get("id");
            _this.user = _this.generalService.getUser();
            _this.recipeService.getRecipe(_this.recipeId).subscribe(function (data) {
                if (!data.success) {
                    _this.router.navigate(["/recipes"]);
                }
                else {
                    _this.recipe = data.recipe;
                    if (_this.recipe.original.ingredients.length !== 0) {
                        _this.recipe.ingredients = _this.recipe.original.ingredients;
                        _this.recipe.nutrition = _this.recipe.original.nutrients;
                    }
                    else {
                        _this.recipe["nutrition"] = _this.recipeService.getNutrition(_this.recipe);
                    }
                    _this.formatServings();
                    _this.titleService.setTitle(_this.recipe.title);
                    _this.userService.getUserData().subscribe(function (data) {
                        if (data.success) {
                            _this.usersRecipes = data.recipes;
                            _this.userService.addToHistory(_this.recipeId, "recipes");
                            var indexVote = _this.usersRecipes.voted.findIndex(function (y) { return y.recipe._id === _this.recipe._id; });
                            var indexSave = _this.usersRecipes.saved.findIndex(function (y) { return y.recipe._id === _this.recipe._id; });
                            if (indexVote !== -1) {
                                _this.recipe.vote = _this.usersRecipes.voted[indexVote].vote;
                            }
                            if (indexSave !== -1) {
                                _this.recipe.saved = true;
                            }
                            _this.scroll();
                        }
                    });
                }
            });
        });
    };
    RecipeComponent.prototype.formatServings = function () {
        var _this = this;
        this.servings = this.recipe.servings;
        this.recipe.ingredients.forEach(function (ingredient) {
            ingredient.amount = ingredient.amount / _this.servings;
        });
    };
    RecipeComponent.prototype.openRecipeOptions = function () {
        this.recipeDialog.open(this.recipe).subscribe(function (data) {
            // console.log(data);
        });
    };
    RecipeComponent.prototype.castVote = function (vote) {
        var _this = this;
        if (!this.voteLock) {
            this.voteLock = true;
            var userData = { id: this.user.id, data: this.usersRecipes };
            var newVote = this.recipeValidateService.castVote(vote, this.recipe.vote, this.recipe, userData, function () {
                _this.voteLock = false;
            });
            this.recipe.score = newVote.newScore;
            this.recipe.vote = newVote.newVote;
        }
    };
    RecipeComponent.prototype.toggleSave = function () {
        var _this = this;
        if (!this.saveLock) {
            this.saveLock = true;
            var userData = { id: this.user.id, data: this.usersRecipes };
            this.userService.addUserData(userData, { data: "recipes", type: "save" }, this.recipeId).subscribe(function (data) {
                if (!data.success) {
                    console.log("Failed to toggle save");
                }
                else {
                    _this.recipe.saved = !_this.recipe.saved;
                }
                _this.saveLock = false;
            });
        }
    };
    RecipeComponent.prototype.viewRecipe = function (id) {
        this.router.navigate(["/recipe/" + id]);
    };
    RecipeComponent.prototype.scroll = function () {
        if (this.selected === "ing") {
            this.infoWrapper.nativeElement.scrollLeft = 0;
            this.infoWrapper.nativeElement.style.height = this.ingPanel.nativeElement.offsetHeight + "px";
        }
        else {
            this.infoWrapper.nativeElement.scrollLeft = this.infoWrapper.nativeElement.scrollWidth;
            this.infoWrapper.nativeElement.style.height = this.methPanel.nativeElement.offsetHeight + "px";
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("infoWrapper"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RecipeComponent.prototype, "infoWrapper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("ingPanel"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RecipeComponent.prototype, "ingPanel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("methPanel"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RecipeComponent.prototype, "methPanel", void 0);
    RecipeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-recipe",
            template: __webpack_require__(/*! ./recipe.component.html */ "./src/app/components/recipe/recipe.component.html"),
            styles: [__webpack_require__(/*! ./recipe.component.css */ "./src/app/components/recipe/recipe.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"],
            _services_recipe_validate_service__WEBPACK_IMPORTED_MODULE_3__["RecipeValidateService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_general_service__WEBPACK_IMPORTED_MODULE_6__["GeneralService"],
            _recipe_dialog_recipe_dialog_service__WEBPACK_IMPORTED_MODULE_7__["RecipeDialogService"]])
    ], RecipeComponent);
    return RecipeComponent;
}());



/***/ }),

/***/ "./src/app/components/recommended/recommended.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/recommended/recommended.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*** History ***/\r\n.history {\r\n  min-height: calc(100vh - 60px);\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n.wrapper {\r\n  width: 1350px;\r\n  min-height: 100%;\r\n  margin: auto;\r\n}\r\n.wrapper h1 {\r\n  font-size: 50px;\r\n  margin-top: 40px;\r\n  margin-bottom: 10px;\r\n}\r\n/*** Search area ***/\r\n.searchArea {\r\n  margin: auto;\r\n  width: 100%;\r\n  padding: 20px 0px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n.searchItem {\r\n  padding: 7px 12px;\r\n  margin: 5px 7px;\r\n  font-size: 14px;\r\n  border-radius: 25px;\r\n  font-weight: 500;\r\n  cursor: default;\r\n  background-color: #f1eff4;\r\n}\r\n.searchItem:hover {\r\n  text-decoration: underline;\r\n}\r\n.searchItem i {\r\n  margin-left: 5px;\r\n  cursor: pointer;\r\n}\r\n/*** History area ***/\r\n.historyArea {\r\n  margin-top: 20px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n.historyTile {\r\n  padding: 10px;\r\n  margin: 10px;\r\n  width: 175px;\r\n}\r\n.historyImage {\r\n  width: 175px;\r\n  height: 175px;\r\n  border-radius: 25px;\r\n  background-color: #f1eff4;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n.historyImage img {\r\n  height: 100%;\r\n  width: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  border-radius: 25px;\r\n}\r\n.hidden {\r\n  visibility: hidden;\r\n}\r\n.historyOverlay {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(39, 39, 39, 0.2);\r\n  opacity: 0;\r\n  transition: all 0.3s ease-in-out 0s;\r\n  position: absolute;\r\n  z-index: 10;\r\n  top: 0;\r\n  left: 0;\r\n  border-radius: 25px;\r\n}\r\n.historyImage:hover .historyOverlay {\r\n  transition: all 0.3s ease-in-out 0s;\r\n  opacity: 1;\r\n}\r\n.historyInfo {\r\n  padding-top: 5px;\r\n  font-size: 10pt;\r\n  text-align: left;\r\n  font-family: \"ProductSansRegular\", sans-serif;\r\n  width: 90%;\r\n  margin: auto;\r\n}\r\n.historyInfo h3:hover {\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n/*** General elements ***/\r\n.breakLine {\r\n  width: 100%;\r\n  height: 2px;\r\n  background-color: #eaeaea;\r\n  border-radius: 25px;\r\n}\r\n/*** Loading screen ***/\r\n.loading {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 100px;\r\n}\r\n/*** Css spinner credit:https://loading.io/css/ ***/\r\n.lds-ring {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 100px;\r\n  height: 100px;\r\n}\r\n.lds-ring div {\r\n  box-sizing: border-box;\r\n  display: block;\r\n  position: absolute;\r\n  width: 100px;\r\n  height: 100px;\r\n  margin: 3px;\r\n  border: 3px solid rgb(56, 56, 56);\r\n  border-radius: 50%;\r\n  -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n  border-color: rgb(56, 56, 56) transparent transparent transparent;\r\n}\r\n.lds-ring div:nth-child(1) {\r\n  -webkit-animation-delay: -0.45s;\r\n          animation-delay: -0.45s;\r\n}\r\n.lds-ring div:nth-child(2) {\r\n  -webkit-animation-delay: -0.3s;\r\n          animation-delay: -0.3s;\r\n}\r\n.lds-ring div:nth-child(3) {\r\n  -webkit-animation-delay: -0.15s;\r\n          animation-delay: -0.15s;\r\n}\r\n@-webkit-keyframes lds-ring {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes lds-ring {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWNvbW1lbmRlZC9yZWNvbW1lbmRlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQjtBQUNqQjtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvQkFBb0I7Q0FDckI7QUFFRCxxQkFBcUI7QUFDckI7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtDQUN6QjtBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSwyQkFBMkI7Q0FDNUI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7Q0FDakI7QUFFRCxzQkFBc0I7QUFDdEI7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix3QkFBd0I7Q0FDekI7QUFFRDtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixxQkFBa0I7S0FBbEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHdDQUF3QztFQUN4QyxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osT0FBTztFQUNQLFFBQVE7RUFDUixvQkFBb0I7Q0FDckI7QUFFRDtFQUNFLG9DQUFvQztFQUNwQyxXQUFXO0NBQ1o7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDhDQUE4QztFQUM5QyxXQUFXO0VBQ1gsYUFBYTtDQUNkO0FBQ0Q7RUFDRSwyQkFBMkI7RUFDM0IsZ0JBQWdCO0NBQ2pCO0FBRUQsMEJBQTBCO0FBQzFCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsb0JBQW9CO0NBQ3JCO0FBRUQsd0JBQXdCO0FBQ3hCO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsa0JBQWtCO0NBQ25CO0FBQ0Qsb0RBQW9EO0FBQ3BEO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsY0FBYztDQUNmO0FBQ0Q7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsY0FBYztFQUNkLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLHVFQUErRDtVQUEvRCwrREFBK0Q7RUFDL0Qsa0VBQWtFO0NBQ25FO0FBQ0Q7RUFDRSxnQ0FBd0I7VUFBeEIsd0JBQXdCO0NBQ3pCO0FBQ0Q7RUFDRSwrQkFBdUI7VUFBdkIsdUJBQXVCO0NBQ3hCO0FBQ0Q7RUFDRSxnQ0FBd0I7VUFBeEIsd0JBQXdCO0NBQ3pCO0FBQ0Q7RUFDRTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7R0FDekI7RUFDRDtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEI7R0FDM0I7Q0FDRjtBQVBEO0VBQ0U7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0dBQ3pCO0VBQ0Q7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0dBQzNCO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlY29tbWVuZGVkL3JlY29tbWVuZGVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEhpc3RvcnkgKioqL1xyXG4uaGlzdG9yeSB7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLndyYXBwZXIge1xyXG4gIHdpZHRoOiAxMzUwcHg7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLndyYXBwZXIgaDEge1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi8qKiogU2VhcmNoIGFyZWEgKioqL1xyXG4uc2VhcmNoQXJlYSB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5zZWFyY2hJdGVtIHtcclxuICBwYWRkaW5nOiA3cHggMTJweDtcclxuICBtYXJnaW46IDVweCA3cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZWZmNDtcclxufVxyXG4uc2VhcmNoSXRlbTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLnNlYXJjaEl0ZW0gaSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qKiogSGlzdG9yeSBhcmVhICoqKi9cclxuLmhpc3RvcnlBcmVhIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaGlzdG9yeVRpbGUge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHdpZHRoOiAxNzVweDtcclxufVxyXG4uaGlzdG9yeUltYWdlIHtcclxuICB3aWR0aDogMTc1cHg7XHJcbiAgaGVpZ2h0OiAxNzVweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWVmZjQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaGlzdG9yeUltYWdlIGltZyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuLmhpZGRlbiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uaGlzdG9yeU92ZXJsYXkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgMzksIDAuMik7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG5cclxuLmhpc3RvcnlJbWFnZTpob3ZlciAuaGlzdG9yeU92ZXJsYXkge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLmhpc3RvcnlJbmZvIHtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTBwdDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlByb2R1Y3RTYW5zUmVndWxhclwiLCBzYW5zLXNlcmlmO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5oaXN0b3J5SW5mbyBoMzpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKioqIEdlbmVyYWwgZWxlbWVudHMgKioqL1xyXG4uYnJlYWtMaW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbi8qKiogTG9hZGluZyBzY3JlZW4gKioqL1xyXG4ubG9hZGluZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG4vKioqIENzcyBzcGlubmVyIGNyZWRpdDpodHRwczovL2xvYWRpbmcuaW8vY3NzLyAqKiovXHJcbi5sZHMtcmluZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG4ubGRzLXJpbmcgZGl2IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBtYXJnaW46IDNweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCByZ2IoNTYsIDU2LCA1Nik7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGFuaW1hdGlvbjogbGRzLXJpbmcgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDU2LCA1NiwgNTYpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG59XHJcbi5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjQ1cztcclxufVxyXG4ubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zcztcclxufVxyXG4ubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNXM7XHJcbn1cclxuQGtleWZyYW1lcyBsZHMtcmluZyB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/recommended/recommended.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/recommended/recommended.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"history\">\n  <div class=\"wrapper\">\n    <h1>Recommended</h1>\n    <div class=\"breakLine\"></div>\n    <div class=\"loading\" *ngIf=\"loading\">\n      <div class=\"lds-ring\">\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n      </div>\n    </div>\n    <div class=\"historyArea\" *ngIf=\"!loading\">\n      <div class=\"historyTile\" *ngFor=\"let item of recipeData\">\n        <div class=\"historyImage\" (click)=\"viewItem(item)\">\n          <img [ngClass]=\"{ hidden: !item?.image }\" src=\"{{ generalService.getImageLink(item?.image) }}\" #rImg />\n          <div class=\"historyOverlay\"></div>\n        </div>\n        <div class=\"historyInfo\">\n          <h3 (click)=\"viewItem(item)\">{{ item.title | textLimit: 50 }}</h3>\n          <p>{{ item.description | textLimit: 50 }}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/recommended/recommended.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/recommended/recommended.component.ts ***!
  \*****************************************************************/
/*! exports provided: RecommendedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendedComponent", function() { return RecommendedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/recipe.service */ "./src/app/services/recipe.service.ts");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecommendedComponent = /** @class */ (function () {
    function RecommendedComponent(recipeService, titleService, router, generalService) {
        this.recipeService = recipeService;
        this.titleService = titleService;
        this.router = router;
        this.generalService = generalService;
        this.loading = true;
    }
    RecommendedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("Recommended");
        this.recipeService.getRecommended().subscribe(function (data) {
            if (data.success) {
                _this.recipeData = data.recipes;
                _this.loading = false;
            }
        });
    };
    RecommendedComponent.prototype.viewItem = function (item) {
        this.router.navigate(["/recipe", item._id]);
    };
    RecommendedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-recommended",
            template: __webpack_require__(/*! ./recommended.component.html */ "./src/app/components/recommended/recommended.component.html"),
            styles: [__webpack_require__(/*! ./recommended.component.css */ "./src/app/components/recommended/recommended.component.css")]
        }),
        __metadata("design:paramtypes", [_services_recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"]])
    ], RecommendedComponent);
    return RecommendedComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register {\r\n  min-height: 100vh;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  background-color: #fff;\r\n  font-family: \"ProductSansRegular\";\r\n  color: #555555;\r\n}\r\n\r\n/******* Nav *******/\r\n\r\nnav {\r\n  width: 86%;\r\n  margin: auto;\r\n  text-align: right;\r\n  margin-top: 50px;\r\n  padding: 1vh 20px;\r\n  overflow: hidden;\r\n  z-index: 100 !important;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--main-dark-text);\r\n  font-size: 20px;\r\n  font-weight: 300;\r\n  margin: 0 10px;\r\n}\r\n\r\n.navLeft {\r\n  /* background-color: #0066ff; */\r\n  /* width: 450px; */\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.navRight {\r\n  display: flex;\r\n  align-items: flex-end;\r\n}\r\n\r\n.logo {\r\n  padding: 0;\r\n  font-size: 32px;\r\n  font-weight: 900;\r\n  margin-right: 30px;\r\n}\r\n\r\n.subPoint {\r\n  padding: 0;\r\n  font-size: 18px;\r\n}\r\n\r\n.btnSmall {\r\n  background-color: #4286f5;\r\n  color: #fff;\r\n  border-radius: 5px;\r\n  font-size: 18px;\r\n  padding: 0.75em 1.1em;\r\n  text-align: center;\r\n}\r\n\r\n/*** Form ***/\r\n\r\n.content-area {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.registerForm h1 {\r\n  font-family: \"ProductSansRegular\", sans-serif;\r\n  font-weight: normal;\r\n  font-size: 30px;\r\n}\r\n\r\n.registerForm h3 {\r\n  font-family: \"ProductSansRegular\", sans-serif;\r\n  font-weight: normal;\r\n  font-size: 14px;\r\n  margin-top: 5px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.registerForm {\r\n  background-color: #fff;\r\n  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.25);\r\n  margin: 4vh auto;\r\n  width: 400px;\r\n  text-align: center;\r\n  padding: 60px;\r\n  border-radius: 25px;\r\n}\r\n\r\n.input-col {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  justify-content: center;\r\n}\r\n\r\n.input-field {\r\n  font-family: \"ProductSansRegular\", sans-serif;\r\n  text-align: left;\r\n  background-color: #f0f0f0;\r\n  border: 2px solid transparent;\r\n  border-radius: 5px;\r\n  font-size: 16px;\r\n  font-weight: normal;\r\n  padding: 10px 0px 10px 10px;\r\n  width: 95%;\r\n  transition: border 0.5s;\r\n}\r\n\r\n.input-field::-webkit-input-placeholder {\r\n  color: #c4c4c4;\r\n}\r\n\r\n.input-field::-ms-input-placeholder {\r\n  color: #c4c4c4;\r\n}\r\n\r\n.input-field::placeholder {\r\n  color: #c4c4c4;\r\n}\r\n\r\n.input-field:focus {\r\n  border: 2px solid #71c6f7;\r\n  box-shadow: none;\r\n}\r\n\r\n.errorMessage {\r\n  width: 100%;\r\n  height: 30px;\r\n  margin: auto;\r\n  margin-bottom: 10px;\r\n  font-size: 10pt;\r\n  padding-top: 4px;\r\n  color: #cc0033;\r\n}\r\n\r\n/*** Bottom buttons ***/\r\n\r\n.registerButton {\r\n  font-family: \"ProductSansRegular\", sans-serif;\r\n  margin-top: 30px;\r\n  font-size: 17px;\r\n  padding: 10px 20px;\r\n  color: #fff;\r\n  border-radius: 5px;\r\n  background-color: #4286f5;\r\n  transition: 0.15s all ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\n.registerButton:hover {\r\n  background-color: #7aadff;\r\n  transition: 0.15s all ease-in-out;\r\n}\r\n\r\n.forgot-button {\r\n  padding-top: 20px;\r\n  font-size: 14px;\r\n  color: #c4c4c4;\r\n  display: block;\r\n  cursor: pointer;\r\n  -webkit-text-decoration-line: underline;\r\n          text-decoration-line: underline;\r\n}\r\n\r\n/*** Form validation ***/\r\n\r\n.flag {\r\n  position: absolute;\r\n  color: #cc0033;\r\n  margin-left: 8px;\r\n  margin-top: 13px;\r\n}\r\n\r\n.error {\r\n  color: #cc0033;\r\n  background-color: #fce4e4;\r\n  border: 2px solid #cc0033;\r\n}\r\n\r\n.error::-webkit-input-placeholder {\r\n  color: #cc0033;\r\n}\r\n\r\n.error::-ms-input-placeholder {\r\n  color: #cc0033;\r\n}\r\n\r\n.error::placeholder {\r\n  color: #cc0033;\r\n}\r\n\r\n.errorBtn {\r\n  color: #cc0033;\r\n  background-color: #fce4e4;\r\n  border: 2px solid #cc0033;\r\n}\r\n\r\n.errorBtn:hover {\r\n  background-color: #cc0033;\r\n  color: #fce4e4;\r\n}\r\n\r\n.success {\r\n  background-color: #dff0d8;\r\n  color: #1ecd97;\r\n  border: 2px solid #1ecd97;\r\n}\r\n\r\n.success::-webkit-input-placeholder {\r\n  color: #1ecd97;\r\n}\r\n\r\n.success::-ms-input-placeholder {\r\n  color: #1ecd97;\r\n}\r\n\r\n.success::placeholder {\r\n  color: #1ecd97;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGtDQUFrQztFQUNsQyxlQUFlO0NBQ2hCOztBQUVELHFCQUFxQjs7QUFDckI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiwrQkFBK0I7Q0FDaEM7O0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtDQUNoQjs7QUFDRDtFQUNFLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiwrQkFBK0I7Q0FDaEM7O0FBQ0Q7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0NBQ3ZCOztBQUNEO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCOztBQUNEO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtDQUNqQjs7QUFDRDtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0NBQ3BCOztBQUVELGNBQWM7O0FBRWQ7RUFDRSxhQUFhO0VBQ2IsWUFBWTtDQUNiOztBQUNEO0VBQ0UsOENBQThDO0VBQzlDLG9CQUFvQjtFQUNwQixnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSw4Q0FBOEM7RUFDOUMsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0NBQ3JCOztBQUNEO0VBQ0UsdUJBQXVCO0VBQ3ZCLDJDQUEyQztFQUMzQyxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsb0JBQW9CO0NBQ3JCOztBQUNEO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsd0JBQXdCO0NBQ3pCOztBQUNEO0VBQ0UsOENBQThDO0VBQzlDLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsd0JBQXdCO0NBQ3pCOztBQUNEO0VBQ0UsZUFBZTtDQUNoQjs7QUFGRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRkQ7RUFDRSxlQUFlO0NBQ2hCOztBQUNEO0VBQ0UsMEJBQTBCO0VBQzFCLGlCQUFpQjtDQUNsQjs7QUFDRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7Q0FDaEI7O0FBRUQsd0JBQXdCOztBQUN4QjtFQUNFLDhDQUE4QztFQUM5QyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixrQ0FBa0M7RUFDbEMsZ0JBQWdCO0NBQ2pCOztBQUNEO0VBQ0UsMEJBQTBCO0VBQzFCLGtDQUFrQztDQUNuQzs7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsd0NBQWdDO1VBQWhDLGdDQUFnQztDQUNqQzs7QUFFRCx5QkFBeUI7O0FBQ3pCO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0NBQ2xCOztBQUNEO0VBQ0UsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQiwwQkFBMEI7Q0FDM0I7O0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCOztBQUZEO0VBQ0UsZUFBZTtDQUNoQjs7QUFGRDtFQUNFLGVBQWU7Q0FDaEI7O0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLDBCQUEwQjtDQUMzQjs7QUFDRDtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0NBQ2hCOztBQUNEO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZiwwQkFBMEI7Q0FDM0I7O0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCOztBQUZEO0VBQ0UsZUFBZTtDQUNoQjs7QUFGRDtFQUNFLGVBQWU7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBmb250LWZhbWlseTogXCJQcm9kdWN0U2Fuc1JlZ3VsYXJcIjtcclxuICBjb2xvcjogIzU1NTU1NTtcclxufVxyXG5cclxuLyoqKioqKiogTmF2ICoqKioqKiovXHJcbm5hdiB7XHJcbiAgd2lkdGg6IDg2JTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBwYWRkaW5nOiAxdmggMjBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHotaW5kZXg6IDEwMCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWRhcmstdGV4dCk7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuLm5hdkxlZnQge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICMwMDY2ZmY7ICovXHJcbiAgLyogd2lkdGg6IDQ1MHB4OyAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLm5hdlJpZ2h0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG4ubG9nbyB7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuLnN1YlBvaW50IHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uYnRuU21hbGwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Mjg2ZjU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBwYWRkaW5nOiAwLjc1ZW0gMS4xZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKioqIEZvcm0gKioqL1xyXG5cclxuLmNvbnRlbnQtYXJlYSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5yZWdpc3RlckZvcm0gaDEge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlByb2R1Y3RTYW5zUmVndWxhclwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5yZWdpc3RlckZvcm0gaDMge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlByb2R1Y3RTYW5zUmVndWxhclwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcbi5yZWdpc3RlckZvcm0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIG1hcmdpbjogNHZoIGF1dG87XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuLmlucHV0LWNvbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5pbnB1dC1maWVsZCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUHJvZHVjdFNhbnNSZWd1bGFyXCIsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDEwcHg7XHJcbiAgd2lkdGg6IDk1JTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC41cztcclxufVxyXG4uaW5wdXQtZmllbGQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2M0YzRjNDtcclxufVxyXG4uaW5wdXQtZmllbGQ6Zm9jdXMge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM3MWM2Zjc7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uZXJyb3JNZXNzYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxMHB0O1xyXG4gIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgY29sb3I6ICNjYzAwMzM7XHJcbn1cclxuXHJcbi8qKiogQm90dG9tIGJ1dHRvbnMgKioqL1xyXG4ucmVnaXN0ZXJCdXR0b24ge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlByb2R1Y3RTYW5zUmVndWxhclwiLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyODZmNTtcclxuICB0cmFuc2l0aW9uOiAwLjE1cyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5yZWdpc3RlckJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdhYWRmZjtcclxuICB0cmFuc2l0aW9uOiAwLjE1cyBhbGwgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmZvcmdvdC1idXR0b24ge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogI2M0YzRjNDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxufVxyXG5cclxuLyoqKiBGb3JtIHZhbGlkYXRpb24gKioqL1xyXG4uZmxhZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbG9yOiAjY2MwMDMzO1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgbWFyZ2luLXRvcDogMTNweDtcclxufVxyXG4uZXJyb3Ige1xyXG4gIGNvbG9yOiAjY2MwMDMzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2U0ZTQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2NjMDAzMztcclxufVxyXG4uZXJyb3I6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2NjMDAzMztcclxufVxyXG4uZXJyb3JCdG4ge1xyXG4gIGNvbG9yOiAjY2MwMDMzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2U0ZTQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2NjMDAzMztcclxufVxyXG4uZXJyb3JCdG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYzAwMzM7XHJcbiAgY29sb3I6ICNmY2U0ZTQ7XHJcbn1cclxuLnN1Y2Nlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmYwZDg7XHJcbiAgY29sb3I6ICMxZWNkOTc7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzFlY2Q5NztcclxufVxyXG4uc3VjY2Vzczo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjMWVjZDk3O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"register\">\n  <nav id=\"nav\">\n    <div class=\"navLeft\">\n      <a href=\"#\" class=\"logo\">Recipeasy</a> <a [routerLink]=\"['/info']\" class=\"subPoint\">About</a> <a [routerLink]=\"['/info']\" class=\"subPoint\">How it works</a> <a [routerLink]=\"['/info']\" class=\"subPoint\">Contact</a>\n    </div>\n    <div class=\"navRight\"><a class=\"subPoint\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/login']\">Login</a></div>\n  </nav>\n  <div class=\"content-area\">\n    <div class=\"registerForm\">\n      <h1>Create your account</h1>\n      <h3>Sign up with your email address</h3>\n      <form autocomplete=\"off\">\n        <div class=\"input-col\">\n          <input\n            type=\"text\"\n            [(ngModel)]=\"username\"\n            name=\"username\"\n            class=\"input-field\"\n            [ngClass]=\"{ error: specificError[0], success: specificError[0] == false }\"\n            placeholder=\"Username\"\n            (keyup)=\"checkField('username')\"\n          />\n          <label class=\"errorMessage\">\n            <p *ngIf=\"specificError[0]\">{{ specificMessage[0] }}</p>\n          </label>\n        </div>\n        <div class=\"input-col\">\n          <input\n            type=\"text\"\n            [(ngModel)]=\"email\"\n            name=\"email\"\n            class=\"input-field\"\n            [ngClass]=\"{ error: specificError[1], success: specificError[1] == false }\"\n            placeholder=\"Email\"\n            autocomplete=\"email\"\n            (keyup)=\"checkField('email')\"\n          />\n          <label class=\"errorMessage\">\n            <p *ngIf=\"specificError[1]\">{{ specificMessage[1] }}</p>\n          </label>\n        </div>\n        <div class=\"input-col\">\n          <input\n            type=\"password\"\n            [(ngModel)]=\"password\"\n            name=\"password\"\n            class=\"input-field\"\n            [ngClass]=\"{ error: specificError[3], success: specificError[3] == false }\"\n            placeholder=\"Password\"\n            autocomplete=\"new-password\"\n            (keyup)=\"checkField('password'); checkField('passConf')\"\n          />\n          <label class=\"errorMessage\">\n            <p *ngIf=\"specificError[3]\">{{ specificMessage[3] }}</p>\n          </label>\n        </div>\n        <div class=\"input-col\">\n          <input\n            type=\"password\"\n            [(ngModel)]=\"passConf\"\n            name=\"passConf\"\n            class=\"input-field\"\n            [ngClass]=\"{ error: specificError[2], success: specificError[2] == false }\"\n            placeholder=\"Confirm password\"\n            autocomplete=\"no\"\n            (keyup)=\"checkField('passConf')\"\n          />\n          <label class=\"errorMessage\">\n            <p *ngIf=\"specificError[2]\">{{ specificMessage[2] }}</p>\n          </label>\n        </div>\n        <input class=\"registerButton\" (click)=\"onRegisterSubmit()\" type=\"button\" value=\"Register\" /> <a class=\"forgot-button\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/login']\">Already have an account? Log In!</a>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user-validate.service */ "./src/app/services/user-validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, authService, userService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.specificError = [, , , ,];
        this.specificMessage = [, , , ,];
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            passConf: this.passConf,
            username: this.username,
            password: this.password
        };
        this.validateService.validateUsername(user.username).then(function (nameRes) {
            _this.validateService.validateEmail(user.email).then(function (emailRes) {
                // Validate username.
                if (!nameRes.res) {
                    _this.specificError[0] = true;
                    _this.specificMessage[0] = nameRes.error;
                }
                // Validate email.
                if (!emailRes.res) {
                    _this.specificError[1] = true;
                    _this.specificMessage[1] = emailRes.error;
                }
                // Validate email conf.
                if (user.passConf === undefined || user.passConf === "") {
                    _this.specificError[2] = true;
                    _this.specificMessage[2] = "Password confirmation required.";
                }
                // Validate password.
                var passwordRes = _this.validateService.validatePassword(user.password);
                if (!passwordRes.res) {
                    _this.specificError[3] = true;
                    _this.specificMessage[3] = passwordRes.error;
                }
                // Register new user.
                for (var i = 0; i < _this.specificError.length; i++) {
                    if (_this.specificError[i]) {
                        return false;
                    }
                }
                _this.authService.registerUser(user).subscribe(function (data) {
                    if (data.success) {
                        _this.router.navigate(["/login"]);
                    }
                    else {
                        console.log("Registration failed");
                        _this.router.navigate(["/register"]);
                    }
                });
            });
        });
    };
    RegisterComponent.prototype.checkField = function (type) {
        var _this = this;
        if (type === "username" && this.username !== undefined) {
            this.validateService.validateUsername(this.username).then(function (nameRes) {
                if (!nameRes.res) {
                    _this.specificError[0] = true;
                    _this.specificMessage[0] = nameRes.error;
                }
                else {
                    _this.specificError[0] = false;
                    _this.specificMessage[0] = undefined;
                }
            });
        }
        else if (type === "email" && this.email !== undefined) {
            this.validateService.validateEmail(this.email).then(function (emailRes) {
                if (!emailRes.res) {
                    _this.specificError[1] = true;
                    _this.specificMessage[1] = emailRes.error;
                }
                else {
                    _this.specificError[1] = false;
                    _this.specificMessage[1] = undefined;
                }
            });
        }
        else if (type === "passConf" && this.passConf !== undefined) {
            var passwordConfRes = this.validateService.validatePasswordConf(this.password, this.passConf);
            if (!passwordConfRes.res) {
                this.specificError[2] = true;
                this.specificMessage[2] = passwordConfRes.error;
            }
            else if (this.specificError[3]) {
                this.specificError[2] = true;
                this.specificMessage[2] = "";
            }
            else {
                this.specificError[2] = false;
                this.specificMessage[2] = undefined;
            }
        }
        else if (type === "password" && this.password !== undefined) {
            var passwordRes = this.validateService.validatePassword(this.password);
            if (!passwordRes.res) {
                this.specificError[3] = true;
                this.specificMessage[3] = passwordRes.error;
            }
            else {
                this.specificError[3] = false;
                this.specificMessage[3] = undefined;
            }
        }
        else {
            // User clicked in and out, without typing anything.
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_validate_service__WEBPACK_IMPORTED_MODULE_1__["UserValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/register/verify/verify.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/register/verify/verify.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".verify {\r\n  height: 100vh;\r\n  width: 100%;\r\n  font-family: \"ProductSansRegular\";\r\n  position: relative;\r\n}\r\n\r\n.vInfo {\r\n  text-align: center;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  padding: 40px;\r\n  /* background-color: red; */\r\n}\r\n\r\n.vInfo div {\r\n  opacity: 0;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.vInfo h1 {\r\n  font-size: 50px;\r\n}\r\n\r\n.vInfo p {\r\n  font-size: 15px;\r\n}\r\n\r\n.clickable {\r\n  cursor: pointer;\r\n}\r\n\r\n.show {\r\n  opacity: 1 !important;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci92ZXJpZnkvdmVyaWZ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixTQUFTO0VBQ1QseUNBQWlDO1VBQWpDLGlDQUFpQztFQUNqQyxjQUFjO0VBQ2QsNEJBQTRCO0NBQzdCOztBQUNEO0VBQ0UsV0FBVztFQUNYLGlDQUFpQztDQUNsQzs7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixpQ0FBaUM7Q0FDbEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3ZlcmlmeS92ZXJpZnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZXJpZnkge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUHJvZHVjdFNhbnNSZWd1bGFyXCI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udkluZm8ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xyXG59XHJcbi52SW5mbyBkaXYge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLnZJbmZvIGgxIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuLnZJbmZvIHAge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLmNsaWNrYWJsZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2hvdyB7XHJcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/register/verify/verify.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/register/verify/verify.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"verify\">\r\n  <div class=\"vInfo\">\r\n    <div [ngClass]=\"{ show: !resend }\">\r\n      <h1>{{ title }}</h1>\r\n      <p [ngClass]=\"{ clickable: err }\" (click)=\"resendEmail()\">{{ message }}</p>\r\n    </div>\r\n    <div class=\"resend\" [ngClass]=\"{ show: resend }\">\r\n      <h1>Resend email</h1>\r\n      <input type=\"text\" placeholder=\"eg. 123@resend.com\" />\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/register/verify/verify.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/register/verify/verify.component.ts ***!
  \****************************************************************/
/*! exports provided: VerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyComponent", function() { return VerifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VerifyComponent = /** @class */ (function () {
    function VerifyComponent(route, authService, router) {
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.splash = true;
        this.title = "Verifying account";
        this.message = "";
        this.resend = false;
    }
    VerifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            var token = params.token;
            if (_this.verifyToken(token)) {
                _this.authService.verifyUser(token).subscribe(function (data) {
                    console.log(data);
                    if (data.success) {
                        _this.err = false;
                        _this.title = "Account verified!";
                        _this.message = "You will now be redirected to the next page where you can login.";
                        var interval = setInterval(function () {
                            _this.router.navigate(["/login"]);
                        }, 5000);
                    }
                    else {
                        _this.err = true;
                        _this.title = "Couldn't verify account";
                        _this.message = "Looks like that token has expired. Click here to receive a new link to activate your account.";
                    }
                });
            }
            else {
                _this.router.navigate(["/"]);
            }
        });
    };
    VerifyComponent.prototype.verifyToken = function (token) {
        if (!token) {
            return false;
        }
        return true;
    };
    VerifyComponent.prototype.resendEmail = function () {
        if (this.err !== true) {
            return;
        }
        console.log("Resend");
        this.resend = true;
    };
    VerifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-verify",
            template: __webpack_require__(/*! ./verify.component.html */ "./src/app/components/register/verify/verify.component.html"),
            styles: [__webpack_require__(/*! ./verify.component.css */ "./src/app/components/register/verify/verify.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], VerifyComponent);
    return VerifyComponent;
}());



/***/ }),

/***/ "./src/app/components/results/results.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/results/results.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*** Recipes search window ***/\r\n.recipes {\r\n  width: 100%;\r\n  min-height: calc(100vh - 60px);\r\n}\r\n@media only screen and (min-width: 1600px) {\r\n  .pageArea {\r\n    width: 1350px;\r\n    margin: auto;\r\n  }\r\n}\r\n@media only screen and (max-width: 1599px) {\r\n  .pageArea {\r\n    width: 95%;\r\n    margin: auto;\r\n  }\r\n}\r\n@media only screen and (max-width: 550px) {\r\n  .recipeCard {\r\n    width: 100%;\r\n  }\r\n}\r\n.breakLine {\r\n  width: 100%;\r\n  height: 2px;\r\n  background-color: #eaeaea;\r\n  border-radius: 25px;\r\n}\r\n.headerArea {\r\n  padding: 40px 0 10px 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: baseline;\r\n}\r\n.headerArea div span {\r\n  padding-left: 5px;\r\n}\r\n.refineFilter {\r\n  cursor: pointer;\r\n}\r\n/*** Filter area ***/\r\n.filterArea {\r\n  width: 100%;\r\n  max-height: 0px;\r\n  overflow: hidden;\r\n  transition: all 0.5s ease-in-out 0s;\r\n}\r\n.filterOpen {\r\n  max-height: 400px;\r\n  transition: all 0.5s ease-in-out 0s;\r\n}\r\n.filterOptions {\r\n  padding-top: 15px;\r\n  padding-bottom: 20px;\r\n}\r\n.filterOptions input,\r\nlabel {\r\n  display: block;\r\n  font-size: 16px;\r\n  font-family: \"ProductSansRegular\", sans-serif;\r\n}\r\n.filterOptions input {\r\n  padding: 10px;\r\n  margin-top: 3px;\r\n  border-radius: 8px;\r\n  background-color: #f1f0f5;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n}\r\n.formElRow {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n.formElRow .formEl {\r\n  margin-right: 30px;\r\n}\r\n.formEl {\r\n  margin: 5px 0;\r\n}\r\n.filterBtns {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-bottom: 20px;\r\n}\r\n.filterBtns div {\r\n  padding: 9px 15px;\r\n  color: #fff;\r\n  background-color: #4286f5;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n}\r\n.resetBtn {\r\n  background-color: #f1f1f5 !important;\r\n  color: rgb(97, 97, 97) !important;\r\n}\r\n/***  Cookbooks ***/\r\n.cookbookArea {\r\n  /* height: 300px; */\r\n  width: 100%;\r\n  /* background-color: red; */\r\n  /* padding: 5px 0; */\r\n}\r\n.cookbookArea h4 {\r\n  padding-top: 10px;\r\n  padding-bottom: 15px;\r\n}\r\n.cookbookTitle {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.cookbookTitle i {\r\n  cursor: pointer;\r\n}\r\n.showMore {\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n  align-self: baseline;\r\n  padding-left: 5px;\r\n  cursor: pointer;\r\n}\r\n.showMore:hover {\r\n  text-decoration: underline;\r\n}\r\n.boxContainer {\r\n  /* height: fit-content; */\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  overflow-x: scroll;\r\n  padding-bottom: 10px;\r\n}\r\n/*** Style for the image boxes ***/\r\n.itemBox {\r\n  margin-right: 20px;\r\n  width: 210px;\r\n}\r\n.tImage {\r\n  width: 210px;\r\n  height: 210px;\r\n  margin: auto;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n.tPic {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 25px;\r\n  background: #f1f1f5;\r\n}\r\n.tImageOverlay {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(39, 39, 39, 0.6);\r\n  opacity: 0;\r\n  transition: all 0.3s ease-in-out 0s;\r\n  position: absolute;\r\n  z-index: 10;\r\n  top: 0;\r\n  left: 0;\r\n  border-radius: 25px;\r\n}\r\n.tImage:hover .tImageOverlay {\r\n  transition: all 0.3s ease-in-out 0s;\r\n  opacity: 1;\r\n}\r\n.image {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.image img {\r\n  height: 100%;\r\n  width: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  border-top-left-radius: 25px;\r\n  border-top-right-radius: 25px;\r\n}\r\n.tImageFav {\r\n  font-size: 24pt;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  color: #fff;\r\n  cursor: default;\r\n}\r\n.tInfo {\r\n  padding-top: 5px;\r\n  font-size: 10pt;\r\n  text-align: left;\r\n  font-family: \"ProductSansRegular\", sans-serif;\r\n}\r\n.tInfo-title:hover {\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n.tInfo h4 {\r\n  padding-bottom: 10px;\r\n}\r\n.tFol {\r\n  margin-top: 10px;\r\n  font-size: 9pt;\r\n}\r\n/*** Recipes ***/\r\n.recipeArea h4 {\r\n  padding-top: 10px;\r\n  padding-bottom: 15px;\r\n}\r\n.recipeGrid {\r\n  overflow: hidden;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-evenly;\r\n  width: 100%;\r\n  margin: auto;\r\n  padding-top: 20px;\r\n}\r\n.recipeCard {\r\n  background-color: #fff;\r\n  width: 300px;\r\n  border-radius: 25px;\r\n  margin-bottom: 40px;\r\n  border: rgb(230, 230, 230) solid 1px;\r\n  position: relative;\r\n  transition: all 0.3s ease-in-out 0s;\r\n}\r\n.mainImg {\r\n  height: 175px;\r\n  background-color: #f1f0f5;\r\n  border-top-left-radius: 25px;\r\n  border-top-right-radius: 25px;\r\n  cursor: pointer;\r\n}\r\n.rInfo {\r\n  padding: 15px;\r\n}\r\n.rTitle {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n}\r\n.rDetails {\r\n  font-size: 12px;\r\n  padding-top: 3px;\r\n}\r\n.rDetails span {\r\n  color: #4286f5;\r\n}\r\n.rInteraction {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  box-sizing: border-box;\r\n  font-size: 14px;\r\n  margin: 15px 0;\r\n}\r\n.interactionButtons i {\r\n  margin-right: 20px;\r\n  padding: 5px;\r\n  font-size: 19px;\r\n  cursor: pointer;\r\n  transition: all 0.2s ease-in-out 0s;\r\n}\r\n.upvote {\r\n  color: #eb6c1a;\r\n  transition: all 0.2s ease-in-out 0s;\r\n}\r\n.downvote {\r\n  color: #6664bd;\r\n  transition: all 0.2s ease-in-out 0s;\r\n}\r\n.saved {\r\n  color: #f8c518;\r\n  transition: all 0.2s ease-in-out 0s;\r\n}\r\n/*** Bottom of page ***/\r\n.endOfPage {\r\n  padding-top: 15px;\r\n  padding-bottom: 30px;\r\n  text-align: center;\r\n  color: rgb(107, 107, 107);\r\n}\r\n.loadingSpinner {\r\n  padding-top: 15px;\r\n  padding-bottom: 30px;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.lds-facebook {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 64px;\r\n  height: 64px;\r\n}\r\n.lds-facebook div {\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: 6px;\r\n  width: 13px;\r\n  background: #4286f5;\r\n  -webkit-animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\r\n          animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\r\n}\r\n.lds-facebook div:nth-child(1) {\r\n  left: 6px;\r\n  -webkit-animation-delay: -0.24s;\r\n          animation-delay: -0.24s;\r\n}\r\n.lds-facebook div:nth-child(2) {\r\n  left: 26px;\r\n  -webkit-animation-delay: -0.12s;\r\n          animation-delay: -0.12s;\r\n}\r\n.lds-facebook div:nth-child(3) {\r\n  left: 45px;\r\n  -webkit-animation-delay: 0;\r\n          animation-delay: 0;\r\n}\r\n@-webkit-keyframes lds-facebook {\r\n  0% {\r\n    top: 6px;\r\n    height: 51px;\r\n  }\r\n  50%,\r\n  100% {\r\n    top: 19px;\r\n    height: 26px;\r\n  }\r\n}\r\n@keyframes lds-facebook {\r\n  0% {\r\n    top: 6px;\r\n    height: 51px;\r\n  }\r\n  50%,\r\n  100% {\r\n    top: 19px;\r\n    height: 26px;\r\n  }\r\n}\r\n/*** General ***/\r\n::-webkit-scrollbar {\r\n  width: 0px;\r\n  background: transparent;\r\n}\r\n.noselect {\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n.hidden {\r\n  visibility: hidden;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQkFBK0I7QUFDL0I7RUFDRSxZQUFZO0VBQ1osK0JBQStCO0NBQ2hDO0FBRUQ7RUFDRTtJQUNFLGNBQWM7SUFDZCxhQUFhO0dBQ2Q7Q0FDRjtBQUNEO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsYUFBYTtHQUNkO0NBQ0Y7QUFDRDtFQUNFO0lBQ0UsWUFBWTtHQUNiO0NBQ0Y7QUFFRDtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLG9CQUFvQjtDQUNyQjtBQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0Isc0JBQXNCO0NBQ3ZCO0FBQ0Q7RUFDRSxrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUVELHFCQUFxQjtBQUNyQjtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9DQUFvQztDQUNyQztBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLG9DQUFvQztDQUNyQztBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtDQUN0QjtBQUVEOztFQUVFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsOENBQThDO0NBQy9DO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxjQUFjO0NBQ2Y7QUFFRDtFQUNFLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IscUJBQXFCO0NBQ3RCO0FBQ0Q7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxxQ0FBcUM7RUFDckMsa0NBQWtDO0NBQ25DO0FBRUQsb0JBQW9CO0FBQ3BCO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIscUJBQXFCO0NBQ3RCO0FBQ0Q7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0NBQ3RCO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSwyQkFBMkI7Q0FDNUI7QUFFRDtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osY0FBYztFQUNkLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIscUJBQXFCO0NBQ3RCO0FBQ0QsbUNBQW1DO0FBQ25DO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHdDQUF3QztFQUN4QyxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osT0FBTztFQUNQLFFBQVE7RUFDUixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLG9DQUFvQztFQUNwQyxXQUFXO0NBQ1o7QUFDRDtFQUNFLFlBQVk7RUFDWixhQUFhO0NBQ2Q7QUFDRDtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1oscUJBQWtCO0tBQWxCLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsOEJBQThCO0NBQy9CO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0VBQ1YseUNBQWlDO1VBQWpDLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osZ0JBQWdCO0NBQ2pCO0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiw4Q0FBOEM7Q0FDL0M7QUFDRDtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLHFCQUFxQjtDQUN0QjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7Q0FDaEI7QUFFRCxpQkFBaUI7QUFDakI7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0NBQ3RCO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLG9DQUFvQztDQUNyQztBQUNEO0VBQ0UsY0FBYztFQUNkLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsY0FBYztDQUNmO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGVBQWU7Q0FDaEI7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixvQ0FBb0M7Q0FDckM7QUFFRDtFQUNFLGVBQWU7RUFDZixvQ0FBb0M7Q0FDckM7QUFDRDtFQUNFLGVBQWU7RUFDZixvQ0FBb0M7Q0FDckM7QUFDRDtFQUNFLGVBQWU7RUFDZixvQ0FBb0M7Q0FDckM7QUFFRCx3QkFBd0I7QUFDeEI7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQiwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLHdCQUF3QjtDQUN6QjtBQUNEO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtDQUNkO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLDJFQUFtRTtVQUFuRSxtRUFBbUU7Q0FDcEU7QUFDRDtFQUNFLFVBQVU7RUFDVixnQ0FBd0I7VUFBeEIsd0JBQXdCO0NBQ3pCO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsZ0NBQXdCO1VBQXhCLHdCQUF3QjtDQUN6QjtBQUNEO0VBQ0UsV0FBVztFQUNYLDJCQUFtQjtVQUFuQixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFO0lBQ0UsU0FBUztJQUNULGFBQWE7R0FDZDtFQUNEOztJQUVFLFVBQVU7SUFDVixhQUFhO0dBQ2Q7Q0FDRjtBQVZEO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsYUFBYTtHQUNkO0VBQ0Q7O0lBRUUsVUFBVTtJQUNWLGFBQWE7R0FDZDtDQUNGO0FBRUQsaUJBQWlCO0FBRWpCO0VBQ0UsV0FBVztFQUNYLHdCQUF3QjtDQUN6QjtBQUVEO0VBQ0UsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUUxQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtDQUNuQjtBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogUmVjaXBlcyBzZWFyY2ggd2luZG93ICoqKi9cclxuLnJlY2lwZXMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcclxuICAucGFnZUFyZWEge1xyXG4gICAgd2lkdGg6IDEzNTBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTk5cHgpIHtcclxuICAucGFnZUFyZWEge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gIC5yZWNpcGVDYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLmJyZWFrTGluZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcblxyXG4uaGVhZGVyQXJlYSB7XHJcbiAgcGFkZGluZzogNDBweCAwIDEwcHggMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbn1cclxuLmhlYWRlckFyZWEgZGl2IHNwYW4ge1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcbi5yZWZpbmVGaWx0ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyoqKiBGaWx0ZXIgYXJlYSAqKiovXHJcbi5maWx0ZXJBcmVhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dCAwcztcclxufVxyXG4uZmlsdGVyT3BlbiB7XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQgMHM7XHJcbn1cclxuLmZpbHRlck9wdGlvbnMge1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uZmlsdGVyT3B0aW9ucyBpbnB1dCxcclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LWZhbWlseTogXCJQcm9kdWN0U2Fuc1JlZ3VsYXJcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4uZmlsdGVyT3B0aW9ucyBpbnB1dCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYwZjU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZm9ybUVsUm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLmZvcm1FbFJvdyAuZm9ybUVsIHtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuLmZvcm1FbCB7XHJcbiAgbWFyZ2luOiA1cHggMDtcclxufVxyXG5cclxuLmZpbHRlckJ0bnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbi5maWx0ZXJCdG5zIGRpdiB7XHJcbiAgcGFkZGluZzogOXB4IDE1cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyODZmNTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5yZXNldEJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmNSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiByZ2IoOTcsIDk3LCA5NykgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyoqKiAgQ29va2Jvb2tzICoqKi9cclxuLmNvb2tib29rQXJlYSB7XHJcbiAgLyogaGVpZ2h0OiAzMDBweDsgKi9cclxuICB3aWR0aDogMTAwJTtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXHJcbiAgLyogcGFkZGluZzogNXB4IDA7ICovXHJcbn1cclxuLmNvb2tib29rQXJlYSBoNCB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuLmNvb2tib29rVGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNvb2tib29rVGl0bGUgaSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zaG93TW9yZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zaG93TW9yZTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5ib3hDb250YWluZXIge1xyXG4gIC8qIGhlaWdodDogZml0LWNvbnRlbnQ7ICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG4vKioqIFN0eWxlIGZvciB0aGUgaW1hZ2UgYm94ZXMgKioqL1xyXG4uaXRlbUJveCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAyMTBweDtcclxufVxyXG4udEltYWdlIHtcclxuICB3aWR0aDogMjEwcHg7XHJcbiAgaGVpZ2h0OiAyMTBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udFBpYyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmNTtcclxufVxyXG4udEltYWdlT3ZlcmxheSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCAzOSwgMC42KTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxMDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcbi50SW1hZ2U6aG92ZXIgLnRJbWFnZU92ZXJsYXkge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLmltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmltYWdlIGltZyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XHJcbn1cclxuLnRJbWFnZUZhdiB7XHJcbiAgZm9udC1zaXplOiAyNHB0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG4udEluZm8ge1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxMHB0O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiUHJvZHVjdFNhbnNSZWd1bGFyXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnRJbmZvLXRpdGxlOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnRJbmZvIGg0IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG4udEZvbCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBmb250LXNpemU6IDlwdDtcclxufVxyXG5cclxuLyoqKiBSZWNpcGVzICoqKi9cclxuLnJlY2lwZUFyZWEgaDQge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcbi5yZWNpcGVHcmlkIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4ucmVjaXBlQ2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIGJvcmRlcjogcmdiKDIzMCwgMjMwLCAyMzApIHNvbGlkIDFweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XHJcbn1cclxuLm1haW5JbWcge1xyXG4gIGhlaWdodDogMTc1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjBmNTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uckluZm8ge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLnJUaXRsZSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5yRGV0YWlscyB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmctdG9wOiAzcHg7XHJcbn1cclxuLnJEZXRhaWxzIHNwYW4ge1xyXG4gIGNvbG9yOiAjNDI4NmY1O1xyXG59XHJcbi5ySW50ZXJhY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbn1cclxuXHJcbi5pbnRlcmFjdGlvbkJ1dHRvbnMgaSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzO1xyXG59XHJcblxyXG4udXB2b3RlIHtcclxuICBjb2xvcjogI2ViNmMxYTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcztcclxufVxyXG4uZG93bnZvdGUge1xyXG4gIGNvbG9yOiAjNjY2NGJkO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzO1xyXG59XHJcbi5zYXZlZCB7XHJcbiAgY29sb3I6ICNmOGM1MTg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHM7XHJcbn1cclxuXHJcbi8qKiogQm90dG9tIG9mIHBhZ2UgKioqL1xyXG4uZW5kT2ZQYWdlIHtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHJnYigxMDcsIDEwNywgMTA3KTtcclxufVxyXG4ubG9hZGluZ1NwaW5uZXIge1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmxkcy1mYWNlYm9vayB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNjRweDtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbn1cclxuLmxkcy1mYWNlYm9vayBkaXYge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNnB4O1xyXG4gIHdpZHRoOiAxM3B4O1xyXG4gIGJhY2tncm91bmQ6ICM0Mjg2ZjU7XHJcbiAgYW5pbWF0aW9uOiBsZHMtZmFjZWJvb2sgMS4ycyBjdWJpYy1iZXppZXIoMCwgMC41LCAwLjUsIDEpIGluZmluaXRlO1xyXG59XHJcbi5sZHMtZmFjZWJvb2sgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgbGVmdDogNnB4O1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjRzO1xyXG59XHJcbi5sZHMtZmFjZWJvb2sgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgbGVmdDogMjZweDtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjEycztcclxufVxyXG4ubGRzLWZhY2Vib29rIGRpdjpudGgtY2hpbGQoMykge1xyXG4gIGxlZnQ6IDQ1cHg7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwO1xyXG59XHJcbkBrZXlmcmFtZXMgbGRzLWZhY2Vib29rIHtcclxuICAwJSB7XHJcbiAgICB0b3A6IDZweDtcclxuICAgIGhlaWdodDogNTFweDtcclxuICB9XHJcbiAgNTAlLFxyXG4gIDEwMCUge1xyXG4gICAgdG9wOiAxOXB4O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLyoqKiBHZW5lcmFsICoqKi9cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAwcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5ub3NlbGVjdCB7XHJcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/results/results.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/results/results.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"recipes\">\r\n  <div class=\"pageArea\">\r\n    <div class=\"headerArea\">\r\n      <h2 *ngIf=\"recipes.length && cuisine\">{{ cuisine | textCapitalise }} food.</h2>\r\n      <h2 *ngIf=\"!recipes.length && cuisine\">No results found for {{ cuisine | textCapitalise }} food.</h2>\r\n      <h2 *ngIf=\"cookbooks.length || (recipes.length && !cuisine)\">Showing results for \"{{ searchQuery }}\"</h2>\r\n      <h2 *ngIf=\"!cookbooks.length && !recipes.length && !cuisine\">No results found for \"{{ searchQuery }}\"</h2>\r\n      <div class=\"refineFilter noselect\" *ngIf=\"cookbooks.length || recipes.length\" (click)=\"filterOpen = !filterOpen\"><i class=\"fas fa-filter\"></i><span>Refine search</span></div>\r\n    </div>\r\n    <div class=\"filterArea\" [ngClass]=\"{ filterOpen: filterOpen }\">\r\n      <div class=\"breakLine\"></div>\r\n      <div class=\"filterOptions\">\r\n        <div class=\"formEl\">\r\n          <label for=\"ingredients\">Ingredients:</label>\r\n          <input type=\"text\" name=\"ingredients\" [(ngModel)]=\"ingredients\" placeholder=\"eg. tomato, rice, bacon\" />\r\n        </div>\r\n        <div class=\"formElRow\">\r\n          <div class=\"formEl\">\r\n            <label for=\"servings\">Servings:</label>\r\n            <input type=\"text\" name=\"servings\" [(ngModel)]=\"servings\" placeholder=\"eg. 3-6\" />\r\n          </div>\r\n          <div class=\"formEl\">\r\n            <label for=\"difficulty\">Difficulty:</label>\r\n            <input type=\"text\" name=\"difficulty\" [(ngModel)]=\"difficulty\" placeholder=\"eg. 1\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"formElRow\">\r\n          <div class=\"formEl\">\r\n            <label for=\"timeMin\">Min time:</label>\r\n            <input type=\"text\" name=\"timeMin\" [(ngModel)]=\"timeMin\" placeholder=\"--:--\" />\r\n          </div>\r\n          <div class=\"formEl\">\r\n            <label for=\"timeMax\">Max time:</label>\r\n            <input type=\"text\" name=\"timeMax\" [(ngModel)]=\"timeMax\" placeholder=\"--:--\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"filterBtns\">\r\n        <div class=\"applyBtn noselect\" (click)=\"filterSearch(true, ingredients, servings, difficulty, timeMin, timeMax)\">Apply</div>\r\n        <div class=\"resetBtn noselect\" (click)=\"filterSearch(false)\">Reset</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"breakLine\" *ngIf=\"cookbooks.length\"></div>\r\n    <div class=\"cookbookArea\" *ngIf=\"cookbooks.length\">\r\n      <div class=\"cookbookTitle\">\r\n        <h4>Cookbooks<span class=\"showMore noselect\" *ngIf=\"recipes.length\">Show all</span></h4>\r\n        <div>\r\n          <i class=\"fas fa-chevron-left\" (click)=\"scrollCookbooks('left', cookbookContainer)\"></i>\r\n          <i class=\"fas fa-chevron-right\" style=\"margin-left: 15px\" (click)=\"scrollCookbooks('right', cookbookContainer)\"></i>\r\n        </div>\r\n      </div>\r\n      <div class=\"boxContainer\" #cookbookContainer>\r\n        <div class=\"itemBox\" *ngFor=\"let cookbook of cookbooks\">\r\n          <div class=\"tImage\">\r\n            <div class=\"tPic\"></div>\r\n            <div class=\"tImageOverlay\" (click)=\"viewCookbook(cookbook)\">\r\n              <i class=\"tImageFav fas fa-heart\" [ngClass]=\"{ saved: cookbook.saved }\" (click)=\"$event.stopPropagation(); toggleCookbookSave(cookbook)\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"tInfo\">\r\n            <h4 class=\"tInfo-title\" (click)=\"viewCookbook(cookbook)\">{{ cookbook.title }}</h4>\r\n            <p>{{ cookbook.description }}</p>\r\n            <p class=\"tFol\">{{ generalService.formatFollowers(cookbook.followers) }} followers.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"breakLine\" *ngIf=\"recipes.length\"></div>\r\n    <div class=\"recipeArea\" *ngIf=\"recipes.length\">\r\n      <h4>Recipes<span class=\"showMore noselect\" *ngIf=\"cookbooks.length\">Show all</span></h4>\r\n      <div class=\"recipeGrid\">\r\n        <div class=\"recipeCard noselect\" *ngFor=\"let recipe of searchList\">\r\n          <div class=\"mainImg\" (click)=\"viewRecipe(recipe._id)\">\r\n            <div class=\"image\">\r\n              <img [ngClass]=\"{ hidden: !recipe.image }\" src=\"{{ generalService.getImageLink(recipe.image) }}\" #rImg />\r\n            </div>\r\n          </div>\r\n          <div class=\"rInfo\">\r\n            <div class=\"rTitle\">{{ recipe.title }}</div>\r\n            <div class=\"rDetails\">\r\n              {{ recipe.author }} ● <span>{{ recipe.mealType }}</span> ● {{ generalService.getTimeAgo(recipe.timestamp) }}\r\n            </div>\r\n            <div class=\"rInteraction\">\r\n              <p title=\"Points\">{{ recipe.score }} points</p>\r\n              <p title=\"Time\"><i class=\"far fa-clock\" style=\"padding-right:3px\"></i>{{ generalService.getTime(recipe.prepTime + recipe.cookTime) }}</p>\r\n              <p title=\"Servings\"><i class=\"fas fa-utensils\"></i> x {{ recipe.servings }}</p>\r\n              <div class=\"difficultyCircle\" title=\"Difficulty\">\r\n                {{ generalService.getDifficulty(recipe.difficulty) }}\r\n              </div>\r\n            </div>\r\n            <div class=\"interactionButtons\">\r\n              <i class=\"fas fa-arrow-up\" title=\"Upvote\" [ngClass]=\"{ upvote: recipe.vote == 'up' }\" (click)=\"$event.stopPropagation(); castVote('up', recipe)\"></i>\r\n              <i class=\"fas fa-arrow-down\" title=\"Downvote\" [ngClass]=\"{ downvote: recipe.vote == 'down' }\" (click)=\"$event.stopPropagation(); castVote('down', recipe)\"></i>\r\n              <i class=\"fas fa-star\" title=\"Save\" [ngClass]=\"{ saved: recipe.saved == true }\" (click)=\"$event.stopPropagation(); toggleSave(recipe)\"></i>\r\n              <i class=\"fas fa-ellipsis-v\" title=\"More options\" (click)=\"$event.stopPropagation(); openRecipeOptions(recipe)\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div infiniteScroll [infiniteScrollDistance]=\"1\" [infiniteScrollThrottle]=\"1000\" [fromRoot]=\"true\" (scrolled)=\"onScroll()\"></div>\r\n      <div class=\"loadingSpinner\" *ngIf=\"!endOfPage\">\r\n        <div class=\"lds-facebook\" (click)=\"onScroll()\">\r\n          <div></div>\r\n          <div></div>\r\n          <div></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"endOfPage\" *ngIf=\"endOfPage\">No more results</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/results/results.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/results/results.component.ts ***!
  \*********************************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/recipe.service */ "./src/app/services/recipe.service.ts");
/* harmony import */ var _services_cookbook_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cookbook.service */ "./src/app/services/cookbook.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_recipe_validate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/recipe-validate.service */ "./src/app/services/recipe-validate.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _recipe_dialog_recipe_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../recipe-dialog/recipe-dialog.service */ "./src/app/components/recipe-dialog/recipe-dialog.service.ts");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/general.service */ "./src/app/services/general.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ResultsComponent = /** @class */ (function () {
    function ResultsComponent(recipeService, cookbookService, recipeValidateService, userService, router, activatedRoute, titleService, recipeDialog, generalService) {
        this.recipeService = recipeService;
        this.cookbookService = cookbookService;
        this.recipeValidateService = recipeValidateService;
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.recipeDialog = recipeDialog;
        this.generalService = generalService;
        this.cookbooks = [];
        this.recipes = [];
        this.usersCookbooks = "";
        this.searchList = [];
        // Filter
        this.filterOpen = false;
        // General page
        this.loading = true;
        this.lastSeen = undefined;
        this.endOfPage = false;
        this.page = 1;
        this.voteLock = false;
        this.saveLock = false;
    }
    ResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.generalService.getUser().id;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.searchQuery = params["search_query"];
            _this.cuisine = params["cuisine"];
            _this.page = 1;
            if (!_this.searchQuery && !_this.cuisine) {
                _this.router.navigate(["/"]);
            }
            else if (_this.cuisine) {
                _this.titleService.setTitle("" + _this.cuisine);
                _this.lastSeen = undefined;
                _this.endOfPage = false;
                _this.getCuisineData();
            }
            else {
                _this.titleService.setTitle("" + _this.searchQuery);
                _this.lastSeen = undefined;
                _this.endOfPage = false;
                _this.getData();
            }
            _this.onScroll();
        });
    };
    ResultsComponent.prototype.getData = function () {
        var _this = this;
        this.cookbookService.getCookbookSearch(this.searchQuery).subscribe(function (cookbookData) {
            if (!cookbookData.success) {
                return console.log("Cookbooks could not be acquired");
            }
            _this.recipeService.getRecipeSearch(_this.searchQuery).subscribe(function (recipeData) {
                if (!recipeData.success) {
                    return console.log("Recipes could not be acquired");
                }
                _this.recipes = recipeData.recipes;
                _this.cookbooks = cookbookData.cookbooks;
                _this.searchList = _this.recipes;
                _this.userService.getUserData().subscribe(function (data) {
                    if (data.success) {
                        _this.usersRecipes = data.recipes;
                        _this.usersCookbooks = data.cookbooks;
                        _this.recipes = _this.applyUserData(recipeData.recipes);
                        _this.loading = false;
                        _this.onScroll();
                    }
                    else {
                        console.log("User data could not be acquired");
                    }
                });
            });
        });
    };
    ResultsComponent.prototype.getCuisineData = function () {
        var _this = this;
        this.recipeService.getRecipeCuisine(this.cuisine).subscribe(function (recipeData) {
            if (!recipeData.success) {
                return console.log("Recipes could not be acquired");
            }
            _this.recipes = recipeData.recipes;
            _this.searchList = _this.recipes;
            _this.userService.getUserData().subscribe(function (data) {
                if (data.success) {
                    _this.usersRecipes = data.recipes;
                    _this.recipes = _this.applyUserData(recipeData.recipes);
                    _this.loading = false;
                    _this.onScroll();
                }
                else {
                    console.log("User data could not be acquired");
                }
            });
        });
    };
    ResultsComponent.prototype.onScroll = function () {
        var _this = this;
        if (this.endOfPage || this.recipes.length === 0) {
            return;
        }
        var terms;
        if (this.searchQuery) {
            terms = this.searchQuery;
        }
        else if (this.cuisine) {
            terms = this.cuisine;
        }
        this.lastSeen = this.recipes[this.recipes.length - 1]._id;
        this.recipeService.getRecipeSearch(terms, this.page).subscribe(function (recipeData) {
            _this.recipes = _this.recipes.concat(_this.applyUserData(recipeData.recipes));
            _this.applyFilter();
            _this.page++;
            if (_this.lastSeen === _this.recipes[_this.recipes.length - 1]._id) {
                _this.endOfPage = true;
                return;
            }
        });
    };
    ResultsComponent.prototype.applyUserData = function (recipeList) {
        var _this = this;
        recipeList.forEach(function (x) {
            var indexVote = _this.usersRecipes.voted.findIndex(function (y) { return y.recipe._id === x._id; });
            var indexSave = _this.usersRecipes.saved.findIndex(function (y) { return y.recipe._id === x._id; });
            if (indexVote !== -1) {
                x.vote = _this.usersRecipes.voted[indexVote].vote;
            }
            if (indexSave !== -1) {
                x.saved = true;
            }
        });
        this.cookbooks.forEach(function (x) {
            var indexSave = _this.usersCookbooks.saved.findIndex(function (y) { return y.cookbook._id === x._id; });
            if (indexSave !== -1) {
                x.saved = true;
            }
        });
        return recipeList;
    };
    ResultsComponent.prototype.filterSearch = function (apply) {
        if (apply) {
            var filter = {};
            if (this.ingredients && !/^\s*$/.test(this.ingredients)) {
                filter["ingredients"] = this.ingredients.split(",").map(function (item) {
                    return item.trim();
                });
            }
            if (this.servings !== undefined) {
                var regex = /^([0-9][0-9]*-[0-9][0-9]*|[0-9][0-9]*)$/;
                if (regex.test(this.servings)) {
                    if (this.servings.indexOf("-") > -1) {
                        var numbers = this.servings.split("-");
                        if (parseInt(numbers[0], 10) < parseInt(numbers[1], 10)) {
                            filter["servings"] = [parseInt(numbers[0], 10), parseInt(numbers[1], 10)];
                        }
                        else {
                            filter["servings"] = [parseInt(numbers[1], 10), parseInt(numbers[0], 10)];
                        }
                    }
                    else {
                        filter["servings"] = [parseInt(this.servings, 10)];
                    }
                }
                else {
                    console.log("bad");
                }
            }
            if (this.difficulty !== undefined) {
                if (!isNaN(this.difficulty) && this.difficulty >= 0 && this.difficulty < 3) {
                    filter["difficulty"] = parseInt(this.difficulty, 10);
                }
            }
            var timeRe = /^[0-9]{2}:[0-5][0-9]$/;
            if (this.timeMin !== undefined && timeRe.test(this.timeMin)) {
                filter["timeMin"] = this.generalService.getSeconds(this.timeMin);
            }
            if (this.timeMax !== undefined && timeRe.test(this.timeMax)) {
                filter["timeMax"] = this.generalService.getSeconds(this.timeMax);
            }
            this.filter = filter;
            console.log(filter);
            this.filterOpen = false;
        }
        else {
            this.ingredients = this.servings = this.difficulty = this.timeMin = this.timeMax = undefined;
            this.filter = {};
        }
        this.applyFilter();
    };
    ResultsComponent.prototype.applyFilter = function () {
        var _this = this;
        var list = this.recipes.filter(function (x) {
            var _loop_1 = function (key) {
                if (!_this.filter.hasOwnProperty(key)) {
                    return "continue";
                }
                if (key === "ingredients") {
                    var ing_1 = x.ingredients.map(function (ingr) { return ingr.food; });
                    if (!_this.filter.ingredients.some(function (e) { return ing_1.indexOf(e) > -1; })) {
                        return { value: false };
                    }
                }
                else if (key === "servings") {
                    if (_this.filter.servings.length === 1) {
                        if (_this.filter.servings[0] !== parseInt(x.servings, 10)) {
                            return { value: false };
                        }
                    }
                    else {
                        if (_this.filter.servings[0] > x.servings || _this.filter.servings[1] < x.servings) {
                            return { value: false };
                        }
                    }
                }
                else if (key === "difficulty") {
                    if (_this.filter.difficulty !== parseInt(x.difficulty, 10)) {
                        return { value: false };
                    }
                }
                else if (key === "timeMin") {
                    if (_this.filter.timeMin < x.prepTime + x.cookTime) {
                        return { value: false };
                    }
                }
                else if (key === "timeMax") {
                    if (_this.filter.timeMax > x.prepTime + x.cookTime) {
                        return { value: false };
                    }
                }
            };
            for (var key in _this.filter) {
                var state_1 = _loop_1(key);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
            return true;
        });
        this.searchList = list;
    };
    ResultsComponent.prototype.openRecipeOptions = function (recipe) {
        this.recipeDialog.open(recipe).subscribe(function (data) {
            // console.log(data);
        });
    };
    ResultsComponent.prototype.viewRecipe = function (id) {
        this.router.navigate(["recipe", id]);
    };
    ResultsComponent.prototype.viewCookbook = function (cookbook) {
        this.router.navigate(["cookbook", cookbook._id]);
    };
    ResultsComponent.prototype.toggleCookbookSave = function (cookbook) {
        this.cookbookService.saveCookbook(cookbook);
        if (cookbook.saved) {
            cookbook.followers--;
        }
        else {
            cookbook.followers++;
        }
        cookbook.saved = !cookbook.saved;
    };
    ResultsComponent.prototype.toggleSave = function (recipe) {
        var _this = this;
        if (!this.saveLock) {
            this.saveLock = true;
            var userData = { id: this.userId, data: this.usersRecipes };
            this.userService.addUserData(userData, { data: "recipes", type: "save" }, recipe._id).subscribe(function (data) {
                if (!data.success) {
                    console.log("Failed to toggle save");
                }
                else {
                    recipe.saved = !recipe.saved;
                }
                _this.saveLock = false;
            });
        }
    };
    ResultsComponent.prototype.castVote = function (vote, recipe) {
        var _this = this;
        if (!this.voteLock) {
            this.voteLock = true;
            var user = { id: this.userId, data: this.usersRecipes };
            var result = this.recipeValidateService.castVote(vote, recipe.vote, recipe, user, function () {
                _this.voteLock = false;
            });
            recipe.score = result.newScore;
            recipe.vote = result.newVote;
            this.voteLock = false;
        }
    };
    ResultsComponent.prototype.scrollCookbooks = function (dir, ref) {
        if (dir === "left") {
            ref.scrollTo({ left: 0, behavior: "smooth" });
            // this.cookbookPos = "left";
        }
        else {
            ref.scrollTo({ left: ref.scrollWidth, behavior: "smooth" });
            // this.cookbookPos = "right";
        }
    };
    ResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-results",
            template: __webpack_require__(/*! ./results.component.html */ "./src/app/components/results/results.component.html"),
            styles: [__webpack_require__(/*! ./results.component.css */ "./src/app/components/results/results.component.css")]
        }),
        __metadata("design:paramtypes", [_services_recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"],
            _services_cookbook_service__WEBPACK_IMPORTED_MODULE_2__["CookbookService"],
            _services_recipe_validate_service__WEBPACK_IMPORTED_MODULE_5__["RecipeValidateService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _recipe_dialog_recipe_dialog_service__WEBPACK_IMPORTED_MODULE_7__["RecipeDialogService"],
            _services_general_service__WEBPACK_IMPORTED_MODULE_8__["GeneralService"]])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/app/components/saved-cookbooks/cookbooks.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/saved-cookbooks/cookbooks.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cookbooksPage {\r\n  min-height: calc(100vh - 60px);\r\n  width: 100%;\r\n}\r\n.wrapper {\r\n  width: 1350px;\r\n  height: 100%;\r\n  margin: auto;\r\n  padding-bottom: 100px;\r\n}\r\n/*** Top area ***/\r\n.wrapper h1 {\r\n  padding-top: 40px;\r\n  font-size: 50px;\r\n}\r\n/*** Lower area ***/\r\n.cookbookArea {\r\n  margin-top: 20px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n.cookbookTile {\r\n  padding: 20px;\r\n  margin: 10px;\r\n  width: 200px;\r\n}\r\n.cookbookImage {\r\n  width: 200px;\r\n  height: 200px;\r\n  border-radius: 25px;\r\n  background-color: #f1eff4;\r\n  position: relative;\r\n}\r\n.cookbookImage img {\r\n  height: 100%;\r\n  width: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  border-radius: 25px;\r\n}\r\n.hidden {\r\n  visibility: hidden;\r\n}\r\n.cookbookOverlay {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(39, 39, 39, 0.6);\r\n  opacity: 0;\r\n  transition: all 0.3s ease-in-out 0s;\r\n  position: absolute;\r\n  z-index: 10;\r\n  top: 0;\r\n  left: 0;\r\n  border-radius: 25px;\r\n}\r\n.cookbookFavorite {\r\n  font-size: 24pt;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  cursor: pointer;\r\n  color: #fff;\r\n}\r\n.remove .fa-times {\r\n  transition: all 0.15s ease-in-out 0s;\r\n}\r\n.remove .fa-times:hover {\r\n  color: rgb(226, 59, 59);\r\n  transition: all 0.15s ease-in-out 0s;\r\n}\r\n.cookbookImage:hover .cookbookOverlay {\r\n  transition: all 0.3s ease-in-out 0s;\r\n  opacity: 1;\r\n}\r\n.cookbookInfo {\r\n  padding-top: 5px;\r\n  font-size: 10pt;\r\n  text-align: left;\r\n  font-family: \"ProductSansRegular\", sans-serif;\r\n  width: 95%;\r\n  margin: auto;\r\n}\r\n.cookbookInfo h3:hover {\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n/*** No recipe added ***/\r\n.noCookbooks {\r\n  text-align: center;\r\n  padding-top: 80px;\r\n  font-size: 30px;\r\n}\r\n/*** General items ***/\r\n.breakLine {\r\n  width: 100%;\r\n  height: 2px;\r\n  background-color: #eaeaea;\r\n  border-radius: 25px;\r\n}\r\n.saved {\r\n  color: #df2064;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYXZlZC1jb29rYm9va3MvY29va2Jvb2tzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtDQUNiO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7Q0FDdkI7QUFFRCxrQkFBa0I7QUFDbEI7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0NBQ2pCO0FBRUQsb0JBQW9CO0FBQ3BCO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsd0JBQXdCO0NBQ3pCO0FBRUQ7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixxQkFBa0I7S0FBbEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHdDQUF3QztFQUN4QyxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osT0FBTztFQUNQLFFBQVE7RUFDUixvQkFBb0I7Q0FDckI7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFVBQVU7RUFDVix5Q0FBaUM7VUFBakMsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixZQUFZO0NBQ2I7QUFFRDtFQUNFLHFDQUFxQztDQUN0QztBQUNEO0VBQ0Usd0JBQXdCO0VBQ3hCLHFDQUFxQztDQUN0QztBQUVEO0VBQ0Usb0NBQW9DO0VBQ3BDLFdBQVc7Q0FDWjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsOENBQThDO0VBQzlDLFdBQVc7RUFDWCxhQUFhO0NBQ2Q7QUFDRDtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7Q0FDakI7QUFFRCx5QkFBeUI7QUFDekI7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtDQUNqQjtBQUVELHVCQUF1QjtBQUN2QjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLG9CQUFvQjtDQUNyQjtBQUVEO0VBQ0UsZUFBZTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2F2ZWQtY29va2Jvb2tzL2Nvb2tib29rcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvb2tib29rc1BhZ2Uge1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ud3JhcHBlciB7XHJcbiAgd2lkdGg6IDEzNTBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuLyoqKiBUb3AgYXJlYSAqKiovXHJcbi53cmFwcGVyIGgxIHtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuXHJcbi8qKiogTG93ZXIgYXJlYSAqKiovXHJcbi5jb29rYm9va0FyZWEge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb29rYm9va1RpbGUge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG4uY29va2Jvb2tJbWFnZSB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFlZmY0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY29va2Jvb2tJbWFnZSBpbWcge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcbi5oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLmNvb2tib29rT3ZlcmxheSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCAzOSwgMC42KTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxMDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcblxyXG4uY29va2Jvb2tGYXZvcml0ZSB7XHJcbiAgZm9udC1zaXplOiAyNHB0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ucmVtb3ZlIC5mYS10aW1lcyB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0IDBzO1xyXG59XHJcbi5yZW1vdmUgLmZhLXRpbWVzOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDIyNiwgNTksIDU5KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQgMHM7XHJcbn1cclxuXHJcbi5jb29rYm9va0ltYWdlOmhvdmVyIC5jb29rYm9va092ZXJsYXkge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLmNvb2tib29rSW5mbyB7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBmb250LXNpemU6IDEwcHQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LWZhbWlseTogXCJQcm9kdWN0U2Fuc1JlZ3VsYXJcIiwgc2Fucy1zZXJpZjtcclxuICB3aWR0aDogOTUlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4uY29va2Jvb2tJbmZvIGgzOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qKiogTm8gcmVjaXBlIGFkZGVkICoqKi9cclxuLm5vQ29va2Jvb2tzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4vKioqIEdlbmVyYWwgaXRlbXMgKioqL1xyXG4uYnJlYWtMaW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbi5zYXZlZCB7XHJcbiAgY29sb3I6ICNkZjIwNjQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/saved-cookbooks/cookbooks.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/saved-cookbooks/cookbooks.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cookbooksPage\">\r\n  <div class=\"wrapper\">\r\n    <h1>Saved cookbooks</h1>\r\n    <div class=\"breakLine\"></div>\r\n    <div class=\"cookbookArea\" *ngIf=\"cookbooks.saved.length\">\r\n      <div class=\"cookbookTile\" *ngFor=\"let cookbook of cookbooks.saved\">\r\n        <div class=\"cookbookImage\" (click)=\"viewCookbook(cookbook.cookbook)\">\r\n          <img [ngClass]=\"{ hidden: !cookbook?.cookbook.image }\" src=\"{{ generalService.getImageLink(cookbook?.cookbook.image) }}\" #rImg />\r\n          <div class=\"cookbookOverlay\">\r\n            <div class=\"remove\" (click)=\"$event.stopPropagation(); toggleSave(cookbook)\"><i class=\"cookbookFavorite fas fa-times\"></i></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"cookbookInfo\">\r\n          <h3 (click)=\"viewCookbook(cookbook.cookbook)\">{{ cookbook.cookbook.title }}</h3>\r\n          <p>{{ cookbook.cookbook.description }}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"noCookbooks\" *ngIf=\"!cookbooks.saved.length\"><h2>No cookbooks saved. Go and add some.</h2></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/saved-cookbooks/cookbooks.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/saved-cookbooks/cookbooks.component.ts ***!
  \*******************************************************************/
/*! exports provided: CookbooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookbooksComponent", function() { return CookbooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_cookbook_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cookbook.service */ "./src/app/services/cookbook.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/general.service */ "./src/app/services/general.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CookbooksComponent = /** @class */ (function () {
    function CookbooksComponent(userService, cookbookService, titleService, router, generalService) {
        this.userService = userService;
        this.cookbookService = cookbookService;
        this.titleService = titleService;
        this.router = router;
        this.generalService = generalService;
        this.cookbooks = { saved: [] };
        this.savedCookbooks = [];
    }
    CookbooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.generalService.getUser().id;
        this.titleService.setTitle("Your cookbooks");
        this.userService.getUserData().subscribe(function (data) {
            if (!data.success) {
                console.log("Could not get cookbooks");
            }
            else {
                _this.cookbooks = data.cookbooks;
                _this.userCookbooks = _this.cookbooks.saved.map(function (x) {
                    return x.cookbook._id;
                });
            }
        });
    };
    CookbooksComponent.prototype.viewCookbook = function (cookbook) {
        this.router.navigate(["/cookbook", cookbook._id]);
    };
    CookbooksComponent.prototype.toggleSave = function (cookbook) {
        var _this = this;
        this.userService.addUserData({ id: this.userId, data: this.cookbooks }, { data: "cookbooks", type: "save" }, cookbook.cookbook._id).subscribe(function (data) {
            if (!data.success) {
                console.log("Couldn't add cookbook");
            }
            else {
                _this.userCookbooks = data.cookbooks;
            }
        });
    };
    CookbooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-cookbooks",
            template: __webpack_require__(/*! ./cookbooks.component.html */ "./src/app/components/saved-cookbooks/cookbooks.component.html"),
            styles: [__webpack_require__(/*! ./cookbooks.component.css */ "./src/app/components/saved-cookbooks/cookbooks.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_cookbook_service__WEBPACK_IMPORTED_MODULE_2__["CookbookService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_general_service__WEBPACK_IMPORTED_MODULE_5__["GeneralService"]])
    ], CookbooksComponent);
    return CookbooksComponent;
}());



/***/ }),

/***/ "./src/app/components/saved-recipes/saved-recipes.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/saved-recipes/saved-recipes.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*** Saved recipe page ***/\r\n.savedRecipes {\r\n  min-height: calc(100vh - 60px);\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n.wrapper {\r\n  padding-top: 40px;\r\n  width: 1350px;\r\n  margin: auto;\r\n}\r\n.wrapper h1 {\r\n  font-size: 50px;\r\n  margin-bottom: 10px;\r\n}\r\n.titleButtons {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n.titleButtons h1 {\r\n  cursor: pointer;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n.deselected {\r\n  transition: all 0.2s ease-in-out;\r\n  color: rgb(165, 165, 165);\r\n}\r\n/*** Card for the table ***/\r\n.recipeCard {\r\n  /* background-color: #fff; */\r\n  /* box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1); */\r\n  border-radius: 25px;\r\n  padding: 20px;\r\n  width: 70%;\r\n  margin: 20px auto;\r\n}\r\n/*** Search bar for the table ***/\r\n.searchBar {\r\n  width: 90%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 10px;\r\n  position: relative;\r\n  margin: auto;\r\n}\r\n.searchBar input {\r\n  background-color: rgb(241, 241, 241);\r\n  border-radius: 8px;\r\n  width: 100%;\r\n  padding: 14px 20px;\r\n  box-sizing: border-box;\r\n  font-size: 16px;\r\n  border: transparent 2px solid;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n.searchBar input:focus {\r\n  border: #92b1ff 2px solid;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n.searchBar i {\r\n  color: #888888;\r\n  position: absolute;\r\n  right: 0;\r\n  padding-right: 20px;\r\n  cursor: pointer;\r\n  transition: all 0.2s ease-in-out 0s;\r\n  visibility: visible;\r\n  opacity: 0;\r\n  font-size: 18px;\r\n}\r\n.visible {\r\n  opacity: 1 !important;\r\n  transition: all 0.2s ease-in-out 0s;\r\n}\r\n/*** Table spacing ***/\r\n.tableWrapper {\r\n  height: 100%;\r\n  width: 945px;\r\n  overflow-x: hidden;\r\n  display: flex;\r\n  scroll-behavior: smooth;\r\n  flex-direction: row;\r\n  align-items: flex-start;\r\n}\r\n.tableWrapper::-webkit-scrollbar {\r\n  width: 0 !important;\r\n}\r\n.tableArea {\r\n  height: 100%;\r\n  min-width: 945px;\r\n}\r\n/*** Recipe table ***/\r\n.recipe-table {\r\n  min-width: 945px;\r\n  display: inline-block;\r\n  font-family: inherit;\r\n  margin: auto;\r\n  background-color: rgba(255, 255, 255, 0);\r\n}\r\nth,\r\ntd {\r\n  vertical-align: middle;\r\n  transition: all 0.2s ease-in-out;\r\n  width: 945px;\r\n}\r\nth {\r\n  font-size: 13px;\r\n}\r\ntd {\r\n  font-size: 15px;\r\n}\r\n.elementRow:hover {\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n  transition: all 0.2s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n.recipeColumn {\r\n  width: 50%;\r\n}\r\n.ellipColumn {\r\n  text-align: right;\r\n  color: rgba(255, 255, 255, 0);\r\n}\r\n.elementRow:hover .ellipColumn {\r\n  color: #000;\r\n}\r\n.endColumn {\r\n  text-align: right;\r\n  width: 22%;\r\n}\r\n.endColumn i {\r\n  padding-left: 5px;\r\n}\r\n/*** Table interaction ***/\r\n.remove {\r\n  font-size: 20px;\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 30px;\r\n  color: #e42063;\r\n}\r\n.remove:hover .fa-heart,\r\n.remove .fa-times {\r\n  display: none;\r\n}\r\n.remove:hover .fa-trash-alt,\r\n.remove .fa-times {\r\n  display: none;\r\n}\r\n.remove:hover .fa-times {\r\n  display: inline;\r\n}\r\n/*** General elements ***/\r\n.breakLine {\r\n  width: 100%;\r\n  height: 2px;\r\n  background-color: #eaeaea;\r\n  border-radius: 25px;\r\n}\r\n/*** No recipe added ***/\r\n.noRecipe {\r\n  text-align: center;\r\n  padding-top: 80px;\r\n  font-size: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYXZlZC1yZWNpcGVzL3NhdmVkLXJlY2lwZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQkFBMkI7QUFDM0I7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0NBQ2Q7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7Q0FDckI7QUFFRDtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsK0JBQStCO0NBQ2hDO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsaUNBQWlDO0NBQ2xDO0FBQ0Q7RUFDRSxpQ0FBaUM7RUFDakMsMEJBQTBCO0NBQzNCO0FBRUQsNEJBQTRCO0FBQzVCO0VBQ0UsNkJBQTZCO0VBQzdCLGdEQUFnRDtFQUNoRCxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7Q0FDbkI7QUFFRCxrQ0FBa0M7QUFDbEM7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixhQUFhO0NBQ2Q7QUFDRDtFQUNFLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixpQ0FBaUM7Q0FDbEM7QUFDRDtFQUNFLDBCQUEwQjtFQUMxQixpQ0FBaUM7Q0FDbEM7QUFDRDtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsU0FBUztFQUNULG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsb0NBQW9DO0VBQ3BDLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsb0NBQW9DO0NBQ3JDO0FBRUQsdUJBQXVCO0FBQ3ZCO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsd0JBQXdCO0NBQ3pCO0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLGFBQWE7RUFDYixpQkFBaUI7Q0FDbEI7QUFFRCxzQkFBc0I7QUFDdEI7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IseUNBQXlDO0NBQzFDO0FBQ0Q7O0VBRUUsdUJBQXVCO0VBQ3ZCLGlDQUFpQztFQUNqQyxhQUFhO0NBQ2Q7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxxQ0FBcUM7RUFDckMsaUNBQWlDO0VBQ2pDLGdCQUFnQjtDQUNqQjtBQUVEO0VBQ0UsV0FBVztDQUNaO0FBQ0Q7RUFDRSxrQkFBa0I7RUFDbEIsOEJBQThCO0NBQy9CO0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0NBQ1o7QUFDRDtFQUNFLGtCQUFrQjtDQUNuQjtBQUVELDJCQUEyQjtBQUMzQjtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixlQUFlO0NBQ2hCO0FBQ0Q7O0VBRUUsY0FBYztDQUNmO0FBQ0Q7O0VBRUUsY0FBYztDQUNmO0FBQ0Q7RUFDRSxnQkFBZ0I7Q0FDakI7QUFFRCwwQkFBMEI7QUFDMUI7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixvQkFBb0I7Q0FDckI7QUFFRCx5QkFBeUI7QUFDekI7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2F2ZWQtcmVjaXBlcy9zYXZlZC1yZWNpcGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIFNhdmVkIHJlY2lwZSBwYWdlICoqKi9cclxuLnNhdmVkUmVjaXBlcyB7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLndyYXBwZXIge1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIHdpZHRoOiAxMzUwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ud3JhcHBlciBoMSB7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi50aXRsZUJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLnRpdGxlQnV0dG9ucyBoMSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5kZXNlbGVjdGVkIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICBjb2xvcjogcmdiKDE2NSwgMTY1LCAxNjUpO1xyXG59XHJcblxyXG4vKioqIENhcmQgZm9yIHRoZSB0YWJsZSAqKiovXHJcbi5yZWNpcGVDYXJkIHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAqL1xyXG4gIC8qIGJveC1zaGFkb3c6IDAgM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpOyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB3aWR0aDogNzAlO1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG59XHJcblxyXG4vKioqIFNlYXJjaCBiYXIgZm9yIHRoZSB0YWJsZSAqKiovXHJcbi5zZWFyY2hCYXIge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4uc2VhcmNoQmFyIGlucHV0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDEsIDI0MSk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXI6IHRyYW5zcGFyZW50IDJweCBzb2xpZDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG4uc2VhcmNoQmFyIGlucHV0OmZvY3VzIHtcclxuICBib3JkZXI6ICM5MmIxZmYgMnB4IHNvbGlkO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5zZWFyY2hCYXIgaSB7XHJcbiAgY29sb3I6ICM4ODg4ODg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgb3BhY2l0eTogMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLnZpc2libGUge1xyXG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcztcclxufVxyXG5cclxuLyoqKiBUYWJsZSBzcGFjaW5nICoqKi9cclxuLnRhYmxlV3JhcHBlciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA5NDVweDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcbi50YWJsZVdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMCAhaW1wb3J0YW50O1xyXG59XHJcbi50YWJsZUFyZWEge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtaW4td2lkdGg6IDk0NXB4O1xyXG59XHJcblxyXG4vKioqIFJlY2lwZSB0YWJsZSAqKiovXHJcbi5yZWNpcGUtdGFibGUge1xyXG4gIG1pbi13aWR0aDogOTQ1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG59XHJcbnRoLFxyXG50ZCB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICB3aWR0aDogOTQ1cHg7XHJcbn1cclxudGgge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG50ZCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5lbGVtZW50Um93OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucmVjaXBlQ29sdW1uIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbi5lbGxpcENvbHVtbiB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbn1cclxuLmVsZW1lbnRSb3c6aG92ZXIgLmVsbGlwQ29sdW1uIHtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG4uZW5kQ29sdW1uIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB3aWR0aDogMjIlO1xyXG59XHJcbi5lbmRDb2x1bW4gaSB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi8qKiogVGFibGUgaW50ZXJhY3Rpb24gKioqL1xyXG4ucmVtb3ZlIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMzBweDtcclxuICBjb2xvcjogI2U0MjA2MztcclxufVxyXG4ucmVtb3ZlOmhvdmVyIC5mYS1oZWFydCxcclxuLnJlbW92ZSAuZmEtdGltZXMge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnJlbW92ZTpob3ZlciAuZmEtdHJhc2gtYWx0LFxyXG4ucmVtb3ZlIC5mYS10aW1lcyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ucmVtb3ZlOmhvdmVyIC5mYS10aW1lcyB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4vKioqIEdlbmVyYWwgZWxlbWVudHMgKioqL1xyXG4uYnJlYWtMaW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbi8qKiogTm8gcmVjaXBlIGFkZGVkICoqKi9cclxuLm5vUmVjaXBlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/saved-recipes/saved-recipes.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/saved-recipes/saved-recipes.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"savedRecipes\">\r\n  <div class=\"wrapper\">\r\n    <div class=\"titleButtons\">\r\n      <h1 (click)=\"savedRecipes = true; createdRecipes = false; scroll(tableWrapper)\" [ngClass]=\"{ deselected: !savedRecipes }\">Saved recipes</h1>\r\n      <h1 (click)=\"savedRecipes = false; createdRecipes = true; scroll(tableWrapper)\" [ngClass]=\"{ deselected: !createdRecipes }\">Created recipes</h1>\r\n    </div>\r\n    <div class=\"breakLine\"></div>\r\n    <div class=\"recipeCard\">\r\n      <div class=\"tableWrapper\" #tableWrapper>\r\n        <div class=\"tableArea\">\r\n          <div class=\"searchBar\">\r\n            <i class=\"fas fa-times\" (click)=\"searchFilter = undefined; savedFilter = recipes.saved\" [ngClass]=\"{ visible: searchFilter }\"></i>\r\n            <input [(ngModel)]=\"searchFilter\" (keyup)=\"enterKey('saved')\" name=\"searchFilter\" type=\"text\" />\r\n          </div>\r\n          <table mat-table [dataSource]=\"savedFilter\" class=\"recipe-table\" *ngIf=\"recipes?.saved.length\">\r\n            <ng-container matColumnDef=\"save\">\r\n              <th mat-header-cell *matHeaderCellDef></th>\r\n              <td mat-cell *matCellDef=\"let recipe\">\r\n                <div class=\"remove\"><i class=\"fas fa-heart\" (click)=\"$event.stopPropagation(); removeSaved(recipe)\"></i><i class=\"fas fa-times\" (click)=\"$event.stopPropagation(); removeSaved(recipe)\"></i></div>\r\n              </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"recipe\">\r\n              <th mat-header-cell *matHeaderCellDef>Recipe</th>\r\n              <td mat-cell *matCellDef=\"let recipe\" class=\"recipeColumn\">{{ recipe.recipe.title }}</td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"type\">\r\n              <th mat-header-cell *matHeaderCellDef>Type</th>\r\n              <td mat-cell *matCellDef=\"let recipe\">{{ recipe.recipe.mealType }}</td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"ellipsis\">\r\n              <th mat-header-cell *matHeaderCellDef></th>\r\n              <td mat-cell *matCellDef=\"let recipe\" class=\"ellipColumn\"><i class=\"fas fa-ellipsis-h\" (click)=\"$event.stopPropagation(); openRecipeOptions(recipe.recipe)\"></i></td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"added\">\r\n              <th mat-header-cell *matHeaderCellDef class=\"endColumn\" title=\"Added\">Added<i class=\"far fa-calendar-alt\"></i></th>\r\n              <td mat-cell *matCellDef=\"let recipe\" class=\"endColumn\">{{ getTimeAgo(recipe.timestamp) }}</td>\r\n            </ng-container>\r\n            <tr mat-header-row *matHeaderRowDef=\"['save', 'recipe', 'type', 'ellipsis', 'added']\"></tr>\r\n            <tr mat-row *matRowDef=\"let myRowData; columns: ['save', 'recipe', 'type', 'ellipsis', 'added']\" (click)=\"viewRecipe(myRowData)\" class=\"elementRow\"></tr>\r\n          </table>\r\n\r\n          <div *ngIf=\"!recipes?.saved.length\" class=\"noRecipe\"><h2>No recipes saved. Go and add some.</h2></div>\r\n        </div>\r\n\r\n        <div class=\"tableArea\">\r\n          <div class=\"searchBar\">\r\n            <i class=\"fas fa-times\" (click)=\"searchFilter2 = undefined; savedFilter2 = recipes.author\" [ngClass]=\"{ visible: searchFilter2 }\"></i>\r\n            <input [(ngModel)]=\"searchFilter2\" (keyup)=\"enterKey('author')\" name=\"searchFilter2\" type=\"text\" />\r\n          </div>\r\n          <table mat-table [dataSource]=\"authorFilter\" class=\"recipe-table\" *ngIf=\"recipes?.author.length\">\r\n            <ng-container matColumnDef=\"save\">\r\n              <th mat-header-cell *matHeaderCellDef></th>\r\n              <td mat-cell *matCellDef=\"let recipe\">\r\n                <div class=\"remove\"><i class=\"far fa-trash-alt\" (click)=\"$event.stopPropagation(); removeCreated(recipe)\"></i><i class=\"fas fa-times\" (click)=\"$event.stopPropagation(); removeCreated(recipe)\"></i></div>\r\n              </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"recipe\">\r\n              <th mat-header-cell *matHeaderCellDef>Recipe</th>\r\n              <td mat-cell *matCellDef=\"let recipe\" class=\"recipeColumn\">{{ recipe.recipe.title }}</td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"type\">\r\n              <th mat-header-cell *matHeaderCellDef>Type</th>\r\n              <td mat-cell *matCellDef=\"let recipe\">{{ recipe.recipe.mealType }}</td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"ellipsis\">\r\n              <th mat-header-cell *matHeaderCellDef></th>\r\n              <td mat-cell *matCellDef=\"let recipe\" class=\"ellipColumn\"><i class=\"fas fa-ellipsis-h\" (click)=\"$event.stopPropagation(); openRecipeOptions(recipe.recipe)\"></i></td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"added\">\r\n              <th mat-header-cell *matHeaderCellDef class=\"endColumn\" title=\"Added\">Added<i class=\"far fa-calendar-alt\"></i></th>\r\n              <td mat-cell *matCellDef=\"let recipe\" class=\"endColumn\">{{ getTimeAgo(recipe.timestamp) }}</td>\r\n            </ng-container>\r\n            <tr mat-header-row *matHeaderRowDef=\"['save', 'recipe', 'type', 'ellipsis', 'added']\"></tr>\r\n            <tr mat-row *matRowDef=\"let myRowData; columns: ['save', 'recipe', 'type', 'ellipsis', 'added']\" (click)=\"viewRecipe(myRowData)\" class=\"elementRow\"></tr>\r\n          </table>\r\n\r\n          <div *ngIf=\"!recipes?.author.length\" class=\"noRecipe\">\r\n            <h2>No recipes created. Go and make some.</h2>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/saved-recipes/saved-recipes.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/saved-recipes/saved-recipes.component.ts ***!
  \*********************************************************************/
/*! exports provided: SavedRecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedRecipesComponent", function() { return SavedRecipesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/recipe.service */ "./src/app/services/recipe.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_cookbook_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cookbook.service */ "./src/app/services/cookbook.service.ts");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _recipe_dialog_recipe_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../recipe-dialog/recipe-dialog.service */ "./src/app/components/recipe-dialog/recipe-dialog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SavedRecipesComponent = /** @class */ (function () {
    function SavedRecipesComponent(recipeService, userService, cookbookService, router, title, recipeDialog, generalService) {
        this.recipeService = recipeService;
        this.userService = userService;
        this.cookbookService = cookbookService;
        this.router = router;
        this.title = title;
        this.recipeDialog = recipeDialog;
        this.generalService = generalService;
        this.usersCookbooks = {};
        this.savedFilter = [];
        this.authorFilter = [];
        this.savedRecipes = true;
        this.createdRecipes = false;
    }
    SavedRecipesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.generalService.getUser().id;
        this.title.setTitle("Saved recipes");
        this.userService.getUserData().subscribe(function (data) {
            _this.recipes = data.recipes;
            _this.savedFilter = _this.recipes.saved;
            _this.authorFilter = _this.recipes.author;
            _this.usersCookbooks = data.cookbooks;
        });
    };
    SavedRecipesComponent.prototype.viewRecipe = function (recipe) {
        this.router.navigate(["recipe", recipe.recipe._id]);
    };
    SavedRecipesComponent.prototype.enterKey = function (type) {
        var _this = this;
        if (this.searchFilter === undefined && this.searchFilter2 === undefined) {
            return;
        }
        if (type === "saved") {
            this.savedFilter = [];
            this.recipes.saved.forEach(function (e) {
                var recipeTitle = e.recipe.title.toLowerCase();
                recipeTitle = recipeTitle.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
                if (recipeTitle.includes(_this.searchFilter.toLowerCase())) {
                    _this.savedFilter.push(e);
                }
            });
        }
        else {
            this.authorFilter = [];
            this.recipes.author.forEach(function (e) {
                var recipeTitle = e.recipe.title.toLowerCase();
                recipeTitle = recipeTitle.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
                if (recipeTitle.includes(_this.searchFilter2.toLowerCase())) {
                    _this.authorFilter.push(e);
                }
            });
        }
    };
    SavedRecipesComponent.prototype.removeSaved = function (recipe) {
        var _this = this;
        this.userService.addUserData({ id: this.userId, data: this.recipes }, { data: "recipes", type: "save" }, recipe.recipe._id).subscribe(function (data) {
            _this.recipes = data.recipes;
        });
    };
    SavedRecipesComponent.prototype.removeCreated = function (recipe) {
        var remove = confirm("Are you sure you want to delete this recipe? You won't be able to restore it once removed.");
        if (remove) {
            console.log("Remove");
        }
    };
    SavedRecipesComponent.prototype.viewAuthor = function (recipe) {
        console.log("Author");
    };
    SavedRecipesComponent.prototype.addToCookbook = function (recipe, cookbook) {
        // recipe = recipe.recipe;
        // console.log(recipe);
        // if (cookbook === "new") {
        //   this.cookbookService.addCookbook(recipe._id).subscribe((a) => {
        //     const user = { id: this.userId, data: this.usersCookbooks };
        //     const update = { data: "cookbooks", type: "author" };
        //     this.userService.addUserData(user, update, a.cookbook._id).subscribe((data) => {});
        //   });
        // } else {
        //   this.cookbookService.updateCookbook(cookbook, { type: "recipes", recipe: recipe }).subscribe((data) => {
        //     console.log(data);
        //   });
        // }
        // const user = { id: this.userId, data: this.usersCookbooks };
        // const update = { data: "cookbooks", type: "author" };
        // this.userService.addUserData(user, update, "a.cookbook._id").subscribe((data) => {});
    };
    SavedRecipesComponent.prototype.openRecipeOptions = function (recipe) {
        this.recipeDialog.open(recipe).subscribe(function (data) {
            // console.log(data);
        });
    };
    SavedRecipesComponent.prototype.getTimeAgo = function (timeStamp) {
        var diff = (new Date().getTime() - new Date(timeStamp).getTime()) / 60000;
        if (isNaN(diff)) {
            return "not a valid time";
        }
        else if (diff < 1) {
            return "less than a minute ago";
        }
        else if (diff < 60) {
            if (Math.round(diff) === 1) {
                return Math.round(diff) + " minute ago";
            }
            return Math.round(diff) + " minutes ago";
        }
        else if ((diff = diff / 60) < 24) {
            if (Math.round(diff) === 1) {
                return Math.round(diff) + " hour ago";
            }
            return Math.round(diff) + " hours ago";
        }
        else if ((diff = diff / 24) < 30) {
            if (Math.round(diff) === 1) {
                return Math.round(diff) + " day ago";
            }
            return Math.round(diff) + " days ago";
        }
        else if ((diff = diff / 30) < 12) {
            if (Math.round(diff) === 1) {
                return Math.round(diff) + " month ago";
            }
            return Math.round(diff) + " months ago";
        }
        else {
            diff = diff / 12;
            if (Math.round(diff) === 1) {
                return Math.round(diff) + " year ago";
            }
            return Math.round(diff) + " years ago";
        }
    };
    SavedRecipesComponent.prototype.scroll = function () {
        if (this.savedRecipes) {
            // Left
            this.tableWrapper.nativeElement.scrollLeft = 0;
        }
        else {
            // Right
            this.tableWrapper.nativeElement.scrollLeft = this.tableWrapper.nativeElement.scrollWidth;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("tableWrapper"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SavedRecipesComponent.prototype, "tableWrapper", void 0);
    SavedRecipesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-saved-recipes",
            template: __webpack_require__(/*! ./saved-recipes.component.html */ "./src/app/components/saved-recipes/saved-recipes.component.html"),
            styles: [__webpack_require__(/*! ./saved-recipes.component.css */ "./src/app/components/saved-recipes/saved-recipes.component.css")]
        }),
        __metadata("design:paramtypes", [_services_recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_cookbook_service__WEBPACK_IMPORTED_MODULE_3__["CookbookService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _recipe_dialog_recipe_dialog_service__WEBPACK_IMPORTED_MODULE_7__["RecipeDialogService"],
            _services_general_service__WEBPACK_IMPORTED_MODULE_4__["GeneralService"]])
    ], SavedRecipesComponent);
    return SavedRecipesComponent;
}());



/***/ }),

/***/ "./src/app/components/sidenav/sidenav.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav {\r\n  /*** Vars ***/\r\n  --primary-color: #5292ee;\r\n  --secondary-color: #a3a3a3;\r\n  --nav-big: 299px;\r\n  --nav-small: 59px;\r\n  /* min-width: 80px !important;\r\n  max-width: 80px !important;\r\n  width: 80px !important; */\r\n  min-height: 100vh;\r\n  transition: width 0.5s ease-in-out;\r\n}\r\n\r\n.wrapper {\r\n  position: fixed;\r\n  background-color: #ffffff;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n}\r\n\r\ni {\r\n  cursor: pointer;\r\n  color: #5e5e5e;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\n/*** Small ***/\r\n\r\n.smallNav {\r\n  width: var(--nav-small);\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  font-size: 22px;\r\n  transition: all 0.3s ease-in-out 0.1s;\r\n}\r\n\r\n.topNav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.bottomNav {\r\n  padding-left: 5px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.sidebarToggle {\r\n  height: 60px;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  padding-left: 40px;\r\n}\r\n\r\n.sidebarToggle span {\r\n  width: 100%;\r\n  margin-left: 20px;\r\n  padding-right: 40px;\r\n  text-align: center;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n  /* background-color: red; */\r\n}\r\n\r\n.navSection {\r\n  margin: 30px 0px;\r\n}\r\n\r\n.navItem {\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 22px;\r\n  padding: 15px 0;\r\n  /* margin-top: 10px; */\r\n  cursor: pointer;\r\n  border-left: transparent 10px solid;\r\n  margin-left: -10px;\r\n  box-sizing: border-box;\r\n  color: #5e5e5e;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n.navItem:hover {\r\n  color: var(--secondary-color);\r\n}\r\n\r\n.navWide {\r\n  width: var(--nav-big);\r\n  transition: all 0.3s ease-in-out 0.1s;\r\n}\r\n\r\n.navItem i {\r\n  margin-left: 13px;\r\n  margin-right: 18px;\r\n}\r\n\r\n.navItem span {\r\n  font-size: 18px;\r\n}\r\n\r\n.activeLink {\r\n  border-left: var(--primary-color) 10px solid;\r\n  color: var(--primary-color);\r\n}\r\n\r\n/*** Sub items ***/\r\n\r\n.subList {\r\n  /* background-color: red; */\r\n  width: 100%;\r\n  margin-left: 52px;\r\n  overflow: hidden;\r\n  border-left: #5e5e5e 3px solid;\r\n  padding-left: 7px;\r\n  box-sizing: border-box;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.subItem {\r\n  white-space: nowrap;\r\n  font-size: 17px;\r\n  padding: 5px 0;\r\n  cursor: pointer;\r\n  color: #b1b1b1;\r\n}\r\n\r\n.subItem:hover {\r\n  color: #5e5e5e;\r\n}\r\n\r\n.hideDrop {\r\n  max-height: 0 !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEI7OzRCQUUwQjtFQUMxQixrQkFBa0I7RUFDbEIsbUNBQW1DO0NBQ3BDOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7Q0FDaEI7O0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtDQUNoQjs7QUFFRCxlQUFlOztBQUNmO0VBQ0Usd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsc0NBQXNDO0NBQ3ZDOztBQUNEO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixvQkFBb0I7Q0FDckI7O0FBQ0Q7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0NBQ3RCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQixtQkFBbUI7Q0FDcEI7O0FBQ0Q7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiw0QkFBNEI7Q0FDN0I7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1QixvQkFBb0I7Q0FDckI7O0FBQ0Q7RUFDRSw4QkFBOEI7Q0FDL0I7O0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsc0NBQXNDO0NBQ3ZDOztBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtDQUNwQjs7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLDZDQUE2QztFQUM3Qyw0QkFBNEI7Q0FDN0I7O0FBRUQsbUJBQW1COztBQUNuQjtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixpQ0FBaUM7Q0FDbEM7O0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtDQUNoQjs7QUFDRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSx5QkFBeUI7Q0FDMUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYge1xyXG4gIC8qKiogVmFycyAqKiovXHJcbiAgLS1wcmltYXJ5LWNvbG9yOiAjNTI5MmVlO1xyXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjYTNhM2EzO1xyXG4gIC0tbmF2LWJpZzogMjk5cHg7XHJcbiAgLS1uYXYtc21hbGw6IDU5cHg7XHJcbiAgLyogbWluLXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWF4LXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDgwcHggIWltcG9ydGFudDsgKi9cclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5pIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICM1ZTVlNWU7XHJcbn1cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4vKioqIFNtYWxsICoqKi9cclxuLnNtYWxsTmF2IHtcclxuICB3aWR0aDogdmFyKC0tbmF2LXNtYWxsKTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDAuMXM7XHJcbn1cclxuLnRvcE5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmJvdHRvbU5hdiB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyVG9nZ2xlIHtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbn1cclxuLnNpZGViYXJUb2dnbGUgc3BhbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cclxufVxyXG5cclxuLm5hdlNlY3Rpb24ge1xyXG4gIG1hcmdpbjogMzBweCAwcHg7XHJcbn1cclxuXHJcbi5uYXZJdGVtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIHBhZGRpbmc6IDE1cHggMDtcclxuICAvKiBtYXJnaW4tdG9wOiAxMHB4OyAqL1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItbGVmdDogdHJhbnNwYXJlbnQgMTBweCBzb2xpZDtcclxuICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjb2xvcjogIzVlNWU1ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5uYXZJdGVtOmhvdmVyIHtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxufVxyXG4ubmF2V2lkZSB7XHJcbiAgd2lkdGg6IHZhcigtLW5hdi1iaWcpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDAuMXM7XHJcbn1cclxuLm5hdkl0ZW0gaSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG59XHJcbi5uYXZJdGVtIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmFjdGl2ZUxpbmsge1xyXG4gIGJvcmRlci1sZWZ0OiB2YXIoLS1wcmltYXJ5LWNvbG9yKSAxMHB4IHNvbGlkO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLyoqKiBTdWIgaXRlbXMgKioqL1xyXG4uc3ViTGlzdCB7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1MnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLWxlZnQ6ICM1ZTVlNWUgM3B4IHNvbGlkO1xyXG4gIHBhZGRpbmctbGVmdDogN3B4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLnN1Ykl0ZW0ge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogI2IxYjFiMTtcclxufVxyXG4uc3ViSXRlbTpob3ZlciB7XHJcbiAgY29sb3I6ICM1ZTVlNWU7XHJcbn1cclxuXHJcbi5oaWRlRHJvcCB7XHJcbiAgbWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/sidenav/sidenav.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav\">\r\n  <div class=\"wrapper\">\r\n    <div class=\"smallNav\" [ngClass]=\"{ navWide: big }\">\r\n      <div class=\"topNav\">\r\n        <div class=\"sidebarToggle\"><i class=\"fas fa-bars\" (click)=\"toggleSidenav(); histDrop = false; recDrop = false; cbDrop = false\"></i><span>Recipeasy</span></div>\r\n        <div class=\"navItem\" [routerLinkActive]=\"['activeLink']\" [routerLink]=\"['/dashboard']\"><i class=\"fas fa-home\"></i><span>Home</span></div>\r\n        <div class=\"navItem\" [routerLinkActive]=\"['activeLink']\" [routerLink]=\"['/history']\">\r\n          <i class=\"fas fa-history\"></i><span>History</span><i class=\"fas fa-caret-down\" (click)=\"$event.stopPropagation(); histDrop = !histDrop\"></i>\r\n        </div>\r\n        <div class=\"subList\" [ngClass]=\"{ hideDrop: histDrop != true }\" [ngStyle]=\"{ 'max-height.px': 30 * history?.length }\">\r\n          <div class=\"subItem\" *ngFor=\"let hist of history\" (click)=\"viewRecipe(hist?.recipe._id)\">{{ hist.recipe?.title | textLimit: 30 }}</div>\r\n        </div>\r\n        <div class=\"navItem\" [routerLinkActive]=\"['activeLink']\" [routerLink]=\"['/recommended']\"><i class=\"fas fa-user\"></i><span>Recommended</span></div>\r\n        <div class=\"navItem\" [routerLinkActive]=\"['activeLink']\" [routerLink]=\"['/recipes']\">\r\n          <i class=\"fas fa-utensils\"></i><span>Recipes</span><i class=\"fas fa-caret-down\" (click)=\"$event.stopPropagation(); recDrop = !recDrop\"></i>\r\n        </div>\r\n        <div class=\"subList\" [ngClass]=\"{ hideDrop: recDrop != true }\" [ngStyle]=\"{ 'max-height.px': 30 * recipes?.length }\">\r\n          <div class=\"subItem\" *ngFor=\"let recipe of recipes\" (click)=\"viewRecipe(recipe?.recipe._id)\">{{ recipe.recipe?.title | textLimit: 30 }}</div>\r\n        </div>\r\n        <div class=\"navItem\" [routerLinkActive]=\"['activeLink']\" [routerLink]=\"['/cookbooks']\">\r\n          <i class=\"fas fa-book\"></i><span>Cookbooks</span><i class=\"fas fa-caret-down\" (click)=\"$event.stopPropagation(); cbDrop = !cbDrop\"></i>\r\n        </div>\r\n        <div class=\"subList\" [ngClass]=\"{ hideDrop: cbDrop != true }\" [ngStyle]=\"{ 'max-height.px': 30 * cookbooks?.length }\">\r\n          <div class=\"subItem\" *ngFor=\"let cookbook of cookbooks\" (click)=\"viewCookbook(cookbook?.cookbook._id)\">{{ cookbook.cookbook?.title | textLimit: 30 }}</div>\r\n        </div>\r\n        <div class=\"navItem\" [routerLinkActive]=\"['activeLink']\" [routerLink]=\"['/create']\"><i class=\"fas fa-plus-square\"></i><span>New recipe</span></div>\r\n      </div>\r\n      <div class=\"bottomNav\">\r\n        <div class=\"navItem\" (click)=\"logout()\"><i class=\"fas fa-sign-out-alt\"></i><span>Sign out</span></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/sidenav/sidenav.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.ts ***!
  \*********************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidenav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidenav.service */ "./src/app/components/sidenav/sidenav.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(sidenav, router, route, authService, userService) {
        this.sidenav = sidenav;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.userService = userService;
        this.big = false;
    }
    SidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sidenav.change.subscribe(function (isOpen) {
            _this.big = !_this.big;
        });
        this.updateSideData();
    };
    SidenavComponent.prototype.updateSideData = function () {
        var _this = this;
        this.userService.getUserData().subscribe(function (data) {
            _this.history = data.recipes.history.slice(0, 5);
            _this.recipes = data.recipes.author.slice(0, 5);
            _this.cookbooks = data.cookbooks.author.slice(0, 5);
        });
    };
    SidenavComponent.prototype.toggleSidenav = function () {
        this.sidenav.toggle();
        this.updateSideData();
    };
    SidenavComponent.prototype.viewRecipe = function (id) {
        this.router.navigate(["/recipe/" + id]);
    };
    SidenavComponent.prototype.viewCookbook = function (id) {
        this.router.navigate(["/cookbook/" + id]);
    };
    SidenavComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(["/"]);
    };
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-sidenav",
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/components/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.css */ "./src/app/components/sidenav/sidenav.component.css")]
        }),
        __metadata("design:paramtypes", [_sidenav_service__WEBPACK_IMPORTED_MODULE_1__["SidenavService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/components/sidenav/sidenav.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.service.ts ***!
  \*******************************************************/
/*! exports provided: SidenavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavService", function() { return SidenavService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavService = /** @class */ (function () {
    function SidenavService() {
        this.isBig = false;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SidenavService.prototype.open = function () {
        // return this.sidenav.open();
    };
    SidenavService.prototype.close = function () {
        // return this.sidenav.close();
    };
    SidenavService.prototype.status = function () {
        return this.isBig;
    };
    SidenavService.prototype.toggle = function () {
        this.isBig = !this.isBig;
        this.change.emit(this.isBig);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SidenavService.prototype, "change", void 0);
    SidenavService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SidenavService);
    return SidenavService;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(["/login"], {
                queryParams: { returnUrl: state.url }
            });
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/pipes/find-image.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/find-image.pipe.ts ***!
  \******************************************/
/*! exports provided: FindImagePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindImagePipe", function() { return FindImagePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FindImagePipe = /** @class */ (function () {
    function FindImagePipe() {
    }
    FindImagePipe.prototype.transform = function (value, type) {
        if (!value || value === null || !type) {
            return;
        }
        if (type === "recipe") {
            return "uploads/recipes/" + value.split("\\")[1];
        }
        else if (type === "cookbook") {
            return "uploads/cookbooks/" + value.split("\\")[1];
        }
    };
    FindImagePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: "findImage" })
    ], FindImagePipe);
    return FindImagePipe;
}());



/***/ }),

/***/ "./src/app/pipes/text-capitalise.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/pipes/text-capitalise.pipe.ts ***!
  \***********************************************/
/*! exports provided: TextCapitalisePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextCapitalisePipe", function() { return TextCapitalisePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TextCapitalisePipe = /** @class */ (function () {
    function TextCapitalisePipe() {
    }
    TextCapitalisePipe.prototype.transform = function (value) {
        if (!value) {
            return;
        }
        var first = value.charAt(0);
        value = value.substr(1, value.length);
        return first.toUpperCase() + value;
    };
    TextCapitalisePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: "textCapitalise" })
    ], TextCapitalisePipe);
    return TextCapitalisePipe;
}());



/***/ }),

/***/ "./src/app/pipes/text-limit.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/text-limit.pipe.ts ***!
  \******************************************/
/*! exports provided: TextLimitPipe, TextCapitalisePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextLimitPipe", function() { return TextLimitPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextCapitalisePipe", function() { return TextCapitalisePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TextLimitPipe = /** @class */ (function () {
    function TextLimitPipe() {
    }
    TextLimitPipe.prototype.transform = function (value, limit) {
        if (!value) {
            return;
        }
        if (value.length < limit) {
            return value;
        }
        var short = value.slice(0, limit - 3);
        return short + "...";
    };
    TextLimitPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: "textLimit" })
    ], TextLimitPipe);
    return TextLimitPipe;
}());

var TextCapitalisePipe = /** @class */ (function () {
    function TextCapitalisePipe() {
    }
    TextCapitalisePipe.prototype.transform = function (value) {
        if (!value) {
            return;
        }
        var first = value.charAt(0);
        value = value.substr(1, value.length);
        return first.toUpperCase + value;
    };
    TextCapitalisePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: "textCapitalise" })
    ], TextCapitalisePipe);
    return TextCapitalisePipe;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general.service */ "./src/app/services/general.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http, cookies, generalService) {
        this.http = http;
        this.cookies = cookies;
        this.generalService = generalService;
    }
    // Register the user.
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.post("users/", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    // Verify the user to activate the account
    AuthService.prototype.verifyUser = function (token) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.patch("users/verify/", { token: token }, { headers: headers }).map(function (res) { return res.json(); });
    };
    // Resend the email verification.
    AuthService.prototype.resendVerification = function (email) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.patch("users/verify/resend", { email: email }, { headers: headers }).map(function (res) { return res.json(); });
    };
    // Authenticate the login for the user.
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http
            .post("users/authenticate", user, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    // Get profile.
    AuthService.prototype.getProfile = function () {
        var user = this.generalService.getUser().id;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append("Authorization", this.authToken);
        headers.append("Content-Type", "application/json");
        return this.http
            .get("users/" + user + "/profile", {
            headers: headers,
            params: {
                item: "profile"
            }
        })
            .map(function (res) { return res.json(); });
    };
    // Cache the user login.
    AuthService.prototype.storeUserData = function (token, user) {
        var storeUser = {
            id: user.id,
            username: user.username
        };
        this.cookies.set("user", JSON.stringify(storeUser));
        localStorage.setItem("id_token", "bearer " + token);
        // localStorage.setItem("user", JSON.stringify(storeUser));
        this.authToken = token;
        this.user = user;
    };
    // Load token.
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem("id_token");
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["tokenNotExpired"])("id_token");
    };
    // Logout
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
        sessionStorage.clear();
        this.cookies.deleteAll();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _general_service__WEBPACK_IMPORTED_MODULE_4__["GeneralService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/cookbook.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/cookbook.service.ts ***!
  \**********************************************/
/*! exports provided: CookbookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookbookService", function() { return CookbookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_observable_EmptyObservable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/observable/EmptyObservable */ "./node_modules/rxjs-compat/_esm5/observable/EmptyObservable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CookbookService = /** @class */ (function () {
    function CookbookService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.cookbookLock = false;
    }
    CookbookService.prototype.addCookbook = function (name, initialRecipe) {
        var cookbook = {
            title: name,
            description: "Add a description",
            public: false,
            recipes: [{ recipe: initialRecipe, timestamp: new Date() }],
            date: new Date()
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Authorization", localStorage.getItem("id_token"));
        headers.append("Content-Type", "application/json");
        return this.http
            .post("cookbooks", cookbook, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    CookbookService.prototype.addRecipeToCookbook = function (cookbook, recipe) {
        var cookbookID = cookbook._id;
        var cookbookRecipes = cookbook.recipes.slice(0);
        var index = cookbookRecipes.findIndex(function (x) { return x.recipe === recipe; });
        if (index === -1) {
            cookbookRecipes.push({
                recipe: recipe,
                timestamp: new Date()
            });
        }
        else {
            return new rxjs_observable_EmptyObservable__WEBPACK_IMPORTED_MODULE_3__["EmptyObservable"]();
        }
        var update = [{ name: "recipes", value: cookbookRecipes }];
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Authorization", localStorage.getItem("id_token"));
        headers.append("Content-Type", "application/json");
        return this.http
            .patch("cookbooks/" + cookbookID, update, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    CookbookService.prototype.addCookbookImage = function (cookbookImage) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Authorization", localStorage.getItem("id_token"));
        return this.http
            .post("cookbooks/image", cookbookImage, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    CookbookService.prototype.getCookbooks = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Authorization", localStorage.getItem("id_token"));
        headers.append("Content-Type", "application/json");
        return this.http
            .get("cookbooks/", {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    CookbookService.prototype.getCookbookSearch = function (query) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Authorization", localStorage.getItem("id_token"));
        headers.append("Content-Type", "application/json");
        return this.http
            .get("cookbooks", {
            headers: headers,
            params: {
                search_query: query
            }
        })
            .map(function (res) { return res.json(); });
    };
    CookbookService.prototype.getCookBookById = function (cookbookId) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Authorization", localStorage.getItem("id_token"));
        headers.append("Content-Type", "application/json");
        return this.http
            .get("cookbooks/" + cookbookId, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    CookbookService.prototype.getCookbooksFromSelection = function (selection) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Authorization", localStorage.getItem("id_token"));
        headers.append("Content-Type", "application/json");
        return this.http
            .get("cookbooks/selection", {
            headers: headers,
            params: {
                selection: selection
            }
        })
            .map(function (res) { return res.json(); });
    };
    CookbookService.prototype.updateCookbook = function (cookbook, data) {
        var cookbookID = "";
        var update = [];
        if (data.type === "recipes") {
            cookbookID = cookbook.cookbook._id;
            var cookbookRecipes = cookbook.cookbook.recipes.slice(0);
            var index = cookbookRecipes.findIndex(function (x) { return x.recipe === data.recipe._id || x.recipe._id === data.recipe._id; });
            if (index === -1) {
                cookbookRecipes.push({
                    recipe: data.recipe._id,
                    timestamp: new Date()
                });
            }
            update.push({ name: "recipes", value: cookbookRecipes });
        }
        else if (data.type === "info") {
            cookbookID = cookbook;
            data.data.forEach(function (e) {
                update.push(e);
            });
        }
        else if (data.type === "followers") {
            cookbookID = cookbook._id;
            update.push({
                name: "followers",
                value: data.amount
            });
        }
        console.log(cookbookID);
        console.log(update);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Authorization", localStorage.getItem("id_token"));
        headers.append("Content-Type", "application/json");
        return this.http
            .patch("cookbooks/" + cookbookID, update, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    CookbookService.prototype.saveCookbook = function (cookbook) {
        var _this = this;
        if (this.cookbookLock) {
            return new rxjs_observable_EmptyObservable__WEBPACK_IMPORTED_MODULE_3__["EmptyObservable"]();
        }
        this.cookbookLock = true;
        this.userService.getUserData().subscribe(function (data) {
            var savedCookbooks = data.cookbooks.saved.map(function (e) {
                return e.cookbook._id;
            });
            // console.log(savedCookbooks);
            // console.log(cookbook);
            var followerChange = 1;
            if (savedCookbooks.indexOf(cookbook._id) > -1) {
                followerChange = -1;
            }
            _this.updateCookbook(cookbook, {
                type: "followers",
                amount: followerChange
            }).subscribe(function (data) {
                _this.userService.toggleCookbookSave(cookbook);
                _this.cookbookLock = false;
            });
        });
    };
    CookbookService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], CookbookService);
    return CookbookService;
}());



/***/ }),

/***/ "./src/app/services/general.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/general.service.ts ***!
  \*********************************************/
/*! exports provided: GeneralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralService", function() { return GeneralService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GeneralService = /** @class */ (function () {
    function GeneralService(http, cookies, router) {
        this.http = http;
        this.cookies = cookies;
        this.router = router;
    }
    GeneralService.prototype.getDash = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Authorization", localStorage.getItem("id_token"));
        headers.append("Content-Type", "application/json");
        return this.http
            .get("libraries/dash", {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    // Returns the phrase that is displayed on the dashboard.
    GeneralService.prototype.getDashPhrase = function () {
        var phrase = "Welcome back!";
        return phrase;
    };
    GeneralService.prototype.getUser = function () {
        try {
            var user = JSON.parse(this.cookies.get("user"));
            return user;
        }
        catch (e) { }
    };
    // Returns the time ago, from a given timestamp.
    GeneralService.prototype.getTimeAgo = function (timeStamp) {
        var diff = (new Date().getTime() - new Date(timeStamp).getTime()) / 60000;
        if (isNaN(diff)) {
            return "not a valid time";
        }
        else if (diff < 1) {
            return "less than a minute ago";
        }
        else if (diff < 60) {
            if (Math.round(diff) === 1) {
                return Math.round(diff) + " minute ago";
            }
            return Math.round(diff) + " minutes ago";
        }
        else if ((diff = diff / 60) < 24) {
            if (Math.round(diff) === 1) {
                return Math.round(diff) + " hour ago";
            }
            return Math.round(diff) + " hours ago";
        }
        else if ((diff = diff / 24) < 30) {
            if (Math.round(diff) === 1) {
                return Math.round(diff) + " day ago";
            }
            return Math.round(diff) + " days ago";
        }
        else if ((diff = diff / 30) < 12) {
            if (Math.round(diff) === 1) {
                return Math.round(diff) + " month ago";
            }
            return Math.round(diff) + " months ago";
        }
        else {
            diff = diff / 12;
            if (Math.round(diff) === 1) {
                return Math.round(diff) + " year ago";
            }
            return Math.round(diff) + " years ago";
        }
    };
    GeneralService.prototype.getTotalTime = function (prep, cook) {
        try {
            var a = prep + cook;
        }
        catch (e) {
            console.log(e);
            return;
        }
        var timestamp = prep + cook;
        var minutes = Math.floor(timestamp / 60) % 60;
        var hours = Math.floor(timestamp / 3600);
        var hoursFormatted, minsFormatted;
        if (hours < 10) {
            hoursFormatted = "0" + hours;
        }
        else {
            hoursFormatted = hours;
        }
        if (minutes < 10) {
            minsFormatted = "0" + minutes;
        }
        else {
            minsFormatted = minutes;
        }
        return hoursFormatted + ":" + minsFormatted;
    };
    GeneralService.prototype.getSeconds = function (time) {
        var halves = time.split(":");
        var seconds = parseInt(halves[0], 10) * 60 * 60;
        seconds = seconds + parseInt(halves[1], 10) * 60;
        return seconds;
    };
    GeneralService.prototype.getTime = function (timestamp) {
        var minutes = Math.floor(timestamp / 60) % 60;
        var hours = Math.floor(timestamp / 3600);
        var hoursFormatted, minsFormatted;
        if (hours < 10) {
            hoursFormatted = "0" + hours;
        }
        else {
            hoursFormatted = hours;
        }
        if (minutes < 10) {
            minsFormatted = "0" + minutes;
        }
        else {
            minsFormatted = minutes;
        }
        return hoursFormatted + ":" + minsFormatted;
    };
    GeneralService.prototype.getDifficulty = function (difficulty) {
        if (difficulty === 0) {
            return "Easy";
        }
        else if (difficulty === 1) {
            return "Medium";
        }
        else if (difficulty === 2) {
            return "Hard";
        }
        else {
            return "Invalid difficulty";
        }
    };
    GeneralService.prototype.formatFollowers = function (followers) {
        return followers.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    };
    GeneralService.prototype.formatIngredient = function (ingredient, servings) {
        if (!ingredient || !servings) {
            return "loading...";
        }
        if (servings < 1) {
            servings = 1;
        }
        else if (servings > 99) {
            servings = 99;
        }
        var ing = ingredient.ingredient.ingredient;
        if (!ing) {
            ing = ingredient.name;
        }
        if (!ing) {
            ing = ingredient.ingredient;
        }
        var notes = ingredient.notes;
        if (!notes) {
            notes = "";
        }
        else {
            notes = " (" + notes + ")";
        }
        if (ingredient.unit === "1") {
            return servings * ingredient.amount + " " + ing + notes;
        }
        else {
            return servings * ingredient.amount + ingredient.unit + " " + ing + notes;
        }
    };
    GeneralService.prototype.getImageLink = function (image) {
        if (!image || image === null) {
            return;
        }
        if (image.includes("http")) {
            return image;
        }
        return "http://www.recipeazy.uk/uploads/" + image.split("\\")[1];
    };
    GeneralService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], GeneralService);
    return GeneralService;
}());



/***/ }),

/***/ "./src/app/services/recipe-create.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/recipe-create.service.ts ***!
  \***************************************************/
/*! exports provided: RecipeCreateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeCreateService", function() { return RecipeCreateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecipeCreateService = /** @class */ (function () {
    function RecipeCreateService() {
    }
    RecipeCreateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], RecipeCreateService);
    return RecipeCreateService;
}());



/***/ }),

/***/ "./src/app/services/recipe-validate.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/recipe-validate.service.ts ***!
  \*****************************************************/
/*! exports provided: RecipeValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeValidateService", function() { return RecipeValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe.service */ "./src/app/services/recipe.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./general.service */ "./src/app/services/general.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RecipeValidateService = /** @class */ (function () {
    function RecipeValidateService(userService, recipeService, http, generalService) {
        this.userService = userService;
        this.recipeService = recipeService;
        this.http = http;
        this.generalService = generalService;
        this.saveLock = false;
    }
    RecipeValidateService.prototype.validateIngredient = function (ingredient) {
        var errors = new Array(4).fill({ err: false });
        if (ingredient.food === "" || ingredient.food === undefined || ingredient.food.length > 15) {
            errors[0] = { err: true, msg: "Food not valid." };
        }
        if (ingredient.detail === undefined) {
        }
        else if (ingredient.detail === "" || ingredient.detail.length > 15) {
            errors[1] = { err: true, msg: "Notes not valid." };
        }
        if (ingredient.amount === "" || ingredient.amount === undefined || isNaN(ingredient.amount) || ingredient.amount > 10000) {
            errors[2] = { err: true, msg: "Amount not valid." };
        }
        if (ingredient.unit === "" || ingredient.unit === undefined) {
            errors[3] = { err: true, msg: "Unit not valid." };
        }
        return errors;
    };
    RecipeValidateService.prototype.validateDetails = function (details) {
        var errors = new Array(6).fill({ err: false });
        var testRe = /^[A-Za-z0-9,\.\-/()'# ]+$/;
        var timeRe = /^[0-9]{2}:[0-5][0-9]$/;
        if (!testRe.test(details.title) || details.title === "" || details.title === undefined || details.title.length < 6 || details.title.split(" ").length < 1) {
            errors[0] = { err: true, msg: "Title not valid." };
        }
        if (!testRe.test(details.description) || details.description === "" || details.description === undefined || details.title.length < 6 || details.title.split(" ").length < 1) {
            errors[1] = { err: true, msg: "Description not valid." };
        }
        if (!timeRe.test(details.prepTime)) {
            errors[2] = { err: true, msg: "Preparation time not valid." };
        }
        if (!timeRe.test(details.cookTime)) {
            errors[3] = { err: true, msg: "Cooking time not valid." };
        }
        if (details.difficulty === undefined) {
            errors[4] = { err: true, msg: "Select a difficulty." };
        }
        if (details.servings === undefined || details.servings < 1) {
            errors[5] = { err: true, msg: "Number of servings not valid." };
        }
        return errors;
    };
    RecipeValidateService.prototype.validateTitle = function (title) {
        var testRe = /^[A-Za-z0-9,\.\-/()'# ]+$/;
        if (!title || !testRe.test(title) || title === "" || title.length < 6 || title.split(" ").length < 1) {
            return { err: true, msg: "Title not valid. Must be greater than 6 and contain only valid characters." };
        }
        else {
            return { err: false };
        }
    };
    RecipeValidateService.prototype.validateDescription = function (description) {
        var testRe = /^[A-Za-z0-9,\.\-/()'# ]+$/;
        if (!description || !testRe.test(description) || description === "" || description.length < 6 || description.split(" ").length < 1) {
            return { err: true, msg: "Description not valid." };
        }
        else {
            return { err: false };
        }
    };
    RecipeValidateService.prototype.validateTime = function (time) {
        var errs = { err: false };
        var timeRe = /^[0-9]{2}:[0-5][0-9]$/;
        if (!timeRe.test(time.prepTime) && !timeRe.test(time.cookTime)) {
            errs["err"] = true;
            errs["msg"] = "Preparation and cooking time not valid.";
        }
        else {
            if (!timeRe.test(time.prepTime)) {
                errs["err"] = true;
                errs["msg"] = "Preparation time not valid.";
            }
            if (!timeRe.test(time.cookTime)) {
                errs["err"] = true;
                errs["msg"] = "Cooking time not valid.";
            }
        }
        return errs;
    };
    RecipeValidateService.prototype.validateDifficulty = function (difficulty) {
        if (difficulty !== 0 && !difficulty) {
            return { err: true, msg: "Select a difficulty." };
        }
        else {
            return { err: false };
        }
    };
    RecipeValidateService.prototype.validateServings = function (servings) {
        if (!servings || servings < 1) {
            return { err: true, msg: "Number of servings not valid." };
        }
        else {
            return { err: false };
        }
    };
    RecipeValidateService.prototype.validateRecipe = function (recipe) {
        var errors = new Array(9).fill({ err: false });
        var testRe = /^[A-Za-z0-9,\.\-/()'# ]+$/;
        var timeRe = /^[0-9]{2}:[0-5][0-9]$/;
        var intRe = /^[0-9]$/;
        if (!testRe.test(recipe.title) || recipe.title === "" || recipe.title === undefined || recipe.title.length < 6 || recipe.title.split(" ").length < 1) {
            errors[0] = { err: true, msg: "Title not valid." };
        }
        if (!testRe.test(recipe.description) || recipe.description === "" || recipe.description === undefined || recipe.title.length < 6 || recipe.title.split(" ").length < 1) {
            errors[1] = { err: true, msg: "Description not valid." };
        }
        if (recipe.prepTime === undefined || recipe.prepTime < 59) {
            errors[2] = { err: true, msg: "Preparation time not valid." };
        }
        if (recipe.prepTime === undefined) {
            errors[3] = { err: true, msg: "Cooking time not valid." };
        }
        if (recipe.mealType === undefined) {
            errors[4] = { err: true, msg: "Select a meal type." };
        }
        if (recipe.difficulty === undefined) {
            errors[5] = { err: true, msg: "Select a difficulty." };
        }
        if (recipe.servings === undefined || recipe.servings < 1) {
            errors[6] = { err: true, msg: "Number of servings not valid." };
        }
        if (recipe.ingredients.length < 1) {
            errors[7] = { err: true, msg: "Not enough ingredients" };
        }
        if (recipe.method.length < 1) {
            errors[8] = { err: true, msg: "Not enough steps" };
        }
        return errors;
    };
    RecipeValidateService.prototype.generateRecipe = function (recipeData, user) {
        var recipe = {
            title: recipeData.title,
            description: recipeData.description,
            image: recipeData.image,
            public: recipeData.public,
            mealType: recipeData.mealType,
            prepTime: recipeData.prepTime,
            cookTime: recipeData.cookTime,
            difficulty: recipeData.difficulty,
            servings: recipeData.servings,
            ingredients: recipeData.ingredients,
            method: recipeData.method,
            author: user
        };
        return recipe;
    };
    RecipeValidateService.prototype.castVote = function (vote, currentVote, recipe, user, callback) {
        var _this = this;
        console.log(recipe);
        var amount = 0;
        if (currentVote === undefined) {
            currentVote = "none";
        }
        if (vote === "up" && currentVote === "up") {
            currentVote = "none";
            amount = -1;
        }
        else if (vote === "up" && currentVote === "down") {
            currentVote = "up";
            amount = 2;
        }
        else if (vote === "up" && currentVote === "none") {
            currentVote = "up";
            amount = 1;
        }
        else if (vote === "down" && currentVote === "up") {
            currentVote = "down";
            amount = -2;
        }
        else if (vote === "down" && currentVote === "down") {
            currentVote = "none";
            amount = 1;
        }
        else if (vote === "down" && currentVote === "none") {
            currentVote = "down";
            amount = -1;
        }
        this.recipeService.voteRecipe(recipe._id, amount).subscribe(function (data) {
            if (data.success) {
                _this.userService.addUserData(user, { data: "recipes", type: "vote", vote: currentVote }, recipe._id).subscribe(function (data) {
                    if (!data.success) {
                        console.log("Failed to cast vote");
                    }
                    callback();
                });
            }
            else {
                console.log("Failed to cast vote");
            }
        });
        return { newScore: recipe.score + amount, newVote: currentVote };
    };
    RecipeValidateService.prototype.toggleSave = function (data, recipe) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (o) {
            if (!_this.saveLock) {
                _this.saveLock = true;
                var userData = { id: _this.generalService.getUser().id, data: data.recipes };
                _this.userService.addUserData(userData, { data: "recipes", type: "save" }, recipe._id).subscribe(function (data) {
                    if (!data.success) {
                        console.log("Failed to toggle save");
                    }
                    o.next(data);
                    _this.saveLock = false;
                    o.complete();
                });
            }
        });
    };
    RecipeValidateService.prototype.getIngredients = function (query) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Authorization", localStorage.getItem("id_token"));
        headers.append("Content-Type", "application/json");
        return this.http
            .get("ingredients", {
            headers: headers,
            params: {
                search_query: query
            }
        })
            .map(function (res) { return res.json(); });
    };
    RecipeValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"], _general_service__WEBPACK_IMPORTED_MODULE_5__["GeneralService"]])
    ], RecipeValidateService);
    return RecipeValidateService;
}());



/***/ }),

/***/ "./src/app/services/recipe.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/recipe.service.ts ***!
  \********************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipeService = /** @class */ (function () {
    function RecipeService(http) {
        this.http = http;
    }
    RecipeService.prototype.addRecipe = function (recipe) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Authorization", localStorage.getItem("id_token"));
        headers.append("Content-Type", "application/json");
        return this.http
            .post("recipes/", recipe, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    RecipeService.prototype.addRecipeImage = function (recipeImage) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Authorization", localStorage.getItem("id_token"));
        // headers.append("Content-Type", "multipart/form-data");
        return this.http
            .post("recipes/image", recipeImage, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    RecipeService.prototype.getRecipes = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Authorization", localStorage.getItem("id_token"));
        headers.append("Content-Type", "application/json");
        return this.http.get("recipes", { headers: headers }).map(function (res) { return res.json(); });
    };
    RecipeService.prototype.getRecipeSearch = function (query, last) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Authorization", localStorage.getItem("id_token"));
        headers.append("Content-Type", "application/json");
        return this.http
            .get("recipes", {
            headers: headers,
            params: {
                search_query: query,
                last_seen: last
            }
        })
            .map(function (res) { return res.json(); });
    };
    RecipeService.prototype.getRecipeCuisine = function (cuisine, last) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Authorization", localStorage.getItem("id_token"));
        headers.append("Content-Type", "application/json");
        return this.http
            .get("recipes", {
            headers: headers,
            params: {
                cuisine: cuisine,
                last_seen: last
            }
        })
            .map(function (res) { return res.json(); });
    };
    RecipeService.prototype.getRecommended = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Authorization", localStorage.getItem("id_token"));
        headers.append("Content-Type", "application/json");
        return this.http.get("recipes/recommended", { headers: headers }).map(function (res) { return res.json(); });
    };
    RecipeService.prototype.getRecipesBySelection = function (selection) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Authorization", localStorage.getItem("id_token"));
        headers.append("Content-Type", "application/json");
        return this.http
            .get("recipes/selection", {
            headers: headers,
            params: {
                selection: selection
            }
        })
            .map(function (res) { return res.json(); });
    };
    RecipeService.prototype.getRecipe = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Authorization", localStorage.getItem("id_token"));
        headers.append("Content-Type", "application/json");
        return this.http
            .get("recipes/" + id, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    RecipeService.prototype.voteRecipe = function (id, vote) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Authorization", localStorage.getItem("id_token"));
        headers.append("Content-Type", "application/json");
        return this.http
            .patch("recipes/" + id + "/" + vote, {}, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    RecipeService.prototype.getNutrition = function (recipe) {
        var nutrition = {};
        var nutritionArray = [];
        var regex = /\,.*$/;
        var ingredient = recipe.ingredients.map(function (e) {
            return e.ingredient;
        });
        ingredient.forEach(function (eIng) {
            eIng.nutrients.forEach(function (e) {
                var nutName = e.nutrient.replace(regex, "");
                if (nutrition[nutName]) {
                    nutrition[nutName][0] = nutrition[nutName][0] + e.val;
                }
                else {
                    nutrition[nutName] = [e.val, e.uom];
                }
            });
        });
        for (var key in nutrition) {
            if (nutrition[key] !== 0) {
                nutritionArray.push({ nutrient: key, val: nutrition[key][0].toFixed(1), uom: nutrition[key][1] });
            }
        }
        return nutritionArray;
    };
    RecipeService.prototype.getSimilarRecipes = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Authorization", localStorage.getItem("id_token"));
        headers.append("Content-Type", "application/json");
        return this.http
            .get("recipes/" + id + "/similar", {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    RecipeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], RecipeService);
    return RecipeService;
}());



/***/ }),

/***/ "./src/app/services/user-validate.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/user-validate.service.ts ***!
  \***************************************************/
/*! exports provided: UserValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserValidateService", function() { return UserValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserValidateService = /** @class */ (function () {
    function UserValidateService(userService) {
        this.userService = userService;
    }
    UserValidateService.prototype.validateUsername = function (username) {
        var _this = this;
        var res = { res: false, error: "NO ERROR" };
        return new Promise(function (resolve, reject) {
            var removeIllegal = username;
            if (username === undefined || username === "") {
                res.error = "Username required.";
                resolve(res);
            }
            else if (removeIllegal.replace(/\W/g, "") !== username) {
                res.error =
                    "Username invalid. Must only contain letters, numbers and underscores.";
                resolve(res);
            }
            else if (username.length > 20) {
                res.error = "Username too long. Must be 3-20 characters.";
                resolve(res);
            }
            else if (username.length < 3) {
                res.error = "Username too short. Must be 3-20 characters.";
                resolve(res);
            }
            else if (_this.profanityFilter(username)) {
                res.error = "Really...";
                resolve(res);
            }
            else {
                _this.uniqueUsername(username).then(function (isUnique) {
                    if (!isUnique) {
                        res.error = "Username taken.";
                        resolve(res);
                    }
                    else {
                        res.res = true;
                        resolve(res);
                    }
                });
            }
        });
    };
    UserValidateService.prototype.validateEmail = function (email) {
        var _this = this;
        var res = { res: false, error: "NO ERROR" };
        return new Promise(function (resolve, reject) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (email === undefined || email === "") {
                res.error = "Email required.";
                resolve(res);
            }
            else if (!re.test(String(email).toLowerCase())) {
                res.error = "Email not valid.";
                resolve(res);
            }
            else {
                _this.uniqueEmail(email).then(function (isUnique) {
                    if (!isUnique) {
                        res.error = "Email already registered.";
                        resolve(res);
                    }
                    else {
                        res.res = true;
                        resolve(res);
                    }
                });
            }
        });
    };
    UserValidateService.prototype.validateEmailConf = function (email, emailConf) {
        var res = { res: false, error: "NO ERROR" };
        if (email !== emailConf) {
            res.error = "Email addresses don't match.";
            return res;
        }
        res.res = true;
        return res;
    };
    UserValidateService.prototype.validatePasswordConf = function (password, passwordConf) {
        var res = { res: false, error: "NO ERROR" };
        if (password !== passwordConf) {
            res.error = "Passwords don't match.";
            return res;
        }
        res.res = true;
        return res;
    };
    UserValidateService.prototype.validatePassword = function (password) {
        var res = { res: false, error: "NO ERROR" };
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,20}$/;
        if (password === undefined || password === "") {
            res.error = "Password required.";
            return res;
        }
        else if (!re.test(password)) {
            res.error =
                "Password invalid. Must contain 8-20 characters, include a mix of capital and lowercase letters and at least one number.";
            return res;
        }
        else {
            res.res = true;
            return res;
        }
    };
    UserValidateService.prototype.profanityFilter = function (username) {
        // TODO:
        return false;
    };
    UserValidateService.prototype.uniqueUsername = function (username) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService.checkUnique(username).subscribe(function (data) {
                if (data.success) {
                    resolve(data.unique);
                }
                else {
                    reject("Failed to check username");
                }
            });
        });
    };
    UserValidateService.prototype.uniqueEmail = function (email) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService.checkUnique(email).subscribe(function (data) {
                if (data.success) {
                    resolve(data.unique);
                }
                else {
                    reject("Failed to check email");
                }
            });
        });
    };
    UserValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UserValidateService);
    return UserValidateService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_observable_EmptyObservable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/EmptyObservable */ "./node_modules/rxjs-compat/_esm5/observable/EmptyObservable.js");
/* harmony import */ var _general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general.service */ "./src/app/services/general.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http, generalService) {
        this.http = http;
        this.generalService = generalService;
    }
    // Returns the users data.
    UserService.prototype.getUserData = function () {
        var user = this.generalService.getUser().id;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Authorization", localStorage.getItem("id_token"));
        headers.append("Content-Type", "application/json");
        return this.http
            .get("/users/" + user, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    // Check if username or email is unique.
    UserService.prototype.checkUnique = function (query) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http
            .get("users/unique/" + query, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    // data = history array, value = update. If passed a String adds it to the search history, otherwise, removes it.
    UserService.prototype.updateSearchHistory = function (data, value) {
        var history = data.slice();
        if (isNaN(value)) {
            var index = history.findIndex(function (e) {
                if (e === value) {
                    return true;
                }
            });
            if (index === -1 && history.length < 31) {
                history.push(value);
            }
            else if (index === -1) {
                history.pop();
                history.unshift(value);
            }
            else {
                return new rxjs_observable_EmptyObservable__WEBPACK_IMPORTED_MODULE_2__["EmptyObservable"]();
            }
        }
        else {
            history.splice(value, 1);
        }
        var update = [{ name: "history", value: history }];
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        var user = this.generalService.getUser().id;
        headers.append("Authorization", localStorage.getItem("id_token"));
        headers.append("Content-Type", "application/json");
        return this.http
            .patch("users/" + user, update, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.addToHistory = function (id, type) {
        var _this = this;
        this.getUserData().subscribe(function (data) {
            if (type === "recipes") {
                data = data.recipes;
            }
            else {
                data = data.cookbooks;
            }
            var user = _this.generalService.getUser().id;
            _this.addUserData({ id: user, data: data }, { data: type, type: "history" }, id).subscribe(function (data) {
                // console.log(data);
            });
        });
    };
    UserService.prototype.addToAuthor = function (id, type) {
        var _this = this;
        this.getUserData().subscribe(function (data) {
            if (type === "recipes") {
                data = data.recipes;
            }
            else {
                data = data.cookbooks;
            }
            var user = _this.generalService.getUser().id;
            _this.addUserData({ id: user, data: data }, { data: type, type: "author" }, id).subscribe(function (data) {
                // console.log(data);
            });
        });
    };
    UserService.prototype.toggleCookbookSave = function (cookbook) {
        var _this = this;
        this.getUserData().subscribe(function (data) {
            var cookbooks = data.cookbooks.saved.slice();
            var index = cookbooks.findIndex(function (e) {
                return e.cookbook._id === cookbook._id;
            });
            if (index > -1) {
                cookbooks.splice(index, 1);
            }
            else {
                cookbooks.push(cookbook._id);
            }
            var user = _this.generalService.getUser().id;
            _this.addUserData({ id: user, data: data.cookbooks }, { data: "cookbooks", type: "save" }, cookbook._id).subscribe(function (data) { });
        });
    };
    // Updates the data for the user.
    // ? user = {id, data(field being updated)}
    // ? update = {data(recipes/cookbooks), type(saved,...), ?vote}
    // ? dataID = 252dfs
    UserService.prototype.addUserData = function (user, update, dataID) {
        // console.log(user);
        // console.log(update);
        // console.log(dataID);
        var userData = this.reduceData(Object.assign({}, user.data), update.data);
        var data = [];
        if (update.data === "recipes") {
            if (update.type === "save") {
                var index = userData.saved.findIndex(function (x) { return x.recipe === dataID; });
                if (index === -1) {
                    userData.saved.push({
                        recipe: dataID,
                        timestamp: new Date().getTime()
                    });
                }
                else {
                    userData.saved.splice(index, 1);
                }
            }
            else if (update.type === "vote") {
                var index = userData.voted.findIndex(function (x) { return x.recipe === dataID; });
                if (index === -1) {
                    userData.voted.push({
                        recipe: dataID,
                        vote: update.vote,
                        timestamp: new Date().getTime()
                    });
                }
                else if (update.vote === "none") {
                    userData.voted.splice(index, 1);
                }
                else {
                    userData.voted[index].vote = update.vote;
                    userData.voted[index].timestamp = new Date().getTime();
                }
            }
            else if (update.type === "author") {
                userData.author.push({
                    recipe: dataID,
                    timestamp: new Date().getTime()
                });
            }
            else if (update.type === "history") {
                var index = userData.history.findIndex(function (e) {
                    if (e.recipe === dataID) {
                        return true;
                    }
                });
                if (index > -1) {
                    userData.history[index].timestamp = new Date().getTime();
                }
                else {
                    userData.history.push({
                        recipe: dataID,
                        timestamp: new Date().getTime()
                    });
                }
            }
            data.push({ name: "recipes", value: userData });
        }
        else if (update.data === "cookbooks") {
            if (update.type === "save") {
                var index = userData.saved.findIndex(function (x) { return x.cookbook === dataID || x.cookbook._id === dataID; });
                if (index === -1) {
                    userData.saved.push({
                        cookbook: dataID,
                        timestamp: new Date().getTime()
                    });
                }
                else {
                    userData.saved.splice(index, 1);
                }
            }
            else if (update.type === "author") {
                // userData.author.push({
                //   cookbook: dataID,
                //   timestamp: new Date().getTime()
                // });
                userData.author = [];
            }
            else if (update.type === "history") {
                var index = userData.history.findIndex(function (e) {
                    if (e.cookbook._id === dataID) {
                        return true;
                    }
                });
                if (index > -1) {
                    userData.history[index].timestamp = new Date().getTime();
                }
                else {
                    userData.history.push({
                        cookbook: dataID,
                        timestamp: new Date().getTime()
                    });
                }
            }
            data.push({ name: "cookbooks", value: userData });
        }
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Authorization", localStorage.getItem("id_token"));
        headers.append("Content-Type", "application/json");
        // Remove populated fields.
        return this.http
            .patch("users/" + user.id, data, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.reduceData = function (userData, type) {
        if (type === "recipes") {
            userData.saved.forEach(function (e) {
                if (e.recipe._id) {
                    e.recipe = e.recipe._id;
                }
            });
            userData.history.forEach(function (e) {
                if (e.recipe._id) {
                    e.recipe = e.recipe._id;
                }
            });
            userData.author.forEach(function (e) {
                if (e.recipe._id) {
                    e.recipe = e.recipe._id;
                }
            });
            userData.voted.forEach(function (e) {
                if (e.recipe._id) {
                    e.recipe = e.recipe._id;
                }
            });
        }
        else if (type === "cookbooks") {
        }
        return userData;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Documents\My Projects\recipe-app\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map