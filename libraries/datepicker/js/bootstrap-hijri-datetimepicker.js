! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t() }(this, function() {
    "use strict";
    var e;

    function t() { return e.apply(null, arguments) }

    function a(e) { return "[object Array]" === Object.prototype.toString.call(e) }

    function n(e) { return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e) }

    function s(e, t) { var a, n = []; for (a = 0; a < e.length; ++a) n.push(t(e[a], a)); return n }

    function r(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }

    function i(e, t) { for (var a in t) r(t, a) && (e[a] = t[a]); return r(t, "toString") && (e.toString = t.toString), r(t, "valueOf") && (e.valueOf = t.valueOf), e }

    function d(e, t, a, n) { return at(e, t, a, n, !0).utc() }

    function o(e) { return null == e._pf && (e._pf = { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1 }), e._pf }

    function _(e) {
        if (null == e._isValid) {
            var t = o(e);
            e._isValid = !(isNaN(e._d.getTime()) || !(t.overflow < 0) || t.empty || t.invalidMonth || t.invalidWeekday || t.nullInput || t.invalidFormat || t.userInvalidated), e._strict && (e._isValid = e._isValid && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour)
        }
        return e._isValid
    }

    function u(e) { var t = d(NaN); return null != e ? i(o(t), e) : o(t).userInvalidated = !0, t }

    function m(e) { return void 0 === e }
    var l = t.momentProperties = [];

    function h(e, t) {
        var a, n, s;
        if (m(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), m(t._i) || (e._i = t._i), m(t._f) || (e._f = t._f), m(t._l) || (e._l = t._l), m(t._strict) || (e._strict = t._strict), m(t._tzm) || (e._tzm = t._tzm), m(t._isUTC) || (e._isUTC = t._isUTC), m(t._offset) || (e._offset = t._offset), m(t._pf) || (e._pf = o(t)), m(t._locale) || (e._locale = t._locale), l.length > 0)
            for (a in l) m(s = t[n = l[a]]) || (e[n] = s);
        return e
    }
    var c = !1;

    function M(e) { h(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), !1 === c && (c = !0, t.updateOffset(this), c = !1) }

    function p(e) { return e instanceof M || null != e && null != e._isAMomentObject }

    function f(e) { return e < 0 ? Math.ceil(e) : Math.floor(e) }

    function Y(e) {
        var t = +e,
            a = 0;
        return 0 !== t && isFinite(t) && (a = f(t)), a
    }

    function L(e, t, a) {
        var n, s = Math.min(e.length, t.length),
            r = Math.abs(e.length - t.length),
            i = 0;
        for (n = 0; n < s; n++)(a && e[n] !== t[n] || !a && Y(e[n]) !== Y(t[n])) && i++;
        return i + r
    }

    function y() {}
    var D, k = {};

    function g(e) { return e ? e.toLowerCase().replace("_", "-") : e }

    function w(e) {
        var t = null;
        if (!k[e] && "undefined" != typeof module && module && module.exports) try { t = D._abbr, require("./locale/" + e), T(t) } catch (e) {}
        return k[e]
    }

    function T(e, t) { var a; return e && (a = m(t) ? b(e) : v(e, t)) && (D = a), D._abbr }

    function v(e, t) { return null !== t ? (t.abbr = e, k[e] = k[e] || new y, k[e].set(t), T(e), k[e]) : (delete k[e], null) }

    function b(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return D;
        if (!a(e)) {
            if (t = w(e)) return t;
            e = [e]
        }
        return function(e) {
            for (var t, a, n, s, r = 0; r < e.length;) {
                for (t = (s = g(e[r]).split("-")).length, a = (a = g(e[r + 1])) ? a.split("-") : null; t > 0;) {
                    if (n = w(s.slice(0, t).join("-"))) return n;
                    if (a && a.length >= t && L(s, a, !0) >= t - 1) break;
                    t--
                }
                r++
            }
            return null
        }(e)
    }
    var S = {};

    function H(e, t) {
        var a = e.toLowerCase();
        S[a] = S[a + "s"] = S[t] = e
    }

    function j(e) { return "string" == typeof e ? S[e] || S[e.toLowerCase()] : void 0 }

    function x(e) { var t, a, n = {}; for (a in e) r(e, a) && (t = j(a)) && (n[t] = e[a]); return n }

    function W(e) { return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e) }

    function P(e, a) { return function(n) { return null != n ? (A(this, e, n), t.updateOffset(this, a), this) : F(this, e) } }

    function F(e, t) { return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN }

    function A(e, t, a) { e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](a) }

    function C(e, t) {
        var a;
        if ("object" == typeof e)
            for (a in e) this.set(a, e[a]);
        else if (W(this[e = j(e)])) return this[e](t);
        return this
    }

    function O(e, t, a) {
        var n = "" + Math.abs(e),
            s = t - n.length;
        return (e >= 0 ? a ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + n
    }
    var E = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        z = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        J = {},
        I = {};

    function N(e, t, a, n) { var s = n; "string" == typeof n && (s = function() { return this[n]() }), e && (I[e] = s), t && (I[t[0]] = function() { return O(s.apply(this, arguments), t[1], t[2]) }), a && (I[a] = function() { return this.localeData().ordinal(s.apply(this, arguments), e) }) }

    function G(e, t) { return e.isValid() ? (t = V(t, e.localeData()), J[t] = J[t] || function(e) { var t, a, n, s = e.match(E); for (t = 0, a = s.length; t < a; t++) I[s[t]] ? s[t] = I[s[t]] : s[t] = (n = s[t]).match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, ""); return function(n) { var r = ""; for (t = 0; t < a; t++) r += s[t] instanceof Function ? s[t].call(n, e) : s[t]; return r } }(t), J[t](e)) : e.localeData().invalidDate() }

    function V(e, t) {
        var a = 5;

        function n(e) { return t.longDateFormat(e) || e }
        for (z.lastIndex = 0; a >= 0 && z.test(e);) e = e.replace(z, n), z.lastIndex = 0, a -= 1;
        return e
    }
    var U = /\d/,
        q = /\d\d/,
        R = /\d{3}/,
        Z = /\d{4}/,
        B = /[+-]?\d{6}/,
        $ = /\d\d?/,
        K = /\d\d\d\d?/,
        Q = /\d\d\d\d\d\d?/,
        X = /\d{1,3}/,
        ee = /\d{1,4}/,
        te = /[+-]?\d{1,6}/,
        ae = /\d+/,
        ne = /[+-]?\d+/,
        se = /Z|[+-]\d\d:?\d\d/gi,
        re = /Z|[+-]\d\d(?::?\d\d)?/gi,
        ie = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        de = {};

    function oe(e, t, a) { de[e] = W(t) ? t : function(e, n) { return e && a ? a : t } }

    function _e(e, t) { return r(de, e) ? de[e](t._strict, t._locale) : new RegExp(ue(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, a, n, s) { return t || a || n || s }))) }

    function ue(e) { return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") }
    var me = {};

    function le(e, t) { var a, n = t; for ("string" == typeof e && (e = [e]), "number" == typeof t && (n = function(e, a) { a[t] = Y(e) }), a = 0; a < e.length; a++) me[e[a]] = n }

    function he(e, t) { le(e, function(e, a, n, s) { n._w = n._w || {}, t(e, n._w, n, s) }) }

    function ce(e, t, a) { null != t && r(me, e) && me[e](t, a._a, a, e) }
    var Me = 0,
        pe = 1,
        fe = 2,
        Ye = 3,
        Le = 4,
        ye = 5,
        De = 6,
        ke = 7,
        ge = 8;

    function we(e, t) { return new Date(Date.UTC(e, t + 1, 0)).getUTCDate() }
    N("M", ["MM", 2], "Mo", function() { return this.month() + 1 }), N("MMM", 0, 0, function(e) { return this.localeData().monthsShort(this, e) }), N("MMMM", 0, 0, function(e) { return this.localeData().months(this, e) }), H("month", "M"), oe("M", $), oe("MM", $, q), oe("MMM", function(e, t) { return t.monthsShortRegex(e) }), oe("MMMM", function(e, t) { return t.monthsRegex(e) }), le(["M", "MM"], function(e, t) { t[pe] = Y(e) - 1 }), le(["MMM", "MMMM"], function(e, t, a, n) {
        var s = a._locale.monthsParse(e, n, a._strict);
        null != s ? t[pe] = s : o(a).invalidMonth = e
    });
    var Te = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
        ve = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
    var be = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

    function Se(e, t) { var a; return e.isValid() ? "string" == typeof t && "number" != typeof(t = e.localeData().monthsParse(t)) ? e : (a = Math.min(e.date(), we(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, a), e) : e }

    function He(e) { return null != e ? (Se(this, e), t.updateOffset(this, !0), this) : F(this, "Month") }
    var je = ie;
    var xe = ie;

    function We() {
        function e(e, t) { return t.length - e.length }
        var t, a, n = [],
            s = [],
            r = [];
        for (t = 0; t < 12; t++) a = d([2e3, t]), n.push(this.monthsShort(a, "")), s.push(this.months(a, "")), r.push(this.months(a, "")), r.push(this.monthsShort(a, ""));
        for (n.sort(e), s.sort(e), r.sort(e), t = 0; t < 12; t++) n[t] = ue(n[t]), s[t] = ue(s[t]), r[t] = ue(r[t]);
        this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")$", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")$", "i")
    }

    function Pe(e) { var t, a = e._a; return a && -2 === o(e).overflow && (t = a[pe] < 0 || a[pe] > 11 ? pe : a[fe] < 1 || a[fe] > we(a[Me], a[pe]) ? fe : a[Ye] < 0 || a[Ye] > 24 || 24 === a[Ye] && (0 !== a[Le] || 0 !== a[ye] || 0 !== a[De]) ? Ye : a[Le] < 0 || a[Le] > 59 ? Le : a[ye] < 0 || a[ye] > 59 ? ye : a[De] < 0 || a[De] > 999 ? De : -1, o(e)._overflowDayOfYear && (t < Me || t > fe) && (t = fe), o(e)._overflowWeeks && -1 === t && (t = ke), o(e)._overflowWeekday && -1 === t && (t = ge), o(e).overflow = t), e }

    function Fe(e) {!1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e) }

    function Ae(e, t) { var a = !0; return i(function() { return a && (Fe(e + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), a = !1), t.apply(this, arguments) }, t) }
    var Ce = {};
    t.suppressDeprecationWarnings = !1;
    var Oe = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
        Ee = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
        ze = /Z|[+-]\d\d(?::?\d\d)?/,
        Je = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/]
        ],
        Ie = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        Ne = /^\/?Date\((\-?\d+)/i;

    function Ge(e) {
        var t, a, n, s, r, i, d = e._i,
            _ = Oe.exec(d) || Ee.exec(d);
        if (_) {
            for (o(e).iso = !0, t = 0, a = Je.length; t < a; t++)
                if (Je[t][1].exec(_[1])) { s = Je[t][0], n = !1 !== Je[t][2]; break }
            if (null == s) return void(e._isValid = !1);
            if (_[3]) {
                for (t = 0, a = Ie.length; t < a; t++)
                    if (Ie[t][1].exec(_[3])) { r = (_[2] || " ") + Ie[t][0]; break }
                if (null == r) return void(e._isValid = !1)
            }
            if (!n && null != r) return void(e._isValid = !1);
            if (_[4]) {
                if (!ze.exec(_[4])) return void(e._isValid = !1);
                i = "Z"
            }
            e._f = s + (r || "") + (i || ""), et(e)
        } else e._isValid = !1
    }

    function Ve(e) { var t = new Date(Date.UTC.apply(null, arguments)); return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t }

    function Ue(e) { return qe(e) ? 366 : 365 }

    function qe(e) { return e % 4 == 0 && e % 100 != 0 || e % 400 == 0 }
    t.createFromInputFallback = Ae("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(e) { e._d = new Date(e._i + (e._useUTC ? " UTC" : "")) }), N("Y", 0, 0, function() { var e = this.year(); return e <= 9999 ? "" + e : "+" + e }), N(0, ["YY", 2], 0, function() { return this.year() % 100 }), N(0, ["YYYY", 4], 0, "year"), N(0, ["YYYYY", 5], 0, "year"), N(0, ["YYYYYY", 6, !0], 0, "year"), H("year", "y"), oe("Y", ne), oe("YY", $, q), oe("YYYY", ee, Z), oe("YYYYY", te, B), oe("YYYYYY", te, B), le(["YYYYY", "YYYYYY"], Me), le("YYYY", function(e, a) { a[Me] = 2 === e.length ? t.parseTwoDigitYear(e) : Y(e) }), le("YY", function(e, a) { a[Me] = t.parseTwoDigitYear(e) }), le("Y", function(e, t) { t[Me] = parseInt(e, 10) }), t.parseTwoDigitYear = function(e) { return Y(e) + (Y(e) > 68 ? 1900 : 2e3) };
    var Re = P("FullYear", !1);

    function Ze(e, t, a) { var n = 7 + t - a; return -((7 + Ve(e, 0, n).getUTCDay() - t) % 7) + n - 1 }

    function Be(e, t, a, n, s) { var r, i, d = 1 + 7 * (t - 1) + (7 + a - n) % 7 + Ze(e, n, s); return d <= 0 ? i = Ue(r = e - 1) + d : d > Ue(e) ? (r = e + 1, i = d - Ue(e)) : (r = e, i = d), { year: r, dayOfYear: i } }

    function $e(e, t, a) {
        var n, s, r = Ze(e.year(), t, a),
            i = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
        return i < 1 ? n = i + Ke(s = e.year() - 1, t, a) : i > Ke(e.year(), t, a) ? (n = i - Ke(e.year(), t, a), s = e.year() + 1) : (s = e.year(), n = i), { week: n, year: s }
    }

    function Ke(e, t, a) {
        var n = Ze(e, t, a),
            s = Ze(e + 1, t, a);
        return (Ue(e) - n + s) / 7
    }

    function Qe(e, t, a) { return null != e ? e : null != t ? t : a }

    function Xe(e) {
        var a, n, s, r, i = [];
        if (!e._d) {
            for (s = function(e) { var a = new Date(t.now()); return e._useUTC ? [a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()] : [a.getFullYear(), a.getMonth(), a.getDate()] }(e), e._w && null == e._a[fe] && null == e._a[pe] && function(e) {
                    var t, a, n, s, r, i, d, _;
                    null != (t = e._w).GG || null != t.W || null != t.E ? (r = 1, i = 4, a = Qe(t.GG, e._a[Me], $e(nt(), 1, 4).year), n = Qe(t.W, 1), ((s = Qe(t.E, 1)) < 1 || s > 7) && (_ = !0)) : (r = e._locale._week.dow, i = e._locale._week.doy, a = Qe(t.gg, e._a[Me], $e(nt(), r, i).year), n = Qe(t.w, 1), null != t.d ? ((s = t.d) < 0 || s > 6) && (_ = !0) : null != t.e ? (s = t.e + r, (t.e < 0 || t.e > 6) && (_ = !0)) : s = r);
                    n < 1 || n > Ke(a, r, i) ? o(e)._overflowWeeks = !0 : null != _ ? o(e)._overflowWeekday = !0 : (d = Be(a, n, s, r, i), e._a[Me] = d.year, e._dayOfYear = d.dayOfYear)
                }(e), e._dayOfYear && (r = Qe(e._a[Me], s[Me]), e._dayOfYear > Ue(r) && (o(e)._overflowDayOfYear = !0), n = Ve(r, 0, e._dayOfYear), e._a[pe] = n.getUTCMonth(), e._a[fe] = n.getUTCDate()), a = 0; a < 3 && null == e._a[a]; ++a) e._a[a] = i[a] = s[a];
            for (; a < 7; a++) e._a[a] = i[a] = null == e._a[a] ? 2 === a ? 1 : 0 : e._a[a];
            24 === e._a[Ye] && 0 === e._a[Le] && 0 === e._a[ye] && 0 === e._a[De] && (e._nextDay = !0, e._a[Ye] = 0), e._d = (e._useUTC ? Ve : function(e, t, a, n, s, r, i) { var d = new Date(e, t, a, n, s, r, i); return e < 100 && e >= 0 && isFinite(d.getFullYear()) && d.setFullYear(e), d }).apply(null, i), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Ye] = 24)
        }
    }

    function et(e) {
        if (e._f !== t.ISO_8601) {
            e._a = [], o(e).empty = !0;
            var a, n, s, r, i, d = "" + e._i,
                _ = d.length,
                u = 0;
            for (s = V(e._f, e._locale).match(E) || [], a = 0; a < s.length; a++) r = s[a], (n = (d.match(_e(r, e)) || [])[0]) && ((i = d.substr(0, d.indexOf(n))).length > 0 && o(e).unusedInput.push(i), d = d.slice(d.indexOf(n) + n.length), u += n.length), I[r] ? (n ? o(e).empty = !1 : o(e).unusedTokens.push(r), ce(r, n, e)) : e._strict && !n && o(e).unusedTokens.push(r);
            o(e).charsLeftOver = _ - u, d.length > 0 && o(e).unusedInput.push(d), !0 === o(e).bigHour && e._a[Ye] <= 12 && e._a[Ye] > 0 && (o(e).bigHour = void 0), e._a[Ye] = function(e, t, a) { var n; if (null == a) return t; return null != e.meridiemHour ? e.meridiemHour(t, a) : null != e.isPM ? ((n = e.isPM(a)) && t < 12 && (t += 12), n || 12 !== t || (t = 0), t) : t }(e._locale, e._a[Ye], e._meridiem), Xe(e), Pe(e)
        } else Ge(e)
    }

    function tt(e) {
        var r = e._i,
            d = e._f;
        return e._locale = e._locale || b(e._l), null === r || void 0 === d && "" === r ? u({ nullInput: !0 }) : ("string" == typeof r && (e._i = r = e._locale.preparse(r)), p(r) ? new M(Pe(r)) : (a(d) ? function(e) {
            var t, a, n, s, r;
            if (0 === e._f.length) return o(e).invalidFormat = !0, void(e._d = new Date(NaN));
            for (s = 0; s < e._f.length; s++) r = 0, t = h({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[s], et(t), _(t) && (r += o(t).charsLeftOver, r += 10 * o(t).unusedTokens.length, o(t).score = r, (null == n || r < n) && (n = r, a = t));
            i(e, a || t)
        }(e) : d ? et(e) : n(r) ? e._d = r : function(e) {
            var r = e._i;
            void 0 === r ? e._d = new Date(t.now()) : n(r) ? e._d = new Date(+r) : "string" == typeof r ? function(e) {
                var a = Ne.exec(e._i);
                null === a ? (Ge(e), !1 === e._isValid && (delete e._isValid, t.createFromInputFallback(e))) : e._d = new Date(+a[1])
            }(e) : a(r) ? (e._a = s(r.slice(0), function(e) { return parseInt(e, 10) }), Xe(e)) : "object" == typeof r ? function(e) {
                if (!e._d) {
                    var t = x(e._i);
                    e._a = s([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) { return e && parseInt(e, 10) }), Xe(e)
                }
            }(e) : "number" == typeof r ? e._d = new Date(r) : t.createFromInputFallback(e)
        }(e), _(e) || (e._d = null), e))
    }

    function at(e, t, a, n, s) { var r, i = {}; return "boolean" == typeof a && (n = a, a = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = s, i._l = a, i._i = e, i._f = t, i._strict = n, (r = new M(Pe(tt(i))))._nextDay && (r.add(1, "d"), r._nextDay = void 0), r }

    function nt(e, t, a, n) { return at(e, t, a, n, !1) }
    t.ISO_8601 = function() {};
    var st = Ae("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() { var e = nt.apply(null, arguments); return this.isValid() && e.isValid() ? e < this ? this : e : u() }),
        rt = Ae("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() { var e = nt.apply(null, arguments); return this.isValid() && e.isValid() ? e > this ? this : e : u() });

    function it(e, t) { var n, s; if (1 === t.length && a(t[0]) && (t = t[0]), !t.length) return nt(); for (n = t[0], s = 1; s < t.length; ++s) t[s].isValid() && !t[s][e](n) || (n = t[s]); return n }

    function dt(e) {
        var t = x(e),
            a = t.year || 0,
            n = t.quarter || 0,
            s = t.month || 0,
            r = t.week || 0,
            i = t.day || 0,
            d = t.hour || 0,
            o = t.minute || 0,
            _ = t.second || 0,
            u = t.millisecond || 0;
        this._milliseconds = +u + 1e3 * _ + 6e4 * o + 36e5 * d, this._days = +i + 7 * r, this._months = +s + 3 * n + 12 * a, this._data = {}, this._locale = b(), this._bubble()
    }

    function ot(e) { return e instanceof dt }

    function _t(e, t) {
        N(e, 0, 0, function() {
            var e = this.utcOffset(),
                a = "+";
            return e < 0 && (e = -e, a = "-"), a + O(~~(e / 60), 2) + t + O(~~e % 60, 2)
        })
    }
    _t("Z", ":"), _t("ZZ", ""), oe("Z", re), oe("ZZ", re), le(["Z", "ZZ"], function(e, t, a) { a._useUTC = !0, a._tzm = mt(re, e) });
    var ut = /([\+\-]|\d\d)/gi;

    function mt(e, t) {
        var a = (t || "").match(e) || [],
            n = ((a[a.length - 1] || []) + "").match(ut) || ["-", 0, 0],
            s = 60 * n[1] + Y(n[2]);
        return "+" === n[0] ? s : -s
    }

    function lt(e, a) { var s, r; return a._isUTC ? (s = a.clone(), r = (p(e) || n(e) ? +e : +nt(e)) - +s, s._d.setTime(+s._d + r), t.updateOffset(s, !1), s) : nt(e).local() }

    function ht(e) { return 15 * -Math.round(e._d.getTimezoneOffset() / 15) }

    function ct() { return !!this.isValid() && (this._isUTC && 0 === this._offset) }
    t.updateOffset = function() {};
    var Mt = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,
        pt = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;

    function ft(e, t) {
        var a, n, s, i = e,
            d = null;
        return ot(e) ? i = { ms: e._milliseconds, d: e._days, M: e._months } : "number" == typeof e ? (i = {}, t ? i[t] = e : i.milliseconds = e) : (d = Mt.exec(e)) ? (a = "-" === d[1] ? -1 : 1, i = { y: 0, d: Y(d[fe]) * a, h: Y(d[Ye]) * a, m: Y(d[Le]) * a, s: Y(d[ye]) * a, ms: Y(d[De]) * a }) : (d = pt.exec(e)) ? (a = "-" === d[1] ? -1 : 1, i = { y: Yt(d[2], a), M: Yt(d[3], a), d: Yt(d[4], a), h: Yt(d[5], a), m: Yt(d[6], a), s: Yt(d[7], a), w: Yt(d[8], a) }) : null == i ? i = {} : "object" == typeof i && ("from" in i || "to" in i) && (s = function(e, t) {
            var a;
            if (!e.isValid() || !t.isValid()) return { milliseconds: 0, months: 0 };
            t = lt(t, e), e.isBefore(t) ? a = Lt(e, t) : ((a = Lt(t, e)).milliseconds = -a.milliseconds, a.months = -a.months);
            return a
        }(nt(i.from), nt(i.to)), (i = {}).ms = s.milliseconds, i.M = s.months), n = new dt(i), ot(e) && r(e, "_locale") && (n._locale = e._locale), n
    }

    function Yt(e, t) { var a = e && parseFloat(e.replace(",", ".")); return (isNaN(a) ? 0 : a) * t }

    function Lt(e, t) { var a = { milliseconds: 0, months: 0 }; return a.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(a.months, "M").isAfter(t) && --a.months, a.milliseconds = +t - +e.clone().add(a.months, "M"), a }

    function yt(e, t) { return function(a, n) { var s; return null === n || isNaN(+n) || (! function(e, t) { Ce[e] || (Fe(t), Ce[e] = !0) }(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."), s = a, a = n, n = s), Dt(this, ft(a = "string" == typeof a ? +a : a, n), e), this } }

    function Dt(e, a, n, s) {
        var r = a._milliseconds,
            i = a._days,
            d = a._months;
        e.isValid() && (s = null == s || s, r && e._d.setTime(+e._d + r * n), i && A(e, "Date", F(e, "Date") + i * n), d && Se(e, F(e, "Month") + d * n), s && t.updateOffset(e, i || d))
    }
    ft.fn = dt.prototype;
    var kt = yt(1, "add"),
        gt = yt(-1, "subtract");

    function wt(e) { var t; return void 0 === e ? this._locale._abbr : (null != (t = b(e)) && (this._locale = t), this) }
    t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    var Tt = Ae("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) { return void 0 === e ? this.localeData() : this.locale(e) });

    function vt() { return this._locale }

    function bt(e, t) { N(0, [e, e.length], 0, t) }

    function St(e, t, a, n, s) {
        var r;
        return null == e ? $e(this, n, s).year : (t > (r = Ke(e, n, s)) && (t = r), function(e, t, a, n, s) {
            var r = Be(e, t, a, n, s),
                i = Ve(r.year, 0, r.dayOfYear);
            return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this
        }.call(this, e, t, a, n, s))
    }
    N(0, ["gg", 2], 0, function() { return this.weekYear() % 100 }), N(0, ["GG", 2], 0, function() { return this.isoWeekYear() % 100 }), bt("gggg", "weekYear"), bt("ggggg", "weekYear"), bt("GGGG", "isoWeekYear"), bt("GGGGG", "isoWeekYear"), H("weekYear", "gg"), H("isoWeekYear", "GG"), oe("G", ne), oe("g", ne), oe("GG", $, q), oe("gg", $, q), oe("GGGG", ee, Z), oe("gggg", ee, Z), oe("GGGGG", te, B), oe("ggggg", te, B), he(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, a, n) { t[n.substr(0, 2)] = Y(e) }), he(["gg", "GG"], function(e, a, n, s) { a[s] = t.parseTwoDigitYear(e) }), N("Q", 0, "Qo", "quarter"), H("quarter", "Q"), oe("Q", U), le("Q", function(e, t) { t[pe] = 3 * (Y(e) - 1) }), N("w", ["ww", 2], "wo", "week"), N("W", ["WW", 2], "Wo", "isoWeek"), H("week", "w"), H("isoWeek", "W"), oe("w", $), oe("ww", $, q), oe("W", $), oe("WW", $, q), he(["w", "ww", "W", "WW"], function(e, t, a, n) { t[n.substr(0, 1)] = Y(e) });
    N("D", ["DD", 2], "Do", "date"), H("date", "D"), oe("D", $), oe("DD", $, q), oe("Do", function(e, t) { return e ? t._ordinalParse : t._ordinalParseLenient }), le(["D", "DD"], fe), le("Do", function(e, t) { t[fe] = Y(e.match($)[0]) });
    var Ht = P("Date", !0);
    N("d", 0, "do", "day"), N("dd", 0, 0, function(e) { return this.localeData().weekdaysMin(this, e) }), N("ddd", 0, 0, function(e) { return this.localeData().weekdaysShort(this, e) }), N("dddd", 0, 0, function(e) { return this.localeData().weekdays(this, e) }), N("e", 0, 0, "weekday"), N("E", 0, 0, "isoWeekday"), H("day", "d"), H("weekday", "e"), H("isoWeekday", "E"), oe("d", $), oe("e", $), oe("E", $), oe("dd", ie), oe("ddd", ie), oe("dddd", ie), he(["dd", "ddd", "dddd"], function(e, t, a, n) {
        var s = a._locale.weekdaysParse(e, n, a._strict);
        null != s ? t.d = s : o(a).invalidWeekday = e
    }), he(["d", "e", "E"], function(e, t, a, n) { t[n] = Y(e) });
    var jt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
    var xt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
    var Wt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");

    function Pt() { return this.hours() % 12 || 12 }

    function Ft(e, t) { N(e, 0, 0, function() { return this.localeData().meridiem(this.hours(), this.minutes(), t) }) }

    function At(e, t) { return t._meridiemParse }
    N("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), H("dayOfYear", "DDD"), oe("DDD", X), oe("DDDD", R), le(["DDD", "DDDD"], function(e, t, a) { a._dayOfYear = Y(e) }), N("H", ["HH", 2], 0, "hour"), N("h", ["hh", 2], 0, Pt), N("hmm", 0, 0, function() { return "" + Pt.apply(this) + O(this.minutes(), 2) }), N("hmmss", 0, 0, function() { return "" + Pt.apply(this) + O(this.minutes(), 2) + O(this.seconds(), 2) }), N("Hmm", 0, 0, function() { return "" + this.hours() + O(this.minutes(), 2) }), N("Hmmss", 0, 0, function() { return "" + this.hours() + O(this.minutes(), 2) + O(this.seconds(), 2) }), Ft("a", !0), Ft("A", !1), H("hour", "h"), oe("a", At), oe("A", At), oe("H", $), oe("h", $), oe("HH", $, q), oe("hh", $, q), oe("hmm", K), oe("hmmss", Q), oe("Hmm", K), oe("Hmmss", Q), le(["H", "HH"], Ye), le(["a", "A"], function(e, t, a) { a._isPm = a._locale.isPM(e), a._meridiem = e }), le(["h", "hh"], function(e, t, a) { t[Ye] = Y(e), o(a).bigHour = !0 }), le("hmm", function(e, t, a) {
        var n = e.length - 2;
        t[Ye] = Y(e.substr(0, n)), t[Le] = Y(e.substr(n)), o(a).bigHour = !0
    }), le("hmmss", function(e, t, a) {
        var n = e.length - 4,
            s = e.length - 2;
        t[Ye] = Y(e.substr(0, n)), t[Le] = Y(e.substr(n, 2)), t[ye] = Y(e.substr(s)), o(a).bigHour = !0
    }), le("Hmm", function(e, t, a) {
        var n = e.length - 2;
        t[Ye] = Y(e.substr(0, n)), t[Le] = Y(e.substr(n))
    }), le("Hmmss", function(e, t, a) {
        var n = e.length - 4,
            s = e.length - 2;
        t[Ye] = Y(e.substr(0, n)), t[Le] = Y(e.substr(n, 2)), t[ye] = Y(e.substr(s))
    });
    var Ct = P("Hours", !0);
    N("m", ["mm", 2], 0, "minute"), H("minute", "m"), oe("m", $), oe("mm", $, q), le(["m", "mm"], Le);
    var Ot = P("Minutes", !1);
    N("s", ["ss", 2], 0, "second"), H("second", "s"), oe("s", $), oe("ss", $, q), le(["s", "ss"], ye);
    var Et, zt = P("Seconds", !1);
    for (N("S", 0, 0, function() { return ~~(this.millisecond() / 100) }), N(0, ["SS", 2], 0, function() { return ~~(this.millisecond() / 10) }), N(0, ["SSS", 3], 0, "millisecond"), N(0, ["SSSS", 4], 0, function() { return 10 * this.millisecond() }), N(0, ["SSSSS", 5], 0, function() { return 100 * this.millisecond() }), N(0, ["SSSSSS", 6], 0, function() { return 1e3 * this.millisecond() }), N(0, ["SSSSSSS", 7], 0, function() { return 1e4 * this.millisecond() }), N(0, ["SSSSSSSS", 8], 0, function() { return 1e5 * this.millisecond() }), N(0, ["SSSSSSSSS", 9], 0, function() { return 1e6 * this.millisecond() }), H("millisecond", "ms"), oe("S", X, U), oe("SS", X, q), oe("SSS", X, R), Et = "SSSS"; Et.length <= 9; Et += "S") oe(Et, ae);

    function Jt(e, t) { t[De] = Y(1e3 * ("0." + e)) }
    for (Et = "S"; Et.length <= 9; Et += "S") le(Et, Jt);
    var It = P("Milliseconds", !1);
    N("z", 0, 0, "zoneAbbr"), N("zz", 0, 0, "zoneName");
    var Nt = M.prototype;
    Nt.add = kt, Nt.calendar = function(e, t) {
        var a = e || nt(),
            n = lt(a, this).startOf("day"),
            s = this.diff(n, "days", !0),
            r = s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse",
            i = t && (W(t[r]) ? t[r]() : t[r]);
        return this.format(i || this.localeData().calendar(r, this, nt(a)))
    }, Nt.clone = function() { return new M(this) }, Nt.diff = function(e, t, a) { var n, s, r, i; return this.isValid() && (n = lt(e, this)).isValid() ? (s = 6e4 * (n.utcOffset() - this.utcOffset()), "year" === (t = j(t)) || "month" === t || "quarter" === t ? (d = this, o = n, m = 12 * (o.year() - d.year()) + (o.month() - d.month()), l = d.clone().add(m, "months"), o - l < 0 ? (_ = d.clone().add(m - 1, "months"), u = (o - l) / (l - _)) : (_ = d.clone().add(m + 1, "months"), u = (o - l) / (_ - l)), i = -(m + u), "quarter" === t ? i /= 3 : "year" === t && (i /= 12)) : (r = this - n, i = "second" === t ? r / 1e3 : "minute" === t ? r / 6e4 : "hour" === t ? r / 36e5 : "day" === t ? (r - s) / 864e5 : "week" === t ? (r - s) / 6048e5 : r), a ? i : f(i)) : NaN; var d, o, _, u, m, l }, Nt.endOf = function(e) { return void 0 === (e = j(e)) || "millisecond" === e ? this : this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms") }, Nt.format = function(e) { var a = G(this, e || t.defaultFormat); return this.localeData().postformat(a) }, Nt.from = function(e, t) { return this.isValid() && (p(e) && e.isValid() || nt(e).isValid()) ? ft({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate() }, Nt.fromNow = function(e) { return this.from(nt(), e) }, Nt.to = function(e, t) { return this.isValid() && (p(e) && e.isValid() || nt(e).isValid()) ? ft({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate() }, Nt.toNow = function(e) { return this.to(nt(), e) }, Nt.get = C, Nt.invalidAt = function() { return o(this).overflow }, Nt.isAfter = function(e, t) { var a = p(e) ? e : nt(e); return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = j(m(t) ? "millisecond" : t)) ? +this > +a : +a < +this.clone().startOf(t)) }, Nt.isBefore = function(e, t) { var a = p(e) ? e : nt(e); return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = j(m(t) ? "millisecond" : t)) ? +this < +a : +this.clone().endOf(t) < +a) }, Nt.isBetween = function(e, t, a) { return this.isAfter(e, a) && this.isBefore(t, a) }, Nt.isSame = function(e, t) { var a, n = p(e) ? e : nt(e); return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = j(t || "millisecond")) ? +this == +n : (a = +n, +this.clone().startOf(t) <= a && a <= +this.clone().endOf(t))) }, Nt.isSameOrAfter = function(e, t) { return this.isSame(e, t) || this.isAfter(e, t) }, Nt.isSameOrBefore = function(e, t) { return this.isSame(e, t) || this.isBefore(e, t) }, Nt.isValid = function() { return _(this) }, Nt.lang = Tt, Nt.locale = wt, Nt.localeData = vt, Nt.max = rt, Nt.min = st, Nt.parsingFlags = function() { return i({}, o(this)) }, Nt.set = C, Nt.startOf = function(e) {
        switch (e = j(e)) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
        }
        return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
    }, Nt.subtract = gt, Nt.toArray = function() { var e = this; return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()] }, Nt.toObject = function() { var e = this; return { years: e.year(), months: e.month(), date: e.date(), hours: e.hours(), minutes: e.minutes(), seconds: e.seconds(), milliseconds: e.milliseconds() } }, Nt.toDate = function() { return this._offset ? new Date(+this) : this._d }, Nt.toISOString = function() { var e = this.clone().utc(); return 0 < e.year() && e.year() <= 9999 ? W(Date.prototype.toISOString) ? this.toDate().toISOString() : G(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : G(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") }, Nt.toJSON = function() { return this.isValid() ? this.toISOString() : "null" }, Nt.toString = function() { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }, Nt.unix = function() { return Math.floor(+this / 1e3) }, Nt.valueOf = function() { return +this._d - 6e4 * (this._offset || 0) }, Nt.creationData = function() { return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict } }, Nt.year = Re, Nt.isLeapYear = function() { return qe(this.year()) }, Nt.weekYear = function(e) { return St.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy) }, Nt.isoWeekYear = function(e) { return St.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4) }, Nt.quarter = Nt.quarters = function(e) { return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3) }, Nt.month = He, Nt.daysInMonth = function() { return we(this.year(), this.month()) }, Nt.week = Nt.weeks = function(e) { var t = this.localeData().week(this); return null == e ? t : this.add(7 * (e - t), "d") }, Nt.isoWeek = Nt.isoWeeks = function(e) { var t = $e(this, 1, 4).week; return null == e ? t : this.add(7 * (e - t), "d") }, Nt.weeksInYear = function() { var e = this.localeData()._week; return Ke(this.year(), e.dow, e.doy) }, Nt.isoWeeksInYear = function() { return Ke(this.year(), 1, 4) }, Nt.date = Ht, Nt.day = Nt.days = function(e) { if (!this.isValid()) return null != e ? this : NaN; var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != e ? (e = function(e, t) { return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10) }(e, this.localeData()), this.add(e - t, "d")) : t }, Nt.weekday = function(e) { if (!this.isValid()) return null != e ? this : NaN; var t = (this.day() + 7 - this.localeData()._week.dow) % 7; return null == e ? t : this.add(e - t, "d") }, Nt.isoWeekday = function(e) { return this.isValid() ? null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7) : null != e ? this : NaN }, Nt.dayOfYear = function(e) { var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1; return null == e ? t : this.add(e - t, "d") }, Nt.hour = Nt.hours = Ct, Nt.minute = Nt.minutes = Ot, Nt.second = Nt.seconds = zt, Nt.millisecond = Nt.milliseconds = It, Nt.utcOffset = function(e, a) { var n, s = this._offset || 0; return this.isValid() ? null != e ? ("string" == typeof e ? e = mt(re, e) : Math.abs(e) < 16 && (e *= 60), !this._isUTC && a && (n = ht(this)), this._offset = e, this._isUTC = !0, null != n && this.add(n, "m"), s !== e && (!a || this._changeInProgress ? Dt(this, ft(e - s, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? s : ht(this) : null != e ? this : NaN }, Nt.utc = function(e) { return this.utcOffset(0, e) }, Nt.local = function(e) { return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(ht(this), "m")), this }, Nt.parseZone = function() { return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(mt(se, this._i)), this }, Nt.hasAlignedHourOffset = function(e) { return !!this.isValid() && (e = e ? nt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0) }, Nt.isDST = function() { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }, Nt.isDSTShifted = function() {
        if (!m(this._isDSTShifted)) return this._isDSTShifted;
        var e = {};
        if (h(e, this), (e = tt(e))._a) {
            var t = e._isUTC ? d(e._a) : nt(e._a);
            this._isDSTShifted = this.isValid() && L(e._a, t.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    }, Nt.isLocal = function() { return !!this.isValid() && !this._isUTC }, Nt.isUtcOffset = function() { return !!this.isValid() && this._isUTC }, Nt.isUtc = ct, Nt.isUTC = ct, Nt.zoneAbbr = function() { return this._isUTC ? "UTC" : "" }, Nt.zoneName = function() { return this._isUTC ? "Coordinated Universal Time" : "" }, Nt.dates = Ae("dates accessor is deprecated. Use date instead.", Ht), Nt.months = Ae("months accessor is deprecated. Use month instead", He), Nt.years = Ae("years accessor is deprecated. Use year instead", Re), Nt.zone = Ae("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", function(e, t) { return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset() });
    var Gt = Nt;

    function Vt(e) { return e }
    var Ut = y.prototype;

    function qt(e, t, a, n) {
        var s = b(),
            r = d().set(n, t);
        return s[a](r, e)
    }

    function Rt(e, t, a, n, s) { if ("number" == typeof e && (t = e, e = void 0), e = e || "", null != t) return qt(e, t, a, s); var r, i = []; for (r = 0; r < n; r++) i[r] = qt(e, r, a, s); return i }
    Ut._calendar = { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, Ut.calendar = function(e, t, a) { var n = this._calendar[e]; return W(n) ? n.call(t, a) : n }, Ut._longDateFormat = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, Ut.longDateFormat = function(e) {
        var t = this._longDateFormat[e],
            a = this._longDateFormat[e.toUpperCase()];
        return t || !a ? t : (this._longDateFormat[e] = a.replace(/MMMM|MM|DD|dddd/g, function(e) { return e.slice(1) }), this._longDateFormat[e])
    }, Ut._invalidDate = "Invalid date", Ut.invalidDate = function() { return this._invalidDate }, Ut._ordinal = "%d", Ut.ordinal = function(e) { return this._ordinal.replace("%d", e) }, Ut._ordinalParse = /\d{1,2}/, Ut.preparse = Vt, Ut.postformat = Vt, Ut._relativeTime = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, Ut.relativeTime = function(e, t, a, n) { var s = this._relativeTime[a]; return W(s) ? s(e, t, a, n) : s.replace(/%d/i, e) }, Ut.pastFuture = function(e, t) { var a = this._relativeTime[e > 0 ? "future" : "past"]; return W(a) ? a(t) : a.replace(/%s/i, t) }, Ut.set = function(e) {
        var t, a;
        for (a in e) W(t = e[a]) ? this[a] = t : this["_" + a] = t;
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }, Ut.months = function(e, t) { return a(this._months) ? this._months[e.month()] : this._months[Te.test(t) ? "format" : "standalone"][e.month()] }, Ut._months = ve, Ut.monthsShort = function(e, t) { return a(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Te.test(t) ? "format" : "standalone"][e.month()] }, Ut._monthsShort = be, Ut.monthsParse = function(e, t, a) { var n, s, r; for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) { if (s = d([2e3, n]), a && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), a || this._monthsParse[n] || (r = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[n] = new RegExp(r.replace(".", ""), "i")), a && "MMMM" === t && this._longMonthsParse[n].test(e)) return n; if (a && "MMM" === t && this._shortMonthsParse[n].test(e)) return n; if (!a && this._monthsParse[n].test(e)) return n } }, Ut._monthsRegex = xe, Ut.monthsRegex = function(e) { return this._monthsParseExact ? (r(this, "_monthsRegex") || We.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex }, Ut._monthsShortRegex = je, Ut.monthsShortRegex = function(e) { return this._monthsParseExact ? (r(this, "_monthsRegex") || We.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex }, Ut.week = function(e) { return $e(e, this._week.dow, this._week.doy).week }, Ut._week = { dow: 0, doy: 6 }, Ut.firstDayOfYear = function() { return this._week.doy }, Ut.firstDayOfWeek = function() { return this._week.dow }, Ut.weekdays = function(e, t) { return a(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] }, Ut._weekdays = jt, Ut.weekdaysMin = function(e) { return this._weekdaysMin[e.day()] }, Ut._weekdaysMin = Wt, Ut.weekdaysShort = function(e) { return this._weekdaysShort[e.day()] }, Ut._weekdaysShort = xt, Ut.weekdaysParse = function(e, t, a) { var n, s, r; for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) { if (s = nt([2e3, 1]).day(n), a && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(s, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[n] || (r = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[n] = new RegExp(r.replace(".", ""), "i")), a && "dddd" === t && this._fullWeekdaysParse[n].test(e)) return n; if (a && "ddd" === t && this._shortWeekdaysParse[n].test(e)) return n; if (a && "dd" === t && this._minWeekdaysParse[n].test(e)) return n; if (!a && this._weekdaysParse[n].test(e)) return n } }, Ut.isPM = function(e) { return "p" === (e + "").toLowerCase().charAt(0) }, Ut._meridiemParse = /[ap]\.?m?\.?/i, Ut.meridiem = function(e, t, a) { return e > 11 ? a ? "pm" : "PM" : a ? "am" : "AM" }, T("en", { ordinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function(e) { var t = e % 10; return e + (1 === Y(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") } }), t.lang = Ae("moment.lang is deprecated. Use moment.locale instead.", T), t.langData = Ae("moment.langData is deprecated. Use moment.localeData instead.", b);
    var Zt = Math.abs;

    function Bt(e, t, a, n) { var s = ft(t, a); return e._milliseconds += n * s._milliseconds, e._days += n * s._days, e._months += n * s._months, e._bubble() }

    function $t(e) { return e < 0 ? Math.floor(e) : Math.ceil(e) }

    function Kt(e) { return 4800 * e / 146097 }

    function Qt(e) { return 146097 * e / 4800 }

    function Xt(e) { return function() { return this.as(e) } }
    var ea = Xt("ms"),
        ta = Xt("s"),
        aa = Xt("m"),
        na = Xt("h"),
        sa = Xt("d"),
        ra = Xt("w"),
        ia = Xt("M"),
        da = Xt("y");

    function oa(e) { return function() { return this._data[e] } }
    var _a = oa("milliseconds"),
        ua = oa("seconds"),
        ma = oa("minutes"),
        la = oa("hours"),
        ha = oa("days"),
        ca = oa("months"),
        Ma = oa("years");
    var pa = Math.round,
        fa = { s: 45, m: 45, h: 22, d: 26, M: 11 };
    var Ya = Math.abs;

    function La() {
        var e, t, a = Ya(this._milliseconds) / 1e3,
            n = Ya(this._days),
            s = Ya(this._months);
        e = f(a / 60), t = f(e / 60), a %= 60, e %= 60;
        var r = f(s / 12),
            i = s %= 12,
            d = n,
            o = t,
            _ = e,
            u = a,
            m = this.asSeconds();
        return m ? (m < 0 ? "-" : "") + "P" + (r ? r + "Y" : "") + (i ? i + "M" : "") + (d ? d + "D" : "") + (o || _ || u ? "T" : "") + (o ? o + "H" : "") + (_ ? _ + "M" : "") + (u ? u + "S" : "") : "P0D"
    }
    var ya = dt.prototype;
    ya.abs = function() { var e = this._data; return this._milliseconds = Zt(this._milliseconds), this._days = Zt(this._days), this._months = Zt(this._months), e.milliseconds = Zt(e.milliseconds), e.seconds = Zt(e.seconds), e.minutes = Zt(e.minutes), e.hours = Zt(e.hours), e.months = Zt(e.months), e.years = Zt(e.years), this }, ya.add = function(e, t) { return Bt(this, e, t, 1) }, ya.subtract = function(e, t) { return Bt(this, e, t, -1) }, ya.as = function(e) {
        var t, a, n = this._milliseconds;
        if ("month" === (e = j(e)) || "year" === e) return t = this._days + n / 864e5, a = this._months + Kt(t), "month" === e ? a : a / 12;
        switch (t = this._days + Math.round(Qt(this._months)), e) {
            case "week":
                return t / 7 + n / 6048e5;
            case "day":
                return t + n / 864e5;
            case "hour":
                return 24 * t + n / 36e5;
            case "minute":
                return 1440 * t + n / 6e4;
            case "second":
                return 86400 * t + n / 1e3;
            case "millisecond":
                return Math.floor(864e5 * t) + n;
            default:
                throw new Error("Unknown unit " + e)
        }
    }, ya.asMilliseconds = ea, ya.asSeconds = ta, ya.asMinutes = aa, ya.asHours = na, ya.asDays = sa, ya.asWeeks = ra, ya.asMonths = ia, ya.asYears = da, ya.valueOf = function() { return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * Y(this._months / 12) }, ya._bubble = function() {
        var e, t, a, n, s, r = this._milliseconds,
            i = this._days,
            d = this._months,
            o = this._data;
        return r >= 0 && i >= 0 && d >= 0 || r <= 0 && i <= 0 && d <= 0 || (r += 864e5 * $t(Qt(d) + i), i = 0, d = 0), o.milliseconds = r % 1e3, e = f(r / 1e3), o.seconds = e % 60, t = f(e / 60), o.minutes = t % 60, a = f(t / 60), o.hours = a % 24, i += f(a / 24), d += s = f(Kt(i)), i -= $t(Qt(s)), n = f(d / 12), d %= 12, o.days = i, o.months = d, o.years = n, this
    }, ya.get = function(e) { return this[(e = j(e)) + "s"]() }, ya.milliseconds = _a, ya.seconds = ua, ya.minutes = ma, ya.hours = la, ya.days = ha, ya.weeks = function() { return f(this.days() / 7) }, ya.months = ca, ya.years = Ma, ya.humanize = function(e) {
        var t = this.localeData(),
            a = function(e, t, a) {
                var n = ft(e).abs(),
                    s = pa(n.as("s")),
                    r = pa(n.as("m")),
                    i = pa(n.as("h")),
                    d = pa(n.as("d")),
                    o = pa(n.as("M")),
                    _ = pa(n.as("y")),
                    u = s < fa.s && ["s", s] || r <= 1 && ["m"] || r < fa.m && ["mm", r] || i <= 1 && ["h"] || i < fa.h && ["hh", i] || d <= 1 && ["d"] || d < fa.d && ["dd", d] || o <= 1 && ["M"] || o < fa.M && ["MM", o] || _ <= 1 && ["y"] || ["yy", _];
                return u[2] = t, u[3] = +e > 0, u[4] = a,
                    function(e, t, a, n, s) { return s.relativeTime(t || 1, !!a, e, n) }.apply(null, u)
            }(this, !e, t);
        return e && (a = t.pastFuture(+this, a)), t.postformat(a)
    }, ya.toISOString = La, ya.toString = La, ya.toJSON = La, ya.locale = wt, ya.localeData = vt, ya.toIsoString = Ae("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", La), ya.lang = Tt, N("X", 0, 0, "unix"), N("x", 0, 0, "valueOf"), oe("x", ne), oe("X", /[+-]?\d+(\.\d{1,3})?/), le("X", function(e, t, a) { a._d = new Date(1e3 * parseFloat(e, 10)) }), le("x", function(e, t, a) { a._d = new Date(Y(e)) }), t.version = "2.11.2", e = nt, t.fn = Gt, t.min = function() { return it("isBefore", [].slice.call(arguments, 0)) }, t.max = function() { return it("isAfter", [].slice.call(arguments, 0)) }, t.now = function() { return Date.now ? Date.now() : +new Date }, t.utc = d, t.unix = function(e) { return nt(1e3 * e) }, t.months = function(e, t) { return Rt(e, t, "months", 12, "month") }, t.isDate = n, t.locale = T, t.invalid = u, t.duration = ft, t.isMoment = p, t.weekdays = function(e, t) { return Rt(e, t, "weekdays", 7, "day") }, t.parseZone = function() { return nt.apply(null, arguments).parseZone() }, t.localeData = b, t.isDuration = ot, t.monthsShort = function(e, t) { return Rt(e, t, "monthsShort", 12, "month") }, t.weekdaysMin = function(e, t) { return Rt(e, t, "weekdaysMin", 7, "day") }, t.defineLocale = v, t.weekdaysShort = function(e, t) { return Rt(e, t, "weekdaysShort", 7, "day") }, t.normalizeUnits = j, t.relativeTimeThreshold = function(e, t) { return void 0 !== fa[e] && (void 0 === t ? fa[e] : (fa[e] = t, !0)) }, t.prototype = Gt;
    var Da = t,
        ka = (Da.defineLocale("af", { months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"), weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"), weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"), weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"), meridiemParse: /vm|nm/i, isPM: function(e) { return /^nm$/i.test(e) }, meridiem: function(e, t, a) { return e < 12 ? a ? "vm" : "VM" : a ? "nm" : "NM" }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Vandag om] LT", nextDay: "[Môre om] LT", nextWeek: "dddd [om] LT", lastDay: "[Gister om] LT", lastWeek: "[Laas] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oor %s", past: "%s gelede", s: "'n paar sekondes", m: "'n minuut", mm: "%d minute", h: "'n uur", hh: "%d ure", d: "'n dag", dd: "%d dae", M: "'n maand", MM: "%d maande", y: "'n jaar", yy: "%d jaar" }, ordinalParse: /\d{1,2}(ste|de)/, ordinal: function(e) { return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } }), Da.defineLocale("ar-ma", { months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 0, doy: 12 } }), { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 0: "0" }),
        ga = { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 0: "0" },
        wa = (Da.defineLocale("ar-sa", { months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /ص|م/, isPM: function(e) { return "م" === e }, meridiem: function(e, t, a) { return e < 12 ? "ص" : "م" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, preparse: function(e) { return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) { return ga[e] }).replace(/،/g, ",") }, postformat: function(e) { return e.replace(/\d/g, function(e) { return ka[e] }).replace(/,/g, "،") }, week: { dow: 0, doy: 12 } }), Da.defineLocale("ar-tn", { months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 1, doy: 4 } }), { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" }),
        Ta = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" },
        va = function(e) { return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5 },
        ba = { s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"], m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"], h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"], d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"], M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"], y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"] },
        Sa = function(e) {
            return function(t, a, n, s) {
                var r = va(t),
                    i = ba[e][va(t)];
                return 2 === r && (i = i[a ? 0 : 1]), i.replace(/%d/i, t)
            }
        },
        Ha = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"],
        ja = (Da.defineLocale("ar", { months: Ha, monthsShort: Ha, weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/‏M/‏YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /ص|م/, isPM: function(e) { return "م" === e }, meridiem: function(e, t, a) { return e < 12 ? "ص" : "م" }, calendar: { sameDay: "[اليوم عند الساعة] LT", nextDay: "[غدًا عند الساعة] LT", nextWeek: "dddd [عند الساعة] LT", lastDay: "[أمس عند الساعة] LT", lastWeek: "dddd [عند الساعة] LT", sameElse: "L" }, relativeTime: { future: "بعد %s", past: "منذ %s", s: Sa("s"), m: Sa("m"), mm: Sa("m"), h: Sa("h"), hh: Sa("h"), d: Sa("d"), dd: Sa("d"), M: Sa("M"), MM: Sa("M"), y: Sa("y"), yy: Sa("y") }, preparse: function(e) { return e.replace(/\u200f/g, "").replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) { return Ta[e] }).replace(/،/g, ",") }, postformat: function(e) { return e.replace(/\d/g, function(e) { return wa[e] }).replace(/,/g, "،") }, week: { dow: 0, doy: 12 } }), { 1: "-inci", 5: "-inci", 8: "-inci", 70: "-inci", 80: "-inci", 2: "-nci", 7: "-nci", 20: "-nci", 50: "-nci", 3: "-üncü", 4: "-üncü", 100: "-üncü", 6: "-ncı", 9: "-uncu", 10: "-uncu", 30: "-uncu", 60: "-ıncı", 90: "-ıncı" });
    Da.defineLocale("az", { months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"), monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"), weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"), weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"), weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[bugün saat] LT", nextDay: "[sabah saat] LT", nextWeek: "[gələn həftə] dddd [saat] LT", lastDay: "[dünən] LT", lastWeek: "[keçən həftə] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s əvvəl", s: "birneçə saniyyə", m: "bir dəqiqə", mm: "%d dəqiqə", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir il", yy: "%d il" }, meridiemParse: /gecə|səhər|gündüz|axşam/, isPM: function(e) { return /^(gündüz|axşam)$/.test(e) }, meridiem: function(e, t, a) { return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam" }, ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/, ordinal: function(e) { if (0 === e) return e + "-ıncı"; var t = e % 10; return e + (ja[t] || ja[e % 100 - t] || ja[e >= 100 ? 100 : null]) }, week: { dow: 1, doy: 7 } });

    function xa(e, t, a) { var n, s; return "m" === a ? t ? "хвіліна" : "хвіліну" : "h" === a ? t ? "гадзіна" : "гадзіну" : e + " " + (n = +e, s = { mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін", hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін", dd: "дзень_дні_дзён", MM: "месяц_месяцы_месяцаў", yy: "год_гады_гадоў" }[a].split("_"), n % 10 == 1 && n % 100 != 11 ? s[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? s[1] : s[2]) }
    Da.defineLocale("be", {
        months: { format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"), standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_") },
        monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
        weekdays: { format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"), standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"), isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/ },
        weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
        weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., HH:mm", LLLL: "dddd, D MMMM YYYY г., HH:mm" },
        calendar: {
            sameDay: "[Сёння ў] LT",
            nextDay: "[Заўтра ў] LT",
            lastDay: "[Учора ў] LT",
            nextWeek: function() { return "[У] dddd [ў] LT" },
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return "[У мінулую] dddd [ў] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[У мінулы] dddd [ў] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: { future: "праз %s", past: "%s таму", s: "некалькі секунд", m: xa, mm: xa, h: xa, hh: xa, d: "дзень", dd: xa, M: "месяц", MM: xa, y: "год", yy: xa },
        meridiemParse: /ночы|раніцы|дня|вечара/,
        isPM: function(e) { return /^(дня|вечара)$/.test(e) },
        meridiem: function(e, t, a) { return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара" },
        ordinalParse: /\d{1,2}-(і|ы|га)/,
        ordinal: function(e, t) {
            switch (t) {
                case "M":
                case "d":
                case "DDD":
                case "w":
                case "W":
                    return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
                case "D":
                    return e + "-га";
                default:
                    return e
            }
        },
        week: { dow: 1, doy: 7 }
    }), Da.defineLocale("bg", {
        months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
        monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
        weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
        weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
        weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" },
        calendar: {
            sameDay: "[Днес в] LT",
            nextDay: "[Утре в] LT",
            nextWeek: "dddd [в] LT",
            lastDay: "[Вчера в] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return "[В изминалата] dddd [в] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[В изминалия] dddd [в] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: { future: "след %s", past: "преди %s", s: "няколко секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дни", M: "месец", MM: "%d месеца", y: "година", yy: "%d години" },
        ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function(e) {
            var t = e % 10,
                a = e % 100;
            return 0 === e ? e + "-ев" : 0 === a ? e + "-ен" : a > 10 && a < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
        },
        week: { dow: 1, doy: 7 }
    });
    var Wa = { 1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০" },
        Pa = { "১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "০": "0" },
        Fa = (Da.defineLocale("bn", { months: "জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"), monthsShort: "জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্".split("_"), weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রবার_শনিবার".split("_"), weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্র_শনি".split("_"), weekdaysMin: "রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি".split("_"), longDateFormat: { LT: "A h:mm সময়", LTS: "A h:mm:ss সময়", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm সময়", LLLL: "dddd, D MMMM YYYY, A h:mm সময়" }, calendar: { sameDay: "[আজ] LT", nextDay: "[আগামীকাল] LT", nextWeek: "dddd, LT", lastDay: "[গতকাল] LT", lastWeek: "[গত] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s পরে", past: "%s আগে", s: "কয়েক সেকেন্ড", m: "এক মিনিট", mm: "%d মিনিট", h: "এক ঘন্টা", hh: "%d ঘন্টা", d: "এক দিন", dd: "%d দিন", M: "এক মাস", MM: "%d মাস", y: "এক বছর", yy: "%d বছর" }, preparse: function(e) { return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function(e) { return Pa[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return Wa[e] }) }, meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/, isPM: function(e) { return /^(দুপুর|বিকাল|রাত)$/.test(e) }, meridiem: function(e, t, a) { return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত" }, week: { dow: 0, doy: 6 } }), { 1: "༡", 2: "༢", 3: "༣", 4: "༤", 5: "༥", 6: "༦", 7: "༧", 8: "༨", 9: "༩", 0: "༠" }),
        Aa = { "༡": "1", "༢": "2", "༣": "3", "༤": "4", "༥": "5", "༦": "6", "༧": "7", "༨": "8", "༩": "9", "༠": "0" };
    Da.defineLocale("bo", { months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"), monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"), weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"), weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[དི་རིང] LT", nextDay: "[སང་ཉིན] LT", nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT", lastDay: "[ཁ་སང] LT", lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s ལ་", past: "%s སྔན་ལ", s: "ལམ་སང", m: "སྐར་མ་གཅིག", mm: "%d སྐར་མ", h: "ཆུ་ཚོད་གཅིག", hh: "%d ཆུ་ཚོད", d: "ཉིན་གཅིག", dd: "%d ཉིན་", M: "ཟླ་བ་གཅིག", MM: "%d ཟླ་བ", y: "ལོ་གཅིག", yy: "%d ལོ" }, preparse: function(e) { return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(e) { return Aa[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return Fa[e] }) }, meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/, isPM: function(e) { return /^(ཉིན་གུང|དགོང་དག|མཚན་མོ)$/.test(e) }, meridiem: function(e, t, a) { return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ" }, week: { dow: 0, doy: 6 } });

    function Ca(e, t, a) { return e + " " + function(e, t) { if (2 === t) return function(e) { var t = { m: "v", b: "v", d: "z" }; if (void 0 === t[e.charAt(0)]) return e; return t[e.charAt(0)] + e.substring(1) }(e); return e }({ mm: "munutenn", MM: "miz", dd: "devezh" }[a], e) }
    Da.defineLocale("br", {
        months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
        monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
        weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
        weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
        weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
        longDateFormat: { LT: "h[e]mm A", LTS: "h[e]mm:ss A", L: "DD/MM/YYYY", LL: "D [a viz] MMMM YYYY", LLL: "D [a viz] MMMM YYYY h[e]mm A", LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A" },
        calendar: { sameDay: "[Hiziv da] LT", nextDay: "[Warc'hoazh da] LT", nextWeek: "dddd [da] LT", lastDay: "[Dec'h da] LT", lastWeek: "dddd [paset da] LT", sameElse: "L" },
        relativeTime: {
            future: "a-benn %s",
            past: "%s 'zo",
            s: "un nebeud segondennoù",
            m: "ur vunutenn",
            mm: Ca,
            h: "un eur",
            hh: "%d eur",
            d: "un devezh",
            dd: Ca,
            M: "ur miz",
            MM: Ca,
            y: "ur bloaz",
            yy: function(e) {
                switch (function e(t) { return t > 9 ? e(t % 10) : t }(e)) {
                    case 1:
                    case 3:
                    case 4:
                    case 5:
                    case 9:
                        return e + " bloaz";
                    default:
                        return e + " vloaz"
                }
            }
        },
        ordinalParse: /\d{1,2}(añ|vet)/,
        ordinal: function(e) { return e + (1 === e ? "añ" : "vet") },
        week: { dow: 1, doy: 4 }
    });

    function Oa(e, t, a) {
        var n = e + " ";
        switch (a) {
            case "m":
                return t ? "jedna minuta" : "jedne minute";
            case "mm":
                return n += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
            case "h":
                return t ? "jedan sat" : "jednog sata";
            case "hh":
                return n += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
            case "dd":
                return n += 1 === e ? "dan" : "dana";
            case "MM":
                return n += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
            case "yy":
                return n += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
        }
    }
    Da.defineLocale("bs", {
        months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                }
            },
            lastDay: "[jučer u] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                    case 3:
                        return "[prošlu] dddd [u] LT";
                    case 6:
                        return "[prošle] [subote] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[prošli] dddd [u] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", m: Oa, mm: Oa, h: Oa, hh: Oa, d: "dan", dd: Oa, M: "mjesec", MM: Oa, y: "godinu", yy: Oa },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 7 }
    }), Da.defineLocale("ca", { months: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"), monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"), weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"), weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"), weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd D MMMM YYYY H:mm" }, calendar: { sameDay: function() { return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, nextDay: function() { return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, nextWeek: function() { return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, lastDay: function() { return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, lastWeek: function() { return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "fa %s", s: "uns segons", m: "un minut", mm: "%d minuts", h: "una hora", hh: "%d hores", d: "un dia", dd: "%d dies", M: "un mes", MM: "%d mesos", y: "un any", yy: "%d anys" }, ordinalParse: /\d{1,2}(r|n|t|è|a)/, ordinal: function(e, t) { var a = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è"; return "w" !== t && "W" !== t || (a = "a"), e + a }, week: { dow: 1, doy: 4 } });
    var Ea = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
        za = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");

    function Ja(e) { return e > 1 && e < 5 && 1 != ~~(e / 10) }

    function Ia(e, t, a, n) {
        var s = e + " ";
        switch (a) {
            case "s":
                return t || n ? "pár sekund" : "pár sekundami";
            case "m":
                return t ? "minuta" : n ? "minutu" : "minutou";
            case "mm":
                return t || n ? s + (Ja(e) ? "minuty" : "minut") : s + "minutami";
            case "h":
                return t ? "hodina" : n ? "hodinu" : "hodinou";
            case "hh":
                return t || n ? s + (Ja(e) ? "hodiny" : "hodin") : s + "hodinami";
            case "d":
                return t || n ? "den" : "dnem";
            case "dd":
                return t || n ? s + (Ja(e) ? "dny" : "dní") : s + "dny";
            case "M":
                return t || n ? "měsíc" : "měsícem";
            case "MM":
                return t || n ? s + (Ja(e) ? "měsíce" : "měsíců") : s + "měsíci";
            case "y":
                return t || n ? "rok" : "rokem";
            case "yy":
                return t || n ? s + (Ja(e) ? "roky" : "let") : s + "lety"
        }
    }
    Da.defineLocale("cs", {
        months: Ea,
        monthsShort: za,
        monthsParse: function(e, t) { var a, n = []; for (a = 0; a < 12; a++) n[a] = new RegExp("^" + e[a] + "$|^" + t[a] + "$", "i"); return n }(Ea, za),
        shortMonthsParse: function(e) { var t, a = []; for (t = 0; t < 12; t++) a[t] = new RegExp("^" + e[t] + "$", "i"); return a }(za),
        longMonthsParse: function(e) { var t, a = []; for (t = 0; t < 12; t++) a[t] = new RegExp("^" + e[t] + "$", "i"); return a }(Ea),
        weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
        weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
        weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
        longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm" },
        calendar: {
            sameDay: "[dnes v] LT",
            nextDay: "[zítra v] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[v neděli v] LT";
                    case 1:
                    case 2:
                        return "[v] dddd [v] LT";
                    case 3:
                        return "[ve středu v] LT";
                    case 4:
                        return "[ve čtvrtek v] LT";
                    case 5:
                        return "[v pátek v] LT";
                    case 6:
                        return "[v sobotu v] LT"
                }
            },
            lastDay: "[včera v] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[minulou neděli v] LT";
                    case 1:
                    case 2:
                        return "[minulé] dddd [v] LT";
                    case 3:
                        return "[minulou středu v] LT";
                    case 4:
                    case 5:
                        return "[minulý] dddd [v] LT";
                    case 6:
                        return "[minulou sobotu v] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: { future: "za %s", past: "před %s", s: Ia, m: Ia, mm: Ia, h: Ia, hh: Ia, d: Ia, dd: Ia, M: Ia, MM: Ia, y: Ia, yy: Ia },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 }
    }), Da.defineLocale("cv", { months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"), monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"), weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"), weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"), weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]", LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm", LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm" }, calendar: { sameDay: "[Паян] LT [сехетре]", nextDay: "[Ыран] LT [сехетре]", lastDay: "[Ӗнер] LT [сехетре]", nextWeek: "[Ҫитес] dddd LT [сехетре]", lastWeek: "[Иртнӗ] dddd LT [сехетре]", sameElse: "L" }, relativeTime: { future: function(e) { return e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран") }, past: "%s каялла", s: "пӗр-ик ҫеккунт", m: "пӗр минут", mm: "%d минут", h: "пӗр сехет", hh: "%d сехет", d: "пӗр кун", dd: "%d кун", M: "пӗр уйӑх", MM: "%d уйӑх", y: "пӗр ҫул", yy: "%d ҫул" }, ordinalParse: /\d{1,2}-мӗш/, ordinal: "%d-мӗш", week: { dow: 1, doy: 7 } }), Da.defineLocale("cy", { months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"), monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"), weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"), weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"), weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Heddiw am] LT", nextDay: "[Yfory am] LT", nextWeek: "dddd [am] LT", lastDay: "[Ddoe am] LT", lastWeek: "dddd [diwethaf am] LT", sameElse: "L" }, relativeTime: { future: "mewn %s", past: "%s yn ôl", s: "ychydig eiliadau", m: "munud", mm: "%d munud", h: "awr", hh: "%d awr", d: "diwrnod", dd: "%d diwrnod", M: "mis", MM: "%d mis", y: "blwyddyn", yy: "%d flynedd" }, ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/, ordinal: function(e) { var t = ""; return e > 20 ? t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (t = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + t }, week: { dow: 1, doy: 4 } }), Da.defineLocale("da", { months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd [d.] D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[I dag kl.] LT", nextDay: "[I morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[I går kl.] LT", lastWeek: "[sidste] dddd [kl] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "få sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en måned", MM: "%d måneder", y: "et år", yy: "%d år" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });

    function Na(e, t, a, n) { var s = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] }; return t ? s[a][0] : s[a][1] }
    Da.defineLocale("de-at", { months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", m: Na, mm: "%d Minuten", h: Na, hh: "%d Stunden", d: Na, dd: Na, M: Na, MM: Na, y: Na, yy: Na }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });

    function Ga(e, t, a, n) { var s = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] }; return t ? s[a][0] : s[a][1] }
    Da.defineLocale("de", { months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", m: Ga, mm: "%d Minuten", h: Ga, hh: "%d Stunden", d: Ga, dd: Ga, M: Ga, MM: Ga, y: Ga, yy: Ga }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    var Va = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
        Ua = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"],
        qa = (Da.defineLocale("dv", { months: Va, monthsShort: Va, weekdays: Ua, weekdaysShort: Ua, weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/M/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /މކ|މފ/, isPM: function(e) { return "" === e }, meridiem: function(e, t, a) { return e < 12 ? "މކ" : "މފ" }, calendar: { sameDay: "[މިއަދު] LT", nextDay: "[މާދަމާ] LT", nextWeek: "dddd LT", lastDay: "[އިއްޔެ] LT", lastWeek: "[ފާއިތުވި] dddd LT", sameElse: "L" }, relativeTime: { future: "ތެރޭގައި %s", past: "ކުރިން %s", s: "ސިކުންތުކޮޅެއް", m: "މިނިޓެއް", mm: "މިނިޓު %d", h: "ގަޑިއިރެއް", hh: "ގަޑިއިރު %d", d: "ދުވަހެއް", dd: "ދުވަސް %d", M: "މަހެއް", MM: "މަސް %d", y: "އަހަރެއް", yy: "އަހަރު %d" }, preparse: function(e) { return e.replace(/،/g, ",") }, postformat: function(e) { return e.replace(/,/g, "،") }, week: { dow: 7, doy: 12 } }), Da.defineLocale("el", {
            monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
            monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
            months: function(e, t) { return /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] },
            monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
            weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
            weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
            weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
            meridiem: function(e, t, a) { return e > 11 ? a ? "μμ" : "ΜΜ" : a ? "πμ" : "ΠΜ" },
            isPM: function(e) { return "μ" === (e + "").toLowerCase()[0] },
            meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
            longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" },
            calendarEl: {
                sameDay: "[Σήμερα {}] LT",
                nextDay: "[Αύριο {}] LT",
                nextWeek: "dddd [{}] LT",
                lastDay: "[Χθες {}] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 6:
                            return "[το προηγούμενο] dddd [{}] LT";
                        default:
                            return "[την προηγούμενη] dddd [{}] LT"
                    }
                },
                sameElse: "L"
            },
            calendar: function(e, t) {
                var a = this._calendarEl[e],
                    n = t && t.hours();
                return W(a) && (a = a.apply(t)), a.replace("{}", n % 12 == 1 ? "στη" : "στις")
            },
            relativeTime: { future: "σε %s", past: "%s πριν", s: "λίγα δευτερόλεπτα", m: "ένα λεπτό", mm: "%d λεπτά", h: "μία ώρα", hh: "%d ώρες", d: "μία μέρα", dd: "%d μέρες", M: "ένας μήνας", MM: "%d μήνες", y: "ένας χρόνος", yy: "%d χρόνια" },
            ordinalParse: /\d{1,2}η/,
            ordinal: "%dη",
            week: { dow: 1, doy: 4 }
        }), Da.defineLocale("en-au", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, ordinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") }, week: { dow: 1, doy: 4 } }), Da.defineLocale("en-ca", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "YYYY-MM-DD", LL: "D MMMM, YYYY", LLL: "D MMMM, YYYY h:mm A", LLLL: "dddd, D MMMM, YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, ordinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") } }), Da.defineLocale("en-gb", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, ordinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") }, week: { dow: 1, doy: 4 } }), Da.defineLocale("en-ie", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, ordinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") }, week: { dow: 1, doy: 4 } }), Da.defineLocale("en-nz", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, ordinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") }, week: { dow: 1, doy: 4 } }), Da.defineLocale("eo", { months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"), weekdays: "Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"), weekdaysShort: "Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D[-an de] MMMM, YYYY", LLL: "D[-an de] MMMM, YYYY HH:mm", LLLL: "dddd, [la] D[-an de] MMMM, YYYY HH:mm" }, meridiemParse: /[ap]\.t\.m/i, isPM: function(e) { return "p" === e.charAt(0).toLowerCase() }, meridiem: function(e, t, a) { return e > 11 ? a ? "p.t.m." : "P.T.M." : a ? "a.t.m." : "A.T.M." }, calendar: { sameDay: "[Hodiaŭ je] LT", nextDay: "[Morgaŭ je] LT", nextWeek: "dddd [je] LT", lastDay: "[Hieraŭ je] LT", lastWeek: "[pasinta] dddd [je] LT", sameElse: "L" }, relativeTime: { future: "je %s", past: "antaŭ %s", s: "sekundoj", m: "minuto", mm: "%d minutoj", h: "horo", hh: "%d horoj", d: "tago", dd: "%d tagoj", M: "monato", MM: "%d monatoj", y: "jaro", yy: "%d jaroj" }, ordinalParse: /\d{1,2}a/, ordinal: "%da", week: { dow: 1, doy: 7 } }), "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")),
        Ra = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
    Da.defineLocale("es", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function(e, t) { return /-MMM-/.test(t) ? Ra[e.month()] : qa[e.month()] }, weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, calendar: { sameDay: function() { return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextDay: function() { return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextWeek: function() { return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastDay: function() { return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastWeek: function() { return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } });

    function Za(e, t, a, n) { var s = { s: ["mõne sekundi", "mõni sekund", "paar sekundit"], m: ["ühe minuti", "üks minut"], mm: [e + " minuti", e + " minutit"], h: ["ühe tunni", "tund aega", "üks tund"], hh: [e + " tunni", e + " tundi"], d: ["ühe päeva", "üks päev"], M: ["kuu aja", "kuu aega", "üks kuu"], MM: [e + " kuu", e + " kuud"], y: ["ühe aasta", "aasta", "üks aasta"], yy: [e + " aasta", e + " aastat"] }; return t ? s[a][2] ? s[a][2] : s[a][1] : n ? s[a][0] : s[a][1] }
    Da.defineLocale("et", { months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"), monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"), weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"), weekdaysShort: "P_E_T_K_N_R_L".split("_"), weekdaysMin: "P_E_T_K_N_R_L".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[Täna,] LT", nextDay: "[Homme,] LT", nextWeek: "[Järgmine] dddd LT", lastDay: "[Eile,] LT", lastWeek: "[Eelmine] dddd LT", sameElse: "L" }, relativeTime: { future: "%s pärast", past: "%s tagasi", s: Za, m: Za, mm: Za, h: Za, hh: Za, d: Za, dd: "%d päeva", M: Za, MM: Za, y: Za, yy: Za }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), Da.defineLocale("eu", { months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"), monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"), weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"), weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"), weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY[ko] MMMM[ren] D[a]", LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm", LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm", l: "YYYY-M-D", ll: "YYYY[ko] MMM D[a]", lll: "YYYY[ko] MMM D[a] HH:mm", llll: "ddd, YYYY[ko] MMM D[a] HH:mm" }, calendar: { sameDay: "[gaur] LT[etan]", nextDay: "[bihar] LT[etan]", nextWeek: "dddd LT[etan]", lastDay: "[atzo] LT[etan]", lastWeek: "[aurreko] dddd LT[etan]", sameElse: "L" }, relativeTime: { future: "%s barru", past: "duela %s", s: "segundo batzuk", m: "minutu bat", mm: "%d minutu", h: "ordu bat", hh: "%d ordu", d: "egun bat", dd: "%d egun", M: "hilabete bat", MM: "%d hilabete", y: "urte bat", yy: "%d urte" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } });
    var Ba = { 1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 8: "۸", 9: "۹", 0: "۰" },
        $a = { "۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9", "۰": "0" },
        Ka = (Da.defineLocale("fa", { months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"), monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"), weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"), weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"), weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /قبل از ظهر|بعد از ظهر/, isPM: function(e) { return /بعد از ظهر/.test(e) }, meridiem: function(e, t, a) { return e < 12 ? "قبل از ظهر" : "بعد از ظهر" }, calendar: { sameDay: "[امروز ساعت] LT", nextDay: "[فردا ساعت] LT", nextWeek: "dddd [ساعت] LT", lastDay: "[دیروز ساعت] LT", lastWeek: "dddd [پیش] [ساعت] LT", sameElse: "L" }, relativeTime: { future: "در %s", past: "%s پیش", s: "چندین ثانیه", m: "یک دقیقه", mm: "%d دقیقه", h: "یک ساعت", hh: "%d ساعت", d: "یک روز", dd: "%d روز", M: "یک ماه", MM: "%d ماه", y: "یک سال", yy: "%d سال" }, preparse: function(e) { return e.replace(/[۰-۹]/g, function(e) { return $a[e] }).replace(/،/g, ",") }, postformat: function(e) { return e.replace(/\d/g, function(e) { return Ba[e] }).replace(/,/g, "،") }, ordinalParse: /\d{1,2}م/, ordinal: "%dم", week: { dow: 6, doy: 12 } }), "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" ")),
        Qa = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", Ka[7], Ka[8], Ka[9]];

    function Xa(e, t, a, n) {
        var s = "";
        switch (a) {
            case "s":
                return n ? "muutaman sekunnin" : "muutama sekunti";
            case "m":
                return n ? "minuutin" : "minuutti";
            case "mm":
                s = n ? "minuutin" : "minuuttia";
                break;
            case "h":
                return n ? "tunnin" : "tunti";
            case "hh":
                s = n ? "tunnin" : "tuntia";
                break;
            case "d":
                return n ? "päivän" : "päivä";
            case "dd":
                s = n ? "päivän" : "päivää";
                break;
            case "M":
                return n ? "kuukauden" : "kuukausi";
            case "MM":
                s = n ? "kuukauden" : "kuukautta";
                break;
            case "y":
                return n ? "vuoden" : "vuosi";
            case "yy":
                s = n ? "vuoden" : "vuotta"
        }
        return s = function(e, t) { return e < 10 ? t ? Qa[e] : Ka[e] : e }(e, n) + " " + s
    }
    Da.defineLocale("fi", { months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"), monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"), weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"), weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"), weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "Do MMMM[ta] YYYY", LLL: "Do MMMM[ta] YYYY, [klo] HH.mm", LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm", l: "D.M.YYYY", ll: "Do MMM YYYY", lll: "Do MMM YYYY, [klo] HH.mm", llll: "ddd, Do MMM YYYY, [klo] HH.mm" }, calendar: { sameDay: "[tänään] [klo] LT", nextDay: "[huomenna] [klo] LT", nextWeek: "dddd [klo] LT", lastDay: "[eilen] [klo] LT", lastWeek: "[viime] dddd[na] [klo] LT", sameElse: "L" }, relativeTime: { future: "%s päästä", past: "%s sitten", s: Xa, m: Xa, mm: Xa, h: Xa, hh: Xa, d: Xa, dd: Xa, M: Xa, MM: Xa, y: Xa, yy: Xa }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), Da.defineLocale("fo", { months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"), weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"), weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D. MMMM, YYYY HH:mm" }, calendar: { sameDay: "[Í dag kl.] LT", nextDay: "[Í morgin kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[Í gjár kl.] LT", lastWeek: "[síðstu] dddd [kl] LT", sameElse: "L" }, relativeTime: { future: "um %s", past: "%s síðani", s: "fá sekund", m: "ein minutt", mm: "%d minuttir", h: "ein tími", hh: "%d tímar", d: "ein dagur", dd: "%d dagar", M: "ein mánaði", MM: "%d mánaðir", y: "eitt ár", yy: "%d ár" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), Da.defineLocale("fr-ca", { months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd'hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, ordinalParse: /\d{1,2}(er|e)/, ordinal: function(e) { return e + (1 === e ? "er" : "e") } }), Da.defineLocale("fr-ch", { months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd'hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, ordinalParse: /\d{1,2}(er|e)/, ordinal: function(e) { return e + (1 === e ? "er" : "e") }, week: { dow: 1, doy: 4 } }), Da.defineLocale("fr", { months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd'hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, ordinalParse: /\d{1,2}(er|)/, ordinal: function(e) { return e + (1 === e ? "er" : "") }, week: { dow: 1, doy: 4 } });
    var en = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
        tn = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
        an = (Da.defineLocale("fy", { months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"), monthsShort: function(e, t) { return /-MMM-/.test(t) ? tn[e.month()] : en[e.month()] }, weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"), weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"), weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[hjoed om] LT", nextDay: "[moarn om] LT", nextWeek: "dddd [om] LT", lastDay: "[juster om] LT", lastWeek: "[ôfrûne] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oer %s", past: "%s lyn", s: "in pear sekonden", m: "ien minút", mm: "%d minuten", h: "ien oere", hh: "%d oeren", d: "ien dei", dd: "%d dagen", M: "ien moanne", MM: "%d moannen", y: "ien jier", yy: "%d jierren" }, ordinalParse: /\d{1,2}(ste|de)/, ordinal: function(e) { return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } }), Da.defineLocale("gd", { months: ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"], monthsShort: ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"], monthsParseExact: !0, weekdays: ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"], weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"], weekdaysMin: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"], longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[An-diugh aig] LT", nextDay: "[A-màireach aig] LT", nextWeek: "dddd [aig] LT", lastDay: "[An-dè aig] LT", lastWeek: "dddd [seo chaidh] [aig] LT", sameElse: "L" }, relativeTime: { future: "ann an %s", past: "bho chionn %s", s: "beagan diogan", m: "mionaid", mm: "%d mionaidean", h: "uair", hh: "%d uairean", d: "latha", dd: "%d latha", M: "mìos", MM: "%d mìosan", y: "bliadhna", yy: "%d bliadhna" }, ordinalParse: /\d{1,2}(d|na|mh)/, ordinal: function(e) { return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh") }, week: { dow: 1, doy: 4 } }), Da.defineLocale("gl", { months: "Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"), monthsShort: "Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"), weekdays: "Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"), weekdaysShort: "Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"), weekdaysMin: "Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd D MMMM YYYY H:mm" }, calendar: { sameDay: function() { return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT" }, nextDay: function() { return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT" }, nextWeek: function() { return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT" }, lastDay: function() { return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT" }, lastWeek: function() { return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT" }, sameElse: "L" }, relativeTime: { future: function(e) { return "uns segundos" === e ? "nuns segundos" : "en " + e }, past: "hai %s", s: "uns segundos", m: "un minuto", mm: "%d minutos", h: "unha hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un ano", yy: "%d anos" }, ordinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 7 } }), Da.defineLocale("he", { months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"), monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"), weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"), weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"), weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [ב]MMMM YYYY", LLL: "D [ב]MMMM YYYY HH:mm", LLLL: "dddd, D [ב]MMMM YYYY HH:mm", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[היום ב־]LT", nextDay: "[מחר ב־]LT", nextWeek: "dddd [בשעה] LT", lastDay: "[אתמול ב־]LT", lastWeek: "[ביום] dddd [האחרון בשעה] LT", sameElse: "L" }, relativeTime: { future: "בעוד %s", past: "לפני %s", s: "מספר שניות", m: "דקה", mm: "%d דקות", h: "שעה", hh: function(e) { return 2 === e ? "שעתיים" : e + " שעות" }, d: "יום", dd: function(e) { return 2 === e ? "יומיים" : e + " ימים" }, M: "חודש", MM: function(e) { return 2 === e ? "חודשיים" : e + " חודשים" }, y: "שנה", yy: function(e) { return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים" } } }), { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" }),
        nn = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };
    Da.defineLocale("hi", { months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"), monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"), weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), longDateFormat: { LT: "A h:mm बजे", LTS: "A h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm बजे", LLLL: "dddd, D MMMM YYYY, A h:mm बजे" }, calendar: { sameDay: "[आज] LT", nextDay: "[कल] LT", nextWeek: "dddd, LT", lastDay: "[कल] LT", lastWeek: "[पिछले] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s में", past: "%s पहले", s: "कुछ ही क्षण", m: "एक मिनट", mm: "%d मिनट", h: "एक घंटा", hh: "%d घंटे", d: "एक दिन", dd: "%d दिन", M: "एक महीने", MM: "%d महीने", y: "एक वर्ष", yy: "%d वर्ष" }, preparse: function(e) { return e.replace(/[१२३४५६७८९०]/g, function(e) { return nn[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return an[e] }) }, meridiemParse: /रात|सुबह|दोपहर|शाम/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0 }, meridiem: function(e, t, a) { return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात" }, week: { dow: 0, doy: 6 } });

    function sn(e, t, a) {
        var n = e + " ";
        switch (a) {
            case "m":
                return t ? "jedna minuta" : "jedne minute";
            case "mm":
                return n += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
            case "h":
                return t ? "jedan sat" : "jednog sata";
            case "hh":
                return n += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
            case "dd":
                return n += 1 === e ? "dan" : "dana";
            case "MM":
                return n += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
            case "yy":
                return n += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
        }
    }
    Da.defineLocale("hr", {
        months: { format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"), standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_") },
        monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                }
            },
            lastDay: "[jučer u] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                    case 3:
                        return "[prošlu] dddd [u] LT";
                    case 6:
                        return "[prošle] [subote] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[prošli] dddd [u] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", m: sn, mm: sn, h: sn, hh: sn, d: "dan", dd: sn, M: "mjesec", MM: sn, y: "godinu", yy: sn },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 7 }
    });
    var rn = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");

    function dn(e, t, a, n) {
        var s = e;
        switch (a) {
            case "s":
                return n || t ? "néhány másodperc" : "néhány másodperce";
            case "m":
                return "egy" + (n || t ? " perc" : " perce");
            case "mm":
                return s + (n || t ? " perc" : " perce");
            case "h":
                return "egy" + (n || t ? " óra" : " órája");
            case "hh":
                return s + (n || t ? " óra" : " órája");
            case "d":
                return "egy" + (n || t ? " nap" : " napja");
            case "dd":
                return s + (n || t ? " nap" : " napja");
            case "M":
                return "egy" + (n || t ? " hónap" : " hónapja");
            case "MM":
                return s + (n || t ? " hónap" : " hónapja");
            case "y":
                return "egy" + (n || t ? " év" : " éve");
            case "yy":
                return s + (n || t ? " év" : " éve")
        }
        return ""
    }

    function on(e) { return (e ? "" : "[múlt] ") + "[" + rn[this.day()] + "] LT[-kor]" }
    Da.defineLocale("hu", { months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"), monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"), weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"), weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D. H:mm", LLLL: "YYYY. MMMM D., dddd H:mm" }, meridiemParse: /de|du/i, isPM: function(e) { return "u" === e.charAt(1).toLowerCase() }, meridiem: function(e, t, a) { return e < 12 ? !0 === a ? "de" : "DE" : !0 === a ? "du" : "DU" }, calendar: { sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function() { return on.call(this, !0) }, lastDay: "[tegnap] LT[-kor]", lastWeek: function() { return on.call(this, !1) }, sameElse: "L" }, relativeTime: { future: "%s múlva", past: "%s", s: dn, m: dn, mm: dn, h: dn, hh: dn, d: dn, dd: dn, M: dn, MM: dn, y: dn, yy: dn }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }), Da.defineLocale("hy-am", {
        months: { format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"), standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_") },
        monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
        weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
        weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
        weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY թ.", LLL: "D MMMM YYYY թ., HH:mm", LLLL: "dddd, D MMMM YYYY թ., HH:mm" },
        calendar: { sameDay: "[այսօր] LT", nextDay: "[վաղը] LT", lastDay: "[երեկ] LT", nextWeek: function() { return "dddd [օրը ժամը] LT" }, lastWeek: function() { return "[անցած] dddd [օրը ժամը] LT" }, sameElse: "L" },
        relativeTime: { future: "%s հետո", past: "%s առաջ", s: "մի քանի վայրկյան", m: "րոպե", mm: "%d րոպե", h: "ժամ", hh: "%d ժամ", d: "օր", dd: "%d օր", M: "ամիս", MM: "%d ամիս", y: "տարի", yy: "%d տարի" },
        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
        isPM: function(e) { return /^(ցերեկվա|երեկոյան)$/.test(e) },
        meridiem: function(e) { return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան" },
        ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
        ordinal: function(e, t) {
            switch (t) {
                case "DDD":
                case "w":
                case "W":
                case "DDDo":
                    return 1 === e ? e + "-ին" : e + "-րդ";
                default:
                    return e
            }
        },
        week: { dow: 1, doy: 7 }
    }), Da.defineLocale("id", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"), weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"), weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|siang|sore|malam/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0 }, meridiem: function(e, t, a) { return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Besok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kemarin pukul] LT", lastWeek: "dddd [lalu pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lalu", s: "beberapa detik", m: "semenit", mm: "%d menit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } });

    function _n(e) { return e % 100 == 11 || e % 10 != 1 }

    function un(e, t, a, n) {
        var s = e + " ";
        switch (a) {
            case "s":
                return t || n ? "nokkrar sekúndur" : "nokkrum sekúndum";
            case "m":
                return t ? "mínúta" : "mínútu";
            case "mm":
                return _n(e) ? s + (t || n ? "mínútur" : "mínútum") : t ? s + "mínúta" : s + "mínútu";
            case "hh":
                return _n(e) ? s + (t || n ? "klukkustundir" : "klukkustundum") : s + "klukkustund";
            case "d":
                return t ? "dagur" : n ? "dag" : "degi";
            case "dd":
                return _n(e) ? t ? s + "dagar" : s + (n ? "daga" : "dögum") : t ? s + "dagur" : s + (n ? "dag" : "degi");
            case "M":
                return t ? "mánuður" : n ? "mánuð" : "mánuði";
            case "MM":
                return _n(e) ? t ? s + "mánuðir" : s + (n ? "mánuði" : "mánuðum") : t ? s + "mánuður" : s + (n ? "mánuð" : "mánuði");
            case "y":
                return t || n ? "ár" : "ári";
            case "yy":
                return _n(e) ? s + (t || n ? "ár" : "árum") : s + (t || n ? "ár" : "ári")
        }
    }
    Da.defineLocale("is", { months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"), monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"), weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"), weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"), weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd, D. MMMM YYYY [kl.] H:mm" }, calendar: { sameDay: "[í dag kl.] LT", nextDay: "[á morgun kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[í gær kl.] LT", lastWeek: "[síðasta] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "eftir %s", past: "fyrir %s síðan", s: un, m: un, mm: un, h: "klukkustund", hh: un, d: un, dd: un, M: un, MM: un, y: un, yy: un }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), Da.defineLocale("it", {
        months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
        monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
        weekdays: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
        weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
        weekdaysMin: "Do_Lu_Ma_Me_Gi_Ve_Sa".split("_"),
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
        calendar: {
            sameDay: "[Oggi alle] LT",
            nextDay: "[Domani alle] LT",
            nextWeek: "dddd [alle] LT",
            lastDay: "[Ieri alle] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[la scorsa] dddd [alle] LT";
                    default:
                        return "[lo scorso] dddd [alle] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: { future: function(e) { return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e }, past: "%s fa", s: "alcuni secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" },
        ordinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: { dow: 1, doy: 4 }
    }), Da.defineLocale("ja", { months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"), weekdaysShort: "日_月_火_水_木_金_土".split("_"), weekdaysMin: "日_月_火_水_木_金_土".split("_"), longDateFormat: { LT: "Ah時m分", LTS: "Ah時m分s秒", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日Ah時m分", LLLL: "YYYY年M月D日Ah時m分 dddd" }, meridiemParse: /午前|午後/i, isPM: function(e) { return "午後" === e }, meridiem: function(e, t, a) { return e < 12 ? "午前" : "午後" }, calendar: { sameDay: "[今日] LT", nextDay: "[明日] LT", nextWeek: "[来週]dddd LT", lastDay: "[昨日] LT", lastWeek: "[前週]dddd LT", sameElse: "L" }, relativeTime: { future: "%s後", past: "%s前", s: "数秒", m: "1分", mm: "%d分", h: "1時間", hh: "%d時間", d: "1日", dd: "%d日", M: "1ヶ月", MM: "%dヶ月", y: "1年", yy: "%d年" } }), Da.defineLocale("jv", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"), weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"), weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /enjing|siyang|sonten|ndalu/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0 }, meridiem: function(e, t, a) { return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu" }, calendar: { sameDay: "[Dinten puniko pukul] LT", nextDay: "[Mbenjang pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kala wingi pukul] LT", lastWeek: "dddd [kepengker pukul] LT", sameElse: "L" }, relativeTime: { future: "wonten ing %s", past: "%s ingkang kepengker", s: "sawetawis detik", m: "setunggal menit", mm: "%d menit", h: "setunggal jam", hh: "%d jam", d: "sedinten", dd: "%d dinten", M: "sewulan", MM: "%d wulan", y: "setaun", yy: "%d taun" }, week: { dow: 1, doy: 7 } }), Da.defineLocale("ka", { months: { standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"), format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_") }, monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"), weekdays: { standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"), format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"), isFormat: /(წინა|შემდეგ)/ }, weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"), weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[დღეს] LT[-ზე]", nextDay: "[ხვალ] LT[-ზე]", lastDay: "[გუშინ] LT[-ზე]", nextWeek: "[შემდეგ] dddd LT[-ზე]", lastWeek: "[წინა] dddd LT-ზე", sameElse: "L" }, relativeTime: { future: function(e) { return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში" }, past: function(e) { return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : void 0 }, s: "რამდენიმე წამი", m: "წუთი", mm: "%d წუთი", h: "საათი", hh: "%d საათი", d: "დღე", dd: "%d დღე", M: "თვე", MM: "%d თვე", y: "წელი", yy: "%d წელი" }, ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/, ordinal: function(e) { return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე" }, week: { dow: 1, doy: 7 } });
    var mn = { 0: "-ші", 1: "-ші", 2: "-ші", 3: "-ші", 4: "-ші", 5: "-ші", 6: "-шы", 7: "-ші", 8: "-ші", 9: "-шы", 10: "-шы", 20: "-шы", 30: "-шы", 40: "-шы", 50: "-ші", 60: "-шы", 70: "-ші", 80: "-ші", 90: "-шы", 100: "-ші" };
    Da.defineLocale("kk", { months: "Қаңтар_Ақпан_Наурыз_Сәуір_Мамыр_Маусым_Шілде_Тамыз_Қыркүйек_Қазан_Қараша_Желтоқсан".split("_"), monthsShort: "Қаң_Ақп_Нау_Сәу_Мам_Мау_Шіл_Там_Қыр_Қаз_Қар_Жел".split("_"), weekdays: "Жексенбі_Дүйсенбі_Сейсенбі_Сәрсенбі_Бейсенбі_Жұма_Сенбі".split("_"), weekdaysShort: "Жек_Дүй_Сей_Сәр_Бей_Жұм_Сен".split("_"), weekdaysMin: "Жк_Дй_Сй_Ср_Бй_Жм_Сн".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Бүгін сағат] LT", nextDay: "[Ертең сағат] LT", nextWeek: "dddd [сағат] LT", lastDay: "[Кеше сағат] LT", lastWeek: "[Өткен аптаның] dddd [сағат] LT", sameElse: "L" }, relativeTime: { future: "%s ішінде", past: "%s бұрын", s: "бірнеше секунд", m: "бір минут", mm: "%d минут", h: "бір сағат", hh: "%d сағат", d: "бір күн", dd: "%d күн", M: "бір ай", MM: "%d ай", y: "бір жыл", yy: "%d жыл" }, ordinalParse: /\d{1,2}-(ші|шы)/, ordinal: function(e) { return e + (mn[e] || mn[e % 10] || mn[e >= 100 ? 100 : null]) }, week: { dow: 1, doy: 7 } }), Da.defineLocale("km", { months: "មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"), monthsShort: "មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"), weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"), weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"), weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[ថ្ងៃនេះ ម៉ោង] LT", nextDay: "[ស្អែក ម៉ោង] LT", nextWeek: "dddd [ម៉ោង] LT", lastDay: "[ម្សិលមិញ ម៉ោង] LT", lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT", sameElse: "L" }, relativeTime: { future: "%sទៀត", past: "%sមុន", s: "ប៉ុន្មានវិនាទី", m: "មួយនាទី", mm: "%d នាទី", h: "មួយម៉ោង", hh: "%d ម៉ោង", d: "មួយថ្ងៃ", dd: "%d ថ្ងៃ", M: "មួយខែ", MM: "%d ខែ", y: "មួយឆ្នាំ", yy: "%d ឆ្នាំ" }, week: { dow: 1, doy: 4 } }), Da.defineLocale("ko", { months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"), weekdaysShort: "일_월_화_수_목_금_토".split("_"), weekdaysMin: "일_월_화_수_목_금_토".split("_"), longDateFormat: { LT: "A h시 m분", LTS: "A h시 m분 s초", L: "YYYY.MM.DD", LL: "YYYY년 MMMM D일", LLL: "YYYY년 MMMM D일 A h시 m분", LLLL: "YYYY년 MMMM D일 dddd A h시 m분" }, calendar: { sameDay: "오늘 LT", nextDay: "내일 LT", nextWeek: "dddd LT", lastDay: "어제 LT", lastWeek: "지난주 dddd LT", sameElse: "L" }, relativeTime: { future: "%s 후", past: "%s 전", s: "몇초", ss: "%d초", m: "일분", mm: "%d분", h: "한시간", hh: "%d시간", d: "하루", dd: "%d일", M: "한달", MM: "%d달", y: "일년", yy: "%d년" }, ordinalParse: /\d{1,2}일/, ordinal: "%d일", meridiemParse: /오전|오후/, isPM: function(e) { return "오후" === e }, meridiem: function(e, t, a) { return e < 12 ? "오전" : "오후" } });

    function ln(e, t, a, n) { var s = { m: ["eng Minutt", "enger Minutt"], h: ["eng Stonn", "enger Stonn"], d: ["een Dag", "engem Dag"], M: ["ee Mount", "engem Mount"], y: ["ee Joer", "engem Joer"] }; return t ? s[a][0] : s[a][1] }

    function hn(e) { if (e = parseInt(e, 10), isNaN(e)) return !1; if (e < 0) return !0; if (e < 10) return 4 <= e && e <= 7; if (e < 100) { var t = e % 10; return hn(0 === t ? e / 10 : t) } if (e < 1e4) { for (; e >= 10;) e /= 10; return hn(e) } return hn(e /= 1e3) }
    Da.defineLocale("lb", {
        months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
        weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
        weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
        longDateFormat: { LT: "H:mm [Auer]", LTS: "H:mm:ss [Auer]", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm [Auer]", LLLL: "dddd, D. MMMM YYYY H:mm [Auer]" },
        calendar: {
            sameDay: "[Haut um] LT",
            sameElse: "L",
            nextDay: "[Muer um] LT",
            nextWeek: "dddd [um] LT",
            lastDay: "[Gëschter um] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 2:
                    case 4:
                        return "[Leschten] dddd [um] LT";
                    default:
                        return "[Leschte] dddd [um] LT"
                }
            }
        },
        relativeTime: { future: function(e) { return hn(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e }, past: function(e) { return hn(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e }, s: "e puer Sekonnen", m: ln, mm: "%d Minutten", h: ln, hh: "%d Stonnen", d: ln, dd: "%d Deeg", M: ln, MM: "%d Méint", y: ln, yy: "%d Joer" },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 }
    }), Da.defineLocale("lo", { months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"), monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"), weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"), weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"), weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "ວັນdddd D MMMM YYYY HH:mm" }, meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/, isPM: function(e) { return "ຕອນແລງ" === e }, meridiem: function(e, t, a) { return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ" }, calendar: { sameDay: "[ມື້ນີ້ເວລາ] LT", nextDay: "[ມື້ອື່ນເວລາ] LT", nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT", lastDay: "[ມື້ວານນີ້ເວລາ] LT", lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT", sameElse: "L" }, relativeTime: { future: "ອີກ %s", past: "%sຜ່ານມາ", s: "ບໍ່ເທົ່າໃດວິນາທີ", m: "1 ນາທີ", mm: "%d ນາທີ", h: "1 ຊົ່ວໂມງ", hh: "%d ຊົ່ວໂມງ", d: "1 ມື້", dd: "%d ມື້", M: "1 ເດືອນ", MM: "%d ເດືອນ", y: "1 ປີ", yy: "%d ປີ" }, ordinalParse: /(ທີ່)\d{1,2}/, ordinal: function(e) { return "ທີ່" + e } });
    var cn = { m: "minutė_minutės_minutę", mm: "minutės_minučių_minutes", h: "valanda_valandos_valandą", hh: "valandos_valandų_valandas", d: "diena_dienos_dieną", dd: "dienos_dienų_dienas", M: "mėnuo_mėnesio_mėnesį", MM: "mėnesiai_mėnesių_mėnesius", y: "metai_metų_metus", yy: "metai_metų_metus" };

    function Mn(e, t, a, n) { return t ? fn(a)[0] : n ? fn(a)[1] : fn(a)[2] }

    function pn(e) { return e % 10 == 0 || e > 10 && e < 20 }

    function fn(e) { return cn[e].split("_") }

    function Yn(e, t, a, n) { var s = e + " "; return 1 === e ? s + Mn(0, t, a[0], n) : t ? s + (pn(e) ? fn(a)[1] : fn(a)[0]) : n ? s + fn(a)[1] : s + (pn(e) ? fn(a)[1] : fn(a)[2]) }
    Da.defineLocale("lt", { months: { format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_") }, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), weekdays: { format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"), standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), isFormat: /dddd HH:mm/ }, weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"), weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, calendar: { sameDay: "[Šiandien] LT", nextDay: "[Rytoj] LT", nextWeek: "dddd LT", lastDay: "[Vakar] LT", lastWeek: "[Praėjusį] dddd LT", sameElse: "L" }, relativeTime: { future: "po %s", past: "prieš %s", s: function(e, t, a, n) { return t ? "kelios sekundės" : n ? "kelių sekundžių" : "kelias sekundes" }, m: Mn, mm: Yn, h: Mn, hh: Yn, d: Mn, dd: Yn, M: Mn, MM: Yn, y: Mn, yy: Yn }, ordinalParse: /\d{1,2}-oji/, ordinal: function(e) { return e + "-oji" }, week: { dow: 1, doy: 4 } });
    var Ln = { m: "minūtes_minūtēm_minūte_minūtes".split("_"), mm: "minūtes_minūtēm_minūte_minūtes".split("_"), h: "stundas_stundām_stunda_stundas".split("_"), hh: "stundas_stundām_stunda_stundas".split("_"), d: "dienas_dienām_diena_dienas".split("_"), dd: "dienas_dienām_diena_dienas".split("_"), M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"), MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"), y: "gada_gadiem_gads_gadi".split("_"), yy: "gada_gadiem_gads_gadi".split("_") };

    function yn(e, t, a) { return a ? t % 10 == 1 && 11 !== t ? e[2] : e[3] : t % 10 == 1 && 11 !== t ? e[0] : e[1] }

    function Dn(e, t, a) { return e + " " + yn(Ln[a], e, t) }

    function kn(e, t, a) { return yn(Ln[a], e, t) }
    Da.defineLocale("lv", { months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"), monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"), weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"), weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY.", LL: "YYYY. [gada] D. MMMM", LLL: "YYYY. [gada] D. MMMM, HH:mm", LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm" }, calendar: { sameDay: "[Šodien pulksten] LT", nextDay: "[Rīt pulksten] LT", nextWeek: "dddd [pulksten] LT", lastDay: "[Vakar pulksten] LT", lastWeek: "[Pagājušā] dddd [pulksten] LT", sameElse: "L" }, relativeTime: { future: "pēc %s", past: "pirms %s", s: function(e, t) { return t ? "dažas sekundes" : "dažām sekundēm" }, m: kn, mm: Dn, h: kn, hh: Dn, d: kn, dd: Dn, M: kn, MM: Dn, y: kn, yy: Dn }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    var gn = { words: { m: ["jedan minut", "jednog minuta"], mm: ["minut", "minuta", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mjesec", "mjeseca", "mjeseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function(e, t) { return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2] }, translate: function(e, t, a) { var n = gn.words[a]; return 1 === a.length ? t ? n[0] : n[1] : e + " " + gn.correctGrammaticalCase(e, n) } },
        wn = (Da.defineLocale("me", {
            months: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
            monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."],
            weekdays: ["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"],
            weekdaysShort: ["ned.", "pon.", "uto.", "sri.", "čet.", "pet.", "sub."],
            weekdaysMin: ["ne", "po", "ut", "sr", "če", "pe", "su"],
            longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sjutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juče u] LT",
                lastWeek: function() { return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()] },
                sameElse: "L"
            },
            relativeTime: { future: "za %s", past: "prije %s", s: "nekoliko sekundi", m: gn.translate, mm: gn.translate, h: gn.translate, hh: gn.translate, d: "dan", dd: gn.translate, M: "mjesec", MM: gn.translate, y: "godinu", yy: gn.translate },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 }
        }), Da.defineLocale("mk", {
            months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
            weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
            weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
            longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" },
            calendar: {
                sameDay: "[Денес во] LT",
                nextDay: "[Утре во] LT",
                nextWeek: "[Во] dddd [во] LT",
                lastDay: "[Вчера во] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Изминатата] dddd [во] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Изминатиот] dddd [во] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: { future: "после %s", past: "пред %s", s: "неколку секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дена", M: "месец", MM: "%d месеци", y: "година", yy: "%d години" },
            ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function(e) {
                var t = e % 10,
                    a = e % 100;
                return 0 === e ? e + "-ев" : 0 === a ? e + "-ен" : a > 10 && a < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
            },
            week: { dow: 1, doy: 7 }
        }), Da.defineLocale("ml", { months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"), monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"), weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"), weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"), weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"), longDateFormat: { LT: "A h:mm -നു", LTS: "A h:mm:ss -നു", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm -നു", LLLL: "dddd, D MMMM YYYY, A h:mm -നു" }, calendar: { sameDay: "[ഇന്ന്] LT", nextDay: "[നാളെ] LT", nextWeek: "dddd, LT", lastDay: "[ഇന്നലെ] LT", lastWeek: "[കഴിഞ്ഞ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s കഴിഞ്ഞ്", past: "%s മുൻപ്", s: "അൽപ നിമിഷങ്ങൾ", m: "ഒരു മിനിറ്റ്", mm: "%d മിനിറ്റ്", h: "ഒരു മണിക്കൂർ", hh: "%d മണിക്കൂർ", d: "ഒരു ദിവസം", dd: "%d ദിവസം", M: "ഒരു മാസം", MM: "%d മാസം", y: "ഒരു വർഷം", yy: "%d വർഷം" }, meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i, isPM: function(e) { return /^(ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി)$/.test(e) }, meridiem: function(e, t, a) { return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി" } }), { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" }),
        Tn = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };

    function vn(e, t, a, n) {
        var s = "";
        if (t) switch (a) {
            case "s":
                s = "काही सेकंद";
                break;
            case "m":
                s = "एक मिनिट";
                break;
            case "mm":
                s = "%d मिनिटे";
                break;
            case "h":
                s = "एक तास";
                break;
            case "hh":
                s = "%d तास";
                break;
            case "d":
                s = "एक दिवस";
                break;
            case "dd":
                s = "%d दिवस";
                break;
            case "M":
                s = "एक महिना";
                break;
            case "MM":
                s = "%d महिने";
                break;
            case "y":
                s = "एक वर्ष";
                break;
            case "yy":
                s = "%d वर्षे"
        } else switch (a) {
            case "s":
                s = "काही सेकंदां";
                break;
            case "m":
                s = "एका मिनिटा";
                break;
            case "mm":
                s = "%d मिनिटां";
                break;
            case "h":
                s = "एका तासा";
                break;
            case "hh":
                s = "%d तासां";
                break;
            case "d":
                s = "एका दिवसा";
                break;
            case "dd":
                s = "%d दिवसां";
                break;
            case "M":
                s = "एका महिन्या";
                break;
            case "MM":
                s = "%d महिन्यां";
                break;
            case "y":
                s = "एका वर्षा";
                break;
            case "yy":
                s = "%d वर्षां"
        }
        return s.replace(/%d/i, e)
    }
    Da.defineLocale("mr", { months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"), monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"), weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), longDateFormat: { LT: "A h:mm वाजता", LTS: "A h:mm:ss वाजता", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm वाजता", LLLL: "dddd, D MMMM YYYY, A h:mm वाजता" }, calendar: { sameDay: "[आज] LT", nextDay: "[उद्या] LT", nextWeek: "dddd, LT", lastDay: "[काल] LT", lastWeek: "[मागील] dddd, LT", sameElse: "L" }, relativeTime: { future: "%sमध्ये", past: "%sपूर्वी", s: vn, m: vn, mm: vn, h: vn, hh: vn, d: vn, dd: vn, M: vn, MM: vn, y: vn, yy: vn }, preparse: function(e) { return e.replace(/[१२३४५६७८९०]/g, function(e) { return Tn[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return wn[e] }) }, meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "रात्री" === t ? e < 4 ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0 }, meridiem: function(e, t, a) { return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री" }, week: { dow: 0, doy: 6 } }), Da.defineLocale("ms-my", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0 }, meridiem: function(e, t, a) { return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }), Da.defineLocale("ms", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0 }, meridiem: function(e, t, a) { return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } });
    var bn = { 1: "၁", 2: "၂", 3: "၃", 4: "၄", 5: "၅", 6: "၆", 7: "၇", 8: "၈", 9: "၉", 0: "၀" },
        Sn = { "၁": "1", "၂": "2", "၃": "3", "၄": "4", "၅": "5", "၆": "6", "၇": "7", "၈": "8", "၉": "9", "၀": "0" },
        Hn = (Da.defineLocale("my", { months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"), monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"), weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"), weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[ယနေ.] LT [မှာ]", nextDay: "[မနက်ဖြန်] LT [မှာ]", nextWeek: "dddd LT [မှာ]", lastDay: "[မနေ.က] LT [မှာ]", lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]", sameElse: "L" }, relativeTime: { future: "လာမည့် %s မှာ", past: "လွန်ခဲ့သော %s က", s: "စက္ကန်.အနည်းငယ်", m: "တစ်မိနစ်", mm: "%d မိနစ်", h: "တစ်နာရီ", hh: "%d နာရီ", d: "တစ်ရက်", dd: "%d ရက်", M: "တစ်လ", MM: "%d လ", y: "တစ်နှစ်", yy: "%d နှစ်" }, preparse: function(e) { return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(e) { return Sn[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return bn[e] }) }, week: { dow: 1, doy: 4 } }), Da.defineLocale("nb", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"), weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] HH:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[i går kl.] LT", lastWeek: "[forrige] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "for %s siden", s: "noen sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en måned", MM: "%d måneder", y: "ett år", yy: "%d år" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" }),
        jn = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" },
        xn = (Da.defineLocale("ne", { months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"), monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"), weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"), weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"), weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"), longDateFormat: { LT: "Aको h:mm बजे", LTS: "Aको h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, Aको h:mm बजे", LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे" }, preparse: function(e) { return e.replace(/[१२३४५६७८९०]/g, function(e) { return jn[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return Hn[e] }) }, meridiemParse: /राति|बिहान|दिउँसो|साँझ/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0 }, meridiem: function(e, t, a) { return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति" }, calendar: { sameDay: "[आज] LT", nextDay: "[भोलि] LT", nextWeek: "[आउँदो] dddd[,] LT", lastDay: "[हिजो] LT", lastWeek: "[गएको] dddd[,] LT", sameElse: "L" }, relativeTime: { future: "%sमा", past: "%s अगाडि", s: "केही क्षण", m: "एक मिनेट", mm: "%d मिनेट", h: "एक घण्टा", hh: "%d घण्टा", d: "एक दिन", dd: "%d दिन", M: "एक महिना", MM: "%d महिना", y: "एक बर्ष", yy: "%d बर्ष" }, week: { dow: 0, doy: 6 } }), "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")),
        Wn = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
        Pn = (Da.defineLocale("nl", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function(e, t) { return /-MMM-/.test(t) ? Wn[e.month()] : xn[e.month()] }, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "één minuut", mm: "%d minuten", h: "één uur", hh: "%d uur", d: "één dag", dd: "%d dagen", M: "één maand", MM: "%d maanden", y: "één jaar", yy: "%d jaar" }, ordinalParse: /\d{1,2}(ste|de)/, ordinal: function(e) { return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } }), Da.defineLocale("nn", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"), weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"), weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[I dag klokka] LT", nextDay: "[I morgon klokka] LT", nextWeek: "dddd [klokka] LT", lastDay: "[I går klokka] LT", lastWeek: "[Føregåande] dddd [klokka] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "for %s sidan", s: "nokre sekund", m: "eit minutt", mm: "%d minutt", h: "ein time", hh: "%d timar", d: "ein dag", dd: "%d dagar", M: "ein månad", MM: "%d månader", y: "eit år", yy: "%d år" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_")),
        Fn = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");

    function An(e) { return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1 }

    function Cn(e, t, a) {
        var n = e + " ";
        switch (a) {
            case "m":
                return t ? "minuta" : "minutę";
            case "mm":
                return n + (An(e) ? "minuty" : "minut");
            case "h":
                return t ? "godzina" : "godzinę";
            case "hh":
                return n + (An(e) ? "godziny" : "godzin");
            case "MM":
                return n + (An(e) ? "miesiące" : "miesięcy");
            case "yy":
                return n + (An(e) ? "lata" : "lat")
        }
    }
    Da.defineLocale("pl", {
        months: function(e, t) { return "" === t ? "(" + Fn[e.month()] + "|" + Pn[e.month()] + ")" : /D MMMM/.test(t) ? Fn[e.month()] : Pn[e.month()] },
        monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
        weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
        weekdaysShort: "nie_pon_wt_śr_czw_pt_sb".split("_"),
        weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
        calendar: {
            sameDay: "[Dziś o] LT",
            nextDay: "[Jutro o] LT",
            nextWeek: "[W] dddd [o] LT",
            lastDay: "[Wczoraj o] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[W zeszłą niedzielę o] LT";
                    case 3:
                        return "[W zeszłą środę o] LT";
                    case 6:
                        return "[W zeszłą sobotę o] LT";
                    default:
                        return "[W zeszły] dddd [o] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: Cn, mm: Cn, h: Cn, hh: Cn, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: Cn, y: "rok", yy: Cn },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 }
    }), Da.defineLocale("pt-br", { months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"), weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, calendar: { sameDay: "[Hoje às] LT", nextDay: "[Amanhã às] LT", nextWeek: "dddd [às] LT", lastDay: "[Ontem às] LT", lastWeek: function() { return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT" }, sameElse: "L" }, relativeTime: { future: "em %s", past: "%s atrás", s: "poucos segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" }, ordinalParse: /\d{1,2}º/, ordinal: "%dº" }), Da.defineLocale("pt", { months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"), weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm" }, calendar: { sameDay: "[Hoje às] LT", nextDay: "[Amanhã às] LT", nextWeek: "dddd [às] LT", lastDay: "[Ontem às] LT", lastWeek: function() { return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT" }, sameElse: "L" }, relativeTime: { future: "em %s", past: "há %s", s: "segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" }, ordinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } });

    function On(e, t, a) { var n = " "; return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (n = " de "), e + n + { mm: "minute", hh: "ore", dd: "zile", MM: "luni", yy: "ani" }[a] }
    Da.defineLocale("ro", { months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"), monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"), weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"), weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"), weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[azi la] LT", nextDay: "[mâine la] LT", nextWeek: "dddd [la] LT", lastDay: "[ieri la] LT", lastWeek: "[fosta] dddd [la] LT", sameElse: "L" }, relativeTime: { future: "peste %s", past: "%s în urmă", s: "câteva secunde", m: "un minut", mm: On, h: "o oră", hh: On, d: "o zi", dd: On, M: "o lună", MM: On, y: "un an", yy: On }, week: { dow: 1, doy: 7 } });

    function En(e, t, a) { var n, s; return "m" === a ? t ? "минута" : "минуту" : e + " " + (n = +e, s = { mm: t ? "минута_минуты_минут" : "минуту_минуты_минут", hh: "час_часа_часов", dd: "день_дня_дней", MM: "месяц_месяца_месяцев", yy: "год_года_лет" }[a].split("_"), n % 10 == 1 && n % 100 != 11 ? s[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? s[1] : s[2]) }
    var zn = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i],
        Jn = (Da.defineLocale("ru", {
            months: { format: "Января_Февраля_Марта_Апреля_Мая_Июня_Июля_Августа_Сентября_Октября_Ноября_Декабря".split("_"), standalone: "Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь".split("_") },
            monthsShort: { format: "янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек".split("_"), standalone: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_") },
            weekdays: { standalone: "Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота".split("_"), format: "Воскресенье_Понедельник_Вторник_Среду_Четверг_Пятницу_Субботу".split("_"), isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/ },
            weekdaysShort: "Вс_Пн_Вт_Ср_Чт_Пт_Сб".split("_"),
            weekdaysMin: "Вс_Пн_Вт_Ср_Чт_Пт_Сб".split("_"),
            monthsParse: zn,
            longMonthsParse: zn,
            shortMonthsParse: zn,
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., HH:mm", LLLL: "dddd, D MMMM YYYY г., HH:mm" },
            calendar: {
                sameDay: "[Сегодня в] LT",
                nextDay: "[Завтра в] LT",
                lastDay: "[Вчера в] LT",
                nextWeek: function(e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                    switch (this.day()) {
                        case 0:
                            return "[В следующее] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В следующий] dddd [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В следующую] dddd [в] LT"
                    }
                },
                lastWeek: function(e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                    switch (this.day()) {
                        case 0:
                            return "[В прошлое] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В прошлый] dddd [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В прошлую] dddd [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: { future: "через %s", past: "%s назад", s: "несколько секунд", m: En, mm: En, h: "час", hh: En, d: "день", dd: En, M: "месяц", MM: En, y: "год", yy: En },
            meridiemParse: /ночи|утра|дня|вечера/i,
            isPM: function(e) { return /^(дня|вечера)$/.test(e) },
            meridiem: function(e, t, a) { return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера" },
            ordinalParse: /\d{1,2}-(й|го|я)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                        return e + "-й";
                    case "D":
                        return e + "-го";
                    case "w":
                    case "W":
                        return e + "-я";
                    default:
                        return e
                }
            },
            week: { dow: 1, doy: 7 }
        }), Da.defineLocale("se", { months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"), monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"), weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"), weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"), weekdaysMin: "s_v_m_g_d_b_L".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "MMMM D. [b.] YYYY", LLL: "MMMM D. [b.] YYYY [ti.] HH:mm", LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm" }, calendar: { sameDay: "[otne ti] LT", nextDay: "[ihttin ti] LT", nextWeek: "dddd [ti] LT", lastDay: "[ikte ti] LT", lastWeek: "[ovddit] dddd [ti] LT", sameElse: "L" }, relativeTime: { future: "%s geažes", past: "maŋit %s", s: "moadde sekunddat", m: "okta minuhta", mm: "%d minuhtat", h: "okta diimmu", hh: "%d diimmut", d: "okta beaivi", dd: "%d beaivvit", M: "okta mánnu", MM: "%d mánut", y: "okta jahki", yy: "%d jagit" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), Da.defineLocale("si", { months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"), monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"), weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"), weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"), weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"), longDateFormat: { LT: "a h:mm", LTS: "a h:mm:ss", L: "YYYY/MM/DD", LL: "YYYY MMMM D", LLL: "YYYY MMMM D, a h:mm", LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss" }, calendar: { sameDay: "[අද] LT[ට]", nextDay: "[හෙට] LT[ට]", nextWeek: "dddd LT[ට]", lastDay: "[ඊයේ] LT[ට]", lastWeek: "[පසුගිය] dddd LT[ට]", sameElse: "L" }, relativeTime: { future: "%sකින්", past: "%sකට පෙර", s: "තත්පර කිහිපය", m: "මිනිත්තුව", mm: "මිනිත්තු %d", h: "පැය", hh: "පැය %d", d: "දිනය", dd: "දින %d", M: "මාසය", MM: "මාස %d", y: "වසර", yy: "වසර %d" }, ordinalParse: /\d{1,2} වැනි/, ordinal: function(e) { return e + " වැනි" }, meridiem: function(e, t, a) { return e > 11 ? a ? "ප.ව." : "පස් වරු" : a ? "පෙ.ව." : "පෙර වරු" } }), "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_")),
        In = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");

    function Nn(e) { return e > 1 && e < 5 }

    function Gn(e, t, a, n) {
        var s = e + " ";
        switch (a) {
            case "s":
                return t || n ? "pár sekúnd" : "pár sekundami";
            case "m":
                return t ? "minúta" : n ? "minútu" : "minútou";
            case "mm":
                return t || n ? s + (Nn(e) ? "minúty" : "minút") : s + "minútami";
            case "h":
                return t ? "hodina" : n ? "hodinu" : "hodinou";
            case "hh":
                return t || n ? s + (Nn(e) ? "hodiny" : "hodín") : s + "hodinami";
            case "d":
                return t || n ? "deň" : "dňom";
            case "dd":
                return t || n ? s + (Nn(e) ? "dni" : "dní") : s + "dňami";
            case "M":
                return t || n ? "mesiac" : "mesiacom";
            case "MM":
                return t || n ? s + (Nn(e) ? "mesiace" : "mesiacov") : s + "mesiacmi";
            case "y":
                return t || n ? "rok" : "rokom";
            case "yy":
                return t || n ? s + (Nn(e) ? "roky" : "rokov") : s + "rokmi"
        }
    }
    Da.defineLocale("sk", {
        months: Jn,
        monthsShort: In,
        weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
        weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
        weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
        longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm" },
        calendar: {
            sameDay: "[dnes o] LT",
            nextDay: "[zajtra o] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[v nedeľu o] LT";
                    case 1:
                    case 2:
                        return "[v] dddd [o] LT";
                    case 3:
                        return "[v stredu o] LT";
                    case 4:
                        return "[vo štvrtok o] LT";
                    case 5:
                        return "[v piatok o] LT";
                    case 6:
                        return "[v sobotu o] LT"
                }
            },
            lastDay: "[včera o] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[minulú nedeľu o] LT";
                    case 1:
                    case 2:
                        return "[minulý] dddd [o] LT";
                    case 3:
                        return "[minulú stredu o] LT";
                    case 4:
                    case 5:
                        return "[minulý] dddd [o] LT";
                    case 6:
                        return "[minulú sobotu o] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: { future: "za %s", past: "pred %s", s: Gn, m: Gn, mm: Gn, h: Gn, hh: Gn, d: Gn, dd: Gn, M: Gn, MM: Gn, y: Gn, yy: Gn },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 }
    });

    function Vn(e, t, a, n) {
        var s = e + " ";
        switch (a) {
            case "s":
                return t || n ? "nekaj sekund" : "nekaj sekundami";
            case "m":
                return t ? "ena minuta" : "eno minuto";
            case "mm":
                return s += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || n ? "minuti" : "minutama" : e < 5 ? t || n ? "minute" : "minutami" : t || n ? "minut" : "minutami";
            case "h":
                return t ? "ena ura" : "eno uro";
            case "hh":
                return s += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || n ? "uri" : "urama" : e < 5 ? t || n ? "ure" : "urami" : t || n ? "ur" : "urami";
            case "d":
                return t || n ? "en dan" : "enim dnem";
            case "dd":
                return s += 1 === e ? t || n ? "dan" : "dnem" : 2 === e ? t || n ? "dni" : "dnevoma" : t || n ? "dni" : "dnevi";
            case "M":
                return t || n ? "en mesec" : "enim mesecem";
            case "MM":
                return s += 1 === e ? t || n ? "mesec" : "mesecem" : 2 === e ? t || n ? "meseca" : "mesecema" : e < 5 ? t || n ? "mesece" : "meseci" : t || n ? "mesecev" : "meseci";
            case "y":
                return t || n ? "eno leto" : "enim letom";
            case "yy":
                return s += 1 === e ? t || n ? "leto" : "letom" : 2 === e ? t || n ? "leti" : "letoma" : e < 5 ? t || n ? "leta" : "leti" : t || n ? "let" : "leti"
        }
    }
    Da.defineLocale("sl", {
        months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
        monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
        weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
        weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
        weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
        longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" },
        calendar: {
            sameDay: "[danes ob] LT",
            nextDay: "[jutri ob] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[v] [nedeljo] [ob] LT";
                    case 3:
                        return "[v] [sredo] [ob] LT";
                    case 6:
                        return "[v] [soboto] [ob] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[v] dddd [ob] LT"
                }
            },
            lastDay: "[včeraj ob] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[prejšnjo] [nedeljo] [ob] LT";
                    case 3:
                        return "[prejšnjo] [sredo] [ob] LT";
                    case 6:
                        return "[prejšnjo] [soboto] [ob] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[prejšnji] dddd [ob] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: { future: "čez %s", past: "pred %s", s: Vn, m: Vn, mm: Vn, h: Vn, hh: Vn, d: Vn, dd: Vn, M: Vn, MM: Vn, y: Vn, yy: Vn },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 7 }
    }), Da.defineLocale("sq", { months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"), monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"), weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"), weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"), weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"), meridiemParse: /PD|MD/, isPM: function(e) { return "M" === e.charAt(0) }, meridiem: function(e, t, a) { return e < 12 ? "PD" : "MD" }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Sot në] LT", nextDay: "[Nesër në] LT", nextWeek: "dddd [në] LT", lastDay: "[Dje në] LT", lastWeek: "dddd [e kaluar në] LT", sameElse: "L" }, relativeTime: { future: "në %s", past: "%s më parë", s: "disa sekonda", m: "një minutë", mm: "%d minuta", h: "një orë", hh: "%d orë", d: "një ditë", dd: "%d ditë", M: "një muaj", MM: "%d muaj", y: "një vit", yy: "%d vite" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    var Un = { words: { m: ["један минут", "једне минуте"], mm: ["минут", "минуте", "минута"], h: ["један сат", "једног сата"], hh: ["сат", "сата", "сати"], dd: ["дан", "дана", "дана"], MM: ["месец", "месеца", "месеци"], yy: ["година", "године", "година"] }, correctGrammaticalCase: function(e, t) { return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2] }, translate: function(e, t, a) { var n = Un.words[a]; return 1 === a.length ? t ? n[0] : n[1] : e + " " + Un.correctGrammaticalCase(e, n) } },
        qn = (Da.defineLocale("sr-cyrl", {
            months: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"],
            monthsShort: ["јан.", "феб.", "мар.", "апр.", "мај", "јун", "јул", "авг.", "сеп.", "окт.", "нов.", "дец."],
            weekdays: ["недеља", "понедељак", "уторак", "среда", "четвртак", "петак", "субота"],
            weekdaysShort: ["нед.", "пон.", "уто.", "сре.", "чет.", "пет.", "суб."],
            weekdaysMin: ["не", "по", "ут", "ср", "че", "пе", "су"],
            longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" },
            calendar: {
                sameDay: "[данас у] LT",
                nextDay: "[сутра у] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[у] [недељу] [у] LT";
                        case 3:
                            return "[у] [среду] [у] LT";
                        case 6:
                            return "[у] [суботу] [у] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[у] dddd [у] LT"
                    }
                },
                lastDay: "[јуче у] LT",
                lastWeek: function() { return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()] },
                sameElse: "L"
            },
            relativeTime: { future: "за %s", past: "пре %s", s: "неколико секунди", m: Un.translate, mm: Un.translate, h: Un.translate, hh: Un.translate, d: "дан", dd: Un.translate, M: "месец", MM: Un.translate, y: "годину", yy: Un.translate },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 }
        }), { words: { m: ["jedan minut", "jedne minute"], mm: ["minut", "minute", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mesec", "meseca", "meseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function(e, t) { return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2] }, translate: function(e, t, a) { var n = qn.words[a]; return 1 === a.length ? t ? n[0] : n[1] : e + " " + qn.correctGrammaticalCase(e, n) } }),
        Rn = (Da.defineLocale("sr", {
            months: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
            monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."],
            weekdays: ["nedelja", "ponedeljak", "utorak", "sreda", "četvrtak", "petak", "subota"],
            weekdaysShort: ["ned.", "pon.", "uto.", "sre.", "čet.", "pet.", "sub."],
            weekdaysMin: ["ne", "po", "ut", "sr", "če", "pe", "su"],
            longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedelju] [u] LT";
                        case 3:
                            return "[u] [sredu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juče u] LT",
                lastWeek: function() { return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()] },
                sameElse: "L"
            },
            relativeTime: { future: "za %s", past: "pre %s", s: "nekoliko sekundi", m: qn.translate, mm: qn.translate, h: qn.translate, hh: qn.translate, d: "dan", dd: qn.translate, M: "mesec", MM: qn.translate, y: "godinu", yy: qn.translate },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 }
        }), Da.defineLocale("sv", { months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"), weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"), weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Idag] LT", nextDay: "[Imorgon] LT", lastDay: "[Igår] LT", nextWeek: "[På] dddd LT", lastWeek: "[I] dddd[s] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "för %s sedan", s: "några sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en månad", MM: "%d månader", y: "ett år", yy: "%d år" }, ordinalParse: /\d{1,2}(e|a)/, ordinal: function(e) { var t = e % 10; return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e") }, week: { dow: 1, doy: 4 } }), Da.defineLocale("sw", { months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"), weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"), weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"), weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[leo saa] LT", nextDay: "[kesho saa] LT", nextWeek: "[wiki ijayo] dddd [saat] LT", lastDay: "[jana] LT", lastWeek: "[wiki iliyopita] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s baadaye", past: "tokea %s", s: "hivi punde", m: "dakika moja", mm: "dakika %d", h: "saa limoja", hh: "masaa %d", d: "siku moja", dd: "masiku %d", M: "mwezi mmoja", MM: "miezi %d", y: "mwaka mmoja", yy: "miaka %d" }, week: { dow: 1, doy: 7 } }), { 1: "௧", 2: "௨", 3: "௩", 4: "௪", 5: "௫", 6: "௬", 7: "௭", 8: "௮", 9: "௯", 0: "௦" }),
        Zn = { "௧": "1", "௨": "2", "௩": "3", "௪": "4", "௫": "5", "௬": "6", "௭": "7", "௮": "8", "௯": "9", "௦": "0" },
        Bn = (Da.defineLocale("ta", { months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"), weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"), weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, HH:mm", LLLL: "dddd, D MMMM YYYY, HH:mm" }, calendar: { sameDay: "[இன்று] LT", nextDay: "[நாளை] LT", nextWeek: "dddd, LT", lastDay: "[நேற்று] LT", lastWeek: "[கடந்த வாரம்] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s இல்", past: "%s முன்", s: "ஒரு சில விநாடிகள்", m: "ஒரு நிமிடம்", mm: "%d நிமிடங்கள்", h: "ஒரு மணி நேரம்", hh: "%d மணி நேரம்", d: "ஒரு நாள்", dd: "%d நாட்கள்", M: "ஒரு மாதம்", MM: "%d மாதங்கள்", y: "ஒரு வருடம்", yy: "%d ஆண்டுகள்" }, ordinalParse: /\d{1,2}வது/, ordinal: function(e) { return e + "வது" }, preparse: function(e) { return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function(e) { return Zn[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return Rn[e] }) }, meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/, meridiem: function(e, t, a) { return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்" }, meridiemHour: function(e, t) { return 12 === e && (e = 0), "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12 }, week: { dow: 0, doy: 6 } }), Da.defineLocale("te", { months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"), monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"), weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"), weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"), weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[నేడు] LT", nextDay: "[రేపు] LT", nextWeek: "dddd, LT", lastDay: "[నిన్న] LT", lastWeek: "[గత] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s లో", past: "%s క్రితం", s: "కొన్ని క్షణాలు", m: "ఒక నిమిషం", mm: "%d నిమిషాలు", h: "ఒక గంట", hh: "%d గంటలు", d: "ఒక రోజు", dd: "%d రోజులు", M: "ఒక నెల", MM: "%d నెలలు", y: "ఒక సంవత్సరం", yy: "%d సంవత్సరాలు" }, ordinalParse: /\d{1,2}వ/, ordinal: "%dవ", meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0 }, meridiem: function(e, t, a) { return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి" }, week: { dow: 0, doy: 6 } }), Da.defineLocale("th", { months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"), monthsShort: "มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา".split("_"), weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"), weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"), weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"), longDateFormat: { LT: "H นาฬิกา m นาที", LTS: "H นาฬิกา m นาที s วินาที", L: "YYYY/MM/DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY เวลา H นาฬิกา m นาที", LLLL: "วันddddที่ D MMMM YYYY เวลา H นาฬิกา m นาที" }, meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/, isPM: function(e) { return "หลังเที่ยง" === e }, meridiem: function(e, t, a) { return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง" }, calendar: { sameDay: "[วันนี้ เวลา] LT", nextDay: "[พรุ่งนี้ เวลา] LT", nextWeek: "dddd[หน้า เวลา] LT", lastDay: "[เมื่อวานนี้ เวลา] LT", lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT", sameElse: "L" }, relativeTime: { future: "อีก %s", past: "%sที่แล้ว", s: "ไม่กี่วินาที", m: "1 นาที", mm: "%d นาที", h: "1 ชั่วโมง", hh: "%d ชั่วโมง", d: "1 วัน", dd: "%d วัน", M: "1 เดือน", MM: "%d เดือน", y: "1 ปี", yy: "%d ปี" } }), Da.defineLocale("tl-ph", { months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"), monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"), weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"), weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"), weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "MM/D/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY HH:mm", LLLL: "dddd, MMMM DD, YYYY HH:mm" }, calendar: { sameDay: "[Ngayon sa] LT", nextDay: "[Bukas sa] LT", nextWeek: "dddd [sa] LT", lastDay: "[Kahapon sa] LT", lastWeek: "dddd [huling linggo] LT", sameElse: "L" }, relativeTime: { future: "sa loob ng %s", past: "%s ang nakalipas", s: "ilang segundo", m: "isang minuto", mm: "%d minuto", h: "isang oras", hh: "%d oras", d: "isang araw", dd: "%d araw", M: "isang buwan", MM: "%d buwan", y: "isang taon", yy: "%d taon" }, ordinalParse: /\d{1,2}/, ordinal: function(e) { return e }, week: { dow: 1, doy: 4 } }), "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_"));

    function $n(e, t, a, n) {
        var s = function(e) {
            var t = Math.floor(e % 1e3 / 100),
                a = Math.floor(e % 100 / 10),
                n = e % 10,
                s = "";
            t > 0 && (s += Bn[t] + "vatlh");
            a > 0 && (s += ("" !== s ? " " : "") + Bn[a] + "maH");
            n > 0 && (s += ("" !== s ? " " : "") + Bn[n]);
            return "" === s ? "pagh" : s
        }(e);
        switch (a) {
            case "mm":
                return s + " tup";
            case "hh":
                return s + " rep";
            case "dd":
                return s + " jaj";
            case "MM":
                return s + " jar";
            case "yy":
                return s + " DIS"
        }
    }
    Da.defineLocale("tlh", { months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"), monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"), weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[DaHjaj] LT", nextDay: "[wa’leS] LT", nextWeek: "LLL", lastDay: "[wa’Hu’] LT", lastWeek: "LLL", sameElse: "L" }, relativeTime: { future: function(e) { var t = e; return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq" }, past: function(e) { var t = e; return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret" }, s: "puS lup", m: "wa’ tup", mm: $n, h: "wa’ rep", hh: $n, d: "wa’ jaj", dd: $n, M: "wa’ jar", MM: $n, y: "wa’ DIS", yy: $n }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    var Kn = { 1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'üncü", 4: "'üncü", 100: "'üncü", 6: "'ncı", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'ıncı", 90: "'ıncı" };
    Da.defineLocale("tr", { months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"), monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"), weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"), weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"), weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[bugün saat] LT", nextDay: "[yarın saat] LT", nextWeek: "[haftaya] dddd [saat] LT", lastDay: "[dün] LT", lastWeek: "[geçen hafta] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s önce", s: "birkaç saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir yıl", yy: "%d yıl" }, ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/, ordinal: function(e) { if (0 === e) return e + "'ıncı"; var t = e % 10; return e + (Kn[t] || Kn[e % 100 - t] || Kn[e >= 100 ? 100 : null]) }, week: { dow: 1, doy: 7 } }), Da.defineLocale("tzl", { months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"), monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"), weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"), weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"), weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM [dallas] YYYY", LLL: "D. MMMM [dallas] YYYY HH.mm", LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm" }, meridiem: function(e, t, a) { return e > 11 ? a ? "d'o" : "D'O" : a ? "d'a" : "D'A" }, calendar: { sameDay: "[oxhi à] LT", nextDay: "[demà à] LT", nextWeek: "dddd [à] LT", lastDay: "[ieiri à] LT", lastWeek: "[sür el] dddd [lasteu à] LT", sameElse: "L" }, relativeTime: { future: "osprei %s", past: "ja%s", s: Qn, m: Qn, mm: Qn, h: Qn, hh: Qn, d: Qn, dd: Qn, M: Qn, MM: Qn, y: Qn, yy: Qn }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });

    function Qn(e, t, a, n) { var s = { s: ["viensas secunds", "'iensas secunds"], m: ["'n míut", "'iens míut"], mm: [e + " míuts", e + " míuts"], h: ["'n þora", "'iensa þora"], hh: [e + " þoras", e + " þoras"], d: ["'n ziua", "'iensa ziua"], dd: [e + " ziuas", e + " ziuas"], M: ["'n mes", "'iens mes"], MM: [e + " mesen", e + " mesen"], y: ["'n ar", "'iens ar"], yy: [e + " ars", e + " ars"] }; return n ? s[a][0] : t ? s[a][0] : s[a][1] }
    Da.defineLocale("tzm-latn", { months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[asdkh g] LT", nextDay: "[aska g] LT", nextWeek: "dddd [g] LT", lastDay: "[assant g] LT", lastWeek: "dddd [g] LT", sameElse: "L" }, relativeTime: { future: "dadkh s yan %s", past: "yan %s", s: "imik", m: "minuḍ", mm: "%d minuḍ", h: "saɛa", hh: "%d tassaɛin", d: "ass", dd: "%d ossan", M: "ayowr", MM: "%d iyyirn", y: "asgas", yy: "%d isgasn" }, week: { dow: 6, doy: 12 } }), Da.defineLocale("tzm", { months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[ⴰⵙⴷⵅ ⴴ] LT", nextDay: "[ⴰⵙⴽⴰ ⴴ] LT", nextWeek: "dddd [ⴴ] LT", lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT", lastWeek: "dddd [ⴴ] LT", sameElse: "L" }, relativeTime: { future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s", past: "ⵢⴰⵏ %s", s: "ⵉⵎⵉⴽ", m: "ⵎⵉⵏⵓⴺ", mm: "%d ⵎⵉⵏⵓⴺ", h: "ⵙⴰⵄⴰ", hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ", d: "ⴰⵙⵙ", dd: "%d oⵙⵙⴰⵏ", M: "ⴰⵢoⵓⵔ", MM: "%d ⵉⵢⵢⵉⵔⵏ", y: "ⴰⵙⴳⴰⵙ", yy: "%d ⵉⵙⴳⴰⵙⵏ" }, week: { dow: 6, doy: 12 } });

    function Xn(e, t, a) { var n, s; return "m" === a ? t ? "хвилина" : "хвилину" : "h" === a ? t ? "година" : "годину" : e + " " + (n = +e, s = { mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин", hh: t ? "година_години_годин" : "годину_години_годин", dd: "день_дні_днів", MM: "місяць_місяці_місяців", yy: "рік_роки_років" }[a].split("_"), n % 10 == 1 && n % 100 != 11 ? s[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? s[1] : s[2]) }

    function es(e) { return function() { return e + "о" + (11 === this.hours() ? "б" : "") + "] LT" } }
    Da.defineLocale("uk", {
        months: { format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"), standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_") },
        monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
        weekdays: function(e, t) { return { nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"), accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"), genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_") }[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] },
        weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY р.", LLL: "D MMMM YYYY р., HH:mm", LLLL: "dddd, D MMMM YYYY р., HH:mm" },
        calendar: {
            sameDay: es("[Сьогодні "),
            nextDay: es("[Завтра "),
            lastDay: es("[Вчора "),
            nextWeek: es("[У] dddd ["),
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return es("[Минулої] dddd [").call(this);
                    case 1:
                    case 2:
                    case 4:
                        return es("[Минулого] dddd [").call(this)
                }
            },
            sameElse: "L"
        },
        relativeTime: { future: "за %s", past: "%s тому", s: "декілька секунд", m: Xn, mm: Xn, h: "годину", hh: Xn, d: "день", dd: Xn, M: "місяць", MM: Xn, y: "рік", yy: Xn },
        meridiemParse: /ночі|ранку|дня|вечора/,
        isPM: function(e) { return /^(дня|вечора)$/.test(e) },
        meridiem: function(e, t, a) { return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора" },
        ordinalParse: /\d{1,2}-(й|го)/,
        ordinal: function(e, t) {
            switch (t) {
                case "M":
                case "d":
                case "DDD":
                case "w":
                case "W":
                    return e + "-й";
                case "D":
                    return e + "-го";
                default:
                    return e
            }
        },
        week: { dow: 1, doy: 7 }
    }), Da.defineLocale("uz", { months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"), monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"), weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"), weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"), weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, calendar: { sameDay: "[Бугун соат] LT [да]", nextDay: "[Эртага] LT [да]", nextWeek: "dddd [куни соат] LT [да]", lastDay: "[Кеча соат] LT [да]", lastWeek: "[Утган] dddd [куни соат] LT [да]", sameElse: "L" }, relativeTime: { future: "Якин %s ичида", past: "Бир неча %s олдин", s: "фурсат", m: "бир дакика", mm: "%d дакика", h: "бир соат", hh: "%d соат", d: "бир кун", dd: "%d кун", M: "бир ой", MM: "%d ой", y: "бир йил", yy: "%d йил" }, week: { dow: 1, doy: 7 } }), Da.defineLocale("vi", { months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"), monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"), weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [năm] YYYY", LLL: "D MMMM [năm] YYYY HH:mm", LLLL: "dddd, D MMMM [năm] YYYY HH:mm", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[Hôm nay lúc] LT", nextDay: "[Ngày mai lúc] LT", nextWeek: "dddd [tuần tới lúc] LT", lastDay: "[Hôm qua lúc] LT", lastWeek: "dddd [tuần rồi lúc] LT", sameElse: "L" }, relativeTime: { future: "%s tới", past: "%s trước", s: "vài giây", m: "một phút", mm: "%d phút", h: "một giờ", hh: "%d giờ", d: "một ngày", dd: "%d ngày", M: "một tháng", MM: "%d tháng", y: "một năm", yy: "%d năm" }, ordinalParse: /\d{1,2}/, ordinal: function(e) { return e }, week: { dow: 1, doy: 4 } }), Da.defineLocale("zh-cn", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: { LT: "Ah点mm分", LTS: "Ah点m分s秒", L: "YYYY-MM-DD", LL: "YYYY年MMMD日", LLL: "YYYY年MMMD日Ah点mm分", LLLL: "YYYY年MMMD日ddddAh点mm分", l: "YYYY-MM-DD", ll: "YYYY年MMMD日", lll: "YYYY年MMMD日Ah点mm分", llll: "YYYY年MMMD日ddddAh点mm分" },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function(e, t) { return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12 },
        meridiem: function(e, t, a) { var n = 100 * e + t; return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1130 ? "上午" : n < 1230 ? "中午" : n < 1800 ? "下午" : "晚上" },
        calendar: { sameDay: function() { return 0 === this.minutes() ? "[今天]Ah[点整]" : "[今天]LT" }, nextDay: function() { return 0 === this.minutes() ? "[明天]Ah[点整]" : "[明天]LT" }, lastDay: function() { return 0 === this.minutes() ? "[昨天]Ah[点整]" : "[昨天]LT" }, nextWeek: function() { var e, t; return e = Da().startOf("week"), t = this.unix() - e.unix() >= 604800 ? "[下]" : "[本]", 0 === this.minutes() ? t + "dddAh点整" : t + "dddAh点mm" }, lastWeek: function() { var e, t; return e = Da().startOf("week"), t = this.unix() < e.unix() ? "[上]" : "[本]", 0 === this.minutes() ? t + "dddAh点整" : t + "dddAh点mm" }, sameElse: "LL" },
        ordinalParse: /\d{1,2}(日|月|周)/,
        ordinal: function(e, t) {
            switch (t) {
                case "d":
                case "D":
                case "DDD":
                    return e + "日";
                case "M":
                    return e + "月";
                case "w":
                case "W":
                    return e + "周";
                default:
                    return e
            }
        },
        relativeTime: { future: "%s内", past: "%s前", s: "几秒", m: "1 分钟", mm: "%d 分钟", h: "1 小时", hh: "%d 小时", d: "1 天", dd: "%d 天", M: "1 个月", MM: "%d 个月", y: "1 年", yy: "%d 年" },
        week: { dow: 1, doy: 4 }
    }), Da.defineLocale("zh-tw", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: { LT: "Ah點mm分", LTS: "Ah點m分s秒", L: "YYYY年MMMD日", LL: "YYYY年MMMD日", LLL: "YYYY年MMMD日Ah點mm分", LLLL: "YYYY年MMMD日ddddAh點mm分", l: "YYYY年MMMD日", ll: "YYYY年MMMD日", lll: "YYYY年MMMD日Ah點mm分", llll: "YYYY年MMMD日ddddAh點mm分" },
        meridiemParse: /早上|上午|中午|下午|晚上/,
        meridiemHour: function(e, t) { return 12 === e && (e = 0), "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0 },
        meridiem: function(e, t, a) { var n = 100 * e + t; return n < 900 ? "早上" : n < 1130 ? "上午" : n < 1230 ? "中午" : n < 1800 ? "下午" : "晚上" },
        calendar: { sameDay: "[今天]LT", nextDay: "[明天]LT", nextWeek: "[下]ddddLT", lastDay: "[昨天]LT", lastWeek: "[上]ddddLT", sameElse: "L" },
        ordinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function(e, t) {
            switch (t) {
                case "d":
                case "D":
                case "DDD":
                    return e + "日";
                case "M":
                    return e + "月";
                case "w":
                case "W":
                    return e + "週";
                default:
                    return e
            }
        },
        relativeTime: { future: "%s內", past: "%s前", s: "幾秒", m: "一分鐘", mm: "%d分鐘", h: "一小時", hh: "%d小時", d: "一天", dd: "%d天", M: "一個月", MM: "%d個月", y: "一年", yy: "%d年" }
    });
    var ts = Da;
    return ts.locale("en"), ts
}),
function(e, t) { "function" == typeof define && define.amd ? define(["moment"], function(a) { return e.moment = t(a), e.moment }) : "object" == typeof exports ? module.exports = t(require("moment")) : e.moment = t(e.moment) }(this, function(e) {
    if (null == e) throw new Error("Cannot find moment");
    var t, a, n = { ummalquraData: [28607, 28636, 28665, 28695, 28724, 28754, 28783, 28813, 28843, 28872, 28901, 28931, 28960, 28990, 29019, 29049, 29078, 29108, 29137, 29167, 29196, 29226, 29255, 29285, 29315, 29345, 29375, 29404, 29434, 29463, 29492, 29522, 29551, 29580, 29610, 29640, 29669, 29699, 29729, 29759, 29788, 29818, 29847, 29876, 29906, 29935, 29964, 29994, 30023, 30053, 30082, 30112, 30141, 30171, 30200, 30230, 30259, 30289, 30318, 30348, 30378, 30408, 30437, 30467, 30496, 30526, 30555, 30585, 30614, 30644, 30673, 30703, 30732, 30762, 30791, 30821, 30850, 30880, 30909, 30939, 30968, 30998, 31027, 31057, 31086, 31116, 31145, 31175, 31204, 31234, 31263, 31293, 31322, 31352, 31381, 31411, 31441, 31471, 31500, 31530, 31559, 31589, 31618, 31648, 31676, 31706, 31736, 31766, 31795, 31825, 31854, 31884, 31913, 31943, 31972, 32002, 32031, 32061, 32090, 32120, 32150, 32180, 32209, 32239, 32268, 32298, 32327, 32357, 32386, 32416, 32445, 32475, 32504, 32534, 32563, 32593, 32622, 32652, 32681, 32711, 32740, 32770, 32799, 32829, 32858, 32888, 32917, 32947, 32976, 33006, 33035, 33065, 33094, 33124, 33153, 33183, 33213, 33243, 33272, 33302, 33331, 33361, 33390, 33420, 33450, 33479, 33509, 33539, 33568, 33598, 33627, 33657, 33686, 33716, 33745, 33775, 33804, 33834, 33863, 33893, 33922, 33952, 33981, 34011, 34040, 34069, 34099, 34128, 34158, 34187, 34217, 34247, 34277, 34306, 34336, 34365, 34395, 34424, 34454, 34483, 34512, 34542, 34571, 34601, 34631, 34660, 34690, 34719, 34749, 34778, 34808, 34837, 34867, 34896, 34926, 34955, 34985, 35015, 35044, 35074, 35103, 35133, 35162, 35192, 35222, 35251, 35280, 35310, 35340, 35370, 35399, 35429, 35458, 35488, 35517, 35547, 35576, 35605, 35635, 35665, 35694, 35723, 35753, 35782, 35811, 35841, 35871, 35901, 35930, 35960, 35989, 36019, 36048, 36078, 36107, 36136, 36166, 36195, 36225, 36254, 36284, 36314, 36343, 36373, 36403, 36433, 36462, 36492, 36521, 36551, 36580, 36610, 36639, 36669, 36698, 36728, 36757, 36786, 36816, 36845, 36875, 36904, 36934, 36963, 36993, 37022, 37052, 37081, 37111, 37141, 37170, 37200, 37229, 37259, 37288, 37318, 37347, 37377, 37406, 37436, 37465, 37495, 37524, 37554, 37584, 37613, 37643, 37672, 37701, 37731, 37760, 37790, 37819, 37849, 37878, 37908, 37938, 37967, 37997, 38027, 38056, 38085, 38115, 38144, 38174, 38203, 38233, 38262, 38292, 38322, 38351, 38381, 38410, 38440, 38469, 38499, 38528, 38558, 38587, 38617, 38646, 38676, 38705, 38735, 38764, 38794, 38823, 38853, 38882, 38912, 38941, 38971, 39001, 39030, 39059, 39089, 39118, 39148, 39178, 39208, 39237, 39267, 39297, 39326, 39355, 39385, 39414, 39444, 39473, 39503, 39532, 39562, 39592, 39621, 39650, 39680, 39709, 39739, 39768, 39798, 39827, 39857, 39886, 39916, 39946, 39975, 40005, 40035, 40064, 40094, 40123, 40153, 40182, 40212, 40241, 40271, 40300, 40330, 40359, 40389, 40418, 40448, 40477, 40507, 40536, 40566, 40595, 40625, 40655, 40685, 40714, 40744, 40773, 40803, 40832, 40862, 40892, 40921, 40951, 40980, 41009, 41039, 41068, 41098, 41127, 41157, 41186, 41216, 41245, 41275, 41304, 41334, 41364, 41393, 41422, 41452, 41481, 41511, 41540, 41570, 41599, 41629, 41658, 41688, 41718, 41748, 41777, 41807, 41836, 41865, 41894, 41924, 41953, 41983, 42012, 42042, 42072, 42102, 42131, 42161, 42190, 42220, 42249, 42279, 42308, 42337, 42367, 42397, 42426, 42456, 42485, 42515, 42545, 42574, 42604, 42633, 42662, 42692, 42721, 42751, 42780, 42810, 42839, 42869, 42899, 42929, 42958, 42988, 43017, 43046, 43076, 43105, 43135, 43164, 43194, 43223, 43253, 43283, 43312, 43342, 43371, 43401, 43430, 43460, 43489, 43519, 43548, 43578, 43607, 43637, 43666, 43696, 43726, 43755, 43785, 43814, 43844, 43873, 43903, 43932, 43962, 43991, 44021, 44050, 44080, 44109, 44139, 44169, 44198, 44228, 44258, 44287, 44317, 44346, 44375, 44405, 44434, 44464, 44493, 44523, 44553, 44582, 44612, 44641, 44671, 44700, 44730, 44759, 44788, 44818, 44847, 44877, 44906, 44936, 44966, 44996, 45025, 45055, 45084, 45114, 45143, 45172, 45202, 45231, 45261, 45290, 45320, 45350, 45380, 45409, 45439, 45468, 45498, 45527, 45556, 45586, 45615, 45644, 45674, 45704, 45733, 45763, 45793, 45823, 45852, 45882, 45911, 45940, 45970, 45999, 46028, 46058, 46088, 46117, 46147, 46177, 46206, 46236, 46265, 46295, 46324, 46354, 46383, 46413, 46442, 46472, 46501, 46531, 46560, 46590, 46620, 46649, 46679, 46708, 46738, 46767, 46797, 46826, 46856, 46885, 46915, 46944, 46974, 47003, 47033, 47063, 47092, 47122, 47151, 47181, 47210, 47240, 47269, 47298, 47328, 47357, 47387, 47417, 47446, 47476, 47506, 47535, 47565, 47594, 47624, 47653, 47682, 47712, 47741, 47771, 47800, 47830, 47860, 47890, 47919, 47949, 47978, 48008, 48037, 48066, 48096, 48125, 48155, 48184, 48214, 48244, 48273, 48303, 48333, 48362, 48392, 48421, 48450, 48480, 48509, 48538, 48568, 48598, 48627, 48657, 48687, 48717, 48746, 48776, 48805, 48834, 48864, 48893, 48922, 48952, 48982, 49011, 49041, 49071, 49100, 49130, 49160, 49189, 49218, 49248, 49277, 49306, 49336, 49365, 49395, 49425, 49455, 49484, 49514, 49543, 49573, 49602, 49632, 49661, 49690, 49720, 49749, 49779, 49809, 49838, 49868, 49898, 49927, 49957, 49986, 50016, 50045, 50075, 50104, 50133, 50163, 50192, 50222, 50252, 50281, 50311, 50340, 50370, 50400, 50429, 50459, 50488, 50518, 50547, 50576, 50606, 50635, 50665, 50694, 50724, 50754, 50784, 50813, 50843, 50872, 50902, 50931, 50960, 50990, 51019, 51049, 51078, 51108, 51138, 51167, 51197, 51227, 51256, 51286, 51315, 51345, 51374, 51403, 51433, 51462, 51492, 51522, 51552, 51582, 51611, 51641, 51670, 51699, 51729, 51758, 51787, 51816, 51846, 51876, 51906, 51936, 51965, 51995, 52025, 52054, 52083, 52113, 52142, 52171, 52200, 52230, 52260, 52290, 52319, 52349, 52379, 52408, 52438, 52467, 52497, 52526, 52555, 52585, 52614, 52644, 52673, 52703, 52733, 52762, 52792, 52822, 52851, 52881, 52910, 52939, 52969, 52998, 53028, 53057, 53087, 53116, 53146, 53176, 53205, 53235, 53264, 53294, 53324, 53353, 53383, 53412, 53441, 53471, 53500, 53530, 53559, 53589, 53619, 53648, 53678, 53708, 53737, 53767, 53796, 53825, 53855, 53884, 53913, 53943, 53973, 54003, 54032, 54062, 54092, 54121, 54151, 54180, 54209, 54239, 54268, 54297, 54327, 54357, 54387, 54416, 54446, 54476, 54505, 54535, 54564, 54593, 54623, 54652, 54681, 54711, 54741, 54770, 54800, 54830, 54859, 54889, 54919, 54948, 54977, 55007, 55036, 55066, 55095, 55125, 55154, 55184, 55213, 55243, 55273, 55302, 55332, 55361, 55391, 55420, 55450, 55479, 55508, 55538, 55567, 55597, 55627, 55657, 55686, 55716, 55745, 55775, 55804, 55834, 55863, 55892, 55922, 55951, 55981, 56011, 56040, 56070, 56100, 56129, 56159, 56188, 56218, 56247, 56276, 56306, 56335, 56365, 56394, 56424, 56454, 56483, 56513, 56543, 56572, 56601, 56631, 56660, 56690, 56719, 56749, 56778, 56808, 56837, 56867, 56897, 56926, 56956, 56985, 57015, 57044, 57074, 57103, 57133, 57162, 57192, 57221, 57251, 57280, 57310, 57340, 57369, 57399, 57429, 57458, 57487, 57517, 57546, 57576, 57605, 57634, 57664, 57694, 57723, 57753, 57783, 57813, 57842, 57871, 57901, 57930, 57959, 57989, 58018, 58048, 58077, 58107, 58137, 58167, 58196, 58226, 58255, 58285, 58314, 58343, 58373, 58402, 58432, 58461, 58491, 58521, 58551, 58580, 58610, 58639, 58669, 58698, 58727, 58757, 58786, 58816, 58845, 58875, 58905, 58934, 58964, 58994, 59023, 59053, 59082, 59111, 59141, 59170, 59200, 59229, 59259, 59288, 59318, 59348, 59377, 59407, 59436, 59466, 59495, 59525, 59554, 59584, 59613, 59643, 59672, 59702, 59731, 59761, 59791, 59820, 59850, 59879, 59909, 59939, 59968, 59997, 60027, 60056, 60086, 60115, 60145, 60174, 60204, 60234, 60264, 60293, 60323, 60352, 60381, 60411, 60440, 60469, 60499, 60528, 60558, 60588, 60618, 60648, 60677, 60707, 60736, 60765, 60795, 60824, 60853, 60883, 60912, 60942, 60972, 61002, 61031, 61061, 61090, 61120, 61149, 61179, 61208, 61237, 61267, 61296, 61326, 61356, 61385, 61415, 61445, 61474, 61504, 61533, 61563, 61592, 61621, 61651, 61680, 61710, 61739, 61769, 61799, 61828, 61858, 61888, 61917, 61947, 61976, 62006, 62035, 62064, 62094, 62123, 62153, 62182, 62212, 62242, 62271, 62301, 62331, 62360, 62390, 62419, 62448, 62478, 62507, 62537, 62566, 62596, 62625, 62655, 62685, 62715, 62744, 62774, 62803, 62832, 62862, 62891, 62921, 62950, 62980, 63009, 63039, 63069, 63099, 63128, 63157, 63187, 63216, 63246, 63275, 63305, 63334, 63363, 63393, 63423, 63453, 63482, 63512, 63541, 63571, 63600, 63630, 63659, 63689, 63718, 63747, 63777, 63807, 63836, 63866, 63895, 63925, 63955, 63984, 64014, 64043, 64073, 64102, 64131, 64161, 64190, 64220, 64249, 64279, 64309, 64339, 64368, 64398, 64427, 64457, 64486, 64515, 64545, 64574, 64603, 64633, 64663, 64692, 64722, 64752, 64782, 64811, 64841, 64870, 64899, 64929, 64958, 64987, 65017, 65047, 65076, 65106, 65136, 65166, 65195, 65225, 65254, 65283, 65313, 65342, 65371, 65401, 65431, 65460, 65490, 65520, 65549, 65579, 65608, 65638, 65667, 65697, 65726, 65755, 65785, 65815, 65844, 65874, 65903, 65933, 65963, 65992, 66022, 66051, 66081, 66110, 66140, 66169, 66199, 66228, 66258, 66287, 66317, 66346, 66376, 66405, 66435, 66465, 66494, 66524, 66553, 66583, 66612, 66641, 66671, 66700, 66730, 66760, 66789, 66819, 66849, 66878, 66908, 66937, 66967, 66996, 67025, 67055, 67084, 67114, 67143, 67173, 67203, 67233, 67262, 67292, 67321, 67351, 67380, 67409, 67439, 67468, 67497, 67527, 67557, 67587, 67617, 67646, 67676, 67705, 67735, 67764, 67793, 67823, 67852, 67882, 67911, 67941, 67971, 68e3, 68030, 68060, 68089, 68119, 68148, 68177, 68207, 68236, 68266, 68295, 68325, 68354, 68384, 68414, 68443, 68473, 68502, 68532, 68561, 68591, 68620, 68650, 68679, 68708, 68738, 68768, 68797, 68827, 68857, 68886, 68916, 68946, 68975, 69004, 69034, 69063, 69092, 69122, 69152, 69181, 69211, 69240, 69270, 69300, 69330, 69359, 69388, 69418, 69447, 69476, 69506, 69535, 69565, 69595, 69624, 69654, 69684, 69713, 69743, 69772, 69802, 69831, 69861, 69890, 69919, 69949, 69978, 70008, 70038, 70067, 70097, 70126, 70156, 70186, 70215, 70245, 70274, 70303, 70333, 70362, 70392, 70421, 70451, 70481, 70510, 70540, 70570, 70599, 70629, 70658, 70687, 70717, 70746, 70776, 70805, 70835, 70864, 70894, 70924, 70954, 70983, 71013, 71042, 71071, 71101, 71130, 71159, 71189, 71218, 71248, 71278, 71308, 71337, 71367, 71397, 71426, 71455, 71485, 71514, 71543, 71573, 71602, 71632, 71662, 71691, 71721, 71751, 71781, 71810, 71839, 71869, 71898, 71927, 71957, 71986, 72016, 72046, 72075, 72105, 72135, 72164, 72194, 72223, 72253, 72282, 72311, 72341, 72370, 72400, 72429, 72459, 72489, 72518, 72548, 72577, 72607, 72637, 72666, 72695, 72725, 72754, 72784, 72813, 72843, 72872, 72902, 72931, 72961, 72991, 73020, 73050, 73080, 73109, 73139, 73168, 73197, 73227, 73256, 73286, 73315, 73345, 73375, 73404, 73434, 73464, 73493, 73523, 73552, 73581, 73611, 73640, 73669, 73699, 73729, 73758, 73788, 73818, 73848, 73877, 73907, 73936, 73965, 73995, 74024, 74053, 74083, 74113, 74142, 74172, 74202, 74231, 74261, 74291, 74320, 74349, 74379, 74408, 74437, 74467, 74497, 74526, 74556, 74586, 74615, 74645, 74675, 74704, 74733, 74763, 74792, 74822, 74851, 74881, 74910, 74940, 74969, 74999, 75029, 75058, 75088, 75117, 75147, 75176, 75206, 75235, 75264, 75294, 75323, 75353, 75383, 75412, 75442, 75472, 75501, 75531, 75560, 75590, 75619, 75648, 75678, 75707, 75737, 75766, 75796, 75826, 75856, 75885, 75915, 75944, 75974, 76003, 76032, 76062, 76091, 76121, 76150, 76180, 76210, 76239, 76269, 76299, 76328, 76358, 76387, 76416, 76446, 76475, 76505, 76534, 76564, 76593, 76623, 76653, 76682, 76712, 76741, 76771, 76801, 76830, 76859, 76889, 76918, 76948, 76977, 77007, 77036, 77066, 77096, 77125, 77155, 77185, 77214, 77243, 77273, 77302, 77332, 77361, 77390, 77420, 77450, 77479, 77509, 77539, 77569, 77598, 77627, 77657, 77686, 77715, 77745, 77774, 77804, 77833, 77863, 77893, 77923, 77952, 77982, 78011, 78041, 78070, 78099, 78129, 78158, 78188, 78217, 78247, 78277, 78307, 78336, 78366, 78395, 78425, 78454, 78483, 78513, 78542, 78572, 78601, 78631, 78661, 78690, 78720, 78750, 78779, 78808, 78838, 78867, 78897, 78926, 78956, 78985, 79015, 79044, 79074, 79104, 79133, 79163, 79192, 79222, 79251, 79281, 79310, 79340, 79369, 79399, 79428, 79458, 79487, 79517, 79546, 79576, 79606, 79635, 79665, 79695, 79724, 79753, 79783, 79812, 79841, 79871, 79900, 79930, 79960, 79990] },
        s = /(\[[^\[]*\])|(\\)?i(Mo|MM?M?M?|Do|DDDo|DD?D?D?|w[o|w]?|YYYYY|YYYY|YY|gg(ggg?)?)|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,
        r = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        i = /\d\d?/,
        d = /\d{1,3}/,
        o = /\d{3}/,
        _ = /\d{1,4}/,
        u = /[+\-]?\d{1,6}/,
        m = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.?)|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        l = /Z|[\+\-]\d\d:?\d\d/i,
        h = /T/i,
        c = /[\+\-]?\d+(\.\d{1,3})?/,
        M = { hd: "idate", hm: "imonth", hy: "iyear" },
        p = {},
        f = "DDD w M D".split(" "),
        Y = "M D w".split(" "),
        L = { iM: function() { return this.iMonth() + 1 }, iMMM: function(e) { return this.localeData().iMonthsShort(this, e) }, iMMMM: function(e) { return this.localeData().iMonths(this, e) }, iD: function() { return this.iDate() }, iDDD: function() { return this.iDayOfYear() }, iw: function() { return this.iWeek() }, iYY: function() { return g(this.iYear() % 100, 2) }, iYYYY: function() { return g(this.iYear(), 4) }, iYYYYY: function() { return g(this.iYear(), 5) }, igg: function() { return g(this.iWeekYear() % 100, 2) }, igggg: function() { return this.iWeekYear() }, iggggg: function() { return g(this.iWeekYear(), 5) } };

    function y(e, t) { return function(a) { return g(e.call(this, a), t) } }

    function D(e, t) { return function(a) { return this.localeData().ordinal(e.call(this, a), t) } }
    for (; f.length;) t = f.pop(), L["i" + t + "o"] = D(L["i" + t], t);
    for (; Y.length;) t = Y.pop(), L["i" + t + t] = y(L["i" + t], 2);

    function k(e, t) { var a; for (a in t) t.hasOwnProperty(a) && (e[a] = t[a]); return e }

    function g(e, t) { for (var a = e + ""; a.length < t;) a = "0" + a; return a }

    function w(e) { return e ? M[e] || e.toLowerCase().replace(/(.)s$/, "$1") : e }

    function T(e, t, a, n) {
        var s = e._isUTC ? "UTC" : "";
        e._d["set" + s + "FullYear"](t), e._d["set" + s + "Month"](a), e._d["set" + s + "Date"](n)
    }

    function v(e) {
        function t() {}
        return t.prototype = e, new t
    }
    L.iDDDD = y(L.iDDD, 3), k((a = e.localeData(), Object.getPrototypeOf ? Object.getPrototypeOf(a) : "".__proto__ ? a.__proto__ : a.constructor.prototype), {
        _iMonths: ["Muharram", "Safar", "Rabi' al-Awwal", "Rabi' al-Thani", "Jumada al-Ula", "Jumada al-Alkhirah", "Rajab", "Sha’ban", "Ramadhan", "Shawwal", "Thul-Qi’dah", "Thul-Hijjah"],
        iMonths: function(e) { return this._iMonths[e.iMonth()] },
        _iMonthsShort: ["Muh", "Saf", "Rab-I", "Rab-II", "Jum-I", "Jum-II", "Raj", "Sha", "Ram", "Shw", "Dhu-Q", "Dhu-H"],
        iMonthsShort: function(e) { return this._iMonthsShort[e.iMonth()] },
        iMonthsParse: function(e) {
            var t, a, n;
            for (this._iMonthsParse || (this._iMonthsParse = []), t = 0; t < 12; t += 1)
                if (this._iMonthsParse[t] || (a = F([2e3, (2 + t) % 12, 25]), n = "^" + this.iMonths(a, "") + "$|^" + this.iMonthsShort(a, "") + "$", this._iMonthsParse[t] = new RegExp(n.replace(".", ""), "i")), this._iMonthsParse[t].test(e)) return t
        }
    });
    var b = { iMonths: "محرم_صفر_ربيع الأول_ربيع الثاني_جمادى الأولى_جمادى الآخرة_رجب_شعبان_رمضان_شوال_ذو القعدة_ذو الحجة".split("_"), iMonthsShort: "محرم_صفر_ربيع ١_ربيع ٢_جمادى ١_جمادى ٢_رجب_شعبان_رمضان_شوال_ذو القعدة_ذو الحجة".split("_") };
    if ("function" == typeof e.updateLocale) e.updateLocale("ar-sa", b);
    else {
        var S = e.locale();
        e.defineLocale("ar-sa", b), e.locale(S)
    }

    function H(t, a) {
        switch (t) {
            case "iDDDD":
                return o;
            case "iYYYY":
                return _;
            case "iYYYYY":
                return u;
            case "iDDD":
                return d;
            case "iMMM":
            case "iMMMM":
                return m;
            case "iMM":
            case "iDD":
            case "iYY":
            case "iM":
            case "iD":
                return i;
            case "DDDD":
                return o;
            case "YYYY":
                return _;
            case "YYYYY":
                return u;
            case "S":
            case "SS":
            case "SSS":
            case "DDD":
                return d;
            case "MMM":
            case "MMMM":
            case "dd":
            case "ddd":
            case "dddd":
                return m;
            case "a":
            case "A":
                return e.localeData(a._l)._meridiemParse;
            case "X":
                return c;
            case "Z":
            case "ZZ":
                return l;
            case "T":
                return h;
            case "MM":
            case "DD":
            case "YY":
            case "HH":
            case "hh":
            case "mm":
            case "ss":
            case "M":
            case "D":
            case "d":
            case "H":
            case "h":
            case "m":
            case "s":
                return i;
            default:
                return new RegExp(t.replace("\\", ""))
        }
    }

    function j(t, a, n) {
        var s, r = n._a;
        switch (t) {
            case "iM":
            case "iMM":
                r[1] = null == a ? 0 : ~~a - 1;
                break;
            case "iMMM":
            case "iMMMM":
                null != (s = e.localeData(n._l).iMonthsParse(a)) ? r[1] = s : n._isValid = !1;
                break;
            case "iD":
            case "iDD":
            case "iDDD":
            case "iDDDD":
                null != a && (r[2] = ~~a);
                break;
            case "iYY":
                r[0] = ~~a + (~~a > 47 ? 1300 : 1400);
                break;
            case "iYYYY":
            case "iYYYYY":
                r[0] = ~~a
        }
        null == a && (n._isValid = !1)
    }

    function x(e) {
        var t, a, n, r = e._f.match(s),
            i = e._i,
            d = r.length;
        for (e._a = [], t = 0; t < d; t += 1)(n = (H(a = r[t], e).exec(i) || [])[0]) && (i = i.slice(i.indexOf(n) + n.length)), L[a] && j(a, n, e);
        return i && (e._il = i),
            function(e) {
                var t, a, n = e._a[0],
                    s = e._a[1],
                    r = e._a[2];
                return null == n && null == s && null == r ? [0, 0, 1] : (n = n || 0, s = s || 0, ((r = r || 1) < 1 || r > F.iDaysInMonth(n, s)) && (e._isValid = !1), a = A((t = C(n, s, r)).gy, t.gm, t.gd), e._hDiff = 0, ~~a.hy !== n && (e._hDiff += 1), ~~a.hm !== s && (e._hDiff += 1), ~~a.hd !== r && (e._hDiff += 1), [t.gy, t.gm, t.gd])
            }(e)
    }

    function W(e, t, a) {
        var n, s = a - t,
            r = a - e.day();
        return r > s && (r -= 7), r < s - 7 && (r += 7), n = F(e).add(r, "d"), { week: Math.ceil(n.iDayOfYear() / 7), year: n.iYear() }
    }

    function P(t, a, n, r) {
        var i, d, o, _ = { _i: t, _f: a, _l: n };
        if (a) {
            if (function(e) { return "[object Array]" === Object.prototype.toString.call(e) }(a)) return function(e, t) { var a, n, s, r, i, d, o = e._f.length; if (0 === o) return P(new Date(NaN)); for (a = 0; a < o; a += 1) n = e._f[a], i = 0, (s = P(e._i, n, e._l, t)).isValid() && (i += s._hDiff, s._il && (i += s._il.length), (null == d || i < d) && (d = i, r = s)); return r }(_, r);
            i = x(_),
                function(e) {
                    var t, a, n, r = e._i,
                        i = "",
                        d = "",
                        o = e._f.match(s),
                        _ = o.length;
                    for (t = 0; t < _; t += 1)(n = (H(a = o[t], e).exec(r) || [])[0]) && (r = r.slice(r.indexOf(n) + n.length)), L[a] instanceof Function || (d += a, n && (i += n));
                    e._i = i, e._f = d
                }(_), a = "YYYY-MM-DD-" + _._f, t = g(i[0], 4) + "-" + g(i[1] + 1, 2) + "-" + g(i[2], 2) + "-" + _._i
        }
        return d = r ? e.utc(t, a, n) : e(t, a, n), !1 === _._isValid && (d._isValid = !1), d._hDiff = _._hDiff || 0, k(o = v(F.fn), d), o
    }

    function F(e, t, a) { return P(e, t, a, !1) }

    function A(e, t, a) {
        var s, r, i, d, o, _, u, m, l = (s = function(e, t, a) { var n = O(1461 * (e + O(t - 8, 6) + 100100), 4) + O(153 * E(t + 9, 12) + 2, 5) + a - 34840408; return n = n - O(3 * O(e + 100100 + O(t - 8, 6), 100), 4) + 752 }(e, t + 1, a), i = function(e) {
            for (var t = 0; t < n.ummalquraData.length; t += 1)
                if (n.ummalquraData[t] > e) return t
        }(r = s - 24e5), d = i + 16260, o = Math.floor((d - 1) / 12), _ = o + 1, u = d - 12 * o, m = r - n.ummalquraData[i - 1] + 1, { hy: _, hm: u, hd: m });
        return l.hm -= 1, l
    }

    function C(e, t, a) { var s, r, i, d, o, _ = (s = function(e, t, a) { var s = z(e, t); return a + n.ummalquraData[s - 1] - 1 + 24e5 }(e, t + 1, a), r = (r = 4 * s + 139361631) + 4 * O(3 * O(4 * s + 183187720, 146097), 4) - 3908, i = 5 * O(E(r, 1461), 4) + 308, d = O(E(i, 153), 5) + 1, o = E(O(i, 153), 12) + 1, { gy: O(r, 1461) - 100100 + O(8 - o, 6), gm: o, gd: d }); return _.gm -= 1, _ }
    return k(F, e), F.fn = v(e.fn), F.utc = function(e, t, a) { return P(e, t, a, !0) }, F.fn.format = function(t) {
        var a, n, i = this;
        if (t) {
            for (a = 5, n = function(e) { return i.localeData().longDateFormat(e) || e }; a > 0 && r.test(t);) a -= 1, t = t.replace(r, n);
            p[t] || (p[t] = function(e) {
                var t, a = e.match(s),
                    n = a.length;
                for (t = 0; t < n; t += 1) L[a[t]] && (a[t] = L[a[t]]);
                return function(s) { var r = ""; for (t = 0; t < n; t += 1) r += a[t] instanceof Function ? "[" + a[t].call(s, e) + "]" : a[t]; return r }
            }(t)), t = p[t](this)
        }
        return e.fn.format.call(this, t)
    }, F.fn.iYear = function(t) { var a, n, s; return "number" == typeof t ? (n = A(this.year(), this.month(), this.date()), a = Math.min(n.hd, F.iDaysInMonth(t, n.hm)), T(this, (s = C(t, n.hm, a)).gy, s.gm, s.gd), this.month() === s.gm && this.date() === s.gd && this.year() === s.gy || T(this, s.gy, s.gm, s.gd), e.updateOffset(this), this) : A(this.year(), this.month(), this.date()).hy }, F.fn.iMonth = function(t) {
        var a, n, s;
        if (null != t) {
            if ("string" == typeof t) {
                if (!((t = this.localeData().iMonthsParse(t)) >= 0)) return this;
                t -= 1
            }
            return n = A(this.year(), this.month(), this.date()), a = Math.min(n.hd, F.iDaysInMonth(n.hy, t)), this.iYear(n.hy + O(t, 12)), (t = E(t, 12)) < 0 && (t += 12, this.iYear(this.iYear() - 1)), T(this, (s = C(this.iYear(), t, a)).gy, s.gm, s.gd), this.month() === s.gm && this.date() === s.gd && this.year() === s.gy || T(this, s.gy, s.gm, s.gd), e.updateOffset(this), this
        }
        return A(this.year(), this.month(), this.date()).hm
    }, F.fn.iDate = function(t) { var a, n; return "number" == typeof t ? (T(this, (n = C((a = A(this.year(), this.month(), this.date())).hy, a.hm, t)).gy, n.gm, n.gd), this.month() === n.gm && this.date() === n.gd && this.year() === n.gy || T(this, n.gy, n.gm, n.gd), e.updateOffset(this), this) : A(this.year(), this.month(), this.date()).hd }, F.fn.iDayOfYear = function(e) { var t = Math.round((F(this).startOf("day") - F(this).startOf("iYear")) / 864e5) + 1; return null == e ? t : this.add(e - t, "d") }, F.fn.iDaysInMonth = function() { return parseInt(F(this).endOf("iMonth").format("iDD")) }, F.fn.iWeek = function(e) { var t = W(this, this.localeData()._week.dow, this.localeData()._week.doy).week; return null == e ? t : this.add(7 * (e - t), "d") }, F.fn.iWeekYear = function(e) { var t = W(this, this.localeData()._week.dow, this.localeData()._week.doy).year; return null == e ? t : this.add(e - t, "y") }, F.fn.add = function(t, a) { var n; return null === a || isNaN(+a) || (n = t, t = a, a = n), "iyear" === (a = w(a)) ? this.iYear(this.iYear() + t) : "imonth" === a ? this.iMonth(this.iMonth() + t) : "idate" === a ? this.iDate(this.iDate() + t) : e.fn.add.call(this, t, a), this }, F.fn.subtract = function(t, a) { var n; return null === a || isNaN(+a) || (n = t, t = a, a = n), "iyear" === (a = w(a)) ? this.iYear(this.iYear() - t) : "imonth" === a ? this.iMonth(this.iMonth() - t) : "idate" === a ? this.iDate(this.iDate() - t) : e.fn.subtract.call(this, t, a), this }, F.fn.startOf = function(t) { return "iyear" === (t = w(t)) || "imonth" === t ? ("iyear" === t && this.iMonth(0), this.iDate(1), this.hours(0), this.minutes(0), this.seconds(0), this.milliseconds(0), this) : e.fn.startOf.call(this, t) }, F.fn.endOf = function(e) { return void 0 === (e = w(e)) || "milisecond" === e ? this : this.startOf(e).add(1, "isoweek" === e ? "week" : e).subtract(1, "milliseconds") }, F.fn.clone = function() { return F(this) }, F.fn.iYears = F.fn.iYear, F.fn.iMonths = F.fn.iMonth, F.fn.iDates = F.fn.iDate, F.fn.iWeeks = F.fn.iWeek, F.iDaysInMonth = function(e, t) { var a = z(e, t + 1); return n.ummalquraData[a] - n.ummalquraData[a - 1] }, F.iConvert = { toHijri: A, toGregorian: C }, F;

    function O(e, t) { return ~~(e / t) }

    function E(e, t) { return e - ~~(e / t) * t }

    function z(e, t) { return 12 * (e - 1) + 1 + (t - 1) - 16260 }
}),
function(e) {
    "use strict";
    if ("function" == typeof define && define.amd) define(["jquery", "moment"], e);
    else if ("object" == typeof exports) e(require("jquery"), require("moment"));
    else {
        if ("undefined" == typeof jQuery) throw "bootstrap-hijri-datepicker requires jQuery to be loaded first";
        if ("undefined" == typeof moment) throw "bootstrap-hijri-datepicker requires Moment.js to be loaded first";
        e(jQuery, moment)
    }
}(function(e, t) {
    "use strict";
    if (!t) throw new Error("bootstrap-hijri-datepicker requires Moment.js to be loaded first");
    var a = function(a, n) {
        var s, r, i, d, o, _, u, m, l, h = {},
            c = !0,
            M = !1,
            p = !1,
            f = 0,
            Y = [{ clsName: "days", navFnc: n.hijri ? "iMonth" : "Month", navStep: 1 }, { clsName: "months", navFnc: n.hijri ? "iYear" : "y", navStep: 1 }, { clsName: "years", navFnc: n.hijri ? "iYear" : "y", navStep: 10 }, { clsName: "decades", navFnc: n.hijri ? "iYear" : "y", navStep: 100 }],
            L = ["days", "months", "years", "decades"],
            y = ["top", "bottom", "auto"],
            D = ["left", "right", "auto"],
            k = ["default", "top", "bottom"],
            g = { up: 38, 38: "up", down: 40, 40: "down", left: 37, 37: "left", right: 39, 39: "right", tab: 9, 9: "tab", escape: 27, 27: "escape", enter: 13, 13: "enter", pageUp: 33, 33: "pageUp", pageDown: 34, 34: "pageDown", shift: 16, 16: "shift", control: 17, 17: "control", space: 32, 32: "space", t: 84, 84: "t", delete: 46, 46: "delete" },
            w = {},
            T = function(e) { var a, s, r, i, d = !1; return void 0 !== t.tz && void 0 !== n.timeZone && null !== n.timeZone && "" !== n.timeZone && (d = !0), null == e ? a = d ? t().tz(n.timeZone).startOf("day") : t().startOf("day") : d ? (s = t().tz(n.timeZone).utcOffset(), t(e, _, n.useStrict).utcOffset() !== s ? (r = t().tz(n.timeZone).format("Z"), i = t(e, _, n.useStrict).format("YYYY-MM-DD[T]HH:mm:ss") + r, a = t(i, _, n.useStrict).tz(n.timeZone)) : a = t(e, _, n.useStrict).tz(n.timeZone)) : a = t(e, _, n.useStrict), a },
            v = function(e) {
                if ("string" != typeof e || e.length > 1) throw new TypeError("isEnabled expects a single character string parameter");
                switch (e) {
                    case "y":
                        return -1 !== o.indexOf("Y");
                    case "M":
                        return -1 !== o.indexOf("M");
                    case "d":
                        return -1 !== o.toLowerCase().indexOf("d");
                    case "h":
                    case "H":
                        return -1 !== o.toLowerCase().indexOf("hh:");
                    case "m":
                        return -1 !== o.indexOf("m");
                    case "s":
                        return -1 !== o.indexOf("s");
                    default:
                        return !1
                }
            },
            b = function() { return v("h") || v("m") || v("s") },
            S = function() { return v("y") || v("M") || v("d") },
            H = function() {
                var t, a, s, r, i, o, _, u, m, l = e("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),
                    h = e("<div>").addClass("datepicker").append((u = e("<thead>").append(e("<tr>").append(e("<th>").addClass("prev").attr("data-action", "previous").append(e("<span>").html(n.icons.previous))).append(e("<th>").addClass("picker-switch").attr("data-action", "pickerSwitch").attr("colspan", n.calendarWeeks ? "6" : "5")).append(e("<th>").addClass("next").attr("data-action", "next").append(e("<span>").html(n.icons.next)))), m = e("<tbody>").append(e("<tr>").append(e("<td>").attr("colspan", n.calendarWeeks ? "8" : "7"))), [e("<div>").addClass("datepicker-days").append(e("<table>").addClass("table-condensed").append(u).append(e("<tbody>"))), e("<div>").addClass("datepicker-months").append(e("<table>").addClass("table-condensed").append(u.clone()).append(m.clone())), e("<div>").addClass("datepicker-years").append(e("<table>").addClass("table-condensed").append(u.clone()).append(m.clone())), e("<div>").addClass("datepicker-decades").append(e("<table>").addClass("table-condensed").append(u.clone()).append(m.clone()))])),
                    c = e("<div>").addClass("timepicker").append((r = e("<div>").addClass("timepicker-hours").append(e("<table>").addClass("table-condensed")), i = e("<div>").addClass("timepicker-minutes").append(e("<table>").addClass("table-condensed")), o = e("<div>").addClass("timepicker-seconds").append(e("<table>").addClass("table-condensed")), _ = [(t = e("<tr>"), a = e("<tr>"), s = e("<tr>"), v("h") && (t.append(e("<td>").append(e("<a>").attr({ href: "#", tabindex: "-1", title: n.tooltips.incrementHour }).addClass("btn").attr("data-action", "incrementHours").append(e("<span>").addClass(n.icons.up)))), a.append(e("<td>").append(e("<span>").addClass("timepicker-hour").attr({ "data-time-component": "hours", title: n.tooltips.pickHour }).attr("data-action", "showHours"))), s.append(e("<td>").append(e("<a>").attr({ href: "#", tabindex: "-1", title: n.tooltips.decrementHour }).addClass("btn").attr("data-action", "decrementHours").append(e("<span>").addClass(n.icons.down))))), v("m") && (v("h") && (t.append(e("<td>").addClass("separator")), a.append(e("<td>").addClass("separator").html(":")), s.append(e("<td>").addClass("separator"))), t.append(e("<td>").append(e("<a>").attr({ href: "#", tabindex: "-1", title: n.tooltips.incrementMinute }).addClass("btn").attr("data-action", "incrementMinutes").append(e("<span>").addClass(n.icons.up)))), a.append(e("<td>").append(e("<span>").addClass("timepicker-minute").attr({ "data-time-component": "minutes", title: n.tooltips.pickMinute }).attr("data-action", "showMinutes"))), s.append(e("<td>").append(e("<a>").attr({ href: "#", tabindex: "-1", title: n.tooltips.decrementMinute }).addClass("btn").attr("data-action", "decrementMinutes").append(e("<span>").addClass(n.icons.down))))), v("s") && (v("m") && (t.append(e("<td>").addClass("separator")), a.append(e("<td>").addClass("separator").html(":")), s.append(e("<td>").addClass("separator"))), t.append(e("<td>").append(e("<a>").attr({ href: "#", tabindex: "-1", title: n.tooltips.incrementSecond }).addClass("btn").attr("data-action", "incrementSeconds").append(e("<span>").addClass(n.icons.up)))), a.append(e("<td>").append(e("<span>").addClass("timepicker-second").attr({ "data-time-component": "seconds", title: n.tooltips.pickSecond }).attr("data-action", "showSeconds"))), s.append(e("<td>").append(e("<a>").attr({ href: "#", tabindex: "-1", title: n.tooltips.decrementSecond }).addClass("btn").attr("data-action", "decrementSeconds").append(e("<span>").addClass(n.icons.down))))), d || (t.append(e("<td>").addClass("separator")), a.append(e("<td>").append(e("<button>").addClass("btn btn-primary").attr({ "data-action": "togglePeriod", tabindex: "-1", title: n.tooltips.togglePeriod }))), s.append(e("<td>").addClass("separator"))), e("<div>").addClass("timepicker-picker").append(e("<table>").addClass("table-condensed").append([t, a, s])))], v("h") && _.push(r), v("m") && _.push(i), v("s") && _.push(o), _)),
                    M = e("<ul>").addClass("list-unstyled"),
                    p = e("<li>").addClass("picker-switch" + (n.collapse ? " accordion-toggle" : "")).append(function() {
                        var t = [];
                        if (n.showTodayButton && t.push(e("<td>").append(e("<a>").attr({ "data-action": "today", title: n.tooltips.today }).append(e("<span>").html(n.icons.today)))), !n.sideBySide && S() && b() && t.push(e("<td>").append(e("<a>").attr({ "data-action": "togglePicker", title: n.tooltips.selectTime }).append(e("<span>").addClass(n.icons.time)))), n.showClear && t.push(e("<td>").append(e("<a>").attr({ "data-action": "clear", title: n.tooltips.clear }).append(e("<span>").html(n.icons.clear)))), n.showClose && t.push(e("<td>").append(e("<a>").attr({ "data-action": "close", title: n.tooltips.close }).append(e("<span>").html(n.icons.close)))), n.showSwitcher) {
                            let a = n.hijriText;
                            n.hijri && (a = n.gregorianText), t.push(e("<td>").append(e("<a>").attr({ "data-action": "switchDate", title: n.tooltips.close }).append(e('<span class="data-switch-button">').html(a))))
                        }
                        return e("<table>").addClass("table-condensed").append(e("<tbody>").append(e("<tr>").append(t)))
                    }());
                return n.inline && l.removeClass("dropdown-menu"), d && l.addClass("usetwentyfour"), v("s") && !d && l.addClass("wider"), n.sideBySide && S() && b() ? (l.addClass("timepicker-sbs"), "top" === n.toolbarPlacement && l.append(p), l.append(e("<div>").addClass("row").append(h.addClass("col-md-6")).append(c.addClass("col-md-6"))), "bottom" === n.toolbarPlacement && l.append(p), l) : ("top" === n.toolbarPlacement && M.append(p), S() && M.append(e("<li>").addClass(n.collapse && b() ? "collapse in" : "").append(h)), "default" === n.toolbarPlacement && M.append(p), b() && M.append(e("<li>").addClass(n.collapse && S() ? "collapse" : "").append(c)), "bottom" === n.toolbarPlacement && M.append(p), l.append(M))
            },
            j = function() {
                var t, s = (M || a).position(),
                    r = (M || a).offset(),
                    i = n.widgetPositioning.vertical,
                    d = n.widgetPositioning.horizontal;
                if (n.widgetParent) t = n.widgetParent.append(p);
                else if (a.is("input")) t = a.after(p).parent();
                else {
                    if (n.inline) return void(t = a.append(p));
                    t = a, a.children().first().after(p)
                }
                if ("auto" === i && (i = r.top + 1.5 * p.height() >= e(window).height() + e(window).scrollTop() && p.height() + a.outerHeight() < r.top ? "top" : "bottom"), "auto" === d && (d = t.width() < r.left + p.outerWidth() / 2 && r.left + p.outerWidth() > e(window).width() ? "right" : "left"), "top" === i ? p.addClass("top").removeClass("bottom") : p.addClass("bottom").removeClass("top"), "right" === d ? p.addClass("pull-right") : p.removeClass("pull-right"), "relative" !== t.css("position") && (t = t.parents().filter(function() { return "relative" === e(this).css("position") }).first()), 0 === t.length) throw new Error("datetimepicker component should be placed within a relative positioned container");
                p.css({ top: "top" === i ? "auto" : s.top + a.outerHeight(), bottom: "top" === i ? s.top + a.outerHeight() : "auto", left: "left" === d ? t === a ? 0 : s.left : "auto", right: "left" === d ? "auto" : t.outerWidth() - a.outerWidth() - (t === a ? 0 : s.left) })
            },
            x = function(e) { "dp.change" === e.type && (e.date && e.date.isSame(e.oldDate) || !e.date && !e.oldDate) || a.trigger(e) },
            W = function(e) { "y" === e && (e = "YYYY"), "M" === e && (e = "YYYY MMMM"), x({ type: "dp.update", change: e, viewDate: r.clone() }) },
            P = function(e) { p && (e && (u = Math.max(f, Math.min(2, u + e))), p.find(".datepicker > div").hide().filter(".datepicker-" + Y[u].clsName).show()) },
            F = function(t, a) { if (!t.isValid()) return !1; if (n.disabledDates && "d" === a && (s = t, !0 === n.disabledDates[s.format("YYYY-MM-DD")])) return !1; var s; if (n.enabledDates && "d" === a && ! function(e) { return !0 === n.enabledDates[e.format("YYYY-MM-DD")] }(t)) return !1; if (n.minDate && t.isBefore(n.minDate, a)) return !1; if (n.maxDate && t.isAfter(n.maxDate, a)) return !1; if (n.daysOfWeekDisabled && "d" === a && -1 !== n.daysOfWeekDisabled.indexOf(t.day())) return !1; if (n.disabledHours && ("h" === a || "m" === a || "s" === a) && function(e) { return !0 === n.disabledHours[e.format("H")] }(t)) return !1; if (n.enabledHours && ("h" === a || "m" === a || "s" === a) && ! function(e) { return !0 === n.enabledHours[e.format("H")] }(t)) return !1; if (n.disabledTimeIntervals && ("h" === a || "m" === a || "s" === a)) { var r = !1; if (e.each(n.disabledTimeIntervals, function() { if (t.isBetween(this[0], this[1])) return r = !0, !1 }), r) return !1 } return !0 },
            A = function(e) {
                let t = parseInt(e),
                    a = parseInt(n.maxDate.format("iYYYY"));
                return t >= parseInt(n.minDate.format("iYYYY")) && t <= a
            },
            C = function() {
                for (var t = [], a = r.clone().startOf("y").startOf("day"); a.isSame(r, "years");) t.push(e("<span>").attr("data-action", "selectMonth").addClass("month").text(a.format("MMM"))), a.add(1, "months");
                p.find(".datepicker-months td").empty().append(t)
            },
            O = function() {
                let t = [],
                    a = r.clone().startOf("hy").hour(12),
                    n = 1;
                for (; a.iYear() === r.iYear();) t.push(e("<span>").attr("data-action", "selectMonth").attr("data-month", n).addClass("month").text(a.format("iMMM"))), a.add(1, "iMonth"), n++;
                p.find(".datepicker-months td").empty().append(t)
            },
            E = function() {
                let a = p.find(".datepicker-months"),
                    i = a.find("th"),
                    d = a.find("tbody").find("span");
                i.eq(0).find("span").attr("title", n.tooltips.prevYear), i.eq(1).attr("title", n.tooltips.selectYear), i.eq(2).find("span").attr("title", n.tooltips.nextYear), a.find(".disabled").removeClass("disabled"), i.eq(1).text(r.iYear()), A(r.clone().subtract(1, "iYear").format("iYYYY")) || i.eq(0).addClass("disabled"), A(r.clone().add(1, "iYear").format("iYYYY")) || i.eq(2).addClass("disabled"), d.removeClass("active");
                let o = r.clone().format("iYYYY-iM") + "-01",
                    _ = t(o, "iYYYY-iM-iD");
                d.each(function(a) {
                    let i = _.format("iYYYY-") + (a + 1) + "-1",
                        d = t(i, "iYYYY-iM-iD"),
                        o = s.format("iM");
                    s.isSame(r, "iM") && o && e(this).attr("data-month") == o && e(this).addClass("active"),
                        function(e) {
                            if (!e.isValid()) return;
                            let t = parseInt(e.format("iYYYYiMM")),
                                a = parseInt(n.maxDate.format("iYYYYiMM"));
                            return t >= parseInt(n.minDate.format("iYYYYiMM")) && t <= a
                        }(d) || e(this).addClass("disabled")
                })
            },
            z = function() {
                if (n.hijri) J();
                else {
                    var t, a, i, d, o = p.find(".datepicker-days"),
                        _ = o.find("th"),
                        u = [];
                    if (S()) {
                        for (_.eq(0).find("span").attr("title", n.tooltips.prevMonth), _.eq(1).attr("title", n.tooltips.selectMonth), _.eq(2).find("span").attr("title", n.tooltips.nextMonth), o.find(".disabled").removeClass("disabled"), _.eq(1).text(r.format(n.dayViewHeaderFormat)), F(r.clone().subtract(1, "months"), "months") || _.eq(0).addClass("disabled"), F(r.clone().add(1, "months"), "months") || _.eq(2).addClass("disabled"), t = r.clone().startOf("months").startOf("weeks").startOf("days"), d = 0; d < 42; d++) 0 === t.weekday() && (a = e("<tr>"), n.calendarWeeks && a.append('<td class="cw">' + t.week() + "</td>"), u.push(a)), i = "", t.isBefore(r, "months") && (i += " old"), t.isAfter(r, "months") && (i += " new"), t.isSame(s, "days") && !c && (i += " active"), F(t, "days") || (i += " disabled"), t.isSame(T(), "days") && (i += " today"), 6 !== t.day() && 5 !== t.day() || (i += " weekend"), a.append('<td data-action="selectDay" data-day="' + t.format("L") + '" class="day' + i + '">' + t.date() + "</td>"), t.add(1, "days");
                        o.find("tbody").empty().append(u),
                            function() {
                                let t = p.find(".datepicker-months"),
                                    a = t.find("th"),
                                    i = t.find("tbody").find("span");
                                a.eq(0).find("span").attr("title", n.tooltips.prevYear), a.eq(1).attr("title", n.tooltips.selectYear), a.eq(2).find("span").attr("title", n.tooltips.nextYear), t.find(".disabled").removeClass("disabled"), F(r.clone().subtract(1, "years"), "y") || a.eq(0).addClass("disabled"), a.eq(1).text(r.year()), F(r.clone().add(1, "y"), "y") || a.eq(2).addClass("disabled"), i.removeClass("active"), s.isSame(r, "y") && !c && i.eq(s.month()).addClass("active"), i.each(function(t) { F(r.clone().month(t), "M") || e(this).addClass("disabled") })
                            }(),
                            function() {
                                var e = p.find(".datepicker-years"),
                                    t = e.find("th"),
                                    a = r.clone().subtract(5, "y"),
                                    i = r.clone().add(6, "y"),
                                    d = "";
                                for (t.eq(0).find("span").attr("title", n.tooltips.prevDecade), t.eq(1).attr("title", n.tooltips.selectDecade), t.eq(2).find("span").attr("title", n.tooltips.nextDecade), e.find(".disabled").removeClass("disabled"), n.minDate && n.minDate.isAfter(a, "y") && t.eq(0).addClass("disabled"), t.eq(1).text(a.year() + "-" + i.year()), n.maxDate && n.maxDate.isBefore(i, "y") && t.eq(2).addClass("disabled"); !a.isAfter(i, "y");) d += '<span data-action="selectYear" class="year' + (a.isSame(s, "y") && !c ? " active" : "") + (F(a, "y") ? "" : " disabled") + '">' + a.year() + "</span>", a.add(1, "y");
                                e.find("td").html(d)
                            }()
                    }
                }
            },
            J = function() {
                var a, i, d, o, _ = p.find(".datepicker-days"),
                    u = _.find("th"),
                    m = [];
                if (S()) {
                    for (u.eq(0).find("span").attr("title", n.tooltips.prevMonth), u.eq(1).attr("title", n.tooltips.selectMonth), u.eq(2).find("span").attr("title", n.tooltips.nextMonth), _.find(".disabled").removeClass("disabled"), u.eq(1).text(r.format(n.hijriDayViewHeaderFormat)), F(r.clone().subtract(1, "iMonth"), "iMonth") || u.eq(0).addClass("disabled"), F(r.clone().add(1, "iMonth"), "iMonth") || u.eq(2).addClass("disabled"), a = r.clone().startOf("iMonth").startOf("week"), o = 0; o < 42; o++) 0 === a.weekday() && (i = e("<tr>"), n.calendarWeeks && i.append('<td class="cw">' + a.week() + "</td>"), m.push(i)), d = "", a.iMonth() < r.iMonth() && (d += " old"), a.iMonth() > r.iMonth() && (d += " new"), a.isSame(s, "d") && !c && (d += " active"), F(a, "d") || (d += " disabled"), a.isSame(t(), "d") && (d += " today"), 5 !== a.day() && 6 !== a.day() || (d += " weekend"), i.append('<td data-action="selectDay" data-mday="' + a.date() + '" data-day="' + a.format("L") + '" class="day' + d + '">' + a.iDate() + "</td>"), a.add(1, "days");
                    _.find("tbody").empty().append(m), E(),
                        function() {
                            let t = p.find(".datepicker-years"),
                                a = t.find("th"),
                                i = r.clone().subtract(5, "iYear"),
                                d = r.clone().add(6, "iYear"),
                                o = e("<div></div>");
                            if (a.eq(0).find("span").attr("title", n.tooltips.prevDecade), a.eq(1).attr("title", n.tooltips.selectDecade), a.eq(2).find("span").attr("title", n.tooltips.nextDecade), a.eq(1).text(i.iYear() + "-" + d.iYear()), t.find(".disabled").removeClass("disabled"), n.minDate && n.minDate.isAfter(i, "iy") && a.eq(0).addClass("disabled"), n.maxDate && n.maxDate.isBefore(d, "iy") && a.eq(2).addClass("disabled"), 1355 != i.iYear()) {
                                for (; !i.isAfter(d, "y");) {
                                    let t = e('<span data-action="selectYear" class="year"></span>'),
                                        a = i.iYear() === s.iYear(),
                                        n = !A(i.format("iYYYY"));
                                    t.html(i.iYear()), a && t.addClass("active"), n && t.addClass("disabled"), o.append(t), i.add(1, "iYear")
                                }
                                t.find("td").html(o)
                            }
                        }()
                }
            },
            I = function() {
                var t, a, i = p.find(".timepicker span[data-time-component]");
                d || (t = p.find(".timepicker [data-action=togglePeriod]"), a = s.clone().add(s.hours() >= 12 ? -12 : 12, "h"), t.text(s.format("A")), F(a, "h") ? t.removeClass("disabled") : t.addClass("disabled")), i.filter("[data-time-component=hours]").text(s.format(d ? "HH" : "hh")), i.filter("[data-time-component=minutes]").text(s.format("mm")), i.filter("[data-time-component=seconds]").text(s.format("ss")),
                    function() {
                        var t = p.find(".timepicker-hours table"),
                            a = r.clone().startOf("day"),
                            n = [],
                            s = e("<tr>");
                        for (r.hour() > 11 && !d && a.hour(12); a.isSame(r, "d") && (d || r.hour() < 12 && a.hour() < 12 || r.hour() > 11);) a.hour() % 4 == 0 && (s = e("<tr>"), n.push(s)), s.append('<td data-action="selectHour" class="hour' + (F(a, "h") ? "" : " disabled") + '">' + a.format(d ? "HH" : "hh") + "</td>"), a.add(1, "h");
                        t.empty().append(n)
                    }(),
                    function() {
                        for (var t = p.find(".timepicker-minutes table"), a = r.clone().startOf("h"), s = [], i = e("<tr>"), d = 1 === n.stepping ? 5 : n.stepping; r.isSame(a, "h");) a.minute() % (4 * d) == 0 && (i = e("<tr>"), s.push(i)), i.append('<td data-action="selectMinute" class="minute' + (F(a, "m") ? "" : " disabled") + '">' + a.format("mm") + "</td>"), a.add(d, "m");
                        t.empty().append(s)
                    }(),
                    function() {
                        for (var t = p.find(".timepicker-seconds table"), a = r.clone().startOf("m"), n = [], s = e("<tr>"); r.isSame(a, "m");) a.second() % 20 == 0 && (s = e("<tr>"), n.push(s)), s.append('<td data-action="selectSecond" class="second' + (F(a, "s") ? "" : " disabled") + '">' + a.format("ss") + "</td>"), a.add(5, "s");
                        t.empty().append(n)
                    }()
            },
            N = function() { p && (z(), I()) },
            G = function(e) {
                var t = c ? null : s;
                if (!e) return c = !0, i.val(""), a.data("date", ""), x({ type: "dp.change", date: !1, oldDate: t }), void N();
                e = e.clone().locale(n.locale), 1 !== n.stepping && e.minutes(Math.round(e.minutes() / n.stepping) * n.stepping % 60).seconds(0), F(e) ? (r = (s = e).clone(), i.val(s.format(o)), a.data("date", s.format(o)), c = !1, N(), x({ type: "dp.change", date: s.clone(), oldDate: t })) : (n.keepInvalid || i.val(c ? "" : s.format(o)), x({ type: "dp.error", date: e }))
            },
            V = function() { var t = !1; return p ? (p.find(".collapse").each(function() { var a = e(this).data("collapse"); return !a || !a.transitioning || (t = !0, !1) }), t ? h : (M && M.hasClass("btn") && M.toggleClass("active"), p.hide(), e(window).off("resize", j), p.off("click", "[data-action]"), p.off("mousedown", !1), p.remove(), p = !1, x({ type: "dp.hide", date: s.clone() }), i.blur(), h)) : h },
            U = function() { G(null) },
            q = {
                next: function() {
                    var e = Y[u].navFnc;
                    r.add(Y[u].navStep, e), n.hijri ? J() : z(), W(e)
                },
                previous: function() {
                    var e = Y[u].navFnc;
                    r.subtract(Y[u].navStep, e), n.hijri ? J() : z(), W(e)
                },
                pickerSwitch: function() { P(1) },
                selectMonth: function(t) {
                    var a = e(t.target).closest("tbody").find("span").index(e(t.target));
                    n.hijri ? r.iMonth(a) : r.month(a), u === f ? (n.hijri ? G(s.clone().year(r.iYear()).month(r.iMonth())) : G(s.clone().year(r.year()).month(r.month())), n.inline || V()) : (P(-1), z()), n.hijri ? W("iM") : W("M")
                },
                selectYear: function(t) {
                    var a = parseInt(e(t.target).text(), 10) || 0;
                    n.hijri ? r.iYear(a) : r.year(a), u === f ? (n.hijri ? G(s.clone().iYear(r.iYear())) : G(s.clone().year(r.year())), n.inline || V()) : (P(-1), z()), n.hijri ? W("hYYYY") : W("YYYY")
                },
                selectDecade: function(t) {
                    var a = parseInt(e(t.target).data("selection"), 10) || 0;
                    n.hijri ? r.iYear(a) : r.year(a), u === f ? (n.hijri ? G(s.clone().iYear(r.iYear())) : G(s.clone().year(r.year())), n.inline || V()) : (P(-1), z()), n.hijri ? W("hYYYY") : W("YYYY")
                },
                selectDay: function(t) {
                    var a = r.clone();
                    n.hijri ? (e(t.target).is(".old") && a.subtract(1, "iMonth"), e(t.target).is(".new") && a.add(1, "iMonth"), G(a.iDate(parseInt(e(t.target).text(), 10)))) : (e(t.target).is(".old") && a.subtract(1, "months"), e(t.target).is(".new") && a.add(1, "months"), G(a.date(parseInt(e(t.target).text(), 10)))), b() || n.keepOpen || n.inline || V()
                },
                incrementHours: function() {
                    var e = s.clone().add(1, "h");
                    F(e, "h") && G(e)
                },
                incrementMinutes: function() {
                    var e = s.clone().add(n.stepping, "m");
                    F(e, "m") && G(e)
                },
                incrementSeconds: function() {
                    var e = s.clone().add(1, "s");
                    F(e, "s") && G(e)
                },
                decrementHours: function() {
                    var e = s.clone().subtract(1, "h");
                    F(e, "h") && G(e)
                },
                decrementMinutes: function() {
                    var e = s.clone().subtract(n.stepping, "m");
                    F(e, "m") && G(e)
                },
                decrementSeconds: function() {
                    var e = s.clone().subtract(1, "s");
                    F(e, "s") && G(e)
                },
                togglePeriod: function() { G(s.clone().add(s.hours() >= 12 ? -12 : 12, "h")) },
                togglePicker: function(t) {
                    var a, s = e(t.target),
                        r = s.closest("ul"),
                        i = r.find(".in"),
                        d = r.find(".collapse:not(.in)");
                    if (i && i.length) {
                        if ((a = i.data("collapse")) && a.transitioning) return;
                        i.collapse ? (i.collapse("hide"), d.collapse("show")) : (i.removeClass("in"), d.addClass("in")), s.is("span") ? s.toggleClass(n.icons.time + " " + n.icons.date) : s.find("span").toggleClass(n.icons.time + " " + n.icons.date)
                    }
                },
                showPicker: function() { p.find(".timepicker > div:not(.timepicker-picker)").hide(), p.find(".timepicker .timepicker-picker").show() },
                showHours: function() { p.find(".timepicker .timepicker-picker").hide(), p.find(".timepicker .timepicker-hours").show() },
                showMinutes: function() { p.find(".timepicker .timepicker-picker").hide(), p.find(".timepicker .timepicker-minutes").show() },
                showSeconds: function() { p.find(".timepicker .timepicker-picker").hide(), p.find(".timepicker .timepicker-seconds").show() },
                selectHour: function(t) {
                    var a = parseInt(e(t.target).text(), 10);
                    d || (s.hours() >= 12 ? 12 !== a && (a += 12) : 12 === a && (a = 0)), G(s.clone().hours(a)), q.showPicker.call(h)
                },
                selectMinute: function(t) { G(s.clone().minutes(parseInt(e(t.target).text(), 10))), q.showPicker.call(h) },
                selectSecond: function(t) { G(s.clone().seconds(parseInt(e(t.target).text(), 10))), q.showPicker.call(h) },
                clear: U,
                today: function() {
                    var e = T();
                    F(e, "d") && G(e)
                },
                close: V,
                switchDate: function() { n.hijri ? (n.hijri = !1, z(), C(), ae(), e(".data-switch-button").html(n.hijriText)) : (n.hijri = !0, J(), O(), ae(), e(".data-switch-button").html(n.gregorianText)) }
            },
            R = function(t) { return !e(t.currentTarget).is(".disabled") && (q[e(t.currentTarget).data("action")].apply(h, arguments), !1) },
            Z = function() {
                var t;
                return i.prop("disabled") || !n.ignoreReadonly && i.prop("readonly") || p ? h : (void 0 !== i.val() && 0 !== i.val().trim().length ? G($(i.val().trim())) : n.useCurrent && c && (i.is("input") && 0 === i.val().trim().length || n.inline) && (t = T(), "string" == typeof n.useCurrent && (t = { year: function(e) { return e.month(0).date(1).hours(0).seconds(0).minutes(0) }, month: function(e) { return e.date(1).hours(0).seconds(0).minutes(0) }, day: function(e) { return e.hours(0).seconds(0).minutes(0) }, hour: function(e) { return e.seconds(0).minutes(0) }, minute: function(e) { return e.seconds(0) } }[n.useCurrent](t)), G(t)), p = H(), function() {
                    var t = e("<tr>"),
                        a = r.clone().startOf("w").startOf("day");
                    for (!0 === n.calendarWeeks && t.append(e("<th>").addClass("cw").text("#")); a.isBefore(r.clone().endOf("w"));) t.append(e("<th>").addClass("dow").text(a.format("dd"))), a.add(1, "days");
                    p.find(".datepicker-days thead").append(t)
                }(), n.hijri ? O() : C(), p.find(".timepicker-hours").hide(), p.find(".timepicker-minutes").hide(), p.find(".timepicker-seconds").hide(), N(), P(), e(window).on("resize", j), p.on("click", "[data-action]", R), p.on("mousedown", !1), M && M.hasClass("btn") && M.toggleClass("active"), p.show(), j(), n.focusOnShow && !i.is(":focus") && i.focus(), x({ type: "dp.show" }), h)
            },
            B = function() { return p ? V() : Z() },
            $ = function(e) { return (e = void 0 === n.parseInputDate ? t.isMoment(e) || e instanceof Date ? t(e) : T(e) : n.parseInputDate(e)).locale(n.locale), e },
            K = function(e) {
                var t, a, s, r, i = null,
                    d = [],
                    o = {},
                    _ = e.which;
                for (t in w[_] = "p", w) w.hasOwnProperty(t) && "p" === w[t] && (d.push(t), parseInt(t, 10) !== _ && (o[t] = !0));
                for (t in n.keyBinds)
                    if (n.keyBinds.hasOwnProperty(t) && "function" == typeof n.keyBinds[t] && (s = t.split(" ")).length === d.length && g[_] === s[s.length - 1]) {
                        for (r = !0, a = s.length - 2; a >= 0; a--)
                            if (!(g[s[a]] in o)) { r = !1; break }
                        if (r) { i = n.keyBinds[t]; break }
                    }
                i && (i.call(h, p), e.stopPropagation(), e.preventDefault())
            },
            Q = function(e) { w[e.which] = "r", e.stopPropagation(), e.preventDefault() },
            X = function(t) {
                var a = e(t.target).val().trim(),
                    n = a ? $(a) : null;
                return G(n), t.stopImmediatePropagation(), !1
            },
            ee = function(t) {
                var a = {};
                return e.each(t, function() {
                    var e = $(this);
                    e.isValid() && (a[e.format("YYYY-MM-DD")] = !0)
                }), !!Object.keys(a).length && a
            },
            te = function(t) { var a = {}; return e.each(t, function() { a[this] = !0 }), !!Object.keys(a).length && a },
            ae = function() {
                var e = n.format || "L LT";
                n.hijri && (e = n.hijriFormat), o = e.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(e) { return (s.localeData().longDateFormat(e) || e).replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(e) { return s.localeData().longDateFormat(e) || e }) }), (_ = n.extraFormats ? n.extraFormats.slice() : []).indexOf(e) < 0 && _.indexOf(o) < 0 && _.push(o), d = o.toLowerCase().indexOf("a") < 1 && o.replace(/\[.*?\]/g, "").indexOf("h") < 1, v("y") && (f = 2), v("M") && (f = 1), v("d") && (f = 0), u = Math.max(f, u), c || G(s)
            };
        if (h.destroy = function() { V(), i.off({ change: X, blur: blur, keydown: K, keyup: Q, focus: n.allowInputToggle ? V : "" }), a.is("input") ? i.off({ focus: Z }) : M && (M.off("click", B), M.off("mousedown", !1)), a.removeData("HijriDatePicker"), a.removeData("date") }, h.toggle = B, h.show = Z, h.hide = V, h.disable = function() { return V(), M && M.hasClass("btn") && M.addClass("disabled"), i.prop("disabled", !0), h }, h.enable = function() { return M && M.hasClass("btn") && M.removeClass("disabled"), i.prop("disabled", !1), h }, h.ignoreReadonly = function(e) { if (0 === arguments.length) return n.ignoreReadonly; if ("boolean" != typeof e) throw new TypeError("ignoreReadonly () expects a boolean parameter"); return n.ignoreReadonly = e, h }, h.options = function(t) { if (0 === arguments.length) return e.extend(!0, {}, n); if (!(t instanceof Object)) throw new TypeError("options() options parameter should be an object"); return e.extend(!0, n, t), e.each(n, function(e, t) { void 0 !== h[e] && h[e](t) }), h }, h.date = function(e) { if (0 === arguments.length) return c ? null : s.clone(); if (!(null === e || "string" == typeof e || t.isMoment(e) || e instanceof Date)) throw new TypeError("date() parameter must be one of [null, string, moment or Date]"); return G(null === e ? null : $(e)), h }, h.format = function(e) { if (0 === arguments.length) return n.format; if ("string" != typeof e && ("boolean" != typeof e || !1 !== e)) throw new TypeError("format() expects a sting or boolean:false parameter " + e); return n.format = e, o && ae(), h }, h.hijriFormat = function(e) {}, h.timeZone = function(e) { return 0 === arguments.length ? n.timeZone : (n.timeZone = e, h) }, h.dayViewHeaderFormat = function(e) { if (0 === arguments.length) return n.dayViewHeaderFormat; if ("string" != typeof e) throw new TypeError("dayViewHeaderFormat() expects a string parameter"); return n.dayViewHeaderFormat = e, h }, h.hijriDayViewHeaderFormat = function(e) {}, h.extraFormats = function(e) { if (0 === arguments.length) return n.extraFormats; if (!1 !== e && !(e instanceof Array)) throw new TypeError("extraFormats() expects an array or false parameter"); return n.extraFormats = e, _ && ae(), h }, h.disabledDates = function(t) { if (0 === arguments.length) return n.disabledDates ? e.extend({}, n.disabledDates) : n.disabledDates; if (!t) return n.disabledDates = !1, N(), h; if (!(t instanceof Array)) throw new TypeError("disabledDates() expects an array parameter"); return n.disabledDates = ee(t), n.enabledDates = !1, N(), h }, h.enabledDates = function(t) { if (0 === arguments.length) return n.enabledDates ? e.extend({}, n.enabledDates) : n.enabledDates; if (!t) return n.enabledDates = !1, N(), h; if (!(t instanceof Array)) throw new TypeError("enabledDates() expects an array parameter"); return n.enabledDates = ee(t), n.disabledDates = !1, N(), h }, h.daysOfWeekDisabled = function(e) {
                if (0 === arguments.length) return n.daysOfWeekDisabled.splice(0);
                if ("boolean" == typeof e && !e) return n.daysOfWeekDisabled = !1, N(), h;
                if (!(e instanceof Array)) throw new TypeError("daysOfWeekDisabled() expects an array parameter");
                if (n.daysOfWeekDisabled = e.reduce(function(e, t) { return (t = parseInt(t, 10)) > 6 || t < 0 || isNaN(t) ? e : (-1 === e.indexOf(t) && e.push(t), e) }, []).sort(), n.useCurrent && !n.keepInvalid) {
                    for (var t = 0; !F(s, "d");) {
                        if (s.add(1, "days"), 7 === t) throw "Tried 7 times to find a valid date";
                        t++
                    }
                    G(s)
                }
                return N(), h
            }, h.maxDate = function(e) { if (0 === arguments.length) return n.maxDate ? n.maxDate.clone() : n.maxDate; if ("boolean" == typeof e && !1 === e) return n.maxDate = !1, N(), h; "string" == typeof e && ("now" !== e && "moment" !== e || (e = T())); var t = $(e); if (!t.isValid()) throw new TypeError("maxDate() Could not parse date parameter: " + e); if (n.minDate && t.isBefore(n.minDate)) throw new TypeError("maxDate() date parameter is before options.minDate: " + t.format(o)); return n.maxDate = t, n.useCurrent && !n.keepInvalid && s.isAfter(e) && G(n.maxDate), r.isAfter(t) && (r = t.clone().subtract(n.stepping, "m")), N(), h }, h.minDate = function(e) { if (0 === arguments.length) return n.minDate ? n.minDate.clone() : n.minDate; if ("boolean" == typeof e && !1 === e) return n.minDate = !1, N(), h; "string" == typeof e && ("now" !== e && "moment" !== e || (e = T())); var t = $(e); if (!t.isValid()) throw new TypeError("minDate() Could not parse date parameter: " + e); if (n.maxDate && t.isAfter(n.maxDate)) throw new TypeError("minDate() date parameter is after options.maxDate: " + t.format(o)); return n.minDate = t, n.useCurrent && !n.keepInvalid && s.isBefore(e) && G(n.minDate), r.isBefore(t) && (r = t.clone().add(n.stepping, "m")), N(), h }, h.defaultDate = function(e) { if (0 === arguments.length) return n.defaultDate ? n.defaultDate.clone() : n.defaultDate; if (!e) return n.defaultDate = !1, h; "string" == typeof e && ("now" !== e && "moment" !== e || (e = T())); var t = $(e); if (!t.isValid()) throw new TypeError("defaultDate() Could not parse date parameter: " + e); if (!F(t)) throw new TypeError("defaultDate() date passed is invalid according to component setup validations"); return n.defaultDate = t, (n.defaultDate && n.inline || "" === i.val().trim()) && G(n.defaultDate), h }, h.hijri = function(e) { if (0 === arguments.length) return n.hijri && (n.viewModes = ["days", "months", "years"]), n.hijri; if ("boolean" != typeof e) throw new TypeError("hijri() expects a boolean parameter"); return n.hijri = e, n.hijri && (n.viewModes = ["days", "months", "years"]), h }, h.isRTL = function() { return n.isRTL, n.isRTL }, h.locale = function(e) { if (0 === arguments.length) return n.locale; if (!t.localeData(e)) throw new TypeError("locale() locale " + e + " is not loaded from moment locales!"); return n.locale = e, s.locale(n.locale), r.locale(n.locale), o && ae(), p && (V(), Z()), h }, h.stepping = function(e) { return 0 === arguments.length ? n.stepping : (e = parseInt(e, 10), (isNaN(e) || e < 1) && (e = 1), n.stepping = e, h) }, h.useCurrent = function(e) { var t = ["year", "month", "day", "hour", "minute"]; if (0 === arguments.length) return n.useCurrent; if ("boolean" != typeof e && "string" != typeof e) throw new TypeError("useCurrent() expects a boolean or string parameter"); if ("string" == typeof e && -1 === t.indexOf(e.toLowerCase())) throw new TypeError("useCurrent() expects a string parameter of " + t.join(", ")); return n.useCurrent = e, h }, h.collapse = function(e) { if (0 === arguments.length) return n.collapse; if ("boolean" != typeof e) throw new TypeError("collapse() expects a boolean parameter"); return n.collapse === e ? h : (n.collapse = e, p && (V(), Z()), h) }, h.icons = function(t) { if (0 === arguments.length) return e.extend({}, n.icons); if (!(t instanceof Object)) throw new TypeError("icons() expects parameter to be an Object"); return e.extend(n.icons, t), p && (V(), Z()), h }, h.tooltips = function(t) { if (0 === arguments.length) return e.extend({}, n.tooltips); if (!(t instanceof Object)) throw new TypeError("tooltips() expects parameter to be an Object"); return e.extend(n.tooltips, t), p && (V(), Z()), h }, h.useStrict = function(e) { if (0 === arguments.length) return n.useStrict; if ("boolean" != typeof e) throw new TypeError("useStrict() expects a boolean parameter"); return n.useStrict = e, h }, h.sideBySide = function(e) { if (0 === arguments.length) return n.sideBySide; if ("boolean" != typeof e) throw new TypeError("sideBySide() expects a boolean parameter"); return n.sideBySide = e, p && (V(), Z()), h }, h.viewMode = function(e) { if (0 === arguments.length) return n.viewMode; if ("string" != typeof e) throw new TypeError("viewMode() expects a string parameter"); if (-1 === L.indexOf(e)) throw new TypeError("viewMode() parameter must be one of (" + L.join(", ") + ") value"); return n.viewMode = e, u = Math.max(L.indexOf(e), f), P(), h }, h.toolbarPlacement = function(e) { if (0 === arguments.length) return n.toolbarPlacement; if ("string" != typeof e) throw new TypeError("toolbarPlacement() expects a string parameter"); if (-1 === k.indexOf(e)) throw new TypeError("toolbarPlacement() parameter must be one of (" + k.join(", ") + ") value"); return n.toolbarPlacement = e, p && (V(), Z()), h }, h.widgetPositioning = function(t) {
                if (0 === arguments.length) return e.extend({}, n.widgetPositioning);
                if ("[object Object]" !== {}.toString.call(t)) throw new TypeError("widgetPositioning() expects an object variable");
                if (t.horizontal) {
                    if ("string" != typeof t.horizontal) throw new TypeError("widgetPositioning() horizontal variable must be a string");
                    if (t.horizontal = t.horizontal.toLowerCase(), -1 === D.indexOf(t.horizontal)) throw new TypeError("widgetPositioning() expects horizontal parameter to be one of (" + D.join(", ") + ")");
                    n.widgetPositioning.horizontal = t.horizontal
                }
                if (t.vertical) {
                    if ("string" != typeof t.vertical) throw new TypeError("widgetPositioning() vertical variable must be a string");
                    if (t.vertical = t.vertical.toLowerCase(), -1 === y.indexOf(t.vertical)) throw new TypeError("widgetPositioning() expects vertical parameter to be one of (" + y.join(", ") + ")");
                    n.widgetPositioning.vertical = t.vertical
                }
                return N(), h
            }, h.calendarWeeks = function(e) { if (0 === arguments.length) return n.calendarWeeks; if ("boolean" != typeof e) throw new TypeError("calendarWeeks() expects parameter to be a boolean value"); return n.calendarWeeks = e, N(), h }, h.showTodayButton = function(e) { if (0 === arguments.length) return n.showTodayButton; if ("boolean" != typeof e) throw new TypeError("showTodayButton() expects a boolean parameter"); return n.showTodayButton = e, p && (V(), Z()), h }, h.showClear = function(e) { if (0 === arguments.length) return n.showClear; if ("boolean" != typeof e) throw new TypeError("showClear() expects a boolean parameter"); return n.showClear = e, p && (V(), Z()), h }, h.widgetParent = function(t) { if (0 === arguments.length) return n.widgetParent; if ("string" == typeof t && (t = e(t)), null !== t && "string" != typeof t && !(t instanceof e)) throw new TypeError("widgetParent() expects a string or a jQuery object parameter"); return n.widgetParent = t, p && (V(), Z()), h }, h.keepOpen = function(e) { if (0 === arguments.length) return n.keepOpen; if ("boolean" != typeof e) throw new TypeError("keepOpen() expects a boolean parameter"); return n.keepOpen = e, h }, h.focusOnShow = function(e) { if (0 === arguments.length) return n.focusOnShow; if ("boolean" != typeof e) throw new TypeError("focusOnShow() expects a boolean parameter"); return n.focusOnShow = e, h }, h.inline = function(e) { if (0 === arguments.length) return n.inline; if ("boolean" != typeof e) throw new TypeError("inline() expects a boolean parameter"); return n.inline = e, h }, h.clear = function() { return U(), h }, h.keyBinds = function(e) { return n.keyBinds = e, h }, h.getMoment = function(e) { return T(e) }, h.debug = function(e) { if ("boolean" != typeof e) throw new TypeError("debug() expects a boolean parameter"); return n.debug = e, h }, h.allowInputToggle = function(e) { if (0 === arguments.length) return n.allowInputToggle; if ("boolean" != typeof e) throw new TypeError("allowInputToggle() expects a boolean parameter"); return n.allowInputToggle = e, h }, h.showClose = function(e) { if (0 === arguments.length) return n.showClose; if ("boolean" != typeof e) throw new TypeError("showClose() expects a boolean parameter"); return n.showClose = e, h }, h.showSwitcher = function(e) { if (0 === arguments.length) return n.showSwitcher; if ("boolean" != typeof e) throw new TypeError("showClose() expects a boolean parameter"); return n.showSwitcher = e, h }, h.keepInvalid = function(e) { if (0 === arguments.length) return n.keepInvalid; if ("boolean" != typeof e) throw new TypeError("keepInvalid() expects a boolean parameter"); return n.keepInvalid = e, h }, h.datepickerInput = function(e) { if (0 === arguments.length) return n.datepickerInput; if ("string" != typeof e) throw new TypeError("datepickerInput() expects a string parameter"); return n.datepickerInput = e, h }, h.parseInputDate = function(e) { if (0 === arguments.length) return n.parseInputDate; if ("function" != typeof e) throw new TypeError("parseInputDate() sholud be as function"); return n.parseInputDate = e, h }, h.disabledTimeIntervals = function(t) { if (0 === arguments.length) return n.disabledTimeIntervals ? e.extend({}, n.disabledTimeIntervals) : n.disabledTimeIntervals; if (!t) return n.disabledTimeIntervals = !1, N(), h; if (!(t instanceof Array)) throw new TypeError("disabledTimeIntervals() expects an array parameter"); return n.disabledTimeIntervals = t, N(), h }, h.disabledHours = function(t) {
                if (0 === arguments.length) return n.disabledHours ? e.extend({}, n.disabledHours) : n.disabledHours;
                if (!t) return n.disabledHours = !1, N(), h;
                if (!(t instanceof Array)) throw new TypeError("disabledHours() expects an array parameter");
                if (n.disabledHours = te(t), n.enabledHours = !1, n.useCurrent && !n.keepInvalid) {
                    for (var a = 0; !F(s, "h");) {
                        if (s.add(1, "h"), 24 === a) throw "Tried 24 times to find a valid date";
                        a++
                    }
                    G(s)
                }
                return N(), h
            }, h.enabledHours = function(t) {
                if (0 === arguments.length) return n.enabledHours ? e.extend({}, n.enabledHours) : n.enabledHours;
                if (!t) return n.enabledHours = !1, N(), h;
                if (!(t instanceof Array)) throw new TypeError("enabledHours() expects an array parameter");
                if (n.enabledHours = te(t), n.disabledHours = !1, n.useCurrent && !n.keepInvalid) {
                    for (var a = 0; !F(s, "h");) {
                        if (s.add(1, "h"), 24 === a) throw "Tried 24 times to find a valid date";
                        a++
                    }
                    G(s)
                }
                return N(), h
            }, h.viewDate = function(e) { if (0 === arguments.length) return r.clone(); if (!e) return r = s.clone(), h; if (!("string" == typeof e || t.isMoment(e) || e instanceof Date)) throw new TypeError("viewDate() parameter must be one of [string, moment or Date]"); return r = $(e), W(), h }, a.is("input")) i = a;
        else if (0 === (i = a.find(n.datepickerInput)).size()) i = a.find("input");
        else if (!i.is("input")) throw new Error('CSS class "' + n.datepickerInput + '" cannot be applied to non input element');
        if (a.hasClass("input-group") && (M = 0 === a.find(".datepickerbutton").size() ? a.find(".input-group-addon") : a.find(".datepickerbutton")), !n.inline && !i.is("input")) throw new Error("Could not initialize DateTimePicker without an input element");
        return s = T(), r = s.clone(), e.extend(!0, n, (l = {}, (m = a.is("input") || n.inline ? a.data() : a.find("input").data()).dateOptions && m.dateOptions instanceof Object && (l = e.extend(!0, l, m.dateOptions)), e.each(n, function(e) {
            var t = "date" + e.charAt(0).toUpperCase() + e.slice(1);
            void 0 !== m[t] && (l[e] = m[t])
        }), l)), h.options(n), ae(), i.on({ change: X, blur: n.debug ? "" : V, keydown: K, keyup: Q, focus: n.allowInputToggle ? Z : "" }), a.is("input") ? i.on({ focus: Z }) : M && (M.on("click", B), M.on("mousedown", !1)), i.prop("disabled") && h.disable(), i.is("input") && 0 !== i.val().trim().length ? G($(i.val().trim())) : n.defaultDate && void 0 === i.attr("placeholder") && G(n.defaultDate), n.inline && Z(), h
    };
    e.fn.hijriDatePicker = function(t) {
        return this.each(function() {
            var n = e(this);
            n.data("HijriDatePicker") || (t = e.extend(!0, {}, e.fn.hijriDatePicker.defaults, t), n.data("HijriDatePicker", a(n, t)))
        })
    }, e.fn.hijriDatePicker.defaults = {
        timeZone: "Etc/UTC",
        format: "DD-MM-YYYY",
        hijriFormat: "iYYYY-iMM-iDD",
        hijriDayViewHeaderFormat: "iMMMM iYYYY",
        dayViewHeaderFormat: "MMMM YYYY",
        minDate: "1950-01-01",
        maxDate: "2070-01-01",
        extraFormats: !1,
        stepping: 1,
        useCurrent: !1,
        collapse: !0,
        locale: "ar-SA",
        defaultDate: !1,
        disabledDates: !1,
        enabledDates: !1,
        icons: { time: "fa fa-clock text-primary", date: "glyphicon glyphicon-calendar", up: "fa fa-chevron-up text-primary", down: "fa fa-chevron-down text-primary", previous: "<", next: ">", today: "اليوم", clear: "مسح", close: "اغلاق" },
        tooltips: { today: "Go to today", clear: "Clear selection", close: "Close the picker", selectMonth: "Select Month", prevMonth: "Previous Month", nextMonth: "Next Month", selectYear: "Select Year", prevYear: "Previous Year", nextYear: "Next Year", selectDecade: "Select Decade", prevDecade: "Previous Decade", nextDecade: "Next Decade", prevCentury: "Previous Century", nextCentury: "Next Century", pickHour: "Pick Hour", incrementHour: "Increment Hour", decrementHour: "Decrement Hour", pickMinute: "Pick Minute", incrementMinute: "Increment Minute", decrementMinute: "Decrement Minute", pickSecond: "Pick Second", incrementSecond: "Increment Second", decrementSecond: "Decrement Second", togglePeriod: "Toggle Period", selectTime: "Select Time" },
        useStrict: !1,
        sideBySide: !1,
        daysOfWeekDisabled: !1,
        calendarWeeks: !1,
        viewMode: "days",
        toolbarPlacement: "default",
        showTodayButton: !1,
        showClear: !1,
        showClose: !1,
        widgetPositioning: { horizontal: "auto", vertical: "auto" },
        widgetParent: null,
        ignoreReadonly: !1,
        keepOpen: !1,
        focusOnShow: !0,
        inline: !1,
        keepInvalid: !1,
        datepickerInput: ".datepickerinput",
        keyBinds: {
            up: function(e) {
                if (e) {
                    var t = this.date() || this.getMoment();
                    e.find(".datepicker").is(":visible") ? this.date(t.clone().subtract(7, "d")) : this.date(t.clone().add(this.stepping(), "m"))
                }
            },
            down: function(e) {
                if (e) {
                    var t = this.date() || this.getMoment();
                    e.find(".datepicker").is(":visible") ? this.date(t.clone().add(7, "d")) : this.date(t.clone().subtract(this.stepping(), "m"))
                } else this.show()
            },
            "control up": function(e) {
                if (e) {
                    var t = this.date() || this.getMoment();
                    e.find(".datepicker").is(":visible") ? this.date(t.clone().subtract(1, "years")) : this.date(t.clone().add(1, "h"))
                }
            },
            "control down": function(e) {
                if (e) {
                    var t = this.date() || this.getMoment();
                    e.find(".datepicker").is(":visible") ? this.date(t.clone().add(1, "y")) : this.date(t.clone().subtract(1, "h"))
                }
            },
            left: function(e) {
                if (e) {
                    var t = this.date() || this.getMoment();
                    e.find(".datepicker").is(":visible") && this.date(t.clone().subtract(1, "days"))
                }
            },
            right: function(e) {
                if (e) {
                    var t = this.date() || this.getMoment();
                    e.find(".datepicker").is(":visible") && this.date(t.clone().add(1, "days"))
                }
            },
            pageUp: function(e) {
                if (e) {
                    var t = this.date() || this.getMoment();
                    e.find(".datepicker").is(":visible") && this.date(t.clone().subtract(1, "months"))
                }
            },
            pageDown: function(e) {
                if (e) {
                    var t = this.date() || this.getMoment();
                    e.find(".datepicker").is(":visible") && this.date(t.clone().add(1, "months"))
                }
            },
            enter: function() { this.hide() },
            escape: function() { this.hide() },
            "control space": function(e) { e.find(".timepicker").is(":visible") && e.find('.btn[data-action="togglePeriod"]').click() },
            t: function() { this.date(this.getMoment()) },
            delete: function() { this.clear() }
        },
        showSwitcher: !0,
        debug: !1,
        allowInputToggle: !1,
        disabledTimeIntervals: !1,
        disabledHours: !1,
        enabledHours: !1,
        viewDate: !1,
        hijri: !1,
        isRTL: !1,
        hijriText: "هجري",
        gregorianText: "ميلادي"
    }
});