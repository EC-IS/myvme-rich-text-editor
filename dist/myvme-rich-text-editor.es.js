import * as v from "react";
import O1, { useRef as h3, useState as I, useEffect as J } from "react";
var o1 = { exports: {} }, Z = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var L1;
function p3() {
  if (L1)
    return Z;
  L1 = 1;
  var r = O1, C = Symbol.for("react.element"), g = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(w, u, y) {
    var d, _ = {}, S = null, N = null;
    y !== void 0 && (S = "" + y), u.key !== void 0 && (S = "" + u.key), u.ref !== void 0 && (N = u.ref);
    for (d in u)
      p.call(u, d) && !T.hasOwnProperty(d) && (_[d] = u[d]);
    if (w && w.defaultProps)
      for (d in u = w.defaultProps, u)
        _[d] === void 0 && (_[d] = u[d]);
    return { $$typeof: C, type: w, key: S, ref: N, props: _, _owner: x.current };
  }
  return Z.Fragment = g, Z.jsx = R, Z.jsxs = R, Z;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M1;
function x3() {
  return M1 || (M1 = 1, process.env.NODE_ENV !== "production" && function() {
    var r = O1, C = Symbol.for("react.element"), g = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), w = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), i1 = Symbol.iterator, P1 = "@@iterator";
    function A1(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = i1 && e[i1] || e[P1];
      return typeof t == "function" ? t : null;
    }
    var O = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          o[a - 1] = arguments[a];
        I1("error", e, o);
      }
    }
    function I1(e, t, o) {
      {
        var a = O.ReactDebugCurrentFrame, l = a.getStackAddendum();
        l !== "" && (t += "%s", o = o.concat([l]));
        var c = o.map(function(s) {
          return String(s);
        });
        c.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var F1 = !1, D1 = !1, Z1 = !1, V1 = !1, N1 = !1, s1;
    s1 = Symbol.for("react.module.reference");
    function B1(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === p || e === T || N1 || e === x || e === y || e === d || V1 || e === N || F1 || D1 || Z1 || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === _ || e.$$typeof === R || e.$$typeof === w || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === s1 || e.getModuleId !== void 0));
    }
    function U1(e, t, o) {
      var a = e.displayName;
      if (a)
        return a;
      var l = t.displayName || t.name || "";
      return l !== "" ? o + "(" + l + ")" : o;
    }
    function l1(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case p:
          return "Fragment";
        case g:
          return "Portal";
        case T:
          return "Profiler";
        case x:
          return "StrictMode";
        case y:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case w:
            var t = e;
            return l1(t) + ".Consumer";
          case R:
            var o = e;
            return l1(o._context) + ".Provider";
          case u:
            return U1(e, e.render, "ForwardRef");
          case _:
            var a = e.displayName || null;
            return a !== null ? a : k(e.type) || "Memo";
          case S: {
            var l = e, c = l._payload, s = l._init;
            try {
              return k(s(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, F = 0, c1, u1, C1, f1, d1, v1, g1;
    function h1() {
    }
    h1.__reactDisabledLog = !0;
    function W1() {
      {
        if (F === 0) {
          c1 = console.log, u1 = console.info, C1 = console.warn, f1 = console.error, d1 = console.group, v1 = console.groupCollapsed, g1 = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: h1,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Y1() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, e, {
              value: c1
            }),
            info: M({}, e, {
              value: u1
            }),
            warn: M({}, e, {
              value: C1
            }),
            error: M({}, e, {
              value: f1
            }),
            group: M({}, e, {
              value: d1
            }),
            groupCollapsed: M({}, e, {
              value: v1
            }),
            groupEnd: M({}, e, {
              value: g1
            })
          });
        }
        F < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = O.ReactCurrentDispatcher, K;
    function B(e, t, o) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (l) {
            var a = l.stack.trim().match(/\n( *(at )?)/);
            K = a && a[1] || "";
          }
        return `
` + K + e;
      }
    }
    var X = !1, U;
    {
      var z1 = typeof WeakMap == "function" ? WeakMap : Map;
      U = new z1();
    }
    function p1(e, t) {
      if (!e || X)
        return "";
      {
        var o = U.get(e);
        if (o !== void 0)
          return o;
      }
      var a;
      X = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = G.current, G.current = null, W1();
      try {
        if (t) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (L) {
              a = L;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (L) {
              a = L;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (L) {
            a = L;
          }
          e();
        }
      } catch (L) {
        if (L && a && typeof L.stack == "string") {
          for (var i = L.stack.split(`
`), E = a.stack.split(`
`), h = i.length - 1, b = E.length - 1; h >= 1 && b >= 0 && i[h] !== E[b]; )
            b--;
          for (; h >= 1 && b >= 0; h--, b--)
            if (i[h] !== E[b]) {
              if (h !== 1 || b !== 1)
                do
                  if (h--, b--, b < 0 || i[h] !== E[b]) {
                    var j = `
` + i[h].replace(" at new ", " at ");
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, j), j;
                  }
                while (h >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        X = !1, G.current = c, Y1(), Error.prepareStackTrace = l;
      }
      var P = e ? e.displayName || e.name : "", k1 = P ? B(P) : "";
      return typeof e == "function" && U.set(e, k1), k1;
    }
    function q1(e, t, o) {
      return p1(e, !1);
    }
    function J1(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function W(e, t, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return p1(e, J1(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case y:
          return B("Suspense");
        case d:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return q1(e.render);
          case _:
            return W(e.type, t, o);
          case S: {
            var a = e, l = a._payload, c = a._init;
            try {
              return W(c(l), t, o);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, x1 = {}, b1 = O.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var t = e._owner, o = W(e.type, e._source, t ? t.type : null);
        b1.setExtraStackFrame(o);
      } else
        b1.setExtraStackFrame(null);
    }
    function G1(e, t, o, a, l) {
      {
        var c = Function.call.bind(Y);
        for (var s in e)
          if (c(e, s)) {
            var i = void 0;
            try {
              if (typeof e[s] != "function") {
                var E = Error((a || "React class") + ": " + o + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              i = e[s](t, s, a, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (h) {
              i = h;
            }
            i && !(i instanceof Error) && (z(l), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", o, s, typeof i), z(null)), i instanceof Error && !(i.message in x1) && (x1[i.message] = !0, z(l), m("Failed %s type: %s", o, i.message), z(null));
          }
      }
    }
    var K1 = Array.isArray;
    function Q(e) {
      return K1(e);
    }
    function X1(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, o = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function Q1(e) {
      try {
        return _1(e), !1;
      } catch {
        return !0;
      }
    }
    function _1(e) {
      return "" + e;
    }
    function m1(e) {
      if (Q1(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", X1(e)), _1(e);
    }
    var D = O.ReactCurrentOwner, e3 = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, E1, w1, e1;
    e1 = {};
    function t3(e) {
      if (Y.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function r3(e) {
      if (Y.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function n3(e, t) {
      if (typeof e.ref == "string" && D.current && t && D.current.stateNode !== t) {
        var o = k(D.current.type);
        e1[o] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(D.current.type), e.ref), e1[o] = !0);
      }
    }
    function o3(e, t) {
      {
        var o = function() {
          E1 || (E1 = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function a3(e, t) {
      {
        var o = function() {
          w1 || (w1 = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var i3 = function(e, t, o, a, l, c, s) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: C,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: o,
        props: s,
        // Record the component responsible for creating this element.
        _owner: c
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function s3(e, t, o, a, l) {
      {
        var c, s = {}, i = null, E = null;
        o !== void 0 && (m1(o), i = "" + o), r3(t) && (m1(t.key), i = "" + t.key), t3(t) && (E = t.ref, n3(t, l));
        for (c in t)
          Y.call(t, c) && !e3.hasOwnProperty(c) && (s[c] = t[c]);
        if (e && e.defaultProps) {
          var h = e.defaultProps;
          for (c in h)
            s[c] === void 0 && (s[c] = h[c]);
        }
        if (i || E) {
          var b = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && o3(s, b), E && a3(s, b);
        }
        return i3(e, i, E, l, a, D.current, s);
      }
    }
    var t1 = O.ReactCurrentOwner, y1 = O.ReactDebugCurrentFrame;
    function $(e) {
      if (e) {
        var t = e._owner, o = W(e.type, e._source, t ? t.type : null);
        y1.setExtraStackFrame(o);
      } else
        y1.setExtraStackFrame(null);
    }
    var r1;
    r1 = !1;
    function n1(e) {
      return typeof e == "object" && e !== null && e.$$typeof === C;
    }
    function j1() {
      {
        if (t1.current) {
          var e = k(t1.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function l3(e) {
      {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), o = e.lineNumber;
          return `

Check your code at ` + t + ":" + o + ".";
        }
        return "";
      }
    }
    var R1 = {};
    function c3(e) {
      {
        var t = j1();
        if (!t) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (t = `

Check the top-level render call using <` + o + ">.");
        }
        return t;
      }
    }
    function H1(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = c3(t);
        if (R1[o])
          return;
        R1[o] = !0;
        var a = "";
        e && e._owner && e._owner !== t1.current && (a = " It was passed a child from " + k(e._owner.type) + "."), $(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, a), $(null);
      }
    }
    function T1(e, t) {
      {
        if (typeof e != "object")
          return;
        if (Q(e))
          for (var o = 0; o < e.length; o++) {
            var a = e[o];
            n1(a) && H1(a, t);
          }
        else if (n1(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = A1(e);
          if (typeof l == "function" && l !== e.entries)
            for (var c = l.call(e), s; !(s = c.next()).done; )
              n1(s.value) && H1(s.value, t);
        }
      }
    }
    function u3(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var o;
        if (typeof t == "function")
          o = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === _))
          o = t.propTypes;
        else
          return;
        if (o) {
          var a = k(t);
          G1(o, e.props, "prop", a, e);
        } else if (t.PropTypes !== void 0 && !r1) {
          r1 = !0;
          var l = k(t);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function C3(e) {
      {
        for (var t = Object.keys(e.props), o = 0; o < t.length; o++) {
          var a = t[o];
          if (a !== "children" && a !== "key") {
            $(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), $(null);
            break;
          }
        }
        e.ref !== null && ($(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    function S1(e, t, o, a, l, c) {
      {
        var s = B1(e);
        if (!s) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = l3(l);
          E ? i += E : i += j1();
          var h;
          e === null ? h = "null" : Q(e) ? h = "array" : e !== void 0 && e.$$typeof === C ? (h = "<" + (k(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : h = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", h, i);
        }
        var b = s3(e, t, o, l, c);
        if (b == null)
          return b;
        if (s) {
          var j = t.children;
          if (j !== void 0)
            if (a)
              if (Q(j)) {
                for (var P = 0; P < j.length; P++)
                  T1(j[P], e);
                Object.freeze && Object.freeze(j);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              T1(j, e);
        }
        return e === p ? C3(b) : u3(b), b;
      }
    }
    function f3(e, t, o) {
      return S1(e, t, o, !0);
    }
    function d3(e, t, o) {
      return S1(e, t, o, !1);
    }
    var v3 = d3, g3 = f3;
    V.Fragment = p, V.jsx = v3, V.jsxs = g3;
  }()), V;
}
process.env.NODE_ENV === "production" ? o1.exports = p3() : o1.exports = x3();
var n = o1.exports;
const b3 = (r) => /* @__PURE__ */ v.createElement("svg", { width: 9, height: 12, viewBox: "0 0 9 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ v.createElement("path", { d: "M1.73077 12C1.25481 12 0.847356 11.8321 0.508413 11.4964C0.169471 11.1607 0 10.7571 0 10.2857V1.71429C0 1.24286 0.169471 0.839286 0.508413 0.503571C0.847356 0.167857 1.25481 0 1.73077 0H4.78125C5.71875 0 6.58413 0.285714 7.3774 0.857143C8.17067 1.42857 8.56731 2.22143 8.56731 3.23571C8.56731 3.96429 8.40144 4.525 8.06971 4.91786C7.73798 5.31071 7.42788 5.59286 7.13942 5.76429C7.5 5.92143 7.90024 6.21429 8.34014 6.64286C8.78005 7.07143 9 7.71429 9 8.57143C9 9.84286 8.53125 10.7321 7.59375 11.2393C6.65625 11.7464 5.77644 12 4.95433 12H1.73077ZM2.61779 9.6H4.86779C5.5601 9.6 5.98197 9.425 6.13341 9.075C6.28486 8.725 6.36058 8.47143 6.36058 8.31429C6.36058 8.15714 6.28486 7.90357 6.13341 7.55357C5.98197 7.20357 5.53846 7.02857 4.80288 7.02857H2.61779V9.6ZM2.61779 4.71429H4.62981C5.10577 4.71429 5.45192 4.59286 5.66827 4.35C5.88462 4.10714 5.99279 3.83571 5.99279 3.53571C5.99279 3.19286 5.87019 2.91429 5.625 2.7C5.37981 2.48571 5.0625 2.37857 4.67308 2.37857H2.61779V4.71429Z", fill: "#8E99A4" })), _3 = "_btn_4vry3_5", m3 = "_tooltip_4vry3_21", E3 = "_tooltip__text_4vry3_27", w3 = "_selected_4vry3_45", f = {
  btn: _3,
  tooltip: m3,
  tooltip__text: E3,
  "btn--icon": "_btn--icon_4vry3_39",
  selected: w3,
  "btn--color": "_btn--color_4vry3_52"
}, H = ({ text: r }) => /* @__PURE__ */ n.jsx("div", { className: f.tooltip, children: /* @__PURE__ */ n.jsx("span", { className: f.tooltip__text, children: r }) }), y3 = ({ handleCommand: r }) => /* @__PURE__ */ n.jsxs(
  "button",
  {
    type: "button",
    className: `${f.btn} ${f["btn--icon"]}`,
    "aria-label": "Bold",
    onClick: () => r("bold"),
    children: [
      /* @__PURE__ */ n.jsx(b3, {}),
      /* @__PURE__ */ n.jsx(H, { text: "Bold" })
    ]
  }
), j3 = (r) => /* @__PURE__ */ v.createElement("svg", { width: 12, height: 12, viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ v.createElement("path", { d: "M1.15385 12C0.830769 12 0.557692 11.8964 0.334615 11.6893C0.111538 11.4821 0 11.2286 0 10.9286C0 10.6286 0.111538 10.375 0.334615 10.1679C0.557692 9.96071 0.830769 9.85714 1.15385 9.85714H3.69231L6.46154 2.14286H3.92308C3.6 2.14286 3.32692 2.03929 3.10385 1.83214C2.88077 1.625 2.76923 1.37143 2.76923 1.07143C2.76923 0.771429 2.88077 0.517857 3.10385 0.310714C3.32692 0.103571 3.6 0 3.92308 0H10.8462C11.1692 0 11.4423 0.103571 11.6654 0.310714C11.8885 0.517857 12 0.771429 12 1.07143C12 1.37143 11.8885 1.625 11.6654 1.83214C11.4423 2.03929 11.1692 2.14286 10.8462 2.14286H8.76923L6 9.85714H8.07692C8.4 9.85714 8.67308 9.96071 8.89615 10.1679C9.11923 10.375 9.23077 10.6286 9.23077 10.9286C9.23077 11.2286 9.11923 11.4821 8.89615 11.6893C8.67308 11.8964 8.4 12 8.07692 12H1.15385Z", fill: "#8E99A4" })), R3 = ({ handleCommand: r }) => /* @__PURE__ */ n.jsxs(
  "button",
  {
    type: "button",
    className: `${f.btn} ${f["btn--icon"]}`,
    "aria-label": "Italic",
    onClick: () => r("italic"),
    children: [
      /* @__PURE__ */ n.jsx(j3, {}),
      /* @__PURE__ */ n.jsx(H, { text: "Italic" })
    ]
  }
), H3 = (r) => /* @__PURE__ */ v.createElement("svg", { width: 11, height: 14, viewBox: "0 0 11 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ v.createElement("path", { d: "M0.785714 14C0.563095 14 0.376488 13.9255 0.225893 13.7764C0.0752976 13.6273 0 13.4426 0 13.2222C0 13.0019 0.0752976 12.8171 0.225893 12.6681C0.376488 12.519 0.563095 12.4444 0.785714 12.4444H10.2143C10.4369 12.4444 10.6235 12.519 10.7741 12.6681C10.9247 12.8171 11 13.0019 11 13.2222C11 13.4426 10.9247 13.6273 10.7741 13.7764C10.6235 13.9255 10.4369 14 10.2143 14H0.785714ZM5.5 10.8889C4.17738 10.8889 3.1494 10.4806 2.41607 9.66389C1.68274 8.84722 1.31607 7.76482 1.31607 6.41667V0.991667C1.31607 0.719444 1.41756 0.486111 1.62054 0.291667C1.82351 0.0972222 2.0625 0 2.3375 0C2.6125 0 2.84821 0.0972222 3.04464 0.291667C3.24107 0.486111 3.33929 0.719444 3.33929 0.991667V6.53333C3.33929 7.25926 3.52262 7.84907 3.88929 8.30278C4.25595 8.75648 4.79286 8.98333 5.5 8.98333C6.20714 8.98333 6.74405 8.75648 7.11071 8.30278C7.47738 7.84907 7.66071 7.25926 7.66071 6.53333V0.991667C7.66071 0.719444 7.7622 0.486111 7.96518 0.291667C8.16815 0.0972222 8.40714 0 8.68214 0C8.95714 0 9.19286 0.0972222 9.38929 0.291667C9.58571 0.486111 9.68393 0.719444 9.68393 0.991667V6.41667C9.68393 7.76482 9.31726 8.84722 8.58393 9.66389C7.8506 10.4806 6.82262 10.8889 5.5 10.8889Z", fill: "#8E99A4" })), T3 = ({ handleCommand: r }) => /* @__PURE__ */ n.jsxs(
  "button",
  {
    type: "button",
    className: `${f.btn} ${f["btn--icon"]}`,
    "aria-label": "Underline",
    onClick: () => r("underline"),
    children: [
      /* @__PURE__ */ n.jsx(H3, {}),
      /* @__PURE__ */ n.jsx(H, { text: "Underline" })
    ]
  }
), S3 = (r) => /* @__PURE__ */ v.createElement("svg", { width: 14, height: 15, viewBox: "0 0 14 15", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ v.createElement("path", { d: "M0.583333 15C0.414815 15 0.275463 14.9469 0.165278 14.8406C0.0550926 14.7344 0 14.6 0 14.4375C0 14.275 0.0550926 14.1406 0.165278 14.0344C0.275463 13.9281 0.414815 13.875 0.583333 13.875H1.94444V13.3125H1.36111C1.19259 13.3125 1.05324 13.2594 0.943056 13.1531C0.83287 13.0469 0.777778 12.9125 0.777778 12.75C0.777778 12.5875 0.83287 12.4531 0.943056 12.3469C1.05324 12.2406 1.19259 12.1875 1.36111 12.1875H1.94444V11.625H0.583333C0.414815 11.625 0.275463 11.5719 0.165278 11.4656C0.0550926 11.3594 0 11.225 0 11.0625C0 10.9 0.0550926 10.7656 0.165278 10.6594C0.275463 10.5531 0.414815 10.5 0.583333 10.5H2.33333C2.5537 10.5 2.73843 10.5719 2.8875 10.7156C3.03657 10.8594 3.11111 11.0375 3.11111 11.25V12C3.11111 12.2125 3.03657 12.3906 2.8875 12.5344C2.73843 12.6781 2.5537 12.75 2.33333 12.75C2.5537 12.75 2.73843 12.8219 2.8875 12.9656C3.03657 13.1094 3.11111 13.2875 3.11111 13.5V14.25C3.11111 14.4625 3.03657 14.6406 2.8875 14.7844C2.73843 14.9281 2.5537 15 2.33333 15H0.583333ZM0.583333 9.75C0.414815 9.75 0.275463 9.69688 0.165278 9.59063C0.0550926 9.48438 0 9.35 0 9.1875V7.6875C0 7.475 0.074537 7.29688 0.223611 7.15313C0.372685 7.00938 0.557407 6.9375 0.777778 6.9375H1.94444V6.375H0.583333C0.414815 6.375 0.275463 6.32188 0.165278 6.21563C0.0550926 6.10938 0 5.975 0 5.8125C0 5.65 0.0550926 5.51562 0.165278 5.40938C0.275463 5.30313 0.414815 5.25 0.583333 5.25H2.33333C2.5537 5.25 2.73843 5.32188 2.8875 5.46563C3.03657 5.60938 3.11111 5.7875 3.11111 6V7.3125C3.11111 7.525 3.03657 7.70313 2.8875 7.84688C2.73843 7.99063 2.5537 8.0625 2.33333 8.0625H1.16667V8.625H2.52778C2.6963 8.625 2.83565 8.67813 2.94583 8.78438C3.05602 8.89062 3.11111 9.025 3.11111 9.1875C3.11111 9.35 3.05602 9.48438 2.94583 9.59063C2.83565 9.69688 2.6963 9.75 2.52778 9.75H0.583333ZM1.75 4.5C1.58148 4.5 1.44213 4.44688 1.33194 4.34063C1.22176 4.23438 1.16667 4.1 1.16667 3.9375V1.125H0.583333C0.414815 1.125 0.275463 1.07188 0.165278 0.965625C0.0550926 0.859375 0 0.725 0 0.5625C0 0.4 0.0550926 0.265625 0.165278 0.159375C0.275463 0.053125 0.414815 0 0.583333 0H1.75C1.91852 0 2.05787 0.053125 2.16806 0.159375C2.27824 0.265625 2.33333 0.4 2.33333 0.5625V3.9375C2.33333 4.1 2.27824 4.23438 2.16806 4.34063C2.05787 4.44688 1.91852 4.5 1.75 4.5ZM5.44444 12.75C5.22407 12.75 5.03935 12.6781 4.89028 12.5344C4.7412 12.3906 4.66667 12.2125 4.66667 12C4.66667 11.7875 4.7412 11.6094 4.89028 11.4656C5.03935 11.3219 5.22407 11.25 5.44444 11.25H13.2222C13.4426 11.25 13.6273 11.3219 13.7764 11.4656C13.9255 11.6094 14 11.7875 14 12C14 12.2125 13.9255 12.3906 13.7764 12.5344C13.6273 12.6781 13.4426 12.75 13.2222 12.75H5.44444ZM5.44444 8.25C5.22407 8.25 5.03935 8.17813 4.89028 8.03438C4.7412 7.89063 4.66667 7.7125 4.66667 7.5C4.66667 7.2875 4.7412 7.10938 4.89028 6.96563C5.03935 6.82188 5.22407 6.75 5.44444 6.75H13.2222C13.4426 6.75 13.6273 6.82188 13.7764 6.96563C13.9255 7.10938 14 7.2875 14 7.5C14 7.7125 13.9255 7.89063 13.7764 8.03438C13.6273 8.17813 13.4426 8.25 13.2222 8.25H5.44444ZM5.44444 3.75C5.22407 3.75 5.03935 3.67813 4.89028 3.53438C4.7412 3.39063 4.66667 3.2125 4.66667 3C4.66667 2.7875 4.7412 2.60938 4.89028 2.46563C5.03935 2.32188 5.22407 2.25 5.44444 2.25H13.2222C13.4426 2.25 13.6273 2.32188 13.7764 2.46563C13.9255 2.60938 14 2.7875 14 3C14 3.2125 13.9255 3.39063 13.7764 3.53438C13.6273 3.67813 13.4426 3.75 13.2222 3.75H5.44444Z", fill: "#8E99A4" })), k3 = ({ handleCommand: r }) => /* @__PURE__ */ n.jsxs(
  "button",
  {
    type: "button",
    className: `${f.btn} ${f["btn--icon"]}`,
    "aria-label": "Ordered list",
    onClick: () => r("insertOrderedList"),
    children: [
      /* @__PURE__ */ n.jsx(S3, {}),
      /* @__PURE__ */ n.jsx(H, { text: "Ordered list" })
    ]
  }
), L3 = (r) => /* @__PURE__ */ v.createElement("svg", { width: 14, height: 13, viewBox: "0 0 14 13", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ v.createElement("path", { d: "M5.44444 12.1875C5.22407 12.1875 5.03935 12.1096 4.89028 11.9539C4.7412 11.7982 4.66667 11.6052 4.66667 11.375C4.66667 11.1448 4.7412 10.9518 4.89028 10.7961C5.03935 10.6404 5.22407 10.5625 5.44444 10.5625H13.2222C13.4426 10.5625 13.6273 10.6404 13.7764 10.7961C13.9255 10.9518 14 11.1448 14 11.375C14 11.6052 13.9255 11.7982 13.7764 11.9539C13.6273 12.1096 13.4426 12.1875 13.2222 12.1875H5.44444ZM5.44444 7.3125C5.22407 7.3125 5.03935 7.23464 4.89028 7.07891C4.7412 6.92318 4.66667 6.73021 4.66667 6.5C4.66667 6.26979 4.7412 6.07682 4.89028 5.92109C5.03935 5.76536 5.22407 5.6875 5.44444 5.6875H13.2222C13.4426 5.6875 13.6273 5.76536 13.7764 5.92109C13.9255 6.07682 14 6.26979 14 6.5C14 6.73021 13.9255 6.92318 13.7764 7.07891C13.6273 7.23464 13.4426 7.3125 13.2222 7.3125H5.44444ZM5.44444 2.4375C5.22407 2.4375 5.03935 2.35964 4.89028 2.20391C4.7412 2.04818 4.66667 1.85521 4.66667 1.625C4.66667 1.39479 4.7412 1.20182 4.89028 1.04609C5.03935 0.890365 5.22407 0.8125 5.44444 0.8125H13.2222C13.4426 0.8125 13.6273 0.890365 13.7764 1.04609C13.9255 1.20182 14 1.39479 14 1.625C14 1.85521 13.9255 2.04818 13.7764 2.20391C13.6273 2.35964 13.4426 2.4375 13.2222 2.4375H5.44444ZM1.55556 13C1.12778 13 0.761574 12.8409 0.456944 12.5227C0.152315 12.2044 0 11.8219 0 11.375C0 10.9281 0.152315 10.5456 0.456944 10.2273C0.761574 9.90911 1.12778 9.75 1.55556 9.75C1.98333 9.75 2.34954 9.90911 2.65417 10.2273C2.9588 10.5456 3.11111 10.9281 3.11111 11.375C3.11111 11.8219 2.9588 12.2044 2.65417 12.5227C2.34954 12.8409 1.98333 13 1.55556 13ZM1.55556 8.125C1.12778 8.125 0.761574 7.96589 0.456944 7.64766C0.152315 7.32943 0 6.94687 0 6.5C0 6.05312 0.152315 5.67057 0.456944 5.35234C0.761574 5.03411 1.12778 4.875 1.55556 4.875C1.98333 4.875 2.34954 5.03411 2.65417 5.35234C2.9588 5.67057 3.11111 6.05312 3.11111 6.5C3.11111 6.94687 2.9588 7.32943 2.65417 7.64766C2.34954 7.96589 1.98333 8.125 1.55556 8.125ZM1.55556 3.25C1.12778 3.25 0.761574 3.09089 0.456944 2.77266C0.152315 2.45443 0 2.07187 0 1.625C0 1.17812 0.152315 0.795573 0.456944 0.477344C0.761574 0.159115 1.12778 0 1.55556 0C1.98333 0 2.34954 0.159115 2.65417 0.477344C2.9588 0.795573 3.11111 1.17812 3.11111 1.625C3.11111 2.07187 2.9588 2.45443 2.65417 2.77266C2.34954 3.09089 1.98333 3.25 1.55556 3.25Z", fill: "#8E99A4" })), M3 = ({ handleCommand: r }) => /* @__PURE__ */ n.jsxs(
  "button",
  {
    type: "button",
    className: `${f.btn} ${f["btn--icon"]}`,
    "aria-label": "Unordered list",
    onClick: () => r("insertUnorderedList"),
    children: [
      /* @__PURE__ */ n.jsx(L3, {}),
      /* @__PURE__ */ n.jsx(H, { text: "Unordered list" })
    ]
  }
), O3 = (r) => /* @__PURE__ */ v.createElement("svg", { width: 12, height: 12, viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ v.createElement("path", { d: "M0.666667 -9.53674e-07C0.477778 -9.53674e-07 0.319444 0.0638885 0.191667 0.191666C0.0638889 0.319444 0 0.477777 0 0.666666C0 0.855555 0.0638889 1.01389 0.191667 1.14167C0.319444 1.26944 0.477778 1.33333 0.666667 1.33333H11.3333C11.5222 1.33333 11.6806 1.26944 11.8083 1.14167C11.9361 1.01389 12 0.855555 12 0.666666C12 0.477777 11.9361 0.319444 11.8083 0.191666C11.6806 0.0638885 11.5222 -9.53674e-07 11.3333 -9.53674e-07H0.666667ZM0.666667 2.66667C0.477778 2.66667 0.319444 2.73056 0.191667 2.85833C0.0638889 2.98611 0 3.14444 0 3.33333C0 3.52222 0.0638889 3.68056 0.191667 3.80833C0.319444 3.93611 0.477778 4 0.666667 4H7.33333C7.52222 4 7.68056 3.93611 7.80833 3.80833C7.93611 3.68056 8 3.52222 8 3.33333C8 3.14444 7.93611 2.98611 7.80833 2.85833C7.68056 2.73056 7.52222 2.66667 7.33333 2.66667H0.666667ZM0.666667 5.33333C0.477778 5.33333 0.319444 5.39722 0.191667 5.525C0.0638889 5.65278 0 5.81111 0 6C0 6.18889 0.0638889 6.34722 0.191667 6.475C0.319444 6.60278 0.477778 6.66667 0.666667 6.66667H11.3333C11.5222 6.66667 11.6806 6.60278 11.8083 6.475C11.9361 6.34722 12 6.18889 12 6C12 5.81111 11.9361 5.65278 11.8083 5.525C11.6806 5.39722 11.5222 5.33333 11.3333 5.33333H0.666667ZM0.666667 8C0.477778 8 0.319444 8.06389 0.191667 8.19167C0.0638889 8.31944 0 8.47778 0 8.66667C0 8.85556 0.0638889 9.01389 0.191667 9.14167C0.319444 9.26944 0.477778 9.33333 0.666667 9.33333H7.33333C7.52222 9.33333 7.68056 9.26944 7.80833 9.14167C7.93611 9.01389 8 8.85556 8 8.66667C8 8.47778 7.93611 8.31944 7.80833 8.19167C7.68056 8.06389 7.52222 8 7.33333 8H0.666667ZM0.666667 10.6667C0.477778 10.6667 0.319444 10.7306 0.191667 10.8583C0.0638889 10.9861 0 11.1444 0 11.3333C0 11.5222 0.0638889 11.6806 0.191667 11.8083C0.319444 11.9361 0.477778 12 0.666667 12H11.3333C11.5222 12 11.6806 11.9361 11.8083 11.8083C11.9361 11.6806 12 11.5222 12 11.3333C12 11.1444 11.9361 10.9861 11.8083 10.8583C11.6806 10.7306 11.5222 10.6667 11.3333 10.6667H0.666667Z", fill: "#8E99A4" })), $3 = ({ handleCommand: r }) => /* @__PURE__ */ n.jsxs(
  "button",
  {
    type: "button",
    className: `${f.btn} ${f["btn--icon"]}`,
    "aria-label": "Text align left",
    onClick: () => r("justifyLeft"),
    children: [
      /* @__PURE__ */ n.jsx(O3, {}),
      /* @__PURE__ */ n.jsx(H, { text: "Text align left" })
    ]
  }
), P3 = (r) => /* @__PURE__ */ v.createElement("svg", { width: 12, height: 12, viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ v.createElement("path", { d: "M0.666667 -9.53674e-07C0.477778 -9.53674e-07 0.319444 0.0638885 0.191667 0.191666C0.0638889 0.319444 0 0.477777 0 0.666666C0 0.855555 0.0638889 1.01389 0.191667 1.14167C0.319444 1.26944 0.477778 1.33333 0.666667 1.33333H11.3333C11.5222 1.33333 11.6806 1.26944 11.8083 1.14167C11.9361 1.01389 12 0.855555 12 0.666666C12 0.477777 11.9361 0.319444 11.8083 0.191666C11.6806 0.0638885 11.5222 -9.53674e-07 11.3333 -9.53674e-07H0.666667ZM3.33333 2.66667C3.14444 2.66667 2.98611 2.73056 2.85833 2.85833C2.73056 2.98611 2.66667 3.14444 2.66667 3.33333C2.66667 3.52222 2.73056 3.68056 2.85833 3.80833C2.98611 3.93611 3.14444 4 3.33333 4H8.66667C8.85556 4 9.01389 3.93611 9.14167 3.80833C9.26944 3.68056 9.33333 3.52222 9.33333 3.33333C9.33333 3.14444 9.26944 2.98611 9.14167 2.85833C9.01389 2.73056 8.85556 2.66667 8.66667 2.66667H3.33333ZM0.666667 5.33333C0.477778 5.33333 0.319444 5.39722 0.191667 5.525C0.0638889 5.65278 0 5.81111 0 6C0 6.18889 0.0638889 6.34722 0.191667 6.475C0.319444 6.60278 0.477778 6.66667 0.666667 6.66667H11.3333C11.5222 6.66667 11.6806 6.60278 11.8083 6.475C11.9361 6.34722 12 6.18889 12 6C12 5.81111 11.9361 5.65278 11.8083 5.525C11.6806 5.39722 11.5222 5.33333 11.3333 5.33333H0.666667ZM3.33333 8C3.14444 8 2.98611 8.06389 2.85833 8.19167C2.73056 8.31944 2.66667 8.47778 2.66667 8.66667C2.66667 8.85556 2.73056 9.01389 2.85833 9.14167C2.98611 9.26944 3.14444 9.33333 3.33333 9.33333H8.66667C8.85556 9.33333 9.01389 9.26944 9.14167 9.14167C9.26944 9.01389 9.33333 8.85556 9.33333 8.66667C9.33333 8.47778 9.26944 8.31944 9.14167 8.19167C9.01389 8.06389 8.85556 8 8.66667 8H3.33333ZM0.666667 10.6667C0.477778 10.6667 0.319444 10.7306 0.191667 10.8583C0.0638889 10.9861 0 11.1444 0 11.3333C0 11.5222 0.0638889 11.6806 0.191667 11.8083C0.319444 11.9361 0.477778 12 0.666667 12H11.3333C11.5222 12 11.6806 11.9361 11.8083 11.8083C11.9361 11.6806 12 11.5222 12 11.3333C12 11.1444 11.9361 10.9861 11.8083 10.8583C11.6806 10.7306 11.5222 10.6667 11.3333 10.6667H0.666667Z", fill: "#8E99A4" })), A3 = ({ handleCommand: r }) => /* @__PURE__ */ n.jsxs(
  "button",
  {
    type: "button",
    className: `${f.btn} ${f["btn--icon"]}`,
    "aria-label": "Text align center",
    onClick: () => r("justifyCenter"),
    children: [
      /* @__PURE__ */ n.jsx(P3, {}),
      /* @__PURE__ */ n.jsx(H, { text: "Text align center" })
    ]
  }
), I3 = (r) => /* @__PURE__ */ v.createElement("svg", { width: 12, height: 12, viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ v.createElement("path", { d: "M0.666667 10.6667C0.477778 10.6667 0.319444 10.7306 0.191667 10.8583C0.0638889 10.9861 0 11.1444 0 11.3333C0 11.5222 0.0638889 11.6806 0.191667 11.8083C0.319444 11.9361 0.477778 12 0.666667 12H11.3333C11.5222 12 11.6806 11.9361 11.8083 11.8083C11.9361 11.6806 12 11.5222 12 11.3333C12 11.1444 11.9361 10.9861 11.8083 10.8583C11.6806 10.7306 11.5222 10.6667 11.3333 10.6667H0.666667ZM4.66667 8C4.47778 8 4.31944 8.06389 4.19167 8.19167C4.06389 8.31944 4 8.47778 4 8.66667C4 8.85556 4.06389 9.01389 4.19167 9.14167C4.31944 9.26944 4.47778 9.33333 4.66667 9.33333H11.3333C11.5222 9.33333 11.6806 9.26944 11.8083 9.14167C11.9361 9.01389 12 8.85556 12 8.66667C12 8.47778 11.9361 8.31944 11.8083 8.19167C11.6806 8.06389 11.5222 8 11.3333 8H4.66667ZM0.666667 5.33333C0.477778 5.33333 0.319444 5.39722 0.191667 5.525C0.0638889 5.65278 0 5.81111 0 6C0 6.18889 0.0638889 6.34722 0.191667 6.475C0.319444 6.60278 0.477778 6.66667 0.666667 6.66667H11.3333C11.5222 6.66667 11.6806 6.60278 11.8083 6.475C11.9361 6.34722 12 6.18889 12 6C12 5.81111 11.9361 5.65278 11.8083 5.525C11.6806 5.39722 11.5222 5.33333 11.3333 5.33333H0.666667ZM4.66667 2.66667C4.47778 2.66667 4.31944 2.73056 4.19167 2.85833C4.06389 2.98611 4 3.14444 4 3.33333C4 3.52222 4.06389 3.68056 4.19167 3.80833C4.31944 3.93611 4.47778 4 4.66667 4H11.3333C11.5222 4 11.6806 3.93611 11.8083 3.80833C11.9361 3.68056 12 3.52222 12 3.33333C12 3.14444 11.9361 2.98611 11.8083 2.85833C11.6806 2.73056 11.5222 2.66667 11.3333 2.66667H4.66667ZM0.666667 -9.53674e-07C0.477778 -9.53674e-07 0.319444 0.0638885 0.191667 0.191666C0.0638889 0.319444 0 0.477777 0 0.666666C0 0.855555 0.0638889 1.01389 0.191667 1.14167C0.319444 1.26944 0.477778 1.33333 0.666667 1.33333H11.3333C11.5222 1.33333 11.6806 1.26944 11.8083 1.14167C11.9361 1.01389 12 0.855555 12 0.666666C12 0.477777 11.9361 0.319444 11.8083 0.191666C11.6806 0.0638885 11.5222 -9.53674e-07 11.3333 -9.53674e-07H0.666667Z", fill: "#8E99A4" })), F3 = ({ handleCommand: r }) => /* @__PURE__ */ n.jsxs(
  "button",
  {
    type: "button",
    className: `${f.btn} ${f["btn--icon"]}`,
    "aria-label": "Text align right",
    onClick: () => r("justifyRight"),
    children: [
      /* @__PURE__ */ n.jsx(I3, {}),
      /* @__PURE__ */ n.jsx(H, { text: "Text align right" })
    ]
  }
), D3 = (r) => /* @__PURE__ */ v.createElement("svg", { width: 15, height: 7, viewBox: "0 0 15 7", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ v.createElement("path", { d: "M3.75 7C2.7125 7 1.82813 6.65875 1.09688 5.97625C0.365625 5.29375 0 4.46833 0 3.5C0 2.53167 0.365625 1.70625 1.09688 1.02375C1.82813 0.34125 2.7125 0 3.75 0H6C6.2125 0 6.39063 0.0670833 6.53438 0.20125C6.67813 0.335417 6.75 0.501667 6.75 0.7C6.75 0.898333 6.67813 1.06458 6.53438 1.19875C6.39063 1.33292 6.2125 1.4 6 1.4H3.75C3.125 1.4 2.59375 1.60417 2.15625 2.0125C1.71875 2.42083 1.5 2.91667 1.5 3.5C1.5 4.08333 1.71875 4.57917 2.15625 4.9875C2.59375 5.39583 3.125 5.6 3.75 5.6H6C6.2125 5.6 6.39063 5.66708 6.53438 5.80125C6.67813 5.93542 6.75 6.10167 6.75 6.3C6.75 6.49833 6.67813 6.66458 6.53438 6.79875C6.39063 6.93292 6.2125 7 6 7H3.75ZM5.25 4.2C5.0375 4.2 4.85938 4.13292 4.71563 3.99875C4.57188 3.86458 4.5 3.69833 4.5 3.5C4.5 3.30167 4.57188 3.13542 4.71563 3.00125C4.85938 2.86708 5.0375 2.8 5.25 2.8H9.75C9.9625 2.8 10.1406 2.86708 10.2844 3.00125C10.4281 3.13542 10.5 3.30167 10.5 3.5C10.5 3.69833 10.4281 3.86458 10.2844 3.99875C10.1406 4.13292 9.9625 4.2 9.75 4.2H5.25ZM9 7C8.7875 7 8.60938 6.93292 8.46563 6.79875C8.32188 6.66458 8.25 6.49833 8.25 6.3C8.25 6.10167 8.32188 5.93542 8.46563 5.80125C8.60938 5.66708 8.7875 5.6 9 5.6H11.25C11.875 5.6 12.4063 5.39583 12.8438 4.9875C13.2813 4.57917 13.5 4.08333 13.5 3.5C13.5 2.91667 13.2813 2.42083 12.8438 2.0125C12.4063 1.60417 11.875 1.4 11.25 1.4H9C8.7875 1.4 8.60938 1.33292 8.46563 1.19875C8.32188 1.06458 8.25 0.898333 8.25 0.7C8.25 0.501667 8.32188 0.335417 8.46563 0.20125C8.60938 0.0670833 8.7875 0 9 0H11.25C12.2875 0 13.1719 0.34125 13.9031 1.02375C14.6344 1.70625 15 2.53167 15 3.5C15 4.46833 14.6344 5.29375 13.9031 5.97625C13.1719 6.65875 12.2875 7 11.25 7H9Z", fill: "#8E99A4" })), Z3 = ({ handleCommand: r }) => {
  const C = () => {
    console.log("Adding link...");
    const g = prompt("Enter the URL");
    g && r("createLink", g);
  };
  return /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: `${f.btn} ${f["btn--icon"]}`,
      "aria-label": "Link",
      onClick: C,
      children: [
        /* @__PURE__ */ n.jsx(D3, {}),
        /* @__PURE__ */ n.jsx(H, { text: "Link" })
      ]
    }
  );
}, a1 = (r) => /* @__PURE__ */ v.createElement("svg", { width: 6, height: 4, viewBox: "0 0 6 4", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ v.createElement("path", { opacity: 0.5, d: "M3 4C2.92825 4 2.86099 3.98728 2.79821 3.96183C2.73543 3.93639 2.67713 3.89313 2.62332 3.83206L0.147982 1.0229C0.0493274 0.910941 0 0.768448 0 0.59542C0 0.422392 0.0493274 0.279898 0.147982 0.167939C0.246637 0.0559796 0.372197 0 0.524664 0C0.67713 0 0.802691 0.0559796 0.901345 0.167939L3 2.54962L5.09865 0.167939C5.19731 0.0559796 5.32287 0 5.47534 0C5.6278 0 5.75336 0.0559796 5.85202 0.167939C5.95067 0.279898 6 0.422392 6 0.59542C6 0.768448 5.95067 0.910941 5.85202 1.0229L3.37668 3.83206C3.32287 3.89313 3.26457 3.93639 3.20179 3.96183C3.13901 3.98728 3.07175 4 3 4Z", fill: "#8E99A4" })), V3 = "_open_wdvgn_25", N3 = "_selected_wdvgn_33", A = {
  "custom-select": "_custom-select_wdvgn_5",
  "custom-select__btn": "_custom-select__btn_wdvgn_8",
  "custom-select__list": "_custom-select__list_wdvgn_12",
  open: V3,
  selected: N3
}, $1 = ({
  listItems: r,
  selectedValue: C,
  setSelectedValue: g,
  buttonText: p,
  type: x
}) => {
  const T = h3(null), [R, w] = I(!1), u = () => w(!R), y = (d) => {
    d.preventDefault(), u(), g(d.target.value);
  };
  return J(() => {
    const d = (_) => {
      const S = _.target;
      T.current && !T.current.contains(S) && w(!1);
    };
    return document.addEventListener("click", d), () => document.removeEventListener("click", d);
  }, []), /* @__PURE__ */ n.jsxs("div", { className: A["custom-select"], ref: T, children: [
    /* @__PURE__ */ n.jsxs(
      "button",
      {
        type: "button",
        className: `${A["custom-select__btn"]} ${f.btn}`,
        "aria-expanded": R,
        "aria-controls": `custom-select-list-${x}`,
        "aria-label": "toggle dropdown",
        onClick: u,
        children: [
          p || C,
          " ",
          /* @__PURE__ */ n.jsx(a1, {})
        ]
      }
    ),
    /* @__PURE__ */ n.jsx(
      "ul",
      {
        id: `custom-select-list-${x}`,
        className: `${A["custom-select__list"]} ${R ? A.open : ""}`,
        children: r.map((d, _) => /* @__PURE__ */ n.jsx(
          "li",
          {
            className: `${A["custom-select__item"]} ${d === C ? A.selected : ""}`,
            children: /* @__PURE__ */ n.jsxs("label", { htmlFor: `custom-select-${x}-radio-${_}`, children: [
              /* @__PURE__ */ n.jsx(
                "input",
                {
                  type: "radio",
                  id: `custom-select-${x}-radio-${_}`,
                  name: `custom-select-${x}`,
                  value: d,
                  checked: d === C,
                  onChange: y
                }
              ),
              /* @__PURE__ */ n.jsx("p", { children: d })
            ] })
          },
          _
        ))
      }
    )
  ] });
}, B3 = ({ handleCommand: r }) => {
  const C = ["Normal", "Heading 1", "Heading 2"], [g, p] = I(C[0]);
  return J(() => {
    switch (g) {
      case "Heading 1":
        r("formatBlock", "<h1>");
        break;
      case "Heading 2":
        r("formatBlock", "<h2>");
        break;
      default:
        r("formatBlock", "<p>");
    }
  }, [g, r]), /* @__PURE__ */ n.jsx(
    $1,
    {
      listItems: C,
      selectedValue: g,
      setSelectedValue: p,
      type: "font-size"
    }
  );
}, U3 = ({ handleCommand: r }) => {
  const C = [
    "Building name",
    "Building address",
    "First name",
    "Last name"
  ], [g, p] = I(C[0]);
  return J(() => {
    r("");
  }, [g]), /* @__PURE__ */ n.jsx(
    $1,
    {
      listItems: C,
      selectedValue: g,
      setSelectedValue: p,
      buttonText: "Tags",
      type: "tags"
    }
  );
}, W3 = (r) => /* @__PURE__ */ v.createElement("svg", { width: 9, height: 10, viewBox: "0 0 9 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ v.createElement("path", { d: "M0.841642 10C0.554712 10 0.327039 9.88393 0.158624 9.65179C-0.00979164 9.41964 -0.0440984 9.17262 0.0557033 8.91071L3.34916 0.535714C3.41154 0.369048 3.51758 0.238095 3.66728 0.142857C3.81698 0.047619 3.97916 0 4.15381 0H4.82747C5.0146 0 5.1799 0.047619 5.32336 0.142857C5.46683 0.238095 5.56975 0.369048 5.63213 0.535714L8.9443 8.92857C9.0441 9.19048 9.00979 9.43452 8.84138 9.66071C8.67296 9.8869 8.44529 10 8.15836 10C7.98371 10 7.82153 9.95238 7.67182 9.85714C7.52212 9.7619 7.41608 9.63095 7.35371 9.46429L6.62391 7.42857H2.39481L1.62758 9.48214C1.5652 9.64881 1.46228 9.77679 1.31882 9.86607C1.17535 9.95536 1.0163 10 0.841642 10ZM2.91877 6H6.06252L4.52807 1.85714H4.45322L2.91877 6Z", fill: "#8E99A4" })), Y3 = ({ handleCommand: r }) => {
  const [C, g] = I("#3C4D5D"), p = (x) => {
    x.preventDefault(), g(x.target.value), r("foreColor", x.target.value);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: `${f.btn} ${f["btn--color"]}`, children: [
    /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsxs("label", { htmlFor: "font-color", children: [
      /* @__PURE__ */ n.jsx("input", { id: "font-color", type: "color", value: C, onChange: p }),
      /* @__PURE__ */ n.jsx(W3, {}),
      /* @__PURE__ */ n.jsx(a1, {})
    ] }) }),
    /* @__PURE__ */ n.jsx(H, { text: "Text color" })
  ] });
}, z3 = (r) => /* @__PURE__ */ v.createElement("svg", { width: 11, height: 10, viewBox: "0 0 11 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ v.createElement("path", { d: "M6.33726 6.11111L4.89403 4.66667L2.11859 7.44444L3.56182 8.88889L6.33726 6.11111ZM5.68503 3.875L7.12826 5.31944L9.88982 2.55556L8.44659 1.11111L5.68503 3.875ZM4.51934 3.48611L7.51682 6.48611L4.33894 9.66667C4.1169 9.88889 3.85786 10 3.56182 10C3.26577 10 3.00673 9.88889 2.78469 9.66667L2.75694 9.63889L2.71531 9.68056C2.61354 9.78241 2.49558 9.86111 2.36144 9.91667C2.22729 9.97222 2.08621 10 1.93818 10H0.286796C0.157275 10 0.069386 9.94444 0.0231287 9.83333C-0.0231287 9.72222 0 9.62037 0.0925147 9.52778L1.36922 8.25L1.34146 8.22222C1.11943 8 1.00841 7.74074 1.00841 7.44444C1.00841 7.14815 1.11943 6.88889 1.34146 6.66667L4.51934 3.48611ZM4.51934 3.48611L7.66947 0.333333C7.89151 0.111111 8.15055 0 8.44659 0C8.74264 0 9.00168 0.111111 9.22372 0.333333L10.6669 1.77778C10.889 2 11 2.25926 11 2.55556C11 2.85185 10.889 3.11111 10.6669 3.33333L7.51682 6.48611L4.51934 3.48611Z", fill: "#8E99A4" })), q3 = ({ handleCommand: r }) => {
  const [C, g] = I("#F6D423"), p = (x) => {
    x.preventDefault(), g(x.target.value), r("hiliteColor", x.target.value);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: `${f.btn} ${f["btn--color"]}`, children: [
    /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsxs("label", { htmlFor: "text-marker", children: [
      /* @__PURE__ */ n.jsx("input", { id: "text-marker", type: "color", value: C, onChange: p }),
      /* @__PURE__ */ n.jsx(z3, {}),
      /* @__PURE__ */ n.jsx(a1, {})
    ] }) }),
    /* @__PURE__ */ n.jsx(H, { text: "Text marker color" })
  ] });
}, J3 = {
  "rich-text-editor__toolbar": "_rich-text-editor__toolbar_ez8l1_5"
}, G3 = ({ handleCommand: r }) => /* @__PURE__ */ n.jsxs("div", { className: J3["rich-text-editor__toolbar"], children: [
  /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx(B3, { handleCommand: r }) }),
  /* @__PURE__ */ n.jsxs("div", { children: [
    /* @__PURE__ */ n.jsx(y3, { handleCommand: r }),
    /* @__PURE__ */ n.jsx(R3, { handleCommand: r }),
    /* @__PURE__ */ n.jsx(T3, { handleCommand: r })
  ] }),
  /* @__PURE__ */ n.jsxs("div", { children: [
    /* @__PURE__ */ n.jsx(Y3, { handleCommand: r }),
    /* @__PURE__ */ n.jsx(q3, { handleCommand: r })
  ] }),
  /* @__PURE__ */ n.jsxs("div", { children: [
    /* @__PURE__ */ n.jsx(M3, { handleCommand: r }),
    /* @__PURE__ */ n.jsx(k3, { handleCommand: r })
  ] }),
  /* @__PURE__ */ n.jsxs("div", { children: [
    /* @__PURE__ */ n.jsx($3, { handleCommand: r }),
    /* @__PURE__ */ n.jsx(A3, { handleCommand: r }),
    /* @__PURE__ */ n.jsx(F3, { handleCommand: r })
  ] }),
  /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx(Z3, { handleCommand: r }) }),
  /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx(U3, { handleCommand: r }) })
] }), K3 = "_MyVMERichTextEditor_1yut6_5", X3 = "_toolbar_1yut6_14", Q3 = "_visible_1yut6_20", e6 = "_editor_1yut6_25", q = {
  MyVMERichTextEditor: K3,
  toolbar: X3,
  visible: Q3,
  editor: e6
}, r6 = ({ editorRef: r, editorContainerRef: C }) => {
  const [g, p] = I(!1);
  J(() => (document.addEventListener("mousedown", w), () => {
    document.removeEventListener("mousedown", w);
  }), []);
  const x = () => {
    var u;
    console.log("Input detected:", (u = r.current) == null ? void 0 : u.innerHTML);
  }, T = (u, y) => {
    console.log(`Executing command: ${u}`, y), r.current && (document.execCommand(u, !1, y === null ? void 0 : y), r.current.focus());
  }, R = () => p(!0), w = (u) => {
    C.current && !C.current.contains(u.target) && p(!1);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: q.MyVMERichTextEditor, ref: C, children: [
    /* @__PURE__ */ n.jsx("div", { className: `${q.toolbar} ${g ? q.visible : ""}`, children: /* @__PURE__ */ n.jsx(G3, { handleCommand: T }) }),
    /* @__PURE__ */ n.jsx(
      "div",
      {
        ref: r,
        contentEditable: !0,
        className: q.editor,
        onInput: x,
        onFocus: R,
        style: { minHeight: 48 }
      }
    )
  ] });
};
export {
  r6 as default
};
