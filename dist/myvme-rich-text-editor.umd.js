(function(_,T){typeof exports=="object"&&typeof module<"u"?module.exports=T(require("react")):typeof define=="function"&&define.amd?define(["react"],T):(_=typeof globalThis<"u"?globalThis:_||self,_.MyVMERichTextEditor=T(_.React))})(this,function(_){"use strict";var T={exports:{}},I={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q;function je(){if(Q)return I;Q=1;var x=_,j=Symbol.for("react.element"),d=Symbol.for("react.fragment"),C=Object.prototype.hasOwnProperty,w=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function b(O,v,k){var g,E={},S=null,N=null;k!==void 0&&(S=""+k),v.key!==void 0&&(S=""+v.key),v.ref!==void 0&&(N=v.ref);for(g in v)C.call(v,g)&&!l.hasOwnProperty(g)&&(E[g]=v[g]);if(O&&O.defaultProps)for(g in v=O.defaultProps,v)E[g]===void 0&&(E[g]=v[g]);return{$$typeof:j,type:O,key:S,ref:N,props:E,_owner:w.current}}return I.Fragment=d,I.jsx=b,I.jsxs=b,I}var L={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ee;function Oe(){return ee||(ee=1,process.env.NODE_ENV!=="production"&&function(){var x=_,j=Symbol.for("react.element"),d=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),O=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),N=Symbol.for("react.offscreen"),re=Symbol.iterator,Se="@@iterator";function Pe(e){if(e===null||typeof e!="object")return null;var r=re&&e[re]||e[Se];return typeof r=="function"?r:null}var D=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function p(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];we("error",e,t)}}function we(e,r,t){{var n=D.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var u=t.map(function(o){return String(o)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var ke=!1,De=!1,Fe=!1,Ae=!1,Ie=!1,te;te=Symbol.for("react.module.reference");function Le(e){return!!(typeof e=="string"||typeof e=="function"||e===C||e===l||Ie||e===w||e===k||e===g||Ae||e===N||ke||De||Fe||typeof e=="object"&&e!==null&&(e.$$typeof===S||e.$$typeof===E||e.$$typeof===b||e.$$typeof===O||e.$$typeof===v||e.$$typeof===te||e.getModuleId!==void 0))}function We(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function ne(e){return e.displayName||"Context"}function R(e){if(e==null)return null;if(typeof e.tag=="number"&&p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case d:return"Portal";case l:return"Profiler";case w:return"StrictMode";case k:return"Suspense";case g:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case O:var r=e;return ne(r)+".Consumer";case b:var t=e;return ne(t._context)+".Provider";case v:return We(e,e.render,"ForwardRef");case E:var n=e.displayName||null;return n!==null?n:R(e.type)||"Memo";case S:{var i=e,u=i._payload,o=i._init;try{return R(o(u))}catch{return null}}}return null}var P=Object.assign,W=0,ae,oe,ie,ue,le,se,ce;function fe(){}fe.__reactDisabledLog=!0;function Me(){{if(W===0){ae=console.log,oe=console.info,ie=console.warn,ue=console.error,le=console.group,se=console.groupCollapsed,ce=console.groupEnd;var e={configurable:!0,enumerable:!0,value:fe,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}W++}}function Ne(){{if(W--,W===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:P({},e,{value:ae}),info:P({},e,{value:oe}),warn:P({},e,{value:ie}),error:P({},e,{value:ue}),group:P({},e,{value:le}),groupCollapsed:P({},e,{value:se}),groupEnd:P({},e,{value:ce})})}W<0&&p("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var H=D.ReactCurrentDispatcher,G;function Y(e,r,t){{if(G===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);G=n&&n[1]||""}return`
`+G+e}}var J=!1,U;{var Ye=typeof WeakMap=="function"?WeakMap:Map;U=new Ye}function de(e,r){if(!e||J)return"";{var t=U.get(e);if(t!==void 0)return t}var n;J=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=H.current,H.current=null,Me();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(y){n=y}Reflect.construct(e,[],o)}else{try{o.call()}catch(y){n=y}e.call(o.prototype)}}else{try{throw Error()}catch(y){n=y}e()}}catch(y){if(y&&n&&typeof y.stack=="string"){for(var a=y.stack.split(`
`),h=n.stack.split(`
`),c=a.length-1,f=h.length-1;c>=1&&f>=0&&a[c]!==h[f];)f--;for(;c>=1&&f>=0;c--,f--)if(a[c]!==h[f]){if(c!==1||f!==1)do if(c--,f--,f<0||a[c]!==h[f]){var m=`
`+a[c].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),typeof e=="function"&&U.set(e,m),m}while(c>=1&&f>=0);break}}}finally{J=!1,H.current=u,Ne(),Error.prepareStackTrace=i}var A=e?e.displayName||e.name:"",Te=A?Y(A):"";return typeof e=="function"&&U.set(e,Te),Te}function Ue(e,r,t){return de(e,!1)}function Ve(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function V(e,r,t){if(e==null)return"";if(typeof e=="function")return de(e,Ve(e));if(typeof e=="string")return Y(e);switch(e){case k:return Y("Suspense");case g:return Y("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case v:return Ue(e.render);case E:return V(e.type,r,t);case S:{var n=e,i=n._payload,u=n._init;try{return V(u(i),r,t)}catch{}}}return""}var $=Object.prototype.hasOwnProperty,ve={},pe=D.ReactDebugCurrentFrame;function B(e){if(e){var r=e._owner,t=V(e.type,e._source,r?r.type:null);pe.setExtraStackFrame(t)}else pe.setExtraStackFrame(null)}function $e(e,r,t,n,i){{var u=Function.call.bind($);for(var o in e)if(u(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var h=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw h.name="Invariant Violation",h}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(c){a=c}a&&!(a instanceof Error)&&(B(i),p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),B(null)),a instanceof Error&&!(a.message in ve)&&(ve[a.message]=!0,B(i),p("Failed %s type: %s",t,a.message),B(null))}}}var Be=Array.isArray;function q(e){return Be(e)}function He(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Ge(e){try{return he(e),!1}catch{return!0}}function he(e){return""+e}function ge(e){if(Ge(e))return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",He(e)),he(e)}var M=D.ReactCurrentOwner,Je={key:!0,ref:!0,__self:!0,__source:!0},me,be,z;z={};function qe(e){if($.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function ze(e){if($.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Ke(e,r){if(typeof e.ref=="string"&&M.current&&r&&M.current.stateNode!==r){var t=R(M.current.type);z[t]||(p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',R(M.current.type),e.ref),z[t]=!0)}}function Xe(e,r){{var t=function(){me||(me=!0,p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function Ze(e,r){{var t=function(){be||(be=!0,p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var Qe=function(e,r,t,n,i,u,o){var a={$$typeof:j,type:e,key:r,ref:t,props:o,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function er(e,r,t,n,i){{var u,o={},a=null,h=null;t!==void 0&&(ge(t),a=""+t),ze(r)&&(ge(r.key),a=""+r.key),qe(r)&&(h=r.ref,Ke(r,i));for(u in r)$.call(r,u)&&!Je.hasOwnProperty(u)&&(o[u]=r[u]);if(e&&e.defaultProps){var c=e.defaultProps;for(u in c)o[u]===void 0&&(o[u]=c[u])}if(a||h){var f=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&Xe(o,f),h&&Ze(o,f)}return Qe(e,a,h,i,n,M.current,o)}}var K=D.ReactCurrentOwner,Ee=D.ReactDebugCurrentFrame;function F(e){if(e){var r=e._owner,t=V(e.type,e._source,r?r.type:null);Ee.setExtraStackFrame(t)}else Ee.setExtraStackFrame(null)}var X;X=!1;function Z(e){return typeof e=="object"&&e!==null&&e.$$typeof===j}function Re(){{if(K.current){var e=R(K.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function rr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var ye={};function tr(e){{var r=Re();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function _e(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=tr(r);if(ye[t])return;ye[t]=!0;var n="";e&&e._owner&&e._owner!==K.current&&(n=" It was passed a child from "+R(e._owner.type)+"."),F(e),p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),F(null)}}function xe(e,r){{if(typeof e!="object")return;if(q(e))for(var t=0;t<e.length;t++){var n=e[t];Z(n)&&_e(n,r)}else if(Z(e))e._store&&(e._store.validated=!0);else if(e){var i=Pe(e);if(typeof i=="function"&&i!==e.entries)for(var u=i.call(e),o;!(o=u.next()).done;)Z(o.value)&&_e(o.value,r)}}}function nr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===v||r.$$typeof===E))t=r.propTypes;else return;if(t){var n=R(r);$e(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!X){X=!0;var i=R(r);p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function ar(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){F(e),p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),F(null);break}}e.ref!==null&&(F(e),p("Invalid attribute `ref` supplied to `React.Fragment`."),F(null))}}function Ce(e,r,t,n,i,u){{var o=Le(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var h=rr(i);h?a+=h:a+=Re();var c;e===null?c="null":q(e)?c="array":e!==void 0&&e.$$typeof===j?(c="<"+(R(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):c=typeof e,p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",c,a)}var f=er(e,r,t,i,u);if(f==null)return f;if(o){var m=r.children;if(m!==void 0)if(n)if(q(m)){for(var A=0;A<m.length;A++)xe(m[A],e);Object.freeze&&Object.freeze(m)}else p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else xe(m,e)}return e===C?ar(f):nr(f),f}}function or(e,r,t){return Ce(e,r,t,!0)}function ir(e,r,t){return Ce(e,r,t,!1)}var ur=ir,lr=or;L.Fragment=C,L.jsx=ur,L.jsxs=lr}()),L}process.env.NODE_ENV==="production"?T.exports=je():T.exports=Oe();var s=T.exports;return()=>{const x=_.useRef(null),j=()=>{var l;console.log("Input detected:",(l=x.current)==null?void 0:l.innerHTML)},d=(l,b)=>{console.log(`Executing command: ${l}`,b),x.current&&(document.execCommand(l,!1,b===null?void 0:b),x.current.focus())},C=()=>{const l=prompt("Enter the URL");l&&d("createLink",l)},w=()=>{const l=prompt("Enter the image URL");l&&d("insertImage",l)};return s.jsxs("div",{children:[s.jsxs("div",{className:"toolbar",children:[s.jsx("button",{onClick:()=>d("bold"),children:"Bold"}),s.jsx("button",{onClick:()=>d("italic"),children:"Italic"}),s.jsx("button",{onClick:()=>d("underline"),children:"Underline"}),s.jsx("button",{onClick:()=>d("insertUnorderedList"),children:"Bullet List"}),s.jsx("button",{onClick:()=>d("insertOrderedList"),children:"Numbered List"}),s.jsxs("select",{onChange:l=>d("fontName",l.target.value),children:[s.jsx("option",{value:"Arial",children:"Arial"}),s.jsx("option",{value:"Georgia",children:"Georgia"}),s.jsx("option",{value:"Tahoma",children:"Tahoma"})]}),s.jsxs("select",{onChange:l=>d("fontSize",l.target.value),children:[s.jsx("option",{value:"1",children:"Small"}),s.jsx("option",{value:"3",children:"Normal"}),s.jsx("option",{value:"5",children:"Large"})]}),s.jsx("input",{type:"color",onChange:l=>d("foreColor",l.target.value),title:"Font Color"}),s.jsx("input",{type:"color",onChange:l=>d("hiliteColor",l.target.value),title:"Highlight Color"}),s.jsx("button",{onClick:C,children:"Add Link"}),s.jsx("button",{onClick:w,children:"Insert Image"}),s.jsx("button",{onClick:()=>d("formatBlock","H1"),children:"H1"}),s.jsx("button",{onClick:()=>d("formatBlock","H2"),children:"H2"})]}),s.jsx("div",{ref:x,contentEditable:!0,className:"editor",onInput:j})]})}});