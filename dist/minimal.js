"use strict";function pluralFnBody(n){return"return args[+ ("+n+")];"}Object.defineProperty(exports,"__esModule",{value:!0});var localeRegExp=/(\w+)[-_].*/;function tryGetLangData(n,a){if(a[n])return a[n];var t=n.match(localeRegExp);if(!t)throw new Error("Can't find lang or lcale with code "+n);return a[t[1]]}var fnCache={};function createPluralFunc(n){var a=fnCache[n];return a||(a=new Function("n","args",pluralFnBody(n)),fnCache[n]=a),a}var DATA={ach:"2;n>1",af:"2;n!=1",ak:"2;n>1",am:"2;n>1",an:"2;n!=1",ar:"6;n=0?0:n=1?1:n=2?2:n%100>=3&&n%100<=10?3:n%100>=11?4:5",arn:"2;n>1",ast:"2;n!=1",ay:"1;0",az:"2;n!=1",be:"3;n%10=1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",bg:"2;n!=1",bn:"2;n!=1",bo:"1;0",br:"2;n>1",brx:"2;n!=1",bs:"3;n%10=1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",ca:"2;n!=1",cgg:"1;0",cs:"3;n=1?0:(n>=2&&n<=4)?1:2",csb:"3;n=1?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",cy:"4;n=1?0:n=2?1:(n!=8&&n!=11)?2:3",da:"2;n!=1",de:"2;n!=1",doi:"2;n!=1",dz:"1;0",el:"2;n!=1",en:"2;n!=1",eo:"2;n!=1",es:"2;n!=1",et:"2;n!=1",eu:"2;n!=1",fa:"1;0",ff:"2;n!=1",fi:"2;n!=1",fil:"2;n>1",fo:"2;n!=1",fr:"2;n>1",fur:"2;n!=1",fy:"2;n!=1",ga:"5;n=1?0:n=2?1:n<7?2:n<11?3:4",gd:"4;(n=1||n=11)?0:(n=2||n=12)?1:(n>2&&n<20)?2:3",gl:"2;n!=1",gu:"2;n!=1",gun:"2;n>1",ha:"2;n!=1",he:"2;n!=1",hi:"2;n!=1",hne:"2;n!=1",hr:"3;n%10=1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",hu:"2;n!=1",hy:"2;n!=1",id:"1;0",is:"2;n%10!=1||n%100=11",it:"2;n!=1",ja:"1;0",jbo:"1;0",jv:"2;n!==0",ka:"1;0",kk:"1;0",km:"1;0",kn:"2;n!=1",ko:"1;0",ku:"2;n!=1",kw:"4;n=1?0:n=2?1:n=3?2:3",ky:"1;0",lb:"2;n!=1",ln:"2;n>1",lo:"1;0",lt:"3;n%10=1&&n%100!=11?0:n%10>=2&&(n%100<10||n%100>=20)?1:2",lv:"3;n%10=1&&n%100!=11?0:n!=0?1:2",mai:"2;n!=1",mfe:"2;n>1",mg:"2;n>1",mi:"2;n>1",mk:"2;n=1||n%10=1?0:1",ml:"2;n!=1",mn:"2;n!=1",mni:"2;n!=1",mnk:"3;n=0?0:n=1?1:2",mr:"2;n!=1",ms:"1;0",mt:"4;n=1?0:n=0||(n%100>1&&n%100<11)?1:(n%100>10&&n%100<20)?2:3",my:"1;0",nah:"2;n!=1",nap:"2;n!=1",nb:"2;n!=1",ne:"2;n!=1",nl:"2;n!=1",nn:"2;n!=1",no:"2;n!=1",nso:"2;n!=1",oc:"2;n>1",or:"2;n!=1",pa:"2;n!=1",pap:"2;n!=1",pl:"3;n=1?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",pms:"2;n!=1",ps:"2;n!=1",pt:"2;n!=1",rm:"2;n!=1",ro:"3;n=1?0:(n=0||(n%100>0&&n%100<20))?1:2",ru:"3;n%10=1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",rw:"2;n!=1",sah:"1;0",sat:"2;n!=1",sco:"2;n!=1",sd:"2;n!=1",se:"2;n!=1",si:"2;n!=1",sk:"3;n=1?0:(n>=2&&n<=4)?1:2",sl:"4;n%100=1?1:n%100=2?2:n%100=3||n%100=4?3:0",so:"2;n!=1",son:"2;n!=1",sq:"2;n!=1",sr:"3;n%10=1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",su:"1;0",sv:"2;n!=1",sw:"2;n!=1",ta:"2;n!=1",te:"2;n!=1",tg:"2;n>1",th:"1;0",ti:"2;n>1",tk:"2;n!=1",tr:"2;n>1",tt:"1;0",ug:"1;0",uk:"3;n%10=1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",ur:"2;n!=1",uz:"2;n>1",vi:"1;0",wa:"2;n>1",wo:"1;0",yo:"2;n!=1",zh:"1;0"};function getFormula(n){return tryGetLangData(n,DATA).split(";")[1]}function getNPlurals(n){var a=tryGetLangData(n,DATA);return parseInt(a.split(";")[0],10)}function getPluralFunc(n){return createPluralFunc(getFormula(n))}function hasLang(n){try{return tryGetLangData(n,DATA),!0}catch(n){return!1}}function getAvailLangs(){return Object.keys(DATA)}exports.getFormula=getFormula,exports.getNPlurals=getNPlurals,exports.getPluralFunc=getPluralFunc,exports.hasLang=hasLang,exports.getAvailLangs=getAvailLangs;
