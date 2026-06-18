(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var fg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _g(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var N_={exports:{}},jc={},E_={exports:{}},Lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xa=Symbol.for("react.element"),pg=Symbol.for("react.portal"),mg=Symbol.for("react.fragment"),gg=Symbol.for("react.strict_mode"),yg=Symbol.for("react.profiler"),vg=Symbol.for("react.provider"),xg=Symbol.for("react.context"),wg=Symbol.for("react.forward_ref"),bg=Symbol.for("react.suspense"),kg=Symbol.for("react.memo"),jg=Symbol.for("react.lazy"),zh=Symbol.iterator;function Cg(e){return e===null||typeof e!="object"?null:(e=zh&&e[zh]||e["@@iterator"],typeof e=="function"?e:null)}var I_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R_=Object.assign,P_={};function Ci(e,t,n){this.props=e,this.context=t,this.refs=P_,this.updater=n||I_}Ci.prototype.isReactComponent={};Ci.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ci.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function L_(){}L_.prototype=Ci.prototype;function Rd(e,t,n){this.props=e,this.context=t,this.refs=P_,this.updater=n||I_}var Pd=Rd.prototype=new L_;Pd.constructor=Rd;R_(Pd,Ci.prototype);Pd.isPureReactComponent=!0;var Wh=Array.isArray,T_=Object.prototype.hasOwnProperty,Ld={current:null},A_={key:!0,ref:!0,__self:!0,__source:!0};function $_(e,t,n){var o,s={},i=null,c=null;if(t!=null)for(o in t.ref!==void 0&&(c=t.ref),t.key!==void 0&&(i=""+t.key),t)T_.call(t,o)&&!A_.hasOwnProperty(o)&&(s[o]=t[o]);var _=arguments.length-2;if(_===1)s.children=n;else if(1<_){for(var f=Array(_),w=0;w<_;w++)f[w]=arguments[w+2];s.children=f}if(e&&e.defaultProps)for(o in _=e.defaultProps,_)s[o]===void 0&&(s[o]=_[o]);return{$$typeof:Xa,type:e,key:i,ref:c,props:s,_owner:Ld.current}}function Sg(e,t){return{$$typeof:Xa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Td(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xa}function Mg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Hh=/\/+/g;function Yc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Mg(""+e.key):t.toString(36)}function Ol(e,t,n,o,s){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var c=!1;if(e===null)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case Xa:case pg:c=!0}}if(c)return c=e,s=s(c),e=o===""?"."+Yc(c,0):o,Wh(s)?(n="",e!=null&&(n=e.replace(Hh,"$&/")+"/"),Ol(s,t,n,"",function(w){return w})):s!=null&&(Td(s)&&(s=Sg(s,n+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(Hh,"$&/")+"/")+e)),t.push(s)),1;if(c=0,o=o===""?".":o+":",Wh(e))for(var _=0;_<e.length;_++){i=e[_];var f=o+Yc(i,_);c+=Ol(i,t,n,f,s)}else if(f=Cg(e),typeof f=="function")for(e=f.call(e),_=0;!(i=e.next()).done;)i=i.value,f=o+Yc(i,_++),c+=Ol(i,t,n,f,s);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function cl(e,t,n){if(e==null)return e;var o=[],s=0;return Ol(e,o,"","",function(i){return t.call(n,i,s++)}),o}function Ng(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var zn={current:null},Fl={transition:null},Eg={ReactCurrentDispatcher:zn,ReactCurrentBatchConfig:Fl,ReactCurrentOwner:Ld};function D_(){throw Error("act(...) is not supported in production builds of React.")}Lt.Children={map:cl,forEach:function(e,t,n){cl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return cl(e,function(){t++}),t},toArray:function(e){return cl(e,function(t){return t})||[]},only:function(e){if(!Td(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Lt.Component=Ci;Lt.Fragment=mg;Lt.Profiler=yg;Lt.PureComponent=Rd;Lt.StrictMode=gg;Lt.Suspense=bg;Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Eg;Lt.act=D_;Lt.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=R_({},e.props),s=e.key,i=e.ref,c=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,c=Ld.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var _=e.type.defaultProps;for(f in t)T_.call(t,f)&&!A_.hasOwnProperty(f)&&(o[f]=t[f]===void 0&&_!==void 0?_[f]:t[f])}var f=arguments.length-2;if(f===1)o.children=n;else if(1<f){_=Array(f);for(var w=0;w<f;w++)_[w]=arguments[w+2];o.children=_}return{$$typeof:Xa,type:e.type,key:s,ref:i,props:o,_owner:c}};Lt.createContext=function(e){return e={$$typeof:xg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vg,_context:e},e.Consumer=e};Lt.createElement=$_;Lt.createFactory=function(e){var t=$_.bind(null,e);return t.type=e,t};Lt.createRef=function(){return{current:null}};Lt.forwardRef=function(e){return{$$typeof:wg,render:e}};Lt.isValidElement=Td;Lt.lazy=function(e){return{$$typeof:jg,_payload:{_status:-1,_result:e},_init:Ng}};Lt.memo=function(e,t){return{$$typeof:kg,type:e,compare:t===void 0?null:t}};Lt.startTransition=function(e){var t=Fl.transition;Fl.transition={};try{e()}finally{Fl.transition=t}};Lt.unstable_act=D_;Lt.useCallback=function(e,t){return zn.current.useCallback(e,t)};Lt.useContext=function(e){return zn.current.useContext(e)};Lt.useDebugValue=function(){};Lt.useDeferredValue=function(e){return zn.current.useDeferredValue(e)};Lt.useEffect=function(e,t){return zn.current.useEffect(e,t)};Lt.useId=function(){return zn.current.useId()};Lt.useImperativeHandle=function(e,t,n){return zn.current.useImperativeHandle(e,t,n)};Lt.useInsertionEffect=function(e,t){return zn.current.useInsertionEffect(e,t)};Lt.useLayoutEffect=function(e,t){return zn.current.useLayoutEffect(e,t)};Lt.useMemo=function(e,t){return zn.current.useMemo(e,t)};Lt.useReducer=function(e,t,n){return zn.current.useReducer(e,t,n)};Lt.useRef=function(e){return zn.current.useRef(e)};Lt.useState=function(e){return zn.current.useState(e)};Lt.useSyncExternalStore=function(e,t,n){return zn.current.useSyncExternalStore(e,t,n)};Lt.useTransition=function(){return zn.current.useTransition()};Lt.version="18.3.1";E_.exports=Lt;var N=E_.exports;const O_=_g(N);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig=N,Rg=Symbol.for("react.element"),Pg=Symbol.for("react.fragment"),Lg=Object.prototype.hasOwnProperty,Tg=Ig.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ag={key:!0,ref:!0,__self:!0,__source:!0};function F_(e,t,n){var o,s={},i=null,c=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(c=t.ref);for(o in t)Lg.call(t,o)&&!Ag.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)s[o]===void 0&&(s[o]=t[o]);return{$$typeof:Rg,type:e,key:i,ref:c,props:s,_owner:Tg.current}}jc.Fragment=Pg;jc.jsx=F_;jc.jsxs=F_;N_.exports=jc;var r=N_.exports,Pu={},B_={exports:{}},cr={},z_={exports:{}},W_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(G,pe){var Ee=G.length;G.push(pe);e:for(;0<Ee;){var Ge=Ee-1>>>1,qe=G[Ge];if(0<s(qe,pe))G[Ge]=pe,G[Ee]=qe,Ee=Ge;else break e}}function n(G){return G.length===0?null:G[0]}function o(G){if(G.length===0)return null;var pe=G[0],Ee=G.pop();if(Ee!==pe){G[0]=Ee;e:for(var Ge=0,qe=G.length,St=qe>>>1;Ge<St;){var $t=2*(Ge+1)-1,Qe=G[$t],ut=$t+1,Xt=G[ut];if(0>s(Qe,Ee))ut<qe&&0>s(Xt,Qe)?(G[Ge]=Xt,G[ut]=Ee,Ge=ut):(G[Ge]=Qe,G[$t]=Ee,Ge=$t);else if(ut<qe&&0>s(Xt,Ee))G[Ge]=Xt,G[ut]=Ee,Ge=ut;else break e}}return pe}function s(G,pe){var Ee=G.sortIndex-pe.sortIndex;return Ee!==0?Ee:G.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var c=Date,_=c.now();e.unstable_now=function(){return c.now()-_}}var f=[],w=[],j=1,b=null,v=3,E=!1,I=!1,y=!1,Z=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(G){for(var pe=n(w);pe!==null;){if(pe.callback===null)o(w);else if(pe.startTime<=G)o(w),pe.sortIndex=pe.expirationTime,t(f,pe);else break;pe=n(w)}}function A(G){if(y=!1,O(G),!I)if(n(f)!==null)I=!0,Re(q);else{var pe=n(w);pe!==null&&yt(A,pe.startTime-G)}}function q(G,pe){I=!1,y&&(y=!1,C(ce),ce=-1),E=!0;var Ee=v;try{for(O(pe),b=n(f);b!==null&&(!(b.expirationTime>pe)||G&&!we());){var Ge=b.callback;if(typeof Ge=="function"){b.callback=null,v=b.priorityLevel;var qe=Ge(b.expirationTime<=pe);pe=e.unstable_now(),typeof qe=="function"?b.callback=qe:b===n(f)&&o(f),O(pe)}else o(f);b=n(f)}if(b!==null)var St=!0;else{var $t=n(w);$t!==null&&yt(A,$t.startTime-pe),St=!1}return St}finally{b=null,v=Ee,E=!1}}var ae=!1,J=null,ce=-1,se=5,te=-1;function we(){return!(e.unstable_now()-te<se)}function me(){if(J!==null){var G=e.unstable_now();te=G;var pe=!0;try{pe=J(!0,G)}finally{pe?nt():(ae=!1,J=null)}}else ae=!1}var nt;if(typeof L=="function")nt=function(){L(me)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,ft=rt.port2;rt.port1.onmessage=me,nt=function(){ft.postMessage(null)}}else nt=function(){Z(me,0)};function Re(G){J=G,ae||(ae=!0,nt())}function yt(G,pe){ce=Z(function(){G(e.unstable_now())},pe)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(G){G.callback=null},e.unstable_continueExecution=function(){I||E||(I=!0,Re(q))},e.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):se=0<G?Math.floor(1e3/G):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(f)},e.unstable_next=function(G){switch(v){case 1:case 2:case 3:var pe=3;break;default:pe=v}var Ee=v;v=pe;try{return G()}finally{v=Ee}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(G,pe){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var Ee=v;v=G;try{return pe()}finally{v=Ee}},e.unstable_scheduleCallback=function(G,pe,Ee){var Ge=e.unstable_now();switch(typeof Ee=="object"&&Ee!==null?(Ee=Ee.delay,Ee=typeof Ee=="number"&&0<Ee?Ge+Ee:Ge):Ee=Ge,G){case 1:var qe=-1;break;case 2:qe=250;break;case 5:qe=1073741823;break;case 4:qe=1e4;break;default:qe=5e3}return qe=Ee+qe,G={id:j++,callback:pe,priorityLevel:G,startTime:Ee,expirationTime:qe,sortIndex:-1},Ee>Ge?(G.sortIndex=Ee,t(w,G),n(f)===null&&G===n(w)&&(y?(C(ce),ce=-1):y=!0,yt(A,Ee-Ge))):(G.sortIndex=qe,t(f,G),I||E||(I=!0,Re(q))),G},e.unstable_shouldYield=we,e.unstable_wrapCallback=function(G){var pe=v;return function(){var Ee=v;v=pe;try{return G.apply(this,arguments)}finally{v=Ee}}}})(W_);z_.exports=W_;var $g=z_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg=N,lr=$g;function Se(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var H_=new Set,Na={};function Ss(e,t){gi(e,t),gi(e+"Capture",t)}function gi(e,t){for(Na[e]=t,e=0;e<t.length;e++)H_.add(t[e])}var fo=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lu=Object.prototype.hasOwnProperty,Og=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uh={},Vh={};function Fg(e){return Lu.call(Vh,e)?!0:Lu.call(Uh,e)?!1:Og.test(e)?Vh[e]=!0:(Uh[e]=!0,!1)}function Bg(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zg(e,t,n,o){if(t===null||typeof t>"u"||Bg(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Wn(e,t,n,o,s,i,c){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=c}var Mn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Mn[e]=new Wn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Mn[t]=new Wn(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Mn[e]=new Wn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Mn[e]=new Wn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Mn[e]=new Wn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Mn[e]=new Wn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Mn[e]=new Wn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Mn[e]=new Wn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Mn[e]=new Wn(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ad=/[\-:]([a-z])/g;function $d(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ad,$d);Mn[t]=new Wn(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ad,$d);Mn[t]=new Wn(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ad,$d);Mn[t]=new Wn(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Mn[e]=new Wn(e,1,!1,e.toLowerCase(),null,!1,!1)});Mn.xlinkHref=new Wn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Mn[e]=new Wn(e,1,!1,e.toLowerCase(),null,!0,!0)});function Dd(e,t,n,o){var s=Mn.hasOwnProperty(t)?Mn[t]:null;(s!==null?s.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zg(t,n,s,o)&&(n=null),o||s===null?Fg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,o=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var go=Dg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ul=Symbol.for("react.element"),qs=Symbol.for("react.portal"),Js=Symbol.for("react.fragment"),Od=Symbol.for("react.strict_mode"),Tu=Symbol.for("react.profiler"),U_=Symbol.for("react.provider"),V_=Symbol.for("react.context"),Fd=Symbol.for("react.forward_ref"),Au=Symbol.for("react.suspense"),$u=Symbol.for("react.suspense_list"),Bd=Symbol.for("react.memo"),Ro=Symbol.for("react.lazy"),Y_=Symbol.for("react.offscreen"),Yh=Symbol.iterator;function qi(e){return e===null||typeof e!="object"?null:(e=Yh&&e[Yh]||e["@@iterator"],typeof e=="function"?e:null)}var sn=Object.assign,Xc;function ha(e){if(Xc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xc=t&&t[1]||""}return`
`+Xc+e}var Qc=!1;function Kc(e,t){if(!e||Qc)return"";Qc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(w){var o=w}Reflect.construct(e,[],t)}else{try{t.call()}catch(w){o=w}e.call(t.prototype)}else{try{throw Error()}catch(w){o=w}e()}}catch(w){if(w&&o&&typeof w.stack=="string"){for(var s=w.stack.split(`
`),i=o.stack.split(`
`),c=s.length-1,_=i.length-1;1<=c&&0<=_&&s[c]!==i[_];)_--;for(;1<=c&&0<=_;c--,_--)if(s[c]!==i[_]){if(c!==1||_!==1)do if(c--,_--,0>_||s[c]!==i[_]){var f=`
`+s[c].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=c&&0<=_);break}}}finally{Qc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ha(e):""}function Wg(e){switch(e.tag){case 5:return ha(e.type);case 16:return ha("Lazy");case 13:return ha("Suspense");case 19:return ha("SuspenseList");case 0:case 2:case 15:return e=Kc(e.type,!1),e;case 11:return e=Kc(e.type.render,!1),e;case 1:return e=Kc(e.type,!0),e;default:return""}}function Du(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Js:return"Fragment";case qs:return"Portal";case Tu:return"Profiler";case Od:return"StrictMode";case Au:return"Suspense";case $u:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case V_:return(e.displayName||"Context")+".Consumer";case U_:return(e._context.displayName||"Context")+".Provider";case Fd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Bd:return t=e.displayName||null,t!==null?t:Du(e.type)||"Memo";case Ro:t=e._payload,e=e._init;try{return Du(e(t))}catch{}}return null}function Hg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Du(t);case 8:return t===Od?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yo(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function X_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ug(e){var t=X_(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(c){o=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(c){o=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function dl(e){e._valueTracker||(e._valueTracker=Ug(e))}function Q_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=X_(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function ql(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ou(e,t){var n=t.checked;return sn({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Xh(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=Yo(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function K_(e,t){t=t.checked,t!=null&&Dd(e,"checked",t,!1)}function Fu(e,t){K_(e,t);var n=Yo(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Bu(e,t.type,Yo(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Bu(e,t,n){(t!=="number"||ql(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fa=Array.isArray;function ui(e,t,n,o){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Yo(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function zu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(Se(91));return sn({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Kh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(Se(92));if(fa(n)){if(1<n.length)throw Error(Se(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Yo(n)}}function G_(e,t){var n=Yo(t.value),o=Yo(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Gh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function q_(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?q_(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var hl,J_=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(hl=hl||document.createElement("div"),hl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=hl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ea(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vg=["Webkit","ms","Moz","O"];Object.keys(ya).forEach(function(e){Vg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ya[t]=ya[e]})});function Z_(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ya.hasOwnProperty(e)&&ya[e]?(""+t).trim():t+"px"}function ep(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,s=Z_(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,s):e[n]=s}}var Yg=sn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hu(e,t){if(t){if(Yg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(Se(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(Se(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(Se(61))}if(t.style!=null&&typeof t.style!="object")throw Error(Se(62))}}function Uu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vu=null;function zd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yu=null,di=null,hi=null;function qh(e){if(e=Ga(e)){if(typeof Yu!="function")throw Error(Se(280));var t=e.stateNode;t&&(t=Ec(t),Yu(e.stateNode,e.type,t))}}function tp(e){di?hi?hi.push(e):hi=[e]:di=e}function np(){if(di){var e=di,t=hi;if(hi=di=null,qh(e),t)for(e=0;e<t.length;e++)qh(t[e])}}function rp(e,t){return e(t)}function op(){}var Gc=!1;function sp(e,t,n){if(Gc)return e(t,n);Gc=!0;try{return rp(e,t,n)}finally{Gc=!1,(di!==null||hi!==null)&&(op(),np())}}function Ia(e,t){var n=e.stateNode;if(n===null)return null;var o=Ec(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Se(231,t,typeof n));return n}var Xu=!1;if(fo)try{var Ji={};Object.defineProperty(Ji,"passive",{get:function(){Xu=!0}}),window.addEventListener("test",Ji,Ji),window.removeEventListener("test",Ji,Ji)}catch{Xu=!1}function Xg(e,t,n,o,s,i,c,_,f){var w=Array.prototype.slice.call(arguments,3);try{t.apply(n,w)}catch(j){this.onError(j)}}var va=!1,Jl=null,Zl=!1,Qu=null,Qg={onError:function(e){va=!0,Jl=e}};function Kg(e,t,n,o,s,i,c,_,f){va=!1,Jl=null,Xg.apply(Qg,arguments)}function Gg(e,t,n,o,s,i,c,_,f){if(Kg.apply(this,arguments),va){if(va){var w=Jl;va=!1,Jl=null}else throw Error(Se(198));Zl||(Zl=!0,Qu=w)}}function Ms(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ip(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Jh(e){if(Ms(e)!==e)throw Error(Se(188))}function qg(e){var t=e.alternate;if(!t){if(t=Ms(e),t===null)throw Error(Se(188));return t!==e?null:e}for(var n=e,o=t;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(o=s.return,o!==null){n=o;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Jh(s),e;if(i===o)return Jh(s),t;i=i.sibling}throw Error(Se(188))}if(n.return!==o.return)n=s,o=i;else{for(var c=!1,_=s.child;_;){if(_===n){c=!0,n=s,o=i;break}if(_===o){c=!0,o=s,n=i;break}_=_.sibling}if(!c){for(_=i.child;_;){if(_===n){c=!0,n=i,o=s;break}if(_===o){c=!0,o=i,n=s;break}_=_.sibling}if(!c)throw Error(Se(189))}}if(n.alternate!==o)throw Error(Se(190))}if(n.tag!==3)throw Error(Se(188));return n.stateNode.current===n?e:t}function ap(e){return e=qg(e),e!==null?lp(e):null}function lp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=lp(e);if(t!==null)return t;e=e.sibling}return null}var cp=lr.unstable_scheduleCallback,Zh=lr.unstable_cancelCallback,Jg=lr.unstable_shouldYield,Zg=lr.unstable_requestPaint,dn=lr.unstable_now,e0=lr.unstable_getCurrentPriorityLevel,Wd=lr.unstable_ImmediatePriority,up=lr.unstable_UserBlockingPriority,ec=lr.unstable_NormalPriority,t0=lr.unstable_LowPriority,dp=lr.unstable_IdlePriority,Cc=null,Gr=null;function n0(e){if(Gr&&typeof Gr.onCommitFiberRoot=="function")try{Gr.onCommitFiberRoot(Cc,e,void 0,(e.current.flags&128)===128)}catch{}}var Pr=Math.clz32?Math.clz32:s0,r0=Math.log,o0=Math.LN2;function s0(e){return e>>>=0,e===0?32:31-(r0(e)/o0|0)|0}var fl=64,_l=4194304;function _a(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function tc(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,s=e.suspendedLanes,i=e.pingedLanes,c=n&268435455;if(c!==0){var _=c&~s;_!==0?o=_a(_):(i&=c,i!==0&&(o=_a(i)))}else c=n&~s,c!==0?o=_a(c):i!==0&&(o=_a(i));if(o===0)return 0;if(t!==0&&t!==o&&!(t&s)&&(s=o&-o,i=t&-t,s>=i||s===16&&(i&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-Pr(t),s=1<<n,o|=e[n],t&=~s;return o}function i0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function a0(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes;0<i;){var c=31-Pr(i),_=1<<c,f=s[c];f===-1?(!(_&n)||_&o)&&(s[c]=i0(_,t)):f<=t&&(e.expiredLanes|=_),i&=~_}}function Ku(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hp(){var e=fl;return fl<<=1,!(fl&4194240)&&(fl=64),e}function qc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pr(t),e[t]=n}function l0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Pr(n),i=1<<s;t[s]=0,o[s]=-1,e[s]=-1,n&=~i}}function Hd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-Pr(n),s=1<<o;s&t|e[o]&t&&(e[o]|=t),n&=~s}}var Vt=0;function fp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _p,Ud,pp,mp,gp,Gu=!1,pl=[],Do=null,Oo=null,Fo=null,Ra=new Map,Pa=new Map,Lo=[],c0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ef(e,t){switch(e){case"focusin":case"focusout":Do=null;break;case"dragenter":case"dragleave":Oo=null;break;case"mouseover":case"mouseout":Fo=null;break;case"pointerover":case"pointerout":Ra.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pa.delete(t.pointerId)}}function Zi(e,t,n,o,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:i,targetContainers:[s]},t!==null&&(t=Ga(t),t!==null&&Ud(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function u0(e,t,n,o,s){switch(t){case"focusin":return Do=Zi(Do,e,t,n,o,s),!0;case"dragenter":return Oo=Zi(Oo,e,t,n,o,s),!0;case"mouseover":return Fo=Zi(Fo,e,t,n,o,s),!0;case"pointerover":var i=s.pointerId;return Ra.set(i,Zi(Ra.get(i)||null,e,t,n,o,s)),!0;case"gotpointercapture":return i=s.pointerId,Pa.set(i,Zi(Pa.get(i)||null,e,t,n,o,s)),!0}return!1}function yp(e){var t=ps(e.target);if(t!==null){var n=Ms(t);if(n!==null){if(t=n.tag,t===13){if(t=ip(n),t!==null){e.blockedOn=t,gp(e.priority,function(){pp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=qu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Vu=o,n.target.dispatchEvent(o),Vu=null}else return t=Ga(n),t!==null&&Ud(t),e.blockedOn=n,!1;t.shift()}return!0}function tf(e,t,n){Bl(e)&&n.delete(t)}function d0(){Gu=!1,Do!==null&&Bl(Do)&&(Do=null),Oo!==null&&Bl(Oo)&&(Oo=null),Fo!==null&&Bl(Fo)&&(Fo=null),Ra.forEach(tf),Pa.forEach(tf)}function ea(e,t){e.blockedOn===t&&(e.blockedOn=null,Gu||(Gu=!0,lr.unstable_scheduleCallback(lr.unstable_NormalPriority,d0)))}function La(e){function t(s){return ea(s,e)}if(0<pl.length){ea(pl[0],e);for(var n=1;n<pl.length;n++){var o=pl[n];o.blockedOn===e&&(o.blockedOn=null)}}for(Do!==null&&ea(Do,e),Oo!==null&&ea(Oo,e),Fo!==null&&ea(Fo,e),Ra.forEach(t),Pa.forEach(t),n=0;n<Lo.length;n++)o=Lo[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Lo.length&&(n=Lo[0],n.blockedOn===null);)yp(n),n.blockedOn===null&&Lo.shift()}var fi=go.ReactCurrentBatchConfig,nc=!0;function h0(e,t,n,o){var s=Vt,i=fi.transition;fi.transition=null;try{Vt=1,Vd(e,t,n,o)}finally{Vt=s,fi.transition=i}}function f0(e,t,n,o){var s=Vt,i=fi.transition;fi.transition=null;try{Vt=4,Vd(e,t,n,o)}finally{Vt=s,fi.transition=i}}function Vd(e,t,n,o){if(nc){var s=qu(e,t,n,o);if(s===null)au(e,t,o,rc,n),ef(e,o);else if(u0(s,e,t,n,o))o.stopPropagation();else if(ef(e,o),t&4&&-1<c0.indexOf(e)){for(;s!==null;){var i=Ga(s);if(i!==null&&_p(i),i=qu(e,t,n,o),i===null&&au(e,t,o,rc,n),i===s)break;s=i}s!==null&&o.stopPropagation()}else au(e,t,o,null,n)}}var rc=null;function qu(e,t,n,o){if(rc=null,e=zd(o),e=ps(e),e!==null)if(t=Ms(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ip(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return rc=e,null}function vp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(e0()){case Wd:return 1;case up:return 4;case ec:case t0:return 16;case dp:return 536870912;default:return 16}default:return 16}}var Ao=null,Yd=null,zl=null;function xp(){if(zl)return zl;var e,t=Yd,n=t.length,o,s="value"in Ao?Ao.value:Ao.textContent,i=s.length;for(e=0;e<n&&t[e]===s[e];e++);var c=n-e;for(o=1;o<=c&&t[n-o]===s[i-o];o++);return zl=s.slice(e,1<o?1-o:void 0)}function Wl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ml(){return!0}function nf(){return!1}function ur(e){function t(n,o,s,i,c){this._reactName=n,this._targetInst=s,this.type=o,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var _ in e)e.hasOwnProperty(_)&&(n=e[_],this[_]=n?n(i):i[_]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ml:nf,this.isPropagationStopped=nf,this}return sn(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),t}var Si={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xd=ur(Si),Ka=sn({},Si,{view:0,detail:0}),_0=ur(Ka),Jc,Zc,ta,Sc=sn({},Ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ta&&(ta&&e.type==="mousemove"?(Jc=e.screenX-ta.screenX,Zc=e.screenY-ta.screenY):Zc=Jc=0,ta=e),Jc)},movementY:function(e){return"movementY"in e?e.movementY:Zc}}),rf=ur(Sc),p0=sn({},Sc,{dataTransfer:0}),m0=ur(p0),g0=sn({},Ka,{relatedTarget:0}),eu=ur(g0),y0=sn({},Si,{animationName:0,elapsedTime:0,pseudoElement:0}),v0=ur(y0),x0=sn({},Si,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),w0=ur(x0),b0=sn({},Si,{data:0}),of=ur(b0),k0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=C0[e])?!!t[e]:!1}function Qd(){return S0}var M0=sn({},Ka,{key:function(e){if(e.key){var t=k0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?j0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qd,charCode:function(e){return e.type==="keypress"?Wl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),N0=ur(M0),E0=sn({},Sc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sf=ur(E0),I0=sn({},Ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qd}),R0=ur(I0),P0=sn({},Si,{propertyName:0,elapsedTime:0,pseudoElement:0}),L0=ur(P0),T0=sn({},Sc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),A0=ur(T0),$0=[9,13,27,32],Kd=fo&&"CompositionEvent"in window,xa=null;fo&&"documentMode"in document&&(xa=document.documentMode);var D0=fo&&"TextEvent"in window&&!xa,wp=fo&&(!Kd||xa&&8<xa&&11>=xa),af=" ",lf=!1;function bp(e,t){switch(e){case"keyup":return $0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zs=!1;function O0(e,t){switch(e){case"compositionend":return kp(t);case"keypress":return t.which!==32?null:(lf=!0,af);case"textInput":return e=t.data,e===af&&lf?null:e;default:return null}}function F0(e,t){if(Zs)return e==="compositionend"||!Kd&&bp(e,t)?(e=xp(),zl=Yd=Ao=null,Zs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wp&&t.locale!=="ko"?null:t.data;default:return null}}var B0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!B0[e.type]:t==="textarea"}function jp(e,t,n,o){tp(o),t=oc(t,"onChange"),0<t.length&&(n=new Xd("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var wa=null,Ta=null;function z0(e){Ap(e,0)}function Mc(e){var t=ni(e);if(Q_(t))return e}function W0(e,t){if(e==="change")return t}var Cp=!1;if(fo){var tu;if(fo){var nu="oninput"in document;if(!nu){var uf=document.createElement("div");uf.setAttribute("oninput","return;"),nu=typeof uf.oninput=="function"}tu=nu}else tu=!1;Cp=tu&&(!document.documentMode||9<document.documentMode)}function df(){wa&&(wa.detachEvent("onpropertychange",Sp),Ta=wa=null)}function Sp(e){if(e.propertyName==="value"&&Mc(Ta)){var t=[];jp(t,Ta,e,zd(e)),sp(z0,t)}}function H0(e,t,n){e==="focusin"?(df(),wa=t,Ta=n,wa.attachEvent("onpropertychange",Sp)):e==="focusout"&&df()}function U0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Mc(Ta)}function V0(e,t){if(e==="click")return Mc(t)}function Y0(e,t){if(e==="input"||e==="change")return Mc(t)}function X0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tr=typeof Object.is=="function"?Object.is:X0;function Aa(e,t){if(Tr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var s=n[o];if(!Lu.call(t,s)||!Tr(e[s],t[s]))return!1}return!0}function hf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ff(e,t){var n=hf(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hf(n)}}function Mp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Np(){for(var e=window,t=ql();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ql(e.document)}return t}function Gd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Q0(e){var t=Np(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Mp(n.ownerDocument.documentElement,n)){if(o!==null&&Gd(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,i=Math.min(o.start,s);o=o.end===void 0?i:Math.min(o.end,s),!e.extend&&i>o&&(s=o,o=i,i=s),s=ff(n,i);var c=ff(n,o);s&&c&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),i>o?(e.addRange(t),e.extend(c.node,c.offset)):(t.setEnd(c.node,c.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var K0=fo&&"documentMode"in document&&11>=document.documentMode,ei=null,Ju=null,ba=null,Zu=!1;function _f(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zu||ei==null||ei!==ql(o)||(o=ei,"selectionStart"in o&&Gd(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ba&&Aa(ba,o)||(ba=o,o=oc(Ju,"onSelect"),0<o.length&&(t=new Xd("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=ei)))}function gl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ti={animationend:gl("Animation","AnimationEnd"),animationiteration:gl("Animation","AnimationIteration"),animationstart:gl("Animation","AnimationStart"),transitionend:gl("Transition","TransitionEnd")},ru={},Ep={};fo&&(Ep=document.createElement("div").style,"AnimationEvent"in window||(delete ti.animationend.animation,delete ti.animationiteration.animation,delete ti.animationstart.animation),"TransitionEvent"in window||delete ti.transitionend.transition);function Nc(e){if(ru[e])return ru[e];if(!ti[e])return e;var t=ti[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ep)return ru[e]=t[n];return e}var Ip=Nc("animationend"),Rp=Nc("animationiteration"),Pp=Nc("animationstart"),Lp=Nc("transitionend"),Tp=new Map,pf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qo(e,t){Tp.set(e,t),Ss(t,[e])}for(var ou=0;ou<pf.length;ou++){var su=pf[ou],G0=su.toLowerCase(),q0=su[0].toUpperCase()+su.slice(1);Qo(G0,"on"+q0)}Qo(Ip,"onAnimationEnd");Qo(Rp,"onAnimationIteration");Qo(Pp,"onAnimationStart");Qo("dblclick","onDoubleClick");Qo("focusin","onFocus");Qo("focusout","onBlur");Qo(Lp,"onTransitionEnd");gi("onMouseEnter",["mouseout","mouseover"]);gi("onMouseLeave",["mouseout","mouseover"]);gi("onPointerEnter",["pointerout","pointerover"]);gi("onPointerLeave",["pointerout","pointerover"]);Ss("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ss("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ss("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ss("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ss("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ss("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J0=new Set("cancel close invalid load scroll toggle".split(" ").concat(pa));function mf(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,Gg(o,t,void 0,e),e.currentTarget=null}function Ap(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],s=o.event;o=o.listeners;e:{var i=void 0;if(t)for(var c=o.length-1;0<=c;c--){var _=o[c],f=_.instance,w=_.currentTarget;if(_=_.listener,f!==i&&s.isPropagationStopped())break e;mf(s,_,w),i=f}else for(c=0;c<o.length;c++){if(_=o[c],f=_.instance,w=_.currentTarget,_=_.listener,f!==i&&s.isPropagationStopped())break e;mf(s,_,w),i=f}}}if(Zl)throw e=Qu,Zl=!1,Qu=null,e}function Jt(e,t){var n=t[od];n===void 0&&(n=t[od]=new Set);var o=e+"__bubble";n.has(o)||($p(t,e,2,!1),n.add(o))}function iu(e,t,n){var o=0;t&&(o|=4),$p(n,e,o,t)}var yl="_reactListening"+Math.random().toString(36).slice(2);function $a(e){if(!e[yl]){e[yl]=!0,H_.forEach(function(n){n!=="selectionchange"&&(J0.has(n)||iu(n,!1,e),iu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yl]||(t[yl]=!0,iu("selectionchange",!1,t))}}function $p(e,t,n,o){switch(vp(t)){case 1:var s=h0;break;case 4:s=f0;break;default:s=Vd}n=s.bind(null,t,n,e),s=void 0,!Xu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),o?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function au(e,t,n,o,s){var i=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var c=o.tag;if(c===3||c===4){var _=o.stateNode.containerInfo;if(_===s||_.nodeType===8&&_.parentNode===s)break;if(c===4)for(c=o.return;c!==null;){var f=c.tag;if((f===3||f===4)&&(f=c.stateNode.containerInfo,f===s||f.nodeType===8&&f.parentNode===s))return;c=c.return}for(;_!==null;){if(c=ps(_),c===null)return;if(f=c.tag,f===5||f===6){o=i=c;continue e}_=_.parentNode}}o=o.return}sp(function(){var w=i,j=zd(n),b=[];e:{var v=Tp.get(e);if(v!==void 0){var E=Xd,I=e;switch(e){case"keypress":if(Wl(n)===0)break e;case"keydown":case"keyup":E=N0;break;case"focusin":I="focus",E=eu;break;case"focusout":I="blur",E=eu;break;case"beforeblur":case"afterblur":E=eu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=rf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=m0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=R0;break;case Ip:case Rp:case Pp:E=v0;break;case Lp:E=L0;break;case"scroll":E=_0;break;case"wheel":E=A0;break;case"copy":case"cut":case"paste":E=w0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=sf}var y=(t&4)!==0,Z=!y&&e==="scroll",C=y?v!==null?v+"Capture":null:v;y=[];for(var L=w,O;L!==null;){O=L;var A=O.stateNode;if(O.tag===5&&A!==null&&(O=A,C!==null&&(A=Ia(L,C),A!=null&&y.push(Da(L,A,O)))),Z)break;L=L.return}0<y.length&&(v=new E(v,I,null,n,j),b.push({event:v,listeners:y}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",v&&n!==Vu&&(I=n.relatedTarget||n.fromElement)&&(ps(I)||I[_o]))break e;if((E||v)&&(v=j.window===j?j:(v=j.ownerDocument)?v.defaultView||v.parentWindow:window,E?(I=n.relatedTarget||n.toElement,E=w,I=I?ps(I):null,I!==null&&(Z=Ms(I),I!==Z||I.tag!==5&&I.tag!==6)&&(I=null)):(E=null,I=w),E!==I)){if(y=rf,A="onMouseLeave",C="onMouseEnter",L="mouse",(e==="pointerout"||e==="pointerover")&&(y=sf,A="onPointerLeave",C="onPointerEnter",L="pointer"),Z=E==null?v:ni(E),O=I==null?v:ni(I),v=new y(A,L+"leave",E,n,j),v.target=Z,v.relatedTarget=O,A=null,ps(j)===w&&(y=new y(C,L+"enter",I,n,j),y.target=O,y.relatedTarget=Z,A=y),Z=A,E&&I)t:{for(y=E,C=I,L=0,O=y;O;O=Xs(O))L++;for(O=0,A=C;A;A=Xs(A))O++;for(;0<L-O;)y=Xs(y),L--;for(;0<O-L;)C=Xs(C),O--;for(;L--;){if(y===C||C!==null&&y===C.alternate)break t;y=Xs(y),C=Xs(C)}y=null}else y=null;E!==null&&gf(b,v,E,y,!1),I!==null&&Z!==null&&gf(b,Z,I,y,!0)}}e:{if(v=w?ni(w):window,E=v.nodeName&&v.nodeName.toLowerCase(),E==="select"||E==="input"&&v.type==="file")var q=W0;else if(cf(v))if(Cp)q=Y0;else{q=U0;var ae=H0}else(E=v.nodeName)&&E.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(q=V0);if(q&&(q=q(e,w))){jp(b,q,n,j);break e}ae&&ae(e,v,w),e==="focusout"&&(ae=v._wrapperState)&&ae.controlled&&v.type==="number"&&Bu(v,"number",v.value)}switch(ae=w?ni(w):window,e){case"focusin":(cf(ae)||ae.contentEditable==="true")&&(ei=ae,Ju=w,ba=null);break;case"focusout":ba=Ju=ei=null;break;case"mousedown":Zu=!0;break;case"contextmenu":case"mouseup":case"dragend":Zu=!1,_f(b,n,j);break;case"selectionchange":if(K0)break;case"keydown":case"keyup":_f(b,n,j)}var J;if(Kd)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else Zs?bp(e,n)&&(ce="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ce="onCompositionStart");ce&&(wp&&n.locale!=="ko"&&(Zs||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&Zs&&(J=xp()):(Ao=j,Yd="value"in Ao?Ao.value:Ao.textContent,Zs=!0)),ae=oc(w,ce),0<ae.length&&(ce=new of(ce,e,null,n,j),b.push({event:ce,listeners:ae}),J?ce.data=J:(J=kp(n),J!==null&&(ce.data=J)))),(J=D0?O0(e,n):F0(e,n))&&(w=oc(w,"onBeforeInput"),0<w.length&&(j=new of("onBeforeInput","beforeinput",null,n,j),b.push({event:j,listeners:w}),j.data=J))}Ap(b,t)})}function Da(e,t,n){return{instance:e,listener:t,currentTarget:n}}function oc(e,t){for(var n=t+"Capture",o=[];e!==null;){var s=e,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Ia(e,n),i!=null&&o.unshift(Da(e,i,s)),i=Ia(e,t),i!=null&&o.push(Da(e,i,s))),e=e.return}return o}function Xs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gf(e,t,n,o,s){for(var i=t._reactName,c=[];n!==null&&n!==o;){var _=n,f=_.alternate,w=_.stateNode;if(f!==null&&f===o)break;_.tag===5&&w!==null&&(_=w,s?(f=Ia(n,i),f!=null&&c.unshift(Da(n,f,_))):s||(f=Ia(n,i),f!=null&&c.push(Da(n,f,_)))),n=n.return}c.length!==0&&e.push({event:t,listeners:c})}var Z0=/\r\n?/g,ey=/\u0000|\uFFFD/g;function yf(e){return(typeof e=="string"?e:""+e).replace(Z0,`
`).replace(ey,"")}function vl(e,t,n){if(t=yf(t),yf(e)!==t&&n)throw Error(Se(425))}function sc(){}var ed=null,td=null;function nd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var rd=typeof setTimeout=="function"?setTimeout:void 0,ty=typeof clearTimeout=="function"?clearTimeout:void 0,vf=typeof Promise=="function"?Promise:void 0,ny=typeof queueMicrotask=="function"?queueMicrotask:typeof vf<"u"?function(e){return vf.resolve(null).then(e).catch(ry)}:rd;function ry(e){setTimeout(function(){throw e})}function lu(e,t){var n=t,o=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(o===0){e.removeChild(s),La(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=s}while(n);La(t)}function Bo(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mi=Math.random().toString(36).slice(2),Kr="__reactFiber$"+Mi,Oa="__reactProps$"+Mi,_o="__reactContainer$"+Mi,od="__reactEvents$"+Mi,oy="__reactListeners$"+Mi,sy="__reactHandles$"+Mi;function ps(e){var t=e[Kr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_o]||n[Kr]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xf(e);e!==null;){if(n=e[Kr])return n;e=xf(e)}return t}e=n,n=e.parentNode}return null}function Ga(e){return e=e[Kr]||e[_o],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ni(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Se(33))}function Ec(e){return e[Oa]||null}var sd=[],ri=-1;function Ko(e){return{current:e}}function Zt(e){0>ri||(e.current=sd[ri],sd[ri]=null,ri--)}function qt(e,t){ri++,sd[ri]=e.current,e.current=t}var Xo={},Pn=Ko(Xo),qn=Ko(!1),xs=Xo;function yi(e,t){var n=e.type.contextTypes;if(!n)return Xo;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=t[i];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Jn(e){return e=e.childContextTypes,e!=null}function ic(){Zt(qn),Zt(Pn)}function wf(e,t,n){if(Pn.current!==Xo)throw Error(Se(168));qt(Pn,t),qt(qn,n)}function Dp(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var s in o)if(!(s in t))throw Error(Se(108,Hg(e)||"Unknown",s));return sn({},n,o)}function ac(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xo,xs=Pn.current,qt(Pn,e),qt(qn,qn.current),!0}function bf(e,t,n){var o=e.stateNode;if(!o)throw Error(Se(169));n?(e=Dp(e,t,xs),o.__reactInternalMemoizedMergedChildContext=e,Zt(qn),Zt(Pn),qt(Pn,e)):Zt(qn),qt(qn,n)}var lo=null,Ic=!1,cu=!1;function Op(e){lo===null?lo=[e]:lo.push(e)}function iy(e){Ic=!0,Op(e)}function Go(){if(!cu&&lo!==null){cu=!0;var e=0,t=Vt;try{var n=lo;for(Vt=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}lo=null,Ic=!1}catch(s){throw lo!==null&&(lo=lo.slice(e+1)),cp(Wd,Go),s}finally{Vt=t,cu=!1}}return null}var oi=[],si=0,lc=null,cc=0,mr=[],gr=0,ws=null,co=1,uo="";function hs(e,t){oi[si++]=cc,oi[si++]=lc,lc=e,cc=t}function Fp(e,t,n){mr[gr++]=co,mr[gr++]=uo,mr[gr++]=ws,ws=e;var o=co;e=uo;var s=32-Pr(o)-1;o&=~(1<<s),n+=1;var i=32-Pr(t)+s;if(30<i){var c=s-s%5;i=(o&(1<<c)-1).toString(32),o>>=c,s-=c,co=1<<32-Pr(t)+s|n<<s|o,uo=i+e}else co=1<<i|n<<s|o,uo=e}function qd(e){e.return!==null&&(hs(e,1),Fp(e,1,0))}function Jd(e){for(;e===lc;)lc=oi[--si],oi[si]=null,cc=oi[--si],oi[si]=null;for(;e===ws;)ws=mr[--gr],mr[gr]=null,uo=mr[--gr],mr[gr]=null,co=mr[--gr],mr[gr]=null}var ar=null,ir=null,tn=!1,Rr=null;function Bp(e,t){var n=yr(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function kf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ar=e,ir=Bo(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ar=e,ir=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ws!==null?{id:co,overflow:uo}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yr(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ar=e,ir=null,!0):!1;default:return!1}}function id(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ad(e){if(tn){var t=ir;if(t){var n=t;if(!kf(e,t)){if(id(e))throw Error(Se(418));t=Bo(n.nextSibling);var o=ar;t&&kf(e,t)?Bp(o,n):(e.flags=e.flags&-4097|2,tn=!1,ar=e)}}else{if(id(e))throw Error(Se(418));e.flags=e.flags&-4097|2,tn=!1,ar=e}}}function jf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ar=e}function xl(e){if(e!==ar)return!1;if(!tn)return jf(e),tn=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!nd(e.type,e.memoizedProps)),t&&(t=ir)){if(id(e))throw zp(),Error(Se(418));for(;t;)Bp(e,t),t=Bo(t.nextSibling)}if(jf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Se(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ir=Bo(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ir=null}}else ir=ar?Bo(e.stateNode.nextSibling):null;return!0}function zp(){for(var e=ir;e;)e=Bo(e.nextSibling)}function vi(){ir=ar=null,tn=!1}function Zd(e){Rr===null?Rr=[e]:Rr.push(e)}var ay=go.ReactCurrentBatchConfig;function na(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Se(309));var o=n.stateNode}if(!o)throw Error(Se(147,e));var s=o,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(c){var _=s.refs;c===null?delete _[i]:_[i]=c},t._stringRef=i,t)}if(typeof e!="string")throw Error(Se(284));if(!n._owner)throw Error(Se(290,e))}return e}function wl(e,t){throw e=Object.prototype.toString.call(t),Error(Se(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Cf(e){var t=e._init;return t(e._payload)}function Wp(e){function t(C,L){if(e){var O=C.deletions;O===null?(C.deletions=[L],C.flags|=16):O.push(L)}}function n(C,L){if(!e)return null;for(;L!==null;)t(C,L),L=L.sibling;return null}function o(C,L){for(C=new Map;L!==null;)L.key!==null?C.set(L.key,L):C.set(L.index,L),L=L.sibling;return C}function s(C,L){return C=Uo(C,L),C.index=0,C.sibling=null,C}function i(C,L,O){return C.index=O,e?(O=C.alternate,O!==null?(O=O.index,O<L?(C.flags|=2,L):O):(C.flags|=2,L)):(C.flags|=1048576,L)}function c(C){return e&&C.alternate===null&&(C.flags|=2),C}function _(C,L,O,A){return L===null||L.tag!==6?(L=mu(O,C.mode,A),L.return=C,L):(L=s(L,O),L.return=C,L)}function f(C,L,O,A){var q=O.type;return q===Js?j(C,L,O.props.children,A,O.key):L!==null&&(L.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Ro&&Cf(q)===L.type)?(A=s(L,O.props),A.ref=na(C,L,O),A.return=C,A):(A=Kl(O.type,O.key,O.props,null,C.mode,A),A.ref=na(C,L,O),A.return=C,A)}function w(C,L,O,A){return L===null||L.tag!==4||L.stateNode.containerInfo!==O.containerInfo||L.stateNode.implementation!==O.implementation?(L=gu(O,C.mode,A),L.return=C,L):(L=s(L,O.children||[]),L.return=C,L)}function j(C,L,O,A,q){return L===null||L.tag!==7?(L=vs(O,C.mode,A,q),L.return=C,L):(L=s(L,O),L.return=C,L)}function b(C,L,O){if(typeof L=="string"&&L!==""||typeof L=="number")return L=mu(""+L,C.mode,O),L.return=C,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case ul:return O=Kl(L.type,L.key,L.props,null,C.mode,O),O.ref=na(C,null,L),O.return=C,O;case qs:return L=gu(L,C.mode,O),L.return=C,L;case Ro:var A=L._init;return b(C,A(L._payload),O)}if(fa(L)||qi(L))return L=vs(L,C.mode,O,null),L.return=C,L;wl(C,L)}return null}function v(C,L,O,A){var q=L!==null?L.key:null;if(typeof O=="string"&&O!==""||typeof O=="number")return q!==null?null:_(C,L,""+O,A);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case ul:return O.key===q?f(C,L,O,A):null;case qs:return O.key===q?w(C,L,O,A):null;case Ro:return q=O._init,v(C,L,q(O._payload),A)}if(fa(O)||qi(O))return q!==null?null:j(C,L,O,A,null);wl(C,O)}return null}function E(C,L,O,A,q){if(typeof A=="string"&&A!==""||typeof A=="number")return C=C.get(O)||null,_(L,C,""+A,q);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case ul:return C=C.get(A.key===null?O:A.key)||null,f(L,C,A,q);case qs:return C=C.get(A.key===null?O:A.key)||null,w(L,C,A,q);case Ro:var ae=A._init;return E(C,L,O,ae(A._payload),q)}if(fa(A)||qi(A))return C=C.get(O)||null,j(L,C,A,q,null);wl(L,A)}return null}function I(C,L,O,A){for(var q=null,ae=null,J=L,ce=L=0,se=null;J!==null&&ce<O.length;ce++){J.index>ce?(se=J,J=null):se=J.sibling;var te=v(C,J,O[ce],A);if(te===null){J===null&&(J=se);break}e&&J&&te.alternate===null&&t(C,J),L=i(te,L,ce),ae===null?q=te:ae.sibling=te,ae=te,J=se}if(ce===O.length)return n(C,J),tn&&hs(C,ce),q;if(J===null){for(;ce<O.length;ce++)J=b(C,O[ce],A),J!==null&&(L=i(J,L,ce),ae===null?q=J:ae.sibling=J,ae=J);return tn&&hs(C,ce),q}for(J=o(C,J);ce<O.length;ce++)se=E(J,C,ce,O[ce],A),se!==null&&(e&&se.alternate!==null&&J.delete(se.key===null?ce:se.key),L=i(se,L,ce),ae===null?q=se:ae.sibling=se,ae=se);return e&&J.forEach(function(we){return t(C,we)}),tn&&hs(C,ce),q}function y(C,L,O,A){var q=qi(O);if(typeof q!="function")throw Error(Se(150));if(O=q.call(O),O==null)throw Error(Se(151));for(var ae=q=null,J=L,ce=L=0,se=null,te=O.next();J!==null&&!te.done;ce++,te=O.next()){J.index>ce?(se=J,J=null):se=J.sibling;var we=v(C,J,te.value,A);if(we===null){J===null&&(J=se);break}e&&J&&we.alternate===null&&t(C,J),L=i(we,L,ce),ae===null?q=we:ae.sibling=we,ae=we,J=se}if(te.done)return n(C,J),tn&&hs(C,ce),q;if(J===null){for(;!te.done;ce++,te=O.next())te=b(C,te.value,A),te!==null&&(L=i(te,L,ce),ae===null?q=te:ae.sibling=te,ae=te);return tn&&hs(C,ce),q}for(J=o(C,J);!te.done;ce++,te=O.next())te=E(J,C,ce,te.value,A),te!==null&&(e&&te.alternate!==null&&J.delete(te.key===null?ce:te.key),L=i(te,L,ce),ae===null?q=te:ae.sibling=te,ae=te);return e&&J.forEach(function(me){return t(C,me)}),tn&&hs(C,ce),q}function Z(C,L,O,A){if(typeof O=="object"&&O!==null&&O.type===Js&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case ul:e:{for(var q=O.key,ae=L;ae!==null;){if(ae.key===q){if(q=O.type,q===Js){if(ae.tag===7){n(C,ae.sibling),L=s(ae,O.props.children),L.return=C,C=L;break e}}else if(ae.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Ro&&Cf(q)===ae.type){n(C,ae.sibling),L=s(ae,O.props),L.ref=na(C,ae,O),L.return=C,C=L;break e}n(C,ae);break}else t(C,ae);ae=ae.sibling}O.type===Js?(L=vs(O.props.children,C.mode,A,O.key),L.return=C,C=L):(A=Kl(O.type,O.key,O.props,null,C.mode,A),A.ref=na(C,L,O),A.return=C,C=A)}return c(C);case qs:e:{for(ae=O.key;L!==null;){if(L.key===ae)if(L.tag===4&&L.stateNode.containerInfo===O.containerInfo&&L.stateNode.implementation===O.implementation){n(C,L.sibling),L=s(L,O.children||[]),L.return=C,C=L;break e}else{n(C,L);break}else t(C,L);L=L.sibling}L=gu(O,C.mode,A),L.return=C,C=L}return c(C);case Ro:return ae=O._init,Z(C,L,ae(O._payload),A)}if(fa(O))return I(C,L,O,A);if(qi(O))return y(C,L,O,A);wl(C,O)}return typeof O=="string"&&O!==""||typeof O=="number"?(O=""+O,L!==null&&L.tag===6?(n(C,L.sibling),L=s(L,O),L.return=C,C=L):(n(C,L),L=mu(O,C.mode,A),L.return=C,C=L),c(C)):n(C,L)}return Z}var xi=Wp(!0),Hp=Wp(!1),uc=Ko(null),dc=null,ii=null,eh=null;function th(){eh=ii=dc=null}function nh(e){var t=uc.current;Zt(uc),e._currentValue=t}function ld(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function _i(e,t){dc=e,eh=ii=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Gn=!0),e.firstContext=null)}function xr(e){var t=e._currentValue;if(eh!==e)if(e={context:e,memoizedValue:t,next:null},ii===null){if(dc===null)throw Error(Se(308));ii=e,dc.dependencies={lanes:0,firstContext:e}}else ii=ii.next=e;return t}var ms=null;function rh(e){ms===null?ms=[e]:ms.push(e)}function Up(e,t,n,o){var s=t.interleaved;return s===null?(n.next=n,rh(t)):(n.next=s.next,s.next=n),t.interleaved=n,po(e,o)}function po(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Po=!1;function oh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ho(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zo(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,Ft&2){var s=o.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),o.pending=t,po(e,n)}return s=o.interleaved,s===null?(t.next=t,rh(o)):(t.next=s.next,s.next=t),o.interleaved=t,po(e,n)}function Hl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Hd(e,n)}}function Sf(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var c={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=c:i=i.next=c,n=n.next}while(n!==null);i===null?s=i=t:i=i.next=t}else s=i=t;n={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function hc(e,t,n,o){var s=e.updateQueue;Po=!1;var i=s.firstBaseUpdate,c=s.lastBaseUpdate,_=s.shared.pending;if(_!==null){s.shared.pending=null;var f=_,w=f.next;f.next=null,c===null?i=w:c.next=w,c=f;var j=e.alternate;j!==null&&(j=j.updateQueue,_=j.lastBaseUpdate,_!==c&&(_===null?j.firstBaseUpdate=w:_.next=w,j.lastBaseUpdate=f))}if(i!==null){var b=s.baseState;c=0,j=w=f=null,_=i;do{var v=_.lane,E=_.eventTime;if((o&v)===v){j!==null&&(j=j.next={eventTime:E,lane:0,tag:_.tag,payload:_.payload,callback:_.callback,next:null});e:{var I=e,y=_;switch(v=t,E=n,y.tag){case 1:if(I=y.payload,typeof I=="function"){b=I.call(E,b,v);break e}b=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=y.payload,v=typeof I=="function"?I.call(E,b,v):I,v==null)break e;b=sn({},b,v);break e;case 2:Po=!0}}_.callback!==null&&_.lane!==0&&(e.flags|=64,v=s.effects,v===null?s.effects=[_]:v.push(_))}else E={eventTime:E,lane:v,tag:_.tag,payload:_.payload,callback:_.callback,next:null},j===null?(w=j=E,f=b):j=j.next=E,c|=v;if(_=_.next,_===null){if(_=s.shared.pending,_===null)break;v=_,_=v.next,v.next=null,s.lastBaseUpdate=v,s.shared.pending=null}}while(!0);if(j===null&&(f=b),s.baseState=f,s.firstBaseUpdate=w,s.lastBaseUpdate=j,t=s.shared.interleaved,t!==null){s=t;do c|=s.lane,s=s.next;while(s!==t)}else i===null&&(s.shared.lanes=0);ks|=c,e.lanes=c,e.memoizedState=b}}function Mf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],s=o.callback;if(s!==null){if(o.callback=null,o=n,typeof s!="function")throw Error(Se(191,s));s.call(o)}}}var qa={},qr=Ko(qa),Fa=Ko(qa),Ba=Ko(qa);function gs(e){if(e===qa)throw Error(Se(174));return e}function sh(e,t){switch(qt(Ba,t),qt(Fa,e),qt(qr,qa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Wu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Wu(t,e)}Zt(qr),qt(qr,t)}function wi(){Zt(qr),Zt(Fa),Zt(Ba)}function Yp(e){gs(Ba.current);var t=gs(qr.current),n=Wu(t,e.type);t!==n&&(qt(Fa,e),qt(qr,n))}function ih(e){Fa.current===e&&(Zt(qr),Zt(Fa))}var rn=Ko(0);function fc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var uu=[];function ah(){for(var e=0;e<uu.length;e++)uu[e]._workInProgressVersionPrimary=null;uu.length=0}var Ul=go.ReactCurrentDispatcher,du=go.ReactCurrentBatchConfig,bs=0,on=null,mn=null,wn=null,_c=!1,ka=!1,za=0,ly=0;function En(){throw Error(Se(321))}function lh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tr(e[n],t[n]))return!1;return!0}function ch(e,t,n,o,s,i){if(bs=i,on=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ul.current=e===null||e.memoizedState===null?hy:fy,e=n(o,s),ka){i=0;do{if(ka=!1,za=0,25<=i)throw Error(Se(301));i+=1,wn=mn=null,t.updateQueue=null,Ul.current=_y,e=n(o,s)}while(ka)}if(Ul.current=pc,t=mn!==null&&mn.next!==null,bs=0,wn=mn=on=null,_c=!1,t)throw Error(Se(300));return e}function uh(){var e=za!==0;return za=0,e}function Qr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?on.memoizedState=wn=e:wn=wn.next=e,wn}function wr(){if(mn===null){var e=on.alternate;e=e!==null?e.memoizedState:null}else e=mn.next;var t=wn===null?on.memoizedState:wn.next;if(t!==null)wn=t,mn=e;else{if(e===null)throw Error(Se(310));mn=e,e={memoizedState:mn.memoizedState,baseState:mn.baseState,baseQueue:mn.baseQueue,queue:mn.queue,next:null},wn===null?on.memoizedState=wn=e:wn=wn.next=e}return wn}function Wa(e,t){return typeof t=="function"?t(e):t}function hu(e){var t=wr(),n=t.queue;if(n===null)throw Error(Se(311));n.lastRenderedReducer=e;var o=mn,s=o.baseQueue,i=n.pending;if(i!==null){if(s!==null){var c=s.next;s.next=i.next,i.next=c}o.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,o=o.baseState;var _=c=null,f=null,w=i;do{var j=w.lane;if((bs&j)===j)f!==null&&(f=f.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),o=w.hasEagerState?w.eagerState:e(o,w.action);else{var b={lane:j,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};f===null?(_=f=b,c=o):f=f.next=b,on.lanes|=j,ks|=j}w=w.next}while(w!==null&&w!==i);f===null?c=o:f.next=_,Tr(o,t.memoizedState)||(Gn=!0),t.memoizedState=o,t.baseState=c,t.baseQueue=f,n.lastRenderedState=o}if(e=n.interleaved,e!==null){s=e;do i=s.lane,on.lanes|=i,ks|=i,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function fu(e){var t=wr(),n=t.queue;if(n===null)throw Error(Se(311));n.lastRenderedReducer=e;var o=n.dispatch,s=n.pending,i=t.memoizedState;if(s!==null){n.pending=null;var c=s=s.next;do i=e(i,c.action),c=c.next;while(c!==s);Tr(i,t.memoizedState)||(Gn=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,o]}function Xp(){}function Qp(e,t){var n=on,o=wr(),s=t(),i=!Tr(o.memoizedState,s);if(i&&(o.memoizedState=s,Gn=!0),o=o.queue,dh(qp.bind(null,n,o,e),[e]),o.getSnapshot!==t||i||wn!==null&&wn.memoizedState.tag&1){if(n.flags|=2048,Ha(9,Gp.bind(null,n,o,s,t),void 0,null),bn===null)throw Error(Se(349));bs&30||Kp(n,t,s)}return s}function Kp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=on.updateQueue,t===null?(t={lastEffect:null,stores:null},on.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gp(e,t,n,o){t.value=n,t.getSnapshot=o,Jp(t)&&Zp(e)}function qp(e,t,n){return n(function(){Jp(t)&&Zp(e)})}function Jp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tr(e,n)}catch{return!0}}function Zp(e){var t=po(e,1);t!==null&&Lr(t,e,1,-1)}function Nf(e){var t=Qr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:e},t.queue=e,e=e.dispatch=dy.bind(null,on,e),[t.memoizedState,e]}function Ha(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=on.updateQueue,t===null?(t={lastEffect:null,stores:null},on.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function em(){return wr().memoizedState}function Vl(e,t,n,o){var s=Qr();on.flags|=e,s.memoizedState=Ha(1|t,n,void 0,o===void 0?null:o)}function Rc(e,t,n,o){var s=wr();o=o===void 0?null:o;var i=void 0;if(mn!==null){var c=mn.memoizedState;if(i=c.destroy,o!==null&&lh(o,c.deps)){s.memoizedState=Ha(t,n,i,o);return}}on.flags|=e,s.memoizedState=Ha(1|t,n,i,o)}function Ef(e,t){return Vl(8390656,8,e,t)}function dh(e,t){return Rc(2048,8,e,t)}function tm(e,t){return Rc(4,2,e,t)}function nm(e,t){return Rc(4,4,e,t)}function rm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function om(e,t,n){return n=n!=null?n.concat([e]):null,Rc(4,4,rm.bind(null,t,e),n)}function hh(){}function sm(e,t){var n=wr();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&lh(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function im(e,t){var n=wr();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&lh(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function am(e,t,n){return bs&21?(Tr(n,t)||(n=hp(),on.lanes|=n,ks|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Gn=!0),e.memoizedState=n)}function cy(e,t){var n=Vt;Vt=n!==0&&4>n?n:4,e(!0);var o=du.transition;du.transition={};try{e(!1),t()}finally{Vt=n,du.transition=o}}function lm(){return wr().memoizedState}function uy(e,t,n){var o=Ho(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},cm(e))um(t,n);else if(n=Up(e,t,n,o),n!==null){var s=Fn();Lr(n,e,o,s),dm(n,t,o)}}function dy(e,t,n){var o=Ho(e),s={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(cm(e))um(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,_=i(c,n);if(s.hasEagerState=!0,s.eagerState=_,Tr(_,c)){var f=t.interleaved;f===null?(s.next=s,rh(t)):(s.next=f.next,f.next=s),t.interleaved=s;return}}catch{}finally{}n=Up(e,t,s,o),n!==null&&(s=Fn(),Lr(n,e,o,s),dm(n,t,o))}}function cm(e){var t=e.alternate;return e===on||t!==null&&t===on}function um(e,t){ka=_c=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dm(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Hd(e,n)}}var pc={readContext:xr,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},hy={readContext:xr,useCallback:function(e,t){return Qr().memoizedState=[e,t===void 0?null:t],e},useContext:xr,useEffect:Ef,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vl(4194308,4,rm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vl(4,2,e,t)},useMemo:function(e,t){var n=Qr();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=Qr();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=uy.bind(null,on,e),[o.memoizedState,e]},useRef:function(e){var t=Qr();return e={current:e},t.memoizedState=e},useState:Nf,useDebugValue:hh,useDeferredValue:function(e){return Qr().memoizedState=e},useTransition:function(){var e=Nf(!1),t=e[0];return e=cy.bind(null,e[1]),Qr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=on,s=Qr();if(tn){if(n===void 0)throw Error(Se(407));n=n()}else{if(n=t(),bn===null)throw Error(Se(349));bs&30||Kp(o,t,n)}s.memoizedState=n;var i={value:n,getSnapshot:t};return s.queue=i,Ef(qp.bind(null,o,i,e),[e]),o.flags|=2048,Ha(9,Gp.bind(null,o,i,n,t),void 0,null),n},useId:function(){var e=Qr(),t=bn.identifierPrefix;if(tn){var n=uo,o=co;n=(o&~(1<<32-Pr(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=za++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ly++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fy={readContext:xr,useCallback:sm,useContext:xr,useEffect:dh,useImperativeHandle:om,useInsertionEffect:tm,useLayoutEffect:nm,useMemo:im,useReducer:hu,useRef:em,useState:function(){return hu(Wa)},useDebugValue:hh,useDeferredValue:function(e){var t=wr();return am(t,mn.memoizedState,e)},useTransition:function(){var e=hu(Wa)[0],t=wr().memoizedState;return[e,t]},useMutableSource:Xp,useSyncExternalStore:Qp,useId:lm,unstable_isNewReconciler:!1},_y={readContext:xr,useCallback:sm,useContext:xr,useEffect:dh,useImperativeHandle:om,useInsertionEffect:tm,useLayoutEffect:nm,useMemo:im,useReducer:fu,useRef:em,useState:function(){return fu(Wa)},useDebugValue:hh,useDeferredValue:function(e){var t=wr();return mn===null?t.memoizedState=e:am(t,mn.memoizedState,e)},useTransition:function(){var e=fu(Wa)[0],t=wr().memoizedState;return[e,t]},useMutableSource:Xp,useSyncExternalStore:Qp,useId:lm,unstable_isNewReconciler:!1};function Nr(e,t){if(e&&e.defaultProps){t=sn({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function cd(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:sn({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pc={isMounted:function(e){return(e=e._reactInternals)?Ms(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=Fn(),s=Ho(e),i=ho(o,s);i.payload=t,n!=null&&(i.callback=n),t=zo(e,i,s),t!==null&&(Lr(t,e,s,o),Hl(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=Fn(),s=Ho(e),i=ho(o,s);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=zo(e,i,s),t!==null&&(Lr(t,e,s,o),Hl(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Fn(),o=Ho(e),s=ho(n,o);s.tag=2,t!=null&&(s.callback=t),t=zo(e,s,o),t!==null&&(Lr(t,e,o,n),Hl(t,e,o))}};function If(e,t,n,o,s,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,i,c):t.prototype&&t.prototype.isPureReactComponent?!Aa(n,o)||!Aa(s,i):!0}function hm(e,t,n){var o=!1,s=Xo,i=t.contextType;return typeof i=="object"&&i!==null?i=xr(i):(s=Jn(t)?xs:Pn.current,o=t.contextTypes,i=(o=o!=null)?yi(e,s):Xo),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pc,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),t}function Rf(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&Pc.enqueueReplaceState(t,t.state,null)}function ud(e,t,n,o){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},oh(e);var i=t.contextType;typeof i=="object"&&i!==null?s.context=xr(i):(i=Jn(t)?xs:Pn.current,s.context=yi(e,i)),s.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(cd(e,t,i,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Pc.enqueueReplaceState(s,s.state,null),hc(e,n,s,o),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function bi(e,t){try{var n="",o=t;do n+=Wg(o),o=o.return;while(o);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:s,digest:null}}function _u(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function dd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var py=typeof WeakMap=="function"?WeakMap:Map;function fm(e,t,n){n=ho(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){gc||(gc=!0,wd=o),dd(e,t)},n}function _m(e,t,n){n=ho(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var s=t.value;n.payload=function(){return o(s)},n.callback=function(){dd(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){dd(e,t),typeof o!="function"&&(Wo===null?Wo=new Set([this]):Wo.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),n}function Pf(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new py;var s=new Set;o.set(t,s)}else s=o.get(t),s===void 0&&(s=new Set,o.set(t,s));s.has(n)||(s.add(n),e=Ey.bind(null,e,t,n),t.then(e,e))}function Lf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Tf(e,t,n,o,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ho(-1,1),t.tag=2,zo(n,t,1))),n.lanes|=1),e)}var my=go.ReactCurrentOwner,Gn=!1;function On(e,t,n,o){t.child=e===null?Hp(t,null,n,o):xi(t,e.child,n,o)}function Af(e,t,n,o,s){n=n.render;var i=t.ref;return _i(t,s),o=ch(e,t,n,o,i,s),n=uh(),e!==null&&!Gn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,mo(e,t,s)):(tn&&n&&qd(t),t.flags|=1,On(e,t,o,s),t.child)}function $f(e,t,n,o,s){if(e===null){var i=n.type;return typeof i=="function"&&!xh(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,pm(e,t,i,o,s)):(e=Kl(n.type,null,o,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&s)){var c=i.memoizedProps;if(n=n.compare,n=n!==null?n:Aa,n(c,o)&&e.ref===t.ref)return mo(e,t,s)}return t.flags|=1,e=Uo(i,o),e.ref=t.ref,e.return=t,t.child=e}function pm(e,t,n,o,s){if(e!==null){var i=e.memoizedProps;if(Aa(i,o)&&e.ref===t.ref)if(Gn=!1,t.pendingProps=o=i,(e.lanes&s)!==0)e.flags&131072&&(Gn=!0);else return t.lanes=e.lanes,mo(e,t,s)}return hd(e,t,n,o,s)}function mm(e,t,n){var o=t.pendingProps,s=o.children,i=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},qt(li,sr),sr|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,qt(li,sr),sr|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:n,qt(li,sr),sr|=o}else i!==null?(o=i.baseLanes|n,t.memoizedState=null):o=n,qt(li,sr),sr|=o;return On(e,t,s,n),t.child}function gm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function hd(e,t,n,o,s){var i=Jn(n)?xs:Pn.current;return i=yi(t,i),_i(t,s),n=ch(e,t,n,o,i,s),o=uh(),e!==null&&!Gn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,mo(e,t,s)):(tn&&o&&qd(t),t.flags|=1,On(e,t,n,s),t.child)}function Df(e,t,n,o,s){if(Jn(n)){var i=!0;ac(t)}else i=!1;if(_i(t,s),t.stateNode===null)Yl(e,t),hm(t,n,o),ud(t,n,o,s),o=!0;else if(e===null){var c=t.stateNode,_=t.memoizedProps;c.props=_;var f=c.context,w=n.contextType;typeof w=="object"&&w!==null?w=xr(w):(w=Jn(n)?xs:Pn.current,w=yi(t,w));var j=n.getDerivedStateFromProps,b=typeof j=="function"||typeof c.getSnapshotBeforeUpdate=="function";b||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(_!==o||f!==w)&&Rf(t,c,o,w),Po=!1;var v=t.memoizedState;c.state=v,hc(t,o,c,s),f=t.memoizedState,_!==o||v!==f||qn.current||Po?(typeof j=="function"&&(cd(t,n,j,o),f=t.memoizedState),(_=Po||If(t,n,_,o,v,f,w))?(b||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=f),c.props=o,c.state=f,c.context=w,o=_):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{c=t.stateNode,Vp(e,t),_=t.memoizedProps,w=t.type===t.elementType?_:Nr(t.type,_),c.props=w,b=t.pendingProps,v=c.context,f=n.contextType,typeof f=="object"&&f!==null?f=xr(f):(f=Jn(n)?xs:Pn.current,f=yi(t,f));var E=n.getDerivedStateFromProps;(j=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(_!==b||v!==f)&&Rf(t,c,o,f),Po=!1,v=t.memoizedState,c.state=v,hc(t,o,c,s);var I=t.memoizedState;_!==b||v!==I||qn.current||Po?(typeof E=="function"&&(cd(t,n,E,o),I=t.memoizedState),(w=Po||If(t,n,w,o,v,I,f)||!1)?(j||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(o,I,f),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(o,I,f)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||_===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=I),c.props=o,c.state=I,c.context=f,o=w):(typeof c.componentDidUpdate!="function"||_===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),o=!1)}return fd(e,t,n,o,i,s)}function fd(e,t,n,o,s,i){gm(e,t);var c=(t.flags&128)!==0;if(!o&&!c)return s&&bf(t,n,!1),mo(e,t,i);o=t.stateNode,my.current=t;var _=c&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&c?(t.child=xi(t,e.child,null,i),t.child=xi(t,null,_,i)):On(e,t,_,i),t.memoizedState=o.state,s&&bf(t,n,!0),t.child}function ym(e){var t=e.stateNode;t.pendingContext?wf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&wf(e,t.context,!1),sh(e,t.containerInfo)}function Of(e,t,n,o,s){return vi(),Zd(s),t.flags|=256,On(e,t,n,o),t.child}var _d={dehydrated:null,treeContext:null,retryLane:0};function pd(e){return{baseLanes:e,cachePool:null,transitions:null}}function vm(e,t,n){var o=t.pendingProps,s=rn.current,i=!1,c=(t.flags&128)!==0,_;if((_=c)||(_=e!==null&&e.memoizedState===null?!1:(s&2)!==0),_?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),qt(rn,s&1),e===null)return ad(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(c=o.children,e=o.fallback,i?(o=t.mode,i=t.child,c={mode:"hidden",children:c},!(o&1)&&i!==null?(i.childLanes=0,i.pendingProps=c):i=Ac(c,o,0,null),e=vs(e,o,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=pd(n),t.memoizedState=_d,e):fh(t,c));if(s=e.memoizedState,s!==null&&(_=s.dehydrated,_!==null))return gy(e,t,c,o,_,s,n);if(i){i=o.fallback,c=t.mode,s=e.child,_=s.sibling;var f={mode:"hidden",children:o.children};return!(c&1)&&t.child!==s?(o=t.child,o.childLanes=0,o.pendingProps=f,t.deletions=null):(o=Uo(s,f),o.subtreeFlags=s.subtreeFlags&14680064),_!==null?i=Uo(_,i):(i=vs(i,c,n,null),i.flags|=2),i.return=t,o.return=t,o.sibling=i,t.child=o,o=i,i=t.child,c=e.child.memoizedState,c=c===null?pd(n):{baseLanes:c.baseLanes|n,cachePool:null,transitions:c.transitions},i.memoizedState=c,i.childLanes=e.childLanes&~n,t.memoizedState=_d,o}return i=e.child,e=i.sibling,o=Uo(i,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function fh(e,t){return t=Ac({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function bl(e,t,n,o){return o!==null&&Zd(o),xi(t,e.child,null,n),e=fh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gy(e,t,n,o,s,i,c){if(n)return t.flags&256?(t.flags&=-257,o=_u(Error(Se(422))),bl(e,t,c,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=o.fallback,s=t.mode,o=Ac({mode:"visible",children:o.children},s,0,null),i=vs(i,s,c,null),i.flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,t.mode&1&&xi(t,e.child,null,c),t.child.memoizedState=pd(c),t.memoizedState=_d,i);if(!(t.mode&1))return bl(e,t,c,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var _=o.dgst;return o=_,i=Error(Se(419)),o=_u(i,o,void 0),bl(e,t,c,o)}if(_=(c&e.childLanes)!==0,Gn||_){if(o=bn,o!==null){switch(c&-c){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(o.suspendedLanes|c)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,po(e,s),Lr(o,e,s,-1))}return vh(),o=_u(Error(Se(421))),bl(e,t,c,o)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Iy.bind(null,e),s._reactRetry=t,null):(e=i.treeContext,ir=Bo(s.nextSibling),ar=t,tn=!0,Rr=null,e!==null&&(mr[gr++]=co,mr[gr++]=uo,mr[gr++]=ws,co=e.id,uo=e.overflow,ws=t),t=fh(t,o.children),t.flags|=4096,t)}function Ff(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),ld(e.return,t,n)}function pu(e,t,n,o,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:s}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=n,i.tailMode=s)}function xm(e,t,n){var o=t.pendingProps,s=o.revealOrder,i=o.tail;if(On(e,t,o.children,n),o=rn.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ff(e,n,t);else if(e.tag===19)Ff(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(qt(rn,o),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&fc(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),pu(t,!1,s,n,i);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&fc(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}pu(t,!0,n,null,i);break;case"together":pu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Yl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function mo(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ks|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(Se(153));if(t.child!==null){for(e=t.child,n=Uo(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Uo(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yy(e,t,n){switch(t.tag){case 3:ym(t),vi();break;case 5:Yp(t);break;case 1:Jn(t.type)&&ac(t);break;case 4:sh(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,s=t.memoizedProps.value;qt(uc,o._currentValue),o._currentValue=s;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(qt(rn,rn.current&1),t.flags|=128,null):n&t.child.childLanes?vm(e,t,n):(qt(rn,rn.current&1),e=mo(e,t,n),e!==null?e.sibling:null);qt(rn,rn.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return xm(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),qt(rn,rn.current),o)break;return null;case 22:case 23:return t.lanes=0,mm(e,t,n)}return mo(e,t,n)}var wm,md,bm,km;wm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};md=function(){};bm=function(e,t,n,o){var s=e.memoizedProps;if(s!==o){e=t.stateNode,gs(qr.current);var i=null;switch(n){case"input":s=Ou(e,s),o=Ou(e,o),i=[];break;case"select":s=sn({},s,{value:void 0}),o=sn({},o,{value:void 0}),i=[];break;case"textarea":s=zu(e,s),o=zu(e,o),i=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=sc)}Hu(n,o);var c;n=null;for(w in s)if(!o.hasOwnProperty(w)&&s.hasOwnProperty(w)&&s[w]!=null)if(w==="style"){var _=s[w];for(c in _)_.hasOwnProperty(c)&&(n||(n={}),n[c]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(Na.hasOwnProperty(w)?i||(i=[]):(i=i||[]).push(w,null));for(w in o){var f=o[w];if(_=s!=null?s[w]:void 0,o.hasOwnProperty(w)&&f!==_&&(f!=null||_!=null))if(w==="style")if(_){for(c in _)!_.hasOwnProperty(c)||f&&f.hasOwnProperty(c)||(n||(n={}),n[c]="");for(c in f)f.hasOwnProperty(c)&&_[c]!==f[c]&&(n||(n={}),n[c]=f[c])}else n||(i||(i=[]),i.push(w,n)),n=f;else w==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,_=_?_.__html:void 0,f!=null&&_!==f&&(i=i||[]).push(w,f)):w==="children"?typeof f!="string"&&typeof f!="number"||(i=i||[]).push(w,""+f):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(Na.hasOwnProperty(w)?(f!=null&&w==="onScroll"&&Jt("scroll",e),i||_===f||(i=[])):(i=i||[]).push(w,f))}n&&(i=i||[]).push("style",n);var w=i;(t.updateQueue=w)&&(t.flags|=4)}};km=function(e,t,n,o){n!==o&&(t.flags|=4)};function ra(e,t){if(!tn)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function In(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function vy(e,t,n){var o=t.pendingProps;switch(Jd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return In(t),null;case 1:return Jn(t.type)&&ic(),In(t),null;case 3:return o=t.stateNode,wi(),Zt(qn),Zt(Pn),ah(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(xl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Rr!==null&&(jd(Rr),Rr=null))),md(e,t),In(t),null;case 5:ih(t);var s=gs(Ba.current);if(n=t.type,e!==null&&t.stateNode!=null)bm(e,t,n,o,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(Se(166));return In(t),null}if(e=gs(qr.current),xl(t)){o=t.stateNode,n=t.type;var i=t.memoizedProps;switch(o[Kr]=t,o[Oa]=i,e=(t.mode&1)!==0,n){case"dialog":Jt("cancel",o),Jt("close",o);break;case"iframe":case"object":case"embed":Jt("load",o);break;case"video":case"audio":for(s=0;s<pa.length;s++)Jt(pa[s],o);break;case"source":Jt("error",o);break;case"img":case"image":case"link":Jt("error",o),Jt("load",o);break;case"details":Jt("toggle",o);break;case"input":Xh(o,i),Jt("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},Jt("invalid",o);break;case"textarea":Kh(o,i),Jt("invalid",o)}Hu(n,i),s=null;for(var c in i)if(i.hasOwnProperty(c)){var _=i[c];c==="children"?typeof _=="string"?o.textContent!==_&&(i.suppressHydrationWarning!==!0&&vl(o.textContent,_,e),s=["children",_]):typeof _=="number"&&o.textContent!==""+_&&(i.suppressHydrationWarning!==!0&&vl(o.textContent,_,e),s=["children",""+_]):Na.hasOwnProperty(c)&&_!=null&&c==="onScroll"&&Jt("scroll",o)}switch(n){case"input":dl(o),Qh(o,i,!0);break;case"textarea":dl(o),Gh(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=sc)}o=s,t.updateQueue=o,o!==null&&(t.flags|=4)}else{c=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=q_(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=c.createElement(n,{is:o.is}):(e=c.createElement(n),n==="select"&&(c=e,o.multiple?c.multiple=!0:o.size&&(c.size=o.size))):e=c.createElementNS(e,n),e[Kr]=t,e[Oa]=o,wm(e,t,!1,!1),t.stateNode=e;e:{switch(c=Uu(n,o),n){case"dialog":Jt("cancel",e),Jt("close",e),s=o;break;case"iframe":case"object":case"embed":Jt("load",e),s=o;break;case"video":case"audio":for(s=0;s<pa.length;s++)Jt(pa[s],e);s=o;break;case"source":Jt("error",e),s=o;break;case"img":case"image":case"link":Jt("error",e),Jt("load",e),s=o;break;case"details":Jt("toggle",e),s=o;break;case"input":Xh(e,o),s=Ou(e,o),Jt("invalid",e);break;case"option":s=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},s=sn({},o,{value:void 0}),Jt("invalid",e);break;case"textarea":Kh(e,o),s=zu(e,o),Jt("invalid",e);break;default:s=o}Hu(n,s),_=s;for(i in _)if(_.hasOwnProperty(i)){var f=_[i];i==="style"?ep(e,f):i==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&J_(e,f)):i==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&Ea(e,f):typeof f=="number"&&Ea(e,""+f):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Na.hasOwnProperty(i)?f!=null&&i==="onScroll"&&Jt("scroll",e):f!=null&&Dd(e,i,f,c))}switch(n){case"input":dl(e),Qh(e,o,!1);break;case"textarea":dl(e),Gh(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Yo(o.value));break;case"select":e.multiple=!!o.multiple,i=o.value,i!=null?ui(e,!!o.multiple,i,!1):o.defaultValue!=null&&ui(e,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=sc)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return In(t),null;case 6:if(e&&t.stateNode!=null)km(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(Se(166));if(n=gs(Ba.current),gs(qr.current),xl(t)){if(o=t.stateNode,n=t.memoizedProps,o[Kr]=t,(i=o.nodeValue!==n)&&(e=ar,e!==null))switch(e.tag){case 3:vl(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vl(o.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Kr]=t,t.stateNode=o}return In(t),null;case 13:if(Zt(rn),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(tn&&ir!==null&&t.mode&1&&!(t.flags&128))zp(),vi(),t.flags|=98560,i=!1;else if(i=xl(t),o!==null&&o.dehydrated!==null){if(e===null){if(!i)throw Error(Se(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(Se(317));i[Kr]=t}else vi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;In(t),i=!1}else Rr!==null&&(jd(Rr),Rr=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||rn.current&1?gn===0&&(gn=3):vh())),t.updateQueue!==null&&(t.flags|=4),In(t),null);case 4:return wi(),md(e,t),e===null&&$a(t.stateNode.containerInfo),In(t),null;case 10:return nh(t.type._context),In(t),null;case 17:return Jn(t.type)&&ic(),In(t),null;case 19:if(Zt(rn),i=t.memoizedState,i===null)return In(t),null;if(o=(t.flags&128)!==0,c=i.rendering,c===null)if(o)ra(i,!1);else{if(gn!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=fc(e),c!==null){for(t.flags|=128,ra(i,!1),o=c.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)i=n,e=o,i.flags&=14680066,c=i.alternate,c===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=c.childLanes,i.lanes=c.lanes,i.child=c.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=c.memoizedProps,i.memoizedState=c.memoizedState,i.updateQueue=c.updateQueue,i.type=c.type,e=c.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return qt(rn,rn.current&1|2),t.child}e=e.sibling}i.tail!==null&&dn()>ki&&(t.flags|=128,o=!0,ra(i,!1),t.lanes=4194304)}else{if(!o)if(e=fc(c),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ra(i,!0),i.tail===null&&i.tailMode==="hidden"&&!c.alternate&&!tn)return In(t),null}else 2*dn()-i.renderingStartTime>ki&&n!==1073741824&&(t.flags|=128,o=!0,ra(i,!1),t.lanes=4194304);i.isBackwards?(c.sibling=t.child,t.child=c):(n=i.last,n!==null?n.sibling=c:t.child=c,i.last=c)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=dn(),t.sibling=null,n=rn.current,qt(rn,o?n&1|2:n&1),t):(In(t),null);case 22:case 23:return yh(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?sr&1073741824&&(In(t),t.subtreeFlags&6&&(t.flags|=8192)):In(t),null;case 24:return null;case 25:return null}throw Error(Se(156,t.tag))}function xy(e,t){switch(Jd(t),t.tag){case 1:return Jn(t.type)&&ic(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wi(),Zt(qn),Zt(Pn),ah(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ih(t),null;case 13:if(Zt(rn),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Se(340));vi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Zt(rn),null;case 4:return wi(),null;case 10:return nh(t.type._context),null;case 22:case 23:return yh(),null;case 24:return null;default:return null}}var kl=!1,Rn=!1,wy=typeof WeakSet=="function"?WeakSet:Set,tt=null;function ai(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){an(e,t,o)}else n.current=null}function gd(e,t,n){try{n()}catch(o){an(e,t,o)}}var Bf=!1;function by(e,t){if(ed=nc,e=Np(),Gd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var s=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var c=0,_=-1,f=-1,w=0,j=0,b=e,v=null;t:for(;;){for(var E;b!==n||s!==0&&b.nodeType!==3||(_=c+s),b!==i||o!==0&&b.nodeType!==3||(f=c+o),b.nodeType===3&&(c+=b.nodeValue.length),(E=b.firstChild)!==null;)v=b,b=E;for(;;){if(b===e)break t;if(v===n&&++w===s&&(_=c),v===i&&++j===o&&(f=c),(E=b.nextSibling)!==null)break;b=v,v=b.parentNode}b=E}n=_===-1||f===-1?null:{start:_,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(td={focusedElem:e,selectionRange:n},nc=!1,tt=t;tt!==null;)if(t=tt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,tt=e;else for(;tt!==null;){t=tt;try{var I=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var y=I.memoizedProps,Z=I.memoizedState,C=t.stateNode,L=C.getSnapshotBeforeUpdate(t.elementType===t.type?y:Nr(t.type,y),Z);C.__reactInternalSnapshotBeforeUpdate=L}break;case 3:var O=t.stateNode.containerInfo;O.nodeType===1?O.textContent="":O.nodeType===9&&O.documentElement&&O.removeChild(O.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Se(163))}}catch(A){an(t,t.return,A)}if(e=t.sibling,e!==null){e.return=t.return,tt=e;break}tt=t.return}return I=Bf,Bf=!1,I}function ja(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&e)===e){var i=s.destroy;s.destroy=void 0,i!==void 0&&gd(t,n,i)}s=s.next}while(s!==o)}}function Lc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function yd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function jm(e){var t=e.alternate;t!==null&&(e.alternate=null,jm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Kr],delete t[Oa],delete t[od],delete t[oy],delete t[sy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cm(e){return e.tag===5||e.tag===3||e.tag===4}function zf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vd(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sc));else if(o!==4&&(e=e.child,e!==null))for(vd(e,t,n),e=e.sibling;e!==null;)vd(e,t,n),e=e.sibling}function xd(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(xd(e,t,n),e=e.sibling;e!==null;)xd(e,t,n),e=e.sibling}var Cn=null,Ir=!1;function Eo(e,t,n){for(n=n.child;n!==null;)Sm(e,t,n),n=n.sibling}function Sm(e,t,n){if(Gr&&typeof Gr.onCommitFiberUnmount=="function")try{Gr.onCommitFiberUnmount(Cc,n)}catch{}switch(n.tag){case 5:Rn||ai(n,t);case 6:var o=Cn,s=Ir;Cn=null,Eo(e,t,n),Cn=o,Ir=s,Cn!==null&&(Ir?(e=Cn,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Cn.removeChild(n.stateNode));break;case 18:Cn!==null&&(Ir?(e=Cn,n=n.stateNode,e.nodeType===8?lu(e.parentNode,n):e.nodeType===1&&lu(e,n),La(e)):lu(Cn,n.stateNode));break;case 4:o=Cn,s=Ir,Cn=n.stateNode.containerInfo,Ir=!0,Eo(e,t,n),Cn=o,Ir=s;break;case 0:case 11:case 14:case 15:if(!Rn&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var i=s,c=i.destroy;i=i.tag,c!==void 0&&(i&2||i&4)&&gd(n,t,c),s=s.next}while(s!==o)}Eo(e,t,n);break;case 1:if(!Rn&&(ai(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(_){an(n,t,_)}Eo(e,t,n);break;case 21:Eo(e,t,n);break;case 22:n.mode&1?(Rn=(o=Rn)||n.memoizedState!==null,Eo(e,t,n),Rn=o):Eo(e,t,n);break;default:Eo(e,t,n)}}function Wf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wy),t.forEach(function(o){var s=Ry.bind(null,e,o);n.has(o)||(n.add(o),o.then(s,s))})}}function Mr(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var s=n[o];try{var i=e,c=t,_=c;e:for(;_!==null;){switch(_.tag){case 5:Cn=_.stateNode,Ir=!1;break e;case 3:Cn=_.stateNode.containerInfo,Ir=!0;break e;case 4:Cn=_.stateNode.containerInfo,Ir=!0;break e}_=_.return}if(Cn===null)throw Error(Se(160));Sm(i,c,s),Cn=null,Ir=!1;var f=s.alternate;f!==null&&(f.return=null),s.return=null}catch(w){an(s,t,w)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Mm(t,e),t=t.sibling}function Mm(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mr(t,e),Yr(e),o&4){try{ja(3,e,e.return),Lc(3,e)}catch(y){an(e,e.return,y)}try{ja(5,e,e.return)}catch(y){an(e,e.return,y)}}break;case 1:Mr(t,e),Yr(e),o&512&&n!==null&&ai(n,n.return);break;case 5:if(Mr(t,e),Yr(e),o&512&&n!==null&&ai(n,n.return),e.flags&32){var s=e.stateNode;try{Ea(s,"")}catch(y){an(e,e.return,y)}}if(o&4&&(s=e.stateNode,s!=null)){var i=e.memoizedProps,c=n!==null?n.memoizedProps:i,_=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{_==="input"&&i.type==="radio"&&i.name!=null&&K_(s,i),Uu(_,c);var w=Uu(_,i);for(c=0;c<f.length;c+=2){var j=f[c],b=f[c+1];j==="style"?ep(s,b):j==="dangerouslySetInnerHTML"?J_(s,b):j==="children"?Ea(s,b):Dd(s,j,b,w)}switch(_){case"input":Fu(s,i);break;case"textarea":G_(s,i);break;case"select":var v=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var E=i.value;E!=null?ui(s,!!i.multiple,E,!1):v!==!!i.multiple&&(i.defaultValue!=null?ui(s,!!i.multiple,i.defaultValue,!0):ui(s,!!i.multiple,i.multiple?[]:"",!1))}s[Oa]=i}catch(y){an(e,e.return,y)}}break;case 6:if(Mr(t,e),Yr(e),o&4){if(e.stateNode===null)throw Error(Se(162));s=e.stateNode,i=e.memoizedProps;try{s.nodeValue=i}catch(y){an(e,e.return,y)}}break;case 3:if(Mr(t,e),Yr(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{La(t.containerInfo)}catch(y){an(e,e.return,y)}break;case 4:Mr(t,e),Yr(e);break;case 13:Mr(t,e),Yr(e),s=e.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(mh=dn())),o&4&&Wf(e);break;case 22:if(j=n!==null&&n.memoizedState!==null,e.mode&1?(Rn=(w=Rn)||j,Mr(t,e),Rn=w):Mr(t,e),Yr(e),o&8192){if(w=e.memoizedState!==null,(e.stateNode.isHidden=w)&&!j&&e.mode&1)for(tt=e,j=e.child;j!==null;){for(b=tt=j;tt!==null;){switch(v=tt,E=v.child,v.tag){case 0:case 11:case 14:case 15:ja(4,v,v.return);break;case 1:ai(v,v.return);var I=v.stateNode;if(typeof I.componentWillUnmount=="function"){o=v,n=v.return;try{t=o,I.props=t.memoizedProps,I.state=t.memoizedState,I.componentWillUnmount()}catch(y){an(o,n,y)}}break;case 5:ai(v,v.return);break;case 22:if(v.memoizedState!==null){Uf(b);continue}}E!==null?(E.return=v,tt=E):Uf(b)}j=j.sibling}e:for(j=null,b=e;;){if(b.tag===5){if(j===null){j=b;try{s=b.stateNode,w?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(_=b.stateNode,f=b.memoizedProps.style,c=f!=null&&f.hasOwnProperty("display")?f.display:null,_.style.display=Z_("display",c))}catch(y){an(e,e.return,y)}}}else if(b.tag===6){if(j===null)try{b.stateNode.nodeValue=w?"":b.memoizedProps}catch(y){an(e,e.return,y)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===e)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===e)break e;for(;b.sibling===null;){if(b.return===null||b.return===e)break e;j===b&&(j=null),b=b.return}j===b&&(j=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:Mr(t,e),Yr(e),o&4&&Wf(e);break;case 21:break;default:Mr(t,e),Yr(e)}}function Yr(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Cm(n)){var o=n;break e}n=n.return}throw Error(Se(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(Ea(s,""),o.flags&=-33);var i=zf(e);xd(e,i,s);break;case 3:case 4:var c=o.stateNode.containerInfo,_=zf(e);vd(e,_,c);break;default:throw Error(Se(161))}}catch(f){an(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ky(e,t,n){tt=e,Nm(e)}function Nm(e,t,n){for(var o=(e.mode&1)!==0;tt!==null;){var s=tt,i=s.child;if(s.tag===22&&o){var c=s.memoizedState!==null||kl;if(!c){var _=s.alternate,f=_!==null&&_.memoizedState!==null||Rn;_=kl;var w=Rn;if(kl=c,(Rn=f)&&!w)for(tt=s;tt!==null;)c=tt,f=c.child,c.tag===22&&c.memoizedState!==null?Vf(s):f!==null?(f.return=c,tt=f):Vf(s);for(;i!==null;)tt=i,Nm(i),i=i.sibling;tt=s,kl=_,Rn=w}Hf(e)}else s.subtreeFlags&8772&&i!==null?(i.return=s,tt=i):Hf(e)}}function Hf(e){for(;tt!==null;){var t=tt;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Rn||Lc(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Rn)if(n===null)o.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Nr(t.type,n.memoizedProps);o.componentDidUpdate(s,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Mf(t,i,o);break;case 3:var c=t.updateQueue;if(c!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Mf(t,c,n)}break;case 5:var _=t.stateNode;if(n===null&&t.flags&4){n=_;var f=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var w=t.alternate;if(w!==null){var j=w.memoizedState;if(j!==null){var b=j.dehydrated;b!==null&&La(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Se(163))}Rn||t.flags&512&&yd(t)}catch(v){an(t,t.return,v)}}if(t===e){tt=null;break}if(n=t.sibling,n!==null){n.return=t.return,tt=n;break}tt=t.return}}function Uf(e){for(;tt!==null;){var t=tt;if(t===e){tt=null;break}var n=t.sibling;if(n!==null){n.return=t.return,tt=n;break}tt=t.return}}function Vf(e){for(;tt!==null;){var t=tt;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Lc(4,t)}catch(f){an(t,n,f)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var s=t.return;try{o.componentDidMount()}catch(f){an(t,s,f)}}var i=t.return;try{yd(t)}catch(f){an(t,i,f)}break;case 5:var c=t.return;try{yd(t)}catch(f){an(t,c,f)}}}catch(f){an(t,t.return,f)}if(t===e){tt=null;break}var _=t.sibling;if(_!==null){_.return=t.return,tt=_;break}tt=t.return}}var jy=Math.ceil,mc=go.ReactCurrentDispatcher,_h=go.ReactCurrentOwner,vr=go.ReactCurrentBatchConfig,Ft=0,bn=null,_n=null,Sn=0,sr=0,li=Ko(0),gn=0,Ua=null,ks=0,Tc=0,ph=0,Ca=null,Kn=null,mh=0,ki=1/0,ao=null,gc=!1,wd=null,Wo=null,jl=!1,$o=null,yc=0,Sa=0,bd=null,Xl=-1,Ql=0;function Fn(){return Ft&6?dn():Xl!==-1?Xl:Xl=dn()}function Ho(e){return e.mode&1?Ft&2&&Sn!==0?Sn&-Sn:ay.transition!==null?(Ql===0&&(Ql=hp()),Ql):(e=Vt,e!==0||(e=window.event,e=e===void 0?16:vp(e.type)),e):1}function Lr(e,t,n,o){if(50<Sa)throw Sa=0,bd=null,Error(Se(185));Qa(e,n,o),(!(Ft&2)||e!==bn)&&(e===bn&&(!(Ft&2)&&(Tc|=n),gn===4&&To(e,Sn)),Zn(e,o),n===1&&Ft===0&&!(t.mode&1)&&(ki=dn()+500,Ic&&Go()))}function Zn(e,t){var n=e.callbackNode;a0(e,t);var o=tc(e,e===bn?Sn:0);if(o===0)n!==null&&Zh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&Zh(n),t===1)e.tag===0?iy(Yf.bind(null,e)):Op(Yf.bind(null,e)),ny(function(){!(Ft&6)&&Go()}),n=null;else{switch(fp(o)){case 1:n=Wd;break;case 4:n=up;break;case 16:n=ec;break;case 536870912:n=dp;break;default:n=ec}n=$m(n,Em.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Em(e,t){if(Xl=-1,Ql=0,Ft&6)throw Error(Se(327));var n=e.callbackNode;if(pi()&&e.callbackNode!==n)return null;var o=tc(e,e===bn?Sn:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=vc(e,o);else{t=o;var s=Ft;Ft|=2;var i=Rm();(bn!==e||Sn!==t)&&(ao=null,ki=dn()+500,ys(e,t));do try{My();break}catch(_){Im(e,_)}while(!0);th(),mc.current=i,Ft=s,_n!==null?t=0:(bn=null,Sn=0,t=gn)}if(t!==0){if(t===2&&(s=Ku(e),s!==0&&(o=s,t=kd(e,s))),t===1)throw n=Ua,ys(e,0),To(e,o),Zn(e,dn()),n;if(t===6)To(e,o);else{if(s=e.current.alternate,!(o&30)&&!Cy(s)&&(t=vc(e,o),t===2&&(i=Ku(e),i!==0&&(o=i,t=kd(e,i))),t===1))throw n=Ua,ys(e,0),To(e,o),Zn(e,dn()),n;switch(e.finishedWork=s,e.finishedLanes=o,t){case 0:case 1:throw Error(Se(345));case 2:fs(e,Kn,ao);break;case 3:if(To(e,o),(o&130023424)===o&&(t=mh+500-dn(),10<t)){if(tc(e,0)!==0)break;if(s=e.suspendedLanes,(s&o)!==o){Fn(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=rd(fs.bind(null,e,Kn,ao),t);break}fs(e,Kn,ao);break;case 4:if(To(e,o),(o&4194240)===o)break;for(t=e.eventTimes,s=-1;0<o;){var c=31-Pr(o);i=1<<c,c=t[c],c>s&&(s=c),o&=~i}if(o=s,o=dn()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*jy(o/1960))-o,10<o){e.timeoutHandle=rd(fs.bind(null,e,Kn,ao),o);break}fs(e,Kn,ao);break;case 5:fs(e,Kn,ao);break;default:throw Error(Se(329))}}}return Zn(e,dn()),e.callbackNode===n?Em.bind(null,e):null}function kd(e,t){var n=Ca;return e.current.memoizedState.isDehydrated&&(ys(e,t).flags|=256),e=vc(e,t),e!==2&&(t=Kn,Kn=n,t!==null&&jd(t)),e}function jd(e){Kn===null?Kn=e:Kn.push.apply(Kn,e)}function Cy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var s=n[o],i=s.getSnapshot;s=s.value;try{if(!Tr(i(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function To(e,t){for(t&=~ph,t&=~Tc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Pr(t),o=1<<n;e[n]=-1,t&=~o}}function Yf(e){if(Ft&6)throw Error(Se(327));pi();var t=tc(e,0);if(!(t&1))return Zn(e,dn()),null;var n=vc(e,t);if(e.tag!==0&&n===2){var o=Ku(e);o!==0&&(t=o,n=kd(e,o))}if(n===1)throw n=Ua,ys(e,0),To(e,t),Zn(e,dn()),n;if(n===6)throw Error(Se(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,fs(e,Kn,ao),Zn(e,dn()),null}function gh(e,t){var n=Ft;Ft|=1;try{return e(t)}finally{Ft=n,Ft===0&&(ki=dn()+500,Ic&&Go())}}function js(e){$o!==null&&$o.tag===0&&!(Ft&6)&&pi();var t=Ft;Ft|=1;var n=vr.transition,o=Vt;try{if(vr.transition=null,Vt=1,e)return e()}finally{Vt=o,vr.transition=n,Ft=t,!(Ft&6)&&Go()}}function yh(){sr=li.current,Zt(li)}function ys(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ty(n)),_n!==null)for(n=_n.return;n!==null;){var o=n;switch(Jd(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&ic();break;case 3:wi(),Zt(qn),Zt(Pn),ah();break;case 5:ih(o);break;case 4:wi();break;case 13:Zt(rn);break;case 19:Zt(rn);break;case 10:nh(o.type._context);break;case 22:case 23:yh()}n=n.return}if(bn=e,_n=e=Uo(e.current,null),Sn=sr=t,gn=0,Ua=null,ph=Tc=ks=0,Kn=Ca=null,ms!==null){for(t=0;t<ms.length;t++)if(n=ms[t],o=n.interleaved,o!==null){n.interleaved=null;var s=o.next,i=n.pending;if(i!==null){var c=i.next;i.next=s,o.next=c}n.pending=o}ms=null}return e}function Im(e,t){do{var n=_n;try{if(th(),Ul.current=pc,_c){for(var o=on.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}_c=!1}if(bs=0,wn=mn=on=null,ka=!1,za=0,_h.current=null,n===null||n.return===null){gn=1,Ua=t,_n=null;break}e:{var i=e,c=n.return,_=n,f=t;if(t=Sn,_.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var w=f,j=_,b=j.tag;if(!(j.mode&1)&&(b===0||b===11||b===15)){var v=j.alternate;v?(j.updateQueue=v.updateQueue,j.memoizedState=v.memoizedState,j.lanes=v.lanes):(j.updateQueue=null,j.memoizedState=null)}var E=Lf(c);if(E!==null){E.flags&=-257,Tf(E,c,_,i,t),E.mode&1&&Pf(i,w,t),t=E,f=w;var I=t.updateQueue;if(I===null){var y=new Set;y.add(f),t.updateQueue=y}else I.add(f);break e}else{if(!(t&1)){Pf(i,w,t),vh();break e}f=Error(Se(426))}}else if(tn&&_.mode&1){var Z=Lf(c);if(Z!==null){!(Z.flags&65536)&&(Z.flags|=256),Tf(Z,c,_,i,t),Zd(bi(f,_));break e}}i=f=bi(f,_),gn!==4&&(gn=2),Ca===null?Ca=[i]:Ca.push(i),i=c;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var C=fm(i,f,t);Sf(i,C);break e;case 1:_=f;var L=i.type,O=i.stateNode;if(!(i.flags&128)&&(typeof L.getDerivedStateFromError=="function"||O!==null&&typeof O.componentDidCatch=="function"&&(Wo===null||!Wo.has(O)))){i.flags|=65536,t&=-t,i.lanes|=t;var A=_m(i,_,t);Sf(i,A);break e}}i=i.return}while(i!==null)}Lm(n)}catch(q){t=q,_n===n&&n!==null&&(_n=n=n.return);continue}break}while(!0)}function Rm(){var e=mc.current;return mc.current=pc,e===null?pc:e}function vh(){(gn===0||gn===3||gn===2)&&(gn=4),bn===null||!(ks&268435455)&&!(Tc&268435455)||To(bn,Sn)}function vc(e,t){var n=Ft;Ft|=2;var o=Rm();(bn!==e||Sn!==t)&&(ao=null,ys(e,t));do try{Sy();break}catch(s){Im(e,s)}while(!0);if(th(),Ft=n,mc.current=o,_n!==null)throw Error(Se(261));return bn=null,Sn=0,gn}function Sy(){for(;_n!==null;)Pm(_n)}function My(){for(;_n!==null&&!Jg();)Pm(_n)}function Pm(e){var t=Am(e.alternate,e,sr);e.memoizedProps=e.pendingProps,t===null?Lm(e):_n=t,_h.current=null}function Lm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=xy(n,t),n!==null){n.flags&=32767,_n=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{gn=6,_n=null;return}}else if(n=vy(n,t,sr),n!==null){_n=n;return}if(t=t.sibling,t!==null){_n=t;return}_n=t=e}while(t!==null);gn===0&&(gn=5)}function fs(e,t,n){var o=Vt,s=vr.transition;try{vr.transition=null,Vt=1,Ny(e,t,n,o)}finally{vr.transition=s,Vt=o}return null}function Ny(e,t,n,o){do pi();while($o!==null);if(Ft&6)throw Error(Se(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(Se(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(l0(e,i),e===bn&&(_n=bn=null,Sn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jl||(jl=!0,$m(ec,function(){return pi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=vr.transition,vr.transition=null;var c=Vt;Vt=1;var _=Ft;Ft|=4,_h.current=null,by(e,n),Mm(n,e),Q0(td),nc=!!ed,td=ed=null,e.current=n,ky(n),Zg(),Ft=_,Vt=c,vr.transition=i}else e.current=n;if(jl&&(jl=!1,$o=e,yc=s),i=e.pendingLanes,i===0&&(Wo=null),n0(n.stateNode),Zn(e,dn()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],o(s.value,{componentStack:s.stack,digest:s.digest});if(gc)throw gc=!1,e=wd,wd=null,e;return yc&1&&e.tag!==0&&pi(),i=e.pendingLanes,i&1?e===bd?Sa++:(Sa=0,bd=e):Sa=0,Go(),null}function pi(){if($o!==null){var e=fp(yc),t=vr.transition,n=Vt;try{if(vr.transition=null,Vt=16>e?16:e,$o===null)var o=!1;else{if(e=$o,$o=null,yc=0,Ft&6)throw Error(Se(331));var s=Ft;for(Ft|=4,tt=e.current;tt!==null;){var i=tt,c=i.child;if(tt.flags&16){var _=i.deletions;if(_!==null){for(var f=0;f<_.length;f++){var w=_[f];for(tt=w;tt!==null;){var j=tt;switch(j.tag){case 0:case 11:case 15:ja(8,j,i)}var b=j.child;if(b!==null)b.return=j,tt=b;else for(;tt!==null;){j=tt;var v=j.sibling,E=j.return;if(jm(j),j===w){tt=null;break}if(v!==null){v.return=E,tt=v;break}tt=E}}}var I=i.alternate;if(I!==null){var y=I.child;if(y!==null){I.child=null;do{var Z=y.sibling;y.sibling=null,y=Z}while(y!==null)}}tt=i}}if(i.subtreeFlags&2064&&c!==null)c.return=i,tt=c;else e:for(;tt!==null;){if(i=tt,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ja(9,i,i.return)}var C=i.sibling;if(C!==null){C.return=i.return,tt=C;break e}tt=i.return}}var L=e.current;for(tt=L;tt!==null;){c=tt;var O=c.child;if(c.subtreeFlags&2064&&O!==null)O.return=c,tt=O;else e:for(c=L;tt!==null;){if(_=tt,_.flags&2048)try{switch(_.tag){case 0:case 11:case 15:Lc(9,_)}}catch(q){an(_,_.return,q)}if(_===c){tt=null;break e}var A=_.sibling;if(A!==null){A.return=_.return,tt=A;break e}tt=_.return}}if(Ft=s,Go(),Gr&&typeof Gr.onPostCommitFiberRoot=="function")try{Gr.onPostCommitFiberRoot(Cc,e)}catch{}o=!0}return o}finally{Vt=n,vr.transition=t}}return!1}function Xf(e,t,n){t=bi(n,t),t=fm(e,t,1),e=zo(e,t,1),t=Fn(),e!==null&&(Qa(e,1,t),Zn(e,t))}function an(e,t,n){if(e.tag===3)Xf(e,e,n);else for(;t!==null;){if(t.tag===3){Xf(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Wo===null||!Wo.has(o))){e=bi(n,e),e=_m(t,e,1),t=zo(t,e,1),e=Fn(),t!==null&&(Qa(t,1,e),Zn(t,e));break}}t=t.return}}function Ey(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=Fn(),e.pingedLanes|=e.suspendedLanes&n,bn===e&&(Sn&n)===n&&(gn===4||gn===3&&(Sn&130023424)===Sn&&500>dn()-mh?ys(e,0):ph|=n),Zn(e,t)}function Tm(e,t){t===0&&(e.mode&1?(t=_l,_l<<=1,!(_l&130023424)&&(_l=4194304)):t=1);var n=Fn();e=po(e,t),e!==null&&(Qa(e,t,n),Zn(e,n))}function Iy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Tm(e,n)}function Ry(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(Se(314))}o!==null&&o.delete(t),Tm(e,n)}var Am;Am=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||qn.current)Gn=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Gn=!1,yy(e,t,n);Gn=!!(e.flags&131072)}else Gn=!1,tn&&t.flags&1048576&&Fp(t,cc,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Yl(e,t),e=t.pendingProps;var s=yi(t,Pn.current);_i(t,n),s=ch(null,t,o,e,s,n);var i=uh();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Jn(o)?(i=!0,ac(t)):i=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,oh(t),s.updater=Pc,t.stateNode=s,s._reactInternals=t,ud(t,o,e,n),t=fd(null,t,o,!0,i,n)):(t.tag=0,tn&&i&&qd(t),On(null,t,s,n),t=t.child),t;case 16:o=t.elementType;e:{switch(Yl(e,t),e=t.pendingProps,s=o._init,o=s(o._payload),t.type=o,s=t.tag=Ly(o),e=Nr(o,e),s){case 0:t=hd(null,t,o,e,n);break e;case 1:t=Df(null,t,o,e,n);break e;case 11:t=Af(null,t,o,e,n);break e;case 14:t=$f(null,t,o,Nr(o.type,e),n);break e}throw Error(Se(306,o,""))}return t;case 0:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Nr(o,s),hd(e,t,o,s,n);case 1:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Nr(o,s),Df(e,t,o,s,n);case 3:e:{if(ym(t),e===null)throw Error(Se(387));o=t.pendingProps,i=t.memoizedState,s=i.element,Vp(e,t),hc(t,o,null,n);var c=t.memoizedState;if(o=c.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){s=bi(Error(Se(423)),t),t=Of(e,t,o,n,s);break e}else if(o!==s){s=bi(Error(Se(424)),t),t=Of(e,t,o,n,s);break e}else for(ir=Bo(t.stateNode.containerInfo.firstChild),ar=t,tn=!0,Rr=null,n=Hp(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vi(),o===s){t=mo(e,t,n);break e}On(e,t,o,n)}t=t.child}return t;case 5:return Yp(t),e===null&&ad(t),o=t.type,s=t.pendingProps,i=e!==null?e.memoizedProps:null,c=s.children,nd(o,s)?c=null:i!==null&&nd(o,i)&&(t.flags|=32),gm(e,t),On(e,t,c,n),t.child;case 6:return e===null&&ad(t),null;case 13:return vm(e,t,n);case 4:return sh(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=xi(t,null,o,n):On(e,t,o,n),t.child;case 11:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Nr(o,s),Af(e,t,o,s,n);case 7:return On(e,t,t.pendingProps,n),t.child;case 8:return On(e,t,t.pendingProps.children,n),t.child;case 12:return On(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,s=t.pendingProps,i=t.memoizedProps,c=s.value,qt(uc,o._currentValue),o._currentValue=c,i!==null)if(Tr(i.value,c)){if(i.children===s.children&&!qn.current){t=mo(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var _=i.dependencies;if(_!==null){c=i.child;for(var f=_.firstContext;f!==null;){if(f.context===o){if(i.tag===1){f=ho(-1,n&-n),f.tag=2;var w=i.updateQueue;if(w!==null){w=w.shared;var j=w.pending;j===null?f.next=f:(f.next=j.next,j.next=f),w.pending=f}}i.lanes|=n,f=i.alternate,f!==null&&(f.lanes|=n),ld(i.return,n,t),_.lanes|=n;break}f=f.next}}else if(i.tag===10)c=i.type===t.type?null:i.child;else if(i.tag===18){if(c=i.return,c===null)throw Error(Se(341));c.lanes|=n,_=c.alternate,_!==null&&(_.lanes|=n),ld(c,n,t),c=i.sibling}else c=i.child;if(c!==null)c.return=i;else for(c=i;c!==null;){if(c===t){c=null;break}if(i=c.sibling,i!==null){i.return=c.return,c=i;break}c=c.return}i=c}On(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,o=t.pendingProps.children,_i(t,n),s=xr(s),o=o(s),t.flags|=1,On(e,t,o,n),t.child;case 14:return o=t.type,s=Nr(o,t.pendingProps),s=Nr(o.type,s),$f(e,t,o,s,n);case 15:return pm(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Nr(o,s),Yl(e,t),t.tag=1,Jn(o)?(e=!0,ac(t)):e=!1,_i(t,n),hm(t,o,s),ud(t,o,s,n),fd(null,t,o,!0,e,n);case 19:return xm(e,t,n);case 22:return mm(e,t,n)}throw Error(Se(156,t.tag))};function $m(e,t){return cp(e,t)}function Py(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yr(e,t,n,o){return new Py(e,t,n,o)}function xh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ly(e){if(typeof e=="function")return xh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Fd)return 11;if(e===Bd)return 14}return 2}function Uo(e,t){var n=e.alternate;return n===null?(n=yr(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Kl(e,t,n,o,s,i){var c=2;if(o=e,typeof e=="function")xh(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case Js:return vs(n.children,s,i,t);case Od:c=8,s|=8;break;case Tu:return e=yr(12,n,t,s|2),e.elementType=Tu,e.lanes=i,e;case Au:return e=yr(13,n,t,s),e.elementType=Au,e.lanes=i,e;case $u:return e=yr(19,n,t,s),e.elementType=$u,e.lanes=i,e;case Y_:return Ac(n,s,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U_:c=10;break e;case V_:c=9;break e;case Fd:c=11;break e;case Bd:c=14;break e;case Ro:c=16,o=null;break e}throw Error(Se(130,e==null?e:typeof e,""))}return t=yr(c,n,t,s),t.elementType=e,t.type=o,t.lanes=i,t}function vs(e,t,n,o){return e=yr(7,e,o,t),e.lanes=n,e}function Ac(e,t,n,o){return e=yr(22,e,o,t),e.elementType=Y_,e.lanes=n,e.stateNode={isHidden:!1},e}function mu(e,t,n){return e=yr(6,e,null,t),e.lanes=n,e}function gu(e,t,n){return t=yr(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ty(e,t,n,o,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qc(0),this.expirationTimes=qc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qc(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function wh(e,t,n,o,s,i,c,_,f){return e=new Ty(e,t,n,_,f),t===1?(t=1,i===!0&&(t|=8)):t=0,i=yr(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},oh(i),e}function Ay(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qs,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function Dm(e){if(!e)return Xo;e=e._reactInternals;e:{if(Ms(e)!==e||e.tag!==1)throw Error(Se(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Jn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(Se(171))}if(e.tag===1){var n=e.type;if(Jn(n))return Dp(e,n,t)}return t}function Om(e,t,n,o,s,i,c,_,f){return e=wh(n,o,!0,e,s,i,c,_,f),e.context=Dm(null),n=e.current,o=Fn(),s=Ho(n),i=ho(o,s),i.callback=t??null,zo(n,i,s),e.current.lanes=s,Qa(e,s,o),Zn(e,o),e}function $c(e,t,n,o){var s=t.current,i=Fn(),c=Ho(s);return n=Dm(n),t.context===null?t.context=n:t.pendingContext=n,t=ho(i,c),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=zo(s,t,c),e!==null&&(Lr(e,s,c,i),Hl(e,s,c)),c}function xc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bh(e,t){Qf(e,t),(e=e.alternate)&&Qf(e,t)}function $y(){return null}var Fm=typeof reportError=="function"?reportError:function(e){console.error(e)};function kh(e){this._internalRoot=e}Dc.prototype.render=kh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Se(409));$c(e,t,null,null)};Dc.prototype.unmount=kh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;js(function(){$c(null,e,null,null)}),t[_o]=null}};function Dc(e){this._internalRoot=e}Dc.prototype.unstable_scheduleHydration=function(e){if(e){var t=mp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lo.length&&t!==0&&t<Lo[n].priority;n++);Lo.splice(n,0,e),n===0&&yp(e)}};function jh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Kf(){}function Dy(e,t,n,o,s){if(s){if(typeof o=="function"){var i=o;o=function(){var w=xc(c);i.call(w)}}var c=Om(t,o,e,0,null,!1,!1,"",Kf);return e._reactRootContainer=c,e[_o]=c.current,$a(e.nodeType===8?e.parentNode:e),js(),c}for(;s=e.lastChild;)e.removeChild(s);if(typeof o=="function"){var _=o;o=function(){var w=xc(f);_.call(w)}}var f=wh(e,0,!1,null,null,!1,!1,"",Kf);return e._reactRootContainer=f,e[_o]=f.current,$a(e.nodeType===8?e.parentNode:e),js(function(){$c(t,f,n,o)}),f}function Fc(e,t,n,o,s){var i=n._reactRootContainer;if(i){var c=i;if(typeof s=="function"){var _=s;s=function(){var f=xc(c);_.call(f)}}$c(t,c,e,s)}else c=Dy(n,t,e,s,o);return xc(c)}_p=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_a(t.pendingLanes);n!==0&&(Hd(t,n|1),Zn(t,dn()),!(Ft&6)&&(ki=dn()+500,Go()))}break;case 13:js(function(){var o=po(e,1);if(o!==null){var s=Fn();Lr(o,e,1,s)}}),bh(e,1)}};Ud=function(e){if(e.tag===13){var t=po(e,134217728);if(t!==null){var n=Fn();Lr(t,e,134217728,n)}bh(e,134217728)}};pp=function(e){if(e.tag===13){var t=Ho(e),n=po(e,t);if(n!==null){var o=Fn();Lr(n,e,t,o)}bh(e,t)}};mp=function(){return Vt};gp=function(e,t){var n=Vt;try{return Vt=e,t()}finally{Vt=n}};Yu=function(e,t,n){switch(t){case"input":if(Fu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var s=Ec(o);if(!s)throw Error(Se(90));Q_(o),Fu(o,s)}}}break;case"textarea":G_(e,n);break;case"select":t=n.value,t!=null&&ui(e,!!n.multiple,t,!1)}};rp=gh;op=js;var Oy={usingClientEntryPoint:!1,Events:[Ga,ni,Ec,tp,np,gh]},oa={findFiberByHostInstance:ps,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fy={bundleType:oa.bundleType,version:oa.version,rendererPackageName:oa.rendererPackageName,rendererConfig:oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:go.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ap(e),e===null?null:e.stateNode},findFiberByHostInstance:oa.findFiberByHostInstance||$y,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{Cc=Cl.inject(Fy),Gr=Cl}catch{}}cr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Oy;cr.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jh(t))throw Error(Se(200));return Ay(e,t,null,n)};cr.createRoot=function(e,t){if(!jh(e))throw Error(Se(299));var n=!1,o="",s=Fm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=wh(e,1,!1,null,null,n,!1,o,s),e[_o]=t.current,$a(e.nodeType===8?e.parentNode:e),new kh(t)};cr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Se(188)):(e=Object.keys(e).join(","),Error(Se(268,e)));return e=ap(t),e=e===null?null:e.stateNode,e};cr.flushSync=function(e){return js(e)};cr.hydrate=function(e,t,n){if(!Oc(t))throw Error(Se(200));return Fc(null,e,t,!0,n)};cr.hydrateRoot=function(e,t,n){if(!jh(e))throw Error(Se(405));var o=n!=null&&n.hydratedSources||null,s=!1,i="",c=Fm;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),t=Om(t,null,e,1,n??null,s,!1,i,c),e[_o]=t.current,$a(e),o)for(e=0;e<o.length;e++)n=o[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Dc(t)};cr.render=function(e,t,n){if(!Oc(t))throw Error(Se(200));return Fc(null,e,t,!1,n)};cr.unmountComponentAtNode=function(e){if(!Oc(e))throw Error(Se(40));return e._reactRootContainer?(js(function(){Fc(null,null,e,!1,function(){e._reactRootContainer=null,e[_o]=null})}),!0):!1};cr.unstable_batchedUpdates=gh;cr.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!Oc(n))throw Error(Se(200));if(e==null||e._reactInternals===void 0)throw Error(Se(38));return Fc(e,t,n,!1,o)};cr.version="18.3.1-next-f1338f8080-20240426";function Bm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bm)}catch(e){console.error(e)}}Bm(),B_.exports=cr;var Ch=B_.exports,Gf=Ch;Pu.createRoot=Gf.createRoot,Pu.hydrateRoot=Gf.hydrateRoot;var Sh={},zm={exports:{}};(function(e,t){(function(o,s){e.exports=s()})(fg,()=>(()=>{var n=[,(c,_,f)=>{f.r(_),f.d(_,{Animation:()=>w.Animation});var w=f(2)},(c,_,f)=>{f.r(_),f.d(_,{Animation:()=>w});var w=function(){function j(b,v,E,I){this.animation=b,this.artboard=v,this.playing=I,this.loopCount=0,this.scrubTo=null,this.instance=new E.LinearAnimationInstance(b,v)}return Object.defineProperty(j.prototype,"name",{get:function(){return this.animation.name},enumerable:!1,configurable:!0}),Object.defineProperty(j.prototype,"time",{get:function(){return this.instance.time},set:function(b){this.instance.time=b},enumerable:!1,configurable:!0}),Object.defineProperty(j.prototype,"loopValue",{get:function(){return this.animation.loopValue},enumerable:!1,configurable:!0}),Object.defineProperty(j.prototype,"needsScrub",{get:function(){return this.scrubTo!==null},enumerable:!1,configurable:!0}),j.prototype.advance=function(b){this.scrubTo===null?this.instance.advance(b):(this.instance.time=0,this.instance.advance(this.scrubTo),this.scrubTo=null)},j.prototype.apply=function(b){this.instance.apply(b)},j.prototype.cleanup=function(){this.instance.delete()},j}()},(c,_,f)=>{f.r(_),f.d(_,{RuntimeLoader:()=>v});var w=f(4),j=f(5),b=function(){return b=Object.assign||function(E){for(var I,y=1,Z=arguments.length;y<Z;y++){I=arguments[y];for(var C in I)Object.prototype.hasOwnProperty.call(I,C)&&(E[C]=I[C])}return E},b.apply(this,arguments)},v=function(){function E(){}return E.notifyError=function(I){var y;for(E.isLoading=!1;E.errorCallbackQueue.length>0;)(y=E.errorCallbackQueue.shift())===null||y===void 0||y(I);E.callBackQueue=[]},E.loadRuntime=function(){var I=E.wasmURL,y=E.wasmBinary;E.enablePerfMarks&&performance.mark("rive:wasm-init:start"),w.default(b({locateFile:function(){return I}},y?{wasmBinary:y}:{})).then(function(Z){var C;for(E.enablePerfMarks&&(performance.mark("rive:wasm-init:end"),performance.measure("rive:wasm-init","rive:wasm-init:start","rive:wasm-init:end")),E.runtime=Z,E.errorCallbackQueue=[];E.callBackQueue.length>0;)(C=E.callBackQueue.shift())===null||C===void 0||C(E.runtime)}).catch(function(Z){var C={message:(Z==null?void 0:Z.message)||"Unknown error",type:(Z==null?void 0:Z.name)||"Error",wasmError:Z instanceof WebAssembly.CompileError||Z instanceof WebAssembly.RuntimeError,originalError:Z};console.debug("Rive WASM load error details:",C);var L=E.wasmFallbackURL,O=L!==null&&I.toLowerCase()===L.toLowerCase();if(L!==null&&!O)console.warn("Failed to load WASM from ".concat(I," (").concat(C.message,"), trying fallback URL: ").concat(L)),E.wasmBinary=null,E.setWasmUrl(L),E.loadRuntime();else{var A=O?"the configured WASM URL or its fallback (".concat(L,")"):I,q=["Could not load Rive WASM file from ".concat(A,"."),"Possible reasons:","- Network connection is down","- WebAssembly is not supported in this environment","- The WASM file is corrupted or incompatible",`
Error details:`,"- Type: ".concat(C.type),"- Message: ".concat(C.message),"- WebAssembly-specific error: ".concat(C.wasmError),`
To resolve, you may need to:`,"1. Check your network connection","2. Set a new WASM source via RuntimeLoader.setWasmUrl()","3. Call RuntimeLoader.awaitInstance() again"].join(`
`);console.error(q),E.notifyError(new Error(q))}})},E.getInstance=function(I,y){E.isLoading||(E.isLoading=!0,E.loadRuntime()),E.runtime?I(E.runtime):(E.callBackQueue.push(I),y&&E.errorCallbackQueue.push(y))},E.awaitInstance=function(){return new Promise(function(I,y){return E.getInstance(I,y)})},E.setWasmUrl=function(I){E.wasmURL=I},E.getWasmUrl=function(){return E.wasmURL},E.setWasmFallbackUrl=function(I){E.wasmFallbackURL=I},E.getWasmFallbackUrl=function(){return E.wasmFallbackURL},E.setWasmBinary=function(I){if(I instanceof ArrayBuffer||I===null){E.wasmBinary=I;return}console.error("setWasmBinary expects an ArrayBuffer or null")},E.getWasmBinary=function(){return E.wasmBinary},E.isLoading=!1,E.callBackQueue=[],E.wasmURL="https://unpkg.com/".concat(j.name,"@").concat(j.version,"/rive.wasm"),E.wasmFallbackURL="https://cdn.jsdelivr.net/npm/".concat(j.name,"@").concat(j.version,"/rive_fallback.wasm"),E.wasmBinary=null,E.errorCallbackQueue=[],E.enablePerfMarks=!1,E}()},(c,_,f)=>{f.r(_),f.d(_,{default:()=>j});var w=(()=>{var v;var b=typeof document<"u"?(v=document.currentScript)==null?void 0:v.src:void 0;return function(E={}){var I,y=E,Z,C,L=new Promise((a,l)=>{Z=a,C=l}),O=typeof window=="object",A=typeof importScripts=="function";function q(){function a(B){const D=p;h=l=0,p=new Map,D.forEach(X=>{try{X(B)}catch(V){console.error(V)}}),this.ob(),x&&x.Rb()}let l=0,h=0,p=new Map,x=null,M=null;this.requestAnimationFrame=function(B){l||(l=requestAnimationFrame(a.bind(this)));const D=++h;return p.set(D,B),D},this.cancelAnimationFrame=function(B){p.delete(B),l&&p.size==0&&(cancelAnimationFrame(l),l=0)},this.Pb=function(B){M&&(document.body.remove(M),M=null),B||(M=document.createElement("div"),M.style.backgroundColor="black",M.style.position="fixed",M.style.right=0,M.style.top=0,M.style.color="white",M.style.padding="4px",M.innerHTML="RIVE FPS",B=function(D){M.innerHTML="RIVE FPS "+D.toFixed(1)},document.body.appendChild(M)),x=new function(){let D=0,X=0;this.Rb=function(){var V=performance.now();X?(++D,V-=X,1e3<V&&(B(1e3*D/V),D=X=0)):(X=V,D=0)}}},this.Mb=function(){M&&(document.body.remove(M),M=null),x=null},this.ob=function(){}}function ae(a){console.assert(!0);const l=new Map;let h=-1/0;this.push=function(p){return p=p+((1<<a)-1)>>a,l.has(p)&&clearTimeout(l.get(p)),l.set(p,setTimeout(function(){l.delete(p),l.length==0?h=-1/0:p==h&&(h=Math.max(...l.keys()),console.assert(h<p))},1e3)),h=Math.max(p,h),h<<a}}const J=y.onRuntimeInitialized;y.onRuntimeInitialized=function(){J&&J();let a=y.decodeAudio;y.decodeAudio=function(M,B){M=a(M),B(M)};let l=y.decodeFont;y.decodeFont=function(M,B){M=l(M),B(M)};let h=y.setFallbackFontCb;y.setFallbackFontCallback=typeof h=="function"?function(M){h(M)}:function(){console.warn("Module.setFallbackFontCallback called, but text support is not enabled in this build.")};const p=y.FileAssetLoader;y.ptrToAsset=M=>{let B=y.ptrToFileAsset(M);return B.isImage?y.ptrToImageAsset(M):B.isFont?y.ptrToFontAsset(M):B.isAudio?y.ptrToAudioAsset(M):B},y.CustomFileAssetLoader=p.extend("CustomFileAssetLoader",{__construct:function({loadContents:M}){this.__parent.__construct.call(this),this.Eb=M},loadContents:function(M,B){return M=y.ptrToAsset(M),this.Eb(M,B)}}),y.CDNFileAssetLoader=p.extend("CDNFileAssetLoader",{__construct:function(){this.__parent.__construct.call(this)},loadContents:function(M){let B=y.ptrToAsset(M);return M=B.cdnUuid,M===""?!1:(function(D,X){var V=new XMLHttpRequest;V.responseType="arraybuffer",V.onreadystatechange=function(){V.readyState==4&&V.status==200&&X(V)},V.open("GET",D,!0),V.send(null)}(B.cdnBaseUrl+"/"+M,D=>{B.decode(new Uint8Array(D.response))}),!0)}}),y.FallbackFileAssetLoader=p.extend("FallbackFileAssetLoader",{__construct:function(){this.__parent.__construct.call(this),this.kb=[]},addLoader:function(M){this.kb.push(M)},loadContents:function(M,B){for(let D of this.kb)if(D.loadContents(M,B))return!0;return!1}});let x=y.computeAlignment;y.computeAlignment=function(M,B,D,X,V=1){return x.call(this,M,B,D,X,V)}};const ce="createConicGradient createImageData createLinearGradient createPattern createRadialGradient getContextAttributes getImageData getLineDash getTransform isContextLost isPointInPath isPointInStroke measureText".split(" "),se=new function(){function a(){if(!l){let gt=function(Ve,kt,Ht){if(kt=Te.createShader(kt),Te.shaderSource(kt,Ht),Te.compileShader(kt),Ht=Te.getShaderInfoLog(kt),0<(Ht||"").length)throw Ht;Te.attachShader(Ve,kt)};var Ue=gt,H=document.createElement("canvas"),Ie={alpha:1,depth:0,stencil:0,antialias:0,premultipliedAlpha:1,preserveDrawingBuffer:0,powerPreference:"high-performance",failIfMajorPerformanceCaveat:0,enableExtensionsByDefault:1,explicitSwapControl:1,renderViaOffscreenBackBuffer:1};let Te;if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){if(Te=H.getContext("webgl",Ie),h=1,!Te)return console.log("No WebGL support. Image mesh will not be drawn."),!1}else if(Te=H.getContext("webgl2",Ie))h=2;else if(Te=H.getContext("webgl",Ie))h=1;else return console.log("No WebGL support. Image mesh will not be drawn."),!1;if(Te=new Proxy(Te,{get(Ve,kt){if(Ve.isContextLost()){if(X||(console.error("Cannot render the mesh because the GL Context was lost. Tried to invoke ",kt),X=!0),typeof Ve[kt]=="function")return function(){}}else return typeof Ve[kt]=="function"?function(...Ht){return Ve[kt].apply(Ve,Ht)}:Ve[kt]},set(Ve,kt,Ht){if(Ve.isContextLost())X||(console.error("Cannot render the mesh because the GL Context was lost. Tried to set property "+kt),X=!0);else return Ve[kt]=Ht,!0}}),p=Math.min(Te.getParameter(Te.MAX_RENDERBUFFER_SIZE),Te.getParameter(Te.MAX_TEXTURE_SIZE)),H=Te.createProgram(),gt(H,Te.VERTEX_SHADER,`attribute vec2 vertex;
                attribute vec2 uv;
                uniform vec4 mat;
                uniform vec2 translate;
                varying vec2 st;
                void main() {
                    st = uv;
                    gl_Position = vec4(mat2(mat) * vertex + translate, 0, 1);
                }`),gt(H,Te.FRAGMENT_SHADER,`precision highp float;
                uniform sampler2D image;
                varying vec2 st;
                void main() {
                    gl_FragColor = texture2D(image, st);
                }`),Te.bindAttribLocation(H,0,"vertex"),Te.bindAttribLocation(H,1,"uv"),Te.linkProgram(H),Ie=Te.getProgramInfoLog(H),0<(Ie||"").trim().length)throw Ie;x=Te.getUniformLocation(H,"mat"),M=Te.getUniformLocation(H,"translate"),Te.useProgram(H),Te.bindBuffer(Te.ARRAY_BUFFER,Te.createBuffer()),Te.enableVertexAttribArray(0),Te.enableVertexAttribArray(1),Te.bindBuffer(Te.ELEMENT_ARRAY_BUFFER,Te.createBuffer()),Te.uniform1i(Te.getUniformLocation(H,"image"),0),Te.pixelStorei(Te.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),l=Te}return!0}let l=null,h=0,p=0,x=null,M=null,B=0,D=0,X=!1;a(),this.cc=function(){return a(),p},this.Lb=function(H){l.deleteTexture&&l.deleteTexture(H)},this.Kb=function(H){if(!a())return null;const Ie=l.createTexture();return Ie?(l.bindTexture(l.TEXTURE_2D,Ie),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,H),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MAG_FILTER,l.LINEAR),h==2?(l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR_MIPMAP_LINEAR),l.generateMipmap(l.TEXTURE_2D)):l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),Ie):null};const V=new ae(8),_e=new ae(8),Ae=new ae(10),We=new ae(10);this.Ob=function(H,Ie,Ue,Te,gt){if(a()){var Ve=V.push(H),kt=_e.push(Ie);if(l.canvas){(l.canvas.width!=Ve||l.canvas.height!=kt)&&(l.canvas.width=Ve,l.canvas.height=kt),l.viewport(0,kt-Ie,H,Ie),l.disable(l.SCISSOR_TEST),l.clearColor(0,0,0,0),l.clear(l.COLOR_BUFFER_BIT),l.enable(l.SCISSOR_TEST),Ue.sort((Tt,Ur)=>Ur.vb-Tt.vb),Ve=Ae.push(Te),B!=Ve&&(l.bufferData(l.ARRAY_BUFFER,8*Ve,l.DYNAMIC_DRAW),B=Ve),Ve=0;for(var Ht of Ue)l.bufferSubData(l.ARRAY_BUFFER,Ve,Ht.Ta),Ve+=4*Ht.Ta.length;console.assert(Ve==4*Te);for(var An of Ue)l.bufferSubData(l.ARRAY_BUFFER,Ve,An.Bb),Ve+=4*An.Bb.length;console.assert(Ve==8*Te),Ve=We.push(gt),D!=Ve&&(l.bufferData(l.ELEMENT_ARRAY_BUFFER,2*Ve,l.DYNAMIC_DRAW),D=Ve),Ht=0;for(var so of Ue)l.bufferSubData(l.ELEMENT_ARRAY_BUFFER,Ht,so.indices),Ht+=2*so.indices.length;console.assert(Ht==2*gt),so=0,An=!0,Ve=Ht=0;for(const Tt of Ue){Tt.image.Ja!=so&&(l.bindTexture(l.TEXTURE_2D,Tt.image.Ia||null),so=Tt.image.Ja),Tt.ic?(l.scissor(Tt.Za,kt-Tt.$a-Tt.jb,Tt.vc,Tt.jb),An=!0):An&&(l.scissor(0,kt-Ie,H,Ie),An=!1),Ue=2/H;const Ur=-2/Ie;l.uniform4f(x,Tt.ha[0]*Ue*Tt.Aa,Tt.ha[1]*Ur*Tt.Ba,Tt.ha[2]*Ue*Tt.Aa,Tt.ha[3]*Ur*Tt.Ba),l.uniform2f(M,Tt.ha[4]*Ue*Tt.Aa+Ue*(Tt.Za-Tt.dc*Tt.Aa)-1,Tt.ha[5]*Ur*Tt.Ba+Ur*(Tt.$a-Tt.ec*Tt.Ba)+1),l.vertexAttribPointer(0,2,l.FLOAT,!1,0,Ve),l.vertexAttribPointer(1,2,l.FLOAT,!1,0,Ve+4*Te),l.drawElements(l.TRIANGLES,Tt.indices.length,l.UNSIGNED_SHORT,Ht),Ve+=4*Tt.Ta.length,Ht+=2*Tt.indices.length}console.assert(Ve==4*Te),console.assert(Ht==2*gt)}}},this.canvas=function(){return a()&&l.canvas}},te=y.onRuntimeInitialized;y.onRuntimeInitialized=function(){function a(ve){switch(ve){case V.srcOver:return"source-over";case V.screen:return"screen";case V.overlay:return"overlay";case V.darken:return"darken";case V.lighten:return"lighten";case V.colorDodge:return"color-dodge";case V.colorBurn:return"color-burn";case V.hardLight:return"hard-light";case V.softLight:return"soft-light";case V.difference:return"difference";case V.exclusion:return"exclusion";case V.multiply:return"multiply";case V.hue:return"hue";case V.saturation:return"saturation";case V.color:return"color";case V.luminosity:return"luminosity"}}function l(ve){return"rgba("+((16711680&ve)>>>16)+","+((65280&ve)>>>8)+","+((255&ve)>>>0)+","+((4278190080&ve)>>>24)/255+")"}function h(){0<kt.length&&(se.Ob(Ve.drawWidth(),Ve.drawHeight(),kt,Ht,An),kt=[],An=Ht=0,Ve.reset(512,512));for(const ve of gt){for(const Xe of ve.I)Xe();ve.I=[]}gt.clear()}te&&te();var p=y.RenderPaintStyle;const x=y.RenderPath,M=y.RenderPaint,B=y.Renderer,D=y.StrokeCap,X=y.StrokeJoin,V=y.BlendMode,_e=p.fill,Ae=p.stroke,We=y.FillRule.evenOdd;let H=1;var Ie=y.RenderImage.extend("CanvasRenderImage",{__construct:function({la:ve,wa:Xe}={}){this.__parent.__construct.call(this),this.Ja=H,H=H+1&2147483647||1,this.la=ve,this.wa=Xe},__destruct:function(){this.Ia&&(se.Lb(this.Ia),URL.revokeObjectURL(this.Wa)),this.__parent.__destruct.call(this)},decode:function(ve){var Xe=this;Xe.wa&&Xe.wa(Xe);var At=new Image;Xe.Wa=URL.createObjectURL(new Blob([ve],{type:"image/png"})),At.onload=function(){Xe.Db=At,Xe.Ia=se.Kb(At),Xe.size(At.width,At.height),Xe.la&&Xe.la(Xe)},At.src=Xe.Wa}}),Ue=x.extend("CanvasRenderPath",{__construct:function(){this.__parent.__construct.call(this),this.U=new Path2D},rewind:function(){this.U=new Path2D},addPath:function(ve,Xe,At,Rt,xt,Pt,Nt){var Qt=this.U,Vs=Qt.addPath;ve=ve.U;const $n=new DOMMatrix;$n.a=Xe,$n.b=At,$n.c=Rt,$n.d=xt,$n.e=Pt,$n.f=Nt,Vs.call(Qt,ve,$n)},fillRule:function(ve){this.Va=ve},moveTo:function(ve,Xe){this.U.moveTo(ve,Xe)},lineTo:function(ve,Xe){this.U.lineTo(ve,Xe)},cubicTo:function(ve,Xe,At,Rt,xt,Pt){this.U.bezierCurveTo(ve,Xe,At,Rt,xt,Pt)},close:function(){this.U.closePath()}}),Te=M.extend("CanvasRenderPaint",{color:function(ve){this.Xa=l(ve)},thickness:function(ve){this.Hb=ve},join:function(ve){switch(ve){case X.miter:this.Ha="miter";break;case X.round:this.Ha="round";break;case X.bevel:this.Ha="bevel"}},cap:function(ve){switch(ve){case D.butt:this.Ga="butt";break;case D.round:this.Ga="round";break;case D.square:this.Ga="square"}},style:function(ve){this.Gb=ve},blendMode:function(ve){this.Cb=a(ve)},clearGradient:function(){this.ja=null},linearGradient:function(ve,Xe,At,Rt){this.ja={xb:ve,yb:Xe,cb:At,eb:Rt,Qa:[]}},radialGradient:function(ve,Xe,At,Rt){this.ja={xb:ve,yb:Xe,cb:At,eb:Rt,Qa:[],bc:!0}},addStop:function(ve,Xe){this.ja.Qa.push({color:ve,stop:Xe})},completeGradient:function(){},draw:function(ve,Xe,At,Rt){let xt=this.Gb;var Pt=this.Xa,Nt=this.ja;const Qt=ve.globalCompositeOperation,Vs=ve.globalAlpha;if(ve.globalCompositeOperation=this.Cb,ve.globalAlpha=Rt,Nt!=null){Pt=Nt.xb;const Cr=Nt.yb,io=Nt.cb;var $n=Nt.eb;Rt=Nt.Qa,Nt.bc?(Nt=io-Pt,$n-=Cr,Pt=ve.createRadialGradient(Pt,Cr,0,Pt,Cr,Math.sqrt(Nt*Nt+$n*$n))):Pt=ve.createLinearGradient(Pt,Cr,io,$n);for(let Sr=0,Vr=Rt.length;Sr<Vr;Sr++)Nt=Rt[Sr],Pt.addColorStop(Nt.stop,l(Nt.color));this.Xa=Pt,this.ja=null}switch(xt){case Ae:ve.strokeStyle=Pt,ve.lineWidth=this.Hb,ve.lineCap=this.Ga,ve.lineJoin=this.Ha,ve.stroke(Xe);break;case _e:ve.fillStyle=Pt,ve.fill(Xe,At)}ve.globalCompositeOperation=Qt,ve.globalAlpha=Vs}});const gt=new Set;let Ve=null,kt=[],Ht=0,An=0;var so=y.CanvasRenderer=B.extend("Renderer",{__construct:function(ve){this.__parent.__construct.call(this),this.T=[1,0,0,1,0,0],this.G=[1],this.B=ve.getContext("2d"),this.Ua=ve,this.I=[]},save:function(){this.T.push(...this.T.slice(this.T.length-6)),this.G.push(this.G[this.G.length-1]),this.I.push(this.B.save.bind(this.B))},restore:function(){const ve=this.T.length-6;if(6>ve)throw"restore() called without matching save().";this.T.splice(ve),this.G.pop(),this.I.push(this.B.restore.bind(this.B))},transform:function(ve,Xe,At,Rt,xt,Pt){const Nt=this.T,Qt=Nt.length-6;Nt.splice(Qt,6,Nt[Qt]*ve+Nt[Qt+2]*Xe,Nt[Qt+1]*ve+Nt[Qt+3]*Xe,Nt[Qt]*At+Nt[Qt+2]*Rt,Nt[Qt+1]*At+Nt[Qt+3]*Rt,Nt[Qt]*xt+Nt[Qt+2]*Pt+Nt[Qt+4],Nt[Qt+1]*xt+Nt[Qt+3]*Pt+Nt[Qt+5]),this.I.push(this.B.transform.bind(this.B,ve,Xe,At,Rt,xt,Pt))},rotate:function(ve){const Xe=Math.sin(ve);ve=Math.cos(ve),this.transform(ve,Xe,-Xe,ve,0,0)},modulateOpacity:function(ve){this.G[this.G.length-1]*=ve},_drawPath:function(ve,Xe){this.I.push(Xe.draw.bind(Xe,this.B,ve.U,ve.Va===We?"evenodd":"nonzero",Math.max(0,this.G[this.G.length-1])))},_drawRiveImage:function(ve,Xe,At,Rt){var xt=ve.Db;if(xt){var Pt=this.B,Nt=a(At),Qt=Math.max(0,Rt*this.G[this.G.length-1]);this.I.push(function(){Pt.globalCompositeOperation=Nt,Pt.globalAlpha=Qt,Pt.drawImage(xt,0,0),Pt.globalAlpha=1})}},_getMatrix:function(ve){const Xe=this.T,At=Xe.length-6;for(let Rt=0;6>Rt;++Rt)ve[Rt]=Xe[At+Rt]},_drawImageMesh:function(ve,Xe,At,Rt,xt,Pt,Nt,Qt,Vs,$n,Cr,io,Sr,Vr){let $h,Dh,Oh;try{$h=y.HEAPF32.slice(xt>>2,(xt>>2)+Pt),Dh=y.HEAPF32.slice(Nt>>2,(Nt>>2)+Qt),Oh=y.HEAPU16.slice(Vs>>1,(Vs>>1)+$n)}catch{console.error("[Rive] _drawImageMesh: failed to read mesh data from WASM heap. Mesh skipped for this frame.");return}Xe=this.B.canvas.width,xt=this.B.canvas.height,Nt=Sr-Cr,Qt=Vr-io,Cr=Math.max(Cr,0),io=Math.max(io,0),Sr=Math.min(Sr,Xe),Vr=Math.min(Vr,xt);const Ki=Sr-Cr,Gi=Vr-io;if(console.assert(Ki<=Math.min(Nt,Xe)),console.assert(Gi<=Math.min(Qt,xt)),!(0>=Ki||0>=Gi)){Sr=Ki<Nt||Gi<Qt,Xe=Vr=1;var as=Math.ceil(Ki*Vr),ls=Math.ceil(Gi*Xe);xt=se.cc(),as>xt&&(Vr*=xt/as,as=xt),ls>xt&&(Xe*=xt/ls,ls=xt),Ve||(Ve=new y.DynamicRectanizer(xt),Ve.reset(512,512)),xt=Ve.addRect(as,ls),0>xt&&(h(),gt.add(this),xt=Ve.addRect(as,ls),console.assert(0<=xt));var Fh=xt&65535,Bh=xt>>16;kt.push({ha:this.T.slice(this.T.length-6),image:ve,Za:Fh,$a:Bh,dc:Cr,ec:io,vc:as,jb:ls,Aa:Vr,Ba:Xe,Ta:$h,Bb:Dh,indices:Oh,ic:Sr,vb:ve.Ja<<1|(Sr?1:0)}),Ht+=Pt,An+=$n;var Ys=this.B,dg=a(At),hg=Math.max(0,Rt*this.G[this.G.length-1]);this.I.push(function(){Ys.save(),Ys.resetTransform(),Ys.globalCompositeOperation=dg,Ys.globalAlpha=hg;const Vc=se.canvas();Vc&&Ys.drawImage(Vc,Fh,Bh,as,ls,Cr,io,Ki,Gi),Ys.restore()})}},_clipPath:function(ve){this.I.push(this.B.clip.bind(this.B,ve.U,ve.Va===We?"evenodd":"nonzero"))},clear:function(){gt.add(this),this.I.push(this.B.clearRect.bind(this.B,0,0,this.Ua.width,this.Ua.height))},flush:function(){},translate:function(ve,Xe){this.transform(1,0,0,1,ve,Xe)}});y.makeRenderer=function(ve){const Xe=new so(ve),At=Xe.B;return new Proxy(Xe,{get(Rt,xt){if(typeof Rt[xt]=="function")return function(...Pt){return Rt[xt].apply(Rt,Pt)};if(typeof At[xt]=="function"){if(-1<ce.indexOf(xt))throw Error("RiveException: Method call to '"+xt+"()' is not allowed, as the renderer cannot immediately pass through the return                 values of any canvas 2d context methods.");return function(...Pt){Xe.I.push(At[xt].bind(At,...Pt))}}return Rt[xt]},set(Rt,xt,Pt){if(xt in At)return Xe.I.push(()=>{At[xt]=Pt}),!0}})},y.decodeImage=function(ve,Xe){new Ie({la:Xe}).decode(ve)},y.renderFactory={makeRenderPaint:function(){return new Te},makeRenderPath:function(){return new Ue},makeRenderImage:function(){let ve=Ur;return new Ie({wa:()=>{ve.total++},la:()=>{if(ve.loaded++,ve.loaded===ve.total){const Xe=ve.ready;Xe&&(Xe(),ve.ready=null)}}})}};let Tt=y.load,Ur=null;y.load=function(ve,Xe,At=!0){const Rt=new y.FallbackFileAssetLoader;return Xe!==void 0&&Rt.addLoader(Xe),At&&(Xe=new y.CDNFileAssetLoader,Rt.addLoader(Xe)),new Promise(function(xt){let Pt=null;Ur={total:0,loaded:0,ready:function(){xt(Pt)}},Pt=Tt(ve,Rt),Ur.total==0&&xt(Pt)})};let ug=y.RendererWrapper.prototype.align;y.RendererWrapper.prototype.align=function(ve,Xe,At,Rt,xt=1){ug.call(this,ve,Xe,At,Rt,xt)},p=new q,y.requestAnimationFrame=p.requestAnimationFrame.bind(p),y.cancelAnimationFrame=p.cancelAnimationFrame.bind(p),y.enableFPSCounter=p.Pb.bind(p),y.disableFPSCounter=p.Mb,p.ob=h,y.resolveAnimationFrame=h,y.cleanup=function(){Ve&&Ve.delete()}};var we=Object.assign({},y),me="./this.program",nt="",rt,ft;(O||A)&&(A?nt=self.location.href:typeof document<"u"&&document.currentScript&&(nt=document.currentScript.src),b&&(nt=b),nt.startsWith("blob:")?nt="":nt=nt.substr(0,nt.replace(/[?#].*/,"").lastIndexOf("/")+1),A&&(ft=a=>{var l=new XMLHttpRequest;return l.open("GET",a,!1),l.responseType="arraybuffer",l.send(null),new Uint8Array(l.response)}),rt=(a,l,h)=>{if(W(a)){var p=new XMLHttpRequest;p.open("GET",a,!0),p.responseType="arraybuffer",p.onload=()=>{p.status==200||p.status==0&&p.response?l(p.response):h()},p.onerror=h,p.send(null)}else fetch(a,{credentials:"same-origin"}).then(x=>x.ok?x.arrayBuffer():Promise.reject(Error(x.status+" : "+x.url))).then(l,h)});var Re=y.print||console.log.bind(console),yt=y.printErr||console.error.bind(console);Object.assign(y,we),we=null,y.thisProgram&&(me=y.thisProgram);var G;y.wasmBinary&&(G=y.wasmBinary);var pe,Ee=!1,Ge,qe,St,$t,Qe,ut,Xt,Mt;function en(){var a=pe.buffer;y.HEAP8=Ge=new Int8Array(a),y.HEAP16=St=new Int16Array(a),y.HEAPU8=qe=new Uint8Array(a),y.HEAPU16=$t=new Uint16Array(a),y.HEAP32=Qe=new Int32Array(a),y.HEAPU32=ut=new Uint32Array(a),y.HEAPF32=Xt=new Float32Array(a),y.HEAPF64=Mt=new Float64Array(a)}var Dt=[],K=[],fe=[];function ie(){var a=y.preRun.shift();Dt.unshift(a)}var Y=0,ne=null;function de(a){var l;throw(l=y.onAbort)==null||l.call(y,a),a="Aborted("+a+")",yt(a),Ee=!0,a=new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info."),C(a),a}var ye=a=>a.startsWith("data:application/octet-stream;base64,"),W=a=>a.startsWith("file://"),ee;function Fe(a){if(a==ee&&G)return new Uint8Array(G);if(ft)return ft(a);throw"both async and sync fetching of the wasm failed"}function De(a){return G?Promise.resolve().then(()=>Fe(a)):new Promise((l,h)=>{rt(a,p=>l(new Uint8Array(p)),()=>{try{l(Fe(a))}catch(p){h(p)}})})}function Ne(a,l,h){return De(a).then(p=>WebAssembly.instantiate(p,l)).then(h,p=>{yt(`failed to asynchronously prepare wasm: ${p}`),de(p)})}function Pe(a,l){var h=ee;return G||typeof WebAssembly.instantiateStreaming!="function"||ye(h)||W(h)||typeof fetch!="function"?Ne(h,a,l):fetch(h,{credentials:"same-origin"}).then(p=>WebAssembly.instantiateStreaming(p,a).then(l,function(x){return yt(`wasm streaming compile failed: ${x}`),yt("falling back to ArrayBuffer instantiation"),Ne(h,a,l)}))}var $e,Ze,g={484269:(a,l,h,p,x)=>{if(typeof window>"u"||(window.AudioContext||window.webkitAudioContext)===void 0)return 0;if(typeof window.h>"u"){window.h={za:0},window.h.J={},window.h.J.xa=a,window.h.J.capture=l,window.h.J.Ka=h,window.h.ga={},window.h.ga.stopped=p,window.h.ga.wb=x;let M=window.h;M.D=[],M.tc=function(B){for(var D=0;D<M.D.length;++D)if(M.D[D]==null)return M.D[D]=B,D;return M.D.push(B),M.D.length-1},M.Ab=function(B){for(M.D[B]=null;0<M.D.length&&M.D[M.D.length-1]==null;)M.D.pop()},M.Wc=function(B){for(var D=0;D<M.D.length;++D)if(M.D[D]==B)return M.Ab(D)},M.qa=function(B){return M.D[B]},M.Sa=["touchend","click"],M.unlock=function(){for(var B=0;B<M.D.length;++B){var D=M.D[B];D!=null&&D.L!=null&&D.state===M.ga.wb&&D.L.resume().then(()=>{U(D.pb)},X=>{console.error("Failed to resume audiocontext",X)})}M.Sa.map(function(X){document.removeEventListener(X,M.unlock,!0)})},M.Sa.map(function(B){document.addEventListener(B,M.unlock,!0)})}return window.h.za+=1,1},486447:()=>{typeof window.h<"u"&&(window.h.Sa.map(function(a){document.removeEventListener(a,window.h.unlock,!0)}),--window.h.za,window.h.za===0&&delete window.h)},486751:()=>navigator.mediaDevices!==void 0&&navigator.mediaDevices.getUserMedia!==void 0,486855:()=>{try{var a=new(window.AudioContext||window.webkitAudioContext),l=a.sampleRate;return a.close(),l}catch{return 0}},487026:(a,l,h,p,x,M)=>{if(typeof window.h>"u")return-1;var B={},D={};return a==window.h.J.xa&&h!=0&&(D.sampleRate=h),B.L=new(window.AudioContext||window.webkitAudioContext)(D),B.L.suspend(),B.state=window.h.ga.stopped,h=0,a!=window.h.J.xa&&(h=l),B.Z=B.L.createScriptProcessor(p,h,l),B.Z.onaudioprocess=function(X){if((B.ra==null||B.ra.length==0)&&(B.ra=new Float32Array(Xt.buffer,x,p*l)),a==window.h.J.capture||a==window.h.J.Ka){for(var V=0;V<l;V+=1)for(var _e=X.inputBuffer.getChannelData(V),Ae=B.ra,We=0;We<p;We+=1)Ae[We*l+V]=_e[We];oe(M,p,x)}if(a==window.h.J.xa||a==window.h.J.Ka)for(ke(M,p,x),V=0;V<X.outputBuffer.numberOfChannels;++V)for(_e=X.outputBuffer.getChannelData(V),Ae=B.ra,We=0;We<p;We+=1)_e[We]=Ae[We*l+V];else for(V=0;V<X.outputBuffer.numberOfChannels;++V)X.outputBuffer.getChannelData(V).fill(0)},a!=window.h.J.capture&&a!=window.h.J.Ka||navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(function(X){B.Ca=B.L.createMediaStreamSource(X),B.Ca.connect(B.Z),B.Z.connect(B.L.destination)}).catch(function(X){console.log("Failed to get user media: "+X)}),a==window.h.J.xa&&B.Z.connect(B.L.destination),B.pb=M,window.h.tc(B)},489903:a=>window.h.qa(a).L.sampleRate,489976:a=>{a=window.h.qa(a),a.Z!==void 0&&(a.Z.onaudioprocess=function(){},a.Z.disconnect(),a.Z=void 0),a.Ca!==void 0&&(a.Ca.disconnect(),a.Ca=void 0),a.L.close(),a.L=void 0,a.pb=void 0},490376:a=>{window.h.Ab(a)},490426:a=>{a=window.h.qa(a),a.L.resume(),a.state=window.h.ga.wb},490565:a=>{a=window.h.qa(a),a.L.suspend(),a.state=window.h.ga.stopped}},u=a=>{for(;0<a.length;)a.shift()(y)};function d(){var a=Qe[+qo>>2];return qo+=4,a}var m=(a,l)=>{for(var h=0,p=a.length-1;0<=p;p--){var x=a[p];x==="."?a.splice(p,1):x===".."?(a.splice(p,1),h++):h&&(a.splice(p,1),h--)}if(l)for(;h;h--)a.unshift("..");return a},k=a=>{var l=a.charAt(0)==="/",h=a.substr(-1)==="/";return(a=m(a.split("/").filter(p=>!!p),!l).join("/"))||l||(a="."),a&&h&&(a+="/"),(l?"/":"")+a},R=a=>{var l=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);return a=l[0],l=l[1],!a&&!l?".":(l&&(l=l.substr(0,l.length-1)),a+l)},$=a=>{if(a==="/")return"/";a=k(a),a=a.replace(/\/$/,"");var l=a.lastIndexOf("/");return l===-1?a:a.substr(l+1)},re=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return a=>crypto.getRandomValues(a);de("initRandomDevice")},ue=a=>(ue=re())(a),Q=(...a)=>{for(var l="",h=!1,p=a.length-1;-1<=p&&!h;p--){if(h=0<=p?a[p]:"/",typeof h!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!h)return"";l=h+"/"+l,h=h.charAt(0)==="/"}return l=m(l.split("/").filter(x=>!!x),!h).join("/"),(h?"/":"")+l||"."},je=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,be=(a,l,h)=>{var p=l+h;for(h=l;a[h]&&!(h>=p);)++h;if(16<h-l&&a.buffer&&je)return je.decode(a.subarray(l,h));for(p="";l<h;){var x=a[l++];if(x&128){var M=a[l++]&63;if((x&224)==192)p+=String.fromCharCode((x&31)<<6|M);else{var B=a[l++]&63;x=(x&240)==224?(x&15)<<12|M<<6|B:(x&7)<<18|M<<12|B<<6|a[l++]&63,65536>x?p+=String.fromCharCode(x):(x-=65536,p+=String.fromCharCode(55296|x>>10,56320|x&1023))}}else p+=String.fromCharCode(x)}return p},it=[],ze=a=>{for(var l=0,h=0;h<a.length;++h){var p=a.charCodeAt(h);127>=p?l++:2047>=p?l+=2:55296<=p&&57343>=p?(l+=4,++h):l+=3}return l},Le=(a,l,h,p)=>{if(!(0<p))return 0;var x=h;p=h+p-1;for(var M=0;M<a.length;++M){var B=a.charCodeAt(M);if(55296<=B&&57343>=B){var D=a.charCodeAt(++M);B=65536+((B&1023)<<10)|D&1023}if(127>=B){if(h>=p)break;l[h++]=B}else{if(2047>=B){if(h+1>=p)break;l[h++]=192|B>>6}else{if(65535>=B){if(h+2>=p)break;l[h++]=224|B>>12}else{if(h+3>=p)break;l[h++]=240|B>>18,l[h++]=128|B>>12&63}l[h++]=128|B>>6&63}l[h++]=128|B&63}}return l[h]=0,h-x};function pt(a,l){var h=Array(ze(a)+1);return a=Le(a,h,0,h.length),l&&(h.length=a),h}var vt=[];function Ct(a,l){vt[a]={input:[],H:[],W:l},Ii(a,Me)}var Me={open(a){var l=vt[a.node.ya];if(!l)throw new He(43);a.s=l,a.seekable=!1},close(a){a.s.W.pa(a.s)},pa(a){a.s.W.pa(a.s)},read(a,l,h,p){if(!a.s||!a.s.W.ib)throw new He(60);for(var x=0,M=0;M<p;M++){try{var B=a.s.W.ib(a.s)}catch{throw new He(29)}if(B===void 0&&x===0)throw new He(6);if(B==null)break;x++,l[h+M]=B}return x&&(a.node.timestamp=Date.now()),x},write(a,l,h,p){if(!a.s||!a.s.W.Na)throw new He(60);try{for(var x=0;x<p;x++)a.s.W.Na(a.s,l[h+x])}catch{throw new He(29)}return p&&(a.node.timestamp=Date.now()),x}},st={ib(){e:{if(!it.length){var a=null;if(typeof window<"u"&&typeof window.prompt=="function"&&(a=window.prompt("Input: "),a!==null&&(a+=`
`)),!a){a=null;break e}it=pt(a,!0)}a=it.shift()}return a},Na(a,l){l===null||l===10?(Re(be(a.H,0)),a.H=[]):l!=0&&a.H.push(l)},pa(a){a.H&&0<a.H.length&&(Re(be(a.H,0)),a.H=[])},Zb(){return{Fc:25856,Hc:5,Ec:191,Gc:35387,Dc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},$b(){return 0},ac(){return[24,80]}},ct={Na(a,l){l===null||l===10?(yt(be(a.H,0)),a.H=[]):l!=0&&a.H.push(l)},pa(a){a.H&&0<a.H.length&&(yt(be(a.H,0)),a.H=[])}};function at(a,l){var h=a.l?a.l.length:0;h>=l||(l=Math.max(l,h*(1048576>h?2:1.125)>>>0),h!=0&&(l=Math.max(l,256)),h=a.l,a.l=new Uint8Array(l),0<a.v&&a.l.set(h.subarray(0,a.v),0))}var Ke={O:null,V(){return Ke.createNode(null,"/",16895,0)},createNode(a,l,h,p){if((h&61440)===24576||(h&61440)===4096)throw new He(63);return Ke.O||(Ke.O={dir:{node:{Y:Ke.j.Y,R:Ke.j.R,ka:Ke.j.ka,ua:Ke.j.ua,tb:Ke.j.tb,zb:Ke.j.zb,ub:Ke.j.ub,sb:Ke.j.sb,Da:Ke.j.Da},stream:{ba:Ke.m.ba}},file:{node:{Y:Ke.j.Y,R:Ke.j.R},stream:{ba:Ke.m.ba,read:Ke.m.read,write:Ke.m.write,Ya:Ke.m.Ya,lb:Ke.m.lb,nb:Ke.m.nb}},link:{node:{Y:Ke.j.Y,R:Ke.j.R,ma:Ke.j.ma},stream:{}},ab:{node:{Y:Ke.j.Y,R:Ke.j.R},stream:Ei}}),h=Ns(a,l,h,p),(h.mode&61440)===16384?(h.j=Ke.O.dir.node,h.m=Ke.O.dir.stream,h.l={}):(h.mode&61440)===32768?(h.j=Ke.O.file.node,h.m=Ke.O.file.stream,h.v=0,h.l=null):(h.mode&61440)===40960?(h.j=Ke.O.link.node,h.m=Ke.O.link.stream):(h.mode&61440)===8192&&(h.j=Ke.O.ab.node,h.m=Ke.O.ab.stream),h.timestamp=Date.now(),a&&(a.l[l]=h,a.timestamp=h.timestamp),h},Lc(a){return a.l?a.l.subarray?a.l.subarray(0,a.v):new Uint8Array(a.l):new Uint8Array(0)},j:{Y(a){var l={};return l.Jc=(a.mode&61440)===8192?a.id:1,l.Nc=a.id,l.mode=a.mode,l.Rc=1,l.uid=0,l.Mc=0,l.ya=a.ya,(a.mode&61440)===16384?l.size=4096:(a.mode&61440)===32768?l.size=a.v:(a.mode&61440)===40960?l.size=a.link.length:l.size=0,l.Bc=new Date(a.timestamp),l.Qc=new Date(a.timestamp),l.Ic=new Date(a.timestamp),l.Ib=4096,l.Cc=Math.ceil(l.size/l.Ib),l},R(a,l){if(l.mode!==void 0&&(a.mode=l.mode),l.timestamp!==void 0&&(a.timestamp=l.timestamp),l.size!==void 0&&(l=l.size,a.v!=l))if(l==0)a.l=null,a.v=0;else{var h=a.l;a.l=new Uint8Array(l),h&&a.l.set(h.subarray(0,Math.min(l,a.v))),a.v=l}},ka(){throw Gt[44]},ua(a,l,h,p){return Ke.createNode(a,l,h,p)},tb(a,l,h){if((a.mode&61440)===16384){try{var p=vo(l,h)}catch{}if(p)for(var x in p.l)throw new He(55)}delete a.parent.l[a.name],a.parent.timestamp=Date.now(),a.name=h,l.l[h]=a,l.timestamp=a.parent.timestamp},zb(a,l){delete a.l[l],a.timestamp=Date.now()},ub(a,l){var h=vo(a,l),p;for(p in h.l)throw new He(55);delete a.l[l],a.timestamp=Date.now()},sb(a){var l=[".",".."],h;for(h of Object.keys(a.l))l.push(h);return l},Da(a,l,h){return a=Ke.createNode(a,l,41471,0),a.link=h,a},ma(a){if((a.mode&61440)!==40960)throw new He(28);return a.link}},m:{read(a,l,h,p,x){var M=a.node.l;if(x>=a.node.v)return 0;if(a=Math.min(a.node.v-x,p),8<a&&M.subarray)l.set(M.subarray(x,x+a),h);else for(p=0;p<a;p++)l[h+p]=M[x+p];return a},write(a,l,h,p,x,M){if(l.buffer===Ge.buffer&&(M=!1),!p)return 0;if(a=a.node,a.timestamp=Date.now(),l.subarray&&(!a.l||a.l.subarray)){if(M)return a.l=l.subarray(h,h+p),a.v=p;if(a.v===0&&x===0)return a.l=l.slice(h,h+p),a.v=p;if(x+p<=a.v)return a.l.set(l.subarray(h,h+p),x),p}if(at(a,x+p),a.l.subarray&&l.subarray)a.l.set(l.subarray(h,h+p),x);else for(M=0;M<p;M++)a.l[x+M]=l[h+M];return a.v=Math.max(a.v,x+p),p},ba(a,l,h){if(h===1?l+=a.position:h===2&&(a.node.mode&61440)===32768&&(l+=a.node.v),0>l)throw new He(28);return l},Ya(a,l,h){at(a.node,l+h),a.node.v=Math.max(a.node.v,l+h)},lb(a,l,h,p,x){if((a.node.mode&61440)!==32768)throw new He(43);if(a=a.node.l,x&2||a.buffer!==Ge.buffer){if((0<h||h+l<a.length)&&(a.subarray?a=a.subarray(h,h+l):a=Array.prototype.slice.call(a,h,h+l)),h=!0,de(),l=void 0,!l)throw new He(48);Ge.set(a,l)}else h=!1,l=a.byteOffset;return{o:l,Ac:h}},nb(a,l,h,p){return Ke.m.write(a,l,0,p,h,!1),0}}},Ce=(a,l)=>{var h=0;return a&&(h|=365),l&&(h|=146),h},bt=null,Wt={},ln=[],yn=1,dr=null,hr=!0,He=class{constructor(a){this.name="ErrnoError",this.aa=a}},Gt={},er=class{constructor(){this.h={},this.node=null}get flags(){return this.h.flags}set flags(a){this.h.flags=a}get position(){return this.h.position}set position(a){this.h.position=a}},Hn=class{constructor(a,l,h,p){a||(a=this),this.parent=a,this.V=a.V,this.va=null,this.id=yn++,this.name=l,this.mode=h,this.j={},this.m={},this.ya=p}get read(){return(this.mode&365)===365}set read(a){a?this.mode|=365:this.mode&=-366}get write(){return(this.mode&146)===146}set write(a){a?this.mode|=146:this.mode&=-147}};function Un(a,l={}){if(a=Q(a),!a)return{path:"",node:null};if(l=Object.assign({hb:!0,Pa:0},l),8<l.Pa)throw new He(32);a=a.split("/").filter(B=>!!B);for(var h=bt,p="/",x=0;x<a.length;x++){var M=x===a.length-1;if(M&&l.parent)break;if(h=vo(h,a[x]),p=k(p+"/"+a[x]),h.va&&(!M||M&&l.hb)&&(h=h.va.root),!M||l.gb){for(M=0;(h.mode&61440)===40960;)if(h=el(p),p=Q(R(p),h),h=Un(p,{Pa:l.Pa+1}).node,40<M++)throw new He(32)}}return{path:p,node:h}}function Ye(a){for(var l;;){if(a===a.parent)return a=a.V.mb,l?a[a.length-1]!=="/"?`${a}/${l}`:a+l:a;l=l?`${a.name}/${l}`:a.name,a=a.parent}}function Tn(a,l){for(var h=0,p=0;p<l.length;p++)h=(h<<5)-h+l.charCodeAt(p)|0;return(a+h>>>0)%dr.length}function vo(a,l){var h=(a.mode&61440)===16384?(h=Es(a,"x"))?h:a.j.ka?0:2:54;if(h)throw new He(h);for(h=dr[Tn(a.id,l)];h;h=h.hc){var p=h.name;if(h.parent.id===a.id&&p===l)return h}return a.j.ka(a,l)}function Ns(a,l,h,p){return a=new Hn(a,l,h,p),l=Tn(a.parent.id,a.name),a.hc=dr[l],dr[l]=a}function Ar(a){var l=["r","w","rw"][a&3];return a&512&&(l+="w"),l}function Es(a,l){if(hr)return 0;if(!l.includes("r")||a.mode&292){if(l.includes("w")&&!(a.mode&146)||l.includes("x")&&!(a.mode&73))return 2}else return 2;return 0}function Ni(a,l){try{return vo(a,l),20}catch{}return Es(a,"wx")}function $r(a){if(a=ln[a],!a)throw new He(8);return a}function Za(a,l=-1){if(a=Object.assign(new er,a),l==-1)e:{for(l=0;4096>=l;l++)if(!ln[l])break e;throw new He(33)}return a.X=l,ln[l]=a}function Bc(a,l=-1){var h,p;return a=Za(a,l),(p=(h=a.m)==null?void 0:h.Kc)==null||p.call(h,a),a}var Ei={open(a){var l,h;a.m=Wt[a.node.ya].m,(h=(l=a.m).open)==null||h.call(l,a)},ba(){throw new He(70)}};function Ii(a,l){Wt[a]={m:l}}function Ri(a,l){var h=l==="/";if(h&&bt)throw new He(10);if(!h&&l){var p=Un(l,{hb:!1});if(l=p.path,p=p.node,p.va)throw new He(10);if((p.mode&61440)!==16384)throw new He(54)}l={type:a,Tc:{},mb:l,fc:[]},a=a.V(l),a.V=l,l.root=a,h?bt=a:p&&(p.va=l,p.V&&p.V.fc.push(l))}function Jr(a,l,h){var p=Un(a,{parent:!0}).node;if(a=$(a),!a||a==="."||a==="..")throw new He(28);var x=Ni(p,a);if(x)throw new He(x);if(!p.j.ua)throw new He(63);return p.j.ua(p,a,l,h)}function Vn(a){return Jr(a,16895,0)}function Nn(a,l,h){typeof h>"u"&&(h=l,l=438),Jr(a,l|8192,h)}function xo(a,l){if(!Q(a))throw new He(44);var h=Un(l,{parent:!0}).node;if(!h)throw new He(44);l=$(l);var p=Ni(h,l);if(p)throw new He(p);if(!h.j.Da)throw new He(63);h.j.Da(h,l,a)}function el(a){if(a=Un(a).node,!a)throw new He(44);if(!a.j.ma)throw new He(28);return Q(Ye(a.parent),a.j.ma(a))}function Dr(a,l,h){if(a==="")throw new He(44);if(typeof l=="string"){var p={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090}[l];if(typeof p>"u")throw Error(`Unknown file open mode: ${l}`);l=p}if(h=l&64?(typeof h>"u"?438:h)&4095|32768:0,typeof a=="object")var x=a;else{a=k(a);try{x=Un(a,{gb:!(l&131072)}).node}catch{}}if(p=!1,l&64)if(x){if(l&128)throw new He(20)}else x=Jr(a,h,0),p=!0;if(!x)throw new He(44);if((x.mode&61440)===8192&&(l&=-513),l&65536&&(x.mode&61440)!==16384)throw new He(54);if(!p&&(h=x?(x.mode&61440)===40960?32:(x.mode&61440)===16384&&(Ar(l)!=="r"||l&512)?31:Es(x,Ar(l)):44))throw new He(h);if(l&512&&!p){if(h=x,h=typeof h=="string"?Un(h,{gb:!0}).node:h,!h.j.R)throw new He(63);if((h.mode&61440)===16384)throw new He(31);if((h.mode&61440)!==32768)throw new He(28);if(p=Es(h,"w"))throw new He(p);h.j.R(h,{size:0,timestamp:Date.now()})}return l&=-131713,x=Za({node:x,path:Ye(x),flags:l,seekable:!0,position:0,m:x.m,uc:[],error:!1}),x.m.open&&x.m.open(x),!y.logReadFiles||l&1||(Pi||(Pi={}),a in Pi||(Pi[a]=1)),x}function wo(a,l,h){if(a.X===null)throw new He(8);if(!a.seekable||!a.m.ba)throw new He(70);if(h!=0&&h!=1&&h!=2)throw new He(28);a.position=a.m.ba(a,l,h),a.uc=[]}var bo;function kn(a,l,h){a=k("/dev/"+a);var p=Ce(!!l,!!h);Is||(Is=64);var x=Is++<<8|0;Ii(x,{open(M){M.seekable=!1},close(){var M;(M=h==null?void 0:h.buffer)!=null&&M.length&&h(10)},read(M,B,D,X){for(var V=0,_e=0;_e<X;_e++){try{var Ae=l()}catch{throw new He(29)}if(Ae===void 0&&V===0)throw new He(6);if(Ae==null)break;V++,B[D+_e]=Ae}return V&&(M.node.timestamp=Date.now()),V},write(M,B,D,X){for(var V=0;V<X;V++)try{h(B[D+V])}catch{throw new He(29)}return X&&(M.node.timestamp=Date.now()),V}}),Nn(a,p,x)}var Is,hn={},Pi,qo=void 0,Zr=(a,l)=>Object.defineProperty(l,"name",{value:a}),tl=[],tr=[],mt,Yn=a=>{if(!a)throw new mt("Cannot use deleted val. handle = "+a);return tr[a]},jn=a=>{switch(a){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:const l=tl.pop()||tr.length;return tr[l]=a,tr[l+1]=1,l}},nn=a=>{var l=Error,h=Zr(a,function(p){this.name=a,this.message=p,p=Error(p).stack,p!==void 0&&(this.stack=this.toString()+`
`+p.replace(/^Error(:[^\n]*)?\n/,""))});return h.prototype=Object.create(l.prototype),h.prototype.constructor=h,h.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},h},eo,nr,Et=a=>{for(var l="";qe[a];)l+=nr[qe[a++]];return l},Jo=[],Li=()=>{for(;Jo.length;){var a=Jo.pop();a.g.fa=!1,a.delete()}},Zo,wt={},Ti=(a,l)=>{if(l===void 0)throw new mt("ptr should not be undefined");for(;a.C;)l=a.na(l),a=a.C;return l},vn={},Ai=a=>{a=F(a);var l=Et(a);return T(a),l},ko=(a,l)=>{var h=vn[a];if(h===void 0)throw a=`${l} has unknown type ${Ai(a)}`,new mt(a);return h},es=()=>{},$i=!1,nl=(a,l,h)=>l===h?a:h.C===void 0?null:(a=nl(a,l,h.C),a===null?null:h.Nb(a)),Or={},cn=(a,l)=>(l=Ti(a,l),wt[l]),to,ts=(a,l)=>{if(!l.u||!l.o)throw new to("makeClassHandle requires ptr and ptrType");if(!!l.K!=!!l.F)throw new to("Both smartPtrType and smartPtr must be specified");return l.count={value:1},xn(Object.create(a,{g:{value:l,writable:!0}}))},xn=a=>typeof FinalizationRegistry>"u"?(xn=l=>l,a):($i=new FinalizationRegistry(l=>{l=l.g,--l.count.value,l.count.value===0&&(l.F?l.K.P(l.F):l.u.i.P(l.o))}),xn=l=>{var h=l.g;return h.F&&$i.register(l,{g:h},l),l},es=l=>{$i.unregister(l)},xn(a)),fr={},Ot=a=>{for(;a.length;){var l=a.pop();a.pop()(l)}};function no(a){return this.fromWireType(ut[a>>2])}var Xn={},ns={},fn=(a,l,h)=>{function p(D){if(D=h(D),D.length!==a.length)throw new to("Mismatched type converter count");for(var X=0;X<a.length;++X)Qn(a[X],D[X])}a.forEach(function(D){ns[D]=l});var x=Array(l.length),M=[],B=0;l.forEach((D,X)=>{vn.hasOwnProperty(D)?x[X]=vn[D]:(M.push(D),Xn.hasOwnProperty(D)||(Xn[D]=[]),Xn[D].push(()=>{x[X]=vn[D],++B,B===M.length&&p(x)}))}),M.length===0&&p(x)};function rl(a,l,h={}){var p=l.name;if(!a)throw new mt(`type "${p}" must have a positive integer typeid pointer`);if(vn.hasOwnProperty(a)){if(h.Xb)return;throw new mt(`Cannot register type '${p}' twice`)}vn[a]=l,delete ns[a],Xn.hasOwnProperty(a)&&(l=Xn[a],delete Xn[a],l.forEach(x=>x()))}function Qn(a,l,h={}){if(!("argPackAdvance"in l))throw new TypeError("registerType registeredInstance requires argPackAdvance");return rl(a,l,h)}var Rs=a=>{throw new mt(a.g.u.i.name+" instance already deleted")};function Fr(){}var Ps=(a,l,h)=>{if(a[l].A===void 0){var p=a[l];a[l]=function(...x){if(!a[l].A.hasOwnProperty(x.length))throw new mt(`Function '${h}' called with an invalid number of arguments (${x.length}) - expects one of (${a[l].A})!`);return a[l].A[x.length].apply(this,x)},a[l].A=[],a[l].A[p.ea]=p}},jo=(a,l,h)=>{if(y.hasOwnProperty(a)){if(h===void 0||y[a].A!==void 0&&y[a].A[h]!==void 0)throw new mt(`Cannot register public name '${a}' twice`);if(Ps(y,a,a),y.hasOwnProperty(h))throw new mt(`Cannot register multiple overloads of a function with the same number of arguments (${h})!`);y[a].A[h]=l}else y[a]=l,h!==void 0&&(y[a].Sc=h)},rs=a=>{if(a===void 0)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var l=a.charCodeAt(0);return 48<=l&&57>=l?`_${a}`:a};function Ls(a,l,h,p,x,M,B,D){this.name=a,this.constructor=l,this.N=h,this.P=p,this.C=x,this.Sb=M,this.na=B,this.Nb=D,this.qb=[]}var Ts=(a,l,h)=>{for(;l!==h;){if(!l.na)throw new mt(`Expected null or instance of ${h.name}, got an instance of ${l.name}`);a=l.na(a),l=l.C}return a};function Co(a,l){if(l===null){if(this.Ma)throw new mt(`null is not a valid ${this.name}`);return 0}if(!l.g)throw new mt(`Cannot pass "${Wr(l)}" as a ${this.name}`);if(!l.g.o)throw new mt(`Cannot pass deleted object as a pointer of type ${this.name}`);return Ts(l.g.o,l.g.u.i,this.i)}function br(a,l){if(l===null){if(this.Ma)throw new mt(`null is not a valid ${this.name}`);if(this.ta){var h=this.Oa();return a!==null&&a.push(this.P,h),h}return 0}if(!l||!l.g)throw new mt(`Cannot pass "${Wr(l)}" as a ${this.name}`);if(!l.g.o)throw new mt(`Cannot pass deleted object as a pointer of type ${this.name}`);if(!this.sa&&l.g.u.sa)throw new mt(`Cannot convert argument of type ${l.g.K?l.g.K.name:l.g.u.name} to parameter type ${this.name}`);if(h=Ts(l.g.o,l.g.u.i,this.i),this.ta){if(l.g.F===void 0)throw new mt("Passing raw pointer to smart pointer is illegal");switch(this.oc){case 0:if(l.g.K===this)h=l.g.F;else throw new mt(`Cannot convert argument of type ${l.g.K?l.g.K.name:l.g.u.name} to parameter type ${this.name}`);break;case 1:h=l.g.F;break;case 2:if(l.g.K===this)h=l.g.F;else{var p=l.clone();h=this.kc(h,jn(()=>p.delete())),a!==null&&a.push(this.P,h)}break;default:throw new mt("Unsupporting sharing policy")}}return h}function ol(a,l){if(l===null){if(this.Ma)throw new mt(`null is not a valid ${this.name}`);return 0}if(!l.g)throw new mt(`Cannot pass "${Wr(l)}" as a ${this.name}`);if(!l.g.o)throw new mt(`Cannot pass deleted object as a pointer of type ${this.name}`);if(l.g.u.sa)throw new mt(`Cannot convert argument of type ${l.g.u.name} to parameter type ${this.name}`);return Ts(l.g.o,l.g.u.i,this.i)}function kr(a,l,h,p,x,M,B,D,X,V,_e){this.name=a,this.i=l,this.Ma=h,this.sa=p,this.ta=x,this.jc=M,this.oc=B,this.rb=D,this.Oa=X,this.kc=V,this.P=_e,x||l.C!==void 0?this.toWireType=br:(this.toWireType=p?Co:ol,this.M=null)}var rr=(a,l,h)=>{if(!y.hasOwnProperty(a))throw new to("Replacing nonexistent public symbol");y[a].A!==void 0&&h!==void 0?y[a].A[h]=l:(y[a]=l,y[a].ea=h)},Br=[],So,Mo=a=>{var l=Br[a];return l||(a>=Br.length&&(Br.length=a+1),Br[a]=l=So.get(a)),l},sl=(a,l,h=[])=>(a.includes("j")?(a=a.replace(/p/g,"i"),l=(0,y["dynCall_"+a])(l,...h)):l=Mo(l)(...h),l),As=(a,l)=>(...h)=>sl(a,l,h),pn=(a,l)=>{a=Et(a);var h=a.includes("j")?As(a,l):Mo(l);if(typeof h!="function")throw new mt(`unknown function pointer with signature ${a}: ${l}`);return h},$s,jr=(a,l)=>{function h(M){x[M]||vn[M]||(ns[M]?ns[M].forEach(h):(p.push(M),x[M]=!0))}var p=[],x={};throw l.forEach(h),new $s(`${a}: `+p.map(Ai).join([", "]))};function il(a){for(var l=1;l<a.length;++l)if(a[l]!==null&&a[l].M===void 0)return!0;return!1}function os(a,l,h,p,x){var M=l.length;if(2>M)throw new mt("argTypes array size mismatch! Must at least get return value and 'this' types!");var B=l[1]!==null&&h!==null,D=il(l),X=l[0].name!=="void",V=M-2,_e=Array(V),Ae=[],We=[];return Zr(a,function(...H){if(H.length!==V)throw new mt(`function ${a} called with ${H.length} arguments, expected ${V}`);if(We.length=0,Ae.length=B?2:1,Ae[0]=x,B){var Ie=l[1].toWireType(We,this);Ae[1]=Ie}for(var Ue=0;Ue<V;++Ue)_e[Ue]=l[Ue+2].toWireType(We,H[Ue]),Ae.push(_e[Ue]);if(H=p(...Ae),D)Ot(We);else for(Ue=B?1:2;Ue<l.length;Ue++){var Te=Ue===1?Ie:_e[Ue-2];l[Ue].M!==null&&l[Ue].M(Te)}return Ie=X?l[0].fromWireType(H):void 0,Ie})}var zr=(a,l)=>{for(var h=[],p=0;p<a;p++)h.push(ut[l+4*p>>2]);return h},dt=a=>{a=a.trim();const l=a.indexOf("(");return l!==-1?a.substr(0,l):a},Ds=(a,l,h)=>{if(!(a instanceof Object))throw new mt(`${h} with invalid "this": ${a}`);if(!(a instanceof l.i.constructor))throw new mt(`${h} incompatible with "this" of type ${a.constructor.name}`);if(!a.g.o)throw new mt(`cannot call emscripten binding method ${h} on deleted object`);return Ts(a.g.o,a.g.u.i,l.i)},Os=a=>{9<a&&--tr[a+1]===0&&(tr[a]=void 0,tl.push(a))},zc={name:"emscripten::val",fromWireType:a=>{var l=Yn(a);return Os(a),l},toWireType:(a,l)=>jn(l),argPackAdvance:8,readValueFromPointer:no,M:null},Di=(a,l,h)=>{switch(l){case 1:return h?function(p){return this.fromWireType(Ge[p])}:function(p){return this.fromWireType(qe[p])};case 2:return h?function(p){return this.fromWireType(St[p>>1])}:function(p){return this.fromWireType($t[p>>1])};case 4:return h?function(p){return this.fromWireType(Qe[p>>2])}:function(p){return this.fromWireType(ut[p>>2])};default:throw new TypeError(`invalid integer width (${l}): ${a}`)}},Wr=a=>{if(a===null)return"null";var l=typeof a;return l==="object"||l==="array"||l==="function"?a.toString():""+a},Fs=(a,l)=>{switch(l){case 4:return function(h){return this.fromWireType(Xt[h>>2])};case 8:return function(h){return this.fromWireType(Mt[h>>3])};default:throw new TypeError(`invalid float width (${l}): ${a}`)}},al=(a,l,h)=>{switch(l){case 1:return h?p=>Ge[p]:p=>qe[p];case 2:return h?p=>St[p>>1]:p=>$t[p>>1];case 4:return h?p=>Qe[p>>2]:p=>ut[p>>2];default:throw new TypeError(`invalid integer width (${l}): ${a}`)}},Oi=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Bs=(a,l)=>{for(var h=a>>1,p=h+l/2;!(h>=p)&&$t[h];)++h;if(h<<=1,32<h-a&&Oi)return Oi.decode(qe.subarray(a,h));for(h="",p=0;!(p>=l/2);++p){var x=St[a+2*p>>1];if(x==0)break;h+=String.fromCharCode(x)}return h},Fi=(a,l,h)=>{if(h??(h=2147483647),2>h)return 0;h-=2;var p=l;h=h<2*a.length?h/2:a.length;for(var x=0;x<h;++x)St[l>>1]=a.charCodeAt(x),l+=2;return St[l>>1]=0,l-p},ll=a=>2*a.length,zs=(a,l)=>{for(var h=0,p="";!(h>=l/4);){var x=Qe[a+4*h>>2];if(x==0)break;++h,65536<=x?(x-=65536,p+=String.fromCharCode(55296|x>>10,56320|x&1023)):p+=String.fromCharCode(x)}return p},_r=(a,l,h)=>{if(h??(h=2147483647),4>h)return 0;var p=l;h=p+h-4;for(var x=0;x<a.length;++x){var M=a.charCodeAt(x);if(55296<=M&&57343>=M){var B=a.charCodeAt(++x);M=65536+((M&1023)<<10)|B&1023}if(Qe[l>>2]=M,l+=4,l+4>h)break}return Qe[l>>2]=0,l-p},Wc=a=>{for(var l=0,h=0;h<a.length;++h){var p=a.charCodeAt(h);55296<=p&&57343>=p&&++h,l+=4}return l},Ws=(a,l,h)=>{var p=[];return a=a.toWireType(p,h),p.length&&(ut[l>>2]=jn(p)),a},No=[],Hs={},Bi=a=>{var l=Hs[a];return l===void 0?Et(a):l},Hc=a=>{var l=No.length;return No.push(a),l},ro=(a,l)=>{for(var h=Array(a),p=0;p<a;++p)h[p]=ko(ut[l+4*p>>2],"parameter "+p);return h},zi=Reflect.construct,oo=a=>a%4===0&&(a%100!==0||a%400===0),Uc=[0,31,60,91,121,152,182,213,244,274,305,335],ss=[0,31,59,90,120,151,181,212,243,273,304,334],Hr=[],Wi={},Hi=()=>{if(!Us){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:me||"./this.program"},l;for(l in Wi)Wi[l]===void 0?delete a[l]:a[l]=Wi[l];var h=[];for(l in a)h.push(`${l}=${a[l]}`);Us=h}return Us},Us,Ui=[31,29,31,30,31,30,31,31,30,31,30,31],Vi=[31,28,31,30,31,30,31,31,30,31,30,31],Yi=(a,l,h,p)=>{function x(H,Ie,Ue){for(H=typeof H=="number"?H.toString():H||"";H.length<Ie;)H=Ue[0]+H;return H}function M(H,Ie){return x(H,Ie,"0")}function B(H,Ie){function Ue(gt){return 0>gt?-1:0<gt?1:0}var Te;return(Te=Ue(H.getFullYear()-Ie.getFullYear()))===0&&(Te=Ue(H.getMonth()-Ie.getMonth()))===0&&(Te=Ue(H.getDate()-Ie.getDate())),Te}function D(H){switch(H.getDay()){case 0:return new Date(H.getFullYear()-1,11,29);case 1:return H;case 2:return new Date(H.getFullYear(),0,3);case 3:return new Date(H.getFullYear(),0,2);case 4:return new Date(H.getFullYear(),0,1);case 5:return new Date(H.getFullYear()-1,11,31);case 6:return new Date(H.getFullYear()-1,11,30)}}function X(H){var Ie=H.ca;for(H=new Date(new Date(H.da+1900,0,1).getTime());0<Ie;){var Ue=H.getMonth(),Te=(oo(H.getFullYear())?Ui:Vi)[Ue];if(Ie>Te-H.getDate())Ie-=Te-H.getDate()+1,H.setDate(1),11>Ue?H.setMonth(Ue+1):(H.setMonth(0),H.setFullYear(H.getFullYear()+1));else{H.setDate(H.getDate()+Ie);break}}return Ue=new Date(H.getFullYear()+1,0,4),Ie=D(new Date(H.getFullYear(),0,4)),Ue=D(Ue),0>=B(Ie,H)?0>=B(Ue,H)?H.getFullYear()+1:H.getFullYear():H.getFullYear()-1}var V=ut[p+40>>2];p={rc:Qe[p>>2],qc:Qe[p+4>>2],Ea:Qe[p+8>>2],Ra:Qe[p+12>>2],Fa:Qe[p+16>>2],da:Qe[p+20>>2],S:Qe[p+24>>2],ca:Qe[p+28>>2],Vc:Qe[p+32>>2],pc:Qe[p+36>>2],sc:V&&V?be(qe,V):""},h=h?be(qe,h):"",V={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var _e in V)h=h.replace(new RegExp(_e,"g"),V[_e]);var Ae="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),We="January February March April May June July August September October November December".split(" ");V={"%a":H=>Ae[H.S].substring(0,3),"%A":H=>Ae[H.S],"%b":H=>We[H.Fa].substring(0,3),"%B":H=>We[H.Fa],"%C":H=>M((H.da+1900)/100|0,2),"%d":H=>M(H.Ra,2),"%e":H=>x(H.Ra,2," "),"%g":H=>X(H).toString().substring(2),"%G":X,"%H":H=>M(H.Ea,2),"%I":H=>(H=H.Ea,H==0?H=12:12<H&&(H-=12),M(H,2)),"%j":H=>{for(var Ie=0,Ue=0;Ue<=H.Fa-1;Ie+=(oo(H.da+1900)?Ui:Vi)[Ue++]);return M(H.Ra+Ie,3)},"%m":H=>M(H.Fa+1,2),"%M":H=>M(H.qc,2),"%n":()=>`
`,"%p":H=>0<=H.Ea&&12>H.Ea?"AM":"PM","%S":H=>M(H.rc,2),"%t":()=>"	","%u":H=>H.S||7,"%U":H=>M(Math.floor((H.ca+7-H.S)/7),2),"%V":H=>{var Ie=Math.floor((H.ca+7-(H.S+6)%7)/7);if(2>=(H.S+371-H.ca-2)%7&&Ie++,Ie)Ie==53&&(Ue=(H.S+371-H.ca)%7,Ue==4||Ue==3&&oo(H.da)||(Ie=1));else{Ie=52;var Ue=(H.S+7-H.ca-1)%7;(Ue==4||Ue==5&&oo(H.da%400-1))&&Ie++}return M(Ie,2)},"%w":H=>H.S,"%W":H=>M(Math.floor((H.ca+7-(H.S+6)%7)/7),2),"%y":H=>(H.da+1900).toString().substring(2),"%Y":H=>H.da+1900,"%z":H=>{H=H.pc;var Ie=0<=H;return H=Math.abs(H)/60,(Ie?"+":"-")+("0000"+(H/60*100+H%60)).slice(-4)},"%Z":H=>H.sc,"%%":()=>"%"},h=h.replace(/%%/g,"\0\0");for(_e in V)h.includes(_e)&&(h=h.replace(new RegExp(_e,"g"),V[_e](p)));return h=h.replace(/\0\0/g,"%"),_e=pt(h,!1),_e.length>l?0:(Ge.set(_e,a),_e.length-1)};[44].forEach(a=>{Gt[a]=new He(a),Gt[a].stack="<generic error, no stack>"}),dr=Array(4096),Ri(Ke,"/"),Vn("/tmp"),Vn("/home"),Vn("/home/web_user"),function(){Vn("/dev"),Ii(259,{read:()=>0,write:(p,x,M,B)=>B}),Nn("/dev/null",259),Ct(1280,st),Ct(1536,ct),Nn("/dev/tty",1280),Nn("/dev/tty1",1536);var a=new Uint8Array(1024),l=0,h=()=>(l===0&&(l=ue(a).byteLength),a[--l]);kn("random",h),kn("urandom",h),Vn("/dev/shm"),Vn("/dev/shm/tmp")}(),function(){Vn("/proc");var a=Vn("/proc/self");Vn("/proc/self/fd"),Ri({V(){var l=Ns(a,"fd",16895,73);return l.j={ka(h,p){var x=$r(+p);return h={parent:null,V:{mb:"fake"},j:{ma:()=>x.path}},h.parent=h}},l}},"/proc/self/fd")}(),mt=y.BindingError=class extends Error{constructor(a){super(a),this.name="BindingError"}},tr.push(0,1,void 0,1,null,1,!0,1,!1,1),y.count_emval_handles=()=>tr.length/2-5-tl.length,eo=y.PureVirtualError=nn("PureVirtualError");for(var Xi=Array(256),is=0;256>is;++is)Xi[is]=String.fromCharCode(is);nr=Xi,y.getInheritedInstanceCount=()=>Object.keys(wt).length,y.getLiveInheritedInstances=()=>{var a=[],l;for(l in wt)wt.hasOwnProperty(l)&&a.push(wt[l]);return a},y.flushPendingDeletes=Li,y.setDelayFunction=a=>{Zo=a,Jo.length&&Zo&&Zo(Li)},to=y.InternalError=class extends Error{constructor(a){super(a),this.name="InternalError"}},Object.assign(Fr.prototype,{isAliasOf:function(a){if(!(this instanceof Fr&&a instanceof Fr))return!1;var l=this.g.u.i,h=this.g.o;a.g=a.g;var p=a.g.u.i;for(a=a.g.o;l.C;)h=l.na(h),l=l.C;for(;p.C;)a=p.na(a),p=p.C;return l===p&&h===a},clone:function(){if(this.g.o||Rs(this),this.g.ia)return this.g.count.value+=1,this;var a=xn,l=Object,h=l.create,p=Object.getPrototypeOf(this),x=this.g;return a=a(h.call(l,p,{g:{value:{count:x.count,fa:x.fa,ia:x.ia,o:x.o,u:x.u,F:x.F,K:x.K}}})),a.g.count.value+=1,a.g.fa=!1,a},delete(){if(this.g.o||Rs(this),this.g.fa&&!this.g.ia)throw new mt("Object already scheduled for deletion");es(this);var a=this.g;--a.count.value,a.count.value===0&&(a.F?a.K.P(a.F):a.u.i.P(a.o)),this.g.ia||(this.g.F=void 0,this.g.o=void 0)},isDeleted:function(){return!this.g.o},deleteLater:function(){if(this.g.o||Rs(this),this.g.fa&&!this.g.ia)throw new mt("Object already scheduled for deletion");return Jo.push(this),Jo.length===1&&Zo&&Zo(Li),this.g.fa=!0,this}}),Object.assign(kr.prototype,{Tb(a){return this.rb&&(a=this.rb(a)),a},bb(a){var l;(l=this.P)==null||l.call(this,a)},argPackAdvance:8,readValueFromPointer:no,fromWireType:function(a){function l(){return this.ta?ts(this.i.N,{u:this.jc,o:h,K:this,F:a}):ts(this.i.N,{u:this,o:a})}var h=this.Tb(a);if(!h)return this.bb(a),null;var p=cn(this.i,h);if(p!==void 0)return p.g.count.value===0?(p.g.o=h,p.g.F=a,p.clone()):(p=p.clone(),this.bb(a),p);if(p=this.i.Sb(h),p=Or[p],!p)return l.call(this);p=this.sa?p.Jb:p.pointerType;var x=nl(h,this.i,p.i);return x===null?l.call(this):this.ta?ts(p.i.N,{u:p,o:x,K:this,F:a}):ts(p.i.N,{u:p,o:x})}}),$s=y.UnboundTypeError=nn("UnboundTypeError");var Qi={__syscall_fcntl64:function(a,l,h){qo=h;try{var p=$r(a);switch(l){case 0:var x=d();if(0>x)break;for(;ln[x];)x++;return Bc(p,x).X;case 1:case 2:return 0;case 3:return p.flags;case 4:return x=d(),p.flags|=x,0;case 12:return x=d(),St[x+0>>1]=2,0;case 13:case 14:return 0}return-28}catch(M){if(typeof hn>"u"||M.name!=="ErrnoError")throw M;return-M.aa}},__syscall_ioctl:function(a,l,h){qo=h;try{var p=$r(a);switch(l){case 21509:return p.s?0:-59;case 21505:if(!p.s)return-59;if(p.s.W.Zb){a=[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];var x=d();Qe[x>>2]=25856,Qe[x+4>>2]=5,Qe[x+8>>2]=191,Qe[x+12>>2]=35387;for(var M=0;32>M;M++)Ge[x+M+17]=a[M]||0}return 0;case 21510:case 21511:case 21512:return p.s?0:-59;case 21506:case 21507:case 21508:if(!p.s)return-59;if(p.s.W.$b)for(x=d(),a=[],M=0;32>M;M++)a.push(Ge[x+M+17]);return 0;case 21519:return p.s?(x=d(),Qe[x>>2]=0):-59;case 21520:return p.s?-28:-59;case 21531:if(x=d(),!p.m.Yb)throw new He(59);return p.m.Yb(p,l,x);case 21523:return p.s?(p.s.W.ac&&(M=[24,80],x=d(),St[x>>1]=M[0],St[x+2>>1]=M[1]),0):-59;case 21524:return p.s?0:-59;case 21515:return p.s?0:-59;default:return-28}}catch(B){if(typeof hn>"u"||B.name!=="ErrnoError")throw B;return-B.aa}},__syscall_openat:function(a,l,h,p){qo=p;try{l=l?be(qe,l):"";var x=l;if(x.charAt(0)==="/")l=x;else{var M=a===-100?"/":$r(a).path;if(x.length==0)throw new He(44);l=k(M+"/"+x)}var B=p?d():0;return Dr(l,h,B).X}catch(D){if(typeof hn>"u"||D.name!=="ErrnoError")throw D;return-D.aa}},_abort_js:()=>{de("")},_embind_create_inheriting_constructor:(a,l,h)=>{a=Et(a),l=ko(l,"wrapper"),h=Yn(h);var p=l.i,x=p.N,M=p.C.N,B=p.C.constructor;return a=Zr(a,function(...D){p.C.qb.forEach((function(X){if(this[X]===M[X])throw new eo(`Pure virtual function ${X} must be implemented in JavaScript`)}).bind(this)),Object.defineProperty(this,"__parent",{value:x}),this.__construct(...D)}),x.__construct=function(...D){if(this===x)throw new mt("Pass correct 'this' to __construct");D=B.implement(this,...D),es(D);var X=D.g;if(D.notifyOnDestruction(),X.ia=!0,Object.defineProperties(this,{g:{value:X}}),xn(this),D=X.o,D=Ti(p,D),wt.hasOwnProperty(D))throw new mt(`Tried to register registered instance: ${D}`);wt[D]=this},x.__destruct=function(){if(this===x)throw new mt("Pass correct 'this' to __destruct");es(this);var D=this.g.o;if(D=Ti(p,D),wt.hasOwnProperty(D))delete wt[D];else throw new mt(`Tried to unregister unregistered instance: ${D}`)},a.prototype=Object.create(x),Object.assign(a.prototype,h),jn(a)},_embind_finalize_value_object:a=>{var l=fr[a];delete fr[a];var h=l.Oa,p=l.P,x=l.fb,M=x.map(B=>B.Wb).concat(x.map(B=>B.mc));fn([a],M,B=>{var D={};return x.forEach((X,V)=>{var _e=B[V],Ae=X.Ub,We=X.Vb,H=B[V+x.length],Ie=X.lc,Ue=X.nc;D[X.Qb]={read:Te=>_e.fromWireType(Ae(We,Te)),write:(Te,gt)=>{var Ve=[];Ie(Ue,Te,H.toWireType(Ve,gt)),Ot(Ve)}}}),[{name:l.name,fromWireType:X=>{var V={},_e;for(_e in D)V[_e]=D[_e].read(X);return p(X),V},toWireType:(X,V)=>{for(var _e in D)if(!(_e in V))throw new TypeError(`Missing field: "${_e}"`);var Ae=h();for(_e in D)D[_e].write(Ae,V[_e]);return X!==null&&X.push(p,Ae),Ae},argPackAdvance:8,readValueFromPointer:no,M:p}]})},_embind_register_bigint:()=>{},_embind_register_bool:(a,l,h,p)=>{l=Et(l),Qn(a,{name:l,fromWireType:function(x){return!!x},toWireType:function(x,M){return M?h:p},argPackAdvance:8,readValueFromPointer:function(x){return this.fromWireType(qe[x])},M:null})},_embind_register_class:(a,l,h,p,x,M,B,D,X,V,_e,Ae,We)=>{_e=Et(_e),M=pn(x,M),D&&(D=pn(B,D)),V&&(V=pn(X,V)),We=pn(Ae,We);var H=rs(_e);jo(H,function(){jr(`Cannot construct ${_e} due to unbound types`,[p])}),fn([a,l,h],p?[p]:[],Ie=>{if(Ie=Ie[0],p)var Ue=Ie.i,Te=Ue.N;else Te=Fr.prototype;Ie=Zr(_e,function(...Ht){if(Object.getPrototypeOf(this)!==gt)throw new mt("Use 'new' to construct "+_e);if(Ve.$===void 0)throw new mt(_e+" has no accessible constructor");var An=Ve.$[Ht.length];if(An===void 0)throw new mt(`Tried to invoke ctor of ${_e} with invalid number of parameters (${Ht.length}) - expected (${Object.keys(Ve.$).toString()}) parameters instead!`);return An.apply(this,Ht)});var gt=Object.create(Te,{constructor:{value:Ie}});Ie.prototype=gt;var Ve=new Ls(_e,Ie,gt,We,Ue,M,D,V);if(Ve.C){var kt;(kt=Ve.C).oa??(kt.oa=[]),Ve.C.oa.push(Ve)}return Ue=new kr(_e,Ve,!0,!1,!1),kt=new kr(_e+"*",Ve,!1,!1,!1),Te=new kr(_e+" const*",Ve,!1,!0,!1),Or[a]={pointerType:kt,Jb:Te},rr(H,Ie),[Ue,kt,Te]})},_embind_register_class_class_function:(a,l,h,p,x,M,B)=>{var D=zr(h,p);l=Et(l),l=dt(l),M=pn(x,M),fn([],[a],X=>{function V(){jr(`Cannot call ${_e} due to unbound types`,D)}X=X[0];var _e=`${X.name}.${l}`;l.startsWith("@@")&&(l=Symbol[l.substring(2)]);var Ae=X.i.constructor;return Ae[l]===void 0?(V.ea=h-1,Ae[l]=V):(Ps(Ae,l,_e),Ae[l].A[h-1]=V),fn([],D,We=>{if(We=os(_e,[We[0],null].concat(We.slice(1)),null,M,B),Ae[l].A===void 0?(We.ea=h-1,Ae[l]=We):Ae[l].A[h-1]=We,X.i.oa)for(const H of X.i.oa)H.constructor.hasOwnProperty(l)||(H.constructor[l]=We);return[]}),[]})},_embind_register_class_class_property:(a,l,h,p,x,M,B,D)=>{l=Et(l),M=pn(x,M),fn([],[a],X=>{X=X[0];var V=`${X.name}.${l}`,_e={get(){jr(`Cannot access ${V} due to unbound types`,[h])},enumerable:!0,configurable:!0};return _e.set=D?()=>{jr(`Cannot access ${V} due to unbound types`,[h])}:()=>{throw new mt(`${V} is a read-only property`)},Object.defineProperty(X.i.constructor,l,_e),fn([],[h],Ae=>{Ae=Ae[0];var We={get(){return Ae.fromWireType(M(p))},enumerable:!0};return D&&(D=pn(B,D),We.set=H=>{var Ie=[];D(p,Ae.toWireType(Ie,H)),Ot(Ie)}),Object.defineProperty(X.i.constructor,l,We),[]}),[]})},_embind_register_class_constructor:(a,l,h,p,x,M)=>{var B=zr(l,h);x=pn(p,x),fn([],[a],D=>{D=D[0];var X=`constructor ${D.name}`;if(D.i.$===void 0&&(D.i.$=[]),D.i.$[l-1]!==void 0)throw new mt(`Cannot register multiple constructors with identical number of parameters (${l-1}) for class '${D.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return D.i.$[l-1]=()=>{jr(`Cannot construct ${D.name} due to unbound types`,B)},fn([],B,V=>(V.splice(1,0,null),D.i.$[l-1]=os(X,V,null,x,M),[])),[]})},_embind_register_class_function:(a,l,h,p,x,M,B,D)=>{var X=zr(h,p);l=Et(l),l=dt(l),M=pn(x,M),fn([],[a],V=>{function _e(){jr(`Cannot call ${Ae} due to unbound types`,X)}V=V[0];var Ae=`${V.name}.${l}`;l.startsWith("@@")&&(l=Symbol[l.substring(2)]),D&&V.i.qb.push(l);var We=V.i.N,H=We[l];return H===void 0||H.A===void 0&&H.className!==V.name&&H.ea===h-2?(_e.ea=h-2,_e.className=V.name,We[l]=_e):(Ps(We,l,Ae),We[l].A[h-2]=_e),fn([],X,Ie=>(Ie=os(Ae,Ie,V,M,B),We[l].A===void 0?(Ie.ea=h-2,We[l]=Ie):We[l].A[h-2]=Ie,[])),[]})},_embind_register_class_property:(a,l,h,p,x,M,B,D,X,V)=>{l=Et(l),x=pn(p,x),fn([],[a],_e=>{_e=_e[0];var Ae=`${_e.name}.${l}`,We={get(){jr(`Cannot access ${Ae} due to unbound types`,[h,B])},enumerable:!0,configurable:!0};return We.set=X?()=>jr(`Cannot access ${Ae} due to unbound types`,[h,B]):()=>{throw new mt(Ae+" is a read-only property")},Object.defineProperty(_e.i.N,l,We),fn([],X?[h,B]:[h],H=>{var Ie=H[0],Ue={get(){var gt=Ds(this,_e,Ae+" getter");return Ie.fromWireType(x(M,gt))},enumerable:!0};if(X){X=pn(D,X);var Te=H[1];Ue.set=function(gt){var Ve=Ds(this,_e,Ae+" setter"),kt=[];X(V,Ve,Te.toWireType(kt,gt)),Ot(kt)}}return Object.defineProperty(_e.i.N,l,Ue),[]}),[]})},_embind_register_emval:a=>Qn(a,zc),_embind_register_enum:(a,l,h,p)=>{function x(){}l=Et(l),x.values={},Qn(a,{name:l,constructor:x,fromWireType:function(M){return this.constructor.values[M]},toWireType:(M,B)=>B.value,argPackAdvance:8,readValueFromPointer:Di(l,h,p),M:null}),jo(l,x)},_embind_register_enum_value:(a,l,h)=>{var p=ko(a,"enum");l=Et(l),a=p.constructor,p=Object.create(p.constructor.prototype,{value:{value:h},constructor:{value:Zr(`${p.name}_${l}`,function(){})}}),a.values[h]=p,a[l]=p},_embind_register_float:(a,l,h)=>{l=Et(l),Qn(a,{name:l,fromWireType:p=>p,toWireType:(p,x)=>x,argPackAdvance:8,readValueFromPointer:Fs(l,h),M:null})},_embind_register_function:(a,l,h,p,x,M)=>{var B=zr(l,h);a=Et(a),a=dt(a),x=pn(p,x),jo(a,function(){jr(`Cannot call ${a} due to unbound types`,B)},l-1),fn([],B,D=>(rr(a,os(a,[D[0],null].concat(D.slice(1)),null,x,M),l-1),[]))},_embind_register_integer:(a,l,h,p,x)=>{if(l=Et(l),x===-1&&(x=4294967295),x=D=>D,p===0){var M=32-8*h;x=D=>D<<M>>>M}var B=l.includes("unsigned")?function(D,X){return X>>>0}:function(D,X){return X};Qn(a,{name:l,fromWireType:x,toWireType:B,argPackAdvance:8,readValueFromPointer:al(l,h,p!==0),M:null})},_embind_register_memory_view:(a,l,h)=>{function p(M){return new x(Ge.buffer,ut[M+4>>2],ut[M>>2])}var x=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][l];h=Et(h),Qn(a,{name:h,fromWireType:p,argPackAdvance:8,readValueFromPointer:p},{Xb:!0})},_embind_register_std_string:(a,l)=>{l=Et(l);var h=l==="std::string";Qn(a,{name:l,fromWireType:function(p){var x=ut[p>>2],M=p+4;if(h)for(var B=M,D=0;D<=x;++D){var X=M+D;if(D==x||qe[X]==0){if(B=B?be(qe,B,X-B):"",V===void 0)var V=B;else V+="\0",V+=B;B=X+1}}else{for(V=Array(x),D=0;D<x;++D)V[D]=String.fromCharCode(qe[M+D]);V=V.join("")}return T(p),V},toWireType:function(p,x){x instanceof ArrayBuffer&&(x=new Uint8Array(x));var M=typeof x=="string";if(!(M||x instanceof Uint8Array||x instanceof Uint8ClampedArray||x instanceof Int8Array))throw new mt("Cannot pass non-string to std::string");var B=h&&M?ze(x):x.length,D=z(4+B+1),X=D+4;if(ut[D>>2]=B,h&&M)Le(x,qe,X,B+1);else if(M)for(M=0;M<B;++M){var V=x.charCodeAt(M);if(255<V)throw T(X),new mt("String has UTF-16 code units that do not fit in 8 bits");qe[X+M]=V}else for(M=0;M<B;++M)qe[X+M]=x[M];return p!==null&&p.push(T,D),D},argPackAdvance:8,readValueFromPointer:no,M(p){T(p)}})},_embind_register_std_wstring:(a,l,h)=>{if(h=Et(h),l===2)var p=Bs,x=Fi,M=ll,B=D=>$t[D>>1];else l===4&&(p=zs,x=_r,M=Wc,B=D=>ut[D>>2]);Qn(a,{name:h,fromWireType:D=>{for(var X=ut[D>>2],V,_e=D+4,Ae=0;Ae<=X;++Ae){var We=D+4+Ae*l;(Ae==X||B(We)==0)&&(_e=p(_e,We-_e),V===void 0?V=_e:(V+="\0",V+=_e),_e=We+l)}return T(D),V},toWireType:(D,X)=>{if(typeof X!="string")throw new mt(`Cannot pass non-string to C++ string type ${h}`);var V=M(X),_e=z(4+V+l);return ut[_e>>2]=V/l,x(X,_e+4,V+l),D!==null&&D.push(T,_e),_e},argPackAdvance:8,readValueFromPointer:no,M(D){T(D)}})},_embind_register_value_object:(a,l,h,p,x,M)=>{fr[a]={name:Et(l),Oa:pn(h,p),P:pn(x,M),fb:[]}},_embind_register_value_object_field:(a,l,h,p,x,M,B,D,X,V)=>{fr[a].fb.push({Qb:Et(l),Wb:h,Ub:pn(p,x),Vb:M,mc:B,lc:pn(D,X),nc:V})},_embind_register_void:(a,l)=>{l=Et(l),Qn(a,{Oc:!0,name:l,argPackAdvance:0,fromWireType:()=>{},toWireType:()=>{}})},_emscripten_get_now_is_monotonic:()=>1,_emscripten_memcpy_js:(a,l,h)=>qe.copyWithin(a,l,l+h),_emscripten_throw_longjmp:()=>{throw 1/0},_emval_as:(a,l,h)=>(a=Yn(a),l=ko(l,"emval::as"),Ws(l,h,a)),_emval_call:(a,l,h,p)=>(a=No[a],l=Yn(l),a(null,l,h,p)),_emval_call_method:(a,l,h,p,x)=>(a=No[a],l=Yn(l),h=Bi(h),a(l,l[h],p,x)),_emval_decref:Os,_emval_get_method_caller:(a,l,h)=>{var p=ro(a,l),x=p.shift();a--;var M=Array(a);return l=`methodCaller<(${p.map(B=>B.name).join(", ")}) => ${x.name}>`,Hc(Zr(l,(B,D,X,V)=>{for(var _e=0,Ae=0;Ae<a;++Ae)M[Ae]=p[Ae].readValueFromPointer(V+_e),_e+=p[Ae].argPackAdvance;return B=h===1?zi(D,M):D.apply(B,M),Ws(x,X,B)}))},_emval_get_module_property:a=>(a=Bi(a),jn(y[a])),_emval_get_property:(a,l)=>(a=Yn(a),l=Yn(l),jn(a[l])),_emval_incref:a=>{9<a&&(tr[a+1]+=1)},_emval_new_array:()=>jn([]),_emval_new_cstring:a=>jn(Bi(a)),_emval_new_object:()=>jn({}),_emval_run_destructors:a=>{var l=Yn(a);Ot(l),Os(a)},_emval_set_property:(a,l,h)=>{a=Yn(a),l=Yn(l),h=Yn(h),a[l]=h},_emval_take_value:(a,l)=>(a=ko(a,"_emval_take_value"),a=a.readValueFromPointer(l),jn(a)),_gmtime_js:function(a,l,h){a=new Date(1e3*(l+2097152>>>0<4194305-!!a?(a>>>0)+4294967296*l:NaN)),Qe[h>>2]=a.getUTCSeconds(),Qe[h+4>>2]=a.getUTCMinutes(),Qe[h+8>>2]=a.getUTCHours(),Qe[h+12>>2]=a.getUTCDate(),Qe[h+16>>2]=a.getUTCMonth(),Qe[h+20>>2]=a.getUTCFullYear()-1900,Qe[h+24>>2]=a.getUTCDay(),Qe[h+28>>2]=(a.getTime()-Date.UTC(a.getUTCFullYear(),0,1,0,0,0,0))/864e5|0},_localtime_js:function(a,l,h){a=new Date(1e3*(l+2097152>>>0<4194305-!!a?(a>>>0)+4294967296*l:NaN)),Qe[h>>2]=a.getSeconds(),Qe[h+4>>2]=a.getMinutes(),Qe[h+8>>2]=a.getHours(),Qe[h+12>>2]=a.getDate(),Qe[h+16>>2]=a.getMonth(),Qe[h+20>>2]=a.getFullYear()-1900,Qe[h+24>>2]=a.getDay(),Qe[h+28>>2]=(oo(a.getFullYear())?Uc:ss)[a.getMonth()]+a.getDate()-1|0,Qe[h+36>>2]=-(60*a.getTimezoneOffset()),l=new Date(a.getFullYear(),6,1).getTimezoneOffset();var p=new Date(a.getFullYear(),0,1).getTimezoneOffset();Qe[h+32>>2]=(l!=p&&a.getTimezoneOffset()==Math.min(p,l))|0},_tzset_js:(a,l,h,p)=>{var x=new Date().getFullYear(),M=new Date(x,0,1),B=new Date(x,6,1);x=M.getTimezoneOffset();var D=B.getTimezoneOffset();ut[a>>2]=60*Math.max(x,D),Qe[l>>2]=+(x!=D),a=X=>X.toLocaleTimeString(void 0,{hour12:!1,timeZoneName:"short"}).split(" ")[1],M=a(M),B=a(B),D<x?(Le(M,qe,h,17),Le(B,qe,p,17)):(Le(M,qe,p,17),Le(B,qe,h,17))},emscripten_asm_const_int:(a,l,h)=>{Hr.length=0;for(var p;p=qe[l++];){var x=p!=105;x&=p!=112,h+=x&&h%8?4:0,Hr.push(p==112?ut[h>>2]:p==105?Qe[h>>2]:Mt[h>>3]),h+=x?8:4}return g[a](...Hr)},emscripten_date_now:()=>Date.now(),emscripten_get_now:()=>performance.now(),emscripten_resize_heap:a=>{var l=qe.length;if(a>>>=0,2147483648<a)return!1;for(var h=1;4>=h;h*=2){var p=l*(1+.2/h);p=Math.min(p,a+100663296);var x=Math;p=Math.max(a,p);e:{x=(x.min.call(x,2147483648,p+(65536-p%65536)%65536)-pe.buffer.byteLength+65535)/65536;try{pe.grow(x),en();var M=1;break e}catch{}M=void 0}if(M)return!0}return!1},environ_get:(a,l)=>{var h=0;return Hi().forEach((p,x)=>{var M=l+h;for(x=ut[a+4*x>>2]=M,M=0;M<p.length;++M)Ge[x++]=p.charCodeAt(M);Ge[x]=0,h+=p.length+1}),0},environ_sizes_get:(a,l)=>{var h=Hi();ut[a>>2]=h.length;var p=0;return h.forEach(x=>p+=x.length+1),ut[l>>2]=p,0},fd_close:function(a){try{var l=$r(a);if(l.X===null)throw new He(8);l.La&&(l.La=null);try{l.m.close&&l.m.close(l)}catch(h){throw h}finally{ln[l.X]=null}return l.X=null,0}catch(h){if(typeof hn>"u"||h.name!=="ErrnoError")throw h;return h.aa}},fd_read:function(a,l,h,p){try{e:{var x=$r(a);a=l;for(var M,B=l=0;B<h;B++){var D=ut[a>>2],X=ut[a+4>>2];a+=8;var V=x,_e=M,Ae=Ge;if(0>X||0>_e)throw new He(28);if(V.X===null)throw new He(8);if((V.flags&2097155)===1)throw new He(8);if((V.node.mode&61440)===16384)throw new He(31);if(!V.m.read)throw new He(28);var We=typeof _e<"u";if(!We)_e=V.position;else if(!V.seekable)throw new He(70);var H=V.m.read(V,Ae,D,X,_e);We||(V.position+=H);var Ie=H;if(0>Ie){var Ue=-1;break e}if(l+=Ie,Ie<X)break;typeof M<"u"&&(M+=Ie)}Ue=l}return ut[p>>2]=Ue,0}catch(Te){if(typeof hn>"u"||Te.name!=="ErrnoError")throw Te;return Te.aa}},fd_seek:function(a,l,h,p,x){l=h+2097152>>>0<4194305-!!l?(l>>>0)+4294967296*h:NaN;try{if(isNaN(l))return 61;var M=$r(a);return wo(M,l,p),Ze=[M.position>>>0,($e=M.position,1<=+Math.abs($e)?0<$e?+Math.floor($e/4294967296)>>>0:~~+Math.ceil(($e-+(~~$e>>>0))/4294967296)>>>0:0)],Qe[x>>2]=Ze[0],Qe[x+4>>2]=Ze[1],M.La&&l===0&&p===0&&(M.La=null),0}catch(B){if(typeof hn>"u"||B.name!=="ErrnoError")throw B;return B.aa}},fd_write:function(a,l,h,p){try{e:{var x=$r(a);a=l;for(var M,B=l=0;B<h;B++){var D=ut[a>>2],X=ut[a+4>>2];a+=8;var V=x,_e=D,Ae=X,We=M,H=Ge;if(0>Ae||0>We)throw new He(28);if(V.X===null)throw new He(8);if(!(V.flags&2097155))throw new He(8);if((V.node.mode&61440)===16384)throw new He(31);if(!V.m.write)throw new He(28);V.seekable&&V.flags&1024&&wo(V,0,2);var Ie=typeof We<"u";if(!Ie)We=V.position;else if(!V.seekable)throw new He(70);var Ue=V.m.write(V,H,_e,Ae,We,void 0);Ie||(V.position+=Ue);var Te=Ue;if(0>Te){var gt=-1;break e}l+=Te,typeof M<"u"&&(M+=Te)}gt=l}return ut[p>>2]=gt,0}catch(Ve){if(typeof hn>"u"||Ve.name!=="ErrnoError")throw Ve;return Ve.aa}},invoke_vii:lt,isWindowsBrowser:function(){return-1<navigator.platform.indexOf("Win")},strftime:Yi,strftime_l:(a,l,h,p)=>Yi(a,l,h,p),wasm_start_image_decode:function(a,l,h){l=y.HEAP8.subarray(l,l+h),h=new Uint8Array(h),h.set(l),createImageBitmap(new Blob([h])).then(function(p){var x=new OffscreenCanvas(p.width,p.height).getContext("2d");x.drawImage(p,0,0),x=x.getImageData(0,0,p.width,p.height);var M=x.data.length,B=y.Fb(M);y.wc.set(x.data,B),y.yc(a,p.width,p.height,B,M)}).catch(function(p){p=p.message||"decode failed";var x=y.Pc(p)+1,M=y.Fb(x);y.Uc(p,M,x),y.zc(a,M),y.xc(M)})}},S=function(){var h;function a(p){var x;return S=p.exports,pe=S.memory,en(),So=S.__indirect_function_table,K.unshift(S.__wasm_call_ctors),Y--,(x=y.monitorRunDependencies)==null||x.call(y,Y),Y==0&&ne&&(p=ne,ne=null,p()),S}var l={env:Qi,wasi_snapshot_preview1:Qi};if(Y++,(h=y.monitorRunDependencies)==null||h.call(y,Y),y.instantiateWasm)try{return y.instantiateWasm(l,a)}catch(p){yt(`Module.instantiateWasm callback failed with error: ${p}`),C(p)}return ee||(ee=ye("canvas_advanced.wasm")?"canvas_advanced.wasm":y.locateFile?y.locateFile("canvas_advanced.wasm",nt):nt+"canvas_advanced.wasm"),Pe(l,function(p){a(p.instance)}).catch(C),{}}(),T=a=>(T=S.free)(a),z=a=>(z=S.malloc)(a),F=a=>(F=S.__getTypeName)(a);y._wasm_image_decode_complete=(a,l,h,p,x)=>(y._wasm_image_decode_complete=S.wasm_image_decode_complete)(a,l,h,p,x),y._wasm_image_decode_error=(a,l)=>(y._wasm_image_decode_error=S.wasm_image_decode_error)(a,l);var U=y._ma_device__on_notification_unlocked=a=>(U=y._ma_device__on_notification_unlocked=S.ma_device__on_notification_unlocked)(a);y._ma_malloc_emscripten=(a,l)=>(y._ma_malloc_emscripten=S.ma_malloc_emscripten)(a,l),y._ma_free_emscripten=(a,l)=>(y._ma_free_emscripten=S.ma_free_emscripten)(a,l);var oe=y._ma_device_process_pcm_frames_capture__webaudio=(a,l,h)=>(oe=y._ma_device_process_pcm_frames_capture__webaudio=S.ma_device_process_pcm_frames_capture__webaudio)(a,l,h),ke=y._ma_device_process_pcm_frames_playback__webaudio=(a,l,h)=>(ke=y._ma_device_process_pcm_frames_playback__webaudio=S.ma_device_process_pcm_frames_playback__webaudio)(a,l,h),Oe=(a,l)=>(Oe=S.setThrew)(a,l),Be=a=>(Be=S._emscripten_stack_restore)(a),ot=()=>(ot=S.emscripten_stack_get_current)();y.dynCall_iiji=(a,l,h,p,x)=>(y.dynCall_iiji=S.dynCall_iiji)(a,l,h,p,x),y.dynCall_jiji=(a,l,h,p,x)=>(y.dynCall_jiji=S.dynCall_jiji)(a,l,h,p,x),y.dynCall_iiiji=(a,l,h,p,x,M)=>(y.dynCall_iiiji=S.dynCall_iiiji)(a,l,h,p,x,M),y.dynCall_iij=(a,l,h,p)=>(y.dynCall_iij=S.dynCall_iij)(a,l,h,p),y.dynCall_jii=(a,l,h)=>(y.dynCall_jii=S.dynCall_jii)(a,l,h),y.dynCall_viijii=(a,l,h,p,x,M,B)=>(y.dynCall_viijii=S.dynCall_viijii)(a,l,h,p,x,M,B),y.dynCall_iiiiij=(a,l,h,p,x,M,B)=>(y.dynCall_iiiiij=S.dynCall_iiiiij)(a,l,h,p,x,M,B),y.dynCall_iiiiijj=(a,l,h,p,x,M,B,D,X)=>(y.dynCall_iiiiijj=S.dynCall_iiiiijj)(a,l,h,p,x,M,B,D,X),y.dynCall_iiiiiijj=(a,l,h,p,x,M,B,D,X,V)=>(y.dynCall_iiiiiijj=S.dynCall_iiiiiijj)(a,l,h,p,x,M,B,D,X,V);function lt(a,l,h){var p=ot();try{Mo(a)(l,h)}catch(x){if(Be(p),x!==x+0)throw x;Oe(1,0)}}var ht;ne=function a(){ht||jt(),ht||(ne=a)};function jt(){function a(){if(!ht&&(ht=!0,y.calledRun=!0,!Ee)){if(y.noFSInit||bo||(bo=!0,y.stdin=y.stdin,y.stdout=y.stdout,y.stderr=y.stderr,y.stdin?kn("stdin",y.stdin):xo("/dev/tty","/dev/stdin"),y.stdout?kn("stdout",null,y.stdout):xo("/dev/tty","/dev/stdout"),y.stderr?kn("stderr",null,y.stderr):xo("/dev/tty1","/dev/stderr"),Dr("/dev/stdin",0),Dr("/dev/stdout",1),Dr("/dev/stderr",1)),hr=!1,u(K),Z(y),y.onRuntimeInitialized&&y.onRuntimeInitialized(),y.postRun)for(typeof y.postRun=="function"&&(y.postRun=[y.postRun]);y.postRun.length;){var l=y.postRun.shift();fe.unshift(l)}u(fe)}}if(!(0<Y)){if(y.preRun)for(typeof y.preRun=="function"&&(y.preRun=[y.preRun]);y.preRun.length;)ie();u(Dt),0<Y||(y.setStatus?(y.setStatus("Running..."),setTimeout(function(){setTimeout(function(){y.setStatus("")},1),a()},1)):a())}}if(y.preInit)for(typeof y.preInit=="function"&&(y.preInit=[y.preInit]);0<y.preInit.length;)y.preInit.pop()();return jt(),I=L,I}})();const j=w},c=>{c.exports=JSON.parse(`{"name":"@rive-app/canvas","version":"2.37.8","description":"Rive's canvas based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)"],"license":"MIT","files":["rive.js","rive.js.map","rive.wasm","rive_fallback.wasm","rive.d.ts","rive_advanced.mjs.d.ts","runtimeLoader.d.ts","utils"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}`)},(c,_,f)=>{f.r(_),f.d(_,{AudioAssetWrapper:()=>v.AudioAssetWrapper,AudioWrapper:()=>v.AudioWrapper,BLANK_URL:()=>b.BLANK_URL,CustomFileAssetLoaderWrapper:()=>v.CustomFileAssetLoaderWrapper,FileAssetWrapper:()=>v.FileAssetWrapper,FileFinalizer:()=>v.FileFinalizer,FontAssetWrapper:()=>v.FontAssetWrapper,FontWrapper:()=>v.FontWrapper,ImageAssetWrapper:()=>v.ImageAssetWrapper,ImageWrapper:()=>v.ImageWrapper,RiveFont:()=>E.RiveFont,createFinalization:()=>v.createFinalization,finalizationRegistry:()=>v.finalizationRegistry,registerKeyboardInteractions:()=>j.registerKeyboardInteractions,registerTouchInteractions:()=>w.registerTouchInteractions,sanitizeUrl:()=>b.sanitizeUrl});var w=f(7),j=f(8),b=f(9),v=f(10),E=f(11)},(c,_,f)=>{f.r(_),f.d(_,{registerTouchInteractions:()=>v});var w=void 0,j=function(E,I,y){var Z,C=[];if(I)for(var L=0;L<E.length;L++){var O=E[L];C.push({clientX:O.clientX,clientY:O.clientY,identifier:O.identifier})}else{var A=y!==null?(Z=Array.from(E).find(function(q){return q.identifier===y}))!==null&&Z!==void 0?Z:null:E[0];A&&C.push({clientX:A.clientX,clientY:A.clientY,identifier:A.identifier})}return C},b=function(E,I,y,Z){var C,L=E;return!((C=L.changedTouches)===null||C===void 0)&&C.length?(!I&&["touchstart","touchmove"].includes(E.type)&&E.preventDefault(),j(L.changedTouches,y,Z)):[{clientX:E.clientX,clientY:E.clientY,identifier:0}]},v=function(E){var I=E.canvas,y=E.artboard,Z=E.stateMachines,C=Z===void 0?[]:Z,L=E.renderer,O=E.rive,A=E.fit,q=E.alignment,ae=E.isTouchScrollEnabled,J=ae===void 0?!1:ae,ce=E.dispatchPointerExit,se=ce===void 0?!0:ce,te=E.enableMultiTouch,we=te===void 0?!1:te,me=E.layoutScaleFactor,nt=me===void 0?1:me;if(!I||!C.length||!L||!O||!y||typeof window>"u")return null;var rt=null,ft=!1,Re=null,yt=function(Ee){var Ge;if(ft&&Ee instanceof MouseEvent){Ee.type=="mouseup"&&(ft=!1);return}ft=J&&Ee.type==="touchend"&&rt==="touchstart",rt=Ee.type;var qe=Ee.currentTarget.getBoundingClientRect();if(!we&&Ee.type==="touchstart"&&Re===null){var St=(Ge=Ee.changedTouches)===null||Ge===void 0?void 0:Ge[0];St&&(Re=St.identifier)}var $t=b(Ee,J,we,we?null:Re),Qe=O.computeAlignment(A,q,{minX:0,minY:0,maxX:qe.width,maxY:qe.height},y.bounds,nt),ut=new O.Mat2D;switch(Qe.invert(ut),$t.forEach(function(Pe){var $e=Pe.clientX,Ze=Pe.clientY;if(!(!$e&&!Ze)){var g=$e-qe.left,u=Ze-qe.top,d=new O.Vec2D(g,u),m=O.mapXY(ut,d),k=m.x(),R=m.y();Pe.transformedX=k,Pe.transformedY=R,m.delete(),d.delete()}}),ut.delete(),Qe.delete(),Ee.type){case"mouseout":for(var Xt=function(Pe){se?$t.forEach(function($e){Pe.pointerExit($e.transformedX,$e.transformedY,$e.identifier)}):$t.forEach(function($e){Pe.pointerMove($e.transformedX,$e.transformedY,$e.identifier)})},Mt=0,en=C;Mt<en.length;Mt++){var Dt=en[Mt];Xt(Dt)}break;case"touchmove":case"mouseover":case"mousemove":{for(var K=function(Pe){$t.forEach(function($e){Pe.pointerMove($e.transformedX,$e.transformedY,$e.identifier)})},fe=0,ie=C;fe<ie.length;fe++){var Dt=ie[fe];K(Dt)}break}case"touchstart":case"mousedown":{for(var Y=function(Pe){$t.forEach(function($e){Pe.pointerDown($e.transformedX,$e.transformedY,$e.identifier)})},ne=0,de=C;ne<de.length;ne++){var Dt=de[ne];Y(Dt)}break}case"touchend":{for(var ye=function(Pe){$t.forEach(function($e){Pe.pointerUp($e.transformedX,$e.transformedY,$e.identifier),Pe.pointerExit($e.transformedX,$e.transformedY,$e.identifier)})},W=0,ee=C;W<ee.length;W++){var Dt=ee[W];ye(Dt)}!we&&$t.some(function(Pe){return Pe.identifier===Re})&&(Re=null);break}case"mouseup":{for(var Fe=function(Pe){$t.forEach(function($e){Pe.pointerUp($e.transformedX,$e.transformedY,$e.identifier)})},De=0,Ne=C;De<Ne.length;De++){var Dt=Ne[De];Fe(Dt)}break}}},G=function(){Re=null},pe=yt.bind(w);return I.addEventListener("mouseover",pe),I.addEventListener("mouseout",pe),I.addEventListener("mousemove",pe),I.addEventListener("mousedown",pe),I.addEventListener("mouseup",pe),I.addEventListener("touchmove",pe,{passive:J}),I.addEventListener("touchstart",pe,{passive:J}),I.addEventListener("touchend",pe),I.addEventListener("touchcancel",G),function(){I.removeEventListener("mouseover",pe),I.removeEventListener("mouseout",pe),I.removeEventListener("mousemove",pe),I.removeEventListener("mousedown",pe),I.removeEventListener("mouseup",pe),I.removeEventListener("touchmove",pe),I.removeEventListener("touchstart",pe),I.removeEventListener("touchend",pe),I.removeEventListener("touchcancel",G)}}},(c,_,f)=>{f.r(_),f.d(_,{registerKeyboardInteractions:()=>w});var w=function(j){var b=j.canvas,v=j.stateMachine,E=j.rive,I=j.hasFocusNodes;if(!b||!v||!E||typeof window>"u")return null;var y=v,Z=!1,C=function(A){Z=!0},L=function(A){Z=!1},O=function(A){if(Z&&A.code==="Tab"&&I){var q=!A.shiftKey,ae=q?y.focusNext():y.focusPrevious();ae?A.preventDefault():Z=!1}};return b.addEventListener("focus",C),b.addEventListener("blur",L),b.addEventListener("keydown",O),function(){b.removeEventListener("focus",C),b.removeEventListener("blur",L),b.removeEventListener("keydown",O)}}},(c,_,f)=>{f.r(_),f.d(_,{BLANK_URL:()=>y,sanitizeUrl:()=>L});var w=/^([^\w]*)(javascript|data|vbscript)/im,j=/&#(\w+)(^\w|;)?/g,b=/&(newline|tab);/gi,v=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,E=/^.+(:|&colon;)/gim,I=[".","/"],y="about:blank";function Z(O){return I.indexOf(O[0])>-1}function C(O){var A=O.replace(v,"");return A.replace(j,function(q,ae){return String.fromCharCode(ae)})}function L(O){if(!O)return y;var A=C(O).replace(b,"").replace(v,"").trim();if(!A)return y;if(Z(A))return A;var q=A.match(E);if(!q)return A;var ae=q[0];return w.test(ae)?y:A}},(c,_,f)=>{f.r(_),f.d(_,{AudioAssetWrapper:()=>O,AudioWrapper:()=>I,CustomFileAssetLoaderWrapper:()=>Z,FileAssetWrapper:()=>C,FileFinalizer:()=>j,FontAssetWrapper:()=>A,FontWrapper:()=>y,ImageAssetWrapper:()=>L,ImageWrapper:()=>E,createFinalization:()=>ce,finalizationRegistry:()=>J});var w=function(){var se=function(te,we){return se=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(me,nt){me.__proto__=nt}||function(me,nt){for(var rt in nt)Object.prototype.hasOwnProperty.call(nt,rt)&&(me[rt]=nt[rt])},se(te,we)};return function(te,we){if(typeof we!="function"&&we!==null)throw new TypeError("Class extends value "+String(we)+" is not a constructor or null");se(te,we);function me(){this.constructor=te}te.prototype=we===null?Object.create(we):(me.prototype=we.prototype,new me)}}(),j=function(){function se(te){this.selfUnref=!1,this._file=te}return se.prototype.unref=function(){this._file&&this._file.unref()},se}(),b=function(){function se(te){this._finalizableObject=te}return se.prototype.unref=function(){this._finalizableObject.unref()},se}(),v=function(){function se(){this.selfUnref=!1}return se.prototype.unref=function(){},se}(),E=function(se){w(te,se);function te(we){var me=se.call(this)||this;return me._nativeImage=we,me}return Object.defineProperty(te.prototype,"nativeImage",{get:function(){return this._nativeImage},enumerable:!1,configurable:!0}),te.prototype.unref=function(){this.selfUnref&&this._nativeImage.unref()},te}(v),I=function(se){w(te,se);function te(we){var me=se.call(this)||this;return me._nativeAudio=we,me}return Object.defineProperty(te.prototype,"nativeAudio",{get:function(){return this._nativeAudio},enumerable:!1,configurable:!0}),te.prototype.unref=function(){this.selfUnref&&this._nativeAudio.unref()},te}(v),y=function(se){w(te,se);function te(we){var me=se.call(this)||this;return me._nativeFont=we,me}return Object.defineProperty(te.prototype,"nativeFont",{get:function(){return this._nativeFont},enumerable:!1,configurable:!0}),te.prototype.unref=function(){this.selfUnref&&this._nativeFont.unref()},te}(v),Z=function(){function se(te,we){this._assetLoaderCallback=we,this.assetLoader=new te.CustomFileAssetLoader({loadContents:this.loadContents.bind(this)})}return se.prototype.loadContents=function(te,we){var me;return te.isImage?me=new L(te):te.isAudio?me=new O(te):te.isFont&&(me=new A(te)),this._assetLoaderCallback(me,we)},se}(),C=function(){function se(te){this._nativeFileAsset=te}return se.prototype.decode=function(te){this._nativeFileAsset.decode(te)},Object.defineProperty(se.prototype,"name",{get:function(){return this._nativeFileAsset.name},enumerable:!1,configurable:!0}),Object.defineProperty(se.prototype,"fileExtension",{get:function(){return this._nativeFileAsset.fileExtension},enumerable:!1,configurable:!0}),Object.defineProperty(se.prototype,"uniqueFilename",{get:function(){return this._nativeFileAsset.uniqueFilename},enumerable:!1,configurable:!0}),Object.defineProperty(se.prototype,"isAudio",{get:function(){return this._nativeFileAsset.isAudio},enumerable:!1,configurable:!0}),Object.defineProperty(se.prototype,"isImage",{get:function(){return this._nativeFileAsset.isImage},enumerable:!1,configurable:!0}),Object.defineProperty(se.prototype,"isFont",{get:function(){return this._nativeFileAsset.isFont},enumerable:!1,configurable:!0}),Object.defineProperty(se.prototype,"cdnUuid",{get:function(){return this._nativeFileAsset.cdnUuid},enumerable:!1,configurable:!0}),Object.defineProperty(se.prototype,"nativeFileAsset",{get:function(){return this._nativeFileAsset},enumerable:!1,configurable:!0}),se}(),L=function(se){w(te,se);function te(){return se!==null&&se.apply(this,arguments)||this}return te.prototype.setRenderImage=function(we){this._nativeFileAsset.setRenderImage(we.nativeImage)},te}(C),O=function(se){w(te,se);function te(){return se!==null&&se.apply(this,arguments)||this}return te.prototype.setAudioSource=function(we){this._nativeFileAsset.setAudioSource(we.nativeAudio)},te}(C),A=function(se){w(te,se);function te(){return se!==null&&se.apply(this,arguments)||this}return te.prototype.setFont=function(we){this._nativeFileAsset.setFont(we.nativeFont)},te}(C),q=function(){function se(te){}return se.prototype.register=function(te){te.selfUnref=!0},se.prototype.unregister=function(te){},se}(),ae=typeof FinalizationRegistry<"u"?FinalizationRegistry:q,J=new ae(function(se){se==null||se.unref()}),ce=function(se,te){var we=new b(te);J.register(se,we)}},(c,_,f)=>{f.r(_),f.d(_,{RiveFont:()=>j});var w=f(3),j=function(){function b(){}return b.setFallbackFontCallback=function(v){b._fallbackFontCallback=v??null,b._wireFallbackProc()},b._fontToPtr=function(v){var E;if(v==null)return null;var I=v.nativeFont,y=(E=I==null?void 0:I.ptr)===null||E===void 0?void 0:E.call(I);return y??null},b._getFallbackPtr=function(v,E){return E<0||E>=v.length?null:b._fontToPtr(v[E])},b._wireFallbackProc=function(){w.RuntimeLoader.getInstance(function(v){var E=b._fallbackFontCallback;E?v.setFallbackFontCallback(function(I,y,Z){var C=E(I,Z);return C?Array.isArray(C)?b._getFallbackPtr(C,y):y===0?b._fontToPtr(C):null:null}):v.setFallbackFontCallback(null)})},b._fallbackFontCallback=null,b}()}],o={};function s(c){var _=o[c];if(_!==void 0)return _.exports;var f=o[c]={exports:{}};return n[c](f,f.exports,s),f.exports}s.d=(c,_)=>{for(var f in _)s.o(_,f)&&!s.o(c,f)&&Object.defineProperty(c,f,{enumerable:!0,get:_[f]})},s.o=(c,_)=>Object.prototype.hasOwnProperty.call(c,_),s.r=c=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})};var i={};return(()=>{s.r(i),s.d(i,{Alignment:()=>C,DataEnum:()=>Xt,DataType:()=>Qe,DrawOptimizationOptions:()=>L,EventType:()=>me,Fit:()=>Z,Layout:()=>O,LoopType:()=>nt,Rive:()=>$t,RiveEventType:()=>ae,RiveFile:()=>St,RiveFont:()=>f.RiveFont,RuntimeLoader:()=>_.RuntimeLoader,StateMachineInput:()=>q,StateMachineInputType:()=>A,Testing:()=>Ne,ViewModel:()=>ut,ViewModelInstance:()=>en,ViewModelInstanceArtboard:()=>ee,ViewModelInstanceAssetImage:()=>W,ViewModelInstanceBoolean:()=>ie,ViewModelInstanceColor:()=>ye,ViewModelInstanceEnum:()=>ne,ViewModelInstanceList:()=>de,ViewModelInstanceNumber:()=>fe,ViewModelInstanceString:()=>K,ViewModelInstanceTrigger:()=>Y,ViewModelInstanceValue:()=>Dt,decodeAudio:()=>Pe,decodeFont:()=>Ze,decodeImage:()=>$e});var c=s(1),_=s(3),f=s(6),w=function(){var g=function(u,d){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(m,k){m.__proto__=k}||function(m,k){for(var R in k)Object.prototype.hasOwnProperty.call(k,R)&&(m[R]=k[R])},g(u,d)};return function(u,d){if(typeof d!="function"&&d!==null)throw new TypeError("Class extends value "+String(d)+" is not a constructor or null");g(u,d);function m(){this.constructor=u}u.prototype=d===null?Object.create(d):(m.prototype=d.prototype,new m)}}(),j=function(){return j=Object.assign||function(g){for(var u,d=1,m=arguments.length;d<m;d++){u=arguments[d];for(var k in u)Object.prototype.hasOwnProperty.call(u,k)&&(g[k]=u[k])}return g},j.apply(this,arguments)},b=function(g,u,d,m){function k(R){return R instanceof d?R:new d(function($){$(R)})}return new(d||(d=Promise))(function(R,$){function re(je){try{Q(m.next(je))}catch(be){$(be)}}function ue(je){try{Q(m.throw(je))}catch(be){$(be)}}function Q(je){je.done?R(je.value):k(je.value).then(re,ue)}Q((m=m.apply(g,u||[])).next())})},v=function(g,u){var d={label:0,sent:function(){if(R[0]&1)throw R[1];return R[1]},trys:[],ops:[]},m,k,R,$=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return $.next=re(0),$.throw=re(1),$.return=re(2),typeof Symbol=="function"&&($[Symbol.iterator]=function(){return this}),$;function re(Q){return function(je){return ue([Q,je])}}function ue(Q){if(m)throw new TypeError("Generator is already executing.");for(;$&&($=0,Q[0]&&(d=0)),d;)try{if(m=1,k&&(R=Q[0]&2?k.return:Q[0]?k.throw||((R=k.return)&&R.call(k),0):k.next)&&!(R=R.call(k,Q[1])).done)return R;switch(k=0,R&&(Q=[Q[0]&2,R.value]),Q[0]){case 0:case 1:R=Q;break;case 4:return d.label++,{value:Q[1],done:!1};case 5:d.label++,k=Q[1],Q=[0];continue;case 7:Q=d.ops.pop(),d.trys.pop();continue;default:if(R=d.trys,!(R=R.length>0&&R[R.length-1])&&(Q[0]===6||Q[0]===2)){d=0;continue}if(Q[0]===3&&(!R||Q[1]>R[0]&&Q[1]<R[3])){d.label=Q[1];break}if(Q[0]===6&&d.label<R[1]){d.label=R[1],R=Q;break}if(R&&d.label<R[2]){d.label=R[2],d.ops.push(Q);break}R[2]&&d.ops.pop(),d.trys.pop();continue}Q=u.call(g,d)}catch(je){Q=[6,je],k=0}finally{m=R=0}if(Q[0]&5)throw Q[1];return{value:Q[0]?Q[1]:void 0,done:!0}}},E=function(g,u,d){if(d||arguments.length===2)for(var m=0,k=u.length,R;m<k;m++)(R||!(m in u))&&(R||(R=Array.prototype.slice.call(u,0,m)),R[m]=u[m]);return g.concat(R||Array.prototype.slice.call(u))},I=function(g){w(u,g);function u(){var d=g!==null&&g.apply(this,arguments)||this;return d.isHandledError=!0,d}return u}(Error),y=function(g){return g&&g.isHandledError?g.message:"Problem loading file; may be corrupt!"},Z;(function(g){g.Cover="cover",g.Contain="contain",g.Fill="fill",g.FitWidth="fitWidth",g.FitHeight="fitHeight",g.None="none",g.ScaleDown="scaleDown",g.Layout="layout"})(Z||(Z={}));var C;(function(g){g.Center="center",g.TopLeft="topLeft",g.TopCenter="topCenter",g.TopRight="topRight",g.CenterLeft="centerLeft",g.CenterRight="centerRight",g.BottomLeft="bottomLeft",g.BottomCenter="bottomCenter",g.BottomRight="bottomRight"})(C||(C={}));var L;(function(g){g.AlwaysDraw="alwaysDraw",g.DrawOnChanged="drawOnChanged"})(L||(L={}));var O=function(){function g(u){var d,m,k,R,$,re,ue;this.fit=(d=u==null?void 0:u.fit)!==null&&d!==void 0?d:Z.Contain,this.alignment=(m=u==null?void 0:u.alignment)!==null&&m!==void 0?m:C.Center,this.layoutScaleFactor=(k=u==null?void 0:u.layoutScaleFactor)!==null&&k!==void 0?k:1,this.minX=(R=u==null?void 0:u.minX)!==null&&R!==void 0?R:0,this.minY=($=u==null?void 0:u.minY)!==null&&$!==void 0?$:0,this.maxX=(re=u==null?void 0:u.maxX)!==null&&re!==void 0?re:0,this.maxY=(ue=u==null?void 0:u.maxY)!==null&&ue!==void 0?ue:0}return g.new=function(u){var d=u.fit,m=u.alignment,k=u.minX,R=u.minY,$=u.maxX,re=u.maxY;return console.warn("This function is deprecated: please use `new Layout({})` instead"),new g({fit:d,alignment:m,minX:k,minY:R,maxX:$,maxY:re})},g.prototype.copyWith=function(u){var d=u.fit,m=u.alignment,k=u.layoutScaleFactor,R=u.minX,$=u.minY,re=u.maxX,ue=u.maxY;return new g({fit:d??this.fit,alignment:m??this.alignment,layoutScaleFactor:k??this.layoutScaleFactor,minX:R??this.minX,minY:$??this.minY,maxX:re??this.maxX,maxY:ue??this.maxY})},g.prototype.runtimeFit=function(u){if(this.cachedRuntimeFit)return this.cachedRuntimeFit;var d;return this.fit===Z.Cover?d=u.Fit.cover:this.fit===Z.Contain?d=u.Fit.contain:this.fit===Z.Fill?d=u.Fit.fill:this.fit===Z.FitWidth?d=u.Fit.fitWidth:this.fit===Z.FitHeight?d=u.Fit.fitHeight:this.fit===Z.ScaleDown?d=u.Fit.scaleDown:this.fit===Z.Layout?d=u.Fit.layout:d=u.Fit.none,this.cachedRuntimeFit=d,d},g.prototype.runtimeAlignment=function(u){if(this.cachedRuntimeAlignment)return this.cachedRuntimeAlignment;var d;return this.alignment===C.TopLeft?d=u.Alignment.topLeft:this.alignment===C.TopCenter?d=u.Alignment.topCenter:this.alignment===C.TopRight?d=u.Alignment.topRight:this.alignment===C.CenterLeft?d=u.Alignment.centerLeft:this.alignment===C.CenterRight?d=u.Alignment.centerRight:this.alignment===C.BottomLeft?d=u.Alignment.bottomLeft:this.alignment===C.BottomCenter?d=u.Alignment.bottomCenter:this.alignment===C.BottomRight?d=u.Alignment.bottomRight:d=u.Alignment.center,this.cachedRuntimeAlignment=d,d},g}(),A;(function(g){g[g.Number=56]="Number",g[g.Trigger=58]="Trigger",g[g.Boolean=59]="Boolean"})(A||(A={}));var q=function(){function g(u,d){this.type=u,this.runtimeInput=d}return Object.defineProperty(g.prototype,"name",{get:function(){return this.runtimeInput.name},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"value",{get:function(){return this.runtimeInput.value},set:function(u){this.runtimeInput.value=u},enumerable:!1,configurable:!0}),g.prototype.fire=function(){this.type===A.Trigger&&this.runtimeInput.fire()},g.prototype.delete=function(){this.runtimeInput=null},g}(),ae;(function(g){g[g.General=128]="General",g[g.OpenUrl=131]="OpenUrl"})(ae||(ae={}));var J=function(){function g(u){this.isBindableArtboard=!1,this.isBindableArtboard=u}return g}(),ce=function(g){w(u,g);function u(d,m){var k=g.call(this,!1)||this;return k.nativeArtboard=d,k.file=m,k}return u}(J),se=function(g){w(u,g);function u(d){var m=g.call(this,!0)||this;return m.selfUnref=!1,m.nativeArtboard=d,m}return Object.defineProperty(u.prototype,"viewModel",{set:function(d){this.nativeViewModel=d.nativeInstance},enumerable:!1,configurable:!0}),u.prototype.destroy=function(){var d;this.selfUnref&&(this.nativeArtboard.unref(),(d=this.nativeViewModel)===null||d===void 0||d.unref())},u}(J),te=function(){function g(u,d,m,k){this.stateMachine=u,this.playing=m,this.artboard=k,this.inputs=[],this.instance=new d.StateMachineInstance(u,k),this.initInputs(d)}return Object.defineProperty(g.prototype,"name",{get:function(){return this.stateMachine.name},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"statesChanged",{get:function(){for(var u=[],d=0;d<this.instance.stateChangedCount();d++)u.push(this.instance.stateChangedNameByIndex(d));return u},enumerable:!1,configurable:!0}),g.prototype.advance=function(u){this.instance.advance(u)},g.prototype.advanceAndApply=function(u){this.instance.advanceAndApply(u)},g.prototype.reportedEventCount=function(){return this.instance.reportedEventCount()},g.prototype.reportedEventAt=function(u){return this.instance.reportedEventAt(u)},g.prototype.initInputs=function(u){for(var d=0;d<this.instance.inputCount();d++){var m=this.instance.input(d);this.inputs.push(this.mapRuntimeInput(m,u))}},g.prototype.mapRuntimeInput=function(u,d){if(u.type===d.SMIInput.bool)return new q(A.Boolean,u.asBool());if(u.type===d.SMIInput.number)return new q(A.Number,u.asNumber());if(u.type===d.SMIInput.trigger)return new q(A.Trigger,u.asTrigger())},g.prototype.cleanup=function(){this.inputs.forEach(function(u){u.delete()}),this.inputs.length=0,this.instance.delete()},g.prototype.bindViewModelInstance=function(u){u.runtimeInstance!=null&&this.instance.bindViewModelInstance(u.runtimeInstance)},g}(),we=function(){function g(u,d,m,k,R){k===void 0&&(k=[]),R===void 0&&(R=[]),this.runtime=u,this.artboard=d,this.eventManager=m,this.animations=k,this.stateMachines=R}return g.prototype.add=function(u,d,m){if(m===void 0&&(m=!0),u=De(u),u.length===0)this.animations.forEach(function(ze){return ze.playing=d}),this.stateMachines.forEach(function(ze){return ze.playing=d});else for(var k=this.animations.map(function(ze){return ze.name}),R=this.stateMachines.map(function(ze){return ze.name}),$=0;$<u.length;$++){var re=k.indexOf(u[$]),ue=R.indexOf(u[$]);if(re>=0||ue>=0)re>=0?this.animations[re].playing=d:this.stateMachines[ue].playing=d;else{var Q=this.artboard.animationByName(u[$]);if(Q){var je=new c.Animation(Q,this.artboard,this.runtime,d);je.advance(0),je.apply(1),this.animations.push(je)}else{var be=this.artboard.stateMachineByName(u[$]);if(be){var it=new te(be,this.runtime,d,this.artboard);this.stateMachines.push(it)}}}}return m&&(d?this.eventManager.fire({type:me.Play,data:this.playing}):this.eventManager.fire({type:me.Pause,data:this.paused})),d?this.playing:this.paused},g.prototype.initLinearAnimations=function(u,d,m){m===void 0&&(m=!1);for(var k=this.animations.map(function(je){return je.name}),R=0;R<u.length;R++){var $=k.indexOf(u[R]);if($>=0)this.animations[$].playing=d;else{var re=this.artboard.animationByName(u[R]);if(re){var ue=new c.Animation(re,this.artboard,this.runtime,d);ue.advance(0),ue.apply(1),this.animations.push(ue)}else if(m){var Q="State Machine with name ".concat(u[R]," not found");throw new I(Q)}else console.error("Animation with name ".concat(u[R]," not found."))}}},g.prototype.initStateMachines=function(u,d){for(var m=this.stateMachines.map(function(ue){return ue.name}),k=0;k<u.length;k++){var R=m.indexOf(u[k]);if(R>=0)this.stateMachines[R].playing=d;else{var $=this.artboard.stateMachineByName(u[k]);if($){var re=new te($,this.runtime,d,this.artboard);this.stateMachines.push(re)}else console.warn("State Machine with name ".concat(u[k]," not found. Falling back to find an animation with the same name.")),this.initLinearAnimations([u[k]],d,!0)}}},g.prototype.play=function(u){return this.add(u,!0)},g.prototype.advanceIfPaused=function(){this.stateMachines.forEach(function(u){u.playing||u.advanceAndApply(0)})},g.prototype.pause=function(u){return this.add(u,!1)},g.prototype.scrub=function(u,d){var m=this.animations.filter(function(k){return u.includes(k.name)});return m.forEach(function(k){return k.scrubTo=d}),m.map(function(k){return k.name})},Object.defineProperty(g.prototype,"playing",{get:function(){return this.animations.filter(function(u){return u.playing}).map(function(u){return u.name}).concat(this.stateMachines.filter(function(u){return u.playing}).map(function(u){return u.name}))},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"paused",{get:function(){return this.animations.filter(function(u){return!u.playing}).map(function(u){return u.name}).concat(this.stateMachines.filter(function(u){return!u.playing}).map(function(u){return u.name}))},enumerable:!1,configurable:!0}),g.prototype.stop=function(u){var d=this;u=De(u);var m=[];if(u.length===0)m=this.animations.map(function($){return $.name}).concat(this.stateMachines.map(function($){return $.name})),this.animations.forEach(function($){return $.cleanup()}),this.stateMachines.forEach(function($){return $.cleanup()}),this.animations.splice(0,this.animations.length),this.stateMachines.splice(0,this.stateMachines.length);else{var k=this.animations.filter(function($){return u.includes($.name)});k.forEach(function($){$.cleanup(),d.animations.splice(d.animations.indexOf($),1)});var R=this.stateMachines.filter(function($){return u.includes($.name)});R.forEach(function($){$.cleanup(),d.stateMachines.splice(d.stateMachines.indexOf($),1)}),m=k.map(function($){return $.name}).concat(R.map(function($){return $.name}))}return this.eventManager.fire({type:me.Stop,data:m}),m},Object.defineProperty(g.prototype,"isPlaying",{get:function(){return this.animations.reduce(function(u,d){return u||d.playing},!1)||this.stateMachines.reduce(function(u,d){return u||d.playing},!1)},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"isPaused",{get:function(){return!this.isPlaying&&(this.animations.length>0||this.stateMachines.length>0)},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"isStopped",{get:function(){return this.animations.length===0&&this.stateMachines.length===0},enumerable:!1,configurable:!0}),g.prototype.atLeastOne=function(u,d){d===void 0&&(d=!0);var m;return this.animations.length===0&&this.stateMachines.length===0&&(this.artboard.animationCount()>0?this.add([m=this.artboard.animationByIndex(0).name],u,d):this.artboard.stateMachineCount()>0&&this.add([m=this.artboard.stateMachineByIndex(0).name],u,d)),m},g.prototype.handleLooping=function(){for(var u=0,d=this.animations.filter(function(k){return k.playing});u<d.length;u++){var m=d[u];m.loopValue===0&&m.loopCount?(m.loopCount=0,this.stop(m.name)):m.loopValue===1&&m.loopCount?(this.eventManager.fire({type:me.Loop,data:{animation:m.name,type:nt.Loop}}),m.loopCount=0):m.loopValue===2&&m.loopCount>1&&(this.eventManager.fire({type:me.Loop,data:{animation:m.name,type:nt.PingPong}}),m.loopCount=0)}},g.prototype.handleStateChanges=function(){for(var u=[],d=0,m=this.stateMachines.filter(function(R){return R.playing});d<m.length;d++){var k=m[d];u.push.apply(u,k.statesChanged)}u.length>0&&this.eventManager.fire({type:me.StateChange,data:u})},g.prototype.handleAdvancing=function(u){this.eventManager.fire({type:me.Advance,data:u})},g}(),me;(function(g){g.Load="load",g.LoadError="loaderror",g.Play="play",g.Pause="pause",g.Stop="stop",g.Loop="loop",g.Draw="draw",g.Advance="advance",g.StateChange="statechange",g.RiveEvent="riveevent",g.AudioStatusChange="audiostatuschange"})(me||(me={}));var nt;(function(g){g.OneShot="oneshot",g.Loop="loop",g.PingPong="pingpong"})(nt||(nt={}));var rt=function(){function g(u){u===void 0&&(u=[]),this.listeners=u}return g.prototype.getListeners=function(u){return this.listeners.filter(function(d){return d.type===u})},g.prototype.add=function(u){this.listeners.includes(u)||this.listeners.push(u)},g.prototype.remove=function(u){for(var d=0;d<this.listeners.length;d++){var m=this.listeners[d];if(m.type===u.type&&m.callback===u.callback){this.listeners.splice(d,1);break}}},g.prototype.removeAll=function(u){var d=this;u?this.listeners.filter(function(m){return m.type===u}).forEach(function(m){return d.remove(m)}):this.listeners.splice(0,this.listeners.length)},g.prototype.fire=function(u){var d=this.getListeners(u.type);d.forEach(function(m){return m.callback(u)})},g}(),ft=function(){function g(u){this.eventManager=u,this.queue=[]}return g.prototype.add=function(u){this.queue.push(u)},g.prototype.process=function(){for(;this.queue.length>0;){var u=this.queue.shift();u!=null&&u.action&&u.action(),u!=null&&u.event&&this.eventManager.fire(u.event)}},g}(),Re;(function(g){g[g.AVAILABLE=0]="AVAILABLE",g[g.UNAVAILABLE=1]="UNAVAILABLE"})(Re||(Re={}));var yt=function(g){w(u,g);function u(){var d=g!==null&&g.apply(this,arguments)||this;return d._started=!1,d._enabled=!1,d._status=Re.UNAVAILABLE,d}return u.prototype.delay=function(d){return b(this,void 0,void 0,function(){return v(this,function(m){return[2,new Promise(function(k){return setTimeout(k,d)})]})})},u.prototype.timeout=function(){return b(this,void 0,void 0,function(){return v(this,function(d){return[2,new Promise(function(m,k){return setTimeout(k,50)})]})})},u.prototype.reportToListeners=function(){this.fire({type:me.AudioStatusChange}),this.removeAll()},u.prototype.enableAudio=function(){return b(this,void 0,void 0,function(){return v(this,function(d){return this._enabled||(this._enabled=!0,this._status=Re.AVAILABLE,this.reportToListeners()),[2]})})},u.prototype.testAudio=function(){return b(this,void 0,void 0,function(){return v(this,function(d){switch(d.label){case 0:if(!(this._status===Re.UNAVAILABLE&&this._audioContext!==null))return[3,4];d.label=1;case 1:return d.trys.push([1,3,,4]),[4,Promise.race([this._audioContext.resume(),this.timeout()])];case 2:return d.sent(),this.enableAudio(),[3,4];case 3:return d.sent(),[3,4];case 4:return[2]}})})},u.prototype._establishAudio=function(){return b(this,void 0,void 0,function(){return v(this,function(d){switch(d.label){case 0:return this._started?[3,5]:(this._started=!0,typeof window>"u"?(this.enableAudio(),[3,5]):[3,1]);case 1:this._audioContext=new AudioContext,this.listenForUserAction(),d.label=2;case 2:return this._status!==Re.UNAVAILABLE?[3,5]:[4,this.testAudio()];case 3:return d.sent(),[4,this.delay(1e3)];case 4:return d.sent(),[3,2];case 5:return[2]}})})},u.prototype.listenForUserAction=function(){var d=this,m=function(){return b(d,void 0,void 0,function(){return v(this,function(k){return this.enableAudio(),[2]})})};document.addEventListener("pointerdown",m,{once:!0})},u.prototype.establishAudio=function(){return b(this,void 0,void 0,function(){return v(this,function(d){return this._establishAudio(),[2]})})},Object.defineProperty(u.prototype,"systemVolume",{get:function(){return this._status===Re.UNAVAILABLE?(this.testAudio(),0):1},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"status",{get:function(){return this._status},enumerable:!1,configurable:!0}),u}(rt),G=new yt,pe=function(){function g(){}return g.prototype.observe=function(){},g.prototype.unobserve=function(){},g.prototype.disconnect=function(){},g}(),Ee=globalThis.ResizeObserver||pe,Ge=function(){function g(){var u=this;this._elementsMap=new Map,this._onObservedEntry=function(d){var m=u._elementsMap.get(d.target);m!==null?m.onResize(d.target.clientWidth==0||d.target.clientHeight==0):u._resizeObserver.unobserve(d.target)},this._onObserved=function(d){d.forEach(u._onObservedEntry)},this._resizeObserver=new Ee(this._onObserved)}return g.prototype.add=function(u,d){var m={onResize:d,element:u};return this._elementsMap.set(u,m),this._resizeObserver.observe(u),m},g.prototype.remove=function(u){this._resizeObserver.unobserve(u.element),this._elementsMap.delete(u.element)},g}(),qe=new Ge,St=function(){function g(u){this.enableRiveAssetCDN=!0,this.enablePerfMarks=!1,this.referenceCount=0,this.destroyed=!1,this.selfUnref=!1,this.bindableArtboards=[],this.src=u.src,this.buffer=u.buffer,u.assetLoader&&(this.assetLoader=u.assetLoader),this.enableRiveAssetCDN=typeof u.enableRiveAssetCDN=="boolean"?u.enableRiveAssetCDN:!0,this.enablePerfMarks=!!u.enablePerfMarks,this.enablePerfMarks&&(_.RuntimeLoader.enablePerfMarks=!0),this.eventManager=new rt,u.onLoad&&this.on(me.Load,u.onLoad),u.onLoadError&&this.on(me.LoadError,u.onLoadError)}return g.prototype.releaseFile=function(){var u;this.selfUnref&&((u=this.file)===null||u===void 0||u.unref()),this.file=null},g.prototype.releaseBindableArtboards=function(){this.bindableArtboards.forEach(function(u){return u.destroy()})},g.prototype.initData=function(){return b(this,void 0,void 0,function(){var u,d,m,k,R,$;return v(this,function(re){switch(re.label){case 0:if(!(this.src&&!this.buffer))return[3,4];re.label=1;case 1:return re.trys.push([1,3,,4]),u=this,[4,Fe(this.src)];case 2:return u.buffer=re.sent(),[3,4];case 3:throw d=re.sent(),d instanceof Error?d:new I(g.fileLoadErrorMessage);case 4:return this.destroyed?[2]:(this.assetLoader&&(k=new f.CustomFileAssetLoaderWrapper(this.runtime,this.assetLoader),m=k.assetLoader),this.enablePerfMarks&&performance.mark("rive:file-load:start"),R=this,[4,this.runtime.load(new Uint8Array(this.buffer),m,this.enableRiveAssetCDN)]);case 5:return R.file=re.sent(),this.enablePerfMarks&&(performance.mark("rive:file-load:end"),performance.measure("rive:file-load","rive:file-load:start","rive:file-load:end")),$=new f.FileFinalizer(this.file),f.finalizationRegistry.register(this,$),this.destroyed?(this.releaseFile(),[2]):(this.file!==null?this.eventManager.fire({type:me.Load,data:this}):this.fireLoadError(g.fileLoadErrorMessage),[2])}})})},g.prototype.loadRiveFileBytes=function(){return b(this,void 0,void 0,function(){var u;return v(this,function(d){return this.enablePerfMarks&&performance.mark("rive:fetch-riv:start"),u=this.src?Fe(this.src):Promise.resolve(this.buffer),this.enablePerfMarks&&this.src&&u.then(function(){performance.mark("rive:fetch-riv:end"),performance.measure("rive:fetch-riv","rive:fetch-riv:start","rive:fetch-riv:end")}),[2,u]})})},g.prototype.loadRuntime=function(){return b(this,void 0,void 0,function(){var u;return v(this,function(d){return this.enablePerfMarks&&performance.mark("rive:await-wasm:start"),u=_.RuntimeLoader.awaitInstance(),this.enablePerfMarks&&u.then(function(){performance.mark("rive:await-wasm:end"),performance.measure("rive:await-wasm","rive:await-wasm:start","rive:await-wasm:end")}),[2,u]})})},g.prototype.init=function(){return b(this,void 0,void 0,function(){var u,d,m,k;return v(this,function(R){switch(R.label){case 0:if(!this.src&&!this.buffer)return this.fireLoadError(g.missingErrorMessage),[2];R.label=1;case 1:return R.trys.push([1,4,,5]),[4,Promise.all([this.loadRiveFileBytes(),this.loadRuntime()])];case 2:return u=R.sent(),d=u[0],m=u[1],this.destroyed?[2]:(this.buffer=d,this.runtime=m,this.enablePerfMarks&&performance.mark("rive:init-data:start"),[4,this.initData()]);case 3:return R.sent(),this.enablePerfMarks&&(performance.mark("rive:init-data:end"),performance.measure("rive:init-data","rive:init-data:start","rive:init-data:end")),[3,5];case 4:return k=R.sent(),this.fireLoadError(k instanceof Error?k.message:g.fileLoadErrorMessage),[3,5];case 5:return[2]}})})},g.prototype.fireLoadError=function(u){throw this.eventManager.fire({type:me.LoadError,data:u}),new I(u)},g.prototype.on=function(u,d){this.eventManager.add({type:u,callback:d})},g.prototype.off=function(u,d){this.eventManager.remove({type:u,callback:d})},g.prototype.cleanup=function(){this.referenceCount-=1,this.referenceCount<=0&&(this.removeAllRiveEventListeners(),this.releaseFile(),this.releaseBindableArtboards(),this.destroyed=!0)},g.prototype.removeAllRiveEventListeners=function(u){this.eventManager.removeAll(u)},g.prototype.getInstance=function(){if(this.file!==null)return this.referenceCount+=1,this.file},g.prototype.destroyIfUnused=function(){this.referenceCount<=0&&this.cleanup()},g.prototype.createBindableArtboard=function(u){if(u!=null){var d=new se(u);return(0,f.createFinalization)(d,d.nativeArtboard),this.bindableArtboards.push(d),d}return null},g.prototype.getArtboard=function(u){var d=this.file.artboardByName(u);if(d!=null)return new ce(d,this)},g.prototype.getBindableArtboard=function(u){var d=this.file.bindableArtboardByName(u);return this.createBindableArtboard(d)},g.prototype.getDefaultBindableArtboard=function(){var u=this.file.bindableArtboardDefault();return this.createBindableArtboard(u)},g.prototype.internalBindableArtboardFromArtboard=function(u){var d=this.file.internalBindableArtboardFromArtboard(u);return this.createBindableArtboard(d)},g.prototype.viewModelByName=function(u){var d=this.file.viewModelByName(u);return d!==null?new ut(d):null},g.missingErrorMessage="Rive source file or data buffer required",g.fileLoadErrorMessage="The file failed to load",g}(),$t=function(){function g(u){var d=this,m,k;this.loaded=!1,this.destroyed=!1,this._observed=null,this.readyForPlaying=!1,this.artboard=null,this.eventCleanup=null,this.keyboardEventCleanup=null,this.shouldDisableRiveListeners=!1,this.automaticallyHandleEvents=!1,this.dispatchPointerExit=!0,this.enableMultiTouch=!1,this.enableRiveAssetCDN=!0,this._volume=1,this._artboardWidth=void 0,this._artboardHeight=void 0,this._devicePixelRatioUsed=1,this._hasZeroSize=!1,this._needsRedraw=!1,this._currentCanvasWidth=0,this._currentCanvasHeight=0,this._audioEventListener=null,this._boundDraw=null,this._pageVisibilityHandler=null,this._explicitlyStoppedRendering=!1,this._viewModelInstance=null,this._dataEnums=null,this._tabIndex=null,this.drawOptimization=L.DrawOnChanged,this.enablePerfMarks=!1,this.durations=[],this.frameTimes=[],this.frameCount=0,this.isTouchScrollEnabled=!1,this.onCanvasResize=function(R){var $=d._hasZeroSize!==R;d._hasZeroSize=R,R?(!d._layout.maxX||!d._layout.maxY)&&d.resizeToCanvas():$&&d.resizeDrawingSurfaceToCanvas()},this.frameRequestId=null,this.renderSecondTimer=0,this._boundDraw=this.draw.bind(this),typeof document<"u"&&(this._pageVisibilityHandler=this._onPageVisibilityChange.bind(this),document.addEventListener("visibilitychange",this._pageVisibilityHandler)),this.canvas=u.canvas,u.canvas.constructor===HTMLCanvasElement&&(this._observed=qe.add(this.canvas,this.onCanvasResize)),this._currentCanvasWidth=this.canvas.width,this._currentCanvasHeight=this.canvas.height,this.src=u.src,this.buffer=u.buffer,this.riveFile=u.riveFile,this.layout=(m=u.layout)!==null&&m!==void 0?m:new O,this.shouldDisableRiveListeners=!!u.shouldDisableRiveListeners,this.isTouchScrollEnabled=!!u.isTouchScrollEnabled,this.automaticallyHandleEvents=!!u.automaticallyHandleEvents,this.dispatchPointerExit=u.dispatchPointerExit===!1?u.dispatchPointerExit:this.dispatchPointerExit,this.enableMultiTouch=!!u.enableMultiTouch,this.drawOptimization=(k=u.drawingOptions)!==null&&k!==void 0?k:this.drawOptimization,this.enableRiveAssetCDN=u.enableRiveAssetCDN===void 0?!0:u.enableRiveAssetCDN,this.enablePerfMarks=!!u.enablePerfMarks,this.enablePerfMarks&&(_.RuntimeLoader.enablePerfMarks=!0),this.eventManager=new rt,u.onLoad&&this.on(me.Load,u.onLoad),u.onLoadError&&this.on(me.LoadError,u.onLoadError),u.onPlay&&this.on(me.Play,u.onPlay),u.onPause&&this.on(me.Pause,u.onPause),u.onStop&&this.on(me.Stop,u.onStop),u.onLoop&&this.on(me.Loop,u.onLoop),u.onStateChange&&this.on(me.StateChange,u.onStateChange),u.onAdvance&&this.on(me.Advance,u.onAdvance),u.onload&&!u.onLoad&&this.on(me.Load,u.onload),u.onloaderror&&!u.onLoadError&&this.on(me.LoadError,u.onloaderror),u.onplay&&!u.onPlay&&this.on(me.Play,u.onplay),u.onpause&&!u.onPause&&this.on(me.Pause,u.onpause),u.onstop&&!u.onStop&&this.on(me.Stop,u.onstop),u.onloop&&!u.onLoop&&this.on(me.Loop,u.onloop),u.onstatechange&&!u.onStateChange&&this.on(me.StateChange,u.onstatechange),u.assetLoader&&(this.assetLoader=u.assetLoader),this.taskQueue=new ft(this.eventManager),this.init({src:this.src,buffer:this.buffer,riveFile:this.riveFile,autoplay:u.autoplay,autoBind:u.autoBind,animations:u.animations,stateMachines:u.stateMachines,artboard:u.artboard,useOffscreenRenderer:u.useOffscreenRenderer,tabIndex:u.tabIndex})}return Object.defineProperty(g.prototype,"viewModelCount",{get:function(){return this.file.viewModelCount()},enumerable:!1,configurable:!0}),g.new=function(u){return console.warn("This function is deprecated: please use `new Rive({})` instead"),new g(u)},g.prototype.onSystemAudioChanged=function(){this.volume=this._volume},g.prototype.init=function(u){var d=this,m=u.src,k=u.buffer,R=u.riveFile,$=u.animations,re=u.stateMachines,ue=u.artboard,Q=u.autoplay,je=Q===void 0?!1:Q,be=u.useOffscreenRenderer,it=be===void 0?!1:be,ze=u.autoBind,Le=ze===void 0?!1:ze,pt=u.tabIndex;if(!this.destroyed){if(this.src=m,this.buffer=k,this.riveFile=R,this._tabIndex=pt??null,!this.src&&!this.buffer&&!this.riveFile)throw new I(g.missingErrorMessage);var vt=De($),Ct=De(re);this.loaded=!1,this.readyForPlaying=!1,_.RuntimeLoader.awaitInstance().then(function(Me){if(!d.destroyed){d.runtime=Me,d.removeRiveListeners(),d.deleteRiveRenderer(),d.enablePerfMarks&&performance.mark("rive:make-renderer:start");try{if(d.renderer=d.runtime.makeRenderer(d.canvas,it),!d.renderer)throw new Error("Renderer is null, cannot render Rive on the canvas.")}catch(st){throw console.error(st),new I("Unable to create the renderer, your environment may not support WebGL. Try the @rive-app/canvas runtime as an alternative.")}d.enablePerfMarks&&(performance.mark("rive:make-renderer:end"),performance.measure("rive:make-renderer","rive:make-renderer:start","rive:make-renderer:end")),d.canvas.width||d.canvas.height||d.resizeDrawingSurfaceToCanvas(),d.initData(ue,vt,Ct,je,Le).then(function(st){if(st)return d.setupRiveListeners()}).catch(function(st){console.error(st)})}}).catch(function(Me){d.eventManager.fire({type:me.LoadError,data:Me.message})})}},g.prototype.setupRiveListeners=function(u){var d=this;if(this.eventCleanup&&this.eventCleanup(),this.keyboardEventCleanup&&(this.keyboardEventCleanup(),this.keyboardEventCleanup=null),!this.shouldDisableRiveListeners){var m=this.animator.stateMachines.filter(function(je){return je.playing}),k=m.filter(function(je){return d.runtime.hasListeners(je.instance)}).map(function(je){return je.instance}),R=this.isTouchScrollEnabled,$=this.dispatchPointerExit,re=this.enableMultiTouch;u&&"isTouchScrollEnabled"in u&&(R=u.isTouchScrollEnabled),this.eventCleanup=(0,f.registerTouchInteractions)({canvas:this.canvas,artboard:this.artboard,stateMachines:k,renderer:this.renderer,rive:this.runtime,fit:this._layout.runtimeFit(this.runtime),alignment:this._layout.runtimeAlignment(this.runtime),isTouchScrollEnabled:R,dispatchPointerExit:$,enableMultiTouch:re,layoutScaleFactor:this._layout.layoutScaleFactor});var ue=m.filter(function(je){return je.instance.hasFocusNodes()}).map(function(je){return je.instance});if(ue.length){var Q=this.canvas.tabIndex;(Q===-1||isNaN(Q))&&(this.canvas.tabIndex=this._tabIndex!==null?this._tabIndex:0),this.keyboardEventCleanup=(0,f.registerKeyboardInteractions)({canvas:this.canvas,stateMachine:ue[0],rive:this.runtime,hasFocusNodes:ue.length>0})}}},g.prototype.removeRiveListeners=function(){this.eventCleanup&&(this.eventCleanup(),this.eventCleanup=null),this.keyboardEventCleanup&&(this.keyboardEventCleanup(),this.keyboardEventCleanup=null)},g.prototype.initializeAudio=function(){var u=this,d;G.status==Re.UNAVAILABLE&&(this.file.hasAudio||!((d=this.artboard)===null||d===void 0)&&d.hasAudio&&this._audioEventListener===null)&&(this._audioEventListener={type:me.AudioStatusChange,callback:function(){return u.onSystemAudioChanged()}},G.add(this._audioEventListener),G.establishAudio())},g.prototype.initArtboardSize=function(){this.artboard&&(this._artboardWidth=this.artboard.width=this._artboardWidth||this.artboard.width,this._artboardHeight=this.artboard.height=this._artboardHeight||this.artboard.height)},g.prototype.initData=function(u,d,m,k,R){return b(this,void 0,void 0,function(){var $,re,ue,Q;return v(this,function(je){switch(je.label){case 0:return je.trys.push([0,3,,4]),this.riveFile!=null?[3,2]:($=new St({src:this.src,buffer:this.buffer,enableRiveAssetCDN:this.enableRiveAssetCDN,assetLoader:this.assetLoader,enablePerfMarks:this.enablePerfMarks}),this.riveFile=$,[4,$.init()]);case 1:if(je.sent(),this.destroyed)return $.destroyIfUnused(),[2,!1];je.label=2;case 2:this.file=this.riveFile.getInstance(),this.initArtboard(u,d,m,k,R),this.initArtboardSize(),this.initializeAudio();try{this.loaded=!0,this.eventManager.fire({type:me.Load,data:(Q=this.src)!==null&&Q!==void 0?Q:"buffer"})}catch(be){console.error(be)}return this.animator.advanceIfPaused(),this.readyForPlaying=!0,this.taskQueue.process(),this.drawFrame(),[2,!0];case 3:return re=je.sent(),ue=y(re),this.eventManager.fire({type:me.LoadError,data:ue}),[2,Promise.reject(ue)];case 4:return[2]}})})},g.prototype.initArtboard=function(u,d,m,k,R){if(this.file){var $=u?this.file.artboardByName(u):this.file.defaultArtboard();if(!$)throw new I("Invalid artboard name or no default artboard");this.artboard=$,$.volume=this._volume*G.systemVolume,this.animator=new we(this.runtime,this.artboard,this.eventManager);var re;if(d.length>0||m.length>0?(re=d.concat(m),this.animator.initLinearAnimations(d,k),this.animator.initStateMachines(m,k)):re=[this.animator.atLeastOne(k,!1)],this.taskQueue.add({event:{type:k?me.Play:me.Pause,data:re}}),R){var ue=this.file.defaultArtboardViewModel($);if(ue!==null){var Q=ue.defaultInstance();if(Q!==null){var je=new en(Q,null);(0,f.createFinalization)(je,je.runtimeInstance),this.bindViewModelInstance(je)}}}}},g.prototype.drawFrame=function(){var u,d;!((u=document==null?void 0:document.timeline)===null||u===void 0)&&u.currentTime?this.loaded&&this.artboard&&!this.frameRequestId&&(this._boundDraw(document.timeline.currentTime),(d=this.runtime)===null||d===void 0||d.resolveAnimationFrame()):this.scheduleRendering()},g.prototype._canvasSizeChanged=function(){var u=!1;return this.canvas&&(this.canvas.width!==this._currentCanvasWidth&&(this._currentCanvasWidth=this.canvas.width,u=!0),this.canvas.height!==this._currentCanvasHeight&&(this._currentCanvasHeight=this.canvas.height,u=!0)),u},g.prototype.draw=function(u,d){var m;this.frameRequestId=null;var k=performance.now();this.lastRenderTime||(this.lastRenderTime=u),this.renderSecondTimer+=u-this.lastRenderTime,this.renderSecondTimer>5e3&&(this.renderSecondTimer=0,d==null||d());var R=(u-this.lastRenderTime)/1e3;this.lastRenderTime=u;for(var $=this.animator.animations.filter(function(Wt){return Wt.playing||Wt.needsScrub}).sort(function(Wt){return Wt.needsScrub?-1:1}),re=0,ue=$;re<ue.length;re++){var Q=ue[re];Q.advance(R),Q.instance.didLoop&&(Q.loopCount+=1),Q.apply(1)}for(var je=this.animator.stateMachines.filter(function(Wt){return Wt.playing}),be=this.enablePerfMarks&&this.frameCount<3?this.frameCount:-1,it=0,ze=je;it<ze.length;it++){var Le=ze[it],pt=Le.reportedEventCount();if(pt)for(var vt=0;vt<pt;vt++){var Ct=Le.reportedEventAt(vt);if(Ct)if(Ct.type===ae.OpenUrl){if(this.eventManager.fire({type:me.RiveEvent,data:Ct}),this.automaticallyHandleEvents){var Me=document.createElement("a"),st=Ct,ct=st.url,at=st.target,Ke=(0,f.sanitizeUrl)(ct);ct&&Me.setAttribute("href",Ke),at&&Me.setAttribute("target",at),Ke&&Ke!==f.BLANK_URL&&Me.click()}}else this.eventManager.fire({type:me.RiveEvent,data:Ct})}be>=0&&performance.mark("rive:sm-advance:start:f".concat(be)),Le.advanceAndApply(R),be>=0&&(performance.mark("rive:sm-advance:end:f".concat(be)),performance.measure("rive:sm-advance:f".concat(be),"rive:sm-advance:start:f".concat(be),"rive:sm-advance:end:f".concat(be)))}this.animator.stateMachines.length==0&&this.artboard.advance(R);var Ce=this.renderer;this._hasZeroSize||(this.drawOptimization==L.AlwaysDraw||this.artboard.didChange()||this._needsRedraw||this._canvasSizeChanged())&&(Ce.clear(),Ce.save(),be>=0&&performance.mark("rive:align-renderer:start:f".concat(be)),this.alignRenderer(),be>=0&&(performance.mark("rive:align-renderer:end:f".concat(be)),performance.measure("rive:align-renderer:f".concat(be),"rive:align-renderer:start:f".concat(be),"rive:align-renderer:end:f".concat(be))),be>=0&&performance.mark("rive:artboard-draw:start:f".concat(be)),this.artboard.draw(Ce),be>=0&&(performance.mark("rive:artboard-draw:end:f".concat(be)),performance.measure("rive:artboard-draw:f".concat(be),"rive:artboard-draw:start:f".concat(be),"rive:artboard-draw:end:f".concat(be))),Ce.restore(),be>=0&&performance.mark("rive:renderer-flush:start:f".concat(be)),Ce.flush(),be>=0&&(performance.mark("rive:renderer-flush:end:f".concat(be)),performance.measure("rive:renderer-flush:f".concat(be),"rive:renderer-flush:start:f".concat(be),"rive:renderer-flush:end:f".concat(be))),this._needsRedraw=!1),this.animator.handleLooping(),this.animator.handleStateChanges(),this.animator.handleAdvancing(R),this.frameCount++;var bt=performance.now();for(this.frameTimes.push(bt),this.durations.push(bt-k);this.frameTimes[0]<=bt-1e3;)this.frameTimes.shift(),this.durations.shift();(m=this._viewModelInstance)===null||m===void 0||m.handleCallbacks(),this.animator.isPlaying?this.scheduleRendering():this.animator.isPaused?this.lastRenderTime=0:this.animator.isStopped&&(this.lastRenderTime=0)},g.prototype.alignRenderer=function(){var u=this,d=u.renderer,m=u.runtime,k=u._layout,R=u.artboard;d.align(k.runtimeFit(m),k.runtimeAlignment(m),{minX:k.minX,minY:k.minY,maxX:k.maxX,maxY:k.maxY},R.bounds,this._devicePixelRatioUsed*k.layoutScaleFactor)},Object.defineProperty(g.prototype,"fps",{get:function(){return this.durations.length},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"frameTime",{get:function(){return this.durations.length===0?0:(this.durations.reduce(function(u,d){return u+d},0)/this.durations.length).toFixed(4)},enumerable:!1,configurable:!0}),g.prototype.cleanup=function(){var u,d;this.destroyed=!0,this.stopRendering(),this.cleanupInstances(),this._observed!==null&&qe.remove(this._observed),this.removeRiveListeners(),this.file&&((u=this.riveFile)===null||u===void 0||u.cleanup(),this.file=null),this.riveFile=null,this.deleteRiveRenderer(),this._audioEventListener!==null&&(G.remove(this._audioEventListener),this._audioEventListener=null),this._pageVisibilityHandler&&(document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),(d=this._viewModelInstance)===null||d===void 0||d.cleanup(),this._viewModelInstance=null,this._dataEnums=null},g.prototype.deleteRiveRenderer=function(){var u;(u=this.renderer)===null||u===void 0||u.delete(),this.renderer=null},g.prototype.cleanupInstances=function(){this.eventCleanup!==null&&this.eventCleanup(),this.keyboardEventCleanup&&(this.keyboardEventCleanup(),this.keyboardEventCleanup=null),this.stop(),this.artboard&&(this.artboard.delete(),this.artboard=null)},g.prototype.retrieveTextRun=function(u){var d;if(!u){console.warn("No text run name provided");return}if(!this.artboard){console.warn("Tried to access text run, but the Artboard is null");return}var m=this.artboard.textRun(u);if(!m){console.warn("Could not access a text run with name '".concat(u,"' in the '").concat((d=this.artboard)===null||d===void 0?void 0:d.name,"' Artboard. Note that you must rename a text run node in the Rive editor to make it queryable at runtime."));return}return m},g.prototype.getTextRunValue=function(u){var d=this.retrieveTextRun(u);return d?d.text:void 0},g.prototype.setTextRunValue=function(u,d){var m=this.retrieveTextRun(u);m&&(m.text=d)},g.prototype.play=function(u,d){var m=this;if(u=De(u),!this.readyForPlaying){this.taskQueue.add({action:function(){return m.play(u,d)}});return}this.animator.play(u),this.eventCleanup&&this.eventCleanup(),this.keyboardEventCleanup&&(this.keyboardEventCleanup(),this.keyboardEventCleanup=null),this.setupRiveListeners(),this.startRendering()},g.prototype.pause=function(u){var d=this;if(u=De(u),!this.readyForPlaying){this.taskQueue.add({action:function(){return d.pause(u)}});return}this.eventCleanup&&this.eventCleanup(),this.keyboardEventCleanup&&(this.keyboardEventCleanup(),this.keyboardEventCleanup=null),this.animator.pause(u)},g.prototype.scrub=function(u,d){var m=this;if(u=De(u),!this.readyForPlaying){this.taskQueue.add({action:function(){return m.scrub(u,d)}});return}this.animator.scrub(u,d||0),this.drawFrame()},g.prototype.stop=function(u){var d=this;if(u=De(u),!this.readyForPlaying){this.taskQueue.add({action:function(){return d.stop(u)}});return}this.animator&&this.animator.stop(u),this.eventCleanup&&this.eventCleanup(),this.keyboardEventCleanup&&(this.keyboardEventCleanup(),this.keyboardEventCleanup=null)},g.prototype.reset=function(u){var d,m,k=u==null?void 0:u.artboard,R=De(u==null?void 0:u.animations),$=De(u==null?void 0:u.stateMachines),re=(d=u==null?void 0:u.autoplay)!==null&&d!==void 0?d:!1,ue=(m=u==null?void 0:u.autoBind)!==null&&m!==void 0?m:!1;this.cleanupInstances(),this.initArtboard(k,R,$,re,ue),this.taskQueue.process()},g.prototype.load=function(u){this.file=null,this.stop(),this.init(u)},Object.defineProperty(g.prototype,"layout",{get:function(){return this._layout},set:function(u){this._layout=u,(!u.maxX||!u.maxY)&&this.resizeToCanvas(),this.loaded&&!this.animator.isPlaying&&this.drawFrame()},enumerable:!1,configurable:!0}),g.prototype.resizeToCanvas=function(){this._layout=this.layout.copyWith({minX:0,minY:0,maxX:this.canvas.width,maxY:this.canvas.height})},g.prototype.resizeDrawingSurfaceToCanvas=function(u){if(this.canvas instanceof HTMLCanvasElement&&window){var d=this.canvas.getBoundingClientRect(),m=d.width,k=d.height,R=u||window.devicePixelRatio||1;if(this.devicePixelRatioUsed=R,this.canvas.width=R*m,this.canvas.height=R*k,this._needsRedraw=!0,this.resizeToCanvas(),this.drawFrame(),this.layout.fit===Z.Layout){var $=this._layout.layoutScaleFactor;this.artboard.width=m/$,this.artboard.height=k/$}}},Object.defineProperty(g.prototype,"source",{get:function(){return this.src},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"activeArtboard",{get:function(){return this.artboard?this.artboard.name:""},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"animationNames",{get:function(){if(!this.loaded||!this.artboard)return[];for(var u=[],d=0;d<this.artboard.animationCount();d++)u.push(this.artboard.animationByIndex(d).name);return u},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"stateMachineNames",{get:function(){if(!this.loaded||!this.artboard)return[];for(var u=[],d=0;d<this.artboard.stateMachineCount();d++)u.push(this.artboard.stateMachineByIndex(d).name);return u},enumerable:!1,configurable:!0}),g.prototype.stateMachineInputs=function(u){if(this.loaded){var d=this.animator.stateMachines.find(function(m){return m.name===u});return d==null?void 0:d.inputs}},g.prototype.retrieveInputAtPath=function(u,d){if(!u){console.warn("No input name provided for path '".concat(d,"'"));return}if(!this.artboard){console.warn("Tried to access input: '".concat(u,"', at path: '").concat(d,"', but the Artboard is null"));return}var m=this.artboard.inputByPath(u,d);if(!m){console.warn("Could not access an input with name: '".concat(u,"', at path:'").concat(d,"'"));return}return m},g.prototype.setBooleanStateAtPath=function(u,d,m){var k=this.retrieveInputAtPath(u,m);k&&(k.type===A.Boolean?k.asBool().value=d:console.warn("Input with name: '".concat(u,"', at path:'").concat(m,"' is not a boolean")))},g.prototype.setNumberStateAtPath=function(u,d,m){var k=this.retrieveInputAtPath(u,m);k&&(k.type===A.Number?k.asNumber().value=d:console.warn("Input with name: '".concat(u,"', at path:'").concat(m,"' is not a number")))},g.prototype.fireStateAtPath=function(u,d){var m=this.retrieveInputAtPath(u,d);m&&(m.type===A.Trigger?m.asTrigger().fire():console.warn("Input with name: '".concat(u,"', at path:'").concat(d,"' is not a trigger")))},g.prototype.retrieveTextAtPath=function(u,d){if(!u){console.warn("No text name provided for path '".concat(d,"'"));return}if(!d){console.warn("No path provided for text '".concat(u,"'"));return}if(!this.artboard){console.warn("Tried to access text: '".concat(u,"', at path: '").concat(d,"', but the Artboard is null"));return}var m=this.artboard.textByPath(u,d);if(!m){console.warn("Could not access text with name: '".concat(u,"', at path:'").concat(d,"'"));return}return m},g.prototype.getTextRunValueAtPath=function(u,d){var m=this.retrieveTextAtPath(u,d);if(!m){console.warn("Could not get text with name: '".concat(u,"', at path:'").concat(d,"'"));return}return m.text},g.prototype.setTextRunValueAtPath=function(u,d,m){var k=this.retrieveTextAtPath(u,m);if(!k){console.warn("Could not set text with name: '".concat(u,"', at path:'").concat(m,"'"));return}k.text=d},Object.defineProperty(g.prototype,"playingStateMachineNames",{get:function(){return this.loaded?this.animator.stateMachines.filter(function(u){return u.playing}).map(function(u){return u.name}):[]},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"playingAnimationNames",{get:function(){return this.loaded?this.animator.animations.filter(function(u){return u.playing}).map(function(u){return u.name}):[]},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"pausedAnimationNames",{get:function(){return this.loaded?this.animator.animations.filter(function(u){return!u.playing}).map(function(u){return u.name}):[]},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"pausedStateMachineNames",{get:function(){return this.loaded?this.animator.stateMachines.filter(function(u){return!u.playing}).map(function(u){return u.name}):[]},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"isPlaying",{get:function(){return this.animator.isPlaying},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"isPaused",{get:function(){return this.animator.isPaused},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"isStopped",{get:function(){var u,d;return(d=(u=this.animator)===null||u===void 0?void 0:u.isStopped)!==null&&d!==void 0?d:!0},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"bounds",{get:function(){return this.artboard?this.artboard.bounds:void 0},enumerable:!1,configurable:!0}),g.prototype.on=function(u,d){this.eventManager.add({type:u,callback:d})},g.prototype.off=function(u,d){this.eventManager.remove({type:u,callback:d})},g.prototype.unsubscribe=function(u,d){console.warn("This function is deprecated: please use `off()` instead."),this.off(u,d)},g.prototype.removeAllRiveEventListeners=function(u){this.eventManager.removeAll(u)},g.prototype.unsubscribeAll=function(u){console.warn("This function is deprecated: please use `removeAllRiveEventListeners()` instead."),this.removeAllRiveEventListeners(u)},g.prototype.stopRendering=function(){this._explicitlyStoppedRendering=!0,this.loaded&&this.frameRequestId&&(this.runtime.cancelAnimationFrame?this.runtime.cancelAnimationFrame(this.frameRequestId):cancelAnimationFrame(this.frameRequestId),this.frameRequestId=null)},g.prototype.startRendering=function(){this._explicitlyStoppedRendering=!1,this.drawFrame()},g.prototype.scheduleRendering=function(){this.loaded&&this.artboard&&!this.frameRequestId&&(this.runtime.requestAnimationFrame?this.frameRequestId=this.runtime.requestAnimationFrame(this._boundDraw):this.frameRequestId=requestAnimationFrame(this._boundDraw))},g.prototype._onPageVisibilityChange=function(){var u,d;document.hidden?(this.frameRequestId!==null&&(!((u=this.runtime)===null||u===void 0)&&u.cancelAnimationFrame?this.runtime.cancelAnimationFrame(this.frameRequestId):cancelAnimationFrame(this.frameRequestId),this.frameRequestId=null),this.lastRenderTime=0):!((d=this.animator)===null||d===void 0)&&d.isPlaying&&!this._explicitlyStoppedRendering&&this.scheduleRendering()},g.prototype.enableFPSCounter=function(u){this.runtime.enableFPSCounter(u)},g.prototype.disableFPSCounter=function(){this.runtime.disableFPSCounter()},Object.defineProperty(g.prototype,"contents",{get:function(){if(this.loaded){for(var u={artboards:[]},d=0;d<this.file.artboardCount();d++){for(var m=this.file.artboardByIndex(d),k={name:m.name,animations:[],stateMachines:[]},R=0;R<m.animationCount();R++){var $=m.animationByIndex(R);k.animations.push($.name)}for(var re=0;re<m.stateMachineCount();re++){for(var ue=m.stateMachineByIndex(re),Q=ue.name,je=new this.runtime.StateMachineInstance(ue,m),be=[],it=0;it<je.inputCount();it++){var ze=je.input(it);be.push({name:ze.name,type:ze.type})}k.stateMachines.push({name:Q,inputs:be})}u.artboards.push(k)}return u}},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"volume",{get:function(){return this.artboard&&this.artboard.volume!==this._volume&&(this._volume=this.artboard.volume),this._volume},set:function(u){this._volume=u,this.artboard&&(this.artboard.volume=u*G.systemVolume)},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"artboardWidth",{get:function(){var u;return this.artboard?this.artboard.width:(u=this._artboardWidth)!==null&&u!==void 0?u:0},set:function(u){this._artboardWidth=u,this.artboard&&(this.artboard.width=u)},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"artboardHeight",{get:function(){var u;return this.artboard?this.artboard.height:(u=this._artboardHeight)!==null&&u!==void 0?u:0},set:function(u){this._artboardHeight=u,this.artboard&&(this.artboard.height=u)},enumerable:!1,configurable:!0}),g.prototype.resetArtboardSize=function(){this.artboard?(this.artboard.resetArtboardSize(),this._artboardWidth=this.artboard.width,this._artboardHeight=this.artboard.height):(this._artboardWidth=void 0,this._artboardHeight=void 0)},Object.defineProperty(g.prototype,"devicePixelRatioUsed",{get:function(){return this._devicePixelRatioUsed},set:function(u){this._devicePixelRatioUsed=u},enumerable:!1,configurable:!0}),g.prototype.bindViewModelInstance=function(u){var d;this.artboard&&!this.destroyed&&u&&u.runtimeInstance&&(u.internalIncrementReferenceCount(),(d=this._viewModelInstance)===null||d===void 0||d.cleanup(),this._viewModelInstance=u,this.animator.stateMachines.length>0?this.animator.stateMachines.forEach(function(m){return m.bindViewModelInstance(u)}):this.artboard.bindViewModelInstance(u.runtimeInstance))},Object.defineProperty(g.prototype,"viewModelInstance",{get:function(){return this._viewModelInstance},enumerable:!1,configurable:!0}),g.prototype.viewModelByIndex=function(u){var d=this.file.viewModelByIndex(u);return d!==null?new ut(d):null},g.prototype.viewModelByName=function(u){var d;return(d=this.riveFile)===null||d===void 0?void 0:d.viewModelByName(u)},g.prototype.enums=function(){if(this._dataEnums===null){var u=this.file.enums();this._dataEnums=u.map(function(d){return new Xt(d)})}return this._dataEnums},g.prototype.defaultViewModel=function(){if(this.artboard){var u=this.file.defaultArtboardViewModel(this.artboard);if(u)return new ut(u)}return null},g.prototype.getArtboard=function(u){var d,m;return(m=(d=this.riveFile)===null||d===void 0?void 0:d.getArtboard(u))!==null&&m!==void 0?m:null},g.prototype.getBindableArtboard=function(u){var d,m;return(m=(d=this.riveFile)===null||d===void 0?void 0:d.getBindableArtboard(u))!==null&&m!==void 0?m:null},g.prototype.getDefaultBindableArtboard=function(){var u,d;return(d=(u=this.riveFile)===null||u===void 0?void 0:u.getDefaultBindableArtboard())!==null&&d!==void 0?d:null},g.missingErrorMessage="Rive source file or data buffer required",g.cleanupErrorMessage="Attempt to use file after calling cleanup.",g}(),Qe;(function(g){g.none="none",g.string="string",g.number="number",g.boolean="boolean",g.color="color",g.list="list",g.enumType="enumType",g.trigger="trigger",g.viewModel="viewModel",g.integer="integer",g.listIndex="listIndex",g.image="image",g.artboard="artboard"})(Qe||(Qe={}));var ut=function(){function g(u){this._viewModel=u}return Object.defineProperty(g.prototype,"instanceCount",{get:function(){return this._viewModel.instanceCount},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"name",{get:function(){return this._viewModel.name},enumerable:!1,configurable:!0}),g.prototype.instanceByIndex=function(u){var d=this._viewModel.instanceByIndex(u);if(d!==null){var m=new en(d,null);return(0,f.createFinalization)(m,d),m}return null},g.prototype.instanceByName=function(u){var d=this._viewModel.instanceByName(u);if(d!==null){var m=new en(d,null);return(0,f.createFinalization)(m,d),m}return null},g.prototype.defaultInstance=function(){var u=this._viewModel.defaultInstance();if(u!==null){var d=new en(u,null);return(0,f.createFinalization)(d,u),d}return null},g.prototype.instance=function(){var u=this._viewModel.instance();if(u!==null){var d=new en(u,null);return(0,f.createFinalization)(d,u),d}return null},Object.defineProperty(g.prototype,"properties",{get:function(){return this._viewModel.getProperties()},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"instanceNames",{get:function(){return this._viewModel.getInstanceNames()},enumerable:!1,configurable:!0}),g}(),Xt=function(){function g(u){this._dataEnum=u}return Object.defineProperty(g.prototype,"name",{get:function(){return this._dataEnum.name},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"values",{get:function(){return this._dataEnum.values},enumerable:!1,configurable:!0}),g}(),Mt;(function(g){g.Number="number",g.String="string",g.Boolean="boolean",g.Color="color",g.Trigger="trigger",g.Enum="enum",g.List="list",g.Image="image",g.Artboard="artboard"})(Mt||(Mt={}));var en=function(){function g(u,d){this._parents=[],this._children=[],this._viewModelInstances=new Map,this._propertiesWithCallbacks=[],this._referenceCount=0,this.selfUnref=!1,this._runtimeInstance=u,d!==null&&this._parents.push(d)}return Object.defineProperty(g.prototype,"runtimeInstance",{get:function(){return this._runtimeInstance},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"nativeInstance",{get:function(){return this._runtimeInstance},enumerable:!1,configurable:!0}),g.prototype.handleCallbacks=function(){this._propertiesWithCallbacks.length!==0&&(this._propertiesWithCallbacks.forEach(function(u){u.handleCallbacks()}),this._propertiesWithCallbacks.forEach(function(u){u.clearChanges()})),this._children.forEach(function(u){return u.handleCallbacks()})},g.prototype.addParent=function(u){this._parents.includes(u)||(this._parents.push(u),(this._propertiesWithCallbacks.length>0||this._children.length>0)&&u.addToViewModelCallbacks(this))},g.prototype.removeParent=function(u){var d=this._parents.indexOf(u);if(d!==-1){var m=this._parents[d];m.removeFromViewModelCallbacks(this),this._parents.splice(d,1)}},g.prototype.addToPropertyCallbacks=function(u){var d=this;this._propertiesWithCallbacks.includes(u)||(this._propertiesWithCallbacks.push(u),this._propertiesWithCallbacks.length>0&&this._parents.forEach(function(m){m.addToViewModelCallbacks(d)}))},g.prototype.removeFromPropertyCallbacks=function(u){var d=this;this._propertiesWithCallbacks.includes(u)&&(this._propertiesWithCallbacks=this._propertiesWithCallbacks.filter(function(m){return m!==u}),this._children.length===0&&this._propertiesWithCallbacks.length===0&&this._parents.forEach(function(m){m.removeFromViewModelCallbacks(d)}))},g.prototype.addToViewModelCallbacks=function(u){var d=this;this._children.includes(u)||(this._children.push(u),this._parents.forEach(function(m){m.addToViewModelCallbacks(d)}))},g.prototype.removeFromViewModelCallbacks=function(u){var d=this;this._children.includes(u)&&(this._children=this._children.filter(function(m){return m!==u}),this._children.length===0&&this._propertiesWithCallbacks.length===0&&this._parents.forEach(function(m){m.removeFromViewModelCallbacks(d)}))},g.prototype.clearCallbacks=function(){this._propertiesWithCallbacks.forEach(function(u){u.clearCallbacks()})},g.prototype.propertyFromPath=function(u,d){var m=u.split("/");return this.propertyFromPathSegments(m,0,d)},g.prototype.viewModelFromPathSegments=function(u,d){var m=this.internalViewModelInstance(u[d]);return m!==null?d==u.length-1?m:m.viewModelFromPathSegments(u,d++):null},g.prototype.propertyFromPathSegments=function(u,d,m){var k,R,$,re,ue,Q,je,be,it,ze,Le,pt,vt,Ct,Me,st,ct,at;if(d<u.length-1){var Ke=this.internalViewModelInstance(u[d]);return Ke!==null?Ke.propertyFromPathSegments(u,d+1,m):null}var Ce=null;switch(m){case Mt.Number:if(Ce=(R=(k=this._runtimeInstance)===null||k===void 0?void 0:k.number(u[d]))!==null&&R!==void 0?R:null,Ce!==null)return new fe(Ce,this);break;case Mt.String:if(Ce=(re=($=this._runtimeInstance)===null||$===void 0?void 0:$.string(u[d]))!==null&&re!==void 0?re:null,Ce!==null)return new K(Ce,this);break;case Mt.Boolean:if(Ce=(Q=(ue=this._runtimeInstance)===null||ue===void 0?void 0:ue.boolean(u[d]))!==null&&Q!==void 0?Q:null,Ce!==null)return new ie(Ce,this);break;case Mt.Color:if(Ce=(be=(je=this._runtimeInstance)===null||je===void 0?void 0:je.color(u[d]))!==null&&be!==void 0?be:null,Ce!==null)return new ye(Ce,this);break;case Mt.Trigger:if(Ce=(ze=(it=this._runtimeInstance)===null||it===void 0?void 0:it.trigger(u[d]))!==null&&ze!==void 0?ze:null,Ce!==null)return new Y(Ce,this);break;case Mt.Enum:if(Ce=(pt=(Le=this._runtimeInstance)===null||Le===void 0?void 0:Le.enum(u[d]))!==null&&pt!==void 0?pt:null,Ce!==null)return new ne(Ce,this);break;case Mt.List:if(Ce=(Ct=(vt=this._runtimeInstance)===null||vt===void 0?void 0:vt.list(u[d]))!==null&&Ct!==void 0?Ct:null,Ce!==null)return new de(Ce,this);break;case Mt.Image:if(Ce=(st=(Me=this._runtimeInstance)===null||Me===void 0?void 0:Me.image(u[d]))!==null&&st!==void 0?st:null,Ce!==null)return new W(Ce,this);break;case Mt.Artboard:if(Ce=(at=(ct=this._runtimeInstance)===null||ct===void 0?void 0:ct.artboard(u[d]))!==null&&at!==void 0?at:null,Ce!==null)return new ee(Ce,this);break}return null},g.prototype.internalViewModelInstance=function(u){var d;if(this._viewModelInstances.has(u))return this._viewModelInstances.get(u);var m=(d=this._runtimeInstance)===null||d===void 0?void 0:d.viewModel(u);if(m!==null){var k=new g(m,this);return(0,f.createFinalization)(k,m),k.internalIncrementReferenceCount(),this._viewModelInstances.set(u,k),k}return null},g.prototype.number=function(u){var d=this.propertyFromPath(u,Mt.Number);return d},g.prototype.string=function(u){var d=this.propertyFromPath(u,Mt.String);return d},g.prototype.boolean=function(u){var d=this.propertyFromPath(u,Mt.Boolean);return d},g.prototype.color=function(u){var d=this.propertyFromPath(u,Mt.Color);return d},g.prototype.trigger=function(u){var d=this.propertyFromPath(u,Mt.Trigger);return d},g.prototype.enum=function(u){var d=this.propertyFromPath(u,Mt.Enum);return d},g.prototype.list=function(u){var d=this.propertyFromPath(u,Mt.List);return d},g.prototype.image=function(u){var d=this.propertyFromPath(u,Mt.Image);return d},g.prototype.artboard=function(u){var d=this.propertyFromPath(u,Mt.Artboard);return d},g.prototype.viewModel=function(u){var d=u.split("/"),m=d.length>1?this.viewModelFromPathSegments(d.slice(0,d.length-1),0):this;return m!=null?m.internalViewModelInstance(d[d.length-1]):null},g.prototype.internalReplaceViewModel=function(u,d){var m;if(d.runtimeInstance!==null){var k=((m=this._runtimeInstance)===null||m===void 0?void 0:m.replaceViewModel(u,d.runtimeInstance))||!1;if(k){d.internalIncrementReferenceCount();var R=this.internalViewModelInstance(u);R!==null&&(R.removeParent(this),this._children.includes(R)&&(this._children=this._children.filter(function($){return $!==R})),R.cleanup()),this._viewModelInstances.set(u,d),d.addParent(this)}return k}return!1},g.prototype.replaceViewModel=function(u,d){var m,k=u.split("/"),R=k.length>1?this.viewModelFromPathSegments(k.slice(0,k.length-1),0):this;return(m=R==null?void 0:R.internalReplaceViewModel(k[k.length-1],d))!==null&&m!==void 0?m:!1},g.prototype.incrementReferenceCount=function(){var u;this._referenceCount++,(u=this._runtimeInstance)===null||u===void 0||u.incrementReferenceCount()},g.prototype.decrementReferenceCount=function(){var u;this._referenceCount--,(u=this._runtimeInstance)===null||u===void 0||u.decrementReferenceCount()},Object.defineProperty(g.prototype,"properties",{get:function(){var u;return((u=this._runtimeInstance)===null||u===void 0?void 0:u.getProperties().map(function(d){return j({},d)}))||[]},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"viewModelName",{get:function(){var u,d;return(d=(u=this._runtimeInstance)===null||u===void 0?void 0:u.getViewModelName())!==null&&d!==void 0?d:""},enumerable:!1,configurable:!0}),g.prototype.internalIncrementReferenceCount=function(){this._referenceCount++},g.prototype.cleanup=function(){var u=this,d;if(this._referenceCount--,this._referenceCount<=0){this.selfUnref&&((d=this._runtimeInstance)===null||d===void 0||d.unref()),this._runtimeInstance=null,this.clearCallbacks(),this._propertiesWithCallbacks=[],this._viewModelInstances.forEach(function(R){R.cleanup()}),this._viewModelInstances.clear();var m=E([],this._children,!0);this._children.length=0;var k=E([],this._parents,!0);this._parents.length=0,m.forEach(function(R){R.removeParent(u)}),k.forEach(function(R){R.removeFromViewModelCallbacks(u)})}},g}(),Dt=function(){function g(u,d){this.callbacks=[],this._viewModelInstanceValue=u,this._parentViewModel=d}return g.prototype.on=function(u){this.callbacks.length===0&&this._viewModelInstanceValue.clearChanges(),this.callbacks.includes(u)||(this.callbacks.push(u),this._parentViewModel.addToPropertyCallbacks(this))},g.prototype.off=function(u){u?this.callbacks=this.callbacks.filter(function(d){return d!==u}):this.callbacks.length=0,this.callbacks.length===0&&this._parentViewModel.removeFromPropertyCallbacks(this)},g.prototype.internalHandleCallback=function(u){},g.prototype.handleCallbacks=function(){var u=this;this._viewModelInstanceValue.hasChanged&&this.callbacks.forEach(function(d){u.internalHandleCallback(d)})},g.prototype.clearChanges=function(){this._viewModelInstanceValue.clearChanges()},g.prototype.clearCallbacks=function(){this.callbacks.length=0},Object.defineProperty(g.prototype,"name",{get:function(){return this._viewModelInstanceValue.name},enumerable:!1,configurable:!0}),g}(),K=function(g){w(u,g);function u(d,m){return g.call(this,d,m)||this}return Object.defineProperty(u.prototype,"value",{get:function(){return this._viewModelInstanceValue.value},set:function(d){this._viewModelInstanceValue.value=d},enumerable:!1,configurable:!0}),u.prototype.internalHandleCallback=function(d){d(this.value)},u}(Dt),fe=function(g){w(u,g);function u(d,m){return g.call(this,d,m)||this}return Object.defineProperty(u.prototype,"value",{get:function(){return this._viewModelInstanceValue.value},set:function(d){this._viewModelInstanceValue.value=d},enumerable:!1,configurable:!0}),u.prototype.internalHandleCallback=function(d){d(this.value)},u}(Dt),ie=function(g){w(u,g);function u(d,m){return g.call(this,d,m)||this}return Object.defineProperty(u.prototype,"value",{get:function(){return this._viewModelInstanceValue.value},set:function(d){this._viewModelInstanceValue.value=d},enumerable:!1,configurable:!0}),u.prototype.internalHandleCallback=function(d){d(this.value)},u}(Dt),Y=function(g){w(u,g);function u(d,m){return g.call(this,d,m)||this}return u.prototype.trigger=function(){return this._viewModelInstanceValue.trigger()},u.prototype.internalHandleCallback=function(d){d()},u}(Dt),ne=function(g){w(u,g);function u(d,m){return g.call(this,d,m)||this}return Object.defineProperty(u.prototype,"value",{get:function(){return this._viewModelInstanceValue.value},set:function(d){this._viewModelInstanceValue.value=d},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"valueIndex",{get:function(){return this._viewModelInstanceValue.valueIndex},set:function(d){this._viewModelInstanceValue.valueIndex=d},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"values",{get:function(){return this._viewModelInstanceValue.values},enumerable:!1,configurable:!0}),u.prototype.internalHandleCallback=function(d){d(this.value)},u}(Dt),de=function(g){w(u,g);function u(d,m){return g.call(this,d,m)||this}return Object.defineProperty(u.prototype,"length",{get:function(){return this._viewModelInstanceValue.size},enumerable:!1,configurable:!0}),u.prototype.addInstance=function(d){d.runtimeInstance!=null&&(this._viewModelInstanceValue.addInstance(d.runtimeInstance),d.addParent(this._parentViewModel))},u.prototype.addInstanceAt=function(d,m){return d.runtimeInstance!=null&&this._viewModelInstanceValue.addInstanceAt(d.runtimeInstance,m)?(d.addParent(this._parentViewModel),!0):!1},u.prototype.removeInstance=function(d){d.runtimeInstance!=null&&(this._viewModelInstanceValue.removeInstance(d.runtimeInstance),d.removeParent(this._parentViewModel))},u.prototype.removeInstanceAt=function(d){this._viewModelInstanceValue.removeInstanceAt(d)},u.prototype.instanceAt=function(d){var m=this._viewModelInstanceValue.instanceAt(d);if(m!=null){var k=new en(m,this._parentViewModel);return(0,f.createFinalization)(k,m),k}return null},u.prototype.swap=function(d,m){this._viewModelInstanceValue.swap(d,m)},u.prototype.internalHandleCallback=function(d){d()},u}(Dt),ye=function(g){w(u,g);function u(d,m){return g.call(this,d,m)||this}return Object.defineProperty(u.prototype,"value",{get:function(){return this._viewModelInstanceValue.value},set:function(d){this._viewModelInstanceValue.value=d},enumerable:!1,configurable:!0}),u.prototype.rgb=function(d,m,k){this._viewModelInstanceValue.rgb(d,m,k)},u.prototype.rgba=function(d,m,k,R){this._viewModelInstanceValue.argb(R,d,m,k)},u.prototype.argb=function(d,m,k,R){this._viewModelInstanceValue.argb(d,m,k,R)},u.prototype.alpha=function(d){this._viewModelInstanceValue.alpha(d)},u.prototype.opacity=function(d){this._viewModelInstanceValue.alpha(Math.round(Math.max(0,Math.min(1,d))*255))},u.prototype.internalHandleCallback=function(d){d(this.value)},u}(Dt),W=function(g){w(u,g);function u(d,m){return g.call(this,d,m)||this}return Object.defineProperty(u.prototype,"value",{set:function(d){var m;this._viewModelInstanceValue.value((m=d==null?void 0:d.nativeImage)!==null&&m!==void 0?m:null)},enumerable:!1,configurable:!0}),u.prototype.internalHandleCallback=function(d){d()},u}(Dt),ee=function(g){w(u,g);function u(d,m){return g.call(this,d,m)||this}return Object.defineProperty(u.prototype,"value",{set:function(d){var m,k,R;d.isBindableArtboard?R=d:R=d.file.internalBindableArtboardFromArtboard(d.nativeArtboard),this._viewModelInstanceValue.value((m=R==null?void 0:R.nativeArtboard)!==null&&m!==void 0?m:null),R!=null&&R.nativeViewModel&&this._viewModelInstanceValue.viewModelInstance((k=R==null?void 0:R.nativeViewModel)!==null&&k!==void 0?k:null)},enumerable:!1,configurable:!0}),u.prototype.internalHandleCallback=function(d){d()},u}(Dt),Fe=function(g){return b(void 0,void 0,void 0,function(){var u,d,m;return v(this,function(k){switch(k.label){case 0:return u=new Request(g),[4,fetch(u)];case 1:if(d=k.sent(),!d.ok)throw new Error("Failed to fetch the Rive file: HTTP ".concat(d.status));return[4,d.arrayBuffer()];case 2:return m=k.sent(),[2,m]}})})},De=function(g){return typeof g=="string"?[g]:g instanceof Array?g:[]},Ne={EventManager:rt,TaskQueueManager:ft},Pe=function(g){return b(void 0,void 0,void 0,function(){var u,d,m;return v(this,function(k){switch(k.label){case 0:return u=new Promise(function(R){return _.RuntimeLoader.getInstance(function($){$.decodeAudio(g,R)})}),[4,u];case 1:return d=k.sent(),m=new f.AudioWrapper(d),f.finalizationRegistry.register(m,d),[2,m]}})})},$e=function(g){return b(void 0,void 0,void 0,function(){var u,d,m;return v(this,function(k){switch(k.label){case 0:return u=new Promise(function(R){return _.RuntimeLoader.getInstance(function($){$.decodeImage(g,R)})}),[4,u];case 1:return d=k.sent(),m=new f.ImageWrapper(d),f.finalizationRegistry.register(m,d),[2,m]}})})},Ze=function(g){return b(void 0,void 0,void 0,function(){var u,d,m;return v(this,function(k){switch(k.label){case 0:return u=new Promise(function(R){return _.RuntimeLoader.getInstance(function($){$.decodeFont(g,R)})}),[4,u];case 1:return d=k.sent(),m=new f.FontWrapper(d),f.finalizationRegistry.register(m,d),[2,m]}})})}})(),i})())})(zm);var By=zm.exports;(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t,n=N,o=By;function s(K){return K&&typeof K=="object"&&"default"in K?K:{default:K}}var i=s(n);function c(K){var fe=K||_(),ie=n.useState(fe),Y=ie[0],ne=ie[1];return n.useEffect(function(){if("u">typeof window&&"matchMedia"in window){var de=function(){ne(K||_())},ye=window.matchMedia("screen and (resolution: "+Y+"dppx)");return ye.hasOwnProperty("addEventListener")?ye.addEventListener("change",de):ye.addListener(de),function(){ye.hasOwnProperty("removeEventListener")?ye.removeEventListener("change",de):ye.removeListener(de)}}},[Y,K]),Y}function _(){return Math.min(Math.max(1,"u">typeof window&&typeof window.devicePixelRatio=="number"?window.devicePixelRatio:1),3)}var f=function(){function K(){}var fe=K.prototype;return fe.observe=function(){},fe.unobserve=function(){},fe.disconnect=function(){},K}();function w(K,fe){var ie=0;return function(){for(var Y=this,ne=arguments.length,de=Array(ne),ye=0;ye<ne;ye++)de[ye]=arguments[ye];clearTimeout(ie),ie=window.setTimeout(function(){return K.apply(Y,de)},fe)}}var j=globalThis.ResizeObserver||f,b=globalThis.ResizeObserver!==void 0,v=b,E=!v;function I(K,fe){fe===void 0&&(fe=!0);var ie=n.useState({width:0,height:0}),Y=ie[0],ne=ie[1];n.useEffect(function(){if("u">typeof window&&fe){var ye=function(){ne({width:window.innerWidth,height:window.innerHeight})};return E&&(ye(),window.addEventListener("resize",ye)),function(){return window.removeEventListener("resize",ye)}}},[]);var de=n.useRef(new j(w(function(ye){v&&ne({width:ye[ye.length-1].contentRect.width,height:ye[ye.length-1].contentRect.height})},0)));return n.useEffect(function(){var ye=de.current;if(!fe)return void ye.disconnect();var W=K.current;return K.current&&v&&ye.observe(K.current),function(){ye.disconnect(),W&&v&&ye.unobserve(W)}},[K,de]),Y}var y={useDevicePixelRatio:!0,fitCanvasToArtboardHeight:!1,useOffscreenRenderer:!0,shouldResizeCanvasToContainer:!0};function Z(K){return Object.assign({},y,K)}function C(K){var fe=K.riveLoaded,ie=fe!==void 0&&fe,Y=K.canvasElem,ne=K.containerRef,de=K.options,ye=K.onCanvasHasResized,W=K.artboardBounds,ee=Z(de===void 0?{}:de),Fe=n.useState({height:0,width:0}),De=Fe[0],Ne=De.height,Pe=De.width,$e=Fe[1],Ze=n.useState({height:0,width:0}),g=Ze[0],u=g.height,d=g.width,m=Ze[1],k=n.useState(!0),R=k[0],$=k[1],re=ee.fitCanvasToArtboardHeight,ue=ee.shouldResizeCanvasToContainer,Q=ee.useDevicePixelRatio,je=ee.customDevicePixelRatio,be=I(ne,ue),it=c(je),ze=W??{},Le=ze.maxX,pt=ze.maxY,vt=n.useCallback(function(){var Ct,Me,st,ct,at=(Ct=(st=ne.current)==null?void 0:st.clientWidth)!=null?Ct:0,Ke=(Me=(ct=ne.current)==null?void 0:ct.clientHeight)!=null?Me:0;return re&&W?{width:at,height:W.maxY/W.maxX*at}:{width:at,height:Ke}},[ne,re,Le,pt]);n.useEffect(function(){if(ue&&ne.current&&ie){var Ct=vt(),Me=Ct.width,st=Ct.height,ct=!1;if(Y){var at=Me!==Pe||st!==Ne;if(ee.fitCanvasToArtboardHeight&&at&&(ne.current.style.height=st+"px",ct=!0),ee.useDevicePixelRatio){var Ke=Me*it!==d||st*it!==u;if(at||Ke){var Ce=it*Me,bt=it*st;Y.width=Ce,Y.height=bt,Y.style.width=Me+"px",Y.style.height=st+"px",m({width:Ce,height:bt}),ct=!0}}else at&&(Y.width=Me,Y.height=st,m({width:Me,height:st}),ct=!0);$e({width:Me,height:st})}ye&&(R||ct)&&ye&&ye(),R&&$(!1)}},[Y,ne,be,it,vt,R,$,u,d,Ne,Pe,ye,ue,re,Q,ie]),n.useEffect(function(){m({width:0,height:0})},[Y])}var L=function(){function K(){}var fe=K.prototype;return fe.observe=function(){},fe.unobserve=function(){},fe.disconnect=function(){},K}(),O=globalThis.IntersectionObserver||L,A=function(){function K(){var ie=this;this.elementsMap=new Map,this.onObserved=function(Y){Y.forEach(function(ne){var de=ie.elementsMap.get(ne.target);de&&de(ne)})},this.observer=new O(this.onObserved)}var fe=K.prototype;return fe.registerCallback=function(ie,Y){this.observer.observe(ie),this.elementsMap.set(ie,Y)},fe.removeCallback=function(ie){this.observer.unobserve(ie),this.elementsMap.delete(ie)},K}(),q=function(){return t||(t=new A),t};function ae(){return{observe:n.useCallback(function(K,fe){q().registerCallback(K,fe)},[]),unobserve:n.useCallback(function(K){q().removeCallback(K)},[])}}function J(){return(J=Object.assign||function(K){for(var fe=1;fe<arguments.length;fe++){var ie=arguments[fe];for(var Y in ie)Object.prototype.hasOwnProperty.call(ie,Y)&&(K[Y]=ie[Y])}return K}).apply(this,arguments)}function ce(K,fe){if(K==null)return{};var ie,Y,ne={},de=Object.getOwnPropertyNames(K);for(Y=0;Y<de.length;Y++)ie=de[Y],!(fe.indexOf(ie)>=0)&&Object.prototype.propertyIsEnumerable.call(K,ie)&&(ne[ie]=K[ie]);return ne}function se(K){var fe=K.setContainerRef,ie=K.setCanvasRef,Y=K.className,ne=Y===void 0?"":Y,de=K.style,ye=K.children,W=ce(K,["setContainerRef","setCanvasRef","className","style","children"]),ee=J({width:"100%",height:"100%"},de);return i.default.createElement("div",J({ref:fe,className:ne},!ne&&{style:ee}),i.default.createElement("canvas",J({ref:ie,style:{verticalAlign:"top",width:0,height:0}},W),ye))}function te(K,fe){fe===void 0&&(fe={});var ie=n.useState(null),Y=ie[0],ne=ie[1],de=n.useRef(null),ye=n.useRef(null),W=n.useState(null),ee=W[0],Fe=W[1],De=!!K,Ne=Z(fe),Pe=c(),$e=n.useCallback(function(){if(ee){if(ee.layout&&ee.layout.fit===o.Fit.Layout&&Y){var $=Pe*ee.layout.layoutScaleFactor;ee.devicePixelRatioUsed=Pe,ee.artboardWidth=(Y==null?void 0:Y.width)/$,ee.artboardHeight=(Y==null?void 0:Y.height)/$}ee.startRendering(),ee.resizeToCanvas()}},[ee,Pe]);C({riveLoaded:!!ee,canvasElem:Y,containerRef:de,options:Ne,onCanvasHasResized:$e,artboardBounds:ee==null?void 0:ee.bounds});var Ze=n.useCallback(function($){$===null&&Y&&(Y.height=0,Y.width=0),ne($)},[]);n.useEffect(function(){if(Y&&K){var $,re=ee!=null;if(ee==null){var ue=Ne.useOffscreenRenderer,Q=K.onRiveReady,je=ce(K,["onRiveReady"]);$=new o.Rive(J({useOffscreenRenderer:ue},je,{canvas:Y})),ye.current!=null&&ye.current.cleanup(),ye.current=$,$.on(o.EventType.Load,function(){re=!0,Q&&Q($),Y?Fe($):$.cleanup()})}return function(){re||$==null||$.cleanup()}}},[Y,De,ee]);var g=n.useCallback(function($){de.current=$},[]),u=ae(),d=u.observe,m=u.unobserve;n.useEffect(function(){var $,re=!1,ue=function(){if(Y&&re){var Q=Y.getBoundingClientRect();Q.width>0&&Q.height>0&&Q.top<(window.innerHeight||document.documentElement.clientHeight)&&Q.bottom>0&&Q.left<(window.innerWidth||document.documentElement.clientWidth)&&Q.right>0&&(ee==null||ee.startRendering(),re=!1)}};return Y&&Ne.shouldUseIntersectionObserver!==!1&&d(Y,function(Q){Q.isIntersecting?ee&&ee.startRendering():ee&&ee.stopRendering(),re=!Q.isIntersecting,clearTimeout($),Q.isIntersecting||Q.boundingClientRect.width!==0||($=setTimeout(ue,10))}),function(){Y&&m(Y)}},[d,m,ee,Y,Ne.shouldUseIntersectionObserver]),n.useEffect(function(){return function(){ee&&(ee.cleanup(),Fe(null))}},[ee,Y]),n.useEffect(function(){return function(){ye.current!=null&&ye.current.cleanup()}},[]);var k=K==null?void 0:K.animations;n.useEffect(function(){ee&&k&&(ee.isPlaying?(ee.stop(ee.animationNames),ee.play(k)):ee.isPaused&&(ee.stop(ee.animationNames),ee.pause(k)))},[k,ee]);var R=n.useCallback(function($){return i.default.createElement(se,J({setContainerRef:g,setCanvasRef:Ze},$))},[Ze,g]);return{canvas:Y,container:de.current,setCanvasRef:Ze,setContainerRef:g,rive:ee,RiveComponent:R}}function we(K,fe){if(K==null)return{};var ie,Y,ne={},de=Object.getOwnPropertyNames(K);for(Y=0;Y<de.length;Y++)ie=de[Y],!(fe.indexOf(ie)>=0)&&Object.prototype.propertyIsEnumerable.call(K,ie)&&(ne[ie]=K[ie]);return ne}var me=function(K){var fe=K.src,ie=K.artboard,Y=K.animations,ne=K.stateMachines,de=K.layout,ye=K.useOffscreenRenderer,W=K.shouldDisableRiveListeners,ee=K.shouldResizeCanvasToContainer,Fe=K.automaticallyHandleEvents,De=K.children,Ne=we(K,["src","artboard","animations","stateMachines","layout","useOffscreenRenderer","shouldDisableRiveListeners","shouldResizeCanvasToContainer","automaticallyHandleEvents","children"]),Pe=te({src:fe,artboard:ie,animations:Y,layout:de,stateMachines:ne,autoplay:!0,shouldDisableRiveListeners:W!==void 0&&W,automaticallyHandleEvents:Fe!==void 0&&Fe},{useOffscreenRenderer:ye===void 0||ye,shouldResizeCanvasToContainer:ee===void 0||ee}).RiveComponent;return i.default.createElement(Pe,Ne,De)};function nt(K,fe,ie,Y){var ne=n.useState(null),de=ne[0],ye=ne[1];return n.useEffect(function(){var W=function(){if(K&&fe&&ie||ye(null),K&&fe&&ie){var ee=K.stateMachineInputs(fe);if(ee){var Fe=ee.find(function(De){return De.name===ie});Y!==void 0&&Fe&&(Fe.value=Y),ye(Fe||null)}}else ye(null)};W(),K&&K.on(o.EventType.Load,function(){W()})},[K]),de}function rt(K,fe){var ie=fe??{},Y=ie.name,ne=ie.useDefault,de=n.useState(null),ye=de[0],W=de[1];return n.useEffect(function(){var ee=function(){if(!K)return void W(null);W(Y!=null?(K.viewModelByName==null?void 0:K.viewModelByName.call(K,Y))||null:K.defaultViewModel()||null)};return ee(),K&&K.on(o.EventType.Load,ee),function(){K&&K.off(o.EventType.Load,ee)}},[K,Y,ne!==void 0&&ne]),ye}function ft(K,fe){var ie=fe??{},Y=ie.name,ne=ie.useDefault,de=ne!==void 0&&ne,ye=ie.useNew,W=ye!==void 0&&ye,ee=ie.rive,Fe=n.useState(null),De=Fe[0],Ne=Fe[1];return n.useEffect(function(){if(!K)return void Ne(null);var Pe=null;Ne(Pe=Y!=null?K.instanceByName(Y)||null:de?(K.defaultInstance==null?void 0:K.defaultInstance.call(K))||null:W?(K.instance==null?void 0:K.instance.call(K))||null:(K.defaultInstance==null?void 0:K.defaultInstance.call(K))||null),ee&&Pe&&ee.viewModelInstance!==Pe&&ee.bindViewModelInstance(Pe)},[K,Y,de,W,ee]),De}function Re(){return(Re=Object.assign||function(K){for(var fe=1;fe<arguments.length;fe++){var ie=arguments[fe];for(var Y in ie)Object.prototype.hasOwnProperty.call(ie,Y)&&(K[Y]=ie[Y])}return K}).apply(this,arguments)}function yt(K,fe,ie){var Y=n.useState(null),ne=Y[0],de=Y[1],ye=n.useState(ie.defaultValue),W=ye[0],ee=ye[1],Fe=n.useState(null),De=Fe[0],Ne=Fe[1],Pe=n.useRef(null),$e=n.useRef(K),Ze=n.useRef(ie);n.useEffect(function(){Ze.current=ie},[ie]);var g=n.useCallback(function(){var k=Pe.current,R=$e.current,$=Ze.current;if(!k||!R)return de(null),ee($.defaultValue),Ne(null),function(){};var re=$.getProperty(k,R);if(re){de(re),ee($.getValue(re)),$.getExtendedData&&Ne($.getExtendedData(re));var ue=function(){ee($.getValue(re)),$.getExtendedData&&Ne($.getExtendedData(re)),$.onPropertyEvent&&$.onPropertyEvent()};return re.on(ue),function(){re.off(ue)}}return function(){}},[]);n.useEffect(function(){return Pe.current=fe,$e.current=K,g()},[fe,K,g]);var u=n.useCallback(function(k){if(ne&&Pe.current===fe)try{k(ne),Ze.current.getExtendedData&&Ne(Ze.current.getExtendedData(ne));return}catch{}if(Pe.current)try{var R=Ze.current.getProperty(Pe.current,$e.current);R&&(de(R),k(R),Ze.current.getExtendedData&&Ne(Ze.current.getExtendedData(R)))}catch{}},[ne,fe]),d=n.useMemo(function(){return Ze.current.buildPropertyOperations(u)},[u]),m=Re({value:W},d);return ie.getExtendedData&&(m.extendedData=De),m}function G(K,fe){var ie=yt(K,fe,{getProperty:n.useCallback(function(Y,ne){return Y.number(ne)},[]),getValue:n.useCallback(function(Y){return Y.value},[]),defaultValue:null,buildPropertyOperations:n.useCallback(function(Y){return{setValue:function(ne){Y(function(de){de.value=ne})}}},[])});return{value:ie.value,setValue:ie.setValue}}function pe(K,fe){var ie=yt(K,fe,{getProperty:n.useCallback(function(Y,ne){return Y.string(ne)},[]),getValue:n.useCallback(function(Y){return Y.value},[]),defaultValue:null,buildPropertyOperations:n.useCallback(function(Y){return{setValue:function(ne){Y(function(de){de.value=ne})}}},[])});return{value:ie.value,setValue:ie.setValue}}function Ee(K,fe){var ie=yt(K,fe,{getProperty:n.useCallback(function(Y,ne){return Y.boolean(ne)},[]),getValue:n.useCallback(function(Y){return Y.value},[]),defaultValue:null,buildPropertyOperations:n.useCallback(function(Y){return{setValue:function(ne){Y(function(de){de.value=ne})}}},[])});return{value:ie.value,setValue:ie.setValue}}function Ge(K,fe){var ie=yt(K,fe,{getProperty:n.useCallback(function(Y,ne){return Y.color(ne)},[]),getValue:n.useCallback(function(Y){return Y.value},[]),defaultValue:null,buildPropertyOperations:n.useCallback(function(Y){return{setValue:function(ne){Y(function(de){de.value=ne})},setRgb:function(ne,de,ye){Y(function(W){W.rgb(ne,de,ye)})},setRgba:function(ne,de,ye,W){Y(function(ee){ee.rgba(ne,de,ye,W)})},setAlpha:function(ne){Y(function(de){de.alpha(ne)})},setOpacity:function(ne){Y(function(de){de.opacity(ne)})}}},[])});return{value:ie.value,setValue:ie.setValue,setRgb:ie.setRgb,setRgba:ie.setRgba,setAlpha:ie.setAlpha,setOpacity:ie.setOpacity}}function qe(K,fe){var ie=yt(K,fe,{getProperty:n.useCallback(function(Y,ne){return Y.enum(ne)},[]),getValue:n.useCallback(function(Y){return Y.value},[]),defaultValue:null,getExtendedData:n.useCallback(function(Y){return Y.values},[]),buildPropertyOperations:n.useCallback(function(Y){return{setValue:function(ne){Y(function(de){de.value=ne})}}},[])});return{value:ie.value,values:ie.extendedData||[],setValue:ie.setValue}}function St(K,fe,ie){var Y=(ie??{}).onTrigger;return{trigger:yt(K,fe,{getProperty:n.useCallback(function(ne,de){return ne.trigger(de)},[]),getValue:n.useCallback(function(){},[]),defaultValue:null,onPropertyEvent:Y,buildPropertyOperations:n.useCallback(function(ne){return{trigger:function(){ne(function(de){de.trigger()})}}},[])}).trigger}}function $t(K,fe){return{setValue:yt(K,fe,{getProperty:n.useCallback(function(ie,Y){return ie.image(Y)},[]),getValue:n.useCallback(function(){},[]),defaultValue:null,buildPropertyOperations:n.useCallback(function(ie){return{setValue:function(Y){ie(function(ne){ne.value=Y})}}},[])}).setValue}}function Qe(K,fe){var ie,Y=n.useState(0)[1],ne=yt(K,fe,{getProperty:n.useCallback(function(de,ye){return de.list(ye)},[]),getValue:n.useCallback(function(de){return de.length},[]),defaultValue:null,onPropertyEvent:function(){Y(function(de){return de+1})},buildPropertyOperations:n.useCallback(function(de){return{addInstance:function(ye){de(function(W){return W.addInstance(ye)})},addInstanceAt:function(ye,W){var ee=!1;return de(function(Fe){ee=Fe.addInstanceAt(ye,W)}),ee},removeInstance:function(ye){de(function(W){return W.removeInstance(ye)})},removeInstanceAt:function(ye){de(function(W){return W.removeInstanceAt(ye)})},getInstanceAt:function(ye){var W=null;return de(function(ee){W=ee.instanceAt(ye)}),W},swap:function(ye,W){de(function(ee){return ee.swap(ye,W)})}}},[])});return{length:(ie=ne.value)!=null?ie:0,addInstance:ne.addInstance,addInstanceAt:ne.addInstanceAt,removeInstance:ne.removeInstance,removeInstanceAt:ne.removeInstanceAt,getInstanceAt:ne.getInstanceAt,swap:ne.swap}}function ut(K,fe,ie,Y,ne,de,ye){try{var W=K[de](ye),ee=W.value}catch(Fe){ie(Fe);return}W.done?fe(ee):Promise.resolve(ee).then(Y,ne)}function Xt(K){return function(){var fe=this,ie=arguments;return new Promise(function(Y,ne){var de=K.apply(fe,ie);function ye(ee){ut(de,Y,ne,ye,W,"next",ee)}function W(ee){ut(de,Y,ne,ye,W,"throw",ee)}ye(void 0)})}}function Mt(K,fe){var ie,Y,ne,de={label:0,sent:function(){if(1&ne[0])throw ne[1];return ne[1]},trys:[],ops:[]},ye=Object.create((typeof Iterator=="function"?Iterator:Object).prototype),W=Object.defineProperty;return W(ye,"next",{value:ee(0)}),W(ye,"throw",{value:ee(1)}),W(ye,"return",{value:ee(2)}),typeof Symbol=="function"&&W(ye,Symbol.iterator,{value:function(){return this}}),ye;function ee(Fe){return function(De){var Ne=[Fe,De];if(ie)throw TypeError("Generator is already executing.");for(;ye&&(ye=0,Ne[0]&&(de=0)),de;)try{if(ie=1,Y&&(ne=2&Ne[0]?Y.return:Ne[0]?Y.throw||((ne=Y.return)&&ne.call(Y),0):Y.next)&&!(ne=ne.call(Y,Ne[1])).done)return ne;switch(Y=0,ne&&(Ne=[2&Ne[0],ne.value]),Ne[0]){case 0:case 1:ne=Ne;break;case 4:return de.label++,{value:Ne[1],done:!1};case 5:de.label++,Y=Ne[1],Ne=[0];continue;case 7:Ne=de.ops.pop(),de.trys.pop();continue;default:if(!(ne=(ne=de.trys).length>0&&ne[ne.length-1])&&(Ne[0]===6||Ne[0]===2)){de=0;continue}if(Ne[0]===3&&(!ne||Ne[1]>ne[0]&&Ne[1]<ne[3])){de.label=Ne[1];break}if(Ne[0]===6&&de.label<ne[1]){de.label=ne[1],ne=Ne;break}if(ne&&de.label<ne[2]){de.label=ne[2],de.ops.push(Ne);break}ne[2]&&de.ops.pop(),de.trys.pop();continue}Ne=fe.call(K,de)}catch(Pe){Ne=[6,Pe],Y=0}finally{ie=ne=0}if(5&Ne[0])throw Ne[1];return{value:Ne[0]?Ne[1]:void 0,done:!0}}}}function en(K){var fe=n.useState(null),ie=fe[0],Y=fe[1],ne=n.useState("idle"),de=ne[0],ye=ne[1];return n.useEffect(function(){var W=null;return Xt(function(){return Mt(this,function(ee){try{ye("loading"),(W=new o.RiveFile(K)).init(),W.on(o.EventType.Load,function(){W==null||W.getInstance(),Y(W),ye("success")}),W.on(o.EventType.LoadError,function(){ye("failed")}),Y(W)}catch(Fe){console.error(Fe),ye("failed")}return[2]})})(),function(){W==null||W.cleanup()}},[K.src,K.buffer]),{riveFile:ie,status:de}}function Dt(K,fe){return{setValue:yt(K,fe,{getProperty:n.useCallback(function(ie,Y){return ie.artboard(Y)},[]),getValue:n.useCallback(function(){},[]),defaultValue:null,buildPropertyOperations:n.useCallback(function(ie){return{setValue:function(Y){ie(function(ne){ne.value=Y})}}},[])}).setValue}}e.default=me,e.useResizeCanvas=C,e.useRive=te,e.useRiveFile=en,e.useStateMachineInput=nt,e.useViewModel=rt,e.useViewModelInstance=ft,e.useViewModelInstanceArtboard=Dt,e.useViewModelInstanceBoolean=Ee,e.useViewModelInstanceColor=Ge,e.useViewModelInstanceEnum=qe,e.useViewModelInstanceImage=$t,e.useViewModelInstanceList=Qe,e.useViewModelInstanceNumber=G,e.useViewModelInstanceString=pe,e.useViewModelInstanceTrigger=St,Object.keys(o).forEach(function(K){K==="default"||e.hasOwnProperty(K)||Object.defineProperty(e,K,{enumerable:!0,get:function(){return o[K]}})})})(Sh);var zy=`.styles-module__popup___IhzrD svg[fill=none] {
  fill: none !important;
}
.styles-module__popup___IhzrD svg[fill=none] :not([fill]) {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem 14px;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: var(--agentation-color-blue);
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: var(--agentation-color-green);
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR {
  padding: 0.4rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}`,Wy={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(e)),e.textContent=zy}var Kt=Wy,Hy=`.icon-transitions-module__iconState___uqK9J {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: center;
}

.icon-transitions-module__iconStateFast___HxlMm {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: center;
}

.icon-transitions-module__iconFade___nPwXg {
  transition: opacity 0.2s ease;
}

.icon-transitions-module__iconFadeFast___Ofb2t {
  transition: opacity 0.15s ease;
}

.icon-transitions-module__visible___PlHsU {
  opacity: 1 !important;
}

.icon-transitions-module__visibleScaled___8Qog- {
  opacity: 1 !important;
  transform: scale(1);
}

.icon-transitions-module__hidden___ETykt {
  opacity: 0 !important;
}

.icon-transitions-module__hiddenScaled___JXn-m {
  opacity: 0 !important;
  transform: scale(0.8);
}

.icon-transitions-module__sending___uaLN- {
  opacity: 0.5 !important;
  transform: scale(0.8);
}`,Uy={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-components-icon-transitions");e||(e=document.createElement("style"),e.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(e)),e.textContent=Hy}var Yt=Uy,Vy=({size:e=16})=>r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",children:r.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),Yy=({size:e=24,style:t={}})=>r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:t,children:[r.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[r.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),r.jsx("defs",{children:r.jsx("clipPath",{id:"clip0_list_sparkle",children:r.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Xy=({size:e=20,...t})=>r.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[r.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),r.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),Qy=({size:e=24,copied:t=!1,tint:n})=>r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:n?{color:n,transition:"color 0.3s ease"}:void 0,children:[r.jsxs("g",{className:`${Yt.iconState} ${t?Yt.hiddenScaled:Yt.visibleScaled}`,children:[r.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),r.jsxs("g",{className:`${Yt.iconState} ${t?Yt.visibleScaled:Yt.hiddenScaled}`,children:[r.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),Ky=({size:e=24,state:t="idle"})=>{const n=t==="idle",o=t==="sent",s=t==="failed",i=t==="sending";return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("g",{className:`${Yt.iconStateFast} ${n?Yt.visibleScaled:i?Yt.sending:Yt.hiddenScaled}`,children:r.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),r.jsxs("g",{className:`${Yt.iconStateFast} ${o?Yt.visibleScaled:Yt.hiddenScaled}`,children:[r.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsxs("g",{className:`${Yt.iconStateFast} ${s?Yt.visibleScaled:Yt.hiddenScaled}`,children:[r.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),r.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},Gy=({size:e=24,isOpen:t=!0})=>r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[r.jsxs("g",{className:`${Yt.iconFade} ${t?Yt.visible:Yt.hidden}`,children:[r.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsxs("g",{className:`${Yt.iconFade} ${t?Yt.hidden:Yt.visible}`,children:[r.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),r.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),qy=({size:e=24,isPaused:t=!1})=>r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[r.jsxs("g",{className:`${Yt.iconFadeFast} ${t?Yt.hidden:Yt.visible}`,children:[r.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),r.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),r.jsx("path",{className:`${Yt.iconFadeFast} ${t?Yt.visible:Yt.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),Jy=({size:e=16})=>r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),Zy=({size:e=16})=>r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Wm=({size:e=16})=>r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[r.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[r.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsx("defs",{children:r.jsx("clipPath",{id:"clip0_2_53",children:r.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),e1=({size:e=24})=>r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),t1=({size:e=16})=>r.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:[r.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),n1=({size:e=16})=>r.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:r.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),r1=({size:e=16})=>r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),o1=({size:e=24})=>r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),s1=({size:e=16})=>r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),i1=({size:e=24})=>r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),Hm=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],yu=Hm.flatMap(e=>[`:not([${e}])`,`:not([${e}] *)`]).join(""),Cd="feedback-freeze-styles",vu="__agentation_freeze";function a1(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:t=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const e=window;return e[vu]||(e[vu]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),e[vu]}var It=a1();typeof window<"u"&&!It.installed&&(It.origSetTimeout=window.setTimeout.bind(window),It.origSetInterval=window.setInterval.bind(window),It.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(e,t,...n)=>typeof e=="string"?It.origSetTimeout(e,t):It.origSetTimeout((...o)=>{It.frozen?It.frozenTimeoutQueue.push(()=>e(...o)):e(...o)},t,...n),window.setInterval=(e,t,...n)=>typeof e=="string"?It.origSetInterval(e,t):It.origSetInterval((...o)=>{It.frozen||e(...o)},t,...n),window.requestAnimationFrame=e=>It.origRAF(t=>{It.frozen?It.frozenRAFQueue.push(e):e(t)}),It.installed=!0);var _t=It.origSetTimeout,l1=It.origSetInterval,ci=It.origRAF;function c1(e){return e?Hm.some(t=>{var n;return!!((n=e.closest)!=null&&n.call(e,`[${t}]`))}):!1}function u1(){if(typeof document>"u"||It.frozen)return;It.frozen=!0,It.frozenTimeoutQueue=[],It.frozenRAFQueue=[];let e=document.getElementById(Cd);e||(e=document.createElement("style"),e.id=Cd),e.textContent=`
    *${yu},
    *${yu}::before,
    *${yu}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(e),It.pausedAnimations=[];try{document.getAnimations().forEach(t=>{var o;if(t.playState!=="running")return;const n=(o=t.effect)==null?void 0:o.target;c1(n)||(t.pause(),It.pausedAnimations.push(t))})}catch{}document.querySelectorAll("video").forEach(t=>{t.paused||(t.dataset.wasPaused="false",t.pause())})}function qf(){var n;if(typeof document>"u"||!It.frozen)return;It.frozen=!1;const e=It.frozenTimeoutQueue;It.frozenTimeoutQueue=[];for(const o of e)It.origSetTimeout(()=>{if(It.frozen){It.frozenTimeoutQueue.push(o);return}try{o()}catch(s){console.warn("[agentation] Error replaying queued timeout:",s)}},0);const t=It.frozenRAFQueue;It.frozenRAFQueue=[];for(const o of t)It.origRAF(s=>{if(It.frozen){It.frozenRAFQueue.push(o);return}o(s)});for(const o of It.pausedAnimations)try{o.play()}catch(s){console.warn("[agentation] Error resuming animation:",s)}It.pausedAnimations=[],(n=document.getElementById(Cd))==null||n.remove(),document.querySelectorAll("video").forEach(o=>{o.dataset.wasPaused==="false"&&(o.play().catch(()=>{}),delete o.dataset.wasPaused)})}function xu(e){if(!e)return;const t=n=>n.stopImmediatePropagation();document.addEventListener("focusin",t,!0),document.addEventListener("focusout",t,!0);try{e.focus()}finally{document.removeEventListener("focusin",t,!0),document.removeEventListener("focusout",t,!0)}}var wc=N.forwardRef(function({element:t,timestamp:n,selectedText:o,placeholder:s="What should change?",initialValue:i="",submitLabel:c="Add",onSubmit:_,onCancel:f,onDelete:w,style:j,accentColor:b="#3c82f7",isExiting:v=!1,lightMode:E=!1,computedStyles:I},y){const[Z,C]=N.useState(i),[L,O]=N.useState(!1),[A,q]=N.useState("initial"),[ae,J]=N.useState(!1),[ce,se]=N.useState(!1),te=N.useRef(null),we=N.useRef(null),me=N.useRef(null),nt=N.useRef(null);N.useEffect(()=>{v&&A!=="exit"&&q("exit")},[v,A]),N.useEffect(()=>{_t(()=>{q("enter")},0);const pe=_t(()=>{q("entered")},200),Ee=_t(()=>{const Ge=te.current;Ge&&(xu(Ge),Ge.selectionStart=Ge.selectionEnd=Ge.value.length,Ge.scrollTop=Ge.scrollHeight)},50);return()=>{clearTimeout(pe),clearTimeout(Ee),me.current&&clearTimeout(me.current),nt.current&&clearTimeout(nt.current)}},[]);const rt=N.useCallback(()=>{nt.current&&clearTimeout(nt.current),O(!0),nt.current=_t(()=>{O(!1),xu(te.current)},250)},[]);N.useImperativeHandle(y,()=>({shake:rt}),[rt]);const ft=N.useCallback(()=>{q("exit"),me.current=_t(()=>{f()},150)},[f]),Re=N.useCallback(()=>{Z.trim()&&_(Z.trim())},[Z,_]),yt=N.useCallback(pe=>{pe.stopPropagation(),!pe.nativeEvent.isComposing&&(pe.key==="Enter"&&!pe.shiftKey&&(pe.preventDefault(),Re()),pe.key==="Escape"&&ft())},[Re,ft]),G=[Kt.popup,E?Kt.light:"",A==="enter"?Kt.enter:"",A==="entered"?Kt.entered:"",A==="exit"?Kt.exit:"",L?Kt.shake:""].filter(Boolean).join(" ");return r.jsxs("div",{ref:we,className:G,"data-annotation-popup":!0,style:j,onClick:pe=>pe.stopPropagation(),children:[r.jsxs("div",{className:Kt.header,children:[I&&Object.keys(I).length>0?r.jsxs("button",{className:Kt.headerToggle,onClick:()=>{const pe=ce;se(!ce),pe&&_t(()=>xu(te.current),0)},type:"button",children:[r.jsx("svg",{className:`${Kt.chevron} ${ce?Kt.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),r.jsx("span",{className:Kt.element,children:t})]}):r.jsx("span",{className:Kt.element,children:t}),n&&r.jsx("span",{className:Kt.timestamp,children:n})]}),I&&Object.keys(I).length>0&&r.jsx("div",{className:`${Kt.stylesWrapper} ${ce?Kt.expanded:""}`,children:r.jsx("div",{className:Kt.stylesInner,children:r.jsx("div",{className:Kt.stylesBlock,children:Object.entries(I).map(([pe,Ee])=>r.jsxs("div",{className:Kt.styleLine,children:[r.jsx("span",{className:Kt.styleProperty,children:pe.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",r.jsx("span",{className:Kt.styleValue,children:Ee}),";"]},pe))})})}),o&&r.jsxs("div",{className:Kt.quote,children:["“",o.slice(0,80),o.length>80?"...":"","”"]}),r.jsx("textarea",{ref:te,className:Kt.textarea,style:{borderColor:ae?b:void 0},placeholder:s,value:Z,onChange:pe=>C(pe.target.value),onFocus:()=>J(!0),onBlur:()=>J(!1),rows:2,onKeyDown:yt}),r.jsxs("div",{className:Kt.actions,children:[w&&r.jsx("div",{className:Kt.deleteWrapper,children:r.jsx("button",{className:Kt.deleteButton,onClick:w,type:"button",children:r.jsx(o1,{size:22})})}),r.jsx("button",{className:Kt.cancel,onClick:ft,children:"Cancel"}),r.jsx("button",{className:Kt.submit,style:{backgroundColor:b,opacity:Z.trim()?1:.4},onClick:Re,disabled:!Z.trim(),children:c})]})]})}),d1=({content:e,children:t,...n})=>{const[o,s]=N.useState(!1),[i,c]=N.useState(!1),[_,f]=N.useState({top:0,right:0}),w=N.useRef(null),j=N.useRef(null),b=N.useRef(null),v=()=>{if(w.current){const y=w.current.getBoundingClientRect();f({top:y.top+y.height/2,right:window.innerWidth-y.left+8})}},E=()=>{c(!0),b.current&&(clearTimeout(b.current),b.current=null),v(),j.current=_t(()=>{s(!0)},500)},I=()=>{j.current&&(clearTimeout(j.current),j.current=null),s(!1),b.current=_t(()=>{c(!1)},150)};return N.useEffect(()=>()=>{j.current&&clearTimeout(j.current),b.current&&clearTimeout(b.current)},[]),r.jsxs(r.Fragment,{children:[r.jsx("span",{ref:w,onMouseEnter:E,onMouseLeave:I,...n,children:t}),i&&Ch.createPortal(r.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:_.top,right:_.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:o?1:0,transition:"opacity 0.15s ease"},children:e}),document.body)]})},h1=`.styles-module__tooltip___mcXL2 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: help;
}

.styles-module__tooltipIcon___Nq2nD {
  transform: translateY(0.5px);
  color: #fff;
  opacity: 0.2;
  transition: opacity 0.15s ease;
  will-change: transform;
}
.styles-module__tooltip___mcXL2:hover .styles-module__tooltipIcon___Nq2nD {
  opacity: 0.5;
}
[data-agentation-theme=light] .styles-module__tooltipIcon___Nq2nD {
  color: #000;
}`,f1={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-help-tooltip-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(e)),e.textContent=h1}var Jf=f1,_s=({content:e})=>r.jsx(d1,{className:Jf.tooltip,content:e,children:r.jsx(Xy,{className:Jf.tooltipIcon})}),Je={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},Um=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...Je.navigation},{type:"header",label:"Header",...Je.header},{type:"hero",label:"Hero",...Je.hero},{type:"section",label:"Section",...Je.section},{type:"sidebar",label:"Sidebar",...Je.sidebar},{type:"footer",label:"Footer",...Je.footer},{type:"modal",label:"Modal",...Je.modal},{type:"banner",label:"Banner",...Je.banner},{type:"drawer",label:"Drawer",...Je.drawer},{type:"popover",label:"Popover",...Je.popover},{type:"divider",label:"Divider",...Je.divider}]},{section:"Content",items:[{type:"card",label:"Card",...Je.card},{type:"text",label:"Text",...Je.text},{type:"image",label:"Image",...Je.image},{type:"video",label:"Video",...Je.video},{type:"table",label:"Table",...Je.table},{type:"grid",label:"Grid",...Je.grid},{type:"list",label:"List",...Je.list},{type:"chart",label:"Chart",...Je.chart},{type:"codeBlock",label:"Code Block",...Je.codeBlock},{type:"map",label:"Map",...Je.map},{type:"timeline",label:"Timeline",...Je.timeline},{type:"calendar",label:"Calendar",...Je.calendar},{type:"accordion",label:"Accordion",...Je.accordion},{type:"carousel",label:"Carousel",...Je.carousel},{type:"logo",label:"Logo",...Je.logo},{type:"faq",label:"FAQ",...Je.faq},{type:"gallery",label:"Gallery",...Je.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...Je.button},{type:"input",label:"Input",...Je.input},{type:"search",label:"Search",...Je.search},{type:"form",label:"Form",...Je.form},{type:"tabs",label:"Tabs",...Je.tabs},{type:"dropdown",label:"Dropdown",...Je.dropdown},{type:"toggle",label:"Toggle",...Je.toggle},{type:"stepper",label:"Stepper",...Je.stepper},{type:"rating",label:"Rating",...Je.rating},{type:"fileUpload",label:"File Upload",...Je.fileUpload},{type:"checkbox",label:"Checkbox",...Je.checkbox},{type:"radio",label:"Radio",...Je.radio},{type:"slider",label:"Slider",...Je.slider},{type:"datePicker",label:"Date Picker",...Je.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...Je.avatar},{type:"badge",label:"Badge",...Je.badge},{type:"tag",label:"Tag",...Je.tag},{type:"breadcrumb",label:"Breadcrumb",...Je.breadcrumb},{type:"pagination",label:"Pagination",...Je.pagination},{type:"progress",label:"Progress",...Je.progress},{type:"alert",label:"Alert",...Je.alert},{type:"toast",label:"Toast",...Je.toast},{type:"notification",label:"Notification",...Je.notification},{type:"tooltip",label:"Tooltip",...Je.tooltip},{type:"stat",label:"Stat",...Je.stat},{type:"skeleton",label:"Skeleton",...Je.skeleton},{type:"chip",label:"Chip",...Je.chip},{type:"icon",label:"Icon",...Je.icon},{type:"spinner",label:"Spinner",...Je.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...Je.pricing},{type:"testimonial",label:"Testimonial",...Je.testimonial},{type:"cta",label:"CTA",...Je.cta},{type:"productCard",label:"Product Card",...Je.productCard},{type:"profile",label:"Profile",...Je.profile},{type:"feature",label:"Feature",...Je.feature},{type:"team",label:"Team",...Je.team},{type:"login",label:"Login",...Je.login},{type:"contact",label:"Contact",...Je.contact}]}],Er={};for(const e of Um)for(const t of e.items)Er[t.type]=t;function ge({w:e,h:t=3,strong:n}){return r.jsx("div",{style:{width:typeof e=="number"?`${e}px`:e,height:t,borderRadius:2,background:n?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Ut({w:e,h:t,radius:n=3,style:o}){return r.jsx("div",{style:{width:typeof e=="number"?`${e}px`:e,height:typeof t=="number"?`${t}px`:t,borderRadius:n,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...o}})}function Bn({size:e}){return r.jsx("div",{style:{width:e,height:e,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function _1({width:e,height:t}){const n=Math.max(8,t*.2);return r.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${n}px`,gap:e*.02},children:[r.jsx(Ut,{w:Math.max(20,t*.5),h:Math.max(12,t*.4),radius:2}),r.jsxs("div",{style:{flex:1,display:"flex",gap:e*.03,marginLeft:e*.04},children:[r.jsx(ge,{w:e*.06}),r.jsx(ge,{w:e*.07}),r.jsx(ge,{w:e*.05}),r.jsx(ge,{w:e*.06})]}),r.jsx(Ut,{w:e*.1,h:Math.min(28,t*.5),radius:4})]})}function p1({width:e,height:t,text:n}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:t*.05},children:[n?r.jsx("span",{style:{fontSize:Math.min(20,t*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:n}):r.jsx(ge,{w:e*.5,h:Math.max(6,t*.04),strong:!0}),r.jsx(ge,{w:e*.6}),r.jsx(ge,{w:e*.4}),r.jsx(Ut,{w:Math.min(140,e*.2),h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.06}})]})}function m1({width:e,height:t}){const n=Math.max(3,Math.floor(t/36));return r.jsxs("div",{style:{padding:e*.08,display:"flex",flexDirection:"column",gap:t*.03},children:[r.jsx(ge,{w:e*.6,h:4,strong:!0}),Array.from({length:n},(o,s)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx(Ut,{w:10,h:10,radius:2}),r.jsx(ge,{w:e*(.4+s*17%30/100)})]},s))]})}function g1({width:e,height:t}){const n=Math.max(2,Math.min(4,Math.floor(e/160)));return r.jsx("div",{style:{display:"flex",padding:`${t*.12}px ${e*.03}px`,gap:e*.05},children:Array.from({length:n},(o,s)=>r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[r.jsx(ge,{w:"60%",h:3,strong:!0}),r.jsx(ge,{w:"80%",h:2}),r.jsx(ge,{w:"70%",h:2}),r.jsx(ge,{w:"60%",h:2})]},s))})}function y1({width:e,height:t}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx(ge,{w:e*.3,h:4,strong:!0}),r.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),r.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[r.jsx(ge,{w:"90%"}),r.jsx(ge,{w:"70%"}),r.jsx(ge,{w:"80%"})]}),r.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[r.jsx(Ut,{w:70,h:26,radius:4}),r.jsx(Ut,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function v1({width:e,height:t}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),r.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[r.jsx(ge,{w:"70%",h:4,strong:!0}),r.jsx(ge,{w:"95%",h:2}),r.jsx(ge,{w:"85%",h:2}),r.jsx(ge,{w:"50%",h:2})]})]})}function x1({width:e,height:t,text:n}){if(n)return r.jsx("div",{style:{padding:4,fontSize:Math.min(14,t*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:n});const o=Math.max(2,Math.floor(t/18));return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[r.jsx(ge,{w:e*.6,h:5,strong:!0}),Array.from({length:o},(s,i)=>r.jsx(ge,{w:`${70+i*13%25}%`,h:2},i))]})}function w1({width:e,height:t}){return r.jsx("div",{style:{height:"100%",position:"relative"},children:r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,preserveAspectRatio:"none",fill:"none",children:[r.jsx("line",{x1:"0",y1:"0",x2:e,y2:t,stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("line",{x1:e,y1:"0",x2:"0",y2:t,stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("circle",{cx:e*.3,cy:t*.3,r:Math.min(e,t)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function b1({width:e,height:t}){const n=Math.max(2,Math.min(5,Math.floor(e/100))),o=Math.max(2,Math.min(6,Math.floor(t/32)));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:n},(s,i)=>r.jsx("div",{style:{flex:1,padding:"0 8px"},children:r.jsx(ge,{w:"70%",h:3,strong:!0})},i))}),Array.from({length:o},(s,i)=>r.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:n},(c,_)=>r.jsx("div",{style:{flex:1,padding:"0 8px"},children:r.jsx(ge,{w:`${50+(i*7+_*13)%40}%`,h:2})},_))},i))]})}function k1({width:e,height:t}){const n=Math.max(2,Math.floor(t/28));return r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:n},(o,s)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[r.jsx(Bn,{size:8}),r.jsx(ge,{w:`${55+s*17%35}%`,h:2})]},s))})}function j1({width:e,height:t,text:n}){return r.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,t/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:n?r.jsx("span",{style:{fontSize:Math.min(13,t*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:n}):r.jsx(ge,{w:Math.max(20,e*.5),h:3,strong:!0})})}function C1({width:e,height:t}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[r.jsx(ge,{w:Math.min(80,e*.3),h:2}),r.jsx("div",{style:{height:Math.min(36,t*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:r.jsx(ge,{w:"40%",h:2})})]})}function S1({width:e,height:t}){const n=Math.max(2,Math.min(5,Math.floor(t/56)));return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:t*.04,padding:8},children:[Array.from({length:n},(o,s)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[r.jsx(ge,{w:60+s*17%30,h:2}),r.jsx(Ut,{w:"100%",h:28,radius:4})]},s)),r.jsx(Ut,{w:Math.min(120,e*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function M1({width:e,height:t}){const n=Math.max(2,Math.min(4,Math.floor(e/120)));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:n},(o,s)=>r.jsx("div",{style:{padding:"8px 12px",borderBottom:s===0?"2px solid var(--agd-bar-strong)":"none"},children:r.jsx(ge,{w:60,h:3,strong:s===0})},s))}),r.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[r.jsx(ge,{w:"80%",h:2}),r.jsx(ge,{w:"65%",h:2}),r.jsx(ge,{w:"75%",h:2})]})]})}function N1({width:e,height:t}){const n=Math.min(e,t)/2;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[r.jsx("circle",{cx:e/2,cy:t/2,r:n-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),r.jsx("circle",{cx:e/2,cy:t*.38,r:n*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),r.jsx("path",{d:`M${e/2-n*.55} ${t*.78} C${e/2-n*.55} ${t*.55} ${e/2+n*.55} ${t*.55} ${e/2+n*.55} ${t*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function E1({width:e,height:t}){return r.jsx("div",{style:{height:"100%",borderRadius:t/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(ge,{w:Math.max(16,e*.5),h:2,strong:!0})})}function I1({width:e,height:t}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:t*.08},children:[r.jsx(ge,{w:e*.5,h:Math.max(5,t*.06),strong:!0}),r.jsx(ge,{w:e*.35})]})}function R1({width:e,height:t}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:t*.04,padding:e*.04},children:[r.jsx(ge,{w:e*.3,h:4,strong:!0}),r.jsx(ge,{w:e*.7}),r.jsx(ge,{w:e*.5}),r.jsxs("div",{style:{flex:1,display:"flex",gap:e*.03,marginTop:t*.06},children:[r.jsx(Ut,{w:"33%",h:"100%",radius:4}),r.jsx(Ut,{w:"33%",h:"100%",radius:4}),r.jsx(Ut,{w:"33%",h:"100%",radius:4})]})]})}function P1({width:e,height:t}){const n=Math.max(2,Math.min(4,Math.floor(e/140))),o=Math.max(1,Math.min(3,Math.floor(t/120)));return r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${o}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:n*o},(s,i)=>r.jsx(Ut,{w:"100%",h:"100%",radius:4},i))})}function L1({width:e,height:t}){const n=Math.max(2,Math.floor((t-32)/28));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:r.jsx(ge,{w:e*.5,h:3,strong:!0})}),r.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:n},(o,s)=>r.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:s===0?"var(--agd-fill)":"transparent"},children:r.jsx(ge,{w:`${50+s*17%35}%`,h:2,strong:s===0})},s))})]})}function T1({width:e,height:t}){const n=Math.min(e,t)/2;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:e-2,height:t-2,rx:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("circle",{cx:e-n,cy:t/2,r:n*.7,fill:"var(--agd-bar)"})]})}function A1({width:e,height:t}){const n=Math.min(t/2,20);return r.jsxs("div",{style:{height:"100%",borderRadius:n,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.6}px`,gap:6},children:[r.jsx(Bn,{size:Math.min(14,t*.4)}),r.jsx(ge,{w:"50%",h:2})]})}function $1({width:e,height:t}){return r.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[r.jsx(Bn,{size:Math.min(20,t*.5)}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(ge,{w:"60%",h:3,strong:!0}),r.jsx(ge,{w:"80%",h:2})]}),r.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function D1({width:e,height:t}){return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[r.jsx("rect",{x:"0",y:"0",width:e,height:t,rx:t/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),r.jsx("rect",{x:"1",y:"1",width:e*.65,height:t-2,rx:(t-2)/2,fill:"var(--agd-bar)"})]})}function O1({width:e,height:t}){const n=Math.max(3,Math.min(7,Math.floor(e/50))),o=e/(n*2);return r.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:n},(s,i)=>{const c=30+(i*37+17)%55;return r.jsx(Ut,{w:o,h:`${c}%`,radius:2},i)})})}function F1({width:e,height:t}){const n=Math.min(e,t)*.12;return r.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[r.jsx(Ut,{w:"100%",h:"100%",radius:4}),r.jsx("div",{style:{position:"absolute",width:n*2,height:n*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:0,height:0,borderLeft:`${n*.6}px solid var(--agd-bar-strong)`,borderTop:`${n*.4}px solid transparent`,borderBottom:`${n*.4}px solid transparent`,marginLeft:n*.15}})})]})}function B1({width:e,height:t}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(ge,{w:"60%",h:2})}),r.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function z1({width:e,height:t}){const n=Math.max(2,Math.min(4,Math.floor(e/80)));return r.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:n},(o,s)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[s>0&&r.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),r.jsx(ge,{w:40+s*13%20,h:2,strong:s===n-1})]},s))})}function W1({width:e,height:t}){const n=Math.max(3,Math.min(5,Math.floor(e/40))),o=Math.min(28,t*.8);return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:n},(s,i)=>r.jsx(Ut,{w:o,h:o,radius:4,style:i===1?{background:"var(--agd-bar)"}:void 0},i))})}function H1({width:e}){return r.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:r.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function U1({width:e,height:t}){const n=Math.max(2,Math.min(4,Math.floor(t/40)));return r.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:n},(o,s)=>r.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:s===0?2:1},children:[r.jsx(ge,{w:`${40+s*17%25}%`,h:3,strong:!0}),r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:s===0?"▼":"▶"})]},s))})}function V1({width:e,height:t}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[r.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[r.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),r.jsx(Ut,{w:"100%",h:"100%",radius:4}),r.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[r.jsx(Bn,{size:5}),r.jsx(Bn,{size:5}),r.jsx(Bn,{size:5})]})]})}function Y1({width:e,height:t}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:t*.04},children:[r.jsx(ge,{w:e*.4,h:3,strong:!0}),r.jsx(ge,{w:e*.3,h:6,strong:!0}),r.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(n,o)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[r.jsx(Bn,{size:5}),r.jsx(ge,{w:`${50+o*17%35}%`,h:2})]},o))}),r.jsx(Ut,{w:e*.7,h:Math.min(32,t*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function X1({width:e,height:t}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[r.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[r.jsx(ge,{w:"90%",h:2}),r.jsx(ge,{w:"75%",h:2}),r.jsx(ge,{w:"60%",h:2})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx(Bn,{size:20}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[r.jsx(ge,{w:60,h:3,strong:!0}),r.jsx(ge,{w:40,h:2})]})]})]})}function Q1({width:e,height:t}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:t*.08},children:[r.jsx(ge,{w:e*.5,h:Math.max(4,t*.05),strong:!0}),r.jsx(ge,{w:e*.35}),r.jsx(Ut,{w:Math.min(140,e*.25),h:Math.min(32,t*.15),radius:6,style:{marginTop:t*.04,background:"var(--agd-bar)"}})]})}function K1({width:e,height:t}){return r.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[r.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:r.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(ge,{w:"40%",h:3,strong:!0}),r.jsx(ge,{w:"70%",h:2})]})]})}function G1({width:e,height:t}){return r.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[r.jsx(ge,{w:e*.4,h:3,strong:!0}),r.jsx(Ut,{w:60,h:Math.min(24,t*.6),radius:4})]})}function q1({width:e,height:t}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:t*.06},children:[r.jsx(ge,{w:e*.5,h:2}),r.jsx(ge,{w:e*.4,h:Math.max(8,t*.18),strong:!0}),r.jsx(ge,{w:e*.3,h:2})]})}function J1({width:e,height:t}){const n=Math.max(3,Math.min(5,Math.floor(e/100))),o=Math.min(12,t*.35);return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:n},(s,i)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[r.jsx("div",{style:{width:o,height:o,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:i===0?"var(--agd-bar)":"transparent",flexShrink:0}}),i<n-1&&r.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},i))})}function Z1({width:e,height:t}){return r.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[r.jsx(ge,{w:Math.max(16,e*.5),h:2,strong:!0}),r.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function ev({width:e,height:t}){const o=Math.min(t*.7,e/7.5);return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:o*.2},children:Array.from({length:5},(s,i)=>r.jsx("svg",{width:o,height:o,viewBox:"0 0 16 16",fill:"none",children:r.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:i<3?"var(--agd-bar)":"none"})},i))})}function tv({width:e,height:t}){return r.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",style:{position:"absolute",inset:0},children:[r.jsx("line",{x1:0,y1:t*.3,x2:e,y2:t*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),r.jsx("line",{x1:0,y1:t*.6,x2:e,y2:t*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),r.jsx("line",{x1:e*.4,y1:0,x2:e*.6,y2:t,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),r.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:r.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[r.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),r.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function nv({width:e,height:t}){const n=Math.max(3,Math.min(5,Math.floor(t/60)));return r.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[r.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:n},(o,s)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[r.jsx(Bn,{size:8}),s<n-1&&r.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},s))}),r.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:n},(o,s)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx(ge,{w:`${35+s*13%25}%`,h:3,strong:!0}),r.jsx(ge,{w:`${50+s*17%30}%`,h:2})]},s))})]})}function rv({width:e,height:t}){return r.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:t*.06},children:[r.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),r.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),r.jsx(ge,{w:e*.4,h:2}),r.jsx(ge,{w:e*.25,h:2})]})}function ov({width:e,height:t}){const n=Math.max(3,Math.min(8,Math.floor(t/20)));return r.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[r.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[r.jsx(Bn,{size:6}),r.jsx(Bn,{size:6}),r.jsx(Bn,{size:6})]}),Array.from({length:n},(o,s)=>r.jsx("div",{style:{display:"flex",gap:6,paddingLeft:s>0&&s<n-1?12:0},children:r.jsx(ge,{w:`${25+s*23%50}%`,h:2,strong:s===0})},s))]})}function sv({width:e,height:t}){const s=Math.min((e-16)/7,(t-40)/6);return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),r.jsx(ge,{w:e*.3,h:3,strong:!0}),r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(i,c)=>r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:s*.6},children:r.jsx(ge,{w:s*.5,h:2})},`h${c}`)),Array.from({length:7*5},(i,c)=>r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:s},children:r.jsx("div",{style:{width:s*.6,height:s*.6,borderRadius:"50%",background:c===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:c===12?1:.3}})})},c))]})]})}function iv({width:e,height:t}){return r.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[r.jsx(Bn,{size:Math.min(32,t*.55)}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(ge,{w:"50%",h:3,strong:!0}),r.jsx(ge,{w:"75%",h:2})]}),r.jsx(ge,{w:30,h:2})]})}function av({width:e,height:t}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),r.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[r.jsx(ge,{w:"65%",h:4,strong:!0}),r.jsx(ge,{w:"40%",h:3}),r.jsx("div",{style:{flex:1}}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx(ge,{w:"30%",h:5,strong:!0}),r.jsx(Ut,{w:Math.min(70,e*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function lv({width:e,height:t}){const n=Math.min(48,t*.3);return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:t*.06},children:[r.jsx(Bn,{size:n}),r.jsx(ge,{w:e*.45,h:4,strong:!0}),r.jsx(ge,{w:e*.3,h:2}),r.jsxs("div",{style:{display:"flex",gap:e*.08,marginTop:t*.04},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[r.jsx(ge,{w:20,h:3,strong:!0}),r.jsx(ge,{w:28,h:2})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[r.jsx(ge,{w:20,h:3,strong:!0}),r.jsx(ge,{w:28,h:2})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[r.jsx(ge,{w:20,h:3,strong:!0}),r.jsx(ge,{w:28,h:2})]})]})]})}function cv({width:e,height:t}){const n=Math.max(e*.6,80),o=Math.max(3,Math.floor(t/40));return r.jsxs("div",{style:{height:"100%",display:"flex"},children:[r.jsx("div",{style:{width:e-n,background:"var(--agd-fill)",opacity:.3}}),r.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:e*.04},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:t*.06},children:[r.jsx(ge,{w:n*.4,h:4,strong:!0}),r.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:o},(s,i)=>r.jsx("div",{style:{padding:"6px 0"},children:r.jsx(ge,{w:`${50+i*17%35}%`,h:2,strong:i===0})},i))]})]})}function uv({width:e,height:t}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[r.jsx(ge,{w:"70%",h:3,strong:!0}),r.jsx(ge,{w:"90%",h:2}),r.jsx(ge,{w:"60%",h:2})]}),r.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function dv({width:e,height:t}){const n=Math.min(t*.7,e*.3);return r.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:e*.08},children:[r.jsx(Ut,{w:n,h:n,radius:n*.25}),r.jsx(ge,{w:e*.45,h:Math.max(4,t*.2),strong:!0})]})}function hv({width:e,height:t}){const n=Math.max(2,Math.min(5,Math.floor(t/56)));return r.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:n},(o,s)=>r.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:s===0?2:1},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),r.jsx(ge,{w:e*(.3+s*13%25/100),h:3,strong:!0})]}),r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:s===0?"▼":"▶"})]},s))})}function fv({width:e,height:t}){const n=Math.max(2,Math.min(4,Math.floor(e/120))),o=Math.max(1,Math.min(3,Math.floor(t/120)));return r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${o}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:n*o},(s,i)=>r.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:r.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[r.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),r.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},i))})}function _v({width:e,height:t}){const n=Math.min(e,t);return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[r.jsx("rect",{x:"1",y:(t-n+2)/2,width:n-2,height:n-2,rx:n*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),r.jsx("path",{d:`M${n*.25} ${t/2}l${n*.2} ${n*.2} ${n*.3}-${n*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function pv({width:e,height:t}){const n=Math.min(e,t)/2-1;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[r.jsx("circle",{cx:e/2,cy:t/2,r:n,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),r.jsx("circle",{cx:e/2,cy:t/2,r:n*.45,fill:"var(--agd-bar)"})]})}function mv({width:e,height:t}){const n=Math.max(2,t*.12),o=Math.min(t*.35,10),s=e*.55;return r.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[r.jsx("div",{style:{width:"100%",height:n,borderRadius:n/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:r.jsx("div",{style:{width:s,height:"100%",borderRadius:n/2,background:"var(--agd-bar)"}})}),r.jsx("div",{style:{position:"absolute",left:s-o,width:o*2,height:o*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function gv({width:e,height:t}){const n=Math.min(36,t*.15),o=7,s=4,i=Math.min((e-16)/o,(t-n-40)/(s+1));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[r.jsxs("div",{style:{height:n,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[r.jsx(ge,{w:"40%",h:2}),r.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),r.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[r.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),r.jsx(ge,{w:e*.25,h:2,strong:!0}),r.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${o}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:o*s},(c,_)=>r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:i},children:r.jsx("div",{style:{width:i*.5,height:i*.5,borderRadius:"50%",background:_===10?"var(--agd-bar)":"transparent"},children:r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:_===10?1:.25}})})})},_))})]})]})}function yv({width:e,height:t}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:t*.08,padding:4},children:[r.jsx("div",{style:{width:"100%",height:t*.2,borderRadius:4,background:"var(--agd-fill)"}}),r.jsx("div",{style:{width:"70%",height:Math.max(6,t*.1),borderRadius:3,background:"var(--agd-fill)"}}),r.jsx("div",{style:{width:"90%",height:Math.max(4,t*.06),borderRadius:3,background:"var(--agd-fill)"}}),r.jsx("div",{style:{width:"50%",height:Math.max(4,t*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function vv({width:e,height:t}){return r.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:r.jsxs("div",{style:{height:"100%",flex:1,borderRadius:t/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${t*.3}px`,gap:4},children:[r.jsx(ge,{w:"60%",h:2,strong:!0}),r.jsx("div",{style:{width:Math.max(6,t*.3),height:Math.max(6,t*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function xv({width:e,height:t}){const n=Math.min(e,t);return r.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:r.jsx("path",{d:`M${e/2} ${(t-n)/2+n*.1}l${n*.12} ${n*.25} ${n*.28} ${n*.04}-${n*.2} ${n*.2} ${n*.05} ${n*.28}-${n*.25}-${n*.12}-${n*.25} ${n*.12} ${n*.05}-${n*.28}-${n*.2}-${n*.2} ${n*.28}-${n*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function wv({width:e,height:t}){const n=Math.min(e,t)/2-2;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[r.jsx("circle",{cx:e/2,cy:t/2,r:n,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),r.jsx("path",{d:`M${e/2} ${t/2-n}a${n} ${n} 0 0 1 ${n} ${n}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function bv({width:e,height:t}){const n=Math.min(36,t*.25,e*.12),o=Math.max(1,Math.min(3,Math.floor(t/80)));return r.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:o},(s,i)=>r.jsxs("div",{style:{display:"flex",gap:e*.04,alignItems:"flex-start"},children:[r.jsx(Ut,{w:n,h:n,radius:n*.25}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[r.jsx(ge,{w:`${40+i*13%20}%`,h:3,strong:!0}),r.jsx(ge,{w:`${60+i*17%25}%`,h:2})]})]},i))})}function kv({width:e,height:t}){const n=Math.max(2,Math.min(4,Math.floor(e/120))),o=Math.min(36,t*.25);return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:t*.06,padding:t*.06},children:[r.jsx(ge,{w:e*.3,h:4,strong:!0}),r.jsx("div",{style:{display:"flex",gap:e*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:n},(s,i)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[r.jsx(Bn,{size:o}),r.jsx(ge,{w:e*.12,h:3,strong:!0}),r.jsx(ge,{w:e*.08,h:2})]},i))})]})}function jv({width:e,height:t}){const n=Math.max(2,Math.min(3,Math.floor(t/80)));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:e*.06,gap:t*.04},children:[r.jsx(ge,{w:e*.5,h:Math.max(5,t*.04),strong:!0}),r.jsx(ge,{w:e*.35,h:2}),r.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:t*.03,marginTop:t*.04},children:Array.from({length:n},(o,s)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx(ge,{w:Math.min(60,e*.2),h:2}),r.jsx(Ut,{w:"100%",h:Math.min(32,t*.1),radius:4})]},s))}),r.jsx(Ut,{w:"100%",h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.03,background:"var(--agd-bar)"}}),r.jsx(ge,{w:e*.4,h:2})]})}function Cv({width:e,height:t}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:e*.04,gap:t*.03},children:[r.jsx(ge,{w:e*.4,h:4,strong:!0}),r.jsx(ge,{w:e*.6,h:2}),r.jsxs("div",{style:{display:"flex",gap:6,marginTop:t*.03},children:[r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(ge,{w:50,h:2}),r.jsx(Ut,{w:"100%",h:Math.min(28,t*.1),radius:4})]}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(ge,{w:40,h:2}),r.jsx(Ut,{w:"100%",h:Math.min(28,t*.1),radius:4})]})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx(ge,{w:50,h:2}),r.jsx(Ut,{w:"100%",h:Math.min(28,t*.1),radius:4})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[r.jsx(ge,{w:60,h:2}),r.jsx(Ut,{w:"100%",h:"100%",radius:4})]}),r.jsx(Ut,{w:Math.min(120,e*.3),h:Math.min(30,t*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var Sv={navigation:_1,hero:p1,sidebar:m1,footer:g1,modal:y1,card:v1,text:x1,image:w1,table:b1,list:k1,button:j1,input:C1,form:S1,tabs:M1,avatar:N1,badge:E1,header:I1,section:R1,grid:P1,dropdown:L1,toggle:T1,search:A1,toast:$1,progress:D1,chart:O1,video:F1,tooltip:B1,breadcrumb:z1,pagination:W1,divider:H1,accordion:U1,carousel:V1,pricing:Y1,testimonial:X1,cta:Q1,alert:K1,banner:G1,stat:q1,stepper:J1,tag:Z1,rating:ev,map:tv,timeline:nv,fileUpload:rv,codeBlock:ov,calendar:sv,notification:iv,productCard:av,profile:lv,drawer:cv,popover:uv,logo:dv,faq:hv,gallery:fv,checkbox:_v,radio:pv,slider:mv,datePicker:gv,skeleton:yv,chip:vv,icon:xv,spinner:wv,feature:bv,team:kv,login:jv,contact:Cv};function Mv({type:e,width:t,height:n,text:o}){const s=Sv[e];return s?r.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:r.jsx(s,{width:t,height:n,text:o})}):r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:e})})}var Nv=`svg[fill=none] {
  fill: none !important;
}

.styles-module__overlayExiting___iEmYr {
  opacity: 0 !important;
  transition: opacity 0.25s ease !important;
  pointer-events: none !important;
}

.styles-module__overlay___aWh-q {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: auto;
  cursor: default;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
  --agd-stroke: rgba(59, 130, 246, 0.35);
  --agd-fill: rgba(59, 130, 246, 0.06);
  --agd-bar: rgba(59, 130, 246, 0.18);
  --agd-bar-strong: rgba(59, 130, 246, 0.28);
  --agd-text-3: rgba(255, 255, 255, 0.6);
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q.styles-module__light___ORIft {
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) {
  --agd-surface: #141414;
}
.styles-module__overlay___aWh-q.styles-module__wireframe___itvQU {
  --agd-stroke: rgba(249, 115, 22, 0.35);
  --agd-fill: rgba(249, 115, 22, 0.06);
  --agd-bar: rgba(249, 115, 22, 0.18);
  --agd-bar-strong: rgba(249, 115, 22, 0.28);
}
.styles-module__overlay___aWh-q.styles-module__placing___45yD8 {
  cursor: crosshair;
}
.styles-module__overlay___aWh-q.styles-module__passthrough___xaFeE {
  pointer-events: none;
}

.styles-module__blankCanvas___t2Eue {
  position: fixed;
  inset: 0;
  z-index: 99994;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__visible___OKKqX {
  opacity: var(--canvas-opacity, 1);
  pointer-events: auto;
}
.styles-module__blankCanvas___t2Eue::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: 12px 12px;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__gridActive___OZ-cf::after {
  opacity: 1;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.22) 1px, transparent 1px);
}

.styles-module__paletteHeader___-Q5gQ {
  padding: 0 1rem 0.375rem;
}

.styles-module__paletteHeaderTitle___oHqZC {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.0094em;
}
.styles-module__light___ORIft .styles-module__paletteHeaderTitle___oHqZC {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__paletteHeaderDesc___6i74T {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T {
  color: rgba(0, 0, 0, 0.45);
}
.styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__paletteHeaderDesc___6i74T a:hover {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__wireframePurposeWrap___To-tS {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__wireframePurposeWrap___To-tS.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__wireframePurposeInner___Lrahs {
  overflow: hidden;
}

.styles-module__wireframePurposeInput___7EtBN {
  display: block;
  width: calc(100% - 2rem);
  margin: 0.25rem 1rem 0.375rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.8125rem;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN {
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.1);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__canvasToggle___-QqSy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin: 0.25rem 1rem 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.styles-module__canvasToggle___-QqSy:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
}
.styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy {
  border-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy:hover {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}

.styles-module__canvasToggleIcon___7pJ82 {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__light___ORIft .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__canvasToggleLabel___OanpY {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -0.0094em;
}
.styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__canvasToggleLabel___OanpY {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}

.styles-module__canvasPurposeWrap___hj6zk {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__canvasPurposeWrap___hj6zk.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__canvasPurposeInner___VWiyu {
  overflow: hidden;
}

.styles-module__canvasPurposeToggle___byDH2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin: 0.375rem 1rem 0.375rem 1.1875rem;
}
.styles-module__canvasPurposeToggle___byDH2 input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.styles-module__canvasPurposeCheck___xqd7l {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.styles-module__canvasPurposeCheck___xqd7l svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
.styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH svg {
  color: #fff;
}

.styles-module__canvasPurposeLabel___Zu-tD {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.styles-module__light___ORIft .styles-module__canvasPurposeLabel___Zu-tD {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__canvasPurposeHelp___jijwR {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
}
.styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(255, 255, 255, 0.2);
  transform: translateY(2px);
  transition: color 0.15s ease;
}
.styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__placement___zcxv8 {
  position: absolute;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.08);
  cursor: grab;
  transition: box-shadow 0.15s, border-color 0.15s, opacity 0.15s ease, transform 0.15s ease;
  user-select: none;
  pointer-events: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  animation: styles-module__placementEnter___TdRhf 0.25s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.styles-module__placement___zcxv8:active {
  cursor: grabbing;
}
.styles-module__placement___zcxv8:hover {
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #3c82f7;
  border-style: solid;
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8 {
  border-color: rgba(249, 115, 22, 0.4);
  background: rgba(249, 115, 22, 0.08);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8:hover {
  border-color: rgba(249, 115, 22, 0.5);
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__placement___zcxv8.styles-module__dragging___le6KZ {
  opacity: 0.85;
  z-index: 50;
}
.styles-module__placement___zcxv8.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__placementContent___f64A4 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.styles-module__placementLabel___0KvWl {
  position: absolute;
  top: -18px;
  left: 0;
  font-size: 10px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.7);
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.5);
}
.styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__placementLabel___0KvWl {
  color: rgba(249, 115, 22, 0.7);
}
.styles-module__wireframe___itvQU .styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #f97316;
}

.styles-module__placementAnnotation___78pTr {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__placementAnnotation___78pTr.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__sectionAnnotation___aUIs0 {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(59, 130, 246, 0.6);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__sectionAnnotation___aUIs0.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__handle___Ikbxm {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1.5px solid #3c82f7;
  border-radius: 2px;
  z-index: 12;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: scale(0.3);
  pointer-events: none;
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.styles-module__placement___zcxv8:hover .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:hover .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:hover .styles-module__handle___Ikbxm, .styles-module__placement___zcxv8:active .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:active .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:active .styles-module__handle___Ikbxm, .styles-module__selected___6yrp6 .styles-module__handle___Ikbxm {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__sectionOutline___s0hy- .styles-module__handle___Ikbxm {
  border-color: inherit;
}
.styles-module__wireframe___itvQU .styles-module__handle___Ikbxm {
  border-color: #f97316;
}

.styles-module__handleNw___4TMIj {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}

.styles-module__handleNe___mnsTh {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}

.styles-module__handleSe___oSFnk {
  bottom: -4px;
  right: -4px;
  cursor: se-resize;
}

.styles-module__handleSw___pi--Z {
  bottom: -4px;
  left: -4px;
  cursor: sw-resize;
}

.styles-module__handleN___aBA-Q, .styles-module__handleE___0hM5u, .styles-module__handleS___JjDRv, .styles-module__handleW___ERWGQ {
  opacity: 0 !important;
  pointer-events: none !important;
}

.styles-module__edgeHandle___XxXdT {
  position: absolute;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__edgeHandle___XxXdT::after {
  content: "";
  position: absolute;
  border-radius: 4px;
  background: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__edgeHandle___XxXdT::after {
  background: #f97316;
}
.styles-module__edgeHandle___XxXdT::after {
  opacity: 0;
  transition: opacity 0.1s ease, transform 0.1s ease;
  transform: scale(0.8);
}
.styles-module__edgeHandle___XxXdT:hover::after {
  opacity: 0.85;
  transform: scale(1);
}
.styles-module__edgeHandle___XxXdT svg {
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.1s ease;
  filter: drop-shadow(0 0 2px var(--agd-surface));
}
.styles-module__edgeHandle___XxXdT:hover svg {
  opacity: 1;
}

.styles-module__edgeN___-JJDj, .styles-module__edgeS___66lMX {
  left: 12px;
  right: 12px;
  height: 12px;
  cursor: n-resize;
}
.styles-module__edgeN___-JJDj::after, .styles-module__edgeS___66lMX::after {
  width: 24px;
  height: 4px;
}

.styles-module__edgeN___-JJDj {
  top: -6px;
}

.styles-module__edgeS___66lMX {
  bottom: -6px;
  cursor: s-resize;
}

.styles-module__edgeE___1bGDa, .styles-module__edgeW___lHQNo {
  top: 12px;
  bottom: 12px;
  width: 12px;
  cursor: e-resize;
}
.styles-module__edgeE___1bGDa::after, .styles-module__edgeW___lHQNo::after {
  width: 4px;
  height: 24px;
}

.styles-module__edgeE___1bGDa {
  right: -6px;
}

.styles-module__edgeW___lHQNo {
  left: -6px;
  cursor: w-resize;
}

.styles-module__deleteButton___LkGCb {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  z-index: 15;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.12s ease, color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}
.styles-module__placement___zcxv8:hover .styles-module__deleteButton___LkGCb, .styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-:hover .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO:hover .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
  box-shadow: 0 1px 4px rgba(239, 68, 68, 0.3);
  transform: scale(1.1);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb {
  background: rgba(40, 40, 40, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}

.styles-module__drawBox___BrVAa {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 2px solid #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.15);
}

.styles-module__selectBox___Iu8kB {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 1px dashed #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  border-radius: 2px;
}

.styles-module__sizeIndicator___7zJ4y {
  position: fixed;
  pointer-events: none;
  z-index: 100001;
  font-size: 10px;
  color: #fff;
  background: #3c82f7;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.styles-module__guideLine___DUQY2 {
  pointer-events: none;
  z-index: 100001;
  background: #f0f;
  opacity: 0.5;
}

.styles-module__dragPreview___onPbU {
  position: fixed;
  z-index: 100002;
  pointer-events: none;
  border: 1.5px dashed #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  color: #3c82f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
  transition: width 0.08s ease, height 0.08s ease, opacity 0.08s ease;
}

.styles-module__dragPreviewWireframe___jsg0G {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.15);
}

.styles-module__palette___C7iSH {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  width: 256px;
  overflow: hidden;
  background: #1c1c1c;
  border: none;
  border-radius: 1rem;
  padding: 13px 0 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 100001;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  cursor: default;
  opacity: 0;
  filter: blur(5px);
}
.styles-module__palette___C7iSH .styles-module__paletteItem___6TlnA,
.styles-module__palette___C7iSH .styles-module__paletteItemLabel___6ncO4,
.styles-module__palette___C7iSH .styles-module__paletteSectionTitle___PqnjX,
.styles-module__palette___C7iSH .styles-module__paletteFooter___QYnAG {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__palette___C7iSH.styles-module__enter___6LYk5 {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__palette___C7iSH.styles-module__exit___iSGRw {
  opacity: 0;
  transform: translateY(6px);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
.styles-module__palette___C7iSH.styles-module__light___ORIft {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.styles-module__paletteSection___V8DEA {
  padding: 0 1rem;
}
.styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteSectionTitle___PqnjX {
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  padding: 0 0 3px 3px;
}
.styles-module__light___ORIft .styles-module__paletteSectionTitle___PqnjX {
  color: rgba(0, 0, 0, 0.4);
}

.styles-module__paletteItem___6TlnA {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.25rem;
  margin-bottom: 1px;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  border: 1px solid transparent;
  user-select: none;
  min-height: 24px;
}
.styles-module__paletteItem___6TlnA:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}

.styles-module__paletteItemIcon___0NPQK {
  width: 20px;
  height: 16px;
  border-radius: 2px;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.45);
}
.styles-module__paletteItemIcon___0NPQK svg {
  display: block;
  width: 20px;
  height: 16px;
}
.styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__paletteItemLabel___6ncO4 {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.0094em;
  line-height: 1;
  min-width: 0;
}
.styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}
.styles-module__light___ORIft .styles-module__paletteItemLabel___6ncO4 {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}

.styles-module__placeScroll___7sClM {
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0.25rem;
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px);
}
.styles-module__placeScroll___7sClM.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar {
  width: 3px;
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 2px;
}
.styles-module__light___ORIft .styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}

.styles-module__paletteFooterWrap___71-fI {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__paletteFooterWrap___71-fI.styles-module__footerHidden___fJUik {
  grid-template-rows: 0fr;
}

.styles-module__paletteFooterInnerContent___VC26h {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__footerHidden___fJUik .styles-module__paletteFooterInnerContent___VC26h {
  opacity: 0;
  transform: translateY(4px);
}

.styles-module__paletteFooterInner___dfylY {
  overflow: hidden;
}

.styles-module__paletteFooter___QYnAG {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  padding: 0 1rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteFooter___QYnAG {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteFooterCount___D3Fia {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterCount___D3Fia {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__paletteFooterClear___ybBoa {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.15s ease;
}
.styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__paletteFooterActions___fLzv8 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.styles-module__rollingWrap___S75jM {
  display: inline-block;
  overflow: hidden;
  height: 1.15em;
  position: relative;
  vertical-align: bottom;
}

.styles-module__rollingNum___1RKDx {
  position: absolute;
  left: 0;
  top: 0;
}

.styles-module__exitUp___AFDRW {
  animation: styles-module__numExitUp___FRQqx 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterUp___CPlXb {
  animation: styles-module__numEnterUp___2Yd-w 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__exitDown___-1yAy {
  animation: styles-module__numExitDown___xm5by 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterDown___DDuFR {
  animation: styles-module__numEnterDown___hpxBk 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

@keyframes styles-module__numExitUp___FRQqx {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterUp___2Yd-w {
  from {
    transform: translateY(110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes styles-module__numExitDown___xm5by {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterDown___hpxBk {
  from {
    transform: translateY(-110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.styles-module__rearrangeOverlay___-3R3t {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: none;
  cursor: default;
  user-select: none;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
}

.styles-module__hoverHighlight___8eT-v {
  position: fixed;
  pointer-events: none;
  z-index: 99994;
  border: 2px dashed rgba(59, 130, 246, 0.5);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.06);
  animation: styles-module__highlightFadeIn___Lg7KY 0.12s ease;
}

.styles-module__sectionOutline___s0hy- {
  position: fixed;
  border: 2px solid;
  border-radius: 4px;
  cursor: grab;
}
.styles-module__sectionOutline___s0hy-:active {
  cursor: grabbing;
}
.styles-module__sectionOutline___s0hy- {
  transition: box-shadow 0.15s, border-color 0.3s, background-color 0.3s, border-style 0s;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}
.styles-module__sectionOutline___s0hy-:hover {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 {
  border-style: solid;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) {
  border: 1.5px dashed rgba(150, 150, 150, 0.35);
  background-color: transparent !important;
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover {
  border-color: rgba(150, 150, 150, 0.6);
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionLabel___F80HQ {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionLabel___F80HQ {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__movedBadge___s8z-q,
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionDimensions___RcJSL {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionDimensions___RcJSL {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__sectionLabel___F80HQ {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  max-width: calc(100% - 8px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__movedBadge___s8z-q {
  position: absolute;
  bottom: 22px;
  right: 4px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  background: #22c55e;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__movedBadge___s8z-q.styles-module__badgeVisible___npbdS {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s cubic-bezier(0.34, 1.2, 0.64, 1), transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.styles-module__resizedBadge___u51V8 {
  background: #3c82f7;
  bottom: 40px;
}

.styles-module__sectionDimensions___RcJSL {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.styles-module__light___ORIft .styles-module__sectionDimensions___RcJSL {
  color: rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.7);
}

.styles-module__wireframeNotice___4GJyB {
  position: fixed;
  bottom: 16px;
  left: 24px;
  z-index: 99995;
  font-size: 9.5px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: auto;
  animation: styles-module__overlayFadeIn___aECVy 0.3s ease;
  line-height: 1.5;
  max-width: 280px;
}

.styles-module__wireframeOpacityRow___CJXzi {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.styles-module__wireframeOpacityLabel___afkfT {
  font-size: 9px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.32);
  letter-spacing: 0.02em;
  white-space: nowrap;
  user-select: none;
}

.styles-module__wireframeOpacitySlider___YcoEs {
  -webkit-appearance: none;
  appearance: none;
  width: 56px;
  height: 4px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs:hover {
  background: rgba(0, 0, 0, 0.13);
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  cursor: pointer;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb:hover {
  background: rgb(224.4209205021, 95.3548117155, 5.7790794979);
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-thumb {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  border: none;
  cursor: pointer;
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-track {
  background: rgba(0, 0, 0, 0.08);
  height: 4px;
  border-radius: 2px;
}

.styles-module__wireframeNoticeTitleRow___PJqyG {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2px;
}

.styles-module__wireframeNoticeTitle___okr08 {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
}

.styles-module__wireframeNoticeDivider___PNKQ6 {
  width: 1px;
  height: 8px;
  background: rgba(0, 0, 0, 0.12);
  margin: 0 8px;
  flex-shrink: 0;
}

.styles-module__wireframeStartOver___YFk-I {
  font-size: 9.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  text-decoration: none;
  transition: color 0.12s ease;
  white-space: nowrap;
}
.styles-module__wireframeStartOver___YFk-I:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__ghostOutline___po-kO {
  position: fixed;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.04);
  cursor: grab;
  opacity: 0.5;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__ghostEnter___EC3Mb 0.25s ease;
  transition: box-shadow 0.15s, border-color 0.3s, opacity 0.25s;
}
.styles-module__ghostOutline___po-kO:active {
  cursor: grabbing;
}
.styles-module__ghostOutline___po-kO:hover {
  opacity: 0.7;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 {
  opacity: 1;
  border-style: solid;
  border-width: 2px;
  border-color: #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__ghostOutline___po-kO.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__ghostBadge___tsQUK {
  position: absolute;
  bottom: calc(100% + 4px);
  left: -1px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.9);
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.2;
  animation: styles-module__badgeSlideIn___typJ7 0.2s ease both;
}

@keyframes styles-module__badgeSlideIn___typJ7 {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__ghostBadgeExtra___6CVoD {
  display: inline;
  animation: styles-module__badgeExtraIn___i4W8F 0.2s ease both;
}

@keyframes styles-module__badgeExtraIn___i4W8F {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.styles-module__originalOutline___Y6DD1 {
  position: fixed;
  border: 1.5px dashed rgba(150, 150, 150, 0.3);
  border-radius: 4px;
  background: transparent;
  pointer-events: none;
  user-select: none;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}

.styles-module__originalLabel___HqI9g {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(150, 150, 150, 0.5);
  padding: 1px 6px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: rgba(150, 150, 150, 0.08);
}

.styles-module__connectorSvg___Lovld {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__connectorLine___XeWh- {
  transition: opacity 0.2s ease;
  animation: styles-module__connectorDraw___8sK5I 0.3s ease both;
}

.styles-module__connectorDot___yvf7C {
  transform-box: fill-box;
  transform-origin: center;
  animation: styles-module__connectorDotIn___NwTUq 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
}

@keyframes styles-module__connectorDraw___8sK5I {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__connectorDotIn___NwTUq {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.styles-module__connectorExiting___2lLOs {
  animation: styles-module__connectorOut___5QoPl 0.2s ease forwards;
}
.styles-module__connectorExiting___2lLOs .styles-module__connectorDot___yvf7C {
  animation: styles-module__connectorDotOut___FEq7e 0.2s ease forwards;
}

@keyframes styles-module__connectorOut___5QoPl {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__connectorDotOut___FEq7e {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes styles-module__placementEnter___TdRhf {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__sectionEnter___-8BXT {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__highlightFadeIn___Lg7KY {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__overlayFadeIn___aECVy {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__ghostEnter___EC3Mb {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 0.6;
    transform: scale(1);
  }
}`,Ev={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-design-mode-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(e)),e.textContent=Nv}var he=Ev,Qs=24,Sl=5;function Zf(e,t,n,o,s){let i=1/0,c=1/0;const _=e.x,f=e.x+e.width,w=e.x+e.width/2,j=e.y,b=e.y+e.height,v=e.y+e.height/2,E=!o,I=E?[_,f,w]:[...o.left?[_]:[],...o.right?[f]:[]],y=E?[j,b,v]:[...o.top?[j]:[],...o.bottom?[b]:[]],Z=[];for(const we of t)n.has(we.id)||Z.push(we);s&&Z.push(...s);for(const we of Z){const me=we.x,nt=we.x+we.width,rt=we.x+we.width/2,ft=we.y,Re=we.y+we.height,yt=we.y+we.height/2;for(const G of I)for(const pe of[me,nt,rt]){const Ee=pe-G;Math.abs(Ee)<Sl&&Math.abs(Ee)<Math.abs(i)&&(i=Ee)}for(const G of y)for(const pe of[ft,Re,yt]){const Ee=pe-G;Math.abs(Ee)<Sl&&Math.abs(Ee)<Math.abs(c)&&(c=Ee)}}const C=Math.abs(i)<Sl?i:0,L=Math.abs(c)<Sl?c:0,O=[],A=new Set,q=_+C,ae=f+C,J=w+C,ce=j+L,se=b+L,te=v+L;for(const we of Z){const me=we.x,nt=we.x+we.width,rt=we.x+we.width/2,ft=we.y,Re=we.y+we.height,yt=we.y+we.height/2;for(const G of[me,rt,nt])for(const pe of[q,J,ae])if(Math.abs(pe-G)<.5){const Ee=`x:${Math.round(G)}`;A.has(Ee)||(A.add(Ee),O.push({axis:"x",pos:G}))}for(const G of[ft,yt,Re])for(const pe of[ce,te,se])if(Math.abs(pe-G)<.5){const Ee=`y:${Math.round(G)}`;A.has(Ee)||(A.add(Ee),O.push({axis:"y",pos:G}))}}return{dx:C,dy:L,guides:O}}function e_(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function Iv({placements:e,onChange:t,activeComponent:n,onActiveComponentChange:o,isDarkMode:s,exiting:i,onInteractionChange:c,className:_,passthrough:f,extraSnapRects:w,onSelectionChange:j,deselectSignal:b,onDragMove:v,onDragEnd:E,clearSignal:I,wireframe:y}){const[Z,C]=N.useState(new Set),[L,O]=N.useState(null),[A,q]=N.useState(null),[ae,J]=N.useState(null),[ce,se]=N.useState([]),[te,we]=N.useState(null),[me,nt]=N.useState(!1),rt=N.useRef(!1),[ft,Re]=N.useState(new Set),yt=N.useRef(new Map),G=N.useRef(null),pe=N.useRef(null),Ee=N.useRef(e);Ee.current=e;const Ge=N.useRef(j);Ge.current=j;const qe=N.useRef(v);qe.current=v;const St=N.useRef(E);St.current=E;const $t=N.useRef(b);N.useEffect(()=>{b!==$t.current&&($t.current=b,C(new Set))},[b]);const Qe=N.useRef(I);N.useEffect(()=>{if(I!==void 0&&I!==Qe.current){Qe.current=I;const W=new Set(Ee.current.map(ee=>ee.id));W.size>0&&(Re(W),C(new Set),pe.current=null,_t(()=>{t([]),Re(new Set)},180))}},[I,t]),N.useEffect(()=>{const W=ee=>{const Fe=ee.target;if(!(Fe.tagName==="INPUT"||Fe.tagName==="TEXTAREA"||Fe.isContentEditable)){if((ee.key==="Backspace"||ee.key==="Delete")&&Z.size>0){ee.preventDefault();const Ne=new Set(Z);Re(Ne),C(new Set),_t(()=>{t(Ee.current.filter(Pe=>!Ne.has(Pe.id))),Re(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(ee.key)&&Z.size>0){ee.preventDefault();const Ne=ee.shiftKey?20:1,Pe=ee.key==="ArrowLeft"?-Ne:ee.key==="ArrowRight"?Ne:0,$e=ee.key==="ArrowUp"?-Ne:ee.key==="ArrowDown"?Ne:0;t(e.map(Ze=>Z.has(Ze.id)?{...Ze,x:Math.max(0,Ze.x+Pe),y:Math.max(0,Ze.y+$e)}:Ze));return}if(ee.key==="Escape"){n?o(null):Z.size>0&&C(new Set);return}}};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[Z,n,e,t,o]);const ut=N.useCallback(W=>{if(W.button!==0||f||W.target.closest(`.${he.placement}`))return;W.preventDefault(),W.stopPropagation();const Fe=window.scrollY,De=W.clientX,Ne=W.clientY;if(n){pe.current="place",c==null||c(!0);let Pe=!1,$e=De,Ze=Ne;const g=d=>{$e=d.clientX,Ze=d.clientY;const m=Math.abs($e-De),k=Math.abs(Ze-Ne);if((m>5||k>5)&&(Pe=!0),Pe){const R=Math.min(De,$e),$=Math.min(Ne,Ze),re=Math.abs($e-De),ue=Math.abs(Ze-Ne);O({x:R,y:$,w:re,h:ue}),J({x:d.clientX+12,y:d.clientY+12,text:`${Math.round(re)} × ${Math.round(ue)}`})}},u=d=>{window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",u),O(null),J(null),pe.current=null,c==null||c(!1);const m=Je[n];let k,R,$,re;Pe?(k=Math.min(De,$e),R=Math.min(Ne,Ze)+Fe,$=Math.max(Qs,Math.abs($e-De)),re=Math.max(Qs,Math.abs(Ze-Ne))):($=m.width,re=m.height,k=De-$/2,R=Ne+Fe-re/2),k=Math.max(0,k),R=Math.max(0,R);const ue={id:e_(),type:n,x:k,y:R,width:$,height:re,scrollY:Fe,timestamp:Date.now()},Q=[...e,ue];t(Q),C(new Set([ue.id])),o(null)};window.addEventListener("mousemove",g),window.addEventListener("mouseup",u)}else{W.shiftKey||C(new Set),pe.current="select";let Pe=!1;const $e=g=>{const u=Math.abs(g.clientX-De),d=Math.abs(g.clientY-Ne);if((u>4||d>4)&&(Pe=!0),Pe){const m=Math.min(De,g.clientX),k=Math.min(Ne,g.clientY);q({x:m,y:k,w:Math.abs(g.clientX-De),h:Math.abs(g.clientY-Ne)})}},Ze=g=>{if(window.removeEventListener("mousemove",$e),window.removeEventListener("mouseup",Ze),pe.current=null,Pe){const u=Math.min(De,g.clientX),d=Math.min(Ne,g.clientY)+Fe,m=Math.abs(g.clientX-De),k=Math.abs(g.clientY-Ne),R=new Set(W.shiftKey?Z:new Set);for(const $ of e)$.y-Fe,$.x+$.width>u&&$.x<u+m&&$.y+$.height>d&&$.y<d+k&&R.add($.id);C(R)}q(null)};window.addEventListener("mousemove",$e),window.addEventListener("mouseup",Ze)}},[n,f,e,t,Z]),Xt=N.useCallback((W,ee)=>{var ue;if(W.button!==0)return;const Fe=W.target;if(Fe.closest(`.${he.handle}`)||Fe.closest(`.${he.deleteButton}`))return;W.preventDefault(),W.stopPropagation();let De;W.shiftKey?(De=new Set(Z),De.has(ee)?De.delete(ee):De.add(ee)):Z.has(ee)?De=new Set(Z):De=new Set([ee]),C(De),(De.size!==Z.size||[...De].some(Q=>!Z.has(Q)))&&((ue=Ge.current)==null||ue.call(Ge,De,W.shiftKey));const Pe=W.clientX,$e=W.clientY,Ze=new Map;for(const Q of e)De.has(Q.id)&&Ze.set(Q.id,{x:Q.x,y:Q.y});pe.current="move",c==null||c(!0);let g=!1,u=!1,d=e,m=0,k=0;const R=new Map;for(const Q of e)Ze.has(Q.id)&&R.set(Q.id,{w:Q.width,h:Q.height});const $=Q=>{var Ke;const je=Q.clientX-Pe,be=Q.clientY-$e;if((Math.abs(je)>2||Math.abs(be)>2)&&(g=!0),!g)return;if(Q.altKey&&!u){u=!0;const Ce=[];for(const bt of e)Ze.has(bt.id)&&Ce.push({...bt,id:e_(),timestamp:Date.now()});d=[...e,...Ce]}let it=1/0,ze=1/0,Le=-1/0,pt=-1/0;for(const[Ce,bt]of Ze){const Wt=R.get(Ce);Wt&&(it=Math.min(it,bt.x+je),ze=Math.min(ze,bt.y+be),Le=Math.max(Le,bt.x+je+Wt.w),pt=Math.max(pt,bt.y+be+Wt.h))}const vt={x:it,y:ze,width:Le-it,height:pt-ze},{dx:Ct,dy:Me,guides:st}=Zf(vt,d,new Set(Ze.keys()),void 0,w);se(st);const ct=je+Ct,at=be+Me;m=ct,k=at,t(d.map(Ce=>{const bt=Ze.get(Ce.id);return bt?{...Ce,x:Math.max(0,bt.x+ct),y:Math.max(0,bt.y+at)}:Ce})),(Ke=qe.current)==null||Ke.call(qe,ct,at)},re=()=>{var Q;window.removeEventListener("mousemove",$),window.removeEventListener("mouseup",re),pe.current=null,c==null||c(!1),se([]),(Q=St.current)==null||Q.call(St,m,k,g)};window.addEventListener("mousemove",$),window.addEventListener("mouseup",re)},[Z,e,t,c]),Mt=N.useCallback((W,ee,Fe)=>{W.preventDefault(),W.stopPropagation();const De=e.find(R=>R.id===ee);if(!De)return;C(new Set([ee])),pe.current="resize",c==null||c(!0);const Ne=W.clientX,Pe=W.clientY,$e=De.width,Ze=De.height,g=De.x,u=De.y,d={left:Fe.includes("w"),right:Fe.includes("e"),top:Fe.includes("n"),bottom:Fe.includes("s")},m=R=>{const $=R.clientX-Ne,re=R.clientY-Pe;let ue=$e,Q=Ze,je=g,be=u;Fe.includes("e")&&(ue=Math.max(Qs,$e+$)),Fe.includes("w")&&(ue=Math.max(Qs,$e-$),je=g+$e-ue),Fe.includes("s")&&(Q=Math.max(Qs,Ze+re)),Fe.includes("n")&&(Q=Math.max(Qs,Ze-re),be=u+Ze-Q);const it={x:je,y:be,width:ue,height:Q},{dx:ze,dy:Le,guides:pt}=Zf(it,Ee.current,new Set([ee]),d,w);se(pt),ze!==0&&(d.right?ue+=ze:d.left&&(je+=ze,ue-=ze)),Le!==0&&(d.bottom?Q+=Le:d.top&&(be+=Le,Q-=Le)),t(Ee.current.map(vt=>vt.id===ee?{...vt,x:je,y:be,width:ue,height:Q}:vt)),J({x:R.clientX+12,y:R.clientY+12,text:`${Math.round(ue)} × ${Math.round(Q)}`})},k=()=>{window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",k),J(null),pe.current=null,c==null||c(!1),se([])};window.addEventListener("mousemove",m),window.addEventListener("mouseup",k)},[e,t,c]),en=N.useCallback(W=>{pe.current=null,Re(ee=>{const Fe=new Set(ee);return Fe.add(W),Fe}),C(ee=>{const Fe=new Set(ee);return Fe.delete(W),Fe}),_t(()=>{t(Ee.current.filter(ee=>ee.id!==W)),Re(ee=>{const Fe=new Set(ee);return Fe.delete(W),Fe})},180)},[t]),Dt={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},K=N.useCallback(W=>{const ee=e.find(Fe=>Fe.id===W);ee&&(rt.current=!!ee.text,we(W),nt(!1))},[e]),fe=N.useCallback(()=>{te&&(nt(!0),_t(()=>{we(null),nt(!1)},150))},[te]);N.useEffect(()=>{i&&te&&fe()},[i]);const ie=N.useCallback(W=>{te&&(t(e.map(ee=>ee.id===te?{...ee,text:W.trim()||void 0}:ee)),fe())},[te,e,t,fe]),Y=typeof window<"u"?window.scrollY:0,ne=["nw","ne","se","sw"],de=y?"#f97316":"#3c82f7",ye=[{dir:"n",cls:he.edgeN,arrow:r.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:r.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:de})})},{dir:"e",cls:he.edgeE,arrow:r.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:r.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:de})})},{dir:"s",cls:he.edgeS,arrow:r.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:r.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:de})})},{dir:"w",cls:he.edgeW,arrow:r.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:r.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:de})})}];return r.jsxs(r.Fragment,{children:[r.jsx("div",{ref:G,className:`${he.overlay} ${s?"":he.light} ${n?he.placing:""} ${f?he.passthrough:""} ${i?he.overlayExiting:""} ${y?he.wireframe:""}${_?` ${_}`:""}`,"data-feedback-toolbar":!0,onMouseDown:ut,children:e.map(W=>{var Ne;const ee=Z.has(W.id),Fe=((Ne=Er[W.type])==null?void 0:Ne.label)||W.type,De=W.y-Y;return r.jsxs("div",{"data-design-placement":W.id,className:`${he.placement} ${ee?he.selected:""} ${ft.has(W.id)?he.exiting:""}`,style:{left:W.x,top:De,width:W.width,height:W.height,position:"fixed"},onMouseDown:Pe=>Xt(Pe,W.id),onDoubleClick:()=>K(W.id),children:[r.jsx("span",{className:he.placementLabel,children:Fe}),r.jsx("span",{className:`${he.placementAnnotation} ${W.text?he.annotationVisible:""}`,children:(W.text&&yt.current.set(W.id,W.text),W.text||yt.current.get(W.id)||"")}),r.jsx("div",{className:he.placementContent,children:r.jsx(Mv,{type:W.type,width:W.width,height:W.height,text:W.text})}),r.jsx("div",{className:he.deleteButton,onMouseDown:Pe=>Pe.stopPropagation(),onClick:()=>en(W.id),children:"✕"}),ne.map(Pe=>r.jsx("div",{className:`${he.handle} ${he[`handle${Pe.charAt(0).toUpperCase()}${Pe.slice(1)}`]}`,onMouseDown:$e=>Mt($e,W.id,Pe)},Pe)),ye.map(({dir:Pe,cls:$e,arrow:Ze})=>r.jsx("div",{className:`${he.edgeHandle} ${$e}`,onMouseDown:g=>Mt(g,W.id,Pe),children:Ze},Pe))]},W.id)})}),te&&(()=>{var u;const W=e.find(d=>d.id===te);if(!W)return null;const ee=W.y-Y,Fe=W.x+W.width/2,De=ee-8,Ne=ee+W.height+8,Pe=De>200,$e=Ne<window.innerHeight-100,Ze=Math.max(160,Math.min(window.innerWidth-160,Fe));let g;return Pe?g={left:Ze,bottom:window.innerHeight-De}:$e?g={left:Ze,top:Ne}:g={left:Ze,top:Math.max(80,window.innerHeight/2-80)},r.jsx(wc,{element:((u=Er[W.type])==null?void 0:u.label)||W.type,placeholder:Dt[W.type]||"Label or content text",initialValue:W.text??"",submitLabel:rt.current?"Save":"Set",onSubmit:ie,onCancel:fe,onDelete:rt.current?()=>{ie("")}:void 0,isExiting:me,lightMode:!s,style:g})})(),L&&r.jsx("div",{className:he.drawBox,style:{left:L.x,top:L.y,width:L.w,height:L.h},"data-feedback-toolbar":!0}),A&&r.jsx("div",{className:he.selectBox,style:{left:A.x,top:A.y,width:A.w,height:A.h},"data-feedback-toolbar":!0}),ae&&r.jsx("div",{className:he.sizeIndicator,style:{left:ae.x,top:ae.y},"data-feedback-toolbar":!0,children:ae.text}),ce.map((W,ee)=>r.jsx("div",{className:he.guideLine,style:W.axis==="x"?{position:"fixed",left:W.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:W.pos-Y,right:0,height:1},"data-feedback-toolbar":!0},`${W.axis}-${W.pos}-${ee}`))]})}function Rv(e){if(!e)return"";const t=e.scrollTop>2,n=e.scrollTop+e.clientHeight<e.scrollHeight-2;return`${t?he.fadeTop:""} ${n?he.fadeBottom:""}`}var P="currentColor",le="0.5";function Pv({type:e}){switch(e){case"navigation":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:P,opacity:".4"}),r.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:P,opacity:".25"}),r.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:P,opacity:".25"})]});case"header":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:P,opacity:".35"}),r.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:P,opacity:".15"})]});case"hero":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:P,opacity:".35"}),r.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:P,opacity:".15"}),r.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:P,strokeWidth:le})]});case"section":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:P,opacity:".3"}),r.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:P,opacity:".15"}),r.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:P,opacity:".15"})]});case"sidebar":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:P,opacity:".3"}),r.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:P,opacity:".15"}),r.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:P,opacity:".15"})]});case"footer":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:P,opacity:".25"}),r.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:P,opacity:".25"}),r.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:P,opacity:".2"})]});case"modal":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:P,opacity:".3"}),r.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:P,opacity:".15"}),r.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:P,strokeWidth:le})]});case"divider":return r.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:r.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:P,strokeWidth:"0.5",opacity:".3"})});case"card":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:P,opacity:".04"}),r.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:P,opacity:".25"}),r.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:P,opacity:".12"})]});case"text":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:P,opacity:".3"}),r.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:P,opacity:".15"}),r.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:P,opacity:".15"}),r.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:P,opacity:".12"})]});case"image":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:P,strokeWidth:le}),r.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:P,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:P,strokeWidth:".3",opacity:".25"})]});case"video":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:P,strokeWidth:le}),r.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:P,strokeWidth:le,fill:P,opacity:".15"})]});case"table":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:P,strokeWidth:le}),r.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:P,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:P,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:P,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:P,strokeWidth:".3",opacity:".25"})]});case"grid":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:P,strokeWidth:le})]});case"list":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:P,opacity:".2"}),r.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:P,opacity:".2"}),r.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:P,opacity:".2"})]});case"chart":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:P,opacity:".2"}),r.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:P,opacity:".25"}),r.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:P,opacity:".3"}),r.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:P,opacity:".2"})]});case"accordion":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:P,opacity:".25"}),r.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:P,strokeWidth:le})]});case"carousel":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:P,strokeWidth:le}),r.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:P,strokeWidth:le,opacity:".35"}),r.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:P,strokeWidth:le,opacity:".35"}),r.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:P,opacity:".35"}),r.jsx("circle",{cx:"10",cy:"14",r:".6",fill:P,opacity:".15"}),r.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:P,opacity:".15"})]});case"button":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:P,opacity:".25"})]});case"input":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:P,opacity:".25"}),r.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:P,opacity:".12"})]});case"search":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:P,strokeWidth:le}),r.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:P,strokeWidth:le,opacity:".3"}),r.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:P,strokeWidth:le,opacity:".3"}),r.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:P,opacity:".12"})]});case"form":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:P,opacity:".25"}),r.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:P,opacity:".25"}),r.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:P,strokeWidth:le})]});case"tabs":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:P,opacity:".25"}),r.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:P,strokeWidth:le})]});case"dropdown":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:P,opacity:".2"}),r.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:P,strokeWidth:le,opacity:".3"}),r.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:P,strokeWidth:le,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:P,strokeWidth:le}),r.jsx("circle",{cx:"13",cy:"8",r:"2",fill:P,opacity:".3"})]});case"avatar":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:P,strokeWidth:le}),r.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:P,strokeWidth:le}),r.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:P,strokeWidth:le})]});case"badge":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:P,opacity:".25"})]});case"breadcrumb":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:P,opacity:".3"}),r.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:P,strokeWidth:le,opacity:".2"}),r.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:P,opacity:".2"}),r.jsx("path",{d:"M14 7l1 1-1 1",stroke:P,strokeWidth:le,opacity:".2"}),r.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:P,opacity:".15"})]});case"pagination":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:P,opacity:".15",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:P,strokeWidth:le})]});case"progress":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:P,opacity:".2"})]});case"toast":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:P,strokeWidth:le}),r.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:P,strokeWidth:le,opacity:".3"}),r.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:P,opacity:".25"}),r.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:P,opacity:".12"})]});case"tooltip":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:P,opacity:".25"}),r.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:P,strokeWidth:le})]});case"pricing":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:P,opacity:".25"}),r.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:P,opacity:".15"}),r.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:P,opacity:".1"}),r.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:P,opacity:".1"}),r.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:P,opacity:".2"})]});case"testimonial":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:P,strokeWidth:le}),r.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:P,opacity:".2",fontFamily:"serif",children:"“"}),r.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:P,opacity:".15"}),r.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:P,opacity:".12"}),r.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:P,strokeWidth:le,opacity:".25"}),r.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:P,opacity:".15"})]});case"cta":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:P,opacity:".3"}),r.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:P,opacity:".15"}),r.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:P,strokeWidth:le})]});case"alert":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:P,strokeWidth:le}),r.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:P,strokeWidth:le,opacity:".3"}),r.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:P,strokeWidth:"0.6",opacity:".5"}),r.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:P,opacity:".5"}),r.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:P,opacity:".2"})]});case"banner":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:P,opacity:".25"}),r.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:P,strokeWidth:le})]});case"stat":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:P,opacity:".15"}),r.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:P,opacity:".3"}),r.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:P,opacity:".12"})]});case"stepper":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"4",cy:"8",r:"2",fill:P,opacity:".2",stroke:P,strokeWidth:le}),r.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:P,strokeWidth:".4",opacity:".3"}),r.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:P,strokeWidth:le}),r.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:P,strokeWidth:".4",opacity:".3"}),r.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:P,strokeWidth:le})]});case"tag":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:P,opacity:".25"}),r.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:P,strokeWidth:le,opacity:".2"}),r.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:P,strokeWidth:le,opacity:".2"})]});case"rating":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:P,opacity:".25"}),r.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:P,opacity:".25"}),r.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:P,strokeWidth:le,opacity:".25"})]});case"map":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:P,strokeWidth:le}),r.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:P,strokeWidth:".3",opacity:".15"}),r.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:P,strokeWidth:".3",opacity:".15"}),r.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:P,opacity:".15",stroke:P,strokeWidth:le})]});case"timeline":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:P,strokeWidth:".4",opacity:".25"}),r.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:P,opacity:".2",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:P,opacity:".25"}),r.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:P,opacity:".15"}),r.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:P,opacity:".15"})]});case"fileUpload":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:P,strokeWidth:le,strokeDasharray:"2 1"}),r.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:P,strokeWidth:le,opacity:".3"}),r.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:P,opacity:".15"})]});case"codeBlock":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:P,strokeWidth:le}),r.jsx("circle",{cx:"4",cy:"4",r:".6",fill:P,opacity:".3"}),r.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:P,opacity:".3"}),r.jsx("circle",{cx:"7",cy:"4",r:".6",fill:P,opacity:".3"}),r.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:P,opacity:".2"}),r.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:P,opacity:".15"}),r.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:P,opacity:".12"})]});case"calendar":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:P,strokeWidth:le}),r.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:P,strokeWidth:".4",opacity:".25"}),r.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:P,opacity:".2"}),r.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:P,opacity:".2"}),r.jsx("circle",{cx:"7",cy:"9",r:".6",fill:P,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"9",r:".6",fill:P,opacity:".2"}),r.jsx("circle",{cx:"13",cy:"9",r:".6",fill:P,opacity:".3"}),r.jsx("circle",{cx:"7",cy:"12",r:".6",fill:P,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"12",r:".6",fill:P,opacity:".2"})]});case"notification":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:P,strokeWidth:le}),r.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:P,strokeWidth:le,opacity:".25"}),r.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:P,opacity:".25"}),r.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:P,opacity:".12"}),r.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:P,opacity:".25"})]});case"productCard":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:P,opacity:".04"}),r.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:P,opacity:".25"}),r.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:P,opacity:".15"}),r.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:P,strokeWidth:le})]});case"profile":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:P,opacity:".25"}),r.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:P,opacity:".12"})]});case"drawer":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:P,opacity:".25"}),r.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:P,opacity:".15"}),r.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:P,opacity:".15"}),r.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:P,strokeWidth:le,opacity:".15"})]});case"popover":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:P,opacity:".25"}),r.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:P,opacity:".15"}),r.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:P,strokeWidth:le})]});case"logo":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:P,strokeWidth:le}),r.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:P,strokeWidth:le,opacity:".3"}),r.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:P,opacity:".2"}),r.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:P,opacity:".12"})]});case"faq":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:P,opacity:".3",fontWeight:"bold",children:"?"}),r.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:P,opacity:".25"}),r.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:P,opacity:".12"}),r.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:P,opacity:".3",fontWeight:"bold",children:"?"}),r.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:P,opacity:".25"}),r.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:P,opacity:".12"})]});case"gallery":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:P,strokeWidth:le})]});case"checkbox":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:P,strokeWidth:le}),r.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:P,strokeWidth:le,opacity:".35"})]});case"radio":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:P,strokeWidth:le}),r.jsx("circle",{cx:"10",cy:"8",r:"2",fill:P,opacity:".3"})]});case"slider":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:P,opacity:".15"}),r.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:P,opacity:".25"}),r.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:P,strokeWidth:le})]});case"datePicker":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:P,opacity:".2"}),r.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:P,opacity:".12"}),r.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:P,strokeWidth:le,strokeDasharray:"2 1",opacity:".3"}),r.jsx("circle",{cx:"6",cy:"10",r:".6",fill:P,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"10",r:".6",fill:P,opacity:".3"}),r.jsx("circle",{cx:"14",cy:"10",r:".6",fill:P,opacity:".2"}),r.jsx("circle",{cx:"6",cy:"13",r:".6",fill:P,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"13",r:".6",fill:P,opacity:".2"})]});case"skeleton":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:P,opacity:".08"}),r.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:P,opacity:".08"}),r.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:P,opacity:".08"})]});case"chip":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:P,opacity:".08",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:P,opacity:".25"}),r.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:P,strokeWidth:le,opacity:".2"}),r.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:P,strokeWidth:le,opacity:".2"}),r.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:P,strokeWidth:le,opacity:".25"})]});case"icon":return r.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:r.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:P,strokeWidth:le,opacity:".3"})});case"spinner":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:P,strokeWidth:le,opacity:".12"}),r.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:P,strokeWidth:le,opacity:".35",strokeLinecap:"round"})]});case"feature":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:P,strokeWidth:le}),r.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:P,strokeWidth:le,opacity:".25"}),r.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:P,opacity:".25"}),r.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:P,opacity:".12"}),r.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:P,opacity:".25"}),r.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:P,opacity:".12"})]});case"team":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:P,opacity:".2"}),r.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:P,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:P,strokeWidth:le,opacity:".5"}),r.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:P,opacity:".15"}),r.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:P,opacity:".1"})]});case"login":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:P,opacity:".25"}),r.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:P,opacity:".2"})]});case"contact":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:P,opacity:".2"}),r.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:P,strokeWidth:le}),r.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:P,opacity:".2"})]});default:return null}}function Lv({activeType:e,onSelect:t,onDragStart:n,scrollRef:o,fadeClass:s,blankCanvas:i}){return r.jsx("div",{ref:o,className:`${he.placeScroll} ${s||""}`,children:Um.map(c=>r.jsxs("div",{className:he.paletteSection,children:[r.jsx("div",{className:he.paletteSectionTitle,children:c.section}),c.items.map(_=>r.jsxs("div",{className:`${he.paletteItem} ${e===_.type?he.active:""} ${i?he.wireframe:""}`,onClick:()=>t(_.type),onMouseDown:f=>{f.button===0&&n(_.type,f)},children:[r.jsx("div",{className:he.paletteItemIcon,children:r.jsx(Pv,{type:_.type})}),r.jsx("span",{className:he.paletteItemLabel,children:_.label})]},_.type))]},c.section))})}function Tv({value:e,suffix:t}){const[n,o]=N.useState(null),[s,i]=N.useState(t),[c,_]=N.useState("up"),f=N.useRef(e),w=N.useRef(t),j=N.useRef(),b=n!==null&&s!==t;return N.useEffect(()=>{if(e!==f.current){if(e===0){f.current=e,w.current=t,o(null);return}_(e>f.current?"up":"down"),o(f.current),i(w.current),f.current=e,w.current=t,clearTimeout(j.current),j.current=_t(()=>o(null),250)}else w.current=t},[e,t]),n===null?r.jsxs(r.Fragment,{children:[e,t?` ${t}`:""]}):b?r.jsxs("span",{className:he.rollingWrap,children:[r.jsxs("span",{style:{visibility:"hidden"},children:[e," ",t]}),r.jsxs("span",{className:`${he.rollingNum} ${c==="up"?he.exitUp:he.exitDown}`,children:[n," ",s]},`o${n}-${e}`),r.jsxs("span",{className:`${he.rollingNum} ${c==="up"?he.enterUp:he.enterDown}`,children:[e," ",t]},`n${e}`)]}):r.jsxs(r.Fragment,{children:[r.jsxs("span",{className:he.rollingWrap,children:[r.jsx("span",{style:{visibility:"hidden"},children:e}),r.jsx("span",{className:`${he.rollingNum} ${c==="up"?he.exitUp:he.exitDown}`,children:n},`o${n}-${e}`),r.jsx("span",{className:`${he.rollingNum} ${c==="up"?he.enterUp:he.enterDown}`,children:e},`n${e}`)]}),t?` ${t}`:""]})}function Av({activeType:e,onSelect:t,isDarkMode:n,sectionCount:o,onDetectSections:s,visible:i,onExited:c,placementCount:_,onClearPlacements:f,onDragStart:w,blankCanvas:j,onBlankCanvasChange:b,wireframePurpose:v,onWireframePurposeChange:E,Tooltip:I}){const[y,Z]=N.useState(!1),[C,L]=N.useState("exit"),[O,A]=N.useState(!1),[q,ae]=N.useState(!0),J=N.useRef(0),ce=N.useRef(""),se=N.useRef(0),te=N.useRef(),we=N.useRef(null),[me,nt]=N.useState("");N.useEffect(()=>(i?(Z(!0),clearTimeout(te.current),cancelAnimationFrame(se.current),se.current=ci(()=>{se.current=ci(()=>{L("enter")})})):(cancelAnimationFrame(se.current),L("exit"),clearTimeout(te.current),te.current=_t(()=>{Z(!1),c==null||c()},200)),()=>cancelAnimationFrame(se.current)),[i]);const rt=_>0||o>0,ft=_+o;return ft>0&&(J.current=ft,ce.current=j?ft===1?"Component":"Components":ft===1?"Change":"Changes"),N.useEffect(()=>{if(rt)O?ae(!1):(ae(!0),A(!0),ci(()=>{ci(()=>{ae(!1)})}));else{ae(!0);const Re=_t(()=>A(!1),300);return()=>clearTimeout(Re)}},[rt]),N.useEffect(()=>{if(!y)return;const Re=we.current;if(!Re)return;const yt=()=>nt(Rv(Re));yt(),Re.addEventListener("scroll",yt,{passive:!0});const G=new ResizeObserver(yt);return G.observe(Re),()=>{Re.removeEventListener("scroll",yt),G.disconnect()}},[y]),y?r.jsxs("div",{className:`${he.palette} ${he[C]} ${n?"":he.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:Re=>Re.stopPropagation(),onMouseDown:Re=>Re.stopPropagation(),onTransitionEnd:Re=>{Re.target===Re.currentTarget&&(i||(clearTimeout(te.current),Z(!1),L("exit"),c==null||c()))},children:[r.jsxs("div",{className:he.paletteHeader,children:[r.jsx("div",{className:he.paletteHeaderTitle,children:"Layout Mode"}),r.jsxs("div",{className:he.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",r.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),r.jsxs("div",{className:`${he.canvasToggle} ${j?he.active:""}`,onClick:()=>b(!j),children:[r.jsx("span",{className:he.canvasToggleIcon,children:r.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),r.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),r.jsx("span",{className:he.canvasToggleLabel,children:"Wireframe New Page"})]}),r.jsx("div",{className:`${he.wireframePurposeWrap} ${j?"":he.collapsed}`,children:r.jsx("div",{className:he.wireframePurposeInner,children:r.jsx("textarea",{className:he.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:v,onChange:Re=>E(Re.target.value),rows:2})})}),r.jsx(Lv,{activeType:e,onSelect:t,onDragStart:w,scrollRef:we,fadeClass:me,blankCanvas:j}),O&&r.jsx("div",{className:`${he.paletteFooterWrap} ${q?he.footerHidden:""}`,children:r.jsx("div",{className:he.paletteFooterInner,children:r.jsx("div",{className:he.paletteFooterInnerContent,children:r.jsxs("div",{className:he.paletteFooter,children:[r.jsx("span",{className:he.paletteFooterCount,children:r.jsx(Tv,{value:J.current,suffix:ce.current})}),r.jsx("button",{className:he.paletteFooterClear,onClick:f,children:"Clear"})]})})})})]}):null}function ji(e){if(e.parentElement)return e.parentElement;const t=e.getRootNode();return t instanceof ShadowRoot?t.host:null}function Dn(e,t){let n=e;for(;n;){if(n.matches(t))return n;n=ji(n)}return null}function $v(e,t=4){const n=[];let o=e,s=0;for(;o&&s<t;){const i=o.tagName.toLowerCase();if(i==="html"||i==="body")break;let c=i;if(o.id)c=`#${o.id}`;else if(o.className&&typeof o.className=="string"){const f=o.className.split(/\s+/).find(w=>w.length>2&&!w.match(/^[a-z]{1,2}$/)&&!w.match(/[A-Z0-9]{5,}/));f&&(c=`.${f.split("_")[0]}`)}const _=ji(o);!o.parentElement&&_&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),o=_,s++}return n.join(" > ")}function mi(e){var o,s,i,c,_,f,w,j;const t=$v(e);if(e.dataset.element)return{name:e.dataset.element,path:t};const n=e.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(n)){const b=Dn(e,"svg");if(b){const v=ji(b);if(v instanceof HTMLElement)return{name:`graphic in ${mi(v).name}`,path:t}}return{name:"graphic element",path:t}}if(n==="svg"){const b=ji(e);if((b==null?void 0:b.tagName.toLowerCase())==="button"){const v=(o=b.textContent)==null?void 0:o.trim();return{name:v?`icon in "${v}" button`:"button icon",path:t}}return{name:"icon",path:t}}if(n==="button"){const b=(s=e.textContent)==null?void 0:s.trim(),v=e.getAttribute("aria-label");return v?{name:`button [${v}]`,path:t}:{name:b?`button "${b.slice(0,25)}"`:"button",path:t}}if(n==="a"){const b=(i=e.textContent)==null?void 0:i.trim(),v=e.getAttribute("href");return b?{name:`link "${b.slice(0,25)}"`,path:t}:v?{name:`link to ${v.slice(0,30)}`,path:t}:{name:"link",path:t}}if(n==="input"){const b=e.getAttribute("type")||"text",v=e.getAttribute("placeholder"),E=e.getAttribute("name");return v?{name:`input "${v}"`,path:t}:E?{name:`input [${E}]`,path:t}:{name:`${b} input`,path:t}}if(["h1","h2","h3","h4","h5","h6"].includes(n)){const b=(c=e.textContent)==null?void 0:c.trim();return{name:b?`${n} "${b.slice(0,35)}"`:n,path:t}}if(n==="p"){const b=(_=e.textContent)==null?void 0:_.trim();return b?{name:`paragraph: "${b.slice(0,40)}${b.length>40?"...":""}"`,path:t}:{name:"paragraph",path:t}}if(n==="span"||n==="label"){const b=(f=e.textContent)==null?void 0:f.trim();return b&&b.length<40?{name:`"${b}"`,path:t}:{name:n,path:t}}if(n==="li"){const b=(w=e.textContent)==null?void 0:w.trim();return b&&b.length<40?{name:`list item: "${b.slice(0,35)}"`,path:t}:{name:"list item",path:t}}if(n==="blockquote")return{name:"blockquote",path:t};if(n==="code"){const b=(j=e.textContent)==null?void 0:j.trim();return b&&b.length<30?{name:`code: \`${b}\``,path:t}:{name:"code",path:t}}if(n==="pre")return{name:"code block",path:t};if(n==="img"){const b=e.getAttribute("alt");return{name:b?`image "${b.slice(0,30)}"`:"image",path:t}}if(n==="video")return{name:"video",path:t};if(["div","section","article","nav","header","footer","aside","main"].includes(n)){const b=e.className,v=e.getAttribute("role"),E=e.getAttribute("aria-label");if(E)return{name:`${n} [${E}]`,path:t};if(v)return{name:`${v}`,path:t};if(typeof b=="string"&&b){const I=b.split(/[\s_-]+/).map(y=>y.replace(/[A-Z0-9]{5,}.*$/,"")).filter(y=>y.length>2&&!/^[a-z]{1,2}$/.test(y)).slice(0,2);if(I.length>0)return{name:I.join(" "),path:t}}return{name:n==="div"?"container":n,path:t}}return{name:n,path:t}}function sa(e){var i,c,_;const t=[],n=(i=e.textContent)==null?void 0:i.trim();n&&n.length<100&&t.push(n);const o=e.previousElementSibling;if(o){const f=(c=o.textContent)==null?void 0:c.trim();f&&f.length<50&&t.unshift(`[before: "${f.slice(0,40)}"]`)}const s=e.nextElementSibling;if(s){const f=(_=s.textContent)==null?void 0:_.trim();f&&f.length<50&&t.push(`[after: "${f.slice(0,40)}"]`)}return t.join(" ")}function Ml(e){const t=ji(e);if(!t)return"";const s=(e.getRootNode()instanceof ShadowRoot&&e.parentElement?Array.from(e.parentElement.children):Array.from(t.children)).filter(j=>j!==e&&j instanceof HTMLElement);if(s.length===0)return"";const i=s.slice(0,4).map(j=>{var I;const b=j.tagName.toLowerCase(),v=j.className;let E="";if(typeof v=="string"&&v){const y=v.split(/\s+/).map(Z=>Z.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(Z=>Z.length>2&&!/^[a-z]{1,2}$/.test(Z));y&&(E=`.${y}`)}if(b==="button"||b==="a"){const y=(I=j.textContent)==null?void 0:I.trim().slice(0,15);if(y)return`${b}${E} "${y}"`}return`${b}${E}`});let _=t.tagName.toLowerCase();if(typeof t.className=="string"&&t.className){const j=t.className.split(/\s+/).map(b=>b.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(b=>b.length>2&&!/^[a-z]{1,2}$/.test(b));j&&(_=`.${j}`)}const f=t.children.length,w=f>i.length+1?` (${f} total in ${_})`:"";return i.join(", ")+w}function ia(e){const t=e.className;return typeof t!="string"||!t?"":t.split(/\s+/).filter(o=>o.length>0).map(o=>{const s=o.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return s?s[1]:o}).filter((o,s,i)=>i.indexOf(o)===s).join(", ")}var Vm=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),Dv=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),Ov=new Set(["input","textarea","select"]),Fv=new Set(["img","video","canvas","svg"]),Bv=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function Nl(e){if(typeof window>"u")return{};const t=window.getComputedStyle(e),n={},o=e.tagName.toLowerCase();let s;Dv.has(o)?s=["color","fontSize","fontWeight","fontFamily","lineHeight"]:o==="button"||o==="a"&&e.getAttribute("role")==="button"?s=["backgroundColor","color","padding","borderRadius","fontSize"]:Ov.has(o)?s=["backgroundColor","color","padding","borderRadius","fontSize"]:Fv.has(o)?s=["width","height","objectFit","borderRadius"]:Bv.has(o)?s=["display","padding","margin","gap","backgroundColor"]:s=["color","fontSize","margin","padding","backgroundColor"];for(const i of s){const c=i.replace(/([A-Z])/g,"-$1").toLowerCase(),_=t.getPropertyValue(c);_&&!Vm.has(_)&&(n[i]=_)}return n}var zv=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function El(e){if(typeof window>"u")return"";const t=window.getComputedStyle(e),n=[];for(const o of zv){const s=o.replace(/([A-Z])/g,"-$1").toLowerCase(),i=t.getPropertyValue(s);i&&!Vm.has(i)&&n.push(`${s}: ${i}`)}return n.join("; ")}function Wv(e){if(!e)return;const t={},n=e.split(";").map(o=>o.trim()).filter(Boolean);for(const o of n){const s=o.indexOf(":");if(s>0){const i=o.slice(0,s).trim(),c=o.slice(s+1).trim();i&&c&&(t[i]=c)}}return Object.keys(t).length>0?t:void 0}function Il(e){const t=[],n=e.getAttribute("role"),o=e.getAttribute("aria-label"),s=e.getAttribute("aria-describedby"),i=e.getAttribute("tabindex"),c=e.getAttribute("aria-hidden");return n&&t.push(`role="${n}"`),o&&t.push(`aria-label="${o}"`),s&&t.push(`aria-describedby="${s}"`),i&&t.push(`tabindex=${i}`),c==="true"&&t.push("aria-hidden"),e.matches("a, button, input, select, textarea, [tabindex]")&&t.push("focusable"),t.join(", ")}function Rl(e){const t=[];let n=e;for(;n&&n.tagName.toLowerCase()!=="html";){const o=n.tagName.toLowerCase();let s=o;if(n.id)s=`${o}#${n.id}`;else if(n.className&&typeof n.className=="string"){const c=n.className.split(/\s+/).map(_=>_.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(_=>_.length>2);c&&(s=`${o}.${c}`)}const i=ji(n);!n.parentElement&&i&&(s=`⟨shadow⟩ ${s}`),t.unshift(s),n=i}return t.join(" > ")}var Hv=new Set(["nav","header","main","section","article","footer","aside"]),Sd={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},t_={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},Uv=new Set(["script","style","noscript","link","meta"]),Vv=40;function Ym(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){const n=window.getComputedStyle(t).position;if(n==="fixed"||n==="sticky")return!0;t=t.parentElement}return!1}function Cs(e){const t=e.tagName.toLowerCase();if(["nav","header","footer","main"].includes(t)&&document.querySelectorAll(t).length===1)return t;if(e.id)return`#${CSS.escape(e.id)}`;if(e.className&&typeof e.className=="string"){const s=e.className.split(/\s+/).filter(i=>i.length>0).find(i=>i.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(i)&&!/^[a-z]{1,2}$/.test(i));if(s){const i=`${t}.${CSS.escape(s)}`;if(document.querySelectorAll(i).length===1)return i}}const n=e.parentElement;if(n){const s=Array.from(n.children).indexOf(e)+1;return`${n===document.body?"body":Cs(n)} > ${t}:nth-child(${s})`}return t}function bc(e){var c;const t=e.tagName.toLowerCase(),n=e.getAttribute("aria-label");if(n)return n;const o=e.getAttribute("role");if(o&&Sd[o])return Sd[o];if(t_[t])return t_[t];const s=e.querySelector("h1, h2, h3, h4, h5, h6");if(s){const _=(c=s.textContent)==null?void 0:c.trim();if(_&&_.length<=50)return _;if(_)return _.slice(0,47)+"..."}const{name:i}=mi(e);return i.charAt(0).toUpperCase()+i.slice(1)}function Xm(e){const t=e.className;return typeof t!="string"||!t?null:t.split(/\s+/).map(o=>o.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(o=>o.length>2&&!/^[a-z]{1,2}$/.test(o))||null}function Qm(e){var o;const t=(o=e.textContent)==null?void 0:o.trim();if(!t)return null;const n=t.replace(/\s+/g," ");return n.length<=30?n:n.slice(0,30)+"…"}function Yv(){const e=document.querySelector("main")||document.body,t=Array.from(e.children);let n=t;e!==document.body&&t.length<3&&(n=Array.from(document.body.children));const o=[];return n.forEach((s,i)=>{if(!(s instanceof HTMLElement))return;const c=s.tagName.toLowerCase();if(Uv.has(c)||s.hasAttribute("data-feedback-toolbar")||s.closest("[data-feedback-toolbar]"))return;const _=window.getComputedStyle(s);if(_.display==="none"||_.visibility==="hidden")return;const f=s.getBoundingClientRect();if(f.height<Vv)return;const w=Hv.has(c),j=s.getAttribute("role")&&Sd[s.getAttribute("role")],b=c==="div"&&f.height>=60;if(!w&&!j&&!b)return;const v=window.scrollY,E=Ym(s),I={x:f.x,y:E?f.y:f.y+v,width:f.width,height:f.height};o.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:bc(s),tagName:c,selector:Cs(s),role:s.getAttribute("role"),className:Xm(s),textSnippet:Qm(s),originalRect:I,currentRect:{...I},originalIndex:i,isFixed:E})}),o}function Xv(e){const t=window.scrollY,n=e.getBoundingClientRect(),o=Ym(e),s={x:n.x,y:o?n.y:n.y+t,width:n.width,height:n.height},i=e.parentElement;let c=0;return i&&(c=Array.from(i.children).indexOf(e)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:bc(e),tagName:e.tagName.toLowerCase(),selector:Cs(e),role:e.getAttribute("role"),className:Xm(e),textSnippet:Qm(e),originalRect:s,currentRect:{...s},originalIndex:c,isFixed:o}}var n_={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},r_=["nw","n","ne","e","se","s","sw","w"],Pl=24,o_=16,Ll=5;function s_(e,t,n,o){let s=1/0,i=1/0;const c=e.x,_=e.x+e.width,f=e.x+e.width/2,w=e.y,j=e.y+e.height,b=e.y+e.height/2,v=[];for(const J of t)n.has(J.id)||v.push(J.currentRect);o&&v.push(...o);for(const J of v){const ce=J.x,se=J.x+J.width,te=J.x+J.width/2,we=J.y,me=J.y+J.height,nt=J.y+J.height/2;for(const rt of[c,_,f])for(const ft of[ce,se,te]){const Re=ft-rt;Math.abs(Re)<Ll&&Math.abs(Re)<Math.abs(s)&&(s=Re)}for(const rt of[w,j,b])for(const ft of[we,me,nt]){const Re=ft-rt;Math.abs(Re)<Ll&&Math.abs(Re)<Math.abs(i)&&(i=Re)}}const E=Math.abs(s)<Ll?s:0,I=Math.abs(i)<Ll?i:0,y=[],Z=new Set,C=c+E,L=_+E,O=f+E,A=w+I,q=j+I,ae=b+I;for(const J of v){const ce=J.x,se=J.x+J.width,te=J.x+J.width/2,we=J.y,me=J.y+J.height,nt=J.y+J.height/2;for(const rt of[ce,te,se])for(const ft of[C,O,L])if(Math.abs(ft-rt)<.5){const Re=`x:${Math.round(rt)}`;Z.has(Re)||(Z.add(Re),y.push({axis:"x",pos:rt}))}for(const rt of[we,nt,me])for(const ft of[A,ae,q])if(Math.abs(ft-rt)<.5){const Re=`y:${Math.round(rt)}`;Z.has(Re)||(Z.add(Re),y.push({axis:"y",pos:rt}))}}return{dx:E,dy:I,guides:y}}var Qv=new Set(["script","style","noscript","link","meta","br","hr"]);function i_(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){if(t.closest("[data-feedback-toolbar]"))return null;if(Qv.has(t.tagName.toLowerCase())){t=t.parentElement;continue}const n=t.getBoundingClientRect();if(n.width>=o_&&n.height>=o_)return t;t=t.parentElement}return null}function Kv({rearrangeState:e,onChange:t,isDarkMode:n,exiting:o,className:s,blankCanvas:i,extraSnapRects:c,onSelectionChange:_,deselectSignal:f,onDragMove:w,onDragEnd:j,clearSignal:b}){const{sections:v}=e,E=N.useRef(e);E.current=e;const[I,y]=N.useState(new Set),[Z,C]=N.useState(!1),L=N.useRef(b);N.useEffect(()=>{b!==void 0&&b!==L.current&&(L.current=b,v.length>0&&C(!0))},[b,v.length]);const O=N.useRef(f);N.useEffect(()=>{f!==O.current&&(O.current=f,y(new Set))},[f]);const[A,q]=N.useState(null),[ae,J]=N.useState(!1),ce=N.useRef(!1),se=N.useCallback(m=>{const k=v.find(R=>R.id===m);k&&(ce.current=!!k.note,q(m),J(!1))},[v]),te=N.useCallback(()=>{A&&(J(!0),_t(()=>{q(null),J(!1)},150))},[A]),we=N.useCallback(m=>{A&&(t({...e,sections:v.map(k=>k.id===A?{...k,note:m.trim()||void 0}:k)}),te())},[A,v,e,t,te]);N.useEffect(()=>{o&&A&&te()},[o]);const[me,nt]=N.useState(new Set),rt=N.useRef(new Map),[ft,Re]=N.useState(null),[yt,G]=N.useState(null),[pe,Ee]=N.useState([]),[Ge,qe]=N.useState(0),St=N.useRef(null),$t=N.useRef(new Set),Qe=N.useRef(new Map),[ut,Xt]=N.useState(new Map),[Mt,en]=N.useState(new Map),Dt=N.useRef(new Set),K=N.useRef(new Map),fe=N.useRef(_);fe.current=_;const ie=N.useRef(w);ie.current=w;const Y=N.useRef(j);Y.current=j,N.useEffect(()=>{i&&y(new Set)},[i]);const[ne,de]=N.useState(()=>!e.sections.some(m=>{const k=m.originalRect,R=m.currentRect;return Math.abs(k.x-R.x)>1||Math.abs(k.y-R.y)>1||Math.abs(k.width-R.width)>1||Math.abs(k.height-R.height)>1}));N.useEffect(()=>{if(!ne){const m=_t(()=>de(!0),380);return()=>clearTimeout(m)}},[]);const ye=N.useRef(new Set);N.useEffect(()=>{ye.current=new Set(v.map(m=>m.selector))},[v]),N.useEffect(()=>{const m=()=>qe(window.scrollY);return m(),window.addEventListener("scroll",m,{passive:!0}),window.addEventListener("resize",m,{passive:!0}),()=>{window.removeEventListener("scroll",m),window.removeEventListener("resize",m)}},[]),N.useEffect(()=>{const m=k=>{if(St.current){Re(null);return}const R=document.elementFromPoint(k.clientX,k.clientY);if(!R){Re(null);return}if(R.closest("[data-feedback-toolbar]")){Re(null);return}if(R.closest("[data-design-placement]")){Re(null);return}if(R.closest("[data-annotation-popup]")){Re(null);return}const $=i_(R);if(!$){Re(null);return}for(const ue of ye.current)try{const Q=document.querySelector(ue);if(Q&&(Q===$||$.contains(Q))){Re(null);return}}catch{}const re=$.getBoundingClientRect();Re({x:re.x,y:re.y,w:re.width,h:re.height})};return document.addEventListener("mousemove",m,{passive:!0}),()=>document.removeEventListener("mousemove",m)},[v]),N.useEffect(()=>{const m=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=m}},[]),N.useEffect(()=>{const m=k=>{var Q,je,be,it;if(St.current||k.button!==0)return;const R=k.target;if(!R||R.closest("[data-feedback-toolbar]")||R.closest("[data-design-placement]")||R.closest("[data-annotation-popup]"))return;const $=i_(R);let re=!1;if($)for(const ze of ye.current)try{const Le=document.querySelector(ze);if(Le&&(Le===$||$.contains(Le))){re=!0;break}}catch{}const ue=!!(k.shiftKey||k.metaKey||k.ctrlKey);if($&&!re){k.preventDefault(),k.stopPropagation();const ze=Xv($),Le=[...v,ze],pt=[...e.originalOrder,ze.id];t({...e,sections:Le,originalOrder:pt});const vt=new Set([ze.id]);y(vt),(Q=fe.current)==null||Q.call(fe,vt,ue),Re(null);const Ct=k.clientX,Me=k.clientY,st={x:ze.currentRect.x,y:ze.currentRect.y};ze.originalRect;let ct=!1,at=0,Ke=0;St.current="move";const Ce=Wt=>{var Hn;const ln=Wt.clientX-Ct,yn=Wt.clientY-Me;if(!ct&&(Math.abs(ln)>2||Math.abs(yn)>2)&&(ct=!0),!ct)return;const dr={x:st.x+ln,y:st.y+yn,width:ze.currentRect.width,height:ze.currentRect.height},hr=s_(dr,Le,new Set([ze.id]),c);Ee(hr.guides);const He=ln+hr.dx,Gt=yn+hr.dy;at=He,Ke=Gt;const er=document.querySelector(`[data-rearrange-section="${ze.id}"]`);er&&(er.style.transform=`translate(${He}px, ${Gt}px)`),Xt(new Map([[ze.id,{x:st.x+He,y:st.y+Gt,width:ze.currentRect.width,height:ze.currentRect.height}]])),(Hn=ie.current)==null||Hn.call(ie,He,Gt)},bt=()=>{var ln;window.removeEventListener("mousemove",Ce),window.removeEventListener("mouseup",bt),St.current=null,Ee([]),Xt(new Map);const Wt=document.querySelector(`[data-rearrange-section="${ze.id}"]`);Wt&&(Wt.style.transform=""),ct&&t({...e,sections:Le.map(yn=>yn.id===ze.id?{...yn,currentRect:{...yn.currentRect,x:Math.max(0,st.x+at),y:Math.max(0,st.y+Ke)}}:yn),originalOrder:pt}),(ln=Y.current)==null||ln.call(Y,at,Ke,ct)};window.addEventListener("mousemove",Ce),window.addEventListener("mouseup",bt)}else if(re&&$){k.preventDefault();for(const ze of v)try{const Le=document.querySelector(ze.selector);if(Le&&Le===$){const pt=new Set([ze.id]);y(pt),(je=fe.current)==null||je.call(fe,pt,ue);return}}catch{}ue||(y(new Set),(be=fe.current)==null||be.call(fe,new Set,!1))}else ue||(y(new Set),(it=fe.current)==null||it.call(fe,new Set,!1))};return document.addEventListener("mousedown",m,!0),()=>document.removeEventListener("mousedown",m,!0)},[v,e,t]),N.useEffect(()=>{const m=k=>{const R=k.target;if(!(R.tagName==="INPUT"||R.tagName==="TEXTAREA"||R.isContentEditable)){if((k.key==="Backspace"||k.key==="Delete")&&I.size>0){k.preventDefault();const $=new Set(I);nt(re=>{const ue=new Set(re);for(const Q of $)ue.add(Q);return ue}),y(new Set),_t(()=>{const re=E.current;t({...re,sections:re.sections.filter(ue=>!$.has(ue.id)),originalOrder:re.originalOrder.filter(ue=>!$.has(ue))}),nt(ue=>{const Q=new Set(ue);for(const je of $)Q.delete(je);return Q})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(k.key)&&I.size>0){k.preventDefault();const $=k.shiftKey?20:1,re=k.key==="ArrowLeft"?-$:k.key==="ArrowRight"?$:0,ue=k.key==="ArrowUp"?-$:k.key==="ArrowDown"?$:0;t({...e,sections:v.map(Q=>I.has(Q.id)?{...Q,currentRect:{...Q.currentRect,x:Math.max(0,Q.currentRect.x+re),y:Math.max(0,Q.currentRect.y+ue)}}:Q)});return}k.key==="Escape"&&I.size>0&&y(new Set)}};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[I,v,e,t]);const W=N.useCallback((m,k)=>{var Ct;if(m.button!==0)return;const R=m.target;if(R.closest(`.${he.handle}`)||R.closest(`.${he.deleteButton}`))return;m.preventDefault(),m.stopPropagation();let $;m.shiftKey||m.metaKey||m.ctrlKey?($=new Set(I),$.has(k)?$.delete(k):$.add(k)):I.has(k)?$=new Set(I):$=new Set([k]),y($),($.size!==I.size||[...$].some(Me=>!I.has(Me)))&&((Ct=fe.current)==null||Ct.call(fe,$,!!(m.shiftKey||m.metaKey||m.ctrlKey)));const ue=m.clientX,Q=m.clientY,je=new Map;for(const Me of v)$.has(Me.id)&&je.set(Me.id,{x:Me.currentRect.x,y:Me.currentRect.y});St.current="move";let be=!1,it=0,ze=0;const Le=new Map;for(const Me of v)if($.has(Me.id)){const st=document.querySelector(`[data-rearrange-section="${Me.id}"]`);Le.set(Me.id,{outlineEl:st,curW:Me.currentRect.width,curH:Me.currentRect.height})}const pt=Me=>{var hr;const st=Me.clientX-ue,ct=Me.clientY-Q;if(st===0&&ct===0)return;be=!0;let at=1/0,Ke=1/0,Ce=-1/0,bt=-1/0;for(const[He,{curW:Gt,curH:er}]of Le){const Hn=je.get(He);if(!Hn)continue;const Un=Hn.x+st,Ye=Hn.y+ct;at=Math.min(at,Un),Ke=Math.min(Ke,Ye),Ce=Math.max(Ce,Un+Gt),bt=Math.max(bt,Ye+er)}const Wt=s_({x:at,y:Ke,width:Ce-at,height:bt-Ke},v,$,c),ln=st+Wt.dx,yn=ct+Wt.dy;it=ln,ze=yn,Ee(Wt.guides);for(const[,{outlineEl:He}]of Le)He&&(He.style.transform=`translate(${ln}px, ${yn}px)`);const dr=new Map;for(const[He,{curW:Gt,curH:er}]of Le){const Hn=je.get(He);if(Hn){const Un={x:Math.max(0,Hn.x+ln),y:Math.max(0,Hn.y+yn),width:Gt,height:er};dr.set(He,Un)}}Xt(dr),(hr=ie.current)==null||hr.call(ie,ln,yn)},vt=Me=>{var st,ct;window.removeEventListener("mousemove",pt),window.removeEventListener("mouseup",vt),St.current=null,Ee([]),Xt(new Map);for(const[,{outlineEl:at}]of Le)at&&(at.style.transform="");if(be){const at=Me.clientX-ue,Ke=Me.clientY-Q;if(Math.abs(at)<5&&Math.abs(Ke)<5)t({...e,sections:v.map(Ce=>{const bt=je.get(Ce.id);return bt?{...Ce,currentRect:{...Ce.currentRect,x:bt.x,y:bt.y}}:Ce})});else{t({...e,sections:v.map(Ce=>{const bt=je.get(Ce.id);return bt?{...Ce,currentRect:{...Ce.currentRect,x:Math.max(0,bt.x+it),y:Math.max(0,bt.y+ze)}}:Ce})}),(st=Y.current)==null||st.call(Y,it,ze,!0);return}}(ct=Y.current)==null||ct.call(Y,0,0,!1)};window.addEventListener("mousemove",pt),window.addEventListener("mouseup",vt)},[I,v,e,t]),ee=N.useCallback((m,k,R)=>{m.preventDefault(),m.stopPropagation();const $=v.find(pt=>pt.id===k);if(!$)return;y(new Set([k])),St.current="resize";const re=m.clientX,ue=m.clientY,Q={...$.currentRect};$.originalRect;const je=Q.width/Q.height;let be={...Q};const it=document.querySelector(`[data-rearrange-section="${k}"]`),ze=pt=>{const vt=pt.clientX-re,Ct=pt.clientY-ue;let Me=Q.x,st=Q.y,ct=Q.width,at=Q.height;if(R.includes("e")&&(ct=Math.max(Pl,Q.width+vt)),R.includes("w")&&(ct=Math.max(Pl,Q.width-vt),Me=Q.x+Q.width-ct),R.includes("s")&&(at=Math.max(Pl,Q.height+Ct)),R.includes("n")&&(at=Math.max(Pl,Q.height-Ct),st=Q.y+Q.height-at),pt.shiftKey)if(R.length===2){const Ce=Math.abs(ct-Q.width),bt=Math.abs(at-Q.height);Ce>bt?at=ct/je:ct=at*je,R.includes("w")&&(Me=Q.x+Q.width-ct),R.includes("n")&&(st=Q.y+Q.height-at)}else R==="e"||R==="w"?at=ct/je:ct=at*je,R==="w"&&(Me=Q.x+Q.width-ct),R==="n"&&(st=Q.y+Q.height-at);be={x:Me,y:st,width:ct,height:at},it&&(it.style.left=`${Me}px`,it.style.top=`${st-Ge}px`,it.style.width=`${ct}px`,it.style.height=`${at}px`),G({x:pt.clientX+12,y:pt.clientY+12,text:`${Math.round(ct)} × ${Math.round(at)}`}),Xt(new Map([[k,be]]))},Le=()=>{window.removeEventListener("mousemove",ze),window.removeEventListener("mouseup",Le),G(null),St.current=null,Xt(new Map),t({...e,sections:v.map(pt=>pt.id===k?{...pt,currentRect:be}:pt)})};window.addEventListener("mousemove",ze),window.addEventListener("mouseup",Le)},[v,e,t,Ge]),Fe=N.useCallback(m=>{nt(k=>{const R=new Set(k);return R.add(m),R}),y(k=>{const R=new Set(k);return R.delete(m),R}),_t(()=>{const k=E.current;t({...k,sections:k.sections.filter(R=>R.id!==m),originalOrder:k.originalOrder.filter(R=>R!==m)}),nt(R=>{const $=new Set(R);return $.delete(m),$})},180)},[t]),De=m=>{const k=m.originalRect,R=m.currentRect;return Math.abs(k.x-R.x)>1||Math.abs(k.y-R.y)>1||Math.abs(k.width-R.width)>1||Math.abs(k.height-R.height)>1},Ne=m=>{const k=m.originalRect,R=m.currentRect;return Math.abs(k.x-R.x)>1||Math.abs(k.y-R.y)>1},Pe=m=>{const k=m.originalRect,R=m.currentRect;return Math.abs(k.width-R.width)>1||Math.abs(k.height-R.height)>1};for(const m of v)Qe.current.has(m.id)||(Ne(m)?Qe.current.set(m.id,"move"):Pe(m)&&Qe.current.set(m.id,"resize"));for(const m of Qe.current.keys())v.some(k=>k.id===m)||Qe.current.delete(m);const $e=v.filter(m=>{try{if(me.has(m.id)||I.has(m.id))return!0;const k=document.querySelector(m.selector);if(!k)return!1;const R=k.getBoundingClientRect(),$=m.originalRect;return Math.abs(R.width-$.width)+Math.abs(R.height-$.height)<200}catch{return!1}}),Ze=$e.filter(m=>De(m)),g=$e.filter(m=>!De(m)),u=new Set(Ze.map(m=>m.id));for(const m of $t.current)u.has(m)||$t.current.delete(m);const d=[...u].sort().join(",");for(const m of Ze)K.current.set(m.id,{currentRect:m.currentRect,originalRect:m.originalRect,isFixed:m.isFixed});return N.useEffect(()=>{const m=Dt.current;Dt.current=u;const k=new Map;for(const R of m)if(!u.has(R)){if(!v.some(re=>re.id===R))continue;const $=K.current.get(R);$&&(k.set(R,{orig:$.originalRect,target:$.currentRect,isFixed:$.isFixed}),K.current.delete(R))}if(k.size>0){en($=>{const re=new Map($);for(const[ue,Q]of k)re.set(ue,Q);return re});const R=_t(()=>{en($=>{const re=new Map($);for(const ue of k.keys())re.delete(ue);return re})},250);return()=>clearTimeout(R)}},[d,v]),r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:`${he.rearrangeOverlay} ${n?"":he.light} ${o?he.overlayExiting:""}${s?` ${s}`:""}`,"data-feedback-toolbar":!0,children:[ft&&r.jsx("div",{className:he.hoverHighlight,style:{left:ft.x,top:ft.y,width:ft.w,height:ft.h}}),g.map(m=>{const k=m.currentRect,R=m.isFixed?k.y:k.y-Ge,$=n_,re=I.has(m.id);return r.jsxs("div",{"data-rearrange-section":m.id,className:`${he.sectionOutline} ${re?he.selected:""} ${Z||o||me.has(m.id)?he.exiting:""}`,style:{left:k.x,top:R,width:k.width,height:k.height,borderColor:$.border,backgroundColor:$.bg,...ne?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:ue=>W(ue,m.id),onDoubleClick:()=>se(m.id),children:[r.jsx("span",{className:he.sectionLabel,style:{backgroundColor:$.pill},children:m.label}),r.jsx("span",{className:`${he.sectionAnnotation} ${m.note?he.annotationVisible:""}`,children:(m.note&&rt.current.set(m.id,m.note),m.note||rt.current.get(m.id)||"")}),r.jsxs("span",{className:he.sectionDimensions,children:[Math.round(k.width)," × ",Math.round(k.height)]}),r.jsx("div",{className:he.deleteButton,onMouseDown:ue=>ue.stopPropagation(),onClick:()=>Fe(m.id),children:"✕"}),r_.map(ue=>r.jsx("div",{className:`${he.handle} ${he[`handle${ue.charAt(0).toUpperCase()}${ue.slice(1)}`]}`,onMouseDown:Q=>ee(Q,m.id,ue)},ue))]},m.id)}),Ze.map(m=>{const k=m.currentRect,R=m.isFixed?k.y:k.y-Ge,$=I.has(m.id),re=Ne(m),ue=Pe(m);if(i&&!$)return null;const je=!$t.current.has(m.id);return je&&$t.current.add(m.id),r.jsxs("div",{"data-rearrange-section":m.id,className:`${he.ghostOutline} ${$?he.selected:""} ${Z||o||me.has(m.id)?he.exiting:""}`,style:{left:k.x,top:R,width:k.width,height:k.height,...ne?{}:{opacity:0,animation:"none",transition:"none"},...je?{}:{animation:"none"}},onMouseDown:be=>W(be,m.id),onDoubleClick:()=>se(m.id),children:[r.jsx("span",{className:he.sectionLabel,style:{backgroundColor:n_.pill},children:m.label}),r.jsx("span",{className:`${he.sectionAnnotation} ${m.note?he.annotationVisible:""}`,children:(m.note&&rt.current.set(m.id,m.note),m.note||rt.current.get(m.id)||"")}),r.jsxs("span",{className:he.sectionDimensions,children:[Math.round(k.width)," × ",Math.round(k.height)]}),r.jsx("div",{className:he.deleteButton,onMouseDown:be=>be.stopPropagation(),onClick:()=>Fe(m.id),children:"✕"}),r_.map(be=>r.jsx("div",{className:`${he.handle} ${he[`handle${be.charAt(0).toUpperCase()}${be.slice(1)}`]}`,onMouseDown:it=>ee(it,m.id,be)},be)),r.jsx("span",{className:he.ghostBadge,children:(()=>{const be=Qe.current.get(m.id);if(re&&ue){const[it,ze]=be==="resize"?["Resize","Move"]:["Move","Resize"];return r.jsxs(r.Fragment,{children:["Suggested ",it," ",r.jsxs("span",{className:he.ghostBadgeExtra,children:["& ",ze]})]})}return`Suggested ${ue?"Resize":"Move"}`})()})]},m.id)})]}),!i&&(()=>{const m=[];for(const k of Ze){const R=ut.get(k.id);m.push({id:k.id,orig:k.originalRect,target:R||k.currentRect,isFixed:k.isFixed,isSelected:I.has(k.id),isExiting:me.has(k.id)})}for(const[k,R]of ut)if(!m.some($=>$.id===k)){const $=v.find(re=>re.id===k);$&&m.push({id:k,orig:$.originalRect,target:R,isFixed:$.isFixed,isSelected:I.has(k)})}for(const[k,R]of Mt)m.some($=>$.id===k)||m.push({id:k,orig:R.orig,target:R.target,isFixed:R.isFixed,isSelected:!1,isExiting:!0});return m.length===0?null:r.jsxs("svg",{className:`${he.connectorSvg} ${Z||o?he.connectorExiting:""}`,children:[m.map(({id:k,orig:R,target:$,isFixed:re,isSelected:ue,isExiting:Q})=>{const je=R.x+R.width/2,be=(re?R.y:R.y-Ge)+R.height/2,it=$.x+$.width/2,ze=(re?$.y:$.y-Ge)+$.height/2,Le=it-je,pt=ze-be,vt=Math.sqrt(Le*Le+pt*pt);if(vt<2)return null;const Ct=Math.min(1,vt/40),Me=Math.min(vt*.3,60),st=vt>0?-pt/vt:0,ct=vt>0?Le/vt:0,at=(je+it)/2+st*Me,Ke=(be+ze)/2+ct*Me,Ce=ut.has(k),bt=Ce||ue?1:.4,Wt=Ce||ue?1:.5;return r.jsxs("g",{className:Q?he.connectorExiting:"",children:[r.jsx("path",{className:he.connectorLine,d:`M ${je} ${be} Q ${at} ${Ke} ${it} ${ze}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:bt*Ct}),r.jsx("circle",{className:he.connectorDot,cx:je,cy:be,r:4*Ct,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Wt*Ct,filter:"url(#connDotShadow)"}),r.jsx("circle",{className:he.connectorDot,cx:it,cy:ze,r:4*Ct,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Wt*Ct,filter:"url(#connDotShadow)"})]},`conn-${k}`)}),r.jsx("defs",{children:r.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:r.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),A&&(()=>{const m=v.find(ze=>ze.id===A);if(!m)return null;const k=m.currentRect,R=m.isFixed?k.y:k.y-Ge,$=k.x+k.width/2,re=R-8,ue=R+k.height+8,Q=re>200,je=ue<window.innerHeight-100,be=Math.max(160,Math.min(window.innerWidth-160,$));let it;return Q?it={left:be,bottom:window.innerHeight-re}:je?it={left:be,top:ue}:it={left:be,top:Math.max(80,window.innerHeight/2-80)},r.jsx(wc,{element:m.label,placeholder:"Add a note about this section",initialValue:m.note??"",submitLabel:ce.current?"Save":"Set",onSubmit:we,onCancel:te,onDelete:ce.current?()=>{we("")}:void 0,isExiting:ae,lightMode:!n,style:it})})(),yt&&r.jsx("div",{className:he.sizeIndicator,style:{left:yt.x,top:yt.y},"data-feedback-toolbar":!0,children:yt.text}),pe.map((m,k)=>r.jsx("div",{className:he.guideLine,style:m.axis==="x"?{position:"fixed",left:m.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:m.pos-Ge,width:"100vw",height:1}},`${m.axis}-${m.pos}-${k}`))]})}var Md=new Set(["script","style","noscript","link","meta","br","hr"]);function Gv(){const e=document.querySelector("main")||document.body,t=[],n=Array.from(e.children),o=e!==document.body&&n.length<3?Array.from(document.body.children):n;for(const s of o){if(!(s instanceof HTMLElement)||Md.has(s.tagName.toLowerCase())||s.hasAttribute("data-feedback-toolbar"))continue;const i=window.getComputedStyle(s);if(i.display==="none"||i.visibility==="hidden")continue;const c=s.getBoundingClientRect();if(!(c.height<10||c.width<10)){t.push({label:bc(s),selector:Cs(s),top:c.top,bottom:c.bottom,left:c.left,right:c.right,area:c.width*c.height});for(const _ of Array.from(s.children)){if(!(_ instanceof HTMLElement)||Md.has(_.tagName.toLowerCase())||_.hasAttribute("data-feedback-toolbar"))continue;const f=window.getComputedStyle(_);if(f.display==="none"||f.visibility==="hidden")continue;const w=_.getBoundingClientRect();w.height<10||w.width<10||t.push({label:bc(_),selector:Cs(_),top:w.top,bottom:w.bottom,left:w.left,right:w.right,area:w.width*w.height})}}}return t}function qv(e){const t=window.scrollY;return e.map(({label:n,selector:o,rect:s})=>{const i=s.y-t;return{label:n,selector:o,top:i,bottom:i+s.height,left:s.x,right:s.x+s.width,area:s.width*s.height}})}function Jv(e){const t=window.scrollY,n=e.y-t,o=e.x;return{top:n,bottom:n+e.height,left:o,right:o+e.width,area:e.width*e.height}}function Nd(e,t){const n=t?qv(t):Gv(),o=Jv(e);let s=null,i=null,c=null,_=null,f=null;for(const I of n){if(Math.abs(I.left-o.left)<2&&Math.abs(I.top-o.top)<2&&Math.abs(I.right-I.left-e.width)<2&&Math.abs(I.bottom-I.top-e.height)<2)continue;I.left<=o.left+2&&I.right>=o.right-2&&I.top<=o.top+2&&I.bottom>=o.bottom-2&&I.area>o.area*1.5&&(!f||I.area<f._area)&&(f={label:I.label,selector:I.selector,_area:I.area});const y=o.right>I.left+5&&o.left<I.right-5,Z=o.bottom>I.top+5&&o.top<I.bottom-5;if(y&&I.bottom<=o.top+5){const C=Math.round(o.top-I.bottom);(!s||C<s._dist)&&(s={label:I.label,selector:I.selector,gap:Math.max(0,C),_dist:C})}if(y&&I.top>=o.bottom-5){const C=Math.round(I.top-o.bottom);(!i||C<i._dist)&&(i={label:I.label,selector:I.selector,gap:Math.max(0,C),_dist:C})}if(Z&&I.right<=o.left+5){const C=Math.round(o.left-I.right);(!c||C<c._dist)&&(c={label:I.label,selector:I.selector,gap:Math.max(0,C),_dist:C})}if(Z&&I.left>=o.right-5){const C=Math.round(I.left-o.right);(!_||C<_._dist)&&(_={label:I.label,selector:I.selector,gap:Math.max(0,C),_dist:C})}}const w=window.innerWidth,j=window.innerHeight,b=ex(e,w),v=I=>I?{label:I.label,selector:I.selector,gap:I.gap}:null,E=Zv(o,e,w,j,f?{label:f.label,selector:f.selector,_area:f._area}:null,n);return{above:v(s),below:v(i),left:v(c),right:v(_),alignment:b,containedIn:f?{label:f.label,selector:f.selector}:null,outOfBounds:E}}function Zv(e,t,n,o,s,i){const c={};let _=!1;const f=[];if(e.left<-2&&f.push("left"),e.right>n+2&&f.push("right"),e.top<-2&&f.push("top"),e.bottom>o+2&&f.push("bottom"),f.length>0&&(c.viewport=f,_=!0),s){const w=i.find(j=>j.label===s.label&&j.selector===s.selector&&Math.abs(j.area-s._area)<10);if(w){const j=[];e.left<w.left-2&&j.push("left"),e.right>w.right+2&&j.push("right"),e.top<w.top-2&&j.push("top"),e.bottom>w.bottom+2&&j.push("bottom"),j.length>0&&(c.container={label:s.label,edges:j},_=!0)}}return _?c:null}function ex(e,t){if(e.width/t>.85)return"full-width";const o=e.x+e.width/2,s=t/2,i=o-s,c=t*.08;return Math.abs(i)<c?"center":i<0?"left":"right"}function Km(e){switch(e){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function Gm(e,t={}){const n=[];e.above&&n.push(`Below \`${e.above.label}\`${e.above.gap>0?` (${e.above.gap}px gap)`:""}`),e.below&&n.push(`Above \`${e.below.label}\`${e.below.gap>0?` (${e.below.gap}px gap)`:""}`),t.includeLeftRight&&(e.left&&n.push(`Right of \`${e.left.label}\`${e.left.gap>0?` (${e.left.gap}px gap)`:""}`),e.right&&n.push(`Left of \`${e.right.label}\`${e.right.gap>0?` (${e.right.gap}px gap)`:""}`));const o=Km(e.alignment);return e.containedIn?n.push(`${o.charAt(0).toUpperCase()+o.slice(1)} in \`${e.containedIn.label}\``):n.push(`${o.charAt(0).toUpperCase()+o.slice(1)} in page`),t.includePixelRef&&t.pixelRef&&n.push(`Pixel ref: \`${t.pixelRef}\``),e.outOfBounds&&(e.outOfBounds.viewport&&n.push(`**Outside viewport** (${e.outOfBounds.viewport.join(", ")} edge${e.outOfBounds.viewport.length>1?"s":""})`),e.outOfBounds.container&&n.push(`**Outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")} edge${e.outOfBounds.container.edges.length>1?"s":""})`)),n}function tx(e,t,n){var i,c;const o=[];e.above&&o.push(`below \`${e.above.label}\``),e.below&&o.push(`above \`${e.below.label}\``),e.left&&o.push(`right of \`${e.left.label}\``),e.right&&o.push(`left of \`${e.right.label}\``),e.containedIn&&o.push(`inside \`${e.containedIn.label}\``),o.push(Km(e.alignment)),(i=e.outOfBounds)!=null&&i.viewport&&o.push(`**outside viewport** (${e.outOfBounds.viewport.join(", ")})`),(c=e.outOfBounds)!=null&&c.container&&o.push(`**outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")})`);const s=n?`, ${Math.round(n.width)}×${Math.round(n.height)}px`:"";return`at (${Math.round(t.x)}, ${Math.round(t.y)})${s}: ${o.join(", ")}`}var a_=15;function l_(e){if(e.length<2)return[];const t=[],n=new Set;for(let o=0;o<e.length;o++){if(n.has(o))continue;const s=[o];for(let i=o+1;i<e.length;i++)n.has(i)||Math.abs(e[o].rect.y-e[i].rect.y)<a_&&s.push(i);if(s.length>=2){const i=s.map(f=>e[f]);i.sort((f,w)=>f.rect.x-w.rect.x);const c=[];for(let f=0;f<i.length-1;f++)c.push(Math.round(i[f+1].rect.x-(i[f].rect.x+i[f].rect.width)));const _=Math.round(i.reduce((f,w)=>f+w.rect.y,0)/i.length);t.push({labels:i.map(f=>f.label),type:"row",sharedEdge:_,gaps:c,avgGap:c.length?Math.round(c.reduce((f,w)=>f+w,0)/c.length):0}),s.forEach(f=>n.add(f))}}for(let o=0;o<e.length;o++){if(n.has(o))continue;const s=[o];for(let i=o+1;i<e.length;i++)n.has(i)||Math.abs(e[o].rect.x-e[i].rect.x)<a_&&s.push(i);if(s.length>=2){const i=s.map(f=>e[f]);i.sort((f,w)=>f.rect.y-w.rect.y);const c=[];for(let f=0;f<i.length-1;f++)c.push(Math.round(i[f+1].rect.y-(i[f].rect.y+i[f].rect.height)));const _=Math.round(i.reduce((f,w)=>f+w.rect.x,0)/i.length);t.push({labels:i.map(f=>f.label),type:"column",sharedEdge:_,gaps:c,avgGap:c.length?Math.round(c.reduce((f,w)=>f+w,0)/c.length):0}),s.forEach(f=>n.add(f))}}return t}function nx(e){if(e.length<2)return[];const t=l_(e.map(c=>({label:c.label,rect:c.originalRect}))),n=l_(e.map(c=>({label:c.label,rect:c.currentRect}))),o=[],s=new Set;for(const c of t){const _=new Set(c.labels);let f=null,w=0;for(const j of n){const b=j.labels.filter(v=>_.has(v)).length;b>=2&&b>w&&(f=j,w=b)}if(f){const j=f.labels.filter(v=>_.has(v)),b=j.join(", ");if(f.type!==c.type){const v=c.type==="row"?"y":"x",E=f.type==="row"?"y":"x";o.push(`**${b}**: ${c.type} (${v}≈${c.sharedEdge}, ${c.avgGap}px gaps) → ${f.type} (${E}≈${f.sharedEdge}, ${f.avgGap}px gaps)`)}else if(Math.abs(c.sharedEdge-f.sharedEdge)>20||Math.abs(c.avgGap-f.avgGap)>5){const v=c.type==="row"?"y":"x",E=Math.abs(c.sharedEdge-f.sharedEdge)>20?` ${v}: ${c.sharedEdge} → ${f.sharedEdge}`:"",I=Math.abs(c.avgGap-f.avgGap)>5?` gaps: ${c.avgGap}px → ${f.avgGap}px`:"";o.push(`**${b}**: ${c.type} shifted —${E}${I}`)}j.forEach(v=>s.add(v))}else{const j=c.labels.join(", "),b=c.type==="row"?"y":"x";o.push(`**${j}**: ${c.type} (${b}≈${c.sharedEdge}) dissolved`),c.labels.forEach(v=>s.add(v))}}for(const c of n){if(c.labels.every(w=>s.has(w))||c.labels.filter(w=>!s.has(w)).length<2)continue;if(!t.some(w=>w.labels.filter(b=>c.labels.includes(b)).length>=2)){const w=c.type==="row"?"y":"x";o.push(`**${c.labels.join(", ")}**: new ${c.type} (${w}≈${c.sharedEdge}, ${c.avgGap}px gaps)`),c.labels.forEach(j=>s.add(j))}}const i=e.filter(c=>!s.has(c.label));if(i.length>=2){const c={};for(const _ of i){const f=Math.round(_.currentRect.x/5)*5;(c[f]??(c[f]=[])).push(_.label)}for(const[_,f]of Object.entries(c))f.length>=2&&o.push(`**${f.join(", ")}**: shared left edge at x≈${_}`)}return o}function qm(e){if(typeof document>"u")return{viewport:e,contentArea:null};const t=[],n=new Set,o=_=>{n.has(_)||_ instanceof HTMLElement&&(_.hasAttribute("data-feedback-toolbar")||Md.has(_.tagName.toLowerCase())||(n.add(_),t.push(_)))},s=document.querySelector("main");s&&o(s);const i=document.querySelector("[role='main']");i&&o(i);for(const _ of Array.from(document.body.children))if(o(_),_.children){for(const f of Array.from(_.children))if(o(f),f.children)for(const w of Array.from(f.children))o(w)}let c=null;for(const _ of t){const f=_.getBoundingClientRect();if(f.height<50)continue;const w=getComputedStyle(_);if(w.maxWidth&&w.maxWidth!=="none"&&w.maxWidth!=="0px"){(!c||f.width<c.rect.width)&&(c={el:_,rect:f});continue}!c&&f.width<e.width-20&&f.width>100&&(c={el:_,rect:f})}if(c){const{el:_,rect:f}=c;return{viewport:e,contentArea:{width:Math.round(f.width),left:Math.round(f.left),right:Math.round(f.right),centerX:Math.round(f.left+f.width/2),selector:Cs(_)}}}return{viewport:e,contentArea:null}}function rx(e){if(typeof document>"u")return null;const t=document.querySelector(e);if(!(t!=null&&t.parentElement))return null;const n=getComputedStyle(t.parentElement),o={parentDisplay:n.display,parentSelector:Cs(t.parentElement)};return n.display.includes("flex")&&(o.flexDirection=n.flexDirection),n.display.includes("grid")&&n.gridTemplateColumns!=="none"&&(o.gridCols=n.gridTemplateColumns),n.gap&&n.gap!=="normal"&&n.gap!=="0px"&&(o.gap=n.gap),o}function Jm(e,t){const n=t.contentArea,o=n?n.width:t.viewport.width,s=n?n.left:0,i=n?n.centerX:Math.round(t.viewport.width/2),c=Math.round(e.x-s),_=Math.round(s+o-(e.x+e.width)),f=(e.width/o*100).toFixed(1),w=e.x+e.width/2,j=Math.abs(w-i)<20,b=e.width/o>.95,v=[];return b?v.push("`width: 100%` of container"):v.push(`left \`${c}px\` in container, right \`${_}px\`, width \`${f}%\` (\`${Math.round(e.width)}px\`)`),j&&!b&&v.push("centered — `margin-inline: auto`"),v.join(" — ")}function Zm(e){const{viewport:t,contentArea:n}=e;let o=`### Reference Frame
`;if(o+=`- Viewport: \`${t.width}×${t.height}px\`
`,n){const s=n;o+=`- Content area: \`${s.width}px\` wide, left edge at \`x=${s.left}\`, right at \`x=${s.right}\` (\`${s.selector}\`)
`,o+=`- Pixel → CSS translation:
`,o+=`  - **Horizontal position in container**: \`element.x - ${s.left}\` → use as \`margin-left\` or \`left\`
`,o+=`  - **Width as % of container**: \`element.width / ${s.width} × 100\` → use as \`width: X%\`
`,o+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` → use as `margin-top` or `gap`\n",o+=`  - **Centered**: if \`|element.centerX - ${s.centerX}| < 20px\` → use \`margin-inline: auto\`
`}else o+=`- No distinct content container — elements positioned relative to full viewport
`,o+=`- Pixel → CSS translation:
`,o+=`  - **Width as % of viewport**: \`element.width / ${t.width} × 100\` → use as \`width: X%\`
`,o+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(t.width/2)}| < 20px\` → use \`margin-inline: auto\`
`;return o+=`
`,o}function ox(e){const t=rx(e);if(!t)return null;let n=`\`${t.parentDisplay}\``;return t.flexDirection&&(n+=`, flex-direction: \`${t.flexDirection}\``),t.gridCols&&(n+=`, grid-template-columns: \`${t.gridCols}\``),t.gap&&(n+=`, gap: \`${t.gap}\``),`Parent: ${n} (\`${t.parentSelector}\`)`}function c_(e,t,n,o="standard"){var Z,C,L,O;if(e.length===0)return"";const s=[...e].sort((A,q)=>Math.abs(A.y-q.y)<20?A.x-q.x:A.y-q.y);let i="";if(n!=null&&n.blankCanvas?(i+=`## Wireframe: New Page

`,n.wireframePurpose&&(i+=`> **Purpose:** ${n.wireframePurpose}
>
`),i+=`> ${e.length} component${e.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):i+=`## Design Layout

> ${e.length} component${e.length!==1?"s":""} placed

`,o==="compact")return i+=`### Components
`,s.forEach((A,q)=>{var J;const ae=((J=Er[A.type])==null?void 0:J.label)||A.type;i+=`${q+1}. **${ae}** — \`${Math.round(A.width)}×${Math.round(A.height)}px\` at \`(${Math.round(A.x)}, ${Math.round(A.y)})\`
`}),i;const c=qm(t);i+=Zm(c),i+=`### Components
`,s.forEach((A,q)=>{var me;const ae=((me=Er[A.type])==null?void 0:me.label)||A.type,J={x:A.x,y:A.y,width:A.width,height:A.height};i+=`${q+1}. **${ae}** — \`${Math.round(A.width)}×${Math.round(A.height)}px\` at \`(${Math.round(A.x)}, ${Math.round(A.y)})\`
`;const ce=Nd(J),te=Gm(ce,{includeLeftRight:o==="detailed"||o==="forensic"});for(const nt of te)i+=`   - ${nt}
`;const we=Jm(J,c);we&&(i+=`   - CSS: ${we}
`)}),i+=`
### Layout Analysis
`;const _=[];for(const A of s){const q=_.find(ae=>Math.abs(ae.y-A.y)<30);q?q.items.push(A):_.push({y:A.y,items:[A]})}if(_.sort((A,q)=>A.y-q.y),_.forEach((A,q)=>{A.items.sort((J,ce)=>J.x-ce.x);const ae=A.items.map(J=>{var ce;return((ce=Er[J.type])==null?void 0:ce.label)||J.type});if(A.items.length===1){const ce=A.items[0].width>t.width*.8;i+=`- Row ${q+1} (y≈${Math.round(A.y)}): ${ae[0]}${ce?" — full width":""}
`}else i+=`- Row ${q+1} (y≈${Math.round(A.y)}): ${ae.join(" | ")} — ${A.items.length} items side by side
`}),o==="detailed"||o==="forensic"){i+=`
### Spacing & Gaps
`;for(let A=0;A<s.length-1;A++){const q=s[A],ae=s[A+1],J=((Z=Er[q.type])==null?void 0:Z.label)||q.type,ce=((C=Er[ae.type])==null?void 0:C.label)||ae.type,se=Math.round(ae.y-(q.y+q.height)),te=Math.round(ae.x-(q.x+q.width));Math.abs(q.y-ae.y)<30?i+=`- ${J} → ${ce}: \`${te}px\` horizontal gap
`:i+=`- ${J} → ${ce}: \`${se}px\` vertical gap
`}if(o==="forensic"&&s.length>2){i+=`
### All Pairwise Gaps
`;for(let A=0;A<s.length;A++)for(let q=A+1;q<s.length;q++){const ae=s[A],J=s[q],ce=((L=Er[ae.type])==null?void 0:L.label)||ae.type,se=((O=Er[J.type])==null?void 0:O.label)||J.type,te=Math.round(J.y-(ae.y+ae.height)),we=Math.round(J.x-(ae.x+ae.width));i+=`- ${ce} ↔ ${se}: h=\`${we}px\` v=\`${te}px\`
`}}o==="forensic"&&(i+=`
### Z-Order (placement order)
`,e.forEach((A,q)=>{var J;const ae=((J=Er[A.type])==null?void 0:J.label)||A.type;i+=`${q}. ${ae} at \`(${Math.round(A.x)}, ${Math.round(A.y)})\`
`}))}i+=`
### Suggested Implementation
`;const f=s.some(A=>A.type==="navigation"),w=s.some(A=>A.type==="hero"),j=s.some(A=>A.type==="sidebar"),b=s.some(A=>A.type==="footer"),v=s.filter(A=>A.type==="card"),E=s.filter(A=>A.type==="form"),I=s.filter(A=>A.type==="table"),y=s.filter(A=>A.type==="modal");if(f&&(i+=`- Top navigation bar with logo + nav links + CTA
`),w&&(i+=`- Hero section with heading, subtext, and call-to-action
`),j&&(i+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),v.length>1?i+=`- ${v.length}-column card grid — use CSS Grid or Flexbox
`:v.length===1&&(i+=`- Card component with image + content area
`),E.length>0&&(i+=`- ${E.length} form${E.length>1?"s":""} — add proper labels, validation, and submit handling
`),I.length>0&&(i+=`- Data table — consider sortable columns and pagination
`),y.length>0&&(i+=`- Modal dialog — add overlay backdrop and focus trapping
`),b&&(i+=`- Multi-column footer with links
`),o==="detailed"||o==="forensic"){if(i+=`
### CSS Suggestions
`,j){const A=s.find(q=>q.type==="sidebar");i+=`- \`display: grid; grid-template-columns: ${Math.round(A.width)}px 1fr;\`
`}if(v.length>1){const A=Math.round(v[0].width);i+=`- \`display: grid; grid-template-columns: repeat(${v.length}, ${A}px); gap: 16px;\`
`}f&&(i+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return i}function u_(e,t="standard",n){const{sections:o}=e,s=[];for(const j of o){const b=j.originalRect,v=j.currentRect,E=Math.abs(b.x-v.x)>1||Math.abs(b.y-v.y)>1,I=Math.abs(b.width-v.width)>1||Math.abs(b.height-v.height)>1;if(!E&&!I){t==="forensic"&&s.push({section:j,posMoved:!1,sizeChanged:!1});continue}s.push({section:j,posMoved:E,sizeChanged:I})}if(s.length===0||t!=="forensic"&&s.every(j=>!j.posMoved&&!j.sizeChanged))return"";let i=`## Suggested Layout Changes

`;const c=n?n.width:typeof window<"u"?window.innerWidth:0,_=n?n.height:typeof window<"u"?window.innerHeight:0,f=qm({width:c,height:_});t!=="compact"&&(i+=Zm(f)),t==="forensic"&&(i+=`> Detected at: \`${new Date(e.detectedAt).toISOString()}\`
`,i+=`> Total sections: ${o.length}

`);const w=j=>o.map(b=>({label:b.label,selector:b.selector,rect:j==="original"?b.originalRect:b.currentRect}));i+=`**Changes:**
`;for(const{section:j,posMoved:b,sizeChanged:v}of s){const E=j.originalRect,I=j.currentRect;if(!b&&!v){i+=`- ${j.label} — unchanged at (${Math.round(I.x)}, ${Math.round(I.y)}) ${Math.round(I.width)}×${Math.round(I.height)}px
`;continue}if(t==="compact"){b&&v?i+=`- Suggested: move **${j.label}** to (${Math.round(I.x)}, ${Math.round(I.y)}) ${Math.round(I.width)}×${Math.round(I.height)}px
`:b?i+=`- Suggested: move **${j.label}** to (${Math.round(I.x)}, ${Math.round(I.y)})
`:i+=`- Suggested: resize **${j.label}** to ${Math.round(I.width)}×${Math.round(I.height)}px
`;continue}if(b&&v?i+=`- Suggested: move and resize **${j.label}**
`:b?i+=`- Suggested: move **${j.label}**
`:i+=`- Suggested: resize **${j.label}** from ${Math.round(E.width)}×${Math.round(E.height)}px to ${Math.round(I.width)}×${Math.round(I.height)}px
`,b){const Z=Nd(E,w("original")),C=Nd(I,w("current")),L=v?{width:E.width,height:E.height}:void 0;i+=`  - Currently ${tx(Z,{x:E.x,y:E.y},L)}
`;const O=v?{width:I.width,height:I.height}:void 0,A=`at (${Math.round(I.x)}, ${Math.round(I.y)})`,q=O?`, ${Math.round(O.width)}×${Math.round(O.height)}px`:"",J=Gm(C,{includeLeftRight:t==="detailed"||t==="forensic"});if(J.length>0){i+=`  - Suggested position ${A}${q}: ${J[0]}
`;for(let se=1;se<J.length;se++)i+=`    ${J[se]}
`}else i+=`  - Suggested position ${A}${q}
`;const ce=Jm(I,f);ce&&(i+=`  - CSS: ${ce}
`)}const y=ox(j.selector);if(y&&(i+=`  - ${y}
`),i+=`  - Selector: \`${j.selector}\`
`,t==="detailed"||t==="forensic"){const Z=j.className?`${j.tagName}.${j.className.split(" ")[0]}`:j.tagName;Z!==j.selector&&(i+=`  - Element: \`${Z}\`
`),j.role&&(i+=`  - Role: \`${j.role}\`
`),t==="forensic"&&j.textSnippet&&(i+=`  - Text: "${j.textSnippet}"
`)}t==="forensic"&&(i+=`  - Original rect: \`{ x: ${Math.round(E.x)}, y: ${Math.round(E.y)}, w: ${Math.round(E.width)}, h: ${Math.round(E.height)} }\`
`,i+=`  - Current rect: \`{ x: ${Math.round(I.x)}, y: ${Math.round(I.y)}, w: ${Math.round(I.width)}, h: ${Math.round(I.height)} }\`
`)}if(t!=="compact"){const j=s.filter(v=>v.posMoved).map(v=>({label:v.section.label,originalRect:v.section.originalRect,currentRect:v.section.currentRect})),b=nx(j);if(b.length>0){i+=`
### Layout Summary
`;for(const v of b)i+=`- ${v}
`}}if(t!=="compact"&&o.length>1){i+=`
### All Sections (current positions)
`;const j=[...o].sort((b,v)=>Math.abs(b.currentRect.y-v.currentRect.y)<20?b.currentRect.x-v.currentRect.x:b.currentRect.y-v.currentRect.y);for(const b of j){const v=b.currentRect,E=Math.abs(v.x-b.originalRect.x)>1||Math.abs(v.y-b.originalRect.y)>1||Math.abs(v.width-b.originalRect.width)>1||Math.abs(v.height-b.originalRect.height)>1;i+=`- ${b.label}: \`${Math.round(v.width)}×${Math.round(v.height)}px\` at \`(${Math.round(v.x)}, ${Math.round(v.y)})\`${E?" ← suggested":""}
`}}return i}var Ed="feedback-annotations-",eg=7;function kc(e){return`${Ed}${e}`}function wu(e){if(typeof window>"u")return[];try{const t=localStorage.getItem(kc(e));if(!t)return[];const n=JSON.parse(t),o=Date.now()-eg*24*60*60*1e3;return n.filter(s=>!s.timestamp||s.timestamp>o)}catch{return[]}}function tg(e,t){if(!(typeof window>"u"))try{localStorage.setItem(kc(e),JSON.stringify(t))}catch{}}function sx(){const e=new Map;if(typeof window>"u")return e;try{const t=Date.now()-eg*24*60*60*1e3;for(let n=0;n<localStorage.length;n++){const o=localStorage.key(n);if(o!=null&&o.startsWith(Ed)){const s=o.slice(Ed.length),i=localStorage.getItem(o);if(i){const _=JSON.parse(i).filter(f=>!f.timestamp||f.timestamp>t);_.length>0&&e.set(s,_)}}}}catch{}return e}function aa(e,t,n){const o=t.map(s=>({...s,_syncedTo:n}));tg(e,o)}var Mh="agentation-design-";function ix(e){if(typeof window>"u")return[];try{const t=localStorage.getItem(`${Mh}${e}`);return t?JSON.parse(t):[]}catch{return[]}}function ax(e,t){if(!(typeof window>"u"))try{localStorage.setItem(`${Mh}${e}`,JSON.stringify(t))}catch{}}function lx(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${Mh}${e}`)}catch{}}var Nh="agentation-rearrange-";function cx(e){if(typeof window>"u")return null;try{const t=localStorage.getItem(`${Nh}${e}`);return t?JSON.parse(t):null}catch{return null}}function ux(e,t){if(!(typeof window>"u"))try{localStorage.setItem(`${Nh}${e}`,JSON.stringify(t))}catch{}}function dx(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${Nh}${e}`)}catch{}}var Eh="agentation-wireframe-";function hx(e){if(typeof window>"u")return null;try{const t=localStorage.getItem(`${Eh}${e}`);return t?JSON.parse(t):null}catch{return null}}function d_(e,t){if(!(typeof window>"u"))try{localStorage.setItem(`${Eh}${e}`,JSON.stringify(t))}catch{}}function Tl(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${Eh}${e}`)}catch{}}var ng="agentation-session-";function Ih(e){return`${ng}${e}`}function fx(e){if(typeof window>"u")return null;try{return localStorage.getItem(Ih(e))}catch{return null}}function bu(e,t){if(!(typeof window>"u"))try{localStorage.setItem(Ih(e),t)}catch{}}function _x(e){if(!(typeof window>"u"))try{localStorage.removeItem(Ih(e))}catch{}}var rg=`${ng}toolbar-hidden`;function px(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(rg)==="1"}catch{return!1}}function mx(e){if(!(typeof window>"u"))try{e&&sessionStorage.setItem(rg,"1")}catch{}}async function ku(e,t){const n=await fetch(`${e}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})});if(!n.ok)throw new Error(`Failed to create session: ${n.status}`);return n.json()}async function h_(e,t){const n=await fetch(`${e}/sessions/${t}`);if(!n.ok)throw new Error(`Failed to get session: ${n.status}`);return n.json()}async function Ks(e,t,n){const o=await fetch(`${e}/sessions/${t}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!o.ok)throw new Error(`Failed to sync annotation: ${o.status}`);return o.json()}async function f_(e,t,n){const o=await fetch(`${e}/annotations/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!o.ok)throw new Error(`Failed to update annotation: ${o.status}`);return o.json()}async function Io(e,t){const n=await fetch(`${e}/annotations/${t}`,{method:"DELETE"});if(!n.ok)throw new Error(`Failed to delete annotation: ${n.status}`)}var Bt={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},__=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),p_=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],gx=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function yx(e){const t=(e==null?void 0:e.mode)??"filtered";let n=__;if(e!=null&&e.skipExact){const o=e.skipExact instanceof Set?e.skipExact:new Set(e.skipExact);n=new Set([...__,...o])}return{maxComponents:(e==null?void 0:e.maxComponents)??6,maxDepth:(e==null?void 0:e.maxDepth)??30,mode:t,skipExact:n,skipPatterns:e!=null&&e.skipPatterns?[...p_,...e.skipPatterns]:p_,userPatterns:(e==null?void 0:e.userPatterns)??gx,filter:e==null?void 0:e.filter}}function vx(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function xx(e,t=10){const n=new Set;let o=e,s=0;for(;o&&s<t;)o.className&&typeof o.className=="string"&&o.className.split(/\s+/).forEach(i=>{if(i.length>1){const c=i.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();c.length>1&&n.add(c)}}),o=o.parentElement,s++;return n}function wx(e,t){const n=vx(e);for(const o of t){if(o===n)return!0;const s=n.split("-").filter(c=>c.length>2),i=o.split("-").filter(c=>c.length>2);for(const c of s)for(const _ of i)if(c===_||c.includes(_)||_.includes(c))return!0}return!1}function bx(e,t,n,o){if(n.filter)return n.filter(e,t);switch(n.mode){case"all":return!0;case"filtered":return!(n.skipExact.has(e)||n.skipPatterns.some(s=>s.test(e)));case"smart":return n.skipExact.has(e)||n.skipPatterns.some(s=>s.test(e))?!1:!!(o&&wx(e,o)||n.userPatterns.some(s=>s.test(e)));default:return!0}}var Gs=null,kx=new WeakMap;function ju(e){return Object.keys(e).some(t=>t.startsWith("__reactFiber$")||t.startsWith("__reactInternalInstance$")||t.startsWith("__reactProps$"))}function jx(){if(Gs!==null)return Gs;if(typeof document>"u")return!1;if(document.body&&ju(document.body))return Gs=!0,!0;const e=["#root","#app","#__next","[data-reactroot]"];for(const t of e){const n=document.querySelector(t);if(n&&ju(n))return Gs=!0,!0}if(document.body){for(const t of document.body.children)if(ju(t))return Gs=!0,!0}return Gs=!1,!1}var la={map:kx};function Cx(e){return Object.keys(e).find(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$"))||null}function Sx(e){const t=Cx(e);return t?e[t]:null}function cs(e){return e?e.displayName?e.displayName:e.name?e.name:null:null}function Mx(e){var s;const{tag:t,type:n,elementType:o}=e;if(t===Bt.HostComponent||t===Bt.HostText||t===Bt.HostHoistable||t===Bt.HostSingleton||t===Bt.Fragment||t===Bt.Mode||t===Bt.Profiler||t===Bt.DehydratedFragment||t===Bt.HostRoot||t===Bt.HostPortal||t===Bt.ScopeComponent||t===Bt.OffscreenComponent||t===Bt.LegacyHiddenComponent||t===Bt.CacheComponent||t===Bt.TracingMarkerComponent||t===Bt.Throw||t===Bt.ViewTransitionComponent||t===Bt.ActivityComponent)return null;if(t===Bt.ForwardRef){const i=o;if(i!=null&&i.render){const c=cs(i.render);if(c)return c}return i!=null&&i.displayName?i.displayName:cs(n)}if(t===Bt.MemoComponent||t===Bt.SimpleMemoComponent){const i=o;if(i!=null&&i.type){const c=cs(i.type);if(c)return c}return i!=null&&i.displayName?i.displayName:cs(n)}if(t===Bt.ContextProvider){const i=n;return(s=i==null?void 0:i._context)!=null&&s.displayName?`${i._context.displayName}.Provider`:null}if(t===Bt.ContextConsumer){const i=n;return i!=null&&i.displayName?`${i.displayName}.Consumer`:null}if(t===Bt.LazyComponent){const i=o;return(i==null?void 0:i._status)===1&&i._result?cs(i._result):null}return t===Bt.SuspenseComponent||t===Bt.SuspenseListComponent?null:t===Bt.IncompleteClassComponent||t===Bt.IncompleteFunctionComponent||t===Bt.FunctionComponent||t===Bt.ClassComponent||t===Bt.IndeterminateComponent?cs(n):null}function Nx(e){return e.length<=2||e.length<=3&&e===e.toLowerCase()}function Ex(e,t){const n=yx(t),o=n.mode==="all";if(o){const f=la.map.get(e);if(f!==void 0)return f}if(!jx()){const f={path:null,components:[]};return o&&la.map.set(e,f),f}const s=n.mode==="smart"?xx(e):void 0,i=[];try{let f=Sx(e),w=0;for(;f&&w<n.maxDepth&&i.length<n.maxComponents;){const j=Mx(f);j&&!Nx(j)&&bx(j,w,n,s)&&i.push(j),f=f.return,w++}}catch{const f={path:null,components:[]};return o&&la.map.set(e,f),f}if(i.length===0){const f={path:null,components:[]};return o&&la.map.set(e,f),f}const _={path:i.slice().reverse().map(f=>`<${f}>`).join(" "),components:i};return o&&la.map.set(e,_),_}var ca={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function Ix(e){if(!e||typeof e!="object")return null;const t=Object.keys(e),n=t.find(i=>i.startsWith("__reactFiber$"));if(n)return e[n]||null;const o=t.find(i=>i.startsWith("__reactInternalInstance$"));if(o)return e[o]||null;const s=t.find(i=>{if(!i.startsWith("__react"))return!1;const c=e[i];return c&&typeof c=="object"&&"_debugSource"in c});return s&&e[s]||null}function Va(e){if(!e.type||typeof e.type=="string")return null;if(typeof e.type=="object"||typeof e.type=="function"){const t=e.type;if(t.displayName)return t.displayName;if(t.name)return t.name}return null}function Rx(e,t=50){var s;let n=e,o=0;for(;n&&o<t;){if(n._debugSource)return{source:n._debugSource,componentName:Va(n)};if((s=n._debugOwner)!=null&&s._debugSource)return{source:n._debugOwner._debugSource,componentName:Va(n._debugOwner)};n=n.return,o++}return null}function Px(e){let t=e,n=0;const o=50;for(;t&&n<o;){const s=t,i=["_debugSource","__source","_source","debugSource"];for(const c of i){const _=s[c];if(_&&typeof _=="object"&&"fileName"in _)return{source:_,componentName:Va(t)}}if(t.memoizedProps){const c=t.memoizedProps;if(c.__source&&typeof c.__source=="object"){const _=c.__source;if(_.fileName&&_.lineNumber)return{source:{fileName:_.fileName,lineNumber:_.lineNumber,columnNumber:_.columnNumber},componentName:Va(t)}}}t=t.return,n++}return null}var Al=new Map;function Lx(e){var s;const t=e.tag,n=e.type,o=e.elementType;if(typeof n=="string"||n==null||typeof n=="function"&&((s=n.prototype)!=null&&s.isReactComponent))return null;if((t===ca.FunctionComponent||t===ca.IndeterminateComponent)&&typeof n=="function")return n;if(t===ca.ForwardRef&&o){const i=o.render;if(typeof i=="function")return i}if((t===ca.MemoComponent||t===ca.SimpleMemoComponent)&&o){const i=o.type;if(typeof i=="function")return i}return typeof n=="function"?n:null}function Tx(){const e=O_,t=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(t&&"H"in t)return{get:()=>t.H,set:o=>{t.H=o}};const n=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(n){const o=n.ReactCurrentDispatcher;if(o&&"current"in o)return{get:()=>o.current,set:s=>{o.current=s}}}return null}function Ax(e){const t=e.split(`
`),n=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],o=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,s=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const i of t){const c=i.trim();if(!c||n.some(f=>f.test(c)))continue;const _=o.exec(c)||s.exec(c);if(_)return{fileName:_[1],line:parseInt(_[2],10),column:parseInt(_[3],10)}}return null}function $x(e){let t=e;return t=t.replace(/[?#].*$/,""),t=t.replace(/^turbopack:\/\/\/\[project\]\//,""),t=t.replace(/^webpack-internal:\/\/\/\.\//,""),t=t.replace(/^webpack-internal:\/\/\//,""),t=t.replace(/^webpack:\/\/\/\.\//,""),t=t.replace(/^webpack:\/\/\//,""),t=t.replace(/^turbopack:\/\/\//,""),t=t.replace(/^https?:\/\/[^/]+\//,""),t=t.replace(/^file:\/\/\//,"/"),t=t.replace(/^\([^)]+\)\/\.\//,""),t=t.replace(/^\.\//,""),t}function Dx(e){const t=Lx(e);if(!t)return null;if(Al.has(t))return Al.get(t);const n=Tx();if(!n)return Al.set(t,null),null;const o=n.get();let s=null;try{const i=new Proxy({},{get(){throw new Error("probe")}});n.set(i);try{t({})}catch(c){if(c instanceof Error&&c.message==="probe"&&c.stack){const _=Ax(c.stack);_&&(s={fileName:$x(_.fileName),lineNumber:_.line,columnNumber:_.column,componentName:Va(e)||void 0})}}}finally{n.set(o)}return Al.set(t,s),s}function Ox(e,t=15){let n=e,o=0;for(;n&&o<t;){const s=Dx(n);if(s)return s;n=n.return,o++}return null}function Id(e){const t=Ix(e);if(!t)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let n=Rx(t);if(n||(n=Px(t)),n!=null&&n.source)return{found:!0,source:{fileName:n.source.fileName,lineNumber:n.source.lineNumber,columnNumber:n.source.columnNumber,componentName:n.componentName||void 0},isReactApp:!0,isProduction:!1};const o=Ox(t);return o?{found:!0,source:o,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function Fx(e,t="path"){const{fileName:n,lineNumber:o,columnNumber:s}=e;let i=`${n}:${o}`;return s!==void 0&&(i+=`:${s}`),t==="vscode"?`vscode://file${n.startsWith("/")?"":"/"}${i}`:i}function Bx(e,t=10){let n=e,o=0;for(;n&&o<t;){const s=Id(n);if(s.found)return s;n=n.parentElement,o++}return Id(e)}var zx=`.styles-module__toolbar___wNsdK svg[fill=none],
.styles-module__markersLayer___-25j1 svg[fill=none],
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] {
  fill: none !important;
}
.styles-module__toolbar___wNsdK svg[fill=none] :not([fill]),
.styles-module__markersLayer___-25j1 svg[fill=none] :not([fill]),
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__controlsContent___9GJWU :where(button, input, select, textarea, label) {
  background: unset;
  border: unset;
  border-radius: unset;
  padding: unset;
  margin: unset;
  color: unset;
  font-family: unset;
  font-weight: unset;
  font-style: unset;
  line-height: unset;
  letter-spacing: unset;
  text-transform: unset;
  text-decoration: unset;
  box-shadow: unset;
  outline: unset;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__toolbarHide___y8kaT {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.styles-module__disableTransitions___EopxO :is(*, *::before, *::after) {
  transition: none !important;
}

.styles-module__toolbar___wNsdK {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 337px;
  z-index: 100000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0s, top 0s, right 0s, bottom 0s;
}

:where(.styles-module__toolbar___wNsdK) {
  bottom: 1.25rem;
  right: 1.25rem;
}

.styles-module__toolbarContainer___dIhma {
  position: relative;
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {
  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
  pointer-events: none;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {
  margin-top: -1px;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 1.5rem;
  padding: 0.375rem;
  width: 297px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 337px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {
  opacity: 0;
  pointer-events: none;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.4);
}

.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background-color: color-mix(in srgb, var(--agentation-color-blue) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
[data-agentation-theme=light] .styles-module__buttonBadge___NeFWb {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-yellow) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-yellow) 0%, transparent);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background-color 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background-color: var(--agentation-color-green);
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background-color: var(--agentation-color-red);
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transition-delay: 0s;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -0.375rem;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1), margin 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.125rem;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-accent) 50%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-accent) 4%, transparent);
  pointer-events: none !important;
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-green) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-blue) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-blue) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(255, 255, 255, 0.07);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___InP0r {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___NKlmo {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: var(--agentation-color-blue);
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
[data-agentation-theme=light] .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
  color: var(--agentation-color-blue);
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: var(--swatch);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___IodiY {
    background-color: var(--swatch-p3);
  }
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
  border-color: var(--swatch);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
    border-color: var(--swatch-p3);
  }
}

.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

.styles-module__customCheckbox___U39ax {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}
.styles-module__customCheckbox___U39ax svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
input[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}

.styles-module__toggleLabel___Xm8Aa {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
[data-agentation-theme=light] .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__toggleSwitch___l4Ygm {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.styles-module__toggleSwitch___l4Ygm input {
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn {
  background-color: var(--agentation-color-blue);
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn::before {
  transform: translateX(8px);
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw {
  opacity: 0.4;
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw .styles-module__toggleSlider___wprIn {
  cursor: not-allowed;
}

.styles-module__toggleSlider___wprIn {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border-radius: 16px;
  background: #484848;
}
[data-agentation-theme=light] .styles-module__toggleSlider___wprIn {
  background: #dddddd;
}
.styles-module__toggleSlider___wprIn::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__drawCanvas___7cG9U {
  position: fixed;
  inset: 0;
  z-index: 99996;
  pointer-events: none !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6 {
  pointer-events: auto !important;
  cursor: crosshair !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6[data-stroke-hover] {
  cursor: pointer !important;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-green) 8%, transparent);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--agentation-color-green);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--agentation-color-green) 6%, transparent);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
[data-agentation-theme=light] .styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}`,Wx={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(e)),e.textContent=zx}var xe=Wx,ua=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function m_(e,t,n="standard"){if(e.length===0)return"";const o=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let s=`## Page Feedback: ${t}
`;return n==="forensic"?(s+=`
**Environment:**
`,s+=`- Viewport: ${o}
`,typeof window<"u"&&(s+=`- URL: ${window.location.href}
`,s+=`- User Agent: ${navigator.userAgent}
`,s+=`- Timestamp: ${new Date().toISOString()}
`,s+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),s+=`
---
`):n!=="compact"&&(s+=`**Viewport:** ${o}
`),s+=`
`,e.forEach((i,c)=>{n==="compact"?(s+=`${c+1}. **${i.element}**${i.sourceFile?` (${i.sourceFile})`:""}: ${i.comment}`,i.selectedText&&(s+=` (re: "${i.selectedText.slice(0,30)}${i.selectedText.length>30?"...":""}")`),s+=`
`):n==="forensic"?(s+=`### ${c+1}. ${i.element}
`,i.isMultiSelect&&i.fullPath&&(s+=`*Forensic data shown for first element of selection*
`),i.fullPath&&(s+=`**Full DOM Path:** ${i.fullPath}
`),i.cssClasses&&(s+=`**CSS Classes:** ${i.cssClasses}
`),i.boundingBox&&(s+=`**Position:** x:${Math.round(i.boundingBox.x)}, y:${Math.round(i.boundingBox.y)} (${Math.round(i.boundingBox.width)}×${Math.round(i.boundingBox.height)}px)
`),s+=`**Annotation at:** ${i.x.toFixed(1)}% from left, ${Math.round(i.y)}px from top
`,i.selectedText&&(s+=`**Selected text:** "${i.selectedText}"
`),i.nearbyText&&!i.selectedText&&(s+=`**Context:** ${i.nearbyText.slice(0,100)}
`),i.computedStyles&&(s+=`**Computed Styles:** ${i.computedStyles}
`),i.accessibility&&(s+=`**Accessibility:** ${i.accessibility}
`),i.nearbyElements&&(s+=`**Nearby Elements:** ${i.nearbyElements}
`),i.sourceFile&&(s+=`**Source:** ${i.sourceFile}
`),i.reactComponents&&(s+=`**React:** ${i.reactComponents}
`),s+=`**Feedback:** ${i.comment}

`):(s+=`### ${c+1}. ${i.element}
`,s+=`**Location:** ${i.elementPath}
`,i.sourceFile&&(s+=`**Source:** ${i.sourceFile}
`),i.reactComponents&&(s+=`**React:** ${i.reactComponents}
`),n==="detailed"&&(i.cssClasses&&(s+=`**Classes:** ${i.cssClasses}
`),i.boundingBox&&(s+=`**Position:** ${Math.round(i.boundingBox.x)}px, ${Math.round(i.boundingBox.y)}px (${Math.round(i.boundingBox.width)}×${Math.round(i.boundingBox.height)}px)
`)),i.selectedText&&(s+=`**Selected text:** "${i.selectedText}"
`),n==="detailed"&&i.nearbyText&&!i.selectedText&&(s+=`**Context:** ${i.nearbyText.slice(0,100)}
`),s+=`**Feedback:** ${i.comment}

`)}),s.trim()}var Hx=`@keyframes styles-module__markerIn___x4G8D {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___6VhQN {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__tooltipIn___aJslQ {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(2px) scale(0.891);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(0.909);
  }
}
@keyframes styles-module__renumberRoll___akV9B {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__marker___9CKF7 {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___9CKF7:hover {
  z-index: 2;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___9CKF7.styles-module__enter___8kI3q {
  animation: styles-module__markerIn___x4G8D 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___9CKF7.styles-module__exit___KBdR3 {
  animation: styles-module__markerOut___6VhQN 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7.styles-module__clearing___8rM7K {
  animation: styles-module__markerOut___6VhQN 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___9CKF7.styles-module__fixed___aKrQO {
  position: fixed;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___9CKF7.styles-module__hovered___-mg2N {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___16lvD {
  display: block;
  animation: styles-module__renumberRoll___akV9B 0.2s ease-out;
}

.styles-module__markerTooltip___-VUm- {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___-VUm-.styles-module__enter___8kI3q {
  animation: styles-module__tooltipIn___aJslQ 0.1s ease-out forwards;
}

.styles-module__markerQuote___tQake {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___Rh4eI {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- {
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerQuote___tQake {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerNote___Rh4eI {
  color: rgba(0, 0, 0, 0.85);
}`,Ux={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-annotation-marker-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(e)),e.textContent=Hx}var un=Ux;function g_({annotation:e,globalIndex:t,layerIndex:n,layerSize:o,isExiting:s,isClearing:i,isAnimated:c,isHovered:_,isDeleting:f,isEditingAny:w,renumberFrom:j,markerClickBehavior:b,tooltipStyle:v,onHoverEnter:E,onHoverLeave:I,onClick:y,onContextMenu:Z}){const C=(_||f)&&!w,L=C&&b==="delete",O=e.isMultiSelect,A=O?"var(--agentation-color-green)":"var(--agentation-color-accent)",q=s?un.exit:i?un.clearing:c?"":un.enter,ae=s?`${(o-1-n)*20}ms`:`${n*20}ms`;return r.jsxs("div",{className:`${un.marker} ${O?un.multiSelect:""} ${q} ${L?un.hovered:""}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y,backgroundColor:L?void 0:A,animationDelay:ae},onMouseEnter:()=>E(e),onMouseLeave:I,onClick:J=>{J.stopPropagation(),s||y(e)},onContextMenu:Z?J=>{b==="delete"&&(J.preventDefault(),J.stopPropagation(),s||Z(e))}:void 0,children:[C?L?r.jsx(Wm,{size:O?18:16}):r.jsx(r1,{size:16}):r.jsx("span",{className:j!==null&&t>=j?un.renumber:void 0,children:t+1}),_&&!w&&r.jsxs("div",{className:`${un.markerTooltip} ${un.enter}`,style:v,children:[r.jsxs("span",{className:un.markerQuote,children:[e.element,e.selectedText&&` "${e.selectedText.slice(0,30)}${e.selectedText.length>30?"...":""}"`]}),r.jsx("span",{className:un.markerNote,children:e.comment})]})]})}function Vx({x:e,y:t,isMultiSelect:n,isExiting:o}){return r.jsx("div",{className:`${un.marker} ${un.pending} ${n?un.multiSelect:""} ${o?un.exit:un.enter}`,style:{left:`${e}%`,top:t,backgroundColor:n?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:r.jsx(Vy,{size:12})})}function y_({annotation:e,fixed:t}){const n=e.isMultiSelect;return r.jsx("div",{className:`${un.marker} ${t?un.fixed:""} ${un.hovered} ${n?un.multiSelect:""} ${un.exit}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y},children:r.jsx(Wm,{size:n?12:10})})}var Yx=`.styles-module__switchContainer___Ka-AB {
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px;
  width: 24px;
  height: 16px;
  border-radius: 8px;
  background-color: #cdcdcd;
  transition: background-color 0.15s, opacity 0.15s;
}
[data-agentation-theme=dark] .styles-module__switchContainer___Ka-AB {
  background-color: #484848;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) {
  background-color: var(--agentation-color-blue);
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:disabled) {
  opacity: 0.3;
}

.styles-module__switchInput___kYDSD {
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}
.styles-module__switchInput___kYDSD:disabled {
  cursor: not-allowed;
}

.styles-module__switchThumb___4sCPH {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transition: transform 0.15s;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) .styles-module__switchThumb___4sCPH {
  transform: translateX(8px);
}`,Xx={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-switch-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-switch-styles",document.head.appendChild(e)),e.textContent=Yx}var Cu=Xx,Su=({className:e="",...t})=>r.jsxs("div",{className:`${Cu.switchContainer} ${e}`,children:[r.jsx("input",{className:Cu.switchInput,type:"checkbox",...t}),r.jsx("div",{className:Cu.switchThumb})]}),Qx=`.styles-module__checkboxContainer___joqZk {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 4px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  transition: background-color 0.2s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk {
  border-color: rgba(255, 255, 255, 0.2);
  background-color: #252525;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #1a1a1a;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #fff;
}

.styles-module__checkboxInput___ECzzO {
  position: absolute;
  z-index: 1;
  inset: -1px;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}

.styles-module__checkboxCheck___fUXpr {
  color: #fafafa;
}
[data-agentation-theme=dark] .styles-module__checkboxCheck___fUXpr {
  color: #1a1a1a;
}

.styles-module__checkboxCheckPath___cDyh8 {
  stroke-dasharray: 9.29px;
  stroke-dashoffset: 9.29px;
  color: #fafafa;
  transition: stroke-dashoffset 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxCheckPath___cDyh8 {
  color: #1a1a1a;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) .styles-module__checkboxCheckPath___cDyh8 {
  transition-duration: 0.2s;
  stroke-dashoffset: 0;
}`,Kx={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-checkbox-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(e)),e.textContent=Qx}var $l=Kx,Gx=({className:e="",...t})=>r.jsxs("div",{className:`${$l.checkboxContainer} ${e}`,children:[r.jsx("input",{className:$l.checkboxInput,type:"checkbox",...t}),r.jsx("svg",{className:$l.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:r.jsx("path",{className:$l.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),qx=`.styles-module__container___w8eAF {
  display: flex;
  align-items: center;
  height: 24px;
}

.styles-module__label___J5mxE {
  padding-inline: 8px 2px;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.15px;
  color: rgba(26, 26, 26, 0.5);
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__label___J5mxE {
  color: rgba(255, 255, 255, 0.5);
}`,Jx={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-checkbox-field-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(e)),e.textContent=qx}var v_=Jx,x_=({className:e="",label:t,tooltip:n,checked:o,onChange:s,...i})=>{const c=N.useId();return r.jsxs("div",{className:`${v_.container} ${e}`,...i,children:[r.jsx(Gx,{id:c,onChange:s,checked:o}),r.jsx("label",{className:v_.label,htmlFor:c,children:t}),n&&r.jsx(_s,{content:n})]})},Zx=`@keyframes styles-module__cycleTextIn___VBNTi {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes styles-module__scaleIn___QpQ8E {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__mcpPulse___5Q3Jj {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___VHxhx {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
@keyframes styles-module__themeIconIn___qUWMV {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.styles-module__settingsPanel___qNkn- {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 16px;
  padding: 12px 0;
  width: 100%;
  max-width: 253px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___qNkn-::before, .styles-module__settingsPanel___qNkn-::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___qNkn-::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn-::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrandSlash___Q-AU9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4,
.styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ,
.styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3,
.styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY,
.styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8,
.styles-module__settingsPanel___qNkn- .styles-module__sliderLabel___6K5v1,
.styles-module__settingsPanel___qNkn- .styles-module__slider___v5z-c,
.styles-module__settingsPanel___qNkn- .styles-module__themeToggle___3imlT {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__enter___wginS {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__exit___A4iJc {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH- {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-.styles-module__selected___k1-Vq {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__settingsPanelContainer___5it-H {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 16px;
}

.styles-module__settingsPage___BMn-3 {
  min-width: 100%;
  flex-basis: 0;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___BMn-3.styles-module__slideLeft___qUvW4 {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 0 16px 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0.styles-module__slideIn___uXDSu {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsHeader___Fn1DP {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
}

.styles-module__settingsBrand___OoKlM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___Q-AU9 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___rXmL9 {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__themeToggle___3imlT {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 8px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease;
  cursor: pointer;
}
.styles-module__themeToggle___3imlT:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___pyaYa {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___w7lAm {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___qUWMV 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.styles-module__settingsSectionGrow___eZTRw {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___y-tDE {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___y-tDE.styles-module__settingsRowMarginTop___uLpGb {
  margin-top: 8px;
}

.styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.2);
}

.styles-module__settingsLabel___VCVOQ {
  display: flex;
  align-items: center;
  column-gap: 2px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.15px;
  color: rgba(255, 255, 255, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__cycleButton___XMBx3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___XMBx3:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__cycleButtonText___mbbnD {
  display: inline-block;
  animation: styles-module__cycleTextIn___VBNTi 0.2s ease-out;
}

.styles-module__cycleDots___ehp6i {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___zgSXY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__colorOptions___pbxZx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  height: 26px;
}

.styles-module__colorOption___Co955 {
  padding: 0;
  position: relative;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__colorOption___Co955 {
  background-color: #1a1a1a;
}
.styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: var(--swatch);
  transition: opacity 0.2s, transform 0.2s;
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
    --color: var(--swatch-p3);
  }
}
.styles-module__colorOption___Co955::after {
  z-index: -1;
  transform: scale(1.2);
  opacity: 0;
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::before {
  transform: scale(0.8);
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::after {
  opacity: 1;
}

.styles-module__settingsNavLink___uYIwM {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s ease;
  cursor: pointer;
}
.styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___uYIwM svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___uYIwM:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(0, 0, 0, 0.8);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___XBUzC {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__settingsBackButton___fflll {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___fflll {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___Avra9 {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___Avra9 {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___vFTmJ {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___vFTmJ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___cG7OI {
  color: rgba(255, 255, 255, 0.8);
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___cG7OI:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendContainer___VpkXk {
  display: flex;
  align-items: center;
}

.styles-module__autoSendLabel___ngNdC {
  padding-inline-end: 8px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s, opacity 0.15s;
  cursor: pointer;
}
.styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: var(--agentation-color-blue);
}
.styles-module__autoSendLabel___ngNdC.styles-module__disabled___9AZYS {
  opacity: 0.3;
  cursor: not-allowed;
}

.styles-module__mcpStatusDot___8AMxP {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__disconnected___mvmvQ {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___VHxhx 2s infinite;
}

.styles-module__mcpNavIndicator___auBHI {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s ease-in-out infinite;
}

.styles-module__webhookUrlInput___WDDDC {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM {
  color: #E5484D;
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8:hover {
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__checkboxField___ZrSqv:not(:first-child) {
  margin-top: 8px;
}

.styles-module__divider___h6Yux {
  margin-block: 8px;
  width: 100%;
  height: 1px;
  background-color: rgba(26, 26, 26, 0.07);
}
[data-agentation-theme=dark] .styles-module__divider___h6Yux {
  background-color: rgba(255, 255, 255, 0.07);
}`,ew={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-settings-panel-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(e)),e.textContent=Zx}var et=ew;function tw({settings:e,onSettingsChange:t,isDarkMode:n,onToggleTheme:o,isDevMode:s,connectionStatus:i,endpoint:c,isVisible:_,toolbarNearBottom:f,settingsPage:w,onSettingsPageChange:j,onHideToolbar:b}){var v;return r.jsx("div",{className:`${et.settingsPanel} ${_?et.enter:et.exit}`,style:f?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:r.jsxs("div",{className:et.settingsPanelContainer,children:[r.jsxs("div",{className:`${et.settingsPage} ${w==="automations"?et.slideLeft:""}`,children:[r.jsxs("div",{className:et.settingsHeader,children:[r.jsx("a",{className:et.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:r.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),r.jsxs("p",{className:et.settingsVersion,children:["v","3.0.2"]}),r.jsx("button",{className:et.themeToggle,onClick:o,title:n?"Switch to light mode":"Switch to dark mode",children:r.jsx("span",{className:et.themeIconWrapper,children:r.jsx("span",{className:et.themeIcon,children:n?r.jsx(t1,{size:20}):r.jsx(n1,{size:20})},n?"sun":"moon")})})]}),r.jsx("div",{className:et.divider}),r.jsxs("div",{className:et.settingsSection,children:[r.jsxs("div",{className:et.settingsRow,children:[r.jsxs("div",{className:et.settingsLabel,children:["Output Detail",r.jsx(_s,{content:"Controls how much detail is included in the copied output"})]}),r.jsxs("button",{className:et.cycleButton,onClick:()=>{const I=(ua.findIndex(y=>y.value===e.outputDetail)+1)%ua.length;t({outputDetail:ua[I].value})},children:[r.jsx("span",{className:et.cycleButtonText,children:(v=ua.find(E=>E.value===e.outputDetail))==null?void 0:v.label},e.outputDetail),r.jsx("span",{className:et.cycleDots,children:ua.map(E=>r.jsx("span",{className:`${et.cycleDot} ${e.outputDetail===E.value?et.active:""}`},E.value))})]})]}),r.jsxs("div",{className:`${et.settingsRow} ${et.settingsRowMarginTop} ${s?"":et.settingsRowDisabled}`,children:[r.jsxs("div",{className:et.settingsLabel,children:["React Components",r.jsx(_s,{content:s?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),r.jsx(Su,{checked:s&&e.reactEnabled,onChange:E=>t({reactEnabled:E.target.checked}),disabled:!s})]}),r.jsxs("div",{className:`${et.settingsRow} ${et.settingsRowMarginTop}`,children:[r.jsxs("div",{className:et.settingsLabel,children:["Hide Until Restart",r.jsx(_s,{content:"Hides the toolbar until you open a new tab"})]}),r.jsx(Su,{checked:!1,onChange:E=>{E.target.checked&&b()}})]})]}),r.jsx("div",{className:et.divider}),r.jsxs("div",{className:et.settingsSection,children:[r.jsx("div",{className:`${et.settingsLabel} ${et.settingsLabelMarker}`,children:"Marker Color"}),r.jsx("div",{className:et.colorOptions,children:Ma.map(E=>r.jsx("button",{className:`${et.colorOption} ${e.annotationColorId===E.id?et.selected:""}`,style:{"--swatch":E.srgb,"--swatch-p3":E.p3},onClick:()=>t({annotationColorId:E.id}),title:E.label,type:"button"},E.id))})]}),r.jsx("div",{className:et.divider}),r.jsxs("div",{className:et.settingsSection,children:[r.jsx(x_,{className:"checkbox-field",label:"Clear on copy/send",checked:e.autoClearAfterCopy,onChange:E=>t({autoClearAfterCopy:E.target.checked}),tooltip:"Automatically clear annotations after copying"}),r.jsx(x_,{className:et.checkboxField,label:"Block page interactions",checked:e.blockInteractions,onChange:E=>t({blockInteractions:E.target.checked})})]}),r.jsx("div",{className:et.divider}),r.jsxs("button",{className:et.settingsNavLink,onClick:()=>j("automations"),children:[r.jsx("span",{children:"Manage MCP & Webhooks"}),r.jsxs("span",{className:et.settingsNavLinkRight,children:[c&&i!=="disconnected"&&r.jsx("span",{className:`${et.mcpNavIndicator} ${et[i]}`}),r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),r.jsxs("div",{className:`${et.settingsPage} ${et.automationsPage} ${w==="automations"?et.slideIn:""}`,children:[r.jsxs("button",{className:et.settingsBackButton,onClick:()=>j("main"),children:[r.jsx(s1,{size:16}),r.jsx("span",{children:"Manage MCP & Webhooks"})]}),r.jsx("div",{className:et.divider}),r.jsxs("div",{className:et.settingsSection,children:[r.jsxs("div",{className:et.settingsRow,children:[r.jsxs("span",{className:et.automationHeader,children:["MCP Connection",r.jsx(_s,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),c&&r.jsx("div",{className:`${et.mcpStatusDot} ${et[i]}`,title:i==="connected"?"Connected":i==="connecting"?"Connecting...":"Disconnected"})]}),r.jsxs("p",{className:et.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",r.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:et.learnMoreLink,children:"Learn more"})]})]}),r.jsx("div",{className:et.divider}),r.jsxs("div",{className:`${et.settingsSection} ${et.settingsSectionGrow}`,children:[r.jsxs("div",{className:et.settingsRow,children:[r.jsxs("span",{className:et.automationHeader,children:["Webhooks",r.jsx(_s,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),r.jsxs("div",{className:et.autoSendContainer,children:[r.jsx("label",{htmlFor:"agentation-auto-send",className:`${et.autoSendLabel} ${e.webhooksEnabled?et.active:""} ${e.webhookUrl?"":et.disabled}`,children:"Auto-Send"}),r.jsx(Su,{id:"agentation-auto-send",checked:e.webhooksEnabled,onChange:E=>t({webhooksEnabled:E.target.checked}),disabled:!e.webhookUrl})]})]}),r.jsx("p",{className:et.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),r.jsx("textarea",{className:et.webhookUrlInput,placeholder:"Webhook URL",value:e.webhookUrl,onKeyDown:E=>E.stopPropagation(),onChange:E=>t({webhookUrl:E.target.value})})]})]})]})})}function Mu(e,t="filtered"){const{name:n,path:o}=mi(e);if(t==="off")return{name:n,elementName:n,path:o,reactComponents:null};const s=Ex(e,{mode:t});return{name:s.path?`${s.path} ${n}`:n,elementName:n,path:o,reactComponents:s.path}}var w_=!1,Nu={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},Xr=e=>{if(!e||!e.trim())return!1;try{const t=new URL(e.trim());return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}},Ma=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],nw=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const e=document.createElement("style");e.id="agentation-color-tokens",e.textContent=[...Ma.map(t=>`
      [data-agentation-accent="${t.id}"] {
        --agentation-color-accent: ${t.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${t.id}"] {
          --agentation-color-accent: ${t.p3};
        }
      }
    `),`:root {
      ${Ma.map(t=>`--agentation-color-${t.id}: ${t.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${Ma.map(t=>`--agentation-color-${t.id}: ${t.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(e)};nw();function us(e,t){let n=document.elementFromPoint(e,t);if(!n)return null;for(;n!=null&&n.shadowRoot;){const o=n.shadowRoot.elementFromPoint(e,t);if(!o||o===n)break;n=o}return n}function Eu(e){let t=e;for(;t&&t!==document.body;){const o=window.getComputedStyle(t).position;if(o==="fixed"||o==="sticky")return!0;t=t.parentElement}return!1}function ds(e){return e.status!=="resolved"&&e.status!=="dismissed"}function Dl(e){const t=Id(e),n=t.found?t:Bx(e);if(n.found&&n.source)return Fx(n.source,"path")}function rw({demoAnnotations:e,demoDelay:t=1e3,enableDemoMode:n=!1,onAnnotationAdd:o,onAnnotationDelete:s,onAnnotationUpdate:i,onAnnotationsClear:c,onCopy:_,onSubmit:f,copyToClipboard:w=!0,endpoint:j,sessionId:b,onSessionCreated:v,webhookUrl:E,className:I}={}){var Ui,Vi,Yi,Xi,is,Qi;const[y,Z]=N.useState(!1),[C,L]=N.useState([]),[O,A]=N.useState(!0),[q,ae]=N.useState(()=>px()),[J,ce]=N.useState(!1),se=N.useRef(null);N.useEffect(()=>{const S=z=>{const F=se.current;F&&F.contains(z.target)&&z.stopPropagation()},T=["mousedown","click","pointerdown"];return T.forEach(z=>document.body.addEventListener(z,S)),()=>{T.forEach(z=>document.body.removeEventListener(z,S))}},[]);const[te,we]=N.useState(!1),[me,nt]=N.useState(!1),[rt,ft]=N.useState(null),[Re,yt]=N.useState({x:0,y:0}),[G,pe]=N.useState(null),[Ee,Ge]=N.useState(!1),[qe,St]=N.useState("idle"),[$t,Qe]=N.useState(!1),[ut,Xt]=N.useState(!1),[Mt,en]=N.useState(null),[Dt,K]=N.useState(null),[fe,ie]=N.useState([]),[Y,ne]=N.useState(null),[de,ye]=N.useState(null),[W,ee]=N.useState(null),[Fe,De]=N.useState(null),[Ne,Pe]=N.useState([]),[$e,Ze]=N.useState(0),[g,u]=N.useState(!1),[d,m]=N.useState(!1),[k,R]=N.useState(!1),[$,re]=N.useState(!1),[ue,Q]=N.useState(!1),[je,be]=N.useState("main"),[it,ze]=N.useState(!1),[Le,pt]=N.useState(!1),[vt,Ct]=N.useState(!1),[Me,st]=N.useState([]),[ct,at]=N.useState(null),Ke=N.useRef(!1),[Ce,bt]=N.useState(!1),[Wt,ln]=N.useState(!1),[yn,dr]=N.useState(1),[hr,He]=N.useState("new-page"),[Gt,er]=N.useState(""),[Hn,Un]=N.useState(!1),[Ye,Tn]=N.useState(null),vo=N.useRef(!1),Ns=N.useRef({rearrange:null,placements:[]}),Ar=N.useRef({rearrange:null,placements:[]}),[Es,Ni]=N.useState(0),[$r,Za]=N.useState(0),[Bc,Ei]=N.useState(0),[Ii,Ri]=N.useState(0),Jr=N.useRef(new Set),Vn=N.useRef(new Set),Nn=N.useRef(null),xo=N.useRef(),el=Le&&y&&!vt&&Ce;N.useEffect(()=>{if(el){ln(!1);const S=ci(()=>{ln(!0)});return()=>cancelAnimationFrame(S)}else ln(!1)},[el]);const Dr=N.useRef(new Map),wo=N.useRef(new Map),bo=N.useRef(),[kn,Is]=N.useState(!1),[hn,Pi]=N.useState([]),qo=N.useRef(hn);qo.current=hn;const[Zr,tl]=N.useState(null),tr=N.useRef(null);N.useRef(!1),N.useRef([]),N.useRef(0),N.useRef(null),N.useRef(null),N.useRef(1);const[mt,Yn]=N.useState(!1),jn=N.useRef(null),[nn,eo]=N.useState([]),nr=N.useRef({cmd:!1,shift:!1}),Et=()=>{ze(!0)},Jo=()=>{ze(!1)},Li=()=>{mt||(jn.current=_t(()=>Yn(!0),850))},Zo=()=>{jn.current&&(clearTimeout(jn.current),jn.current=null),Yn(!1),Jo()};N.useEffect(()=>()=>{jn.current&&clearTimeout(jn.current)},[]);const[wt,Ti]=N.useState(()=>{try{const S=JSON.parse(localStorage.getItem("feedback-toolbar-settings")??"");return{...Nu,...S,annotationColorId:Ma.find(T=>T.id===S.annotationColorId)?S.annotationColorId:Nu.annotationColorId}}catch{return Nu}}),[vn,Ai]=N.useState(!0),[ko,es]=N.useState(!1),$i=()=>{var S;(S=se.current)==null||S.classList.add(xe.disableTransitions),Ai(T=>!T),ci(()=>{var T;(T=se.current)==null||T.classList.remove(xe.disableTransitions)})},nl=!1,Or="off",[cn,to]=N.useState(b??null),ts=N.useRef(!1),[xn,fr]=N.useState(j?"connecting":"disconnected"),[Ot,no]=N.useState(null),[Xn,ns]=N.useState(!1),[fn,rl]=N.useState(null),Qn=N.useRef(!1),[Rs,Fr]=N.useState(new Set),[Ps,jo]=N.useState(new Set),[rs,Ls]=N.useState(!1),[Ts,Co]=N.useState(!1),[br,ol]=N.useState(!1),kr=N.useRef(null),rr=N.useRef(null),Br=N.useRef(null),So=N.useRef(null),Mo=N.useRef(!1),sl=N.useRef(0),As=N.useRef(null),pn=N.useRef(null),$s=8,jr=50,il=N.useRef(null),os=N.useRef(null),zr=N.useRef(null),dt=typeof window<"u"?window.location.pathname:"/";N.useEffect(()=>{if($)Q(!0);else{ze(!1),be("main");const S=_t(()=>Q(!1),0);return()=>clearTimeout(S)}},[$]);const Ds=y&&O&&!Le;N.useEffect(()=>{if(Ds){nt(!1),we(!0),Fr(new Set);const S=_t(()=>{Fr(T=>{const z=new Set(T);return C.forEach(F=>z.add(F.id)),z})},350);return()=>clearTimeout(S)}else if(te){nt(!0);const S=_t(()=>{we(!1),nt(!1)},250);return()=>clearTimeout(S)}},[Ds]),N.useEffect(()=>{m(!0),Ze(window.scrollY);const S=wu(dt);L(S.filter(ds)),w_||(es(!0),w_=!0,_t(()=>es(!1),750));try{const T=localStorage.getItem("feedback-toolbar-theme");T!==null&&Ai(T==="dark")}catch{}try{const T=localStorage.getItem("feedback-toolbar-position");if(T){const z=JSON.parse(T);typeof z.x=="number"&&typeof z.y=="number"&&no(z)}}catch{}},[dt]),N.useEffect(()=>{d&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(wt))},[wt,d]),N.useEffect(()=>{d&&localStorage.setItem("feedback-toolbar-theme",vn?"dark":"light")},[vn,d]);const Os=N.useRef(!1);N.useEffect(()=>{const S=Os.current;Os.current=Xn,S&&!Xn&&Ot&&d&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(Ot))},[Xn,Ot,d]),N.useEffect(()=>{if(!j||!d||ts.current)return;ts.current=!0,fr("connecting"),(async()=>{try{const T=fx(dt),z=b||T;let F=!1;if(z)try{const U=await h_(j,z);to(U.id),fr("connected"),bu(dt,U.id),F=!0;const oe=wu(dt),ke=new Set(U.annotations.map(Be=>Be.id)),Oe=oe.filter(Be=>!ke.has(Be.id));if(Oe.length>0){const ot=`${typeof window<"u"?window.location.origin:""}${dt}`,ht=(await Promise.allSettled(Oe.map(a=>Ks(j,U.id,{...a,sessionId:U.id,url:ot})))).map((a,l)=>a.status==="fulfilled"?a.value:(console.warn("[Agentation] Failed to sync annotation:",a.reason),Oe[l])),jt=[...U.annotations,...ht];L(jt.filter(ds)),aa(dt,jt.filter(ds),U.id)}else L(U.annotations.filter(ds)),aa(dt,U.annotations.filter(ds),U.id)}catch(U){console.warn("[Agentation] Could not join session, creating new:",U),_x(dt)}if(!F){const U=typeof window<"u"?window.location.href:"/",oe=await ku(j,U);to(oe.id),fr("connected"),bu(dt,oe.id),v==null||v(oe.id);const ke=sx(),Oe=typeof window<"u"?window.location.origin:"",Be=[];for(const[ot,lt]of ke){const ht=lt.filter(l=>!l._syncedTo);if(ht.length===0)continue;const jt=`${Oe}${ot}`,a=ot===dt;Be.push((async()=>{try{const l=a?oe:await ku(j,jt),x=(await Promise.allSettled(ht.map(M=>Ks(j,l.id,{...M,sessionId:l.id,url:jt})))).map((M,B)=>M.status==="fulfilled"?M.value:(console.warn("[Agentation] Failed to sync annotation:",M.reason),ht[B])).filter(ds);if(aa(ot,x,l.id),a){const M=new Set(ht.map(B=>B.id));L(B=>{const D=B.filter(X=>!M.has(X.id));return[...x,...D]})}}catch(l){console.warn(`[Agentation] Failed to sync annotations for ${ot}:`,l)}})())}await Promise.allSettled(Be)}}catch(T){fr("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",T)}})()},[j,b,d,v,dt]),N.useEffect(()=>{if(!j||!d)return;const S=async()=>{try{(await fetch(`${j}/health`)).ok?fr("connected"):fr("disconnected")}catch{fr("disconnected")}};S();const T=l1(S,1e4);return()=>clearInterval(T)},[j,d]),N.useEffect(()=>{if(!j||!d||!cn)return;const S=new EventSource(`${j}/sessions/${cn}/events`),T=["resolved","dismissed"],z=F=>{var U;try{const oe=JSON.parse(F.data);if(T.includes((U=oe.payload)==null?void 0:U.status)){const ke=oe.payload.id,Oe=oe.payload.kind;if(Oe==="placement"){for(const[Be,ot]of Dr.current)if(ot===ke){Dr.current.delete(Be),st(lt=>lt.filter(ht=>ht.id!==Be));break}}else if(Oe==="rearrange"){for(const[Be,ot]of wo.current)if(ot===ke){wo.current.delete(Be),Tn(lt=>{if(!lt)return null;const ht=lt.sections.filter(jt=>jt.id!==Be);return ht.length===0?null:{...lt,sections:ht}});break}}else jo(Be=>new Set(Be).add(ke)),_t(()=>{L(Be=>Be.filter(ot=>ot.id!==ke)),jo(Be=>{const ot=new Set(Be);return ot.delete(ke),ot})},150)}}catch{}};return S.addEventListener("annotation.updated",z),()=>{S.removeEventListener("annotation.updated",z),S.close()}},[j,d,cn]),N.useEffect(()=>{if(!j||!d)return;const S=pn.current==="disconnected",T=xn==="connected";pn.current=xn,S&&T&&(async()=>{try{const F=wu(dt);if(F.length===0)return;const oe=`${typeof window<"u"?window.location.origin:""}${dt}`;let ke=cn,Oe=[];if(ke)try{Oe=(await h_(j,ke)).annotations}catch{ke=null}ke||(ke=(await ku(j,oe)).id,to(ke),bu(dt,ke));const Be=new Set(Oe.map(lt=>lt.id)),ot=F.filter(lt=>!Be.has(lt.id));if(ot.length>0){const ht=(await Promise.allSettled(ot.map(l=>Ks(j,ke,{...l,sessionId:ke,url:oe})))).map((l,h)=>l.status==="fulfilled"?l.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",l.reason),ot[h])),a=[...Oe,...ht].filter(ds);L(a),aa(dt,a,ke)}}catch(F){console.warn("[Agentation] Failed to sync on reconnect:",F)}})()},[xn,j,d,cn,dt]);const zc=N.useCallback(()=>{J||(ce(!0),re(!1),Z(!1),_t(()=>{mx(!0),ae(!0),ce(!1)},400))},[J]);N.useEffect(()=>{if(!n||!d||!e||e.length===0||C.length>0)return;const S=[];return S.push(_t(()=>{Z(!0)},t-200)),e.forEach((T,z)=>{const F=t+z*300;S.push(_t(()=>{const U=document.querySelector(T.selector);if(!U)return;const oe=U.getBoundingClientRect(),{name:ke,path:Oe}=mi(U),Be={id:`demo-${Date.now()}-${z}`,x:(oe.left+oe.width/2)/window.innerWidth*100,y:oe.top+oe.height/2+window.scrollY,comment:T.comment,element:ke,elementPath:Oe,timestamp:Date.now(),selectedText:T.selectedText,boundingBox:{x:oe.left,y:oe.top+window.scrollY,width:oe.width,height:oe.height},nearbyText:sa(U),cssClasses:ia(U)};L(ot=>[...ot,Be])},F))}),()=>{S.forEach(clearTimeout)}},[n,d,e,t]),N.useEffect(()=>{const S=()=>{Ze(window.scrollY),u(!0),zr.current&&clearTimeout(zr.current),zr.current=_t(()=>{u(!1)},150)};return window.addEventListener("scroll",S,{passive:!0}),()=>{window.removeEventListener("scroll",S),zr.current&&clearTimeout(zr.current)}},[]),N.useEffect(()=>{d&&C.length>0?cn?aa(dt,C,cn):tg(dt,C):d&&C.length===0&&localStorage.removeItem(kc(dt))},[C,dt,d,cn]),N.useEffect(()=>{if(d&&!Ke.current){Ke.current=!0;const S=ix(dt);S.length>0&&st(S)}},[d,dt]),N.useEffect(()=>{d&&Ke.current&&!Ce&&(Me.length>0?ax(dt,Me):lx(dt))},[Me,dt,d,Ce]),N.useEffect(()=>{if(d&&!vo.current){vo.current=!0;const S=cx(dt);if(S){const T={...S,sections:S.sections.map(z=>({...z,currentRect:z.currentRect??{...z.originalRect}}))};Tn(T)}}},[d,dt]),N.useEffect(()=>{d&&vo.current&&!Ce&&(Ye?ux(dt,Ye):dx(dt))},[Ye,dt,d,Ce]);const Di=N.useRef(!1);N.useEffect(()=>{if(d&&!Di.current){Di.current=!0;const S=hx(dt);S&&(Ar.current={rearrange:S.rearrange,placements:S.placements||[]},S.purpose&&er(S.purpose))}},[d,dt]),N.useEffect(()=>{var T,z,F;if(!d||!Di.current)return;const S=Ar.current;Ce?(((T=Ye==null?void 0:Ye.sections)==null?void 0:T.length)??0)>0||Me.length>0||Gt?d_(dt,{rearrange:Ye,placements:Me,purpose:Gt}):Tl(dt):(((F=(z=S.rearrange)==null?void 0:z.sections)==null?void 0:F.length)??0)>0||S.placements.length>0||Gt?d_(dt,{rearrange:S.rearrange,placements:S.placements,purpose:Gt}):Tl(dt)},[Ye,Me,Gt,Ce,dt,d]),N.useEffect(()=>{Le&&!Ye&&Tn({sections:[],originalOrder:[],detectedAt:Date.now()})},[Le,Ye]),N.useEffect(()=>{if(!j||!cn)return;const S=Dr.current,T=new Set(Me.map(z=>z.id));for(const z of Me){if(S.has(z.id))continue;S.set(z.id,"");const F=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:dt;Ks(j,cn,{id:z.id,x:z.x/window.innerWidth*100,y:z.y,comment:`Place ${z.type} at (${Math.round(z.x)}, ${Math.round(z.y)}), ${z.width}×${z.height}px${z.text?` — "${z.text}"`:""}`,element:`[design:${z.type}]`,elementPath:"[placement]",timestamp:z.timestamp,url:F,intent:"change",severity:"important",kind:"placement",placement:{componentType:z.type,width:z.width,height:z.height,scrollY:z.scrollY,text:z.text}}).then(U=>{S.has(z.id)&&S.set(z.id,U.id)}).catch(U=>{console.warn("[Agentation] Failed to sync placement annotation:",U),S.delete(z.id)})}for(const[z,F]of S)T.has(z)||(S.delete(z),F&&Io(j,F).catch(()=>{}))},[Me,j,cn,dt]),N.useEffect(()=>{if(!(!j||!cn))return bo.current&&clearTimeout(bo.current),bo.current=_t(()=>{const S=wo.current;if(!Ye||Ye.sections.length===0){for(const[,F]of S)F&&Io(j,F).catch(()=>{});S.clear();return}const T=new Set(Ye.sections.map(F=>F.id)),z=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:dt;for(const F of Ye.sections){const U=F.originalRect,oe=F.currentRect;if(!(Math.abs(U.x-oe.x)>1||Math.abs(U.y-oe.y)>1||Math.abs(U.width-oe.width)>1||Math.abs(U.height-oe.height)>1)){const Be=S.get(F.id);Be&&(S.delete(F.id),Io(j,Be).catch(()=>{}));continue}const Oe=S.get(F.id);Oe?f_(j,Oe,{comment:`Move ${F.label} section (${F.tagName}) — from (${Math.round(U.x)},${Math.round(U.y)}) ${Math.round(U.width)}×${Math.round(U.height)} to (${Math.round(oe.x)},${Math.round(oe.y)}) ${Math.round(oe.width)}×${Math.round(oe.height)}`}).catch(Be=>{console.warn("[Agentation] Failed to update rearrange annotation:",Be)}):(S.set(F.id,""),Ks(j,cn,{id:F.id,x:oe.x/window.innerWidth*100,y:oe.y,comment:`Move ${F.label} section (${F.tagName}) — from (${Math.round(U.x)},${Math.round(U.y)}) ${Math.round(U.width)}×${Math.round(U.height)} to (${Math.round(oe.x)},${Math.round(oe.y)}) ${Math.round(oe.width)}×${Math.round(oe.height)}`,element:F.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:z,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:F.selector,label:F.label,tagName:F.tagName,originalRect:U,currentRect:oe}}).then(Be=>{S.has(F.id)&&S.set(F.id,Be.id)}).catch(Be=>{console.warn("[Agentation] Failed to sync rearrange annotation:",Be),S.delete(F.id)}))}for(const[F,U]of S)T.has(F)||(S.delete(F),U&&Io(j,U).catch(()=>{}))},300),()=>{bo.current&&clearTimeout(bo.current)}},[Ye,j,cn,dt]);const Wr=N.useRef(new Map);N.useLayoutEffect(()=>{const S=(Ye==null?void 0:Ye.sections)??[],T=new Set;if((Le||vt)&&y)for(const z of S){T.add(z.id);try{const F=document.querySelector(z.selector);if(!F)continue;if(!Wr.current.has(z.id)){const U={transform:F.style.transform,transformOrigin:F.style.transformOrigin,opacity:F.style.opacity,position:F.style.position,zIndex:F.style.zIndex,display:F.style.display},oe=[];let ke=F.parentElement;for(;ke&&ke!==document.body;){const Be=getComputedStyle(ke);(Be.overflow!=="visible"||Be.overflowX!=="visible"||Be.overflowY!=="visible")&&(oe.push({el:ke,overflow:ke.style.overflow}),ke.style.overflow="visible"),ke=ke.parentElement}getComputedStyle(F).display==="inline"&&(F.style.display="inline-block"),Wr.current.set(z.id,{el:F,origStyles:U,ancestors:oe}),F.style.transformOrigin="top left",F.style.zIndex="9999"}}catch{}}for(const[z,F]of Wr.current)if(!T.has(z)){const{el:U,origStyles:oe,ancestors:ke}=F;U.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",U.style.transform=oe.transform,U.style.transformOrigin=oe.transformOrigin,U.style.opacity=oe.opacity,U.style.position=oe.position,U.style.zIndex=oe.zIndex,Wr.current.delete(z),_t(()=>{U.style.transition="",U.style.display=oe.display;for(const Oe of ke)Oe.el.style.overflow=Oe.overflow},450)}},[Ye,Le,vt,y]),N.useEffect(()=>()=>{for(const[,S]of Wr.current){const{el:T,origStyles:z,ancestors:F}=S;T.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",T.style.transform=z.transform,T.style.transformOrigin=z.transformOrigin,T.style.opacity=z.opacity,T.style.position=z.position,T.style.zIndex=z.zIndex,_t(()=>{T.style.transition="",T.style.display=z.display;for(const U of F)U.el.style.overflow=U.overflow},450)}Wr.current.clear()},[]);const Fs=N.useCallback(()=>{Ct(!0),pt(!1),at(null),clearTimeout(xo.current),xo.current=_t(()=>{Ct(!1)},300)},[]),al=N.useCallback(()=>{Le&&(Ct(!0),pt(!1),at(null),clearTimeout(xo.current),xo.current=_t(()=>{Ct(!1)},300)),Z(!1)},[Le]),Oi=N.useCallback(()=>{k||(u1(),R(!0))},[k]),Bs=N.useCallback(()=>{k&&(qf(),R(!1))},[k]),Fi=N.useCallback(()=>{k?Bs():Oi()},[k,Oi,Bs]),ll=N.useCallback(()=>{if(nn.length===0)return;const S=nn[0],T=S.element,z=nn.length>1,F=nn.map(U=>U.element.getBoundingClientRect());if(z){const U={left:Math.min(...F.map(l=>l.left)),top:Math.min(...F.map(l=>l.top)),right:Math.max(...F.map(l=>l.right)),bottom:Math.max(...F.map(l=>l.bottom))},oe=nn.slice(0,5).map(l=>l.name).join(", "),ke=nn.length>5?` +${nn.length-5} more`:"",Oe=F.map(l=>({x:l.left,y:l.top+window.scrollY,width:l.width,height:l.height})),ot=nn[nn.length-1].element,lt=F[F.length-1],ht=lt.left+lt.width/2,jt=lt.top+lt.height/2,a=Eu(ot);pe({x:ht/window.innerWidth*100,y:a?jt:jt+window.scrollY,clientY:jt,element:`${nn.length} elements: ${oe}${ke}`,elementPath:"multi-select",boundingBox:{x:U.left,y:U.top+window.scrollY,width:U.right-U.left,height:U.bottom-U.top},isMultiSelect:!0,isFixed:a,elementBoundingBoxes:Oe,multiSelectElements:nn.map(l=>l.element),targetElement:ot,fullPath:Rl(T),accessibility:Il(T),computedStyles:El(T),computedStylesObj:Nl(T),nearbyElements:Ml(T),cssClasses:ia(T),nearbyText:sa(T),sourceFile:Dl(T)})}else{const U=F[0],oe=Eu(T);pe({x:U.left/window.innerWidth*100,y:oe?U.top:U.top+window.scrollY,clientY:U.top,element:S.name,elementPath:S.path,boundingBox:{x:U.left,y:oe?U.top:U.top+window.scrollY,width:U.width,height:U.height},isFixed:oe,fullPath:Rl(T),accessibility:Il(T),computedStyles:El(T),computedStylesObj:Nl(T),nearbyElements:Ml(T),cssClasses:ia(T),nearbyText:sa(T),reactComponents:S.reactComponents,sourceFile:Dl(T)})}eo([]),ft(null)},[nn]);N.useEffect(()=>{y||(pe(null),ee(null),De(null),Pe([]),ft(null),re(!1),eo([]),nr.current={cmd:!1,shift:!1},k&&Bs())},[y,k,Bs]),N.useEffect(()=>()=>{qf()},[]),N.useEffect(()=>{if(!y)return;const S=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),T=":not([data-agentation-root]):not([data-agentation-root] *)",z=document.createElement("style");return z.id="feedback-cursor-styles",z.textContent=`
      body ${T} {
        cursor: crosshair !important;
      }

      body :is(${S})${T} {
        cursor: text !important;
      }
    `,document.head.appendChild(z),()=>{const F=document.getElementById("feedback-cursor-styles");F&&F.remove()}},[y]),N.useEffect(()=>{if(Zr!==null&&y)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[Zr,y]),N.useEffect(()=>{if(!y||G||kn||Le)return;const S=T=>{const z=T.composedPath()[0]||T.target;if(Dn(z,"[data-feedback-toolbar]")){ft(null);return}const F=us(T.clientX,T.clientY);if(!F||Dn(F,"[data-feedback-toolbar]")){ft(null);return}const{name:U,elementName:oe,path:ke,reactComponents:Oe}=Mu(F,Or),Be=F.getBoundingClientRect();ft({element:U,elementName:oe,elementPath:ke,rect:Be,reactComponents:Oe}),yt({x:T.clientX,y:T.clientY})};return document.addEventListener("mousemove",S),()=>document.removeEventListener("mousemove",S)},[y,G,kn,Le,Or,hn]);const zs=N.useCallback(S=>{var T;if(ee(S),en(null),K(null),ie([]),(T=S.elementBoundingBoxes)!=null&&T.length){const z=[];for(const F of S.elementBoundingBoxes){const U=F.x+F.width/2,oe=F.y+F.height/2-window.scrollY,ke=us(U,oe);ke&&z.push(ke)}Pe(z),De(null)}else if(S.boundingBox){const z=S.boundingBox,F=z.x+z.width/2,U=S.isFixed?z.y+z.height/2:z.y+z.height/2-window.scrollY,oe=us(F,U);if(oe){const ke=oe.getBoundingClientRect(),Oe=ke.width/z.width,Be=ke.height/z.height;Oe<.5||Be<.5?De(null):De(oe)}else De(null);Pe([])}else De(null),Pe([])},[]);N.useEffect(()=>{if(!y||kn||Le)return;const S=T=>{var p,x;if(Mo.current){Mo.current=!1;return}const z=T.composedPath()[0]||T.target;if(Dn(z,"[data-feedback-toolbar]")||Dn(z,"[data-annotation-popup]")||Dn(z,"[data-annotation-marker]"))return;if(T.metaKey&&T.shiftKey&&!G&&!W){T.preventDefault(),T.stopPropagation();const M=us(T.clientX,T.clientY);if(!M)return;const B=M.getBoundingClientRect(),{name:D,path:X,reactComponents:V}=Mu(M,Or),_e=nn.findIndex(Ae=>Ae.element===M);_e>=0?eo(Ae=>Ae.filter((We,H)=>H!==_e)):eo(Ae=>[...Ae,{element:M,rect:B,name:D,path:X,reactComponents:V??void 0}]);return}const F=Dn(z,"button, a, input, select, textarea, [role='button'], [onclick]");if(wt.blockInteractions&&F&&(T.preventDefault(),T.stopPropagation()),G){if(F&&!wt.blockInteractions)return;T.preventDefault(),(p=il.current)==null||p.shake();return}if(W){if(F&&!wt.blockInteractions)return;T.preventDefault(),(x=os.current)==null||x.shake();return}T.preventDefault();const U=us(T.clientX,T.clientY);if(!U)return;const{name:oe,path:ke,reactComponents:Oe}=Mu(U,Or),Be=U.getBoundingClientRect(),ot=T.clientX/window.innerWidth*100,lt=Eu(U),ht=lt?T.clientY:T.clientY+window.scrollY,jt=window.getSelection();let a;jt&&jt.toString().trim().length>0&&(a=jt.toString().trim().slice(0,500));const l=Nl(U),h=El(U);pe({x:ot,y:ht,clientY:T.clientY,element:oe,elementPath:ke,selectedText:a,boundingBox:{x:Be.left,y:lt?Be.top:Be.top+window.scrollY,width:Be.width,height:Be.height},nearbyText:sa(U),cssClasses:ia(U),isFixed:lt,fullPath:Rl(U),accessibility:Il(U),computedStyles:h,computedStylesObj:l,nearbyElements:Ml(U),reactComponents:Oe??void 0,sourceFile:Dl(U),targetElement:U}),ft(null)};return document.addEventListener("click",S,!0),()=>document.removeEventListener("click",S,!0)},[y,kn,Le,G,W,wt.blockInteractions,Or,nn]),N.useEffect(()=>{if(!y)return;const S=F=>{F.key==="Meta"&&(nr.current.cmd=!0),F.key==="Shift"&&(nr.current.shift=!0)},T=F=>{const U=nr.current.cmd&&nr.current.shift;F.key==="Meta"&&(nr.current.cmd=!1),F.key==="Shift"&&(nr.current.shift=!1);const oe=nr.current.cmd&&nr.current.shift;U&&!oe&&nn.length>0&&ll()},z=()=>{nr.current={cmd:!1,shift:!1},eo([])};return document.addEventListener("keydown",S),document.addEventListener("keyup",T),window.addEventListener("blur",z),()=>{document.removeEventListener("keydown",S),document.removeEventListener("keyup",T),window.removeEventListener("blur",z)}},[y,nn,ll]),N.useEffect(()=>{if(!y||G||kn||Le)return;const S=T=>{const z=T.composedPath()[0]||T.target;Dn(z,"[data-feedback-toolbar]")||Dn(z,"[data-annotation-marker]")||Dn(z,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(z.tagName)||z.isContentEditable||(T.preventDefault(),kr.current={x:T.clientX,y:T.clientY})};return document.addEventListener("mousedown",S),()=>document.removeEventListener("mousedown",S)},[y,G,kn,Le]),N.useEffect(()=>{if(!y||G)return;const S=T=>{if(!kr.current)return;const z=T.clientX-kr.current.x,F=T.clientY-kr.current.y,U=z*z+F*F,oe=$s*$s;if(!br&&U>=oe&&(rr.current=kr.current,ol(!0),T.preventDefault()),(br||U>=oe)&&rr.current){if(Br.current){const D=Math.min(rr.current.x,T.clientX),X=Math.min(rr.current.y,T.clientY),V=Math.abs(T.clientX-rr.current.x),_e=Math.abs(T.clientY-rr.current.y);Br.current.style.transform=`translate(${D}px, ${X}px)`,Br.current.style.width=`${V}px`,Br.current.style.height=`${_e}px`}const ke=Date.now();if(ke-sl.current<jr)return;sl.current=ke;const Oe=rr.current.x,Be=rr.current.y,ot=Math.min(Oe,T.clientX),lt=Math.min(Be,T.clientY),ht=Math.max(Oe,T.clientX),jt=Math.max(Be,T.clientY),a=(ot+ht)/2,l=(lt+jt)/2,h=new Set,p=[[ot,lt],[ht,lt],[ot,jt],[ht,jt],[a,l],[a,lt],[a,jt],[ot,l],[ht,l]];for(const[D,X]of p){const V=document.elementsFromPoint(D,X);for(const _e of V)_e instanceof HTMLElement&&h.add(_e)}const x=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const D of x)if(D instanceof HTMLElement){const X=D.getBoundingClientRect(),V=X.left+X.width/2,_e=X.top+X.height/2,Ae=V>=ot&&V<=ht&&_e>=lt&&_e<=jt,We=Math.min(X.right,ht)-Math.max(X.left,ot),H=Math.min(X.bottom,jt)-Math.max(X.top,lt),Ie=We>0&&H>0?We*H:0,Ue=X.width*X.height,Te=Ue>0?Ie/Ue:0;(Ae||Te>.5)&&h.add(D)}const M=[],B=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const D of h){if(Dn(D,"[data-feedback-toolbar]")||Dn(D,"[data-annotation-marker]"))continue;const X=D.getBoundingClientRect();if(!(X.width>window.innerWidth*.8&&X.height>window.innerHeight*.5)&&!(X.width<10||X.height<10)&&X.left<ht&&X.right>ot&&X.top<jt&&X.bottom>lt){const V=D.tagName;let _e=B.has(V);if(!_e&&(V==="DIV"||V==="SPAN")){const Ae=D.textContent&&D.textContent.trim().length>0,We=D.onclick!==null||D.getAttribute("role")==="button"||D.getAttribute("role")==="link"||D.classList.contains("clickable")||D.hasAttribute("data-clickable");(Ae||We)&&!D.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(_e=!0)}if(_e){let Ae=!1;for(const We of M)if(We.left<=X.left&&We.right>=X.right&&We.top<=X.top&&We.bottom>=X.bottom){Ae=!0;break}Ae||M.push(X)}}}if(So.current){const D=So.current;for(;D.children.length>M.length;)D.removeChild(D.lastChild);M.forEach((X,V)=>{let _e=D.children[V];_e||(_e=document.createElement("div"),_e.className=xe.selectedElementHighlight,D.appendChild(_e)),_e.style.transform=`translate(${X.left}px, ${X.top}px)`,_e.style.width=`${X.width}px`,_e.style.height=`${X.height}px`})}}};return document.addEventListener("mousemove",S,{passive:!0}),()=>document.removeEventListener("mousemove",S)},[y,G,br,$s]),N.useEffect(()=>{if(!y)return;const S=T=>{const z=br,F=rr.current;if(br&&F){Mo.current=!0;const U=Math.min(F.x,T.clientX),oe=Math.min(F.y,T.clientY),ke=Math.max(F.x,T.clientX),Oe=Math.max(F.y,T.clientY),Be=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(a=>{if(!(a instanceof HTMLElement)||Dn(a,"[data-feedback-toolbar]")||Dn(a,"[data-annotation-marker]"))return;const l=a.getBoundingClientRect();l.width>window.innerWidth*.8&&l.height>window.innerHeight*.5||l.width<10||l.height<10||l.left<ke&&l.right>U&&l.top<Oe&&l.bottom>oe&&Be.push({element:a,rect:l})});const lt=Be.filter(({element:a})=>!Be.some(({element:l})=>l!==a&&a.contains(l))),ht=T.clientX/window.innerWidth*100,jt=T.clientY+window.scrollY;if(lt.length>0){const a=lt.reduce((B,{rect:D})=>({left:Math.min(B.left,D.left),top:Math.min(B.top,D.top),right:Math.max(B.right,D.right),bottom:Math.max(B.bottom,D.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),l=lt.slice(0,5).map(({element:B})=>mi(B).name).join(", "),h=lt.length>5?` +${lt.length-5} more`:"",p=lt[0].element,x=Nl(p),M=El(p);pe({x:ht,y:jt,clientY:T.clientY,element:`${lt.length} elements: ${l}${h}`,elementPath:"multi-select",boundingBox:{x:a.left,y:a.top+window.scrollY,width:a.right-a.left,height:a.bottom-a.top},isMultiSelect:!0,fullPath:Rl(p),accessibility:Il(p),computedStyles:M,computedStylesObj:x,nearbyElements:Ml(p),cssClasses:ia(p),nearbyText:sa(p),sourceFile:Dl(p)})}else{const a=Math.abs(ke-U),l=Math.abs(Oe-oe);a>20&&l>20&&pe({x:ht,y:jt,clientY:T.clientY,element:"Area selection",elementPath:`region at (${Math.round(U)}, ${Math.round(oe)})`,boundingBox:{x:U,y:oe+window.scrollY,width:a,height:l},isMultiSelect:!0})}ft(null)}else z&&(Mo.current=!0);kr.current=null,rr.current=null,ol(!1),So.current&&(So.current.innerHTML="")};return document.addEventListener("mouseup",S),()=>document.removeEventListener("mouseup",S)},[y,br]);const _r=N.useCallback(async(S,T,z)=>{const F=wt.webhookUrl||E;if(!F||!wt.webhooksEnabled&&!z)return!1;try{return(await fetch(F,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:S,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...T})})).ok}catch(U){return console.warn("[Agentation] Webhook failed:",U),!1}},[E,wt.webhookUrl,wt.webhooksEnabled]),Wc=N.useCallback(S=>{var z;if(!G)return;const T={id:Date.now().toString(),x:G.x,y:G.y,comment:S,element:G.element,elementPath:G.elementPath,timestamp:Date.now(),selectedText:G.selectedText,boundingBox:G.boundingBox,nearbyText:G.nearbyText,cssClasses:G.cssClasses,isMultiSelect:G.isMultiSelect,isFixed:G.isFixed,fullPath:G.fullPath,accessibility:G.accessibility,computedStyles:G.computedStyles,nearbyElements:G.nearbyElements,reactComponents:G.reactComponents,sourceFile:G.sourceFile,elementBoundingBoxes:G.elementBoundingBoxes,...j&&cn?{sessionId:cn,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};L(F=>[...F,T]),As.current=T.id,_t(()=>{As.current=null},300),_t(()=>{Fr(F=>new Set(F).add(T.id))},250),o==null||o(T),_r("annotation.add",{annotation:T}),Ls(!0),_t(()=>{pe(null),Ls(!1)},150),(z=window.getSelection())==null||z.removeAllRanges(),j&&cn&&Ks(j,cn,T).then(F=>{F.id!==T.id&&(L(U=>U.map(oe=>oe.id===T.id?{...oe,id:F.id}:oe)),Fr(U=>{const oe=new Set(U);return oe.delete(T.id),oe.add(F.id),oe}))}).catch(F=>{console.warn("[Agentation] Failed to sync annotation:",F)})},[G,o,_r,j,cn]),Ws=N.useCallback(()=>{Ls(!0),_t(()=>{pe(null),Ls(!1)},150)},[]),No=N.useCallback(S=>{const T=C.findIndex(F=>F.id===S),z=C[T];(W==null?void 0:W.id)===S&&(Co(!0),_t(()=>{ee(null),De(null),Pe([]),Co(!1)},150)),ne(S),jo(F=>new Set(F).add(S)),z&&(s==null||s(z),_r("annotation.delete",{annotation:z})),j&&Io(j,S).catch(F=>{console.warn("[Agentation] Failed to delete annotation from server:",F)}),_t(()=>{L(F=>F.filter(U=>U.id!==S)),jo(F=>{const U=new Set(F);return U.delete(S),U}),ne(null),T<C.length-1&&(ye(T),_t(()=>ye(null),200))},150)},[C,W,s,_r,j]),Hs=N.useCallback(S=>{var T;if(!S){en(null),K(null),ie([]);return}if(en(S.id),(T=S.elementBoundingBoxes)!=null&&T.length){const z=[];for(const F of S.elementBoundingBoxes){const U=F.x+F.width/2,oe=F.y+F.height/2-window.scrollY,Oe=document.elementsFromPoint(U,oe).find(Be=>!Be.closest("[data-annotation-marker]")&&!Be.closest("[data-agentation-root]"));Oe&&z.push(Oe)}ie(z),K(null)}else if(S.boundingBox){const z=S.boundingBox,F=z.x+z.width/2,U=S.isFixed?z.y+z.height/2:z.y+z.height/2-window.scrollY,oe=us(F,U);if(oe){const ke=oe.getBoundingClientRect(),Oe=ke.width/z.width,Be=ke.height/z.height;Oe<.5||Be<.5?K(null):K(oe)}else K(null);ie([])}else K(null),ie([])},[]),Bi=N.useCallback(S=>{if(!W)return;const T={...W,comment:S};L(z=>z.map(F=>F.id===W.id?T:F)),i==null||i(T),_r("annotation.update",{annotation:T}),j&&f_(j,W.id,{comment:S}).catch(z=>{console.warn("[Agentation] Failed to update annotation on server:",z)}),Co(!0),_t(()=>{ee(null),De(null),Pe([]),Co(!1)},150)},[W,i,_r,j]),Hc=N.useCallback(()=>{Co(!0),_t(()=>{ee(null),De(null),Pe([]),Co(!1)},150)},[]),ro=N.useCallback(()=>{const S=C.length,T=Me.length>0||!!Ye;if(S===0&&hn.length===0&&!T)return;if(c==null||c(C),_r("annotations.clear",{annotations:C}),j){Promise.all(C.map(U=>Io(j,U.id).catch(oe=>{console.warn("[Agentation] Failed to delete annotation from server:",oe)})));for(const[,U]of Dr.current)U&&Io(j,U).catch(()=>{});Dr.current.clear();for(const[,U]of wo.current)U&&Io(j,U).catch(()=>{});wo.current.clear()}Xt(!0),Qe(!0),Pi([]);const z=tr.current;if(z){const U=z.getContext("2d");U&&U.clearRect(0,0,z.width,z.height)}(Me.length>0||Ye)&&(Ei(U=>U+1),Ri(U=>U+1),_t(()=>{st([]),Tn(null)},200)),Ce&&bt(!1),Gt&&er(""),Ar.current={rearrange:null,placements:[]},Tl(dt);const F=S*30+200;_t(()=>{L([]),Fr(new Set),localStorage.removeItem(kc(dt)),Xt(!1)},F),_t(()=>Qe(!1),1500)},[dt,C,hn,Me,Ye,Ce,Gt,c,_r,j]),zi=N.useCallback(async()=>{const S=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:dt,T=Le&&Ce;let z;if(T){if(Me.length===0&&!Ye&&!Gt)return;z=""}else{if(z=m_(C,S,wt.outputDetail),!z&&hn.length===0&&Me.length===0&&!Ye)return;z||(z=`## Page Feedback: ${S}
`)}if(!T&&hn.length>0){const F=new Set;for(const Oe of C)Oe.drawingIndex!=null&&F.add(Oe.drawingIndex);const U=tr.current;U&&(U.style.visibility="hidden");const oe=[],ke=window.scrollY;for(let Oe=0;Oe<hn.length;Oe++){if(F.has(Oe))continue;const Be=hn[Oe];if(Be.points.length<2)continue;const ot=Be.fixed?Be.points:Be.points.map(gt=>({x:gt.x,y:gt.y-ke}));let lt=1/0,ht=1/0,jt=-1/0,a=-1/0;for(const gt of ot)lt=Math.min(lt,gt.x),ht=Math.min(ht,gt.y),jt=Math.max(jt,gt.x),a=Math.max(a,gt.y);const l=jt-lt,h=a-ht,p=Math.hypot(l,h),x=ot[0],M=ot[ot.length-1],B=Math.hypot(M.x-x.x,M.y-x.y);let D;const X=B<p*.35,V=l/Math.max(h,1);if(X&&p>20){const gt=Math.max(l,h)*.15;let Ve=0;for(const kt of ot){const Ht=kt.x-lt<gt,An=jt-kt.x<gt,so=kt.y-ht<gt,Tt=a-kt.y<gt;(Ht||An)&&(so||Tt)&&Ve++}D=Ve>ot.length*.15?"box":"circle"}else V>3&&h<40?D="underline":B>p*.5?D="arrow":D="drawing";const _e=Math.min(10,ot.length),Ae=Math.max(1,Math.floor(ot.length/_e)),We=new Set,H=[],Ie=[x];for(let gt=Ae;gt<ot.length-1;gt+=Ae)Ie.push(ot[gt]);Ie.push(M);for(const gt of Ie){const Ve=us(gt.x,gt.y);if(!Ve||We.has(Ve)||Dn(Ve,"[data-feedback-toolbar]"))continue;We.add(Ve);const{name:kt}=mi(Ve);H.includes(kt)||H.push(kt)}const Ue=`${Math.round(lt)},${Math.round(ht)} → ${Math.round(jt)},${Math.round(a)}`;let Te;(D==="circle"||D==="box")&&H.length>0?Te=`${D==="box"?"Boxed":"Circled"} **${H[0]}**${H.length>1?` (and ${H.slice(1).join(", ")})`:""} (region: ${Ue})`:D==="underline"&&H.length>0?Te=`Underlined **${H[0]}** (${Ue})`:D==="arrow"&&H.length>=2?Te=`Arrow from **${H[0]}** to **${H[H.length-1]}** (${Math.round(x.x)},${Math.round(x.y)} → ${Math.round(M.x)},${Math.round(M.y)})`:H.length>0?Te=`${D==="arrow"?"Arrow":"Drawing"} near **${H.join("**, **")}** (region: ${Ue})`:Te=`Drawing at ${Ue}`,oe.push(Te)}U&&(U.style.visibility=""),oe.length>0&&(z+=`
**Drawings:**
`,oe.forEach((Oe,Be)=>{z+=`${Be+1}. ${Oe}
`}))}if((Me.length>0||T&&Gt)&&(z+=`
`+c_(Me,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:Ce,wireframePurpose:Gt||void 0},wt.outputDetail)),Ye){const F=u_(Ye,wt.outputDetail,{width:window.innerWidth,height:window.innerHeight});F&&(z+=`
`+F)}if(w)try{await navigator.clipboard.writeText(z)}catch{}_==null||_(z),Ge(!0),_t(()=>Ge(!1),2e3),wt.autoClearAfterCopy&&_t(()=>ro(),500)},[C,hn,Me,Ye,Ce,Le,hr,Gt,dt,wt.outputDetail,Or,wt.autoClearAfterCopy,ro,w,_]),oo=N.useCallback(async()=>{const S=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:dt;let T=m_(C,S,wt.outputDetail);if(!T&&Me.length===0&&!Ye)return;if(T||(T=`## Page Feedback: ${S}
`),Me.length>0&&(T+=`
`+c_(Me,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:Ce,wireframePurpose:Gt||void 0},wt.outputDetail)),Ye){const F=u_(Ye,wt.outputDetail,{width:window.innerWidth,height:window.innerHeight});F&&(T+=`
`+F)}f&&f(T,C),St("sending"),await new Promise(F=>_t(F,150));const z=await _r("submit",{output:T,annotations:C},!0);St(z?"sent":"failed"),_t(()=>St("idle"),2500),z&&wt.autoClearAfterCopy&&_t(()=>ro(),500)},[f,_r,C,Me,Ye,Ce,hr,dt,wt.outputDetail,Or,wt.autoClearAfterCopy,ro]);N.useEffect(()=>{if(!fn)return;const S=10,T=F=>{const U=F.clientX-fn.x,oe=F.clientY-fn.y,ke=Math.sqrt(U*U+oe*oe);if(!Xn&&ke>S&&ns(!0),Xn||ke>S){let Oe=fn.toolbarX+U,Be=fn.toolbarY+oe;const ot=20,lt=337,ht=44,a=lt-(y?xn==="connected"?297:257:44),l=ot-a,h=window.innerWidth-ot-lt;Oe=Math.max(l,Math.min(h,Oe)),Be=Math.max(ot,Math.min(window.innerHeight-ht-ot,Be)),no({x:Oe,y:Be})}},z=()=>{Xn&&(Qn.current=!0),ns(!1),rl(null)};return document.addEventListener("mousemove",T),document.addEventListener("mouseup",z),()=>{document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",z)}},[fn,Xn,y,xn]);const Uc=N.useCallback(S=>{if(S.target.closest("button")||S.target.closest("[data-agentation-settings-panel]"))return;const T=S.currentTarget.parentElement;if(!T)return;const z=T.getBoundingClientRect(),F=(Ot==null?void 0:Ot.x)??z.left,U=(Ot==null?void 0:Ot.y)??z.top;rl({x:S.clientX,y:S.clientY,toolbarX:F,toolbarY:U})},[Ot]);if(N.useEffect(()=>{if(!Ot)return;const S=()=>{let U=Ot.x,oe=Ot.y;const Be=20-(337-(y?xn==="connected"?297:257:44)),ot=window.innerWidth-20-337;U=Math.max(Be,Math.min(ot,U)),oe=Math.max(20,Math.min(window.innerHeight-44-20,oe)),(U!==Ot.x||oe!==Ot.y)&&no({x:U,y:oe})};return S(),window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[Ot,y,xn]),N.useEffect(()=>{const S=T=>{const z=T.target,F=z.tagName==="INPUT"||z.tagName==="TEXTAREA"||z.isContentEditable;if(T.key==="Escape"){if(Le){ct?at(null):Fs();return}if(kn){Is(!1);return}if(nn.length>0){eo([]);return}G||y&&(Et(),Z(!1))}if((T.metaKey||T.ctrlKey)&&T.shiftKey&&(T.key==="f"||T.key==="F")){T.preventDefault(),Et(),y?al():Z(!0);return}if(!(F||T.metaKey||T.ctrlKey)&&((T.key==="p"||T.key==="P")&&(T.preventDefault(),Et(),Fi()),(T.key==="l"||T.key==="L")&&(T.preventDefault(),Et(),kn&&Is(!1),$&&re(!1),G&&Ws(),Le?Fs():pt(!0)),(T.key==="h"||T.key==="H")&&C.length>0&&(T.preventDefault(),Et(),A(U=>!U)),(T.key==="c"||T.key==="C")&&(C.length>0||Me.length>0||Ye)&&(T.preventDefault(),Et(),zi()),(T.key==="x"||T.key==="X")&&(C.length>0||Me.length>0||Ye)&&(T.preventDefault(),Et(),ro(),Me.length>0&&st([]),Ye&&Tn(null)),T.key==="s"||T.key==="S")){const U=Xr(wt.webhookUrl)||Xr(E||"");C.length>0&&U&&qe==="idle"&&(T.preventDefault(),Et(),oo())}};return document.addEventListener("keydown",S),()=>document.removeEventListener("keydown",S)},[y,kn,Le,ct,Me,Ye,G,C.length,wt.webhookUrl,E,qe,oo,Fi,zi,ro,nn]),!d||q)return null;const ss=C.length>0,Hr=C.filter(S=>!Ps.has(S.id)&&S.kind!=="placement"&&S.kind!=="rearrange"),Wi=Hr.length>0,Hi=C.filter(S=>Ps.has(S.id)),Us=S=>{const oe=S.x/100*window.innerWidth,ke=typeof S.y=="string"?parseFloat(S.y):S.y,Oe={};window.innerHeight-ke-22-10<80&&(Oe.top="auto",Oe.bottom="calc(100% + 10px)");const ot=oe-200/2,lt=10;if(ot<lt){const ht=lt-ot;Oe.left=`calc(50% + ${ht}px)`}else if(ot+200>window.innerWidth-lt){const ht=ot+200-(window.innerWidth-lt);Oe.left=`calc(50% - ${ht}px)`}return Oe};return Ch.createPortal(r.jsxs("div",{ref:se,style:{display:"contents"},"data-agentation-theme":vn?"dark":"light","data-agentation-accent":wt.annotationColorId,"data-agentation-root":"",children:[r.jsx("div",{className:`${xe.toolbar}${I?` ${I}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:Ot?{left:Ot.x,top:Ot.y,right:"auto",bottom:"auto"}:void 0,children:r.jsxs("div",{className:`${xe.toolbarContainer} ${y?xe.expanded:xe.collapsed} ${ko?xe.entrance:""} ${J?xe.hiding:""} ${!wt.webhooksEnabled&&(Xr(wt.webhookUrl)||Xr(E||""))?xe.serverConnected:""}`,onClick:y?void 0:S=>{if(Qn.current){Qn.current=!1,S.preventDefault();return}Z(!0)},onMouseDown:Uc,role:y?void 0:"button",tabIndex:y?-1:0,title:y?void 0:"Start feedback mode",children:[r.jsxs("div",{className:`${xe.toggleContent} ${y?xe.hidden:xe.visible}`,children:[r.jsx(Yy,{size:24}),Wi&&r.jsx("span",{className:`${xe.badge} ${y?xe.fadeOut:""} ${ko?xe.entrance:""}`,children:Hr.length})]}),r.jsxs("div",{className:`${xe.controlsContent} ${y?xe.visible:xe.hidden} ${Ot&&Ot.y<100?xe.tooltipBelow:""} ${it||$?xe.tooltipsHidden:""} ${mt?xe.tooltipsInSession:""}`,onMouseEnter:Li,onMouseLeave:Zo,children:[r.jsxs("div",{className:`${xe.buttonWrapper} ${Ot&&Ot.x<120?xe.buttonWrapperAlignLeft:""}`,children:[r.jsx("button",{className:xe.controlButton,onClick:S=>{S.stopPropagation(),Et(),Fi()},"data-active":k,children:r.jsx(qy,{size:24,isPaused:k})}),r.jsxs("span",{className:xe.buttonTooltip,children:[k?"Resume animations":"Pause animations",r.jsx("span",{className:xe.shortcut,children:"P"})]})]}),r.jsxs("div",{className:xe.buttonWrapper,children:[r.jsx("button",{className:`${xe.controlButton} ${vn?"":xe.light}`,onClick:S=>{S.stopPropagation(),Et(),kn&&Is(!1),$&&re(!1),G&&Ws(),Le?Fs():pt(!0)},"data-active":Le,style:Le&&Ce?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:r.jsx(i1,{size:21})}),r.jsxs("span",{className:xe.buttonTooltip,children:[Le?"Exit layout mode":"Layout mode",r.jsx("span",{className:xe.shortcut,children:"L"})]})]}),r.jsxs("div",{className:xe.buttonWrapper,children:[r.jsx("button",{className:xe.controlButton,onClick:S=>{S.stopPropagation(),Et(),A(!O)},disabled:!ss||Le,children:r.jsx(Gy,{size:24,isOpen:O})}),r.jsxs("span",{className:xe.buttonTooltip,children:[O?"Hide markers":"Show markers",r.jsx("span",{className:xe.shortcut,children:"H"})]})]}),r.jsxs("div",{className:xe.buttonWrapper,children:[r.jsx("button",{className:`${xe.controlButton} ${Ee?xe.statusShowing:""}`,onClick:S=>{S.stopPropagation(),Et(),zi()},disabled:Le&&Ce?Me.length===0&&!((Ui=Ye==null?void 0:Ye.sections)!=null&&Ui.length):!ss&&hn.length===0&&Me.length===0&&!((Vi=Ye==null?void 0:Ye.sections)!=null&&Vi.length),"data-active":Ee,children:r.jsx(Qy,{size:24,copied:Ee,tint:Le&&Ce&&(Me.length>0||(Yi=Ye==null?void 0:Ye.sections)!=null&&Yi.length)?"#f97316":void 0})}),r.jsxs("span",{className:xe.buttonTooltip,children:[Le&&Ce?"Copy layout":"Copy feedback",r.jsx("span",{className:xe.shortcut,children:"C"})]})]}),r.jsxs("div",{className:`${xe.buttonWrapper} ${xe.sendButtonWrapper} ${y&&!wt.webhooksEnabled&&(Xr(wt.webhookUrl)||Xr(E||""))?xe.sendButtonVisible:""}`,children:[r.jsxs("button",{className:`${xe.controlButton} ${qe==="sent"||qe==="failed"?xe.statusShowing:""}`,onClick:S=>{S.stopPropagation(),Et(),oo()},disabled:!ss||!Xr(wt.webhookUrl)&&!Xr(E||"")||qe==="sending","data-no-hover":qe==="sent"||qe==="failed",tabIndex:Xr(wt.webhookUrl)||Xr(E||"")?0:-1,children:[r.jsx(Ky,{size:24,state:qe}),ss&&qe==="idle"&&r.jsx("span",{className:xe.buttonBadge,children:C.length})]}),r.jsxs("span",{className:xe.buttonTooltip,children:["Send Annotations",r.jsx("span",{className:xe.shortcut,children:"S"})]})]}),r.jsxs("div",{className:xe.buttonWrapper,children:[r.jsx("button",{className:xe.controlButton,onClick:S=>{S.stopPropagation(),Et(),ro()},disabled:!ss&&hn.length===0&&Me.length===0&&!((Xi=Ye==null?void 0:Ye.sections)!=null&&Xi.length),"data-danger":!0,children:r.jsx(Zy,{size:24})}),r.jsxs("span",{className:xe.buttonTooltip,children:["Clear all",r.jsx("span",{className:xe.shortcut,children:"X"})]})]}),r.jsxs("div",{className:xe.buttonWrapper,children:[r.jsx("button",{className:xe.controlButton,onClick:S=>{S.stopPropagation(),Et(),Le&&Fs(),re(!$)},children:r.jsx(Jy,{size:24})}),j&&xn!=="disconnected"&&r.jsx("span",{className:`${xe.mcpIndicator} ${xe[xn]} ${$?xe.hidden:""}`,title:xn==="connected"?"MCP Connected":"MCP Connecting..."}),r.jsx("span",{className:xe.buttonTooltip,children:"Settings"})]}),r.jsx("div",{className:xe.divider}),r.jsxs("div",{className:`${xe.buttonWrapper} ${Ot&&typeof window<"u"&&Ot.x>window.innerWidth-120?xe.buttonWrapperAlignRight:""}`,children:[r.jsx("button",{className:xe.controlButton,onClick:S=>{S.stopPropagation(),Et(),al()},children:r.jsx(e1,{size:24})}),r.jsxs("span",{className:xe.buttonTooltip,children:["Exit",r.jsx("span",{className:xe.shortcut,children:"Esc"})]})]})]}),r.jsx(Av,{visible:Le&&y,activeType:ct,onSelect:S=>{at(ct===S?null:S)},isDarkMode:vn,sectionCount:(Ye==null?void 0:Ye.sections.length)??0,onDetectSections:()=>{const S=Yv(),T=(Ye==null?void 0:Ye.sections)??[],z=new Set(T.map(ke=>ke.selector)),F=S.filter(ke=>!z.has(ke.selector)),U=[...T,...F],oe=[...(Ye==null?void 0:Ye.originalOrder)??[],...F.map(ke=>ke.id)];Tn({sections:U,originalOrder:oe,detectedAt:Date.now()})},placementCount:Me.length,onClearPlacements:()=>{Ei(S=>S+1),Ri(S=>S+1),_t(()=>{Tn({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:Ce,onBlankCanvasChange:S=>{const T={sections:[],originalOrder:[],detectedAt:Date.now()};S?(Ns.current={rearrange:Ye,placements:Me},Tn(Ar.current.rearrange||T),st(Ar.current.placements),at(null)):(Ar.current={rearrange:Ye,placements:Me},Tn(Ns.current.rearrange||T),st(Ns.current.placements)),bt(S)},wireframePurpose:Gt,onWireframePurposeChange:er,Tooltip:_s,onDragStart:(S,T)=>{T.preventDefault();const z=Je[S];let F=null,U=!1;const oe=T.clientX,ke=T.clientY,Oe=T.target.closest("[data-feedback-toolbar]"),Be=(Oe==null?void 0:Oe.getBoundingClientRect().top)??window.innerHeight,ot=ht=>{const jt=ht.clientX-oe,a=ht.clientY-ke;if(!U&&(Math.abs(jt)>4||Math.abs(a)>4)&&(U=!0,F=document.createElement("div"),F.className=`${he.dragPreview}${Ce?` ${he.dragPreviewWireframe}`:""}`,document.body.appendChild(F)),!F)return;const l=Math.max(0,Be-ht.clientY),h=Math.min(1,l/180),p=1-Math.pow(1-h,2),x=28,M=20,B=Math.min(140,z.width*.18),D=Math.min(90,z.height*.18),X=x+(B-x)*p,V=M+(D-M)*p;F.style.width=`${X}px`,F.style.height=`${V}px`,F.style.left=`${ht.clientX-X/2}px`,F.style.top=`${ht.clientY-V/2}px`,F.style.opacity=`${.5+.5*p}`,F.textContent=p>.25?S:""},lt=ht=>{if(window.removeEventListener("mousemove",ot),window.removeEventListener("mouseup",lt),F&&document.body.removeChild(F),U){const jt=z.width,a=z.height,l=window.scrollY,h=Math.max(0,ht.clientX-jt/2),p=Math.max(0,ht.clientY+l-a/2),x={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:S,x:h,y:p,width:jt,height:a,scrollY:l,timestamp:Date.now()};st(M=>[...M,x]),at(null),Jr.current=new Set,Ni(M=>M+1)}};window.addEventListener("mousemove",ot),window.addEventListener("mouseup",lt)}}),r.jsx(tw,{settings:wt,onSettingsChange:S=>Ti(T=>({...T,...S})),isDarkMode:vn,onToggleTheme:$i,isDevMode:nl,connectionStatus:xn,endpoint:j,isVisible:ue,toolbarNearBottom:!!Ot&&Ot.y<230,settingsPage:je,onSettingsPageChange:be,onHideToolbar:zc})]})}),(Le||vt)&&r.jsx("div",{className:`${he.blankCanvas} ${Wt?he.visible:""} ${Hn?he.gridActive:""}`,style:{"--canvas-opacity":yn},"data-feedback-toolbar":!0}),Le&&Ce&&Wt&&r.jsxs("div",{className:he.wireframeNotice,"data-feedback-toolbar":!0,children:[r.jsxs("div",{className:he.wireframeOpacityRow,children:[r.jsx("span",{className:he.wireframeOpacityLabel,children:"Toggle Opacity"}),r.jsx("input",{type:"range",className:he.wireframeOpacitySlider,min:0,max:1,step:.01,value:yn,onChange:S=>dr(Number(S.target.value))})]}),r.jsxs("div",{className:he.wireframeNoticeTitleRow,children:[r.jsx("span",{className:he.wireframeNoticeTitle,children:"Wireframe Mode"}),r.jsx("span",{className:he.wireframeNoticeDivider}),r.jsx("button",{className:he.wireframeStartOver,onClick:()=>{Ei(S=>S+1),Tn({sections:[],originalOrder:[],detectedAt:Date.now()}),Ar.current={rearrange:null,placements:[]},er(""),Tl(dt)},children:"Start Over"})]}),"Drag components onto the canvas.",r.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(Le||vt)&&r.jsx(Iv,{placements:Me,onChange:st,activeComponent:vt?null:ct,onActiveComponentChange:at,isDarkMode:vn,exiting:vt,onInteractionChange:Un,passthrough:!ct,extraSnapRects:Ye==null?void 0:Ye.sections.map(S=>S.currentRect),deselectSignal:Es,clearSignal:Bc,wireframe:Ce,onSelectionChange:(S,T)=>{Jr.current=S,T||(Vn.current=new Set,Za(z=>z+1))},onDragMove:(S,T)=>{const z=Vn.current;if(!(!z.size||!Ye)){if(!Nn.current){Nn.current=new Map;for(const F of Ye.sections)z.has(F.id)&&Nn.current.set(F.id,{x:F.currentRect.x,y:F.currentRect.y})}for(const F of Ye.sections){if(!z.has(F.id)||!Nn.current.get(F.id))continue;const oe=document.querySelector(`[data-rearrange-section="${F.id}"]`);oe&&(oe.style.transform=`translate(${S}px, ${T}px)`)}}},onDragEnd:(S,T,z)=>{const F=Vn.current,U=Nn.current;if(Nn.current=null,!(!F.size||!Ye||!U)){for(const oe of F){const ke=document.querySelector(`[data-rearrange-section="${oe}"]`);ke&&(ke.style.transform="")}z&&Tn(oe=>oe&&{...oe,sections:oe.sections.map(ke=>{const Oe=U.get(ke.id);return Oe?{...ke,currentRect:{...ke.currentRect,x:Math.max(0,Oe.x+S),y:Math.max(0,Oe.y+T)}}:ke})})}}}),(Le||vt)&&Ye&&r.jsx(Kv,{rearrangeState:Ye,onChange:Tn,isDarkMode:vn,exiting:vt,blankCanvas:Ce,extraSnapRects:Me.map(S=>({x:S.x,y:S.y,width:S.width,height:S.height})),clearSignal:Ii,deselectSignal:$r,onSelectionChange:(S,T)=>{Vn.current=S,T||(Jr.current=new Set,Ni(z=>z+1))},onDragMove:(S,T)=>{const z=Jr.current;if(z.size){if(!Nn.current){Nn.current=new Map;for(const F of Me)z.has(F.id)&&Nn.current.set(F.id,{x:F.x,y:F.y})}for(const F of z){const U=document.querySelector(`[data-design-placement="${F}"]`);U&&(U.style.transform=`translate(${S}px, ${T}px)`)}}},onDragEnd:(S,T,z)=>{const F=Jr.current,U=Nn.current;if(Nn.current=null,!(!F.size||!U)){for(const oe of F){const ke=document.querySelector(`[data-design-placement="${oe}"]`);ke&&(ke.style.transform="")}z&&st(oe=>oe.map(ke=>{const Oe=U.get(ke.id);return Oe?{...ke,x:Math.max(0,Oe.x+S),y:Math.max(0,Oe.y+T)}:ke}))}}}),r.jsx("canvas",{ref:tr,className:`${xe.drawCanvas} ${kn?xe.active:""}`,style:{opacity:Ds?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),r.jsxs("div",{className:xe.markersLayer,"data-feedback-toolbar":!0,children:[te&&Hr.filter(S=>!S.isFixed).map((S,T,z)=>r.jsx(g_,{annotation:S,globalIndex:Hr.findIndex(F=>F.id===S.id),layerIndex:T,layerSize:z.length,isExiting:me,isClearing:ut,isAnimated:Rs.has(S.id),isHovered:!me&&Mt===S.id,isDeleting:Y===S.id,isEditingAny:!!W,renumberFrom:de,markerClickBehavior:wt.markerClickBehavior,tooltipStyle:Us(S),onHoverEnter:F=>!me&&F.id!==As.current&&Hs(F),onHoverLeave:()=>Hs(null),onClick:F=>wt.markerClickBehavior==="delete"?No(F.id):zs(F),onContextMenu:zs},S.id)),te&&!me&&Hi.filter(S=>!S.isFixed).map(S=>r.jsx(y_,{annotation:S},S.id))]}),r.jsxs("div",{className:xe.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[te&&Hr.filter(S=>S.isFixed).map((S,T,z)=>r.jsx(g_,{annotation:S,globalIndex:Hr.findIndex(F=>F.id===S.id),layerIndex:T,layerSize:z.length,isExiting:me,isClearing:ut,isAnimated:Rs.has(S.id),isHovered:!me&&Mt===S.id,isDeleting:Y===S.id,isEditingAny:!!W,renumberFrom:de,markerClickBehavior:wt.markerClickBehavior,tooltipStyle:Us(S),onHoverEnter:F=>!me&&F.id!==As.current&&Hs(F),onHoverLeave:()=>Hs(null),onClick:F=>wt.markerClickBehavior==="delete"?No(F.id):zs(F),onContextMenu:zs},S.id)),te&&!me&&Hi.filter(S=>S.isFixed).map(S=>r.jsx(y_,{annotation:S,fixed:!0},S.id))]}),y&&r.jsxs("div",{className:xe.overlay,"data-feedback-toolbar":!0,style:G||W?{zIndex:99999}:void 0,children:[(rt==null?void 0:rt.rect)&&!G&&!g&&!br&&r.jsx("div",{className:`${xe.hoverHighlight} ${xe.enter}`,style:{left:rt.rect.left,top:rt.rect.top,width:rt.rect.width,height:rt.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),nn.filter(S=>document.contains(S.element)).map((S,T)=>{const z=S.element.getBoundingClientRect(),F=nn.length>1;return r.jsx("div",{className:F?xe.multiSelectOutline:xe.singleSelectOutline,style:{position:"fixed",left:z.left,top:z.top,width:z.width,height:z.height,...F?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},T)}),Mt&&!G&&(()=>{var U;const S=C.find(oe=>oe.id===Mt);if(!(S!=null&&S.boundingBox))return null;if((U=S.elementBoundingBoxes)!=null&&U.length)return fe.length>0?fe.filter(oe=>document.contains(oe)).map((oe,ke)=>{const Oe=oe.getBoundingClientRect();return r.jsx("div",{className:`${xe.multiSelectOutline} ${xe.enter}`,style:{left:Oe.left,top:Oe.top,width:Oe.width,height:Oe.height}},`hover-outline-live-${ke}`)}):S.elementBoundingBoxes.map((oe,ke)=>r.jsx("div",{className:`${xe.multiSelectOutline} ${xe.enter}`,style:{left:oe.x,top:oe.y-$e,width:oe.width,height:oe.height}},`hover-outline-${ke}`));const T=Dt&&document.contains(Dt)?Dt.getBoundingClientRect():null,z=T?{x:T.left,y:T.top,width:T.width,height:T.height}:{x:S.boundingBox.x,y:S.isFixed?S.boundingBox.y:S.boundingBox.y-$e,width:S.boundingBox.width,height:S.boundingBox.height},F=S.isMultiSelect;return r.jsx("div",{className:`${F?xe.multiSelectOutline:xe.singleSelectOutline} ${xe.enter}`,style:{left:z.x,top:z.y,width:z.width,height:z.height,...F?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),rt&&!G&&!g&&!br&&r.jsxs("div",{className:`${xe.hoverTooltip} ${xe.enter}`,style:{left:Math.max(8,Math.min(Re.x,window.innerWidth-100)),top:Math.max(Re.y-(rt.reactComponents?48:32),8)},children:[rt.reactComponents&&r.jsx("div",{className:xe.hoverReactPath,children:rt.reactComponents}),r.jsx("div",{className:xe.hoverElementName,children:rt.elementName})]}),G&&r.jsxs(r.Fragment,{children:[(is=G.multiSelectElements)!=null&&is.length?G.multiSelectElements.filter(S=>document.contains(S)).map((S,T)=>{const z=S.getBoundingClientRect();return r.jsx("div",{className:`${xe.multiSelectOutline} ${rs?xe.exit:xe.enter}`,style:{left:z.left,top:z.top,width:z.width,height:z.height}},`pending-multi-${T}`)}):G.targetElement&&document.contains(G.targetElement)?(()=>{const S=G.targetElement.getBoundingClientRect();return r.jsx("div",{className:`${xe.singleSelectOutline} ${rs?xe.exit:xe.enter}`,style:{left:S.left,top:S.top,width:S.width,height:S.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():G.boundingBox&&r.jsx("div",{className:`${G.isMultiSelect?xe.multiSelectOutline:xe.singleSelectOutline} ${rs?xe.exit:xe.enter}`,style:{left:G.boundingBox.x,top:G.boundingBox.y-$e,width:G.boundingBox.width,height:G.boundingBox.height,...G.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const S=G.x,T=G.isFixed?G.y:G.y-$e;return r.jsxs(r.Fragment,{children:[r.jsx(Vx,{x:S,y:T,isMultiSelect:G.isMultiSelect,isExiting:rs}),r.jsx(wc,{ref:il,element:G.element,selectedText:G.selectedText,computedStyles:G.computedStylesObj,placeholder:G.element==="Area selection"?"What should change in this area?":G.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:Wc,onCancel:Ws,isExiting:rs,lightMode:!vn,accentColor:G.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,S/100*window.innerWidth)),...T>window.innerHeight-290?{bottom:window.innerHeight-T+20}:{top:T+20}}})]})})()]}),W&&r.jsxs(r.Fragment,{children:[(Qi=W.elementBoundingBoxes)!=null&&Qi.length?Ne.length>0?Ne.filter(S=>document.contains(S)).map((S,T)=>{const z=S.getBoundingClientRect();return r.jsx("div",{className:`${xe.multiSelectOutline} ${xe.enter}`,style:{left:z.left,top:z.top,width:z.width,height:z.height}},`edit-multi-live-${T}`)}):W.elementBoundingBoxes.map((S,T)=>r.jsx("div",{className:`${xe.multiSelectOutline} ${xe.enter}`,style:{left:S.x,top:S.y-$e,width:S.width,height:S.height}},`edit-multi-${T}`)):(()=>{const S=Fe&&document.contains(Fe)?Fe.getBoundingClientRect():null,T=S?{x:S.left,y:S.top,width:S.width,height:S.height}:W.boundingBox?{x:W.boundingBox.x,y:W.isFixed?W.boundingBox.y:W.boundingBox.y-$e,width:W.boundingBox.width,height:W.boundingBox.height}:null;return T?r.jsx("div",{className:`${W.isMultiSelect?xe.multiSelectOutline:xe.singleSelectOutline} ${xe.enter}`,style:{left:T.x,top:T.y,width:T.width,height:T.height,...W.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),r.jsx(wc,{ref:os,element:W.element,selectedText:W.selectedText,computedStyles:Wv(W.computedStyles),placeholder:"Edit your feedback...",initialValue:W.comment,submitLabel:"Save",onSubmit:Bi,onCancel:Hc,onDelete:()=>No(W.id),isExiting:Ts,lightMode:!vn,accentColor:W.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const S=W.isFixed?W.y:W.y-$e;return{left:Math.max(160,Math.min(window.innerWidth-160,W.x/100*window.innerWidth)),...S>window.innerHeight-290?{bottom:window.innerHeight-S+20}:{top:S+20}}})()})]}),br&&r.jsxs(r.Fragment,{children:[r.jsx("div",{ref:Br,className:xe.dragSelection}),r.jsx("div",{ref:So,className:xe.highlightsContainer})]})]})]}),document.body)}const ow="/assets/New%20Primary%20BG-DAoEmKAI.png",sw="/assets/calc-CMo95x_D.svg",og="/assets/controller%20icon%20dot-BsAKd-89.svg",Rh="/assets/controller%20icon%20X-hoNMSN3g.svg",Ja="/assets/VPBank-8khTRMC1.svg",Iu="/assets/tick-BqI5X23b.svg",iw="/assets/loading%20state-BknyKJ4Z.svg",aw="/assets/face%20guide-r_1FZRS6.svg",Ya="/assets/Security_logo-CD2YAK1x.svg",lw="/assets/cashier%20svg-63KTkQbH.svg",cw="/assets/Check%20big%20svg-nqBNTLSk.svg",uw="/assets/general_security-B3WBs1an.svg",dw="/assets/general_closecircle_solid-DAJYV9qf.svg",hw="/assets/general_check-square_solid-5XznV3Su.svg",fw="/assets/check%20icon%20mask-DYzXj5KI.svg",_w="/assets/loading_profile-BjAjHtze.riv",pw="/assets/success-Do9X79p7.svg",mw="/assets/Illustration%20success-I7mzB5MU.svg",gw="/assets/loading%20modal-BAzKpYU5.svg",yw="/assets/fx-confetti-D14cWyQC.riv",sg="/assets/general_arrow_back4-DXTLmBt7.svg",b_="/assets/general_info_line-BJ1Rtrsb.svg",vw="/assets/general_arrow_up4-C-fkApO7.svg",ma="/assets/general_arrow_down4-CjFLAu36.svg",k_="/assets/general_contact-DKoTJmNn.svg",xw="/assets/general_edit-4LYg329K.svg",ww="/assets/general_calendar-DV9QSN1D.svg",bw="/assets/nha%CC%A3%CC%82n%20the%CC%82m%20tie%CC%82%CC%80n-ClUv7JDC.png",ig="/assets/general_arrow_next4-C5rXE_t3.svg",kw="/assets/Icon%20%C4%91%E1%BA%B7c%20t%C3%ADnh%2001-DjUDK7SX.svg",jw="/assets/Icon%20%C4%91%E1%BA%B7c%20t%C3%ADnh%2002-X9vgi7LX.svg",Cw="/assets/Icon%20%C4%91%E1%BA%B7c%20t%C3%ADnh%2003-D11mppD5.svg",Sw="/assets/general_copy-CjIIzKBt.svg",Mw="/assets/general_navbar_history_line-Bu7xQgdk.svg",Nw="/assets/general_navbar_home_line-lcZ1FE33.svg",Ew="/assets/Cashier%20BG-BxZbAVA9.svg",Iw="/assets/CL%20icon-CMjMu1cE.svg",Rw="/assets/shield.svg-C318CCWY.svg",Pw="/assets/SOF-CRULNk6N.svg",Lw="/assets/toggle-CUwbuZ2f.svg",Tw="/assets/general_bill-hPDHnoar.svg",Aw="/assets/service_coin-Cr5QmCk1.svg",$w="/assets/general_voucher-BIYNlVqt.svg",Gl=1e7,ag=3e7,Vo=5e5,Ru=2e5,lg=[3,6,9,12],Dw={3:.018,6:.02,9:.023,12:.027};function zt(e){return`${new Intl.NumberFormat("vi-VN").format(e)}đ`}function Ow(e,t){const n=Dw[t],o=Math.round(e*(n/(1-Math.pow(1+n,-t)))),s=Math.round(o*t+Ru),i=s-e-Ru;return{amount:e,term:t,monthlyRate:n,monthlyPayment:o,totalRepayment:s,estimatedInterest:i,processingFee:Ru,firstPaymentDate:"04/06/2026"}}function Fw(e){const t=Math.min(Math.max(e,Gl),ag),n=Math.round((t-Gl)/Vo);return Gl+n*Vo}const Bw=new Set(["userSelect","offer","review","supplement","faceVerify","faceCapture","approval","otp","result","loanDashboard","payment","cashier","paymentDone"]);function j_(){const e=window.location.hash.slice(1);return Bw.has(e)?e:"userSelect"}const cg=N.createContext(null);function zw({children:e}){const[t,n]=N.useState(15e6),[o,s]=N.useState(6),[i,c]=N.useState(j_),[_,f]=N.useState(null),[w,j]=N.useState(!1),[b,v]=N.useState(0),[E,I]=N.useState(!1),[y,Z]=N.useState([]),[C,L]=N.useState(null),[O,A]=N.useState(null),q=ce=>{window.location.hash=ce,c(ce)};N.useEffect(()=>{const ce=()=>c(j_());return window.addEventListener("hashchange",ce),()=>window.removeEventListener("hashchange",ce)},[]);const ae=N.useMemo(()=>Ow(t,o),[t,o]),J=N.useMemo(()=>({amount:t,term:o,quote:ae,step:i,selectedUser:_,showSchedule:w,setAmount:ce=>n(Fw(ce)),setAmountDirect:ce=>n(ce),setTerm:s,setSelectedUser:f,openSchedule:()=>j(!0),closeSchedule:()=>j(!1),totalDisbursed:b,isReturnUser:E,loanHistory:y,addDisbursement:ce=>{v(se=>se+ce.amount),Z(se=>[...se,ce])},markReturnUser:()=>I(!0),goToUserSelect:()=>{I(!1),v(0),Z([]),q("userSelect")},goToReview:()=>q("review"),goToOffer:()=>q("offer"),goToSupplement:()=>q("supplement"),goToFaceVerify:()=>q("faceVerify"),goToFaceCapture:()=>q("faceCapture"),goToApproval:()=>q("approval"),goToOtp:()=>q("otp"),goToResult:()=>q("result"),goToLoanDashboard:()=>q("loanDashboard"),paymentLoanId:C,paymentAmount:O,goToPayment:ce=>{L(ce),q("payment")},goToCashier:ce=>{A(ce),q("cashier")},goToPaymentDone:()=>q("paymentDone"),recordPayment:(ce,se)=>{Z(we=>we.map(me=>{if(me.id!==ce)return me;const[nt,rt,ft]=me.nextDueDate.split("/").map(Number),Re=new Date(ft,rt,nt),yt=`${String(Re.getDate()).padStart(2,"0")}/${String(Re.getMonth()+1).padStart(2,"0")}/${Re.getFullYear()}`;return{...me,paidAmount:me.paidAmount+se,nextDueDate:yt}}));const te=Math.floor(se/5e5)*5e5;v(we=>Math.max(0,we-te))}}),[t,E,y,O,C,ae,_,w,i,o,b]);return r.jsx(cg.Provider,{value:J,children:e})}function Ln(){const e=N.useContext(cg);if(!e)throw new Error("useLoanFlow must be used within LoanFlowProvider");return e}const Ww=[{id:"user-1",displayName:"Phan Lê Ngọc Mai",gender:"Nữ",dateOfBirth:"11/11/1983",idNumber:"9525892385985",oldIdNumber:"90952952352",phone:"84353098549",email:"quangvu0308@gmail.com",idIssueDate:"11/11/2024",idExpiryDate:"11/11/2049",idIssueLocation:"Cục quản lý hành chính",permanentAddress:"Eco Green, Q7 Tân Thuận Tây, HCM",temporaryAddress:"Eco Green HCM Quận 7 Phường Tân Phong...",occupation:"Nhân viên văn phòng",monthlyIncome:"40 triệu",monthlySpending:"25 triệu",loanPurpose:"Tiêu dùng",bankName:"Sacombank",bankLogoKey:"sacombank",accountHolderName:"PHAN LE NGOC MAI",accountNumberMasked:"SCB****4920",emergencyContact1:{name:"Nguyen Huy",phone:"0368 061 866",relationship:"Cha"},emergencyContact2:{name:"Tran Loan",phone:"0368 061 866",relationship:"Mẹ"}},{id:"user-2",displayName:"Hồ Huỳnh Minh Tuấn",gender:"Nam",dateOfBirth:"11/11/1983",idNumber:"9525892385985",oldIdNumber:"90952952352",phone:"84353098549",email:"quangvu0308@gmail.com",idIssueDate:"11/11/2024",idExpiryDate:"11/11/2049",idIssueLocation:"Cục quản lý hành chính",permanentAddress:"Eco Green, Q7 Tân Thuận Tây, HCM",temporaryAddress:"Eco Green HCM Quận 7 Phường Tân Phong...",occupation:"Nhân viên văn phòng",monthlyIncome:"40 triệu",monthlySpending:"25 triệu",loanPurpose:"Tiêu dùng",bankName:"Techcombank",bankLogoKey:"techcombank",accountHolderName:"HO HUYNH MINH TUAN",accountNumberMasked:"TCB****7731",emergencyContact1:{name:"Nguyen Huy",phone:"0368 061 866",relationship:"Cha"},emergencyContact2:{name:"Tran Loan",phone:"0368 061 866",relationship:"Mẹ"}},{id:"user-3",displayName:"Phạm Anh Khoa",gender:"Nam",dateOfBirth:"11/11/1983",idNumber:"9525892385985",oldIdNumber:"90952952352",phone:"84353098549",email:"quangvu0308@gmail.com",idIssueDate:"11/11/2024",idExpiryDate:"11/11/2049",idIssueLocation:"Cục quản lý hành chính",permanentAddress:"Eco Green, Q7 Tân Thuận Tây, HCM",temporaryAddress:"Eco Green HCM Quận 7 Phường Tân Phong...",occupation:"Nhân viên văn phòng",monthlyIncome:"40 triệu",monthlySpending:"25 triệu",loanPurpose:"Tiêu dùng",bankName:"Techcombank",bankLogoKey:"techcombank",accountHolderName:"PHAM ANH KHOA",accountNumberMasked:"TCB****2205",emergencyContact1:{name:"Nguyen Huy",phone:"0368 061 866",relationship:"Cha"},emergencyContact2:{name:"Tran Loan",phone:"0368 061 866",relationship:"Mẹ"}},{id:"user-4",displayName:"Phan Nhất Hào",gender:"Nam",dateOfBirth:"11/11/1983",idNumber:"9525892385985",oldIdNumber:"90952952352",phone:"84353098549",email:"quangvu0308@gmail.com",idIssueDate:"11/11/2024",idExpiryDate:"11/11/2049",idIssueLocation:"Cục quản lý hành chính",permanentAddress:"Eco Green, Q7 Tân Thuận Tây, HCM",temporaryAddress:"Eco Green HCM Quận 7 Phường Tân Phong...",occupation:"Nhân viên văn phòng",monthlyIncome:"40 triệu",monthlySpending:"25 triệu",loanPurpose:"Tiêu dùng",bankName:"Sacombank",bankLogoKey:"sacombank",accountHolderName:"PHAN NHAT HAO",accountNumberMasked:"SCB****6614",emergencyContact1:{name:"Nguyen Huy",phone:"0368 061 866",relationship:"Cha"},emergencyContact2:{name:"Tran Loan",phone:"0368 061 866",relationship:"Mẹ"}}],C_=["userSelect","offer","review","supplement","faceVerify","faceCapture","approval","otp","result","loanDashboard","payment","cashier","paymentDone"];function Hw(e,t){return C_.indexOf(t)>=C_.indexOf(e)?"forward":"back"}const Uw=360;function S_({step:e}){return r.jsxs(r.Fragment,{children:[e==="userSelect"&&r.jsx(qw,{}),e==="offer"&&r.jsx(Jw,{}),e==="review"&&r.jsx(Zw,{}),e==="supplement"&&r.jsx(t5,{}),e==="faceVerify"&&r.jsx(n5,{}),e==="faceCapture"&&r.jsx(o5,{}),e==="approval"&&r.jsx(s5,{}),e==="otp"&&r.jsx(i5,{}),e==="result"&&r.jsx(a5,{}),e==="loanDashboard"&&r.jsx(l5,{}),e==="payment"&&r.jsx(c5,{}),e==="cashier"&&r.jsx(u5,{}),e==="paymentDone"&&r.jsx(d5,{})]})}function Vw({step:e}){const t=N.useRef(e),[n,o]=N.useState(null);return N.useEffect(()=>{if(e===t.current)return;const s=Hw(t.current,e),i=t.current;t.current=e,o({from:i,dir:s});const c=setTimeout(()=>o(null),Uw);return()=>clearTimeout(c)},[e]),r.jsxs("div",{className:"screen-router",children:[n&&r.jsx("div",{className:`screen-slot screen-slot--exit-${n.dir}`,children:r.jsx(S_,{step:n.from})},n.from),r.jsx("div",{className:`screen-slot${n?` screen-slot--enter-${n.dir}`:""}`,children:r.jsx(S_,{step:e})},e)]})}function Yw(e){var t;(t=navigator.clipboard)!=null&&t.writeText?navigator.clipboard.writeText(e).catch(()=>M_(e)):M_(e)}function M_(e){const t=document.createElement("textarea");t.value=e,t.style.cssText="position:fixed;left:-9999px;top:0;opacity:0",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")}finally{document.body.removeChild(t)}}function Xw(){return r.jsx(zw,{children:r.jsx(Qw,{})})}function Qw(){const{step:e,quote:t,term:n,showSchedule:o,closeSchedule:s}=Ln(),i=N.useCallback(c=>Yw(c),[]);return r.jsxs("main",{className:"app-shell",children:[r.jsx("section",{className:"phone-frame","aria-label":"Cashloan loan information screen",children:r.jsxs("div",{className:"screen-root loan-screen",children:[e==="offer"||e==="review"?r.jsx("img",{className:"loan-screen__background",src:ow,alt:"","aria-hidden":"true"}):null,e==="userSelect"?r.jsx("div",{className:"loan-screen__background loan-screen__background--userselect","aria-hidden":"true"}):null,r.jsx("div",{className:"loan-screen__content",children:r.jsx(Vw,{step:e})}),o&&r.jsx(e5,{monthlyPayment:t.monthlyPayment,term:n,firstPaymentDate:t.firstPaymentDate,onClose:s})]})}),r.jsx("div",{className:"agentation-wrapper",children:r.jsx(rw,{copyToClipboard:!1,onCopy:i})})]})}function Kw(e){return e.split(" ").slice(-2).map(t=>t[0]).join("").toUpperCase()}function Gw({user:e,onSelect:t}){return r.jsxs("button",{type:"button",className:"user-card",onClick:t,children:[r.jsx("div",{className:"user-card__avatar",children:Kw(e.displayName)}),r.jsxs("div",{className:"user-card__info",children:[r.jsx("span",{className:"user-card__name",children:e.displayName}),r.jsxs("span",{className:"user-card__meta",children:[e.gender," · ",e.occupation," · ",e.monthlyIncome,"/tháng"]})]})]})}function qw(){const{setSelectedUser:e,goToOffer:t}=Ln(),n=o=>{e(o),t()};return r.jsxs("div",{className:"user-select-screen",children:[r.jsxs("div",{className:"user-select__header",children:[r.jsx("img",{src:Ja,alt:"VPBank",className:"user-select__logo"}),r.jsx("h1",{className:"user-select__title",children:"Chọn người dùng"}),r.jsx("p",{className:"user-select__subtitle",children:"Chọn đúng profile trước khi bắt đầu phỏng vấn"})]}),r.jsx("div",{className:"user-select__list",children:Ww.map(o=>r.jsx(Gw,{user:o,onSelect:()=>n(o)},o.id))})]})}function Jw(){const{amount:e,term:t,quote:n,setAmount:o,setAmountDirect:s,setTerm:i,goToSupplement:c,goToApproval:_,isReturnUser:f,totalDisbursed:w}=Ln(),j=f?ga:Gl,b=f?Ah-w:ag,v=(e-j)/(b-j)*100;return r.jsxs(r.Fragment,{children:[r.jsx(yo,{title:"Thông tin khoản vay"}),r.jsxs("div",{className:"loan-scroll-area",children:[r.jsxs("div",{className:"loan-main loan-main--enter",children:[r.jsxs("section",{className:"loan-card loan-selector-card","aria-label":"Loan selector",children:[r.jsxs("div",{className:"loan-selector-card__header",children:[r.jsx("h2",{className:"loan-selector-card__title",children:"Chọn khoản vay"}),r.jsx("img",{className:"loan-selector-card__art",src:sw,alt:"","aria-hidden":"true"})]}),r.jsxs("div",{className:"loan-selector-card__body",children:[r.jsxs("div",{className:"loan-amount-row",children:[r.jsx("span",{className:"loan-amount-row__label",children:"Bạn muốn vay"}),r.jsx("strong",{className:"loan-amount-row__value",children:zt(e)})]}),r.jsxs("div",{className:"loan-slider",children:[r.jsxs("div",{className:"loan-slider__track",children:[r.jsx("div",{className:"loan-slider__progress",style:{width:`${v}%`}}),r.jsx("div",{className:"loan-slider__thumb",style:{left:`calc(${v}% - 11px)`}}),r.jsx("input",{className:"loan-slider__input","aria-label":"Số tiền vay",type:"range",min:j,max:b,step:Vo,value:e,onChange:E=>(f?s:o)(Number(E.target.value))})]}),r.jsxs("div",{className:"loan-slider__labels",children:[r.jsx("span",{children:zt(j)}),r.jsx("span",{children:zt(b)})]})]}),r.jsx("div",{className:"installment-chips","aria-label":"Installment duration options",children:lg.map(E=>r.jsxs("button",{type:"button",className:`installment-chip${E===t?" installment-chip--active":""}`,onClick:()=>i(E),children:[E," tháng"]},E))}),r.jsxs("div",{className:"loan-metrics",children:[r.jsxs("div",{className:"loan-metric",children:[r.jsxs("div",{className:"loan-metric__label-row",children:[r.jsx("span",{className:"loan-metric__label",children:"Trả hàng tháng"}),r.jsx("span",{className:"loan-metric__info-icon icon-mask icon-mask--blue",style:{"--icon-url":`url(${b_})`},"aria-hidden":"true"})]}),r.jsx("strong",{className:"loan-metric__value",children:zt(n.monthlyPayment)})]}),r.jsx("div",{className:"loan-metrics__divider","aria-hidden":"true"}),r.jsxs("div",{className:"loan-metric loan-metric--right",children:[r.jsxs("div",{className:"loan-metric__label-row",children:[r.jsx("span",{className:"loan-metric__label",children:"Ngày bắt đầu trả"}),r.jsx("span",{className:"loan-metric__info-icon icon-mask icon-mask--blue",style:{"--icon-url":`url(${b_})`},"aria-hidden":"true"})]}),r.jsx("strong",{className:"loan-metric__value",children:n.firstPaymentDate})]})]})]})]}),r.jsx(Ph,{amount:n.amount,totalRepayment:n.totalRepayment,estimatedInterest:n.estimatedInterest,processingFee:n.processingFee,monthlyPayment:n.monthlyPayment,term:t,firstPaymentDate:n.firstPaymentDate}),r.jsxs("section",{className:"product-features","aria-label":"Đặc tính sản phẩm",children:[r.jsx("h3",{className:"product-features__title",children:"Đặc tính sản phẩm"}),r.jsxs("div",{className:"product-features__item",children:[r.jsx("img",{src:kw,alt:"","aria-hidden":"true",className:"product-features__icon"}),r.jsx("span",{className:"product-features__label",children:"Nhận tiền về Zalopay"})]}),r.jsxs("div",{className:"product-features__item",children:[r.jsx("img",{src:jw,alt:"","aria-hidden":"true",className:"product-features__icon"}),r.jsx("span",{className:"product-features__label",children:"Tái cấp hạn mức trên số tiền thanh toán"})]}),r.jsxs("div",{className:"product-features__item",children:[r.jsx("img",{src:Cw,alt:"","aria-hidden":"true",className:"product-features__icon"}),r.jsx("span",{className:"product-features__label",children:"Không cần cung cấp bảng lương"})]})]})]}),r.jsxs("section",{className:"provider-card provider-card--inline","aria-label":"Provider details",children:[r.jsx("span",{className:"provider-card__label",children:"Cung cấp bởi"}),r.jsx("img",{className:"provider-card__logo",src:Ja,alt:"VPBank"}),r.jsx("span",{className:"provider-card__link",children:"Chi tiết"})]}),r.jsx("div",{className:"loan-footer loan-footer--inline",children:r.jsxs("p",{className:"loan-terms",children:['Bằng cách nhấn "Đăng ký vay", tôi đồng ý và chấp nhận chia sẻ theo'," ",r.jsx("span",{className:"loan-terms__link",children:"Điều khoản & Điều kiện đăng ký sản phẩm"})]})})]}),r.jsx("div",{className:"loan-cta-bar",children:r.jsx("button",{type:"button",className:"loan-footer__button",onClick:f?_:c,children:"Đăng ký ngay"})})]})}function Zw(){const{quote:e,goToOffer:t}=Ln();return r.jsxs(r.Fragment,{children:[r.jsx(yo,{title:"Xác nhận khoản vay",onBack:t}),r.jsx("div",{className:"loan-scroll-area",children:r.jsxs("div",{className:"loan-main",children:[r.jsxs("section",{className:"loan-card review-card","aria-label":"Loan review summary",children:[r.jsxs("div",{className:"review-card__top",children:[r.jsx("span",{className:"review-card__eyebrow",children:"Khoản vay đã chọn"}),r.jsx("strong",{className:"review-card__amount",children:zt(e.amount)})]}),r.jsxs("div",{className:"review-card__grid",children:[r.jsxs("div",{className:"review-card__item",children:[r.jsx("span",{className:"review-card__label",children:"Kỳ hạn"}),r.jsxs("strong",{className:"review-card__value",children:[e.term," tháng"]})]}),r.jsxs("div",{className:"review-card__item",children:[r.jsx("span",{className:"review-card__label",children:"Trả hàng tháng"}),r.jsxs("strong",{className:"review-card__value",children:[zt(e.monthlyPayment)," / tháng"]})]}),r.jsxs("div",{className:"review-card__item",children:[r.jsx("span",{className:"review-card__label",children:"Ngày bắt đầu trả"}),r.jsx("strong",{className:"review-card__value",children:e.firstPaymentDate})]}),r.jsxs("div",{className:"review-card__item",children:[r.jsx("span",{className:"review-card__label",children:"Phí thanh toán"}),r.jsx("strong",{className:"review-card__value",children:zt(e.processingFee)})]}),r.jsxs("div",{className:"review-card__item",children:[r.jsx("span",{className:"review-card__label",children:"Tổng dự kiến phải trả"}),r.jsx("strong",{className:"review-card__value",children:zt(e.totalRepayment)})]})]})]}),r.jsx(Ph,{amount:e.amount,totalRepayment:e.totalRepayment,estimatedInterest:e.estimatedInterest,processingFee:e.processingFee,monthlyPayment:e.monthlyPayment,term:e.term,firstPaymentDate:e.firstPaymentDate}),r.jsxs("section",{className:"loan-card review-note",children:[r.jsx("h2",{className:"review-note__title",children:"Mô phỏng nội bộ"}),r.jsx("p",{className:"review-note__copy",children:"Dữ liệu khoản vay đang được giữ trong local state để tiếp tục sang bước sau của prototype mà không cần backend."})]})]})}),r.jsx(Lh,{buttonLabel:"Quay lại chỉnh sửa",onClick:t})]})}function e5({monthlyPayment:e,term:t,firstPaymentDate:n,onClose:o}){const[s,i]=N.useState(!1);N.useEffect(()=>{const f=requestAnimationFrame(()=>i(!0));return()=>cancelAnimationFrame(f)},[]);const c=()=>{i(!1),setTimeout(o,340)},_=Array.from({length:t},(f,w)=>{const[j,b,v]=n.split("/").map(Number),E=new Date(v,b-1+w,j),I=String(E.getDate()).padStart(2,"0"),y=String(E.getMonth()+1).padStart(2,"0"),Z=E.getFullYear();return{period:w+1,dueDate:`${I}/${y}/${Z}`}});return r.jsx("div",{className:`schedule-overlay${s?" schedule-overlay--visible":""}`,onClick:c,children:r.jsxs("div",{className:`schedule-sheet${s?" schedule-sheet--visible":""}`,onClick:f=>f.stopPropagation(),children:[r.jsx("h2",{className:"schedule-sheet__title",children:"Lịch trả nợ dự kiến"}),r.jsx("div",{className:"schedule-sheet__scrollable",children:r.jsxs("div",{className:"schedule-table",children:[r.jsxs("div",{className:"schedule-table__header",children:[r.jsx("span",{children:"Kỳ hạn"}),r.jsx("span",{children:"Tổng phải trả"}),r.jsx("span",{children:"Hạn thanh toán"})]}),r.jsx("div",{className:"schedule-table__body",children:_.map(f=>r.jsxs("div",{className:"schedule-table__row",children:[r.jsx("span",{children:f.period}),r.jsx("span",{children:zt(e)}),r.jsx("span",{children:f.dueDate})]},f.period))})]})}),r.jsx("div",{className:"schedule-sheet__footer",children:r.jsx("button",{type:"button",className:"schedule-sheet__close-btn",onClick:c,children:"Đóng"})})]})})}function Ph({amount:e,totalRepayment:t,estimatedInterest:n,processingFee:o,monthlyRate:s=.027,monthlyPayment:i,term:c,firstPaymentDate:_}){const{openSchedule:f}=Ln(),[w,j]=N.useState(!1),[b,v]=N.useState(!1),E=()=>{v(!0),j(y=>!y)},I=["summary-card__rows",w?"summary-card__rows--expanded":"",b?"summary-card__rows--animated":""].filter(Boolean).join(" ");return r.jsxs("section",{className:"loan-card summary-card","aria-label":"Payment summary",children:[r.jsxs("button",{type:"button",className:"summary-card__header",onClick:E,"aria-expanded":w,children:[r.jsx("span",{className:"summary-card__title",children:"Tổng dự kiến phải trả"}),r.jsxs("div",{className:"summary-card__header-right",children:[r.jsx("strong",{className:"summary-card__total",children:zt(t)}),r.jsx("span",{className:`summary-card__expand-icon icon-mask icon-mask--blue${w?" summary-card__expand-icon--expanded":""}`,style:{"--icon-url":`url(${vw})`,width:"24px",height:"24px"},"aria-hidden":"true"})]})]}),r.jsxs("div",{className:I,children:[r.jsx("div",{className:"summary-card__divider-line","aria-hidden":"true"}),r.jsxs("div",{className:"summary-row",children:[r.jsx("span",{className:"summary-row__label",children:"Số tiền vay"}),r.jsx("span",{className:"summary-row__value",children:zt(e)})]}),r.jsxs("div",{className:"summary-row",children:[r.jsxs("span",{className:"summary-row__label",children:["Lãi tạm tính (",(s*100).toLocaleString("vi-VN"),"%/tháng)"]}),r.jsx("span",{className:"summary-row__value",children:zt(n)})]}),r.jsxs("button",{type:"button",className:"summary-card__schedule-btn",onClick:f,children:[r.jsx("img",{src:ww,alt:"","aria-hidden":"true",className:"summary-card__schedule-icon"}),"Xem lịch trả nợ dự kiến"]})]})]})}function yo({title:e,onBack:t,onClose:n,right:o}){const{goToOffer:s}=Ln(),i=n??s;return r.jsxs("header",{className:"loan-nav",children:[r.jsxs("div",{className:"loan-nav__title-group",children:[r.jsx("button",{type:"button",className:"loan-nav__back-button",onClick:()=>t?t():window.history.length>1?window.history.back():void 0,"aria-label":"Quay lại",children:r.jsx("img",{className:"loan-nav__back-icon",src:sg,alt:"","aria-hidden":"true"})}),r.jsx("h1",{className:"loan-nav__title",children:e})]}),o!==void 0?o:r.jsxs("div",{className:"mini-controls",children:[r.jsx("button",{className:"mini-controls__btn","aria-label":"Thêm",children:r.jsx("img",{src:og,alt:"","aria-hidden":"true",style:{width:24,height:24}})}),r.jsx("div",{className:"mini-controls__divider"}),r.jsx("button",{className:"mini-controls__btn","aria-label":"Đóng",onClick:i,children:r.jsx("img",{src:Rh,alt:"","aria-hidden":"true",style:{width:24,height:24}})})]})]})}function Lh({buttonLabel:e,onClick:t,children:n,buttonClassName:o}){return r.jsxs("footer",{className:"loan-footer",children:[n,r.jsx("button",{type:"button",className:`loan-footer__button${o?` ${o}`:""}`,onClick:t,children:e})]})}function Th({activeStep:e=2}){const t=c=>c<e,n=c=>c===e,o=c=>t(c)?"":n(c)&&e===3?"step-bar__node step-bar__node--loading":"step-bar__node step-bar__node--active",s=c=>c<e?"step-bar__line step-bar__line--done":"step-bar__line step-bar__line--future",i=c=>t(c)?"step-bar__label step-bar__label--done":n(c)?"step-bar__label step-bar__label--active":"step-bar__label step-bar__label--future";return r.jsxs("div",{className:"step-bar",children:[r.jsxs("div",{className:"step-bar__item",children:[r.jsxs("div",{className:"step-bar__connector",children:[r.jsx("div",{className:"step-bar__line step-bar__line--hidden"}),r.jsx("img",{className:"step-bar__node-icon",src:Iu,alt:""}),r.jsx("div",{className:s(1)})]}),r.jsxs("div",{className:i(1),children:["Chọn",r.jsx("br",{}),"khoản vay"]})]}),r.jsxs("div",{className:"step-bar__item",children:[r.jsxs("div",{className:"step-bar__connector",children:[r.jsx("div",{className:s(1)}),t(2)?r.jsx("img",{className:"step-bar__node-icon",src:Iu,alt:""}):r.jsx("div",{className:o(2),children:"2"}),r.jsx("div",{className:s(2)})]}),r.jsx("div",{className:i(2),children:"Gửi hồ sơ"})]}),r.jsxs("div",{className:"step-bar__item",children:[r.jsxs("div",{className:"step-bar__connector",children:[r.jsx("div",{className:s(2)}),t(3)?r.jsx("img",{className:"step-bar__node-icon",src:Iu,alt:""}):n(3)?r.jsx("img",{className:"step-bar__node-icon",src:iw,alt:""}):r.jsx("div",{className:"step-bar__node step-bar__node--future",children:"3"}),r.jsx("div",{className:s(3)})]}),r.jsx("div",{className:i(3),children:"Nhận kết quả"})]}),r.jsxs("div",{className:"step-bar__item",children:[r.jsxs("div",{className:"step-bar__connector",children:[r.jsx("div",{className:s(3)}),r.jsx("div",{className:n(4)?"step-bar__node step-bar__node--active":"step-bar__node step-bar__node--future",children:"4"}),r.jsx("div",{className:"step-bar__line step-bar__line--hidden"})]}),r.jsx("div",{className:i(4),children:"Ký hợp đồng & Nhận tiền"})]})]})}function or({label:e,value:t,bold:n}){return r.jsxs("div",{className:"supp-row",children:[r.jsx("span",{className:"supp-row__label",children:e}),r.jsx("span",{className:`supp-row__value${n?" supp-row__value--bold":""}`,children:t})]})}function pr({label:e,value:t,icon:n}){return r.jsxs("div",{className:"supp-field",children:[r.jsxs("div",{className:"supp-field__content",children:[r.jsx("span",{className:"supp-field__label",children:e}),r.jsx("span",{className:"supp-field__value",children:t})]}),n&&r.jsx("span",{className:"icon-mask icon-mask--blue supp-field__icon",style:{"--icon-url":`url(${n})`}})]})}function da({title:e,summary:t,collapsible:n=!0,children:o}){const[s,i]=N.useState(!1);return n?r.jsxs("div",{className:"supp-card",children:[r.jsxs("button",{type:"button",className:"supp-card__header supp-card__header--button",onClick:()=>i(c=>!c),"aria-expanded":s,children:[r.jsxs("div",{className:"supp-card__header-row",children:[r.jsx("span",{className:"supp-card__title",children:e}),r.jsx("span",{className:`icon-mask supp-card__chevron${s?" supp-card__chevron--open":""}`,style:{"--icon-url":`url(${ma})`},"aria-hidden":"true"})]}),!s&&t&&t.length>0&&r.jsx("div",{className:"supp-card__summary",children:t.map((c,_)=>r.jsx("span",{className:"supp-card__summary-line",children:c},_))})]}),r.jsx("div",{className:`supp-card__body${s?" supp-card__body--open":""}`,children:o})]}):r.jsxs("div",{className:"supp-card",children:[r.jsx("div",{className:"supp-card__header",children:r.jsx("div",{className:"supp-card__header-row",children:r.jsx("span",{className:"supp-card__title",children:e})})}),r.jsx("div",{className:"supp-card__body supp-card__body--always-open",children:o})]})}function t5(){const{goToOffer:e,goToFaceVerify:t,quote:n,amount:o,term:s,selectedUser:i}=Ln(),c=i;return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"supp-head",children:[r.jsx(yo,{title:"Bổ sung thông tin",onBack:e}),r.jsx(Th,{})]}),r.jsxs("div",{className:"supp-scroll",children:[r.jsxs(da,{title:"Thông tin khoản vay",summary:[`${zt(o)} - ${s} tháng`],children:[r.jsx(or,{label:"Số tiền vay",value:zt(o),bold:!0}),r.jsx(or,{label:"Kỳ hạn",value:`${s} tháng`}),r.jsx(or,{label:"Phải trả hàng tháng",value:zt(n.monthlyPayment)}),r.jsx(or,{label:"Ngày đến hạn đầu tiên",value:n.firstPaymentDate}),r.jsxs("button",{className:"reselect-link",onClick:e,children:[r.jsx("span",{className:"icon-mask icon-mask--blue reselect-link__icon",style:{"--icon-url":`url(${xw})`}}),r.jsx("span",{className:"reselect-link__text",children:"Chọn lại khoản vay"})]})]}),r.jsxs(da,{title:"Thông tin cá nhân",summary:c?[`${c.displayName} - ${c.phone}`]:[],children:[r.jsx(or,{label:"Giới tính",value:(c==null?void 0:c.gender)??""}),r.jsx(or,{label:"Ngày sinh",value:(c==null?void 0:c.dateOfBirth)??""}),r.jsx(or,{label:"Số CCCD",value:(c==null?void 0:c.idNumber)??""}),r.jsx(or,{label:"Số điện thoại",value:(c==null?void 0:c.phone)??""}),r.jsx(or,{label:"Ngày cấp",value:(c==null?void 0:c.idIssueDate)??""}),r.jsx(or,{label:"Ngày hết hạn",value:(c==null?void 0:c.idExpiryDate)??""}),r.jsx(or,{label:"Nơi cấp",value:(c==null?void 0:c.idIssueLocation)??""}),r.jsx(or,{label:"Địa chỉ thường trú",value:(c==null?void 0:c.permanentAddress)??""}),r.jsx(or,{label:"CMND cũ",value:(c==null?void 0:c.oldIdNumber)??""})]}),r.jsx(da,{title:"Thông tin bổ sung",summary:c?[`${c.occupation} - Thu nhập ${c.monthlyIncome} - Chi ${c.monthlySpending}`]:[],children:r.jsxs("div",{className:"supp-fields",children:[r.jsx(pr,{label:"Mục đích",value:(c==null?void 0:c.loanPurpose)??"",icon:ma}),r.jsx(pr,{label:"Nghề nghiệp",value:(c==null?void 0:c.occupation)??"",icon:ma}),r.jsxs("div",{className:"supp-field-row",children:[r.jsx(pr,{label:"Thu nhập",value:(c==null?void 0:c.monthlyIncome)??""}),r.jsx(pr,{label:"Tổng chi tiêu",value:(c==null?void 0:c.monthlySpending)??""})]}),r.jsx(pr,{label:"Email",value:(c==null?void 0:c.email)??""}),r.jsxs("div",{children:[r.jsx(pr,{label:"Địa chỉ tạm trú",value:(c==null?void 0:c.temporaryAddress)??""}),r.jsxs("div",{className:"toggle-row",style:{marginTop:8},children:[r.jsx("span",{className:"toggle-row__label",children:"Địa chỉ tạm trú trùng với thường trú"}),r.jsx("span",{className:"toggle-switch"})]})]})]})}),r.jsx(da,{title:"Người liên hệ khẩn cấp 1",summary:c?[`${c.emergencyContact1.name} - ${c.emergencyContact1.phone} - ${c.emergencyContact1.relationship}`]:[],children:r.jsxs("div",{className:"supp-fields",children:[r.jsx(pr,{label:"Họ và tên",value:(c==null?void 0:c.emergencyContact1.name)??""}),r.jsx(pr,{label:"Số điện thoại",value:(c==null?void 0:c.emergencyContact1.phone)??"",icon:k_}),r.jsx(pr,{label:"Mối quan hệ",value:(c==null?void 0:c.emergencyContact1.relationship)??"",icon:ma})]})}),r.jsx(da,{title:"Người liên hệ khẩn cấp 2",summary:c?[`${c.emergencyContact2.name} - ${c.emergencyContact2.phone} - ${c.emergencyContact2.relationship}`]:[],children:r.jsxs("div",{className:"supp-fields",children:[r.jsx(pr,{label:"Họ và tên",value:(c==null?void 0:c.emergencyContact2.name)??""}),r.jsx(pr,{label:"Số điện thoại",value:(c==null?void 0:c.emergencyContact2.phone)??"",icon:k_}),r.jsx(pr,{label:"Mối quan hệ",value:(c==null?void 0:c.emergencyContact2.relationship)??"",icon:ma})]})}),r.jsxs("div",{className:"consent-card",children:[r.jsxs("div",{className:"consent-card__check-row",children:[r.jsx("span",{className:"icon-mask icon-mask--blue consent-card__check-icon",style:{"--icon-url":`url(${hw})`}}),r.jsx("span",{className:"consent-card__intro",children:"Tôi đã đọc và đồng ý với:"})]}),r.jsx("div",{className:"consent-card__terms",children:r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("span",{className:"consent-card__link",children:"Chính sách sản phẩm "}),"và"," ",r.jsx("span",{className:"consent-card__link",children:"bảo vệ dữ liệu cá nhân"})," của đối tác VPBank"]}),r.jsxs("li",{children:["Đảm bảo các cá nhân có trong thông tin tham chiếu đã đọc, đồng ý với"," ",r.jsx("span",{className:"consent-card__link",children:"Chính sách bảo vệ quyền riêng tư của Zalopay "}),"và cho phép Zalopay thu thập, sử dụng và chia sẻ thông tin cho VPBank để thực hiện sản phẩm, dịch vụ yêu cầu."]})]})})]})]}),r.jsx(Lh,{buttonLabel:"Tiếp tục",onClick:t})]})}function n5(){const{goToSupplement:e,goToFaceCapture:t}=Ln();return r.jsxs(r.Fragment,{children:[r.jsx(yo,{title:"Xác thực khuôn mặt",onBack:e}),r.jsxs("div",{className:"face-verify",children:[r.jsxs("div",{className:"face-verify__intro",children:[r.jsx("h2",{className:"face-verify__title",children:"Quét gương mặt"}),r.jsx("p",{className:"face-verify__subtitle",children:"Đảm bảo camera rõ nét trước khi chụp bạn nhé"})]}),r.jsx("img",{className:"face-verify__guide",src:aw,alt:""})]}),r.jsx(Lh,{buttonLabel:"Bắt đầu ngay",onClick:t,children:r.jsxs("div",{className:"face-verify__security",children:[r.jsx("p",{className:"face-verify__security-text",children:"Bảo vệ toàn diện tài khoản và tuân thủ quy định Ngân hàng Nhà nước Việt Nam"}),r.jsx("img",{className:"face-verify__security-logo",src:Ya,alt:"PCI DSS"})]})})]})}const r5=1800;function o5(){const{goToFaceVerify:e,goToApproval:t}=Ln(),n=N.useRef(null),[o,s]=N.useState("scanning");N.useEffect(()=>{let c=null,_=!1;async function f(){try{if(c=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:!1}),_){c.getTracks().forEach(w=>w.stop());return}n.current&&(n.current.srcObject=c)}catch{}}return f(),()=>{_=!0,c==null||c.getTracks().forEach(w=>w.stop())}},[]),N.useEffect(()=>{const c=setTimeout(()=>s("ringDrawing"),3500),_=setTimeout(()=>s("done"),3500+r5);return()=>{clearTimeout(c),clearTimeout(_)}},[]),N.useEffect(()=>{if(o!=="done")return;const c=setTimeout(t,1e3);return()=>clearTimeout(c)},[o]);const i=o!=="scanning";return r.jsxs("div",{className:"face-capture",children:[r.jsx("video",{ref:n,className:"face-capture__video",autoPlay:!0,playsInline:!0,muted:!0}),r.jsx("div",{className:"face-capture__mask"}),r.jsx("svg",{className:"face-capture__ring",viewBox:"0 0 300 360",fill:"none","aria-hidden":"true",children:r.jsx("path",{className:`face-capture__ring-path${i?" face-capture__ring-path--draw":""}`,d:"M150,1 A149,179 0 0 1 150,359 A149,179 0 0 1 150,1",pathLength:100})}),r.jsx("div",{className:"face-capture__nav",children:r.jsx("button",{type:"button",className:"face-capture__back",onClick:e,"aria-label":"Quay lại",children:r.jsx("span",{className:"icon-mask face-capture__back-icon",style:{"--icon-url":`url(${sg})`}})})}),r.jsx("div",{className:"face-capture__badge",children:o==="done"?r.jsx("img",{className:"face-capture__check",src:fw,alt:""}):r.jsx("span",{className:"icon-mask face-capture__shield",style:{"--icon-url":`url(${uw})`},"aria-hidden":"true"})})]})}function s5(){const{goToOffer:e,goToOtp:t,amount:n,quote:o,addDisbursement:s}=Ln(),{RiveComponent:i}=Sh.useRive({src:_w,autoplay:!0}),[c,_]=N.useState(!1);return N.useEffect(()=>{const f=setTimeout(()=>_(!0),5e3);return()=>clearTimeout(f)},[]),r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"supp-head",children:[r.jsx(yo,{title:"Phê duyệt hồ sơ",onBack:e}),r.jsx(Th,{activeStep:c?4:3})]}),r.jsx("div",{className:"approval-body",children:r.jsx("div",{className:"approval-card",children:r.jsx("div",{className:"approval-card__content",children:c?r.jsxs(r.Fragment,{children:[r.jsx("img",{src:pw,alt:"",className:"approval-rive"}),r.jsxs("div",{className:"approval-text",children:[r.jsxs("h2",{className:"approval-title",children:["Số tiền giải ngân lần đầu là ",r.jsx("span",{className:"approval-title--green",children:zt(n)})]}),r.jsx("p",{className:"approval-subtitle",children:"Ký hợp đồng để nhận giải ngân về Ví Zalopay"})]}),r.jsxs("div",{className:"approval-summary-wrap",children:[r.jsx(Ph,{amount:n,totalRepayment:o.totalRepayment,estimatedInterest:o.estimatedInterest,processingFee:o.processingFee,monthlyRate:o.monthlyRate,monthlyPayment:o.monthlyPayment,term:o.term,firstPaymentDate:o.firstPaymentDate}),r.jsx("button",{className:"partner-banner__btn",onClick:()=>{s({id:`loan-${Date.now()}`,amount:n,term:o.term,monthlyPayment:o.monthlyPayment,firstPaymentDate:o.firstPaymentDate,paidAmount:0,nextDueDate:o.firstPaymentDate}),t()},children:"Ký hợp đồng"})]})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"approval-rive",children:r.jsx(i,{})}),r.jsxs("div",{className:"approval-text",children:[r.jsx("h2",{className:"approval-title",children:"Hồ sơ đang được xử lí"}),r.jsx("p",{className:"approval-subtitle",children:"Vui lòng chờ kết quả phê duyệt trong vài phút để ký hợp đồng và nhận giải ngân khoản vay"})]}),r.jsx("button",{className:"approval-btn approval-btn--disabled",disabled:!0,children:"Ký hợp đồng"}),r.jsx("button",{className:"approval-btn approval-btn--link",children:"Chi tiết hồ sơ"})]})},c?"success":"loading")})}),r.jsxs("div",{className:"approval-footer",children:[r.jsx("span",{className:"approval-footer__label",children:"Cung cấp bởi"}),r.jsx("img",{src:Ja,alt:"VPBank",className:"approval-footer__logo approval-footer__logo--tnex"})]})]})}function i5(){const{goToApproval:e,goToResult:t}=Ln(),[n,o]=N.useState(""),[s,i]=N.useState(29),[c,_]=N.useState(!1),f=N.useRef(null);N.useEffect(()=>{var v;(v=f.current)==null||v.focus()},[]);const[w,j]=N.useState(!1);N.useEffect(()=>{if(n.length!==6)return;j(!0);const v=setTimeout(t,1e3);return()=>clearTimeout(v)},[n]),N.useEffect(()=>{if(s<=0){_(!0);return}const v=setInterval(()=>i(E=>E-1),1e3);return()=>clearInterval(v)},[s]);const b=`00:${String(s).padStart(2,"0")}s`;return r.jsxs(r.Fragment,{children:[w&&r.jsx("div",{className:"otp-modal-overlay",children:r.jsx("img",{src:gw,alt:"Đang xác thực",className:"otp-modal"})}),r.jsxs("div",{className:"supp-head",children:[r.jsx(yo,{title:"Phê duyệt hồ sơ",onBack:e}),r.jsx(Th,{activeStep:4})]}),r.jsxs("div",{className:"otp-body",onClick:()=>{var v;return(v=f.current)==null?void 0:v.focus()},children:[r.jsx("p",{className:"otp-desc",children:"Xác thực OTP để ký hợp đồng và nhận giải ngân. Mã xác thực vừa được VPBank gửi đến số điện thoại của bạn"}),r.jsxs("div",{className:"otp-field",onClick:v=>v.stopPropagation(),children:[r.jsx("input",{ref:f,className:"otp-field__input",type:"tel",inputMode:"numeric",pattern:"[0-9]*",maxLength:6,value:n,onChange:v=>o(v.target.value.replace(/\D/g,"")),autoComplete:"one-time-code"}),n.length>0&&r.jsx("button",{className:"otp-field__clear",type:"button",onClick:()=>o(""),children:r.jsx("span",{className:"icon-mask otp-field__clear-icon",style:{"--icon-url":`url(${dw})`}})})]}),r.jsx("div",{className:"otp-resend",children:c?r.jsx("button",{className:"otp-resend__link",onClick:()=>{i(29),_(!1)},children:"Gửi lại mã xác thực"}):r.jsxs("span",{className:"otp-resend__label",children:["Gửi lại mã sau ",r.jsx("span",{className:"otp-resend__timer",children:b})]})})]})]})}const Ah=4e7;function a5(){const{goToOffer:e,goToLoanDashboard:t,amount:n,totalDisbursed:o,setAmountDirect:s,setTerm:i,markReturnUser:c}=Ln(),{RiveComponent:_}=Sh.useRive({src:yw,autoplay:!0}),f=Ah-o,w=f>=15e5,[j,b]=N.useState(!1);return N.useEffect(()=>{if(!w)return;const v=setTimeout(()=>b(!0),1e3);return()=>clearTimeout(v)},[w]),r.jsxs("div",{className:"result-screen",children:[r.jsx("div",{className:"result-confetti","aria-hidden":"true",children:r.jsx(_,{})}),r.jsx("div",{className:"supp-head",children:r.jsx(yo,{title:"Kết quả giải ngân",onBack:e,onClose:e})}),r.jsx("div",{className:"result-illustration",children:r.jsx("img",{src:mw,alt:"",className:"result-illustration__img"})}),r.jsxs("div",{className:"result-text",children:[r.jsx("h2",{className:"result-text__title",children:"Bạn đã được giải ngân"}),r.jsx("p",{className:"result-text__sub",children:"Số tiền được cấp cho bạn là"})]}),r.jsx("div",{className:"result-amount",children:r.jsxs("span",{className:"result-amount__value",children:["+",zt(n)]})}),r.jsx("div",{className:"result-bottom",children:r.jsxs("div",{className:"result-footer",children:[r.jsx("span",{className:"result-footer__label",children:"Cung cấp bởi"}),r.jsx("img",{src:Ja,alt:"VPBank",className:"result-footer__logo"})]})}),w&&r.jsxs("div",{className:`result-encourage-banner${j?" result-encourage-banner--visible":""}`,children:[r.jsx("img",{src:bw,alt:"","aria-hidden":"true",className:"result-encourage-banner__img"}),r.jsxs("div",{className:"result-encourage-banner__content",children:[r.jsxs("p",{className:"result-encourage-banner__text",children:["Bạn đã được duyệt sẵn thêm ",r.jsx("span",{className:"result-encourage-banner__amount",children:zt(f)})]}),r.jsx("p",{className:"result-encourage-banner__sub",children:"Vay thêm nhanh mà không cần xét duyệt lại."}),r.jsxs("button",{type:"button",className:"result-encourage-banner__cta",onClick:()=>{const v=Math.round(f/2/Vo)*Vo;s(v),i(6),c(),e()},children:["Nhận thêm tiền",r.jsx("span",{className:"icon-mask icon-mask--blue result-encourage-banner__cta-icon",style:{"--icon-url":`url(${ig})`},"aria-hidden":"true"})]})]})]}),r.jsx("div",{className:"result-buttons",children:r.jsx("button",{className:"result-btn result-btn--primary",onClick:t,children:"Quản lý khoản vay"})})]})}const ga=1e6;function l5(){const{quote:e,selectedUser:t,goToOffer:n,totalDisbursed:o,loanHistory:s,setAmountDirect:i,setTerm:c,markReturnUser:_,goToPayment:f}=Ln(),w=Ah-o,j=w>=15e5,[b,v]=N.useState(Math.round(w/2/Vo)*Vo),[E,I]=N.useState(6),y=j?(b-ga)/(w-ga)*100:0,Z=t?t.displayName.split(" ").slice(-1)[0]:"bạn";return r.jsxs("div",{className:"dashboard-screen",children:[r.jsx("div",{className:"supp-head",children:r.jsx(yo,{title:"Quản lý gói vay",onBack:j?n:()=>{},onClose:j?n:void 0,right:j?void 0:null})}),r.jsx("div",{className:"dashboard-tabs",children:["Gói hiện tại","Đã tất toán","Đã hủy"].map((C,L)=>r.jsxs("div",{className:`dashboard-tab${L===0?" dashboard-tab--active":" dashboard-tab--inactive"}`,children:[r.jsx("span",{className:"dashboard-tab__label",children:C}),r.jsx("div",{className:"dashboard-tab__indicator"})]},C))}),r.jsx("div",{className:"loan-scroll-area",children:r.jsxs("div",{className:"dashboard-content",children:[j&&r.jsxs("section",{className:"dashboard-section",children:[r.jsxs("h2",{className:"dashboard-section__title",children:["Phê duyệt tốt hơn cho ",Z]}),r.jsxs("div",{className:"dashboard-withdraw-wrapper",children:[r.jsx("div",{className:"dashboard-withdraw-card",children:r.jsxs("div",{className:"dashboard-withdraw-card__inner",children:[r.jsxs("div",{className:"dashboard-withdraw-card__amount-row",children:[r.jsx("span",{children:"Bạn muốn vay"}),r.jsx("strong",{children:zt(b)})]}),r.jsxs("div",{className:"dashboard-withdraw-card__slider",children:[r.jsxs("div",{className:"loan-slider__track",children:[r.jsx("div",{className:"loan-slider__progress",style:{width:`${y}%`}}),r.jsx("div",{className:"loan-slider__thumb",style:{left:`calc(${y}% - 11px)`}}),r.jsx("input",{className:"loan-slider__input","aria-label":"Số tiền muốn rút thêm",type:"range",min:ga,max:w,step:Vo,value:b,onChange:C=>v(Number(C.target.value))})]}),r.jsxs("div",{className:"dashboard-withdraw-card__slider-labels",children:[r.jsx("span",{children:zt(ga)}),r.jsx("span",{children:zt(w)})]})]}),r.jsx("div",{className:"dashboard-withdraw-card__terms",children:lg.map(C=>r.jsxs("button",{type:"button",className:`dashboard-term-chip${E===C?" dashboard-term-chip--active":""}`,onClick:()=>I(C),children:[C," tháng"]},C))}),r.jsx("button",{type:"button",className:"dashboard-withdraw-card__cta",onClick:()=>{i(b),c(E),_(),n()},children:"01 bước nhận giải ngân"})]})}),r.jsx("div",{className:"dashboard-badge",children:"Tăng thêm hạn mức"})]})]}),s.length>0&&r.jsxs("section",{className:"dashboard-section",children:[r.jsx("h2",{className:"dashboard-section__title",children:"Khoản vay hiện tại"}),[...s].reverse().map(C=>r.jsxs("div",{className:"dashboard-loan-card",children:[r.jsxs("div",{className:"dashboard-loan-card__header",children:[r.jsx("img",{src:Ja,alt:"VPBank",className:"dashboard-loan-card__logo"}),r.jsxs("div",{className:"dashboard-loan-card__meta",children:[r.jsxs("div",{className:"dashboard-loan-card__contract-row",children:[r.jsxs("span",{className:"dashboard-loan-card__contract",children:["Mã HĐ: VP BANK",C.id.slice(-6).toUpperCase()]}),r.jsx("img",{src:Sw,alt:"","aria-hidden":"true",className:"dashboard-loan-card__copy-icon",style:{filter:"invert(16%) sepia(96%) saturate(3000%) hue-rotate(218deg) brightness(95%) contrast(105%)"}})]}),r.jsxs("p",{className:"dashboard-loan-card__amount-label",children:["Khoản vay ",r.jsx("strong",{children:zt(C.amount)})]})]}),r.jsx("span",{className:"dashboard-loan-card__detail",children:"Chi tiết"})]}),r.jsx("div",{className:"dashboard-divider-dots"}),r.jsxs("div",{className:"dashboard-loan-card__rows",children:[r.jsxs("div",{className:"dashboard-loan-card__row",children:[r.jsx("span",{className:"dashboard-loan-card__row-label",children:"Hạn thanh toán"}),r.jsx("span",{className:"dashboard-loan-card__row-value",children:C.nextDueDate})]}),r.jsxs("div",{className:"dashboard-loan-card__row",children:[r.jsx("span",{className:"dashboard-loan-card__row-label",children:"Dư nợ trong kỳ"}),r.jsx("span",{className:"dashboard-loan-card__row-value",children:zt(C.monthlyPayment)})]})]}),r.jsxs("div",{className:"dashboard-loan-card__actions",children:[r.jsx("button",{type:"button",className:"dashboard-loan-card__pay-btn",onClick:()=>f(C.id),children:"Thanh toán ngay"}),r.jsx("button",{type:"button",className:"dashboard-loan-card__settle-link",children:"Bạn muốn tất toán?"})]})]},C.id))]})]})}),r.jsxs("div",{className:"dashboard-tabbar",children:[r.jsxs("div",{className:"dashboard-tabbar__content",children:[r.jsxs("div",{className:"dashboard-tabbar__item",children:[r.jsx("div",{className:"dashboard-tabbar__indicator--active"}),r.jsx("div",{className:"dashboard-tabbar__icon-wrap",children:r.jsx("img",{src:Nw,alt:"","aria-hidden":"true",className:"dashboard-tabbar__icon"})}),r.jsx("span",{className:"dashboard-tabbar__label dashboard-tabbar__label--active",children:"Hồ sơ vay"})]}),r.jsxs("div",{className:"dashboard-tabbar__item",children:[r.jsx("div",{className:"dashboard-tabbar__indicator--inactive"}),r.jsx("div",{className:"dashboard-tabbar__icon-wrap",children:r.jsx("img",{src:Mw,alt:"","aria-hidden":"true",className:"dashboard-tabbar__icon"})}),r.jsx("span",{className:"dashboard-tabbar__label dashboard-tabbar__label--inactive",children:"Lịch sử"})]})]}),r.jsx("div",{className:"dashboard-home-indicator",children:r.jsx("div",{className:"dashboard-home-indicator__bar"})})]})]})}function c5(){const{loanHistory:e,paymentLoanId:t,selectedUser:n,goToLoanDashboard:o,goToCashier:s}=Ln(),i=e.find(I=>I.id===t)??e[e.length-1],c=i?i.monthlyPayment:0,_=Math.round(c*.2),[f,w]=N.useState("full"),[j,b]=N.useState(""),v=i?`VP BANK${i.id.slice(-6).toUpperCase()}`:"",E=f==="full"?c:f==="min"?_:parseInt(j.replace(/\D/g,""),10)||0;return r.jsxs("div",{className:"payment-screen",children:[r.jsx("div",{className:"supp-head",children:r.jsx(yo,{title:"Thanh toán khoản vay",onBack:o,onClose:o})}),r.jsx("div",{className:"loan-scroll-area",children:r.jsxs("div",{className:"payment-content",children:[r.jsxs("div",{className:"payment-card",children:[r.jsx("h2",{className:"payment-card__title",children:"Thông tin thanh toán"}),r.jsxs("div",{className:"payment-options",children:[r.jsxs("label",{className:"payment-option",children:[r.jsx("input",{type:"radio",name:"payment",checked:f==="full",onChange:()=>w("full")}),r.jsx("span",{className:"payment-option__radio"}),r.jsx("span",{className:"payment-option__label",children:"Thanh toán dư nợ cuối kỳ"}),r.jsx("span",{className:"payment-option__amount",children:zt(c)})]}),r.jsxs("label",{className:"payment-option",children:[r.jsx("input",{type:"radio",name:"payment",checked:f==="min",onChange:()=>w("min")}),r.jsx("span",{className:"payment-option__radio"}),r.jsx("span",{className:"payment-option__label",children:"Thanh toán mức tối thiểu"}),r.jsx("span",{className:"payment-option__amount",children:zt(_)})]}),r.jsxs("div",{className:"payment-option payment-option--input",children:[r.jsx("input",{type:"radio",name:"payment",checked:f==="custom",onChange:()=>w("custom")}),r.jsx("span",{className:"payment-option__radio",onClick:()=>w("custom")}),r.jsx("input",{className:"payment-option__input",placeholder:"Nhập số khác",value:j,onFocus:()=>w("custom"),onChange:I=>b(I.target.value)})]})]})]}),r.jsxs("div",{className:"payment-card",children:[r.jsx("h2",{className:"payment-card__title",children:"Thông tin khách hàng"}),r.jsxs("div",{className:"payment-info-rows",children:[r.jsxs("div",{className:"payment-info-row",children:[r.jsx("span",{className:"payment-info-row__label",children:"Số hợp đồng"}),r.jsx("span",{className:"payment-info-row__value",children:v})]}),r.jsx("div",{className:"payment-info-row__divider"}),r.jsxs("div",{className:"payment-info-row",children:[r.jsx("span",{className:"payment-info-row__label",children:"Tên khách hàng"}),r.jsx("span",{className:"payment-info-row__value",children:n==null?void 0:n.displayName})]}),r.jsx("div",{className:"payment-info-row__divider"}),r.jsxs("div",{className:"payment-info-row",children:[r.jsx("span",{className:"payment-info-row__label",children:"Số CMND/CCCD"}),r.jsx("span",{className:"payment-info-row__value",children:n==null?void 0:n.oldIdNumber})]})]})]})]})}),r.jsxs("div",{className:"payment-bottom-bar",children:[r.jsxs("div",{className:"payment-bottom-bar__total",children:[r.jsx("span",{children:"Tổng tiền thanh toán"}),r.jsx("strong",{children:zt(E)})]}),r.jsx("button",{type:"button",className:"payment-bottom-bar__btn",onClick:()=>s(E),children:"Tiếp tục"})]})]})}function u5(){var L;const{paymentAmount:e,paymentLoanId:t,loanHistory:n,selectedUser:o,goToLoanDashboard:s,goToPaymentDone:i,recordPayment:c}=Ln(),_=n.find(O=>O.id===t)??n[n.length-1],[f,w]=N.useState(!1),[j,b]=N.useState(!1),v=()=>{b(!0),setTimeout(()=>{w(!1),b(!1)},340)},E=((L=_==null?void 0:_.firstPaymentDate)==null?void 0:L.split("/"))??[],I=E.length===3?`${parseInt(E[1],10)}/${E[2]}`:"",y=e??0,Z=new Intl.NumberFormat("vi-VN").format(y),C=_?`VP BANK${_.id.slice(-6).toUpperCase()}`:"";return r.jsxs("div",{className:"cashier-screen",children:[r.jsx("div",{className:"cashier-bg-header",children:r.jsx("img",{src:Ew,alt:"",className:"cashier-bg-header__img"})}),r.jsx("div",{className:"cashier-nav",children:r.jsxs("div",{className:"cashier-nav__title-row",children:[r.jsxs("div",{className:"cashier-nav__service",children:[r.jsx("img",{src:Iw,alt:"",className:"cashier-service-icon"}),r.jsxs("div",{className:"cashier-service-info",children:[r.jsxs("span",{className:"cashier-service-name",children:["Thanh toán khoản vay ",I]}),r.jsx("span",{className:"cashier-service-sub",children:"Vay tiền nhanh"})]})]}),r.jsxs("div",{className:"mini-controls",children:[r.jsx("button",{className:"mini-controls__btn","aria-label":"Thêm",children:r.jsx("img",{src:og,alt:"","aria-hidden":"true",style:{width:24,height:24}})}),r.jsx("div",{className:"mini-controls__divider"}),r.jsx("button",{className:"mini-controls__btn","aria-label":"Đóng",onClick:s,children:r.jsx("img",{src:Rh,alt:"","aria-hidden":"true",style:{width:24,height:24}})})]})]})}),r.jsxs("div",{className:"cashier-content",children:[r.jsxs("div",{className:"cashier-amount-section",children:[r.jsxs("div",{className:"cashier-amount",children:[r.jsx("span",{className:"cashier-amount__number",children:Z}),r.jsx("span",{className:"cashier-amount__unit",children:"đ"})]}),r.jsxs("button",{type:"button",className:"cashier-detail-pill",onClick:()=>w(!0),children:[r.jsx("img",{src:Tw,alt:"",className:"cashier-detail-pill__icon cashier-detail-pill__icon--blue"}),"Chi tiết giao dịch"]})]}),r.jsxs("div",{className:"cashier-options-card",children:[r.jsxs("div",{className:"cashier-options-row",children:[r.jsxs("div",{className:"cashier-options-row__left",children:[r.jsx("img",{src:Aw,alt:"",className:"cashier-options-row__icon"}),r.jsx("span",{children:"Dùng 10.000 xu"})]}),r.jsx("img",{src:Lw,alt:"","aria-hidden":"true",className:"cashier-toggle"})]}),r.jsx("div",{className:"cashier-options-divider"}),r.jsxs("div",{className:"cashier-options-row",children:[r.jsxs("div",{className:"cashier-options-row__left",children:[r.jsx("img",{src:$w,alt:"",className:"cashier-options-row__icon"}),r.jsx("span",{children:"Thêm hoặc nhập mã ưu đãi"})]}),r.jsx("img",{src:ig,alt:"","aria-hidden":"true",style:{width:24,height:24}})]})]}),r.jsxs("div",{className:"cashier-account-section",children:[r.jsxs("div",{className:"cashier-account-section__header",children:[r.jsx("span",{className:"cashier-account-section__title",children:"Tài khoản/ Thẻ"}),r.jsx("span",{className:"cashier-account-section__link",children:"Xem tất cả"})]}),r.jsx("img",{src:Pw,alt:"Tài khoản",className:"cashier-sof-image"})]})]}),r.jsxs("div",{className:"cashier-cta",children:[r.jsxs("button",{type:"button",className:"cashier-cta__btn",onClick:()=>{t&&e&&c(t,e),i()},children:[r.jsx("img",{src:Rw,alt:"","aria-hidden":"true",className:"cashier-cta__shield"}),"Xác nhận"]}),r.jsxs("div",{className:"cashier-security-row",children:[r.jsx("span",{className:"cashier-security-row__text",children:"Bảo mật và An toàn là ưu tiên hàng đầu"}),r.jsx("img",{src:Ya,alt:"","aria-hidden":"true",className:"cashier-security-row__badge"}),r.jsx("img",{src:Ya,alt:"","aria-hidden":"true",className:"cashier-security-row__badge"})]})]}),f&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:`cashier-scrim${j?" cashier-scrim--closing":""}`,onClick:v}),r.jsxs("div",{className:`cashier-detail-sheet${j?" cashier-detail-sheet--closing":""}`,children:[r.jsx("div",{className:"cashier-detail-sheet__header",children:r.jsx("span",{className:"cashier-detail-sheet__title",children:"Chi tiết giao dịch"})}),r.jsxs("div",{className:"cashier-detail-sheet__info-card",children:[r.jsxs("div",{className:"cashier-detail-row",children:[r.jsx("span",{children:"Mã hợp đồng"}),r.jsx("span",{children:C})]}),r.jsxs("div",{className:"cashier-detail-row",children:[r.jsx("span",{children:"Tên khách hàng"}),r.jsx("span",{children:o==null?void 0:o.displayName})]}),r.jsxs("div",{className:"cashier-detail-row",children:[r.jsx("span",{children:"Nhà cung cấp"}),r.jsx("span",{children:"VP Bank"})]}),r.jsxs("div",{className:"cashier-detail-row",children:[r.jsx("span",{children:"Số CCCD"}),r.jsx("span",{children:o==null?void 0:o.oldIdNumber})]}),r.jsxs("div",{className:"cashier-detail-row",children:[r.jsx("span",{children:"Phí giao dịch"}),r.jsx("span",{children:"Miễn phí"})]})]}),r.jsxs("div",{className:"cashier-detail-sheet__summary",children:[r.jsxs("div",{className:"cashier-detail-row",children:[r.jsx("span",{children:"Tổng tiền"}),r.jsx("span",{children:zt(y)})]}),r.jsxs("div",{className:"cashier-detail-row",children:[r.jsx("span",{children:"Tổng phí"}),r.jsx("span",{children:"0đ"})]}),r.jsxs("div",{className:"cashier-detail-row cashier-detail-row--bold",children:[r.jsx("span",{children:"Số tiền cần thanh toán"}),r.jsx("span",{children:zt(y)})]}),r.jsx("button",{type:"button",className:"cashier-detail-sheet__back-btn",onClick:v,children:"Quay lại"})]})]})]})]})}function d5(){var Z;const{paymentAmount:e,paymentLoanId:t,loanHistory:n,selectedUser:o,goToLoanDashboard:s}=Ln(),i=n.find(C=>C.id===t)??n[n.length-1],[c,_]=N.useState(!1),[f,w]=N.useState(!1),j=()=>{w(!0),setTimeout(()=>{_(!1),w(!1)},340)},b=e??0,v=new Intl.NumberFormat("vi-VN").format(b),E=i?`VP BANK${i.id.slice(-6).toUpperCase()}`:"",I=((Z=i==null?void 0:i.firstPaymentDate)==null?void 0:Z.split("/"))??[],y=I.length===3?`${parseInt(I[1],10)}/${I[2]}`:"";return r.jsxs("div",{className:"payment-done-screen",children:[r.jsx("div",{className:"payment-done-bg",children:r.jsx("img",{src:lw,alt:"",className:"payment-done-bg__img"})}),r.jsx("div",{className:"payment-done-nav",children:r.jsx("button",{type:"button",className:"mini-controls__btn","aria-label":"Đóng",onClick:s,children:r.jsx("img",{src:Rh,alt:"","aria-hidden":"true",style:{width:24,height:24}})})}),r.jsxs("div",{className:"payment-done-content",children:[r.jsx("img",{src:cw,alt:"",className:"payment-done__check"}),r.jsxs("div",{className:"payment-done__info",children:[r.jsxs("div",{className:"payment-done__title-block",children:[r.jsx("span",{className:"payment-done__title",children:"Thanh toán thành công"}),r.jsxs("div",{className:"payment-done__txid-row",children:[r.jsx("span",{className:"payment-done__txid-label",children:"Mã giao dịch: "}),r.jsx("span",{className:"payment-done__txid-value",children:"#250820000017761"})]}),r.jsx("span",{className:"payment-done__meta",children:"Thời gian giao dịch: 09:02 18/06/2026"}),r.jsxs("span",{className:"payment-done__meta",children:["Thanh toán khoản vay ",y]})]}),r.jsxs("div",{className:"payment-done__amount",children:[r.jsx("span",{className:"payment-done__amount-number",children:v}),r.jsx("span",{className:"payment-done__amount-unit",children:"đ"})]})]}),r.jsxs("div",{className:"payment-done__actions",children:[r.jsx("button",{type:"button",className:"payment-done__btn",onClick:s,children:"Đóng"}),r.jsx("button",{type:"button",className:"payment-done__btn",onClick:()=>_(!0),children:"Chi tiết giao dịch"})]}),r.jsxs("div",{className:"payment-done__security",children:[r.jsx("span",{className:"cashier-security-row__text",children:"Bảo mật và An toàn là ưu tiên hàng đầu chúng tôi!"}),r.jsxs("div",{style:{display:"flex",gap:2},children:[r.jsx("img",{src:Ya,alt:"",className:"cashier-security-row__badge"}),r.jsx("img",{src:Ya,alt:"",className:"cashier-security-row__badge"})]})]})]}),c&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:`cashier-scrim${f?" cashier-scrim--closing":""}`,onClick:j}),r.jsxs("div",{className:`cashier-detail-sheet${f?" cashier-detail-sheet--closing":""}`,children:[r.jsx("div",{className:"cashier-detail-sheet__header",children:r.jsx("span",{className:"cashier-detail-sheet__title",children:"Chi tiết giao dịch"})}),r.jsxs("div",{className:"cashier-detail-sheet__info-card",children:[r.jsxs("div",{className:"cashier-detail-row",children:[r.jsx("span",{children:"Mã hợp đồng"}),r.jsx("span",{children:E})]}),r.jsxs("div",{className:"cashier-detail-row",children:[r.jsx("span",{children:"Tên khách hàng"}),r.jsx("span",{children:o==null?void 0:o.displayName})]}),r.jsxs("div",{className:"cashier-detail-row",children:[r.jsx("span",{children:"Nhà cung cấp"}),r.jsx("span",{children:"VP Bank"})]}),r.jsxs("div",{className:"cashier-detail-row",children:[r.jsx("span",{children:"Số CCCD"}),r.jsx("span",{children:o==null?void 0:o.oldIdNumber})]}),r.jsxs("div",{className:"cashier-detail-row",children:[r.jsx("span",{children:"Phí giao dịch"}),r.jsx("span",{children:"Miễn phí"})]})]}),r.jsxs("div",{className:"cashier-detail-sheet__summary",children:[r.jsxs("div",{className:"cashier-detail-row",children:[r.jsx("span",{children:"Tổng tiền"}),r.jsx("span",{children:zt(b)})]}),r.jsxs("div",{className:"cashier-detail-row",children:[r.jsx("span",{children:"Tổng phí"}),r.jsx("span",{children:"0đ"})]}),r.jsxs("div",{className:"cashier-detail-row cashier-detail-row--bold",children:[r.jsx("span",{children:"Số tiền cần thanh toán"}),r.jsx("span",{children:zt(b)})]}),r.jsx("button",{type:"button",className:"cashier-detail-sheet__back-btn",onClick:j,children:"Quay lại"})]})]})]})]})}Pu.createRoot(document.getElementById("root")).render(r.jsx(O_.StrictMode,{children:r.jsx(Xw,{})}));
