(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Uioh:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),u=e("AytR"),o=function(){function l(l,n,e,t){this.route=l,this.shareService=n,this.homeService=e,this.documentService=t}return l.prototype.ngOnInit=function(){var l=this,n=this.shareService.getUserId();this.route.paramMap.subscribe(function(n){l.tradeNumber=n.get("trade_num"),l.blNumber=n.get("bl_number")}),this.getDocuments({trade_num:this.tradeNumber,bt_num:this.blNumber,userId:n})},l.prototype.getDocuments=function(l){this.homeService.getAllDocument(l).subscribe(function(l){})},l.prototype.sendShipmentFileByEmail=function(l){var n={company_number:this.shareService.getCompany,file_name:l,mail_to:this.shareService.getUserEmail,platform:u.a.PLATFORM_ID,device_id:u.a.APP_ID,generated_by:this.shareService.getUserName};console.log(n),this.documentService.sendByMail(n)},l}(),r=function(){return function(){}}(),i=e("pMnS"),a=e("ZYCi"),c=e("dz5x"),d=e("nr5L"),s=e("mrSG"),p=e("Do2H"),m=e("t/Na"),f=e("SZbH"),h=function(l){function n(){return null!==l&&l.apply(this,arguments)||this}return s.__extends(n,l),n.prototype.downloadDocument=function(){},n.prototype.sendByMail=function(l){return this.post(u.a.api+"/sendShipmentFileByMail",l)},n.ngInjectableDef=t["\u0275\u0275defineInjectable"]({factory:function(){return new n(t["\u0275\u0275inject"](m.c),t["\u0275\u0275inject"](f.j))},token:n,providedIn:"root"}),n}(p.a),g=t["\u0275crt"]({encapsulation:2,styles:[[".dropdown-option .dropdown-toggle::after{display:none!important}.reports .box,.reports .table-responsive{overflow:hidden}"]],data:{}});function _(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,16,"div",[["class","d-flex"],["id","wrapper"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,15,"div",[["id","page-content-wrapper"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,14,"div",[["class","container"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,13,"div",[["class","box"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,1,"div",[["class","mb-3 font-weight-semibold"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Document"])),(l()(),t["\u0275eld"](6,0,null,null,10,"div",[["class","table-responsive document"]],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,9,"table",[["class","table table-custom mb-0"],["id","example"]],null,null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,3,"thead",[],null,null,null,null,null)),(l()(),t["\u0275eld"](9,0,null,null,2,"tr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](10,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["File name"])),(l()(),t["\u0275eld"](12,0,null,null,4,"tbody",[],null,null,null,null,null)),(l()(),t["\u0275eld"](13,0,null,null,3,"tr",[["style","padding-bottom: 55px;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](14,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t["\u0275eld"](15,0,null,null,1,"a",[["class","linkdocument"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["No data found"]))],null,null)}function b(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-document",[],null,null,null,_,g)),t["\u0275did"](1,114688,null,0,o,[a.a,c.a,d.a,h],null,null)],function(l,n){l(n,1,0)},null)}var y=t["\u0275ccf"]("app-document",o,b,{},{},[]),v=e("Ip0R"),S=e("4GxJ");e.d(n,"DocumentModuleNgFactory",function(){return D});var D=t["\u0275cmf"](r,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,y]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,v.NgLocalization,v.NgLocaleLocalization,[t.LOCALE_ID,[2,v["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](1073742336,v.CommonModule,v.CommonModule,[]),t["\u0275mpd"](1073742336,S.z,S.z,[]),t["\u0275mpd"](1073742336,a.o,a.o,[[2,a.t],[2,a.k]]),t["\u0275mpd"](1073742336,r,r,[]),t["\u0275mpd"](1024,a.i,function(){return[[{path:":trade_num/:bl_number",component:o}]]},[])])})},nr5L:function(l,n,e){"use strict";e.d(n,"a",function(){return c});var t=e("mrSG"),u=e("Do2H"),o=e("AytR"),r=e("CcnG"),i=e("t/Na"),a=e("SZbH"),c=function(l){function n(){return null!==l&&l.apply(this,arguments)||this}return t.__extends(n,l),n.prototype.getAllPurchase=function(l){return this.get(o.a.api+"/getAllPurchaseBySearch?company_num="+l)},n.prototype.getPurchaseDetail=function(l){return this.get(o.a.api+"/getPurchaseDetail?trade_num="+l)},n.prototype.getAllDocument=function(l){var n=o.a.api+"/getFilesForShipment?";return localStorage.getItem("USER_ID"),this.get(n,{trade_num:l.trade_num,bl_num:l.bt_num,platform:o.a.PLATFORM_ID,user_id:l.userId})},n.prototype.searchByKeyword=function(l){var n=o.a.api+"/getAllPurchaseBySearch?",e=localStorage.getItem("USER_ID");return this.get(n,{company_num:l.company_num,trade_num:l.trade_num,origin_num:l.origin_num,ref:l.ref,platform:o.a.PLATFORM_ID,user_id:e})},n.prototype.getLocation=function(l){return this.get(o.a.dropdownEndpoint+"?counterpart="+l)},n.ngInjectableDef=r["\u0275\u0275defineInjectable"]({factory:function(){return new n(r["\u0275\u0275inject"](i.c),r["\u0275\u0275inject"](a.j))},token:n,providedIn:"root"}),n}(u.a)}}]);