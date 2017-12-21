webpackJsonp(["profiles.module"],{

/***/ "../../../../../src/app/model/Ignored.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ignored; });
var Ignored = (function () {
    function Ignored(titleId, identifier, shelfmark, type, comment, mab, date, expire) {
        this.titleId = titleId;
        this.identifier = identifier;
        this.shelfmark = shelfmark;
        this.type = type;
        this.comment = comment;
        this.mab = mab;
        this.date = date;
        this.expire = expire;
    }
    return Ignored;
}());



/***/ }),

/***/ "../../../../../src/app/profiles/blacklist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    <div class=\"container\">\r\n        <h1>Blacklist</h1>\r\n        <p>Diese Titel sind von der weiteren Analyse und Aussonderung\r\n            ausgeschlossen:</p>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"blacklist\" class=\"container\">\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n            <tr>\r\n                <th>\r\n                    Signatur\r\n                </th>\r\n                <th>\r\n                    Kommentar\r\n                </th>\r\n                <th>\r\n                    Datum Aufnahme\r\n                </th>\r\n                <th>\r\n                    Datum Ende\r\n                </th>\r\n                <th>\r\n                    Löschen\r\n                </th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let i of blacklist\">\r\n                <th>\r\n                    {{i.shelfmark}}\r\n                </th>\r\n                <th>\r\n                    {{i.mab}}\r\n                </th>\r\n                <th>\r\n                    {{i.date}}\r\n                </th>\r\n                <th>\r\n                    {{i.expire}}\r\n                </th>\r\n                <th>\r\n                    {{i.comment}}\r\n                </th>\r\n                <th>\r\n\t\t\t\t<span class=\"links\">\r\n\t\t\t\t\t<button (click)=\"deleteIgnored(i); $event.stopPropagation()\"></button>\r\n\t\t\t\t</span>\r\n                </th>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/profiles/blacklist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlacklistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ignored_service__ = __webpack_require__("../../../../../src/app/services/ignored.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlacklistComponent = (function () {
    function BlacklistComponent(ignoredService) {
        this.ignoredService = ignoredService;
    }
    BlacklistComponent.prototype.ngOnInit = function () {
        this.getBlacklist();
    };
    BlacklistComponent.prototype.getBlacklist = function () {
        var _this = this;
        this.ignoredService.getAll().subscribe(function (data) { return _this.blacklist = data; });
    };
    BlacklistComponent.prototype.deleteIgnored = function (ignored) {
        var _this = this;
        this.ignoredService.deleteIgnored(ignored.identifier).subscribe(function () {
            _this.blacklist.filter(function (ig) { return ig != ignored; });
        });
    };
    BlacklistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'blacklist',
            template: __webpack_require__("../../../../../src/app/profiles/blacklist.component.html"),
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_ignored_service__["a" /* IgnoredService */]])
    ], BlacklistComponent);
    return BlacklistComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profiles/eventanalysis.component.html":
/***/ (function(module, exports) {

module.exports = "<p-dialog header=\"Erweiterter Eintrag\" [(visible)]=\"display\" modal=\"modal\" width=\"300\" [responsive]=\"true\">\r\n    <p-calendar [(ngModel)]=\"ignored.expire\" dateFormat=\"@\" [yearNavigator]=\"true\" yearRange=\"2015:2050\"></p-calendar>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" (click)=\"display=false\" label=\"Yes\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" (click)=\"display=false\" label=\"No\"></button>\r\n    </p-footer>\r\n</p-dialog>\r\n<div class=\"jumbotron\">\r\n    <div class=\"container\">\r\n        <h1>Aussonderungsvorschläge</h1>\r\n        <p>\r\n            <button type=\"button\" pButton class=\"ui-button-success\" label=\"Zur Blacklist\"></button>\r\n            <button type=\"button\" (click)=\"saveStatus()\" pButton class=\"ui-button-success\" label=\"Zustand speichern\"></button>\r\n        </p>\r\n        <p>Liste anzeigen :<p-selectButton [options]=\"listOptions\" [(ngModel)]=\"selectedList\"></p-selectButton></p>\r\n        <p>Analysen ohne Aussonderungsvorschlag anzeigen: <p-inputSwitch (onChange)=\"reloadAllAnalyses()\" onLabel=\"Ja\" offLabel=\"Nein\" [(ngModel)]=\"showAllAnalyses\"></p-inputSwitch></p>\r\n    </div>\r\n    <p-dialog header=\"Erweiterter Eintrag\" [(visible)]=\"display\" modal=\"modal\" width=\"500\" [responsive]=\"true\">\r\n        <textarea [(ngModel)]=\"ignored.comment\" pInputTextarea autoResize=\"autoResize\"></textarea>\r\n        <p-calendar [(ngModel)]=\"ignored.expire\" [yearNavigator]=\"true\" dateFormat=\"@\" yearRange=\"2015:2030\"></p-calendar>\r\n        <p-footer>\r\n            <button type=\"button\" pButton icon=\"fa-check\" (click)=\"saveIgnored()\" label=\"Yes\"></button>\r\n            <button type=\"button\" pButton icon=\"fa-close\" (click)=\"display=false\" label=\"No\"></button>\r\n        </p-footer>\r\n    </p-dialog>\r\n</div>\r\n<div  *ngIf=\"sortedEventanalysis[selectedList]; else message\" class=\"container-fluid\">\r\n    <p-dataTable #dt [value]=\"sortedEventanalysis[selectedList]\" expandableRows=\"true\" sortMode=\"multiple\" [editable]=\"true\">\r\n        <p-header>\r\n            <div class=\"ui-helper-clearfix\">\r\n                <button type=\"button\" pButton icon=\"fa-file-o\" iconPos=\"left\" label=\"Export csv\" (click)=\"dt.exportCSV()\" style=\"float:left\"></button>\r\n            </div>\r\n        </p-header>\r\n        <p-column expander=\"true\" styleClass=\"col-icon\" header=\"Infos\"></p-column>\r\n        <p-column field=\"shelfmark\" header=\"Signatur\" [filter]=\"true\" filterPlaceholder=\"Filter\" [sortable]=\"true\"></p-column>\r\n         <p-column header=\"Protokoll\">\r\n        <ng-template let-eventanalyse=\"rowData\" pTemplate=\"body\">\r\n            <a class=\"search\" type=\"button\" href=\"/protokoll?shelfmark={{eventanalyse.shelfmark}}&amp;collections={{eventanalyse.collection}}&amp;exact=\"\r\n               target=\"popup\">Link</a>\r\n        </ng-template>\r\n        </p-column>\r\n        <p-column field=\"meanRelativeLoan\" header=\"Mittlere Ausleihe\" [sortable]=\"true\">\r\n            <ng-template let-col let-eventanalyse=\"rowData\" pTemplate=\"body\">\r\n                {{eventanalyse.meanRelativeLoan | percent:'1.0-1'}}\r\n            </ng-template>\r\n        </p-column>\r\n        <p-column field=\"slope\" header=\"Trend / Jahr\" [sortable]=\"true\">\r\n            <ng-template let-col let-eventanalyse=\"rowData\" pTemplate=\"body\">\r\n                {{eventanalyse.slope | number}}\r\n            </ng-template>\r\n        </p-column>\r\n        <p-column field=\"lastStock\" header=\"Bestand\" [sortable]=\"true\"></p-column>\r\n        <p-column field=\"maxLoansAbs\" header=\"maximale Ausleihe\" [sortable]=\"true\"></p-column>\r\n        <p-column field=\"proposedDeletion\" header=\"Vorschlag\" [sortable]=\"true\" [editable]=\"true\">\r\n        <ng-template let-col let-eventanalyse=\"rowData\" pTemplate=\"editor\">\r\n            <p-spinner size=\"30\" [(ngModel)]=\"eventanalyse[col.field]\" [min]=\"0\"></p-spinner>\r\n        </ng-template>\r\n        </p-column>\r\n        <p-column field=\"comment\" header=\"Kommentar\" [filter]=\"true\" filterPlaceholder=\"Filter\" [editable]=\"true\">\r\n            <ng-template let-col let-eventanalyse=\"rowData\" pTemplate=\"editor\" autoResize=\"autoResize\">\r\n                <textarea pInputTextarea [(ngModel)]=\"eventanalyse[col.field]\"></textarea>\r\n            </ng-template>\r\n        </p-column>\r\n\r\n        <p-column header=\"Aktion\">\r\n        <ng-template let-eventanalyse=\"rowData\" pTemplate=\"body\">\r\n            <button *ngIf=\"selectedList=='proposed'\" type=\"button\" (click)=\"toBlacklist(eventanalyse)\" pButton class=\"ui-button-success\" label=\"Ignorieren\"></button>\r\n            <button *ngIf=\"selectedList=='ignored'\" type=\"button\" (click)=\"showDialog(eventanalyse)\" pButton class=\"ui-button-success\" label=\"Erweitert\"></button>\r\n            <button *ngIf=\"selectedList!='proposed'\" type=\"button\" (click)=\"toProposal(eventanalyse)\" pButton class=\"ui-button-success\" label=\"Auf die Liste\"></button>\r\n            <button *ngIf=\"selectedList=='proposed'\" type=\"button\" (click)=\"toRepository(eventanalyse)\" pButton class=\"ui-button-warning\" label=\"Umstellen\"></button>\r\n            <button *ngIf=\"selectedList=='proposed'\" type=\"button\" (click)=\"delete(eventanalyse)\" pButton class=\"ui-button-danger\" label=\"Aussondern\"></button>\r\n        </ng-template>\r\n        </p-column>\r\n        <ng-template let-eventanalyse pTemplate=\"rowexpansion\">\r\n            <div class=\"ui-grid ui-grid-responsive ui-fluid\" style=\"font-size:16px;padding:20px\">\r\n                <div class=\"ui-grid-row\">\r\n                    <div class=\"ui-grid-col-3\" style=\"text-align:center\">\r\n                        {{eventanalyse.collection}} : {{eventanalyse.shelfmark}}\r\n                    </div>\r\n                    <div class=\"ui-grid-col-3\" style=\"text-align:center\">\r\n                        {{eventanalyse.mab}}\r\n                    </div>\r\n                    <div class=\"ui-grid-col-3\" style=\"text-align:center\">\r\n                        <a href=\"/protokoll?shelfmark={{eventanalyse.shelfmark}}&amp;collections={{eventanalyse.collection}}&amp;exact=\"\r\n                           target=\"popup\">Link</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n    </p-dataTable>\r\n</div>\r\n\r\n<ng-template #message><div class=\"col-md-6 col-md-offset-2\">Keine einträge gefunden.</div></ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/profiles/eventanalysis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventanalysisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_eventanalysis_service__ = __webpack_require__("../../../../../src/app/services/eventanalysis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ignored_service__ = __webpack_require__("../../../../../src/app/services/ignored.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_Ignored__ = __webpack_require__("../../../../../src/app/model/Ignored.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_stockcontrol_service__ = __webpack_require__("../../../../../src/app/services/stockcontrol.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EventanalysisComponent = (function () {
    function EventanalysisComponent(eventanalysisService, router, route, ignoredService, stockcontrolService) {
        this.eventanalysisService = eventanalysisService;
        this.router = router;
        this.route = route;
        this.ignoredService = ignoredService;
        this.stockcontrolService = stockcontrolService;
    }
    EventanalysisComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showAllAnalyses = false;
        this.threshold = 1;
        this.eventanalyses = [];
        this.listOptions = [];
        this.route.params.subscribe(function (params) { return _this.identifier = params['identifier']; });
        this.sortedEventanalysis = new Map();
        this.resetIgnored();
        this.stockcontrolService.getStockcontrol(this.identifier).map(function (stockcontrol) { return _this.stockcontrol = stockcontrol; });
        this.busy = this.eventanalysisService.getAllForStockcontrolWiththreshold(this.identifier, this.threshold).toPromise().then(function (eventanalyses) { return _this.eventanalyses = eventanalyses; });
        this.busy.then(function (eventanalyses) { return _this.sortEventanalyses(); });
        this.selectedList = 'proposed';
    };
    EventanalysisComponent.prototype.reloadAllAnalyses = function () {
        var _this = this;
        this.busy = this.eventanalysisService.getAllForStockcontrol(this.identifier).toPromise().then(function (eventanalyses) { return _this.eventanalyses = eventanalyses; });
        this.busy.then(function (eventanalyses) { return _this.sortEventanalyses(); });
    };
    EventanalysisComponent.prototype.sortEventanalyses = function () {
        this.listOptions = [];
        var allOptions = new Set();
        this.sortedEventanalysis = new Map();
        for (var _i = 0, _a = this.eventanalyses; _i < _a.length; _i++) {
            var eventanalysis = _a[_i];
            if (eventanalysis.proposedDeletion == 0 && !this.showAllAnalyses) {
                continue;
            }
            var eventanalysesInd = [];
            var category = eventanalysis.status;
            if (allOptions.has(category)) {
                eventanalysesInd = this.sortedEventanalysis[eventanalysis.status];
            }
            else {
                allOptions.add(category);
            }
            eventanalysesInd.push(eventanalysis);
            this.sortedEventanalysis[eventanalysis.status] = eventanalysesInd;
        }
        var listOptions = Array.from(allOptions);
        for (var _b = 0, listOptions_1 = listOptions; _b < listOptions_1.length; _b++) {
            var listOption = listOptions_1[_b];
            var entry = { label: listOption, value: listOption };
            this.listOptions.push(entry);
        }
    };
    EventanalysisComponent.prototype.showDialog = function (eventanalysis) {
        this.display = true;
        this.transferInformation(eventanalysis);
        this.ignored.type = 'deletion';
        eventanalysis.status = 'ignored';
    };
    EventanalysisComponent.prototype.resetIgnored = function () {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();
        this.ignored = new __WEBPACK_IMPORTED_MODULE_4__model_Ignored__["a" /* Ignored */]("", "", "", "", "", "", new Date(), new Date(year + 2, month, day));
    };
    EventanalysisComponent.prototype.toBlacklistStandard = function (eventanalysis) {
        this.resetIgnored();
        this.transferInformation(eventanalysis);
        //this.ignoredService.create(this.ignored);
        eventanalysis.status = 'ignored';
        this.saveIgnored();
    };
    EventanalysisComponent.prototype.transferInformation = function (eventanalysis) {
        this.ignored.shelfmark = eventanalysis.shelfmark;
        this.ignored.identifier = this.stockcontrol.identifier;
        this.ignored.titleId = eventanalysis.titleId;
        this.ignored.mab = eventanalysis.mab;
    };
    EventanalysisComponent.prototype.saveIgnored = function () {
        console.log(this.ignored);
        this.display = false;
        this.sortEventanalyses();
    };
    EventanalysisComponent.prototype.delete = function (eventanalysis) {
        eventanalysis.status = 'deletion';
        this.sortEventanalyses();
    };
    EventanalysisComponent.prototype.toRepository = function (eventanalysis) {
        eventanalysis.status = 'repository';
        this.sortEventanalyses();
    };
    EventanalysisComponent.prototype.toBlacklist = function (eventanalysis) {
        eventanalysis.status = 'ignored';
        this.sortEventanalyses();
    };
    EventanalysisComponent.prototype.toProposal = function (eventanalysis) {
        eventanalysis.status = 'proposed';
        this.sortEventanalyses();
    };
    EventanalysisComponent.prototype.saveStatus = function () {
        for (var _i = 0, _a = this.eventanalyses; _i < _a.length; _i++) {
            var eventanalysis = _a[_i];
            this.eventanalysisService.update(eventanalysis);
        }
    };
    EventanalysisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'eventanalysis',
            template: __webpack_require__("../../../../../src/app/profiles/eventanalysis.component.html"),
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_eventanalysis_service__["a" /* EventanalysisService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__services_ignored_service__["a" /* IgnoredService */],
            __WEBPACK_IMPORTED_MODULE_5__services_stockcontrol_service__["a" /* StockcontrolService */]])
    ], EventanalysisComponent);
    return EventanalysisComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profiles/profiles.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesModule", function() { return ProfilesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profiles_routing__ = __webpack_require__("../../../../../src/app/profiles/profiles.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stockcontrol_component__ = __webpack_require__("../../../../../src/app/profiles/stockcontrol.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stockcontrol_editor_component__ = __webpack_require__("../../../../../src/app/profiles/stockcontrol.editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__eventanalysis_component__ = __webpack_require__("../../../../../src/app/profiles/eventanalysis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_stockcontrol_service__ = __webpack_require__("../../../../../src/app/services/stockcontrol.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_eventanalysis_service__ = __webpack_require__("../../../../../src/app/services/eventanalysis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__blacklist_component__ = __webpack_require__("../../../../../src/app/profiles/blacklist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_ignored_service__ = __webpack_require__("../../../../../src/app/services/ignored.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_profilesperuser_service__ = __webpack_require__("../../../../../src/app/services/profilesperuser.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ProfilesModule = (function () {
    function ProfilesModule() {
    }
    ProfilesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ToggleButtonModule"],
                __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["SpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["TabMenuModule"],
                __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["SelectButtonModule"],
                __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["InputSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_5__profiles_routing__["a" /* profilesRouting */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__stockcontrol_component__["a" /* StockcontrolComponent */], __WEBPACK_IMPORTED_MODULE_7__stockcontrol_editor_component__["a" /* StockcontrolEditorComponent */], __WEBPACK_IMPORTED_MODULE_8__eventanalysis_component__["a" /* EventanalysisComponent */], __WEBPACK_IMPORTED_MODULE_11__blacklist_component__["a" /* BlacklistComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_6__stockcontrol_component__["a" /* StockcontrolComponent */], __WEBPACK_IMPORTED_MODULE_7__stockcontrol_editor_component__["a" /* StockcontrolEditorComponent */], __WEBPACK_IMPORTED_MODULE_8__eventanalysis_component__["a" /* EventanalysisComponent */], __WEBPACK_IMPORTED_MODULE_11__blacklist_component__["a" /* BlacklistComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_stockcontrol_service__["a" /* StockcontrolService */], __WEBPACK_IMPORTED_MODULE_10__services_eventanalysis_service__["a" /* EventanalysisService */], __WEBPACK_IMPORTED_MODULE_12__services_ignored_service__["a" /* IgnoredService */], __WEBPACK_IMPORTED_MODULE_13__services_profilesperuser_service__["a" /* ProfilesPerUserService */]]
        })
    ], ProfilesModule);
    return ProfilesModule;
}());



/***/ }),

/***/ "../../../../../src/app/profiles/profiles.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return profilesRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stockcontrol_component__ = __webpack_require__("../../../../../src/app/profiles/stockcontrol.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stockcontrol_editor_component__ = __webpack_require__("../../../../../src/app/profiles/stockcontrol.editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eventanalysis_component__ = __webpack_require__("../../../../../src/app/profiles/eventanalysis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blacklist_component__ = __webpack_require__("../../../../../src/app/profiles/blacklist.component.ts");





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__stockcontrol_component__["a" /* StockcontrolComponent */] },
    { path: 'profile/:identifier', component: __WEBPACK_IMPORTED_MODULE_2__stockcontrol_editor_component__["a" /* StockcontrolEditorComponent */] },
    { path: 'eventanalysis/:identifier', component: __WEBPACK_IMPORTED_MODULE_3__eventanalysis_component__["a" /* EventanalysisComponent */] },
    { path: 'blacklist', component: __WEBPACK_IMPORTED_MODULE_4__blacklist_component__["a" /* BlacklistComponent */] }
];
var profilesRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ "../../../../../src/app/profiles/stockcontrol.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    <div class=\"container\">\r\n        <h1>Profile</h1>\r\n        <p>Individuelle Bestandspflege für jeden Fachbereich</p>\r\n        <span class=\"links\">\r\n\t\t\t\t<button class=\"btn btn-primary\" [routerLink]=\"['profile', 'newProfile']\">Neues Profil erstellen</button>\r\n\t\t\t\t</span>\r\n        <span class=\"links\">\r\n\t\t\t\t<a class=\"btn btn-success\" [routerLink]=\"blacklist\" target=\"popup\">Zur Blacklist</a>\r\n\t\t\t\t</span>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"stockcontrols\" class=\"container\">\r\n    <h2 class=\"sub-header\">Profile für das Fachreferat</h2>\r\n    <p>Weiß hinterlegte Profile wurden neu erstellt, bisher aber noch nicht ausgeführt. Bei rot hinterlegten läuf die Analyse gerade. Für grün hinterlegte iost die Analyse abgeschlossen und die Aussonderungslisten stehen bereit.</p>\r\n    <button pButton (click)=\"getStockcontrols()\" label=\"Refresh\" icon=\"fa-refresh\">    </button>\r\n  <div class=\"table-responsive\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n            <tr>\r\n                <th>\r\n                    Beschreibung\r\n                </th>\r\n                <th>\r\n                    Aussonderungsvorschlag\r\n                </th>\r\n                <th>\r\n                    Ausführen/bearbeiten/löschen\r\n                </th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let d of stockcontrols\"\r\n                [ngClass]=\"{danger: (d.status=='RUNNING'),success:(d.status=='FINISHED')}\">\r\n                <th>\r\n                    {{d.description}}\r\n                </th>\r\n                <th>\r\n\r\n\t\t\t<span class=\"links\">\r\n\t\t\t\t<a class=\"btn btn-sm btn-success\" [routerLink]=\"['eventanalysis', d.identifier]\"\r\n                   role=\"button\" target=\"popup\"\r\n                   [attr.disabled]=\"d.status!='FINISHED' ? 'disabled' : null\">zur Liste</a>\r\n\t\t\t</span>\r\n                </th>\r\n                <th>\r\n\t\t\t<span class=\"links\">\r\n                <button class=\"btn btn-sm btn-primary\" (click)=\"runStockcontrol(d)\"> Ausführen </button>\r\n\t\t\t</span>\r\n                    <span class=\"links\">\r\n                        <button class=\"btn btn-sm btn-warning\"\r\n                                [routerLink]=\"['profile', d.identifier]\"> Bearbeiten </button>\r\n\t\t\t        </span>\r\n                    <span class=\"links\">\r\n                        <button class=\"btn btn-sm btn-danger\" (click)=\"deleteStockcontrol(d); $event.stopPropagation()\"> Löschen </button>\r\n\t\t\t        </span>\r\n                </th>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n<!--\r\n<div class=\"container\">\r\n    <h2 class=\"sub-header\">hochgeladene csv-Dateien</h2>\r\n\r\n    <div class=\"col-md-4 main\">\r\n        <form action=\"csvUpload\" method=\"post\" class=\"dropzone\" enctype=\"multipart/form-data\" />\r\n    </div>\r\n</div>\r\n-->\r\n"

/***/ }),

/***/ "../../../../../src/app/profiles/stockcontrol.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockcontrolComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_stockcontrol_service__ = __webpack_require__("../../../../../src/app/services/stockcontrol.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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





var StockcontrolComponent = (function () {
    function StockcontrolComponent(stockcontrolService, router, _http) {
        this.stockcontrolService = stockcontrolService;
        this.router = router;
        this._http = _http;
    }
    StockcontrolComponent.prototype.ngOnInit = function () {
        this.getStockcontrols();
    };
    StockcontrolComponent.prototype.getStockcontrols = function () {
        var _this = this;
        this.stockcontrolService.getAllForUsername().subscribe(function (data) { return _this.stockcontrols = data; });
    };
    StockcontrolComponent.prototype.deleteStockcontrol = function (stockcontrol) {
        var _this = this;
        this.stockcontrolService.deleteStockcontrol(stockcontrol.identifier).subscribe(function () {
            _this.stockcontrols = _this.stockcontrols.filter(function (sc) { return sc != stockcontrol; });
        });
        this.router.navigate(['/profiles']);
    };
    StockcontrolComponent.prototype.runStockcontrol = function (stockcontrol) {
        this._http.get(__WEBPACK_IMPORTED_MODULE_4__app_globals__["a" /* batchUrl */] + "/eventanalyzer?identifier=" + stockcontrol.identifier);
    };
    StockcontrolComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'profiles',
            template: __webpack_require__("../../../../../src/app/profiles/stockcontrol.component.html"),
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_stockcontrol_service__["a" /* StockcontrolService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], StockcontrolComponent);
    return StockcontrolComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profiles/stockcontrol.editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"stockcontrol\">\r\n    <div class=\"jumbotron\">\r\n        <div class=\"container\">\r\n        <h1><input [(ngModel)]=\"stockcontrol.description\" placeholder=\"name\" style=\"border: none\"/></h1>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n    <h2 class=\"sub-header\">Angaben zum Bereich</h2>\r\n    <p> Dieser Abschnitt umfasst die notwendigen Angaben zum\r\n        Fachbereich und der Medienart, die untersucht werden soll.\r\n    </p>\r\n    <p> Wird explizit eine Systemstelle angegeben, so erfolgt die\r\n        Analyse nur für diese. Soll die Analyse für die ganze Fachgruppe\r\n        durchgeführt werden, bleibt das Feld leer.\r\n    </p>\r\n    <p>\r\n        Ähnlich wie beim Ausleihprotokoll können Einschränkungen\r\n        hinsichtlich der Standorte vorgenommen werden. Dabei gelten die\r\n        gleichen.\r\n    </p>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"subjectID\">\r\n                Fach:\r\n            </label>\r\n            <div class=\"col-md-5\">\r\n                <select id=\"subjectID\" [(ngModel)]=\"stockcontrol.subjectID\" class=\"form-control\">\r\n                    <option value=\"00\">Systemstellenanalyse</option>\r\n                    <option value=\"01\">Allgemeines</option>\r\n                    <option value=\"04\">Sprach- und Literaturwissenschaften\r\n                    </option>\r\n                    <option value=\"07\">Germanistik</option>\r\n                    <option value=\"10\">Anglistik</option>\r\n                    <option value=\"13\">Romanistik</option>\r\n                    <option value=\"16\">sonstige Philologien</option>\r\n                    <option value=\"19\">Philosophie</option>\r\n                    <option value=\"22\">Psychologie</option>\r\n                    <option value=\"25\">Erziehungswissenschaften</option>\r\n                    <option value=\"28\">Theologie</option>\r\n                    <option value=\"31\">Autoren GW</option>\r\n                    <option value=\"34\">Kunstwissenschaften</option>\r\n                    <option value=\"34a\">Medienwissenschaften</option>\r\n                    <option value=\"37\">Sportwissenschaften</option>\r\n                    <option value=\"40\">Geschichte</option>\r\n                    <option value=\"43\">Geowissenschaften</option>\r\n                    <option value=\"46a\">Sozialwissenschaften </option>\r\n                    <option value=\"46b\">Soziologie </option>\r\n                    <option value=\"46c\">Politikwissenschaften </option>\r\n                    <option value=\"49\">Wirtschaftswissenschaften </option>\r\n                    <option value=\"52\">Rechtswissenscahften </option>\r\n                    <option value=\"55\">Land- und Forstwissenschaften</option>\r\n                    <option value=\"58\">Naturwissenschaften</option>\r\n                    <option value=\"61\">Mathematik </option>\r\n                    <option value=\"64\">Informatik </option>\r\n                    <option value=\"67\">Physik </option>\r\n                    <option value=\"70\">Chemie </option>\r\n                    <option value=\"73\">Astronomie </option>\r\n                    <option value=\"75\">Biologie </option>\r\n                    <option value=\"77\">Fachbibliothek Medizin</option>\r\n                    <option value=\"77a\">Medizin </option>\r\n                    <option value=\"79\">Technik allgemein</option>\r\n                    <option value=\"82\">Bauingenieurwesen </option>\r\n                    <option value=\"85\">Maschinenbau</option>\r\n                    <option value=\"88\">Elektrotechnik </option>\r\n                    <option value=\"91\">Sonstige Gebiete der Technik </option>\r\n                    <option value=\"94\">Turkistik </option>\r\n                    <option value=\"99\">Sonderstandorte</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"systemCode\">\r\n                Systemstelle:\r\n            </label>\r\n            <div class=\"col-md-5\">\r\n                <input id=\"systemCode\" [(ngModel)]=\"stockcontrol.systemCode\" placeholder=\"z.B. VNA,VNA-VNO\"\r\n                       class=\"form-control input-md\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"collections\">\r\n                Standorte:\r\n            </label>\r\n            <div class=\"col-md-5\">\r\n                <input id=\"collections\" [(ngModel)]=\"stockcontrol.collections\" placeholder=\"z.B. E33 E31\"\r\n                       class=\"form-control input-md\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"materials\">\r\n                Materialien:\r\n            </label>\r\n            <div class=\"col-md-5\">\r\n                <input id=\"materials\" [(ngModel)]=\"stockcontrol.materials\" placeholder=\"z.B. BOOKS\"\r\n                       class=\"form-control input-md\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n        <h2 class=\"sub-header\">Parameter zur Ausleihenanalyse</h2>\r\n        <p> In diesem Abschnitt werden die grundlegenden Parameter zur\r\n            Berechnung der nutzungsbasierten Aussonderungsvorschläge\r\n            vorgegeben. Eine genauere Beschreibung erhält man, wenn die Maus\r\n            auf den Parameternamen bewegt wird.\r\n        </p>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"yearsToAverage\"\r\n                   data-toggle=\"tooltip\"\r\n                   title=\"Zeitraum in Jahren, in dem das Ausleihverhalten untersucht wird. Wird beispielsweise 5 eingetragen, so werden die maximale und durchschnittliche Ausleihe für die vergangenen fünf Jahre berechnet.\">\r\n            Betrachteter Zeitraum\r\n            </label>\r\n            <div class=\"col-md-1\">\r\n                <input id=\"yearsToAverage\" placeholder=\"z.B. 5\"\r\n                       class=\"form-control input-md \" [(ngModel)]=\"stockcontrol.yearsToAverage\" type=\"number\" required/>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"minimumYears\"\r\n                   data-toggle=\"tooltip\"\r\n                   title=\"Zeitraum, den Exemplare einer Auflage mindestens im Bestand sein müssen, damit Aussonderungen vorgeschlagen werden.\">\r\n                Minmaler Zeitraum\r\n            </label>\r\n            <div class=\"col-md-1\">\r\n                <input id=\"minimumYears\" placeholder=\"z.B. 5\"\r\n                       class=\"form-control input-md\" [(ngModel)]=\"stockcontrol.minimumYears\" type=\"number\" required />\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"staticBuffer\"\r\n                   data-toggle=\"tooltip\"\r\n                   title=\"Anzahl an Exemplaren über die maximale Ausleihe hinaus, die nicht ausgesondert werden. Wird eine ganze Zahl angegeben (zum Beispiel 4), so verbleiben mindestens vier Exemplare ZUSÄTZLICH zur maximalen Ausleihe im Bestand. Auch die Angabe von Anteilen (0.1 für 10%) ist möglich.\">\r\n            Statischer Puffer\r\n            </label>\r\n            <div class=\"col-md-1\">\r\n                <input id=\"staticBuffer\" placeholder=\"z.B. 2\"\r\n                       class=\"form-control input-md\" type=\"text\" [(ngModel)]=\"stockcontrol.staticBuffer\" required/>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"variableBuffer\"\r\n                   data-toggle=\"tooltip\"\r\n                   title=\"Anzahl an Exemplaren, die in Abhängigkeit von der durchschnittlichen Ausleihe im Bestand verbleiben. Je höher die durchschnittliche Ausleihe ist, desto mehr Exemplare wverbleiben ZUSÄTZLICH zur maximalen Ausleihe im Bestand. Auch die Angabe von Anteilen (0.2 für 20%) ist möglich.\">\r\n                Variabler Puffer\r\n            </label>\r\n            <div class=\"col-md-1\">\r\n                <input id=\"variableBuffer\" placeholder=\"z.B. 0.4\"\r\n                       class=\"form-control input-md\" type=\"text\" [(ngModel)]=\"stockcontrol.variableBuffer\" required/>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"groupedAnalysis\">\r\n                gruppierte Analyse\r\n            </label>\r\n            <div class=\"col-md-2\">\r\n                <select [(ngModel)]=\"stockcontrol.groupedAnalysis\" id=\"groupedAnalysis\" class=\"form-control\">\r\n                    <option value=\"true\">verwenden</option>\r\n                    <option value=\"false\">nicht verwenden</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n    </div>\r\n        <div class=\"container\">\r\n            <p> Optional kann eine E-Mail-Adresse angegeben werden, an die (zum\r\n                Zwecke der Archivierung) eine Kopie der Auftrags-Email geschickt\r\n                wird.\r\n            </p>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"deletionMailBcc\">\r\n                BCC-Adresse\r\n            </label>\r\n            <div class=\"col-md-6\">\r\n                <input id=\"deletionMailBcc\" placeholder=\"max.mustermann@test.de\"\r\n                       class=\"form-control input-md\" [(ngModel)]=\"stockcontrol.deletionMailBcc\" type=\"email\" />\r\n            </div>\r\n        </div>\r\n        </div>\r\n        <div class=\"container\">\r\n            <h2 class=\"sub-header\">Parameter zur Vormerk-Analyse</h2>\r\n            <p> Dieser Abschnitt umfasst die Parameter zur Analyse der\r\n                Vormerkungen. Eine genauere Beschreibung erhält man, wenn die Maus\r\n                auf den Parameternamen bewegt wird.\r\n            </p>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-4 control-label\" for=\"yearsOfRequests\"\r\n                       data-toggle=\"tooltip\"\r\n                       title=\"Anzahl an Jahren, in denen Vormerkungen zur Analyse herangezogen werden.\">\r\n                    Betrachteter Zeitraum\r\n                </label>\r\n                <div class=\"col-md-1\">\r\n                    <input id=\"yearsOfRequests\" placeholder=\"z.B. 2\"\r\n                           class=\"form-control input-md \" [(ngModel)]=\"stockcontrol.yearsOfRequests\" type=\"number\" required />\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-4 control-label\" for=\"minimumDaysOfRequest\"\r\n                       data-toggle=\"tooltip\"\r\n                       title=\"Anzahl an Tagen, die ein Buch mindestens vorgemerkt werden muss, um bei der Analyse berücksichtigt zu werden. Dies entspricht der Wartezeit des Nutzers auf sein vorgemerktes Exemplar, die man für annehmbar hält.\">\r\n                Minimale Anzahl an Vormerktagen\r\n                </label>\r\n                <div class=\"col-md-1\">\r\n                    <input id=\"minimumDaysOfRequest\" placeholder=\"z.B. 5\"\r\n                           class=\"form-control input-md\" [(ngModel)]=\"stockcontrol.minimumDaysOfRequest\" type=\"number\" required />\r\n                </div>\r\n            </div>\r\n        </div>\r\n    <div class=\"container\">\r\n        <div class=\"form-group\">\r\n    <button class=\"btn btn-danger\" (click)=\"goBack()\">Abbrechen</button>\r\n    <button class=\"btn btn-success\" (click)=\"save(stockcontrol)\">Speichern</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"container\">\r\n        <h3>Freigaben</h3>\r\n        Folgende Nutzer können auf das Profil zugreifen:\r\n        <ul>\r\n            <li *ngFor=\"let su of stockcontrolUsers\">\r\n                {{su.username}}\r\n                <button *ngIf=\"su.username != user.getName()\" (click)=\"deleteStockcontrolUser(su)\">X</button>\r\n            </li>\r\n            <li>\r\n                <form>\r\n                <input #username placeholder=\"username\" style=\"border: none\"/>\r\n                <button (click)=\"addStockcontrolUser(username.value)\">Hinzufügen</button>\r\n                </form>\r\n            </li>\r\n        </ul>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/profiles/stockcontrol.editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockcontrolEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_stockcontrol_service__ = __webpack_require__("../../../../../src/app/services/stockcontrol.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_ProfilePerUser__ = __webpack_require__("../../../../../src/app/model/ProfilePerUser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_profilesperuser_service__ = __webpack_require__("../../../../../src/app/services/profilesperuser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_authentification_service__ = __webpack_require__("../../../../../src/app/services/authentification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var StockcontrolEditorComponent = (function () {
    function StockcontrolEditorComponent(stockcontrolService, profilePerUserService, authentificationService, route, location, router) {
        this.stockcontrolService = stockcontrolService;
        this.profilePerUserService = profilePerUserService;
        this.authentificationService = authentificationService;
        this.route = route;
        this.location = location;
        this.router = router;
    }
    StockcontrolEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.stockcontrolService.getStockcontrol(params['identifier']); })
            .subscribe(function (stockcontrol) { return _this.stockcontrol = stockcontrol; });
        this.route.params
            .switchMap(function (params) { return _this.profilePerUserService.getProfilePerUsers(params['identifier']); })
            .subscribe(function (profilePerUsers) { return _this.profilePerUsers = profilePerUsers; });
        this.user = this.authentificationService.principal;
    };
    StockcontrolEditorComponent.prototype.goBack = function () {
        this.location.back();
    };
    StockcontrolEditorComponent.prototype.save = function (stockControl) {
        var _this = this;
        if (stockControl.identifier == 'newProfile') {
            this.stockcontrolService.create(stockControl).subscribe(function (data) { return _this.stockcontrol = data; });
        }
        else {
            this.stockcontrolService.update(stockControl);
        }
        this.router.navigate(['/profiles']);
    };
    StockcontrolEditorComponent.prototype.addStockcontrolUser = function (username) {
        var profilePerUser = new __WEBPACK_IMPORTED_MODULE_5__model_ProfilePerUser__["a" /* ProfilePerUser */](this.stockcontrol.identifier, username);
        this.profilePerUserService.addProfilePerUsers(profilePerUser).subscribe(function (data) { return profilePerUser = data; });
        this.profilePerUsers.push(profilePerUser);
    };
    StockcontrolEditorComponent.prototype.deleteStockcontrolUser = function (profilePerUser) {
        var _this = this;
        if (profilePerUser.id != null) {
            this.profilePerUserService.deleteProfilePerUsers(profilePerUser.id).subscribe(function () {
                _this.profilePerUsers = _this.profilePerUsers.filter(function (scu) { return scu != profilePerUser; });
            });
        }
        else {
            console.log('no id given');
        }
    };
    StockcontrolEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'stockcontrol-editor',
            template: __webpack_require__("../../../../../src/app/profiles/stockcontrol.editor.component.html"),
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_stockcontrol_service__["a" /* StockcontrolService */],
            __WEBPACK_IMPORTED_MODULE_6__services_profilesperuser_service__["a" /* ProfilesPerUserService */],
            __WEBPACK_IMPORTED_MODULE_7__services_authentification_service__["a" /* AuthentificationService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], StockcontrolEditorComponent);
    return StockcontrolEditorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/eventanalysis.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventanalysisService; });
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




var EventanalysisService = (function () {
    function EventanalysisService(http) {
        this.http = http;
        this.eventanalysisUrl = __WEBPACK_IMPORTED_MODULE_3__app_globals__["b" /* dataUrl */] + '/eventanalysis';
    }
    EventanalysisService.prototype.getAllForStockcontrol = function (stockcontrol) {
        return this.http.get(this.eventanalysisUrl + '/search/findByStockcontrolId?stockcontrolId=' + stockcontrol)
            .map(function (data) { return data['_embedded']['eventanalysis']; });
    };
    EventanalysisService.prototype.getAllForStockcontrolWiththreshold = function (stockcontrol, threshold) {
        return this.http.get(this.eventanalysisUrl + '/search/findByStockcontrolIdAndProposedDeletionGreaterThanEqual?stockcontrolId=' + stockcontrol + '&proposedDeletion=' + threshold)
            .map(function (data) { return data['_embedded']['eventanalysis']; });
    };
    EventanalysisService.prototype.update = function (eventanalysis) {
        var url = this.eventanalysisUrl + "/" + eventanalysis.titleId;
        return this.http
            .put(url, JSON.stringify(eventanalysis), { headers: __WEBPACK_IMPORTED_MODULE_3__app_globals__["f" /* headers */] });
    };
    EventanalysisService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], EventanalysisService);
    return EventanalysisService;
}());



/***/ }),

/***/ "../../../../../src/app/services/ignored.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IgnoredService; });
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




var IgnoredService = (function () {
    function IgnoredService(http) {
        this.http = http;
    }
    IgnoredService.prototype.getAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_globals__["g" /* ignoredUrl */]);
    };
    IgnoredService.prototype.deleteIgnored = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__app_globals__["g" /* ignoredUrl */] + '/' + id, { headers: __WEBPACK_IMPORTED_MODULE_3__app_globals__["f" /* headers */] });
    };
    IgnoredService.prototype.create = function (ignored) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__app_globals__["g" /* ignoredUrl */], JSON.stringify(ignored), { headers: __WEBPACK_IMPORTED_MODULE_3__app_globals__["f" /* headers */] });
    };
    IgnoredService.prototype.update = function (ignored) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_3__app_globals__["g" /* ignoredUrl */] + '/' + ignored.identifier, JSON.stringify(ignored), { headers: __WEBPACK_IMPORTED_MODULE_3__app_globals__["f" /* headers */] });
    };
    IgnoredService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], IgnoredService);
    return IgnoredService;
}());



/***/ }),

/***/ "../../../../../src/app/services/stockcontrol.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockcontrolService; });
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







var StockcontrolService = (function () {
    function StockcontrolService(http, authentificationService) {
        this.http = http;
        this.authentificationService = authentificationService;
        this.stockcontrolUrl = __WEBPACK_IMPORTED_MODULE_5__app_globals__["i" /* settingsUrl */] + '/stockcontrol';
        this.profilePerUserUrl = __WEBPACK_IMPORTED_MODULE_5__app_globals__["i" /* settingsUrl */] + 'http://localhost:11300/profilesperuser';
    }
    StockcontrolService.prototype.getAll = function () {
        return this.http.get(this.stockcontrolUrl);
    };
    StockcontrolService.prototype.getAllForUsername = function () {
        this.username = this.authentificationService.principal.name;
        return this.http.get(this.stockcontrolUrl + '/search/findByUsername?username=' + this.username)
            .map(function (response) { return response['_embedded']['stockcontrol']; });
    };
    StockcontrolService.prototype.getStockcontrol = function (identifier) {
        var url = this.stockcontrolUrl + "/" + identifier;
        return this.http.get(url);
    };
    StockcontrolService.prototype.deleteStockcontrol = function (identifier) {
        var url = this.stockcontrolUrl + '/' + identifier;
        return this.http.delete(url, { headers: __WEBPACK_IMPORTED_MODULE_5__app_globals__["f" /* headers */] });
    };
    StockcontrolService.prototype.create = function (stockcontrol) {
        stockcontrol.identifier = stockcontrol.subjectID + '_' + Date.now();
        var profilePerUser = new __WEBPACK_IMPORTED_MODULE_3__model_ProfilePerUser__["a" /* ProfilePerUser */](stockcontrol.identifier, this.authentificationService.principal.name);
        this.http
            .post(this.profilePerUserUrl, JSON.stringify(profilePerUser), { headers: __WEBPACK_IMPORTED_MODULE_5__app_globals__["f" /* headers */] });
        return this.http
            .post(this.stockcontrolUrl, JSON.stringify(stockcontrol), { headers: __WEBPACK_IMPORTED_MODULE_5__app_globals__["f" /* headers */] });
    };
    StockcontrolService.prototype.update = function (stockcontrol) {
        var url = this.stockcontrolUrl + "/" + stockcontrol.identifier;
        return this.http
            .put(url, JSON.stringify(stockcontrol), { headers: __WEBPACK_IMPORTED_MODULE_5__app_globals__["f" /* headers */] });
    };
    StockcontrolService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_6__authentification_service__["a" /* AuthentificationService */]])
    ], StockcontrolService);
    return StockcontrolService;
}());



/***/ })

});
//# sourceMappingURL=profiles.module.chunk.js.map