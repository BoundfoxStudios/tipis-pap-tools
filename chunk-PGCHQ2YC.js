import{u as W}from"./chunk-PLM7H556.js";import{a as L,b as X}from"./chunk-ERMG2SKR.js";import{b as H,e as I,f as V,l as T,m as N,q as F,r as K}from"./chunk-AXA5O7IY.js";import{$a as p,Fa as f,Ga as P,Ja as o,K as s,L as O,Oa as A,S as U,U as c,Ua as v,V as g,Wa as l,Xa as D,Ya as C,Z as y,_ as S,ab as d,bb as b,cb as _,fb as w,gb as m,hb as G,ib as M,n as R,nb as u,ob as E,qb as q,sb as j,vb as h}from"./chunk-BTA754KE.js";function Z(a,i){a&1&&(p(0,"p"),u(1),d()),a&2&&(o(),E(i))}function $(a,i){if(a&1&&(p(0,"p"),u(1),d()),a&2){let r=m(2);o(),E(r.value())}}function tt(a,i){if(a&1&&v(0,Z,2,1,"p")(1,$,2,1),a&2){let r=m(),n;C(0,(n=r.displayValue())?0:1,n)}}function et(a,i){if(a&1&&(p(0,"p"),u(1),d()),a&2){let r=m(2);o(),q("",i," (",r.value(),")")}}function it(a,i){if(a&1&&(p(0,"p"),u(1),d()),a&2){let r=m(2);o(),E(r.value())}}function at(a,i){if(a&1){let r=_();p(0,"button",8),w("click",function(){y(r);let e=m(2);return S(e.updateValue(10))}),u(1," +10 "),d()}if(a&2){let r=m(2);l("disabled",!r.canUseTenIncrement())}}function nt(a,i){if(a&1){let r=_();p(0,"button",9),w("click",function(){y(r);let e=m(2);return S(e.updateValue(-10))}),u(1," -10 "),d()}if(a&2){let r=m(2);l("disabled",!r.canUseTenDecrement())}}function ot(a,i){if(a&1){let r=_();p(0,"div",2),v(1,et,2,2,"p")(2,it,2,1),p(3,"div",3),v(4,at,2,1,"button",4),p(5,"button",5),w("click",function(){y(r);let e=m();return S(e.updateValue(1))}),u(6," +1 "),d(),p(7,"button",6),w("click",function(){y(r);let e=m();return S(e.updateValue(-1))}),u(8," -1 "),d(),v(9,nt,2,1,"button",7),d()()}if(a&2){let r=m(),n;o(),C(1,(n=r.displayValue())?1:2,n),o(3),C(4,r.showTens()?4:-1),o(),D("border-l",!r.showTens())("rounded-s-lg",!r.showTens()),l("disabled",!r.canUseOneIncrement()),o(2),D("border-r",!r.showTens())("rounded-e-lg",!r.showTens()),l("disabled",!r.canUseOneDecrement()),o(2),C(9,r.showTens()?9:-1)}}var B=(()=>{let i=class i{constructor(){this.label=s.required(),this.allowEdit=s(!1),this.minValue=s(0),this.maxValue=s(Number.MAX_SAFE_INTEGER),this.showTens=s(!0),this.remainingPoints=s(Number.MAX_SAFE_INTEGER),this.displayValue=s(),this.value=P(0),this.canUseTenIncrement=f(()=>this.remainingPoints()>=10&&this.value()+10<=this.maxValue()),this.canUseOneIncrement=f(()=>this.remainingPoints()>=1&&this.value()+1<=this.maxValue()),this.canUseTenDecrement=f(()=>this.value()-10>=this.minValue()),this.canUseOneDecrement=f(()=>this.value()-1>=this.minValue())}writeValue(n){this.value.set(n)}registerOnChange(n){this.onChange=n}registerOnTouched(n){this.onTouched=n}updateValue(n){this.value.update(e=>e+n),this.onChange(this.value())}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=g({type:i,selectors:[["pap-character-statistic"]],inputs:{label:[c.SignalBased,"label"],allowEdit:[c.SignalBased,"allowEdit"],minValue:[c.SignalBased,"minValue"],maxValue:[c.SignalBased,"maxValue"],showTens:[c.SignalBased,"showTens"],remainingPoints:[c.SignalBased,"remainingPoints"],displayValue:[c.SignalBased,"displayValue"]},standalone:!0,features:[j([{provide:H,useExisting:O(()=>i),multi:!0}]),h],decls:5,vars:3,consts:[[1,"flex","h-8","items-center","justify-between"],["class","flex items-center"],[1,"flex","items-center"],["role","group",1,"ml-4","inline-flex","rounded-md"],["class","rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium hover:text-green-500 focus:z-10 enabled:hover:bg-gray-100 disabled:text-gray-400 dark:border-gray-600 dark:bg-gray-700 enabled:dark:hover:bg-gray-600","type","button",3,"disabled"],["type","button",1,"border-b","border-t","border-gray-200","bg-white","px-4","py-2","text-sm","font-medium","hover:text-green-500","focus:z-10","enabled:hover:bg-gray-100","disabled:text-gray-400","dark:border-gray-600","dark:bg-gray-700","enabled:dark:hover:bg-gray-600",3,"disabled","click"],["type","button",1,"border-b","border-l","border-t","border-gray-200","bg-white","px-4","py-2","text-sm","font-medium","hover:text-red-500","focus:z-10","enabled:hover:bg-gray-100","disabled:text-gray-400","dark:border-gray-600","dark:bg-gray-700","enabled:dark:hover:bg-gray-600",3,"disabled","click"],["class","rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium hover:text-red-500 focus:z-10 enabled:hover:bg-gray-100 disabled:text-gray-400 dark:border-gray-600 dark:bg-gray-700 enabled:dark:hover:bg-gray-600","type","button",3,"disabled"],["type","button",1,"rounded-s-lg","border","border-gray-200","bg-white","px-4","py-2","text-sm","font-medium","hover:text-green-500","focus:z-10","enabled:hover:bg-gray-100","disabled:text-gray-400","dark:border-gray-600","dark:bg-gray-700","enabled:dark:hover:bg-gray-600",3,"disabled","click"],["type","button",1,"rounded-e-lg","border","border-gray-200","bg-white","px-4","py-2","text-sm","font-medium","hover:text-red-500","focus:z-10","enabled:hover:bg-gray-100","disabled:text-gray-400","dark:border-gray-600","dark:bg-gray-700","enabled:dark:hover:bg-gray-600",3,"disabled","click"]],template:function(e,t){e&1&&(p(0,"div",0)(1,"p"),u(2),d(),v(3,tt,2,1)(4,ot,10,13,"div",1),d()),e&2&&(o(2),E(t.label()),o(),C(3,t.allowEdit()?-1:3),o(),C(4,t.allowEdit()?4:-1))},styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0});let a=i;return a})();var rt=["*"],ht=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=g({type:i,selectors:[["pap-secondary-h1"]],standalone:!0,features:[h],ngContentSelectors:rt,decls:2,vars:0,consts:[[1,"ms-2","font-semibold","text-gray-500","dark:text-gray-400"]],template:function(e,t){e&1&&(G(),p(0,"small",0),M(1),d())},changeDetection:0});let a=i;return a})();function lt(a,i){a&1&&(p(0,"pap-h3",4),u(1),d()),a&2&&(o(),E(i))}var st=["*"],x=(()=>{let i=class i{constructor(){this.title=s.required(),this.footer=s()}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=g({type:i,selectors:[["pap-content-group"]],inputs:{title:[c.SignalBased,"title"],footer:[c.SignalBased,"footer"]},standalone:!0,features:[h],ngContentSelectors:st,decls:7,vars:2,consts:[[1,"w-full","rounded-lg","bg-gray-50","shadow","dark:border","dark:border-gray-800","dark:bg-gray-900","md:mt-0","xl:p-0"],[1,"flex","flex-col","p-6"],[1,"flex","flex-col","space-y-2"],["class","mt-4"],[1,"mt-4"]],template:function(e,t){if(e&1&&(G(),p(0,"div",0)(1,"div",1)(2,"pap-h2"),u(3),d(),p(4,"div",2),M(5),d(),v(6,lt,2,1,"pap-h3",3),d()()),e&2){let z;o(3),E(t.title()),o(3),C(6,(z=t.footer())?6:-1,z)}},dependencies:[L,X],changeDetection:0});let a=i;return a})();var Q=(()=>{let i=class i{constructor(){this.formGroup=s.required(),this.footer=s(""),this.remainingPoints=s(0),this.allowEdit=s(!1)}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=g({type:i,selectors:[["pap-character-main-statistics"]],inputs:{formGroup:[c.SignalBased,"formGroup"],footer:[c.SignalBased,"footer"],remainingPoints:[c.SignalBased,"remainingPoints"],allowEdit:[c.SignalBased,"allowEdit"]},standalone:!0,features:[h],decls:7,vars:14,consts:[["title","Main Stats",3,"footer","formGroup"],["formControlName","strength","label","St\xE4rke",3,"allowEdit","remainingPoints"],["formControlName","agility","label","Beweglichkeit",3,"allowEdit","remainingPoints"],["formControlName","stamina","label","Ausdauer",3,"allowEdit","remainingPoints"],["formControlName","magic","label","Magie",3,"allowEdit","remainingPoints"],["formControlName","spirit","label","Geist",3,"allowEdit","remainingPoints"],["formControlName","intelligence","label","Intelligenz",3,"allowEdit","remainingPoints"]],template:function(e,t){e&1&&(p(0,"pap-content-group",0),b(1,"pap-character-statistic",1)(2,"pap-character-statistic",2)(3,"pap-character-statistic",3)(4,"pap-character-statistic",4)(5,"pap-character-statistic",5)(6,"pap-character-statistic",6),d()),e&2&&(l("footer",t.footer())("formGroup",t.formGroup()),o(),l("allowEdit",t.allowEdit())("remainingPoints",t.remainingPoints()),o(),l("allowEdit",t.allowEdit())("remainingPoints",t.remainingPoints()),o(),l("allowEdit",t.allowEdit())("remainingPoints",t.remainingPoints()),o(),l("allowEdit",t.allowEdit())("remainingPoints",t.remainingPoints()),o(),l("allowEdit",t.allowEdit())("remainingPoints",t.remainingPoints()),o(),l("allowEdit",t.allowEdit())("remainingPoints",t.remainingPoints()))},dependencies:[B,x,F,I,V,T,N],changeDetection:0});let a=i;return a})();var Y=(()=>{let i=class i{constructor(){this.formGroup=s.required(),this.allowEdit=s(!1),this.calculatedValueStatistics=s.required(),this.remainingPoints=s(0),this.footer=s("")}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=g({type:i,selectors:[["pap-character-value-statistics"]],inputs:{formGroup:[c.SignalBased,"formGroup"],allowEdit:[c.SignalBased,"allowEdit"],calculatedValueStatistics:[c.SignalBased,"calculatedValueStatistics"],remainingPoints:[c.SignalBased,"remainingPoints"],footer:[c.SignalBased,"footer"]},standalone:!0,features:[h],decls:18,vars:47,consts:[["title","Werte Tabelle",1,"flex-1",3,"footer","formGroup"],[1,"flex"],[1,"flex-1","space-y-2"],["formControlName","life","label","Leben",3,"allowEdit","displayValue","remainingPoints"],["formControlName","power","label","Kraft",3,"allowEdit","displayValue","remainingPoints"],["formControlName","energy","label","Energie",3,"allowEdit","displayValue","remainingPoints"],["formControlName","precision","label","Pr\xE4zision",3,"allowEdit","displayValue","remainingPoints"],["formControlName","perception","label","Wahrnehmung",3,"allowEdit","displayValue","remainingPoints"],["formControlName","magicDefense","label","Magieabwehr",3,"allowEdit","displayValue","remainingPoints"],["formControlName","magicTolerance","label","Magietoleranz",3,"allowEdit","displayValue","remainingPoints"],["formControlName","magicControl","label","Magielenkung",3,"allowEdit","displayValue","remainingPoints"],["formControlName","mana","label","Mana",3,"allowEdit","displayValue","remainingPoints"],["formControlName","manaRegeneration","label","Manaregeneration",3,"allowEdit","displayValue","remainingPoints"],["formControlName","reaction","label","Reaktion",3,"allowEdit","displayValue","remainingPoints"],["formControlName","cover","label","Warnung",3,"allowEdit","displayValue","remainingPoints"],["formControlName","authority","label","Kontrolle",3,"allowEdit","displayValue","remainingPoints"]],template:function(e,t){e&1&&(p(0,"pap-content-group",0)(1,"div",1)(2,"div",2),b(3,"pap-character-statistic",3)(4,"pap-character-statistic",4)(5,"pap-character-statistic",5)(6,"pap-character-statistic",6)(7,"pap-character-statistic",7),d(),p(8,"div",2),b(9,"pap-character-statistic",8)(10,"pap-character-statistic",9)(11,"pap-character-statistic",10)(12,"pap-character-statistic",11)(13,"pap-character-statistic",12),d(),p(14,"div",2),b(15,"pap-character-statistic",13)(16,"pap-character-statistic",14)(17,"pap-character-statistic",15),d()()()),e&2&&(l("footer",t.footer())("formGroup",t.formGroup()),o(),D("flex-col",t.allowEdit())("space-x-4",!t.allowEdit())("space-y-2",t.allowEdit()),o(2),l("allowEdit",t.allowEdit())("displayValue",t.calculatedValueStatistics().life)("remainingPoints",t.remainingPoints()),o(),l("allowEdit",t.allowEdit())("displayValue",t.calculatedValueStatistics().power)("remainingPoints",t.remainingPoints()),o(),l("allowEdit",t.allowEdit())("displayValue",t.calculatedValueStatistics().energy)("remainingPoints",t.remainingPoints()),o(),l("allowEdit",t.allowEdit())("displayValue",t.calculatedValueStatistics().precision)("remainingPoints",t.remainingPoints()),o(),l("allowEdit",t.allowEdit())("displayValue",t.calculatedValueStatistics().perception)("remainingPoints",t.remainingPoints()),o(2),l("allowEdit",t.allowEdit())("displayValue",t.calculatedValueStatistics().magicDefense)("remainingPoints",t.remainingPoints()),o(),l("allowEdit",t.allowEdit())("displayValue",t.calculatedValueStatistics().magicTolerance)("remainingPoints",t.remainingPoints()),o(),l("allowEdit",t.allowEdit())("displayValue",t.calculatedValueStatistics().magicControl)("remainingPoints",t.remainingPoints()),o(),l("allowEdit",t.allowEdit())("displayValue",t.calculatedValueStatistics().mana)("remainingPoints",t.remainingPoints()),o(),l("allowEdit",t.allowEdit())("displayValue",t.calculatedValueStatistics().manaRegeneration)("remainingPoints",t.remainingPoints()),o(2),l("allowEdit",t.allowEdit())("displayValue",t.calculatedValueStatistics().reaction)("remainingPoints",t.remainingPoints()),o(),l("allowEdit",t.allowEdit())("displayValue",t.calculatedValueStatistics().cover)("remainingPoints",t.remainingPoints()),o(),l("allowEdit",t.allowEdit())("displayValue",t.calculatedValueStatistics().authority)("remainingPoints",t.remainingPoints()))},dependencies:[x,B,F,I,V,T,N],changeDetection:0});let a=i;return a})();function ct(a,i){if(a&1){let r=_();p(0,"pap-content-group",6)(1,"pap-button",7),w("tap",function(){y(r);let e=m();return S(e.convertMainToValuePoint())}),u(2,"1 Statuspunkt in 3 Wertepunkte tauschen"),d(),p(3,"pap-button",7),w("tap",function(){y(r);let e=m();return S(e.convertValueToMainPoint())}),u(4,"3 Wertepunkte in 1 Statuspunkt tauschen"),d()()}if(a&2){let r=m();o(),l("disabled",!r.canConvertToValuePoints()),o(2),l("disabled",!r.canConverToMainPoint())}}var Yt=(()=>{let i=class i{constructor(){this.pointsToDistribute=s(0),this.mainFormGroup=s.required(),this.mainAllowEdit=s(!1),this.valueFormGroup=s.required(),this.valueAllowEdit=s(!1),this.mainStatistics=s({strength:0,stamina:0,intelligence:0,magic:0,spirit:0,agility:0}),this.valueStatistics=s({precision:0,manaRegeneration:0,magicTolerance:0,magicControl:0,authority:0,magicDefense:0,perception:0,cover:0,reaction:0,energy:0,mana:0,power:0,life:0}),this.convertedMainPoints=P(0),this.valuePointsToDistribute=P(0),this.canConvertToValuePoints=f(()=>this.mainRemainingPoints()>=1),this.canConverToMainPoint=f(()=>this.valueRemainingPoints()>=3),this.mainStatisticsChange=P({agility:0,spirit:0,magic:0,intelligence:0,stamina:0,strength:0}),this.valueStatisticsChange=P({life:0,power:0,mana:0,energy:0,reaction:0,cover:0,perception:0,magicDefense:0,authority:0,magicControl:0,magicTolerance:0,manaRegeneration:0,precision:0}),this.charactersService=U(W),this.mainRemainingPoints=f(()=>{let n=this.mainStatisticsChange(),e=this.charactersService.sumMainStatistics(this.mainStatistics()),t=this.charactersService.sumMainStatistics(n);return this.pointsToDistribute()-(t-e)-this.convertedMainPoints()}),this.valueRemainingPoints=f(()=>{let n=this.valueStatisticsChange(),e=this.charactersService.sumValueStatistics(this.valueStatistics()),t=this.charactersService.sumValueStatistics(n);return this.valuePointsToDistribute()-t-e}),this.calculatedValueStatistics=f(()=>{let n=this.mainStatisticsChange(),e=this.valueStatisticsChange();return this.charactersService.calculateValueStatistics({main:n,value:e})}),this.subscribeToMainFormGroupChanges(),this.subscribeToValueFormGroupChanges()}convertMainToValuePoint(){this.mainRemainingPoints()>=1&&(this.convertedMainPoints.update(e=>e+1),this.valuePointsToDistribute.update(e=>e+3))}convertValueToMainPoint(){this.valueRemainingPoints()>=3&&(this.convertedMainPoints.update(e=>e-1),this.valuePointsToDistribute.update(e=>e-3))}subscribeToMainFormGroupChanges(){let n;A(()=>{let e=this.mainFormGroup();return n?.unsubscribe(),n=e.valueChanges.pipe(R(()=>e.getRawValue())).subscribe(t=>this.mainStatisticsChange.set(t)),()=>n?.unsubscribe()})}subscribeToValueFormGroupChanges(){let n;A(()=>{let e=this.valueFormGroup();return n?.unsubscribe(),n=e.valueChanges.pipe(R(()=>e.getRawValue())).subscribe(t=>this.valueStatisticsChange.set(t)),()=>n?.unsubscribe()})}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=g({type:i,selectors:[["pap-character-statistics"]],inputs:{pointsToDistribute:[c.SignalBased,"pointsToDistribute"],mainFormGroup:[c.SignalBased,"mainFormGroup"],mainAllowEdit:[c.SignalBased,"mainAllowEdit"],valueFormGroup:[c.SignalBased,"valueFormGroup"],valueAllowEdit:[c.SignalBased,"valueAllowEdit"],mainStatistics:[c.SignalBased,"mainStatistics"],valueStatistics:[c.SignalBased,"valueStatistics"]},standalone:!0,features:[h],decls:6,vars:10,consts:[[1,"flex","flex-col","xl:flex-row","xl:space-x-4"],[1,"flex","w-full","flex-col","xl:w-2/5"],[3,"allowEdit","footer","formGroup","remainingPoints"],["class","mt-4","title","Punkte tauschen"],[1,"mt-4","w-full","xl:mt-0","xl:w-3/5"],[3,"allowEdit","calculatedValueStatistics","formGroup","remainingPoints","footer"],["title","Punkte tauschen",1,"mt-4"],[3,"disabled","tap"]],template:function(e,t){e&1&&(p(0,"section",0)(1,"div",1),b(2,"pap-character-main-statistics",2),v(3,ct,5,2,"pap-content-group",3),d(),p(4,"div",4),b(5,"pap-character-value-statistics",5),d()()),e&2&&(o(2),l("allowEdit",t.mainAllowEdit())("footer",t.pointsToDistribute()>0?"Du kannst noch "+t.mainRemainingPoints()+" Statuspunkte verteilen.":"")("formGroup",t.mainFormGroup())("remainingPoints",t.mainRemainingPoints()),o(),C(3,t.mainAllowEdit()&&t.valueAllowEdit()?3:-1),o(2),l("allowEdit",t.valueAllowEdit())("calculatedValueStatistics",t.calculatedValueStatistics())("formGroup",t.valueFormGroup())("remainingPoints",t.valueRemainingPoints())("footer",t.pointsToDistribute()>0?"Du kannst noch "+t.valueRemainingPoints()+" Wertepunkte verteilen.":""))},dependencies:[Q,x,F,V,T,Y,K],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0});let a=i;return a})();export{ht as a,Yt as b};
