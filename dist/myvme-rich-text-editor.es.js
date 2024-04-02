import Te, { useRef as ur } from "react";
var X = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function lr() {
  if (Ce)
    return I;
  Ce = 1;
  var _ = Te, x = Symbol.for("react.element"), d = Symbol.for("react.fragment"), C = Object.prototype.hasOwnProperty, S = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(T, v, P) {
    var g, E = {}, j = null, $ = null;
    P !== void 0 && (j = "" + P), v.key !== void 0 && (j = "" + v.key), v.ref !== void 0 && ($ = v.ref);
    for (g in v)
      C.call(v, g) && !l.hasOwnProperty(g) && (E[g] = v[g]);
    if (T && T.defaultProps)
      for (g in v = T.defaultProps, v)
        E[g] === void 0 && (E[g] = v[g]);
    return { $$typeof: x, type: T, key: j, ref: $, props: E, _owner: S.current };
  }
  return I.Fragment = d, I.jsx = b, I.jsxs = b, I;
}
var L = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function sr() {
  return xe || (xe = 1, process.env.NODE_ENV !== "production" && function() {
    var _ = Te, x = Symbol.for("react.element"), d = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), T = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), Z = Symbol.iterator, je = "@@iterator";
    function Oe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Z && e[Z] || e[je];
      return typeof r == "function" ? r : null;
    }
    var w = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Se("error", e, t);
      }
    }
    function Se(e, r, t) {
      {
        var n = w.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Pe = !1, we = !1, ke = !1, De = !1, Fe = !1, Q;
    Q = Symbol.for("react.module.reference");
    function Ae(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === C || e === l || Fe || e === S || e === P || e === g || De || e === $ || Pe || we || ke || typeof e == "object" && e !== null && (e.$$typeof === j || e.$$typeof === E || e.$$typeof === b || e.$$typeof === T || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Q || e.getModuleId !== void 0));
    }
    function Ie(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ee(e) {
      return e.displayName || "Context";
    }
    function R(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case C:
          return "Fragment";
        case d:
          return "Portal";
        case l:
          return "Profiler";
        case S:
          return "StrictMode";
        case P:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var r = e;
            return ee(r) + ".Consumer";
          case b:
            var t = e;
            return ee(t._context) + ".Provider";
          case v:
            return Ie(e, e.render, "ForwardRef");
          case E:
            var n = e.displayName || null;
            return n !== null ? n : R(e.type) || "Memo";
          case j: {
            var i = e, u = i._payload, o = i._init;
            try {
              return R(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, F = 0, re, te, ne, ae, oe, ie, ue;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function Le() {
      {
        if (F === 0) {
          re = console.log, te = console.info, ne = console.warn, ae = console.error, oe = console.group, ie = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: le,
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
    function $e() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: re
            }),
            info: O({}, e, {
              value: te
            }),
            warn: O({}, e, {
              value: ne
            }),
            error: O({}, e, {
              value: ae
            }),
            group: O({}, e, {
              value: oe
            }),
            groupCollapsed: O({}, e, {
              value: ie
            }),
            groupEnd: O({}, e, {
              value: ue
            })
          });
        }
        F < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = w.ReactCurrentDispatcher, B;
    function W(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var H = !1, N;
    {
      var We = typeof WeakMap == "function" ? WeakMap : Map;
      N = new We();
    }
    function se(e, r) {
      if (!e || H)
        return "";
      {
        var t = N.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      H = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = V.current, V.current = null, Le();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (y) {
              n = y;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (y) {
              n = y;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (y) {
            n = y;
          }
          e();
        }
      } catch (y) {
        if (y && n && typeof y.stack == "string") {
          for (var a = y.stack.split(`
`), h = n.stack.split(`
`), c = a.length - 1, f = h.length - 1; c >= 1 && f >= 0 && a[c] !== h[f]; )
            f--;
          for (; c >= 1 && f >= 0; c--, f--)
            if (a[c] !== h[f]) {
              if (c !== 1 || f !== 1)
                do
                  if (c--, f--, f < 0 || a[c] !== h[f]) {
                    var m = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, m), m;
                  }
                while (c >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        H = !1, V.current = u, $e(), Error.prepareStackTrace = i;
      }
      var D = e ? e.displayName || e.name : "", _e = D ? W(D) : "";
      return typeof e == "function" && N.set(e, _e), _e;
    }
    function Ne(e, r, t) {
      return se(e, !1);
    }
    function Ye(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Y(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return se(e, Ye(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case P:
          return W("Suspense");
        case g:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return Ne(e.render);
          case E:
            return Y(e.type, r, t);
          case j: {
            var n = e, i = n._payload, u = n._init;
            try {
              return Y(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, ce = {}, fe = w.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        fe.setExtraStackFrame(t);
      } else
        fe.setExtraStackFrame(null);
    }
    function Ue(e, r, t, n, i) {
      {
        var u = Function.call.bind(U);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var h = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (M(i), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), M(null)), a instanceof Error && !(a.message in ce) && (ce[a.message] = !0, M(i), p("Failed %s type: %s", t, a.message), M(null));
          }
      }
    }
    var Me = Array.isArray;
    function q(e) {
      return Me(e);
    }
    function Ve(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Be(e) {
      try {
        return de(e), !1;
      } catch {
        return !0;
      }
    }
    function de(e) {
      return "" + e;
    }
    function ve(e) {
      if (Be(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ve(e)), de(e);
    }
    var A = w.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pe, he, G;
    G = {};
    function qe(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Je(e, r) {
      if (typeof e.ref == "string" && A.current && r && A.current.stateNode !== r) {
        var t = R(A.current.type);
        G[t] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(A.current.type), e.ref), G[t] = !0);
      }
    }
    function ze(e, r) {
      {
        var t = function() {
          pe || (pe = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ke(e, r) {
      {
        var t = function() {
          he || (he = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Xe = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: x,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function Ze(e, r, t, n, i) {
      {
        var u, o = {}, a = null, h = null;
        t !== void 0 && (ve(t), a = "" + t), Ge(r) && (ve(r.key), a = "" + r.key), qe(r) && (h = r.ref, Je(r, i));
        for (u in r)
          U.call(r, u) && !He.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (u in c)
            o[u] === void 0 && (o[u] = c[u]);
        }
        if (a || h) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && ze(o, f), h && Ke(o, f);
        }
        return Xe(e, a, h, i, n, A.current, o);
      }
    }
    var J = w.ReactCurrentOwner, ge = w.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    var z;
    z = !1;
    function K(e) {
      return typeof e == "object" && e !== null && e.$$typeof === x;
    }
    function me() {
      {
        if (J.current) {
          var e = R(J.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Qe(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var be = {};
    function er(e) {
      {
        var r = me();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = er(r);
        if (be[t])
          return;
        be[t] = !0;
        var n = "";
        e && e._owner && e._owner !== J.current && (n = " It was passed a child from " + R(e._owner.type) + "."), k(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function Re(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            K(n) && Ee(n, r);
          }
        else if (K(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Oe(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              K(o.value) && Ee(o.value, r);
        }
      }
    }
    function rr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = R(r);
          Ue(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !z) {
          z = !0;
          var i = R(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function ye(e, r, t, n, i, u) {
      {
        var o = Ae(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var h = Qe(i);
          h ? a += h : a += me();
          var c;
          e === null ? c = "null" : q(e) ? c = "array" : e !== void 0 && e.$$typeof === x ? (c = "<" + (R(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var f = Ze(e, r, t, i, u);
        if (f == null)
          return f;
        if (o) {
          var m = r.children;
          if (m !== void 0)
            if (n)
              if (q(m)) {
                for (var D = 0; D < m.length; D++)
                  Re(m[D], e);
                Object.freeze && Object.freeze(m);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(m, e);
        }
        return e === C ? tr(f) : rr(f), f;
      }
    }
    function nr(e, r, t) {
      return ye(e, r, t, !0);
    }
    function ar(e, r, t) {
      return ye(e, r, t, !1);
    }
    var or = ar, ir = nr;
    L.Fragment = C, L.jsx = or, L.jsxs = ir;
  }()), L;
}
process.env.NODE_ENV === "production" ? X.exports = lr() : X.exports = sr();
var s = X.exports;
const fr = () => {
  const _ = ur(null), x = () => {
    var l;
    console.log("Input detected:", (l = _.current) == null ? void 0 : l.innerHTML);
  }, d = (l, b) => {
    console.log(`Executing command: ${l}`, b), _.current && (document.execCommand(l, !1, b === null ? void 0 : b), _.current.focus());
  }, C = () => {
    const l = prompt("Enter the URL");
    l && d("createLink", l);
  }, S = () => {
    const l = prompt("Enter the image URL");
    l && d("insertImage", l);
  };
  return /* @__PURE__ */ s.jsxs("div", { children: [
    /* @__PURE__ */ s.jsxs("div", { className: "toolbar", children: [
      /* @__PURE__ */ s.jsx("button", { onClick: () => d("bold"), children: "Bold" }),
      /* @__PURE__ */ s.jsx("button", { onClick: () => d("italic"), children: "Italic" }),
      /* @__PURE__ */ s.jsx("button", { onClick: () => d("underline"), children: "Underline" }),
      /* @__PURE__ */ s.jsx("button", { onClick: () => d("insertUnorderedList"), children: "Bullet List" }),
      /* @__PURE__ */ s.jsx("button", { onClick: () => d("insertOrderedList"), children: "Numbered List" }),
      /* @__PURE__ */ s.jsxs("select", { onChange: (l) => d("fontName", l.target.value), children: [
        /* @__PURE__ */ s.jsx("option", { value: "Arial", children: "Arial" }),
        /* @__PURE__ */ s.jsx("option", { value: "Georgia", children: "Georgia" }),
        /* @__PURE__ */ s.jsx("option", { value: "Tahoma", children: "Tahoma" })
      ] }),
      /* @__PURE__ */ s.jsxs("select", { onChange: (l) => d("fontSize", l.target.value), children: [
        /* @__PURE__ */ s.jsx("option", { value: "1", children: "Small" }),
        /* @__PURE__ */ s.jsx("option", { value: "3", children: "Normal" }),
        /* @__PURE__ */ s.jsx("option", { value: "5", children: "Large" })
      ] }),
      /* @__PURE__ */ s.jsx("input", { type: "color", onChange: (l) => d("foreColor", l.target.value), title: "Font Color" }),
      /* @__PURE__ */ s.jsx("input", { type: "color", onChange: (l) => d("hiliteColor", l.target.value), title: "Highlight Color" }),
      /* @__PURE__ */ s.jsx("button", { onClick: C, children: "Add Link" }),
      /* @__PURE__ */ s.jsx("button", { onClick: S, children: "Insert Image" }),
      /* @__PURE__ */ s.jsx("button", { onClick: () => d("formatBlock", "H1"), children: "H1" }),
      /* @__PURE__ */ s.jsx("button", { onClick: () => d("formatBlock", "H2"), children: "H2" })
    ] }),
    /* @__PURE__ */ s.jsx(
      "div",
      {
        ref: _,
        contentEditable: !0,
        className: "editor",
        onInput: x
      }
    )
  ] });
};
export {
  fr as default
};
