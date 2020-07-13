(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Np1s:function(l,n,u){var e=u("mrSG").__decorate,t=u("mrSG").__metadata,a=u("8Y7J"),i=u("vsU6"),d=function(){function l(){this.active=!1,this.disabled=!1}return Object.defineProperty(l.prototype,"headingTemplate",{get:function(){return this.heading?this.heading.templateRef:null},enumerable:!0,configurable:!0}),l}();e([a.ContentChild(i.TabHeading),t("design:type",i.TabHeading)],d.prototype,"heading",void 0),e([a.Input(),t("design:type",String)],d.prototype,"title",void 0),e([a.Input(),t("design:type",Object)],d.prototype,"active",void 0),e([a.Input(),t("design:type",Object)],d.prototype,"disabled",void 0),d=e([a.Component({selector:"tab",template:'<ng-content *ngIf="active"></ng-content>'})],d),n.Tab=d},YDAq:function(l,n,u){var e=u("mrSG").__decorate,t=u("mrSG").__metadata,a=u("8Y7J"),i=function(){function l(l){this.viewRef=l}return Object.defineProperty(l.prototype,"tabTransclude",{get:function(){return this._tabTransclude},set:function(l){this._tabTransclude=l,l&&this.viewRef.createEmbeddedView(l)},enumerable:!0,configurable:!0}),l}();e([a.Input(),t("design:type",a.TemplateRef),t("design:paramtypes",[a.TemplateRef])],i.prototype,"tabTransclude",null),i=e([a.Directive({selector:"[tabTransclude]"})],i),n.TabTransclude=i},nsux:function(l,n,u){var e=u("mrSG").__decorate,t=u("mrSG").__metadata,a=u("8Y7J"),i=u("Np1s"),d=function(){function l(){this.onSelect=new a.EventEmitter(!1)}return l.prototype.changeActiveTab=function(l){var n=this.tabs.toArray();n.forEach(function(l){return l.active=!1}),l.active=!0,this.onSelect.emit(n.indexOf(l))},l.prototype.ngAfterContentInit=function(){var l=this;setTimeout(function(){var n=l.tabs.toArray();!n.find(function(l){return!0===l.active})&&n.length>0&&(n[0].active=!0)})},l}();e([a.Input(),t("design:type",Boolean)],d.prototype,"pills",void 0),e([a.ContentChildren(i.Tab),t("design:type",a.QueryList)],d.prototype,"tabs",void 0),e([a.Output(),t("design:type",Object)],d.prototype,"onSelect",void 0),d=e([a.Component({selector:"tabset",template:'\n<div class="tabset">\n    <ul class="nav" [ngClass]="{ \'nav-tabs\': !pills, \'nav-pills\': pills }">\n      <li role="presentation" *ngFor="let tab of tabs" [class.active]="tab.active">\n        <a (click)="changeActiveTab(tab)" class="btn" [class.disabled]="tab.disabled">\n            <span [tabTransclude]="tab.headingTemplate">{{tab.title}}</span>\n        </a>\n        \n      </li>\n    </ul>\n    <div class="tabset-content">\n        <ng-content></ng-content>    \n    </div>\n</div>\n'})],d),n.Tabset=d},qkBQ:function(l,n,u){var e=u("mrSG").__decorate;function t(l){for(var u in l)n.hasOwnProperty(u)||(n[u]=l[u])}var a=u("8Y7J"),i=u("SVse"),d=u("Np1s"),s=u("vsU6"),o=u("nsux"),c=u("YDAq");t(u("Np1s")),t(u("nsux")),t(u("vsU6")),t(u("YDAq"));var r=function(){return function(){}}();r=e([a.NgModule({imports:[i.CommonModule],declarations:[d.Tab,s.TabHeading,o.Tabset,c.TabTransclude],exports:[d.Tab,s.TabHeading,o.Tabset]})],r),n.TabsModule=r},ruQS:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{constructor(l,n,u){this.activatedRoute=l,this.homeService=n,this.shareService=u,this.notes=null}ngOnInit(){this.data=this.shareService.purchaseDetail,this.data&&this.getNote(),this.activatedRoute.params.subscribe(l=>{this.tradeNumber=l.trade_num,this.bl_number=l.bl_number,this.homeService.getPurchaseDetail(l.trade_num).subscribe(l=>{this.data=l,this.getNote()})})}getNote(){let l=this.data.shipmentInfo.find(l=>l.blNumber==this.bl_number);this.notes=l?l.tradeNotes:""}}class a{constructor(l,n,u,e){this.route=l,this.router=n,this.homeService=u,this.shareService=e}ngOnInit(){this.routeParams=this.route.params.subscribe(l=>{this.tradeNumber=l.trade_num,this.getPurchaseDetail(this.tradeNumber)})}getPurchaseDetail(l){this.homeService.getPurchaseDetail(l).subscribe(n=>{this.shipmentInfoList=n.shipmentInfo,this.shareService.purchaseDetail=n,this.totalBags=this.shipmentInfoList.reduce((l,n)=>l+n.totalBags,0),n.shipmentInfo.length<=1&&this.router.navigate(["admin/purchase",l,this.shipmentInfoList.length?this.shipmentInfoList[0].blNumber:""])})}}class i{}var d=u("pMnS"),s=u("iInd"),o=u("SVse"),c=u("nr5L"),r=u("dz5x"),p=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function m(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"span",[["class","note"]],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.note)})}function f(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,16,"tr",[["routerLinkActive","router-link-active"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,1).onClick()&&t),t},null,null)),e["\u0275did"](1,16384,[[1,4]],0,s.l,[s.k,s.a,[8,null],e.Renderer2,e.ElementRef],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](2,3),e["\u0275did"](3,1720320,null,2,s.m,[s.k,e.ElementRef,e.Renderer2,[2,s.l],[2,s.n]],{routerLinkActive:[0,"routerLinkActive"]},null),e["\u0275qud"](603979776,1,{links:1}),e["\u0275qud"](603979776,2,{linksWithHrefs:1}),(l()(),e["\u0275eld"](6,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](7,null,[" "," "])),(l()(),e["\u0275eld"](8,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](9,null,[" "," "])),(l()(),e["\u0275eld"](10,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](11,null,[" "," "])),(l()(),e["\u0275eld"](12,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,3,"div",[["class","status "]],[[2,"status-apr",null],[2,"status-pending",null],[2,"status-going",null]],null,null,null,null)),(l()(),e["\u0275ted"](14,null,[" "," "])),(l()(),e["\u0275and"](16777216,null,null,1,null,m)),e["\u0275did"](16,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=l(n,2,0,"/admin/purchase",n.component.tradeNumber,null==(null==n.context.$implicit?null:n.context.$implicit.blNumber)?"":null==n.context.$implicit?null:n.context.$implicit.blNumber);l(n,1,0,u),l(n,3,0,"router-link-active"),l(n,16,0,"Going"==(null==n.context.$implicit?null:n.context.$implicit.status))},function(l,n){l(n,7,0,null==n.context.$implicit?null:n.context.$implicit.blNumber),l(n,9,0,null==n.context.$implicit?null:n.context.$implicit.vessel),l(n,11,0,null==n.context.$implicit?null:n.context.$implicit.totalBags),l(n,13,0,"Approved"==(null==n.context.$implicit?null:n.context.$implicit.status),"Pending to be shipped"==(null==n.context.$implicit?null:n.context.$implicit.status),"Afloat"==(null==n.context.$implicit?null:n.context.$implicit.status)),l(n,14,0,null==n.context.$implicit?null:n.context.$implicit.status)})}function b(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,29,"div",[["class","d-flex"],["id","wrapper"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,28,"div",[["id","page-content-wrapper"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,27,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,2,"div",[["class","links"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,1,"a",[["class","m-0"],["href",""]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["PSS Information"])),(l()(),e["\u0275eld"](6,0,null,null,23,"div",[["class","box mt-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,1,"div",[["class","mb-3 font-weight-semibold"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Going"])),(l()(),e["\u0275eld"](9,0,null,null,20,"div",[["class","table-responsive"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,19,"table",[["class","table table-custom mb-0"],["id","example"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,8,"thead",[],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,1,"th",[["width","35%"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["BL Number "])),(l()(),e["\u0275eld"](15,0,null,null,1,"th",[["width","35%"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Vessel"])),(l()(),e["\u0275eld"](17,0,null,null,1,"th",[["width","5%"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Bags"])),(l()(),e["\u0275eld"](19,0,null,null,0,"th",[],null,null,null,null,null)),(l()(),e["\u0275eld"](20,0,null,null,9,"tbody",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,f)),e["\u0275did"](22,278528,null,0,o.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](23,0,null,null,6,"tr",[["class","last"]],null,null,null,null,null)),(l()(),e["\u0275eld"](24,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](25,0,null,null,1,"td",[["align","right"],["class","font-weight-semibold"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Total Bags "])),(l()(),e["\u0275eld"](27,0,null,null,1,"td",[["class","font-weight-semibold"]],null,null,null,null,null)),(l()(),e["\u0275ted"](28,null,[" "," "])),(l()(),e["\u0275eld"](29,0,null,null,0,"td",[],null,null,null,null,null))],function(l,n){l(n,22,0,n.component.shipmentInfoList)},function(l,n){l(n,28,0,n.component.totalBags)})}function v(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-purchase",[],null,null,null,b,p)),e["\u0275did"](1,114688,null,0,a,[s.a,s.k,c.a,r.a],null,null)],function(l,n){l(n,1,0)},null)}var h=e["\u0275ccf"]("app-purchase",a,v,{},{},[]),g=u("YDAq"),x=u("nsux"),w=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,"li",[["role","presentation"]],[[2,"active",null]],null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,3,"a",[["class","btn"]],[[2,"disabled",null]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.changeActiveTab(l.context.$implicit)&&e),e},null,null)),(l()(),e["\u0275eld"](2,16777216,null,null,2,"span",[],null,null,null,null,null)),e["\u0275did"](3,16384,null,0,g.TabTransclude,[e.ViewContainerRef],{tabTransclude:[0,"tabTransclude"]},null),(l()(),e["\u0275ted"](4,null,["",""]))],function(l,n){l(n,3,0,n.context.$implicit.headingTemplate)},function(l,n){l(n,0,0,n.context.$implicit.active),l(n,1,0,n.context.$implicit.disabled),l(n,4,0,n.context.$implicit.title)})}function I(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,8,"div",[["class","tabset"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,5,"ul",[["class","nav"]],null,null,null,null,null)),e["\u0275prd"](512,null,o["\u0275NgClassImpl"],o["\u0275NgClassR2Impl"],[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["\u0275did"](3,278528,null,0,o.NgClass,[o["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](4,{"nav-tabs":0,"nav-pills":1}),(l()(),e["\u0275and"](16777216,null,null,1,null,y)),e["\u0275did"](6,278528,null,0,o.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](7,0,null,null,1,"div",[["class","tabset-content"]],null,null,null,null,null)),e["\u0275ncd"](null,0)],function(l,n){var u=n.component,e=l(n,4,0,!u.pills,u.pills);l(n,3,0,"nav",e),l(n,6,0,u.tabs)},null)}var T=u("Np1s"),k=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function N(l){return e["\u0275vid"](0,[e["\u0275ncd"](null,0),(l()(),e["\u0275and"](0,null,null,0))],null,null)}function R(l){return e["\u0275vid"](0,[(l()(),e["\u0275and"](16777216,null,null,1,null,N)),e["\u0275did"](1,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,1,0,n.component.active)},null)}class C{constructor(){this.tradeNotes=null}ngOnInit(){console.log(this.notes)}}var _=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function $(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,[" "," "]))],null,function(l,n){l(n,1,0,null==n.context.$implicit?null:n.context.$implicit.noteText)})}function D(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,52,"div",[["aria-labelledby","nav-home-tab"],["class","tab-pane mt-4"],["id","nav-home"],["role","tabpanel"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,51,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,37,"div",[["class","col-lg-4 col-md-12 col-sm-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,36,"div",[["class","box"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,1,"div",[["class","font-weight-semibold"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Info"])),(l()(),e["\u0275eld"](6,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,32,"ul",[["class","infoNumber"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,4,"li",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,1,"label",[["class","col-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Trade Number"])),(l()(),e["\u0275eld"](11,0,null,null,1,"div",[["class","col-7"]],null,null,null,null,null)),(l()(),e["\u0275ted"](12,null,[" "," "])),(l()(),e["\u0275eld"](13,0,null,null,4,"li",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](14,0,null,null,1,"label",[["class","col-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Reference"])),(l()(),e["\u0275eld"](16,0,null,null,1,"div",[["class","col-7"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" 12 "])),(l()(),e["\u0275eld"](18,0,null,null,4,"li",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](19,0,null,null,1,"label",[["class","col-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Crop"])),(l()(),e["\u0275eld"](21,0,null,null,1,"div",[["class","col-7"]],null,null,null,null,null)),(l()(),e["\u0275ted"](22,null,[" "," "])),(l()(),e["\u0275eld"](23,0,null,null,6,"li",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](24,0,null,null,1,"label",[["class","col-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Price"])),(l()(),e["\u0275eld"](26,0,null,null,3,"div",[["class","col-7"]],null,null,null,null,null)),(l()(),e["\u0275ted"](27,null,[" "," "])),(l()(),e["\u0275eld"](28,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](29,null,[" "," "])),(l()(),e["\u0275eld"](30,0,null,null,4,"li",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](31,0,null,null,1,"label",[["class","col-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Total Bags"])),(l()(),e["\u0275eld"](33,0,null,null,1,"div",[["class","col-7"]],null,null,null,null,null)),(l()(),e["\u0275ted"](34,null,[" "," "])),(l()(),e["\u0275eld"](35,0,null,null,4,"li",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](36,0,null,null,1,"label",[["class","col-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Destination"])),(l()(),e["\u0275eld"](38,0,null,null,1,"div",[["class","col-7"]],null,null,null,null,null)),(l()(),e["\u0275ted"](39,null,[" "," "])),(l()(),e["\u0275eld"](40,0,null,null,5,"div",[["class","col-lg-4 col-md-12 col-sm-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](41,0,null,null,4,"div",[["class","box"]],null,null,null,null,null)),(l()(),e["\u0275eld"](42,0,null,null,1,"div",[["class","font-weight-semibold"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Coffee Quaity"])),(l()(),e["\u0275eld"](44,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e["\u0275ted"](45,null,[" "," "])),(l()(),e["\u0275eld"](46,0,null,null,6,"div",[["class","col-lg-4 col-md-12 col-sm-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](47,0,null,null,5,"div",[["class","box"]],null,null,null,null,null)),(l()(),e["\u0275eld"](48,0,null,null,1,"div",[["class","font-weight-semibold"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Notes"])),(l()(),e["\u0275eld"](50,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,$)),e["\u0275did"](52,278528,null,0,o.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,52,0,n.component.notes)},function(l,n){var u=n.component;l(n,12,0,null==u.general?null:u.general.purchaseNumber),l(n,22,0,null==u.general?null:u.general.crop),l(n,27,0,null==u.general?null:u.general.price),l(n,29,0,null==u.general?null:u.general.unit),l(n,34,0,null==u.general?null:u.general.totalBags),l(n,39,0,null==u.general?null:u.general.destination),l(n,45,0,null==u.general?null:u.general.coffeeQuality)})}var L=u("wd/R");class O{constructor(l,n){this.activatedRoute=l,this.router=n}formatDate(l){return L(l).format("YYYY[-]MM[-]DD")}ngOnInit(){if(this.data=this.shipment.find(l=>l.blNumber==this.bl_number),this.data){this.departDate=this.formatDate(this.data.depart_dt),this.arrivalDate=this.formatDate(this.data.arrive_dt);const l=L(this.data.depart_dt),n=L(this.data.arrive_dt),u=L();this.dayLeft=n.diff(u,"days"),this.duration=n.diff(l,"days"),u<l&&(this.dayLeft=this.duration)}this.percentage()}percentage(){this.dashOffset=this.dayLeft<0?0:this.dayLeft/this.duration*340,this.progress=this.dayLeft<0?100:this.dayLeft/this.duration*100,this.dayLeft==this.duration&&(this.progress=0)}onClickBOL(){this.bl_number&&this.router.navigate(["/admin/document",this.tradeNumber,this.bl_number])}}var S=e["\u0275crt"]({encapsulation:0,styles:[[".ttboat[_ngcontent-%COMP%]{margin-left:35%}"]],data:{}});function A(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["days left"]))],null,null)}function B(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"span",[["class","text"]],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,[" "," "])),(l()(),e["\u0275and"](16777216,null,null,1,null,A)),e["\u0275did"](3,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,3,0,n.component.dayLeft>0)},function(l,n){l(n,1,0,n.component.dayLeft)})}function F(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"span",[["class","text"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Arrived"]))],null,null)}function V(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,84,"div",[["aria-labelledby","nav-profile-tab"],["class","tab-pane mt-4"],["id","nav-profile"],["role","tabpanel"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,83,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,35,"div",[["class","col-lg-4 col-md-12 col-sm-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,34,"div",[["class","box"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,1,"div",[["class","font-weight-semibold"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Info"])),(l()(),e["\u0275eld"](6,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,30,"ul",[["class","infoNumber"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,9,"li",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,1,"label",[["class","col-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Bill of lading"])),(l()(),e["\u0275eld"](11,0,null,null,6,"div",[["class","col-7 linkfile"]],null,null,null,null,null)),(l()(),e["\u0275ted"](12,null,[" "," "])),(l()(),e["\u0275eld"](13,0,null,null,4,"button",[["class","btn btnPrimary"],["routerLinkActive","router-link-active"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onClickBOL()&&e),e},null,null)),e["\u0275did"](14,1720320,null,2,s.m,[s.k,e.ElementRef,e.Renderer2,[2,s.l],[2,s.n]],{routerLinkActive:[0,"routerLinkActive"]},null),e["\u0275qud"](603979776,1,{links:1}),e["\u0275qud"](603979776,2,{linksWithHrefs:1}),(l()(),e["\u0275eld"](17,0,null,null,0,"i",[["class","fal fa-file-invoice"]],null,null,null,null,null)),(l()(),e["\u0275eld"](18,0,null,null,4,"li",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](19,0,null,null,1,"label",[["class","col-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Booking #"])),(l()(),e["\u0275eld"](21,0,null,null,1,"div",[["class","col-7"]],null,null,null,null,null)),(l()(),e["\u0275ted"](22,null,[" "," "])),(l()(),e["\u0275eld"](23,0,null,null,4,"li",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](24,0,null,null,1,"label",[["class","col-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Vessel"])),(l()(),e["\u0275eld"](26,0,null,null,1,"div",[["class","col-7"]],null,null,null,null,null)),(l()(),e["\u0275ted"](27,null,[" "," "])),(l()(),e["\u0275eld"](28,0,null,null,4,"li",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](29,0,null,null,1,"label",[["class","col-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Duration "])),(l()(),e["\u0275eld"](31,0,null,null,1,"div",[["class","col-7"]],null,null,null,null,null)),(l()(),e["\u0275ted"](32,null,[" "," "])),(l()(),e["\u0275eld"](33,0,null,null,4,"li",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](34,0,null,null,1,"label",[["class","col-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Requested"])),(l()(),e["\u0275eld"](36,0,null,null,1,"div",[["class","col-7"]],null,null,null,null,null)),(l()(),e["\u0275ted"](37,null,[" "," "])),(l()(),e["\u0275eld"](38,0,null,null,23,"div",[["class","col-lg-4 col-md-12 col-sm-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](39,0,null,null,22,"div",[["class","box"],["style","overflow: hidden;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](40,0,null,null,7,"div",[["class","text-center mt-3 progressDays"]],null,null,null,null,null)),(l()(),e["\u0275eld"](41,0,null,null,2,":svg:svg",[["height","140"],["viewBox","0 0 120 120"],["width","140"]],null,null,null,null,null)),(l()(),e["\u0275eld"](42,0,null,null,0,":svg:circle",[["cx","60"],["cy","60"],["fill","none"],["r","54"],["stroke","#e6e6e6"],["stroke-width","7"]],null,null,null,null,null)),(l()(),e["\u0275eld"](43,0,null,null,0,":svg:circle",[["cx","60"],["cy","60"],["fill","none"],["r","54"],["stroke","#A3CF60"],["stroke-dasharray","340"],["stroke-linecap","round"],["stroke-width","7"]],[[1,"stroke-dashoffset",0]],null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,B)),e["\u0275did"](45,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,F)),e["\u0275did"](47,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](48,0,null,null,13,"div",[["class","shipmentprogress"]],null,null,null,null,null)),(l()(),e["\u0275eld"](49,0,null,null,1,"span",[],[[4,"margin-left",null],[2,"ttboat",null]],null,null,null,null)),(l()(),e["\u0275eld"](50,0,null,null,0,"img",[["src","assets/images/boat.svg"],["style","width: 50px;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](51,0,null,null,1,"div",[["class","progress"]],null,null,null,null,null)),(l()(),e["\u0275eld"](52,0,null,null,0,"div",[["aria-valuemax","100"],["aria-valuemin","0"],["aria-valuenow","75"],["class","progress-bar"],["role","progressbar"]],[[4,"width",null]],null,null,null,null)),(l()(),e["\u0275eld"](53,0,null,null,8,"div",[["class","days"]],null,null,null,null,null)),(l()(),e["\u0275eld"](54,0,null,null,3,"div",[["class","text-left"]],null,null,null,null,null)),(l()(),e["\u0275ted"](55,null,[" "," "])),(l()(),e["\u0275eld"](56,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](57,null,[" "," "])),(l()(),e["\u0275eld"](58,0,null,null,3,"div",[["class","text-right"]],null,null,null,null,null)),(l()(),e["\u0275ted"](59,null,[" "," "])),(l()(),e["\u0275eld"](60,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](61,null,[" "," "])),(l()(),e["\u0275eld"](62,0,null,null,22,"div",[["class","col-lg-4 col-md-12 col-sm-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](63,0,null,null,21,"div",[["class","box"]],null,null,null,null,null)),(l()(),e["\u0275eld"](64,0,null,null,20,"ul",[["class","infoNumber"]],null,null,null,null,null)),(l()(),e["\u0275eld"](65,0,null,null,4,"li",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](66,0,null,null,1,"label",[["class","col-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Date of dispatched"])),(l()(),e["\u0275eld"](68,0,null,null,1,"div",[["class","col-7"]],null,null,null,null,null)),(l()(),e["\u0275ted"](69,null,[" "," "])),(l()(),e["\u0275eld"](70,0,null,null,4,"li",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](71,0,null,null,1,"label",[["class","col-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Dispatch AWB "])),(l()(),e["\u0275eld"](73,0,null,null,1,"div",[["class","col-7"]],null,null,null,null,null)),(l()(),e["\u0275ted"](74,null,[" "," "])),(l()(),e["\u0275eld"](75,0,null,null,4,"li",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](76,0,null,null,1,"label",[["class","col-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Sent Method"])),(l()(),e["\u0275eld"](78,0,null,null,1,"div",[["class","col-7"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Data not found "])),(l()(),e["\u0275eld"](80,0,null,null,4,"li",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](81,0,null,null,1,"label",[["class","col-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Docs arrival "])),(l()(),e["\u0275eld"](83,0,null,null,1,"div",[["class","col-7"]],null,null,null,null,null)),(l()(),e["\u0275ted"](84,null,[" "," "]))],function(l,n){var u=n.component;l(n,14,0,"router-link-active"),l(n,45,0,u.dayLeft>0),l(n,47,0,u.dayLeft<0)},function(l,n){var u=n.component;l(n,12,0,null==u.data?null:u.data.blNumber),l(n,22,0,null==u.data?null:u.data.booking_number),l(n,27,0,null==u.data?null:u.data.vessel),l(n,32,0,null==u.data?null:u.data.duration),l(n,37,0,null==u.data?null:u.data.etsRequest),l(n,43,0,u.dashOffset),l(n,49,0,u.progress+"%",null==u.data?null:u.data.duration),l(n,52,0,u.progress+"%"),l(n,55,0,null==u.data?null:u.data.departure),l(n,57,0,u.departDate),l(n,59,0,null==u.data?null:u.data.arrival),l(n,61,0,u.arrivalDate),l(n,69,0,null==u.data?null:u.data.dispatchedDate),l(n,74,0,null==u.data?null:u.data.dispatchAwb),l(n,84,0,null==u.data?null:u.data.docsArrivalClient)})}class q{constructor(){}ngOnInit(){this.sumBags=this.containers.reduce(function(l,n){return l+n.bags},0)}}var M=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function P(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](2,null,["",""])),(l()(),e["\u0275eld"](3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](4,null,[" ",""])),(l()(),e["\u0275eld"](5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](6,null,[" ",""])),(l()(),e["\u0275eld"](7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](8,null,[" ",""])),(l()(),e["\u0275eld"](9,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](10,null,[" ",""])),(l()(),e["\u0275eld"](11,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](12,null,[" ",""]))],null,function(l,n){l(n,2,0,null==n.context.$implicit?null:n.context.$implicit.container),l(n,4,0,null==n.context.$implicit?null:n.context.$implicit.ico),l(n,6,0,null==n.context.$implicit?null:n.context.$implicit.warehouseID),l(n,8,0,null==n.context.$implicit?null:n.context.$implicit.warehouse_id_date),l(n,10,0,null==n.context.$implicit?null:n.context.$implicit.uom),l(n,12,0,null==n.context.$implicit?null:n.context.$implicit.bags)})}function Y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,31,"div",[["aria-labelledby","nav-contact-tab"],["class","tab-pane mt-4"],["id","nav-contact"],["role","tabpanel"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,30,"div",[["class","box"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,29,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,28,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,27,"div",[["class","table-responsive"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,26,"table",[["class","table table-custom mb-0"],["id","example"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,13,"thead",[],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Container"])),(l()(),e["\u0275eld"](10,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["ICO"])),(l()(),e["\u0275eld"](12,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Waregouse ID"])),(l()(),e["\u0275eld"](14,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Date "])),(l()(),e["\u0275eld"](16,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["UOM "])),(l()(),e["\u0275eld"](18,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Bags "])),(l()(),e["\u0275eld"](20,0,null,null,11,"tbody",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,P)),e["\u0275did"](22,278528,null,0,o.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](23,0,null,null,8,"tr",[["class","last"]],null,null,null,null,null)),(l()(),e["\u0275eld"](24,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](25,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](26,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](27,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](28,0,null,null,1,"td",[["align","right"],["class","font-weight-semibold"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Total Bags "])),(l()(),e["\u0275eld"](30,0,null,null,1,"td",[["class","font-weight-semibold"]],null,null,null,null,null)),(l()(),e["\u0275ted"](31,null,[" "," "]))],function(l,n){l(n,22,0,n.component.containers)},function(l,n){l(n,31,0,n.component.sumBags)})}var G=e["\u0275crt"]({encapsulation:2,styles:[[".tabset .nav-pills li{width:33.333%;border-radius:0;padding:5px 1rem;text-align:center;cursor:pointer}.tabset .nav-pills li:hover{color:#a3cf60}.tabset .nav-pills li a{width:100%}.tabset .nav-pills .active{background-color:#a3cf60;color:#fff}.tabset .nav-pills .active:hover{color:#fff}"]],data:{}});function E(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,17,"tabset",[],null,null,null,I,w)),e["\u0275did"](1,1097728,null,1,x.Tabset,[],{pills:[0,"pills"]},null),e["\u0275qud"](603979776,1,{tabs:1}),(l()(),e["\u0275eld"](3,0,null,0,4,"tab",[["title","General"]],null,null,null,R,k)),e["\u0275did"](4,49152,[[1,4]],1,T.Tab,[],{title:[0,"title"]},null),e["\u0275qud"](335544320,2,{heading:0}),(l()(),e["\u0275eld"](6,0,null,0,1,"app-tab-general",[],null,null,null,D,_)),e["\u0275did"](7,114688,null,0,C,[],{general:[0,"general"],notes:[1,"notes"]},null),(l()(),e["\u0275eld"](8,0,null,0,4,"tab",[["title","Shipment"]],null,null,null,R,k)),e["\u0275did"](9,49152,[[1,4]],1,T.Tab,[],{title:[0,"title"]},null),e["\u0275qud"](335544320,3,{heading:0}),(l()(),e["\u0275eld"](11,0,null,0,1,"app-tab-shipment",[],null,null,null,V,S)),e["\u0275did"](12,114688,null,0,O,[s.a,s.k],{shipment:[0,"shipment"],tradeNumber:[1,"tradeNumber"],bl_number:[2,"bl_number"]},null),(l()(),e["\u0275eld"](13,0,null,0,4,"tab",[["title","Container"]],null,null,null,R,k)),e["\u0275did"](14,49152,[[1,4]],1,T.Tab,[],{title:[0,"title"]},null),e["\u0275qud"](335544320,4,{heading:0}),(l()(),e["\u0275eld"](16,0,null,0,1,"app-tab-container",[],null,null,null,Y,M)),e["\u0275did"](17,114688,null,0,q,[],{containers:[0,"containers"]},null)],function(l,n){var u=n.component;l(n,1,0,!0),l(n,4,0,"General"),l(n,7,0,null==u.data?null:u.data.generalInfo,u.notes),l(n,9,0,"Shipment"),l(n,12,0,null==u.data?null:u.data.shipmentInfo,u.tradeNumber,u.bl_number),l(n,14,0,"Container"),l(n,17,0,null==u.data?null:u.data.containerInfo)},null)}function H(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,9,"div",[["class","d-flex"],["id","wrapper"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,8,"div",[["id","page-content-wrapper"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,7,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,2,"div",[["class","links"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,1,"a",[["class","m-0"],["href",""]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["PSS Information"])),(l()(),e["\u0275eld"](6,0,null,null,3,"div",[["class","tabs"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,2,"div",[["class","tab-content mt-4"],["id","nav-tabContent"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,E)),e["\u0275did"](9,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,9,0,n.component.data)},null)}function J(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-general",[],null,null,null,H,G)),e["\u0275did"](1,114688,null,0,t,[s.a,c.a,r.a],null,null)],function(l,n){l(n,1,0)},null)}var Q=e["\u0275ccf"]("app-general",t,J,{},{},[]),j=u("xkgV"),U=u("qkBQ");class W{}class z{}class K{}class X{}u.d(n,"PurchaseModuleNgFactory",function(){return Z});var Z=e["\u0275cmf"](i,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[d.a,h,Q]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,o.NgLocalization,o.NgLocaleLocalization,[e.LOCALE_ID,[2,o["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,j.e,j.e,[]),e["\u0275mpd"](1073742336,o.CommonModule,o.CommonModule,[]),e["\u0275mpd"](1073742336,s.o,s.o,[[2,s.t],[2,s.k]]),e["\u0275mpd"](1073742336,j.a,j.a,[]),e["\u0275mpd"](1073742336,U.TabsModule,U.TabsModule,[]),e["\u0275mpd"](1073742336,W,W,[]),e["\u0275mpd"](1073742336,z,z,[]),e["\u0275mpd"](1073742336,K,K,[]),e["\u0275mpd"](1073742336,X,X,[]),e["\u0275mpd"](1073742336,i,i,[]),e["\u0275mpd"](1024,s.i,function(){return[[{path:":trade_num",component:a},{path:":trade_num/:bl_number",component:t}]]},[])])})},vsU6:function(l,n,u){var e=u("mrSG").__decorate,t=u("8Y7J"),a=function(){return function(l){this.templateRef=l}}();a=e([t.Directive({selector:"[tabHeading]"})],a),n.TabHeading=a}}]);