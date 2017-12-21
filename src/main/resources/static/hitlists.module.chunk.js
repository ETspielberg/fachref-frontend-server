webpackJsonp(["hitlists.module"],{

/***/ "../../../../../src/app/hitlists/alertcontrol.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    <div class=\"container\">\r\n        <h1>Hitlisten</h1>\r\n        <p>Die am stärksten vorgemerkten Titel je Bereich</p>\r\n        <span class=\"links\">\r\n\t\t\t\t<button class=\"btn btn-primary\" [routerLink]=\"['hitlist', 'newAlertcontrol']\">Neues Profil erstellen</button>\r\n\t\t\t\t</span>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"alertcontrols\" class=\"container\">\r\n    <h2 class=\"sub-header\">Profile</h2>\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n            <tr>\r\n                <th>\r\n                    Name\r\n                </th>\r\n                <th>\r\n                    Bereich\r\n                </th>\r\n                <th>\r\n                    Schwelle Verhältnis\r\n                </th>\r\n                <th>\r\n                    Schwelle Anzahl\r\n                </th>\r\n                <th>\r\n                    Schwelle Vormerkungen\r\n                </th>\r\n                <th>\r\n                    zur Hitliste\r\n                </th>\r\n                <th>\r\n                    Bearbeiten\r\n                </th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let d of alertcontrols\">\r\n                <th>\r\n                    {{d.description}}\r\n                </th>\r\n                <th>\r\n                    {{d.notationgroup}}\r\n                </th>\r\n                <th>\r\n                    {{d.thresholdRatio}}\r\n                </th>\r\n                <th>\r\n                    {{d.thresholdRequests}}\r\n                </th>\r\n                <th>\r\n                    {{d.thresholdDuration}}\r\n                </th>\r\n                <th>\r\n                    <span class=\"links\">\r\n\t\t\t\t        <a class=\"btn btn-sm btn-success\" [routerLink]=\"['nrequests', d.identifier]\"\r\n                            role=\"button\" target=\"popup\">Ansehen</a>\r\n\t\t\t</span>\r\n\r\n                </th>\r\n                <th>\r\n                    <span class=\"links\">\r\n                        <button class=\"btn btn-sm btn-warning\"\r\n                                [routerLink]=\"['hitlist', d.identifier]\"> Bearbeiten </button>\r\n\t\t\t        </span>\r\n                    <span class=\"links\">\r\n                        <button class=\"btn btn-sm btn-danger\" (click)=\"deleteAlertcontrol(d); $event.stopPropagation()\"> Löschen </button>\r\n\t\t\t        </span>\r\n                </th>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/hitlists/alertcontrol.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertcontrolComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alertcontrol_service__ = __webpack_require__("../../../../../src/app/services/alertcontrol.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertcontrolComponent = (function () {
    function AlertcontrolComponent(alertcontrolService, router) {
        this.alertcontrolService = alertcontrolService;
        this.router = router;
    }
    AlertcontrolComponent.prototype.ngOnInit = function () {
        this.getAlertcontrols();
    };
    AlertcontrolComponent.prototype.getAlertcontrols = function () {
        var _this = this;
        this.alertcontrolService.getAllForUsername().subscribe(function (data) { return _this.alertcontrols = data; }, function (error) { return _this.errorMessage = error; });
    };
    AlertcontrolComponent.prototype.deleteAlertcontrol = function (alertcontrol) {
        var _this = this;
        this.alertcontrolService.deleteAlertcontrol(alertcontrol.identifier).subscribe(function () {
            _this.alertcontrols = _this.alertcontrols.filter(function (ac) { return ac != alertcontrol; });
        });
        this.router.navigate(['/hitlists']);
    };
    AlertcontrolComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'profiles',
            template: __webpack_require__("../../../../../src/app/hitlists/alertcontrol.component.html"),
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_alertcontrol_service__["a" /* AlertcontrolService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], AlertcontrolComponent);
    return AlertcontrolComponent;
}());



/***/ }),

/***/ "../../../../../src/app/hitlists/alertcontrol.editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"alertcontrol\" class=\"conatiner\">\r\n<div class=\"jumbotron\">\r\n    <div class=\"container\">\r\n        <h1><input [(ngModel)]=\"alertcontrol.description\" placeholder=\"name\" style=\"border: none\"/></h1>\r\n        <p>Alle Titel mit Vormerkungen werden täglich in eine Datenbank eingetragen. Anhand der Profile kann ein einzelnes Fachgebiet für die Darstellung ausgewählt werden und die Darstellung auf jene einträge beschränkt werden, die vorgegebene Schwellenwerte überschreiten.</p>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div >\r\n    <div class=\"col-md-12\">\r\n        <h2 class=\"sub-header\">Angaben zum Bereich</h2>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"subjectID\">\r\n                Fach:\r\n            </label>\r\n            <div class=\"col-md-8\">\r\n                <select id=\"subjectID\" [(ngModel)]=\"alertcontrol.notationgroup\" class=\"form-control\">\r\n                    <option value=\"00\">Systemstellenanalyse</option>\r\n                    <option value=\"01\">Allgemeines</option>\r\n                    <option value=\"04\">Sprach- und Literaturwissenschaften\r\n                    </option>\r\n                    <option value=\"07\">Germanistik</option>\r\n                    <option value=\"10\">Anglistik</option>\r\n                    <option value=\"13\">Romanistik</option>\r\n                    <option value=\"16\">sonstige Philologien</option>\r\n                    <option value=\"19\">Philosophie</option>\r\n                    <option value=\"22\">Psychologie</option>\r\n                    <option value=\"25\">Erziehungswissenschaften</option>\r\n                    <option value=\"28\">Theologie</option>\r\n                    <option value=\"31\">Autoren GW</option>\r\n                    <option value=\"34\">Kunstwissenschaften</option>\r\n                    <option value=\"34a\">Medienwissenschaften</option>\r\n                    <option value=\"37\">Sportwissenschaften</option>\r\n                    <option value=\"40\">Geschichte</option>\r\n                    <option value=\"43\">Geowissenschaften</option>\r\n                    <option value=\"46a\">Sozialwissenschaften </option>\r\n                    <option value=\"46b\">Soziologie </option>\r\n                    <option value=\"46c\">Politikwissenschaften </option>\r\n                    <option value=\"49\">Wirtschaftswissenschaften </option>\r\n                    <option value=\"52\">Rechtswissenscahften </option>\r\n                    <option value=\"55\">Land- und Forstwissenschaften</option>\r\n                    <option value=\"58\">Naturwissenschaften</option>\r\n                    <option value=\"61\">Mathematik </option>\r\n                    <option value=\"64\">Informatik </option>\r\n                    <option value=\"67\">Physik </option>\r\n                    <option value=\"70\">Chemie </option>\r\n                    <option value=\"73\">Astronomie </option>\r\n                    <option value=\"75\">Biologie </option>\r\n                    <option value=\"77\">Fachbibliothek Medizin</option>\r\n                    <option value=\"77a\">Medizin </option>\r\n                    <option value=\"79\">Technik allgemein</option>\r\n                    <option value=\"82\">Bauingenieurwesen </option>\r\n                    <option value=\"85\">Maschinenbau</option>\r\n                    <option value=\"88\">Elektrotechnik </option>\r\n                    <option value=\"91\">Sonstige Gebiete der Technik </option>\r\n                    <option value=\"94\">Turkistik </option>\r\n                    <option value=\"99\">Sonderstandorte</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <h2 class=\"sub-header\">Grenzwerte</h2>\r\n        <p>Mittels der folgenden Filter können Grenzen für die abzurufenden Einträge gesetzt werden.</p>\r\n        <div class=\"form-group\">\r\n        <label class=\"col-md-4 control-label\" for=\"thresholdRatio\">\r\n            Verhältnis:\r\n        </label>\r\n        <div class=\"col-md-8\">\r\n            <input id=\"thresholdRatio\" placeholder=\"z.B. 5\"\r\n                   class=\"form-control input-md \" [(ngModel)]=\"alertcontrol.thresholdRatio\" type=\"number\" required/>\r\n        </div>\r\n        <label class=\"col-md-4 control-label\" for=\"thresholdNrequests\">\r\n            Anzahl Vormerkungen:\r\n        </label>\r\n        <div class=\"col-md-8\">\r\n            <input id=\"thresholdNrequests\" placeholder=\"z.B. 5\"\r\n                   class=\"form-control input-md \" [(ngModel)]=\"alertcontrol.thresholdRequests\" type=\"number\" required/>\r\n        </div>\r\n        <label class=\"col-md-4 control-label\" for=\"thresholdDuration\">\r\n            Durchschnittliche Dauer der Vormerkungen:\r\n        </label>\r\n        <div class=\"col-md-8\">\r\n            <input id=\"thresholdDuration\" placeholder=\"z.B. 5\"\r\n                   class=\"form-control input-md \" [(ngModel)]=\"alertcontrol.thresholdDuration\" type=\"number\" required/>\r\n        </div>\r\n        </div>\r\n        <h2 class=\"sub-header\">Zeitraum</h2>\r\n        <p>Außerdem wird eine Anzahl an Tagen angegeben, für die Einträge abgerufen werden (von heute an rückwärts gezählt).</p>\r\n        <div class=\"form-group\">\r\n        <label class=\"col-md-4 control-label\" for=\"timeperiod\">\r\n            Tage:\r\n        </label>\r\n        <div class=\"col-md-8\">\r\n            <input id=\"timeperiod\" placeholder=\"z.B. 5\"\r\n                   class=\"form-control input-md \" [(ngModel)]=\"alertcontrol.timeperiod\" type=\"number\" required/>\r\n        </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n    <div class=\"col-md-12\">\r\n        <div class=\"form-group\">\r\n    <button class=\"btn btn-danger\" (click)=\"goBack()\">Abbrechen</button>\r\n    <button class=\"btn btn-success\" (click)=\"save(alertcontrol)\">Speichern</button>\r\n        </div>\r\n    </div>\r\n\r\n<div class=\"col-md-12\">\r\n    <h2>Freigaben</h2>\r\n    Folgende Nutzer können zusätzlichauf das Profil zugreifen:\r\n    <ul>\r\n        <li *ngFor=\"let su of stockcontrolUsers\">\r\n            {{su.username}}\r\n            <button *ngIf=\"su.username != user.getName()\" (click)=\"deleteStockcontrolUser(su)\">X</button>\r\n        </li>\r\n        <li>\r\n            <form>\r\n                <input #username placeholder=\"username\" style=\"border: none\"/>\r\n                <button (click)=\"addStockcontrolUser(username.value)\">Hinzufügen</button>\r\n            </form>\r\n        </li>\r\n    </ul>\r\n\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/hitlists/alertcontrol.editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertcontrolEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alertcontrol_service__ = __webpack_require__("../../../../../src/app/services/alertcontrol.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_profilesperuser_service__ = __webpack_require__("../../../../../src/app/services/profilesperuser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_ProfilePerUser__ = __webpack_require__("../../../../../src/app/model/ProfilePerUser.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AlertcontrolEditorComponent = (function () {
    function AlertcontrolEditorComponent(alertcontrolService, route, location, router, profilePerUserService) {
        this.alertcontrolService = alertcontrolService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.profilePerUserService = profilePerUserService;
    }
    AlertcontrolEditorComponent.prototype.ngOnInit = function () {
        this.update();
    };
    AlertcontrolEditorComponent.prototype.update = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.alertcontrolService.getAlertcontrol(params['identifier']); })
            .subscribe(function (alertcontrol) { return _this.alertcontrol = alertcontrol; });
        console.log('queried alertcontrol ' + this.alertcontrol.identifier);
    };
    AlertcontrolEditorComponent.prototype.goBack = function () {
        this.location.back();
    };
    AlertcontrolEditorComponent.prototype.save = function (alertcontrol) {
        if (alertcontrol.identifier == 'newAlertcontrol') {
            this.alertcontrolService.create(alertcontrol).subscribe(function (res) { return alertcontrol = res; });
        }
        else {
            this.alertcontrolService.update(alertcontrol).subscribe(function (res) { return alertcontrol = res; });
        }
        this.router.navigate(['/hitlists']);
    };
    AlertcontrolEditorComponent.prototype.addStockcontrolUser = function (username) {
        var profilePerUser = new __WEBPACK_IMPORTED_MODULE_6__model_ProfilePerUser__["a" /* ProfilePerUser */](this.alertcontrol.identifier, username);
        this.profilePerUserService.addProfilePerUsers(profilePerUser).subscribe(function (data) { return profilePerUser = data; });
        this.profilePerUser.push(profilePerUser);
    };
    AlertcontrolEditorComponent.prototype.deleteStockcontrolUser = function (profilePerUser) {
        var _this = this;
        if (profilePerUser.id != null) {
            this.profilePerUserService.deleteProfilePerUsers(profilePerUser.id).subscribe(function () {
                _this.profilePerUser = _this.profilePerUser.filter(function (scu) { return scu != profilePerUser; });
            });
        }
        else {
            console.log('no id given');
        }
    };
    AlertcontrolEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'stockcontrol-editor',
            template: __webpack_require__("../../../../../src/app/hitlists/alertcontrol.editor.component.html"),
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_alertcontrol_service__["a" /* AlertcontrolService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_5__services_profilesperuser_service__["a" /* ProfilesPerUserService */]])
    ], AlertcontrolEditorComponent);
    return AlertcontrolEditorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/hitlists/hitlists.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HitlistsModule", function() { return HitlistsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nrequests_component__ = __webpack_require__("../../../../../src/app/hitlists/nrequests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alertcontrol_component__ = __webpack_require__("../../../../../src/app/hitlists/alertcontrol.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_alertcontrol_service__ = __webpack_require__("../../../../../src/app/services/alertcontrol.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_nrequests_service__ = __webpack_require__("../../../../../src/app/services/nrequests.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__hitlists_routing__ = __webpack_require__("../../../../../src/app/hitlists/hitlists.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__alertcontrol_editor_component__ = __webpack_require__("../../../../../src/app/hitlists/alertcontrol.editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var HitlistsModule = (function () {
    function HitlistsModule() {
    }
    HitlistsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["ToggleButtonModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["SpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["InputSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_8__hitlists_routing__["a" /* hitlistsRouting */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__nrequests_component__["a" /* NrequestsComponent */], __WEBPACK_IMPORTED_MODULE_4__alertcontrol_component__["a" /* AlertcontrolComponent */], __WEBPACK_IMPORTED_MODULE_9__alertcontrol_editor_component__["a" /* AlertcontrolEditorComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__nrequests_component__["a" /* NrequestsComponent */], __WEBPACK_IMPORTED_MODULE_4__alertcontrol_component__["a" /* AlertcontrolComponent */], __WEBPACK_IMPORTED_MODULE_9__alertcontrol_editor_component__["a" /* AlertcontrolEditorComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_alertcontrol_service__["a" /* AlertcontrolService */], __WEBPACK_IMPORTED_MODULE_6__services_nrequests_service__["a" /* NrequestsService */]]
        })
    ], HitlistsModule);
    return HitlistsModule;
}());



/***/ }),

/***/ "../../../../../src/app/hitlists/hitlists.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hitlistsRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alertcontrol_component__ = __webpack_require__("../../../../../src/app/hitlists/alertcontrol.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alertcontrol_editor_component__ = __webpack_require__("../../../../../src/app/hitlists/alertcontrol.editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nrequests_component__ = __webpack_require__("../../../../../src/app/hitlists/nrequests.component.ts");




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__alertcontrol_component__["a" /* AlertcontrolComponent */] },
    { path: 'hitlist/:identifier', component: __WEBPACK_IMPORTED_MODULE_2__alertcontrol_editor_component__["a" /* AlertcontrolEditorComponent */] },
    { path: 'nrequests/:identifier', component: __WEBPACK_IMPORTED_MODULE_3__nrequests_component__["a" /* NrequestsComponent */] },
];
var hitlistsRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ "../../../../../src/app/hitlists/nrequests.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    <div class=\"container\">\r\n        <h1>Hitlisten</h1>\r\n        <p>Die am stärksten vorgemerkten Titel je Bereich</p>\r\n        <span class=\"links\">\r\n\t\t\t\t<button class=\"btn btn-primary\" [routerLink]=\"['/hitlist', 'newAlertcontrol']\">Neues Profil erstellen</button>\r\n\t\t\t\t</span>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <h2>Hitliste</h2>\r\n    <p *ngIf=\"alertcontrol\"> für das Profil: {{alertcontrol.description}}</p>\r\n    <p-dataTable #dt [value]=\"nrequestss\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[10,20,50]\">\r\n        <p-column field=\"shelfmark\" header=\"Signatur\" [sortable]=\"true\"></p-column>\r\n        <p-column field=\"ratio\" header=\"Verhältnis\" [sortable]=\"true\">\r\n            <ng-template let-col let-nrequests=\"rowData\" pTemplate=\"body\">\r\n                {{nrequests.ratio | percent:'1.0-1'}}\r\n            </ng-template>\r\n        </p-column>\r\n        <p-column field=\"NRequests\" header=\"Vormerkungen\" [sortable]=\"true\"></p-column>\r\n        <p-column field=\"NLoans\" header=\"Ausleihen\" [sortable]=\"true\"></p-column>\r\n        <p-column field=\"NItems\" header=\"Exemplare\" [sortable]=\"true\"></p-column>\r\n        <p-column field=\"NLendable\" header=\"ausl. Exemplare\" [sortable]=\"true\"></p-column>\r\n    </p-dataTable>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/hitlists/nrequests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NrequestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_nrequests_service__ = __webpack_require__("../../../../../src/app/services/nrequests.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alertcontrol_service__ = __webpack_require__("../../../../../src/app/services/alertcontrol.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notationgroup_service__ = __webpack_require__("../../../../../src/app/services/notationgroup.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NrequestsComponent = (function () {
    function NrequestsComponent(nrequestsService, route, alertcontrolService, notationgroupService) {
        this.nrequestsService = nrequestsService;
        this.route = route;
        this.alertcontrolService = alertcontrolService;
        this.notationgroupService = notationgroupService;
    }
    NrequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.identifier = params['identifier']; });
        if (this.identifier == 'all') {
            this.getAllNrequests();
        }
        else {
            var busy = this.alertcontrolService.getAlertcontrol(this.identifier).toPromise().then(function (alertcontrol) { return _this.alertcontrol = alertcontrol; });
            var busyTwo = busy.then(function (alertcontrol) { return _this.notationgroupService.get(_this.alertcontrol.notationgroup).toPromise().then(function (notationgroup) { return _this.notationgroup = notationgroup; }); });
            busyTwo.then(function (notationgroup) { return _this.nrequestsService.getAllForRange(_this.notationgroup.notationsStart, _this.notationgroup.notationsEnd).subscribe(function (data) { return _this.nrequestss = data; }, function (error) { return _this.errorMessage = error; }); });
        }
    };
    NrequestsComponent.prototype.getAllNrequests = function () {
        var _this = this;
        this.nrequestsService.getAll().subscribe(function (data) { return _this.nrequestss = data; }, function (error) { return _this.errorMessage = error; });
    };
    NrequestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'nrequests',
            template: __webpack_require__("../../../../../src/app/hitlists/nrequests.component.html"),
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_nrequests_service__["a" /* NrequestsService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__services_alertcontrol_service__["a" /* AlertcontrolService */],
            __WEBPACK_IMPORTED_MODULE_4__services_notationgroup_service__["a" /* NotationgroupService */]])
    ], NrequestsComponent);
    return NrequestsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/alertcontrol.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertcontrolService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_ProfilePerUser__ = __webpack_require__("../../../../../src/app/model/ProfilePerUser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_globals__ = __webpack_require__("../../../../../src/app/app.globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authentification_service__ = __webpack_require__("../../../../../src/app/services/authentification.service.ts");
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







var AlertcontrolService = (function () {
    function AlertcontrolService(http, authentificationService) {
        this.http = http;
        this.authentificationService = authentificationService;
        this.alertcontrolUrl = __WEBPACK_IMPORTED_MODULE_5__app_globals__["i" /* settingsUrl */] + '/alertcontrol';
        this.profilePerUserUrl = __WEBPACK_IMPORTED_MODULE_5__app_globals__["i" /* settingsUrl */] + '/profilesperuser';
    }
    AlertcontrolService.prototype.getAll = function () {
        return this.http.get(this.alertcontrolUrl);
    };
    AlertcontrolService.prototype.getAllForUsername = function () {
        this.username = this.authentificationService.principal.name;
        return this.http.get(this.alertcontrolUrl + '/search/findByUsername?username=' + this.username)
            .map(function (response) { return response['_embedded']['alertcontrol']; });
    };
    AlertcontrolService.prototype.getAlertcontrol = function (identifier) {
        var url = this.alertcontrolUrl + "/" + identifier;
        console.log('querying url ' + url);
        return this.http.get(url);
    };
    AlertcontrolService.prototype.deleteAlertcontrol = function (identifier) {
        return this.http.delete(this.alertcontrolUrl + '/' + identifier, { headers: __WEBPACK_IMPORTED_MODULE_5__app_globals__["f" /* headers */] });
    };
    AlertcontrolService.prototype.create = function (alertcontrol) {
        alertcontrol.identifier = alertcontrol.notationgroup + '_' + Date.now();
        var profilePerUser = new __WEBPACK_IMPORTED_MODULE_3__model_ProfilePerUser__["a" /* ProfilePerUser */](alertcontrol.identifier, this.authentificationService.principal.name);
        var response = this.http
            .post(this.alertcontrolUrl, JSON.stringify(alertcontrol), { headers: __WEBPACK_IMPORTED_MODULE_5__app_globals__["f" /* headers */] });
        this.http
            .post(this.profilePerUserUrl, JSON.stringify(profilePerUser), { headers: __WEBPACK_IMPORTED_MODULE_5__app_globals__["f" /* headers */] })
            .toPromise().then(function (data) { return console.log("saved stockcontrolUser" + data); });
        return response;
    };
    AlertcontrolService.prototype.update = function (alertcontrol) {
        var url = this.alertcontrolUrl + "/" + alertcontrol.identifier;
        return this.http
            .put(url, JSON.stringify(alertcontrol), { headers: __WEBPACK_IMPORTED_MODULE_5__app_globals__["f" /* headers */] });
    };
    AlertcontrolService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_6__authentification_service__["a" /* AuthentificationService */]])
    ], AlertcontrolService);
    return AlertcontrolService;
}());



/***/ }),

/***/ "../../../../../src/app/services/nrequests.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NrequestsService; });
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



var NrequestsService = (function () {
    function NrequestsService(http) {
        this.http = http;
        this.nrequestsUrl = __WEBPACK_IMPORTED_MODULE_2__app_globals__["b" /* dataUrl */] + '/nrequests';
    }
    NrequestsService.prototype.getAll = function () {
        return this.http.get(this.nrequestsUrl);
    };
    NrequestsService.prototype.getAllForRange = function (startNotation, endNotation) {
        var url = this.nrequestsUrl + '/search/getNrequestsForNotationgroup?startNotation=' + startNotation + "&endNotation=" + endNotation;
        return this.http.get(url);
    };
    NrequestsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], NrequestsService);
    return NrequestsService;
}());



/***/ })

});
//# sourceMappingURL=hitlists.module.chunk.js.map