// Copyright (c) ADRTA.COM 2011-2015 - ALL RIGHTS RESERVED
if(!window.__adrta__aait){__adrta__aait=""}if(!window.__adrta__aasi){__adrta__aasi=""}if(!window.__adrta__aast){__adrta__aast=""}if(!window.__adrta__aavi){__adrta__aavi=""}if(!window.__adrta__aavt){__adrta__aavt=""}if(!window.__adrta__aadb){__adrta__aadb=""}if(!window.__adrta__aacb){__adrta__aacb=""}if(!window.__adrta__aasm){__adrta__aasm=0}var swfobject=function(){var C="undefined",q="object",T="Shockwave Flash",Z="ShockwaveFlash.ShockwaveFlash",p="application/x-shockwave-flash",S="SWFObjectExprInst",w="onreadystatechange",Q=window,h=document,s=navigator,V=false,X=[],n=[],P=[],K=[],H,o,D,A,L=false,a=false,l,F,j=true,J=false,O=function(){var ad=typeof h.getElementById!==C&&typeof h.getElementsByTagName!==C&&typeof h.createElement!==C,ak=s.userAgent.toLowerCase(),ab=s.platform.toLowerCase(),ah=ab?/win/.test(ab):/win/.test(ak),af=ab?/mac/.test(ab):/mac/.test(ak),ai=/webkit/.test(ak)?parseFloat(ak.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,aa=s.appName==="Microsoft Internet Explorer",aj=[0,0,0],ae=null;if(typeof s.plugins!==C&&typeof s.plugins[T]===q){ae=s.plugins[T].description;if(ae&&(typeof s.mimeTypes!==C&&s.mimeTypes[p]&&s.mimeTypes[p].enabledPlugin)){V=true;aa=false;ae=ae.replace(/^.*\s+(\S+\s+\S+$)/,"$1");aj[0]=m(ae.replace(/^(.*)\..*$/,"$1"));aj[1]=m(ae.replace(/^.*\.(.*)\s.*$/,"$1"));aj[2]=/[a-zA-Z]/.test(ae)?m(ae.replace(/^.*[a-zA-Z]+(.*)$/,"$1")):0}}else{if(typeof Q.ActiveXObject!==C){try{var ag=new ActiveXObject(Z);if(ag){ae=ag.GetVariable("$version");if(ae){aa=true;ae=ae.split(" ")[1].split(",");aj=[m(ae[0]),m(ae[1]),m(ae[2])]}}}catch(ac){}}}return{w3:ad,pv:aj,wk:ai,ie:aa,win:ah,mac:af}}(),i=function(){if(!O.w3){return}if((typeof h.readyState!==C&&(h.readyState==="complete"||h.readyState==="interactive"))||(typeof h.readyState===C&&(h.getElementsByTagName("body")[0]||h.body))){f()}if(!L){if(typeof h.addEventListener!==C){h.addEventListener("DOMContentLoaded",f,false)}if(O.ie){h.attachEvent(w,function aa(){if(h.readyState==="complete"){h.detachEvent(w,aa);f()}});if(Q==top){(function ac(){if(L){return}try{h.documentElement.doScroll("left")}catch(ad){setTimeout(ac,0);return}f()}())}}if(O.wk){(function ab(){if(L){return}if(!/loaded|complete/.test(h.readyState)){setTimeout(ab,0);return}f()}())}}}();function f(){if(L||!document.getElementsByTagName("body")[0]){return}try{var ac,ad=B("span");ad.style.display="none";ac=h.getElementsByTagName("body")[0].appendChild(ad);ac.parentNode.removeChild(ac);ac=null;ad=null}catch(ae){return}L=true;var aa=X.length;for(var ab=0;ab<aa;ab++){X[ab]()}}function M(aa){if(L){aa()}else{X[X.length]=aa}}function r(ab){if(typeof Q.addEventListener!==C){Q.addEventListener("load",ab,false)}else{if(typeof h.addEventListener!==C){h.addEventListener("load",ab,false)}else{if(typeof Q.attachEvent!==C){g(Q,"onload",ab)}else{if(typeof Q.onload==="function"){var aa=Q.onload;Q.onload=function(){aa();ab()}}else{Q.onload=ab}}}}}function Y(){var aa=h.getElementsByTagName("body")[0];var ae=B(q);ae.setAttribute("style","visibility: hidden;");ae.setAttribute("type",p);var ad=aa.appendChild(ae);if(ad){var ac=0;(function ab(){if(typeof ad.GetVariable!==C){try{var ag=ad.GetVariable("$version");if(ag){ag=ag.split(" ")[1].split(",");O.pv=[m(ag[0]),m(ag[1]),m(ag[2])]}}catch(af){O.pv=[8,0,0]}}else{if(ac<10){ac++;setTimeout(ab,10);return}}aa.removeChild(ae);ad=null;G()}())}else{G()}}function G(){var aj=n.length;if(aj>0){for(var ai=0;ai<aj;ai++){var ab=n[ai].id;var ae=n[ai].callbackFn;var ad={success:false,id:ab};if(O.pv[0]>0){var ah=c(ab);if(ah){if(E(n[ai].swfVersion)&&!(O.wk&&O.wk<312)){v(ab,true);if(ae){ad.success=true;ad.ref=y(ab);ad.id=ab;ae(ad)}}else{if(n[ai].expressInstall&&z()){var al={};al.data=n[ai].expressInstall;al.width=ah.getAttribute("width")||"0";al.height=ah.getAttribute("height")||"0";if(ah.getAttribute("class")){al.styleclass=ah.getAttribute("class")}if(ah.getAttribute("align")){al.align=ah.getAttribute("align")}var ak={};var aa=ah.getElementsByTagName("param");var af=aa.length;for(var ag=0;ag<af;ag++){if(aa[ag].getAttribute("name").toLowerCase()!=="movie"){ak[aa[ag].getAttribute("name")]=aa[ag].getAttribute("value")}}R(al,ak,ab,ae)}else{b(ah);if(ae){ae(ad)}}}}}else{v(ab,true);if(ae){var ac=y(ab);if(ac&&typeof ac.SetVariable!==C){ad.success=true;ad.ref=ac;ad.id=ac.id}ae(ad)}}}}}X[0]=function(){if(V){Y()}else{G()}};function y(ac){var aa=null,ab=c(ac);if(ab&&ab.nodeName.toUpperCase()==="OBJECT"){if(typeof ab.SetVariable!==C){aa=ab}else{aa=ab.getElementsByTagName(q)[0]||ab}}return aa}function z(){return !a&&E("6.0.65")&&(O.win||O.mac)&&!(O.wk&&O.wk<312)}function R(ad,ae,aa,ac){var ah=c(aa);aa=W(aa);a=true;D=ac||null;A={success:false,id:aa};if(ah){if(ah.nodeName.toUpperCase()==="OBJECT"){H=I(ah);o=null}else{H=ah;o=aa}ad.id=S;if(typeof ad.width===C||(!/%$/.test(ad.width)&&m(ad.width)<310)){ad.width="310"}if(typeof ad.height===C||(!/%$/.test(ad.height)&&m(ad.height)<137)){ad.height="137"}var ag=O.ie?"ActiveX":"PlugIn",af="MMredirectURL="+encodeURIComponent(Q.location.toString().replace(/&/g,"%26"))+"&MMplayerType="+ag+"&MMdoctitle="+encodeURIComponent(h.title.slice(0,47)+" - Flash Player Installation");if(typeof ae.flashvars!==C){ae.flashvars+="&"+af}else{ae.flashvars=af}if(O.ie&&ah.readyState!=4){var ab=B("div");aa+="SWFObjectNew";ab.setAttribute("id",aa);ah.parentNode.insertBefore(ab,ah);ah.style.display="none";x(ah)}t(ad,ae,aa)}}function b(ab){if(O.ie&&ab.readyState!=4){ab.style.display="none";var aa=B("div");ab.parentNode.insertBefore(aa,ab);aa.parentNode.replaceChild(I(ab),aa);x(ab)}else{ab.parentNode.replaceChild(I(ab),ab)}}function I(af){var ae=B("div");if(O.win&&O.ie){ae.innerHTML=af.innerHTML}else{var ab=af.getElementsByTagName(q)[0];if(ab){var ag=ab.childNodes;if(ag){var aa=ag.length;for(var ad=0;ad<aa;ad++){if(!(ag[ad].nodeType==1&&ag[ad].nodeName==="PARAM")&&!(ag[ad].nodeType==8)){ae.appendChild(ag[ad].cloneNode(true))}}}}}return ae}function k(aa,ab){var ac=B("div");ac.innerHTML="<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='"+aa+"'>"+ab+"</object>";return ac.firstChild}function t(ai,ah,ab){var aa,ae=c(ab);ab=W(ab);if(O.wk&&O.wk<312){return aa}if(ae){var ad=(O.ie)?B("div"):B(q),ag,ac,af;if(typeof ai.id===C){ai.id=ab}for(af in ah){if(ah.hasOwnProperty(af)&&af.toLowerCase()!=="movie"){e(ad,af,ah[af])}}if(O.ie){ad=k(ai.data,ad.innerHTML)}for(ag in ai){if(ai.hasOwnProperty(ag)){ac=ag.toLowerCase();if(ac==="styleclass"){ad.setAttribute("class",ai[ag])}else{if(ac!=="classid"&&ac!=="data"){ad.setAttribute(ag,ai[ag])}}}}if(O.ie){P[P.length]=ai.id}else{ad.setAttribute("type",p);ad.setAttribute("data",ai.data)}ae.parentNode.insertBefore(ad,ae);aa=ad}return aa}function e(ac,aa,ab){var ad=B("param");ad.setAttribute("name",aa);ad.setAttribute("value",ab);ac.appendChild(ad)}function x(ac){var ab=c(ac);if(ab&&ab.nodeName.toUpperCase()==="OBJECT"){if(O.ie){ab.style.display="none";(function aa(){if(ab.readyState==4){for(var ad in ab){if(typeof ab[ad]==="function"){ab[ad]=null}}ab.parentNode.removeChild(ab)}else{setTimeout(aa,10)}}())}else{ab.parentNode.removeChild(ab)}}}function U(aa){return(aa&&aa.nodeType&&aa.nodeType===1)}function W(aa){return(U(aa))?aa.id:aa}function c(ac){if(U(ac)){return ac}var aa=null;try{aa=h.getElementById(ac)}catch(ab){}return aa}function B(aa){return h.createElement(aa)}function m(aa){return parseInt(aa,10)}function g(ac,aa,ab){ac.attachEvent(aa,ab);K[K.length]=[ac,aa,ab]}function E(ac){ac+="";var ab=O.pv,aa=ac.split(".");aa[0]=m(aa[0]);aa[1]=m(aa[1])||0;aa[2]=m(aa[2])||0;return(ab[0]>aa[0]||(ab[0]==aa[0]&&ab[1]>aa[1])||(ab[0]==aa[0]&&ab[1]==aa[1]&&ab[2]>=aa[2]))?true:false}function u(af,ab,ag,ae){var ad=h.getElementsByTagName("head")[0];if(!ad){return}var aa=(typeof ag==="string")?ag:"screen";if(ae){l=null;F=null}if(!l||F!=aa){var ac=B("style");ac.setAttribute("type","text/css");ac.setAttribute("media",aa);l=ad.appendChild(ac);if(O.ie&&typeof h.styleSheets!==C&&h.styleSheets.length>0){l=h.styleSheets[h.styleSheets.length-1]}F=aa}if(l){if(typeof l.addRule!==C){l.addRule(af,ab)}else{if(typeof h.createTextNode!==C){l.appendChild(h.createTextNode(af+" {"+ab+"}"))}}}}function v(ad,aa){if(!j){return}var ab=aa?"visible":"hidden",ac=c(ad);if(L&&ac){ac.style.visibility=ab}else{if(typeof ad==="string"){u("#"+ad,"visibility:"+ab)}}}function N(ab){var ac=/[\\\"<>\.;]/;var aa=ac.exec(ab)!==null;return aa&&typeof encodeURIComponent!==C?encodeURIComponent(ab):ab}var d=function(){if(O.ie){window.attachEvent("onunload",function(){var af=K.length;for(var ae=0;ae<af;ae++){K[ae][0].detachEvent(K[ae][1],K[ae][2])}var ac=P.length;for(var ad=0;ad<ac;ad++){x(P[ad])}for(var ab in O){O[ab]=null}O=null;for(var aa in swfobject){swfobject[aa]=null}swfobject=null})}}();return{registerObject:function(ae,aa,ad,ac){if(O.w3&&ae&&aa){var ab={};ab.id=ae;ab.swfVersion=aa;ab.expressInstall=ad;ab.callbackFn=ac;n[n.length]=ab;v(ae,false)}else{if(ac){ac({success:false,id:ae})}}},getObjectById:function(aa){if(O.w3){return y(aa)}},embedSWF:function(af,al,ai,ak,ab,ae,ad,ah,aj,ag){var ac=W(al),aa={success:false,id:ac};if(O.w3&&!(O.wk&&O.wk<312)&&af&&al&&ai&&ak&&ab){v(ac,false);M(function(){ai+="";ak+="";var an={};if(aj&&typeof aj===q){for(var aq in aj){an[aq]=aj[aq]}}an.data=af;an.width=ai;an.height=ak;var ar={};if(ah&&typeof ah===q){for(var ao in ah){ar[ao]=ah[ao]}}if(ad&&typeof ad===q){for(var am in ad){if(ad.hasOwnProperty(am)){var ap=(J)?encodeURIComponent(am):am,at=(J)?encodeURIComponent(ad[am]):ad[am];if(typeof ar.flashvars!==C){ar.flashvars+="&"+ap+"="+at}else{ar.flashvars=ap+"="+at}}}}if(E(ab)){var au=t(an,ar,al);if(an.id==ac){v(ac,true)}aa.success=true;aa.ref=au;aa.id=au.id}else{if(ae&&z()){an.data=ae;R(an,ar,al,ag);return}else{v(ac,true)}}if(ag){ag(aa)}})}else{if(ag){ag(aa)}}},switchOffAutoHideShow:function(){j=false},enableUriEncoding:function(aa){J=(typeof aa===C)?true:aa},ua:O,getFlashPlayerVersion:function(){return{major:O.pv[0],minor:O.pv[1],release:O.pv[2]}},hasFlashPlayerVersion:E,createSWF:function(ac,ab,aa){if(O.w3){return t(ac,ab,aa)}else{return undefined}},showExpressInstall:function(ac,ad,aa,ab){if(O.w3&&z()){R(ac,ad,aa,ab)}},removeSWF:function(aa){if(O.w3){x(aa)}},createCSS:function(ad,ac,ab,aa){if(O.w3){u(ad,ac,ab,aa)}},addDomLoadEvent:M,addLoadEvent:r,getQueryParamValue:function(ad){var ac=h.location.search||h.location.hash;if(ac){if(/\?/.test(ac)){ac=ac.split("?")[1]}if(!ad){return N(ac)}var ab=ac.split("&");for(var aa=0;aa<ab.length;aa++){if(ab[aa].substring(0,ab[aa].indexOf("="))==ad){return N(ab[aa].substring((ab[aa].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var aa=c(S);if(aa&&H){aa.parentNode.replaceChild(H,aa);if(o){v(o,true);if(O.ie){H.style.display="block"}}if(D){D(A)}}a=false}},version:"2.3"}}();this["Pixalate"+69711497400348957]=(function(){var aE="1438778305187";var F=false;var aj=69711497400348957;var U="11.5";var p=/http(s)?:\/\/(cdn|js).adrta.com\/aa.js#.*/;var u=/(?:\?([^#]*))/;var L=/https?:\/\/\w.*[\w]/;var E=/(\w+):\/{2}([^\/:]+)(?:\:(\d+))?(\/(?:[^?]+\/)?)?([^\?#]+)?(?:\?([^#]*))?(\#.*)?$/;var ao=",88x31,120x20,120x240,120x60,120x600,120x90,125x125,160x600,168x28,168x42,168X42,180x150,192x53,200x200,216x36,216x54,234x60,240x400,250x250,300x100,300x1050,300x150,300x250,300x50,300x600,300x75,320x50,320x100,320x480,336x280,400x300,468x60,480x320,550x480,640x480,700x500,720x300,728x90,768x1024,950x90,970x250,970x90,970x66,1024x768,";var s=[15000,15000,30000,30000,60000,60000];var B=[60000,180000];var aU=0;var aB=100;var av=0.5;var x=511;var aI=2047;var aL=9000000000000000;var ap=false;var d=[];var an=false;var l=false;var ai=false;var aH=new Date().getTimezoneOffset();var K=(navigator.userAgent.indexOf("Opera Mini")!=-1);var aT=(navigator.userAgent.indexOf("MSIE")!=-1);var aq=window.location.protocol;if(aq.indexOf("http")!=0){aq="http:"}d.push(aj);var ah=0;var G=null;try{G=document.currentScript}catch(ae){}if(!G){ah=1;var am=document.getElementsByTagName("script");var I=[];for(var ab=0;ab<am.length;++ab){I[ab]=am[ab]}G=I[I.length-1];for(var X=I.length-1;X>=0;--X){var W=I[X];if(W&&W.src&&p.test(W.src)){G=W;ah=0;break}}}var aQ=G.src.substring(G.src.indexOf("#")+1).replace(/%%/g,"%25%25").split(";");var S=aQ.shift();if(S.indexOf("=")!=-1||S.length==0||G.src.indexOf("#")==-1){S="px"}var m=[];for(var aa=0;aa<aQ.length;++aa){if(aQ[aa].indexOf("blocked")!=-1){ap=true}if(L.test(aQ[aa])){aQ[aa]=aQ[aa].replace(E,"$1://$2$4$5")}if(aQ[aa].indexOf("kv2=")!=-1){m.push(aQ.splice(aa,1))}}var aJ="__aaci="+S;if(aQ.length>0){aJ+="&"+aQ.join("&")}var aK=aJ.indexOf("&__aa__=");if(aK!=-1){aJ=aJ.substring(0,aK)}__adrta__aadb=__adrta__aadb||(("&"+aJ+"&").indexOf("&debug=true&")!=-1);var v=true;var k=0;var aA="";var ad="";var az=window;try{var Q=window;for(var ab=0;ab<16;++ab){v=true;try{aA=Q.location.href.replace(u,"").substring(0,x);if(aA=="undefined"){aA=Q.location.href.substring(0,x)}ad=Q.document.referrer.replace(u,"").substring(0,x);if(ad=="undefined"){ad=Q.document.referrer.substring(0,x)}az=Q}catch(ae){v=false}if(Q==window.top){break}Q=Q.parent;++k}}catch(ae){v=false}var h=false;var af=(document.hasFocus&&document.hasFocus())||(az.document.hasFocus&&az.document.hasFocus());if(v){var aC=null;if(aT){aC=az.document.onfocusin;az.document.onfocusin=function(){af=true;if(aC){try{aC()}catch(i){}}}}else{aC=az.onfocus;az.onfocus=function(){af=true;if(aC){aC()}}}var T=null;var aw=null;if(aT){T=az.document.onfocusout;az.document.onfocusout=function(){if(aw!=az.document.activeElement){aw=az.document.activeElement}else{af=false;if(T){try{T()}catch(i){}}}}}else{T=az.onblur;az.onblur=function(){af=false;if(T){T()}}}}var ar=0;var aN=0;var D=function(){if(aN!=0){var i=new Date().getTime();ar+=i-aN;aN=i}var e=ar;ar=0;return e};var f=function(){var i=function(){aN=new Date().getTime()};var e=function(){if(aN!=0){ar+=new Date().getTime()-aN;aN=0}};if(aM.addEventListener){aM.addEventListener("mouseover",i,false);aM.addEventListener("mouseout",e,false)}else{if(aM.attachEvent){aM.attachEvent("mouseover",i);aM.attachEvent("mouseout",e)}}};var aM=null;var aY=false;var t=0;var at=0;var aV=0;var ax=new Date().getTime();var aP=function(e,i){return(ao.indexOf(","+e+"x"+i+",")!=-1)};var au=function(e){if(e.getAttribute("height")){return parseInt(e.getAttribute("height"))}if((e.style)&&(e.style.height)&&(e.style.height.indexOf("%")==-1)){return parseInt(e.style.height)}return e.offsetHeight};var ac=function(e){if(e.getAttribute("width")){return parseInt(e.getAttribute("width"))}if((e.style)&&(e.style.width)&&(e.style.height.indexOf("%")==-1)){return parseInt(e.style.width)}return e.offsetWidth};var ay=function(j){if(!j){return j}if(j.nodeType!=1){return ay(j.nextSibling)}if(j.tagName=="SCRIPT"){return ay(j.nextSibling)}var e=ac(j);var n=au(j);if(aP(e,n)){t=e;at=n;return j}if(j.tagName=="IMG"){return ay(j.nextSibling)}if(!j.firstChild){return ay(j.nextSibling)}var i=ay(j.firstChild);if(i){return i}return ay(j.nextSibling)};var aF=function(){aM=ay(G.parentNode.firstChild);if(!aM&&(window!=top)){aM=ay(document.body)}if(aM){aY=true;aV=new Date().getTime()-ax;if(aV<1){aV=1}f()}};aF();if(aY&&v){an=true;l=true}var a=false;var q=0;var o=0;var M=0;var Y=0;var c=false;var aG=new Date().getTime();var aX=false;var aO=0;var J=0;var V=[0,0,0,0,0,0,0];var al=function(){var i=new Date().getTime();var e=i-aG;aG=i;return e};var aW=function(e){var j=0;var i=0;if(e.offsetParent){do{if(e.style.position=="fixed"){j=e.getBoundingClientRect().left;i=e.getBoundingClientRect().top;break}j+=e.offsetLeft;j-=e.scrollLeft;i+=e.offsetTop;i-=e.scrollTop}while((e=e.offsetParent)&&(e.tagName!="BODY"))}return[j,i]};var C=function(j){try{var aZ=j.parent.document.getElementsByTagName("IFRAME");for(var n=0;n<aZ.length;n++){if(aZ[n].contentWindow==j){return aZ[n]}}}catch(w){}return null};var P=function(){var i=0;var e=0;if(typeof(az.innerWidth)=="number"){i=az.innerWidth;e=az.innerHeight}else{if(az.document.documentElement&&(az.document.documentElement.clientWidth||az.document.documentElement.clientHeight)){i=az.document.documentElement.clientWidth;e=az.document.documentElement.clientHeight}}return[i,e]};var R=function(){var i=0;var e=0;if(typeof(az.pageYOffset)=="number"){e=az.pageYOffset;i=az.pageXOffset}else{if(az.document.body&&(az.document.body.scrollLeft||az.document.body.scrollTop)){e=az.document.body.scrollTop;i=az.document.body.scrollLeft}else{if(az.document.documentElement&&(az.document.documentElement.scrollLeft||az.document.documentElement.scrollTop)){e=az.document.documentElement.scrollTop;i=az.document.documentElement.scrollLeft}}}return[i,e]};var N=false;var y=function(){aX=true;++J;if(af){h=true;if(v){var bi=0;var bg=0;var bc=window;for(var bl=0;bl<16;++bl){try{var a7=C(bc);if(a7){var a3=aW(a7);bi+=a3[0];bg+=a3[1]}}catch(bn){}if(bc==window.top){break}bc=bc.parent}var aZ=R();var be=aZ[1];var bp=aZ[0];var bf=P();var n=be+bf[1];var bm=bp+bf[0];var a0=Math.max(az.document.documentElement.clientHeight,az.document.body.scrollHeight,az.document.documentElement.scrollHeight,az.document.body.offsetHeight,az.document.documentElement.offsetHeight);var a2=Math.max(az.document.documentElement.clientWidth,az.document.body.scrollWidth,az.document.documentElement.scrollWidth,az.document.body.offsetWidth,az.document.documentElement.offsetWidth);V[0]+=a0;V[1]+=a2;var a9=a0*0.2;var j=0;for(var bl=2;bl<7;++bl){var ba=j+a9;var a8=ba-j;if(a8<0){j=ba;continue}if(j<be){j=be}if(ba>n){ba=n}var br=ba-j;j=ba;if(br<=0){continue}V[bl]+=Math.floor((br/a8)*1000)/1000}++aO;var a3=aW(aM);var bq=a3[1]+bg;var bk=a3[0]+bi;var a4=bq+aM.offsetHeight;var bd=bk+aM.offsetWidth;var bb=(bq<be)?be:bq;var a1=(bk<bp)?bp:bk;var bj=(a4>n)?n:a4;var bh=(bd>bm)?bm:bd;var a6=(a4-bq)*(bd-bk);if(a6<0){a6=0}var bo=(bj-bb)*(bh-a1);if(bo<0){bo=0}q=bk;o=bq;var a5=0;if(K){a5=1}else{if(a6>0){a5=Math.floor((bo/a6)*1000)/1000}if(!N){if((bq+((a4-bq)/2)<=bf[1])&&(bk+((bd-bk)/2)<=bf[0])){a=true}N=true}}if(a5>=av){M+=a5;++Y}if(M>=10){c=true}}}};var g=function(a5,w,a4){var j="";var a0="";var i="";j+="cb="+Math.floor(Math.random()*90000000);if(a5){for(var a3 in a5){j+="&"+a3+"="+encodeURIComponent(a5[a3])}}if(w){for(var a1 in w){if(a1!="__aaam"){a0+="&"+a1+"="+encodeURIComponent(w[a1])}}if(w.__aaam){i+="&__aaam="+encodeURIComponent(w.__aaam)}}var aZ=document.createElement("script");aZ.setAttribute("type","text/javascript");var e=(aq+"//adrta.com/i?");e+=j;e+="&"+aJ;if(m.length>0){e+="&"+m.join("")}e+=a0;e+=i;e=e.substring(0,aI);aZ.setAttribute("src",e);if(aZ.readyState){aZ.onreadystatechange=function(){if(aZ.readyState=="loaded"||aZ.readyState=="complete"){aZ.onreadystatechange=null;aZ.parentNode.removeChild(aZ);if(a4){a4()}}}}else{aZ.onload=function(){aZ.onload=null;aZ.parentNode.removeChild(aZ);if(a4){a4()}}}document.getElementsByTagName("head")[0].appendChild(aZ);if(F){var a2=document.createElement("script");a2.setAttribute("type","text/javascript");var n=(aq+"//testbed.pixalate.net/i?");n+=j;n+="&"+aJ;if(m.length>0){n+="&"+m.join("")}n+=a0;n+=i;n=n.substring(0,aI);a2.setAttribute("src",n);if(a2.readyState){a2.onreadystatechange=function(){if(a2.readyState=="loaded"||a2.readyState=="complete"){a2.onreadystatechange=null;a2.parentNode.removeChild(a2);if(a4){a4()}}}}else{a2.onload=function(){a2.onload=null;a2.parentNode.removeChild(a2);if(a4){a4()}}}document.getElementsByTagName("head")[0].appendChild(a2)}};var Z=function(a1){var a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var j="";var a9,a6,a4,a8,a5,a3,a2;var w=0;a1=a1.replace(/\r\n/g,"\n");var a7="";for(var e=0;e<a1.length;e++){var aZ=a1.charCodeAt(e);if(aZ<128){a7+=String.fromCharCode(aZ)}else{if((aZ>127)&&(aZ<2048)){a7+=String.fromCharCode((aZ>>6)|192);a7+=String.fromCharCode((aZ&63)|128)}else{a7+=String.fromCharCode((aZ>>12)|224);a7+=String.fromCharCode(((aZ>>6)&63)|128);a7+=String.fromCharCode((aZ&63)|128)}}}a1=a7;while(w<a1.length){a9=a1.charCodeAt(w++);a6=a1.charCodeAt(w++);a4=a1.charCodeAt(w++);a8=a9>>2;a5=((a9&3)<<4)|(a6>>4);a3=((a6&15)<<2)|(a4>>6);a2=a4&63;if(isNaN(a6)){a3=a2=64}else{if(isNaN(a4)){a2=64}}j=j+a0.charAt(a8)+a0.charAt(a5)+a0.charAt(a3)+a0.charAt(a2)}return j};var r=0;var aS=false;var O=function(w){r++;var i={};var e={};i.__aasv=U;i.__aaii=aj;if(__adrta__aait!=0){i.__aait=__adrta__aait}i.__aatt=aE;if(__adrta__aasi.length>0){i.__aasi=__adrta__aasi;i.__aast=__adrta__aast}if(__adrta__aavi.length>0){i.__aavi=__adrta__aavi;i.__aavt=__adrta__aavt}i.__aavz=aH;i.__aaib=(((k>0)&&v)?1:0);i.__aaai=((k>0)?1:0);i.__aaaa=(a?1:0);i.__aafl=(v)?az.innerHeight||az.document.documentElement.clientHeight:0;i.__aaaf=(aY?1:0);i.__aaag=aV;i.__aaax=Math.floor(q);i.__aaay=Math.floor(o);if((t!=0)||(at!=0)){i.__aasz=t+"x"+at}i.__aapf=(h?1:0);if(ah!=0){i.__aaec=ah}if(!aX){i.__aaae=0;i.__aaat=0;i.__aaav=0;i.__aaas=0;i.__aaah=0;i.__aaph=0;i.__aapw=0;i.__aapc=0;i.__aap1=0;i.__aap2=0;i.__aap3=0;i.__aap4=0;i.__aap5=0}else{i.__aaup=r;h=false;if(Y==0){i.__aaat=0;i.__aaae=0}else{i.__aaat=Y*aB;i.__aaae=Math.round((M/Y)*1000)/1000;if(i.__aaat<=0||i.__aaae<=0){i.__aaat=0;i.__aaae=0}}i.__aaav=(c?1:0);M=0;Y=0;i.__aaas=al();i.__aaah=D();if(i.__aaas<0){i.__aaas=0}if(i.__aaah<0){i.__aaah=0}if(i.__aaat>i.__aaas){i.__aaat=i.__aaas}if(i.__aaah>i.__aaas){i.__aaah=i.__aaas}if(J>0){i.__aapc=J*aB;J=0}if(aO>0){i.__aaph=Math.ceil(V[0]/aO);i.__aapw=Math.ceil(V[1]/aO);i.__aap1=Math.round((V[2]/aO)*1000)/1000;i.__aap2=Math.round((V[3]/aO)*1000)/1000;i.__aap3=Math.round((V[4]/aO)*1000)/1000;i.__aap4=Math.round((V[5]/aO)*1000)/1000;i.__aap5=Math.round((V[6]/aO)*1000)/1000;for(var j=0;j<7;++j){V[j]=0}aO=0}else{i.__aaph=0;i.__aapw=0;i.__aapc=0;i.__aap1=0;i.__aap2=0;i.__aap3=0;i.__aap4=0;i.__aap5=0}}if(ap){i.__aaab=1}if(screen&&screen.width&&screen.height){i.__aass=screen.width+"x"+screen.height}if(an){i.__aaim=1}if(l){i.__aawm=1}if(ai){i.__aanf=1}e.__aapu=aA;e.__aapr=ad;if(__adrta__aadb){i.__aadb=1;if(!aS){e.__aaam=Z(G.parentNode.innerHTML);aS=true}}g(i,e,w)};var H=s[aU++];var b=new Date().getTime()+H;var ag=false;if(swfobject.hasFlashPlayerVersion("9.0.0")){ai=true}function ak(){}ak.tag=function(i){var e=/\$\{PXL8_CLICK}/g;return i.replace(e,ak.getClickURL())};ak.getClickURL=function(){var e=aQ.join("&");if(m.length>0){e+="&"+m.join("")}return"http://adrta.com/c?clid="+S+"&"+e+"&__aaii="+aj+"&redirect="};ak.updateVisibility=function(e){c=e;if(!ag&&c){O();ag=true}};ak.isReady=function(){an=true;l=true;return true};var aR=false;var aD=function(){if(aY&&!aR){aR=true;if(ai&&(k>0)&&!((k>0)&&v)){var e=document.createElement("DIV");e.id="__adrta__pp_"+aj;e.style.width="1px";e.style.height="1px";e.style.top=at*0.5+"px";e.style.left="10px";e.style.position="absolute";document.body.insertBefore(e,document.body.firstChild);var i=("https:"==document.location.protocol?"https://":"http://");swfobject.embedSWF(i+"d2jqd13f29uorf.cloudfront.net/pp.pix","__adrta__pp_"+aj,"1","1","8","",{scriptId:aj},{swliveconnect:"true",allowscriptaccess:"always",wmode:"transparent"},{style:"top: "+at*0.5+"px; left: 10px; position: absolute;"});an=true}}};aD();var z=function(){try{var i=new Date().getTime();if(!aY){aF()}aD();if(aY&&(__adrta__aait>0)&&(__adrta__aasi.length>0)&&(__adrta__aast>0)&&(__adrta__aavi.length>0)&&(__adrta__aavt>0)){y();if(v){l=true;an=true}if(!ag&&c){O();ag=true;b=i+H}else{if((h||(M>0))&&(b<=i)){O();if((k>0)&&!((k>0)&&v)){H=s[aU++]}else{H=s[aU++]}b=i+H}}}}catch(j){}if(H){window.setTimeout(z,aB)}};var A=function(i){document.removeEventListener("webkitvisibilitychange",A);if(window.__adrta__aasm==1){window.setTimeout(O,1000);window.setTimeout(z,100+aB)}else{window.__adrta__aasm=1;O();window.setTimeout(z,aB)}};if((typeof document.webkitVisibilityState=="undefined")||(typeof document.webkitVisibilityState!="undefined"&&document.webkitVisibilityState!="prerender")){if(window.__adrta__aasm==1){window.setTimeout(O,1000);window.setTimeout(z,100+aB)}else{window.__adrta__aasm=1;O();window.setTimeout(z,aB)}}else{if(typeof document.webkitVisibilityState!="undefined"&&document.webkitVisibilityState=="prerender"){document.addEventListener("webkitvisibilitychange",A,false)}}return ak})();