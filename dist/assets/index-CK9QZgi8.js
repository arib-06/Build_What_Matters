(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))g(f);new MutationObserver(f=>{for(const w of f)if(w.type==="childList")for(const C of w.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&g(C)}).observe(document,{childList:!0,subtree:!0});function c(f){const w={};return f.integrity&&(w.integrity=f.integrity),f.referrerPolicy&&(w.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?w.credentials="include":f.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function g(f){if(f.ep)return;f.ep=!0;const w=c(f);fetch(f.href,w)}})();function tu(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Zo={exports:{}},Vr={},ea={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fc;function Zd(){if(Fc)return J;Fc=1;var l=Symbol.for("react.element"),p=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),C=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),H=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),q=Symbol.iterator;function L(m){return m===null||typeof m!="object"?null:(m=q&&m[q]||m["@@iterator"],typeof m=="function"?m:null)}var ce={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ke=Object.assign,se={};function Z(m,b,W){this.props=m,this.context=b,this.refs=se,this.updater=W||ce}Z.prototype.isReactComponent={},Z.prototype.setState=function(m,b){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,b,"setState")},Z.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function Te(){}Te.prototype=Z.prototype;function Ae(m,b,W){this.props=m,this.context=b,this.refs=se,this.updater=W||ce}var ze=Ae.prototype=new Te;ze.constructor=Ae,ke(ze,Z.prototype),ze.isPureReactComponent=!0;var X=Array.isArray,Qe=Object.prototype.hasOwnProperty,Me={current:null},He={key:!0,ref:!0,__self:!0,__source:!0};function Ne(m,b,W){var K,ee={},Y=null,ue=null;if(b!=null)for(K in b.ref!==void 0&&(ue=b.ref),b.key!==void 0&&(Y=""+b.key),b)Qe.call(b,K)&&!He.hasOwnProperty(K)&&(ee[K]=b[K]);var re=arguments.length-2;if(re===1)ee.children=W;else if(1<re){for(var pe=Array(re),ve=0;ve<re;ve++)pe[ve]=arguments[ve+2];ee.children=pe}if(m&&m.defaultProps)for(K in re=m.defaultProps,re)ee[K]===void 0&&(ee[K]=re[K]);return{$$typeof:l,type:m,key:Y,ref:ue,props:ee,_owner:Me.current}}function ln(m,b){return{$$typeof:l,type:m.type,key:b,ref:m.ref,props:m.props,_owner:m._owner}}function De(m){return typeof m=="object"&&m!==null&&m.$$typeof===l}function hn(m){var b={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(W){return b[W]})}var Pe=/\/+/g;function We(m,b){return typeof m=="object"&&m!==null&&m.key!=null?hn(""+m.key):b.toString(36)}function Se(m,b,W,K,ee){var Y=typeof m;(Y==="undefined"||Y==="boolean")&&(m=null);var ue=!1;if(m===null)ue=!0;else switch(Y){case"string":case"number":ue=!0;break;case"object":switch(m.$$typeof){case l:case p:ue=!0}}if(ue)return ue=m,ee=ee(ue),m=K===""?"."+We(ue,0):K,X(ee)?(W="",m!=null&&(W=m.replace(Pe,"$&/")+"/"),Se(ee,b,W,"",function(ve){return ve})):ee!=null&&(De(ee)&&(ee=ln(ee,W+(!ee.key||ue&&ue.key===ee.key?"":(""+ee.key).replace(Pe,"$&/")+"/")+m)),b.push(ee)),1;if(ue=0,K=K===""?".":K+":",X(m))for(var re=0;re<m.length;re++){Y=m[re];var pe=K+We(Y,re);ue+=Se(Y,b,W,pe,ee)}else if(pe=L(m),typeof pe=="function")for(m=pe.call(m),re=0;!(Y=m.next()).done;)Y=Y.value,pe=K+We(Y,re++),ue+=Se(Y,b,W,pe,ee);else if(Y==="object")throw b=String(m),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return ue}function Xe(m,b,W){if(m==null)return m;var K=[],ee=0;return Se(m,K,"","",function(Y){return b.call(W,Y,ee++)}),K}function Be(m){if(m._status===-1){var b=m._result;b=b(),b.then(function(W){(m._status===0||m._status===-1)&&(m._status=1,m._result=W)},function(W){(m._status===0||m._status===-1)&&(m._status=2,m._result=W)}),m._status===-1&&(m._status=0,m._result=b)}if(m._status===1)return m._result.default;throw m._result}var ge={current:null},A={transition:null},O={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:A,ReactCurrentOwner:Me};function M(){throw Error("act(...) is not supported in production builds of React.")}return J.Children={map:Xe,forEach:function(m,b,W){Xe(m,function(){b.apply(this,arguments)},W)},count:function(m){var b=0;return Xe(m,function(){b++}),b},toArray:function(m){return Xe(m,function(b){return b})||[]},only:function(m){if(!De(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},J.Component=Z,J.Fragment=c,J.Profiler=f,J.PureComponent=Ae,J.StrictMode=g,J.Suspense=$,J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,J.act=M,J.cloneElement=function(m,b,W){if(m==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+m+".");var K=ke({},m.props),ee=m.key,Y=m.ref,ue=m._owner;if(b!=null){if(b.ref!==void 0&&(Y=b.ref,ue=Me.current),b.key!==void 0&&(ee=""+b.key),m.type&&m.type.defaultProps)var re=m.type.defaultProps;for(pe in b)Qe.call(b,pe)&&!He.hasOwnProperty(pe)&&(K[pe]=b[pe]===void 0&&re!==void 0?re[pe]:b[pe])}var pe=arguments.length-2;if(pe===1)K.children=W;else if(1<pe){re=Array(pe);for(var ve=0;ve<pe;ve++)re[ve]=arguments[ve+2];K.children=re}return{$$typeof:l,type:m.type,key:ee,ref:Y,props:K,_owner:ue}},J.createContext=function(m){return m={$$typeof:C,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},m.Provider={$$typeof:w,_context:m},m.Consumer=m},J.createElement=Ne,J.createFactory=function(m){var b=Ne.bind(null,m);return b.type=m,b},J.createRef=function(){return{current:null}},J.forwardRef=function(m){return{$$typeof:D,render:m}},J.isValidElement=De,J.lazy=function(m){return{$$typeof:te,_payload:{_status:-1,_result:m},_init:Be}},J.memo=function(m,b){return{$$typeof:H,type:m,compare:b===void 0?null:b}},J.startTransition=function(m){var b=A.transition;A.transition={};try{m()}finally{A.transition=b}},J.unstable_act=M,J.useCallback=function(m,b){return ge.current.useCallback(m,b)},J.useContext=function(m){return ge.current.useContext(m)},J.useDebugValue=function(){},J.useDeferredValue=function(m){return ge.current.useDeferredValue(m)},J.useEffect=function(m,b){return ge.current.useEffect(m,b)},J.useId=function(){return ge.current.useId()},J.useImperativeHandle=function(m,b,W){return ge.current.useImperativeHandle(m,b,W)},J.useInsertionEffect=function(m,b){return ge.current.useInsertionEffect(m,b)},J.useLayoutEffect=function(m,b){return ge.current.useLayoutEffect(m,b)},J.useMemo=function(m,b){return ge.current.useMemo(m,b)},J.useReducer=function(m,b,W){return ge.current.useReducer(m,b,W)},J.useRef=function(m){return ge.current.useRef(m)},J.useState=function(m){return ge.current.useState(m)},J.useSyncExternalStore=function(m,b,W){return ge.current.useSyncExternalStore(m,b,W)},J.useTransition=function(){return ge.current.useTransition()},J.version="18.3.1",J}var zc;function ca(){return zc||(zc=1,ea.exports=Zd()),ea.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hc;function ep(){if(Hc)return Vr;Hc=1;var l=ca(),p=Symbol.for("react.element"),c=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,f=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function C(D,$,H){var te,q={},L=null,ce=null;H!==void 0&&(L=""+H),$.key!==void 0&&(L=""+$.key),$.ref!==void 0&&(ce=$.ref);for(te in $)g.call($,te)&&!w.hasOwnProperty(te)&&(q[te]=$[te]);if(D&&D.defaultProps)for(te in $=D.defaultProps,$)q[te]===void 0&&(q[te]=$[te]);return{$$typeof:p,type:D,key:L,ref:ce,props:q,_owner:f.current}}return Vr.Fragment=c,Vr.jsx=C,Vr.jsxs=C,Vr}var Wc;function np(){return Wc||(Wc=1,Zo.exports=ep()),Zo.exports}var r=np(),G=ca();const tp=tu(G);var ds={},na={exports:{}},an={},ta={exports:{}},ra={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vc;function rp(){return Vc||(Vc=1,(function(l){function p(A,O){var M=A.length;A.push(O);e:for(;0<M;){var m=M-1>>>1,b=A[m];if(0<f(b,O))A[m]=O,A[M]=b,M=m;else break e}}function c(A){return A.length===0?null:A[0]}function g(A){if(A.length===0)return null;var O=A[0],M=A.pop();if(M!==O){A[0]=M;e:for(var m=0,b=A.length,W=b>>>1;m<W;){var K=2*(m+1)-1,ee=A[K],Y=K+1,ue=A[Y];if(0>f(ee,M))Y<b&&0>f(ue,ee)?(A[m]=ue,A[Y]=M,m=Y):(A[m]=ee,A[K]=M,m=K);else if(Y<b&&0>f(ue,M))A[m]=ue,A[Y]=M,m=Y;else break e}}return O}function f(A,O){var M=A.sortIndex-O.sortIndex;return M!==0?M:A.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;l.unstable_now=function(){return w.now()}}else{var C=Date,D=C.now();l.unstable_now=function(){return C.now()-D}}var $=[],H=[],te=1,q=null,L=3,ce=!1,ke=!1,se=!1,Z=typeof setTimeout=="function"?setTimeout:null,Te=typeof clearTimeout=="function"?clearTimeout:null,Ae=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ze(A){for(var O=c(H);O!==null;){if(O.callback===null)g(H);else if(O.startTime<=A)g(H),O.sortIndex=O.expirationTime,p($,O);else break;O=c(H)}}function X(A){if(se=!1,ze(A),!ke)if(c($)!==null)ke=!0,Be(Qe);else{var O=c(H);O!==null&&ge(X,O.startTime-A)}}function Qe(A,O){ke=!1,se&&(se=!1,Te(Ne),Ne=-1),ce=!0;var M=L;try{for(ze(O),q=c($);q!==null&&(!(q.expirationTime>O)||A&&!hn());){var m=q.callback;if(typeof m=="function"){q.callback=null,L=q.priorityLevel;var b=m(q.expirationTime<=O);O=l.unstable_now(),typeof b=="function"?q.callback=b:q===c($)&&g($),ze(O)}else g($);q=c($)}if(q!==null)var W=!0;else{var K=c(H);K!==null&&ge(X,K.startTime-O),W=!1}return W}finally{q=null,L=M,ce=!1}}var Me=!1,He=null,Ne=-1,ln=5,De=-1;function hn(){return!(l.unstable_now()-De<ln)}function Pe(){if(He!==null){var A=l.unstable_now();De=A;var O=!0;try{O=He(!0,A)}finally{O?We():(Me=!1,He=null)}}else Me=!1}var We;if(typeof Ae=="function")We=function(){Ae(Pe)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,Xe=Se.port2;Se.port1.onmessage=Pe,We=function(){Xe.postMessage(null)}}else We=function(){Z(Pe,0)};function Be(A){He=A,Me||(Me=!0,We())}function ge(A,O){Ne=Z(function(){A(l.unstable_now())},O)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(A){A.callback=null},l.unstable_continueExecution=function(){ke||ce||(ke=!0,Be(Qe))},l.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ln=0<A?Math.floor(1e3/A):5},l.unstable_getCurrentPriorityLevel=function(){return L},l.unstable_getFirstCallbackNode=function(){return c($)},l.unstable_next=function(A){switch(L){case 1:case 2:case 3:var O=3;break;default:O=L}var M=L;L=O;try{return A()}finally{L=M}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(A,O){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var M=L;L=A;try{return O()}finally{L=M}},l.unstable_scheduleCallback=function(A,O,M){var m=l.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?m+M:m):M=m,A){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=M+b,A={id:te++,callback:O,priorityLevel:A,startTime:M,expirationTime:b,sortIndex:-1},M>m?(A.sortIndex=M,p(H,A),c($)===null&&A===c(H)&&(se?(Te(Ne),Ne=-1):se=!0,ge(X,M-m))):(A.sortIndex=b,p($,A),ke||ce||(ke=!0,Be(Qe))),A},l.unstable_shouldYield=hn,l.unstable_wrapCallback=function(A){var O=L;return function(){var M=L;L=O;try{return A.apply(this,arguments)}finally{L=M}}}})(ra)),ra}var Yc;function ip(){return Yc||(Yc=1,ta.exports=rp()),ta.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kc;function sp(){if(Kc)return an;Kc=1;var l=ca(),p=ip();function c(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g=new Set,f={};function w(e,n){C(e,n),C(e+"Capture",n)}function C(e,n){for(f[e]=n,e=0;e<n.length;e++)g.add(n[e])}var D=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$=Object.prototype.hasOwnProperty,H=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,te={},q={};function L(e){return $.call(q,e)?!0:$.call(te,e)?!1:H.test(e)?q[e]=!0:(te[e]=!0,!1)}function ce(e,n,t,i){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ke(e,n,t,i){if(n===null||typeof n>"u"||ce(e,n,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function se(e,n,t,i,s,o,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=a}var Z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Z[e]=new se(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Z[n]=new se(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Z[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Z[e]=new se(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Z[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Z[e]=new se(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Z[e]=new se(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Z[e]=new se(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Z[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Te=/[\-:]([a-z])/g;function Ae(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Te,Ae);Z[n]=new se(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Te,Ae);Z[n]=new se(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Te,Ae);Z[n]=new se(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Z[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)}),Z.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Z[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function ze(e,n,t,i){var s=Z.hasOwnProperty(n)?Z[n]:null;(s!==null?s.type!==0:i||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(ke(n,t,s,i)&&(t=null),i||s===null?L(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):s.mustUseProperty?e[s.propertyName]=t===null?s.type===3?!1:"":t:(n=s.attributeName,i=s.attributeNamespace,t===null?e.removeAttribute(n):(s=s.type,t=s===3||s===4&&t===!0?"":""+t,i?e.setAttributeNS(i,n,t):e.setAttribute(n,t))))}var X=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qe=Symbol.for("react.element"),Me=Symbol.for("react.portal"),He=Symbol.for("react.fragment"),Ne=Symbol.for("react.strict_mode"),ln=Symbol.for("react.profiler"),De=Symbol.for("react.provider"),hn=Symbol.for("react.context"),Pe=Symbol.for("react.forward_ref"),We=Symbol.for("react.suspense"),Se=Symbol.for("react.suspense_list"),Xe=Symbol.for("react.memo"),Be=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),A=Symbol.iterator;function O(e){return e===null||typeof e!="object"?null:(e=A&&e[A]||e["@@iterator"],typeof e=="function"?e:null)}var M=Object.assign,m;function b(e){if(m===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);m=n&&n[1]||""}return`
`+m+e}var W=!1;function K(e,n){if(!e||W)return"";W=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(y){var i=y}Reflect.construct(e,[],n)}else{try{n.call()}catch(y){i=y}e.call(n.prototype)}else{try{throw Error()}catch(y){i=y}e()}}catch(y){if(y&&i&&typeof y.stack=="string"){for(var s=y.stack.split(`
`),o=i.stack.split(`
`),a=s.length-1,u=o.length-1;1<=a&&0<=u&&s[a]!==o[u];)u--;for(;1<=a&&0<=u;a--,u--)if(s[a]!==o[u]){if(a!==1||u!==1)do if(a--,u--,0>u||s[a]!==o[u]){var d=`
`+s[a].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=a&&0<=u);break}}}finally{W=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?b(e):""}function ee(e){switch(e.tag){case 5:return b(e.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return e=K(e.type,!1),e;case 11:return e=K(e.type.render,!1),e;case 1:return e=K(e.type,!0),e;default:return""}}function Y(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case He:return"Fragment";case Me:return"Portal";case ln:return"Profiler";case Ne:return"StrictMode";case We:return"Suspense";case Se:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hn:return(e.displayName||"Context")+".Consumer";case De:return(e._context.displayName||"Context")+".Provider";case Pe:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xe:return n=e.displayName||null,n!==null?n:Y(e.type)||"Memo";case Be:n=e._payload,e=e._init;try{return Y(e(n))}catch{}}return null}function ue(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Y(n);case 8:return n===Ne?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function re(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ve(e){var n=pe(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),i=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var s=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return s.call(this)},set:function(a){i=""+a,o.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function oe(e){e._valueTracker||(e._valueTracker=ve(e))}function Gr(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),i="";return e&&(i=pe(e)?e.checked?"true":"false":e.value),e=i,e!==t?(n.setValue(e),!0):!1}function An(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function nr(e,n){var t=n.checked;return M({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Qr(e,n){var t=n.defaultValue==null?"":n.defaultValue,i=n.checked!=null?n.checked:n.defaultChecked;t=re(n.value!=null?n.value:t),e._wrapperState={initialChecked:i,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Xr(e,n){n=n.checked,n!=null&&ze(e,"checked",n,!1)}function tr(e,n){Xr(e,n);var t=re(n.value),i=n.type;if(t!=null)i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?rr(e,n.type,t):n.hasOwnProperty("defaultValue")&&rr(e,n.type,re(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Jr(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var i=n.type;if(!(i!=="submit"&&i!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function rr(e,n,t){(n!=="number"||An(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var ft=Array.isArray;function Vn(e,n,t,i){if(e=e.options,n){n={};for(var s=0;s<t.length;s++)n["$"+t[s]]=!0;for(t=0;t<e.length;t++)s=n.hasOwnProperty("$"+e[t].value),e[t].selected!==s&&(e[t].selected=s),s&&i&&(e[t].defaultSelected=!0)}else{for(t=""+re(t),n=null,s=0;s<e.length;s++){if(e[s].value===t){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}n!==null||e[s].disabled||(n=e[s])}n!==null&&(n.selected=!0)}}function ir(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(c(91));return M({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zr(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(c(92));if(ft(t)){if(1<t.length)throw Error(c(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:re(t)}}function ei(e,n){var t=re(n.value),i=re(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),i!=null&&(e.defaultValue=""+i)}function ni(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ti(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sr(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ti(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mt,ri=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,i,s){MSApp.execUnsafeLocalFunction(function(){return e(n,t,i,s)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(mt=mt||document.createElement("div"),mt.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=mt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function gt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var xt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ms=["Webkit","ms","Moz","O"];Object.keys(xt).forEach(function(e){ms.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),xt[n]=xt[e]})});function _(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||xt.hasOwnProperty(e)&&xt[e]?(""+n).trim():n+"px"}function I(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var i=t.indexOf("--")===0,s=_(t,n[t],i);t==="float"&&(t="cssFloat"),i?e.setProperty(t,s):e[t]=s}}var ne=M({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function je(e,n){if(n){if(ne[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(c(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(c(61))}if(n.style!=null&&typeof n.style!="object")throw Error(c(62))}}function $e(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fn=null;function _n(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bn=null,In=null,Yn=null;function or(e){if(e=Ir(e)){if(typeof bn!="function")throw Error(c(280));var n=e.stateNode;n&&(n=Ei(n),bn(e.stateNode,e.type,n))}}function ar(e){In?Yn?Yn.push(e):Yn=[e]:In=e}function lr(){if(In){var e=In,n=Yn;if(Yn=In=null,or(e),n)for(e=0;e<n.length;e++)or(n[e])}}function cr(e,n){return e(n)}function ie(){}var Je=!1;function It(e,n,t){if(Je)return e(n,t);Je=!0;try{return cr(e,n,t)}finally{Je=!1,(In!==null||Yn!==null)&&(ie(),lr())}}function ur(e,n){var t=e.stateNode;if(t===null)return null;var i=Ei(t);if(i===null)return null;t=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(c(231,n,typeof t));return t}var gs=!1;if(D)try{var dr={};Object.defineProperty(dr,"passive",{get:function(){gs=!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{gs=!1}function su(e,n,t,i,s,o,a,u,d){var y=Array.prototype.slice.call(arguments,3);try{n.apply(t,y)}catch(j){this.onError(j)}}var pr=!1,ii=null,si=!1,xs=null,ou={onError:function(e){pr=!0,ii=e}};function au(e,n,t,i,s,o,a,u,d){pr=!1,ii=null,su.apply(ou,arguments)}function lu(e,n,t,i,s,o,a,u,d){if(au.apply(this,arguments),pr){if(pr){var y=ii;pr=!1,ii=null}else throw Error(c(198));si||(si=!0,xs=y)}}function vt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function da(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function pa(e){if(vt(e)!==e)throw Error(c(188))}function cu(e){var n=e.alternate;if(!n){if(n=vt(e),n===null)throw Error(c(188));return n!==e?null:e}for(var t=e,i=n;;){var s=t.return;if(s===null)break;var o=s.alternate;if(o===null){if(i=s.return,i!==null){t=i;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===t)return pa(s),e;if(o===i)return pa(s),n;o=o.sibling}throw Error(c(188))}if(t.return!==i.return)t=s,i=o;else{for(var a=!1,u=s.child;u;){if(u===t){a=!0,t=s,i=o;break}if(u===i){a=!0,i=s,t=o;break}u=u.sibling}if(!a){for(u=o.child;u;){if(u===t){a=!0,t=o,i=s;break}if(u===i){a=!0,i=o,t=s;break}u=u.sibling}if(!a)throw Error(c(189))}}if(t.alternate!==i)throw Error(c(190))}if(t.tag!==3)throw Error(c(188));return t.stateNode.current===t?e:n}function ha(e){return e=cu(e),e!==null?fa(e):null}function fa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=fa(e);if(n!==null)return n;e=e.sibling}return null}var ma=p.unstable_scheduleCallback,ga=p.unstable_cancelCallback,uu=p.unstable_shouldYield,du=p.unstable_requestPaint,Ce=p.unstable_now,pu=p.unstable_getCurrentPriorityLevel,vs=p.unstable_ImmediatePriority,xa=p.unstable_UserBlockingPriority,oi=p.unstable_NormalPriority,hu=p.unstable_LowPriority,va=p.unstable_IdlePriority,ai=null,Tn=null;function fu(e){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(ai,e,void 0,(e.current.flags&128)===128)}catch{}}var kn=Math.clz32?Math.clz32:xu,mu=Math.log,gu=Math.LN2;function xu(e){return e>>>=0,e===0?32:31-(mu(e)/gu|0)|0}var li=64,ci=4194304;function hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ui(e,n){var t=e.pendingLanes;if(t===0)return 0;var i=0,s=e.suspendedLanes,o=e.pingedLanes,a=t&268435455;if(a!==0){var u=a&~s;u!==0?i=hr(u):(o&=a,o!==0&&(i=hr(o)))}else a=t&~s,a!==0?i=hr(a):o!==0&&(i=hr(o));if(i===0)return 0;if(n!==0&&n!==i&&(n&s)===0&&(s=i&-i,o=n&-n,s>=o||s===16&&(o&4194240)!==0))return n;if((i&4)!==0&&(i|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=i;0<n;)t=31-kn(n),s=1<<t,i|=e[t],n&=~s;return i}function vu(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yu(e,n){for(var t=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-kn(o),u=1<<a,d=s[a];d===-1?((u&t)===0||(u&i)!==0)&&(s[a]=vu(u,n)):d<=n&&(e.expiredLanes|=u),o&=~u}}function ys(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ya(){var e=li;return li<<=1,(li&4194240)===0&&(li=64),e}function ws(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function fr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-kn(n),e[n]=t}function wu(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<t;){var s=31-kn(t),o=1<<s;n[s]=0,i[s]=-1,e[s]=-1,t&=~o}}function bs(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var i=31-kn(t),s=1<<i;s&n|e[i]&n&&(e[i]|=n),t&=~s}}var de=0;function wa(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ba,ks,ka,Sa,ja,Ss=!1,di=[],Kn=null,Gn=null,Qn=null,mr=new Map,gr=new Map,Xn=[],bu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ca(e,n){switch(e){case"focusin":case"focusout":Kn=null;break;case"dragenter":case"dragleave":Gn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":mr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":gr.delete(n.pointerId)}}function xr(e,n,t,i,s,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:i,nativeEvent:o,targetContainers:[s]},n!==null&&(n=Ir(n),n!==null&&ks(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,s!==null&&n.indexOf(s)===-1&&n.push(s),e)}function ku(e,n,t,i,s){switch(n){case"focusin":return Kn=xr(Kn,e,n,t,i,s),!0;case"dragenter":return Gn=xr(Gn,e,n,t,i,s),!0;case"mouseover":return Qn=xr(Qn,e,n,t,i,s),!0;case"pointerover":var o=s.pointerId;return mr.set(o,xr(mr.get(o)||null,e,n,t,i,s)),!0;case"gotpointercapture":return o=s.pointerId,gr.set(o,xr(gr.get(o)||null,e,n,t,i,s)),!0}return!1}function Ea(e){var n=yt(e.target);if(n!==null){var t=vt(n);if(t!==null){if(n=t.tag,n===13){if(n=da(t),n!==null){e.blockedOn=n,ja(e.priority,function(){ka(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Cs(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var i=new t.constructor(t.type,t);fn=i,t.target.dispatchEvent(i),fn=null}else return n=Ir(t),n!==null&&ks(n),e.blockedOn=t,!1;n.shift()}return!0}function Na(e,n,t){pi(e)&&t.delete(n)}function Su(){Ss=!1,Kn!==null&&pi(Kn)&&(Kn=null),Gn!==null&&pi(Gn)&&(Gn=null),Qn!==null&&pi(Qn)&&(Qn=null),mr.forEach(Na),gr.forEach(Na)}function vr(e,n){e.blockedOn===n&&(e.blockedOn=null,Ss||(Ss=!0,p.unstable_scheduleCallback(p.unstable_NormalPriority,Su)))}function yr(e){function n(s){return vr(s,e)}if(0<di.length){vr(di[0],e);for(var t=1;t<di.length;t++){var i=di[t];i.blockedOn===e&&(i.blockedOn=null)}}for(Kn!==null&&vr(Kn,e),Gn!==null&&vr(Gn,e),Qn!==null&&vr(Qn,e),mr.forEach(n),gr.forEach(n),t=0;t<Xn.length;t++)i=Xn[t],i.blockedOn===e&&(i.blockedOn=null);for(;0<Xn.length&&(t=Xn[0],t.blockedOn===null);)Ea(t),t.blockedOn===null&&Xn.shift()}var Tt=X.ReactCurrentBatchConfig,hi=!0;function ju(e,n,t,i){var s=de,o=Tt.transition;Tt.transition=null;try{de=1,js(e,n,t,i)}finally{de=s,Tt.transition=o}}function Cu(e,n,t,i){var s=de,o=Tt.transition;Tt.transition=null;try{de=4,js(e,n,t,i)}finally{de=s,Tt.transition=o}}function js(e,n,t,i){if(hi){var s=Cs(e,n,t,i);if(s===null)Fs(e,n,i,fi,t),Ca(e,i);else if(ku(s,e,n,t,i))i.stopPropagation();else if(Ca(e,i),n&4&&-1<bu.indexOf(e)){for(;s!==null;){var o=Ir(s);if(o!==null&&ba(o),o=Cs(e,n,t,i),o===null&&Fs(e,n,i,fi,t),o===s)break;s=o}s!==null&&i.stopPropagation()}else Fs(e,n,i,null,t)}}var fi=null;function Cs(e,n,t,i){if(fi=null,e=_n(i),e=yt(e),e!==null)if(n=vt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=da(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return fi=e,null}function La(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pu()){case vs:return 1;case xa:return 4;case oi:case hu:return 16;case va:return 536870912;default:return 16}default:return 16}}var Jn=null,Es=null,mi=null;function Aa(){if(mi)return mi;var e,n=Es,t=n.length,i,s="value"in Jn?Jn.value:Jn.textContent,o=s.length;for(e=0;e<t&&n[e]===s[e];e++);var a=t-e;for(i=1;i<=a&&n[t-i]===s[o-i];i++);return mi=s.slice(e,1<i?1-i:void 0)}function gi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function xi(){return!0}function _a(){return!1}function cn(e){function n(t,i,s,o,a){this._reactName=t,this._targetInst=s,this.type=i,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?xi:_a,this.isPropagationStopped=_a,this}return M(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=xi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=xi)},persist:function(){},isPersistent:xi}),n}var Mt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ns=cn(Mt),wr=M({},Mt,{view:0,detail:0}),Eu=cn(wr),Ls,As,br,vi=M({},wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Is,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==br&&(br&&e.type==="mousemove"?(Ls=e.screenX-br.screenX,As=e.screenY-br.screenY):As=Ls=0,br=e),Ls)},movementY:function(e){return"movementY"in e?e.movementY:As}}),Ia=cn(vi),Nu=M({},vi,{dataTransfer:0}),Lu=cn(Nu),Au=M({},wr,{relatedTarget:0}),_s=cn(Au),_u=M({},Mt,{animationName:0,elapsedTime:0,pseudoElement:0}),Iu=cn(_u),Tu=M({},Mt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mu=cn(Tu),Du=M({},Mt,{data:0}),Ta=cn(Du),Pu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ru(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Uu[e])?!!n[e]:!1}function Is(){return Ru}var qu=M({},wr,{key:function(e){if(e.key){var n=Pu[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=gi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Is,charCode:function(e){return e.type==="keypress"?gi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$u=cn(qu),Ou=M({},vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ma=cn(Ou),Fu=M({},wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Is}),zu=cn(Fu),Hu=M({},Mt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wu=cn(Hu),Vu=M({},vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yu=cn(Vu),Ku=[9,13,27,32],Ts=D&&"CompositionEvent"in window,kr=null;D&&"documentMode"in document&&(kr=document.documentMode);var Gu=D&&"TextEvent"in window&&!kr,Da=D&&(!Ts||kr&&8<kr&&11>=kr),Pa=" ",Ba=!1;function Ua(e,n){switch(e){case"keyup":return Ku.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ra(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dt=!1;function Qu(e,n){switch(e){case"compositionend":return Ra(n);case"keypress":return n.which!==32?null:(Ba=!0,Pa);case"textInput":return e=n.data,e===Pa&&Ba?null:e;default:return null}}function Xu(e,n){if(Dt)return e==="compositionend"||!Ts&&Ua(e,n)?(e=Aa(),mi=Es=Jn=null,Dt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Da&&n.locale!=="ko"?null:n.data;default:return null}}var Ju={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ju[e.type]:n==="textarea"}function $a(e,n,t,i){ar(i),n=Si(n,"onChange"),0<n.length&&(t=new Ns("onChange","change",null,t,i),e.push({event:t,listeners:n}))}var Sr=null,jr=null;function Zu(e){il(e,0)}function yi(e){var n=qt(e);if(Gr(n))return e}function ed(e,n){if(e==="change")return n}var Oa=!1;if(D){var Ms;if(D){var Ds="oninput"in document;if(!Ds){var Fa=document.createElement("div");Fa.setAttribute("oninput","return;"),Ds=typeof Fa.oninput=="function"}Ms=Ds}else Ms=!1;Oa=Ms&&(!document.documentMode||9<document.documentMode)}function za(){Sr&&(Sr.detachEvent("onpropertychange",Ha),jr=Sr=null)}function Ha(e){if(e.propertyName==="value"&&yi(jr)){var n=[];$a(n,jr,e,_n(e)),It(Zu,n)}}function nd(e,n,t){e==="focusin"?(za(),Sr=n,jr=t,Sr.attachEvent("onpropertychange",Ha)):e==="focusout"&&za()}function td(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yi(jr)}function rd(e,n){if(e==="click")return yi(n)}function id(e,n){if(e==="input"||e==="change")return yi(n)}function sd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Sn=typeof Object.is=="function"?Object.is:sd;function Cr(e,n){if(Sn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),i=Object.keys(n);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var s=t[i];if(!$.call(n,s)||!Sn(e[s],n[s]))return!1}return!0}function Wa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Va(e,n){var t=Wa(e);e=0;for(var i;t;){if(t.nodeType===3){if(i=e+t.textContent.length,e<=n&&i>=n)return{node:t,offset:n-e};e=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Wa(t)}}function Ya(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ya(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ka(){for(var e=window,n=An();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=An(e.document)}return n}function Ps(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function od(e){var n=Ka(),t=e.focusedElem,i=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ya(t.ownerDocument.documentElement,t)){if(i!==null&&Ps(t)){if(n=i.start,e=i.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var s=t.textContent.length,o=Math.min(i.start,s);i=i.end===void 0?o:Math.min(i.end,s),!e.extend&&o>i&&(s=i,i=o,o=s),s=Va(t,o);var a=Va(t,i);s&&a&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(s.node,s.offset),e.removeAllRanges(),o>i?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ad=D&&"documentMode"in document&&11>=document.documentMode,Pt=null,Bs=null,Er=null,Us=!1;function Ga(e,n,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Us||Pt==null||Pt!==An(i)||(i=Pt,"selectionStart"in i&&Ps(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Er&&Cr(Er,i)||(Er=i,i=Si(Bs,"onSelect"),0<i.length&&(n=new Ns("onSelect","select",null,n,t),e.push({event:n,listeners:i}),n.target=Pt)))}function wi(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Bt={animationend:wi("Animation","AnimationEnd"),animationiteration:wi("Animation","AnimationIteration"),animationstart:wi("Animation","AnimationStart"),transitionend:wi("Transition","TransitionEnd")},Rs={},Qa={};D&&(Qa=document.createElement("div").style,"AnimationEvent"in window||(delete Bt.animationend.animation,delete Bt.animationiteration.animation,delete Bt.animationstart.animation),"TransitionEvent"in window||delete Bt.transitionend.transition);function bi(e){if(Rs[e])return Rs[e];if(!Bt[e])return e;var n=Bt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Qa)return Rs[e]=n[t];return e}var Xa=bi("animationend"),Ja=bi("animationiteration"),Za=bi("animationstart"),el=bi("transitionend"),nl=new Map,tl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zn(e,n){nl.set(e,n),w(n,[e])}for(var qs=0;qs<tl.length;qs++){var $s=tl[qs],ld=$s.toLowerCase(),cd=$s[0].toUpperCase()+$s.slice(1);Zn(ld,"on"+cd)}Zn(Xa,"onAnimationEnd"),Zn(Ja,"onAnimationIteration"),Zn(Za,"onAnimationStart"),Zn("dblclick","onDoubleClick"),Zn("focusin","onFocus"),Zn("focusout","onBlur"),Zn(el,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ud=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nr));function rl(e,n,t){var i=e.type||"unknown-event";e.currentTarget=t,lu(i,n,void 0,e),e.currentTarget=null}function il(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var i=e[t],s=i.event;i=i.listeners;e:{var o=void 0;if(n)for(var a=i.length-1;0<=a;a--){var u=i[a],d=u.instance,y=u.currentTarget;if(u=u.listener,d!==o&&s.isPropagationStopped())break e;rl(s,u,y),o=d}else for(a=0;a<i.length;a++){if(u=i[a],d=u.instance,y=u.currentTarget,u=u.listener,d!==o&&s.isPropagationStopped())break e;rl(s,u,y),o=d}}}if(si)throw e=xs,si=!1,xs=null,e}function fe(e,n){var t=n[Ks];t===void 0&&(t=n[Ks]=new Set);var i=e+"__bubble";t.has(i)||(sl(n,e,2,!1),t.add(i))}function Os(e,n,t){var i=0;n&&(i|=4),sl(t,e,i,n)}var ki="_reactListening"+Math.random().toString(36).slice(2);function Lr(e){if(!e[ki]){e[ki]=!0,g.forEach(function(t){t!=="selectionchange"&&(ud.has(t)||Os(t,!1,e),Os(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ki]||(n[ki]=!0,Os("selectionchange",!1,n))}}function sl(e,n,t,i){switch(La(n)){case 1:var s=ju;break;case 4:s=Cu;break;default:s=js}t=s.bind(null,n,t,e),s=void 0,!gs||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(n,t,{capture:!0,passive:s}):e.addEventListener(n,t,!0):s!==void 0?e.addEventListener(n,t,{passive:s}):e.addEventListener(n,t,!1)}function Fs(e,n,t,i,s){var o=i;if((n&1)===0&&(n&2)===0&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var u=i.stateNode.containerInfo;if(u===s||u.nodeType===8&&u.parentNode===s)break;if(a===4)for(a=i.return;a!==null;){var d=a.tag;if((d===3||d===4)&&(d=a.stateNode.containerInfo,d===s||d.nodeType===8&&d.parentNode===s))return;a=a.return}for(;u!==null;){if(a=yt(u),a===null)return;if(d=a.tag,d===5||d===6){i=o=a;continue e}u=u.parentNode}}i=i.return}It(function(){var y=o,j=_n(t),E=[];e:{var S=nl.get(e);if(S!==void 0){var T=Ns,B=e;switch(e){case"keypress":if(gi(t)===0)break e;case"keydown":case"keyup":T=$u;break;case"focusin":B="focus",T=_s;break;case"focusout":B="blur",T=_s;break;case"beforeblur":case"afterblur":T=_s;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Ia;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=Lu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=zu;break;case Xa:case Ja:case Za:T=Iu;break;case el:T=Wu;break;case"scroll":T=Eu;break;case"wheel":T=Yu;break;case"copy":case"cut":case"paste":T=Mu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Ma}var U=(n&4)!==0,Ee=!U&&e==="scroll",x=U?S!==null?S+"Capture":null:S;U=[];for(var h=y,v;h!==null;){v=h;var N=v.stateNode;if(v.tag===5&&N!==null&&(v=N,x!==null&&(N=ur(h,x),N!=null&&U.push(Ar(h,N,v)))),Ee)break;h=h.return}0<U.length&&(S=new T(S,B,null,t,j),E.push({event:S,listeners:U}))}}if((n&7)===0){e:{if(S=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",S&&t!==fn&&(B=t.relatedTarget||t.fromElement)&&(yt(B)||B[Rn]))break e;if((T||S)&&(S=j.window===j?j:(S=j.ownerDocument)?S.defaultView||S.parentWindow:window,T?(B=t.relatedTarget||t.toElement,T=y,B=B?yt(B):null,B!==null&&(Ee=vt(B),B!==Ee||B.tag!==5&&B.tag!==6)&&(B=null)):(T=null,B=y),T!==B)){if(U=Ia,N="onMouseLeave",x="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(U=Ma,N="onPointerLeave",x="onPointerEnter",h="pointer"),Ee=T==null?S:qt(T),v=B==null?S:qt(B),S=new U(N,h+"leave",T,t,j),S.target=Ee,S.relatedTarget=v,N=null,yt(j)===y&&(U=new U(x,h+"enter",B,t,j),U.target=v,U.relatedTarget=Ee,N=U),Ee=N,T&&B)n:{for(U=T,x=B,h=0,v=U;v;v=Ut(v))h++;for(v=0,N=x;N;N=Ut(N))v++;for(;0<h-v;)U=Ut(U),h--;for(;0<v-h;)x=Ut(x),v--;for(;h--;){if(U===x||x!==null&&U===x.alternate)break n;U=Ut(U),x=Ut(x)}U=null}else U=null;T!==null&&ol(E,S,T,U,!1),B!==null&&Ee!==null&&ol(E,Ee,B,U,!0)}}e:{if(S=y?qt(y):window,T=S.nodeName&&S.nodeName.toLowerCase(),T==="select"||T==="input"&&S.type==="file")var R=ed;else if(qa(S))if(Oa)R=id;else{R=td;var F=nd}else(T=S.nodeName)&&T.toLowerCase()==="input"&&(S.type==="checkbox"||S.type==="radio")&&(R=rd);if(R&&(R=R(e,y))){$a(E,R,t,j);break e}F&&F(e,S,y),e==="focusout"&&(F=S._wrapperState)&&F.controlled&&S.type==="number"&&rr(S,"number",S.value)}switch(F=y?qt(y):window,e){case"focusin":(qa(F)||F.contentEditable==="true")&&(Pt=F,Bs=y,Er=null);break;case"focusout":Er=Bs=Pt=null;break;case"mousedown":Us=!0;break;case"contextmenu":case"mouseup":case"dragend":Us=!1,Ga(E,t,j);break;case"selectionchange":if(ad)break;case"keydown":case"keyup":Ga(E,t,j)}var z;if(Ts)e:{switch(e){case"compositionstart":var V="onCompositionStart";break e;case"compositionend":V="onCompositionEnd";break e;case"compositionupdate":V="onCompositionUpdate";break e}V=void 0}else Dt?Ua(e,t)&&(V="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(V="onCompositionStart");V&&(Da&&t.locale!=="ko"&&(Dt||V!=="onCompositionStart"?V==="onCompositionEnd"&&Dt&&(z=Aa()):(Jn=j,Es="value"in Jn?Jn.value:Jn.textContent,Dt=!0)),F=Si(y,V),0<F.length&&(V=new Ta(V,e,null,t,j),E.push({event:V,listeners:F}),z?V.data=z:(z=Ra(t),z!==null&&(V.data=z)))),(z=Gu?Qu(e,t):Xu(e,t))&&(y=Si(y,"onBeforeInput"),0<y.length&&(j=new Ta("onBeforeInput","beforeinput",null,t,j),E.push({event:j,listeners:y}),j.data=z))}il(E,n)})}function Ar(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Si(e,n){for(var t=n+"Capture",i=[];e!==null;){var s=e,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=ur(e,t),o!=null&&i.unshift(Ar(e,o,s)),o=ur(e,n),o!=null&&i.push(Ar(e,o,s))),e=e.return}return i}function Ut(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ol(e,n,t,i,s){for(var o=n._reactName,a=[];t!==null&&t!==i;){var u=t,d=u.alternate,y=u.stateNode;if(d!==null&&d===i)break;u.tag===5&&y!==null&&(u=y,s?(d=ur(t,o),d!=null&&a.unshift(Ar(t,d,u))):s||(d=ur(t,o),d!=null&&a.push(Ar(t,d,u)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var dd=/\r\n?/g,pd=/\u0000|\uFFFD/g;function al(e){return(typeof e=="string"?e:""+e).replace(dd,`
`).replace(pd,"")}function ji(e,n,t){if(n=al(n),al(e)!==n&&t)throw Error(c(425))}function Ci(){}var zs=null,Hs=null;function Ws(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vs=typeof setTimeout=="function"?setTimeout:void 0,hd=typeof clearTimeout=="function"?clearTimeout:void 0,ll=typeof Promise=="function"?Promise:void 0,fd=typeof queueMicrotask=="function"?queueMicrotask:typeof ll<"u"?function(e){return ll.resolve(null).then(e).catch(md)}:Vs;function md(e){setTimeout(function(){throw e})}function Ys(e,n){var t=n,i=0;do{var s=t.nextSibling;if(e.removeChild(t),s&&s.nodeType===8)if(t=s.data,t==="/$"){if(i===0){e.removeChild(s),yr(n);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=s}while(t);yr(n)}function et(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function cl(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Rt=Math.random().toString(36).slice(2),Mn="__reactFiber$"+Rt,_r="__reactProps$"+Rt,Rn="__reactContainer$"+Rt,Ks="__reactEvents$"+Rt,gd="__reactListeners$"+Rt,xd="__reactHandles$"+Rt;function yt(e){var n=e[Mn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Rn]||t[Mn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=cl(e);e!==null;){if(t=e[Mn])return t;e=cl(e)}return n}e=t,t=e.parentNode}return null}function Ir(e){return e=e[Mn]||e[Rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function Ei(e){return e[_r]||null}var Gs=[],$t=-1;function nt(e){return{current:e}}function me(e){0>$t||(e.current=Gs[$t],Gs[$t]=null,$t--)}function he(e,n){$t++,Gs[$t]=e.current,e.current=n}var tt={},Ve=nt(tt),nn=nt(!1),wt=tt;function Ot(e,n){var t=e.type.contextTypes;if(!t)return tt;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===n)return i.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in t)s[o]=n[o];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=s),s}function tn(e){return e=e.childContextTypes,e!=null}function Ni(){me(nn),me(Ve)}function ul(e,n,t){if(Ve.current!==tt)throw Error(c(168));he(Ve,n),he(nn,t)}function dl(e,n,t){var i=e.stateNode;if(n=n.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var s in i)if(!(s in n))throw Error(c(108,ue(e)||"Unknown",s));return M({},t,i)}function Li(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tt,wt=Ve.current,he(Ve,e),he(nn,nn.current),!0}function pl(e,n,t){var i=e.stateNode;if(!i)throw Error(c(169));t?(e=dl(e,n,wt),i.__reactInternalMemoizedMergedChildContext=e,me(nn),me(Ve),he(Ve,e)):me(nn),he(nn,t)}var qn=null,Ai=!1,Qs=!1;function hl(e){qn===null?qn=[e]:qn.push(e)}function vd(e){Ai=!0,hl(e)}function rt(){if(!Qs&&qn!==null){Qs=!0;var e=0,n=de;try{var t=qn;for(de=1;e<t.length;e++){var i=t[e];do i=i(!0);while(i!==null)}qn=null,Ai=!1}catch(s){throw qn!==null&&(qn=qn.slice(e+1)),ma(vs,rt),s}finally{de=n,Qs=!1}}return null}var Ft=[],zt=0,_i=null,Ii=0,mn=[],gn=0,bt=null,$n=1,On="";function kt(e,n){Ft[zt++]=Ii,Ft[zt++]=_i,_i=e,Ii=n}function fl(e,n,t){mn[gn++]=$n,mn[gn++]=On,mn[gn++]=bt,bt=e;var i=$n;e=On;var s=32-kn(i)-1;i&=~(1<<s),t+=1;var o=32-kn(n)+s;if(30<o){var a=s-s%5;o=(i&(1<<a)-1).toString(32),i>>=a,s-=a,$n=1<<32-kn(n)+s|t<<s|i,On=o+e}else $n=1<<o|t<<s|i,On=e}function Xs(e){e.return!==null&&(kt(e,1),fl(e,1,0))}function Js(e){for(;e===_i;)_i=Ft[--zt],Ft[zt]=null,Ii=Ft[--zt],Ft[zt]=null;for(;e===bt;)bt=mn[--gn],mn[gn]=null,On=mn[--gn],mn[gn]=null,$n=mn[--gn],mn[gn]=null}var un=null,dn=null,xe=!1,jn=null;function ml(e,n){var t=wn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function gl(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,un=e,dn=et(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,un=e,dn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=bt!==null?{id:$n,overflow:On}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=wn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,un=e,dn=null,!0):!1;default:return!1}}function Zs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function eo(e){if(xe){var n=dn;if(n){var t=n;if(!gl(e,n)){if(Zs(e))throw Error(c(418));n=et(t.nextSibling);var i=un;n&&gl(e,n)?ml(i,t):(e.flags=e.flags&-4097|2,xe=!1,un=e)}}else{if(Zs(e))throw Error(c(418));e.flags=e.flags&-4097|2,xe=!1,un=e}}}function xl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;un=e}function Ti(e){if(e!==un)return!1;if(!xe)return xl(e),xe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ws(e.type,e.memoizedProps)),n&&(n=dn)){if(Zs(e))throw vl(),Error(c(418));for(;n;)ml(e,n),n=et(n.nextSibling)}if(xl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){dn=et(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}dn=null}}else dn=un?et(e.stateNode.nextSibling):null;return!0}function vl(){for(var e=dn;e;)e=et(e.nextSibling)}function Ht(){dn=un=null,xe=!1}function no(e){jn===null?jn=[e]:jn.push(e)}var yd=X.ReactCurrentBatchConfig;function Tr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(c(309));var i=t.stateNode}if(!i)throw Error(c(147,e));var s=i,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(a){var u=s.refs;a===null?delete u[o]:u[o]=a},n._stringRef=o,n)}if(typeof e!="string")throw Error(c(284));if(!t._owner)throw Error(c(290,e))}return e}function Mi(e,n){throw e=Object.prototype.toString.call(n),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function yl(e){var n=e._init;return n(e._payload)}function wl(e){function n(x,h){if(e){var v=x.deletions;v===null?(x.deletions=[h],x.flags|=16):v.push(h)}}function t(x,h){if(!e)return null;for(;h!==null;)n(x,h),h=h.sibling;return null}function i(x,h){for(x=new Map;h!==null;)h.key!==null?x.set(h.key,h):x.set(h.index,h),h=h.sibling;return x}function s(x,h){return x=dt(x,h),x.index=0,x.sibling=null,x}function o(x,h,v){return x.index=v,e?(v=x.alternate,v!==null?(v=v.index,v<h?(x.flags|=2,h):v):(x.flags|=2,h)):(x.flags|=1048576,h)}function a(x){return e&&x.alternate===null&&(x.flags|=2),x}function u(x,h,v,N){return h===null||h.tag!==6?(h=Yo(v,x.mode,N),h.return=x,h):(h=s(h,v),h.return=x,h)}function d(x,h,v,N){var R=v.type;return R===He?j(x,h,v.props.children,N,v.key):h!==null&&(h.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Be&&yl(R)===h.type)?(N=s(h,v.props),N.ref=Tr(x,h,v),N.return=x,N):(N=rs(v.type,v.key,v.props,null,x.mode,N),N.ref=Tr(x,h,v),N.return=x,N)}function y(x,h,v,N){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Ko(v,x.mode,N),h.return=x,h):(h=s(h,v.children||[]),h.return=x,h)}function j(x,h,v,N,R){return h===null||h.tag!==7?(h=_t(v,x.mode,N,R),h.return=x,h):(h=s(h,v),h.return=x,h)}function E(x,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Yo(""+h,x.mode,v),h.return=x,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Qe:return v=rs(h.type,h.key,h.props,null,x.mode,v),v.ref=Tr(x,null,h),v.return=x,v;case Me:return h=Ko(h,x.mode,v),h.return=x,h;case Be:var N=h._init;return E(x,N(h._payload),v)}if(ft(h)||O(h))return h=_t(h,x.mode,v,null),h.return=x,h;Mi(x,h)}return null}function S(x,h,v,N){var R=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:u(x,h,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Qe:return v.key===R?d(x,h,v,N):null;case Me:return v.key===R?y(x,h,v,N):null;case Be:return R=v._init,S(x,h,R(v._payload),N)}if(ft(v)||O(v))return R!==null?null:j(x,h,v,N,null);Mi(x,v)}return null}function T(x,h,v,N,R){if(typeof N=="string"&&N!==""||typeof N=="number")return x=x.get(v)||null,u(h,x,""+N,R);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Qe:return x=x.get(N.key===null?v:N.key)||null,d(h,x,N,R);case Me:return x=x.get(N.key===null?v:N.key)||null,y(h,x,N,R);case Be:var F=N._init;return T(x,h,v,F(N._payload),R)}if(ft(N)||O(N))return x=x.get(v)||null,j(h,x,N,R,null);Mi(h,N)}return null}function B(x,h,v,N){for(var R=null,F=null,z=h,V=h=0,qe=null;z!==null&&V<v.length;V++){z.index>V?(qe=z,z=null):qe=z.sibling;var le=S(x,z,v[V],N);if(le===null){z===null&&(z=qe);break}e&&z&&le.alternate===null&&n(x,z),h=o(le,h,V),F===null?R=le:F.sibling=le,F=le,z=qe}if(V===v.length)return t(x,z),xe&&kt(x,V),R;if(z===null){for(;V<v.length;V++)z=E(x,v[V],N),z!==null&&(h=o(z,h,V),F===null?R=z:F.sibling=z,F=z);return xe&&kt(x,V),R}for(z=i(x,z);V<v.length;V++)qe=T(z,x,V,v[V],N),qe!==null&&(e&&qe.alternate!==null&&z.delete(qe.key===null?V:qe.key),h=o(qe,h,V),F===null?R=qe:F.sibling=qe,F=qe);return e&&z.forEach(function(pt){return n(x,pt)}),xe&&kt(x,V),R}function U(x,h,v,N){var R=O(v);if(typeof R!="function")throw Error(c(150));if(v=R.call(v),v==null)throw Error(c(151));for(var F=R=null,z=h,V=h=0,qe=null,le=v.next();z!==null&&!le.done;V++,le=v.next()){z.index>V?(qe=z,z=null):qe=z.sibling;var pt=S(x,z,le.value,N);if(pt===null){z===null&&(z=qe);break}e&&z&&pt.alternate===null&&n(x,z),h=o(pt,h,V),F===null?R=pt:F.sibling=pt,F=pt,z=qe}if(le.done)return t(x,z),xe&&kt(x,V),R;if(z===null){for(;!le.done;V++,le=v.next())le=E(x,le.value,N),le!==null&&(h=o(le,h,V),F===null?R=le:F.sibling=le,F=le);return xe&&kt(x,V),R}for(z=i(x,z);!le.done;V++,le=v.next())le=T(z,x,V,le.value,N),le!==null&&(e&&le.alternate!==null&&z.delete(le.key===null?V:le.key),h=o(le,h,V),F===null?R=le:F.sibling=le,F=le);return e&&z.forEach(function(Jd){return n(x,Jd)}),xe&&kt(x,V),R}function Ee(x,h,v,N){if(typeof v=="object"&&v!==null&&v.type===He&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Qe:e:{for(var R=v.key,F=h;F!==null;){if(F.key===R){if(R=v.type,R===He){if(F.tag===7){t(x,F.sibling),h=s(F,v.props.children),h.return=x,x=h;break e}}else if(F.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Be&&yl(R)===F.type){t(x,F.sibling),h=s(F,v.props),h.ref=Tr(x,F,v),h.return=x,x=h;break e}t(x,F);break}else n(x,F);F=F.sibling}v.type===He?(h=_t(v.props.children,x.mode,N,v.key),h.return=x,x=h):(N=rs(v.type,v.key,v.props,null,x.mode,N),N.ref=Tr(x,h,v),N.return=x,x=N)}return a(x);case Me:e:{for(F=v.key;h!==null;){if(h.key===F)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){t(x,h.sibling),h=s(h,v.children||[]),h.return=x,x=h;break e}else{t(x,h);break}else n(x,h);h=h.sibling}h=Ko(v,x.mode,N),h.return=x,x=h}return a(x);case Be:return F=v._init,Ee(x,h,F(v._payload),N)}if(ft(v))return B(x,h,v,N);if(O(v))return U(x,h,v,N);Mi(x,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(t(x,h.sibling),h=s(h,v),h.return=x,x=h):(t(x,h),h=Yo(v,x.mode,N),h.return=x,x=h),a(x)):t(x,h)}return Ee}var Wt=wl(!0),bl=wl(!1),Di=nt(null),Pi=null,Vt=null,to=null;function ro(){to=Vt=Pi=null}function io(e){var n=Di.current;me(Di),e._currentValue=n}function so(e,n,t){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===t)break;e=e.return}}function Yt(e,n){Pi=e,to=Vt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(rn=!0),e.firstContext=null)}function xn(e){var n=e._currentValue;if(to!==e)if(e={context:e,memoizedValue:n,next:null},Vt===null){if(Pi===null)throw Error(c(308));Vt=e,Pi.dependencies={lanes:0,firstContext:e}}else Vt=Vt.next=e;return n}var St=null;function oo(e){St===null?St=[e]:St.push(e)}function kl(e,n,t,i){var s=n.interleaved;return s===null?(t.next=t,oo(n)):(t.next=s.next,s.next=t),n.interleaved=t,Fn(e,i)}function Fn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var it=!1;function ao(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sl(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function st(e,n,t){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ae&2)!==0){var s=i.pending;return s===null?n.next=n:(n.next=s.next,s.next=n),i.pending=n,Fn(e,t)}return s=i.interleaved,s===null?(n.next=n,oo(i)):(n.next=s.next,s.next=n),i.interleaved=n,Fn(e,t)}function Bi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,bs(e,t)}}function jl(e,n){var t=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var s=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?s=o=a:o=o.next=a,t=t.next}while(t!==null);o===null?s=o=n:o=o.next=n}else s=o=n;t={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:i.shared,effects:i.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ui(e,n,t,i){var s=e.updateQueue;it=!1;var o=s.firstBaseUpdate,a=s.lastBaseUpdate,u=s.shared.pending;if(u!==null){s.shared.pending=null;var d=u,y=d.next;d.next=null,a===null?o=y:a.next=y,a=d;var j=e.alternate;j!==null&&(j=j.updateQueue,u=j.lastBaseUpdate,u!==a&&(u===null?j.firstBaseUpdate=y:u.next=y,j.lastBaseUpdate=d))}if(o!==null){var E=s.baseState;a=0,j=y=d=null,u=o;do{var S=u.lane,T=u.eventTime;if((i&S)===S){j!==null&&(j=j.next={eventTime:T,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var B=e,U=u;switch(S=n,T=t,U.tag){case 1:if(B=U.payload,typeof B=="function"){E=B.call(T,E,S);break e}E=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=U.payload,S=typeof B=="function"?B.call(T,E,S):B,S==null)break e;E=M({},E,S);break e;case 2:it=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,S=s.effects,S===null?s.effects=[u]:S.push(u))}else T={eventTime:T,lane:S,tag:u.tag,payload:u.payload,callback:u.callback,next:null},j===null?(y=j=T,d=E):j=j.next=T,a|=S;if(u=u.next,u===null){if(u=s.shared.pending,u===null)break;S=u,u=S.next,S.next=null,s.lastBaseUpdate=S,s.shared.pending=null}}while(!0);if(j===null&&(d=E),s.baseState=d,s.firstBaseUpdate=y,s.lastBaseUpdate=j,n=s.shared.interleaved,n!==null){s=n;do a|=s.lane,s=s.next;while(s!==n)}else o===null&&(s.shared.lanes=0);Et|=a,e.lanes=a,e.memoizedState=E}}function Cl(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var i=e[n],s=i.callback;if(s!==null){if(i.callback=null,i=t,typeof s!="function")throw Error(c(191,s));s.call(i)}}}var Mr={},Dn=nt(Mr),Dr=nt(Mr),Pr=nt(Mr);function jt(e){if(e===Mr)throw Error(c(174));return e}function lo(e,n){switch(he(Pr,n),he(Dr,e),he(Dn,Mr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:sr(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=sr(n,e)}me(Dn),he(Dn,n)}function Kt(){me(Dn),me(Dr),me(Pr)}function El(e){jt(Pr.current);var n=jt(Dn.current),t=sr(n,e.type);n!==t&&(he(Dr,e),he(Dn,t))}function co(e){Dr.current===e&&(me(Dn),me(Dr))}var ye=nt(0);function Ri(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var uo=[];function po(){for(var e=0;e<uo.length;e++)uo[e]._workInProgressVersionPrimary=null;uo.length=0}var qi=X.ReactCurrentDispatcher,ho=X.ReactCurrentBatchConfig,Ct=0,we=null,_e=null,Ue=null,$i=!1,Br=!1,Ur=0,wd=0;function Ye(){throw Error(c(321))}function fo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Sn(e[t],n[t]))return!1;return!0}function mo(e,n,t,i,s,o){if(Ct=o,we=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,qi.current=e===null||e.memoizedState===null?jd:Cd,e=t(i,s),Br){o=0;do{if(Br=!1,Ur=0,25<=o)throw Error(c(301));o+=1,Ue=_e=null,n.updateQueue=null,qi.current=Ed,e=t(i,s)}while(Br)}if(qi.current=zi,n=_e!==null&&_e.next!==null,Ct=0,Ue=_e=we=null,$i=!1,n)throw Error(c(300));return e}function go(){var e=Ur!==0;return Ur=0,e}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?we.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function vn(){if(_e===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var n=Ue===null?we.memoizedState:Ue.next;if(n!==null)Ue=n,_e=e;else{if(e===null)throw Error(c(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Ue===null?we.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Rr(e,n){return typeof n=="function"?n(e):n}function xo(e){var n=vn(),t=n.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var i=_e,s=i.baseQueue,o=t.pending;if(o!==null){if(s!==null){var a=s.next;s.next=o.next,o.next=a}i.baseQueue=s=o,t.pending=null}if(s!==null){o=s.next,i=i.baseState;var u=a=null,d=null,y=o;do{var j=y.lane;if((Ct&j)===j)d!==null&&(d=d.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),i=y.hasEagerState?y.eagerState:e(i,y.action);else{var E={lane:j,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};d===null?(u=d=E,a=i):d=d.next=E,we.lanes|=j,Et|=j}y=y.next}while(y!==null&&y!==o);d===null?a=i:d.next=u,Sn(i,n.memoizedState)||(rn=!0),n.memoizedState=i,n.baseState=a,n.baseQueue=d,t.lastRenderedState=i}if(e=t.interleaved,e!==null){s=e;do o=s.lane,we.lanes|=o,Et|=o,s=s.next;while(s!==e)}else s===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function vo(e){var n=vn(),t=n.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var i=t.dispatch,s=t.pending,o=n.memoizedState;if(s!==null){t.pending=null;var a=s=s.next;do o=e(o,a.action),a=a.next;while(a!==s);Sn(o,n.memoizedState)||(rn=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,i]}function Nl(){}function Ll(e,n){var t=we,i=vn(),s=n(),o=!Sn(i.memoizedState,s);if(o&&(i.memoizedState=s,rn=!0),i=i.queue,yo(Il.bind(null,t,i,e),[e]),i.getSnapshot!==n||o||Ue!==null&&Ue.memoizedState.tag&1){if(t.flags|=2048,qr(9,_l.bind(null,t,i,s,n),void 0,null),Re===null)throw Error(c(349));(Ct&30)!==0||Al(t,n,s)}return s}function Al(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=we.updateQueue,n===null?(n={lastEffect:null,stores:null},we.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function _l(e,n,t,i){n.value=t,n.getSnapshot=i,Tl(n)&&Ml(e)}function Il(e,n,t){return t(function(){Tl(n)&&Ml(e)})}function Tl(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Sn(e,t)}catch{return!0}}function Ml(e){var n=Fn(e,1);n!==null&&Ln(n,e,1,-1)}function Dl(e){var n=Pn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rr,lastRenderedState:e},n.queue=e,e=e.dispatch=Sd.bind(null,we,e),[n.memoizedState,e]}function qr(e,n,t,i){return e={tag:e,create:n,destroy:t,deps:i,next:null},n=we.updateQueue,n===null?(n={lastEffect:null,stores:null},we.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(i=t.next,t.next=e,e.next=i,n.lastEffect=e)),e}function Pl(){return vn().memoizedState}function Oi(e,n,t,i){var s=Pn();we.flags|=e,s.memoizedState=qr(1|n,t,void 0,i===void 0?null:i)}function Fi(e,n,t,i){var s=vn();i=i===void 0?null:i;var o=void 0;if(_e!==null){var a=_e.memoizedState;if(o=a.destroy,i!==null&&fo(i,a.deps)){s.memoizedState=qr(n,t,o,i);return}}we.flags|=e,s.memoizedState=qr(1|n,t,o,i)}function Bl(e,n){return Oi(8390656,8,e,n)}function yo(e,n){return Fi(2048,8,e,n)}function Ul(e,n){return Fi(4,2,e,n)}function Rl(e,n){return Fi(4,4,e,n)}function ql(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function $l(e,n,t){return t=t!=null?t.concat([e]):null,Fi(4,4,ql.bind(null,n,e),t)}function wo(){}function Ol(e,n){var t=vn();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&fo(n,i[1])?i[0]:(t.memoizedState=[e,n],e)}function Fl(e,n){var t=vn();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&fo(n,i[1])?i[0]:(e=e(),t.memoizedState=[e,n],e)}function zl(e,n,t){return(Ct&21)===0?(e.baseState&&(e.baseState=!1,rn=!0),e.memoizedState=t):(Sn(t,n)||(t=ya(),we.lanes|=t,Et|=t,e.baseState=!0),n)}function bd(e,n){var t=de;de=t!==0&&4>t?t:4,e(!0);var i=ho.transition;ho.transition={};try{e(!1),n()}finally{de=t,ho.transition=i}}function Hl(){return vn().memoizedState}function kd(e,n,t){var i=ct(e);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Wl(e))Vl(n,t);else if(t=kl(e,n,t,i),t!==null){var s=en();Ln(t,e,i,s),Yl(t,n,i)}}function Sd(e,n,t){var i=ct(e),s={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Wl(e))Vl(n,s);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var a=n.lastRenderedState,u=o(a,t);if(s.hasEagerState=!0,s.eagerState=u,Sn(u,a)){var d=n.interleaved;d===null?(s.next=s,oo(n)):(s.next=d.next,d.next=s),n.interleaved=s;return}}catch{}finally{}t=kl(e,n,s,i),t!==null&&(s=en(),Ln(t,e,i,s),Yl(t,n,i))}}function Wl(e){var n=e.alternate;return e===we||n!==null&&n===we}function Vl(e,n){Br=$i=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Yl(e,n,t){if((t&4194240)!==0){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,bs(e,t)}}var zi={readContext:xn,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},jd={readContext:xn,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:xn,useEffect:Bl,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Oi(4194308,4,ql.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Oi(4194308,4,e,n)},useInsertionEffect:function(e,n){return Oi(4,2,e,n)},useMemo:function(e,n){var t=Pn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var i=Pn();return n=t!==void 0?t(n):n,i.memoizedState=i.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=kd.bind(null,we,e),[i.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:Dl,useDebugValue:wo,useDeferredValue:function(e){return Pn().memoizedState=e},useTransition:function(){var e=Dl(!1),n=e[0];return e=bd.bind(null,e[1]),Pn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var i=we,s=Pn();if(xe){if(t===void 0)throw Error(c(407));t=t()}else{if(t=n(),Re===null)throw Error(c(349));(Ct&30)!==0||Al(i,n,t)}s.memoizedState=t;var o={value:t,getSnapshot:n};return s.queue=o,Bl(Il.bind(null,i,o,e),[e]),i.flags|=2048,qr(9,_l.bind(null,i,o,t,n),void 0,null),t},useId:function(){var e=Pn(),n=Re.identifierPrefix;if(xe){var t=On,i=$n;t=(i&~(1<<32-kn(i)-1)).toString(32)+t,n=":"+n+"R"+t,t=Ur++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=wd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Cd={readContext:xn,useCallback:Ol,useContext:xn,useEffect:yo,useImperativeHandle:$l,useInsertionEffect:Ul,useLayoutEffect:Rl,useMemo:Fl,useReducer:xo,useRef:Pl,useState:function(){return xo(Rr)},useDebugValue:wo,useDeferredValue:function(e){var n=vn();return zl(n,_e.memoizedState,e)},useTransition:function(){var e=xo(Rr)[0],n=vn().memoizedState;return[e,n]},useMutableSource:Nl,useSyncExternalStore:Ll,useId:Hl,unstable_isNewReconciler:!1},Ed={readContext:xn,useCallback:Ol,useContext:xn,useEffect:yo,useImperativeHandle:$l,useInsertionEffect:Ul,useLayoutEffect:Rl,useMemo:Fl,useReducer:vo,useRef:Pl,useState:function(){return vo(Rr)},useDebugValue:wo,useDeferredValue:function(e){var n=vn();return _e===null?n.memoizedState=e:zl(n,_e.memoizedState,e)},useTransition:function(){var e=vo(Rr)[0],n=vn().memoizedState;return[e,n]},useMutableSource:Nl,useSyncExternalStore:Ll,useId:Hl,unstable_isNewReconciler:!1};function Cn(e,n){if(e&&e.defaultProps){n=M({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function bo(e,n,t,i){n=e.memoizedState,t=t(i,n),t=t==null?n:M({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Hi={isMounted:function(e){return(e=e._reactInternals)?vt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var i=en(),s=ct(e),o=zn(i,s);o.payload=n,t!=null&&(o.callback=t),n=st(e,o,s),n!==null&&(Ln(n,e,s,i),Bi(n,e,s))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var i=en(),s=ct(e),o=zn(i,s);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=st(e,o,s),n!==null&&(Ln(n,e,s,i),Bi(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=en(),i=ct(e),s=zn(t,i);s.tag=2,n!=null&&(s.callback=n),n=st(e,s,i),n!==null&&(Ln(n,e,i,t),Bi(n,e,i))}};function Kl(e,n,t,i,s,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,a):n.prototype&&n.prototype.isPureReactComponent?!Cr(t,i)||!Cr(s,o):!0}function Gl(e,n,t){var i=!1,s=tt,o=n.contextType;return typeof o=="object"&&o!==null?o=xn(o):(s=tn(n)?wt:Ve.current,i=n.contextTypes,o=(i=i!=null)?Ot(e,s):tt),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Hi,e.stateNode=n,n._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=o),n}function Ql(e,n,t,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,i),n.state!==e&&Hi.enqueueReplaceState(n,n.state,null)}function ko(e,n,t,i){var s=e.stateNode;s.props=t,s.state=e.memoizedState,s.refs={},ao(e);var o=n.contextType;typeof o=="object"&&o!==null?s.context=xn(o):(o=tn(n)?wt:Ve.current,s.context=Ot(e,o)),s.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(bo(e,n,o,t),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(n=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),n!==s.state&&Hi.enqueueReplaceState(s,s.state,null),Ui(e,t,s,i),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Gt(e,n){try{var t="",i=n;do t+=ee(i),i=i.return;while(i);var s=t}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:s,digest:null}}function So(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function jo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Nd=typeof WeakMap=="function"?WeakMap:Map;function Xl(e,n,t){t=zn(-1,t),t.tag=3,t.payload={element:null};var i=n.value;return t.callback=function(){Xi||(Xi=!0,qo=i),jo(e,n)},t}function Jl(e,n,t){t=zn(-1,t),t.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var s=n.value;t.payload=function(){return i(s)},t.callback=function(){jo(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){jo(e,n),typeof i!="function"&&(at===null?at=new Set([this]):at.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function Zl(e,n,t){var i=e.pingCache;if(i===null){i=e.pingCache=new Nd;var s=new Set;i.set(n,s)}else s=i.get(n),s===void 0&&(s=new Set,i.set(n,s));s.has(t)||(s.add(t),e=Od.bind(null,e,n,t),n.then(e,e))}function ec(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function nc(e,n,t,i,s){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=zn(-1,1),n.tag=2,st(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var Ld=X.ReactCurrentOwner,rn=!1;function Ze(e,n,t,i){n.child=e===null?bl(n,null,t,i):Wt(n,e.child,t,i)}function tc(e,n,t,i,s){t=t.render;var o=n.ref;return Yt(n,s),i=mo(e,n,t,i,o,s),t=go(),e!==null&&!rn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,Hn(e,n,s)):(xe&&t&&Xs(n),n.flags|=1,Ze(e,n,i,s),n.child)}function rc(e,n,t,i,s){if(e===null){var o=t.type;return typeof o=="function"&&!Vo(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,ic(e,n,o,i,s)):(e=rs(t.type,null,i,n,n.mode,s),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,(e.lanes&s)===0){var a=o.memoizedProps;if(t=t.compare,t=t!==null?t:Cr,t(a,i)&&e.ref===n.ref)return Hn(e,n,s)}return n.flags|=1,e=dt(o,i),e.ref=n.ref,e.return=n,n.child=e}function ic(e,n,t,i,s){if(e!==null){var o=e.memoizedProps;if(Cr(o,i)&&e.ref===n.ref)if(rn=!1,n.pendingProps=i=o,(e.lanes&s)!==0)(e.flags&131072)!==0&&(rn=!0);else return n.lanes=e.lanes,Hn(e,n,s)}return Co(e,n,t,i,s)}function sc(e,n,t){var i=n.pendingProps,s=i.children,o=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Xt,pn),pn|=t;else{if((t&1073741824)===0)return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,he(Xt,pn),pn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:t,he(Xt,pn),pn|=i}else o!==null?(i=o.baseLanes|t,n.memoizedState=null):i=t,he(Xt,pn),pn|=i;return Ze(e,n,s,t),n.child}function oc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Co(e,n,t,i,s){var o=tn(t)?wt:Ve.current;return o=Ot(n,o),Yt(n,s),t=mo(e,n,t,i,o,s),i=go(),e!==null&&!rn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,Hn(e,n,s)):(xe&&i&&Xs(n),n.flags|=1,Ze(e,n,t,s),n.child)}function ac(e,n,t,i,s){if(tn(t)){var o=!0;Li(n)}else o=!1;if(Yt(n,s),n.stateNode===null)Vi(e,n),Gl(n,t,i),ko(n,t,i,s),i=!0;else if(e===null){var a=n.stateNode,u=n.memoizedProps;a.props=u;var d=a.context,y=t.contextType;typeof y=="object"&&y!==null?y=xn(y):(y=tn(t)?wt:Ve.current,y=Ot(n,y));var j=t.getDerivedStateFromProps,E=typeof j=="function"||typeof a.getSnapshotBeforeUpdate=="function";E||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==i||d!==y)&&Ql(n,a,i,y),it=!1;var S=n.memoizedState;a.state=S,Ui(n,i,a,s),d=n.memoizedState,u!==i||S!==d||nn.current||it?(typeof j=="function"&&(bo(n,t,j,i),d=n.memoizedState),(u=it||Kl(n,t,u,i,S,d,y))?(E||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=d),a.props=i,a.state=d,a.context=y,i=u):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{a=n.stateNode,Sl(e,n),u=n.memoizedProps,y=n.type===n.elementType?u:Cn(n.type,u),a.props=y,E=n.pendingProps,S=a.context,d=t.contextType,typeof d=="object"&&d!==null?d=xn(d):(d=tn(t)?wt:Ve.current,d=Ot(n,d));var T=t.getDerivedStateFromProps;(j=typeof T=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==E||S!==d)&&Ql(n,a,i,d),it=!1,S=n.memoizedState,a.state=S,Ui(n,i,a,s);var B=n.memoizedState;u!==E||S!==B||nn.current||it?(typeof T=="function"&&(bo(n,t,T,i),B=n.memoizedState),(y=it||Kl(n,t,y,i,S,B,d)||!1)?(j||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,B,d),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,B,d)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=B),a.props=i,a.state=B,a.context=d,i=y):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(n.flags|=1024),i=!1)}return Eo(e,n,t,i,o,s)}function Eo(e,n,t,i,s,o){oc(e,n);var a=(n.flags&128)!==0;if(!i&&!a)return s&&pl(n,t,!1),Hn(e,n,o);i=n.stateNode,Ld.current=n;var u=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return n.flags|=1,e!==null&&a?(n.child=Wt(n,e.child,null,o),n.child=Wt(n,null,u,o)):Ze(e,n,u,o),n.memoizedState=i.state,s&&pl(n,t,!0),n.child}function lc(e){var n=e.stateNode;n.pendingContext?ul(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ul(e,n.context,!1),lo(e,n.containerInfo)}function cc(e,n,t,i,s){return Ht(),no(s),n.flags|=256,Ze(e,n,t,i),n.child}var No={dehydrated:null,treeContext:null,retryLane:0};function Lo(e){return{baseLanes:e,cachePool:null,transitions:null}}function uc(e,n,t){var i=n.pendingProps,s=ye.current,o=!1,a=(n.flags&128)!==0,u;if((u=a)||(u=e!==null&&e.memoizedState===null?!1:(s&2)!==0),u?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),he(ye,s&1),e===null)return eo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(a=i.children,e=i.fallback,o?(i=n.mode,o=n.child,a={mode:"hidden",children:a},(i&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=a):o=is(a,i,0,null),e=_t(e,i,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Lo(t),n.memoizedState=No,e):Ao(n,a));if(s=e.memoizedState,s!==null&&(u=s.dehydrated,u!==null))return Ad(e,n,a,i,u,s,t);if(o){o=i.fallback,a=n.mode,s=e.child,u=s.sibling;var d={mode:"hidden",children:i.children};return(a&1)===0&&n.child!==s?(i=n.child,i.childLanes=0,i.pendingProps=d,n.deletions=null):(i=dt(s,d),i.subtreeFlags=s.subtreeFlags&14680064),u!==null?o=dt(u,o):(o=_t(o,a,t,null),o.flags|=2),o.return=n,i.return=n,i.sibling=o,n.child=i,i=o,o=n.child,a=e.child.memoizedState,a=a===null?Lo(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~t,n.memoizedState=No,i}return o=e.child,e=o.sibling,i=dt(o,{mode:"visible",children:i.children}),(n.mode&1)===0&&(i.lanes=t),i.return=n,i.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=i,n.memoizedState=null,i}function Ao(e,n){return n=is({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Wi(e,n,t,i){return i!==null&&no(i),Wt(n,e.child,null,t),e=Ao(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ad(e,n,t,i,s,o,a){if(t)return n.flags&256?(n.flags&=-257,i=So(Error(c(422))),Wi(e,n,a,i)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=i.fallback,s=n.mode,i=is({mode:"visible",children:i.children},s,0,null),o=_t(o,s,a,null),o.flags|=2,i.return=n,o.return=n,i.sibling=o,n.child=i,(n.mode&1)!==0&&Wt(n,e.child,null,a),n.child.memoizedState=Lo(a),n.memoizedState=No,o);if((n.mode&1)===0)return Wi(e,n,a,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var u=i.dgst;return i=u,o=Error(c(419)),i=So(o,i,void 0),Wi(e,n,a,i)}if(u=(a&e.childLanes)!==0,rn||u){if(i=Re,i!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(i.suspendedLanes|a))!==0?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,Fn(e,s),Ln(i,e,s,-1))}return Wo(),i=So(Error(c(421))),Wi(e,n,a,i)}return s.data==="$?"?(n.flags|=128,n.child=e.child,n=Fd.bind(null,e),s._reactRetry=n,null):(e=o.treeContext,dn=et(s.nextSibling),un=n,xe=!0,jn=null,e!==null&&(mn[gn++]=$n,mn[gn++]=On,mn[gn++]=bt,$n=e.id,On=e.overflow,bt=n),n=Ao(n,i.children),n.flags|=4096,n)}function dc(e,n,t){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),so(e.return,n,t)}function _o(e,n,t,i,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:s}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=t,o.tailMode=s)}function pc(e,n,t){var i=n.pendingProps,s=i.revealOrder,o=i.tail;if(Ze(e,n,i.children,t),i=ye.current,(i&2)!==0)i=i&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dc(e,t,n);else if(e.tag===19)dc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(he(ye,i),(n.mode&1)===0)n.memoizedState=null;else switch(s){case"forwards":for(t=n.child,s=null;t!==null;)e=t.alternate,e!==null&&Ri(e)===null&&(s=t),t=t.sibling;t=s,t===null?(s=n.child,n.child=null):(s=t.sibling,t.sibling=null),_o(n,!1,s,t,o);break;case"backwards":for(t=null,s=n.child,n.child=null;s!==null;){if(e=s.alternate,e!==null&&Ri(e)===null){n.child=s;break}e=s.sibling,s.sibling=t,t=s,s=e}_o(n,!0,t,null,o);break;case"together":_o(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Vi(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Hn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Et|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(c(153));if(n.child!==null){for(e=n.child,t=dt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=dt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function _d(e,n,t){switch(n.tag){case 3:lc(n),Ht();break;case 5:El(n);break;case 1:tn(n.type)&&Li(n);break;case 4:lo(n,n.stateNode.containerInfo);break;case 10:var i=n.type._context,s=n.memoizedProps.value;he(Di,i._currentValue),i._currentValue=s;break;case 13:if(i=n.memoizedState,i!==null)return i.dehydrated!==null?(he(ye,ye.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?uc(e,n,t):(he(ye,ye.current&1),e=Hn(e,n,t),e!==null?e.sibling:null);he(ye,ye.current&1);break;case 19:if(i=(t&n.childLanes)!==0,(e.flags&128)!==0){if(i)return pc(e,n,t);n.flags|=128}if(s=n.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),he(ye,ye.current),i)break;return null;case 22:case 23:return n.lanes=0,sc(e,n,t)}return Hn(e,n,t)}var hc,Io,fc,mc;hc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Io=function(){},fc=function(e,n,t,i){var s=e.memoizedProps;if(s!==i){e=n.stateNode,jt(Dn.current);var o=null;switch(t){case"input":s=nr(e,s),i=nr(e,i),o=[];break;case"select":s=M({},s,{value:void 0}),i=M({},i,{value:void 0}),o=[];break;case"textarea":s=ir(e,s),i=ir(e,i),o=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Ci)}je(t,i);var a;t=null;for(y in s)if(!i.hasOwnProperty(y)&&s.hasOwnProperty(y)&&s[y]!=null)if(y==="style"){var u=s[y];for(a in u)u.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(f.hasOwnProperty(y)?o||(o=[]):(o=o||[]).push(y,null));for(y in i){var d=i[y];if(u=s!=null?s[y]:void 0,i.hasOwnProperty(y)&&d!==u&&(d!=null||u!=null))if(y==="style")if(u){for(a in u)!u.hasOwnProperty(a)||d&&d.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in d)d.hasOwnProperty(a)&&u[a]!==d[a]&&(t||(t={}),t[a]=d[a])}else t||(o||(o=[]),o.push(y,t)),t=d;else y==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,u=u?u.__html:void 0,d!=null&&u!==d&&(o=o||[]).push(y,d)):y==="children"?typeof d!="string"&&typeof d!="number"||(o=o||[]).push(y,""+d):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(f.hasOwnProperty(y)?(d!=null&&y==="onScroll"&&fe("scroll",e),o||u===d||(o=[])):(o=o||[]).push(y,d))}t&&(o=o||[]).push("style",t);var y=o;(n.updateQueue=y)&&(n.flags|=4)}},mc=function(e,n,t,i){t!==i&&(n.flags|=4)};function $r(e,n){if(!xe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,i=0;if(n)for(var s=e.child;s!==null;)t|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)t|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=t,n}function Id(e,n,t){var i=n.pendingProps;switch(Js(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return tn(n.type)&&Ni(),Ke(n),null;case 3:return i=n.stateNode,Kt(),me(nn),me(Ve),po(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Ti(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,jn!==null&&(Fo(jn),jn=null))),Io(e,n),Ke(n),null;case 5:co(n);var s=jt(Pr.current);if(t=n.type,e!==null&&n.stateNode!=null)fc(e,n,t,i,s),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!i){if(n.stateNode===null)throw Error(c(166));return Ke(n),null}if(e=jt(Dn.current),Ti(n)){i=n.stateNode,t=n.type;var o=n.memoizedProps;switch(i[Mn]=n,i[_r]=o,e=(n.mode&1)!==0,t){case"dialog":fe("cancel",i),fe("close",i);break;case"iframe":case"object":case"embed":fe("load",i);break;case"video":case"audio":for(s=0;s<Nr.length;s++)fe(Nr[s],i);break;case"source":fe("error",i);break;case"img":case"image":case"link":fe("error",i),fe("load",i);break;case"details":fe("toggle",i);break;case"input":Qr(i,o),fe("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},fe("invalid",i);break;case"textarea":Zr(i,o),fe("invalid",i)}je(t,o),s=null;for(var a in o)if(o.hasOwnProperty(a)){var u=o[a];a==="children"?typeof u=="string"?i.textContent!==u&&(o.suppressHydrationWarning!==!0&&ji(i.textContent,u,e),s=["children",u]):typeof u=="number"&&i.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&ji(i.textContent,u,e),s=["children",""+u]):f.hasOwnProperty(a)&&u!=null&&a==="onScroll"&&fe("scroll",i)}switch(t){case"input":oe(i),Jr(i,o,!0);break;case"textarea":oe(i),ni(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Ci)}i=s,n.updateQueue=i,i!==null&&(n.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ti(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=a.createElement(t,{is:i.is}):(e=a.createElement(t),t==="select"&&(a=e,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):e=a.createElementNS(e,t),e[Mn]=n,e[_r]=i,hc(e,n,!1,!1),n.stateNode=e;e:{switch(a=$e(t,i),t){case"dialog":fe("cancel",e),fe("close",e),s=i;break;case"iframe":case"object":case"embed":fe("load",e),s=i;break;case"video":case"audio":for(s=0;s<Nr.length;s++)fe(Nr[s],e);s=i;break;case"source":fe("error",e),s=i;break;case"img":case"image":case"link":fe("error",e),fe("load",e),s=i;break;case"details":fe("toggle",e),s=i;break;case"input":Qr(e,i),s=nr(e,i),fe("invalid",e);break;case"option":s=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},s=M({},i,{value:void 0}),fe("invalid",e);break;case"textarea":Zr(e,i),s=ir(e,i),fe("invalid",e);break;default:s=i}je(t,s),u=s;for(o in u)if(u.hasOwnProperty(o)){var d=u[o];o==="style"?I(e,d):o==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&ri(e,d)):o==="children"?typeof d=="string"?(t!=="textarea"||d!=="")&&gt(e,d):typeof d=="number"&&gt(e,""+d):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(f.hasOwnProperty(o)?d!=null&&o==="onScroll"&&fe("scroll",e):d!=null&&ze(e,o,d,a))}switch(t){case"input":oe(e),Jr(e,i,!1);break;case"textarea":oe(e),ni(e);break;case"option":i.value!=null&&e.setAttribute("value",""+re(i.value));break;case"select":e.multiple=!!i.multiple,o=i.value,o!=null?Vn(e,!!i.multiple,o,!1):i.defaultValue!=null&&Vn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Ci)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ke(n),null;case 6:if(e&&n.stateNode!=null)mc(e,n,e.memoizedProps,i);else{if(typeof i!="string"&&n.stateNode===null)throw Error(c(166));if(t=jt(Pr.current),jt(Dn.current),Ti(n)){if(i=n.stateNode,t=n.memoizedProps,i[Mn]=n,(o=i.nodeValue!==t)&&(e=un,e!==null))switch(e.tag){case 3:ji(i.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ji(i.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Mn]=n,n.stateNode=i}return Ke(n),null;case 13:if(me(ye),i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(xe&&dn!==null&&(n.mode&1)!==0&&(n.flags&128)===0)vl(),Ht(),n.flags|=98560,o=!1;else if(o=Ti(n),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(c(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(c(317));o[Mn]=n}else Ht(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),o=!1}else jn!==null&&(Fo(jn),jn=null),o=!0;if(!o)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(ye.current&1)!==0?Ie===0&&(Ie=3):Wo())),n.updateQueue!==null&&(n.flags|=4),Ke(n),null);case 4:return Kt(),Io(e,n),e===null&&Lr(n.stateNode.containerInfo),Ke(n),null;case 10:return io(n.type._context),Ke(n),null;case 17:return tn(n.type)&&Ni(),Ke(n),null;case 19:if(me(ye),o=n.memoizedState,o===null)return Ke(n),null;if(i=(n.flags&128)!==0,a=o.rendering,a===null)if(i)$r(o,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(a=Ri(e),a!==null){for(n.flags|=128,$r(o,!1),i=a.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),n.subtreeFlags=0,i=t,t=n.child;t!==null;)o=t,e=i,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return he(ye,ye.current&1|2),n.child}e=e.sibling}o.tail!==null&&Ce()>Jt&&(n.flags|=128,i=!0,$r(o,!1),n.lanes=4194304)}else{if(!i)if(e=Ri(a),e!==null){if(n.flags|=128,i=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),$r(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!xe)return Ke(n),null}else 2*Ce()-o.renderingStartTime>Jt&&t!==1073741824&&(n.flags|=128,i=!0,$r(o,!1),n.lanes=4194304);o.isBackwards?(a.sibling=n.child,n.child=a):(t=o.last,t!==null?t.sibling=a:n.child=a,o.last=a)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Ce(),n.sibling=null,t=ye.current,he(ye,i?t&1|2:t&1),n):(Ke(n),null);case 22:case 23:return Ho(),i=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(n.flags|=8192),i&&(n.mode&1)!==0?(pn&1073741824)!==0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),null;case 24:return null;case 25:return null}throw Error(c(156,n.tag))}function Td(e,n){switch(Js(n),n.tag){case 1:return tn(n.type)&&Ni(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Kt(),me(nn),me(Ve),po(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return co(n),null;case 13:if(me(ye),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(c(340));Ht()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return me(ye),null;case 4:return Kt(),null;case 10:return io(n.type._context),null;case 22:case 23:return Ho(),null;case 24:return null;default:return null}}var Yi=!1,Ge=!1,Md=typeof WeakSet=="function"?WeakSet:Set,P=null;function Qt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){be(e,n,i)}else t.current=null}function To(e,n,t){try{t()}catch(i){be(e,n,i)}}var gc=!1;function Dd(e,n){if(zs=hi,e=Ka(),Ps(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var s=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var a=0,u=-1,d=-1,y=0,j=0,E=e,S=null;n:for(;;){for(var T;E!==t||s!==0&&E.nodeType!==3||(u=a+s),E!==o||i!==0&&E.nodeType!==3||(d=a+i),E.nodeType===3&&(a+=E.nodeValue.length),(T=E.firstChild)!==null;)S=E,E=T;for(;;){if(E===e)break n;if(S===t&&++y===s&&(u=a),S===o&&++j===i&&(d=a),(T=E.nextSibling)!==null)break;E=S,S=E.parentNode}E=T}t=u===-1||d===-1?null:{start:u,end:d}}else t=null}t=t||{start:0,end:0}}else t=null;for(Hs={focusedElem:e,selectionRange:t},hi=!1,P=n;P!==null;)if(n=P,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,P=e;else for(;P!==null;){n=P;try{var B=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var U=B.memoizedProps,Ee=B.memoizedState,x=n.stateNode,h=x.getSnapshotBeforeUpdate(n.elementType===n.type?U:Cn(n.type,U),Ee);x.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=n.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(N){be(n,n.return,N)}if(e=n.sibling,e!==null){e.return=n.return,P=e;break}P=n.return}return B=gc,gc=!1,B}function Or(e,n,t){var i=n.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&e)===e){var o=s.destroy;s.destroy=void 0,o!==void 0&&To(n,t,o)}s=s.next}while(s!==i)}}function Ki(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var i=t.create;t.destroy=i()}t=t.next}while(t!==n)}}function Mo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function xc(e){var n=e.alternate;n!==null&&(e.alternate=null,xc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Mn],delete n[_r],delete n[Ks],delete n[gd],delete n[xd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vc(e){return e.tag===5||e.tag===3||e.tag===4}function yc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Do(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ci));else if(i!==4&&(e=e.child,e!==null))for(Do(e,n,t),e=e.sibling;e!==null;)Do(e,n,t),e=e.sibling}function Po(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Po(e,n,t),e=e.sibling;e!==null;)Po(e,n,t),e=e.sibling}var Oe=null,En=!1;function ot(e,n,t){for(t=t.child;t!==null;)wc(e,n,t),t=t.sibling}function wc(e,n,t){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(ai,t)}catch{}switch(t.tag){case 5:Ge||Qt(t,n);case 6:var i=Oe,s=En;Oe=null,ot(e,n,t),Oe=i,En=s,Oe!==null&&(En?(e=Oe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Oe.removeChild(t.stateNode));break;case 18:Oe!==null&&(En?(e=Oe,t=t.stateNode,e.nodeType===8?Ys(e.parentNode,t):e.nodeType===1&&Ys(e,t),yr(e)):Ys(Oe,t.stateNode));break;case 4:i=Oe,s=En,Oe=t.stateNode.containerInfo,En=!0,ot(e,n,t),Oe=i,En=s;break;case 0:case 11:case 14:case 15:if(!Ge&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var o=s,a=o.destroy;o=o.tag,a!==void 0&&((o&2)!==0||(o&4)!==0)&&To(t,n,a),s=s.next}while(s!==i)}ot(e,n,t);break;case 1:if(!Ge&&(Qt(t,n),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(u){be(t,n,u)}ot(e,n,t);break;case 21:ot(e,n,t);break;case 22:t.mode&1?(Ge=(i=Ge)||t.memoizedState!==null,ot(e,n,t),Ge=i):ot(e,n,t);break;default:ot(e,n,t)}}function bc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Md),n.forEach(function(i){var s=zd.bind(null,e,i);t.has(i)||(t.add(i),i.then(s,s))})}}function Nn(e,n){var t=n.deletions;if(t!==null)for(var i=0;i<t.length;i++){var s=t[i];try{var o=e,a=n,u=a;e:for(;u!==null;){switch(u.tag){case 5:Oe=u.stateNode,En=!1;break e;case 3:Oe=u.stateNode.containerInfo,En=!0;break e;case 4:Oe=u.stateNode.containerInfo,En=!0;break e}u=u.return}if(Oe===null)throw Error(c(160));wc(o,a,s),Oe=null,En=!1;var d=s.alternate;d!==null&&(d.return=null),s.return=null}catch(y){be(s,n,y)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)kc(n,e),n=n.sibling}function kc(e,n){var t=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nn(n,e),Bn(e),i&4){try{Or(3,e,e.return),Ki(3,e)}catch(U){be(e,e.return,U)}try{Or(5,e,e.return)}catch(U){be(e,e.return,U)}}break;case 1:Nn(n,e),Bn(e),i&512&&t!==null&&Qt(t,t.return);break;case 5:if(Nn(n,e),Bn(e),i&512&&t!==null&&Qt(t,t.return),e.flags&32){var s=e.stateNode;try{gt(s,"")}catch(U){be(e,e.return,U)}}if(i&4&&(s=e.stateNode,s!=null)){var o=e.memoizedProps,a=t!==null?t.memoizedProps:o,u=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&Xr(s,o),$e(u,a);var y=$e(u,o);for(a=0;a<d.length;a+=2){var j=d[a],E=d[a+1];j==="style"?I(s,E):j==="dangerouslySetInnerHTML"?ri(s,E):j==="children"?gt(s,E):ze(s,j,E,y)}switch(u){case"input":tr(s,o);break;case"textarea":ei(s,o);break;case"select":var S=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var T=o.value;T!=null?Vn(s,!!o.multiple,T,!1):S!==!!o.multiple&&(o.defaultValue!=null?Vn(s,!!o.multiple,o.defaultValue,!0):Vn(s,!!o.multiple,o.multiple?[]:"",!1))}s[_r]=o}catch(U){be(e,e.return,U)}}break;case 6:if(Nn(n,e),Bn(e),i&4){if(e.stateNode===null)throw Error(c(162));s=e.stateNode,o=e.memoizedProps;try{s.nodeValue=o}catch(U){be(e,e.return,U)}}break;case 3:if(Nn(n,e),Bn(e),i&4&&t!==null&&t.memoizedState.isDehydrated)try{yr(n.containerInfo)}catch(U){be(e,e.return,U)}break;case 4:Nn(n,e),Bn(e);break;case 13:Nn(n,e),Bn(e),s=e.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(Ro=Ce())),i&4&&bc(e);break;case 22:if(j=t!==null&&t.memoizedState!==null,e.mode&1?(Ge=(y=Ge)||j,Nn(n,e),Ge=y):Nn(n,e),Bn(e),i&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!j&&(e.mode&1)!==0)for(P=e,j=e.child;j!==null;){for(E=P=j;P!==null;){switch(S=P,T=S.child,S.tag){case 0:case 11:case 14:case 15:Or(4,S,S.return);break;case 1:Qt(S,S.return);var B=S.stateNode;if(typeof B.componentWillUnmount=="function"){i=S,t=S.return;try{n=i,B.props=n.memoizedProps,B.state=n.memoizedState,B.componentWillUnmount()}catch(U){be(i,t,U)}}break;case 5:Qt(S,S.return);break;case 22:if(S.memoizedState!==null){Cc(E);continue}}T!==null?(T.return=S,P=T):Cc(E)}j=j.sibling}e:for(j=null,E=e;;){if(E.tag===5){if(j===null){j=E;try{s=E.stateNode,y?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=E.stateNode,d=E.memoizedProps.style,a=d!=null&&d.hasOwnProperty("display")?d.display:null,u.style.display=_("display",a))}catch(U){be(e,e.return,U)}}}else if(E.tag===6){if(j===null)try{E.stateNode.nodeValue=y?"":E.memoizedProps}catch(U){be(e,e.return,U)}}else if((E.tag!==22&&E.tag!==23||E.memoizedState===null||E===e)&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===e)break e;for(;E.sibling===null;){if(E.return===null||E.return===e)break e;j===E&&(j=null),E=E.return}j===E&&(j=null),E.sibling.return=E.return,E=E.sibling}}break;case 19:Nn(n,e),Bn(e),i&4&&bc(e);break;case 21:break;default:Nn(n,e),Bn(e)}}function Bn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(vc(t)){var i=t;break e}t=t.return}throw Error(c(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(gt(s,""),i.flags&=-33);var o=yc(e);Po(e,o,s);break;case 3:case 4:var a=i.stateNode.containerInfo,u=yc(e);Do(e,u,a);break;default:throw Error(c(161))}}catch(d){be(e,e.return,d)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Pd(e,n,t){P=e,Sc(e)}function Sc(e,n,t){for(var i=(e.mode&1)!==0;P!==null;){var s=P,o=s.child;if(s.tag===22&&i){var a=s.memoizedState!==null||Yi;if(!a){var u=s.alternate,d=u!==null&&u.memoizedState!==null||Ge;u=Yi;var y=Ge;if(Yi=a,(Ge=d)&&!y)for(P=s;P!==null;)a=P,d=a.child,a.tag===22&&a.memoizedState!==null?Ec(s):d!==null?(d.return=a,P=d):Ec(s);for(;o!==null;)P=o,Sc(o),o=o.sibling;P=s,Yi=u,Ge=y}jc(e)}else(s.subtreeFlags&8772)!==0&&o!==null?(o.return=s,P=o):jc(e)}}function jc(e){for(;P!==null;){var n=P;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Ge||Ki(5,n);break;case 1:var i=n.stateNode;if(n.flags&4&&!Ge)if(t===null)i.componentDidMount();else{var s=n.elementType===n.type?t.memoizedProps:Cn(n.type,t.memoizedProps);i.componentDidUpdate(s,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Cl(n,o,i);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Cl(n,a,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var d=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&t.focus();break;case"img":d.src&&(t.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var y=n.alternate;if(y!==null){var j=y.memoizedState;if(j!==null){var E=j.dehydrated;E!==null&&yr(E)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}Ge||n.flags&512&&Mo(n)}catch(S){be(n,n.return,S)}}if(n===e){P=null;break}if(t=n.sibling,t!==null){t.return=n.return,P=t;break}P=n.return}}function Cc(e){for(;P!==null;){var n=P;if(n===e){P=null;break}var t=n.sibling;if(t!==null){t.return=n.return,P=t;break}P=n.return}}function Ec(e){for(;P!==null;){var n=P;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ki(4,n)}catch(d){be(n,t,d)}break;case 1:var i=n.stateNode;if(typeof i.componentDidMount=="function"){var s=n.return;try{i.componentDidMount()}catch(d){be(n,s,d)}}var o=n.return;try{Mo(n)}catch(d){be(n,o,d)}break;case 5:var a=n.return;try{Mo(n)}catch(d){be(n,a,d)}}}catch(d){be(n,n.return,d)}if(n===e){P=null;break}var u=n.sibling;if(u!==null){u.return=n.return,P=u;break}P=n.return}}var Bd=Math.ceil,Gi=X.ReactCurrentDispatcher,Bo=X.ReactCurrentOwner,yn=X.ReactCurrentBatchConfig,ae=0,Re=null,Le=null,Fe=0,pn=0,Xt=nt(0),Ie=0,Fr=null,Et=0,Qi=0,Uo=0,zr=null,sn=null,Ro=0,Jt=1/0,Wn=null,Xi=!1,qo=null,at=null,Ji=!1,lt=null,Zi=0,Hr=0,$o=null,es=-1,ns=0;function en(){return(ae&6)!==0?Ce():es!==-1?es:es=Ce()}function ct(e){return(e.mode&1)===0?1:(ae&2)!==0&&Fe!==0?Fe&-Fe:yd.transition!==null?(ns===0&&(ns=ya()),ns):(e=de,e!==0||(e=window.event,e=e===void 0?16:La(e.type)),e)}function Ln(e,n,t,i){if(50<Hr)throw Hr=0,$o=null,Error(c(185));fr(e,t,i),((ae&2)===0||e!==Re)&&(e===Re&&((ae&2)===0&&(Qi|=t),Ie===4&&ut(e,Fe)),on(e,i),t===1&&ae===0&&(n.mode&1)===0&&(Jt=Ce()+500,Ai&&rt()))}function on(e,n){var t=e.callbackNode;yu(e,n);var i=ui(e,e===Re?Fe:0);if(i===0)t!==null&&ga(t),e.callbackNode=null,e.callbackPriority=0;else if(n=i&-i,e.callbackPriority!==n){if(t!=null&&ga(t),n===1)e.tag===0?vd(Lc.bind(null,e)):hl(Lc.bind(null,e)),fd(function(){(ae&6)===0&&rt()}),t=null;else{switch(wa(i)){case 1:t=vs;break;case 4:t=xa;break;case 16:t=oi;break;case 536870912:t=va;break;default:t=oi}t=Bc(t,Nc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Nc(e,n){if(es=-1,ns=0,(ae&6)!==0)throw Error(c(327));var t=e.callbackNode;if(Zt()&&e.callbackNode!==t)return null;var i=ui(e,e===Re?Fe:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||n)n=ts(e,i);else{n=i;var s=ae;ae|=2;var o=_c();(Re!==e||Fe!==n)&&(Wn=null,Jt=Ce()+500,Lt(e,n));do try{qd();break}catch(u){Ac(e,u)}while(!0);ro(),Gi.current=o,ae=s,Le!==null?n=0:(Re=null,Fe=0,n=Ie)}if(n!==0){if(n===2&&(s=ys(e),s!==0&&(i=s,n=Oo(e,s))),n===1)throw t=Fr,Lt(e,0),ut(e,i),on(e,Ce()),t;if(n===6)ut(e,i);else{if(s=e.current.alternate,(i&30)===0&&!Ud(s)&&(n=ts(e,i),n===2&&(o=ys(e),o!==0&&(i=o,n=Oo(e,o))),n===1))throw t=Fr,Lt(e,0),ut(e,i),on(e,Ce()),t;switch(e.finishedWork=s,e.finishedLanes=i,n){case 0:case 1:throw Error(c(345));case 2:At(e,sn,Wn);break;case 3:if(ut(e,i),(i&130023424)===i&&(n=Ro+500-Ce(),10<n)){if(ui(e,0)!==0)break;if(s=e.suspendedLanes,(s&i)!==i){en(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Vs(At.bind(null,e,sn,Wn),n);break}At(e,sn,Wn);break;case 4:if(ut(e,i),(i&4194240)===i)break;for(n=e.eventTimes,s=-1;0<i;){var a=31-kn(i);o=1<<a,a=n[a],a>s&&(s=a),i&=~o}if(i=s,i=Ce()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Bd(i/1960))-i,10<i){e.timeoutHandle=Vs(At.bind(null,e,sn,Wn),i);break}At(e,sn,Wn);break;case 5:At(e,sn,Wn);break;default:throw Error(c(329))}}}return on(e,Ce()),e.callbackNode===t?Nc.bind(null,e):null}function Oo(e,n){var t=zr;return e.current.memoizedState.isDehydrated&&(Lt(e,n).flags|=256),e=ts(e,n),e!==2&&(n=sn,sn=t,n!==null&&Fo(n)),e}function Fo(e){sn===null?sn=e:sn.push.apply(sn,e)}function Ud(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var s=t[i],o=s.getSnapshot;s=s.value;try{if(!Sn(o(),s))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ut(e,n){for(n&=~Uo,n&=~Qi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-kn(n),i=1<<t;e[t]=-1,n&=~i}}function Lc(e){if((ae&6)!==0)throw Error(c(327));Zt();var n=ui(e,0);if((n&1)===0)return on(e,Ce()),null;var t=ts(e,n);if(e.tag!==0&&t===2){var i=ys(e);i!==0&&(n=i,t=Oo(e,i))}if(t===1)throw t=Fr,Lt(e,0),ut(e,n),on(e,Ce()),t;if(t===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,At(e,sn,Wn),on(e,Ce()),null}function zo(e,n){var t=ae;ae|=1;try{return e(n)}finally{ae=t,ae===0&&(Jt=Ce()+500,Ai&&rt())}}function Nt(e){lt!==null&&lt.tag===0&&(ae&6)===0&&Zt();var n=ae;ae|=1;var t=yn.transition,i=de;try{if(yn.transition=null,de=1,e)return e()}finally{de=i,yn.transition=t,ae=n,(ae&6)===0&&rt()}}function Ho(){pn=Xt.current,me(Xt)}function Lt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,hd(t)),Le!==null)for(t=Le.return;t!==null;){var i=t;switch(Js(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ni();break;case 3:Kt(),me(nn),me(Ve),po();break;case 5:co(i);break;case 4:Kt();break;case 13:me(ye);break;case 19:me(ye);break;case 10:io(i.type._context);break;case 22:case 23:Ho()}t=t.return}if(Re=e,Le=e=dt(e.current,null),Fe=pn=n,Ie=0,Fr=null,Uo=Qi=Et=0,sn=zr=null,St!==null){for(n=0;n<St.length;n++)if(t=St[n],i=t.interleaved,i!==null){t.interleaved=null;var s=i.next,o=t.pending;if(o!==null){var a=o.next;o.next=s,i.next=a}t.pending=i}St=null}return e}function Ac(e,n){do{var t=Le;try{if(ro(),qi.current=zi,$i){for(var i=we.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}$i=!1}if(Ct=0,Ue=_e=we=null,Br=!1,Ur=0,Bo.current=null,t===null||t.return===null){Ie=1,Fr=n,Le=null;break}e:{var o=e,a=t.return,u=t,d=n;if(n=Fe,u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var y=d,j=u,E=j.tag;if((j.mode&1)===0&&(E===0||E===11||E===15)){var S=j.alternate;S?(j.updateQueue=S.updateQueue,j.memoizedState=S.memoizedState,j.lanes=S.lanes):(j.updateQueue=null,j.memoizedState=null)}var T=ec(a);if(T!==null){T.flags&=-257,nc(T,a,u,o,n),T.mode&1&&Zl(o,y,n),n=T,d=y;var B=n.updateQueue;if(B===null){var U=new Set;U.add(d),n.updateQueue=U}else B.add(d);break e}else{if((n&1)===0){Zl(o,y,n),Wo();break e}d=Error(c(426))}}else if(xe&&u.mode&1){var Ee=ec(a);if(Ee!==null){(Ee.flags&65536)===0&&(Ee.flags|=256),nc(Ee,a,u,o,n),no(Gt(d,u));break e}}o=d=Gt(d,u),Ie!==4&&(Ie=2),zr===null?zr=[o]:zr.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var x=Xl(o,d,n);jl(o,x);break e;case 1:u=d;var h=o.type,v=o.stateNode;if((o.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(at===null||!at.has(v)))){o.flags|=65536,n&=-n,o.lanes|=n;var N=Jl(o,u,n);jl(o,N);break e}}o=o.return}while(o!==null)}Tc(t)}catch(R){n=R,Le===t&&t!==null&&(Le=t=t.return);continue}break}while(!0)}function _c(){var e=Gi.current;return Gi.current=zi,e===null?zi:e}function Wo(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Re===null||(Et&268435455)===0&&(Qi&268435455)===0||ut(Re,Fe)}function ts(e,n){var t=ae;ae|=2;var i=_c();(Re!==e||Fe!==n)&&(Wn=null,Lt(e,n));do try{Rd();break}catch(s){Ac(e,s)}while(!0);if(ro(),ae=t,Gi.current=i,Le!==null)throw Error(c(261));return Re=null,Fe=0,Ie}function Rd(){for(;Le!==null;)Ic(Le)}function qd(){for(;Le!==null&&!uu();)Ic(Le)}function Ic(e){var n=Pc(e.alternate,e,pn);e.memoizedProps=e.pendingProps,n===null?Tc(e):Le=n,Bo.current=null}function Tc(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=Id(t,n,pn),t!==null){Le=t;return}}else{if(t=Td(t,n),t!==null){t.flags&=32767,Le=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,Le=null;return}}if(n=n.sibling,n!==null){Le=n;return}Le=n=e}while(n!==null);Ie===0&&(Ie=5)}function At(e,n,t){var i=de,s=yn.transition;try{yn.transition=null,de=1,$d(e,n,t,i)}finally{yn.transition=s,de=i}return null}function $d(e,n,t,i){do Zt();while(lt!==null);if((ae&6)!==0)throw Error(c(327));t=e.finishedWork;var s=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(wu(e,o),e===Re&&(Le=Re=null,Fe=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Ji||(Ji=!0,Bc(oi,function(){return Zt(),null})),o=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||o){o=yn.transition,yn.transition=null;var a=de;de=1;var u=ae;ae|=4,Bo.current=null,Dd(e,t),kc(t,e),od(Hs),hi=!!zs,Hs=zs=null,e.current=t,Pd(t),du(),ae=u,de=a,yn.transition=o}else e.current=t;if(Ji&&(Ji=!1,lt=e,Zi=s),o=e.pendingLanes,o===0&&(at=null),fu(t.stateNode),on(e,Ce()),n!==null)for(i=e.onRecoverableError,t=0;t<n.length;t++)s=n[t],i(s.value,{componentStack:s.stack,digest:s.digest});if(Xi)throw Xi=!1,e=qo,qo=null,e;return(Zi&1)!==0&&e.tag!==0&&Zt(),o=e.pendingLanes,(o&1)!==0?e===$o?Hr++:(Hr=0,$o=e):Hr=0,rt(),null}function Zt(){if(lt!==null){var e=wa(Zi),n=yn.transition,t=de;try{if(yn.transition=null,de=16>e?16:e,lt===null)var i=!1;else{if(e=lt,lt=null,Zi=0,(ae&6)!==0)throw Error(c(331));var s=ae;for(ae|=4,P=e.current;P!==null;){var o=P,a=o.child;if((P.flags&16)!==0){var u=o.deletions;if(u!==null){for(var d=0;d<u.length;d++){var y=u[d];for(P=y;P!==null;){var j=P;switch(j.tag){case 0:case 11:case 15:Or(8,j,o)}var E=j.child;if(E!==null)E.return=j,P=E;else for(;P!==null;){j=P;var S=j.sibling,T=j.return;if(xc(j),j===y){P=null;break}if(S!==null){S.return=T,P=S;break}P=T}}}var B=o.alternate;if(B!==null){var U=B.child;if(U!==null){B.child=null;do{var Ee=U.sibling;U.sibling=null,U=Ee}while(U!==null)}}P=o}}if((o.subtreeFlags&2064)!==0&&a!==null)a.return=o,P=a;else e:for(;P!==null;){if(o=P,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Or(9,o,o.return)}var x=o.sibling;if(x!==null){x.return=o.return,P=x;break e}P=o.return}}var h=e.current;for(P=h;P!==null;){a=P;var v=a.child;if((a.subtreeFlags&2064)!==0&&v!==null)v.return=a,P=v;else e:for(a=h;P!==null;){if(u=P,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:Ki(9,u)}}catch(R){be(u,u.return,R)}if(u===a){P=null;break e}var N=u.sibling;if(N!==null){N.return=u.return,P=N;break e}P=u.return}}if(ae=s,rt(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(ai,e)}catch{}i=!0}return i}finally{de=t,yn.transition=n}}return!1}function Mc(e,n,t){n=Gt(t,n),n=Xl(e,n,1),e=st(e,n,1),n=en(),e!==null&&(fr(e,1,n),on(e,n))}function be(e,n,t){if(e.tag===3)Mc(e,e,t);else for(;n!==null;){if(n.tag===3){Mc(n,e,t);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(at===null||!at.has(i))){e=Gt(t,e),e=Jl(n,e,1),n=st(n,e,1),e=en(),n!==null&&(fr(n,1,e),on(n,e));break}}n=n.return}}function Od(e,n,t){var i=e.pingCache;i!==null&&i.delete(n),n=en(),e.pingedLanes|=e.suspendedLanes&t,Re===e&&(Fe&t)===t&&(Ie===4||Ie===3&&(Fe&130023424)===Fe&&500>Ce()-Ro?Lt(e,0):Uo|=t),on(e,n)}function Dc(e,n){n===0&&((e.mode&1)===0?n=1:(n=ci,ci<<=1,(ci&130023424)===0&&(ci=4194304)));var t=en();e=Fn(e,n),e!==null&&(fr(e,n,t),on(e,t))}function Fd(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Dc(e,t)}function zd(e,n){var t=0;switch(e.tag){case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(t=s.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(c(314))}i!==null&&i.delete(n),Dc(e,t)}var Pc;Pc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||nn.current)rn=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return rn=!1,_d(e,n,t);rn=(e.flags&131072)!==0}else rn=!1,xe&&(n.flags&1048576)!==0&&fl(n,Ii,n.index);switch(n.lanes=0,n.tag){case 2:var i=n.type;Vi(e,n),e=n.pendingProps;var s=Ot(n,Ve.current);Yt(n,t),s=mo(null,n,i,e,s,t);var o=go();return n.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,tn(i)?(o=!0,Li(n)):o=!1,n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,ao(n),s.updater=Hi,n.stateNode=s,s._reactInternals=n,ko(n,i,e,t),n=Eo(null,n,i,!0,o,t)):(n.tag=0,xe&&o&&Xs(n),Ze(null,n,s,t),n=n.child),n;case 16:i=n.elementType;e:{switch(Vi(e,n),e=n.pendingProps,s=i._init,i=s(i._payload),n.type=i,s=n.tag=Wd(i),e=Cn(i,e),s){case 0:n=Co(null,n,i,e,t);break e;case 1:n=ac(null,n,i,e,t);break e;case 11:n=tc(null,n,i,e,t);break e;case 14:n=rc(null,n,i,Cn(i.type,e),t);break e}throw Error(c(306,i,""))}return n;case 0:return i=n.type,s=n.pendingProps,s=n.elementType===i?s:Cn(i,s),Co(e,n,i,s,t);case 1:return i=n.type,s=n.pendingProps,s=n.elementType===i?s:Cn(i,s),ac(e,n,i,s,t);case 3:e:{if(lc(n),e===null)throw Error(c(387));i=n.pendingProps,o=n.memoizedState,s=o.element,Sl(e,n),Ui(n,i,null,t);var a=n.memoizedState;if(i=a.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){s=Gt(Error(c(423)),n),n=cc(e,n,i,t,s);break e}else if(i!==s){s=Gt(Error(c(424)),n),n=cc(e,n,i,t,s);break e}else for(dn=et(n.stateNode.containerInfo.firstChild),un=n,xe=!0,jn=null,t=bl(n,null,i,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ht(),i===s){n=Hn(e,n,t);break e}Ze(e,n,i,t)}n=n.child}return n;case 5:return El(n),e===null&&eo(n),i=n.type,s=n.pendingProps,o=e!==null?e.memoizedProps:null,a=s.children,Ws(i,s)?a=null:o!==null&&Ws(i,o)&&(n.flags|=32),oc(e,n),Ze(e,n,a,t),n.child;case 6:return e===null&&eo(n),null;case 13:return uc(e,n,t);case 4:return lo(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=Wt(n,null,i,t):Ze(e,n,i,t),n.child;case 11:return i=n.type,s=n.pendingProps,s=n.elementType===i?s:Cn(i,s),tc(e,n,i,s,t);case 7:return Ze(e,n,n.pendingProps,t),n.child;case 8:return Ze(e,n,n.pendingProps.children,t),n.child;case 12:return Ze(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(i=n.type._context,s=n.pendingProps,o=n.memoizedProps,a=s.value,he(Di,i._currentValue),i._currentValue=a,o!==null)if(Sn(o.value,a)){if(o.children===s.children&&!nn.current){n=Hn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var u=o.dependencies;if(u!==null){a=o.child;for(var d=u.firstContext;d!==null;){if(d.context===i){if(o.tag===1){d=zn(-1,t&-t),d.tag=2;var y=o.updateQueue;if(y!==null){y=y.shared;var j=y.pending;j===null?d.next=d:(d.next=j.next,j.next=d),y.pending=d}}o.lanes|=t,d=o.alternate,d!==null&&(d.lanes|=t),so(o.return,t,n),u.lanes|=t;break}d=d.next}}else if(o.tag===10)a=o.type===n.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(c(341));a.lanes|=t,u=a.alternate,u!==null&&(u.lanes|=t),so(a,t,n),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===n){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ze(e,n,s.children,t),n=n.child}return n;case 9:return s=n.type,i=n.pendingProps.children,Yt(n,t),s=xn(s),i=i(s),n.flags|=1,Ze(e,n,i,t),n.child;case 14:return i=n.type,s=Cn(i,n.pendingProps),s=Cn(i.type,s),rc(e,n,i,s,t);case 15:return ic(e,n,n.type,n.pendingProps,t);case 17:return i=n.type,s=n.pendingProps,s=n.elementType===i?s:Cn(i,s),Vi(e,n),n.tag=1,tn(i)?(e=!0,Li(n)):e=!1,Yt(n,t),Gl(n,i,s),ko(n,i,s,t),Eo(null,n,i,!0,e,t);case 19:return pc(e,n,t);case 22:return sc(e,n,t)}throw Error(c(156,n.tag))};function Bc(e,n){return ma(e,n)}function Hd(e,n,t,i){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(e,n,t,i){return new Hd(e,n,t,i)}function Vo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wd(e){if(typeof e=="function")return Vo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pe)return 11;if(e===Xe)return 14}return 2}function dt(e,n){var t=e.alternate;return t===null?(t=wn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function rs(e,n,t,i,s,o){var a=2;if(i=e,typeof e=="function")Vo(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case He:return _t(t.children,s,o,n);case Ne:a=8,s|=8;break;case ln:return e=wn(12,t,n,s|2),e.elementType=ln,e.lanes=o,e;case We:return e=wn(13,t,n,s),e.elementType=We,e.lanes=o,e;case Se:return e=wn(19,t,n,s),e.elementType=Se,e.lanes=o,e;case ge:return is(t,s,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case De:a=10;break e;case hn:a=9;break e;case Pe:a=11;break e;case Xe:a=14;break e;case Be:a=16,i=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return n=wn(a,t,n,s),n.elementType=e,n.type=i,n.lanes=o,n}function _t(e,n,t,i){return e=wn(7,e,i,n),e.lanes=t,e}function is(e,n,t,i){return e=wn(22,e,i,n),e.elementType=ge,e.lanes=t,e.stateNode={isHidden:!1},e}function Yo(e,n,t){return e=wn(6,e,null,n),e.lanes=t,e}function Ko(e,n,t){return n=wn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Vd(e,n,t,i,s){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ws(0),this.expirationTimes=ws(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ws(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Go(e,n,t,i,s,o,a,u,d){return e=new Vd(e,n,t,u,d),n===1?(n=1,o===!0&&(n|=8)):n=0,o=wn(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ao(o),e}function Yd(e,n,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Me,key:i==null?null:""+i,children:e,containerInfo:n,implementation:t}}function Uc(e){if(!e)return tt;e=e._reactInternals;e:{if(vt(e)!==e||e.tag!==1)throw Error(c(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(tn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(c(171))}if(e.tag===1){var t=e.type;if(tn(t))return dl(e,t,n)}return n}function Rc(e,n,t,i,s,o,a,u,d){return e=Go(t,i,!0,e,s,o,a,u,d),e.context=Uc(null),t=e.current,i=en(),s=ct(t),o=zn(i,s),o.callback=n??null,st(t,o,s),e.current.lanes=s,fr(e,s,i),on(e,i),e}function ss(e,n,t,i){var s=n.current,o=en(),a=ct(s);return t=Uc(t),n.context===null?n.context=t:n.pendingContext=t,n=zn(o,a),n.payload={element:e},i=i===void 0?null:i,i!==null&&(n.callback=i),e=st(s,n,a),e!==null&&(Ln(e,s,a,o),Bi(e,s,a)),a}function os(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Qo(e,n){qc(e,n),(e=e.alternate)&&qc(e,n)}function Kd(){return null}var $c=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xo(e){this._internalRoot=e}as.prototype.render=Xo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(c(409));ss(e,n,null,null)},as.prototype.unmount=Xo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Nt(function(){ss(null,e,null,null)}),n[Rn]=null}};function as(e){this._internalRoot=e}as.prototype.unstable_scheduleHydration=function(e){if(e){var n=Sa();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Xn.length&&n!==0&&n<Xn[t].priority;t++);Xn.splice(t,0,e),t===0&&Ea(e)}};function Jo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ls(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Oc(){}function Gd(e,n,t,i,s){if(s){if(typeof i=="function"){var o=i;i=function(){var y=os(a);o.call(y)}}var a=Rc(n,i,e,0,null,!1,!1,"",Oc);return e._reactRootContainer=a,e[Rn]=a.current,Lr(e.nodeType===8?e.parentNode:e),Nt(),a}for(;s=e.lastChild;)e.removeChild(s);if(typeof i=="function"){var u=i;i=function(){var y=os(d);u.call(y)}}var d=Go(e,0,!1,null,null,!1,!1,"",Oc);return e._reactRootContainer=d,e[Rn]=d.current,Lr(e.nodeType===8?e.parentNode:e),Nt(function(){ss(n,d,t,i)}),d}function cs(e,n,t,i,s){var o=t._reactRootContainer;if(o){var a=o;if(typeof s=="function"){var u=s;s=function(){var d=os(a);u.call(d)}}ss(n,a,e,s)}else a=Gd(t,n,e,s,i);return os(a)}ba=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=hr(n.pendingLanes);t!==0&&(bs(n,t|1),on(n,Ce()),(ae&6)===0&&(Jt=Ce()+500,rt()))}break;case 13:Nt(function(){var i=Fn(e,1);if(i!==null){var s=en();Ln(i,e,1,s)}}),Qo(e,1)}},ks=function(e){if(e.tag===13){var n=Fn(e,134217728);if(n!==null){var t=en();Ln(n,e,134217728,t)}Qo(e,134217728)}},ka=function(e){if(e.tag===13){var n=ct(e),t=Fn(e,n);if(t!==null){var i=en();Ln(t,e,n,i)}Qo(e,n)}},Sa=function(){return de},ja=function(e,n){var t=de;try{return de=e,n()}finally{de=t}},bn=function(e,n,t){switch(n){case"input":if(tr(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var i=t[n];if(i!==e&&i.form===e.form){var s=Ei(i);if(!s)throw Error(c(90));Gr(i),tr(i,s)}}}break;case"textarea":ei(e,t);break;case"select":n=t.value,n!=null&&Vn(e,!!t.multiple,n,!1)}},cr=zo,ie=Nt;var Qd={usingClientEntryPoint:!1,Events:[Ir,qt,Ei,ar,lr,zo]},Wr={findFiberByHostInstance:yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xd={bundleType:Wr.bundleType,version:Wr.version,rendererPackageName:Wr.rendererPackageName,rendererConfig:Wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:X.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ha(e),e===null?null:e.stateNode},findFiberByHostInstance:Wr.findFiberByHostInstance||Kd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var us=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!us.isDisabled&&us.supportsFiber)try{ai=us.inject(Xd),Tn=us}catch{}}return an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qd,an.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jo(n))throw Error(c(200));return Yd(e,n,null,t)},an.createRoot=function(e,n){if(!Jo(e))throw Error(c(299));var t=!1,i="",s=$c;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=Go(e,1,!1,null,null,t,!1,i,s),e[Rn]=n.current,Lr(e.nodeType===8?e.parentNode:e),new Xo(n)},an.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=ha(n),e=e===null?null:e.stateNode,e},an.flushSync=function(e){return Nt(e)},an.hydrate=function(e,n,t){if(!ls(n))throw Error(c(200));return cs(null,e,n,!0,t)},an.hydrateRoot=function(e,n,t){if(!Jo(e))throw Error(c(405));var i=t!=null&&t.hydratedSources||null,s=!1,o="",a=$c;if(t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=Rc(n,null,e,1,t??null,s,!1,o,a),e[Rn]=n.current,Lr(e),i)for(e=0;e<i.length;e++)t=i[e],s=t._getVersion,s=s(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,s]:n.mutableSourceEagerHydrationData.push(t,s);return new as(n)},an.render=function(e,n,t){if(!ls(n))throw Error(c(200));return cs(null,e,n,!1,t)},an.unmountComponentAtNode=function(e){if(!ls(e))throw Error(c(40));return e._reactRootContainer?(Nt(function(){cs(null,null,e,!1,function(){e._reactRootContainer=null,e[Rn]=null})}),!0):!1},an.unstable_batchedUpdates=zo,an.unstable_renderSubtreeIntoContainer=function(e,n,t,i){if(!ls(t))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return cs(e,n,t,!1,i)},an.version="18.3.1-next-f1338f8080-20240426",an}var Gc;function op(){if(Gc)return na.exports;Gc=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(p){console.error(p)}}return l(),na.exports=sp(),na.exports}var Qc;function ap(){if(Qc)return ds;Qc=1;var l=op();return ds.createRoot=l.createRoot,ds.hydrateRoot=l.hydrateRoot,ds}var lp=ap();const cp=tu(lp),up=typeof window<"u"&&typeof document<"u";function dp(){if(!up||window.__UX4G_RUNTIME_INITIALIZED__)return;window.__UX4G_RUNTIME_INITIALIZED__=!0;const l=document.createElement("script");l.setAttribute("data-ux4g-runtime","main"),l.textContent=`/*!\r
 * UX4G.js\r
 * Components: Dropdown, Collapse/Accordion, Offcanvas, Tooltip, Popover, Toast, Carousel, Tabs, Scrollspy\r
 * Compatibility: UX4G markup (data-ux-*)\r
 * Version: 1.1.0\r
 */\r
\r
(function (global) {\r
  "use strict";\r
\r
  // -----------------------------\r
  // Utilities\r
  // -----------------------------\r
  const U = {\r
    qs(sel, root = document) { return root.querySelector(sel); },\r
    qsa(sel, root = document) { return Array.from(root.querySelectorAll(sel)); },\r
    on(el, evt, cb, opts) { el && el.addEventListener(evt, cb, opts); },\r
    off(el, evt, cb, opts) { el && el.removeEventListener(evt, cb, opts); },\r
    closest(el, sel) { return el ? el.closest(sel) : null; },\r
    isVisible(el) { return !!(el && (el.offsetWidth || el.offsetHeight || el.getClientRects().length)); },\r
    reflow(el) { return el && el.offsetHeight; },\r
    attr(el, name, fallback = null) {\r
      if (!el) return fallback;\r
      const v = el.getAttribute(name);\r
      return v == null ? fallback : v;\r
    },\r
    // Prefer UX4G attributes\r
    data(el, key, fallback = null) {\r
      if (!el) return fallback;\r
      const ux = el.getAttribute(\`data-ux-\${key}\`);\r
      if (ux != null) return ux;\r
      const bs = el.getAttribute(\`data-bs-\${key}\`);\r
      if (bs != null) return bs;\r
      const ux4g = el.getAttribute(\`ux4g-\${key}\`);\r
      if (ux4g != null) return ux4g;\r
      return fallback;\r
    },\r
    bool(v, fallback = false) {\r
      if (v == null) return fallback;\r
      if (typeof v === "boolean") return v;\r
      const s = String(v).trim().toLowerCase();\r
      if (s === "" || s === "true" || s === "1") return true;\r
      if (s === "false" || s === "0") return false;\r
      return fallback;\r
    },\r
    num(v, fallback = 0) {\r
      const n = Number(v);\r
      return Number.isFinite(n) ? n : fallback;\r
    },\r
    dispatch(el, name, detail) {\r
      if (!el) return;\r
      el.dispatchEvent(new CustomEvent(name, { bubbles: true, cancelable: true, detail }));\r
    },\r
    focusables(root) {\r
      if (!root) return [];\r
      const sel = [\r
        "a[href]",\r
        "area[href]",\r
        "button:not([disabled])",\r
        "input:not([disabled]):not([type='hidden'])",\r
        "select:not([disabled])",\r
        "textarea:not([disabled])",\r
        "[tabindex]:not([tabindex='-1'])",\r
        "[contenteditable='true']"\r
      ].join(",");\r
      return U.qsa(sel, root).filter(U.isVisible);\r
    },\r
    // Body scroll lock (simple)\r
    lockBody(lock) {\r
      const cls = "ux4g-scroll-lock";\r
      if (lock) document.body.classList.add(cls);\r
      else document.body.classList.remove(cls);\r
    },\r
    ensureBackdrop(kind) {\r
      let bd = U.qs(\`.ux4g-backdrop[data-kind="\${kind}"]\`);\r
      if (!bd) {\r
        bd = document.createElement("div");\r
        bd.className = "ux4g-backdrop";\r
        bd.setAttribute("data-kind", kind);\r
        document.body.appendChild(bd);\r
      }\r
      return bd;\r
    },\r
    removeBackdrop(kind) {\r
      const bd = U.qs(\`.ux4g-backdrop[data-kind="\${kind}"]\`);\r
      if (bd) bd.remove();\r
    },\r
    // Lightweight positioning (NOT Popper-perfect)\r
    placeFloating(target, floating, placement = "bottom", offset = 8, constrainToViewport = true) {\r
      if (!target || !floating) return;\r
\r
      const rect = target.getBoundingClientRect();\r
      const scrollX = window.pageXOffset || document.documentElement.scrollLeft;\r
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;\r
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);\r
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);\r
      \r
      // Temporary show to measure\r
      const originalDisplay = floating.style.display;\r
      const originalVisibility = floating.style.visibility;\r
      floating.style.display = "block";\r
      floating.style.visibility = "hidden";\r
\r
      if (!constrainToViewport) {\r
        floating.style.boxSizing = "border-box";\r
        floating.style.minWidth = "0";\r
        floating.style.maxWidth = \`\${Math.max(1, vw - 16)}px\`;\r
        floating.style.overflow = "visible";\r
      }\r
\r
      let fr = floating.getBoundingClientRect();\r
\r
      const clamp = (v, min, max) => Math.min(max, Math.max(min, v));\r
\r
      const resolvedPlacement = !constrainToViewport ? floating.getAttribute("data-ux-resolved-placement") : null;\r
      const want = resolvedPlacement || placement;\r
      const [wantedSide] = want.split("-");\r
      const tries = [want];\r
      const opposite = { top: "bottom", bottom: "top", left: "right", right: "left" };\r
      const sideFallback = opposite[wantedSide];\r
      if (sideFallback) {\r
        tries.push(want.replace(wantedSide, sideFallback));\r
      }\r
      ["bottom", "top", "right", "left"].forEach(s => {\r
        if (!tries.includes(s)) tries.push(s);\r
      });\r
\r
      const compute = (p) => {\r
        let t = 0, l = 0;\r
        const [side, align] = p.split("-");\r
        \r
        if (side === "top") {\r
          t = rect.top - fr.height - offset;\r
          if (align === "start") l = rect.left;\r
          else if (align === "end") l = rect.right - fr.width;\r
          else l = rect.left + (rect.width - fr.width) / 2;\r
        } else if (side === "bottom") {\r
          t = rect.bottom + offset;\r
          if (align === "start") l = rect.left;\r
          else if (align === "end") l = rect.right - fr.width;\r
          else l = rect.left + (rect.width - fr.width) / 2;\r
        } else if (side === "left") {\r
          l = rect.left - fr.width - offset;\r
          if (align === "start") t = rect.top;\r
          else if (align === "end") t = rect.bottom - fr.height;\r
          else t = rect.top + (rect.height - fr.height) / 2;\r
        } else if (side === "right") {\r
          l = rect.right + offset;\r
          if (align === "start") t = rect.top;\r
          else if (align === "end") t = rect.bottom - fr.height;\r
          else t = rect.top + (rect.height - fr.height) / 2;\r
        } else {\r
          t = rect.bottom + offset;\r
          l = rect.left + (rect.width - fr.width) / 2;\r
          p = "bottom";\r
        }\r
        return { t, l, p };\r
      };\r
\r
      let chosen = null;\r
      if (constrainToViewport || !resolvedPlacement) {\r
        for (const p of tries) {\r
          const c = compute(p);\r
          const fitsH = c.t >= 0 && (c.t + fr.height) <= vh;\r
          const fitsW = c.l >= 0 && (c.l + fr.width) <= vw;\r
          if (fitsH && fitsW) { chosen = c; break; }\r
        }\r
      }\r
      if (!chosen && !resolvedPlacement) {\r
        const visibleArea = c => {\r
          const visibleWidth = Math.max(0, Math.min(vw, c.l + fr.width) - Math.max(0, c.l));\r
          const visibleHeight = Math.max(0, Math.min(vh, c.t + fr.height) - Math.max(0, c.t));\r
          return visibleWidth * visibleHeight;\r
        };\r
        chosen = tries.map(compute).sort((a, b) => visibleArea(b) - visibleArea(a))[0];\r
      }\r
      if (!chosen) chosen = compute(want);\r
\r
      if (!constrainToViewport) {\r
        floating.setAttribute("data-ux-resolved-placement", chosen.p);\r
        const [side] = chosen.p.split("-");\r
        const availableWidth = side === "left"\r
          ? rect.left - offset - 8\r
          : side === "right"\r
            ? vw - rect.right - offset - 8\r
            : vw - 16;\r
\r
        floating.style.maxWidth = \`\${Math.max(1, availableWidth)}px\`;\r
\r
        const body = floating.querySelector(".ux4g-popover-body");\r
        if (body) {\r
          body.style.boxSizing = "border-box";\r
          body.style.maxWidth = "100%";\r
          body.style.overflowWrap = "anywhere";\r
          body.style.wordBreak = "break-word";\r
        }\r
\r
        fr = floating.getBoundingClientRect();\r
        chosen = compute(chosen.p);\r
      }\r
\r
      floating.style.display = originalDisplay;\r
      floating.style.visibility = originalVisibility;\r
\r
      const [chosenSide] = chosen.p.split("-");\r
      const top = constrainToViewport\r
        ? clamp(chosen.t, 8, Math.max(8, vh - fr.height - 8))\r
        : (chosenSide === "left" || chosenSide === "right" ? clamp(chosen.t, 8, Math.max(8, vh - fr.height - 8)) : chosen.t) + scrollY;\r
      const left = constrainToViewport\r
        ? clamp(chosen.l, 8, Math.max(8, vw - fr.width - 8))\r
        : (chosenSide === "top" || chosenSide === "bottom" ? clamp(chosen.l, 8, Math.max(8, vw - fr.width - 8)) : chosen.l) + scrollX;\r
\r
      floating.style.position = constrainToViewport ? "fixed" : "absolute";\r
      floating.style.top = \`\${top}px\`;\r
      floating.style.left = \`\${left}px\`;\r
      floating.setAttribute("data-placement", chosen.p);\r
      \r
      const isTooltip = floating.classList.contains('ux4g-tooltip');\r
      const baseClass = isTooltip ? 'ux4g-tooltip' : 'ux4g-popover';\r
      \r
      const placementPrefix = \`\${baseClass}-\`;\r
      for (const cls of Array.from(floating.classList)) {\r
        if (cls.startsWith(placementPrefix) && cls !== baseClass) {\r
          floating.classList.remove(cls);\r
        }\r
      }\r
      floating.classList.add(\`\${placementPrefix}\${chosen.p}\`);\r
    }\r
  };\r
\r
  const Registry = new WeakMap();\r
  const getI = (el, key) => (Registry.get(el)?.[key]) || null;\r
  const setI = (el, key, inst) => {\r
    let map = Registry.get(el);\r
    if (!map) { map = {}; Registry.set(el, map); }\r
    map[key] = inst;\r
  };\r
\r
  const escapeHtml = (s) => String(s)\r
    .replaceAll("&", "&amp;")\r
    .replaceAll("<", "&lt;")\r
    .replaceAll(">", "&gt;")\r
    .replaceAll('"', "&quot;")\r
    .replaceAll("'", "&#039;");\r
\r
  // -----------------------------\r
  // Dropdown\r
  // -----------------------------\r
  class Dropdown {\r
    constructor(toggle) {\r
      this.toggle = toggle;\r
      this.menu = this._findMenu(toggle);\r
      this._open = false;\r
\r
      U.on(this.toggle, "click", (e) => {\r
        e.preventDefault();\r
        this.toggleDropdown();\r
      });\r
\r
      U.on(document, "click", (e) => {\r
        if (!this._open) return;\r
        if (this.menu && (this.menu.contains(e.target) || this.toggle.contains(e.target))) return;\r
        this.hide();\r
      });\r
\r
      U.on(document, "keydown", (e) => {\r
        if (!this._open) return;\r
        if (e.key === "Escape") {\r
          this.hide();\r
          this.toggle.focus();\r
        }\r
      });\r
    }\r
\r
    _findMenu(toggle) {\r
      // Standard dropdown structure: .dropdown > [toggle] + .dropdown-menu\r
      const parent = toggle.parentElement;\r
      let menu = parent ? parent.querySelector(".dropdown-menu") : null;\r
      if (!menu) {\r
        const target = U.data(toggle, "target") || U.attr(toggle, "aria-controls");\r
        if (target && target.startsWith("#")) menu = U.qs(target);\r
      }\r
      return menu;\r
    }\r
\r
    show() {\r
      if (!this.menu) return;\r
      this._open = true;\r
      this.toggle.classList.add("show");\r
      this.menu.classList.add("show");\r
      this.toggle.setAttribute("aria-expanded", "true");\r
\r
      const placement = U.data(this.toggle, "placement", "bottom");\r
      const offset = U.num(U.data(this.toggle, "offset", 6), 6);\r
      U.placeFloating(this.toggle, this.menu, placement, offset);\r
\r
      U.dispatch(this.toggle, "ux4g.dropdown.shown", { menu: this.menu });\r
    }\r
\r
    hide() {\r
      if (!this.menu) return;\r
      this._open = false;\r
      this.toggle.classList.remove("show");\r
      this.menu.classList.remove("show");\r
      this.toggle.setAttribute("aria-expanded", "false");\r
      U.dispatch(this.toggle, "ux4g.dropdown.hidden", { menu: this.menu });\r
    }\r
\r
    toggleDropdown() { this._open ? this.hide() : this.show(); }\r
\r
    static getOrCreate(el) {\r
      let inst = getI(el, "dropdown");\r
      if (!inst) { inst = new Dropdown(el); setI(el, "dropdown", inst); }\r
      return inst;\r
    }\r
  }\r
\r
  // -----------------------------\r
  // Collapse / Accordion\r
  // -----------------------------\r
  class Collapse {\r
    constructor(trigger) {\r
      this.trigger = trigger;\r
      this.target = this._resolveTarget(trigger);\r
      // ux4g accordion uses data-bs-parent on .collapse\r
      this.parentSel = U.data(this.target, "parent") || U.data(this.trigger, "parent");\r
      this.duration = this._readDuration(this.target, 200);\r
\r
      U.on(this.trigger, "click", (e) => {\r
        e.preventDefault();\r
        this.toggle();\r
      });\r
    }\r
\r
    _resolveTarget(trigger) {\r
      const sel = U.data(trigger, "target") || U.attr(trigger, "href") || U.attr(trigger, "aria-controls") || U.attr(trigger, "ux4g-target");\r
      if (sel && sel.startsWith("#")) return U.qs(sel);\r
      return U.qs("#" + sel);\r
    }\r
\r
    _readDuration(el, fallbackMs) {\r
      if (!el) return fallbackMs;\r
      const d = getComputedStyle(el).transitionDuration || "";\r
      const ms = d.includes("ms") ? parseFloat(d) : (d.includes("s") ? parseFloat(d) * 1000 : NaN);\r
      return Number.isFinite(ms) && ms > 0 ? ms : fallbackMs;\r
    }\r
\r
    show() {\r
      if (!this.target) return;\r
\r
      // Accordion: close other open within parent\r
      if (this.parentSel) {\r
        const parent = U.qs(this.parentSel);\r
        if (parent) {\r
          U.qsa(".collapse.show", parent).forEach((el) => {\r
            if (el === this.target) return;\r
            el.classList.remove("show");\r
            // update triggers for that element\r
            if (el.id) {\r
              U.qsa(\`[data-bs-target="#\${el.id}"],[data-ux-target="#\${el.id}"],[ux4g-target="#\${el.id}"],a[href="#\${el.id}"]\`)\r
                .forEach(t => {\r
                  t.classList.add("collapsed");\r
                  t.setAttribute("aria-expanded", "false");\r
                });\r
            }\r
          });\r
        }\r
      }\r
\r
      // Animate height\r
      this.target.classList.add("collapsing");\r
      this.target.classList.remove("collapse");\r
      this.target.style.height = "0px";\r
      U.reflow(this.target);\r
\r
      const h = this.target.scrollHeight;\r
      this.target.style.height = h + "px";\r
\r
      this.trigger.classList.remove("collapsed");\r
      this.trigger.setAttribute("aria-expanded", "true");\r
\r
      window.setTimeout(() => {\r
        this.target.classList.remove("collapsing");\r
        this.target.classList.add("collapse", "show");\r
        this.target.style.height = "";\r
        U.dispatch(this.target, "ux4g.collapse.shown", {});\r
      }, this.duration);\r
    }\r
\r
    hide() {\r
      if (!this.target) return;\r
\r
      this.target.style.height = this.target.getBoundingClientRect().height + "px";\r
      U.reflow(this.target);\r
\r
      this.target.classList.add("collapsing");\r
      this.target.classList.remove("collapse", "show");\r
\r
      this.trigger.classList.add("collapsed");\r
      this.trigger.setAttribute("aria-expanded", "false");\r
\r
      window.setTimeout(() => {\r
        this.target.style.height = "0px";\r
      }, 10);\r
\r
      window.setTimeout(() => {\r
        this.target.classList.remove("collapsing");\r
        this.target.classList.add("collapse");\r
        this.target.style.height = "";\r
        U.dispatch(this.target, "ux4g.collapse.hidden", {});\r
      }, this.duration);\r
    }\r
\r
    toggle() {\r
      if (!this.target) return;\r
      this.target.classList.contains("show") ? this.hide() : this.show();\r
    }\r
\r
    static getOrCreate(el) {\r
      let inst = getI(el, "collapse");\r
      if (!inst) { inst = new Collapse(el); setI(el, "collapse", inst); }\r
      return inst;\r
    }\r
  }\r
\r
  // -----------------------------\r
  // Offcanvas\r
  // -----------------------------\r
  class Offcanvas {\r
    constructor(el) {\r
      this.el = el;\r
      this._shown = false;\r
      this._bdKind = "offcanvas";\r
      this._lastFocus = null;\r
      this.duration = this._readDuration(el, 250);\r
\r
      U.on(this.el, "click", (e) => {\r
        const dismiss = U.closest(e.target, '[data-bs-dismiss="offcanvas"],[data-ux-dismiss="offcanvas"]');\r
        if (dismiss) {\r
          e.preventDefault();\r
          this.hide();\r
        }\r
      });\r
\r
      U.on(document, "keydown", (e) => {\r
        if (!this._shown) return;\r
        if (e.key === "Escape") {\r
          const kb = U.bool(U.data(this.el, "keyboard", "true"), true);\r
          if (kb) this.hide();\r
        } else if (e.key === "Tab") {\r
          this._trapTab(e);\r
        }\r
      });\r
    }\r
\r
    _readDuration(el, fallbackMs) {\r
      if (!el) return fallbackMs;\r
      const d = getComputedStyle(el).transitionDuration || "";\r
      const ms = d.includes("ms") ? parseFloat(d) : (d.includes("s") ? parseFloat(d) * 1000 : NaN);\r
      return Number.isFinite(ms) && ms > 0 ? ms : fallbackMs;\r
    }\r
\r
    _trapTab(e) {\r
      const f = U.focusables(this.el);\r
      if (!f.length) return;\r
      const first = f[0], last = f[f.length - 1];\r
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }\r
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }\r
    }\r
\r
    show(trigger) {\r
      if (this._shown) return;\r
      this._shown = true;\r
      this._lastFocus = document.activeElement;\r
\r
      const backdropOpt = U.data(this.el, "backdrop", "true");\r
      const backdrop = backdropOpt !== "false";\r
\r
      if (backdrop) {\r
        const bd = U.ensureBackdrop(this._bdKind);\r
        bd.classList.add("show");\r
        U.on(bd, "click", () => {\r
          if (backdropOpt === "static") return;\r
          this.hide();\r
        });\r
      }\r
\r
      U.lockBody(true);\r
      this.el.style.visibility = "visible";\r
      this.el.classList.add("show");\r
      this.el.setAttribute("aria-modal", "true");\r
\r
      const focus = U.bool(U.data(this.el, "focus", "true"), true);\r
      if (focus) {\r
        const f = U.focusables(this.el);\r
        (f[0] || this.el).focus({ preventScroll: true });\r
      }\r
\r
      U.dispatch(this.el, "ux4g.offcanvas.shown", { relatedTarget: trigger || null });\r
    }\r
\r
    hide() {\r
      if (!this._shown) return;\r
      this._shown = false;\r
\r
      this.el.classList.remove("show");\r
      this.el.removeAttribute("aria-modal");\r
\r
      window.setTimeout(() => {\r
        this.el.style.visibility = "";\r
        U.lockBody(false);\r
        U.removeBackdrop(this._bdKind);\r
\r
        if (this._lastFocus && typeof this._lastFocus.focus === "function") {\r
          this._lastFocus.focus({ preventScroll: true });\r
        }\r
        U.dispatch(this.el, "ux4g.offcanvas.hidden", {});\r
      }, this.duration);\r
    }\r
\r
    toggle(trigger) { this._shown ? this.hide() : this.show(trigger); }\r
\r
    static getOrCreate(el) {\r
      let inst = getI(el, "offcanvas");\r
      if (!inst) { inst = new Offcanvas(el); setI(el, "offcanvas", inst); }\r
      return inst;\r
    }\r
  }\r
\r
  // -----------------------------\r
  // Tooltip / Popover (lightweight)\r
  // -----------------------------\r
  class Floating {\r
    constructor(el, kind) {\r
      this.el = el;\r
      this.kind = kind; // tooltip | popover\r
      this._open = false;\r
      this._floating = null;\r
\r
      this.placement = U.data(el, "placement", kind === "tooltip" ? "top" : "right");\r
      this.offset = U.num(U.data(el, "offset", 8), 8);\r
      this.trigger = U.data(el, "trigger", kind === "tooltip" ? "hover focus" : "click");\r
      this.html = U.bool(U.data(el, "html", "false"), false);\r
\r
      this._bind();\r
    }\r
\r
    _getContent() {\r
      const content = U.data(this.el, "content");\r
      if (this.kind === "popover") {\r
        const title = U.data(this.el, "title") || this.el.getAttribute("title") || "";\r
        const subtitle = U.data(this.el, "subtitle") || "";\r
        const icon = U.data(this.el, "icon") || "";\r
        const label = U.data(this.el, "label") || "";\r
        const actionHtml = U.data(this.el, "action-html") || "";\r
\r
        const t = this.html ? String(title) : escapeHtml(title);\r
        const s = this.html ? String(subtitle) : escapeHtml(subtitle);\r
        const c = this.html ? String(content || "") : escapeHtml(content || "");\r
        const i = this.html ? String(icon) : escapeHtml(icon);\r
        const l = this.html ? String(label) : escapeHtml(label);\r
\r
        let inner = "";\r
        if (t || s) {\r
          inner += \`<div class="ux4g-popover-header">\r
            <div class="ux4g-popover-title-row">\r
              <div class="ux4g-popover-title">\r
                \${i ? \`<i class="ux4g-icon">\${i}</i>\` : ""}\r
                <span>\${t}</span>\r
                \${l ? \`<span class="ux4g-tag-outline-brand">\${l}</span>\` : ""}\r
              </div>\r
              \${actionHtml ? \`\r
                  \${actionHtml}\r
              \` : ""}\r
            </div>\r
            \${s ? \`<div class="ux4g-popover-subtitle">\${s}</div>\` : ""}\r
          </div>\`;\r
        }\r
        inner += \`<div class="ux4g-popover-body">\${c}</div>\`;\r
        \r
        const hasArrow = U.bool(U.data(this.el, "arrow", "true"), true);\r
        if (hasArrow) {\r
          inner += '<div class="ux4g-popover-arrow"><i class="ux4g-icon">arrow_drop_up</i></div>';\r
        }\r
        \r
        return inner;\r
      }\r
\r
      const t = content != null ? content : (this.el.getAttribute("title") || "");\r
      return this.html ? String(t) : escapeHtml(t);\r
    }\r
\r
    _create() {\r
      if (this._floating) return;\r
      const div = document.createElement("div");\r
      div.className = this.kind === "tooltip" ? "ux4g-tooltip" : "ux4g-popover";\r
      div.setAttribute("role", this.kind === "tooltip" ? "tooltip" : "dialog");\r
      \r
      const hasArrow = U.bool(U.data(this.el, "arrow", "true"), true);\r
      if (!hasArrow) {\r
        div.classList.add("ux4g-popover-no-arrow");\r
      }\r
\r
      div.innerHTML = this._getContent() || "";\r
      document.body.appendChild(div);\r
      this._floating = div;\r
    }\r
\r
    show() {\r
      if (this._open) return;\r
      this._open = true;\r
\r
      // Prevent native tooltip doubling\r
      if (this.kind === "tooltip") {\r
        const t = this.el.getAttribute("title");\r
        if (t != null) {\r
          this.el.setAttribute("data-ux-original-title", t);\r
          this.el.removeAttribute("title");\r
        }\r
      }\r
\r
      this._create();\r
      this._floating.style.display = "block";\r
      this._floating.classList.add("show");\r
      \r
      init(this._floating);\r
      \r
      const update = () => {\r
        if (!this._open) return;\r
        if (!this.el.isConnected) {\r
          this.hide();\r
          if (this._floating) {\r
            this._floating.remove();\r
            this._floating = null;\r
          }\r
          return;\r
        }\r
        U.placeFloating(this.el, this._floating, this.placement, this.offset, this.kind !== "popover");\r
        if (this.kind !== "popover") this._raf = requestAnimationFrame(update);\r
      };\r
      this._onWin = update;\r
      if (this.kind === "popover") {\r
        update();\r
      } else {\r
        this._raf = requestAnimationFrame(update);\r
      }\r
\r
      U.on(window, "scroll", this._onWin, { capture: true, passive: true });\r
      U.on(window, "resize", this._onWin);\r
\r
      U.dispatch(this.el, \`ux4g.\${this.kind}.shown\`, {});\r
    }\r
\r
    hide() {\r
      if (!this._open) return;\r
      this._open = false;\r
\r
      if (this._floating) {\r
        this._floating.classList.remove("show");\r
        this._floating.style.display = "none";\r
        this._floating.removeAttribute("data-ux-resolved-placement");\r
      }\r
\r
      if (this.kind === "tooltip") {\r
        const ot = this.el.getAttribute("data-ux-original-title");\r
        if (ot != null) {\r
          this.el.setAttribute("title", ot);\r
          this.el.removeAttribute("data-ux-original-title");\r
        }\r
      }\r
\r
      if (this._raf) {\r
        cancelAnimationFrame(this._raf);\r
        this._raf = null;\r
      }\r
\r
      if (this._onWin) {\r
        U.off(window, "scroll", this._onWin, { capture: true });\r
        U.off(window, "resize", this._onWin);\r
        this._onWin = null;\r
      }\r
\r
      U.dispatch(this.el, \`ux4g.\${this.kind}.hidden\`, {});\r
    }\r
\r
    toggle() { this._open ? this.hide() : this.show(); }\r
\r
    _bind() {\r
      let triggers = String(this.trigger).split(/\\s+/).filter(Boolean);\r
      \r
      if (this.kind === "popover") {\r
        triggers = triggers.filter(t => t !== "hover");\r
        if (!triggers.length) triggers = ["click"];\r
      }\r
\r
      if (triggers.includes("hover")) {\r
        U.on(this.el, "mouseenter", () => this.show());\r
        U.on(this.el, "mouseleave", () => this.hide());\r
      }\r
      if (triggers.includes("focus")) {\r
        U.on(this.el, "focus", () => this.show());\r
        U.on(this.el, "blur", () => this.hide());\r
      }\r
      if (triggers.includes("click")) {\r
        U.on(this.el, "click", (e) => { e.preventDefault(); this.toggle(); });\r
\r
        U.on(document, "click", (e) => {\r
          if (!this._open) return;\r
          if (this.el.contains(e.target) || (this._floating && this._floating.contains(e.target))) return;\r
          this.hide();\r
        });\r
\r
        U.on(document, "keydown", (e) => {\r
          if (!this._open) return;\r
          if (e.key === "Escape") this.hide();\r
        });\r
      }\r
    }\r
\r
    static getOrCreate(el, kind) {\r
      const key = kind;\r
      let inst = getI(el, key);\r
      if (!inst) { inst = new Floating(el, kind); setI(el, key, inst); }\r
      return inst;\r
    }\r
  }\r
\r
  // -----------------------------\r
  // Toast\r
  // -----------------------------\r
  class Toast {\r
    constructor(el) {\r
      this.el = el;\r
      this._timer = null;\r
\r
      U.on(this.el, "click", (e) => {\r
        const dismiss = U.closest(e.target, '[data-bs-dismiss="toast"],[data-ux-dismiss="toast"],.close-toast');\r
        if (dismiss) {\r
          e.preventDefault();\r
          this.hide();\r
        }\r
      });\r
    }\r
\r
    show() {\r
      this.el.classList.add("show");\r
      this.el.classList.remove("hide");\r
\r
      const autohide = U.bool(U.data(this.el, "autohide", "true"), true);\r
      const delay = U.num(U.data(this.el, "delay", 5000), 5000);\r
\r
      if (autohide) {\r
        clearTimeout(this._timer);\r
        this._timer = setTimeout(() => this.hide(), delay);\r
      }\r
      U.dispatch(this.el, "ux4g.toast.shown", {});\r
    }\r
\r
    hide() {\r
      this.el.classList.remove("show");\r
      this.el.classList.add("hide");\r
      clearTimeout(this._timer);\r
      U.dispatch(this.el, "ux4g.toast.hidden", {});\r
    }\r
\r
    static getOrCreate(el) {\r
      let inst = getI(el, "toast");\r
      if (!inst) { inst = new Toast(el); setI(el, "toast", inst); }\r
      return inst;\r
    }\r
  }\r
\r
  // -----------------------------\r
  // Carousel\r
  // -----------------------------\r
  class Carousel {\r
    constructor(el) {\r
      this.el = el;\r
      this.items = U.qsa(".carousel-item", el);\r
      this.indicators = U.qsa("[data-bs-slide-to],[data-ux-slide-to]", el);\r
      this.interval = U.num(U.data(el, "interval", 5000), 5000);\r
      this.ride = U.data(el, "ride");\r
      this.pause = U.data(el, "pause", "hover");\r
      this.wrap = U.bool(U.data(el, "wrap", "true"), true);\r
      this._timer = null;\r
\r
      U.on(el, "click", (e) => {\r
        const prev = U.closest(e.target, '[data-bs-slide="prev"],[data-ux-slide="prev"]');\r
        const next = U.closest(e.target, '[data-bs-slide="next"],[data-ux-slide="next"]');\r
        if (prev) { e.preventDefault(); this.prev(); }\r
        if (next) { e.preventDefault(); this.next(); }\r
\r
        const ind = U.closest(e.target, "[data-bs-slide-to],[data-ux-slide-to]");\r
        if (ind) {\r
          e.preventDefault();\r
          const v = ind.getAttribute("data-bs-slide-to") ?? ind.getAttribute("data-ux-slide-to");\r
          this.to(U.num(v, 0));\r
        }\r
      });\r
\r
      if (this.pause === "hover") {\r
        U.on(el, "mouseenter", () => this._stop());\r
        U.on(el, "mouseleave", () => this._start());\r
      }\r
\r
      if (this.ride === "carousel") this._start();\r
    }\r
\r
    _activeIndex() {\r
      const idx = this.items.findIndex(i => i.classList.contains("active"));\r
      return idx >= 0 ? idx : 0;\r
    }\r
\r
    _setActive(nextIndex) {\r
      if (!this.items.length) return;\r
      const cur = this._activeIndex();\r
\r
      if (nextIndex < 0) nextIndex = this.wrap ? this.items.length - 1 : 0;\r
      if (nextIndex >= this.items.length) nextIndex = this.wrap ? 0 : this.items.length - 1;\r
      if (cur === nextIndex) return;\r
\r
      this.items[cur]?.classList.remove("active");\r
      this.items[nextIndex]?.classList.add("active");\r
\r
      this.indicators.forEach(ind => ind.classList.remove("active"));\r
      const ind = this.indicators.find(x => {\r
        const v = x.getAttribute("data-bs-slide-to") ?? x.getAttribute("data-ux-slide-to");\r
        return U.num(v, -1) === nextIndex;\r
      });\r
      if (ind) ind.classList.add("active");\r
\r
      U.dispatch(this.el, "ux4g.carousel.slid", { from: cur, to: nextIndex });\r
    }\r
\r
    next() { this._setActive(this._activeIndex() + 1); }\r
    prev() { this._setActive(this._activeIndex() - 1); }\r
    to(i) { this._setActive(i); }\r
\r
    _start() {\r
      if (this._timer || this.interval <= 0) return;\r
      this._timer = setInterval(() => this.next(), this.interval);\r
    }\r
\r
    _stop() { clearInterval(this._timer); this._timer = null; }\r
\r
    static getOrCreate(el) {\r
      let inst = getI(el, "carousel");\r
      if (!inst) { inst = new Carousel(el); setI(el, "carousel", inst); }\r
      return inst;\r
    }\r
  }\r
\r
  // -----------------------------\r
  // Tabs\r
  // -----------------------------\r
  class Tab {\r
    constructor(el) {\r
      this.el = el;\r
\r
      U.on(el, "click", (e) => { e.preventDefault(); this.show(); });\r
\r
      U.on(el, "keydown", (e) => {\r
        if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;\r
        const list = U.closest(this.el, ".nav, [role='tablist']");\r
        if (!list) return;\r
\r
        const tabs = U.qsa("[data-bs-toggle='tab'],[data-ux-toggle='tab'],[role='tab']", list);\r
        const idx = tabs.indexOf(this.el);\r
        if (idx < 0) return;\r
\r
        e.preventDefault();\r
        const next = (e.key === "ArrowRight") ? idx + 1 : idx - 1;\r
        const wrapIdx = (next + tabs.length) % tabs.length;\r
        tabs[wrapIdx].focus();\r
        Tab.getOrCreate(tabs[wrapIdx]).show();\r
      });\r
    }\r
\r
    _target() {\r
      const sel = U.data(this.el, "target") || U.attr(this.el, "href") || U.attr(this.el, "data-target");\r
      if (sel && sel.startsWith("#")) return U.qs(sel);\r
      const controls = this.el.getAttribute("aria-controls");\r
      if (controls) return U.qs("#" + controls);\r
      return null;\r
    }\r
\r
    show() {\r
      const list = U.closest(this.el, ".nav, [role='tablist']");\r
      const pane = this._target();\r
      if (!list || !pane) return;\r
\r
      const tabs = U.qsa("[data-bs-toggle='tab'],[data-ux-toggle='tab'],[role='tab']", list);\r
      tabs.forEach(t => {\r
        t.classList.remove("active");\r
        t.setAttribute("aria-selected", "false");\r
        t.setAttribute("tabindex", "-1");\r
      });\r
\r
      this.el.classList.add("active");\r
      this.el.setAttribute("aria-selected", "true");\r
      this.el.setAttribute("tabindex", "0");\r
\r
      const container = U.closest(pane, ".tab-content") || pane.parentElement;\r
      const panes = container ? U.qsa(".tab-pane", container) : [];\r
      panes.forEach(p => p.classList.remove("active", "show"));\r
\r
      pane.classList.add("active", "show");\r
      U.dispatch(this.el, "ux4g.tab.shown", { relatedTarget: pane });\r
    }\r
\r
    static getOrCreate(el) {\r
      let inst = getI(el, "tab");\r
      if (!inst) { inst = new Tab(el); setI(el, "tab", inst); }\r
      return inst;\r
    }\r
  }\r
\r
  // -----------------------------\r
  // Scrollspy\r
  // -----------------------------\r
  class ScrollSpy {\r
    constructor(el) {\r
      this.el = el; // element with data-bs-spy="scroll"\r
      this.targetSel = U.data(el, "target");\r
      this.offset = U.num(U.data(el, "offset", 10), 10);\r
      this._links = [];\r
      this._sections = [];\r
\r
      this.refresh();\r
      this._bind();\r
    }\r
\r
    refresh() {\r
      const nav = this.targetSel ? U.qs(this.targetSel) : null;\r
      if (!nav) return;\r
\r
      this._links = U.qsa('a[href^="#"]', nav)\r
        .filter(a => a.getAttribute("href").length > 1);\r
\r
      this._sections = this._links\r
        .map(a => U.qs(a.getAttribute("href")))\r
        .filter(Boolean);\r
    }\r
\r
    _activate(id) {\r
      const nav = this.targetSel ? U.qs(this.targetSel) : null;\r
      if (!nav) return;\r
\r
      this._links.forEach(a => a.classList.remove("active"));\r
      const link = this._links.find(a => a.getAttribute("href") === "#" + id);\r
      if (link) link.classList.add("active");\r
    }\r
\r
    _bind() {\r
      // If the spy is on body, use window; else use that element\r
      const container = (this.el === document.body || this.el === document.documentElement) ? window : this.el;\r
\r
      if ("IntersectionObserver" in window) {\r
        const root = (container === window) ? null : this.el;\r
\r
        const io = new IntersectionObserver((entries) => {\r
          const visible = entries\r
            .filter(e => e.isIntersecting)\r
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];\r
          if (visible?.target?.id) this._activate(visible.target.id);\r
        }, {\r
          root,\r
          rootMargin: \`-\${this.offset}px 0px -60% 0px\`,\r
          threshold: [0.1, 0.25, 0.5, 0.75]\r
        });\r
\r
        this._sections.forEach(s => io.observe(s));\r
        this._io = io;\r
        return;\r
      }\r
\r
      this._onScroll = () => {\r
        const scrollTop = (container === window) ? window.pageYOffset : this.el.scrollTop;\r
        let active = null;\r
\r
        for (const s of this._sections) {\r
          const top = s.getBoundingClientRect().top + window.pageYOffset;\r
          if (scrollTop + this.offset >= top) active = s;\r
        }\r
        if (active?.id) this._activate(active.id);\r
      };\r
\r
      U.on(container, "scroll", this._onScroll, { passive: true });\r
      this._onScroll();\r
    }\r
\r
    static getOrCreate(el) {\r
      let inst = getI(el, "scrollspy");\r
      if (!inst) { inst = new ScrollSpy(el); setI(el, "scrollspy", inst); }\r
      return inst;\r
    }\r
  }\r
\r
  // -----------------------------\r
  // Table\r
  // -----------------------------\r
  class Table {\r
    constructor(el) {\r
      this.el = el;\r
      this._bindSort();\r
      this._bindResize();\r
      this._bindSelection();\r
      this._bindFilter();\r
    }\r
\r
    _bindFilter() {\r
      const filterBtns = U.qsa(".ux4g-table-filter-icon", this.el);\r
      filterBtns.forEach(btn => {\r
        U.on(btn, "click", (e) => {\r
          e.preventDefault();\r
          e.stopPropagation();\r
          const targetTh = U.closest(btn, "th");\r
          if (targetTh) {\r
            // Close other filters first if needed or just toggle this one\r
            targetTh.classList.toggle("ux4g-is-filtering");\r
            if (targetTh.classList.contains("ux4g-is-filtering")) {\r
              const input = U.qs(".ux4g-search-input", targetTh);\r
              if (input) input.focus();\r
            }\r
          }\r
        });\r
      });\r
\r
      const closeBtns = U.qsa(".ux4g-search-clear", this.el);\r
      closeBtns.forEach(btn => {\r
        U.on(btn, "click", (e) => {\r
          // Only close if it's within a table filter\r
          const th = U.closest(btn, "th.ux4g-is-filtering");\r
          if (th) {\r
            e.preventDefault();\r
            e.stopPropagation();\r
            th.classList.remove("ux4g-is-filtering");\r
            const input = U.qs(".ux4g-search-input", th);\r
            if (input) {\r
               input.value = '';\r
               const container = U.closest(input, '.ux4g-search-container');\r
               if (container) container.classList.remove('ux4g-has-value');\r
            }\r
          }\r
        });\r
      });\r
\r
      const inputs = U.qsa("th .ux4g-search-input", this.el);\r
      inputs.forEach(input => {\r
        U.on(input, "input", (e) => {\r
           const container = U.closest(input, '.ux4g-search-container');\r
           if (container) {\r
              if (input.value.length > 0) {\r
                 container.classList.add('ux4g-has-value');\r
              } else {\r
                 container.classList.remove('ux4g-has-value');\r
              }\r
           }\r
        });\r
      });\r
    }\r
\r
    _bindSort() {\r
      const sortableCols = U.qsa(".ux4g-table-sortable th[data-sort]", this.el);\r
      sortableCols.forEach(th => {\r
        if (!U.qs(".ux4g-table-sort-icon", th)) {\r
          const content = U.qs(".ux4g-table-th-content", th) || th;\r
          const icon = document.createElement("i");\r
          icon.className = "ux4g-icon ux4g-table-sort-icon";\r
          icon.innerHTML = "arrow_downward";\r
          content.appendChild(icon);\r
        }\r
\r
        U.on(th, "click", (e) => {\r
          // If the click happened on a filter button or something else interactive, ignore sort\r
          if (U.closest(e.target, ".ux4g-table-filter-icon") || U.closest(e.target, ".ux4g-search-input") || U.closest(e.target, ".ux4g-search-clear")) {\r
             return;\r
          }\r
\r
          const currentSort = U.attr(th, "data-sort", "none");\r
          // Cycle: none -> asc -> desc -> asc... (skip none once sorted to avoid double clicks)\r
          const nextSort = currentSort === "asc" ? "desc" : "asc";\r
          \r
          // Reset other columns in the same table\r
          sortableCols.forEach(otherTh => {\r
            if (otherTh !== th) otherTh.setAttribute("data-sort", "none");\r
          });\r
\r
          th.setAttribute("data-sort", nextSort);\r
          \r
          // Row sorting logic\r
          if (nextSort !== "none") {\r
             const tbody = U.qs("tbody", this.el);\r
             if (tbody) {\r
                const trs = Array.from(tbody.querySelectorAll("tr"));\r
                const thIndex = Array.from(th.parentNode.children).indexOf(th);\r
                \r
                trs.sort((a, b) => {\r
                   const aCol = a.children[thIndex];\r
                   const bCol = b.children[thIndex];\r
                   if (!aCol || !bCol) return 0;\r
                   \r
                   const aText = (aCol.textContent || aCol.innerText).trim();\r
                   const bText = (bCol.textContent || bCol.innerText).trim();\r
                   \r
                   const cleanV1 = aText.replace(/[₹$,\\s]/g, "");\r
                   const cleanV2 = bText.replace(/[₹$,\\s]/g, "");\r
                   const num1 = Number(cleanV1);\r
                   const num2 = Number(cleanV2);\r
                   \r
                   const isNum = !isNaN(num1) && !isNaN(num2) && cleanV1 !== "" && cleanV2 !== "";\r
                   \r
                   if (isNum) {\r
                      return nextSort === "asc" ? (num1 - num2) : (num2 - num1);\r
                   } else {\r
                      const comp = aText.localeCompare(bText, undefined, { numeric: true, sensitivity: 'base' });\r
                      return nextSort === "asc" ? comp : -comp;\r
                   }\r
                });\r
                \r
                trs.forEach(tr => tbody.appendChild(tr));\r
             }\r
          }\r
\r
          U.dispatch(this.el, "ux4g.table.sort", { column: th, direction: nextSort });\r
        });\r
      });\r
    }\r
\r
    _bindResize() {\r
      // Check if this table instance has resize enabled\r
      if (!this.el.classList.contains("ux4g-table-resizable")) return;\r
      const resizableCols = U.qsa("th", this.el);\r
\r
      resizableCols.forEach(th => {\r
        // Skip last child to avoid out-of-bounds drag or provide a cleaner UX edge\r
        if (th === th.parentNode.lastElementChild) return;\r
\r
        const handle = document.createElement("div");\r
        handle.className = "ux4g-table-resize-handle";\r
        th.appendChild(handle);\r
\r
        let startX, startWidth;\r
        const onMouseMove = (e) => {\r
          const newWidth = Math.max(40, startWidth + (e.clientX - startX));\r
          th.style.width = \`\${newWidth}px\`;\r
          th.style.minWidth = \`\${newWidth}px\`;\r
        };\r
\r
        const onMouseUp = () => {\r
          handle.classList.remove("is-resizing");\r
          handle.classList.remove("ux4g-is-resizing");\r
          U.off(document, "mousemove", onMouseMove);\r
          U.off(document, "mouseup", onMouseUp);\r
          U.dispatch(this.el, "ux4g.table.resize", { column: th, width: th.offsetWidth });\r
        };\r
\r
        U.on(handle, "mousedown", (e) => {\r
          e.preventDefault();\r
          e.stopPropagation();\r
          startX = e.clientX;\r
          startWidth = th.offsetWidth || th.getBoundingClientRect().width;\r
          handle.classList.add("ux4g-is-resizing");\r
          U.on(document, "mousemove", onMouseMove);\r
          U.on(document, "mouseup", onMouseUp);\r
        });\r
      });\r
    }\r
\r
    _bindSelection() {\r
      // Find a select-all checkbox in the head\r
      const selectAll = U.qs("thead .ux4g-checkbox", this.el);\r
      if (!selectAll) return;\r
\r
      const rowCheckboxes = U.qsa("tbody .ux4g-checkbox", this.el);\r
      if (!rowCheckboxes.length) return;\r
      \r
      const updateState = () => {\r
        let checkedCount = 0;\r
        rowCheckboxes.forEach(cb => {\r
          const tr = U.closest(cb, "tr");\r
          if (cb.checked) {\r
            checkedCount++;\r
            if (tr) tr.classList.add("ux4g-is-selected");\r
          } else {\r
            if (tr) tr.classList.remove("ux4g-is-selected");\r
          }\r
        });\r
\r
        if (checkedCount === 0) {\r
          selectAll.checked = false;\r
          selectAll.indeterminate = false;\r
        } else if (checkedCount === rowCheckboxes.length) {\r
          selectAll.checked = true;\r
          selectAll.indeterminate = false;\r
        } else {\r
          selectAll.checked = false;\r
          selectAll.indeterminate = true;\r
        }\r
      };\r
\r
      // Listen to select-all\r
      U.on(selectAll, "change", (e) => {\r
        const isChecked = e.target.checked;\r
        rowCheckboxes.forEach(cb => {\r
          cb.checked = isChecked;\r
        });\r
        updateState();\r
      });\r
\r
      // Listen to individual row checkboxes\r
      rowCheckboxes.forEach(cb => {\r
        U.on(cb, "change", updateState);\r
        \r
        // Also allow row click to toggle checkbox, skipping if clicking on interactable elements\r
        const tr = U.closest(cb, "tr");\r
        if (tr && tr.classList.contains("ux4g-table-interactive")) {\r
          U.on(tr, "click", (e) => {\r
            if (e.target.tagName !== "INPUT" && e.target.tagName !== "BUTTON" && !U.closest(e.target, "button") && !U.closest(e.target, "a")) {\r
               cb.checked = !cb.checked;\r
               updateState();\r
            }\r
          });\r
        }\r
      });\r
\r
      // Initialize state on load\r
      updateState();\r
    }\r
\r
    static getOrCreate(el) {\r
      let inst = getI(el, "table");\r
      if (!inst) { inst = new Table(el); setI(el, "table", inst); }\r
      return inst;\r
    }\r
  }\r
\r
  // -----------------------------\r
  // List\r
  // -----------------------------\r
  class List {\r
    constructor(el) {\r
      this.el = el;\r
      this._bind();\r
    }\r
\r
    _bind() {\r
      U.on(this.el, "click", (e) => {\r
        const item = U.closest(e.target, ".ux4g-list-item-row") || U.closest(e.target, ".ux4g-list-select-item");\r
        if (!item || item.disabled) return;\r
\r
        const checkbox = U.qs('input[type="checkbox"]', item);\r
        const radio = U.qs('input[type="radio"]', item);\r
        const switchInput = U.qs('.ux4g-switch-input', item);\r
\r
        if (radio && e.target !== radio && !U.closest(e.target, ".ux4g-radio-control")) {\r
          return;\r
        }\r
\r
        const isMulti = (this.el.id === "ux4g-multiselect-list") || \r
                        this.el.classList.contains("ux4g-multiselect") || \r
                        this.el.classList.contains("ux4g-list-multiselect") ||\r
                        (switchInput !== null);\r
\r
        // If clicking on a label (but NOT the input itself), let the native browser behavior trigger the input click\r
        if (e.target.tagName !== 'INPUT' && (e.target.tagName === 'LABEL' || U.closest(e.target, 'label'))) {\r
          return;\r
        }\r
\r
        // If clicking on input directly, don't double toggle\r
        if (e.target.tagName === 'INPUT') {\r
          const inputChecked = e.target.checked;\r
          \r
          if (!isMulti) {\r
            const allItems = U.qsa(".ux4g-list-item-row, .ux4g-list-select-item", this.el);\r
            allItems.forEach(i => {\r
              if (i !== item) i.classList.remove("active");\r
              // Also ensure other inputs are unchecked\r
              if (i !== item) {\r
                const otherInp = U.qs('input', i);\r
                if (otherInp) otherInp.checked = false;\r
              }\r
            });\r
            item.classList.toggle("active", inputChecked);\r
          } else {\r
            item.classList.toggle("active", inputChecked);\r
          }\r
          return;\r
        }\r
\r
        if (isMulti) {\r
          const isActive = item.classList.toggle("active");\r
          if (checkbox) {\r
            checkbox.checked = isActive;\r
            checkbox.dispatchEvent(new Event("change", { bubbles: true }));\r
          }\r
          if (switchInput) {\r
            switchInput.checked = isActive;\r
            switchInput.dispatchEvent(new Event("change", { bubbles: true }));\r
          }\r
        } else {\r
          // Single selection\r
          const wasActive = item.classList.contains("active");\r
          const allItems = U.qsa(".ux4g-list-item-row, .ux4g-list-select-item", this.el);\r
          \r
          // Clear all first\r
          allItems.forEach(i => {\r
            i.classList.remove("active");\r
            const cb = U.qs('input[type="checkbox"]', i);\r
            const rb = U.qs('input[type="radio"]', i);\r
            const sw = U.qs('.ux4g-switch-input', i);\r
            if (cb) cb.checked = false;\r
            if (rb) rb.checked = false;\r
            if (sw) sw.checked = false;\r
          });\r
\r
          // Toggle: only add if it wasn't already active\r
          if (!wasActive) {\r
            item.classList.add("active");\r
            if (checkbox) {\r
              checkbox.checked = true;\r
              checkbox.dispatchEvent(new Event("change", { bubbles: true }));\r
            }\r
            if (radio) {\r
              radio.checked = true;\r
              radio.dispatchEvent(new Event("change", { bubbles: true }));\r
            }\r
            if (switchInput) {\r
              switchInput.checked = true;\r
              switchInput.dispatchEvent(new Event("change", { bubbles: true }));\r
            }\r
          }\r
        }\r
        \r
        U.dispatch(this.el, "ux4g.list.change", { item, active: item.classList.contains("active") });\r
      });\r
    }\r
\r
    static getOrCreate(el) {\r
      let inst = getI(el, "list");\r
      if (!inst) { inst = new List(el); setI(el, "list", inst); }\r
      return inst;\r
    }\r
  }\r
\r
  // -----------------------------\r
  // Upload\r
  // -----------------------------\r
  class Upload {\r
    constructor(el) {\r
      this.el = el;\r
      this.input = el.querySelector('[data-ux-upload-input], .ux4g-upload-input');\r
      this.dropzone = el.querySelector('.ux4g-upload-panel');\r
      this.fileList = el.querySelector('.ux4g-upload-file-list');\r
      this.errorMsg = el.querySelector('.ux4g-upload-error-msg');\r
      this.errorText = el.querySelector('.ux4g-upload-error-text');\r
      this.moreButton = el.querySelector('.ux4g-upload-more');\r
      this.heading = el.querySelector('.ux4g-upload-heading');\r
      this.defaultHeading = this.heading ? this.heading.textContent.trim() : '';\r
      this.files = [];\r
      this.retryItem = null;\r
      this.dragDepth = 0;\r
      this.stateClasses = [\r
        'ux4g-upload-state-default',\r
        'ux4g-upload-state-default-vle',\r
        'ux4g-upload-state-selecting',\r
        'ux4g-upload-state-scanning',\r
        'ux4g-upload-state-uploaded',\r
        'ux4g-upload-state-uploaded-vle',\r
        'ux4g-upload-state-error'\r
      ];\r
      this.maxSizeMB = U.num(U.data(el, 'max-size', 5), 5);\r
      this.accept = (U.attr(this.input, 'accept', '') || '')\r
        .split(',')\r
        .map(s => s.trim().toLowerCase())\r
        .filter(Boolean);\r
      this._bind();\r
      this._syncInitialState();\r
    }\r
\r
    _bind() {\r
      U.on(this.el, 'click', e => {\r
        if (U.closest(e.target, '[data-ux-upload-trigger]')) {\r
          this._openPicker(null);\r
          return;\r
        }\r
        if (U.closest(e.target, '.ux4g-upload-file-remove')) {\r
          const item = U.closest(e.target, '.ux4g-upload-file-item');\r
          this._removeFile(item);\r
          return;\r
        }\r
        if (U.closest(e.target, '.ux4g-upload-file-retry')) {\r
          const item = U.closest(e.target, '.ux4g-upload-file-item-error');\r
          this._openPicker(item);\r
          return;\r
        }\r
        if (U.closest(e.target, '.ux4g-upload-more')) {\r
          this._openPicker(null);\r
        }\r
      });\r
\r
      U.on(this.dropzone, 'keydown', e => {\r
        if (e.key === ' ' || e.key === 'Enter') {\r
          e.preventDefault();\r
          this._openPicker();\r
        }\r
      });\r
\r
      U.on(this.input, 'click', () => {\r
        this.input.setAttribute('data-clicked', 'true');\r
      });\r
\r
      U.on(this.input, 'change', e => {\r
        const retryItem = this.retryItem;\r
        this.retryItem = null;\r
        this._addFiles(Array.from(e.target.files || []), retryItem);\r
      });\r
\r
      U.on(this.dropzone, 'dragenter', e => {\r
        e.preventDefault();\r
        this.dragDepth += 1;\r
        this._setState('selecting');\r
      });\r
\r
      U.on(this.dropzone, 'dragover', e => {\r
        e.preventDefault();\r
        this._setState('selecting');\r
      });\r
\r
      U.on(this.dropzone, 'dragleave', e => {\r
        e.preventDefault();\r
        this.dragDepth = Math.max(0, this.dragDepth - 1);\r
        const nextTarget = e.relatedTarget;\r
        if (this.dragDepth === 0 || !nextTarget || !this.dropzone.contains(nextTarget)) {\r
          this._clearActive();\r
        }\r
      });\r
\r
      U.on(this.dropzone, 'drop', e => {\r
        e.preventDefault();\r
        this.dragDepth = 0;\r
        this._clearActive();\r
        this._addFiles(Array.from((e.dataTransfer && e.dataTransfer.files) || []));\r
      });\r
    }\r
\r
    _openPicker(retryItem = null) {\r
      if (!this.input) return;\r
      this.retryItem = retryItem;\r
      this.input.setAttribute('data-clicked', 'true');\r
      this.input.click();\r
    }\r
\r
    _setState(state) {\r
      this.el.classList.remove('ux4g-upload-state-selecting', 'ux4g-upload-state-error');\r
      if (state === 'selecting') this.el.classList.add('ux4g-upload-state-selecting');\r
      if (state === 'error') this.el.classList.add('ux4g-upload-state-error');\r
      this._syncDragHeading(state === 'selecting');\r
    }\r
\r
    _clearActive() {\r
      this.el.classList.remove('ux4g-upload-state-selecting');\r
      this._syncDragHeading(false);\r
    }\r
\r
    _syncDragHeading(isDragging) {\r
      if (!this.heading) return;\r
      this.heading.textContent = isDragging ? 'Drop file here' : this.defaultHeading;\r
    }\r
\r
    _showError(msg, file) {\r
      this.el.classList.remove('ux4g-upload-state-selecting');\r
      this.el.classList.add('ux4g-upload-state-error');\r
      this._clearErrorRows();\r
      this._renderErrorFile(file, msg);\r
      if (this.errorMsg) this.errorMsg.classList.add('ux4g-d-none');\r
    }\r
\r
    _clearError(clearRows = true) {\r
      this.el.classList.remove('ux4g-upload-state-error');\r
      if (this.errorMsg) this.errorMsg.classList.add('ux4g-d-none');\r
      if (this.errorText) this.errorText.textContent = '';\r
      if (clearRows) this._clearErrorRows();\r
    }\r
\r
    _clearErrorRows() {\r
      if (!this.fileList) return;\r
      this.fileList.querySelectorAll('.ux4g-upload-file-item-error[data-ux-upload-error-row="true"]').forEach(item => item.remove());\r
    }\r
\r
    _validate(file) {\r
      const parts = file.name.split('.');\r
      const ext = parts.length > 1 ? \`.\${parts.pop().toLowerCase()}\` : '';\r
      if (this.accept.length && !this.accept.includes(ext)) {\r
        return \`File type not allowed: \${ext || 'unknown'}\`;\r
      }\r
      if (file.size > this.maxSizeMB * 1024 * 1024) {\r
        return \`File too large. Max size: \${this.maxSizeMB} MB\`;\r
      }\r
      return null;\r
    }\r
\r
    _addFiles(incoming, retryItem = null) {\r
      let errorOccurred = false;\r
      let retryHandled = false;\r
\r
      incoming.forEach(file => {\r
        const retryTarget = !retryHandled && retryItem && retryItem.isConnected ? retryItem : null;\r
        const err = this._validate(file);\r
        if (err) {\r
          errorOccurred = true;\r
          if (retryTarget) {\r
            this.el.classList.add('ux4g-upload-state-error');\r
            this._renderErrorFile(file, err, retryTarget);\r
            retryHandled = true;\r
          } else {\r
            this._showError(err, file);\r
          }\r
          U.dispatch(this.el, 'ux4g.upload.error', { file, reason: err });\r
          return;\r
        }\r
\r
        this.files.push(file);\r
        this._renderFile(file, retryTarget);\r
        if (retryTarget) retryHandled = true;\r
        U.dispatch(this.el, 'ux4g.upload.added', { file });\r
      });\r
\r
      if (!errorOccurred) {\r
        const hasErrorRows = this.fileList && this.fileList.querySelector('.ux4g-upload-file-item-error');\r
        this._clearError(!retryHandled);\r
        if (hasErrorRows) this.el.classList.add('ux4g-upload-state-error');\r
      }\r
      this._syncHasFiles();\r
      this.input.value = '';\r
    }\r
\r
    _renderFile(file, replaceItem = null) {\r
      if (!this.fileList) return;\r
\r
      const sizeKB = file.size / 1024;\r
      const sizeLabel = sizeKB >= 1024\r
        ? \`\${(sizeKB / 1024).toFixed(1)} MB\`\r
        : \`\${Math.max(1, Math.round(sizeKB))} KB\`;\r
\r
      const li = document.createElement('li');\r
      li.className = 'ux4g-upload-file-item';\r
      li.setAttribute('role', 'listitem');\r
      li.dataset.fileName = file.name;\r
      li.innerHTML = \`\r
        <div class="ux4g-upload-file-row">\r
          <span class="ux4g-upload-file-leading" aria-hidden="true">\r
            <span class="ux4g-icon-outlined ux4g-upload-file-icon">token</span>\r
          </span>\r
          <span class="ux4g-upload-file-copy">\r
            <span class="ux4g-body-m-strong ux4g-upload-file-name">\${this._escape(file.name)}</span>\r
            <span class="ux4g-body-s-default ux4g-upload-file-description">\${sizeLabel}</span>\r
          </span>\r
          <span class="ux4g-upload-file-statusbox" aria-hidden="true">\r
            <span class="ux4g-icon-outlined ux4g-upload-file-status">done</span>\r
          </span>\r
          <button type="button" class="ux4g-upload-file-remove" aria-label="Remove \${this._escape(file.name)}">\r
            <span class="ux4g-icon-outlined" aria-hidden="true">close</span>\r
          </button>\r
        </div>\r
      \`;\r
      if (replaceItem && replaceItem.isConnected) {\r
        replaceItem.replaceWith(li);\r
      } else {\r
        this.fileList.appendChild(li);\r
      }\r
    }\r
\r
    _renderErrorFile(file, reason, replaceItem = null) {\r
      if (!this.fileList) return;\r
\r
      const label = file && file.name ? file.name : 'Document_name.pdf';\r
      const li = document.createElement('li');\r
      li.className = 'ux4g-upload-file-item ux4g-upload-file-item-error';\r
      li.setAttribute('role', 'listitem');\r
      li.dataset.uploadErrorRow = 'true';\r
      li.dataset.errorReason = reason || '';\r
      li.innerHTML = \`\r
        <div class="ux4g-upload-file-row">\r
          <span class="ux4g-upload-file-leading" aria-hidden="true">\r
            <span class="ux4g-icon-outlined ux4g-upload-file-icon">error_outline</span>\r
          </span>\r
          <span class="ux4g-upload-file-copy">\r
            <span class="ux4g-body-m-strong ux4g-upload-file-name">\${this._escape(label)}</span>\r
            <span class="ux4g-body-s-default ux4g-upload-file-description">\${this._escape(reason || 'Description')}</span>\r
          </span>\r
          <button type="button" class="ux4g-upload-file-retry" aria-label="Retry upload">\r
            <span class="ux4g-icon-outlined" aria-hidden="true">replay</span>\r
            <span class="ux4g-label-l-default">Retry</span>\r
          </button>\r
        </div>\r
      \`;\r
      if (replaceItem && replaceItem.isConnected) {\r
        replaceItem.replaceWith(li);\r
      } else {\r
        this.fileList.appendChild(li);\r
      }\r
    }\r
\r
    _removeFile(item) {\r
      const name = item && item.dataset.fileName;\r
      this.files = this.files.filter(f => f.name !== name);\r
      if (item) item.remove();\r
      this._syncHasFiles();\r
      U.dispatch(this.el, 'ux4g.upload.removed', { name });\r
    }\r
\r
    _syncHasFiles() {\r
      const hasSuccessfulRows = this.fileList && this.fileList.querySelector('.ux4g-upload-file-item:not(.ux4g-upload-file-item-error)');\r
      const hasErrorRows = this.fileList && this.fileList.querySelector('.ux4g-upload-file-item-error');\r
      const hasFiles = this.files.length > 0 || !!hasSuccessfulRows || !!hasErrorRows;\r
      if (this.fileList) this.fileList.classList.toggle('ux4g-d-none', !hasFiles);\r
      if (this.moreButton) this.moreButton.classList.toggle('ux4g-d-none', !(this.files.length > 0 || !!hasSuccessfulRows));\r
      this._deriveBaseState(hasFiles);\r
    }\r
\r
    _syncInitialState() {\r
      if (this.fileList) {\r
        this.files = Array.from(this.fileList.querySelectorAll('.ux4g-upload-file-item:not(.ux4g-upload-file-item-error)'))\r
          .map(item => ({ name: item.dataset.fileName || item.textContent.trim(), size: 0 }));\r
      }\r
      if (this.el.classList.contains('ux4g-upload-state-error')) {\r
        if (this.errorMsg) this.errorMsg.classList.remove('ux4g-d-none');\r
      } else {\r
        this._clearError();\r
      }\r
      this._syncHasFiles();\r
    }\r
\r
    _deriveBaseState(hasFiles) {\r
      const variant = U.data(this.el, 'variant', 'default');\r
      this.stateClasses.forEach(cls => {\r
        if (cls !== 'ux4g-upload-state-selecting' && cls !== 'ux4g-upload-state-error') {\r
          this.el.classList.remove(cls);\r
        }\r
      });\r
\r
      if (this.el.classList.contains('ux4g-upload-state-error')) return;\r
      if (variant === 'scanning') {\r
        this.el.classList.add('ux4g-upload-state-scanning');\r
        return;\r
      }\r
      if (variant === 'default-vle') {\r
        this.el.classList.add(hasFiles ? 'ux4g-upload-state-uploaded-vle' : 'ux4g-upload-state-default-vle');\r
        return;\r
      }\r
      this.el.classList.add(hasFiles ? 'ux4g-upload-state-uploaded' : 'ux4g-upload-state-default');\r
    }\r
\r
    _escape(str) {\r
      return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));\r
    }\r
\r
    static getOrCreate(el) {\r
      let inst = getI(el, 'upload');\r
      if (!inst) { inst = new Upload(el); setI(el, 'upload', inst); }\r
      return inst;\r
    }\r
  }\r
\r
  // -----------------------------\r
  // OTP\r
  // -----------------------------\r
  class OtpInput {\r
    constructor(el) {\r
      this.el = el;\r
      this.group = U.qs('.ux4g-otp-group', el);\r
      this.sourceInput = U.qs('.ux4g-otp-source', el);\r
      this.resend = U.qs('[data-ux-otp-resend]', el);\r
      this.status = U.qs('[data-ux-otp-status]', el);\r
      this.helper = U.qs('[data-ux-otp-helper]', el);\r
      this.timerTargets = U.qsa('[data-ux-otp-timer]', el);\r
      this.state = U.data(el, 'state', 'default');\r
      this.count = Math.max(1, U.num(U.data(el, 'count', 0), 0) || 1);\r
      this.placeholder = this.sourceInput?.getAttribute('placeholder') || '-';\r
      this.demoErrorOnComplete = U.bool(U.data(el, 'demo-error-on-complete', 'false'), false);\r
      this.noSeparator = U.bool(U.data(el, 'no-separator', 'false'), false);\r
      this._timerId = null;\r
      this._shakeTimer = null;\r
      this._completedByUser = false;\r
      this._observer = null;\r
      this._demoErrorTimer = null;\r
\r
      this._renderInputs();\r
      this.inputs = U.qsa('.ux4g-otp-input', el);\r
      this.length = this.count;\r
      this._syncInputs();\r
      this._observeErrorState();\r
      this._bind();\r
      this._applyVisualFocus();\r
      this._startTimers();\r
    }\r
\r
    _renderInputs() {\r
      if (!this.group) return;\r
\r
      const digits = this._getDigits();\r
      this.group.replaceChildren();\r
      if (this.sourceInput) this.group.append(this.sourceInput);\r
\r
      for (let index = 0; index < this.count; index += 1) {\r
        const slot = document.createElement('div');\r
        slot.className = 'ux4g-input ux4g-otp-slot';\r
\r
        const input = document.createElement('input');\r
        input.className = 'ux4g-input-input ux4g-otp-input ux4g-body-m-default';\r
        input.type = 'text';\r
        input.setAttribute('aria-label', \`Digit \${index + 1}\`);\r
\r
        if (digits[index]) {\r
          input.value = digits[index];\r
        } else {\r
          input.placeholder = this.placeholder;\r
        }\r
\r
        this._syncInputTone(input);\r
        slot.append(input);\r
        this.group.append(slot);\r
\r
        if (index < this.count - 1 && !this.noSeparator) {\r
          const separator = document.createElement('span');\r
          separator.className = 'ux4g-otp-separator ux4g-icon-outlined';\r
          separator.setAttribute('aria-hidden', 'true');\r
          separator.textContent = 'horizontal_rule';\r
          this.group.append(separator);\r
        }\r
      }\r
    }\r
\r
    _getDigits() {\r
      return ((this.sourceInput?.value || '').replace(/\\D/g, '').slice(0, this.count)).split('');\r
    }\r
\r
    _bind() {\r
      this.inputs.forEach((input, index) => {\r
        U.on(input, 'focus', () => this._setFocused(index));\r
        U.on(input, 'click', () => this._setFocused(index));\r
        U.on(input, 'input', e => this._onInput(e, index));\r
        U.on(input, 'keydown', e => this._onKeydown(e, index));\r
      });\r
    }\r
\r
    _isInteractive() {\r
      return this.state === 'default' || this.state === 'partial-filled' || this.state === 'all-filled';\r
    }\r
\r
    _syncInputs() {\r
      this.inputs.forEach((input, index) => {\r
        input.setAttribute('inputmode', 'numeric');\r
        input.setAttribute('pattern', '[0-9]*');\r
        input.setAttribute('autocomplete', index === 0 ? 'one-time-code' : 'off');\r
        input.setAttribute('maxlength', '1');\r
        input.placeholder = input.value ? '' : this.placeholder;\r
        this._syncInputTone(input);\r
\r
        if (!this._isInteractive()) {\r
          input.setAttribute('readonly', 'readonly');\r
          input.setAttribute('tabindex', '-1');\r
        }\r
\r
        if (this.state === 'locked-out') {\r
          input.setAttribute('disabled', 'disabled');\r
        }\r
      });\r
    }\r
\r
    _syncInputTone(input) {\r
      input.classList.toggle('ux4g-title-m-strong', !!input.value);\r
      input.classList.toggle('ux4g-body-m-default', !input.value);\r
    }\r
\r
    _setFocused(index) {\r
      this.inputs.forEach((input, inputIndex) => {\r
        input.closest('.ux4g-otp-slot')?.classList.toggle('ux4g-otp-focus', inputIndex === index);\r
        input.classList.toggle('ux4g-otp-caret', inputIndex === index && !input.value);\r
        input.placeholder = input.value ? '' : (inputIndex === index ? '' : this.placeholder);\r
      });\r
    }\r
\r
    _syncFocusClass() {\r
      const active = this.inputs.findIndex(input => input === document.activeElement);\r
      if (active >= 0) this._setFocused(active);\r
    }\r
\r
    _clearFocused() {\r
      this.inputs.forEach(input => {\r
        input.closest('.ux4g-otp-slot')?.classList.remove('ux4g-otp-focus');\r
        input.classList.remove('ux4g-otp-caret');\r
        input.placeholder = input.value ? '' : this.placeholder;\r
      });\r
    }\r
\r
    _applyVisualFocus() {\r
      if (this.state === 'default') {\r
        this._setFocused(0);\r
        return;\r
      }\r
\r
      if (this.state === 'partial-filled') {\r
        const emptyIndex = this.inputs.findIndex(input => !input.value);\r
        this._setFocused(emptyIndex >= 0 ? emptyIndex : this.inputs.length - 1);\r
        return;\r
      }\r
\r
      if (this.state === 'all-filled') {\r
        this._setFocused(this.inputs.length - 1);\r
        return;\r
      }\r
\r
      this._syncFocusClass();\r
    }\r
\r
    _onInput(e, index) {\r
      const input = e.target;\r
      const value = (input.value || '').replace(/\\D/g, '').slice(-1);\r
      input.value = value;\r
      input.placeholder = value ? '' : this.placeholder;\r
      this._syncInputTone(input);\r
      this._clearDemoErrorState();\r
\r
      this._syncSourceValue();\r
\r
      if (!value) return;\r
\r
      if (index < this.inputs.length - 1) {\r
        this.inputs[index + 1].focus();\r
      }\r
\r
      this._updateStateFromValue();\r
    }\r
\r
    _onKeydown(e, index) {\r
      const input = e.target;\r
\r
      if (e.key === 'Backspace') {\r
        if (input.value) {\r
          input.value = '';\r
          input.placeholder = this.placeholder;\r
          this._syncInputTone(input);\r
          this._clearDemoErrorState();\r
          this._syncSourceValue();\r
          this._completedByUser = false;\r
          this._updateStateFromValue();\r
          return;\r
        }\r
\r
        if (index > 0) {\r
          const prev = this.inputs[index - 1];\r
          prev.value = '';\r
          prev.placeholder = this.placeholder;\r
          this._syncInputTone(prev);\r
          prev.focus();\r
          this._clearDemoErrorState();\r
          this._syncSourceValue();\r
          this._completedByUser = false;\r
          this._updateStateFromValue();\r
        }\r
        return;\r
      }\r
\r
      if (e.key === 'ArrowLeft' && index > 0) {\r
        e.preventDefault();\r
        this.inputs[index - 1].focus();\r
        return;\r
      }\r
\r
      if (e.key === 'ArrowRight' && index < this.inputs.length - 1) {\r
        e.preventDefault();\r
        this.inputs[index + 1].focus();\r
      }\r
    }\r
\r
    _syncSourceValue() {\r
      if (!this.sourceInput) return;\r
      this.sourceInput.value = this.inputs.map(input => input.value).join('');\r
    }\r
\r
    _updateStateFromValue() {\r
      if (!this._isInteractive()) return;\r
      const filled = this.inputs.filter(input => input.value).length;\r
      this._completedByUser = filled === this.length;\r
      const next = filled === 0 ? 'default' : (filled === this.length ? 'all-filled' : 'partial-filled');\r
      this.el.setAttribute('data-ux-state', next);\r
      if (this.demoErrorOnComplete && this._completedByUser) {\r
        this._scheduleDemoErrorState();\r
      }\r
    }\r
\r
    _isErrorState() {\r
      return this.el.classList.contains('ux4g-otp-error') || U.data(this.el, 'state', '') === 'error';\r
    }\r
\r
    _triggerShakeIfError() {\r
      if (!this.group) return;\r
      if (!this._completedByUser || this.inputs.some(input => !input.value) || !this._isErrorState()) return;\r
\r
      this.group.classList.remove('ux4g-otp-shake');\r
      void this.group.offsetWidth;\r
      this.group.classList.add('ux4g-otp-shake');\r
\r
      if (this._shakeTimer) global.clearTimeout(this._shakeTimer);\r
      this._shakeTimer = global.setTimeout(() => {\r
        this.group?.classList.remove('ux4g-otp-shake');\r
        this._shakeTimer = null;\r
      }, 400);\r
    }\r
\r
    _observeErrorState() {\r
      this._observer = new MutationObserver(() => this._triggerShakeIfError());\r
      this._observer.observe(this.el, {\r
        attributes: true,\r
        attributeFilter: ['class', 'data-ux-state']\r
      });\r
    }\r
\r
    _scheduleDemoErrorState() {\r
      if (this._demoErrorTimer) global.clearTimeout(this._demoErrorTimer);\r
      this._demoErrorTimer = global.setTimeout(() => {\r
        if (!this._completedByUser || this.inputs.some(input => !input.value)) return;\r
        this._clearFocused();\r
        if (document.activeElement && this.inputs.includes(document.activeElement)) {\r
          document.activeElement.blur();\r
        }\r
        this.el.classList.add('ux4g-otp-error');\r
        this.el.setAttribute('data-ux-state', 'error');\r
        this.el.setAttribute('aria-invalid', 'true');\r
        if (this.helper) {\r
          this.helper.outerHTML = '<span class="ux4g-otp-status" data-ux-otp-status><span class="ux4g-icon-outlined" aria-hidden="true">error</span><span>Attempt 2 of 3</span></span>';\r
          this.helper = null;\r
          this.status = U.qs('[data-ux-otp-status]', this.el);\r
        }\r
      }, 300);\r
    }\r
\r
    _clearDemoErrorState() {\r
      if (!this.demoErrorOnComplete) return;\r
      if (this._demoErrorTimer) {\r
        global.clearTimeout(this._demoErrorTimer);\r
        this._demoErrorTimer = null;\r
      }\r
      this.el.classList.remove('ux4g-otp-error');\r
      this.el.setAttribute('data-ux-state', this.inputs.some(input => input.value) ? 'partial-filled' : 'default');\r
      this.el.removeAttribute('aria-invalid');\r
      if (!this.helper && this.status) {\r
        this.status.outerHTML = '<span class="ux4g-otp-helper" data-ux-otp-helper>Didn’t receive OTP?</span>';\r
        this.helper = U.qs('[data-ux-otp-helper]', this.el);\r
        this.status = null;\r
      }\r
    }\r
\r
    _formatTime(totalSeconds) {\r
      const safe = Math.max(0, totalSeconds);\r
      const minutes = Math.floor(safe / 60);\r
      const seconds = safe % 60;\r
      return \`\${String(minutes).padStart(2, '0')}:\${String(seconds).padStart(2, '0')}\`;\r
    }\r
\r
    _tickTimer(node) {\r
      const total = U.num(node.getAttribute('data-ux-otp-seconds'), 0);\r
      const prefix = node.getAttribute('data-ux-otp-prefix') || '';\r
      node.textContent = \`\${prefix}\${this._formatTime(total)}\`;\r
      if (total > 0) {\r
        node.setAttribute('data-ux-otp-seconds', String(total - 1));\r
      }\r
    }\r
\r
    _startTimers() {\r
      if (!this.timerTargets.length) return;\r
      this.timerTargets.forEach(node => this._tickTimer(node));\r
      this._timerId = global.setInterval(() => {\r
        this.timerTargets.forEach(node => this._tickTimer(node));\r
      }, 1000);\r
    }\r
\r
    static getOrCreate(el) {\r
      let inst = getI(el, 'otp');\r
      if (!inst) { inst = new OtpInput(el); setI(el, 'otp', inst); }\r
      return inst;\r
    }\r
  }\r
\r
  // -----------------------------\r
  // SLA Progress\r
  // -----------------------------\r
  class SlaProgress {\r
    constructor(el) {\r
      this.el = el;\r
      this.valueTargets = U.qsa('.ux4g-sla-linear-value', el);\r
      this.circleValue = U.qs('.ux4g-sla-circle-value', el);\r
      this.circleMeta = U.qs('.ux4g-sla-circle-meta', el);\r
      this.sync();\r
    }\r
\r
    sync() {\r
      const progress = Math.min(100, Math.max(0, U.num(U.data(this.el, 'progress', 0), 0)));\r
      this.el.style.setProperty('--ux4g-sla-progress', String(progress));\r
\r
      if (this.el.hasAttribute('data-ux-sla-linear')) {\r
        this.valueTargets.forEach(node => {\r
          node.textContent = \`\${Math.round(progress)}%\`;\r
        });\r
        this.el.setAttribute('aria-valuemin', '0');\r
        this.el.setAttribute('aria-valuemax', '100');\r
        this.el.setAttribute('aria-valuenow', String(Math.round(progress)));\r
      }\r
\r
      if (this.el.hasAttribute('data-ux-sla-circle')) {\r
        const days = U.data(this.el, 'days', null);\r
        if (days != null && this.circleValue) {\r
          this.circleValue.textContent = String(days);\r
        }\r
        if (this.circleMeta) {\r
          this.circleMeta.textContent = Number(days) === 1 ? 'day left' : 'days left';\r
        }\r
      }\r
    }\r
\r
    static getOrCreate(el) {\r
      let inst = getI(el, 'sla-progress');\r
      if (!inst) { inst = new SlaProgress(el); setI(el, 'sla-progress', inst); }\r
      return inst;\r
    }\r
  }\r
\r
  class ProgressIndicator {\r
    constructor(el) {\r
      this.el = el;\r
      this.ensureStructure();\r
      this.labelTargets = U.qsa('[data-ux-progress-label]', el);\r
      this.descTargets = U.qsa('[data-ux-progress-desc]', el);\r
      this.endpointStart = U.qs('[data-ux-progress-start]', el);\r
      this.endpointEnd = U.qs('[data-ux-progress-end]', el);\r
      this.halfTrackTail = U.qs('.ux4g-progress-half-track-tail', el);\r
      this.halfRoundedProgress = U.qs('[data-ux-progress-half-svg-progress]', el);\r
      this.halfRoundedTrack = U.qs('[data-ux-progress-half-svg-track]', el);\r
      this.halfSharpProgress = U.qs('[data-ux-progress-half-svg-progress-sharp]', el);\r
      this.halfSharpTrack = U.qs('[data-ux-progress-half-svg-track-sharp]', el);\r
      this.sync();\r
    }\r
\r
    ensureStructure() {\r
      if (!this.el.hasAttribute('data-ux-progress-half')) return;\r
      if (U.qs('.ux4g-progress-half-arc', this.el)) return;\r
\r
      const size = (this.el.getAttribute('data-ux-size') || 'm').toLowerCase();\r
      const shape = this.el.getAttribute('data-ux-shape') || 'sharp';\r
      const config = {\r
        s: { width: 80, height: 80, radius: 30, stroke: 10, roundedStroke: 8, labelClass: 'ux4g-label-l-strong', descriptionClass: 'ux4g-body-xs-default', endpoints: false },\r
        m: { width: 160, height: 160, radius: 70, stroke: 16, roundedStroke: 16, labelClass: 'ux4g-heading-m-strong', descriptionClass: 'ux4g-body-xs-default', endpoints: true },\r
        l: { width: 200, height: 200, radius: 90, stroke: 20, roundedStroke: 20, labelClass: 'ux4g-heading-m-strong', descriptionClass: 'ux4g-body-xs-default', endpoints: true },\r
        xl: { width: 240, height: 240, radius: 105, stroke: 24, roundedStroke: 24, labelClass: 'ux4g-heading-xl-strong', descriptionClass: 'ux4g-body-s-default', endpoints: true }\r
      }[size] || { width: 160, height: 160, radius: 70, stroke: 16, roundedStroke: 16, labelClass: 'ux4g-heading-m-strong', descriptionClass: 'ux4g-body-xs-default', endpoints: true };\r
\r
      if (!this.el.hasAttribute('data-ux-radius')) {\r
        this.el.setAttribute('data-ux-radius', String(config.radius));\r
      }\r
\r
      const description = this.el.getAttribute('data-ux-description') || 'Description';\r
      const start = this.el.getAttribute('data-ux-start-label') || '0%';\r
      const end = this.el.getAttribute('data-ux-end-label') || '100%';\r
\r
      const roundedArcMarkup = \`\r
        <svg class="ux4g-progress-half-svg" viewBox="0 0 \${config.width} \${config.height}" aria-hidden="true" focusable="false">\r
          <defs>\r
            <linearGradient id="ux4g-progress-half-gradient-\${size}" x1="0" y1="\${config.height / 2}" x2="\${config.width}" y2="\${config.height / 2}" gradientUnits="userSpaceOnUse">\r
              <stop offset="0%" stop-color="var(--ux4g-progress-fill-start)" />\r
              <stop offset="100%" stop-color="var(--ux4g-progress-fill-end)" />\r
            </linearGradient>\r
          </defs>\r
          <path class="ux4g-progress-half-svg-track" d="\${progressHalfRoundedArcPath(config.width, config.roundedStroke)}" data-ux-progress-half-svg-track></path>\r
          <path class="ux4g-progress-half-svg-progress" d="\${progressHalfRoundedArcPath(config.width, config.roundedStroke)}" pathLength="100" data-ux-progress-half-svg-progress></path>\r
        </svg>\`;\r
      const sharpArcMarkup = \`\r
        <svg class="ux4g-progress-half-svg ux4g-progress-half-svg-sharp" viewBox="0 0 \${config.width} \${config.height}" aria-hidden="true" focusable="false">\r
          <defs>\r
            <linearGradient id="ux4g-progress-half-gradient-sharp-\${size}" x1="0" y1="\${config.height / 2}" x2="\${config.width}" y2="\${config.height / 2}" gradientUnits="userSpaceOnUse">\r
              <stop offset="0%" stop-color="var(--ux4g-progress-fill-start)" />\r
              <stop offset="100%" stop-color="var(--ux4g-progress-fill-end)" />\r
            </linearGradient>\r
          </defs>\r
          <path class="ux4g-progress-half-svg-track ux4g-progress-half-svg-track-sharp" d="\${progressHalfRoundedArcPath(config.width, config.stroke)}" data-ux-progress-half-svg-track-sharp></path>\r
          <path class="ux4g-progress-half-svg-progress ux4g-progress-half-svg-progress-sharp" d="\${progressHalfRoundedArcPath(config.width, config.stroke)}" data-ux-progress-half-svg-progress-sharp></path>\r
        </svg>\`;\r
      const arcMarkup = shape === 'rounded' ? roundedArcMarkup : sharpArcMarkup;\r
\r
      this.el.innerHTML = \`<div class="ux4g-progress-half-arc" aria-hidden="true">\${arcMarkup}</div><div class="ux4g-progress-half-copy"><span class="\${config.labelClass}" data-ux-progress-label>50%</span><p class="ux4g-progress-half-description \${config.descriptionClass}" data-ux-progress-desc>\${description}</p></div>\${config.endpoints ? \`<div class="ux4g-progress-half-endpoints"><span class="ux4g-body-xs-default" data-ux-progress-start>\${start}</span><span class="ux4g-body-xs-default" data-ux-progress-end>\${end}</span></div>\` : ''}\`;\r
    }\r
\r
    sync() {\r
      const progress = Math.min(100, Math.max(0, U.num(U.data(this.el, 'progress', 0), 0)));\r
      this.el.style.setProperty('--ux4g-progress-value', String(progress));\r
\r
      this.labelTargets.forEach(node => {\r
        node.textContent = \`\${Math.round(progress)}%\`;\r
      });\r
\r
      if (this.el.hasAttribute('data-ux-progress-half')) {\r
        const radius = U.num(U.data(this.el, 'radius', 0), 0);\r
        this.el.style.setProperty('--ux4g-progress-half-angle', \`\${progress * 1.8}deg\`);\r
        if (this.halfRoundedProgress) {\r
          const size = this.halfRoundedProgress.ownerSVGElement.viewBox.baseVal.width;\r
          const stroke = U.num(getComputedStyle(this.el).getPropertyValue('--ux4g-progress-half-stroke').replace('px', ''), 0);\r
          this.halfRoundedProgress.setAttribute('d', progressHalfRoundedArcPath(size, stroke, 180, 180 + (progress * 1.8)));\r
          this.halfRoundedProgress.style.strokeDasharray = '';\r
          if (this.halfRoundedTrack) {\r
            if (progress >= 100) {\r
              this.halfRoundedTrack.setAttribute('d', '');\r
            } else {\r
              const trackStartAngle = progress <= 0 ? 180 : 180 + (progress * 1.8);\r
              this.halfRoundedTrack.setAttribute('d', progressHalfRoundedArcPath(size, stroke, trackStartAngle, 360));\r
            }\r
          }\r
          if (this.halfRoundedTrackCap) {\r
            this.halfRoundedTrackCap.style.display = progress < 100 ? 'block' : 'none';\r
          }\r
        }\r
        if (this.halfSharpProgress) {\r
          const size = this.halfSharpProgress.ownerSVGElement.viewBox.baseVal.width;\r
          const stroke = U.num(getComputedStyle(this.el).getPropertyValue('--ux4g-progress-half-stroke').replace('px', ''), 0);\r
          this.halfSharpProgress.setAttribute('d', progressHalfRoundedArcPath(size, stroke, 180, 180 + (progress * 1.8)));\r
          if (this.halfSharpTrack) {\r
            if (progress >= 100) {\r
              this.halfSharpTrack.setAttribute('d', '');\r
            } else {\r
              const trackStartAngle = progress <= 0 ? 180 : 180 + (progress * 1.8);\r
              this.halfSharpTrack.setAttribute('d', progressHalfRoundedArcPath(size, stroke, trackStartAngle, 360));\r
            }\r
          }\r
        }\r
        if (this.halfTrackTail) {\r
          this.halfTrackTail.hidden = true;\r
        }\r
      }\r
\r
      const description = this.el.getAttribute('data-ux-description');\r
      if (description) {\r
        this.descTargets.forEach(node => {\r
          node.textContent = description;\r
        });\r
      }\r
\r
      const start = this.el.getAttribute('data-ux-start-label');\r
      const end = this.el.getAttribute('data-ux-end-label');\r
      if (this.endpointStart && start != null) this.endpointStart.textContent = start;\r
      if (this.endpointEnd && end != null) this.endpointEnd.textContent = end;\r
\r
      this.el.setAttribute('aria-valuemin', '0');\r
      this.el.setAttribute('aria-valuemax', '100');\r
      this.el.setAttribute('aria-valuenow', String(Math.round(progress)));\r
    }\r
\r
    static getOrCreate(el) {\r
      let inst = getI(el, 'progress-indicator');\r
      if (!inst) { inst = new ProgressIndicator(el); setI(el, 'progress-indicator', inst); }\r
      return inst;\r
    }\r
  }\r
\r
  function progressCircleLabelClass(size, placement) {\r
    if (placement === 'outside') return 'ux4g-label-xl-strong';\r
    if (size === 'xs' || size === 's' || size === 'm') return 'ux4g-label-m-strong';\r
    if (size === 'l') return 'ux4g-label-l-strong';\r
    return 'ux4g-label-xl-strong';\r
  }\r
\r
  function progressCircleDescriptionClass(size, placement) {\r
    if (placement === 'outside') return 'ux4g-body-s-default';\r
    return (size === 'xl' || size === '2xl' || size === '3xl') ? 'ux4g-body-s-default' : 'ux4g-body-xs-default';\r
  }\r
\r
  function progressHalfLabelClass(size) {\r
    return size === 's' ? 'ux4g-label-l-strong' : 'ux4g-heading-m-strong';\r
  }\r
\r
  function progressHalfRoundedArcPath(size, stroke, startAngle = 180, endAngle = 360) {\r
    const radius = (size / 2) - (stroke / 2);\r
    const center = size / 2;\r
    const start = polarPoint(center, radius, startAngle);\r
    const end = polarPoint(center, radius, endAngle);\r
    const largeArcFlag = Math.abs(endAngle - startAngle) > 180 ? 1 : 0;\r
    return \`M \${start.x} \${start.y} A \${radius} \${radius} 0 \${largeArcFlag} 1 \${end.x} \${end.y}\`;\r
  }\r
\r
  function polarPoint(center, radius, angleDeg) {\r
    const angle = (angleDeg * Math.PI) / 180;\r
    return {\r
      x: center + (radius * Math.cos(angle)),\r
      y: center + (radius * Math.sin(angle))\r
    };\r
  }\r
\r
  function buildProgressBarDemo(shape, placement, progress) {\r
    const inside = placement === 'inside';\r
    return \`<article class="ux4g-progress-bar" data-ux-progress-bar data-ux-shape="\${shape}" data-ux-label-placement="\${placement}" data-ux-progress="\${progress}" role="progressbar" aria-label="\${shape} \${placement} bar \${progress} percent"><div class="ux4g-progress-bar-track"><div class="ux4g-progress-bar-fill">\${inside ? \`<span class="ux4g-progress-bar-label ux4g-progress-bar-label-inside ux4g-label-s-strong" data-ux-progress-label>\${progress}%</span>\` : ''}</div></div>\${inside ? '' : \`<span class="ux4g-progress-bar-label ux4g-progress-bar-label-outside ux4g-label-s-strong" data-ux-progress-label>\${progress}%</span>\`}</article>\`;\r
  }\r
\r
  function buildProgressCircleDemo(shape, size, placement) {\r
    const labelClass = progressCircleLabelClass(size, placement);\r
    const showInsideDescription = placement === 'inside' && (size === 'xl' || size === '2xl' || size === '3xl');\r
    const descClass = progressCircleDescriptionClass(size, placement);\r
    return \`<div class="ux4g-progress-size-demo"><article class="ux4g-progress-circle" data-ux-progress-circle data-ux-shape="\${shape}" data-ux-size="\${size}" data-ux-label-placement="\${placement}" data-ux-progress="50" \${(placement === 'outside' || showInsideDescription) ? 'data-ux-description="Description"' : ''} role="progressbar" aria-label="\${size} \${shape} circle \${placement} 50 percent"><div class="ux4g-progress-circle-indicator"><span class="ux4g-progress-circle-ring"></span>\${placement === 'inside' ? \`<div class="ux4g-progress-circle-value-wrap"><span class="\${labelClass}" data-ux-progress-label>50%</span>\${showInsideDescription ? \`<p class="ux4g-progress-circle-description \${descClass}" data-ux-progress-desc>Description</p>\` : ''}</div>\` : ''}</div>\${placement === 'outside' ? \`<div class="ux4g-progress-circle-copy"><span class="\${labelClass}" data-ux-progress-label>50%</span><p class="ux4g-progress-circle-description \${descClass}" data-ux-progress-desc>Description</p></div>\` : ''}</article></div>\`;\r
  }\r
\r
  function renderProgressIndicatorDemos(root = document) {\r
    const steps = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];\r
    const barContainers = [\r
      ['sharp-outside', 'sharp', 'outside'],\r
      ['rounded-outside', 'rounded', 'outside'],\r
      ['sharp-inside', 'sharp', 'inside'],\r
      ['rounded-inside', 'rounded', 'inside']\r
    ];\r
    barContainers.forEach(([key, shape, placement]) => {\r
      const container = root.querySelector(\`[data-ux-progress-demo-bars="\${key}"]\`);\r
      if (!container) return;\r
      container.innerHTML = steps.map(progress => buildProgressBarDemo(shape, placement, progress)).join('');\r
    });\r
\r
    const circleSizes = ['xs', 's', 'm', 'l', 'xl', '2xl', '3xl'];\r
    const circleHeadings = root.querySelector('[data-ux-progress-demo-circle-headings]');\r
    if (circleHeadings) circleHeadings.innerHTML = '';\r
    const circleRows = [\r
      ['sharp-inside', 'sharp', 'inside'],\r
      ['sharp-outside', 'sharp', 'outside'],\r
      ['rounded-inside', 'rounded', 'inside'],\r
      ['rounded-outside', 'rounded', 'outside']\r
    ];\r
    circleRows.forEach(([key, shape, placement]) => {\r
      const row = root.querySelector(\`[data-ux-progress-demo-circles="\${key}"]\`);\r
      if (!row) return;\r
      row.innerHTML = circleSizes.map(size => buildProgressCircleDemo(shape, size, placement)).join('');\r
    });\r
\r
  }\r
\r
  // -----------------------------\r
  // Data API init\r
  // -----------------------------\r
  function init(root = document) {\r
    renderProgressIndicatorDemos(root);\r
\r
    // Dropdown\r
    U.qsa('[data-bs-toggle="dropdown"],[data-ux-toggle="dropdown"]', root).forEach(Dropdown.getOrCreate);\r
\r
    // Collapse\r
    U.qsa('[data-bs-toggle="collapse"],[data-ux-toggle="collapse"],[ux4g-toggle="collapse"]', root).forEach(Collapse.getOrCreate);\r
\r
    // Tabs\r
    U.qsa('[data-bs-toggle="tab"],[data-ux-toggle="tab"]', root).forEach(Tab.getOrCreate);\r
\r
    // Tooltips / Popovers\r
    U.qsa('[data-bs-toggle="tooltip"],[data-ux-toggle="tooltip"]', root).forEach(el => Floating.getOrCreate(el, "tooltip"));\r
    U.qsa('[data-bs-toggle="popover"],[data-ux-toggle="popover"]', root).forEach(el => Floating.getOrCreate(el, "popover"));\r
\r
    // Toasts (wires dismiss; does not auto-show unless .show is already present)\r
    U.qsa(".toast", root).forEach(Toast.getOrCreate);\r
\r
    // Carousels\r
    U.qsa(".carousel", root).forEach(Carousel.getOrCreate);\r
\r
    // Scrollspy\r
    U.qsa('[data-bs-spy="scroll"],[data-ux-spy="scroll"]', root).forEach(ScrollSpy.getOrCreate);\r
\r
    // Table Interactions\r
    U.qsa(".ux4g-table", root).forEach(Table.getOrCreate);\r
\r
    // List Interactions\r
    U.qsa(".ux4g-list", root).forEach(List.getOrCreate);\r
\r
    // Upload\r
    U.qsa('[data-ux-upload]', root).forEach(Upload.getOrCreate);\r
\r
    // OTP\r
    U.qsa('[data-ux-otp]', root).forEach(OtpInput.getOrCreate);\r
\r
    // SLA Progress\r
    U.qsa('[data-ux-sla-circle],[data-ux-sla-linear]', root).forEach(SlaProgress.getOrCreate);\r
\r
    // Progress Indicators\r
    U.qsa('[data-ux-progress-bar],[data-ux-progress-circle],[data-ux-progress-half]', root).forEach(ProgressIndicator.getOrCreate);\r
\r
    // Validation: Ensure ux4g-multiselect-list ID is only used on .ux4g-list elements\r
    const multiselectIdEls = root.querySelectorAll('#ux4g-multiselect-list');\r
    multiselectIdEls.forEach(el => {\r
      if (!el.classList.contains('ux4g-list')) {\r
        console.warn(\`[UX4G Validation] The ID 'ux4g-multiselect-list' should only be used on elements with the 'ux4g-list' class. Found on:\`, el);\r
      }\r
    });\r
  }\r
\r
  // Delegated toggles for Offcanvas, Toast & other components\r
  U.on(document, "click", (e) => {\r
    const radio = U.closest(e.target, ".ux4g-radio");\r
    if (radio && !U.closest(e.target, ".ux4g-radio-input, .ux4g-radio-control")) {\r
      e.preventDefault();\r
      return;\r
    }\r
\r
    // UX4G offcanvas toggle\r
    const offBtn = U.closest(e.target, '[data-bs-toggle="offcanvas"],[data-ux-toggle="offcanvas"]');\r
    if (offBtn) {\r
      e.preventDefault();\r
      const sel = U.data(offBtn, "target") || U.attr(offBtn, "href");\r
      const el = sel && sel.startsWith("#") ? U.qs(sel) : null;\r
      if (el) Offcanvas.getOrCreate(el).toggle(offBtn);\r
      return;\r
    }\r
\r
    // Toast close class bridge (your HTML)\r
    const closeToast = U.closest(e.target, ".close-toast");\r
    if (closeToast) {\r
      e.preventDefault();\r
      const toastEl = U.closest(closeToast, ".toast");\r
      if (toastEl) Toast.getOrCreate(toastEl).hide();\r
      return;\r
    }\r
\r
  });\r
\r
  // Switch keyboard support (Enter to toggle)\r
  U.on(document, "keydown", (e) => {\r
    if (e.key === "Enter") {\r
      const input = U.closest(e.target, ".ux4g-switch-input");\r
      if (input && !input.disabled) {\r
        e.preventDefault();\r
        input.checked = !input.checked;\r
        input.dispatchEvent(new Event("change", { bubbles: true }));\r
      }\r
    }\r
  });\r
\r
  // Your demo: #liveToastBtn shows #liveToast\r
  U.on(document, "DOMContentLoaded", () => {\r
    const btn = U.qs("#liveToastBtn");\r
    if (btn) {\r
      U.on(btn, "click", () => {\r
        const toastEl = U.qs("#liveToast");\r
        if (toastEl) Toast.getOrCreate(toastEl).show();\r
      });\r
    }\r
  });\r
\r
  U.on(document, "ux4g.upload.error", (e) => {\r
    if (typeof global.showContextAlert === "function") {\r
      global.showContextAlert("top-right", "error", "Upload Failed", e.detail.reason);\r
    }\r
  });\r
\r
  // Auto-init\r
  if (document.readyState === "loading") {\r
    U.on(document, "DOMContentLoaded", () => init(document));\r
  } else {\r
    init(document);\r
  }\r
\r
  // ------------------------------------------------------------------\r
  // SPA Support: Auto-initialization\r
  // ------------------------------------------------------------------\r
  global.ux4gCustomInitList = global.ux4gCustomInitList || [];\r
\r
  const attachedGlobalListeners = new Set();\r
  \r
  // Safe wrapper for global event listeners to prevent double-binding\r
  const originalDocAddEventListener = document.addEventListener;\r
  const originalWinAddEventListener = window.addEventListener;\r
  \r
  function safeDocAddEventListener(type, listener, options) {\r
    if (type === 'DOMContentLoaded') {\r
      return originalDocAddEventListener.call(document, type, listener, options);\r
    }\r
    const key = 'doc:' + type + ':' + listener.toString().substring(0, 100);\r
    if (!attachedGlobalListeners.has(key)) {\r
      attachedGlobalListeners.add(key);\r
      originalDocAddEventListener.call(document, type, listener, options);\r
    }\r
  }\r
  \r
  function safeWinAddEventListener(type, listener, options) {\r
    const key = 'win:' + type + ':' + listener.toString().substring(0, 100);\r
    if (!attachedGlobalListeners.has(key)) {\r
      attachedGlobalListeners.add(key);\r
      originalWinAddEventListener.call(window, type, listener, options);\r
    }\r
  }\r
\r
  // Safe wrapper for querySelectorAll to prevent double-binding on elements\r
  const originalDocQSA = Document.prototype.querySelectorAll;\r
  const originalElementQSA = Element.prototype.querySelectorAll;\r
  \r
  function rewriteSelector(selector) {\r
      if (typeof selector === 'string' && !selector.includes('[data-ux4g-init]')) {\r
          return selector.split(',').map(s => s.trim() + ':not([data-ux4g-init])').join(', ');\r
      }\r
      return selector;\r
  }\r
  \r
  function tagNodes(nodes) {\r
      nodes.forEach(n => {\r
          if (n.setAttribute) n.setAttribute('data-ux4g-init', 'true');\r
      });\r
      return nodes;\r
  }\r
\r
  function safeDocQSA(selector) {\r
     const newSelector = rewriteSelector(selector);\r
     const nodes = originalDocQSA.call(this, newSelector);\r
     return selector !== newSelector ? tagNodes(nodes) : nodes;\r
  }\r
\r
  function safeElementQSA(selector) {\r
     const newSelector = rewriteSelector(selector);\r
     const nodes = originalElementQSA.call(this, newSelector);\r
     return selector !== newSelector ? tagNodes(nodes) : nodes;\r
  }\r
\r
  global.ux4gCustomInit = function() {\r
    // Mock the environment\r
    document.addEventListener = safeDocAddEventListener;\r
    window.addEventListener = safeWinAddEventListener;\r
    Document.prototype.querySelectorAll = safeDocQSA;\r
    Element.prototype.querySelectorAll = safeElementQSA;\r
    document.querySelectorAll = safeDocQSA;\r
\r
    // Run all registered initializers\r
    if (global.ux4gCustomInitList) {\r
      global.ux4gCustomInitList.forEach(fn => {\r
        try { fn(); } catch (e) {}\r
      });\r
    }\r
\r
    // Restore the environment (always runs, even if an init function throws)\r
    document.addEventListener = originalDocAddEventListener;\r
    window.addEventListener = originalWinAddEventListener;\r
    Document.prototype.querySelectorAll = originalDocQSA;\r
    Element.prototype.querySelectorAll = originalElementQSA;\r
    document.querySelectorAll = originalDocQSA;\r
  };\r
\r
  if (typeof MutationObserver !== "undefined") {\r
    const observer = new MutationObserver((mutations) => {\r
      cancelAnimationFrame(global._ux4gInitRaf);\r
      global._ux4gInitRaf = requestAnimationFrame(() => {\r
        for (let i = 0; i < mutations.length; i++) {\r
          for (let j = 0; j < mutations[i].addedNodes.length; j++) {\r
            const node = mutations[i].addedNodes[j];\r
            if (node.nodeType === 1) {\r
              init(node);\r
            }\r
          }\r
        }\r
        global.ux4gCustomInit();\r
      });\r
    });\r
    \r
    const startObserving = () => {\r
      if (document.body) {\r
        observer.observe(document.body, { childList: true, subtree: true });\r
      } else {\r
        setTimeout(startObserving, 50);\r
      }\r
    };\r
    startObserving();\r
  }\r
\r
  // Expose API\r
  global.ux4g = {\r
    version: "1.1.0",\r
    U,\r
    getI,\r
    setI,\r
    escapeHtml,\r
    init,\r
    Dropdown,\r
    Collapse,\r
    Offcanvas,\r
    Toast,\r
    Carousel,\r
    Popover: {\r
      getOrCreate(el) { return Floating.getOrCreate(el, "popover"); }\r
    },\r
    Tab,\r
    ScrollSpy,\r
    Table,\r
    List,\r
    Upload,\r
    OtpInput,\r
    Theme: {\r
      get() {\r
        return document.documentElement.getAttribute("data-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");\r
      },\r
      set(theme) {\r
        document.documentElement.setAttribute("data-theme", theme);\r
        window.dispatchEvent(new CustomEvent("ux4g.theme.changed", { detail: { theme } }));\r
      },\r
      toggle() {\r
        const next = this.get() === "dark" ? "light" : "dark";\r
        this.set(next);\r
      }\r
    }\r
  };\r
\r
  // Auto-init theme if not set\r
  U.on(document, "DOMContentLoaded", () => {\r
    if (!document.documentElement.hasAttribute("data-theme")) {\r
      const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";\r
      document.documentElement.setAttribute("data-theme", preferred);\r
    }\r
  });\r
\r
})(typeof window !== "undefined" ? window : this);\r
\r
`,document.head.appendChild(l);const p=document.createElement("script");p.setAttribute("data-ux4g-runtime","custom"),p.textContent=`/* ========================================================= tooltips js ========================================================= */\r
(function (ux4g) {\r
  if (!ux4g) return;\r
  const U = ux4g.U;\r
  const getI = ux4g.getI;\r
  const setI = ux4g.setI;\r
  const escapeHtml = ux4g.escapeHtml;\r
\r
  class Floating {\r
    constructor(el, kind) {\r
      this.el = el;\r
      this.kind = kind; // tooltip | popover\r
      this._open = false;\r
      this._floating = null;\r
\r
      this.placement = U.data(el, "placement", kind === "tooltip" ? "top" : "right");\r
      this.offset = U.num(U.data(el, "offset", 8), 8);\r
      this.trigger = U.data(el, "trigger", kind === "tooltip" ? "hover focus" : "click");\r
      this.html = U.bool(U.data(el, "html", "false"), false);\r
\r
      this._bind();\r
    }\r
\r
    _getContent() {\r
      const content = U.data(this.el, "content");\r
      if (content != null) return this.html ? String(content) : escapeHtml(content);\r
\r
      if (this.kind === "popover") {\r
        const title = U.data(this.el, "title") || this.el.getAttribute("title") || "";\r
        const body = this.el.getAttribute("data-content") || "";\r
        const t = this.html ? String(title) : escapeHtml(title);\r
        const b = this.html ? String(body) : escapeHtml(body);\r
        return \`<div class="ux4g-popover-header">\${t}</div><div class="ux4g-popover-body">\${b}</div>\`;\r
      }\r
\r
      const t = this.el.getAttribute("title") || "";\r
      return this.html ? String(t) : escapeHtml(t);\r
    }\r
\r
    _create() {\r
      if (this._floating) return;\r
      const div = document.createElement("div");\r
      div.className = this.kind === "tooltip" ? "ux4g-tooltip" : "ux4g-popover";\r
      div.setAttribute("role", this.kind === "tooltip" ? "tooltip" : "dialog");\r
      div.innerHTML = this._getContent() || "";\r
      document.body.appendChild(div);\r
      this._floating = div;\r
    }\r
\r
    show() {\r
      if (this._open) return;\r
      this._open = true;\r
\r
      // Prevent native tooltip doubling\r
      if (this.kind === "tooltip") {\r
        const t = this.el.getAttribute("title");\r
        if (t != null) {\r
          this.el.setAttribute("data-ux-original-title", t);\r
          this.el.removeAttribute("title");\r
        }\r
      }\r
\r
      this._create();\r
      this._floating.style.display = "block";\r
      this._floating.classList.add("show");\r
      const update = () => {\r
        if (!this._open) return;\r
        if (!this.el.isConnected) {\r
          this.hide();\r
          if (this._floating) {\r
            this._floating.remove();\r
            this._floating = null;\r
          }\r
          return;\r
        }\r
        U.placeFloating(this.el, this._floating, this.placement, this.offset);\r
        this._raf = requestAnimationFrame(update);\r
      };\r
      this._onWin = update;\r
      this._raf = requestAnimationFrame(update);\r
      U.on(window, "scroll", this._onWin, { passive: true });\r
      U.on(window, "resize", this._onWin);\r
\r
      U.dispatch(this.el, \`ux4g.\${this.kind}.shown\`, {});\r
    }\r
\r
    hide() {\r
      if (!this._open) return;\r
      this._open = false;\r
\r
      if (this._floating) {\r
        this._floating.classList.remove("show");\r
        this._floating.style.display = "none";\r
      }\r
\r
      if (this.kind === "tooltip") {\r
        const ot = this.el.getAttribute("data-ux-original-title");\r
        if (ot != null) {\r
          this.el.setAttribute("title", ot);\r
          this.el.removeAttribute("data-ux-original-title");\r
        }\r
      }\r
\r
      if (this._raf) {\r
        cancelAnimationFrame(this._raf);\r
        this._raf = null;\r
      }\r
\r
      if (this._onWin) {\r
        U.off(window, "scroll", this._onWin);\r
        U.off(window, "resize", this._onWin);\r
        this._onWin = null;\r
      }\r
\r
      U.dispatch(this.el, \`ux4g.\${this.kind}.hidden\`, {});\r
    }\r
\r
    toggle() { this._open ? this.hide() : this.show(); }\r
\r
    _bind() {\r
      const triggers = String(this.trigger).split(/\\s+/).filter(Boolean);\r
\r
      if (triggers.includes("hover")) {\r
        U.on(this.el, "mouseenter", () => this.show());\r
        U.on(this.el, "mouseleave", () => this.hide());\r
      }\r
      if (triggers.includes("focus")) {\r
        U.on(this.el, "focus", () => this.show());\r
        U.on(this.el, "blur", () => this.hide());\r
      }\r
      if (triggers.includes("click")) {\r
        U.on(this.el, "click", (e) => { e.preventDefault(); this.toggle(); });\r
\r
        U.on(document, "click", (e) => {\r
          if (!this._open) return;\r
          if (this.el.contains(e.target) || (this._floating && this._floating.contains(e.target))) return;\r
          this.hide();\r
        });\r
\r
        U.on(document, "keydown", (e) => {\r
          if (!this._open) return;\r
          if (e.key === "Escape") this.hide();\r
        });\r
      }\r
    }\r
\r
    static getOrCreate(el, kind) {\r
      const key = kind;\r
      let inst = getI(el, key);\r
      if (!inst) { inst = new Floating(el, kind); setI(el, key, inst); }\r
      return inst;\r
    }\r
  }\r
\r
  function repositionManualTooltip(tooltip) {\r
    if (!tooltip || tooltip.dataset.uxAdjusted === "true") return;\r
\r
    const wrapper = tooltip.closest('.ux4g-tooltip-wrapper');\r
    if (!wrapper) return;\r
\r
    // We need to know where it *will* be once it's fully hovered\r
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);\r
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);\r
\r
    const originalTransition = tooltip.style.transition;\r
    const originalDisplay = tooltip.style.display;\r
    const originalOpacity = tooltip.style.opacity;\r
\r
    // Temporarily disable transition and force show to measure target state\r
    tooltip.style.transition = 'none';\r
    tooltip.style.display = 'flex';\r
    tooltip.style.opacity = '0';\r
\r
    // Force reflow\r
    tooltip.offsetHeight;\r
\r
    let rect = tooltip.getBoundingClientRect();\r
    const wrapperRect = wrapper.getBoundingClientRect();\r
    const padding = 18;\r
\r
    // Save original class to restore on mouseout\r
    if (!tooltip.dataset.uxOriginalClass) {\r
      tooltip.dataset.uxOriginalClass = tooltip.className;\r
    }\r
\r
    let className = tooltip.className;\r
    let changed = false;\r
\r
    // Vertical flip\r
    if (className.includes('-top-') && rect.top < padding) {\r
      if (wrapperRect.bottom + rect.height + padding <= vh) {\r
        className = className.replace('-top-', '-bottom-');\r
        changed = true;\r
      }\r
    } else if (className.includes('-bottom-') && rect.bottom > vh - padding) {\r
      if (wrapperRect.top - rect.height - padding >= 0) {\r
        className = className.replace('-bottom-', '-top-');\r
        changed = true;\r
      }\r
    }\r
\r
    // Horizontal flip\r
    if (className.includes('-left-') && !className.includes('-top-left') && !className.includes('-bottom-left') && rect.left < padding) {\r
      if (wrapperRect.right + rect.width + padding <= vw) {\r
        className = className.replace('-left-', '-right-');\r
        changed = true;\r
      }\r
    } else if (className.includes('-right-') && !className.includes('-top-right') && !className.includes('-bottom-right') && rect.right > vw - padding) {\r
      if (wrapperRect.left - rect.width - padding >= 0) {\r
        className = className.replace('-right-', '-left-');\r
        changed = true;\r
      }\r
    }\r
\r
    if (changed) {\r
      tooltip.className = className;\r
      tooltip.dataset.uxAdjusted = "true";\r
      rect = tooltip.getBoundingClientRect(); // Re-measure after class change\r
    }\r
\r
    let shiftX = 0;\r
    let shiftY = 0;\r
\r
    // Horizontal adjustment for top/bottom tooltips if still out of bounds\r
    if (className.includes('-top-') || className.includes('-bottom-')) {\r
        if (rect.left < padding) {\r
          shiftX = padding - rect.left;\r
        } else if (rect.right > vw - padding) {\r
          shiftX = (vw - padding) - rect.right;\r
        }\r
    }\r
\r
    // Vertical adjustment for left/right tooltips if still out of bounds\r
    if (className.includes('-left-') || className.includes('-right-')) {\r
        if (!className.includes('-top-') && !className.includes('-bottom-')) {\r
            if (rect.top < padding) {\r
              shiftY = padding - rect.top;\r
            } else if (rect.bottom > vh - padding) {\r
              shiftY = (vh - padding) - rect.bottom;\r
            }\r
        }\r
    }\r
\r
    if (shiftX !== 0 || shiftY !== 0) {\r
      const computedStyle = window.getComputedStyle(tooltip);\r
      const currentTransform = computedStyle.transform === 'none' ? '' : computedStyle.transform;\r
      // Apply the fix\r
      tooltip.style.transform = \`\${currentTransform} translate(\${shiftX}px, \${shiftY}px)\`;\r
      tooltip.dataset.uxAdjusted = "true";\r
    }\r
\r
    // Restore state (but keep the transform)\r
    tooltip.style.display = originalDisplay;\r
    tooltip.style.opacity = originalOpacity;\r
    // Delay restoring transition slightly to avoid "flying" into place from old position\r
    setTimeout(() => {\r
      tooltip.style.transition = originalTransition;\r
    }, 50);\r
  }\r
\r
  // Initialize\r
  window.ux4gCustomInitList = window.ux4gCustomInitList || []; window.ux4gCustomInitList.push(() => {\r
    // Data API init\r
    U.qsa('[data-bs-toggle="tooltip"],[data-ux-toggle="tooltip"]').forEach(el => Floating.getOrCreate(el, "tooltip"));\r
\r
    // Auto-fix manual tooltips on hover\r
    document.body.addEventListener('mouseover', (e) => {\r
      const wrapper = e.target.closest('.ux4g-tooltip-wrapper');\r
      if (wrapper) {\r
        const tooltip = wrapper.querySelector('.ux4g-tooltip');\r
        if (tooltip) repositionManualTooltip(tooltip);\r
      }\r
    });\r
\r
    document.body.addEventListener('mouseout', (e) => {\r
      const wrapper = e.target.closest('.ux4g-tooltip-wrapper');\r
      if (wrapper && !wrapper.contains(e.relatedTarget)) {\r
        const tooltip = wrapper.querySelector('.ux4g-tooltip');\r
        if (tooltip) {\r
          tooltip.style.transform = '';\r
          if (tooltip.dataset.uxOriginalClass) {\r
            tooltip.className = tooltip.dataset.uxOriginalClass;\r
            delete tooltip.dataset.uxOriginalClass;\r
          }\r
          delete tooltip.dataset.uxAdjusted;\r
        }\r
      }\r
    });\r
  });\r
\r
  // Assign to global\r
  ux4g.Tooltip = { getOrCreate(el) { return Floating.getOrCreate(el, "tooltip"); } };\r
\r
  /**\r
   * Helper to ensure menus stay within viewport and break out of clipping bounds\r
   */\r
  ux4g.repositionMenu = function (container, menu) {\r
    if (!menu) return;\r
\r
    // Temporarily reset to absolute to calculate natural layout sizes\r
    menu.style.position = "absolute";\r
    menu.style.width = ""; \r
    menu.style.top = "";\r
    menu.style.bottom = "";\r
    menu.style.left = "";\r
    menu.style.right = "";\r
    menu.style.margin = "0";\r
\r
    // Measure natural absolute width BEFORE fixing position\r
    const absoluteWidth = menu.offsetWidth;\r
\r
    // Switch to fixed to break out of overflow boundaries\r
    menu.style.position = "fixed";\r
    menu.style.width = absoluteWidth + "px"; // lock width\r
\r
    const vh = window.innerHeight;\r
    const vw = window.innerWidth;\r
    const containerRect = container.getBoundingClientRect();\r
    \r
    let offsetStr = getComputedStyle(menu).getPropertyValue('--ux4g-dropdown-menu-offset-y') ||\r
        getComputedStyle(menu).getPropertyValue('--ux4g-combobox-menu-offset-y') || '6px';\r
    let offset = parseInt(offsetStr, 10) || 6;\r
\r
    let top = containerRect.bottom + offset;\r
    let left = containerRect.left;\r
\r
    menu.style.top = top + "px";\r
    menu.style.left = left + "px";\r
\r
    const menuRect = menu.getBoundingClientRect();\r
\r
    // Vertical Flip\r
    if (menuRect.bottom > vh && containerRect.top > menuRect.height) {\r
      menu.style.top = "auto";\r
      menu.style.bottom = (vh - containerRect.top + offset) + "px";\r
    } else {\r
      menu.style.top = top + "px";\r
      menu.style.bottom = "auto";\r
    }\r
\r
    // Horizontal Shift\r
    const updatedRect = menu.getBoundingClientRect();\r
    if (updatedRect.right > vw) {\r
      menu.style.left = "auto";\r
      menu.style.right = (vw - containerRect.right) + "px";\r
    } else {\r
      menu.style.left = left + "px";\r
      menu.style.right = "auto";\r
    }\r
  };\r
\r
  // Update open menus on resize/scroll\r
  const repositionAllMenus = () => {\r
    document.querySelectorAll('.ux4g-dropdown.is-open, .ux4g-combobox.is-open, .ux4g-breadcrumb-dropdown .show + .show').forEach(el => {\r
      let container = el;\r
      let menu = el.querySelector('.ux4g-dropdown-menu, .ux4g-combobox-menu, .ux4g-breadcrumb-menu');\r
      if (el.classList.contains('ux4g-breadcrumb-toggle')) {\r
        container = el.parentElement;\r
        menu = container.querySelector('.ux4g-breadcrumb-menu');\r
      }\r
      if (container && menu) ux4g.repositionMenu(container, menu);\r
    });\r
  };\r
\r
  window.addEventListener('resize', repositionAllMenus);\r
  window.addEventListener('scroll', repositionAllMenus, true); // true for capture phase to catch all scrolls\r
\r
  /**\r
   * Common Filter Core Logic\r
   */\r
  ux4g.filterCore = {\r
    /**\r
     * @param {string} text - The item text to check\r
     * @param {string} query - The search query\r
     * @param {string} mode - 'contains', 'starts-with', or 'starts-with-term'\r
     */\r
    matches: function (text, query, mode) {\r
      if (!query) return true;\r
      const t = String(text).toLowerCase();\r
      const q = String(query).toLowerCase().trim();\r
\r
      switch (mode) {\r
        case "starts-with":\r
          return t.startsWith(q);\r
        case "starts-with-term": {\r
          // Split query into terms; ALL terms must match the start of some word in the text\r
          const qTerms = q.split(/\\s+/).filter(Boolean);\r
          if (qTerms.length === 0) return true;\r
          const tWords = t.split(/\\s+/);\r
          return qTerms.every((qTerm) => tWords.some((w) => w.startsWith(qTerm)));\r
        }\r
        case "contains":\r
        default:\r
          return t.includes(q);\r
      }\r
    },\r
\r
    /**\r
     * @param {string} originalText - The text to highlight\r
     * @param {string} query - The search query\r
     * @param {string} mode - 'contains', 'starts-with', or 'starts-with-term'\r
     */\r
    highlight: function (originalText, query, mode) {\r
      if (!query) return originalText;\r
      const q = query.trim();\r
      const escaped = q.replace(/[.*+?^\${}()|[\\]\\\\]/g, "\\\\$&");\r
\r
      let regex;\r
      switch (mode) {\r
        case "starts-with":\r
          regex = new RegExp(\`^(\${escaped})\`, "i");\r
          break;\r
        case "starts-with-term": {\r
          // Highlight each query term individually at word boundaries\r
          const qTerms = q.split(/\\s+/).filter(Boolean);\r
          if (qTerms.length === 0) return originalText;\r
          const escapedTerms = qTerms.map((t) => t.replace(/[.*+?^\${}()|[\\]\\\\]/g, "\\\\$&"));\r
          return originalText.replace(new RegExp(\`\\\\b(\${escapedTerms.join("|")})\`, "gi"), "<strong>$1</strong>");\r
        }\r
        case "contains":\r
        default:\r
          regex = new RegExp(\`(\${escaped})\`, "i");\r
          break;\r
      }\r
\r
      return originalText.replace(regex, "<strong>$1</strong>");\r
    }\r
  };\r
\r
})(window.ux4g);\r
\r
/* ========================================================= breadcrumb js ========================================================= */\r
window.ux4gCustomInitList = window.ux4gCustomInitList || []; window.ux4gCustomInitList.push(() => {\r
  const dropdowns = document.querySelectorAll(".ux4g-breadcrumb-dropdown");\r
  if (!dropdowns.length) return;\r
\r
  const closeDropdown = (dropdown) => {\r
    const toggle = dropdown.querySelector(".ux4g-breadcrumb-toggle");\r
    const menu = dropdown.querySelector(".ux4g-breadcrumb-menu");\r
\r
    if (!toggle || !menu) return;\r
\r
    toggle.classList.remove("show");\r
    menu.classList.remove("show");\r
    toggle.setAttribute("aria-expanded", "false");\r
  };\r
\r
  const openDropdown = (dropdown) => {\r
    const toggle = dropdown.querySelector(".ux4g-breadcrumb-toggle");\r
    const menu = dropdown.querySelector(".ux4g-breadcrumb-menu");\r
\r
    if (!toggle || !menu) return;\r
\r
    toggle.classList.add("show");\r
    menu.classList.add("show");\r
    toggle.setAttribute("aria-expanded", "true");\r
    if (window.ux4g && window.ux4g.repositionMenu) {\r
      window.ux4g.repositionMenu(dropdown, menu);\r
    }\r
  };\r
\r
  dropdowns.forEach((dropdown) => {\r
    const toggle = dropdown.querySelector(".ux4g-breadcrumb-toggle");\r
    const menu = dropdown.querySelector(".ux4g-breadcrumb-menu");\r
\r
    if (!toggle || !menu) return;\r
\r
    toggle.addEventListener("click", (e) => {\r
      e.preventDefault();\r
      e.stopPropagation();\r
\r
      const isOpen = menu.classList.contains("show");\r
\r
      dropdowns.forEach((d) => closeDropdown(d));\r
\r
      if (!isOpen) openDropdown(dropdown);\r
    });\r
\r
    menu.addEventListener("click", () => closeDropdown(dropdown));\r
  });\r
\r
  document.addEventListener("click", () => {\r
    dropdowns.forEach((d) => closeDropdown(d));\r
  });\r
\r
  document.addEventListener("keydown", (e) => {\r
    if (e.key === "Escape") dropdowns.forEach((d) => closeDropdown(d));\r
  });\r
});\r
\r
\r
\r
/* ========================================================= list js ========================================================= */\r
\r
// Draggable js\r
\r
window.ux4gCustomInitList = window.ux4gCustomInitList || []; window.ux4gCustomInitList.push(() => {\r
\r
  const list = document.querySelector(".ux4g-list-draggable");\r
  let draggedItem = null;\r
\r
  // enable drag only from icon\r
  document.querySelectorAll(".ux4g-icon-outlined, .ux4g-icon").forEach(icon => {\r
\r
    icon.addEventListener("dragstart", (e) => {\r
      draggedItem = icon.closest(".ux4g-list-item");\r
      draggedItem.classList.add("dragging");\r
\r
      e.dataTransfer.effectAllowed = "move";\r
    });\r
\r
  });\r
\r
  document.querySelectorAll(".ux4g-list-item").forEach(item => {\r
\r
    item.addEventListener("dragover", (e) => {\r
      e.preventDefault();\r
      const dragging = document.querySelector(".dragging");\r
\r
      if (dragging === item) return;\r
\r
      const rect = item.getBoundingClientRect();\r
      const offset = e.clientY - rect.top;\r
\r
      if (offset > rect.height / 2) {\r
        item.after(dragging);\r
      } else {\r
        item.before(dragging);\r
      }\r
    });\r
\r
    item.addEventListener("dragend", () => {\r
      draggedItem.classList.remove("dragging");\r
      draggedItem = null;\r
    });\r
\r
  });\r
\r
});\r
\r
/* ========================================================= Modal js ========================================================= */\r
\r
// Single delegated click handler — works with any framework, no re-init needed\r
document.addEventListener('click', (e) => {\r
  const openBtn = e.target.closest('[data-modal-target], [data-target], .open-modal-btn, .modal-backdrop-btn-trigger');\r
  if (openBtn) {\r
    let targetSelector = openBtn.getAttribute('data-modal-target') || openBtn.dataset.target;\r
    if (targetSelector && targetSelector.indexOf('#') !== 0 && targetSelector.indexOf('.') !== 0) {\r
      targetSelector = '#' + targetSelector;\r
    }\r
    const targetModal = targetSelector ? document.querySelector(targetSelector) : null;\r
    if (targetModal) {\r
      targetModal.classList.add('is-open');\r
      document.body.style.overflow = 'hidden';\r
    }\r
    return;\r
  }\r
\r
  const closeBtn = e.target.closest('[data-close-modal], .close-modal-btn, .ux4g-modal-close, .ux4g-modal-close-two');\r
  if (closeBtn) {\r
    const modal = closeBtn.closest('.ux4g-modal-backdrop, .ux4g-modal');\r
    if (modal) {\r
      modal.classList.remove('is-open');\r
      document.body.style.overflow = '';\r
    }\r
    return;\r
  }\r
\r
  const openModal = e.target.closest('.ux4g-modal-backdrop.is-open, .ux4g-modal.is-open');\r
  if (openModal && !e.target.closest('.ux4g-modal-box')) {\r
    const modals = document.querySelectorAll('.ux4g-modal-backdrop.is-open, .ux4g-modal.is-open');\r
    modals.forEach(m => m.classList.remove('is-open'));\r
    document.body.style.overflow = '';\r
  }\r
});\r
\r
// Escape key to close all open modals — registered once, never duplicates\r
document.addEventListener('keydown', (e) => {\r
  if (e.key === 'Escape') {\r
    const openModals = document.querySelectorAll('.ux4g-modal-backdrop.is-open, .ux4g-modal.is-open');\r
    openModals.forEach(modal => modal.classList.remove('is-open'));\r
    document.body.style.overflow = '';\r
  }\r
});\r
\r
/* ========================================================= clear seach btn js ========================================================= */\r
\r
//     if (!input || !clearBtn) return;\r
\r
//     input.addEventListener("input", () => {\r
//       clearBtn.classList.toggle("ux4g-show-clear", input.value.trim() !== "");\r
//     });\r
\r
//     clearBtn.addEventListener("click", () => {\r
//       input.value = "";\r
//       clearBtn.classList.remove("ux4g-show-clear");\r
//       input.focus();\r
//     });\r
//   });\r
// });\r
\r
window.ux4gCustomInitList = window.ux4gCustomInitList || []; window.ux4gCustomInitList.push(() => {\r
  document.querySelectorAll(".ux4g-search-container").forEach((searchWrap) => {\r
    const input = searchWrap.querySelector(".ux4g-search-input");\r
    const clearBtn = searchWrap.querySelector(".ux4g-search-clear");\r
    const list = searchWrap.querySelector(".ux4g-search-list");\r
    const filterMode = searchWrap.getAttribute("ux4g-search-filter") || "contains";\r
\r
    if (!input) return;\r
\r
    const toggleSearchState = () => {\r
      searchWrap.classList.toggle("ux4g-has-value", input.value.trim() !== "");\r
      handleSearchFilter();\r
    };\r
\r
    const handleSearchFilter = () => {\r
      if (!list) return;\r
\r
      // Only show list if there's a value, the component is active (focused),\r
      // or it's forced by 'show-empty' class\r
      const isActive = searchWrap.classList.contains("ux4g-is-active");\r
      const hasValue = input.value.trim() !== "";\r
      const showEmpty = searchWrap.classList.contains("ux4g-search-show-empty");\r
\r
      if (isActive || hasValue || showEmpty) {\r
        list.style.display = "block";\r
      } else {\r
        list.style.display = "none";\r
      }\r
\r
      const value = input.value;\r
      const options = list.querySelectorAll(".ux4g-list-item");\r
      const isSearchable = input.id && input.id.trim() !== "";\r
      let visibleCount = 0;\r
\r
      options.forEach(option => {\r
        // Store original text\r
        const labelNode = option.querySelector(".ux4g-list-item-start");\r
        if (labelNode) {\r
          labelNode.style.gap = "0"; // Remove gap that causes space between highlight and text\r
        }\r
        const originalText = option.dataset.originalText || (labelNode ? labelNode.textContent.trim() : option.textContent.trim());\r
        if (!option.dataset.originalText) option.dataset.originalText = originalText;\r
\r
        const isMatch = isSearchable ? window.ux4g.filterCore.matches(originalText, value, filterMode) : true;\r
        option.style.display = isMatch ? "" : "none";\r
\r
        if (labelNode) {\r
          const trimmedQuery = value.trim();\r
          if (isSearchable && trimmedQuery && isMatch) {\r
            labelNode.innerHTML = window.ux4g.filterCore.highlight(originalText, trimmedQuery, filterMode);\r
          } else {\r
            labelNode.textContent = originalText;\r
          }\r
        }\r
        if (isMatch) visibleCount++;\r
      });\r
\r
      // Toggle No Results Message\r
      let noResults = list.querySelector(".ux4g-search-no-results");\r
      if (visibleCount === 0 && value.trim() !== "") {\r
        if (!noResults) {\r
          noResults = document.createElement("li");\r
          noResults.className = "ux4g-search-no-results ux4g-p-s ux4g-text-center ux4g-text-muted";\r
          noResults.style.listStyle = "none";\r
          noResults.textContent = "No results found";\r
          list.appendChild(noResults);\r
        }\r
        noResults.style.display = "";\r
      } else if (noResults) {\r
        noResults.style.display = "none";\r
      }\r
\r
      // Optionally show list only when there's a value or interaction\r
      list.style.display = (value.trim() === "" && visibleCount === 0 && !searchWrap.classList.contains("ux4g-search-show-empty")) ? "none" : "";\r
\r
      // If list is hidden, don't show no results either\r
      if (list.style.display === "none" && noResults) noResults.style.display = "none";\r
    };\r
\r
    input.addEventListener("input", toggleSearchState);\r
\r
    if (clearBtn) {\r
      clearBtn.addEventListener("click", () => {\r
        input.value = "";\r
        toggleSearchState();\r
        input.focus();\r
      });\r
    }\r
\r
    input.addEventListener("focus", () => {\r
      searchWrap.classList.add("ux4g-is-active");\r
      handleSearchFilter();\r
    });\r
\r
    input.addEventListener("blur", (e) => {\r
      // Small timeout to allow potential clicks on the list item itself\r
      setTimeout(() => {\r
        if (!searchWrap.contains(document.activeElement)) {\r
          searchWrap.classList.remove("ux4g-is-active");\r
          handleSearchFilter();\r
        }\r
      }, 200);\r
    });\r
\r
    // Close when clicking outside\r
    document.addEventListener("mousedown", (e) => {\r
      if (!searchWrap.contains(e.target)) {\r
        searchWrap.classList.remove("ux4g-is-active");\r
        handleSearchFilter();\r
      }\r
    });\r
\r
    // Initial state\r
    toggleSearchState();\r
  });\r
});\r
\r
// clear input text\r
window.ux4gCustomInitList = window.ux4gCustomInitList || []; window.ux4gCustomInitList.push(() => {\r
  const toggle = (i) => i.closest(".ux4g-input-container")?.classList.toggle("ux4g-has-value", i.value.length > 0);\r
\r
  document.addEventListener("input", (e) => e.target.tagName === "INPUT" && toggle(e.target));\r
\r
  document.addEventListener("click", (e) => {\r
    const btn = e.target.closest('[aria-label="Clear input"], .ux4g-input-clear');\r
    if (btn) {\r
      const input = btn.closest(".ux4g-input-container")?.querySelector("input");\r
      if (input && !input.disabled && !input.readOnly) {\r
        input.value = "";\r
        toggle(input);\r
        input.dispatchEvent(new Event("input", { bubbles: true }));\r
        input.focus();\r
      }\r
    }\r
  });\r
\r
  document.querySelectorAll(".ux4g-input-container input").forEach(toggle);\r
});\r
\r
/* ========================================================= textarea counter js ========================================================= */\r
window.ux4gCustomInitList = window.ux4gCustomInitList || []; window.ux4gCustomInitList.push(() => {\r
  const updateCounter = (textarea) => {\r
    const wrapper = textarea.closest(".ux4g-textarea");\r
    if (!wrapper) return;\r
\r
    const counter = wrapper.querySelector(".ux4g-textarea-counter");\r
    if (!counter) return;\r
\r
    const maxLength = textarea.getAttribute("maxlength") || 0;\r
    const currentLength = textarea.value.length;\r
\r
    // Update text content with standard "0 / 200" format \r
    // Uses textContent to avoid XSS vectors or accidental HTML\r
    counter.textContent = \`\${currentLength} / \${maxLength}\`;\r
  };\r
\r
  // Add listener for all input events globally (event delegation)\r
  document.addEventListener("input", (e) => {\r
    if (e.target && e.target.matches && e.target.matches(".ux4g-textarea-input")) {\r
      updateCounter(e.target);\r
    }\r
  });\r
\r
  // Initialize all textareas with counters on page load\r
  document.querySelectorAll(".ux4g-textarea-input").forEach((textarea) => {\r
    updateCounter(textarea);\r
  });\r
});\r
\r
\r
\r
// ux4g drawer js\r
\r
/* ---------------- */\r
/* CLOSE DRAWER FUNCTION */\r
/* ---------------- */\r
\r
function closeDrawer() {\r
  const openDrawer = document.querySelector(".ux4g-drawer.ux4g-drawer-open");\r
  const openOverlay = document.querySelector(".ux4g-drawer-overlay.ux4g-drawer-open");\r
\r
  if (!openDrawer || !openOverlay) return;\r
\r
  openDrawer.classList.remove("ux4g-drawer-open");\r
  openOverlay.classList.remove("ux4g-drawer-open");\r
\r
  document.body.classList.remove("ux4g-drawer-lock");\r
}\r
\r
/* ---------------- */\r
/* DELEGATED CLICK HANDLERS */\r
/* ---------------- */\r
\r
document.addEventListener("click", (e) => {\r
  // OPEN DRAWER\r
  const openTrigger = e.target.closest("[data-drawer]");\r
  if (openTrigger) {\r
    const drawerId = openTrigger.getAttribute("data-drawer");\r
    const drawer = document.getElementById(drawerId);\r
    \r
    if (drawer) {\r
      const overlay = drawer.closest(".ux4g-drawer-overlay");\r
\r
      document.querySelectorAll(".ux4g-drawer-open")\r
        .forEach(el => el.classList.remove("ux4g-drawer-open"));\r
\r
      if (overlay) overlay.classList.add("ux4g-drawer-open");\r
      drawer.classList.add("ux4g-drawer-open");\r
\r
      document.body.classList.add("ux4g-drawer-lock");\r
    }\r
    return;\r
  }\r
\r
  // CLOSE VIA BUTTONS\r
  const closeTrigger = e.target.closest("[data-drawer-close]");\r
  if (closeTrigger) {\r
    closeDrawer();\r
    return;\r
  }\r
\r
  /* CLOSE VIA OVERLAY CLICK */\r
  const overlay = e.target.closest(".ux4g-drawer-overlay");\r
  if (overlay && !e.target.closest(".ux4g-drawer")) {\r
    closeDrawer();\r
  }\r
});\r
\r
/* ---------------- */\r
/* CLOSE VIA ESC KEY */\r
/* ---------------- */\r
\r
document.addEventListener("keydown", (e) => {\r
  if (e.key === "Escape") {\r
    closeDrawer();\r
  }\r
});\r
\r
/* ========================================================= dropdown js ========================================================= */\r
\r
/* ========================================================= dropdown js ========================================================= */\r
\r
window.ux4gCustomInitList = window.ux4gCustomInitList || []; window.ux4gCustomInitList.push(() => {\r
  const dropdowns = Array.from(document.querySelectorAll(".ux4g-dropdown"));\r
  if (!dropdowns.length) return;\r
\r
  const closeDropdown = (dropdown) => {\r
    dropdown.classList.remove("is-open");\r
    const control = dropdown.querySelector(".ux4g-dropdown-control");\r
    if (control) control.setAttribute("aria-expanded", "false");\r
  };\r
\r
  const openDropdown = (dropdown) => {\r
    dropdowns.forEach((item) => {\r
      if (item !== dropdown) closeDropdown(item);\r
    });\r
    dropdown.classList.add("is-open");\r
    const control = dropdown.querySelector(".ux4g-dropdown-control");\r
    if (control) control.setAttribute("aria-expanded", "true");\r
\r
    const menu = dropdown.querySelector(".ux4g-dropdown-menu");\r
    if (menu && window.ux4g && window.ux4g.repositionMenu) {\r
      window.ux4g.repositionMenu(dropdown, menu);\r
    }\r
  };\r
\r
  const setControlText = (dropdown, value) => {\r
    const hasValue = Boolean(value && String(value).trim());\r
    dropdown.classList.toggle("has-value", hasValue);\r
\r
    const searchInput = dropdown.querySelector("[ux4g-dropdown-search]");\r
    if (searchInput) {\r
      if (dropdown.classList.contains("ux4g-dropdown-single")) {\r
        searchInput.value = value || "";\r
      } else {\r
        searchInput.value = "";\r
      }\r
      // Trigger filter logic to stay in sync\r
      searchInput.dispatchEvent(new Event("input", { bubbles: true }));\r
      return;\r
    }\r
\r
    const valueNode = dropdown.querySelector("[ux4g-dropdown-value]");\r
    if (!valueNode) return;\r
    const placeholder = valueNode.getAttribute("data-placeholder") || "Please select..";\r
    valueNode.textContent = hasValue ? value : placeholder;\r
    valueNode.classList.toggle("is-placeholder", !hasValue);\r
  };\r
\r
  const getInputLabel = (input) => {\r
    if (!input) return "";\r
    if (input.dataset.label) return input.dataset.label;\r
    if (input.value) return input.value;\r
    const option = input.closest(".ux4g-dropdown-option");\r
    const text = option?.querySelector(".ux4g-checkbox-label, .ux4g-dropdown-option-title");\r
    return text?.textContent?.trim() || "";\r
  };\r
\r
  const getChoiceLabel = (choice) => {\r
    if (!choice) return "";\r
    return (choice.getAttribute("ux4g-dropdown-choice") || choice.textContent || "").trim();\r
  };\r
\r
  const applySingleSelection = (dropdown, value) => {\r
    const chipsNode = dropdown.querySelector("[ux4g-dropdown-chips]");\r
    dropdown.classList.remove("has-selection");\r
    setControlText(dropdown, value);\r
    if (!chipsNode) return;\r
    chipsNode.innerHTML = "";\r
  };\r
\r
  const setSingleSelectedOption = (dropdown, selectedOption) => {\r
    const options = dropdown.querySelectorAll(".ux4g-dropdown-single-option");\r
    options.forEach((option) => {\r
      const isSelected = option === selectedOption;\r
      if (isSelected) {\r
        option.classList.add("is-selected", "active");\r
        option.setAttribute("aria-selected", "true");\r
      } else {\r
        option.classList.remove("is-selected", "active");\r
        option.setAttribute("aria-selected", "false");\r
      }\r
      const listItem = option.closest(".ux4g-list-item");\r
      if (listItem) listItem.setAttribute("aria-selected", String(isSelected));\r
    });\r
  };\r
\r
  const renderMultiSelection = (dropdown) => {\r
    const chipsNode = dropdown.querySelector("[ux4g-dropdown-chips]");\r
    const checkedInputs = Array.from(\r
      dropdown.querySelectorAll(".ux4g-dropdown-option-input:checked")\r
    );\r
    const options = Array.from(dropdown.querySelectorAll(".ux4g-dropdown-option"));\r
\r
    const hasSelection = checkedInputs.length > 0;\r
    dropdown.classList.toggle("has-selection", hasSelection && Boolean(chipsNode));\r
    options.forEach((option) => {\r
      const input = option.querySelector(".ux4g-dropdown-option-input");\r
      const isSelected = Boolean(input?.checked);\r
      option.classList.toggle("is-selected", isSelected);\r
      option.classList.toggle("active", isSelected);\r
      option.setAttribute("aria-selected", String(isSelected));\r
    });\r
\r
    setControlText(dropdown, "");\r
    if (!chipsNode) return;\r
    chipsNode.innerHTML = "";\r
    if (!chipsNode || !hasSelection) return;\r
\r
    let chipSizeClass = "ux4g-input-chip-sm";\r
    if (dropdown.classList.contains("ux4g-dropdown-sm")) chipSizeClass = "ux4g-input-chip-xs";\r
    if (dropdown.classList.contains("ux4g-dropdown-lg")) chipSizeClass = "ux4g-input-chip";\r
\r
    checkedInputs.forEach((input) => {\r
      const label = getInputLabel(input);\r
      if (!label) return;\r
\r
      const chip = document.createElement("span");\r
      chip.className = \`\${chipSizeClass} ux4g-dropdown-chip\`;\r
      chip.setAttribute("role", "button");\r
      chip.setAttribute("tabindex", "0");\r
      chip.setAttribute("aria-label", \`Remove \${label}\`);\r
      chip.setAttribute("data-input-id", input.id);\r
      chip.innerHTML = \`<span class="ux4g-icon-outlined" aria-hidden="true">token</span><span>\${label}</span><span class="ux4g-icon-outlined" aria-hidden="true">close</span>\`;\r
\r
      const closeBtn = chip.querySelector(".ux4g-icon-outlined:last-child");\r
\r
      const clearSelection = (event) => {\r
        event.preventDefault();\r
        event.stopPropagation();\r
        input.checked = false;\r
        renderMultiSelection(dropdown);\r
      };\r
\r
      chip.addEventListener("mousedown", (event) => {\r
        event.preventDefault();\r
        event.stopPropagation();\r
      });\r
\r
      if (closeBtn) {\r
        closeBtn.addEventListener("click", clearSelection);\r
      }\r
\r
      chip.addEventListener("keydown", (event) => {\r
        if (event.key === "Enter" || event.key === " ") {\r
          clearSelection(event);\r
        }\r
      });\r
\r
      chipsNode.appendChild(chip);\r
    });\r
  };\r
\r
  dropdowns.forEach((dropdown, index) => {\r
    const control = dropdown.querySelector(".ux4g-dropdown-control");\r
    const menu = dropdown.querySelector(".ux4g-dropdown-menu");\r
    if (!control || !menu) return;\r
\r
    if (!control.id) {\r
      control.id = \`ux4g-dropdown-control-\${index + 1}\`;\r
    }\r
\r
    const popupRole = menu.getAttribute("role") === "menu" ? "menu" : "listbox";\r
    control.setAttribute("aria-haspopup", popupRole);\r
    control.setAttribute("aria-expanded", "false");\r
    menu.setAttribute("aria-labelledby", control.id);\r
\r
    const isSingle = dropdown.classList.contains("ux4g-dropdown-single");\r
    const isMulti = dropdown.classList.contains("ux4g-dropdown-multi");\r
\r
    const dropdownInputs = Array.from(menu.querySelectorAll(".ux4g-dropdown-option-input"));\r
    dropdownInputs.forEach((input, inputIndex) => {\r
      if (!input.id) {\r
        input.id = \`\${control.id}-option-\${inputIndex + 1}\`;\r
      }\r
    });\r
\r
    control.addEventListener("click", (event) => {\r
      // Prevent interactions if disabled\r
      if (control.disabled || control.getAttribute("aria-disabled") === "true") {\r
        event.preventDefault();\r
        event.stopPropagation();\r
        return;\r
      }\r
\r
      if (event.target.closest("[ux4g-dropdown-search]")) {\r
        if (!dropdown.classList.contains("is-open")) {\r
          openDropdown(dropdown);\r
        }\r
        return;\r
      }\r
      event.preventDefault();\r
      event.stopPropagation();\r
      if (dropdown.classList.contains("is-open")) closeDropdown(dropdown);\r
      else openDropdown(dropdown);\r
    });\r
\r
    menu.addEventListener("click", (event) => {\r
      const choice = event.target.closest("[ux4g-dropdown-choice]");\r
      if (!choice) return;\r
\r
      // Stop propagation to prevent global list JS from re-adding 'active' class\r
      event.stopPropagation();\r
\r
      const value = getChoiceLabel(choice);\r
      if (!value) return;\r
\r
      if (isSingle) {\r
        setSingleSelectedOption(dropdown, choice);\r
        applySingleSelection(dropdown, value);\r
      } else if (!isMulti) {\r
        setSingleSelectedOption(dropdown, choice); // Also set option for regular single selection\r
        applySingleSelection(dropdown, value);\r
      }\r
\r
      closeDropdown(dropdown);\r
    });\r
\r
    menu.addEventListener("change", (event) => {\r
      const input = event.target.closest(".ux4g-dropdown-option-input");\r
      if (!input) return;\r
\r
      if (isMulti) {\r
        renderMultiSelection(dropdown);\r
        return;\r
      }\r
\r
      if (input.checked && !isMulti) {\r
        menu.querySelectorAll(".ux4g-dropdown-option-input").forEach((item) => {\r
          if (item !== input) item.checked = false;\r
        });\r
      }\r
\r
      applySingleSelection(dropdown, input.checked ? getInputLabel(input) : "");\r
      closeDropdown(dropdown);\r
    });\r
\r
    menu.addEventListener("click", (event) => {\r
      const row = event.target.closest(".ux4g-list-item-row");\r
      if (!row) return;\r
\r
      const isActionDropdown =\r
        dropdown.classList.contains("ux4g-dropdown-button") ||\r
        dropdown.classList.contains("ux4g-dropdown-overflow");\r
\r
      if (isActionDropdown && !row.hasAttribute("ux4g-dropdown-choice")) {\r
        closeDropdown(dropdown);\r
      }\r
    });\r
\r
    if (isMulti) {\r
      const searchInput = dropdown.querySelector("[ux4g-dropdown-search]");\r
      if (searchInput) {\r
        const icon = searchInput.previousElementSibling;\r
        if (icon && icon.classList.contains("ux4g-icon-outlined") && !searchInput.closest(".ux4g-dropdown-input-wrap")) {\r
          const wrapper = document.createElement("span");\r
          wrapper.className = "ux4g-dropdown-input-wrap";\r
          icon.parentNode.insertBefore(wrapper, icon);\r
          wrapper.appendChild(icon);\r
          wrapper.appendChild(searchInput);\r
        }\r
      }\r
      renderMultiSelection(dropdown);\r
      return;\r
    }\r
\r
    const preselectedSingle = menu.querySelector(\r
      ".ux4g-dropdown-single-option.is-selected, .ux4g-dropdown-single-option[aria-selected='true']"\r
    );\r
    if (preselectedSingle) {\r
      setSingleSelectedOption(dropdown, preselectedSingle);\r
      applySingleSelection(dropdown, getChoiceLabel(preselectedSingle));\r
      return;\r
    }\r
\r
    const preselectedChoice = menu.querySelector("[ux4g-dropdown-choice][aria-selected='true']");\r
    if (preselectedChoice) {\r
      applySingleSelection(dropdown, getChoiceLabel(preselectedChoice));\r
      return;\r
    }\r
\r
    const preselectedInput = menu.querySelector(".ux4g-dropdown-option-input:checked");\r
    applySingleSelection(dropdown, preselectedInput ? getInputLabel(preselectedInput) : "");\r
  });\r
\r
  document.addEventListener("click", (event) => {\r
    // Dynamically query open dropdowns to support frameworks that recreate DOM nodes\r
    const openDropdowns = document.querySelectorAll(".ux4g-dropdown.is-open");\r
    openDropdowns.forEach((dropdown) => {\r
      if (!dropdown.contains(event.target)) {\r
        dropdown.classList.remove("is-open");\r
        const control = dropdown.querySelector(".ux4g-dropdown-control");\r
        if (control) control.setAttribute("aria-expanded", "false");\r
      }\r
    });\r
  });\r
\r
  document.addEventListener("keydown", (event) => {\r
    if (event.key === "Escape") {\r
      const openDropdowns = document.querySelectorAll(".ux4g-dropdown.is-open");\r
      openDropdowns.forEach((dropdown) => {\r
        dropdown.classList.remove("is-open");\r
        const control = dropdown.querySelector(".ux4g-dropdown-control");\r
        if (control) control.setAttribute("aria-expanded", "false");\r
      });\r
    }\r
  });\r
});\r
\r
\r
/* =========================================\r
DROPDOWN SEARCH\r
========================================= */\r
\r
window.ux4gCustomInitList = window.ux4gCustomInitList || []; window.ux4gCustomInitList.push(() => {\r
  document.querySelectorAll("[ux4g-dropdown-search]").forEach((input) => {\r
\r
    const dropdown = input.closest(".ux4g-dropdown");\r
    const menu = dropdown.querySelector(".ux4g-dropdown-menu");\r
\r
    input.addEventListener("focus", () => {\r
      dropdown.classList.add("is-open");\r
      if (window.ux4g && window.ux4g.repositionMenu) {\r
        window.ux4g.repositionMenu(dropdown, menu);\r
      }\r
    });\r
\r
    input.addEventListener("input", () => {\r
      const value = input.value;\r
      const filterMode = dropdown.getAttribute("ux4g-dropdown-filter") || "contains";\r
\r
      dropdown.classList.add("is-open");\r
      if (window.ux4g && window.ux4g.repositionMenu) {\r
        window.ux4g.repositionMenu(dropdown, menu);\r
      }\r
\r
      const options = dropdown.querySelectorAll(\r
        ".ux4g-dropdown-single-option, .ux4g-dropdown-option"\r
      );\r
\r
      options.forEach(option => {\r
        const originalText = option.dataset.originalText || option.textContent.trim();\r
        if (!option.dataset.originalText) option.dataset.originalText = originalText;\r
\r
        const isMatch = window.ux4g.filterCore.matches(originalText, value, filterMode);\r
        option.style.display = isMatch ? "" : "none";\r
\r
        // Optional: Add highlighting for Dropdown Search too\r
        const labelNode = option.querySelector(".ux4g-checkbox-label, .ux4g-dropdown-option-title, .ux4g-list-item-start");\r
        if (labelNode) {\r
          if (value && isMatch) {\r
            labelNode.innerHTML = window.ux4g.filterCore.highlight(originalText, value, filterMode);\r
          } else {\r
            labelNode.textContent = originalText;\r
          }\r
        }\r
      });\r
    });\r
\r
    // Sync disabled state\r
    const control = dropdown.querySelector(".ux4g-dropdown-control");\r
    if (control && (control.disabled || control.getAttribute("aria-disabled") === "true")) {\r
      input.disabled = true;\r
    }\r
  });\r
});\r
\r
/* ========================================================= combobox js ========================================================= */\r
\r
window.ux4gCustomInitList = window.ux4gCustomInitList || []; window.ux4gCustomInitList.push(() => {\r
  const comboboxs = Array.from(document.querySelectorAll(".ux4g-combobox"));\r
  if (!comboboxs.length) return;\r
\r
  const closeCombobox = (combobox) => {\r
    combobox.classList.remove("is-open");\r
    const control = combobox.querySelector(".ux4g-combobox-control");\r
    if (control) control.setAttribute("aria-expanded", "false");\r
  };\r
\r
  const openCombobox = (combobox) => {\r
    comboboxs.forEach((item) => {\r
      if (item !== combobox) closeCombobox(item);\r
    });\r
    combobox.classList.add("is-open");\r
    const control = combobox.querySelector(".ux4g-combobox-control");\r
    if (control) control.setAttribute("aria-expanded", "true");\r
\r
    const menu = combobox.querySelector(".ux4g-combobox-menu");\r
    if (menu && window.ux4g && window.ux4g.repositionMenu) {\r
      window.ux4g.repositionMenu(combobox, menu);\r
    }\r
  };\r
\r
  const setControlText = (combobox, value) => {\r
    const searchInput = combobox.querySelector("[ux4g-combobox-search]");\r
    if (searchInput) {\r
      if (combobox.classList.contains("ux4g-combobox-single")) {\r
        searchInput.value = value || "";\r
      } else {\r
        searchInput.value = "";\r
      }\r
      return;\r
    }\r
\r
    const valueNode = combobox.querySelector("[ux4g-combobox-value]");\r
    const hasValue = Boolean(value && String(value).trim());\r
    if (!valueNode) return;\r
    const placeholder = valueNode.getAttribute("data-placeholder") || "Please select..";\r
    valueNode.textContent = hasValue ? value : placeholder;\r
    valueNode.classList.toggle("is-placeholder", !hasValue);\r
  };\r
\r
  const getInputLabel = (input) => {\r
    if (!input) return "";\r
    if (input.dataset.label) return input.dataset.label;\r
    if (input.value) return input.value;\r
    const option = input.closest(".ux4g-combobox-option");\r
    const text = option?.querySelector(".ux4g-checkbox-label, .ux4g-combobox-option-title");\r
    return text?.textContent?.trim() || "";\r
  };\r
\r
  const getChoiceLabel = (choice) => {\r
    if (!choice) return "";\r
    return (choice.getAttribute("ux4g-combobox-choice") || choice.textContent || "").trim();\r
  };\r
\r
  const applySingleSelection = (combobox, value) => {\r
    const chipsNode = combobox.querySelector("[ux4g-combobox-chips]");\r
    combobox.classList.remove("has-selection");\r
    setControlText(combobox, value);\r
    if (!chipsNode) return;\r
    chipsNode.innerHTML = "";\r
  };\r
\r
  const setSingleSelectedOption = (combobox, selectedOption) => {\r
    const options = combobox.querySelectorAll(".ux4g-combobox-single-option");\r
    options.forEach((option) => {\r
      const isSelected = option === selectedOption;\r
      option.classList.toggle("is-selected", isSelected);\r
      option.classList.toggle("active", isSelected);\r
      option.setAttribute("aria-selected", String(isSelected));\r
      const listItem = option.closest(".ux4g-list-item");\r
      if (listItem) listItem.setAttribute("aria-selected", String(isSelected));\r
    });\r
  };\r
\r
  const renderMultiSelection = (combobox) => {\r
    const chipsNode = combobox.querySelector("[ux4g-combobox-chips]");\r
    const checkedInputs = Array.from(\r
      combobox.querySelectorAll(".ux4g-combobox-option-input:checked")\r
    );\r
    const options = Array.from(combobox.querySelectorAll(".ux4g-combobox-option"));\r
\r
    const hasSelection = checkedInputs.length > 0;\r
    combobox.classList.toggle("has-selection", hasSelection && Boolean(chipsNode));\r
    options.forEach((option) => {\r
      const input = option.querySelector(".ux4g-combobox-option-input");\r
      const isSelected = Boolean(input?.checked);\r
      option.classList.toggle("is-selected", isSelected);\r
      option.classList.toggle("active", isSelected);\r
      option.setAttribute("aria-selected", String(isSelected));\r
    });\r
\r
    setControlText(combobox, "");\r
    if (!chipsNode) return;\r
    chipsNode.style.display = "contents";\r
    chipsNode.innerHTML = "";\r
    if (!chipsNode || !hasSelection) return;\r
\r
    let chipSizeClass = "ux4g-input-chip-sm";\r
    if (combobox.classList.contains("ux4g-combobox-sm")) chipSizeClass = "ux4g-input-chip-xs";\r
    if (combobox.classList.contains("ux4g-combobox-lg")) chipSizeClass = "ux4g-input-chip";\r
\r
    checkedInputs.forEach((input) => {\r
      const label = getInputLabel(input);\r
      if (!label) return;\r
\r
      const chip = document.createElement("span");\r
      chip.className = \`\${chipSizeClass} ux4g-combobox-chip\`;\r
      chip.setAttribute("role", "button");\r
      chip.setAttribute("tabindex", "0");\r
      chip.setAttribute("aria-label", \`Remove \${label}\`);\r
      chip.setAttribute("data-input-id", input.id);\r
      chip.innerHTML = \`<span class="ux4g-icon-outlined" aria-hidden="true">token</span><span>\${label}</span><span class="ux4g-icon-outlined" aria-hidden="true">close</span>\`;\r
\r
      const closeBtn = chip.querySelector(".ux4g-icon-outlined:last-child");\r
\r
      const clearSelection = (event) => {\r
        event.preventDefault();\r
        event.stopPropagation();\r
        input.checked = false;\r
        renderMultiSelection(combobox);\r
      };\r
\r
      chip.addEventListener("mousedown", (event) => {\r
        event.preventDefault();\r
        event.stopPropagation();\r
      });\r
\r
      if (closeBtn) {\r
        closeBtn.addEventListener("click", clearSelection);\r
      }\r
\r
      chip.addEventListener("keydown", (event) => {\r
        if (event.key === "Enter" || event.key === " ") {\r
          clearSelection(event);\r
        }\r
      });\r
\r
      chipsNode.appendChild(chip);\r
    });\r
  };\r
\r
  const DEBOUNCE_DELAY = 150;\r
  const debounce = (fn, delay) => {\r
    let t;\r
    return (...args) => {\r
      clearTimeout(t);\r
      t = setTimeout(() => fn(...args), delay);\r
    };\r
  };\r
\r
  function toggleNoResults(menu, show) {\r
    let el = menu.querySelector(".ux4g-combobox-no-results");\r
    if (show) {\r
      if (!el) {\r
        el = document.createElement("div");\r
        el.className = "ux4g-combobox-no-results ux4g-p-s ux4g-text-center ux4g-text-muted";\r
        el.textContent = "No results found";\r
        menu.appendChild(el);\r
      }\r
      el.style.display = "";\r
    } else if (el) {\r
      el.style.display = "none";\r
    }\r
  }\r
\r
  comboboxs.forEach((combobox, index) => {\r
    const control = combobox.querySelector(".ux4g-combobox-control");\r
    const menu = combobox.querySelector(".ux4g-combobox-menu");\r
    const input = combobox.querySelector("[ux4g-combobox-search]");\r
    const caret = combobox.querySelector(".ux4g-combobox-caret");\r
\r
    if (!control || !menu) return;\r
\r
    if (!control.id) {\r
      control.id = \`ux4g-combobox-control-\${index + 1}\`;\r
    }\r
\r
    const popupRole = menu.getAttribute("role") === "menu" ? "menu" : "listbox";\r
    control.setAttribute("aria-haspopup", popupRole);\r
    control.setAttribute("aria-expanded", "false");\r
    menu.setAttribute("aria-labelledby", control.id);\r
\r
    const isSingle = combobox.classList.contains("ux4g-combobox-single");\r
    const isMulti = combobox.classList.contains("ux4g-combobox-multi");\r
    const filterMode = combobox.getAttribute("ux4g-combobox-filter") || "contains";\r
\r
    const comboboxInputs = Array.from(menu.querySelectorAll(".ux4g-combobox-option-input"));\r
    comboboxInputs.forEach((input, inputIndex) => {\r
      if (!input.id) {\r
        input.id = \`\${control.id}-option-\${inputIndex + 1}\`;\r
      }\r
    });\r
\r
    const options = isMulti\r
      ? Array.from(combobox.querySelectorAll(".ux4g-combobox-option"))\r
      : Array.from(combobox.querySelectorAll(".ux4g-combobox-single-option"));\r
\r
    // Store original text for filtering\r
    options.forEach((option) => {\r
      let labelNode = isMulti\r
        ? option.querySelector(".ux4g-checkbox-label")\r
        : option.querySelector(".ux4g-list-item-start");\r
\r
      option.dataset.originalText = labelNode\r
        ? labelNode.textContent.trim()\r
        : option.textContent.trim();\r
    });\r
\r
    const handleFilter = () => {\r
      if (!input) return;\r
      const value = input.value;\r
      let visibleCount = 0;\r
\r
      options.forEach((option) => {\r
        const originalText = option.dataset.originalText;\r
        const isMatch = window.ux4g.filterCore.matches(originalText, value, filterMode);\r
\r
        option.style.display = isMatch ? "" : "none";\r
\r
        const labelNode = isMulti\r
          ? option.querySelector(".ux4g-checkbox-label")\r
          : option.querySelector(".ux4g-list-item-start");\r
\r
       if (labelNode) {\r
          if (value && isMatch) {\r
            labelNode.innerHTML = \`<span>\${window.ux4g.filterCore.highlight(originalText, value, filterMode)}</span>\`;\r
          } else {\r
            labelNode.textContent = originalText;\r
          }\r
        }\r
        if (isMatch) visibleCount++;\r
      });\r
      toggleNoResults(menu, visibleCount === 0 && value.trim());\r
    };\r
\r
    if (input) {\r
      input.addEventListener("focus", () => openCombobox(combobox));\r
      input.addEventListener("input", debounce(() => {\r
        openCombobox(combobox);\r
        if (isSingle && input.value.trim() === "") {\r
          setSingleSelectedOption(combobox, null);\r
          applySingleSelection(combobox, "");\r
        }\r
        handleFilter();\r
      }, DEBOUNCE_DELAY));\r
    }\r
\r
    if (caret) {\r
      caret.addEventListener("click", (e) => {\r
        e.stopPropagation();\r
        combobox.classList.contains("is-open") ? closeCombobox(combobox) : openCombobox(combobox);\r
      });\r
    }\r
\r
    control.addEventListener("click", (event) => {\r
      if (control.disabled || control.getAttribute("aria-disabled") === "true") {\r
        event.preventDefault();\r
        event.stopPropagation();\r
        return;\r
      }\r
\r
      if (event.target.closest("[ux4g-combobox-search]")) {\r
        if (!combobox.classList.contains("is-open")) openCombobox(combobox);\r
        return;\r
      }\r
      event.preventDefault();\r
      event.stopPropagation();\r
      if (combobox.classList.contains("is-open")) closeCombobox(combobox);\r
      else openCombobox(combobox);\r
    });\r
\r
    menu.addEventListener("click", (event) => {\r
      const choice = event.target.closest("[ux4g-combobox-choice]");\r
      if (!choice) {\r
        // Handle Action Combobox closing\r
        const row = event.target.closest(".ux4g-list-item-row");\r
        if (row) {\r
          const isActionCombobox =\r
            combobox.classList.contains("ux4g-combobox-button") ||\r
            combobox.classList.contains("ux4g-combobox-overflow");\r
          if (isActionCombobox) {\r
            closeCombobox(combobox);\r
          }\r
        }\r
        return;\r
      }\r
      event.stopPropagation();\r
\r
      const value = getChoiceLabel(choice);\r
      if (!value) return;\r
\r
      if (isSingle) {\r
        setSingleSelectedOption(combobox, choice);\r
        applySingleSelection(combobox, value);\r
        handleFilter(); // Reset highlight\r
      } else if (!isMulti) {\r
        applySingleSelection(combobox, value);\r
      }\r
      closeCombobox(combobox);\r
    });\r
\r
    menu.addEventListener("change", (event) => {\r
      const inputEl = event.target.closest(".ux4g-combobox-option-input");\r
      if (!inputEl) return;\r
\r
      if (isMulti) {\r
        renderMultiSelection(combobox);\r
        handleFilter();\r
        return;\r
      }\r
\r
      if (inputEl.checked && !isMulti) {\r
        menu.querySelectorAll(".ux4g-combobox-option-input").forEach((item) => {\r
          if (item !== inputEl) item.checked = false;\r
        });\r
      }\r
\r
      applySingleSelection(combobox, inputEl.checked ? getInputLabel(inputEl) : "");\r
      closeCombobox(combobox);\r
    });\r
\r
    if (isMulti) {\r
      if (input) {\r
        const icon = input.previousElementSibling;\r
        if (icon && icon.classList.contains("ux4g-icon-outlined") && !input.closest(".ux4g-combobox-input-wrap")) {\r
          const wrapper = document.createElement("span");\r
          wrapper.className = "ux4g-combobox-input-wrap";\r
          icon.parentNode.insertBefore(wrapper, icon);\r
          wrapper.appendChild(icon);\r
          wrapper.appendChild(input);\r
        }\r
      }\r
      renderMultiSelection(combobox);\r
      return;\r
    }\r
\r
    const preselectedSingle = menu.querySelector(\r
      ".ux4g-combobox-single-option.is-selected, .ux4g-combobox-single-option[aria-selected='true']"\r
    );\r
    if (preselectedSingle) {\r
      setSingleSelectedOption(combobox, preselectedSingle);\r
      applySingleSelection(combobox, getChoiceLabel(preselectedSingle));\r
      return;\r
    }\r
\r
    const preselectedChoice = menu.querySelector("[ux4g-combobox-choice][aria-selected='true']");\r
    if (preselectedChoice) {\r
      applySingleSelection(combobox, getChoiceLabel(preselectedChoice));\r
      return;\r
    }\r
\r
    const preselectedInput = menu.querySelector(".ux4g-combobox-option-input:checked");\r
    if (preselectedInput) {\r
      applySingleSelection(combobox, getInputLabel(preselectedInput));\r
    }\r
  });\r
\r
  document.addEventListener("click", (event) => {\r
    const openComboboxes = document.querySelectorAll(".ux4g-combobox.is-open");\r
    openComboboxes.forEach((combobox) => {\r
      if (!combobox.contains(event.target)) {\r
        combobox.classList.remove("is-open");\r
        const control = combobox.querySelector(".ux4g-combobox-control");\r
        if (control) control.setAttribute("aria-expanded", "false");\r
      }\r
    });\r
  });\r
\r
  document.addEventListener("keydown", (event) => {\r
    if (event.key === "Escape") {\r
      const openComboboxes = document.querySelectorAll(".ux4g-combobox.is-open");\r
      openComboboxes.forEach((combobox) => {\r
        combobox.classList.remove("is-open");\r
        const control = combobox.querySelector(".ux4g-combobox-control");\r
        if (control) control.setAttribute("aria-expanded", "false");\r
      });\r
    }\r
  });\r
});\r
\r
\r
/* ========================================================= ux4g Tabs ========================================================= */\r
\r
\r
(function (global) {\r
  'use strict';\r
\r
  class UX4GTab {\r
\r
    constructor(rootEl, options = {}) {\r
      if (!(rootEl instanceof HTMLElement)) {\r
        throw new Error('UX4GTab: rootEl must be an HTMLElement');\r
      }\r
\r
      this.root = rootEl;\r
      this.options = Object.assign({ onChange: null }, options);\r
\r
      this._detectConfig();\r
      this._cleanInitialState();\r
      this._bindEvents();\r
    }\r
\r
    /* Detect elements */\r
    _detectConfig() {\r
      this.list = this.root.querySelector('.ux4g-tab-list');\r
      this.items = Array.from(\r
        this.list.querySelectorAll('.ux4g-tab-item:not(.ux4g-tab-more)')\r
      );\r
      this.moreBtns = Array.from(\r
        this.list.querySelectorAll('.ux4g-tab-more')\r
      );\r
      this.panels = Array.from(\r
        this.root.querySelectorAll('.ux4g-tab-panel')\r
      );\r
    }\r
\r
    /* Clean any static open state */\r
    _cleanInitialState() {\r
      this.root.querySelectorAll('.ux4g-tab-dropdown-list.is-open')\r
        .forEach(d => d.classList.remove('is-open'));\r
    }\r
\r
    /* Bind events */\r
    _bindEvents() {\r
\r
      /* Regular tabs */\r
      this.items.forEach(item => {\r
        item.addEventListener('click', () => this._activateItem(item));\r
        item.addEventListener('keydown', (e) => {\r
          if (e.key === 'Enter') {\r
            e.preventDefault();\r
            this._activateItem(item);\r
          }\r
        });\r
      });\r
\r
      /* More dropdown */\r
      this.moreBtns.forEach(moreBtn => {\r
        const dropdown = moreBtn.querySelector('.ux4g-tab-dropdown-list');\r
        if (!dropdown) return;\r
\r
        moreBtn.addEventListener('click', (e) => {\r
          const isDropdownClick = e.target.closest('.ux4g-tab-dropdown-list');\r
\r
          if (!isDropdownClick) {\r
            e.stopPropagation();\r
            this._toggleDropdown(dropdown);\r
          }\r
        });\r
\r
        // Add Enter key support to open dropdown\r
        moreBtn.addEventListener('keydown', (e) => {\r
          if (e.key === 'Enter') {\r
            e.preventDefault();\r
            const isDropdownClick = e.target.closest('.ux4g-tab-dropdown-list');\r
            if (!isDropdownClick) {\r
              e.stopPropagation();\r
              this._toggleDropdown(dropdown);\r
            }\r
          }\r
        });\r
\r
        dropdown.querySelectorAll('.ux4g-tab-dropdown-item, .ux4g-list-item')\r
          .forEach(dItem => {\r
            dItem.addEventListener('click', (e) => {\r
              e.stopPropagation();\r
              this._activateDropdownItem(dItem, moreBtn);\r
            });\r
            dItem.addEventListener('keydown', (e) => {\r
              if (e.key === 'Enter') {\r
                e.preventDefault();\r
                e.stopPropagation();\r
                this._activateDropdownItem(dItem, moreBtn);\r
              }\r
            });\r
          });\r
\r
        // Also ensure ANY click inside the dropdown list closes it\r
        dropdown.addEventListener('click', (e) => {\r
          this._closeAllDropdowns();\r
        });\r
      });\r
\r
      /* Outside click (scoped) */\r
      document.addEventListener('click', (e) => {\r
        if (!e.target.closest('.ux4g-tab-more')) {\r
          this._closeAllDropdowns();\r
        }\r
      });\r
    }\r
\r
    /* Activate normal tab */\r
    _activateItem(item) {\r
      if (item.classList.contains('ux4g-tab-item-disabled')) return;\r
\r
      this._resetActive();\r
      item.classList.add('active');\r
\r
      const panelId = item.dataset.panel;\r
      if (panelId) this._showPanel(panelId);\r
\r
      this._closeAllDropdowns();\r
      this._emitChange(panelId);\r
    }\r
\r
    /* Activate dropdown item */\r
    _activateDropdownItem(dItem, moreBtn) {\r
      this._resetActive();\r
\r
      moreBtn.classList.add('active');\r
      dItem.classList.add('active');\r
\r
      const panelId = dItem.dataset.panel;\r
      if (panelId) this._showPanel(panelId);\r
\r
      this._closeAllDropdowns();\r
      this._emitChange(panelId);\r
    }\r
\r
    /* Reset active states */\r
    _resetActive() {\r
      this.list.querySelectorAll('.ux4g-tab-item')\r
        .forEach(i => i.classList.remove('active'));\r
\r
      this.root.querySelectorAll('.ux4g-tab-dropdown-item, .ux4g-list-item')\r
        .forEach(i => i.classList.remove('active'));\r
    }\r
\r
    /* Show panel */\r
    _showPanel(panelId) {\r
      this.panels.forEach(p => p.classList.remove('active'));\r
      const target = this.root.querySelector('#' + panelId);\r
      if (target) target.classList.add('active');\r
    }\r
\r
    /* Toggle dropdown */\r
    _toggleDropdown(dropdown) {\r
      const isOpen = dropdown.classList.contains('is-open');\r
      this._closeAllDropdowns();\r
\r
      if (!isOpen) {\r
        dropdown.classList.add('is-open');\r
      }\r
    }\r
\r
    /* Close dropdowns (scoped globally to all tabs) */\r
    _closeAllDropdowns() {\r
      document.querySelectorAll('.ux4g-tab-dropdown-list.is-open')\r
        .forEach(d => d.classList.remove('is-open'));\r
    }\r
\r
    /* Emit change */\r
    _emitChange(panelId) {\r
      if (typeof this.options.onChange === 'function') {\r
        this.options.onChange(panelId);\r
      }\r
    }\r
\r
    /* Init all */\r
    static initAll(scope = document) {\r
      return Array.from(scope.querySelectorAll('[data-ux4g-tab]'))\r
        .map(el => new UX4GTab(el));\r
    }\r
  }\r
\r
  global.UX4GTab = UX4GTab;\r
\r
})(window);\r
\r
/* Auto init */\r
window.ux4gCustomInitList = window.ux4gCustomInitList || []; window.ux4gCustomInitList.push(() => {\r
  UX4GTab.initAll();\r
});\r
\r
/* ========================================================= slider js ========================================================= */\r
\r
window.ux4gCustomInitList = window.ux4gCustomInitList || []; window.ux4gCustomInitList.push(() => {\r
\r
  /* =========================================================\r
     HELPERS\r
  ========================================================= */\r
\r
  const pct = (val, min, max) => ((val - min) / (max - min)) * 100;\r
\r
  const buildSteps = (container, min, max, step) => {\r
    if (!container) return;\r
\r
    let html = "";\r
\r
    for (let v = min; v <= max; v += step) {\r
      const p = pct(v, min, max);\r
\r
      html += \`\r
        <div class="ux4g-slider-step" data-value="\${v}" style="left:\${p}%">\r
          <span class="ux4g-slider-step-mark"></span>\r
          <span class="ux4g-slider-step-label">\${v}</span>\r
        </div>\r
      \`;\r
    }\r
\r
    container.innerHTML = html;\r
  };\r
\r
  /* =========================================================\r
     SINGLE SLIDERS\r
  ========================================================= */\r
\r
  const singleSliders = document.querySelectorAll(\r
    ".ux4g-slider:not(.ux4g-slider-dual)"\r
  );\r
\r
  singleSliders.forEach((slider) => {\r
\r
    const input = slider.querySelector(".ux4g-slider-input");\r
    const fill = slider.querySelector(".ux4g-slider-fill");\r
    const thumb = slider.querySelector(".ux4g-slider-thumb");\r
    const steps = slider.querySelector(".ux4g-slider-steps");\r
\r
    if (!input) return;\r
\r
    const valueBox =\r
      slider.closest(".ux4g-slider-field")?.querySelector(\r
        ".ux4g-slider-range-box"\r
      );\r
    const valueBadge =\r
      slider.closest(".ux4g-slider-field")?.querySelector(\r
        ".ux4g-slider-value-badge"\r
      );\r
\r
    const min = parseFloat(input.min) || 0;\r
    const max = parseFloat(input.max) || 100;\r
    const step = parseFloat(input.step) || 10;\r
\r
    /* Helper: Make badge editable */\r
    const initBadgeEdit = (badge, targetInput) => {\r
      if (!badge) return;\r
      badge.setAttribute("contenteditable", "true");\r
      badge.style.cursor = "text";\r
\r
      // Strict number only entry\r
      badge.addEventListener("keypress", (e) => {\r
        if (!/[0-9]/.test(e.key) && e.key !== "Enter") {\r
          e.preventDefault();\r
        }\r
      });\r
\r
      badge.addEventListener("keydown", (e) => {\r
        if (e.key === "Enter") {\r
          e.preventDefault();\r
          badge.blur();\r
        }\r
      });\r
\r
      badge.addEventListener("blur", () => {\r
        let raw = badge.textContent.replace(/[^0-9]/g, "");\r
        let val = parseInt(raw, 10);\r
        if (isNaN(val)) val = parseFloat(targetInput.value);\r
\r
        // Clamp 0-100\r
        val = Math.min(max, Math.max(min, val));\r
\r
        targetInput.value = val;\r
        // Trigger input event to update everything\r
        targetInput.dispatchEvent(new Event("input"));\r
\r
        // Re-apply suffix if needed\r
        const suffix = badge.textContent.includes("%") ? "%" : "";\r
        badge.textContent = val + suffix;\r
      });\r
    };\r
\r
    if (valueBox) initBadgeEdit(valueBox, input);\r
\r
    /* Build Steps */\r
\r
    buildSteps(steps, min, max, step);\r
\r
    const stepEls = slider.querySelectorAll(".ux4g-slider-step");\r
\r
    const update = () => {\r
\r
      const val = parseFloat(input.value);\r
      const p = pct(val, min, max);\r
\r
      if (fill) fill.style.width = p + "%";\r
      if (thumb) thumb.style.left = p + "%";\r
\r
      // Only update text containers if not currently editing\r
      const containers = [valueBadge, valueBox];\r
      containers.forEach(container => {\r
        if (container && document.activeElement !== container) {\r
          const suffix = container.textContent.includes("%") ? "%" : "";\r
          container.textContent = val + suffix;\r
        }\r
      });\r
\r
      stepEls.forEach((el) => {\r
        const sv = parseFloat(el.dataset.value);\r
        el.classList.toggle("is-active", sv <= val);\r
      });\r
\r
    };\r
\r
    input.addEventListener("input", update);\r
\r
    update();\r
\r
  });\r
\r
  /* =========================================================\r
     DUAL RANGE SLIDERS\r
  ========================================================= */\r
\r
  const dualSliders = document.querySelectorAll(".ux4g-slider-dual");\r
\r
  dualSliders.forEach((slider) => {\r
\r
    const inputMin = slider.querySelector(".ux4g-slider-input-min");\r
    const inputMax = slider.querySelector(".ux4g-slider-input-max");\r
\r
    const fill = slider.querySelector(".ux4g-slider-fill");\r
    const thumbMin = slider.querySelector(".ux4g-slider-thumb-min");\r
    const thumbMax = slider.querySelector(".ux4g-slider-thumb-max");\r
\r
    const steps = slider.querySelector(".ux4g-slider-steps");\r
\r
    const field = slider.closest(".ux4g-slider-field");\r
\r
    const minBox = field?.querySelector(".ux4g-slider-range-box:first-of-type, .ux4g-slider-range-box");\r
    // Actually better to select all and differentiate if multiple exist\r
    const rangeBoxes = field?.querySelectorAll(".ux4g-slider-range-box");\r
    const valueBadges = field?.querySelectorAll(".ux4g-slider-value-badge");\r
\r
    if (!inputMin || !inputMax) return;\r
\r
    const min = parseFloat(inputMin.min) || 0;\r
    const max = parseFloat(inputMin.max) || 100;\r
    const step = parseFloat(inputMin.step) || 10;\r
\r
    /* Helper: Make box editable */\r
    const initBoxEdit = (badge, targetInput) => {\r
      if (!badge) return;\r
      badge.setAttribute("contenteditable", "true");\r
      badge.style.cursor = "text";\r
\r
      // Strict number only entry\r
      badge.addEventListener("keypress", (e) => {\r
        if (!/[0-9]/.test(e.key) && e.key !== "Enter") {\r
          e.preventDefault();\r
        }\r
      });\r
\r
      badge.addEventListener("keydown", (e) => {\r
        if (e.key === "Enter") {\r
          e.preventDefault();\r
          badge.blur();\r
        }\r
      });\r
\r
      badge.addEventListener("blur", () => {\r
        let raw = badge.textContent.replace(/[^0-9]/g, "");\r
        let val = parseInt(raw, 10);\r
        if (isNaN(val)) val = parseFloat(targetInput.value);\r
\r
        // Clamp min-max\r
        val = Math.min(max, Math.max(min, val));\r
\r
        targetInput.value = val;\r
        // Trigger change to validate cross limits\r
        targetInput.dispatchEvent(new Event("input"));\r
\r
        // Re-apply suffix\r
        const suffix = badge.textContent.includes("%") ? "%" : "";\r
        badge.textContent = val + suffix;\r
      });\r
    };\r
\r
    if (rangeBoxes?.[0]) initBoxEdit(rangeBoxes[0], inputMin);\r
    if (rangeBoxes?.[1]) initBoxEdit(rangeBoxes[1], inputMax);\r
\r
    buildSteps(steps, min, max, step);\r
\r
    const stepEls = slider.querySelectorAll(".ux4g-slider-step");\r
\r
    const update = (e) => {\r
\r
      let vMin = parseFloat(inputMin.value);\r
      let vMax = parseFloat(inputMax.value);\r
\r
      /* Prevent crossing */\r
\r
      if (e?.target === inputMin && vMin >= vMax) {\r
        inputMin.value = vMax - step;\r
        vMin = parseFloat(inputMin.value);\r
      }\r
\r
      if (e?.target === inputMax && vMax <= vMin) {\r
        inputMax.value = vMin + step;\r
        vMax = parseFloat(inputMax.value);\r
      }\r
\r
      const pMin = pct(vMin, min, max);\r
      const pMax = pct(vMax, min, max);\r
\r
      if (fill) {\r
        fill.style.left = pMin + "%";\r
        fill.style.width = (pMax - pMin) + "%";\r
      }\r
\r
      if (thumbMin) thumbMin.style.left = pMin + "%";\r
      if (thumbMax) thumbMax.style.left = pMax + "%";\r
\r
      // Sync dual badges\r
      if (valueBadges?.[0] && document.activeElement !== valueBadges[0]) {\r
        valueBadges[0].textContent = vMin + (valueBadges[0].textContent.includes("%") ? "%" : "");\r
      }\r
      if (valueBadges?.[1] && document.activeElement !== valueBadges[1]) {\r
        valueBadges[1].textContent = vMax + (valueBadges[1].textContent.includes("%") ? "%" : "");\r
      }\r
\r
      // Sync dual boxes\r
      if (rangeBoxes?.[0] && document.activeElement !== rangeBoxes[0]) {\r
        rangeBoxes[0].textContent = vMin + (rangeBoxes[0].textContent.includes("%") ? "%" : "");\r
      }\r
      if (rangeBoxes?.[1] && document.activeElement !== rangeBoxes[1]) {\r
        rangeBoxes[1].textContent = vMax + (rangeBoxes[1].textContent.includes("%") ? "%" : "");\r
      }\r
\r
      /* Thumb overlap fix */\r
\r
      if (pMax - pMin < 10) {\r
\r
        inputMin.style.zIndex = pMin > 50 ? "5" : "3";\r
        inputMax.style.zIndex = pMin > 50 ? "3" : "5";\r
\r
      } else {\r
\r
        inputMin.style.zIndex = "";\r
        inputMax.style.zIndex = "";\r
\r
      }\r
\r
      /* Active steps */\r
\r
      stepEls.forEach((el) => {\r
\r
        const sv = parseFloat(el.dataset.value);\r
\r
        el.classList.toggle(\r
          "is-active",\r
          sv >= vMin && sv <= vMax\r
        );\r
\r
      });\r
\r
    };\r
\r
    inputMin.addEventListener("input", update);\r
    inputMax.addEventListener("input", update);\r
\r
    update();\r
\r
  });\r
\r
});\r
\r
\r
/* ========================================================= context alert js ========================================================= */\r
/* Trigger Toast alerts via data attributes */\r
window.ux4gCustomInitList = window.ux4gCustomInitList || []; window.ux4gCustomInitList.push(() => {\r
  document.querySelectorAll('[data-ux4g-toggle="toast"]').forEach(btn => {\r
    btn.addEventListener('click', () => {\r
      const position = btn.dataset.ux4gPosition || 'top-right';\r
      const variant = btn.dataset.ux4gVariant || btn.dataset.ux4gStatus;\r
      const title = btn.dataset.ux4gTitle;\r
      const body = btn.dataset.ux4gBody;\r
      showContextAlert(position, variant, title, body);\r
    });\r
  });\r
});\r
\r
let alertCount = 0;\r
\r
/**\r
 * Shows a Context Alert (Toast) in the specified position with animation\r
 * @param {string} position - 'top-left', 'top-right', 'bottom-left', or 'bottom-right'\r
 * @param {string} [variant] - Optional: 'info', 'success', 'warning', 'error', 'none'\r
 * @param {string} [customTitle] - Optional custom title text\r
 * @param {string} [customBody] - Optional custom body text\r
 */\r
function showContextAlert(position, variant, customTitle, customBody) {\r
  const statuses = {\r
    'info': { icon: 'info', title: 'Info ' },\r
    'success': { icon: 'check_circle', title: 'Success ' },\r
    'warning': { icon: 'warning', title: 'Warning ' },\r
    'error': { icon: 'error', title: 'Error ' },\r
    'none': { icon: null, title: 'Alert Title' }\r
  };\r
\r
  // Determine type (use variant, or cycle through if not provided)\r
  const types = Object.keys(statuses).filter(t => t !== 'none');\r
  const type = variant || types[alertCount++ % types.length];\r
  const status = statuses[type] || statuses['info'];\r
\r
  const title = customTitle || status.title;\r
  const bodyText = customBody || \`This is a \${type} alert shown at the \${position.replace('-', ' ')} corner.\`;\r
\r
  const containerId = \`ux4g-alert-container-\${position}\`;\r
  let container = document.getElementById(containerId);\r
\r
  if (!container) {\r
    container = document.createElement('div');\r
    container.id = containerId;\r
    container.className = \`ux4g-alert-container ux4g-alert-\${position}\`;\r
    document.body.appendChild(container);\r
  }\r
\r
  const alert = document.createElement('div');\r
  const animationClass = position.includes('left') ? 'ux4g-animate-left' : 'ux4g-animate-right';\r
\r
  // Apply correct status class (fallback to info if variant is 'none' for styling)\r
  const statusClass = type === 'none' ? 'info' : type;\r
  alert.className = \`ux4g-context-alert ux4g-alert-\${statusClass} \${animationClass}\`;\r
\r
  // Icon Logic: None means no icon HTML\r
  const iconHtml = status.icon ? \`<i class="ux4g-icon ux4g-alert-icon">\${status.icon}</i>\` : '';\r
\r
  alert.innerHTML = \`\r
        \${iconHtml}\r
        <span class="ux4g-alert-title">\${title}</span>\r
        <div class="ux4g-alert-actions">\r
            <button class="ux4g-alert-close" onclick="closeContextAlert(this)">\r
                <i class="ux4g-icon">close</i>\r
            </button>\r
        </div>\r
        <div class="ux4g-alert-message">\${bodyText}</div>\r
    \`;\r
\r
  if (position.includes('bottom')) {\r
    container.insertBefore(alert, container.firstChild);\r
  } else {\r
    container.appendChild(alert);\r
  }\r
\r
  setTimeout(() => {\r
    if (alert.parentNode) closeAlertWithAnimation(alert);\r
  }, 5000);\r
}\r
\r
/**\r
 * Handles manual close click\r
 */\r
function closeContextAlert(button) {\r
  const alert = button.closest('.ux4g-context-alert');\r
  if (alert) {\r
    closeAlertWithAnimation(alert);\r
  }\r
}\r
\r
/**\r
 * Closes an alert with a slide-out animation\r
 */\r
function closeAlertWithAnimation(alert) {\r
  if (!alert) return;\r
\r
  const isLeft = alert.classList.contains('ux4g-animate-left');\r
  alert.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';\r
  alert.style.transform = isLeft ? 'translateX(-100%)' : 'translateX(100%)';\r
  alert.style.opacity = '0';\r
\r
  // Remove element after animation completes\r
  setTimeout(() => {\r
    if (alert.parentNode) {\r
      alert.parentNode.removeChild(alert);\r
    }\r
  }, 400);\r
}\r
\r
\r
/* ========================================================= pagination js ========================================================= */\r
window.ux4gCustomInitList = window.ux4gCustomInitList || []; window.ux4gCustomInitList.push(() => {\r
  const pageSelects = document.querySelectorAll(".ux4g-page-size select");\r
\r
  pageSelects.forEach(select => {\r
    const wrapper = select.closest(".ux4g-page-size-select-wrapper");\r
\r
    const updateState = () => {\r
      if (wrapper) {\r
        // If there's a selected option that isn't empty (or for simplicity, any selection)\r
        if (select.value) {\r
          wrapper.classList.add("has-value");\r
        } else {\r
          wrapper.classList.remove("has-value");\r
        }\r
      }\r
    };\r
\r
    select.addEventListener("change", updateState);\r
    // Do not run on load, so we show the placeholder icon by default\r
  });\r
});\r
\r
\r
// NPS and Emoji Button interactions\r
// Using global event delegation so it works seamlessly with dynamic HTML, React, Angular, etc.\r
document.addEventListener('click', (e) => {\r
  // 1. NPS interaction\r
  const npsBtn = e.target.closest('.feedback-nps-button');\r
  if (npsBtn) {\r
    const container = npsBtn.closest('.ux4g-feedback-nps-wrapper') || npsBtn.parentElement;\r
    const siblings = Array.from(container.querySelectorAll('.feedback-nps-button'));\r
    const clickedIndex = siblings.indexOf(npsBtn);\r
\r
    const isHighestActive = npsBtn.classList.contains('active') &&\r
      (clickedIndex === siblings.length - 1 || !siblings[clickedIndex + 1]?.classList.contains('active'));\r
\r
    if (isHighestActive) {\r
      siblings.forEach(s => s.classList.remove('active'));\r
      container.removeAttribute('data-nps-rating');\r
    } else {\r
      container.setAttribute('data-nps-rating', clickedIndex);\r
      siblings.forEach((s, i) => {\r
        if (i <= clickedIndex) {\r
          s.classList.add('active');\r
        } else {\r
          s.classList.remove('active');\r
        }\r
      });\r
    }\r
    return;\r
  }\r
\r
  // 2. Emoji interaction\r
  const emojiBtn = e.target.closest('.feedback-emoji-button');\r
  if (emojiBtn) {\r
    const wasActive = emojiBtn.classList.contains('active');\r
    const container = emojiBtn.closest('.ux4g-d-flex') || document;\r
    container.querySelectorAll('.feedback-emoji-button').forEach(b => b.classList.remove('active'));\r
\r
    if (!wasActive) {\r
      emojiBtn.classList.add('active');\r
    }\r
    return;\r
  }\r
\r
  // 3. Star interaction\r
  const starBtn = e.target.closest('.ux4g-feedback-star');\r
  if (starBtn) {\r
    const container = starBtn.parentElement;\r
    const siblings = Array.from(container.querySelectorAll('.ux4g-feedback-star'));\r
    const clickedIndex = siblings.indexOf(starBtn);\r
\r
    const isOnlyActive = starBtn.classList.contains('active') &&\r
      (clickedIndex === siblings.length - 1 || !siblings[clickedIndex + 1]?.classList.contains('active'));\r
\r
    if (isOnlyActive) {\r
      siblings.forEach(s => s.classList.remove('active'));\r
      container.removeAttribute('data-rating');\r
    } else {\r
      container.setAttribute('data-rating', clickedIndex + 1);\r
      siblings.forEach((s, i) => {\r
        if (i <= clickedIndex) {\r
          s.classList.add('active');\r
        } else {\r
          s.classList.remove('active');\r
        }\r
      });\r
    }\r
\r
    // Toggle Submit button state based on rating\r
    const feedbackCard = starBtn.closest('.ux4g-feedback');\r
    if (feedbackCard) {\r
      const submitBtn = feedbackCard.querySelector('.ux4g-btn-primary');\r
      if (submitBtn) {\r
        const hasRating = container.hasAttribute('data-rating') && container.getAttribute('data-rating') !== '';\r
        if (hasRating) {\r
          submitBtn.removeAttribute('disabled');\r
        } else {\r
          submitBtn.setAttribute('disabled', '');\r
        }\r
      }\r
    }\r
    return;\r
  }\r
\r
  // 4. Submit button showing success card delegator\r
  const submitBtn = e.target.closest('.ux4g-feedback:not(.ux4g-text-center) .ux4g-btn-primary');\r
  if (submitBtn) {\r
    const ratingCard = submitBtn.closest('.ux4g-feedback');\r
    if (ratingCard) {\r
      const container = ratingCard.parentElement;\r
      if (container) {\r
        const successCard = container.querySelector('.ux4g-feedback.ux4g-text-center');\r
        if (successCard) {\r
          e.preventDefault();\r
          ratingCard.style.display = 'none';\r
          successCard.style.display = 'flex';\r
          return;\r
        }\r
      }\r
    }\r
  }\r
\r
  // 5. Close button redirect delegator\r
  const closeBtn = e.target.closest('.feedback-submitted-close-btn');\r
  if (closeBtn) {\r
    e.preventDefault();\r
    window.location.href = './global-service-discovery.html';\r
    return;\r
  }\r
\r
  // 6. Submit and Skip Reset interaction\r
  const resetBtn = e.target.closest('.ux4g-feedback .ux4g-btn-primary, .ux4g-feedback .ux4g-btn-text-primary');\r
  if (resetBtn) {\r
    const feedbackContainer = resetBtn.closest('.ux4g-feedback');\r
    if (feedbackContainer) {\r
      feedbackContainer.querySelectorAll('textarea').forEach(textarea => {\r
        textarea.value = '';\r
      });\r
      feedbackContainer.querySelectorAll('.active').forEach(activeEl => {\r
        activeEl.classList.remove('active');\r
      });\r
    }\r
  }\r
});\r
\r
// rating enabled btn js\r
window.ux4gCustomInitList = window.ux4gCustomInitList || []; window.ux4gCustomInitList.push(() => {\r
  // Initialize all feedback cards' submit buttons on load/open\r
  const syncAllFeedbackSubmitButtons = () => {\r
    document.querySelectorAll('.ux4g-feedback').forEach(feedbackCard => {\r
      const starContainer = feedbackCard.querySelector('[data-rating]');\r
      const submitBtn = feedbackCard.querySelector('.ux4g-btn-primary');\r
      if (submitBtn) {\r
        const hasRating = starContainer && starContainer.hasAttribute('data-rating') && starContainer.getAttribute('data-rating') !== '';\r
        if (hasRating) {\r
          submitBtn.removeAttribute('disabled');\r
        } else {\r
          submitBtn.setAttribute('disabled', '');\r
        }\r
      }\r
    });\r
  };\r
\r
  syncAllFeedbackSubmitButtons();\r
\r
  // Also sync when modals/popups are shown/opened\r
  document.addEventListener('click', (e) => {\r
    const trigger = e.target.closest('[data-modal-target], [data-target], .open-modal-btn, .modal-backdrop-btn-trigger');\r
    if (trigger) {\r
      setTimeout(syncAllFeedbackSubmitButtons, 300);\r
    }\r
  });\r
});\r
\r
\r
/* ========================================================= carousel js ========================================================= */\r
window.ux4gCustomInitList = window.ux4gCustomInitList || []; window.ux4gCustomInitList.push(() => {\r
  const carousels = document.querySelectorAll(".ux4g-carousel");\r
\r
  carousels.forEach(carousel => {\r
    const slidesContainer = carousel.querySelector(".ux4g-carousel-slides");\r
    const slides = carousel.querySelectorAll(".ux4g-carousel-slide");\r
    const slideCount = slides.length;\r
    const prevBtn = carousel.querySelector(".ux4g-carousel-arrow-prev");\r
    const nextBtn = carousel.querySelector(".ux4g-carousel-arrow-next");\r
    const dots = carousel.querySelectorAll(".ux4g-carousel-dot");\r
\r
    if (slideCount === 0) return;\r
\r
    let currentIndex = 0;\r
\r
    // Initialize: find if any slide is already marked as active\r
    slides.forEach((slide, index) => {\r
      if (slide.classList.contains("is-active")) {\r
        currentIndex = index;\r
      }\r
    });\r
\r
    const updateCarousel = (index) => {\r
      // Handle looping\r
      if (index < 0) {\r
        index = slideCount - 1;\r
      } else if (index >= slideCount) {\r
        index = 0;\r
      }\r
\r
      currentIndex = index;\r
\r
      // Move slides\r
      if (slidesContainer) {\r
        slidesContainer.style.transform = \`translateX(-\${currentIndex * 100}%)\`;\r
      }\r
\r
      // Update slides active state\r
      slides.forEach((slide, i) => {\r
        slide.classList.toggle("is-active", i === currentIndex);\r
        slide.setAttribute("aria-hidden", i !== currentIndex);\r
      });\r
\r
      // Update dots active state\r
      dots.forEach((dot, i) => {\r
        dot.classList.toggle("is-active", i === currentIndex);\r
        dot.setAttribute("aria-current", i === currentIndex ? "step" : "false");\r
      });\r
    };\r
\r
    // Event Listeners\r
    if (prevBtn) {\r
      prevBtn.addEventListener("click", (e) => {\r
        e.preventDefault();\r
        updateCarousel(currentIndex - 1);\r
      });\r
    }\r
\r
    if (nextBtn) {\r
      nextBtn.addEventListener("click", (e) => {\r
        e.preventDefault();\r
        updateCarousel(currentIndex + 1);\r
      });\r
    }\r
\r
    dots.forEach((dot, index) => {\r
      dot.addEventListener("click", (e) => {\r
        e.preventDefault();\r
        updateCarousel(index);\r
      });\r
    });\r
\r
    // Initial update to ensure everything is synced\r
    updateCarousel(currentIndex);\r
  });\r
});\r
\r
/* ========================================================= range slider js ========================================================= */\r
document.addEventListener("input", (e) => {\r
  if (e.target.classList.contains("ux4g-slider-input")) {\r
    const sliderField = e.target.closest(".ux4g-slider-field");\r
    const slider = e.target.closest(".ux4g-slider");\r
    if (!slider) return;\r
\r
    const isDual = slider.classList.contains("ux4g-slider-dual");\r
    const fill = slider.querySelector(".ux4g-slider-fill");\r
\r
    if (!isDual) {\r
      const thumb = slider.querySelector(".ux4g-slider-thumb");\r
      const percent = ((e.target.value - e.target.min) / (e.target.max - e.target.min)) * 100;\r
      if (fill) fill.style.width = percent + "%";\r
      if (thumb) thumb.style.left = percent + "%";\r
\r
      if (sliderField) {\r
        const badge = sliderField.querySelector(".ux4g-slider-value-badge");\r
        if (badge) badge.textContent = e.target.value + "%";\r
      }\r
    } else {\r
      const inputMin = slider.querySelector(".ux4g-slider-input-min");\r
      const inputMax = slider.querySelector(".ux4g-slider-input-max");\r
      const thumbMin = slider.querySelector(".ux4g-slider-thumb-min");\r
      const thumbMax = slider.querySelector(".ux4g-slider-thumb-max");\r
\r
      let min = parseFloat(inputMin.value);\r
      let max = parseFloat(inputMax.value);\r
      const rangeMin = parseFloat(inputMin.min);\r
      const rangeMax = parseFloat(inputMin.max);\r
\r
      if (e.target.classList.contains("ux4g-slider-input-min")) {\r
        if (min > max) {\r
          min = max;\r
          inputMin.value = min;\r
        }\r
      } else {\r
        if (max < min) {\r
          max = min;\r
          inputMax.value = max;\r
        }\r
      }\r
\r
      const left = ((min - rangeMin) / (rangeMax - rangeMin)) * 100;\r
      const width = ((max - min) / (rangeMax - rangeMin)) * 100;\r
\r
      if (fill) {\r
        fill.style.left = left + "%";\r
        fill.style.width = width + "%";\r
      }\r
      if (thumbMin) thumbMin.style.left = left + "%";\r
      if (thumbMax) thumbMax.style.left = (left + width) + "%";\r
\r
      if (sliderField) {\r
        const badges = sliderField.querySelectorAll(".ux4g-slider-value-badge");\r
        if (badges.length >= 2) {\r
          badges[0].textContent = min + "%";\r
          badges[1].textContent = max + "%";\r
        }\r
      }\r
    }\r
  }\r
});\r
\r
\r
/********************************* UX4G DatePicker & TimePicker JS ***********************************/\r
\r
(function (global) {\r
  "use strict";\r
\r
  const makeKeyboardClickable = (el) => {\r
    if (!el) return;\r
    if (el.tagName !== 'BUTTON' && el.tagName !== 'INPUT') {\r
      if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');\r
      el.addEventListener('keydown', (e) => {\r
        if (e.key === 'Enter' || e.key === ' ') {\r
          e.preventDefault();\r
          el.click();\r
        }\r
      });\r
    }\r
  };\r
\r
  // Shared Backdrop\r
  let backdrop = document.querySelector('.ux4g-date-picker-backdrop');\r
  const getBackdrop = () => {\r
    if (!backdrop) {\r
      backdrop = document.createElement('div');\r
      backdrop.className = 'ux4g-date-picker-backdrop';\r
      document.body.appendChild(backdrop);\r
    }\r
    return backdrop;\r
  };\r
\r
  const isMobile = () => window.innerWidth <= 576;\r
\r
  const adjustDropdownPosition = (dropdown, container) => {\r
    if (!dropdown || !container) return;\r
    dropdown.style.top = '';\r
    dropdown.style.bottom = '';\r
    dropdown.style.left = '';\r
    dropdown.style.right = '';\r
    dropdown.style.marginTop = '';\r
    dropdown.style.marginBottom = '';\r
    const containerRect = container.getBoundingClientRect();\r
    const dropdownRect = dropdown.getBoundingClientRect();\r
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;\r
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;\r
    const spaceBelow = windowHeight - containerRect.bottom;\r
    const spaceAbove = containerRect.top;\r
    if (spaceBelow < dropdownRect.height && spaceAbove > spaceBelow) {\r
      dropdown.style.top = 'auto';\r
      dropdown.style.bottom = '100%';\r
      dropdown.style.marginBottom = '4px';\r
    }\r
    if (containerRect.left + dropdownRect.width > windowWidth) {\r
      dropdown.style.left = 'auto';\r
      dropdown.style.right = '0';\r
    }\r
  };\r
\r
  class DatePicker {\r
    constructor(container) {\r
      this.container = container;\r
      this.input = container.querySelector('.ux4g-date-picker-input');\r
      this.dropdown = container.querySelector('.ux4g-date-picker-dropdown');\r
      this.calendarGrid = container.querySelector('.ux4g-date-picker-grid');\r
      this.monthLabel = container.querySelector('.ux4g-date-picker-current');\r
\r
      const navBtns = container.querySelectorAll('.ux4g-date-picker-nav-btn');\r
      this.prevBtn = navBtns[0];\r
      this.nextBtn = navBtns[1];\r
\r
      this.confirmBtn = container.querySelector('.ux4g-btn-primary');\r
      this.cancelBtn = container.querySelector('.ux4g-btn-outline-neutral');\r
\r
      this.currentDate = new Date();\r
      this.viewDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);\r
      this.selectedDate = null;\r
      this.tempSelectedDate = null;\r
\r
      this.isSelectingYearMonth = false;\r
\r
      this._init();\r
    }\r
\r
    _init() {\r
      if (!this.input || !this.dropdown) return;\r
\r
      if (this.input.value) {\r
        const parts = this.input.value.split('/');\r
        if (parts.length === 3) {\r
          this.selectedDate = new Date(parts[2], parts[1] - 1, parts[0]);\r
          this.viewDate = new Date(parts[2], parts[1] - 1, 1);\r
          this.tempSelectedDate = new Date(this.selectedDate);\r
        }\r
      }\r
\r
      // Keyboard accessibility\r
      this.input.addEventListener('keydown', (e) => {\r
        if (e.key === 'Enter' || e.key === ' ') {\r
          e.preventDefault();\r
          this.open();\r
        }\r
      });\r
\r
      this.input.addEventListener('focus', (e) => {\r
        this.open();\r
      });\r
\r
      this.input.addEventListener('click', (e) => {\r
        e.stopPropagation();\r
        this.open();\r
      });\r
\r
      if (this.prevBtn) {\r
        makeKeyboardClickable(this.prevBtn);\r
        this.prevBtn.addEventListener('click', (e) => {\r
          e.stopPropagation();\r
          if (this.isSelectingYearMonth) {\r
            this.changeYearRange(-8);\r
          } else {\r
            this.changeMonth(-1);\r
          }\r
        });\r
      }\r
\r
      if (this.nextBtn) {\r
        makeKeyboardClickable(this.nextBtn);\r
        this.nextBtn.addEventListener('click', (e) => {\r
          e.stopPropagation();\r
          if (this.isSelectingYearMonth) {\r
            this.changeYearRange(8);\r
          } else {\r
            this.changeMonth(1);\r
          }\r
        });\r
      }\r
\r
      if (this.monthLabel) {\r
        makeKeyboardClickable(this.monthLabel);\r
        this.monthLabel.addEventListener('click', (e) => {\r
          e.stopPropagation();\r
          this.isSelectingYearMonth = !this.isSelectingYearMonth;\r
          this.render();\r
          setTimeout(() => {\r
            if (this.isSelectingYearMonth) {\r
              const calendarContainer = this.container.querySelector('.ux4g-date-picker-calendar');\r
              let el = calendarContainer.querySelector('.ux4g-date-picker-year-item.is-selected') || calendarContainer.querySelector('.ux4g-date-picker-year-item');\r
              if (el) el.focus();\r
            } else {\r
              let el = this.calendarGrid.querySelector('.is-selected') || this.calendarGrid.querySelector('.is-today') || this.calendarGrid.querySelector('.ux4g-date-picker-day:not(.is-muted)');\r
              if (el) el.focus();\r
            }\r
          }, 0);\r
        });\r
      }\r
\r
      if (this.confirmBtn) {\r
        makeKeyboardClickable(this.confirmBtn);\r
        this.confirmBtn.addEventListener('click', (e) => {\r
          e.stopPropagation();\r
          if (this.isSelectingYearMonth) {\r
            this.isSelectingYearMonth = false;\r
            this.render();\r
            setTimeout(() => {\r
              let el = this.calendarGrid.querySelector('.is-selected') || this.calendarGrid.querySelector('.is-today') || this.calendarGrid.querySelector('.ux4g-date-picker-day:not(.is-muted)');\r
              if (el) el.focus();\r
            }, 0);\r
          } else {\r
            this.confirmSelection();\r
          }\r
        });\r
      }\r
\r
      if (this.cancelBtn) {\r
        makeKeyboardClickable(this.cancelBtn);\r
        this.cancelBtn.addEventListener('click', (e) => {\r
          e.stopPropagation();\r
          this.cancelSelection();\r
        });\r
      }\r
\r
      document.addEventListener('click', (e) => {\r
        if (!this.container.contains(e.target) && !getBackdrop().contains(e.target)) {\r
          this.close();\r
        }\r
      });\r
\r
      getBackdrop().addEventListener('click', () => {\r
        this.close();\r
      });\r
\r
      this.render();\r
    }\r
\r
    open() {\r
      if (this.dropdown) {\r
        this.tempSelectedDate = this.selectedDate ? new Date(this.selectedDate) : null;\r
        this.isSelectingYearMonth = false;\r
        this.dropdown.classList.add('is-open');\r
        if (isMobile()) {\r
          getBackdrop().classList.add('is-active');\r
          document.body.style.overflow = 'hidden';\r
        } else {\r
          adjustDropdownPosition(this.dropdown, this.container);\r
        }\r
        this.render();\r
      }\r
    }\r
\r
    close() {\r
      if (this.dropdown) {\r
        this.dropdown.classList.remove('is-open');\r
        getBackdrop().classList.remove('is-active');\r
        document.body.style.overflow = '';\r
      }\r
    }\r
\r
    confirmSelection() {\r
      this.selectedDate = this.tempSelectedDate ? new Date(this.tempSelectedDate) : null;\r
      if (this.selectedDate) {\r
        const day = String(this.selectedDate.getDate()).padStart(2, '0');\r
        const month = String(this.selectedDate.getMonth() + 1).padStart(2, '0');\r
        const year = this.selectedDate.getFullYear();\r
        this.input.value = \`\${day}/\${month}/\${year}\`;\r
      } else {\r
        this.input.value = '';\r
      }\r
      this.close();\r
    }\r
\r
    cancelSelection() {\r
      this.tempSelectedDate = this.selectedDate ? new Date(this.selectedDate) : null;\r
      this.close();\r
    }\r
\r
    changeMonth(delta) {\r
      this.viewDate.setMonth(this.viewDate.getMonth() + delta);\r
      this.render();\r
    }\r
\r
    changeYearRange(delta) {\r
      this.viewDate.setFullYear(this.viewDate.getFullYear() + delta);\r
      this.render();\r
    }\r
\r
    render() {\r
      if (this.isSelectingYearMonth) {\r
        this.renderYearMonthSelection();\r
      } else {\r
        this.renderCalendar();\r
      }\r
    }\r
\r
    renderCalendar() {\r
      const year = this.viewDate.getFullYear();\r
      const month = this.viewDate.getMonth();\r
      const monthNames = ["January", "February", "March", "April", "May", "June",\r
        "July", "August", "September", "October", "November", "December"\r
      ];\r
\r
      if (this.monthLabel) {\r
        this.monthLabel.innerHTML = \`\${monthNames[month]} \${year} <span class="ux4g-icon-outlined ux4g-fs-18">keyboard_arrow_down</span>\`;\r
      }\r
\r
      const calendarHtml = \`\r
                <div class="ux4g-date-picker-weekdays">\r
                    <div class="ux4g-date-picker-weekday">Mo</div>\r
                    <div class="ux4g-date-picker-weekday">Tu</div>\r
                    <div class="ux4g-date-picker-weekday">We</div>\r
                    <div class="ux4g-date-picker-weekday">Th</div>\r
                    <div class="ux4g-date-picker-weekday">Fr</div>\r
                    <div class="ux4g-date-picker-weekday">Sa</div>\r
                    <div class="ux4g-date-picker-weekday">Su</div>\r
                </div>\r
                <div class="ux4g-date-picker-grid"></div>\r
            \`;\r
\r
      const calendarContainer = this.container.querySelector('.ux4g-date-picker-calendar');\r
      calendarContainer.innerHTML = calendarHtml;\r
      this.calendarGrid = calendarContainer.querySelector('.ux4g-date-picker-grid');\r
\r
      const firstDayOfMonth = new Date(year, month, 1).getDay();\r
      const daysInMonth = new Date(year, month + 1, 0).getDate();\r
      let startDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;\r
      const prevMonthLastDay = new Date(year, month, 0).getDate();\r
\r
      let html = '';\r
      for (let i = startDay - 1; i >= 0; i--) {\r
        html += \`<div class="ux4g-date-picker-day is-muted">\${prevMonthLastDay - i}</div>\`;\r
      }\r
\r
      for (let i = 1; i <= daysInMonth; i++) {\r
        const date = new Date(year, month, i);\r
        const isToday = date.toDateString() === this.currentDate.toDateString();\r
        const isSelected = this.tempSelectedDate && date.toDateString() === this.tempSelectedDate.toDateString();\r
\r
        let classes = 'ux4g-date-picker-day';\r
        if (isToday) classes += ' is-today';\r
        if (isSelected) classes += ' is-selected';\r
\r
        html += \`<div class="\${classes}" data-date="\${i}" tabindex="0">\${i}</div>\`;\r
      }\r
\r
      const totalCells = 42;\r
      const remainingCells = totalCells - (startDay + daysInMonth);\r
      for (let i = 1; i <= remainingCells; i++) {\r
        html += \`<div class="ux4g-date-picker-day is-muted">\${i}</div>\`;\r
      }\r
\r
      this.calendarGrid.innerHTML = html;\r
      this.calendarGrid.querySelectorAll('.ux4g-date-picker-day:not(.is-muted)').forEach(dayEl => {\r
        makeKeyboardClickable(dayEl);\r
        dayEl.addEventListener('click', (e) => {\r
          e.stopPropagation();\r
          const day = e.target.dataset.date;\r
          this.selectDate(new Date(year, month, day));\r
        });\r
      });\r
\r
      if (this.confirmBtn) {\r
        this.confirmBtn.innerHTML = 'Confirm';\r
        this.confirmBtn.disabled = !this.tempSelectedDate;\r
      }\r
    }\r
\r
    renderYearMonthSelection() {\r
      const currentYear = this.viewDate.getFullYear();\r
      const startYear = Math.floor(currentYear / 8) * 8;\r
      const endYear = startYear + 7;\r
\r
      if (this.monthLabel) {\r
        this.monthLabel.innerHTML = \`\${startYear}-\${endYear} <span class="ux4g-icon-outlined ux4g-fs-18">keyboard_arrow_down</span>\`;\r
      }\r
\r
      let html = '<div class="ux4g-date-picker-selection-view">';\r
      html += '<div class="ux4g-date-picker-year-grid">';\r
      for (let y = startYear; y <= endYear; y++) {\r
        const isSelected = y === this.viewDate.getFullYear();\r
        html += \`<div class="ux4g-date-picker-year-item \${isSelected ? 'is-selected' : ''}" data-year="\${y}" tabindex="0">\${y}</div>\`;\r
      }\r
      html += '</div>';\r
\r
      const monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];\r
      html += '<div class="ux4g-date-picker-month-grid">';\r
      monthNamesShort.forEach((m, i) => {\r
        const isSelected = i === this.viewDate.getMonth();\r
        html += \`<div class="ux4g-date-picker-month-item \${isSelected ? 'is-selected' : ''}" data-month="\${i}" tabindex="0">\${m}</div>\`;\r
      });\r
      html += '</div></div>';\r
\r
      const calendarContainer = this.container.querySelector('.ux4g-date-picker-calendar');\r
      calendarContainer.innerHTML = html;\r
\r
      calendarContainer.querySelectorAll('.ux4g-date-picker-year-item').forEach(el => {\r
        makeKeyboardClickable(el);\r
        el.addEventListener('click', (e) => {\r
          e.stopPropagation();\r
          this.viewDate.setFullYear(parseInt(e.target.dataset.year));\r
          this.renderYearMonthSelection();\r
          setTimeout(() => {\r
            const selectedMonth = this.container.querySelector('.ux4g-date-picker-month-item.is-selected');\r
            if (selectedMonth) selectedMonth.focus();\r
          }, 0);\r
        });\r
      });\r
\r
      calendarContainer.querySelectorAll('.ux4g-date-picker-month-item').forEach(el => {\r
        makeKeyboardClickable(el);\r
        el.addEventListener('click', (e) => {\r
          e.stopPropagation();\r
          this.viewDate.setMonth(parseInt(e.target.dataset.month));\r
          this.renderYearMonthSelection();\r
          if (this.confirmBtn) setTimeout(() => this.confirmBtn.focus(), 0);\r
        });\r
      });\r
\r
      if (this.confirmBtn) {\r
        this.confirmBtn.innerHTML = 'Select date';\r
        this.confirmBtn.disabled = false;\r
      }\r
    }\r
\r
    selectDate(date) {\r
      this.tempSelectedDate = date;\r
      this.render();\r
      if (this.confirmBtn && !this.confirmBtn.disabled) {\r
        setTimeout(() => this.confirmBtn.focus(), 0);\r
      }\r
    }\r
  }\r
\r
  class RangeDatePicker {\r
    constructor(container) {\r
      this.container = container;\r
      this.inputs = container.querySelectorAll('.ux4g-date-picker-input');\r
      this.dropdown = container.querySelector('.ux4g-date-picker-dropdown');\r
      this.calendarGrid = container.querySelector('.ux4g-date-picker-grid');\r
      this.monthLabel = container.querySelector('.ux4g-date-picker-current');\r
\r
      const navBtns = container.querySelectorAll('.ux4g-date-picker-nav-btn');\r
      this.prevBtn = navBtns[0];\r
      this.nextBtn = navBtns[1];\r
\r
      this.confirmBtn = container.querySelector('.ux4g-btn-primary');\r
      this.cancelBtn = container.querySelector('.ux4g-btn-outline-neutral');\r
\r
      this.currentDate = new Date();\r
      this.viewDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);\r
      this.startDate = null;\r
      this.endDate = null;\r
      this.tempStartDate = null;\r
      this.tempEndDate = null;\r
      this.selectingEnd = false;\r
      this.isSelectingYearMonth = false;\r
\r
      this._init();\r
    }\r
\r
    _init() {\r
      if (!this.inputs.length || !this.dropdown) return;\r
\r
      this.inputs.forEach(input => {\r
        // Keyboard accessibility\r
        input.addEventListener('keydown', (e) => {\r
          if (e.key === 'Enter' || e.key === ' ') {\r
            e.preventDefault();\r
            this.open();\r
          }\r
        });\r
\r
        input.addEventListener('focus', (e) => {\r
          this.open();\r
        });\r
\r
        input.addEventListener('click', (e) => {\r
          e.stopPropagation();\r
          this.open();\r
        });\r
      });\r
\r
      if (this.prevBtn) {\r
        makeKeyboardClickable(this.prevBtn);\r
        this.prevBtn.addEventListener('click', (e) => {\r
          e.stopPropagation();\r
          if (this.isSelectingYearMonth) {\r
            this.changeYearRange(-8);\r
          } else {\r
            this.changeMonth(-1);\r
          }\r
        });\r
      }\r
\r
      if (this.nextBtn) {\r
        makeKeyboardClickable(this.nextBtn);\r
        this.nextBtn.addEventListener('click', (e) => {\r
          e.stopPropagation();\r
          if (this.isSelectingYearMonth) {\r
            this.changeYearRange(8);\r
          } else {\r
            this.changeMonth(1);\r
          }\r
        });\r
      }\r
\r
      if (this.monthLabel) {\r
        makeKeyboardClickable(this.monthLabel);\r
        this.monthLabel.addEventListener('click', (e) => {\r
          e.stopPropagation();\r
          this.isSelectingYearMonth = !this.isSelectingYearMonth;\r
          this.render();\r
          setTimeout(() => {\r
            if (this.isSelectingYearMonth) {\r
              const calendarContainer = this.container.querySelector('.ux4g-date-picker-calendar');\r
              let el = calendarContainer.querySelector('.ux4g-date-picker-year-item.is-selected') || calendarContainer.querySelector('.ux4g-date-picker-year-item');\r
              if (el) el.focus();\r
            } else {\r
              let el = this.calendarGrid.querySelector('.is-range-start') || this.calendarGrid.querySelector('.is-selected') || this.calendarGrid.querySelector('.is-today') || this.calendarGrid.querySelector('.ux4g-date-picker-day:not(.is-muted)');\r
              if (el) el.focus();\r
            }\r
          }, 0);\r
        });\r
      }\r
\r
      if (this.confirmBtn) {\r
        makeKeyboardClickable(this.confirmBtn);\r
        this.confirmBtn.addEventListener('click', (e) => {\r
          e.stopPropagation();\r
          if (this.isSelectingYearMonth) {\r
            this.isSelectingYearMonth = false;\r
            this.render();\r
            setTimeout(() => {\r
              let el = this.calendarGrid.querySelector('.is-range-start') || this.calendarGrid.querySelector('.is-selected') || this.calendarGrid.querySelector('.is-today') || this.calendarGrid.querySelector('.ux4g-date-picker-day:not(.is-muted)');\r
              if (el) el.focus();\r
            }, 0);\r
          } else {\r
            this.confirmSelection();\r
          }\r
        });\r
      }\r
\r
      if (this.cancelBtn) {\r
        this.cancelBtn.addEventListener('click', (e) => {\r
          e.stopPropagation();\r
          this.cancelSelection();\r
        });\r
      }\r
\r
      document.addEventListener('click', (e) => {\r
        if (!this.container.contains(e.target) && !getBackdrop().contains(e.target)) {\r
          this.close();\r
        }\r
      });\r
\r
      getBackdrop().addEventListener('click', () => {\r
        this.close();\r
      });\r
\r
      this.render();\r
    }\r
\r
    open() {\r
      if (this.dropdown) {\r
        this.tempStartDate = this.startDate ? new Date(this.startDate) : null;\r
        this.tempEndDate = this.endDate ? new Date(this.endDate) : null;\r
        this.selectingEnd = this.tempStartDate && !this.tempEndDate;\r
        this.isSelectingYearMonth = false;\r
        this.dropdown.classList.add('is-open');\r
        if (isMobile()) {\r
          getBackdrop().classList.add('is-active');\r
          document.body.style.overflow = 'hidden';\r
        } else {\r
          adjustDropdownPosition(this.dropdown, this.container);\r
        }\r
        this.render();\r
      }\r
    }\r
\r
    close() {\r
      if (this.dropdown) {\r
        this.dropdown.classList.remove('is-open');\r
        getBackdrop().classList.remove('is-active');\r
        document.body.style.overflow = '';\r
      }\r
    }\r
\r
    confirmSelection() {\r
      this.startDate = this.tempStartDate ? new Date(this.tempStartDate) : null;\r
      this.endDate = this.tempEndDate ? new Date(this.tempEndDate) : null;\r
      this.updateInputs();\r
      this.close();\r
    }\r
\r
    cancelSelection() {\r
      this.tempStartDate = this.startDate ? new Date(this.tempStartDate) : null;\r
      this.tempEndDate = this.endDate ? new Date(this.endDate) : null;\r
      this.close();\r
    }\r
\r
    changeMonth(delta) {\r
      this.viewDate.setMonth(this.viewDate.getMonth() + delta);\r
      this.render();\r
    }\r
\r
    changeYearRange(delta) {\r
      this.viewDate.setFullYear(this.viewDate.getFullYear() + delta);\r
      this.render();\r
    }\r
\r
    render() {\r
      if (this.isSelectingYearMonth) {\r
        this.renderYearMonthSelection();\r
      } else {\r
        this.renderCalendar();\r
      }\r
    }\r
\r
    renderCalendar() {\r
      const year = this.viewDate.getFullYear();\r
      const month = this.viewDate.getMonth();\r
      const monthNames = ["January", "February", "March", "April", "May", "June",\r
        "July", "August", "September", "October", "November", "December"\r
      ];\r
\r
      if (this.monthLabel) {\r
        this.monthLabel.innerHTML = \`\${monthNames[month]} \${year} <span class="ux4g-icon-outlined ux4g-fs-18">keyboard_arrow_down</span>\`;\r
      }\r
\r
      const calendarHtml = \`\r
                <div class="ux4g-date-picker-weekdays">\r
                    <div class="ux4g-date-picker-weekday">Mo</div>\r
                    <div class="ux4g-date-picker-weekday">Tu</div>\r
                    <div class="ux4g-date-picker-weekday">We</div>\r
                    <div class="ux4g-date-picker-weekday">Th</div>\r
                    <div class="ux4g-date-picker-weekday">Fr</div>\r
                    <div class="ux4g-date-picker-weekday">Sa</div>\r
                    <div class="ux4g-date-picker-weekday">Su</div>\r
                </div>\r
                <div class="ux4g-date-picker-grid"></div>\r
            \`;\r
\r
      const calendarContainer = this.container.querySelector('.ux4g-date-picker-calendar');\r
      calendarContainer.innerHTML = calendarHtml;\r
      this.calendarGrid = calendarContainer.querySelector('.ux4g-date-picker-grid');\r
\r
      const firstDayOfMonth = new Date(year, month, 1).getDay();\r
      const daysInMonth = new Date(year, month + 1, 0).getDate();\r
      let startDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;\r
      const prevMonthLastDay = new Date(year, month, 0).getDate();\r
\r
      let html = '';\r
      for (let i = startDay - 1; i >= 0; i--) {\r
        html += \`<div class="ux4g-date-picker-day is-muted">\${prevMonthLastDay - i}</div>\`;\r
      }\r
\r
      for (let i = 1; i <= daysInMonth; i++) {\r
        const date = new Date(year, month, i);\r
        const isToday = date.toDateString() === this.currentDate.toDateString();\r
\r
        let classes = 'ux4g-date-picker-day';\r
        if (isToday) classes += ' is-today';\r
\r
        if (this.tempStartDate && date.toDateString() === this.tempStartDate.toDateString()) {\r
          classes += ' is-selected is-range-start';\r
        } else if (this.tempEndDate && date.toDateString() === this.tempEndDate.toDateString()) {\r
          classes += ' is-selected is-range-end';\r
        } else if (this.tempStartDate && this.tempEndDate && date > this.tempStartDate && date < this.tempEndDate) {\r
          classes += ' is-in-range';\r
        }\r
\r
        html += \`<div class="\${classes}" data-date="\${i}" tabindex="0">\${i}</div>\`;\r
      }\r
\r
      const totalCells = 42;\r
      const remainingCells = totalCells - (startDay + daysInMonth);\r
      for (let i = 1; i <= remainingCells; i++) {\r
        html += \`<div class="ux4g-date-picker-day is-muted">\${i}</div>\`;\r
      }\r
\r
      this.calendarGrid.innerHTML = html;\r
      this.calendarGrid.querySelectorAll('.ux4g-date-picker-day:not(.is-muted)').forEach(dayEl => {\r
        makeKeyboardClickable(dayEl);\r
        dayEl.addEventListener('click', (e) => {\r
          e.stopPropagation();\r
          const day = e.target.dataset.date;\r
          this.handleDateSelection(new Date(year, month, day));\r
        });\r
      });\r
\r
      if (this.confirmBtn) {\r
        this.confirmBtn.innerHTML = 'Confirm';\r
        this.confirmBtn.disabled = !this.tempStartDate || !this.tempEndDate;\r
      }\r
    }\r
\r
    renderYearMonthSelection() {\r
      const currentYear = this.viewDate.getFullYear();\r
      const startYear = Math.floor(currentYear / 8) * 8;\r
      const endYear = startYear + 7;\r
\r
      if (this.monthLabel) {\r
        this.monthLabel.innerHTML = \`\${startYear}-\${endYear} <span class="ux4g-icon-outlined ux4g-fs-18">keyboard_arrow_down</span>\`;\r
      }\r
\r
      let html = '<div class="ux4g-date-picker-selection-view">';\r
      html += '<div class="ux4g-date-picker-year-grid">';\r
      for (let y = startYear; y <= endYear; y++) {\r
        const isSelected = y === this.viewDate.getFullYear();\r
        html += \`<div class="ux4g-date-picker-year-item \${isSelected ? 'is-selected' : ''}" data-year="\${y}" tabindex="0">\${y}</div>\`;\r
      }\r
      html += '</div>';\r
\r
      const monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];\r
      html += '<div class="ux4g-date-picker-month-grid">';\r
      monthNamesShort.forEach((m, i) => {\r
        const isSelected = i === this.viewDate.getMonth();\r
        html += \`<div class="ux4g-date-picker-month-item \${isSelected ? 'is-selected' : ''}" data-month="\${i}" tabindex="0">\${m}</div>\`;\r
      });\r
      html += '</div></div>';\r
\r
      const calendarContainer = this.container.querySelector('.ux4g-date-picker-calendar');\r
      calendarContainer.innerHTML = html;\r
\r
      calendarContainer.querySelectorAll('.ux4g-date-picker-year-item').forEach(el => {\r
        makeKeyboardClickable(el);\r
        el.addEventListener('click', (e) => {\r
          e.stopPropagation();\r
          this.viewDate.setFullYear(parseInt(e.target.dataset.year));\r
          this.renderYearMonthSelection();\r
          setTimeout(() => {\r
            const selectedMonth = this.container.querySelector('.ux4g-date-picker-month-item.is-selected');\r
            if (selectedMonth) selectedMonth.focus();\r
          }, 0);\r
        });\r
      });\r
\r
      calendarContainer.querySelectorAll('.ux4g-date-picker-month-item').forEach(el => {\r
        makeKeyboardClickable(el);\r
        el.addEventListener('click', (e) => {\r
          e.stopPropagation();\r
          this.viewDate.setMonth(parseInt(e.target.dataset.month));\r
          this.renderYearMonthSelection();\r
          if (this.confirmBtn) setTimeout(() => this.confirmBtn.focus(), 0);\r
        });\r
      });\r
\r
      if (this.confirmBtn) {\r
        this.confirmBtn.innerHTML = 'Select date';\r
        this.confirmBtn.disabled = false;\r
      }\r
    }\r
\r
    handleDateSelection(date) {\r
      if (!this.tempStartDate || (this.tempStartDate && this.tempEndDate)) {\r
        this.tempStartDate = date;\r
        this.tempEndDate = null;\r
        this.selectingEnd = true;\r
      } else if (this.selectingEnd) {\r
        if (date < this.tempStartDate) {\r
          this.tempEndDate = this.tempStartDate;\r
          this.tempStartDate = date;\r
        } else {\r
          this.tempEndDate = date;\r
        }\r
        this.selectingEnd = false;\r
      }\r
      this.render();\r
      if (!this.selectingEnd && this.confirmBtn && !this.confirmBtn.disabled) {\r
        setTimeout(() => this.confirmBtn.focus(), 0);\r
      } else if (this.selectingEnd) {\r
        setTimeout(() => {\r
          const selectedEl = this.calendarGrid.querySelector('.is-range-start');\r
          if (selectedEl) selectedEl.focus();\r
        }, 0);\r
      }\r
    }\r
\r
    updateInputs() {\r
      if (this.startDate) {\r
        const d = String(this.startDate.getDate()).padStart(2, '0');\r
        const m = String(this.startDate.getMonth() + 1).padStart(2, '0');\r
        const y = this.startDate.getFullYear();\r
        this.inputs[0].value = \`\${d}/\${m}/\${y}\`;\r
      } else {\r
        this.inputs[0].value = '';\r
      }\r
      if (this.endDate) {\r
        const d = String(this.endDate.getDate()).padStart(2, '0');\r
        const m = String(this.endDate.getMonth() + 1).padStart(2, '0');\r
        const y = this.endDate.getFullYear();\r
        this.inputs[1].value = \`\${d}/\${m}/\${y}\`;\r
      } else {\r
        this.inputs[1].value = '';\r
      }\r
    }\r
  }\r
\r
  class TimePicker {\r
    constructor(container) {\r
      this.container = container;\r
      this.input = container.querySelector('.ux4g-time-picker-input');\r
      this.dropdown = container.querySelector('.ux4g-time-picker-dropdown');\r
      this.hhColumn = container.querySelector('[data-column="hh"]');\r
      this.mmColumn = container.querySelector('[data-column="mm"]');\r
      this.ampmBtns = container.querySelectorAll('.ux4g-time-picker-ampm-btn');\r
      this.confirmBtn = container.querySelector('.ux4g-btn-primary');\r
      this.cancelBtn = container.querySelector('.ux4g-btn-outline-neutral');\r
\r
      this.selectedHH = null;\r
      this.selectedMM = null;\r
      this.selectedAMPM = "PM";\r
\r
      this.tempHH = null;\r
      this.tempMM = null;\r
\r
      this._init();\r
    }\r
\r
    _init() {\r
      if (!this.input || !this.dropdown) return;\r
\r
      // Keyboard accessibility\r
      this.input.addEventListener('keydown', (e) => {\r
        if (e.key === 'Enter' || e.key === ' ') {\r
          e.preventDefault();\r
          this.open();\r
        }\r
      });\r
\r
      this.input.addEventListener('focus', (e) => {\r
        this.open();\r
      });\r
\r
      this.input.addEventListener('click', (e) => {\r
        e.stopPropagation();\r
        this.open();\r
      });\r
\r
      this.ampmBtns.forEach(btn => {\r
        makeKeyboardClickable(btn);\r
        btn.addEventListener('click', (e) => {\r
          e.stopPropagation();\r
          this.selectedAMPM = e.target.dataset.value;\r
          this.updateAMPMUI();\r
        });\r
      });\r
\r
      if (this.confirmBtn) {\r
        makeKeyboardClickable(this.confirmBtn);\r
        this.confirmBtn.addEventListener('click', (e) => {\r
          e.stopPropagation();\r
          if (!this.confirmBtn.disabled) {\r
            this.confirmSelection();\r
          }\r
        });\r
      }\r
\r
      if (this.cancelBtn) {\r
        makeKeyboardClickable(this.cancelBtn);\r
        this.cancelBtn.addEventListener('click', (e) => {\r
          e.stopPropagation();\r
          this.close();\r
        });\r
      }\r
\r
      document.addEventListener('click', (e) => {\r
        if (!this.container.contains(e.target) && !getBackdrop().contains(e.target)) {\r
          this.close();\r
        }\r
      });\r
\r
      this.renderColumns();\r
      this.updateAMPMUI();\r
      this.validate();\r
    }\r
\r
    open() {\r
      this.tempHH = this.selectedHH;\r
      this.tempMM = this.selectedMM;\r
\r
      this.dropdown.classList.add('is-open');\r
      if (isMobile()) {\r
        getBackdrop().classList.add('is-active');\r
        document.body.style.overflow = 'hidden';\r
      } else {\r
        adjustDropdownPosition(this.dropdown, this.container);\r
      }\r
\r
      this.renderColumns();\r
      this.scrollToSelected();\r
      this.validate();\r
    }\r
\r
    close() {\r
      this.dropdown.classList.remove('is-open');\r
      getBackdrop().classList.remove('is-active');\r
      document.body.style.overflow = '';\r
    }\r
\r
    validate() {\r
      if (this.confirmBtn) {\r
        this.confirmBtn.disabled = !(this.tempHH && this.tempMM);\r
      }\r
    }\r
\r
    confirmSelection() {\r
      this.selectedHH = this.tempHH;\r
      this.selectedMM = this.tempMM;\r
      this.input.value = \`\${this.selectedHH} : \${this.selectedMM} \${this.selectedAMPM}\`;\r
      this.close();\r
    }\r
\r
    updateAMPMUI() {\r
      this.ampmBtns.forEach(btn => {\r
        btn.classList.toggle('is-active', btn.dataset.value === this.selectedAMPM);\r
      });\r
    }\r
\r
    renderColumns() {\r
      // Hours (1-12)\r
      let hhHtml = '<div class="ux4g-time-picker-col-header">HH</div>';\r
      for (let i = 1; i <= 12; i++) {\r
        const val = String(i).padStart(2, '0');\r
        const isSelected = val === this.tempHH;\r
        hhHtml += \`<div class="ux4g-time-picker-item \${isSelected ? 'is-selected' : ''}" data-value="\${val}" tabindex="0">\${val}</div>\`;\r
      }\r
      this.hhColumn.innerHTML = hhHtml;\r
\r
      // Minutes (0-55, step 5)\r
      let mmHtml = '<div class="ux4g-time-picker-col-header">MM</div>';\r
      for (let i = 0; i < 60; i += 5) {\r
        const val = String(i).padStart(2, '0');\r
        const isSelected = val === this.tempMM;\r
        mmHtml += \`<div class="ux4g-time-picker-item \${isSelected ? 'is-selected' : ''}" data-value="\${val}" tabindex="0">\${val}</div>\`;\r
      }\r
      this.mmColumn.innerHTML = mmHtml;\r
\r
      // Click events\r
      this.hhColumn.querySelectorAll('.ux4g-time-picker-item').forEach(el => {\r
        makeKeyboardClickable(el);\r
        el.addEventListener('click', (e) => {\r
          e.stopPropagation();\r
          this.tempHH = e.target.dataset.value;\r
          this.updateColumnSelection(this.hhColumn, this.tempHH);\r
          this.validate();\r
          if (!this.confirmBtn.disabled) {\r
            setTimeout(() => this.confirmBtn.focus(), 0);\r
          } else if (!this.tempMM) {\r
            const firstMM = this.mmColumn.querySelector('.ux4g-time-picker-item');\r
            if (firstMM) setTimeout(() => firstMM.focus(), 0);\r
          }\r
        });\r
      });\r
\r
      this.mmColumn.querySelectorAll('.ux4g-time-picker-item').forEach(el => {\r
        makeKeyboardClickable(el);\r
        el.addEventListener('click', (e) => {\r
          e.stopPropagation();\r
          this.tempMM = e.target.dataset.value;\r
          this.updateColumnSelection(this.mmColumn, this.tempMM);\r
          this.validate();\r
          if (!this.confirmBtn.disabled) {\r
            setTimeout(() => this.confirmBtn.focus(), 0);\r
          }\r
        });\r
      });\r
    }\r
\r
    updateColumnSelection(column, value) {\r
      column.querySelectorAll('.ux4g-time-picker-item').forEach(el => {\r
        el.classList.toggle('is-selected', el.dataset.value === value);\r
      });\r
    }\r
\r
    scrollToSelected() {\r
      const columns = [this.hhColumn, this.mmColumn];\r
      columns.forEach(col => {\r
        const selected = col.querySelector('.is-selected');\r
        if (selected) {\r
          col.scrollTop = selected.offsetTop - col.offsetTop - 80;\r
        }\r
      });\r
    }\r
  }\r
\r
  const init = () => {\r
    document.querySelectorAll('.ux4g-date-picker-container').forEach(container => {\r
      if (!container.closest('.ux4g-date-range-picker')) new DatePicker(container);\r
    });\r
    document.querySelectorAll('.ux4g-date-range-picker').forEach(container => {\r
      new RangeDatePicker(container);\r
    });\r
    document.querySelectorAll('.ux4g-time-picker-container').forEach(container => {\r
      new TimePicker(container);\r
    });\r
  };\r
\r
  window.ux4gCustomInitList = window.ux4gCustomInitList || [];\r
  window.ux4gCustomInitList.push(init);\r
\r
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);\r
  else init();\r
\r
  global.DatePicker = DatePicker;\r
  global.RangeDatePicker = RangeDatePicker;\r
  global.TimePicker = TimePicker;\r
\r
})(window);\r
\r
\r
/********************************* Time Slot JS ***********************************/\r
\r
class TimeSlotCalendar {\r
    constructor(container) {\r
        this.container = container;\r
        this.calendarGrid = container.querySelector('.ux4g-time-slot-compact-grid');\r
        this.monthLabel = container.querySelector('.ux4g-time-slot-compact-month');\r
        this.slotTitle = container.querySelector('.ux4g-time-slot-compact-desktop-header');\r
        this.slotsList = container.querySelector('.ux4g-time-slot-compact-list');\r
        this.confirmBtn = container.querySelector('.ux4g-btn-primary');\r
        \r
        const navBtns = container.querySelectorAll('.ux4g-btn-icon');\r
        this.prevBtn = navBtns[0];\r
        this.nextBtn = navBtns[1];\r
\r
        this.currentDate = new Date();\r
        this.viewDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);\r
        this.selectedDate = new Date(2026, 3, 23); // Default from design: April 23, 2026\r
\r
        // Mock Data for Statuses\r
        this.holidays = ['2026-04-09', '2026-04-21'];\r
        this.weeklyOffs = [0, 6]; // Sunday, Saturday\r
        this.noSlotsDates = ['2026-04-08', '2026-04-13'];\r
\r
        this._init();\r
    }\r
\r
    _init() {\r
        if (this.prevBtn) {\r
            this.prevBtn.addEventListener('click', () => this.changeMonth(-1));\r
        }\r
        if (this.nextBtn) {\r
            this.nextBtn.addEventListener('click', () => this.changeMonth(1));\r
        }\r
\r
        // Cancel Button Reset Logic\r
        const cancelBtn = this.container.querySelector('.ux4g-btn-outline-neutral');\r
        if (cancelBtn) {\r
            cancelBtn.addEventListener('click', () => {\r
                this.selectedDate = null; // Reset selection\r
                this.render(); // Re-render calendar to clear highlights\r
                if (this.slotTitle) this.slotTitle.innerText = "Select a Date"; // Reset slot header\r
                this.resetSlots(); // Clear slot selection and disable confirm button\r
            });\r
        }\r
\r
        this.render();\r
    }\r
\r
    changeMonth(delta) {\r
        this.viewDate.setMonth(this.viewDate.getMonth() + delta);\r
        this.render();\r
    }\r
\r
    render() {\r
        this.renderCalendar();\r
    }\r
\r
    renderCalendar() {\r
        const year = this.viewDate.getFullYear();\r
        const month = this.viewDate.getMonth();\r
        const monthNames = ["January", "February", "March", "April", "May", "June",\r
            "July", "August", "September", "October", "November", "December"\r
        ];\r
\r
        // Update Month Label\r
        if (this.monthLabel) {\r
            this.monthLabel.innerText = \`\${monthNames[month]} \${year}\`;\r
        }\r
\r
        const firstDayOfMonth = new Date(year, month, 1).getDay();\r
        const daysInMonth = new Date(year, month + 1, 0).getDate();\r
        \r
        // Adjust for Monday start\r
        let startDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;\r
        const prevMonthLastDay = new Date(year, month, 0).getDate();\r
\r
        // Clear and rebuild grid\r
        this.calendarGrid.innerHTML = '';\r
\r
        // Add Weekday Names\r
        const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];\r
        days.forEach(day => {\r
            const dayEl = document.createElement('div');\r
            dayEl.className = 'ux4g-time-slot-day-name';\r
            dayEl.innerText = day;\r
            this.calendarGrid.appendChild(dayEl);\r
        });\r
\r
        // Previous Month Days\r
        for (let i = startDay - 1; i >= 0; i--) {\r
            const dateEl = document.createElement('div');\r
            dateEl.className = 'ux4g-time-slot-date muted';\r
            dateEl.innerText = prevMonthLastDay - i;\r
            this.calendarGrid.appendChild(dateEl);\r
        }\r
\r
        // Current Month Days\r
        const todayMidnight = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate());\r
        for (let i = 1; i <= daysInMonth; i++) {\r
            const date = new Date(year, month, i);\r
            const dateStr = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(i).padStart(2, '0');\r
            const isToday = date.toDateString() === this.currentDate.toDateString();\r
            const isPast = date < todayMidnight;\r
            const isSelected = this.selectedDate && date.toDateString() === this.selectedDate.toDateString();\r
            const isHoliday = this.holidays.includes(dateStr);\r
            const isWeeklyOff = this.weeklyOffs.includes(date.getDay());\r
            const isNoSlots = this.noSlotsDates.includes(dateStr);\r
\r
            const dateEl = document.createElement('div');\r
            dateEl.className = 'ux4g-time-slot-date';\r
            if (isPast) dateEl.classList.add('disabled');\r
            if (isToday) dateEl.classList.add('today');\r
            if (isSelected && !isPast) dateEl.classList.add('selected');\r
            if (isHoliday) dateEl.classList.add('holiday');\r
            if (isWeeklyOff) dateEl.classList.add('weekly-off');\r
            if (isNoSlots) dateEl.classList.add('no-slots');\r
            \r
            dateEl.innerText = i;\r
            dateEl.dataset.date = i;\r
\r
            if (!isPast) {\r
                dateEl.addEventListener('click', () => {\r
                    this.selectedDate = new Date(year, month, i);\r
                    this.render();\r
                    this.updateSlotHeader();\r
                    this.resetSlots();\r
                });\r
            }\r
\r
            this.calendarGrid.appendChild(dateEl);\r
        }\r
\r
        // Next Month Days\r
        const totalCells = 42 + 7; // Including header row\r
        const currentCells = this.calendarGrid.children.length;\r
        const remainingCells = totalCells - currentCells;\r
        for (let i = 1; i <= remainingCells; i++) {\r
            const dateEl = document.createElement('div');\r
            dateEl.className = 'ux4g-time-slot-date muted';\r
            dateEl.innerText = i;\r
            this.calendarGrid.appendChild(dateEl);\r
        }\r
    }\r
\r
    updateSlotHeader() {\r
        if (this.slotTitle && this.selectedDate) {\r
            const day = this.selectedDate.getDate();\r
            const monthNames = ["January", "February", "March", "April", "May", "June",\r
                "July", "August", "September", "October", "November", "December"\r
            ];\r
            const month = monthNames[this.selectedDate.getMonth()];\r
            const year = this.selectedDate.getFullYear();\r
            this.slotTitle.innerText = \`\${day}\${this.getOrdinal(day)} \${month} \${year}\`;\r
        }\r
    }\r
\r
    resetSlots() {\r
        // Reset slot selection and disable confirm button\r
        const slots = this.container.querySelectorAll('.ux4g-time-slot-compact-slot-item:not(.disabled)');\r
        slots.forEach(s => {\r
            s.classList.remove('selected');\r
            s.style.backgroundColor = '';\r
        });\r
        if (this.confirmBtn) this.confirmBtn.setAttribute('disabled', 'true');\r
        \r
        // Re-attach slot selection listeners\r
        slots.forEach(slot => {\r
            slot.addEventListener('click', () => {\r
                slots.forEach(s => {\r
                    s.classList.remove('selected');\r
                    s.style.backgroundColor = '';\r
                });\r
                slot.classList.add('selected');\r
                if (this.confirmBtn) this.confirmBtn.removeAttribute('disabled');\r
            });\r
        });\r
    }\r
\r
    getOrdinal(n) {\r
        const s = ["th", "st", "nd", "rd"];\r
        const v = n % 100;\r
        return (s[(v - 20) % 10] || s[v] || s[0]);\r
    }\r
}\r
\r
// Initialize on Load\r
document.addEventListener('DOMContentLoaded', () => {\r
    // Initialize Compact Calendar\r
    const compactContainers = document.querySelectorAll('.ux4g-time-slot-compact-container, #ux4g-time-slot, [id^="ux4g-time-slot-compact"]');\r
    compactContainers.forEach(container => {\r
        new TimeSlotCalendar(container);\r
    });\r
\r
    // Initialize Weekly Grid Selection\r
    const weeklyGrids = document.querySelectorAll('.ux4g-time-slot-weekly-grid, [id^="ux4g-time-slot-weekly"]');\r
    weeklyGrids.forEach(weeklyGrid => {\r
        const cells = weeklyGrid.querySelectorAll('.ux4g-time-slot-cell.available, .ux4g-time-slot-cell.limited');\r
        const confirmBtn = weeklyGrid.parentElement.querySelector('.ux4g-time-slot-weekly-actions .ux4g-btn-primary');\r
        const cancelBtn = weeklyGrid.parentElement.querySelector('.ux4g-time-slot-weekly-actions .ux4g-btn-outline-neutral');\r
\r
        cells.forEach(cell => {\r
            // Store original content to restore later\r
            const originalHTML = cell.innerHTML;\r
\r
            cell.addEventListener('click', () => {\r
                if (cell.classList.contains('selected')) return;\r
\r
                // 1. Restore all other cells to their original state\r
                cells.forEach(c => {\r
                    if (c.classList.contains('selected')) {\r
                        c.classList.remove('selected');\r
                        if (c._originalContent) {\r
                            c.innerHTML = c._originalContent;\r
                        }\r
                    }\r
                });\r
\r
                // 2. Select this cell\r
                cell.classList.add('selected');\r
                cell._originalContent = originalHTML;\r
                cell.innerHTML = \`<span class="ux4g-icon-filled">check_circle</span> Selected\`;\r
\r
                // 3. Enable Confirm Button\r
                if (confirmBtn) confirmBtn.removeAttribute('disabled');\r
            });\r
        });\r
\r
        // Cancel Button logic for Weekly Grid\r
        if (cancelBtn) {\r
            cancelBtn.addEventListener('click', () => {\r
                cells.forEach(c => {\r
                    if (c.classList.contains('selected')) {\r
                        c.classList.remove('selected');\r
                        if (c._originalContent) {\r
                            c.innerHTML = c._originalContent;\r
                        }\r
                    }\r
                });\r
                if (confirmBtn) confirmBtn.setAttribute('disabled', 'true');\r
            });\r
        }\r
\r
        // Initialize Weekly Grid Mobile Navigation (Dynamic approach)\r
        const container = weeklyGrid.closest('.ux4g-time-slot-weekly-container');\r
        if (container) {\r
            const mobileNav = container.querySelector('.ux4g-time-slot-mobile-nav');\r
            if (mobileNav) {\r
                const mobileDateLabel = mobileNav.querySelector('.ux4g-time-slot-mobile-date');\r
                const navBtns = mobileNav.querySelectorAll('.ux4g-btn-icon');\r
                const prevBtn = navBtns[0];\r
                const nextBtn = navBtns[1];\r
\r
                // 1. Dynamically assign data-day attributes to cells based on grid position\r
                // Grid has 8 columns: Time, Mon, Tue, Wed, Thu, Fri, Sat, Sun\r
                const children = weeklyGrid.children;\r
                for (let i = 0; i < children.length; i++) {\r
                    const colIndex = i % 8;\r
                    if (colIndex > 0) { // Skip Time column\r
                        children[i].setAttribute('data-day', colIndex - 1);\r
                    }\r
                }\r
\r
                // 2. Navigation Logic\r
                let activeDay = 0;\r
                weeklyGrid.setAttribute('data-active-day', activeDay);\r
\r
                const daysData = [\r
                    { day: "Mon 14 Apr", status: "Today" },\r
                    { day: "Tue 15 Apr", status: "" },\r
                    { day: "Wed 16 Apr", status: "" },\r
                    { day: "Thu 17 Apr", status: "Public Holiday" },\r
                    { day: "Fri 18 Apr", status: "" },\r
                    { day: "Sat 19 Apr", status: "Weekly off" },\r
                    { day: "Sun 20 Apr", status: "Weekly off" }\r
                ];\r
\r
                const updateMobileNav = (index) => {\r
                    weeklyGrid.setAttribute('data-active-day', index);\r
                    const data = daysData[index];\r
                    if (mobileDateLabel) {\r
                        mobileDateLabel.innerHTML = \`\r
                            <strong>\${data.day}</strong>\r
                            \${data.status ? \`<span class="\${data.status === 'Today' ? 'ux4g-text-success-600' : 'ux4g-text-neutral-secondary'}">\${data.status}</span>\` : ''}\r
                        \`;\r
                    }\r
                };\r
\r
                if (prevBtn) {\r
                    prevBtn.addEventListener('click', () => {\r
                        activeDay = (activeDay > 0) ? activeDay - 1 : 6;\r
                        updateMobileNav(activeDay);\r
                    });\r
                }\r
\r
                if (nextBtn) {\r
                    nextBtn.addEventListener('click', () => {\r
                        activeDay = (activeDay < 6) ? activeDay + 1 : 0;\r
                        updateMobileNav(activeDay);\r
                    });\r
                }\r
            }\r
        }\r
    });\r
});\r
\r
\r
\r
/********************************* Result list JS ***********************************/\r
\r
// Accordion Toggle\r
window.ux4gCustomInitList = window.ux4gCustomInitList || []; window.ux4gCustomInitList.push(() => {\r
  if (window.ux4gResultListAccordionInitialized) return;\r
  window.ux4gResultListAccordionInitialized = true;\r
  \r
  document.addEventListener('click', (e) => {\r
    const toggle = e.target.closest('.ux4g-result-list-accordion-toggle');\r
    if (!toggle) return;\r
\r
    let content = null;\r
    \r
    // 1. Support ID-based target via aria-controls or data-ux-target\r
    const targetId = toggle.getAttribute('aria-controls') || toggle.getAttribute('data-ux-target');\r
    if (targetId) {\r
      const selector = targetId.startsWith('#') ? targetId : \`#\${targetId}\`;\r
      content = document.querySelector(selector);\r
    }\r
    \r
    // 2. Fallback to structural targeting\r
    if (!content) {\r
      const card = toggle.closest('.ux4g-result-list');\r
      if (card) {\r
        content = card.querySelector('.ux4g-result-list-content');\r
      }\r
    }\r
\r
    if (!content) return;\r
\r
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';\r
\r
    if (isExpanded) {\r
      toggle.setAttribute('aria-expanded', 'false');\r
      toggle.innerText = 'expand_more';\r
      content.style.display = 'none';\r
    } else {\r
      toggle.setAttribute('aria-expanded', 'true');\r
      toggle.innerText = 'expand_less';\r
      content.style.display = '';\r
    }\r
  });\r
});\r
\r
\r
\r
/********************************* Mega menu category list JS ***********************************/\r
\r
window.ux4gCustomInitList = window.ux4gCustomInitList || []; window.ux4gCustomInitList.push(() => {\r
  const categoryItems = document.querySelectorAll('.ux4g-mega-menu-category-item');\r
  const contentBlocks = document.querySelectorAll('.ux4g-mega-menu-content');\r
\r
  if (!categoryItems.length || !contentBlocks.length) return;\r
\r
  categoryItems.forEach((item, index) => {\r
    item.addEventListener('click', (e) => {\r
      e.preventDefault();\r
\r
      // Remove active class from all categories\r
      categoryItems.forEach(cat => cat.classList.remove('ux4g-mega-menu-category-item--active'));\r
      // Add active class to clicked category\r
      item.classList.add('ux4g-mega-menu-category-item--active');\r
\r
      // Hide all content blocks\r
      contentBlocks.forEach(block => block.classList.remove('ux4g-mega-menu-content--active'));\r
\r
      // Show the corresponding content block by ID matching category-1, category-2, etc.\r
      const targetId = \`category-\${index + 1}\`;\r
      const targetBlock = document.getElementById(targetId);\r
\r
      if (targetBlock) {\r
        targetBlock.classList.add('ux4g-mega-menu-content--active');\r
      }\r
    });\r
  });\r
});\r
\r
/* ========================================================= checkbox js ========================================================= */\r
window.ux4gCustomInitList = window.ux4gCustomInitList || []; window.ux4gCustomInitList.push(() => {\r
\r
  // 1. Standalone indeterminate checkboxes — add data-ux4g-indeterminate attribute to set on init\r
  document.querySelectorAll('.ux4g-checkbox-input[data-ux4g-indeterminate]').forEach(input => {\r
    input.indeterminate = true;\r
  });\r
\r
  // 2. Parent-child checkbox groups — wrap the group in data-ux4g-parent-child.\r
  //    Mark the select-all input with data-ux4g-select-all.\r
  //    Mark each child input with data-ux4g-child.\r
  document.querySelectorAll('[data-ux4g-parent-child]').forEach(container => {\r
    const parentInput = container.querySelector('.ux4g-checkbox-input[data-ux4g-select-all]');\r
    const childInputs = Array.from(container.querySelectorAll('.ux4g-checkbox-input[data-ux4g-child]'));\r
\r
    if (!parentInput || !childInputs.length) return;\r
\r
    function updateParent() {\r
      const checkedCount = childInputs.filter(cb => cb.checked).length;\r
      if (checkedCount === 0) {\r
        parentInput.checked = false;\r
        parentInput.indeterminate = false;\r
      } else if (checkedCount === childInputs.length) {\r
        parentInput.checked = true;\r
        parentInput.indeterminate = false;\r
      } else {\r
        parentInput.checked = false;\r
        parentInput.indeterminate = true;\r
      }\r
    }\r
\r
    // Use click (not change) so we can read the children's state BEFORE any changes,\r
    // giving consistent "select all / unselect all" behaviour regardless of browser\r
    // handling of indeterminate â†’ click â†’ checked transitions.\r
    parentInput.addEventListener('click', function () {\r
      const checkedCount = childInputs.filter(cb => cb.checked).length;\r
      const checkAll = checkedCount < childInputs.length;\r
      parentInput.checked = checkAll;\r
      parentInput.indeterminate = false;\r
      childInputs.forEach(cb => { cb.checked = checkAll; });\r
    });\r
\r
    childInputs.forEach(cb => cb.addEventListener('change', updateParent));\r
    updateParent();\r
  });\r
});\r
\r
\r
\r
\r
/* ========================================================= \r
   Aadhaar & PAN Validation Logic\r
========================================================= */\r
window.ux4gCustomInitList = window.ux4gCustomInitList || [];\r
window.ux4gCustomInitList.push(() => {\r
    \r
    // Helper function to toggle error state\r
    const toggleErrorState = (input, isError) => {\r
        const container = input.closest('.ux4g-input-container');\r
        if (!container) return;\r
        \r
        let helper = container.querySelector('.ux4g-input-helper');\r
\r
        if (isError) {\r
            container.classList.add('ux4g-input-error');\r
            input.setAttribute('aria-invalid', 'true');\r
            if (helper) helper.style.display = 'flex';\r
        } else {\r
            container.classList.remove('ux4g-input-error');\r
            input.removeAttribute('aria-invalid');\r
            if (helper) helper.style.display = 'none';\r
        }\r
    };\r
\r
    // ---------------------------------------------------------\r
    // Aadhaar Card Input Handling\r
    // ---------------------------------------------------------\r
    const handleAadhaar = (e) => {\r
        const input = e.target;\r
        if (!input.matches('input[id="aadhaarInput"], input[name="aadhaar"]')) return;\r
\r
        let val = input.value.replace(/[^\\d]/g, '').substring(0, 12);\r
        let formatted = '';\r
        for (let i = 0; i < val.length; i++) {\r
            if (i > 0 && i % 4 === 0) formatted += ' ';\r
            formatted += val[i];\r
        }\r
        if (input.value !== formatted) {\r
            input.value = formatted;\r
        }\r
\r
        // Validate using HTML5 pattern attribute\r
        if (input.value.length === 0) {\r
            toggleErrorState(input, false);\r
        } else if (!input.checkValidity()) {\r
            toggleErrorState(input, true);\r
        } else {\r
            toggleErrorState(input, false);\r
        }\r
    };\r
\r
    // ---------------------------------------------------------\r
    // PAN Card Input Handling\r
    // ---------------------------------------------------------\r
    const handlePan = (e) => {\r
        const input = e.target;\r
        if (!input.matches('input[id="panInput"], input[name="pan"]')) return;\r
\r
        let val = input.value.toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 10);\r
        if (input.value !== val) {\r
            input.value = val;\r
        }\r
\r
        // Validate using HTML5 pattern attribute\r
        if (input.value.length === 0) {\r
            toggleErrorState(input, false);\r
        } else if (!input.checkValidity()) {\r
            toggleErrorState(input, true);\r
        } else {\r
            toggleErrorState(input, false);\r
        }\r
    };\r
\r
    // Use event delegation to handle dynamically created inputs (e.g. inside Playground)\r
    document.addEventListener('input', (e) => {\r
        if (e.target && e.target.tagName === 'INPUT') {\r
            handleAadhaar(e);\r
            handlePan(e);\r
        }\r
    });\r
\r
    document.addEventListener('focusout', (e) => {\r
        if (e.target && e.target.tagName === 'INPUT') {\r
            handleAadhaar(e);\r
            handlePan(e);\r
        }\r
    });\r
});\r
\r
window.ux4gCustomInitList = window.ux4gCustomInitList || []; window.ux4gCustomInitList.push(() => {\r
    const wrappers = document.querySelectorAll('.ux4g-consent-capture-wrapper');\r
    \r
    wrappers.forEach(wrapper => {\r
        const scrollBox = wrapper.querySelector('.ux4g-declaration-content');\r
        const hint = wrapper.querySelector('.ux4g-declaration-scroll-hint');\r
        const checkbox = wrapper.querySelector('.ux4g-checkbox-input');\r
        const nameInputGroup = wrapper.querySelector('.ux4g-input-container');\r
        const nameInput = wrapper.querySelector('.ux4g-input-input');\r
        const submitBtn = wrapper.querySelector('.ux4g-consent-decl-btn-wrap .ux4g-btn-primary');\r
\r
        if (!checkbox || !scrollBox || !submitBtn) return;\r
\r
        let hasScrolledToBottom = false;\r
\r
        function validateForm() {\r
            const isNameValid = nameInput ? nameInput.value.trim().length > 0 : true;\r
            const isChecked = checkbox.checked;\r
\r
            if (hasScrolledToBottom && isNameValid && isChecked) {\r
                submitBtn.disabled = false;\r
            } else {\r
                submitBtn.disabled = true;\r
            }\r
        }\r
\r
        scrollBox.addEventListener('scroll', function() {\r
            if (Math.abs(this.scrollHeight - this.clientHeight - this.scrollTop) <= 10) {\r
                if (hint) {\r
                    hint.style.opacity = '0';\r
                    hint.style.pointerEvents = 'none';\r
                }\r
                hasScrolledToBottom = true;\r
                validateForm();\r
            }\r
        });\r
\r
        checkbox.addEventListener('change', function() {\r
            if (nameInputGroup) {\r
                if (this.checked) {\r
                    nameInputGroup.classList.remove('ux4g-d-none');\r
                } else {\r
                    nameInputGroup.classList.add('ux4g-d-none');\r
                    if (nameInput) nameInput.value = '';\r
                }\r
            }\r
            validateForm();\r
        });\r
        \r
        if (nameInput) {\r
            nameInput.addEventListener('input', validateForm);\r
        }\r
        \r
        // Initial validation\r
        validateForm();\r
    });\r
});\r
\r
/* ========================================================= alert js ========================================================= */\r
\r
// Single delegated click handler for alert close (Framework Agnostic)\r
document.addEventListener('click', (e) => {\r
  const closeBtn = e.target.closest('.ux4g-alert-close');\r
  if (closeBtn) {\r
    const alert = closeBtn.closest('.ux4g-alert, .ux4g-context-alert');\r
    if (alert) {\r
      alert.style.display = 'none';\r
    }\r
  }\r
});\r
\r
// Auto-dismiss logic using MutationObserver (Works perfectly with React/Angular)\r
function initAutoDismissAlerts() {\r
  const setAutoDismiss = (alert) => {\r
    if (alert.dataset.ux4gDismissTimeout) return; // already set\r
    const time = parseInt(alert.getAttribute('data-auto-dismiss'), 10);\r
    if (!isNaN(time) && time > 0) {\r
      const timerId = setTimeout(() => {\r
        alert.style.display = 'none';\r
      }, time);\r
      alert.dataset.ux4gDismissTimeout = timerId;\r
    }\r
  };\r
\r
  // 1. Check existing alerts on page\r
  document.querySelectorAll('.ux4g-alert[data-auto-dismiss], .ux4g-context-alert[data-auto-dismiss]').forEach(setAutoDismiss);\r
\r
  // 2. Watch for dynamically added alerts (React, Angular, etc.)\r
  const observer = new MutationObserver((mutations) => {\r
    mutations.forEach(mutation => {\r
      mutation.addedNodes.forEach(node => {\r
        if (node.nodeType === 1) { // Element node\r
          if (node.classList && (node.classList.contains('ux4g-alert') || node.classList.contains('ux4g-context-alert')) && node.hasAttribute('data-auto-dismiss')) {\r
            setAutoDismiss(node);\r
          }\r
          // Also check children if a container was added\r
          const innerAlerts = node.querySelectorAll ? node.querySelectorAll('.ux4g-alert[data-auto-dismiss], .ux4g-context-alert[data-auto-dismiss]') : [];\r
          innerAlerts.forEach(setAutoDismiss);\r
        }\r
      });\r
    });\r
  });\r
\r
  observer.observe(document.body, { childList: true, subtree: true });\r
}\r
\r
window.ux4gCustomInitList = window.ux4gCustomInitList || [];\r
window.ux4gCustomInitList.push(initAutoDismissAlerts);\r
\r
\r
/* ========================================================= reminder alert close js ========================================================= */\r
// Delegated event listener for reminder alert close buttons so it works with dynamic frameworks (React, Angular, Next.js)\r
document.addEventListener('click', (e) => {\r
  const closeBtn = e.target.closest('.ux4g-reminder-alert .ux4g-alert-close');\r
  if (closeBtn) {\r
    const alertBox = closeBtn.closest('.ux4g-reminder-alert');\r
    if (alertBox) {\r
      alertBox.style.display = 'none';\r
    }\r
        if (isError) {\r
            container.classList.add('ux4g-input-error');\r
            input.setAttribute('aria-invalid', 'true');\r
            if (helper) helper.style.display = 'flex';\r
        } else {\r
            container.classList.remove('ux4g-input-error');\r
            input.removeAttribute('aria-invalid');\r
            if (helper) helper.style.display = 'none';\r
        }\r
    };\r
\r
    // ---------------------------------------------------------\r
    // Aadhaar Card Input Handling\r
    // ---------------------------------------------------------\r
    const handleAadhaar = (e) => {\r
        const input = e.target;\r
        if (!input.matches('input[id="aadhaarInput"], input[name="aadhaar"]')) return;\r
\r
        let val = input.value.replace(/[^\\d]/g, '').substring(0, 12);\r
        let formatted = '';\r
        for (let i = 0; i < val.length; i++) {\r
            if (i > 0 && i % 4 === 0) formatted += ' ';\r
            formatted += val[i];\r
        }\r
        if (input.value !== formatted) {\r
            input.value = formatted;\r
        }\r
\r
        // Validate using HTML5 pattern attribute\r
        if (input.value.length === 0) {\r
            toggleErrorState(input, false);\r
        } else if (!input.checkValidity()) {\r
            toggleErrorState(input, true);\r
        } else {\r
            toggleErrorState(input, false);\r
        }\r
    };\r
\r
    // ---------------------------------------------------------\r
    // PAN Card Input Handling\r
    // ---------------------------------------------------------\r
    const handlePan = (e) => {\r
        const input = e.target;\r
        if (!input.matches('input[id="panInput"], input[name="pan"]')) return;\r
\r
        let val = input.value.toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 10);\r
        if (input.value !== val) {\r
            input.value = val;\r
        }\r
\r
        // Validate using HTML5 pattern attribute\r
        if (input.value.length === 0) {\r
            toggleErrorState(input, false);\r
        } else if (!input.checkValidity()) {\r
            toggleErrorState(input, true);\r
        } else {\r
            toggleErrorState(input, false);\r
        }\r
    };\r
\r
    // Use event delegation to handle dynamically created inputs (e.g. inside Playground)\r
    document.addEventListener('input', (e) => {\r
        if (e.target && e.target.tagName === 'INPUT') {\r
            handleAadhaar(e);\r
            handlePan(e);\r
        }\r
    });\r
\r
    document.addEventListener('focusout', (e) => {\r
        if (e.target && e.target.tagName === 'INPUT') {\r
            handleAadhaar(e);\r
            handlePan(e);\r
        }\r
    });\r
});\r
\r
window.ux4gCustomInitList = window.ux4gCustomInitList || []; window.ux4gCustomInitList.push(() => {\r
    const wrappers = document.querySelectorAll('.ux4g-consent-capture-wrapper');\r
    \r
    wrappers.forEach(wrapper => {\r
        const scrollBox = wrapper.querySelector('.ux4g-declaration-content');\r
        const hint = wrapper.querySelector('.ux4g-declaration-scroll-hint');\r
        const checkbox = wrapper.querySelector('.ux4g-checkbox-input');\r
        const nameInputGroup = wrapper.querySelector('.ux4g-input-container');\r
        const nameInput = wrapper.querySelector('.ux4g-input-input');\r
        const submitBtn = wrapper.querySelector('.ux4g-consent-decl-btn-wrap .ux4g-btn-primary');\r
\r
        if (!checkbox || !scrollBox || !submitBtn) return;\r
\r
        let hasScrolledToBottom = false;\r
\r
        function validateForm() {\r
            const isNameValid = nameInput ? nameInput.value.trim().length > 0 : true;\r
            const isChecked = checkbox.checked;\r
\r
            if (hasScrolledToBottom && isNameValid && isChecked) {\r
                submitBtn.disabled = false;\r
            } else {\r
                submitBtn.disabled = true;\r
            }\r
        }\r
\r
        scrollBox.addEventListener('scroll', function() {\r
            if (Math.abs(this.scrollHeight - this.clientHeight - this.scrollTop) <= 10) {\r
                if (hint) {\r
                    hint.style.opacity = '0';\r
                    hint.style.pointerEvents = 'none';\r
                }\r
                hasScrolledToBottom = true;\r
                validateForm();\r
            }\r
        });\r
\r
        checkbox.addEventListener('change', function() {\r
            if (nameInputGroup) {\r
                if (this.checked) {\r
                    nameInputGroup.classList.remove('ux4g-d-none');\r
                } else {\r
                    nameInputGroup.classList.add('ux4g-d-none');\r
                    if (nameInput) nameInput.value = '';\r
                }\r
            }\r
            validateForm();\r
        });\r
        \r
        if (nameInput) {\r
            nameInput.addEventListener('input', validateForm);\r
        }\r
        \r
        // Initial validation\r
        validateForm();\r
    });\r
});\r
\r
/* ========================================================= alert js ========================================================= */\r
\r
// Single delegated click handler for alert close (Framework Agnostic)\r
document.addEventListener('click', (e) => {\r
  const closeBtn = e.target.closest('.ux4g-alert-close');\r
  if (closeBtn) {\r
    const alert = closeBtn.closest('.ux4g-alert, .ux4g-context-alert');\r
    if (alert) {\r
      alert.style.display = 'none';\r
    }\r
  }\r
});\r
\r
// Auto-dismiss logic using MutationObserver (Works perfectly with React/Angular)\r
function initAutoDismissAlerts() {\r
  const setAutoDismiss = (alert) => {\r
    if (alert.dataset.ux4gDismissTimeout) return; // already set\r
    const time = parseInt(alert.getAttribute('data-auto-dismiss'), 10);\r
    if (!isNaN(time) && time > 0) {\r
      const timerId = setTimeout(() => {\r
        alert.style.display = 'none';\r
      }, time);\r
      alert.dataset.ux4gDismissTimeout = timerId;\r
    }\r
  };\r
\r
  // 1. Check existing alerts on page\r
  document.querySelectorAll('.ux4g-alert[data-auto-dismiss], .ux4g-context-alert[data-auto-dismiss]').forEach(setAutoDismiss);\r
\r
  // 2. Watch for dynamically added alerts (React, Angular, etc.)\r
  const observer = new MutationObserver((mutations) => {\r
    mutations.forEach(mutation => {\r
      mutation.addedNodes.forEach(node => {\r
        if (node.nodeType === 1) { // Element node\r
          if (node.classList && (node.classList.contains('ux4g-alert') || node.classList.contains('ux4g-context-alert')) && node.hasAttribute('data-auto-dismiss')) {\r
            setAutoDismiss(node);\r
          }\r
          // Also check children if a container was added\r
          const innerAlerts = node.querySelectorAll ? node.querySelectorAll('.ux4g-alert[data-auto-dismiss], .ux4g-context-alert[data-auto-dismiss]') : [];\r
          innerAlerts.forEach(setAutoDismiss);\r
        }\r
      });\r
    });\r
  });\r
\r
  observer.observe(document.body, { childList: true, subtree: true });\r
}\r
\r
window.ux4gCustomInitList = window.ux4gCustomInitList || [];\r
window.ux4gCustomInitList.push(initAutoDismissAlerts);\r
\r
\r
/* ========================================================= reminder alert close js ========================================================= */\r
// Delegated event listener for reminder alert close buttons so it works with dynamic frameworks (React, Angular, Next.js)\r
document.addEventListener('click', (e) => {\r
  const closeBtn = e.target.closest('.ux4g-reminder-alert .ux4g-alert-close');\r
  if (closeBtn) {\r
    const alertBox = closeBtn.closest('.ux4g-reminder-alert');\r
    if (alertBox) {\r
      alertBox.style.display = 'none';\r
    }\r
  }\r
});\r
\r
\r
/* ========================================================= list switch JS appended ========================================================= */\r
window.ux4gCustomInitList = window.ux4gCustomInitList || []; window.ux4gCustomInitList.push(() => {\r
  document.addEventListener('click', (e) => {\r
    const switchContent = e.target.closest('.ux4g-switch-content');\r
    if (switchContent) {\r
      e.preventDefault();\r
      e.stopPropagation();\r
      return;\r
    }\r
\r
    const row = e.target.closest('.ux4g-list-item-row.ux4g-toggles, span.ux4g-list-item-row, .ux4g-list-item-row-fixed');\r
    if (row && e.target.tagName !== 'INPUT' && !e.target.closest('.ux4g-switch, .ux4g-checkbox, .ux4g-radio')) {\r
      e.stopPropagation();\r
    }\r
  }, true);\r
});\r
/* ========================================================= toggle disable JS ========================================================= */\r
// Generic script to enable/disable target elements based on checkbox state. Works with dynamic HTML, React, Angular, etc.\r
document.addEventListener('change', function(e) {\r
  if (e.target && e.target.hasAttribute('data-ux4g-toggle-disable')) {\r
    const targetSelector = e.target.getAttribute('data-ux4g-toggle-disable');\r
    if (targetSelector) {\r
      const targetEls = document.querySelectorAll(targetSelector);\r
      targetEls.forEach(el => {\r
        el.disabled = !e.target.checked;\r
      });\r
    }\r
  }\r
});\r
/* ========================================================= filter chip JS ========================================================= */\r
// Generic script to toggle filter chips (active mode)\r
document.addEventListener('click', (e) => {\r
  const filterChip = e.target.closest('.ux4g-filter-chip-md, .ux4g-filter-chip-sm');\r
  if (filterChip) {\r
    if (filterChip.hasAttribute('disabled') || filterChip.classList.contains('ux4g-disabled')) return;\r
\r
    filterChip.classList.toggle('active');\r
  }\r
});\r
\r
// Execute all registered initialization functions (uses ux4g.js's safe init to prevent double-binding)\r
// Initialize selection state in custom list dropdowns\r
const initCustomListDropdowns = () => {\r
  document.querySelectorAll('.ux4g-custom-list-dropdown').forEach(dropdown => {\r
    const btn = dropdown.querySelector('.ux4g-custom-dropdown-btn');\r
    const items = dropdown.querySelectorAll('.ux4g-custom-dropdown-item');\r
    if (!btn || !items.length) return;\r
\r
    const currentValue = btn.getAttribute('data-value');\r
    const span = btn.querySelector('span:first-child');\r
    const currentText = span ? span.textContent.trim() : '';\r
\r
    items.forEach(item => {\r
      const itemVal = item.getAttribute('data-value');\r
      const textEl = item.querySelector('.ux4g-custom-dropdown-text');\r
      const itemText = textEl ? textEl.textContent.trim() : item.textContent.trim();\r
      \r
      const isSelected = (currentValue && itemVal === currentValue) || (!currentValue && currentText && itemText === currentText);\r
      if (isSelected) {\r
        item.classList.add('is-selected', 'active');\r
        item.setAttribute('aria-selected', 'true');\r
      } else {\r
        item.classList.remove('is-selected', 'active');\r
        item.setAttribute('aria-selected', 'false');\r
      }\r
    });\r
  });\r
};\r
\r
// Execute all registered initialization functions\r
const ux4gInitAll = () => {\r
  if (window.ux4gCustomInit) {\r
    window.ux4gCustomInit();\r
  } else if (window.ux4gCustomInitList) {\r
    window.ux4gCustomInitList.forEach(fn => {\r
      if (typeof fn === 'function') fn();\r
    });\r
  }\r
};\r
\r
const ux4gCustomInitAllCombined = () => {\r
  ux4gInitAll();\r
  initCustomListDropdowns();\r
};\r
\r
if (document.readyState === 'loading') {\r
  document.addEventListener('DOMContentLoaded', ux4gCustomInitAllCombined);\r
} else {\r
  ux4gCustomInitAllCombined();\r
}\r
\r
\r
/* ========================================================= custom list dropdown JS ========================================================= */\r
document.addEventListener('click', (e) => {\r
  // 1. Handle toggle button click\r
  const btn = e.target.closest('.ux4g-custom-dropdown-btn');\r
  if (btn) {\r
    e.stopPropagation();\r
    const dropdown = btn.closest('.ux4g-custom-list-dropdown');\r
    if (dropdown) {\r
      const menu = dropdown.querySelector('.ux4g-custom-dropdown-menu');\r
      if (menu) {\r
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';\r
        // Close other custom dropdowns\r
        document.querySelectorAll('.ux4g-custom-list-dropdown').forEach(d => {\r
          if (d !== dropdown) {\r
            const otherBtn = d.querySelector('.ux4g-custom-dropdown-btn');\r
            const otherMenu = d.querySelector('.ux4g-custom-dropdown-menu');\r
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');\r
            if (otherMenu) otherMenu.style.display = 'none';\r
          }\r
        });\r
        \r
        btn.setAttribute('aria-expanded', String(!isExpanded));\r
        menu.style.display = isExpanded ? 'none' : 'block';\r
      }\r
    }\r
    return;\r
  }\r
\r
  // 2. Handle item selection\r
  const item = e.target.closest('.ux4g-custom-list-dropdown .ux4g-custom-dropdown-item');\r
  if (item) {\r
    e.stopPropagation();\r
    const dropdown = item.closest('.ux4g-custom-list-dropdown');\r
    if (dropdown) {\r
      const btn = dropdown.querySelector('.ux4g-custom-dropdown-btn');\r
      const menu = dropdown.querySelector('.ux4g-custom-dropdown-menu');\r
      \r
      // Toggle selected class and aria-selected attribute\r
      const items = dropdown.querySelectorAll('.ux4g-custom-dropdown-item');\r
      items.forEach(el => {\r
        if (el === item) {\r
          el.classList.add('is-selected', 'active');\r
          el.setAttribute('aria-selected', 'true');\r
        } else {\r
          el.classList.remove('is-selected', 'active');\r
          el.setAttribute('aria-selected', 'false');\r
        }\r
      });\r
\r
      const span = btn ? btn.querySelector('span:first-child') : null;\r
      if (span) {\r
        const textEl = item.querySelector('.ux4g-custom-dropdown-text');\r
        span.textContent = textEl ? textEl.textContent.trim() : item.textContent.trim();\r
      }\r
      if (btn) {\r
        btn.setAttribute('aria-expanded', 'false');\r
        btn.setAttribute('data-value', item.getAttribute('data-value') || '');\r
      }\r
      if (menu) menu.style.display = 'none';\r
    }\r
    return;\r
  }\r
\r
  // 3. Clicked outside - close all custom dropdowns\r
  document.querySelectorAll('.ux4g-custom-list-dropdown').forEach(d => {\r
    const otherBtn = d.querySelector('.ux4g-custom-dropdown-btn');\r
    const otherMenu = d.querySelector('.ux4g-custom-dropdown-menu');\r
    if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');\r
    if (otherMenu) otherMenu.style.display = 'none';\r
  });\r
});\r
\r
/********************************* Mega Menu Five Category list JS ***********************************/\r
window.ux4gCustomInitList = window.ux4gCustomInitList || []; window.ux4gCustomInitList.push(() => {\r
  const categoryItems = document.querySelectorAll('.ux4g-mega-menu-five-category-item');\r
  const contentBlocks = document.querySelectorAll('.ux4g-mega-menu-five-content');\r
\r
  if (!categoryItems.length || !contentBlocks.length) return;\r
\r
  categoryItems.forEach((item, index) => {\r
    item.addEventListener('click', (e) => {\r
      e.preventDefault();\r
\r
      // Remove active class from all categories\r
      categoryItems.forEach(cat => cat.classList.remove('ux4g-mega-menu-five-category-item--active'));\r
      // Add active class to clicked category\r
      item.classList.add('ux4g-mega-menu-five-category-item--active');\r
\r
      // Hide all content blocks\r
      contentBlocks.forEach(block => block.classList.remove('ux4g-mega-menu-five-content--active'));\r
\r
      // Show the corresponding content block by ID matching five-category-1, five-category-2, etc.\r
      const targetId = \`five-category-\${index + 1}\`;\r
      const targetBlock = document.getElementById(targetId);\r
\r
      if (targetBlock) {\r
        targetBlock.classList.add('ux4g-mega-menu-five-content--active');\r
      }\r
    });\r
  });\r
});\r
`,document.head.appendChild(p)}dp();if(typeof window<"u"&&typeof MutationObserver<"u"){let l=null;const p=new MutationObserver(g=>{let f=!1;for(const w of g)if(w.addedNodes.length>0){f=!0;break}f&&(l&&clearTimeout(l),l=setTimeout(()=>{var w;(w=window.ux4g)!=null&&w.init&&window.ux4g.init(document)},50))}),c=()=>{document.body?p.observe(document.body,{childList:!0,subtree:!0}):setTimeout(c,10)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",c):c()}const pp=5,hp="2026-08-27",fp="2026-08-26",mp="2026-08-30",gp=l=>[...l].reduce((p,c)=>p*31+c.charCodeAt(0)>>>0,17);function ru(l,p,c,g,f){if(l==="Chandigarh"&&p==="New Delhi"&&c===fp&&g==="CC")return f.includes("vande")?{confirmedSeats:0,waitlist:4,status:"rac",waitlistType:"RAC",confirmationProbability:"Likely to confirm"}:f.includes("shatabdi")?{confirmedSeats:0,waitlist:3,status:"waitlist",waitlistType:"RLWL",confirmationProbability:"Possible"}:{confirmedSeats:0,waitlist:14,status:"waitlist",waitlistType:"GNWL",confirmationProbability:"Possible"};if(l==="Chandigarh"&&p==="New Delhi"&&c===hp&&g==="CC"){const D=f.includes("vande")?18:9;return{confirmedSeats:0,waitlist:D,status:"waitlist",waitlistType:"GNWL",confirmationProbability:D>15?"Unlikely to confirm":"Possible"}}if(l==="Chandigarh"&&p==="New Delhi"&&c===mp&&g==="CC")return{confirmedSeats:f.includes("vande")?26:f.includes("shatabdi")?18:11};const w=gp(`${l}|${p}|${c}|${g}|${f}`)%100;if(w<65)return{confirmedSeats:6+w%24};const C=1+w%28;return{confirmedSeats:0,waitlist:C,status:"waitlist",waitlistType:"GNWL",confirmationProbability:C<=5?"Likely to confirm":C<=15?"Possible":"Unlikely to confirm"}}function xp(l,p,c,g,f){return ru(l,p,c,g,f).confirmedSeats}const la=[{id:"vande-bharat-tatkal",number:"20977",name:"Vande Bharat Express",classCode:"CC",departure:"06:15",arrival:"09:25",price:1245,role:"recommended",seatSequence:[7,7,4,2,0]},{id:"shatabdi-tatkal",number:"12012",name:"Kalka Shatabdi",classCode:"CC",departure:"06:40",arrival:"10:00",price:980,role:"backup",seatSequence:[9,7,5,3,1]},{id:"paschim-tatkal",number:"12926",name:"Paschim Express",classCode:"3A",departure:"08:05",arrival:"13:35",price:1240,role:"other",seatSequence:[12,10,8,6,4]},{id:"himachal-tatkal",number:"14096",name:"Himalayan Queen",classCode:"SL",departure:"05:45",arrival:"11:20",price:685,role:"other",seatSequence:[14,11,8,5,2]}],Yr=[{id:"vande-bharat-20977",number:"20977",name:"Vande Bharat Express",source:"Chandigarh",sourceCode:"CDG",destination:"New Delhi",destinationCode:"NDLS",departure:"06:15",arrival:"09:25",duration:"3h 10m",stops:0,type:"Semi-high speed",score:94,recommendation:["Arrives early","Direct journey","Good availability"],amenities:["Wi-Fi","Meals","Charging"],classes:[{code:"CC",label:"Chair Car",status:"available",seats:42,fare:1245},{code:"EC",label:"Executive Chair",status:"available",seats:8,fare:2320}]},{id:"jan-shatabdi-12058",number:"12058",name:"Jan Shatabdi Express",source:"Chandigarh",sourceCode:"CDG",destination:"New Delhi",destinationCode:"NDLS",departure:"07:25",arrival:"11:35",duration:"4h 10m",stops:3,type:"Jan Shatabdi",score:78,recommendation:["Balanced fare","Morning departure"],amenities:["Charging","Pantry"],classes:[{code:"CC",label:"Chair Car",status:"available",seats:16,fare:890}]},{id:"shatabdi-12012",number:"12012",name:"Kalka Shatabdi",source:"Chandigarh",sourceCode:"CDG",destination:"New Delhi",destinationCode:"NDLS",departure:"06:40",arrival:"10:00",duration:"3h 20m",stops:1,type:"Shatabdi",score:86,recommendation:["Lowest fare","Early departure","Meals included"],amenities:["Meals","Charging","Pantry"],classes:[{code:"CC",label:"Chair Car",status:"available",seats:18,fare:980},{code:"EC",label:"Executive Chair",status:"available",seats:4,fare:1880}]},{id:"paschim-12926",number:"12926",name:"Paschim Express",source:"Chandigarh",sourceCode:"CDG",destination:"New Delhi",destinationCode:"NDLS",departure:"08:05",arrival:"13:35",duration:"5h 30m",stops:5,type:"Superfast",score:73,recommendation:["Most affordable","More class choices"],amenities:["Pantry","Charging"],classes:[{code:"3A",label:"AC 3 Tier",status:"rac",position:12,fare:1240},{code:"SL",label:"Sleeper",status:"waitlist",position:18,fare:685}]}],vp=[{question:"What does RAC mean?",answer:"RAC means you can board the train. You have a seat, but your berth may be shared. Your status can improve before departure."},{question:"When does Tatkal booking open?",answer:"Tatkal opens one day before departure. For AC classes it opens at 10:00 AM, and for non-AC classes it opens at 11:00 AM."},{question:"What happens if availability changes during payment?",answer:"The booking is checked again before confirmation. Payment received and booking confirmed are shown as separate states so you always know what happened."},{question:"How is the refund amount calculated?",answer:"The cancellation charge and any non-refundable fees are shown before you confirm. Refunds go back to the original payment method."}],yp=[{id:"tatkal",icon:"bolt",title:"Tatkal is ready",body:"Your preferred class opens at 10:00 AM.",tone:"warning",time:"Just now"},{id:"delay",icon:"schedule",title:"Platform update",body:"Platform 4 is assigned for your 06:15 departure.",tone:"info",time:"2 min ago"},{id:"coach",icon:"train",title:"Coach information ready",body:"Your coach B2 is near the middle of the train.",tone:"success",time:"10 min ago"},{id:"reminder",icon:"notifications",title:"Boarding reminder",body:"Reach the station at least 30 minutes before departure.",tone:"warning",time:"Today"}],wp=[{icon:"bolt",title:"Tatkal, without the guesswork",body:"See opening times, eligible classes, current mock availability, and fare before the clock starts."},{icon:"family_restroom",title:"Travel together",body:"Tell us when you are travelling as a family or group and see seating trade-offs honestly."},{icon:"support_agent",title:"Help when it matters",body:"Understand RAC, waitlist, refunds, and journey changes without leaving your booking."}],iu=[{id:"vande-bharat",eyebrow:"NEW GENERATION",title:"Vande Bharat Express",subtitle:"India’s semi-high-speed trainset",description:"Made in India for quicker, more comfortable inter-city journeys.",stat:"Up to 160 km/h · subject to route readiness",image:"/images/showcase/vande-bharat.png",imageAlt:"A modern streamlined express train at a station",infoUrl:"https://www.pib.gov.in/PressReleasePage.aspx?PRID=2215265&lang=1&reg=1"},{id:"palace-on-wheels",eyebrow:"ROYAL JOURNEY",title:"Palace on Wheels",subtitle:"Luxury across Rajasthan",description:"Royal interiors, curated heritage stops, and an unhurried seven-night journey.",stat:"7 nights / 8 days · New Delhi round trip",image:"/images/showcase/palace-on-wheels.png",imageAlt:"A richly appointed luxury train carriage interior",infoUrl:"https://www.palaceonwheels.rajasthan.gov.in/itinerary.html"},{id:"rail-power",eyebrow:"NETWORK IN MOTION",title:"Powering the railway",subtitle:"Modern electric traction",description:"The locomotives and crews that keep India’s long-distance network moving.",stat:"Built for high-capacity rail corridors",image:"/images/showcase/rail-power.png",imageAlt:"A blue Indian locomotive on an electrified railway line",infoUrl:"https://indianrailways.gov.in/"}],bp="https://indianrailways.gov.in/railwayboard/uploads/PDF/Railway%20Map%20of%20india_Corrected%20up%20to%2031_03_2023.pdf",kp="https://surveyofindia.gov.in/pages/outline-maps-of-india",Kr=[{id:"amritsar",name:"Amritsar",code:"ASR",region:"North",detail:"Golden Temple gateway and a northern rail starting point.",mapX:37,mapY:16},{id:"new-delhi",name:"New Delhi",code:"NDLS",region:"North",detail:"A central interchange for the Golden Quadrilateral and beyond.",mapX:45,mapY:25},{id:"mumbai",name:"Mumbai",code:"CSMT",region:"West",detail:"Where historic routes meet the Konkan coast.",mapX:35,mapY:56},{id:"kolkata",name:"Kolkata",code:"HWH",region:"East",detail:"A cultural rail gateway to the eastern hills and coast.",mapX:63,mapY:42},{id:"guwahati",name:"Guwahati",code:"GHY",region:"North East",detail:"The rail gateway to Assam and the north-eastern states.",mapX:70,mapY:27},{id:"bengaluru",name:"Bengaluru",code:"SBC",region:"South",detail:"A southern hub for hill, coast and heritage journeys.",mapX:46,mapY:78},{id:"chennai",name:"Chennai",code:"MAS",region:"South",detail:"A coast-facing junction for the deep south.",mapX:52,mapY:81},{id:"kochi",name:"Kochi",code:"ERS",region:"South",detail:"A gentle rail entry into Kerala’s backwaters and coast.",mapX:43,mapY:87}],Sp=[{value:"English",label:"English",native:"English"},{value:"हिन्दी",label:"Hindi",native:"हिन्दी"},{value:"తెలుగు",label:"Telugu",native:"తెలుగు"},{value:"ಕನ್ನಡ",label:"Kannada",native:"ಕನ್ನಡ"},{value:"ਪੰਜਾਬੀ",label:"Punjabi",native:"ਪੰਜਾਬੀ"},{value:"मराठी",label:"Marathi",native:"मराठी"},{value:"বাংলা",label:"Bengali",native:"বাংলা"},{value:"தமிழ்",label:"Tamil",native:"தமிழ்"}],jp=[{id:"kalka-shimla",region:"Himalayan hills",title:"Kalka–Shimla Toy Train",route:"Kalka → Shimla",description:"Slow curves, cedar forests and mountain stations that make the journey part of the destination.",duration:"5h 10m · 96 km",image:"/images/heritage/kalka-shimla.png",imageAlt:"The red-and-cream Kalka–Shimla toy train crossing a snowy mountain curve",infoUrl:"https://en.wikipedia.org/wiki/Kalka%E2%80%93Shimla_railway"},{id:"darjeeling",region:"Tea country",title:"Darjeeling Himalayan Railway",route:"New Jalpaiguri → Darjeeling",description:"A heritage climb through tea gardens, misty bends and the warm rhythm of hill-town life.",duration:"7h 00m · 88 km",image:"/images/heritage/darjeeling.png",imageAlt:"A heritage steam locomotive emerging from a stone tunnel in a forest",infoUrl:"https://en.wikipedia.org/wiki/Darjeeling_Himalayan_Railway"},{id:"nilgiri",region:"Blue mountains",title:"Nilgiri Mountain Railway",route:"Mettupalayam → Ooty",description:"A little blue train through eucalyptus slopes, valley views and the quiet of the Nilgiris.",duration:"5h 00m · 46 km",image:"/images/heritage/nilgiri.png",imageAlt:"A vintage train winding through vivid green Nilgiri tea fields",infoUrl:"https://5sensestours.com/nilgiri-mountain-railway-tour/"},{id:"konkan",region:"Western coast",title:"Konkan Railway",route:"Mumbai → Madgaon",description:"Tunnels, palms and monsoon-green coastlines on one of India’s most cinematic rail corridors.",duration:"10h 30m · 581 km",image:"/images/heritage/konkan.png",imageAlt:"An Indian blue locomotive curving through lush monsoon forest",infoUrl:"https://en.wikipedia.org/wiki/Konkan_Railway"}],Cp=l=>l==="available"?"Available":l==="rac"?"RAC":"Waitlist",Ep=l=>l==="available"?"success":l==="rac"?"warning":"error",Un=(l,p)=>({code:l,name:p}),ua={routeId:"ndls-sml-shivalik",routeLabel:"Fastest comfortable connection",routeReason:"The quickest prepared route with a comfortable change at Kalka.",fromStation:Un("NDLS","New Delhi"),toStation:Un("SML","Shimla"),legs:[{train:{id:"connecting-12011",number:"12011",name:"Kalka Shatabdi",source:"New Delhi",sourceCode:"NDLS",destination:"Kalka",destinationCode:"KLK",departure:"07:40",arrival:"11:05",duration:"3h 25m",stops:2,type:"Superfast",score:90,recommendation:["Direct to Kalka","Meals included"],amenities:["Meals","Charging"],classes:[{code:"CC",label:"Chair Car",status:"available",seats:30,fare:840}]},fromStation:Un("NDLS","New Delhi"),toStation:Un("KLK","Kalka")},{train:{id:"connecting-52451",number:"52451",name:"Shivalik Deluxe Express",source:"Kalka",sourceCode:"KLK",destination:"Shimla",destinationCode:"SML",departure:"12:10",arrival:"17:30",duration:"5h 20m",stops:5,type:"Toy train",score:82,recommendation:["Scenic route"],amenities:["Charging"],classes:[{code:"CC",label:"Chair Car (toy train)",status:"available",seats:20,fare:500}]},fromStation:Un("KLK","Kalka"),toStation:Un("SML","Shimla")}],connections:[{atStation:"Kalka",arrivalOfPreviousLeg:"11:05",departureOfNextLeg:"12:10",bufferMinutes:65,risk:"comfortable",riskNote:"A little over an hour to change trains and platforms — comfortable, no need to rush."}],totalDurationMinutes:590,totalPrice:1340},Np={routeId:"ndls-sml-himalayan-queen",routeLabel:"More connection time",routeReason:"A slower scenic option with a longer, more relaxed change at Kalka.",fromStation:Un("NDLS","New Delhi"),toStation:Un("SML","Shimla"),legs:[ua.legs[0],{train:{id:"connecting-52455",number:"52455",name:"Himalayan Queen",source:"Kalka",sourceCode:"KLK",destination:"Shimla",destinationCode:"SML",departure:"12:45",arrival:"18:20",duration:"5h 35m",stops:5,type:"Toy train",score:78,recommendation:["Scenic route","More time to change"],amenities:["Charging"],classes:[{code:"CC",label:"Chair Car (toy train)",status:"available",seats:14,fare:365}]},fromStation:Un("KLK","Kalka"),toStation:Un("SML","Shimla")}],connections:[{atStation:"Kalka",arrivalOfPreviousLeg:"11:05",departureOfNextLeg:"12:45",bufferMinutes:100,risk:"ample",riskNote:"A generous change window gives you time for platforms, luggage, and a short break."}],totalDurationMinutes:640,totalPrice:1205};ua.alternatives=[Np];const Lp=l=>l.trim().toLowerCase().replace(/[^a-z0-9]/g,"");function er(l){const p=Lp(l);return{chandigarh:"cdg",cdg:"cdg",newdelhi:"ndls",ndls:"ndls",kalka:"klk",klk:"klk",shimla:"sml",sml:"sml"}[p]??p}function Xc(l,p){const c=er(l),g=er(p);return c==="ndls"&&g==="sml"?ua:null}const Ap=l=>{const p=l.classes[0];return p.status==="available"?`${p.seats} confirmed seats`:`${p.status==="rac"?"RAC":"WL"} ${p.position}`};function _p(l){const p=g=>l.map(g),c=(g,f=!1)=>{const w=l.map(g),C=f?Math.min(...w):Math.max(...w);return w.map((D,$)=>D===C?$:-1).filter(D=>D>=0)};return[{label:"Score",values:p(g=>`${g.score}/100`),bestIndexes:c(g=>g.score)},{label:"Departure → Arrival",values:p(g=>`${g.departure} → ${g.arrival}`),bestIndexes:[]},{label:"Duration",values:p(g=>g.duration),bestIndexes:c(g=>{var f;return Number(((f=g.duration.match(/^\d+/))==null?void 0:f[0])??0)},!0)},{label:"Class",values:p(g=>g.classes[0].code),bestIndexes:[]},{label:"Availability",values:p(Ap),bestIndexes:c(g=>g.breakdown.availability)},{label:"Price",values:p(g=>`₹${g.classes[0].fare.toLocaleString("en-IN")}`),bestIndexes:c(g=>g.classes[0].fare,!0)},{label:"Amenities",values:p(g=>g.amenities.join(" · ")),bestIndexes:[]}]}function Ip(l){if(!l.length||l.some(g=>g.classes[0].status==="available"))return null;const p=l.find(g=>g.classes[0].confirmationProbability==="Unlikely to confirm");if(!p)return null;const c=l.find(g=>g.id!==p.id&&(g.classes[0].status==="rac"||g.classes[0].confirmationProbability!=="Unlikely to confirm"));return c?`${c.name} has a stronger confirmation outlook than waiting on ${p.name} at WL ${p.classes[0].position}.`:null}const Tp=(l,p)=>l==="confirmed"||l==="RAC"||!p||p<=5?"Likely to confirm":p<=15?"Possible":"Unlikely to confirm";function Mp(l,p,c){const g=c??Tp(l,p),f=p?` ${p}`:"";return l==="confirmed"?{summary:"Confirmed seat",detail:"A seat is currently available for this class.",nextStep:"Book when ready."}:l==="RAC"?{summary:`RAC${f} · ${g}`,detail:"You can board with a valid seat; a full berth may be assigned later.",nextStep:"Book if boarding matters more than a guaranteed full berth."}:l==="RLWL"?{summary:`RLWL${f} · ${g}`,detail:"Remote-location waitlist clears from a smaller route pool than GNWL.",nextStep:"Prefer a confirmed or RAC alternative when timing is important."}:l==="PQWL"?{summary:`PQWL${f} · ${g}`,detail:"Pooled-quota waitlist shares a smaller cancellation pool across stations.",nextStep:"Keep an alternative ready."}:l==="TQWL"?{summary:`TQWL${f} · ${g}`,detail:"Tatkal waitlist is cancelled if it remains waitlisted at chart preparation.",nextStep:"Use a confirmed alternative if the journey is urgent."}:{summary:`GNWL${f} · ${g}`,detail:"General waitlist usually has the broadest cancellation pool on the train.",nextStep:"Wait only if you can accept the confirmation risk."}}function k({name:l}){return r.jsx("span",{"aria-hidden":"true",className:"ux4g-icon-outlined",children:l})}function Q({tone:l,children:p,icon:c}){return r.jsxs("span",{className:`ux4g-tag-tonal-${l} ux4g-tag-s app-status-tag`,children:[c?r.jsx(k,{name:c}):null,p]})}function Dp({selectedHub:l,onSelect:p}){return r.jsxs("div",{className:"india-map-stage",children:[r.jsxs("svg",{className:"india-map-svg",viewBox:"0 0 760 620",role:"img","aria-labelledby":"india-map-title india-map-description",children:[r.jsx("title",{id:"india-map-title",children:"Indian railway network over an India outline"}),r.jsx("desc",{id:"india-map-description",children:"A readable rail corridor overlay on the official Survey of India outline, with selectable gateways around the country."}),r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:"india-map-fill",x1:"0",x2:"1",y1:"0",y2:"1",children:[r.jsx("stop",{offset:"0",className:"map-gradient-start"}),r.jsx("stop",{offset:"1",className:"map-gradient-end"})]}),r.jsx("filter",{id:"map-shadow",x:"-30%",y:"-30%",width:"160%",height:"160%",children:r.jsx("feDropShadow",{dx:"0",dy:"14",stdDeviation:"12",floodOpacity:".14"})}),r.jsx("clipPath",{id:"india-map-clip",children:r.jsx("use",{href:"#india-map-outline"})})]}),r.jsxs("g",{className:"india-map-art",transform:"translate(-233 0) scale(1.613 1)",children:[r.jsx("path",{id:"india-map-outline",className:"india-map-silhouette",filter:"url(#map-shadow)",fill:"url(#india-map-fill)",d:"M301.7 18.5 303.6 21.4 307.8 18.9 312.2 28.8 320.3 36.3 321.7 43 327.2 45.8 327.3 50.5 333.2 51.1 333 48.1 334.7 49.4 337.8 44.7 344.8 43.8 346.8 40.8 350.6 44.6 353.2 44 356.1 48.6 353.7 65.9 350.8 67.5 351 70.2 348.3 70.3 349 74.7 347.4 79 342.3 79.8 344 86.5 342.1 86.4 342.8 91.9 347.5 93.4 346.3 98.1 349.1 103.7 342.6 111 340.5 104.2 337.4 106.3 337.5 112.8 340.8 117.6 339.9 121.5 341.4 124.9 340.1 126.7 341.9 131.6 344.2 128.3 347.2 136 351.6 137 355.5 141.1 355.7 145 363.7 150.9 356.8 160.4 353.8 177.9 365.7 186.6 366.8 190.9 372.8 196 374.7 194.7 378.8 199.3 381.5 198.3 381.8 202.5 388 205.6 388.7 202.7 393.7 205 396.6 201.6 401.7 204.8 402.1 210.3 408.2 215.4 412.6 213 415 218.6 420.1 217.3 424.4 220.6 427.9 217.3 430.9 221.5 436.6 218.4 438 220.7 439.6 213.2 437.3 206.4 438.4 190.3 443.1 186.7 445.6 188.6 445.1 197.2 446.9 201.6 445.2 205.1 449.6 211.1 457.4 212.3 462.4 207.9 466.3 209.9 480.4 206.6 480.6 198.2 479.3 194.7 475.5 195.2 474.1 188.3 478.1 190.3 481 187.1 484.6 187.5 486.4 184 485.7 181.5 491 177 491.8 170.9 498 169.4 500.5 161 504.4 155.5 506.4 158.6 512.9 160 514.3 155.3 519.2 150.6 522.6 153.9 519.9 157.8 520.8 161.1 524.2 157.1 525.6 162.4 522.4 170.1 531.3 169.6 534.5 171.6 535 175.3 530.2 183.9 533.5 193.1 528.5 188.7 523.7 191.4 513.2 205.9 514.3 216 511.9 226.1 509.3 229.8 510.7 238.3 506 259.6 496.8 256.7 498.5 274.4 495.8 276.5 497.5 291.1 494.6 297.6 492.1 293.9 491.2 297.4 485.9 265.2 482.4 265.4 482.8 270.1 480.8 273.8 481.8 277.6 479.6 280.8 477.5 275 476.4 278.1 473.9 268.8 475.8 259.2 478.1 259.5 479.6 256 481.4 257.9 481.4 254.1 484 252.2 484.2 243 487 243.2 486.1 240.3 482.2 237.9 464.8 240.9 458.3 238.8 458.2 226.5 455.8 221.2 454.9 226.4 452.5 225.9 449.4 218.9 447.5 218.9 449.1 221.9 445 221.9 445.8 220.2 441.9 215.3 441.3 218.1 443.5 220.2 439.9 224.5 439.5 231.2 441.2 230.8 444.2 236.2 447.1 235.7 449.4 240.3 443.4 242.2 443.1 247 440.3 247.4 439.1 252.6 442.8 257.7 447.2 259.2 447.8 264.8 445.8 267.2 445.8 271.3 448.5 273.9 447.8 278.5 450.8 279 449.3 283 452.6 303 449.7 303.2 450.4 309.2 449.5 305.4 449.9 308.4 448.6 307 449.1 302 447.1 302.3 446 306.4 444.1 306.6 443.9 311 443 299.6 440.2 297.9 442.8 300.7 438.9 308.6 431.5 312.9 429.1 316.8 428.7 321.1 431.3 328 424.5 342.7 416 347.9 408.3 356.8 399.6 375.6 379.5 400.1 379.5 409.6 372.8 414.6 368 414.7 363.8 426 360.9 422.8 356.3 426.6 353.6 438.2 357.1 472.6 354.9 488.2 350.2 504.4 351.6 530 344.6 530.7 340.1 543.8 341.2 548.8 344.8 548.9 346.2 552.2 340.7 549.9 333.8 553 331.1 556.6 329.6 567.3 323.3 572.9 316.8 567.3 311.3 556.4 302.4 508.3 296.3 495.5 287.6 446.7 282.7 435.6 281 423.1 278 416.8 272.7 367.3 274.3 362.9 273.1 360 272.2 362.2 272.8 354 271 344.2 274.3 330.5 273.6 323.5 271.5 320.5 272.5 313.9 271.3 314.5 275.6 310 271 309.8 273.4 304.2 271 304.2 271.8 299.7 273.9 300.7 274.7 298.5 267.6 303.8 268.4 310.3 266 318.1 251.4 326.3 244.5 319.1 232 293.4 233.6 290.4 233.2 292.1 234.9 291.7 234.3 295.9 240.8 291.2 241.4 293.3 245.1 291.7 249.9 284.1 248.9 283 254.8 279.3 247.6 278 246.6 283 245.8 281.4 238.2 285.4 229.4 276.1 230.5 274.1 228.2 269.5 230.8 264.2 227.2 268.5 225 267.8 227.2 261.3 231.6 261.9 232.5 255.5 233 257.5 240.9 257 245.4 259.8 251.4 255.7 252.9 259.8 257.4 256.7 256.1 255.8 257.4 251.3 253.3 237.5 253.5 231.7 249.3 231 247.7 226.6 249 215.1 242.1 210.7 243.3 202.5 252.3 187.8 254.5 188.1 257.3 194.1 268.2 190.4 273.9 175.5 279.8 171.1 285 154.1 291 149.7 290.8 144.1 298.9 133.5 297 132.3 298.3 117.9 306.2 112 303.6 107 299.4 106.6 299.7 99.8 296.2 101 289.1 94.5 287.9 66.8 294 60.4 295.1 55.9 291 53.5 291.8 47.7 288.1 46.8 285.2 40.4 281.3 41.1 279.7 38.8 280.5 32.7 284.5 29.1 285.5 24.4 293.4 25 291.5 20.8 295.1 23 301.7 18.5Z"}),r.jsxs("g",{clipPath:"url(#india-map-clip)",children:[r.jsxs("g",{className:"map-state-lines","aria-hidden":"true",children:[r.jsx("path",{d:"M304 132C345 145 388 152 430 169c36 15 69 35 98 60"}),r.jsx("path",{d:"M253 215c41 16 76 34 105 64 29 30 47 64 82 73 31 8 66 6 105 30"}),r.jsx("path",{d:"M236 311c38 3 70 19 96 48 23 26 37 60 50 91"}),r.jsx("path",{d:"M388 155c-3 49 18 82 20 127 2 45-16 89-33 128"}),r.jsx("path",{d:"M477 215c-16 32-10 67 12 95 21 26 25 52 12 82"})]}),r.jsxs("g",{className:"map-routes","aria-hidden":"true",children:[r.jsx("path",{className:"map-route map-route-primary",d:"M330 101C348 122 362 141 378 157c34 16 68 34 96 55 25 18 44 38 58 57 12 14 22 23 29 29"}),r.jsx("path",{className:"map-route map-route-secondary",d:"M378 157c-16 39-35 78-54 119-17 37-34 72-47 98 17 25 39 44 57 62 15 17 19 40 13 68"}),r.jsx("path",{className:"map-route map-route-secondary",d:"M347 436c13 19 30 34 49 48 20 16 30 27 35 28"}),r.jsx("path",{className:"map-route map-route-tertiary",d:"M378 157c8 40 18 83 18 126 1 43-12 84-28 126-10 28-18 54-21 95"}),r.jsx("path",{className:"map-route map-route-tertiary",d:"M474 212c-7 36-18 72-30 106-13 36-24 75-31 111-6 31-15 59-24 82"}),r.jsx("path",{className:"map-route map-route-tertiary",d:"M347 504c-11 23-19 47-24 72"}),r.jsx("path",{className:"map-route map-route-primary",d:"M474 212c24 20 35 45 51 69 12 18 24 27 38 31"})]}),r.jsx("g",{className:"map-network-nodes","aria-hidden":"true",children:[["330","101"],["348","122"],["362","141"],["378","157"],["406","171"],["434","187"],["458","202"],["474","212"],["492","229"],["509","250"],["529","272"],["548","297"],["361","198"],["343","238"],["326","276"],["310","315"],["294","350"],["277","374"],["292","397"],["312","418"],["332","438"],["347","456"],["356","479"],["347","504"],["342","532"],["330","557"],["396","283"],["397","326"],["388","368"],["378","409"],["369","452"],["363","479"],["474","244"],["463","282"],["451","318"],["439","357"],["428","397"],["417","436"],["406","474"],["395","512"]].map(([c,g])=>r.jsx("circle",{cx:c,cy:g,r:"4.5"},`${c}-${g}`))})]})]})]}),r.jsx("div",{className:"map-hubs",children:Kr.map(c=>r.jsxs("button",{className:`map-hub map-hub-${c.id} ${l===c.id?"is-selected":""}`,type:"button",style:{left:`${c.mapX}%`,top:`${c.mapY}%`},onClick:()=>p(c.id),"aria-pressed":l===c.id,children:[r.jsx("span",{className:"map-hub-pin",children:r.jsx(k,{name:"train"})}),r.jsxs("span",{className:"map-hub-label",children:[r.jsx("strong",{children:c.name}),r.jsx("small",{children:c.code})]})]},c.id))})]})}function Pp({items:l=iu}){const[p,c]=G.useState(0),[g,f]=G.useState("next"),w=G.useRef(null);if(!l.length)return null;const C=l[p%l.length],D=$=>{f($>0?"next":"previous"),c(H=>(H+$+l.length)%l.length)};return r.jsxs("section",{className:"heritage-feature train-showcase page-container section-block","aria-labelledby":`train-showcase-title-${C.id}`,children:[r.jsxs("div",{className:"heritage-feature-copy train-showcase-copy",children:[r.jsx("p",{className:"eyebrow",children:C.eyebrow}),r.jsx("h2",{id:`train-showcase-title-${C.id}`,"aria-live":"polite",children:C.title}),r.jsx("p",{className:"train-showcase-subtitle",children:C.subtitle}),r.jsx("p",{className:"train-showcase-description",children:C.description}),r.jsxs("span",{className:"train-showcase-stat",children:[r.jsx(k,{name:"verified"})," ",C.stat]}),r.jsxs("a",{className:"ux4g-btn ux4g-btn-outline-primary ux4g-btn-md train-showcase-link",href:C.infoUrl,target:"_blank",rel:"noreferrer",children:["Learn about this train ",r.jsx(k,{name:"open_in_new"})]})]}),r.jsxs("div",{className:"heritage-feature-visual train-showcase-visual",onTouchStart:$=>{var H;w.current=((H=$.changedTouches[0])==null?void 0:H.clientX)??null},onTouchEnd:$=>{var q;const H=w.current,te=(q=$.changedTouches[0])==null?void 0:q.clientX;w.current=null,!(H==null||te==null||Math.abs(te-H)<40)&&D(te<H?1:-1)},children:[r.jsx("img",{className:`train-showcase-image is-${g}`,src:C.image,alt:C.imageAlt,loading:"lazy"},`${C.id}-${g}`),r.jsxs("div",{className:"train-showcase-overlay",children:[r.jsx("span",{children:C.subtitle}),r.jsx("strong",{children:C.title}),r.jsx("small",{children:C.stat})]}),r.jsxs("div",{className:"train-showcase-controls","aria-label":"Train showcase controls",children:[r.jsx("button",{className:"ux4g-icon-btn ux4g-icon-btn-outline-primary ux4g-icon-btn-md",type:"button","aria-label":"Previous train",onClick:()=>D(-1),children:r.jsx(k,{name:"chevron_left"})}),r.jsxs("span",{"aria-live":"polite",children:[String(p%l.length+1).padStart(2,"0")," / ",String(l.length).padStart(2,"0")]}),r.jsx("button",{className:"ux4g-icon-btn ux4g-icon-btn-outline-primary ux4g-icon-btn-md",type:"button","aria-label":"Next train",onClick:()=>D(1),children:r.jsx(k,{name:"chevron_right"})})]})]})]})}function Bp({status:l,position:p,outlook:c}){const[g,f]=G.useState(!1),w=Mp(l,p,c);return r.jsxs(r.Fragment,{children:[r.jsx("button",{className:"status-why",type:"button",onClick:C=>{C.stopPropagation(),f(D=>!D)},"aria-expanded":g,children:"Why?"}),g?r.jsxs("small",{className:"waitlist-insight",children:[r.jsx("strong",{children:w.summary}),r.jsx("span",{children:w.detail}),r.jsx("span",{children:w.nextStep})]}):null]})}function Up({verdict:l,onPrimary:p,onSeeAll:c}){return r.jsxs("section",{className:"best-path-card ux4g-card ux4g-card-solid ux4g-card-vertical","aria-labelledby":"best-path-heading",children:[r.jsxs("div",{className:"best-path-copy",children:[r.jsx("p",{className:"eyebrow",children:"YOUR BEST PATH"}),r.jsx("h2",{id:"best-path-heading",children:l.headline}),r.jsx("p",{className:"best-path-reasoning",children:l.reasoning}),r.jsx("p",{className:"best-path-personalized",children:l.personalizedNote}),r.jsxs("p",{className:"best-path-notification",children:[r.jsx(k,{name:"notifications"})," ",l.notificationTeaser]})]}),r.jsxs("div",{className:"best-path-score",children:[r.jsx("strong",{children:l.confidence}),r.jsx("span",{children:"confidence"})]}),r.jsxs("div",{className:"best-path-actions",children:[r.jsxs("button",{className:"ux4g-btn ux4g-btn-primary ux4g-btn-md",type:"button",onClick:p,children:[l.recommendedAction==="wait_for_tatkal"?"PREPARE FOR TATKAL":"BOOK THIS"," ",r.jsx(k,{name:"arrow_forward"})]}),r.jsx("button",{className:"ux4g-btn ux4g-btn-text-primary ux4g-btn-md",type:"button",onClick:c,children:"See all options"})]})]})}const Rp={tight:"warning",comfortable:"success",ample:"info"};function qp({journey:l,onBookBoth:p}){const c=[l,...l.alternatives??[]],[g,f]=G.useState(l.routeId),w=c.find(C=>C.routeId===g)??c[0];return r.jsxs("section",{className:"connecting-journey-card ux4g-card ux4g-card-solid ux4g-card-vertical","aria-labelledby":"connecting-journey-heading",children:[r.jsxs("div",{className:"section-heading",children:[r.jsxs("div",{children:[r.jsx("p",{className:"eyebrow",children:"CONNECTING JOURNEY"}),r.jsx("h2",{id:"connecting-journey-heading",children:"No direct train — here’s how to get there"}),r.jsxs("p",{children:[c.length," prepared routes · each with one change"]})]}),r.jsx(Q,{tone:"info",icon:"route",children:"Two separate bookings"})]}),r.jsx("div",{className:"connecting-route-options",role:"radiogroup","aria-label":"Connecting train routes",children:c.map(C=>{const D=C.connections[0],$=Math.floor(C.totalDurationMinutes/60),H=C.totalDurationMinutes%60,te=C.routeId===w.routeId;return r.jsxs("article",{className:`connecting-route-option ${te?"is-selected":""}`,children:[r.jsxs("button",{className:"connecting-route-select",type:"button",role:"radio","aria-checked":te,onClick:()=>f(C.routeId),children:[r.jsxs("span",{children:[r.jsx("strong",{children:C.routeLabel}),r.jsx("small",{children:C.routeReason})]}),r.jsxs("span",{className:"connecting-route-metrics",children:[r.jsxs("strong",{children:[$,"h ",H,"m"]}),r.jsxs("small",{children:["₹",C.totalPrice.toLocaleString("en-IN")," total"]})]})]}),r.jsx("div",{className:"connecting-route-legs",children:C.legs.map((q,L)=>r.jsxs("div",{className:"connecting-leg",children:[r.jsxs("div",{className:"connecting-leg-heading",children:[r.jsxs("div",{children:[r.jsxs("span",{children:["LEG ",L+1]}),r.jsxs("h3",{children:[q.train.number," · ",q.train.name]})]}),r.jsxs(Q,{tone:"success",children:[q.train.classes[0].seats," seats"]})]}),r.jsxs("div",{className:"connecting-leg-route",children:[r.jsx("strong",{children:q.train.departure}),r.jsxs("span",{children:[q.fromStation.code," ",q.fromStation.name]}),r.jsx("i",{children:"→"}),r.jsx("strong",{children:q.train.arrival}),r.jsxs("span",{children:[q.toStation.code," ",q.toStation.name]})]}),r.jsxs("p",{children:[q.train.duration," · ",q.train.classes[0].code," · ₹",q.train.classes[0].fare.toLocaleString("en-IN")]}),L===0&&D?r.jsxs("div",{className:`connecting-connection risk-${D.risk}`,children:[r.jsx(k,{name:"sync_alt"}),r.jsxs("div",{children:[r.jsxs("strong",{children:["Change at ",D.atStation," · ",D.bufferMinutes," min"]}),r.jsxs("span",{children:[D.arrivalOfPreviousLeg," arrival → ",D.departureOfNextLeg," departure · ",D.riskNote]}),r.jsx(Q,{tone:Rp[D.risk],children:D.risk})]})]}):null]},q.train.id))})]},C.routeId)})}),r.jsxs("div",{className:"connecting-summary",children:[r.jsxs("span",{children:["Selected route ",r.jsx("strong",{children:w.routeLabel})]}),r.jsxs("span",{children:["Total fare ",r.jsxs("strong",{children:["₹",w.totalPrice.toLocaleString("en-IN")]})]}),r.jsxs("p",{children:[r.jsx(k,{name:"info"})," Each leg gets its own booking and PNR. Passenger details will carry across both."]})]}),r.jsxs("button",{className:"ux4g-btn ux4g-btn-primary ux4g-btn-md",type:"button",onClick:()=>p(w),children:["BOOK THIS ROUTE ",r.jsx(k,{name:"arrow_forward"})]})]})}function $p({value:l,onChange:p,onSubmit:c,compact:g=!1}){const f=(w,C)=>p({...l,[w]:C});return r.jsxs("form",{className:`search-form ${g?"search-form-compact":""}`,onSubmit:w=>{var H;w.preventDefault();const C=w.currentTarget,D=te=>{var q;return(q=C.querySelector(te))==null?void 0:q.value},$=(H=C.querySelector('input[name="quota"]:checked'))==null?void 0:H.value;c({...l,source:D('[aria-label="From station"]')??l.source,destination:D('[aria-label="To station"]')??l.destination,date:D('[aria-label="Journey date"]')??l.date,passengers:Number(D('[aria-label="Number of travellers"]')??l.passengers),quota:$??l.quota})},children:[r.jsxs("div",{className:"search-form-heading",children:[r.jsxs("div",{children:[r.jsx("p",{className:"eyebrow",children:"Plan your journey"}),r.jsx("h2",{children:g?"Update your search":"Where will you go next?"})]}),r.jsx(Q,{tone:"info",icon:"verified_user",children:"Mock journey data"})]}),r.jsxs("div",{className:"search-fields",children:[r.jsxs("label",{className:"ux4g-form-group station-field",children:[r.jsx("span",{children:"From"}),r.jsxs("div",{className:"ux4g-input-container ux4g-input-md ux4g-input-default",children:[r.jsx(k,{name:"trip_origin"}),r.jsx("input",{"aria-label":"From station",list:"station-options",value:l.source,onChange:w=>f("source",w.target.value),placeholder:"Station or city"})]})]}),r.jsx("button",{className:"ux4g-icon-btn ux4g-icon-btn-outline-primary ux4g-icon-btn-md swap-button",type:"button","aria-label":"Swap departure and arrival stations",onClick:()=>p({...l,source:l.destination,destination:l.source}),children:r.jsx(k,{name:"swap_horiz"})}),r.jsxs("label",{className:"ux4g-form-group station-field",children:[r.jsx("span",{children:"To"}),r.jsxs("div",{className:"ux4g-input-container ux4g-input-md ux4g-input-default",children:[r.jsx(k,{name:"location_on"}),r.jsx("input",{"aria-label":"To station",list:"station-options",value:l.destination,onChange:w=>f("destination",w.target.value),placeholder:"Station or city"})]})]}),r.jsxs("label",{className:"ux4g-form-group",children:[r.jsx("span",{children:"Journey date"}),r.jsxs("div",{className:"ux4g-date-picker-container ux4g-input-md",children:[r.jsx(k,{name:"calendar_month"}),r.jsx("input",{className:"ux4g-date-picker-input","aria-label":"Journey date",type:"date",value:l.date,onChange:w=>f("date",w.target.value)})]})]}),r.jsxs("label",{className:"ux4g-form-group",children:[r.jsx("span",{children:"Travellers"}),r.jsxs("div",{className:"ux4g-input-container ux4g-input-md ux4g-input-default",children:[r.jsx(k,{name:"group"}),r.jsx("select",{"aria-label":"Number of travellers",value:l.passengers,onChange:w=>f("passengers",Number(w.target.value)),children:[1,2,3,4,5,6,7,8].map(w=>r.jsxs("option",{value:w,children:[w," ",w===1?"Adult":"Adults"]},w))})]})]})]}),r.jsxs("fieldset",{className:"quota-fieldset",children:[r.jsx("legend",{children:"Quota"}),r.jsx("div",{className:"quota-options",children:["General","Tatkal","Premium Tatkal"].map(w=>r.jsxs("label",{className:"ux4g-radio ux4g-radio-md",children:[r.jsx("input",{type:"radio",name:"quota",value:w,checked:l.quota===w,onChange:()=>f("quota",w)}),r.jsx("span",{children:w})]},w))})]}),l.quota==="Tatkal"?r.jsxs("div",{className:"tatkal-inline",role:"status",children:[r.jsx(k,{name:"bolt"}),r.jsxs("div",{children:[r.jsx("strong",{children:"Tatkal opens today at 10:00 AM"}),r.jsx("span",{children:"Have passenger details ready. AC classes are eligible in this mock journey."})]}),r.jsx("span",{className:"tatkal-countdown",children:"00:42:18"})]}):null,r.jsxs("button",{className:"ux4g-btn ux4g-btn-primary ux4g-btn-md search-submit",type:"submit",children:[r.jsx(k,{name:"search"})," Search trains"]}),r.jsxs("datalist",{id:"station-options",children:[r.jsx("option",{value:"Chandigarh"}),r.jsx("option",{value:"New Delhi"}),r.jsx("option",{value:"Kalka"}),r.jsx("option",{value:"Shimla"}),r.jsx("option",{value:"NDLS"}),r.jsx("option",{value:"KLK"}),r.jsx("option",{value:"SML"})]})]})}const Op=["2A","3A","CC","EC","3E"],Fp=l=>[Math.floor(l/3600),Math.floor(l/60)%60,l%60].map(p=>String(Math.max(0,p)).padStart(2,"0")).join(":");function zp(l,p){return p==="Lowest price"?`${l.name} keeps this ${l.classCode} option among the lower fares prepared for your route.`:p==="Earliest arrival"?`${l.name} is prepared for an earlier arrival while keeping your ${l.classCode} preference.`:`${l.name} is the strongest prepared fit for confirmation-focused travel in ${l.classCode}.`}function ia({train:l,seats:p,preference:c,primary:g=!1,onBook:f}){const w=p===0;return r.jsxs("article",{className:`tatkal-train-option ${g?"tatkal-train-hero":""} ${w?"is-sold-out":""}`,children:[r.jsxs("div",{className:"tatkal-train-heading",children:[r.jsxs("div",{children:[r.jsxs("strong",{children:[l.number," · ",l.name]}),r.jsxs("span",{children:[l.departure," → ",l.arrival," · ",l.classCode]})]}),p===void 0?r.jsx(Q,{tone:l.role==="backup"?"neutral":"brand",children:l.role==="backup"?"Backup":"Likely best fit"}):r.jsx(Q,{tone:w?"neutral":"success",children:w?"SOLD OUT":`${p} seats`})]}),p===void 0?r.jsxs("p",{className:"tatkal-availability-note",children:[r.jsx(k,{name:"info"})," Tatkal availability opens with booking"]}):r.jsxs("p",{className:"tatkal-reasoning",children:[r.jsx(k,{name:"lightbulb"})," ",zp(l,c)," ",r.jsx("span",{children:"· Simulated availability"})]}),r.jsxs("div",{className:"tatkal-train-footer",children:[r.jsxs("strong",{children:["₹",l.price.toLocaleString("en-IN")," ",r.jsx("small",{children:"per passenger"})]}),p!==void 0?r.jsx("button",{className:`ux4g-btn ${g?"ux4g-btn-primary":"ux4g-btn-outline-primary"} ux4g-btn-md`,type:"button",disabled:w,onClick:()=>f==null?void 0:f(l,p),children:g?"BOOK NOW":"BOOK BACKUP"}):null]})]})}function Hp({from:l,to:p,journeyDate:c,selectedClass:g,passengerCount:f,preference:w,onBook:C}){const D=g!=="1A",$=Op.includes(g)?"10:00 AM":"11:00 AM",[H,te]=G.useState(()=>Date.now()),q=new Date(`${c}T${$==="10:00 AM"?"10:00:00":"11:00:00"}`);q.setDate(q.getDate()-1);const L=Math.max(0,Math.ceil((q.getTime()-H)/1e3)),ce=D&&L===0,[ke,se]=G.useState(0),Z=la.filter(X=>X.classCode===g),Te=Z.length>=2?Z:la.filter(X=>X.classCode!=="SL").slice(0,3),Ae=Te.find(X=>X.role==="recommended")??Te[0],ze=Te.find(X=>X.role==="backup")??Te[1];return G.useEffect(()=>{if(ce)return;const X=window.setInterval(()=>te(Date.now()),1e3);return()=>window.clearInterval(X)},[ce]),G.useEffect(()=>{if(!ce)return;const X=window.setInterval(()=>se(Qe=>Math.min(Qe+1,4)),9e3);return()=>window.clearInterval(X)},[ce]),D?r.jsxs("section",{className:`ux4g-card ux4g-card-solid ux4g-card-vertical tatkal-command-card ${ce?"is-open":""}`,"aria-live":"polite",children:[r.jsxs("div",{className:"tatkal-command-header",children:[r.jsxs("div",{children:[r.jsxs("p",{className:"eyebrow",children:[r.jsx(k,{name:"bolt"})," Tatkal"]}),r.jsxs("h2",{children:[l," → ",p]}),r.jsxs("p",{children:[ht(c)," · ",g]})]}),ce?r.jsx(Q,{tone:"brand",icon:"bolt",children:"TATKAL OPEN"}):r.jsxs(Q,{tone:"warning",icon:"schedule",children:["Opens ",$]})]}),f>4?r.jsxs("div",{className:"ux4g-alert ux4g-alert-warning tatkal-passenger-warning",children:[r.jsx(k,{name:"info"}),r.jsxs("div",{children:[r.jsx("strong",{children:"More than 4 passengers"}),r.jsx("p",{children:"Tatkal permits a maximum of 4 passengers per PNR. Your saved details can still be used across separate bookings."})]})]}):null,ce?r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"tatkal-ready-summary",children:[r.jsx(k,{name:"check_circle"})," Ready · ",f," ",f===1?"passenger":"passengers"," · ",g]}),r.jsxs("div",{className:"tatkal-live-options",children:[r.jsx(ia,{train:Ae,seats:Ae.seatSequence[ke],preference:w,primary:!0,onBook:C}),r.jsx(ia,{train:ze,seats:ze.seatSequence[ke],preference:w,onBook:C})]})]}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"tatkal-opening-info",children:[r.jsxs("div",{children:[r.jsx("span",{children:"Class"}),r.jsx("strong",{children:g})]}),r.jsxs("div",{children:[r.jsx("span",{children:"Opens one day before departure"}),r.jsx("strong",{children:$})]}),r.jsxs("div",{children:[r.jsx("span",{children:"Countdown"}),r.jsx("strong",{children:Fp(L)})]})]}),r.jsxs("div",{className:"tatkal-readiness",children:[r.jsxs("div",{children:[r.jsxs("div",{children:[r.jsx("p",{className:"meta-label",children:"Readiness"}),r.jsx("h3",{children:"100% READY"})]}),r.jsx(Q,{tone:"success",icon:"check_circle",children:"Saved"})]}),r.jsx("ul",{children:["Passenger details","Preferences","Primary option selected","Backup option selected","Payment method ready"].map(X=>r.jsxs("li",{children:[r.jsx(k,{name:"check_circle"})," ",X]},X))})]}),r.jsx("div",{className:"tatkal-preview-list",children:Te.slice(0,3).map(X=>r.jsx(ia,{train:X,preference:w},X.id))})]}),r.jsxs("div",{className:"tatkal-rules-strip",children:["AC opens 10:00 AM ",r.jsx("span",{children:"·"})," Non-AC opens 11:00 AM ",r.jsx("span",{children:"·"})," Max 4 passengers per PNR ",r.jsx("span",{children:"·"})," Opens 1 day before departure"]})]}):r.jsxs("section",{className:"ux4g-card ux4g-card-outline ux4g-card-vertical tatkal-command-card",children:[r.jsxs("div",{className:"tatkal-command-header",children:[r.jsxs("div",{children:[r.jsxs("p",{className:"eyebrow",children:[r.jsx(k,{name:"bolt"})," Tatkal"]}),r.jsxs("h2",{children:[l," → ",p]}),r.jsx("p",{children:ht(c)})]}),r.jsx(Q,{tone:"neutral",children:"Not eligible"})]}),r.jsxs("div",{className:"ux4g-alert ux4g-alert-info",children:[r.jsx(k,{name:"info"}),r.jsxs("div",{children:[r.jsx("strong",{children:"1A is not eligible for Tatkal."}),r.jsx("p",{children:"Select 2A, 3A, CC, EC, 3E, or a non-AC class to prepare a Tatkal booking."})]})]})]})}function Wp({train:l,selectedClass:p,compare:c,compareDisabled:g=!1,onCompare:f,onSelect:w,onExplain:C}){var q;const[D,$]=G.useState(!1),[H,te]=G.useState(!1);return r.jsxs("article",{className:`ux4g-card ux4g-card-solid ux4g-card-vertical app-train-card ${l.score>=90?"is-recommended":""}`,children:[r.jsxs("div",{className:"train-card-topline",children:[r.jsxs("div",{className:"train-title-wrap",children:[l.score>=90?r.jsx(Q,{tone:"brand",icon:"auto_awesome",children:"Best for you"}):null,r.jsxs("div",{children:[r.jsx("h3",{children:l.name}),r.jsxs("p",{children:[l.number," · ",l.type]})]})]}),r.jsxs("label",{className:"compare-check",children:[r.jsx("input",{type:"checkbox",checked:c,disabled:g,onChange:f})," Compare",g?r.jsx("small",{children:"Compare up to 3"}):null]})]}),r.jsxs("div",{className:"train-route",children:[r.jsxs("div",{className:"station-time",children:[r.jsx("strong",{children:l.departure}),r.jsx("span",{children:l.sourceCode}),r.jsx("small",{children:l.source})]}),r.jsxs("div",{className:"route-line",children:[r.jsx("span",{children:l.duration}),r.jsxs("div",{children:[r.jsx("span",{className:"route-dot"}),r.jsx("span",{className:"route-track"}),r.jsx("span",{className:"route-dot"})]}),r.jsx("small",{children:l.stops===0?"Direct":`${l.stops} stops`})]}),r.jsxs("div",{className:"station-time station-time-right",children:[r.jsx("strong",{children:l.arrival}),r.jsx("span",{children:l.destinationCode}),r.jsx("small",{children:l.destination})]})]}),r.jsxs("div",{className:"train-meta-grid",children:[r.jsxs("div",{children:[r.jsx("span",{className:"meta-label",children:"Why this train?"}),r.jsx("div",{className:"reason-list",children:((q=l.relativeReasons)!=null&&q.length?l.relativeReasons:l.recommendation).map(L=>r.jsxs("span",{children:[r.jsx(k,{name:"check_circle"}),L]},L))}),l.breakdown?r.jsxs("button",{className:"score-breakdown-toggle",type:"button",onClick:()=>te(!H),children:[r.jsx(k,{name:H?"expand_less":"expand_more"})," Score breakdown"]}):null,H&&l.breakdown?r.jsx("div",{className:"score-breakdown",children:Object.entries(l.breakdown).map(([L,ce])=>r.jsxs("div",{children:[r.jsx("span",{children:L}),r.jsx("i",{children:r.jsx("b",{style:{width:`${ce}%`}})}),r.jsx("strong",{children:ce})]},L))}):null]}),r.jsxs("div",{children:[r.jsx("span",{className:"meta-label",children:"Amenities"}),r.jsx("div",{className:"amenity-list",children:l.amenities.map(L=>r.jsx("span",{children:L},L))})]})]}),r.jsx("div",{className:"availability-row",children:l.classes.map(L=>{const ce=p===`${l.id}-${L.code}`,ke=Ep(L.status),se=L.waitlistType??(L.status==="rac"?"RAC":"GNWL");return r.jsxs("div",{className:`availability-option ${ce?"selected":""}`,role:"button",tabIndex:0,"aria-label":`${L.code} ${L.status==="available"?`${L.seats} confirmed seats`:`${L.status==="rac"?"RAC":"WL"} ${L.position}`} ₹${L.fare}`,onClick:()=>w(L),onKeyDown:Z=>{(Z.key==="Enter"||Z.key===" ")&&(Z.preventDefault(),w(L))},children:[r.jsxs("span",{className:"availability-class",children:[L.code," ",r.jsx("small",{children:L.label})]}),r.jsx(Q,{tone:ke,children:L.status==="available"?`${L.seats} confirmed seats`:`${L.status==="rac"?"RAC":"WL"} ${L.position} · ${L.confirmationProbability??Cp(L.status)}`}),r.jsxs("strong",{children:["₹",L.fare.toLocaleString("en-IN")]}),L.status!=="available"?r.jsxs("span",{className:"availability-explanation",children:[L.status==="rac"?"You can board · berth may be shared":"Seat is not confirmed yet"," ",r.jsx(Bp,{status:se,position:L.position,outlook:L.confirmationProbability})]}):null]},L.code)})}),D?r.jsxs("div",{className:"train-advanced",children:[r.jsx("strong",{children:"Good to know"}),r.jsx("p",{children:"Mock availability is checked again at payment. A seat request is not a confirmed allocation until the booking state changes to confirmed."}),r.jsxs("div",{className:"advanced-facts",children:[r.jsxs("span",{children:[r.jsx(k,{name:"luggage"})," No transfer"]}),r.jsxs("span",{children:[r.jsx(k,{name:"schedule"})," On-time history not connected"]}),r.jsxs("span",{children:[r.jsx(k,{name:"restaurant"})," Pantry available"]})]})]}):null,r.jsxs("div",{className:"train-card-actions",children:[r.jsxs("button",{className:"ux4g-btn ux4g-btn-text-primary ux4g-btn-md",type:"button",onClick:()=>$(!D),children:[r.jsx(k,{name:D?"expand_less":"expand_more"})," ",D?"Hide details":"More details"]}),r.jsx("button",{className:"ux4g-btn ux4g-btn-outline-primary ux4g-btn-md",type:"button",onClick:()=>C("How this recommendation works",`${l.name} scores ${l.score}/100 because of its ${l.duration} journey, ${l.classes[0].status==="available"?"good availability":"current booking status"}, and departure time. You can change the priority above at any time.`),children:"Why this train?"}),r.jsxs("button",{className:"ux4g-btn ux4g-btn-primary ux4g-btn-md",type:"button",onClick:()=>w(l.classes[0]),children:["Select train ",r.jsx(k,{name:"arrow_forward"})]})]})]})}function Vp({trains:l,onClose:p,onSelect:c}){const g=_p(l);return r.jsx("div",{className:"compare-drawer-backdrop",role:"presentation",children:r.jsxs("section",{className:"compare-drawer ux4g-card ux4g-card-solid",role:"dialog","aria-modal":"true","aria-label":"Compare selected trains",children:[r.jsxs("div",{className:"drawer-header",children:[r.jsxs("div",{children:[r.jsx("p",{className:"eyebrow",children:"Compare trains"}),r.jsx("h2",{children:"See the trade-offs"})]}),r.jsx("button",{className:"ux4g-icon-btn ux4g-icon-btn-outline-primary ux4g-icon-btn-md",type:"button",onClick:p,"aria-label":"Close comparison",children:r.jsx(k,{name:"close"})})]}),r.jsxs("div",{className:"comparison-table",style:{"--comparison-columns":l.length},children:[r.jsxs("div",{className:"comparison-row comparison-heading",children:[r.jsx("span",{children:"Attribute"}),l.map(f=>r.jsxs("strong",{children:[f.name,r.jsx("small",{children:f.number})]},f.id))]}),g.map(f=>r.jsxs("div",{className:"comparison-row",children:[r.jsx("span",{children:f.label}),f.values.map((w,C)=>r.jsx("strong",{className:f.bestIndexes.includes(C)?"is-best":"",children:w},`${f.label}-${C}`))]},f.label)),r.jsxs("div",{className:"comparison-row comparison-actions",children:[r.jsx("span",{}),r.jsx("div",{className:"comparison-select-buttons",children:l.map(f=>r.jsx("button",{className:"ux4g-btn ux4g-btn-primary ux4g-btn-sm",type:"button",onClick:()=>c(f),children:"Select this train"},f.id))})]})]})]})})}function Jc({active:l}){const p=[{id:"passengers",label:"Passengers"},{id:"seats",label:"Seats"},{id:"review",label:"Review"},{id:"payment",label:"Payment"}],c=p.findIndex(g=>g.id===l);return r.jsx("div",{className:"ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-center booking-stepper","aria-label":"Booking progress",children:p.map((g,f)=>r.jsxs("div",{className:`ux4g-stepper-step ${f<c?"completed":""} ${g.id===l?"active":""}`,children:[r.jsx("span",{children:f<c?r.jsx(k,{name:"check"}):f+1}),r.jsx("small",{children:g.label})]},g.id))})}function Zc({selectedCoach:l="B2",onSelect:p}){return r.jsx("div",{className:"coach-map","aria-label":"Coach selector",children:["B1","B2","B3","B4"].map(c=>r.jsxs("button",{type:"button",className:`coach-card ${l===c?"selected":""}`,onClick:()=>p==null?void 0:p(c),children:[r.jsx("span",{children:c}),r.jsx("small",{children:c==="B2"?"Your coach":"AC 3 Tier"})]},c))})}function Yp({selectedSeats:l,onToggle:p}){const c=["21","22","23","24","25","26","27","28","29","30","31","32"];return r.jsxs("div",{className:"seat-map","aria-label":"Seat map for coach B2",children:[r.jsxs("div",{className:"seat-map-header",children:[r.jsx("span",{children:"Window"}),r.jsx("span",{children:"Coach B2 · AC 3 Tier"}),r.jsx("span",{children:"Aisle"})]}),r.jsx("div",{className:"seat-grid",children:c.map((g,f)=>{const w=["25","29"].includes(g),C=l.includes(g);return r.jsxs("button",{type:"button",className:`seat ${w?"unavailable":""} ${C?"selected":""}`,disabled:w,"aria-pressed":C,onClick:()=>p(g),children:[r.jsx("strong",{children:g}),r.jsx("span",{children:f%3===0?"Lower":f%3===1?"Middle":"Upper"})]},g)})}),r.jsxs("div",{className:"seat-legend",children:[r.jsxs("span",{children:[r.jsx("i",{className:"seat-key available"})," Available"]}),r.jsxs("span",{children:[r.jsx("i",{className:"seat-key chosen"})," Selected"]}),r.jsxs("span",{children:[r.jsx("i",{className:"seat-key locked"})," Unavailable"]})]})]})}function eu({passengers:l,onChange:p}){const c=(g,f,w)=>p(l.map((C,D)=>D===g?{...C,[f]:w}:C));return r.jsx("div",{className:"passenger-fields",children:l.map((g,f)=>r.jsxs("div",{className:"passenger-row",children:[r.jsx("div",{className:"passenger-number",children:f+1}),r.jsxs("label",{className:"ux4g-form-group",children:[r.jsx("span",{children:"Passenger name"}),r.jsx("div",{className:`ux4g-input-container ux4g-input-md ux4g-input-${g.name?"default":"error"}`,children:r.jsx("input",{"aria-label":`Passenger ${f+1} name`,value:g.name,onChange:w=>c(f,"name",w.target.value),placeholder:"Full name"})})]}),r.jsxs("label",{className:"ux4g-form-group",children:[r.jsx("span",{children:"Age"}),r.jsx("div",{className:"ux4g-input-container ux4g-input-md ux4g-input-default",children:r.jsx("input",{"aria-label":`Passenger ${f+1} age`,value:g.age,onChange:w=>c(f,"age",w.target.value),inputMode:"numeric",placeholder:"Age"})})]}),r.jsxs("label",{className:"ux4g-form-group",children:[r.jsx("span",{children:"Berth preference"}),r.jsx("div",{className:"ux4g-input-container ux4g-input-md ux4g-input-default",children:r.jsxs("select",{"aria-label":`Passenger ${f+1} berth preference`,value:g.berth,onChange:w=>c(f,"berth",w.target.value),children:[r.jsx("option",{children:"Lower"}),r.jsx("option",{children:"Middle"}),r.jsx("option",{children:"Upper"}),r.jsx("option",{children:"No preference"})]})})]})]},f))})}function Kp({title:l,body:p,onClose:c}){return G.useEffect(()=>{const g=f=>{f.key==="Escape"&&c()};return document.addEventListener("keydown",g),()=>document.removeEventListener("keydown",g)},[c]),r.jsx("div",{className:"ux4g-modal-backdrop ux4g-modal-backdrop-50 app-modal-backdrop",role:"presentation",onMouseDown:c,children:r.jsxs("div",{className:"ux4g-modal-box ux4g-modal-m app-modal",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",onMouseDown:g=>g.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("div",{className:"modal-icon",children:r.jsx(k,{name:"lightbulb"})}),r.jsx("button",{className:"ux4g-icon-btn ux4g-icon-btn-text-primary ux4g-icon-btn-md",type:"button","aria-label":"Close explanation",onClick:c,children:r.jsx(k,{name:"close"})})]}),r.jsx("h2",{id:"modal-title",children:l}),r.jsx("p",{children:p}),r.jsx("button",{className:"ux4g-btn ux4g-btn-primary ux4g-btn-md",type:"button",onClick:c,children:"Got it"})]})})}function Gp({onClose:l}){return G.useEffect(()=>{const p=c=>{c.key==="Escape"&&l()};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[l]),r.jsx("div",{className:"drawer-layer",role:"presentation",onMouseDown:l,children:r.jsxs("aside",{className:"ux4g-drawer ux4g-drawer-right app-drawer",role:"dialog","aria-modal":"true","aria-labelledby":"notifications-title",onMouseDown:p=>p.stopPropagation(),children:[r.jsxs("div",{className:"drawer-header",children:[r.jsx("div",{children:r.jsx("h2",{id:"notifications-title",children:"Notifications"})}),r.jsx("button",{className:"ux4g-icon-btn ux4g-icon-btn-text-primary ux4g-icon-btn-md",type:"button","aria-label":"Close notifications",onClick:l,children:r.jsx(k,{name:"close"})})]}),r.jsx("div",{className:"notification-list",children:yp.map(p=>r.jsxs("div",{className:"notification-item",children:[r.jsx(Q,{tone:p.tone,icon:p.icon,children:"New"}),r.jsx("h3",{children:p.title}),r.jsx("p",{children:p.body}),r.jsx("span",{children:p.time})]},p.id))})]})})}function Qp(){const[l,p]=G.useState(0);return r.jsx("div",{className:"faq-list",children:vp.map((c,g)=>r.jsxs("div",{className:`ux4g-accordion ux4g-accordion-arrow-right ux4g-accordion-bordered faq-item ${l===g?"open":""}`,children:[r.jsxs("button",{type:"button",onClick:()=>p(l===g?-1:g),"aria-expanded":l===g,children:[r.jsx("span",{children:c.question}),r.jsx(k,{name:l===g?"expand_less":"expand_more"})]}),l===g?r.jsx("p",{children:c.answer}):null]},c.question))})}function sa(){const[l,p]=G.useState("Ask about a booking, RAC, refunds, coaches, or your journey status."),c=["What does RAC mean?","Can I cancel this ticket?","Where is my coach?"],g={"What does RAC mean?":"RAC means you can board the train. Your seat is valid, but the berth may be shared. Your status can improve before departure.","Can I cancel this ticket?":"This mock booking is eligible for cancellation. The estimated refund is ₹1,045 after a ₹180 cancellation charge and ₹20 in non-refundable charges.","Where is my coach?":"Your coach is B2, near the middle of the train. Your selected seats are B2-21 and B2-22."};return r.jsxs("div",{className:"assistant-panel ux4g-card ux4g-card-solid ux4g-card-vertical",children:[r.jsxs("div",{className:"assistant-heading",children:[r.jsx("div",{className:"assistant-avatar",children:r.jsx(k,{name:"auto_awesome"})}),r.jsxs("div",{children:[r.jsx("p",{className:"eyebrow",children:"India Connect assistant"}),r.jsx("h3",{children:"Understand your journey"})]}),r.jsx(Q,{tone:"info",children:"Context-aware mock"})]}),r.jsx("div",{className:"assistant-message",children:r.jsx("p",{children:l})}),r.jsx("div",{className:"assistant-prompts",children:c.map(f=>r.jsx("button",{className:"ux4g-filter-chip-md",type:"button",onClick:()=>p(g[f]),children:f},f))}),r.jsxs("div",{className:"ux4g-feedback",children:[r.jsx("p",{children:"Was this helpful?"}),r.jsxs("div",{className:"ux4g-feedback-chip-wrapper",children:[r.jsx("button",{className:"ux4g-filter-chip-md",type:"button",children:"Yes"}),r.jsx("button",{className:"ux4g-filter-chip-md",type:"button",children:"No"})]})]})]})}function ht(l,p=!1){return new Intl.DateTimeFormat("en-IN",{...p?{weekday:"long"}:{},day:"numeric",month:"short",year:"numeric"}).format(new Date(`${l}T12:00:00`))}function nu(){return{name:"",age:"",gender:"Prefer not to say",berth:"Lower"}}function Xp({onClick:l,count:p}){return r.jsxs("button",{className:"ux4g-icon-btn ux4g-icon-btn-text-primary ux4g-icon-btn-md notification-button",type:"button","aria-label":`${p} notifications`,onClick:l,children:[r.jsx(k,{name:"notifications"}),r.jsx("span",{children:p})]})}const ps=l=>Math.min(100,58+(l.seatSequence[0]??0)*5),Jp=l=>{var p,c,g;return((p=l.classes[0])==null?void 0:p.status)==="available"||((c=l.classes[0])==null?void 0:c.status)==="rac"?"Likely to confirm":((g=l.classes[0])==null?void 0:g.confirmationProbability)??"Possible"};function Zp(l,p,c,g){const f=l[0];if(!f){const L=p==null?void 0:p.trains[0];return{headline:p?"Prepare for Tatkal":"No direct booking path yet",reasoning:p?`${(L==null?void 0:L.name)??"A prepared train"} is held for the ${p.opensAt} opening window.`:"Try another route or date to see prepared train options.",confidence:L?ps(L):0,personalizedNote:`${c} ${c===1?"traveller":"travellers"} · ${g}`,notificationTeaser:p?"You would be notified the moment Tatkal opens.":"You would be notified when a matching train is available.",recommendedAction:"wait_for_tatkal",recommendedTrainId:(L==null?void 0:L.id)??""}}const w=Jp(f),C=p==null?void 0:p.trains.slice().sort((L,ce)=>ps(ce)-ps(L))[0],D=C?ps(C):0;if(w==="Unlikely to confirm"&&!!(C&&D>f.score)&&C)return{headline:"Wait for a stronger Tatkal chance",reasoning:`${f.name} is WL ${f.classes[0].position??"—"} (${w}), while ${C.name} opens at ${p==null?void 0:p.opensAt} with ${C.seatSequence[0]??0} prepared seats in this demo.`,confidence:D,personalizedNote:`${c} ${c===1?"traveller":"travellers"} · ${g} — keep passenger details ready before the window opens.`,notificationTeaser:"You would be notified the moment Tatkal opens.",recommendedAction:"wait_for_tatkal",recommendedTrainId:C.id};const H=f.classes[0],te=H.status==="available"?`${H.seats} confirmed seats`:`${H.status==="rac"?"RAC":"WL"} ${H.position??"—"} (${w})`,q=`It has the strongest current confirmation outlook in ${H.code}.`;return{headline:w==="Likely to confirm"&&H.status==="available"?`Book ${f.name} — confirmed and ready`:`Book ${f.name} with the clearest trade-off`,reasoning:`${f.name} scores ${f.score}/100 with ${te}; ${q}`,confidence:f.score,personalizedNote:`${c} ${c===1?"traveller":"travellers"} · ${g}`,notificationTeaser:"You would be notified as soon as your seat is confirmed.",recommendedAction:"book_now",recommendedTrainId:f.id}}const eh=l=>{const[p,c]=l.split(":").map(Number);return p*60+c},fs=l=>{const p=l.match(/(\d+)h\s*(\d+)m/);return p?Number(p[1])*60+Number(p[2]):0};function nh(l){const p=l.map(g=>{var f;return((f=g.classes[0])==null?void 0:f.fare)??0}),c=l.map(g=>fs(g.duration));return l.map(g=>{const f=g.classes[0],w=(f==null?void 0:f.status)==="available"?Math.min(100,58+(f.seats??0)):(f==null?void 0:f.status)==="rac"?48:Math.max(12,42-((f==null?void 0:f.position)??20)),C=Math.max(40,100-Math.abs(eh(g.departure)-390)/4),D=Math.max(30,100-(fs(g.duration)-Math.min(...c))/3),$=Math.max(30,100-(f.fare-Math.min(...p))/12),H={availability:Math.round(w),timing:Math.round(C),duration:Math.round(D),price:Math.round($)},te=Math.round(H.availability*.4+H.timing*.2+H.duration*.25+H.price*.15);return{...g,score:te,breakdown:H,relativeReasons:[]}}).sort((g,f)=>f.score-g.score)}function th(l){return l.map(p=>{const c=l.find(w=>w.id!==p.id);if(!c)return p;const g=[],f=c.classes[0].fare-p.classes[0].fare;return f>0&&g.push(`₹${f} cheaper than ${c.name}`),fs(p.duration)<fs(c.duration)&&g.push(`${c.duration} route reduced to ${p.duration}`),p.breakdown.availability>c.breakdown.availability&&g.push(`Stronger confirmation outlook than ${c.name}`),g.length||g.push(`Comparable overall to ${c.name}, with a better ${p.breakdown.timing>=c.breakdown.timing?"departure time":"fare"} fit`),{...p,relativeReasons:g.slice(0,3)}})}function rh(l){if(l.length<2||Math.abs(l[0].score-l[1].score)>5)return null;const[p,c]=l,g=Object.keys(p.breakdown).sort((f,w)=>p.breakdown[w]-c.breakdown[w]-(p.breakdown[f]-c.breakdown[f]))[0];return`Both are similar overall — ${p.name} wins on ${g}.`}const oa=[{name:"Aarav Sharma",age:"31",gender:"Male",berth:"Lower"},{name:"Meera Sharma",age:"29",gender:"Female",berth:"Lower"},{name:"Ishaan Sharma",age:"8",gender:"Male",berth:"Middle"}],ih={source:"Chandigarh",destination:"New Delhi",date:"2026-08-25",passengers:2,quota:"General"},aa=(l,p)=>{const c=Yr.filter(g=>er(g.sourceCode)===er(l.source)&&er(g.destinationCode)===er(l.destination)).filter(g=>g.classes.some(f=>f.code===p)).map(g=>({...g,classes:g.classes.filter(f=>f.code===p).map(f=>{const w=ru(l.source,l.destination,l.date,f.code,g.id);return w.status==="rac"?{...f,status:"rac",seats:void 0,position:w.waitlist,waitlistType:w.waitlistType,confirmationProbability:w.confirmationProbability}:w.confirmedSeats>0?{...f,status:"available",seats:w.confirmedSeats,position:void 0,confirmationProbability:void 0,waitlistType:void 0}:{...f,status:"waitlist",seats:void 0,position:w.waitlist,waitlistType:w.waitlistType,confirmationProbability:w.confirmationProbability}})}));return th(nh(c))};function sh(){const[l,p]=G.useState("home"),[c,g]=G.useState(ih),[f,w]=G.useState(Yr[0]),[C,D]=G.useState(Yr[0].classes[0]),[$,H]=G.useState([]),[te,q]=G.useState(!1),[L,ce]=G.useState("Best overall"),[ke,se]=G.useState(null),[Z,Te]=G.useState(!1),[Ae,ze]=G.useState("light"),[X,Qe]=G.useState("English"),[Me,He]=G.useState("new-delhi"),[Ne,ln]=G.useState("passengers"),[De,hn]=G.useState(["21","22"]),[Pe,We]=G.useState("B2"),[Se,Xe]=G.useState(oa.slice(0,2)),[Be,ge]=G.useState(!0),[A,O]=G.useState("together"),[M,m]=G.useState("idle"),[b,W]=G.useState("BOOKING_PENDING"),[K,ee]=G.useState("idle"),[Y,ue]=G.useState(null),[re,pe]=G.useState(0),ve=_=>ln(I=>I==="seats"&&_==="passengers"?"review":_);G.useEffect(()=>{document.documentElement.dataset.theme=Ae,document.documentElement.lang={English:"en",हिन्दी:"hi",తెలుగు:"te",ಕನ್ನಡ:"kn",ਪੰਜਾਬੀ:"pa",मराठी:"mr",বাংলা:"bn",தமிழ்:"ta"}[X]??"en"},[Ae,X]);const oe=_=>{p(_),window.history.pushState({},"",`#${_}`),window.scrollTo({top:0,behavior:"smooth"})},Gr=_=>{g(_),ue(null),pe(0),Xe(I=>Array.from({length:_.passengers},(ne,je)=>I[je]??oa[je]??nu())),oe("results")},An=(_,I)=>{w(_),D(I),ln("passengers"),m("idle"),W("BOOKING_PENDING"),hn(["21","22","23","24","26","27","28","30"].slice(0,c.passengers)),oe("booking")},nr=(_,I)=>{const ne=Yr.find(bn=>bn.number===_.number),je=ne==null?void 0:ne.classes.find(bn=>bn.code===_.classCode),$e=(ne==null?void 0:ne.duration)??"5h 00m",fn={...je??C,code:_.classCode,label:(je==null?void 0:je.label)??_.classCode,status:"available",seats:Math.max(1,I),position:void 0,confirmationProbability:void 0,waitlistType:void 0,fare:_.price},_n={...ne??f,id:`tatkal-${_.id}`,number:_.number,name:_.name,source:c.source,destination:c.destination,sourceCode:(ne==null?void 0:ne.sourceCode)??f.sourceCode,destinationCode:(ne==null?void 0:ne.destinationCode)??f.destinationCode,departure:_.departure,arrival:_.arrival,duration:$e,score:100,recommendation:["Tatkal seat selected","Prepared passenger details","Live availability checked at payment"],classes:[fn]};g(bn=>({...bn,quota:"Tatkal"})),w(_n),D(fn),ln("passengers"),m("idle"),W("BOOKING_PENDING"),hn(["21","22","23","24","26","27","28","30"].slice(0,c.passengers)),oe("booking")},Qr=_=>{ue(_),pe(0);const I=_.legs[0];An(I.train,I.train.classes[0])},Xr=()=>{if(!Y)return;const _=Y.legs[re+1];if(!_)return oe("journey");pe(I=>I+1),An(_.train,_.train.classes[0])},tr=_=>H(I=>I.includes(_)?I.filter(ne=>ne!==_):I.length<3?[...I,_]:I),Jr=_=>{g(_),_.passengers!==Se.length&&Xe(I=>Array.from({length:_.passengers},(ne,je)=>I[je]??oa[je]??nu()))},rr=_=>hn(I=>I.includes(_)?I.filter(ne=>ne!==_):I.length<c.passengers?[...I,_]:I),ft=()=>{m("processing"),window.setTimeout(()=>{m("received"),W("CONFIRMED"),ve("confirmation")},900)},Vn=()=>{m("received"),W("BOOKING_PENDING")},ir=()=>{m("failed"),W("BOOKING_PENDING")},Zr=()=>{const _=aa(c,C.code).find(ne=>ne.id!==f.id);if(!_)return oe("results");const I=_.classes.find(ne=>ne.code===C.code)??_.classes[0];w(_),D(I),hn(["21","22","23","24","26","27","28","30"].slice(0,c.passengers)),m("idle"),W("BOOKING_PENDING"),ln("passengers"),oe("booking")},ei=()=>{const _=Kr.find(I=>I.id===Me)??Kr[1];return r.jsxs(r.Fragment,{children:[r.jsxs("section",{className:"home-hero page-container",children:[r.jsxs("div",{className:"home-hero-copy",children:[r.jsxs("h1",{children:["Find your way across ",r.jsx("span",{children:"India."})]}),r.jsx("p",{children:"Find your route, book with confidence, and enjoy the journey."}),r.jsxs("div",{className:"hero-actions",children:[r.jsxs("button",{className:"ux4g-btn ux4g-btn-primary ux4g-btn-md",type:"button",onClick:()=>{var I;return(I=document.getElementById("home-search"))==null?void 0:I.scrollIntoView({behavior:"smooth",block:"center"})},children:["Plan a journey ",r.jsx(k,{name:"arrow_forward"})]}),r.jsxs("button",{className:"ux4g-btn ux4g-btn-text-primary ux4g-btn-md",type:"button",onClick:()=>{var I;return(I=document.getElementById("india-network"))==null?void 0:I.scrollIntoView({behavior:"smooth"})},children:["Explore the rail map ",r.jsx(k,{name:"map"})]})]})]}),r.jsxs("div",{className:"home-search-panel",id:"home-search",children:[r.jsx("div",{className:"home-search-intro",children:r.jsx("h2",{children:"Where will you go next?"})}),r.jsx($p,{value:c,onChange:Jr,onSubmit:Gr})]})]}),r.jsxs("section",{className:"india-network-section page-container section-block",id:"india-network",children:[r.jsxs("div",{className:"section-heading network-heading",children:[r.jsxs("div",{children:[r.jsx("p",{className:"eyebrow",children:"India by rail"}),r.jsx("h2",{children:"Choose your gateway."}),r.jsx("p",{children:"Select a city to explore the network."})]}),r.jsx(Q,{tone:"info",icon:"verified_user",children:"Official outline"})]}),r.jsxs("div",{className:"network-layout",children:[r.jsxs("div",{className:"india-map-card ux4g-card ux4g-card-solid ux4g-card-vertical",children:[r.jsxs("div",{className:"map-card-toolbar",children:[r.jsxs("div",{children:[r.jsxs("span",{className:"map-card-kicker",children:[r.jsx("span",{className:"map-live-dot"})," Indian Railways network"]}),r.jsx("strong",{children:"India-wide view"})]}),r.jsx("span",{className:"map-card-date",children:"Route map · 31 Mar 2023"})]}),r.jsx(Dp,{selectedHub:Me,onSelect:He}),r.jsxs("div",{className:"map-legend",children:[r.jsxs("span",{children:[r.jsx("i",{className:"legend-line primary"})," Main corridor"]}),r.jsxs("span",{children:[r.jsx("i",{className:"legend-line secondary"})," Connecting route"]}),r.jsxs("span",{children:[r.jsx("i",{className:"legend-node"})," Rail gateway"]})]})]}),r.jsxs("aside",{className:"network-detail-card ux4g-card ux4g-card-outline ux4g-card-vertical",children:[r.jsxs("div",{className:"network-detail-top",children:[r.jsx("p",{className:"eyebrow",children:"Selected gateway"}),r.jsxs("span",{className:"network-detail-index",children:[String(Kr.findIndex(I=>I.id===_.id)+1).padStart(2,"0")," / ",String(Kr.length).padStart(2,"0")]})]}),r.jsxs("div",{className:"network-detail-title",children:[r.jsx("span",{className:"network-detail-icon",children:r.jsx(k,{name:"train"})}),r.jsxs("div",{children:[r.jsxs("span",{children:[_.region," corridor"]}),r.jsx("h3",{children:_.name}),r.jsx("strong",{children:_.code})]})]}),r.jsx("p",{children:_.detail}),r.jsxs("div",{className:"network-source-links",children:[r.jsxs("a",{className:"source-link",href:bp,target:"_blank",rel:"noreferrer",children:["Official route map ",r.jsx(k,{name:"open_in_new"})]}),r.jsxs("a",{className:"source-link",href:kp,target:"_blank",rel:"noreferrer",children:["India outline source ",r.jsx(k,{name:"open_in_new"})]})]}),r.jsxs("p",{className:"network-source-note",children:[r.jsx(k,{name:"info"})," Official outline · simplified rail corridors."]})]})]})]}),r.jsx(Pp,{items:iu}),r.jsxs("section",{className:"discover-section page-container section-block",id:"discover-india",children:[r.jsx("div",{className:"section-heading",children:r.jsxs("div",{children:[r.jsx("p",{className:"eyebrow",children:"Discover India by train"}),r.jsx("h2",{children:"Take the scenic route."})]})}),r.jsx("div",{className:"heritage-grid",children:jp.map((I,ne)=>r.jsxs("article",{className:`heritage-card ux4g-card ux4g-card-solid ux4g-card-vertical ${ne===0?"is-featured":""}`,children:[r.jsxs("div",{className:"heritage-card-image",children:[r.jsx("img",{src:I.image,alt:I.imageAlt,loading:"lazy"}),r.jsxs("div",{className:"heritage-card-image-top",children:[r.jsx(Q,{tone:"brand",children:I.region}),r.jsx("span",{className:"toy-train",children:r.jsx(k,{name:"train"})})]})]}),r.jsxs("div",{className:"heritage-card-copy",children:[r.jsx("p",{className:"heritage-card-route",children:I.route}),r.jsx("h3",{children:I.title}),r.jsx("p",{children:I.description}),r.jsxs("div",{className:"heritage-card-footer",children:[r.jsxs("span",{children:[r.jsx(k,{name:"schedule"})," ",I.duration]}),r.jsxs("a",{className:"ux4g-text-link-md",href:I.infoUrl,target:"_blank",rel:"noreferrer",children:["Know more ",r.jsx(k,{name:"open_in_new"})]})]})]})]},I.id))}),r.jsxs("div",{className:"heritage-track","aria-hidden":"true",children:[r.jsx("span",{className:"track-train",children:r.jsx(k,{name:"train"})}),r.jsx("i",{}),r.jsx("i",{}),r.jsx("i",{}),r.jsx("i",{}),r.jsx("i",{})]})]}),r.jsxs("section",{className:"page-container section-block confidence-section",children:[r.jsxs("div",{className:"section-heading",children:[r.jsxs("div",{children:[r.jsx("p",{className:"eyebrow",children:"Designed around real friction"}),r.jsx("h2",{children:"Less decoding. More confidence."})]}),r.jsxs("button",{className:"ux4g-btn ux4g-btn-text-primary ux4g-btn-md",type:"button",onClick:()=>oe("support"),children:["Explore help ",r.jsx(k,{name:"arrow_forward"})]})]}),r.jsx("div",{className:"feature-grid",children:wp.map(I=>r.jsxs("article",{className:"ux4g-card ux4g-card-solid ux4g-card-vertical feature-card",children:[r.jsx("div",{className:"feature-icon",children:r.jsx(k,{name:I.icon})}),r.jsx("h3",{children:I.title}),r.jsx("p",{children:I.body}),r.jsxs("button",{className:"ux4g-text-link-md",type:"button",onClick:()=>oe(I.title.includes("Tatkal")?"results":"support"),children:["See how it works ",r.jsx(k,{name:"arrow_forward"})]})]},I.title))})]}),r.jsxs("section",{className:"page-container section-block journey-principles",children:[r.jsxs("div",{className:"principles-copy",children:[r.jsx("p",{className:"eyebrow",children:"The booking promise"}),r.jsx("h2",{children:"Explain before asking."}),r.jsx("p",{children:"Every important decision comes with context: what a status means, what may change, what you will pay, and what happens next."}),r.jsxs("div",{className:"principle-list",children:[r.jsxs("div",{children:[r.jsx("span",{className:"principle-number",children:"01"}),r.jsxs("div",{children:[r.jsx("strong",{children:"See the trade-off"}),r.jsx("p",{children:"Keep a group together, choose a lower fare, or arrive earlier—without hidden assumptions."})]})]}),r.jsxs("div",{children:[r.jsx("span",{className:"principle-number",children:"02"}),r.jsxs("div",{children:[r.jsx("strong",{children:"Know the state"}),r.jsx("p",{children:"Payment received is never presented as booking confirmed until that state is actually reached."})]})]}),r.jsxs("div",{children:[r.jsx("span",{className:"principle-number",children:"03"}),r.jsxs("div",{children:[r.jsx("strong",{children:"Get help in context"}),r.jsx("p",{children:"Ask about RAC, coaches, refunds, and delays without losing your place in the journey."})]})]})]})]}),r.jsxs("div",{className:"journey-visual ux4g-card ux4g-card-outline ux4g-card-vertical",children:[r.jsxs("div",{className:"journey-visual-top",children:[r.jsx(Q,{tone:"success",icon:"check_circle",children:"Journey ready"}),r.jsx("span",{children:"Mock PNR · 4512367890"})]}),r.jsxs("div",{className:"journey-route",children:[r.jsxs("div",{children:[r.jsx("strong",{children:"CDG"}),r.jsx("span",{children:"Chandigarh"})]}),r.jsxs("div",{className:"visual-line",children:[r.jsx("span",{}),r.jsx("i",{}),r.jsx("span",{})]}),r.jsxs("div",{children:[r.jsx("strong",{children:"NDLS"}),r.jsx("span",{children:"New Delhi"})]})]}),r.jsxs("div",{className:"journey-visual-footer",children:[r.jsxs("span",{children:[r.jsx(k,{name:"schedule"})," 06:15 · 25 Aug"]}),r.jsxs("span",{children:[r.jsx(k,{name:"airline_seat_recline_normal"})," B2 · 21, 22"]})]})]})]})]})},ni=()=>{var or,ar,lr,cr;const _=Xc(c.source,c.destination);if(_)return r.jsxs("div",{className:"results-page page-container",children:[r.jsxs("div",{className:"breadcrumbs",children:[r.jsx("button",{type:"button",onClick:()=>oe("home"),children:"Home"}),r.jsx(k,{name:"chevron_right"}),r.jsx("span",{children:"Search results"})]}),r.jsxs("div",{className:"results-header",children:[r.jsxs("div",{children:[r.jsxs("p",{className:"eyebrow",children:[ht(c.date,!0)," · ",c.passengers," ",c.passengers===1?"adult":"adults"]}),r.jsxs("h1",{children:[c.source," ",r.jsx("span",{children:"→"})," ",c.destination]}),r.jsx("p",{className:"results-subtitle",children:"A curated connecting journey with one change."})]}),r.jsxs("button",{className:"ux4g-btn ux4g-btn-outline-primary ux4g-btn-md",type:"button",onClick:()=>oe("home"),children:[r.jsx(k,{name:"edit"})," Edit search"]})]}),r.jsx(qp,{journey:_,onBookBoth:ie=>Qr(ie)})]});let I=aa(c,C.code).sort((ie,Je)=>L==="Cheapest"?ie.classes[0].fare-Je.classes[0].fare:L==="Fastest"?ie.duration.localeCompare(Je.duration):L==="Best availability"?(Je.classes[0].seats??0)-(ie.classes[0].seats??0):Je.score-ie.score);if(!I.length)return r.jsxs("div",{className:"results-page page-container",children:[r.jsxs("div",{className:"breadcrumbs",children:[r.jsx("button",{type:"button",onClick:()=>oe("home"),children:"Home"}),r.jsx(k,{name:"chevron_right"}),r.jsx("span",{children:"Search results"})]}),r.jsxs("div",{className:"results-header",children:[r.jsxs("div",{children:[r.jsxs("p",{className:"eyebrow",children:[ht(c.date,!0)," · ",c.passengers," ",c.passengers===1?"adult":"adults"]}),r.jsxs("h1",{children:[c.source," ",r.jsx("span",{children:"→"})," ",c.destination]}),r.jsx("p",{className:"results-subtitle",children:"No prepared direct train set is available for this station pair yet."})]}),r.jsxs("button",{className:"ux4g-btn ux4g-btn-outline-primary ux4g-btn-md",type:"button",onClick:()=>oe("home"),children:[r.jsx(k,{name:"edit"})," Edit search"]})]}),r.jsxs("section",{className:"ux4g-card ux4g-card-outline ux4g-card-vertical empty-results-card",children:[r.jsx(k,{name:"route"}),r.jsx("h2",{children:"Try a supported route"}),r.jsx("p",{children:"This prototype has verified direct options for Chandigarh → New Delhi and connecting options for New Delhi → Shimla. We will not show a train from a different station pair as if it were yours."}),r.jsx("button",{className:"ux4g-btn ux4g-btn-primary ux4g-btn-md",type:"button",onClick:()=>oe("home"),children:"Edit station pair"})]})]});const ne=rh(I),je=Ip(I),$e=I.filter(ie=>$.includes(ie.id)),fn=["2A","3A","CC","EC","3E"].includes(C.code)?"10:00 AM":"11:00 AM",_n=new Date(`${c.date}T${fn==="10:00 AM"?"10:00:00":"11:00:00"}`);_n.setDate(_n.getDate()-1);const bn={isOpen:Date.now()>=_n.getTime(),opensAt:`${ht(_n.toISOString().slice(0,10))} · ${fn}`,trains:la.filter(ie=>ie.classCode===C.code)},In=Zp(I,bn,c.passengers,"Highest chance of confirmation"),Yn=()=>{var Je;if(In.recommendedAction==="wait_for_tatkal"){(Je=document.getElementById("tatkal-fallback"))==null||Je.scrollIntoView({behavior:"smooth",block:"start"});return}const ie=I.find(It=>It.id===In.recommendedTrainId)??I[0];ie&&An(ie,ie.classes[0])};return r.jsxs("div",{className:"results-page page-container",children:[r.jsxs("div",{className:"breadcrumbs",children:[r.jsx("button",{type:"button",onClick:()=>oe("home"),children:"Home"}),r.jsx(k,{name:"chevron_right"}),r.jsx("span",{children:"Search results"})]}),r.jsxs("div",{className:"results-header",children:[r.jsxs("div",{children:[r.jsxs("p",{className:"eyebrow",children:[ht(c.date,!0)," · ",c.passengers," ",c.passengers===1?"adult":"adults"]}),r.jsxs("h1",{children:[c.source," ",r.jsx("span",{children:"→"})," ",c.destination]}),r.jsxs("p",{className:"results-subtitle",children:["Showing mock availability for ",c.quota.toLowerCase()," quota. Choose what matters most to you."]})]}),r.jsxs("button",{className:"ux4g-btn ux4g-btn-outline-primary ux4g-btn-md",type:"button",onClick:()=>oe("home"),children:[r.jsx(k,{name:"edit"})," Edit search"]})]}),r.jsx(Up,{verdict:In,onPrimary:Yn,onSeeAll:()=>{var ie;return(ie=document.getElementById("regular-results"))==null?void 0:ie.scrollIntoView({behavior:"smooth",block:"start"})}}),r.jsxs("div",{className:"results-layout",children:[r.jsx("aside",{className:"results-filters",children:r.jsxs("div",{className:"filter-heading",children:[r.jsxs("div",{children:[r.jsx("p",{className:"eyebrow",children:"Refine"}),r.jsx("h2",{children:"Find your fit"})]}),r.jsx("button",{className:"ux4g-btn ux4g-btn-text-neutral ux4g-btn-sm",type:"button",children:"Clear"})]})}),r.jsxs("main",{className:"train-results",id:"regular-results",children:[r.jsxs("div",{className:"results-controls",children:[r.jsxs("div",{children:[r.jsxs("strong",{children:[I.length," trains"]}),r.jsx("span",{children:" · Mock result set"})]}),r.jsxs("label",{className:"sort-control",children:[r.jsx("span",{children:"Sort by"}),r.jsxs("select",{value:L,onChange:ie=>ce(ie.target.value),children:[r.jsx("option",{children:"Best overall"}),r.jsx("option",{children:"Cheapest"}),r.jsx("option",{children:"Fastest"}),r.jsx("option",{children:"Best availability"})]})]})]}),ne?r.jsxs("div",{className:"ux4g-alert ux4g-alert-info tie-break-banner",children:[r.jsx(k,{name:"compare_arrows"}),r.jsx("div",{children:ne})]}):null,je?r.jsxs("div",{className:"ux4g-alert ux4g-alert-warning book-wait-banner",children:[r.jsx(k,{name:"schedule"}),r.jsxs("div",{children:[r.jsx("strong",{children:"Book-or-wait guidance"}),r.jsx("span",{children:je})]})]}):null,r.jsxs("div",{className:"recommendation-banner ux4g-card ux4g-card-solid ux4g-card-horizontal",children:[r.jsx("div",{className:"recommendation-mark",children:r.jsx(k,{name:"auto_awesome"})}),r.jsxs("div",{children:[r.jsx(Q,{tone:"brand",children:"Best overall"}),r.jsx("h2",{children:(or=I[0])==null?void 0:or.name}),r.jsx("p",{children:(lr=(ar=I[0])==null?void 0:ar.relativeReasons)==null?void 0:lr[0]})]}),r.jsxs("div",{className:"recommendation-score",children:[r.jsx("span",{children:"Score"}),r.jsx("strong",{children:(cr=I[0])==null?void 0:cr.score}),r.jsx("small",{children:"/100"})]})]}),I.map(ie=>r.jsx(Wp,{train:ie,selectedClass:`${f.id}-${C.code}`,compare:$.includes(ie.id),compareDisabled:$.length>=3&&!$.includes(ie.id),onCompare:()=>tr(ie.id),onSelect:Je=>An(ie,Je),onExplain:(Je,It)=>se({title:Je,body:It})},ie.id))]})]}),$e.length>0?r.jsxs("div",{className:"compare-tray",children:[r.jsxs("div",{children:[r.jsx("strong",{children:"Compare trains"}),r.jsxs("span",{children:[$e.length," selected ",$e.length<2?"· Select one more":""]})]}),r.jsx("div",{className:"compare-names",children:$e.map(ie=>r.jsx("span",{children:ie.name},ie.id))}),r.jsxs("button",{className:"ux4g-btn ux4g-btn-primary ux4g-btn-md",type:"button",disabled:$e.length<2,onClick:()=>q(!0),children:["Compare (",$e.length,") ",r.jsx(k,{name:"arrow_forward"})]})]}):null,te?r.jsx(Vp,{trains:$e,onClose:()=>q(!1),onSelect:ie=>An(ie,ie.classes[0])}):null]})},ti=()=>{if(Xc(c.source,c.destination)||!aa(c,C.code).length)return!1;const _=Yr.filter(I=>I.classes.some(ne=>ne.code===C.code));return _.length>0&&!_.some(I=>xp(c.source,c.destination,c.date,C.code,I.id)>pp)},sr=()=>ti()?r.jsxs("section",{className:"page-container tatkal-results-fallback",id:"tatkal-fallback",children:[r.jsxs("div",{className:"section-heading",children:[r.jsxs("div",{children:[r.jsxs("p",{className:"eyebrow",children:[r.jsx(k,{name:"bolt"})," Tatkal"]}),r.jsx("h2",{children:"An emergency option, when regular seats are limited"}),r.jsx("p",{children:"Regular options are limited for this journey — here is your Tatkal option."})]}),r.jsx(Q,{tone:"info",icon:"science",children:"Mock availability"})]}),r.jsx(Hp,{from:c.source,to:c.destination,journeyDate:c.date,selectedClass:C.code,passengerCount:c.passengers,preference:"Highest chance of confirmation",onBook:nr})]}):null,mt={train:f,selectedClass:C,selectedSeats:De,passengers:Se,keepTogether:Be,seatPreference:A,quota:c.quota},ri=()=>Ne==="confirmation"?gt():Ne==="passengers"?r.jsxs("div",{className:"booking-page page-container",children:[r.jsxs("div",{className:"breadcrumbs",children:[r.jsx("button",{type:"button",onClick:()=>oe("results"),children:"Search results"}),r.jsx(k,{name:"chevron_right"}),r.jsx("span",{children:"Passenger confirmation"})]}),r.jsxs("div",{className:"booking-header",children:[r.jsxs("div",{children:[r.jsx("p",{className:"eyebrow",children:"Step 1 of 4"}),r.jsx("h1",{children:"Confirm your passengers"}),r.jsx("p",{children:"Saved details are ready for this journey. Update anything that needs changing, then choose seats."})]}),r.jsx(Q,{tone:"success",icon:"check_circle",children:"Details saved"})]}),r.jsx(Jc,{active:"passengers"}),r.jsxs("section",{className:"booking-section passenger-confirmation",children:[r.jsx(eu,{passengers:Se,onChange:Xe}),r.jsxs("div",{className:"booking-actions",children:[r.jsx("button",{className:"ux4g-btn ux4g-btn-outline-primary ux4g-btn-md",type:"button",onClick:()=>oe("results"),children:"Back to results"}),r.jsxs("button",{className:"ux4g-btn ux4g-btn-primary ux4g-btn-md",type:"button",disabled:Se.some(_=>!_.name||!_.age),onClick:()=>ve("seats"),children:["Continue to seat selection ",r.jsx(k,{name:"arrow_forward"})]})]})]})]}):r.jsxs("div",{className:"booking-page page-container",children:[r.jsxs("div",{className:"breadcrumbs",children:[r.jsx("button",{type:"button",onClick:()=>oe("results"),children:"Search results"}),r.jsx(k,{name:"chevron_right"}),r.jsx("span",{children:"Book your journey"})]}),r.jsxs("div",{className:"booking-header",children:[r.jsxs("div",{children:[r.jsxs("p",{className:"eyebrow",children:[f.number," · ",f.name]}),r.jsx("h1",{children:"Book with confidence"}),r.jsxs("p",{children:[f.departure," ",f.sourceCode," → ",f.arrival," ",f.destinationCode," · ",C.code," · ",c.quota]})]}),r.jsx(Q,{tone:"info",icon:"science",children:"Mock booking flow"})]}),r.jsx(Jc,{active:Ne}),r.jsxs("div",{className:"booking-layout",children:[r.jsxs("div",{className:"booking-main",children:[Ne==="seats"?r.jsxs("section",{className:"booking-section",children:[r.jsxs("div",{className:"section-heading",children:[r.jsxs("div",{children:[r.jsx("p",{className:"eyebrow",children:"Step 2 of 4"}),r.jsx("h2",{children:"Choose where you want to sit"}),r.jsx("p",{children:"We will try to keep your passengers together, but we will not promise seats that are not available."})]}),r.jsxs(Q,{tone:"success",children:[De.length,"/",c.passengers," seats selected"]})]}),r.jsxs("div",{className:"choice-card ux4g-card ux4g-card-outline ux4g-card-vertical",children:[r.jsxs("div",{className:"choice-card-header",children:[r.jsxs("div",{children:[r.jsx("h3",{children:"Travelling as a family or group?"}),r.jsx("p",{children:"Tell us your preference so we can show the trade-off clearly."})]}),r.jsxs("label",{className:"ux4g-switch ux4g-switch-md",children:[r.jsx("input",{type:"checkbox",checked:Be,onChange:_=>ge(_.target.checked)}),r.jsx("span",{})]})]}),Be?r.jsxs("div",{className:"preference-options",children:[r.jsxs("label",{className:"ux4g-radio ux4g-radio-md",children:[r.jsx("input",{type:"radio",name:"seat-preference",checked:A==="together",onChange:()=>O("together")}),r.jsx("span",{children:"Keep passengers together"})]}),r.jsxs("label",{className:"ux4g-radio ux4g-radio-md",children:[r.jsx("input",{type:"radio",name:"seat-preference",checked:A==="same-coach",onChange:()=>O("same-coach")}),r.jsx("span",{children:"Same coach, if possible"})]}),r.jsxs("label",{className:"ux4g-radio ux4g-radio-md",children:[r.jsx("input",{type:"radio",name:"seat-preference",checked:A==="any",onChange:()=>O("any")}),r.jsx("span",{children:"Any available seats"})]})]}):r.jsxs("div",{className:"choice-muted",children:[r.jsx(k,{name:"info"})," We will assign the best available seats for each passenger."]})]}),r.jsxs("div",{className:"coach-section",children:[r.jsxs("div",{className:"section-heading",children:[r.jsxs("div",{children:[r.jsx("h3",{children:"Choose a coach"}),r.jsx("p",{children:"Coach placement is indicative until allocation is confirmed."})]}),r.jsxs("span",{className:"selection-note",children:[r.jsx(k,{name:"touch_app"})," Select to preview"]})]}),r.jsx(Zc,{selectedCoach:Pe,onSelect:We})]}),r.jsxs("div",{className:"seat-section",children:[r.jsx("div",{className:"section-heading",children:r.jsxs("div",{children:[r.jsxs("h3",{children:["Choose seats in ",Pe]}),r.jsx("p",{children:"Selected seats will be requested for your passengers."})]})}),r.jsx(Yp,{selectedSeats:De,onToggle:rr})]}),r.jsxs("div",{className:"booking-actions",children:[r.jsx("button",{className:"ux4g-btn ux4g-btn-outline-primary ux4g-btn-md",type:"button",onClick:()=>oe("results"),children:"Back"}),r.jsxs("button",{className:"ux4g-btn ux4g-btn-primary ux4g-btn-md",type:"button",disabled:De.length!==c.passengers,onClick:()=>ve("passengers"),children:["Continue to review ",r.jsx(k,{name:"arrow_forward"})]})]})]}):null,Ne==="passengers"?r.jsxs("section",{className:"booking-section",children:[r.jsxs("div",{className:"section-heading",children:[r.jsxs("div",{children:[r.jsx("p",{className:"eyebrow",children:"Step 2 of 4"}),r.jsx("h2",{children:"Who is travelling?"}),r.jsx("p",{children:"Use names exactly as they should appear on the ticket. This is mock passenger data."})]}),r.jsxs(Q,{tone:"info",children:[Se.length," passengers"]})]}),r.jsxs("div",{className:"ux4g-alert ux4g-alert-info context-alert",children:[r.jsx(k,{name:"info"}),r.jsxs("div",{children:[r.jsx("strong",{children:"Keep details ready for Tatkal"}),r.jsx("p",{children:"For Tatkal, passenger details may be needed quickly when the booking window opens."})]})]}),r.jsx(eu,{passengers:Se,onChange:Xe}),r.jsxs("div",{className:"booking-actions",children:[r.jsx("button",{className:"ux4g-btn ux4g-btn-outline-primary ux4g-btn-md",type:"button",onClick:()=>ve("seats"),children:"Back"}),r.jsxs("button",{className:"ux4g-btn ux4g-btn-primary ux4g-btn-md",type:"button",disabled:Se.some(_=>!_.name||!_.age),onClick:()=>ve("review"),children:["Review booking ",r.jsx(k,{name:"arrow_forward"})]})]})]}):null,Ne==="review"?r.jsxs("section",{className:"booking-section",children:[r.jsxs("div",{className:"section-heading",children:[r.jsxs("div",{children:[r.jsx("p",{className:"eyebrow",children:"Step 3 of 4"}),r.jsx("h2",{children:"Review before payment"}),r.jsx("p",{children:"Read the fare, seat request, and booking-state promise before continuing."})]}),r.jsx(Q,{tone:"warning",children:"Availability rechecked at payment"})]}),r.jsxs("div",{className:"ux4g-alert ux4g-alert-warning context-alert",children:[r.jsx(k,{name:"schedule"}),r.jsxs("div",{children:[r.jsx("strong",{children:"Seats are requested, not confirmed yet"}),r.jsx("p",{children:"We will check availability again before the booking is confirmed. Payment received and booking confirmed are separate states."})]})]}),r.jsx(oh,{booking:mt}),r.jsxs("div",{className:"booking-actions",children:[r.jsx("button",{className:"ux4g-btn ux4g-btn-outline-primary ux4g-btn-md",type:"button",onClick:()=>ve("passengers"),children:"Back"}),r.jsxs("button",{className:"ux4g-btn ux4g-btn-primary ux4g-btn-md",type:"button",onClick:()=>ve("payment"),children:["Continue to payment ",r.jsx(k,{name:"arrow_forward"})]})]})]}):null,Ne==="payment"?r.jsxs("section",{className:"booking-section",children:[r.jsxs("div",{className:"section-heading",children:[r.jsxs("div",{children:[r.jsx("p",{className:"eyebrow",children:"Step 4 of 4"}),r.jsx("h2",{children:"Payment and confirmation"}),r.jsx("p",{children:"Your card details are not collected in this prototype."})]}),r.jsx(Q,{tone:"info",icon:"lock",children:"Secure demo"})]}),r.jsx(lh,{status:M,onPay:ft,onAvailabilityChange:Vn,onPaymentFailure:ir,onBookBackup:Zr,onRetry:()=>m("idle"),onReview:()=>ve("review")}),r.jsx("div",{className:"booking-actions",children:r.jsx("button",{className:"ux4g-btn ux4g-btn-outline-primary ux4g-btn-md",type:"button",onClick:()=>ve("review"),children:"Back"})})]}):null]}),r.jsx(ah,{booking:mt,onChangeClass:()=>oe("results")})]})]}),gt=()=>r.jsxs("div",{className:"confirmation-page page-container",children:[r.jsxs("div",{className:"confirmation-hero",children:[r.jsx("div",{className:"confirmation-mark",children:r.jsx(k,{name:"check"})}),r.jsx(Q,{tone:"success",children:Y&&re===0?"Leg 1 confirmed":"Mock booking confirmed"}),r.jsx("h1",{children:Y&&re===0?"First leg is ready":"Your journey is ready"}),r.jsx("p",{children:Y&&re===0?"Your first booking is confirmed. Continue to the Kalka–Shimla leg without re-entering passenger details.":"Your payment and booking are shown as separate states. This confirmation uses mock railway data and does not reserve a real seat."})]}),r.jsxs("div",{className:"confirmation-grid",children:[r.jsxs("div",{className:"confirmation-main",children:[r.jsxs("div",{className:"ux4g-card ux4g-card-solid ux4g-card-vertical pnr-card",children:[r.jsxs("div",{className:"pnr-top",children:[r.jsxs("div",{children:[r.jsx("p",{className:"eyebrow",children:"Demo PNR"}),r.jsx("strong",{children:"4512367890"})]}),r.jsx(Q,{tone:"success",icon:"verified",children:"CONFIRMED"})]}),r.jsxs("div",{className:"pnr-route",children:[r.jsxs("div",{children:[r.jsx("strong",{children:f.sourceCode}),r.jsx("span",{children:f.departure}),r.jsx("small",{children:f.source})]}),r.jsxs("div",{className:"pnr-route-line",children:[r.jsx(k,{name:"train"}),r.jsx("span",{children:f.duration})]}),r.jsxs("div",{children:[r.jsx("strong",{children:f.destinationCode}),r.jsx("span",{children:f.arrival}),r.jsx("small",{children:f.destination})]})]}),r.jsxs("div",{className:"pnr-footer",children:[r.jsxs("span",{children:[r.jsx(k,{name:"calendar_month"})," ",ht(c.date)]}),r.jsxs("span",{children:[r.jsx(k,{name:"airline_seat_recline_normal"})," ",Pe," · ",De.join(", ")]}),r.jsxs("span",{children:[r.jsx(k,{name:"group"})," ",Se.length," travellers"]})]})]}),r.jsxs("div",{className:"status-distinction",children:[r.jsxs("div",{children:[r.jsx(Q,{tone:"success",children:"Payment received"}),r.jsx("p",{children:"Your demo payment has been accepted."})]}),r.jsxs("div",{children:[r.jsx(Q,{tone:"success",children:"Booking confirmed"}),r.jsx("p",{children:"Your demo seat request has moved to confirmed."})]}),r.jsxs("div",{children:[r.jsx(Q,{tone:"info",children:"Journey updates on"}),r.jsx("p",{children:"Mock notifications will appear in your journey dashboard."})]})]}),r.jsxs("div",{className:"confirmation-actions",children:[Y&&re===0?r.jsxs("button",{className:"ux4g-btn ux4g-btn-primary ux4g-btn-md",type:"button",onClick:Xr,children:["Continue to leg 2 ",r.jsx(k,{name:"arrow_forward"})]}):r.jsxs("button",{className:"ux4g-btn ux4g-btn-primary ux4g-btn-md",type:"button",onClick:()=>oe("journey"),children:["Open journey dashboard ",r.jsx(k,{name:"arrow_forward"})]}),r.jsxs("button",{className:"ux4g-btn ux4g-btn-outline-primary ux4g-btn-md",type:"button",onClick:()=>window.print(),children:[r.jsx(k,{name:"download"})," Save summary"]})]})]}),r.jsx("aside",{children:r.jsx(sa,{})})]})]}),xt=()=>{const _=(Y==null?void 0:Y.fromStation.name)??"Chandigarh",I=(Y==null?void 0:Y.toStation.name)??"New Delhi",ne=C.fare*Se.length,je=Math.round(ne*.15),$e=20,fn=Math.max(0,ne-je-$e);return r.jsxs("div",{className:"journey-page page-container",children:[r.jsxs("div",{className:"breadcrumbs",children:[r.jsx("button",{type:"button",onClick:()=>oe("home"),children:"Home"}),r.jsx(k,{name:"chevron_right"}),r.jsx("span",{children:"Journey dashboard"})]}),r.jsxs("div",{className:"journey-dashboard-header",children:[r.jsxs("div",{children:[r.jsx("p",{className:"eyebrow",children:"Your journey · Demo PNR 4512367890"}),r.jsxs("h1",{children:[_," → ",I]}),r.jsxs("p",{children:[ht(c.date,!0)," · ",f.name," · ",f.number]})]}),r.jsx(Q,{tone:b==="CONFIRMED"?"success":"warning",icon:b==="CONFIRMED"?"check_circle":"schedule",children:b==="CONFIRMED"?"Confirmed":b.replace("_"," ")})]}),r.jsxs("div",{className:"journey-grid",children:[r.jsxs("main",{children:[r.jsxs("div",{className:"journey-alert ux4g-alert ux4g-alert-warning context-alert",children:[r.jsx(k,{name:"schedule"}),r.jsxs("div",{children:[r.jsx("strong",{children:"Mock journey update"}),r.jsxs("p",{children:["Your train is expected to depart at ",f.departure," from the assigned platform. Live delay data is not connected."]})]})]}),r.jsxs("section",{className:"ux4g-card ux4g-card-solid ux4g-card-vertical journey-card",children:[r.jsxs("div",{className:"section-heading",children:[r.jsxs("div",{children:[r.jsx("p",{className:"eyebrow",children:"Live journey timeline"}),r.jsx("h2",{children:"What happens next"})]}),r.jsx(Q,{tone:"info",children:"Mock updates"})]}),r.jsxs("div",{className:"ux4g-journey-timeline ux4g-journey-timeline--vertical journey-timeline",children:[r.jsx(hs,{icon:"check",title:"Booking confirmed",body:"Your mock booking is confirmed.",state:"complete"}),r.jsx(hs,{icon:"notifications",title:"Boarding reminder",body:"We will remind you 30 minutes before departure.",state:"active"}),r.jsx(hs,{icon:"train",title:`Depart from ${f.source}`,body:`${f.sourceCode} · ${f.departure}`}),r.jsx(hs,{icon:"location_on",title:`Arrive at ${f.destination}`,body:`${f.destinationCode} · ${f.arrival} · On schedule in mock data`})]})]}),r.jsxs("section",{className:"ux4g-card ux4g-card-outline ux4g-card-vertical journey-card",children:[r.jsxs("div",{className:"section-heading",children:[r.jsxs("div",{children:[r.jsx("p",{className:"eyebrow",children:"Know your seat"}),r.jsx("h2",{children:"Coach and allocation"})]}),r.jsxs(Q,{tone:"success",icon:"airline_seat_recline_normal",children:[Pe," · ",De.join(", ")]})]}),r.jsx(Zc,{selectedCoach:Pe,onSelect:We}),r.jsxs("div",{className:"coach-allocation",children:[r.jsxs("div",{children:[r.jsxs("strong",{children:[Pe," · ",De[0]??"—"]}),r.jsx("span",{children:"Lower berth · Passenger 1"})]}),r.jsxs("div",{children:[r.jsxs("strong",{children:[Pe," · ",De[1]??"—"]}),r.jsx("span",{children:"Middle berth · Passenger 2"})]}),r.jsxs("p",{children:[r.jsx(k,{name:"info"})," Seats are shown as confirmed in this mock journey. Actual coach allocation depends on the connected railway service."]})]})]})]}),r.jsxs("aside",{className:"journey-sidebar",children:[r.jsx(sa,{}),r.jsxs("section",{className:"ux4g-card ux4g-card-solid ux4g-card-vertical refund-card",children:[r.jsxs("div",{className:"section-heading",children:[r.jsxs("div",{children:[r.jsx("p",{className:"eyebrow",children:"Need to change plans?"}),r.jsx("h2",{children:"Cancellation & refund"})]}),r.jsx(k,{name:"receipt_long"})]}),K==="idle"?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"refund-breakdown",children:[r.jsxs("span",{children:["Ticket price ",r.jsxs("strong",{children:["₹",ne.toLocaleString("en-IN")]})]}),r.jsxs("span",{children:["Cancellation charge ",r.jsxs("strong",{children:["₹",je.toLocaleString("en-IN")]})]}),r.jsxs("span",{children:["Other charges ",r.jsxs("strong",{children:["₹",$e]})]}),r.jsx("hr",{}),r.jsxs("span",{className:"refund-total",children:["Estimated refund ",r.jsxs("strong",{children:["₹",fn.toLocaleString("en-IN")]})]})]}),r.jsx("p",{className:"refund-note",children:"Expected in 3–5 business days to your original payment method."}),r.jsx("button",{className:"ux4g-btn ux4g-btn-danger ux4g-btn-md",type:"button",onClick:()=>ee("confirming"),children:"Review cancellation"})]}):K==="confirming"?r.jsxs("div",{className:"refund-confirm",children:[r.jsxs("div",{className:"ux4g-alert ux4g-alert-warning context-alert",children:[r.jsx(k,{name:"warning"}),r.jsxs("div",{children:[r.jsxs("strong",{children:["You will receive approximately ₹",fn.toLocaleString("en-IN")]}),r.jsxs("p",{children:["₹",je.toLocaleString("en-IN")," cancellation charge and ₹",$e," non-refundable charges will be deducted."]})]})]}),r.jsxs("div",{className:"refund-actions",children:[r.jsx("button",{className:"ux4g-btn ux4g-btn-outline-primary ux4g-btn-md",type:"button",onClick:()=>ee("idle"),children:"Keep ticket"}),r.jsx("button",{className:"ux4g-btn ux4g-btn-danger ux4g-btn-md",type:"button",onClick:()=>{ee("initiated"),W("REFUND_PENDING")},children:"Confirm cancellation"})]})]}):r.jsxs("div",{className:"ux4g-alert ux4g-alert-success context-alert",children:[r.jsx(k,{name:"check_circle"}),r.jsxs("div",{children:[r.jsx("strong",{children:"Refund initiated in prototype"}),r.jsx("p",{children:"Refund ID REF123456 · Expected in 3–5 business days. No real payment was processed."})]})]})]})]})]})]})},ms=()=>r.jsxs("div",{className:"support-page page-container",children:[r.jsxs("div",{className:"support-hero",children:[r.jsxs("div",{children:[r.jsx(Q,{tone:"brand",icon:"support_agent",children:"Support centre"}),r.jsx("h1",{children:"Help that knows where you are in the journey."}),r.jsx("p",{children:"Get plain-language explanations for railway terms, booking problems, refunds, and journey updates."})]}),r.jsxs("div",{className:"support-search",children:[r.jsxs("label",{className:"ux4g-form-group",children:[r.jsx("span",{children:"Search help"}),r.jsxs("div",{className:"ux4g-input-container ux4g-input-md ux4g-input-default",children:[r.jsx(k,{name:"search"}),r.jsx("input",{placeholder:"Try “What does RAC mean?”"})]})]}),r.jsx("button",{className:"ux4g-btn ux4g-btn-primary ux4g-btn-md",type:"button",children:"Search help"})]})]}),r.jsxs("div",{className:"support-grid",children:[r.jsxs("main",{children:[r.jsxs("div",{className:"section-heading",children:[r.jsxs("div",{children:[r.jsx("p",{className:"eyebrow",children:"Popular questions"}),r.jsx("h2",{children:"Start with an answer"})]}),r.jsx(Q,{tone:"info",children:"Plain language"})]}),r.jsx(Qp,{}),r.jsxs("div",{className:"support-options",children:[r.jsxs("article",{className:"ux4g-card ux4g-card-outline ux4g-card-vertical",children:[r.jsx(k,{name:"receipt_long"}),r.jsx("h3",{children:"Booking-specific support"}),r.jsx("p",{children:"Get help with payment, cancellation, refunds, and status changes for a specific journey."}),r.jsxs("button",{className:"ux4g-btn ux4g-btn-outline-primary ux4g-btn-md",type:"button",onClick:()=>oe("journey"),children:["Open a journey ",r.jsx(k,{name:"arrow_forward"})]})]}),r.jsxs("article",{className:"ux4g-card ux4g-card-outline ux4g-card-vertical",children:[r.jsx(k,{name:"person"}),r.jsx("h3",{children:"Talk to a human"}),r.jsx("p",{children:"Escalate a problem when the assistant or help centre cannot resolve it."}),r.jsx("button",{className:"ux4g-btn ux4g-btn-outline-primary ux4g-btn-md",type:"button",onClick:()=>se({title:"Human support is a prototype path",body:"In production this would create a support case with your booking context. No case is actually submitted from this demo."}),children:"See escalation path"})]})]})]}),r.jsx("aside",{children:r.jsx(sa,{})})]})]});return r.jsxs("div",{className:"app-root",children:[r.jsx("a",{className:"skip-link",href:"#main-content",children:"Skip to main content"}),r.jsx("div",{className:"ux4g-topbar",children:r.jsx("div",{className:"ux4g-topbar__wrap page-container",children:r.jsxs("div",{className:"topbar-actions",children:[r.jsxs("button",{type:"button",onClick:()=>ze(Ae==="light"?"dark":"light"),children:[r.jsx(k,{name:Ae==="light"?"dark_mode":"light_mode"})," ",Ae==="light"?"Dark mode":"Light mode"]}),r.jsx("span",{className:"topbar-divider"}),r.jsx("button",{type:"button",onClick:()=>se({title:"Accessibility first",body:"This prototype uses semantic landmarks, visible focus, keyboard-friendly controls, readable status copy, and touch-sized interactive targets. Use your browser zoom to test the layout."}),children:"Accessibility"})]})})}),r.jsx("header",{className:"ux4g-navbar app-navbar",children:r.jsxs("div",{className:"ux4g-navbar-wrap page-container",children:[r.jsxs("button",{className:"brand-lockup",type:"button",onClick:()=>oe("home"),children:[r.jsx("span",{className:"brand-mark",children:r.jsx("img",{className:"brand-logo",src:"/images/india-connect-logo.png",alt:"","aria-hidden":"true"})}),r.jsxs("span",{children:[r.jsx("strong",{children:"India Connect"}),r.jsx("small",{children:"Indian railway booking"})]})]}),r.jsxs("nav",{className:"main-nav","aria-label":"Main navigation",children:[r.jsx("button",{className:`nav-link ${l==="home"?"active":""}`,type:"button",onClick:()=>oe("home"),children:"Book a journey"}),r.jsx("button",{className:`nav-link ${l==="journey"?"active":""}`,type:"button",onClick:()=>oe("journey"),children:"Trips & PNR"}),r.jsx("button",{className:`nav-link ${l==="support"?"active":""}`,type:"button",onClick:()=>oe("support"),children:"Help centre"})]}),r.jsxs("div",{className:"navbar-actions",children:[r.jsxs("label",{className:"navbar-language",children:[r.jsx(k,{name:"translate"}),r.jsx("select",{"aria-label":"Preferred language",value:X,onChange:_=>Qe(_.target.value),children:Sp.map(_=>r.jsxs("option",{value:_.value,children:[_.native," · ",_.label]},_.value))})]}),r.jsx(Xp,{count:4,onClick:()=>Te(!0)}),r.jsx("button",{className:"ux4g-btn ux4g-btn-outline-primary ux4g-btn-sm",type:"button",children:"Sign in"})]})]})}),r.jsxs("main",{id:"main-content",children:[l==="home"?ei():null,l==="results"?r.jsxs(r.Fragment,{children:[ni(),sr()]}):null,l==="booking"?ri():null,l==="journey"?xt():null,l==="support"?ms():null]}),r.jsx("footer",{className:"ux4g-footer-wrapper ux4g-footer-primary app-footer",children:r.jsxs("div",{className:"ux4g-footer-row page-container",children:[r.jsxs("div",{children:[r.jsx("strong",{children:"India Connect"}),r.jsx("p",{children:"A clearer prototype for a complex public-service journey."})]}),r.jsxs("div",{className:"footer-links",children:[r.jsx("button",{type:"button",onClick:()=>oe("support"),children:"Help centre"}),r.jsx("button",{type:"button",onClick:()=>se({title:"About this prototype",body:"India Connect is a UX4G-based competition prototype. It preserves core railway concepts while making statuses, trade-offs, and next steps clearer."}),children:"About"}),r.jsx("span",{children:"© 2026 Prototype"})]})]})}),ke?r.jsx(Kp,{title:ke.title,body:ke.body,onClose:()=>se(null)}):null,Z?r.jsx(Gp,{onClose:()=>Te(!1)}):null]})}function oh({booking:l}){return r.jsxs("div",{className:"review-card ux4g-card ux4g-card-solid ux4g-card-vertical",children:[r.jsxs("div",{className:"review-card-heading",children:[r.jsxs("div",{children:[r.jsx("p",{className:"eyebrow",children:"Passenger review"}),r.jsxs("h3",{children:[l.train.number," · ",l.train.name]}),r.jsxs("p",{children:[l.train.departure," ",l.train.sourceCode," → ",l.train.arrival," ",l.train.destinationCode," · ",l.selectedClass.code]})]}),r.jsx(Q,{tone:"brand",children:l.quota})]}),r.jsxs("div",{className:"review-grid",children:[r.jsxs("div",{children:[r.jsx("span",{children:"Travellers"}),r.jsx("strong",{children:l.passengers.map(p=>`${p.name} (${p.age})`).join(", ")})]}),r.jsxs("div",{children:[r.jsx("span",{children:"Fare"}),r.jsxs("strong",{children:["₹",l.selectedClass.fare.toLocaleString("en-IN")," × ",l.passengers.length]})]}),r.jsxs("div",{children:[r.jsx("span",{children:"Preference"}),r.jsx("strong",{children:l.keepTogether?"Keep passengers together":"Best available allocation"})]}),r.jsxs("div",{children:[r.jsx("span",{children:"Total incl. fees"}),r.jsxs("strong",{children:["₹",(l.selectedClass.fare*l.passengers.length+60).toLocaleString("en-IN")]})]})]})]})}function ah({booking:l,onChangeClass:p}){const c=l.selectedClass.fare*l.passengers.length,g=c+60;return r.jsxs("aside",{className:"booking-summary ux4g-card ux4g-card-solid ux4g-card-vertical",children:[r.jsxs("div",{className:"summary-heading",children:[r.jsxs("div",{children:[r.jsx("p",{className:"eyebrow",children:"Your booking"}),r.jsx("h2",{children:"Fare summary"})]}),r.jsx(Q,{tone:"info",children:"Mock fare"})]}),r.jsxs("div",{className:"summary-train",children:[r.jsxs("div",{children:[r.jsx("strong",{children:l.train.sourceCode}),r.jsx("span",{children:l.train.departure})]}),r.jsx(k,{name:"arrow_forward"}),r.jsxs("div",{children:[r.jsx("strong",{children:l.train.destinationCode}),r.jsx("span",{children:l.train.arrival})]})]}),r.jsxs("div",{className:"summary-class",children:[r.jsxs("div",{children:[r.jsxs("strong",{children:[l.selectedClass.code," · ",l.selectedClass.label]}),r.jsxs("span",{children:[l.quota," quota · ",l.passengers.length," travellers"]})]}),r.jsx("button",{className:"ux4g-text-link-md",type:"button",onClick:p,children:"Change"})]}),r.jsxs("div",{className:"summary-lines",children:[r.jsxs("span",{children:["Base fare (",l.passengers.length," × ₹",l.selectedClass.fare.toLocaleString("en-IN"),") ",r.jsxs("strong",{children:["₹",c.toLocaleString("en-IN")]})]}),r.jsxs("span",{children:["Reservation fee ",r.jsx("strong",{children:"₹40"})]}),r.jsxs("span",{children:["Convenience fee ",r.jsx("strong",{children:"₹20"})]}),r.jsx("hr",{}),r.jsxs("span",{className:"summary-total",children:["Total ",r.jsxs("strong",{children:["₹",g.toLocaleString("en-IN")]})]})]}),r.jsxs("div",{className:"summary-note",children:[r.jsx(k,{name:"verified_user"}),r.jsx("p",{children:"Final availability is checked again before confirmation."})]})]})}function lh({status:l,onPay:p,onAvailabilityChange:c,onPaymentFailure:g,onBookBackup:f,onRetry:w,onReview:C}){return l==="processing"?r.jsxs("div",{className:"payment-state",children:[r.jsx("span",{className:"ux4g-spinner-primary-full ux4g-spinner-md",role:"status","aria-label":"Processing demo payment"}),r.jsx("h3",{children:"Checking availability and processing demo payment"}),r.jsx("p",{children:"Payment and booking confirmation are being kept as separate states."})]}):l==="received"?r.jsxs("div",{className:"ux4g-alert ux4g-alert-warning context-alert availability-change",children:[r.jsx(k,{name:"warning"}),r.jsxs("div",{children:[r.jsx("strong",{children:"Availability changed"}),r.jsx("p",{children:"The seat request is no longer available. Demo payment was received, so we are verifying the booking instead of silently continuing."}),r.jsx(Q,{tone:"warning",children:"Payment received · Booking pending"}),r.jsxs("div",{className:"payment-recovery-actions",children:[r.jsx("button",{className:"ux4g-btn ux4g-btn-primary ux4g-btn-md",type:"button",onClick:f,children:"Book backup train"}),r.jsx("button",{className:"ux4g-btn ux4g-btn-outline-primary ux4g-btn-md",type:"button",onClick:C,children:"Review booking"})]})]})]}):l==="failed"?r.jsxs("div",{className:"ux4g-alert ux4g-alert-error context-alert payment-failed",role:"alert",children:[r.jsx(k,{name:"error"}),r.jsxs("div",{children:[r.jsx("strong",{children:"Payment failed"}),r.jsx("p",{children:"No money was received in this mock attempt. Your passenger and seat details are still saved."}),r.jsx("button",{className:"ux4g-btn ux4g-btn-primary ux4g-btn-md",type:"button",onClick:w,children:"Try payment again"})]})]}):r.jsxs("div",{className:"payment-panel",children:[r.jsxs("div",{className:"payment-method",children:[r.jsx("div",{className:"payment-method-icon",children:r.jsx(k,{name:"account_balance_wallet"})}),r.jsxs("div",{children:[r.jsx("strong",{children:"UPI or card"}),r.jsx("span",{children:"Demo payment form · no card details are collected"})]}),r.jsx(Q,{tone:"success",icon:"lock",children:"Secure"})]}),r.jsxs("div",{className:"payment-disclosure",children:[r.jsx(k,{name:"info"}),r.jsx("p",{children:"Before payment, we will check availability again. If it changes, you will see exactly whether payment was received and whether booking is still pending."})]}),r.jsxs("div",{className:"payment-actions",children:[r.jsxs("button",{className:"ux4g-btn ux4g-btn-primary ux4g-btn-md",type:"button",onClick:p,children:[r.jsx(k,{name:"lock"})," Pay securely"]}),r.jsx("button",{className:"ux4g-btn ux4g-btn-text-neutral ux4g-btn-md",type:"button",onClick:c,children:"Simulate availability change"}),r.jsx("button",{className:"ux4g-btn ux4g-btn-text-neutral ux4g-btn-md",type:"button",onClick:g,children:"Simulate payment failure"})]})]})}function hs({icon:l,title:p,body:c,state:g=""}){return r.jsxs("div",{className:`ux4g-journey-timeline-item ${g}`,children:[r.jsx("div",{className:"ux4g-journey-timeline-marker",children:r.jsx(k,{name:l})}),r.jsxs("div",{className:"ux4g-journey-timeline-content",children:[r.jsx("strong",{children:p}),r.jsx("p",{children:c})]})]})}cp.createRoot(document.getElementById("root")).render(r.jsx(tp.StrictMode,{children:r.jsx(sh,{})}));
