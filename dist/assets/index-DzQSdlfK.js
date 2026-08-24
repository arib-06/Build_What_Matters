(function(){const C=document.createElement("link").relList;if(C&&C.supports&&C.supports("modulepreload"))return;for(const k of document.querySelectorAll('link[rel="modulepreload"]'))M(k);new MutationObserver(k=>{for(const N of k)if(N.type==="childList")for(const $ of N.addedNodes)$.tagName==="LINK"&&$.rel==="modulepreload"&&M($)}).observe(document,{childList:!0,subtree:!0});function d(k){const N={};return k.integrity&&(N.integrity=k.integrity),k.referrerPolicy&&(N.referrerPolicy=k.referrerPolicy),k.crossOrigin==="use-credentials"?N.credentials="include":k.crossOrigin==="anonymous"?N.credentials="omit":N.credentials="same-origin",N}function M(k){if(k.ep)return;k.ep=!0;const N=d(k);fetch(k.href,N)}})();function zc(h){return h&&h.__esModule&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h}var Mo={exports:{}},Nr={},To={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ic;function qd(){if(Ic)return z;Ic=1;var h=Symbol.for("react.element"),C=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),$=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),Se=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),se=Symbol.iterator;function J(p){return p===null||typeof p!="object"?null:(p=se&&p[se]||p["@@iterator"],typeof p=="function"?p:null)}var we={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},We=Object.assign,ne={};function Y(p,x,R){this.props=p,this.context=x,this.refs=ne,this.updater=R||we}Y.prototype.isReactComponent={},Y.prototype.setState=function(p,x){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,x,"setState")},Y.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function fn(){}fn.prototype=Y.prototype;function Ie(p,x,R){this.props=p,this.context=x,this.refs=ne,this.updater=R||we}var be=Ie.prototype=new fn;be.constructor=Ie,We(be,Y.prototype),be.isPureReactComponent=!0;var oe=Array.isArray,Ve=Object.prototype.hasOwnProperty,fe={current:null},De={key:!0,ref:!0,__self:!0,__source:!0};function Ce(p,x,R){var O,W={},V=null,Z=null;if(x!=null)for(O in x.ref!==void 0&&(Z=x.ref),x.key!==void 0&&(V=""+x.key),x)Ve.call(x,O)&&!De.hasOwnProperty(O)&&(W[O]=x[O]);var Q=arguments.length-2;if(Q===1)W.children=R;else if(1<Q){for(var re=Array(Q),Ue=0;Ue<Q;Ue++)re[Ue]=arguments[Ue+2];W.children=re}if(p&&p.defaultProps)for(O in Q=p.defaultProps,Q)W[O]===void 0&&(W[O]=Q[O]);return{$$typeof:h,type:p,key:V,ref:Z,props:W,_owner:fe.current}}function ln(p,x){return{$$typeof:h,type:p.type,key:x,ref:p.ref,props:p.props,_owner:p._owner}}function Ze(p){return typeof p=="object"&&p!==null&&p.$$typeof===h}function Ln(p){var x={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(R){return x[R]})}var ze=/\/+/g;function Me(p,x){return typeof p=="object"&&p!==null&&p.key!=null?Ln(""+p.key):x.toString(36)}function en(p,x,R,O,W){var V=typeof p;(V==="undefined"||V==="boolean")&&(p=null);var Z=!1;if(p===null)Z=!0;else switch(V){case"string":case"number":Z=!0;break;case"object":switch(p.$$typeof){case h:case C:Z=!0}}if(Z)return Z=p,W=W(Z),p=O===""?"."+Me(Z,0):O,oe(W)?(R="",p!=null&&(R=p.replace(ze,"$&/")+"/"),en(W,x,R,"",function(Ue){return Ue})):W!=null&&(Ze(W)&&(W=ln(W,R+(!W.key||Z&&Z.key===W.key?"":(""+W.key).replace(ze,"$&/")+"/")+p)),x.push(W)),1;if(Z=0,O=O===""?".":O+":",oe(p))for(var Q=0;Q<p.length;Q++){V=p[Q];var re=O+Me(V,Q);Z+=en(V,x,R,re,W)}else if(re=J(p),typeof re=="function")for(p=re.call(p),Q=0;!(V=p.next()).done;)V=V.value,re=O+Me(V,Q++),Z+=en(V,x,R,re,W);else if(V==="object")throw x=String(p),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.");return Z}function Fe(p,x,R){if(p==null)return p;var O=[],W=0;return en(p,O,"","",function(V){return x.call(R,V,W++)}),O}function Ee(p){if(p._status===-1){var x=p._result;x=x(),x.then(function(R){(p._status===0||p._status===-1)&&(p._status=1,p._result=R)},function(R){(p._status===0||p._status===-1)&&(p._status=2,p._result=R)}),p._status===-1&&(p._status=0,p._result=x)}if(p._status===1)return p._result.default;throw p._result}var te={current:null},E={transition:null},T={ReactCurrentDispatcher:te,ReactCurrentBatchConfig:E,ReactCurrentOwner:fe};function S(){throw Error("act(...) is not supported in production builds of React.")}return z.Children={map:Fe,forEach:function(p,x,R){Fe(p,function(){x.apply(this,arguments)},R)},count:function(p){var x=0;return Fe(p,function(){x++}),x},toArray:function(p){return Fe(p,function(x){return x})||[]},only:function(p){if(!Ze(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},z.Component=Y,z.Fragment=d,z.Profiler=k,z.PureComponent=Ie,z.StrictMode=M,z.Suspense=P,z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,z.act=S,z.cloneElement=function(p,x,R){if(p==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+p+".");var O=We({},p.props),W=p.key,V=p.ref,Z=p._owner;if(x!=null){if(x.ref!==void 0&&(V=x.ref,Z=fe.current),x.key!==void 0&&(W=""+x.key),p.type&&p.type.defaultProps)var Q=p.type.defaultProps;for(re in x)Ve.call(x,re)&&!De.hasOwnProperty(re)&&(O[re]=x[re]===void 0&&Q!==void 0?Q[re]:x[re])}var re=arguments.length-2;if(re===1)O.children=R;else if(1<re){Q=Array(re);for(var Ue=0;Ue<re;Ue++)Q[Ue]=arguments[Ue+2];O.children=Q}return{$$typeof:h,type:p.type,key:W,ref:V,props:O,_owner:Z}},z.createContext=function(p){return p={$$typeof:$,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},p.Provider={$$typeof:N,_context:p},p.Consumer=p},z.createElement=Ce,z.createFactory=function(p){var x=Ce.bind(null,p);return x.type=p,x},z.createRef=function(){return{current:null}},z.forwardRef=function(p){return{$$typeof:ue,render:p}},z.isValidElement=Ze,z.lazy=function(p){return{$$typeof:he,_payload:{_status:-1,_result:p},_init:Ee}},z.memo=function(p,x){return{$$typeof:Se,type:p,compare:x===void 0?null:x}},z.startTransition=function(p){var x=E.transition;E.transition={};try{p()}finally{E.transition=x}},z.unstable_act=S,z.useCallback=function(p,x){return te.current.useCallback(p,x)},z.useContext=function(p){return te.current.useContext(p)},z.useDebugValue=function(){},z.useDeferredValue=function(p){return te.current.useDeferredValue(p)},z.useEffect=function(p,x){return te.current.useEffect(p,x)},z.useId=function(){return te.current.useId()},z.useImperativeHandle=function(p,x,R){return te.current.useImperativeHandle(p,x,R)},z.useInsertionEffect=function(p,x){return te.current.useInsertionEffect(p,x)},z.useLayoutEffect=function(p,x){return te.current.useLayoutEffect(p,x)},z.useMemo=function(p,x){return te.current.useMemo(p,x)},z.useReducer=function(p,x,R){return te.current.useReducer(p,x,R)},z.useRef=function(p){return te.current.useRef(p)},z.useState=function(p){return te.current.useState(p)},z.useSyncExternalStore=function(p,x,R){return te.current.useSyncExternalStore(p,x,R)},z.useTransition=function(){return te.current.useTransition()},z.version="18.3.1",z}var Dc;function Oo(){return Dc||(Dc=1,To.exports=qd()),To.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mc;function Rd(){if(Mc)return Nr;Mc=1;var h=Oo(),C=Symbol.for("react.element"),d=Symbol.for("react.fragment"),M=Object.prototype.hasOwnProperty,k=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N={key:!0,ref:!0,__self:!0,__source:!0};function $(ue,P,Se){var he,se={},J=null,we=null;Se!==void 0&&(J=""+Se),P.key!==void 0&&(J=""+P.key),P.ref!==void 0&&(we=P.ref);for(he in P)M.call(P,he)&&!N.hasOwnProperty(he)&&(se[he]=P[he]);if(ue&&ue.defaultProps)for(he in P=ue.defaultProps,P)se[he]===void 0&&(se[he]=P[he]);return{$$typeof:C,type:ue,key:J,ref:we,props:se,_owner:k.current}}return Nr.Fragment=d,Nr.jsx=$,Nr.jsxs=$,Nr}var Tc;function Od(){return Tc||(Tc=1,Mo.exports=Rd()),Mo.exports}var i=Od(),ce=Oo();const zd=zc(ce);var qi={},Bo={exports:{}},Je={},Uo={exports:{}},Po={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bc;function Fd(){return Bc||(Bc=1,(function(h){function C(E,T){var S=E.length;E.push(T);e:for(;0<S;){var p=S-1>>>1,x=E[p];if(0<k(x,T))E[p]=T,E[S]=x,S=p;else break e}}function d(E){return E.length===0?null:E[0]}function M(E){if(E.length===0)return null;var T=E[0],S=E.pop();if(S!==T){E[0]=S;e:for(var p=0,x=E.length,R=x>>>1;p<R;){var O=2*(p+1)-1,W=E[O],V=O+1,Z=E[V];if(0>k(W,S))V<x&&0>k(Z,W)?(E[p]=Z,E[V]=S,p=V):(E[p]=W,E[O]=S,p=O);else if(V<x&&0>k(Z,S))E[p]=Z,E[V]=S,p=V;else break e}}return T}function k(E,T){var S=E.sortIndex-T.sortIndex;return S!==0?S:E.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var N=performance;h.unstable_now=function(){return N.now()}}else{var $=Date,ue=$.now();h.unstable_now=function(){return $.now()-ue}}var P=[],Se=[],he=1,se=null,J=3,we=!1,We=!1,ne=!1,Y=typeof setTimeout=="function"?setTimeout:null,fn=typeof clearTimeout=="function"?clearTimeout:null,Ie=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function be(E){for(var T=d(Se);T!==null;){if(T.callback===null)M(Se);else if(T.startTime<=E)M(Se),T.sortIndex=T.expirationTime,C(P,T);else break;T=d(Se)}}function oe(E){if(ne=!1,be(E),!We)if(d(P)!==null)We=!0,Ee(Ve);else{var T=d(Se);T!==null&&te(oe,T.startTime-E)}}function Ve(E,T){We=!1,ne&&(ne=!1,fn(Ce),Ce=-1),we=!0;var S=J;try{for(be(T),se=d(P);se!==null&&(!(se.expirationTime>T)||E&&!Ln());){var p=se.callback;if(typeof p=="function"){se.callback=null,J=se.priorityLevel;var x=p(se.expirationTime<=T);T=h.unstable_now(),typeof x=="function"?se.callback=x:se===d(P)&&M(P),be(T)}else M(P);se=d(P)}if(se!==null)var R=!0;else{var O=d(Se);O!==null&&te(oe,O.startTime-T),R=!1}return R}finally{se=null,J=S,we=!1}}var fe=!1,De=null,Ce=-1,ln=5,Ze=-1;function Ln(){return!(h.unstable_now()-Ze<ln)}function ze(){if(De!==null){var E=h.unstable_now();Ze=E;var T=!0;try{T=De(!0,E)}finally{T?Me():(fe=!1,De=null)}}else fe=!1}var Me;if(typeof Ie=="function")Me=function(){Ie(ze)};else if(typeof MessageChannel<"u"){var en=new MessageChannel,Fe=en.port2;en.port1.onmessage=ze,Me=function(){Fe.postMessage(null)}}else Me=function(){Y(ze,0)};function Ee(E){De=E,fe||(fe=!0,Me())}function te(E,T){Ce=Y(function(){E(h.unstable_now())},T)}h.unstable_IdlePriority=5,h.unstable_ImmediatePriority=1,h.unstable_LowPriority=4,h.unstable_NormalPriority=3,h.unstable_Profiling=null,h.unstable_UserBlockingPriority=2,h.unstable_cancelCallback=function(E){E.callback=null},h.unstable_continueExecution=function(){We||we||(We=!0,Ee(Ve))},h.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ln=0<E?Math.floor(1e3/E):5},h.unstable_getCurrentPriorityLevel=function(){return J},h.unstable_getFirstCallbackNode=function(){return d(P)},h.unstable_next=function(E){switch(J){case 1:case 2:case 3:var T=3;break;default:T=J}var S=J;J=T;try{return E()}finally{J=S}},h.unstable_pauseExecution=function(){},h.unstable_requestPaint=function(){},h.unstable_runWithPriority=function(E,T){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var S=J;J=E;try{return T()}finally{J=S}},h.unstable_scheduleCallback=function(E,T,S){var p=h.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?p+S:p):S=p,E){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=S+x,E={id:he++,callback:T,priorityLevel:E,startTime:S,expirationTime:x,sortIndex:-1},S>p?(E.sortIndex=S,C(Se,E),d(P)===null&&E===d(Se)&&(ne?(fn(Ce),Ce=-1):ne=!0,te(oe,S-p))):(E.sortIndex=x,C(P,E),We||we||(We=!0,Ee(Ve))),E},h.unstable_shouldYield=Ln,h.unstable_wrapCallback=function(E){var T=J;return function(){var S=J;J=T;try{return E.apply(this,arguments)}finally{J=S}}}})(Po)),Po}var Uc;function $d(){return Uc||(Uc=1,Uo.exports=Fd()),Uo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pc;function Hd(){if(Pc)return Je;Pc=1;var h=Oo(),C=$d();function d(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var M=new Set,k={};function N(e,n){$(e,n),$(e+"Capture",n)}function $(e,n){for(k[e]=n,e=0;e<n.length;e++)M.add(n[e])}var ue=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),P=Object.prototype.hasOwnProperty,Se=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,he={},se={};function J(e){return P.call(se,e)?!0:P.call(he,e)?!1:Se.test(e)?se[e]=!0:(he[e]=!0,!1)}function we(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function We(e,n,t,r){if(n===null||typeof n>"u"||we(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ne(e,n,t,r,s,o,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=l}var Y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Y[e]=new ne(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Y[n]=new ne(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Y[e]=new ne(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Y[e]=new ne(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Y[e]=new ne(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Y[e]=new ne(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Y[e]=new ne(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Y[e]=new ne(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Y[e]=new ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var fn=/[\-:]([a-z])/g;function Ie(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(fn,Ie);Y[n]=new ne(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(fn,Ie);Y[n]=new ne(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(fn,Ie);Y[n]=new ne(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Y[e]=new ne(e,1,!1,e.toLowerCase(),null,!1,!1)}),Y.xlinkHref=new ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Y[e]=new ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function be(e,n,t,r){var s=Y.hasOwnProperty(n)?Y[n]:null;(s!==null?s.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(We(n,t,s,r)&&(t=null),r||s===null?J(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):s.mustUseProperty?e[s.propertyName]=t===null?s.type===3?!1:"":t:(n=s.attributeName,r=s.attributeNamespace,t===null?e.removeAttribute(n):(s=s.type,t=s===3||s===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var oe=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ve=Symbol.for("react.element"),fe=Symbol.for("react.portal"),De=Symbol.for("react.fragment"),Ce=Symbol.for("react.strict_mode"),ln=Symbol.for("react.profiler"),Ze=Symbol.for("react.provider"),Ln=Symbol.for("react.context"),ze=Symbol.for("react.forward_ref"),Me=Symbol.for("react.suspense"),en=Symbol.for("react.suspense_list"),Fe=Symbol.for("react.memo"),Ee=Symbol.for("react.lazy"),te=Symbol.for("react.offscreen"),E=Symbol.iterator;function T(e){return e===null||typeof e!="object"?null:(e=E&&e[E]||e["@@iterator"],typeof e=="function"?e:null)}var S=Object.assign,p;function x(e){if(p===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);p=n&&n[1]||""}return`
`+p+e}var R=!1;function O(e,n){if(!e||R)return"";R=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(m){var r=m}Reflect.construct(e,[],n)}else{try{n.call()}catch(m){r=m}e.call(n.prototype)}else{try{throw Error()}catch(m){r=m}e()}}catch(m){if(m&&r&&typeof m.stack=="string"){for(var s=m.stack.split(`
`),o=r.stack.split(`
`),l=s.length-1,a=o.length-1;1<=l&&0<=a&&s[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(s[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||s[l]!==o[a]){var c=`
`+s[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=a);break}}}finally{R=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?x(e):""}function W(e){switch(e.tag){case 5:return x(e.type);case 16:return x("Lazy");case 13:return x("Suspense");case 19:return x("SuspenseList");case 0:case 2:case 15:return e=O(e.type,!1),e;case 11:return e=O(e.type.render,!1),e;case 1:return e=O(e.type,!0),e;default:return""}}function V(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case De:return"Fragment";case fe:return"Portal";case ln:return"Profiler";case Ce:return"StrictMode";case Me:return"Suspense";case en:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ln:return(e.displayName||"Context")+".Consumer";case Ze:return(e._context.displayName||"Context")+".Provider";case ze:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fe:return n=e.displayName||null,n!==null?n:V(e.type)||"Memo";case Ee:n=e._payload,e=e._init;try{return V(e(n))}catch{}}return null}function Z(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return V(n);case 8:return n===Ce?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Q(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function re(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ue(e){var n=re(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var s=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return s.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ft(e){e._valueTracker||(e._valueTracker=Ue(e))}function Ar(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=re(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function gt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zt(e,n){var t=n.checked;return S({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function H(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Q(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function de(e,n){n=n.checked,n!=null&&be(e,"checked",n,!1)}function F(e,n){de(e,n);var t=Q(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ft(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ft(e,n.type,Q(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function nn(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ft(e,n,t){(n!=="number"||gt(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var $t=Array.isArray;function mt(e,n,t,r){if(e=e.options,n){n={};for(var s=0;s<t.length;s++)n["$"+t[s]]=!0;for(t=0;t<e.length;t++)s=n.hasOwnProperty("$"+e[t].value),e[t].selected!==s&&(e[t].selected=s),s&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Q(t),n=null,s=0;s<e.length;s++){if(e[s].value===t){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}n!==null||e[s].disabled||(n=e[s])}n!==null&&(n.selected=!0)}}function Fi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(d(91));return S({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zo(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(d(92));if($t(t)){if(1<t.length)throw Error(d(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Q(t)}}function Fo(e,n){var t=Q(n.value),r=Q(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function $o(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Ho(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $i(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Ho(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _r,Wo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,s){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,s)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(_r=_r||document.createElement("div"),_r.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=_r.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ht(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Wt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fc=["Webkit","ms","Moz","O"];Object.keys(Wt).forEach(function(e){Fc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Wt[n]=Wt[e]})});function Vo(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Wt.hasOwnProperty(e)&&Wt[e]?(""+n).trim():n+"px"}function Yo(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,s=Vo(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,s):e[t]=s}}var $c=S({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hi(e,n){if(n){if($c[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(d(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(d(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(d(61))}if(n.style!=null&&typeof n.style!="object")throw Error(d(62))}}function Wi(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vi=null;function Yi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gi=null,xt=null,vt=null;function Go(e){if(e=hr(e)){if(typeof Gi!="function")throw Error(d(280));var n=e.stateNode;n&&(n=Zr(n),Gi(e.stateNode,e.type,n))}}function Ko(e){xt?vt?vt.push(e):vt=[e]:xt=e}function Qo(){if(xt){var e=xt,n=vt;if(vt=xt=null,Go(e),n)for(e=0;e<n.length;e++)Go(n[e])}}function Xo(e,n){return e(n)}function Jo(){}var Ki=!1;function Zo(e,n,t){if(Ki)return e(n,t);Ki=!0;try{return Xo(e,n,t)}finally{Ki=!1,(xt!==null||vt!==null)&&(Jo(),Qo())}}function Vt(e,n){var t=e.stateNode;if(t===null)return null;var r=Zr(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(d(231,n,typeof t));return t}var Qi=!1;if(ue)try{var Yt={};Object.defineProperty(Yt,"passive",{get:function(){Qi=!0}}),window.addEventListener("test",Yt,Yt),window.removeEventListener("test",Yt,Yt)}catch{Qi=!1}function Hc(e,n,t,r,s,o,l,a,c){var m=Array.prototype.slice.call(arguments,3);try{n.apply(t,m)}catch(y){this.onError(y)}}var Gt=!1,Ir=null,Dr=!1,Xi=null,Wc={onError:function(e){Gt=!0,Ir=e}};function Vc(e,n,t,r,s,o,l,a,c){Gt=!1,Ir=null,Hc.apply(Wc,arguments)}function Yc(e,n,t,r,s,o,l,a,c){if(Vc.apply(this,arguments),Gt){if(Gt){var m=Ir;Gt=!1,Ir=null}else throw Error(d(198));Dr||(Dr=!0,Xi=m)}}function nt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function el(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function nl(e){if(nt(e)!==e)throw Error(d(188))}function Gc(e){var n=e.alternate;if(!n){if(n=nt(e),n===null)throw Error(d(188));return n!==e?null:e}for(var t=e,r=n;;){var s=t.return;if(s===null)break;var o=s.alternate;if(o===null){if(r=s.return,r!==null){t=r;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===t)return nl(s),e;if(o===r)return nl(s),n;o=o.sibling}throw Error(d(188))}if(t.return!==r.return)t=s,r=o;else{for(var l=!1,a=s.child;a;){if(a===t){l=!0,t=s,r=o;break}if(a===r){l=!0,r=s,t=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===t){l=!0,t=o,r=s;break}if(a===r){l=!0,r=o,t=s;break}a=a.sibling}if(!l)throw Error(d(189))}}if(t.alternate!==r)throw Error(d(190))}if(t.tag!==3)throw Error(d(188));return t.stateNode.current===t?e:n}function tl(e){return e=Gc(e),e!==null?rl(e):null}function rl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=rl(e);if(n!==null)return n;e=e.sibling}return null}var il=C.unstable_scheduleCallback,sl=C.unstable_cancelCallback,Kc=C.unstable_shouldYield,Qc=C.unstable_requestPaint,ve=C.unstable_now,Xc=C.unstable_getCurrentPriorityLevel,Ji=C.unstable_ImmediatePriority,ol=C.unstable_UserBlockingPriority,Mr=C.unstable_NormalPriority,Jc=C.unstable_LowPriority,ll=C.unstable_IdlePriority,Tr=null,kn=null;function Zc(e){if(kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(Tr,e,void 0,(e.current.flags&128)===128)}catch{}}var gn=Math.clz32?Math.clz32:tu,eu=Math.log,nu=Math.LN2;function tu(e){return e>>>=0,e===0?32:31-(eu(e)/nu|0)|0}var Br=64,Ur=4194304;function Kt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Pr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,s=e.suspendedLanes,o=e.pingedLanes,l=t&268435455;if(l!==0){var a=l&~s;a!==0?r=Kt(a):(o&=l,o!==0&&(r=Kt(o)))}else l=t&~s,l!==0?r=Kt(l):o!==0&&(r=Kt(o));if(r===0)return 0;if(n!==0&&n!==r&&(n&s)===0&&(s=r&-r,o=n&-n,s>=o||s===16&&(o&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-gn(n),s=1<<t,r|=e[t],n&=~s;return r}function ru(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iu(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-gn(o),a=1<<l,c=s[l];c===-1?((a&t)===0||(a&r)!==0)&&(s[l]=ru(a,n)):c<=n&&(e.expiredLanes|=a),o&=~a}}function Zi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function al(){var e=Br;return Br<<=1,(Br&4194240)===0&&(Br=64),e}function es(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Qt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-gn(n),e[n]=t}function su(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var s=31-gn(t),o=1<<s;n[s]=0,r[s]=-1,e[s]=-1,t&=~o}}function ns(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-gn(t),s=1<<r;s&n|e[r]&n&&(e[r]|=n),t&=~s}}var X=0;function cl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ul,ts,dl,pl,hl,rs=!1,qr=[],Un=null,Pn=null,qn=null,Xt=new Map,Jt=new Map,Rn=[],ou="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fl(e,n){switch(e){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":Xt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jt.delete(n.pointerId)}}function Zt(e,n,t,r,s,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[s]},n!==null&&(n=hr(n),n!==null&&ts(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,s!==null&&n.indexOf(s)===-1&&n.push(s),e)}function lu(e,n,t,r,s){switch(n){case"focusin":return Un=Zt(Un,e,n,t,r,s),!0;case"dragenter":return Pn=Zt(Pn,e,n,t,r,s),!0;case"mouseover":return qn=Zt(qn,e,n,t,r,s),!0;case"pointerover":var o=s.pointerId;return Xt.set(o,Zt(Xt.get(o)||null,e,n,t,r,s)),!0;case"gotpointercapture":return o=s.pointerId,Jt.set(o,Zt(Jt.get(o)||null,e,n,t,r,s)),!0}return!1}function gl(e){var n=tt(e.target);if(n!==null){var t=nt(n);if(t!==null){if(n=t.tag,n===13){if(n=el(t),n!==null){e.blockedOn=n,hl(e.priority,function(){dl(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ss(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Vi=r,t.target.dispatchEvent(r),Vi=null}else return n=hr(t),n!==null&&ts(n),e.blockedOn=t,!1;n.shift()}return!0}function ml(e,n,t){Rr(e)&&t.delete(n)}function au(){rs=!1,Un!==null&&Rr(Un)&&(Un=null),Pn!==null&&Rr(Pn)&&(Pn=null),qn!==null&&Rr(qn)&&(qn=null),Xt.forEach(ml),Jt.forEach(ml)}function er(e,n){e.blockedOn===n&&(e.blockedOn=null,rs||(rs=!0,C.unstable_scheduleCallback(C.unstable_NormalPriority,au)))}function nr(e){function n(s){return er(s,e)}if(0<qr.length){er(qr[0],e);for(var t=1;t<qr.length;t++){var r=qr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Un!==null&&er(Un,e),Pn!==null&&er(Pn,e),qn!==null&&er(qn,e),Xt.forEach(n),Jt.forEach(n),t=0;t<Rn.length;t++)r=Rn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rn.length&&(t=Rn[0],t.blockedOn===null);)gl(t),t.blockedOn===null&&Rn.shift()}var yt=oe.ReactCurrentBatchConfig,Or=!0;function cu(e,n,t,r){var s=X,o=yt.transition;yt.transition=null;try{X=1,is(e,n,t,r)}finally{X=s,yt.transition=o}}function uu(e,n,t,r){var s=X,o=yt.transition;yt.transition=null;try{X=4,is(e,n,t,r)}finally{X=s,yt.transition=o}}function is(e,n,t,r){if(Or){var s=ss(e,n,t,r);if(s===null)ks(e,n,r,zr,t),fl(e,r);else if(lu(s,e,n,t,r))r.stopPropagation();else if(fl(e,r),n&4&&-1<ou.indexOf(e)){for(;s!==null;){var o=hr(s);if(o!==null&&ul(o),o=ss(e,n,t,r),o===null&&ks(e,n,r,zr,t),o===s)break;s=o}s!==null&&r.stopPropagation()}else ks(e,n,r,null,t)}}var zr=null;function ss(e,n,t,r){if(zr=null,e=Yi(r),e=tt(e),e!==null)if(n=nt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=el(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return zr=e,null}function xl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xc()){case Ji:return 1;case ol:return 4;case Mr:case Jc:return 16;case ll:return 536870912;default:return 16}default:return 16}}var On=null,os=null,Fr=null;function vl(){if(Fr)return Fr;var e,n=os,t=n.length,r,s="value"in On?On.value:On.textContent,o=s.length;for(e=0;e<t&&n[e]===s[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===s[o-r];r++);return Fr=s.slice(e,1<r?1-r:void 0)}function $r(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Hr(){return!0}function yl(){return!1}function tn(e){function n(t,r,s,o,l){this._reactName=t,this._targetInst=s,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Hr:yl,this.isPropagationStopped=yl,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Hr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Hr)},persist:function(){},isPersistent:Hr}),n}var wt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ls=tn(wt),tr=S({},wt,{view:0,detail:0}),du=tn(tr),as,cs,rr,Wr=S({},tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ds,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rr&&(rr&&e.type==="mousemove"?(as=e.screenX-rr.screenX,cs=e.screenY-rr.screenY):cs=as=0,rr=e),as)},movementY:function(e){return"movementY"in e?e.movementY:cs}}),wl=tn(Wr),pu=S({},Wr,{dataTransfer:0}),hu=tn(pu),fu=S({},tr,{relatedTarget:0}),us=tn(fu),gu=S({},wt,{animationName:0,elapsedTime:0,pseudoElement:0}),mu=tn(gu),xu=S({},wt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vu=tn(xu),yu=S({},wt,{data:0}),bl=tn(yu),wu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ku={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Su(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ku[e])?!!n[e]:!1}function ds(){return Su}var Cu=S({},tr,{key:function(e){if(e.key){var n=wu[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=$r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ds,charCode:function(e){return e.type==="keypress"?$r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Eu=tn(Cu),ju=S({},Wr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kl=tn(ju),Lu=S({},tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ds}),Nu=tn(Lu),Au=S({},wt,{propertyName:0,elapsedTime:0,pseudoElement:0}),_u=tn(Au),Iu=S({},Wr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Du=tn(Iu),Mu=[9,13,27,32],ps=ue&&"CompositionEvent"in window,ir=null;ue&&"documentMode"in document&&(ir=document.documentMode);var Tu=ue&&"TextEvent"in window&&!ir,Sl=ue&&(!ps||ir&&8<ir&&11>=ir),Cl=" ",El=!1;function jl(e,n){switch(e){case"keyup":return Mu.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ll(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bt=!1;function Bu(e,n){switch(e){case"compositionend":return Ll(n);case"keypress":return n.which!==32?null:(El=!0,Cl);case"textInput":return e=n.data,e===Cl&&El?null:e;default:return null}}function Uu(e,n){if(bt)return e==="compositionend"||!ps&&jl(e,n)?(e=vl(),Fr=os=On=null,bt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Sl&&n.locale!=="ko"?null:n.data;default:return null}}var Pu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Pu[e.type]:n==="textarea"}function Al(e,n,t,r){Ko(r),n=Qr(n,"onChange"),0<n.length&&(t=new ls("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var sr=null,or=null;function qu(e){Yl(e,0)}function Vr(e){var n=jt(e);if(Ar(n))return e}function Ru(e,n){if(e==="change")return n}var _l=!1;if(ue){var hs;if(ue){var fs="oninput"in document;if(!fs){var Il=document.createElement("div");Il.setAttribute("oninput","return;"),fs=typeof Il.oninput=="function"}hs=fs}else hs=!1;_l=hs&&(!document.documentMode||9<document.documentMode)}function Dl(){sr&&(sr.detachEvent("onpropertychange",Ml),or=sr=null)}function Ml(e){if(e.propertyName==="value"&&Vr(or)){var n=[];Al(n,or,e,Yi(e)),Zo(qu,n)}}function Ou(e,n,t){e==="focusin"?(Dl(),sr=n,or=t,sr.attachEvent("onpropertychange",Ml)):e==="focusout"&&Dl()}function zu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vr(or)}function Fu(e,n){if(e==="click")return Vr(n)}function $u(e,n){if(e==="input"||e==="change")return Vr(n)}function Hu(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var mn=typeof Object.is=="function"?Object.is:Hu;function lr(e,n){if(mn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var s=t[r];if(!P.call(n,s)||!mn(e[s],n[s]))return!1}return!0}function Tl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bl(e,n){var t=Tl(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Tl(t)}}function Ul(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ul(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Pl(){for(var e=window,n=gt();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=gt(e.document)}return n}function gs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Wu(e){var n=Pl(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ul(t.ownerDocument.documentElement,t)){if(r!==null&&gs(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var s=t.textContent.length,o=Math.min(r.start,s);r=r.end===void 0?o:Math.min(r.end,s),!e.extend&&o>r&&(s=r,r=o,o=s),s=Bl(t,o);var l=Bl(t,r);s&&l&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(s.node,s.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vu=ue&&"documentMode"in document&&11>=document.documentMode,kt=null,ms=null,ar=null,xs=!1;function ql(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;xs||kt==null||kt!==gt(r)||(r=kt,"selectionStart"in r&&gs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ar&&lr(ar,r)||(ar=r,r=Qr(ms,"onSelect"),0<r.length&&(n=new ls("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=kt)))}function Yr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var St={animationend:Yr("Animation","AnimationEnd"),animationiteration:Yr("Animation","AnimationIteration"),animationstart:Yr("Animation","AnimationStart"),transitionend:Yr("Transition","TransitionEnd")},vs={},Rl={};ue&&(Rl=document.createElement("div").style,"AnimationEvent"in window||(delete St.animationend.animation,delete St.animationiteration.animation,delete St.animationstart.animation),"TransitionEvent"in window||delete St.transitionend.transition);function Gr(e){if(vs[e])return vs[e];if(!St[e])return e;var n=St[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Rl)return vs[e]=n[t];return e}var Ol=Gr("animationend"),zl=Gr("animationiteration"),Fl=Gr("animationstart"),$l=Gr("transitionend"),Hl=new Map,Wl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zn(e,n){Hl.set(e,n),N(n,[e])}for(var ys=0;ys<Wl.length;ys++){var ws=Wl[ys],Yu=ws.toLowerCase(),Gu=ws[0].toUpperCase()+ws.slice(1);zn(Yu,"on"+Gu)}zn(Ol,"onAnimationEnd"),zn(zl,"onAnimationIteration"),zn(Fl,"onAnimationStart"),zn("dblclick","onDoubleClick"),zn("focusin","onFocus"),zn("focusout","onBlur"),zn($l,"onTransitionEnd"),$("onMouseEnter",["mouseout","mouseover"]),$("onMouseLeave",["mouseout","mouseover"]),$("onPointerEnter",["pointerout","pointerover"]),$("onPointerLeave",["pointerout","pointerover"]),N("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),N("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),N("onBeforeInput",["compositionend","keypress","textInput","paste"]),N("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),N("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),N("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ku=new Set("cancel close invalid load scroll toggle".split(" ").concat(cr));function Vl(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Yc(r,n,void 0,e),e.currentTarget=null}function Yl(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],s=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var l=r.length-1;0<=l;l--){var a=r[l],c=a.instance,m=a.currentTarget;if(a=a.listener,c!==o&&s.isPropagationStopped())break e;Vl(s,a,m),o=c}else for(l=0;l<r.length;l++){if(a=r[l],c=a.instance,m=a.currentTarget,a=a.listener,c!==o&&s.isPropagationStopped())break e;Vl(s,a,m),o=c}}}if(Dr)throw e=Xi,Dr=!1,Xi=null,e}function le(e,n){var t=n[Ns];t===void 0&&(t=n[Ns]=new Set);var r=e+"__bubble";t.has(r)||(Gl(n,e,2,!1),t.add(r))}function bs(e,n,t){var r=0;n&&(r|=4),Gl(t,e,r,n)}var Kr="_reactListening"+Math.random().toString(36).slice(2);function ur(e){if(!e[Kr]){e[Kr]=!0,M.forEach(function(t){t!=="selectionchange"&&(Ku.has(t)||bs(t,!1,e),bs(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Kr]||(n[Kr]=!0,bs("selectionchange",!1,n))}}function Gl(e,n,t,r){switch(xl(n)){case 1:var s=cu;break;case 4:s=uu;break;default:s=is}t=s.bind(null,n,t,e),s=void 0,!Qi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(n,t,{capture:!0,passive:s}):e.addEventListener(n,t,!0):s!==void 0?e.addEventListener(n,t,{passive:s}):e.addEventListener(n,t,!1)}function ks(e,n,t,r,s){var o=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;l=l.return}for(;a!==null;){if(l=tt(a),l===null)return;if(c=l.tag,c===5||c===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Zo(function(){var m=o,y=Yi(t),w=[];e:{var v=Hl.get(e);if(v!==void 0){var L=ls,_=e;switch(e){case"keypress":if($r(t)===0)break e;case"keydown":case"keyup":L=Eu;break;case"focusin":_="focus",L=us;break;case"focusout":_="blur",L=us;break;case"beforeblur":case"afterblur":L=us;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=wl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=hu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=Nu;break;case Ol:case zl:case Fl:L=mu;break;case $l:L=_u;break;case"scroll":L=du;break;case"wheel":L=Du;break;case"copy":case"cut":case"paste":L=vu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=kl}var I=(n&4)!==0,ye=!I&&e==="scroll",f=I?v!==null?v+"Capture":null:v;I=[];for(var u=m,g;u!==null;){g=u;var b=g.stateNode;if(g.tag===5&&b!==null&&(g=b,f!==null&&(b=Vt(u,f),b!=null&&I.push(dr(u,b,g)))),ye)break;u=u.return}0<I.length&&(v=new L(v,_,null,t,y),w.push({event:v,listeners:I}))}}if((n&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",v&&t!==Vi&&(_=t.relatedTarget||t.fromElement)&&(tt(_)||_[Nn]))break e;if((L||v)&&(v=y.window===y?y:(v=y.ownerDocument)?v.defaultView||v.parentWindow:window,L?(_=t.relatedTarget||t.toElement,L=m,_=_?tt(_):null,_!==null&&(ye=nt(_),_!==ye||_.tag!==5&&_.tag!==6)&&(_=null)):(L=null,_=m),L!==_)){if(I=wl,b="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(I=kl,b="onPointerLeave",f="onPointerEnter",u="pointer"),ye=L==null?v:jt(L),g=_==null?v:jt(_),v=new I(b,u+"leave",L,t,y),v.target=ye,v.relatedTarget=g,b=null,tt(y)===m&&(I=new I(f,u+"enter",_,t,y),I.target=g,I.relatedTarget=ye,b=I),ye=b,L&&_)n:{for(I=L,f=_,u=0,g=I;g;g=Ct(g))u++;for(g=0,b=f;b;b=Ct(b))g++;for(;0<u-g;)I=Ct(I),u--;for(;0<g-u;)f=Ct(f),g--;for(;u--;){if(I===f||f!==null&&I===f.alternate)break n;I=Ct(I),f=Ct(f)}I=null}else I=null;L!==null&&Kl(w,v,L,I,!1),_!==null&&ye!==null&&Kl(w,ye,_,I,!0)}}e:{if(v=m?jt(m):window,L=v.nodeName&&v.nodeName.toLowerCase(),L==="select"||L==="input"&&v.type==="file")var D=Ru;else if(Nl(v))if(_l)D=$u;else{D=zu;var B=Ou}else(L=v.nodeName)&&L.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(D=Fu);if(D&&(D=D(e,m))){Al(w,D,t,y);break e}B&&B(e,v,m),e==="focusout"&&(B=v._wrapperState)&&B.controlled&&v.type==="number"&&Ft(v,"number",v.value)}switch(B=m?jt(m):window,e){case"focusin":(Nl(B)||B.contentEditable==="true")&&(kt=B,ms=m,ar=null);break;case"focusout":ar=ms=kt=null;break;case"mousedown":xs=!0;break;case"contextmenu":case"mouseup":case"dragend":xs=!1,ql(w,t,y);break;case"selectionchange":if(Vu)break;case"keydown":case"keyup":ql(w,t,y)}var U;if(ps)e:{switch(e){case"compositionstart":var q="onCompositionStart";break e;case"compositionend":q="onCompositionEnd";break e;case"compositionupdate":q="onCompositionUpdate";break e}q=void 0}else bt?jl(e,t)&&(q="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(q="onCompositionStart");q&&(Sl&&t.locale!=="ko"&&(bt||q!=="onCompositionStart"?q==="onCompositionEnd"&&bt&&(U=vl()):(On=y,os="value"in On?On.value:On.textContent,bt=!0)),B=Qr(m,q),0<B.length&&(q=new bl(q,e,null,t,y),w.push({event:q,listeners:B}),U?q.data=U:(U=Ll(t),U!==null&&(q.data=U)))),(U=Tu?Bu(e,t):Uu(e,t))&&(m=Qr(m,"onBeforeInput"),0<m.length&&(y=new bl("onBeforeInput","beforeinput",null,t,y),w.push({event:y,listeners:m}),y.data=U))}Yl(w,n)})}function dr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Qr(e,n){for(var t=n+"Capture",r=[];e!==null;){var s=e,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=Vt(e,t),o!=null&&r.unshift(dr(e,o,s)),o=Vt(e,n),o!=null&&r.push(dr(e,o,s))),e=e.return}return r}function Ct(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Kl(e,n,t,r,s){for(var o=n._reactName,l=[];t!==null&&t!==r;){var a=t,c=a.alternate,m=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&m!==null&&(a=m,s?(c=Vt(t,o),c!=null&&l.unshift(dr(t,c,a))):s||(c=Vt(t,o),c!=null&&l.push(dr(t,c,a)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var Qu=/\r\n?/g,Xu=/\u0000|\uFFFD/g;function Ql(e){return(typeof e=="string"?e:""+e).replace(Qu,`
`).replace(Xu,"")}function Xr(e,n,t){if(n=Ql(n),Ql(e)!==n&&t)throw Error(d(425))}function Jr(){}var Ss=null,Cs=null;function Es(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var js=typeof setTimeout=="function"?setTimeout:void 0,Ju=typeof clearTimeout=="function"?clearTimeout:void 0,Xl=typeof Promise=="function"?Promise:void 0,Zu=typeof queueMicrotask=="function"?queueMicrotask:typeof Xl<"u"?function(e){return Xl.resolve(null).then(e).catch(ed)}:js;function ed(e){setTimeout(function(){throw e})}function Ls(e,n){var t=n,r=0;do{var s=t.nextSibling;if(e.removeChild(t),s&&s.nodeType===8)if(t=s.data,t==="/$"){if(r===0){e.removeChild(s),nr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=s}while(t);nr(n)}function Fn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Jl(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Et=Math.random().toString(36).slice(2),Sn="__reactFiber$"+Et,pr="__reactProps$"+Et,Nn="__reactContainer$"+Et,Ns="__reactEvents$"+Et,nd="__reactListeners$"+Et,td="__reactHandles$"+Et;function tt(e){var n=e[Sn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Nn]||t[Sn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Jl(e);e!==null;){if(t=e[Sn])return t;e=Jl(e)}return n}e=t,t=e.parentNode}return null}function hr(e){return e=e[Sn]||e[Nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(d(33))}function Zr(e){return e[pr]||null}var As=[],Lt=-1;function $n(e){return{current:e}}function ae(e){0>Lt||(e.current=As[Lt],As[Lt]=null,Lt--)}function ie(e,n){Lt++,As[Lt]=e.current,e.current=n}var Hn={},Pe=$n(Hn),Ye=$n(!1),rt=Hn;function Nt(e,n){var t=e.type.contextTypes;if(!t)return Hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in t)s[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=s),s}function Ge(e){return e=e.childContextTypes,e!=null}function ei(){ae(Ye),ae(Pe)}function Zl(e,n,t){if(Pe.current!==Hn)throw Error(d(168));ie(Pe,n),ie(Ye,t)}function ea(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var s in r)if(!(s in n))throw Error(d(108,Z(e)||"Unknown",s));return S({},t,r)}function ni(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hn,rt=Pe.current,ie(Pe,e),ie(Ye,Ye.current),!0}function na(e,n,t){var r=e.stateNode;if(!r)throw Error(d(169));t?(e=ea(e,n,rt),r.__reactInternalMemoizedMergedChildContext=e,ae(Ye),ae(Pe),ie(Pe,e)):ae(Ye),ie(Ye,t)}var An=null,ti=!1,_s=!1;function ta(e){An===null?An=[e]:An.push(e)}function rd(e){ti=!0,ta(e)}function Wn(){if(!_s&&An!==null){_s=!0;var e=0,n=X;try{var t=An;for(X=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}An=null,ti=!1}catch(s){throw An!==null&&(An=An.slice(e+1)),il(Ji,Wn),s}finally{X=n,_s=!1}}return null}var At=[],_t=0,ri=null,ii=0,an=[],cn=0,it=null,_n=1,In="";function st(e,n){At[_t++]=ii,At[_t++]=ri,ri=e,ii=n}function ra(e,n,t){an[cn++]=_n,an[cn++]=In,an[cn++]=it,it=e;var r=_n;e=In;var s=32-gn(r)-1;r&=~(1<<s),t+=1;var o=32-gn(n)+s;if(30<o){var l=s-s%5;o=(r&(1<<l)-1).toString(32),r>>=l,s-=l,_n=1<<32-gn(n)+s|t<<s|r,In=o+e}else _n=1<<o|t<<s|r,In=e}function Is(e){e.return!==null&&(st(e,1),ra(e,1,0))}function Ds(e){for(;e===ri;)ri=At[--_t],At[_t]=null,ii=At[--_t],At[_t]=null;for(;e===it;)it=an[--cn],an[cn]=null,In=an[--cn],an[cn]=null,_n=an[--cn],an[cn]=null}var rn=null,sn=null,pe=!1,xn=null;function ia(e,n){var t=hn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function sa(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,rn=e,sn=Fn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,rn=e,sn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=it!==null?{id:_n,overflow:In}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=hn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,rn=e,sn=null,!0):!1;default:return!1}}function Ms(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ts(e){if(pe){var n=sn;if(n){var t=n;if(!sa(e,n)){if(Ms(e))throw Error(d(418));n=Fn(t.nextSibling);var r=rn;n&&sa(e,n)?ia(r,t):(e.flags=e.flags&-4097|2,pe=!1,rn=e)}}else{if(Ms(e))throw Error(d(418));e.flags=e.flags&-4097|2,pe=!1,rn=e}}}function oa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rn=e}function si(e){if(e!==rn)return!1;if(!pe)return oa(e),pe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Es(e.type,e.memoizedProps)),n&&(n=sn)){if(Ms(e))throw la(),Error(d(418));for(;n;)ia(e,n),n=Fn(n.nextSibling)}if(oa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){sn=Fn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}sn=null}}else sn=rn?Fn(e.stateNode.nextSibling):null;return!0}function la(){for(var e=sn;e;)e=Fn(e.nextSibling)}function It(){sn=rn=null,pe=!1}function Bs(e){xn===null?xn=[e]:xn.push(e)}var id=oe.ReactCurrentBatchConfig;function fr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(d(309));var r=t.stateNode}if(!r)throw Error(d(147,e));var s=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(l){var a=s.refs;l===null?delete a[o]:a[o]=l},n._stringRef=o,n)}if(typeof e!="string")throw Error(d(284));if(!t._owner)throw Error(d(290,e))}return e}function oi(e,n){throw e=Object.prototype.toString.call(n),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function aa(e){var n=e._init;return n(e._payload)}function ca(e){function n(f,u){if(e){var g=f.deletions;g===null?(f.deletions=[u],f.flags|=16):g.push(u)}}function t(f,u){if(!e)return null;for(;u!==null;)n(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function s(f,u){return f=Zn(f,u),f.index=0,f.sibling=null,f}function o(f,u,g){return f.index=g,e?(g=f.alternate,g!==null?(g=g.index,g<u?(f.flags|=2,u):g):(f.flags|=2,u)):(f.flags|=1048576,u)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,u,g,b){return u===null||u.tag!==6?(u=Lo(g,f.mode,b),u.return=f,u):(u=s(u,g),u.return=f,u)}function c(f,u,g,b){var D=g.type;return D===De?y(f,u,g.props.children,b,g.key):u!==null&&(u.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Ee&&aa(D)===u.type)?(b=s(u,g.props),b.ref=fr(f,u,g),b.return=f,b):(b=_i(g.type,g.key,g.props,null,f.mode,b),b.ref=fr(f,u,g),b.return=f,b)}function m(f,u,g,b){return u===null||u.tag!==4||u.stateNode.containerInfo!==g.containerInfo||u.stateNode.implementation!==g.implementation?(u=No(g,f.mode,b),u.return=f,u):(u=s(u,g.children||[]),u.return=f,u)}function y(f,u,g,b,D){return u===null||u.tag!==7?(u=ht(g,f.mode,b,D),u.return=f,u):(u=s(u,g),u.return=f,u)}function w(f,u,g){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Lo(""+u,f.mode,g),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Ve:return g=_i(u.type,u.key,u.props,null,f.mode,g),g.ref=fr(f,null,u),g.return=f,g;case fe:return u=No(u,f.mode,g),u.return=f,u;case Ee:var b=u._init;return w(f,b(u._payload),g)}if($t(u)||T(u))return u=ht(u,f.mode,g,null),u.return=f,u;oi(f,u)}return null}function v(f,u,g,b){var D=u!==null?u.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return D!==null?null:a(f,u,""+g,b);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ve:return g.key===D?c(f,u,g,b):null;case fe:return g.key===D?m(f,u,g,b):null;case Ee:return D=g._init,v(f,u,D(g._payload),b)}if($t(g)||T(g))return D!==null?null:y(f,u,g,b,null);oi(f,g)}return null}function L(f,u,g,b,D){if(typeof b=="string"&&b!==""||typeof b=="number")return f=f.get(g)||null,a(u,f,""+b,D);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ve:return f=f.get(b.key===null?g:b.key)||null,c(u,f,b,D);case fe:return f=f.get(b.key===null?g:b.key)||null,m(u,f,b,D);case Ee:var B=b._init;return L(f,u,g,B(b._payload),D)}if($t(b)||T(b))return f=f.get(g)||null,y(u,f,b,D,null);oi(u,b)}return null}function _(f,u,g,b){for(var D=null,B=null,U=u,q=u=0,_e=null;U!==null&&q<g.length;q++){U.index>q?(_e=U,U=null):_e=U.sibling;var K=v(f,U,g[q],b);if(K===null){U===null&&(U=_e);break}e&&U&&K.alternate===null&&n(f,U),u=o(K,u,q),B===null?D=K:B.sibling=K,B=K,U=_e}if(q===g.length)return t(f,U),pe&&st(f,q),D;if(U===null){for(;q<g.length;q++)U=w(f,g[q],b),U!==null&&(u=o(U,u,q),B===null?D=U:B.sibling=U,B=U);return pe&&st(f,q),D}for(U=r(f,U);q<g.length;q++)_e=L(U,f,q,g[q],b),_e!==null&&(e&&_e.alternate!==null&&U.delete(_e.key===null?q:_e.key),u=o(_e,u,q),B===null?D=_e:B.sibling=_e,B=_e);return e&&U.forEach(function(et){return n(f,et)}),pe&&st(f,q),D}function I(f,u,g,b){var D=T(g);if(typeof D!="function")throw Error(d(150));if(g=D.call(g),g==null)throw Error(d(151));for(var B=D=null,U=u,q=u=0,_e=null,K=g.next();U!==null&&!K.done;q++,K=g.next()){U.index>q?(_e=U,U=null):_e=U.sibling;var et=v(f,U,K.value,b);if(et===null){U===null&&(U=_e);break}e&&U&&et.alternate===null&&n(f,U),u=o(et,u,q),B===null?D=et:B.sibling=et,B=et,U=_e}if(K.done)return t(f,U),pe&&st(f,q),D;if(U===null){for(;!K.done;q++,K=g.next())K=w(f,K.value,b),K!==null&&(u=o(K,u,q),B===null?D=K:B.sibling=K,B=K);return pe&&st(f,q),D}for(U=r(f,U);!K.done;q++,K=g.next())K=L(U,f,q,K.value,b),K!==null&&(e&&K.alternate!==null&&U.delete(K.key===null?q:K.key),u=o(K,u,q),B===null?D=K:B.sibling=K,B=K);return e&&U.forEach(function(Pd){return n(f,Pd)}),pe&&st(f,q),D}function ye(f,u,g,b){if(typeof g=="object"&&g!==null&&g.type===De&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ve:e:{for(var D=g.key,B=u;B!==null;){if(B.key===D){if(D=g.type,D===De){if(B.tag===7){t(f,B.sibling),u=s(B,g.props.children),u.return=f,f=u;break e}}else if(B.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Ee&&aa(D)===B.type){t(f,B.sibling),u=s(B,g.props),u.ref=fr(f,B,g),u.return=f,f=u;break e}t(f,B);break}else n(f,B);B=B.sibling}g.type===De?(u=ht(g.props.children,f.mode,b,g.key),u.return=f,f=u):(b=_i(g.type,g.key,g.props,null,f.mode,b),b.ref=fr(f,u,g),b.return=f,f=b)}return l(f);case fe:e:{for(B=g.key;u!==null;){if(u.key===B)if(u.tag===4&&u.stateNode.containerInfo===g.containerInfo&&u.stateNode.implementation===g.implementation){t(f,u.sibling),u=s(u,g.children||[]),u.return=f,f=u;break e}else{t(f,u);break}else n(f,u);u=u.sibling}u=No(g,f.mode,b),u.return=f,f=u}return l(f);case Ee:return B=g._init,ye(f,u,B(g._payload),b)}if($t(g))return _(f,u,g,b);if(T(g))return I(f,u,g,b);oi(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,u!==null&&u.tag===6?(t(f,u.sibling),u=s(u,g),u.return=f,f=u):(t(f,u),u=Lo(g,f.mode,b),u.return=f,f=u),l(f)):t(f,u)}return ye}var Dt=ca(!0),ua=ca(!1),li=$n(null),ai=null,Mt=null,Us=null;function Ps(){Us=Mt=ai=null}function qs(e){var n=li.current;ae(li),e._currentValue=n}function Rs(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Tt(e,n){ai=e,Us=Mt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Ke=!0),e.firstContext=null)}function un(e){var n=e._currentValue;if(Us!==e)if(e={context:e,memoizedValue:n,next:null},Mt===null){if(ai===null)throw Error(d(308));Mt=e,ai.dependencies={lanes:0,firstContext:e}}else Mt=Mt.next=e;return n}var ot=null;function Os(e){ot===null?ot=[e]:ot.push(e)}function da(e,n,t,r){var s=n.interleaved;return s===null?(t.next=t,Os(n)):(t.next=s.next,s.next=t),n.interleaved=t,Dn(e,r)}function Dn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Vn=!1;function zs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pa(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Yn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(G&2)!==0){var s=r.pending;return s===null?n.next=n:(n.next=s.next,s.next=n),r.pending=n,Dn(e,t)}return s=r.interleaved,s===null?(n.next=n,Os(r)):(n.next=s.next,s.next=n),r.interleaved=n,Dn(e,t)}function ci(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ns(e,t)}}function ha(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var s=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?s=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?s=o=n:o=o.next=n}else s=o=n;t={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ui(e,n,t,r){var s=e.updateQueue;Vn=!1;var o=s.firstBaseUpdate,l=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var c=a,m=c.next;c.next=null,l===null?o=m:l.next=m,l=c;var y=e.alternate;y!==null&&(y=y.updateQueue,a=y.lastBaseUpdate,a!==l&&(a===null?y.firstBaseUpdate=m:a.next=m,y.lastBaseUpdate=c))}if(o!==null){var w=s.baseState;l=0,y=m=c=null,a=o;do{var v=a.lane,L=a.eventTime;if((r&v)===v){y!==null&&(y=y.next={eventTime:L,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=e,I=a;switch(v=n,L=t,I.tag){case 1:if(_=I.payload,typeof _=="function"){w=_.call(L,w,v);break e}w=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=I.payload,v=typeof _=="function"?_.call(L,w,v):_,v==null)break e;w=S({},w,v);break e;case 2:Vn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,v=s.effects,v===null?s.effects=[a]:v.push(a))}else L={eventTime:L,lane:v,tag:a.tag,payload:a.payload,callback:a.callback,next:null},y===null?(m=y=L,c=w):y=y.next=L,l|=v;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;v=a,a=v.next,v.next=null,s.lastBaseUpdate=v,s.shared.pending=null}}while(!0);if(y===null&&(c=w),s.baseState=c,s.firstBaseUpdate=m,s.lastBaseUpdate=y,n=s.shared.interleaved,n!==null){s=n;do l|=s.lane,s=s.next;while(s!==n)}else o===null&&(s.shared.lanes=0);ct|=l,e.lanes=l,e.memoizedState=w}}function fa(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],s=r.callback;if(s!==null){if(r.callback=null,r=t,typeof s!="function")throw Error(d(191,s));s.call(r)}}}var gr={},Cn=$n(gr),mr=$n(gr),xr=$n(gr);function lt(e){if(e===gr)throw Error(d(174));return e}function Fs(e,n){switch(ie(xr,n),ie(mr,e),ie(Cn,gr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:$i(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=$i(n,e)}ae(Cn),ie(Cn,n)}function Bt(){ae(Cn),ae(mr),ae(xr)}function ga(e){lt(xr.current);var n=lt(Cn.current),t=$i(n,e.type);n!==t&&(ie(mr,e),ie(Cn,t))}function $s(e){mr.current===e&&(ae(Cn),ae(mr))}var ge=$n(0);function di(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Hs=[];function Ws(){for(var e=0;e<Hs.length;e++)Hs[e]._workInProgressVersionPrimary=null;Hs.length=0}var pi=oe.ReactCurrentDispatcher,Vs=oe.ReactCurrentBatchConfig,at=0,me=null,je=null,Ne=null,hi=!1,vr=!1,yr=0,sd=0;function qe(){throw Error(d(321))}function Ys(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!mn(e[t],n[t]))return!1;return!0}function Gs(e,n,t,r,s,o){if(at=o,me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,pi.current=e===null||e.memoizedState===null?cd:ud,e=t(r,s),vr){o=0;do{if(vr=!1,yr=0,25<=o)throw Error(d(301));o+=1,Ne=je=null,n.updateQueue=null,pi.current=dd,e=t(r,s)}while(vr)}if(pi.current=mi,n=je!==null&&je.next!==null,at=0,Ne=je=me=null,hi=!1,n)throw Error(d(300));return e}function Ks(){var e=yr!==0;return yr=0,e}function En(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?me.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function dn(){if(je===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var n=Ne===null?me.memoizedState:Ne.next;if(n!==null)Ne=n,je=e;else{if(e===null)throw Error(d(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ne===null?me.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function wr(e,n){return typeof n=="function"?n(e):n}function Qs(e){var n=dn(),t=n.queue;if(t===null)throw Error(d(311));t.lastRenderedReducer=e;var r=je,s=r.baseQueue,o=t.pending;if(o!==null){if(s!==null){var l=s.next;s.next=o.next,o.next=l}r.baseQueue=s=o,t.pending=null}if(s!==null){o=s.next,r=r.baseState;var a=l=null,c=null,m=o;do{var y=m.lane;if((at&y)===y)c!==null&&(c=c.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),r=m.hasEagerState?m.eagerState:e(r,m.action);else{var w={lane:y,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};c===null?(a=c=w,l=r):c=c.next=w,me.lanes|=y,ct|=y}m=m.next}while(m!==null&&m!==o);c===null?l=r:c.next=a,mn(r,n.memoizedState)||(Ke=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=c,t.lastRenderedState=r}if(e=t.interleaved,e!==null){s=e;do o=s.lane,me.lanes|=o,ct|=o,s=s.next;while(s!==e)}else s===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Xs(e){var n=dn(),t=n.queue;if(t===null)throw Error(d(311));t.lastRenderedReducer=e;var r=t.dispatch,s=t.pending,o=n.memoizedState;if(s!==null){t.pending=null;var l=s=s.next;do o=e(o,l.action),l=l.next;while(l!==s);mn(o,n.memoizedState)||(Ke=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function ma(){}function xa(e,n){var t=me,r=dn(),s=n(),o=!mn(r.memoizedState,s);if(o&&(r.memoizedState=s,Ke=!0),r=r.queue,Js(wa.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||Ne!==null&&Ne.memoizedState.tag&1){if(t.flags|=2048,br(9,ya.bind(null,t,r,s,n),void 0,null),Ae===null)throw Error(d(349));(at&30)!==0||va(t,n,s)}return s}function va(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=me.updateQueue,n===null?(n={lastEffect:null,stores:null},me.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ya(e,n,t,r){n.value=t,n.getSnapshot=r,ba(n)&&ka(e)}function wa(e,n,t){return t(function(){ba(n)&&ka(e)})}function ba(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!mn(e,t)}catch{return!0}}function ka(e){var n=Dn(e,1);n!==null&&bn(n,e,1,-1)}function Sa(e){var n=En();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wr,lastRenderedState:e},n.queue=e,e=e.dispatch=ad.bind(null,me,e),[n.memoizedState,e]}function br(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=me.updateQueue,n===null?(n={lastEffect:null,stores:null},me.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Ca(){return dn().memoizedState}function fi(e,n,t,r){var s=En();me.flags|=e,s.memoizedState=br(1|n,t,void 0,r===void 0?null:r)}function gi(e,n,t,r){var s=dn();r=r===void 0?null:r;var o=void 0;if(je!==null){var l=je.memoizedState;if(o=l.destroy,r!==null&&Ys(r,l.deps)){s.memoizedState=br(n,t,o,r);return}}me.flags|=e,s.memoizedState=br(1|n,t,o,r)}function Ea(e,n){return fi(8390656,8,e,n)}function Js(e,n){return gi(2048,8,e,n)}function ja(e,n){return gi(4,2,e,n)}function La(e,n){return gi(4,4,e,n)}function Na(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Aa(e,n,t){return t=t!=null?t.concat([e]):null,gi(4,4,Na.bind(null,n,e),t)}function Zs(){}function _a(e,n){var t=dn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ys(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Ia(e,n){var t=dn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ys(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Da(e,n,t){return(at&21)===0?(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=t):(mn(t,n)||(t=al(),me.lanes|=t,ct|=t,e.baseState=!0),n)}function od(e,n){var t=X;X=t!==0&&4>t?t:4,e(!0);var r=Vs.transition;Vs.transition={};try{e(!1),n()}finally{X=t,Vs.transition=r}}function Ma(){return dn().memoizedState}function ld(e,n,t){var r=Xn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Ta(e))Ba(n,t);else if(t=da(e,n,t,r),t!==null){var s=He();bn(t,e,r,s),Ua(t,n,r)}}function ad(e,n,t){var r=Xn(e),s={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ta(e))Ba(n,s);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var l=n.lastRenderedState,a=o(l,t);if(s.hasEagerState=!0,s.eagerState=a,mn(a,l)){var c=n.interleaved;c===null?(s.next=s,Os(n)):(s.next=c.next,c.next=s),n.interleaved=s;return}}catch{}finally{}t=da(e,n,s,r),t!==null&&(s=He(),bn(t,e,r,s),Ua(t,n,r))}}function Ta(e){var n=e.alternate;return e===me||n!==null&&n===me}function Ba(e,n){vr=hi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Ua(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ns(e,t)}}var mi={readContext:un,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},cd={readContext:un,useCallback:function(e,n){return En().memoizedState=[e,n===void 0?null:n],e},useContext:un,useEffect:Ea,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,fi(4194308,4,Na.bind(null,n,e),t)},useLayoutEffect:function(e,n){return fi(4194308,4,e,n)},useInsertionEffect:function(e,n){return fi(4,2,e,n)},useMemo:function(e,n){var t=En();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=En();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=ld.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var n=En();return e={current:e},n.memoizedState=e},useState:Sa,useDebugValue:Zs,useDeferredValue:function(e){return En().memoizedState=e},useTransition:function(){var e=Sa(!1),n=e[0];return e=od.bind(null,e[1]),En().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=me,s=En();if(pe){if(t===void 0)throw Error(d(407));t=t()}else{if(t=n(),Ae===null)throw Error(d(349));(at&30)!==0||va(r,n,t)}s.memoizedState=t;var o={value:t,getSnapshot:n};return s.queue=o,Ea(wa.bind(null,r,o,e),[e]),r.flags|=2048,br(9,ya.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=En(),n=Ae.identifierPrefix;if(pe){var t=In,r=_n;t=(r&~(1<<32-gn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=yr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=sd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},ud={readContext:un,useCallback:_a,useContext:un,useEffect:Js,useImperativeHandle:Aa,useInsertionEffect:ja,useLayoutEffect:La,useMemo:Ia,useReducer:Qs,useRef:Ca,useState:function(){return Qs(wr)},useDebugValue:Zs,useDeferredValue:function(e){var n=dn();return Da(n,je.memoizedState,e)},useTransition:function(){var e=Qs(wr)[0],n=dn().memoizedState;return[e,n]},useMutableSource:ma,useSyncExternalStore:xa,useId:Ma,unstable_isNewReconciler:!1},dd={readContext:un,useCallback:_a,useContext:un,useEffect:Js,useImperativeHandle:Aa,useInsertionEffect:ja,useLayoutEffect:La,useMemo:Ia,useReducer:Xs,useRef:Ca,useState:function(){return Xs(wr)},useDebugValue:Zs,useDeferredValue:function(e){var n=dn();return je===null?n.memoizedState=e:Da(n,je.memoizedState,e)},useTransition:function(){var e=Xs(wr)[0],n=dn().memoizedState;return[e,n]},useMutableSource:ma,useSyncExternalStore:xa,useId:Ma,unstable_isNewReconciler:!1};function vn(e,n){if(e&&e.defaultProps){n=S({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function eo(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:S({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var xi={isMounted:function(e){return(e=e._reactInternals)?nt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=He(),s=Xn(e),o=Mn(r,s);o.payload=n,t!=null&&(o.callback=t),n=Yn(e,o,s),n!==null&&(bn(n,e,s,r),ci(n,e,s))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=He(),s=Xn(e),o=Mn(r,s);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=Yn(e,o,s),n!==null&&(bn(n,e,s,r),ci(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=He(),r=Xn(e),s=Mn(t,r);s.tag=2,n!=null&&(s.callback=n),n=Yn(e,s,r),n!==null&&(bn(n,e,r,t),ci(n,e,r))}};function Pa(e,n,t,r,s,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):n.prototype&&n.prototype.isPureReactComponent?!lr(t,r)||!lr(s,o):!0}function qa(e,n,t){var r=!1,s=Hn,o=n.contextType;return typeof o=="object"&&o!==null?o=un(o):(s=Ge(n)?rt:Pe.current,r=n.contextTypes,o=(r=r!=null)?Nt(e,s):Hn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=xi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=o),n}function Ra(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&xi.enqueueReplaceState(n,n.state,null)}function no(e,n,t,r){var s=e.stateNode;s.props=t,s.state=e.memoizedState,s.refs={},zs(e);var o=n.contextType;typeof o=="object"&&o!==null?s.context=un(o):(o=Ge(n)?rt:Pe.current,s.context=Nt(e,o)),s.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(eo(e,n,o,t),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(n=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),n!==s.state&&xi.enqueueReplaceState(s,s.state,null),ui(e,t,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Ut(e,n){try{var t="",r=n;do t+=W(r),r=r.return;while(r);var s=t}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:s,digest:null}}function to(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ro(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var pd=typeof WeakMap=="function"?WeakMap:Map;function Oa(e,n,t){t=Mn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Ci||(Ci=!0,yo=r),ro(e,n)},t}function za(e,n,t){t=Mn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=n.value;t.payload=function(){return r(s)},t.callback=function(){ro(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){ro(e,n),typeof r!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function Fa(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new pd;var s=new Set;r.set(n,s)}else s=r.get(n),s===void 0&&(s=new Set,r.set(n,s));s.has(t)||(s.add(t),e=jd.bind(null,e,n,t),n.then(e,e))}function $a(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ha(e,n,t,r,s){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Mn(-1,1),n.tag=2,Yn(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var hd=oe.ReactCurrentOwner,Ke=!1;function $e(e,n,t,r){n.child=e===null?ua(n,null,t,r):Dt(n,e.child,t,r)}function Wa(e,n,t,r,s){t=t.render;var o=n.ref;return Tt(n,s),r=Gs(e,n,t,r,o,s),t=Ks(),e!==null&&!Ke?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,Tn(e,n,s)):(pe&&t&&Is(n),n.flags|=1,$e(e,n,r,s),n.child)}function Va(e,n,t,r,s){if(e===null){var o=t.type;return typeof o=="function"&&!jo(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Ya(e,n,o,r,s)):(e=_i(t.type,null,r,n,n.mode,s),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,(e.lanes&s)===0){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:lr,t(l,r)&&e.ref===n.ref)return Tn(e,n,s)}return n.flags|=1,e=Zn(o,r),e.ref=n.ref,e.return=n,n.child=e}function Ya(e,n,t,r,s){if(e!==null){var o=e.memoizedProps;if(lr(o,r)&&e.ref===n.ref)if(Ke=!1,n.pendingProps=r=o,(e.lanes&s)!==0)(e.flags&131072)!==0&&(Ke=!0);else return n.lanes=e.lanes,Tn(e,n,s)}return io(e,n,t,r,s)}function Ga(e,n,t){var r=n.pendingProps,s=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(qt,on),on|=t;else{if((t&1073741824)===0)return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ie(qt,on),on|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,ie(qt,on),on|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,ie(qt,on),on|=r;return $e(e,n,s,t),n.child}function Ka(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function io(e,n,t,r,s){var o=Ge(t)?rt:Pe.current;return o=Nt(n,o),Tt(n,s),t=Gs(e,n,t,r,o,s),r=Ks(),e!==null&&!Ke?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,Tn(e,n,s)):(pe&&r&&Is(n),n.flags|=1,$e(e,n,t,s),n.child)}function Qa(e,n,t,r,s){if(Ge(t)){var o=!0;ni(n)}else o=!1;if(Tt(n,s),n.stateNode===null)yi(e,n),qa(n,t,r),no(n,t,r,s),r=!0;else if(e===null){var l=n.stateNode,a=n.memoizedProps;l.props=a;var c=l.context,m=t.contextType;typeof m=="object"&&m!==null?m=un(m):(m=Ge(t)?rt:Pe.current,m=Nt(n,m));var y=t.getDerivedStateFromProps,w=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function";w||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||c!==m)&&Ra(n,l,r,m),Vn=!1;var v=n.memoizedState;l.state=v,ui(n,r,l,s),c=n.memoizedState,a!==r||v!==c||Ye.current||Vn?(typeof y=="function"&&(eo(n,t,y,r),c=n.memoizedState),(a=Vn||Pa(n,t,a,r,v,c,m))?(w||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=c),l.props=r,l.state=c,l.context=m,r=a):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,pa(e,n),a=n.memoizedProps,m=n.type===n.elementType?a:vn(n.type,a),l.props=m,w=n.pendingProps,v=l.context,c=t.contextType,typeof c=="object"&&c!==null?c=un(c):(c=Ge(t)?rt:Pe.current,c=Nt(n,c));var L=t.getDerivedStateFromProps;(y=typeof L=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==w||v!==c)&&Ra(n,l,r,c),Vn=!1,v=n.memoizedState,l.state=v,ui(n,r,l,s);var _=n.memoizedState;a!==w||v!==_||Ye.current||Vn?(typeof L=="function"&&(eo(n,t,L,r),_=n.memoizedState),(m=Vn||Pa(n,t,m,r,v,_,c)||!1)?(y||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,_,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,_,c)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=_),l.props=r,l.state=_,l.context=c,r=m):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),r=!1)}return so(e,n,t,r,o,s)}function so(e,n,t,r,s,o){Ka(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return s&&na(n,t,!1),Tn(e,n,o);r=n.stateNode,hd.current=n;var a=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=Dt(n,e.child,null,o),n.child=Dt(n,null,a,o)):$e(e,n,a,o),n.memoizedState=r.state,s&&na(n,t,!0),n.child}function Xa(e){var n=e.stateNode;n.pendingContext?Zl(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Zl(e,n.context,!1),Fs(e,n.containerInfo)}function Ja(e,n,t,r,s){return It(),Bs(s),n.flags|=256,$e(e,n,t,r),n.child}var oo={dehydrated:null,treeContext:null,retryLane:0};function lo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Za(e,n,t){var r=n.pendingProps,s=ge.current,o=!1,l=(n.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(s&2)!==0),a?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),ie(ge,s&1),e===null)return Ts(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(l=r.children,e=r.fallback,o?(r=n.mode,o=n.child,l={mode:"hidden",children:l},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Ii(l,r,0,null),e=ht(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=lo(t),n.memoizedState=oo,e):ao(n,l));if(s=e.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return fd(e,n,l,r,a,s,t);if(o){o=r.fallback,l=n.mode,s=e.child,a=s.sibling;var c={mode:"hidden",children:r.children};return(l&1)===0&&n.child!==s?(r=n.child,r.childLanes=0,r.pendingProps=c,n.deletions=null):(r=Zn(s,c),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?o=Zn(a,o):(o=ht(o,l,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,l=e.child.memoizedState,l=l===null?lo(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~t,n.memoizedState=oo,r}return o=e.child,e=o.sibling,r=Zn(o,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ao(e,n){return n=Ii({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function vi(e,n,t,r){return r!==null&&Bs(r),Dt(n,e.child,null,t),e=ao(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function fd(e,n,t,r,s,o,l){if(t)return n.flags&256?(n.flags&=-257,r=to(Error(d(422))),vi(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,s=n.mode,r=Ii({mode:"visible",children:r.children},s,0,null),o=ht(o,s,l,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,(n.mode&1)!==0&&Dt(n,e.child,null,l),n.child.memoizedState=lo(l),n.memoizedState=oo,o);if((n.mode&1)===0)return vi(e,n,l,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(d(419)),r=to(o,r,void 0),vi(e,n,l,r)}if(a=(l&e.childLanes)!==0,Ke||a){if(r=Ae,r!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(r.suspendedLanes|l))!==0?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,Dn(e,s),bn(r,e,s,-1))}return Eo(),r=to(Error(d(421))),vi(e,n,l,r)}return s.data==="$?"?(n.flags|=128,n.child=e.child,n=Ld.bind(null,e),s._reactRetry=n,null):(e=o.treeContext,sn=Fn(s.nextSibling),rn=n,pe=!0,xn=null,e!==null&&(an[cn++]=_n,an[cn++]=In,an[cn++]=it,_n=e.id,In=e.overflow,it=n),n=ao(n,r.children),n.flags|=4096,n)}function ec(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Rs(e.return,n,t)}function co(e,n,t,r,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:s}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=s)}function nc(e,n,t){var r=n.pendingProps,s=r.revealOrder,o=r.tail;if($e(e,n,r.children,t),r=ge.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ec(e,t,n);else if(e.tag===19)ec(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(ge,r),(n.mode&1)===0)n.memoizedState=null;else switch(s){case"forwards":for(t=n.child,s=null;t!==null;)e=t.alternate,e!==null&&di(e)===null&&(s=t),t=t.sibling;t=s,t===null?(s=n.child,n.child=null):(s=t.sibling,t.sibling=null),co(n,!1,s,t,o);break;case"backwards":for(t=null,s=n.child,n.child=null;s!==null;){if(e=s.alternate,e!==null&&di(e)===null){n.child=s;break}e=s.sibling,s.sibling=t,t=s,s=e}co(n,!0,t,null,o);break;case"together":co(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function yi(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Tn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ct|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(d(153));if(n.child!==null){for(e=n.child,t=Zn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Zn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function gd(e,n,t){switch(n.tag){case 3:Xa(n),It();break;case 5:ga(n);break;case 1:Ge(n.type)&&ni(n);break;case 4:Fs(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,s=n.memoizedProps.value;ie(li,r._currentValue),r._currentValue=s;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ie(ge,ge.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?Za(e,n,t):(ie(ge,ge.current&1),e=Tn(e,n,t),e!==null?e.sibling:null);ie(ge,ge.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return nc(e,n,t);n.flags|=128}if(s=n.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ie(ge,ge.current),r)break;return null;case 22:case 23:return n.lanes=0,Ga(e,n,t)}return Tn(e,n,t)}var tc,uo,rc,ic;tc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},uo=function(){},rc=function(e,n,t,r){var s=e.memoizedProps;if(s!==r){e=n.stateNode,lt(Cn.current);var o=null;switch(t){case"input":s=zt(e,s),r=zt(e,r),o=[];break;case"select":s=S({},s,{value:void 0}),r=S({},r,{value:void 0}),o=[];break;case"textarea":s=Fi(e,s),r=Fi(e,r),o=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Jr)}Hi(t,r);var l;t=null;for(m in s)if(!r.hasOwnProperty(m)&&s.hasOwnProperty(m)&&s[m]!=null)if(m==="style"){var a=s[m];for(l in a)a.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(k.hasOwnProperty(m)?o||(o=[]):(o=o||[]).push(m,null));for(m in r){var c=r[m];if(a=s!=null?s[m]:void 0,r.hasOwnProperty(m)&&c!==a&&(c!=null||a!=null))if(m==="style")if(a){for(l in a)!a.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in c)c.hasOwnProperty(l)&&a[l]!==c[l]&&(t||(t={}),t[l]=c[l])}else t||(o||(o=[]),o.push(m,t)),t=c;else m==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(o=o||[]).push(m,c)):m==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(m,""+c):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(k.hasOwnProperty(m)?(c!=null&&m==="onScroll"&&le("scroll",e),o||a===c||(o=[])):(o=o||[]).push(m,c))}t&&(o=o||[]).push("style",t);var m=o;(n.updateQueue=m)&&(n.flags|=4)}},ic=function(e,n,t,r){t!==r&&(n.flags|=4)};function kr(e,n){if(!pe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Re(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var s=e.child;s!==null;)t|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)t|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function md(e,n,t){var r=n.pendingProps;switch(Ds(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(n),null;case 1:return Ge(n.type)&&ei(),Re(n),null;case 3:return r=n.stateNode,Bt(),ae(Ye),ae(Pe),Ws(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(si(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,xn!==null&&(ko(xn),xn=null))),uo(e,n),Re(n),null;case 5:$s(n);var s=lt(xr.current);if(t=n.type,e!==null&&n.stateNode!=null)rc(e,n,t,r,s),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(d(166));return Re(n),null}if(e=lt(Cn.current),si(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Sn]=n,r[pr]=o,e=(n.mode&1)!==0,t){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(s=0;s<cr.length;s++)le(cr[s],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":H(r,o),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},le("invalid",r);break;case"textarea":zo(r,o),le("invalid",r)}Hi(t,o),s=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Xr(r.textContent,a,e),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Xr(r.textContent,a,e),s=["children",""+a]):k.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&le("scroll",r)}switch(t){case"input":ft(r),nn(r,o,!0);break;case"textarea":ft(r),$o(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Jr)}r=s,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ho(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[Sn]=n,e[pr]=r,tc(e,n,!1,!1),n.stateNode=e;e:{switch(l=Wi(t,r),t){case"dialog":le("cancel",e),le("close",e),s=r;break;case"iframe":case"object":case"embed":le("load",e),s=r;break;case"video":case"audio":for(s=0;s<cr.length;s++)le(cr[s],e);s=r;break;case"source":le("error",e),s=r;break;case"img":case"image":case"link":le("error",e),le("load",e),s=r;break;case"details":le("toggle",e),s=r;break;case"input":H(e,r),s=zt(e,r),le("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=S({},r,{value:void 0}),le("invalid",e);break;case"textarea":zo(e,r),s=Fi(e,r),le("invalid",e);break;default:s=r}Hi(t,s),a=s;for(o in a)if(a.hasOwnProperty(o)){var c=a[o];o==="style"?Yo(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Wo(e,c)):o==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&Ht(e,c):typeof c=="number"&&Ht(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(k.hasOwnProperty(o)?c!=null&&o==="onScroll"&&le("scroll",e):c!=null&&be(e,o,c,l))}switch(t){case"input":ft(e),nn(e,r,!1);break;case"textarea":ft(e),$o(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Q(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?mt(e,!!r.multiple,o,!1):r.defaultValue!=null&&mt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Jr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Re(n),null;case 6:if(e&&n.stateNode!=null)ic(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(d(166));if(t=lt(xr.current),lt(Cn.current),si(n)){if(r=n.stateNode,t=n.memoizedProps,r[Sn]=n,(o=r.nodeValue!==t)&&(e=rn,e!==null))switch(e.tag){case 3:Xr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xr(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Sn]=n,n.stateNode=r}return Re(n),null;case 13:if(ae(ge),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pe&&sn!==null&&(n.mode&1)!==0&&(n.flags&128)===0)la(),It(),n.flags|=98560,o=!1;else if(o=si(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(d(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(d(317));o[Sn]=n}else It(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Re(n),o=!1}else xn!==null&&(ko(xn),xn=null),o=!0;if(!o)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(ge.current&1)!==0?Le===0&&(Le=3):Eo())),n.updateQueue!==null&&(n.flags|=4),Re(n),null);case 4:return Bt(),uo(e,n),e===null&&ur(n.stateNode.containerInfo),Re(n),null;case 10:return qs(n.type._context),Re(n),null;case 17:return Ge(n.type)&&ei(),Re(n),null;case 19:if(ae(ge),o=n.memoizedState,o===null)return Re(n),null;if(r=(n.flags&128)!==0,l=o.rendering,l===null)if(r)kr(o,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(l=di(e),l!==null){for(n.flags|=128,kr(o,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ie(ge,ge.current&1|2),n.child}e=e.sibling}o.tail!==null&&ve()>Rt&&(n.flags|=128,r=!0,kr(o,!1),n.lanes=4194304)}else{if(!r)if(e=di(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),kr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!pe)return Re(n),null}else 2*ve()-o.renderingStartTime>Rt&&t!==1073741824&&(n.flags|=128,r=!0,kr(o,!1),n.lanes=4194304);o.isBackwards?(l.sibling=n.child,n.child=l):(t=o.last,t!==null?t.sibling=l:n.child=l,o.last=l)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=ve(),n.sibling=null,t=ge.current,ie(ge,r?t&1|2:t&1),n):(Re(n),null);case 22:case 23:return Co(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?(on&1073741824)!==0&&(Re(n),n.subtreeFlags&6&&(n.flags|=8192)):Re(n),null;case 24:return null;case 25:return null}throw Error(d(156,n.tag))}function xd(e,n){switch(Ds(n),n.tag){case 1:return Ge(n.type)&&ei(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Bt(),ae(Ye),ae(Pe),Ws(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return $s(n),null;case 13:if(ae(ge),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(d(340));It()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ae(ge),null;case 4:return Bt(),null;case 10:return qs(n.type._context),null;case 22:case 23:return Co(),null;case 24:return null;default:return null}}var wi=!1,Oe=!1,vd=typeof WeakSet=="function"?WeakSet:Set,A=null;function Pt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){xe(e,n,r)}else t.current=null}function po(e,n,t){try{t()}catch(r){xe(e,n,r)}}var sc=!1;function yd(e,n){if(Ss=Or,e=Pl(),gs(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var s=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var l=0,a=-1,c=-1,m=0,y=0,w=e,v=null;n:for(;;){for(var L;w!==t||s!==0&&w.nodeType!==3||(a=l+s),w!==o||r!==0&&w.nodeType!==3||(c=l+r),w.nodeType===3&&(l+=w.nodeValue.length),(L=w.firstChild)!==null;)v=w,w=L;for(;;){if(w===e)break n;if(v===t&&++m===s&&(a=l),v===o&&++y===r&&(c=l),(L=w.nextSibling)!==null)break;w=v,v=w.parentNode}w=L}t=a===-1||c===-1?null:{start:a,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(Cs={focusedElem:e,selectionRange:t},Or=!1,A=n;A!==null;)if(n=A,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,A=e;else for(;A!==null;){n=A;try{var _=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var I=_.memoizedProps,ye=_.memoizedState,f=n.stateNode,u=f.getSnapshotBeforeUpdate(n.elementType===n.type?I:vn(n.type,I),ye);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(d(163))}}catch(b){xe(n,n.return,b)}if(e=n.sibling,e!==null){e.return=n.return,A=e;break}A=n.return}return _=sc,sc=!1,_}function Sr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var o=s.destroy;s.destroy=void 0,o!==void 0&&po(n,t,o)}s=s.next}while(s!==r)}}function bi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ho(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function oc(e){var n=e.alternate;n!==null&&(e.alternate=null,oc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Sn],delete n[pr],delete n[Ns],delete n[nd],delete n[td])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lc(e){return e.tag===5||e.tag===3||e.tag===4}function ac(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Jr));else if(r!==4&&(e=e.child,e!==null))for(fo(e,n,t),e=e.sibling;e!==null;)fo(e,n,t),e=e.sibling}function go(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(go(e,n,t),e=e.sibling;e!==null;)go(e,n,t),e=e.sibling}var Te=null,yn=!1;function Gn(e,n,t){for(t=t.child;t!==null;)cc(e,n,t),t=t.sibling}function cc(e,n,t){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(Tr,t)}catch{}switch(t.tag){case 5:Oe||Pt(t,n);case 6:var r=Te,s=yn;Te=null,Gn(e,n,t),Te=r,yn=s,Te!==null&&(yn?(e=Te,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Te.removeChild(t.stateNode));break;case 18:Te!==null&&(yn?(e=Te,t=t.stateNode,e.nodeType===8?Ls(e.parentNode,t):e.nodeType===1&&Ls(e,t),nr(e)):Ls(Te,t.stateNode));break;case 4:r=Te,s=yn,Te=t.stateNode.containerInfo,yn=!0,Gn(e,n,t),Te=r,yn=s;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var o=s,l=o.destroy;o=o.tag,l!==void 0&&((o&2)!==0||(o&4)!==0)&&po(t,n,l),s=s.next}while(s!==r)}Gn(e,n,t);break;case 1:if(!Oe&&(Pt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){xe(t,n,a)}Gn(e,n,t);break;case 21:Gn(e,n,t);break;case 22:t.mode&1?(Oe=(r=Oe)||t.memoizedState!==null,Gn(e,n,t),Oe=r):Gn(e,n,t);break;default:Gn(e,n,t)}}function uc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new vd),n.forEach(function(r){var s=Nd.bind(null,e,r);t.has(r)||(t.add(r),r.then(s,s))})}}function wn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var s=t[r];try{var o=e,l=n,a=l;e:for(;a!==null;){switch(a.tag){case 5:Te=a.stateNode,yn=!1;break e;case 3:Te=a.stateNode.containerInfo,yn=!0;break e;case 4:Te=a.stateNode.containerInfo,yn=!0;break e}a=a.return}if(Te===null)throw Error(d(160));cc(o,l,s),Te=null,yn=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(m){xe(s,n,m)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)dc(n,e),n=n.sibling}function dc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wn(n,e),jn(e),r&4){try{Sr(3,e,e.return),bi(3,e)}catch(I){xe(e,e.return,I)}try{Sr(5,e,e.return)}catch(I){xe(e,e.return,I)}}break;case 1:wn(n,e),jn(e),r&512&&t!==null&&Pt(t,t.return);break;case 5:if(wn(n,e),jn(e),r&512&&t!==null&&Pt(t,t.return),e.flags&32){var s=e.stateNode;try{Ht(s,"")}catch(I){xe(e,e.return,I)}}if(r&4&&(s=e.stateNode,s!=null)){var o=e.memoizedProps,l=t!==null?t.memoizedProps:o,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&de(s,o),Wi(a,l);var m=Wi(a,o);for(l=0;l<c.length;l+=2){var y=c[l],w=c[l+1];y==="style"?Yo(s,w):y==="dangerouslySetInnerHTML"?Wo(s,w):y==="children"?Ht(s,w):be(s,y,w,m)}switch(a){case"input":F(s,o);break;case"textarea":Fo(s,o);break;case"select":var v=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var L=o.value;L!=null?mt(s,!!o.multiple,L,!1):v!==!!o.multiple&&(o.defaultValue!=null?mt(s,!!o.multiple,o.defaultValue,!0):mt(s,!!o.multiple,o.multiple?[]:"",!1))}s[pr]=o}catch(I){xe(e,e.return,I)}}break;case 6:if(wn(n,e),jn(e),r&4){if(e.stateNode===null)throw Error(d(162));s=e.stateNode,o=e.memoizedProps;try{s.nodeValue=o}catch(I){xe(e,e.return,I)}}break;case 3:if(wn(n,e),jn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{nr(n.containerInfo)}catch(I){xe(e,e.return,I)}break;case 4:wn(n,e),jn(e);break;case 13:wn(n,e),jn(e),s=e.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(vo=ve())),r&4&&uc(e);break;case 22:if(y=t!==null&&t.memoizedState!==null,e.mode&1?(Oe=(m=Oe)||y,wn(n,e),Oe=m):wn(n,e),jn(e),r&8192){if(m=e.memoizedState!==null,(e.stateNode.isHidden=m)&&!y&&(e.mode&1)!==0)for(A=e,y=e.child;y!==null;){for(w=A=y;A!==null;){switch(v=A,L=v.child,v.tag){case 0:case 11:case 14:case 15:Sr(4,v,v.return);break;case 1:Pt(v,v.return);var _=v.stateNode;if(typeof _.componentWillUnmount=="function"){r=v,t=v.return;try{n=r,_.props=n.memoizedProps,_.state=n.memoizedState,_.componentWillUnmount()}catch(I){xe(r,t,I)}}break;case 5:Pt(v,v.return);break;case 22:if(v.memoizedState!==null){fc(w);continue}}L!==null?(L.return=v,A=L):fc(w)}y=y.sibling}e:for(y=null,w=e;;){if(w.tag===5){if(y===null){y=w;try{s=w.stateNode,m?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=w.stateNode,c=w.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Vo("display",l))}catch(I){xe(e,e.return,I)}}}else if(w.tag===6){if(y===null)try{w.stateNode.nodeValue=m?"":w.memoizedProps}catch(I){xe(e,e.return,I)}}else if((w.tag!==22&&w.tag!==23||w.memoizedState===null||w===e)&&w.child!==null){w.child.return=w,w=w.child;continue}if(w===e)break e;for(;w.sibling===null;){if(w.return===null||w.return===e)break e;y===w&&(y=null),w=w.return}y===w&&(y=null),w.sibling.return=w.return,w=w.sibling}}break;case 19:wn(n,e),jn(e),r&4&&uc(e);break;case 21:break;default:wn(n,e),jn(e)}}function jn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(lc(t)){var r=t;break e}t=t.return}throw Error(d(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Ht(s,""),r.flags&=-33);var o=ac(e);go(e,o,s);break;case 3:case 4:var l=r.stateNode.containerInfo,a=ac(e);fo(e,a,l);break;default:throw Error(d(161))}}catch(c){xe(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function wd(e,n,t){A=e,pc(e)}function pc(e,n,t){for(var r=(e.mode&1)!==0;A!==null;){var s=A,o=s.child;if(s.tag===22&&r){var l=s.memoizedState!==null||wi;if(!l){var a=s.alternate,c=a!==null&&a.memoizedState!==null||Oe;a=wi;var m=Oe;if(wi=l,(Oe=c)&&!m)for(A=s;A!==null;)l=A,c=l.child,l.tag===22&&l.memoizedState!==null?gc(s):c!==null?(c.return=l,A=c):gc(s);for(;o!==null;)A=o,pc(o),o=o.sibling;A=s,wi=a,Oe=m}hc(e)}else(s.subtreeFlags&8772)!==0&&o!==null?(o.return=s,A=o):hc(e)}}function hc(e){for(;A!==null;){var n=A;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Oe||bi(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Oe)if(t===null)r.componentDidMount();else{var s=n.elementType===n.type?t.memoizedProps:vn(n.type,t.memoizedProps);r.componentDidUpdate(s,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&fa(n,o,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}fa(n,l,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var m=n.alternate;if(m!==null){var y=m.memoizedState;if(y!==null){var w=y.dehydrated;w!==null&&nr(w)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(d(163))}Oe||n.flags&512&&ho(n)}catch(v){xe(n,n.return,v)}}if(n===e){A=null;break}if(t=n.sibling,t!==null){t.return=n.return,A=t;break}A=n.return}}function fc(e){for(;A!==null;){var n=A;if(n===e){A=null;break}var t=n.sibling;if(t!==null){t.return=n.return,A=t;break}A=n.return}}function gc(e){for(;A!==null;){var n=A;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{bi(4,n)}catch(c){xe(n,t,c)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var s=n.return;try{r.componentDidMount()}catch(c){xe(n,s,c)}}var o=n.return;try{ho(n)}catch(c){xe(n,o,c)}break;case 5:var l=n.return;try{ho(n)}catch(c){xe(n,l,c)}}}catch(c){xe(n,n.return,c)}if(n===e){A=null;break}var a=n.sibling;if(a!==null){a.return=n.return,A=a;break}A=n.return}}var bd=Math.ceil,ki=oe.ReactCurrentDispatcher,mo=oe.ReactCurrentOwner,pn=oe.ReactCurrentBatchConfig,G=0,Ae=null,ke=null,Be=0,on=0,qt=$n(0),Le=0,Cr=null,ct=0,Si=0,xo=0,Er=null,Qe=null,vo=0,Rt=1/0,Bn=null,Ci=!1,yo=null,Kn=null,Ei=!1,Qn=null,ji=0,jr=0,wo=null,Li=-1,Ni=0;function He(){return(G&6)!==0?ve():Li!==-1?Li:Li=ve()}function Xn(e){return(e.mode&1)===0?1:(G&2)!==0&&Be!==0?Be&-Be:id.transition!==null?(Ni===0&&(Ni=al()),Ni):(e=X,e!==0||(e=window.event,e=e===void 0?16:xl(e.type)),e)}function bn(e,n,t,r){if(50<jr)throw jr=0,wo=null,Error(d(185));Qt(e,t,r),((G&2)===0||e!==Ae)&&(e===Ae&&((G&2)===0&&(Si|=t),Le===4&&Jn(e,Be)),Xe(e,r),t===1&&G===0&&(n.mode&1)===0&&(Rt=ve()+500,ti&&Wn()))}function Xe(e,n){var t=e.callbackNode;iu(e,n);var r=Pr(e,e===Ae?Be:0);if(r===0)t!==null&&sl(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&sl(t),n===1)e.tag===0?rd(xc.bind(null,e)):ta(xc.bind(null,e)),Zu(function(){(G&6)===0&&Wn()}),t=null;else{switch(cl(r)){case 1:t=Ji;break;case 4:t=ol;break;case 16:t=Mr;break;case 536870912:t=ll;break;default:t=Mr}t=Ec(t,mc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function mc(e,n){if(Li=-1,Ni=0,(G&6)!==0)throw Error(d(327));var t=e.callbackNode;if(Ot()&&e.callbackNode!==t)return null;var r=Pr(e,e===Ae?Be:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=Ai(e,r);else{n=r;var s=G;G|=2;var o=yc();(Ae!==e||Be!==n)&&(Bn=null,Rt=ve()+500,dt(e,n));do try{Cd();break}catch(a){vc(e,a)}while(!0);Ps(),ki.current=o,G=s,ke!==null?n=0:(Ae=null,Be=0,n=Le)}if(n!==0){if(n===2&&(s=Zi(e),s!==0&&(r=s,n=bo(e,s))),n===1)throw t=Cr,dt(e,0),Jn(e,r),Xe(e,ve()),t;if(n===6)Jn(e,r);else{if(s=e.current.alternate,(r&30)===0&&!kd(s)&&(n=Ai(e,r),n===2&&(o=Zi(e),o!==0&&(r=o,n=bo(e,o))),n===1))throw t=Cr,dt(e,0),Jn(e,r),Xe(e,ve()),t;switch(e.finishedWork=s,e.finishedLanes=r,n){case 0:case 1:throw Error(d(345));case 2:pt(e,Qe,Bn);break;case 3:if(Jn(e,r),(r&130023424)===r&&(n=vo+500-ve(),10<n)){if(Pr(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){He(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=js(pt.bind(null,e,Qe,Bn),n);break}pt(e,Qe,Bn);break;case 4:if(Jn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,s=-1;0<r;){var l=31-gn(r);o=1<<l,l=n[l],l>s&&(s=l),r&=~o}if(r=s,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bd(r/1960))-r,10<r){e.timeoutHandle=js(pt.bind(null,e,Qe,Bn),r);break}pt(e,Qe,Bn);break;case 5:pt(e,Qe,Bn);break;default:throw Error(d(329))}}}return Xe(e,ve()),e.callbackNode===t?mc.bind(null,e):null}function bo(e,n){var t=Er;return e.current.memoizedState.isDehydrated&&(dt(e,n).flags|=256),e=Ai(e,n),e!==2&&(n=Qe,Qe=t,n!==null&&ko(n)),e}function ko(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function kd(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var s=t[r],o=s.getSnapshot;s=s.value;try{if(!mn(o(),s))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Jn(e,n){for(n&=~xo,n&=~Si,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-gn(n),r=1<<t;e[t]=-1,n&=~r}}function xc(e){if((G&6)!==0)throw Error(d(327));Ot();var n=Pr(e,0);if((n&1)===0)return Xe(e,ve()),null;var t=Ai(e,n);if(e.tag!==0&&t===2){var r=Zi(e);r!==0&&(n=r,t=bo(e,r))}if(t===1)throw t=Cr,dt(e,0),Jn(e,n),Xe(e,ve()),t;if(t===6)throw Error(d(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,pt(e,Qe,Bn),Xe(e,ve()),null}function So(e,n){var t=G;G|=1;try{return e(n)}finally{G=t,G===0&&(Rt=ve()+500,ti&&Wn())}}function ut(e){Qn!==null&&Qn.tag===0&&(G&6)===0&&Ot();var n=G;G|=1;var t=pn.transition,r=X;try{if(pn.transition=null,X=1,e)return e()}finally{X=r,pn.transition=t,G=n,(G&6)===0&&Wn()}}function Co(){on=qt.current,ae(qt)}function dt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Ju(t)),ke!==null)for(t=ke.return;t!==null;){var r=t;switch(Ds(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ei();break;case 3:Bt(),ae(Ye),ae(Pe),Ws();break;case 5:$s(r);break;case 4:Bt();break;case 13:ae(ge);break;case 19:ae(ge);break;case 10:qs(r.type._context);break;case 22:case 23:Co()}t=t.return}if(Ae=e,ke=e=Zn(e.current,null),Be=on=n,Le=0,Cr=null,xo=Si=ct=0,Qe=Er=null,ot!==null){for(n=0;n<ot.length;n++)if(t=ot[n],r=t.interleaved,r!==null){t.interleaved=null;var s=r.next,o=t.pending;if(o!==null){var l=o.next;o.next=s,r.next=l}t.pending=r}ot=null}return e}function vc(e,n){do{var t=ke;try{if(Ps(),pi.current=mi,hi){for(var r=me.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}hi=!1}if(at=0,Ne=je=me=null,vr=!1,yr=0,mo.current=null,t===null||t.return===null){Le=1,Cr=n,ke=null;break}e:{var o=e,l=t.return,a=t,c=n;if(n=Be,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var m=c,y=a,w=y.tag;if((y.mode&1)===0&&(w===0||w===11||w===15)){var v=y.alternate;v?(y.updateQueue=v.updateQueue,y.memoizedState=v.memoizedState,y.lanes=v.lanes):(y.updateQueue=null,y.memoizedState=null)}var L=$a(l);if(L!==null){L.flags&=-257,Ha(L,l,a,o,n),L.mode&1&&Fa(o,m,n),n=L,c=m;var _=n.updateQueue;if(_===null){var I=new Set;I.add(c),n.updateQueue=I}else _.add(c);break e}else{if((n&1)===0){Fa(o,m,n),Eo();break e}c=Error(d(426))}}else if(pe&&a.mode&1){var ye=$a(l);if(ye!==null){(ye.flags&65536)===0&&(ye.flags|=256),Ha(ye,l,a,o,n),Bs(Ut(c,a));break e}}o=c=Ut(c,a),Le!==4&&(Le=2),Er===null?Er=[o]:Er.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var f=Oa(o,c,n);ha(o,f);break e;case 1:a=c;var u=o.type,g=o.stateNode;if((o.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Kn===null||!Kn.has(g)))){o.flags|=65536,n&=-n,o.lanes|=n;var b=za(o,a,n);ha(o,b);break e}}o=o.return}while(o!==null)}bc(t)}catch(D){n=D,ke===t&&t!==null&&(ke=t=t.return);continue}break}while(!0)}function yc(){var e=ki.current;return ki.current=mi,e===null?mi:e}function Eo(){(Le===0||Le===3||Le===2)&&(Le=4),Ae===null||(ct&268435455)===0&&(Si&268435455)===0||Jn(Ae,Be)}function Ai(e,n){var t=G;G|=2;var r=yc();(Ae!==e||Be!==n)&&(Bn=null,dt(e,n));do try{Sd();break}catch(s){vc(e,s)}while(!0);if(Ps(),G=t,ki.current=r,ke!==null)throw Error(d(261));return Ae=null,Be=0,Le}function Sd(){for(;ke!==null;)wc(ke)}function Cd(){for(;ke!==null&&!Kc();)wc(ke)}function wc(e){var n=Cc(e.alternate,e,on);e.memoizedProps=e.pendingProps,n===null?bc(e):ke=n,mo.current=null}function bc(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=md(t,n,on),t!==null){ke=t;return}}else{if(t=xd(t,n),t!==null){t.flags&=32767,ke=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,ke=null;return}}if(n=n.sibling,n!==null){ke=n;return}ke=n=e}while(n!==null);Le===0&&(Le=5)}function pt(e,n,t){var r=X,s=pn.transition;try{pn.transition=null,X=1,Ed(e,n,t,r)}finally{pn.transition=s,X=r}return null}function Ed(e,n,t,r){do Ot();while(Qn!==null);if((G&6)!==0)throw Error(d(327));t=e.finishedWork;var s=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(d(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(su(e,o),e===Ae&&(ke=Ae=null,Be=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Ei||(Ei=!0,Ec(Mr,function(){return Ot(),null})),o=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||o){o=pn.transition,pn.transition=null;var l=X;X=1;var a=G;G|=4,mo.current=null,yd(e,t),dc(t,e),Wu(Cs),Or=!!Ss,Cs=Ss=null,e.current=t,wd(t),Qc(),G=a,X=l,pn.transition=o}else e.current=t;if(Ei&&(Ei=!1,Qn=e,ji=s),o=e.pendingLanes,o===0&&(Kn=null),Zc(t.stateNode),Xe(e,ve()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)s=n[t],r(s.value,{componentStack:s.stack,digest:s.digest});if(Ci)throw Ci=!1,e=yo,yo=null,e;return(ji&1)!==0&&e.tag!==0&&Ot(),o=e.pendingLanes,(o&1)!==0?e===wo?jr++:(jr=0,wo=e):jr=0,Wn(),null}function Ot(){if(Qn!==null){var e=cl(ji),n=pn.transition,t=X;try{if(pn.transition=null,X=16>e?16:e,Qn===null)var r=!1;else{if(e=Qn,Qn=null,ji=0,(G&6)!==0)throw Error(d(331));var s=G;for(G|=4,A=e.current;A!==null;){var o=A,l=o.child;if((A.flags&16)!==0){var a=o.deletions;if(a!==null){for(var c=0;c<a.length;c++){var m=a[c];for(A=m;A!==null;){var y=A;switch(y.tag){case 0:case 11:case 15:Sr(8,y,o)}var w=y.child;if(w!==null)w.return=y,A=w;else for(;A!==null;){y=A;var v=y.sibling,L=y.return;if(oc(y),y===m){A=null;break}if(v!==null){v.return=L,A=v;break}A=L}}}var _=o.alternate;if(_!==null){var I=_.child;if(I!==null){_.child=null;do{var ye=I.sibling;I.sibling=null,I=ye}while(I!==null)}}A=o}}if((o.subtreeFlags&2064)!==0&&l!==null)l.return=o,A=l;else e:for(;A!==null;){if(o=A,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Sr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,A=f;break e}A=o.return}}var u=e.current;for(A=u;A!==null;){l=A;var g=l.child;if((l.subtreeFlags&2064)!==0&&g!==null)g.return=l,A=g;else e:for(l=u;A!==null;){if(a=A,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:bi(9,a)}}catch(D){xe(a,a.return,D)}if(a===l){A=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,A=b;break e}A=a.return}}if(G=s,Wn(),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(Tr,e)}catch{}r=!0}return r}finally{X=t,pn.transition=n}}return!1}function kc(e,n,t){n=Ut(t,n),n=Oa(e,n,1),e=Yn(e,n,1),n=He(),e!==null&&(Qt(e,1,n),Xe(e,n))}function xe(e,n,t){if(e.tag===3)kc(e,e,t);else for(;n!==null;){if(n.tag===3){kc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kn===null||!Kn.has(r))){e=Ut(t,e),e=za(n,e,1),n=Yn(n,e,1),e=He(),n!==null&&(Qt(n,1,e),Xe(n,e));break}}n=n.return}}function jd(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=He(),e.pingedLanes|=e.suspendedLanes&t,Ae===e&&(Be&t)===t&&(Le===4||Le===3&&(Be&130023424)===Be&&500>ve()-vo?dt(e,0):xo|=t),Xe(e,n)}function Sc(e,n){n===0&&((e.mode&1)===0?n=1:(n=Ur,Ur<<=1,(Ur&130023424)===0&&(Ur=4194304)));var t=He();e=Dn(e,n),e!==null&&(Qt(e,n,t),Xe(e,t))}function Ld(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Sc(e,t)}function Nd(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(t=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(d(314))}r!==null&&r.delete(n),Sc(e,t)}var Cc;Cc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ye.current)Ke=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return Ke=!1,gd(e,n,t);Ke=(e.flags&131072)!==0}else Ke=!1,pe&&(n.flags&1048576)!==0&&ra(n,ii,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;yi(e,n),e=n.pendingProps;var s=Nt(n,Pe.current);Tt(n,t),s=Gs(null,n,r,e,s,t);var o=Ks();return n.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ge(r)?(o=!0,ni(n)):o=!1,n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,zs(n),s.updater=xi,n.stateNode=s,s._reactInternals=n,no(n,r,e,t),n=so(null,n,r,!0,o,t)):(n.tag=0,pe&&o&&Is(n),$e(null,n,s,t),n=n.child),n;case 16:r=n.elementType;e:{switch(yi(e,n),e=n.pendingProps,s=r._init,r=s(r._payload),n.type=r,s=n.tag=_d(r),e=vn(r,e),s){case 0:n=io(null,n,r,e,t);break e;case 1:n=Qa(null,n,r,e,t);break e;case 11:n=Wa(null,n,r,e,t);break e;case 14:n=Va(null,n,r,vn(r.type,e),t);break e}throw Error(d(306,r,""))}return n;case 0:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:vn(r,s),io(e,n,r,s,t);case 1:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:vn(r,s),Qa(e,n,r,s,t);case 3:e:{if(Xa(n),e===null)throw Error(d(387));r=n.pendingProps,o=n.memoizedState,s=o.element,pa(e,n),ui(n,r,null,t);var l=n.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){s=Ut(Error(d(423)),n),n=Ja(e,n,r,t,s);break e}else if(r!==s){s=Ut(Error(d(424)),n),n=Ja(e,n,r,t,s);break e}else for(sn=Fn(n.stateNode.containerInfo.firstChild),rn=n,pe=!0,xn=null,t=ua(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(It(),r===s){n=Tn(e,n,t);break e}$e(e,n,r,t)}n=n.child}return n;case 5:return ga(n),e===null&&Ts(n),r=n.type,s=n.pendingProps,o=e!==null?e.memoizedProps:null,l=s.children,Es(r,s)?l=null:o!==null&&Es(r,o)&&(n.flags|=32),Ka(e,n),$e(e,n,l,t),n.child;case 6:return e===null&&Ts(n),null;case 13:return Za(e,n,t);case 4:return Fs(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Dt(n,null,r,t):$e(e,n,r,t),n.child;case 11:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:vn(r,s),Wa(e,n,r,s,t);case 7:return $e(e,n,n.pendingProps,t),n.child;case 8:return $e(e,n,n.pendingProps.children,t),n.child;case 12:return $e(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,s=n.pendingProps,o=n.memoizedProps,l=s.value,ie(li,r._currentValue),r._currentValue=l,o!==null)if(mn(o.value,l)){if(o.children===s.children&&!Ye.current){n=Tn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=Mn(-1,t&-t),c.tag=2;var m=o.updateQueue;if(m!==null){m=m.shared;var y=m.pending;y===null?c.next=c:(c.next=y.next,y.next=c),m.pending=c}}o.lanes|=t,c=o.alternate,c!==null&&(c.lanes|=t),Rs(o.return,t,n),a.lanes|=t;break}c=c.next}}else if(o.tag===10)l=o.type===n.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(d(341));l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),Rs(l,t,n),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===n){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}$e(e,n,s.children,t),n=n.child}return n;case 9:return s=n.type,r=n.pendingProps.children,Tt(n,t),s=un(s),r=r(s),n.flags|=1,$e(e,n,r,t),n.child;case 14:return r=n.type,s=vn(r,n.pendingProps),s=vn(r.type,s),Va(e,n,r,s,t);case 15:return Ya(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:vn(r,s),yi(e,n),n.tag=1,Ge(r)?(e=!0,ni(n)):e=!1,Tt(n,t),qa(n,r,s),no(n,r,s,t),so(null,n,r,!0,e,t);case 19:return nc(e,n,t);case 22:return Ga(e,n,t)}throw Error(d(156,n.tag))};function Ec(e,n){return il(e,n)}function Ad(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(e,n,t,r){return new Ad(e,n,t,r)}function jo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _d(e){if(typeof e=="function")return jo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ze)return 11;if(e===Fe)return 14}return 2}function Zn(e,n){var t=e.alternate;return t===null?(t=hn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function _i(e,n,t,r,s,o){var l=2;if(r=e,typeof e=="function")jo(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case De:return ht(t.children,s,o,n);case Ce:l=8,s|=8;break;case ln:return e=hn(12,t,n,s|2),e.elementType=ln,e.lanes=o,e;case Me:return e=hn(13,t,n,s),e.elementType=Me,e.lanes=o,e;case en:return e=hn(19,t,n,s),e.elementType=en,e.lanes=o,e;case te:return Ii(t,s,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ze:l=10;break e;case Ln:l=9;break e;case ze:l=11;break e;case Fe:l=14;break e;case Ee:l=16,r=null;break e}throw Error(d(130,e==null?e:typeof e,""))}return n=hn(l,t,n,s),n.elementType=e,n.type=r,n.lanes=o,n}function ht(e,n,t,r){return e=hn(7,e,r,n),e.lanes=t,e}function Ii(e,n,t,r){return e=hn(22,e,r,n),e.elementType=te,e.lanes=t,e.stateNode={isHidden:!1},e}function Lo(e,n,t){return e=hn(6,e,null,n),e.lanes=t,e}function No(e,n,t){return n=hn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Id(e,n,t,r,s){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=es(0),this.expirationTimes=es(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=es(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ao(e,n,t,r,s,o,l,a,c){return e=new Id(e,n,t,a,c),n===1?(n=1,o===!0&&(n|=8)):n=0,o=hn(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},zs(o),e}function Dd(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fe,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function jc(e){if(!e)return Hn;e=e._reactInternals;e:{if(nt(e)!==e||e.tag!==1)throw Error(d(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ge(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(d(171))}if(e.tag===1){var t=e.type;if(Ge(t))return ea(e,t,n)}return n}function Lc(e,n,t,r,s,o,l,a,c){return e=Ao(t,r,!0,e,s,o,l,a,c),e.context=jc(null),t=e.current,r=He(),s=Xn(t),o=Mn(r,s),o.callback=n??null,Yn(t,o,s),e.current.lanes=s,Qt(e,s,r),Xe(e,r),e}function Di(e,n,t,r){var s=n.current,o=He(),l=Xn(s);return t=jc(t),n.context===null?n.context=t:n.pendingContext=t,n=Mn(o,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Yn(s,n,l),e!==null&&(bn(e,s,l,o),ci(e,s,l)),l}function Mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Nc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function _o(e,n){Nc(e,n),(e=e.alternate)&&Nc(e,n)}function Md(){return null}var Ac=typeof reportError=="function"?reportError:function(e){console.error(e)};function Io(e){this._internalRoot=e}Ti.prototype.render=Io.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(d(409));Di(e,n,null,null)},Ti.prototype.unmount=Io.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ut(function(){Di(null,e,null,null)}),n[Nn]=null}};function Ti(e){this._internalRoot=e}Ti.prototype.unstable_scheduleHydration=function(e){if(e){var n=pl();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Rn.length&&n!==0&&n<Rn[t].priority;t++);Rn.splice(t,0,e),t===0&&gl(e)}};function Do(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _c(){}function Td(e,n,t,r,s){if(s){if(typeof r=="function"){var o=r;r=function(){var m=Mi(l);o.call(m)}}var l=Lc(n,r,e,0,null,!1,!1,"",_c);return e._reactRootContainer=l,e[Nn]=l.current,ur(e.nodeType===8?e.parentNode:e),ut(),l}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var m=Mi(c);a.call(m)}}var c=Ao(e,0,!1,null,null,!1,!1,"",_c);return e._reactRootContainer=c,e[Nn]=c.current,ur(e.nodeType===8?e.parentNode:e),ut(function(){Di(n,c,t,r)}),c}function Ui(e,n,t,r,s){var o=t._reactRootContainer;if(o){var l=o;if(typeof s=="function"){var a=s;s=function(){var c=Mi(l);a.call(c)}}Di(n,l,e,s)}else l=Td(t,n,e,s,r);return Mi(l)}ul=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Kt(n.pendingLanes);t!==0&&(ns(n,t|1),Xe(n,ve()),(G&6)===0&&(Rt=ve()+500,Wn()))}break;case 13:ut(function(){var r=Dn(e,1);if(r!==null){var s=He();bn(r,e,1,s)}}),_o(e,1)}},ts=function(e){if(e.tag===13){var n=Dn(e,134217728);if(n!==null){var t=He();bn(n,e,134217728,t)}_o(e,134217728)}},dl=function(e){if(e.tag===13){var n=Xn(e),t=Dn(e,n);if(t!==null){var r=He();bn(t,e,n,r)}_o(e,n)}},pl=function(){return X},hl=function(e,n){var t=X;try{return X=e,n()}finally{X=t}},Gi=function(e,n,t){switch(n){case"input":if(F(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var s=Zr(r);if(!s)throw Error(d(90));Ar(r),F(r,s)}}}break;case"textarea":Fo(e,t);break;case"select":n=t.value,n!=null&&mt(e,!!t.multiple,n,!1)}},Xo=So,Jo=ut;var Bd={usingClientEntryPoint:!1,Events:[hr,jt,Zr,Ko,Qo,So]},Lr={findFiberByHostInstance:tt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ud={bundleType:Lr.bundleType,version:Lr.version,rendererPackageName:Lr.rendererPackageName,rendererConfig:Lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:oe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tl(e),e===null?null:e.stateNode},findFiberByHostInstance:Lr.findFiberByHostInstance||Md,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pi.isDisabled&&Pi.supportsFiber)try{Tr=Pi.inject(Ud),kn=Pi}catch{}}return Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bd,Je.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Do(n))throw Error(d(200));return Dd(e,n,null,t)},Je.createRoot=function(e,n){if(!Do(e))throw Error(d(299));var t=!1,r="",s=Ac;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=Ao(e,1,!1,null,null,t,!1,r,s),e[Nn]=n.current,ur(e.nodeType===8?e.parentNode:e),new Io(n)},Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=tl(n),e=e===null?null:e.stateNode,e},Je.flushSync=function(e){return ut(e)},Je.hydrate=function(e,n,t){if(!Bi(n))throw Error(d(200));return Ui(null,e,n,!0,t)},Je.hydrateRoot=function(e,n,t){if(!Do(e))throw Error(d(405));var r=t!=null&&t.hydratedSources||null,s=!1,o="",l=Ac;if(t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=Lc(n,null,e,1,t??null,s,!1,o,l),e[Nn]=n.current,ur(e),r)for(e=0;e<r.length;e++)t=r[e],s=t._getVersion,s=s(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,s]:n.mutableSourceEagerHydrationData.push(t,s);return new Ti(n)},Je.render=function(e,n,t){if(!Bi(n))throw Error(d(200));return Ui(null,e,n,!1,t)},Je.unmountComponentAtNode=function(e){if(!Bi(e))throw Error(d(40));return e._reactRootContainer?(ut(function(){Ui(null,null,e,!1,function(){e._reactRootContainer=null,e[Nn]=null})}),!0):!1},Je.unstable_batchedUpdates=So,Je.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Bi(t))throw Error(d(200));if(e==null||e._reactInternals===void 0)throw Error(d(38));return Ui(e,n,t,!1,r)},Je.version="18.3.1-next-f1338f8080-20240426",Je}var qc;function Wd(){if(qc)return Bo.exports;qc=1;function h(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h)}catch(C){console.error(C)}}return h(),Bo.exports=Hd(),Bo.exports}var Rc;function Vd(){if(Rc)return qi;Rc=1;var h=Wd();return qi.createRoot=h.createRoot,qi.hydrateRoot=h.hydrateRoot,qi}var Yd=Vd();const Gd=zc(Yd),Kd=typeof window<"u"&&typeof document<"u";function Qd(){if(!Kd||window.__UX4G_RUNTIME_INITIALIZED__)return;window.__UX4G_RUNTIME_INITIALIZED__=!0;const h=document.createElement("script");h.setAttribute("data-ux4g-runtime","main"),h.textContent=`/*!\r
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
`,document.head.appendChild(h);const C=document.createElement("script");C.setAttribute("data-ux4g-runtime","custom"),C.textContent=`/* ========================================================= tooltips js ========================================================= */\r
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
`,document.head.appendChild(C)}Qd();if(typeof window<"u"&&typeof MutationObserver<"u"){let h=null;const C=new MutationObserver(M=>{let k=!1;for(const N of M)if(N.addedNodes.length>0){k=!0;break}k&&(h&&clearTimeout(h),h=setTimeout(()=>{var N;(N=window.ux4g)!=null&&N.init&&window.ux4g.init(document)},50))}),d=()=>{document.body?C.observe(document.body,{childList:!0,subtree:!0}):setTimeout(d,10)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",d):d()}const Ri=[{id:"vande-bharat-20977",number:"20977",name:"Vande Bharat Express",source:"Chandigarh",sourceCode:"CDG",destination:"New Delhi",destinationCode:"NDLS",departure:"06:15",arrival:"09:25",duration:"3h 10m",stops:0,type:"Semi-high speed",score:94,recommendation:["Arrives early","Direct journey","Good availability"],amenities:["Wi-Fi","Meals","Charging"],classes:[{code:"CC",label:"Chair Car",status:"available",seats:42,fare:1245},{code:"EC",label:"Executive Chair",status:"available",seats:8,fare:2320}]},{id:"shatabdi-12012",number:"12012",name:"Kalka Shatabdi",source:"Chandigarh",sourceCode:"CDG",destination:"New Delhi",destinationCode:"NDLS",departure:"06:40",arrival:"10:00",duration:"3h 20m",stops:1,type:"Shatabdi",score:86,recommendation:["Lowest fare","Early departure","Meals included"],amenities:["Meals","Charging","Pantry"],classes:[{code:"CC",label:"Chair Car",status:"available",seats:18,fare:980},{code:"EC",label:"Executive Chair",status:"available",seats:4,fare:1880}]},{id:"paschim-12926",number:"12926",name:"Paschim Express",source:"Chandigarh",sourceCode:"CDG",destination:"New Delhi",destinationCode:"NDLS",departure:"08:05",arrival:"13:35",duration:"5h 30m",stops:5,type:"Superfast",score:73,recommendation:["Most affordable","More class choices"],amenities:["Pantry","Charging"],classes:[{code:"3A",label:"AC 3 Tier",status:"rac",position:12,fare:1240},{code:"SL",label:"Sleeper",status:"waitlist",position:18,fare:685}]}],Xd=[{question:"What does RAC mean?",answer:"RAC means you can board the train. You have a seat, but your berth may be shared. Your status can improve before departure."},{question:"When does Tatkal booking open?",answer:"Tatkal opens one day before departure. For AC classes it opens at 10:00 AM, and for non-AC classes it opens at 11:00 AM."},{question:"What happens if availability changes during payment?",answer:"The booking is checked again before confirmation. Payment received and booking confirmed are shown as separate states so you always know what happened."},{question:"How is the refund amount calculated?",answer:"The cancellation charge and any non-refundable fees are shown before you confirm. Refunds go back to the original payment method."}],Jd=[{id:"delay",icon:"schedule",title:"Platform update",body:"Platform 4 is assigned for your 06:15 departure.",tone:"info"},{id:"coach",icon:"train",title:"Coach information ready",body:"Your coach B2 is near the middle of the train.",tone:"success"},{id:"reminder",icon:"notifications",title:"Boarding reminder",body:"Reach the station at least 30 minutes before departure.",tone:"warning"}],Zd=[{icon:"bolt",title:"Tatkal, without the guesswork",body:"See opening times, eligible classes, current mock availability, and fare before the clock starts."},{icon:"family_restroom",title:"Travel together",body:"Tell us when you are travelling as a family or group and see seating trade-offs honestly."},{icon:"support_agent",title:"Help when it matters",body:"Understand RAC, waitlist, refunds, and journey changes without leaving your booking."}],ep=h=>h==="available"?"Available":h==="rac"?"RAC":"Waitlist",np=h=>h==="available"?"success":h==="rac"?"warning":"error";function j({name:h}){return i.jsx("span",{"aria-hidden":"true",className:"ux4g-icon-outlined",children:h})}function ee({tone:h,children:C,icon:d}){return i.jsxs("span",{className:`ux4g-tag-tonal-${h} ux4g-tag-s app-status-tag`,children:[d?i.jsx(j,{name:d}):null,C]})}function tp({value:h,onChange:C,onSubmit:d,compact:M=!1}){const k=(N,$)=>C({...h,[N]:$});return i.jsxs("form",{className:`search-form ${M?"search-form-compact":""}`,onSubmit:N=>{N.preventDefault(),d()},children:[i.jsxs("div",{className:"search-form-heading",children:[i.jsxs("div",{children:[i.jsx("p",{className:"eyebrow",children:"Plan your journey"}),i.jsx("h2",{children:M?"Update your search":"Where will you go next?"})]}),i.jsx(ee,{tone:"info",icon:"verified_user",children:"Mock journey data"})]}),i.jsxs("div",{className:"search-fields",children:[i.jsxs("label",{className:"ux4g-form-group station-field",children:[i.jsx("span",{children:"From"}),i.jsxs("div",{className:"ux4g-input-container ux4g-input-md ux4g-input-default",children:[i.jsx(j,{name:"trip_origin"}),i.jsx("input",{"aria-label":"From station",value:h.source,onChange:N=>k("source",N.target.value),placeholder:"Station or city"})]})]}),i.jsx("button",{className:"ux4g-icon-btn ux4g-icon-btn-outline-primary ux4g-icon-btn-md swap-button",type:"button","aria-label":"Swap departure and arrival stations",onClick:()=>C({...h,source:h.destination,destination:h.source}),children:i.jsx(j,{name:"swap_horiz"})}),i.jsxs("label",{className:"ux4g-form-group station-field",children:[i.jsx("span",{children:"To"}),i.jsxs("div",{className:"ux4g-input-container ux4g-input-md ux4g-input-default",children:[i.jsx(j,{name:"location_on"}),i.jsx("input",{"aria-label":"To station",value:h.destination,onChange:N=>k("destination",N.target.value),placeholder:"Station or city"})]})]}),i.jsxs("label",{className:"ux4g-form-group",children:[i.jsx("span",{children:"Journey date"}),i.jsxs("div",{className:"ux4g-date-picker-container ux4g-input-md",children:[i.jsx(j,{name:"calendar_month"}),i.jsx("input",{className:"ux4g-date-picker-input","aria-label":"Journey date",type:"date",value:h.date,onChange:N=>k("date",N.target.value)})]})]}),i.jsxs("label",{className:"ux4g-form-group",children:[i.jsx("span",{children:"Travellers"}),i.jsxs("div",{className:"ux4g-input-container ux4g-input-md ux4g-input-default",children:[i.jsx(j,{name:"group"}),i.jsx("select",{"aria-label":"Number of travellers",value:h.passengers,onChange:N=>k("passengers",Number(N.target.value)),children:[1,2,3,4,5,6,7,8].map(N=>i.jsxs("option",{value:N,children:[N," ",N===1?"Adult":"Adults"]},N))})]})]})]}),i.jsxs("fieldset",{className:"quota-fieldset",children:[i.jsx("legend",{children:"Quota"}),i.jsx("div",{className:"quota-options",children:["General","Tatkal","Premium Tatkal"].map(N=>i.jsxs("label",{className:"ux4g-radio ux4g-radio-md",children:[i.jsx("input",{type:"radio",name:"quota",checked:h.quota===N,onChange:()=>k("quota",N)}),i.jsx("span",{children:N})]},N))})]}),h.quota==="Tatkal"?i.jsxs("div",{className:"tatkal-inline",role:"status",children:[i.jsx(j,{name:"bolt"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Tatkal opens today at 10:00 AM"}),i.jsx("span",{children:"Have passenger details ready. AC classes are eligible in this mock journey."})]}),i.jsx("span",{className:"tatkal-countdown",children:"00:42:18"})]}):null,i.jsxs("button",{className:"ux4g-btn ux4g-btn-primary ux4g-btn-md search-submit",type:"submit",children:[i.jsx(j,{name:"search"})," Search trains"]})]})}function rp(){return i.jsxs("div",{className:"ux4g-card ux4g-card-outline ux4g-card-horizontal tatkal-card",children:[i.jsx("div",{className:"tatkal-icon",children:i.jsx(j,{name:"bolt"})}),i.jsxs("div",{className:"tatkal-copy",children:[i.jsx("p",{className:"eyebrow",children:"Tatkal readiness"}),i.jsx("h3",{children:"Be ready when the window opens"}),i.jsx("p",{children:"Passenger details and class options are prepared in advance. Availability remains mock data until a railway service is connected."})]}),i.jsxs("div",{className:"tatkal-time",children:[i.jsx("span",{children:"Opens today"}),i.jsx("strong",{children:"10:00 AM"}),i.jsx(ee,{tone:"warning",children:"00:42:18 left"})]})]})}function ip({train:h,selectedClass:C,compare:d,onCompare:M,onSelect:k,onExplain:N}){const[$,ue]=ce.useState(!1);return i.jsxs("article",{className:`ux4g-card ux4g-card-solid ux4g-card-vertical app-train-card ${h.score>=90?"is-recommended":""}`,children:[i.jsxs("div",{className:"train-card-topline",children:[i.jsxs("div",{className:"train-title-wrap",children:[h.score>=90?i.jsx(ee,{tone:"brand",icon:"auto_awesome",children:"Best for you"}):null,i.jsxs("div",{children:[i.jsx("h3",{children:h.name}),i.jsxs("p",{children:[h.number," · ",h.type]})]})]}),i.jsxs("label",{className:"compare-check",children:[i.jsx("input",{type:"checkbox",checked:d,onChange:M})," Compare"]})]}),i.jsxs("div",{className:"train-route",children:[i.jsxs("div",{className:"station-time",children:[i.jsx("strong",{children:h.departure}),i.jsx("span",{children:h.sourceCode}),i.jsx("small",{children:h.source})]}),i.jsxs("div",{className:"route-line",children:[i.jsx("span",{children:h.duration}),i.jsxs("div",{children:[i.jsx("span",{className:"route-dot"}),i.jsx("span",{className:"route-track"}),i.jsx("span",{className:"route-dot"})]}),i.jsx("small",{children:h.stops===0?"Direct":`${h.stops} stops`})]}),i.jsxs("div",{className:"station-time station-time-right",children:[i.jsx("strong",{children:h.arrival}),i.jsx("span",{children:h.destinationCode}),i.jsx("small",{children:h.destination})]})]}),i.jsxs("div",{className:"train-meta-grid",children:[i.jsxs("div",{children:[i.jsx("span",{className:"meta-label",children:"Why it stands out"}),i.jsx("div",{className:"reason-list",children:h.recommendation.map(P=>i.jsxs("span",{children:[i.jsx(j,{name:"check_circle"}),P]},P))})]}),i.jsxs("div",{children:[i.jsx("span",{className:"meta-label",children:"Amenities"}),i.jsx("div",{className:"amenity-list",children:h.amenities.map(P=>i.jsx("span",{children:P},P))})]})]}),i.jsx("div",{className:"availability-row",children:h.classes.map(P=>{const Se=C===`${h.id}-${P.code}`,he=np(P.status);return i.jsxs("button",{type:"button",className:`availability-option ${Se?"selected":""}`,onClick:()=>k(P),children:[i.jsxs("span",{className:"availability-class",children:[P.code," ",i.jsx("small",{children:P.label})]}),i.jsx(ee,{tone:he,children:P.status==="available"?`${P.seats} seats`:`${ep(P.status)} ${P.position}`}),i.jsxs("strong",{children:["₹",P.fare.toLocaleString("en-IN")]}),P.status!=="available"?i.jsx("span",{className:"availability-explanation",children:P.status==="rac"?"You can board · berth may be shared":"Seat is not confirmed yet"}):null]},P.code)})}),$?i.jsxs("div",{className:"train-advanced",children:[i.jsx("strong",{children:"Good to know"}),i.jsx("p",{children:"Mock availability is checked again at payment. A seat request is not a confirmed allocation until the booking state changes to confirmed."}),i.jsxs("div",{className:"advanced-facts",children:[i.jsxs("span",{children:[i.jsx(j,{name:"luggage"})," No transfer"]}),i.jsxs("span",{children:[i.jsx(j,{name:"schedule"})," On-time history not connected"]}),i.jsxs("span",{children:[i.jsx(j,{name:"restaurant"})," Pantry available"]})]})]}):null,i.jsxs("div",{className:"train-card-actions",children:[i.jsxs("button",{className:"ux4g-btn ux4g-btn-text-primary ux4g-btn-md",type:"button",onClick:()=>ue(!$),children:[i.jsx(j,{name:$?"expand_less":"expand_more"})," ",$?"Hide details":"More details"]}),i.jsx("button",{className:"ux4g-btn ux4g-btn-outline-primary ux4g-btn-md",type:"button",onClick:()=>N("How this recommendation works",`${h.name} scores ${h.score}/100 because of its ${h.duration} journey, ${h.classes[0].status==="available"?"good availability":"current booking status"}, and departure time. You can change the priority above at any time.`),children:"Why this train?"}),i.jsxs("button",{className:"ux4g-btn ux4g-btn-primary ux4g-btn-md",type:"button",onClick:()=>k(h.classes[0]),children:["Select train ",i.jsx(j,{name:"arrow_forward"})]})]})]})}function sp({active:h}){const C=[{id:"seats",label:"Seats"},{id:"passengers",label:"Passengers"},{id:"review",label:"Review"},{id:"payment",label:"Payment"}],d=C.findIndex(M=>M.id===h);return i.jsx("div",{className:"ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-center booking-stepper","aria-label":"Booking progress",children:C.map((M,k)=>i.jsxs("div",{className:`ux4g-stepper-step ${k<d?"completed":""} ${M.id===h?"active":""}`,children:[i.jsx("span",{children:k<d?i.jsx(j,{name:"check"}):k+1}),i.jsx("small",{children:M.label})]},M.id))})}function Oc({selectedCoach:h="B2",onSelect:C}){return i.jsx("div",{className:"coach-map","aria-label":"Coach selector",children:["B1","B2","B3","B4"].map(d=>i.jsxs("button",{type:"button",className:`coach-card ${h===d?"selected":""}`,onClick:()=>C==null?void 0:C(d),children:[i.jsx("span",{children:d}),i.jsx("small",{children:d==="B2"?"Your coach":"AC 3 Tier"})]},d))})}function op({selectedSeats:h,onToggle:C}){const d=["21","22","23","24","25","26","27","28","29","30","31","32"];return i.jsxs("div",{className:"seat-map","aria-label":"Seat map for coach B2",children:[i.jsxs("div",{className:"seat-map-header",children:[i.jsx("span",{children:"Window"}),i.jsx("span",{children:"Coach B2 · AC 3 Tier"}),i.jsx("span",{children:"Aisle"})]}),i.jsx("div",{className:"seat-grid",children:d.map((M,k)=>{const N=["25","29"].includes(M),$=h.includes(M);return i.jsxs("button",{type:"button",className:`seat ${N?"unavailable":""} ${$?"selected":""}`,disabled:N,"aria-pressed":$,onClick:()=>C(M),children:[i.jsx("strong",{children:M}),i.jsx("span",{children:k%3===0?"Lower":k%3===1?"Middle":"Upper"})]},M)})}),i.jsxs("div",{className:"seat-legend",children:[i.jsxs("span",{children:[i.jsx("i",{className:"seat-key available"})," Available"]}),i.jsxs("span",{children:[i.jsx("i",{className:"seat-key chosen"})," Selected"]}),i.jsxs("span",{children:[i.jsx("i",{className:"seat-key locked"})," Unavailable"]})]})]})}function lp({passengers:h,onChange:C}){const d=(M,k,N)=>C(h.map(($,ue)=>ue===M?{...$,[k]:N}:$));return i.jsx("div",{className:"passenger-fields",children:h.map((M,k)=>i.jsxs("div",{className:"passenger-row",children:[i.jsx("div",{className:"passenger-number",children:k+1}),i.jsxs("label",{className:"ux4g-form-group",children:[i.jsx("span",{children:"Passenger name"}),i.jsx("div",{className:`ux4g-input-container ux4g-input-md ux4g-input-${M.name?"default":"error"}`,children:i.jsx("input",{"aria-label":`Passenger ${k+1} name`,value:M.name,onChange:N=>d(k,"name",N.target.value),placeholder:"Full name"})})]}),i.jsxs("label",{className:"ux4g-form-group",children:[i.jsx("span",{children:"Age"}),i.jsx("div",{className:"ux4g-input-container ux4g-input-md ux4g-input-default",children:i.jsx("input",{"aria-label":`Passenger ${k+1} age`,value:M.age,onChange:N=>d(k,"age",N.target.value),inputMode:"numeric",placeholder:"Age"})})]}),i.jsxs("label",{className:"ux4g-form-group",children:[i.jsx("span",{children:"Berth preference"}),i.jsx("div",{className:"ux4g-input-container ux4g-input-md ux4g-input-default",children:i.jsxs("select",{"aria-label":`Passenger ${k+1} berth preference`,value:M.berth,onChange:N=>d(k,"berth",N.target.value),children:[i.jsx("option",{children:"Lower"}),i.jsx("option",{children:"Middle"}),i.jsx("option",{children:"Upper"}),i.jsx("option",{children:"No preference"})]})})]})]},k))})}function ap({title:h,body:C,onClose:d}){return ce.useEffect(()=>{const M=k=>{k.key==="Escape"&&d()};return document.addEventListener("keydown",M),()=>document.removeEventListener("keydown",M)},[d]),i.jsx("div",{className:"ux4g-modal-backdrop ux4g-modal-backdrop-50 app-modal-backdrop",role:"presentation",onMouseDown:d,children:i.jsxs("div",{className:"ux4g-modal-box ux4g-modal-m app-modal",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",onMouseDown:M=>M.stopPropagation(),children:[i.jsxs("div",{className:"modal-header",children:[i.jsx("div",{className:"modal-icon",children:i.jsx(j,{name:"lightbulb"})}),i.jsx("button",{className:"ux4g-icon-btn ux4g-icon-btn-text-primary ux4g-icon-btn-md",type:"button","aria-label":"Close explanation",onClick:d,children:i.jsx(j,{name:"close"})})]}),i.jsx("h2",{id:"modal-title",children:h}),i.jsx("p",{children:C}),i.jsx("button",{className:"ux4g-btn ux4g-btn-primary ux4g-btn-md",type:"button",onClick:d,children:"Got it"})]})})}function cp({onClose:h}){return ce.useEffect(()=>{const C=d=>{d.key==="Escape"&&h()};return document.addEventListener("keydown",C),()=>document.removeEventListener("keydown",C)},[h]),i.jsx("div",{className:"drawer-layer",role:"presentation",onMouseDown:h,children:i.jsxs("aside",{className:"ux4g-drawer ux4g-drawer-right app-drawer",role:"dialog","aria-modal":"true","aria-labelledby":"notifications-title",onMouseDown:C=>C.stopPropagation(),children:[i.jsxs("div",{className:"drawer-header",children:[i.jsxs("div",{children:[i.jsx("p",{className:"eyebrow",children:"Your updates"}),i.jsx("h2",{id:"notifications-title",children:"Notifications"})]}),i.jsx("button",{className:"ux4g-icon-btn ux4g-icon-btn-text-primary ux4g-icon-btn-md",type:"button","aria-label":"Close notifications",onClick:h,children:i.jsx(j,{name:"close"})})]}),i.jsx("div",{className:"notification-list",children:Jd.map(C=>i.jsxs("div",{className:"notification-item",children:[i.jsx(ee,{tone:C.tone,icon:C.icon,children:"New"}),i.jsx("h3",{children:C.title}),i.jsx("p",{children:C.body}),i.jsx("span",{children:"Mock journey update"})]},C.id))}),i.jsxs("div",{className:"drawer-footnote",children:[i.jsx(j,{name:"info"}),i.jsx("p",{children:"Live notifications will appear here when a railway service is connected."})]})]})})}function up(){const[h,C]=ce.useState(0);return i.jsx("div",{className:"faq-list",children:Xd.map((d,M)=>i.jsxs("div",{className:`ux4g-accordion ux4g-accordion-arrow-right ux4g-accordion-bordered faq-item ${h===M?"open":""}`,children:[i.jsxs("button",{type:"button",onClick:()=>C(h===M?-1:M),"aria-expanded":h===M,children:[i.jsx("span",{children:d.question}),i.jsx(j,{name:h===M?"expand_less":"expand_more"})]}),h===M?i.jsx("p",{children:d.answer}):null]},d.question))})}function qo(){const[h,C]=ce.useState("Ask about a booking, RAC, refunds, coaches, or your journey status."),d=["What does RAC mean?","Can I cancel this ticket?","Where is my coach?"],M={"What does RAC mean?":"RAC means you can board the train. Your seat is valid, but the berth may be shared. Your status can improve before departure.","Can I cancel this ticket?":"This mock booking is eligible for cancellation. The estimated refund is ₹1,045 after a ₹180 cancellation charge and ₹20 in non-refundable charges.","Where is my coach?":"Your coach is B2, near the middle of the train. Your selected seats are B2-21 and B2-22."};return i.jsxs("div",{className:"assistant-panel ux4g-card ux4g-card-solid ux4g-card-vertical",children:[i.jsxs("div",{className:"assistant-heading",children:[i.jsx("div",{className:"assistant-avatar",children:i.jsx(j,{name:"auto_awesome"})}),i.jsxs("div",{children:[i.jsx("p",{className:"eyebrow",children:"RailConnect assistant"}),i.jsx("h3",{children:"Understand your journey"})]}),i.jsx(ee,{tone:"info",children:"Context-aware mock"})]}),i.jsx("div",{className:"assistant-message",children:i.jsx("p",{children:h})}),i.jsx("div",{className:"assistant-prompts",children:d.map(k=>i.jsx("button",{className:"ux4g-filter-chip-md",type:"button",onClick:()=>C(M[k]),children:k},k))}),i.jsxs("div",{className:"ux4g-feedback",children:[i.jsx("p",{children:"Was this helpful?"}),i.jsxs("div",{className:"ux4g-feedback-chip-wrapper",children:[i.jsx("button",{className:"ux4g-filter-chip-md",type:"button",children:"Yes"}),i.jsx("button",{className:"ux4g-filter-chip-md",type:"button",children:"No"})]})]})]})}function Ro(h){return new Intl.DateTimeFormat("en-IN",{day:"numeric",month:"short",year:"numeric"}).format(new Date(`${h}T12:00:00`))}function Oi(){return{name:"",age:"",gender:"Prefer not to say",berth:"Lower"}}function dp({onClick:h,count:C}){return i.jsxs("button",{className:"ux4g-icon-btn ux4g-icon-btn-text-primary ux4g-icon-btn-md notification-button",type:"button","aria-label":`${C} notifications`,onClick:h,children:[i.jsx(j,{name:"notifications"}),i.jsx("span",{children:C})]})}const pp={source:"Chandigarh",destination:"New Delhi",date:"2026-08-25",passengers:2,quota:"General"};function hp(){const[h,C]=ce.useState("home"),[d,M]=ce.useState(pp),[k,N]=ce.useState(Ri[0]),[$,ue]=ce.useState(Ri[0].classes[0]),[P,Se]=ce.useState([]),[he,se]=ce.useState("Best overall"),[J,we]=ce.useState(null),[We,ne]=ce.useState(!1),[Y,fn]=ce.useState("light"),[Ie,be]=ce.useState("seats"),[oe,Ve]=ce.useState(["21","22"]),[fe,De]=ce.useState("B2"),[Ce,ln]=ce.useState([Oi(),Oi()]),[Ze,Ln]=ce.useState(!0),[ze,Me]=ce.useState("together"),[en,Fe]=ce.useState("idle"),[Ee,te]=ce.useState("BOOKING_PENDING"),[E,T]=ce.useState("idle");ce.useEffect(()=>{document.documentElement.dataset.theme=Y},[Y]);const S=H=>{C(H),window.history.pushState({},"",`#${H}`),window.scrollTo({top:0,behavior:"smooth"})},p=()=>{ln(H=>Array.from({length:d.passengers},(de,F)=>H[F]??Oi())),S("results")},x=(H,de)=>{N(H),ue(de),be("seats"),Fe("idle"),te("BOOKING_PENDING"),Ve(d.passengers>1?["21","22"]:["21"]),S("booking")},R=H=>Se(de=>de.includes(H)?de.filter(F=>F!==H):de.length<3?[...de,H]:de),O=H=>{M(H),H.passengers!==Ce.length&&ln(de=>Array.from({length:H.passengers},(F,nn)=>de[nn]??Oi()))},W=H=>Ve(de=>de.includes(H)?de.filter(F=>F!==H):de.length<d.passengers?[...de,H]:de),V=()=>{Fe("processing"),window.setTimeout(()=>{Fe("received"),te("CONFIRMED"),be("confirmation")},900)},Z=()=>{Fe("received"),te("BOOKING_PENDING")},Q=()=>i.jsxs(i.Fragment,{children:[i.jsxs("section",{className:"hero-section page-container",children:[i.jsxs("div",{className:"hero-copy",children:[i.jsx(ee,{tone:"brand",icon:"train",children:"A calmer way to travel by rail"}),i.jsxs("h1",{children:["Book the journey.",i.jsx("br",{}),i.jsx("span",{children:"Understand every step."})]}),i.jsx("p",{children:"RailConnect keeps the familiar railway booking essentials and makes the hard parts—Tatkal, RAC, waitlist, seats, payments, and refunds—easier to understand."}),i.jsxs("div",{className:"hero-proof",children:[i.jsxs("span",{children:[i.jsx(j,{name:"check_circle"})," Clear status language"]}),i.jsxs("span",{children:[i.jsx(j,{name:"check_circle"})," Family-friendly choices"]}),i.jsxs("span",{children:[i.jsx(j,{name:"check_circle"})," Accessible by default"]})]})]}),i.jsx(tp,{value:d,onChange:O,onSubmit:p})]}),i.jsxs("section",{className:"page-container home-notice-row",children:[i.jsx(rp,{}),i.jsxs("div",{className:"mock-note",children:[i.jsx(j,{name:"science"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Prototype mode"}),i.jsx("span",{children:"Availability, payments, PNRs, and journey alerts use structured mock data."})]})]})]}),i.jsxs("section",{className:"page-container section-block",children:[i.jsxs("div",{className:"section-heading",children:[i.jsxs("div",{children:[i.jsx("p",{className:"eyebrow",children:"Designed around real friction"}),i.jsx("h2",{children:"Less decoding. More confidence."})]}),i.jsxs("button",{className:"ux4g-btn ux4g-btn-text-primary ux4g-btn-md",type:"button",onClick:()=>S("support"),children:["Explore help ",i.jsx(j,{name:"arrow_forward"})]})]}),i.jsx("div",{className:"feature-grid",children:Zd.map(H=>i.jsxs("article",{className:"ux4g-card ux4g-card-solid ux4g-card-vertical feature-card",children:[i.jsx("div",{className:"feature-icon",children:i.jsx(j,{name:H.icon})}),i.jsx("h3",{children:H.title}),i.jsx("p",{children:H.body}),i.jsxs("button",{className:"ux4g-text-link-md",type:"button",onClick:()=>S(H.title.includes("Tatkal")?"results":"support"),children:["See how it works ",i.jsx(j,{name:"arrow_forward"})]})]},H.title))})]}),i.jsxs("section",{className:"page-container section-block journey-principles",children:[i.jsxs("div",{className:"principles-copy",children:[i.jsx("p",{className:"eyebrow",children:"The booking promise"}),i.jsx("h2",{children:"Explain before asking."}),i.jsx("p",{children:"Every important decision comes with context: what a status means, what may change, what you will pay, and what happens next."}),i.jsxs("div",{className:"principle-list",children:[i.jsxs("div",{children:[i.jsx("span",{className:"principle-number",children:"01"}),i.jsxs("div",{children:[i.jsx("strong",{children:"See the trade-off"}),i.jsx("p",{children:"Keep a group together, choose a lower fare, or arrive earlier—without hidden assumptions."})]})]}),i.jsxs("div",{children:[i.jsx("span",{className:"principle-number",children:"02"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Know the state"}),i.jsx("p",{children:"Payment received is never presented as booking confirmed until that state is actually reached."})]})]}),i.jsxs("div",{children:[i.jsx("span",{className:"principle-number",children:"03"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Get help in context"}),i.jsx("p",{children:"Ask about RAC, coaches, refunds, and delays without losing your place in the journey."})]})]})]})]}),i.jsxs("div",{className:"journey-visual ux4g-card ux4g-card-outline ux4g-card-vertical",children:[i.jsxs("div",{className:"journey-visual-top",children:[i.jsx(ee,{tone:"success",icon:"check_circle",children:"Journey ready"}),i.jsx("span",{children:"Mock PNR · 4512367890"})]}),i.jsxs("div",{className:"journey-route",children:[i.jsxs("div",{children:[i.jsx("strong",{children:"CDG"}),i.jsx("span",{children:"Chandigarh"})]}),i.jsxs("div",{className:"visual-line",children:[i.jsx("span",{}),i.jsx("i",{}),i.jsx("span",{})]}),i.jsxs("div",{children:[i.jsx("strong",{children:"NDLS"}),i.jsx("span",{children:"New Delhi"})]})]}),i.jsxs("div",{className:"journey-visual-footer",children:[i.jsxs("span",{children:[i.jsx(j,{name:"schedule"})," 06:15 · 25 Aug"]}),i.jsxs("span",{children:[i.jsx(j,{name:"airline_seat_recline_normal"})," B2 · 21, 22"]})]})]})]})]}),re=()=>{const H=[...Ri].sort((F,nn)=>he==="Cheapest"?F.classes[0].fare-nn.classes[0].fare:he==="Fastest"?F.duration.localeCompare(nn.duration):he==="Best availability"?(nn.classes[0].seats??0)-(F.classes[0].seats??0):nn.score-F.score),de=Ri.filter(F=>P.includes(F.id));return i.jsxs("div",{className:"results-page page-container",children:[i.jsxs("div",{className:"breadcrumbs",children:[i.jsx("button",{type:"button",onClick:()=>S("home"),children:"Home"}),i.jsx(j,{name:"chevron_right"}),i.jsx("span",{children:"Search results"})]}),i.jsxs("div",{className:"results-header",children:[i.jsxs("div",{children:[i.jsxs("p",{className:"eyebrow",children:["Tuesday, ",Ro(d.date)," · ",d.passengers," ",d.passengers===1?"adult":"adults"]}),i.jsxs("h1",{children:[d.source," ",i.jsx("span",{children:"→"})," ",d.destination]}),i.jsxs("p",{className:"results-subtitle",children:["Showing mock availability for ",d.quota.toLowerCase()," quota. Choose what matters most to you."]})]}),i.jsxs("button",{className:"ux4g-btn ux4g-btn-outline-primary ux4g-btn-md",type:"button",onClick:()=>S("home"),children:[i.jsx(j,{name:"edit"})," Edit search"]})]}),i.jsxs("div",{className:"results-layout",children:[i.jsxs("aside",{className:"results-filters",children:[i.jsxs("div",{className:"filter-heading",children:[i.jsxs("div",{children:[i.jsx("p",{className:"eyebrow",children:"Refine"}),i.jsx("h2",{children:"Find your fit"})]}),i.jsx("button",{className:"ux4g-btn ux4g-btn-text-neutral ux4g-btn-sm",type:"button",children:"Clear"})]}),i.jsxs("div",{className:"filter-section",children:[i.jsx("span",{className:"meta-label",children:"Departure time"}),i.jsxs("div",{className:"filter-options",children:[i.jsxs("label",{children:[i.jsx("input",{type:"checkbox"})," Before 08:00"]}),i.jsxs("label",{children:[i.jsx("input",{type:"checkbox"})," 08:00 – 12:00"]}),i.jsxs("label",{children:[i.jsx("input",{type:"checkbox"})," After 12:00"]})]})]}),i.jsxs("div",{className:"filter-section",children:[i.jsx("span",{className:"meta-label",children:"Journey"}),i.jsxs("div",{className:"filter-options",children:[i.jsxs("label",{children:[i.jsx("input",{type:"checkbox"})," Direct only"]}),i.jsxs("label",{children:[i.jsx("input",{type:"checkbox"})," Good availability"]}),i.jsxs("label",{children:[i.jsx("input",{type:"checkbox"})," Meals included"]})]})]}),i.jsxs("div",{className:"filter-section",children:[i.jsx("span",{className:"meta-label",children:"Class"}),i.jsxs("div",{className:"filter-chip-wrap",children:[i.jsx("button",{className:"ux4g-filter-chip-md active",type:"button",children:"All"}),i.jsx("button",{className:"ux4g-filter-chip-md",type:"button",children:"CC"}),i.jsx("button",{className:"ux4g-filter-chip-md",type:"button",children:"3A"}),i.jsx("button",{className:"ux4g-filter-chip-md",type:"button",children:"SL"})]})]}),i.jsxs("div",{className:"filter-help",children:[i.jsx(j,{name:"lightbulb"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Not sure what to choose?"}),i.jsx("p",{children:"Start with Recommended. The reasons on each card show how the order was decided."}),i.jsx("button",{className:"ux4g-text-link-md",type:"button",onClick:()=>we({title:"Recommendations stay transparent",body:"This prototype uses a deterministic score based on fare, duration, departure time, and availability. It does not claim reliability without railway data."}),children:"How it works"})]})]})]}),i.jsxs("main",{className:"train-results",children:[i.jsxs("div",{className:"results-controls",children:[i.jsxs("div",{children:[i.jsxs("strong",{children:[H.length," trains"]}),i.jsx("span",{children:" · Mock result set"})]}),i.jsxs("label",{className:"sort-control",children:[i.jsx("span",{children:"Sort by"}),i.jsxs("select",{value:he,onChange:F=>se(F.target.value),children:[i.jsx("option",{children:"Best overall"}),i.jsx("option",{children:"Cheapest"}),i.jsx("option",{children:"Fastest"}),i.jsx("option",{children:"Best availability"})]})]})]}),i.jsxs("div",{className:"mobile-filter-actions",children:[i.jsxs("button",{className:"ux4g-btn ux4g-btn-outline-primary ux4g-btn-md",type:"button",children:[i.jsx(j,{name:"tune"})," Filters"]}),i.jsxs("button",{className:"ux4g-btn ux4g-btn-outline-primary ux4g-btn-md",type:"button",children:[i.jsx(j,{name:"sort"})," Sort"]})]}),i.jsxs("div",{className:"recommendation-banner ux4g-card ux4g-card-solid ux4g-card-horizontal",children:[i.jsx("div",{className:"recommendation-mark",children:i.jsx(j,{name:"auto_awesome"})}),i.jsxs("div",{children:[i.jsx(ee,{tone:"brand",children:"Best overall"}),i.jsx("h2",{children:"Vande Bharat Express"}),i.jsx("p",{children:"Fast, direct, and good availability for your morning arrival."})]}),i.jsxs("div",{className:"recommendation-score",children:[i.jsx("span",{children:"Score"}),i.jsx("strong",{children:"94"}),i.jsx("small",{children:"/100"})]})]}),H.map(F=>i.jsx(ip,{train:F,selectedClass:`${k.id}-${$.code}`,compare:P.includes(F.id),onCompare:()=>R(F.id),onSelect:nn=>x(F,nn),onExplain:(nn,Ft)=>we({title:nn,body:Ft})},F.id))]})]}),de.length>0?i.jsxs("div",{className:"compare-tray",children:[i.jsxs("div",{children:[i.jsx("strong",{children:"Compare trains"}),i.jsxs("span",{children:[de.length," selected"]})]}),i.jsx("div",{className:"compare-names",children:de.map(F=>i.jsx("span",{children:F.name},F.id))}),i.jsx("button",{className:"ux4g-btn ux4g-btn-primary ux4g-btn-md",type:"button",onClick:()=>we({title:"Side-by-side comparison",body:de.map(F=>`${F.name}: ${F.duration}, from ₹${F.classes[0].fare.toLocaleString("en-IN")}, ${F.classes[0].status==="available"?`${F.classes[0].seats} seats available`:`${F.classes[0].status.toUpperCase()} ${F.classes[0].position}`}`).join(" · ")}),children:"Compare now"})]}):null]})},Ue={train:k,selectedClass:$,selectedSeats:oe,passengers:Ce,keepTogether:Ze,seatPreference:ze,quota:d.quota},ft=()=>Ie==="confirmation"?Ar():i.jsxs("div",{className:"booking-page page-container",children:[i.jsxs("div",{className:"breadcrumbs",children:[i.jsx("button",{type:"button",onClick:()=>S("results"),children:"Search results"}),i.jsx(j,{name:"chevron_right"}),i.jsx("span",{children:"Book your journey"})]}),i.jsxs("div",{className:"booking-header",children:[i.jsxs("div",{children:[i.jsxs("p",{className:"eyebrow",children:[k.number," · ",k.name]}),i.jsx("h1",{children:"Book with confidence"}),i.jsxs("p",{children:[k.departure," ",k.sourceCode," → ",k.arrival," ",k.destinationCode," · ",$.code," · ",d.quota]})]}),i.jsx(ee,{tone:"info",icon:"science",children:"Mock booking flow"})]}),i.jsx(sp,{active:Ie}),i.jsxs("div",{className:"booking-layout",children:[i.jsxs("div",{className:"booking-main",children:[Ie==="seats"?i.jsxs("section",{className:"booking-section",children:[i.jsxs("div",{className:"section-heading",children:[i.jsxs("div",{children:[i.jsx("p",{className:"eyebrow",children:"Step 1 of 4"}),i.jsx("h2",{children:"Choose where you want to sit"}),i.jsx("p",{children:"We will try to keep your passengers together, but we will not promise seats that are not available."})]}),i.jsxs(ee,{tone:"success",children:[oe.length,"/",d.passengers," seats selected"]})]}),i.jsxs("div",{className:"choice-card ux4g-card ux4g-card-outline ux4g-card-vertical",children:[i.jsxs("div",{className:"choice-card-header",children:[i.jsxs("div",{children:[i.jsx("h3",{children:"Travelling as a family or group?"}),i.jsx("p",{children:"Tell us your preference so we can show the trade-off clearly."})]}),i.jsxs("label",{className:"ux4g-switch ux4g-switch-md",children:[i.jsx("input",{type:"checkbox",checked:Ze,onChange:H=>Ln(H.target.checked)}),i.jsx("span",{})]})]}),Ze?i.jsxs("div",{className:"preference-options",children:[i.jsxs("label",{className:"ux4g-radio ux4g-radio-md",children:[i.jsx("input",{type:"radio",name:"seat-preference",checked:ze==="together",onChange:()=>Me("together")}),i.jsx("span",{children:"Keep passengers together"})]}),i.jsxs("label",{className:"ux4g-radio ux4g-radio-md",children:[i.jsx("input",{type:"radio",name:"seat-preference",checked:ze==="same-coach",onChange:()=>Me("same-coach")}),i.jsx("span",{children:"Same coach, if possible"})]}),i.jsxs("label",{className:"ux4g-radio ux4g-radio-md",children:[i.jsx("input",{type:"radio",name:"seat-preference",checked:ze==="any",onChange:()=>Me("any")}),i.jsx("span",{children:"Any available seats"})]})]}):i.jsxs("div",{className:"choice-muted",children:[i.jsx(j,{name:"info"})," We will assign the best available seats for each passenger."]})]}),i.jsxs("div",{className:"coach-section",children:[i.jsxs("div",{className:"section-heading",children:[i.jsxs("div",{children:[i.jsx("h3",{children:"Choose a coach"}),i.jsx("p",{children:"Coach placement is indicative until allocation is confirmed."})]}),i.jsxs("span",{className:"selection-note",children:[i.jsx(j,{name:"touch_app"})," Select to preview"]})]}),i.jsx(Oc,{selectedCoach:fe,onSelect:De})]}),i.jsxs("div",{className:"seat-section",children:[i.jsx("div",{className:"section-heading",children:i.jsxs("div",{children:[i.jsxs("h3",{children:["Choose seats in ",fe]}),i.jsx("p",{children:"Selected seats will be requested for your passengers."})]})}),i.jsx(op,{selectedSeats:oe,onToggle:W})]}),i.jsxs("div",{className:"booking-actions",children:[i.jsx("button",{className:"ux4g-btn ux4g-btn-outline-primary ux4g-btn-md",type:"button",onClick:()=>S("results"),children:"Back"}),i.jsxs("button",{className:"ux4g-btn ux4g-btn-primary ux4g-btn-md",type:"button",disabled:oe.length!==d.passengers,onClick:()=>be("passengers"),children:["Continue to passengers ",i.jsx(j,{name:"arrow_forward"})]})]})]}):null,Ie==="passengers"?i.jsxs("section",{className:"booking-section",children:[i.jsxs("div",{className:"section-heading",children:[i.jsxs("div",{children:[i.jsx("p",{className:"eyebrow",children:"Step 2 of 4"}),i.jsx("h2",{children:"Who is travelling?"}),i.jsx("p",{children:"Use names exactly as they should appear on the ticket. This is mock passenger data."})]}),i.jsxs(ee,{tone:"info",children:[Ce.length," passengers"]})]}),i.jsxs("div",{className:"ux4g-alert ux4g-alert-info context-alert",children:[i.jsx(j,{name:"info"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Keep details ready for Tatkal"}),i.jsx("p",{children:"For Tatkal, passenger details may be needed quickly when the booking window opens."})]})]}),i.jsx(lp,{passengers:Ce,onChange:ln}),i.jsxs("div",{className:"booking-actions",children:[i.jsx("button",{className:"ux4g-btn ux4g-btn-outline-primary ux4g-btn-md",type:"button",onClick:()=>be("seats"),children:"Back"}),i.jsxs("button",{className:"ux4g-btn ux4g-btn-primary ux4g-btn-md",type:"button",disabled:Ce.some(H=>!H.name||!H.age),onClick:()=>be("review"),children:["Review booking ",i.jsx(j,{name:"arrow_forward"})]})]})]}):null,Ie==="review"?i.jsxs("section",{className:"booking-section",children:[i.jsxs("div",{className:"section-heading",children:[i.jsxs("div",{children:[i.jsx("p",{className:"eyebrow",children:"Step 3 of 4"}),i.jsx("h2",{children:"Review before payment"}),i.jsx("p",{children:"Read the fare, seat request, and booking-state promise before continuing."})]}),i.jsx(ee,{tone:"warning",children:"Availability rechecked at payment"})]}),i.jsxs("div",{className:"ux4g-alert ux4g-alert-warning context-alert",children:[i.jsx(j,{name:"schedule"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Seats are requested, not confirmed yet"}),i.jsx("p",{children:"We will check availability again before the booking is confirmed. Payment received and booking confirmed are separate states."})]})]}),i.jsx(fp,{booking:Ue}),i.jsxs("div",{className:"booking-actions",children:[i.jsx("button",{className:"ux4g-btn ux4g-btn-outline-primary ux4g-btn-md",type:"button",onClick:()=>be("passengers"),children:"Back"}),i.jsxs("button",{className:"ux4g-btn ux4g-btn-primary ux4g-btn-md",type:"button",onClick:()=>be("payment"),children:["Continue to payment ",i.jsx(j,{name:"arrow_forward"})]})]})]}):null,Ie==="payment"?i.jsxs("section",{className:"booking-section",children:[i.jsxs("div",{className:"section-heading",children:[i.jsxs("div",{children:[i.jsx("p",{className:"eyebrow",children:"Step 4 of 4"}),i.jsx("h2",{children:"Payment and confirmation"}),i.jsx("p",{children:"Your card details are not collected in this prototype."})]}),i.jsx(ee,{tone:"info",icon:"lock",children:"Secure demo"})]}),i.jsx(mp,{status:en,onPay:V,onAvailabilityChange:Z}),i.jsx("div",{className:"booking-actions",children:i.jsx("button",{className:"ux4g-btn ux4g-btn-outline-primary ux4g-btn-md",type:"button",onClick:()=>be("review"),children:"Back"})})]}):null]}),i.jsx(gp,{booking:Ue,onChangeClass:()=>S("results")})]})]}),Ar=()=>i.jsxs("div",{className:"confirmation-page page-container",children:[i.jsxs("div",{className:"confirmation-hero",children:[i.jsx("div",{className:"confirmation-mark",children:i.jsx(j,{name:"check"})}),i.jsx(ee,{tone:"success",children:"Mock booking confirmed"}),i.jsx("h1",{children:"Your journey is ready"}),i.jsx("p",{children:"Your payment and booking are shown as separate states. This confirmation uses mock railway data and does not reserve a real seat."})]}),i.jsxs("div",{className:"confirmation-grid",children:[i.jsxs("div",{className:"confirmation-main",children:[i.jsxs("div",{className:"ux4g-card ux4g-card-solid ux4g-card-vertical pnr-card",children:[i.jsxs("div",{className:"pnr-top",children:[i.jsxs("div",{children:[i.jsx("p",{className:"eyebrow",children:"Demo PNR"}),i.jsx("strong",{children:"4512367890"})]}),i.jsx(ee,{tone:"success",icon:"verified",children:"CONFIRMED"})]}),i.jsxs("div",{className:"pnr-route",children:[i.jsxs("div",{children:[i.jsx("strong",{children:k.sourceCode}),i.jsx("span",{children:k.departure}),i.jsx("small",{children:k.source})]}),i.jsxs("div",{className:"pnr-route-line",children:[i.jsx(j,{name:"train"}),i.jsx("span",{children:k.duration})]}),i.jsxs("div",{children:[i.jsx("strong",{children:k.destinationCode}),i.jsx("span",{children:k.arrival}),i.jsx("small",{children:k.destination})]})]}),i.jsxs("div",{className:"pnr-footer",children:[i.jsxs("span",{children:[i.jsx(j,{name:"calendar_month"})," ",Ro(d.date)]}),i.jsxs("span",{children:[i.jsx(j,{name:"airline_seat_recline_normal"})," ",fe," · ",oe.join(", ")]}),i.jsxs("span",{children:[i.jsx(j,{name:"group"})," ",Ce.length," travellers"]})]})]}),i.jsxs("div",{className:"status-distinction",children:[i.jsxs("div",{children:[i.jsx(ee,{tone:"success",children:"Payment received"}),i.jsx("p",{children:"Your demo payment has been accepted."})]}),i.jsxs("div",{children:[i.jsx(ee,{tone:"success",children:"Booking confirmed"}),i.jsx("p",{children:"Your demo seat request has moved to confirmed."})]}),i.jsxs("div",{children:[i.jsx(ee,{tone:"info",children:"Journey updates on"}),i.jsx("p",{children:"Mock notifications will appear in your journey dashboard."})]})]}),i.jsxs("div",{className:"confirmation-actions",children:[i.jsxs("button",{className:"ux4g-btn ux4g-btn-primary ux4g-btn-md",type:"button",onClick:()=>S("journey"),children:["Open journey dashboard ",i.jsx(j,{name:"arrow_forward"})]}),i.jsxs("button",{className:"ux4g-btn ux4g-btn-outline-primary ux4g-btn-md",type:"button",onClick:()=>window.print(),children:[i.jsx(j,{name:"download"})," Save summary"]})]})]}),i.jsx("aside",{children:i.jsx(qo,{})})]})]}),gt=()=>i.jsxs("div",{className:"journey-page page-container",children:[i.jsxs("div",{className:"breadcrumbs",children:[i.jsx("button",{type:"button",onClick:()=>S("home"),children:"Home"}),i.jsx(j,{name:"chevron_right"}),i.jsx("span",{children:"Journey dashboard"})]}),i.jsxs("div",{className:"journey-dashboard-header",children:[i.jsxs("div",{children:[i.jsx("p",{className:"eyebrow",children:"Your journey · Demo PNR 4512367890"}),i.jsx("h1",{children:"Chandigarh → New Delhi"}),i.jsxs("p",{children:["Tuesday, ",Ro(d.date)," · ",k.name," · ",k.number]})]}),i.jsx(ee,{tone:Ee==="CONFIRMED"?"success":"warning",icon:Ee==="CONFIRMED"?"check_circle":"schedule",children:Ee==="CONFIRMED"?"Confirmed":Ee.replace("_"," ")})]}),i.jsxs("div",{className:"journey-grid",children:[i.jsxs("main",{children:[i.jsxs("div",{className:"journey-alert ux4g-alert ux4g-alert-warning context-alert",children:[i.jsx(j,{name:"schedule"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Mock journey update"}),i.jsx("p",{children:"Your train is expected to depart at 06:15 from platform 4. Live delay data is not connected."})]})]}),i.jsxs("section",{className:"ux4g-card ux4g-card-solid ux4g-card-vertical journey-card",children:[i.jsxs("div",{className:"section-heading",children:[i.jsxs("div",{children:[i.jsx("p",{className:"eyebrow",children:"Live journey timeline"}),i.jsx("h2",{children:"What happens next"})]}),i.jsx(ee,{tone:"info",children:"Mock updates"})]}),i.jsxs("div",{className:"ux4g-journey-timeline ux4g-journey-timeline--vertical journey-timeline",children:[i.jsx(zi,{icon:"check",title:"Booking confirmed",body:"Your mock booking is confirmed.",state:"complete"}),i.jsx(zi,{icon:"notifications",title:"Boarding reminder",body:"We will remind you 30 minutes before departure.",state:"active"}),i.jsx(zi,{icon:"train",title:"Depart from Chandigarh",body:"Platform 4 · 06:15 AM"}),i.jsx(zi,{icon:"location_on",title:"Arrive at New Delhi",body:"09:25 AM · On schedule in mock data"})]})]}),i.jsxs("section",{className:"ux4g-card ux4g-card-outline ux4g-card-vertical journey-card",children:[i.jsxs("div",{className:"section-heading",children:[i.jsxs("div",{children:[i.jsx("p",{className:"eyebrow",children:"Know your seat"}),i.jsx("h2",{children:"Coach and allocation"})]}),i.jsxs(ee,{tone:"success",icon:"airline_seat_recline_normal",children:[fe," · ",oe.join(", ")]})]}),i.jsx(Oc,{selectedCoach:fe,onSelect:De}),i.jsxs("div",{className:"coach-allocation",children:[i.jsxs("div",{children:[i.jsxs("strong",{children:[fe," · ",oe[0]??"—"]}),i.jsx("span",{children:"Lower berth · Passenger 1"})]}),i.jsxs("div",{children:[i.jsxs("strong",{children:[fe," · ",oe[1]??"—"]}),i.jsx("span",{children:"Middle berth · Passenger 2"})]}),i.jsxs("p",{children:[i.jsx(j,{name:"info"})," Seats are shown as confirmed in this mock journey. Actual coach allocation depends on the connected railway service."]})]})]})]}),i.jsxs("aside",{className:"journey-sidebar",children:[i.jsx(qo,{}),i.jsxs("section",{className:"ux4g-card ux4g-card-solid ux4g-card-vertical refund-card",children:[i.jsxs("div",{className:"section-heading",children:[i.jsxs("div",{children:[i.jsx("p",{className:"eyebrow",children:"Need to change plans?"}),i.jsx("h2",{children:"Cancellation & refund"})]}),i.jsx(j,{name:"receipt_long"})]}),E==="idle"?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"refund-breakdown",children:[i.jsxs("span",{children:["Ticket price ",i.jsx("strong",{children:"₹1,245"})]}),i.jsxs("span",{children:["Cancellation charge ",i.jsx("strong",{children:"₹180"})]}),i.jsxs("span",{children:["Other charges ",i.jsx("strong",{children:"₹20"})]}),i.jsx("hr",{}),i.jsxs("span",{className:"refund-total",children:["Estimated refund ",i.jsx("strong",{children:"₹1,045"})]})]}),i.jsx("p",{className:"refund-note",children:"Expected in 3–5 business days to your original payment method."}),i.jsx("button",{className:"ux4g-btn ux4g-btn-danger ux4g-btn-md",type:"button",onClick:()=>T("confirming"),children:"Review cancellation"})]}):E==="confirming"?i.jsxs("div",{className:"refund-confirm",children:[i.jsxs("div",{className:"ux4g-alert ux4g-alert-warning context-alert",children:[i.jsx(j,{name:"warning"}),i.jsxs("div",{children:[i.jsx("strong",{children:"You will receive approximately ₹1,045"}),i.jsx("p",{children:"₹180 cancellation charge and ₹20 non-refundable charges will be deducted."})]})]}),i.jsxs("div",{className:"refund-actions",children:[i.jsx("button",{className:"ux4g-btn ux4g-btn-outline-primary ux4g-btn-md",type:"button",onClick:()=>T("idle"),children:"Keep ticket"}),i.jsx("button",{className:"ux4g-btn ux4g-btn-danger ux4g-btn-md",type:"button",onClick:()=>{T("initiated"),te("REFUND_PENDING")},children:"Confirm cancellation"})]})]}):i.jsxs("div",{className:"ux4g-alert ux4g-alert-success context-alert",children:[i.jsx(j,{name:"check_circle"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Refund initiated in prototype"}),i.jsx("p",{children:"Refund ID REF123456 · Expected in 3–5 business days. No real payment was processed."})]})]})]})]})]})]}),zt=()=>i.jsxs("div",{className:"support-page page-container",children:[i.jsxs("div",{className:"support-hero",children:[i.jsxs("div",{children:[i.jsx(ee,{tone:"brand",icon:"support_agent",children:"Support centre"}),i.jsx("h1",{children:"Help that knows where you are in the journey."}),i.jsx("p",{children:"Get plain-language explanations for railway terms, booking problems, refunds, and journey updates."})]}),i.jsxs("div",{className:"support-search",children:[i.jsxs("label",{className:"ux4g-form-group",children:[i.jsx("span",{children:"Search help"}),i.jsxs("div",{className:"ux4g-input-container ux4g-input-md ux4g-input-default",children:[i.jsx(j,{name:"search"}),i.jsx("input",{placeholder:"Try “What does RAC mean?”"})]})]}),i.jsx("button",{className:"ux4g-btn ux4g-btn-primary ux4g-btn-md",type:"button",children:"Search help"})]})]}),i.jsxs("div",{className:"support-grid",children:[i.jsxs("main",{children:[i.jsxs("div",{className:"section-heading",children:[i.jsxs("div",{children:[i.jsx("p",{className:"eyebrow",children:"Popular questions"}),i.jsx("h2",{children:"Start with an answer"})]}),i.jsx(ee,{tone:"info",children:"Plain language"})]}),i.jsx(up,{}),i.jsxs("div",{className:"support-options",children:[i.jsxs("article",{className:"ux4g-card ux4g-card-outline ux4g-card-vertical",children:[i.jsx(j,{name:"receipt_long"}),i.jsx("h3",{children:"Booking-specific support"}),i.jsx("p",{children:"Get help with payment, cancellation, refunds, and status changes for a specific journey."}),i.jsxs("button",{className:"ux4g-btn ux4g-btn-outline-primary ux4g-btn-md",type:"button",onClick:()=>S("journey"),children:["Open a journey ",i.jsx(j,{name:"arrow_forward"})]})]}),i.jsxs("article",{className:"ux4g-card ux4g-card-outline ux4g-card-vertical",children:[i.jsx(j,{name:"person"}),i.jsx("h3",{children:"Talk to a human"}),i.jsx("p",{children:"Escalate a problem when the assistant or help centre cannot resolve it."}),i.jsx("button",{className:"ux4g-btn ux4g-btn-outline-primary ux4g-btn-md",type:"button",onClick:()=>we({title:"Human support is a prototype path",body:"In production this would create a support case with your booking context. No case is actually submitted from this demo."}),children:"See escalation path"})]})]})]}),i.jsx("aside",{children:i.jsx(qo,{})})]})]});return i.jsxs("div",{className:"app-root",children:[i.jsx("a",{className:"skip-link",href:"#main-content",children:"Skip to main content"}),i.jsx("div",{className:"ux4g-topbar",children:i.jsxs("div",{className:"ux4g-topbar__wrap page-container",children:[i.jsx("span",{children:"Government-ready railway booking prototype"}),i.jsxs("div",{className:"topbar-actions",children:[i.jsxs("button",{type:"button",onClick:()=>fn(Y==="light"?"dark":"light"),children:[i.jsx(j,{name:Y==="light"?"dark_mode":"light_mode"})," ",Y==="light"?"Dark mode":"Light mode"]}),i.jsx("span",{className:"topbar-divider"}),i.jsx("button",{type:"button",onClick:()=>we({title:"Accessibility first",body:"This prototype uses semantic landmarks, visible focus, keyboard-friendly controls, readable status copy, and touch-sized interactive targets. Use your browser zoom to test the layout."}),children:"Accessibility"})]})]})}),i.jsx("header",{className:"ux4g-navbar app-navbar",children:i.jsxs("div",{className:"ux4g-navbar-wrap page-container",children:[i.jsxs("button",{className:"brand-lockup",type:"button",onClick:()=>S("home"),children:[i.jsx("span",{className:"brand-mark",children:i.jsx(j,{name:"train"})}),i.jsxs("span",{children:[i.jsx("strong",{children:"RailConnect"}),i.jsx("small",{children:"Indian railway booking"})]})]}),i.jsxs("nav",{className:"main-nav","aria-label":"Main navigation",children:[i.jsx("button",{className:`nav-link ${h==="home"?"active":""}`,type:"button",onClick:()=>S("home"),children:"Book a journey"}),i.jsx("button",{className:`nav-link ${h==="journey"?"active":""}`,type:"button",onClick:()=>S("journey"),children:"Trips & PNR"}),i.jsx("button",{className:`nav-link ${h==="support"?"active":""}`,type:"button",onClick:()=>S("support"),children:"Help centre"})]}),i.jsxs("div",{className:"navbar-actions",children:[i.jsx(dp,{count:3,onClick:()=>ne(!0)}),i.jsx("button",{className:"ux4g-btn ux4g-btn-outline-primary ux4g-btn-sm",type:"button",children:"Sign in"})]})]})}),i.jsxs("main",{id:"main-content",children:[h==="home"?Q():null,h==="results"?re():null,h==="booking"?ft():null,h==="journey"?gt():null,h==="support"?zt():null]}),i.jsx("footer",{className:"ux4g-footer-wrapper ux4g-footer-primary app-footer",children:i.jsxs("div",{className:"ux4g-footer-row page-container",children:[i.jsxs("div",{children:[i.jsx("strong",{children:"RailConnect"}),i.jsx("p",{children:"A clearer prototype for a complex public-service journey."})]}),i.jsxs("div",{className:"footer-links",children:[i.jsx("button",{type:"button",onClick:()=>S("support"),children:"Help centre"}),i.jsx("button",{type:"button",onClick:()=>we({title:"About this prototype",body:"RailConnect is a UX4G-based competition prototype. It preserves core railway concepts while making statuses, trade-offs, and next steps clearer."}),children:"About"}),i.jsx("span",{children:"© 2026 Prototype"})]})]})}),J?i.jsx(ap,{title:J.title,body:J.body,onClose:()=>we(null)}):null,We?i.jsx(cp,{onClose:()=>ne(!1)}):null]})}function fp({booking:h}){return i.jsxs("div",{className:"review-card ux4g-card ux4g-card-solid ux4g-card-vertical",children:[i.jsxs("div",{className:"review-card-heading",children:[i.jsxs("div",{children:[i.jsx("p",{className:"eyebrow",children:"Journey summary"}),i.jsx("h3",{children:h.train.name}),i.jsxs("p",{children:[h.train.departure," ",h.train.sourceCode," → ",h.train.arrival," ",h.train.destinationCode]})]}),i.jsx(ee,{tone:"brand",children:h.quota})]}),i.jsxs("div",{className:"review-grid",children:[i.jsxs("div",{children:[i.jsx("span",{children:"Seats requested"}),i.jsx("strong",{children:h.selectedSeats.map(C=>`${h.train.id==="vande-bharat-20977"?"B2":"B1"}-${C}`).join(", ")})]}),i.jsxs("div",{children:[i.jsx("span",{children:"Passengers"}),i.jsx("strong",{children:h.passengers.length})]}),i.jsxs("div",{children:[i.jsx("span",{children:"Seat preference"}),i.jsx("strong",{children:h.keepTogether?h.seatPreference==="same-coach"?"Same coach":h.seatPreference==="any"?"Any available":"Keep together":"No preference"})]}),i.jsxs("div",{children:[i.jsx("span",{children:"Fare"}),i.jsxs("strong",{children:["₹",h.selectedClass.fare.toLocaleString("en-IN")]})]})]})]})}function gp({booking:h,onChangeClass:C}){return i.jsxs("aside",{className:"booking-summary ux4g-card ux4g-card-solid ux4g-card-vertical",children:[i.jsxs("div",{className:"summary-heading",children:[i.jsxs("div",{children:[i.jsx("p",{className:"eyebrow",children:"Your booking"}),i.jsx("h2",{children:"Fare summary"})]}),i.jsx(ee,{tone:"info",children:"Mock fare"})]}),i.jsxs("div",{className:"summary-train",children:[i.jsxs("div",{children:[i.jsx("strong",{children:h.train.sourceCode}),i.jsx("span",{children:h.train.departure})]}),i.jsx(j,{name:"arrow_forward"}),i.jsxs("div",{children:[i.jsx("strong",{children:h.train.destinationCode}),i.jsx("span",{children:h.train.arrival})]})]}),i.jsxs("div",{className:"summary-class",children:[i.jsxs("div",{children:[i.jsxs("strong",{children:[h.selectedClass.code," · ",h.selectedClass.label]}),i.jsxs("span",{children:[h.quota," quota"]})]}),i.jsx("button",{className:"ux4g-text-link-md",type:"button",onClick:C,children:"Change"})]}),i.jsxs("div",{className:"summary-lines",children:[i.jsxs("span",{children:["Base fare ",i.jsxs("strong",{children:["₹",h.selectedClass.fare.toLocaleString("en-IN")]})]}),i.jsxs("span",{children:["Reservation fee ",i.jsx("strong",{children:"₹40"})]}),i.jsxs("span",{children:["Convenience fee ",i.jsx("strong",{children:"₹20"})]}),i.jsx("hr",{}),i.jsxs("span",{className:"summary-total",children:["Total ",i.jsxs("strong",{children:["₹",(h.selectedClass.fare+60).toLocaleString("en-IN")]})]})]}),i.jsxs("div",{className:"summary-note",children:[i.jsx(j,{name:"verified_user"}),i.jsx("p",{children:"Final availability is checked again before confirmation."})]})]})}function mp({status:h,onPay:C,onAvailabilityChange:d}){return h==="processing"?i.jsxs("div",{className:"payment-state",children:[i.jsx("span",{className:"ux4g-spinner-primary-full ux4g-spinner-md",role:"status","aria-label":"Processing demo payment"}),i.jsx("h3",{children:"Checking availability and processing demo payment"}),i.jsx("p",{children:"Payment and booking confirmation are being kept as separate states."})]}):h==="received"?i.jsxs("div",{className:"ux4g-alert ux4g-alert-warning context-alert availability-change",children:[i.jsx(j,{name:"warning"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Availability changed"}),i.jsx("p",{children:"The seat request is no longer available. Demo payment was received, so we are verifying the booking instead of silently continuing."}),i.jsx(ee,{tone:"warning",children:"Payment received · Booking pending"}),i.jsx("button",{className:"ux4g-btn ux4g-btn-outline-primary ux4g-btn-md",type:"button",children:"View booking status"})]})]}):i.jsxs("div",{className:"payment-panel",children:[i.jsxs("div",{className:"payment-method",children:[i.jsx("div",{className:"payment-method-icon",children:i.jsx(j,{name:"account_balance_wallet"})}),i.jsxs("div",{children:[i.jsx("strong",{children:"UPI or card"}),i.jsx("span",{children:"Demo payment form · no card details are collected"})]}),i.jsx(ee,{tone:"success",icon:"lock",children:"Secure"})]}),i.jsxs("div",{className:"payment-disclosure",children:[i.jsx(j,{name:"info"}),i.jsx("p",{children:"Before payment, we will check availability again. If it changes, you will see exactly whether payment was received and whether booking is still pending."})]}),i.jsxs("div",{className:"payment-actions",children:[i.jsxs("button",{className:"ux4g-btn ux4g-btn-primary ux4g-btn-md",type:"button",onClick:C,children:[i.jsx(j,{name:"lock"})," Pay ₹1,305 securely"]}),i.jsx("button",{className:"ux4g-btn ux4g-btn-text-neutral ux4g-btn-md",type:"button",onClick:d,children:"Simulate availability change"})]})]})}function zi({icon:h,title:C,body:d,state:M=""}){return i.jsxs("div",{className:`ux4g-journey-timeline-item ${M}`,children:[i.jsx("div",{className:"ux4g-journey-timeline-marker",children:i.jsx(j,{name:h})}),i.jsxs("div",{className:"ux4g-journey-timeline-content",children:[i.jsx("strong",{children:C}),i.jsx("p",{children:d})]})]})}Gd.createRoot(document.getElementById("root")).render(i.jsx(zd.StrictMode,{children:i.jsx(hp,{})}));
