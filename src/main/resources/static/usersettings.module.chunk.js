webpackJsonp(["usersettings.module"],{

/***/ "../../../../../src/app/usersettings/user.password.change.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/usersettings/user.password.change.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPasswordChangeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserPasswordChangeComponent = (function () {
    function UserPasswordChangeComponent() {
    }
    UserPasswordChangeComponent.prototype.changePassword = function () {
        this.checkPassword();
        if (this.identical)
            console.log('new password : ' + this.passwordRepeat);
        else
            console.log('passwords do not match');
    };
    UserPasswordChangeComponent.prototype.checkPassword = function () {
        this.identical = this.password == this.passwordRepeat;
    };
    UserPasswordChangeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'passwordchange',
            template: __webpack_require__("../../../../../src/app/usersettings/user.password.change.component.html")
        })
    ], UserPasswordChangeComponent);
    return UserPasswordChangeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/usersettings/usersettings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"usersettings\">\r\n    <h2 class=\"sub-header\">Angaben zur Person</h2>\r\n    <p>Diese Angaben werden unter anderem verwendet, um E-Mails mit Aussonderungs- oder Erwerbungsvorschlägen zu\r\n        generieren.</p>\r\n    <div class=\"col-md-12\">\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\" for=\"fullname\">\r\n                Name\r\n            </label>\r\n            <div class=\"col-md-6\">\r\n                <input id=\"fullname\" [(ngModel)]=\"usersettings.fullname\" placeholder=\"{i18n:editor.placeholder.fullname}\" class=\"form-control input-md\"\r\n                       type=\"text\"/>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\" for=\"email\">\r\n                E-Mail\r\n            </label>\r\n            <div class=\"col-md-6\">\r\n                <input id=\"email\" [(ngModel)]=\"usersettings.email\" placeholder=\"{i18n:editor.placeholder.email}\" class=\"form-control input-md\"\r\n                       type=\"email\"/>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <h2 class=\"sub-header\">Standardzeitraum</h2>\r\n    <div class=\"col-md-12\">\r\n        <p> Die folgende Zeitangabe beschreibt den Zeitraum, in dem ein bereits bearbeitetes Werk von einer weiteren\r\n            Analyse ausgeschlossen ist. Außerdem wird dieser Zeitraum verwendet, wenn Titel über den \"Standard\"-Button\r\n            auf die Blacklist gesetzt werden.</p>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\" for=\"interval\">\r\n                Standardzeitraum\r\n            </label>\r\n            <div class=\"col-md-6\">\r\n                <input id=\"interval\" [(ngModel)]=\"usersettings.timePeriod\" placeholder=\"{i18n:editor.placeholder.interval}\" class=\"form-control input-md\"\r\n                       type=\"text\"/>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <h2 class=\"sub-header\">Angaben zu Fächern</h2>\r\n    <p> Bitte die eigenen Fächer und die Rolle (Referent oder Vertretung) auswählen. Mit Hilfe des Symbols \"+\" können\r\n        Einträge hinzugefügt, mittels \"-\" Einträge entfernt werden. </p>\r\n    <div class=\"col-md-12\">\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-3 control-label\" for=\"subject\">\r\n                Fächer als Fachreferent\r\n            </label>\r\n            <div class=\"col-md-9\">\r\n                <p-multiSelect id=\"subject\" [options]=\"availableSubjects\" [(ngModel)]=\"subjects\" defaultLabel=\"Bitte auswählen\" selectedItemsLabel=\"{0} Fächer ausgewählt\"></p-multiSelect>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-3 control-label\" for=\"substitute\">\r\n                Fächer als Vertreter\r\n            </label>\r\n            <div class=\"col-md-9\">\r\n                <p-multiSelect id=\"substitute\" [options]=\"availableSubjects\" [(ngModel)]=\"substitute\" defaultLabel=\"Bitte auswählen\" selectedItemsLabel=\"{0} Fächer ausgewählt\"></p-multiSelect>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div class=\"col-sm-9 col-md-10 col-md-offset-1 main\">\r\n    <div class=\"form-group\">\r\n        <div class=\"col-md-8\">\r\n            <button class=\"btn btn-danger\" (click)=\"goBack()\">Abbrechen</button>\r\n            <button class=\"btn btn-success\" (click)=\"save(usersettings)\">Speichern</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/usersettings/usersettings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authentification_service__ = __webpack_require__("../../../../../src/app/services/authentification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersettingsComponent = (function () {
    function UsersettingsComponent(userService, authenticationService, location, router) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.location = location;
        this.router = router;
        this.availableSubjects = [
            { value: "01", label: "Allgemeines" },
            { value: "04", label: "Sprach- und Literaturwissenschaften" },
            { value: "07", label: "Germanistik" },
            { value: "10", label: "Anglistik" },
            { value: "13", label: "Romanistik" },
            { value: "16", label: "sonstige Philologien" },
            { value: "19", label: "Philosophie" },
            { value: "22", label: "Psychologie" },
            { value: "25", label: "Erziehungswissenschaften" },
            { value: "28", label: "Theologie" },
            { value: "31", label: "Autoren GW" },
            { value: "34", label: "Kunstwissenschaften" },
            { value: "34", label: "Medienwissenschaften" },
            { value: "37", label: "Sportwissenschaften" },
            { value: "40", label: "Geschichte" },
            { value: "43", label: "Geowissenschaften" },
            { value: "46a", label: "Sozialwissenschaften" },
            { value: "46b", label: "Soziologie" },
            { value: "46c", label: "Politikwissenschaften" },
            { value: "49", label: "Wirtschaftswissenschaften" },
            { value: "52", label: "Rechtswissenscahften" },
            { value: "55", label: "Land- und Forstwissenschaften" },
            { value: "58", label: "Naturwissenschaften" },
            { value: "61", label: "Mathematik" },
            { value: "64", label: "Informatik" },
            { value: "67", label: "Physik" },
            { value: "70", label: "Chemie" },
            { value: "73", label: "Astronomie" },
            { value: "75", label: "Biologie" },
            { value: "77", label: "Medizin" },
            { value: "79", label: "Technik allgemein" },
            { value: "82", label: "Bauingenieurwesen" },
            { value: "85", label: "Maschinenbau" },
            { value: "88", label: "Elektrotechnik" },
            { value: "91", label: "Sonstige Gebiete der Technik" },
            { value: "94", label: "Turkistik" },
            { value: "99", label: "Sonderstandorte" }
        ];
    }
    UsersettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.get(this.authenticationService.principal.name).subscribe(function (data) {
            _this.usersettings = data;
            _this.subjects = _this.usersettings.subjects;
            _this.substitute = _this.usersettings.substitute;
        });
    };
    UsersettingsComponent.prototype.goBack = function () {
        this.location.back();
    };
    UsersettingsComponent.prototype.save = function (usersettings) {
        var _this = this;
        this.usersettings.subjects = this.subjects;
        this.usersettings.substitute = this.substitute;
        this.userService.create(usersettings).subscribe(function (data) { return _this.router.navigate(['/start']); });
    };
    UsersettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'usersettings',
            template: __webpack_require__("../../../../../src/app/usersettings/usersettings.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__services_authentification_service__["a" /* AuthentificationService */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]])
    ], UsersettingsComponent);
    return UsersettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/usersettings/usersettings.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersettingsModule", function() { return UsersettingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usersettings_component__ = __webpack_require__("../../../../../src/app/usersettings/usersettings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__usersettings_routing__ = __webpack_require__("../../../../../src/app/usersettings/usersettings.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_password_change_component__ = __webpack_require__("../../../../../src/app/usersettings/user.password.change.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UsersettingsModule = (function () {
    function UsersettingsModule() {
    }
    UsersettingsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["SpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["MultiSelectModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["PasswordModule"],
                __WEBPACK_IMPORTED_MODULE_6__usersettings_routing__["a" /* usersettingsRouting */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__usersettings_component__["a" /* UsersettingsComponent */], __WEBPACK_IMPORTED_MODULE_7__user_password_change_component__["a" /* UserPasswordChangeComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__usersettings_component__["a" /* UsersettingsComponent */], __WEBPACK_IMPORTED_MODULE_7__user_password_change_component__["a" /* UserPasswordChangeComponent */]],
            providers: []
        })
    ], UsersettingsModule);
    return UsersettingsModule;
}());



/***/ }),

/***/ "../../../../../src/app/usersettings/usersettings.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usersettingsRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__usersettings_component__ = __webpack_require__("../../../../../src/app/usersettings/usersettings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_password_change_component__ = __webpack_require__("../../../../../src/app/usersettings/user.password.change.component.ts");



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__usersettings_component__["a" /* UsersettingsComponent */] },
    { path: 'passwordchange', component: __WEBPACK_IMPORTED_MODULE_2__user_password_change_component__["a" /* UserPasswordChangeComponent */] }
];
var usersettingsRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ })

});
//# sourceMappingURL=usersettings.module.chunk.js.map