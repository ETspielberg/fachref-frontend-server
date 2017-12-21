webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/eJournals/ejournals.module": [
		"../../../../../src/app/eJournals/ejournals.module.ts",
		"common",
		"ejournals.module"
	],
	"app/hitlists/hitlists.module": [
		"../../../../../src/app/hitlists/hitlists.module.ts",
		"common",
		"hitlists.module"
	],
	"app/media/media.module": [
		"../../../../../src/app/media/media.module.ts",
		"common",
		"media.module"
	],
	"app/profiles/profiles.module": [
		"../../../../../src/app/profiles/profiles.module.ts",
		"common",
		"profiles.module"
	],
	"app/start/start.module": [
		"../../../../../src/app/start/start.module.ts",
		"start.module"
	],
	"app/usersettings/usersettings.module": [
		"../../../../../src/app/usersettings/usersettings.module.ts",
		"common",
		"usersettings.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\"\r\n                    data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\r\n                    aria-controls=\"navbar\">\r\n                <span class=\"sr-only\">Toggle navigation</span> <span\r\n                    class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span\r\n                    class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" routerLink=\"/start\">UB-Services :: Start</a>\r\n        </div>\r\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n            <ul *ngIf=\"principal\" class=\"nav navbar-nav navbar-right\">\r\n                <li>\r\n                    <a href=\"/protokoll\">Protokoll</a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink=\"profiles\">Profile</a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink=\"hitlists\">Hitlisten</a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink=\"ejournals\">e-Journals</a>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                    <user></user>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <!--/.navbar-collapse -->\r\n    </div>\r\n</nav>\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentification_service__ = __webpack_require__("../../../../../src/app/services/authentification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(authentificationService, userService) {
        this.authentificationService = authentificationService;
        this.userService = userService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authentificationService.updatePrincipal().subscribe(function (data) {
            _this.principal = data;
            _this.refreshUser();
            _this.userService.get(_this.principal.name).subscribe(function (data) { return _this.usersettings = data; });
        }, function (error) { return console.log(error); });
    };
    AppComponent.prototype.refreshUser = function () {
        this.principal = this.authentificationService.principal;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_authentification_service__["a" /* AuthentificationService */], __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.globals.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return settingsUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dataUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return filesUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getterUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return resourcesUrl; });
/* unused harmony export serviceRunnerUrl */
/* unused harmony export userUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return gatewayurl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return batchUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ignoredUrl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");

'use strict';
var settingsUrl = '/api/settings';
var dataUrl = '/api/data';
var filesUrl = '/files';
var getterUrl = '/api/getter';
var resourcesUrl = '/api/resources';
var serviceRunnerUrl = '/services/run';
var userUrl = 'http://localhost:11999';
var gatewayurl = '';
var batchUrl = '/services/batch';
var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
var ignoredUrl = '/blacklist';


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_module__ = __webpack_require__("../../../../../src/app/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_profilesperuser_service__ = __webpack_require__("../../../../../src/app/services/profilesperuser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_notationgroup_service__ = __webpack_require__("../../../../../src/app/services/notationgroup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_getter_service__ = __webpack_require__("../../../../../src/app/services/getter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_authentification_service__ = __webpack_require__("../../../../../src/app/services/authentification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_12__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_4__user_user_module__["a" /* UserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* appRouting */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_authentification_service__["a" /* AuthentificationService */], __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_8__services_profilesperuser_service__["a" /* ProfilesPerUserService */], __WEBPACK_IMPORTED_MODULE_9__services_notationgroup_service__["a" /* NotationgroupService */], __WEBPACK_IMPORTED_MODULE_10__services_getter_service__["a" /* GetterService */]],
            exports: []
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");

var routes = [
    { path: 'start', loadChildren: 'app/start/start.module#StartModule' },
    { path: 'profiles', loadChildren: 'app/profiles/profiles.module#ProfilesModule' },
    { path: 'hitlists', loadChildren: 'app/hitlists/hitlists.module#HitlistsModule' },
    { path: 'user', loadChildren: 'app/usersettings/usersettings.module#UsersettingsModule' },
    { path: 'ejournals', loadChildren: 'app/eJournals/ejournals.module#EJournalsModule' },
    { path: 'media', loadChildren: 'app/media/media.module#MediaModule' },
    { path: '', redirectTo: 'start', pathMatch: 'full' }
];
var appRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "../../../../../src/app/services/authentification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthentificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_globals__ = __webpack_require__("../../../../../src/app/app.globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthentificationService = (function () {
    function AuthentificationService(http) {
        this.http = http;
    }
    AuthentificationService.prototype.updatePrincipal = function () {
        var _this = this;
        var observable = this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_globals__["d" /* gatewayurl */] + '/activeuser');
        observable.subscribe(function (data) { return _this.principal = data; });
        return observable;
    };
    AuthentificationService.prototype.hasRole = function (role) {
        return this.principal.roles && (this.principal.roles.indexOf("ROLE_" + role.toUpperCase()) > -1);
    };
    AuthentificationService.prototype.logout = function () {
        return this.http.post('/logout', {}, { responseType: 'text' });
    };
    AuthentificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AuthentificationService);
    return AuthentificationService;
}());



/***/ }),

/***/ "../../../../../src/app/services/getter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_globals__ = __webpack_require__("../../../../../src/app/app.globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GetterService = (function () {
    function GetterService(http) {
        this.http = http;
    }
    GetterService.prototype.getFullManifestation = function (protokollRequest) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_globals__["e" /* getterUrl */] + '/fullManifestation?identifier=' + protokollRequest.shelfmark.trim() +
            '&exact=' + protokollRequest.exact);
    };
    GetterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], GetterService);
    return GetterService;
}());



/***/ }),

/***/ "../../../../../src/app/services/notationgroup.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotationgroupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_globals__ = __webpack_require__("../../../../../src/app/app.globals.ts");
/**
 * Created by Eike on 26.06.2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotationgroupService = (function () {
    function NotationgroupService(http) {
        this.http = http;
        this.notationgroupUrl = __WEBPACK_IMPORTED_MODULE_3__app_globals__["i" /* settingsUrl */] + '/notationgroup';
    }
    NotationgroupService.prototype.getAll = function () {
        return this.http.get(this.notationgroupUrl);
    };
    NotationgroupService.prototype.get = function (identifier) {
        var url = this.notationgroupUrl + '/' + identifier;
        return this.http.get(url);
    };
    NotationgroupService.prototype.deleteNotationgroup = function (identifier) {
        var url = this.notationgroupUrl + '/' + identifier;
        return this.http.delete(url, { headers: __WEBPACK_IMPORTED_MODULE_3__app_globals__["f" /* headers */] });
    };
    NotationgroupService.prototype.create = function (notationgroup) {
        return this.http
            .post(this.notationgroupUrl, JSON.stringify(notationgroup), { headers: __WEBPACK_IMPORTED_MODULE_3__app_globals__["f" /* headers */] });
    };
    NotationgroupService.prototype.update = function (notationgroup) {
        var url = this.notationgroupUrl + '/' + notationgroup.notationgroupName;
        return this.http
            .put(url, JSON.stringify(notationgroup), { headers: __WEBPACK_IMPORTED_MODULE_3__app_globals__["f" /* headers */] });
    };
    NotationgroupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], NotationgroupService);
    return NotationgroupService;
}());



/***/ }),

/***/ "../../../../../src/app/services/profilesperuser.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilesPerUserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_globals__ = __webpack_require__("../../../../../src/app/app.globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilesPerUserService = (function () {
    function ProfilesPerUserService(http) {
        this.http = http;
        this.profilesPerUserUrl = __WEBPACK_IMPORTED_MODULE_2__app_globals__["i" /* settingsUrl */] + '/profilesperuser';
    }
    ProfilesPerUserService.prototype.getProfilePerUsers = function (identifier) {
        return this.http.get(this.profilesPerUserUrl + '/search/findByIdentifier?identifier=' + identifier);
    };
    ProfilesPerUserService.prototype.addProfilePerUsers = function (profilePerUser) {
        return this.http.post(this.profilesPerUserUrl, JSON.stringify(profilePerUser), { headers: __WEBPACK_IMPORTED_MODULE_2__app_globals__["f" /* headers */] });
    };
    ProfilesPerUserService.prototype.deleteProfilePerUsers = function (identifier) {
        var url = this.profilesPerUserUrl + '/' + identifier;
        return this.http.delete(url, { headers: __WEBPACK_IMPORTED_MODULE_2__app_globals__["f" /* headers */] });
    };
    ProfilesPerUserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProfilesPerUserService);
    return ProfilesPerUserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_globals__ = __webpack_require__("../../../../../src/app/app.globals.ts");
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
 * Created by etspi on 22.06.2017.
 */






var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.usersettingsUrl = __WEBPACK_IMPORTED_MODULE_5__app_globals__["i" /* settingsUrl */] + '/usersettings';
    }
    UserService.prototype.get = function (name) {
        var url = this.usersettingsUrl + "/" + name;
        return this.http.get(url);
    };
    UserService.prototype.create = function (usersettings) {
        return this.http
            .post(this.usersettingsUrl, JSON.stringify(usersettings), { headers: __WEBPACK_IMPORTED_MODULE_5__app_globals__["f" /* headers */] });
    };
    UserService.prototype.getAll = function () {
        return this.http.get(this.usersettingsUrl);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<a  *ngIf=\"!guest\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><b *ngIf=\"userData\" >{{userData.fullname}}</b> <span class=\"caret\"></span></a>\r\n<ul *ngIf=\"!guest\" class=\"dropdown-menu\" id=\"login-dp\">\r\n    <li>\r\n        <a routerLink=\"/user\">Einstellungen</a>\r\n    </li>\r\n    <li>\r\n        <a routerLink=\"/user/passwordChange\">Passwort ändern</a>\r\n    </li>\r\n\r\n    <li (click)=\"logout()\">\r\n          <a>Logout</a>\r\n    </li>\r\n</ul>\r\n\r\n<a *ngIf=\"guest\" routerLink=\"/login\">Login</a>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentification_service__ = __webpack_require__("../../../../../src/app/services/authentification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = (function () {
    function UserComponent(userService, authentificationService) {
        this.userService = userService;
        this.authentificationService = authentificationService;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.refreshUsersettings();
    };
    UserComponent.prototype.refreshUsersettings = function () {
        var _this = this;
        this.principal = this.authentificationService.principal;
        this.guest = this.authentificationService.hasRole("guest");
        if (!(this.principal === undefined)) {
            this.userService.get(this.authentificationService.principal.name).subscribe(function (usersettings) { return _this.userData = usersettings; });
        }
    };
    UserComponent.prototype.logout = function () {
        var _this = this;
        this.authentificationService.logout().subscribe(function (data) {
            console.log(data);
            _this.principal = null;
            window.location.href = "/login";
        });
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__services_authentification_service__["a" /* AuthentificationService */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__user_component__["a" /* UserComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__user_component__["a" /* UserComponent */]],
            providers: []
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map