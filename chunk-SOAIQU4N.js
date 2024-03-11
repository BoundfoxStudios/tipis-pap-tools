import{a as M}from"./chunk-PMG6NDKE.js";import{a as A,b as L}from"./chunk-ERMG2SKR.js";import{a as w,d as E}from"./chunk-34EE4NIK.js";import{a as _,b,c as B,d as y,e as F,h as x,k as T,p as z,q as H,r as R}from"./chunk-AXA5O7IY.js";import{$a as n,Ba as v,Ja as p,S as m,V as f,Wa as d,X as h,ab as r,fb as c,kb as g,lb as k,mb as C,nb as o,sb as S,vb as D}from"./chunk-BTA754KE.js";import{f as u}from"./chunk-CWTPBX7D.js";var I=(()=>{let t=class t{constructor(){this.hostElement=m(v)}emitFiles(e){let i=e&&e.item(0);this.onChange&&this.onChange(i)}registerOnChange(e){this.onChange=e}registerOnTouched(){}writeValue(){this.hostElement.nativeElement.value=""}};t.\u0275fac=function(i){return new(i||t)},t.\u0275dir=h({type:t,selectors:[["input","type","file"]],hostBindings:function(i,a){i&1&&c("change",function(V){return a.emitFiles(V.target.files)})},standalone:!0,features:[S([{provide:b,useExisting:t,multi:!0}])]});let l=t;return l})();var N=["fileInput"],ae=(()=>{let t=class t{constructor(){this.fileControl=new x(null,{validators:[y.required]}),this.databaseService=m(w),this.tauriService=m(M)}createBackup(){return u(this,null,function*(){let e=yield this.databaseService.exportToBlob();yield this.tauriService.save(e,`Tipis-PAP-Tools-${E.now().toLocaleString({dateStyle:"medium"})}.json`)})}import(){this.fileInputElement.nativeElement.click()}fileChange(){return u(this,null,function*(){if(this.fileControl.invalid)return;let{value:e}=this.fileControl;if(!e){this.tauriService.message("Leider konnte die gew\xE4hlte Datei nicht erkannt werden."),this.fileControl.reset(null,{emitEvent:!1});return}if(!(yield this.tauriService.confirm(`M\xF6chtest Du wirklich die Datei "${e.name}" importieren?`))){this.fileControl.reset(null,{emitEvent:!1});return}if(!(yield this.databaseService.importFromBlob(e))){this.tauriService.message("Leider konnte die gew\xE4hlte Datei nicht importiert werden."),this.fileControl.reset(null,{emitEvent:!1});return}window.location.reload()})}reset(){return u(this,null,function*(){(yield this.tauriService.confirm("M\xF6chtest Du wirklich die gesamte Anwendung zur\xFCcksetzen?"))&&(yield this.databaseService.clear(),window.location.reload())})}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=f({type:t,selectors:[["pap-backup-restore"]],viewQuery:function(i,a){if(i&1&&g(N,5),i&2){let s;k(s=C())&&(a.fileInputElement=s.first)}},standalone:!0,features:[D],decls:33,vars:3,consts:[[1,"mt-4",3,"click"],[1,"mt-8","block"],[1,"divide-y","divide-red-500","rounded","border","border-red-500"],[1,"flex","space-x-4","p-4"],[1,"flex-1"],[1,"flex","items-center"],["type","file","accept",".json",1,"hidden",3,"formControl","change"],["fileInput",""],[3,"danger","click"]],template:function(i,a){i&1&&(n(0,"pap-h1"),o(1,"Backup"),r(),n(2,"p"),o(3,"Bitte erstelle regelm\xE4\xDFig ein Backup, sodass Du Deine Daten nicht verlierst."),r(),n(4,"pap-button",0),c("click",function(){return a.createBackup()}),o(5,"Backup erstellen"),r(),n(6,"pap-h2",1),o(7,"Gefahrenzone"),r(),n(8,"section",2)(9,"div",3)(10,"div",4)(11,"pap-h3"),o(12,"Backup importieren"),r(),n(13,"p"),o(14,"Hier kannst Du ein Backup wieder importieren. Bitte beachte, dass alle Daten \xFCberschrieben werden!"),r(),n(15,"p"),o(16,"Lege Dir zuvor ein Backup an, damit Du im Notfall dieses Wiederherstellen kannst."),r()(),n(17,"div",5)(18,"input",6,7),c("change",function(){return a.fileChange()}),r(),n(20,"pap-button",8),c("click",function(){return a.import()}),o(21,"Importieren"),r()()(),n(22,"div",3)(23,"div",4)(24,"pap-h3"),o(25,"Zur\xFCcksetzen"),r(),n(26,"p"),o(27,"Hier kannst Du die gesamte Anwendung zur\xFCcksetzen. Alle Deine Daten und Einstellungen gehen verloren."),r(),n(28,"p"),o(29,"Lege Dir zuvor ein Backup an, damit Du im Notfall dieses Wiederherstellen kannst."),r()(),n(30,"div",5)(31,"pap-button",8),c("click",function(){return a.reset()}),o(32,"Zur\xFCcksetzen"),r()()()()),i&2&&(p(18),d("formControl",a.fileControl),p(2),d("danger",!0),p(11),d("danger",!0))},dependencies:[_,R,A,L,z,B,F,H,T,I],changeDetection:0});let l=t;return l})();export{ae as default};
