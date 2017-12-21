webpackJsonp(["start.module"],{

/***/ "../../../../../src/app/start/start.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"jumbotron\">\r\n    <div class=\"container\">\r\n        <h1>Willkommen beim FachRef-Assistenten\r\n        </h1>\r\n        <p>Bestandskontrolle und -steuerung bequem von einem Punkt</p>\r\n        <p>\r\n          <button class=\"btn btn-primary btn-lg\"  routerLink=\"/user\" role=\"button\">Meine Einstellungen &#187;</button>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n      <div (click)=\"goTo('protokoll')\" class=\"tile\">\r\n      <h2>Protokoll</h2>\r\n      <p> Das Protokoll gibt eine Übersicht über die Nutzung und den Bestand sowohl von einzelnen Auflagen oder über mehrere Auflagen hinweg.</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n      <div routerLink=\"/profiles\" class=\"tile\">\r\n        <h2>Profile</h2>\r\n        <p> Im Bestandspflegemodul können Profile zur Bestandspflege erstellt und verwaltet werden. Auf der Basis dieser Parametersätzen werden Listen von nutzungsbasierte Aussonderungs- und Anschaffungsvorschlägen erstellt.</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n      <div routerLink=\"/hitlists\" class=\"tile\">\r\n        <h2>Hitlisten</h2>\r\n        <p> Die Vormerkhitlisten können nach Bestandsbereichen und vorgegebenen Schwellenwerten gefiltert werden. Die so gefilterten Listen können außerdem als RSS-Feeds abonniert werden.</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n      <div routerLink=\"/ejournals\" class=\"tile\">\r\n        <h2>eMedien</h2>\r\n        <p> In diesem Bereich können Nutzungsstatistiken für e-Journals, e-Books und Pakete abgerufen werden sowie Nutzungsanalysen erstellt werden.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/start/start.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentification_service__ = __webpack_require__("../../../../../src/app/services/authentification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Created by etspi on 25.06.2017.
 */
var StartComponent = (function () {
    function StartComponent(userService, authentificationService, router) {
        this.userService = userService;
        this.authentificationService = authentificationService;
        this.router = router;
    }
    StartComponent.prototype.ngOnInit = function () {
        this.principal = this.authentificationService.principal;
    };
    StartComponent.prototype.goTo = function (url) {
        window.location.href = '/protokoll';
    };
    StartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__("../../../../../src/app/start/start.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__services_authentification_service__["a" /* AuthentificationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/start/start.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartModule", function() { return StartModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__start_component__ = __webpack_require__("../../../../../src/app/start/start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start_routing__ = __webpack_require__("../../../../../src/app/start/start.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var StartModule = (function () {
    function StartModule() {
    }
    StartModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__start_routing__["a" /* startRouting */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__start_component__["a" /* StartComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__start_component__["a" /* StartComponent */]],
            providers: []
        })
    ], StartModule);
    return StartModule;
}());



/***/ }),

/***/ "../../../../../src/app/start/start.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return startRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__start_component__ = __webpack_require__("../../../../../src/app/start/start.component.ts");


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__start_component__["a" /* StartComponent */] },
];
var startRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ })

});
//# sourceMappingURL=start.module.chunk.js.map