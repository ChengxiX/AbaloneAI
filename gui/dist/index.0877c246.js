/*!
 * pixi.js - v4.5.5
 * Compiled Fri, 25 Aug 2017 15:17:22 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */ !function(t1) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t1();
    else if ("function" == typeof define && define.amd) define([], t1);
    else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.PIXI = t1();
    }
}(function() {
    var t1;
    return (function t1(e, r, n) {
        function i(s, a) {
            if (!r[s]) {
                if (!e[s]) {
                    var u = "function" == typeof require && undefined;
                    if (!a && u) return u(s, !0);
                    if (o) return o(s, !0);
                    var h = new Error("Cannot find module '" + s + "'");
                    throw h.code = "MODULE_NOT_FOUND", h;
                }
                var l = r[s] = {
                    exports: {}
                };
                e[s][0].call(l.exports, function(t1) {
                    var r = e[s][1][t1];
                    return i(r || t1);
                }, l, l.exports, t1, e, r, n);
            }
            return r[s].exports;
        }
        for(var o = "function" == typeof require && undefined, s = 0; s < n.length; s++)i(n[s]);
        return i;
    })({
        1: [
            function(t1, e, r) {
                "use strict";
                "use restrict";
                function n(t1) {
                    var e = 32;
                    return t1 &= -t1, t1 && e--, 65535 & t1 && (e -= 16), 16711935 & t1 && (e -= 8), 252645135 & t1 && (e -= 4), 858993459 & t1 && (e -= 2), 1431655765 & t1 && (e -= 1), e;
                }
                r.INT_BITS = 32, r.INT_MAX = 2147483647, r.INT_MIN = -2147483648, r.sign = function(t1) {
                    return (t1 > 0) - (t1 < 0);
                }, r.abs = function(t1) {
                    var e = t1 >> 31;
                    return (t1 ^ e) - e;
                }, r.min = function(t1, e) {
                    return e ^ (t1 ^ e) & -(t1 < e);
                }, r.max = function(t1, e) {
                    return t1 ^ (t1 ^ e) & -(t1 < e);
                }, r.isPow2 = function(t1) {
                    return !(t1 & t1 - 1 || !t1);
                }, r.log2 = function(t1) {
                    var e, r;
                    return e = (t1 > 65535) << 4, t1 >>>= e, r = (t1 > 255) << 3, t1 >>>= r, e |= r, r = (t1 > 15) << 2, t1 >>>= r, e |= r, r = (t1 > 3) << 1, t1 >>>= r, (e |= r) | t1 >> 1;
                }, r.log10 = function(t1) {
                    return t1 >= 1e9 ? 9 : t1 >= 1e8 ? 8 : t1 >= 1e7 ? 7 : t1 >= 1e6 ? 6 : t1 >= 1e5 ? 5 : t1 >= 1e4 ? 4 : t1 >= 1e3 ? 3 : t1 >= 100 ? 2 : t1 >= 10 ? 1 : 0;
                }, r.popCount = function(t1) {
                    return t1 -= t1 >>> 1 & 1431655765, 16843009 * ((t1 = (858993459 & t1) + (t1 >>> 2 & 858993459)) + (t1 >>> 4) & 252645135) >>> 24;
                }, r.countTrailingZeros = n, r.nextPow2 = function(t1) {
                    return t1 += 0 === t1, --t1, t1 |= t1 >>> 1, t1 |= t1 >>> 2, t1 |= t1 >>> 4, t1 |= t1 >>> 8, (t1 |= t1 >>> 16) + 1;
                }, r.prevPow2 = function(t1) {
                    return t1 |= t1 >>> 1, t1 |= t1 >>> 2, t1 |= t1 >>> 4, t1 |= t1 >>> 8, (t1 |= t1 >>> 16) - (t1 >>> 1);
                }, r.parity = function(t1) {
                    return t1 ^= t1 >>> 16, t1 ^= t1 >>> 8, t1 ^= t1 >>> 4, 27030 >>> (t1 &= 15) & 1;
                };
                var i = new Array(256);
                !function(t1) {
                    for(var e = 0; e < 256; ++e){
                        var r = e, n = e, i = 7;
                        for(r >>>= 1; r; r >>>= 1)n <<= 1, n |= 1 & r, --i;
                        t1[e] = n << i & 255;
                    }
                }(i), r.reverse = function(t1) {
                    return i[255 & t1] << 24 | i[t1 >>> 8 & 255] << 16 | i[t1 >>> 16 & 255] << 8 | i[t1 >>> 24 & 255];
                }, r.interleave2 = function(t1, e) {
                    return t1 &= 65535, t1 = 16711935 & (t1 | t1 << 8), t1 = 252645135 & (t1 | t1 << 4), t1 = 858993459 & (t1 | t1 << 2), t1 = 1431655765 & (t1 | t1 << 1), e &= 65535, e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t1 | e << 1;
                }, r.deinterleave2 = function(t1, e) {
                    return t1 = t1 >>> e & 1431655765, t1 = 858993459 & (t1 | t1 >>> 1), t1 = 252645135 & (t1 | t1 >>> 2), t1 = 16711935 & (t1 | t1 >>> 4), (t1 = 65535 & (t1 | t1 >>> 16)) << 16 >> 16;
                }, r.interleave3 = function(t1, e, r) {
                    return t1 &= 1023, t1 = 4278190335 & (t1 | t1 << 16), t1 = 251719695 & (t1 | t1 << 8), t1 = 3272356035 & (t1 | t1 << 4), t1 = 1227133513 & (t1 | t1 << 2), e &= 1023, e = 4278190335 & (e | e << 16), e = 251719695 & (e | e << 8), e = 3272356035 & (e | e << 4), e = 1227133513 & (e | e << 2), t1 |= e << 1, r &= 1023, r = 4278190335 & (r | r << 16), r = 251719695 & (r | r << 8), r = 3272356035 & (r | r << 4), r = 1227133513 & (r | r << 2), t1 | r << 2;
                }, r.deinterleave3 = function(t1, e) {
                    return t1 = t1 >>> e & 1227133513, t1 = 3272356035 & (t1 | t1 >>> 2), t1 = 251719695 & (t1 | t1 >>> 4), t1 = 4278190335 & (t1 | t1 >>> 8), (t1 = 1023 & (t1 | t1 >>> 16)) << 22 >> 22;
                }, r.nextCombination = function(t1) {
                    var e = t1 | t1 - 1;
                    return e + 1 | (~e & -~e) - 1 >>> n(t1) + 1;
                };
            },
            {}
        ],
        2: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e, r) {
                    r = r || 2;
                    var n = e && e.length, o = n ? e[0] * r : t1.length, a = i(t1, 0, o, r, !0), u = [];
                    if (!a) return u;
                    var h, l, d, f, p, v, y;
                    if (n && (a = c(t1, e, a, r)), t1.length > 80 * r) {
                        h = d = t1[0], l = f = t1[1];
                        for(var g = r; g < o; g += r)p = t1[g], v = t1[g + 1], p < h && (h = p), v < l && (l = v), p > d && (d = p), v > f && (f = v);
                        y = Math.max(d - h, f - l);
                    }
                    return s(a, u, r, h, l, y), u;
                }
                function i(t1, e, r, n, i) {
                    var o, s;
                    if (i === A(t1, e, r, n) > 0) for(o = e; o < r; o += n)s = M(o, t1[o], t1[o + 1], s);
                    else for(o = r - n; o >= e; o -= n)s = M(o, t1[o], t1[o + 1], s);
                    return s && T(s, s.next) && (C(s), s = s.next), s;
                }
                function o(t1, e) {
                    if (!t1) return t1;
                    e || (e = t1);
                    var r, n = t1;
                    do if (r = !1, n.steiner || !T(n, n.next) && 0 !== x(n.prev, n, n.next)) n = n.next;
                    else {
                        if (C(n), (n = e = n.prev) === n.next) return null;
                        r = !0;
                    }
                    while (r || n !== e);
                    return e;
                }
                function s(t1, e, r, n, i, c, d) {
                    if (t1) {
                        !d && c && v(t1, n, i, c);
                        for(var f, p, y = t1; t1.prev !== t1.next;)if (f = t1.prev, p = t1.next, c ? u(t1, n, i, c) : a(t1)) e.push(f.i / r), e.push(t1.i / r), e.push(p.i / r), C(t1), t1 = p.next, y = p.next;
                        else if ((t1 = p) === y) {
                            d ? 1 === d ? (t1 = h(t1, e, r), s(t1, e, r, n, i, c, 2)) : 2 === d && l(t1, e, r, n, i, c) : s(o(t1), e, r, n, i, c, 1);
                            break;
                        }
                    }
                }
                function a(t1) {
                    var e = t1.prev, r = t1, n = t1.next;
                    if (x(e, r, n) >= 0) return !1;
                    for(var i = t1.next.next; i !== t1.prev;){
                        if (_(e.x, e.y, r.x, r.y, n.x, n.y, i.x, i.y) && x(i.prev, i, i.next) >= 0) return !1;
                        i = i.next;
                    }
                    return !0;
                }
                function u(t1, e, r, n) {
                    var i = t1.prev, o = t1, s = t1.next;
                    if (x(i, o, s) >= 0) return !1;
                    for(var a = i.x < o.x ? i.x < s.x ? i.x : s.x : o.x < s.x ? o.x : s.x, u = i.y < o.y ? i.y < s.y ? i.y : s.y : o.y < s.y ? o.y : s.y, h = i.x > o.x ? i.x > s.x ? i.x : s.x : o.x > s.x ? o.x : s.x, l = i.y > o.y ? i.y > s.y ? i.y : s.y : o.y > s.y ? o.y : s.y, c = g(a, u, e, r, n), d = g(h, l, e, r, n), f = t1.nextZ; f && f.z <= d;){
                        if (f !== t1.prev && f !== t1.next && _(i.x, i.y, o.x, o.y, s.x, s.y, f.x, f.y) && x(f.prev, f, f.next) >= 0) return !1;
                        f = f.nextZ;
                    }
                    for(f = t1.prevZ; f && f.z >= c;){
                        if (f !== t1.prev && f !== t1.next && _(i.x, i.y, o.x, o.y, s.x, s.y, f.x, f.y) && x(f.prev, f, f.next) >= 0) return !1;
                        f = f.prevZ;
                    }
                    return !0;
                }
                function h(t1, e, r) {
                    var n = t1;
                    do {
                        var i = n.prev, o = n.next.next;
                        !T(i, o) && w(i, n, n.next, o) && S(i, o) && S(o, i) && (e.push(i.i / r), e.push(n.i / r), e.push(o.i / r), C(n), C(n.next), n = t1 = o), n = n.next;
                    }while (n !== t1);
                    return n;
                }
                function l(t1, e, r, n, i, a) {
                    var u = t1;
                    do {
                        for(var h = u.next.next; h !== u.prev;){
                            if (u.i !== h.i && b(u, h)) {
                                var l = P(u, h);
                                return u = o(u, u.next), l = o(l, l.next), s(u, e, r, n, i, a), void s(l, e, r, n, i, a);
                            }
                            h = h.next;
                        }
                        u = u.next;
                    }while (u !== t1);
                }
                function c(t1, e, r, n) {
                    var s, a, u, h, l, c = [];
                    for(s = 0, a = e.length; s < a; s++)u = e[s] * n, h = s < a - 1 ? e[s + 1] * n : t1.length, l = i(t1, u, h, n, !1), l === l.next && (l.steiner = !0), c.push(m(l));
                    for(c.sort(d), s = 0; s < c.length; s++)f(c[s], r), r = o(r, r.next);
                    return r;
                }
                function d(t1, e) {
                    return t1.x - e.x;
                }
                function f(t1, e) {
                    if (e = p(t1, e)) {
                        var r = P(e, t1);
                        o(r, r.next);
                    }
                }
                function p(t1, e) {
                    var r, n = e, i = t1.x, o = t1.y, s = -1 / 0;
                    do {
                        if (o <= n.y && o >= n.next.y) {
                            var a = n.x + (o - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
                            if (a <= i && a > s) {
                                if (s = a, a === i) {
                                    if (o === n.y) return n;
                                    if (o === n.next.y) return n.next;
                                }
                                r = n.x < n.next.x ? n : n.next;
                            }
                        }
                        n = n.next;
                    }while (n !== e);
                    if (!r) return null;
                    if (i === s) return r.prev;
                    var u, h = r, l = r.x, c = r.y, d = 1 / 0;
                    for(n = r.next; n !== h;)i >= n.x && n.x >= l && _(o < c ? i : s, o, l, c, o < c ? s : i, o, n.x, n.y) && ((u = Math.abs(o - n.y) / (i - n.x)) < d || u === d && n.x > r.x) && S(n, t1) && (r = n, d = u), n = n.next;
                    return r;
                }
                function v(t1, e, r, n) {
                    var i = t1;
                    do null === i.z && (i.z = g(i.x, i.y, e, r, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
                    while (i !== t1);
                    i.prevZ.nextZ = null, i.prevZ = null, y(i);
                }
                function y(t1) {
                    var e, r, n, i, o, s, a, u, h = 1;
                    do {
                        for(r = t1, t1 = null, o = null, s = 0; r;){
                            for(s++, n = r, a = 0, e = 0; e < h && (a++, n = n.nextZ); e++);
                            for(u = h; a > 0 || u > 0 && n;)0 === a ? (i = n, n = n.nextZ, u--) : 0 !== u && n ? r.z <= n.z ? (i = r, r = r.nextZ, a--) : (i = n, n = n.nextZ, u--) : (i = r, r = r.nextZ, a--), o ? o.nextZ = i : t1 = i, i.prevZ = o, o = i;
                            r = n;
                        }
                        o.nextZ = null, h *= 2;
                    }while (s > 1);
                    return t1;
                }
                function g(t1, e, r, n, i) {
                    return t1 = 32767 * (t1 - r) / i, e = 32767 * (e - n) / i, t1 = 16711935 & (t1 | t1 << 8), t1 = 252645135 & (t1 | t1 << 4), t1 = 858993459 & (t1 | t1 << 2), t1 = 1431655765 & (t1 | t1 << 1), e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t1 | e << 1;
                }
                function m(t1) {
                    var e = t1, r = t1;
                    do e.x < r.x && (r = e), e = e.next;
                    while (e !== t1);
                    return r;
                }
                function _(t1, e, r, n, i, o, s, a) {
                    return (i - s) * (e - a) - (t1 - s) * (o - a) >= 0 && (t1 - s) * (n - a) - (r - s) * (e - a) >= 0 && (r - s) * (o - a) - (i - s) * (n - a) >= 0;
                }
                function b(t1, e) {
                    return t1.next.i !== e.i && t1.prev.i !== e.i && !E(t1, e) && S(t1, e) && S(e, t1) && O(t1, e);
                }
                function x(t1, e, r) {
                    return (e.y - t1.y) * (r.x - e.x) - (e.x - t1.x) * (r.y - e.y);
                }
                function T(t1, e) {
                    return t1.x === e.x && t1.y === e.y;
                }
                function w(t1, e, r, n) {
                    return !!(T(t1, e) && T(r, n) || T(t1, n) && T(r, e)) || x(t1, e, r) > 0 != x(t1, e, n) > 0 && x(r, n, t1) > 0 != x(r, n, e) > 0;
                }
                function E(t1, e) {
                    var r = t1;
                    do {
                        if (r.i !== t1.i && r.next.i !== t1.i && r.i !== e.i && r.next.i !== e.i && w(r, r.next, t1, e)) return !0;
                        r = r.next;
                    }while (r !== t1);
                    return !1;
                }
                function S(t1, e) {
                    return x(t1.prev, t1, t1.next) < 0 ? x(t1, e, t1.next) >= 0 && x(t1, t1.prev, e) >= 0 : x(t1, e, t1.prev) < 0 || x(t1, t1.next, e) < 0;
                }
                function O(t1, e) {
                    var r = t1, n = !1, i = (t1.x + e.x) / 2, o = (t1.y + e.y) / 2;
                    do r.y > o != r.next.y > o && i < (r.next.x - r.x) * (o - r.y) / (r.next.y - r.y) + r.x && (n = !n), r = r.next;
                    while (r !== t1);
                    return n;
                }
                function P(t1, e) {
                    var r = new R(t1.i, t1.x, t1.y), n = new R(e.i, e.x, e.y), i = t1.next, o = e.prev;
                    return t1.next = e, e.prev = t1, r.next = i, i.prev = r, n.next = r, r.prev = n, o.next = n, n.prev = o, n;
                }
                function M(t1, e, r, n) {
                    var i = new R(t1, e, r);
                    return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i;
                }
                function C(t1) {
                    t1.next.prev = t1.prev, t1.prev.next = t1.next, t1.prevZ && (t1.prevZ.nextZ = t1.nextZ), t1.nextZ && (t1.nextZ.prevZ = t1.prevZ);
                }
                function R(t1, e, r) {
                    this.i = t1, this.x = e, this.y = r, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1;
                }
                function A(t1, e, r, n) {
                    for(var i = 0, o = e, s = r - n; o < r; o += n)i += (t1[s] - t1[o]) * (t1[o + 1] + t1[s + 1]), s = o;
                    return i;
                }
                e.exports = n, n.deviation = function(t1, e, r, n) {
                    var i = e && e.length, o = i ? e[0] * r : t1.length, s = Math.abs(A(t1, 0, o, r));
                    if (i) for(var a = 0, u = e.length; a < u; a++){
                        var h = e[a] * r, l = a < u - 1 ? e[a + 1] * r : t1.length;
                        s -= Math.abs(A(t1, h, l, r));
                    }
                    var c = 0;
                    for(a = 0; a < n.length; a += 3){
                        var d = n[a] * r, f = n[a + 1] * r, p = n[a + 2] * r;
                        c += Math.abs((t1[d] - t1[p]) * (t1[f + 1] - t1[d + 1]) - (t1[d] - t1[f]) * (t1[p + 1] - t1[d + 1]));
                    }
                    return 0 === s && 0 === c ? 0 : Math.abs((c - s) / s);
                }, n.flatten = function(t1) {
                    for(var e = t1[0][0].length, r = {
                        vertices: [],
                        holes: [],
                        dimensions: e
                    }, n = 0, i = 0; i < t1.length; i++){
                        for(var o = 0; o < t1[i].length; o++)for(var s = 0; s < e; s++)r.vertices.push(t1[i][o][s]);
                        i > 0 && (n += t1[i - 1].length, r.holes.push(n));
                    }
                    return r;
                };
            },
            {}
        ],
        3: [
            function(t1, e, r) {
                "use strict";
                function n() {}
                function i(t1, e, r) {
                    this.fn = t1, this.context = e, this.once = r || !1;
                }
                function o() {
                    this._events = new n, this._eventsCount = 0;
                }
                var s = Object.prototype.hasOwnProperty, a = "~";
                Object.create && (n.prototype = Object.create(null), (new n).__proto__ || (a = !1)), o.prototype.eventNames = function() {
                    var t1, e, r = [];
                    if (0 === this._eventsCount) return r;
                    for(e in t1 = this._events)s.call(t1, e) && r.push(a ? e.slice(1) : e);
                    return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(t1)) : r;
                }, o.prototype.listeners = function(t1, e) {
                    var r = a ? a + t1 : t1, n = this._events[r];
                    if (e) return !!n;
                    if (!n) return [];
                    if (n.fn) return [
                        n.fn
                    ];
                    for(var i = 0, o = n.length, s = new Array(o); i < o; i++)s[i] = n[i].fn;
                    return s;
                }, o.prototype.emit = function(t1, e, r, n, i, o) {
                    var s = a ? a + t1 : t1;
                    if (!this._events[s]) return !1;
                    var u, h, l = this._events[s], c = arguments.length;
                    if (l.fn) {
                        switch(l.once && this.removeListener(t1, l.fn, void 0, !0), c){
                            case 1:
                                return l.fn.call(l.context), !0;
                            case 2:
                                return l.fn.call(l.context, e), !0;
                            case 3:
                                return l.fn.call(l.context, e, r), !0;
                            case 4:
                                return l.fn.call(l.context, e, r, n), !0;
                            case 5:
                                return l.fn.call(l.context, e, r, n, i), !0;
                            case 6:
                                return l.fn.call(l.context, e, r, n, i, o), !0;
                        }
                        for(h = 1, u = new Array(c - 1); h < c; h++)u[h - 1] = arguments[h];
                        l.fn.apply(l.context, u);
                    } else {
                        var d, f = l.length;
                        for(h = 0; h < f; h++)switch(l[h].once && this.removeListener(t1, l[h].fn, void 0, !0), c){
                            case 1:
                                l[h].fn.call(l[h].context);
                                break;
                            case 2:
                                l[h].fn.call(l[h].context, e);
                                break;
                            case 3:
                                l[h].fn.call(l[h].context, e, r);
                                break;
                            case 4:
                                l[h].fn.call(l[h].context, e, r, n);
                                break;
                            default:
                                if (!u) for(d = 1, u = new Array(c - 1); d < c; d++)u[d - 1] = arguments[d];
                                l[h].fn.apply(l[h].context, u);
                        }
                    }
                    return !0;
                }, o.prototype.on = function(t1, e, r) {
                    var n = new i(e, r || this), o = a ? a + t1 : t1;
                    return this._events[o] ? this._events[o].fn ? this._events[o] = [
                        this._events[o],
                        n
                    ] : this._events[o].push(n) : (this._events[o] = n, this._eventsCount++), this;
                }, o.prototype.once = function(t1, e, r) {
                    var n = new i(e, r || this, !0), o = a ? a + t1 : t1;
                    return this._events[o] ? this._events[o].fn ? this._events[o] = [
                        this._events[o],
                        n
                    ] : this._events[o].push(n) : (this._events[o] = n, this._eventsCount++), this;
                }, o.prototype.removeListener = function(t1, e, r, i) {
                    var o = a ? a + t1 : t1;
                    if (!this._events[o]) return this;
                    if (!e) return 0 == --this._eventsCount ? this._events = new n : delete this._events[o], this;
                    var s = this._events[o];
                    if (s.fn) s.fn !== e || i && !s.once || r && s.context !== r || (0 == --this._eventsCount ? this._events = new n : delete this._events[o]);
                    else {
                        for(var u = 0, h = [], l = s.length; u < l; u++)(s[u].fn !== e || i && !s[u].once || r && s[u].context !== r) && h.push(s[u]);
                        h.length ? this._events[o] = 1 === h.length ? h[0] : h : 0 == --this._eventsCount ? this._events = new n : delete this._events[o];
                    }
                    return this;
                }, o.prototype.removeAllListeners = function(t1) {
                    var e;
                    return t1 ? (e = a ? a + t1 : t1, this._events[e] && (0 == --this._eventsCount ? this._events = new n : delete this._events[e])) : (this._events = new n, this._eventsCount = 0), this;
                }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prototype.setMaxListeners = function() {
                    return this;
                }, o.prefixed = a, o.EventEmitter = o, void 0 !== e && (e.exports = o);
            },
            {}
        ],
        4: [
            function(e, r, n) {
                !function(e) {
                    var n = /iPhone/i, i = /iPod/i, o = /iPad/i, s = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i, a = /Android/i, u = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i, h = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i, l = /Windows Phone/i, c = /(?=.*\bWindows\b)(?=.*\bARM\b)/i, d = /BlackBerry/i, f = /BB10/i, p = /Opera Mini/i, v = /(CriOS|Chrome)(?=.*\bMobile\b)/i, y = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i, g = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"), m = function(t1, e) {
                        return t1.test(e);
                    }, _ = function(t1) {
                        var e = t1 || navigator.userAgent, r = e.split("[FBAN");
                        if (void 0 !== r[1] && (e = r[0]), r = e.split("Twitter"), void 0 !== r[1] && (e = r[0]), this.apple = {
                            phone: m(n, e),
                            ipod: m(i, e),
                            tablet: !m(n, e) && m(o, e),
                            device: m(n, e) || m(i, e) || m(o, e)
                        }, this.amazon = {
                            phone: m(u, e),
                            tablet: !m(u, e) && m(h, e),
                            device: m(u, e) || m(h, e)
                        }, this.android = {
                            phone: m(u, e) || m(s, e),
                            tablet: !m(u, e) && !m(s, e) && (m(h, e) || m(a, e)),
                            device: m(u, e) || m(h, e) || m(s, e) || m(a, e)
                        }, this.windows = {
                            phone: m(l, e),
                            tablet: m(c, e),
                            device: m(l, e) || m(c, e)
                        }, this.other = {
                            blackberry: m(d, e),
                            blackberry10: m(f, e),
                            opera: m(p, e),
                            firefox: m(y, e),
                            chrome: m(v, e),
                            device: m(d, e) || m(f, e) || m(p, e) || m(y, e) || m(v, e)
                        }, this.seven_inch = m(g, e), this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch, this.phone = this.apple.phone || this.android.phone || this.windows.phone, this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet, "undefined" == typeof window) return this;
                    }, b = function() {
                        var t1 = new _;
                        return t1.Class = _, t1;
                    };
                    void 0 !== r && r.exports && "undefined" == typeof window ? r.exports = _ : void 0 !== r && r.exports && "undefined" != typeof window ? r.exports = b() : "function" == typeof t1 && t1.amd ? t1("isMobile", [], e.isMobile = b()) : e.isMobile = b();
                }(this);
            },
            {}
        ],
        5: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    if (null === t1 || void 0 === t1) throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(t1);
                }
                var i = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
                e.exports = function() {
                    try {
                        if (!Object.assign) return !1;
                        var t1 = new String("abc");
                        if (t1[5] = "de", "5" === Object.getOwnPropertyNames(t1)[0]) return !1;
                        for(var e = {}, r = 0; r < 10; r++)e["_" + String.fromCharCode(r)] = r;
                        if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t1) {
                            return e[t1];
                        }).join("")) return !1;
                        var n = {};
                        return "abcdefghijklmnopqrst".split("").forEach(function(t1) {
                            n[t1] = t1;
                        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("");
                    } catch (t2) {
                        return !1;
                    }
                }() ? Object.assign : function(t1, e) {
                    for(var r, a, u = n(t1), h = 1; h < arguments.length; h++){
                        r = Object(arguments[h]);
                        for(var l in r)o.call(r, l) && (u[l] = r[l]);
                        if (i) {
                            a = i(r);
                            for(var c = 0; c < a.length; c++)s.call(r, a[c]) && (u[a[c]] = r[a[c]]);
                        }
                    }
                    return u;
                };
            },
            {}
        ],
        6: [
            function(t1, e, r) {
                var n = new ArrayBuffer(0), i = function(t1, e, r, i) {
                    this.gl = t1, this.buffer = t1.createBuffer(), this.type = e || t1.ARRAY_BUFFER, this.drawType = i || t1.STATIC_DRAW, this.data = n, r && this.upload(r), this._updateID = 0;
                };
                i.prototype.upload = function(t1, e, r) {
                    r || this.bind();
                    var n = this.gl;
                    t1 = t1 || this.data, e = e || 0, this.data.byteLength >= t1.byteLength ? n.bufferSubData(this.type, e, t1) : n.bufferData(this.type, t1, this.drawType), this.data = t1;
                }, i.prototype.bind = function() {
                    this.gl.bindBuffer(this.type, this.buffer);
                }, i.createVertexBuffer = function(t1, e, r) {
                    return new i(t1, t1.ARRAY_BUFFER, e, r);
                }, i.createIndexBuffer = function(t1, e, r) {
                    return new i(t1, t1.ELEMENT_ARRAY_BUFFER, e, r);
                }, i.create = function(t1, e, r, n) {
                    return new i(t1, e, r, n);
                }, i.prototype.destroy = function() {
                    this.gl.deleteBuffer(this.buffer);
                }, e.exports = i;
            },
            {}
        ],
        7: [
            function(t1, e, r) {
                var n = t1("./GLTexture"), i = function(t1, e, r) {
                    this.gl = t1, this.framebuffer = t1.createFramebuffer(), this.stencil = null, this.texture = null, this.width = e || 100, this.height = r || 100;
                };
                i.prototype.enableTexture = function(t1) {
                    var e = this.gl;
                    this.texture = t1 || new n(e), this.texture.bind(), this.bind(), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.texture.texture, 0);
                }, i.prototype.enableStencil = function() {
                    if (!this.stencil) {
                        var t1 = this.gl;
                        this.stencil = t1.createRenderbuffer(), t1.bindRenderbuffer(t1.RENDERBUFFER, this.stencil), t1.framebufferRenderbuffer(t1.FRAMEBUFFER, t1.DEPTH_STENCIL_ATTACHMENT, t1.RENDERBUFFER, this.stencil), t1.renderbufferStorage(t1.RENDERBUFFER, t1.DEPTH_STENCIL, this.width, this.height);
                    }
                }, i.prototype.clear = function(t1, e, r, n) {
                    this.bind();
                    var i = this.gl;
                    i.clearColor(t1, e, r, n), i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT);
                }, i.prototype.bind = function() {
                    var t1 = this.gl;
                    t1.bindFramebuffer(t1.FRAMEBUFFER, this.framebuffer);
                }, i.prototype.unbind = function() {
                    var t1 = this.gl;
                    t1.bindFramebuffer(t1.FRAMEBUFFER, null);
                }, i.prototype.resize = function(t1, e) {
                    var r = this.gl;
                    this.width = t1, this.height = e, this.texture && this.texture.uploadData(null, t1, e), this.stencil && (r.bindRenderbuffer(r.RENDERBUFFER, this.stencil), r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, t1, e));
                }, i.prototype.destroy = function() {
                    var t1 = this.gl;
                    this.texture && this.texture.destroy(), t1.deleteFramebuffer(this.framebuffer), this.gl = null, this.stencil = null, this.texture = null;
                }, i.createRGBA = function(t1, e, r, o) {
                    var s = n.fromData(t1, null, e, r);
                    s.enableNearestScaling(), s.enableWrapClamp();
                    var a = new i(t1, e, r);
                    return a.enableTexture(s), a.unbind(), a;
                }, i.createFloat32 = function(t1, e, r, o) {
                    var s = new n.fromData(t1, o, e, r);
                    s.enableNearestScaling(), s.enableWrapClamp();
                    var a = new i(t1, e, r);
                    return a.enableTexture(s), a.unbind(), a;
                }, e.exports = i;
            },
            {
                "./GLTexture": 9
            }
        ],
        8: [
            function(t1, e, r) {
                var n = t1("./shader/compileProgram"), i = t1("./shader/extractAttributes"), o = t1("./shader/extractUniforms"), s = t1("./shader/setPrecision"), a = t1("./shader/generateUniformAccessObject"), u = function(t1, e, r, u, h) {
                    this.gl = t1, u && (e = s(e, u), r = s(r, u)), this.program = n(t1, e, r, h), this.attributes = i(t1, this.program), this.uniformData = o(t1, this.program), this.uniforms = a(t1, this.uniformData);
                };
                u.prototype.bind = function() {
                    this.gl.useProgram(this.program);
                }, u.prototype.destroy = function() {
                    this.attributes = null, this.uniformData = null, this.uniforms = null, this.gl.deleteProgram(this.program);
                }, e.exports = u;
            },
            {
                "./shader/compileProgram": 14,
                "./shader/extractAttributes": 16,
                "./shader/extractUniforms": 17,
                "./shader/generateUniformAccessObject": 18,
                "./shader/setPrecision": 22
            }
        ],
        9: [
            function(t1, e, r) {
                var n = function(t1, e, r, n, i) {
                    this.gl = t1, this.texture = t1.createTexture(), this.mipmap = !1, this.premultiplyAlpha = !1, this.width = e || -1, this.height = r || -1, this.format = n || t1.RGBA, this.type = i || t1.UNSIGNED_BYTE;
                };
                n.prototype.upload = function(t1) {
                    this.bind();
                    var e = this.gl;
                    e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
                    var r = t1.videoWidth || t1.width, n = t1.videoHeight || t1.height;
                    n !== this.height || r !== this.width ? e.texImage2D(e.TEXTURE_2D, 0, this.format, this.format, this.type, t1) : e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, this.format, this.type, t1), this.width = r, this.height = n;
                };
                var i = !1;
                n.prototype.uploadData = function(t1, e, r) {
                    this.bind();
                    var n = this.gl;
                    if (t1 instanceof Float32Array) {
                        if (!i) {
                            if (!n.getExtension("OES_texture_float")) throw new Error("floating point textures not available");
                            i = !0;
                        }
                        this.type = n.FLOAT;
                    } else this.type = this.type || n.UNSIGNED_BYTE;
                    n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), e !== this.width || r !== this.height ? n.texImage2D(n.TEXTURE_2D, 0, this.format, e, r, 0, this.format, this.type, t1 || null) : n.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, e, r, this.format, this.type, t1 || null), this.width = e, this.height = r;
                }, n.prototype.bind = function(t1) {
                    var e = this.gl;
                    void 0 !== t1 && e.activeTexture(e.TEXTURE0 + t1), e.bindTexture(e.TEXTURE_2D, this.texture);
                }, n.prototype.unbind = function() {
                    var t1 = this.gl;
                    t1.bindTexture(t1.TEXTURE_2D, null);
                }, n.prototype.minFilter = function(t1) {
                    var e = this.gl;
                    this.bind(), this.mipmap ? e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t1 ? e.LINEAR_MIPMAP_LINEAR : e.NEAREST_MIPMAP_NEAREST) : e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t1 ? e.LINEAR : e.NEAREST);
                }, n.prototype.magFilter = function(t1) {
                    var e = this.gl;
                    this.bind(), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, t1 ? e.LINEAR : e.NEAREST);
                }, n.prototype.enableMipmap = function() {
                    var t1 = this.gl;
                    this.bind(), this.mipmap = !0, t1.generateMipmap(t1.TEXTURE_2D);
                }, n.prototype.enableLinearScaling = function() {
                    this.minFilter(!0), this.magFilter(!0);
                }, n.prototype.enableNearestScaling = function() {
                    this.minFilter(!1), this.magFilter(!1);
                }, n.prototype.enableWrapClamp = function() {
                    var t1 = this.gl;
                    this.bind(), t1.texParameteri(t1.TEXTURE_2D, t1.TEXTURE_WRAP_S, t1.CLAMP_TO_EDGE), t1.texParameteri(t1.TEXTURE_2D, t1.TEXTURE_WRAP_T, t1.CLAMP_TO_EDGE);
                }, n.prototype.enableWrapRepeat = function() {
                    var t1 = this.gl;
                    this.bind(), t1.texParameteri(t1.TEXTURE_2D, t1.TEXTURE_WRAP_S, t1.REPEAT), t1.texParameteri(t1.TEXTURE_2D, t1.TEXTURE_WRAP_T, t1.REPEAT);
                }, n.prototype.enableWrapMirrorRepeat = function() {
                    var t1 = this.gl;
                    this.bind(), t1.texParameteri(t1.TEXTURE_2D, t1.TEXTURE_WRAP_S, t1.MIRRORED_REPEAT), t1.texParameteri(t1.TEXTURE_2D, t1.TEXTURE_WRAP_T, t1.MIRRORED_REPEAT);
                }, n.prototype.destroy = function() {
                    this.gl.deleteTexture(this.texture);
                }, n.fromSource = function(t1, e, r) {
                    var i = new n(t1);
                    return i.premultiplyAlpha = r || !1, i.upload(e), i;
                }, n.fromData = function(t1, e, r, i) {
                    var o = new n(t1);
                    return o.uploadData(e, r, i), o;
                }, e.exports = n;
            },
            {}
        ],
        10: [
            function(t1, e, r) {
                function n(t1, e) {
                    if (this.nativeVaoExtension = null, n.FORCE_NATIVE || (this.nativeVaoExtension = t1.getExtension("OES_vertex_array_object") || t1.getExtension("MOZ_OES_vertex_array_object") || t1.getExtension("WEBKIT_OES_vertex_array_object")), this.nativeState = e, this.nativeVaoExtension) {
                        this.nativeVao = this.nativeVaoExtension.createVertexArrayOES();
                        var r = t1.getParameter(t1.MAX_VERTEX_ATTRIBS);
                        this.nativeState = {
                            tempAttribState: new Array(r),
                            attribState: new Array(r)
                        };
                    }
                    this.gl = t1, this.attributes = [], this.indexBuffer = null, this.dirty = !1;
                }
                var i = t1("./setVertexAttribArrays");
                n.prototype.constructor = n, e.exports = n, n.FORCE_NATIVE = !1, n.prototype.bind = function() {
                    return this.nativeVao ? (this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao), this.dirty && (this.dirty = !1, this.activate())) : this.activate(), this;
                }, n.prototype.unbind = function() {
                    return this.nativeVao && this.nativeVaoExtension.bindVertexArrayOES(null), this;
                }, n.prototype.activate = function() {
                    for(var t1 = this.gl, e = null, r = 0; r < this.attributes.length; r++){
                        var n = this.attributes[r];
                        e !== n.buffer && (n.buffer.bind(), e = n.buffer), t1.vertexAttribPointer(n.attribute.location, n.attribute.size, n.type || t1.FLOAT, n.normalized || !1, n.stride || 0, n.start || 0);
                    }
                    return i(t1, this.attributes, this.nativeState), this.indexBuffer && this.indexBuffer.bind(), this;
                }, n.prototype.addAttribute = function(t1, e, r, n, i, o) {
                    return this.attributes.push({
                        buffer: t1,
                        attribute: e,
                        location: e.location,
                        type: r || this.gl.FLOAT,
                        normalized: n || !1,
                        stride: i || 0,
                        start: o || 0
                    }), this.dirty = !0, this;
                }, n.prototype.addIndex = function(t1) {
                    return this.indexBuffer = t1, this.dirty = !0, this;
                }, n.prototype.clear = function() {
                    return this.nativeVao && this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao), this.attributes.length = 0, this.indexBuffer = null, this;
                }, n.prototype.draw = function(t1, e, r) {
                    var n = this.gl;
                    return this.indexBuffer ? n.drawElements(t1, e || this.indexBuffer.data.length, n.UNSIGNED_SHORT, 2 * (r || 0)) : n.drawArrays(t1, r, e || this.getSize()), this;
                }, n.prototype.destroy = function() {
                    this.gl = null, this.indexBuffer = null, this.attributes = null, this.nativeState = null, this.nativeVao && this.nativeVaoExtension.deleteVertexArrayOES(this.nativeVao), this.nativeVaoExtension = null, this.nativeVao = null;
                }, n.prototype.getSize = function() {
                    var t1 = this.attributes[0];
                    return t1.buffer.data.length / (t1.stride / 4 || t1.attribute.size);
                };
            },
            {
                "./setVertexAttribArrays": 13
            }
        ],
        11: [
            function(t1, e, r) {
                var n = function(t1, e) {
                    var r = t1.getContext("webgl", e) || t1.getContext("experimental-webgl", e);
                    if (!r) throw new Error("This browser does not support webGL. Try using the canvas renderer");
                    return r;
                };
                e.exports = n;
            },
            {}
        ],
        12: [
            function(t1, e, r) {
                var n = {
                    createContext: t1("./createContext"),
                    setVertexAttribArrays: t1("./setVertexAttribArrays"),
                    GLBuffer: t1("./GLBuffer"),
                    GLFramebuffer: t1("./GLFramebuffer"),
                    GLShader: t1("./GLShader"),
                    GLTexture: t1("./GLTexture"),
                    VertexArrayObject: t1("./VertexArrayObject"),
                    shader: t1("./shader")
                };
                void 0 !== e && e.exports && (e.exports = n), "undefined" != typeof window && (window.PIXI = window.PIXI || {}, window.PIXI.glCore = n);
            },
            {
                "./GLBuffer": 6,
                "./GLFramebuffer": 7,
                "./GLShader": 8,
                "./GLTexture": 9,
                "./VertexArrayObject": 10,
                "./createContext": 11,
                "./setVertexAttribArrays": 13,
                "./shader": 19
            }
        ],
        13: [
            function(t1, e, r) {
                var n = function(t1, e, r) {
                    var n;
                    if (r) {
                        var i = r.tempAttribState, o = r.attribState;
                        for(n = 0; n < i.length; n++)i[n] = !1;
                        for(n = 0; n < e.length; n++)i[e[n].attribute.location] = !0;
                        for(n = 0; n < o.length; n++)o[n] !== i[n] && (o[n] = i[n], r.attribState[n] ? t1.enableVertexAttribArray(n) : t1.disableVertexAttribArray(n));
                    } else for(n = 0; n < e.length; n++){
                        var s = e[n];
                        t1.enableVertexAttribArray(s.attribute.location);
                    }
                };
                e.exports = n;
            },
            {}
        ],
        14: [
            function(t1, e, r) {
                var n = function(t1, e, r, n) {
                    var o = i(t1, t1.VERTEX_SHADER, e), s = i(t1, t1.FRAGMENT_SHADER, r), a = t1.createProgram();
                    if (t1.attachShader(a, o), t1.attachShader(a, s), n) for(var u in n)t1.bindAttribLocation(a, n[u], u);
                    return t1.linkProgram(a), t1.getProgramParameter(a, t1.LINK_STATUS) || (console.error("Pixi.js Error: Could not initialize shader."), console.error("gl.VALIDATE_STATUS", t1.getProgramParameter(a, t1.VALIDATE_STATUS)), console.error("gl.getError()", t1.getError()), "" !== t1.getProgramInfoLog(a) && console.warn("Pixi.js Warning: gl.getProgramInfoLog()", t1.getProgramInfoLog(a)), t1.deleteProgram(a), a = null), t1.deleteShader(o), t1.deleteShader(s), a;
                }, i = function(t1, e, r) {
                    var n = t1.createShader(e);
                    return t1.shaderSource(n, r), t1.compileShader(n), t1.getShaderParameter(n, t1.COMPILE_STATUS) ? n : (console.log(t1.getShaderInfoLog(n)), null);
                };
                e.exports = n;
            },
            {}
        ],
        15: [
            function(t1, e, r) {
                var n = function(t1, e) {
                    switch(t1){
                        case "float":
                            return 0;
                        case "vec2":
                            return new Float32Array(2 * e);
                        case "vec3":
                            return new Float32Array(3 * e);
                        case "vec4":
                            return new Float32Array(4 * e);
                        case "int":
                        case "sampler2D":
                            return 0;
                        case "ivec2":
                            return new Int32Array(2 * e);
                        case "ivec3":
                            return new Int32Array(3 * e);
                        case "ivec4":
                            return new Int32Array(4 * e);
                        case "bool":
                            return !1;
                        case "bvec2":
                            return i(2 * e);
                        case "bvec3":
                            return i(3 * e);
                        case "bvec4":
                            return i(4 * e);
                        case "mat2":
                            return new Float32Array([
                                1,
                                0,
                                0,
                                1
                            ]);
                        case "mat3":
                            return new Float32Array([
                                1,
                                0,
                                0,
                                0,
                                1,
                                0,
                                0,
                                0,
                                1
                            ]);
                        case "mat4":
                            return new Float32Array([
                                1,
                                0,
                                0,
                                0,
                                0,
                                1,
                                0,
                                0,
                                0,
                                0,
                                1,
                                0,
                                0,
                                0,
                                0,
                                1
                            ]);
                    }
                }, i = function(t1) {
                    for(var e = new Array(t1), r = 0; r < e.length; r++)e[r] = !1;
                    return e;
                };
                e.exports = n;
            },
            {}
        ],
        16: [
            function(t1, e, r) {
                var n = t1("./mapType"), i = t1("./mapSize"), o = function(t1, e) {
                    for(var r = {}, o = t1.getProgramParameter(e, t1.ACTIVE_ATTRIBUTES), a = 0; a < o; a++){
                        var u = t1.getActiveAttrib(e, a), h = n(t1, u.type);
                        r[u.name] = {
                            type: h,
                            size: i(h),
                            location: t1.getAttribLocation(e, u.name),
                            pointer: s
                        };
                    }
                    return r;
                }, s = function(t1, e, r, n) {
                    gl.vertexAttribPointer(this.location, this.size, t1 || gl.FLOAT, e || !1, r || 0, n || 0);
                };
                e.exports = o;
            },
            {
                "./mapSize": 20,
                "./mapType": 21
            }
        ],
        17: [
            function(t1, e, r) {
                var n = t1("./mapType"), i = t1("./defaultValue"), o = function(t1, e) {
                    for(var r = {}, o = t1.getProgramParameter(e, t1.ACTIVE_UNIFORMS), s = 0; s < o; s++){
                        var a = t1.getActiveUniform(e, s), u = a.name.replace(/\[.*?\]/, ""), h = n(t1, a.type);
                        r[u] = {
                            type: h,
                            size: a.size,
                            location: t1.getUniformLocation(e, u),
                            value: i(h, a.size)
                        };
                    }
                    return r;
                };
                e.exports = o;
            },
            {
                "./defaultValue": 15,
                "./mapType": 21
            }
        ],
        18: [
            function(t1, e, r) {
                var n = function(t1, e) {
                    var r = {
                        data: {}
                    };
                    r.gl = t1;
                    for(var n = Object.keys(e), a = 0; a < n.length; a++){
                        var u = n[a], h = u.split("."), l = h[h.length - 1], c = s(h, r), d = e[u];
                        c.data[l] = d, c.gl = t1, Object.defineProperty(c, l, {
                            get: i(l),
                            set: o(l, d)
                        });
                    }
                    return r;
                }, i = function(t1) {
                    var e = a.replace("%%", t1);
                    return new Function(e);
                }, o = function(t1, e) {
                    var r, n = u.replace(/%%/g, t1);
                    return r = 1 === e.size ? h[e.type] : l[e.type], r && (n += "\nthis.gl." + r + ";"), new Function("value", n);
                }, s = function(t1, e) {
                    for(var r = e, n = 0; n < t1.length - 1; n++){
                        var i = r[t1[n]] || {
                            data: {}
                        };
                        r[t1[n]] = i, r = i;
                    }
                    return r;
                }, a = [
                    "return this.data.%%.value;"
                ].join("\n"), u = [
                    "this.data.%%.value = value;",
                    "var location = this.data.%%.location;"
                ].join("\n"), h = {
                    float: "uniform1f(location, value)",
                    vec2: "uniform2f(location, value[0], value[1])",
                    vec3: "uniform3f(location, value[0], value[1], value[2])",
                    vec4: "uniform4f(location, value[0], value[1], value[2], value[3])",
                    int: "uniform1i(location, value)",
                    ivec2: "uniform2i(location, value[0], value[1])",
                    ivec3: "uniform3i(location, value[0], value[1], value[2])",
                    ivec4: "uniform4i(location, value[0], value[1], value[2], value[3])",
                    bool: "uniform1i(location, value)",
                    bvec2: "uniform2i(location, value[0], value[1])",
                    bvec3: "uniform3i(location, value[0], value[1], value[2])",
                    bvec4: "uniform4i(location, value[0], value[1], value[2], value[3])",
                    mat2: "uniformMatrix2fv(location, false, value)",
                    mat3: "uniformMatrix3fv(location, false, value)",
                    mat4: "uniformMatrix4fv(location, false, value)",
                    sampler2D: "uniform1i(location, value)"
                }, l = {
                    float: "uniform1fv(location, value)",
                    vec2: "uniform2fv(location, value)",
                    vec3: "uniform3fv(location, value)",
                    vec4: "uniform4fv(location, value)",
                    int: "uniform1iv(location, value)",
                    ivec2: "uniform2iv(location, value)",
                    ivec3: "uniform3iv(location, value)",
                    ivec4: "uniform4iv(location, value)",
                    bool: "uniform1iv(location, value)",
                    bvec2: "uniform2iv(location, value)",
                    bvec3: "uniform3iv(location, value)",
                    bvec4: "uniform4iv(location, value)",
                    sampler2D: "uniform1iv(location, value)"
                };
                e.exports = n;
            },
            {}
        ],
        19: [
            function(t1, e, r) {
                e.exports = {
                    compileProgram: t1("./compileProgram"),
                    defaultValue: t1("./defaultValue"),
                    extractAttributes: t1("./extractAttributes"),
                    extractUniforms: t1("./extractUniforms"),
                    generateUniformAccessObject: t1("./generateUniformAccessObject"),
                    setPrecision: t1("./setPrecision"),
                    mapSize: t1("./mapSize"),
                    mapType: t1("./mapType")
                };
            },
            {
                "./compileProgram": 14,
                "./defaultValue": 15,
                "./extractAttributes": 16,
                "./extractUniforms": 17,
                "./generateUniformAccessObject": 18,
                "./mapSize": 20,
                "./mapType": 21,
                "./setPrecision": 22
            }
        ],
        20: [
            function(t1, e, r) {
                var n = function(t1) {
                    return i[t1];
                }, i = {
                    float: 1,
                    vec2: 2,
                    vec3: 3,
                    vec4: 4,
                    int: 1,
                    ivec2: 2,
                    ivec3: 3,
                    ivec4: 4,
                    bool: 1,
                    bvec2: 2,
                    bvec3: 3,
                    bvec4: 4,
                    mat2: 4,
                    mat3: 9,
                    mat4: 16,
                    sampler2D: 1
                };
                e.exports = n;
            },
            {}
        ],
        21: [
            function(t1, e, r) {
                var n = function(t1, e) {
                    if (!i) {
                        var r = Object.keys(o);
                        i = {};
                        for(var n = 0; n < r.length; ++n){
                            var s = r[n];
                            i[t1[s]] = o[s];
                        }
                    }
                    return i[e];
                }, i = null, o = {
                    FLOAT: "float",
                    FLOAT_VEC2: "vec2",
                    FLOAT_VEC3: "vec3",
                    FLOAT_VEC4: "vec4",
                    INT: "int",
                    INT_VEC2: "ivec2",
                    INT_VEC3: "ivec3",
                    INT_VEC4: "ivec4",
                    BOOL: "bool",
                    BOOL_VEC2: "bvec2",
                    BOOL_VEC3: "bvec3",
                    BOOL_VEC4: "bvec4",
                    FLOAT_MAT2: "mat2",
                    FLOAT_MAT3: "mat3",
                    FLOAT_MAT4: "mat4",
                    SAMPLER_2D: "sampler2D"
                };
                e.exports = n;
            },
            {}
        ],
        22: [
            function(t1, e, r) {
                var n = function(t1, e) {
                    return "precision" !== t1.substring(0, 9) ? "precision " + e + " float;\n" + t1 : t1;
                };
                e.exports = n;
            },
            {}
        ],
        23: [
            function(t1, e, r) {
                (function(t1) {
                    function e(t1, e) {
                        for(var r = 0, n = t1.length - 1; n >= 0; n--){
                            var i = t1[n];
                            "." === i ? t1.splice(n, 1) : ".." === i ? (t1.splice(n, 1), r++) : r && (t1.splice(n, 1), r--);
                        }
                        if (e) for(; r--; r)t1.unshift("..");
                        return t1;
                    }
                    function n(t1, e) {
                        if (t1.filter) return t1.filter(e);
                        for(var r = [], n = 0; n < t1.length; n++)e(t1[n], n, t1) && r.push(t1[n]);
                        return r;
                    }
                    var i = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, o = function(t1) {
                        return i.exec(t1).slice(1);
                    };
                    r.resolve = function() {
                        for(var r = "", i = !1, o = arguments.length - 1; o >= -1 && !i; o--){
                            var s = o >= 0 ? arguments[o] : t1.cwd();
                            if ("string" != typeof s) throw new TypeError("Arguments to path.resolve must be strings");
                            s && (r = s + "/" + r, i = "/" === s.charAt(0));
                        }
                        return r = e(n(r.split("/"), function(t1) {
                            return !!t1;
                        }), !i).join("/"), (i ? "/" : "") + r || ".";
                    }, r.normalize = function(t1) {
                        var i = r.isAbsolute(t1), o = "/" === s(t1, -1);
                        return t1 = e(n(t1.split("/"), function(t1) {
                            return !!t1;
                        }), !i).join("/"), t1 || i || (t1 = "."), t1 && o && (t1 += "/"), (i ? "/" : "") + t1;
                    }, r.isAbsolute = function(t1) {
                        return "/" === t1.charAt(0);
                    }, r.join = function() {
                        var t1 = Array.prototype.slice.call(arguments, 0);
                        return r.normalize(n(t1, function(t1, e) {
                            if ("string" != typeof t1) throw new TypeError("Arguments to path.join must be strings");
                            return t1;
                        }).join("/"));
                    }, r.relative = function(t1, e) {
                        function n(t1) {
                            for(var e = 0; e < t1.length && "" === t1[e]; e++);
                            for(var r = t1.length - 1; r >= 0 && "" === t1[r]; r--);
                            return e > r ? [] : t1.slice(e, r - e + 1);
                        }
                        t1 = r.resolve(t1).substr(1), e = r.resolve(e).substr(1);
                        for(var i = n(t1.split("/")), o = n(e.split("/")), s = Math.min(i.length, o.length), a = s, u = 0; u < s; u++)if (i[u] !== o[u]) {
                            a = u;
                            break;
                        }
                        for(var h = [], u = a; u < i.length; u++)h.push("..");
                        return h = h.concat(o.slice(a)), h.join("/");
                    }, r.sep = "/", r.delimiter = ":", r.dirname = function(t1) {
                        var e = o(t1), r = e[0], n = e[1];
                        return r || n ? (n && (n = n.substr(0, n.length - 1)), r + n) : ".";
                    }, r.basename = function(t1, e) {
                        var r = o(t1)[2];
                        return e && r.substr(-1 * e.length) === e && (r = r.substr(0, r.length - e.length)), r;
                    }, r.extname = function(t1) {
                        return o(t1)[3];
                    };
                    var s = "b" === "ab".substr(-1) ? function(t1, e, r) {
                        return t1.substr(e, r);
                    } : function(t1, e, r) {
                        return e < 0 && (e = t1.length + e), t1.substr(e, r);
                    };
                }).call(this, t1("_process"));
            },
            {
                _process: 24
            }
        ],
        24: [
            function(t1, e, r) {
                function n() {
                    throw new Error("setTimeout has not been defined");
                }
                function i() {
                    throw new Error("clearTimeout has not been defined");
                }
                function o(t1) {
                    if (c === setTimeout) return setTimeout(t1, 0);
                    if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(t1, 0);
                    try {
                        return c(t1, 0);
                    } catch (e) {
                        try {
                            return c.call(null, t1, 0);
                        } catch (e1) {
                            return c.call(this, t1, 0);
                        }
                    }
                }
                function s(t1) {
                    if (d === clearTimeout) return clearTimeout(t1);
                    if ((d === i || !d) && clearTimeout) return d = clearTimeout, clearTimeout(t1);
                    try {
                        return d(t1);
                    } catch (e) {
                        try {
                            return d.call(null, t1);
                        } catch (e1) {
                            return d.call(this, t1);
                        }
                    }
                }
                function a() {
                    y && p && (y = !1, p.length ? v = p.concat(v) : g = -1, v.length && u());
                }
                function u() {
                    if (!y) {
                        var t1 = o(a);
                        y = !0;
                        for(var e = v.length; e;){
                            for(p = v, v = []; ++g < e;)p && p[g].run();
                            g = -1, e = v.length;
                        }
                        p = null, y = !1, s(t1);
                    }
                }
                function h(t1, e) {
                    this.fun = t1, this.array = e;
                }
                function l() {}
                var c, d, f = e.exports = {};
                !function() {
                    try {
                        c = "function" == typeof setTimeout ? setTimeout : n;
                    } catch (t1) {
                        c = n;
                    }
                    try {
                        d = "function" == typeof clearTimeout ? clearTimeout : i;
                    } catch (t2) {
                        d = i;
                    }
                }();
                var p, v = [], y = !1, g = -1;
                f.nextTick = function(t1) {
                    var e = new Array(arguments.length - 1);
                    if (arguments.length > 1) for(var r = 1; r < arguments.length; r++)e[r - 1] = arguments[r];
                    v.push(new h(t1, e)), 1 !== v.length || y || o(u);
                }, h.prototype.run = function() {
                    this.fun.apply(null, this.array);
                }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = l, f.addListener = l, f.once = l, f.off = l, f.removeListener = l, f.removeAllListeners = l, f.emit = l, f.prependListener = l, f.prependOnceListener = l, f.listeners = function(t1) {
                    return [];
                }, f.binding = function(t1) {
                    throw new Error("process.binding is not supported");
                }, f.cwd = function() {
                    return "/";
                }, f.chdir = function(t1) {
                    throw new Error("process.chdir is not supported");
                }, f.umask = function() {
                    return 0;
                };
            },
            {}
        ],
        25: [
            function(e, r, n) {
                (function(e) {
                    !function(i) {
                        function o(t1) {
                            throw new RangeError(L[t1]);
                        }
                        function s(t1, e) {
                            for(var r = t1.length, n = []; r--;)n[r] = e(t1[r]);
                            return n;
                        }
                        function a(t1, e) {
                            var r = t1.split("@"), n = "";
                            return r.length > 1 && (n = r[0] + "@", t1 = r[1]), t1 = t1.replace(D, "."), n + s(t1.split("."), e).join(".");
                        }
                        function u(t1) {
                            for(var e, r, n = [], i = 0, o = t1.length; i < o;)e = t1.charCodeAt(i++), e >= 55296 && e <= 56319 && i < o ? (r = t1.charCodeAt(i++), 56320 == (64512 & r) ? n.push(((1023 & e) << 10) + (1023 & r) + 65536) : (n.push(e), i--)) : n.push(e);
                            return n;
                        }
                        function h(t1) {
                            return s(t1, function(t1) {
                                var e = "";
                                return t1 > 65535 && (t1 -= 65536, e += B(t1 >>> 10 & 1023 | 55296), t1 = 56320 | 1023 & t1), e += B(t1);
                            }).join("");
                        }
                        function l(t1) {
                            return t1 - 48 < 10 ? t1 - 22 : t1 - 65 < 26 ? t1 - 65 : t1 - 97 < 26 ? t1 - 97 : w;
                        }
                        function c(t1, e) {
                            return t1 + 22 + 75 * (t1 < 26) - ((0 != e) << 5);
                        }
                        function d(t1, e, r) {
                            var n = 0;
                            for(t1 = r ? F(t1 / P) : t1 >> 1, t1 += F(t1 / e); t1 > N * S >> 1; n += w)t1 = F(t1 / N);
                            return F(n + (N + 1) * t1 / (t1 + O));
                        }
                        function f(t1) {
                            var e, r, n, i, s, a, u, c, f, p, v = [], y = t1.length, g = 0, m = C, _ = M;
                            for(r = t1.lastIndexOf(R), r < 0 && (r = 0), n = 0; n < r; ++n)t1.charCodeAt(n) >= 128 && o("not-basic"), v.push(t1.charCodeAt(n));
                            for(i = r > 0 ? r + 1 : 0; i < y;){
                                for(s = g, a = 1, u = w; i >= y && o("invalid-input"), c = l(t1.charCodeAt(i++)), (c >= w || c > F((T - g) / a)) && o("overflow"), g += c * a, f = u <= _ ? E : u >= _ + S ? S : u - _, !(c < f); u += w)p = w - f, a > F(T / p) && o("overflow"), a *= p;
                                e = v.length + 1, _ = d(g - s, e, 0 == s), F(g / e) > T - m && o("overflow"), m += F(g / e), g %= e, v.splice(g++, 0, m);
                            }
                            return h(v);
                        }
                        function p(t1) {
                            var e, r, n, i, s, a, h, l, f, p, v, y, g, m, _, b = [];
                            for(t1 = u(t1), y = t1.length, e = C, r = 0, s = M, a = 0; a < y; ++a)(v = t1[a]) < 128 && b.push(B(v));
                            for(n = i = b.length, i && b.push(R); n < y;){
                                for(h = T, a = 0; a < y; ++a)(v = t1[a]) >= e && v < h && (h = v);
                                for(g = n + 1, h - e > F((T - r) / g) && o("overflow"), r += (h - e) * g, e = h, a = 0; a < y; ++a)if (v = t1[a], v < e && ++r > T && o("overflow"), v == e) {
                                    for(l = r, f = w; p = f <= s ? E : f >= s + S ? S : f - s, !(l < p); f += w)_ = l - p, m = w - p, b.push(B(c(p + _ % m, 0))), l = F(_ / m);
                                    b.push(B(c(l, 0))), s = d(r, g, n == i), r = 0, ++n;
                                }
                                ++r, ++e;
                            }
                            return b.join("");
                        }
                        function v(t1) {
                            return a(t1, function(t1) {
                                return A.test(t1) ? f(t1.slice(4).toLowerCase()) : t1;
                            });
                        }
                        function y(t1) {
                            return a(t1, function(t1) {
                                return I.test(t1) ? "xn--" + p(t1) : t1;
                            });
                        }
                        var g = "object" == typeof n && n && !n.nodeType && n, m = "object" == typeof r && r && !r.nodeType && r, _ = "object" == typeof e && e;
                        _.global !== _ && _.window !== _ && _.self !== _ || (i = _);
                        var b, x, T = 2147483647, w = 36, E = 1, S = 26, O = 38, P = 700, M = 72, C = 128, R = "-", A = /^xn--/, I = /[^\x20-\x7E]/, D = /[\x2E\u3002\uFF0E\uFF61]/g, L = {
                            overflow: "Overflow: input needs wider integers to process",
                            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                            "invalid-input": "Invalid input"
                        }, N = w - E, F = Math.floor, B = String.fromCharCode;
                        if (b = {
                            version: "1.4.1",
                            ucs2: {
                                decode: u,
                                encode: h
                            },
                            decode: f,
                            encode: p,
                            toASCII: y,
                            toUnicode: v
                        }, "function" == typeof t1 && "object" == typeof t1.amd && t1.amd) t1("punycode", function() {
                            return b;
                        });
                        else if (g && m) {
                            if (r.exports == g) m.exports = b;
                            else for(x in b)b.hasOwnProperty(x) && (g[x] = b[x]);
                        } else i.punycode = b;
                    }(this);
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
            },
            {}
        ],
        26: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    return Object.prototype.hasOwnProperty.call(t1, e);
                }
                e.exports = function(t1, e, r, o) {
                    e = e || "&", r = r || "=";
                    var s = {};
                    if ("string" != typeof t1 || 0 === t1.length) return s;
                    var a = /\+/g;
                    t1 = t1.split(e);
                    var u = 1e3;
                    o && "number" == typeof o.maxKeys && (u = o.maxKeys);
                    var h = t1.length;
                    u > 0 && h > u && (h = u);
                    for(var l = 0; l < h; ++l){
                        var c, d, f, p, v = t1[l].replace(a, "%20"), y = v.indexOf(r);
                        y >= 0 ? (c = v.substr(0, y), d = v.substr(y + 1)) : (c = v, d = ""), f = decodeURIComponent(c), p = decodeURIComponent(d), n(s, f) ? i(s[f]) ? s[f].push(p) : s[f] = [
                            s[f],
                            p
                        ] : s[f] = p;
                    }
                    return s;
                };
                var i = Array.isArray || function(t1) {
                    return "[object Array]" === Object.prototype.toString.call(t1);
                };
            },
            {}
        ],
        27: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (t1.map) return t1.map(e);
                    for(var r = [], n = 0; n < t1.length; n++)r.push(e(t1[n], n));
                    return r;
                }
                var i = function(t1) {
                    switch(typeof t1){
                        case "string":
                            return t1;
                        case "boolean":
                            return t1 ? "true" : "false";
                        case "number":
                            return isFinite(t1) ? t1 : "";
                        default:
                            return "";
                    }
                };
                e.exports = function(t1, e, r, a) {
                    return e = e || "&", r = r || "=", null === t1 && (t1 = void 0), "object" == typeof t1 ? n(s(t1), function(s) {
                        var a = encodeURIComponent(i(s)) + r;
                        return o(t1[s]) ? n(t1[s], function(t1) {
                            return a + encodeURIComponent(i(t1));
                        }).join(e) : a + encodeURIComponent(i(t1[s]));
                    }).join(e) : a ? encodeURIComponent(i(a)) + r + encodeURIComponent(i(t1)) : "";
                };
                var o = Array.isArray || function(t1) {
                    return "[object Array]" === Object.prototype.toString.call(t1);
                }, s = Object.keys || function(t1) {
                    var e = [];
                    for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && e.push(r);
                    return e;
                };
            },
            {}
        ],
        28: [
            function(t1, e, r) {
                "use strict";
                r.decode = r.parse = t1("./decode"), r.encode = r.stringify = t1("./encode");
            },
            {
                "./decode": 26,
                "./encode": 27
            }
        ],
        29: [
            function(t1, e, r) {
                "use strict";
                function n() {
                    this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
                }
                function i(t1, e, r) {
                    if (t1 && h.isObject(t1) && t1 instanceof n) return t1;
                    var i = new n;
                    return i.parse(t1, e, r), i;
                }
                function o(t1) {
                    return h.isString(t1) && (t1 = i(t1)), t1 instanceof n ? t1.format() : n.prototype.format.call(t1);
                }
                function s(t1, e) {
                    return i(t1, !1, !0).resolve(e);
                }
                function a(t1, e) {
                    return t1 ? i(t1, !1, !0).resolveObject(e) : e;
                }
                var u = t1("punycode"), h = t1("./util");
                r.parse = i, r.resolve = s, r.resolveObject = a, r.format = o, r.Url = n;
                var l = /^([a-z0-9.+-]+:)/i, c = /:[0-9]*$/, d = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, f = [
                    "<",
                    ">",
                    '"',
                    "`",
                    " ",
                    "\r",
                    "\n",
                    "	"
                ], p = [
                    "{",
                    "}",
                    "|",
                    "\\",
                    "^",
                    "`"
                ].concat(f), v = [
                    "'"
                ].concat(p), y = [
                    "%",
                    "/",
                    "?",
                    ";",
                    "#"
                ].concat(v), g = [
                    "/",
                    "?",
                    "#"
                ], m = /^[+a-z0-9A-Z_-]{0,63}$/, _ = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, b = {
                    javascript: !0,
                    "javascript:": !0
                }, x = {
                    javascript: !0,
                    "javascript:": !0
                }, T = {
                    http: !0,
                    https: !0,
                    ftp: !0,
                    gopher: !0,
                    file: !0,
                    "http:": !0,
                    "https:": !0,
                    "ftp:": !0,
                    "gopher:": !0,
                    "file:": !0
                }, w = t1("querystring");
                n.prototype.parse = function(t1, e, r) {
                    if (!h.isString(t1)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t1);
                    var n = t1.indexOf("?"), i = -1 !== n && n < t1.indexOf("#") ? "?" : "#", o = t1.split(i), s = /\\/g;
                    o[0] = o[0].replace(s, "/"), t1 = o.join(i);
                    var a = t1;
                    if (a = a.trim(), !r && 1 === t1.split("#").length) {
                        var c = d.exec(a);
                        if (c) return this.path = a, this.href = a, this.pathname = c[1], c[2] ? (this.search = c[2], this.query = e ? w.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", this.query = {}), this;
                    }
                    var f = l.exec(a);
                    if (f) {
                        f = f[0];
                        var p = f.toLowerCase();
                        this.protocol = p, a = a.substr(f.length);
                    }
                    if (r || f || a.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                        var E = "//" === a.substr(0, 2);
                        !E || f && x[f] || (a = a.substr(2), this.slashes = !0);
                    }
                    if (!x[f] && (E || f && !T[f])) {
                        for(var S = -1, O = 0; O < g.length; O++){
                            var P = a.indexOf(g[O]);
                            -1 !== P && (-1 === S || P < S) && (S = P);
                        }
                        var M, C;
                        C = -1 === S ? a.lastIndexOf("@") : a.lastIndexOf("@", S), -1 !== C && (M = a.slice(0, C), a = a.slice(C + 1), this.auth = decodeURIComponent(M)), S = -1;
                        for(var O = 0; O < y.length; O++){
                            var P = a.indexOf(y[O]);
                            -1 !== P && (-1 === S || P < S) && (S = P);
                        }
                        -1 === S && (S = a.length), this.host = a.slice(0, S), a = a.slice(S), this.parseHost(), this.hostname = this.hostname || "";
                        var R = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                        if (!R) for(var A = this.hostname.split(/\./), O = 0, I = A.length; O < I; O++){
                            var D = A[O];
                            if (D && !D.match(m)) {
                                for(var L = "", N = 0, F = D.length; N < F; N++)D.charCodeAt(N) > 127 ? L += "x" : L += D[N];
                                if (!L.match(m)) {
                                    var B = A.slice(0, O), k = A.slice(O + 1), j = D.match(_);
                                    j && (B.push(j[1]), k.unshift(j[2])), k.length && (a = "/" + k.join(".") + a), this.hostname = B.join(".");
                                    break;
                                }
                            }
                        }
                        this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), R || (this.hostname = u.toASCII(this.hostname));
                        var U = this.port ? ":" + this.port : "", X = this.hostname || "";
                        this.host = X + U, this.href += this.host, R && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== a[0] && (a = "/" + a));
                    }
                    if (!b[p]) for(var O = 0, I = v.length; O < I; O++){
                        var G = v[O];
                        if (-1 !== a.indexOf(G)) {
                            var W = encodeURIComponent(G);
                            W === G && (W = escape(G)), a = a.split(G).join(W);
                        }
                    }
                    var H = a.indexOf("#");
                    -1 !== H && (this.hash = a.substr(H), a = a.slice(0, H));
                    var Y = a.indexOf("?");
                    if (-1 !== Y ? (this.search = a.substr(Y), this.query = a.substr(Y + 1), e && (this.query = w.parse(this.query)), a = a.slice(0, Y)) : e && (this.search = "", this.query = {}), a && (this.pathname = a), T[p] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                        var U = this.pathname || "", V = this.search || "";
                        this.path = U + V;
                    }
                    return this.href = this.format(), this;
                }, n.prototype.format = function() {
                    var t1 = this.auth || "";
                    t1 && (t1 = encodeURIComponent(t1), t1 = t1.replace(/%3A/i, ":"), t1 += "@");
                    var e = this.protocol || "", r = this.pathname || "", n = this.hash || "", i = !1, o = "";
                    this.host ? i = t1 + this.host : this.hostname && (i = t1 + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && h.isObject(this.query) && Object.keys(this.query).length && (o = w.stringify(this.query));
                    var s = this.search || o && "?" + o || "";
                    return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || T[e]) && !1 !== i ? (i = "//" + (i || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : i || (i = ""), n && "#" !== n.charAt(0) && (n = "#" + n), s && "?" !== s.charAt(0) && (s = "?" + s), r = r.replace(/[?#]/g, function(t1) {
                        return encodeURIComponent(t1);
                    }), s = s.replace("#", "%23"), e + i + r + s + n;
                }, n.prototype.resolve = function(t1) {
                    return this.resolveObject(i(t1, !1, !0)).format();
                }, n.prototype.resolveObject = function(t1) {
                    if (h.isString(t1)) {
                        var e = new n;
                        e.parse(t1, !1, !0), t1 = e;
                    }
                    for(var r = new n, i = Object.keys(this), o = 0; o < i.length; o++){
                        var s = i[o];
                        r[s] = this[s];
                    }
                    if (r.hash = t1.hash, "" === t1.href) return r.href = r.format(), r;
                    if (t1.slashes && !t1.protocol) {
                        for(var a = Object.keys(t1), u = 0; u < a.length; u++){
                            var l = a[u];
                            "protocol" !== l && (r[l] = t1[l]);
                        }
                        return T[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r;
                    }
                    if (t1.protocol && t1.protocol !== r.protocol) {
                        if (!T[t1.protocol]) {
                            for(var c = Object.keys(t1), d = 0; d < c.length; d++){
                                var f = c[d];
                                r[f] = t1[f];
                            }
                            return r.href = r.format(), r;
                        }
                        if (r.protocol = t1.protocol, t1.host || x[t1.protocol]) r.pathname = t1.pathname;
                        else {
                            for(var p = (t1.pathname || "").split("/"); p.length && !(t1.host = p.shift()););
                            t1.host || (t1.host = ""), t1.hostname || (t1.hostname = ""), "" !== p[0] && p.unshift(""), p.length < 2 && p.unshift(""), r.pathname = p.join("/");
                        }
                        if (r.search = t1.search, r.query = t1.query, r.host = t1.host || "", r.auth = t1.auth, r.hostname = t1.hostname || t1.host, r.port = t1.port, r.pathname || r.search) {
                            var v = r.pathname || "", y = r.search || "";
                            r.path = v + y;
                        }
                        return r.slashes = r.slashes || t1.slashes, r.href = r.format(), r;
                    }
                    var g = r.pathname && "/" === r.pathname.charAt(0), m = t1.host || t1.pathname && "/" === t1.pathname.charAt(0), _ = m || g || r.host && t1.pathname, b = _, w = r.pathname && r.pathname.split("/") || [], p = t1.pathname && t1.pathname.split("/") || [], E = r.protocol && !T[r.protocol];
                    if (E && (r.hostname = "", r.port = null, r.host && ("" === w[0] ? w[0] = r.host : w.unshift(r.host)), r.host = "", t1.protocol && (t1.hostname = null, t1.port = null, t1.host && ("" === p[0] ? p[0] = t1.host : p.unshift(t1.host)), t1.host = null), _ = _ && ("" === p[0] || "" === w[0])), m) r.host = t1.host || "" === t1.host ? t1.host : r.host, r.hostname = t1.hostname || "" === t1.hostname ? t1.hostname : r.hostname, r.search = t1.search, r.query = t1.query, w = p;
                    else if (p.length) w || (w = []), w.pop(), w = w.concat(p), r.search = t1.search, r.query = t1.query;
                    else if (!h.isNullOrUndefined(t1.search)) {
                        if (E) {
                            r.hostname = r.host = w.shift();
                            var S = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@");
                            S && (r.auth = S.shift(), r.host = r.hostname = S.shift());
                        }
                        return r.search = t1.search, r.query = t1.query, h.isNull(r.pathname) && h.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r;
                    }
                    if (!w.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
                    for(var O = w.slice(-1)[0], P = (r.host || t1.host || w.length > 1) && ("." === O || ".." === O) || "" === O, M = 0, C = w.length; C >= 0; C--)O = w[C], "." === O ? w.splice(C, 1) : ".." === O ? (w.splice(C, 1), M++) : M && (w.splice(C, 1), M--);
                    if (!_ && !b) for(; M--; M)w.unshift("..");
                    !_ || "" === w[0] || w[0] && "/" === w[0].charAt(0) || w.unshift(""), P && "/" !== w.join("/").substr(-1) && w.push("");
                    var R = "" === w[0] || w[0] && "/" === w[0].charAt(0);
                    if (E) {
                        r.hostname = r.host = R ? "" : w.length ? w.shift() : "";
                        var S = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@");
                        S && (r.auth = S.shift(), r.host = r.hostname = S.shift());
                    }
                    return _ = _ || r.host && w.length, _ && !R && w.unshift(""), w.length ? r.pathname = w.join("/") : (r.pathname = null, r.path = null), h.isNull(r.pathname) && h.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = t1.auth || r.auth, r.slashes = r.slashes || t1.slashes, r.href = r.format(), r;
                }, n.prototype.parseHost = function() {
                    var t1 = this.host, e = c.exec(t1);
                    e && (e = e[0], ":" !== e && (this.port = e.substr(1)), t1 = t1.substr(0, t1.length - e.length)), t1 && (this.hostname = t1);
                };
            },
            {
                "./util": 30,
                punycode: 25,
                querystring: 28
            }
        ],
        30: [
            function(t1, e, r) {
                "use strict";
                e.exports = {
                    isString: function(t1) {
                        return "string" == typeof t1;
                    },
                    isObject: function(t1) {
                        return "object" == typeof t1 && null !== t1;
                    },
                    isNull: function(t1) {
                        return null === t1;
                    },
                    isNullOrUndefined: function(t1) {
                        return null == t1;
                    }
                };
            },
            {}
        ],
        31: [
            function(t1, e, r) {
                "use strict";
                e.exports = function(t1, e, r) {
                    var n, i = t1.length;
                    if (!(e >= i || 0 === r)) {
                        r = e + r > i ? i - e : r;
                        var o = i - r;
                        for(n = e; n < o; ++n)t1[n] = t1[n + r];
                        t1.length = o;
                    }
                };
            },
            {}
        ],
        32: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t1) {
                    return typeof t1;
                } : function(t1) {
                    return t1 && "function" == typeof Symbol && t1.constructor === Symbol && t1 !== Symbol.prototype ? "symbol" : typeof t1;
                }, s = t1("mini-signals"), a = n(s), u = t1("parse-uri"), h = n(u), l = t1("./async"), c = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(l), d = t1("./Resource"), f = n(d), p = /(#[\w-]+)?$/, v = function() {
                    function t1() {
                        var e = this, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                        i(this, t1), this.baseUrl = r, this.progress = 0, this.loading = !1, this.defaultQueryString = "", this._beforeMiddleware = [], this._afterMiddleware = [], this._resourcesParsing = [], this._boundLoadResource = function(t1, r) {
                            return e._loadResource(t1, r);
                        }, this._queue = c.queue(this._boundLoadResource, n), this._queue.pause(), this.resources = {}, this.onProgress = new a.default, this.onError = new a.default, this.onLoad = new a.default, this.onStart = new a.default, this.onComplete = new a.default;
                    }
                    return t1.prototype.add = function(t1, e, r, n) {
                        if (Array.isArray(t1)) {
                            for(var i = 0; i < t1.length; ++i)this.add(t1[i]);
                            return this;
                        }
                        if ("object" === (void 0 === t1 ? "undefined" : o(t1)) && (n = e || t1.callback || t1.onComplete, r = t1, e = t1.url, t1 = t1.name || t1.key || t1.url), "string" != typeof e && (n = r, r = e, e = t1), "string" != typeof e) throw new Error("No url passed to add resource to loader.");
                        if ("function" == typeof r && (n = r, r = null), this.loading && (!r || !r.parentResource)) throw new Error("Cannot add resources while the loader is running.");
                        if (this.resources[t1]) throw new Error('Resource named "' + t1 + '" already exists.');
                        if (e = this._prepareUrl(e), this.resources[t1] = new f.default(t1, e, r), "function" == typeof n && this.resources[t1].onAfterMiddleware.once(n), this.loading) {
                            for(var s = r.parentResource, a = [], u = 0; u < s.children.length; ++u)s.children[u].isComplete || a.push(s.children[u]);
                            var h = s.progressChunk * (a.length + 1), l = h / (a.length + 2);
                            s.children.push(this.resources[t1]), s.progressChunk = l;
                            for(var c = 0; c < a.length; ++c)a[c].progressChunk = l;
                            this.resources[t1].progressChunk = l;
                        }
                        return this._queue.push(this.resources[t1]), this;
                    }, t1.prototype.pre = function(t1) {
                        return this._beforeMiddleware.push(t1), this;
                    }, t1.prototype.use = function(t1) {
                        return this._afterMiddleware.push(t1), this;
                    }, t1.prototype.reset = function() {
                        this.progress = 0, this.loading = !1, this._queue.kill(), this._queue.pause();
                        for(var t1 in this.resources){
                            var e = this.resources[t1];
                            e._onLoadBinding && e._onLoadBinding.detach(), e.isLoading && e.abort();
                        }
                        return this.resources = {}, this;
                    }, t1.prototype.load = function(t1) {
                        if ("function" == typeof t1 && this.onComplete.once(t1), this.loading) return this;
                        for(var e = 100 / this._queue._tasks.length, r = 0; r < this._queue._tasks.length; ++r)this._queue._tasks[r].data.progressChunk = e;
                        return this.loading = !0, this.onStart.dispatch(this), this._queue.resume(), this;
                    }, t1.prototype._prepareUrl = function(t1) {
                        var e = (0, h.default)(t1, {
                            strictMode: !0
                        }), r = void 0;
                        if (r = e.protocol || !e.path || 0 === t1.indexOf("//") ? t1 : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && "/" !== t1.charAt(0) ? this.baseUrl + "/" + t1 : this.baseUrl + t1, this.defaultQueryString) {
                            var n = p.exec(r)[0];
                            r = r.substr(0, r.length - n.length), -1 !== r.indexOf("?") ? r += "&" + this.defaultQueryString : r += "?" + this.defaultQueryString, r += n;
                        }
                        return r;
                    }, t1.prototype._loadResource = function(t1, e) {
                        var r = this;
                        t1._dequeue = e, c.eachSeries(this._beforeMiddleware, function(e, n) {
                            e.call(r, t1, function() {
                                n(t1.isComplete ? {} : null);
                            });
                        }, function() {
                            t1.isComplete ? r._onLoad(t1) : (t1._onLoadBinding = t1.onComplete.once(r._onLoad, r), t1.load());
                        }, !0);
                    }, t1.prototype._onComplete = function() {
                        this.loading = !1, this.onComplete.dispatch(this, this.resources);
                    }, t1.prototype._onLoad = function(t1) {
                        var e = this;
                        t1._onLoadBinding = null, this._resourcesParsing.push(t1), t1._dequeue(), c.eachSeries(this._afterMiddleware, function(r, n) {
                            r.call(e, t1, n);
                        }, function() {
                            t1.onAfterMiddleware.dispatch(t1), e.progress += t1.progressChunk, e.onProgress.dispatch(e, t1), t1.error ? e.onError.dispatch(t1.error, e, t1) : e.onLoad.dispatch(e, t1), e._resourcesParsing.splice(e._resourcesParsing.indexOf(t1), 1), e._queue.idle() && 0 === e._resourcesParsing.length && (e.progress = 100, e._onComplete());
                        }, !0);
                    }, t1;
                }();
                r.default = v;
            },
            {
                "./Resource": 33,
                "./async": 34,
                "mini-signals": 38,
                "parse-uri": 39
            }
        ],
        33: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function o() {}
                function s(t1, e, r) {
                    e && 0 === e.indexOf(".") && (e = e.substring(1)), e && (t1[e] = r);
                }
                function a(t1) {
                    return t1.toString().replace("object ", "");
                }
                r.__esModule = !0;
                var u = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), h = t1("parse-uri"), l = n(h), c = t1("mini-signals"), d = n(c), f = !(!window.XDomainRequest || "withCredentials" in new XMLHttpRequest), p = null, v = function() {
                    function t1(e, r, n) {
                        if (i(this, t1), "string" != typeof e || "string" != typeof r) throw new Error("Both name and url are required for constructing a resource.");
                        n = n || {}, this._flags = 0, this._setFlag(t1.STATUS_FLAGS.DATA_URL, 0 === r.indexOf("data:")), this.name = e, this.url = r, this.extension = this._getExtension(), this.data = null, this.crossOrigin = !0 === n.crossOrigin ? "anonymous" : n.crossOrigin, this.loadType = n.loadType || this._determineLoadType(), this.xhrType = n.xhrType, this.metadata = n.metadata || {}, this.error = null, this.xhr = null, this.children = [], this.type = t1.TYPE.UNKNOWN, this.progressChunk = 0, this._dequeue = o, this._onLoadBinding = null, this._boundComplete = this.complete.bind(this), this._boundOnError = this._onError.bind(this), this._boundOnProgress = this._onProgress.bind(this), this._boundXhrOnError = this._xhrOnError.bind(this), this._boundXhrOnAbort = this._xhrOnAbort.bind(this), this._boundXhrOnLoad = this._xhrOnLoad.bind(this), this._boundXdrOnTimeout = this._xdrOnTimeout.bind(this), this.onStart = new d.default, this.onProgress = new d.default, this.onComplete = new d.default, this.onAfterMiddleware = new d.default;
                    }
                    return t1.setExtensionLoadType = function(e, r) {
                        s(t1._loadTypeMap, e, r);
                    }, t1.setExtensionXhrType = function(e, r) {
                        s(t1._xhrTypeMap, e, r);
                    }, t1.prototype.complete = function() {
                        if (this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError, !1), this.data.removeEventListener("load", this._boundComplete, !1), this.data.removeEventListener("progress", this._boundOnProgress, !1), this.data.removeEventListener("canplaythrough", this._boundComplete, !1)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError, !1), this.xhr.removeEventListener("abort", this._boundXhrOnAbort, !1), this.xhr.removeEventListener("progress", this._boundOnProgress, !1), this.xhr.removeEventListener("load", this._boundXhrOnLoad, !1)) : (this.xhr.onerror = null, this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null)), this.isComplete) throw new Error("Complete called again for an already completed resource.");
                        this._setFlag(t1.STATUS_FLAGS.COMPLETE, !0), this._setFlag(t1.STATUS_FLAGS.LOADING, !1), this.onComplete.dispatch(this);
                    }, t1.prototype.abort = function(e) {
                        if (!this.error) {
                            if (this.error = new Error(e), this.xhr) this.xhr.abort();
                            else if (this.xdr) this.xdr.abort();
                            else if (this.data) {
                                if (this.data.src) this.data.src = t1.EMPTY_GIF;
                                else for(; this.data.firstChild;)this.data.removeChild(this.data.firstChild);
                            }
                            this.complete();
                        }
                    }, t1.prototype.load = function(e) {
                        var r = this;
                        if (!this.isLoading) {
                            if (this.isComplete) return void (e && setTimeout(function() {
                                return e(r);
                            }, 1));
                            switch(e && this.onComplete.once(e), this._setFlag(t1.STATUS_FLAGS.LOADING, !0), this.onStart.dispatch(this), !1 !== this.crossOrigin && "string" == typeof this.crossOrigin || (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType){
                                case t1.LOAD_TYPE.IMAGE:
                                    this.type = t1.TYPE.IMAGE, this._loadElement("image");
                                    break;
                                case t1.LOAD_TYPE.AUDIO:
                                    this.type = t1.TYPE.AUDIO, this._loadSourceElement("audio");
                                    break;
                                case t1.LOAD_TYPE.VIDEO:
                                    this.type = t1.TYPE.VIDEO, this._loadSourceElement("video");
                                    break;
                                case t1.LOAD_TYPE.XHR:
                                default:
                                    f && this.crossOrigin ? this._loadXdr() : this._loadXhr();
                            }
                        }
                    }, t1.prototype._hasFlag = function(t1) {
                        return !!(this._flags & t1);
                    }, t1.prototype._setFlag = function(t1, e) {
                        this._flags = e ? this._flags | t1 : this._flags & ~t1;
                    }, t1.prototype._loadElement = function(t1) {
                        this.metadata.loadElement ? this.data = this.metadata.loadElement : "image" === t1 && void 0 !== window.Image ? this.data = new Image : this.data = document.createElement(t1), this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), this.metadata.skipSource || (this.data.src = this.url), this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1);
                    }, t1.prototype._loadSourceElement = function(t1) {
                        if (this.metadata.loadElement ? this.data = this.metadata.loadElement : "audio" === t1 && void 0 !== window.Audio ? this.data = new Audio : this.data = document.createElement(t1), null === this.data) return void this.abort("Unsupported element: " + t1);
                        if (!this.metadata.skipSource) {
                            if (navigator.isCocoonJS) this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
                            else if (Array.isArray(this.url)) for(var e = this.metadata.mimeType, r = 0; r < this.url.length; ++r)this.data.appendChild(this._createSource(t1, this.url[r], Array.isArray(e) ? e[r] : e));
                            else {
                                var n = this.metadata.mimeType;
                                this.data.appendChild(this._createSource(t1, this.url, Array.isArray(n) ? n[0] : n));
                            }
                        }
                        this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.data.addEventListener("canplaythrough", this._boundComplete, !1), this.data.load();
                    }, t1.prototype._loadXhr = function() {
                        "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                        var e = this.xhr = new XMLHttpRequest;
                        e.open("GET", this.url, !0), this.xhrType === t1.XHR_RESPONSE_TYPE.JSON || this.xhrType === t1.XHR_RESPONSE_TYPE.DOCUMENT ? e.responseType = t1.XHR_RESPONSE_TYPE.TEXT : e.responseType = this.xhrType, e.addEventListener("error", this._boundXhrOnError, !1), e.addEventListener("abort", this._boundXhrOnAbort, !1), e.addEventListener("progress", this._boundOnProgress, !1), e.addEventListener("load", this._boundXhrOnLoad, !1), e.send();
                    }, t1.prototype._loadXdr = function() {
                        "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                        var t1 = this.xhr = new XDomainRequest;
                        t1.timeout = 5e3, t1.onerror = this._boundXhrOnError, t1.ontimeout = this._boundXdrOnTimeout, t1.onprogress = this._boundOnProgress, t1.onload = this._boundXhrOnLoad, t1.open("GET", this.url, !0), setTimeout(function() {
                            return t1.send();
                        }, 1);
                    }, t1.prototype._createSource = function(t1, e, r) {
                        r || (r = t1 + "/" + this._getExtension(e));
                        var n = document.createElement("source");
                        return n.src = e, n.type = r, n;
                    }, t1.prototype._onError = function(t1) {
                        this.abort("Failed to load element using: " + t1.target.nodeName);
                    }, t1.prototype._onProgress = function(t1) {
                        t1 && t1.lengthComputable && this.onProgress.dispatch(this, t1.loaded / t1.total);
                    }, t1.prototype._xhrOnError = function() {
                        var t1 = this.xhr;
                        this.abort(a(t1) + " Request failed. Status: " + t1.status + ', text: "' + t1.statusText + '"');
                    }, t1.prototype._xhrOnAbort = function() {
                        this.abort(a(this.xhr) + " Request was aborted by the user.");
                    }, t1.prototype._xdrOnTimeout = function() {
                        this.abort(a(this.xhr) + " Request timed out.");
                    }, t1.prototype._xhrOnLoad = function() {
                        var e = this.xhr, r = "", n = void 0 === e.status ? 200 : e.status;
                        if ("" !== e.responseType && "text" !== e.responseType && void 0 !== e.responseType || (r = e.responseText), 0 === n && r.length > 0 ? n = 200 : 1223 === n && (n = 204), 2 != (n / 100 | 0)) return void this.abort("[" + e.status + "] " + e.statusText + ": " + e.responseURL);
                        if (this.xhrType === t1.XHR_RESPONSE_TYPE.TEXT) this.data = r, this.type = t1.TYPE.TEXT;
                        else if (this.xhrType === t1.XHR_RESPONSE_TYPE.JSON) try {
                            this.data = JSON.parse(r), this.type = t1.TYPE.JSON;
                        } catch (t2) {
                            return void this.abort("Error trying to parse loaded json: " + t2);
                        }
                        else if (this.xhrType === t1.XHR_RESPONSE_TYPE.DOCUMENT) try {
                            if (window.DOMParser) {
                                var i = new DOMParser;
                                this.data = i.parseFromString(r, "text/xml");
                            } else {
                                var o = document.createElement("div");
                                o.innerHTML = r, this.data = o;
                            }
                            this.type = t1.TYPE.XML;
                        } catch (t3) {
                            return void this.abort("Error trying to parse loaded xml: " + t3);
                        }
                        else this.data = e.response || r;
                        this.complete();
                    }, t1.prototype._determineCrossOrigin = function(t1, e) {
                        if (0 === t1.indexOf("data:")) return "";
                        e = e || window.location, p || (p = document.createElement("a")), p.href = t1, t1 = (0, l.default)(p.href, {
                            strictMode: !0
                        });
                        var r = !t1.port && "" === e.port || t1.port === e.port, n = t1.protocol ? t1.protocol + ":" : "";
                        return t1.host === e.hostname && r && n === e.protocol ? "" : "anonymous";
                    }, t1.prototype._determineXhrType = function() {
                        return t1._xhrTypeMap[this.extension] || t1.XHR_RESPONSE_TYPE.TEXT;
                    }, t1.prototype._determineLoadType = function() {
                        return t1._loadTypeMap[this.extension] || t1.LOAD_TYPE.XHR;
                    }, t1.prototype._getExtension = function() {
                        var t1 = this.url, e = "";
                        if (this.isDataUrl) {
                            var r = t1.indexOf("/");
                            e = t1.substring(r + 1, t1.indexOf(";", r));
                        } else {
                            var n = t1.indexOf("?"), i = t1.indexOf("#"), o = Math.min(n > -1 ? n : t1.length, i > -1 ? i : t1.length);
                            t1 = t1.substring(0, o), e = t1.substring(t1.lastIndexOf(".") + 1);
                        }
                        return e.toLowerCase();
                    }, t1.prototype._getMimeFromXhrType = function(e) {
                        switch(e){
                            case t1.XHR_RESPONSE_TYPE.BUFFER:
                                return "application/octet-binary";
                            case t1.XHR_RESPONSE_TYPE.BLOB:
                                return "application/blob";
                            case t1.XHR_RESPONSE_TYPE.DOCUMENT:
                                return "application/xml";
                            case t1.XHR_RESPONSE_TYPE.JSON:
                                return "application/json";
                            case t1.XHR_RESPONSE_TYPE.DEFAULT:
                            case t1.XHR_RESPONSE_TYPE.TEXT:
                            default:
                                return "text/plain";
                        }
                    }, u(t1, [
                        {
                            key: "isDataUrl",
                            get: function() {
                                return this._hasFlag(t1.STATUS_FLAGS.DATA_URL);
                            }
                        },
                        {
                            key: "isComplete",
                            get: function() {
                                return this._hasFlag(t1.STATUS_FLAGS.COMPLETE);
                            }
                        },
                        {
                            key: "isLoading",
                            get: function() {
                                return this._hasFlag(t1.STATUS_FLAGS.LOADING);
                            }
                        }
                    ]), t1;
                }();
                r.default = v, v.STATUS_FLAGS = {
                    NONE: 0,
                    DATA_URL: 1,
                    COMPLETE: 2,
                    LOADING: 4
                }, v.TYPE = {
                    UNKNOWN: 0,
                    JSON: 1,
                    XML: 2,
                    IMAGE: 3,
                    AUDIO: 4,
                    VIDEO: 5,
                    TEXT: 6
                }, v.LOAD_TYPE = {
                    XHR: 1,
                    IMAGE: 2,
                    AUDIO: 3,
                    VIDEO: 4
                }, v.XHR_RESPONSE_TYPE = {
                    DEFAULT: "text",
                    BUFFER: "arraybuffer",
                    BLOB: "blob",
                    DOCUMENT: "document",
                    JSON: "json",
                    TEXT: "text"
                }, v._loadTypeMap = {
                    gif: v.LOAD_TYPE.IMAGE,
                    png: v.LOAD_TYPE.IMAGE,
                    bmp: v.LOAD_TYPE.IMAGE,
                    jpg: v.LOAD_TYPE.IMAGE,
                    jpeg: v.LOAD_TYPE.IMAGE,
                    tif: v.LOAD_TYPE.IMAGE,
                    tiff: v.LOAD_TYPE.IMAGE,
                    webp: v.LOAD_TYPE.IMAGE,
                    tga: v.LOAD_TYPE.IMAGE,
                    svg: v.LOAD_TYPE.IMAGE,
                    "svg+xml": v.LOAD_TYPE.IMAGE,
                    mp3: v.LOAD_TYPE.AUDIO,
                    ogg: v.LOAD_TYPE.AUDIO,
                    wav: v.LOAD_TYPE.AUDIO,
                    mp4: v.LOAD_TYPE.VIDEO,
                    webm: v.LOAD_TYPE.VIDEO
                }, v._xhrTypeMap = {
                    xhtml: v.XHR_RESPONSE_TYPE.DOCUMENT,
                    html: v.XHR_RESPONSE_TYPE.DOCUMENT,
                    htm: v.XHR_RESPONSE_TYPE.DOCUMENT,
                    xml: v.XHR_RESPONSE_TYPE.DOCUMENT,
                    tmx: v.XHR_RESPONSE_TYPE.DOCUMENT,
                    svg: v.XHR_RESPONSE_TYPE.DOCUMENT,
                    tsx: v.XHR_RESPONSE_TYPE.DOCUMENT,
                    gif: v.XHR_RESPONSE_TYPE.BLOB,
                    png: v.XHR_RESPONSE_TYPE.BLOB,
                    bmp: v.XHR_RESPONSE_TYPE.BLOB,
                    jpg: v.XHR_RESPONSE_TYPE.BLOB,
                    jpeg: v.XHR_RESPONSE_TYPE.BLOB,
                    tif: v.XHR_RESPONSE_TYPE.BLOB,
                    tiff: v.XHR_RESPONSE_TYPE.BLOB,
                    webp: v.XHR_RESPONSE_TYPE.BLOB,
                    tga: v.XHR_RESPONSE_TYPE.BLOB,
                    json: v.XHR_RESPONSE_TYPE.JSON,
                    text: v.XHR_RESPONSE_TYPE.TEXT,
                    txt: v.XHR_RESPONSE_TYPE.TEXT,
                    ttf: v.XHR_RESPONSE_TYPE.BUFFER,
                    otf: v.XHR_RESPONSE_TYPE.BUFFER
                }, v.EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
            },
            {
                "mini-signals": 38,
                "parse-uri": 39
            }
        ],
        34: [
            function(t1, e, r) {
                "use strict";
                function n() {}
                function i(t1, e, r, n) {
                    var i = 0, o = t1.length;
                    !function s(a) {
                        if (a || i === o) return void (r && r(a));
                        n ? setTimeout(function() {
                            e(t1[i++], s);
                        }, 1) : e(t1[i++], s);
                    }();
                }
                function o(t1) {
                    return function() {
                        if (null === t1) throw new Error("Callback was already called.");
                        var e = t1;
                        t1 = null, e.apply(this, arguments);
                    };
                }
                function s(t1, e) {
                    function r(t1, e, r) {
                        if (null != r && "function" != typeof r) throw new Error("task callback must be a function");
                        if (a.started = !0, null == t1 && a.idle()) return void setTimeout(function() {
                            return a.drain();
                        }, 1);
                        var i = {
                            data: t1,
                            callback: "function" == typeof r ? r : n
                        };
                        e ? a._tasks.unshift(i) : a._tasks.push(i), setTimeout(function() {
                            return a.process();
                        }, 1);
                    }
                    function i(t1) {
                        return function() {
                            s -= 1, t1.callback.apply(t1, arguments), null != arguments[0] && a.error(arguments[0], t1.data), s <= a.concurrency - a.buffer && a.unsaturated(), a.idle() && a.drain(), a.process();
                        };
                    }
                    if (null == e) e = 1;
                    else if (0 === e) throw new Error("Concurrency must not be zero");
                    var s = 0, a = {
                        _tasks: [],
                        concurrency: e,
                        saturated: n,
                        unsaturated: n,
                        buffer: e / 4,
                        empty: n,
                        drain: n,
                        error: n,
                        started: !1,
                        paused: !1,
                        push: function(t1, e) {
                            r(t1, !1, e);
                        },
                        kill: function() {
                            s = 0, a.drain = n, a.started = !1, a._tasks = [];
                        },
                        unshift: function(t1, e) {
                            r(t1, !0, e);
                        },
                        process: function() {
                            for(; !a.paused && s < a.concurrency && a._tasks.length;){
                                var e = a._tasks.shift();
                                0 === a._tasks.length && a.empty(), s += 1, s === a.concurrency && a.saturated(), t1(e.data, o(i(e)));
                            }
                        },
                        length: function() {
                            return a._tasks.length;
                        },
                        running: function() {
                            return s;
                        },
                        idle: function() {
                            return a._tasks.length + s === 0;
                        },
                        pause: function() {
                            !0 !== a.paused && (a.paused = !0);
                        },
                        resume: function() {
                            if (!1 !== a.paused) {
                                a.paused = !1;
                                for(var t1 = 1; t1 <= a.concurrency; t1++)a.process();
                            }
                        }
                    };
                    return a;
                }
                r.__esModule = !0, r.eachSeries = i, r.queue = s;
            },
            {}
        ],
        35: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    for(var e = "", r = 0; r < t1.length;){
                        for(var n = [
                            0,
                            0,
                            0
                        ], o = [
                            0,
                            0,
                            0,
                            0
                        ], s = 0; s < n.length; ++s)r < t1.length ? n[s] = 255 & t1.charCodeAt(r++) : n[s] = 0;
                        o[0] = n[0] >> 2, o[1] = (3 & n[0]) << 4 | n[1] >> 4, o[2] = (15 & n[1]) << 2 | n[2] >> 6, o[3] = 63 & n[2];
                        switch(r - (t1.length - 1)){
                            case 2:
                                o[3] = 64, o[2] = 64;
                                break;
                            case 1:
                                o[3] = 64;
                        }
                        for(var a = 0; a < o.length; ++a)e += i.charAt(o[a]);
                    }
                    return e;
                }
                r.__esModule = !0, r.encodeBinary = n;
                var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            },
            {}
        ],
        36: [
            function(t1, e, r) {
                "use strict";
                var n = t1("./Loader").default, i = t1("./Resource").default, o = t1("./async"), s = t1("./b64");
                n.Resource = i, n.async = o, n.base64 = s, e.exports = n, e.exports.default = n;
            },
            {
                "./Loader": 32,
                "./Resource": 33,
                "./async": 34,
                "./b64": 35
            }
        ],
        37: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i() {
                    return function(t1, e) {
                        if (!t1.data) return void e();
                        if (t1.xhr && t1.xhrType === a.default.XHR_RESPONSE_TYPE.BLOB) {
                            if (window.Blob && "string" != typeof t1.data) {
                                if (0 === t1.data.type.indexOf("image")) {
                                    var r = function() {
                                        var r = l.createObjectURL(t1.data);
                                        return t1.blob = t1.data, t1.data = new Image, t1.data.src = r, t1.type = a.default.TYPE.IMAGE, t1.data.onload = function() {
                                            l.revokeObjectURL(r), t1.data.onload = null, e();
                                        }, {
                                            v: void 0
                                        };
                                    }();
                                    if ("object" === (void 0 === r ? "undefined" : o(r))) return r.v;
                                }
                            } else {
                                var n = t1.xhr.getResponseHeader("content-type");
                                if (n && 0 === n.indexOf("image")) return t1.data = new Image, t1.data.src = "data:" + n + ";base64," + h.default.encodeBinary(t1.xhr.responseText), t1.type = a.default.TYPE.IMAGE, void (t1.data.onload = function() {
                                    t1.data.onload = null, e();
                                });
                            }
                        }
                        e();
                    };
                }
                r.__esModule = !0;
                var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t1) {
                    return typeof t1;
                } : function(t1) {
                    return t1 && "function" == typeof Symbol && t1.constructor === Symbol && t1 !== Symbol.prototype ? "symbol" : typeof t1;
                };
                r.blobMiddlewareFactory = i;
                var s = t1("../../Resource"), a = n(s), u = t1("../../b64"), h = n(u), l = window.URL || window.webkitURL;
            },
            {
                "../../Resource": 33,
                "../../b64": 35
            }
        ],
        38: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function i(t1, e) {
                    return t1._head ? (t1._tail._next = e, e._prev = t1._tail, t1._tail = e) : (t1._head = e, t1._tail = e), e._owner = t1, e;
                }
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var o = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), s = function() {
                    function t1(e, r, i) {
                        void 0 === r && (r = !1), n(this, t1), this._fn = e, this._once = r, this._thisArg = i, this._next = this._prev = this._owner = null;
                    }
                    return o(t1, [
                        {
                            key: "detach",
                            value: function() {
                                return null !== this._owner && (this._owner.detach(this), !0);
                            }
                        }
                    ]), t1;
                }(), a = function() {
                    function t1() {
                        n(this, t1), this._head = this._tail = void 0;
                    }
                    return o(t1, [
                        {
                            key: "handlers",
                            value: function() {
                                var t1 = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0], e = this._head;
                                if (t1) return !!e;
                                for(var r = []; e;)r.push(e), e = e._next;
                                return r;
                            }
                        },
                        {
                            key: "has",
                            value: function(t1) {
                                if (!(t1 instanceof s)) throw new Error("MiniSignal#has(): First arg must be a MiniSignalBinding object.");
                                return t1._owner === this;
                            }
                        },
                        {
                            key: "dispatch",
                            value: function() {
                                var t1 = this._head;
                                if (!t1) return !1;
                                for(; t1;)t1._once && this.detach(t1), t1._fn.apply(t1._thisArg, arguments), t1 = t1._next;
                                return !0;
                            }
                        },
                        {
                            key: "add",
                            value: function(t1) {
                                var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                                if ("function" != typeof t1) throw new Error("MiniSignal#add(): First arg must be a Function.");
                                return i(this, new s(t1, !1, e));
                            }
                        },
                        {
                            key: "once",
                            value: function(t1) {
                                var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                                if ("function" != typeof t1) throw new Error("MiniSignal#once(): First arg must be a Function.");
                                return i(this, new s(t1, !0, e));
                            }
                        },
                        {
                            key: "detach",
                            value: function(t1) {
                                if (!(t1 instanceof s)) throw new Error("MiniSignal#detach(): First arg must be a MiniSignalBinding object.");
                                return t1._owner !== this ? this : (t1._prev && (t1._prev._next = t1._next), t1._next && (t1._next._prev = t1._prev), t1 === this._head ? (this._head = t1._next, null === t1._next && (this._tail = null)) : t1 === this._tail && (this._tail = t1._prev, this._tail._next = null), t1._owner = null, this);
                            }
                        },
                        {
                            key: "detachAll",
                            value: function() {
                                var t1 = this._head;
                                if (!t1) return this;
                                for(this._head = this._tail = null; t1;)t1._owner = null, t1 = t1._next;
                                return this;
                            }
                        }
                    ]), t1;
                }();
                a.MiniSignalBinding = s, r.default = a, e.exports = r.default;
            },
            {}
        ],
        39: [
            function(t1, e, r) {
                "use strict";
                e.exports = function(t1, e) {
                    e = e || {};
                    for(var r = {
                        key: [
                            "source",
                            "protocol",
                            "authority",
                            "userInfo",
                            "user",
                            "password",
                            "host",
                            "port",
                            "relative",
                            "path",
                            "directory",
                            "file",
                            "query",
                            "anchor"
                        ],
                        q: {
                            name: "queryKey",
                            parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                        },
                        parser: {
                            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                            loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                        }
                    }, n = r.parser[e.strictMode ? "strict" : "loose"].exec(t1), i = {}, o = 14; o--;)i[r.key[o]] = n[o] || "";
                    return i[r.q.name] = {}, i[r.key[12]].replace(r.q.parser, function(t1, e, n) {
                        e && (i[r.q.name][e] = n);
                    }), i;
                };
            },
            {}
        ],
        40: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var o = t1("../core"), s = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(o), a = t1("ismobilejs"), u = n(a), h = t1("./accessibleTarget"), l = n(h);
                s.utils.mixins.delayMixin(s.DisplayObject.prototype, l.default);
                var c = 100, d = 0, f = 0, p = 2, v = function() {
                    function t1(e) {
                        i(this, t1), !u.default.tablet && !u.default.phone || navigator.isCocoonJS || this.createTouchHook();
                        var r = document.createElement("div");
                        r.style.width = c + "px", r.style.height = c + "px", r.style.position = "absolute", r.style.top = d + "px", r.style.left = f + "px", r.style.zIndex = p, this.div = r, this.pool = [], this.renderId = 0, this.debug = !1, this.renderer = e, this.children = [], this._onKeyDown = this._onKeyDown.bind(this), this._onMouseMove = this._onMouseMove.bind(this), this.isActive = !1, this.isMobileAccessabillity = !1, window.addEventListener("keydown", this._onKeyDown, !1);
                    }
                    return t1.prototype.createTouchHook = function() {
                        var t1 = this, e = document.createElement("button");
                        e.style.width = "1px", e.style.height = "1px", e.style.position = "absolute", e.style.top = "-1000px", e.style.left = "-1000px", e.style.zIndex = 2, e.style.backgroundColor = "#FF0000", e.title = "HOOK DIV", e.addEventListener("focus", function() {
                            t1.isMobileAccessabillity = !0, t1.activate(), document.body.removeChild(e);
                        }), document.body.appendChild(e);
                    }, t1.prototype.activate = function() {
                        this.isActive || (this.isActive = !0, window.document.addEventListener("mousemove", this._onMouseMove, !0), window.removeEventListener("keydown", this._onKeyDown, !1), this.renderer.on("postrender", this.update, this), this.renderer.view.parentNode && this.renderer.view.parentNode.appendChild(this.div));
                    }, t1.prototype.deactivate = function() {
                        this.isActive && !this.isMobileAccessabillity && (this.isActive = !1, window.document.removeEventListener("mousemove", this._onMouseMove), window.addEventListener("keydown", this._onKeyDown, !1), this.renderer.off("postrender", this.update), this.div.parentNode && this.div.parentNode.removeChild(this.div));
                    }, t1.prototype.updateAccessibleObjects = function(t1) {
                        if (t1.visible) {
                            t1.accessible && t1.interactive && (t1._accessibleActive || this.addChild(t1), t1.renderId = this.renderId);
                            for(var e = t1.children, r = e.length - 1; r >= 0; r--)this.updateAccessibleObjects(e[r]);
                        }
                    }, t1.prototype.update = function() {
                        if (this.renderer.renderingToScreen) {
                            this.updateAccessibleObjects(this.renderer._lastObjectRendered);
                            var t1 = this.renderer.view.getBoundingClientRect(), e = t1.width / this.renderer.width, r = t1.height / this.renderer.height, n = this.div;
                            n.style.left = t1.left + "px", n.style.top = t1.top + "px", n.style.width = this.renderer.width + "px", n.style.height = this.renderer.height + "px";
                            for(var i = 0; i < this.children.length; i++){
                                var o = this.children[i];
                                if (o.renderId !== this.renderId) o._accessibleActive = !1, s.utils.removeItems(this.children, i, 1), this.div.removeChild(o._accessibleDiv), this.pool.push(o._accessibleDiv), o._accessibleDiv = null, i--, 0 === this.children.length && this.deactivate();
                                else {
                                    n = o._accessibleDiv;
                                    var a = o.hitArea, u = o.worldTransform;
                                    o.hitArea ? (n.style.left = (u.tx + a.x * u.a) * e + "px", n.style.top = (u.ty + a.y * u.d) * r + "px", n.style.width = a.width * u.a * e + "px", n.style.height = a.height * u.d * r + "px") : (a = o.getBounds(), this.capHitArea(a), n.style.left = a.x * e + "px", n.style.top = a.y * r + "px", n.style.width = a.width * e + "px", n.style.height = a.height * r + "px");
                                }
                            }
                            this.renderId++;
                        }
                    }, t1.prototype.capHitArea = function(t1) {
                        t1.x < 0 && (t1.width += t1.x, t1.x = 0), t1.y < 0 && (t1.height += t1.y, t1.y = 0), t1.x + t1.width > this.renderer.width && (t1.width = this.renderer.width - t1.x), t1.y + t1.height > this.renderer.height && (t1.height = this.renderer.height - t1.y);
                    }, t1.prototype.addChild = function(t1) {
                        var e = this.pool.pop();
                        e || (e = document.createElement("button"), e.style.width = c + "px", e.style.height = c + "px", e.style.backgroundColor = this.debug ? "rgba(255,0,0,0.5)" : "transparent", e.style.position = "absolute", e.style.zIndex = p, e.style.borderStyle = "none", e.addEventListener("click", this._onClick.bind(this)), e.addEventListener("focus", this._onFocus.bind(this)), e.addEventListener("focusout", this._onFocusOut.bind(this))), t1.accessibleTitle ? e.title = t1.accessibleTitle : t1.accessibleTitle || t1.accessibleHint || (e.title = "displayObject " + this.tabIndex), t1.accessibleHint && e.setAttribute("aria-label", t1.accessibleHint), t1._accessibleActive = !0, t1._accessibleDiv = e, e.displayObject = t1, this.children.push(t1), this.div.appendChild(t1._accessibleDiv), t1._accessibleDiv.tabIndex = t1.tabIndex;
                    }, t1.prototype._onClick = function(t1) {
                        var e = this.renderer.plugins.interaction;
                        e.dispatchEvent(t1.target.displayObject, "click", e.eventData);
                    }, t1.prototype._onFocus = function(t1) {
                        var e = this.renderer.plugins.interaction;
                        e.dispatchEvent(t1.target.displayObject, "mouseover", e.eventData);
                    }, t1.prototype._onFocusOut = function(t1) {
                        var e = this.renderer.plugins.interaction;
                        e.dispatchEvent(t1.target.displayObject, "mouseout", e.eventData);
                    }, t1.prototype._onKeyDown = function(t1) {
                        9 === t1.keyCode && this.activate();
                    }, t1.prototype._onMouseMove = function() {
                        this.deactivate();
                    }, t1.prototype.destroy = function() {
                        this.div = null;
                        for(var t1 = 0; t1 < this.children.length; t1++)this.children[t1].div = null;
                        window.document.removeEventListener("mousemove", this._onMouseMove), window.removeEventListener("keydown", this._onKeyDown), this.pool = null, this.children = null, this.renderer = null;
                    }, t1;
                }();
                r.default = v, s.WebGLRenderer.registerPlugin("accessibility", v), s.CanvasRenderer.registerPlugin("accessibility", v);
            },
            {
                "../core": 65,
                "./accessibleTarget": 41,
                ismobilejs: 4
            }
        ],
        41: [
            function(t1, e, r) {
                "use strict";
                r.__esModule = !0, r.default = {
                    accessible: !1,
                    accessibleTitle: null,
                    accessibleHint: null,
                    tabIndex: 0,
                    _accessibleActive: !1,
                    _accessibleDiv: !1
                };
            },
            {}
        ],
        42: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                r.__esModule = !0;
                var i = t1("./accessibleTarget");
                Object.defineProperty(r, "accessibleTarget", {
                    enumerable: !0,
                    get: function() {
                        return n(i).default;
                    }
                });
                var o = t1("./AccessibilityManager");
                Object.defineProperty(r, "AccessibilityManager", {
                    enumerable: !0,
                    get: function() {
                        return n(o).default;
                    }
                });
            },
            {
                "./AccessibilityManager": 40,
                "./accessibleTarget": 41
            }
        ],
        43: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var o = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), s = t1("./autoDetectRenderer"), a = t1("./display/Container"), u = n(a), h = t1("./ticker"), l = t1("./settings"), c = n(l), d = t1("./const"), f = function() {
                    function t1(e, r, n, o, a) {
                        i(this, t1), "number" == typeof e && (e = Object.assign({
                            width: e,
                            height: r || c.default.RENDER_OPTIONS.height,
                            forceCanvas: !!o,
                            sharedTicker: !!a
                        }, n)), this._options = e = Object.assign({
                            autoStart: !0,
                            sharedTicker: !1,
                            forceCanvas: !1,
                            sharedLoader: !1
                        }, e), this.renderer = (0, s.autoDetectRenderer)(e), this.stage = new u.default, this._ticker = null, this.ticker = e.sharedTicker ? h.shared : new h.Ticker, e.autoStart && this.start();
                    }
                    return t1.prototype.render = function() {
                        this.renderer.render(this.stage);
                    }, t1.prototype.stop = function() {
                        this._ticker.stop();
                    }, t1.prototype.start = function() {
                        this._ticker.start();
                    }, t1.prototype.destroy = function(t1) {
                        var e = this._ticker;
                        this.ticker = null, e.destroy(), this.stage.destroy(), this.stage = null, this.renderer.destroy(t1), this.renderer = null, this._options = null;
                    }, o(t1, [
                        {
                            key: "ticker",
                            set: function(t1) {
                                this._ticker && this._ticker.remove(this.render, this), this._ticker = t1, t1 && t1.add(this.render, this, d.UPDATE_PRIORITY.LOW);
                            },
                            get: function() {
                                return this._ticker;
                            }
                        },
                        {
                            key: "view",
                            get: function() {
                                return this.renderer.view;
                            }
                        },
                        {
                            key: "screen",
                            get: function() {
                                return this.renderer.screen;
                            }
                        }
                    ]), t1;
                }();
                r.default = f;
            },
            {
                "./autoDetectRenderer": 45,
                "./const": 46,
                "./display/Container": 48,
                "./settings": 101,
                "./ticker": 120
            }
        ],
        44: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function i(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function o(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                function s(t1, e) {
                    if (t1 instanceof Array) {
                        if ("precision" !== t1[0].substring(0, 9)) {
                            var r = t1.slice(0);
                            return r.unshift("precision " + e + " float;"), r;
                        }
                    } else if ("precision" !== t1.substring(0, 9)) return "precision " + e + " float;\n" + t1;
                    return t1;
                }
                r.__esModule = !0;
                var a = t1("pixi-gl-core"), u = t1("./settings"), h = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(u), l = function(t1) {
                    function e(r, o, a) {
                        return n(this, e), i(this, t1.call(this, r, s(o, h.default.PRECISION_VERTEX), s(a, h.default.PRECISION_FRAGMENT)));
                    }
                    return o(e, t1), e;
                }(a.GLShader);
                r.default = l;
            },
            {
                "./settings": 101,
                "pixi-gl-core": 12
            }
        ],
        45: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e, r, n) {
                    var i = t1 && t1.forceCanvas;
                    return void 0 !== n && (i = n), !i && s.isWebGLSupported() ? new l.default(t1, e, r) : new u.default(t1, e, r);
                }
                r.__esModule = !0, r.autoDetectRenderer = i;
                var o = t1("./utils"), s = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(o), a = t1("./renderers/canvas/CanvasRenderer"), u = n(a), h = t1("./renderers/webgl/WebGLRenderer"), l = n(h);
            },
            {
                "./renderers/canvas/CanvasRenderer": 77,
                "./renderers/webgl/WebGLRenderer": 84,
                "./utils": 124
            }
        ],
        46: [
            function(t1, e, r) {
                "use strict";
                r.__esModule = !0;
                r.VERSION = "4.5.5", r.PI_2 = 2 * Math.PI, r.RAD_TO_DEG = 180 / Math.PI, r.DEG_TO_RAD = Math.PI / 180, r.RENDERER_TYPE = {
                    UNKNOWN: 0,
                    WEBGL: 1,
                    CANVAS: 2
                }, r.BLEND_MODES = {
                    NORMAL: 0,
                    ADD: 1,
                    MULTIPLY: 2,
                    SCREEN: 3,
                    OVERLAY: 4,
                    DARKEN: 5,
                    LIGHTEN: 6,
                    COLOR_DODGE: 7,
                    COLOR_BURN: 8,
                    HARD_LIGHT: 9,
                    SOFT_LIGHT: 10,
                    DIFFERENCE: 11,
                    EXCLUSION: 12,
                    HUE: 13,
                    SATURATION: 14,
                    COLOR: 15,
                    LUMINOSITY: 16,
                    NORMAL_NPM: 17,
                    ADD_NPM: 18,
                    SCREEN_NPM: 19
                }, r.DRAW_MODES = {
                    POINTS: 0,
                    LINES: 1,
                    LINE_LOOP: 2,
                    LINE_STRIP: 3,
                    TRIANGLES: 4,
                    TRIANGLE_STRIP: 5,
                    TRIANGLE_FAN: 6
                }, r.SCALE_MODES = {
                    LINEAR: 0,
                    NEAREST: 1
                }, r.WRAP_MODES = {
                    CLAMP: 0,
                    REPEAT: 1,
                    MIRRORED_REPEAT: 2
                }, r.GC_MODES = {
                    AUTO: 0,
                    MANUAL: 1
                }, r.URL_FILE_EXTENSION = /\.(\w{3,4})(?:$|\?|#)/i, r.DATA_URI = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;(charset=[\w-]+|base64))?,(.*)/i, r.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i, r.SHAPES = {
                    POLY: 0,
                    RECT: 1,
                    CIRC: 2,
                    ELIP: 3,
                    RREC: 4
                }, r.PRECISION = {
                    LOW: "lowp",
                    MEDIUM: "mediump",
                    HIGH: "highp"
                }, r.TRANSFORM_MODE = {
                    STATIC: 0,
                    DYNAMIC: 1
                }, r.TEXT_GRADIENT = {
                    LINEAR_VERTICAL: 0,
                    LINEAR_HORIZONTAL: 1
                }, r.UPDATE_PRIORITY = {
                    INTERACTION: 50,
                    HIGH: 25,
                    NORMAL: 0,
                    LOW: -25,
                    UTILITY: -50
                };
            },
            {}
        ],
        47: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = t1("../math"), o = function() {
                    function t1() {
                        n(this, t1), this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.rect = null;
                    }
                    return t1.prototype.isEmpty = function() {
                        return this.minX > this.maxX || this.minY > this.maxY;
                    }, t1.prototype.clear = function() {
                        this.updateID++, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0;
                    }, t1.prototype.getRectangle = function(t1) {
                        return this.minX > this.maxX || this.minY > this.maxY ? i.Rectangle.EMPTY : (t1 = t1 || new i.Rectangle(0, 0, 1, 1), t1.x = this.minX, t1.y = this.minY, t1.width = this.maxX - this.minX, t1.height = this.maxY - this.minY, t1);
                    }, t1.prototype.addPoint = function(t1) {
                        this.minX = Math.min(this.minX, t1.x), this.maxX = Math.max(this.maxX, t1.x), this.minY = Math.min(this.minY, t1.y), this.maxY = Math.max(this.maxY, t1.y);
                    }, t1.prototype.addQuad = function(t1) {
                        var e = this.minX, r = this.minY, n = this.maxX, i = this.maxY, o = t1[0], s = t1[1];
                        e = o < e ? o : e, r = s < r ? s : r, n = o > n ? o : n, i = s > i ? s : i, o = t1[2], s = t1[3], e = o < e ? o : e, r = s < r ? s : r, n = o > n ? o : n, i = s > i ? s : i, o = t1[4], s = t1[5], e = o < e ? o : e, r = s < r ? s : r, n = o > n ? o : n, i = s > i ? s : i, o = t1[6], s = t1[7], e = o < e ? o : e, r = s < r ? s : r, n = o > n ? o : n, i = s > i ? s : i, this.minX = e, this.minY = r, this.maxX = n, this.maxY = i;
                    }, t1.prototype.addFrame = function(t1, e, r, n, i) {
                        var o = t1.worldTransform, s = o.a, a = o.b, u = o.c, h = o.d, l = o.tx, c = o.ty, d = this.minX, f = this.minY, p = this.maxX, v = this.maxY, y = s * e + u * r + l, g = a * e + h * r + c;
                        d = y < d ? y : d, f = g < f ? g : f, p = y > p ? y : p, v = g > v ? g : v, y = s * n + u * r + l, g = a * n + h * r + c, d = y < d ? y : d, f = g < f ? g : f, p = y > p ? y : p, v = g > v ? g : v, y = s * e + u * i + l, g = a * e + h * i + c, d = y < d ? y : d, f = g < f ? g : f, p = y > p ? y : p, v = g > v ? g : v, y = s * n + u * i + l, g = a * n + h * i + c, d = y < d ? y : d, f = g < f ? g : f, p = y > p ? y : p, v = g > v ? g : v, this.minX = d, this.minY = f, this.maxX = p, this.maxY = v;
                    }, t1.prototype.addVertices = function(t1, e, r, n) {
                        for(var i = t1.worldTransform, o = i.a, s = i.b, a = i.c, u = i.d, h = i.tx, l = i.ty, c = this.minX, d = this.minY, f = this.maxX, p = this.maxY, v = r; v < n; v += 2){
                            var y = e[v], g = e[v + 1], m = o * y + a * g + h, _ = u * g + s * y + l;
                            c = m < c ? m : c, d = _ < d ? _ : d, f = m > f ? m : f, p = _ > p ? _ : p;
                        }
                        this.minX = c, this.minY = d, this.maxX = f, this.maxY = p;
                    }, t1.prototype.addBounds = function(t1) {
                        var e = this.minX, r = this.minY, n = this.maxX, i = this.maxY;
                        this.minX = t1.minX < e ? t1.minX : e, this.minY = t1.minY < r ? t1.minY : r, this.maxX = t1.maxX > n ? t1.maxX : n, this.maxY = t1.maxY > i ? t1.maxY : i;
                    }, t1.prototype.addBoundsMask = function(t1, e) {
                        var r = t1.minX > e.minX ? t1.minX : e.minX, n = t1.minY > e.minY ? t1.minY : e.minY, i = t1.maxX < e.maxX ? t1.maxX : e.maxX, o = t1.maxY < e.maxY ? t1.maxY : e.maxY;
                        if (r <= i && n <= o) {
                            var s = this.minX, a = this.minY, u = this.maxX, h = this.maxY;
                            this.minX = r < s ? r : s, this.minY = n < a ? n : a, this.maxX = i > u ? i : u, this.maxY = o > h ? o : h;
                        }
                    }, t1.prototype.addBoundsArea = function(t1, e) {
                        var r = t1.minX > e.x ? t1.minX : e.x, n = t1.minY > e.y ? t1.minY : e.y, i = t1.maxX < e.x + e.width ? t1.maxX : e.x + e.width, o = t1.maxY < e.y + e.height ? t1.maxY : e.y + e.height;
                        if (r <= i && n <= o) {
                            var s = this.minX, a = this.minY, u = this.maxX, h = this.maxY;
                            this.minX = r < s ? r : s, this.minY = n < a ? n : a, this.maxX = i > u ? i : u, this.maxY = o > h ? o : h;
                        }
                    }, t1;
                }();
                r.default = o;
            },
            {
                "../math": 70
            }
        ],
        48: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function i(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function o(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var s = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), a = t1("../utils"), u = t1("./DisplayObject"), h = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(u), l = function(t1) {
                    function e() {
                        n(this, e);
                        var r = i(this, t1.call(this));
                        return r.children = [], r;
                    }
                    return o(e, t1), e.prototype.onChildrenChange = function() {}, e.prototype.addChild = function(t1) {
                        var e = arguments.length;
                        if (e > 1) for(var r = 0; r < e; r++)this.addChild(arguments[r]);
                        else t1.parent && t1.parent.removeChild(t1), t1.parent = this, t1.transform._parentID = -1, this.children.push(t1), this._boundsID++, this.onChildrenChange(this.children.length - 1), t1.emit("added", this);
                        return t1;
                    }, e.prototype.addChildAt = function(t1, e) {
                        if (e < 0 || e > this.children.length) throw new Error(t1 + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length);
                        return t1.parent && t1.parent.removeChild(t1), t1.parent = this, t1.transform._parentID = -1, this.children.splice(e, 0, t1), this._boundsID++, this.onChildrenChange(e), t1.emit("added", this), t1;
                    }, e.prototype.swapChildren = function(t1, e) {
                        if (t1 !== e) {
                            var r = this.getChildIndex(t1), n = this.getChildIndex(e);
                            this.children[r] = e, this.children[n] = t1, this.onChildrenChange(r < n ? r : n);
                        }
                    }, e.prototype.getChildIndex = function(t1) {
                        var e = this.children.indexOf(t1);
                        if (-1 === e) throw new Error("The supplied DisplayObject must be a child of the caller");
                        return e;
                    }, e.prototype.setChildIndex = function(t1, e) {
                        if (e < 0 || e >= this.children.length) throw new Error("The supplied index is out of bounds");
                        var r = this.getChildIndex(t1);
                        (0, a.removeItems)(this.children, r, 1), this.children.splice(e, 0, t1), this.onChildrenChange(e);
                    }, e.prototype.getChildAt = function(t1) {
                        if (t1 < 0 || t1 >= this.children.length) throw new Error("getChildAt: Index (" + t1 + ") does not exist.");
                        return this.children[t1];
                    }, e.prototype.removeChild = function(t1) {
                        var e = arguments.length;
                        if (e > 1) for(var r = 0; r < e; r++)this.removeChild(arguments[r]);
                        else {
                            var n = this.children.indexOf(t1);
                            if (-1 === n) return null;
                            t1.parent = null, t1.transform._parentID = -1, (0, a.removeItems)(this.children, n, 1), this._boundsID++, this.onChildrenChange(n), t1.emit("removed", this);
                        }
                        return t1;
                    }, e.prototype.removeChildAt = function(t1) {
                        var e = this.getChildAt(t1);
                        return e.parent = null, e.transform._parentID = -1, (0, a.removeItems)(this.children, t1, 1), this._boundsID++, this.onChildrenChange(t1), e.emit("removed", this), e;
                    }, e.prototype.removeChildren = function() {
                        var t1 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments[1], r = t1, n = "number" == typeof e ? e : this.children.length, i = n - r, o = void 0;
                        if (i > 0 && i <= n) {
                            o = this.children.splice(r, i);
                            for(var s = 0; s < o.length; ++s)o[s].parent = null, o[s].transform && (o[s].transform._parentID = -1);
                            this._boundsID++, this.onChildrenChange(t1);
                            for(var a = 0; a < o.length; ++a)o[a].emit("removed", this);
                            return o;
                        }
                        if (0 === i && 0 === this.children.length) return [];
                        throw new RangeError("removeChildren: numeric values are outside the acceptable range.");
                    }, e.prototype.updateTransform = function() {
                        this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
                        for(var t1 = 0, e = this.children.length; t1 < e; ++t1){
                            var r = this.children[t1];
                            r.visible && r.updateTransform();
                        }
                    }, e.prototype.calculateBounds = function() {
                        this._bounds.clear(), this._calculateBounds();
                        for(var t1 = 0; t1 < this.children.length; t1++){
                            var e = this.children[t1];
                            e.visible && e.renderable && (e.calculateBounds(), e._mask ? (e._mask.calculateBounds(), this._bounds.addBoundsMask(e._bounds, e._mask._bounds)) : e.filterArea ? this._bounds.addBoundsArea(e._bounds, e.filterArea) : this._bounds.addBounds(e._bounds));
                        }
                        this._lastBoundsID = this._boundsID;
                    }, e.prototype._calculateBounds = function() {}, e.prototype.renderWebGL = function(t1) {
                        if (this.visible && !(this.worldAlpha <= 0) && this.renderable) {
                            if (this._mask || this._filters) this.renderAdvancedWebGL(t1);
                            else {
                                this._renderWebGL(t1);
                                for(var e = 0, r = this.children.length; e < r; ++e)this.children[e].renderWebGL(t1);
                            }
                        }
                    }, e.prototype.renderAdvancedWebGL = function(t1) {
                        t1.flush();
                        var e = this._filters, r = this._mask;
                        if (e) {
                            this._enabledFilters || (this._enabledFilters = []), this._enabledFilters.length = 0;
                            for(var n = 0; n < e.length; n++)e[n].enabled && this._enabledFilters.push(e[n]);
                            this._enabledFilters.length && t1.filterManager.pushFilter(this, this._enabledFilters);
                        }
                        r && t1.maskManager.pushMask(this, this._mask), this._renderWebGL(t1);
                        for(var i = 0, o = this.children.length; i < o; i++)this.children[i].renderWebGL(t1);
                        t1.flush(), r && t1.maskManager.popMask(this, this._mask), e && this._enabledFilters && this._enabledFilters.length && t1.filterManager.popFilter();
                    }, e.prototype._renderWebGL = function(t1) {}, e.prototype._renderCanvas = function(t1) {}, e.prototype.renderCanvas = function(t1) {
                        if (this.visible && !(this.worldAlpha <= 0) && this.renderable) {
                            this._mask && t1.maskManager.pushMask(this._mask), this._renderCanvas(t1);
                            for(var e = 0, r = this.children.length; e < r; ++e)this.children[e].renderCanvas(t1);
                            this._mask && t1.maskManager.popMask(t1);
                        }
                    }, e.prototype.destroy = function(e) {
                        t1.prototype.destroy.call(this);
                        var r = "boolean" == typeof e ? e : e && e.children, n = this.removeChildren(0, this.children.length);
                        if (r) for(var i = 0; i < n.length; ++i)n[i].destroy(e);
                    }, s(e, [
                        {
                            key: "width",
                            get: function() {
                                return this.scale.x * this.getLocalBounds().width;
                            },
                            set: function(t1) {
                                var e = this.getLocalBounds().width;
                                this.scale.x = 0 !== e ? t1 / e : 1, this._width = t1;
                            }
                        },
                        {
                            key: "height",
                            get: function() {
                                return this.scale.y * this.getLocalBounds().height;
                            },
                            set: function(t1) {
                                var e = this.getLocalBounds().height;
                                this.scale.y = 0 !== e ? t1 / e : 1, this._height = t1;
                            }
                        }
                    ]), e;
                }(h.default);
                r.default = l, l.prototype.containerUpdateTransform = l.prototype.updateTransform;
            },
            {
                "../utils": 124,
                "./DisplayObject": 49
            }
        ],
        49: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function o(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function s(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var a = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), u = t1("eventemitter3"), h = n(u), l = t1("../const"), c = t1("../settings"), d = n(c), f = t1("./TransformStatic"), p = n(f), v = t1("./Transform"), y = n(v), g = t1("./Bounds"), m = n(g), _ = t1("../math"), b = function(t1) {
                    function e() {
                        i(this, e);
                        var r = o(this, t1.call(this)), n = d.default.TRANSFORM_MODE === l.TRANSFORM_MODE.STATIC ? p.default : y.default;
                        return r.tempDisplayObjectParent = null, r.transform = new n, r.alpha = 1, r.visible = !0, r.renderable = !0, r.parent = null, r.worldAlpha = 1, r.filterArea = null, r._filters = null, r._enabledFilters = null, r._bounds = new m.default, r._boundsID = 0, r._lastBoundsID = -1, r._boundsRect = null, r._localBoundsRect = null, r._mask = null, r._destroyed = !1, r;
                    }
                    return s(e, t1), e.prototype.updateTransform = function() {
                        this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha, this._bounds.updateID++;
                    }, e.prototype._recursivePostUpdateTransform = function() {
                        this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform);
                    }, e.prototype.getBounds = function(t1, e) {
                        return t1 || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = this._tempDisplayObjectParent, this.updateTransform(), this.parent = null)), this._boundsID !== this._lastBoundsID && this.calculateBounds(), e || (this._boundsRect || (this._boundsRect = new _.Rectangle), e = this._boundsRect), this._bounds.getRectangle(e);
                    }, e.prototype.getLocalBounds = function(t1) {
                        var e = this.transform, r = this.parent;
                        this.parent = null, this.transform = this._tempDisplayObjectParent.transform, t1 || (this._localBoundsRect || (this._localBoundsRect = new _.Rectangle), t1 = this._localBoundsRect);
                        var n = this.getBounds(!1, t1);
                        return this.parent = r, this.transform = e, n;
                    }, e.prototype.toGlobal = function(t1, e) {
                        return arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(t1, e);
                    }, e.prototype.toLocal = function(t1, e, r, n) {
                        return e && (t1 = e.toGlobal(t1, r, n)), n || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(t1, r);
                    }, e.prototype.renderWebGL = function(t1) {}, e.prototype.renderCanvas = function(t1) {}, e.prototype.setParent = function(t1) {
                        if (!t1 || !t1.addChild) throw new Error("setParent: Argument must be a Container");
                        return t1.addChild(this), t1;
                    }, e.prototype.setTransform = function() {
                        var t1 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0, s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0, a = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, u = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0;
                        return this.position.x = t1, this.position.y = e, this.scale.x = r || 1, this.scale.y = n || 1, this.rotation = i, this.skew.x = o, this.skew.y = s, this.pivot.x = a, this.pivot.y = u, this;
                    }, e.prototype.destroy = function() {
                        this.removeAllListeners(), this.parent && this.parent.removeChild(this), this.transform = null, this.parent = null, this._bounds = null, this._currentBounds = null, this._mask = null, this.filterArea = null, this.interactive = !1, this.interactiveChildren = !1, this._destroyed = !0;
                    }, a(e, [
                        {
                            key: "_tempDisplayObjectParent",
                            get: function() {
                                return null === this.tempDisplayObjectParent && (this.tempDisplayObjectParent = new e), this.tempDisplayObjectParent;
                            }
                        },
                        {
                            key: "x",
                            get: function() {
                                return this.position.x;
                            },
                            set: function(t1) {
                                this.transform.position.x = t1;
                            }
                        },
                        {
                            key: "y",
                            get: function() {
                                return this.position.y;
                            },
                            set: function(t1) {
                                this.transform.position.y = t1;
                            }
                        },
                        {
                            key: "worldTransform",
                            get: function() {
                                return this.transform.worldTransform;
                            }
                        },
                        {
                            key: "localTransform",
                            get: function() {
                                return this.transform.localTransform;
                            }
                        },
                        {
                            key: "position",
                            get: function() {
                                return this.transform.position;
                            },
                            set: function(t1) {
                                this.transform.position.copy(t1);
                            }
                        },
                        {
                            key: "scale",
                            get: function() {
                                return this.transform.scale;
                            },
                            set: function(t1) {
                                this.transform.scale.copy(t1);
                            }
                        },
                        {
                            key: "pivot",
                            get: function() {
                                return this.transform.pivot;
                            },
                            set: function(t1) {
                                this.transform.pivot.copy(t1);
                            }
                        },
                        {
                            key: "skew",
                            get: function() {
                                return this.transform.skew;
                            },
                            set: function(t1) {
                                this.transform.skew.copy(t1);
                            }
                        },
                        {
                            key: "rotation",
                            get: function() {
                                return this.transform.rotation;
                            },
                            set: function(t1) {
                                this.transform.rotation = t1;
                            }
                        },
                        {
                            key: "worldVisible",
                            get: function() {
                                var t1 = this;
                                do {
                                    if (!t1.visible) return !1;
                                    t1 = t1.parent;
                                }while (t1);
                                return !0;
                            }
                        },
                        {
                            key: "mask",
                            get: function() {
                                return this._mask;
                            },
                            set: function(t1) {
                                this._mask && (this._mask.renderable = !0), this._mask = t1, this._mask && (this._mask.renderable = !1);
                            }
                        },
                        {
                            key: "filters",
                            get: function() {
                                return this._filters && this._filters.slice();
                            },
                            set: function(t1) {
                                this._filters = t1 && t1.slice();
                            }
                        }
                    ]), e;
                }(h.default);
                r.default = b, b.prototype.displayObjectUpdateTransform = b.prototype.updateTransform;
            },
            {
                "../const": 46,
                "../math": 70,
                "../settings": 101,
                "./Bounds": 47,
                "./Transform": 50,
                "./TransformStatic": 52,
                eventemitter3: 3
            }
        ],
        50: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function i(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function o(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var s = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), a = t1("../math"), u = t1("./TransformBase"), h = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(u), l = function(t1) {
                    function e() {
                        n(this, e);
                        var r = i(this, t1.call(this));
                        return r.position = new a.Point(0, 0), r.scale = new a.Point(1, 1), r.skew = new a.ObservablePoint(r.updateSkew, r, 0, 0), r.pivot = new a.Point(0, 0), r._rotation = 0, r._cx = 1, r._sx = 0, r._cy = 0, r._sy = 1, r;
                    }
                    return o(e, t1), e.prototype.updateSkew = function() {
                        this._cx = Math.cos(this._rotation + this.skew._y), this._sx = Math.sin(this._rotation + this.skew._y), this._cy = -Math.sin(this._rotation - this.skew._x), this._sy = Math.cos(this._rotation - this.skew._x);
                    }, e.prototype.updateLocalTransform = function() {
                        var t1 = this.localTransform;
                        t1.a = this._cx * this.scale.x, t1.b = this._sx * this.scale.x, t1.c = this._cy * this.scale.y, t1.d = this._sy * this.scale.y, t1.tx = this.position.x - (this.pivot.x * t1.a + this.pivot.y * t1.c), t1.ty = this.position.y - (this.pivot.x * t1.b + this.pivot.y * t1.d);
                    }, e.prototype.updateTransform = function(t1) {
                        var e = this.localTransform;
                        e.a = this._cx * this.scale.x, e.b = this._sx * this.scale.x, e.c = this._cy * this.scale.y, e.d = this._sy * this.scale.y, e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c), e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d);
                        var r = t1.worldTransform, n = this.worldTransform;
                        n.a = e.a * r.a + e.b * r.c, n.b = e.a * r.b + e.b * r.d, n.c = e.c * r.a + e.d * r.c, n.d = e.c * r.b + e.d * r.d, n.tx = e.tx * r.a + e.ty * r.c + r.tx, n.ty = e.tx * r.b + e.ty * r.d + r.ty, this._worldID++;
                    }, e.prototype.setFromMatrix = function(t1) {
                        t1.decompose(this);
                    }, s(e, [
                        {
                            key: "rotation",
                            get: function() {
                                return this._rotation;
                            },
                            set: function(t1) {
                                this._rotation = t1, this.updateSkew();
                            }
                        }
                    ]), e;
                }(h.default);
                r.default = l;
            },
            {
                "../math": 70,
                "./TransformBase": 51
            }
        ],
        51: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = t1("../math"), o = function() {
                    function t1() {
                        n(this, t1), this.worldTransform = new i.Matrix, this.localTransform = new i.Matrix, this._worldID = 0, this._parentID = 0;
                    }
                    return t1.prototype.updateLocalTransform = function() {}, t1.prototype.updateTransform = function(t1) {
                        var e = t1.worldTransform, r = this.worldTransform, n = this.localTransform;
                        r.a = n.a * e.a + n.b * e.c, r.b = n.a * e.b + n.b * e.d, r.c = n.c * e.a + n.d * e.c, r.d = n.c * e.b + n.d * e.d, r.tx = n.tx * e.a + n.ty * e.c + e.tx, r.ty = n.tx * e.b + n.ty * e.d + e.ty, this._worldID++;
                    }, t1;
                }();
                r.default = o, o.prototype.updateWorldTransform = o.prototype.updateTransform, o.IDENTITY = new o;
            },
            {
                "../math": 70
            }
        ],
        52: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function i(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function o(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var s = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), a = t1("../math"), u = t1("./TransformBase"), h = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(u), l = function(t1) {
                    function e() {
                        n(this, e);
                        var r = i(this, t1.call(this));
                        return r.position = new a.ObservablePoint(r.onChange, r, 0, 0), r.scale = new a.ObservablePoint(r.onChange, r, 1, 1), r.pivot = new a.ObservablePoint(r.onChange, r, 0, 0), r.skew = new a.ObservablePoint(r.updateSkew, r, 0, 0), r._rotation = 0, r._cx = 1, r._sx = 0, r._cy = 0, r._sy = 1, r._localID = 0, r._currentLocalID = 0, r;
                    }
                    return o(e, t1), e.prototype.onChange = function() {
                        this._localID++;
                    }, e.prototype.updateSkew = function() {
                        this._cx = Math.cos(this._rotation + this.skew._y), this._sx = Math.sin(this._rotation + this.skew._y), this._cy = -Math.sin(this._rotation - this.skew._x), this._sy = Math.cos(this._rotation - this.skew._x), this._localID++;
                    }, e.prototype.updateLocalTransform = function() {
                        var t1 = this.localTransform;
                        this._localID !== this._currentLocalID && (t1.a = this._cx * this.scale._x, t1.b = this._sx * this.scale._x, t1.c = this._cy * this.scale._y, t1.d = this._sy * this.scale._y, t1.tx = this.position._x - (this.pivot._x * t1.a + this.pivot._y * t1.c), t1.ty = this.position._y - (this.pivot._x * t1.b + this.pivot._y * t1.d), this._currentLocalID = this._localID, this._parentID = -1);
                    }, e.prototype.updateTransform = function(t1) {
                        var e = this.localTransform;
                        if (this._localID !== this._currentLocalID && (e.a = this._cx * this.scale._x, e.b = this._sx * this.scale._x, e.c = this._cy * this.scale._y, e.d = this._sy * this.scale._y, e.tx = this.position._x - (this.pivot._x * e.a + this.pivot._y * e.c), e.ty = this.position._y - (this.pivot._x * e.b + this.pivot._y * e.d), this._currentLocalID = this._localID, this._parentID = -1), this._parentID !== t1._worldID) {
                            var r = t1.worldTransform, n = this.worldTransform;
                            n.a = e.a * r.a + e.b * r.c, n.b = e.a * r.b + e.b * r.d, n.c = e.c * r.a + e.d * r.c, n.d = e.c * r.b + e.d * r.d, n.tx = e.tx * r.a + e.ty * r.c + r.tx, n.ty = e.tx * r.b + e.ty * r.d + r.ty, this._parentID = t1._worldID, this._worldID++;
                        }
                    }, e.prototype.setFromMatrix = function(t1) {
                        t1.decompose(this), this._localID++;
                    }, s(e, [
                        {
                            key: "rotation",
                            get: function() {
                                return this._rotation;
                            },
                            set: function(t1) {
                                this._rotation = t1, this.updateSkew();
                            }
                        }
                    ]), e;
                }(h.default);
                r.default = l;
            },
            {
                "../math": 70,
                "./TransformBase": 51
            }
        ],
        53: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function o(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function s(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var a = t1("../display/Container"), u = n(a), h = t1("../textures/RenderTexture"), l = n(h), c = t1("../textures/Texture"), d = n(c), f = t1("./GraphicsData"), p = n(f), v = t1("../sprites/Sprite"), y = n(v), g = t1("../math"), m = t1("../utils"), _ = t1("../const"), b = t1("../display/Bounds"), x = n(b), T = t1("./utils/bezierCurveTo"), w = n(T), E = t1("../renderers/canvas/CanvasRenderer"), S = n(E), O = void 0, P = new g.Matrix, M = new g.Point, C = new Float32Array(4), R = new Float32Array(4), A = function(t1) {
                    function e() {
                        var r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        i(this, e);
                        var n = o(this, t1.call(this));
                        return n.fillAlpha = 1, n.lineWidth = 0, n.nativeLines = r, n.lineColor = 0, n.graphicsData = [], n.tint = 16777215, n._prevTint = 16777215, n.blendMode = _.BLEND_MODES.NORMAL, n.currentPath = null, n._webGL = {}, n.isMask = !1, n.boundsPadding = 0, n._localBounds = new x.default, n.dirty = 0, n.fastRectDirty = -1, n.clearDirty = 0, n.boundsDirty = -1, n.cachedSpriteDirty = !1, n._spriteRect = null, n._fastRect = !1, n;
                    }
                    return s(e, t1), e.prototype.clone = function() {
                        var t1 = new e;
                        t1.renderable = this.renderable, t1.fillAlpha = this.fillAlpha, t1.lineWidth = this.lineWidth, t1.lineColor = this.lineColor, t1.tint = this.tint, t1.blendMode = this.blendMode, t1.isMask = this.isMask, t1.boundsPadding = this.boundsPadding, t1.dirty = 0, t1.cachedSpriteDirty = this.cachedSpriteDirty;
                        for(var r = 0; r < this.graphicsData.length; ++r)t1.graphicsData.push(this.graphicsData[r].clone());
                        return t1.currentPath = t1.graphicsData[t1.graphicsData.length - 1], t1.updateLocalBounds(), t1;
                    }, e.prototype.lineStyle = function() {
                        var t1 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                        if (this.lineWidth = t1, this.lineColor = e, this.lineAlpha = r, this.currentPath) {
                            if (this.currentPath.shape.points.length) {
                                var n = new g.Polygon(this.currentPath.shape.points.slice(-2));
                                n.closed = !1, this.drawShape(n);
                            } else this.currentPath.lineWidth = this.lineWidth, this.currentPath.lineColor = this.lineColor, this.currentPath.lineAlpha = this.lineAlpha;
                        }
                        return this;
                    }, e.prototype.moveTo = function(t1, e) {
                        var r = new g.Polygon([
                            t1,
                            e
                        ]);
                        return r.closed = !1, this.drawShape(r), this;
                    }, e.prototype.lineTo = function(t1, e) {
                        return this.currentPath.shape.points.push(t1, e), this.dirty++, this;
                    }, e.prototype.quadraticCurveTo = function(t1, e, r, n) {
                        this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [
                            0,
                            0
                        ]) : this.moveTo(0, 0);
                        var i = this.currentPath.shape.points, o = 0, s = 0;
                        0 === i.length && this.moveTo(0, 0);
                        for(var a = i[i.length - 2], u = i[i.length - 1], h = 1; h <= 20; ++h){
                            var l = h / 20;
                            o = a + (t1 - a) * l, s = u + (e - u) * l, i.push(o + (t1 + (r - t1) * l - o) * l, s + (e + (n - e) * l - s) * l);
                        }
                        return this.dirty++, this;
                    }, e.prototype.bezierCurveTo = function(t1, e, r, n, i, o) {
                        this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [
                            0,
                            0
                        ]) : this.moveTo(0, 0);
                        var s = this.currentPath.shape.points, a = s[s.length - 2], u = s[s.length - 1];
                        return s.length -= 2, (0, w.default)(a, u, t1, e, r, n, i, o, s), this.dirty++, this;
                    }, e.prototype.arcTo = function(t1, e, r, n, i) {
                        this.currentPath ? 0 === this.currentPath.shape.points.length && this.currentPath.shape.points.push(t1, e) : this.moveTo(t1, e);
                        var o = this.currentPath.shape.points, s = o[o.length - 2], a = o[o.length - 1], u = a - e, h = s - t1, l = n - e, c = r - t1, d = Math.abs(u * c - h * l);
                        if (d < 1e-8 || 0 === i) o[o.length - 2] === t1 && o[o.length - 1] === e || o.push(t1, e);
                        else {
                            var f = u * u + h * h, p = l * l + c * c, v = u * l + h * c, y = i * Math.sqrt(f) / d, g = i * Math.sqrt(p) / d, m = y * v / f, _ = g * v / p, b = y * c + g * h, x = y * l + g * u, T = h * (g + m), w = u * (g + m), E = c * (y + _), S = l * (y + _), O = Math.atan2(w - x, T - b), P = Math.atan2(S - x, E - b);
                            this.arc(b + t1, x + e, i, O, P, h * l > c * u);
                        }
                        return this.dirty++, this;
                    }, e.prototype.arc = function(t1, e, r, n, i) {
                        var o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                        if (n === i) return this;
                        !o && i <= n ? i += 2 * Math.PI : o && n <= i && (n += 2 * Math.PI);
                        var s = i - n, a = 40 * Math.ceil(Math.abs(s) / (2 * Math.PI));
                        if (0 === s) return this;
                        var u = t1 + Math.cos(n) * r, h = e + Math.sin(n) * r, l = this.currentPath ? this.currentPath.shape.points : null;
                        l ? l[l.length - 2] === u && l[l.length - 1] === h || l.push(u, h) : (this.moveTo(u, h), l = this.currentPath.shape.points);
                        for(var c = s / (2 * a), d = 2 * c, f = Math.cos(c), p = Math.sin(c), v = a - 1, y = v % 1 / v, g = 0; g <= v; ++g){
                            var m = g + y * g, _ = c + n + d * m, b = Math.cos(_), x = -Math.sin(_);
                            l.push((f * b + p * x) * r + t1, (f * -x + p * b) * r + e);
                        }
                        return this.dirty++, this;
                    }, e.prototype.beginFill = function() {
                        var t1 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        return this.filling = !0, this.fillColor = t1, this.fillAlpha = e, this.currentPath && this.currentPath.shape.points.length <= 2 && (this.currentPath.fill = this.filling, this.currentPath.fillColor = this.fillColor, this.currentPath.fillAlpha = this.fillAlpha), this;
                    }, e.prototype.endFill = function() {
                        return this.filling = !1, this.fillColor = null, this.fillAlpha = 1, this;
                    }, e.prototype.drawRect = function(t1, e, r, n) {
                        return this.drawShape(new g.Rectangle(t1, e, r, n)), this;
                    }, e.prototype.drawRoundedRect = function(t1, e, r, n, i) {
                        return this.drawShape(new g.RoundedRectangle(t1, e, r, n, i)), this;
                    }, e.prototype.drawCircle = function(t1, e, r) {
                        return this.drawShape(new g.Circle(t1, e, r)), this;
                    }, e.prototype.drawEllipse = function(t1, e, r, n) {
                        return this.drawShape(new g.Ellipse(t1, e, r, n)), this;
                    }, e.prototype.drawPolygon = function(t1) {
                        var e = t1, r = !0;
                        if (e instanceof g.Polygon && (r = e.closed, e = e.points), !Array.isArray(e)) {
                            e = new Array(arguments.length);
                            for(var n = 0; n < e.length; ++n)e[n] = arguments[n];
                        }
                        var i = new g.Polygon(e);
                        return i.closed = r, this.drawShape(i), this;
                    }, e.prototype.clear = function() {
                        return (this.lineWidth || this.filling || this.graphicsData.length > 0) && (this.lineWidth = 0, this.filling = !1, this.boundsDirty = -1, this.dirty++, this.clearDirty++, this.graphicsData.length = 0), this.currentPath = null, this._spriteRect = null, this;
                    }, e.prototype.isFastRect = function() {
                        return 1 === this.graphicsData.length && this.graphicsData[0].shape.type === _.SHAPES.RECT && !this.graphicsData[0].lineWidth;
                    }, e.prototype._renderWebGL = function(t1) {
                        this.dirty !== this.fastRectDirty && (this.fastRectDirty = this.dirty, this._fastRect = this.isFastRect()), this._fastRect ? this._renderSpriteRect(t1) : (t1.setObjectRenderer(t1.plugins.graphics), t1.plugins.graphics.render(this));
                    }, e.prototype._renderSpriteRect = function(t1) {
                        var e = this.graphicsData[0].shape;
                        this._spriteRect || (this._spriteRect = new y.default(new d.default(d.default.WHITE)));
                        var r = this._spriteRect;
                        if (16777215 === this.tint) r.tint = this.graphicsData[0].fillColor;
                        else {
                            var n = C, i = R;
                            (0, m.hex2rgb)(this.graphicsData[0].fillColor, n), (0, m.hex2rgb)(this.tint, i), n[0] *= i[0], n[1] *= i[1], n[2] *= i[2], r.tint = (0, m.rgb2hex)(n);
                        }
                        r.alpha = this.graphicsData[0].fillAlpha, r.worldAlpha = this.worldAlpha * r.alpha, r.blendMode = this.blendMode, r._texture._frame.width = e.width, r._texture._frame.height = e.height, r.transform.worldTransform = this.transform.worldTransform, r.anchor.set(-e.x / e.width, -e.y / e.height), r._onAnchorUpdate(), r._renderWebGL(t1);
                    }, e.prototype._renderCanvas = function(t1) {
                        !0 !== this.isMask && t1.plugins.graphics.render(this);
                    }, e.prototype._calculateBounds = function() {
                        this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.updateLocalBounds(), this.cachedSpriteDirty = !0);
                        var t1 = this._localBounds;
                        this._bounds.addFrame(this.transform, t1.minX, t1.minY, t1.maxX, t1.maxY);
                    }, e.prototype.containsPoint = function(t1) {
                        this.worldTransform.applyInverse(t1, M);
                        for(var e = this.graphicsData, r = 0; r < e.length; ++r){
                            var n = e[r];
                            if (n.fill && n.shape && n.shape.contains(M.x, M.y)) {
                                if (n.holes) for(var i = 0; i < n.holes.length; i++){
                                    var o = n.holes[i];
                                    if (o.contains(M.x, M.y)) return !1;
                                }
                                return !0;
                            }
                        }
                        return !1;
                    }, e.prototype.updateLocalBounds = function() {
                        var t1 = 1 / 0, e = -1 / 0, r = 1 / 0, n = -1 / 0;
                        if (this.graphicsData.length) for(var i = 0, o = 0, s = 0, a = 0, u = 0, h = 0; h < this.graphicsData.length; h++){
                            var l = this.graphicsData[h], c = l.type, d = l.lineWidth;
                            if (i = l.shape, c === _.SHAPES.RECT || c === _.SHAPES.RREC) o = i.x - d / 2, s = i.y - d / 2, a = i.width + d, u = i.height + d, t1 = o < t1 ? o : t1, e = o + a > e ? o + a : e, r = s < r ? s : r, n = s + u > n ? s + u : n;
                            else if (c === _.SHAPES.CIRC) o = i.x, s = i.y, a = i.radius + d / 2, u = i.radius + d / 2, t1 = o - a < t1 ? o - a : t1, e = o + a > e ? o + a : e, r = s - u < r ? s - u : r, n = s + u > n ? s + u : n;
                            else if (c === _.SHAPES.ELIP) o = i.x, s = i.y, a = i.width + d / 2, u = i.height + d / 2, t1 = o - a < t1 ? o - a : t1, e = o + a > e ? o + a : e, r = s - u < r ? s - u : r, n = s + u > n ? s + u : n;
                            else for(var f = i.points, p = 0, v = 0, y = 0, g = 0, m = 0, b = 0, x = 0, T = 0, w = 0; w + 2 < f.length; w += 2)o = f[w], s = f[w + 1], p = f[w + 2], v = f[w + 3], y = Math.abs(p - o), g = Math.abs(v - s), u = d, (a = Math.sqrt(y * y + g * g)) < 1e-9 || (m = (u / a * g + y) / 2, b = (u / a * y + g) / 2, x = (p + o) / 2, T = (v + s) / 2, t1 = x - m < t1 ? x - m : t1, e = x + m > e ? x + m : e, r = T - b < r ? T - b : r, n = T + b > n ? T + b : n);
                        }
                        else t1 = 0, e = 0, r = 0, n = 0;
                        var E = this.boundsPadding;
                        this._localBounds.minX = t1 - E, this._localBounds.maxX = e + E, this._localBounds.minY = r - E, this._localBounds.maxY = n + E;
                    }, e.prototype.drawShape = function(t1) {
                        this.currentPath && this.currentPath.shape.points.length <= 2 && this.graphicsData.pop(), this.currentPath = null;
                        var e = new p.default(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, this.nativeLines, t1);
                        return this.graphicsData.push(e), e.type === _.SHAPES.POLY && (e.shape.closed = e.shape.closed || this.filling, this.currentPath = e), this.dirty++, e;
                    }, e.prototype.generateCanvasTexture = function(t1) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, r = this.getLocalBounds(), n = l.default.create(r.width, r.height, t1, e);
                        O || (O = new S.default), this.transform.updateLocalTransform(), this.transform.localTransform.copy(P), P.invert(), P.tx -= r.x, P.ty -= r.y, O.render(this, n, !0, P);
                        var i = d.default.fromCanvas(n.baseTexture._canvasRenderTarget.canvas, t1, "graphics");
                        return i.baseTexture.resolution = e, i.baseTexture.update(), i;
                    }, e.prototype.closePath = function() {
                        var t1 = this.currentPath;
                        return t1 && t1.shape && t1.shape.close(), this;
                    }, e.prototype.addHole = function() {
                        var t1 = this.graphicsData.pop();
                        return this.currentPath = this.graphicsData[this.graphicsData.length - 1], this.currentPath.addHole(t1.shape), this.currentPath = null, this;
                    }, e.prototype.destroy = function(e) {
                        t1.prototype.destroy.call(this, e);
                        for(var r = 0; r < this.graphicsData.length; ++r)this.graphicsData[r].destroy();
                        for(var n in this._webgl)for(var i = 0; i < this._webgl[n].data.length; ++i)this._webgl[n].data[i].destroy();
                        this._spriteRect && this._spriteRect.destroy(), this.graphicsData = null, this.currentPath = null, this._webgl = null, this._localBounds = null;
                    }, e;
                }(u.default);
                r.default = A, A._SPRITE_TEXTURE = null;
            },
            {
                "../const": 46,
                "../display/Bounds": 47,
                "../display/Container": 48,
                "../math": 70,
                "../renderers/canvas/CanvasRenderer": 77,
                "../sprites/Sprite": 102,
                "../textures/RenderTexture": 113,
                "../textures/Texture": 115,
                "../utils": 124,
                "./GraphicsData": 54,
                "./utils/bezierCurveTo": 56
            }
        ],
        54: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = function() {
                    function t1(e, r, i, o, s, a, u, h) {
                        n(this, t1), this.lineWidth = e, this.nativeLines = u, this.lineColor = r, this.lineAlpha = i, this._lineTint = r, this.fillColor = o, this.fillAlpha = s, this._fillTint = o, this.fill = a, this.holes = [], this.shape = h, this.type = h.type;
                    }
                    return t1.prototype.clone = function() {
                        return new t1(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.fill, this.nativeLines, this.shape);
                    }, t1.prototype.addHole = function(t1) {
                        this.holes.push(t1);
                    }, t1.prototype.destroy = function() {
                        this.shape = null, this.holes = null;
                    }, t1;
                }();
                r.default = i;
            },
            {}
        ],
        55: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = t1("../../renderers/canvas/CanvasRenderer"), o = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(i), s = t1("../../const"), a = function() {
                    function t1(e) {
                        n(this, t1), this.renderer = e;
                    }
                    return t1.prototype.render = function(t1) {
                        var e = this.renderer, r = e.context, n = t1.worldAlpha, i = t1.transform.worldTransform, o = e.resolution;
                        this._prevTint !== this.tint && (this.dirty = !0), r.setTransform(i.a * o, i.b * o, i.c * o, i.d * o, i.tx * o, i.ty * o), t1.dirty && (this.updateGraphicsTint(t1), t1.dirty = !1), e.setBlendMode(t1.blendMode);
                        for(var a = 0; a < t1.graphicsData.length; a++){
                            var u = t1.graphicsData[a], h = u.shape, l = u._fillTint, c = u._lineTint;
                            if (r.lineWidth = u.lineWidth, u.type === s.SHAPES.POLY) {
                                r.beginPath(), this.renderPolygon(h.points, h.closed, r);
                                for(var d = 0; d < u.holes.length; d++)this.renderPolygon(u.holes[d].points, !0, r);
                                u.fill && (r.globalAlpha = u.fillAlpha * n, r.fillStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), r.fill()), u.lineWidth && (r.globalAlpha = u.lineAlpha * n, r.strokeStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), r.stroke());
                            } else if (u.type === s.SHAPES.RECT) (u.fillColor || 0 === u.fillColor) && (r.globalAlpha = u.fillAlpha * n, r.fillStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), r.fillRect(h.x, h.y, h.width, h.height)), u.lineWidth && (r.globalAlpha = u.lineAlpha * n, r.strokeStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), r.strokeRect(h.x, h.y, h.width, h.height));
                            else if (u.type === s.SHAPES.CIRC) r.beginPath(), r.arc(h.x, h.y, h.radius, 0, 2 * Math.PI), r.closePath(), u.fill && (r.globalAlpha = u.fillAlpha * n, r.fillStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), r.fill()), u.lineWidth && (r.globalAlpha = u.lineAlpha * n, r.strokeStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), r.stroke());
                            else if (u.type === s.SHAPES.ELIP) {
                                var f = 2 * h.width, p = 2 * h.height, v = h.x - f / 2, y = h.y - p / 2;
                                r.beginPath();
                                var g = f / 2 * .5522848, m = p / 2 * .5522848, _ = v + f, b = y + p, x = v + f / 2, T = y + p / 2;
                                r.moveTo(v, T), r.bezierCurveTo(v, T - m, x - g, y, x, y), r.bezierCurveTo(x + g, y, _, T - m, _, T), r.bezierCurveTo(_, T + m, x + g, b, x, b), r.bezierCurveTo(x - g, b, v, T + m, v, T), r.closePath(), u.fill && (r.globalAlpha = u.fillAlpha * n, r.fillStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), r.fill()), u.lineWidth && (r.globalAlpha = u.lineAlpha * n, r.strokeStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), r.stroke());
                            } else if (u.type === s.SHAPES.RREC) {
                                var w = h.x, E = h.y, S = h.width, O = h.height, P = h.radius, M = Math.min(S, O) / 2 | 0;
                                P = P > M ? M : P, r.beginPath(), r.moveTo(w, E + P), r.lineTo(w, E + O - P), r.quadraticCurveTo(w, E + O, w + P, E + O), r.lineTo(w + S - P, E + O), r.quadraticCurveTo(w + S, E + O, w + S, E + O - P), r.lineTo(w + S, E + P), r.quadraticCurveTo(w + S, E, w + S - P, E), r.lineTo(w + P, E), r.quadraticCurveTo(w, E, w, E + P), r.closePath(), (u.fillColor || 0 === u.fillColor) && (r.globalAlpha = u.fillAlpha * n, r.fillStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), r.fill()), u.lineWidth && (r.globalAlpha = u.lineAlpha * n, r.strokeStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), r.stroke());
                            }
                        }
                    }, t1.prototype.updateGraphicsTint = function(t1) {
                        t1._prevTint = t1.tint;
                        for(var e = (t1.tint >> 16 & 255) / 255, r = (t1.tint >> 8 & 255) / 255, n = (255 & t1.tint) / 255, i = 0; i < t1.graphicsData.length; ++i){
                            var o = t1.graphicsData[i], s = 0 | o.fillColor, a = 0 | o.lineColor;
                            o._fillTint = ((s >> 16 & 255) / 255 * e * 255 << 16) + ((s >> 8 & 255) / 255 * r * 255 << 8) + (255 & s) / 255 * n * 255, o._lineTint = ((a >> 16 & 255) / 255 * e * 255 << 16) + ((a >> 8 & 255) / 255 * r * 255 << 8) + (255 & a) / 255 * n * 255;
                        }
                    }, t1.prototype.renderPolygon = function(t1, e, r) {
                        r.moveTo(t1[0], t1[1]);
                        for(var n = 1; n < t1.length / 2; ++n)r.lineTo(t1[2 * n], t1[2 * n + 1]);
                        e && r.closePath();
                    }, t1.prototype.destroy = function() {
                        this.renderer = null;
                    }, t1;
                }();
                r.default = a, o.default.registerPlugin("graphics", a);
            },
            {
                "../../const": 46,
                "../../renderers/canvas/CanvasRenderer": 77
            }
        ],
        56: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e, r, n, i, o, s, a) {
                    var u = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : [], h = 0, l = 0, c = 0, d = 0, f = 0;
                    u.push(t1, e);
                    for(var p = 1, v = 0; p <= 20; ++p)v = p / 20, h = 1 - v, l = h * h, c = l * h, d = v * v, f = d * v, u.push(c * t1 + 3 * l * v * r + 3 * h * d * i + f * s, c * e + 3 * l * v * n + 3 * h * d * o + f * a);
                    return u;
                }
                r.__esModule = !0, r.default = n;
            },
            {}
        ],
        57: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function o(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function s(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var a = t1("../../utils"), u = t1("../../const"), h = t1("../../renderers/webgl/utils/ObjectRenderer"), l = n(h), c = t1("../../renderers/webgl/WebGLRenderer"), d = n(c), f = t1("./WebGLGraphicsData"), p = n(f), v = t1("./shaders/PrimitiveShader"), y = n(v), g = t1("./utils/buildPoly"), m = n(g), _ = t1("./utils/buildRectangle"), b = n(_), x = t1("./utils/buildRoundedRectangle"), T = n(x), w = t1("./utils/buildCircle"), E = n(w), S = function(t1) {
                    function e(r) {
                        i(this, e);
                        var n = o(this, t1.call(this, r));
                        return n.graphicsDataPool = [], n.primitiveShader = null, n.gl = r.gl, n.CONTEXT_UID = 0, n;
                    }
                    return s(e, t1), e.prototype.onContextChange = function() {
                        this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.primitiveShader = new y.default(this.gl);
                    }, e.prototype.destroy = function() {
                        l.default.prototype.destroy.call(this);
                        for(var t1 = 0; t1 < this.graphicsDataPool.length; ++t1)this.graphicsDataPool[t1].destroy();
                        this.graphicsDataPool = null;
                    }, e.prototype.render = function(t1) {
                        var e = this.renderer, r = e.gl, n = void 0, i = t1._webGL[this.CONTEXT_UID];
                        i && t1.dirty === i.dirty || (this.updateGraphics(t1), i = t1._webGL[this.CONTEXT_UID]);
                        var o = this.primitiveShader;
                        e.bindShader(o), e.state.setBlendMode(t1.blendMode);
                        for(var s = 0, u = i.data.length; s < u; s++){
                            n = i.data[s];
                            var h = n.shader;
                            e.bindShader(h), h.uniforms.translationMatrix = t1.transform.worldTransform.toArray(!0), h.uniforms.tint = (0, a.hex2rgb)(t1.tint), h.uniforms.alpha = t1.worldAlpha, e.bindVao(n.vao), n.nativeLines ? r.drawArrays(r.LINES, 0, n.points.length / 6) : n.vao.draw(r.TRIANGLE_STRIP, n.indices.length);
                        }
                    }, e.prototype.updateGraphics = function(t1) {
                        var e = this.renderer.gl, r = t1._webGL[this.CONTEXT_UID];
                        if (r || (r = t1._webGL[this.CONTEXT_UID] = {
                            lastIndex: 0,
                            data: [],
                            gl: e,
                            clearDirty: -1,
                            dirty: -1
                        }), r.dirty = t1.dirty, t1.clearDirty !== r.clearDirty) {
                            r.clearDirty = t1.clearDirty;
                            for(var n = 0; n < r.data.length; n++)this.graphicsDataPool.push(r.data[n]);
                            r.data.length = 0, r.lastIndex = 0;
                        }
                        for(var i = void 0, o = void 0, s = r.lastIndex; s < t1.graphicsData.length; s++){
                            var a = t1.graphicsData[s];
                            i = this.getWebGLData(r, 0), a.nativeLines && a.lineWidth && (o = this.getWebGLData(r, 0, !0), r.lastIndex++), a.type === u.SHAPES.POLY && (0, m.default)(a, i, o), a.type === u.SHAPES.RECT ? (0, b.default)(a, i, o) : a.type === u.SHAPES.CIRC || a.type === u.SHAPES.ELIP ? (0, E.default)(a, i, o) : a.type === u.SHAPES.RREC && (0, T.default)(a, i, o), r.lastIndex++;
                        }
                        this.renderer.bindVao(null);
                        for(var h = 0; h < r.data.length; h++)i = r.data[h], i.dirty && i.upload();
                    }, e.prototype.getWebGLData = function(t1, e, r) {
                        var n = t1.data[t1.data.length - 1];
                        return (!n || n.nativeLines !== r || n.points.length > 32e4) && (n = this.graphicsDataPool.pop() || new p.default(this.renderer.gl, this.primitiveShader, this.renderer.state.attribsState), n.nativeLines = r, n.reset(e), t1.data.push(n)), n.dirty = !0, n;
                    }, e;
                }(l.default);
                r.default = S, d.default.registerPlugin("graphics", S);
            },
            {
                "../../const": 46,
                "../../renderers/webgl/WebGLRenderer": 84,
                "../../renderers/webgl/utils/ObjectRenderer": 94,
                "../../utils": 124,
                "./WebGLGraphicsData": 58,
                "./shaders/PrimitiveShader": 59,
                "./utils/buildCircle": 60,
                "./utils/buildPoly": 62,
                "./utils/buildRectangle": 63,
                "./utils/buildRoundedRectangle": 64
            }
        ],
        58: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = t1("pixi-gl-core"), o = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(i), s = function() {
                    function t1(e, r, i) {
                        n(this, t1), this.gl = e, this.color = [
                            0,
                            0,
                            0
                        ], this.points = [], this.indices = [], this.buffer = o.default.GLBuffer.createVertexBuffer(e), this.indexBuffer = o.default.GLBuffer.createIndexBuffer(e), this.dirty = !0, this.nativeLines = !1, this.glPoints = null, this.glIndices = null, this.shader = r, this.vao = new o.default.VertexArrayObject(e, i).addIndex(this.indexBuffer).addAttribute(this.buffer, r.attributes.aVertexPosition, e.FLOAT, !1, 24, 0).addAttribute(this.buffer, r.attributes.aColor, e.FLOAT, !1, 24, 8);
                    }
                    return t1.prototype.reset = function() {
                        this.points.length = 0, this.indices.length = 0;
                    }, t1.prototype.upload = function() {
                        this.glPoints = new Float32Array(this.points), this.buffer.upload(this.glPoints), this.glIndices = new Uint16Array(this.indices), this.indexBuffer.upload(this.glIndices), this.dirty = !1;
                    }, t1.prototype.destroy = function() {
                        this.color = null, this.points = null, this.indices = null, this.vao.destroy(), this.buffer.destroy(), this.indexBuffer.destroy(), this.gl = null, this.buffer = null, this.indexBuffer = null, this.glPoints = null, this.glIndices = null;
                    }, t1;
                }();
                r.default = s;
            },
            {
                "pixi-gl-core": 12
            }
        ],
        59: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function i(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function o(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var s = t1("../../../Shader"), a = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(s), u = function(t1) {
                    function e(r) {
                        return n(this, e), i(this, t1.call(this, r, [
                            "attribute vec2 aVertexPosition;",
                            "attribute vec4 aColor;",
                            "uniform mat3 translationMatrix;",
                            "uniform mat3 projectionMatrix;",
                            "uniform float alpha;",
                            "uniform vec3 tint;",
                            "varying vec4 vColor;",
                            "void main(void){",
                            "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);",
                            "   vColor = aColor * vec4(tint * alpha, alpha);",
                            "}"
                        ].join("\n"), [
                            "varying vec4 vColor;",
                            "void main(void){",
                            "   gl_FragColor = vColor;",
                            "}"
                        ].join("\n")));
                    }
                    return o(e, t1), e;
                }(a.default);
                r.default = u;
            },
            {
                "../../../Shader": 44
            }
        ],
        60: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e, r) {
                    var n = t1.shape, i = n.x, u = n.y, h = void 0, l = void 0;
                    if (t1.type === s.SHAPES.CIRC ? (h = n.radius, l = n.radius) : (h = n.width, l = n.height), 0 !== h && 0 !== l) {
                        var c = Math.floor(30 * Math.sqrt(n.radius)) || Math.floor(15 * Math.sqrt(n.width + n.height)), d = 2 * Math.PI / c;
                        if (t1.fill) {
                            var f = (0, a.hex2rgb)(t1.fillColor), p = t1.fillAlpha, v = f[0] * p, y = f[1] * p, g = f[2] * p, m = e.points, _ = e.indices, b = m.length / 6;
                            _.push(b);
                            for(var x = 0; x < c + 1; x++)m.push(i, u, v, y, g, p), m.push(i + Math.sin(d * x) * h, u + Math.cos(d * x) * l, v, y, g, p), _.push(b++, b++);
                            _.push(b - 1);
                        }
                        if (t1.lineWidth) {
                            var T = t1.points;
                            t1.points = [];
                            for(var w = 0; w < c + 1; w++)t1.points.push(i + Math.sin(d * w) * h, u + Math.cos(d * w) * l);
                            (0, o.default)(t1, e, r), t1.points = T;
                        }
                    }
                }
                r.__esModule = !0, r.default = n;
                var i = t1("./buildLine"), o = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(i), s = t1("../../../const"), a = t1("../../../utils");
            },
            {
                "../../../const": 46,
                "../../../utils": 124,
                "./buildLine": 61
            }
        ],
        61: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    var r = t1.points;
                    if (0 !== r.length) {
                        var n = new o.Point(r[0], r[1]), i = new o.Point(r[r.length - 2], r[r.length - 1]);
                        if (n.x === i.x && n.y === i.y) {
                            r = r.slice(), r.pop(), r.pop(), i = new o.Point(r[r.length - 2], r[r.length - 1]);
                            var a = i.x + .5 * (n.x - i.x), u = i.y + .5 * (n.y - i.y);
                            r.unshift(a, u), r.push(a, u);
                        }
                        var h = e.points, l = e.indices, c = r.length / 2, d = r.length, f = h.length / 6, p = t1.lineWidth / 2, v = (0, s.hex2rgb)(t1.lineColor), y = t1.lineAlpha, g = v[0] * y, m = v[1] * y, _ = v[2] * y, b = r[0], x = r[1], T = r[2], w = r[3], E = 0, S = 0, O = -(x - w), P = b - T, M = 0, C = 0, R = 0, A = 0, I = Math.sqrt(O * O + P * P);
                        O /= I, P /= I, O *= p, P *= p, h.push(b - O, x - P, g, m, _, y), h.push(b + O, x + P, g, m, _, y);
                        for(var D = 1; D < c - 1; ++D){
                            b = r[2 * (D - 1)], x = r[2 * (D - 1) + 1], T = r[2 * D], w = r[2 * D + 1], E = r[2 * (D + 1)], S = r[2 * (D + 1) + 1], O = -(x - w), P = b - T, I = Math.sqrt(O * O + P * P), O /= I, P /= I, O *= p, P *= p, M = -(w - S), C = T - E, I = Math.sqrt(M * M + C * C), M /= I, C /= I, M *= p, C *= p;
                            var L = -P + x - (-P + w), N = -O + T - (-O + b), F = (-O + b) * (-P + w) - (-O + T) * (-P + x), B = -C + S - (-C + w), k = -M + T - (-M + E), j = (-M + E) * (-C + w) - (-M + T) * (-C + S), U = L * k - B * N;
                            if (Math.abs(U) < .1) U += 10.1, h.push(T - O, w - P, g, m, _, y), h.push(T + O, w + P, g, m, _, y);
                            else {
                                var X = (N * j - k * F) / U, G = (B * F - L * j) / U;
                                (X - T) * (X - T) + (G - w) * (G - w) > 196 * p * p ? (R = O - M, A = P - C, I = Math.sqrt(R * R + A * A), R /= I, A /= I, R *= p, A *= p, h.push(T - R, w - A), h.push(g, m, _, y), h.push(T + R, w + A), h.push(g, m, _, y), h.push(T - R, w - A), h.push(g, m, _, y), d++) : (h.push(X, G), h.push(g, m, _, y), h.push(T - (X - T), w - (G - w)), h.push(g, m, _, y));
                            }
                        }
                        b = r[2 * (c - 2)], x = r[2 * (c - 2) + 1], T = r[2 * (c - 1)], w = r[2 * (c - 1) + 1], O = -(x - w), P = b - T, I = Math.sqrt(O * O + P * P), O /= I, P /= I, O *= p, P *= p, h.push(T - O, w - P), h.push(g, m, _, y), h.push(T + O, w + P), h.push(g, m, _, y), l.push(f);
                        for(var W = 0; W < d; ++W)l.push(f++);
                        l.push(f - 1);
                    }
                }
                function i(t1, e) {
                    var r = 0, n = t1.points;
                    if (0 !== n.length) {
                        var i = e.points, o = n.length / 2, a = (0, s.hex2rgb)(t1.lineColor), u = t1.lineAlpha, h = a[0] * u, l = a[1] * u, c = a[2] * u;
                        for(r = 1; r < o; r++){
                            var d = n[2 * (r - 1)], f = n[2 * (r - 1) + 1], p = n[2 * r], v = n[2 * r + 1];
                            i.push(d, f), i.push(h, l, c, u), i.push(p, v), i.push(h, l, c, u);
                        }
                    }
                }
                r.__esModule = !0, r.default = function(t1, e, r) {
                    t1.nativeLines ? i(t1, r) : n(t1, e);
                };
                var o = t1("../../../math"), s = t1("../../../utils");
            },
            {
                "../../../math": 70,
                "../../../utils": 124
            }
        ],
        62: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e, r) {
                    t1.points = t1.shape.points.slice();
                    var n = t1.points;
                    if (t1.fill && n.length >= 6) {
                        for(var i = [], o = t1.holes, u = 0; u < o.length; u++){
                            var l = o[u];
                            i.push(n.length / 2), n = n.concat(l.points);
                        }
                        var c = e.points, d = e.indices, f = n.length / 2, p = (0, a.hex2rgb)(t1.fillColor), v = t1.fillAlpha, y = p[0] * v, g = p[1] * v, m = p[2] * v, _ = (0, h.default)(n, i, 2);
                        if (!_) return;
                        for(var b = c.length / 6, x = 0; x < _.length; x += 3)d.push(_[x] + b), d.push(_[x] + b), d.push(_[x + 1] + b), d.push(_[x + 2] + b), d.push(_[x + 2] + b);
                        for(var T = 0; T < f; T++)c.push(n[2 * T], n[2 * T + 1], y, g, m, v);
                    }
                    t1.lineWidth > 0 && (0, s.default)(t1, e, r);
                }
                r.__esModule = !0, r.default = i;
                var o = t1("./buildLine"), s = n(o), a = t1("../../../utils"), u = t1("earcut"), h = n(u);
            },
            {
                "../../../utils": 124,
                "./buildLine": 61,
                earcut: 2
            }
        ],
        63: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e, r) {
                    var n = t1.shape, i = n.x, a = n.y, u = n.width, h = n.height;
                    if (t1.fill) {
                        var l = (0, s.hex2rgb)(t1.fillColor), c = t1.fillAlpha, d = l[0] * c, f = l[1] * c, p = l[2] * c, v = e.points, y = e.indices, g = v.length / 6;
                        v.push(i, a), v.push(d, f, p, c), v.push(i + u, a), v.push(d, f, p, c), v.push(i, a + h), v.push(d, f, p, c), v.push(i + u, a + h), v.push(d, f, p, c), y.push(g, g, g + 1, g + 2, g + 3, g + 3);
                    }
                    if (t1.lineWidth) {
                        var m = t1.points;
                        t1.points = [
                            i,
                            a,
                            i + u,
                            a,
                            i + u,
                            a + h,
                            i,
                            a + h,
                            i,
                            a
                        ], (0, o.default)(t1, e, r), t1.points = m;
                    }
                }
                r.__esModule = !0, r.default = n;
                var i = t1("./buildLine"), o = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(i), s = t1("../../../utils");
            },
            {
                "../../../utils": 124,
                "./buildLine": 61
            }
        ],
        64: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e, r) {
                    var n = t1.shape, i = n.x, o = n.y, a = n.width, h = n.height, d = n.radius, f = [];
                    if (f.push(i, o + d), s(i, o + h - d, i, o + h, i + d, o + h, f), s(i + a - d, o + h, i + a, o + h, i + a, o + h - d, f), s(i + a, o + d, i + a, o, i + a - d, o, f), s(i + d, o, i, o, i, o + d + 1e-10, f), t1.fill) {
                        for(var p = (0, c.hex2rgb)(t1.fillColor), v = t1.fillAlpha, y = p[0] * v, g = p[1] * v, m = p[2] * v, _ = e.points, b = e.indices, x = _.length / 6, T = (0, u.default)(f, null, 2), w = 0, E = T.length; w < E; w += 3)b.push(T[w] + x), b.push(T[w] + x), b.push(T[w + 1] + x), b.push(T[w + 2] + x), b.push(T[w + 2] + x);
                        for(var S = 0, O = f.length; S < O; S++)_.push(f[S], f[++S], y, g, m, v);
                    }
                    if (t1.lineWidth) {
                        var P = t1.points;
                        t1.points = f, (0, l.default)(t1, e, r), t1.points = P;
                    }
                }
                function o(t1, e, r) {
                    return t1 + (e - t1) * r;
                }
                function s(t1, e, r, n, i, s) {
                    for(var a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [], u = a, h = 0, l = 0, c = 0, d = 0, f = 0, p = 0, v = 0, y = 0; v <= 20; ++v)y = v / 20, h = o(t1, r, y), l = o(e, n, y), c = o(r, i, y), d = o(n, s, y), f = o(h, c, y), p = o(l, d, y), u.push(f, p);
                    return u;
                }
                r.__esModule = !0, r.default = i;
                var a = t1("earcut"), u = n(a), h = t1("./buildLine"), l = n(h), c = t1("../../../utils");
            },
            {
                "../../../utils": 124,
                "./buildLine": 61,
                earcut: 2
            }
        ],
        65: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }
                function i(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                r.__esModule = !0, r.autoDetectRenderer = r.Application = r.Filter = r.SpriteMaskFilter = r.Quad = r.RenderTarget = r.ObjectRenderer = r.WebGLManager = r.Shader = r.CanvasRenderTarget = r.TextureUvs = r.VideoBaseTexture = r.BaseRenderTexture = r.RenderTexture = r.BaseTexture = r.Texture = r.Spritesheet = r.CanvasGraphicsRenderer = r.GraphicsRenderer = r.GraphicsData = r.Graphics = r.TextMetrics = r.TextStyle = r.Text = r.SpriteRenderer = r.CanvasTinter = r.CanvasSpriteRenderer = r.Sprite = r.TransformBase = r.TransformStatic = r.Transform = r.Container = r.DisplayObject = r.Bounds = r.glCore = r.WebGLRenderer = r.CanvasRenderer = r.ticker = r.utils = r.settings = void 0;
                var o = t1("./const");
                Object.keys(o).forEach(function(t1) {
                    "default" !== t1 && "__esModule" !== t1 && Object.defineProperty(r, t1, {
                        enumerable: !0,
                        get: function() {
                            return o[t1];
                        }
                    });
                });
                var s = t1("./math");
                Object.keys(s).forEach(function(t1) {
                    "default" !== t1 && "__esModule" !== t1 && Object.defineProperty(r, t1, {
                        enumerable: !0,
                        get: function() {
                            return s[t1];
                        }
                    });
                });
                var a = t1("pixi-gl-core");
                Object.defineProperty(r, "glCore", {
                    enumerable: !0,
                    get: function() {
                        return i(a).default;
                    }
                });
                var u = t1("./display/Bounds");
                Object.defineProperty(r, "Bounds", {
                    enumerable: !0,
                    get: function() {
                        return i(u).default;
                    }
                });
                var h = t1("./display/DisplayObject");
                Object.defineProperty(r, "DisplayObject", {
                    enumerable: !0,
                    get: function() {
                        return i(h).default;
                    }
                });
                var l = t1("./display/Container");
                Object.defineProperty(r, "Container", {
                    enumerable: !0,
                    get: function() {
                        return i(l).default;
                    }
                });
                var c = t1("./display/Transform");
                Object.defineProperty(r, "Transform", {
                    enumerable: !0,
                    get: function() {
                        return i(c).default;
                    }
                });
                var d = t1("./display/TransformStatic");
                Object.defineProperty(r, "TransformStatic", {
                    enumerable: !0,
                    get: function() {
                        return i(d).default;
                    }
                });
                var f = t1("./display/TransformBase");
                Object.defineProperty(r, "TransformBase", {
                    enumerable: !0,
                    get: function() {
                        return i(f).default;
                    }
                });
                var p = t1("./sprites/Sprite");
                Object.defineProperty(r, "Sprite", {
                    enumerable: !0,
                    get: function() {
                        return i(p).default;
                    }
                });
                var v = t1("./sprites/canvas/CanvasSpriteRenderer");
                Object.defineProperty(r, "CanvasSpriteRenderer", {
                    enumerable: !0,
                    get: function() {
                        return i(v).default;
                    }
                });
                var y = t1("./sprites/canvas/CanvasTinter");
                Object.defineProperty(r, "CanvasTinter", {
                    enumerable: !0,
                    get: function() {
                        return i(y).default;
                    }
                });
                var g = t1("./sprites/webgl/SpriteRenderer");
                Object.defineProperty(r, "SpriteRenderer", {
                    enumerable: !0,
                    get: function() {
                        return i(g).default;
                    }
                });
                var m = t1("./text/Text");
                Object.defineProperty(r, "Text", {
                    enumerable: !0,
                    get: function() {
                        return i(m).default;
                    }
                });
                var _ = t1("./text/TextStyle");
                Object.defineProperty(r, "TextStyle", {
                    enumerable: !0,
                    get: function() {
                        return i(_).default;
                    }
                });
                var b = t1("./text/TextMetrics");
                Object.defineProperty(r, "TextMetrics", {
                    enumerable: !0,
                    get: function() {
                        return i(b).default;
                    }
                });
                var x = t1("./graphics/Graphics");
                Object.defineProperty(r, "Graphics", {
                    enumerable: !0,
                    get: function() {
                        return i(x).default;
                    }
                });
                var T = t1("./graphics/GraphicsData");
                Object.defineProperty(r, "GraphicsData", {
                    enumerable: !0,
                    get: function() {
                        return i(T).default;
                    }
                });
                var w = t1("./graphics/webgl/GraphicsRenderer");
                Object.defineProperty(r, "GraphicsRenderer", {
                    enumerable: !0,
                    get: function() {
                        return i(w).default;
                    }
                });
                var E = t1("./graphics/canvas/CanvasGraphicsRenderer");
                Object.defineProperty(r, "CanvasGraphicsRenderer", {
                    enumerable: !0,
                    get: function() {
                        return i(E).default;
                    }
                });
                var S = t1("./textures/Spritesheet");
                Object.defineProperty(r, "Spritesheet", {
                    enumerable: !0,
                    get: function() {
                        return i(S).default;
                    }
                });
                var O = t1("./textures/Texture");
                Object.defineProperty(r, "Texture", {
                    enumerable: !0,
                    get: function() {
                        return i(O).default;
                    }
                });
                var P = t1("./textures/BaseTexture");
                Object.defineProperty(r, "BaseTexture", {
                    enumerable: !0,
                    get: function() {
                        return i(P).default;
                    }
                });
                var M = t1("./textures/RenderTexture");
                Object.defineProperty(r, "RenderTexture", {
                    enumerable: !0,
                    get: function() {
                        return i(M).default;
                    }
                });
                var C = t1("./textures/BaseRenderTexture");
                Object.defineProperty(r, "BaseRenderTexture", {
                    enumerable: !0,
                    get: function() {
                        return i(C).default;
                    }
                });
                var R = t1("./textures/VideoBaseTexture");
                Object.defineProperty(r, "VideoBaseTexture", {
                    enumerable: !0,
                    get: function() {
                        return i(R).default;
                    }
                });
                var A = t1("./textures/TextureUvs");
                Object.defineProperty(r, "TextureUvs", {
                    enumerable: !0,
                    get: function() {
                        return i(A).default;
                    }
                });
                var I = t1("./renderers/canvas/utils/CanvasRenderTarget");
                Object.defineProperty(r, "CanvasRenderTarget", {
                    enumerable: !0,
                    get: function() {
                        return i(I).default;
                    }
                });
                var D = t1("./Shader");
                Object.defineProperty(r, "Shader", {
                    enumerable: !0,
                    get: function() {
                        return i(D).default;
                    }
                });
                var L = t1("./renderers/webgl/managers/WebGLManager");
                Object.defineProperty(r, "WebGLManager", {
                    enumerable: !0,
                    get: function() {
                        return i(L).default;
                    }
                });
                var N = t1("./renderers/webgl/utils/ObjectRenderer");
                Object.defineProperty(r, "ObjectRenderer", {
                    enumerable: !0,
                    get: function() {
                        return i(N).default;
                    }
                });
                var F = t1("./renderers/webgl/utils/RenderTarget");
                Object.defineProperty(r, "RenderTarget", {
                    enumerable: !0,
                    get: function() {
                        return i(F).default;
                    }
                });
                var B = t1("./renderers/webgl/utils/Quad");
                Object.defineProperty(r, "Quad", {
                    enumerable: !0,
                    get: function() {
                        return i(B).default;
                    }
                });
                var k = t1("./renderers/webgl/filters/spriteMask/SpriteMaskFilter");
                Object.defineProperty(r, "SpriteMaskFilter", {
                    enumerable: !0,
                    get: function() {
                        return i(k).default;
                    }
                });
                var j = t1("./renderers/webgl/filters/Filter");
                Object.defineProperty(r, "Filter", {
                    enumerable: !0,
                    get: function() {
                        return i(j).default;
                    }
                });
                var U = t1("./Application");
                Object.defineProperty(r, "Application", {
                    enumerable: !0,
                    get: function() {
                        return i(U).default;
                    }
                });
                var X = t1("./autoDetectRenderer");
                Object.defineProperty(r, "autoDetectRenderer", {
                    enumerable: !0,
                    get: function() {
                        return X.autoDetectRenderer;
                    }
                });
                var G = t1("./utils"), W = n(G), H = t1("./ticker"), Y = n(H), V = t1("./settings"), z = i(V), q = t1("./renderers/canvas/CanvasRenderer"), K = i(q), Z = t1("./renderers/webgl/WebGLRenderer"), J = i(Z);
                r.settings = z.default, r.utils = W, r.ticker = Y, r.CanvasRenderer = K.default, r.WebGLRenderer = J.default;
            },
            {
                "./Application": 43,
                "./Shader": 44,
                "./autoDetectRenderer": 45,
                "./const": 46,
                "./display/Bounds": 47,
                "./display/Container": 48,
                "./display/DisplayObject": 49,
                "./display/Transform": 50,
                "./display/TransformBase": 51,
                "./display/TransformStatic": 52,
                "./graphics/Graphics": 53,
                "./graphics/GraphicsData": 54,
                "./graphics/canvas/CanvasGraphicsRenderer": 55,
                "./graphics/webgl/GraphicsRenderer": 57,
                "./math": 70,
                "./renderers/canvas/CanvasRenderer": 77,
                "./renderers/canvas/utils/CanvasRenderTarget": 79,
                "./renderers/webgl/WebGLRenderer": 84,
                "./renderers/webgl/filters/Filter": 86,
                "./renderers/webgl/filters/spriteMask/SpriteMaskFilter": 89,
                "./renderers/webgl/managers/WebGLManager": 93,
                "./renderers/webgl/utils/ObjectRenderer": 94,
                "./renderers/webgl/utils/Quad": 95,
                "./renderers/webgl/utils/RenderTarget": 96,
                "./settings": 101,
                "./sprites/Sprite": 102,
                "./sprites/canvas/CanvasSpriteRenderer": 103,
                "./sprites/canvas/CanvasTinter": 104,
                "./sprites/webgl/SpriteRenderer": 106,
                "./text/Text": 108,
                "./text/TextMetrics": 109,
                "./text/TextStyle": 110,
                "./textures/BaseRenderTexture": 111,
                "./textures/BaseTexture": 112,
                "./textures/RenderTexture": 113,
                "./textures/Spritesheet": 114,
                "./textures/Texture": 115,
                "./textures/TextureUvs": 116,
                "./textures/VideoBaseTexture": 117,
                "./ticker": 120,
                "./utils": 124,
                "pixi-gl-core": 12
            }
        ],
        66: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 < 0 ? -1 : t1 > 0 ? 1 : 0;
                }
                r.__esModule = !0;
                var i = t1("./Matrix"), o = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(i), s = [
                    1,
                    1,
                    0,
                    -1,
                    -1,
                    -1,
                    0,
                    1,
                    1,
                    1,
                    0,
                    -1,
                    -1,
                    -1,
                    0,
                    1
                ], a = [
                    0,
                    1,
                    1,
                    1,
                    0,
                    -1,
                    -1,
                    -1,
                    0,
                    1,
                    1,
                    1,
                    0,
                    -1,
                    -1,
                    -1
                ], u = [
                    0,
                    -1,
                    -1,
                    -1,
                    0,
                    1,
                    1,
                    1,
                    0,
                    1,
                    1,
                    1,
                    0,
                    -1,
                    -1,
                    -1
                ], h = [
                    1,
                    1,
                    0,
                    -1,
                    -1,
                    -1,
                    0,
                    1,
                    -1,
                    -1,
                    0,
                    1,
                    1,
                    1,
                    0,
                    -1
                ], l = [], c = [];
                !function() {
                    for(var t1 = 0; t1 < 16; t1++){
                        var e = [];
                        c.push(e);
                        for(var r = 0; r < 16; r++)for(var i = n(s[t1] * s[r] + u[t1] * a[r]), d = n(a[t1] * s[r] + h[t1] * a[r]), f = n(s[t1] * u[r] + u[t1] * h[r]), p = n(a[t1] * u[r] + h[t1] * h[r]), v = 0; v < 16; v++)if (s[v] === i && a[v] === d && u[v] === f && h[v] === p) {
                            e.push(v);
                            break;
                        }
                    }
                    for(var y = 0; y < 16; y++){
                        var g = new o.default;
                        g.set(s[y], a[y], u[y], h[y], 0, 0), l.push(g);
                    }
                }();
                var d = {
                    E: 0,
                    SE: 1,
                    S: 2,
                    SW: 3,
                    W: 4,
                    NW: 5,
                    N: 6,
                    NE: 7,
                    MIRROR_VERTICAL: 8,
                    MIRROR_HORIZONTAL: 12,
                    uX: function(t1) {
                        return s[t1];
                    },
                    uY: function(t1) {
                        return a[t1];
                    },
                    vX: function(t1) {
                        return u[t1];
                    },
                    vY: function(t1) {
                        return h[t1];
                    },
                    inv: function(t1) {
                        return 8 & t1 ? 15 & t1 : 7 & -t1;
                    },
                    add: function(t1, e) {
                        return c[t1][e];
                    },
                    sub: function(t1, e) {
                        return c[t1][d.inv(e)];
                    },
                    rotate180: function(t1) {
                        return 4 ^ t1;
                    },
                    isSwapWidthHeight: function(t1) {
                        return 2 == (3 & t1);
                    },
                    byDirection: function(t1, e) {
                        return 2 * Math.abs(t1) <= Math.abs(e) ? e >= 0 ? d.S : d.N : 2 * Math.abs(e) <= Math.abs(t1) ? t1 > 0 ? d.E : d.W : e > 0 ? t1 > 0 ? d.SE : d.SW : t1 > 0 ? d.NE : d.NW;
                    },
                    matrixAppendRotationInv: function(t1, e) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, i = l[d.inv(e)];
                        i.tx = r, i.ty = n, t1.append(i);
                    }
                };
                r.default = d;
            },
            {
                "./Matrix": 67
            }
        ],
        67: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), o = t1("./Point"), s = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(o), a = function() {
                    function t1() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                        n(this, t1), this.a = e, this.b = r, this.c = i, this.d = o, this.tx = s, this.ty = a, this.array = null;
                    }
                    return t1.prototype.fromArray = function(t1) {
                        this.a = t1[0], this.b = t1[1], this.c = t1[3], this.d = t1[4], this.tx = t1[2], this.ty = t1[5];
                    }, t1.prototype.set = function(t1, e, r, n, i, o) {
                        return this.a = t1, this.b = e, this.c = r, this.d = n, this.tx = i, this.ty = o, this;
                    }, t1.prototype.toArray = function(t1, e) {
                        this.array || (this.array = new Float32Array(9));
                        var r = e || this.array;
                        return t1 ? (r[0] = this.a, r[1] = this.b, r[2] = 0, r[3] = this.c, r[4] = this.d, r[5] = 0, r[6] = this.tx, r[7] = this.ty, r[8] = 1) : (r[0] = this.a, r[1] = this.c, r[2] = this.tx, r[3] = this.b, r[4] = this.d, r[5] = this.ty, r[6] = 0, r[7] = 0, r[8] = 1), r;
                    }, t1.prototype.apply = function(t1, e) {
                        e = e || new s.default;
                        var r = t1.x, n = t1.y;
                        return e.x = this.a * r + this.c * n + this.tx, e.y = this.b * r + this.d * n + this.ty, e;
                    }, t1.prototype.applyInverse = function(t1, e) {
                        e = e || new s.default;
                        var r = 1 / (this.a * this.d + this.c * -this.b), n = t1.x, i = t1.y;
                        return e.x = this.d * r * n + -this.c * r * i + (this.ty * this.c - this.tx * this.d) * r, e.y = this.a * r * i + -this.b * r * n + (-this.ty * this.a + this.tx * this.b) * r, e;
                    }, t1.prototype.translate = function(t1, e) {
                        return this.tx += t1, this.ty += e, this;
                    }, t1.prototype.scale = function(t1, e) {
                        return this.a *= t1, this.d *= e, this.c *= t1, this.b *= e, this.tx *= t1, this.ty *= e, this;
                    }, t1.prototype.rotate = function(t1) {
                        var e = Math.cos(t1), r = Math.sin(t1), n = this.a, i = this.c, o = this.tx;
                        return this.a = n * e - this.b * r, this.b = n * r + this.b * e, this.c = i * e - this.d * r, this.d = i * r + this.d * e, this.tx = o * e - this.ty * r, this.ty = o * r + this.ty * e, this;
                    }, t1.prototype.append = function(t1) {
                        var e = this.a, r = this.b, n = this.c, i = this.d;
                        return this.a = t1.a * e + t1.b * n, this.b = t1.a * r + t1.b * i, this.c = t1.c * e + t1.d * n, this.d = t1.c * r + t1.d * i, this.tx = t1.tx * e + t1.ty * n + this.tx, this.ty = t1.tx * r + t1.ty * i + this.ty, this;
                    }, t1.prototype.setTransform = function(t1, e, r, n, i, o, s, a, u) {
                        var h = Math.sin(s), l = Math.cos(s), c = Math.cos(u), d = Math.sin(u), f = -Math.sin(a), p = Math.cos(a), v = l * i, y = h * i, g = -h * o, m = l * o;
                        return this.a = c * v + d * g, this.b = c * y + d * m, this.c = f * v + p * g, this.d = f * y + p * m, this.tx = t1 + (r * v + n * g), this.ty = e + (r * y + n * m), this;
                    }, t1.prototype.prepend = function(t1) {
                        var e = this.tx;
                        if (1 !== t1.a || 0 !== t1.b || 0 !== t1.c || 1 !== t1.d) {
                            var r = this.a, n = this.c;
                            this.a = r * t1.a + this.b * t1.c, this.b = r * t1.b + this.b * t1.d, this.c = n * t1.a + this.d * t1.c, this.d = n * t1.b + this.d * t1.d;
                        }
                        return this.tx = e * t1.a + this.ty * t1.c + t1.tx, this.ty = e * t1.b + this.ty * t1.d + t1.ty, this;
                    }, t1.prototype.decompose = function(t1) {
                        var e = this.a, r = this.b, n = this.c, i = this.d, o = -Math.atan2(-n, i), s = Math.atan2(r, e);
                        return Math.abs(o + s) < 1e-5 ? (t1.rotation = s, e < 0 && i >= 0 && (t1.rotation += t1.rotation <= 0 ? Math.PI : -Math.PI), t1.skew.x = t1.skew.y = 0) : (t1.skew.x = o, t1.skew.y = s), t1.scale.x = Math.sqrt(e * e + r * r), t1.scale.y = Math.sqrt(n * n + i * i), t1.position.x = this.tx, t1.position.y = this.ty, t1;
                    }, t1.prototype.invert = function() {
                        var t1 = this.a, e = this.b, r = this.c, n = this.d, i = this.tx, o = t1 * n - e * r;
                        return this.a = n / o, this.b = -e / o, this.c = -r / o, this.d = t1 / o, this.tx = (r * this.ty - n * i) / o, this.ty = -(t1 * this.ty - e * i) / o, this;
                    }, t1.prototype.identity = function() {
                        return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this;
                    }, t1.prototype.clone = function() {
                        var e = new t1;
                        return e.a = this.a, e.b = this.b, e.c = this.c, e.d = this.d, e.tx = this.tx, e.ty = this.ty, e;
                    }, t1.prototype.copy = function(t1) {
                        return t1.a = this.a, t1.b = this.b, t1.c = this.c, t1.d = this.d, t1.tx = this.tx, t1.ty = this.ty, t1;
                    }, i(t1, null, [
                        {
                            key: "IDENTITY",
                            get: function() {
                                return new t1;
                            }
                        },
                        {
                            key: "TEMP_MATRIX",
                            get: function() {
                                return new t1;
                            }
                        }
                    ]), t1;
                }();
                r.default = a;
            },
            {
                "./Point": 69
            }
        ],
        68: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), o = function() {
                    function t1(e, r) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                        n(this, t1), this._x = i, this._y = o, this.cb = e, this.scope = r;
                    }
                    return t1.prototype.set = function(t1, e) {
                        var r = t1 || 0, n = e || (0 !== e ? r : 0);
                        this._x === r && this._y === n || (this._x = r, this._y = n, this.cb.call(this.scope));
                    }, t1.prototype.copy = function(t1) {
                        this._x === t1.x && this._y === t1.y || (this._x = t1.x, this._y = t1.y, this.cb.call(this.scope));
                    }, i(t1, [
                        {
                            key: "x",
                            get: function() {
                                return this._x;
                            },
                            set: function(t1) {
                                this._x !== t1 && (this._x = t1, this.cb.call(this.scope));
                            }
                        },
                        {
                            key: "y",
                            get: function() {
                                return this._y;
                            },
                            set: function(t1) {
                                this._y !== t1 && (this._y = t1, this.cb.call(this.scope));
                            }
                        }
                    ]), t1;
                }();
                r.default = o;
            },
            {}
        ],
        69: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = function() {
                    function t1() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        n(this, t1), this.x = e, this.y = r;
                    }
                    return t1.prototype.clone = function() {
                        return new t1(this.x, this.y);
                    }, t1.prototype.copy = function(t1) {
                        this.set(t1.x, t1.y);
                    }, t1.prototype.equals = function(t1) {
                        return t1.x === this.x && t1.y === this.y;
                    }, t1.prototype.set = function(t1, e) {
                        this.x = t1 || 0, this.y = e || (0 !== e ? this.x : 0);
                    }, t1;
                }();
                r.default = i;
            },
            {}
        ],
        70: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                r.__esModule = !0;
                var i = t1("./Point");
                Object.defineProperty(r, "Point", {
                    enumerable: !0,
                    get: function() {
                        return n(i).default;
                    }
                });
                var o = t1("./ObservablePoint");
                Object.defineProperty(r, "ObservablePoint", {
                    enumerable: !0,
                    get: function() {
                        return n(o).default;
                    }
                });
                var s = t1("./Matrix");
                Object.defineProperty(r, "Matrix", {
                    enumerable: !0,
                    get: function() {
                        return n(s).default;
                    }
                });
                var a = t1("./GroupD8");
                Object.defineProperty(r, "GroupD8", {
                    enumerable: !0,
                    get: function() {
                        return n(a).default;
                    }
                });
                var u = t1("./shapes/Circle");
                Object.defineProperty(r, "Circle", {
                    enumerable: !0,
                    get: function() {
                        return n(u).default;
                    }
                });
                var h = t1("./shapes/Ellipse");
                Object.defineProperty(r, "Ellipse", {
                    enumerable: !0,
                    get: function() {
                        return n(h).default;
                    }
                });
                var l = t1("./shapes/Polygon");
                Object.defineProperty(r, "Polygon", {
                    enumerable: !0,
                    get: function() {
                        return n(l).default;
                    }
                });
                var c = t1("./shapes/Rectangle");
                Object.defineProperty(r, "Rectangle", {
                    enumerable: !0,
                    get: function() {
                        return n(c).default;
                    }
                });
                var d = t1("./shapes/RoundedRectangle");
                Object.defineProperty(r, "RoundedRectangle", {
                    enumerable: !0,
                    get: function() {
                        return n(d).default;
                    }
                });
            },
            {
                "./GroupD8": 66,
                "./Matrix": 67,
                "./ObservablePoint": 68,
                "./Point": 69,
                "./shapes/Circle": 71,
                "./shapes/Ellipse": 72,
                "./shapes/Polygon": 73,
                "./shapes/Rectangle": 74,
                "./shapes/RoundedRectangle": 75
            }
        ],
        71: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = t1("./Rectangle"), o = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(i), s = t1("../../const"), a = function() {
                    function t1() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        n(this, t1), this.x = e, this.y = r, this.radius = i, this.type = s.SHAPES.CIRC;
                    }
                    return t1.prototype.clone = function() {
                        return new t1(this.x, this.y, this.radius);
                    }, t1.prototype.contains = function(t1, e) {
                        if (this.radius <= 0) return !1;
                        var r = this.radius * this.radius, n = this.x - t1, i = this.y - e;
                        return n *= n, i *= i, n + i <= r;
                    }, t1.prototype.getBounds = function() {
                        return new o.default(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius);
                    }, t1;
                }();
                r.default = a;
            },
            {
                "../../const": 46,
                "./Rectangle": 74
            }
        ],
        72: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = t1("./Rectangle"), o = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(i), s = t1("../../const"), a = function() {
                    function t1() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                        n(this, t1), this.x = e, this.y = r, this.width = i, this.height = o, this.type = s.SHAPES.ELIP;
                    }
                    return t1.prototype.clone = function() {
                        return new t1(this.x, this.y, this.width, this.height);
                    }, t1.prototype.contains = function(t1, e) {
                        if (this.width <= 0 || this.height <= 0) return !1;
                        var r = (t1 - this.x) / this.width, n = (e - this.y) / this.height;
                        return r *= r, n *= n, r + n <= 1;
                    }, t1.prototype.getBounds = function() {
                        return new o.default(this.x - this.width, this.y - this.height, this.width, this.height);
                    }, t1;
                }();
                r.default = a;
            },
            {
                "../../const": 46,
                "./Rectangle": 74
            }
        ],
        73: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = t1("../Point"), o = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(i), s = t1("../../const"), a = function() {
                    function t1() {
                        for(var e = arguments.length, r = Array(e), i = 0; i < e; i++)r[i] = arguments[i];
                        if (n(this, t1), Array.isArray(r[0]) && (r = r[0]), r[0] instanceof o.default) {
                            for(var a = [], u = 0, h = r.length; u < h; u++)a.push(r[u].x, r[u].y);
                            r = a;
                        }
                        this.closed = !0, this.points = r, this.type = s.SHAPES.POLY;
                    }
                    return t1.prototype.clone = function() {
                        return new t1(this.points.slice());
                    }, t1.prototype.close = function() {
                        var t1 = this.points;
                        t1[0] === t1[t1.length - 2] && t1[1] === t1[t1.length - 1] || t1.push(t1[0], t1[1]);
                    }, t1.prototype.contains = function(t1, e) {
                        for(var r = !1, n = this.points.length / 2, i = 0, o = n - 1; i < n; o = i++){
                            var s = this.points[2 * i], a = this.points[2 * i + 1], u = this.points[2 * o], h = this.points[2 * o + 1];
                            a > e != h > e && t1 < (e - a) / (h - a) * (u - s) + s && (r = !r);
                        }
                        return r;
                    }, t1;
                }();
                r.default = a;
            },
            {
                "../../const": 46,
                "../Point": 69
            }
        ],
        74: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), o = t1("../../const"), s = function() {
                    function t1() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                        n(this, t1), this.x = Number(e), this.y = Number(r), this.width = Number(i), this.height = Number(s), this.type = o.SHAPES.RECT;
                    }
                    return t1.prototype.clone = function() {
                        return new t1(this.x, this.y, this.width, this.height);
                    }, t1.prototype.copy = function(t1) {
                        return this.x = t1.x, this.y = t1.y, this.width = t1.width, this.height = t1.height, this;
                    }, t1.prototype.contains = function(t1, e) {
                        return !(this.width <= 0 || this.height <= 0) && t1 >= this.x && t1 < this.x + this.width && e >= this.y && e < this.y + this.height;
                    }, t1.prototype.pad = function(t1, e) {
                        t1 = t1 || 0, e = e || (0 !== e ? t1 : 0), this.x -= t1, this.y -= e, this.width += 2 * t1, this.height += 2 * e;
                    }, t1.prototype.fit = function(t1) {
                        this.x < t1.x && (this.width += this.x, this.width < 0 && (this.width = 0), this.x = t1.x), this.y < t1.y && (this.height += this.y, this.height < 0 && (this.height = 0), this.y = t1.y), this.x + this.width > t1.x + t1.width && (this.width = t1.width - this.x, this.width < 0 && (this.width = 0)), this.y + this.height > t1.y + t1.height && (this.height = t1.height - this.y, this.height < 0 && (this.height = 0));
                    }, t1.prototype.enlarge = function(t1) {
                        var e = Math.min(this.x, t1.x), r = Math.max(this.x + this.width, t1.x + t1.width), n = Math.min(this.y, t1.y), i = Math.max(this.y + this.height, t1.y + t1.height);
                        this.x = e, this.width = r - e, this.y = n, this.height = i - n;
                    }, i(t1, [
                        {
                            key: "left",
                            get: function() {
                                return this.x;
                            }
                        },
                        {
                            key: "right",
                            get: function() {
                                return this.x + this.width;
                            }
                        },
                        {
                            key: "top",
                            get: function() {
                                return this.y;
                            }
                        },
                        {
                            key: "bottom",
                            get: function() {
                                return this.y + this.height;
                            }
                        }
                    ], [
                        {
                            key: "EMPTY",
                            get: function() {
                                return new t1(0, 0, 0, 0);
                            }
                        }
                    ]), t1;
                }();
                r.default = s;
            },
            {
                "../../const": 46
            }
        ],
        75: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = t1("../../const"), o = function() {
                    function t1() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 20;
                        n(this, t1), this.x = e, this.y = r, this.width = o, this.height = s, this.radius = a, this.type = i.SHAPES.RREC;
                    }
                    return t1.prototype.clone = function() {
                        return new t1(this.x, this.y, this.width, this.height, this.radius);
                    }, t1.prototype.contains = function(t1, e) {
                        if (this.width <= 0 || this.height <= 0) return !1;
                        if (t1 >= this.x && t1 <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
                            if (e >= this.y + this.radius && e <= this.y + this.height - this.radius || t1 >= this.x + this.radius && t1 <= this.x + this.width - this.radius) return !0;
                            var r = t1 - (this.x + this.radius), n = e - (this.y + this.radius), i = this.radius * this.radius;
                            if (r * r + n * n <= i) return !0;
                            if ((r = t1 - (this.x + this.width - this.radius)) * r + n * n <= i) return !0;
                            if (n = e - (this.y + this.height - this.radius), r * r + n * n <= i) return !0;
                            if ((r = t1 - (this.x + this.radius)) * r + n * n <= i) return !0;
                        }
                        return !1;
                    }, t1;
                }();
                r.default = o;
            },
            {
                "../../const": 46
            }
        ],
        76: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function o(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function s(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var a = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), u = t1("../utils"), h = t1("../math"), l = t1("../const"), c = t1("../settings"), d = n(c), f = t1("../display/Container"), p = n(f), v = t1("../textures/RenderTexture"), y = n(v), g = t1("eventemitter3"), m = n(g), _ = new h.Matrix, b = function(t1) {
                    function e(r, n, s, a) {
                        i(this, e);
                        var c = o(this, t1.call(this));
                        return (0, u.sayHello)(r), "number" == typeof n && (n = Object.assign({
                            width: n,
                            height: s || d.default.RENDER_OPTIONS.height
                        }, a)), n = Object.assign({}, d.default.RENDER_OPTIONS, n), c.options = n, c.type = l.RENDERER_TYPE.UNKNOWN, c.screen = new h.Rectangle(0, 0, n.width, n.height), c.view = n.view || document.createElement("canvas"), c.resolution = n.resolution || d.default.RESOLUTION, c.transparent = n.transparent, c.autoResize = n.autoResize || !1, c.blendModes = null, c.preserveDrawingBuffer = n.preserveDrawingBuffer, c.clearBeforeRender = n.clearBeforeRender, c.roundPixels = n.roundPixels, c._backgroundColor = 0, c._backgroundColorRgba = [
                            0,
                            0,
                            0,
                            0
                        ], c._backgroundColorString = "#000000", c.backgroundColor = n.backgroundColor || c._backgroundColor, c._tempDisplayObjectParent = new p.default, c._lastObjectRendered = c._tempDisplayObjectParent, c;
                    }
                    return s(e, t1), e.prototype.resize = function(t1, e) {
                        this.screen.width = t1, this.screen.height = e, this.view.width = t1 * this.resolution, this.view.height = e * this.resolution, this.autoResize && (this.view.style.width = t1 + "px", this.view.style.height = e + "px");
                    }, e.prototype.generateTexture = function(t1, e, r) {
                        var n = t1.getLocalBounds(), i = y.default.create(0 | n.width, 0 | n.height, e, r);
                        return _.tx = -n.x, _.ty = -n.y, this.render(t1, i, !1, _, !0), i;
                    }, e.prototype.destroy = function(t1) {
                        t1 && this.view.parentNode && this.view.parentNode.removeChild(this.view), this.type = l.RENDERER_TYPE.UNKNOWN, this.view = null, this.screen = null, this.resolution = 0, this.transparent = !1, this.autoResize = !1, this.blendModes = null, this.options = null, this.preserveDrawingBuffer = !1, this.clearBeforeRender = !1, this.roundPixels = !1, this._backgroundColor = 0, this._backgroundColorRgba = null, this._backgroundColorString = null, this._tempDisplayObjectParent = null, this._lastObjectRendered = null;
                    }, a(e, [
                        {
                            key: "width",
                            get: function() {
                                return this.view.width;
                            }
                        },
                        {
                            key: "height",
                            get: function() {
                                return this.view.height;
                            }
                        },
                        {
                            key: "backgroundColor",
                            get: function() {
                                return this._backgroundColor;
                            },
                            set: function(t1) {
                                this._backgroundColor = t1, this._backgroundColorString = (0, u.hex2string)(t1), (0, u.hex2rgb)(t1, this._backgroundColorRgba);
                            }
                        }
                    ]), e;
                }(m.default);
                r.default = b;
            },
            {
                "../const": 46,
                "../display/Container": 48,
                "../math": 70,
                "../settings": 101,
                "../textures/RenderTexture": 113,
                "../utils": 124,
                eventemitter3: 3
            }
        ],
        77: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function o(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function s(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var a = t1("../SystemRenderer"), u = n(a), h = t1("./utils/CanvasMaskManager"), l = n(h), c = t1("./utils/CanvasRenderTarget"), d = n(c), f = t1("./utils/mapCanvasBlendModesToPixi"), p = n(f), v = t1("../../utils"), y = t1("../../const"), g = t1("../../settings"), m = n(g), _ = function(t1) {
                    function e(r, n, s) {
                        i(this, e);
                        var a = o(this, t1.call(this, "Canvas", r, n, s));
                        return a.type = y.RENDERER_TYPE.CANVAS, a.rootContext = a.view.getContext("2d", {
                            alpha: a.transparent
                        }), a.context = a.rootContext, a.refresh = !0, a.maskManager = new l.default(a), a.smoothProperty = "imageSmoothingEnabled", a.rootContext.imageSmoothingEnabled || (a.rootContext.webkitImageSmoothingEnabled ? a.smoothProperty = "webkitImageSmoothingEnabled" : a.rootContext.mozImageSmoothingEnabled ? a.smoothProperty = "mozImageSmoothingEnabled" : a.rootContext.oImageSmoothingEnabled ? a.smoothProperty = "oImageSmoothingEnabled" : a.rootContext.msImageSmoothingEnabled && (a.smoothProperty = "msImageSmoothingEnabled")), a.initPlugins(), a.blendModes = (0, p.default)(), a._activeBlendMode = null, a.renderingToScreen = !1, a.resize(a.options.width, a.options.height), a;
                    }
                    return s(e, t1), e.prototype.render = function(t1, e, r, n, i) {
                        if (this.view) {
                            this.renderingToScreen = !e, this.emit("prerender");
                            var o = this.resolution;
                            e ? (e = e.baseTexture || e, e._canvasRenderTarget || (e._canvasRenderTarget = new d.default(e.width, e.height, e.resolution), e.source = e._canvasRenderTarget.canvas, e.valid = !0), this.context = e._canvasRenderTarget.context, this.resolution = e._canvasRenderTarget.resolution) : this.context = this.rootContext;
                            var s = this.context;
                            if (e || (this._lastObjectRendered = t1), !i) {
                                var a = t1.parent, u = this._tempDisplayObjectParent.transform.worldTransform;
                                n ? (n.copy(u), this._tempDisplayObjectParent.transform._worldID = -1) : u.identity(), t1.parent = this._tempDisplayObjectParent, t1.updateTransform(), t1.parent = a;
                            }
                            s.setTransform(1, 0, 0, 1, 0, 0), s.globalAlpha = 1, this._activeBlendMode = y.BLEND_MODES.NORMAL, s.globalCompositeOperation = this.blendModes[y.BLEND_MODES.NORMAL], navigator.isCocoonJS && this.view.screencanvas && (s.fillStyle = "black", s.clear()), (void 0 !== r ? r : this.clearBeforeRender) && this.renderingToScreen && (this.transparent ? s.clearRect(0, 0, this.width, this.height) : (s.fillStyle = this._backgroundColorString, s.fillRect(0, 0, this.width, this.height)));
                            var h = this.context;
                            this.context = s, t1.renderCanvas(this), this.context = h, this.resolution = o, this.emit("postrender");
                        }
                    }, e.prototype.clear = function(t1) {
                        var e = this.context;
                        t1 = t1 || this._backgroundColorString, !this.transparent && t1 ? (e.fillStyle = t1, e.fillRect(0, 0, this.width, this.height)) : e.clearRect(0, 0, this.width, this.height);
                    }, e.prototype.setBlendMode = function(t1) {
                        this._activeBlendMode !== t1 && (this._activeBlendMode = t1, this.context.globalCompositeOperation = this.blendModes[t1]);
                    }, e.prototype.destroy = function(e) {
                        this.destroyPlugins(), t1.prototype.destroy.call(this, e), this.context = null, this.refresh = !0, this.maskManager.destroy(), this.maskManager = null, this.smoothProperty = null;
                    }, e.prototype.resize = function(e, r) {
                        t1.prototype.resize.call(this, e, r), this.smoothProperty && (this.rootContext[this.smoothProperty] = m.default.SCALE_MODE === y.SCALE_MODES.LINEAR);
                    }, e.prototype.invalidateBlendMode = function() {
                        this._activeBlendMode = this.blendModes.indexOf(this.context.globalCompositeOperation);
                    }, e;
                }(u.default);
                r.default = _, v.pluginTarget.mixin(_);
            },
            {
                "../../const": 46,
                "../../settings": 101,
                "../../utils": 124,
                "../SystemRenderer": 76,
                "./utils/CanvasMaskManager": 78,
                "./utils/CanvasRenderTarget": 79,
                "./utils/mapCanvasBlendModesToPixi": 81
            }
        ],
        78: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = t1("../../../const"), o = function() {
                    function t1(e) {
                        n(this, t1), this.renderer = e;
                    }
                    return t1.prototype.pushMask = function(t1) {
                        var e = this.renderer;
                        e.context.save();
                        var r = t1.alpha, n = t1.transform.worldTransform, i = e.resolution;
                        e.context.setTransform(n.a * i, n.b * i, n.c * i, n.d * i, n.tx * i, n.ty * i), t1._texture || (this.renderGraphicsShape(t1), e.context.clip()), t1.worldAlpha = r;
                    }, t1.prototype.renderGraphicsShape = function(t1) {
                        var e = this.renderer.context, r = t1.graphicsData.length;
                        if (0 !== r) {
                            e.beginPath();
                            for(var n = 0; n < r; n++){
                                var o = t1.graphicsData[n], s = o.shape;
                                if (o.type === i.SHAPES.POLY) {
                                    var a = s.points;
                                    e.moveTo(a[0], a[1]);
                                    for(var u = 1; u < a.length / 2; u++)e.lineTo(a[2 * u], a[2 * u + 1]);
                                    a[0] === a[a.length - 2] && a[1] === a[a.length - 1] && e.closePath();
                                } else if (o.type === i.SHAPES.RECT) e.rect(s.x, s.y, s.width, s.height), e.closePath();
                                else if (o.type === i.SHAPES.CIRC) e.arc(s.x, s.y, s.radius, 0, 2 * Math.PI), e.closePath();
                                else if (o.type === i.SHAPES.ELIP) {
                                    var h = 2 * s.width, l = 2 * s.height, c = s.x - h / 2, d = s.y - l / 2, f = h / 2 * .5522848, p = l / 2 * .5522848, v = c + h, y = d + l, g = c + h / 2, m = d + l / 2;
                                    e.moveTo(c, m), e.bezierCurveTo(c, m - p, g - f, d, g, d), e.bezierCurveTo(g + f, d, v, m - p, v, m), e.bezierCurveTo(v, m + p, g + f, y, g, y), e.bezierCurveTo(g - f, y, c, m + p, c, m), e.closePath();
                                } else if (o.type === i.SHAPES.RREC) {
                                    var _ = s.x, b = s.y, x = s.width, T = s.height, w = s.radius, E = Math.min(x, T) / 2 | 0;
                                    w = w > E ? E : w, e.moveTo(_, b + w), e.lineTo(_, b + T - w), e.quadraticCurveTo(_, b + T, _ + w, b + T), e.lineTo(_ + x - w, b + T), e.quadraticCurveTo(_ + x, b + T, _ + x, b + T - w), e.lineTo(_ + x, b + w), e.quadraticCurveTo(_ + x, b, _ + x - w, b), e.lineTo(_ + w, b), e.quadraticCurveTo(_, b, _, b + w), e.closePath();
                                }
                            }
                        }
                    }, t1.prototype.popMask = function(t1) {
                        t1.context.restore(), t1.invalidateBlendMode();
                    }, t1.prototype.destroy = function() {}, t1;
                }();
                r.default = o;
            },
            {
                "../../../const": 46
            }
        ],
        79: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), o = t1("../../../settings"), s = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(o), a = function() {
                    function t1(e, r, i) {
                        n(this, t1), this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.resolution = i || s.default.RESOLUTION, this.resize(e, r);
                    }
                    return t1.prototype.clear = function() {
                        this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                    }, t1.prototype.resize = function(t1, e) {
                        this.canvas.width = t1 * this.resolution, this.canvas.height = e * this.resolution;
                    }, t1.prototype.destroy = function() {
                        this.context = null, this.canvas = null;
                    }, i(t1, [
                        {
                            key: "width",
                            get: function() {
                                return this.canvas.width;
                            },
                            set: function(t1) {
                                this.canvas.width = t1;
                            }
                        },
                        {
                            key: "height",
                            get: function() {
                                return this.canvas.height;
                            },
                            set: function(t1) {
                                this.canvas.height = t1;
                            }
                        }
                    ]), t1;
                }();
                r.default = a;
            },
            {
                "../../../settings": 101
            }
        ],
        80: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    var e = document.createElement("canvas");
                    e.width = 6, e.height = 1;
                    var r = e.getContext("2d");
                    return r.fillStyle = t1, r.fillRect(0, 0, 6, 1), e;
                }
                function i() {
                    if ("undefined" == typeof document) return !1;
                    var t1 = n("#ff00ff"), e = n("#ffff00"), r = document.createElement("canvas");
                    r.width = 6, r.height = 1;
                    var i = r.getContext("2d");
                    i.globalCompositeOperation = "multiply", i.drawImage(t1, 0, 0), i.drawImage(e, 2, 0);
                    var o = i.getImageData(2, 0, 1, 1);
                    if (!o) return !1;
                    var s = o.data;
                    return 255 === s[0] && 0 === s[1] && 0 === s[2];
                }
                r.__esModule = !0, r.default = i;
            },
            {}
        ],
        81: [
            function(t1, e, r) {
                "use strict";
                function n() {
                    var t1 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return (0, s.default)() ? (t1[i.BLEND_MODES.NORMAL] = "source-over", t1[i.BLEND_MODES.ADD] = "lighter", t1[i.BLEND_MODES.MULTIPLY] = "multiply", t1[i.BLEND_MODES.SCREEN] = "screen", t1[i.BLEND_MODES.OVERLAY] = "overlay", t1[i.BLEND_MODES.DARKEN] = "darken", t1[i.BLEND_MODES.LIGHTEN] = "lighten", t1[i.BLEND_MODES.COLOR_DODGE] = "color-dodge", t1[i.BLEND_MODES.COLOR_BURN] = "color-burn", t1[i.BLEND_MODES.HARD_LIGHT] = "hard-light", t1[i.BLEND_MODES.SOFT_LIGHT] = "soft-light", t1[i.BLEND_MODES.DIFFERENCE] = "difference", t1[i.BLEND_MODES.EXCLUSION] = "exclusion", t1[i.BLEND_MODES.HUE] = "hue", t1[i.BLEND_MODES.SATURATION] = "saturate", t1[i.BLEND_MODES.COLOR] = "color", t1[i.BLEND_MODES.LUMINOSITY] = "luminosity") : (t1[i.BLEND_MODES.NORMAL] = "source-over", t1[i.BLEND_MODES.ADD] = "lighter", t1[i.BLEND_MODES.MULTIPLY] = "source-over", t1[i.BLEND_MODES.SCREEN] = "source-over", t1[i.BLEND_MODES.OVERLAY] = "source-over", t1[i.BLEND_MODES.DARKEN] = "source-over", t1[i.BLEND_MODES.LIGHTEN] = "source-over", t1[i.BLEND_MODES.COLOR_DODGE] = "source-over", t1[i.BLEND_MODES.COLOR_BURN] = "source-over", t1[i.BLEND_MODES.HARD_LIGHT] = "source-over", t1[i.BLEND_MODES.SOFT_LIGHT] = "source-over", t1[i.BLEND_MODES.DIFFERENCE] = "source-over", t1[i.BLEND_MODES.EXCLUSION] = "source-over", t1[i.BLEND_MODES.HUE] = "source-over", t1[i.BLEND_MODES.SATURATION] = "source-over", t1[i.BLEND_MODES.COLOR] = "source-over", t1[i.BLEND_MODES.LUMINOSITY] = "source-over"), t1[i.BLEND_MODES.NORMAL_NPM] = t1[i.BLEND_MODES.NORMAL], t1[i.BLEND_MODES.ADD_NPM] = t1[i.BLEND_MODES.ADD], t1[i.BLEND_MODES.SCREEN_NPM] = t1[i.BLEND_MODES.SCREEN], t1;
                }
                r.__esModule = !0, r.default = n;
                var i = t1("../../../const"), o = t1("./canUseNewCanvasBlendModes"), s = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(o);
            },
            {
                "../../../const": 46,
                "./canUseNewCanvasBlendModes": 80
            }
        ],
        82: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = t1("../../const"), o = t1("../../settings"), s = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(o), a = function() {
                    function t1(e) {
                        n(this, t1), this.renderer = e, this.count = 0, this.checkCount = 0, this.maxIdle = s.default.GC_MAX_IDLE, this.checkCountMax = s.default.GC_MAX_CHECK_COUNT, this.mode = s.default.GC_MODE;
                    }
                    return t1.prototype.update = function() {
                        this.count++, this.mode !== i.GC_MODES.MANUAL && ++this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run());
                    }, t1.prototype.run = function() {
                        for(var t1 = this.renderer.textureManager, e = t1._managedTextures, r = !1, n = 0; n < e.length; n++){
                            var i = e[n];
                            !i._glRenderTargets && this.count - i.touched > this.maxIdle && (t1.destroyTexture(i, !0), e[n] = null, r = !0);
                        }
                        if (r) {
                            for(var o = 0, s = 0; s < e.length; s++)null !== e[s] && (e[o++] = e[s]);
                            e.length = o;
                        }
                    }, t1.prototype.unload = function(t1) {
                        var e = this.renderer.textureManager;
                        t1._texture && t1._texture._glRenderTargets && e.destroyTexture(t1._texture, !0);
                        for(var r = t1.children.length - 1; r >= 0; r--)this.unload(t1.children[r]);
                    }, t1;
                }();
                r.default = a;
            },
            {
                "../../const": 46,
                "../../settings": 101
            }
        ],
        83: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = t1("pixi-gl-core"), o = t1("../../const"), s = t1("./utils/RenderTarget"), a = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(s), u = t1("../../utils"), h = function() {
                    function t1(e) {
                        n(this, t1), this.renderer = e, this.gl = e.gl, this._managedTextures = [];
                    }
                    return t1.prototype.bindTexture = function() {}, t1.prototype.getTexture = function() {}, t1.prototype.updateTexture = function(t1, e) {
                        var r = this.gl, n = !!t1._glRenderTargets;
                        if (!t1.hasLoaded) return null;
                        var s = this.renderer.boundTextures;
                        if (void 0 === e) {
                            e = 0;
                            for(var u = 0; u < s.length; ++u)if (s[u] === t1) {
                                e = u;
                                break;
                            }
                        }
                        s[e] = t1, r.activeTexture(r.TEXTURE0 + e);
                        var h = t1._glTextures[this.renderer.CONTEXT_UID];
                        if (h) n ? t1._glRenderTargets[this.renderer.CONTEXT_UID].resize(t1.width, t1.height) : h.upload(t1.source);
                        else {
                            if (n) {
                                var l = new a.default(this.gl, t1.width, t1.height, t1.scaleMode, t1.resolution);
                                l.resize(t1.width, t1.height), t1._glRenderTargets[this.renderer.CONTEXT_UID] = l, h = l.texture;
                            } else h = new i.GLTexture(this.gl, null, null, null, null), h.bind(e), h.premultiplyAlpha = !0, h.upload(t1.source);
                            t1._glTextures[this.renderer.CONTEXT_UID] = h, t1.on("update", this.updateTexture, this), t1.on("dispose", this.destroyTexture, this), this._managedTextures.push(t1), t1.isPowerOfTwo ? (t1.mipmap && h.enableMipmap(), t1.wrapMode === o.WRAP_MODES.CLAMP ? h.enableWrapClamp() : t1.wrapMode === o.WRAP_MODES.REPEAT ? h.enableWrapRepeat() : h.enableWrapMirrorRepeat()) : h.enableWrapClamp(), t1.scaleMode === o.SCALE_MODES.NEAREST ? h.enableNearestScaling() : h.enableLinearScaling();
                        }
                        return h;
                    }, t1.prototype.destroyTexture = function(t1, e) {
                        if (t1 = t1.baseTexture || t1, t1.hasLoaded) {
                            var r = this.renderer.CONTEXT_UID, n = t1._glTextures, i = t1._glRenderTargets;
                            if (n[r] && (this.renderer.unbindTexture(t1), n[r].destroy(), t1.off("update", this.updateTexture, this), t1.off("dispose", this.destroyTexture, this), delete n[r], !e)) {
                                var o = this._managedTextures.indexOf(t1);
                                -1 !== o && (0, u.removeItems)(this._managedTextures, o, 1);
                            }
                            i && i[r] && (i[r].destroy(), delete i[r]);
                        }
                    }, t1.prototype.removeAll = function() {
                        for(var t1 = 0; t1 < this._managedTextures.length; ++t1){
                            var e = this._managedTextures[t1];
                            e._glTextures[this.renderer.CONTEXT_UID] && delete e._glTextures[this.renderer.CONTEXT_UID];
                        }
                    }, t1.prototype.destroy = function() {
                        for(var t1 = 0; t1 < this._managedTextures.length; ++t1){
                            var e = this._managedTextures[t1];
                            this.destroyTexture(e, !0), e.off("update", this.updateTexture, this), e.off("dispose", this.destroyTexture, this);
                        }
                        this._managedTextures = null;
                    }, t1;
                }();
                r.default = h;
            },
            {
                "../../const": 46,
                "../../utils": 124,
                "./utils/RenderTarget": 96,
                "pixi-gl-core": 12
            }
        ],
        84: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function o(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function s(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var a = t1("../SystemRenderer"), u = n(a), h = t1("./managers/MaskManager"), l = n(h), c = t1("./managers/StencilManager"), d = n(c), f = t1("./managers/FilterManager"), p = n(f), v = t1("./utils/RenderTarget"), y = n(v), g = t1("./utils/ObjectRenderer"), m = n(g), _ = t1("./TextureManager"), b = n(_), x = t1("../../textures/BaseTexture"), T = n(x), w = t1("./TextureGarbageCollector"), E = n(w), S = t1("./WebGLState"), O = n(S), P = t1("./utils/mapWebGLDrawModesToPixi"), M = n(P), C = t1("./utils/validateContext"), R = n(C), A = t1("../../utils"), I = t1("pixi-gl-core"), D = n(I), L = t1("../../const"), N = 0, F = function(t1) {
                    function e(r, n, s) {
                        i(this, e);
                        var a = o(this, t1.call(this, "WebGL", r, n, s));
                        return a.legacy = a.options.legacy, a.legacy && (D.default.VertexArrayObject.FORCE_NATIVE = !0), a.type = L.RENDERER_TYPE.WEBGL, a.handleContextLost = a.handleContextLost.bind(a), a.handleContextRestored = a.handleContextRestored.bind(a), a.view.addEventListener("webglcontextlost", a.handleContextLost, !1), a.view.addEventListener("webglcontextrestored", a.handleContextRestored, !1), a._contextOptions = {
                            alpha: a.transparent,
                            antialias: a.options.antialias,
                            premultipliedAlpha: a.transparent && "notMultiplied" !== a.transparent,
                            stencil: !0,
                            preserveDrawingBuffer: a.options.preserveDrawingBuffer,
                            powerPreference: a.options.powerPreference
                        }, a._backgroundColorRgba[3] = a.transparent ? 0 : 1, a.maskManager = new l.default(a), a.stencilManager = new d.default(a), a.emptyRenderer = new m.default(a), a.currentRenderer = a.emptyRenderer, a.initPlugins(), a.options.context && (0, R.default)(a.options.context), a.gl = a.options.context || D.default.createContext(a.view, a._contextOptions), a.CONTEXT_UID = N++, a.state = new O.default(a.gl), a.renderingToScreen = !0, a.boundTextures = null, a._activeShader = null, a._activeVao = null, a._activeRenderTarget = null, a._initContext(), a.filterManager = new p.default(a), a.drawModes = (0, M.default)(a.gl), a._nextTextureLocation = 0, a.setBlendMode(0), a;
                    }
                    return s(e, t1), e.prototype._initContext = function() {
                        var t1 = this.gl;
                        t1.isContextLost() && t1.getExtension("WEBGL_lose_context") && t1.getExtension("WEBGL_lose_context").restoreContext();
                        var e = t1.getParameter(t1.MAX_TEXTURE_IMAGE_UNITS);
                        this._activeShader = null, this._activeVao = null, this.boundTextures = new Array(e), this.emptyTextures = new Array(e), this.textureManager = new b.default(this), this.textureGC = new E.default(this), this.state.resetToDefault(), this.rootRenderTarget = new y.default(t1, this.width, this.height, null, this.resolution, !0), this.rootRenderTarget.clearColor = this._backgroundColorRgba, this.bindRenderTarget(this.rootRenderTarget);
                        var r = new D.default.GLTexture.fromData(t1, null, 1, 1), n = {
                            _glTextures: {}
                        };
                        n._glTextures[this.CONTEXT_UID] = {};
                        for(var i = 0; i < e; i++){
                            var o = new T.default;
                            o._glTextures[this.CONTEXT_UID] = r, this.boundTextures[i] = n, this.emptyTextures[i] = o, this.bindTexture(null, i);
                        }
                        this.emit("context", t1), this.resize(this.screen.width, this.screen.height);
                    }, e.prototype.render = function(t1, e, r, n, i) {
                        if (this.renderingToScreen = !e, this.emit("prerender"), this.gl && !this.gl.isContextLost()) {
                            if (this._nextTextureLocation = 0, e || (this._lastObjectRendered = t1), !i) {
                                var o = t1.parent;
                                t1.parent = this._tempDisplayObjectParent, t1.updateTransform(), t1.parent = o;
                            }
                            this.bindRenderTexture(e, n), this.currentRenderer.start(), (void 0 !== r ? r : this.clearBeforeRender) && this._activeRenderTarget.clear(), t1.renderWebGL(this), this.currentRenderer.flush(), this.textureGC.update(), this.emit("postrender");
                        }
                    }, e.prototype.setObjectRenderer = function(t1) {
                        this.currentRenderer !== t1 && (this.currentRenderer.stop(), this.currentRenderer = t1, this.currentRenderer.start());
                    }, e.prototype.flush = function() {
                        this.setObjectRenderer(this.emptyRenderer);
                    }, e.prototype.resize = function(t1, e) {
                        u.default.prototype.resize.call(this, t1, e), this.rootRenderTarget.resize(t1, e), this._activeRenderTarget === this.rootRenderTarget && (this.rootRenderTarget.activate(), this._activeShader && (this._activeShader.uniforms.projectionMatrix = this.rootRenderTarget.projectionMatrix.toArray(!0)));
                    }, e.prototype.setBlendMode = function(t1) {
                        this.state.setBlendMode(t1);
                    }, e.prototype.clear = function(t1) {
                        this._activeRenderTarget.clear(t1);
                    }, e.prototype.setTransform = function(t1) {
                        this._activeRenderTarget.transform = t1;
                    }, e.prototype.clearRenderTexture = function(t1, e) {
                        var r = t1.baseTexture, n = r._glRenderTargets[this.CONTEXT_UID];
                        return n && n.clear(e), this;
                    }, e.prototype.bindRenderTexture = function(t1, e) {
                        var r = void 0;
                        if (t1) {
                            var n = t1.baseTexture;
                            n._glRenderTargets[this.CONTEXT_UID] || this.textureManager.updateTexture(n, 0), this.unbindTexture(n), r = n._glRenderTargets[this.CONTEXT_UID], r.setFrame(t1.frame);
                        } else r = this.rootRenderTarget;
                        return r.transform = e, this.bindRenderTarget(r), this;
                    }, e.prototype.bindRenderTarget = function(t1) {
                        return t1 !== this._activeRenderTarget && (this._activeRenderTarget = t1, t1.activate(), this._activeShader && (this._activeShader.uniforms.projectionMatrix = t1.projectionMatrix.toArray(!0)), this.stencilManager.setMaskStack(t1.stencilMaskStack)), this;
                    }, e.prototype.bindShader = function(t1, e) {
                        return this._activeShader !== t1 && (this._activeShader = t1, t1.bind(), !1 !== e && (t1.uniforms.projectionMatrix = this._activeRenderTarget.projectionMatrix.toArray(!0))), this;
                    }, e.prototype.bindTexture = function(t1, e, r) {
                        if (t1 = t1 || this.emptyTextures[e], t1 = t1.baseTexture || t1, t1.touched = this.textureGC.count, r) e = e || 0;
                        else {
                            for(var n = 0; n < this.boundTextures.length; n++)if (this.boundTextures[n] === t1) return n;
                            void 0 === e && (this._nextTextureLocation++, this._nextTextureLocation %= this.boundTextures.length, e = this.boundTextures.length - this._nextTextureLocation - 1);
                        }
                        var i = this.gl, o = t1._glTextures[this.CONTEXT_UID];
                        return o ? (this.boundTextures[e] = t1, i.activeTexture(i.TEXTURE0 + e), i.bindTexture(i.TEXTURE_2D, o.texture)) : this.textureManager.updateTexture(t1, e), e;
                    }, e.prototype.unbindTexture = function(t1) {
                        var e = this.gl;
                        t1 = t1.baseTexture || t1;
                        for(var r = 0; r < this.boundTextures.length; r++)this.boundTextures[r] === t1 && (this.boundTextures[r] = this.emptyTextures[r], e.activeTexture(e.TEXTURE0 + r), e.bindTexture(e.TEXTURE_2D, this.emptyTextures[r]._glTextures[this.CONTEXT_UID].texture));
                        return this;
                    }, e.prototype.createVao = function() {
                        return new D.default.VertexArrayObject(this.gl, this.state.attribState);
                    }, e.prototype.bindVao = function(t1) {
                        return this._activeVao === t1 ? this : (t1 ? t1.bind() : this._activeVao && this._activeVao.unbind(), this._activeVao = t1, this);
                    }, e.prototype.reset = function() {
                        return this.setObjectRenderer(this.emptyRenderer), this._activeShader = null, this._activeRenderTarget = this.rootRenderTarget, this.rootRenderTarget.activate(), this.state.resetToDefault(), this;
                    }, e.prototype.handleContextLost = function(t1) {
                        t1.preventDefault();
                    }, e.prototype.handleContextRestored = function() {
                        this.textureManager.removeAll(), this._initContext();
                    }, e.prototype.destroy = function(e) {
                        this.destroyPlugins(), this.view.removeEventListener("webglcontextlost", this.handleContextLost), this.view.removeEventListener("webglcontextrestored", this.handleContextRestored), this.textureManager.destroy(), t1.prototype.destroy.call(this, e), this.uid = 0, this.maskManager.destroy(), this.stencilManager.destroy(), this.filterManager.destroy(), this.maskManager = null, this.filterManager = null, this.textureManager = null, this.currentRenderer = null, this.handleContextLost = null, this.handleContextRestored = null, this._contextOptions = null, this.gl.useProgram(null), this.gl.getExtension("WEBGL_lose_context") && this.gl.getExtension("WEBGL_lose_context").loseContext(), this.gl = null;
                    }, e;
                }(u.default);
                r.default = F, A.pluginTarget.mixin(F);
            },
            {
                "../../const": 46,
                "../../textures/BaseTexture": 112,
                "../../utils": 124,
                "../SystemRenderer": 76,
                "./TextureGarbageCollector": 82,
                "./TextureManager": 83,
                "./WebGLState": 85,
                "./managers/FilterManager": 90,
                "./managers/MaskManager": 91,
                "./managers/StencilManager": 92,
                "./utils/ObjectRenderer": 94,
                "./utils/RenderTarget": 96,
                "./utils/mapWebGLDrawModesToPixi": 99,
                "./utils/validateContext": 100,
                "pixi-gl-core": 12
            }
        ],
        85: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = t1("./utils/mapWebGLBlendModesToPixi"), o = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(i), s = function() {
                    function t1(e) {
                        n(this, t1), this.activeState = new Uint8Array(16), this.defaultState = new Uint8Array(16), this.defaultState[0] = 1, this.stackIndex = 0, this.stack = [], this.gl = e, this.maxAttribs = e.getParameter(e.MAX_VERTEX_ATTRIBS), this.attribState = {
                            tempAttribState: new Array(this.maxAttribs),
                            attribState: new Array(this.maxAttribs)
                        }, this.blendModes = (0, o.default)(e), this.nativeVaoExtension = e.getExtension("OES_vertex_array_object") || e.getExtension("MOZ_OES_vertex_array_object") || e.getExtension("WEBKIT_OES_vertex_array_object");
                    }
                    return t1.prototype.push = function() {
                        var t1 = this.stack[this.stackIndex];
                        t1 || (t1 = this.stack[this.stackIndex] = new Uint8Array(16)), ++this.stackIndex;
                        for(var e = 0; e < this.activeState.length; e++)t1[e] = this.activeState[e];
                    }, t1.prototype.pop = function() {
                        var t1 = this.stack[--this.stackIndex];
                        this.setState(t1);
                    }, t1.prototype.setState = function(t1) {
                        this.setBlend(t1[0]), this.setDepthTest(t1[1]), this.setFrontFace(t1[2]), this.setCullFace(t1[3]), this.setBlendMode(t1[4]);
                    }, t1.prototype.setBlend = function(t1) {
                        t1 = t1 ? 1 : 0, this.activeState[0] !== t1 && (this.activeState[0] = t1, this.gl[t1 ? "enable" : "disable"](this.gl.BLEND));
                    }, t1.prototype.setBlendMode = function(t1) {
                        if (t1 !== this.activeState[4]) {
                            this.activeState[4] = t1;
                            var e = this.blendModes[t1];
                            2 === e.length ? this.gl.blendFunc(e[0], e[1]) : this.gl.blendFuncSeparate(e[0], e[1], e[2], e[3]);
                        }
                    }, t1.prototype.setDepthTest = function(t1) {
                        t1 = t1 ? 1 : 0, this.activeState[1] !== t1 && (this.activeState[1] = t1, this.gl[t1 ? "enable" : "disable"](this.gl.DEPTH_TEST));
                    }, t1.prototype.setCullFace = function(t1) {
                        t1 = t1 ? 1 : 0, this.activeState[3] !== t1 && (this.activeState[3] = t1, this.gl[t1 ? "enable" : "disable"](this.gl.CULL_FACE));
                    }, t1.prototype.setFrontFace = function(t1) {
                        t1 = t1 ? 1 : 0, this.activeState[2] !== t1 && (this.activeState[2] = t1, this.gl.frontFace(this.gl[t1 ? "CW" : "CCW"]));
                    }, t1.prototype.resetAttributes = function() {
                        for(var t1 = 0; t1 < this.attribState.tempAttribState.length; t1++)this.attribState.tempAttribState[t1] = 0;
                        for(var e = 0; e < this.attribState.attribState.length; e++)this.attribState.attribState[e] = 0;
                        for(var r = 1; r < this.maxAttribs; r++)this.gl.disableVertexAttribArray(r);
                    }, t1.prototype.resetToDefault = function() {
                        this.nativeVaoExtension && this.nativeVaoExtension.bindVertexArrayOES(null), this.resetAttributes();
                        for(var t1 = 0; t1 < this.activeState.length; ++t1)this.activeState[t1] = 32;
                        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.setState(this.defaultState);
                    }, t1;
                }();
                r.default = s;
            },
            {
                "./utils/mapWebGLBlendModesToPixi": 98
            }
        ],
        86: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var o = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), s = t1("./extractUniformsFromSrc"), a = n(s), u = t1("../../../utils"), h = t1("../../../const"), l = t1("../../../settings"), c = n(l), d = {}, f = function() {
                    function t1(e, r, n) {
                        i(this, t1), this.vertexSrc = e || t1.defaultVertexSrc, this.fragmentSrc = r || t1.defaultFragmentSrc, this._blendMode = h.BLEND_MODES.NORMAL, this.uniformData = n || (0, a.default)(this.vertexSrc, this.fragmentSrc, "projectionMatrix|uSampler"), this.uniforms = {};
                        for(var o in this.uniformData)this.uniforms[o] = this.uniformData[o].value;
                        this.glShaders = {}, d[this.vertexSrc + this.fragmentSrc] || (d[this.vertexSrc + this.fragmentSrc] = (0, u.uid)()), this.glShaderKey = d[this.vertexSrc + this.fragmentSrc], this.padding = 4, this.resolution = c.default.RESOLUTION, this.enabled = !0, this.autoFit = !0;
                    }
                    return t1.prototype.apply = function(t1, e, r, n, i) {
                        t1.applyFilter(this, e, r, n);
                    }, o(t1, [
                        {
                            key: "blendMode",
                            get: function() {
                                return this._blendMode;
                            },
                            set: function(t1) {
                                this._blendMode = t1;
                            }
                        }
                    ], [
                        {
                            key: "defaultVertexSrc",
                            get: function() {
                                return [
                                    "attribute vec2 aVertexPosition;",
                                    "attribute vec2 aTextureCoord;",
                                    "uniform mat3 projectionMatrix;",
                                    "uniform mat3 filterMatrix;",
                                    "varying vec2 vTextureCoord;",
                                    "varying vec2 vFilterCoord;",
                                    "void main(void){",
                                    "   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);",
                                    "   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;",
                                    "   vTextureCoord = aTextureCoord ;",
                                    "}"
                                ].join("\n");
                            }
                        },
                        {
                            key: "defaultFragmentSrc",
                            get: function() {
                                return [
                                    "varying vec2 vTextureCoord;",
                                    "varying vec2 vFilterCoord;",
                                    "uniform sampler2D uSampler;",
                                    "uniform sampler2D filterSampler;",
                                    "void main(void){",
                                    "   vec4 masky = texture2D(filterSampler, vFilterCoord);",
                                    "   vec4 sample = texture2D(uSampler, vTextureCoord);",
                                    "   vec4 color;",
                                    "   if(mod(vFilterCoord.x, 1.0) > 0.5)",
                                    "   {",
                                    "     color = vec4(1.0, 0.0, 0.0, 1.0);",
                                    "   }",
                                    "   else",
                                    "   {",
                                    "     color = vec4(0.0, 1.0, 0.0, 1.0);",
                                    "   }",
                                    "   gl_FragColor = mix(sample, masky, 0.5);",
                                    "   gl_FragColor *= sample.a;",
                                    "}"
                                ].join("\n");
                            }
                        }
                    ]), t1;
                }();
                r.default = f;
            },
            {
                "../../../const": 46,
                "../../../settings": 101,
                "../../../utils": 124,
                "./extractUniformsFromSrc": 87
            }
        ],
        87: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e, r) {
                    var n = i(t1), o = i(e);
                    return Object.assign(n, o);
                }
                function i(t1) {
                    for(var e = new RegExp("^(projectionMatrix|uSampler|filterArea|filterClamp)$"), r = {}, n = void 0, i = t1.replace(/\s+/g, " ").split(/\s*;\s*/), o = 0; o < i.length; o++){
                        var s = i[o].trim();
                        if (s.indexOf("uniform") > -1) {
                            var u = s.split(" "), h = u[1], l = u[2], c = 1;
                            l.indexOf("[") > -1 && (n = l.split(/\[|]/), l = n[0], c *= Number(n[1])), l.match(e) || (r[l] = {
                                value: a(h, c),
                                name: l,
                                type: h
                            });
                        }
                    }
                    return r;
                }
                r.__esModule = !0, r.default = n;
                var o = t1("pixi-gl-core"), s = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(o), a = s.default.shader.defaultValue;
            },
            {
                "pixi-gl-core": 12
            }
        ],
        88: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e, r) {
                    var n = t1.identity();
                    return n.translate(e.x / r.width, e.y / r.height), n.scale(r.width, r.height), n;
                }
                function i(t1, e, r) {
                    var n = t1.identity();
                    n.translate(e.x / r.width, e.y / r.height);
                    var i = r.width / e.width, o = r.height / e.height;
                    return n.scale(i, o), n;
                }
                function o(t1, e, r, n) {
                    var i = n.worldTransform.copy(s.Matrix.TEMP_MATRIX), o = n._texture.baseTexture, a = t1.identity(), u = r.height / r.width;
                    a.translate(e.x / r.width, e.y / r.height), a.scale(1, u);
                    var h = r.width / o.width, l = r.height / o.height;
                    return i.tx /= o.width * h, i.ty /= o.width * h, i.invert(), a.prepend(i), a.scale(1, 1 / u), a.scale(h, l), a.translate(n.anchor.x, n.anchor.y), a;
                }
                r.__esModule = !0, r.calculateScreenSpaceMatrix = n, r.calculateNormalizedScreenSpaceMatrix = i, r.calculateSpriteMatrix = o;
                var s = t1("../../../math");
            },
            {
                "../../../math": 70
            }
        ],
        89: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function i(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function o(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var s = t1("../Filter"), a = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(s), u = t1("../../../../math"), h = (t1("path"), function(t1) {
                    function e(r) {
                        n(this, e);
                        var o = new u.Matrix, s = i(this, t1.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n", "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform sampler2D mask;\n\nvoid main(void)\n{\n    // check clip! this will stop the mask bleeding out from the edges\n    vec2 text = abs( vMaskCoord - 0.5 );\n    text = step(0.5, text);\n\n    float clip = 1.0 - max(text.y, text.x);\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n\n    original *= (masky.r * masky.a * alpha * clip);\n\n    gl_FragColor = original;\n}\n"));
                        return r.renderable = !1, s.maskSprite = r, s.maskMatrix = o, s;
                    }
                    return o(e, t1), e.prototype.apply = function(t1, e, r) {
                        var n = this.maskSprite;
                        this.uniforms.mask = n._texture, this.uniforms.otherMatrix = t1.calculateSpriteMatrix(this.maskMatrix, n), this.uniforms.alpha = n.worldAlpha, t1.applyFilter(this, e, r);
                    }, e;
                }(a.default));
                r.default = h;
            },
            {
                "../../../../math": 70,
                "../Filter": 86,
                path: 23
            }
        ],
        90: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function o(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                function s(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var a = t1("./WebGLManager"), u = n(a), h = t1("../utils/RenderTarget"), l = n(h), c = t1("../utils/Quad"), d = n(c), f = t1("../../../math"), p = t1("../../../Shader"), v = n(p), y = t1("../filters/filterTransforms"), g = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(y), m = t1("bit-twiddle"), _ = n(m), b = function t1() {
                    s(this, t1), this.renderTarget = null, this.sourceFrame = new f.Rectangle, this.destinationFrame = new f.Rectangle, this.filters = [], this.target = null, this.resolution = 1;
                }, x = function(t1) {
                    function e(r) {
                        s(this, e);
                        var n = i(this, t1.call(this, r));
                        return n.gl = n.renderer.gl, n.quad = new d.default(n.gl, r.state.attribState), n.shaderCache = {}, n.pool = {}, n.filterData = null, n;
                    }
                    return o(e, t1), e.prototype.pushFilter = function(t1, e) {
                        var r = this.renderer, n = this.filterData;
                        if (!n) {
                            n = this.renderer._activeRenderTarget.filterStack;
                            var i = new b;
                            i.sourceFrame = i.destinationFrame = this.renderer._activeRenderTarget.size, i.renderTarget = r._activeRenderTarget, this.renderer._activeRenderTarget.filterData = n = {
                                index: 0,
                                stack: [
                                    i
                                ]
                            }, this.filterData = n;
                        }
                        var o = n.stack[++n.index];
                        o || (o = n.stack[n.index] = new b);
                        var s = e[0].resolution, a = 0 | e[0].padding, u = t1.filterArea || t1.getBounds(!0), h = o.sourceFrame, l = o.destinationFrame;
                        h.x = (u.x * s | 0) / s, h.y = (u.y * s | 0) / s, h.width = (u.width * s | 0) / s, h.height = (u.height * s | 0) / s, n.stack[0].renderTarget.transform || e[0].autoFit && h.fit(n.stack[0].destinationFrame), h.pad(a), l.width = h.width, l.height = h.height;
                        var c = this.getPotRenderTarget(r.gl, h.width, h.height, s);
                        o.target = t1, o.filters = e, o.resolution = s, o.renderTarget = c, c.setFrame(l, h), r.bindRenderTarget(c), c.clear();
                    }, e.prototype.popFilter = function() {
                        var t1 = this.filterData, e = t1.stack[t1.index - 1], r = t1.stack[t1.index];
                        this.quad.map(r.renderTarget.size, r.sourceFrame).upload();
                        var n = r.filters;
                        if (1 === n.length) n[0].apply(this, r.renderTarget, e.renderTarget, !1, r), this.freePotRenderTarget(r.renderTarget);
                        else {
                            var i = r.renderTarget, o = this.getPotRenderTarget(this.renderer.gl, r.sourceFrame.width, r.sourceFrame.height, r.resolution);
                            o.setFrame(r.destinationFrame, r.sourceFrame), o.clear();
                            var s = 0;
                            for(s = 0; s < n.length - 1; ++s){
                                n[s].apply(this, i, o, !0, r);
                                var a = i;
                                i = o, o = a;
                            }
                            n[s].apply(this, i, e.renderTarget, !1, r), this.freePotRenderTarget(i), this.freePotRenderTarget(o);
                        }
                        0 === --t1.index && (this.filterData = null);
                    }, e.prototype.applyFilter = function(t1, e, r, n) {
                        var i = this.renderer, o = i.gl, s = t1.glShaders[i.CONTEXT_UID];
                        s || (t1.glShaderKey ? (s = this.shaderCache[t1.glShaderKey]) || (s = new v.default(this.gl, t1.vertexSrc, t1.fragmentSrc), t1.glShaders[i.CONTEXT_UID] = this.shaderCache[t1.glShaderKey] = s) : s = t1.glShaders[i.CONTEXT_UID] = new v.default(this.gl, t1.vertexSrc, t1.fragmentSrc), i.bindVao(null), this.quad.initVao(s)), i.bindVao(this.quad.vao), i.bindRenderTarget(r), n && (o.disable(o.SCISSOR_TEST), i.clear(), o.enable(o.SCISSOR_TEST)), r === i.maskManager.scissorRenderTarget && i.maskManager.pushScissorMask(null, i.maskManager.scissorData), i.bindShader(s);
                        var a = this.renderer.emptyTextures[0];
                        this.renderer.boundTextures[0] = a, this.syncUniforms(s, t1), i.state.setBlendMode(t1.blendMode), o.activeTexture(o.TEXTURE0), o.bindTexture(o.TEXTURE_2D, e.texture.texture), this.quad.vao.draw(this.renderer.gl.TRIANGLES, 6, 0), o.bindTexture(o.TEXTURE_2D, a._glTextures[this.renderer.CONTEXT_UID].texture);
                    }, e.prototype.syncUniforms = function(t1, e) {
                        var r = e.uniformData, n = e.uniforms, i = 1, o = void 0;
                        if (t1.uniforms.filterArea) {
                            o = this.filterData.stack[this.filterData.index];
                            var s = t1.uniforms.filterArea;
                            s[0] = o.renderTarget.size.width, s[1] = o.renderTarget.size.height, s[2] = o.sourceFrame.x, s[3] = o.sourceFrame.y, t1.uniforms.filterArea = s;
                        }
                        if (t1.uniforms.filterClamp) {
                            o = o || this.filterData.stack[this.filterData.index];
                            var a = t1.uniforms.filterClamp;
                            a[0] = 0, a[1] = 0, a[2] = (o.sourceFrame.width - 1) / o.renderTarget.size.width, a[3] = (o.sourceFrame.height - 1) / o.renderTarget.size.height, t1.uniforms.filterClamp = a;
                        }
                        for(var u in r)if ("sampler2D" === r[u].type && 0 !== n[u]) {
                            if (n[u].baseTexture) t1.uniforms[u] = this.renderer.bindTexture(n[u].baseTexture, i);
                            else {
                                t1.uniforms[u] = i;
                                var h = this.renderer.gl;
                                this.renderer.boundTextures[i] = this.renderer.emptyTextures[i], h.activeTexture(h.TEXTURE0 + i), n[u].texture.bind();
                            }
                            i++;
                        } else if ("mat3" === r[u].type) void 0 !== n[u].a ? t1.uniforms[u] = n[u].toArray(!0) : t1.uniforms[u] = n[u];
                        else if ("vec2" === r[u].type) {
                            if (void 0 !== n[u].x) {
                                var l = t1.uniforms[u] || new Float32Array(2);
                                l[0] = n[u].x, l[1] = n[u].y, t1.uniforms[u] = l;
                            } else t1.uniforms[u] = n[u];
                        } else "float" === r[u].type ? t1.uniforms.data[u].value !== r[u] && (t1.uniforms[u] = n[u]) : t1.uniforms[u] = n[u];
                    }, e.prototype.getRenderTarget = function(t1, e) {
                        var r = this.filterData.stack[this.filterData.index], n = this.getPotRenderTarget(this.renderer.gl, r.sourceFrame.width, r.sourceFrame.height, e || r.resolution);
                        return n.setFrame(r.destinationFrame, r.sourceFrame), n;
                    }, e.prototype.returnRenderTarget = function(t1) {
                        this.freePotRenderTarget(t1);
                    }, e.prototype.calculateScreenSpaceMatrix = function(t1) {
                        var e = this.filterData.stack[this.filterData.index];
                        return g.calculateScreenSpaceMatrix(t1, e.sourceFrame, e.renderTarget.size);
                    }, e.prototype.calculateNormalizedScreenSpaceMatrix = function(t1) {
                        var e = this.filterData.stack[this.filterData.index];
                        return g.calculateNormalizedScreenSpaceMatrix(t1, e.sourceFrame, e.renderTarget.size, e.destinationFrame);
                    }, e.prototype.calculateSpriteMatrix = function(t1, e) {
                        var r = this.filterData.stack[this.filterData.index];
                        return g.calculateSpriteMatrix(t1, r.sourceFrame, r.renderTarget.size, e);
                    }, e.prototype.destroy = function() {
                        this.shaderCache = {}, this.emptyPool();
                    }, e.prototype.getPotRenderTarget = function(t1, e, r, n) {
                        e = _.default.nextPow2(e * n), r = _.default.nextPow2(r * n);
                        var i = (65535 & e) << 16 | 65535 & r;
                        this.pool[i] || (this.pool[i] = []);
                        var o = this.pool[i].pop();
                        if (!o) {
                            var s = this.renderer.boundTextures[0];
                            t1.activeTexture(t1.TEXTURE0), o = new l.default(t1, e, r, null, 1), t1.bindTexture(t1.TEXTURE_2D, s._glTextures[this.renderer.CONTEXT_UID].texture);
                        }
                        return o.resolution = n, o.defaultFrame.width = o.size.width = e / n, o.defaultFrame.height = o.size.height = r / n, o;
                    }, e.prototype.emptyPool = function() {
                        for(var t1 in this.pool){
                            var e = this.pool[t1];
                            if (e) for(var r = 0; r < e.length; r++)e[r].destroy(!0);
                        }
                        this.pool = {};
                    }, e.prototype.freePotRenderTarget = function(t1) {
                        var e = t1.size.width * t1.resolution, r = t1.size.height * t1.resolution, n = (65535 & e) << 16 | 65535 & r;
                        this.pool[n].push(t1);
                    }, e;
                }(u.default);
                r.default = x;
            },
            {
                "../../../Shader": 44,
                "../../../math": 70,
                "../filters/filterTransforms": 88,
                "../utils/Quad": 95,
                "../utils/RenderTarget": 96,
                "./WebGLManager": 93,
                "bit-twiddle": 1
            }
        ],
        91: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function o(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function s(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var a = t1("./WebGLManager"), u = n(a), h = t1("../filters/spriteMask/SpriteMaskFilter"), l = n(h), c = function(t1) {
                    function e(r) {
                        i(this, e);
                        var n = o(this, t1.call(this, r));
                        return n.scissor = !1, n.scissorData = null, n.scissorRenderTarget = null, n.enableScissor = !0, n.alphaMaskPool = [], n.alphaMaskIndex = 0, n;
                    }
                    return s(e, t1), e.prototype.pushMask = function(t1, e) {
                        if (e.texture) this.pushSpriteMask(t1, e);
                        else if (this.enableScissor && !this.scissor && this.renderer._activeRenderTarget.root && !this.renderer.stencilManager.stencilMaskStack.length && e.isFastRect()) {
                            var r = e.worldTransform, n = Math.atan2(r.b, r.a);
                            n = Math.round(n * (180 / Math.PI)), n % 90 ? this.pushStencilMask(e) : this.pushScissorMask(t1, e);
                        } else this.pushStencilMask(e);
                    }, e.prototype.popMask = function(t1, e) {
                        e.texture ? this.popSpriteMask(t1, e) : this.enableScissor && !this.renderer.stencilManager.stencilMaskStack.length ? this.popScissorMask(t1, e) : this.popStencilMask(t1, e);
                    }, e.prototype.pushSpriteMask = function(t1, e) {
                        var r = this.alphaMaskPool[this.alphaMaskIndex];
                        r || (r = this.alphaMaskPool[this.alphaMaskIndex] = [
                            new l.default(e)
                        ]), r[0].resolution = this.renderer.resolution, r[0].maskSprite = e, t1.filterArea = e.getBounds(!0), this.renderer.filterManager.pushFilter(t1, r), this.alphaMaskIndex++;
                    }, e.prototype.popSpriteMask = function() {
                        this.renderer.filterManager.popFilter(), this.alphaMaskIndex--;
                    }, e.prototype.pushStencilMask = function(t1) {
                        this.renderer.currentRenderer.stop(), this.renderer.stencilManager.pushStencil(t1);
                    }, e.prototype.popStencilMask = function() {
                        this.renderer.currentRenderer.stop(), this.renderer.stencilManager.popStencil();
                    }, e.prototype.pushScissorMask = function(t1, e) {
                        e.renderable = !0;
                        var r = this.renderer._activeRenderTarget, n = e.getBounds();
                        n.fit(r.size), e.renderable = !1, this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);
                        var i = this.renderer.resolution;
                        this.renderer.gl.scissor(n.x * i, (r.root ? r.size.height - n.y - n.height : n.y) * i, n.width * i, n.height * i), this.scissorRenderTarget = r, this.scissorData = e, this.scissor = !0;
                    }, e.prototype.popScissorMask = function() {
                        this.scissorRenderTarget = null, this.scissorData = null, this.scissor = !1;
                        var t1 = this.renderer.gl;
                        t1.disable(t1.SCISSOR_TEST);
                    }, e;
                }(u.default);
                r.default = c;
            },
            {
                "../filters/spriteMask/SpriteMaskFilter": 89,
                "./WebGLManager": 93
            }
        ],
        92: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function i(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function o(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var s = t1("./WebGLManager"), a = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(s), u = function(t1) {
                    function e(r) {
                        n(this, e);
                        var o = i(this, t1.call(this, r));
                        return o.stencilMaskStack = null, o;
                    }
                    return o(e, t1), e.prototype.setMaskStack = function(t1) {
                        this.stencilMaskStack = t1;
                        var e = this.renderer.gl;
                        0 === t1.length ? e.disable(e.STENCIL_TEST) : e.enable(e.STENCIL_TEST);
                    }, e.prototype.pushStencil = function(t1) {
                        this.renderer.setObjectRenderer(this.renderer.plugins.graphics), this.renderer._activeRenderTarget.attachStencilBuffer();
                        var e = this.renderer.gl, r = this.stencilMaskStack.length;
                        0 === r && e.enable(e.STENCIL_TEST), this.stencilMaskStack.push(t1), e.colorMask(!1, !1, !1, !1), e.stencilFunc(e.EQUAL, r, this._getBitwiseMask()), e.stencilOp(e.KEEP, e.KEEP, e.INCR), this.renderer.plugins.graphics.render(t1), this._useCurrent();
                    }, e.prototype.popStencil = function() {
                        this.renderer.setObjectRenderer(this.renderer.plugins.graphics);
                        var t1 = this.renderer.gl, e = this.stencilMaskStack.pop();
                        0 === this.stencilMaskStack.length ? (t1.disable(t1.STENCIL_TEST), t1.clear(t1.STENCIL_BUFFER_BIT), t1.clearStencil(0)) : (t1.colorMask(!1, !1, !1, !1), t1.stencilOp(t1.KEEP, t1.KEEP, t1.DECR), this.renderer.plugins.graphics.render(e), this._useCurrent());
                    }, e.prototype._useCurrent = function() {
                        var t1 = this.renderer.gl;
                        t1.colorMask(!0, !0, !0, !0), t1.stencilFunc(t1.EQUAL, this.stencilMaskStack.length, this._getBitwiseMask()), t1.stencilOp(t1.KEEP, t1.KEEP, t1.KEEP);
                    }, e.prototype._getBitwiseMask = function() {
                        return (1 << this.stencilMaskStack.length) - 1;
                    }, e.prototype.destroy = function() {
                        a.default.prototype.destroy.call(this), this.stencilMaskStack.stencilStack = null;
                    }, e;
                }(a.default);
                r.default = u;
            },
            {
                "./WebGLManager": 93
            }
        ],
        93: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = function() {
                    function t1(e) {
                        n(this, t1), this.renderer = e, this.renderer.on("context", this.onContextChange, this);
                    }
                    return t1.prototype.onContextChange = function() {}, t1.prototype.destroy = function() {
                        this.renderer.off("context", this.onContextChange, this), this.renderer = null;
                    }, t1;
                }();
                r.default = i;
            },
            {}
        ],
        94: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function i(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function o(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var s = t1("../managers/WebGLManager"), a = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(s), u = function(t1) {
                    function e() {
                        return n(this, e), i(this, t1.apply(this, arguments));
                    }
                    return o(e, t1), e.prototype.start = function() {}, e.prototype.stop = function() {
                        this.flush();
                    }, e.prototype.flush = function() {}, e.prototype.render = function(t1) {}, e;
                }(a.default);
                r.default = u;
            },
            {
                "../managers/WebGLManager": 93
            }
        ],
        95: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var o = t1("pixi-gl-core"), s = n(o), a = t1("../../../utils/createIndicesForQuads"), u = n(a), h = function() {
                    function t1(e, r) {
                        i(this, t1), this.gl = e, this.vertices = new Float32Array([
                            -1,
                            -1,
                            1,
                            -1,
                            1,
                            1,
                            -1,
                            1
                        ]), this.uvs = new Float32Array([
                            0,
                            0,
                            1,
                            0,
                            1,
                            1,
                            0,
                            1
                        ]), this.interleaved = new Float32Array(16);
                        for(var n = 0; n < 4; n++)this.interleaved[4 * n] = this.vertices[2 * n], this.interleaved[4 * n + 1] = this.vertices[2 * n + 1], this.interleaved[4 * n + 2] = this.uvs[2 * n], this.interleaved[4 * n + 3] = this.uvs[2 * n + 1];
                        this.indices = (0, u.default)(1), this.vertexBuffer = s.default.GLBuffer.createVertexBuffer(e, this.interleaved, e.STATIC_DRAW), this.indexBuffer = s.default.GLBuffer.createIndexBuffer(e, this.indices, e.STATIC_DRAW), this.vao = new s.default.VertexArrayObject(e, r);
                    }
                    return t1.prototype.initVao = function(t1) {
                        this.vao.clear().addIndex(this.indexBuffer).addAttribute(this.vertexBuffer, t1.attributes.aVertexPosition, this.gl.FLOAT, !1, 16, 0).addAttribute(this.vertexBuffer, t1.attributes.aTextureCoord, this.gl.FLOAT, !1, 16, 8);
                    }, t1.prototype.map = function(t1, e) {
                        var r = 0, n = 0;
                        return this.uvs[0] = r, this.uvs[1] = n, this.uvs[2] = r + e.width / t1.width, this.uvs[3] = n, this.uvs[4] = r + e.width / t1.width, this.uvs[5] = n + e.height / t1.height, this.uvs[6] = r, this.uvs[7] = n + e.height / t1.height, r = e.x, n = e.y, this.vertices[0] = r, this.vertices[1] = n, this.vertices[2] = r + e.width, this.vertices[3] = n, this.vertices[4] = r + e.width, this.vertices[5] = n + e.height, this.vertices[6] = r, this.vertices[7] = n + e.height, this;
                    }, t1.prototype.upload = function() {
                        for(var t1 = 0; t1 < 4; t1++)this.interleaved[4 * t1] = this.vertices[2 * t1], this.interleaved[4 * t1 + 1] = this.vertices[2 * t1 + 1], this.interleaved[4 * t1 + 2] = this.uvs[2 * t1], this.interleaved[4 * t1 + 3] = this.uvs[2 * t1 + 1];
                        return this.vertexBuffer.upload(this.interleaved), this;
                    }, t1.prototype.destroy = function() {
                        var t1 = this.gl;
                        t1.deleteBuffer(this.vertexBuffer), t1.deleteBuffer(this.indexBuffer);
                    }, t1;
                }();
                r.default = h;
            },
            {
                "../../../utils/createIndicesForQuads": 122,
                "pixi-gl-core": 12
            }
        ],
        96: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = t1("../../../math"), o = t1("../../../const"), s = t1("../../../settings"), a = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(s), u = t1("pixi-gl-core"), h = function() {
                    function t1(e, r, s, h, l, c) {
                        n(this, t1), this.gl = e, this.frameBuffer = null, this.texture = null, this.clearColor = [
                            0,
                            0,
                            0,
                            0
                        ], this.size = new i.Rectangle(0, 0, 1, 1), this.resolution = l || a.default.RESOLUTION, this.projectionMatrix = new i.Matrix, this.transform = null, this.frame = null, this.defaultFrame = new i.Rectangle, this.destinationFrame = null, this.sourceFrame = null, this.stencilBuffer = null, this.stencilMaskStack = [], this.filterData = null, this.scaleMode = void 0 !== h ? h : a.default.SCALE_MODE, this.root = c, this.root ? (this.frameBuffer = new u.GLFramebuffer(e, 100, 100), this.frameBuffer.framebuffer = null) : (this.frameBuffer = u.GLFramebuffer.createRGBA(e, 100, 100), this.scaleMode === o.SCALE_MODES.NEAREST ? this.frameBuffer.texture.enableNearestScaling() : this.frameBuffer.texture.enableLinearScaling(), this.texture = this.frameBuffer.texture), this.setFrame(), this.resize(r, s);
                    }
                    return t1.prototype.clear = function(t1) {
                        var e = t1 || this.clearColor;
                        this.frameBuffer.clear(e[0], e[1], e[2], e[3]);
                    }, t1.prototype.attachStencilBuffer = function() {
                        this.root || this.frameBuffer.enableStencil();
                    }, t1.prototype.setFrame = function(t1, e) {
                        this.destinationFrame = t1 || this.destinationFrame || this.defaultFrame, this.sourceFrame = e || this.sourceFrame || this.destinationFrame;
                    }, t1.prototype.activate = function() {
                        var t1 = this.gl;
                        this.frameBuffer.bind(), this.calculateProjection(this.destinationFrame, this.sourceFrame), this.transform && this.projectionMatrix.append(this.transform), this.destinationFrame !== this.sourceFrame ? (t1.enable(t1.SCISSOR_TEST), t1.scissor(0 | this.destinationFrame.x, 0 | this.destinationFrame.y, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0)) : t1.disable(t1.SCISSOR_TEST), t1.viewport(0 | this.destinationFrame.x, 0 | this.destinationFrame.y, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0);
                    }, t1.prototype.calculateProjection = function(t1, e) {
                        var r = this.projectionMatrix;
                        e = e || t1, r.identity(), this.root ? (r.a = 1 / t1.width * 2, r.d = -1 / t1.height * 2, r.tx = -1 - e.x * r.a, r.ty = 1 - e.y * r.d) : (r.a = 1 / t1.width * 2, r.d = 1 / t1.height * 2, r.tx = -1 - e.x * r.a, r.ty = -1 - e.y * r.d);
                    }, t1.prototype.resize = function(t1, e) {
                        if (t1 |= 0, e |= 0, this.size.width !== t1 || this.size.height !== e) {
                            this.size.width = t1, this.size.height = e, this.defaultFrame.width = t1, this.defaultFrame.height = e, this.frameBuffer.resize(t1 * this.resolution, e * this.resolution);
                            var r = this.frame || this.size;
                            this.calculateProjection(r);
                        }
                    }, t1.prototype.destroy = function() {
                        this.frameBuffer.destroy(), this.frameBuffer = null, this.texture = null;
                    }, t1;
                }();
                r.default = h;
            },
            {
                "../../../const": 46,
                "../../../math": 70,
                "../../../settings": 101,
                "pixi-gl-core": 12
            }
        ],
        97: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    var r = !e;
                    if (r) {
                        var n = document.createElement("canvas");
                        n.width = 1, n.height = 1, e = s.default.createContext(n);
                    }
                    for(var o = e.createShader(e.FRAGMENT_SHADER);;){
                        var u = a.replace(/%forloop%/gi, i(t1));
                        if (e.shaderSource(o, u), e.compileShader(o), e.getShaderParameter(o, e.COMPILE_STATUS)) break;
                        t1 = t1 / 2 | 0;
                    }
                    return r && e.getExtension("WEBGL_lose_context") && e.getExtension("WEBGL_lose_context").loseContext(), t1;
                }
                function i(t1) {
                    for(var e = "", r = 0; r < t1; ++r)r > 0 && (e += "\nelse "), r < t1 - 1 && (e += "if(test == " + r + ".0){}");
                    return e;
                }
                r.__esModule = !0, r.default = n;
                var o = t1("pixi-gl-core"), s = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(o), a = [
                    "precision mediump float;",
                    "void main(void){",
                    "float test = 0.1;",
                    "%forloop%",
                    "gl_FragColor = vec4(0.0);",
                    "}"
                ].join("\n");
            },
            {
                "pixi-gl-core": 12
            }
        ],
        98: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    return e[i.BLEND_MODES.NORMAL] = [
                        t1.ONE,
                        t1.ONE_MINUS_SRC_ALPHA
                    ], e[i.BLEND_MODES.ADD] = [
                        t1.ONE,
                        t1.DST_ALPHA
                    ], e[i.BLEND_MODES.MULTIPLY] = [
                        t1.DST_COLOR,
                        t1.ONE_MINUS_SRC_ALPHA
                    ], e[i.BLEND_MODES.SCREEN] = [
                        t1.ONE,
                        t1.ONE_MINUS_SRC_COLOR
                    ], e[i.BLEND_MODES.OVERLAY] = [
                        t1.ONE,
                        t1.ONE_MINUS_SRC_ALPHA
                    ], e[i.BLEND_MODES.DARKEN] = [
                        t1.ONE,
                        t1.ONE_MINUS_SRC_ALPHA
                    ], e[i.BLEND_MODES.LIGHTEN] = [
                        t1.ONE,
                        t1.ONE_MINUS_SRC_ALPHA
                    ], e[i.BLEND_MODES.COLOR_DODGE] = [
                        t1.ONE,
                        t1.ONE_MINUS_SRC_ALPHA
                    ], e[i.BLEND_MODES.COLOR_BURN] = [
                        t1.ONE,
                        t1.ONE_MINUS_SRC_ALPHA
                    ], e[i.BLEND_MODES.HARD_LIGHT] = [
                        t1.ONE,
                        t1.ONE_MINUS_SRC_ALPHA
                    ], e[i.BLEND_MODES.SOFT_LIGHT] = [
                        t1.ONE,
                        t1.ONE_MINUS_SRC_ALPHA
                    ], e[i.BLEND_MODES.DIFFERENCE] = [
                        t1.ONE,
                        t1.ONE_MINUS_SRC_ALPHA
                    ], e[i.BLEND_MODES.EXCLUSION] = [
                        t1.ONE,
                        t1.ONE_MINUS_SRC_ALPHA
                    ], e[i.BLEND_MODES.HUE] = [
                        t1.ONE,
                        t1.ONE_MINUS_SRC_ALPHA
                    ], e[i.BLEND_MODES.SATURATION] = [
                        t1.ONE,
                        t1.ONE_MINUS_SRC_ALPHA
                    ], e[i.BLEND_MODES.COLOR] = [
                        t1.ONE,
                        t1.ONE_MINUS_SRC_ALPHA
                    ], e[i.BLEND_MODES.LUMINOSITY] = [
                        t1.ONE,
                        t1.ONE_MINUS_SRC_ALPHA
                    ], e[i.BLEND_MODES.NORMAL_NPM] = [
                        t1.SRC_ALPHA,
                        t1.ONE_MINUS_SRC_ALPHA,
                        t1.ONE,
                        t1.ONE_MINUS_SRC_ALPHA
                    ], e[i.BLEND_MODES.ADD_NPM] = [
                        t1.SRC_ALPHA,
                        t1.DST_ALPHA,
                        t1.ONE,
                        t1.DST_ALPHA
                    ], e[i.BLEND_MODES.SCREEN_NPM] = [
                        t1.SRC_ALPHA,
                        t1.ONE_MINUS_SRC_COLOR,
                        t1.ONE,
                        t1.ONE_MINUS_SRC_COLOR
                    ], e;
                }
                r.__esModule = !0, r.default = n;
                var i = t1("../../../const");
            },
            {
                "../../../const": 46
            }
        ],
        99: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return e[i.DRAW_MODES.POINTS] = t1.POINTS, e[i.DRAW_MODES.LINES] = t1.LINES, e[i.DRAW_MODES.LINE_LOOP] = t1.LINE_LOOP, e[i.DRAW_MODES.LINE_STRIP] = t1.LINE_STRIP, e[i.DRAW_MODES.TRIANGLES] = t1.TRIANGLES, e[i.DRAW_MODES.TRIANGLE_STRIP] = t1.TRIANGLE_STRIP, e[i.DRAW_MODES.TRIANGLE_FAN] = t1.TRIANGLE_FAN, e;
                }
                r.__esModule = !0, r.default = n;
                var i = t1("../../../const");
            },
            {
                "../../../const": 46
            }
        ],
        100: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    t1.getContextAttributes().stencil || console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");
                }
                r.__esModule = !0, r.default = n;
            },
            {}
        ],
        101: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                r.__esModule = !0;
                var i = t1("./utils/maxRecommendedTextures"), o = n(i), s = t1("./utils/canUploadSameBuffer"), a = n(s);
                r.default = {
                    TARGET_FPMS: .06,
                    MIPMAP_TEXTURES: !0,
                    RESOLUTION: 1,
                    FILTER_RESOLUTION: 1,
                    SPRITE_MAX_TEXTURES: (0, o.default)(32),
                    SPRITE_BATCH_SIZE: 4096,
                    RETINA_PREFIX: /@([0-9\.]+)x/,
                    RENDER_OPTIONS: {
                        view: null,
                        antialias: !1,
                        forceFXAA: !1,
                        autoResize: !1,
                        transparent: !1,
                        backgroundColor: 0,
                        clearBeforeRender: !0,
                        preserveDrawingBuffer: !1,
                        roundPixels: !1,
                        width: 800,
                        height: 600,
                        legacy: !1
                    },
                    TRANSFORM_MODE: 0,
                    GC_MODE: 0,
                    GC_MAX_IDLE: 3600,
                    GC_MAX_CHECK_COUNT: 600,
                    WRAP_MODE: 0,
                    SCALE_MODE: 0,
                    PRECISION_VERTEX: "highp",
                    PRECISION_FRAGMENT: "mediump",
                    CAN_UPLOAD_SAME_BUFFER: (0, a.default)()
                };
            },
            {
                "./utils/canUploadSameBuffer": 121,
                "./utils/maxRecommendedTextures": 126
            }
        ],
        102: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function o(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function s(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var a = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), u = t1("../math"), h = t1("../utils"), l = t1("../const"), c = t1("../textures/Texture"), d = n(c), f = t1("../display/Container"), p = n(f), v = new u.Point, y = function(t1) {
                    function e(r) {
                        i(this, e);
                        var n = o(this, t1.call(this));
                        return n._anchor = new u.ObservablePoint(n._onAnchorUpdate, n), n._texture = null, n._width = 0, n._height = 0, n._tint = null, n._tintRGB = null, n.tint = 16777215, n.blendMode = l.BLEND_MODES.NORMAL, n.shader = null, n.cachedTint = 16777215, n.texture = r || d.default.EMPTY, n.vertexData = new Float32Array(8), n.vertexTrimmedData = null, n._transformID = -1, n._textureID = -1, n._transformTrimmedID = -1, n._textureTrimmedID = -1, n.pluginName = "sprite", n;
                    }
                    return s(e, t1), e.prototype._onTextureUpdate = function() {
                        this._textureID = -1, this._textureTrimmedID = -1, this._width && (this.scale.x = (0, h.sign)(this.scale.x) * this._width / this._texture.orig.width), this._height && (this.scale.y = (0, h.sign)(this.scale.y) * this._height / this._texture.orig.height);
                    }, e.prototype._onAnchorUpdate = function() {
                        this._transformID = -1, this._transformTrimmedID = -1;
                    }, e.prototype.calculateVertices = function() {
                        if (this._transformID !== this.transform._worldID || this._textureID !== this._texture._updateID) {
                            this._transformID = this.transform._worldID, this._textureID = this._texture._updateID;
                            var t1 = this._texture, e = this.transform.worldTransform, r = e.a, n = e.b, i = e.c, o = e.d, s = e.tx, a = e.ty, u = this.vertexData, h = t1.trim, l = t1.orig, c = this._anchor, d = 0, f = 0, p = 0, v = 0;
                            h ? (f = h.x - c._x * l.width, d = f + h.width, v = h.y - c._y * l.height, p = v + h.height) : (f = -c._x * l.width, d = f + l.width, v = -c._y * l.height, p = v + l.height), u[0] = r * f + i * v + s, u[1] = o * v + n * f + a, u[2] = r * d + i * v + s, u[3] = o * v + n * d + a, u[4] = r * d + i * p + s, u[5] = o * p + n * d + a, u[6] = r * f + i * p + s, u[7] = o * p + n * f + a;
                        }
                    }, e.prototype.calculateTrimmedVertices = function() {
                        if (this.vertexTrimmedData) {
                            if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) return;
                        } else this.vertexTrimmedData = new Float32Array(8);
                        this._transformTrimmedID = this.transform._worldID, this._textureTrimmedID = this._texture._updateID;
                        var t1 = this._texture, e = this.vertexTrimmedData, r = t1.orig, n = this._anchor, i = this.transform.worldTransform, o = i.a, s = i.b, a = i.c, u = i.d, h = i.tx, l = i.ty, c = -n._x * r.width, d = c + r.width, f = -n._y * r.height, p = f + r.height;
                        e[0] = o * c + a * f + h, e[1] = u * f + s * c + l, e[2] = o * d + a * f + h, e[3] = u * f + s * d + l, e[4] = o * d + a * p + h, e[5] = u * p + s * d + l, e[6] = o * c + a * p + h, e[7] = u * p + s * c + l;
                    }, e.prototype._renderWebGL = function(t1) {
                        this.calculateVertices(), t1.setObjectRenderer(t1.plugins[this.pluginName]), t1.plugins[this.pluginName].render(this);
                    }, e.prototype._renderCanvas = function(t1) {
                        t1.plugins[this.pluginName].render(this);
                    }, e.prototype._calculateBounds = function() {
                        var t1 = this._texture.trim, e = this._texture.orig;
                        !t1 || t1.width === e.width && t1.height === e.height ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData));
                    }, e.prototype.getLocalBounds = function(e) {
                        return 0 === this.children.length ? (this._bounds.minX = this._texture.orig.width * -this._anchor._x, this._bounds.minY = this._texture.orig.height * -this._anchor._y, this._bounds.maxX = this._texture.orig.width * (1 - this._anchor._x), this._bounds.maxY = this._texture.orig.height * (1 - this._anchor._y), e || (this._localBoundsRect || (this._localBoundsRect = new u.Rectangle), e = this._localBoundsRect), this._bounds.getRectangle(e)) : t1.prototype.getLocalBounds.call(this, e);
                    }, e.prototype.containsPoint = function(t1) {
                        this.worldTransform.applyInverse(t1, v);
                        var e = this._texture.orig.width, r = this._texture.orig.height, n = -e * this.anchor.x, i = 0;
                        return v.x >= n && v.x < n + e && (i = -r * this.anchor.y, v.y >= i && v.y < i + r);
                    }, e.prototype.destroy = function(e) {
                        if (t1.prototype.destroy.call(this, e), this._anchor = null, "boolean" == typeof e ? e : e && e.texture) {
                            var r = "boolean" == typeof e ? e : e && e.baseTexture;
                            this._texture.destroy(!!r);
                        }
                        this._texture = null, this.shader = null;
                    }, e.from = function(t1) {
                        return new e(d.default.from(t1));
                    }, e.fromFrame = function(t1) {
                        var r = h.TextureCache[t1];
                        if (!r) throw new Error('The frameId "' + t1 + '" does not exist in the texture cache');
                        return new e(r);
                    }, e.fromImage = function(t1, r, n) {
                        return new e(d.default.fromImage(t1, r, n));
                    }, a(e, [
                        {
                            key: "width",
                            get: function() {
                                return Math.abs(this.scale.x) * this._texture.orig.width;
                            },
                            set: function(t1) {
                                var e = (0, h.sign)(this.scale.x) || 1;
                                this.scale.x = e * t1 / this._texture.orig.width, this._width = t1;
                            }
                        },
                        {
                            key: "height",
                            get: function() {
                                return Math.abs(this.scale.y) * this._texture.orig.height;
                            },
                            set: function(t1) {
                                var e = (0, h.sign)(this.scale.y) || 1;
                                this.scale.y = e * t1 / this._texture.orig.height, this._height = t1;
                            }
                        },
                        {
                            key: "anchor",
                            get: function() {
                                return this._anchor;
                            },
                            set: function(t1) {
                                this._anchor.copy(t1);
                            }
                        },
                        {
                            key: "tint",
                            get: function() {
                                return this._tint;
                            },
                            set: function(t1) {
                                this._tint = t1, this._tintRGB = (t1 >> 16) + (65280 & t1) + ((255 & t1) << 16);
                            }
                        },
                        {
                            key: "texture",
                            get: function() {
                                return this._texture;
                            },
                            set: function(t1) {
                                this._texture !== t1 && (this._texture = t1, this.cachedTint = 16777215, this._textureID = -1, this._textureTrimmedID = -1, t1 && (t1.baseTexture.hasLoaded ? this._onTextureUpdate() : t1.once("update", this._onTextureUpdate, this)));
                            }
                        }
                    ]), e;
                }(p.default);
                r.default = y;
            },
            {
                "../const": 46,
                "../display/Container": 48,
                "../math": 70,
                "../textures/Texture": 115,
                "../utils": 124
            }
        ],
        103: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var o = t1("../../renderers/canvas/CanvasRenderer"), s = n(o), a = t1("../../const"), u = t1("../../math"), h = t1("./CanvasTinter"), l = n(h), c = new u.Matrix, d = function() {
                    function t1(e) {
                        i(this, t1), this.renderer = e;
                    }
                    return t1.prototype.render = function(t1) {
                        var e = t1._texture, r = this.renderer, n = e._frame.width, i = e._frame.height, o = t1.transform.worldTransform, s = 0, h = 0;
                        if (!(e.orig.width <= 0 || e.orig.height <= 0) && e.baseTexture.source && (r.setBlendMode(t1.blendMode), e.valid)) {
                            r.context.globalAlpha = t1.worldAlpha;
                            var d = e.baseTexture.scaleMode === a.SCALE_MODES.LINEAR;
                            r.smoothProperty && r.context[r.smoothProperty] !== d && (r.context[r.smoothProperty] = d), e.trim ? (s = e.trim.width / 2 + e.trim.x - t1.anchor.x * e.orig.width, h = e.trim.height / 2 + e.trim.y - t1.anchor.y * e.orig.height) : (s = (.5 - t1.anchor.x) * e.orig.width, h = (.5 - t1.anchor.y) * e.orig.height), e.rotate && (o.copy(c), o = c, u.GroupD8.matrixAppendRotationInv(o, e.rotate, s, h), s = 0, h = 0), s -= n / 2, h -= i / 2, r.roundPixels ? (r.context.setTransform(o.a, o.b, o.c, o.d, o.tx * r.resolution | 0, o.ty * r.resolution | 0), s |= 0, h |= 0) : r.context.setTransform(o.a, o.b, o.c, o.d, o.tx * r.resolution, o.ty * r.resolution);
                            var f = e.baseTexture.resolution;
                            16777215 !== t1.tint ? (t1.cachedTint === t1.tint && t1.tintedTexture.tintId === t1._texture._updateID || (t1.cachedTint = t1.tint, t1.tintedTexture = l.default.getTintedTexture(t1, t1.tint)), r.context.drawImage(t1.tintedTexture, 0, 0, n * f, i * f, s * r.resolution, h * r.resolution, n * r.resolution, i * r.resolution)) : r.context.drawImage(e.baseTexture.source, e._frame.x * f, e._frame.y * f, n * f, i * f, s * r.resolution, h * r.resolution, n * r.resolution, i * r.resolution);
                        }
                    }, t1.prototype.destroy = function() {
                        this.renderer = null;
                    }, t1;
                }();
                r.default = d, s.default.registerPlugin("sprite", d);
            },
            {
                "../../const": 46,
                "../../math": 70,
                "../../renderers/canvas/CanvasRenderer": 77,
                "./CanvasTinter": 104
            }
        ],
        104: [
            function(t1, e, r) {
                "use strict";
                r.__esModule = !0;
                var n = t1("../../utils"), i = t1("../../renderers/canvas/utils/canUseNewCanvasBlendModes"), o = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(i), s = {
                    getTintedTexture: function(t1, e) {
                        var r = t1._texture;
                        e = s.roundColor(e);
                        var n = "#" + ("00000" + (0 | e).toString(16)).substr(-6);
                        r.tintCache = r.tintCache || {};
                        var i = r.tintCache[n], o = void 0;
                        if (i) {
                            if (i.tintId === r._updateID) return r.tintCache[n];
                            o = r.tintCache[n];
                        } else o = s.canvas || document.createElement("canvas");
                        if (s.tintMethod(r, e, o), o.tintId = r._updateID, s.convertTintToImage) {
                            var a = new Image;
                            a.src = o.toDataURL(), r.tintCache[n] = a;
                        } else r.tintCache[n] = o, s.canvas = null;
                        return o;
                    },
                    tintWithMultiply: function(t1, e, r) {
                        var n = r.getContext("2d"), i = t1._frame.clone(), o = t1.baseTexture.resolution;
                        i.x *= o, i.y *= o, i.width *= o, i.height *= o, r.width = Math.ceil(i.width), r.height = Math.ceil(i.height), n.save(), n.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6), n.fillRect(0, 0, i.width, i.height), n.globalCompositeOperation = "multiply", n.drawImage(t1.baseTexture.source, i.x, i.y, i.width, i.height, 0, 0, i.width, i.height), n.globalCompositeOperation = "destination-atop", n.drawImage(t1.baseTexture.source, i.x, i.y, i.width, i.height, 0, 0, i.width, i.height), n.restore();
                    },
                    tintWithOverlay: function(t1, e, r) {
                        var n = r.getContext("2d"), i = t1._frame.clone(), o = t1.baseTexture.resolution;
                        i.x *= o, i.y *= o, i.width *= o, i.height *= o, r.width = Math.ceil(i.width), r.height = Math.ceil(i.height), n.save(), n.globalCompositeOperation = "copy", n.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6), n.fillRect(0, 0, i.width, i.height), n.globalCompositeOperation = "destination-atop", n.drawImage(t1.baseTexture.source, i.x, i.y, i.width, i.height, 0, 0, i.width, i.height), n.restore();
                    },
                    tintWithPerPixel: function(t1, e, r) {
                        var i = r.getContext("2d"), o = t1._frame.clone(), s = t1.baseTexture.resolution;
                        o.x *= s, o.y *= s, o.width *= s, o.height *= s, r.width = Math.ceil(o.width), r.height = Math.ceil(o.height), i.save(), i.globalCompositeOperation = "copy", i.drawImage(t1.baseTexture.source, o.x, o.y, o.width, o.height, 0, 0, o.width, o.height), i.restore();
                        for(var a = (0, n.hex2rgb)(e), u = a[0], h = a[1], l = a[2], c = i.getImageData(0, 0, o.width, o.height), d = c.data, f = 0; f < d.length; f += 4)d[f + 0] *= u, d[f + 1] *= h, d[f + 2] *= l;
                        i.putImageData(c, 0, 0);
                    },
                    roundColor: function(t1) {
                        var e = s.cacheStepsPerColorChannel, r = (0, n.hex2rgb)(t1);
                        return r[0] = Math.min(255, r[0] / e * e), r[1] = Math.min(255, r[1] / e * e), r[2] = Math.min(255, r[2] / e * e), (0, n.rgb2hex)(r);
                    },
                    cacheStepsPerColorChannel: 8,
                    convertTintToImage: !1,
                    canUseMultiply: (0, o.default)(),
                    tintMethod: 0
                };
                s.tintMethod = s.canUseMultiply ? s.tintWithMultiply : s.tintWithPerPixel, r.default = s;
            },
            {
                "../../renderers/canvas/utils/canUseNewCanvasBlendModes": 80,
                "../../utils": 124
            }
        ],
        105: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = function() {
                    function t1(e) {
                        n(this, t1), this.vertices = new ArrayBuffer(e), this.float32View = new Float32Array(this.vertices), this.uint32View = new Uint32Array(this.vertices);
                    }
                    return t1.prototype.destroy = function() {
                        this.vertices = null, this.positions = null, this.uvs = null, this.colors = null;
                    }, t1;
                }();
                r.default = i;
            },
            {}
        ],
        106: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function o(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function s(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var a = t1("../../renderers/webgl/utils/ObjectRenderer"), u = n(a), h = t1("../../renderers/webgl/WebGLRenderer"), l = n(h), c = t1("../../utils/createIndicesForQuads"), d = n(c), f = t1("./generateMultiTextureShader"), p = n(f), v = t1("../../renderers/webgl/utils/checkMaxIfStatmentsInShader"), y = n(v), g = t1("./BatchBuffer"), m = n(g), _ = t1("../../settings"), b = n(_), x = t1("../../utils"), T = t1("pixi-gl-core"), w = n(T), E = t1("bit-twiddle"), S = n(E), O = 0, P = 0, M = function(t1) {
                    function e(r) {
                        i(this, e);
                        var n = o(this, t1.call(this, r));
                        n.vertSize = 5, n.vertByteSize = 4 * n.vertSize, n.size = b.default.SPRITE_BATCH_SIZE, n.buffers = [];
                        for(var s = 1; s <= S.default.nextPow2(n.size); s *= 2)n.buffers.push(new m.default(4 * s * n.vertByteSize));
                        n.indices = (0, d.default)(n.size), n.shader = null, n.currentIndex = 0, n.groups = [];
                        for(var a = 0; a < n.size; a++)n.groups[a] = {
                            textures: [],
                            textureCount: 0,
                            ids: [],
                            size: 0,
                            start: 0,
                            blend: 0
                        };
                        return n.sprites = [], n.vertexBuffers = [], n.vaos = [], n.vaoMax = 2, n.vertexCount = 0, n.renderer.on("prerender", n.onPrerender, n), n;
                    }
                    return s(e, t1), e.prototype.onContextChange = function() {
                        var t1 = this.renderer.gl;
                        this.renderer.legacy ? this.MAX_TEXTURES = 1 : (this.MAX_TEXTURES = Math.min(t1.getParameter(t1.MAX_TEXTURE_IMAGE_UNITS), b.default.SPRITE_MAX_TEXTURES), this.MAX_TEXTURES = (0, y.default)(this.MAX_TEXTURES, t1)), this.shader = (0, p.default)(t1, this.MAX_TEXTURES), this.indexBuffer = w.default.GLBuffer.createIndexBuffer(t1, this.indices, t1.STATIC_DRAW), this.renderer.bindVao(null);
                        for(var e = this.shader.attributes, r = 0; r < this.vaoMax; r++){
                            var n = this.vertexBuffers[r] = w.default.GLBuffer.createVertexBuffer(t1, null, t1.STREAM_DRAW), i = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(n, e.aVertexPosition, t1.FLOAT, !1, this.vertByteSize, 0).addAttribute(n, e.aTextureCoord, t1.UNSIGNED_SHORT, !0, this.vertByteSize, 8).addAttribute(n, e.aColor, t1.UNSIGNED_BYTE, !0, this.vertByteSize, 12);
                            e.aTextureId && i.addAttribute(n, e.aTextureId, t1.FLOAT, !1, this.vertByteSize, 16), this.vaos[r] = i;
                        }
                        this.vao = this.vaos[0], this.currentBlendMode = 99999, this.boundTextures = new Array(this.MAX_TEXTURES);
                    }, e.prototype.onPrerender = function() {
                        this.vertexCount = 0;
                    }, e.prototype.render = function(t1) {
                        this.currentIndex >= this.size && this.flush(), t1._texture._uvs && (this.sprites[this.currentIndex++] = t1);
                    }, e.prototype.flush = function() {
                        if (0 !== this.currentIndex) {
                            var t1 = this.renderer.gl, e = this.MAX_TEXTURES, r = S.default.nextPow2(this.currentIndex), n = S.default.log2(r), i = this.buffers[n], o = this.sprites, s = this.groups, a = i.float32View, u = i.uint32View, h = this.boundTextures, l = this.renderer.boundTextures, c = this.renderer.textureGC.count, d = 0, f = void 0, p = void 0, v = 1, y = 0, g = s[0], m = void 0, _ = void 0, T = x.premultiplyBlendMode[o[0]._texture.baseTexture.premultipliedAlpha ? 1 : 0][o[0].blendMode];
                            g.textureCount = 0, g.start = 0, g.blend = T, O++;
                            var E = void 0;
                            for(E = 0; E < e; ++E)h[E] = l[E], h[E]._virtalBoundId = E;
                            for(E = 0; E < this.currentIndex; ++E){
                                var M = o[E];
                                f = M._texture.baseTexture;
                                var C = x.premultiplyBlendMode[Number(f.premultipliedAlpha)][M.blendMode];
                                if (T !== C && (T = C, p = null, y = e, O++), p !== f && (p = f, f._enabled !== O)) {
                                    if (y === e && (O++, g.size = E - g.start, y = 0, g = s[v++], g.blend = T, g.textureCount = 0, g.start = E), f.touched = c, -1 === f._virtalBoundId) for(var R = 0; R < e; ++R){
                                        var A = (R + P) % e, I = h[A];
                                        if (I._enabled !== O) {
                                            P++, I._virtalBoundId = -1, f._virtalBoundId = A, h[A] = f;
                                            break;
                                        }
                                    }
                                    f._enabled = O, g.textureCount++, g.ids[y] = f._virtalBoundId, g.textures[y++] = f;
                                }
                                if (m = M.vertexData, _ = M._texture._uvs.uvsUint32, this.renderer.roundPixels) {
                                    var D = this.renderer.resolution;
                                    a[d] = (m[0] * D | 0) / D, a[d + 1] = (m[1] * D | 0) / D, a[d + 5] = (m[2] * D | 0) / D, a[d + 6] = (m[3] * D | 0) / D, a[d + 10] = (m[4] * D | 0) / D, a[d + 11] = (m[5] * D | 0) / D, a[d + 15] = (m[6] * D | 0) / D, a[d + 16] = (m[7] * D | 0) / D;
                                } else a[d] = m[0], a[d + 1] = m[1], a[d + 5] = m[2], a[d + 6] = m[3], a[d + 10] = m[4], a[d + 11] = m[5], a[d + 15] = m[6], a[d + 16] = m[7];
                                u[d + 2] = _[0], u[d + 7] = _[1], u[d + 12] = _[2], u[d + 17] = _[3];
                                var L = Math.min(M.worldAlpha, 1), N = L < 1 && f.premultipliedAlpha ? (0, x.premultiplyTint)(M._tintRGB, L) : M._tintRGB + (255 * L << 24);
                                u[d + 3] = u[d + 8] = u[d + 13] = u[d + 18] = N, a[d + 4] = a[d + 9] = a[d + 14] = a[d + 19] = f._virtalBoundId, d += 20;
                            }
                            if (g.size = E - g.start, b.default.CAN_UPLOAD_SAME_BUFFER) this.vertexBuffers[this.vertexCount].upload(i.vertices, 0, !0);
                            else {
                                if (this.vaoMax <= this.vertexCount) {
                                    this.vaoMax++;
                                    var F = this.shader.attributes, B = this.vertexBuffers[this.vertexCount] = w.default.GLBuffer.createVertexBuffer(t1, null, t1.STREAM_DRAW), k = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(B, F.aVertexPosition, t1.FLOAT, !1, this.vertByteSize, 0).addAttribute(B, F.aTextureCoord, t1.UNSIGNED_SHORT, !0, this.vertByteSize, 8).addAttribute(B, F.aColor, t1.UNSIGNED_BYTE, !0, this.vertByteSize, 12);
                                    F.aTextureId && k.addAttribute(B, F.aTextureId, t1.FLOAT, !1, this.vertByteSize, 16), this.vaos[this.vertexCount] = k;
                                }
                                this.renderer.bindVao(this.vaos[this.vertexCount]), this.vertexBuffers[this.vertexCount].upload(i.vertices, 0, !1), this.vertexCount++;
                            }
                            for(E = 0; E < e; ++E)l[E]._virtalBoundId = -1;
                            for(E = 0; E < v; ++E){
                                for(var j = s[E], U = j.textureCount, X = 0; X < U; X++)p = j.textures[X], l[j.ids[X]] !== p && this.renderer.bindTexture(p, j.ids[X], !0), p._virtalBoundId = -1;
                                this.renderer.state.setBlendMode(j.blend), t1.drawElements(t1.TRIANGLES, 6 * j.size, t1.UNSIGNED_SHORT, 6 * j.start * 2);
                            }
                            this.currentIndex = 0;
                        }
                    }, e.prototype.start = function() {
                        this.renderer.bindShader(this.shader), b.default.CAN_UPLOAD_SAME_BUFFER && (this.renderer.bindVao(this.vaos[this.vertexCount]), this.vertexBuffers[this.vertexCount].bind());
                    }, e.prototype.stop = function() {
                        this.flush();
                    }, e.prototype.destroy = function() {
                        for(var e = 0; e < this.vaoMax; e++)this.vertexBuffers[e] && this.vertexBuffers[e].destroy(), this.vaos[e] && this.vaos[e].destroy();
                        this.indexBuffer && this.indexBuffer.destroy(), this.renderer.off("prerender", this.onPrerender, this), t1.prototype.destroy.call(this), this.shader && (this.shader.destroy(), this.shader = null), this.vertexBuffers = null, this.vaos = null, this.indexBuffer = null, this.indices = null, this.sprites = null;
                        for(var r = 0; r < this.buffers.length; ++r)this.buffers[r].destroy();
                    }, e;
                }(u.default);
                r.default = M, l.default.registerPlugin("sprite", M);
            },
            {
                "../../renderers/webgl/WebGLRenderer": 84,
                "../../renderers/webgl/utils/ObjectRenderer": 94,
                "../../renderers/webgl/utils/checkMaxIfStatmentsInShader": 97,
                "../../settings": 101,
                "../../utils": 124,
                "../../utils/createIndicesForQuads": 122,
                "./BatchBuffer": 105,
                "./generateMultiTextureShader": 107,
                "bit-twiddle": 1,
                "pixi-gl-core": 12
            }
        ],
        107: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    var r = a;
                    r = r.replace(/%count%/gi, e), r = r.replace(/%forloop%/gi, i(e));
                    for(var n = new s.default(t1, "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor;\n}\n", r), o = [], u = 0; u < e; u++)o[u] = u;
                    return n.bind(), n.uniforms.uSamplers = o, n;
                }
                function i(t1) {
                    var e = "";
                    e += "\n", e += "\n";
                    for(var r = 0; r < t1; r++)r > 0 && (e += "\nelse "), r < t1 - 1 && (e += "if(textureId == " + r + ".0)"), e += "\n{", e += "\n	color = texture2D(uSamplers[" + r + "], vTextureCoord);", e += "\n}";
                    return e += "\n", e += "\n";
                }
                r.__esModule = !0, r.default = n;
                var o = t1("../../Shader"), s = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(o), a = (t1("path"), [
                    "varying vec2 vTextureCoord;",
                    "varying vec4 vColor;",
                    "varying float vTextureId;",
                    "uniform sampler2D uSamplers[%count%];",
                    "void main(void){",
                    "vec4 color;",
                    "float textureId = floor(vTextureId+0.5);",
                    "%forloop%",
                    "gl_FragColor = color * vColor;",
                    "}"
                ].join("\n"));
            },
            {
                "../../Shader": 44,
                path: 23
            }
        ],
        108: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function o(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function s(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var a = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), u = t1("../sprites/Sprite"), h = n(u), l = t1("../textures/Texture"), c = n(l), d = t1("../math"), f = t1("../utils"), p = t1("../const"), v = t1("../settings"), y = n(v), g = t1("./TextStyle"), m = n(g), _ = t1("./TextMetrics"), b = n(_), x = t1("../utils/trimCanvas"), T = n(x), w = {
                    texture: !0,
                    children: !1,
                    baseTexture: !0
                }, E = function(t1) {
                    function e(r, n, s) {
                        i(this, e), s = s || document.createElement("canvas"), s.width = 3, s.height = 3;
                        var a = c.default.fromCanvas(s, y.default.SCALE_MODE, "text");
                        a.orig = new d.Rectangle, a.trim = new d.Rectangle;
                        var u = o(this, t1.call(this, a));
                        return c.default.addToCache(u._texture, u._texture.baseTexture.textureCacheIds[0]), u.canvas = s, u.context = u.canvas.getContext("2d"), u.resolution = y.default.RESOLUTION, u._text = null, u._style = null, u._styleListener = null, u._font = "", u.text = r, u.style = n, u.localStyleID = -1, u;
                    }
                    return s(e, t1), e.prototype.updateText = function(t1) {
                        var e = this._style;
                        if (this.localStyleID !== e.styleID && (this.dirty = !0, this.localStyleID = e.styleID), this.dirty || !t1) {
                            this._font = this._style.toFontString();
                            var r = this.context, n = b.default.measureText(this._text, this._style, this._style.wordWrap, this.canvas), i = n.width, o = n.height, s = n.lines, a = n.lineHeight, u = n.lineWidths, h = n.maxLineWidth, l = n.fontProperties;
                            this.canvas.width = Math.ceil((i + 2 * e.padding) * this.resolution), this.canvas.height = Math.ceil((o + 2 * e.padding) * this.resolution), r.scale(this.resolution, this.resolution), r.clearRect(0, 0, this.canvas.width, this.canvas.height), r.font = this._font, r.strokeStyle = e.stroke, r.lineWidth = e.strokeThickness, r.textBaseline = e.textBaseline, r.lineJoin = e.lineJoin, r.miterLimit = e.miterLimit;
                            var c = void 0, d = void 0;
                            if (e.dropShadow) {
                                r.fillStyle = e.dropShadowColor, r.globalAlpha = e.dropShadowAlpha, r.shadowBlur = e.dropShadowBlur, e.dropShadowBlur > 0 && (r.shadowColor = e.dropShadowColor);
                                for(var f = Math.cos(e.dropShadowAngle) * e.dropShadowDistance, p = Math.sin(e.dropShadowAngle) * e.dropShadowDistance, v = 0; v < s.length; v++)c = e.strokeThickness / 2, d = e.strokeThickness / 2 + v * a + l.ascent, "right" === e.align ? c += h - u[v] : "center" === e.align && (c += (h - u[v]) / 2), e.fill && (this.drawLetterSpacing(s[v], c + f + e.padding, d + p + e.padding), e.stroke && e.strokeThickness && (r.strokeStyle = e.dropShadowColor, this.drawLetterSpacing(s[v], c + f + e.padding, d + p + e.padding, !0), r.strokeStyle = e.stroke));
                            }
                            r.shadowBlur = 0, r.globalAlpha = 1, r.fillStyle = this._generateFillStyle(e, s);
                            for(var y = 0; y < s.length; y++)c = e.strokeThickness / 2, d = e.strokeThickness / 2 + y * a + l.ascent, "right" === e.align ? c += h - u[y] : "center" === e.align && (c += (h - u[y]) / 2), e.stroke && e.strokeThickness && this.drawLetterSpacing(s[y], c + e.padding, d + e.padding, !0), e.fill && this.drawLetterSpacing(s[y], c + e.padding, d + e.padding);
                            this.updateTexture();
                        }
                    }, e.prototype.drawLetterSpacing = function(t1, e, r) {
                        var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], i = this._style, o = i.letterSpacing;
                        if (0 === o) return void (n ? this.context.strokeText(t1, e, r) : this.context.fillText(t1, e, r));
                        for(var s = String.prototype.split.call(t1, ""), a = e, u = 0, h = ""; u < t1.length;)h = s[u++], n ? this.context.strokeText(h, a, r) : this.context.fillText(h, a, r), a += this.context.measureText(h).width + o;
                    }, e.prototype.updateTexture = function() {
                        var t1 = this.canvas;
                        if (this._style.trim) {
                            var e = (0, T.default)(t1);
                            t1.width = e.width, t1.height = e.height, this.context.putImageData(e.data, 0, 0);
                        }
                        var r = this._texture, n = this._style, i = n.trim ? 0 : n.padding, o = r.baseTexture;
                        o.hasLoaded = !0, o.resolution = this.resolution, o.realWidth = t1.width, o.realHeight = t1.height, o.width = t1.width / this.resolution, o.height = t1.height / this.resolution, r.trim.width = r._frame.width = t1.width / this.resolution, r.trim.height = r._frame.height = t1.height / this.resolution, r.trim.x = -i, r.trim.y = -i, r.orig.width = r._frame.width - 2 * i, r.orig.height = r._frame.height - 2 * i, this._onTextureUpdate(), o.emit("update", o), this.dirty = !1;
                    }, e.prototype.renderWebGL = function(e) {
                        this.resolution !== e.resolution && (this.resolution = e.resolution, this.dirty = !0), this.updateText(!0), t1.prototype.renderWebGL.call(this, e);
                    }, e.prototype._renderCanvas = function(e) {
                        this.resolution !== e.resolution && (this.resolution = e.resolution, this.dirty = !0), this.updateText(!0), t1.prototype._renderCanvas.call(this, e);
                    }, e.prototype.getLocalBounds = function(e) {
                        return this.updateText(!0), t1.prototype.getLocalBounds.call(this, e);
                    }, e.prototype._calculateBounds = function() {
                        this.updateText(!0), this.calculateVertices(), this._bounds.addQuad(this.vertexData);
                    }, e.prototype._onStyleChange = function() {
                        this.dirty = !0;
                    }, e.prototype._generateFillStyle = function(t1, e) {
                        if (!Array.isArray(t1.fill)) return t1.fill;
                        if (navigator.isCocoonJS) return t1.fill[0];
                        var r = void 0, n = void 0, i = void 0, o = void 0, s = this.canvas.width / this.resolution, a = this.canvas.height / this.resolution, u = t1.fill.slice(), h = t1.fillGradientStops.slice();
                        if (!h.length) for(var l = u.length + 1, c = 1; c < l; ++c)h.push(c / l);
                        if (u.unshift(t1.fill[0]), h.unshift(0), u.push(t1.fill[t1.fill.length - 1]), h.push(1), t1.fillGradientType === p.TEXT_GRADIENT.LINEAR_VERTICAL) {
                            r = this.context.createLinearGradient(s / 2, 0, s / 2, a), n = (u.length + 1) * e.length, i = 0;
                            for(var d = 0; d < e.length; d++){
                                i += 1;
                                for(var f = 0; f < u.length; f++)o = "number" == typeof h[f] ? h[f] / e.length + d / e.length : i / n, r.addColorStop(o, u[f]), i++;
                            }
                        } else {
                            r = this.context.createLinearGradient(0, a / 2, s, a / 2), n = u.length + 1, i = 1;
                            for(var v = 0; v < u.length; v++)o = "number" == typeof h[v] ? h[v] : i / n, r.addColorStop(o, u[v]), i++;
                        }
                        return r;
                    }, e.prototype.destroy = function(e) {
                        "boolean" == typeof e && (e = {
                            children: e
                        }), e = Object.assign({}, w, e), t1.prototype.destroy.call(this, e), this.context = null, this.canvas = null, this._style = null;
                    }, a(e, [
                        {
                            key: "width",
                            get: function() {
                                return this.updateText(!0), Math.abs(this.scale.x) * this._texture.orig.width;
                            },
                            set: function(t1) {
                                this.updateText(!0);
                                var e = (0, f.sign)(this.scale.x) || 1;
                                this.scale.x = e * t1 / this._texture.orig.width, this._width = t1;
                            }
                        },
                        {
                            key: "height",
                            get: function() {
                                return this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height;
                            },
                            set: function(t1) {
                                this.updateText(!0);
                                var e = (0, f.sign)(this.scale.y) || 1;
                                this.scale.y = e * t1 / this._texture.orig.height, this._height = t1;
                            }
                        },
                        {
                            key: "style",
                            get: function() {
                                return this._style;
                            },
                            set: function(t1) {
                                t1 = t1 || {}, t1 instanceof m.default ? this._style = t1 : this._style = new m.default(t1), this.localStyleID = -1, this.dirty = !0;
                            }
                        },
                        {
                            key: "text",
                            get: function() {
                                return this._text;
                            },
                            set: function(t1) {
                                t1 = String("" === t1 || null === t1 || void 0 === t1 ? " " : t1), this._text !== t1 && (this._text = t1, this.dirty = !0);
                            }
                        }
                    ]), e;
                }(h.default);
                r.default = E;
            },
            {
                "../const": 46,
                "../math": 70,
                "../settings": 101,
                "../sprites/Sprite": 102,
                "../textures/Texture": 115,
                "../utils": 124,
                "../utils/trimCanvas": 129,
                "./TextMetrics": 109,
                "./TextStyle": 110
            }
        ],
        109: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = function() {
                    function t1(e, r, i, o, s, a, u, h, l) {
                        n(this, t1), this.text = e, this.style = r, this.width = i, this.height = o, this.lines = s, this.lineWidths = a, this.lineHeight = u, this.maxLineWidth = h, this.fontProperties = l;
                    }
                    return t1.measureText = function(e, r, n) {
                        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t1._canvas;
                        n = n || r.wordWrap;
                        var o = r.toFontString(), s = t1.measureFont(o), a = i.getContext("2d");
                        a.font = o;
                        for(var u = n ? t1.wordWrap(e, r, i) : e, h = u.split(/(?:\r\n|\r|\n)/), l = new Array(h.length), c = 0, d = 0; d < h.length; d++){
                            var f = a.measureText(h[d]).width + (h[d].length - 1) * r.letterSpacing;
                            l[d] = f, c = Math.max(c, f);
                        }
                        var p = c + r.strokeThickness;
                        r.dropShadow && (p += r.dropShadowDistance);
                        var v = r.lineHeight || s.fontSize + r.strokeThickness, y = Math.max(v, s.fontSize + r.strokeThickness) + (h.length - 1) * (v + r.leading);
                        return r.dropShadow && (y += r.dropShadowDistance), new t1(e, r, p, y, h, l, v + r.leading, c, s);
                    }, t1.wordWrap = function(e, r) {
                        for(var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t1._canvas, i = n.getContext("2d"), o = "", s = e.split("\n"), a = r.wordWrapWidth, u = {}, h = 0; h < s.length; h++){
                            for(var l = a, c = s[h].split(" "), d = 0; d < c.length; d++){
                                var f = i.measureText(c[d]).width;
                                if (r.breakWords && f > a) for(var p = c[d].split(""), v = 0; v < p.length; v++){
                                    var y = p[v], g = u[y];
                                    void 0 === g && (g = i.measureText(y).width, u[y] = g), g > l ? (o += "\n" + y, l = a - g) : (0 === v && (o += " "), o += y, l -= g);
                                }
                                else {
                                    var m = f + i.measureText(" ").width;
                                    0 === d || m > l ? (d > 0 && (o += "\n"), o += c[d], l = a - f) : (l -= m, o += " " + c[d]);
                                }
                            }
                            h < s.length - 1 && (o += "\n");
                        }
                        return o;
                    }, t1.measureFont = function(e) {
                        if (t1._fonts[e]) return t1._fonts[e];
                        var r = {}, n = t1._canvas, i = t1._context;
                        i.font = e;
                        var o = Math.ceil(i.measureText("|M\xc9q").width), s = Math.ceil(i.measureText("M").width), a = 2 * s;
                        s = 1.4 * s | 0, n.width = o, n.height = a, i.fillStyle = "#f00", i.fillRect(0, 0, o, a), i.font = e, i.textBaseline = "alphabetic", i.fillStyle = "#000", i.fillText("|M\xc9q", 0, s);
                        var u = i.getImageData(0, 0, o, a).data, h = u.length, l = 4 * o, c = 0, d = 0, f = !1;
                        for(c = 0; c < s; ++c){
                            for(var p = 0; p < l; p += 4)if (255 !== u[d + p]) {
                                f = !0;
                                break;
                            }
                            if (f) break;
                            d += l;
                        }
                        for(r.ascent = s - c, d = h - l, f = !1, c = a; c > s; --c){
                            for(var v = 0; v < l; v += 4)if (255 !== u[d + v]) {
                                f = !0;
                                break;
                            }
                            if (f) break;
                            d -= l;
                        }
                        return r.descent = c - s, r.fontSize = r.ascent + r.descent, t1._fonts[e] = r, r;
                    }, t1;
                }();
                r.default = i;
                var o = document.createElement("canvas");
                o.width = o.height = 10, i._canvas = o, i._context = o.getContext("2d"), i._fonts = {};
            },
            {}
        ],
        110: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function i(t1) {
                    return "number" == typeof t1 ? (0, h.hex2string)(t1) : ("string" == typeof t1 && 0 === t1.indexOf("0x") && (t1 = t1.replace("0x", "#")), t1);
                }
                function o(t1) {
                    if (Array.isArray(t1)) {
                        for(var e = 0; e < t1.length; ++e)t1[e] = i(t1[e]);
                        return t1;
                    }
                    return i(t1);
                }
                function s(t1, e) {
                    if (!Array.isArray(t1) || !Array.isArray(e)) return !1;
                    if (t1.length !== e.length) return !1;
                    for(var r = 0; r < t1.length; ++r)if (t1[r] !== e[r]) return !1;
                    return !0;
                }
                r.__esModule = !0;
                var a = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), u = t1("../const"), h = t1("../utils"), l = {
                    align: "left",
                    breakWords: !1,
                    dropShadow: !1,
                    dropShadowAlpha: 1,
                    dropShadowAngle: Math.PI / 6,
                    dropShadowBlur: 0,
                    dropShadowColor: "black",
                    dropShadowDistance: 5,
                    fill: "black",
                    fillGradientType: u.TEXT_GRADIENT.LINEAR_VERTICAL,
                    fillGradientStops: [],
                    fontFamily: "Arial",
                    fontSize: 26,
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: "normal",
                    letterSpacing: 0,
                    lineHeight: 0,
                    lineJoin: "miter",
                    miterLimit: 10,
                    padding: 0,
                    stroke: "black",
                    strokeThickness: 0,
                    textBaseline: "alphabetic",
                    trim: !1,
                    wordWrap: !1,
                    wordWrapWidth: 100,
                    leading: 0
                }, c = function() {
                    function t1(e) {
                        n(this, t1), this.styleID = 0, Object.assign(this, l, e);
                    }
                    return t1.prototype.clone = function() {
                        var e = {};
                        for(var r in l)e[r] = this[r];
                        return new t1(e);
                    }, t1.prototype.reset = function() {
                        Object.assign(this, l);
                    }, t1.prototype.toFontString = function() {
                        var t1 = "number" == typeof this.fontSize ? this.fontSize + "px" : this.fontSize, e = this.fontFamily;
                        Array.isArray(this.fontFamily) || (e = this.fontFamily.split(","));
                        for(var r = e.length - 1; r >= 0; r--){
                            var n = e[r].trim();
                            /([\"\'])[^\'\"]+\1/.test(n) || (n = '"' + n + '"'), e[r] = n;
                        }
                        return this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + t1 + " " + e.join(",");
                    }, a(t1, [
                        {
                            key: "align",
                            get: function() {
                                return this._align;
                            },
                            set: function(t1) {
                                this._align !== t1 && (this._align = t1, this.styleID++);
                            }
                        },
                        {
                            key: "breakWords",
                            get: function() {
                                return this._breakWords;
                            },
                            set: function(t1) {
                                this._breakWords !== t1 && (this._breakWords = t1, this.styleID++);
                            }
                        },
                        {
                            key: "dropShadow",
                            get: function() {
                                return this._dropShadow;
                            },
                            set: function(t1) {
                                this._dropShadow !== t1 && (this._dropShadow = t1, this.styleID++);
                            }
                        },
                        {
                            key: "dropShadowAlpha",
                            get: function() {
                                return this._dropShadowAlpha;
                            },
                            set: function(t1) {
                                this._dropShadowAlpha !== t1 && (this._dropShadowAlpha = t1, this.styleID++);
                            }
                        },
                        {
                            key: "dropShadowAngle",
                            get: function() {
                                return this._dropShadowAngle;
                            },
                            set: function(t1) {
                                this._dropShadowAngle !== t1 && (this._dropShadowAngle = t1, this.styleID++);
                            }
                        },
                        {
                            key: "dropShadowBlur",
                            get: function() {
                                return this._dropShadowBlur;
                            },
                            set: function(t1) {
                                this._dropShadowBlur !== t1 && (this._dropShadowBlur = t1, this.styleID++);
                            }
                        },
                        {
                            key: "dropShadowColor",
                            get: function() {
                                return this._dropShadowColor;
                            },
                            set: function(t1) {
                                var e = o(t1);
                                this._dropShadowColor !== e && (this._dropShadowColor = e, this.styleID++);
                            }
                        },
                        {
                            key: "dropShadowDistance",
                            get: function() {
                                return this._dropShadowDistance;
                            },
                            set: function(t1) {
                                this._dropShadowDistance !== t1 && (this._dropShadowDistance = t1, this.styleID++);
                            }
                        },
                        {
                            key: "fill",
                            get: function() {
                                return this._fill;
                            },
                            set: function(t1) {
                                var e = o(t1);
                                this._fill !== e && (this._fill = e, this.styleID++);
                            }
                        },
                        {
                            key: "fillGradientType",
                            get: function() {
                                return this._fillGradientType;
                            },
                            set: function(t1) {
                                this._fillGradientType !== t1 && (this._fillGradientType = t1, this.styleID++);
                            }
                        },
                        {
                            key: "fillGradientStops",
                            get: function() {
                                return this._fillGradientStops;
                            },
                            set: function(t1) {
                                s(this._fillGradientStops, t1) || (this._fillGradientStops = t1, this.styleID++);
                            }
                        },
                        {
                            key: "fontFamily",
                            get: function() {
                                return this._fontFamily;
                            },
                            set: function(t1) {
                                this.fontFamily !== t1 && (this._fontFamily = t1, this.styleID++);
                            }
                        },
                        {
                            key: "fontSize",
                            get: function() {
                                return this._fontSize;
                            },
                            set: function(t1) {
                                this._fontSize !== t1 && (this._fontSize = t1, this.styleID++);
                            }
                        },
                        {
                            key: "fontStyle",
                            get: function() {
                                return this._fontStyle;
                            },
                            set: function(t1) {
                                this._fontStyle !== t1 && (this._fontStyle = t1, this.styleID++);
                            }
                        },
                        {
                            key: "fontVariant",
                            get: function() {
                                return this._fontVariant;
                            },
                            set: function(t1) {
                                this._fontVariant !== t1 && (this._fontVariant = t1, this.styleID++);
                            }
                        },
                        {
                            key: "fontWeight",
                            get: function() {
                                return this._fontWeight;
                            },
                            set: function(t1) {
                                this._fontWeight !== t1 && (this._fontWeight = t1, this.styleID++);
                            }
                        },
                        {
                            key: "letterSpacing",
                            get: function() {
                                return this._letterSpacing;
                            },
                            set: function(t1) {
                                this._letterSpacing !== t1 && (this._letterSpacing = t1, this.styleID++);
                            }
                        },
                        {
                            key: "lineHeight",
                            get: function() {
                                return this._lineHeight;
                            },
                            set: function(t1) {
                                this._lineHeight !== t1 && (this._lineHeight = t1, this.styleID++);
                            }
                        },
                        {
                            key: "leading",
                            get: function() {
                                return this._leading;
                            },
                            set: function(t1) {
                                this._leading !== t1 && (this._leading = t1, this.styleID++);
                            }
                        },
                        {
                            key: "lineJoin",
                            get: function() {
                                return this._lineJoin;
                            },
                            set: function(t1) {
                                this._lineJoin !== t1 && (this._lineJoin = t1, this.styleID++);
                            }
                        },
                        {
                            key: "miterLimit",
                            get: function() {
                                return this._miterLimit;
                            },
                            set: function(t1) {
                                this._miterLimit !== t1 && (this._miterLimit = t1, this.styleID++);
                            }
                        },
                        {
                            key: "padding",
                            get: function() {
                                return this._padding;
                            },
                            set: function(t1) {
                                this._padding !== t1 && (this._padding = t1, this.styleID++);
                            }
                        },
                        {
                            key: "stroke",
                            get: function() {
                                return this._stroke;
                            },
                            set: function(t1) {
                                var e = o(t1);
                                this._stroke !== e && (this._stroke = e, this.styleID++);
                            }
                        },
                        {
                            key: "strokeThickness",
                            get: function() {
                                return this._strokeThickness;
                            },
                            set: function(t1) {
                                this._strokeThickness !== t1 && (this._strokeThickness = t1, this.styleID++);
                            }
                        },
                        {
                            key: "textBaseline",
                            get: function() {
                                return this._textBaseline;
                            },
                            set: function(t1) {
                                this._textBaseline !== t1 && (this._textBaseline = t1, this.styleID++);
                            }
                        },
                        {
                            key: "trim",
                            get: function() {
                                return this._trim;
                            },
                            set: function(t1) {
                                this._trim !== t1 && (this._trim = t1, this.styleID++);
                            }
                        },
                        {
                            key: "wordWrap",
                            get: function() {
                                return this._wordWrap;
                            },
                            set: function(t1) {
                                this._wordWrap !== t1 && (this._wordWrap = t1, this.styleID++);
                            }
                        },
                        {
                            key: "wordWrapWidth",
                            get: function() {
                                return this._wordWrapWidth;
                            },
                            set: function(t1) {
                                this._wordWrapWidth !== t1 && (this._wordWrapWidth = t1, this.styleID++);
                            }
                        }
                    ]), t1;
                }();
                r.default = c;
            },
            {
                "../const": 46,
                "../utils": 124
            }
        ],
        111: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function o(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function s(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var a = t1("./BaseTexture"), u = n(a), h = t1("../settings"), l = n(h), c = function(t1) {
                    function e() {
                        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, s = arguments[2], a = arguments[3];
                        i(this, e);
                        var u = o(this, t1.call(this, null, s));
                        return u.resolution = a || l.default.RESOLUTION, u.width = r, u.height = n, u.realWidth = u.width * u.resolution, u.realHeight = u.height * u.resolution, u.scaleMode = void 0 !== s ? s : l.default.SCALE_MODE, u.hasLoaded = !0, u._glRenderTargets = {}, u._canvasRenderTarget = null, u.valid = !1, u;
                    }
                    return s(e, t1), e.prototype.resize = function(t1, e) {
                        t1 === this.width && e === this.height || (this.valid = t1 > 0 && e > 0, this.width = t1, this.height = e, this.realWidth = this.width * this.resolution, this.realHeight = this.height * this.resolution, this.valid && this.emit("update", this));
                    }, e.prototype.destroy = function() {
                        t1.prototype.destroy.call(this, !0), this.renderer = null;
                    }, e;
                }(u.default);
                r.default = c;
            },
            {
                "../settings": 101,
                "./BaseTexture": 112
            }
        ],
        112: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function o(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function s(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var a = t1("../utils"), u = t1("../settings"), h = n(u), l = t1("eventemitter3"), c = n(l), d = t1("../utils/determineCrossOrigin"), f = n(d), p = t1("bit-twiddle"), v = n(p), y = function(t1) {
                    function e(r, n, s) {
                        i(this, e);
                        var u = o(this, t1.call(this));
                        return u.uid = (0, a.uid)(), u.touched = 0, u.resolution = s || h.default.RESOLUTION, u.width = 100, u.height = 100, u.realWidth = 100, u.realHeight = 100, u.scaleMode = void 0 !== n ? n : h.default.SCALE_MODE, u.hasLoaded = !1, u.isLoading = !1, u.source = null, u.origSource = null, u.imageType = null, u.sourceScale = 1, u.premultipliedAlpha = !0, u.imageUrl = null, u.isPowerOfTwo = !1, u.mipmap = h.default.MIPMAP_TEXTURES, u.wrapMode = h.default.WRAP_MODE, u._glTextures = {}, u._enabled = 0, u._virtalBoundId = -1, u._destroyed = !1, u.textureCacheIds = [], r && u.loadSource(r), u;
                    }
                    return s(e, t1), e.prototype.update = function() {
                        "svg" !== this.imageType && (this.realWidth = this.source.naturalWidth || this.source.videoWidth || this.source.width, this.realHeight = this.source.naturalHeight || this.source.videoHeight || this.source.height, this._updateDimensions()), this.emit("update", this);
                    }, e.prototype._updateDimensions = function() {
                        this.width = this.realWidth / this.resolution, this.height = this.realHeight / this.resolution, this.isPowerOfTwo = v.default.isPow2(this.realWidth) && v.default.isPow2(this.realHeight);
                    }, e.prototype.loadSource = function(t1) {
                        var e = this.isLoading;
                        this.hasLoaded = !1, this.isLoading = !1, e && this.source && (this.source.onload = null, this.source.onerror = null);
                        var r = !this.source;
                        if (this.source = t1, (t1.src && t1.complete || t1.getContext) && t1.width && t1.height) this._updateImageType(), "svg" === this.imageType ? this._loadSvgSource() : this._sourceLoaded(), r && this.emit("loaded", this);
                        else if (!t1.getContext) {
                            this.isLoading = !0;
                            var n = this;
                            if (t1.onload = function() {
                                if (n._updateImageType(), t1.onload = null, t1.onerror = null, n.isLoading) {
                                    if (n.isLoading = !1, n._sourceLoaded(), "svg" === n.imageType) return void n._loadSvgSource();
                                    n.emit("loaded", n);
                                }
                            }, t1.onerror = function() {
                                t1.onload = null, t1.onerror = null, n.isLoading && (n.isLoading = !1, n.emit("error", n));
                            }, t1.complete && t1.src) {
                                if (t1.onload = null, t1.onerror = null, "svg" === n.imageType) return void n._loadSvgSource();
                                this.isLoading = !1, t1.width && t1.height ? (this._sourceLoaded(), e && this.emit("loaded", this)) : e && this.emit("error", this);
                            }
                        }
                    }, e.prototype._updateImageType = function() {
                        if (this.imageUrl) {
                            var t1 = (0, a.decomposeDataUri)(this.imageUrl), e = void 0;
                            if (t1 && "image" === t1.mediaType) {
                                var r = t1.subType.split("+")[0];
                                if (!(e = (0, a.getUrlFileExtension)("." + r))) throw new Error("Invalid image type in data URI.");
                            } else (e = (0, a.getUrlFileExtension)(this.imageUrl)) || (e = "png");
                            this.imageType = e;
                        }
                    }, e.prototype._loadSvgSource = function() {
                        if ("svg" === this.imageType) {
                            var t1 = (0, a.decomposeDataUri)(this.imageUrl);
                            t1 ? this._loadSvgSourceUsingDataUri(t1) : this._loadSvgSourceUsingXhr();
                        }
                    }, e.prototype._loadSvgSourceUsingDataUri = function(t1) {
                        var e = void 0;
                        if ("base64" === t1.encoding) {
                            if (!atob) throw new Error("Your browser doesn't support base64 conversions.");
                            e = atob(t1.data);
                        } else e = t1.data;
                        this._loadSvgSourceUsingString(e);
                    }, e.prototype._loadSvgSourceUsingXhr = function() {
                        var t1 = this, e = new XMLHttpRequest;
                        e.onload = function() {
                            if (e.readyState !== e.DONE || 200 !== e.status) throw new Error("Failed to load SVG using XHR.");
                            t1._loadSvgSourceUsingString(e.response);
                        }, e.onerror = function() {
                            return t1.emit("error", t1);
                        }, e.open("GET", this.imageUrl, !0), e.send();
                    }, e.prototype._loadSvgSourceUsingString = function(t1) {
                        var r = (0, a.getSvgSize)(t1), n = r.width, i = r.height;
                        if (!n || !i) throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
                        this.realWidth = Math.round(n * this.sourceScale), this.realHeight = Math.round(i * this.sourceScale), this._updateDimensions();
                        var o = document.createElement("canvas");
                        o.width = this.realWidth, o.height = this.realHeight, o._pixiId = "canvas_" + (0, a.uid)(), o.getContext("2d").drawImage(this.source, 0, 0, n, i, 0, 0, this.realWidth, this.realHeight), this.origSource = this.source, this.source = o, e.addToCache(this, o._pixiId), this.isLoading = !1, this._sourceLoaded(), this.emit("loaded", this);
                    }, e.prototype._sourceLoaded = function() {
                        this.hasLoaded = !0, this.update();
                    }, e.prototype.destroy = function() {
                        this.imageUrl && (delete a.TextureCache[this.imageUrl], this.imageUrl = null, navigator.isCocoonJS || (this.source.src = "")), this.source = null, this.dispose(), e.removeFromCache(this), this.textureCacheIds = null, this._destroyed = !0;
                    }, e.prototype.dispose = function() {
                        this.emit("dispose", this);
                    }, e.prototype.updateSourceImage = function(t1) {
                        this.source.src = t1, this.loadSource(this.source);
                    }, e.fromImage = function(t1, r, n, i) {
                        var o = a.BaseTextureCache[t1];
                        if (!o) {
                            var s = new Image;
                            void 0 === r && 0 !== t1.indexOf("data:") ? s.crossOrigin = (0, f.default)(t1) : r && (s.crossOrigin = "string" == typeof r ? r : "anonymous"), o = new e(s, n), o.imageUrl = t1, i && (o.sourceScale = i), o.resolution = (0, a.getResolutionOfUrl)(t1), s.src = t1, e.addToCache(o, t1);
                        }
                        return o;
                    }, e.fromCanvas = function(t1, r) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "canvas";
                        t1._pixiId || (t1._pixiId = n + "_" + (0, a.uid)());
                        var i = a.BaseTextureCache[t1._pixiId];
                        return i || (i = new e(t1, r), e.addToCache(i, t1._pixiId)), i;
                    }, e.from = function(t1, r, n) {
                        if ("string" == typeof t1) return e.fromImage(t1, void 0, r, n);
                        if (t1 instanceof HTMLImageElement) {
                            var i = t1.src, o = a.BaseTextureCache[i];
                            return o || (o = new e(t1, r), o.imageUrl = i, n && (o.sourceScale = n), o.resolution = (0, a.getResolutionOfUrl)(i), e.addToCache(o, i)), o;
                        }
                        return t1 instanceof HTMLCanvasElement ? e.fromCanvas(t1, r) : t1;
                    }, e.addToCache = function(t1, e) {
                        e && (-1 === t1.textureCacheIds.indexOf(e) && t1.textureCacheIds.push(e), a.BaseTextureCache[e] = t1);
                    }, e.removeFromCache = function(t1) {
                        if ("string" == typeof t1) {
                            var e = a.BaseTextureCache[t1];
                            if (e) {
                                var r = e.textureCacheIds.indexOf(t1);
                                return r > -1 && e.textureCacheIds.splice(r, 1), delete a.BaseTextureCache[t1], e;
                            }
                        } else if (t1 && t1.textureCacheIds) {
                            for(var n = 0; n < t1.textureCacheIds.length; ++n)delete a.BaseTextureCache[t1.textureCacheIds[n]];
                            return t1.textureCacheIds.length = 0, t1;
                        }
                        return null;
                    }, e;
                }(c.default);
                r.default = y;
            },
            {
                "../settings": 101,
                "../utils": 124,
                "../utils/determineCrossOrigin": 123,
                "bit-twiddle": 1,
                eventemitter3: 3
            }
        ],
        113: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function o(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function s(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var a = t1("./BaseRenderTexture"), u = n(a), h = t1("./Texture"), l = n(h), c = function(t1) {
                    function e(r, n) {
                        i(this, e);
                        var s = null;
                        if (!(r instanceof u.default)) {
                            var a = arguments[1], h = arguments[2], l = arguments[3], c = arguments[4];
                            console.warn("Please use RenderTexture.create(" + a + ", " + h + ") instead of the ctor directly."), s = arguments[0], n = null, r = new u.default(a, h, l, c);
                        }
                        var d = o(this, t1.call(this, r, n));
                        return d.legacyRenderer = s, d.valid = !0, d._updateUvs(), d;
                    }
                    return s(e, t1), e.prototype.resize = function(t1, e, r) {
                        this.valid = t1 > 0 && e > 0, this._frame.width = this.orig.width = t1, this._frame.height = this.orig.height = e, r || this.baseTexture.resize(t1, e), this._updateUvs();
                    }, e.create = function(t1, r, n, i) {
                        return new e(new u.default(t1, r, n, i));
                    }, e;
                }(l.default);
                r.default = c;
            },
            {
                "./BaseRenderTexture": 111,
                "./Texture": 115
            }
        ],
        114: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), o = t1("../"), s = t1("../utils"), a = function() {
                    function t1(e, r) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                        n(this, t1), this.baseTexture = e, this.textures = {}, this.data = r, this.resolution = this._updateResolution(i || this.baseTexture.imageUrl), this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null;
                    }
                    return i(t1, null, [
                        {
                            key: "BATCH_SIZE",
                            get: function() {
                                return 1e3;
                            }
                        }
                    ]), t1.prototype._updateResolution = function(t1) {
                        var e = this.data.meta.scale, r = (0, s.getResolutionOfUrl)(t1, null);
                        return null === r && (r = void 0 !== e ? parseFloat(e) : 1), 1 !== r && (this.baseTexture.resolution = r, this.baseTexture.update()), r;
                    }, t1.prototype.parse = function(e) {
                        this._batchIndex = 0, this._callback = e, this._frameKeys.length <= t1.BATCH_SIZE ? (this._processFrames(0), this._parseComplete()) : this._nextBatch();
                    }, t1.prototype._processFrames = function(e) {
                        for(var r = e, n = t1.BATCH_SIZE; r - e < n && r < this._frameKeys.length;){
                            var i = this._frameKeys[r], s = this._frames[i].frame;
                            if (s) {
                                var a = null, u = null, h = new o.Rectangle(0, 0, this._frames[i].sourceSize.w / this.resolution, this._frames[i].sourceSize.h / this.resolution);
                                a = this._frames[i].rotated ? new o.Rectangle(s.x / this.resolution, s.y / this.resolution, s.h / this.resolution, s.w / this.resolution) : new o.Rectangle(s.x / this.resolution, s.y / this.resolution, s.w / this.resolution, s.h / this.resolution), this._frames[i].trimmed && (u = new o.Rectangle(this._frames[i].spriteSourceSize.x / this.resolution, this._frames[i].spriteSourceSize.y / this.resolution, s.w / this.resolution, s.h / this.resolution)), this.textures[i] = new o.Texture(this.baseTexture, a, h, u, this._frames[i].rotated ? 2 : 0), o.Texture.addToCache(this.textures[i], i);
                            }
                            r++;
                        }
                    }, t1.prototype._parseComplete = function() {
                        var t1 = this._callback;
                        this._callback = null, this._batchIndex = 0, t1.call(this, this.textures);
                    }, t1.prototype._nextBatch = function() {
                        var e = this;
                        this._processFrames(this._batchIndex * t1.BATCH_SIZE), this._batchIndex++, setTimeout(function() {
                            e._batchIndex * t1.BATCH_SIZE < e._frameKeys.length ? e._nextBatch() : e._parseComplete();
                        }, 0);
                    }, t1.prototype.destroy = function() {
                        var t1 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        for(var e in this.textures)this.textures[e].destroy();
                        this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, t1 && this.baseTexture.destroy(), this.baseTexture = null;
                    }, t1;
                }();
                r.default = a;
            },
            {
                "../": 65,
                "../utils": 124
            }
        ],
        115: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function o(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function s(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                function a(t1) {
                    t1.destroy = function() {}, t1.on = function() {}, t1.once = function() {}, t1.emit = function() {};
                }
                r.__esModule = !0;
                var u = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), h = t1("./BaseTexture"), l = n(h), c = t1("./VideoBaseTexture"), d = n(c), f = t1("./TextureUvs"), p = n(f), v = t1("eventemitter3"), y = n(v), g = t1("../math"), m = t1("../utils"), _ = t1("../settings"), b = n(_), x = function(t1) {
                    function e(r, n, s, a, u) {
                        i(this, e);
                        var h = o(this, t1.call(this));
                        if (h.noFrame = !1, n || (h.noFrame = !0, n = new g.Rectangle(0, 0, 1, 1)), r instanceof e && (r = r.baseTexture), h.baseTexture = r, h._frame = n, h.trim = a, h.valid = !1, h.requiresUpdate = !1, h._uvs = null, h.orig = s || n, h._rotate = Number(u || 0), !0 === u) h._rotate = 2;
                        else if (h._rotate % 2 != 0) throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
                        return r.hasLoaded ? (h.noFrame && (n = new g.Rectangle(0, 0, r.width, r.height), r.on("update", h.onBaseTextureUpdated, h)), h.frame = n) : r.once("loaded", h.onBaseTextureLoaded, h), h._updateID = 0, h.transform = null, h.textureCacheIds = [], h;
                    }
                    return s(e, t1), e.prototype.update = function() {
                        this.baseTexture.update();
                    }, e.prototype.onBaseTextureLoaded = function(t1) {
                        this._updateID++, this.noFrame ? this.frame = new g.Rectangle(0, 0, t1.width, t1.height) : this.frame = this._frame, this.baseTexture.on("update", this.onBaseTextureUpdated, this), this.emit("update", this);
                    }, e.prototype.onBaseTextureUpdated = function(t1) {
                        this._updateID++, this._frame.width = t1.width, this._frame.height = t1.height, this.emit("update", this);
                    }, e.prototype.destroy = function(t1) {
                        this.baseTexture && (t1 && (m.TextureCache[this.baseTexture.imageUrl] && e.removeFromCache(this.baseTexture.imageUrl), this.baseTexture.destroy()), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture.off("loaded", this.onBaseTextureLoaded, this), this.baseTexture = null), this._frame = null, this._uvs = null, this.trim = null, this.orig = null, this.valid = !1, e.removeFromCache(this), this.textureCacheIds = null;
                    }, e.prototype.clone = function() {
                        return new e(this.baseTexture, this.frame, this.orig, this.trim, this.rotate);
                    }, e.prototype._updateUvs = function() {
                        this._uvs || (this._uvs = new p.default), this._uvs.set(this._frame, this.baseTexture, this.rotate), this._updateID++;
                    }, e.fromImage = function(t1, r, n, i) {
                        var o = m.TextureCache[t1];
                        return o || (o = new e(l.default.fromImage(t1, r, n, i)), e.addToCache(o, t1)), o;
                    }, e.fromFrame = function(t1) {
                        var e = m.TextureCache[t1];
                        if (!e) throw new Error('The frameId "' + t1 + '" does not exist in the texture cache');
                        return e;
                    }, e.fromCanvas = function(t1, r) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "canvas";
                        return new e(l.default.fromCanvas(t1, r, n));
                    }, e.fromVideo = function(t1, r) {
                        return "string" == typeof t1 ? e.fromVideoUrl(t1, r) : new e(d.default.fromVideo(t1, r));
                    }, e.fromVideoUrl = function(t1, r) {
                        return new e(d.default.fromUrl(t1, r));
                    }, e.from = function(t1) {
                        if ("string" == typeof t1) {
                            var r = m.TextureCache[t1];
                            if (!r) return null !== t1.match(/\.(mp4|webm|ogg|h264|avi|mov)$/) ? e.fromVideoUrl(t1) : e.fromImage(t1);
                            return r;
                        }
                        return t1 instanceof HTMLImageElement ? new e(l.default.from(t1)) : t1 instanceof HTMLCanvasElement ? e.fromCanvas(t1, b.default.SCALE_MODE, "HTMLCanvasElement") : t1 instanceof HTMLVideoElement ? e.fromVideo(t1) : t1 instanceof l.default ? new e(t1) : t1;
                    }, e.fromLoader = function(t1, r, n) {
                        var i = new l.default(t1, void 0, (0, m.getResolutionOfUrl)(r)), o = new e(i);
                        return i.imageUrl = r, n || (n = r), l.default.addToCache(o.baseTexture, n), e.addToCache(o, n), n !== r && (l.default.addToCache(o.baseTexture, r), e.addToCache(o, r)), o;
                    }, e.addToCache = function(t1, e) {
                        e && (-1 === t1.textureCacheIds.indexOf(e) && t1.textureCacheIds.push(e), m.TextureCache[e] = t1);
                    }, e.removeFromCache = function(t1) {
                        if ("string" == typeof t1) {
                            var e = m.TextureCache[t1];
                            if (e) {
                                var r = e.textureCacheIds.indexOf(t1);
                                return r > -1 && e.textureCacheIds.splice(r, 1), delete m.TextureCache[t1], e;
                            }
                        } else if (t1 && t1.textureCacheIds) {
                            for(var n = 0; n < t1.textureCacheIds.length; ++n)m.TextureCache[t1.textureCacheIds[n]] === t1 && delete m.TextureCache[t1.textureCacheIds[n]];
                            return t1.textureCacheIds.length = 0, t1;
                        }
                        return null;
                    }, u(e, [
                        {
                            key: "frame",
                            get: function() {
                                return this._frame;
                            },
                            set: function(t1) {
                                if (this._frame = t1, this.noFrame = !1, t1.x + t1.width > this.baseTexture.width || t1.y + t1.height > this.baseTexture.height) throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: X: " + t1.x + " + " + t1.width + " = " + (t1.x + t1.width) + " > " + this.baseTexture.width + " Y: " + t1.y + " + " + t1.height + " = " + (t1.y + t1.height) + " > " + this.baseTexture.height);
                                this.valid = t1 && t1.width && t1.height && this.baseTexture.hasLoaded, this.trim || this.rotate || (this.orig = t1), this.valid && this._updateUvs();
                            }
                        },
                        {
                            key: "rotate",
                            get: function() {
                                return this._rotate;
                            },
                            set: function(t1) {
                                this._rotate = t1, this.valid && this._updateUvs();
                            }
                        },
                        {
                            key: "width",
                            get: function() {
                                return this.orig.width;
                            }
                        },
                        {
                            key: "height",
                            get: function() {
                                return this.orig.height;
                            }
                        }
                    ]), e;
                }(y.default);
                r.default = x, x.EMPTY = new x(new l.default), a(x.EMPTY), a(x.EMPTY.baseTexture), x.WHITE = function() {
                    var t1 = document.createElement("canvas");
                    t1.width = 10, t1.height = 10;
                    var e = t1.getContext("2d");
                    return e.fillStyle = "white", e.fillRect(0, 0, 10, 10), new x(new l.default(t1));
                }(), a(x.WHITE), a(x.WHITE.baseTexture);
            },
            {
                "../math": 70,
                "../settings": 101,
                "../utils": 124,
                "./BaseTexture": 112,
                "./TextureUvs": 116,
                "./VideoBaseTexture": 117,
                eventemitter3: 3
            }
        ],
        116: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = t1("../math/GroupD8"), o = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(i), s = function() {
                    function t1() {
                        n(this, t1), this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsUint32 = new Uint32Array(4);
                    }
                    return t1.prototype.set = function(t1, e, r) {
                        var n = e.width, i = e.height;
                        if (r) {
                            var s = t1.width / 2 / n, a = t1.height / 2 / i, u = t1.x / n + s, h = t1.y / i + a;
                            r = o.default.add(r, o.default.NW), this.x0 = u + s * o.default.uX(r), this.y0 = h + a * o.default.uY(r), r = o.default.add(r, 2), this.x1 = u + s * o.default.uX(r), this.y1 = h + a * o.default.uY(r), r = o.default.add(r, 2), this.x2 = u + s * o.default.uX(r), this.y2 = h + a * o.default.uY(r), r = o.default.add(r, 2), this.x3 = u + s * o.default.uX(r), this.y3 = h + a * o.default.uY(r);
                        } else this.x0 = t1.x / n, this.y0 = t1.y / i, this.x1 = (t1.x + t1.width) / n, this.y1 = t1.y / i, this.x2 = (t1.x + t1.width) / n, this.y2 = (t1.y + t1.height) / i, this.x3 = t1.x / n, this.y3 = (t1.y + t1.height) / i;
                        this.uvsUint32[0] = (65535 * this.y0 & 65535) << 16 | 65535 * this.x0 & 65535, this.uvsUint32[1] = (65535 * this.y1 & 65535) << 16 | 65535 * this.x1 & 65535, this.uvsUint32[2] = (65535 * this.y2 & 65535) << 16 | 65535 * this.x2 & 65535, this.uvsUint32[3] = (65535 * this.y3 & 65535) << 16 | 65535 * this.x3 & 65535;
                    }, t1;
                }();
                r.default = s;
            },
            {
                "../math/GroupD8": 66
            }
        ],
        117: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function i(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function o(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                function s(t1, e) {
                    e || (e = "video/" + t1.substr(t1.lastIndexOf(".") + 1));
                    var r = document.createElement("source");
                    return r.src = t1, r.type = e, r;
                }
                r.__esModule = !0;
                var a = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), u = t1("./BaseTexture"), h = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(u), l = t1("../utils"), c = t1("../ticker"), d = t1("../const"), f = function(t1) {
                    function e(r, o) {
                        if (n(this, e), !r) throw new Error("No video source element specified.");
                        (r.readyState === r.HAVE_ENOUGH_DATA || r.readyState === r.HAVE_FUTURE_DATA) && r.width && r.height && (r.complete = !0);
                        var s = i(this, t1.call(this, r, o));
                        return s.width = r.videoWidth, s.height = r.videoHeight, s._autoUpdate = !0, s._isAutoUpdating = !1, s.autoPlay = !0, s.update = s.update.bind(s), s._onCanPlay = s._onCanPlay.bind(s), r.addEventListener("play", s._onPlayStart.bind(s)), r.addEventListener("pause", s._onPlayStop.bind(s)), s.hasLoaded = !1, s.__loaded = !1, s._isSourceReady() ? s._onCanPlay() : (r.addEventListener("canplay", s._onCanPlay), r.addEventListener("canplaythrough", s._onCanPlay)), s;
                    }
                    return o(e, t1), e.prototype._isSourcePlaying = function() {
                        var t1 = this.source;
                        return t1.currentTime > 0 && !1 === t1.paused && !1 === t1.ended && t1.readyState > 2;
                    }, e.prototype._isSourceReady = function() {
                        return 3 === this.source.readyState || 4 === this.source.readyState;
                    }, e.prototype._onPlayStart = function() {
                        this.hasLoaded || this._onCanPlay(), !this._isAutoUpdating && this.autoUpdate && (c.shared.add(this.update, this, d.UPDATE_PRIORITY.HIGH), this._isAutoUpdating = !0);
                    }, e.prototype._onPlayStop = function() {
                        this._isAutoUpdating && (c.shared.remove(this.update, this), this._isAutoUpdating = !1);
                    }, e.prototype._onCanPlay = function() {
                        this.hasLoaded = !0, this.source && (this.source.removeEventListener("canplay", this._onCanPlay), this.source.removeEventListener("canplaythrough", this._onCanPlay), this.width = this.source.videoWidth, this.height = this.source.videoHeight, this.__loaded || (this.__loaded = !0, this.emit("loaded", this)), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && this.source.play());
                    }, e.prototype.destroy = function() {
                        this._isAutoUpdating && c.shared.remove(this.update, this), this.source && this.source._pixiId && (h.default.removeFromCache(this.source._pixiId), delete this.source._pixiId), t1.prototype.destroy.call(this);
                    }, e.fromVideo = function(t1, r) {
                        t1._pixiId || (t1._pixiId = "video_" + (0, l.uid)());
                        var n = l.BaseTextureCache[t1._pixiId];
                        return n || (n = new e(t1, r), h.default.addToCache(n, t1._pixiId)), n;
                    }, e.fromUrl = function(t1, r) {
                        var n = document.createElement("video");
                        if (n.setAttribute("webkit-playsinline", ""), n.setAttribute("playsinline", ""), Array.isArray(t1)) for(var i = 0; i < t1.length; ++i)n.appendChild(s(t1[i].src || t1[i], t1[i].mime));
                        else n.appendChild(s(t1.src || t1, t1.mime));
                        return n.load(), e.fromVideo(n, r);
                    }, a(e, [
                        {
                            key: "autoUpdate",
                            get: function() {
                                return this._autoUpdate;
                            },
                            set: function(t1) {
                                t1 !== this._autoUpdate && (this._autoUpdate = t1, !this._autoUpdate && this._isAutoUpdating ? (c.shared.remove(this.update, this), this._isAutoUpdating = !1) : this._autoUpdate && !this._isAutoUpdating && (c.shared.add(this.update, this, d.UPDATE_PRIORITY.HIGH), this._isAutoUpdating = !0));
                            }
                        }
                    ]), e;
                }(h.default);
                r.default = f, f.fromUrls = f.fromUrl;
            },
            {
                "../const": 46,
                "../ticker": 120,
                "../utils": 124,
                "./BaseTexture": 112
            }
        ],
        118: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var o = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), s = t1("../settings"), a = n(s), u = t1("../const"), h = t1("./TickerListener"), l = n(h), c = function() {
                    function t1() {
                        var e = this;
                        i(this, t1), this._head = new l.default(null, null, 1 / 0), this._requestId = null, this._maxElapsedMS = 100, this.autoStart = !1, this.deltaTime = 1, this.elapsedMS = 1 / a.default.TARGET_FPMS, this.lastTime = -1, this.speed = 1, this.started = !1, this._tick = function(t1) {
                            e._requestId = null, e.started && (e.update(t1), e.started && null === e._requestId && e._head.next && (e._requestId = requestAnimationFrame(e._tick)));
                        };
                    }
                    return t1.prototype._requestIfNeeded = function() {
                        null === this._requestId && this._head.next && (this.lastTime = performance.now(), this._requestId = requestAnimationFrame(this._tick));
                    }, t1.prototype._cancelIfNeeded = function() {
                        null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null);
                    }, t1.prototype._startIfPossible = function() {
                        this.started ? this._requestIfNeeded() : this.autoStart && this.start();
                    }, t1.prototype.add = function(t1, e) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.UPDATE_PRIORITY.NORMAL;
                        return this._addListener(new l.default(t1, e, r));
                    }, t1.prototype.addOnce = function(t1, e) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.UPDATE_PRIORITY.NORMAL;
                        return this._addListener(new l.default(t1, e, r, !0));
                    }, t1.prototype._addListener = function(t1) {
                        var e = this._head.next, r = this._head;
                        if (e) {
                            for(; e;){
                                if (t1.priority > e.priority) {
                                    t1.connect(r);
                                    break;
                                }
                                r = e, e = e.next;
                            }
                            t1.previous || t1.connect(r);
                        } else t1.connect(r);
                        return this._startIfPossible(), this;
                    }, t1.prototype.remove = function(t1, e) {
                        for(var r = this._head.next; r;)r = r.match(t1, e) ? r.destroy() : r.next;
                        return this._head.next || this._cancelIfNeeded(), this;
                    }, t1.prototype.start = function() {
                        this.started || (this.started = !0, this._requestIfNeeded());
                    }, t1.prototype.stop = function() {
                        this.started && (this.started = !1, this._cancelIfNeeded());
                    }, t1.prototype.destroy = function() {
                        this.stop();
                        for(var t1 = this._head.next; t1;)t1 = t1.destroy(!0);
                        this._head.destroy(), this._head = null;
                    }, t1.prototype.update = function() {
                        var t1 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now(), e = void 0;
                        if (t1 > this.lastTime) {
                            e = this.elapsedMS = t1 - this.lastTime, e > this._maxElapsedMS && (e = this._maxElapsedMS), this.deltaTime = e * a.default.TARGET_FPMS * this.speed;
                            for(var r = this._head, n = r.next; n;)n = n.emit(this.deltaTime);
                            r.next || this._cancelIfNeeded();
                        } else this.deltaTime = this.elapsedMS = 0;
                        this.lastTime = t1;
                    }, o(t1, [
                        {
                            key: "FPS",
                            get: function() {
                                return 1e3 / this.elapsedMS;
                            }
                        },
                        {
                            key: "minFPS",
                            get: function() {
                                return 1e3 / this._maxElapsedMS;
                            },
                            set: function(t1) {
                                var e = Math.min(Math.max(0, t1) / 1e3, a.default.TARGET_FPMS);
                                this._maxElapsedMS = 1 / e;
                            }
                        }
                    ]), t1;
                }();
                r.default = c;
            },
            {
                "../const": 46,
                "../settings": 101,
                "./TickerListener": 119
            }
        ],
        119: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = function() {
                    function t1(e) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        n(this, t1), this.fn = e, this.context = r, this.priority = i, this.once = o, this.next = null, this.previous = null, this._destroyed = !1;
                    }
                    return t1.prototype.match = function(t1, e) {
                        return e = e || null, this.fn === t1 && this.context === e;
                    }, t1.prototype.emit = function(t1) {
                        this.fn && (this.context ? this.fn.call(this.context, t1) : this.fn(t1));
                        var e = this.next;
                        return this.once && this.destroy(!0), this._destroyed && (this.next = null), e;
                    }, t1.prototype.connect = function(t1) {
                        this.previous = t1, t1.next && (t1.next.previous = this), this.next = t1.next, t1.next = this;
                    }, t1.prototype.destroy = function() {
                        var t1 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this._destroyed = !0, this.fn = null, this.context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
                        var e = this.previous;
                        return this.next = t1 ? null : e, this.previous = null, e;
                    }, t1;
                }();
                r.default = i;
            },
            {}
        ],
        120: [
            function(t1, e, r) {
                "use strict";
                r.__esModule = !0, r.Ticker = r.shared = void 0;
                var n = t1("./Ticker"), i = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(n), o = new i.default;
                o.autoStart = !0, o.destroy = function() {}, r.shared = o, r.Ticker = i.default;
            },
            {
                "./Ticker": 118
            }
        ],
        121: [
            function(t1, e, r) {
                "use strict";
                function n() {
                    return !(!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform));
                }
                r.__esModule = !0, r.default = n;
            },
            {}
        ],
        122: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    for(var e = 6 * t1, r = new Uint16Array(e), n = 0, i = 0; n < e; n += 6, i += 4)r[n + 0] = i + 0, r[n + 1] = i + 1, r[n + 2] = i + 2, r[n + 3] = i + 0, r[n + 4] = i + 2, r[n + 5] = i + 3;
                    return r;
                }
                r.__esModule = !0, r.default = n;
            },
            {}
        ],
        123: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location;
                    if (0 === t1.indexOf("data:")) return "";
                    e = e || window.location, s || (s = document.createElement("a")), s.href = t1, t1 = o.default.parse(s.href);
                    var r = !t1.port && "" === e.port || t1.port === e.port;
                    return t1.hostname === e.hostname && r && t1.protocol === e.protocol ? "" : "anonymous";
                }
                r.__esModule = !0, r.default = n;
                var i = t1("url"), o = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(i), s = void 0;
            },
            {
                url: 29
            }
        ],
        124: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }
                function i(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function o() {
                    return ++k;
                }
                function s(t1, e) {
                    return e = e || [], e[0] = (t1 >> 16 & 255) / 255, e[1] = (t1 >> 8 & 255) / 255, e[2] = (255 & t1) / 255, e;
                }
                function a(t1) {
                    return t1 = t1.toString(16), "#" + (t1 = "000000".substr(0, 6 - t1.length) + t1);
                }
                function u(t1) {
                    return (255 * t1[0] << 16) + (255 * t1[1] << 8) + (255 * t1[2] | 0);
                }
                function h(t1, e) {
                    var r = S.default.RETINA_PREFIX.exec(t1);
                    return r ? parseFloat(r[1]) : void 0 !== e ? e : 1;
                }
                function l(t1) {
                    var e = w.DATA_URI.exec(t1);
                    if (e) return {
                        mediaType: e[1] ? e[1].toLowerCase() : void 0,
                        subType: e[2] ? e[2].toLowerCase() : void 0,
                        encoding: e[3] ? e[3].toLowerCase() : void 0,
                        data: e[4]
                    };
                }
                function c(t1) {
                    var e = w.URL_FILE_EXTENSION.exec(t1);
                    if (e) return e[1].toLowerCase();
                }
                function d(t1) {
                    var e = w.SVG_SIZE.exec(t1), r = {};
                    return e && (r[e[1]] = Math.round(parseFloat(e[3])), r[e[5]] = Math.round(parseFloat(e[7]))), r;
                }
                function f() {
                    j = !0;
                }
                function p(t1) {
                    if (!j) {
                        if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                            var e = [
                                "\n %c %c %c PixiJS " + w.VERSION + " - ✰ " + t1 + " ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n",
                                "background: #ff66a5; padding:5px 0;",
                                "background: #ff66a5; padding:5px 0;",
                                "color: #ff66a5; background: #030307; padding:5px 0;",
                                "background: #ff66a5; padding:5px 0;",
                                "background: #ffc3dc; padding:5px 0;",
                                "background: #ff66a5; padding:5px 0;",
                                "color: #ff2424; background: #fff; padding:5px 0;",
                                "color: #ff2424; background: #fff; padding:5px 0;",
                                "color: #ff2424; background: #fff; padding:5px 0;"
                            ];
                            window.console.log.apply(console, e);
                        } else window.console && window.console.log("PixiJS " + w.VERSION + " - " + t1 + " - http://www.pixijs.com/");
                        j = !0;
                    }
                }
                function v() {
                    var t1 = {
                        stencil: !0,
                        failIfMajorPerformanceCaveat: !0
                    };
                    try {
                        if (!window.WebGLRenderingContext) return !1;
                        var e = document.createElement("canvas"), r = e.getContext("webgl", t1) || e.getContext("experimental-webgl", t1), n = !(!r || !r.getContextAttributes().stencil);
                        if (r) {
                            var i = r.getExtension("WEBGL_lose_context");
                            i && i.loseContext();
                        }
                        return r = null, n;
                    } catch (t2) {
                        return !1;
                    }
                }
                function y(t1) {
                    return 0 === t1 ? 0 : t1 < 0 ? -1 : 1;
                }
                function g() {
                    var t1 = void 0;
                    for(t1 in U)U[t1].destroy();
                    for(t1 in X)X[t1].destroy();
                }
                function m() {
                    var t1 = void 0;
                    for(t1 in U)delete U[t1];
                    for(t1 in X)delete X[t1];
                }
                function _(t1, e) {
                    return G[e ? 1 : 0][t1];
                }
                function b(t1, e) {
                    if (1 === e) return (255 * e << 24) + t1;
                    if (0 === e) return 0;
                    var r = t1 >> 16 & 255, n = t1 >> 8 & 255, i = 255 & t1;
                    return r = r * e + .5 | 0, n = n * e + .5 | 0, i = i * e + .5 | 0, (255 * e << 24) + (r << 16) + (n << 8) + i;
                }
                function x(t1, e, r, n) {
                    return r = r || new Float32Array(4), n || void 0 === n ? (r[0] = t1[0] * e, r[1] = t1[1] * e, r[2] = t1[2] * e) : (r[0] = t1[0], r[1] = t1[1], r[2] = t1[2]), r[3] = e, r;
                }
                function T(t1, e, r, n) {
                    return r = r || new Float32Array(4), r[0] = (t1 >> 16 & 255) / 255, r[1] = (t1 >> 8 & 255) / 255, r[2] = (255 & t1) / 255, (n || void 0 === n) && (r[0] *= e, r[1] *= e, r[2] *= e), r[3] = e, r;
                }
                r.__esModule = !0, r.premultiplyBlendMode = r.BaseTextureCache = r.TextureCache = r.mixins = r.pluginTarget = r.EventEmitter = r.removeItems = r.isMobile = void 0, r.uid = o, r.hex2rgb = s, r.hex2string = a, r.rgb2hex = u, r.getResolutionOfUrl = h, r.decomposeDataUri = l, r.getUrlFileExtension = c, r.getSvgSize = d, r.skipHello = f, r.sayHello = p, r.isWebGLSupported = v, r.sign = y, r.destroyTextureCache = g, r.clearTextureCache = m, r.correctBlendMode = _, r.premultiplyTint = b, r.premultiplyRgba = x, r.premultiplyTintToRgba = T;
                var w = t1("../const"), E = t1("../settings"), S = i(E), O = t1("eventemitter3"), P = i(O), M = t1("./pluginTarget"), C = i(M), R = t1("./mixin"), A = n(R), I = t1("ismobilejs"), D = n(I), L = t1("remove-array-items"), N = i(L), F = t1("./mapPremultipliedBlendModes"), B = i(F), k = 0, j = !1;
                r.isMobile = D, r.removeItems = N.default, r.EventEmitter = P.default, r.pluginTarget = C.default, r.mixins = A;
                var U = r.TextureCache = Object.create(null), X = r.BaseTextureCache = Object.create(null), G = r.premultiplyBlendMode = (0, B.default)();
            },
            {
                "../const": 46,
                "../settings": 101,
                "./mapPremultipliedBlendModes": 125,
                "./mixin": 127,
                "./pluginTarget": 128,
                eventemitter3: 3,
                ismobilejs: 4,
                "remove-array-items": 31
            }
        ],
        125: [
            function(t1, e, r) {
                "use strict";
                function n() {
                    for(var t1 = [], e = [], r = 0; r < 32; r++)t1[r] = r, e[r] = r;
                    t1[i.BLEND_MODES.NORMAL_NPM] = i.BLEND_MODES.NORMAL, t1[i.BLEND_MODES.ADD_NPM] = i.BLEND_MODES.ADD, t1[i.BLEND_MODES.SCREEN_NPM] = i.BLEND_MODES.SCREEN, e[i.BLEND_MODES.NORMAL] = i.BLEND_MODES.NORMAL_NPM, e[i.BLEND_MODES.ADD] = i.BLEND_MODES.ADD_NPM, e[i.BLEND_MODES.SCREEN] = i.BLEND_MODES.SCREEN_NPM;
                    var n = [];
                    return n.push(e), n.push(t1), n;
                }
                r.__esModule = !0, r.default = n;
                var i = t1("../const");
            },
            {
                "../const": 46
            }
        ],
        126: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return o.default.tablet || o.default.phone ? 4 : t1;
                }
                r.__esModule = !0, r.default = n;
                var i = t1("ismobilejs"), o = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(i);
            },
            {
                ismobilejs: 4
            }
        ],
        127: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (t1 && e) for(var r = Object.keys(e), n = 0; n < r.length; ++n){
                        var i = r[n];
                        Object.defineProperty(t1, i, Object.getOwnPropertyDescriptor(e, i));
                    }
                }
                function i(t1, e) {
                    s.push(t1, e);
                }
                function o() {
                    for(var t1 = 0; t1 < s.length; t1 += 2)n(s[t1], s[t1 + 1]);
                    s.length = 0;
                }
                r.__esModule = !0, r.mixin = n, r.delayMixin = i, r.performMixins = o;
                var s = [];
            },
            {}
        ],
        128: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    t1.__plugins = {}, t1.registerPlugin = function(e, r) {
                        t1.__plugins[e] = r;
                    }, t1.prototype.initPlugins = function() {
                        this.plugins = this.plugins || {};
                        for(var e in t1.__plugins)this.plugins[e] = new t1.__plugins[e](this);
                    }, t1.prototype.destroyPlugins = function() {
                        for(var t1 in this.plugins)this.plugins[t1].destroy(), this.plugins[t1] = null;
                        this.plugins = null;
                    };
                }
                r.__esModule = !0, r.default = {
                    mixin: function(t1) {
                        n(t1);
                    }
                };
            },
            {}
        ],
        129: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    var e = t1.width, r = t1.height, n = t1.getContext("2d"), i = n.getImageData(0, 0, e, r), o = i.data, s = o.length, a = {
                        top: null,
                        left: null,
                        right: null,
                        bottom: null
                    }, u = void 0, h = void 0, l = void 0;
                    for(u = 0; u < s; u += 4)0 !== o[u + 3] && (h = u / 4 % e, l = ~~(u / 4 / e), null === a.top && (a.top = l), null === a.left ? a.left = h : h < a.left && (a.left = h), null === a.right ? a.right = h + 1 : a.right < h && (a.right = h + 1), null === a.bottom ? a.bottom = l : a.bottom < l && (a.bottom = l));
                    return e = a.right - a.left, r = a.bottom - a.top + 1, {
                        height: r,
                        width: e,
                        data: n.getImageData(a.left, a.top, e, r)
                    };
                }
                r.__esModule = !0, r.default = n;
            },
            {}
        ],
        130: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {}
                function i(t1) {
                    var e = t1.mesh, r = t1.particles, i = t1.extras, o = t1.filters, s = t1.prepare, a = t1.loaders, u = t1.interaction;
                    Object.defineProperties(t1, {
                        SpriteBatch: {
                            get: function() {
                                throw new ReferenceError("SpriteBatch does not exist any more, please use the new ParticleContainer instead.");
                            }
                        },
                        AssetLoader: {
                            get: function() {
                                throw new ReferenceError("The loader system was overhauled in PixiJS v3, please see the new PIXI.loaders.Loader class.");
                            }
                        },
                        Stage: {
                            get: function() {
                                return n("You do not need to use a PIXI Stage any more, you can simply render any container."), t1.Container;
                            }
                        },
                        DisplayObjectContainer: {
                            get: function() {
                                return n("DisplayObjectContainer has been shortened to Container, please use Container from now on."), t1.Container;
                            }
                        },
                        Strip: {
                            get: function() {
                                return n("The Strip class has been renamed to Mesh and moved to mesh.Mesh, please use mesh.Mesh from now on."), e.Mesh;
                            }
                        },
                        Rope: {
                            get: function() {
                                return n("The Rope class has been moved to mesh.Rope, please use mesh.Rope from now on."), e.Rope;
                            }
                        },
                        ParticleContainer: {
                            get: function() {
                                return n("The ParticleContainer class has been moved to particles.ParticleContainer, please use particles.ParticleContainer from now on."), r.ParticleContainer;
                            }
                        },
                        MovieClip: {
                            get: function() {
                                return n("The MovieClip class has been moved to extras.AnimatedSprite, please use extras.AnimatedSprite."), i.AnimatedSprite;
                            }
                        },
                        TilingSprite: {
                            get: function() {
                                return n("The TilingSprite class has been moved to extras.TilingSprite, please use extras.TilingSprite from now on."), i.TilingSprite;
                            }
                        },
                        BitmapText: {
                            get: function() {
                                return n("The BitmapText class has been moved to extras.BitmapText, please use extras.BitmapText from now on."), i.BitmapText;
                            }
                        },
                        blendModes: {
                            get: function() {
                                return n("The blendModes has been moved to BLEND_MODES, please use BLEND_MODES from now on."), t1.BLEND_MODES;
                            }
                        },
                        scaleModes: {
                            get: function() {
                                return n("The scaleModes has been moved to SCALE_MODES, please use SCALE_MODES from now on."), t1.SCALE_MODES;
                            }
                        },
                        BaseTextureCache: {
                            get: function() {
                                return n("The BaseTextureCache class has been moved to utils.BaseTextureCache, please use utils.BaseTextureCache from now on."), t1.utils.BaseTextureCache;
                            }
                        },
                        TextureCache: {
                            get: function() {
                                return n("The TextureCache class has been moved to utils.TextureCache, please use utils.TextureCache from now on."), t1.utils.TextureCache;
                            }
                        },
                        math: {
                            get: function() {
                                return n("The math namespace is deprecated, please access members already accessible on PIXI."), t1;
                            }
                        },
                        AbstractFilter: {
                            get: function() {
                                return n("AstractFilter has been renamed to Filter, please use PIXI.Filter"), t1.Filter;
                            }
                        },
                        TransformManual: {
                            get: function() {
                                return n("TransformManual has been renamed to TransformBase, please update your pixi-spine"), t1.TransformBase;
                            }
                        },
                        TARGET_FPMS: {
                            get: function() {
                                return n("PIXI.TARGET_FPMS has been deprecated, please use PIXI.settings.TARGET_FPMS"), t1.settings.TARGET_FPMS;
                            },
                            set: function(e) {
                                n("PIXI.TARGET_FPMS has been deprecated, please use PIXI.settings.TARGET_FPMS"), t1.settings.TARGET_FPMS = e;
                            }
                        },
                        FILTER_RESOLUTION: {
                            get: function() {
                                return n("PIXI.FILTER_RESOLUTION has been deprecated, please use PIXI.settings.FILTER_RESOLUTION"), t1.settings.FILTER_RESOLUTION;
                            },
                            set: function(e) {
                                n("PIXI.FILTER_RESOLUTION has been deprecated, please use PIXI.settings.FILTER_RESOLUTION"), t1.settings.FILTER_RESOLUTION = e;
                            }
                        },
                        RESOLUTION: {
                            get: function() {
                                return n("PIXI.RESOLUTION has been deprecated, please use PIXI.settings.RESOLUTION"), t1.settings.RESOLUTION;
                            },
                            set: function(e) {
                                n("PIXI.RESOLUTION has been deprecated, please use PIXI.settings.RESOLUTION"), t1.settings.RESOLUTION = e;
                            }
                        },
                        MIPMAP_TEXTURES: {
                            get: function() {
                                return n("PIXI.MIPMAP_TEXTURES has been deprecated, please use PIXI.settings.MIPMAP_TEXTURES"), t1.settings.MIPMAP_TEXTURES;
                            },
                            set: function(e) {
                                n("PIXI.MIPMAP_TEXTURES has been deprecated, please use PIXI.settings.MIPMAP_TEXTURES"), t1.settings.MIPMAP_TEXTURES = e;
                            }
                        },
                        SPRITE_BATCH_SIZE: {
                            get: function() {
                                return n("PIXI.SPRITE_BATCH_SIZE has been deprecated, please use PIXI.settings.SPRITE_BATCH_SIZE"), t1.settings.SPRITE_BATCH_SIZE;
                            },
                            set: function(e) {
                                n("PIXI.SPRITE_BATCH_SIZE has been deprecated, please use PIXI.settings.SPRITE_BATCH_SIZE"), t1.settings.SPRITE_BATCH_SIZE = e;
                            }
                        },
                        SPRITE_MAX_TEXTURES: {
                            get: function() {
                                return n("PIXI.SPRITE_MAX_TEXTURES has been deprecated, please use PIXI.settings.SPRITE_MAX_TEXTURES"), t1.settings.SPRITE_MAX_TEXTURES;
                            },
                            set: function(e) {
                                n("PIXI.SPRITE_MAX_TEXTURES has been deprecated, please use PIXI.settings.SPRITE_MAX_TEXTURES"), t1.settings.SPRITE_MAX_TEXTURES = e;
                            }
                        },
                        RETINA_PREFIX: {
                            get: function() {
                                return n("PIXI.RETINA_PREFIX has been deprecated, please use PIXI.settings.RETINA_PREFIX"), t1.settings.RETINA_PREFIX;
                            },
                            set: function(e) {
                                n("PIXI.RETINA_PREFIX has been deprecated, please use PIXI.settings.RETINA_PREFIX"), t1.settings.RETINA_PREFIX = e;
                            }
                        },
                        DEFAULT_RENDER_OPTIONS: {
                            get: function() {
                                return n("PIXI.DEFAULT_RENDER_OPTIONS has been deprecated, please use PIXI.settings.DEFAULT_RENDER_OPTIONS"), t1.settings.RENDER_OPTIONS;
                            }
                        }
                    });
                    for(var h = [
                        {
                            parent: "TRANSFORM_MODE",
                            target: "TRANSFORM_MODE"
                        },
                        {
                            parent: "GC_MODES",
                            target: "GC_MODE"
                        },
                        {
                            parent: "WRAP_MODES",
                            target: "WRAP_MODE"
                        },
                        {
                            parent: "SCALE_MODES",
                            target: "SCALE_MODE"
                        },
                        {
                            parent: "PRECISION",
                            target: "PRECISION_FRAGMENT"
                        }
                    ], l = 0; l < h.length; l++)!function(e) {
                        var r = h[e];
                        Object.defineProperty(t1[r.parent], "DEFAULT", {
                            get: function() {
                                return n("PIXI." + r.parent + ".DEFAULT has been deprecated, please use PIXI.settings." + r.target), t1.settings[r.target];
                            },
                            set: function(e) {
                                n("PIXI." + r.parent + ".DEFAULT has been deprecated, please use PIXI.settings." + r.target), t1.settings[r.target] = e;
                            }
                        });
                    }(l);
                    Object.defineProperties(t1.settings, {
                        PRECISION: {
                            get: function() {
                                return n("PIXI.settings.PRECISION has been deprecated, please use PIXI.settings.PRECISION_FRAGMENT"), t1.settings.PRECISION_FRAGMENT;
                            },
                            set: function(e) {
                                n("PIXI.settings.PRECISION has been deprecated, please use PIXI.settings.PRECISION_FRAGMENT"), t1.settings.PRECISION_FRAGMENT = e;
                            }
                        }
                    }), i.AnimatedSprite && Object.defineProperties(i, {
                        MovieClip: {
                            get: function() {
                                return n("The MovieClip class has been renamed to AnimatedSprite, please use AnimatedSprite from now on."), i.AnimatedSprite;
                            }
                        }
                    }), t1.DisplayObject.prototype.generateTexture = function(t1, e, r) {
                        return n("generateTexture has moved to the renderer, please use renderer.generateTexture(displayObject)"), t1.generateTexture(this, e, r);
                    }, t1.Graphics.prototype.generateTexture = function(t1, e) {
                        return n("graphics generate texture has moved to the renderer. Or to render a graphics to a texture using canvas please use generateCanvasTexture"), this.generateCanvasTexture(t1, e);
                    }, t1.RenderTexture.prototype.render = function(t1, e, r, i) {
                        this.legacyRenderer.render(t1, this, r, e, !i), n("RenderTexture.render is now deprecated, please use renderer.render(displayObject, renderTexture)");
                    }, t1.RenderTexture.prototype.getImage = function(t1) {
                        return n("RenderTexture.getImage is now deprecated, please use renderer.extract.image(target)"), this.legacyRenderer.extract.image(t1);
                    }, t1.RenderTexture.prototype.getBase64 = function(t1) {
                        return n("RenderTexture.getBase64 is now deprecated, please use renderer.extract.base64(target)"), this.legacyRenderer.extract.base64(t1);
                    }, t1.RenderTexture.prototype.getCanvas = function(t1) {
                        return n("RenderTexture.getCanvas is now deprecated, please use renderer.extract.canvas(target)"), this.legacyRenderer.extract.canvas(t1);
                    }, t1.RenderTexture.prototype.getPixels = function(t1) {
                        return n("RenderTexture.getPixels is now deprecated, please use renderer.extract.pixels(target)"), this.legacyRenderer.pixels(t1);
                    }, t1.Sprite.prototype.setTexture = function(t1) {
                        this.texture = t1, n("setTexture is now deprecated, please use the texture property, e.g : sprite.texture = texture;");
                    }, i.BitmapText && (i.BitmapText.prototype.setText = function(t1) {
                        this.text = t1, n("setText is now deprecated, please use the text property, e.g : myBitmapText.text = 'my text';");
                    }), t1.Text.prototype.setText = function(t1) {
                        this.text = t1, n("setText is now deprecated, please use the text property, e.g : myText.text = 'my text';");
                    }, t1.Text.calculateFontProperties = function(e) {
                        return n("Text.calculateFontProperties is now deprecated, please use the TextMetrics.measureFont"), t1.TextMetrics.measureFont(e);
                    }, Object.defineProperties(t1.Text, {
                        fontPropertiesCache: {
                            get: function() {
                                return n("Text.fontPropertiesCache is deprecated"), t1.TextMetrics._fonts;
                            }
                        },
                        fontPropertiesCanvas: {
                            get: function() {
                                return n("Text.fontPropertiesCanvas is deprecated"), t1.TextMetrics._canvas;
                            }
                        },
                        fontPropertiesContext: {
                            get: function() {
                                return n("Text.fontPropertiesContext is deprecated"), t1.TextMetrics._context;
                            }
                        }
                    }), t1.Text.prototype.setStyle = function(t1) {
                        this.style = t1, n("setStyle is now deprecated, please use the style property, e.g : myText.style = style;");
                    }, t1.Text.prototype.determineFontProperties = function(e) {
                        return n("determineFontProperties is now deprecated, please use TextMetrics.measureFont method"), t1.TextMetrics.measureFont(e);
                    }, t1.Text.getFontStyle = function(e) {
                        return n("getFontStyle is now deprecated, please use TextStyle.toFontString() instead"), e = e || {}, e instanceof t1.TextStyle || (e = new t1.TextStyle(e)), e.toFontString();
                    }, Object.defineProperties(t1.TextStyle.prototype, {
                        font: {
                            get: function() {
                                n("text style property 'font' is now deprecated, please use the 'fontFamily', 'fontSize', 'fontStyle', 'fontVariant' and 'fontWeight' properties from now on");
                                var t1 = "number" == typeof this._fontSize ? this._fontSize + "px" : this._fontSize;
                                return this._fontStyle + " " + this._fontVariant + " " + this._fontWeight + " " + t1 + " " + this._fontFamily;
                            },
                            set: function(t1) {
                                n("text style property 'font' is now deprecated, please use the 'fontFamily','fontSize',fontStyle','fontVariant' and 'fontWeight' properties from now on"), t1.indexOf("italic") > 1 ? this._fontStyle = "italic" : t1.indexOf("oblique") > -1 ? this._fontStyle = "oblique" : this._fontStyle = "normal", t1.indexOf("small-caps") > -1 ? this._fontVariant = "small-caps" : this._fontVariant = "normal";
                                var e = t1.split(" "), r = -1;
                                this._fontSize = 26;
                                for(var i = 0; i < e.length; ++i)if (e[i].match(/(px|pt|em|%)/)) {
                                    r = i, this._fontSize = e[i];
                                    break;
                                }
                                this._fontWeight = "normal";
                                for(var o = 0; o < r; ++o)if (e[o].match(/(bold|bolder|lighter|100|200|300|400|500|600|700|800|900)/)) {
                                    this._fontWeight = e[o];
                                    break;
                                }
                                if (r > -1 && r < e.length - 1) {
                                    this._fontFamily = "";
                                    for(var s = r + 1; s < e.length; ++s)this._fontFamily += e[s] + " ";
                                    this._fontFamily = this._fontFamily.slice(0, -1);
                                } else this._fontFamily = "Arial";
                                this.styleID++;
                            }
                        }
                    }), t1.Texture.prototype.setFrame = function(t1) {
                        this.frame = t1, n("setFrame is now deprecated, please use the frame property, e.g: myTexture.frame = frame;");
                    }, t1.Texture.addTextureToCache = function(e, r) {
                        t1.Texture.addToCache(e, r), n("Texture.addTextureToCache is deprecated, please use Texture.addToCache from now on.");
                    }, t1.Texture.removeTextureFromCache = function(e) {
                        return n("Texture.removeTextureFromCache is deprecated, please use Texture.removeFromCache from now on. Be aware that Texture.removeFromCache does not automatically its BaseTexture from the BaseTextureCache. For that, use BaseTexture.removeFromCache"), t1.BaseTexture.removeFromCache(e), t1.Texture.removeFromCache(e);
                    }, Object.defineProperties(o, {
                        AbstractFilter: {
                            get: function() {
                                return n("AstractFilter has been renamed to Filter, please use PIXI.Filter"), t1.AbstractFilter;
                            }
                        },
                        SpriteMaskFilter: {
                            get: function() {
                                return n("filters.SpriteMaskFilter is an undocumented alias, please use SpriteMaskFilter from now on."), t1.SpriteMaskFilter;
                            }
                        }
                    }), t1.utils.uuid = function() {
                        return n("utils.uuid() is deprecated, please use utils.uid() from now on."), t1.utils.uid();
                    }, t1.utils.canUseNewCanvasBlendModes = function() {
                        return n("utils.canUseNewCanvasBlendModes() is deprecated, please use CanvasTinter.canUseMultiply from now on"), t1.CanvasTinter.canUseMultiply;
                    };
                    var c = !0;
                    if (Object.defineProperty(t1.utils, "_saidHello", {
                        set: function(t1) {
                            t1 && (n("PIXI.utils._saidHello is deprecated, please use PIXI.utils.skipHello()"), this.skipHello()), c = t1;
                        },
                        get: function() {
                            return c;
                        }
                    }), s.BasePrepare && (s.BasePrepare.prototype.register = function(t1, e) {
                        return n("renderer.plugins.prepare.register is now deprecated, please use renderer.plugins.prepare.registerFindHook & renderer.plugins.prepare.registerUploadHook"), t1 && this.registerFindHook(t1), e && this.registerUploadHook(e), this;
                    }), s.canvas && Object.defineProperty(s.canvas, "UPLOADS_PER_FRAME", {
                        set: function() {
                            n("PIXI.CanvasPrepare.UPLOADS_PER_FRAME has been removed. Please set renderer.plugins.prepare.limiter.maxItemsPerFrame on your renderer");
                        },
                        get: function() {
                            return n("PIXI.CanvasPrepare.UPLOADS_PER_FRAME has been removed. Please use renderer.plugins.prepare.limiter"), NaN;
                        }
                    }), s.webgl && Object.defineProperty(s.webgl, "UPLOADS_PER_FRAME", {
                        set: function() {
                            n("PIXI.WebGLPrepare.UPLOADS_PER_FRAME has been removed. Please set renderer.plugins.prepare.limiter.maxItemsPerFrame on your renderer");
                        },
                        get: function() {
                            return n("PIXI.WebGLPrepare.UPLOADS_PER_FRAME has been removed. Please use renderer.plugins.prepare.limiter"), NaN;
                        }
                    }), a.Loader) {
                        var d = a.Resource, f = a.Loader;
                        Object.defineProperties(d.prototype, {
                            isJson: {
                                get: function() {
                                    return n("The isJson property is deprecated, please use `resource.type === Resource.TYPE.JSON`."), this.type === d.TYPE.JSON;
                                }
                            },
                            isXml: {
                                get: function() {
                                    return n("The isXml property is deprecated, please use `resource.type === Resource.TYPE.XML`."), this.type === d.TYPE.XML;
                                }
                            },
                            isImage: {
                                get: function() {
                                    return n("The isImage property is deprecated, please use `resource.type === Resource.TYPE.IMAGE`."), this.type === d.TYPE.IMAGE;
                                }
                            },
                            isAudio: {
                                get: function() {
                                    return n("The isAudio property is deprecated, please use `resource.type === Resource.TYPE.AUDIO`."), this.type === d.TYPE.AUDIO;
                                }
                            },
                            isVideo: {
                                get: function() {
                                    return n("The isVideo property is deprecated, please use `resource.type === Resource.TYPE.VIDEO`."), this.type === d.TYPE.VIDEO;
                                }
                            }
                        }), Object.defineProperties(f.prototype, {
                            before: {
                                get: function() {
                                    return n("The before() method is deprecated, please use pre()."), this.pre;
                                }
                            },
                            after: {
                                get: function() {
                                    return n("The after() method is deprecated, please use use()."), this.use;
                                }
                            }
                        });
                    }
                    u.interactiveTarget && Object.defineProperty(u.interactiveTarget, "defaultCursor", {
                        set: function(t1) {
                            n("Property defaultCursor has been replaced with 'cursor'. "), this.cursor = t1;
                        },
                        get: function() {
                            return n("Property defaultCursor has been replaced with 'cursor'. "), this.cursor;
                        }
                    }), u.InteractionManager && (Object.defineProperty(u.InteractionManager, "defaultCursorStyle", {
                        set: function(t1) {
                            n("Property defaultCursorStyle has been replaced with 'cursorStyles.default'. "), this.cursorStyles.default = t1;
                        },
                        get: function() {
                            return n("Property defaultCursorStyle has been replaced with 'cursorStyles.default'. "), this.cursorStyles.default;
                        }
                    }), Object.defineProperty(u.InteractionManager, "currentCursorStyle", {
                        set: function(t1) {
                            n("Property currentCursorStyle has been removed.See the currentCursorMode property, which works differently."), this.currentCursorMode = t1;
                        },
                        get: function() {
                            return n("Property currentCursorStyle has been removed.See the currentCursorMode property, which works differently."), this.currentCursorMode;
                        }
                    }));
                }
                r.__esModule = !0, r.default = i;
            },
            {}
        ],
        131: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = t1("../../core"), o = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(i), s = new o.Rectangle, a = function() {
                    function t1(e) {
                        n(this, t1), this.renderer = e, e.extract = this;
                    }
                    return t1.prototype.image = function(t1) {
                        var e = new Image;
                        return e.src = this.base64(t1), e;
                    }, t1.prototype.base64 = function(t1) {
                        return this.canvas(t1).toDataURL();
                    }, t1.prototype.canvas = function(t1) {
                        var e = this.renderer, r = void 0, n = void 0, i = void 0, a = void 0;
                        t1 && (a = t1 instanceof o.RenderTexture ? t1 : e.generateTexture(t1)), a ? (r = a.baseTexture._canvasRenderTarget.context, n = a.baseTexture._canvasRenderTarget.resolution, i = a.frame) : (r = e.rootContext, i = s, i.width = this.renderer.width, i.height = this.renderer.height);
                        var u = i.width * n, h = i.height * n, l = new o.CanvasRenderTarget(u, h), c = r.getImageData(i.x * n, i.y * n, u, h);
                        return l.context.putImageData(c, 0, 0), l.canvas;
                    }, t1.prototype.pixels = function(t1) {
                        var e = this.renderer, r = void 0, n = void 0, i = void 0, a = void 0;
                        return t1 && (a = t1 instanceof o.RenderTexture ? t1 : e.generateTexture(t1)), a ? (r = a.baseTexture._canvasRenderTarget.context, n = a.baseTexture._canvasRenderTarget.resolution, i = a.frame) : (r = e.rootContext, i = s, i.width = e.width, i.height = e.height), r.getImageData(0, 0, i.width * n, i.height * n).data;
                    }, t1.prototype.destroy = function() {
                        this.renderer.extract = null, this.renderer = null;
                    }, t1;
                }();
                r.default = a, o.CanvasRenderer.registerPlugin("extract", a);
            },
            {
                "../../core": 65
            }
        ],
        132: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                r.__esModule = !0;
                var i = t1("./webgl/WebGLExtract");
                Object.defineProperty(r, "webgl", {
                    enumerable: !0,
                    get: function() {
                        return n(i).default;
                    }
                });
                var o = t1("./canvas/CanvasExtract");
                Object.defineProperty(r, "canvas", {
                    enumerable: !0,
                    get: function() {
                        return n(o).default;
                    }
                });
            },
            {
                "./canvas/CanvasExtract": 131,
                "./webgl/WebGLExtract": 133
            }
        ],
        133: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = t1("../../core"), o = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(i), s = new o.Rectangle, a = function() {
                    function t1(e) {
                        n(this, t1), this.renderer = e, e.extract = this;
                    }
                    return t1.prototype.image = function(t1) {
                        var e = new Image;
                        return e.src = this.base64(t1), e;
                    }, t1.prototype.base64 = function(t1) {
                        return this.canvas(t1).toDataURL();
                    }, t1.prototype.canvas = function(t1) {
                        var e = this.renderer, r = void 0, n = void 0, i = void 0, a = !1, u = void 0;
                        t1 && (u = t1 instanceof o.RenderTexture ? t1 : this.renderer.generateTexture(t1)), u ? (r = u.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID], n = r.resolution, i = u.frame, a = !1) : (r = this.renderer.rootRenderTarget, n = r.resolution, a = !0, i = s, i.width = r.size.width, i.height = r.size.height);
                        var h = i.width * n, l = i.height * n, c = new o.CanvasRenderTarget(h, l);
                        if (r) {
                            e.bindRenderTarget(r);
                            var d = new Uint8Array(4 * h * l), f = e.gl;
                            f.readPixels(i.x * n, i.y * n, h, l, f.RGBA, f.UNSIGNED_BYTE, d);
                            var p = c.context.getImageData(0, 0, h, l);
                            p.data.set(d), c.context.putImageData(p, 0, 0), a && (c.context.scale(1, -1), c.context.drawImage(c.canvas, 0, -l));
                        }
                        return c.canvas;
                    }, t1.prototype.pixels = function(t1) {
                        var e = this.renderer, r = void 0, n = void 0, i = void 0, a = void 0;
                        t1 && (a = t1 instanceof o.RenderTexture ? t1 : this.renderer.generateTexture(t1)), a ? (r = a.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID], n = r.resolution, i = a.frame) : (r = this.renderer.rootRenderTarget, n = r.resolution, i = s, i.width = r.size.width, i.height = r.size.height);
                        var u = i.width * n, h = i.height * n, l = new Uint8Array(4 * u * h);
                        if (r) {
                            e.bindRenderTarget(r);
                            var c = e.gl;
                            c.readPixels(i.x * n, i.y * n, u, h, c.RGBA, c.UNSIGNED_BYTE, l);
                        }
                        return l;
                    }, t1.prototype.destroy = function() {
                        this.renderer.extract = null, this.renderer = null;
                    }, t1;
                }();
                r.default = a, o.WebGLRenderer.registerPlugin("extract", a);
            },
            {
                "../../core": 65
            }
        ],
        134: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function i(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function o(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var s = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), a = t1("../core"), u = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(a), h = function(t1) {
                    function e(r, o) {
                        n(this, e);
                        var s = i(this, t1.call(this, r[0] instanceof u.Texture ? r[0] : r[0].texture));
                        return s._textures = null, s._durations = null, s.textures = r, s._autoUpdate = !1 !== o, s.animationSpeed = 1, s.loop = !0, s.onComplete = null, s.onFrameChange = null, s.onLoop = null, s._currentTime = 0, s.playing = !1, s;
                    }
                    return o(e, t1), e.prototype.stop = function() {
                        this.playing && (this.playing = !1, this._autoUpdate && u.ticker.shared.remove(this.update, this));
                    }, e.prototype.play = function() {
                        this.playing || (this.playing = !0, this._autoUpdate && u.ticker.shared.add(this.update, this, u.UPDATE_PRIORITY.HIGH));
                    }, e.prototype.gotoAndStop = function(t1) {
                        this.stop();
                        var e = this.currentFrame;
                        this._currentTime = t1, e !== this.currentFrame && this.updateTexture();
                    }, e.prototype.gotoAndPlay = function(t1) {
                        var e = this.currentFrame;
                        this._currentTime = t1, e !== this.currentFrame && this.updateTexture(), this.play();
                    }, e.prototype.update = function(t1) {
                        var e = this.animationSpeed * t1, r = this.currentFrame;
                        if (null !== this._durations) {
                            var n = this._currentTime % 1 * this._durations[this.currentFrame];
                            for(n += e / 60 * 1e3; n < 0;)this._currentTime--, n += this._durations[this.currentFrame];
                            var i = Math.sign(this.animationSpeed * t1);
                            for(this._currentTime = Math.floor(this._currentTime); n >= this._durations[this.currentFrame];)n -= this._durations[this.currentFrame] * i, this._currentTime += i;
                            this._currentTime += n / this._durations[this.currentFrame];
                        } else this._currentTime += e;
                        this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), this.onComplete && this.onComplete()) : r !== this.currentFrame && (this.loop && this.onLoop && (this.animationSpeed > 0 && this.currentFrame < r ? this.onLoop() : this.animationSpeed < 0 && this.currentFrame > r && this.onLoop()), this.updateTexture());
                    }, e.prototype.updateTexture = function() {
                        this._texture = this._textures[this.currentFrame], this._textureID = -1, this.onFrameChange && this.onFrameChange(this.currentFrame);
                    }, e.prototype.destroy = function(e) {
                        this.stop(), t1.prototype.destroy.call(this, e);
                    }, e.fromFrames = function(t1) {
                        for(var r = [], n = 0; n < t1.length; ++n)r.push(u.Texture.fromFrame(t1[n]));
                        return new e(r);
                    }, e.fromImages = function(t1) {
                        for(var r = [], n = 0; n < t1.length; ++n)r.push(u.Texture.fromImage(t1[n]));
                        return new e(r);
                    }, s(e, [
                        {
                            key: "totalFrames",
                            get: function() {
                                return this._textures.length;
                            }
                        },
                        {
                            key: "textures",
                            get: function() {
                                return this._textures;
                            },
                            set: function(t1) {
                                if (t1[0] instanceof u.Texture) this._textures = t1, this._durations = null;
                                else {
                                    this._textures = [], this._durations = [];
                                    for(var e = 0; e < t1.length; e++)this._textures.push(t1[e].texture), this._durations.push(t1[e].time);
                                }
                                this.gotoAndStop(0), this.updateTexture();
                            }
                        },
                        {
                            key: "currentFrame",
                            get: function() {
                                var t1 = Math.floor(this._currentTime) % this._textures.length;
                                return t1 < 0 && (t1 += this._textures.length), t1;
                            }
                        }
                    ]), e;
                }(u.Sprite);
                r.default = h;
            },
            {
                "../core": 65
            }
        ],
        135: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function o(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function s(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var a = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), u = t1("../core"), h = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(u), l = t1("../core/math/ObservablePoint"), c = n(l), d = t1("../core/settings"), f = n(d), p = function(t1) {
                    function e(r) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        i(this, e);
                        var s = o(this, t1.call(this));
                        return s._textWidth = 0, s._textHeight = 0, s._glyphs = [], s._font = {
                            tint: void 0 !== n.tint ? n.tint : 16777215,
                            align: n.align || "left",
                            name: null,
                            size: 0
                        }, s.font = n.font, s._text = r, s._maxWidth = 0, s._maxLineHeight = 0, s._anchor = new c.default(function() {
                            s.dirty = !0;
                        }, s, 0, 0), s.dirty = !1, s.updateText(), s;
                    }
                    return s(e, t1), e.prototype.updateText = function() {
                        for(var t1 = e.fonts[this._font.name], r = this._font.size / t1.size, n = new h.Point, i = [], o = [], s = null, a = 0, u = 0, l = 0, c = -1, d = 0, f = 0, p = 0, v = 0; v < this.text.length; v++){
                            var y = this.text.charCodeAt(v);
                            if (/(\s)/.test(this.text.charAt(v)) && (c = v, d = a), /(?:\r\n|\r|\n)/.test(this.text.charAt(v))) o.push(a), u = Math.max(u, a), l++, n.x = 0, n.y += t1.lineHeight, s = null;
                            else if (-1 !== c && this._maxWidth > 0 && n.x * r > this._maxWidth) h.utils.removeItems(i, c - f, v - c), v = c, c = -1, ++f, o.push(d), u = Math.max(u, d), l++, n.x = 0, n.y += t1.lineHeight, s = null;
                            else {
                                var g = t1.chars[y];
                                g && (s && g.kerning[s] && (n.x += g.kerning[s]), i.push({
                                    texture: g.texture,
                                    line: l,
                                    charCode: y,
                                    position: new h.Point(n.x + g.xOffset, n.y + g.yOffset)
                                }), a = n.x + (g.texture.width + g.xOffset), n.x += g.xAdvance, p = Math.max(p, g.yOffset + g.texture.height), s = y);
                            }
                        }
                        o.push(a), u = Math.max(u, a);
                        for(var m = [], _ = 0; _ <= l; _++){
                            var b = 0;
                            "right" === this._font.align ? b = u - o[_] : "center" === this._font.align && (b = (u - o[_]) / 2), m.push(b);
                        }
                        for(var x = i.length, T = this.tint, w = 0; w < x; w++){
                            var E = this._glyphs[w];
                            E ? E.texture = i[w].texture : (E = new h.Sprite(i[w].texture), this._glyphs.push(E)), E.position.x = (i[w].position.x + m[i[w].line]) * r, E.position.y = i[w].position.y * r, E.scale.x = E.scale.y = r, E.tint = T, E.parent || this.addChild(E);
                        }
                        for(var S = x; S < this._glyphs.length; ++S)this.removeChild(this._glyphs[S]);
                        if (this._textWidth = u * r, this._textHeight = (n.y + t1.lineHeight) * r, 0 !== this.anchor.x || 0 !== this.anchor.y) for(var O = 0; O < x; O++)this._glyphs[O].x -= this._textWidth * this.anchor.x, this._glyphs[O].y -= this._textHeight * this.anchor.y;
                        this._maxLineHeight = p * r;
                    }, e.prototype.updateTransform = function() {
                        this.validate(), this.containerUpdateTransform();
                    }, e.prototype.getLocalBounds = function() {
                        return this.validate(), t1.prototype.getLocalBounds.call(this);
                    }, e.prototype.validate = function() {
                        this.dirty && (this.updateText(), this.dirty = !1);
                    }, e.registerFont = function(t1, r) {
                        var n = {}, i = t1.getElementsByTagName("info")[0], o = t1.getElementsByTagName("common")[0], s = r.baseTexture.resolution || f.default.RESOLUTION;
                        n.font = i.getAttribute("face"), n.size = parseInt(i.getAttribute("size"), 10), n.lineHeight = parseInt(o.getAttribute("lineHeight"), 10) / s, n.chars = {};
                        for(var a = t1.getElementsByTagName("char"), u = 0; u < a.length; u++){
                            var l = a[u], c = parseInt(l.getAttribute("id"), 10), d = new h.Rectangle(parseInt(l.getAttribute("x"), 10) / s + r.frame.x / s, parseInt(l.getAttribute("y"), 10) / s + r.frame.y / s, parseInt(l.getAttribute("width"), 10) / s, parseInt(l.getAttribute("height"), 10) / s);
                            n.chars[c] = {
                                xOffset: parseInt(l.getAttribute("xoffset"), 10) / s,
                                yOffset: parseInt(l.getAttribute("yoffset"), 10) / s,
                                xAdvance: parseInt(l.getAttribute("xadvance"), 10) / s,
                                kerning: {},
                                texture: new h.Texture(r.baseTexture, d)
                            };
                        }
                        for(var p = t1.getElementsByTagName("kerning"), v = 0; v < p.length; v++){
                            var y = p[v], g = parseInt(y.getAttribute("first"), 10) / s, m = parseInt(y.getAttribute("second"), 10) / s, _ = parseInt(y.getAttribute("amount"), 10) / s;
                            n.chars[m] && (n.chars[m].kerning[g] = _);
                        }
                        return e.fonts[n.font] = n, n;
                    }, a(e, [
                        {
                            key: "tint",
                            get: function() {
                                return this._font.tint;
                            },
                            set: function(t1) {
                                this._font.tint = "number" == typeof t1 && t1 >= 0 ? t1 : 16777215, this.dirty = !0;
                            }
                        },
                        {
                            key: "align",
                            get: function() {
                                return this._font.align;
                            },
                            set: function(t1) {
                                this._font.align = t1 || "left", this.dirty = !0;
                            }
                        },
                        {
                            key: "anchor",
                            get: function() {
                                return this._anchor;
                            },
                            set: function(t1) {
                                "number" == typeof t1 ? this._anchor.set(t1) : this._anchor.copy(t1);
                            }
                        },
                        {
                            key: "font",
                            get: function() {
                                return this._font;
                            },
                            set: function(t1) {
                                t1 && ("string" == typeof t1 ? (t1 = t1.split(" "), this._font.name = 1 === t1.length ? t1[0] : t1.slice(1).join(" "), this._font.size = t1.length >= 2 ? parseInt(t1[0], 10) : e.fonts[this._font.name].size) : (this._font.name = t1.name, this._font.size = "number" == typeof t1.size ? t1.size : parseInt(t1.size, 10)), this.dirty = !0);
                            }
                        },
                        {
                            key: "text",
                            get: function() {
                                return this._text;
                            },
                            set: function(t1) {
                                t1 = t1.toString() || " ", this._text !== t1 && (this._text = t1, this.dirty = !0);
                            }
                        },
                        {
                            key: "maxWidth",
                            get: function() {
                                return this._maxWidth;
                            },
                            set: function(t1) {
                                this._maxWidth !== t1 && (this._maxWidth = t1, this.dirty = !0);
                            }
                        },
                        {
                            key: "maxLineHeight",
                            get: function() {
                                return this.validate(), this._maxLineHeight;
                            }
                        },
                        {
                            key: "textWidth",
                            get: function() {
                                return this.validate(), this._textWidth;
                            }
                        },
                        {
                            key: "textHeight",
                            get: function() {
                                return this.validate(), this._textHeight;
                            }
                        }
                    ]), e;
                }(h.Container);
                r.default = p, p.fonts = {};
            },
            {
                "../core": 65,
                "../core/math/ObservablePoint": 68,
                "../core/settings": 101
            }
        ],
        136: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), o = t1("../core/math/Matrix"), s = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(o), a = new s.default, u = function() {
                    function t1(e, r) {
                        n(this, t1), this._texture = e, this.mapCoord = new s.default, this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._lastTextureID = -1, this.clampOffset = 0, this.clampMargin = void 0 === r ? .5 : r;
                    }
                    return t1.prototype.multiplyUvs = function(t1, e) {
                        void 0 === e && (e = t1);
                        for(var r = this.mapCoord, n = 0; n < t1.length; n += 2){
                            var i = t1[n], o = t1[n + 1];
                            e[n] = i * r.a + o * r.c + r.tx, e[n + 1] = i * r.b + o * r.d + r.ty;
                        }
                        return e;
                    }, t1.prototype.update = function(t1) {
                        var e = this._texture;
                        if (!e || !e.valid) return !1;
                        if (!t1 && this._lastTextureID === e._updateID) return !1;
                        this._lastTextureID = e._updateID;
                        var r = e._uvs;
                        this.mapCoord.set(r.x1 - r.x0, r.y1 - r.y0, r.x3 - r.x0, r.y3 - r.y0, r.x0, r.y0);
                        var n = e.orig, i = e.trim;
                        i && (a.set(n.width / i.width, 0, 0, n.height / i.height, -i.x / i.width, -i.y / i.height), this.mapCoord.append(a));
                        var o = e.baseTexture, s = this.uClampFrame, u = this.clampMargin / o.resolution, h = this.clampOffset;
                        return s[0] = (e._frame.x + u + h) / o.width, s[1] = (e._frame.y + u + h) / o.height, s[2] = (e._frame.x + e._frame.width - u + h) / o.width, s[3] = (e._frame.y + e._frame.height - u + h) / o.height, this.uClampOffset[0] = h / o.realWidth, this.uClampOffset[1] = h / o.realHeight, !0;
                    }, i(t1, [
                        {
                            key: "texture",
                            get: function() {
                                return this._texture;
                            },
                            set: function(t1) {
                                this._texture = t1, this._lastTextureID = -1;
                            }
                        }
                    ]), t1;
                }();
                r.default = u;
            },
            {
                "../core/math/Matrix": 67
            }
        ],
        137: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function o(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function s(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var a = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), u = t1("../core"), h = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(u), l = t1("../core/sprites/canvas/CanvasTinter"), c = n(l), d = t1("./TextureTransform"), f = n(d), p = new h.Point, v = function(t1) {
                    function e(r) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
                        i(this, e);
                        var a = o(this, t1.call(this, r));
                        return a.tileTransform = new h.TransformStatic, a._width = n, a._height = s, a._canvasPattern = null, a.uvTransform = r.transform || new f.default(r), a.pluginName = "tilingSprite", a.uvRespectAnchor = !1, a;
                    }
                    return s(e, t1), e.prototype._onTextureUpdate = function() {
                        this.uvTransform && (this.uvTransform.texture = this._texture);
                    }, e.prototype._renderWebGL = function(t1) {
                        var e = this._texture;
                        e && e.valid && (this.tileTransform.updateLocalTransform(), this.uvTransform.update(), t1.setObjectRenderer(t1.plugins[this.pluginName]), t1.plugins[this.pluginName].render(this));
                    }, e.prototype._renderCanvas = function(t1) {
                        var e = this._texture;
                        if (e.baseTexture.hasLoaded) {
                            var r = t1.context, n = this.worldTransform, i = t1.resolution, o = e.baseTexture, s = o.resolution, a = this.tilePosition.x / this.tileScale.x % e._frame.width * s, u = this.tilePosition.y / this.tileScale.y % e._frame.height * s;
                            if (!this._canvasPattern) {
                                var l = new h.CanvasRenderTarget(e._frame.width, e._frame.height, s);
                                16777215 !== this.tint ? (this.cachedTint !== this.tint && (this.cachedTint = this.tint, this.tintedTexture = c.default.getTintedTexture(this, this.tint)), l.context.drawImage(this.tintedTexture, 0, 0)) : l.context.drawImage(o.source, -e._frame.x * s, -e._frame.y * s), this._canvasPattern = l.context.createPattern(l.canvas, "repeat");
                            }
                            r.globalAlpha = this.worldAlpha, r.setTransform(n.a * i, n.b * i, n.c * i, n.d * i, n.tx * i, n.ty * i), t1.setBlendMode(this.blendMode), r.fillStyle = this._canvasPattern, r.scale(this.tileScale.x / s, this.tileScale.y / s);
                            var d = this.anchor.x * -this._width, f = this.anchor.y * -this._height;
                            this.uvRespectAnchor ? (r.translate(a, u), r.fillRect(-a + d, -u + f, this._width / this.tileScale.x * s, this._height / this.tileScale.y * s)) : (r.translate(a + d, u + f), r.fillRect(-a, -u, this._width / this.tileScale.x * s, this._height / this.tileScale.y * s));
                        }
                    }, e.prototype._calculateBounds = function() {
                        var t1 = this._width * -this._anchor._x, e = this._height * -this._anchor._y, r = this._width * (1 - this._anchor._x), n = this._height * (1 - this._anchor._y);
                        this._bounds.addFrame(this.transform, t1, e, r, n);
                    }, e.prototype.getLocalBounds = function(e) {
                        return 0 === this.children.length ? (this._bounds.minX = this._width * -this._anchor._x, this._bounds.minY = this._height * -this._anchor._y, this._bounds.maxX = this._width * (1 - this._anchor._x), this._bounds.maxY = this._height * (1 - this._anchor._x), e || (this._localBoundsRect || (this._localBoundsRect = new h.Rectangle), e = this._localBoundsRect), this._bounds.getRectangle(e)) : t1.prototype.getLocalBounds.call(this, e);
                    }, e.prototype.containsPoint = function(t1) {
                        this.worldTransform.applyInverse(t1, p);
                        var e = this._width, r = this._height, n = -e * this.anchor._x;
                        if (p.x >= n && p.x < n + e) {
                            var i = -r * this.anchor._y;
                            if (p.y >= i && p.y < i + r) return !0;
                        }
                        return !1;
                    }, e.prototype.destroy = function(e) {
                        t1.prototype.destroy.call(this, e), this.tileTransform = null, this.uvTransform = null;
                    }, e.from = function(t1, r, n) {
                        return new e(h.Texture.from(t1), r, n);
                    }, e.fromFrame = function(t1, r, n) {
                        var i = h.utils.TextureCache[t1];
                        if (!i) throw new Error('The frameId "' + t1 + '" does not exist in the texture cache ' + this);
                        return new e(i, r, n);
                    }, e.fromImage = function(t1, r, n, i, o) {
                        return new e(h.Texture.fromImage(t1, i, o), r, n);
                    }, a(e, [
                        {
                            key: "clampMargin",
                            get: function() {
                                return this.uvTransform.clampMargin;
                            },
                            set: function(t1) {
                                this.uvTransform.clampMargin = t1, this.uvTransform.update(!0);
                            }
                        },
                        {
                            key: "tileScale",
                            get: function() {
                                return this.tileTransform.scale;
                            },
                            set: function(t1) {
                                this.tileTransform.scale.copy(t1);
                            }
                        },
                        {
                            key: "tilePosition",
                            get: function() {
                                return this.tileTransform.position;
                            },
                            set: function(t1) {
                                this.tileTransform.position.copy(t1);
                            }
                        },
                        {
                            key: "width",
                            get: function() {
                                return this._width;
                            },
                            set: function(t1) {
                                this._width = t1;
                            }
                        },
                        {
                            key: "height",
                            get: function() {
                                return this._height;
                            },
                            set: function(t1) {
                                this._height = t1;
                            }
                        }
                    ]), e;
                }(h.Sprite);
                r.default = v;
            },
            {
                "../core": 65,
                "../core/sprites/canvas/CanvasTinter": 104,
                "./TextureTransform": 136
            }
        ],
        138: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                var o = t1("../core"), s = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(o), a = t1("../core/textures/Texture"), u = n(a), h = t1("../core/textures/BaseTexture"), l = n(h), c = t1("../core/utils"), d = s.DisplayObject, f = new s.Matrix;
                d.prototype._cacheAsBitmap = !1, d.prototype._cacheData = !1;
                var p = function t1() {
                    i(this, t1), this.textureCacheId = null, this.originalRenderWebGL = null, this.originalRenderCanvas = null, this.originalCalculateBounds = null, this.originalGetLocalBounds = null, this.originalUpdateTransform = null, this.originalHitTest = null, this.originalDestroy = null, this.originalMask = null, this.originalFilterArea = null, this.sprite = null;
                };
                Object.defineProperties(d.prototype, {
                    cacheAsBitmap: {
                        get: function() {
                            return this._cacheAsBitmap;
                        },
                        set: function(t1) {
                            if (this._cacheAsBitmap !== t1) {
                                this._cacheAsBitmap = t1;
                                var e = void 0;
                                t1 ? (this._cacheData || (this._cacheData = new p), e = this._cacheData, e.originalRenderWebGL = this.renderWebGL, e.originalRenderCanvas = this.renderCanvas, e.originalUpdateTransform = this.updateTransform, e.originalCalculateBounds = this._calculateBounds, e.originalGetLocalBounds = this.getLocalBounds, e.originalDestroy = this.destroy, e.originalContainsPoint = this.containsPoint, e.originalMask = this._mask, e.originalFilterArea = this.filterArea, this.renderWebGL = this._renderCachedWebGL, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : (e = this._cacheData, e.sprite && this._destroyCachedDisplayObject(), this.renderWebGL = e.originalRenderWebGL, this.renderCanvas = e.originalRenderCanvas, this._calculateBounds = e.originalCalculateBounds, this.getLocalBounds = e.originalGetLocalBounds, this.destroy = e.originalDestroy, this.updateTransform = e.originalUpdateTransform, this.containsPoint = e.originalContainsPoint, this._mask = e.originalMask, this.filterArea = e.originalFilterArea);
                            }
                        }
                    }
                }), d.prototype._renderCachedWebGL = function(t1) {
                    !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t1), this._cacheData.sprite._transformID = -1, this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderWebGL(t1));
                }, d.prototype._initCachedDisplayObject = function(t1) {
                    if (!this._cacheData || !this._cacheData.sprite) {
                        var e = this.alpha;
                        this.alpha = 1, t1.currentRenderer.flush();
                        var r = this.getLocalBounds().clone();
                        if (this._filters) {
                            var n = this._filters[0].padding;
                            r.pad(n);
                        }
                        var i = t1._activeRenderTarget, o = t1.filterManager.filterStack, a = s.RenderTexture.create(0 | r.width, 0 | r.height), h = "cacheAsBitmap_" + (0, c.uid)();
                        this._cacheData.textureCacheId = h, l.default.addToCache(a.baseTexture, h), u.default.addToCache(a, h);
                        var d = f;
                        d.tx = -r.x, d.ty = -r.y, this.transform.worldTransform.identity(), this.renderWebGL = this._cacheData.originalRenderWebGL, t1.render(this, a, !0, d, !0), t1.bindRenderTarget(i), t1.filterManager.filterStack = o, this.renderWebGL = this._renderCachedWebGL, this.updateTransform = this.displayObjectUpdateTransform, this._mask = null, this.filterArea = null;
                        var p = new s.Sprite(a);
                        p.transform.worldTransform = this.transform.worldTransform, p.anchor.x = -r.x / r.width, p.anchor.y = -r.y / r.height, p.alpha = e, p._bounds = this._bounds, this._calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._cacheData.sprite = p, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = t1._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.containsPoint = p.containsPoint.bind(p);
                    }
                }, d.prototype._renderCachedCanvas = function(t1) {
                    !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t1), this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite.renderCanvas(t1));
                }, d.prototype._initCachedDisplayObjectCanvas = function(t1) {
                    if (!this._cacheData || !this._cacheData.sprite) {
                        var e = this.getLocalBounds(), r = this.alpha;
                        this.alpha = 1;
                        var n = t1.context, i = s.RenderTexture.create(0 | e.width, 0 | e.height), o = "cacheAsBitmap_" + (0, c.uid)();
                        this._cacheData.textureCacheId = o, l.default.addToCache(i.baseTexture, o), u.default.addToCache(i, o);
                        var a = f;
                        this.transform.localTransform.copy(a), a.invert(), a.tx -= e.x, a.ty -= e.y, this.renderCanvas = this._cacheData.originalRenderCanvas, t1.render(this, i, !0, a, !1), t1.context = n, this.renderCanvas = this._renderCachedCanvas, this._calculateBounds = this._calculateCachedBounds, this._mask = null, this.filterArea = null;
                        var h = new s.Sprite(i);
                        h.transform.worldTransform = this.transform.worldTransform, h.anchor.x = -e.x / e.width, h.anchor.y = -e.y / e.height, h._bounds = this._bounds, h.alpha = r, this.parent ? this.updateTransform() : (this.parent = t1._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.updateTransform = this.displayObjectUpdateTransform, this._cacheData.sprite = h, this.containsPoint = h.containsPoint.bind(h);
                    }
                }, d.prototype._calculateCachedBounds = function() {
                    this._cacheData.sprite._calculateBounds();
                }, d.prototype._getCachedLocalBounds = function() {
                    return this._cacheData.sprite.getLocalBounds();
                }, d.prototype._destroyCachedDisplayObject = function() {
                    this._cacheData.sprite._texture.destroy(!0), this._cacheData.sprite = null, l.default.removeFromCache(this._cacheData.textureCacheId), u.default.removeFromCache(this._cacheData.textureCacheId), this._cacheData.textureCacheId = null;
                }, d.prototype._cacheAsBitmapDestroy = function(t1) {
                    this.cacheAsBitmap = !1, this.destroy(t1);
                };
            },
            {
                "../core": 65,
                "../core/textures/BaseTexture": 112,
                "../core/textures/Texture": 115,
                "../core/utils": 124
            }
        ],
        139: [
            function(t1, e, r) {
                "use strict";
                var n = t1("../core"), i = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(n);
                i.DisplayObject.prototype.name = null, i.Container.prototype.getChildByName = function(t1) {
                    for(var e = 0; e < this.children.length; e++)if (this.children[e].name === t1) return this.children[e];
                    return null;
                };
            },
            {
                "../core": 65
            }
        ],
        140: [
            function(t1, e, r) {
                "use strict";
                var n = t1("../core"), i = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(n);
                i.DisplayObject.prototype.getGlobalPosition = function() {
                    var t1 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new i.Point, e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return this.parent ? this.parent.toGlobal(this.position, t1, e) : (t1.x = this.position.x, t1.y = this.position.y), t1;
                };
            },
            {
                "../core": 65
            }
        ],
        141: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                r.__esModule = !0, r.BitmapText = r.TilingSpriteRenderer = r.TilingSprite = r.TextureTransform = r.AnimatedSprite = void 0;
                var i = t1("./AnimatedSprite");
                Object.defineProperty(r, "AnimatedSprite", {
                    enumerable: !0,
                    get: function() {
                        return n(i).default;
                    }
                });
                var o = t1("./TextureTransform");
                Object.defineProperty(r, "TextureTransform", {
                    enumerable: !0,
                    get: function() {
                        return n(o).default;
                    }
                });
                var s = t1("./TilingSprite");
                Object.defineProperty(r, "TilingSprite", {
                    enumerable: !0,
                    get: function() {
                        return n(s).default;
                    }
                });
                var a = t1("./webgl/TilingSpriteRenderer");
                Object.defineProperty(r, "TilingSpriteRenderer", {
                    enumerable: !0,
                    get: function() {
                        return n(a).default;
                    }
                });
                var u = t1("./BitmapText");
                Object.defineProperty(r, "BitmapText", {
                    enumerable: !0,
                    get: function() {
                        return n(u).default;
                    }
                }), t1("./cacheAsBitmap"), t1("./getChildByName"), t1("./getGlobalPosition");
            },
            {
                "./AnimatedSprite": 134,
                "./BitmapText": 135,
                "./TextureTransform": 136,
                "./TilingSprite": 137,
                "./cacheAsBitmap": 138,
                "./getChildByName": 139,
                "./getGlobalPosition": 140,
                "./webgl/TilingSpriteRenderer": 142
            }
        ],
        142: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function i(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function o(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var s = t1("../../core"), a = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(s), u = t1("../../core/const"), h = (t1("path"), new a.Matrix), l = function(t1) {
                    function e(r) {
                        n(this, e);
                        var o = i(this, t1.call(this, r));
                        return o.shader = null, o.simpleShader = null, o.quad = null, o;
                    }
                    return o(e, t1), e.prototype.onContextChange = function() {
                        var t1 = this.renderer.gl;
                        this.shader = new a.Shader(t1, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = mod(vTextureCoord - uClampOffset, vec2(1.0, 1.0)) + uClampOffset;\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 sample = texture2D(uSampler, coord);\n    gl_FragColor = sample * uColor;\n}\n"), this.simpleShader = new a.Shader(t1, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = sample * uColor;\n}\n"), this.renderer.bindVao(null), this.quad = new a.Quad(t1, this.renderer.state.attribState), this.quad.initVao(this.shader);
                    }, e.prototype.render = function(t1) {
                        var e = this.renderer, r = this.quad;
                        e.bindVao(r.vao);
                        var n = r.vertices;
                        n[0] = n[6] = t1._width * -t1.anchor.x, n[1] = n[3] = t1._height * -t1.anchor.y, n[2] = n[4] = t1._width * (1 - t1.anchor.x), n[5] = n[7] = t1._height * (1 - t1.anchor.y), t1.uvRespectAnchor && (n = r.uvs, n[0] = n[6] = -t1.anchor.x, n[1] = n[3] = -t1.anchor.y, n[2] = n[4] = 1 - t1.anchor.x, n[5] = n[7] = 1 - t1.anchor.y), r.upload();
                        var i = t1._texture, o = i.baseTexture, s = t1.tileTransform.localTransform, l = t1.uvTransform, c = o.isPowerOfTwo && i.frame.width === o.width && i.frame.height === o.height;
                        c && (o._glTextures[e.CONTEXT_UID] ? c = o.wrapMode !== u.WRAP_MODES.CLAMP : o.wrapMode === u.WRAP_MODES.CLAMP && (o.wrapMode = u.WRAP_MODES.REPEAT));
                        var d = c ? this.simpleShader : this.shader;
                        e.bindShader(d);
                        var f = i.width, p = i.height, v = t1._width, y = t1._height;
                        h.set(s.a * f / v, s.b * f / y, s.c * p / v, s.d * p / y, s.tx / v, s.ty / y), h.invert(), c ? h.prepend(l.mapCoord) : (d.uniforms.uMapCoord = l.mapCoord.toArray(!0), d.uniforms.uClampFrame = l.uClampFrame, d.uniforms.uClampOffset = l.uClampOffset), d.uniforms.uTransform = h.toArray(!0), d.uniforms.uColor = a.utils.premultiplyTintToRgba(t1.tint, t1.worldAlpha, d.uniforms.uColor, o.premultipliedAlpha), d.uniforms.translationMatrix = t1.transform.worldTransform.toArray(!0), d.uniforms.uSampler = e.bindTexture(i), e.setBlendMode(a.utils.correctBlendMode(t1.blendMode, o.premultipliedAlpha)), r.vao.draw(this.renderer.gl.TRIANGLES, 6, 0);
                    }, e;
                }(a.ObjectRenderer);
                r.default = l, a.WebGLRenderer.registerPlugin("tilingSprite", l);
            },
            {
                "../../core": 65,
                "../../core/const": 46,
                path: 23
            }
        ],
        143: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function o(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function s(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var a = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), u = t1("../../core"), h = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(u), l = t1("./BlurXFilter"), c = n(l), d = t1("./BlurYFilter"), f = n(d), p = function(t1) {
                    function e(r, n, s, a) {
                        i(this, e);
                        var u = o(this, t1.call(this));
                        return u.blurXFilter = new c.default(r, n, s, a), u.blurYFilter = new f.default(r, n, s, a), u.padding = 0, u.resolution = s || h.settings.RESOLUTION, u.quality = n || 4, u.blur = r || 8, u;
                    }
                    return s(e, t1), e.prototype.apply = function(t1, e, r) {
                        var n = t1.getRenderTarget(!0);
                        this.blurXFilter.apply(t1, e, n, !0), this.blurYFilter.apply(t1, n, r, !1), t1.returnRenderTarget(n);
                    }, a(e, [
                        {
                            key: "blur",
                            get: function() {
                                return this.blurXFilter.blur;
                            },
                            set: function(t1) {
                                this.blurXFilter.blur = this.blurYFilter.blur = t1, this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength));
                            }
                        },
                        {
                            key: "quality",
                            get: function() {
                                return this.blurXFilter.quality;
                            },
                            set: function(t1) {
                                this.blurXFilter.quality = this.blurYFilter.quality = t1;
                            }
                        },
                        {
                            key: "blurX",
                            get: function() {
                                return this.blurXFilter.blur;
                            },
                            set: function(t1) {
                                this.blurXFilter.blur = t1, this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength));
                            }
                        },
                        {
                            key: "blurY",
                            get: function() {
                                return this.blurYFilter.blur;
                            },
                            set: function(t1) {
                                this.blurYFilter.blur = t1, this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength));
                            }
                        },
                        {
                            key: "blendMode",
                            get: function() {
                                return this.blurYFilter._blendMode;
                            },
                            set: function(t1) {
                                this.blurYFilter._blendMode = t1;
                            }
                        }
                    ]), e;
                }(h.Filter);
                r.default = p;
            },
            {
                "../../core": 65,
                "./BlurXFilter": 144,
                "./BlurYFilter": 145
            }
        ],
        144: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function o(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function s(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var a = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), u = t1("../../core"), h = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(u), l = t1("./generateBlurVertSource"), c = n(l), d = t1("./generateBlurFragSource"), f = n(d), p = t1("./getMaxBlurKernelSize"), v = n(p), y = function(t1) {
                    function e(r, n, s, a) {
                        i(this, e), a = a || 5;
                        var u = (0, c.default)(a, !0), l = (0, f.default)(a), d = o(this, t1.call(this, u, l));
                        return d.resolution = s || h.settings.RESOLUTION, d._quality = 0, d.quality = n || 4, d.strength = r || 8, d.firstRun = !0, d;
                    }
                    return s(e, t1), e.prototype.apply = function(t1, e, r, n) {
                        if (this.firstRun) {
                            var i = t1.renderer.gl, o = (0, v.default)(i);
                            this.vertexSrc = (0, c.default)(o, !0), this.fragmentSrc = (0, f.default)(o), this.firstRun = !1;
                        }
                        if (this.uniforms.strength = 1 / r.size.width * (r.size.width / e.size.width), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 1 === this.passes) t1.applyFilter(this, e, r, n);
                        else {
                            for(var s = t1.getRenderTarget(!0), a = e, u = s, h = 0; h < this.passes - 1; h++){
                                t1.applyFilter(this, a, u, !0);
                                var l = u;
                                u = a, a = l;
                            }
                            t1.applyFilter(this, a, r, n), t1.returnRenderTarget(s);
                        }
                    }, a(e, [
                        {
                            key: "blur",
                            get: function() {
                                return this.strength;
                            },
                            set: function(t1) {
                                this.padding = 2 * Math.abs(t1), this.strength = t1;
                            }
                        },
                        {
                            key: "quality",
                            get: function() {
                                return this._quality;
                            },
                            set: function(t1) {
                                this._quality = t1, this.passes = t1;
                            }
                        }
                    ]), e;
                }(h.Filter);
                r.default = y;
            },
            {
                "../../core": 65,
                "./generateBlurFragSource": 146,
                "./generateBlurVertSource": 147,
                "./getMaxBlurKernelSize": 148
            }
        ],
        145: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function o(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function s(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var a = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), u = t1("../../core"), h = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(u), l = t1("./generateBlurVertSource"), c = n(l), d = t1("./generateBlurFragSource"), f = n(d), p = t1("./getMaxBlurKernelSize"), v = n(p), y = function(t1) {
                    function e(r, n, s, a) {
                        i(this, e), a = a || 5;
                        var u = (0, c.default)(a, !1), l = (0, f.default)(a), d = o(this, t1.call(this, u, l));
                        return d.resolution = s || h.settings.RESOLUTION, d._quality = 0, d.quality = n || 4, d.strength = r || 8, d.firstRun = !0, d;
                    }
                    return s(e, t1), e.prototype.apply = function(t1, e, r, n) {
                        if (this.firstRun) {
                            var i = t1.renderer.gl, o = (0, v.default)(i);
                            this.vertexSrc = (0, c.default)(o, !1), this.fragmentSrc = (0, f.default)(o), this.firstRun = !1;
                        }
                        if (this.uniforms.strength = 1 / r.size.height * (r.size.height / e.size.height), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 1 === this.passes) t1.applyFilter(this, e, r, n);
                        else {
                            for(var s = t1.getRenderTarget(!0), a = e, u = s, h = 0; h < this.passes - 1; h++){
                                t1.applyFilter(this, a, u, !0);
                                var l = u;
                                u = a, a = l;
                            }
                            t1.applyFilter(this, a, r, n), t1.returnRenderTarget(s);
                        }
                    }, a(e, [
                        {
                            key: "blur",
                            get: function() {
                                return this.strength;
                            },
                            set: function(t1) {
                                this.padding = 2 * Math.abs(t1), this.strength = t1;
                            }
                        },
                        {
                            key: "quality",
                            get: function() {
                                return this._quality;
                            },
                            set: function(t1) {
                                this._quality = t1, this.passes = t1;
                            }
                        }
                    ]), e;
                }(h.Filter);
                r.default = y;
            },
            {
                "../../core": 65,
                "./generateBlurFragSource": 146,
                "./generateBlurVertSource": 147,
                "./getMaxBlurKernelSize": 148
            }
        ],
        146: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    for(var e = i[t1], r = e.length, n = o, s = "", a = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;", u = void 0, h = 0; h < t1; h++){
                        var l = a.replace("%index%", h);
                        u = h, h >= r && (u = t1 - h - 1), l = l.replace("%value%", e[u]), s += l, s += "\n";
                    }
                    return n = n.replace("%blur%", s), n = n.replace("%size%", t1);
                }
                r.__esModule = !0, r.default = n;
                var i = {
                    5: [
                        .153388,
                        .221461,
                        .250301
                    ],
                    7: [
                        .071303,
                        .131514,
                        .189879,
                        .214607
                    ],
                    9: [
                        .028532,
                        .067234,
                        .124009,
                        .179044,
                        .20236
                    ],
                    11: [
                        .0093,
                        .028002,
                        .065984,
                        .121703,
                        .175713,
                        .198596
                    ],
                    13: [
                        .002406,
                        .009255,
                        .027867,
                        .065666,
                        .121117,
                        .174868,
                        .197641
                    ],
                    15: [
                        489e-6,
                        .002403,
                        .009246,
                        .02784,
                        .065602,
                        .120999,
                        .174697,
                        .197448
                    ]
                }, o = [
                    "varying vec2 vBlurTexCoords[%size%];",
                    "uniform sampler2D uSampler;",
                    "void main(void)",
                    "{",
                    "    gl_FragColor = vec4(0.0);",
                    "    %blur%",
                    "}"
                ].join("\n");
            },
            {}
        ],
        147: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    var r = Math.ceil(t1 / 2), n = i, o = "", s = void 0;
                    s = e ? "vBlurTexCoords[%index%] = aTextureCoord + vec2(%sampleIndex% * strength, 0.0);" : "vBlurTexCoords[%index%] = aTextureCoord + vec2(0.0, %sampleIndex% * strength);";
                    for(var a = 0; a < t1; a++){
                        var u = s.replace("%index%", a);
                        u = u.replace("%sampleIndex%", a - (r - 1) + ".0"), o += u, o += "\n";
                    }
                    return n = n.replace("%blur%", o), n = n.replace("%size%", t1);
                }
                r.__esModule = !0, r.default = n;
                var i = [
                    "attribute vec2 aVertexPosition;",
                    "attribute vec2 aTextureCoord;",
                    "uniform float strength;",
                    "uniform mat3 projectionMatrix;",
                    "varying vec2 vBlurTexCoords[%size%];",
                    "void main(void)",
                    "{",
                    "gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);",
                    "%blur%",
                    "}"
                ].join("\n");
            },
            {}
        ],
        148: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    for(var e = t1.getParameter(t1.MAX_VARYING_VECTORS), r = 15; r > e;)r -= 2;
                    return r;
                }
                r.__esModule = !0, r.default = n;
            },
            {}
        ],
        149: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function i(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function o(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var s = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), a = t1("../../core"), u = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(a), h = (t1("path"), function(t1) {
                    function e() {
                        n(this, e);
                        var r = i(this, t1.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\nuniform float uAlpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (uAlpha == 0.0) {\n        gl_FragColor = c;\n        return;\n    }\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.rgb /= c.a;\n    }\n\n    vec4 result;\n\n    result.r = (m[0] * c.r);\n        result.r += (m[1] * c.g);\n        result.r += (m[2] * c.b);\n        result.r += (m[3] * c.a);\n        result.r += m[4];\n\n    result.g = (m[5] * c.r);\n        result.g += (m[6] * c.g);\n        result.g += (m[7] * c.b);\n        result.g += (m[8] * c.a);\n        result.g += m[9];\n\n    result.b = (m[10] * c.r);\n       result.b += (m[11] * c.g);\n       result.b += (m[12] * c.b);\n       result.b += (m[13] * c.a);\n       result.b += m[14];\n\n    result.a = (m[15] * c.r);\n       result.a += (m[16] * c.g);\n       result.a += (m[17] * c.b);\n       result.a += (m[18] * c.a);\n       result.a += m[19];\n\n    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    gl_FragColor = vec4(rgb, result.a);\n}\n"));
                        return r.uniforms.m = [
                            1,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0
                        ], r.alpha = 1, r;
                    }
                    return o(e, t1), e.prototype._loadMatrix = function(t1) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = t1;
                        e && (this._multiply(r, this.uniforms.m, t1), r = this._colorMatrix(r)), this.uniforms.m = r;
                    }, e.prototype._multiply = function(t1, e, r) {
                        return t1[0] = e[0] * r[0] + e[1] * r[5] + e[2] * r[10] + e[3] * r[15], t1[1] = e[0] * r[1] + e[1] * r[6] + e[2] * r[11] + e[3] * r[16], t1[2] = e[0] * r[2] + e[1] * r[7] + e[2] * r[12] + e[3] * r[17], t1[3] = e[0] * r[3] + e[1] * r[8] + e[2] * r[13] + e[3] * r[18], t1[4] = e[0] * r[4] + e[1] * r[9] + e[2] * r[14] + e[3] * r[19] + e[4], t1[5] = e[5] * r[0] + e[6] * r[5] + e[7] * r[10] + e[8] * r[15], t1[6] = e[5] * r[1] + e[6] * r[6] + e[7] * r[11] + e[8] * r[16], t1[7] = e[5] * r[2] + e[6] * r[7] + e[7] * r[12] + e[8] * r[17], t1[8] = e[5] * r[3] + e[6] * r[8] + e[7] * r[13] + e[8] * r[18], t1[9] = e[5] * r[4] + e[6] * r[9] + e[7] * r[14] + e[8] * r[19] + e[9], t1[10] = e[10] * r[0] + e[11] * r[5] + e[12] * r[10] + e[13] * r[15], t1[11] = e[10] * r[1] + e[11] * r[6] + e[12] * r[11] + e[13] * r[16], t1[12] = e[10] * r[2] + e[11] * r[7] + e[12] * r[12] + e[13] * r[17], t1[13] = e[10] * r[3] + e[11] * r[8] + e[12] * r[13] + e[13] * r[18], t1[14] = e[10] * r[4] + e[11] * r[9] + e[12] * r[14] + e[13] * r[19] + e[14], t1[15] = e[15] * r[0] + e[16] * r[5] + e[17] * r[10] + e[18] * r[15], t1[16] = e[15] * r[1] + e[16] * r[6] + e[17] * r[11] + e[18] * r[16], t1[17] = e[15] * r[2] + e[16] * r[7] + e[17] * r[12] + e[18] * r[17], t1[18] = e[15] * r[3] + e[16] * r[8] + e[17] * r[13] + e[18] * r[18], t1[19] = e[15] * r[4] + e[16] * r[9] + e[17] * r[14] + e[18] * r[19] + e[19], t1;
                    }, e.prototype._colorMatrix = function(t1) {
                        var e = new Float32Array(t1);
                        return e[4] /= 255, e[9] /= 255, e[14] /= 255, e[19] /= 255, e;
                    }, e.prototype.brightness = function(t1, e) {
                        var r = [
                            t1,
                            0,
                            0,
                            0,
                            0,
                            0,
                            t1,
                            0,
                            0,
                            0,
                            0,
                            0,
                            t1,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0
                        ];
                        this._loadMatrix(r, e);
                    }, e.prototype.greyscale = function(t1, e) {
                        var r = [
                            t1,
                            t1,
                            t1,
                            0,
                            0,
                            t1,
                            t1,
                            t1,
                            0,
                            0,
                            t1,
                            t1,
                            t1,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0
                        ];
                        this._loadMatrix(r, e);
                    }, e.prototype.blackAndWhite = function(t1) {
                        var e = [
                            .3,
                            .6,
                            .1,
                            0,
                            0,
                            .3,
                            .6,
                            .1,
                            0,
                            0,
                            .3,
                            .6,
                            .1,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0
                        ];
                        this._loadMatrix(e, t1);
                    }, e.prototype.hue = function(t1, e) {
                        t1 = (t1 || 0) / 180 * Math.PI;
                        var r = Math.cos(t1), n = Math.sin(t1), i = Math.sqrt, o = 1 / 3, s = i(o), a = r + (1 - r) * o, u = o * (1 - r) - s * n, h = o * (1 - r) + s * n, l = o * (1 - r) + s * n, c = r + o * (1 - r), d = o * (1 - r) - s * n, f = o * (1 - r) - s * n, p = o * (1 - r) + s * n, v = r + o * (1 - r), y = [
                            a,
                            u,
                            h,
                            0,
                            0,
                            l,
                            c,
                            d,
                            0,
                            0,
                            f,
                            p,
                            v,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0
                        ];
                        this._loadMatrix(y, e);
                    }, e.prototype.contrast = function(t1, e) {
                        var r = (t1 || 0) + 1, n = -0.5 * (r - 1), i = [
                            r,
                            0,
                            0,
                            0,
                            n,
                            0,
                            r,
                            0,
                            0,
                            n,
                            0,
                            0,
                            r,
                            0,
                            n,
                            0,
                            0,
                            0,
                            1,
                            0
                        ];
                        this._loadMatrix(i, e);
                    }, e.prototype.saturate = function() {
                        var t1 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments[1], r = 2 * t1 / 3 + 1, n = -0.5 * (r - 1), i = [
                            r,
                            n,
                            n,
                            0,
                            0,
                            n,
                            r,
                            n,
                            0,
                            0,
                            n,
                            n,
                            r,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0
                        ];
                        this._loadMatrix(i, e);
                    }, e.prototype.desaturate = function() {
                        this.saturate(-1);
                    }, e.prototype.negative = function(t1) {
                        var e = [
                            0,
                            1,
                            1,
                            0,
                            0,
                            1,
                            0,
                            1,
                            0,
                            0,
                            1,
                            1,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0
                        ];
                        this._loadMatrix(e, t1);
                    }, e.prototype.sepia = function(t1) {
                        var e = [
                            .393,
                            .7689999,
                            .18899999,
                            0,
                            0,
                            .349,
                            .6859999,
                            .16799999,
                            0,
                            0,
                            .272,
                            .5339999,
                            .13099999,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0
                        ];
                        this._loadMatrix(e, t1);
                    }, e.prototype.technicolor = function(t1) {
                        var e = [
                            1.9125277891456083,
                            -0.8545344976951645,
                            -0.09155508482755585,
                            0,
                            11.793603434377337,
                            -0.3087833385928097,
                            1.7658908555458428,
                            -0.10601743074722245,
                            0,
                            -70.35205161461398,
                            -0.231103377548616,
                            -0.7501899197440212,
                            1.847597816108189,
                            0,
                            30.950940869491138,
                            0,
                            0,
                            0,
                            1,
                            0
                        ];
                        this._loadMatrix(e, t1);
                    }, e.prototype.polaroid = function(t1) {
                        var e = [
                            1.438,
                            -0.062,
                            -0.062,
                            0,
                            0,
                            -0.122,
                            1.378,
                            -0.122,
                            0,
                            0,
                            -0.016,
                            -0.016,
                            1.483,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0
                        ];
                        this._loadMatrix(e, t1);
                    }, e.prototype.toBGR = function(t1) {
                        var e = [
                            0,
                            0,
                            1,
                            0,
                            0,
                            0,
                            1,
                            0,
                            0,
                            0,
                            1,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0
                        ];
                        this._loadMatrix(e, t1);
                    }, e.prototype.kodachrome = function(t1) {
                        var e = [
                            1.1285582396593525,
                            -0.3967382283601348,
                            -0.03992559172921793,
                            0,
                            63.72958762196502,
                            -0.16404339962244616,
                            1.0835251566291304,
                            -0.05498805115633132,
                            0,
                            24.732407896706203,
                            -0.16786010706155763,
                            -0.5603416277695248,
                            1.6014850761964943,
                            0,
                            35.62982807460946,
                            0,
                            0,
                            0,
                            1,
                            0
                        ];
                        this._loadMatrix(e, t1);
                    }, e.prototype.browni = function(t1) {
                        var e = [
                            .5997023498159715,
                            .34553243048391263,
                            -0.2708298674538042,
                            0,
                            47.43192855600873,
                            -0.037703249837783157,
                            .8609577587992641,
                            .15059552388459913,
                            0,
                            -36.96841498319127,
                            .24113635128153335,
                            -0.07441037908422492,
                            .44972182064877153,
                            0,
                            -7.562075277591283,
                            0,
                            0,
                            0,
                            1,
                            0
                        ];
                        this._loadMatrix(e, t1);
                    }, e.prototype.vintage = function(t1) {
                        var e = [
                            .6279345635605994,
                            .3202183420819367,
                            -0.03965408211312453,
                            0,
                            9.651285835294123,
                            .02578397704808868,
                            .6441188644374771,
                            .03259127616149294,
                            0,
                            7.462829176470591,
                            .0466055556782719,
                            -0.0851232987247891,
                            .5241648018700465,
                            0,
                            5.159190588235296,
                            0,
                            0,
                            0,
                            1,
                            0
                        ];
                        this._loadMatrix(e, t1);
                    }, e.prototype.colorTone = function(t1, e, r, n, i) {
                        t1 = t1 || .2, e = e || .15, r = r || 16770432, n = n || 3375104;
                        var o = (r >> 16 & 255) / 255, s = (r >> 8 & 255) / 255, a = (255 & r) / 255, u = (n >> 16 & 255) / 255, h = (n >> 8 & 255) / 255, l = (255 & n) / 255, c = [
                            .3,
                            .59,
                            .11,
                            0,
                            0,
                            o,
                            s,
                            a,
                            t1,
                            0,
                            u,
                            h,
                            l,
                            e,
                            0,
                            o - u,
                            s - h,
                            a - l,
                            0,
                            0
                        ];
                        this._loadMatrix(c, i);
                    }, e.prototype.night = function(t1, e) {
                        t1 = t1 || .1;
                        var r = [
                            -2 * t1,
                            -t1,
                            0,
                            0,
                            0,
                            -t1,
                            0,
                            t1,
                            0,
                            0,
                            0,
                            t1,
                            2 * t1,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0
                        ];
                        this._loadMatrix(r, e);
                    }, e.prototype.predator = function(t1, e) {
                        var r = [
                            11.224130630493164 * t1,
                            -4.794486999511719 * t1,
                            -2.8746118545532227 * t1,
                            0 * t1,
                            .40342438220977783 * t1,
                            -3.6330697536468506 * t1,
                            9.193157196044922 * t1,
                            -2.951810836791992 * t1,
                            0 * t1,
                            -1.316135048866272 * t1,
                            -3.2184197902679443 * t1,
                            -4.2375030517578125 * t1,
                            7.476448059082031 * t1,
                            0 * t1,
                            .8044459223747253 * t1,
                            0,
                            0,
                            0,
                            1,
                            0
                        ];
                        this._loadMatrix(r, e);
                    }, e.prototype.lsd = function(t1) {
                        var e = [
                            2,
                            -0.4,
                            .5,
                            0,
                            0,
                            -0.5,
                            2,
                            -0.4,
                            0,
                            0,
                            -0.4,
                            -0.5,
                            3,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0
                        ];
                        this._loadMatrix(e, t1);
                    }, e.prototype.reset = function() {
                        var t1 = [
                            1,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0
                        ];
                        this._loadMatrix(t1, !1);
                    }, s(e, [
                        {
                            key: "matrix",
                            get: function() {
                                return this.uniforms.m;
                            },
                            set: function(t1) {
                                this.uniforms.m = t1;
                            }
                        },
                        {
                            key: "alpha",
                            get: function() {
                                return this.uniforms.uAlpha;
                            },
                            set: function(t1) {
                                this.uniforms.uAlpha = t1;
                            }
                        }
                    ]), e;
                }(u.Filter));
                r.default = h, h.prototype.grayscale = h.prototype.greyscale;
            },
            {
                "../../core": 65,
                path: 23
            }
        ],
        150: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function i(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function o(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var s = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), a = t1("../../core"), u = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(a), h = (t1("path"), function(t1) {
                    function e(r, o) {
                        n(this, e);
                        var s = new u.Matrix;
                        r.renderable = !1;
                        var a = i(this, t1.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nvoid main(void)\n{\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vTextureCoord = aTextureCoord;\n}", "varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\n\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n   vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n   map -= 0.5;\n   map.xy *= scale;\n\n   gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), filterClamp.xy, filterClamp.zw));\n}\n"));
                        return a.maskSprite = r, a.maskMatrix = s, a.uniforms.mapSampler = r._texture, a.uniforms.filterMatrix = s, a.uniforms.scale = {
                            x: 1,
                            y: 1
                        }, null !== o && void 0 !== o || (o = 20), a.scale = new u.Point(o, o), a;
                    }
                    return o(e, t1), e.prototype.apply = function(t1, e, r) {
                        var n = 1 / r.destinationFrame.width * (r.size.width / e.size.width);
                        this.uniforms.filterMatrix = t1.calculateSpriteMatrix(this.maskMatrix, this.maskSprite), this.uniforms.scale.x = this.scale.x * n, this.uniforms.scale.y = this.scale.y * n, t1.applyFilter(this, e, r);
                    }, s(e, [
                        {
                            key: "map",
                            get: function() {
                                return this.uniforms.mapSampler;
                            },
                            set: function(t1) {
                                this.uniforms.mapSampler = t1;
                            }
                        }
                    ]), e;
                }(u.Filter));
                r.default = h;
            },
            {
                "../../core": 65,
                path: 23
            }
        ],
        151: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function i(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function o(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var s = t1("../../core"), a = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(s), u = (t1("path"), function(t1) {
                    function e() {
                        return n(this, e), i(this, t1.call(this, "\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform vec4 filterArea;\n\nvarying vec2 vTextureCoord;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n   vTextureCoord = aTextureCoord;\n\n   vec2 fragCoord = vTextureCoord * filterArea.xy;\n\n   texcoords(fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}", 'varying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n \n --\n \n From:\n https://github.com/mitsuhiko/webgl-meincraft\n \n Copyright (c) 2011 by Armin Ronacher.\n \n Some rights reserved.\n \n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n \n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n \n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n \n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n \n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n    \n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n    \n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n    \n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n    \n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n    \n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n      vec2 fragCoord = vTextureCoord * filterArea.xy;\n\n      vec4 color;\n\n    color = fxaa(uSampler, fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n      gl_FragColor = color;\n}\n'));
                    }
                    return o(e, t1), e;
                }(a.Filter));
                r.default = u;
            },
            {
                "../../core": 65,
                path: 23
            }
        ],
        152: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                r.__esModule = !0;
                var i = t1("./fxaa/FXAAFilter");
                Object.defineProperty(r, "FXAAFilter", {
                    enumerable: !0,
                    get: function() {
                        return n(i).default;
                    }
                });
                var o = t1("./noise/NoiseFilter");
                Object.defineProperty(r, "NoiseFilter", {
                    enumerable: !0,
                    get: function() {
                        return n(o).default;
                    }
                });
                var s = t1("./displacement/DisplacementFilter");
                Object.defineProperty(r, "DisplacementFilter", {
                    enumerable: !0,
                    get: function() {
                        return n(s).default;
                    }
                });
                var a = t1("./blur/BlurFilter");
                Object.defineProperty(r, "BlurFilter", {
                    enumerable: !0,
                    get: function() {
                        return n(a).default;
                    }
                });
                var u = t1("./blur/BlurXFilter");
                Object.defineProperty(r, "BlurXFilter", {
                    enumerable: !0,
                    get: function() {
                        return n(u).default;
                    }
                });
                var h = t1("./blur/BlurYFilter");
                Object.defineProperty(r, "BlurYFilter", {
                    enumerable: !0,
                    get: function() {
                        return n(h).default;
                    }
                });
                var l = t1("./colormatrix/ColorMatrixFilter");
                Object.defineProperty(r, "ColorMatrixFilter", {
                    enumerable: !0,
                    get: function() {
                        return n(l).default;
                    }
                });
                var c = t1("./void/VoidFilter");
                Object.defineProperty(r, "VoidFilter", {
                    enumerable: !0,
                    get: function() {
                        return n(c).default;
                    }
                });
            },
            {
                "./blur/BlurFilter": 143,
                "./blur/BlurXFilter": 144,
                "./blur/BlurYFilter": 145,
                "./colormatrix/ColorMatrixFilter": 149,
                "./displacement/DisplacementFilter": 150,
                "./fxaa/FXAAFilter": 151,
                "./noise/NoiseFilter": 153,
                "./void/VoidFilter": 154
            }
        ],
        153: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function i(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function o(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var s = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), a = t1("../../core"), u = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(a), h = (t1("path"), function(t1) {
                    function e() {
                        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .5, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random();
                        n(this, e);
                        var s = i(this, t1.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) * uNoise;\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n\n    gl_FragColor = color;\n}\n"));
                        return s.noise = r, s.seed = o, s;
                    }
                    return o(e, t1), s(e, [
                        {
                            key: "noise",
                            get: function() {
                                return this.uniforms.uNoise;
                            },
                            set: function(t1) {
                                this.uniforms.uNoise = t1;
                            }
                        },
                        {
                            key: "seed",
                            get: function() {
                                return this.uniforms.uSeed;
                            },
                            set: function(t1) {
                                this.uniforms.uSeed = t1;
                            }
                        }
                    ]), e;
                }(u.Filter));
                r.default = h;
            },
            {
                "../../core": 65,
                path: 23
            }
        ],
        154: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function i(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function o(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var s = t1("../../core"), a = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(s), u = (t1("path"), function(t1) {
                    function e() {
                        n(this, e);
                        var r = i(this, t1.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n"));
                        return r.glShaderKey = "void", r;
                    }
                    return o(e, t1), e;
                }(a.Filter));
                r.default = u;
            },
            {
                "../../core": 65,
                path: 23
            }
        ],
        155: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), o = t1("../core"), s = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(o), a = function() {
                    function t1() {
                        n(this, t1), this.global = new s.Point, this.target = null, this.originalEvent = null, this.identifier = null, this.isPrimary = !1, this.button = 0, this.buttons = 0, this.width = 0, this.height = 0, this.tiltX = 0, this.tiltY = 0, this.pointerType = null, this.pressure = 0, this.rotationAngle = 0, this.twist = 0, this.tangentialPressure = 0;
                    }
                    return t1.prototype.getLocalPosition = function(t1, e, r) {
                        return t1.worldTransform.applyInverse(r || this.global, e);
                    }, t1.prototype._copyEvent = function(t1) {
                        t1.isPrimary && (this.isPrimary = !0), this.button = t1.button, this.buttons = t1.buttons, this.width = t1.width, this.height = t1.height, this.tiltX = t1.tiltX, this.tiltY = t1.tiltY, this.pointerType = t1.pointerType, this.pressure = t1.pressure, this.rotationAngle = t1.rotationAngle, this.twist = t1.twist || 0, this.tangentialPressure = t1.tangentialPressure || 0;
                    }, t1.prototype._reset = function() {
                        this.isPrimary = !1;
                    }, i(t1, [
                        {
                            key: "pointerId",
                            get: function() {
                                return this.identifier;
                            }
                        }
                    ]), t1;
                }();
                r.default = a;
            },
            {
                "../core": 65
            }
        ],
        156: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = function() {
                    function t1() {
                        n(this, t1), this.stopped = !1, this.target = null, this.currentTarget = null, this.type = null, this.data = null;
                    }
                    return t1.prototype.stopPropagation = function() {
                        this.stopped = !0;
                    }, t1.prototype._reset = function() {
                        this.stopped = !1, this.currentTarget = null, this.target = null;
                    }, t1;
                }();
                r.default = i;
            },
            {}
        ],
        157: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function o(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function s(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t1) {
                    return typeof t1;
                } : function(t1) {
                    return t1 && "function" == typeof Symbol && t1.constructor === Symbol && t1 !== Symbol.prototype ? "symbol" : typeof t1;
                }, u = t1("../core"), h = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(u), l = t1("./InteractionData"), c = n(l), d = t1("./InteractionEvent"), f = n(d), p = t1("./InteractionTrackingData"), v = n(p), y = t1("eventemitter3"), g = n(y), m = t1("./interactiveTarget"), _ = n(m);
                h.utils.mixins.delayMixin(h.DisplayObject.prototype, _.default);
                var b = "MOUSE", x = {
                    target: null,
                    data: {
                        global: null
                    }
                }, T = function(t1) {
                    function e(r, n) {
                        i(this, e);
                        var s = o(this, t1.call(this));
                        return n = n || {}, s.renderer = r, s.autoPreventDefault = void 0 === n.autoPreventDefault || n.autoPreventDefault, s.interactionFrequency = n.interactionFrequency || 10, s.mouse = new c.default, s.mouse.identifier = b, s.mouse.global.set(-999999), s.activeInteractionData = {}, s.activeInteractionData[b] = s.mouse, s.interactionDataPool = [], s.eventData = new f.default, s.interactionDOMElement = null, s.moveWhenInside = !1, s.eventsAdded = !1, s.mouseOverRenderer = !1, s.supportsTouchEvents = "ontouchstart" in window, s.supportsPointerEvents = !!window.PointerEvent, s.onPointerUp = s.onPointerUp.bind(s), s.processPointerUp = s.processPointerUp.bind(s), s.onPointerCancel = s.onPointerCancel.bind(s), s.processPointerCancel = s.processPointerCancel.bind(s), s.onPointerDown = s.onPointerDown.bind(s), s.processPointerDown = s.processPointerDown.bind(s), s.onPointerMove = s.onPointerMove.bind(s), s.processPointerMove = s.processPointerMove.bind(s), s.onPointerOut = s.onPointerOut.bind(s), s.processPointerOverOut = s.processPointerOverOut.bind(s), s.onPointerOver = s.onPointerOver.bind(s), s.cursorStyles = {
                            default: "inherit",
                            pointer: "pointer"
                        }, s.currentCursorMode = null, s.cursor = null, s._tempPoint = new h.Point, s.resolution = 1, s.setTargetElement(s.renderer.view, s.renderer.resolution), s;
                    }
                    return s(e, t1), e.prototype.hitTest = function(t1, e) {
                        return x.target = null, x.data.global = t1, e || (e = this.renderer._lastObjectRendered), this.processInteractive(x, e, null, !0), x.target;
                    }, e.prototype.setTargetElement = function(t1) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        this.removeEvents(), this.interactionDOMElement = t1, this.resolution = e, this.addEvents();
                    }, e.prototype.addEvents = function() {
                        this.interactionDOMElement && (h.ticker.shared.add(this.update, this, h.UPDATE_PRIORITY.INTERACTION), window.navigator.msPointerEnabled ? (this.interactionDOMElement.style["-ms-content-zooming"] = "none", this.interactionDOMElement.style["-ms-touch-action"] = "none") : this.supportsPointerEvents && (this.interactionDOMElement.style["touch-action"] = "none"), this.supportsPointerEvents ? (window.document.addEventListener("pointermove", this.onPointerMove, !0), this.interactionDOMElement.addEventListener("pointerdown", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("pointerleave", this.onPointerOut, !0), this.interactionDOMElement.addEventListener("pointerover", this.onPointerOver, !0), window.addEventListener("pointercancel", this.onPointerCancel, !0), window.addEventListener("pointerup", this.onPointerUp, !0)) : (window.document.addEventListener("mousemove", this.onPointerMove, !0), this.interactionDOMElement.addEventListener("mousedown", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("mouseout", this.onPointerOut, !0), this.interactionDOMElement.addEventListener("mouseover", this.onPointerOver, !0), window.addEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.interactionDOMElement.addEventListener("touchstart", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("touchcancel", this.onPointerCancel, !0), this.interactionDOMElement.addEventListener("touchend", this.onPointerUp, !0), this.interactionDOMElement.addEventListener("touchmove", this.onPointerMove, !0)), this.eventsAdded = !0);
                    }, e.prototype.removeEvents = function() {
                        this.interactionDOMElement && (h.ticker.shared.remove(this.update, this), window.navigator.msPointerEnabled ? (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = "") : this.supportsPointerEvents && (this.interactionDOMElement.style["touch-action"] = ""), this.supportsPointerEvents ? (window.document.removeEventListener("pointermove", this.onPointerMove, !0), this.interactionDOMElement.removeEventListener("pointerdown", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("pointerleave", this.onPointerOut, !0), this.interactionDOMElement.removeEventListener("pointerover", this.onPointerOver, !0), window.removeEventListener("pointercancel", this.onPointerCancel, !0), window.removeEventListener("pointerup", this.onPointerUp, !0)) : (window.document.removeEventListener("mousemove", this.onPointerMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("mouseout", this.onPointerOut, !0), this.interactionDOMElement.removeEventListener("mouseover", this.onPointerOver, !0), window.removeEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.interactionDOMElement.removeEventListener("touchstart", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("touchcancel", this.onPointerCancel, !0), this.interactionDOMElement.removeEventListener("touchend", this.onPointerUp, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onPointerMove, !0)), this.interactionDOMElement = null, this.eventsAdded = !1);
                    }, e.prototype.update = function(t1) {
                        if (this._deltaTime += t1, !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0, this.interactionDOMElement)) {
                            if (this.didMove) return void (this.didMove = !1);
                            this.cursor = null;
                            for(var e in this.activeInteractionData)if (this.activeInteractionData.hasOwnProperty(e)) {
                                var r = this.activeInteractionData[e];
                                if (r.originalEvent && "touch" !== r.pointerType) {
                                    var n = this.configureInteractionEventForDOMEvent(this.eventData, r.originalEvent, r);
                                    this.processInteractive(n, this.renderer._lastObjectRendered, this.processPointerOverOut, !0);
                                }
                            }
                            this.setCursorMode(this.cursor);
                        }
                    }, e.prototype.setCursorMode = function(t1) {
                        if (t1 = t1 || "default", this.currentCursorMode !== t1) {
                            this.currentCursorMode = t1;
                            var e = this.cursorStyles[t1];
                            if (e) switch(void 0 === e ? "undefined" : a(e)){
                                case "string":
                                    this.interactionDOMElement.style.cursor = e;
                                    break;
                                case "function":
                                    e(t1);
                                    break;
                                case "object":
                                    Object.assign(this.interactionDOMElement.style, e);
                            }
                            else "string" != typeof t1 || Object.prototype.hasOwnProperty.call(this.cursorStyles, t1) || (this.interactionDOMElement.style.cursor = t1);
                        }
                    }, e.prototype.dispatchEvent = function(t1, e, r) {
                        r.stopped || (r.currentTarget = t1, r.type = e, t1.emit(e, r), t1[e] && t1[e](r));
                    }, e.prototype.mapPositionToPoint = function(t1, e, r) {
                        var n = void 0;
                        n = this.interactionDOMElement.parentElement ? this.interactionDOMElement.getBoundingClientRect() : {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        };
                        var i = navigator.isCocoonJS ? this.resolution : 1 / this.resolution;
                        t1.x = (e - n.left) * (this.interactionDOMElement.width / n.width) * i, t1.y = (r - n.top) * (this.interactionDOMElement.height / n.height) * i;
                    }, e.prototype.processInteractive = function(t1, e, r, n, i) {
                        if (!e || !e.visible) return !1;
                        var o = t1.data.global;
                        i = e.interactive || i;
                        var s = !1, a = i;
                        if (e.hitArea ? a = !1 : n && e._mask && (e._mask.containsPoint(o) || (n = !1)), e.interactiveChildren && e.children) for(var u = e.children, h = u.length - 1; h >= 0; h--){
                            var l = u[h], c = this.processInteractive(t1, l, r, n, a);
                            if (c) {
                                if (!l.parent) continue;
                                a = !1, c && (t1.target && (n = !1), s = !0);
                            }
                        }
                        return i && (n && !t1.target && (e.hitArea ? (e.worldTransform.applyInverse(o, this._tempPoint), e.hitArea.contains(this._tempPoint.x, this._tempPoint.y) && (s = !0)) : e.containsPoint && e.containsPoint(o) && (s = !0)), e.interactive && (s && !t1.target && (t1.target = e), r && r(t1, e, !!s))), s;
                    }, e.prototype.onPointerDown = function(t1) {
                        if (!this.supportsTouchEvents || "touch" !== t1.pointerType) {
                            var e = this.normalizeToPointerData(t1);
                            this.autoPreventDefault && e[0].isNormalized && t1.preventDefault();
                            for(var r = e.length, n = 0; n < r; n++){
                                var i = e[n], o = this.getInteractionDataForPointerId(i), s = this.configureInteractionEventForDOMEvent(this.eventData, i, o);
                                if (s.data.originalEvent = t1, this.processInteractive(s, this.renderer._lastObjectRendered, this.processPointerDown, !0), this.emit("pointerdown", s), "touch" === i.pointerType) this.emit("touchstart", s);
                                else if ("mouse" === i.pointerType || "pen" === i.pointerType) {
                                    var a = 2 === i.button;
                                    this.emit(a ? "rightdown" : "mousedown", this.eventData);
                                }
                            }
                        }
                    }, e.prototype.processPointerDown = function(t1, e, r) {
                        var n = t1.data, i = t1.data.identifier;
                        if (r) {
                            if (e.trackedPointers[i] || (e.trackedPointers[i] = new v.default(i)), this.dispatchEvent(e, "pointerdown", t1), "touch" === n.pointerType) this.dispatchEvent(e, "touchstart", t1);
                            else if ("mouse" === n.pointerType || "pen" === n.pointerType) {
                                var o = 2 === n.button;
                                o ? e.trackedPointers[i].rightDown = !0 : e.trackedPointers[i].leftDown = !0, this.dispatchEvent(e, o ? "rightdown" : "mousedown", t1);
                            }
                        }
                    }, e.prototype.onPointerComplete = function(t1, e, r) {
                        for(var n = this.normalizeToPointerData(t1), i = n.length, o = t1.target !== this.interactionDOMElement ? "outside" : "", s = 0; s < i; s++){
                            var a = n[s], u = this.getInteractionDataForPointerId(a), h = this.configureInteractionEventForDOMEvent(this.eventData, a, u);
                            if (h.data.originalEvent = t1, this.processInteractive(h, this.renderer._lastObjectRendered, r, e || !o), this.emit(e ? "pointercancel" : "pointerup" + o, h), "mouse" === a.pointerType || "pen" === a.pointerType) {
                                var l = 2 === a.button;
                                this.emit(l ? "rightup" + o : "mouseup" + o, h);
                            } else "touch" === a.pointerType && (this.emit(e ? "touchcancel" : "touchend" + o, h), this.releaseInteractionDataForPointerId(a.pointerId, u));
                        }
                    }, e.prototype.onPointerCancel = function(t1) {
                        this.supportsTouchEvents && "touch" === t1.pointerType || this.onPointerComplete(t1, !0, this.processPointerCancel);
                    }, e.prototype.processPointerCancel = function(t1, e) {
                        var r = t1.data, n = t1.data.identifier;
                        void 0 !== e.trackedPointers[n] && (delete e.trackedPointers[n], this.dispatchEvent(e, "pointercancel", t1), "touch" === r.pointerType && this.dispatchEvent(e, "touchcancel", t1));
                    }, e.prototype.onPointerUp = function(t1) {
                        this.supportsTouchEvents && "touch" === t1.pointerType || this.onPointerComplete(t1, !1, this.processPointerUp);
                    }, e.prototype.processPointerUp = function(t1, e, r) {
                        var n = t1.data, i = t1.data.identifier, o = e.trackedPointers[i], s = "touch" === n.pointerType;
                        if ("mouse" === n.pointerType || "pen" === n.pointerType) {
                            var a = 2 === n.button, u = v.default.FLAGS, h = a ? u.RIGHT_DOWN : u.LEFT_DOWN, l = void 0 !== o && o.flags & h;
                            r ? (this.dispatchEvent(e, a ? "rightup" : "mouseup", t1), l && this.dispatchEvent(e, a ? "rightclick" : "click", t1)) : l && this.dispatchEvent(e, a ? "rightupoutside" : "mouseupoutside", t1), o && (a ? o.rightDown = !1 : o.leftDown = !1);
                        }
                        r ? (this.dispatchEvent(e, "pointerup", t1), s && this.dispatchEvent(e, "touchend", t1), o && (this.dispatchEvent(e, "pointertap", t1), s && (this.dispatchEvent(e, "tap", t1), o.over = !1))) : o && (this.dispatchEvent(e, "pointerupoutside", t1), s && this.dispatchEvent(e, "touchendoutside", t1)), o && o.none && delete e.trackedPointers[i];
                    }, e.prototype.onPointerMove = function(t1) {
                        if (!this.supportsTouchEvents || "touch" !== t1.pointerType) {
                            var e = this.normalizeToPointerData(t1);
                            "mouse" === e[0].pointerType && (this.didMove = !0, this.cursor = null);
                            for(var r = e.length, n = 0; n < r; n++){
                                var i = e[n], o = this.getInteractionDataForPointerId(i), s = this.configureInteractionEventForDOMEvent(this.eventData, i, o);
                                s.data.originalEvent = t1;
                                var a = "touch" !== i.pointerType || this.moveWhenInside;
                                this.processInteractive(s, this.renderer._lastObjectRendered, this.processPointerMove, a), this.emit("pointermove", s), "touch" === i.pointerType && this.emit("touchmove", s), "mouse" !== i.pointerType && "pen" !== i.pointerType || this.emit("mousemove", s);
                            }
                            "mouse" === e[0].pointerType && this.setCursorMode(this.cursor);
                        }
                    }, e.prototype.processPointerMove = function(t1, e, r) {
                        var n = t1.data, i = "touch" === n.pointerType, o = "mouse" === n.pointerType || "pen" === n.pointerType;
                        o && this.processPointerOverOut(t1, e, r), this.moveWhenInside && !r || (this.dispatchEvent(e, "pointermove", t1), i && this.dispatchEvent(e, "touchmove", t1), o && this.dispatchEvent(e, "mousemove", t1));
                    }, e.prototype.onPointerOut = function(t1) {
                        if (!this.supportsTouchEvents || "touch" !== t1.pointerType) {
                            var e = this.normalizeToPointerData(t1), r = e[0];
                            "mouse" === r.pointerType && (this.mouseOverRenderer = !1, this.setCursorMode(null));
                            var n = this.getInteractionDataForPointerId(r), i = this.configureInteractionEventForDOMEvent(this.eventData, r, n);
                            i.data.originalEvent = r, this.processInteractive(i, this.renderer._lastObjectRendered, this.processPointerOverOut, !1), this.emit("pointerout", i), "mouse" === r.pointerType || "pen" === r.pointerType ? this.emit("mouseout", i) : this.releaseInteractionDataForPointerId(n.identifier);
                        }
                    }, e.prototype.processPointerOverOut = function(t1, e, r) {
                        var n = t1.data, i = t1.data.identifier, o = "mouse" === n.pointerType || "pen" === n.pointerType, s = e.trackedPointers[i];
                        r && !s && (s = e.trackedPointers[i] = new v.default(i)), void 0 !== s && (r && this.mouseOverRenderer ? (s.over || (s.over = !0, this.dispatchEvent(e, "pointerover", t1), o && this.dispatchEvent(e, "mouseover", t1)), o && null === this.cursor && (this.cursor = e.cursor)) : s.over && (s.over = !1, this.dispatchEvent(e, "pointerout", this.eventData), o && this.dispatchEvent(e, "mouseout", t1), s.none && delete e.trackedPointers[i]));
                    }, e.prototype.onPointerOver = function(t1) {
                        var e = this.normalizeToPointerData(t1), r = e[0], n = this.getInteractionDataForPointerId(r), i = this.configureInteractionEventForDOMEvent(this.eventData, r, n);
                        i.data.originalEvent = r, "mouse" === r.pointerType && (this.mouseOverRenderer = !0), this.emit("pointerover", i), "mouse" !== r.pointerType && "pen" !== r.pointerType || this.emit("mouseover", i);
                    }, e.prototype.getInteractionDataForPointerId = function(t1) {
                        var e = t1.pointerId, r = void 0;
                        return e === b || "mouse" === t1.pointerType ? r = this.mouse : this.activeInteractionData[e] ? r = this.activeInteractionData[e] : (r = this.interactionDataPool.pop() || new c.default, r.identifier = e, this.activeInteractionData[e] = r), r._copyEvent(t1), r;
                    }, e.prototype.releaseInteractionDataForPointerId = function(t1) {
                        var e = this.activeInteractionData[t1];
                        e && (delete this.activeInteractionData[t1], e._reset(), this.interactionDataPool.push(e));
                    }, e.prototype.configureInteractionEventForDOMEvent = function(t1, e, r) {
                        return t1.data = r, this.mapPositionToPoint(r.global, e.clientX, e.clientY), navigator.isCocoonJS && "touch" === e.pointerType && (r.global.x = r.global.x / this.resolution, r.global.y = r.global.y / this.resolution), "touch" === e.pointerType && (e.globalX = r.global.x, e.globalY = r.global.y), r.originalEvent = e, t1._reset(), t1;
                    }, e.prototype.normalizeToPointerData = function(t1) {
                        var e = [];
                        if (this.supportsTouchEvents && t1 instanceof TouchEvent) for(var r = 0, n = t1.changedTouches.length; r < n; r++){
                            var i = t1.changedTouches[r];
                            void 0 === i.button && (i.button = t1.touches.length ? 1 : 0), void 0 === i.buttons && (i.buttons = t1.touches.length ? 1 : 0), void 0 === i.isPrimary && (i.isPrimary = 1 === t1.touches.length && "touchstart" === t1.type), void 0 === i.width && (i.width = i.radiusX || 1), void 0 === i.height && (i.height = i.radiusY || 1), void 0 === i.tiltX && (i.tiltX = 0), void 0 === i.tiltY && (i.tiltY = 0), void 0 === i.pointerType && (i.pointerType = "touch"), void 0 === i.pointerId && (i.pointerId = i.identifier || 0), void 0 === i.pressure && (i.pressure = i.force || .5), i.twist = 0, i.tangentialPressure = 0, void 0 === i.layerX && (i.layerX = i.offsetX = i.clientX), void 0 === i.layerY && (i.layerY = i.offsetY = i.clientY), i.isNormalized = !0, e.push(i);
                        }
                        else !(t1 instanceof MouseEvent) || this.supportsPointerEvents && t1 instanceof window.PointerEvent ? e.push(t1) : (void 0 === t1.isPrimary && (t1.isPrimary = !0), void 0 === t1.width && (t1.width = 1), void 0 === t1.height && (t1.height = 1), void 0 === t1.tiltX && (t1.tiltX = 0), void 0 === t1.tiltY && (t1.tiltY = 0), void 0 === t1.pointerType && (t1.pointerType = "mouse"), void 0 === t1.pointerId && (t1.pointerId = b), void 0 === t1.pressure && (t1.pressure = .5), t1.twist = 0, t1.tangentialPressure = 0, t1.isNormalized = !0, e.push(t1));
                        return e;
                    }, e.prototype.destroy = function() {
                        this.removeEvents(), this.removeAllListeners(), this.renderer = null, this.mouse = null, this.eventData = null, this.interactionDOMElement = null, this.onPointerDown = null, this.processPointerDown = null, this.onPointerUp = null, this.processPointerUp = null, this.onPointerCancel = null, this.processPointerCancel = null, this.onPointerMove = null, this.processPointerMove = null, this.onPointerOut = null, this.processPointerOverOut = null, this.onPointerOver = null, this._tempPoint = null;
                    }, e;
                }(g.default);
                r.default = T, h.WebGLRenderer.registerPlugin("interaction", T), h.CanvasRenderer.registerPlugin("interaction", T);
            },
            {
                "../core": 65,
                "./InteractionData": 155,
                "./InteractionEvent": 156,
                "./InteractionTrackingData": 158,
                "./interactiveTarget": 160,
                eventemitter3: 3
            }
        ],
        158: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), o = function() {
                    function t1(e) {
                        n(this, t1), this._pointerId = e, this._flags = t1.FLAGS.NONE;
                    }
                    return t1.prototype._doSet = function(t1, e) {
                        this._flags = e ? this._flags | t1 : this._flags & ~t1;
                    }, i(t1, [
                        {
                            key: "pointerId",
                            get: function() {
                                return this._pointerId;
                            }
                        },
                        {
                            key: "flags",
                            get: function() {
                                return this._flags;
                            },
                            set: function(t1) {
                                this._flags = t1;
                            }
                        },
                        {
                            key: "none",
                            get: function() {
                                return this._flags === this.constructor.FLAGS.NONE;
                            }
                        },
                        {
                            key: "over",
                            get: function() {
                                return 0 != (this._flags & this.constructor.FLAGS.OVER);
                            },
                            set: function(t1) {
                                this._doSet(this.constructor.FLAGS.OVER, t1);
                            }
                        },
                        {
                            key: "rightDown",
                            get: function() {
                                return 0 != (this._flags & this.constructor.FLAGS.RIGHT_DOWN);
                            },
                            set: function(t1) {
                                this._doSet(this.constructor.FLAGS.RIGHT_DOWN, t1);
                            }
                        },
                        {
                            key: "leftDown",
                            get: function() {
                                return 0 != (this._flags & this.constructor.FLAGS.LEFT_DOWN);
                            },
                            set: function(t1) {
                                this._doSet(this.constructor.FLAGS.LEFT_DOWN, t1);
                            }
                        }
                    ]), t1;
                }();
                r.default = o, o.FLAGS = Object.freeze({
                    NONE: 0,
                    OVER: 1,
                    LEFT_DOWN: 2,
                    RIGHT_DOWN: 4
                });
            },
            {}
        ],
        159: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                r.__esModule = !0;
                var i = t1("./InteractionData");
                Object.defineProperty(r, "InteractionData", {
                    enumerable: !0,
                    get: function() {
                        return n(i).default;
                    }
                });
                var o = t1("./InteractionManager");
                Object.defineProperty(r, "InteractionManager", {
                    enumerable: !0,
                    get: function() {
                        return n(o).default;
                    }
                });
                var s = t1("./interactiveTarget");
                Object.defineProperty(r, "interactiveTarget", {
                    enumerable: !0,
                    get: function() {
                        return n(s).default;
                    }
                });
                var a = t1("./InteractionTrackingData");
                Object.defineProperty(r, "InteractionTrackingData", {
                    enumerable: !0,
                    get: function() {
                        return n(a).default;
                    }
                });
                var u = t1("./InteractionEvent");
                Object.defineProperty(r, "InteractionEvent", {
                    enumerable: !0,
                    get: function() {
                        return n(u).default;
                    }
                });
            },
            {
                "./InteractionData": 155,
                "./InteractionEvent": 156,
                "./InteractionManager": 157,
                "./InteractionTrackingData": 158,
                "./interactiveTarget": 160
            }
        ],
        160: [
            function(t1, e, r) {
                "use strict";
                r.__esModule = !0, r.default = {
                    interactive: !1,
                    interactiveChildren: !0,
                    hitArea: null,
                    get buttonMode () {
                        return "pointer" === this.cursor;
                    },
                    set buttonMode (t){
                        t ? this.cursor = "pointer" : "pointer" === this.cursor && (this.cursor = null);
                    },
                    cursor: null,
                    get trackedPointers () {
                        return void 0 === this._trackedPointers && (this._trackedPointers = {}), this._trackedPointers;
                    },
                    _trackedPointers: void 0
                };
            },
            {}
        ],
        161: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    t1.bitmapFont = u.BitmapText.registerFont(t1.data, e);
                }
                r.__esModule = !0, r.parse = n, r.default = function() {
                    return function(t1, e) {
                        if (!t1.data || t1.type !== a.Resource.TYPE.XML) return void e();
                        if (0 === t1.data.getElementsByTagName("page").length || 0 === t1.data.getElementsByTagName("info").length || null === t1.data.getElementsByTagName("info")[0].getAttribute("face")) return void e();
                        var r = t1.isDataUrl ? "" : o.dirname(t1.url);
                        t1.isDataUrl && ("." === r && (r = ""), this.baseUrl && r && "/" === this.baseUrl.charAt(this.baseUrl.length - 1) && (r += "/")), (r = r.replace(this.baseUrl, "")) && "/" !== r.charAt(r.length - 1) && (r += "/");
                        var i = r + t1.data.getElementsByTagName("page")[0].getAttribute("file");
                        if (s.utils.TextureCache[i]) n(t1, s.utils.TextureCache[i]), e();
                        else {
                            var u = {
                                crossOrigin: t1.crossOrigin,
                                loadType: a.Resource.LOAD_TYPE.IMAGE,
                                metadata: t1.metadata.imageMetadata,
                                parentResource: t1
                            };
                            this.add(t1.name + "_image", i, u, function(r) {
                                n(t1, r.texture), e();
                            });
                        }
                    };
                };
                var i = t1("path"), o = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(i), s = t1("../core"), a = t1("resource-loader"), u = t1("../extras");
            },
            {
                "../core": 65,
                "../extras": 141,
                path: 23,
                "resource-loader": 36
            }
        ],
        162: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                r.__esModule = !0, r.shared = r.Resource = r.textureParser = r.getResourcePath = r.spritesheetParser = r.parseBitmapFontData = r.bitmapFontParser = r.Loader = void 0;
                var i = t1("./bitmapFontParser");
                Object.defineProperty(r, "bitmapFontParser", {
                    enumerable: !0,
                    get: function() {
                        return n(i).default;
                    }
                }), Object.defineProperty(r, "parseBitmapFontData", {
                    enumerable: !0,
                    get: function() {
                        return i.parse;
                    }
                });
                var o = t1("./spritesheetParser");
                Object.defineProperty(r, "spritesheetParser", {
                    enumerable: !0,
                    get: function() {
                        return n(o).default;
                    }
                }), Object.defineProperty(r, "getResourcePath", {
                    enumerable: !0,
                    get: function() {
                        return o.getResourcePath;
                    }
                });
                var s = t1("./textureParser");
                Object.defineProperty(r, "textureParser", {
                    enumerable: !0,
                    get: function() {
                        return n(s).default;
                    }
                });
                var a = t1("resource-loader");
                Object.defineProperty(r, "Resource", {
                    enumerable: !0,
                    get: function() {
                        return a.Resource;
                    }
                });
                var u = t1("../core/Application"), h = n(u), l = t1("./loader"), c = n(l);
                r.Loader = c.default;
                var d = new c.default;
                d.destroy = function() {}, r.shared = d;
                var f = h.default.prototype;
                f._loader = null, Object.defineProperty(f, "loader", {
                    get: function() {
                        if (!this._loader) {
                            var t1 = this._options.sharedLoader;
                            this._loader = t1 ? d : new c.default;
                        }
                        return this._loader;
                    }
                }), f._parentDestroy = f.destroy, f.destroy = function(t1) {
                    this._loader && (this._loader.destroy(), this._loader = null), this._parentDestroy(t1);
                };
            },
            {
                "../core/Application": 43,
                "./bitmapFontParser": 161,
                "./loader": 163,
                "./spritesheetParser": 164,
                "./textureParser": 165,
                "resource-loader": 36
            }
        ],
        163: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function o(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function s(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var a = t1("resource-loader"), u = n(a), h = t1("resource-loader/lib/middlewares/parsing/blob"), l = t1("eventemitter3"), c = n(l), d = t1("./textureParser"), f = n(d), p = t1("./spritesheetParser"), v = n(p), y = t1("./bitmapFontParser"), g = n(y), m = function(t1) {
                    function e(r, n) {
                        i(this, e);
                        var s = o(this, t1.call(this, r, n));
                        c.default.call(s);
                        for(var a = 0; a < e._pixiMiddleware.length; ++a)s.use(e._pixiMiddleware[a]());
                        return s.onStart.add(function(t1) {
                            return s.emit("start", t1);
                        }), s.onProgress.add(function(t1, e) {
                            return s.emit("progress", t1, e);
                        }), s.onError.add(function(t1, e, r) {
                            return s.emit("error", t1, e, r);
                        }), s.onLoad.add(function(t1, e) {
                            return s.emit("load", t1, e);
                        }), s.onComplete.add(function(t1, e) {
                            return s.emit("complete", t1, e);
                        }), s;
                    }
                    return s(e, t1), e.addPixiMiddleware = function(t1) {
                        e._pixiMiddleware.push(t1);
                    }, e.prototype.destroy = function() {
                        this.removeAllListeners(), this.reset();
                    }, e;
                }(u.default);
                r.default = m;
                for(var _ in c.default.prototype)m.prototype[_] = c.default.prototype[_];
                m._pixiMiddleware = [
                    h.blobMiddlewareFactory,
                    f.default,
                    v.default,
                    g.default
                ];
                var b = u.default.Resource;
                b.setExtensionXhrType("fnt", b.XHR_RESPONSE_TYPE.DOCUMENT);
            },
            {
                "./bitmapFontParser": 161,
                "./spritesheetParser": 164,
                "./textureParser": 165,
                eventemitter3: 3,
                "resource-loader": 36,
                "resource-loader/lib/middlewares/parsing/blob": 37
            }
        ],
        164: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    return t1.isDataUrl ? t1.data.meta.image : s.default.resolve(t1.url.replace(e, ""), t1.data.meta.image);
                }
                r.__esModule = !0, r.default = function() {
                    return function(t1, e) {
                        var r = t1.name + "_image";
                        if (!t1.data || t1.type !== i.Resource.TYPE.JSON || !t1.data.frames || this.resources[r]) return void e();
                        var o = {
                            crossOrigin: t1.crossOrigin,
                            loadType: i.Resource.LOAD_TYPE.IMAGE,
                            metadata: t1.metadata.imageMetadata,
                            parentResource: t1
                        }, s = n(t1, this.baseUrl);
                        this.add(r, s, o, function(r) {
                            var n = new a.Spritesheet(r.texture.baseTexture, t1.data, t1.url);
                            n.parse(function() {
                                t1.spritesheet = n, t1.textures = n.textures, e();
                            });
                        });
                    };
                }, r.getResourcePath = n;
                var i = t1("resource-loader"), o = t1("url"), s = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(o), a = t1("../core");
            },
            {
                "../core": 65,
                "resource-loader": 36,
                url: 29
            }
        ],
        165: [
            function(t1, e, r) {
                "use strict";
                r.__esModule = !0, r.default = function() {
                    return function(t1, e) {
                        t1.data && t1.type === n.Resource.TYPE.IMAGE && (t1.texture = o.default.fromLoader(t1.data, t1.url, t1.name)), e();
                    };
                };
                var n = t1("resource-loader"), i = t1("../core/textures/Texture"), o = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(i);
            },
            {
                "../core/textures/Texture": 115,
                "resource-loader": 36
            }
        ],
        166: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function i(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function o(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var s = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), a = t1("../core"), u = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(a), h = t1("../extras/TextureTransform"), l = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(h), c = new u.Point, d = new u.Polygon, f = function(t1) {
                    function e(r, o, s, a, h) {
                        n(this, e);
                        var c = i(this, t1.call(this));
                        return c._texture = r, c.uvs = s || new Float32Array([
                            0,
                            0,
                            1,
                            0,
                            1,
                            1,
                            0,
                            1
                        ]), c.vertices = o || new Float32Array([
                            0,
                            0,
                            100,
                            0,
                            100,
                            100,
                            0,
                            100
                        ]), c.indices = a || new Uint16Array([
                            0,
                            1,
                            3,
                            2
                        ]), c.dirty = 0, c.indexDirty = 0, c.blendMode = u.BLEND_MODES.NORMAL, c.canvasPadding = 0, c.drawMode = h || e.DRAW_MODES.TRIANGLE_MESH, c.shader = null, c.tintRgb = new Float32Array([
                            1,
                            1,
                            1
                        ]), c._glDatas = {}, c._uvTransform = new l.default(r), c.uploadUvTransform = !1, c.pluginName = "mesh", c;
                    }
                    return o(e, t1), e.prototype._renderWebGL = function(t1) {
                        this.refresh(), t1.setObjectRenderer(t1.plugins[this.pluginName]), t1.plugins[this.pluginName].render(this);
                    }, e.prototype._renderCanvas = function(t1) {
                        this.refresh(), t1.plugins[this.pluginName].render(this);
                    }, e.prototype._onTextureUpdate = function() {
                        this._uvTransform.texture = this._texture, this.refresh();
                    }, e.prototype.multiplyUvs = function() {
                        this.uploadUvTransform || this._uvTransform.multiplyUvs(this.uvs);
                    }, e.prototype.refresh = function(t1) {
                        this._uvTransform.update(t1) && this._refresh();
                    }, e.prototype._refresh = function() {}, e.prototype._calculateBounds = function() {
                        this._bounds.addVertices(this.transform, this.vertices, 0, this.vertices.length);
                    }, e.prototype.containsPoint = function(t1) {
                        if (!this.getBounds().contains(t1.x, t1.y)) return !1;
                        this.worldTransform.applyInverse(t1, c);
                        for(var r = this.vertices, n = d.points, i = this.indices, o = this.indices.length, s = this.drawMode === e.DRAW_MODES.TRIANGLES ? 3 : 1, a = 0; a + 2 < o; a += s){
                            var u = 2 * i[a], h = 2 * i[a + 1], l = 2 * i[a + 2];
                            if (n[0] = r[u], n[1] = r[u + 1], n[2] = r[h], n[3] = r[h + 1], n[4] = r[l], n[5] = r[l + 1], d.contains(c.x, c.y)) return !0;
                        }
                        return !1;
                    }, s(e, [
                        {
                            key: "texture",
                            get: function() {
                                return this._texture;
                            },
                            set: function(t1) {
                                this._texture !== t1 && (this._texture = t1, t1 && (t1.baseTexture.hasLoaded ? this._onTextureUpdate() : t1.once("update", this._onTextureUpdate, this)));
                            }
                        },
                        {
                            key: "tint",
                            get: function() {
                                return u.utils.rgb2hex(this.tintRgb);
                            },
                            set: function(t1) {
                                this.tintRgb = u.utils.hex2rgb(t1, this.tintRgb);
                            }
                        }
                    ]), e;
                }(u.Container);
                r.default = f, f.DRAW_MODES = {
                    TRIANGLE_MESH: 0,
                    TRIANGLES: 1
                };
            },
            {
                "../core": 65,
                "../extras/TextureTransform": 136
            }
        ],
        167: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function i(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function o(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var s = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), a = t1("./Plane"), u = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(a), h = 10, l = function(t1) {
                    function e(r, o, s, a, u) {
                        n(this, e);
                        var l = i(this, t1.call(this, r, 4, 4));
                        return l._origWidth = r.orig.width, l._origHeight = r.orig.height, l._width = l._origWidth, l._height = l._origHeight, l.leftWidth = void 0 !== o ? o : h, l.rightWidth = void 0 !== a ? a : h, l.topHeight = void 0 !== s ? s : h, l.bottomHeight = void 0 !== u ? u : h, l.refresh(!0), l;
                    }
                    return o(e, t1), e.prototype.updateHorizontalVertices = function() {
                        var t1 = this.vertices;
                        t1[9] = t1[11] = t1[13] = t1[15] = this._topHeight, t1[17] = t1[19] = t1[21] = t1[23] = this._height - this._bottomHeight, t1[25] = t1[27] = t1[29] = t1[31] = this._height;
                    }, e.prototype.updateVerticalVertices = function() {
                        var t1 = this.vertices;
                        t1[2] = t1[10] = t1[18] = t1[26] = this._leftWidth, t1[4] = t1[12] = t1[20] = t1[28] = this._width - this._rightWidth, t1[6] = t1[14] = t1[22] = t1[30] = this._width;
                    }, e.prototype._renderCanvas = function(t1) {
                        var e = t1.context;
                        e.globalAlpha = this.worldAlpha;
                        var r = this.worldTransform, n = t1.resolution;
                        t1.roundPixels ? e.setTransform(r.a * n, r.b * n, r.c * n, r.d * n, r.tx * n | 0, r.ty * n | 0) : e.setTransform(r.a * n, r.b * n, r.c * n, r.d * n, r.tx * n, r.ty * n);
                        var i = this._texture.baseTexture, o = i.source, s = i.width, a = i.height;
                        this.drawSegment(e, o, s, a, 0, 1, 10, 11), this.drawSegment(e, o, s, a, 2, 3, 12, 13), this.drawSegment(e, o, s, a, 4, 5, 14, 15), this.drawSegment(e, o, s, a, 8, 9, 18, 19), this.drawSegment(e, o, s, a, 10, 11, 20, 21), this.drawSegment(e, o, s, a, 12, 13, 22, 23), this.drawSegment(e, o, s, a, 16, 17, 26, 27), this.drawSegment(e, o, s, a, 18, 19, 28, 29), this.drawSegment(e, o, s, a, 20, 21, 30, 31);
                    }, e.prototype.drawSegment = function(t1, e, r, n, i, o, s, a) {
                        var u = this.uvs, h = this.vertices, l = (u[s] - u[i]) * r, c = (u[a] - u[o]) * n, d = h[s] - h[i], f = h[a] - h[o];
                        l < 1 && (l = 1), c < 1 && (c = 1), d < 1 && (d = 1), f < 1 && (f = 1), t1.drawImage(e, u[i] * r, u[o] * n, l, c, h[i], h[o], d, f);
                    }, e.prototype._refresh = function() {
                        t1.prototype._refresh.call(this);
                        var e = this.uvs, r = this._texture;
                        this._origWidth = r.orig.width, this._origHeight = r.orig.height;
                        var n = 1 / this._origWidth, i = 1 / this._origHeight;
                        e[0] = e[8] = e[16] = e[24] = 0, e[1] = e[3] = e[5] = e[7] = 0, e[6] = e[14] = e[22] = e[30] = 1, e[25] = e[27] = e[29] = e[31] = 1, e[2] = e[10] = e[18] = e[26] = n * this._leftWidth, e[4] = e[12] = e[20] = e[28] = 1 - n * this._rightWidth, e[9] = e[11] = e[13] = e[15] = i * this._topHeight, e[17] = e[19] = e[21] = e[23] = 1 - i * this._bottomHeight, this.updateHorizontalVertices(), this.updateVerticalVertices(), this.dirty = !0, this.multiplyUvs();
                    }, s(e, [
                        {
                            key: "width",
                            get: function() {
                                return this._width;
                            },
                            set: function(t1) {
                                this._width = t1, this._refresh();
                            }
                        },
                        {
                            key: "height",
                            get: function() {
                                return this._height;
                            },
                            set: function(t1) {
                                this._height = t1, this._refresh();
                            }
                        },
                        {
                            key: "leftWidth",
                            get: function() {
                                return this._leftWidth;
                            },
                            set: function(t1) {
                                this._leftWidth = t1, this._refresh();
                            }
                        },
                        {
                            key: "rightWidth",
                            get: function() {
                                return this._rightWidth;
                            },
                            set: function(t1) {
                                this._rightWidth = t1, this._refresh();
                            }
                        },
                        {
                            key: "topHeight",
                            get: function() {
                                return this._topHeight;
                            },
                            set: function(t1) {
                                this._topHeight = t1, this._refresh();
                            }
                        },
                        {
                            key: "bottomHeight",
                            get: function() {
                                return this._bottomHeight;
                            },
                            set: function(t1) {
                                this._bottomHeight = t1, this._refresh();
                            }
                        }
                    ]), e;
                }(u.default);
                r.default = l;
            },
            {
                "./Plane": 168
            }
        ],
        168: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function i(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function o(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var s = t1("./Mesh"), a = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(s), u = function(t1) {
                    function e(r, o, s) {
                        n(this, e);
                        var u = i(this, t1.call(this, r));
                        return u._ready = !0, u.verticesX = o || 10, u.verticesY = s || 10, u.drawMode = a.default.DRAW_MODES.TRIANGLES, u.refresh(), u;
                    }
                    return o(e, t1), e.prototype._refresh = function() {
                        for(var t1 = this._texture, e = this.verticesX * this.verticesY, r = [], n = [], i = [], o = [], s = this.verticesX - 1, a = this.verticesY - 1, u = t1.width / s, h = t1.height / a, l = 0; l < e; l++){
                            var c = l % this.verticesX, d = l / this.verticesX | 0;
                            r.push(c * u, d * h), i.push(c / s, d / a);
                        }
                        for(var f = s * a, p = 0; p < f; p++){
                            var v = p % s, y = p / s | 0, g = y * this.verticesX + v, m = y * this.verticesX + v + 1, _ = (y + 1) * this.verticesX + v, b = (y + 1) * this.verticesX + v + 1;
                            o.push(g, m, _), o.push(m, b, _);
                        }
                        this.vertices = new Float32Array(r), this.uvs = new Float32Array(i), this.colors = new Float32Array(n), this.indices = new Uint16Array(o), this.indexDirty = !0, this.multiplyUvs();
                    }, e.prototype._onTextureUpdate = function() {
                        a.default.prototype._onTextureUpdate.call(this), this._ready && this.refresh();
                    }, e;
                }(a.default);
                r.default = u;
            },
            {
                "./Mesh": 166
            }
        ],
        169: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function i(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function o(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var s = t1("./Mesh"), a = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(s), u = function(t1) {
                    function e(r, o) {
                        n(this, e);
                        var s = i(this, t1.call(this, r));
                        return s.points = o, s.vertices = new Float32Array(4 * o.length), s.uvs = new Float32Array(4 * o.length), s.colors = new Float32Array(2 * o.length), s.indices = new Uint16Array(2 * o.length), s.autoUpdate = !0, s.refresh(), s;
                    }
                    return o(e, t1), e.prototype._refresh = function() {
                        var t1 = this.points;
                        if (!(t1.length < 1) && this._texture._uvs) {
                            this.vertices.length / 4 !== t1.length && (this.vertices = new Float32Array(4 * t1.length), this.uvs = new Float32Array(4 * t1.length), this.colors = new Float32Array(2 * t1.length), this.indices = new Uint16Array(2 * t1.length));
                            var e = this.uvs, r = this.indices, n = this.colors;
                            e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, n[0] = 1, n[1] = 1, r[0] = 0, r[1] = 1;
                            for(var i = t1.length, o = 1; o < i; o++){
                                var s = 4 * o, a = o / (i - 1);
                                e[s] = a, e[s + 1] = 0, e[s + 2] = a, e[s + 3] = 1, s = 2 * o, n[s] = 1, n[s + 1] = 1, s = 2 * o, r[s] = s, r[s + 1] = s + 1;
                            }
                            this.dirty++, this.indexDirty++, this.multiplyUvs(), this.refreshVertices();
                        }
                    }, e.prototype.refreshVertices = function() {
                        var t1 = this.points;
                        if (!(t1.length < 1)) for(var e = t1[0], r = void 0, n = 0, i = 0, o = this.vertices, s = t1.length, a = 0; a < s; a++){
                            var u = t1[a], h = 4 * a;
                            r = a < t1.length - 1 ? t1[a + 1] : u, i = -(r.x - e.x), n = r.y - e.y;
                            var l = 10 * (1 - a / (s - 1));
                            l > 1 && (l = 1);
                            var c = Math.sqrt(n * n + i * i), d = this._texture.height / 2;
                            n /= c, i /= c, n *= d, i *= d, o[h] = u.x + n, o[h + 1] = u.y + i, o[h + 2] = u.x - n, o[h + 3] = u.y - i, e = u;
                        }
                    }, e.prototype.updateTransform = function() {
                        this.autoUpdate && this.refreshVertices(), this.containerUpdateTransform();
                    }, e;
                }(a.default);
                r.default = u;
            },
            {
                "./Mesh": 166
            }
        ],
        170: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = t1("../../core"), o = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(i), s = t1("../Mesh"), a = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(s), u = function() {
                    function t1(e) {
                        n(this, t1), this.renderer = e;
                    }
                    return t1.prototype.render = function(t1) {
                        var e = this.renderer, r = e.context, n = t1.worldTransform, i = e.resolution;
                        e.roundPixels ? r.setTransform(n.a * i, n.b * i, n.c * i, n.d * i, n.tx * i | 0, n.ty * i | 0) : r.setTransform(n.a * i, n.b * i, n.c * i, n.d * i, n.tx * i, n.ty * i), e.setBlendMode(t1.blendMode), t1.drawMode === a.default.DRAW_MODES.TRIANGLE_MESH ? this._renderTriangleMesh(t1) : this._renderTriangles(t1);
                    }, t1.prototype._renderTriangleMesh = function(t1) {
                        for(var e = t1.vertices.length / 2, r = 0; r < e - 2; r++){
                            var n = 2 * r;
                            this._renderDrawTriangle(t1, n, n + 2, n + 4);
                        }
                    }, t1.prototype._renderTriangles = function(t1) {
                        for(var e = t1.indices, r = e.length, n = 0; n < r; n += 3){
                            var i = 2 * e[n], o = 2 * e[n + 1], s = 2 * e[n + 2];
                            this._renderDrawTriangle(t1, i, o, s);
                        }
                    }, t1.prototype._renderDrawTriangle = function(t1, e, r, n) {
                        var i = this.renderer.context, o = t1.uvs, s = t1.vertices, a = t1._texture;
                        if (a.valid) {
                            var u = a.baseTexture, h = u.source, l = u.width, c = u.height, d = void 0, f = void 0, p = void 0, v = void 0, y = void 0, g = void 0;
                            if (t1.uploadUvTransform) {
                                var m = t1._uvTransform.mapCoord;
                                d = (o[e] * m.a + o[e + 1] * m.c + m.tx) * u.width, f = (o[r] * m.a + o[r + 1] * m.c + m.tx) * u.width, p = (o[n] * m.a + o[n + 1] * m.c + m.tx) * u.width, v = (o[e] * m.b + o[e + 1] * m.d + m.ty) * u.height, y = (o[r] * m.b + o[r + 1] * m.d + m.ty) * u.height, g = (o[n] * m.b + o[n + 1] * m.d + m.ty) * u.height;
                            } else d = o[e] * u.width, f = o[r] * u.width, p = o[n] * u.width, v = o[e + 1] * u.height, y = o[r + 1] * u.height, g = o[n + 1] * u.height;
                            var _ = s[e], b = s[r], x = s[n], T = s[e + 1], w = s[r + 1], E = s[n + 1];
                            if (t1.canvasPadding > 0) {
                                var S = t1.canvasPadding / t1.worldTransform.a, O = t1.canvasPadding / t1.worldTransform.d, P = (_ + b + x) / 3, M = (T + w + E) / 3, C = _ - P, R = T - M, A = Math.sqrt(C * C + R * R);
                                _ = P + C / A * (A + S), T = M + R / A * (A + O), C = b - P, R = w - M, A = Math.sqrt(C * C + R * R), b = P + C / A * (A + S), w = M + R / A * (A + O), C = x - P, R = E - M, A = Math.sqrt(C * C + R * R), x = P + C / A * (A + S), E = M + R / A * (A + O);
                            }
                            i.save(), i.beginPath(), i.moveTo(_, T), i.lineTo(b, w), i.lineTo(x, E), i.closePath(), i.clip();
                            var I = d * y + v * p + f * g - y * p - v * f - d * g, D = _ * y + v * x + b * g - y * x - v * b - _ * g, L = d * b + _ * p + f * x - b * p - _ * f - d * x, N = d * y * x + v * b * p + _ * f * g - _ * y * p - v * f * x - d * b * g, F = T * y + v * E + w * g - y * E - v * w - T * g, B = d * w + T * p + f * E - w * p - T * f - d * E, k = d * y * E + v * w * p + T * f * g - T * y * p - v * f * E - d * w * g;
                            i.transform(D / I, F / I, L / I, B / I, N / I, k / I), i.drawImage(h, 0, 0, l * u.resolution, c * u.resolution, 0, 0, l, c), i.restore(), this.renderer.invalidateBlendMode();
                        }
                    }, t1.prototype.renderMeshFlat = function(t1) {
                        var e = this.renderer.context, r = t1.vertices, n = r.length / 2;
                        e.beginPath();
                        for(var i = 1; i < n - 2; ++i){
                            var o = 2 * i, s = r[o], a = r[o + 1], u = r[o + 2], h = r[o + 3], l = r[o + 4], c = r[o + 5];
                            e.moveTo(s, a), e.lineTo(u, h), e.lineTo(l, c);
                        }
                        e.fillStyle = "#FF0000", e.fill(), e.closePath();
                    }, t1.prototype.destroy = function() {
                        this.renderer = null;
                    }, t1;
                }();
                r.default = u, o.CanvasRenderer.registerPlugin("mesh", u);
            },
            {
                "../../core": 65,
                "../Mesh": 166
            }
        ],
        171: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                r.__esModule = !0;
                var i = t1("./Mesh");
                Object.defineProperty(r, "Mesh", {
                    enumerable: !0,
                    get: function() {
                        return n(i).default;
                    }
                });
                var o = t1("./webgl/MeshRenderer");
                Object.defineProperty(r, "MeshRenderer", {
                    enumerable: !0,
                    get: function() {
                        return n(o).default;
                    }
                });
                var s = t1("./canvas/CanvasMeshRenderer");
                Object.defineProperty(r, "CanvasMeshRenderer", {
                    enumerable: !0,
                    get: function() {
                        return n(s).default;
                    }
                });
                var a = t1("./Plane");
                Object.defineProperty(r, "Plane", {
                    enumerable: !0,
                    get: function() {
                        return n(a).default;
                    }
                });
                var u = t1("./NineSlicePlane");
                Object.defineProperty(r, "NineSlicePlane", {
                    enumerable: !0,
                    get: function() {
                        return n(u).default;
                    }
                });
                var h = t1("./Rope");
                Object.defineProperty(r, "Rope", {
                    enumerable: !0,
                    get: function() {
                        return n(h).default;
                    }
                });
            },
            {
                "./Mesh": 166,
                "./NineSlicePlane": 167,
                "./Plane": 168,
                "./Rope": 169,
                "./canvas/CanvasMeshRenderer": 170,
                "./webgl/MeshRenderer": 172
            }
        ],
        172: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function o(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function s(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var a = t1("../../core"), u = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(a), h = t1("pixi-gl-core"), l = n(h), c = t1("../Mesh"), d = n(c), f = (t1("path"), u.Matrix.IDENTITY), p = function(t1) {
                    function e(r) {
                        i(this, e);
                        var n = o(this, t1.call(this, r));
                        return n.shader = null, n;
                    }
                    return s(e, t1), e.prototype.onContextChange = function() {
                        var t1 = this.renderer.gl;
                        this.shader = new u.Shader(t1, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n");
                    }, e.prototype.render = function(t1) {
                        var e = this.renderer, r = e.gl, n = t1._texture;
                        if (n.valid) {
                            var i = t1._glDatas[e.CONTEXT_UID];
                            i || (e.bindVao(null), i = {
                                shader: this.shader,
                                vertexBuffer: l.default.GLBuffer.createVertexBuffer(r, t1.vertices, r.STREAM_DRAW),
                                uvBuffer: l.default.GLBuffer.createVertexBuffer(r, t1.uvs, r.STREAM_DRAW),
                                indexBuffer: l.default.GLBuffer.createIndexBuffer(r, t1.indices, r.STATIC_DRAW),
                                vao: null,
                                dirty: t1.dirty,
                                indexDirty: t1.indexDirty
                            }, i.vao = new l.default.VertexArrayObject(r).addIndex(i.indexBuffer).addAttribute(i.vertexBuffer, i.shader.attributes.aVertexPosition, r.FLOAT, !1, 8, 0).addAttribute(i.uvBuffer, i.shader.attributes.aTextureCoord, r.FLOAT, !1, 8, 0), t1._glDatas[e.CONTEXT_UID] = i), e.bindVao(i.vao), t1.dirty !== i.dirty && (i.dirty = t1.dirty, i.uvBuffer.upload(t1.uvs)), t1.indexDirty !== i.indexDirty && (i.indexDirty = t1.indexDirty, i.indexBuffer.upload(t1.indices)), i.vertexBuffer.upload(t1.vertices), e.bindShader(i.shader), i.shader.uniforms.uSampler = e.bindTexture(n), e.state.setBlendMode(u.utils.correctBlendMode(t1.blendMode, n.baseTexture.premultipliedAlpha)), i.shader.uniforms.uTransform && (t1.uploadUvTransform ? i.shader.uniforms.uTransform = t1._uvTransform.mapCoord.toArray(!0) : i.shader.uniforms.uTransform = f.toArray(!0)), i.shader.uniforms.translationMatrix = t1.worldTransform.toArray(!0), i.shader.uniforms.uColor = u.utils.premultiplyRgba(t1.tintRgb, t1.worldAlpha, i.shader.uniforms.uColor, n.baseTexture.premultipliedAlpha);
                            var o = t1.drawMode === d.default.DRAW_MODES.TRIANGLE_MESH ? r.TRIANGLE_STRIP : r.TRIANGLES;
                            i.vao.draw(o, t1.indices.length, 0);
                        }
                    }, e;
                }(u.ObjectRenderer);
                r.default = p, u.WebGLRenderer.registerPlugin("mesh", p);
            },
            {
                "../../core": 65,
                "../Mesh": 166,
                path: 23,
                "pixi-gl-core": 12
            }
        ],
        173: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function i(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function o(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var s = function() {
                    function t1(t1, e) {
                        for(var r = 0; r < e.length; r++){
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                        }
                    }
                    return function(e, r, n) {
                        return r && t1(e.prototype, r), n && t1(e, n), e;
                    };
                }(), a = t1("../core"), u = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(a), h = t1("../core/utils"), l = function(t1) {
                    function e() {
                        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1500, o = arguments[1], s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384;
                        n(this, e);
                        var a = i(this, t1.call(this));
                        return s > 16384 && (s = 16384), s > r && (s = r), a._properties = [
                            !1,
                            !0,
                            !1,
                            !1,
                            !1
                        ], a._maxSize = r, a._batchSize = s, a._glBuffers = {}, a._bufferToUpdate = 0, a.interactiveChildren = !1, a.blendMode = u.BLEND_MODES.NORMAL, a.roundPixels = !0, a.baseTexture = null, a.setProperties(o), a._tint = 0, a.tintRgb = new Float32Array(4), a.tint = 16777215, a;
                    }
                    return o(e, t1), e.prototype.setProperties = function(t1) {
                        t1 && (this._properties[0] = "scale" in t1 ? !!t1.scale : this._properties[0], this._properties[1] = "position" in t1 ? !!t1.position : this._properties[1], this._properties[2] = "rotation" in t1 ? !!t1.rotation : this._properties[2], this._properties[3] = "uvs" in t1 ? !!t1.uvs : this._properties[3], this._properties[4] = "alpha" in t1 ? !!t1.alpha : this._properties[4]);
                    }, e.prototype.updateTransform = function() {
                        this.displayObjectUpdateTransform();
                    }, e.prototype.renderWebGL = function(t1) {
                        var e = this;
                        this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable && (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture, this.baseTexture.hasLoaded || this.baseTexture.once("update", function() {
                            return e.onChildrenChange(0);
                        })), t1.setObjectRenderer(t1.plugins.particle), t1.plugins.particle.render(this));
                    }, e.prototype.onChildrenChange = function(t1) {
                        var e = Math.floor(t1 / this._batchSize);
                        e < this._bufferToUpdate && (this._bufferToUpdate = e);
                    }, e.prototype.renderCanvas = function(t1) {
                        if (this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable) {
                            var e = t1.context, r = this.worldTransform, n = !0, i = 0, o = 0, s = 0, a = 0;
                            t1.setBlendMode(this.blendMode), e.globalAlpha = this.worldAlpha, this.displayObjectUpdateTransform();
                            for(var u = 0; u < this.children.length; ++u){
                                var h = this.children[u];
                                if (h.visible) {
                                    var l = h._texture.frame;
                                    if (e.globalAlpha = this.worldAlpha * h.alpha, h.rotation % (2 * Math.PI) == 0) n && (e.setTransform(r.a, r.b, r.c, r.d, r.tx * t1.resolution, r.ty * t1.resolution), n = !1), i = h.anchor.x * (-l.width * h.scale.x) + h.position.x + .5, o = h.anchor.y * (-l.height * h.scale.y) + h.position.y + .5, s = l.width * h.scale.x, a = l.height * h.scale.y;
                                    else {
                                        n || (n = !0), h.displayObjectUpdateTransform();
                                        var c = h.worldTransform;
                                        t1.roundPixels ? e.setTransform(c.a, c.b, c.c, c.d, c.tx * t1.resolution | 0, c.ty * t1.resolution | 0) : e.setTransform(c.a, c.b, c.c, c.d, c.tx * t1.resolution, c.ty * t1.resolution), i = h.anchor.x * -l.width + .5, o = h.anchor.y * -l.height + .5, s = l.width, a = l.height;
                                    }
                                    var d = h._texture.baseTexture.resolution;
                                    e.drawImage(h._texture.baseTexture.source, l.x * d, l.y * d, l.width * d, l.height * d, i * t1.resolution, o * t1.resolution, s * t1.resolution, a * t1.resolution);
                                }
                            }
                        }
                    }, e.prototype.destroy = function(e) {
                        if (t1.prototype.destroy.call(this, e), this._buffers) for(var r = 0; r < this._buffers.length; ++r)this._buffers[r].destroy();
                        this._properties = null, this._buffers = null;
                    }, s(e, [
                        {
                            key: "tint",
                            get: function() {
                                return this._tint;
                            },
                            set: function(t1) {
                                this._tint = t1, (0, h.hex2rgb)(t1, this.tintRgb);
                            }
                        }
                    ]), e;
                }(u.Container);
                r.default = l;
            },
            {
                "../core": 65,
                "../core/utils": 124
            }
        ],
        174: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                r.__esModule = !0;
                var i = t1("./ParticleContainer");
                Object.defineProperty(r, "ParticleContainer", {
                    enumerable: !0,
                    get: function() {
                        return n(i).default;
                    }
                });
                var o = t1("./webgl/ParticleRenderer");
                Object.defineProperty(r, "ParticleRenderer", {
                    enumerable: !0,
                    get: function() {
                        return n(o).default;
                    }
                });
            },
            {
                "./ParticleContainer": 173,
                "./webgl/ParticleRenderer": 176
            }
        ],
        175: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var o = t1("pixi-gl-core"), s = n(o), a = t1("../../core/utils/createIndicesForQuads"), u = n(a), h = function() {
                    function t1(e, r, n, o) {
                        i(this, t1), this.gl = e, this.vertSize = 2, this.vertByteSize = 4 * this.vertSize, this.size = o, this.dynamicProperties = [], this.staticProperties = [];
                        for(var s = 0; s < r.length; ++s){
                            var a = r[s];
                            a = {
                                attribute: a.attribute,
                                size: a.size,
                                uploadFunction: a.uploadFunction,
                                offset: a.offset
                            }, n[s] ? this.dynamicProperties.push(a) : this.staticProperties.push(a);
                        }
                        this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.initBuffers();
                    }
                    return t1.prototype.initBuffers = function() {
                        var t1 = this.gl, e = 0;
                        this.indices = (0, u.default)(this.size), this.indexBuffer = s.default.GLBuffer.createIndexBuffer(t1, this.indices, t1.STATIC_DRAW), this.dynamicStride = 0;
                        for(var r = 0; r < this.dynamicProperties.length; ++r){
                            var n = this.dynamicProperties[r];
                            n.offset = e, e += n.size, this.dynamicStride += n.size;
                        }
                        this.dynamicData = new Float32Array(this.size * this.dynamicStride * 4), this.dynamicBuffer = s.default.GLBuffer.createVertexBuffer(t1, this.dynamicData, t1.STREAM_DRAW);
                        var i = 0;
                        this.staticStride = 0;
                        for(var o = 0; o < this.staticProperties.length; ++o){
                            var a = this.staticProperties[o];
                            a.offset = i, i += a.size, this.staticStride += a.size;
                        }
                        this.staticData = new Float32Array(this.size * this.staticStride * 4), this.staticBuffer = s.default.GLBuffer.createVertexBuffer(t1, this.staticData, t1.STATIC_DRAW), this.vao = new s.default.VertexArrayObject(t1).addIndex(this.indexBuffer);
                        for(var h = 0; h < this.dynamicProperties.length; ++h){
                            var l = this.dynamicProperties[h];
                            this.vao.addAttribute(this.dynamicBuffer, l.attribute, t1.FLOAT, !1, 4 * this.dynamicStride, 4 * l.offset);
                        }
                        for(var c = 0; c < this.staticProperties.length; ++c){
                            var d = this.staticProperties[c];
                            this.vao.addAttribute(this.staticBuffer, d.attribute, t1.FLOAT, !1, 4 * this.staticStride, 4 * d.offset);
                        }
                    }, t1.prototype.uploadDynamic = function(t1, e, r) {
                        for(var n = 0; n < this.dynamicProperties.length; n++){
                            var i = this.dynamicProperties[n];
                            i.uploadFunction(t1, e, r, this.dynamicData, this.dynamicStride, i.offset);
                        }
                        this.dynamicBuffer.upload();
                    }, t1.prototype.uploadStatic = function(t1, e, r) {
                        for(var n = 0; n < this.staticProperties.length; n++){
                            var i = this.staticProperties[n];
                            i.uploadFunction(t1, e, r, this.staticData, this.staticStride, i.offset);
                        }
                        this.staticBuffer.upload();
                    }, t1.prototype.destroy = function() {
                        this.dynamicProperties = null, this.dynamicData = null, this.dynamicBuffer.destroy(), this.staticProperties = null, this.staticData = null, this.staticBuffer.destroy();
                    }, t1;
                }();
                r.default = h;
            },
            {
                "../../core/utils/createIndicesForQuads": 122,
                "pixi-gl-core": 12
            }
        ],
        176: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                function i(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function o(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function s(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var a = t1("../../core"), u = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(a), h = t1("./ParticleShader"), l = n(h), c = t1("./ParticleBuffer"), d = n(c), f = function(t1) {
                    function e(r) {
                        i(this, e);
                        var n = o(this, t1.call(this, r));
                        return n.shader = null, n.indexBuffer = null, n.properties = null, n.tempMatrix = new u.Matrix, n.CONTEXT_UID = 0, n;
                    }
                    return s(e, t1), e.prototype.onContextChange = function() {
                        var t1 = this.renderer.gl;
                        this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.shader = new l.default(t1), this.properties = [
                            {
                                attribute: this.shader.attributes.aVertexPosition,
                                size: 2,
                                uploadFunction: this.uploadVertices,
                                offset: 0
                            },
                            {
                                attribute: this.shader.attributes.aPositionCoord,
                                size: 2,
                                uploadFunction: this.uploadPosition,
                                offset: 0
                            },
                            {
                                attribute: this.shader.attributes.aRotation,
                                size: 1,
                                uploadFunction: this.uploadRotation,
                                offset: 0
                            },
                            {
                                attribute: this.shader.attributes.aTextureCoord,
                                size: 2,
                                uploadFunction: this.uploadUvs,
                                offset: 0
                            },
                            {
                                attribute: this.shader.attributes.aColor,
                                size: 1,
                                uploadFunction: this.uploadAlpha,
                                offset: 0
                            }
                        ];
                    }, e.prototype.start = function() {
                        this.renderer.bindShader(this.shader);
                    }, e.prototype.render = function(t1) {
                        var e = t1.children, r = t1._maxSize, n = t1._batchSize, i = this.renderer, o = e.length;
                        if (0 !== o) {
                            o > r && (o = r);
                            var s = t1._glBuffers[i.CONTEXT_UID];
                            s || (s = t1._glBuffers[i.CONTEXT_UID] = this.generateBuffers(t1));
                            var a = e[0]._texture.baseTexture;
                            this.renderer.setBlendMode(u.utils.correctBlendMode(t1.blendMode, a.premultipliedAlpha));
                            var h = i.gl, l = t1.worldTransform.copy(this.tempMatrix);
                            l.prepend(i._activeRenderTarget.projectionMatrix), this.shader.uniforms.projectionMatrix = l.toArray(!0), this.shader.uniforms.uColor = u.utils.premultiplyRgba(t1.tintRgb, t1.worldAlpha, this.shader.uniforms.uColor, a.premultipliedAlpha), this.shader.uniforms.uSampler = i.bindTexture(a);
                            for(var c = 0, d = 0; c < o; c += n, d += 1){
                                var f = o - c;
                                f > n && (f = n);
                                var p = s[d];
                                p.uploadDynamic(e, c, f), t1._bufferToUpdate === d && (p.uploadStatic(e, c, f), t1._bufferToUpdate = d + 1), i.bindVao(p.vao), p.vao.draw(h.TRIANGLES, 6 * f);
                            }
                        }
                    }, e.prototype.generateBuffers = function(t1) {
                        for(var e = this.renderer.gl, r = [], n = t1._maxSize, i = t1._batchSize, o = t1._properties, s = 0; s < n; s += i)r.push(new d.default(e, this.properties, o, i));
                        return r;
                    }, e.prototype.uploadVertices = function(t1, e, r, n, i, o) {
                        for(var s = 0, a = 0, u = 0, h = 0, l = 0; l < r; ++l){
                            var c = t1[e + l], d = c._texture, f = c.scale.x, p = c.scale.y, v = d.trim, y = d.orig;
                            v ? (a = v.x - c.anchor.x * y.width, s = a + v.width, h = v.y - c.anchor.y * y.height, u = h + v.height) : (s = y.width * (1 - c.anchor.x), a = y.width * -c.anchor.x, u = y.height * (1 - c.anchor.y), h = y.height * -c.anchor.y), n[o] = a * f, n[o + 1] = h * p, n[o + i] = s * f, n[o + i + 1] = h * p, n[o + 2 * i] = s * f, n[o + 2 * i + 1] = u * p, n[o + 3 * i] = a * f, n[o + 3 * i + 1] = u * p, o += 4 * i;
                        }
                    }, e.prototype.uploadPosition = function(t1, e, r, n, i, o) {
                        for(var s = 0; s < r; s++){
                            var a = t1[e + s].position;
                            n[o] = a.x, n[o + 1] = a.y, n[o + i] = a.x, n[o + i + 1] = a.y, n[o + 2 * i] = a.x, n[o + 2 * i + 1] = a.y, n[o + 3 * i] = a.x, n[o + 3 * i + 1] = a.y, o += 4 * i;
                        }
                    }, e.prototype.uploadRotation = function(t1, e, r, n, i, o) {
                        for(var s = 0; s < r; s++){
                            var a = t1[e + s].rotation;
                            n[o] = a, n[o + i] = a, n[o + 2 * i] = a, n[o + 3 * i] = a, o += 4 * i;
                        }
                    }, e.prototype.uploadUvs = function(t1, e, r, n, i, o) {
                        for(var s = 0; s < r; ++s){
                            var a = t1[e + s]._texture._uvs;
                            a ? (n[o] = a.x0, n[o + 1] = a.y0, n[o + i] = a.x1, n[o + i + 1] = a.y1, n[o + 2 * i] = a.x2, n[o + 2 * i + 1] = a.y2, n[o + 3 * i] = a.x3, n[o + 3 * i + 1] = a.y3, o += 4 * i) : (n[o] = 0, n[o + 1] = 0, n[o + i] = 0, n[o + i + 1] = 0, n[o + 2 * i] = 0, n[o + 2 * i + 1] = 0, n[o + 3 * i] = 0, n[o + 3 * i + 1] = 0, o += 4 * i);
                        }
                    }, e.prototype.uploadAlpha = function(t1, e, r, n, i, o) {
                        for(var s = 0; s < r; s++){
                            var a = t1[e + s].alpha;
                            n[o] = a, n[o + i] = a, n[o + 2 * i] = a, n[o + 3 * i] = a, o += 4 * i;
                        }
                    }, e.prototype.destroy = function() {
                        this.renderer.gl && this.renderer.gl.deleteBuffer(this.indexBuffer), t1.prototype.destroy.call(this), this.shader.destroy(), this.indices = null, this.tempMatrix = null;
                    }, e;
                }(u.ObjectRenderer);
                r.default = f, u.WebGLRenderer.registerPlugin("particle", f);
            },
            {
                "../../core": 65,
                "./ParticleBuffer": 175,
                "./ParticleShader": 177
            }
        ],
        177: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function i(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function o(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                r.__esModule = !0;
                var s = t1("../../core/Shader"), a = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(s), u = function(t1) {
                    function e(r) {
                        return n(this, e), i(this, t1.call(this, r, [
                            "attribute vec2 aVertexPosition;",
                            "attribute vec2 aTextureCoord;",
                            "attribute float aColor;",
                            "attribute vec2 aPositionCoord;",
                            "attribute vec2 aScale;",
                            "attribute float aRotation;",
                            "uniform mat3 projectionMatrix;",
                            "varying vec2 vTextureCoord;",
                            "varying float vColor;",
                            "void main(void){",
                            "   vec2 v = aVertexPosition;",
                            "   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);",
                            "   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);",
                            "   v = v + aPositionCoord;",
                            "   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);",
                            "   vTextureCoord = aTextureCoord;",
                            "   vColor = aColor;",
                            "}"
                        ].join("\n"), [
                            "varying vec2 vTextureCoord;",
                            "varying float vColor;",
                            "uniform sampler2D uSampler;",
                            "uniform vec4 uColor;",
                            "void main(void){",
                            "  vec4 color = texture2D(uSampler, vTextureCoord) * vColor * uColor;",
                            "  if (color.a == 0.0) discard;",
                            "  gl_FragColor = color;",
                            "}"
                        ].join("\n")));
                    }
                    return o(e, t1), e;
                }(a.default);
                r.default = u;
            },
            {
                "../../core/Shader": 44
            }
        ],
        178: [
            function(t1, e, r) {
                "use strict";
                Math.sign || (Math.sign = function(t1) {
                    return t1 = Number(t1), 0 === t1 || isNaN(t1) ? t1 : t1 > 0 ? 1 : -1;
                });
            },
            {}
        ],
        179: [
            function(t1, e, r) {
                "use strict";
                var n = t1("object-assign"), i = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(n);
                Object.assign || (Object.assign = i.default);
            },
            {
                "object-assign": 5
            }
        ],
        180: [
            function(t1, e, r) {
                "use strict";
                t1("./Object.assign"), t1("./requestAnimationFrame"), t1("./Math.sign"), window.ArrayBuffer || (window.ArrayBuffer = Array), window.Float32Array || (window.Float32Array = Array), window.Uint32Array || (window.Uint32Array = Array), window.Uint16Array || (window.Uint16Array = Array);
            },
            {
                "./Math.sign": 178,
                "./Object.assign": 179,
                "./requestAnimationFrame": 181
            }
        ],
        181: [
            function(t1, e, r) {
                (function(t1) {
                    "use strict";
                    if (Date.now && Date.prototype.getTime || (Date.now = function() {
                        return (new Date).getTime();
                    }), !t1.performance || !t1.performance.now) {
                        var e = Date.now();
                        t1.performance || (t1.performance = {}), t1.performance.now = function() {
                            return Date.now() - e;
                        };
                    }
                    for(var r = Date.now(), n = [
                        "ms",
                        "moz",
                        "webkit",
                        "o"
                    ], i = 0; i < n.length && !t1.requestAnimationFrame; ++i){
                        var o = n[i];
                        t1.requestAnimationFrame = t1[o + "RequestAnimationFrame"], t1.cancelAnimationFrame = t1[o + "CancelAnimationFrame"] || t1[o + "CancelRequestAnimationFrame"];
                    }
                    t1.requestAnimationFrame || (t1.requestAnimationFrame = function(t1) {
                        if ("function" != typeof t1) throw new TypeError(t1 + "is not a function");
                        var e = Date.now(), n = 16 + r - e;
                        return n < 0 && (n = 0), r = e, setTimeout(function() {
                            r = Date.now(), t1(performance.now());
                        }, n);
                    }), t1.cancelAnimationFrame || (t1.cancelAnimationFrame = function(t1) {
                        return clearTimeout(t1);
                    });
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
            },
            {}
        ],
        182: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function i(t1, e) {
                    var r = !1;
                    if (t1 && t1._textures && t1._textures.length) {
                        for(var n = 0; n < t1._textures.length; n++)if (t1._textures[n] instanceof d.Texture) {
                            var i = t1._textures[n].baseTexture;
                            -1 === e.indexOf(i) && (e.push(i), r = !0);
                        }
                    }
                    return r;
                }
                function o(t1, e) {
                    return t1 instanceof d.BaseTexture && (-1 === e.indexOf(t1) && e.push(t1), !0);
                }
                function s(t1, e) {
                    if (t1._texture && t1._texture instanceof d.Texture) {
                        var r = t1._texture.baseTexture;
                        return -1 === e.indexOf(r) && e.push(r), !0;
                    }
                    return !1;
                }
                function a(t1, e) {
                    return e instanceof d.Text && (e.updateText(!0), !0);
                }
                function u(t1, e) {
                    if (e instanceof d.TextStyle) {
                        var r = e.toFontString();
                        return d.TextMetrics.measureFont(r), !0;
                    }
                    return !1;
                }
                function h(t1, e) {
                    if (t1 instanceof d.Text) {
                        -1 === e.indexOf(t1.style) && e.push(t1.style), -1 === e.indexOf(t1) && e.push(t1);
                        var r = t1._texture.baseTexture;
                        return -1 === e.indexOf(r) && e.push(r), !0;
                    }
                    return !1;
                }
                function l(t1, e) {
                    return t1 instanceof d.TextStyle && (-1 === e.indexOf(t1) && e.push(t1), !0);
                }
                r.__esModule = !0;
                var c = t1("../core"), d = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(c), f = t1("./limiters/CountLimiter"), p = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(f), v = d.ticker.shared;
                d.settings.UPLOADS_PER_FRAME = 4;
                var y = function() {
                    function t1(e) {
                        var r = this;
                        n(this, t1), this.limiter = new p.default(d.settings.UPLOADS_PER_FRAME), this.renderer = e, this.uploadHookHelper = null, this.queue = [], this.addHooks = [], this.uploadHooks = [], this.completes = [], this.ticking = !1, this.delayedTick = function() {
                            r.queue && r.prepareItems();
                        }, this.registerFindHook(h), this.registerFindHook(l), this.registerFindHook(i), this.registerFindHook(o), this.registerFindHook(s), this.registerUploadHook(a), this.registerUploadHook(u);
                    }
                    return t1.prototype.upload = function(t1, e) {
                        "function" == typeof t1 && (e = t1, t1 = null), t1 && this.add(t1), this.queue.length ? (e && this.completes.push(e), this.ticking || (this.ticking = !0, v.addOnce(this.tick, this, d.UPDATE_PRIORITY.UTILITY))) : e && e();
                    }, t1.prototype.tick = function() {
                        setTimeout(this.delayedTick, 0);
                    }, t1.prototype.prepareItems = function() {
                        for(this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload();){
                            var t1 = this.queue[0], e = !1;
                            if (t1 && !t1._destroyed) {
                                for(var r = 0, n = this.uploadHooks.length; r < n; r++)if (this.uploadHooks[r](this.uploadHookHelper, t1)) {
                                    this.queue.shift(), e = !0;
                                    break;
                                }
                            }
                            e || this.queue.shift();
                        }
                        if (this.queue.length) v.addOnce(this.tick, this, d.UPDATE_PRIORITY.UTILITY);
                        else {
                            this.ticking = !1;
                            var i = this.completes.slice(0);
                            this.completes.length = 0;
                            for(var o = 0, s = i.length; o < s; o++)i[o]();
                        }
                    }, t1.prototype.registerFindHook = function(t1) {
                        return t1 && this.addHooks.push(t1), this;
                    }, t1.prototype.registerUploadHook = function(t1) {
                        return t1 && this.uploadHooks.push(t1), this;
                    }, t1.prototype.add = function(t1) {
                        for(var e = 0, r = this.addHooks.length; e < r && !this.addHooks[e](t1, this.queue); e++);
                        if (t1 instanceof d.Container) for(var n = t1.children.length - 1; n >= 0; n--)this.add(t1.children[n]);
                        return this;
                    }, t1.prototype.destroy = function() {
                        this.ticking && v.remove(this.tick, this), this.ticking = !1, this.addHooks = null, this.uploadHooks = null, this.renderer = null, this.completes = null, this.queue = null, this.limiter = null, this.uploadHookHelper = null;
                    }, t1;
                }();
                r.default = y;
            },
            {
                "../core": 65,
                "./limiters/CountLimiter": 185
            }
        ],
        183: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function i(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function o(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                function s(t1, e) {
                    if (e instanceof u.BaseTexture) {
                        var r = e.source, n = 0 === r.width ? t1.canvas.width : Math.min(t1.canvas.width, r.width), i = 0 === r.height ? t1.canvas.height : Math.min(t1.canvas.height, r.height);
                        return t1.ctx.drawImage(r, 0, 0, n, i, 0, 0, t1.canvas.width, t1.canvas.height), !0;
                    }
                    return !1;
                }
                r.__esModule = !0;
                var a = t1("../../core"), u = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(a), h = t1("../BasePrepare"), l = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(h), c = 16, d = function(t1) {
                    function e(r) {
                        n(this, e);
                        var o = i(this, t1.call(this, r));
                        return o.uploadHookHelper = o, o.canvas = document.createElement("canvas"), o.canvas.width = c, o.canvas.height = c, o.ctx = o.canvas.getContext("2d"), o.registerUploadHook(s), o;
                    }
                    return o(e, t1), e.prototype.destroy = function() {
                        t1.prototype.destroy.call(this), this.ctx = null, this.canvas = null;
                    }, e;
                }(l.default);
                r.default = d, u.CanvasRenderer.registerPlugin("prepare", d);
            },
            {
                "../../core": 65,
                "../BasePrepare": 182
            }
        ],
        184: [
            function(t1, e, r) {
                "use strict";
                function n(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }
                r.__esModule = !0;
                var i = t1("./webgl/WebGLPrepare");
                Object.defineProperty(r, "webgl", {
                    enumerable: !0,
                    get: function() {
                        return n(i).default;
                    }
                });
                var o = t1("./canvas/CanvasPrepare");
                Object.defineProperty(r, "canvas", {
                    enumerable: !0,
                    get: function() {
                        return n(o).default;
                    }
                });
                var s = t1("./BasePrepare");
                Object.defineProperty(r, "BasePrepare", {
                    enumerable: !0,
                    get: function() {
                        return n(s).default;
                    }
                });
                var a = t1("./limiters/CountLimiter");
                Object.defineProperty(r, "CountLimiter", {
                    enumerable: !0,
                    get: function() {
                        return n(a).default;
                    }
                });
                var u = t1("./limiters/TimeLimiter");
                Object.defineProperty(r, "TimeLimiter", {
                    enumerable: !0,
                    get: function() {
                        return n(u).default;
                    }
                });
            },
            {
                "./BasePrepare": 182,
                "./canvas/CanvasPrepare": 183,
                "./limiters/CountLimiter": 185,
                "./limiters/TimeLimiter": 186,
                "./webgl/WebGLPrepare": 187
            }
        ],
        185: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = function() {
                    function t1(e) {
                        n(this, t1), this.maxItemsPerFrame = e, this.itemsLeft = 0;
                    }
                    return t1.prototype.beginFrame = function() {
                        this.itemsLeft = this.maxItemsPerFrame;
                    }, t1.prototype.allowedToUpload = function() {
                        return this.itemsLeft-- > 0;
                    }, t1;
                }();
                r.default = i;
            },
            {}
        ],
        186: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                r.__esModule = !0;
                var i = function() {
                    function t1(e) {
                        n(this, t1), this.maxMilliseconds = e, this.frameStart = 0;
                    }
                    return t1.prototype.beginFrame = function() {
                        this.frameStart = Date.now();
                    }, t1.prototype.allowedToUpload = function() {
                        return Date.now() - this.frameStart < this.maxMilliseconds;
                    }, t1;
                }();
                r.default = i;
            },
            {}
        ],
        187: [
            function(t1, e, r) {
                "use strict";
                function n(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function i(t1, e) {
                    if (!t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t1 : e;
                }
                function o(t1, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t1.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t1, e) : t1.__proto__ = e);
                }
                function s(t1, e) {
                    return e instanceof l.BaseTexture && (e._glTextures[t1.CONTEXT_UID] || t1.textureManager.updateTexture(e), !0);
                }
                function a(t1, e) {
                    return e instanceof l.Graphics && ((e.dirty || e.clearDirty || !e._webGL[t1.plugins.graphics.CONTEXT_UID]) && t1.plugins.graphics.updateGraphics(e), !0);
                }
                function u(t1, e) {
                    return t1 instanceof l.Graphics && (e.push(t1), !0);
                }
                r.__esModule = !0;
                var h = t1("../../core"), l = function(t1) {
                    if (t1 && t1.__esModule) return t1;
                    var e = {};
                    if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                    return e.default = t1, e;
                }(h), c = t1("../BasePrepare"), d = function(t1) {
                    return t1 && t1.__esModule ? t1 : {
                        default: t1
                    };
                }(c), f = function(t1) {
                    function e(r) {
                        n(this, e);
                        var o = i(this, t1.call(this, r));
                        return o.uploadHookHelper = o.renderer, o.registerFindHook(u), o.registerUploadHook(s), o.registerUploadHook(a), o;
                    }
                    return o(e, t1), e;
                }(d.default);
                r.default = f, l.WebGLRenderer.registerPlugin("prepare", f);
            },
            {
                "../../core": 65,
                "../BasePrepare": 182
            }
        ],
        188: [
            function(t1, e, r) {
                (function(e) {
                    "use strict";
                    function n(t1) {
                        if (t1 && t1.__esModule) return t1;
                        var e = {};
                        if (null != t1) for(var r in t1)Object.prototype.hasOwnProperty.call(t1, r) && (e[r] = t1[r]);
                        return e.default = t1, e;
                    }
                    r.__esModule = !0, r.loader = r.prepare = r.particles = r.mesh = r.loaders = r.interaction = r.filters = r.extras = r.extract = r.accessibility = void 0;
                    var i = t1("./polyfill");
                    Object.keys(i).forEach(function(t1) {
                        "default" !== t1 && "__esModule" !== t1 && Object.defineProperty(r, t1, {
                            enumerable: !0,
                            get: function() {
                                return i[t1];
                            }
                        });
                    });
                    var o = t1("./core");
                    Object.keys(o).forEach(function(t1) {
                        "default" !== t1 && "__esModule" !== t1 && Object.defineProperty(r, t1, {
                            enumerable: !0,
                            get: function() {
                                return o[t1];
                            }
                        });
                    });
                    var s = t1("./deprecation"), a = function(t1) {
                        return t1 && t1.__esModule ? t1 : {
                            default: t1
                        };
                    }(s), u = t1("./accessibility"), h = n(u), l = t1("./extract"), c = n(l), d = t1("./extras"), f = n(d), p = t1("./filters"), v = n(p), y = t1("./interaction"), g = n(y), m = t1("./loaders"), _ = n(m), b = t1("./mesh"), x = n(b), T = t1("./particles"), w = n(T), E = t1("./prepare"), S = n(E);
                    o.utils.mixins.performMixins();
                    var O = _.shared || null;
                    r.accessibility = h, r.extract = c, r.extras = f, r.filters = v, r.interaction = g, r.loaders = _, r.mesh = x, r.particles = w, r.prepare = S, r.loader = O, "function" == typeof a.default && (0, a.default)(r), e.PIXI = r;
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
            },
            {
                "./accessibility": 42,
                "./core": 65,
                "./deprecation": 130,
                "./extract": 132,
                "./extras": 141,
                "./filters": 152,
                "./interaction": 159,
                "./loaders": 162,
                "./mesh": 171,
                "./particles": 174,
                "./polyfill": 180,
                "./prepare": 184
            }
        ]
    }, {}, [
        188
    ])(188);
}); //# sourceMappingURL=pixi.min.js.map

//# sourceMappingURL=index.0877c246.js.map
