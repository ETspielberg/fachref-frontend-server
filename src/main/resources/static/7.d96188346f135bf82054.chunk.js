webpackJsonp([7],{zdww:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=e("LMZF"),t=(e("6Xbx"),e("UHIZ")),d=e("Un6q"),o=(e("LUBl"),e("0nO6")),a=e("fWKF"),i=e("swIz"),r=(e("mkdy"),function(){function l(l,n){this.ignoredService=l,this.translateService=n}return l.prototype.ngOnInit=function(){this.selected="",this.busy=!0,this.blacklist=[],this.getBlacklist()},l.prototype.getBlacklist=function(){var l=this;this.ignoredService.getAll().subscribe(function(n){l.blacklist=n,l.filterList()})},l.prototype.filterList=function(){if(this.selectedIgnoreds=new Map,this.options=[],this.blacklist.length>0)for(var l=0,n=this.blacklist;l<n.length;l++){var e=n[l];if(this.selectedIgnoreds.has(e.type))this.selectedIgnoreds[e.type].push(e);else{var u=[];u.push(e),this.selectedIgnoreds.set(e.type,u),this.options.push({label:this.translateService.instant(e.type),value:e.type}),this.selected=e.type}}this.busy=!1},l.prototype.deleteIgnored=function(l){var n=this;this.ignoredService.deleteIgnored(l.identifier).subscribe(function(){n.blacklist.filter(function(n){return n!=l})})},l.prototype.updateIgnored=function(l){this.ignoredService.update(l).subscribe(function(n){return console.log("updated ignored "+l.identifier)})},l}()),s=(t.RouterModule.forChild([{path:"",component:r}]),function(){}),c=e("xOat"),p=e("P0cP"),f=e("thjh"),m=e("4cOY"),g=e("01UM"),h=e("n8ZM"),b=e("/zAi"),v=e("99E0"),M=e("pQo2"),C=e("CoZf"),S=e("wiMU"),I=e("4/JE"),y=e("fZht"),D=e("NYDW"),R=e("JG2d"),w=u["\u0275crt"]({encapsulation:2,styles:[],data:{}}),T=u["\u0275ccf"]("blacklist",r,function(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"blacklist",[],null,null,null,function(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,12,"div",[["class","jumbotron"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n    "])),(l()(),u["\u0275eld"](2,0,null,null,9,"div",[["class","container"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n        "])),(l()(),u["\u0275eld"](4,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Blacklist"])),(l()(),u["\u0275ted"](-1,null,["\n        "])),(l()(),u["\u0275eld"](7,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n      "])),(l()(),u["\u0275and"](16777216,null,null,1,null,function(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,9,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Liste anzeigen :\n        "])),(l()(),u["\u0275eld"](2,0,null,null,6,"p-selectButton",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,e){var u=!0;return"ngModelChange"===n&&(u=!1!==(l.component.selected=e)&&u),u},c.b,c.a)),u["\u0275prd"](512,null,p.ObjectUtils,p.ObjectUtils,[]),u["\u0275did"](4,49152,null,0,f.SelectButton,[p.ObjectUtils],{options:[0,"options"]},null),u["\u0275prd"](1024,null,o.NG_VALUE_ACCESSOR,function(l){return[l]},[f.SelectButton]),u["\u0275did"](6,671744,null,0,o.NgModel,[[8,null],[8,null],[8,null],[2,o.NG_VALUE_ACCESSOR]],{model:[0,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,o.NgControl,null,[o.NgModel]),u["\u0275did"](8,16384,null,0,o.NgControlStatus,[o.NgControl],null,null),(l()(),u["\u0275ted"](-1,null,["\n      "]))],function(l,n){var e=n.component;l(n,4,0,e.options),l(n,6,0,e.selected)},function(l,n){l(n,2,0,u["\u0275nov"](n,8).ngClassUntouched,u["\u0275nov"](n,8).ngClassTouched,u["\u0275nov"](n,8).ngClassPristine,u["\u0275nov"](n,8).ngClassDirty,u["\u0275nov"](n,8).ngClassValid,u["\u0275nov"](n,8).ngClassInvalid,u["\u0275nov"](n,8).ngClassPending)})})),u["\u0275did"](10,16384,null,0,d.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275ted"](-1,null,["\n    "])),(l()(),u["\u0275ted"](-1,null,["\n"])),(l()(),u["\u0275ted"](-1,null,["\n\n"])),(l()(),u["\u0275eld"](14,0,null,null,7,"p-dialog",[["header","Daten werden abgerufen"]],null,[[null,"visibleChange"]],function(l,n,e){var u=!0;return"visibleChange"===n&&(u=!1!==(l.component.busy=e)&&u),u},C.b,C.a)),u["\u0275prd"](512,null,m.DomHandler,m.DomHandler,[]),u["\u0275did"](16,12763136,null,2,S.Dialog,[u.ElementRef,m.DomHandler,u.Renderer2,u.NgZone],{header:[0,"header"],modal:[1,"modal"],closable:[2,"closable"],visible:[3,"visible"]},{visibleChange:"visibleChange"}),u["\u0275qud"](603979776,1,{headerFacet:1}),u["\u0275qud"](603979776,2,{footerFacet:1}),(l()(),u["\u0275ted"](-1,1,["\n  "])),(l()(),u["\u0275eld"](20,0,null,1,0,"img",[["alt","Loading..."],["src","assets/img/loading_newtons_cradle.gif"],["style","width:304px;height:228px;"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,1,["\n"])),(l()(),u["\u0275ted"](-1,null,["\n\n"])),(l()(),u["\u0275eld"](23,0,null,null,2,"p-growl",[["baseZIndex","10"],["life","7500"]],null,[[null,"valueChange"]],function(l,n,e){var u=!0;return"valueChange"===n&&(u=!1!==(l.component.msgs=e)&&u),u},I.b,I.a)),u["\u0275prd"](512,null,m.DomHandler,m.DomHandler,[]),u["\u0275did"](25,4636672,null,0,y.Growl,[u.ElementRef,m.DomHandler,u.IterableDiffers,[2,D.MessageService]],{life:[0,"life"],baseZIndex:[1,"baseZIndex"],value:[2,"value"]},{valueChange:"valueChange"}),(l()(),u["\u0275ted"](-1,null,["\n\n"])),(l()(),u["\u0275and"](16777216,null,null,1,null,function(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,16,"div",[["class","container"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275eld"](2,0,null,null,13,"p-dataTable",[],null,null,null,v.b,v.a)),u["\u0275prd"](512,null,m.DomHandler,m.DomHandler,[]),u["\u0275prd"](512,null,p.ObjectUtils,p.ObjectUtils,[]),u["\u0275did"](5,14139392,[["dt",4]],6,M.DataTable,[u.ElementRef,m.DomHandler,u.IterableDiffers,u.Renderer2,u.ChangeDetectorRef,p.ObjectUtils,u.NgZone],{paginator:[0,"paginator"],rows:[1,"rows"],value:[2,"value"]},null),u["\u0275qud"](335544320,3,{header:0}),u["\u0275qud"](335544320,4,{footer:0}),u["\u0275qud"](603979776,5,{templates:1}),u["\u0275qud"](603979776,6,{cols:1}),u["\u0275qud"](603979776,7,{headerColumnGroups:1}),u["\u0275qud"](603979776,8,{footerColumnGroups:1}),(l()(),u["\u0275ted"](-1,null,["\n    "])),(l()(),u["\u0275and"](0,null,null,1,null,function(l){return u["\u0275vid"](0,[(l()(),u["\u0275ted"](-1,null,["\n      "])),(l()(),u["\u0275eld"](1,0,null,null,3,"p-column",[["field","shelfmark"],["filterPlaceholder","Suche"],["header","Signatur"]],null,null,null,h.o,h.a)),u["\u0275did"](2,1097728,[[6,4]],2,b.Column,[],{field:[0,"field"],header:[1,"header"],filter:[2,"filter"],filterPlaceholder:[3,"filterPlaceholder"]},null),u["\u0275qud"](603979776,9,{templates:1}),u["\u0275qud"](335544320,10,{template:0}),(l()(),u["\u0275ted"](-1,null,["\n      "])),(l()(),u["\u0275eld"](6,0,null,null,5,"p-column",[["field","type"],["filterMatchMode","equals"],["header","Typ"]],null,null,null,h.o,h.a)),u["\u0275did"](7,1097728,[[6,4]],2,b.Column,[],{field:[0,"field"],header:[1,"header"],filter:[2,"filter"],filterMatchMode:[3,"filterMatchMode"]},null),u["\u0275qud"](603979776,11,{templates:1}),u["\u0275qud"](335544320,12,{template:0}),(l()(),u["\u0275ted"](-1,null,["\n        "])),(l()(),u["\u0275ted"](-1,null,["\n      "])),(l()(),u["\u0275ted"](-1,null,["\n      "])),(l()(),u["\u0275eld"](13,0,null,null,3,"p-column",[["field","comment"],["filterPlaceholder","Suche"],["header","Kommentar"]],null,null,null,h.o,h.a)),u["\u0275did"](14,1097728,[[6,4]],2,b.Column,[],{field:[0,"field"],header:[1,"header"],filter:[2,"filter"],filterPlaceholder:[3,"filterPlaceholder"]},null),u["\u0275qud"](603979776,13,{templates:1}),u["\u0275qud"](335544320,14,{template:0}),(l()(),u["\u0275ted"](-1,null,["\n      "])),(l()(),u["\u0275eld"](18,0,null,null,3,"p-column",[["field","date"],["header","Sperrung Aufnahme"]],null,null,null,h.o,h.a)),u["\u0275did"](19,1097728,[[6,4]],2,b.Column,[],{field:[0,"field"],header:[1,"header"]},null),u["\u0275qud"](603979776,15,{templates:1}),u["\u0275qud"](335544320,16,{template:0}),(l()(),u["\u0275ted"](-1,null,["\n      "])),(l()(),u["\u0275eld"](23,0,null,null,3,"p-column",[["field","expire"],["header","Sperrung Ende"]],null,null,null,h.o,h.a)),u["\u0275did"](24,1097728,[[6,4]],2,b.Column,[],{field:[0,"field"],header:[1,"header"]},null),u["\u0275qud"](603979776,17,{templates:1}),u["\u0275qud"](335544320,18,{template:0}),(l()(),u["\u0275ted"](-1,null,["\n      "])),(l()(),u["\u0275eld"](28,0,null,null,7,"p-column",[["header","Sperrung aufheben"]],null,null,null,h.o,h.a)),u["\u0275did"](29,1097728,[[6,4]],2,b.Column,[],{header:[0,"header"]},null),u["\u0275qud"](603979776,19,{templates:1}),u["\u0275qud"](335544320,20,{template:0}),(l()(),u["\u0275ted"](-1,null,["\n        "])),(l()(),u["\u0275and"](0,[[20,2]],null,1,null,function(l){return u["\u0275vid"](0,[(l()(),u["\u0275ted"](-1,null,["\n          "])),(l()(),u["\u0275eld"](1,0,null,null,2,"button",[["class","ui-button-danger"],["icon","fa-trash"],["iconPos","right"],["label","L\xf6schen"],["pButton",""]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(l.component.deleteIgnored(l.context.$implicit),u=!1!==e.stopPropagation()&&u),u},null,null)),u["\u0275prd"](512,null,m.DomHandler,m.DomHandler,[]),u["\u0275did"](3,4341760,null,0,g.Button,[u.ElementRef,m.DomHandler],{iconPos:[0,"iconPos"],label:[1,"label"],icon:[2,"icon"]},null),(l()(),u["\u0275ted"](-1,null,["\n        "]))],function(l,n){l(n,3,0,"right","L\xf6schen","fa-trash")},null)})),u["\u0275did"](34,16384,[[19,4]],0,b.PrimeTemplate,[u.TemplateRef],{name:[0,"name"]},null),(l()(),u["\u0275ted"](-1,null,["\n      "])),(l()(),u["\u0275ted"](-1,null,["\n    "]))],function(l,n){l(n,2,0,"shelfmark","Signatur",!0,"Suche"),l(n,7,0,"type","Typ",!0,"equals"),l(n,14,0,"comment","Kommentar",!0,"Suche"),l(n,19,0,"date","Sperrung Aufnahme"),l(n,24,0,"expire","Sperrung Ende"),l(n,29,0,"Sperrung aufheben"),l(n,34,0,"filter")},null)})),u["\u0275did"](14,16384,[[5,4]],0,b.PrimeTemplate,[u.TemplateRef],{name:[0,"name"]},null),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275ted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,5,0,!0,10,e.selectedIgnoreds[e.selected]),l(n,14,0,"header")},null)})),u["\u0275did"](28,16384,null,0,d.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275ted"](-1,null,["\n\n"])),(l()(),u["\u0275and"](16777216,null,null,1,null,function(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,13,"div",[["class","container"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275eld"](2,0,null,null,10,"div",[["class","ui-g content"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n    "])),(l()(),u["\u0275eld"](4,0,null,null,7,"div",[["class","ui-g-12"],["style","padding: 15px;"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n      "])),(l()(),u["\u0275eld"](6,0,null,null,4,"div",[["class","alert alert-warning"],["style","text-align: center;"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n        "])),(l()(),u["\u0275eld"](8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Keine Titel auf der Blacklist."])),(l()(),u["\u0275ted"](-1,null,["\n      "])),(l()(),u["\u0275ted"](-1,null,["\n    "])),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275ted"](-1,null,["\n"]))],null,null)})),u["\u0275did"](31,16384,null,0,d.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275ted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,10,0,e.blacklist.length>0),l(n,16,0,"Daten werden abgerufen",!0,!1,e.busy),l(n,25,0,"7500","10",e.msgs),l(n,28,0,e.blacklist.length>0),l(n,31,0,0==e.blacklist.length)},null)},w)),u["\u0275did"](1,114688,null,0,r,[a.a,R.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),q=e("pkds"),k=e("9iV4"),P=e("wRXj"),N=e("Rs3a"),B=e("VMZT"),O=e("SSOi"),L=e("uFcq"),U=e("akcY"),x=e("cZ+a"),E=e("AS1N"),H=e("l1fp");e.d(n,"BlacklistModuleNgFactory",function(){return Z});var Z=u["\u0275cmf"](s,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[T]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[u.LOCALE_ID,[2,d["\u0275a"]]]),u["\u0275mpd"](4608,o["\u0275i"],o["\u0275i"],[]),u["\u0275mpd"](4608,R.a,R.a,[q.a]),u["\u0275mpd"](4608,a.a,a.a,[k.c]),u["\u0275mpd"](512,d.CommonModule,d.CommonModule,[]),u["\u0275mpd"](512,t.RouterModule,t.RouterModule,[[2,t["\u0275a"]],[2,t.Router]]),u["\u0275mpd"](512,b.SharedModule,b.SharedModule,[]),u["\u0275mpd"](512,P.DropdownModule,P.DropdownModule,[]),u["\u0275mpd"](512,o["\u0275ba"],o["\u0275ba"],[]),u["\u0275mpd"](512,o.FormsModule,o.FormsModule,[]),u["\u0275mpd"](512,N.PaginatorModule,N.PaginatorModule,[]),u["\u0275mpd"](512,M.DataTableModule,M.DataTableModule,[]),u["\u0275mpd"](512,B.ToggleButtonModule,B.ToggleButtonModule,[]),u["\u0275mpd"](512,g.ButtonModule,g.ButtonModule,[]),u["\u0275mpd"](512,O.InputTextModule,O.InputTextModule,[]),u["\u0275mpd"](512,L.SpinnerModule,L.SpinnerModule,[]),u["\u0275mpd"](512,U.TabMenuModule,U.TabMenuModule,[]),u["\u0275mpd"](512,x.TooltipModule,x.TooltipModule,[]),u["\u0275mpd"](512,f.SelectButtonModule,f.SelectButtonModule,[]),u["\u0275mpd"](512,E.CalendarModule,E.CalendarModule,[]),u["\u0275mpd"](512,S.DialogModule,S.DialogModule,[]),u["\u0275mpd"](512,H.InputSwitchModule,H.InputSwitchModule,[]),u["\u0275mpd"](512,i.a,i.a,[]),u["\u0275mpd"](512,y.GrowlModule,y.GrowlModule,[]),u["\u0275mpd"](512,s,s,[]),u["\u0275mpd"](256,q.a,q.b,[]),u["\u0275mpd"](1024,t.ROUTES,function(){return[[{path:"",component:r}]]},[])])})}});