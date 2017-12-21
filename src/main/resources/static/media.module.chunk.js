webpackJsonp(["media.module"],{

/***/ "../../../../../src/app/media/collection.management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    <div class=\"container\">\r\n        <h1>Verfügbare Pakete</h1>\r\n        <p>In der EZB verzeichnete Pakete</p>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <div class=\"table-responsive\">\r\n        <table *ngIf=\"journalCollections\" id=\"sortableTable\" class=\"table table-striped\">\r\n            <thead>\r\n            <tr>\r\n                <th>\r\n                    Name\r\n                </th>\r\n                <th>\r\n                    Beschreibung\r\n                </th>\r\n                <th>\r\n                    Preis\r\n                </th>\r\n                <th>\r\n                    Aktionen\r\n                </th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let journalCollection of journalCollections\" >\r\n                <th>\r\n                    {{journalCollection.anchor}}\r\n                </th>\r\n                <th>\r\n                    {{journalCollection.description}}\r\n                </th>\r\n                <th>\r\n                    {{journalCollection.price}}\r\n                </th>\r\n                <th>\r\n\t\t\t\t<span class=\"links\">\r\n\t\t\t\t\t<a class=\"btn btn-sm btn-success\" [routerLink]=\"['journalUsage',journalCollection.anchor]\"\r\n                       href=\"{$WebApplicationBaseURL}fachref/journals/journalUsage?issn={$anchor}\"\r\n                       role=\"button\" target=\"popup\">Zur Nutzung</a>\r\n\t\t\t\t</span>\r\n                    <span class=\"links\">\r\n\t\t\t\t\t<button class=\"btn btn-sm btn-primary\"\r\n                            [routerLink]=\"['journalTitleManagement',journalCollection.anchor]\">Zum Paketinhalt</button>\r\n\t\t\t\t</span>\r\n                    <span class=\"links\">\r\n\t\t\t\t\t<button class=\"btn btn-sm btn-alert\" onclick=\"deleteCollection(journalCollection)\">Löschen</button>\r\n\t\t\t\t</span>\r\n                </th>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/media/collection.management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_journal_collection_service__ = __webpack_require__("../../../../../src/app/services/journal.collection.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CollectionManagementComponent = (function () {
    function CollectionManagementComponent(journalCollectionService) {
        this.journalCollectionService = journalCollectionService;
    }
    CollectionManagementComponent.prototype.ngOnInit = function () {
        this.getAllCollections();
    };
    CollectionManagementComponent.prototype.getAllCollections = function () {
        var _this = this;
        this.journalCollectionService.getAll().subscribe(function (res) { return _this.journalCollections = res; });
    };
    CollectionManagementComponent.prototype.deleteCollection = function (journalCollection) {
        this.journalCollectionService.deleteJournalcollection(journalCollection.id);
    };
    CollectionManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'journalCollections',
            template: __webpack_require__("../../../../../src/app/media/collection.management.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_journal_collection_service__["a" /* JournalCollectionService */]])
    ], CollectionManagementComponent);
    return CollectionManagementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/media/media.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\r\n<div class=\"jumbotron\">\r\n    <div class=\"container\">\r\n        <h1>e-Medien</h1> <br />\r\n        <p> Nutzung, Lizenzen, Pakete und Metriken</p>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <table class=\"table table-hover\">\r\n        <tbody>\r\n        <tr>\r\n            <td>\r\n                <h4>Jahre ausdehnen</h4>\r\n            </td>\r\n            <td>\r\n                <p>Erweitert den intialen Upload auf den verfügbaren Zeitbereich.</p>\r\n            </td>\r\n            <td>\r\n                <a class=\"btn btn-success\" href=\"eMedia/yearExtender\" role=\"button\">Starten &#187;</a>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                <h4>Preise hinzufügen</h4>\r\n            </td>\r\n            <td>\r\n                <p>Fügt die Preise für Pakete und Zeitschriften hinzu.</p>\r\n            </td>\r\n            <td>\r\n                <a class=\"btn btn-success\" href=\"eMedia/priceExtender\" role=\"button\">Starten &#187;</a>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                <h4>SNIP hinzufügen</h4>\r\n            </td>\r\n            <td>\r\n                <p>Fügt den Source Normalized Impact per Paper (SNIP) hinzu.</p>\r\n            </td>\r\n            <td>\r\n                <a class=\"btn btn-success\" href=\"eMedia/snipExtender\" role=\"button\">Starten &#187;</a>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                <h4>Sushi-Accounts</h4>\r\n            </td>\r\n            <td>\r\n                <p>Management von SUSHI-Accounts.</p>\r\n            </td>\r\n            <td>\r\n                <button class=\"btn btn-success\" [routerLink]=\"['sushi']\">Starten &#187;</button>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                <h4>Verteilung berechnen</h4>\r\n            </td>\r\n            <td>\r\n                <p>Berechnet die Verteilung von Nutzungen auf die Fächer.</p>\r\n            </td>\r\n            <td>\r\n                <a class=\"btn btn-success\" href=\"eMedia/subjectDistributor\" role=\"button\">Startem &#187;</a>\r\n            </td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n    <div class=\"row\">\r\n        <div  class=\"col-md-12 main\">\r\n            <h2>EZB-Datei-Upload</h2>\r\n            <p-fileUpload name=\"file\" url=\"http://localhost:11855/files?module=ezbUpload\" (onUpload)=\"onUpload($event)\"\r\n                          accept=\"text/*\" maxFileSize=\"100000000\">\r\n            </p-fileUpload>\r\n            <table *ngIf=\"files\" class=\"table table-hover\">\r\n                <tbody>\r\n                <tr *ngFor=\"let file of files\">\r\n                    <td>\r\n                        {{file.filename}}\r\n                    </td>\r\n                    <td>\r\n                        <a [href]=\"file.link\" >Ansehen</a>\r\n                    </td>\r\n                    <td>\r\n                        <button class=\"btn btn-danger\" (click)=\"runEzbAnalyzer(file)\" >Einträge erzeugen</button>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/media/media.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MediaComponent = (function () {
    function MediaComponent(http, fileService) {
        this.http = http;
        this.fileService = fileService;
        this.uploadedFiles = [];
    }
    MediaComponent.prototype.ngOnInit = function () {
        this.getAllFiles();
    };
    MediaComponent.prototype.getAllFiles = function () {
        var _this = this;
        this.fileService.listAllFiles("ezbUpload").subscribe(function (res) { return _this.files = res; });
    };
    MediaComponent.prototype.runEzbAnalyzer = function (file) {
        var url = 'http://localhost:11844/run/ezbAnalyzer?filename=' + file.filename;
        this.http.get(url).subscribe();
    };
    MediaComponent.prototype.onUpload = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.uploadedFiles.push(file);
        }
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
    };
    MediaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'media',
            template: __webpack_require__("../../../../../src/app/media/media.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__services_file_service__["a" /* FileService */]])
    ], MediaComponent);
    return MediaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/media/media.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaModule", function() { return MediaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__media_component__ = __webpack_require__("../../../../../src/app/media/media.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__media_routing__ = __webpack_require__("../../../../../src/app/media/media.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sushi_component__ = __webpack_require__("../../../../../src/app/media/sushi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sushi_editor_component__ = __webpack_require__("../../../../../src/app/media/sushi.editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_journal_collection_service__ = __webpack_require__("../../../../../src/app/services/journal.collection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_journal_service__ = __webpack_require__("../../../../../src/app/services/journal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_journal_title_service__ = __webpack_require__("../../../../../src/app/services/journal.title.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__collection_management_component__ = __webpack_require__("../../../../../src/app/media/collection.management.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var MediaModule = (function () {
    function MediaModule() {
    }
    MediaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_5__media_routing__["a" /* mediaRouting */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__media_component__["a" /* MediaComponent */], __WEBPACK_IMPORTED_MODULE_6__sushi_component__["a" /* SushiComponent */], __WEBPACK_IMPORTED_MODULE_7__sushi_editor_component__["a" /* SushiEditorComponent */], __WEBPACK_IMPORTED_MODULE_15__collection_management_component__["a" /* CollectionManagementComponent */]],
            exports: [],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_11__services_file_service__["a" /* FileService */], __WEBPACK_IMPORTED_MODULE_12__services_journal_collection_service__["a" /* JournalCollectionService */], __WEBPACK_IMPORTED_MODULE_13__services_journal_service__["a" /* JournalService */], __WEBPACK_IMPORTED_MODULE_14__services_journal_title_service__["a" /* JournalTitleService */]]
        })
    ], MediaModule);
    return MediaModule;
}());



/***/ }),

/***/ "../../../../../src/app/media/media.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mediaRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__media_component__ = __webpack_require__("../../../../../src/app/media/media.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sushi_component__ = __webpack_require__("../../../../../src/app/media/sushi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sushi_editor_component__ = __webpack_require__("../../../../../src/app/media/sushi.editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__collection_management_component__ = __webpack_require__("../../../../../src/app/media/collection.management.component.ts");





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__media_component__["a" /* MediaComponent */] },
    { path: 'sushi', component: __WEBPACK_IMPORTED_MODULE_2__sushi_component__["a" /* SushiComponent */] },
    { path: 'sushi/sushiprovider/:identifier', component: __WEBPACK_IMPORTED_MODULE_3__sushi_editor_component__["a" /* SushiEditorComponent */] },
    { path: 'journalcollections', component: __WEBPACK_IMPORTED_MODULE_4__collection_management_component__["a" /* CollectionManagementComponent */] }
];
var mediaRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ "../../../../../src/app/media/sushi.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    <div class=\"container\">\r\n        <h1 >SUSHI Accounts</h1>\r\n        <p>Eingerichtete SUSHI-Provider.</p>\r\n        <p><a class=\"btn btn btn-primary\" [routerLink]=\"['sushiprovider','newSushiprovider']\" role=\"button\">Neues Profil erstellen</a>\r\n        </p>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <div class=\"table-responsive\">\r\n    <table class=\"table table-striped\">\r\n        <thead>\r\n        <tr>\r\n            <th>\r\n                Name\r\n            </th>\r\n            <th>\r\n                SUSHI-URL\r\n            </th>\r\n            <th>\r\n                RequestorID\r\n            </th>\r\n            <th>\r\n                Customer Reference ID\r\n            </th>\r\n            <th>\r\n                Aktionen\r\n            </th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let sushiprovider of sushiproviders\">\r\n            <th>\r\n                {{sushiprovider.name}}\r\n            </th>\r\n            <th>\r\n                {{sushiprovider.sushiURL}}\r\n            </th>\r\n            <th>\r\n                {{sushiprovider.sushiRequestorID}}\r\n            </th>\r\n            <th>\r\n                {{sushiprovider.sushiCustomerReferenceID}}\r\n            </th>\r\n            <th>\r\n                <button class=\"btn btn-sm btn-danger\" (click)=\"deleteSushiprovider(sushiprovider)\"> Löschen </button>\r\n                <button class=\"btn btn-sm btn-warning\" [routerLink]=\"['sushi', sushiprovider.name]\"> Bearbeiten </button>\r\n                <button class=\"btn btn-sm btn-primary\" (click)=\"collectSushiData(sushiprovider)\"> Daten abrufen </button>\r\n            </th>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/media/sushi.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SushiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sushiprovider_service__ = __webpack_require__("../../../../../src/app/services/sushiprovider.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_globals__ = __webpack_require__("../../../../../src/app/app.globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SushiComponent = (function () {
    function SushiComponent(sushiproviderService, router, http) {
        this.sushiproviderService = sushiproviderService;
        this.router = router;
        this.http = http;
        this.reportTypes = [
            { value: "JR1", label: "Journal Report 1" },
            { value: "BR1", label: "Book Report 1" },
            { value: "BR2", label: "Book Report 2" },
            { value: "PR1", label: "Plattform Report 1" }
        ];
    }
    SushiComponent.prototype.ngOnInit = function () {
        this.getSushiproviders();
    };
    SushiComponent.prototype.getSushiproviders = function () {
        var _this = this;
        this.sushiproviderService.getAll().subscribe(function (data) { return _this.sushiproviders = data.filter(function (sc) { return sc.identifier != 'newSushiprovider'; }); });
    };
    SushiComponent.prototype.deleteSushiprovider = function (sushiprovider) {
        var _this = this;
        this.sushiproviderService.deleteSushiprovider(sushiprovider.identifier).subscribe(function () {
            _this.sushiproviders = _this.sushiproviders.filter(function (sc) { return sc != sushiprovider; });
        });
        this.router.navigate(['/media/sushi']);
    };
    SushiComponent.prototype.collectSushiData = function (sushiprovider) {
        this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_globals__["a" /* batchUrl */] + "/sushi?identifier=" + sushiprovider.identifier + "&type=" + this.selectedReport + "&mode=initialize").subscribe(function (res) { return console.log(res); });
    };
    SushiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sushi',
            template: __webpack_require__("../../../../../src/app/media/sushi.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_sushiprovider_service__["a" /* SushiproviderService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_sushiprovider_service__["a" /* SushiproviderService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], SushiComponent);
    return SushiComponent;
}());



/***/ }),

/***/ "../../../../../src/app/media/sushi.editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    <div class=\"container\">\r\n        <h1>Publisher - SUSHI-Angaben</h1>\r\n        <p>In diesem Formular werde die wesentlichen Parameter angegeben,\r\n            um über Nutzungsdaten über die SUSHI-Schnittstelle abzurufen</p>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"sushiprovider\" class=\"container\">\r\n    <div class=\"col-md-12\">\r\n    <h2 class=\"sub-header\">Notwendige Angaben</h2>\r\n    <div class=\"row\">\r\n        <div class=\"form-group col-md-6\">\r\n            <label class=\"col-md-4 control-label\" for=\"name\">Name des\r\n                Verlags</label>\r\n            <div class=\"col-md-6\">\r\n                <input id=\"name\" [(ngModel)]=\"sushiprovider.name\" placeholder=\"Name\"\r\n                       class=\"form-control input-md\" required=\"\" type=\"text\"> <span\r\n                    class=\"help-block\">Ein eindeutiger Name des Verlages</span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\">\r\n            <label class=\"col-md-4 control-label\" for=\"sushiURL\">SUSHI\r\n                URL</label>\r\n            <div class=\"col-md-6\">\r\n                <input id=\"sushiURL\" [(ngModel)]=\"sushiprovider.sushiURL\" placeholder=\"test\"\r\n                       class=\"form-control input-md\" required=\"\" type=\"text\"> <span\r\n                    class=\"help-block\">Die URL, die vom Verlag für SUSHI\r\n\t\t\t\t\t\t\tangegeben wird</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"form-group col-md-6\">\r\n            <label class=\"col-md-4 control-label\" for=\"sushiRequestorID\">Requestor\r\n                ID</label>\r\n            <div class=\"col-md-6\">\r\n                <input id=\"sushiRequestorID\" [(ngModel)]=\"sushiprovider.sushiRequestorID\"\r\n                       placeholder=\"Requestor ID\" class=\"form-control input-md\"\r\n                       type=\"text\"> <span class=\"help-block\">Die ID der\r\n\t\t\t\t\t\t\tanfragenden Person</span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\">\r\n            <label class=\"col-md-4 control-label\"\r\n                   for=\"sushiCustomerReferenceID\">Customer ID</label>\r\n            <div class=\"col-md-6\">\r\n                <input id=\"sushiCustomerReferenceID\"\r\n                       [(ngModel)]=\"sushiprovider.sushiCustomerReferenceID\" placeholder=\"Customer ID\"\r\n                       class=\"form-control input-md\" required=\"\" type=\"text\"> <span\r\n                    class=\"help-block\">Die ID der Institution</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <h2 class=\"sub-header\">Optionale Angaben</h2>\r\n    <div class=\"row\">\r\n        <div class=\"form-group col-md-6\">\r\n            <label class=\"col-md-4 control-label\" for=\"sushiRequestorName\">Requestor\r\n                Name</label>\r\n            <div class=\"col-md-6\">\r\n                <input id=\"sushiRequestorName\" [(ngModel)]=\"sushiprovider.sushiRequestorName\"\r\n                       placeholder=\"Requestor Name\" class=\"form-control input-md\"\r\n                       type=\"text\"> <span class=\"help-block\">Der Name der\r\n\t\t\t\t\t\t\tanfragenden Person</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n            <label class=\"col-md-4 control-label\" for=\"sushiRequestorEmail\">Requestor\r\n                E-Mail</label>\r\n            <div class=\"col-md-6\">\r\n                <input id=\"sushiRequestorEmail\" [(ngModel)]=\"sushiprovider.sushiRequestorEmail\"\r\n                       placeholder=\"Requestor E-Mail\" class=\"form-control input-md\"\r\n                       type=\"text\"> <span class=\"help-block\">Die E-Mail\r\n\t\t\t\t\t\t\tder anfragenden Person</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"form-group col-md-6\">\r\n            <label class=\"col-md-4 control-label\"\r\n                   for=\"sushiCustomerReferenceName\">Customer Name</label>\r\n            <div class=\"col-md-6\">\r\n                <input id=\"sushiCustomerReferenceName\"\r\n                       [(ngModel)]=\"sushiprovider.sushiCustomerReferenceName\" placeholder=\"Customer Name\"\r\n                       class=\"form-control input-md\" type=\"text\"> <span\r\n                    class=\"help-block\">Der Name der Institution</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n            <label class=\"col-md-4 control-label\" for=\"sushiRelease\">SUSHI\r\n                Release version</label>\r\n            <div class=\"col-md-6\">\r\n                <select id=\"sushiRelease\" [(ngModel)]=\"sushiprovider.sushiRelease\"\r\n                        class=\"form-control input-md\">\r\n                    <option>4</option>\r\n                    <option>3</option>\r\n                    <option>2</option>\r\n                    <option>1</option>\r\n                </select> <span class=\"help-block\">Das SUSHI-Release</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n<!-- Button (Double) -->\r\n<div class=\"container\">\r\n    <button id=\"submit\" (click)=\"save(sushiprovider)\" class=\"btn btn-success\">Speichern</button>\r\n    <button id=\"cancel\" (click)=\"goBack()\" class=\"btn btn-danger\">Abbrechen</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/media/sushi.editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SushiEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sushiprovider_service__ = __webpack_require__("../../../../../src/app/services/sushiprovider.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SushiEditorComponent = (function () {
    function SushiEditorComponent(sushiproviderService, route, location, router) {
        this.sushiproviderService = sushiproviderService;
        this.route = route;
        this.location = location;
        this.router = router;
    }
    SushiEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.sushiproviderService.getSushiprovider(params['identifier']); })
            .subscribe(function (sushiprovider) { return _this.sushiprovider = sushiprovider; });
    };
    SushiEditorComponent.prototype.goBack = function () {
        this.location.back();
    };
    SushiEditorComponent.prototype.save = function (sushiprovider) {
        var _this = this;
        if (sushiprovider.identifier == 'newSushiprovider') {
            this.sushiproviderService.create(sushiprovider).subscribe(function (data) { return _this.sushiprovider = data; });
        }
        else {
            this.sushiproviderService.update(sushiprovider);
        }
        this.router.navigate(['/media/sushi']);
    };
    SushiEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sushiprovider-editor',
            template: __webpack_require__("../../../../../src/app/media/sushi.editor.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_sushiprovider_service__["a" /* SushiproviderService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_sushiprovider_service__["a" /* SushiproviderService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], SushiEditorComponent);
    return SushiEditorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
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



var FileService = (function () {
    function FileService(http) {
        this.http = http;
    }
    FileService.prototype.listAllFiles = function (module) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_globals__["c" /* filesUrl */] + '?module=' + module);
    };
    FileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "../../../../../src/app/services/journal.collection.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JournalCollectionService; });
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



var JournalCollectionService = (function () {
    function JournalCollectionService(http) {
        this.http = http;
        this.journalcollectionUrl = __WEBPACK_IMPORTED_MODULE_2__app_globals__["h" /* resourcesUrl */] + '/journalcollection';
    }
    JournalCollectionService.prototype.getAll = function () {
        return this.http.get(this.journalcollectionUrl);
    };
    JournalCollectionService.prototype.deleteJournalcollection = function (id) {
        var url = this.journalcollectionUrl + '/' + id;
        return this.http.delete(url, { headers: __WEBPACK_IMPORTED_MODULE_2__app_globals__["f" /* headers */] });
    };
    JournalCollectionService.prototype.create = function (journalCollection) {
        return this.http
            .post(this.journalcollectionUrl, JSON.stringify(journalCollection), { headers: __WEBPACK_IMPORTED_MODULE_2__app_globals__["f" /* headers */] });
    };
    JournalCollectionService.prototype.update = function (journalCollection) {
        var url = this.journalcollectionUrl + "/" + journalCollection.id;
        return this.http
            .put(url, JSON.stringify(journalCollection), { headers: __WEBPACK_IMPORTED_MODULE_2__app_globals__["f" /* headers */] });
    };
    JournalCollectionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], JournalCollectionService);
    return JournalCollectionService;
}());



/***/ }),

/***/ "../../../../../src/app/services/journal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JournalService; });
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



var JournalService = (function () {
    function JournalService(http) {
        this.http = http;
        this.journalUrl = __WEBPACK_IMPORTED_MODULE_2__app_globals__["h" /* resourcesUrl */] + '/journal';
    }
    JournalService.prototype.getAll = function () {
        return this.http.get(this.journalUrl);
    };
    JournalService.prototype.deleteJournal = function (id) {
        var url = this.journalUrl + '/' + id;
        return this.http.delete(url, { headers: __WEBPACK_IMPORTED_MODULE_2__app_globals__["f" /* headers */] });
    };
    JournalService.prototype.create = function (journal) {
        return this.http
            .post(this.journalUrl, JSON.stringify(journal), { headers: __WEBPACK_IMPORTED_MODULE_2__app_globals__["f" /* headers */] });
    };
    JournalService.prototype.update = function (journal) {
        var url = this.journalUrl + "/" + journal.id;
        return this.http
            .put(url, JSON.stringify(journal), { headers: __WEBPACK_IMPORTED_MODULE_2__app_globals__["f" /* headers */] });
    };
    JournalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], JournalService);
    return JournalService;
}());



/***/ }),

/***/ "../../../../../src/app/services/journal.title.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JournalTitleService; });
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



var JournalTitleService = (function () {
    function JournalTitleService(http) {
        this.http = http;
        this.journaltitlenUrl = __WEBPACK_IMPORTED_MODULE_2__app_globals__["h" /* resourcesUrl */] + '/journaltitle';
    }
    JournalTitleService.prototype.getAll = function () {
        return this.http.get(this.journaltitlenUrl);
    };
    JournalTitleService.prototype.deleteJournaltitle = function (id) {
        var url = this.journaltitlenUrl + '/' + id;
        return this.http.delete(url, { headers: __WEBPACK_IMPORTED_MODULE_2__app_globals__["f" /* headers */] });
    };
    JournalTitleService.prototype.create = function (journalTitle) {
        return this.http
            .post(this.journaltitlenUrl, JSON.stringify(journalTitle), { headers: __WEBPACK_IMPORTED_MODULE_2__app_globals__["f" /* headers */] });
    };
    JournalTitleService.prototype.update = function (journalTitle) {
        var url = this.journaltitlenUrl + "/" + journalTitle.id;
        return this.http
            .put(url, JSON.stringify(journalTitle), { headers: __WEBPACK_IMPORTED_MODULE_2__app_globals__["f" /* headers */] });
    };
    JournalTitleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], JournalTitleService);
    return JournalTitleService;
}());



/***/ }),

/***/ "../../../../../src/app/services/sushiprovider.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SushiproviderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_globals__ = __webpack_require__("../../../../../src/app/app.globals.ts");
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





var SushiproviderService = (function () {
    function SushiproviderService(http) {
        this.http = http;
        this.sushiproviderUrl = __WEBPACK_IMPORTED_MODULE_4__app_globals__["i" /* settingsUrl */] + '/sushiprovider';
    }
    SushiproviderService.prototype.getAll = function () {
        return this.http.get(this.sushiproviderUrl);
    };
    SushiproviderService.prototype.getSushiprovider = function (identifier) {
        var url = this.sushiproviderUrl + "/" + identifier;
        return this.http.get(url);
    };
    SushiproviderService.prototype.deleteSushiprovider = function (identifier) {
        var url = this.sushiproviderUrl + '/' + identifier;
        return this.http.delete(url, { headers: __WEBPACK_IMPORTED_MODULE_4__app_globals__["f" /* headers */] });
    };
    SushiproviderService.prototype.create = function (sushiprovider) {
        return this.http
            .post(this.sushiproviderUrl, JSON.stringify(sushiprovider), { headers: __WEBPACK_IMPORTED_MODULE_4__app_globals__["f" /* headers */] });
    };
    SushiproviderService.prototype.update = function (sushiprovider) {
        var url = this.sushiproviderUrl + "/" + sushiprovider.identifier;
        return this.http
            .put(url, JSON.stringify(sushiprovider), { headers: __WEBPACK_IMPORTED_MODULE_4__app_globals__["f" /* headers */] });
    };
    SushiproviderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], SushiproviderService);
    return SushiproviderService;
}());



/***/ })

});
//# sourceMappingURL=media.module.chunk.js.map