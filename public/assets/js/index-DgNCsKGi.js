(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) a(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const l of o.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && a(l)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function s(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function a(i) {
        if (i.ep) return;
        i.ep = !0;
        const o = s(i);
        fetch(i.href, o)
    }
})();
/**
 * @vue/shared v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function va(e, t) {
    const s = new Set(e.split(","));
    return t ? a => s.has(a.toLowerCase()) : a => s.has(a)
}
const Pe = {},
    u1 = [],
    rt = () => {},
    Cl = () => !1,
    W0 = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    ya = e => e.startsWith("onUpdate:"),
    Ke = Object.assign,
    _a = (e, t) => {
        const s = e.indexOf(t);
        s > -1 && e.splice(s, 1)
    },
    Hl = Object.prototype.hasOwnProperty,
    $e = (e, t) => Hl.call(e, t),
    he = Array.isArray,
    p1 = e => G0(e) === "[object Map]",
    bn = e => G0(e) === "[object Set]",
    ve = e => typeof e == "function",
    Re = e => typeof e == "string",
    M1 = e => typeof e == "symbol",
    Oe = e => e !== null && typeof e == "object",
    wn = e => (Oe(e) || ve(e)) && ve(e.then) && ve(e.catch),
    $n = Object.prototype.toString,
    G0 = e => $n.call(e),
    Zl = e => G0(e).slice(8, -1),
    An = e => G0(e) === "[object Object]",
    xa = e => Re(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    O1 = va(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    U0 = e => {
        const t = Object.create(null);
        return s => t[s] || (t[s] = e(s))
    },
    Tl = /-(\w)/g,
    xt = U0(e => e.replace(Tl, (t, s) => s ? s.toUpperCase() : "")),
    Vl = /\B([A-Z])/g,
    C1 = U0(e => e.replace(Vl, "-$1").toLowerCase()),
    Y0 = U0(e => e.charAt(0).toUpperCase() + e.slice(1)),
    _s = U0(e => e ? `on${Y0(e)}` : ""),
    Dt = (e, t) => !Object.is(e, t),
    w0 = (e, t) => {
        for (let s = 0; s < e.length; s++) e[s](t)
    },
    V0 = (e, t, s) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            value: s
        })
    },
    Rs = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    };
let ei;
const Sn = () => ei || (ei = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function ba(e) {
    if (he(e)) {
        const t = {};
        for (let s = 0; s < e.length; s++) {
            const a = e[s],
                i = Re(a) ? El(a) : ba(a);
            if (i)
                for (const o in i) t[o] = i[o]
        }
        return t
    } else if (Re(e) || Oe(e)) return e
}
const kl = /;(?![^(]*\))/g,
    Pl = /:([^]+)/,
    Ll = /\/\*[^]*?\*\//g;

function El(e) {
    const t = {};
    return e.replace(Ll, "").split(kl).forEach(s => {
        if (s) {
            const a = s.split(Pl);
            a.length > 1 && (t[a[0].trim()] = a[1].trim())
        }
    }), t
}

function Se(e) {
    let t = "";
    if (Re(e)) t = e;
    else if (he(e))
        for (let s = 0; s < e.length; s++) {
            const a = Se(e[s]);
            a && (t += a + " ")
        } else if (Oe(e))
            for (const s in e) e[s] && (t += s + " ");
    return t.trim()
}
const Bl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    Il = va(Bl);

function Mn(e) {
    return !!e || e === ""
}
const P = e => Re(e) ? e : e == null ? "" : he(e) || Oe(e) && (e.toString === $n || !ve(e.toString)) ? JSON.stringify(e, Cn, 2) : String(e),
    Cn = (e, t) => t && t.__v_isRef ? Cn(e, t.value) : p1(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((s, [a, i], o) => (s[xs(a, o) + " =>"] = i, s), {})
    } : bn(t) ? {
        [`Set(${t.size})`]: [...t.values()].map(s => xs(s))
    } : M1(t) ? xs(t) : Oe(t) && !he(t) && !An(t) ? String(t) : t,
    xs = (e, t = "") => {
        var s;
        return M1(e) ? `Symbol(${(s=e.description)!=null?s:t})` : e
    };
/**
 * @vue/reactivity v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let it;
class Hn {
    constructor(t = !1) {
        this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = it, !t && it && (this.index = (it.scopes || (it.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const s = it;
            try {
                return it = this, t()
            } finally {
                it = s
            }
        }
    }
    on() {
        it = this
    }
    off() {
        it = this.parent
    }
    stop(t) {
        if (this._active) {
            let s, a;
            for (s = 0, a = this.effects.length; s < a; s++) this.effects[s].stop();
            for (s = 0, a = this.cleanups.length; s < a; s++) this.cleanups[s]();
            if (this.scopes)
                for (s = 0, a = this.scopes.length; s < a; s++) this.scopes[s].stop(!0);
            if (!this.detached && this.parent && !t) {
                const i = this.parent.scopes.pop();
                i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index)
            }
            this.parent = void 0, this._active = !1
        }
    }
}

function Zn(e) {
    return new Hn(e)
}

function Ol(e, t = it) {
    t && t.active && t.effects.push(e)
}

function Tn() {
    return it
}

function Nl(e) {
    it && it.cleanups.push(e)
}
let Xt;
class wa {
    constructor(t, s, a, i) {
        this.fn = t, this.trigger = s, this.scheduler = a, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Ol(this, i)
    }
    get dirty() {
        if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
            this._dirtyLevel = 1, i1();
            for (let t = 0; t < this._depsLength; t++) {
                const s = this.deps[t];
                if (s.computed && (zl(s.computed), this._dirtyLevel >= 4)) break
            }
            this._dirtyLevel === 1 && (this._dirtyLevel = 0), n1()
        }
        return this._dirtyLevel >= 4
    }
    set dirty(t) {
        this._dirtyLevel = t ? 4 : 0
    }
    run() {
        if (this._dirtyLevel = 0, !this.active) return this.fn();
        let t = zt,
            s = Xt;
        try {
            return zt = !0, Xt = this, this._runnings++, ti(this), this.fn()
        } finally {
            si(this), this._runnings--, Xt = s, zt = t
        }
    }
    stop() {
        var t;
        this.active && (ti(this), si(this), (t = this.onStop) == null || t.call(this), this.active = !1)
    }
}

function zl(e) {
    return e.value
}

function ti(e) {
    e._trackId++, e._depsLength = 0
}

function si(e) {
    if (e.deps.length > e._depsLength) {
        for (let t = e._depsLength; t < e.deps.length; t++) Vn(e.deps[t], e);
        e.deps.length = e._depsLength
    }
}

function Vn(e, t) {
    const s = e.get(t);
    s !== void 0 && t._trackId !== s && (e.delete(t), e.size === 0 && e.cleanup())
}
let zt = !0,
    Ds = 0;
const kn = [];

function i1() {
    kn.push(zt), zt = !1
}

function n1() {
    const e = kn.pop();
    zt = e === void 0 ? !0 : e
}

function $a() {
    Ds++
}

function Aa() {
    for (Ds--; !Ds && Fs.length;) Fs.shift()()
}

function Pn(e, t, s) {
    if (t.get(e) !== e._trackId) {
        t.set(e, e._trackId);
        const a = e.deps[e._depsLength];
        a !== t ? (a && Vn(a, e), e.deps[e._depsLength++] = t) : e._depsLength++
    }
}
const Fs = [];

function Ln(e, t, s) {
    $a();
    for (const a of e.keys()) {
        let i;
        a._dirtyLevel < t && (i ? ? (i = e.get(a) === a._trackId)) && (a._shouldSchedule || (a._shouldSchedule = a._dirtyLevel === 0), a._dirtyLevel = t), a._shouldSchedule && (i ? ? (i = e.get(a) === a._trackId)) && (a.trigger(), (!a._runnings || a.allowRecurse) && a._dirtyLevel !== 2 && (a._shouldSchedule = !1, a.scheduler && Fs.push(a.scheduler)))
    }
    Aa()
}
const En = (e, t) => {
        const s = new Map;
        return s.cleanup = e, s.computed = t, s
    },
    k0 = new WeakMap,
    e1 = Symbol(""),
    qs = Symbol("");

function st(e, t, s) {
    if (zt && Xt) {
        let a = k0.get(e);
        a || k0.set(e, a = new Map);
        let i = a.get(s);
        i || a.set(s, i = En(() => a.delete(s))), Pn(Xt, i)
    }
}

function Mt(e, t, s, a, i, o) {
    const l = k0.get(e);
    if (!l) return;
    let r = [];
    if (t === "clear") r = [...l.values()];
    else if (s === "length" && he(e)) {
        const c = Number(a);
        l.forEach((f, d) => {
            (d === "length" || !M1(d) && d >= c) && r.push(f)
        })
    } else switch (s !== void 0 && r.push(l.get(s)), t) {
        case "add":
            he(e) ? xa(s) && r.push(l.get("length")) : (r.push(l.get(e1)), p1(e) && r.push(l.get(qs)));
            break;
        case "delete":
            he(e) || (r.push(l.get(e1)), p1(e) && r.push(l.get(qs)));
            break;
        case "set":
            p1(e) && r.push(l.get(e1));
            break
    }
    $a();
    for (const c of r) c && Ln(c, 4);
    Aa()
}

function jl(e, t) {
    var s;
    return (s = k0.get(e)) == null ? void 0 : s.get(t)
}
const Rl = va("__proto__,__v_isRef,__isVue"),
    Bn = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(M1)),
    ai = Dl();

function Dl() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
        e[t] = function (...s) {
            const a = ge(this);
            for (let o = 0, l = this.length; o < l; o++) st(a, "get", o + "");
            const i = a[t](...s);
            return i === -1 || i === !1 ? a[t](...s.map(ge)) : i
        }
    }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
        e[t] = function (...s) {
            i1(), $a();
            const a = ge(this)[t].apply(this, s);
            return Aa(), n1(), a
        }
    }), e
}

function Fl(e) {
    const t = ge(this);
    return st(t, "has", e), t.hasOwnProperty(e)
}
class In {
    constructor(t = !1, s = !1) {
        this._isReadonly = t, this._shallow = s
    }
    get(t, s, a) {
        const i = this._isReadonly,
            o = this._shallow;
        if (s === "__v_isReactive") return !i;
        if (s === "__v_isReadonly") return i;
        if (s === "__v_isShallow") return o;
        if (s === "__v_raw") return a === (i ? o ? ar : jn : o ? zn : Nn).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
        const l = he(t);
        if (!i) {
            if (l && $e(ai, s)) return Reflect.get(ai, s, a);
            if (s === "hasOwnProperty") return Fl
        }
        const r = Reflect.get(t, s, a);
        return (M1(s) ? Bn.has(s) : Rl(s)) || (i || st(t, "get", s), o) ? r : qe(r) ? l && xa(s) ? r : r.value : Oe(r) ? i ? P0(r) : ht(r) : r
    }
}
class On extends In {
    constructor(t = !1) {
        super(!1, t)
    }
    set(t, s, a, i) {
        let o = t[s];
        if (!this._shallow) {
            const c = _1(o);
            if (!L0(a) && !_1(a) && (o = ge(o), a = ge(a)), !he(t) && qe(o) && !qe(a)) return c ? !1 : (o.value = a, !0)
        }
        const l = he(t) && xa(s) ? Number(s) < t.length : $e(t, s),
            r = Reflect.set(t, s, a, i);
        return t === ge(i) && (l ? Dt(a, o) && Mt(t, "set", s, a) : Mt(t, "add", s, a)), r
    }
    deleteProperty(t, s) {
        const a = $e(t, s);
        t[s];
        const i = Reflect.deleteProperty(t, s);
        return i && a && Mt(t, "delete", s, void 0), i
    }
    has(t, s) {
        const a = Reflect.has(t, s);
        return (!M1(s) || !Bn.has(s)) && st(t, "has", s), a
    }
    ownKeys(t) {
        return st(t, "iterate", he(t) ? "length" : e1), Reflect.ownKeys(t)
    }
}
class ql extends In {
    constructor(t = !1) {
        super(!0, t)
    }
    set(t, s) {
        return !0
    }
    deleteProperty(t, s) {
        return !0
    }
}
const Wl = new On,
    Gl = new ql,
    Ul = new On(!0),
    Sa = e => e,
    K0 = e => Reflect.getPrototypeOf(e);

function p0(e, t, s = !1, a = !1) {
    e = e.__v_raw;
    const i = ge(e),
        o = ge(t);
    s || (Dt(t, o) && st(i, "get", t), st(i, "get", o));
    const {
        has: l
    } = K0(i), r = a ? Sa : s ? Ha : W1;
    if (l.call(i, t)) return r(e.get(t));
    if (l.call(i, o)) return r(e.get(o));
    e !== i && e.get(t)
}

function f0(e, t = !1) {
    const s = this.__v_raw,
        a = ge(s),
        i = ge(e);
    return t || (Dt(e, i) && st(a, "has", e), st(a, "has", i)), e === i ? s.has(e) : s.has(e) || s.has(i)
}

function h0(e, t = !1) {
    return e = e.__v_raw, !t && st(ge(e), "iterate", e1), Reflect.get(e, "size", e)
}

function ii(e) {
    e = ge(e);
    const t = ge(this);
    return K0(t).has.call(t, e) || (t.add(e), Mt(t, "add", e, e)), this
}

function ni(e, t) {
    t = ge(t);
    const s = ge(this),
        {
            has: a,
            get: i
        } = K0(s);
    let o = a.call(s, e);
    o || (e = ge(e), o = a.call(s, e));
    const l = i.call(s, e);
    return s.set(e, t), o ? Dt(t, l) && Mt(s, "set", e, t) : Mt(s, "add", e, t), this
}

function oi(e) {
    const t = ge(this),
        {
            has: s,
            get: a
        } = K0(t);
    let i = s.call(t, e);
    i || (e = ge(e), i = s.call(t, e)), a && a.call(t, e);
    const o = t.delete(e);
    return i && Mt(t, "delete", e, void 0), o
}

function li() {
    const e = ge(this),
        t = e.size !== 0,
        s = e.clear();
    return t && Mt(e, "clear", void 0, void 0), s
}

function m0(e, t) {
    return function (a, i) {
        const o = this,
            l = o.__v_raw,
            r = ge(l),
            c = t ? Sa : e ? Ha : W1;
        return !e && st(r, "iterate", e1), l.forEach((f, d) => a.call(i, c(f), c(d), o))
    }
}

function g0(e, t, s) {
    return function (...a) {
        const i = this.__v_raw,
            o = ge(i),
            l = p1(o),
            r = e === "entries" || e === Symbol.iterator && l,
            c = e === "keys" && l,
            f = i[e](...a),
            d = s ? Sa : t ? Ha : W1;
        return !t && st(o, "iterate", c ? qs : e1), {
            next() {
                const {
                    value: h,
                    done: m
                } = f.next();
                return m ? {
                    value: h,
                    done: m
                } : {
                    value: r ? [d(h[0]), d(h[1])] : d(h),
                    done: m
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}

function kt(e) {
    return function (...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}

function Yl() {
    const e = {
            get(o) {
                return p0(this, o)
            },
            get size() {
                return h0(this)
            },
            has: f0,
            add: ii,
            set: ni,
            delete: oi,
            clear: li,
            forEach: m0(!1, !1)
        },
        t = {
            get(o) {
                return p0(this, o, !1, !0)
            },
            get size() {
                return h0(this)
            },
            has: f0,
            add: ii,
            set: ni,
            delete: oi,
            clear: li,
            forEach: m0(!1, !0)
        },
        s = {
            get(o) {
                return p0(this, o, !0)
            },
            get size() {
                return h0(this, !0)
            },
            has(o) {
                return f0.call(this, o, !0)
            },
            add: kt("add"),
            set: kt("set"),
            delete: kt("delete"),
            clear: kt("clear"),
            forEach: m0(!0, !1)
        },
        a = {
            get(o) {
                return p0(this, o, !0, !0)
            },
            get size() {
                return h0(this, !0)
            },
            has(o) {
                return f0.call(this, o, !0)
            },
            add: kt("add"),
            set: kt("set"),
            delete: kt("delete"),
            clear: kt("clear"),
            forEach: m0(!0, !0)
        };
    return ["keys", "values", "entries", Symbol.iterator].forEach(o => {
        e[o] = g0(o, !1, !1), s[o] = g0(o, !0, !1), t[o] = g0(o, !1, !0), a[o] = g0(o, !0, !0)
    }), [e, s, t, a]
}
const [Kl, Jl, Ql, Xl] = Yl();

function Ma(e, t) {
    const s = t ? e ? Xl : Ql : e ? Jl : Kl;
    return (a, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? a : Reflect.get($e(s, i) && i in a ? s : a, i, o)
}
const er = {
        get: Ma(!1, !1)
    },
    tr = {
        get: Ma(!1, !0)
    },
    sr = {
        get: Ma(!0, !1)
    },
    Nn = new WeakMap,
    zn = new WeakMap,
    jn = new WeakMap,
    ar = new WeakMap;

function ir(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
    }
}

function nr(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : ir(Zl(e))
}

function ht(e) {
    return _1(e) ? e : Ca(e, !1, Wl, er, Nn)
}

function Rn(e) {
    return Ca(e, !1, Ul, tr, zn)
}

function P0(e) {
    return Ca(e, !0, Gl, sr, jn)
}

function Ca(e, t, s, a, i) {
    if (!Oe(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const o = i.get(e);
    if (o) return o;
    const l = nr(e);
    if (l === 0) return e;
    const r = new Proxy(e, l === 2 ? a : s);
    return i.set(e, r), r
}

function jt(e) {
    return _1(e) ? jt(e.__v_raw) : !!(e && e.__v_isReactive)
}

function _1(e) {
    return !!(e && e.__v_isReadonly)
}

function L0(e) {
    return !!(e && e.__v_isShallow)
}

function Dn(e) {
    return jt(e) || _1(e)
}

function ge(e) {
    const t = e && e.__v_raw;
    return t ? ge(t) : e
}

function J0(e) {
    return Object.isExtensible(e) && V0(e, "__v_skip", !0), e
}
const W1 = e => Oe(e) ? ht(e) : e,
    Ha = e => Oe(e) ? P0(e) : e;
class Fn {
    constructor(t, s, a, i) {
        this._setter = s, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new wa(() => t(this._value), () => $0(this, this.effect._dirtyLevel === 2 ? 2 : 3)), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = a
    }
    get value() {
        const t = ge(this);
        return (!t._cacheable || t.effect.dirty) && Dt(t._value, t._value = t.effect.run()) && $0(t, 4), qn(t), t.effect._dirtyLevel >= 2 && $0(t, 2), t._value
    }
    set value(t) {
        this._setter(t)
    }
    get _dirty() {
        return this.effect.dirty
    }
    set _dirty(t) {
        this.effect.dirty = t
    }
}

function or(e, t, s = !1) {
    let a, i;
    const o = ve(e);
    return o ? (a = e, i = rt) : (a = e.get, i = e.set), new Fn(a, i, o || !i, s)
}

function qn(e) {
    var t;
    zt && Xt && (e = ge(e), Pn(Xt, (t = e.dep) != null ? t : e.dep = En(() => e.dep = void 0, e instanceof Fn ? e : void 0)))
}

function $0(e, t = 4, s) {
    e = ge(e);
    const a = e.dep;
    a && Ln(a, t)
}

function qe(e) {
    return !!(e && e.__v_isRef === !0)
}

function le(e) {
    return Wn(e, !1)
}

function lr(e) {
    return Wn(e, !0)
}

function Wn(e, t) {
    return qe(e) ? e : new rr(e, t)
}
class rr {
    constructor(t, s) {
        this.__v_isShallow = s, this.dep = void 0, this.__v_isRef = !0, this._rawValue = s ? t : ge(t), this._value = s ? t : W1(t)
    }
    get value() {
        return qn(this), this._value
    }
    set value(t) {
        const s = this.__v_isShallow || L0(t) || _1(t);
        t = s ? t : ge(t), Dt(t, this._rawValue) && (this._rawValue = t, this._value = s ? t : W1(t), $0(this, 4))
    }
}

function A(e) {
    return qe(e) ? e.value : e
}
const cr = {
    get: (e, t, s) => A(Reflect.get(e, t, s)),
    set: (e, t, s, a) => {
        const i = e[t];
        return qe(i) && !qe(s) ? (i.value = s, !0) : Reflect.set(e, t, s, a)
    }
};

function Gn(e) {
    return jt(e) ? e : new Proxy(e, cr)
}

function dr(e) {
    const t = he(e) ? new Array(e.length) : {};
    for (const s in e) t[s] = pr(e, s);
    return t
}
class ur {
    constructor(t, s, a) {
        this._object = t, this._key = s, this._defaultValue = a, this.__v_isRef = !0
    }
    get value() {
        const t = this._object[this._key];
        return t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return jl(ge(this._object), this._key)
    }
}

function pr(e, t, s) {
    const a = e[t];
    return qe(a) ? a : new ur(e, t, s)
}
/**
 * @vue/runtime-core v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function Rt(e, t, s, a) {
    let i;
    try {
        i = a ? e(...a) : e()
    } catch (o) {
        Q0(o, t, s)
    }
    return i
}

function pt(e, t, s, a) {
    if (ve(e)) {
        const o = Rt(e, t, s, a);
        return o && wn(o) && o.catch(l => {
            Q0(l, t, s)
        }), o
    }
    const i = [];
    for (let o = 0; o < e.length; o++) i.push(pt(e[o], t, s, a));
    return i
}

function Q0(e, t, s, a = !0) {
    const i = t ? t.vnode : null;
    if (t) {
        let o = t.parent;
        const l = t.proxy,
            r = `https://vuejs.org/error-reference/#runtime-${s}`;
        for (; o;) {
            const f = o.ec;
            if (f) {
                for (let d = 0; d < f.length; d++)
                    if (f[d](e, l, r) === !1) return
            }
            o = o.parent
        }
        const c = t.appContext.config.errorHandler;
        if (c) {
            Rt(c, null, 10, [e, l, r]);
            return
        }
    }
    fr(e, s, i, a)
}

function fr(e, t, s, a = !0) {
    console.error(e)
}
let G1 = !1,
    Ws = !1;
const Qe = [];
let yt = 0;
const f1 = [];
let Et = null,
    Jt = 0;
const Un = Promise.resolve();
let Za = null;

function H1(e) {
    const t = Za || Un;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function hr(e) {
    let t = yt + 1,
        s = Qe.length;
    for (; t < s;) {
        const a = t + s >>> 1,
            i = Qe[a],
            o = U1(i);
        o < e || o === e && i.pre ? t = a + 1 : s = a
    }
    return t
}

function Ta(e) {
    (!Qe.length || !Qe.includes(e, G1 && e.allowRecurse ? yt + 1 : yt)) && (e.id == null ? Qe.push(e) : Qe.splice(hr(e.id), 0, e), Yn())
}

function Yn() {
    !G1 && !Ws && (Ws = !0, Za = Un.then(Jn))
}

function mr(e) {
    const t = Qe.indexOf(e);
    t > yt && Qe.splice(t, 1)
}

function gr(e) {
    he(e) ? f1.push(...e) : (!Et || !Et.includes(e, e.allowRecurse ? Jt + 1 : Jt)) && f1.push(e), Yn()
}

function ri(e, t, s = G1 ? yt + 1 : 0) {
    for (; s < Qe.length; s++) {
        const a = Qe[s];
        if (a && a.pre) {
            if (e && a.id !== e.uid) continue;
            Qe.splice(s, 1), s--, a()
        }
    }
}

function Kn(e) {
    if (f1.length) {
        const t = [...new Set(f1)].sort((s, a) => U1(s) - U1(a));
        if (f1.length = 0, Et) {
            Et.push(...t);
            return
        }
        for (Et = t, Jt = 0; Jt < Et.length; Jt++) Et[Jt]();
        Et = null, Jt = 0
    }
}
const U1 = e => e.id == null ? 1 / 0 : e.id,
    vr = (e, t) => {
        const s = U1(e) - U1(t);
        if (s === 0) {
            if (e.pre && !t.pre) return -1;
            if (t.pre && !e.pre) return 1
        }
        return s
    };

function Jn(e) {
    Ws = !1, G1 = !0, Qe.sort(vr);
    try {
        for (yt = 0; yt < Qe.length; yt++) {
            const t = Qe[yt];
            t && t.active !== !1 && Rt(t, null, 14)
        }
    } finally {
        yt = 0, Qe.length = 0, Kn(), G1 = !1, Za = null, (Qe.length || f1.length) && Jn()
    }
}

function yr(e, t, ...s) {
    if (e.isUnmounted) return;
    const a = e.vnode.props || Pe;
    let i = s;
    const o = t.startsWith("update:"),
        l = o && t.slice(7);
    if (l && l in a) {
        const d = `${l==="modelValue"?"model":l}Modifiers`,
            {
                number: h,
                trim: m
            } = a[d] || Pe;
        m && (i = s.map(y => Re(y) ? y.trim() : y)), h && (i = s.map(Rs))
    }
    let r, c = a[r = _s(t)] || a[r = _s(xt(t))];
    !c && o && (c = a[r = _s(C1(t))]), c && pt(c, e, 6, i);
    const f = a[r + "Once"];
    if (f) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[r]) return;
        e.emitted[r] = !0, pt(f, e, 6, i)
    }
}

function Qn(e, t, s = !1) {
    const a = t.emitsCache,
        i = a.get(e);
    if (i !== void 0) return i;
    const o = e.emits;
    let l = {},
        r = !1;
    if (!ve(e)) {
        const c = f => {
            const d = Qn(f, t, !0);
            d && (r = !0, Ke(l, d))
        };
        !s && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c)
    }
    return !o && !r ? (Oe(e) && a.set(e, null), null) : (he(o) ? o.forEach(c => l[c] = null) : Ke(l, o), Oe(e) && a.set(e, l), l)
}

function X0(e, t) {
    return !e || !W0(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), $e(e, t[0].toLowerCase() + t.slice(1)) || $e(e, C1(t)) || $e(e, t))
}
let Fe = null,
    Xn = null;

function E0(e) {
    const t = Fe;
    return Fe = e, Xn = e && e.type.__scopeId || null, t
}

function ne(e, t = Fe, s) {
    if (!t || e._n) return e;
    const a = (...i) => {
        a._d && _i(-1);
        const o = E0(t);
        let l;
        try {
            l = e(...i)
        } finally {
            E0(o), a._d && _i(1)
        }
        return l
    };
    return a._n = !0, a._c = !0, a._d = !0, a
}

function bs(e) {
    const {
        type: t,
        vnode: s,
        proxy: a,
        withProxy: i,
        props: o,
        propsOptions: [l],
        slots: r,
        attrs: c,
        emit: f,
        render: d,
        renderCache: h,
        data: m,
        setupState: y,
        ctx: b,
        inheritAttrs: M
    } = e;
    let V, S;
    const Z = E0(e);
    try {
        if (s.shapeFlag & 4) {
            const E = i || a,
                z = E;
            V = vt(d.call(z, E, h, o, y, m, b)), S = c
        } else {
            const E = t;
            V = vt(E.length > 1 ? E(o, {
                attrs: c,
                slots: r,
                emit: f
            }) : E(o, null)), S = t.props ? c : _r(c)
        }
    } catch (E) {
        j1.length = 0, Q0(E, e, 1), V = g(Ft)
    }
    let C = V;
    if (S && M !== !1) {
        const E = Object.keys(S),
            {
                shapeFlag: z
            } = C;
        E.length && z & 7 && (l && E.some(ya) && (S = xr(S, l)), C = s1(C, S))
    }
    return s.dirs && (C = s1(C), C.dirs = C.dirs ? C.dirs.concat(s.dirs) : s.dirs), s.transition && (C.transition = s.transition), V = C, E0(Z), V
}
const _r = e => {
        let t;
        for (const s in e)(s === "class" || s === "style" || W0(s)) && ((t || (t = {}))[s] = e[s]);
        return t
    },
    xr = (e, t) => {
        const s = {};
        for (const a in e)(!ya(a) || !(a.slice(9) in t)) && (s[a] = e[a]);
        return s
    };

function br(e, t, s) {
    const {
        props: a,
        children: i,
        component: o
    } = e, {
        props: l,
        children: r,
        patchFlag: c
    } = t, f = o.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (s && c >= 0) {
        if (c & 1024) return !0;
        if (c & 16) return a ? ci(a, l, f) : !!l;
        if (c & 8) {
            const d = t.dynamicProps;
            for (let h = 0; h < d.length; h++) {
                const m = d[h];
                if (l[m] !== a[m] && !X0(f, m)) return !0
            }
        }
    } else return (i || r) && (!r || !r.$stable) ? !0 : a === l ? !1 : a ? l ? ci(a, l, f) : !0 : !!l;
    return !1
}

function ci(e, t, s) {
    const a = Object.keys(t);
    if (a.length !== Object.keys(e).length) return !0;
    for (let i = 0; i < a.length; i++) {
        const o = a[i];
        if (t[o] !== e[o] && !X0(s, o)) return !0
    }
    return !1
}

function wr({
    vnode: e,
    parent: t
}, s) {
    for (; t;) {
        const a = t.subTree;
        if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e)(e = t.vnode).el = s, t = t.parent;
        else break
    }
}
const Va = "components";

function Ae(e, t) {
    return to(Va, e, !0, t) || e
}
const eo = Symbol.for("v-ndc");

function Ve(e) {
    return Re(e) ? to(Va, e, !1) || e : e || eo
}

function to(e, t, s = !0, a = !1) {
    const i = Fe || Ye;
    if (i) {
        const o = i.type;
        if (e === Va) {
            const r = u2(o, !1);
            if (r && (r === t || r === xt(t) || r === Y0(xt(t)))) return o
        }
        const l = di(i[e] || o[e], t) || di(i.appContext[e], t);
        return !l && a ? o : l
    }
}

function di(e, t) {
    return e && (e[t] || e[xt(t)] || e[Y0(xt(t))])
}
const $r = e => e.__isSuspense;

function Ar(e, t) {
    t && t.pendingBranch ? he(e) ? t.effects.push(...e) : t.effects.push(e) : gr(e)
}
const Sr = Symbol.for("v-scx"),
    Mr = () => _(Sr);

function A0(e, t) {
    return ka(e, null, t)
}
const v0 = {};

function Ct(e, t, s) {
    return ka(e, t, s)
}

function ka(e, t, {
    immediate: s,
    deep: a,
    flush: i,
    once: o,
    onTrack: l,
    onTrigger: r
} = Pe) {
    if (t && o) {
        const j = t;
        t = (...se) => {
            j(...se), z()
        }
    }
    const c = Ye,
        f = j => a === !0 ? j : Qt(j, a === !1 ? 1 : void 0);
    let d, h = !1,
        m = !1;
    if (qe(e) ? (d = () => e.value, h = L0(e)) : jt(e) ? (d = () => f(e), h = !0) : he(e) ? (m = !0, h = e.some(j => jt(j) || L0(j)), d = () => e.map(j => {
            if (qe(j)) return j.value;
            if (jt(j)) return f(j);
            if (ve(j)) return Rt(j, c, 2)
        })) : ve(e) ? t ? d = () => Rt(e, c, 2) : d = () => (y && y(), pt(e, c, 3, [b])) : d = rt, t && a) {
        const j = d;
        d = () => Qt(j())
    }
    let y, b = j => {
            y = C.onStop = () => {
                Rt(j, c, 4), y = C.onStop = void 0
            }
        },
        M;
    if (ns)
        if (b = rt, t ? s && pt(t, c, 3, [d(), m ? [] : void 0, b]) : d(), i === "sync") {
            const j = Mr();
            M = j.__watcherHandles || (j.__watcherHandles = [])
        } else return rt;
    let V = m ? new Array(e.length).fill(v0) : v0;
    const S = () => {
        if (!(!C.active || !C.dirty))
            if (t) {
                const j = C.run();
                (a || h || (m ? j.some((se, O) => Dt(se, V[O])) : Dt(j, V))) && (y && y(), pt(t, c, 3, [j, V === v0 ? void 0 : m && V[0] === v0 ? [] : V, b]), V = j)
            } else C.run()
    };
    S.allowRecurse = !!t;
    let Z;
    i === "sync" ? Z = S : i === "post" ? Z = () => tt(S, c && c.suspense) : (S.pre = !0, c && (S.id = c.uid), Z = () => Ta(S));
    const C = new wa(d, rt, Z),
        E = Tn(),
        z = () => {
            C.stop(), E && _a(E.effects, C)
        };
    return t ? s ? S() : V = C.run() : i === "post" ? tt(C.run.bind(C), c && c.suspense) : C.run(), M && M.push(z), z
}

function Cr(e, t, s) {
    const a = this.proxy,
        i = Re(e) ? e.includes(".") ? so(a, e) : () => a[e] : e.bind(a, a);
    let o;
    ve(t) ? o = t : (o = t.handler, s = t);
    const l = i0(this),
        r = ka(i, o.bind(a), s);
    return l(), r
}

function so(e, t) {
    const s = t.split(".");
    return () => {
        let a = e;
        for (let i = 0; i < s.length && a; i++) a = a[s[i]];
        return a
    }
}

function Qt(e, t, s = 0, a) {
    if (!Oe(e) || e.__v_skip) return e;
    if (t && t > 0) {
        if (s >= t) return e;
        s++
    }
    if (a = a || new Set, a.has(e)) return e;
    if (a.add(e), qe(e)) Qt(e.value, t, s, a);
    else if (he(e))
        for (let i = 0; i < e.length; i++) Qt(e[i], t, s, a);
    else if (bn(e) || p1(e)) e.forEach(i => {
        Qt(i, t, s, a)
    });
    else if (An(e))
        for (const i in e) Qt(e[i], t, s, a);
    return e
}

function Hr(e, t) {
    if (Fe === null) return e;
    const s = os(Fe) || Fe.proxy,
        a = e.dirs || (e.dirs = []);
    for (let i = 0; i < t.length; i++) {
        let [o, l, r, c = Pe] = t[i];
        o && (ve(o) && (o = {
            mounted: o,
            updated: o
        }), o.deep && Qt(l), a.push({
            dir: o,
            instance: s,
            value: l,
            oldValue: void 0,
            arg: r,
            modifiers: c
        }))
    }
    return e
}

function Ut(e, t, s, a) {
    const i = e.dirs,
        o = t && t.dirs;
    for (let l = 0; l < i.length; l++) {
        const r = i[l];
        o && (r.oldValue = o[l].value);
        let c = r.dir[a];
        c && (i1(), pt(c, s, 8, [e.el, r, e, t]), n1())
    }
} /*! #__NO_SIDE_EFFECTS__ */
function H(e, t) {
    return ve(e) ? Ke({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
const N1 = e => !!e.type.__asyncLoader,
    ao = e => e.type.__isKeepAlive;

function Zr(e, t) {
    io(e, "a", t)
}

function Tr(e, t) {
    io(e, "da", t)
}

function io(e, t, s = Ye) {
    const a = e.__wdc || (e.__wdc = () => {
        let i = s;
        for (; i;) {
            if (i.isDeactivated) return;
            i = i.parent
        }
        return e()
    });
    if (es(t, a, s), s) {
        let i = s.parent;
        for (; i && i.parent;) ao(i.parent.vnode) && Vr(a, t, s, i), i = i.parent
    }
}

function Vr(e, t, s, a) {
    const i = es(t, e, a, !0);
    Z1(() => {
        _a(a[t], i)
    }, s)
}

function es(e, t, s = Ye, a = !1) {
    if (s) {
        const i = s[e] || (s[e] = []),
            o = t.__weh || (t.__weh = (...l) => {
                if (s.isUnmounted) return;
                i1();
                const r = i0(s),
                    c = pt(t, s, e, l);
                return r(), n1(), c
            });
        return a ? i.unshift(o) : i.push(o), o
    }
}
const Zt = e => (t, s = Ye) => (!ns || e === "sp") && es(e, (...a) => t(...a), s),
    a0 = Zt("bm"),
    Tt = Zt("m"),
    no = Zt("bu"),
    ts = Zt("u"),
    ss = Zt("bum"),
    Z1 = Zt("um"),
    kr = Zt("sp"),
    Pr = Zt("rtg"),
    Lr = Zt("rtc");

function Er(e, t = Ye) {
    es("ec", e, t)
}

function oe(e, t, s, a) {
    let i;
    const o = s && s[a];
    if (he(e) || Re(e)) {
        i = new Array(e.length);
        for (let l = 0, r = e.length; l < r; l++) i[l] = t(e[l], l, void 0, o && o[l])
    } else if (typeof e == "number") {
        i = new Array(e);
        for (let l = 0; l < e; l++) i[l] = t(l + 1, l, void 0, o && o[l])
    } else if (Oe(e))
        if (e[Symbol.iterator]) i = Array.from(e, (l, r) => t(l, r, void 0, o && o[r]));
        else {
            const l = Object.keys(e);
            i = new Array(l.length);
            for (let r = 0, c = l.length; r < c; r++) {
                const f = l[r];
                i[r] = t(e[f], f, r, o && o[r])
            }
        }
    else i = [];
    return s && (s[a] = i), i
}

function te(e, t, s = {}, a, i) {
    if (Fe.isCE || Fe.parent && N1(Fe.parent) && Fe.parent.isCE) return t !== "default" && (s.name = t), g("slot", s, a && a());
    let o = e[t];
    o && o._c && (o._d = !1), u();
    const l = o && oo(o(s)),
        r = ye(G, {
            key: s.key || l && l.key || `_${t}`
        }, l || (a ? a() : []), l && e._ === 1 ? 64 : -2);
    return !i && r.scopeId && (r.slotScopeIds = [r.scopeId + "-s"]), o && o._c && (o._d = !0), r
}

function oo(e) {
    return e.some(t => x1(t) ? !(t.type === Ft || t.type === G && !oo(t.children)) : !0) ? e : null
}
const Gs = e => e ? _o(e) ? os(e) || e.proxy : Gs(e.parent) : null,
    z1 = Ke(Object.create(null), {
        $: e => e,
        $el: e => e.vnode.el,
        $data: e => e.data,
        $props: e => e.props,
        $attrs: e => e.attrs,
        $slots: e => e.slots,
        $refs: e => e.refs,
        $parent: e => Gs(e.parent),
        $root: e => Gs(e.root),
        $emit: e => e.emit,
        $options: e => Pa(e),
        $forceUpdate: e => e.f || (e.f = () => {
            e.effect.dirty = !0, Ta(e.update)
        }),
        $nextTick: e => e.n || (e.n = H1.bind(e.proxy)),
        $watch: e => Cr.bind(e)
    }),
    ws = (e, t) => e !== Pe && !e.__isScriptSetup && $e(e, t),
    Br = {
        get({
            _: e
        }, t) {
            const {
                ctx: s,
                setupState: a,
                data: i,
                props: o,
                accessCache: l,
                type: r,
                appContext: c
            } = e;
            let f;
            if (t[0] !== "$") {
                const y = l[t];
                if (y !== void 0) switch (y) {
                    case 1:
                        return a[t];
                    case 2:
                        return i[t];
                    case 4:
                        return s[t];
                    case 3:
                        return o[t]
                } else {
                    if (ws(a, t)) return l[t] = 1, a[t];
                    if (i !== Pe && $e(i, t)) return l[t] = 2, i[t];
                    if ((f = e.propsOptions[0]) && $e(f, t)) return l[t] = 3, o[t];
                    if (s !== Pe && $e(s, t)) return l[t] = 4, s[t];
                    Us && (l[t] = 0)
                }
            }
            const d = z1[t];
            let h, m;
            if (d) return t === "$attrs" && st(e, "get", t), d(e);
            if ((h = r.__cssModules) && (h = h[t])) return h;
            if (s !== Pe && $e(s, t)) return l[t] = 4, s[t];
            if (m = c.config.globalProperties, $e(m, t)) return m[t]
        },
        set({
            _: e
        }, t, s) {
            const {
                data: a,
                setupState: i,
                ctx: o
            } = e;
            return ws(i, t) ? (i[t] = s, !0) : a !== Pe && $e(a, t) ? (a[t] = s, !0) : $e(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = s, !0)
        },
        has({
            _: {
                data: e,
                setupState: t,
                accessCache: s,
                ctx: a,
                appContext: i,
                propsOptions: o
            }
        }, l) {
            let r;
            return !!s[l] || e !== Pe && $e(e, l) || ws(t, l) || (r = o[0]) && $e(r, l) || $e(a, l) || $e(z1, l) || $e(i.config.globalProperties, l)
        },
        defineProperty(e, t, s) {
            return s.get != null ? e._.accessCache[t] = 0 : $e(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s)
        }
    };

function ui(e) {
    return he(e) ? e.reduce((t, s) => (t[s] = null, t), {}) : e
}
let Us = !0;

function Ir(e) {
    const t = Pa(e),
        s = e.proxy,
        a = e.ctx;
    Us = !1, t.beforeCreate && pi(t.beforeCreate, e, "bc");
    const {
        data: i,
        computed: o,
        methods: l,
        watch: r,
        provide: c,
        inject: f,
        created: d,
        beforeMount: h,
        mounted: m,
        beforeUpdate: y,
        updated: b,
        activated: M,
        deactivated: V,
        beforeDestroy: S,
        beforeUnmount: Z,
        destroyed: C,
        unmounted: E,
        render: z,
        renderTracked: j,
        renderTriggered: se,
        errorCaptured: O,
        serverPrefetch: k,
        expose: B,
        inheritAttrs: U,
        components: ce,
        directives: Y,
        filters: de
    } = t;
    if (f && Or(f, a, null), l)
        for (const _e in l) {
            const J = l[_e];
            ve(J) && (a[_e] = J.bind(s))
        }
    if (i) {
        const _e = i.call(s, s);
        Oe(_e) && (e.data = ht(_e))
    }
    if (Us = !0, o)
        for (const _e in o) {
            const J = o[_e],
                Le = ve(J) ? J.bind(s, s) : ve(J.get) ? J.get.bind(s, s) : rt,
                Me = !ve(J) && ve(J.set) ? J.set.bind(s) : rt,
                Ee = v({
                    get: Le,
                    set: Me
                });
            Object.defineProperty(a, _e, {
                enumerable: !0,
                configurable: !0,
                get: () => Ee.value,
                set: je => Ee.value = je
            })
        }
    if (r)
        for (const _e in r) lo(r[_e], a, s, _e);
    if (c) {
        const _e = ve(c) ? c.call(s) : c;
        Reflect.ownKeys(_e).forEach(J => {
            m1(J, _e[J])
        })
    }
    d && pi(d, e, "c");

    function fe(_e, J) {
        he(J) ? J.forEach(Le => _e(Le.bind(s))) : J && _e(J.bind(s))
    }
    if (fe(a0, h), fe(Tt, m), fe(no, y), fe(ts, b), fe(Zr, M), fe(Tr, V), fe(Er, O), fe(Lr, j), fe(Pr, se), fe(ss, Z), fe(Z1, E), fe(kr, k), he(B))
        if (B.length) {
            const _e = e.exposed || (e.exposed = {});
            B.forEach(J => {
                Object.defineProperty(_e, J, {
                    get: () => s[J],
                    set: Le => s[J] = Le
                })
            })
        } else e.exposed || (e.exposed = {});
    z && e.render === rt && (e.render = z), U != null && (e.inheritAttrs = U), ce && (e.components = ce), Y && (e.directives = Y)
}

function Or(e, t, s = rt) {
    he(e) && (e = Ys(e));
    for (const a in e) {
        const i = e[a];
        let o;
        Oe(i) ? "default" in i ? o = _(i.from || a, i.default, !0) : o = _(i.from || a) : o = _(i), qe(o) ? Object.defineProperty(t, a, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: l => o.value = l
        }) : t[a] = o
    }
}

function pi(e, t, s) {
    pt(he(e) ? e.map(a => a.bind(t.proxy)) : e.bind(t.proxy), t, s)
}

function lo(e, t, s, a) {
    const i = a.includes(".") ? so(s, a) : () => s[a];
    if (Re(e)) {
        const o = t[e];
        ve(o) && Ct(i, o)
    } else if (ve(e)) Ct(i, e.bind(s));
    else if (Oe(e))
        if (he(e)) e.forEach(o => lo(o, t, s, a));
        else {
            const o = ve(e.handler) ? e.handler.bind(s) : t[e.handler];
            ve(o) && Ct(i, o, e)
        }
}

function Pa(e) {
    const t = e.type,
        {
            mixins: s,
            extends: a
        } = t,
        {
            mixins: i,
            optionsCache: o,
            config: {
                optionMergeStrategies: l
            }
        } = e.appContext,
        r = o.get(t);
    let c;
    return r ? c = r : !i.length && !s && !a ? c = t : (c = {}, i.length && i.forEach(f => B0(c, f, l, !0)), B0(c, t, l)), Oe(t) && o.set(t, c), c
}

function B0(e, t, s, a = !1) {
    const {
        mixins: i,
        extends: o
    } = t;
    o && B0(e, o, s, !0), i && i.forEach(l => B0(e, l, s, !0));
    for (const l in t)
        if (!(a && l === "expose")) {
            const r = Nr[l] || s && s[l];
            e[l] = r ? r(e[l], t[l]) : t[l]
        } return e
}
const Nr = {
    data: fi,
    props: hi,
    emits: hi,
    methods: I1,
    computed: I1,
    beforeCreate: Xe,
    created: Xe,
    beforeMount: Xe,
    mounted: Xe,
    beforeUpdate: Xe,
    updated: Xe,
    beforeDestroy: Xe,
    beforeUnmount: Xe,
    destroyed: Xe,
    unmounted: Xe,
    activated: Xe,
    deactivated: Xe,
    errorCaptured: Xe,
    serverPrefetch: Xe,
    components: I1,
    directives: I1,
    watch: jr,
    provide: fi,
    inject: zr
};

function fi(e, t) {
    return t ? e ? function () {
        return Ke(ve(e) ? e.call(this, this) : e, ve(t) ? t.call(this, this) : t)
    } : t : e
}

function zr(e, t) {
    return I1(Ys(e), Ys(t))
}

function Ys(e) {
    if (he(e)) {
        const t = {};
        for (let s = 0; s < e.length; s++) t[e[s]] = e[s];
        return t
    }
    return e
}

function Xe(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}

function I1(e, t) {
    return e ? Ke(Object.create(null), e, t) : t
}

function hi(e, t) {
    return e ? he(e) && he(t) ? [...new Set([...e, ...t])] : Ke(Object.create(null), ui(e), ui(t ? ? {})) : t
}

function jr(e, t) {
    if (!e) return t;
    if (!t) return e;
    const s = Ke(Object.create(null), e);
    for (const a in t) s[a] = Xe(e[a], t[a]);
    return s
}

function ro() {
    return {
        app: null,
        config: {
            isNativeTag: Cl,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let Rr = 0;

function Dr(e, t) {
    return function (a, i = null) {
        ve(a) || (a = Ke({}, a)), i != null && !Oe(i) && (i = null);
        const o = ro(),
            l = new WeakSet;
        let r = !1;
        const c = o.app = {
            _uid: Rr++,
            _component: a,
            _props: i,
            _container: null,
            _context: o,
            _instance: null,
            version: f2,
            get config() {
                return o.config
            },
            set config(f) {},
            use(f, ...d) {
                return l.has(f) || (f && ve(f.install) ? (l.add(f), f.install(c, ...d)) : ve(f) && (l.add(f), f(c, ...d))), c
            },
            mixin(f) {
                return o.mixins.includes(f) || o.mixins.push(f), c
            },
            component(f, d) {
                return d ? (o.components[f] = d, c) : o.components[f]
            },
            directive(f, d) {
                return d ? (o.directives[f] = d, c) : o.directives[f]
            },
            mount(f, d, h) {
                if (!r) {
                    const m = g(a, i);
                    return m.appContext = o, h === !0 ? h = "svg" : h === !1 && (h = void 0), d && t ? t(m, f) : e(m, f, h), r = !0, c._container = f, f.__vue_app__ = c, os(m.component) || m.component.proxy
                }
            },
            unmount() {
                r && (e(null, c._container), delete c._container.__vue_app__)
            },
            provide(f, d) {
                return o.provides[f] = d, c
            },
            runWithContext(f) {
                const d = h1;
                h1 = c;
                try {
                    return f()
                } finally {
                    h1 = d
                }
            }
        };
        return c
    }
}
let h1 = null;

function m1(e, t) {
    if (Ye) {
        let s = Ye.provides;
        const a = Ye.parent && Ye.parent.provides;
        a === s && (s = Ye.provides = Object.create(a)), s[e] = t
    }
}

function _(e, t, s = !1) {
    const a = Ye || Fe;
    if (a || h1) {
        const i = a ? a.parent == null ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : h1._context.provides;
        if (i && e in i) return i[e];
        if (arguments.length > 1) return s && ve(t) ? t.call(a && a.proxy) : t
    }
}

function Fr() {
    return !!(Ye || Fe || h1)
}

function qr(e, t, s, a = !1) {
    const i = {},
        o = {};
    V0(o, is, 1), e.propsDefaults = Object.create(null), co(e, t, i, o);
    for (const l in e.propsOptions[0]) l in i || (i[l] = void 0);
    s ? e.props = a ? i : Rn(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o
}

function Wr(e, t, s, a) {
    const {
        props: i,
        attrs: o,
        vnode: {
            patchFlag: l
        }
    } = e, r = ge(i), [c] = e.propsOptions;
    let f = !1;
    if ((a || l > 0) && !(l & 16)) {
        if (l & 8) {
            const d = e.vnode.dynamicProps;
            for (let h = 0; h < d.length; h++) {
                let m = d[h];
                if (X0(e.emitsOptions, m)) continue;
                const y = t[m];
                if (c)
                    if ($e(o, m)) y !== o[m] && (o[m] = y, f = !0);
                    else {
                        const b = xt(m);
                        i[b] = Ks(c, r, b, y, e, !1)
                    }
                else y !== o[m] && (o[m] = y, f = !0)
            }
        }
    } else {
        co(e, t, i, o) && (f = !0);
        let d;
        for (const h in r)(!t || !$e(t, h) && ((d = C1(h)) === h || !$e(t, d))) && (c ? s && (s[h] !== void 0 || s[d] !== void 0) && (i[h] = Ks(c, r, h, void 0, e, !0)) : delete i[h]);
        if (o !== r)
            for (const h in o)(!t || !$e(t, h)) && (delete o[h], f = !0)
    }
    f && Mt(e, "set", "$attrs")
}

function co(e, t, s, a) {
    const [i, o] = e.propsOptions;
    let l = !1,
        r;
    if (t)
        for (let c in t) {
            if (O1(c)) continue;
            const f = t[c];
            let d;
            i && $e(i, d = xt(c)) ? !o || !o.includes(d) ? s[d] = f : (r || (r = {}))[d] = f : X0(e.emitsOptions, c) || (!(c in a) || f !== a[c]) && (a[c] = f, l = !0)
        }
    if (o) {
        const c = ge(s),
            f = r || Pe;
        for (let d = 0; d < o.length; d++) {
            const h = o[d];
            s[h] = Ks(i, c, h, f[h], e, !$e(f, h))
        }
    }
    return l
}

function Ks(e, t, s, a, i, o) {
    const l = e[s];
    if (l != null) {
        const r = $e(l, "default");
        if (r && a === void 0) {
            const c = l.default;
            if (l.type !== Function && !l.skipFactory && ve(c)) {
                const {
                    propsDefaults: f
                } = i;
                if (s in f) a = f[s];
                else {
                    const d = i0(i);
                    a = f[s] = c.call(null, t), d()
                }
            } else a = c
        }
        l[0] && (o && !r ? a = !1 : l[1] && (a === "" || a === C1(s)) && (a = !0))
    }
    return a
}

function uo(e, t, s = !1) {
    const a = t.propsCache,
        i = a.get(e);
    if (i) return i;
    const o = e.props,
        l = {},
        r = [];
    let c = !1;
    if (!ve(e)) {
        const d = h => {
            c = !0;
            const [m, y] = uo(h, t, !0);
            Ke(l, m), y && r.push(...y)
        };
        !s && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d)
    }
    if (!o && !c) return Oe(e) && a.set(e, u1), u1;
    if (he(o))
        for (let d = 0; d < o.length; d++) {
            const h = xt(o[d]);
            mi(h) && (l[h] = Pe)
        } else if (o)
            for (const d in o) {
                const h = xt(d);
                if (mi(h)) {
                    const m = o[d],
                        y = l[h] = he(m) || ve(m) ? {
                            type: m
                        } : Ke({}, m);
                    if (y) {
                        const b = yi(Boolean, y.type),
                            M = yi(String, y.type);
                        y[0] = b > -1, y[1] = M < 0 || b < M, (b > -1 || $e(y, "default")) && r.push(h)
                    }
                }
            }
    const f = [l, r];
    return Oe(e) && a.set(e, f), f
}

function mi(e) {
    return e[0] !== "$" && !O1(e)
}

function gi(e) {
    const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
    return t ? t[2] : e === null ? "null" : ""
}

function vi(e, t) {
    return gi(e) === gi(t)
}

function yi(e, t) {
    return he(t) ? t.findIndex(s => vi(s, e)) : ve(t) && vi(t, e) ? 0 : -1
}
const po = e => e[0] === "_" || e === "$stable",
    La = e => he(e) ? e.map(vt) : [vt(e)],
    Gr = (e, t, s) => {
        if (t._n) return t;
        const a = ne((...i) => La(t(...i)), s);
        return a._c = !1, a
    },
    fo = (e, t, s) => {
        const a = e._ctx;
        for (const i in e) {
            if (po(i)) continue;
            const o = e[i];
            if (ve(o)) t[i] = Gr(i, o, a);
            else if (o != null) {
                const l = La(o);
                t[i] = () => l
            }
        }
    },
    ho = (e, t) => {
        const s = La(t);
        e.slots.default = () => s
    },
    Ur = (e, t) => {
        if (e.vnode.shapeFlag & 32) {
            const s = t._;
            s ? (e.slots = ge(t), V0(t, "_", s)) : fo(t, e.slots = {})
        } else e.slots = {}, t && ho(e, t);
        V0(e.slots, is, 1)
    },
    Yr = (e, t, s) => {
        const {
            vnode: a,
            slots: i
        } = e;
        let o = !0,
            l = Pe;
        if (a.shapeFlag & 32) {
            const r = t._;
            r ? s && r === 1 ? o = !1 : (Ke(i, t), !s && r === 1 && delete i._) : (o = !t.$stable, fo(t, i)), l = t
        } else t && (ho(e, t), l = {
            default: 1
        });
        if (o)
            for (const r in i) !po(r) && l[r] == null && delete i[r]
    };

function Js(e, t, s, a, i = !1) {
    if (he(e)) {
        e.forEach((m, y) => Js(m, t && (he(t) ? t[y] : t), s, a, i));
        return
    }
    if (N1(a) && !i) return;
    const o = a.shapeFlag & 4 ? os(a.component) || a.component.proxy : a.el,
        l = i ? null : o,
        {
            i: r,
            r: c
        } = e,
        f = t && t.r,
        d = r.refs === Pe ? r.refs = {} : r.refs,
        h = r.setupState;
    if (f != null && f !== c && (Re(f) ? (d[f] = null, $e(h, f) && (h[f] = null)) : qe(f) && (f.value = null)), ve(c)) Rt(c, r, 12, [l, d]);
    else {
        const m = Re(c),
            y = qe(c);
        if (m || y) {
            const b = () => {
                if (e.f) {
                    const M = m ? $e(h, c) ? h[c] : d[c] : c.value;
                    i ? he(M) && _a(M, o) : he(M) ? M.includes(o) || M.push(o) : m ? (d[c] = [o], $e(h, c) && (h[c] = d[c])) : (c.value = [o], e.k && (d[e.k] = c.value))
                } else m ? (d[c] = l, $e(h, c) && (h[c] = l)) : y && (c.value = l, e.k && (d[e.k] = l))
            };
            l ? (b.id = -1, tt(b, s)) : b()
        }
    }
}
const tt = Ar;

function Kr(e) {
    return Jr(e)
}

function Jr(e, t) {
    const s = Sn();
    s.__VUE__ = !0;
    const {
        insert: a,
        remove: i,
        patchProp: o,
        createElement: l,
        createText: r,
        createComment: c,
        setText: f,
        setElementText: d,
        parentNode: h,
        nextSibling: m,
        setScopeId: y = rt,
        insertStaticContent: b
    } = e, M = (x, w, T, N = null, L = null, q = null, X = void 0, F = null, W = !!w.dynamicChildren) => {
        if (x === w) return;
        x && !E1(x, w) && (N = I(x), je(x, L, q, !0), x = null), w.patchFlag === -2 && (W = !1, w.dynamicChildren = null);
        const {
            type: R,
            ref: ie,
            shapeFlag: pe
        } = w;
        switch (R) {
            case as:
                V(x, w, T, N);
                break;
            case Ft:
                S(x, w, T, N);
                break;
            case S0:
                x == null && Z(w, T, N, X);
                break;
            case G:
                ce(x, w, T, N, L, q, X, F, W);
                break;
            default:
                pe & 1 ? z(x, w, T, N, L, q, X, F, W) : pe & 6 ? Y(x, w, T, N, L, q, X, F, W) : (pe & 64 || pe & 128) && R.process(x, w, T, N, L, q, X, F, W, re)
        }
        ie != null && L && Js(ie, x && x.ref, q, w || x, !w)
    }, V = (x, w, T, N) => {
        if (x == null) a(w.el = r(w.children), T, N);
        else {
            const L = w.el = x.el;
            w.children !== x.children && f(L, w.children)
        }
    }, S = (x, w, T, N) => {
        x == null ? a(w.el = c(w.children || ""), T, N) : w.el = x.el
    }, Z = (x, w, T, N) => {
        [x.el, x.anchor] = b(x.children, w, T, N, x.el, x.anchor)
    }, C = ({
        el: x,
        anchor: w
    }, T, N) => {
        let L;
        for (; x && x !== w;) L = m(x), a(x, T, N), x = L;
        a(w, T, N)
    }, E = ({
        el: x,
        anchor: w
    }) => {
        let T;
        for (; x && x !== w;) T = m(x), i(x), x = T;
        i(w)
    }, z = (x, w, T, N, L, q, X, F, W) => {
        w.type === "svg" ? X = "svg" : w.type === "math" && (X = "mathml"), x == null ? j(w, T, N, L, q, X, F, W) : k(x, w, L, q, X, F, W)
    }, j = (x, w, T, N, L, q, X, F) => {
        let W, R;
        const {
            props: ie,
            shapeFlag: pe,
            transition: ue,
            dirs: me
        } = x;
        if (W = x.el = l(x.type, q, ie && ie.is, ie), pe & 8 ? d(W, x.children) : pe & 16 && O(x.children, W, null, N, L, $s(x, q), X, F), me && Ut(x, null, N, "created"), se(W, x, x.scopeId, X, N), ie) {
            for (const Te in ie) Te !== "value" && !O1(Te) && o(W, Te, null, ie[Te], q, x.children, N, L, Je);
            "value" in ie && o(W, "value", null, ie.value, q), (R = ie.onVnodeBeforeMount) && gt(R, N, x)
        }
        me && Ut(x, null, N, "beforeMount");
        const xe = Qr(L, ue);
        xe && ue.beforeEnter(W), a(W, w, T), ((R = ie && ie.onVnodeMounted) || xe || me) && tt(() => {
            R && gt(R, N, x), xe && ue.enter(W), me && Ut(x, null, N, "mounted")
        }, L)
    }, se = (x, w, T, N, L) => {
        if (T && y(x, T), N)
            for (let q = 0; q < N.length; q++) y(x, N[q]);
        if (L) {
            let q = L.subTree;
            if (w === q) {
                const X = L.vnode;
                se(x, X, X.scopeId, X.slotScopeIds, L.parent)
            }
        }
    }, O = (x, w, T, N, L, q, X, F, W = 0) => {
        for (let R = W; R < x.length; R++) {
            const ie = x[R] = F ? Bt(x[R]) : vt(x[R]);
            M(null, ie, w, T, N, L, q, X, F)
        }
    }, k = (x, w, T, N, L, q, X) => {
        const F = w.el = x.el;
        let {
            patchFlag: W,
            dynamicChildren: R,
            dirs: ie
        } = w;
        W |= x.patchFlag & 16;
        const pe = x.props || Pe,
            ue = w.props || Pe;
        let me;
        if (T && Yt(T, !1), (me = ue.onVnodeBeforeUpdate) && gt(me, T, w, x), ie && Ut(w, x, T, "beforeUpdate"), T && Yt(T, !0), R ? B(x.dynamicChildren, R, F, T, N, $s(w, L), q) : X || J(x, w, F, null, T, N, $s(w, L), q, !1), W > 0) {
            if (W & 16) U(F, w, pe, ue, T, N, L);
            else if (W & 2 && pe.class !== ue.class && o(F, "class", null, ue.class, L), W & 4 && o(F, "style", pe.style, ue.style, L), W & 8) {
                const xe = w.dynamicProps;
                for (let Te = 0; Te < xe.length; Te++) {
                    const Ie = xe[Te],
                        We = pe[Ie],
                        ct = ue[Ie];
                    (ct !== We || Ie === "value") && o(F, Ie, We, ct, L, x.children, T, N, Je)
                }
            }
            W & 1 && x.children !== w.children && d(F, w.children)
        } else !X && R == null && U(F, w, pe, ue, T, N, L);
        ((me = ue.onVnodeUpdated) || ie) && tt(() => {
            me && gt(me, T, w, x), ie && Ut(w, x, T, "updated")
        }, N)
    }, B = (x, w, T, N, L, q, X) => {
        for (let F = 0; F < w.length; F++) {
            const W = x[F],
                R = w[F],
                ie = W.el && (W.type === G || !E1(W, R) || W.shapeFlag & 70) ? h(W.el) : T;
            M(W, R, ie, null, N, L, q, X, !0)
        }
    }, U = (x, w, T, N, L, q, X) => {
        if (T !== N) {
            if (T !== Pe)
                for (const F in T) !O1(F) && !(F in N) && o(x, F, T[F], null, X, w.children, L, q, Je);
            for (const F in N) {
                if (O1(F)) continue;
                const W = N[F],
                    R = T[F];
                W !== R && F !== "value" && o(x, F, R, W, X, w.children, L, q, Je)
            }
            "value" in N && o(x, "value", T.value, N.value, X)
        }
    }, ce = (x, w, T, N, L, q, X, F, W) => {
        const R = w.el = x ? x.el : r(""),
            ie = w.anchor = x ? x.anchor : r("");
        let {
            patchFlag: pe,
            dynamicChildren: ue,
            slotScopeIds: me
        } = w;
        me && (F = F ? F.concat(me) : me), x == null ? (a(R, T, N), a(ie, T, N), O(w.children || [], T, ie, L, q, X, F, W)) : pe > 0 && pe & 64 && ue && x.dynamicChildren ? (B(x.dynamicChildren, ue, T, L, q, X, F), (w.key != null || L && w === L.subTree) && mo(x, w, !0)) : J(x, w, T, ie, L, q, X, F, W)
    }, Y = (x, w, T, N, L, q, X, F, W) => {
        w.slotScopeIds = F, x == null ? w.shapeFlag & 512 ? L.ctx.activate(w, T, N, X, W) : de(w, T, N, L, q, X, W) : be(x, w, W)
    }, de = (x, w, T, N, L, q, X) => {
        const F = x.component = o2(x, N, L);
        if (ao(x) && (F.ctx.renderer = re), l2(F), F.asyncDep) {
            if (L && L.registerDep(F, fe), !x.el) {
                const W = F.subTree = g(Ft);
                S(null, W, w, T)
            }
        } else fe(F, x, w, T, L, q, X)
    }, be = (x, w, T) => {
        const N = w.component = x.component;
        if (br(x, w, T))
            if (N.asyncDep && !N.asyncResolved) {
                _e(N, w, T);
                return
            } else N.next = w, mr(N.update), N.effect.dirty = !0, N.update();
        else w.el = x.el, N.vnode = w
    }, fe = (x, w, T, N, L, q, X) => {
        const F = () => {
                if (x.isMounted) {
                    let {
                        next: ie,
                        bu: pe,
                        u: ue,
                        parent: me,
                        vnode: xe
                    } = x; {
                        const l1 = go(x);
                        if (l1) {
                            ie && (ie.el = xe.el, _e(x, ie, X)), l1.asyncDep.then(() => {
                                x.isUnmounted || F()
                            });
                            return
                        }
                    }
                    let Te = ie,
                        Ie;
                    Yt(x, !1), ie ? (ie.el = xe.el, _e(x, ie, X)) : ie = xe, pe && w0(pe), (Ie = ie.props && ie.props.onVnodeBeforeUpdate) && gt(Ie, me, ie, xe), Yt(x, !0);
                    const We = bs(x),
                        ct = x.subTree;
                    x.subTree = We, M(ct, We, h(ct.el), I(ct), x, L, q), ie.el = We.el, Te === null && wr(x, We.el), ue && tt(ue, L), (Ie = ie.props && ie.props.onVnodeUpdated) && tt(() => gt(Ie, me, ie, xe), L)
                } else {
                    let ie;
                    const {
                        el: pe,
                        props: ue
                    } = w, {
                        bm: me,
                        m: xe,
                        parent: Te
                    } = x, Ie = N1(w);
                    if (Yt(x, !1), me && w0(me), !Ie && (ie = ue && ue.onVnodeBeforeMount) && gt(ie, Te, w), Yt(x, !0), pe && Be) {
                        const We = () => {
                            x.subTree = bs(x), Be(pe, x.subTree, x, L, null)
                        };
                        Ie ? w.type.__asyncLoader().then(() => !x.isUnmounted && We()) : We()
                    } else {
                        const We = x.subTree = bs(x);
                        M(null, We, T, N, x, L, q), w.el = We.el
                    }
                    if (xe && tt(xe, L), !Ie && (ie = ue && ue.onVnodeMounted)) {
                        const We = w;
                        tt(() => gt(ie, Te, We), L)
                    }(w.shapeFlag & 256 || Te && N1(Te.vnode) && Te.vnode.shapeFlag & 256) && x.a && tt(x.a, L), x.isMounted = !0, w = T = N = null
                }
            },
            W = x.effect = new wa(F, rt, () => Ta(R), x.scope),
            R = x.update = () => {
                W.dirty && W.run()
            };
        R.id = x.uid, Yt(x, !0), R()
    }, _e = (x, w, T) => {
        w.component = x;
        const N = x.vnode.props;
        x.vnode = w, x.next = null, Wr(x, w.props, N, T), Yr(x, w.children, T), i1(), ri(x), n1()
    }, J = (x, w, T, N, L, q, X, F, W = !1) => {
        const R = x && x.children,
            ie = x ? x.shapeFlag : 0,
            pe = w.children,
            {
                patchFlag: ue,
                shapeFlag: me
            } = w;
        if (ue > 0) {
            if (ue & 128) {
                Me(R, pe, T, N, L, q, X, F, W);
                return
            } else if (ue & 256) {
                Le(R, pe, T, N, L, q, X, F, W);
                return
            }
        }
        me & 8 ? (ie & 16 && Je(R, L, q), pe !== R && d(T, pe)) : ie & 16 ? me & 16 ? Me(R, pe, T, N, L, q, X, F, W) : Je(R, L, q, !0) : (ie & 8 && d(T, ""), me & 16 && O(pe, T, N, L, q, X, F, W))
    }, Le = (x, w, T, N, L, q, X, F, W) => {
        x = x || u1, w = w || u1;
        const R = x.length,
            ie = w.length,
            pe = Math.min(R, ie);
        let ue;
        for (ue = 0; ue < pe; ue++) {
            const me = w[ue] = W ? Bt(w[ue]) : vt(w[ue]);
            M(x[ue], me, T, null, L, q, X, F, W)
        }
        R > ie ? Je(x, L, q, !0, !1, pe) : O(w, T, N, L, q, X, F, W, pe)
    }, Me = (x, w, T, N, L, q, X, F, W) => {
        let R = 0;
        const ie = w.length;
        let pe = x.length - 1,
            ue = ie - 1;
        for (; R <= pe && R <= ue;) {
            const me = x[R],
                xe = w[R] = W ? Bt(w[R]) : vt(w[R]);
            if (E1(me, xe)) M(me, xe, T, null, L, q, X, F, W);
            else break;
            R++
        }
        for (; R <= pe && R <= ue;) {
            const me = x[pe],
                xe = w[ue] = W ? Bt(w[ue]) : vt(w[ue]);
            if (E1(me, xe)) M(me, xe, T, null, L, q, X, F, W);
            else break;
            pe--, ue--
        }
        if (R > pe) {
            if (R <= ue) {
                const me = ue + 1,
                    xe = me < ie ? w[me].el : N;
                for (; R <= ue;) M(null, w[R] = W ? Bt(w[R]) : vt(w[R]), T, xe, L, q, X, F, W), R++
            }
        } else if (R > ue)
            for (; R <= pe;) je(x[R], L, q, !0), R++;
        else {
            const me = R,
                xe = R,
                Te = new Map;
            for (R = xe; R <= ue; R++) {
                const at = w[R] = W ? Bt(w[R]) : vt(w[R]);
                at.key != null && Te.set(at.key, R)
            }
            let Ie, We = 0;
            const ct = ue - xe + 1;
            let l1 = !1,
                Ja = 0;
            const L1 = new Array(ct);
            for (R = 0; R < ct; R++) L1[R] = 0;
            for (R = me; R <= pe; R++) {
                const at = x[R];
                if (We >= ct) {
                    je(at, L, q, !0);
                    continue
                }
                let mt;
                if (at.key != null) mt = Te.get(at.key);
                else
                    for (Ie = xe; Ie <= ue; Ie++)
                        if (L1[Ie - xe] === 0 && E1(at, w[Ie])) {
                            mt = Ie;
                            break
                        } mt === void 0 ? je(at, L, q, !0) : (L1[mt - xe] = R + 1, mt >= Ja ? Ja = mt : l1 = !0, M(at, w[mt], T, null, L, q, X, F, W), We++)
            }
            const Qa = l1 ? Xr(L1) : u1;
            for (Ie = Qa.length - 1, R = ct - 1; R >= 0; R--) {
                const at = xe + R,
                    mt = w[at],
                    Xa = at + 1 < ie ? w[at + 1].el : N;
                L1[R] === 0 ? M(null, mt, T, Xa, L, q, X, F, W) : l1 && (Ie < 0 || R !== Qa[Ie] ? Ee(mt, T, Xa, 2) : Ie--)
            }
        }
    }, Ee = (x, w, T, N, L = null) => {
        const {
            el: q,
            type: X,
            transition: F,
            children: W,
            shapeFlag: R
        } = x;
        if (R & 6) {
            Ee(x.component.subTree, w, T, N);
            return
        }
        if (R & 128) {
            x.suspense.move(w, T, N);
            return
        }
        if (R & 64) {
            X.move(x, w, T, re);
            return
        }
        if (X === G) {
            a(q, w, T);
            for (let pe = 0; pe < W.length; pe++) Ee(W[pe], w, T, N);
            a(x.anchor, w, T);
            return
        }
        if (X === S0) {
            C(x, w, T);
            return
        }
        if (N !== 2 && R & 1 && F)
            if (N === 0) F.beforeEnter(q), a(q, w, T), tt(() => F.enter(q), L);
            else {
                const {
                    leave: pe,
                    delayLeave: ue,
                    afterLeave: me
                } = F, xe = () => a(q, w, T), Te = () => {
                    pe(q, () => {
                        xe(), me && me()
                    })
                };
                ue ? ue(q, xe, Te) : Te()
            }
        else a(q, w, T)
    }, je = (x, w, T, N = !1, L = !1) => {
        const {
            type: q,
            props: X,
            ref: F,
            children: W,
            dynamicChildren: R,
            shapeFlag: ie,
            patchFlag: pe,
            dirs: ue
        } = x;
        if (F != null && Js(F, null, T, x, !0), ie & 256) {
            w.ctx.deactivate(x);
            return
        }
        const me = ie & 1 && ue,
            xe = !N1(x);
        let Te;
        if (xe && (Te = X && X.onVnodeBeforeUnmount) && gt(Te, w, x), ie & 6) u0(x.component, T, N);
        else {
            if (ie & 128) {
                x.suspense.unmount(T, N);
                return
            }
            me && Ut(x, null, w, "beforeUnmount"), ie & 64 ? x.type.remove(x, w, T, L, re, N) : R && (q !== G || pe > 0 && pe & 64) ? Je(R, w, T, !1, !0) : (q === G && pe & 384 || !L && ie & 16) && Je(W, w, T), N && Vt(x)
        }(xe && (Te = X && X.onVnodeUnmounted) || me) && tt(() => {
            Te && gt(Te, w, x), me && Ut(x, null, w, "unmounted")
        }, T)
    }, Vt = x => {
        const {
            type: w,
            el: T,
            anchor: N,
            transition: L
        } = x;
        if (w === G) {
            wt(T, N);
            return
        }
        if (w === S0) {
            E(x);
            return
        }
        const q = () => {
            i(T), L && !L.persisted && L.afterLeave && L.afterLeave()
        };
        if (x.shapeFlag & 1 && L && !L.persisted) {
            const {
                leave: X,
                delayLeave: F
            } = L, W = () => X(T, q);
            F ? F(x.el, q, W) : W()
        } else q()
    }, wt = (x, w) => {
        let T;
        for (; x !== w;) T = m(x), i(x), x = T;
        i(w)
    }, u0 = (x, w, T) => {
        const {
            bum: N,
            scope: L,
            update: q,
            subTree: X,
            um: F
        } = x;
        N && w0(N), L.stop(), q && (q.active = !1, je(X, x, w, T)), F && tt(F, w), tt(() => {
            x.isUnmounted = !0
        }, w), w && w.pendingBranch && !w.isUnmounted && x.asyncDep && !x.asyncResolved && x.suspenseId === w.pendingId && (w.deps--, w.deps === 0 && w.resolve())
    }, Je = (x, w, T, N = !1, L = !1, q = 0) => {
        for (let X = q; X < x.length; X++) je(x[X], w, T, N, L)
    }, I = x => x.shapeFlag & 6 ? I(x.component.subTree) : x.shapeFlag & 128 ? x.suspense.next() : m(x.anchor || x.el);
    let ae = !1;
    const Q = (x, w, T) => {
            x == null ? w._vnode && je(w._vnode, null, null, !0) : M(w._vnode || null, x, w, null, null, null, T), ae || (ae = !0, ri(), Kn(), ae = !1), w._vnode = x
        },
        re = {
            p: M,
            um: je,
            m: Ee,
            r: Vt,
            mt: de,
            mc: O,
            pc: J,
            pbc: B,
            n: I,
            o: e
        };
    let Ce, Be;
    return t && ([Ce, Be] = t(re)), {
        render: Q,
        hydrate: Ce,
        createApp: Dr(Q, Ce)
    }
}

function $s({
    type: e,
    props: t
}, s) {
    return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s
}

function Yt({
    effect: e,
    update: t
}, s) {
    e.allowRecurse = t.allowRecurse = s
}

function Qr(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}

function mo(e, t, s = !1) {
    const a = e.children,
        i = t.children;
    if (he(a) && he(i))
        for (let o = 0; o < a.length; o++) {
            const l = a[o];
            let r = i[o];
            r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = i[o] = Bt(i[o]), r.el = l.el), s || mo(l, r)), r.type === as && (r.el = l.el)
        }
}

function Xr(e) {
    const t = e.slice(),
        s = [0];
    let a, i, o, l, r;
    const c = e.length;
    for (a = 0; a < c; a++) {
        const f = e[a];
        if (f !== 0) {
            if (i = s[s.length - 1], e[i] < f) {
                t[a] = i, s.push(a);
                continue
            }
            for (o = 0, l = s.length - 1; o < l;) r = o + l >> 1, e[s[r]] < f ? o = r + 1 : l = r;
            f < e[s[o]] && (o > 0 && (t[a] = s[o - 1]), s[o] = a)
        }
    }
    for (o = s.length, l = s[o - 1]; o-- > 0;) s[o] = l, l = t[l];
    return s
}

function go(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : go(t)
}
const e2 = e => e.__isTeleport,
    G = Symbol.for("v-fgt"),
    as = Symbol.for("v-txt"),
    Ft = Symbol.for("v-cmt"),
    S0 = Symbol.for("v-stc"),
    j1 = [];
let ut = null;

function u(e = !1) {
    j1.push(ut = e ? null : [])
}

function t2() {
    j1.pop(), ut = j1[j1.length - 1] || null
}
let Y1 = 1;

function _i(e) {
    Y1 += e
}

function vo(e) {
    return e.dynamicChildren = Y1 > 0 ? ut || u1 : null, t2(), Y1 > 0 && ut && ut.push(e), e
}

function p(e, t, s, a, i, o) {
    return vo(n(e, t, s, a, i, o, !0))
}

function ye(e, t, s, a, i) {
    return vo(g(e, t, s, a, i, !0))
}

function x1(e) {
    return e ? e.__v_isVNode === !0 : !1
}

function E1(e, t) {
    return e.type === t.type && e.key === t.key
}
const is = "__vInternal",
    yo = ({
        key: e
    }) => e ? ? null,
    M0 = ({
        ref: e,
        ref_key: t,
        ref_for: s
    }) => (typeof e == "number" && (e = "" + e), e != null ? Re(e) || qe(e) || ve(e) ? {
        i: Fe,
        r: e,
        k: t,
        f: !!s
    } : e : null);

function n(e, t = null, s = null, a = 0, i = null, o = e === G ? 0 : 1, l = !1, r = !1) {
    const c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && yo(t),
        ref: t && M0(t),
        scopeId: Xn,
        slotScopeIds: null,
        children: s,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: o,
        patchFlag: a,
        dynamicProps: i,
        dynamicChildren: null,
        appContext: null,
        ctx: Fe
    };
    return r ? (Ea(c, s), o & 128 && e.normalize(c)) : s && (c.shapeFlag |= Re(s) ? 8 : 16), Y1 > 0 && !l && ut && (c.patchFlag > 0 || o & 6) && c.patchFlag !== 32 && ut.push(c), c
}
const g = s2;

function s2(e, t = null, s = null, a = 0, i = null, o = !1) {
    if ((!e || e === eo) && (e = Ft), x1(e)) {
        const r = s1(e, t, !0);
        return s && Ea(r, s), Y1 > 0 && !o && ut && (r.shapeFlag & 6 ? ut[ut.indexOf(e)] = r : ut.push(r)), r.patchFlag |= -2, r
    }
    if (p2(e) && (e = e.__vccOpts), t) {
        t = a2(t);
        let {
            class: r,
            style: c
        } = t;
        r && !Re(r) && (t.class = Se(r)), Oe(c) && (Dn(c) && !he(c) && (c = Ke({}, c)), t.style = ba(c))
    }
    const l = Re(e) ? 1 : $r(e) ? 128 : e2(e) ? 64 : Oe(e) ? 4 : ve(e) ? 2 : 0;
    return n(e, t, s, a, i, l, o, !0)
}

function a2(e) {
    return e ? Dn(e) || is in e ? Ke({}, e) : e : null
}

function s1(e, t, s = !1) {
    const {
        props: a,
        ref: i,
        patchFlag: o,
        children: l
    } = e, r = t ? K(a || {}, t) : a;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: r,
        key: r && yo(r),
        ref: t && t.ref ? s && i ? he(i) ? i.concat(M0(t)) : [i, M0(t)] : M0(t) : i,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: l,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== G ? o === -1 ? 16 : o | 16 : o,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && s1(e.ssContent),
        ssFallback: e.ssFallback && s1(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    }
}

function ee(e = " ", t = 0) {
    return g(as, null, e, t)
}

function we(e, t) {
    const s = g(S0, null, e);
    return s.staticCount = t, s
}

function D(e = "", t = !1) {
    return t ? (u(), ye(Ft, null, e)) : g(Ft, null, e)
}

function vt(e) {
    return e == null || typeof e == "boolean" ? g(Ft) : he(e) ? g(G, null, e.slice()) : typeof e == "object" ? Bt(e) : g(as, null, String(e))
}

function Bt(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : s1(e)
}

function Ea(e, t) {
    let s = 0;
    const {
        shapeFlag: a
    } = e;
    if (t == null) t = null;
    else if (he(t)) s = 16;
    else if (typeof t == "object")
        if (a & 65) {
            const i = t.default;
            i && (i._c && (i._d = !1), Ea(e, i()), i._c && (i._d = !0));
            return
        } else {
            s = 32;
            const i = t._;
            !i && !(is in t) ? t._ctx = Fe : i === 3 && Fe && (Fe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
        }
    else ve(t) ? (t = {
        default: t,
        _ctx: Fe
    }, s = 32) : (t = String(t), a & 64 ? (s = 16, t = [ee(t)]) : s = 8);
    e.children = t, e.shapeFlag |= s
}

function K(...e) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
        const a = e[s];
        for (const i in a)
            if (i === "class") t.class !== a.class && (t.class = Se([t.class, a.class]));
            else if (i === "style") t.style = ba([t.style, a.style]);
        else if (W0(i)) {
            const o = t[i],
                l = a[i];
            l && o !== l && !(he(o) && o.includes(l)) && (t[i] = o ? [].concat(o, l) : l)
        } else i !== "" && (t[i] = a[i])
    }
    return t
}

function gt(e, t, s, a = null) {
    pt(e, t, 7, [s, a])
}
const i2 = ro();
let n2 = 0;

function o2(e, t, s) {
    const a = e.type,
        i = (t ? t.appContext : e.appContext) || i2,
        o = {
            uid: n2++,
            vnode: e,
            type: a,
            parent: t,
            appContext: i,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            scope: new Hn(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(i.provides),
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: uo(a, i),
            emitsOptions: Qn(a, i),
            emit: null,
            emitted: null,
            propsDefaults: Pe,
            inheritAttrs: a.inheritAttrs,
            ctx: Pe,
            data: Pe,
            props: Pe,
            attrs: Pe,
            slots: Pe,
            refs: Pe,
            setupState: Pe,
            setupContext: null,
            attrsProxy: null,
            slotsProxy: null,
            suspense: s,
            suspenseId: s ? s.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
    return o.ctx = {
        _: o
    }, o.root = t ? t.root : o, o.emit = yr.bind(null, o), e.ce && e.ce(o), o
}
let Ye = null,
    I0, Qs; {
    const e = Sn(),
        t = (s, a) => {
            let i;
            return (i = e[s]) || (i = e[s] = []), i.push(a), o => {
                i.length > 1 ? i.forEach(l => l(o)) : i[0](o)
            }
        };
    I0 = t("__VUE_INSTANCE_SETTERS__", s => Ye = s), Qs = t("__VUE_SSR_SETTERS__", s => ns = s)
}
const i0 = e => {
        const t = Ye;
        return I0(e), e.scope.on(), () => {
            e.scope.off(), I0(t)
        }
    },
    xi = () => {
        Ye && Ye.scope.off(), I0(null)
    };

function _o(e) {
    return e.vnode.shapeFlag & 4
}
let ns = !1;

function l2(e, t = !1) {
    t && Qs(t);
    const {
        props: s,
        children: a
    } = e.vnode, i = _o(e);
    qr(e, s, i, t), Ur(e, a);
    const o = i ? r2(e, t) : void 0;
    return t && Qs(!1), o
}

function r2(e, t) {
    const s = e.type;
    e.accessCache = Object.create(null), e.proxy = J0(new Proxy(e.ctx, Br));
    const {
        setup: a
    } = s;
    if (a) {
        const i = e.setupContext = a.length > 1 ? d2(e) : null,
            o = i0(e);
        i1();
        const l = Rt(a, e, 0, [e.props, i]);
        if (n1(), o(), wn(l)) {
            if (l.then(xi, xi), t) return l.then(r => {
                bi(e, r, t)
            }).catch(r => {
                Q0(r, e, 0)
            });
            e.asyncDep = l
        } else bi(e, l, t)
    } else xo(e, t)
}

function bi(e, t, s) {
    ve(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Oe(t) && (e.setupState = Gn(t)), xo(e, s)
}
let wi;

function xo(e, t, s) {
    const a = e.type;
    if (!e.render) {
        if (!t && wi && !a.render) {
            const i = a.template || Pa(e).template;
            if (i) {
                const {
                    isCustomElement: o,
                    compilerOptions: l
                } = e.appContext.config, {
                    delimiters: r,
                    compilerOptions: c
                } = a, f = Ke(Ke({
                    isCustomElement: o,
                    delimiters: r
                }, l), c);
                a.render = wi(i, f)
            }
        }
        e.render = a.render || rt
    } {
        const i = i0(e);
        i1();
        try {
            Ir(e)
        } finally {
            n1(), i()
        }
    }
}

function c2(e) {
    return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs, {
        get(t, s) {
            return st(e, "get", "$attrs"), t[s]
        }
    }))
}

function d2(e) {
    const t = s => {
        e.exposed = s || {}
    };
    return {
        get attrs() {
            return c2(e)
        },
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}

function os(e) {
    if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(Gn(J0(e.exposed)), {
        get(t, s) {
            if (s in t) return t[s];
            if (s in z1) return z1[s](e)
        },
        has(t, s) {
            return s in t || s in z1
        }
    }))
}

function u2(e, t = !0) {
    return ve(e) ? e.displayName || e.name : e.name || t && e.__name
}

function p2(e) {
    return ve(e) && "__vccOpts" in e
}
const v = (e, t) => or(e, t, ns);

function De(e, t, s) {
    const a = arguments.length;
    return a === 2 ? Oe(t) && !he(t) ? x1(t) ? g(e, null, [t]) : g(e, t) : g(e, null, t) : (a > 3 ? s = Array.prototype.slice.call(arguments, 2) : a === 3 && x1(s) && (s = [s]), g(e, t, s))
}
const f2 = "3.4.18";
/**
 * @vue/runtime-dom v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
const h2 = "http://www.w3.org/2000/svg",
    m2 = "http://www.w3.org/1998/Math/MathML",
    It = typeof document < "u" ? document : null,
    $i = It && It.createElement("template"),
    g2 = {
        insert: (e, t, s) => {
            t.insertBefore(e, s || null)
        },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, s, a) => {
            const i = t === "svg" ? It.createElementNS(h2, e) : t === "mathml" ? It.createElementNS(m2, e) : It.createElement(e, s ? {
                is: s
            } : void 0);
            return e === "select" && a && a.multiple != null && i.setAttribute("multiple", a.multiple), i
        },
        createText: e => It.createTextNode(e),
        createComment: e => It.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => It.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, s, a, i, o) {
            const l = s ? s.previousSibling : t.lastChild;
            if (i && (i === o || i.nextSibling))
                for (; t.insertBefore(i.cloneNode(!0), s), !(i === o || !(i = i.nextSibling)););
            else {
                $i.innerHTML = a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e;
                const r = $i.content;
                if (a === "svg" || a === "mathml") {
                    const c = r.firstChild;
                    for (; c.firstChild;) r.appendChild(c.firstChild);
                    r.removeChild(c)
                }
                t.insertBefore(r, s)
            }
            return [l ? l.nextSibling : t.firstChild, s ? s.previousSibling : t.lastChild]
        }
    },
    v2 = Symbol("_vtc");

function y2(e, t, s) {
    const a = e[v2];
    a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t
}
const Ai = Symbol("_vod"),
    _2 = Symbol(""),
    x2 = /(^|;)\s*display\s*:/;

function b2(e, t, s) {
    const a = e.style,
        i = Re(s),
        o = a.display;
    let l = !1;
    if (s && !i) {
        if (t && !Re(t))
            for (const r in t) s[r] == null && Xs(a, r, "");
        for (const r in s) r === "display" && (l = !0), Xs(a, r, s[r])
    } else if (i) {
        if (t !== s) {
            const r = a[_2];
            r && (s += ";" + r), a.cssText = s, l = x2.test(s)
        }
    } else t && e.removeAttribute("style");
    Ai in e && (e[Ai] = l ? a.display : "", a.display = o)
}
const Si = /\s*!important$/;

function Xs(e, t, s) {
    if (he(s)) s.forEach(a => Xs(e, t, a));
    else if (s == null && (s = ""), t.startsWith("--")) e.setProperty(t, s);
    else {
        const a = w2(e, t);
        Si.test(s) ? e.setProperty(C1(a), s.replace(Si, ""), "important") : e[a] = s
    }
}
const Mi = ["Webkit", "Moz", "ms"],
    As = {};

function w2(e, t) {
    const s = As[t];
    if (s) return s;
    let a = xt(t);
    if (a !== "filter" && a in e) return As[t] = a;
    a = Y0(a);
    for (let i = 0; i < Mi.length; i++) {
        const o = Mi[i] + a;
        if (o in e) return As[t] = o
    }
    return t
}
const Ci = "http://www.w3.org/1999/xlink";

function $2(e, t, s, a, i) {
    if (a && t.startsWith("xlink:")) s == null ? e.removeAttributeNS(Ci, t.slice(6, t.length)) : e.setAttributeNS(Ci, t, s);
    else {
        const o = Il(t);
        s == null || o && !Mn(s) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : s)
    }
}

function A2(e, t, s, a, i, o, l) {
    if (t === "innerHTML" || t === "textContent") {
        a && l(a, i, o), e[t] = s ? ? "";
        return
    }
    const r = e.tagName;
    if (t === "value" && r !== "PROGRESS" && !r.includes("-")) {
        e._value = s;
        const f = r === "OPTION" ? e.getAttribute("value") : e.value,
            d = s ? ? "";
        f !== d && (e.value = d), s == null && e.removeAttribute(t);
        return
    }
    let c = !1;
    if (s === "" || s == null) {
        const f = typeof e[t];
        f === "boolean" ? s = Mn(s) : s == null && f === "string" ? (s = "", c = !0) : f === "number" && (s = 0, c = !0)
    }
    try {
        e[t] = s
    } catch {}
    c && e.removeAttribute(t)
}

function c1(e, t, s, a) {
    e.addEventListener(t, s, a)
}

function S2(e, t, s, a) {
    e.removeEventListener(t, s, a)
}
const Hi = Symbol("_vei");

function M2(e, t, s, a, i = null) {
    const o = e[Hi] || (e[Hi] = {}),
        l = o[t];
    if (a && l) l.value = a;
    else {
        const [r, c] = C2(t);
        if (a) {
            const f = o[t] = T2(a, i);
            c1(e, r, f, c)
        } else l && (S2(e, r, l, c), o[t] = void 0)
    }
}
const Zi = /(?:Once|Passive|Capture)$/;

function C2(e) {
    let t;
    if (Zi.test(e)) {
        t = {};
        let a;
        for (; a = e.match(Zi);) e = e.slice(0, e.length - a[0].length), t[a[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : C1(e.slice(2)), t]
}
let Ss = 0;
const H2 = Promise.resolve(),
    Z2 = () => Ss || (H2.then(() => Ss = 0), Ss = Date.now());

function T2(e, t) {
    const s = a => {
        if (!a._vts) a._vts = Date.now();
        else if (a._vts <= s.attached) return;
        pt(V2(a, s.value), t, 5, [a])
    };
    return s.value = e, s.attached = Z2(), s
}

function V2(e, t) {
    if (he(t)) {
        const s = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            s.call(e), e._stopped = !0
        }, t.map(a => i => !i._stopped && a && a(i))
    } else return t
}
const Ti = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
    k2 = (e, t, s, a, i, o, l, r, c) => {
        const f = i === "svg";
        t === "class" ? y2(e, a, f) : t === "style" ? b2(e, s, a) : W0(t) ? ya(t) || M2(e, t, s, a, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : P2(e, t, a, f)) ? A2(e, t, a, o, l, r, c) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), $2(e, t, a, f))
    };

function P2(e, t, s, a) {
    if (a) return !!(t === "innerHTML" || t === "textContent" || t in e && Ti(t) && ve(s));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
    if (t === "width" || t === "height") {
        const i = e.tagName;
        if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE") return !1
    }
    return Ti(t) && Re(s) ? !1 : t in e
}
const Vi = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return he(t) ? s => w0(t, s) : t
};

function L2(e) {
    e.target.composing = !0
}

function ki(e) {
    const t = e.target;
    t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
}
const Ms = Symbol("_assign"),
    E2 = {
        created(e, {
            modifiers: {
                lazy: t,
                trim: s,
                number: a
            }
        }, i) {
            e[Ms] = Vi(i);
            const o = a || i.props && i.props.type === "number";
            c1(e, t ? "change" : "input", l => {
                if (l.target.composing) return;
                let r = e.value;
                s && (r = r.trim()), o && (r = Rs(r)), e[Ms](r)
            }), s && c1(e, "change", () => {
                e.value = e.value.trim()
            }), t || (c1(e, "compositionstart", L2), c1(e, "compositionend", ki), c1(e, "change", ki))
        },
        mounted(e, {
            value: t
        }) {
            e.value = t ? ? ""
        },
        beforeUpdate(e, {
            value: t,
            modifiers: {
                lazy: s,
                trim: a,
                number: i
            }
        }, o) {
            if (e[Ms] = Vi(o), e.composing) return;
            const l = i || e.type === "number" ? Rs(e.value) : e.value,
                r = t ? ? "";
            l !== r && (document.activeElement === e && e.type !== "range" && (s || a && e.value.trim() === r) || (e.value = r))
        }
    },
    B2 = ["ctrl", "shift", "alt", "meta"],
    I2 = {
        stop: e => e.stopPropagation(),
        prevent: e => e.preventDefault(),
        self: e => e.target !== e.currentTarget,
        ctrl: e => !e.ctrlKey,
        shift: e => !e.shiftKey,
        alt: e => !e.altKey,
        meta: e => !e.metaKey,
        left: e => "button" in e && e.button !== 0,
        middle: e => "button" in e && e.button !== 1,
        right: e => "button" in e && e.button !== 2,
        exact: (e, t) => B2.some(s => e[`${s}Key`] && !t.includes(s))
    },
    O2 = (e, t) => {
        const s = e._withMods || (e._withMods = {}),
            a = t.join(".");
        return s[a] || (s[a] = (i, ...o) => {
            for (let l = 0; l < t.length; l++) {
                const r = I2[t[l]];
                if (r && r(i, t)) return
            }
            return e(i, ...o)
        })
    },
    N2 = Ke({
        patchProp: k2
    }, g2);
let Pi;

function z2() {
    return Pi || (Pi = Kr(N2))
}
const bo = (...e) => {
    const t = z2().createApp(...e),
        {
            mount: s
        } = t;
    return t.mount = a => {
        const i = R2(a);
        if (!i) return;
        const o = t._component;
        !ve(o) && !o.render && !o.template && (o.template = i.innerHTML), i.innerHTML = "";
        const l = s(i, !1, j2(i));
        return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), l
    }, t
};

function j2(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}

function R2(e) {
    return Re(e) ? document.querySelector(e) : e
}
const ls = "/images/logo.png",
    D2 = ["width", "height", "fill", "transform"],
    F2 = {
        key: 0
    },
    q2 = n("path", {
        d: "M190,115.31,217.21,89.7l.26-.26a36,36,0,0,0-50.91-50.91c-.09.08-.17.17-.26.26L140.69,66,60.1,36.71A12,12,0,0,0,47.52,39.5l-24,24A12,12,0,0,0,25.34,82l59.83,39.88L75,132H56a12,12,0,0,0-8.48,3.51l-24,24a12,12,0,0,0,4,19.62l35.23,14.1,14.06,35.14.09.22a12,12,0,0,0,19.76,3.7l23.81-23.81A12,12,0,0,0,124,200V181l10.13-10.13L174,230.65a12,12,0,0,0,18.47,1.83l24-24a12,12,0,0,0,2.79-12.59Zm-4.11,89.85L146,145.33a12,12,0,0,0-8.8-5.28A11.66,11.66,0,0,0,136,140a12,12,0,0,0-8.49,3.52l-24,24A12,12,0,0,0,100,176v19l-7.62,7.62-9.24-23.1a12,12,0,0,0-6.69-6.69l-23.1-9.24L61,156H80a12,12,0,0,0,8.48-3.51l24-24A12,12,0,0,0,110.66,110L50.84,70.12l8.24-8.25,80.83,29.39a12,12,0,0,0,12.84-3.05l30.89-32.82a12,12,0,0,1,17,17l-32.82,30.89a12,12,0,0,0-3.06,12.84l29.4,80.82Z"
    }, null, -1),
    W2 = [q2],
    G2 = {
        key: 1
    },
    U2 = n("path", {
        d: "M209,81l-33,31,32,88-24,24-48-72-24,24v24L88,224,72,184,32,168l24-24H80l24-24L32,72,56,48l88,32,31-33A24,24,0,0,1,209,81Z",
        opacity: "0.2"
    }, null, -1),
    Y2 = n("path", {
        d: "M185.33,114.21l29.14-27.43.17-.16a32,32,0,0,0-45.26-45.26l-.16.17L141.79,70.67l-83-30.2a8,8,0,0,0-8.39,1.86l-24,24a8,8,0,0,0,1.22,12.31l63.89,42.59L76.69,136H56a8,8,0,0,0-5.65,2.34l-24,24A8,8,0,0,0,29,175.42l36.82,14.73,14.7,36.75.06.16a8,8,0,0,0,13.18,2.47l23.87-23.88A8,8,0,0,0,120,200V179.31l14.76-14.76,42.59,63.89a8,8,0,0,0,12.31,1.22l24-24a8,8,0,0,0,1.86-8.39Zm-.07,97.23-42.59-63.89A8,8,0,0,0,136.8,144a7.09,7.09,0,0,0-.79,0,8,8,0,0,0-5.66,2.34l-24,24A8,8,0,0,0,104,176v20.69L90.93,209.76,79.43,181A8,8,0,0,0,75,176.57l-28.74-11.5L59.32,152H80a8,8,0,0,0,5.66-2.34l24-24a8,8,0,0,0-1.22-12.32L44.56,70.74l13.5-13.49,83.22,30.26a8,8,0,0,0,8.56-2l30.94-32.88A16,16,0,0,1,203.4,75.22l-32.87,30.94a8,8,0,0,0-2,8.56l30.26,83.22Z"
    }, null, -1),
    K2 = [U2, Y2],
    J2 = {
        key: 2
    },
    Q2 = n("path", {
        d: "M215.52,197.26a8,8,0,0,1-1.86,8.39l-24,24A8,8,0,0,1,184,232a7.09,7.09,0,0,1-.79,0,8,8,0,0,1-5.87-3.52l-44.07-66.12L112,183.59V208a8,8,0,0,1-2.34,5.65s-14,14.06-15.88,15.88A7.91,7.91,0,0,1,91,231.41a8,8,0,0,1-10.41-4.35l-.06-.15-14.7-36.76L29,175.42a8,8,0,0,1-2.69-13.08l16-16A8,8,0,0,1,48,144H72.4l21.27-21.27L27.56,78.65a8,8,0,0,1-1.22-12.32l24-24a8,8,0,0,1,8.39-1.86l85.94,31.25L176.2,40.19a28,28,0,0,1,39.6,39.6l-31.53,31.53Z"
    }, null, -1),
    X2 = [Q2],
    ec = {
        key: 3
    },
    tc = n("path", {
        d: "M183,113.65l30.1-28.32.13-.13A30,30,0,0,0,170.8,42.77l-.13.13L142.35,73,58.05,42.35a6,6,0,0,0-6.29,1.39l-24,24A6,6,0,0,0,28.67,77l65.92,43.94L77.52,138H56a6,6,0,0,0-4.24,1.76l-24,24a6,6,0,0,0,2,9.82l37.62,15,15,37.56,0,.12a6,6,0,0,0,7.81,3.27,5.94,5.94,0,0,0,2.07-1.41l23.91-23.91A6,6,0,0,0,118,200V178.48l17.07-17.07L179,227.33a6,6,0,0,0,9.23.91l24-24a6,6,0,0,0,1.39-6.29Zm1.94,100.93L141,148.66a6,6,0,0,0-4.4-2.64l-.59,0a6,6,0,0,0-4.24,1.76l-24,24A6,6,0,0,0,106,176v21.52L90.2,213.32,77.57,181.77a6,6,0,0,0-3.34-3.35L42.68,165.8,58.49,150H80a6,6,0,0,0,4.25-1.76l24-24a6,6,0,0,0-.92-9.23L41.42,71.06,57.54,54.93,142,85.63a6,6,0,0,0,6.42-1.53l31-32.9A18,18,0,0,1,204.8,76.66l-32.9,31a6,6,0,0,0-1.53,6.42l30.7,84.41Z"
    }, null, -1),
    sc = [tc],
    ac = {
        key: 4
    },
    ic = n("path", {
        d: "M185.33,114.21l29.14-27.42.17-.17a32,32,0,0,0-45.26-45.26c0,.06-.11.11-.17.17L141.79,70.67l-83-30.2a8,8,0,0,0-8.39,1.86l-24,24a8,8,0,0,0,1.22,12.31l63.89,42.59L76.69,136H56a8,8,0,0,0-5.65,2.34l-24,24A8,8,0,0,0,29,175.42l36.82,14.73,14.7,36.75.06.16a8,8,0,0,0,13.18,2.47l23.87-23.88A8,8,0,0,0,120,200V179.31l14.76-14.76,42.59,63.89a8,8,0,0,0,12.31,1.22l24-24a8,8,0,0,0,1.86-8.39Zm-.07,97.23-42.59-63.88A8,8,0,0,0,136.8,144c-.27,0-.53,0-.79,0a8,8,0,0,0-5.66,2.35l-24,24A8,8,0,0,0,104,176v20.69L90.93,209.76,79.43,181A8,8,0,0,0,75,176.57l-28.74-11.5L59.32,152H80a8,8,0,0,0,5.66-2.34l24-24a8,8,0,0,0-1.22-12.32L44.56,70.74l13.5-13.49,83.22,30.26a8,8,0,0,0,8.56-2L180.78,52.6A16,16,0,0,1,203.4,75.23l-32.87,30.93a8,8,0,0,0-2,8.56l30.26,83.22Z"
    }, null, -1),
    nc = [ic],
    oc = {
        key: 5
    },
    lc = n("path", {
        d: "M180.67,113.1l31.05-29.23.09-.08a28,28,0,0,0-39.6-39.6l-.08.09L142.9,75.33,57.37,44.23a4,4,0,0,0-4.2.93l-24,24a4,4,0,0,0,.61,6.16l68,45.29L78.35,140H56a4,4,0,0,0-2.83,1.18l-24,24a4,4,0,0,0,1.34,6.54l38.42,15.36,15.34,38.37,0,.09a4,4,0,0,0,6.59,1.23l23.93-23.93A4,4,0,0,0,116,200V177.65l19.38-19.38,45.29,67.95a4,4,0,0,0,6.16.61l24-24a4,4,0,0,0,.93-4.2Zm4,104.62-45.29-67.94A4,4,0,0,0,136.4,148l-.39,0a4,4,0,0,0-2.83,1.18l-24,24A4,4,0,0,0,108,176v22.34L89.47,216.88,75.72,182.51a4,4,0,0,0-2.23-2.23L39.12,166.53,57.66,148H80a4,4,0,0,0,2.83-1.17l24-24a4,4,0,0,0-.61-6.16L38.28,71.37,57,52.62l85.61,31.13a4,4,0,0,0,4.28-1l31-32.93A20,20,0,0,1,206.2,78.09l-32.93,31a4,4,0,0,0-1,4.28L203.38,199Z"
    }, null, -1),
    rc = [lc],
    cc = {
        name: "PhAirplaneTilt"
    },
    dc = H({
        ...cc,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", F2, W2)) : l.value === "duotone" ? (u(), p("g", G2, K2)) : l.value === "fill" ? (u(), p("g", J2, X2)) : l.value === "light" ? (u(), p("g", ec, sc)) : l.value === "regular" ? (u(), p("g", ac, nc)) : l.value === "thin" ? (u(), p("g", oc, rc)) : D("", !0)], 16, D2))
        }
    }),
    uc = ["width", "height", "fill", "transform"],
    pc = {
        key: 0
    },
    fc = n("path", {
        d: "M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"
    }, null, -1),
    hc = [fc],
    mc = {
        key: 1
    },
    gc = n("path", {
        d: "M112,56V200L40,128Z",
        opacity: "0.2"
    }, null, -1),
    vc = n("path", {
        d: "M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z"
    }, null, -1),
    yc = [gc, vc],
    _c = {
        key: 2
    },
    xc = n("path", {
        d: "M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"
    }, null, -1),
    bc = [xc],
    wc = {
        key: 3
    },
    $c = n("path", {
        d: "M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z"
    }, null, -1),
    Ac = [$c],
    Sc = {
        key: 4
    },
    Mc = n("path", {
        d: "M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"
    }, null, -1),
    Cc = [Mc],
    Hc = {
        key: 5
    },
    Zc = n("path", {
        d: "M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z"
    }, null, -1),
    Tc = [Zc],
    Vc = {
        name: "PhArrowLeft"
    },
    wo = H({
        ...Vc,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", pc, hc)) : l.value === "duotone" ? (u(), p("g", mc, yc)) : l.value === "fill" ? (u(), p("g", _c, bc)) : l.value === "light" ? (u(), p("g", wc, Ac)) : l.value === "regular" ? (u(), p("g", Sc, Cc)) : l.value === "thin" ? (u(), p("g", Hc, Tc)) : D("", !0)], 16, uc))
        }
    }),
    kc = ["width", "height", "fill", "transform"],
    Pc = {
        key: 0
    },
    Lc = n("path", {
        d: "M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"
    }, null, -1),
    Ec = [Lc],
    Bc = {
        key: 1
    },
    Ic = n("path", {
        d: "M216,128l-72,72V56Z",
        opacity: "0.2"
    }, null, -1),
    Oc = n("path", {
        d: "M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"
    }, null, -1),
    Nc = [Ic, Oc],
    zc = {
        key: 2
    },
    jc = n("path", {
        d: "M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"
    }, null, -1),
    Rc = [jc],
    Dc = {
        key: 3
    },
    Fc = n("path", {
        d: "M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"
    }, null, -1),
    qc = [Fc],
    Wc = {
        key: 4
    },
    Gc = n("path", {
        d: "M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
    }, null, -1),
    Uc = [Gc],
    Yc = {
        key: 5
    },
    Kc = n("path", {
        d: "M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"
    }, null, -1),
    Jc = [Kc],
    Qc = {
        name: "PhArrowRight"
    },
    qt = H({
        ...Qc,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", Pc, Ec)) : l.value === "duotone" ? (u(), p("g", Bc, Nc)) : l.value === "fill" ? (u(), p("g", zc, Rc)) : l.value === "light" ? (u(), p("g", Dc, qc)) : l.value === "regular" ? (u(), p("g", Wc, Uc)) : l.value === "thin" ? (u(), p("g", Yc, Jc)) : D("", !0)], 16, kc))
        }
    }),
    Xc = ["width", "height", "fill", "transform"],
    ed = {
        key: 0
    },
    td = n("path", {
        d: "M208.49,120.49a12,12,0,0,1-17,0L140,69V216a12,12,0,0,1-24,0V69L64.49,120.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0l72,72A12,12,0,0,1,208.49,120.49Z"
    }, null, -1),
    sd = [td],
    ad = {
        key: 1
    },
    id = n("path", {
        d: "M200,112H56l72-72Z",
        opacity: "0.2"
    }, null, -1),
    nd = n("path", {
        d: "M205.66,106.34l-72-72a8,8,0,0,0-11.32,0l-72,72A8,8,0,0,0,56,120h64v96a8,8,0,0,0,16,0V120h64a8,8,0,0,0,5.66-13.66ZM75.31,104,128,51.31,180.69,104Z"
    }, null, -1),
    od = [id, nd],
    ld = {
        key: 2
    },
    rd = n("path", {
        d: "M207.39,115.06A8,8,0,0,1,200,120H136v96a8,8,0,0,1-16,0V120H56a8,8,0,0,1-5.66-13.66l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,207.39,115.06Z"
    }, null, -1),
    cd = [rd],
    dd = {
        key: 3
    },
    ud = n("path", {
        d: "M204.24,116.24a6,6,0,0,1-8.48,0L134,54.49V216a6,6,0,0,1-12,0V54.49L60.24,116.24a6,6,0,0,1-8.48-8.48l72-72a6,6,0,0,1,8.48,0l72,72A6,6,0,0,1,204.24,116.24Z"
    }, null, -1),
    pd = [ud],
    fd = {
        key: 4
    },
    hd = n("path", {
        d: "M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z"
    }, null, -1),
    md = [hd],
    gd = {
        key: 5
    },
    vd = n("path", {
        d: "M202.83,114.83a4,4,0,0,1-5.66,0L132,49.66V216a4,4,0,0,1-8,0V49.66L58.83,114.83a4,4,0,0,1-5.66-5.66l72-72a4,4,0,0,1,5.66,0l72,72A4,4,0,0,1,202.83,114.83Z"
    }, null, -1),
    yd = [vd],
    _d = {
        name: "PhArrowUp"
    },
    xd = H({
        ..._d,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", ed, sd)) : l.value === "duotone" ? (u(), p("g", ad, od)) : l.value === "fill" ? (u(), p("g", ld, cd)) : l.value === "light" ? (u(), p("g", dd, pd)) : l.value === "regular" ? (u(), p("g", fd, md)) : l.value === "thin" ? (u(), p("g", gd, yd)) : D("", !0)], 16, Xc))
        }
    }),
    bd = ["width", "height", "fill", "transform"],
    wd = {
        key: 0
    },
    $d = n("path", {
        d: "M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"
    }, null, -1),
    Ad = [$d],
    Sd = {
        key: 1
    },
    Md = n("path", {
        d: "M192,64V168L88,64Z",
        opacity: "0.2"
    }, null, -1),
    Cd = n("path", {
        d: "M192,56H88a8,8,0,0,0-5.66,13.66L128.69,116,58.34,186.34a8,8,0,0,0,11.32,11.32L140,127.31l46.34,46.35A8,8,0,0,0,200,168V64A8,8,0,0,0,192,56Zm-8,92.69-38.34-38.34h0L107.31,72H184Z"
    }, null, -1),
    Hd = [Md, Cd],
    Zd = {
        key: 2
    },
    Td = n("path", {
        d: "M200,64V168a8,8,0,0,1-13.66,5.66L140,127.31,69.66,197.66a8,8,0,0,1-11.32-11.32L128.69,116,82.34,69.66A8,8,0,0,1,88,56H192A8,8,0,0,1,200,64Z"
    }, null, -1),
    Vd = [Td],
    kd = {
        key: 3
    },
    Pd = n("path", {
        d: "M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"
    }, null, -1),
    Ld = [Pd],
    Ed = {
        key: 4
    },
    Bd = n("path", {
        d: "M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"
    }, null, -1),
    Id = [Bd],
    Od = {
        key: 5
    },
    Nd = n("path", {
        d: "M196,64V168a4,4,0,0,1-8,0V73.66L66.83,194.83a4,4,0,0,1-5.66-5.66L182.34,68H88a4,4,0,0,1,0-8H192A4,4,0,0,1,196,64Z"
    }, null, -1),
    zd = [Nd],
    jd = {
        name: "PhArrowUpRight"
    },
    o1 = H({
        ...jd,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", wd, Ad)) : l.value === "duotone" ? (u(), p("g", Sd, Hd)) : l.value === "fill" ? (u(), p("g", Zd, Vd)) : l.value === "light" ? (u(), p("g", kd, Ld)) : l.value === "regular" ? (u(), p("g", Ed, Id)) : l.value === "thin" ? (u(), p("g", Od, zd)) : D("", !0)], 16, bd))
        }
    }),
    Rd = ["width", "height", "fill", "transform"],
    Dd = {
        key: 0
    },
    Fd = n("path", {
        d: "M241,150.65s0,0,0-.05a51.33,51.33,0,0,0-2.53-5.9L196.93,50.18a12,12,0,0,0-2.5-3.65,36,36,0,0,0-50.92,0A12,12,0,0,0,140,55V76H116V55a12,12,0,0,0-3.51-8.48,36,36,0,0,0-50.92,0,12,12,0,0,0-2.5,3.65L17.53,144.7A51.33,51.33,0,0,0,15,150.6s0,0,0,.05A52,52,0,1,0,116,168V100h24v68a52,52,0,1,0,101-17.35ZM80,62.28a12,12,0,0,1,12-1.22v63.15a51.9,51.9,0,0,0-35.9-7.62ZM64,196a28,28,0,1,1,28-28A28,28,0,0,1,64,196ZM164,61.06a12.06,12.06,0,0,1,12,1.22l23.87,54.31a51.9,51.9,0,0,0-35.9,7.62ZM192,196a28,28,0,1,1,28-28A28,28,0,0,1,192,196Z"
    }, null, -1),
    qd = [Fd],
    Wd = {
        key: 1
    },
    Gd = n("path", {
        d: "M104,168a40,40,0,1,1-40-40A40,40,0,0,1,104,168Zm88-40a40,40,0,1,0,40,40A40,40,0,0,0,192,128Z",
        opacity: "0.2"
    }, null, -1),
    Ud = n("path", {
        d: "M237.2,151.87v0a47.1,47.1,0,0,0-2.35-5.45L193.26,51.8a7.82,7.82,0,0,0-1.66-2.44,32,32,0,0,0-45.26,0A8,8,0,0,0,144,55V80H112V55a8,8,0,0,0-2.34-5.66,32,32,0,0,0-45.26,0,7.82,7.82,0,0,0-1.66,2.44L21.15,146.4a47.1,47.1,0,0,0-2.35,5.45v0A48,48,0,1,0,112,168V96h32v72a48,48,0,1,0,93.2-16.13ZM76.71,59.75a16,16,0,0,1,19.29-1v73.51a47.9,47.9,0,0,0-46.79-9.92ZM64,200a32,32,0,1,1,32-32A32,32,0,0,1,64,200ZM160,58.74a16,16,0,0,1,19.29,1l27.5,62.58A47.9,47.9,0,0,0,160,132.25ZM192,200a32,32,0,1,1,32-32A32,32,0,0,1,192,200Z"
    }, null, -1),
    Yd = [Gd, Ud],
    Kd = {
        key: 2
    },
    Jd = n("path", {
        d: "M237.22,151.9l0-.1a1.42,1.42,0,0,0-.07-.22,48.46,48.46,0,0,0-2.31-5.3L193.27,51.8a8,8,0,0,0-1.67-2.44,32,32,0,0,0-45.26,0A8,8,0,0,0,144,55V80H112V55a8,8,0,0,0-2.34-5.66,32,32,0,0,0-45.26,0,8,8,0,0,0-1.67,2.44L21.2,146.28a48.46,48.46,0,0,0-2.31,5.3,1.72,1.72,0,0,0-.07.21s0,.08,0,.11a48,48,0,0,0,90.32,32.51,47.49,47.49,0,0,0,2.9-16.59V96h32v71.83a47.49,47.49,0,0,0,2.9,16.59,48,48,0,0,0,90.32-32.51Zm-143.15,27a32,32,0,0,1-60.2-21.71l1.81-4.13A32,32,0,0,1,96,167.88V168h0A32,32,0,0,1,94.07,178.94ZM203,198.07A32,32,0,0,1,160,168h0v-.11a32,32,0,0,1,60.32-14.78l1.81,4.13A32,32,0,0,1,203,198.07Z"
    }, null, -1),
    Qd = [Jd],
    Xd = {
        key: 3
    },
    e4 = n("path", {
        d: "M233,147.24,191.43,52.6a6,6,0,0,0-1.25-1.83,30,30,0,0,0-42.42,0A6,6,0,0,0,146,55V82H110V55a6,6,0,0,0-1.76-4.25,30,30,0,0,0-42.42,0,6,6,0,0,0-1.25,1.83L23,147.24A46,46,0,1,0,110,168V94h36v74a46,46,0,1,0,87-20.76ZM64,202a34,34,0,1,1,34-34A34,34,0,0,1,64,202Zm0-80a45.77,45.77,0,0,0-18.55,3.92L75.06,58.54A18,18,0,0,1,98,57.71V137A45.89,45.89,0,0,0,64,122Zm94-64.28a18,18,0,0,1,22.94.83l29.61,67.37A45.9,45.9,0,0,0,158,137ZM192,202a34,34,0,1,1,34-34A34,34,0,0,1,192,202Z"
    }, null, -1),
    t4 = [e4],
    s4 = {
        key: 4
    },
    a4 = n("path", {
        d: "M237.2,151.87v0a47.1,47.1,0,0,0-2.35-5.45L193.26,51.8a7.82,7.82,0,0,0-1.66-2.44,32,32,0,0,0-45.26,0A8,8,0,0,0,144,55V80H112V55a8,8,0,0,0-2.34-5.66,32,32,0,0,0-45.26,0,7.82,7.82,0,0,0-1.66,2.44L21.15,146.4a47.1,47.1,0,0,0-2.35,5.45v0A48,48,0,1,0,112,168V96h32v72a48,48,0,1,0,93.2-16.13ZM76.71,59.75a16,16,0,0,1,19.29-1v73.51a47.9,47.9,0,0,0-46.79-9.92ZM64,200a32,32,0,1,1,32-32A32,32,0,0,1,64,200ZM160,58.74a16,16,0,0,1,19.29,1l27.5,62.58A47.9,47.9,0,0,0,160,132.25ZM192,200a32,32,0,1,1,32-32A32,32,0,0,1,192,200Z"
    }, null, -1),
    i4 = [a4],
    n4 = {
        key: 5
    },
    o4 = n("path", {
        d: "M231.22,148.09,189.6,53.41a3.94,3.94,0,0,0-.83-1.22,28,28,0,0,0-39.6,0A4,4,0,0,0,148,55V84H108V55a4,4,0,0,0-1.17-2.83,28,28,0,0,0-39.6,0,3.94,3.94,0,0,0-.83,1.22L24.78,148.09A44,44,0,1,0,108,168V92h40v76a44,44,0,1,0,83.22-19.91ZM64,204a36,36,0,1,1,36-36A36,36,0,0,1,64,204Zm0-80a43.78,43.78,0,0,0-22.66,6.3L73.4,57.35a20,20,0,0,1,26.6-.59v86A44,44,0,0,0,64,124Zm92-67.23a20,20,0,0,1,26.6.59l32.06,72.94A43.92,43.92,0,0,0,156,142.74ZM192,204a36,36,0,1,1,36-36A36,36,0,0,1,192,204Z"
    }, null, -1),
    l4 = [o4],
    r4 = {
        name: "PhBinoculars"
    },
    c4 = H({
        ...r4,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", Dd, qd)) : l.value === "duotone" ? (u(), p("g", Wd, Yd)) : l.value === "fill" ? (u(), p("g", Kd, Qd)) : l.value === "light" ? (u(), p("g", Xd, t4)) : l.value === "regular" ? (u(), p("g", s4, i4)) : l.value === "thin" ? (u(), p("g", n4, l4)) : D("", !0)], 16, Rd))
        }
    }),
    d4 = ["width", "height", "fill", "transform"],
    u4 = {
        key: 0
    },
    p4 = n("path", {
        d: "M240,204H228V96a20,20,0,0,0-20-20H172V32a20,20,0,0,0-28.45-18.12l-104,48.54A20.06,20.06,0,0,0,28,80.55V204H16a12,12,0,0,0,0,24H240a12,12,0,0,0,0-24ZM204,100V204H172V100ZM52,83.09,148,38.3V204H52ZM132,112v12a12,12,0,0,1-24,0V112a12,12,0,0,1,24,0Zm-40,0v12a12,12,0,0,1-24,0V112a12,12,0,0,1,24,0Zm0,52v12a12,12,0,0,1-24,0V164a12,12,0,0,1,24,0Zm40,0v12a12,12,0,0,1-24,0V164a12,12,0,0,1,24,0Z"
    }, null, -1),
    f4 = [p4],
    h4 = {
        key: 1
    },
    m4 = n("path", {
        d: "M136,32V216H40V85.35a8,8,0,0,1,3.56-6.66l80-53.33A8,8,0,0,1,136,32Z",
        opacity: "0.2"
    }, null, -1),
    g4 = n("path", {
        d: "M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48ZM112,112v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm-32,0v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm0,56v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Z"
    }, null, -1),
    v4 = [m4, g4],
    y4 = {
        key: 2
    },
    _4 = n("path", {
        d: "M239.73,208H224V96a16,16,0,0,0-16-16H164a4,4,0,0,0-4,4V208H144V32.41a16.43,16.43,0,0,0-6.16-13,16,16,0,0,0-18.72-.69L39.12,72A16,16,0,0,0,32,85.34V208H16.27A8.18,8.18,0,0,0,8,215.47,8,8,0,0,0,16,224H240a8,8,0,0,0,8-8.53A8.18,8.18,0,0,0,239.73,208ZM76,184a8,8,0,0,1-8.53,8A8.18,8.18,0,0,1,60,183.72V168.27A8.19,8.19,0,0,1,67.47,160,8,8,0,0,1,76,168Zm0-56a8,8,0,0,1-8.53,8A8.19,8.19,0,0,1,60,127.72V112.27A8.19,8.19,0,0,1,67.47,104,8,8,0,0,1,76,112Zm40,56a8,8,0,0,1-8.53,8,8.18,8.18,0,0,1-7.47-8.26V168.27a8.19,8.19,0,0,1,7.47-8.26,8,8,0,0,1,8.53,8Zm0-56a8,8,0,0,1-8.53,8,8.19,8.19,0,0,1-7.47-8.26V112.27a8.19,8.19,0,0,1,7.47-8.26,8,8,0,0,1,8.53,8Z"
    }, null, -1),
    x4 = [_4],
    b4 = {
        key: 3
    },
    w4 = n("path", {
        d: "M240,210H222V96a14,14,0,0,0-14-14H142V32a14,14,0,0,0-21.77-11.64l-80,53.33A14,14,0,0,0,34,85.34V210H16a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12ZM208,94a2,2,0,0,1,2,2V210H142V94ZM46,85.34a2,2,0,0,1,.89-1.66l80-53.34A2,2,0,0,1,130,32V210H46ZM110,112v16a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0Zm-32,0v16a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0Zm0,56v16a6,6,0,0,1-12,0V168a6,6,0,0,1,12,0Zm32,0v16a6,6,0,0,1-12,0V168a6,6,0,0,1,12,0Z"
    }, null, -1),
    $4 = [w4],
    A4 = {
        key: 4
    },
    S4 = n("path", {
        d: "M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48ZM112,112v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm-32,0v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm0,56v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Z"
    }, null, -1),
    M4 = [S4],
    C4 = {
        key: 5
    },
    H4 = n("path", {
        d: "M240,212H220V96a12,12,0,0,0-12-12H140V32a12,12,0,0,0-18.66-10l-80,53.33a12,12,0,0,0-5.34,10V212H16a4,4,0,0,0,0,8H240a4,4,0,0,0,0-8ZM208,92a4,4,0,0,1,4,4V212H140V92ZM44,85.34A4,4,0,0,1,45.78,82l80-53.33A4,4,0,0,1,132,32V212H44ZM108,112v16a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0Zm-32,0v16a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0Zm0,56v16a4,4,0,0,1-8,0V168a4,4,0,0,1,8,0Zm32,0v16a4,4,0,0,1-8,0V168a4,4,0,0,1,8,0Z"
    }, null, -1),
    Z4 = [H4],
    T4 = {
        name: "PhBuildings"
    },
    $o = H({
        ...T4,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", u4, f4)) : l.value === "duotone" ? (u(), p("g", h4, v4)) : l.value === "fill" ? (u(), p("g", y4, x4)) : l.value === "light" ? (u(), p("g", b4, $4)) : l.value === "regular" ? (u(), p("g", A4, M4)) : l.value === "thin" ? (u(), p("g", C4, Z4)) : D("", !0)], 16, d4))
        }
    }),
    V4 = ["width", "height", "fill", "transform"],
    k4 = {
        key: 0
    },
    P4 = n("path", {
        d: "M200,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V40A20,20,0,0,0,200,20Zm-4,192H60V44H196ZM80,76A12,12,0,0,1,92,64h72a12,12,0,0,1,0,24H92A12,12,0,0,1,80,76Zm40,52a16,16,0,1,1-16-16A16,16,0,0,1,120,128Zm48,0a16,16,0,1,1-16-16A16,16,0,0,1,168,128Zm-48,48a16,16,0,1,1-16-16A16,16,0,0,1,120,176Zm48,0a16,16,0,1,1-16-16A16,16,0,0,1,168,176Z"
    }, null, -1),
    L4 = [P4],
    E4 = {
        key: 1
    },
    B4 = n("path", {
        d: "M176,64v48H80V64Z",
        opacity: "0.2"
    }, null, -1),
    I4 = n("path", {
        d: "M80,120h96a8,8,0,0,0,8-8V64a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8v48A8,8,0,0,0,80,120Zm8-48h80v32H88ZM200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24Zm0,192H56V40H200ZM100,148a12,12,0,1,1-12-12A12,12,0,0,1,100,148Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,140,148Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,180,148Zm-80,40a12,12,0,1,1-12-12A12,12,0,0,1,100,188Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,140,188Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,180,188Z"
    }, null, -1),
    O4 = [B4, I4],
    N4 = {
        key: 2
    },
    z4 = n("path", {
        d: "M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM88,200a12,12,0,1,1,12-12A12,12,0,0,1,88,200Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,88,160Zm40,40a12,12,0,1,1,12-12A12,12,0,0,1,128,200Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,128,160Zm40,40a12,12,0,1,1,12-12A12,12,0,0,1,168,200Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,168,160Zm16-56a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"
    }, null, -1),
    j4 = [z4],
    R4 = {
        key: 3
    },
    D4 = n("path", {
        d: "M176,58H80a6,6,0,0,0-6,6v48a6,6,0,0,0,6,6h96a6,6,0,0,0,6-6V64A6,6,0,0,0,176,58Zm-6,48H86V70h84Zm30-80H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V40A14,14,0,0,0,200,26Zm2,190a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H200a2,2,0,0,1,2,2ZM98,148a10,10,0,1,1-10-10A10,10,0,0,1,98,148Zm40,0a10,10,0,1,1-10-10A10,10,0,0,1,138,148Zm40,0a10,10,0,1,1-10-10A10,10,0,0,1,178,148ZM98,188a10,10,0,1,1-10-10A10,10,0,0,1,98,188Zm40,0a10,10,0,1,1-10-10A10,10,0,0,1,138,188Zm40,0a10,10,0,1,1-10-10A10,10,0,0,1,178,188Z"
    }, null, -1),
    F4 = [D4],
    q4 = {
        key: 4
    },
    W4 = n("path", {
        d: "M80,120h96a8,8,0,0,0,8-8V64a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8v48A8,8,0,0,0,80,120Zm8-48h80v32H88ZM200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24Zm0,192H56V40H200ZM100,148a12,12,0,1,1-12-12A12,12,0,0,1,100,148Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,140,148Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,180,148Zm-80,40a12,12,0,1,1-12-12A12,12,0,0,1,100,188Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,140,188Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,180,188Z"
    }, null, -1),
    G4 = [W4],
    U4 = {
        key: 5
    },
    Y4 = n("path", {
        d: "M176,60H80a4,4,0,0,0-4,4v48a4,4,0,0,0,4,4h96a4,4,0,0,0,4-4V64A4,4,0,0,0,176,60Zm-4,48H84V68h88Zm28-80H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V40A12,12,0,0,0,200,28Zm4,188a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H200a4,4,0,0,1,4,4ZM96,148a8,8,0,1,1-8-8A8,8,0,0,1,96,148Zm40,0a8,8,0,1,1-8-8A8,8,0,0,1,136,148Zm40,0a8,8,0,1,1-8-8A8,8,0,0,1,176,148ZM96,188a8,8,0,1,1-8-8A8,8,0,0,1,96,188Zm40,0a8,8,0,1,1-8-8A8,8,0,0,1,136,188Zm40,0a8,8,0,1,1-8-8A8,8,0,0,1,176,188Z"
    }, null, -1),
    K4 = [Y4],
    J4 = {
        name: "PhCalculator"
    },
    Q4 = H({
        ...J4,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", k4, L4)) : l.value === "duotone" ? (u(), p("g", E4, O4)) : l.value === "fill" ? (u(), p("g", N4, j4)) : l.value === "light" ? (u(), p("g", R4, F4)) : l.value === "regular" ? (u(), p("g", q4, G4)) : l.value === "thin" ? (u(), p("g", U4, K4)) : D("", !0)], 16, V4))
        }
    }),
    X4 = ["width", "height", "fill", "transform"],
    e8 = {
        key: 0
    },
    t8 = n("path", {
        d: "M208,28H188V24a12,12,0,0,0-24,0v4H92V24a12,12,0,0,0-24,0v4H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM68,52a12,12,0,0,0,24,0h72a12,12,0,0,0,24,0h16V76H52V52ZM52,204V100H204V204Z"
    }, null, -1),
    s8 = [t8],
    a8 = {
        key: 1
    },
    i8 = n("path", {
        d: "M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
        opacity: "0.2"
    }, null, -1),
    n8 = n("path", {
        d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"
    }, null, -1),
    o8 = [i8, n8],
    l8 = {
        key: 2
    },
    r8 = n("path", {
        d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,48H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"
    }, null, -1),
    c8 = [r8],
    d8 = {
        key: 3
    },
    u8 = n("path", {
        d: "M208,34H182V24a6,6,0,0,0-12,0V34H86V24a6,6,0,0,0-12,0V34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM48,46H74V56a6,6,0,0,0,12,0V46h84V56a6,6,0,0,0,12,0V46h26a2,2,0,0,1,2,2V82H46V48A2,2,0,0,1,48,46ZM208,210H48a2,2,0,0,1-2-2V94H210V208A2,2,0,0,1,208,210Z"
    }, null, -1),
    p8 = [u8],
    f8 = {
        key: 4
    },
    h8 = n("path", {
        d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"
    }, null, -1),
    m8 = [h8],
    g8 = {
        key: 5
    },
    v8 = n("path", {
        d: "M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4V84H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V92H212V208A4,4,0,0,1,208,212Z"
    }, null, -1),
    y8 = [v8],
    _8 = {
        name: "PhCalendarBlank"
    },
    x8 = H({
        ..._8,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", e8, s8)) : l.value === "duotone" ? (u(), p("g", a8, o8)) : l.value === "fill" ? (u(), p("g", l8, c8)) : l.value === "light" ? (u(), p("g", d8, p8)) : l.value === "regular" ? (u(), p("g", f8, m8)) : l.value === "thin" ? (u(), p("g", g8, y8)) : D("", !0)], 16, X4))
        }
    }),
    b8 = ["width", "height", "fill", "transform"],
    w8 = {
        key: 0
    },
    $8 = n("path", {
        d: "M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"
    }, null, -1),
    A8 = [$8],
    S8 = {
        key: 1
    },
    M8 = n("path", {
        d: "M208,96l-80,80L48,96Z",
        opacity: "0.2"
    }, null, -1),
    C8 = n("path", {
        d: "M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"
    }, null, -1),
    H8 = [M8, C8],
    Z8 = {
        key: 2
    },
    T8 = n("path", {
        d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"
    }, null, -1),
    V8 = [T8],
    k8 = {
        key: 3
    },
    P8 = n("path", {
        d: "M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"
    }, null, -1),
    L8 = [P8],
    E8 = {
        key: 4
    },
    B8 = n("path", {
        d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"
    }, null, -1),
    I8 = [B8],
    O8 = {
        key: 5
    },
    N8 = n("path", {
        d: "M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"
    }, null, -1),
    z8 = [N8],
    j8 = {
        name: "PhCaretDown"
    },
    K1 = H({
        ...j8,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", w8, A8)) : l.value === "duotone" ? (u(), p("g", S8, H8)) : l.value === "fill" ? (u(), p("g", Z8, V8)) : l.value === "light" ? (u(), p("g", k8, L8)) : l.value === "regular" ? (u(), p("g", E8, I8)) : l.value === "thin" ? (u(), p("g", O8, z8)) : D("", !0)], 16, b8))
        }
    }),
    R8 = ["width", "height", "fill", "transform"],
    D8 = {
        key: 0
    },
    F8 = n("path", {
        d: "M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"
    }, null, -1),
    q8 = [F8],
    W8 = {
        key: 1
    },
    G8 = n("path", {
        d: "M176,128,96,208V48Z",
        opacity: "0.2"
    }, null, -1),
    U8 = n("path", {
        d: "M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z"
    }, null, -1),
    Y8 = [G8, U8],
    K8 = {
        key: 2
    },
    J8 = n("path", {
        d: "M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"
    }, null, -1),
    Q8 = [J8],
    X8 = {
        key: 3
    },
    eu = n("path", {
        d: "M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"
    }, null, -1),
    tu = [eu],
    su = {
        key: 4
    },
    au = n("path", {
        d: "M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"
    }, null, -1),
    iu = [au],
    nu = {
        key: 5
    },
    ou = n("path", {
        d: "M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"
    }, null, -1),
    lu = [ou],
    ru = {
        name: "PhCaretRight"
    },
    O0 = H({
        ...ru,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", D8, q8)) : l.value === "duotone" ? (u(), p("g", W8, Y8)) : l.value === "fill" ? (u(), p("g", K8, Q8)) : l.value === "light" ? (u(), p("g", X8, tu)) : l.value === "regular" ? (u(), p("g", su, iu)) : l.value === "thin" ? (u(), p("g", nu, lu)) : D("", !0)], 16, R8))
        }
    }),
    cu = ["width", "height", "fill", "transform"],
    du = {
        key: 0
    },
    uu = n("path", {
        d: "M137.75,20.08A20,20,0,0,0,116,40V80.67a19.83,19.83,0,0,0,16.6,19.7A28,28,0,0,1,126,155.93,28.3,28.3,0,0,1,100,129.47c-.37-7.28,1.06-13.25,4.27-17.73h0a19.88,19.88,0,0,0-2.13-25.64L74.61,57.94l-.09-.09A20,20,0,0,0,45,59.22,107.62,107.62,0,0,0,52.17,204.9,107.21,107.21,0,0,0,128,236h1.55A108.32,108.32,0,0,0,236,129.53C236.77,73.16,193.62,25.08,137.75,20.08ZM60.69,78l22.19,22.66A47.76,47.76,0,0,0,77.08,116H44.87A82.31,82.31,0,0,1,60.69,78ZM44.86,140H77.39A52,52,0,0,0,116,178.6v32.55A84,84,0,0,1,44.86,140ZM140,211.11V178.62A51.53,51.53,0,0,0,163.46,166,52,52,0,0,0,140,77.39V44.5c41.29,5.93,72.58,42.3,72,84.7C211.42,170.56,180,205.25,140,211.11Z"
    }, null, -1),
    pu = [uu],
    fu = {
        key: 1
    },
    hu = n("path", {
        d: "M224,129.37c-.72,51.7-42.92,93.9-94.62,94.62H128V168a40,40,0,0,0,6.55-79.47A7.92,7.92,0,0,1,128,80.67V40a8,8,0,0,1,8.67-8C186.07,36.46,224.7,78.65,224,129.37Z",
        opacity: "0.2"
    }, null, -1),
    mu = n("path", {
        d: "M137.39,24.06A16,16,0,0,0,120,40V80.67a15.86,15.86,0,0,0,13.25,15.76A32,32,0,1,1,96,129.68c-.41-8.22,1.27-15,5-20.26h0a15.86,15.86,0,0,0-1.69-20.47L71.69,60.68a16,16,0,0,0-23.63,1.1A103.6,103.6,0,0,0,55,202.05,103.24,103.24,0,0,0,128,232h1.49A104.3,104.3,0,0,0,232,129.48C232.75,75.18,191.19,28.88,137.39,24.06ZM60.32,71.94l27.61,28.19,0,.06A43.29,43.29,0,0,0,80.44,120H40.36A87.13,87.13,0,0,1,60.32,71.94ZM40.37,136h40.3A48,48,0,0,0,120,175.34v40.3A88,88,0,0,1,40.37,136Zm149.77,54.14A87.45,87.45,0,0,1,136,215.61V175.34a47.59,47.59,0,0,0,24.73-12.23A48,48,0,0,0,136,80.66L136,40c45.52,4.08,80.67,43.28,80,89.25A87.45,87.45,0,0,1,190.14,190.14Z"
    }, null, -1),
    gu = [hu, mu],
    vu = {
        key: 2
    },
    yu = n("path", {
        d: "M24.75,115.54A102.31,102.31,0,0,1,48.06,61.78a16,16,0,0,1,23.63-1.1L99.36,88.94a15.87,15.87,0,0,1,1.69,20.48h0a25.59,25.59,0,0,0-3.7,7.75A4,4,0,0,1,93.53,120H28.73A4,4,0,0,1,24.75,115.54ZM137.39,24.06A16,16,0,0,0,120,40V80.67a15.86,15.86,0,0,0,13.25,15.76,32,32,0,0,1,5.41,61.76A4.06,4.06,0,0,0,136,162v65.23a4,4,0,0,0,4.46,4A104.34,104.34,0,0,0,232,129.48C232.75,75.19,191.19,28.88,137.39,24.06Zm-20.14,134.1a32,32,0,0,1-19.4-19.42,4.06,4.06,0,0,0-3.8-2.74H28.72a4,4,0,0,0-4,4.45,104.1,104.1,0,0,0,90.82,90.82,4,4,0,0,0,4.45-4V162A4.05,4.05,0,0,0,117.25,158.16Z"
    }, null, -1),
    _u = [yu],
    xu = {
        key: 3
    },
    bu = n("path", {
        d: "M137.21,26.05A14,14,0,0,0,122,40V80.67a13.86,13.86,0,0,0,11.58,13.78,34,34,0,1,1-39.53,35.33c-.44-8.68,1.37-15.92,5.38-21.53h0a13.87,13.87,0,0,0-1.5-17.91L70.28,62.1a14,14,0,0,0-20.69,1,101.62,101.62,0,0,0,6.79,137.57A101.29,101.29,0,0,0,128,230h1.46A102.31,102.31,0,0,0,230,129.45C230.73,76.2,190,30.78,137.21,26.05ZM58.81,70.74A2.06,2.06,0,0,1,60.29,70h.09a1.89,1.89,0,0,1,1.37.54L89.4,98.78a2,2,0,0,1,.27,2.49A41.83,41.83,0,0,0,82.23,122h-44A88.42,88.42,0,0,1,58.81,70.74ZM38.22,134H82.4A46,46,0,0,0,122,173.61v44.17A89.93,89.93,0,0,1,38.22,134Zm153.34,57.56A89.48,89.48,0,0,1,134,217.79V173.62a45.53,45.53,0,0,0,25.36-12,46,46,0,0,0-23.83-79A1.93,1.93,0,0,1,134,80.67V40a2,2,0,0,1,.66-1.5,1.91,1.91,0,0,1,1.48-.5c46.55,4.17,82.51,44.26,81.85,91.27A89.44,89.44,0,0,1,191.56,191.56Z"
    }, null, -1),
    wu = [bu],
    $u = {
        key: 4
    },
    Au = n("path", {
        d: "M137.39,24.06A16,16,0,0,0,120,40V80.67a15.86,15.86,0,0,0,13.25,15.76A32,32,0,1,1,96,129.68c-.41-8.22,1.27-15,5-20.26h0a15.86,15.86,0,0,0-1.69-20.47L71.69,60.68a16,16,0,0,0-23.63,1.1A103.6,103.6,0,0,0,55,202.05,103.24,103.24,0,0,0,128,232h1.49A104.3,104.3,0,0,0,232,129.48C232.75,75.18,191.19,28.88,137.39,24.06ZM60.32,71.94l27.61,28.19,0,.06A43.29,43.29,0,0,0,80.44,120H40.36A87.13,87.13,0,0,1,60.32,71.94ZM40.37,136h40.3A48,48,0,0,0,120,175.34v40.3A88,88,0,0,1,40.37,136Zm149.77,54.14A87.45,87.45,0,0,1,136,215.61V175.34a47.55,47.55,0,0,0,24.73-12.23A48,48,0,0,0,136,80.66L136,40c45.52,4.08,80.67,43.28,80,89.25A87.45,87.45,0,0,1,190.14,190.14Z"
    }, null, -1),
    Su = [Au],
    Mu = {
        key: 5
    },
    Cu = n("path", {
        d: "M137,28.05a11.94,11.94,0,0,0-9.12,3.08A12.09,12.09,0,0,0,124,40V80.67a11.88,11.88,0,0,0,9.9,11.81,36,36,0,1,1-41.85,37.4c-.47-9.14,1.47-16.8,5.75-22.79h0a11.89,11.89,0,0,0-1.3-15.35L68.87,63.51a12,12,0,0,0-17.74.83A99.6,99.6,0,0,0,57.79,199.2,99.24,99.24,0,0,0,128,228h1.43A100.29,100.29,0,0,0,228,129.42C228.72,77.21,188.76,32.68,137,28.05ZM57.28,69.46A4,4,0,0,1,60.2,68h.19a3.91,3.91,0,0,1,2.79,1.14L90.81,97.36a3.93,3.93,0,0,1,.48,5.08A40.47,40.47,0,0,0,84.08,124h-48A90.36,90.36,0,0,1,57.28,69.46ZM36.09,132H84.18A44,44,0,0,0,124,171.81V219.9A92,92,0,0,1,36.09,132ZM193,193a91.43,91.43,0,0,1-61,26.92V171.82a43.51,43.51,0,0,0,26-11.63,44,44,0,0,0-22.79-75.6A4,4,0,0,1,132,80.67V40a4,4,0,0,1,1.31-3,3.89,3.89,0,0,1,3-1c47.59,4.26,84.34,45.24,83.67,93.29A91.42,91.42,0,0,1,193,193Z"
    }, null, -1),
    Hu = [Cu],
    Zu = {
        name: "PhChartDonut"
    },
    Tu = H({
        ...Zu,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", du, pu)) : l.value === "duotone" ? (u(), p("g", fu, gu)) : l.value === "fill" ? (u(), p("g", vu, _u)) : l.value === "light" ? (u(), p("g", xu, wu)) : l.value === "regular" ? (u(), p("g", $u, Su)) : l.value === "thin" ? (u(), p("g", Mu, Hu)) : D("", !0)], 16, cu))
        }
    }),
    Vu = ["width", "height", "fill", "transform"],
    ku = {
        key: 0
    },
    Pu = n("path", {
        d: "M236,208a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V48a12,12,0,0,1,24,0v99l43.51-43.52a12,12,0,0,1,17,0L128,127l43-43H160a12,12,0,0,1,0-24h40a12,12,0,0,1,12,12v40a12,12,0,0,1-24,0V101l-51.51,51.52a12,12,0,0,1-17,0L96,129,44,181v15H224A12,12,0,0,1,236,208Z"
    }, null, -1),
    Lu = [Pu],
    Eu = {
        key: 1
    },
    Bu = n("path", {
        d: "M224,56V208H32V48H216A8,8,0,0,1,224,56Z",
        opacity: "0.2"
    }, null, -1),
    Iu = n("path", {
        d: "M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z"
    }, null, -1),
    Ou = [Bu, Iu],
    Nu = {
        key: 2
    },
    zu = n("path", {
        d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM200,192H56a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v76.69l34.34-34.35a8,8,0,0,1,11.32,0L128,132.69,172.69,88H152a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V99.31l-50.34,50.35a8,8,0,0,1-11.32,0L104,131.31l-40,40V176H200a8,8,0,0,1,0,16Z"
    }, null, -1),
    ju = [zu],
    Ru = {
        key: 3
    },
    Du = n("path", {
        d: "M230,208a6,6,0,0,1-6,6H32a6,6,0,0,1-6-6V48a6,6,0,0,1,12,0V161.52l53.76-53.76a6,6,0,0,1,8.48,0L128,135.51,185.52,78H160a6,6,0,0,1,0-12h40a6,6,0,0,1,6,6v40a6,6,0,0,1-12,0V86.48l-61.76,61.76a6,6,0,0,1-8.48,0L96,120.49l-58,58V202H224A6,6,0,0,1,230,208Z"
    }, null, -1),
    Fu = [Du],
    qu = {
        key: 4
    },
    Wu = n("path", {
        d: "M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z"
    }, null, -1),
    Gu = [Wu],
    Uu = {
        key: 5
    },
    Yu = n("path", {
        d: "M228,208a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V48a4,4,0,0,1,8,0V166.34l57.17-57.17a4,4,0,0,1,5.66,0L128,138.34,190.34,76H160a4,4,0,0,1,0-8h40a4,4,0,0,1,4,4v40a4,4,0,0,1-8,0V81.66l-65.17,65.17a4,4,0,0,1-5.66,0L96,117.66l-60,60V204H224A4,4,0,0,1,228,208Z"
    }, null, -1),
    Ku = [Yu],
    Ju = {
        name: "PhChartLineUp"
    },
    Ba = H({
        ...Ju,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", ku, Lu)) : l.value === "duotone" ? (u(), p("g", Eu, Ou)) : l.value === "fill" ? (u(), p("g", Nu, ju)) : l.value === "light" ? (u(), p("g", Ru, Fu)) : l.value === "regular" ? (u(), p("g", qu, Gu)) : l.value === "thin" ? (u(), p("g", Uu, Ku)) : D("", !0)], 16, Vu))
        }
    }),
    Qu = ["width", "height", "fill", "transform"],
    Xu = {
        key: 0
    },
    e6 = n("path", {
        d: "M216,36H40A20,20,0,0,0,20,56V184a20,20,0,0,0,20,20H97.23l13.62,22.29a20,20,0,0,0,34.25.08L158.77,204H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36Zm-4,144H156.53a20,20,0,0,0-17.1,9.63L128,208.33l-11.41-18.67A20.1,20.1,0,0,0,99.47,180H44V60H212Z"
    }, null, -1),
    t6 = [e6],
    s6 = {
        key: 1
    },
    a6 = n("path", {
        d: "M224,56V184a8,8,0,0,1-8,8H156.53a8,8,0,0,0-6.86,3.88l-14.81,24.24a8,8,0,0,1-13.72,0l-14.81-24.24A8,8,0,0,0,99.47,192H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z",
        opacity: "0.2"
    }, null, -1),
    i6 = n("path", {
        d: "M216,40H40A16,16,0,0,0,24,56V184a16,16,0,0,0,16,16H99.47l14.81,24.23a16,16,0,0,0,27.41.06L156.53,200H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,144H156.53a16.07,16.07,0,0,0-13.69,7.71L128,216l-14.85-24.3A16.08,16.08,0,0,0,99.47,184H40V56H216Z"
    }, null, -1),
    n6 = [a6, i6],
    o6 = {
        key: 2
    },
    l6 = n("path", {
        d: "M232,56V184a16,16,0,0,1-16,16H156.53l-14.84,24.29a16,16,0,0,1-27.41-.06L99.5,200.06,40,200a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z"
    }, null, -1),
    r6 = [l6],
    c6 = {
        key: 3
    },
    d6 = n("path", {
        d: "M216,42H40A14,14,0,0,0,26,56V184a14,14,0,0,0,14,14H99.47a2,2,0,0,1,1.71,1l0,0L116,223.2a14,14,0,0,0,24,.05L154.82,199a2,2,0,0,1,1.71-1H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42Zm2,142a2,2,0,0,1-2,2H156.53a14,14,0,0,0-12,6.75L129.72,217a2,2,0,0,1-3.46,0l-14.8-24.22a14.09,14.09,0,0,0-12-6.77H40a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2Z"
    }, null, -1),
    u6 = [d6],
    p6 = {
        key: 4
    },
    f6 = n("path", {
        d: "M216,40H40A16,16,0,0,0,24,56V184a16,16,0,0,0,16,16H99.47l14.81,24.23a16,16,0,0,0,27.41.06L156.53,200H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,144H156.53a16.07,16.07,0,0,0-13.69,7.71L128,216l-14.85-24.3A16.08,16.08,0,0,0,99.47,184H40V56H216Z"
    }, null, -1),
    h6 = [f6],
    m6 = {
        key: 5
    },
    g6 = n("path", {
        d: "M216,44H40A12,12,0,0,0,28,56V184a12,12,0,0,0,12,12H99.47a4,4,0,0,1,3.43,1.94l0,0,14.79,24.2a12,12,0,0,0,20.56,0l14.83-24.26a4,4,0,0,1,3.43-1.94H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44Zm4,140a4,4,0,0,1-4,4H156.53a12,12,0,0,0-10.27,5.8l-14.83,24.26a4,4,0,0,1-6.88,0l-14.8-24.22A12,12,0,0,0,99.47,188H40a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4Z"
    }, null, -1),
    v6 = [g6],
    y6 = {
        name: "PhChatCentered"
    },
    _6 = H({
        ...y6,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", Xu, t6)) : l.value === "duotone" ? (u(), p("g", s6, n6)) : l.value === "fill" ? (u(), p("g", o6, r6)) : l.value === "light" ? (u(), p("g", c6, u6)) : l.value === "regular" ? (u(), p("g", p6, h6)) : l.value === "thin" ? (u(), p("g", m6, v6)) : D("", !0)], 16, Qu))
        }
    }),
    x6 = ["width", "height", "fill", "transform"],
    b6 = {
        key: 0
    },
    w6 = n("path", {
        d: "M128,20A108,108,0,0,0,31.85,177.23L21,209.66A20,20,0,0,0,46.34,235l32.43-10.81A108,108,0,1,0,128,20Zm0,192a84,84,0,0,1-42.06-11.27,12,12,0,0,0-6-1.62,12.1,12.1,0,0,0-3.8.62l-29.79,9.93,9.93-29.79a12,12,0,0,0-1-9.81A84,84,0,1,1,128,212Z"
    }, null, -1),
    $6 = [w6],
    A6 = {
        key: 1
    },
    S6 = n("path", {
        d: "M224,128A96,96,0,0,1,79.93,211.11h0L42.54,223.58a8,8,0,0,1-10.12-10.12l12.47-37.39h0A96,96,0,1,1,224,128Z",
        opacity: "0.2"
    }, null, -1),
    M6 = n("path", {
        d: "M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"
    }, null, -1),
    C6 = [S6, M6],
    H6 = {
        key: 2
    },
    Z6 = n("path", {
        d: "M232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Z"
    }, null, -1),
    T6 = [Z6],
    V6 = {
        key: 3
    },
    k6 = n("path", {
        d: "M128,26A102,102,0,0,0,38.35,176.69L26.73,211.56a14,14,0,0,0,17.71,17.71l34.87-11.62A102,102,0,1,0,128,26Zm0,192a90,90,0,0,1-45.06-12.08,6.09,6.09,0,0,0-3-.81,6.2,6.2,0,0,0-1.9.31L40.65,217.88a2,2,0,0,1-2.53-2.53L50.58,178a6,6,0,0,0-.5-4.91A90,90,0,1,1,128,218Z"
    }, null, -1),
    P6 = [k6],
    L6 = {
        key: 4
    },
    E6 = n("path", {
        d: "M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"
    }, null, -1),
    B6 = [E6],
    I6 = {
        key: 5
    },
    O6 = n("path", {
        d: "M128,28A100,100,0,0,0,40.53,176.5l-11.9,35.69a12,12,0,0,0,15.18,15.18l35.69-11.9A100,100,0,1,0,128,28Zm0,192a92,92,0,0,1-46.07-12.35,4.05,4.05,0,0,0-2-.54,3.93,3.93,0,0,0-1.27.21L41.28,219.78a4,4,0,0,1-5.06-5.06l12.46-37.38a4,4,0,0,0-.33-3.27A92,92,0,1,1,128,220Z"
    }, null, -1),
    N6 = [O6],
    z6 = {
        name: "PhChatCircle"
    },
    j6 = H({
        ...z6,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", b6, $6)) : l.value === "duotone" ? (u(), p("g", A6, C6)) : l.value === "fill" ? (u(), p("g", H6, T6)) : l.value === "light" ? (u(), p("g", V6, P6)) : l.value === "regular" ? (u(), p("g", L6, B6)) : l.value === "thin" ? (u(), p("g", I6, N6)) : D("", !0)], 16, x6))
        }
    }),
    R6 = ["width", "height", "fill", "transform"],
    D6 = {
        key: 0
    },
    F6 = n("path", {
        d: "M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"
    }, null, -1),
    q6 = [F6],
    W6 = {
        key: 1
    },
    G6 = n("path", {
        d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
        opacity: "0.2"
    }, null, -1),
    U6 = n("path", {
        d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"
    }, null, -1),
    Y6 = [G6, U6],
    K6 = {
        key: 2
    },
    J6 = n("path", {
        d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"
    }, null, -1),
    Q6 = [J6],
    X6 = {
        key: 3
    },
    ep = n("path", {
        d: "M172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"
    }, null, -1),
    tp = [ep],
    sp = {
        key: 4
    },
    ap = n("path", {
        d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"
    }, null, -1),
    ip = [ap],
    np = {
        key: 5
    },
    op = n("path", {
        d: "M170.83,101.17a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"
    }, null, -1),
    lp = [op],
    rp = {
        name: "PhCheckCircle"
    },
    Ne = H({
        ...rp,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", D6, q6)) : l.value === "duotone" ? (u(), p("g", W6, Y6)) : l.value === "fill" ? (u(), p("g", K6, Q6)) : l.value === "light" ? (u(), p("g", X6, tp)) : l.value === "regular" ? (u(), p("g", sp, ip)) : l.value === "thin" ? (u(), p("g", np, lp)) : D("", !0)], 16, R6))
        }
    }),
    cp = ["width", "height", "fill", "transform"],
    dp = {
        key: 0
    },
    up = n("path", {
        d: "M209.37,60.27C188.08,49.62,160,44,128,44S67.92,49.62,46.63,60.27C24.62,71.27,12,87.21,12,104v48c0,16.79,12.62,32.73,34.63,43.73C67.92,206.38,96.05,212,128,212s60.08-5.62,81.37-16.27c22-11,34.63-26.94,34.63-43.73V104C244,87.21,231.38,71.27,209.37,60.27Zm-152,21.46C75.08,72.88,100.16,68,128,68s52.92,4.88,70.63,13.73C211.81,88.32,220,96.86,220,104s-8.19,15.68-21.37,22.27C180.92,135.12,155.84,140,128,140s-52.92-4.88-70.63-13.73C44.19,119.68,36,111.14,36,104S44.19,88.32,57.37,81.73ZM180,181.38a180.38,180.38,0,0,1-40,6.3v-24a210.39,210.39,0,0,0,40-5.51ZM76,158.22a210.39,210.39,0,0,0,40,5.51v24a180.38,180.38,0,0,1-40-6.3ZM36,152V141.54a94.54,94.54,0,0,0,10.63,6.19c1.74.87,3.54,1.7,5.37,2.5V171.3C42,165.24,36,158.11,36,152Zm168,19.3V150.23c1.83-.8,3.63-1.63,5.37-2.5A94.54,94.54,0,0,0,220,141.54V152C220,158.11,214,165.24,204,171.3Z"
    }, null, -1),
    pp = [up],
    fp = {
        key: 1
    },
    hp = n("path", {
        d: "M232,104c0,24-40,48-104,48S24,128,24,104,64,56,128,56,232,80,232,104Z",
        opacity: "0.2"
    }, null, -1),
    mp = n("path", {
        d: "M207.58,63.84C186.85,53.48,159.33,48,128,48S69.15,53.48,48.42,63.84,16,88.78,16,104v48c0,15.22,11.82,29.85,32.42,40.16S96.67,208,128,208s58.85-5.48,79.58-15.84S240,167.22,240,152V104C240,88.78,228.18,74.15,207.58,63.84ZM128,64c62.64,0,96,23.23,96,40s-33.36,40-96,40-96-23.23-96-40S65.36,64,128,64Zm-8,95.86v32c-19-.62-35-3.42-48-7.49V153.05A203.43,203.43,0,0,0,120,159.86Zm16,0a203.43,203.43,0,0,0,48-6.81v31.31c-13,4.07-29,6.87-48,7.49ZM32,152V133.53a82.88,82.88,0,0,0,16.42,10.63c2.43,1.21,5,2.35,7.58,3.43V178C40.17,170.16,32,160.29,32,152Zm168,26V147.59c2.61-1.08,5.15-2.22,7.58-3.43A82.88,82.88,0,0,0,224,133.53V152C224,160.29,215.83,170.16,200,178Z"
    }, null, -1),
    gp = [hp, mp],
    vp = {
        key: 2
    },
    yp = n("path", {
        d: "M207.58,63.84C186.85,53.48,159.33,48,128,48S69.15,53.48,48.42,63.84,16,88.78,16,104v48c0,15.22,11.82,29.85,32.42,40.16S96.67,208,128,208s58.85-5.48,79.58-15.84S240,167.22,240,152V104C240,88.78,228.18,74.15,207.58,63.84Zm-87.58,96v32c-19-.62-35-3.42-48-7.49V153.05A203.43,203.43,0,0,0,120,159.86Zm16,0a203.43,203.43,0,0,0,48-6.81v31.31c-13,4.07-29,6.87-48,7.49ZM32,152V133.53a82.88,82.88,0,0,0,16.42,10.63c2.43,1.21,5,2.35,7.58,3.43V178C40.17,170.16,32,160.29,32,152Zm168,26V147.59c2.61-1.08,5.15-2.22,7.58-3.43A82.88,82.88,0,0,0,224,133.53V152C224,160.29,215.83,170.16,200,178Z"
    }, null, -1),
    _p = [yp],
    xp = {
        key: 3
    },
    bp = n("path", {
        d: "M206.68,65.63C186.23,55.41,159,50,128,50S69.77,55.41,49.32,65.63C29.41,75.58,18,89.57,18,104v48c0,14.43,11.41,28.42,31.32,38.37C69.77,200.59,97,206,128,206s58.23-5.41,78.68-15.63C226.59,180.42,238,166.43,238,152V104C238,89.57,226.59,75.58,206.68,65.63Zm-152,10.74C73.21,67.1,99.25,62,128,62s54.79,5.1,73.32,14.37C217,84.21,226,94.28,226,104s-9,19.79-24.68,27.63C182.79,140.9,156.75,146,128,146s-54.79-5.1-73.32-14.37C39,123.79,30,113.72,30,104S39,84.21,54.68,76.37ZM122,157.93v36c-19.24-.48-37.07-3.28-52-8.11v-35.4C85.27,154.93,102.85,157.49,122,157.93Zm12,0c19.15-.44,36.73-3,52-7.52v35.4c-14.93,4.83-32.76,7.63-52,8.11ZM30,152V129a76,76,0,0,0,19.32,13.36q4.16,2.07,8.68,3.88v35c-1.13-.52-2.24-1-3.32-1.58C39,171.79,30,161.72,30,152Zm171.32,27.63c-1.08.54-2.19,1.06-3.32,1.58v-35q4.51-1.81,8.68-3.88A76,76,0,0,0,226,129v23C226,161.72,217,171.79,201.32,179.63Z"
    }, null, -1),
    wp = [bp],
    $p = {
        key: 4
    },
    Ap = n("path", {
        d: "M207.58,63.84C186.85,53.48,159.33,48,128,48S69.15,53.48,48.42,63.84,16,88.78,16,104v48c0,15.22,11.82,29.85,32.42,40.16S96.67,208,128,208s58.85-5.48,79.58-15.84S240,167.22,240,152V104C240,88.78,228.18,74.15,207.58,63.84ZM128,64c62.64,0,96,23.23,96,40s-33.36,40-96,40-96-23.23-96-40S65.36,64,128,64Zm-8,95.86v32c-19-.62-35-3.42-48-7.49V153.05A203.43,203.43,0,0,0,120,159.86Zm16,0a203.43,203.43,0,0,0,48-6.81v31.31c-13,4.07-29,6.87-48,7.49ZM32,152V133.53a82.88,82.88,0,0,0,16.42,10.63c2.43,1.21,5,2.35,7.58,3.43V178C40.17,170.16,32,160.29,32,152Zm168,26V147.59c2.61-1.08,5.15-2.22,7.58-3.43A82.88,82.88,0,0,0,224,133.53V152C224,160.29,215.83,170.16,200,178Z"
    }, null, -1),
    Sp = [Ap],
    Mp = {
        key: 5
    },
    Cp = n("path", {
        d: "M205.79,67.42C185.9,57.48,158.27,52,128,52S70.1,57.48,50.21,67.42C31,77,20,90.35,20,104v48c0,13.65,11,27,30.21,36.58C70.1,198.52,97.73,204,128,204s57.9-5.48,77.79-15.42C225,179,236,165.65,236,152V104C236,90.35,225,77,205.79,67.42ZM128,60c61.77,0,100,22.84,100,44s-38.23,44-100,44S28,125.16,28,104,66.23,60,128,60ZM124,156v40c-22-.35-40.94-3.65-56-8.71V147.65C84.23,152.75,103.44,155.62,124,156Zm8,0c20.56-.33,39.77-3.2,56-8.3v39.59c-15.06,5.06-33.95,8.36-56,8.71ZM28,152V123.92c5.15,6.19,12.67,11.89,22.21,16.66,3.08,1.54,6.36,2.95,9.79,4.28v39.38C39.49,175.67,28,163.59,28,152Zm200,0c0,11.59-11.49,23.67-32,32.24V144.86c3.43-1.33,6.71-2.74,9.79-4.28,9.54-4.77,17.06-10.47,22.21-16.66Z"
    }, null, -1),
    Hp = [Cp],
    Zp = {
        name: "PhCoin"
    },
    Tp = H({
        ...Zp,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", dp, pp)) : l.value === "duotone" ? (u(), p("g", fp, gp)) : l.value === "fill" ? (u(), p("g", vp, _p)) : l.value === "light" ? (u(), p("g", xp, wp)) : l.value === "regular" ? (u(), p("g", $p, Sp)) : l.value === "thin" ? (u(), p("g", Mp, Hp)) : D("", !0)], 16, cp))
        }
    }),
    Vp = ["width", "height", "fill", "transform"],
    kp = {
        key: 0
    },
    Pp = n("path", {
        d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm44-64a32,32,0,0,1-32,32v4a12,12,0,0,1-24,0v-4H104a12,12,0,0,1,0-24h36a8,8,0,0,0,0-16H116a32,32,0,0,1,0-64V72a12,12,0,0,1,24,0v4h12a12,12,0,0,1,0,24H116a8,8,0,0,0,0,16h24A32,32,0,0,1,172,148Z"
    }, null, -1),
    Lp = [Pp],
    Ep = {
        key: 1
    },
    Bp = n("path", {
        d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
        opacity: "0.2"
    }, null, -1),
    Ip = n("path", {
        d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z"
    }, null, -1),
    Op = [Bp, Ip],
    Np = {
        key: 2
    },
    zp = n("path", {
        d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm12,152h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24a28,28,0,0,1,0,56Z"
    }, null, -1),
    jp = [zp],
    Rp = {
        key: 3
    },
    Dp = n("path", {
        d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm38-70a26,26,0,0,1-26,26h-6v10a6,6,0,0,1-12,0V174H104a6,6,0,0,1,0-12h36a14,14,0,0,0,0-28H116a26,26,0,0,1,0-52h6V72a6,6,0,0,1,12,0V82h18a6,6,0,0,1,0,12H116a14,14,0,0,0,0,28h24A26,26,0,0,1,166,148Z"
    }, null, -1),
    Fp = [Dp],
    qp = {
        key: 4
    },
    Wp = n("path", {
        d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z"
    }, null, -1),
    Gp = [Wp],
    Up = {
        key: 5
    },
    Yp = n("path", {
        d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm36-72a24,24,0,0,1-24,24h-8v12a4,4,0,0,1-8,0V172H104a4,4,0,0,1,0-8h36a16,16,0,0,0,0-32H116a24,24,0,0,1,0-48h8V72a4,4,0,0,1,8,0V84h20a4,4,0,0,1,0,8H116a16,16,0,0,0,0,32h24A24,24,0,0,1,164,148Z"
    }, null, -1),
    Kp = [Yp],
    Jp = {
        name: "PhCurrencyCircleDollar"
    },
    Qp = H({
        ...Jp,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", kp, Lp)) : l.value === "duotone" ? (u(), p("g", Ep, Op)) : l.value === "fill" ? (u(), p("g", Np, jp)) : l.value === "light" ? (u(), p("g", Rp, Fp)) : l.value === "regular" ? (u(), p("g", qp, Gp)) : l.value === "thin" ? (u(), p("g", Up, Kp)) : D("", !0)], 16, Vp))
        }
    }),
    Xp = ["width", "height", "fill", "transform"],
    e3 = {
        key: 0
    },
    t3 = n("path", {
        d: "M208,36H48A28,28,0,0,0,20,64V172a28,28,0,0,0,28,28h68v12H96a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24H140V200h68a28,28,0,0,0,28-28V64A28,28,0,0,0,208,36ZM48,60H208a4,4,0,0,1,4,4v72H44V64A4,4,0,0,1,48,60ZM208,176H48a4,4,0,0,1-4-4V160H212v12A4,4,0,0,1,208,176Z"
    }, null, -1),
    s3 = [t3],
    a3 = {
        key: 1
    },
    i3 = n("path", {
        d: "M224,64v88H32V64A16,16,0,0,1,48,48H208A16,16,0,0,1,224,64Z",
        opacity: "0.2"
    }, null, -1),
    n3 = n("path", {
        d: "M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40ZM48,56H208a8,8,0,0,1,8,8v80H40V64A8,8,0,0,1,48,56ZM208,184H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z"
    }, null, -1),
    o3 = [i3, n3],
    l3 = {
        key: 2
    },
    r3 = n("path", {
        d: "M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm0,144H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z"
    }, null, -1),
    c3 = [r3],
    d3 = {
        key: 3
    },
    u3 = n("path", {
        d: "M208,42H48A22,22,0,0,0,26,64V176a22,22,0,0,0,22,22h74v20H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12H134V198h74a22,22,0,0,0,22-22V64A22,22,0,0,0,208,42ZM48,54H208a10,10,0,0,1,10,10v82H38V64A10,10,0,0,1,48,54ZM208,186H48a10,10,0,0,1-10-10V158H218v18A10,10,0,0,1,208,186Z"
    }, null, -1),
    p3 = [u3],
    f3 = {
        key: 4
    },
    h3 = n("path", {
        d: "M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40ZM48,56H208a8,8,0,0,1,8,8v80H40V64A8,8,0,0,1,48,56ZM208,184H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z"
    }, null, -1),
    m3 = [h3],
    g3 = {
        key: 5
    },
    v3 = n("path", {
        d: "M208,44H48A20,20,0,0,0,28,64V176a20,20,0,0,0,20,20h76v24H96a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8H132V196h76a20,20,0,0,0,20-20V64A20,20,0,0,0,208,44ZM48,52H208a12,12,0,0,1,12,12v84H36V64A12,12,0,0,1,48,52ZM208,188H48a12,12,0,0,1-12-12V156H220v20A12,12,0,0,1,208,188Z"
    }, null, -1),
    y3 = [v3],
    _3 = {
        name: "PhDesktop"
    },
    x3 = H({
        ..._3,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", e3, s3)) : l.value === "duotone" ? (u(), p("g", a3, o3)) : l.value === "fill" ? (u(), p("g", l3, c3)) : l.value === "light" ? (u(), p("g", d3, p3)) : l.value === "regular" ? (u(), p("g", f3, m3)) : l.value === "thin" ? (u(), p("g", g3, y3)) : D("", !0)], 16, Xp))
        }
    }),
    b3 = ["width", "height", "fill", "transform"],
    w3 = {
        key: 0
    },
    $3 = n("path", {
        d: "M176,12H80A28,28,0,0,0,52,40V216a28,28,0,0,0,28,28h96a28,28,0,0,0,28-28V40A28,28,0,0,0,176,12ZM76,76H180V180H76Zm4-40h96a4,4,0,0,1,4,4V52H76V40A4,4,0,0,1,80,36Zm96,184H80a4,4,0,0,1-4-4V204H180v12A4,4,0,0,1,176,220Z"
    }, null, -1),
    A3 = [$3],
    S3 = {
        key: 1
    },
    M3 = n("path", {
        d: "M192,56V200H64V56Z",
        opacity: "0.2"
    }, null, -1),
    C3 = n("path", {
        d: "M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM72,64H184V192H72Zm8-32h96a8,8,0,0,1,8,8v8H72V40A8,8,0,0,1,80,32Zm96,192H80a8,8,0,0,1-8-8v-8H184v8A8,8,0,0,1,176,224Z"
    }, null, -1),
    H3 = [M3, C3],
    Z3 = {
        key: 2
    },
    T3 = n("path", {
        d: "M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM80,32h96a8,8,0,0,1,8,8v8H72V40A8,8,0,0,1,80,32Zm96,192H80a8,8,0,0,1-8-8v-8H184v8A8,8,0,0,1,176,224Z"
    }, null, -1),
    V3 = [T3],
    k3 = {
        key: 3
    },
    P3 = n("path", {
        d: "M176,18H80A22,22,0,0,0,58,40V216a22,22,0,0,0,22,22h96a22,22,0,0,0,22-22V40A22,22,0,0,0,176,18ZM70,62H186V194H70ZM80,30h96a10,10,0,0,1,10,10V50H70V40A10,10,0,0,1,80,30Zm96,196H80a10,10,0,0,1-10-10V206H186v10A10,10,0,0,1,176,226Z"
    }, null, -1),
    L3 = [P3],
    E3 = {
        key: 4
    },
    B3 = n("path", {
        d: "M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM72,64H184V192H72Zm8-32h96a8,8,0,0,1,8,8v8H72V40A8,8,0,0,1,80,32Zm96,192H80a8,8,0,0,1-8-8v-8H184v8A8,8,0,0,1,176,224Z"
    }, null, -1),
    I3 = [B3],
    O3 = {
        key: 5
    },
    N3 = n("path", {
        d: "M176,20H80A20,20,0,0,0,60,40V216a20,20,0,0,0,20,20h96a20,20,0,0,0,20-20V40A20,20,0,0,0,176,20ZM68,60H188V196H68ZM80,28h96a12,12,0,0,1,12,12V52H68V40A12,12,0,0,1,80,28Zm96,200H80a12,12,0,0,1-12-12V204H188v12A12,12,0,0,1,176,228Z"
    }, null, -1),
    z3 = [N3],
    j3 = {
        name: "PhDeviceMobile"
    },
    R3 = H({
        ...j3,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", w3, A3)) : l.value === "duotone" ? (u(), p("g", S3, H3)) : l.value === "fill" ? (u(), p("g", Z3, V3)) : l.value === "light" ? (u(), p("g", k3, L3)) : l.value === "regular" ? (u(), p("g", E3, I3)) : l.value === "thin" ? (u(), p("g", O3, z3)) : D("", !0)], 16, b3))
        }
    }),
    D3 = ["width", "height", "fill", "transform"],
    F3 = {
        key: 0
    },
    q3 = n("path", {
        d: "M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128Z"
    }, null, -1),
    W3 = [q3],
    G3 = {
        key: 1
    },
    U3 = n("path", {
        d: "M176,128a48,48,0,1,1-48-48A48,48,0,0,1,176,128Z",
        opacity: "0.2"
    }, null, -1),
    Y3 = n("path", {
        d: "M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z"
    }, null, -1),
    K3 = [U3, Y3],
    J3 = {
        key: 2
    },
    Q3 = n("path", {
        d: "M128,80a48,48,0,1,0,48,48A48,48,0,0,0,128,80Zm0,60a12,12,0,1,1,12-12A12,12,0,0,1,128,140Z"
    }, null, -1),
    X3 = [Q3],
    ef = {
        key: 3
    },
    tf = n("path", {
        d: "M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128Z"
    }, null, -1),
    sf = [tf],
    af = {
        key: 4
    },
    nf = n("path", {
        d: "M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z"
    }, null, -1),
    of = [nf],
    lf = {
        key: 5
    },
    rf = n("path", {
        d: "M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Z"
    }, null, -1),
    cf = [rf],
    df = {
        name: "PhDot"
    },
    Kt = H({
        ...df,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", F3, W3)) : l.value === "duotone" ? (u(), p("g", G3, K3)) : l.value === "fill" ? (u(), p("g", J3, X3)) : l.value === "light" ? (u(), p("g", ef, sf)) : l.value === "regular" ? (u(), p("g", af, of )) : l.value === "thin" ? (u(), p("g", lf, cf)) : D("", !0)], 16, D3))
        }
    }),
    uf = ["width", "height", "fill", "transform"],
    pf = {
        key: 0
    },
    ff = n("path", {
        d: "M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44Zm-96,83.72L62.85,68h130.3ZM92.79,128,44,172.72V83.28Zm17.76,16.28,9.34,8.57a12,12,0,0,0,16.22,0l9.34-8.57L193.15,188H62.85ZM163.21,128,212,83.28v89.44Z"
    }, null, -1),
    hf = [ff],
    mf = {
        key: 1
    },
    gf = n("path", {
        d: "M224,56l-96,88L32,56Z",
        opacity: "0.2"
    }, null, -1),
    vf = n("path", {
        d: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"
    }, null, -1),
    yf = [gf, vf],
    _f = {
        key: 2
    },
    xf = n("path", {
        d: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"
    }, null, -1),
    bf = [xf],
    wf = {
        key: 3
    },
    $f = n("path", {
        d: "M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50Zm-96,85.86L47.42,62H208.58ZM101.67,128,38,186.36V69.64Zm8.88,8.14L124,148.42a6,6,0,0,0,8.1,0l13.4-12.28L208.58,194H47.43ZM154.33,128,218,69.64V186.36Z"
    }, null, -1),
    Af = [$f],
    Sf = {
        key: 4
    },
    Mf = n("path", {
        d: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"
    }, null, -1),
    Cf = [Mf],
    Hf = {
        key: 5
    },
    Zf = n("path", {
        d: "M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-96,86.57L42.28,60H213.72ZM104.63,128,36,190.91V65.09Zm5.92,5.43L125.3,147a4,4,0,0,0,5.4,0l14.75-13.52L213.72,196H42.28ZM151.37,128,220,65.09V190.91Z"
    }, null, -1),
    Tf = [Zf],
    Vf = {
        name: "PhEnvelope"
    },
    n0 = H({
        ...Vf,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", pf, hf)) : l.value === "duotone" ? (u(), p("g", mf, yf)) : l.value === "fill" ? (u(), p("g", _f, bf)) : l.value === "light" ? (u(), p("g", wf, Af)) : l.value === "regular" ? (u(), p("g", Sf, Cf)) : l.value === "thin" ? (u(), p("g", Hf, Tf)) : D("", !0)], 16, uf))
        }
    }),
    kf = ["width", "height", "fill", "transform"],
    Pf = {
        key: 0
    },
    Lf = n("path", {
        d: "M230.66,86l-96-64a12,12,0,0,0-13.32,0l-96,64A12,12,0,0,0,20,96V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V96A12,12,0,0,0,230.66,86ZM128,46.42l74.86,49.91L141.61,140H114.39L53.14,96.33ZM44,196V119.29l59.58,42.48a12,12,0,0,0,7,2.23h34.9a12,12,0,0,0,7-2.23L212,119.29V196Z"
    }, null, -1),
    Ef = [Lf],
    Bf = {
        key: 1
    },
    If = n("path", {
        d: "M224,96l-78.55,56h-34.9L32,96l96-64Z",
        opacity: "0.2"
    }, null, -1),
    Of = n("path", {
        d: "M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM128,41.61l81.91,54.61-67,47.78H113.11l-67-47.78ZM40,200V111.53l65.9,47a8,8,0,0,0,4.65,1.49h34.9a8,8,0,0,0,4.65-1.49l65.9-47V200Z"
    }, null, -1),
    Nf = [If, Of],
    zf = {
        key: 2
    },
    jf = n("path", {
        d: "M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM40,200V111.53l65.9,47a8,8,0,0,0,4.65,1.49h34.9a8,8,0,0,0,4.65-1.49l65.9-47V200Z"
    }, null, -1),
    Rf = [jf],
    Df = {
        key: 3
    },
    Ff = n("path", {
        d: "M227.33,91l-96-64a6,6,0,0,0-6.66,0l-96,64A6,6,0,0,0,26,96V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V96A6,6,0,0,0,227.33,91ZM128,39.21l85.43,57L143.53,146H112.47L42.57,96.17ZM216,202H40a2,2,0,0,1-2-2V107.65l69.06,49.24a6.06,6.06,0,0,0,3.49,1.11h34.9a6.06,6.06,0,0,0,3.49-1.11L218,107.65V200A2,2,0,0,1,216,202Z"
    }, null, -1),
    qf = [Ff],
    Wf = {
        key: 4
    },
    Gf = n("path", {
        d: "M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM128,41.61l81.91,54.61-67,47.78H113.11l-67-47.78ZM40,200V111.53l65.9,47a8,8,0,0,0,4.65,1.49h34.9a8,8,0,0,0,4.65-1.49l65.9-47V200Z"
    }, null, -1),
    Uf = [Gf],
    Yf = {
        key: 5
    },
    Kf = n("path", {
        d: "M226.22,92.67l-96-64a4,4,0,0,0-4.44,0l-96,64A4,4,0,0,0,28,96V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V96A4,4,0,0,0,226.22,92.67ZM128,36.81,217,96.11,144.17,148H111.83L39.05,96.11ZM216,204H40a4,4,0,0,1-4-4V103.76l72.22,51.5a4,4,0,0,0,2.33.74h34.9a4,4,0,0,0,2.33-.74L220,103.76V200A4,4,0,0,1,216,204Z"
    }, null, -1),
    Jf = [Kf],
    Qf = {
        name: "PhEnvelopeSimpleOpen"
    },
    Xf = H({
        ...Qf,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", Pf, Ef)) : l.value === "duotone" ? (u(), p("g", Bf, Nf)) : l.value === "fill" ? (u(), p("g", zf, Rf)) : l.value === "light" ? (u(), p("g", Df, qf)) : l.value === "regular" ? (u(), p("g", Wf, Uf)) : l.value === "thin" ? (u(), p("g", Yf, Jf)) : D("", !0)], 16, kf))
        }
    }),
    eh = ["width", "height", "fill", "transform"],
    th = {
        key: 0
    },
    sh = n("path", {
        d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm12,191.13V156h20a12,12,0,0,0,0-24H140V112a12,12,0,0,1,12-12h16a12,12,0,0,0,0-24H152a36,36,0,0,0-36,36v20H96a12,12,0,0,0,0,24h20v55.13a84,84,0,1,1,24,0Z"
    }, null, -1),
    ah = [sh],
    ih = {
        key: 1
    },
    nh = n("path", {
        d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
        opacity: "0.2"
    }, null, -1),
    oh = n("path", {
        d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"
    }, null, -1),
    lh = [nh, oh],
    rh = {
        key: 2
    },
    ch = n("path", {
        d: "M232,128a104.16,104.16,0,0,1-91.55,103.26,4,4,0,0,1-4.45-4V152h24a8,8,0,0,0,8-8.53,8.17,8.17,0,0,0-8.25-7.47H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,167.73,80H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.53A8.17,8.17,0,0,0,96.27,152H120v75.28a4,4,0,0,1-4.44,4A104.15,104.15,0,0,1,24.07,124.09c2-54,45.74-97.9,99.78-100A104.12,104.12,0,0,1,232,128Z"
    }, null, -1),
    dh = [ch],
    uh = {
        key: 3
    },
    ph = n("path", {
        d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm6,191.8V150h26a6,6,0,0,0,0-12H134V112a18,18,0,0,1,18-18h16a6,6,0,0,0,0-12H152a30,30,0,0,0-30,30v26H96a6,6,0,0,0,0,12h26v67.8a90,90,0,1,1,12,0Z"
    }, null, -1),
    fh = [ph],
    hh = {
        key: 4
    },
    mh = n("path", {
        d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"
    }, null, -1),
    gh = [mh],
    vh = {
        key: 5
    },
    yh = n("path", {
        d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm4,191.91V148h28a4,4,0,0,0,0-8H132V112a20,20,0,0,1,20-20h16a4,4,0,0,0,0-8H152a28,28,0,0,0-28,28v28H96a4,4,0,0,0,0,8h28v71.91a92,92,0,1,1,8,0Z"
    }, null, -1),
    _h = [yh],
    xh = {
        name: "PhFacebookLogo"
    },
    bh = H({
        ...xh,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", th, ah)) : l.value === "duotone" ? (u(), p("g", ih, lh)) : l.value === "fill" ? (u(), p("g", rh, dh)) : l.value === "light" ? (u(), p("g", uh, fh)) : l.value === "regular" ? (u(), p("g", hh, gh)) : l.value === "thin" ? (u(), p("g", vh, _h)) : D("", !0)], 16, eh))
        }
    }),
    wh = ["width", "height", "fill", "transform"],
    $h = {
        key: 0
    },
    Ah = n("path", {
        d: "M216.49,79.51l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.51ZM160,57l23,23H160ZM60,212V44h76V92a12,12,0,0,0,12,12h48V212Zm104-60a12,12,0,0,1-12,12H140v12a12,12,0,0,1-24,0V164H104a12,12,0,0,1,0-24h12V128a12,12,0,0,1,24,0v12h12A12,12,0,0,1,164,152Z"
    }, null, -1),
    Sh = [Ah],
    Mh = {
        key: 1
    },
    Ch = n("path", {
        d: "M208,88H152V32Z",
        opacity: "0.2"
    }, null, -1),
    Hh = n("path", {
        d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-40-64a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V160H104a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,152Z"
    }, null, -1),
    Zh = [Ch, Hh],
    Th = {
        key: 2
    },
    Vh = n("path", {
        d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM152,160H136v16a8,8,0,0,1-16,0V160H104a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16Zm0-72V43.31L196.69,88Z"
    }, null, -1),
    kh = [Vh],
    Ph = {
        key: 3
    },
    Lh = n("path", {
        d: "M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM200,218H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V216A2,2,0,0,1,200,218Zm-42-66a6,6,0,0,1-6,6H134v18a6,6,0,0,1-12,0V158H104a6,6,0,0,1,0-12h18V128a6,6,0,0,1,12,0v18h18A6,6,0,0,1,158,152Z"
    }, null, -1),
    Eh = [Lh],
    Bh = {
        key: 4
    },
    Ih = n("path", {
        d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-40-64a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V160H104a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,152Z"
    }, null, -1),
    Oh = [Ih],
    Nh = {
        key: 5
    },
    zh = n("path", {
        d: "M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156ZM200,220H56a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216A4,4,0,0,1,200,220Zm-44-68a4,4,0,0,1-4,4H132v20a4,4,0,0,1-8,0V156H104a4,4,0,0,1,0-8h20V128a4,4,0,0,1,8,0v20h20A4,4,0,0,1,156,152Z"
    }, null, -1),
    jh = [zh],
    Rh = {
        name: "PhFilePlus"
    },
    Dh = H({
        ...Rh,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", $h, Sh)) : l.value === "duotone" ? (u(), p("g", Mh, Zh)) : l.value === "fill" ? (u(), p("g", Th, kh)) : l.value === "light" ? (u(), p("g", Ph, Eh)) : l.value === "regular" ? (u(), p("g", Bh, Oh)) : l.value === "thin" ? (u(), p("g", Nh, jh)) : D("", !0)], 16, wh))
        }
    }),
    Fh = ["width", "height", "fill", "transform"],
    qh = {
        key: 0
    },
    Wh = n("path", {
        d: "M216.49,79.52l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.52ZM160,57l23,23H160ZM60,212V44h76V92a12,12,0,0,0,12,12h48V212Zm112-80a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,132Zm0,40a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,172Z"
    }, null, -1),
    Gh = [Wh],
    Uh = {
        key: 1
    },
    Yh = n("path", {
        d: "M208,88H152V32Z",
        opacity: "0.2"
    }, null, -1),
    Kh = n("path", {
        d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"
    }, null, -1),
    Jh = [Yh, Kh],
    Qh = {
        key: 2
    },
    Xh = n("path", {
        d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,176H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm-8-56V44l44,44Z"
    }, null, -1),
    e5 = [Xh],
    t5 = {
        key: 3
    },
    s5 = n("path", {
        d: "M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM200,218H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V216A2,2,0,0,1,200,218Zm-34-82a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,136Zm0,32a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,168Z"
    }, null, -1),
    a5 = [s5],
    i5 = {
        key: 4
    },
    n5 = n("path", {
        d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"
    }, null, -1),
    o5 = [n5],
    l5 = {
        key: 5
    },
    r5 = n("path", {
        d: "M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156ZM200,220H56a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216A4,4,0,0,1,200,220Zm-36-84a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,136Zm0,32a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,168Z"
    }, null, -1),
    c5 = [r5],
    d5 = {
        name: "PhFileText"
    },
    Ia = H({
        ...d5,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", qh, Gh)) : l.value === "duotone" ? (u(), p("g", Uh, Jh)) : l.value === "fill" ? (u(), p("g", Qh, e5)) : l.value === "light" ? (u(), p("g", t5, a5)) : l.value === "regular" ? (u(), p("g", i5, o5)) : l.value === "thin" ? (u(), p("g", l5, c5)) : D("", !0)], 16, Fh))
        }
    }),
    u5 = ["width", "height", "fill", "transform"],
    p5 = {
        key: 0
    },
    f5 = n("path", {
        d: "M128,76a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,76Zm0,80a28,28,0,1,1,28-28A28,28,0,0,1,128,156Zm92-27.21v-1.58l14-17.51a12,12,0,0,0,2.23-10.59A111.75,111.75,0,0,0,225,71.89,12,12,0,0,0,215.89,66L193.61,63.5l-1.11-1.11L190,40.1A12,12,0,0,0,184.11,31a111.67,111.67,0,0,0-27.23-11.27A12,12,0,0,0,146.3,22L128.79,36h-1.58L109.7,22a12,12,0,0,0-10.59-2.23A111.75,111.75,0,0,0,71.89,31.05,12,12,0,0,0,66,40.11L63.5,62.39,62.39,63.5,40.1,66A12,12,0,0,0,31,71.89,111.67,111.67,0,0,0,19.77,99.12,12,12,0,0,0,22,109.7l14,17.51v1.58L22,146.3a12,12,0,0,0-2.23,10.59,111.75,111.75,0,0,0,11.29,27.22A12,12,0,0,0,40.11,190l22.28,2.48,1.11,1.11L66,215.9A12,12,0,0,0,71.89,225a111.67,111.67,0,0,0,27.23,11.27A12,12,0,0,0,109.7,234l17.51-14h1.58l17.51,14a12,12,0,0,0,10.59,2.23A111.75,111.75,0,0,0,184.11,225a12,12,0,0,0,5.91-9.06l2.48-22.28,1.11-1.11L215.9,190a12,12,0,0,0,9.06-5.91,111.67,111.67,0,0,0,11.27-27.23A12,12,0,0,0,234,146.3Zm-24.12-4.89a70.1,70.1,0,0,1,0,8.2,12,12,0,0,0,2.61,8.22l12.84,16.05A86.47,86.47,0,0,1,207,166.86l-20.43,2.27a12,12,0,0,0-7.65,4,69,69,0,0,1-5.8,5.8,12,12,0,0,0-4,7.65L166.86,207a86.47,86.47,0,0,1-10.49,4.35l-16.05-12.85a12,12,0,0,0-7.5-2.62c-.24,0-.48,0-.72,0a70.1,70.1,0,0,1-8.2,0,12.06,12.06,0,0,0-8.22,2.6L99.63,211.33A86.47,86.47,0,0,1,89.14,207l-2.27-20.43a12,12,0,0,0-4-7.65,69,69,0,0,1-5.8-5.8,12,12,0,0,0-7.65-4L49,166.86a86.47,86.47,0,0,1-4.35-10.49l12.84-16.05a12,12,0,0,0,2.61-8.22,70.1,70.1,0,0,1,0-8.2,12,12,0,0,0-2.61-8.22L44.67,99.63A86.47,86.47,0,0,1,49,89.14l20.43-2.27a12,12,0,0,0,7.65-4,69,69,0,0,1,5.8-5.8,12,12,0,0,0,4-7.65L89.14,49a86.47,86.47,0,0,1,10.49-4.35l16.05,12.85a12.06,12.06,0,0,0,8.22,2.6,70.1,70.1,0,0,1,8.2,0,12,12,0,0,0,8.22-2.6l16.05-12.85A86.47,86.47,0,0,1,166.86,49l2.27,20.43a12,12,0,0,0,4,7.65,69,69,0,0,1,5.8,5.8,12,12,0,0,0,7.65,4L207,89.14a86.47,86.47,0,0,1,4.35,10.49l-12.84,16.05A12,12,0,0,0,195.88,123.9Z"
    }, null, -1),
    h5 = [f5],
    m5 = {
        key: 1
    },
    g5 = n("path", {
        d: "M207.86,123.18l16.78-21a99.14,99.14,0,0,0-10.07-24.29l-26.7-3a81,81,0,0,0-6.81-6.81l-3-26.71a99.43,99.43,0,0,0-24.3-10l-21,16.77a81.59,81.59,0,0,0-9.64,0l-21-16.78A99.14,99.14,0,0,0,77.91,41.43l-3,26.7a81,81,0,0,0-6.81,6.81l-26.71,3a99.43,99.43,0,0,0-10,24.3l16.77,21a81.59,81.59,0,0,0,0,9.64l-16.78,21a99.14,99.14,0,0,0,10.07,24.29l26.7,3a81,81,0,0,0,6.81,6.81l3,26.71a99.43,99.43,0,0,0,24.3,10l21-16.77a81.59,81.59,0,0,0,9.64,0l21,16.78a99.14,99.14,0,0,0,24.29-10.07l3-26.7a81,81,0,0,0,6.81-6.81l26.71-3a99.43,99.43,0,0,0,10-24.3l-16.77-21A81.59,81.59,0,0,0,207.86,123.18ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",
        opacity: "0.2"
    }, null, -1),
    v5 = n("path", {
        d: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.6,107.6,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.29,107.29,0,0,0-26.25-10.86,8,8,0,0,0-7.06,1.48L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.6,107.6,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8.06,8.06,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8.06,8.06,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"
    }, null, -1),
    y5 = [g5, v5],
    _5 = {
        key: 2
    },
    x5 = n("path", {
        d: "M216,130.16q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.6,107.6,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.29,107.29,0,0,0-26.25-10.86,8,8,0,0,0-7.06,1.48L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.6,107.6,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"
    }, null, -1),
    b5 = [x5],
    w5 = {
        key: 3
    },
    $5 = n("path", {
        d: "M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM214,130.84c.06-1.89.06-3.79,0-5.68L229.33,106a6,6,0,0,0,1.11-5.29A105.34,105.34,0,0,0,219.76,74.9a6,6,0,0,0-4.53-3l-24.45-2.71q-1.93-2.07-4-4l-2.72-24.46a6,6,0,0,0-3-4.53,105.65,105.65,0,0,0-25.77-10.66A6,6,0,0,0,150,26.68l-19.2,15.37c-1.89-.06-3.79-.06-5.68,0L106,26.67a6,6,0,0,0-5.29-1.11A105.34,105.34,0,0,0,74.9,36.24a6,6,0,0,0-3,4.53L69.23,65.22q-2.07,1.94-4,4L40.76,72a6,6,0,0,0-4.53,3,105.65,105.65,0,0,0-10.66,25.77A6,6,0,0,0,26.68,106l15.37,19.2c-.06,1.89-.06,3.79,0,5.68L26.67,150.05a6,6,0,0,0-1.11,5.29A105.34,105.34,0,0,0,36.24,181.1a6,6,0,0,0,4.53,3l24.45,2.71q1.94,2.07,4,4L72,215.24a6,6,0,0,0,3,4.53,105.65,105.65,0,0,0,25.77,10.66,6,6,0,0,0,5.29-1.11L125.16,214c1.89.06,3.79.06,5.68,0l19.21,15.38a6,6,0,0,0,3.75,1.31,6.2,6.2,0,0,0,1.54-.2,105.34,105.34,0,0,0,25.76-10.68,6,6,0,0,0,3-4.53l2.71-24.45q2.07-1.93,4-4l24.46-2.72a6,6,0,0,0,4.53-3,105.49,105.49,0,0,0,10.66-25.77,6,6,0,0,0-1.11-5.29Zm-3.1,41.63-23.64,2.63a6,6,0,0,0-3.82,2,75.14,75.14,0,0,1-6.31,6.31,6,6,0,0,0-2,3.82l-2.63,23.63A94.28,94.28,0,0,1,155.14,218l-18.57-14.86a6,6,0,0,0-3.75-1.31h-.36a78.07,78.07,0,0,1-8.92,0,6,6,0,0,0-4.11,1.3L100.87,218a94.13,94.13,0,0,1-17.34-7.17L80.9,187.21a6,6,0,0,0-2-3.82,75.14,75.14,0,0,1-6.31-6.31,6,6,0,0,0-3.82-2l-23.63-2.63A94.28,94.28,0,0,1,38,155.14l14.86-18.57a6,6,0,0,0,1.3-4.11,78.07,78.07,0,0,1,0-8.92,6,6,0,0,0-1.3-4.11L38,100.87a94.13,94.13,0,0,1,7.17-17.34L68.79,80.9a6,6,0,0,0,3.82-2,75.14,75.14,0,0,1,6.31-6.31,6,6,0,0,0,2-3.82l2.63-23.63A94.28,94.28,0,0,1,100.86,38l18.57,14.86a6,6,0,0,0,4.11,1.3,78.07,78.07,0,0,1,8.92,0,6,6,0,0,0,4.11-1.3L155.13,38a94.13,94.13,0,0,1,17.34,7.17l2.63,23.64a6,6,0,0,0,2,3.82,75.14,75.14,0,0,1,6.31,6.31,6,6,0,0,0,3.82,2l23.63,2.63A94.28,94.28,0,0,1,218,100.86l-14.86,18.57a6,6,0,0,0-1.3,4.11,78.07,78.07,0,0,1,0,8.92,6,6,0,0,0,1.3,4.11L218,155.13A94.13,94.13,0,0,1,210.85,172.47Z"
    }, null, -1),
    A5 = [$5],
    S5 = {
        key: 4
    },
    M5 = n("path", {
        d: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"
    }, null, -1),
    C5 = [M5],
    H5 = {
        key: 5
    },
    Z5 = n("path", {
        d: "M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Zm83.93-32.49q.13-3.51,0-7l15.83-19.79a4,4,0,0,0,.75-3.53A103.64,103.64,0,0,0,218,75.9a4,4,0,0,0-3-2l-25.19-2.8c-1.58-1.71-3.24-3.37-4.95-4.95L182.07,41a4,4,0,0,0-2-3A104,104,0,0,0,154.82,27.5a4,4,0,0,0-3.53.74L131.51,44.07q-3.51-.14-7,0L104.7,28.24a4,4,0,0,0-3.53-.75A103.64,103.64,0,0,0,75.9,38a4,4,0,0,0-2,3l-2.8,25.19c-1.71,1.58-3.37,3.24-4.95,4.95L41,73.93a4,4,0,0,0-3,2A104,104,0,0,0,27.5,101.18a4,4,0,0,0,.74,3.53l15.83,19.78q-.14,3.51,0,7L28.24,151.3a4,4,0,0,0-.75,3.53A103.64,103.64,0,0,0,38,180.1a4,4,0,0,0,3,2l25.19,2.8c1.58,1.71,3.24,3.37,4.95,4.95l2.8,25.2a4,4,0,0,0,2,3,104,104,0,0,0,25.28,10.46,4,4,0,0,0,3.53-.74l19.78-15.83q3.51.13,7,0l19.79,15.83a4,4,0,0,0,2.5.88,4,4,0,0,0,1-.13A103.64,103.64,0,0,0,180.1,218a4,4,0,0,0,2-3l2.8-25.19c1.71-1.58,3.37-3.24,4.95-4.95l25.2-2.8a4,4,0,0,0,3-2,104,104,0,0,0,10.46-25.28,4,4,0,0,0-.74-3.53Zm.17,42.83-24.67,2.74a4,4,0,0,0-2.55,1.32,76.2,76.2,0,0,1-6.48,6.48,4,4,0,0,0-1.32,2.55l-2.74,24.66a95.45,95.45,0,0,1-19.64,8.15l-19.38-15.51a4,4,0,0,0-2.5-.87h-.24a73.67,73.67,0,0,1-9.16,0,4,4,0,0,0-2.74.87l-19.37,15.5a95.33,95.33,0,0,1-19.65-8.13l-2.74-24.67a4,4,0,0,0-1.32-2.55,76.2,76.2,0,0,1-6.48-6.48,4,4,0,0,0-2.55-1.32l-24.66-2.74a95.45,95.45,0,0,1-8.15-19.64l15.51-19.38a4,4,0,0,0,.87-2.74,77.76,77.76,0,0,1,0-9.16,4,4,0,0,0-.87-2.74l-15.5-19.37A95.33,95.33,0,0,1,43.9,81.66l24.67-2.74a4,4,0,0,0,2.55-1.32,76.2,76.2,0,0,1,6.48-6.48,4,4,0,0,0,1.32-2.55l2.74-24.66a95.45,95.45,0,0,1,19.64-8.15l19.38,15.51a4,4,0,0,0,2.74.87,73.67,73.67,0,0,1,9.16,0,4,4,0,0,0,2.74-.87l19.37-15.5a95.33,95.33,0,0,1,19.65,8.13l2.74,24.67a4,4,0,0,0,1.32,2.55,76.2,76.2,0,0,1,6.48,6.48,4,4,0,0,0,2.55,1.32l24.66,2.74a95.45,95.45,0,0,1,8.15,19.64l-15.51,19.38a4,4,0,0,0-.87,2.74,77.76,77.76,0,0,1,0,9.16,4,4,0,0,0,.87,2.74l15.5,19.37A95.33,95.33,0,0,1,212.1,174.34Z"
    }, null, -1),
    T5 = [Z5],
    V5 = {
        name: "PhGear"
    },
    k5 = H({
        ...V5,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", p5, h5)) : l.value === "duotone" ? (u(), p("g", m5, y5)) : l.value === "fill" ? (u(), p("g", _5, b5)) : l.value === "light" ? (u(), p("g", w5, A5)) : l.value === "regular" ? (u(), p("g", S5, C5)) : l.value === "thin" ? (u(), p("g", H5, T5)) : D("", !0)], 16, u5))
        }
    }),
    P5 = ["width", "height", "fill", "transform"],
    L5 = {
        key: 0
    },
    E5 = n("path", {
        d: "M232.76,137.88A28.39,28.39,0,0,0,208.13,133L172,141.26c0-.42,0-.84,0-1.26a32,32,0,0,0-32-32H89.94a35.76,35.76,0,0,0-25.45,10.54L43,140H20A20,20,0,0,0,0,160v40a20,20,0,0,0,20,20H120a11.89,11.89,0,0,0,2.91-.36l64-16a11.4,11.4,0,0,0,1.79-.6l38.82-16.54c.23-.09.45-.19.67-.3a28.61,28.61,0,0,0,4.57-48.32ZM24,164H36v32H24Zm193.68.61-37.51,16L118.52,196H60V157l21.46-21.46A11.93,11.93,0,0,1,89.94,132H140a8,8,0,0,1,0,16H112a12,12,0,0,0,0,24h32a12.19,12.19,0,0,0,2.69-.3l67-15.41.47-.12a4.61,4.61,0,0,1,5.82,4.44A4.58,4.58,0,0,1,217.68,164.61ZM164,100c1.1,0,2.2-.06,3.28-.15A40,40,0,1,0,204,44c-1.1,0-2.18.06-3.26.14A40,40,0,1,0,164,100Zm56-16a16,16,0,1,1-16-16A16,16,0,0,1,220,84ZM164,44a16,16,0,0,1,14.5,9.21A40,40,0,0,0,164.81,76c-.27,0-.54,0-.81,0a16,16,0,0,1,0-32Z"
    }, null, -1),
    B5 = [E5],
    I5 = {
        key: 1
    },
    O5 = n("path", {
        d: "M16,152H48v56H16a8,8,0,0,1-8-8V160A8,8,0,0,1,16,152ZM204,56a28,28,0,0,0-12,2.71h0A28,28,0,1,0,176,85.29h0A28,28,0,1,0,204,56Z",
        opacity: "0.2"
    }, null, -1),
    N5 = n("path", {
        d: "M230.33,141.06a24.43,24.43,0,0,0-21.24-4.23l-41.84,9.62A28,28,0,0,0,140,112H89.94a31.82,31.82,0,0,0-22.63,9.37L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56ZM16,160H40v40H16Zm203.43,8.21-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9ZM164,96a36,36,0,0,0,5.9-.48,36,36,0,1,0,28.22-47A36,36,0,1,0,164,96Zm60-12a20,20,0,1,1-20-20A20,20,0,0,1,224,84ZM164,40a20,20,0,0,1,19.25,14.61,36,36,0,0,0-15,24.93A20.42,20.42,0,0,1,164,80a20,20,0,0,1,0-40Z"
    }, null, -1),
    z5 = [O5, N5],
    j5 = {
        key: 2
    },
    R5 = n("path", {
        d: "M128.09,57.38a36,36,0,0,1,55.17-27.82,4,4,0,0,1-.56,7A52.06,52.06,0,0,0,152,84c0,1.17,0,2.34.12,3.49a4,4,0,0,1-6,3.76A36,36,0,0,1,128.09,57.38ZM240,160.61a24.47,24.47,0,0,1-13.6,22l-.44.2-38.83,16.54a6.94,6.94,0,0,1-1.19.4l-64,16A7.93,7.93,0,0,1,120,216H16A16,16,0,0,1,0,200V160a16,16,0,0,1,16-16H44.69l22.62-22.63A31.82,31.82,0,0,1,89.94,112H140a28,28,0,0,1,27.25,34.45l41.84-9.62A24.61,24.61,0,0,1,240,160.61Zm-16,0a8.61,8.61,0,0,0-10.87-8.3l-.31.08-67,15.41a8.32,8.32,0,0,1-1.79.2H112a8,8,0,0,1,0-16h28a12,12,0,0,0,0-24H89.94a15.86,15.86,0,0,0-11.31,4.69L56,155.31V200h63l62.43-15.61,38-16.18A8.56,8.56,0,0,0,224,160.61ZM168,84a36,36,0,1,0,36-36A36,36,0,0,0,168,84Z"
    }, null, -1),
    D5 = [R5],
    F5 = {
        key: 3
    },
    q5 = n("path", {
        d: "M229.12,142.65a22.43,22.43,0,0,0-19.55-3.88l-45.24,10.4A26,26,0,0,0,140,114H89.94a29.78,29.78,0,0,0-21.21,8.79L45.52,146H16A14,14,0,0,0,2,160v40a14,14,0,0,0,14,14H120a6,6,0,0,0,1.46-.18l64-16a7.16,7.16,0,0,0,.89-.3L225.17,181l.33-.15a22.6,22.6,0,0,0,3.62-38.18ZM14,200V160a2,2,0,0,1,2-2H42v44H16A2,2,0,0,1,14,200Zm206.28-30-38.2,16.27L119.26,202H54V154.49l23.21-23.22A17.88,17.88,0,0,1,89.94,126H140a14,14,0,0,1,0,28H112a6,6,0,0,0,0,12h32a6,6,0,0,0,1.34-.15l67-15.41.24-.06A10.6,10.6,0,0,1,220.28,170ZM164,94a34.54,34.54,0,0,0,7.28-.78,34,34,0,1,0,25.46-42.43A34,34,0,1,0,164,94Zm62-10a22,22,0,1,1-22-22A22,22,0,0,1,226,84ZM164,38a21.94,21.94,0,0,1,21.51,17.49,34,34,0,0,0-15.38,25.65A22,22,0,1,1,164,38Z"
    }, null, -1),
    W5 = [q5],
    G5 = {
        key: 4
    },
    U5 = n("path", {
        d: "M230.33,141.06a24.43,24.43,0,0,0-21.24-4.23l-41.84,9.62A28,28,0,0,0,140,112H89.94a31.82,31.82,0,0,0-22.63,9.37L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56ZM16,160H40v40H16Zm203.43,8.21-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9ZM164,96a36,36,0,0,0,5.9-.48,36,36,0,1,0,28.22-47A36,36,0,1,0,164,96Zm60-12a20,20,0,1,1-20-20A20,20,0,0,1,224,84ZM164,40a20,20,0,0,1,19.25,14.61,36,36,0,0,0-15,24.93A20.42,20.42,0,0,1,164,80a20,20,0,0,1,0-40Z"
    }, null, -1),
    Y5 = [U5],
    K5 = {
        key: 5
    },
    J5 = n("path", {
        d: "M227.9,144.24a20.45,20.45,0,0,0-17.84-3.53L160.75,152A23.76,23.76,0,0,0,164,140a24,24,0,0,0-24-24H89.94a27.81,27.81,0,0,0-19.8,8.2L46.34,148H16A12,12,0,0,0,4,160v40a12,12,0,0,0,12,12H120a4,4,0,0,0,1-.12l64-16a4.69,4.69,0,0,0,.6-.2l38.82-16.54.22-.1a20.6,20.6,0,0,0,3.29-34.8ZM12,200V160a4,4,0,0,1,4-4H44v48H16A4,4,0,0,1,12,200Zm209.13-28.17L182.72,188.2,119.51,204H52V153.66l23.8-23.8A19.86,19.86,0,0,1,89.94,124H140a16,16,0,0,1,0,32H112a4,4,0,0,0,0,8h32a3.94,3.94,0,0,0,.9-.1l67-15.41.16,0a12.6,12.6,0,0,1,9,23.38ZM164,92a31.88,31.88,0,0,0,8.73-1.2,32,32,0,1,0,22.55-37.58A32,32,0,1,0,164,92Zm64-8a24,24,0,1,1-24-24A24,24,0,0,1,228,84ZM164,36a24,24,0,0,1,23.74,20.46A32,32,0,0,0,172,82.62,24,24,0,1,1,164,36Z"
    }, null, -1),
    Q5 = [J5],
    X5 = {
        name: "PhHandCoins"
    },
    T1 = H({
        ...X5,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", L5, B5)) : l.value === "duotone" ? (u(), p("g", I5, z5)) : l.value === "fill" ? (u(), p("g", j5, D5)) : l.value === "light" ? (u(), p("g", F5, W5)) : l.value === "regular" ? (u(), p("g", G5, Y5)) : l.value === "thin" ? (u(), p("g", K5, Q5)) : D("", !0)], 16, P5))
        }
    }),
    em = ["width", "height", "fill", "transform"],
    tm = {
        key: 0
    },
    sm = n("path", {
        d: "M232.76,137.88a28.66,28.66,0,0,0-12-5.39C236.19,114.94,244,97.37,244,80c0-28.67-23.09-52-51.46-52A51.77,51.77,0,0,0,156,42.85,51.77,51.77,0,0,0,119.46,28C91.09,28,68,51.33,68,80c0,10.15,2.72,20.3,8.22,30.7a35.9,35.9,0,0,0-11.73,7.84L43,140H20A20,20,0,0,0,0,160v40a20,20,0,0,0,20,20H120a11.89,11.89,0,0,0,2.91-.36l64-16a11.4,11.4,0,0,0,1.79-.6l38.82-16.54c.23-.09.45-.19.67-.3a28.61,28.61,0,0,0,4.57-48.32ZM119.46,52A27.18,27.18,0,0,1,144.9,68.56a12,12,0,0,0,22.2,0A27.18,27.18,0,0,1,192.54,52C207.42,52,220,64.82,220,80c0,18.06-15,38.84-43.38,60.19L172,141.26c0-.42,0-.84,0-1.26a32,32,0,0,0-32-32H102.71C95.42,97.76,92,88.77,92,80,92,64.82,104.58,52,119.46,52ZM24,164H36v32H24Zm193.68.61-37.51,16L118.52,196H60V157l21.46-21.46A11.93,11.93,0,0,1,89.94,132H140a8,8,0,0,1,0,16H112a12,12,0,0,0,0,24h32a12.19,12.19,0,0,0,2.69-.3l67-15.41.47-.12a4.61,4.61,0,0,1,5.82,4.44A4.58,4.58,0,0,1,217.68,164.61Z"
    }, null, -1),
    am = [sm],
    im = {
        key: 1
    },
    nm = n("path", {
        d: "M16,152H48v56H16a8,8,0,0,1-8-8V160A8,8,0,0,1,16,152ZM192.54,40A39.12,39.12,0,0,0,156,64a39.12,39.12,0,0,0-36.54-24C97.67,40,80,58.31,80,80c0,14.56,7,27.71,16.73,40H140a20,20,0,0,1,0,40h4l37.78-8.68C203.82,135.07,232,109.23,232,80,232,58.31,214.33,40,192.54,40Z",
        opacity: "0.2"
    }, null, -1),
    om = n("path", {
        d: "M230.33,141.06a24.34,24.34,0,0,0-18.61-4.77C230.5,117.33,240,98.48,240,80c0-26.47-21.29-48-47.46-48A47.58,47.58,0,0,0,156,48.75,47.58,47.58,0,0,0,119.46,32C93.29,32,72,53.53,72,80c0,11,3.24,21.69,10.06,33a31.87,31.87,0,0,0-14.75,8.4L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56ZM119.46,48A31.15,31.15,0,0,1,148.6,67a8,8,0,0,0,14.8,0,31.15,31.15,0,0,1,29.14-19C209.59,48,224,62.65,224,80c0,19.51-15.79,41.58-45.66,63.9l-11.09,2.55A28,28,0,0,0,140,112H100.68C92.05,100.36,88,90.12,88,80,88,62.65,102.41,48,119.46,48ZM16,160H40v40H16Zm203.43,8.21-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9Z"
    }, null, -1),
    lm = [nm, om],
    rm = {
        key: 2
    },
    cm = n("path", {
        d: "M230.33,141.06a24.34,24.34,0,0,0-18.61-4.77C230.5,117.33,240,98.48,240,80c0-26.47-21.29-48-47.46-48A47.58,47.58,0,0,0,156,48.75,47.58,47.58,0,0,0,119.46,32C93.29,32,72,53.53,72,80c0,11,3.24,21.69,10.06,33a31.87,31.87,0,0,0-14.75,8.4L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56Zm-10.9,27.15-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9Z"
    }, null, -1),
    dm = [cm],
    um = {
        key: 3
    },
    pm = n("path", {
        d: "M229.12,142.65a22.43,22.43,0,0,0-19.55-3.88l-4.32,1C227,119.55,238,99.51,238,80c0-25.36-20.39-46-45.46-46A45.51,45.51,0,0,0,156,52a45.51,45.51,0,0,0-36.54-18C94.39,34,74,54.64,74,80c0,11.38,3.63,22.49,11.29,34.36a29.73,29.73,0,0,0-16.56,8.43L45.52,146H16A14,14,0,0,0,2,160v40a14,14,0,0,0,14,14H120a6,6,0,0,0,1.46-.18l64-16a7.16,7.16,0,0,0,.89-.3L225.17,181l.33-.15a22.6,22.6,0,0,0,3.62-38.18ZM119.46,46a33.16,33.16,0,0,1,31,20.28,6,6,0,0,0,11.1,0,33.16,33.16,0,0,1,31-20.28C210.68,46,226,61.57,226,80c0,20.24-16.18,43-46.8,65.75l-14.87,3.42A26,26,0,0,0,140,114H99.67C90.36,101.67,86,90.81,86,80,86,61.57,101.32,46,119.46,46ZM14,200V160a2,2,0,0,1,2-2H42v44H16A2,2,0,0,1,14,200Zm206.28-30-38.2,16.27L119.26,202H54V154.49l23.21-23.22A17.88,17.88,0,0,1,89.94,126H140a14,14,0,0,1,0,28H112a6,6,0,0,0,0,12h32a6,6,0,0,0,1.34-.15l67-15.41.24-.06A10.6,10.6,0,0,1,220.28,170Z"
    }, null, -1),
    fm = [pm],
    hm = {
        key: 4
    },
    mm = n("path", {
        d: "M230.33,141.06a24.34,24.34,0,0,0-18.61-4.77C230.5,117.33,240,98.48,240,80c0-26.47-21.29-48-47.46-48A47.58,47.58,0,0,0,156,48.75,47.58,47.58,0,0,0,119.46,32C93.29,32,72,53.53,72,80c0,11,3.24,21.69,10.06,33a31.87,31.87,0,0,0-14.75,8.4L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56ZM119.46,48A31.15,31.15,0,0,1,148.6,67a8,8,0,0,0,14.8,0,31.15,31.15,0,0,1,29.14-19C209.59,48,224,62.65,224,80c0,19.51-15.79,41.58-45.66,63.9l-11.09,2.55A28,28,0,0,0,140,112H100.68C92.05,100.36,88,90.12,88,80,88,62.65,102.41,48,119.46,48ZM16,160H40v40H16Zm203.43,8.21-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9Z"
    }, null, -1),
    gm = [mm],
    vm = {
        key: 5
    },
    ym = n("path", {
        d: "M227.9,144.24a20.45,20.45,0,0,0-17.84-3.53l-11.95,2.75C223.26,121.88,236,100.58,236,80c0-24.26-19.5-44-43.46-44A43.41,43.41,0,0,0,156,55.44,43.41,43.41,0,0,0,119.46,36C95.5,36,76,55.74,76,80c0,11.85,4.11,23.44,12.81,36a27.8,27.8,0,0,0-18.67,8.17L46.34,148H16A12,12,0,0,0,4,160v40a12,12,0,0,0,12,12H120a4,4,0,0,0,1-.12l64-16a4.69,4.69,0,0,0,.6-.2l38.82-16.54.22-.1a20.6,20.6,0,0,0,3.29-34.8ZM119.46,44A35.15,35.15,0,0,1,152.3,65.52a4,4,0,0,0,7.4,0A35.15,35.15,0,0,1,192.54,44C211.76,44,228,60.49,228,80c0,21.27-16.13,44-47.94,67.61L160.75,152A23.76,23.76,0,0,0,164,140a24,24,0,0,0-24-24H98.69C88.69,103,84,91.5,84,80,84,60.49,100.24,44,119.46,44ZM12,200V160a4,4,0,0,1,4-4H44v48H16A4,4,0,0,1,12,200Zm209.13-28.17L182.72,188.2,119.51,204H52V153.66l23.8-23.8A19.86,19.86,0,0,1,89.94,124H140a16,16,0,0,1,0,32H112a4,4,0,0,0,0,8h32a3.94,3.94,0,0,0,.9-.1l67-15.41.16,0a12.6,12.6,0,0,1,9,23.38Z"
    }, null, -1),
    _m = [ym],
    xm = {
        name: "PhHandHeart"
    },
    bm = H({
        ...xm,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", tm, am)) : l.value === "duotone" ? (u(), p("g", im, lm)) : l.value === "fill" ? (u(), p("g", rm, dm)) : l.value === "light" ? (u(), p("g", um, fm)) : l.value === "regular" ? (u(), p("g", hm, gm)) : l.value === "thin" ? (u(), p("g", vm, _m)) : D("", !0)], 16, em))
        }
    }),
    wm = ["width", "height", "fill", "transform"],
    $m = {
        key: 0
    },
    Am = n("path", {
        d: "M123.64,218.91A12,12,0,0,1,112,228a12.28,12.28,0,0,1-2.92-.36l-32-8A11.79,11.79,0,0,1,73.34,218l-24-16a12,12,0,0,1,13.32-20l22.27,14.85,30,7.5A12,12,0,0,1,123.64,218.91ZM255,122.75a19.88,19.88,0,0,1-10,11.56l-22.87,11.44-53.58,54.73a12,12,0,0,1-11.4,3.16l-64-16a12.16,12.16,0,0,1-4.17-1.95L35,146.28l-23.94-12a20,20,0,0,1-9-26.83L27,57.79h0a20,20,0,0,1,26.83-8.94L74.42,59.16l50.21-14.68a12.07,12.07,0,0,1,6.74,0l50.21,14.68,20.63-10.32A20,20,0,0,1,229,57.79l24.85,49.69A19.86,19.86,0,0,1,255,122.75ZM200.3,134l-25-50H148.86l-38.2,37.05c15.76,7.26,31.16.19,40.82-9.55a12,12,0,0,1,16-.91l31.26,25ZM25.37,114.63,35.9,119.9,57.17,77.37,46.63,72.1ZM182,153,160.3,135.57c-20.49,15.29-45.85,16.79-67,3.25a20,20,0,0,1-3.4-31l.12-.12L129.82,69,128,68.5,81.66,82.05,56.54,132.29l44.65,32.64,55.13,13.78Zm48.59-38.36L209.37,72.1l-10.54,5.27L220.1,119.9Z"
    }, null, -1),
    Sm = [Am],
    Mm = {
        key: 1
    },
    Cm = n("path", {
        d: "M200,152l-40,40L96,176,40,136,72,72l56-16,56,16H144L98.34,116.29a8,8,0,0,0,1.38,12.42C117.23,139.9,141,139.13,160,120Z",
        opacity: "0.2"
    }, null, -1),
    Hm = n("path", {
        d: "M119.76,217.94A8,8,0,0,1,112,224a8.13,8.13,0,0,1-2-.24l-32-8a8,8,0,0,1-2.5-1.11l-24-16a8,8,0,1,1,8.88-13.31l22.84,15.23,30.66,7.67A8,8,0,0,1,119.76,217.94Zm132.69-96.46a15.89,15.89,0,0,1-8,9.25l-23.68,11.84-55.08,55.09a8,8,0,0,1-7.6,2.1l-64-16a8.06,8.06,0,0,1-2.71-1.25L35.86,142.87,11.58,130.73a16,16,0,0,1-7.16-21.46L29.27,59.58h0a16,16,0,0,1,21.46-7.16l22.06,11,53-15.14a8,8,0,0,1,4.4,0l53,15.14,22.06-11a16,16,0,0,1,21.46,7.16l24.85,49.69A15.9,15.9,0,0,1,252.45,121.48Zm-46.18,12.94L179.06,80H147.24L104,122c12.66,8.09,32.51,10.32,50.32-7.63a8,8,0,0,1,10.68-.61l34.41,27.57Zm-187.54-18,17.69,8.85L61.27,75.58,43.58,66.73ZM188,152.66l-27.71-22.19c-19.54,16-44.35,18.11-64.91,5a16,16,0,0,1-2.72-24.82.6.6,0,0,1,.08-.08L137.6,67.06,128,64.32,77.58,78.73,50.21,133.46l49.2,35.15,58.14,14.53Zm49.24-36.24L212.42,66.73l-17.69,8.85,24.85,49.69Z"
    }, null, -1),
    Zm = [Cm, Hm],
    Tm = {
        key: 2
    },
    Vm = n("path", {
        d: "M119.76,217.94A8,8,0,0,1,112,224a8.13,8.13,0,0,1-2-.24l-32-8a8,8,0,0,1-2.5-1.11l-24-16a8,8,0,1,1,8.88-13.31l22.84,15.23,30.66,7.67A8,8,0,0,1,119.76,217.94Zm132.69-96.46a15.89,15.89,0,0,1-8,9.25l-23.68,11.84-15.08,15.09-40,40a8,8,0,0,1-7.6,2.1l-64-16a8.06,8.06,0,0,1-2.71-1.25L35.86,142.87,11.58,130.73a16,16,0,0,1-7.16-21.46L29.27,59.58h0a16,16,0,0,1,21.46-7.16l22.06,11,53-15.14a8,8,0,0,1,4.4,0l53,15.14,22.06-11a16,16,0,0,1,21.46,7.16l24.85,49.69A15.9,15.9,0,0,1,252.45,121.48ZM188,152.66l-27.71-22.19c-19.54,16-44.35,18.11-64.91,5a16,16,0,0,1-2.72-24.82.6.6,0,0,1,.08-.08L137.6,67.06,128,64.32,77.58,78.73,50.21,133.46l49.2,35.15,58.14,14.53Zm18.24-18.24L179.06,80H147.24L104,122c12.66,8.09,32.51,10.32,50.32-7.63a8,8,0,0,1,10.68-.61l34.41,27.57Z"
    }, null, -1),
    km = [Vm],
    Pm = {
        key: 3
    },
    Lm = n("path", {
        d: "M117.82,217.45A6,6,0,0,1,112,222a6.14,6.14,0,0,1-1.46-.18l-32-8a6.15,6.15,0,0,1-1.87-.83l-24-16a6,6,0,0,1,6.66-10l23.13,15.42,31,7.75A6,6,0,0,1,117.82,217.45Zm132.73-96.6a13.89,13.89,0,0,1-7,8.09l-24,12-55.31,55.31A6,6,0,0,1,160,198a6.08,6.08,0,0,1-1.46-.18l-64-16a6,6,0,0,1-2-.94L36.9,141.16,12.47,128.94a14,14,0,0,1-6.26-18.78L31.06,60.47h0a14,14,0,0,1,18.78-6.26L72.6,65.59l53.75-15.36a6,6,0,0,1,3.3,0L183.4,65.59l22.76-11.38a14,14,0,0,1,18.78,6.26l24.85,49.69A13.93,13.93,0,0,1,250.55,120.85ZM17.84,118.21,37.32,128,64,74.68,44.47,64.94a2,2,0,0,0-2.68.9L16.94,115.53a2,2,0,0,0-.1,1.52A1.92,1.92,0,0,0,17.84,118.21ZM191,152.49l-30.73-24.61c-19,16.38-43.58,18.8-63.8,5.88a14,14,0,0,1-2.39-21.71l45.72-44.36a6,6,0,0,1,2.35-1.4L128,62.24,76.19,77,47.66,134.1l50.9,36.35,59.6,14.9Zm17.68-17.68L180.29,78H146.43l-43.91,42.6a1.9,1.9,0,0,0-.51,1.55,2,2,0,0,0,.94,1.5c13.29,8.49,34.14,10.87,52.79-7.92a6,6,0,0,1,8-.45L199.56,144Zm30.36-19.28L214.21,65.84a2,2,0,0,0-2.68-.9l-19.48,9.74L218.68,128l19.48-9.74a1.92,1.92,0,0,0,1-1.16A2,2,0,0,0,239.06,115.53Z"
    }, null, -1),
    Em = [Lm],
    Bm = {
        key: 4
    },
    Im = n("path", {
        d: "M119.76,217.94A8,8,0,0,1,112,224a8.13,8.13,0,0,1-2-.24l-32-8a8,8,0,0,1-2.5-1.11l-24-16a8,8,0,1,1,8.88-13.31l22.84,15.23,30.66,7.67A8,8,0,0,1,119.76,217.94Zm132.69-96.46a15.89,15.89,0,0,1-8,9.25l-23.68,11.84-55.08,55.09a8,8,0,0,1-7.6,2.1l-64-16a8.06,8.06,0,0,1-2.71-1.25L35.86,142.87,11.58,130.73a16,16,0,0,1-7.16-21.46L29.27,59.58h0a16,16,0,0,1,21.46-7.16l22.06,11,53-15.14a8,8,0,0,1,4.4,0l53,15.14,22.06-11a16,16,0,0,1,21.46,7.16l24.85,49.69A15.9,15.9,0,0,1,252.45,121.48Zm-46.18,12.94L179.06,80H147.24L104,122c12.66,8.09,32.51,10.32,50.32-7.63a8,8,0,0,1,10.68-.61l34.41,27.57Zm-187.54-18,17.69,8.85L61.27,75.58,43.58,66.73ZM188,152.66l-27.71-22.19c-19.54,16-44.35,18.11-64.91,5a16,16,0,0,1-2.72-24.82.6.6,0,0,1,.08-.08L137.6,67.06,128,64.32,77.58,78.73,50.21,133.46l49.2,35.15,58.14,14.53Zm49.24-36.24L212.42,66.73l-17.69,8.85,24.85,49.69Z"
    }, null, -1),
    Om = [Im],
    Nm = {
        key: 5
    },
    zm = n("path", {
        d: "M115.88,217a4,4,0,0,1-3.88,3,4.09,4.09,0,0,1-1-.12l-32-8a4,4,0,0,1-1.25-.55l-24-16a4,4,0,0,1,4.44-6.66l23.42,15.62L113,212.12A4,4,0,0,1,115.88,217Zm132.77-96.75a11.88,11.88,0,0,1-6,6.93l-24.26,12.14-55.54,55.54a4,4,0,0,1-3.8,1l-64-16a3.84,3.84,0,0,1-1.36-.63L37.93,139.44,13.37,127.15A12,12,0,0,1,8,111.05L32.84,61.37h0A12,12,0,0,1,48.94,56L72.4,67.73l54.5-15.58a4.11,4.11,0,0,1,2.2,0l54.5,15.58L207.06,56a12,12,0,0,1,16.1,5.37L248,111.06A11.9,11.9,0,0,1,248.65,120.22ZM16.94,120l21.27,10.63L66.63,73.79,45.37,63.16A4,4,0,0,0,40,64.94L15.16,114.63A4,4,0,0,0,16.94,120ZM194,152.33l-33.78-27.06c-18.53,16.76-42.78,19.51-62.66,6.81a12,12,0,0,1-2.06-18.62l45.7-44.33A4,4,0,0,1,144,68h11.44L128,60.16,74.79,75.36,45.11,134.73l52.6,37.57,61.06,15.27Zm17.12-17.12L181.53,76H145.62l-44.49,43.16a3.89,3.89,0,0,0-1.11,3.2,4.07,4.07,0,0,0,1.85,3c13.95,8.91,35.8,11.44,55.29-8.2a4,4,0,0,1,5.34-.3l37.21,29.8Zm29.71-20.58L216,64.94a4,4,0,0,0-5.37-1.78L189.37,73.79l28.42,56.84L239.06,120a4,4,0,0,0,1.78-5.37Z"
    }, null, -1),
    jm = [zm],
    Rm = {
        name: "PhHandshake"
    },
    Oa = H({
        ...Rm,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", $m, Sm)) : l.value === "duotone" ? (u(), p("g", Mm, Zm)) : l.value === "fill" ? (u(), p("g", Tm, km)) : l.value === "light" ? (u(), p("g", Pm, Em)) : l.value === "regular" ? (u(), p("g", Bm, Om)) : l.value === "thin" ? (u(), p("g", Nm, jm)) : D("", !0)], 16, wm))
        }
    }),
    Dm = ["width", "height", "fill", "transform"],
    Fm = {
        key: 0
    },
    qm = n("path", {
        d: "M204.73,59.85A108.07,108.07,0,0,0,20,136v56a28,28,0,0,0,28,28H64a28,28,0,0,0,28-28V152a28,28,0,0,0-28-28H44.84A84.05,84.05,0,0,1,128,52h.64a83.7,83.7,0,0,1,82.52,72H192a28,28,0,0,0-28,28v40a28,28,0,0,0,28,28h16a28,28,0,0,0,28-28V136A107.34,107.34,0,0,0,204.73,59.85ZM64,148a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V148Zm148,44a4,4,0,0,1-4,4H192a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h20Z"
    }, null, -1),
    Wm = [qm],
    Gm = {
        key: 1
    },
    Um = n("path", {
        d: "M80,152v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V136H64A16,16,0,0,1,80,152Zm112-16a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V136Z",
        opacity: "0.2"
    }, null, -1),
    Ym = n("path", {
        d: "M201.89,62.66A104.08,104.08,0,0,0,24,136v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V152a24,24,0,0,0-24-24H40.36A88,88,0,0,1,128,48h.67a87.71,87.71,0,0,1,87,80H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h16a24,24,0,0,0,24-24V136A103.41,103.41,0,0,0,201.89,62.66ZM64,144a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V144Zm152,48a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h24Z"
    }, null, -1),
    Km = [Um, Ym],
    Jm = {
        key: 2
    },
    Qm = n("path", {
        d: "M232,136v56a24,24,0,0,1-24,24H192a24,24,0,0,1-24-24V152a24,24,0,0,1,24-24h23.65a87.71,87.71,0,0,0-87-80H128a88,88,0,0,0-87.64,80H64a24,24,0,0,1,24,24v40a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V136A104.11,104.11,0,0,1,201.89,62.66,103.41,103.41,0,0,1,232,136Z"
    }, null, -1),
    Xm = [Qm],
    eg = {
        key: 3
    },
    tg = n("path", {
        d: "M200.47,64.07A101.37,101.37,0,0,0,128.77,34H128A102,102,0,0,0,26,136v56a22,22,0,0,0,22,22H64a22,22,0,0,0,22-22V152a22,22,0,0,0-22-22H38.2A90.12,90.12,0,0,1,192,72.52,89.41,89.41,0,0,1,217.81,130H192a22,22,0,0,0-22,22v40a22,22,0,0,0,22,22h16a22,22,0,0,0,22-22V136A101.44,101.44,0,0,0,200.47,64.07ZM64,142a10,10,0,0,1,10,10v40a10,10,0,0,1-10,10H48a10,10,0,0,1-10-10V142Zm154,50a10,10,0,0,1-10,10H192a10,10,0,0,1-10-10V152a10,10,0,0,1,10-10h26Z"
    }, null, -1),
    sg = [tg],
    ag = {
        key: 4
    },
    ig = n("path", {
        d: "M201.89,62.66A103.43,103.43,0,0,0,128.79,32H128A104,104,0,0,0,24,136v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V152a24,24,0,0,0-24-24H40.36A88,88,0,0,1,128,48h.67a87.71,87.71,0,0,1,87,80H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h16a24,24,0,0,0,24-24V136A103.41,103.41,0,0,0,201.89,62.66ZM64,144a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V144Zm152,48a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h24Z"
    }, null, -1),
    ng = [ig],
    og = {
        key: 5
    },
    lg = n("path", {
        d: "M199.05,65.48A100.07,100.07,0,0,0,28,136v56a20,20,0,0,0,20,20H64a20,20,0,0,0,20-20V152a20,20,0,0,0-20-20H36.08A92,92,0,0,1,128,44h.7a91.75,91.75,0,0,1,91.22,88H192a20,20,0,0,0-20,20v40a20,20,0,0,0,20,20h16a20,20,0,0,0,20-20V136A99.43,99.43,0,0,0,199.05,65.48ZM64,140a12,12,0,0,1,12,12v40a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V140Zm156,52a12,12,0,0,1-12,12H192a12,12,0,0,1-12-12V152a12,12,0,0,1,12-12h28Z"
    }, null, -1),
    rg = [lg],
    cg = {
        name: "PhHeadphones"
    },
    Ao = H({
        ...cg,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", Fm, Wm)) : l.value === "duotone" ? (u(), p("g", Gm, Km)) : l.value === "fill" ? (u(), p("g", Jm, Xm)) : l.value === "light" ? (u(), p("g", eg, sg)) : l.value === "regular" ? (u(), p("g", ag, ng)) : l.value === "thin" ? (u(), p("g", og, rg)) : D("", !0)], 16, Dm))
        }
    }),
    dg = ["width", "height", "fill", "transform"],
    ug = {
        key: 0
    },
    pg = n("path", {
        d: "M71.76,140H31.7a12,12,0,1,1,0-24H65.33L77.78,97.34a12,12,0,0,1,20,0l22,33,6-9a12,12,0,0,1,10-5.34h24a12,12,0,1,1,0,24h-17.6l-12.46,18.66a12,12,0,0,1-20,0l-22-33-6,9A12,12,0,0,1,71.76,140ZM177.91,28c-20.12,0-38,7.93-50.07,21.56C115.74,35.93,97.89,28,77.76,28A66,66,0,0,0,12.07,86.68,12,12,0,0,0,36,89.32,42,42,0,0,1,77.76,52c17.83,0,32.75,9.4,38.95,24.54a12,12,0,0,0,22.25,0C145.16,61.4,160.08,52,177.91,52A42.08,42.08,0,0,1,220,94c0,29.42-25.86,57.77-47.56,76.36a329,329,0,0,1-44.58,31.81c-10.87-6.45-35.37-22-56.51-42.73a12,12,0,1,0-16.84,17.12c30.39,29.81,66.15,49.2,67.66,50a12.06,12.06,0,0,0,11.39,0C138,224.14,244,166.34,244,94A66.12,66.12,0,0,0,177.91,28Z"
    }, null, -1),
    fg = [pg],
    hg = {
        key: 1
    },
    mg = n("path", {
        d: "M232,94c0,66-104,122-104,122S24,160,24,94A54,54,0,0,1,78,40c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32A54,54,0,0,1,232,94Z",
        opacity: "0.2"
    }, null, -1),
    gg = n("path", {
        d: "M72,136H32a8,8,0,0,1,0-16H67.72L81.34,99.56a8,8,0,0,1,13.32,0l25.34,38,9.34-14A8,8,0,0,1,136,120h24a8,8,0,0,1,0,16H140.28l-13.62,20.44a8,8,0,0,1-13.32,0L88,118.42l-9.34,14A8,8,0,0,1,72,136ZM178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,.75,0,1.5,0,2.25a8,8,0,1,0,16-.5c0-.58,0-1.17,0-1.75A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46c0,53.61-77.76,102.15-96,112.8-10.83-6.31-42.63-26-66.68-52.21a8,8,0,1,0-11.8,10.82c31.17,34,72.93,56.68,74.69,57.63a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32Z"
    }, null, -1),
    vg = [mg, gg],
    yg = {
        key: 2
    },
    _g = n("path", {
        d: "M240,94c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0c-3.35-1.8-63.55-34.69-92.68-80.89A4,4,0,0,1,34.92,136H72a8,8,0,0,0,6.66-3.56l9.34-14,25.34,38a8,8,0,0,0,9.16,3.16,8.23,8.23,0,0,0,4.28-3.34L140.28,136H160a8,8,0,0,0,8-8.53,8.18,8.18,0,0,0-8.25-7.47H136a8,8,0,0,0-6.66,3.56l-9.34,14-25.34-38a8,8,0,0,0-9.17-3.16,8.25,8.25,0,0,0-4.27,3.34L67.72,120H23.53a4,4,0,0,1-3.83-2.81A76.93,76.93,0,0,1,16,94,62.07,62.07,0,0,1,78,32c20.65,0,38.73,8.88,50,23.89C139.27,40.88,157.35,32,178,32A62.07,62.07,0,0,1,240,94Z"
    }, null, -1),
    xg = [_g],
    bg = {
        key: 3
    },
    wg = n("path", {
        d: "M72,134H32a6,6,0,0,1,0-12H68.79L83,100.67a6,6,0,0,1,10,0l27,40.51,11-16.51a6,6,0,0,1,5-2.67h24a6,6,0,0,1,0,12H139.21L125,155.33a6,6,0,0,1-10,0L88,114.82,77,131.33A6,6,0,0,1,72,134ZM178,34c-21,0-39.26,9.47-50,25.34C117.26,43.47,99,34,78,34A60.07,60.07,0,0,0,18,94q0,1.09,0,2.19a6,6,0,1,0,12-.38c0-.6,0-1.21,0-1.81A48.05,48.05,0,0,1,78,46c20.28,0,37.31,10.83,44.45,28.27a6,6,0,0,0,11.1,0C140.69,56.83,157.72,46,178,46a48.05,48.05,0,0,1,48,48c0,55.73-81.61,105.65-98,115.11-9.84-5.66-43.09-25.82-68.16-53.16a6,6,0,1,0-8.84,8.1c30.94,33.77,72.41,56.29,74.16,57.23a6,6,0,0,0,5.68,0,334.68,334.68,0,0,0,53.06-37C219.8,153.59,238,123.2,238,94A60.07,60.07,0,0,0,178,34Z"
    }, null, -1),
    $g = [wg],
    Ag = {
        key: 4
    },
    Sg = n("path", {
        d: "M72,136H32a8,8,0,0,1,0-16H67.72L81.34,99.56a8,8,0,0,1,13.32,0l25.34,38,9.34-14A8,8,0,0,1,136,120h24a8,8,0,0,1,0,16H140.28l-13.62,20.44a8,8,0,0,1-13.32,0L88,118.42l-9.34,14A8,8,0,0,1,72,136ZM178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,.75,0,1.5,0,2.25a8,8,0,1,0,16-.5c0-.58,0-1.17,0-1.75A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46c0,53.61-77.76,102.15-96,112.8-10.83-6.31-42.63-26-66.68-52.21a8,8,0,1,0-11.8,10.82c31.17,34,72.93,56.68,74.69,57.63a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32Z"
    }, null, -1),
    Mg = [Sg],
    Cg = {
        key: 5
    },
    Hg = n("path", {
        d: "M72,132H32a4,4,0,0,1,0-8H69.86l14.81-22.22a4,4,0,0,1,6.66,0l28.67,43,12.67-19A4,4,0,0,1,136,124h24a4,4,0,0,1,0,8H138.14l-14.81,22.22a4,4,0,0,1-6.66,0L88,111.21l-12.67,19A4,4,0,0,1,72,132ZM178,36c-21.44,0-39.92,10.19-50,27.07C117.92,46.19,99.44,36,78,36A58.07,58.07,0,0,0,20,94q0,1.06,0,2.13a4,4,0,0,0,8-.26c0-.62,0-1.24,0-1.87A50.06,50.06,0,0,1,78,44c21.11,0,38.85,11.31,46.3,29.51a4,4,0,0,0,7.4,0C139.15,55.31,156.89,44,178,44a50.06,50.06,0,0,1,50,50c0,58-86,109.46-100,117.42-8.47-4.82-43.5-25.61-69.63-54.12a4,4,0,0,0-5.9,5.4c30.72,33.52,71.9,55.89,73.63,56.82a4,4,0,0,0,3.8,0,333.81,333.81,0,0,0,52.7-36.73C218,152.47,236,122.59,236,94A58.07,58.07,0,0,0,178,36Z"
    }, null, -1),
    Zg = [Hg],
    Tg = {
        name: "PhHeartbeat"
    },
    So = H({
        ...Tg,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", ug, fg)) : l.value === "duotone" ? (u(), p("g", hg, vg)) : l.value === "fill" ? (u(), p("g", yg, xg)) : l.value === "light" ? (u(), p("g", bg, $g)) : l.value === "regular" ? (u(), p("g", Ag, Mg)) : l.value === "thin" ? (u(), p("g", Cg, Zg)) : D("", !0)], 16, dg))
        }
    }),
    Vg = ["width", "height", "fill", "transform"],
    kg = {
        key: 0
    },
    Pg = n("path", {
        d: "M221.56,100.85,141.61,25.38l-.16-.15a19.93,19.93,0,0,0-26.91,0l-.17.15L34.44,100.85A20.07,20.07,0,0,0,28,115.55V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V115.55A20.07,20.07,0,0,0,221.56,100.85ZM204,204H52V117.28l76-71.75,76,71.75Z"
    }, null, -1),
    Lg = [Pg],
    Eg = {
        key: 1
    },
    Bg = n("path", {
        d: "M216,115.54V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.54a8,8,0,0,1,2.62-5.92l80-75.54a8,8,0,0,1,10.77,0l80,75.54A8,8,0,0,1,216,115.54Z",
        opacity: "0.2"
    }, null, -1),
    Ig = n("path", {
        d: "M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"
    }, null, -1),
    Og = [Bg, Ig],
    Ng = {
        key: 2
    },
    zg = n("path", {
        d: "M224,115.55V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"
    }, null, -1),
    jg = [zg],
    Rg = {
        key: 3
    },
    Dg = n("path", {
        d: "M217.47,105.23l-80-75.49-.09-.08a13.94,13.94,0,0,0-18.83,0l-.09.08-80,75.5A14,14,0,0,0,34,115.55V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V115.55A14.06,14.06,0,0,0,217.47,105.23ZM210,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V115.55a2,2,0,0,1,.65-1.48l.09-.08,79.94-75.48a2,2,0,0,1,2.63,0L209.26,114l.08.08a2,2,0,0,1,.66,1.48Z"
    }, null, -1),
    Fg = [Dg],
    qg = {
        key: 4
    },
    Wg = n("path", {
        d: "M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"
    }, null, -1),
    Gg = [Wg],
    Ug = {
        key: 5
    },
    Yg = n("path", {
        d: "M216.13,106.72l-80-75.54-.05-.05a12,12,0,0,0-16.2.05L39.93,106.67A12,12,0,0,0,36,115.54V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V115.54A12,12,0,0,0,216.13,106.72ZM212,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V115.54a4.09,4.09,0,0,1,1.36-3L125.3,37.05a4,4,0,0,1,5.36,0l80,75.55a4,4,0,0,1,1.31,3Z"
    }, null, -1),
    Kg = [Yg],
    Jg = {
        name: "PhHouseSimple"
    },
    Mo = H({
        ...Jg,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", kg, Lg)) : l.value === "duotone" ? (u(), p("g", Eg, Og)) : l.value === "fill" ? (u(), p("g", Ng, jg)) : l.value === "light" ? (u(), p("g", Rg, Fg)) : l.value === "regular" ? (u(), p("g", qg, Gg)) : l.value === "thin" ? (u(), p("g", Ug, Kg)) : D("", !0)], 16, Vg))
        }
    }),
    Qg = ["width", "height", "fill", "transform"],
    Xg = {
        key: 0
    },
    e7 = n("path", {
        d: "M180,232a12,12,0,0,1-12,12H88a12,12,0,0,1,0-24h80A12,12,0,0,1,180,232Zm40-128a92.47,92.47,0,0,1-37,73.73,7.81,7.81,0,0,0-3,6.27,20,20,0,0,1-20,20H96a20,20,0,0,1-20-20v-.23a7.76,7.76,0,0,0-3.25-6.2,91.36,91.36,0,0,1-36.75-73C35.73,54.69,76,13.2,125.79,12A92,92,0,0,1,220,104Zm-24,0a68,68,0,0,0-69.65-68C89.56,36.89,59.8,67.56,60,104.39a67.52,67.52,0,0,0,27.18,54h0A32.14,32.14,0,0,1,99.77,180H116V149L87.51,120.49a12,12,0,0,1,17-17L128,127l23.51-23.51a12,12,0,0,1,17,17L140,149v31h16.25a31.89,31.89,0,0,1,12.41-21.49A67.45,67.45,0,0,0,196,104Z"
    }, null, -1),
    t7 = [e7],
    s7 = {
        key: 1
    },
    a7 = n("path", {
        d: "M208,104a79.86,79.86,0,0,1-30.59,62.92A24.29,24.29,0,0,0,168,186v6a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-6a24.11,24.11,0,0,0-9.3-19A79.87,79.87,0,0,1,48,104.45C47.76,61.09,82.72,25,126.07,24A80,80,0,0,1,208,104Z",
        opacity: "0.2"
    }, null, -1),
    i7 = n("path", {
        d: "M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.5C39.74,56.83,78.26,17.15,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.64,71.64,0,0,0,27.64,56.3h0A32,32,0,0,1,96,186v6h24V147.31L90.34,117.66a8,8,0,0,1,11.32-11.32L128,132.69l26.34-26.35a8,8,0,0,1,11.32,11.32L136,147.31V192h24v-6a32.12,32.12,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Z"
    }, null, -1),
    n7 = [a7, i7],
    o7 = {
        key: 2
    },
    l7 = n("path", {
        d: "M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-50.34,2.34a8,8,0,0,0-11.32,0L128,132.69l-26.34-26.35a8,8,0,0,0-11.32,11.32L120,147.31V184a8,8,0,0,0,16,0V147.31l29.66-29.65A8,8,0,0,0,165.66,106.34Z"
    }, null, -1),
    r7 = [l7],
    c7 = {
        key: 3
    },
    d7 = n("path", {
        d: "M174,232a6,6,0,0,1-6,6H88a6,6,0,0,1,0-12h80A6,6,0,0,1,174,232Zm40-128a85.56,85.56,0,0,1-32.88,67.64A18.23,18.23,0,0,0,174,186v6a14,14,0,0,1-14,14H96a14,14,0,0,1-14-14v-6a18,18,0,0,0-7-14.23h0a85.59,85.59,0,0,1-33-67.25C41.74,57.91,79.39,19.12,125.93,18A86,86,0,0,1,214,104Zm-12,0a74,74,0,0,0-75.79-74C86.17,31,53.78,64.34,54,104.42a73.67,73.67,0,0,0,28.4,57.87A29.92,29.92,0,0,1,94,186v6a2,2,0,0,0,2,2h26V146.49L91.76,116.24a6,6,0,0,1,8.48-8.48L128,135.52l27.76-27.76a6,6,0,0,1,8.48,8.48L134,146.49V194h26a2,2,0,0,0,2-2v-6a30.18,30.18,0,0,1,11.7-23.78A73.59,73.59,0,0,0,202,104Z"
    }, null, -1),
    u7 = [d7],
    p7 = {
        key: 4
    },
    f7 = n("path", {
        d: "M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.5C39.74,56.83,78.26,17.15,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.64,71.64,0,0,0,27.64,56.3h0A32,32,0,0,1,96,186v6h24V147.31L90.34,117.66a8,8,0,0,1,11.32-11.32L128,132.69l26.34-26.35a8,8,0,0,1,11.32,11.32L136,147.31V192h24v-6a32.12,32.12,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Z"
    }, null, -1),
    h7 = [f7],
    m7 = {
        key: 5
    },
    g7 = n("path", {
        d: "M172,232a4,4,0,0,1-4,4H88a4,4,0,0,1,0-8h80A4,4,0,0,1,172,232Zm40-128a83.59,83.59,0,0,1-32.11,66.06A20.2,20.2,0,0,0,172,186v6a12,12,0,0,1-12,12H96a12,12,0,0,1-12-12v-6a20,20,0,0,0-7.76-15.81A83.58,83.58,0,0,1,44,104.47C43.75,59,80.52,21.09,126,20a84,84,0,0,1,86,84Zm-8,0a76,76,0,0,0-77.84-76C85,29,51.77,63.27,52,104.43a75.62,75.62,0,0,0,29.17,59.43A28,28,0,0,1,92,186v6a4,4,0,0,0,4,4h28V145.66L93.17,114.83a4,4,0,0,1,5.66-5.66L128,138.34l29.17-29.17a4,4,0,1,1,5.66,5.66L132,145.66V196h28a4,4,0,0,0,4-4v-6a28.14,28.14,0,0,1,10.94-22.2A75.62,75.62,0,0,0,204,104Z"
    }, null, -1),
    v7 = [g7],
    y7 = {
        name: "PhLightbulbFilament"
    },
    Co = H({
        ...y7,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", Xg, t7)) : l.value === "duotone" ? (u(), p("g", s7, n7)) : l.value === "fill" ? (u(), p("g", o7, r7)) : l.value === "light" ? (u(), p("g", c7, u7)) : l.value === "regular" ? (u(), p("g", p7, h7)) : l.value === "thin" ? (u(), p("g", m7, v7)) : D("", !0)], 16, Qg))
        }
    }),
    _7 = ["width", "height", "fill", "transform"],
    x7 = {
        key: 0
    },
    b7 = n("path", {
        d: "M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"
    }, null, -1),
    w7 = [b7],
    $7 = {
        key: 1
    },
    A7 = n("path", {
        d: "M216,64V192H40V64Z",
        opacity: "0.2"
    }, null, -1),
    S7 = n("path", {
        d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"
    }, null, -1),
    M7 = [A7, S7],
    C7 = {
        key: 2
    },
    H7 = n("path", {
        d: "M224,120v16a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a8,8,0,0,1,8-8H216A8,8,0,0,1,224,120Zm-8,56H40a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V184A8,8,0,0,0,216,176Zm0-128H40a8,8,0,0,0-8,8V72a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48Z"
    }, null, -1),
    Z7 = [H7],
    T7 = {
        key: 3
    },
    V7 = n("path", {
        d: "M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM40,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z"
    }, null, -1),
    k7 = [V7],
    P7 = {
        key: 4
    },
    L7 = n("path", {
        d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"
    }, null, -1),
    E7 = [L7],
    B7 = {
        key: 5
    },
    I7 = n("path", {
        d: "M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM40,68H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8ZM216,188H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z"
    }, null, -1),
    O7 = [I7],
    N7 = {
        name: "PhList"
    },
    z7 = H({
        ...N7,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", x7, w7)) : l.value === "duotone" ? (u(), p("g", $7, M7)) : l.value === "fill" ? (u(), p("g", C7, Z7)) : l.value === "light" ? (u(), p("g", T7, k7)) : l.value === "regular" ? (u(), p("g", P7, E7)) : l.value === "thin" ? (u(), p("g", B7, O7)) : D("", !0)], 16, _7))
        }
    }),
    j7 = ["width", "height", "fill", "transform"],
    R7 = {
        key: 0
    },
    D7 = n("path", {
        d: "M208,76H180V56A52,52,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76ZM100,56a28,28,0,0,1,56,0V76H100ZM204,204H52V100H204Zm-60-52a16,16,0,1,1-16-16A16,16,0,0,1,144,152Z"
    }, null, -1),
    F7 = [D7],
    q7 = {
        key: 1
    },
    W7 = n("path", {
        d: "M216,96V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H208A8,8,0,0,1,216,96Z",
        opacity: "0.2"
    }, null, -1),
    G7 = n("path", {
        d: "M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"
    }, null, -1),
    U7 = [W7, G7],
    Y7 = {
        key: 2
    },
    K7 = n("path", {
        d: "M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm32-84H96V56a32,32,0,0,1,64,0Z"
    }, null, -1),
    J7 = [K7],
    Q7 = {
        key: 3
    },
    X7 = n("path", {
        d: "M208,82H174V56a46,46,0,0,0-92,0V82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82ZM94,56a34,34,0,0,1,68,0V82H94ZM210,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Zm-72-56a10,10,0,1,1-10-10A10,10,0,0,1,138,152Z"
    }, null, -1),
    e9 = [X7],
    t9 = {
        key: 4
    },
    s9 = n("path", {
        d: "M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"
    }, null, -1),
    a9 = [s9],
    i9 = {
        key: 5
    },
    n9 = n("path", {
        d: "M208,84H172V56a44,44,0,0,0-88,0V84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84ZM92,56a36,36,0,0,1,72,0V84H92ZM212,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-76-56a8,8,0,1,1-8-8A8,8,0,0,1,136,152Z"
    }, null, -1),
    o9 = [n9],
    l9 = {
        name: "PhLock"
    },
    Ho = H({
        ...l9,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", R7, F7)) : l.value === "duotone" ? (u(), p("g", q7, U7)) : l.value === "fill" ? (u(), p("g", Y7, J7)) : l.value === "light" ? (u(), p("g", Q7, e9)) : l.value === "regular" ? (u(), p("g", t9, a9)) : l.value === "thin" ? (u(), p("g", i9, o9)) : D("", !0)], 16, j7))
        }
    }),
    r9 = ["width", "height", "fill", "transform"],
    c9 = {
        key: 0
    },
    d9 = n("path", {
        d: "M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"
    }, null, -1),
    u9 = [d9],
    p9 = {
        key: 1
    },
    f9 = n("path", {
        d: "M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z",
        opacity: "0.2"
    }, null, -1),
    h9 = n("path", {
        d: "M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
    }, null, -1),
    m9 = [f9, h9],
    g9 = {
        key: 2
    },
    v9 = n("path", {
        d: "M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"
    }, null, -1),
    y9 = [v9],
    _9 = {
        key: 3
    },
    x9 = n("path", {
        d: "M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"
    }, null, -1),
    b9 = [x9],
    w9 = {
        key: 4
    },
    $9 = n("path", {
        d: "M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
    }, null, -1),
    A9 = [$9],
    S9 = {
        key: 5
    },
    M9 = n("path", {
        d: "M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z"
    }, null, -1),
    C9 = [M9],
    H9 = {
        name: "PhMagnifyingGlass"
    },
    Z9 = H({
        ...H9,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", c9, u9)) : l.value === "duotone" ? (u(), p("g", p9, m9)) : l.value === "fill" ? (u(), p("g", g9, y9)) : l.value === "light" ? (u(), p("g", _9, b9)) : l.value === "regular" ? (u(), p("g", w9, A9)) : l.value === "thin" ? (u(), p("g", S9, C9)) : D("", !0)], 16, r9))
        }
    }),
    T9 = ["width", "height", "fill", "transform"],
    V9 = {
        key: 0
    },
    k9 = n("path", {
        d: "M128,60a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,60Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,124Zm0-112a92.1,92.1,0,0,0-92,92c0,77.36,81.64,135.4,85.12,137.83a12,12,0,0,0,13.76,0,259,259,0,0,0,42.18-39C205.15,170.57,220,136.37,220,104A92.1,92.1,0,0,0,128,12Zm31.3,174.71A249.35,249.35,0,0,1,128,216.89a249.35,249.35,0,0,1-31.3-30.18C80,167.37,60,137.31,60,104a68,68,0,0,1,136,0C196,137.31,176,167.37,159.3,186.71Z"
    }, null, -1),
    P9 = [k9],
    L9 = {
        key: 1
    },
    E9 = n("path", {
        d: "M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z",
        opacity: "0.2"
    }, null, -1),
    B9 = n("path", {
        d: "M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"
    }, null, -1),
    I9 = [E9, B9],
    O9 = {
        key: 2
    },
    N9 = n("path", {
        d: "M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"
    }, null, -1),
    z9 = [N9],
    j9 = {
        key: 3
    },
    R9 = n("path", {
        d: "M128,66a38,38,0,1,0,38,38A38,38,0,0,0,128,66Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,128,130Zm0-112a86.1,86.1,0,0,0-86,86c0,30.91,14.34,63.74,41.47,94.94a252.32,252.32,0,0,0,41.09,38,6,6,0,0,0,6.88,0,252.32,252.32,0,0,0,41.09-38c27.13-31.2,41.47-64,41.47-94.94A86.1,86.1,0,0,0,128,18Zm0,206.51C113,212.93,54,163.62,54,104a74,74,0,0,1,148,0C202,163.62,143,212.93,128,224.51Z"
    }, null, -1),
    D9 = [R9],
    F9 = {
        key: 4
    },
    q9 = n("path", {
        d: "M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"
    }, null, -1),
    W9 = [q9],
    G9 = {
        key: 5
    },
    U9 = n("path", {
        d: "M128,68a36,36,0,1,0,36,36A36,36,0,0,0,128,68Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,128,132Zm0-112a84.09,84.09,0,0,0-84,84c0,30.42,14.17,62.79,41,93.62a250,250,0,0,0,40.73,37.66,4,4,0,0,0,4.58,0A250,250,0,0,0,171,197.62c26.81-30.83,41-63.2,41-93.62A84.09,84.09,0,0,0,128,20Zm37.1,172.23A254.62,254.62,0,0,1,128,227a254.62,254.62,0,0,1-37.1-34.81C73.15,171.8,52,139.9,52,104a76,76,0,0,1,152,0C204,139.9,182.85,171.8,165.1,192.23Z"
    }, null, -1),
    Y9 = [U9],
    K9 = {
        name: "PhMapPin"
    },
    g1 = H({
        ...K9,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", V9, P9)) : l.value === "duotone" ? (u(), p("g", L9, I9)) : l.value === "fill" ? (u(), p("g", O9, z9)) : l.value === "light" ? (u(), p("g", j9, D9)) : l.value === "regular" ? (u(), p("g", F9, W9)) : l.value === "thin" ? (u(), p("g", G9, Y9)) : D("", !0)], 16, T9))
        }
    }),
    J9 = ["width", "height", "fill", "transform"],
    Q9 = {
        key: 0
    },
    X9 = n("path", {
        d: "M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z"
    }, null, -1),
    ev = [X9],
    tv = {
        key: 1
    },
    sv = n("path", {
        d: "M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
        opacity: "0.2"
    }, null, -1),
    av = n("path", {
        d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"
    }, null, -1),
    iv = [sv, av],
    nv = {
        key: 2
    },
    ov = n("path", {
        d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Z"
    }, null, -1),
    lv = [ov],
    rv = {
        key: 3
    },
    cv = n("path", {
        d: "M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128Z"
    }, null, -1),
    dv = [cv],
    uv = {
        key: 4
    },
    pv = n("path", {
        d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"
    }, null, -1),
    fv = [pv],
    hv = {
        key: 5
    },
    mv = n("path", {
        d: "M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128Z"
    }, null, -1),
    gv = [mv],
    vv = {
        name: "PhMinus"
    },
    N0 = H({
        ...vv,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", Q9, ev)) : l.value === "duotone" ? (u(), p("g", tv, iv)) : l.value === "fill" ? (u(), p("g", nv, lv)) : l.value === "light" ? (u(), p("g", rv, dv)) : l.value === "regular" ? (u(), p("g", uv, fv)) : l.value === "thin" ? (u(), p("g", hv, gv)) : D("", !0)], 16, J9))
        }
    }),
    yv = ["width", "height", "fill", "transform"],
    _v = {
        key: 0
    },
    xv = n("path", {
        d: "M240,52H16A12,12,0,0,0,4,64V192a12,12,0,0,0,12,12H240a12,12,0,0,0,12-12V64A12,12,0,0,0,240,52ZM181.21,180H74.79A60.18,60.18,0,0,0,28,133.21V122.79A60.18,60.18,0,0,0,74.79,76H181.21A60.18,60.18,0,0,0,228,122.79v10.42A60.18,60.18,0,0,0,181.21,180ZM228,97.94A36.23,36.23,0,0,1,206.06,76H228ZM49.94,76A36.23,36.23,0,0,1,28,97.94V76ZM28,158.06A36.23,36.23,0,0,1,49.94,180H28ZM206.06,180A36.23,36.23,0,0,1,228,158.06V180ZM128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,56a16,16,0,1,1,16-16A16,16,0,0,1,128,144Z"
    }, null, -1),
    bv = [xv],
    wv = {
        key: 1
    },
    $v = n("path", {
        d: "M160,128a32,32,0,1,1-32-32A32,32,0,0,1,160,128Zm40-64a48.85,48.85,0,0,0,40,40V64Zm0,128h40V152A48.85,48.85,0,0,0,200,192ZM16,152v40H56A48.85,48.85,0,0,0,16,152Zm0-48A48.85,48.85,0,0,0,56,64H16Z",
        opacity: "0.2"
    }, null, -1),
    Av = n("path", {
        d: "M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM240,56H16a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H240a8,8,0,0,0,8-8V64A8,8,0,0,0,240,56ZM24,72H45.37A40.81,40.81,0,0,1,24,93.37Zm0,112V162.63A40.81,40.81,0,0,1,45.37,184Zm208,0H210.63A40.81,40.81,0,0,1,232,162.63Zm0-38.35A56.78,56.78,0,0,0,193.65,184H62.35A56.78,56.78,0,0,0,24,145.65v-35.3A56.78,56.78,0,0,0,62.35,72h131.3A56.78,56.78,0,0,0,232,110.35Zm0-52.28A40.81,40.81,0,0,1,210.63,72H232Z"
    }, null, -1),
    Sv = [$v, Av],
    Mv = {
        key: 2
    },
    Cv = n("path", {
        d: "M168,128a40,40,0,1,1-40-40A40,40,0,0,1,168,128Zm80-64V192a8,8,0,0,1-8,8H16a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H240A8,8,0,0,1,248,64Zm-16,46.35A56.78,56.78,0,0,1,193.65,72H62.35A56.78,56.78,0,0,1,24,110.35v35.3A56.78,56.78,0,0,1,62.35,184h131.3A56.78,56.78,0,0,1,232,145.65Z"
    }, null, -1),
    Hv = [Cv],
    Zv = {
        key: 3
    },
    Tv = n("path", {
        d: "M128,166a38,38,0,1,0-38-38A38,38,0,0,0,128,166Zm0-64a26,26,0,1,1-26,26A26,26,0,0,1,128,102ZM240,58H16a6,6,0,0,0-6,6V192a6,6,0,0,0,6,6H240a6,6,0,0,0,6-6V64A6,6,0,0,0,240,58ZM22,108.82A54.73,54.73,0,0,0,60.82,70H195.18A54.73,54.73,0,0,0,234,108.82v38.36A54.73,54.73,0,0,0,195.18,186H60.82A54.73,54.73,0,0,0,22,147.18ZM234,96.29A42.8,42.8,0,0,1,207.71,70H234ZM48.29,70A42.8,42.8,0,0,1,22,96.29V70ZM22,159.71A42.8,42.8,0,0,1,48.29,186H22ZM207.71,186A42.8,42.8,0,0,1,234,159.71V186Z"
    }, null, -1),
    Vv = [Tv],
    kv = {
        key: 4
    },
    Pv = n("path", {
        d: "M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM240,56H16a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H240a8,8,0,0,0,8-8V64A8,8,0,0,0,240,56ZM193.65,184H62.35A56.78,56.78,0,0,0,24,145.65v-35.3A56.78,56.78,0,0,0,62.35,72h131.3A56.78,56.78,0,0,0,232,110.35v35.3A56.78,56.78,0,0,0,193.65,184ZM232,93.37A40.81,40.81,0,0,1,210.63,72H232ZM45.37,72A40.81,40.81,0,0,1,24,93.37V72ZM24,162.63A40.81,40.81,0,0,1,45.37,184H24ZM210.63,184A40.81,40.81,0,0,1,232,162.63V184Z"
    }, null, -1),
    Lv = [Pv],
    Ev = {
        key: 5
    },
    Bv = n("path", {
        d: "M128,164a36,36,0,1,0-36-36A36,36,0,0,0,128,164Zm0-64a28,28,0,1,1-28,28A28,28,0,0,1,128,100ZM240,60H16a4,4,0,0,0-4,4V192a4,4,0,0,0,4,4H240a4,4,0,0,0,4-4V64A4,4,0,0,0,240,60ZM20,107.26A52.75,52.75,0,0,0,59.26,68H196.74A52.75,52.75,0,0,0,236,107.26v41.48A52.75,52.75,0,0,0,196.74,188H59.26A52.75,52.75,0,0,0,20,148.74ZM236,99a44.8,44.8,0,0,1-31-31h31ZM51,68A44.8,44.8,0,0,1,20,99V68ZM20,157a44.8,44.8,0,0,1,31,31H20Zm185,31a44.8,44.8,0,0,1,31-31v31Z"
    }, null, -1),
    Iv = [Bv],
    Ov = {
        name: "PhMoney"
    },
    Na = H({
        ...Ov,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", _v, bv)) : l.value === "duotone" ? (u(), p("g", wv, Sv)) : l.value === "fill" ? (u(), p("g", Mv, Hv)) : l.value === "light" ? (u(), p("g", Zv, Vv)) : l.value === "regular" ? (u(), p("g", kv, Lv)) : l.value === "thin" ? (u(), p("g", Ev, Iv)) : D("", !0)], 16, yv))
        }
    }),
    Nv = ["width", "height", "fill", "transform"],
    zv = {
        key: 0
    },
    jv = n("path", {
        d: "M232.49,55.51l-32-32a12,12,0,0,0-17,0l-96,96A12,12,0,0,0,84,128v32a12,12,0,0,0,12,12h32a12,12,0,0,0,8.49-3.51l96-96A12,12,0,0,0,232.49,55.51ZM192,49l15,15L196,75,181,60Zm-69,99H108V133l56-56,15,15Zm105-15.43V208a20,20,0,0,1-20,20H48a20,20,0,0,1-20-20V48A20,20,0,0,1,48,28h75.43a12,12,0,0,1,0,24H52V204H204V132.57a12,12,0,0,1,24,0Z"
    }, null, -1),
    Rv = [jv],
    Dv = {
        key: 1
    },
    Fv = n("path", {
        d: "M200,88l-72,72H96V128l72-72Z",
        opacity: "0.2"
    }, null, -1),
    qv = n("path", {
        d: "M229.66,58.34l-32-32a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,88,128v32a8,8,0,0,0,8,8h32a8,8,0,0,0,5.66-2.34l96-96A8,8,0,0,0,229.66,58.34ZM124.69,152H104V131.31l64-64L188.69,88ZM200,76.69,179.31,56,192,43.31,212.69,64ZM224,120v88a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h88a8,8,0,0,1,0,16H48V208H208V120a8,8,0,0,1,16,0Z"
    }, null, -1),
    Wv = [Fv, qv],
    Gv = {
        key: 2
    },
    Uv = n("path", {
        d: "M224,120v88a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h88a8,8,0,0,1,0,16H48V208H208V120a8,8,0,0,1,16,0Zm5.66-50.34-96,96A8,8,0,0,1,128,168H96a8,8,0,0,1-8-8V128a8,8,0,0,1,2.34-5.66l96-96a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,229.66,69.66Zm-17-5.66L192,43.31,179.31,56,200,76.69Z"
    }, null, -1),
    Yv = [Uv],
    Kv = {
        key: 3
    },
    Jv = n("path", {
        d: "M228.24,59.76l-32-32a6,6,0,0,0-8.48,0l-96,96A6,6,0,0,0,90,128v32a6,6,0,0,0,6,6h32a6,6,0,0,0,4.24-1.76l96-96A6,6,0,0,0,228.24,59.76ZM125.51,154H102V130.49l66-66L191.51,88ZM200,79.51,176.49,56,192,40.49,215.51,64ZM222,120v88a14,14,0,0,1-14,14H48a14,14,0,0,1-14-14V48A14,14,0,0,1,48,34h88a6,6,0,0,1,0,12H48a2,2,0,0,0-2,2V208a2,2,0,0,0,2,2H208a2,2,0,0,0,2-2V120a6,6,0,0,1,12,0Z"
    }, null, -1),
    Qv = [Jv],
    Xv = {
        key: 4
    },
    ey = n("path", {
        d: "M229.66,58.34l-32-32a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,88,128v32a8,8,0,0,0,8,8h32a8,8,0,0,0,5.66-2.34l96-96A8,8,0,0,0,229.66,58.34ZM124.69,152H104V131.31l64-64L188.69,88ZM200,76.69,179.31,56,192,43.31,212.69,64ZM224,120v88a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h88a8,8,0,0,1,0,16H48V208H208V120a8,8,0,0,1,16,0Z"
    }, null, -1),
    ty = [ey],
    sy = {
        key: 5
    },
    ay = n("path", {
        d: "M226.83,61.17l-32-32a4,4,0,0,0-5.66,0l-96,96A4,4,0,0,0,92,128v32a4,4,0,0,0,4,4h32a4,4,0,0,0,2.83-1.17l96-96A4,4,0,0,0,226.83,61.17ZM126.34,156H100V129.66l68-68L194.34,88ZM200,82.34,173.66,56,192,37.66,218.34,64ZM220,120v88a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V48A12,12,0,0,1,48,36h88a4,4,0,0,1,0,8H48a4,4,0,0,0-4,4V208a4,4,0,0,0,4,4H208a4,4,0,0,0,4-4V120a4,4,0,0,1,8,0Z"
    }, null, -1),
    iy = [ay],
    ny = {
        name: "PhNotePencil"
    },
    oy = H({
        ...ny,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", zv, Rv)) : l.value === "duotone" ? (u(), p("g", Dv, Wv)) : l.value === "fill" ? (u(), p("g", Gv, Yv)) : l.value === "light" ? (u(), p("g", Kv, Qv)) : l.value === "regular" ? (u(), p("g", Xv, ty)) : l.value === "thin" ? (u(), p("g", sy, iy)) : D("", !0)], 16, Nv))
        }
    }),
    ly = ["width", "height", "fill", "transform"],
    ry = {
        key: 0
    },
    cy = n("path", {
        d: "M241.42,198.2l-.06-.09L145.3,30.17a20,20,0,0,0-34.82,0L14.58,198.2a20,20,0,0,0,24.1,28.64l89.2-30.61,89.45,30.61a20.22,20.22,0,0,0,6.72,1.16,20,20,0,0,0,17.37-29.8ZM140,175V120a12,12,0,0,0-24,0v54.93L40.76,200.75,127.89,48.06l87.34,152.7Z"
    }, null, -1),
    dy = [cy],
    uy = {
        key: 1
    },
    py = n("path", {
        d: "M221.28,215.51l-90.71-31a7.89,7.89,0,0,0-5.38,0l-90.47,31a8,8,0,0,1-9.67-11.44l95.85-168a8,8,0,0,1,14,0l96.09,168A8,8,0,0,1,221.28,215.51Z",
        opacity: "0.2"
    }, null, -1),
    fy = n("path", {
        d: "M237.9,200.09,141.85,32.18a16,16,0,0,0-27.89,0l-95.89,168a16,16,0,0,0,19.25,22.92l90.47-31,.1,0,.09,0,90.68,31a16,16,0,0,0,19.24-23Zm-14,7.84L136,177.86V120a8,8,0,0,0-16,0v57.78L32.12,207.94,32,208,127.86,40,224,208Z"
    }, null, -1),
    hy = [py, fy],
    my = {
        key: 2
    },
    gy = n("path", {
        d: "M236.2,218.3a15.87,15.87,0,0,1-17.54,4.76L138.71,195.7a4,4,0,0,1-2.71-3.79V120a8,8,0,0,0-8.53-8,8.19,8.19,0,0,0-7.47,8.26v71.57a4,4,0,0,1-2.7,3.79l-80,27.44a16,16,0,0,1-19.25-22.92L114,32.13a16,16,0,0,1,27.89,0L237.9,200.09A15.89,15.89,0,0,1,236.2,218.3Z"
    }, null, -1),
    vy = [gy],
    yy = {
        key: 3
    },
    _y = n("path", {
        d: "M236.17,201.09,140.1,33.16a14,14,0,0,0-24.41,0l-95.88,168a14,14,0,0,0,16.85,20.05l90.48-31,.07,0a2.11,2.11,0,0,1,1.42,0l90.64,31a14,14,0,0,0,16.9-20.07Zm-10.66,8.17a1.91,1.91,0,0,1-2.28.57L134,179.3V120a6,6,0,0,0-12,0v59.21L32.7,209.86a1.87,1.87,0,0,1-2.2-.6,1.83,1.83,0,0,1-.24-2.22L126.14,39a1.93,1.93,0,0,1,1.74-1,2,2,0,0,1,1.78,1.07L225.73,207A1.86,1.86,0,0,1,225.51,209.26Z"
    }, null, -1),
    xy = [_y],
    by = {
        key: 4
    },
    wy = n("path", {
        d: "M237.9,200.09,141.85,32.18a16,16,0,0,0-27.89,0l-95.89,168a16,16,0,0,0,19.25,22.92l90.47-31,.1,0,.09,0,90.68,31a16,16,0,0,0,19.24-23Zm-14,7.84L136,177.86V120a8,8,0,0,0-16,0v57.78L32.12,207.94,32,208,127.86,40,224,208Z"
    }, null, -1),
    $y = [wy],
    Ay = {
        key: 5
    },
    Sy = n("path", {
        d: "M234.43,202.08,138.35,34.14a12,12,0,0,0-20.92,0l-95.88,168A12,12,0,0,0,32,220a12,12,0,0,0,4-.7l90.48-31.05h.05a4.09,4.09,0,0,1,2.74,0l90.66,31a12,12,0,0,0,14.49-17.2ZM227,210.56a3.93,3.93,0,0,1-4.45,1.17l-90.59-31V120a4,4,0,0,0-8,0v60.65l-.13,0-90.5,31.06a4,4,0,0,1-4.85-5.7l95.87-168a4,4,0,0,1,7,0l96.08,168A3.89,3.89,0,0,1,227,210.56Z"
    }, null, -1),
    My = [Sy],
    Cy = {
        name: "PhPaperPlane"
    },
    Hy = H({
        ...Cy,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", ry, dy)) : l.value === "duotone" ? (u(), p("g", uy, hy)) : l.value === "fill" ? (u(), p("g", my, vy)) : l.value === "light" ? (u(), p("g", yy, xy)) : l.value === "regular" ? (u(), p("g", by, $y)) : l.value === "thin" ? (u(), p("g", Ay, My)) : D("", !0)], 16, ly))
        }
    }),
    Zy = ["width", "height", "fill", "transform"],
    Ty = {
        key: 0
    },
    Vy = n("path", {
        d: "M225.86,110.48,57.8,14.58A20,20,0,0,0,29.16,38.67l30.61,89.21L29.16,217.33A20,20,0,0,0,48,244a20.1,20.1,0,0,0,9.81-2.58l.09-.06,168-96.07a20,20,0,0,0,0-34.81ZM55.24,215.23,81,140h55a12,12,0,0,0,0-24H81.07L55.25,40.76l152.69,87.13Z"
    }, null, -1),
    ky = [Vy],
    Py = {
        key: 1
    },
    Ly = n("path", {
        d: "M219.91,134.86,51.93,231a8,8,0,0,1-11.44-9.67l31-90.71a7.89,7.89,0,0,0,0-5.38l-31-90.47a8,8,0,0,1,11.44-9.67l168,95.85A8,8,0,0,1,219.91,134.86Z",
        opacity: "0.2"
    }, null, -1),
    Ey = n("path", {
        d: "M223.87,114l-168-95.89A16,16,0,0,0,32.93,37.32l31,90.47a.42.42,0,0,0,0,.1.3.3,0,0,0,0,.1l-31,90.67A16,16,0,0,0,48,240a16.14,16.14,0,0,0,7.92-2.1l167.91-96.05a16,16,0,0,0,.05-27.89ZM48,224l0-.09L78.14,136H136a8,8,0,0,0,0-16H78.22L48.06,32.12,48,32l168,95.83Z"
    }, null, -1),
    By = [Ly, Ey],
    Iy = {
        key: 2
    },
    Oy = n("path", {
        d: "M232,127.89a16,16,0,0,1-8.18,14L55.91,237.9A16.14,16.14,0,0,1,48,240a16,16,0,0,1-15.05-21.34L60.3,138.71A4,4,0,0,1,64.09,136H136a8,8,0,0,0,8-8.53,8.19,8.19,0,0,0-8.26-7.47H64.16a4,4,0,0,1-3.79-2.7l-27.44-80A16,16,0,0,1,55.85,18.07l168,95.89A16,16,0,0,1,232,127.89Z"
    }, null, -1),
    Ny = [Oy],
    zy = {
        key: 3
    },
    jy = n("path", {
        d: "M222.88,115.69l-168-95.88a14,14,0,0,0-20,16.85l31,90.48,0,.07a2.11,2.11,0,0,1,0,1.42l-31,90.64A14,14,0,0,0,48,238a14.11,14.11,0,0,0,6.92-1.83L222.84,140.1a14,14,0,0,0,0-24.41Zm-5.95,14L49,225.73a1.87,1.87,0,0,1-2.27-.22,1.92,1.92,0,0,1-.56-2.28L76.7,134H136a6,6,0,0,0,0-12H76.78L46.14,32.7A2,2,0,0,1,49,30.25l168,95.89a1.93,1.93,0,0,1,1,1.74A2,2,0,0,1,216.93,129.66Z"
    }, null, -1),
    Ry = [jy],
    Dy = {
        key: 4
    },
    Fy = n("path", {
        d: "M223.87,114l-168-95.89A16,16,0,0,0,32.93,37.32l31,90.47a.42.42,0,0,0,0,.1.3.3,0,0,0,0,.1l-31,90.67A16,16,0,0,0,48,240a16.14,16.14,0,0,0,7.92-2.1l167.91-96.05a16,16,0,0,0,.05-27.89ZM48,224l0-.09L78.14,136H136a8,8,0,0,0,0-16H78.22L48.06,32.12,48,32l168,95.83Z"
    }, null, -1),
    qy = [Fy],
    Wy = {
        key: 5
    },
    Gy = n("path", {
        d: "M221.89,117.43l-168-95.88A12,12,0,0,0,36.7,36l31.05,90.48v.05a4.09,4.09,0,0,1,0,2.74L36.72,220A12,12,0,0,0,48,236a12.13,12.13,0,0,0,5.93-1.57l167.94-96.08a12,12,0,0,0,0-20.92Zm-4,14L50,227.47a4,4,0,0,1-5.7-4.88l31-90.59H136a4,4,0,0,0,0-8H75.35a.65.65,0,0,1,0-.13L44.25,33.37A4,4,0,0,1,50,28.52l168,95.87a4,4,0,0,1,0,7Z"
    }, null, -1),
    Uy = [Gy],
    Yy = {
        name: "PhPaperPlaneRight"
    },
    Li = H({
        ...Yy,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", Ty, ky)) : l.value === "duotone" ? (u(), p("g", Py, By)) : l.value === "fill" ? (u(), p("g", Iy, Ny)) : l.value === "light" ? (u(), p("g", zy, Ry)) : l.value === "regular" ? (u(), p("g", Dy, qy)) : l.value === "thin" ? (u(), p("g", Wy, Uy)) : D("", !0)], 16, Zy))
        }
    }),
    Ky = ["width", "height", "fill", "transform"],
    Jy = {
        key: 0
    },
    Qy = n("path", {
        d: "M230.14,70.54,185.46,25.85a20,20,0,0,0-28.29,0L33.86,149.17A19.85,19.85,0,0,0,28,163.31V208a20,20,0,0,0,20,20H92.69a19.86,19.86,0,0,0,14.14-5.86L230.14,98.82a20,20,0,0,0,0-28.28ZM91,204H52V165l84-84,39,39ZM192,103,153,64l18.34-18.34,39,39Z"
    }, null, -1),
    Xy = [Qy],
    e_ = {
        key: 1
    },
    t_ = n("path", {
        d: "M221.66,90.34,192,120,136,64l29.66-29.66a8,8,0,0,1,11.31,0L221.66,79A8,8,0,0,1,221.66,90.34Z",
        opacity: "0.2"
    }, null, -1),
    s_ = n("path", {
        d: "M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"
    }, null, -1),
    a_ = [t_, s_],
    i_ = {
        key: 2
    },
    n_ = n("path", {
        d: "M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM192,108.68,147.31,64l24-24L216,84.68Z"
    }, null, -1),
    o_ = [n_],
    l_ = {
        key: 3
    },
    r_ = n("path", {
        d: "M225.9,74.78,181.21,30.09a14,14,0,0,0-19.8,0L38.1,153.41a13.94,13.94,0,0,0-4.1,9.9V208a14,14,0,0,0,14,14H92.69a13.94,13.94,0,0,0,9.9-4.1L225.9,94.58a14,14,0,0,0,0-19.8ZM94.1,209.41a2,2,0,0,1-1.41.59H48a2,2,0,0,1-2-2V163.31a2,2,0,0,1,.59-1.41L136,72.48,183.51,120ZM217.41,86.1,192,111.51,144.49,64,169.9,38.58a2,2,0,0,1,2.83,0l44.68,44.69a2,2,0,0,1,0,2.83Z"
    }, null, -1),
    c_ = [r_],
    d_ = {
        key: 4
    },
    u_ = n("path", {
        d: "M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"
    }, null, -1),
    p_ = [u_],
    f_ = {
        key: 5
    },
    h_ = n("path", {
        d: "M224.49,76.2,179.8,31.51a12,12,0,0,0-17,0L133.17,61.17h0L39.52,154.83A11.9,11.9,0,0,0,36,163.31V208a12,12,0,0,0,12,12H92.69a12,12,0,0,0,8.48-3.51L224.48,93.17a12,12,0,0,0,0-17Zm-129,134.63A4,4,0,0,1,92.69,212H48a4,4,0,0,1-4-4V163.31a4,4,0,0,1,1.17-2.83L136,69.65,186.34,120ZM218.83,87.51,192,114.34,141.66,64l26.82-26.83a4,4,0,0,1,5.66,0l44.69,44.68a4,4,0,0,1,0,5.66Z"
    }, null, -1),
    m_ = [h_],
    g_ = {
        name: "PhPencilSimple"
    },
    v_ = H({
        ...g_,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", Jy, Xy)) : l.value === "duotone" ? (u(), p("g", e_, a_)) : l.value === "fill" ? (u(), p("g", i_, o_)) : l.value === "light" ? (u(), p("g", l_, c_)) : l.value === "regular" ? (u(), p("g", d_, p_)) : l.value === "thin" ? (u(), p("g", f_, m_)) : D("", !0)], 16, Ky))
        }
    }),
    y_ = ["width", "height", "fill", "transform"],
    __ = {
        key: 0
    },
    x_ = n("path", {
        d: "M148.41,36.9a12,12,0,0,1,14.69-8.49A90.12,90.12,0,0,1,227.59,92.9a12,12,0,1,1-23.18,6.2A66.42,66.42,0,0,0,156.9,51.59,12,12,0,0,1,148.41,36.9Zm87.44,138.68A60.27,60.27,0,0,1,176,228C94.39,228,28,161.61,28,80A60.27,60.27,0,0,1,80.42,20.15,20.05,20.05,0,0,1,101.2,32l21.11,47.13a1.42,1.42,0,0,0,.08.18,20,20,0,0,1-1.66,18.83,10.67,10.67,0,0,1-.85,1.15L100.82,122c7.06,12.84,20.5,26.16,33.49,33.21l22.31-19a13.08,13.08,0,0,1,1.12-.84,19.91,19.91,0,0,1,19-1.74l.18.08L224,154.8A20.06,20.06,0,0,1,235.85,175.58Zm-24.31-.06-42-18.81-22.43,19.07a11.63,11.63,0,0,1-1.11.85A20,20,0,0,1,126.31,178c-19.48-9.4-38.89-28.68-48.31-48a20,20,0,0,1,1.28-19.64,10.75,10.75,0,0,1,.86-1.15L99.3,86.49l-18.82-42A36.29,36.29,0,0,0,52,80,124.15,124.15,0,0,0,176,204,36.29,36.29,0,0,0,211.54,175.52ZM145.63,89.47a32,32,0,0,1,20.9,20.9,12,12,0,0,0,11.44,8.4,12.22,12.22,0,0,0,3.61-.55,12,12,0,0,0,7.84-15,56,56,0,0,0-36.59-36.59,12,12,0,1,0-7.2,22.89Z"
    }, null, -1),
    b_ = [x_],
    w_ = {
        key: 1
    },
    $_ = n("path", {
        d: "M223.94,174.08A48.33,48.33,0,0,1,176,216,136,136,0,0,1,40,80,48.33,48.33,0,0,1,81.92,32.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L89.32,117a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59l25-21.3a8,8,0,0,1,7.59-.69l47.16,21.13A8,8,0,0,1,223.94,174.08Z",
        opacity: "0.2"
    }, null, -1),
    A_ = n("path", {
        d: "M152.27,37.93a8,8,0,0,1,9.8-5.66,86.22,86.22,0,0,1,61.66,61.66,8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,216,104a8,8,0,0,1-7.73-5.94,70.35,70.35,0,0,0-50.33-50.33A8,8,0,0,1,152.27,37.93Zm-2.33,41.8c13.79,3.68,22.65,12.54,26.33,26.33A8,8,0,0,0,184,112a8.23,8.23,0,0,0,2.07-.27,8,8,0,0,0,5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8,8,0,1,0-4.13,15.46Zm81.94,95.35A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Zm-15.88-2s-.07,0-.11,0h0l-47-21.05-24.35,20.71a8.44,8.44,0,0,1-.74.56,16,16,0,0,1-15.75,1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16,16,0,0,1,1-15.7,6.13,6.13,0,0,1,.57-.77L104,87.15l-21-47a.61.61,0,0,1,0-.12A40.2,40.2,0,0,0,48,80,128.14,128.14,0,0,0,176,208,40.21,40.21,0,0,0,216,173.07Z"
    }, null, -1),
    S_ = [$_, A_],
    M_ = {
        key: 2
    },
    C_ = n("path", {
        d: "M152.27,37.93a8,8,0,0,1,9.8-5.66,86.22,86.22,0,0,1,61.66,61.66,8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,216,104a8,8,0,0,1-7.73-5.93,70.35,70.35,0,0,0-50.33-50.34A8,8,0,0,1,152.27,37.93Zm-2.33,41.8c13.79,3.68,22.65,12.55,26.33,26.34A8,8,0,0,0,184,112a8.23,8.23,0,0,0,2.07-.27,8,8,0,0,0,5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8,8,0,1,0-4.13,15.46Zm72.43,78.73-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46Z"
    }, null, -1),
    H_ = [C_],
    Z_ = {
        key: 3
    },
    T_ = n("path", {
        d: "M154.2,38.45a6,6,0,0,1,7.35-4.25A84.24,84.24,0,0,1,221.8,94.45a6,6,0,0,1-4.25,7.35,5.94,5.94,0,0,1-1.55.2,6,6,0,0,1-5.8-4.45A72.34,72.34,0,0,0,158.45,45.8,6,6,0,0,1,154.2,38.45ZM150.45,77.8C165,81.68,174.32,91,178.2,105.55A6,6,0,0,0,184,110a5.94,5.94,0,0,0,1.55-.2,6,6,0,0,0,4.25-7.35c-5-18.71-17.54-31.25-36.25-36.25a6,6,0,1,0-3.1,11.6Zm79.44,97A54.25,54.25,0,0,1,176,222C97.7,222,34,158.3,34,80A54.25,54.25,0,0,1,81.17,26.11,14,14,0,0,1,95.73,34.5l21.1,47.1a14,14,0,0,1-1.12,13.28,6,6,0,0,1-.42.57L94.22,120.51a1.89,1.89,0,0,0,0,1.67c7.66,15.68,24.1,32,40,39.65a1.88,1.88,0,0,0,1.68-.06l24.69-21a4.81,4.81,0,0,1,.56-.42,14,14,0,0,1,13.28-1.22l47.24,21.17A14,14,0,0,1,229.89,174.83ZM218,173.32a2,2,0,0,0-1.21-2l-47.25-21.17a1.92,1.92,0,0,0-1.6.1l-24.68,21c-.18.15-.37.29-.56.42a14,14,0,0,1-13.77,1c-18.36-8.87-36.66-27-45.53-45.19a14,14,0,0,1,.91-13.73,4.73,4.73,0,0,1,.43-.57l21.06-25.06a2,2,0,0,0,0-1.67L84.74,39.31A2,2,0,0,0,82.9,38h-.23A42.24,42.24,0,0,0,46,80c0,71.68,58.32,130,130,130A42.24,42.24,0,0,0,218,173.32Z"
    }, null, -1),
    V_ = [T_],
    k_ = {
        key: 4
    },
    P_ = n("path", {
        d: "M152.27,37.93a8,8,0,0,1,9.8-5.66,86.22,86.22,0,0,1,61.66,61.66,8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,216,104a8,8,0,0,1-7.73-5.94,70.35,70.35,0,0,0-50.33-50.33A8,8,0,0,1,152.27,37.93Zm-2.33,41.8c13.79,3.68,22.65,12.54,26.33,26.33A8,8,0,0,0,184,112a8.23,8.23,0,0,0,2.07-.27,8,8,0,0,0,5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8,8,0,1,0-4.13,15.46Zm81.94,95.35A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Zm-15.88-2s-.07,0-.11,0h0l-47-21.05-24.35,20.71a8.44,8.44,0,0,1-.74.56,16,16,0,0,1-15.75,1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16,16,0,0,1,1-15.7,6.13,6.13,0,0,1,.57-.77L104,87.15l-21-47a.61.61,0,0,1,0-.12A40.2,40.2,0,0,0,48,80,128.14,128.14,0,0,0,176,208,40.21,40.21,0,0,0,216,173.07Z"
    }, null, -1),
    L_ = [P_],
    E_ = {
        key: 5
    },
    B_ = n("path", {
        d: "M156.14,39A4,4,0,0,1,161,36.13,82.24,82.24,0,0,1,219.86,95,4,4,0,0,1,217,99.86a3.65,3.65,0,0,1-1,.14,4,4,0,0,1-3.86-3A74.35,74.35,0,0,0,159,43.86,4,4,0,0,1,156.14,39ZM151,75.86C166,79.89,176.11,90,180.14,105a4,4,0,0,0,3.86,3,3.65,3.65,0,0,0,1-.14,4,4,0,0,0,2.83-4.89c-4.8-18-16.85-30-34.83-34.84A4,4,0,0,0,151,75.86Zm76.94,98.72A52.25,52.25,0,0,1,176,220C98.8,220,36,157.2,36,80A52.25,52.25,0,0,1,81.42,28.09,12,12,0,0,1,93.9,35.28L115,82.42a12,12,0,0,1-1,11.36c-.09.13-.18.26-.28.38l-21.2,25.21a3.9,3.9,0,0,0-.18,3.69c7.84,16.05,24.65,32.73,40.89,40.57a3.93,3.93,0,0,0,3.7-.21L161.8,142.3l.38-.29a12,12,0,0,1,11.38-1l47.22,21.16A12,12,0,0,1,227.91,174.58Zm-10.35-5.12L170.35,148.3a3.93,3.93,0,0,0-3.57.27L142,169.69l-.37.28a12,12,0,0,1-11.79.87c-18-8.69-35.91-26.48-44.6-44.27A12,12,0,0,1,86,114.82c.09-.14.19-.26.29-.39l21.19-25.2a4,4,0,0,0,.23-3.6L86.57,38.49A4,4,0,0,0,82.9,36a3.87,3.87,0,0,0-.48,0A44.23,44.23,0,0,0,44,80c0,72.78,59.22,132,132,132a44.23,44.23,0,0,0,44-38.42A4,4,0,0,0,217.56,169.46Z"
    }, null, -1),
    I_ = [B_],
    O_ = {
        name: "PhPhoneCall"
    },
    rs = H({
        ...O_,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", __, b_)) : l.value === "duotone" ? (u(), p("g", w_, S_)) : l.value === "fill" ? (u(), p("g", M_, H_)) : l.value === "light" ? (u(), p("g", Z_, V_)) : l.value === "regular" ? (u(), p("g", k_, L_)) : l.value === "thin" ? (u(), p("g", E_, I_)) : D("", !0)], 16, y_))
        }
    }),
    N_ = ["width", "height", "fill", "transform"],
    z_ = {
        key: 0
    },
    j_ = n("path", {
        d: "M220,112c0,23.6-8.29,45.23-23.35,60.88C182.52,187.57,163.33,196,144,196c-15.45,0-26.78-4.18-34.89-9.31l-9.43,40.06a12,12,0,1,1-23.36-5.5l32-136a12,12,0,1,1,23.36,5.5l-16.45,69.93C118.72,164.86,127.16,172,144,172c25.56,0,52-22.45,52-60A68,68,0,1,0,69.09,146a12,12,0,0,1-20.77,12A92,92,0,1,1,220,112Z"
    }, null, -1),
    R_ = [j_],
    D_ = {
        key: 1
    },
    F_ = n("path", {
        d: "M208,112c0,44.18-32,72-64,72s-41.63-21.07-41.63-21.07h0L120,88l13.14-55.83h0A80,80,0,0,1,208,112Z",
        opacity: "0.2"
    }, null, -1),
    q_ = n("path", {
        d: "M216,112c0,22.57-7.9,43.2-22.23,58.11C180.39,184,162.25,192,144,192c-17.88,0-29.82-5.86-37.43-12L95.79,225.83A8,8,0,0,1,88,232a8.24,8.24,0,0,1-1.84-.21,8,8,0,0,1-6-9.62l32-136a8,8,0,0,1,15.58,3.66l-16.9,71.8C114,166,123.3,176,144,176c27.53,0,56-23.94,56-64A72,72,0,1,0,65.63,148a8,8,0,0,1-13.85,8A88,88,0,1,1,216,112Z"
    }, null, -1),
    W_ = [F_, q_],
    G_ = {
        key: 2
    },
    U_ = n("path", {
        d: "M232,128.7c-.38,56.49-46.46,102.73-102.94,103.29a104.16,104.16,0,0,1-25.94-3,4,4,0,0,1-2.91-4.86l8.64-34.55A60.57,60.57,0,0,0,136,196c37,0,66.7-33.45,63.81-73.36A72,72,0,1,0,61.24,155,8,8,0,0,0,72,159.29a8.19,8.19,0,0,0,4-10.49,56,56,0,1,1,107.86-24.93C186,154.4,163.73,180,136,180a44.87,44.87,0,0,1-23.14-6.44l14.9-59.62a8,8,0,0,0-15.52-3.88L85.38,217.51a4,4,0,0,1-5.71,2.59A104,104,0,0,1,24,126.88C24.6,70.52,70.67,24.52,127,24A104,104,0,0,1,232,128.7Z"
    }, null, -1),
    Y_ = [U_],
    K_ = {
        key: 3
    },
    J_ = n("path", {
        d: "M214,112c0,22.05-7.7,42.19-21.68,56.73C179.32,182.25,161.71,190,144,190c-19.42,0-31.55-7.07-38.63-13.64l-11.53,49A6,6,0,0,1,88,230a5.89,5.89,0,0,1-1.37-.16,6,6,0,0,1-4.47-7.21l32-136a6,6,0,1,1,11.68,2.74L108.75,162c2.8,4.33,12.46,16,35.25,16,28.51,0,58-24.69,58-66A74,74,0,1,0,63.9,149a6,6,0,1,1-10.39,6A86,86,0,1,1,214,112Z"
    }, null, -1),
    Q_ = [J_],
    X_ = {
        key: 4
    },
    ex = n("path", {
        d: "M216,112c0,22.57-7.9,43.2-22.23,58.11C180.39,184,162.25,192,144,192c-17.88,0-29.82-5.86-37.43-12L95.79,225.83A8,8,0,0,1,88,232a8.24,8.24,0,0,1-1.84-.21,8,8,0,0,1-6-9.62l32-136a8,8,0,0,1,15.58,3.66l-16.9,71.8C114,166,123.3,176,144,176c27.53,0,56-23.94,56-64A72,72,0,1,0,65.63,148a8,8,0,0,1-13.85,8A88,88,0,1,1,216,112Z"
    }, null, -1),
    tx = [ex],
    sx = {
        key: 5
    },
    ax = n("path", {
        d: "M212,112c0,21.53-7.5,41.18-21.12,55.34C178.26,180.47,161.17,188,144,188c-21.35,0-33.52-8.76-39.76-15.57L91.89,224.92A4,4,0,0,1,88,228a4.2,4.2,0,0,1-.92-.11,4,4,0,0,1-3-4.81l32-136a4,4,0,0,1,7.78,1.84l-17.28,73.45C109,166.42,119,180,144,180c29.49,0,60-25.44,60-68A76,76,0,1,0,62.17,150a4,4,0,0,1-6.93,4A84,84,0,1,1,212,112Z"
    }, null, -1),
    ix = [ax],
    nx = {
        name: "PhPinterestLogo"
    },
    ox = H({
        ...nx,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", z_, R_)) : l.value === "duotone" ? (u(), p("g", D_, W_)) : l.value === "fill" ? (u(), p("g", G_, Y_)) : l.value === "light" ? (u(), p("g", K_, Q_)) : l.value === "regular" ? (u(), p("g", X_, tx)) : l.value === "thin" ? (u(), p("g", sx, ix)) : D("", !0)], 16, N_))
        }
    }),
    lx = ["width", "height", "fill", "transform"],
    rx = {
        key: 0
    },
    cx = n("path", {
        d: "M234.49,111.07,90.41,22.94A20,20,0,0,0,60,39.87V216.13a20,20,0,0,0,30.41,16.93l144.08-88.13a19.82,19.82,0,0,0,0-33.86ZM84,208.85V47.15L216.16,128Z"
    }, null, -1),
    dx = [cx],
    ux = {
        key: 1
    },
    px = n("path", {
        d: "M228.23,134.69,84.15,222.81A8,8,0,0,1,72,216.12V39.88a8,8,0,0,1,12.15-6.69l144.08,88.12A7.82,7.82,0,0,1,228.23,134.69Z",
        opacity: "0.2"
    }, null, -1),
    fx = n("path", {
        d: "M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"
    }, null, -1),
    hx = [px, fx],
    mx = {
        key: 2
    },
    gx = n("path", {
        d: "M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"
    }, null, -1),
    vx = [gx],
    yx = {
        key: 3
    },
    _x = n("path", {
        d: "M231.36,116.19,87.28,28.06a14,14,0,0,0-14.18-.27A13.69,13.69,0,0,0,66,39.87V216.13a13.69,13.69,0,0,0,7.1,12.08,14,14,0,0,0,14.18-.27l144.08-88.13a13.82,13.82,0,0,0,0-23.62Zm-6.26,13.38L81,217.7a2,2,0,0,1-2.06,0,1.78,1.78,0,0,1-1-1.61V39.87a1.78,1.78,0,0,1,1-1.61A2.06,2.06,0,0,1,80,38a2,2,0,0,1,1,.31L225.1,126.43a1.82,1.82,0,0,1,0,3.14Z"
    }, null, -1),
    xx = [_x],
    bx = {
        key: 4
    },
    wx = n("path", {
        d: "M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"
    }, null, -1),
    $x = [wx],
    Ax = {
        key: 5
    },
    Sx = n("path", {
        d: "M230.32,117.9,86.24,29.79a11.91,11.91,0,0,0-12.17-.23A11.71,11.71,0,0,0,68,39.89V216.11a11.71,11.71,0,0,0,6.07,10.33,11.91,11.91,0,0,0,12.17-.23L230.32,138.1a11.82,11.82,0,0,0,0-20.2Zm-4.18,13.37L82.06,219.39a4,4,0,0,1-4.07.07,3.77,3.77,0,0,1-2-3.35V39.89a3.77,3.77,0,0,1,2-3.35,4,4,0,0,1,4.07.07l144.08,88.12a3.8,3.8,0,0,1,0,6.54Z"
    }, null, -1),
    Mx = [Sx],
    Cx = {
        name: "PhPlay"
    },
    Zo = H({
        ...Cx,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", rx, dx)) : l.value === "duotone" ? (u(), p("g", ux, hx)) : l.value === "fill" ? (u(), p("g", mx, vx)) : l.value === "light" ? (u(), p("g", yx, xx)) : l.value === "regular" ? (u(), p("g", bx, $x)) : l.value === "thin" ? (u(), p("g", Ax, Mx)) : D("", !0)], 16, lx))
        }
    }),
    Hx = ["width", "height", "fill", "transform"],
    Zx = {
        key: 0
    },
    Tx = n("path", {
        d: "M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"
    }, null, -1),
    Vx = [Tx],
    kx = {
        key: 1
    },
    Px = n("path", {
        d: "M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
        opacity: "0.2"
    }, null, -1),
    Lx = n("path", {
        d: "M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"
    }, null, -1),
    Ex = [Px, Lx],
    Bx = {
        key: 2
    },
    Ix = n("path", {
        d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"
    }, null, -1),
    Ox = [Ix],
    Nx = {
        key: 3
    },
    zx = n("path", {
        d: "M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"
    }, null, -1),
    jx = [zx],
    Rx = {
        key: 4
    },
    Dx = n("path", {
        d: "M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"
    }, null, -1),
    Fx = [Dx],
    qx = {
        key: 5
    },
    Wx = n("path", {
        d: "M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"
    }, null, -1),
    Gx = [Wx],
    Ux = {
        name: "PhPlus"
    },
    To = H({
        ...Ux,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", Zx, Vx)) : l.value === "duotone" ? (u(), p("g", kx, Ex)) : l.value === "fill" ? (u(), p("g", Bx, Ox)) : l.value === "light" ? (u(), p("g", Nx, jx)) : l.value === "regular" ? (u(), p("g", Rx, Fx)) : l.value === "thin" ? (u(), p("g", qx, Gx)) : D("", !0)], 16, Hx))
        }
    }),
    Yx = ["width", "height", "fill", "transform"],
    Kx = {
        key: 0
    },
    Jx = n("path", {
        d: "M222.41,155.16a12,12,0,0,0-11.56-.69A16,16,0,0,1,188,139,16.2,16.2,0,0,1,202.8,124a15.83,15.83,0,0,1,8,1.5A12,12,0,0,0,228,114.7V72a20,20,0,0,0-20-20H176a40.15,40.15,0,0,0-12.62-29.16,39.67,39.67,0,0,0-29.94-10.76,40.08,40.08,0,0,0-37.34,37C96,50.07,96,51,96,52H64A20,20,0,0,0,44,72v28a40.15,40.15,0,0,0-29.16,12.62A40,40,0,0,0,41.1,179.9a28.3,28.3,0,0,0,2.9.1v28a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V165.31A12,12,0,0,0,222.41,155.16ZM204,204H68V165.31a12,12,0,0,0-17.15-10.84A15.9,15.9,0,0,1,42.8,156,16.2,16.2,0,0,1,28,141.06a16,16,0,0,1,22.82-15.52A12,12,0,0,0,68,114.7V76h42.7a12,12,0,0,0,10.83-17.15A15.9,15.9,0,0,1,120,50.8,16.19,16.19,0,0,1,134.94,36a16,16,0,0,1,15.53,22.81A12,12,0,0,0,161.31,76H204v24c-1,0-1.93,0-2.9.11A40,40,0,0,0,204,180h0Z"
    }, null, -1),
    Qx = [Jx],
    Xx = {
        key: 1
    },
    eb = n("path", {
        d: "M204,168a28,28,0,0,0,12-2.69V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V165.31a28,28,0,1,1,0-50.62V72a8,8,0,0,1,8-8h46.69a28,28,0,1,1,50.61,0H208a8,8,0,0,1,8,8v42.69A28,28,0,1,0,204,168Z",
        opacity: "0.2"
    }, null, -1),
    tb = n("path", {
        d: "M220.27,158.54a8,8,0,0,0-7.7-.46,20,20,0,1,1,0-36.16A8,8,0,0,0,224,114.69V72a16,16,0,0,0-16-16H171.78a35.36,35.36,0,0,0,.22-4,36.15,36.15,0,0,0-11.36-26.25,36,36,0,0,0-60.55,23.63,36.56,36.56,0,0,0,.14,6.62H64A16,16,0,0,0,48,72v32.22a35.36,35.36,0,0,0-4-.22,36.12,36.12,0,0,0-26.24,11.36,35.7,35.7,0,0,0-9.69,27,36.08,36.08,0,0,0,33.31,33.6,36.56,36.56,0,0,0,6.62-.14V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V165.31A8,8,0,0,0,220.27,158.54ZM208,208H64V165.31a8,8,0,0,0-11.43-7.23,20,20,0,1,1,0-36.16A8,8,0,0,0,64,114.69V72h46.69a8,8,0,0,0,7.23-11.43,20,20,0,1,1,36.16,0A8,8,0,0,0,161.31,72H208v32.23a35.68,35.68,0,0,0-6.62-.14A36,36,0,0,0,204,176a35.36,35.36,0,0,0,4-.22Z"
    }, null, -1),
    sb = [eb, tb],
    ab = {
        key: 2
    },
    ib = n("path", {
        d: "M165.78,224H208a16,16,0,0,0,16-16V170.35A8,8,0,0,0,212.94,163a23.37,23.37,0,0,1-8.94,1.77c-13.23,0-24-11.1-24-24.73s10.77-24.73,24-24.73a23.37,23.37,0,0,1,8.94,1.77A8,8,0,0,0,224,109.65V72a16,16,0,0,0-16-16H171.78a35.36,35.36,0,0,0,.22-4,36,36,0,0,0-72,0,35.36,35.36,0,0,0,.22,4H64A16,16,0,0,0,48,72v32.22a35.36,35.36,0,0,0-4-.22,36,36,0,0,0,0,72,35.36,35.36,0,0,0,4-.22V208a16,16,0,0,0,16,16h42.22"
    }, null, -1),
    nb = [ib],
    ob = {
        key: 3
    },
    lb = n("path", {
        d: "M219.21,160.24a6,6,0,0,0-5.78-.35,22,22,0,1,1-11.05-41.83,22.15,22.15,0,0,1,11.05,2.06A6,6,0,0,0,222,114.7V72a14,14,0,0,0-14-14H169.48a35,35,0,0,0,.52-6,34.1,34.1,0,0,0-10.73-24.78,33.64,33.64,0,0,0-25.45-9.15A34,34,0,0,0,102.54,58H64A14,14,0,0,0,50,72v34.53a34,34,0,0,0-30.79,10.2,34,34,0,0,0,22.31,57.18,34.34,34.34,0,0,0,8.48-.44V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V165.31A6,6,0,0,0,219.21,160.24ZM210,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V165.31a6,6,0,0,0-6-6,5.92,5.92,0,0,0-2.57.58,22,22,0,0,1-31.38-18.46,22,22,0,0,1,31.38-21.31A6,6,0,0,0,62,114.7V72a2,2,0,0,1,2-2h46.69a6,6,0,0,0,5.42-8.57,22.25,22.25,0,0,1-2-11,22,22,0,1,1,41.83,11A6,6,0,0,0,161.3,70H208a2,2,0,0,1,2,2v34.54a34,34,0,0,0-39.93,31.28,33.71,33.71,0,0,0,9.14,25.45A34.15,34.15,0,0,0,210,173.48Z"
    }, null, -1),
    rb = [lb],
    cb = {
        key: 4
    },
    db = n("path", {
        d: "M220.27,158.54a8,8,0,0,0-7.7-.46,20,20,0,1,1,0-36.16A8,8,0,0,0,224,114.69V72a16,16,0,0,0-16-16H171.78a35.36,35.36,0,0,0,.22-4,36.11,36.11,0,0,0-11.36-26.24,36,36,0,0,0-60.55,23.62,36.56,36.56,0,0,0,.14,6.62H64A16,16,0,0,0,48,72v32.22a35.36,35.36,0,0,0-4-.22,36.12,36.12,0,0,0-26.24,11.36,35.7,35.7,0,0,0-9.69,27,36.08,36.08,0,0,0,33.31,33.6,35.68,35.68,0,0,0,6.62-.14V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V165.31A8,8,0,0,0,220.27,158.54ZM208,208H64V165.31a8,8,0,0,0-11.43-7.23,20,20,0,1,1,0-36.16A8,8,0,0,0,64,114.69V72h46.69a8,8,0,0,0,7.23-11.43,20,20,0,1,1,36.16,0A8,8,0,0,0,161.31,72H208v32.23a35.68,35.68,0,0,0-6.62-.14A36,36,0,0,0,204,176a35.36,35.36,0,0,0,4-.22Z"
    }, null, -1),
    ub = [db],
    pb = {
        key: 5
    },
    fb = n("path", {
        d: "M218.14,161.93a4,4,0,0,0-3.86-.24,24,24,0,0,1-34.23-23.25,24,24,0,0,1,34.23-20.13A4,4,0,0,0,220,114.7V72a12,12,0,0,0-12-12H167a32,32,0,1,0-62.91-10.33A32.57,32.57,0,0,0,105,60H64A12,12,0,0,0,52,72v37a32,32,0,1,0-10.33,62.91A32.28,32.28,0,0,0,52,171v37a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V165.31A4,4,0,0,0,218.14,161.93ZM212,208a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V165.31a4,4,0,0,0-1.86-3.38,4,4,0,0,0-3.85-.24,24,24,0,0,1-34.24-20.13,24,24,0,0,1,34.24-23.25A4,4,0,0,0,60,114.7V72a4,4,0,0,1,4-4h46.69a4,4,0,0,0,3.62-5.71,24,24,0,0,1,20.13-34.24,24,24,0,0,1,23.25,34.24A4,4,0,0,0,161.31,68H208a4,4,0,0,1,4,4v37a32.57,32.57,0,0,0-10.33-.94A32,32,0,1,0,212,171Z"
    }, null, -1),
    hb = [fb],
    mb = {
        name: "PhPuzzlePiece"
    },
    Ei = H({
        ...mb,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", Kx, Qx)) : l.value === "duotone" ? (u(), p("g", Xx, sb)) : l.value === "fill" ? (u(), p("g", ab, nb)) : l.value === "light" ? (u(), p("g", ob, rb)) : l.value === "regular" ? (u(), p("g", cb, ub)) : l.value === "thin" ? (u(), p("g", pb, hb)) : D("", !0)], 16, Yx))
        }
    }),
    gb = ["width", "height", "fill", "transform"],
    vb = {
        key: 0
    },
    yb = n("path", {
        d: "M100,52H40A20,20,0,0,0,20,72v64a20,20,0,0,0,20,20H96v4a28,28,0,0,1-28,28,12,12,0,0,0,0,24,52.06,52.06,0,0,0,52-52V72A20,20,0,0,0,100,52Zm-4,80H44V76H96ZM216,52H156a20,20,0,0,0-20,20v64a20,20,0,0,0,20,20h56v4a28,28,0,0,1-28,28,12,12,0,0,0,0,24,52.06,52.06,0,0,0,52-52V72A20,20,0,0,0,216,52Zm-4,80H160V76h52Z"
    }, null, -1),
    _b = [yb],
    xb = {
        key: 1
    },
    bb = n("path", {
        d: "M108,72v72H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60A8,8,0,0,1,108,72Zm108-8H156a8,8,0,0,0-8,8v64a8,8,0,0,0,8,8h68V72A8,8,0,0,0,216,64Z",
        opacity: "0.2"
    }, null, -1),
    wb = n("path", {
        d: "M100,56H40A16,16,0,0,0,24,72v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,100,56Zm0,80H40V72h60ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Zm0,80H156V72h60Z"
    }, null, -1),
    $b = [bb, wb],
    Ab = {
        key: 2
    },
    Sb = n("path", {
        d: "M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z"
    }, null, -1),
    Mb = [Sb],
    Cb = {
        key: 3
    },
    Hb = n("path", {
        d: "M100,58H40A14,14,0,0,0,26,72v64a14,14,0,0,0,14,14h62v10a34,34,0,0,1-34,34,6,6,0,0,0,0,12,46.06,46.06,0,0,0,46-46V72A14,14,0,0,0,100,58Zm2,80H40a2,2,0,0,1-2-2V72a2,2,0,0,1,2-2h60a2,2,0,0,1,2,2ZM216,58H156a14,14,0,0,0-14,14v64a14,14,0,0,0,14,14h62v10a34,34,0,0,1-34,34,6,6,0,0,0,0,12,46.06,46.06,0,0,0,46-46V72A14,14,0,0,0,216,58Zm2,80H156a2,2,0,0,1-2-2V72a2,2,0,0,1,2-2h60a2,2,0,0,1,2,2Z"
    }, null, -1),
    Zb = [Hb],
    Tb = {
        key: 4
    },
    Vb = n("path", {
        d: "M100,56H40A16,16,0,0,0,24,72v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,100,56Zm0,80H40V72h60ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Zm0,80H156V72h60Z"
    }, null, -1),
    kb = [Vb],
    Pb = {
        key: 5
    },
    Lb = n("path", {
        d: "M100,60H40A12,12,0,0,0,28,72v64a12,12,0,0,0,12,12h64v12a36,36,0,0,1-36,36,4,4,0,0,0,0,8,44.05,44.05,0,0,0,44-44V72A12,12,0,0,0,100,60Zm4,80H40a4,4,0,0,1-4-4V72a4,4,0,0,1,4-4h60a4,4,0,0,1,4,4ZM216,60H156a12,12,0,0,0-12,12v64a12,12,0,0,0,12,12h64v12a36,36,0,0,1-36,36,4,4,0,0,0,0,8,44.05,44.05,0,0,0,44-44V72A12,12,0,0,0,216,60Zm4,80H156a4,4,0,0,1-4-4V72a4,4,0,0,1,4-4h60a4,4,0,0,1,4,4Z"
    }, null, -1),
    Eb = [Lb],
    Bb = {
        name: "PhQuotes"
    },
    Ib = H({
        ...Bb,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", vb, _b)) : l.value === "duotone" ? (u(), p("g", xb, $b)) : l.value === "fill" ? (u(), p("g", Ab, Mb)) : l.value === "light" ? (u(), p("g", Cb, Zb)) : l.value === "regular" ? (u(), p("g", Tb, kb)) : l.value === "thin" ? (u(), p("g", Pb, Eb)) : D("", !0)], 16, gb))
        }
    }),
    Ob = ["width", "height", "fill", "transform"],
    Nb = {
        key: 0
    },
    zb = n("path", {
        d: "M252,104a36,36,0,0,0-57.4-28.93,145.56,145.56,0,0,0-52.54-14.45l3.8-22.81,15.67,2.61a24,24,0,1,0,3.95-23.67L138,12.16A12,12,0,0,0,124.16,22l-6.38,38.31C97.48,61.62,78,66.7,61.4,75.07a36,36,0,0,0-47.52,53.68A62.87,62.87,0,0,0,12,144c0,23.29,12.65,44.87,35.63,60.78C69.26,219.75,97.8,228,128,228s58.74-8.25,80.37-23.22C231.35,188.87,244,167.29,244,144a62.87,62.87,0,0,0-1.88-15.25A36.16,36.16,0,0,0,252,104Zm-29.91,10.34a12,12,0,0,0-5,15A39.61,39.61,0,0,1,220,144c0,15.18-9,29.75-25.29,41.05C177.05,197.27,153.36,204,128,204s-49-6.73-66.71-18.95C45,173.75,36,159.18,36,144a39.74,39.74,0,0,1,2.84-14.64,12,12,0,0,0-4.93-15A12,12,0,1,1,49.71,97a12,12,0,0,0,15.94,3.18l.22-.13C82.94,89.68,105,84,128,84H128c23,0,45,5.69,62.09,16l.22.13A12,12,0,0,0,206.29,97,11.88,11.88,0,0,1,216,92a12,12,0,0,1,6.09,22.34ZM88,148a20,20,0,1,1,20-20A20,20,0,0,1,88,148Zm100-20a20,20,0,1,1-20-20A20,20,0,0,1,188,128Zm-20.52,40.52a12,12,0,0,1-8,15,111.88,111.88,0,0,1-63,0,12,12,0,0,1,7-23,88.12,88.12,0,0,0,49,0A12,12,0,0,1,167.48,168.52Z"
    }, null, -1),
    jb = [zb],
    Rb = {
        key: 1
    },
    Db = n("path", {
        d: "M228.21,124.67h0A51.6,51.6,0,0,1,232,144c0,39.76-46.56,72-104,72S24,183.76,24,144a51.6,51.6,0,0,1,3.79-19.33h0A24,24,0,1,1,59.41,89.88h0C77.72,78.75,101.72,72,128,72s50.28,6.75,68.59,17.88h0a24,24,0,1,1,31.62,34.79Z",
        opacity: "0.2"
    }, null, -1),
    Fb = n("path", {
        d: "M248,104a32,32,0,0,0-52.94-24.19c-16.75-8.9-36.76-14.28-57.66-15.53l5.19-31.17,17.72,2.72a24,24,0,1,0,2.87-15.74l-26-4a8,8,0,0,0-9.11,6.59L121.2,64.16c-21.84.94-42.82,6.38-60.26,15.65a32,32,0,0,0-42.59,47.74A59,59,0,0,0,16,144c0,21.93,12,42.35,33.91,57.49C70.88,216,98.61,224,128,224s57.12-8,78.09-22.51C228,186.35,240,165.93,240,144a59,59,0,0,0-2.35-16.45A32.16,32.16,0,0,0,248,104ZM184,24a8,8,0,1,1-8,8A8,8,0,0,1,184,24Zm40.13,93.78a8,8,0,0,0-3.29,10A43.62,43.62,0,0,1,224,144c0,16.53-9.59,32.27-27,44.33C178.67,201,154.17,208,128,208s-50.67-7-69-19.67C41.59,176.27,32,160.53,32,144a43.75,43.75,0,0,1,3.14-16.17,8,8,0,0,0-3.27-10A16,16,0,1,1,52.94,94.59a8,8,0,0,0,10.63,2.12l.18-.11C81.45,85.9,104.25,80,128,80h0c23.73,0,46.53,5.9,64.23,16.6l.18.11a8,8,0,0,0,10.63-2.12,16,16,0,1,1,21.07,23.19ZM88,144a16,16,0,1,1,16-16A16,16,0,0,1,88,144Zm96-16a16,16,0,1,1-16-16A16,16,0,0,1,184,128Zm-16.93,44.25a8,8,0,0,1-3.32,10.82,76.18,76.18,0,0,1-71.5,0,8,8,0,1,1,7.5-14.14,60.18,60.18,0,0,0,56.5,0A8,8,0,0,1,167.07,172.25Z"
    }, null, -1),
    qb = [Db, Fb],
    Wb = {
        key: 2
    },
    Gb = n("path", {
        d: "M248,104a32,32,0,0,0-52.94-24.19c-16.75-8.9-36.76-14.28-57.66-15.53l5.19-31.17,17.72,2.72a24,24,0,1,0,2.87-15.74l-26-4a8,8,0,0,0-9.11,6.59L121.2,64.16c-21.84.94-42.82,6.38-60.26,15.65a32,32,0,0,0-42.59,47.74A59,59,0,0,0,16,144c0,21.93,12,42.35,33.91,57.49C70.88,216,98.61,224,128,224s57.12-8,78.09-22.51C228,186.35,240,165.93,240,144a59,59,0,0,0-2.35-16.45A32.16,32.16,0,0,0,248,104ZM184,24a8,8,0,1,1-8,8A8,8,0,0,1,184,24ZM72,128a16,16,0,1,1,16,16A16,16,0,0,1,72,128Zm91.75,55.07a76.18,76.18,0,0,1-71.5,0,8,8,0,1,1,7.5-14.14,60.18,60.18,0,0,0,56.5,0,8,8,0,1,1,7.5,14.14ZM168,144a16,16,0,1,1,16-16A16,16,0,0,1,168,144Z"
    }, null, -1),
    Ub = [Gb],
    Yb = {
        key: 3
    },
    Kb = n("path", {
        d: "M246,104a30,30,0,0,0-50.64-21.76C178,72.75,157,67.17,135.05,66.18l5.89-35.35,21.16,3.26a22,22,0,1,0,2.17-11.81l-27.36-4.21A6,6,0,0,0,130.08,23L122.9,66.09c-22.64.74-44.41,6.38-62.26,16.15a30,30,0,1,0-40,44.66A57.07,57.07,0,0,0,18,144c0,21.26,11.74,41.09,33.05,55.84C71.68,214.13,99,222,128,222s56.32-7.87,76.95-22.16C226.26,185.09,238,165.26,238,144a57.07,57.07,0,0,0-2.63-17.1A30.16,30.16,0,0,0,246,104ZM184,22a10,10,0,1,1-10,10A10,10,0,0,1,184,22Zm41.15,97.51a6,6,0,0,0-2.46,7.51A45.65,45.65,0,0,1,226,144c0,36.39-44,66-98,66s-98-29.61-98-66a45.63,45.63,0,0,1,3.3-16.94,6,6,0,0,0-2.45-7.55,18,18,0,1,1,23.71-26.1,6,6,0,0,0,7.79,1.7,3.79,3.79,0,0,0,.34-.2C80.7,84,103.89,78,128,78h0c24.1,0,47.28,6,65.29,16.9l.16.11a6,6,0,0,0,8-1.6,18,18,0,1,1,23.71,26.1ZM165.3,173.19a6,6,0,0,1-2.49,8.11,74.22,74.22,0,0,1-69.62,0,6,6,0,0,1,5.62-10.6,62.2,62.2,0,0,0,58.38,0A6,6,0,0,1,165.3,173.19ZM88,142a14,14,0,1,1,14-14A14,14,0,0,1,88,142Zm94-14a14,14,0,1,1-14-14A14,14,0,0,1,182,128Z"
    }, null, -1),
    Jb = [Kb],
    Qb = {
        key: 4
    },
    Xb = n("path", {
        d: "M248,104a32,32,0,0,0-52.94-24.19c-16.75-8.9-36.76-14.28-57.66-15.53l5.19-31.17,17.72,2.72a24,24,0,1,0,2.87-15.74l-26-4a8,8,0,0,0-9.11,6.59L121.2,64.16c-21.84.94-42.82,6.38-60.26,15.65a32,32,0,0,0-42.59,47.74A59,59,0,0,0,16,144c0,21.93,12,42.35,33.91,57.49C70.88,216,98.61,224,128,224s57.12-8,78.09-22.51C228,186.35,240,165.93,240,144a59,59,0,0,0-2.35-16.45A32.16,32.16,0,0,0,248,104ZM184,24a8,8,0,1,1-8,8A8,8,0,0,1,184,24Zm40.13,93.78a8,8,0,0,0-3.29,10A43.58,43.58,0,0,1,224,144c0,16.53-9.59,32.27-27,44.33C178.67,201,154.17,208,128,208s-50.67-7-69-19.67C41.59,176.27,32,160.53,32,144a43.75,43.75,0,0,1,3.14-16.17,8,8,0,0,0-3.27-10A16,16,0,1,1,52.94,94.59a8,8,0,0,0,10.45,2.23l.36-.22C81.45,85.9,104.25,80,128,80h0c23.73,0,46.53,5.9,64.23,16.6l.42.25a8,8,0,0,0,10.39-2.26,16,16,0,1,1,21.07,23.19ZM88,144a16,16,0,1,1,16-16A16,16,0,0,1,88,144Zm96-16a16,16,0,1,1-16-16A16,16,0,0,1,184,128Zm-16.93,44.25a8,8,0,0,1-3.32,10.82,76.18,76.18,0,0,1-71.5,0,8,8,0,1,1,7.5-14.14,60.18,60.18,0,0,0,56.5,0A8,8,0,0,1,167.07,172.25Z"
    }, null, -1),
    ew = [Xb],
    tw = {
        key: 5
    },
    sw = n("path", {
        d: "M244,104a28,28,0,0,0-48.3-19.28c-17.9-10.11-40-15.94-63-16.65l6.59-39.52L164,32.36a20,20,0,1,0,1.46-7.87l-28.87-4.44a4,4,0,0,0-4.56,3.29L124.6,68.05c-23.48.52-46.06,6.36-64.3,16.67A28,28,0,1,0,23,126.21,55.14,55.14,0,0,0,20,144c0,20.58,11.43,39.83,32.18,54.2C72.49,212.26,99.42,220,128,220s55.51-7.74,75.82-21.8C224.57,183.83,236,164.58,236,144a55.14,55.14,0,0,0-3-17.79A28.14,28.14,0,0,0,244,104ZM184,20a12,12,0,1,1-12,12A12,12,0,0,1,184,20Zm40.53,106.25A47.69,47.69,0,0,1,228,144c0,37.5-44.86,68-100,68S28,181.5,28,144a47.71,47.71,0,0,1,3.45-17.72,4,4,0,0,0-1.62-5,20,20,0,1,1,26.35-29,4,4,0,0,0,5.19,1.13l.25-.16C80,82.11,103.51,76,128,76h0c24.48,0,48,6.11,66.37,17.21l.25.16a4,4,0,0,0,5.19-1.13,20,20,0,1,1,26.35,29A4,4,0,0,0,224.53,126.25Zm-61,47.88a4,4,0,0,1-1.65,5.4,72.22,72.22,0,0,1-67.76,0,4,4,0,0,1,3.76-7.06,64.23,64.23,0,0,0,60.24,0A4,4,0,0,1,163.53,174.13ZM88,140a12,12,0,1,1,12-12A12,12,0,0,1,88,140Zm92-12a12,12,0,1,1-12-12A12,12,0,0,1,180,128Z"
    }, null, -1),
    aw = [sw],
    iw = {
        name: "PhRedditLogo"
    },
    nw = H({
        ...iw,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", Nb, jb)) : l.value === "duotone" ? (u(), p("g", Rb, qb)) : l.value === "fill" ? (u(), p("g", Wb, Ub)) : l.value === "light" ? (u(), p("g", Yb, Jb)) : l.value === "regular" ? (u(), p("g", Qb, ew)) : l.value === "thin" ? (u(), p("g", tw, aw)) : D("", !0)], 16, Ob))
        }
    }),
    ow = ["width", "height", "fill", "transform"],
    lw = {
        key: 0
    },
    rw = n("path", {
        d: "M227.85,46.89a20,20,0,0,0-18.74-18.74c-13.13-.77-46.65.42-74.48,28.24L131,60H74.36a19.83,19.83,0,0,0-14.14,5.86L25.87,100.19a20,20,0,0,0,11.35,33.95l37.14,5.18,42.32,42.32,5.19,37.18A19.88,19.88,0,0,0,135.34,235a20.13,20.13,0,0,0,6.37,1,19.9,19.9,0,0,0,14.1-5.87l34.34-34.35A19.85,19.85,0,0,0,196,181.64V125l3.6-3.59C227.43,93.54,228.62,60,227.85,46.89ZM76,84h31L75.75,115.28l-27.23-3.8ZM151.6,73.37A72.27,72.27,0,0,1,204,52a72.17,72.17,0,0,1-21.38,52.41L128,159,97,128ZM172,180l-27.49,27.49-3.8-27.23L172,149Zm-71.67,21.62C91.67,213.65,74.16,228,40,228a12,12,0,0,1-12-12c0-34.15,14.35-51.66,26.39-60.33a12,12,0,0,1,14,19.47c-6,4.31-12.89,12.5-15.42,27.87,15.37-2.53,23.56-9.44,27.87-15.42a12,12,0,1,1,19.47,14Z"
    }, null, -1),
    cw = [rw],
    dw = {
        key: 1
    },
    uw = n("path", {
        d: "M72,160l24,24s-8,32-56,32C40,168,72,160,72,160Zm64-88H74.35a8,8,0,0,0-5.65,2.34L34.35,108.69a8,8,0,0,0,4.53,13.57L80,128Zm-8,104,5.74,41.12a8,8,0,0,0,13.57,4.53l34.35-34.35a8,8,0,0,0,2.34-5.65V120Z",
        opacity: "0.2"
    }, null, -1),
    pw = n("path", {
        d: "M103.77,185.94C103.38,187.49,93.63,224,40,224a8,8,0,0,1-8-8c0-53.63,36.51-63.38,38.06-63.77a8,8,0,0,1,3.88,15.53c-.9.25-22.42,6.54-25.56,39.86C81.7,204.48,88,183,88.26,182a8,8,0,0,1,15.51,4Zm93-67.4L192,123.31v58.33A15.91,15.91,0,0,1,187.32,193L153,227.3A15.91,15.91,0,0,1,141.7,232a16.11,16.11,0,0,1-5.1-.83,15.94,15.94,0,0,1-10.78-12.92l-5.37-38.49L76.24,135.55l-38.47-5.37A16,16,0,0,1,28.7,103L63,68.68A15.91,15.91,0,0,1,74.36,64h58.33l4.77-4.77c26.68-26.67,58.83-27.82,71.41-27.07a16,16,0,0,1,15,15C224.6,59.71,223.45,91.86,196.78,118.54ZM40,114.34l37.15,5.18L116.69,80H74.36ZM91.32,128,128,164.68l57.45-57.45a76.46,76.46,0,0,0,22.42-59.16,76.64,76.64,0,0,0-59.11,22.47ZM176,139.31l-39.53,39.53L141.67,216,176,181.64Z"
    }, null, -1),
    fw = [uw, pw],
    hw = {
        key: 2
    },
    mw = n("path", {
        d: "M103.77,185.94C103.38,187.49,93.63,224,40,224a8,8,0,0,1-8-8c0-53.63,36.51-63.38,38.06-63.77a8,8,0,0,1,3.88,15.53c-.9.25-22.42,6.54-25.56,39.86C81.7,204.48,88,183,88.26,182a8,8,0,0,1,15.51,4Zm93-67.4L192,123.31v58.33A15.91,15.91,0,0,1,187.32,193L153,227.3A15.91,15.91,0,0,1,141.7,232a16.11,16.11,0,0,1-5.1-.83,15.94,15.94,0,0,1-10.78-12.92l-5.37-38.49L76.24,135.55l-38.47-5.37A16,16,0,0,1,28.7,103L63,68.68A15.91,15.91,0,0,1,74.36,64h58.33l4.77-4.77c26.68-26.67,58.82-27.82,71.41-27.07a16,16,0,0,1,15,15C224.6,59.71,223.45,91.86,196.78,118.54ZM116.69,80H74.36L40,114.34l37.15,5.18ZM176,139.31l-39.53,39.53L141.67,216,176,181.64Z"
    }, null, -1),
    gw = [mw],
    vw = {
        key: 3
    },
    yw = n("path", {
        d: "M101.83,185.45C101.45,187,92.09,222,40,222a6,6,0,0,1-6-6c0-52.09,35.06-61.45,36.55-61.82a6,6,0,0,1,2.91,11.64c-1,.27-24.84,7.08-27.26,44,37.34-2.47,43.92-27,44-27.26a6,6,0,0,1,11.65,2.91Zm93.53-68.32h0L190,122.48v59.17a13.91,13.91,0,0,1-4.1,9.89l-34.35,34.35A14,14,0,0,1,127.8,218l-5.46-39.15L77.18,133.66,38.05,128.2a14,14,0,0,1-7.94-23.76L64.46,70.09A13.9,13.9,0,0,1,74.35,66h59.17l5.35-5.35c26.11-26.11,57.57-27.23,69.88-26.5a14,14,0,0,1,13.11,13.1C222.59,59.56,221.46,91,195.36,117.13Zm-155.63-.81,38.14,5.32L121.52,78H74.35a2,2,0,0,0-1.41.59L38.6,112.92a2,2,0,0,0-.49,2A1.93,1.93,0,0,0,39.73,116.32ZM178,134.48l-43.65,43.65,5.32,38.16a2,2,0,0,0,3.4,1.11l34.34-34.34a2,2,0,0,0,.59-1.41ZM209.88,48a2,2,0,0,0-1.83-1.83,78.47,78.47,0,0,0-60.69,23L88.49,128,128,167.51l51.76-51.75h0l7.11-7.11h0A78.47,78.47,0,0,0,209.88,48Z"
    }, null, -1),
    _w = [yw],
    xw = {
        key: 4
    },
    bw = n("path", {
        d: "M103.77,185.94C103.38,187.49,93.63,224,40,224a8,8,0,0,1-8-8c0-53.63,36.51-63.38,38.06-63.77a8,8,0,0,1,3.88,15.53c-.9.25-22.42,6.54-25.56,39.86C81.7,204.48,88,183,88.26,182a8,8,0,0,1,15.51,4Zm93-67.4L192,123.31v58.33A15.91,15.91,0,0,1,187.32,193L153,227.3A15.91,15.91,0,0,1,141.7,232a16.11,16.11,0,0,1-5.1-.83,15.94,15.94,0,0,1-10.78-12.92l-5.37-38.49L76.24,135.55l-38.47-5.37A16,16,0,0,1,28.7,103L63,68.68A15.91,15.91,0,0,1,74.36,64h58.33l4.77-4.77c26.68-26.67,58.83-27.82,71.41-27.07a16,16,0,0,1,15,15C224.6,59.71,223.45,91.86,196.78,118.54ZM40,114.34l37.15,5.18L116.69,80H74.36ZM91.32,128,128,164.68l57.45-57.45a76.46,76.46,0,0,0,22.42-59.16,76.65,76.65,0,0,0-59.11,22.47ZM176,139.31l-39.53,39.53L141.67,216,176,181.64Z"
    }, null, -1),
    ww = [bw],
    $w = {
        key: 5
    },
    Aw = n("path", {
        d: "M99.88,185c-.35,1.43-9.33,35-59.88,35a4,4,0,0,1-4-4c0-50.54,33.6-59.53,35-59.88A4,4,0,0,1,73,163.88c-1.12.29-27.23,7.59-28.89,48,40.45-1.66,47.75-27.76,48.05-28.91a4,4,0,0,1,7.75,2ZM194,115.71,188,121.65v60a11.9,11.9,0,0,1-3.52,8.48l-34.34,34.35a12,12,0,0,1-20.37-6.79l-5.55-39.81L78.12,131.77l-39.79-5.55a12,12,0,0,1-6.81-20.37L65.87,71.51A11.9,11.9,0,0,1,74.35,68h60l5.94-5.94c25.53-25.53,56.3-26.62,68.35-25.91a12,12,0,0,1,11.22,11.22C220.57,59.41,219.48,90.18,194,115.71ZM39.44,118.3l39.14,5.46L126.35,76h-52a4,4,0,0,0-2.82,1.18L37.18,111.51a4,4,0,0,0,2.26,6.79ZM180,129.65l-47.77,47.77,5.46,39.15a4,4,0,0,0,6.79,2.25l34.35-34.34a4,4,0,0,0,1.17-2.83Zm8.28-19.59c23.23-23.24,24.23-51.26,23.58-62.22a3.93,3.93,0,0,0-3.71-3.71c-11-.65-39,.34-62.22,23.58l-7.11,7.11h0L85.66,128,128,170.34l53.18-53.17h0Z"
    }, null, -1),
    Sw = [Aw],
    Mw = {
        name: "PhRocketLaunch"
    },
    Vo = H({
        ...Mw,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", lw, cw)) : l.value === "duotone" ? (u(), p("g", dw, fw)) : l.value === "fill" ? (u(), p("g", hw, gw)) : l.value === "light" ? (u(), p("g", vw, _w)) : l.value === "regular" ? (u(), p("g", xw, ww)) : l.value === "thin" ? (u(), p("g", $w, Sw)) : D("", !0)], 16, ow))
        }
    }),
    Cw = ["width", "height", "fill", "transform"],
    Hw = {
        key: 0
    },
    Zw = n("path", {
        d: "M228.75,100.05c-3.52-3.67-7.15-7.46-8.34-10.33-1.06-2.56-1.14-7.83-1.21-12.47-.15-10-.34-22.44-9.18-31.27s-21.27-9-31.27-9.18c-4.64-.07-9.91-.15-12.47-1.21-2.87-1.19-6.66-4.82-10.33-8.34C148.87,20.46,140.05,12,128,12s-20.87,8.46-27.95,15.25c-3.67,3.52-7.46,7.15-10.33,8.34-2.56,1.06-7.83,1.14-12.47,1.21C67.25,37,54.81,37.14,46,46S37,67.25,36.8,77.25c-.07,4.64-.15,9.91-1.21,12.47-1.19,2.87-4.82,6.66-8.34,10.33C20.46,107.13,12,116,12,128S20.46,148.87,27.25,156c3.52,3.67,7.15,7.46,8.34,10.33,1.06,2.56,1.14,7.83,1.21,12.47.15,10,.34,22.44,9.18,31.27s21.27,9,31.27,9.18c4.64.07,9.91.15,12.47,1.21,2.87,1.19,6.66,4.82,10.33,8.34C107.13,235.54,116,244,128,244s20.87-8.46,27.95-15.25c3.67-3.52,7.46-7.15,10.33-8.34,2.56-1.06,7.83-1.14,12.47-1.21,10-.15,22.44-.34,31.27-9.18s9-21.27,9.18-31.27c.07-4.64.15-9.91,1.21-12.47,1.19-2.87,4.82-6.66,8.34-10.33C235.54,148.87,244,140.05,244,128S235.54,107.13,228.75,100.05Zm-17.32,39.29c-4.82,5-10.28,10.72-13.19,17.76-2.82,6.8-2.93,14.16-3,21.29-.08,5.36-.19,12.71-2.15,14.66s-9.3,2.07-14.66,2.15c-7.13.11-14.49.22-21.29,3-7,2.91-12.73,8.37-17.76,13.19C135.78,214.84,130.4,220,128,220s-7.78-5.16-11.34-8.57c-5-4.82-10.72-10.28-17.76-13.19-6.8-2.82-14.16-2.93-21.29-3-5.36-.08-12.71-.19-14.66-2.15s-2.07-9.3-2.15-14.66c-.11-7.13-.22-14.49-3-21.29-2.91-7-8.37-12.73-13.19-17.76C41.16,135.78,36,130.4,36,128s5.16-7.78,8.57-11.34c4.82-5,10.28-10.72,13.19-17.76,2.82-6.8,2.93-14.16,3-21.29C60.88,72.25,61,64.9,63,63s9.3-2.07,14.66-2.15c7.13-.11,14.49-.22,21.29-3,7-2.91,12.73-8.37,17.76-13.19C120.22,41.16,125.6,36,128,36s7.78,5.16,11.34,8.57c5,4.82,10.72,10.28,17.76,13.19,6.8,2.82,14.16,2.93,21.29,3,5.36.08,12.71.19,14.66,2.15s2.07,9.3,2.15,14.66c.11,7.13.22,14.49,3,21.29,2.91,7,8.37,12.73,13.19,17.76,3.41,3.56,8.57,8.94,8.57,11.34S214.84,135.78,211.43,139.34ZM176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51Z"
    }, null, -1),
    Tw = [Zw],
    Vw = {
        key: 1
    },
    kw = n("path", {
        d: "M232,128c0,12.51-17.82,21.95-22.68,33.69-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68c-11.32-4.68-30.65,1.42-39.85-7.78s-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128Z",
        opacity: "0.2"
    }, null, -1),
    Pw = n("path", {
        d: "M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-11.55,39.29c-4.79,5-9.75,10.17-12.38,16.52-2.52,6.1-2.63,13.07-2.73,19.82-.1,7-.21,14.33-3.32,17.43s-10.39,3.22-17.43,3.32c-6.75.1-13.72.21-19.82,2.73-6.35,2.63-11.52,7.59-16.52,12.38S132,224,128,224s-9.15-4.92-14.11-9.69-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82-2.63-6.35-7.59-11.52-12.38-16.52S32,132,32,128s4.92-9.15,9.69-14.11,9.75-10.17,12.38-16.52c2.52-6.1,2.63-13.07,2.73-19.82.1-7,.21-14.33,3.32-17.43S70.51,56.9,77.55,56.8c6.75-.1,13.72-.21,19.82-2.73,6.35-2.63,11.52-7.59,16.52-12.38S124,32,128,32s9.15,4.92,14.11,9.69,10.17,9.75,16.52,12.38c6.1,2.52,13.07,2.63,19.82,2.73,7,.1,14.33.21,17.43,3.32s3.22,10.39,3.32,17.43c.1,6.75.21,13.72,2.73,19.82,2.63,6.35,7.59,11.52,12.38,16.52S224,124,224,128,219.08,137.15,214.31,142.11ZM173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34Z"
    }, null, -1),
    Lw = [kw, Pw],
    Ew = {
        key: 2
    },
    Bw = n("path", {
        d: "M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-52.2,6.84-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"
    }, null, -1),
    Iw = [Bw],
    Ow = {
        key: 3
    },
    Nw = n("path", {
        d: "M224.42,104.2c-3.9-4.07-7.93-8.27-9.55-12.18-1.5-3.63-1.58-9-1.67-14.68-.14-9.38-.3-20-7.42-27.12S188,42.94,178.66,42.8c-5.68-.09-11-.17-14.68-1.67-3.91-1.62-8.11-5.65-12.18-9.55C145.16,25.22,137.64,18,128,18s-17.16,7.22-23.8,13.58c-4.07,3.9-8.27,7.93-12.18,9.55-3.63,1.5-9,1.58-14.68,1.67-9.38.14-20,.3-27.12,7.42S42.94,68,42.8,77.34c-.09,5.68-.17,11-1.67,14.68-1.62,3.91-5.65,8.11-9.55,12.18C25.22,110.84,18,118.36,18,128s7.22,17.16,13.58,23.8c3.9,4.07,7.93,8.27,9.55,12.18,1.5,3.63,1.58,9,1.67,14.68.14,9.38.3,20,7.42,27.12S68,213.06,77.34,213.2c5.68.09,11,.17,14.68,1.67,3.91,1.62,8.11,5.65,12.18,9.55C110.84,230.78,118.36,238,128,238s17.16-7.22,23.8-13.58c4.07-3.9,8.27-7.93,12.18-9.55,3.63-1.5,9-1.58,14.68-1.67,9.38-.14,20-.3,27.12-7.42s7.28-17.74,7.42-27.12c.09-5.68.17-11,1.67-14.68,1.62-3.91,5.65-8.11,9.55-12.18C230.78,145.16,238,137.64,238,128S230.78,110.84,224.42,104.2Zm-8.66,39.3c-4.67,4.86-9.5,9.9-12,15.9-2.38,5.74-2.48,12.52-2.58,19.08-.11,7.44-.23,15.14-3.9,18.82s-11.38,3.79-18.82,3.9c-6.56.1-13.34.2-19.08,2.58-6,2.48-11,7.31-15.91,12-5.25,5-10.68,10.24-15.49,10.24s-10.24-5.21-15.5-10.24c-4.86-4.67-9.9-9.5-15.9-12-5.74-2.38-12.52-2.48-19.08-2.58-7.44-.11-15.14-.23-18.82-3.9s-3.79-11.38-3.9-18.82c-.1-6.56-.2-13.34-2.58-19.08-2.48-6-7.31-11-12-15.91C35.21,138.24,30,132.81,30,128s5.21-10.24,10.24-15.5c4.67-4.86,9.5-9.9,12-15.9,2.38-5.74,2.48-12.52,2.58-19.08.11-7.44.23-15.14,3.9-18.82s11.38-3.79,18.82-3.9c6.56-.1,13.34-.2,19.08-2.58,6-2.48,11-7.31,15.91-12C117.76,35.21,123.19,30,128,30s10.24,5.21,15.5,10.24c4.86,4.67,9.9,9.5,15.9,12,5.74,2.38,12.52,2.48,19.08,2.58,7.44.11,15.14.23,18.82,3.9s3.79,11.38,3.9,18.82c.1,6.56.2,13.34,2.58,19.08,2.48,6,7.31,11,12,15.91,5,5.25,10.24,10.68,10.24,15.49S220.79,138.24,215.76,143.5ZM172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76Z"
    }, null, -1),
    zw = [Nw],
    jw = {
        key: 4
    },
    Rw = n("path", {
        d: "M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-11.55,39.29c-4.79,5-9.75,10.17-12.38,16.52-2.52,6.1-2.63,13.07-2.73,19.82-.1,7-.21,14.33-3.32,17.43s-10.39,3.22-17.43,3.32c-6.75.1-13.72.21-19.82,2.73-6.35,2.63-11.52,7.59-16.52,12.38S132,224,128,224s-9.15-4.92-14.11-9.69-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82-2.63-6.35-7.59-11.52-12.38-16.52S32,132,32,128s4.92-9.15,9.69-14.11,9.75-10.17,12.38-16.52c2.52-6.1,2.63-13.07,2.73-19.82.1-7,.21-14.33,3.32-17.43S70.51,56.9,77.55,56.8c6.75-.1,13.72-.21,19.82-2.73,6.35-2.63,11.52-7.59,16.52-12.38S124,32,128,32s9.15,4.92,14.11,9.69,10.17,9.75,16.52,12.38c6.1,2.52,13.07,2.63,19.82,2.73,7,.1,14.33.21,17.43,3.32s3.22,10.39,3.32,17.43c.1,6.75.21,13.72,2.73,19.82,2.63,6.35,7.59,11.52,12.38,16.52S224,124,224,128,219.08,137.15,214.31,142.11ZM173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34Z"
    }, null, -1),
    Dw = [Rw],
    Fw = {
        key: 5
    },
    qw = n("path", {
        d: "M223,105.58c-4-4.2-8.2-8.54-10-12.8-1.65-4-1.73-9.53-1.82-15.41-.14-9-.29-19.19-6.83-25.74s-16.74-6.69-25.74-6.83c-5.88-.09-11.43-.17-15.41-1.82-4.26-1.76-8.6-5.93-12.8-9.95-6.68-6.41-13.59-13-22.42-13s-15.74,6.62-22.42,13c-4.2,4-8.54,8.2-12.8,10-4,1.65-9.53,1.73-15.41,1.82-9,.14-19.19.29-25.74,6.83S44.94,68.37,44.8,77.37c-.09,5.88-.17,11.43-1.82,15.41-1.76,4.26-5.93,8.6-9.95,12.8-6.41,6.68-13,13.59-13,22.42s6.62,15.74,13,22.42c4,4.2,8.2,8.54,10,12.8,1.65,4,1.73,9.53,1.82,15.41.14,9,.29,19.19,6.83,25.74s16.74,6.69,25.74,6.83c5.88.09,11.43.17,15.41,1.82,4.26,1.76,8.6,5.93,12.8,9.95,6.68,6.41,13.59,13,22.42,13s15.74-6.62,22.42-13c4.2-4,8.54-8.2,12.8-10,4-1.65,9.53-1.73,15.41-1.82,9-.14,19.19-.29,25.74-6.83s6.69-16.74,6.83-25.74c.09-5.88.17-11.43,1.82-15.41,1.76-4.26,5.93-8.6,9.95-12.8,6.41-6.68,13-13.59,13-22.42S229.38,112.26,223,105.58Zm-5.78,39.3c-4.54,4.73-9.24,9.63-11.57,15.28-2.23,5.39-2.33,12-2.43,18.35-.12,8.2-.24,16-4.49,20.2s-12,4.37-20.2,4.49c-6.37.1-13,.2-18.35,2.43-5.65,2.33-10.55,7-15.28,11.57C139.09,222.75,133.62,228,128,228s-11.09-5.25-16.88-10.8c-4.73-4.54-9.63-9.24-15.28-11.57-5.39-2.23-12-2.33-18.35-2.43-8.2-.12-15.95-.24-20.2-4.49s-4.37-12-4.49-20.2c-.1-6.37-.2-13-2.43-18.35-2.33-5.65-7-10.55-11.57-15.28C33.25,139.09,28,133.62,28,128s5.25-11.09,10.8-16.88c4.54-4.73,9.24-9.63,11.57-15.28,2.23-5.39,2.33-12,2.43-18.35.12-8.2.24-15.95,4.49-20.2s12-4.37,20.2-4.49c6.37-.1,13-.2,18.35-2.43,5.65-2.33,10.55-7,15.28-11.57C116.91,33.25,122.38,28,128,28s11.09,5.25,16.88,10.8c4.73,4.54,9.63,9.24,15.28,11.57,5.39,2.23,12,2.33,18.35,2.43,8.2.12,16,.24,20.2,4.49s4.37,12,4.49,20.2c.1,6.37.2,13,2.43,18.35,2.33,5.65,7,10.55,11.57,15.28,5.55,5.79,10.8,11.26,10.8,16.88S222.75,139.09,217.2,144.88Zm-46.37-43.71a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17Z"
    }, null, -1),
    Ww = [qw],
    Gw = {
        name: "PhSealCheck"
    },
    Uw = H({
        ...Gw,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", Hw, Tw)) : l.value === "duotone" ? (u(), p("g", Vw, Lw)) : l.value === "fill" ? (u(), p("g", Ew, Iw)) : l.value === "light" ? (u(), p("g", Ow, zw)) : l.value === "regular" ? (u(), p("g", jw, Dw)) : l.value === "thin" ? (u(), p("g", Fw, Ww)) : D("", !0)], 16, Cw))
        }
    }),
    Yw = ["width", "height", "fill", "transform"],
    Kw = {
        key: 0
    },
    Jw = n("path", {
        d: "M243,96.05a20,20,0,0,0-17.26-13.72l-57-4.93-22.3-53.14h0a20,20,0,0,0-36.82,0L87.29,77.4l-57,4.93A20,20,0,0,0,18.87,117.4l43.32,37.8-13,56.24A20,20,0,0,0,79,233.1l49-29.76,49,29.76a20,20,0,0,0,29.8-21.66l-13-56.24,43.32-37.8A20,20,0,0,0,243,96.05Zm-66.75,42.62a20,20,0,0,0-6.35,19.63l11.39,49.32-42.94-26.08a19.9,19.9,0,0,0-20.7,0L74.71,207.62,86.1,158.3a20,20,0,0,0-6.35-19.63L41.66,105.44,91.8,101.1a19.92,19.92,0,0,0,16.69-12.19L128,42.42l19.51,46.49A19.92,19.92,0,0,0,164.2,101.1l50.14,4.34Z"
    }, null, -1),
    Qw = [Jw],
    Xw = {
        key: 1
    },
    e$ = n("path", {
        d: "M184.13,147.7a8.08,8.08,0,0,0-2.54,7.89l13.52,58.54a8,8,0,0,1-11.89,8.69l-51.1-31a7.93,7.93,0,0,0-8.24,0l-51.1,31a8,8,0,0,1-11.89-8.69l13.52-58.54a8.08,8.08,0,0,0-2.54-7.89L26.76,108.35A8,8,0,0,1,31.3,94.28l59.46-5.14a8,8,0,0,0,6.67-4.88L120.66,28.9a8,8,0,0,1,14.68,0l23.23,55.36a8,8,0,0,0,6.67,4.88l59.46,5.14a8,8,0,0,1,4.54,14.07Z",
        opacity: "0.2"
    }, null, -1),
    t$ = n("path", {
        d: "M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"
    }, null, -1),
    s$ = [e$, t$],
    a$ = {
        key: 2
    },
    i$ = n("path", {
        d: "M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
    }, null, -1),
    n$ = [i$],
    o$ = {
        key: 3
    },
    l$ = n("path", {
        d: "M237.3,97.9a13.78,13.78,0,0,0-12.08-9.6l-59.46-5.14a2,2,0,0,1-1.65-1.22L140.88,26.58h0a14,14,0,0,0-25.76,0L91.89,81.94a2,2,0,0,1-1.65,1.22L30.78,88.3A13.78,13.78,0,0,0,18.7,97.9a14,14,0,0,0,4.11,15l45.11,39.35a2.06,2.06,0,0,1,.64,2L55,212.76a14,14,0,0,0,5.45,14.56,13.74,13.74,0,0,0,15.4.62l51.11-31a1.9,1.9,0,0,1,2,0l51.11,31A14,14,0,0,0,201,212.76l-13.52-58.53a2.06,2.06,0,0,1,.64-2l45.11-39.35A14,14,0,0,0,237.3,97.9Zm-12,5.92-45.11,39.35a14,14,0,0,0-4.44,13.76l13.52,58.53a2,2,0,0,1-.79,2.13,1.81,1.81,0,0,1-2.14.09l-51.11-31a13.92,13.92,0,0,0-14.46,0l-51.11,31a1.81,1.81,0,0,1-2.14-.09,2,2,0,0,1-.79-2.13l13.52-58.53a14,14,0,0,0-4.44-13.76L30.7,103.82a2,2,0,0,1-.59-2.19,1.86,1.86,0,0,1,1.7-1.38l59.47-5.14A14,14,0,0,0,103,86.58l23.23-55.36a2,2,0,0,1,3.62,0L153,86.58a14,14,0,0,0,11.68,8.53l59.47,5.14a1.86,1.86,0,0,1,1.7,1.38A2,2,0,0,1,225.3,103.82Z"
    }, null, -1),
    r$ = [l$],
    c$ = {
        key: 4
    },
    d$ = n("path", {
        d: "M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"
    }, null, -1),
    u$ = [d$],
    p$ = {
        key: 5
    },
    f$ = n("path", {
        d: "M235.38,98.53A11.82,11.82,0,0,0,225,90.29l-59.45-5.14a4,4,0,0,1-3.32-2.44L139,27.36h0a11.95,11.95,0,0,0-22.06,0L93.74,82.71a4,4,0,0,1-3.32,2.44L31,90.29a12,12,0,0,0-6.83,21.07l45.1,39.35a4,4,0,0,1,1.28,4L57,213.22a11.88,11.88,0,0,0,4.67,12.48,11.76,11.76,0,0,0,13.19.53l51.1-31a3.89,3.89,0,0,1,4.08,0l51.1,31a12,12,0,0,0,17.86-13l-13.52-58.54a4,4,0,0,1,1.28-4l45.1-39.35A11.89,11.89,0,0,0,235.38,98.53Zm-8.78,6.8-45.1,39.35a12,12,0,0,0-3.82,11.8L191.2,215a4,4,0,0,1-1.56,4.2,3.86,3.86,0,0,1-4.35.17l-51.1-31a11.88,11.88,0,0,0-12.38,0l-51.1,31a3.86,3.86,0,0,1-4.35-.17A4,4,0,0,1,64.8,215l13.52-58.54a12,12,0,0,0-3.82-11.8L29.4,105.33A4,4,0,0,1,28.22,101a4,4,0,0,1,3.44-2.75l59.45-5.14a12,12,0,0,0,10-7.31l23.22-55.36a4,4,0,0,1,7.32,0l23.22,55.36a12,12,0,0,0,10,7.31l59.45,5.14a4,4,0,0,1,3.44,2.75A4,4,0,0,1,226.6,105.33Z"
    }, null, -1),
    h$ = [f$],
    m$ = {
        name: "PhStar"
    },
    dt = H({
        ...m$,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", Kw, Qw)) : l.value === "duotone" ? (u(), p("g", Xw, s$)) : l.value === "fill" ? (u(), p("g", a$, n$)) : l.value === "light" ? (u(), p("g", o$, r$)) : l.value === "regular" ? (u(), p("g", c$, u$)) : l.value === "thin" ? (u(), p("g", p$, h$)) : D("", !0)], 16, Yw))
        }
    }),
    g$ = ["width", "height", "fill", "transform"],
    v$ = {
        key: 0
    },
    y$ = n("path", {
        d: "M128,44a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,44Zm0,168a72,72,0,1,1,72-72A72.08,72.08,0,0,1,128,212ZM164.49,99.51a12,12,0,0,1,0,17l-28,28a12,12,0,0,1-17-17l28-28A12,12,0,0,1,164.49,99.51ZM92,16A12,12,0,0,1,104,4h48a12,12,0,0,1,0,24H104A12,12,0,0,1,92,16Z"
    }, null, -1),
    _$ = [y$],
    x$ = {
        key: 1
    },
    b$ = n("path", {
        d: "M216,136a88,88,0,1,1-88-88A88,88,0,0,1,216,136Z",
        opacity: "0.2"
    }, null, -1),
    w$ = n("path", {
        d: "M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z"
    }, null, -1),
    $$ = [b$, w$],
    A$ = {
        key: 2
    },
    S$ = n("path", {
        d: "M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm45.66,61.66-40,40a8,8,0,0,1-11.32-11.32l40-40a8,8,0,0,1,11.32,11.32ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z"
    }, null, -1),
    M$ = [S$],
    C$ = {
        key: 3
    },
    H$ = n("path", {
        d: "M128,42a94,94,0,1,0,94,94A94.11,94.11,0,0,0,128,42Zm0,176a82,82,0,1,1,82-82A82.1,82.1,0,0,1,128,218ZM172.24,91.76a6,6,0,0,1,0,8.48l-40,40a6,6,0,1,1-8.48-8.48l40-40A6,6,0,0,1,172.24,91.76ZM98,16a6,6,0,0,1,6-6h48a6,6,0,0,1,0,12H104A6,6,0,0,1,98,16Z"
    }, null, -1),
    Z$ = [H$],
    T$ = {
        key: 4
    },
    V$ = n("path", {
        d: "M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z"
    }, null, -1),
    k$ = [V$],
    P$ = {
        key: 5
    },
    L$ = n("path", {
        d: "M128,44a92,92,0,1,0,92,92A92.1,92.1,0,0,0,128,44Zm0,176a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,220ZM170.83,93.17a4,4,0,0,1,0,5.66l-40,40a4,4,0,1,1-5.66-5.66l40-40A4,4,0,0,1,170.83,93.17ZM100,16a4,4,0,0,1,4-4h48a4,4,0,0,1,0,8H104A4,4,0,0,1,100,16Z"
    }, null, -1),
    E$ = [L$],
    B$ = {
        name: "PhTimer"
    },
    za = H({
        ...B$,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", v$, _$)) : l.value === "duotone" ? (u(), p("g", x$, $$)) : l.value === "fill" ? (u(), p("g", A$, M$)) : l.value === "light" ? (u(), p("g", C$, Z$)) : l.value === "regular" ? (u(), p("g", T$, k$)) : l.value === "thin" ? (u(), p("g", P$, E$)) : D("", !0)], 16, g$))
        }
    }),
    I$ = ["width", "height", "fill", "transform"],
    O$ = {
        key: 0
    },
    N$ = n("path", {
        d: "M172.46,83.15,160.31,88l12.15,4.85a12,12,0,1,1-8.92,22.29L128,100.93,92.46,115.15a12,12,0,0,1-8.92-22.29L95.69,88,83.54,83.15a12,12,0,0,1,8.92-22.29L128,75.08l35.54-14.22a12,12,0,0,1,8.92,22.29ZM228,79.75c.08,76.45-25.2,135.68-49,152.59a20,20,0,0,1-31.44-14.92c-.67-9.06-2.33-22-6.46-32.23C135.76,172,129.92,172,128,172c-7.76,0-11.77,9.92-13.08,13.18-4.13,10.22-5.79,23.17-6.46,32.23A20,20,0,0,1,88.51,236,19.86,19.86,0,0,1,77,232.34C53.2,215.43,27.92,156.2,28,79.75A60,60,0,0,1,88,20h80A60,60,0,0,1,228,79.75Zm-24,0A36,36,0,0,0,168,44H88A36,36,0,0,0,52,79.78c-.06,61.09,17.83,109.52,33.3,127.66C91.24,156,114.32,148,128,148s36.76,8,42.7,59.43C186.17,189.31,204.06,140.88,204,79.78Z"
    }, null, -1),
    z$ = [N$],
    j$ = {
        key: 1
    },
    R$ = n("path", {
        d: "M216,79.76c.07,71.42-23.48,128.23-44,142.78a8,8,0,0,1-12.52-6C158,196.31,152,160,128,160s-30,36.31-31.51,56.53a8,8,0,0,1-12.52,6C63.48,208,39.93,151.18,40,79.76A47.94,47.94,0,0,1,88,32h80A47.94,47.94,0,0,1,216,79.76Z",
        opacity: "0.2"
    }, null, -1),
    D$ = n("path", {
        d: "M171,71.42,149.54,80,171,88.57A8,8,0,1,1,165,103.42L128,88.61,91,103.42A8,8,0,1,1,85,88.57L106.46,80,85,71.42A8,8,0,1,1,91,56.57l37,14.81,37-14.81A8,8,0,1,1,171,71.42Zm53,8.33c0,42.72-8,75.4-14.7,95.28-8.72,25.8-20.62,45.49-32.64,54a15.69,15.69,0,0,1-15.95,1.41,16.09,16.09,0,0,1-9.18-13.36C150.68,205.58,146.48,168,128,168s-22.68,37.59-23.53,49.11a16.09,16.09,0,0,1-16,14.9,15.67,15.67,0,0,1-9.13-2.95c-12-8.53-23.92-28.22-32.64-54C40,155.15,32,122.47,32,79.75A56,56,0,0,1,88,24h80A56,56,0,0,1,224,79.75Zm-16,0A40,40,0,0,0,168,40H88A40,40,0,0,0,48,79.76c0,40.55,7.51,71.4,13.85,90.14,11.05,32.66,23,43.37,26.61,46C91.57,174.67,105.59,152,128,152s36.45,22.71,39.49,63.94h0c3.6-2.59,15.57-13.26,26.66-46C200.49,151.16,208,120.31,208,79.76Z"
    }, null, -1),
    F$ = [R$, D$],
    q$ = {
        key: 2
    },
    W$ = n("path", {
        d: "M168,24H88A56,56,0,0,0,32,79.75c0,42.72,8,75.4,14.7,95.28,8.72,25.8,20.62,45.49,32.64,54A15.67,15.67,0,0,0,88.47,232a16.09,16.09,0,0,0,16-14.9c.85-11.52,5-49.11,23.53-49.11s22.68,37.59,23.53,49.11a16.09,16.09,0,0,0,9.18,13.36,15.69,15.69,0,0,0,15.95-1.41c12-8.53,23.92-28.22,32.64-54C216,155.15,224,122.47,224,79.75A56,56,0,0,0,168,24Zm3,56.57A8,8,0,1,1,165,95.42L128,80.61,91,95.42A8,8,0,1,1,85,80.57L106.46,72,85,63.42A8,8,0,1,1,91,48.57l37,14.81,37-14.81A8,8,0,1,1,171,63.42L149.54,72Z"
    }, null, -1),
    G$ = [W$],
    U$ = {
        key: 3
    },
    Y$ = n("path", {
        d: "M170.23,69.57,144.16,80l26.07,10.43a6,6,0,1,1-4.46,11.14L128,86.46,90.23,101.57a6,6,0,0,1-7.8-3.35,6,6,0,0,1,3.34-7.79L111.84,80,85.77,69.57a6,6,0,0,1,4.46-11.14L128,73.53l37.77-15.1a6,6,0,1,1,4.46,11.14ZM222,79.75c0,42.45-7.91,74.9-14.59,94.64-8.59,25.41-20.22,44.74-31.91,53a13.7,13.7,0,0,1-13.94,1.23,14.1,14.1,0,0,1-8-11.69c-1.13-15.33-5.87-51-25.52-51s-24.39,35.64-25.52,51a14.1,14.1,0,0,1-14,13,13.69,13.69,0,0,1-8-2.58c-11.69-8.29-23.32-27.62-31.91-53C41.91,154.65,34,122.2,34,79.75A54,54,0,0,1,88,26h80A54,54,0,0,1,222,79.75Zm-12,0A42,42,0,0,0,168,38H88A42,42,0,0,0,46,79.76c-.07,73.93,24.69,126,41.44,137.88a1.77,1.77,0,0,0,1.88.15,2,2,0,0,0,1.19-1.71C93.46,176,106.77,154,128,154s34.54,22,37.49,62.09a2,2,0,0,0,1.19,1.71,1.77,1.77,0,0,0,1.88-.15C185.31,205.74,210.07,153.69,210,79.76Z"
    }, null, -1),
    K$ = [Y$],
    J$ = {
        key: 4
    },
    Q$ = n("path", {
        d: "M171,71.42,149.54,80,171,88.57A8,8,0,1,1,165,103.42L128,88.61,91,103.42A8,8,0,1,1,85,88.57L106.46,80,85,71.42A8,8,0,1,1,91,56.57l37,14.81,37-14.81A8,8,0,1,1,171,71.42Zm53,8.33c0,42.72-8,75.4-14.69,95.28-8.73,25.8-20.63,45.49-32.65,54a15.69,15.69,0,0,1-15.95,1.41,16.09,16.09,0,0,1-9.18-13.36C150.68,205.58,146.48,168,128,168s-22.68,37.59-23.53,49.11a16.09,16.09,0,0,1-16,14.9,15.67,15.67,0,0,1-9.13-2.95c-12-8.53-23.92-28.22-32.65-54C40,155.15,32,122.47,32,79.75A56,56,0,0,1,88,24h80A56,56,0,0,1,224,79.75Zm-16,0A40,40,0,0,0,168,40H88A40,40,0,0,0,48,79.76c0,40.55,7.51,71.4,13.85,90.14,11.05,32.66,23,43.37,26.61,46C91.57,174.67,105.59,152,128,152s36.45,22.71,39.49,63.94h0c3.6-2.59,15.57-13.26,26.66-46C200.49,151.16,208,120.31,208,79.76Z"
    }, null, -1),
    X$ = [Q$],
    eA = {
        key: 5
    },
    tA = n("path", {
        d: "M169.49,67.71,138.77,80l30.72,12.28A4,4,0,0,1,168,100a3.91,3.91,0,0,1-1.49-.29L128,84.31,89.49,99.71A3.91,3.91,0,0,1,88,100a4,4,0,0,1-1.49-7.72L117.23,80,86.51,67.71a4,4,0,0,1,3-7.43L128,75.69l38.51-15.41a4,4,0,0,1,3,7.43Zm50.51,12c.07,71.08-23.16,130.07-45.65,146.05a11.74,11.74,0,0,1-11.93,1,11.91,11.91,0,0,1-6.9-10C154.35,200.93,149.33,164,128,164s-26.35,36.94-27.52,52.82a12.11,12.11,0,0,1-12,11.19,11.77,11.77,0,0,1-6.83-2.2c-22.49-16-45.72-75-45.65-146A52,52,0,0,1,88,28h80A52,52,0,0,1,220,79.75Zm-8,0A44,44,0,0,0,168,36H88A44,44,0,0,0,44,79.76c-.07,67.58,21.9,125,42.29,139.51a3.77,3.77,0,0,0,3.89.33,4,4,0,0,0,2.32-3.37C95.36,177.39,108,156,128,156s32.64,21.4,35.5,60.24a4,4,0,0,0,2.32,3.37,3.77,3.77,0,0,0,3.89-.33C190.1,204.8,212.07,147.34,212,79.76Z"
    }, null, -1),
    sA = [tA],
    aA = {
        name: "PhTooth"
    },
    ko = H({
        ...aA,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", O$, z$)) : l.value === "duotone" ? (u(), p("g", j$, F$)) : l.value === "fill" ? (u(), p("g", q$, G$)) : l.value === "light" ? (u(), p("g", U$, K$)) : l.value === "regular" ? (u(), p("g", J$, X$)) : l.value === "thin" ? (u(), p("g", eA, sA)) : D("", !0)], 16, I$))
        }
    }),
    iA = ["width", "height", "fill", "transform"],
    nA = {
        key: 0
    },
    oA = n("path", {
        d: "M216,48H180V36A28,28,0,0,0,152,8H104A28,28,0,0,0,76,36V48H40a12,12,0,0,0,0,24h4V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM100,36a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V48H100Zm88,168H68V72H188ZM116,104v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z"
    }, null, -1),
    lA = [oA],
    rA = {
        key: 1
    },
    cA = n("path", {
        d: "M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",
        opacity: "0.2"
    }, null, -1),
    dA = n("path", {
        d: "M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"
    }, null, -1),
    uA = [cA, dA],
    pA = {
        key: 2
    },
    fA = n("path", {
        d: "M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"
    }, null, -1),
    hA = [fA],
    mA = {
        key: 3
    },
    gA = n("path", {
        d: "M216,50H174V40a22,22,0,0,0-22-22H104A22,22,0,0,0,82,40V50H40a6,6,0,0,0,0,12H50V208a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V62h10a6,6,0,0,0,0-12ZM94,40a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V50H94ZM194,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V62H194ZM110,104v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm48,0v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z"
    }, null, -1),
    vA = [gA],
    yA = {
        key: 4
    },
    _A = n("path", {
        d: "M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"
    }, null, -1),
    xA = [_A],
    bA = {
        key: 5
    },
    wA = n("path", {
        d: "M216,52H172V40a20,20,0,0,0-20-20H104A20,20,0,0,0,84,40V52H40a4,4,0,0,0,0,8H52V208a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V60h12a4,4,0,0,0,0-8ZM92,40a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V52H92ZM196,208a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V60H196ZM108,104v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Zm48,0v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Z"
    }, null, -1),
    $A = [wA],
    AA = {
        name: "PhTrash"
    },
    SA = H({
        ...AA,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", nA, lA)) : l.value === "duotone" ? (u(), p("g", rA, uA)) : l.value === "fill" ? (u(), p("g", pA, hA)) : l.value === "light" ? (u(), p("g", mA, vA)) : l.value === "regular" ? (u(), p("g", yA, xA)) : l.value === "thin" ? (u(), p("g", bA, $A)) : D("", !0)], 16, iA))
        }
    }),
    MA = ["width", "height", "fill", "transform"],
    CA = {
        key: 0
    },
    HA = n("path", {
        d: "M234.38,210a123.36,123.36,0,0,0-60.78-53.23,76,76,0,1,0-91.2,0A123.36,123.36,0,0,0,21.62,210a12,12,0,1,0,20.77,12c18.12-31.32,50.12-50,85.61-50s67.49,18.69,85.61,50a12,12,0,0,0,20.77-12ZM76,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,76,96Z"
    }, null, -1),
    ZA = [HA],
    TA = {
        key: 1
    },
    VA = n("path", {
        d: "M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z",
        opacity: "0.2"
    }, null, -1),
    kA = n("path", {
        d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
    }, null, -1),
    PA = [VA, kA],
    LA = {
        key: 2
    },
    EA = n("path", {
        d: "M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"
    }, null, -1),
    BA = [EA],
    IA = {
        key: 3
    },
    OA = n("path", {
        d: "M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z"
    }, null, -1),
    NA = [OA],
    zA = {
        key: 4
    },
    jA = n("path", {
        d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
    }, null, -1),
    RA = [jA],
    DA = {
        key: 5
    },
    FA = n("path", {
        d: "M227.46,214c-16.52-28.56-43-48.06-73.68-55.09a68,68,0,1,0-51.56,0c-30.64,7-57.16,26.53-73.68,55.09a4,4,0,0,0,6.92,4C55,184.19,89.62,164,128,164s73,20.19,92.54,54a4,4,0,0,0,3.46,2,3.93,3.93,0,0,0,2-.54A4,4,0,0,0,227.46,214ZM68,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,68,96Z"
    }, null, -1),
    qA = [FA],
    WA = {
        name: "PhUser"
    },
    Wt = H({
        ...WA,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", CA, ZA)) : l.value === "duotone" ? (u(), p("g", TA, PA)) : l.value === "fill" ? (u(), p("g", LA, BA)) : l.value === "light" ? (u(), p("g", IA, NA)) : l.value === "regular" ? (u(), p("g", zA, RA)) : l.value === "thin" ? (u(), p("g", DA, qA)) : D("", !0)], 16, MA))
        }
    }),
    GA = ["width", "height", "fill", "transform"],
    UA = {
        key: 0
    },
    YA = n("path", {
        d: "M152.5,156.53a72,72,0,1,0-89,0,124,124,0,0,0-48.69,35.75,12,12,0,0,0,18.38,15.44C52.54,184.69,79.11,172,108,172c37,0,61.12,19.42,74.81,35.72a12,12,0,1,0,18.38-15.44A124,124,0,0,0,152.5,156.53ZM60,100a48,48,0,1,1,48,48A48.05,48.05,0,0,1,60,100Zm182.73,41.23-3.31,1.08,2,2.82a12,12,0,1,1-19.41,14.1L220,156.41,218,159.23a12,12,0,1,1-19.41-14.1l2-2.82-3.31-1.08a12,12,0,0,1,7.42-22.82l3.31,1.07V116a12,12,0,0,1,24,0v3.48l3.31-1.07a12,12,0,0,1,7.42,22.82Z"
    }, null, -1),
    KA = [YA],
    JA = {
        key: 1
    },
    QA = n("path", {
        d: "M168,100a60,60,0,1,1-60-60A60,60,0,0,1,168,100Z",
        opacity: "0.2"
    }, null, -1),
    XA = n("path", {
        d: "M144,157.68a68,68,0,1,0-71.9,0c-20.65,6.76-39.23,19.39-54.17,37.17a8,8,0,1,0,12.24,10.3C50.25,181.19,77.91,168,108,168s57.75,13.19,77.87,37.15a8,8,0,0,0,12.26-10.3C183.18,177.07,164.6,164.44,144,157.68ZM56,100a52,52,0,1,1,52,52A52.06,52.06,0,0,1,56,100Zm188.25,43.07-4.66-2.69a23.6,23.6,0,0,0,0-8.76l4.66-2.69a8,8,0,0,0-8-13.86l-4.67,2.7a23.92,23.92,0,0,0-7.58-4.39V108a8,8,0,0,0-16,0v5.38a23.92,23.92,0,0,0-7.58,4.39l-4.67-2.7a8,8,0,1,0-8,13.86l4.66,2.69a23.6,23.6,0,0,0,0,8.76l-4.66,2.69a8,8,0,0,0,8,13.86l4.67-2.7a23.92,23.92,0,0,0,7.58,4.39V164a8,8,0,0,0,16,0v-5.38a23.92,23.92,0,0,0,7.58-4.39l4.67,2.7a7.92,7.92,0,0,0,4,1.07,8,8,0,0,0,4-14.93ZM216,144a8,8,0,1,1,8-8A8,8,0,0,1,216,144Z"
    }, null, -1),
    eS = [QA, XA],
    tS = {
        key: 2
    },
    sS = n("path", {
        d: "M198.13,194.85A8,8,0,0,1,192,208H24a8,8,0,0,1-6.12-13.15c14.94-17.78,33.52-30.41,54.17-37.17a68,68,0,1,1,71.9,0C164.6,164.44,183.18,177.07,198.13,194.85ZM247.18,154a8,8,0,0,1-6.94,4,7.92,7.92,0,0,1-4-1.07l-4.67-2.7a23.92,23.92,0,0,1-7.58,4.39V164a8,8,0,0,1-16,0v-5.38a23.92,23.92,0,0,1-7.58-4.39l-4.67,2.7a7.92,7.92,0,0,1-4,1.07,8,8,0,0,1-4-14.93l4.66-2.69a23.6,23.6,0,0,1,0-8.76l-4.66-2.69a8,8,0,1,1,8-13.86l4.67,2.7a23.92,23.92,0,0,1,7.58-4.39V108a8,8,0,0,1,16,0v5.38a23.92,23.92,0,0,1,7.58,4.39l4.67-2.7a8,8,0,0,1,8,13.86l-4.66,2.69a23.6,23.6,0,0,1,0,8.76l4.66,2.69A8,8,0,0,1,247.18,154ZM216,144a8,8,0,1,0-8-8A8,8,0,0,0,216,144Z"
    }, null, -1),
    aS = [sS],
    iS = {
        key: 3
    },
    nS = n("path", {
        d: "M139,158.25a66,66,0,1,0-62,0c-22,6.23-41.88,19.16-57.61,37.89a6,6,0,0,0,9.18,7.72C49.1,179.44,77.31,166,108,166s58.9,13.44,79.41,37.86a6,6,0,1,0,9.18-7.72C180.86,177.41,161,164.48,139,158.25ZM54,100a54,54,0,1,1,54,54A54.06,54.06,0,0,1,54,100Zm189.25,44.8-5.92-3.41a22,22,0,0,0,0-10.78l5.92-3.41a6,6,0,0,0-6-10.4l-5.93,3.43a22,22,0,0,0-9.32-5.39V108a6,6,0,0,0-12,0v6.84a22,22,0,0,0-9.32,5.39l-5.93-3.43a6,6,0,0,0-6,10.4l5.92,3.41a22,22,0,0,0,0,10.78l-5.92,3.41a6,6,0,0,0,6,10.4l5.93-3.43a22,22,0,0,0,9.32,5.39V164a6,6,0,0,0,12,0v-6.84a22,22,0,0,0,9.32-5.39l5.93,3.43a6,6,0,0,0,6-10.4ZM216,146a10,10,0,1,1,10-10A10,10,0,0,1,216,146Z"
    }, null, -1),
    oS = [nS],
    lS = {
        key: 4
    },
    rS = n("path", {
        d: "M144,157.68a68,68,0,1,0-71.9,0c-20.65,6.76-39.23,19.39-54.17,37.17a8,8,0,1,0,12.24,10.3C50.25,181.19,77.91,168,108,168s57.75,13.19,77.87,37.15a8,8,0,0,0,12.26-10.3C183.18,177.07,164.6,164.44,144,157.68ZM56,100a52,52,0,1,1,52,52A52.06,52.06,0,0,1,56,100Zm188.25,43.07-4.66-2.69a23.6,23.6,0,0,0,0-8.76l4.66-2.69a8,8,0,0,0-8-13.86l-4.67,2.7a23.92,23.92,0,0,0-7.58-4.39V108a8,8,0,0,0-16,0v5.38a23.92,23.92,0,0,0-7.58,4.39l-4.67-2.7a8,8,0,1,0-8,13.86l4.66,2.69a23.6,23.6,0,0,0,0,8.76l-4.66,2.69a8,8,0,0,0,8,13.86l4.67-2.7a23.92,23.92,0,0,0,7.58,4.39V164a8,8,0,0,0,16,0v-5.38a23.92,23.92,0,0,0,7.58-4.39l4.67,2.7a7.92,7.92,0,0,0,4,1.07,8,8,0,0,0,4-14.93ZM208,136a8,8,0,1,1,8,8A8,8,0,0,1,208,136Z"
    }, null, -1),
    cS = [rS],
    dS = {
        key: 5
    },
    uS = n("path", {
        d: "M133.17,158.84a64,64,0,1,0-50.34,0c-23.76,5.46-45.18,18.69-61.89,38.59a4,4,0,1,0,6.12,5.14C48,177.7,76.7,164,108,164s60,13.7,80.94,38.57a4,4,0,0,0,6.12-5.14C178.35,177.53,156.93,164.3,133.17,158.84ZM52,100a56,56,0,1,1,56,56A56.06,56.06,0,0,1,52,100Zm190.25,46.54L235,142.33a19.78,19.78,0,0,0,0-12.66l7.29-4.21a4,4,0,0,0-4-6.92l-7.31,4.21A20,20,0,0,0,220,116.4V108a4,4,0,0,0-8,0v8.4a20,20,0,0,0-10.94,6.35l-7.31-4.21a4,4,0,1,0-4,6.92l7.29,4.21a19.78,19.78,0,0,0,0,12.66l-7.29,4.21a4,4,0,0,0,2,7.46,3.92,3.92,0,0,0,2-.54l7.31-4.21A20,20,0,0,0,212,155.6V164a4,4,0,0,0,8,0v-8.4a20,20,0,0,0,10.94-6.35l7.31,4.21a3.92,3.92,0,0,0,2,.54,4,4,0,0,0,2-7.46ZM216,148a12,12,0,1,1,12-12A12,12,0,0,1,216,148Z"
    }, null, -1),
    pS = [uS],
    fS = {
        name: "PhUserGear"
    },
    hS = H({
        ...fS,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", UA, KA)) : l.value === "duotone" ? (u(), p("g", JA, eS)) : l.value === "fill" ? (u(), p("g", tS, aS)) : l.value === "light" ? (u(), p("g", iS, oS)) : l.value === "regular" ? (u(), p("g", lS, cS)) : l.value === "thin" ? (u(), p("g", dS, pS)) : D("", !0)], 16, GA))
        }
    }),
    mS = ["width", "height", "fill", "transform"],
    gS = {
        key: 0
    },
    vS = n("path", {
        d: "M256,136a12,12,0,0,1-12,12h-8v8a12,12,0,0,1-24,0v-8h-8a12,12,0,0,1,0-24h8v-8a12,12,0,0,1,24,0v8h8A12,12,0,0,1,256,136Zm-54.81,56.28a12,12,0,1,1-18.38,15.44C169.12,191.42,145,172,108,172c-28.89,0-55.46,12.68-74.81,35.72a12,12,0,0,1-18.38-15.44A124.08,124.08,0,0,1,63.5,156.53a72,72,0,1,1,89,0A124,124,0,0,1,201.19,192.28ZM108,148a48,48,0,1,0-48-48A48.05,48.05,0,0,0,108,148Z"
    }, null, -1),
    yS = [vS],
    _S = {
        key: 1
    },
    xS = n("path", {
        d: "M168,100a60,60,0,1,1-60-60A60,60,0,0,1,168,100Z",
        opacity: "0.2"
    }, null, -1),
    bS = n("path", {
        d: "M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136Zm-57.87,58.85a8,8,0,0,1-12.26,10.3C165.75,181.19,138.09,168,108,168s-57.75,13.19-77.87,37.15a8,8,0,0,1-12.25-10.3c14.94-17.78,33.52-30.41,54.17-37.17a68,68,0,1,1,71.9,0C164.6,164.44,183.18,177.07,198.13,194.85ZM108,152a52,52,0,1,0-52-52A52.06,52.06,0,0,0,108,152Z"
    }, null, -1),
    wS = [xS, bS],
    $S = {
        key: 2
    },
    AS = n("path", {
        d: "M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136ZM144,157.68a68,68,0,1,0-71.9,0c-20.65,6.76-39.23,19.39-54.17,37.17A8,8,0,0,0,24,208H192a8,8,0,0,0,6.13-13.15C183.18,177.07,164.6,164.44,144,157.68Z"
    }, null, -1),
    SS = [AS],
    MS = {
        key: 3
    },
    CS = n("path", {
        d: "M254,136a6,6,0,0,1-6,6H230v18a6,6,0,0,1-12,0V142H200a6,6,0,0,1,0-12h18V112a6,6,0,0,1,12,0v18h18A6,6,0,0,1,254,136Zm-57.41,60.14a6,6,0,1,1-9.18,7.72C166.9,179.45,138.69,166,108,166s-58.89,13.45-79.41,37.86a6,6,0,0,1-9.18-7.72C35.14,177.41,55,164.48,77,158.25a66,66,0,1,1,62,0C161,164.48,180.86,177.41,196.59,196.14ZM108,154a54,54,0,1,0-54-54A54.06,54.06,0,0,0,108,154Z"
    }, null, -1),
    HS = [CS],
    ZS = {
        key: 4
    },
    TS = n("path", {
        d: "M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136Zm-57.87,58.85a8,8,0,0,1-12.26,10.3C165.75,181.19,138.09,168,108,168s-57.75,13.19-77.87,37.15a8,8,0,0,1-12.25-10.3c14.94-17.78,33.52-30.41,54.17-37.17a68,68,0,1,1,71.9,0C164.6,164.44,183.18,177.07,198.13,194.85ZM108,152a52,52,0,1,0-52-52A52.06,52.06,0,0,0,108,152Z"
    }, null, -1),
    VS = [TS],
    kS = {
        key: 5
    },
    PS = n("path", {
        d: "M252,136a4,4,0,0,1-4,4H228v20a4,4,0,0,1-8,0V140H200a4,4,0,0,1,0-8h20V112a4,4,0,0,1,8,0v20h20A4,4,0,0,1,252,136Zm-56.94,61.43a4,4,0,0,1-6.12,5.14C168,177.7,139.3,164,108,164s-60,13.7-80.94,38.57a4,4,0,1,1-6.12-5.14c16.71-19.9,38.13-33.13,61.89-38.59a64,64,0,1,1,50.34,0C156.93,164.3,178.35,177.53,195.06,197.43ZM108,156a56,56,0,1,0-56-56A56.06,56.06,0,0,0,108,156Z"
    }, null, -1),
    LS = [PS],
    ES = {
        name: "PhUserPlus"
    },
    BS = H({
        ...ES,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", gS, yS)) : l.value === "duotone" ? (u(), p("g", _S, wS)) : l.value === "fill" ? (u(), p("g", $S, SS)) : l.value === "light" ? (u(), p("g", MS, HS)) : l.value === "regular" ? (u(), p("g", ZS, VS)) : l.value === "thin" ? (u(), p("g", kS, LS)) : D("", !0)], 16, mS))
        }
    }),
    IS = ["width", "height", "fill", "transform"],
    OS = {
        key: 0
    },
    NS = n("path", {
        d: "M164.38,181.1a52,52,0,1,0-72.76,0,75.89,75.89,0,0,0-30,28.89,12,12,0,0,0,20.78,12,53,53,0,0,1,91.22,0,12,12,0,1,0,20.78-12A75.89,75.89,0,0,0,164.38,181.1ZM100,144a28,28,0,1,1,28,28A28,28,0,0,1,100,144Zm147.21,9.59a12,12,0,0,1-16.81-2.39c-8.33-11.09-19.85-19.59-29.33-21.64a12,12,0,0,1-1.82-22.91,20,20,0,1,0-24.78-28.3,12,12,0,1,1-21-11.6,44,44,0,1,1,73.28,48.35,92.18,92.18,0,0,1,22.85,21.69A12,12,0,0,1,247.21,153.59Zm-192.28-24c-9.48,2.05-21,10.55-29.33,21.65A12,12,0,0,1,6.41,136.79,92.37,92.37,0,0,1,29.26,115.1a44,44,0,1,1,73.28-48.35,12,12,0,1,1-21,11.6,20,20,0,1,0-24.78,28.3,12,12,0,0,1-1.82,22.91Z"
    }, null, -1),
    zS = [NS],
    jS = {
        key: 1
    },
    RS = n("path", {
        d: "M168,144a40,40,0,1,1-40-40A40,40,0,0,1,168,144ZM64,56A32,32,0,1,0,96,88,32,32,0,0,0,64,56Zm128,0a32,32,0,1,0,32,32A32,32,0,0,0,192,56Z",
        opacity: "0.2"
    }, null, -1),
    DS = n("path", {
        d: "M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1,0-16,24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.85,8,57,57,0,0,0-98.15,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"
    }, null, -1),
    FS = [RS, DS],
    qS = {
        key: 2
    },
    WS = n("path", {
        d: "M64.12,147.8a4,4,0,0,1-4,4.2H16a8,8,0,0,1-7.8-6.17,8.35,8.35,0,0,1,1.62-6.93A67.79,67.79,0,0,1,37,117.51a40,40,0,1,1,66.46-35.8,3.94,3.94,0,0,1-2.27,4.18A64.08,64.08,0,0,0,64,144C64,145.28,64,146.54,64.12,147.8Zm182-8.91A67.76,67.76,0,0,0,219,117.51a40,40,0,1,0-66.46-35.8,3.94,3.94,0,0,0,2.27,4.18A64.08,64.08,0,0,1,192,144c0,1.28,0,2.54-.12,3.8a4,4,0,0,0,4,4.2H240a8,8,0,0,0,7.8-6.17A8.33,8.33,0,0,0,246.17,138.89Zm-89,43.18a48,48,0,1,0-58.37,0A72.13,72.13,0,0,0,65.07,212,8,8,0,0,0,72,224H184a8,8,0,0,0,6.93-12A72.15,72.15,0,0,0,157.19,182.07Z"
    }, null, -1),
    GS = [WS],
    US = {
        key: 3
    },
    YS = n("path", {
        d: "M243.6,148.8a6,6,0,0,1-8.4-1.2A53.58,53.58,0,0,0,192,126a6,6,0,0,1,0-12,26,26,0,1,0-25.18-32.5,6,6,0,0,1-11.62-3,38,38,0,1,1,59.91,39.63A65.69,65.69,0,0,1,244.8,140.4,6,6,0,0,1,243.6,148.8ZM189.19,213a6,6,0,0,1-2.19,8.2,5.9,5.9,0,0,1-3,.81,6,6,0,0,1-5.2-3,59,59,0,0,0-101.62,0,6,6,0,1,1-10.38-6A70.1,70.1,0,0,1,103,182.55a46,46,0,1,1,50.1,0A70.1,70.1,0,0,1,189.19,213ZM128,178a34,34,0,1,0-34-34A34,34,0,0,0,128,178ZM70,120a6,6,0,0,0-6-6A26,26,0,1,1,89.18,81.49a6,6,0,1,0,11.62-3,38,38,0,1,0-59.91,39.63A65.69,65.69,0,0,0,11.2,140.4a6,6,0,1,0,9.6,7.2A53.58,53.58,0,0,1,64,126,6,6,0,0,0,70,120Z"
    }, null, -1),
    KS = [YS],
    JS = {
        key: 4
    },
    QS = n("path", {
        d: "M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"
    }, null, -1),
    XS = [QS],
    eM = {
        key: 5
    },
    tM = n("path", {
        d: "M237,147.44a4,4,0,0,1-5.48-1.4c-8.33-14-20.93-22-34.56-22a4,4,0,0,1-1.2-.2,36.76,36.76,0,0,1-3.8.2,4,4,0,0,1,0-8,28,28,0,1,0-27.12-35,4,4,0,0,1-7.75-2,36,36,0,1,1,54,39.48c10.81,3.85,20.51,12,27.31,23.48A4,4,0,0,1,237,147.44ZM187.46,214a4,4,0,0,1-1.46,5.46,3.93,3.93,0,0,1-2,.54,4,4,0,0,1-3.46-2,61,61,0,0,0-105.08,0,4,4,0,0,1-6.92-4,68.35,68.35,0,0,1,39.19-31,44,44,0,1,1,40.54,0A68.35,68.35,0,0,1,187.46,214ZM128,180a36,36,0,1,0-36-36A36,36,0,0,0,128,180ZM64,116A28,28,0,1,1,91.12,81a4,4,0,0,0,7.75-2A36,36,0,1,0,45.3,118.75,63.55,63.55,0,0,0,12.8,141.6a4,4,0,0,0,6.4,4.8A55.55,55.55,0,0,1,64,124a4,4,0,0,0,0-8Z"
    }, null, -1),
    sM = [tM],
    aM = {
        name: "PhUsersThree"
    },
    b1 = H({
        ...aM,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", OS, zS)) : l.value === "duotone" ? (u(), p("g", jS, FS)) : l.value === "fill" ? (u(), p("g", qS, GS)) : l.value === "light" ? (u(), p("g", US, KS)) : l.value === "regular" ? (u(), p("g", JS, XS)) : l.value === "thin" ? (u(), p("g", eM, sM)) : D("", !0)], 16, IS))
        }
    }),
    iM = ["width", "height", "fill", "transform"],
    nM = {
        key: 0
    },
    oM = n("path", {
        d: "M196,140a16,16,0,1,1-16-16A16,16,0,0,1,196,140Zm40-32v80a32,32,0,0,1-32,32H60a32,32,0,0,1-32-32V68.92A32,32,0,0,1,60,36H192a12,12,0,0,1,0,24H60a8,8,0,0,0-8,8.26v.08A8.32,8.32,0,0,0,60.48,76H204A32,32,0,0,1,236,108Zm-24,0a8,8,0,0,0-8-8H60.48A33.72,33.72,0,0,1,52,98.92V188a8,8,0,0,0,8,8H204a8,8,0,0,0,8-8Z"
    }, null, -1),
    lM = [oM],
    rM = {
        key: 1
    },
    cM = n("path", {
        d: "M224,88V200a8,8,0,0,1-8,8H56a16,16,0,0,1-16-16V64A16,16,0,0,0,56,80H216A8,8,0,0,1,224,88Z",
        opacity: "0.2"
    }, null, -1),
    dM = n("path", {
        d: "M216,72H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,64V192a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72Zm0,128H56a8,8,0,0,1-8-8V86.63A23.84,23.84,0,0,0,56,88H216Zm-48-60a12,12,0,1,1,12,12A12,12,0,0,1,168,140Z"
    }, null, -1),
    uM = [cM, dM],
    pM = {
        key: 2
    },
    fM = n("path", {
        d: "M216,72H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,64V192a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72Zm-36,80a12,12,0,1,1,12-12A12,12,0,0,1,180,152Z"
    }, null, -1),
    hM = [fM],
    mM = {
        key: 3
    },
    gM = n("path", {
        d: "M216,74H56a10,10,0,0,1,0-20H192a6,6,0,0,0,0-12H56A22,22,0,0,0,34,64V192a22,22,0,0,0,22,22H216a14,14,0,0,0,14-14V88A14,14,0,0,0,216,74Zm2,126a2,2,0,0,1-2,2H56a10,10,0,0,1-10-10V83.59A21.84,21.84,0,0,0,56,86H216a2,2,0,0,1,2,2Zm-28-60a10,10,0,1,1-10-10A10,10,0,0,1,190,140Z"
    }, null, -1),
    vM = [gM],
    yM = {
        key: 4
    },
    _M = n("path", {
        d: "M216,72H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,64V192a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72Zm0,128H56a8,8,0,0,1-8-8V86.63A23.84,23.84,0,0,0,56,88H216Zm-48-60a12,12,0,1,1,12,12A12,12,0,0,1,168,140Z"
    }, null, -1),
    xM = [_M],
    bM = {
        key: 5
    },
    wM = n("path", {
        d: "M216,76H56a12,12,0,0,1,0-24H192a4,4,0,0,0,0-8H56A20,20,0,0,0,36,64V192a20,20,0,0,0,20,20H216a12,12,0,0,0,12-12V88A12,12,0,0,0,216,76Zm4,124a4,4,0,0,1-4,4H56a12,12,0,0,1-12-12V80a19.86,19.86,0,0,0,12,4H216a4,4,0,0,1,4,4Zm-32-60a8,8,0,1,1-8-8A8,8,0,0,1,188,140Z"
    }, null, -1),
    $M = [wM],
    AM = {
        name: "PhWallet"
    },
    SM = H({
        ...AM,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", nM, lM)) : l.value === "duotone" ? (u(), p("g", rM, uM)) : l.value === "fill" ? (u(), p("g", pM, hM)) : l.value === "light" ? (u(), p("g", mM, vM)) : l.value === "regular" ? (u(), p("g", yM, xM)) : l.value === "thin" ? (u(), p("g", bM, $M)) : D("", !0)], 16, iM))
        }
    }),
    MM = ["width", "height", "fill", "transform"],
    CM = {
        key: 0
    },
    HM = n("path", {
        d: "M107.69,51.88a12,12,0,0,0-9.84-2.6l-60,10.91A12,12,0,0,0,28,72v36a12,12,0,0,0,12,12h60a12,12,0,0,0,12-12V61.09A12,12,0,0,0,107.69,51.88ZM88,96H52V82l36-6.54ZM223.69,30.79a12,12,0,0,0-9.84-2.6L137.85,42A12,12,0,0,0,128,53.82V108a12,12,0,0,0,12,12h76a12,12,0,0,0,12-12V40A12,12,0,0,0,223.69,30.79ZM204,96H152V63.83l52-9.45ZM100,136H40a12,12,0,0,0-12,12v36a12,12,0,0,0,9.85,11.81l60,10.91A12,12,0,0,0,112,194.91V148A12,12,0,0,0,100,136ZM88,180.53,52,174V160H88ZM216,136H140a12,12,0,0,0-12,12v54.18A12,12,0,0,0,137.85,214l76,13.82A12,12,0,0,0,228,216V148A12,12,0,0,0,216,136Zm-12,65.62-52-9.45V160h52Z"
    }, null, -1),
    ZM = [HM],
    TM = {
        key: 1
    },
    VM = n("path", {
        d: "M136,144h80v72l-80-14.55ZM40,184l64,11.64V144H40ZM136,54.55V112h80V40ZM40,112h64V60.36L40,72Z",
        opacity: "0.2"
    }, null, -1),
    kM = n("path", {
        d: "M216,136H136a8,8,0,0,0-8,8v57.45a8,8,0,0,0,6.57,7.88l80,14.54A7.61,7.61,0,0,0,216,224a8,8,0,0,0,8-8V144A8,8,0,0,0,216,136Zm-8,70.41-64-11.63V152h64ZM104,136H40a8,8,0,0,0-8,8v40a8,8,0,0,0,6.57,7.87l64,11.64a8.54,8.54,0,0,0,1.43.13,8,8,0,0,0,8-8V144A8,8,0,0,0,104,136Zm-8,50.05-48-8.73V152H96ZM221.13,33.86a8,8,0,0,0-6.56-1.73l-80,14.55A8,8,0,0,0,128,54.55V112a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40A8,8,0,0,0,221.13,33.86ZM208,104H144V61.22l64-11.63ZM109.13,54.22a8,8,0,0,0-6.56-1.73l-64,11.64A8,8,0,0,0,32,72v40a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V60.36A8,8,0,0,0,109.13,54.22ZM96,104H48V78.68L96,70Z"
    }, null, -1),
    PM = [VM, kM],
    LM = {
        key: 2
    },
    EM = n("path", {
        d: "M112,144v51.64a8,8,0,0,1-8,8,8.54,8.54,0,0,1-1.43-.13l-64-11.64A8,8,0,0,1,32,184V144a8,8,0,0,1,8-8h64A8,8,0,0,1,112,144Zm-2.87-89.78a8,8,0,0,0-6.56-1.73l-64,11.64A8,8,0,0,0,32,72v40a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V60.36A8,8,0,0,0,109.13,54.22ZM216,136H136a8,8,0,0,0-8,8v57.45a8,8,0,0,0,6.57,7.88l80,14.54A7.61,7.61,0,0,0,216,224a8,8,0,0,0,8-8V144A8,8,0,0,0,216,136Zm5.13-102.14a8,8,0,0,0-6.56-1.73l-80,14.55A8,8,0,0,0,128,54.55V112a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40A8,8,0,0,0,221.13,33.86Z"
    }, null, -1),
    BM = [EM],
    IM = {
        key: 3
    },
    OM = n("path", {
        d: "M216,138H136a6,6,0,0,0-6,6v57.45a6,6,0,0,0,4.93,5.91l80,14.54a5.46,5.46,0,0,0,1.07.1,6,6,0,0,0,6-6V144A6,6,0,0,0,216,138Zm-6,70.81-68-12.36V150h68ZM104,138H40a6,6,0,0,0-6,6v40a6,6,0,0,0,4.93,5.9l64,11.64a6.36,6.36,0,0,0,1.07.1,6,6,0,0,0,6-6V144A6,6,0,0,0,104,138Zm-6,50.45L46,179V150H98ZM219.84,35.39a6,6,0,0,0-4.91-1.29l-80,14.54A6,6,0,0,0,130,54.55V112a6,6,0,0,0,6,6h80a6,6,0,0,0,6-6V40A6,6,0,0,0,219.84,35.39ZM210,106H142V59.55l68-12.36ZM107.84,55.76a6,6,0,0,0-4.91-1.3l-64,11.64A6,6,0,0,0,34,72v40a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V60.36A6,6,0,0,0,107.84,55.76ZM98,106H46V77l52-9.46Z"
    }, null, -1),
    NM = [OM],
    zM = {
        key: 4
    },
    jM = n("path", {
        d: "M216,136H136a8,8,0,0,0-8,8v57.45a8,8,0,0,0,6.57,7.88l80,14.54A7.61,7.61,0,0,0,216,224a8,8,0,0,0,8-8V144A8,8,0,0,0,216,136Zm-8,70.41-64-11.63V152h64ZM104,136H40a8,8,0,0,0-8,8v40a8,8,0,0,0,6.57,7.87l64,11.64a8.54,8.54,0,0,0,1.43.13,8,8,0,0,0,8-8V144A8,8,0,0,0,104,136Zm-8,50.05-48-8.73V152H96ZM221.13,33.86a8,8,0,0,0-6.56-1.73l-80,14.55A8,8,0,0,0,128,54.55V112a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40A8,8,0,0,0,221.13,33.86ZM208,104H144V61.22l64-11.63ZM109.13,54.22a8,8,0,0,0-6.56-1.73l-64,11.64A8,8,0,0,0,32,72v40a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V60.36A8,8,0,0,0,109.13,54.22ZM96,104H48V78.68L96,70Z"
    }, null, -1),
    RM = [jM],
    DM = {
        key: 5
    },
    FM = n("path", {
        d: "M216,140H136a4,4,0,0,0-4,4v57.45a4,4,0,0,0,3.28,3.94l80,14.55a4.37,4.37,0,0,0,.72.06,4,4,0,0,0,2.56-.93A4,4,0,0,0,220,216V144A4,4,0,0,0,216,140Zm-4,71.21-72-13.09V148h72ZM104,140H40a4,4,0,0,0-4,4v40a4,4,0,0,0,3.28,3.94l64,11.63a3.51,3.51,0,0,0,.72.07,4,4,0,0,0,4-4V144A4,4,0,0,0,104,140Zm-4,50.84L44,180.66V148h56ZM218.56,36.93a4,4,0,0,0-3.28-.87l-80,14.55A4,4,0,0,0,132,54.55V112a4,4,0,0,0,4,4h80a4,4,0,0,0,4-4V40A4,4,0,0,0,218.56,36.93ZM212,108H140V57.88l72-13.09ZM103.28,56.43l-64,11.63A4,4,0,0,0,36,72v40a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V60.36a4,4,0,0,0-4.72-3.93ZM100,108H44V75.34l56-10.18Z"
    }, null, -1),
    qM = [FM],
    WM = {
        name: "PhWindowsLogo"
    },
    GM = H({
        ...WM,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", CM, ZM)) : l.value === "duotone" ? (u(), p("g", TM, PM)) : l.value === "fill" ? (u(), p("g", LM, BM)) : l.value === "light" ? (u(), p("g", IM, NM)) : l.value === "regular" ? (u(), p("g", zM, RM)) : l.value === "thin" ? (u(), p("g", DM, qM)) : D("", !0)], 16, MM))
        }
    }),
    UM = ["width", "height", "fill", "transform"],
    YM = {
        key: 0
    },
    KM = n("path", {
        d: "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"
    }, null, -1),
    JM = [KM],
    QM = {
        key: 1
    },
    XM = n("path", {
        d: "M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
        opacity: "0.2"
    }, null, -1),
    eC = n("path", {
        d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
    }, null, -1),
    tC = [XM, eC],
    sC = {
        key: 2
    },
    aC = n("path", {
        d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
    }, null, -1),
    iC = [aC],
    nC = {
        key: 3
    },
    oC = n("path", {
        d: "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"
    }, null, -1),
    lC = [oC],
    rC = {
        key: 4
    },
    cC = n("path", {
        d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
    }, null, -1),
    dC = [cC],
    uC = {
        key: 5
    },
    pC = n("path", {
        d: "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"
    }, null, -1),
    fC = [pC],
    hC = {
        name: "PhX"
    },
    Po = H({
        ...hC,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", YM, JM)) : l.value === "duotone" ? (u(), p("g", QM, tC)) : l.value === "fill" ? (u(), p("g", sC, iC)) : l.value === "light" ? (u(), p("g", nC, lC)) : l.value === "regular" ? (u(), p("g", rC, dC)) : l.value === "thin" ? (u(), p("g", uC, fC)) : D("", !0)], 16, UM))
        }
    }),
    mC = ["width", "height", "fill", "transform"],
    gC = {
        key: 0
    },
    vC = n("path", {
        d: "M170.49,117.91l-56-36A12,12,0,0,0,96,92v72a12,12,0,0,0,18.49,10.09l56-36a12,12,0,0,0,0-20.18ZM120,142V114l21.81,14Zm118.21-73.5a28.05,28.05,0,0,0-16.93-19.14C186.4,35.91,131.29,36,128,36s-58.4-.09-93.28,13.38A28.05,28.05,0,0,0,17.79,68.52C15.15,78.72,12,97.32,12,128s3.15,49.28,5.79,59.48a28.05,28.05,0,0,0,16.93,19.14C68.21,219.55,120.36,220,127.37,220h1.26c7,0,59.16-.45,92.65-13.38a28.05,28.05,0,0,0,16.93-19.14c2.64-10.2,5.79-28.8,5.79-59.48S240.85,78.72,238.21,68.52ZM215,181.46a4,4,0,0,1-2.34,2.77C182.78,195.76,132.27,196,128.32,196h-.39c-.53,0-53.64.17-84.56-11.77A4,4,0,0,1,41,181.46c-1.88-7.24-5-23.82-5-53.46s3.15-46.22,5-53.46a4,4,0,0,1,2.34-2.77C74.29,59.83,127.39,60,127.92,60h.15c.54,0,53.64-.17,84.56,11.77A4,4,0,0,1,215,74.54c1.88,7.24,5,23.82,5,53.46S216.85,174.22,215,181.46Z"
    }, null, -1),
    yC = [vC],
    _C = {
        key: 1
    },
    xC = n("path", {
        d: "M226.59,71.53a16,16,0,0,0-9.63-11C183.48,47.65,128,48,128,48s-55.48-.35-89,12.58a16,16,0,0,0-9.63,11C27.07,80.54,24,98.09,24,128s3.07,47.46,5.41,56.47A16,16,0,0,0,39,195.42C72.52,208.35,128,208,128,208s55.48.35,89-12.58a16,16,0,0,0,9.63-10.95c2.34-9,5.41-26.56,5.41-56.47S228.93,80.54,226.59,71.53ZM112,160V96l48,32Z",
        opacity: "0.2"
    }, null, -1),
    bC = n("path", {
        d: "M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86.12,12s-54.37.18-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68C73.58,55.82,127.4,56,128.05,56s54.37-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z"
    }, null, -1),
    wC = [xC, bC],
    $C = {
        key: 2
    },
    AC = n("path", {
        d: "M234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-72.11,61.81-48,32A4,4,0,0,1,108,160V96a4,4,0,0,1,6.22-3.33l48,32a4,4,0,0,1,0,6.66Z"
    }, null, -1),
    SC = [AC],
    MC = {
        key: 3
    },
    CC = n("path", {
        d: "M163.33,123l-48-32A6,6,0,0,0,106,96v64a6,6,0,0,0,9.33,5l48-32a6,6,0,0,0,0-10ZM118,148.79V107.21L149.18,128ZM232.4,70a22,22,0,0,0-13.28-15C185,41.79,130.27,42,128,42s-57-.21-91.16,13A22,22,0,0,0,23.6,70C21.05,79.89,18,98,18,128s3.05,48.11,5.6,58a22,22,0,0,0,13.28,15C71,214.21,125.72,214,128,214h.71c6.91,0,58-.44,90.45-13a22,22,0,0,0,13.28-15c2.55-9.87,5.6-27.93,5.6-58S235,79.89,232.4,70ZM220.78,183a10,10,0,0,1-6,6.86C182.78,202.19,128.58,202,128,202s-54.71.2-86.75-12.17a10,10,0,0,1-6-6.86C32.84,173.78,30,156.78,30,128s2.84-45.78,5.22-55a10,10,0,0,1,6-6.86C72.06,54.26,123.53,54,127.76,54H128c.54,0,54.71-.2,86.75,12.17a10,10,0,0,1,6,6.86c2.38,9.19,5.22,26.19,5.22,55S223.16,173.78,220.78,183Z"
    }, null, -1),
    HC = [CC],
    ZC = {
        key: 4
    },
    TC = n("path", {
        d: "M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86,12H128c-.54,0-54.33.2-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68c30.52-11.79,81.66-12,85.85-12h.27c.54,0,54.38-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z"
    }, null, -1),
    VC = [TC],
    kC = {
        key: 5
    },
    PC = n("path", {
        d: "M162.22,124.67l-48-32A4,4,0,0,0,108,96v64a4,4,0,0,0,2.11,3.53,4,4,0,0,0,4.11-.2l48-32a4,4,0,0,0,0-6.66ZM116,152.53V103.47L152.79,128Zm114.46-82A20,20,0,0,0,218.4,56.85C184.6,43.79,130.27,44,128,44S71.4,43.79,37.6,56.85A20,20,0,0,0,25.54,70.52C23,80.27,20,98.16,20,128s3,47.73,5.54,57.48A20,20,0,0,0,37.6,199.15C71.4,212.21,125.73,212,128,212h.71c6.89,0,57.58-.43,89.72-12.85a20,20,0,0,0,12.06-13.67C233,175.72,236,157.84,236,128S233,80.27,230.46,70.52Zm-7.74,113a12,12,0,0,1-7.21,8.22C183.14,204.19,128.57,204,128,204s-55.11.19-87.48-12.31a12,12,0,0,1-7.21-8.22C30.87,174.17,28,157,28,128s2.87-46.17,5.28-55.47a12,12,0,0,1,7.21-8.22C72.86,51.81,127.43,52,128,52s55.11-.2,87.48,12.31a12,12,0,0,1,7.21,8.22C225.13,81.83,228,99,228,128S225.13,174.17,222.72,183.47Z"
    }, null, -1),
    LC = [PC],
    EC = {
        name: "PhYoutubeLogo"
    },
    BC = H({
        ...EC,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                s = _("weight", "regular"),
                a = _("size", "1em"),
                i = _("color", "currentColor"),
                o = _("mirrored", !1),
                l = v(() => t.weight ? ? s),
                r = v(() => t.size ? ? a),
                c = v(() => t.color ? ? i),
                f = v(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
            return (d, h) => (u(), p("svg", K({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: r.value,
                height: r.value,
                fill: c.value,
                transform: f.value
            }, d.$attrs), [te(d.$slots, "default"), l.value === "bold" ? (u(), p("g", gC, yC)) : l.value === "duotone" ? (u(), p("g", _C, wC)) : l.value === "fill" ? (u(), p("g", $C, SC)) : l.value === "light" ? (u(), p("g", MC, HC)) : l.value === "regular" ? (u(), p("g", ZC, VC)) : l.value === "thin" ? (u(), p("g", kC, LC)) : D("", !0)], 16, mC))
        }
    });
let y0;
const IC = new Uint8Array(16);

function OC() {
    if (!y0 && (y0 = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !y0)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return y0(IC)
}
const Ge = [];
for (let e = 0; e < 256; ++e) Ge.push((e + 256).toString(16).slice(1));

function NC(e, t = 0) {
    return Ge[e[t + 0]] + Ge[e[t + 1]] + Ge[e[t + 2]] + Ge[e[t + 3]] + "-" + Ge[e[t + 4]] + Ge[e[t + 5]] + "-" + Ge[e[t + 6]] + Ge[e[t + 7]] + "-" + Ge[e[t + 8]] + Ge[e[t + 9]] + "-" + Ge[e[t + 10]] + Ge[e[t + 11]] + Ge[e[t + 12]] + Ge[e[t + 13]] + Ge[e[t + 14]] + Ge[e[t + 15]]
}
const zC = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
    Bi = {
        randomUUID: zC
    };

function $(e, t, s) {
    if (Bi.randomUUID && !t && !e) return Bi.randomUUID();
    e = e || {};
    const a = e.random || (e.rng || OC)();
    if (a[6] = a[6] & 15 | 64, a[8] = a[8] & 63 | 128, t) {
        s = s || 0;
        for (let i = 0; i < 16; ++i) t[s + i] = a[i];
        return t
    }
    return NC(a)
}
const jC = "/images/whyAccoupayCard_1.png",
    RC = "/images/whyAccoupayCard_2.png",
    DC = "/images/whyAccoupayCard_3.png",
    FC = "/images/whyAccoupayCard_4.png",
    qC = "/images/whyAccoupayCard_5.png",
    WC = "/images/whyAccoupayCard_6.png",
    GC = "/images/testimonial1.png",
    UC = "/images/testimonial2.png",
    YC = "/images/testimonial3.png",
    KC = "/images/testimonial4.png",
    JC = "/images/testimonial5.png",
    QC = "/images/testimonial6.png",
    XC = "/images/testimonial7.png",
    eH = "/images/testimonial8.png",
    tH = "/images/blogImg1.png",
    sH = "/images/blogImg2.png",
    aH = "/images/blogImg3.png",
    iH = "/images/case_study_img1.png",
    nH = "/images/case_study_img2.png",
    oH = "/images/case_study_img3.png",
    lH = "/images/case_study_img4.png",
    rH = "/images/case_study_img5.png",
    cH = "/images/case_study_img6.png",
    dH = "/images/team_image1.png",
    uH = "/images/team_image2.png",
    pH = "/images/team_image3.png",
    fH = "/images/team_image4.png",
    hH = "/images/team_image5.png",
    mH = "/images/team_image6.png",
    gH = "/images/produc_Img1.png",
    vH = "/images/produc_Img2.png",
    yH = "/images/produc_Img3.png",
    _H = "/images/produc_Img4.png",
    xH = "/images/produc_Img5.png",
    bH = "/images/produc_Img6.png",
    wH = "/images/blog_img1.png",
    $H = "/images/blog_img2.png",
    AH = "/images/blog_img3.png",
    SH = "/images/blog_img4.png",
    MH = "/images/blog_img5.png",
    CH = "/images/blog_img6.png",
    Ii = "/images/recent_post_img1.png",
    HH = "/images/recent_post_img3.png",
    ZH = "/images/recent_post_img4.png",
    Lo = [{
        id: $(),
        name: "Home",
        link: "/",
        isSubmenu: !1
    }, {
        id: $(),
        name: "Services",
        isSubmenu: !0,
        submenu: [{
            id: $(),
            name: "All Services",
            link: "/services"
        }, {
            id: $(),
            name: "Payroll Processing",
            link: "/services/payroll-processing"
        }, {
            id: $(),
            name: "Accounting Services",
            link: "/services/accounting-services"
        }, {
            id: $(),
            name: "Taxation Services",
            link: "/services/taxation-services"
        }, {
            id: $(),
            name: "Real State Services",
            link: "/services/real-state-services"
        }, {
            id: $(),
            name: "Healthcare Services",
            link: "/services/healthcare-services"
        }, {
            id: $(),
            name: "Dentist Services",
            link: "/services/dentist-services"
        }]
    }, {
        id: $(),
        name: "Shop",
        isSubmenu: !0,
        submenu: [{
            id: $(),
            name: "Shop Page",
            link: "/shop"
        }, {
            id: $(),
            name: "Shop Details",
            link: "/shop/shop-details"
        }, {
            id: $(),
            name: "Cart",
            link: "/cart"
        }, {
            id: $(),
            name: "Checkout",
            link: "/checkout"
        }]
    }, {
        id: $(),
        name: "Blog",
        isSubmenu: !0,
        submenu: [{
            id: $(),
            name: "Blog Page",
            link: "/blog"
        }, {
            id: $(),
            name: "Blog Details",
            link: "/blog-details"
        }]
    }, {
        id: $(),
        name: "Contact",
        link: "/contact",
        isSubmenu: !1
    }, {
        id: $(),
        name: "Pages",
        isSubmenu: !0,
        submenu: [{
            id: $(),
            name: "Appointment",
            link: "/appointment"
        }, {
            id: $(),
            name: "Case Study",
            link: "/case-study"
        }, {
            id: $(),
            name: "Case Study Detials",
            link: "/case-study/case-study-details"
        }, {
            id: $(),
            name: "Our Team",
            link: "/team"
        }, {
            id: $(),
            name: "Team Details",
            link: "/team/team-details"
        }, {
            id: $(),
            name: "About",
            link: "/about"
        }, {
            id: $(),
            name: "Pricing",
            link: "/pricing"
        }, {
            id: $(),
            name: "FAQ Page",
            link: "/faq"
        }, {
            id: $(),
            name: "Login",
            link: "/login"
        }, {
            id: $(),
            name: "Register",
            link: "/register"
        }, {
            id: $(),
            name: "Privacy Policy",
            link: "/privacy-policy"
        }, {
            id: $(),
            name: "Terms & Conditions",
            link: "/terms-conditions"
        }, {
            id: $(),
            name: "Error",
            link: "/error"
        }]
    }],
    o0 = [{
        id: $(),
        name: "Facebook",
        link: "#",
        icon: bh
    }, {
        id: $(),
        name: "Twitter",
        link: "#",
        icon: nw
    }, {
        id: $(),
        name: "Linkedin",
        link: "#",
        icon: BC
    }, {
        id: $(),
        name: "Instagram",
        link: "#",
        icon: ox
    }],
    TH = [{
        id: $(),
        name: "Resources",
        links: [{
            id: $(),
            name: "Home",
            link: "/"
        }, {
            id: $(),
            name: "About",
            link: "/about"
        }, {
            id: $(),
            name: "Blog",
            link: "/blog"
        }, {
            id: $(),
            name: "Contact Us",
            link: "/contact"
        }]
    }, {
        id: $(),
        name: "Services",
        links: [{
            id: $(),
            name: "Accounting Services",
            link: "/services/accounting-services"
        }, {
            id: $(),
            name: "Taxations Services",
            link: "/services/taxation-services"
        }, {
            id: $(),
            name: "Healthcare Services",
            link: "/services/healthcare-services"
        }, {
            id: $(),
            name: "Dentist Services",
            link: "/services/dentist-services"
        }]
    }],
    VH = [{
        id: $(),
        name: "Get In Touch",
        links: [{
            id: $(),
            name: "admin@mail.com",
            link: "mailto:example@mail.com",
            isLink: !0,
            icon: Xf
        }, {
            id: $(),
            name: "+ 123 456 789",
            isLink: !0,
            link: "tel:(000) 123 456 789",
            icon: rs
        }, {
            id: $(),
            name: "255 Sheet, City Name Home Land, NY",
            isLink: !1,
            icon: Hy
        }]
    }],
    kH = [{
        id: $(),
        name: "example@mail.com",
        link: "mailto:example@mail.com",
        icon: n0
    }, {
        id: $(),
        name: "(000) 123 456 789",
        link: "tel:(000) 123 456 789",
        icon: rs
    }, {
        id: $(),
        name: "255 Sheet, City Name Home Land, NY",
        link: "",
        icon: g1
    }],
    PH = [{
        id: $(),
        name: "Tax Preparation",
        icon: Ia
    }, {
        id: $(),
        name: "Payroll Processing",
        icon: bm
    }, {
        id: $(),
        name: "Cost Effective",
        icon: Co
    }, {
        id: $(),
        name: "Scale Rapidly",
        icon: Vo
    }],
    LH = [{
        id: $(),
        icon: b1,
        name: "EOR employees",
        desc: "Easily hire and pay employees where you don’t have entities with Jonny’s world-wide infrastructure."
    }, {
        id: $(),
        icon: T1,
        name: "Global Payroll",
        desc: "Streamline your global payroll with precision and compliance. Our expert services ensure accurate and timely."
    }, {
        id: $(),
        icon: hS,
        name: "Contractors",
        desc: "Reliable contractors delivering quality craftsmanship and exceptional service. Your perfect project,"
    }, {
        id: $(),
        icon: BS,
        name: "Direct employees",
        desc: "Maximize workforce efficiency with our Direct Employees services. Streamline hiring, payroll,"
    }],
    EH = [{
        id: $(),
        title: "Create An Account",
        desc: "Join our platform effortlessly! Streamlined user registration with secure verification.",
        icon: Dh
    }, {
        id: $(),
        title: "Add Your Employees",
        desc: "Join our platform effortlessly! Streamlined user registration with secure verification.",
        icon: Wt
    }, {
        id: $(),
        title: "Run Your First Payroll",
        desc: "Join our platform effortlessly! Streamlined user registration with secure verification.",
        icon: T1
    }],
    BH = [{
        id: $(),
        img: jC,
        title: "Hire or relocate team member with in house visa support"
    }, {
        id: $(),
        img: RC,
        title: "Create complaint contracts with a single click"
    }, {
        id: $(),
        img: DC,
        title: "Send equipment worldwide, without the hassle"
    }, {
        id: $(),
        img: FC,
        title: "Offer country- specific benefits at competitive rates"
    }, {
        id: $(),
        img: qC,
        title: "Provide your team with co-working access via work"
    }, {
        id: $(),
        img: WC,
        title: "Save time using our advance integrations technologies."
    }],
    IH = [{
        id: $(),
        question: "What services does AccuPay offer?",
        answer: "AccuPay offers a comprehensive suite of services, including accounting, payroll processing, tax preparation, financial advisory, and global payroll solutions."
    }, {
        id: $(),
        question: "How does the accounting process work?",
        answer: "AccuPay offers a comprehensive suite of services, including accounting, payroll processing, tax preparation, financial advisory, and global payroll solutions."
    }, {
        id: $(),
        question: "Can AccuPay handle international payroll?",
        answer: "AccuPay offers a comprehensive suite of services, including accounting, payroll processing, tax preparation, financial advisory, and global payroll solutions."
    }, {
        id: $(),
        question: "How quickly can services be initiated?",
        answer: "AccuPay offers a comprehensive suite of services, including accounting, payroll processing, tax preparation, financial advisory, and global payroll solutions."
    }, {
        id: $(),
        question: "How do I get in touch with AccuPay's?",
        answer: "AccuPay offers a comprehensive suite of services, including accounting, payroll processing, tax preparation, financial advisory, and global payroll solutions."
    }],
    z0 = [{
        id: $(),
        img: GC,
        name: "Evelyn Alexander",
        designation: "Small Business Owner",
        review: "AccuPay's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform"
    }, {
        id: $(),
        img: UC,
        name: "Hunter Romero",
        designation: "HR Manager",
        review: "AccuPay's personalized service has been a game-changer for my small business. Efficient payroll processing."
    }, {
        id: $(),
        img: YC,
        name: "Ora Wong",
        designation: "Finance Director",
        review: "AccuPay's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform"
    }, {
        id: $(),
        img: KC,
        name: "Terry Cruz",
        designation: "CEO, Tech Innovations",
        review: "AccuPay's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform"
    }, {
        id: $(),
        img: JC,
        name: "Sarah McKinney",
        designation: "Restaurant Owner",
        review: "AccuPay's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform"
    }, {
        id: $(),
        img: QC,
        name: "Marguerite Potter",
        designation: "CEO, Tech Innovations",
        review: "AccuPay's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform"
    }, {
        id: $(),
        img: XC,
        name: "Isabelle McKinney",
        designation: "Product Manager",
        review: "AccuPay's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform"
    }, {
        id: $(),
        img: eH,
        name: "Amy Gutierrez",
        designation: "CFO, Solutions",
        review: "AccuPay's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform"
    }],
    OH = [{
        id: $(),
        icon: Tu,
        planName: "Basic Plan",
        desc: "Hire employees in 100+ countries where you don't have entities",
        isPopular: !1,
        monthlyPrice: "10",
        features: ["Accurate and Timely", "Basic Financial Records", "Starting at $X per month"]
    }, {
        id: $(),
        icon: dc,
        planName: "Standard Plan",
        desc: "All packages come with [mention any additional benefits, features, ",
        isPopular: !0,
        monthlyPrice: "20",
        features: ["Payroll Processing", "Full Bookkeeping", "Tax Preparation"]
    }, {
        id: $(),
        icon: Vo,
        planName: "Premium Plan",
        desc: "Explore our case studies to see how businesses like yours have benefited",
        isPopular: !1,
        monthlyPrice: "40",
        features: ["Full Bookkeeping", "Tax Preparation", "Financial Advisory"]
    }],
    NH = [{
        id: $(),
        date: "Jan 15",
        title: "Streamlining Year-End Financial Reporting",
        img: tH,
        desc: "Explore essential factors to consider when selecting payroll processing services. From compliance expertise ",
        category: "Taxation"
    }, {
        id: $(),
        date: "Jan 16",
        title: "Best Practices for Employee Expense Management",
        img: sH,
        desc: "Discover how technology is reshaping modern accounting practices. From automation to cloud-based solutions,",
        category: "Processing"
    }, {
        id: $(),
        date: "Jan 1",
        title: "The Evolution of Cloud-Based Accounting Solutions",
        img: aH,
        desc: "Identify and prevent common accounting mistakes with our insightful guide. Learn practical strategies.",
        category: "Taxation"
    }],
    zH = [{
        id: $(),
        icon: c4,
        title: "Compare Accupay",
        desc: "Explore how AccuPay stands out. Check our comparison.",
        linkText: "Compare Accupay"
    }, {
        id: $(),
        icon: x3,
        title: "Explore The Demo",
        desc: "Curious about our services? Request a demo to experience firsthand",
        linkText: "See Demo"
    }, {
        id: $(),
        icon: Ao,
        title: "Give Us a Ring ",
        desc: "Monday through Friday from 6AM - 6PM MST ",
        linkText: "Call Us"
    }, {
        id: $(),
        icon: _6,
        title: "Help Center",
        desc: "Looking for answers? Visit our Help Center for detailed guides",
        linkText: "Help Center"
    }],
    jH = [{
        id: $(),
        icon: Qp,
        title: "Payment Gateways"
    }, {
        id: $(),
        icon: Na,
        title: "Tax Software Integration"
    }, {
        id: $(),
        icon: b1,
        title: "Expense Management"
    }, {
        id: $(),
        icon: za,
        title: "Time Tracking Systems"
    }, {
        id: $(),
        icon: Oa,
        title: "Customer Relationship"
    }],
    RH = [{
        id: $(),
        title: "Who We Are",
        desc: "AccuPay has been at the forefront of delivering innovative financial solutions. Our journey began with a vision to simplify financial processes for businesses of all sizes. Today, we stand proud as a trusted partner, "
    }, {
        id: $(),
        title: "Our Mission",
        desc: "AccuPay is on a mission to empower businesses by providing reliable, efficient, and innovative financial services. We strive to be your go-to partner for all your accounting and payroll needs, enabling you to focus on what you do best."
    }, {
        id: $(),
        title: "Expert Team",
        desc: "Our team of experienced professionals brings a wealth of knowledge to every client interaction. From payroll processing to financial advisory, we have the expertise to guide your business."
    }],
    DH = [{
        id: $(),
        icon: Oa,
        title: "Integrity",
        desc: "We are transparent and do the right thing for the right reason"
    }, {
        id: $(),
        icon: Ne,
        title: "Accountability",
        desc: "We take ownership of outcomes and deliver on our commitments"
    }, {
        id: $(),
        icon: b1,
        title: "Diversity",
        desc: "We seek and leverage differences and unique perspectives"
    }, {
        id: $(),
        icon: Wt,
        title: "Customer Centricity",
        desc: "We start with the customer in everything we do"
    }],
    FH = [{
        id: $(),
        name: "Awwwards SOTD",
        desc: "FOR DISPLAY 2022"
    }, {
        id: $(),
        name: "Wix.com",
        desc: "INTERVIEW 2021"
    }, {
        id: $(),
        name: "CSS Awards",
        desc: "FEATURE 2020"
    }, {
        id: $(),
        name: "Muzli",
        desc: "FEATURE 2020"
    }, {
        id: $(),
        name: "Awwwards",
        desc: "FOR MUTEZA 2019"
    }, {
        id: $(),
        name: "Chapters Studio",
        desc: "FOR DISPLAY 2018"
    }],
    qH = [{
        id: $(),
        icon: Wt,
        title: "Accounting Services",
        link: "/services/accounting-services",
        desc: "Efficient payroll management is at the heart of our services. Experience seamless payroll processing,"
    }, {
        id: $(),
        icon: T1,
        title: "Payroll Processing",
        link: "/services/payroll-processing",
        desc: "Efficient payroll management is at the heart of our services. Experience seamless payroll processing,"
    }, {
        id: $(),
        icon: Ia,
        title: "Taxation services",
        link: "/services/taxation-services",
        desc: "Efficient payroll management is at the heart of our services. Experience seamless payroll processing,"
    }, {
        id: $(),
        icon: $o,
        title: "Real Estate Services",
        link: "/services/real-state-services",
        desc: "Efficient payroll management is at the heart of our services. Experience seamless payroll processing,"
    }, {
        id: $(),
        icon: So,
        title: "Healthcare Services",
        link: "/services/healthcare-services",
        desc: "Efficient payroll management is at the heart of our services. Experience seamless payroll processing,"
    }, {
        id: $(),
        icon: ko,
        title: "Dentist Services",
        link: "/services/dentist-services",
        desc: "Efficient payroll management is at the heart of our services. Experience seamless payroll processing,"
    }],
    Cs = [{
        id: $(),
        title: "Payroll Processing Services",
        desc: "Efficiently manage your payroll with our state-of-the-art processing services. From accurate salary disbursements."
    }, {
        id: $(),
        title: "Accounting and Bookkeeping",
        desc: "Navigate the complexities of financial management with our professional accounting and bookkeeping services. "
    }, {
        id: $(),
        title: "Tax Preparation and Filing",
        desc: "Ensure a seamless tax season with our expert tax preparation and filing services. We handle all necessary documentation."
    }, {
        id: $(),
        title: "Financial Advisory",
        desc: "Empower your business with strategic financial guidance. Our experienced advisors provide insights and recommendations."
    }],
    WH = [{
        id: $(),
        title: "Bookkeeping",
        desc: "Maintain precise and up-to-date records with our professional bookkeeping services. ",
        icon: Q4
    }, {
        id: $(),
        title: "Financial Reporting",
        desc: "Gain valuable insights into your business's performance with our detailed financial reporting.",
        icon: Ia
    }, {
        id: $(),
        title: "Tax Planning",
        desc: "Stay tax-compliant and maximize your savings with our expert tax planning services. ",
        icon: Na
    }, {
        id: $(),
        title: "Financial Analysis",
        desc: "Harness the power of data with our financial analysis services. We interpret financial trends, ",
        icon: Ba
    }],
    GH = [{
        id: $(),
        title: "Great Communication",
        desc: "We resolve issues and offer advice quickly.",
        icon: j6
    }, {
        id: $(),
        title: "Growth Potential",
        desc: "We proactively offer growth and profitability advice",
        icon: Ba
    }, {
        id: $(),
        title: "Stay in Compliance",
        desc: "Your dedicated expert knows your business inside and out.",
        icon: oy
    }],
    Oi = [{
        id: $(),
        title: "Communication issues.",
        desc: "Plus, accountants often charge by the minute."
    }, {
        id: $(),
        title: "Shrinking business.",
        desc: "There's no such thing as staying the same; you're either growing or you're shrinking."
    }, {
        id: $(),
        title: "Compliance and customer service problems.",
        desc: "National providers are known for mistakes and poor issue resolution."
    }],
    UH = [{
        id: $(),
        title: "Tax Preparation and Filing",
        desc: "Ensure a seamless tax season with our expert tax preparation services. We handle all necessary documentation and filing requirements,",
        icon: Tp
    }, {
        id: $(),
        title: "Strategic Tax Planning",
        desc: "Plan for the future with our strategic tax planning services. We help optimize your financial decisions to maximize savings and minimize potential risks.",
        icon: T1
    }, {
        id: $(),
        title: "Compliance Assurance",
        desc: "Stay compliant with ever-changing tax regulations. Our team stays abreast of updates, ensuring your business adheres to all relevant tax laws",
        icon: Uw
    }, {
        id: $(),
        title: "Audit Support",
        desc: "In the event of an audit, our experienced team provides support, helping you navigate the process efficiently and effectively.",
        icon: Ao
    }],
    YH = [{
        id: $(),
        icon: Wt,
        title: "Expert Tax Professionals",
        desc: "Our team of tax professionals brings extensive knowledge and expertise to handle various tax scenarios."
    }, {
        id: $(),
        icon: b1,
        title: "Personalized Consultations",
        desc: "We understand that every business is unique. Our personalized consultations ensure that our tax services."
    }, {
        id: $(),
        icon: Co,
        title: "Strategic Advice",
        desc: "Beyond compliance, we offer strategic advice to help you make informed financial decisions that benefit your business."
    }],
    KH = [{
        id: $(),
        icon: $o,
        title: "Property Management",
        desc: "Effortlessly manage your properties with our professional property management services. From tenant relations to maintenance, "
    }, {
        id: $(),
        icon: T1,
        title: "Investment Analysis",
        desc: "Make informed investment decisions with our detailed investment analysis. Our experts assess potential properties and provide insights to guide"
    }, {
        id: $(),
        icon: Oa,
        title: "Real Estate Transactions",
        desc: "Navigate real estate transactions with confidence. Our team facilitates smooth buying, selling, or leasing processes,"
    }, {
        id: $(),
        icon: Wt,
        title: "Lease Administration",
        desc: "Streamline lease management with our lease administration services. We handle documentation, renewals,"
    }],
    JH = [{
        id: $(),
        icon: Na,
        title: "Commissions Made Easy",
        desc: "Whether admin or agent, employee or contractor, run unlimited payrolls for your team in just a few clicks."
    }, {
        id: $(),
        icon: za,
        title: "Time-Saving Workflows",
        desc: "Employees can access earnings, check their paystubs, and add expenses, at the office or on the go."
    }, {
        id: $(),
        icon: dt,
        title: "Worry-free work",
        desc: "Never stress about late or incorrect payments again. With Gusto, payroll is accurate, efficient."
    }],
    QH = [{
        id: $(),
        icon: T1,
        title: "Payroll for Healthcare Professionals",
        desc: "Efficient payroll processing tailored to the unique needs of healthcare professionals. Ensure accurate and timely compensation"
    }, {
        id: $(),
        icon: k5,
        title: "Compliance Management",
        desc: "Stay compliant with ever-evolving healthcare regulations. Our services include compliance management to ensure your practice"
    }, {
        id: $(),
        icon: So,
        title: "Financial Advisory for Healthcare Practices",
        desc: "Navigate the financial landscape of healthcare with our expert advisory services. From budgeting to strategic planning,"
    }, {
        id: $(),
        icon: Wt,
        title: "Healthcare Consulting",
        desc: "Receive personalized consulting services to address the unique challenges of your healthcare practice."
    }],
    XH = [{
        id: $(),
        icon: R3,
        title: "Mobile Payroll Processing"
    }, {
        id: $(),
        icon: za,
        title: "Real-Time Compliance"
    }, {
        id: $(),
        icon: SM,
        title: "Billing and Invoicing"
    }, {
        id: $(),
        icon: Ba,
        title: "Performance Analytics"
    }],
    eZ = [{
        id: $(),
        icon: ko,
        title: "Payroll for Dental Professionals",
        desc: "Accurate and efficient payroll processing tailored to meet the unique needs of dental professionals. Ensure your dedicated team"
    }, {
        id: $(),
        icon: b1,
        title: "Compliance Management",
        desc: "Stay compliant with the ever-evolving regulations in the dental industry. Our services include compliance management"
    }, {
        id: $(),
        icon: Wt,
        title: "Financial Advisory for Dental Practices",
        desc: "Navigate the financial landscape of dental care with our expert advisory services. From budgeting to strategic planning,"
    }, {
        id: $(),
        icon: b1,
        title: "Dental Consulting",
        desc: "Receive personalized consulting services to address the unique challenges of your dental practice."
    }],
    Eo = [{
        id: $(),
        img: iH,
        name: "Tax Compliance Simple"
    }, {
        id: $(),
        img: nH,
        name: "Automated Payroll Success"
    }, {
        id: $(),
        img: oH,
        name: "A Payroll Case Study"
    }, {
        id: $(),
        img: lH,
        name: "Payroll Income Business"
    }, {
        id: $(),
        img: rH,
        name: "Accounting Success"
    }, {
        id: $(),
        img: cH,
        name: "Payroll Outsourcing Center"
    }],
    Bo = [{
        id: $(),
        name: "Bess Collins",
        designation: "Web Designer",
        img: dH
    }, {
        id: $(),
        name: "Micheal James",
        designation: "Accountant",
        img: uH
    }, {
        id: $(),
        name: "Dean Obrien",
        designation: "Tax Specialist",
        img: pH
    }, {
        id: $(),
        name: "Maggie Clark",
        designation: "Manager",
        img: fH
    }, {
        id: $(),
        name: "Rosalie Chapman",
        designation: "Product Manager",
        img: hH
    }, {
        id: $(),
        name: "Verna Gutierrez",
        designation: "CEO, Accupay",
        img: mH
    }],
    tZ = [{
        id: $(),
        icon: Wt,
        name: "Client",
        desc: "David Warner"
    }, {
        id: $(),
        icon: x8,
        name: "Date",
        desc: "15 - January - 2024"
    }, {
        id: $(),
        icon: GM,
        name: "Category",
        desc: "Payroll Processing"
    }, {
        id: $(),
        icon: g1,
        name: "Location",
        desc: "Garuda, 99 INA"
    }],
    sZ = [{
        id: $(),
        name: "Web Design",
        percentage: 70
    }, {
        id: $(),
        name: "Mobile App Design",
        percentage: 80
    }, {
        id: $(),
        name: "UI/UX Design",
        percentage: 85
    }],
    ea = [{
        id: $(),
        img: gH,
        name: "Accounting Software",
        price: "756"
    }, {
        id: $(),
        img: vH,
        name: "Online Courses",
        price: "637"
    }, {
        id: $(),
        img: yH,
        name: "Payroll Processing Tools",
        price: "948"
    }, {
        id: $(),
        img: _H,
        name: "Educational Resources",
        price: "402"
    }, {
        id: $(),
        img: xH,
        name: "Templates and Forms",
        price: "782"
    }, {
        id: $(),
        img: bH,
        name: "Tax Compliance",
        price: "573"
    }],
    Io = [{
        id: $(),
        title: "The Evolution of Cloud-Based Accounting Solutions",
        img: wH,
        date: "Jan 15",
        tag: "Accounting",
        desc: "Explore the transformative effects of remote work on payroll processing."
    }, {
        id: $(),
        title: "Best Practices for Employee Expense Management",
        img: $H,
        date: "Jan 16",
        tag: "Payroll Processing",
        desc: "Explore comprehensive strategies to fortify data security in your accounting operations. "
    }, {
        id: $(),
        title: "Payroll Outsourcing vs. In-House Processing",
        img: AH,
        date: "Jan 14",
        tag: "Remote Work",
        desc: "Explore the transformative effects of remote work on payroll processing."
    }, {
        id: $(),
        title: "Streamlining Year-End Financial Reporting",
        img: SH,
        date: "Jan 19",
        tag: "Software",
        desc: "Uncover the pros and cons of payroll outsourcing and in-house processing. Delve into cost considerations,"
    }, {
        id: $(),
        title: "Ensuring Data Security in Your Accounting Practices",
        img: MH,
        date: "Jan 25",
        tag: "Taxation",
        desc: "Discover expert strategies for optimizing employee expense management."
    }, {
        id: $(),
        title: "The Impact of Remote Work on Payroll Processing.",
        img: CH,
        date: "Jan 13",
        tag: "Planning",
        desc: "Embark on a journey through the transformative growth of cloud-based accounting solutions."
    }],
    aZ = [{
        id: $(),
        name: "Accounting",
        count: "6"
    }, {
        id: $(),
        name: "Business",
        count: "4"
    }, {
        id: $(),
        name: "Finance",
        count: "8"
    }, {
        id: $(),
        name: "Invest",
        count: "3"
    }, {
        id: $(),
        name: "Payroll Processing",
        count: "2"
    }, {
        id: $(),
        name: "Taxation",
        count: "5"
    }],
    iZ = [{
        id: $(),
        img: Ii,
        date: "December 15",
        title: "Learn About Payroll Processing Essentials"
    }, {
        id: $(),
        img: Ii,
        date: "December 10",
        title: "Financial Management Strategies People Use"
    }, {
        id: $(),
        img: HH,
        date: "December 8",
        title: "Recent Industry News and Updates"
    }, {
        id: $(),
        img: ZH,
        date: "December 20",
        title: "Innovations in Accounting Software"
    }],
    nZ = [{
        id: $(),
        icon: n0,
        name: "Chat to Sales",
        linkText: "accupay@mail.com",
        link: "mailto:accupay@gmail.com"
    }, {
        id: $(),
        icon: rs,
        name: "Contact Us",
        linkText: "+9190-8687-3345-120",
        link: "tel:+9190-8687-3345-120"
    }, {
        id: $(),
        icon: g1,
        name: "Visit Our Office",
        address: "London 2HX, United Kingdom"
    }],
    oZ = [{
        id: $(),
        name: "Payroll"
    }, {
        id: $(),
        name: "Software"
    }, {
        id: $(),
        name: "Accounting"
    }, {
        id: $(),
        name: "Solutions"
    }, {
        id: $(),
        name: "Planning"
    }, {
        id: $(),
        name: "Finance"
    }, {
        id: $(),
        name: "Tax"
    }];
var lZ = rZ;

function rZ(e, t) {
    var s = {};
    typeof t == "string" && (t = [].slice.call(arguments, 1));
    for (var a in e)(!e.hasOwnProperty || e.hasOwnProperty(a)) && t.indexOf(a) === -1 && (s[a] = e[a]);
    return s
}

function cZ(e) {
    const t = [];
    return t[0] = requestAnimationFrame(() => {
        t[1] = requestAnimationFrame(() => {
            e()
        })
    }), t
}

function Ni(e) {
    for (const t of e) cancelAnimationFrame(t)
}

function ta(e) {
    return typeof e == "string" && (e = Number(e)), !Number.isNaN(e) && Number.isFinite(e)
}

function Hs(e) {
    return typeof e == "string" && e.search("%") === e.length - 1 && ta(e.slice(0, Math.max(0, e.length - 1)))
}
const zi = {
        animating: "vah-animating",
        animatingUp: "vah-animating--up",
        animatingDown: "vah-animating--down",
        animatingToHeightZero: "vah-animating--to-height-zero",
        animatingToHeightAuto: "vah-animating--to-height-auto",
        animatingToHeightSpecific: "vah-animating--to-height-specific",
        static: "vah-static",
        staticHeightZero: "vah-static--height-zero",
        staticHeightAuto: "vah-static--height-auto",
        staticHeightSpecific: "vah-static--height-specific"
    },
    dZ = ["animateOpacity", "animationStateClasses", "applyInlineTransitions", "contentClass", "class", "delay", "duration", "easing", "height"],
    ja = H({
        props: {
            ariaHidden: {
                type: Boolean
            },
            animateOpacity: {
                type: Boolean,
                default: !1
            },
            animationStateClasses: {
                type: Object,
                default: zi
            },
            applyInlineTransitions: {
                type: Boolean,
                default: !0
            },
            contentClass: {
                type: String,
                default: void 0
            },
            delay: {
                type: Number,
                default: 0
            },
            duration: {
                type: Number,
                default: 250
            },
            easing: {
                type: String,
                default: "ease"
            },
            height: {
                type: [String, Number],
                validator(e) {
                    return typeof e == "number" && e >= 0 || Hs(e) || e === "auto" ? !0 : (console.error(`value "${e}" of type "${typeof e}" is invalid type for \`height\` in \`AnimateHeight\`. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").`), !1)
                },
                required: !0
            },
            id: {
                type: String,
                default: void 0
            }
        },
        emits: {
            animationEnd(e) {
                return e
            },
            animationStart(e) {
                return e
            }
        },
        setup(e, {
            slots: t,
            emit: s,
            attrs: a
        }) {
            const i = le();
            let o = [],
                l = "auto",
                r = "visible";
            ta(e.height) ? (l = Math.max(0, Number(e.height)), r = "hidden") : Hs(e.height) && (l = e.height === "0%" ? 0 : e.height, r = "hidden");

            function c(se) {
                se === 0 && (i.value.style.display = "")
            }

            function f(se) {
                se === 0 && (i.value.style.display = "none")
            }
            const d = {
                ...zi,
                ...e.animationStateClasses
            };

            function h(se) {
                return {
                    [d.static]: !0,
                    [d.staticHeightZero]: se === 0,
                    [d.staticHeightSpecific]: typeof se == "number" && se > 0,
                    [d.staticHeightAuto]: se === "auto"
                }
            }
            const m = h(l),
                y = typeof window < "u";
            let b = !1;
            y && window.matchMedia !== void 0 && (b = window.matchMedia("(prefers-reduced-motion").matches);

            function M() {
                if (b) return {
                    delay: 0,
                    duration: 0
                };
                const {
                    delay: se,
                    duration: O
                } = e;
                return {
                    delay: se,
                    duration: O
                }
            }

            function V() {
                const se = le({
                        animationStateClasses: m,
                        height: l,
                        overflow: r,
                        shouldUseTransitions: !1
                    }),
                    O = le(se.value);

                function k(B) {
                    O.value = se.value, se.value = B
                }
                return {
                    prevState: P0(O),
                    updateState: k,
                    state: P0(se)
                }
            }
            const {
                prevState: S,
                updateState: Z,
                state: C
            } = V();
            let E, z;
            Tt(() => {
                var O;
                const {
                    height: se
                } = C.value;
                ((O = i.value) == null ? void 0 : O.style) !== void 0 && se !== null && f(se)
            });
            let j = l;
            return ts(() => {
                const {
                    delay: se,
                    duration: O,
                    height: k
                } = e;
                if (i.value === void 0 || k === j) return;
                const B = j;
                j = k, S.value.height !== void 0 && c(S.value.height), i.value.style.overflow = "hidden";
                const U = i.value.offsetHeight;
                i.value.style.overflow = "";
                const ce = O + se;
                let Y;
                const de = {
                        overflow: "hidden"
                    },
                    be = B === "auto";
                ta(k) ? (Y = Math.max(0, Number(k)), de.height = Y) : Hs(k) ? (Y = k === "0%" ? 0 : k, de.height = Y) : (Y = U, de.height = "auto", de.overflow = null), be && (de.height = Y, Y = U);
                const fe = {
                        [d.animating]: !0,
                        [d.animatingUp]: B !== void 0 && (B === "auto" || k < B),
                        [d.animatingDown]: B !== void 0 && (k === "auto" || k > B),
                        [d.animatingToHeightZero]: de.height === 0,
                        [d.animatingToHeightAuto]: de.height === "auto",
                        [d.animatingToHeightSpecific]: de.height > 0
                    },
                    _e = h(de.height);
                Z({
                    animationStateClasses: fe,
                    height: Y,
                    overflow: "hidden",
                    shouldUseTransitions: !be
                }), E !== null && clearTimeout(E), clearTimeout(z), be ? (de.shouldUseTransitions = !0, Ni(o), o = cZ(() => {
                    Z({
                        ...C.value,
                        ...de
                    }), s("animationStart", {
                        newHeight: de.height
                    })
                }), z = setTimeout(() => {
                    Z({
                        ...C.value,
                        animationStateClasses: _e,
                        shouldUseTransitions: !1
                    }), de.height !== null && de.height !== void 0 && f(de.height), s("animationEnd", {
                        newHeight: de.height
                    })
                }, ce)) : (s("animationStart", {
                    newHeight: Y
                }), E = setTimeout(() => {
                    de.animationStateClasses = _e, de.shouldUseTransitions = !1, Z({
                        ...C.value,
                        ...de
                    }), k !== "auto" && f(Y), s("animationEnd", {
                        newHeight: Y
                    })
                }, ce))
            }), ss(() => {
                Ni(o), E !== null && clearTimeout(E), clearTimeout(z), E = null
            }), () => {
                var wt;
                const {
                    animateOpacity: se,
                    applyInlineTransitions: O,
                    contentClass: k,
                    easing: B,
                    id: U
                } = e, {
                    duration: ce,
                    delay: Y
                } = M(), {
                    height: de,
                    overflow: be,
                    animationStateClasses: fe,
                    shouldUseTransitions: _e
                } = C.value, J = a.style, Le = typeof de == "number" ? `${de}px` : de ? ? void 0, Me = {
                    ...J,
                    height: Le,
                    overflow: be ? ? (J == null ? void 0 : J.overflow)
                };
                _e && O && (Me.transition = `height ${ce}ms ${B} ${Y}ms`, (J == null ? void 0 : J.transition) !== null && (J == null ? void 0 : J.transition) !== void 0 && (Me.transition = `${J.transition}, ${Me.transition}`), Me.WebkitTransition = Me.transition);
                const Ee = {};
                se && (Ee.transition = `opacity ${ce}ms ${B} ${Y}ms`, Ee.WebkitTransition = Ee.transition, de === 0 && (Ee.opacity = 0));
                const Vt = typeof e.ariaHidden < "u" ? e.ariaHidden : de === 0;
                return De("div", {
                    ...lZ(e, dZ),
                    "aria-hidden": Vt,
                    class: [fe, a.class],
                    id: U,
                    style: Me
                }, [De("div", {
                    class: k,
                    style: Ee,
                    ref: i
                }, (wt = t.default) == null ? void 0 : wt.call(t))])
            }
        }
    });
/*!
 * vue-router v4.2.5
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
const d1 = typeof window < "u";

function uZ(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const Ze = Object.assign;

function Zs(e, t) {
    const s = {};
    for (const a in t) {
        const i = t[a];
        s[a] = ft(i) ? i.map(e) : e(i)
    }
    return s
}
const R1 = () => {},
    ft = Array.isArray,
    pZ = /\/$/,
    fZ = e => e.replace(pZ, "");

function Ts(e, t, s = "/") {
    let a, i = {},
        o = "",
        l = "";
    const r = t.indexOf("#");
    let c = t.indexOf("?");
    return r < c && r >= 0 && (c = -1), c > -1 && (a = t.slice(0, c), o = t.slice(c + 1, r > -1 ? r : t.length), i = e(o)), r > -1 && (a = a || t.slice(0, r), l = t.slice(r, t.length)), a = vZ(a ? ? t, s), {
        fullPath: a + (o && "?") + o + l,
        path: a,
        query: i,
        hash: l
    }
}

function hZ(e, t) {
    const s = t.query ? e(t.query) : "";
    return t.path + (s && "?") + s + (t.hash || "")
}

function ji(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}

function mZ(e, t, s) {
    const a = t.matched.length - 1,
        i = s.matched.length - 1;
    return a > -1 && a === i && w1(t.matched[a], s.matched[i]) && Oo(t.params, s.params) && e(t.query) === e(s.query) && t.hash === s.hash
}

function w1(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}

function Oo(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const s in e)
        if (!gZ(e[s], t[s])) return !1;
    return !0
}

function gZ(e, t) {
    return ft(e) ? Ri(e, t) : ft(t) ? Ri(t, e) : e === t
}

function Ri(e, t) {
    return ft(t) ? e.length === t.length && e.every((s, a) => s === t[a]) : e.length === 1 && e[0] === t
}

function vZ(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const s = t.split("/"),
        a = e.split("/"),
        i = a[a.length - 1];
    (i === ".." || i === ".") && a.push("");
    let o = s.length - 1,
        l, r;
    for (l = 0; l < a.length; l++)
        if (r = a[l], r !== ".")
            if (r === "..") o > 1 && o--;
            else break;
    return s.slice(0, o).join("/") + "/" + a.slice(l - (l === a.length ? 1 : 0)).join("/")
}
var J1;
(function (e) {
    e.pop = "pop", e.push = "push"
})(J1 || (J1 = {}));
var D1;
(function (e) {
    e.back = "back", e.forward = "forward", e.unknown = ""
})(D1 || (D1 = {}));

function yZ(e) {
    if (!e)
        if (d1) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), fZ(e)
}
const _Z = /^[^#]+#/;

function xZ(e, t) {
    return e.replace(_Z, "#") + t
}

function bZ(e, t) {
    const s = document.documentElement.getBoundingClientRect(),
        a = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: a.left - s.left - (t.left || 0),
        top: a.top - s.top - (t.top || 0)
    }
}
const cs = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
});

function wZ(e) {
    let t;
    if ("el" in e) {
        const s = e.el,
            a = typeof s == "string" && s.startsWith("#"),
            i = typeof s == "string" ? a ? document.getElementById(s.slice(1)) : document.querySelector(s) : s;
        if (!i) return;
        t = bZ(i, e)
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset)
}

function Di(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const sa = new Map;

function $Z(e, t) {
    sa.set(e, t)
}

function AZ(e) {
    const t = sa.get(e);
    return sa.delete(e), t
}
let SZ = () => location.protocol + "//" + location.host;

function No(e, t) {
    const {
        pathname: s,
        search: a,
        hash: i
    } = t, o = e.indexOf("#");
    if (o > -1) {
        let r = i.includes(e.slice(o)) ? e.slice(o).length : 1,
            c = i.slice(r);
        return c[0] !== "/" && (c = "/" + c), ji(c, "")
    }
    return ji(s, e) + a + i
}

function MZ(e, t, s, a) {
    let i = [],
        o = [],
        l = null;
    const r = ({
        state: m
    }) => {
        const y = No(e, location),
            b = s.value,
            M = t.value;
        let V = 0;
        if (m) {
            if (s.value = y, t.value = m, l && l === b) {
                l = null;
                return
            }
            V = M ? m.position - M.position : 0
        } else a(y);
        i.forEach(S => {
            S(s.value, b, {
                delta: V,
                type: J1.pop,
                direction: V ? V > 0 ? D1.forward : D1.back : D1.unknown
            })
        })
    };

    function c() {
        l = s.value
    }

    function f(m) {
        i.push(m);
        const y = () => {
            const b = i.indexOf(m);
            b > -1 && i.splice(b, 1)
        };
        return o.push(y), y
    }

    function d() {
        const {
            history: m
        } = window;
        m.state && m.replaceState(Ze({}, m.state, {
            scroll: cs()
        }), "")
    }

    function h() {
        for (const m of o) m();
        o = [], window.removeEventListener("popstate", r), window.removeEventListener("beforeunload", d)
    }
    return window.addEventListener("popstate", r), window.addEventListener("beforeunload", d, {
        passive: !0
    }), {
        pauseListeners: c,
        listen: f,
        destroy: h
    }
}

function Fi(e, t, s, a = !1, i = !1) {
    return {
        back: e,
        current: t,
        forward: s,
        replaced: a,
        position: window.history.length,
        scroll: i ? cs() : null
    }
}

function CZ(e) {
    const {
        history: t,
        location: s
    } = window, a = {
        value: No(e, s)
    }, i = {
        value: t.state
    };
    i.value || o(a.value, {
        back: null,
        current: a.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);

    function o(c, f, d) {
        const h = e.indexOf("#"),
            m = h > -1 ? (s.host && document.querySelector("base") ? e : e.slice(h)) + c : SZ() + e + c;
        try {
            t[d ? "replaceState" : "pushState"](f, "", m), i.value = f
        } catch (y) {
            console.error(y), s[d ? "replace" : "assign"](m)
        }
    }

    function l(c, f) {
        const d = Ze({}, t.state, Fi(i.value.back, c, i.value.forward, !0), f, {
            position: i.value.position
        });
        o(c, d, !0), a.value = c
    }

    function r(c, f) {
        const d = Ze({}, i.value, t.state, {
            forward: c,
            scroll: cs()
        });
        o(d.current, d, !0);
        const h = Ze({}, Fi(a.value, c, null), {
            position: d.position + 1
        }, f);
        o(c, h, !1), a.value = c
    }
    return {
        location: a,
        state: i,
        push: r,
        replace: l
    }
}

function HZ(e) {
    e = yZ(e);
    const t = CZ(e),
        s = MZ(e, t.state, t.location, t.replace);

    function a(o, l = !0) {
        l || s.pauseListeners(), history.go(o)
    }
    const i = Ze({
        location: "",
        base: e,
        go: a,
        createHref: xZ.bind(null, e)
    }, t, s);
    return Object.defineProperty(i, "location", {
        enumerable: !0,
        get: () => t.location.value
    }), Object.defineProperty(i, "state", {
        enumerable: !0,
        get: () => t.state.value
    }), i
}

function ZZ(e) {
    return typeof e == "string" || e && typeof e == "object"
}

function zo(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const Pt = {
        path: "/",
        name: void 0,
        params: {},
        query: {},
        hash: "",
        fullPath: "/",
        matched: [],
        meta: {},
        redirectedFrom: void 0
    },
    jo = Symbol("");
var qi;
(function (e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated"
})(qi || (qi = {}));

function $1(e, t) {
    return Ze(new Error, {
        type: e,
        [jo]: !0
    }, t)
}

function $t(e, t) {
    return e instanceof Error && jo in e && (t == null || !!(e.type & t))
}
const Wi = "[^/]+?",
    TZ = {
        sensitive: !1,
        strict: !1,
        start: !0,
        end: !0
    },
    VZ = /[.+*?^${}()[\]/\\]/g;

function kZ(e, t) {
    const s = Ze({}, TZ, t),
        a = [];
    let i = s.start ? "^" : "";
    const o = [];
    for (const f of e) {
        const d = f.length ? [] : [90];
        s.strict && !f.length && (i += "/");
        for (let h = 0; h < f.length; h++) {
            const m = f[h];
            let y = 40 + (s.sensitive ? .25 : 0);
            if (m.type === 0) h || (i += "/"), i += m.value.replace(VZ, "\\$&"), y += 40;
            else if (m.type === 1) {
                const {
                    value: b,
                    repeatable: M,
                    optional: V,
                    regexp: S
                } = m;
                o.push({
                    name: b,
                    repeatable: M,
                    optional: V
                });
                const Z = S || Wi;
                if (Z !== Wi) {
                    y += 10;
                    try {
                        new RegExp(`(${Z})`)
                    } catch (E) {
                        throw new Error(`Invalid custom RegExp for param "${b}" (${Z}): ` + E.message)
                    }
                }
                let C = M ? `((?:${Z})(?:/(?:${Z}))*)` : `(${Z})`;
                h || (C = V && f.length < 2 ? `(?:/${C})` : "/" + C), V && (C += "?"), i += C, y += 20, V && (y += -8), M && (y += -20), Z === ".*" && (y += -50)
            }
            d.push(y)
        }
        a.push(d)
    }
    if (s.strict && s.end) {
        const f = a.length - 1;
        a[f][a[f].length - 1] += .7000000000000001
    }
    s.strict || (i += "/?"), s.end ? i += "$" : s.strict && (i += "(?:/|$)");
    const l = new RegExp(i, s.sensitive ? "" : "i");

    function r(f) {
        const d = f.match(l),
            h = {};
        if (!d) return null;
        for (let m = 1; m < d.length; m++) {
            const y = d[m] || "",
                b = o[m - 1];
            h[b.name] = y && b.repeatable ? y.split("/") : y
        }
        return h
    }

    function c(f) {
        let d = "",
            h = !1;
        for (const m of e) {
            (!h || !d.endsWith("/")) && (d += "/"), h = !1;
            for (const y of m)
                if (y.type === 0) d += y.value;
                else if (y.type === 1) {
                const {
                    value: b,
                    repeatable: M,
                    optional: V
                } = y, S = b in f ? f[b] : "";
                if (ft(S) && !M) throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);
                const Z = ft(S) ? S.join("/") : S;
                if (!Z)
                    if (V) m.length < 2 && (d.endsWith("/") ? d = d.slice(0, -1) : h = !0);
                    else throw new Error(`Missing required param "${b}"`);
                d += Z
            }
        }
        return d || "/"
    }
    return {
        re: l,
        score: a,
        keys: o,
        parse: r,
        stringify: c
    }
}

function PZ(e, t) {
    let s = 0;
    for (; s < e.length && s < t.length;) {
        const a = t[s] - e[s];
        if (a) return a;
        s++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}

function LZ(e, t) {
    let s = 0;
    const a = e.score,
        i = t.score;
    for (; s < a.length && s < i.length;) {
        const o = PZ(a[s], i[s]);
        if (o) return o;
        s++
    }
    if (Math.abs(i.length - a.length) === 1) {
        if (Gi(a)) return 1;
        if (Gi(i)) return -1
    }
    return i.length - a.length
}

function Gi(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const EZ = {
        type: 0,
        value: ""
    },
    BZ = /[a-zA-Z0-9_]/;

function IZ(e) {
    if (!e) return [
        []
    ];
    if (e === "/") return [
        [EZ]
    ];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

    function t(y) {
        throw new Error(`ERR (${s})/"${f}": ${y}`)
    }
    let s = 0,
        a = s;
    const i = [];
    let o;

    function l() {
        o && i.push(o), o = []
    }
    let r = 0,
        c, f = "",
        d = "";

    function h() {
        f && (s === 0 ? o.push({
            type: 0,
            value: f
        }) : s === 1 || s === 2 || s === 3 ? (o.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`), o.push({
            type: 1,
            value: f,
            regexp: d,
            repeatable: c === "*" || c === "+",
            optional: c === "*" || c === "?"
        })) : t("Invalid state to consume buffer"), f = "")
    }

    function m() {
        f += c
    }
    for (; r < e.length;) {
        if (c = e[r++], c === "\\" && s !== 2) {
            a = s, s = 4;
            continue
        }
        switch (s) {
            case 0:
                c === "/" ? (f && h(), l()) : c === ":" ? (h(), s = 1) : m();
                break;
            case 4:
                m(), s = a;
                break;
            case 1:
                c === "(" ? s = 2 : BZ.test(c) ? m() : (h(), s = 0, c !== "*" && c !== "?" && c !== "+" && r--);
                break;
            case 2:
                c === ")" ? d[d.length - 1] == "\\" ? d = d.slice(0, -1) + c : s = 3 : d += c;
                break;
            case 3:
                h(), s = 0, c !== "*" && c !== "?" && c !== "+" && r--, d = "";
                break;
            default:
                t("Unknown state");
                break
        }
    }
    return s === 2 && t(`Unfinished custom RegExp for param "${f}"`), h(), l(), i
}

function OZ(e, t, s) {
    const a = kZ(IZ(e.path), s),
        i = Ze(a, {
            record: e,
            parent: t,
            children: [],
            alias: []
        });
    return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i
}

function NZ(e, t) {
    const s = [],
        a = new Map;
    t = Ki({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);

    function i(d) {
        return a.get(d)
    }

    function o(d, h, m) {
        const y = !m,
            b = zZ(d);
        b.aliasOf = m && m.record;
        const M = Ki(t, d),
            V = [b];
        if ("alias" in d) {
            const C = typeof d.alias == "string" ? [d.alias] : d.alias;
            for (const E of C) V.push(Ze({}, b, {
                components: m ? m.record.components : b.components,
                path: E,
                aliasOf: m ? m.record : b
            }))
        }
        let S, Z;
        for (const C of V) {
            const {
                path: E
            } = C;
            if (h && E[0] !== "/") {
                const z = h.record.path,
                    j = z[z.length - 1] === "/" ? "" : "/";
                C.path = h.record.path + (E && j + E)
            }
            if (S = OZ(C, h, M), m ? m.alias.push(S) : (Z = Z || S, Z !== S && Z.alias.push(S), y && d.name && !Yi(S) && l(d.name)), b.children) {
                const z = b.children;
                for (let j = 0; j < z.length; j++) o(z[j], S, m && m.children[j])
            }
            m = m || S, (S.record.components && Object.keys(S.record.components).length || S.record.name || S.record.redirect) && c(S)
        }
        return Z ? () => {
            l(Z)
        } : R1
    }

    function l(d) {
        if (zo(d)) {
            const h = a.get(d);
            h && (a.delete(d), s.splice(s.indexOf(h), 1), h.children.forEach(l), h.alias.forEach(l))
        } else {
            const h = s.indexOf(d);
            h > -1 && (s.splice(h, 1), d.record.name && a.delete(d.record.name), d.children.forEach(l), d.alias.forEach(l))
        }
    }

    function r() {
        return s
    }

    function c(d) {
        let h = 0;
        for (; h < s.length && LZ(d, s[h]) >= 0 && (d.record.path !== s[h].record.path || !Ro(d, s[h]));) h++;
        s.splice(h, 0, d), d.record.name && !Yi(d) && a.set(d.record.name, d)
    }

    function f(d, h) {
        let m, y = {},
            b, M;
        if ("name" in d && d.name) {
            if (m = a.get(d.name), !m) throw $1(1, {
                location: d
            });
            M = m.record.name, y = Ze(Ui(h.params, m.keys.filter(Z => !Z.optional).map(Z => Z.name)), d.params && Ui(d.params, m.keys.map(Z => Z.name))), b = m.stringify(y)
        } else if ("path" in d) b = d.path, m = s.find(Z => Z.re.test(b)), m && (y = m.parse(b), M = m.record.name);
        else {
            if (m = h.name ? a.get(h.name) : s.find(Z => Z.re.test(h.path)), !m) throw $1(1, {
                location: d,
                currentLocation: h
            });
            M = m.record.name, y = Ze({}, h.params, d.params), b = m.stringify(y)
        }
        const V = [];
        let S = m;
        for (; S;) V.unshift(S.record), S = S.parent;
        return {
            name: M,
            path: b,
            params: y,
            matched: V,
            meta: RZ(V)
        }
    }
    return e.forEach(d => o(d)), {
        addRoute: o,
        resolve: f,
        removeRoute: l,
        getRoutes: r,
        getRecordMatcher: i
    }
}

function Ui(e, t) {
    const s = {};
    for (const a of t) a in e && (s[a] = e[a]);
    return s
}

function zZ(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: jZ(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components" in e ? e.components || null : e.component && {
            default: e.component
        }
    }
}

function jZ(e) {
    const t = {},
        s = e.props || !1;
    if ("component" in e) t.default = s;
    else
        for (const a in e.components) t[a] = typeof s == "object" ? s[a] : s;
    return t
}

function Yi(e) {
    for (; e;) {
        if (e.record.aliasOf) return !0;
        e = e.parent
    }
    return !1
}

function RZ(e) {
    return e.reduce((t, s) => Ze(t, s.meta), {})
}

function Ki(e, t) {
    const s = {};
    for (const a in e) s[a] = a in t ? t[a] : e[a];
    return s
}

function Ro(e, t) {
    return t.children.some(s => s === e || Ro(e, s))
}
const Do = /#/g,
    DZ = /&/g,
    FZ = /\//g,
    qZ = /=/g,
    WZ = /\?/g,
    Fo = /\+/g,
    GZ = /%5B/g,
    UZ = /%5D/g,
    qo = /%5E/g,
    YZ = /%60/g,
    Wo = /%7B/g,
    KZ = /%7C/g,
    Go = /%7D/g,
    JZ = /%20/g;

function Ra(e) {
    return encodeURI("" + e).replace(KZ, "|").replace(GZ, "[").replace(UZ, "]")
}

function QZ(e) {
    return Ra(e).replace(Wo, "{").replace(Go, "}").replace(qo, "^")
}

function aa(e) {
    return Ra(e).replace(Fo, "%2B").replace(JZ, "+").replace(Do, "%23").replace(DZ, "%26").replace(YZ, "`").replace(Wo, "{").replace(Go, "}").replace(qo, "^")
}

function XZ(e) {
    return aa(e).replace(qZ, "%3D")
}

function eT(e) {
    return Ra(e).replace(Do, "%23").replace(WZ, "%3F")
}

function tT(e) {
    return e == null ? "" : eT(e).replace(FZ, "%2F")
}

function j0(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}

function sT(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const a = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let i = 0; i < a.length; ++i) {
        const o = a[i].replace(Fo, " "),
            l = o.indexOf("="),
            r = j0(l < 0 ? o : o.slice(0, l)),
            c = l < 0 ? null : j0(o.slice(l + 1));
        if (r in t) {
            let f = t[r];
            ft(f) || (f = t[r] = [f]), f.push(c)
        } else t[r] = c
    }
    return t
}

function Ji(e) {
    let t = "";
    for (let s in e) {
        const a = e[s];
        if (s = XZ(s), a == null) {
            a !== void 0 && (t += (t.length ? "&" : "") + s);
            continue
        }(ft(a) ? a.map(o => o && aa(o)) : [a && aa(a)]).forEach(o => {
            o !== void 0 && (t += (t.length ? "&" : "") + s, o != null && (t += "=" + o))
        })
    }
    return t
}

function aT(e) {
    const t = {};
    for (const s in e) {
        const a = e[s];
        a !== void 0 && (t[s] = ft(a) ? a.map(i => i == null ? null : "" + i) : a == null ? a : "" + a)
    }
    return t
}
const iT = Symbol(""),
    Qi = Symbol(""),
    Da = Symbol(""),
    Fa = Symbol(""),
    ia = Symbol("");

function B1() {
    let e = [];

    function t(a) {
        return e.push(a), () => {
            const i = e.indexOf(a);
            i > -1 && e.splice(i, 1)
        }
    }

    function s() {
        e = []
    }
    return {
        add: t,
        list: () => e.slice(),
        reset: s
    }
}

function Ot(e, t, s, a, i) {
    const o = a && (a.enterCallbacks[i] = a.enterCallbacks[i] || []);
    return () => new Promise((l, r) => {
        const c = h => {
                h === !1 ? r($1(4, {
                    from: s,
                    to: t
                })) : h instanceof Error ? r(h) : ZZ(h) ? r($1(2, {
                    from: t,
                    to: h
                })) : (o && a.enterCallbacks[i] === o && typeof h == "function" && o.push(h), l())
            },
            f = e.call(a && a.instances[i], t, s, c);
        let d = Promise.resolve(f);
        e.length < 3 && (d = d.then(c)), d.catch(h => r(h))
    })
}

function Vs(e, t, s, a) {
    const i = [];
    for (const o of e)
        for (const l in o.components) {
            let r = o.components[l];
            if (!(t !== "beforeRouteEnter" && !o.instances[l]))
                if (nT(r)) {
                    const f = (r.__vccOpts || r)[t];
                    f && i.push(Ot(f, s, a, o, l))
                } else {
                    let c = r();
                    i.push(() => c.then(f => {
                        if (!f) return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${o.path}"`));
                        const d = uZ(f) ? f.default : f;
                        o.components[l] = d;
                        const m = (d.__vccOpts || d)[t];
                        return m && Ot(m, s, a, o, l)()
                    }))
                }
        }
    return i
}

function nT(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function Xi(e) {
    const t = _(Da),
        s = _(Fa),
        a = v(() => t.resolve(A(e.to))),
        i = v(() => {
            const {
                matched: c
            } = a.value, {
                length: f
            } = c, d = c[f - 1], h = s.matched;
            if (!d || !h.length) return -1;
            const m = h.findIndex(w1.bind(null, d));
            if (m > -1) return m;
            const y = en(c[f - 2]);
            return f > 1 && en(d) === y && h[h.length - 1].path !== y ? h.findIndex(w1.bind(null, c[f - 2])) : m
        }),
        o = v(() => i.value > -1 && cT(s.params, a.value.params)),
        l = v(() => i.value > -1 && i.value === s.matched.length - 1 && Oo(s.params, a.value.params));

    function r(c = {}) {
        return rT(c) ? t[A(e.replace) ? "replace" : "push"](A(e.to)).catch(R1) : Promise.resolve()
    }
    return {
        route: a,
        href: v(() => a.value.href),
        isActive: o,
        isExactActive: l,
        navigate: r
    }
}
const oT = H({
        name: "RouterLink",
        compatConfig: {
            MODE: 3
        },
        props: {
            to: {
                type: [String, Object],
                required: !0
            },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: {
                type: String,
                default: "page"
            }
        },
        useLink: Xi,
        setup(e, {
            slots: t
        }) {
            const s = ht(Xi(e)),
                {
                    options: a
                } = _(Da),
                i = v(() => ({
                    [tn(e.activeClass, a.linkActiveClass, "router-link-active")]: s.isActive,
                    [tn(e.exactActiveClass, a.linkExactActiveClass, "router-link-exact-active")]: s.isExactActive
                }));
            return () => {
                const o = t.default && t.default(s);
                return e.custom ? o : De("a", {
                    "aria-current": s.isExactActive ? e.ariaCurrentValue : null,
                    href: s.href,
                    onClick: s.navigate,
                    class: i.value
                }, o)
            }
        }
    }),
    lT = oT;

function rT(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t)) return
        }
        return e.preventDefault && e.preventDefault(), !0
    }
}

function cT(e, t) {
    for (const s in t) {
        const a = t[s],
            i = e[s];
        if (typeof a == "string") {
            if (a !== i) return !1
        } else if (!ft(i) || i.length !== a.length || a.some((o, l) => o !== i[l])) return !1
    }
    return !0
}

function en(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const tn = (e, t, s) => e ? ? t ? ? s,
    dT = H({
        name: "RouterView",
        inheritAttrs: !1,
        props: {
            name: {
                type: String,
                default: "default"
            },
            route: Object
        },
        compatConfig: {
            MODE: 3
        },
        setup(e, {
            attrs: t,
            slots: s
        }) {
            const a = _(ia),
                i = v(() => e.route || a.value),
                o = _(Qi, 0),
                l = v(() => {
                    let f = A(o);
                    const {
                        matched: d
                    } = i.value;
                    let h;
                    for (;
                        (h = d[f]) && !h.components;) f++;
                    return f
                }),
                r = v(() => i.value.matched[l.value]);
            m1(Qi, v(() => l.value + 1)), m1(iT, r), m1(ia, i);
            const c = le();
            return Ct(() => [c.value, r.value, e.name], ([f, d, h], [m, y, b]) => {
                d && (d.instances[h] = f, y && y !== d && f && f === m && (d.leaveGuards.size || (d.leaveGuards = y.leaveGuards), d.updateGuards.size || (d.updateGuards = y.updateGuards))), f && d && (!y || !w1(d, y) || !m) && (d.enterCallbacks[h] || []).forEach(M => M(f))
            }, {
                flush: "post"
            }), () => {
                const f = i.value,
                    d = e.name,
                    h = r.value,
                    m = h && h.components[d];
                if (!m) return sn(s.default, {
                    Component: m,
                    route: f
                });
                const y = h.props[d],
                    b = y ? y === !0 ? f.params : typeof y == "function" ? y(f) : y : null,
                    V = De(m, Ze({}, b, t, {
                        onVnodeUnmounted: S => {
                            S.component.isUnmounted && (h.instances[d] = null)
                        },
                        ref: c
                    }));
                return sn(s.default, {
                    Component: V,
                    route: f
                }) || V
            }
        }
    });

function sn(e, t) {
    if (!e) return null;
    const s = e(t);
    return s.length === 1 ? s[0] : s
}
const uT = dT;

function pT(e) {
    const t = NZ(e.routes, e),
        s = e.parseQuery || sT,
        a = e.stringifyQuery || Ji,
        i = e.history,
        o = B1(),
        l = B1(),
        r = B1(),
        c = lr(Pt);
    let f = Pt;
    d1 && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const d = Zs.bind(null, I => "" + I),
        h = Zs.bind(null, tT),
        m = Zs.bind(null, j0);

    function y(I, ae) {
        let Q, re;
        return zo(I) ? (Q = t.getRecordMatcher(I), re = ae) : re = I, t.addRoute(re, Q)
    }

    function b(I) {
        const ae = t.getRecordMatcher(I);
        ae && t.removeRoute(ae)
    }

    function M() {
        return t.getRoutes().map(I => I.record)
    }

    function V(I) {
        return !!t.getRecordMatcher(I)
    }

    function S(I, ae) {
        if (ae = Ze({}, ae || c.value), typeof I == "string") {
            const w = Ts(s, I, ae.path),
                T = t.resolve({
                    path: w.path
                }, ae),
                N = i.createHref(w.fullPath);
            return Ze(w, T, {
                params: m(T.params),
                hash: j0(w.hash),
                redirectedFrom: void 0,
                href: N
            })
        }
        let Q;
        if ("path" in I) Q = Ze({}, I, {
            path: Ts(s, I.path, ae.path).path
        });
        else {
            const w = Ze({}, I.params);
            for (const T in w) w[T] == null && delete w[T];
            Q = Ze({}, I, {
                params: h(w)
            }), ae.params = h(ae.params)
        }
        const re = t.resolve(Q, ae),
            Ce = I.hash || "";
        re.params = d(m(re.params));
        const Be = hZ(a, Ze({}, I, {
                hash: QZ(Ce),
                path: re.path
            })),
            x = i.createHref(Be);
        return Ze({
            fullPath: Be,
            hash: Ce,
            query: a === Ji ? aT(I.query) : I.query || {}
        }, re, {
            redirectedFrom: void 0,
            href: x
        })
    }

    function Z(I) {
        return typeof I == "string" ? Ts(s, I, c.value.path) : Ze({}, I)
    }

    function C(I, ae) {
        if (f !== I) return $1(8, {
            from: ae,
            to: I
        })
    }

    function E(I) {
        return se(I)
    }

    function z(I) {
        return E(Ze(Z(I), {
            replace: !0
        }))
    }

    function j(I) {
        const ae = I.matched[I.matched.length - 1];
        if (ae && ae.redirect) {
            const {
                redirect: Q
            } = ae;
            let re = typeof Q == "function" ? Q(I) : Q;
            return typeof re == "string" && (re = re.includes("?") || re.includes("#") ? re = Z(re) : {
                path: re
            }, re.params = {}), Ze({
                query: I.query,
                hash: I.hash,
                params: "path" in re ? {} : I.params
            }, re)
        }
    }

    function se(I, ae) {
        const Q = f = S(I),
            re = c.value,
            Ce = I.state,
            Be = I.force,
            x = I.replace === !0,
            w = j(Q);
        if (w) return se(Ze(Z(w), {
            state: typeof w == "object" ? Ze({}, Ce, w.state) : Ce,
            force: Be,
            replace: x
        }), ae || Q);
        const T = Q;
        T.redirectedFrom = ae;
        let N;
        return !Be && mZ(a, re, Q) && (N = $1(16, {
            to: T,
            from: re
        }), Ee(re, re, !0, !1)), (N ? Promise.resolve(N) : B(T, re)).catch(L => $t(L) ? $t(L, 2) ? L : Me(L) : J(L, T, re)).then(L => {
            if (L) {
                if ($t(L, 2)) return se(Ze({
                    replace: x
                }, Z(L.to), {
                    state: typeof L.to == "object" ? Ze({}, Ce, L.to.state) : Ce,
                    force: Be
                }), ae || T)
            } else L = ce(T, re, !0, x, Ce);
            return U(T, re, L), L
        })
    }

    function O(I, ae) {
        const Q = C(I, ae);
        return Q ? Promise.reject(Q) : Promise.resolve()
    }

    function k(I) {
        const ae = wt.values().next().value;
        return ae && typeof ae.runWithContext == "function" ? ae.runWithContext(I) : I()
    }

    function B(I, ae) {
        let Q;
        const [re, Ce, Be] = fT(I, ae);
        Q = Vs(re.reverse(), "beforeRouteLeave", I, ae);
        for (const w of re) w.leaveGuards.forEach(T => {
            Q.push(Ot(T, I, ae))
        });
        const x = O.bind(null, I, ae);
        return Q.push(x), Je(Q).then(() => {
            Q = [];
            for (const w of o.list()) Q.push(Ot(w, I, ae));
            return Q.push(x), Je(Q)
        }).then(() => {
            Q = Vs(Ce, "beforeRouteUpdate", I, ae);
            for (const w of Ce) w.updateGuards.forEach(T => {
                Q.push(Ot(T, I, ae))
            });
            return Q.push(x), Je(Q)
        }).then(() => {
            Q = [];
            for (const w of Be)
                if (w.beforeEnter)
                    if (ft(w.beforeEnter))
                        for (const T of w.beforeEnter) Q.push(Ot(T, I, ae));
                    else Q.push(Ot(w.beforeEnter, I, ae));
            return Q.push(x), Je(Q)
        }).then(() => (I.matched.forEach(w => w.enterCallbacks = {}), Q = Vs(Be, "beforeRouteEnter", I, ae), Q.push(x), Je(Q))).then(() => {
            Q = [];
            for (const w of l.list()) Q.push(Ot(w, I, ae));
            return Q.push(x), Je(Q)
        }).catch(w => $t(w, 8) ? w : Promise.reject(w))
    }

    function U(I, ae, Q) {
        r.list().forEach(re => k(() => re(I, ae, Q)))
    }

    function ce(I, ae, Q, re, Ce) {
        const Be = C(I, ae);
        if (Be) return Be;
        const x = ae === Pt,
            w = d1 ? history.state : {};
        Q && (re || x ? i.replace(I.fullPath, Ze({
            scroll: x && w && w.scroll
        }, Ce)) : i.push(I.fullPath, Ce)), c.value = I, Ee(I, ae, Q, x), Me()
    }
    let Y;

    function de() {
        Y || (Y = i.listen((I, ae, Q) => {
            if (!u0.listening) return;
            const re = S(I),
                Ce = j(re);
            if (Ce) {
                se(Ze(Ce, {
                    replace: !0
                }), re).catch(R1);
                return
            }
            f = re;
            const Be = c.value;
            d1 && $Z(Di(Be.fullPath, Q.delta), cs()), B(re, Be).catch(x => $t(x, 12) ? x : $t(x, 2) ? (se(x.to, re).then(w => {
                $t(w, 20) && !Q.delta && Q.type === J1.pop && i.go(-1, !1)
            }).catch(R1), Promise.reject()) : (Q.delta && i.go(-Q.delta, !1), J(x, re, Be))).then(x => {
                x = x || ce(re, Be, !1), x && (Q.delta && !$t(x, 8) ? i.go(-Q.delta, !1) : Q.type === J1.pop && $t(x, 20) && i.go(-1, !1)), U(re, Be, x)
            }).catch(R1)
        }))
    }
    let be = B1(),
        fe = B1(),
        _e;

    function J(I, ae, Q) {
        Me(I);
        const re = fe.list();
        return re.length ? re.forEach(Ce => Ce(I, ae, Q)) : console.error(I), Promise.reject(I)
    }

    function Le() {
        return _e && c.value !== Pt ? Promise.resolve() : new Promise((I, ae) => {
            be.add([I, ae])
        })
    }

    function Me(I) {
        return _e || (_e = !I, de(), be.list().forEach(([ae, Q]) => I ? Q(I) : ae()), be.reset()), I
    }

    function Ee(I, ae, Q, re) {
        const {
            scrollBehavior: Ce
        } = e;
        if (!d1 || !Ce) return Promise.resolve();
        const Be = !Q && AZ(Di(I.fullPath, 0)) || (re || !Q) && history.state && history.state.scroll || null;
        return H1().then(() => Ce(I, ae, Be)).then(x => x && wZ(x)).catch(x => J(x, I, ae))
    }
    const je = I => i.go(I);
    let Vt;
    const wt = new Set,
        u0 = {
            currentRoute: c,
            listening: !0,
            addRoute: y,
            removeRoute: b,
            hasRoute: V,
            getRoutes: M,
            resolve: S,
            options: e,
            push: E,
            replace: z,
            go: je,
            back: () => je(-1),
            forward: () => je(1),
            beforeEach: o.add,
            beforeResolve: l.add,
            afterEach: r.add,
            onError: fe.add,
            isReady: Le,
            install(I) {
                const ae = this;
                I.component("RouterLink", lT), I.component("RouterView", uT), I.config.globalProperties.$router = ae, Object.defineProperty(I.config.globalProperties, "$route", {
                    enumerable: !0,
                    get: () => A(c)
                }), d1 && !Vt && c.value === Pt && (Vt = !0, E(i.location).catch(Ce => {}));
                const Q = {};
                for (const Ce in Pt) Object.defineProperty(Q, Ce, {
                    get: () => c.value[Ce],
                    enumerable: !0
                });
                I.provide(Da, ae), I.provide(Fa, Rn(Q)), I.provide(ia, c);
                const re = I.unmount;
                wt.add(I), I.unmount = function () {
                    wt.delete(I), wt.size < 1 && (f = Pt, Y && Y(), Y = null, c.value = Pt, Vt = !1, _e = !1), re()
                }
            }
        };

    function Je(I) {
        return I.reduce((ae, Q) => ae.then(() => k(Q)), Promise.resolve())
    }
    return u0
}

function fT(e, t) {
    const s = [],
        a = [],
        i = [],
        o = Math.max(t.matched.length, e.matched.length);
    for (let l = 0; l < o; l++) {
        const r = t.matched[l];
        r && (e.matched.find(f => w1(f, r)) ? a.push(r) : s.push(r));
        const c = e.matched[l];
        c && (t.matched.find(f => w1(f, c)) || i.push(c))
    }
    return [s, a, i]
}

function V1() {
    return _(Fa)
}
const hT = {
        class: "flex justify-between items-center w-full p-4 sm:p-8"
    },
    mT = n("img", {
        src: ls,
        alt: "logo"
    }, null, -1),
    gT = {
        class: "text-lg sm:text-xl flex gap-6 lg:gap-10 items-start flex-col pl-8"
    },
    vT = {
        key: 0,
        class: "flex flex-col justify-start items-start"
    },
    yT = ["onClick"],
    _T = {
        class: "!text-xl pl-1 pt-1 duration-500"
    },
    xT = {
        class: "pl-4 flex justify-start items-start flex-col gap-2 pt-2"
    },
    bT = n("span", null, "-", -1),
    wT = H({
        __name: "Mobilemenu",
        props: {
            showMobileMenu: {
                type: Boolean
            },
            showToggle: {
                type: Function
            }
        },
        setup(e) {
            const t = V1(),
                s = le(null);

            function a(o) {
                s.value === o ? s.value = null : s.value = o
            }
            const i = o => o.isSubmenu && o.submenu ? o.submenu.some(l => t.path === l.link) : t.path === o.link;
            return (o, l) => {
                const r = Ae("router-link");
                return u(), p("nav", null, [n("div", {
                    class: Se(["fixed top-0 left-0 bg-s1/80 h-full w-full lg:hidden duration-700 z-[998]", {
                        "translate-y-0  opacity-30": o.showMobileMenu,
                        "translate-y-[-100%] delay-500 opacity-0": !o.showMobileMenu
                    }])
                }, null, 2), n("div", {
                    class: Se(["flex justify-start flex-col items-start gap-8 pb-10 lg:gap-20 fixed lg:hidden top-0 left-0 w-3/4 min-[500px]:w-1/2 h-full bg-s2 overflow-y-auto duration-700 z-[999]", {
                        "translate-y-0 delay-500 opacity-100  visible": o.showMobileMenu,
                        " translate-y-[100%] opacity-50 invisible": !o.showMobileMenu
                    }])
                }, [n("div", hT, [g(r, {
                    to: "/"
                }, {
                    default: ne(() => [mT]),
                    _: 1
                }), n("span", {
                    class: "!text-5xl !leading-[0] cursor-pointer",
                    onClick: l[0] || (l[0] = (...c) => o.showToggle && o.showToggle(...c))
                }, " × ")]), n("ul", gT, [(u(!0), p(G, null, oe(A(Lo), c => (u(), p("li", {
                    key: c.id
                }, [c.isSubmenu ? (u(), p("div", vT, [n("div", {
                    class: Se(["flex justify-start items-center cursor-pointer", {
                        underline: i(c)
                    }]),
                    onClick: f => a(c.id)
                }, [n("span", null, P(c.name), 1), n("i", _T, [g(A(O0))])], 10, yT), g(A(ja), {
                    duration: 700,
                    height: s.value === c.id ? "auto" : 0
                }, {
                    default: ne(() => [n("ul", xT, [(u(!0), p(G, null, oe(c.submenu, f => (u(), p("li", null, [g(r, {
                        to: f.link,
                        class: Se(["text-base", {
                            underline: A(t).path === f.link
                        }]),
                        onClick: o.showToggle
                    }, {
                        default: ne(() => [bT, ee(" " + P(f.name), 1)]),
                        _: 2
                    }, 1032, ["to", "class", "onClick"])]))), 256))])]),
                    _: 2
                }, 1032, ["height"])])) : D("", !0), c.isSubmenu ? D("", !0) : (u(), ye(r, {
                    key: 1,
                    to: c.link,
                    class: Se(["menu-hover hover:after:border-p1", {
                        underline: A(t).path === c.link
                    }]),
                    onClick: o.showToggle
                }, {
                    default: ne(() => [ee(P(c.name), 1)]),
                    _: 2
                }, 1032, ["to", "class", "onClick"]))]))), 128))])], 2)])
            }
        }
    }),
    $T = {
        class: "flex justify-between items-center container text-s1 py-6"
    },
    AT = {
        class: "pb-1 flex justify-start items-center gap-3"
    },
    ST = n("img", {
        src: ls,
        alt: "accupay logo"
    }, null, -1),
    MT = {
        class: "max-lg:hidden"
    },
    CT = {
        class: "flex justify-center items-center gap-3"
    },
    HT = {
        class: ""
    },
    ZT = {
        key: 0,
        class: "group cursor-pointer relative"
    },
    TT = {
        class: "pt-0.5 group-hover:rotate-180 duration-700"
    },
    VT = {
        class: "absolute top-12 left-0 pointer-events-none group-hover:eventunset flex justify-start items-start flex-col w-[200px] py-6 gap-3 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:z-50 bg-s1 text-white/80 rounded-lg translate-y-8 scale-75 group-hover:translate-y-0 group-hover:scale-100 duration-500"
    },
    kT = {
        class: "flex justify-end items-center gap-2 sm:gap-6 xl:gap-10 font-medium max-sm:hidden"
    },
    PT = {
        class: "flex justify-between items-center gap-1"
    },
    LT = {
        class: "bg-s1 rounded-full text-s2 p-2 md:p-3 text-lg lg:text-2xl"
    },
    ET = n("a", {
        href: "tel:+1234 567 896",
        class: "max-xl:hidden"
    }, " + 1234 567 865 ", -1),
    BT = {
        class: "group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl !leading-[0]"
    },
    IT = H({
        __name: "Header",
        setup(e) {
            const t = le(!1),
                s = le(!1),
                a = V1(),
                i = () => {
                    window.scrollY > 100 ? s.value = !0 : s.value = !1
                };
            Tt(() => {
                window.addEventListener("scroll", i)
            }), Z1(() => {
                window.removeEventListener("scroll", i)
            });
            const o = () => {
                    t.value = !t.value
                },
                l = r => r.isSubmenu && r.submenu ? r.submenu.some(c => a.path === c.link) : a.path === r.link;
            return (r, c) => {
                const f = Ae("router-link");
                return u(), p("header", null, [n("div", {
                    class: Se(["top-0 left-0 right-0 z-50", {
                        "animationOne fixed bg-white shadow-md": s.value,
                        "animationTwo absolute": !s.value
                    }])
                }, [n("div", $T, [n("div", AT, [n("button", {
                    class: "lg:hidden text-3xl",
                    onClick: o
                }, [g(A(z7))]), g(f, {
                    to: "/"
                }, {
                    default: ne(() => [ST]),
                    _: 1
                })]), n("nav", MT, [n("ul", CT, [(u(!0), p(G, null, oe(A(Lo), d => (u(), p("li", HT, [d.isSubmenu ? (u(), p("div", ZT, [n("div", {
                    class: Se(["flex justify-center items-center gap-1 relative px-2 py-3 rounded-lg hover:header_menu_shadow", {
                        header_menu_shadow: l(d)
                    }])
                }, [ee(P(d.name) + " ", 1), n("span", TT, [g(A(K1))])], 2), n("ul", VT, [(u(!0), p(G, null, oe(d.submenu, h => (u(), p("li", {
                    key: h.id
                }, [g(f, {
                    to: h.link,
                    class: Se(["px-6 hover:ml-2 duration-500 hover:text-s2", {
                        "text-s2": A(a).path === h.link
                    }])
                }, {
                    default: ne(() => [ee(P(h.name), 1)]),
                    _: 2
                }, 1032, ["to", "class"])]))), 128))])])) : D("", !0), d.isSubmenu ? D("", !0) : (u(), ye(f, {
                    key: 1,
                    to: d.link,
                    class: Se(["hover:header_menu_shadow duration-700 px-2 py-3 rounded-lg", {
                        header_menu_shadow: A(a).path === d.link
                    }])
                }, {
                    default: ne(() => [ee(P(d.name), 1)]),
                    _: 2
                }, 1032, ["to", "class"]))]))), 256))])]), n("div", kT, [n("div", PT, [n("span", LT, [g(A(rs), {
                    weight: "bold"
                })]), ET]), g(f, {
                    to: "/contact",
                    class: "flex justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border border-mainTextColor text-mainTextColor group font-medium"
                }, {
                    default: ne(() => [ee(" Get Started "), n("span", BT, [g(A(o1))])]),
                    _: 1
                })])])], 2), g(wT, {
                    showToggle: o,
                    showMobileMenu: t.value
                }, null, 8, ["showMobileMenu"])])
            }
        }
    }),
    ds = "/images/sliceIcon.png",
    l0 = {
        TOP_LEFT: "top-left",
        TOP_RIGHT: "top-right",
        TOP_CENTER: "top-center",
        BOTTOM_LEFT: "bottom-left",
        BOTTOM_RIGHT: "bottom-right",
        BOTTOM_CENTER: "bottom-center"
    },
    A1 = {
        LIGHT: "light",
        DARK: "dark",
        COLORED: "colored",
        AUTO: "auto"
    },
    et = {
        INFO: "info",
        SUCCESS: "success",
        WARNING: "warning",
        ERROR: "error",
        DEFAULT: "default"
    },
    OT = {
        BOUNCE: "bounce",
        SLIDE: "slide",
        FLIP: "flip",
        ZOOM: "zoom",
        NONE: "none"
    },
    Uo = {
        dangerouslyHTMLString: !1,
        multiple: !0,
        position: l0.TOP_RIGHT,
        autoClose: 5e3,
        transition: "bounce",
        hideProgressBar: !1,
        pauseOnHover: !0,
        pauseOnFocusLoss: !0,
        closeOnClick: !0,
        className: "",
        bodyClassName: "",
        style: {},
        progressClassName: "",
        progressStyle: {},
        role: "alert",
        theme: "light"
    },
    NT = {
        rtl: !1,
        newestOnTop: !1,
        toastClassName: ""
    },
    Yo = {
        ...Uo,
        ...NT
    };
({
    ...Uo,
    type: et.DEFAULT
});
var He = (e => (e[e.COLLAPSE_DURATION = 300] = "COLLAPSE_DURATION", e[e.DEBOUNCE_DURATION = 50] = "DEBOUNCE_DURATION", e.CSS_NAMESPACE = "Toastify", e))(He || {}),
    na = (e => (e.ENTRANCE_ANIMATION_END = "d", e))(na || {});
const zT = {
        enter: "Toastify--animate Toastify__bounce-enter",
        exit: "Toastify--animate Toastify__bounce-exit",
        appendPosition: !0
    },
    jT = {
        enter: "Toastify--animate Toastify__slide-enter",
        exit: "Toastify--animate Toastify__slide-exit",
        appendPosition: !0
    },
    RT = {
        enter: "Toastify--animate Toastify__zoom-enter",
        exit: "Toastify--animate Toastify__zoom-exit"
    },
    DT = {
        enter: "Toastify--animate Toastify__flip-enter",
        exit: "Toastify--animate Toastify__flip-exit"
    },
    an = "Toastify--animate Toastify__none-enter";

function Ko(e, t = !1) {
    var s;
    let a = zT;
    if (!e || typeof e == "string") switch (e) {
        case "flip":
            a = DT;
            break;
        case "zoom":
            a = RT;
            break;
        case "slide":
            a = jT;
            break
    } else a = e;
    if (t) a.enter = an;
    else if (a.enter === an) {
        const i = (s = a.exit.split("__")[1]) == null ? void 0 : s.split("-")[0];
        a.enter = "Toastify--animate Toastify__".concat(i, "-enter")
    }
    return a
}

function FT(e) {
    return e.containerId || String(e.position)
}
const us = "will-unmount";

function qT(e = l0.TOP_RIGHT) {
    return !!document.querySelector(".".concat(He.CSS_NAMESPACE, "__toast-container--").concat(e))
}

function WT(e = l0.TOP_RIGHT) {
    return "".concat(He.CSS_NAMESPACE, "__toast-container--").concat(e)
}

function GT(e, t, s = !1) {
    const a = ["".concat(He.CSS_NAMESPACE, "__toast-container"), "".concat(He.CSS_NAMESPACE, "__toast-container--").concat(e), s ? "".concat(He.CSS_NAMESPACE, "__toast-container--rtl") : null].filter(Boolean).join(" ");
    return v1(t) ? t({
        position: e,
        rtl: s,
        defaultClassName: a
    }) : "".concat(a, " ").concat(t || "")
}

function UT(e) {
    var t;
    const {
        position: s,
        containerClassName: a,
        rtl: i = !1,
        style: o = {}
    } = e, l = He.CSS_NAMESPACE, r = WT(s), c = document.querySelector(".".concat(l)), f = document.querySelector(".".concat(r)), d = !!f && !((t = f.className) != null && t.includes(us)), h = c || document.createElement("div"), m = document.createElement("div");
    m.className = GT(s, a, i), m.dataset.testid = "".concat(He.CSS_NAMESPACE, "__toast-container--").concat(s), m.id = FT(e);
    for (const y in o)
        if (Object.prototype.hasOwnProperty.call(o, y)) {
            const b = o[y];
            m.style[y] = b
        } return c || (h.className = He.CSS_NAMESPACE, document.body.appendChild(h)), d || h.appendChild(m), m
}

function oa(e) {
    var t, s, a;
    const i = typeof e == "string" ? e : ((t = e.currentTarget) == null ? void 0 : t.id) || ((s = e.target) == null ? void 0 : s.id),
        o = document.getElementById(i);
    o && o.removeEventListener("animationend", oa, !1);
    try {
        Q1[i].unmount(), (a = document.getElementById(i)) == null || a.remove(), delete Q1[i], delete Ue[i]
    } catch {}
}
const Q1 = ht({});

function YT(e, t) {
    const s = document.getElementById(String(t));
    s && (Q1[s.id] = e)
}

function la(e, t = !0) {
    const s = String(e);
    if (!Q1[s]) return;
    const a = document.getElementById(s);
    a && a.classList.add(us), t ? (JT(e), a && a.addEventListener("animationend", oa, !1)) : oa(s), bt.items = bt.items.filter(i => i.containerId !== e)
}

function KT(e) {
    for (const t in Q1) la(t, e);
    bt.items = []
}

function Jo(e, t) {
    const s = document.getElementById(e.toastId);
    if (s) {
        let a = e;
        a = {
            ...a,
            ...Ko(a.transition)
        };
        const i = a.appendPosition ? "".concat(a.exit, "--").concat(a.position) : a.exit;
        s.className += " ".concat(i), t && t(s)
    }
}

function JT(e) {
    for (const t in Ue)
        if (t === e)
            for (const s of Ue[t] || []) Jo(s)
}

function QT(e) {
    const t = S1().find(s => s.toastId === e);
    return t == null ? void 0 : t.containerId
}

function qa(e) {
    return document.getElementById(e)
}

function XT(e) {
    const t = qa(e.containerId);
    return t && t.classList.contains(us)
}

function nn(e) {
    var t;
    const s = x1(e.content) ? ge(e.content.props) : null;
    return s ? ? ge((t = e.data) != null ? t : {})
}

function eV(e) {
    return e ? bt.items.filter(t => t.containerId === e).length > 0 : bt.items.length > 0
}

function tV() {
    if (bt.items.length > 0) {
        const e = bt.items.shift();
        C0(e == null ? void 0 : e.toastContent, e == null ? void 0 : e.toastProps)
    }
}
const Ue = ht({}),
    bt = ht({
        items: []
    });

function S1() {
    const e = ge(Ue);
    return Object.values(e).reduce((t, s) => [...t, ...s], [])
}

function sV(e) {
    return S1().find(t => t.toastId === e)
}

function C0(e, t = {}) {
    if (XT(t)) {
        const s = qa(t.containerId);
        s && s.addEventListener("animationend", ra.bind(null, e, t), !1)
    } else ra(e, t)
}

function ra(e, t = {}) {
    const s = qa(t.containerId);
    s && s.removeEventListener("animationend", ra.bind(null, e, t), !1);
    const a = Ue[t.containerId] || [],
        i = a.length > 0;
    if (!i && !qT(t.position)) {
        const o = UT(t),
            l = bo(bV, t);
        l.mount(o), YT(l, o.id)
    }
    i && !t.updateId && (t.position = a[0].position), H1(() => {
        t.updateId ? ot.update(t) : ot.add(e, t)
    })
}
const ot = {
        add(e, t) {
            const {
                containerId: s = ""
            } = t;
            s && (Ue[s] = Ue[s] || [], Ue[s].find(a => a.toastId === t.toastId) || setTimeout(() => {
                var a, i;
                t.newestOnTop ? (a = Ue[s]) == null || a.unshift(t) : (i = Ue[s]) == null || i.push(t), t.onOpen && t.onOpen(nn(t))
            }, t.delay || 0))
        },
        remove(e) {
            if (e) {
                const t = QT(e);
                if (t) {
                    const s = Ue[t];
                    let a = s.find(i => i.toastId === e);
                    Ue[t] = s.filter(i => i.toastId !== e), !Ue[t].length && !eV(t) && la(t, !1), tV(), H1(() => {
                        a != null && a.onClose && (a.onClose(nn(a)), a = void 0)
                    })
                }
            }
        },
        update(e = {}) {
            const {
                containerId: t = ""
            } = e;
            if (t && e.updateId) {
                Ue[t] = Ue[t] || [];
                const s = Ue[t].find(o => o.toastId === e.toastId),
                    a = (s == null ? void 0 : s.position) !== e.position || (s == null ? void 0 : s.transition) !== e.transition,
                    i = {
                        ...e,
                        disabledEnterTransition: !a,
                        updateId: void 0
                    };
                ot.dismissForce(e == null ? void 0 : e.toastId), setTimeout(() => {
                    ke(i.content, i)
                }, e.delay || 0)
            }
        },
        clear(e, t = !0) {
            e ? la(e, t) : KT(t)
        },
        dismissCallback(e) {
            var t;
            const s = (t = e.currentTarget) == null ? void 0 : t.id,
                a = document.getElementById(s);
            a && (a.removeEventListener("animationend", ot.dismissCallback, !1), setTimeout(() => {
                ot.remove(s)
            }))
        },
        dismiss(e) {
            if (e) {
                const t = S1();
                for (const s of t)
                    if (s.toastId === e) {
                        Jo(s, a => {
                            a.addEventListener("animationend", ot.dismissCallback, !1)
                        });
                        break
                    }
            }
        },
        dismissForce(e) {
            if (e) {
                const t = S1();
                for (const s of t)
                    if (s.toastId === e) {
                        const a = document.getElementById(e);
                        a && (a.remove(), a.removeEventListener("animationend", ot.dismissCallback, !1), ot.remove(e));
                        break
                    }
            }
        }
    },
    Qo = ht({}),
    R0 = ht({});

function Xo() {
    return Math.random().toString(36).substring(2, 9)
}

function aV(e) {
    return typeof e == "number" && !isNaN(e)
}

function ca(e) {
    return typeof e == "string"
}

function v1(e) {
    return typeof e == "function"
}

function ps(...e) {
    return K(...e)
}

function H0(e) {
    return typeof e == "object" && (!!(e != null && e.render) || !!(e != null && e.setup) || typeof (e == null ? void 0 : e.type) == "object")
}

function iV(e = {}) {
    Qo["".concat(He.CSS_NAMESPACE, "-default-options")] = e
}

function nV() {
    return Qo["".concat(He.CSS_NAMESPACE, "-default-options")] || Yo
}

function oV() {
    return document.documentElement.classList.contains("dark") ? "dark" : "light"
}
var Z0 = (e => (e[e.Enter = 0] = "Enter", e[e.Exit = 1] = "Exit", e))(Z0 || {});
const el = {
        containerId: {
            type: [String, Number],
            required: !1,
            default: ""
        },
        clearOnUrlChange: {
            type: Boolean,
            required: !1,
            default: !0
        },
        disabledEnterTransition: {
            type: Boolean,
            required: !1,
            default: !1
        },
        dangerouslyHTMLString: {
            type: Boolean,
            required: !1,
            default: !1
        },
        multiple: {
            type: Boolean,
            required: !1,
            default: !0
        },
        limit: {
            type: Number,
            required: !1,
            default: void 0
        },
        position: {
            type: String,
            required: !1,
            default: l0.TOP_LEFT
        },
        bodyClassName: {
            type: String,
            required: !1,
            default: ""
        },
        autoClose: {
            type: [Number, Boolean],
            required: !1,
            default: !1
        },
        closeButton: {
            type: [Boolean, Function, Object],
            required: !1,
            default: void 0
        },
        transition: {
            type: [String, Object],
            required: !1,
            default: "bounce"
        },
        hideProgressBar: {
            type: Boolean,
            required: !1,
            default: !1
        },
        pauseOnHover: {
            type: Boolean,
            required: !1,
            default: !0
        },
        pauseOnFocusLoss: {
            type: Boolean,
            required: !1,
            default: !0
        },
        closeOnClick: {
            type: Boolean,
            required: !1,
            default: !0
        },
        progress: {
            type: Number,
            required: !1,
            default: void 0
        },
        progressClassName: {
            type: String,
            required: !1,
            default: ""
        },
        toastStyle: {
            type: Object,
            required: !1,
            default () {
                return {}
            }
        },
        progressStyle: {
            type: Object,
            required: !1,
            default () {
                return {}
            }
        },
        role: {
            type: String,
            required: !1,
            default: "alert"
        },
        theme: {
            type: String,
            required: !1,
            default: A1.AUTO
        },
        content: {
            type: [String, Object, Function],
            required: !1,
            default: ""
        },
        toastId: {
            type: [String, Number],
            required: !1,
            default: ""
        },
        data: {
            type: [Object, String],
            required: !1,
            default () {
                return {}
            }
        },
        type: {
            type: String,
            required: !1,
            default: et.DEFAULT
        },
        icon: {
            type: [Boolean, String, Number, Object, Function],
            required: !1,
            default: void 0
        },
        delay: {
            type: Number,
            required: !1,
            default: void 0
        },
        onOpen: {
            type: Function,
            required: !1,
            default: void 0
        },
        onClose: {
            type: Function,
            required: !1,
            default: void 0
        },
        onClick: {
            type: Function,
            required: !1,
            default: void 0
        },
        isLoading: {
            type: Boolean,
            required: !1,
            default: void 0
        },
        rtl: {
            type: Boolean,
            required: !1,
            default: !1
        },
        toastClassName: {
            type: String,
            required: !1,
            default: ""
        },
        updateId: {
            type: [String, Number],
            required: !1,
            default: ""
        }
    },
    lV = {
        autoClose: {
            type: [Number, Boolean],
            required: !0
        },
        isRunning: {
            type: Boolean,
            required: !1,
            default: void 0
        },
        type: {
            type: String,
            required: !1,
            default: et.DEFAULT
        },
        theme: {
            type: String,
            required: !1,
            default: A1.AUTO
        },
        hide: {
            type: Boolean,
            required: !1,
            default: void 0
        },
        className: {
            type: [String, Function],
            required: !1,
            default: ""
        },
        controlledProgress: {
            type: Boolean,
            required: !1,
            default: void 0
        },
        rtl: {
            type: Boolean,
            required: !1,
            default: void 0
        },
        isIn: {
            type: Boolean,
            required: !1,
            default: void 0
        },
        progress: {
            type: Number,
            required: !1,
            default: void 0
        },
        closeToast: {
            type: Function,
            required: !1,
            default: void 0
        }
    },
    rV = H({
        name: "ProgressBar",
        props: lV,
        setup(e, {
            attrs: t
        }) {
            const s = le(),
                a = v(() => e.hide ? "true" : "false"),
                i = v(() => ({
                    ...t.style || {},
                    animationDuration: "".concat(e.autoClose === !0 ? 5e3 : e.autoClose, "ms"),
                    animationPlayState: e.isRunning ? "running" : "paused",
                    opacity: e.hide || e.autoClose === !1 ? 0 : 1,
                    transform: e.controlledProgress ? "scaleX(".concat(e.progress, ")") : "none"
                })),
                o = v(() => ["".concat(He.CSS_NAMESPACE, "__progress-bar"), e.controlledProgress ? "".concat(He.CSS_NAMESPACE, "__progress-bar--controlled") : "".concat(He.CSS_NAMESPACE, "__progress-bar--animated"), "".concat(He.CSS_NAMESPACE, "__progress-bar-theme--").concat(e.theme), "".concat(He.CSS_NAMESPACE, "__progress-bar--").concat(e.type), e.rtl ? "".concat(He.CSS_NAMESPACE, "__progress-bar--rtl") : null].filter(Boolean).join(" ")),
                l = v(() => "".concat(o.value, " ").concat((t == null ? void 0 : t.class) || "")),
                r = () => {
                    s.value && (s.value.onanimationend = null, s.value.ontransitionend = null)
                },
                c = () => {
                    e.isIn && e.closeToast && e.autoClose !== !1 && (e.closeToast(), r())
                },
                f = v(() => e.controlledProgress ? null : c),
                d = v(() => e.controlledProgress ? c : null);
            return A0(() => {
                s.value && (r(), s.value.onanimationend = f.value, s.value.ontransitionend = d.value)
            }), () => g("div", {
                ref: s,
                role: "progressbar",
                "aria-hidden": a.value,
                "aria-label": "notification timer",
                class: l.value,
                style: i.value
            }, null)
        }
    }),
    cV = H({
        name: "CloseButton",
        inheritAttrs: !1,
        props: {
            theme: {
                type: String,
                required: !1,
                default: A1.AUTO
            },
            type: {
                type: String,
                required: !1,
                default: A1.LIGHT
            },
            ariaLabel: {
                type: String,
                required: !1,
                default: "close"
            },
            closeToast: {
                type: Function,
                required: !1,
                default: void 0
            }
        },
        setup(e) {
            return () => g("button", {
                class: "".concat(He.CSS_NAMESPACE, "__close-button ").concat(He.CSS_NAMESPACE, "__close-button--").concat(e.theme),
                type: "button",
                onClick: t => {
                    t.stopPropagation(), e.closeToast && e.closeToast(t)
                },
                "aria-label": e.ariaLabel
            }, [g("svg", {
                "aria-hidden": "true",
                viewBox: "0 0 14 16"
            }, [g("path", {
                "fill-rule": "evenodd",
                d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
            }, null)])])
        }
    }),
    fs = ({
        theme: e,
        type: t,
        path: s,
        ...a
    }) => g("svg", K({
        viewBox: "0 0 24 24",
        width: "100%",
        height: "100%",
        fill: e === "colored" ? "currentColor" : "var(--toastify-icon-color-".concat(t, ")")
    }, a), [g("path", {
        d: s
    }, null)]);

function dV(e) {
    return g(fs, K(e, {
        path: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
    }), null)
}

function uV(e) {
    return g(fs, K(e, {
        path: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
    }), null)
}

function pV(e) {
    return g(fs, K(e, {
        path: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
    }), null)
}

function fV(e) {
    return g(fs, K(e, {
        path: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
    }), null)
}

function hV() {
    return g("div", {
        class: "".concat(He.CSS_NAMESPACE, "__spinner")
    }, null)
}
const da = {
        info: uV,
        warning: dV,
        success: pV,
        error: fV,
        spinner: hV
    },
    mV = e => e in da;

function gV({
    theme: e,
    type: t,
    isLoading: s,
    icon: a
}) {
    let i;
    const o = {
        theme: e,
        type: t
    };
    return s ? i = da.spinner() : a === !1 ? i = void 0 : H0(a) ? i = ge(a) : v1(a) ? i = a(o) : x1(a) ? i = s1(a, o) : ca(a) || aV(a) ? i = a : mV(t) && (i = da[t](o)), i
}
const vV = () => {};

function yV(e, t, s = He.COLLAPSE_DURATION) {
    const {
        scrollHeight: a,
        style: i
    } = e, o = s;
    requestAnimationFrame(() => {
        i.minHeight = "initial", i.height = a + "px", i.transition = "all ".concat(o, "ms"), requestAnimationFrame(() => {
            i.height = "0", i.padding = "0", i.margin = "0", setTimeout(t, o)
        })
    })
}

function _V(e) {
    const t = le(!1),
        s = le(!1),
        a = le(!1),
        i = le(Z0.Enter),
        o = ht({
            ...e,
            appendPosition: e.appendPosition || !1,
            collapse: typeof e.collapse > "u" ? !0 : e.collapse,
            collapseDuration: e.collapseDuration || He.COLLAPSE_DURATION
        }),
        l = o.done || vV,
        r = v(() => o.appendPosition ? "".concat(o.enter, "--").concat(o.position) : o.enter),
        c = v(() => o.appendPosition ? "".concat(o.exit, "--").concat(o.position) : o.exit),
        f = v(() => e.pauseOnHover ? {
            onMouseenter: V,
            onMouseleave: M
        } : {});

    function d() {
        const Z = r.value.split(" ");
        m().addEventListener(na.ENTRANCE_ANIMATION_END, M, {
            once: !0
        });
        const C = z => {
                const j = m();
                z.target === j && (j.dispatchEvent(new Event(na.ENTRANCE_ANIMATION_END)), j.removeEventListener("animationend", C), j.removeEventListener("animationcancel", C), i.value === Z0.Enter && z.type !== "animationcancel" && j.classList.remove(...Z))
            },
            E = () => {
                const z = m();
                z.classList.add(...Z), z.addEventListener("animationend", C), z.addEventListener("animationcancel", C)
            };
        e.pauseOnFocusLoss && y(), E()
    }

    function h() {
        if (!m()) return;
        const Z = () => {
                const E = m();
                E.removeEventListener("animationend", Z), o.collapse ? yV(E, l, o.collapseDuration) : l()
            },
            C = () => {
                const E = m();
                i.value = Z0.Exit, E && (E.className += " ".concat(c.value), E.addEventListener("animationend", Z))
            };
        s.value || (a.value ? Z() : setTimeout(C))
    }

    function m() {
        return e.toastRef.value
    }

    function y() {
        document.hasFocus() || V(), window.addEventListener("focus", M), window.addEventListener("blur", V)
    }

    function b() {
        window.removeEventListener("focus", M), window.removeEventListener("blur", V)
    }

    function M() {
        (!e.loading.value || e.isLoading === void 0) && (t.value = !0)
    }

    function V() {
        t.value = !1
    }

    function S(Z) {
        Z && (Z.stopPropagation(), Z.preventDefault()), s.value = !1
    }
    return A0(h), A0(() => {
        const Z = S1();
        s.value = Z.findIndex(C => C.toastId === o.toastId) > -1
    }), A0(() => {
        e.isLoading !== void 0 && (e.loading.value ? V() : M())
    }), Tt(d), Z1(() => {
        e.pauseOnFocusLoss && b()
    }), {
        isIn: s,
        isRunning: t,
        hideToast: S,
        eventHandlers: f
    }
}
const xV = H({
    name: "ToastItem",
    inheritAttrs: !1,
    props: el,
    setup(e) {
        const t = le(),
            s = v(() => !!e.isLoading),
            a = v(() => e.progress !== void 0 && e.progress !== null),
            i = v(() => gV(e)),
            o = v(() => ["".concat(He.CSS_NAMESPACE, "__toast"), "".concat(He.CSS_NAMESPACE, "__toast-theme--").concat(e.theme), "".concat(He.CSS_NAMESPACE, "__toast--").concat(e.type), e.rtl ? "".concat(He.CSS_NAMESPACE, "__toast--rtl") : void 0, e.toastClassName || ""].filter(Boolean).join(" ")),
            {
                isRunning: l,
                isIn: r,
                hideToast: c,
                eventHandlers: f
            } = _V({
                toastRef: t,
                loading: s,
                done: () => {
                    ot.remove(e.toastId)
                },
                ...Ko(e.transition, e.disabledEnterTransition),
                ...e
            });
        return () => g("div", K({
            id: e.toastId,
            class: o.value,
            style: e.toastStyle || {},
            ref: t,
            "data-testid": "toast-item-".concat(e.toastId),
            onClick: d => {
                e.closeOnClick && c(), e.onClick && e.onClick(d)
            }
        }, f.value), [g("div", {
            role: e.role,
            "data-testid": "toast-body",
            class: "".concat(He.CSS_NAMESPACE, "__toast-body ").concat(e.bodyClassName || "")
        }, [i.value != null && g("div", {
            "data-testid": "toast-icon-".concat(e.type),
            class: ["".concat(He.CSS_NAMESPACE, "__toast-icon"), e.isLoading ? "" : "".concat(He.CSS_NAMESPACE, "--animate-icon ").concat(He.CSS_NAMESPACE, "__zoom-enter")].join(" ")
        }, [H0(i.value) ? De(ge(i.value), {
            theme: e.theme,
            type: e.type
        }) : v1(i.value) ? i.value({
            theme: e.theme,
            type: e.type
        }) : i.value]), g("div", {
            "data-testid": "toast-content"
        }, [H0(e.content) ? De(ge(e.content), {
            toastProps: ge(e),
            closeToast: c,
            data: e.data
        }) : v1(e.content) ? e.content({
            toastProps: ge(e),
            closeToast: c,
            data: e.data
        }) : e.dangerouslyHTMLString ? De("div", {
            innerHTML: e.content
        }) : e.content])]), (e.closeButton === void 0 || e.closeButton === !0) && g(cV, {
            theme: e.theme,
            closeToast: d => {
                d.stopPropagation(), d.preventDefault(), c()
            }
        }, null), H0(e.closeButton) ? De(ge(e.closeButton), {
            closeToast: c,
            type: e.type,
            theme: e.theme
        }) : v1(e.closeButton) ? e.closeButton({
            closeToast: c,
            type: e.type,
            theme: e.theme
        }) : null, g(rV, {
            className: e.progressClassName,
            style: e.progressStyle,
            rtl: e.rtl,
            theme: e.theme,
            isIn: r.value,
            type: e.type,
            hide: e.hideProgressBar,
            isRunning: l.value,
            autoClose: e.autoClose,
            controlledProgress: a.value,
            progress: e.progress,
            closeToast: e.isLoading ? void 0 : c
        }, null)])
    }
});
let F1 = 0;

function tl() {
    typeof window > "u" || (F1 && window.cancelAnimationFrame(F1), F1 = window.requestAnimationFrame(tl), R0.lastUrl !== window.location.href && (R0.lastUrl = window.location.href, ot.clear()))
}
const bV = H({
    name: "ToastifyContainer",
    inheritAttrs: !1,
    props: el,
    setup(e) {
        const t = v(() => e.containerId),
            s = v(() => Ue[t.value] || []),
            a = v(() => s.value.filter(i => i.position === e.position));
        return Tt(() => {
            typeof window < "u" && e.clearOnUrlChange && window.requestAnimationFrame(tl)
        }), Z1(() => {
            typeof window < "u" && F1 && (window.cancelAnimationFrame(F1), R0.lastUrl = "")
        }), () => g(G, null, [a.value.map(i => {
            const {
                toastId: o = ""
            } = i;
            return g(xV, K({
                key: o
            }, i), null)
        })])
    }
});
let ks = !1;

function sl() {
    const e = [];
    return S1().forEach(t => {
        const s = document.getElementById(t.containerId);
        s && !s.classList.contains(us) && e.push(t)
    }), e
}

function wV(e) {
    const t = sl().length,
        s = e ? ? 0;
    return s > 0 && t + bt.items.length >= s
}

function $V(e) {
    wV(e.limit) && !e.updateId && bt.items.push({
        toastId: e.toastId,
        containerId: e.containerId,
        toastContent: e.content,
        toastProps: e
    })
}

function Gt(e, t, s = {}) {
    if (ks) return;
    s = ps(nV(), {
        type: t
    }, ge(s)), (!s.toastId || typeof s.toastId != "string" && typeof s.toastId != "number") && (s.toastId = Xo()), s = {
        ...s,
        content: e,
        containerId: s.containerId || String(s.position)
    };
    const a = Number(s == null ? void 0 : s.progress);
    return a < 0 && (s.progress = 0), a > 1 && (s.progress = 1), s.theme === "auto" && (s.theme = oV()), $V(s), R0.lastUrl = window.location.href, s.multiple ? bt.items.length ? s.updateId && C0(e, s) : C0(e, s) : (ks = !0, ke.clearAll(void 0, !1), setTimeout(() => {
        C0(e, s)
    }, 0), setTimeout(() => {
        ks = !1
    }, 390)), s.toastId
}
const ke = (e, t) => Gt(e, et.DEFAULT, t);
ke.info = (e, t) => Gt(e, et.DEFAULT, {
    ...t,
    type: et.INFO
});
ke.error = (e, t) => Gt(e, et.DEFAULT, {
    ...t,
    type: et.ERROR
});
ke.warning = (e, t) => Gt(e, et.DEFAULT, {
    ...t,
    type: et.WARNING
});
ke.warn = ke.warning;
ke.success = (e, t) => Gt(e, et.DEFAULT, {
    ...t,
    type: et.SUCCESS
});
ke.loading = (e, t) => Gt(e, et.DEFAULT, ps(t, {
    isLoading: !0,
    autoClose: !1,
    closeOnClick: !1,
    closeButton: !1,
    draggable: !1
}));
ke.dark = (e, t) => Gt(e, et.DEFAULT, ps(t, {
    theme: A1.DARK
}));
ke.remove = e => {
    e ? ot.dismiss(e) : ot.clear()
};
ke.clearAll = (e, t) => {
    ot.clear(e, t)
};
ke.isActive = e => {
    let t = !1;
    return t = sl().findIndex(s => s.toastId === e) > -1, t
};
ke.update = (e, t = {}) => {
    setTimeout(() => {
        const s = sV(e);
        if (s) {
            const a = ge(s),
                {
                    content: i
                } = a,
                o = {
                    ...a,
                    ...t,
                    toastId: t.toastId || e,
                    updateId: Xo()
                },
                l = o.render || i;
            delete o.render, Gt(l, o.type, o)
        }
    }, 0)
};
ke.done = e => {
    ke.update(e, {
        isLoading: !1,
        progress: 1
    })
};
ke.promise = AV;

function AV(e, {
    pending: t,
    error: s,
    success: a
}, i) {
    var o, l, r;
    let c;
    const f = {
        ...i || {},
        autoClose: !1
    };
    t && (c = ca(t) ? ke.loading(t, f) : ke.loading(t.render, {
        ...f,
        ...t
    }));
    const d = {
            autoClose: (o = i == null ? void 0 : i.autoClose) != null ? o : !0,
            closeOnClick: (l = i == null ? void 0 : i.closeOnClick) != null ? l : !0,
            closeButton: (r = i == null ? void 0 : i.autoClose) != null ? r : null,
            isLoading: void 0,
            draggable: null,
            delay: 100
        },
        h = (y, b, M) => {
            if (b == null) {
                ke.remove(c);
                return
            }
            const V = {
                    type: y,
                    ...d,
                    ...i,
                    data: M
                },
                S = ca(b) ? {
                    render: b
                } : b;
            return c ? ke.update(c, {
                ...V,
                ...S,
                isLoading: !1
            }) : ke(S.render, {
                ...V,
                ...S,
                isLoading: !1
            }), M
        },
        m = v1(e) ? e() : e;
    return m.then(y => {
        h("success", a, y)
    }).catch(y => {
        h("error", s, y)
    }), m
}
ke.POSITION = l0;
ke.THEME = A1;
ke.TYPE = et;
ke.TRANSITIONS = OT;
const SV = {
    install(e, t = {}) {
        MV(t)
    }
};
typeof window < "u" && (window.Vue3Toastify = SV);

function MV(e = {}) {
    const t = ps(Yo, e);
    iV(t)
}
const CV = {
        class: "relative after:absolute after:bg-mainTextColor after:bottom-0 after:right-0 after:left-0 after:h-1/2"
    },
    HV = {
        class: "container bg-p1 py-12 sm:py-20 px-4 sm:px-10 md:px-20 lg:px-40 relative z-10"
    },
    ZV = n("img", {
        src: ds,
        alt: "",
        class: "absolute -top-4 sm:-top-6 lg:top-0 right-0 h-[60px] sm:h-[80px] lg:h-[120px] -rotate-90"
    }, null, -1),
    TV = n("p", {
        class: "display-3 text-center text-white !leading-[130%]"
    }, " Make Accupay Part Of Your Work And Get Daily Update ", -1),
    VV = {
        class: "flex justify-center items-center gap-3 max-[500px]:flex-col"
    },
    kV = n("button", {
        class: "border border-mainTextColor bg-s2 py-3 sm:py-4 px-4 md:px-8 font-medium"
    }, " Subscribe Now ", -1),
    PV = H({
        __name: "CTASection",
        setup(e) {
            const t = le(""),
                s = le(!1),
                a = () => {
                    ke("Thanks for subscribing!", {
                        autoClose: 1e3
                    })
                };

            function i() {
                t.value.length > 0 ? (t.value = "", s.value = !1, a()) : s.value = !0
            }

            function o(l) {
                const r = l.target.value;
                t.value = r
            }
            return (l, r) => (u(), p("section", CV, [n("div", HV, [ZV, TV, n("form", {
                class: "pt-6 sm:pt-10 relative",
                onSubmit: O2(i, ["prevent"])
            }, [n("div", VV, [Hr(n("input", {
                type: "text",
                placeholder: "Enter Your Email",
                "onUpdate:modelValue": r[0] || (r[0] = c => t.value = c),
                class: "border border-mainTextColor outline-none bg-white py-3 sm:py-4 px-4 md:px-8 max-[500px]:w-full lg:w-2/4",
                onChange: o
            }, null, 544), [
                [E2, t.value]
            ]), kV]), n("p", {
                class: Se(["text-s3 text-center pt-2", {
                    "visible opacity-100 z-0": s.value,
                    "invisible opacity-0": !s.value
                }])
            }, " Please enter your email ", 2)], 32)])]))
        }
    }),
    LV = "/images/logo_white.png",
    EV = {
        class: "bg-mainTextColor text-white/60"
    },
    BV = {
        class: "container grid grid-cols-12 stp-30 sbp-30 gap-6 max-xxl:pr-4"
    },
    IV = {
        class: "col-span-12 min-[450px]:col-span-6 lg:col-span-3 flex flex-col gap-6 lg:gap-8"
    },
    OV = n("div", {
        class: ""
    }, [n("img", {
        src: LV,
        alt: ""
    })], -1),
    NV = n("p", {
        class: ""
    }, " Your trusted partner in accounting and payroll solutions. We deliver precision, efficiency, and tailored services ", -1),
    zV = {
        class: "flex justify-start items-center gap-2"
    },
    jV = {
        class: "heading-4 mb-6 pb-2 relative text-white after:absolute after:w-[20%] after:h-[2px] after:bottom-0 after:left-0 after:bg-p1 hover:after:w-[40%] after:duration-500"
    },
    RV = {
        class: "flex flex-col gap-4 md:gap-5"
    },
    DV = {
        class: "heading-4 mb-4 md:mb-6 pb-2 relative after:absolute after:w-[20%] after:h-[2px] after:bottom-0 after:left-0 after:bg-p1 hover:after:w-[40%] after:duration-500 text-white"
    },
    FV = {
        class: "flex flex-col gap-4 md:gap-3"
    },
    qV = ["href"],
    WV = {
        class: "text-2xl pt-2"
    },
    GV = {
        key: 1,
        class: "flex justify-start items-center gap-2 hover:text-white hover:translate-x-2 duration-500"
    },
    UV = {
        class: "text-2xl pt-2"
    },
    YV = {
        class: "border-t border-white/10"
    },
    KV = {
        class: "container py-6 flex justify-between items-center max-md:flex-col gap-6"
    },
    JV = {
        class: "max-sm:text-center"
    },
    QV = {
        class: "flex justify-end items-center"
    },
    XV = H({
        __name: "Footer",
        setup(e) {
            return (t, s) => {
                const a = Ae("router-link");
                return u(), p("footer", EV, [n("div", BV, [n("div", IV, [OV, NV, n("ul", zV, [(u(!0), p(G, null, oe(A(o0), ({
                    id: i,
                    icon: o
                }) => (u(), p("li", {
                    class: "",
                    key: i
                }, [g(a, {
                    class: "bg-s1/50 p-3 rounded-full hover:bg-s1 duration-500 hover:-translate-y-1 block text-white",
                    to: "#"
                }, {
                    default: ne(() => [(u(), ye(Ve(o)))]),
                    _: 2
                }, 1024)]))), 128))])]), (u(!0), p(G, null, oe(A(TH), ({
                    id: i,
                    name: o,
                    links: l
                }) => (u(), p("div", {
                    class: "xl:pl-30 col-span-12 min-[400px]:col-span-6 lg:col-span-3",
                    key: i
                }, [n("h4", jV, P(o), 1), n("ul", RV, [(u(!0), p(G, null, oe(l, (r, c) => (u(), p("li", {
                    key: c
                }, [g(a, {
                    to: r.link,
                    class: "flex justify-start items-center gap-2 hover:text-white hover:translate-x-2 duration-500"
                }, {
                    default: ne(() => [ee(P(r.name), 1)]),
                    _: 2
                }, 1032, ["to"])]))), 128))])]))), 128)), (u(!0), p(G, null, oe(A(VH), ({
                    id: i,
                    name: o,
                    links: l
                }) => (u(), p("div", {
                    class: "col-span-12 min-[450px]:col-span-6 lg:col-span-3 xl:pl-30",
                    key: i
                }, [n("h4", DV, P(o), 1), n("ul", FV, [(u(!0), p(G, null, oe(l, (r, c) => (u(), p("li", {
                    key: c
                }, [r.isLink ? (u(), p("a", {
                    key: 0,
                    href: r.link,
                    class: "flex justify-start items-center gap-2 hover:text-white hover:translate-x-2 duration-500"
                }, [n("span", WV, [(u(), ye(Ve(r.icon)))]), ee(" " + P(r.name), 1)], 8, qV)) : D("", !0), r.isLink ? D("", !0) : (u(), p("p", GV, [n("span", UV, [(u(), ye(Ve(r.icon)))]), ee(" " + P(r.name), 1)]))]))), 128))])]))), 128))]), n("div", YV, [n("div", KV, [n("p", JV, " Accupay © Copyright " + P(new Date().getFullYear()) + ". All Rights Reserved. ", 1), n("div", QV, [g(a, {
                    to: "/privacy-policy",
                    class: "border-r-2 border-white/60 pr-3 hover:text-white duration-500 leading-none"
                }, {
                    default: ne(() => [ee(" Privacy Policy ")]),
                    _: 1
                }), g(a, {
                    to: "/terms-conditions",
                    class: "pl-3 hover:text-white duration-500 leading-none"
                }, {
                    default: ne(() => [ee(" Terms & Conditions ")]),
                    _: 1
                })])])])])
            }
        }
    }),
    ek = {
        class: "block"
    },
    tk = H({
        __name: "ScrollToTop",
        setup(e) {
            const t = le(!1),
                s = () => {
                    window.scrollY > 200 ? t.value = !0 : t.value = !1
                },
                a = () => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })
                };
            return Tt(() => {
                document.addEventListener("scroll", s)
            }), (i, o) => (u(), p("button", {
                class: Se({
                    fixed: !0,
                    "bottom-12 sm:bottom-16": t.value,
                    "-bottom-40": !t.value,
                    "text-white text-xl sm:text-2xl rounded-full bg-p1 hover:bg-s2 border border-p1 hover:border-white right-6 md:right-10 p-2 sm:p-3 z-40 jumping1 duration-700": !0
                }),
                onClick: a,
                "aria-label": "bottom to top button"
            }, [n("span", ek, [g(A(xd))])], 2))
        }
    }),
    r0 = (e, t) => {
        const s = e.__vccOpts || e;
        for (const [a, i] of t) s[a] = i;
        return s
    },
    sk = r0(tk, [
        ["__scopeId", "data-v-02549250"]
    ]),
    ak = H({
        __name: "DefaultLayout",
        setup(e) {
            return (t, s) => {
                const a = Ae("router-view");
                return u(), p(G, null, [g(IT), g(a), g(PV), g(sk), g(XV)], 64)
            }
        }
    }),
    ik = H({
        __name: "App",
        setup(e) {
            return (t, s) => {
                const a = Ae("RouterView");
                return u(), ye(Ve(t.$route.meta.layout || ak), null, {
                    default: ne(() => [g(a)]),
                    _: 1
                })
            }
        }
    });
var nk = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let al;
const hs = e => al = e,
    il = Symbol();

function ua(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var q1;
(function (e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function"
})(q1 || (q1 = {}));

function ok() {
    const e = Zn(!0),
        t = e.run(() => le({}));
    let s = [],
        a = [];
    const i = J0({
        install(o) {
            hs(i), i._a = o, o.provide(il, i), o.config.globalProperties.$pinia = i, a.forEach(l => s.push(l)), a = []
        },
        use(o) {
            return !this._a && !nk ? a.push(o) : s.push(o), this
        },
        _p: s,
        _a: null,
        _e: e,
        _s: new Map,
        state: t
    });
    return i
}
const nl = () => {};

function on(e, t, s, a = nl) {
    e.push(t);
    const i = () => {
        const o = e.indexOf(t);
        o > -1 && (e.splice(o, 1), a())
    };
    return !s && Tn() && Nl(i), i
}

function r1(e, ...t) {
    e.slice().forEach(s => {
        s(...t)
    })
}
const lk = e => e();

function pa(e, t) {
    e instanceof Map && t instanceof Map && t.forEach((s, a) => e.set(a, s)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const s in t) {
        if (!t.hasOwnProperty(s)) continue;
        const a = t[s],
            i = e[s];
        ua(i) && ua(a) && e.hasOwnProperty(s) && !qe(a) && !jt(a) ? e[s] = pa(i, a) : e[s] = a
    }
    return e
}
const rk = Symbol();

function ck(e) {
    return !ua(e) || !e.hasOwnProperty(rk)
}
const {
    assign: Lt
} = Object;

function dk(e) {
    return !!(qe(e) && e.effect)
}

function uk(e, t, s, a) {
    const {
        state: i,
        actions: o,
        getters: l
    } = t, r = s.state.value[e];
    let c;

    function f() {
        r || (s.state.value[e] = i ? i() : {});
        const d = dr(s.state.value[e]);
        return Lt(d, o, Object.keys(l || {}).reduce((h, m) => (h[m] = J0(v(() => {
            hs(s);
            const y = s._s.get(e);
            return l[m].call(y, y)
        })), h), {}))
    }
    return c = ol(e, f, t, s, a, !0), c
}

function ol(e, t, s = {}, a, i, o) {
    let l;
    const r = Lt({
            actions: {}
        }, s),
        c = {
            deep: !0
        };
    let f, d, h = [],
        m = [],
        y;
    const b = a.state.value[e];
    !o && !b && (a.state.value[e] = {}), le({});
    let M;

    function V(O) {
        let k;
        f = d = !1, typeof O == "function" ? (O(a.state.value[e]), k = {
            type: q1.patchFunction,
            storeId: e,
            events: y
        }) : (pa(a.state.value[e], O), k = {
            type: q1.patchObject,
            payload: O,
            storeId: e,
            events: y
        });
        const B = M = Symbol();
        H1().then(() => {
            M === B && (f = !0)
        }), d = !0, r1(h, k, a.state.value[e])
    }
    const S = o ? function () {
        const {
            state: k
        } = s, B = k ? k() : {};
        this.$patch(U => {
            Lt(U, B)
        })
    } : nl;

    function Z() {
        l.stop(), h = [], m = [], a._s.delete(e)
    }

    function C(O, k) {
        return function () {
            hs(a);
            const B = Array.from(arguments),
                U = [],
                ce = [];

            function Y(fe) {
                U.push(fe)
            }

            function de(fe) {
                ce.push(fe)
            }
            r1(m, {
                args: B,
                name: O,
                store: z,
                after: Y,
                onError: de
            });
            let be;
            try {
                be = k.apply(this && this.$id === e ? this : z, B)
            } catch (fe) {
                throw r1(ce, fe), fe
            }
            return be instanceof Promise ? be.then(fe => (r1(U, fe), fe)).catch(fe => (r1(ce, fe), Promise.reject(fe))) : (r1(U, be), be)
        }
    }
    const E = {
            _p: a,
            $id: e,
            $onAction: on.bind(null, m),
            $patch: V,
            $reset: S,
            $subscribe(O, k = {}) {
                const B = on(h, O, k.detached, () => U()),
                    U = l.run(() => Ct(() => a.state.value[e], ce => {
                        (k.flush === "sync" ? d : f) && O({
                            storeId: e,
                            type: q1.direct,
                            events: y
                        }, ce)
                    }, Lt({}, c, k)));
                return B
            },
            $dispose: Z
        },
        z = ht(E);
    a._s.set(e, z);
    const se = (a._a && a._a.runWithContext || lk)(() => a._e.run(() => (l = Zn()).run(t)));
    for (const O in se) {
        const k = se[O];
        if (qe(k) && !dk(k) || jt(k)) o || (b && ck(k) && (qe(k) ? k.value = b[O] : pa(k, b[O])), a.state.value[e][O] = k);
        else if (typeof k == "function") {
            const B = C(O, k);
            se[O] = B, r.actions[O] = k
        }
    }
    return Lt(z, se), Lt(ge(z), se), Object.defineProperty(z, "$state", {
        get: () => a.state.value[e],
        set: O => {
            V(k => {
                Lt(k, O)
            })
        }
    }), a._p.forEach(O => {
        Lt(z, l.run(() => O({
            store: z,
            app: a._a,
            pinia: a,
            options: r
        })))
    }), b && o && s.hydrate && s.hydrate(z.$state, b), f = !0, d = !0, z
}

function pk(e, t, s) {
    let a, i;
    const o = typeof t == "function";
    typeof e == "string" ? (a = e, i = o ? s : t) : (i = e, a = e.id);

    function l(r, c) {
        const f = Fr();
        return r = r || (f ? _(il, null) : null), r && hs(r), r = al, r._s.has(a) || (o ? ol(a, t, i, r) : uk(a, i, r)), r._s.get(a)
    }
    return l.$id = a, l
}
const fk = {
        class: "group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl"
    },
    c0 = H({
        __name: "LinkButton",
        props: {
            link: {},
            text: {}
        },
        setup(e) {
            const t = e,
                {
                    link: s,
                    text: a
                } = t;
            return (i, o) => {
                const l = Ae("router-link");
                return u(), ye(l, {
                    to: A(s),
                    class: "flex justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border border-mainTextColor text-mainTextColor group font-medium"
                }, {
                    default: ne(() => [ee(P(A(a)) + " ", 1), n("span", fk, [g(A(o1), {
                        weight: "bold"
                    })])]),
                    _: 1
                }, 8, ["to"])
            }
        }
    }),
    hk = {
        class: "stp-30 sbp-30"
    },
    mk = {
        class: "container"
    },
    gk = {
        class: "flex justify-between items-end"
    },
    vk = n("div", {
        class: "max-w-[600px] flex justify-end items-start flex-col"
    }, [n("p", {
        class: "bg-p1 py-3 px-5 rounded-full text-white"
    }, "News & Blog"), n("h1", {
        class: "display-4 pt-4 pb-6"
    }, "Stay updates with Accupay News"), n("p", {
        class: "text-"
    }, " Stay informed and empowered with our latest articles on accounting, payroll processing, and financial management. ")], -1),
    yk = {
        class: "max-lg:hidden"
    },
    _k = {
        class: "grid grid-cols-12 gap-6 stp-15"
    },
    xk = {
        class: "flex flex-col justify-start items-start"
    },
    bk = {
        class: "flex justify-between items-center w-full pb-5"
    },
    wk = {
        class: "border border-strokeColor rounded-full group-hover:bg-s2 group-hover:border-mainTextColor group-hover:text-mainTextColor duration-500 py-1 lg:py-3 px-3 lg:px-5"
    },
    $k = {
        class: "flex justify-center items-center w-full overflow-hidden"
    },
    Ak = ["src"],
    Sk = {
        class: "heading-4 text-mainTextColor pb-4 pt-6"
    },
    Mk = {
        class: "pb-6"
    },
    Ck = {
        class: "lg:hidden flex justify-center items-center stp-15"
    },
    Hk = {
        class: "group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl"
    },
    Zk = H({
        __name: "BlogSection",
        setup(e) {
            return (t, s) => {
                const a = Ae("router-link");
                return u(), p("section", hk, [n("div", mk, [n("div", gk, [vk, n("div", yk, [g(c0, {
                    link: "/blog",
                    text: "See All Blog"
                })])]), n("div", _k, [(u(!0), p(G, null, oe(A(NH), ({
                    id: i,
                    date: o,
                    title: l,
                    img: r,
                    desc: c,
                    category: f
                }) => (u(), p("div", {
                    key: i,
                    class: "col-span-12 sm:col-span-6 md:col-span-4 text-bodyText group"
                }, [n("div", xk, [n("div", bk, [n("p", null, P(o) + ", " + P(new Date().getFullYear()), 1), n("p", wk, P(f), 1)]), n("div", $k, [n("img", {
                    src: r,
                    alt: "",
                    class: "object-cover hover:scale-110 duration-500"
                }, null, 8, Ak)]), n("h4", Sk, P(l), 1), n("p", Mk, P(c), 1), g(a, {
                    to: "/blog/" + l.toLowerCase().replaceAll(" ", "-"),
                    class: "text-mainTextColor flex justify-start items-center gap-3 border-b border-mainTextColor hover:border-s2 duration-500"
                }, {
                    default: ne(() => [ee(" Read more "), g(A(qt))]),
                    _: 2
                }, 1032, ["to"])])]))), 128))]), n("div", Ck, [g(a, {
                    to: "/blog-details",
                    class: "flex justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border border-mainTextColor text-mainTextColor group font-medium"
                }, {
                    default: ne(() => [ee(" See All Blog "), n("span", Hk, [g(A(qt))])]),
                    _: 1
                })])])])
            }
        }
    });

function ln(e) {
    return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object
}

function Wa(e, t) {
    e === void 0 && (e = {}), t === void 0 && (t = {}), Object.keys(t).forEach(s => {
        typeof e[s] > "u" ? e[s] = t[s] : ln(t[s]) && ln(e[s]) && Object.keys(t[s]).length > 0 && Wa(e[s], t[s])
    })
}
const ll = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};

function Ht() {
    const e = typeof document < "u" ? document : {};
    return Wa(e, ll), e
}
const Tk = {
    document: ll,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function () {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(e) {
        return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0)
    },
    cancelAnimationFrame(e) {
        typeof setTimeout > "u" || clearTimeout(e)
    }
};

function lt() {
    const e = typeof window < "u" ? window : {};
    return Wa(e, Tk), e
}

function Vk(e) {
    return e === void 0 && (e = ""), e.trim().split(" ").filter(t => !!t.trim())
}

function kk(e) {
    const t = e;
    Object.keys(t).forEach(s => {
        try {
            t[s] = null
        } catch {}
        try {
            delete t[s]
        } catch {}
    })
}

function fa(e, t) {
    return t === void 0 && (t = 0), setTimeout(e, t)
}

function t1() {
    return Date.now()
}

function Pk(e) {
    const t = lt();
    let s;
    return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
}

function Lk(e, t) {
    t === void 0 && (t = "x");
    const s = lt();
    let a, i, o;
    const l = Pk(e);
    return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(r => r.replace(",", ".")).join(", ")), o = new s.WebKitCSSMatrix(i === "none" ? "" : i)) : (o = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = o.toString().split(",")), t === "x" && (s.WebKitCSSMatrix ? i = o.m41 : a.length === 16 ? i = parseFloat(a[12]) : i = parseFloat(a[4])), t === "y" && (s.WebKitCSSMatrix ? i = o.m42 : a.length === 16 ? i = parseFloat(a[13]) : i = parseFloat(a[5])), i || 0
}

function _0(e) {
    return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object"
}

function Ek(e) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11)
}

function nt() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
    for (let s = 1; s < arguments.length; s += 1) {
        const a = s < 0 || arguments.length <= s ? void 0 : arguments[s];
        if (a != null && !Ek(a)) {
            const i = Object.keys(Object(a)).filter(o => t.indexOf(o) < 0);
            for (let o = 0, l = i.length; o < l; o += 1) {
                const r = i[o],
                    c = Object.getOwnPropertyDescriptor(a, r);
                c !== void 0 && c.enumerable && (_0(e[r]) && _0(a[r]) ? a[r].__swiper__ ? e[r] = a[r] : nt(e[r], a[r]) : !_0(e[r]) && _0(a[r]) ? (e[r] = {}, a[r].__swiper__ ? e[r] = a[r] : nt(e[r], a[r])) : e[r] = a[r])
            }
        }
    }
    return e
}

function x0(e, t, s) {
    e.style.setProperty(t, s)
}

function rl(e) {
    let {
        swiper: t,
        targetPosition: s,
        side: a
    } = e;
    const i = lt(),
        o = -t.translate;
    let l = null,
        r;
    const c = t.params.speed;
    t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
    const f = s > o ? "next" : "prev",
        d = (m, y) => f === "next" && m >= y || f === "prev" && m <= y,
        h = () => {
            r = new Date().getTime(), l === null && (l = r);
            const m = Math.max(Math.min((r - l) / c, 1), 0),
                y = .5 - Math.cos(m * Math.PI) / 2;
            let b = o + y * (s - o);
            if (d(b, s) && (b = s), t.wrapperEl.scrollTo({
                    [a]: b
                }), d(b, s)) {
                t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                    t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                        [a]: b
                    })
                }), i.cancelAnimationFrame(t.cssModeFrameID);
                return
            }
            t.cssModeFrameID = i.requestAnimationFrame(h)
        };
    h()
}

function _t(e, t) {
    return t === void 0 && (t = ""), [...e.children].filter(s => s.matches(t))
}

function D0(e) {
    try {
        console.warn(e);
        return
    } catch {}
}

function F0(e, t) {
    t === void 0 && (t = []);
    const s = document.createElement(e);
    return s.classList.add(...Array.isArray(t) ? t : Vk(t)), s
}

function Bk(e, t) {
    const s = [];
    for (; e.previousElementSibling;) {
        const a = e.previousElementSibling;
        t ? a.matches(t) && s.push(a) : s.push(a), e = a
    }
    return s
}

function Ik(e, t) {
    const s = [];
    for (; e.nextElementSibling;) {
        const a = e.nextElementSibling;
        t ? a.matches(t) && s.push(a) : s.push(a), e = a
    }
    return s
}

function Nt(e, t) {
    return lt().getComputedStyle(e, null).getPropertyValue(t)
}

function rn(e) {
    let t = e,
        s;
    if (t) {
        for (s = 0;
            (t = t.previousSibling) !== null;) t.nodeType === 1 && (s += 1);
        return s
    }
}

function Ok(e, t) {
    const s = [];
    let a = e.parentElement;
    for (; a;) t ? a.matches(t) && s.push(a) : s.push(a), a = a.parentElement;
    return s
}

function Ps(e, t) {
    function s(a) {
        a.target === e && (t.call(e, a), e.removeEventListener("transitionend", s))
    }
    t && e.addEventListener("transitionend", s)
}

function cn(e, t, s) {
    const a = lt();
    return s ? e[t === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(a.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-right" : "margin-top")) + parseFloat(a.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")) : e.offsetWidth
}

function At(e) {
    return (Array.isArray(e) ? e : [e]).filter(t => !!t)
}

function Nk(e, t, s, a) {
    return e.params.createElements && Object.keys(a).forEach(i => {
        if (!s[i] && s.auto === !0) {
            let o = _t(e.el, `.${a[i]}`)[0];
            o || (o = F0("div", a[i]), o.className = a[i], e.el.append(o)), s[i] = o, t[i] = o
        }
    }), s
}

function cl(e) {
    let {
        swiper: t,
        extendParams: s,
        on: a,
        emit: i
    } = e;
    s({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
        }
    }), t.navigation = {
        nextEl: null,
        prevEl: null
    };

    function o(b) {
        let M;
        return b && typeof b == "string" && t.isElement && (M = t.el.querySelector(b), M) ? M : (b && (typeof b == "string" && (M = [...document.querySelectorAll(b)]), t.params.uniqueNavElements && typeof b == "string" && M.length > 1 && t.el.querySelectorAll(b).length === 1 && (M = t.el.querySelector(b))), b && !M ? b : M)
    }

    function l(b, M) {
        const V = t.params.navigation;
        b = At(b), b.forEach(S => {
            S && (S.classList[M ? "add" : "remove"](...V.disabledClass.split(" ")), S.tagName === "BUTTON" && (S.disabled = M), t.params.watchOverflow && t.enabled && S.classList[t.isLocked ? "add" : "remove"](V.lockClass))
        })
    }

    function r() {
        const {
            nextEl: b,
            prevEl: M
        } = t.navigation;
        if (t.params.loop) {
            l(M, !1), l(b, !1);
            return
        }
        l(M, t.isBeginning && !t.params.rewind), l(b, t.isEnd && !t.params.rewind)
    }

    function c(b) {
        b.preventDefault(), !(t.isBeginning && !t.params.loop && !t.params.rewind) && (t.slidePrev(), i("navigationPrev"))
    }

    function f(b) {
        b.preventDefault(), !(t.isEnd && !t.params.loop && !t.params.rewind) && (t.slideNext(), i("navigationNext"))
    }

    function d() {
        const b = t.params.navigation;
        if (t.params.navigation = Nk(t, t.originalParams.navigation, t.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }), !(b.nextEl || b.prevEl)) return;
        let M = o(b.nextEl),
            V = o(b.prevEl);
        Object.assign(t.navigation, {
            nextEl: M,
            prevEl: V
        }), M = At(M), V = At(V);
        const S = (Z, C) => {
            Z && Z.addEventListener("click", C === "next" ? f : c), !t.enabled && Z && Z.classList.add(...b.lockClass.split(" "))
        };
        M.forEach(Z => S(Z, "next")), V.forEach(Z => S(Z, "prev"))
    }

    function h() {
        let {
            nextEl: b,
            prevEl: M
        } = t.navigation;
        b = At(b), M = At(M);
        const V = (S, Z) => {
            S.removeEventListener("click", Z === "next" ? f : c), S.classList.remove(...t.params.navigation.disabledClass.split(" "))
        };
        b.forEach(S => V(S, "next")), M.forEach(S => V(S, "prev"))
    }
    a("init", () => {
        t.params.navigation.enabled === !1 ? y() : (d(), r())
    }), a("toEdge fromEdge lock unlock", () => {
        r()
    }), a("destroy", () => {
        h()
    }), a("enable disable", () => {
        let {
            nextEl: b,
            prevEl: M
        } = t.navigation;
        if (b = At(b), M = At(M), t.enabled) {
            r();
            return
        } [...b, ...M].filter(V => !!V).forEach(V => V.classList.add(t.params.navigation.lockClass))
    }), a("click", (b, M) => {
        let {
            nextEl: V,
            prevEl: S
        } = t.navigation;
        V = At(V), S = At(S);
        const Z = M.target;
        if (t.params.navigation.hideOnClick && !S.includes(Z) && !V.includes(Z)) {
            if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === Z || t.pagination.el.contains(Z))) return;
            let C;
            V.length ? C = V[0].classList.contains(t.params.navigation.hiddenClass) : S.length && (C = S[0].classList.contains(t.params.navigation.hiddenClass)), i(C === !0 ? "navigationShow" : "navigationHide"), [...V, ...S].filter(E => !!E).forEach(E => E.classList.toggle(t.params.navigation.hiddenClass))
        }
    });
    const m = () => {
            t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), d(), r()
        },
        y = () => {
            t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), h()
        };
    Object.assign(t.navigation, {
        enable: m,
        disable: y,
        update: r,
        init: d,
        destroy: h
    })
}

function X1(e) {
    let {
        swiper: t,
        extendParams: s,
        on: a,
        emit: i,
        params: o
    } = e;
    t.autoplay = {
        running: !1,
        paused: !1,
        timeLeft: 0
    }, s({
        autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !1,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1
        }
    });
    let l, r, c = o && o.autoplay ? o.autoplay.delay : 3e3,
        f = o && o.autoplay ? o.autoplay.delay : 3e3,
        d, h = new Date().getTime(),
        m, y, b, M, V, S, Z;

    function C(J) {
        !t || t.destroyed || !t.wrapperEl || J.target === t.wrapperEl && (t.wrapperEl.removeEventListener("transitionend", C), !Z && B())
    }
    const E = () => {
            if (t.destroyed || !t.autoplay.running) return;
            t.autoplay.paused ? m = !0 : m && (f = d, m = !1);
            const J = t.autoplay.paused ? d : h + f - new Date().getTime();
            t.autoplay.timeLeft = J, i("autoplayTimeLeft", J, J / c), r = requestAnimationFrame(() => {
                E()
            })
        },
        z = () => {
            let J;
            return t.virtual && t.params.virtual.enabled ? J = t.slides.filter(Me => Me.classList.contains("swiper-slide-active"))[0] : J = t.slides[t.activeIndex], J ? parseInt(J.getAttribute("data-swiper-autoplay"), 10) : void 0
        },
        j = J => {
            if (t.destroyed || !t.autoplay.running) return;
            cancelAnimationFrame(r), E();
            let Le = typeof J > "u" ? t.params.autoplay.delay : J;
            c = t.params.autoplay.delay, f = t.params.autoplay.delay;
            const Me = z();
            !Number.isNaN(Me) && Me > 0 && typeof J > "u" && (Le = Me, c = Me, f = Me), d = Le;
            const Ee = t.params.speed,
                je = () => {
                    !t || t.destroyed || (t.params.autoplay.reverseDirection ? !t.isBeginning || t.params.loop || t.params.rewind ? (t.slidePrev(Ee, !0, !0), i("autoplay")) : t.params.autoplay.stopOnLastSlide || (t.slideTo(t.slides.length - 1, Ee, !0, !0), i("autoplay")) : !t.isEnd || t.params.loop || t.params.rewind ? (t.slideNext(Ee, !0, !0), i("autoplay")) : t.params.autoplay.stopOnLastSlide || (t.slideTo(0, Ee, !0, !0), i("autoplay")), t.params.cssMode && (h = new Date().getTime(), requestAnimationFrame(() => {
                        j()
                    })))
                };
            return Le > 0 ? (clearTimeout(l), l = setTimeout(() => {
                je()
            }, Le)) : requestAnimationFrame(() => {
                je()
            }), Le
        },
        se = () => {
            h = new Date().getTime(), t.autoplay.running = !0, j(), i("autoplayStart")
        },
        O = () => {
            t.autoplay.running = !1, clearTimeout(l), cancelAnimationFrame(r), i("autoplayStop")
        },
        k = (J, Le) => {
            if (t.destroyed || !t.autoplay.running) return;
            clearTimeout(l), J || (S = !0);
            const Me = () => {
                i("autoplayPause"), t.params.autoplay.waitForTransition ? t.wrapperEl.addEventListener("transitionend", C) : B()
            };
            if (t.autoplay.paused = !0, Le) {
                V && (d = t.params.autoplay.delay), V = !1, Me();
                return
            }
            d = (d || t.params.autoplay.delay) - (new Date().getTime() - h), !(t.isEnd && d < 0 && !t.params.loop) && (d < 0 && (d = 0), Me())
        },
        B = () => {
            t.isEnd && d < 0 && !t.params.loop || t.destroyed || !t.autoplay.running || (h = new Date().getTime(), S ? (S = !1, j(d)) : j(), t.autoplay.paused = !1, i("autoplayResume"))
        },
        U = () => {
            if (t.destroyed || !t.autoplay.running) return;
            const J = Ht();
            J.visibilityState === "hidden" && (S = !0, k(!0)), J.visibilityState === "visible" && B()
        },
        ce = J => {
            J.pointerType === "mouse" && (S = !0, Z = !0, !(t.animating || t.autoplay.paused) && k(!0))
        },
        Y = J => {
            J.pointerType === "mouse" && (Z = !1, t.autoplay.paused && B())
        },
        de = () => {
            t.params.autoplay.pauseOnMouseEnter && (t.el.addEventListener("pointerenter", ce), t.el.addEventListener("pointerleave", Y))
        },
        be = () => {
            t.el.removeEventListener("pointerenter", ce), t.el.removeEventListener("pointerleave", Y)
        },
        fe = () => {
            Ht().addEventListener("visibilitychange", U)
        },
        _e = () => {
            Ht().removeEventListener("visibilitychange", U)
        };
    a("init", () => {
        t.params.autoplay.enabled && (de(), fe(), se())
    }), a("destroy", () => {
        be(), _e(), t.autoplay.running && O()
    }), a("_freeModeStaticRelease", () => {
        (b || S) && B()
    }), a("_freeModeNoMomentumRelease", () => {
        t.params.autoplay.disableOnInteraction ? O() : k(!0, !0)
    }), a("beforeTransitionStart", (J, Le, Me) => {
        t.destroyed || !t.autoplay.running || (Me || !t.params.autoplay.disableOnInteraction ? k(!0, !0) : O())
    }), a("sliderFirstMove", () => {
        if (!(t.destroyed || !t.autoplay.running)) {
            if (t.params.autoplay.disableOnInteraction) {
                O();
                return
            }
            y = !0, b = !1, S = !1, M = setTimeout(() => {
                S = !0, b = !0, k(!0)
            }, 200)
        }
    }), a("touchEnd", () => {
        if (!(t.destroyed || !t.autoplay.running || !y)) {
            if (clearTimeout(M), clearTimeout(l), t.params.autoplay.disableOnInteraction) {
                b = !1, y = !1;
                return
            }
            b && t.params.cssMode && B(), b = !1, y = !1
        }
    }), a("slideChange", () => {
        t.destroyed || !t.autoplay.running || (V = !0)
    }), Object.assign(t.autoplay, {
        start: se,
        stop: O,
        pause: k,
        resume: B
    })
}

function e0(e) {
    let {
        swiper: t,
        extendParams: s,
        emit: a,
        once: i
    } = e;
    s({
        freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: .02
        }
    });

    function o() {
        if (t.params.cssMode) return;
        const c = t.getTranslate();
        t.setTranslate(c), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
            currentPos: t.rtl ? t.translate : -t.translate
        })
    }

    function l() {
        if (t.params.cssMode) return;
        const {
            touchEventsData: c,
            touches: f
        } = t;
        c.velocities.length === 0 && c.velocities.push({
            position: f[t.isHorizontal() ? "startX" : "startY"],
            time: c.touchStartTime
        }), c.velocities.push({
            position: f[t.isHorizontal() ? "currentX" : "currentY"],
            time: t1()
        })
    }

    function r(c) {
        let {
            currentPos: f
        } = c;
        if (t.params.cssMode) return;
        const {
            params: d,
            wrapperEl: h,
            rtlTranslate: m,
            snapGrid: y,
            touchEventsData: b
        } = t, V = t1() - b.touchStartTime;
        if (f < -t.minTranslate()) {
            t.slideTo(t.activeIndex);
            return
        }
        if (f > -t.maxTranslate()) {
            t.slides.length < y.length ? t.slideTo(y.length - 1) : t.slideTo(t.slides.length - 1);
            return
        }
        if (d.freeMode.momentum) {
            if (b.velocities.length > 1) {
                const O = b.velocities.pop(),
                    k = b.velocities.pop(),
                    B = O.position - k.position,
                    U = O.time - k.time;
                t.velocity = B / U, t.velocity /= 2, Math.abs(t.velocity) < d.freeMode.minimumVelocity && (t.velocity = 0), (U > 150 || t1() - O.time > 300) && (t.velocity = 0)
            } else t.velocity = 0;
            t.velocity *= d.freeMode.momentumVelocityRatio, b.velocities.length = 0;
            let S = 1e3 * d.freeMode.momentumRatio;
            const Z = t.velocity * S;
            let C = t.translate + Z;
            m && (C = -C);
            let E = !1,
                z;
            const j = Math.abs(t.velocity) * 20 * d.freeMode.momentumBounceRatio;
            let se;
            if (C < t.maxTranslate()) d.freeMode.momentumBounce ? (C + t.maxTranslate() < -j && (C = t.maxTranslate() - j), z = t.maxTranslate(), E = !0, b.allowMomentumBounce = !0) : C = t.maxTranslate(), d.loop && d.centeredSlides && (se = !0);
            else if (C > t.minTranslate()) d.freeMode.momentumBounce ? (C - t.minTranslate() > j && (C = t.minTranslate() + j), z = t.minTranslate(), E = !0, b.allowMomentumBounce = !0) : C = t.minTranslate(), d.loop && d.centeredSlides && (se = !0);
            else if (d.freeMode.sticky) {
                let O;
                for (let k = 0; k < y.length; k += 1)
                    if (y[k] > -C) {
                        O = k;
                        break
                    } Math.abs(y[O] - C) < Math.abs(y[O - 1] - C) || t.swipeDirection === "next" ? C = y[O] : C = y[O - 1], C = -C
            }
            if (se && i("transitionEnd", () => {
                    t.loopFix()
                }), t.velocity !== 0) {
                if (m ? S = Math.abs((-C - t.translate) / t.velocity) : S = Math.abs((C - t.translate) / t.velocity), d.freeMode.sticky) {
                    const O = Math.abs((m ? -C : C) - t.translate),
                        k = t.slidesSizesGrid[t.activeIndex];
                    O < k ? S = d.speed : O < 2 * k ? S = d.speed * 1.5 : S = d.speed * 2.5
                }
            } else if (d.freeMode.sticky) {
                t.slideToClosest();
                return
            }
            d.freeMode.momentumBounce && E ? (t.updateProgress(z), t.setTransition(S), t.setTranslate(C), t.transitionStart(!0, t.swipeDirection), t.animating = !0, Ps(h, () => {
                !t || t.destroyed || !b.allowMomentumBounce || (a("momentumBounce"), t.setTransition(d.speed), setTimeout(() => {
                    t.setTranslate(z), Ps(h, () => {
                        !t || t.destroyed || t.transitionEnd()
                    })
                }, 0))
            })) : t.velocity ? (a("_freeModeNoMomentumRelease"), t.updateProgress(C), t.setTransition(S), t.setTranslate(C), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, Ps(h, () => {
                !t || t.destroyed || t.transitionEnd()
            }))) : t.updateProgress(C), t.updateActiveIndex(), t.updateSlidesClasses()
        } else if (d.freeMode.sticky) {
            t.slideToClosest();
            return
        } else d.freeMode && a("_freeModeNoMomentumRelease");
        (!d.freeMode.momentum || V >= d.longSwipesMs) && (a("_freeModeStaticRelease"), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
    }
    Object.assign(t, {
        freeMode: {
            onTouchStart: o,
            onTouchMove: l,
            onTouchEnd: r
        }
    })
}
let Ls;

function zk() {
    const e = lt(),
        t = Ht();
    return {
        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
    }
}

function dl() {
    return Ls || (Ls = zk()), Ls
}
let Es;

function jk(e) {
    let {
        userAgent: t
    } = e === void 0 ? {} : e;
    const s = dl(),
        a = lt(),
        i = a.navigator.platform,
        o = t || a.navigator.userAgent,
        l = {
            ios: !1,
            android: !1
        },
        r = a.screen.width,
        c = a.screen.height,
        f = o.match(/(Android);?[\s\/]+([\d.]+)?/);
    let d = o.match(/(iPad).*OS\s([\d_]+)/);
    const h = o.match(/(iPod)(.*OS\s([\d_]+))?/),
        m = !d && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        y = i === "Win32";
    let b = i === "MacIntel";
    const M = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !d && b && s.touch && M.indexOf(`${r}x${c}`) >= 0 && (d = o.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), b = !1), f && !y && (l.os = "android", l.android = !0), (d || m || h) && (l.os = "ios", l.ios = !0), l
}

function ul(e) {
    return e === void 0 && (e = {}), Es || (Es = jk(e)), Es
}
let Bs;

function Rk() {
    const e = lt(),
        t = ul();
    let s = !1;

    function a() {
        const r = e.navigator.userAgent.toLowerCase();
        return r.indexOf("safari") >= 0 && r.indexOf("chrome") < 0 && r.indexOf("android") < 0
    }
    if (a()) {
        const r = String(e.navigator.userAgent);
        if (r.includes("Version/")) {
            const [c, f] = r.split("Version/")[1].split(" ")[0].split(".").map(d => Number(d));
            s = c < 16 || c === 16 && f < 2
        }
    }
    const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
        o = a(),
        l = o || i && t.ios;
    return {
        isSafari: s || o,
        needPerspectiveFix: s,
        need3dFix: l,
        isWebView: i
    }
}

function Dk() {
    return Bs || (Bs = Rk()), Bs
}

function Fk(e) {
    let {
        swiper: t,
        on: s,
        emit: a
    } = e;
    const i = lt();
    let o = null,
        l = null;
    const r = () => {
            !t || t.destroyed || !t.initialized || (a("beforeResize"), a("resize"))
        },
        c = () => {
            !t || t.destroyed || !t.initialized || (o = new ResizeObserver(h => {
                l = i.requestAnimationFrame(() => {
                    const {
                        width: m,
                        height: y
                    } = t;
                    let b = m,
                        M = y;
                    h.forEach(V => {
                        let {
                            contentBoxSize: S,
                            contentRect: Z,
                            target: C
                        } = V;
                        C && C !== t.el || (b = Z ? Z.width : (S[0] || S).inlineSize, M = Z ? Z.height : (S[0] || S).blockSize)
                    }), (b !== m || M !== y) && r()
                })
            }), o.observe(t.el))
        },
        f = () => {
            l && i.cancelAnimationFrame(l), o && o.unobserve && t.el && (o.unobserve(t.el), o = null)
        },
        d = () => {
            !t || t.destroyed || !t.initialized || a("orientationchange")
        };
    s("init", () => {
        if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
            c();
            return
        }
        i.addEventListener("resize", r), i.addEventListener("orientationchange", d)
    }), s("destroy", () => {
        f(), i.removeEventListener("resize", r), i.removeEventListener("orientationchange", d)
    })
}

function qk(e) {
    let {
        swiper: t,
        extendParams: s,
        on: a,
        emit: i
    } = e;
    const o = [],
        l = lt(),
        r = function (d, h) {
            h === void 0 && (h = {});
            const m = l.MutationObserver || l.WebkitMutationObserver,
                y = new m(b => {
                    if (t.__preventObserver__) return;
                    if (b.length === 1) {
                        i("observerUpdate", b[0]);
                        return
                    }
                    const M = function () {
                        i("observerUpdate", b[0])
                    };
                    l.requestAnimationFrame ? l.requestAnimationFrame(M) : l.setTimeout(M, 0)
                });
            y.observe(d, {
                attributes: typeof h.attributes > "u" ? !0 : h.attributes,
                childList: typeof h.childList > "u" ? !0 : h.childList,
                characterData: typeof h.characterData > "u" ? !0 : h.characterData
            }), o.push(y)
        },
        c = () => {
            if (t.params.observer) {
                if (t.params.observeParents) {
                    const d = Ok(t.hostEl);
                    for (let h = 0; h < d.length; h += 1) r(d[h])
                }
                r(t.hostEl, {
                    childList: t.params.observeSlideChildren
                }), r(t.wrapperEl, {
                    attributes: !1
                })
            }
        },
        f = () => {
            o.forEach(d => {
                d.disconnect()
            }), o.splice(0, o.length)
        };
    s({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }), a("init", c), a("destroy", f)
}
var Wk = {
    on(e, t, s) {
        const a = this;
        if (!a.eventsListeners || a.destroyed || typeof t != "function") return a;
        const i = s ? "unshift" : "push";
        return e.split(" ").forEach(o => {
            a.eventsListeners[o] || (a.eventsListeners[o] = []), a.eventsListeners[o][i](t)
        }), a
    },
    once(e, t, s) {
        const a = this;
        if (!a.eventsListeners || a.destroyed || typeof t != "function") return a;

        function i() {
            a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
            for (var o = arguments.length, l = new Array(o), r = 0; r < o; r++) l[r] = arguments[r];
            t.apply(a, l)
        }
        return i.__emitterProxy = t, a.on(e, i, s)
    },
    onAny(e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
        const a = t ? "unshift" : "push";
        return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s
    },
    offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
    },
    off(e, t) {
        const s = this;
        return !s.eventsListeners || s.destroyed || !s.eventsListeners || e.split(" ").forEach(a => {
            typeof t > "u" ? s.eventsListeners[a] = [] : s.eventsListeners[a] && s.eventsListeners[a].forEach((i, o) => {
                (i === t || i.__emitterProxy && i.__emitterProxy === t) && s.eventsListeners[a].splice(o, 1)
            })
        }), s
    },
    emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
        let t, s, a;
        for (var i = arguments.length, o = new Array(i), l = 0; l < i; l++) o[l] = arguments[l];
        return typeof o[0] == "string" || Array.isArray(o[0]) ? (t = o[0], s = o.slice(1, o.length), a = e) : (t = o[0].events, s = o[0].data, a = o[0].context || e), s.unshift(a), (Array.isArray(t) ? t : t.split(" ")).forEach(c => {
            e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(f => {
                f.apply(a, [c, ...s])
            }), e.eventsListeners && e.eventsListeners[c] && e.eventsListeners[c].forEach(f => {
                f.apply(a, s)
            })
        }), e
    }
};

function Gk() {
    const e = this;
    let t, s;
    const a = e.el;
    typeof e.params.width < "u" && e.params.width !== null ? t = e.params.width : t = a.clientWidth, typeof e.params.height < "u" && e.params.height !== null ? s = e.params.height : s = a.clientHeight, !(t === 0 && e.isHorizontal() || s === 0 && e.isVertical()) && (t = t - parseInt(Nt(a, "padding-left") || 0, 10) - parseInt(Nt(a, "padding-right") || 0, 10), s = s - parseInt(Nt(a, "padding-top") || 0, 10) - parseInt(Nt(a, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
        width: t,
        height: s,
        size: e.isHorizontal() ? t : s
    }))
}

function Uk() {
    const e = this;

    function t(B, U) {
        return parseFloat(B.getPropertyValue(e.getDirectionLabel(U)) || 0)
    }
    const s = e.params,
        {
            wrapperEl: a,
            slidesEl: i,
            size: o,
            rtlTranslate: l,
            wrongRTL: r
        } = e,
        c = e.virtual && s.virtual.enabled,
        f = c ? e.virtual.slides.length : e.slides.length,
        d = _t(i, `.${e.params.slideClass}, swiper-slide`),
        h = c ? e.virtual.slides.length : d.length;
    let m = [];
    const y = [],
        b = [];
    let M = s.slidesOffsetBefore;
    typeof M == "function" && (M = s.slidesOffsetBefore.call(e));
    let V = s.slidesOffsetAfter;
    typeof V == "function" && (V = s.slidesOffsetAfter.call(e));
    const S = e.snapGrid.length,
        Z = e.slidesGrid.length;
    let C = s.spaceBetween,
        E = -M,
        z = 0,
        j = 0;
    if (typeof o > "u") return;
    typeof C == "string" && C.indexOf("%") >= 0 ? C = parseFloat(C.replace("%", "")) / 100 * o : typeof C == "string" && (C = parseFloat(C)), e.virtualSize = -C, d.forEach(B => {
        l ? B.style.marginLeft = "" : B.style.marginRight = "", B.style.marginBottom = "", B.style.marginTop = ""
    }), s.centeredSlides && s.cssMode && (x0(a, "--swiper-centered-offset-before", ""), x0(a, "--swiper-centered-offset-after", ""));
    const se = s.grid && s.grid.rows > 1 && e.grid;
    se ? e.grid.initSlides(d) : e.grid && e.grid.unsetSlides();
    let O;
    const k = s.slidesPerView === "auto" && s.breakpoints && Object.keys(s.breakpoints).filter(B => typeof s.breakpoints[B].slidesPerView < "u").length > 0;
    for (let B = 0; B < h; B += 1) {
        O = 0;
        let U;
        if (d[B] && (U = d[B]), se && e.grid.updateSlide(B, U, d), !(d[B] && Nt(U, "display") === "none")) {
            if (s.slidesPerView === "auto") {
                k && (d[B].style[e.getDirectionLabel("width")] = "");
                const ce = getComputedStyle(U),
                    Y = U.style.transform,
                    de = U.style.webkitTransform;
                if (Y && (U.style.transform = "none"), de && (U.style.webkitTransform = "none"), s.roundLengths) O = e.isHorizontal() ? cn(U, "width", !0) : cn(U, "height", !0);
                else {
                    const be = t(ce, "width"),
                        fe = t(ce, "padding-left"),
                        _e = t(ce, "padding-right"),
                        J = t(ce, "margin-left"),
                        Le = t(ce, "margin-right"),
                        Me = ce.getPropertyValue("box-sizing");
                    if (Me && Me === "border-box") O = be + J + Le;
                    else {
                        const {
                            clientWidth: Ee,
                            offsetWidth: je
                        } = U;
                        O = be + fe + _e + J + Le + (je - Ee)
                    }
                }
                Y && (U.style.transform = Y), de && (U.style.webkitTransform = de), s.roundLengths && (O = Math.floor(O))
            } else O = (o - (s.slidesPerView - 1) * C) / s.slidesPerView, s.roundLengths && (O = Math.floor(O)), d[B] && (d[B].style[e.getDirectionLabel("width")] = `${O}px`);
            d[B] && (d[B].swiperSlideSize = O), b.push(O), s.centeredSlides ? (E = E + O / 2 + z / 2 + C, z === 0 && B !== 0 && (E = E - o / 2 - C), B === 0 && (E = E - o / 2 - C), Math.abs(E) < 1 / 1e3 && (E = 0), s.roundLengths && (E = Math.floor(E)), j % s.slidesPerGroup === 0 && m.push(E), y.push(E)) : (s.roundLengths && (E = Math.floor(E)), (j - Math.min(e.params.slidesPerGroupSkip, j)) % e.params.slidesPerGroup === 0 && m.push(E), y.push(E), E = E + O + C), e.virtualSize += O + C, z = O, j += 1
        }
    }
    if (e.virtualSize = Math.max(e.virtualSize, o) + V, l && r && (s.effect === "slide" || s.effect === "coverflow") && (a.style.width = `${e.virtualSize+C}px`), s.setWrapperSize && (a.style[e.getDirectionLabel("width")] = `${e.virtualSize+C}px`), se && e.grid.updateWrapperSize(O, m), !s.centeredSlides) {
        const B = [];
        for (let U = 0; U < m.length; U += 1) {
            let ce = m[U];
            s.roundLengths && (ce = Math.floor(ce)), m[U] <= e.virtualSize - o && B.push(ce)
        }
        m = B, Math.floor(e.virtualSize - o) - Math.floor(m[m.length - 1]) > 1 && m.push(e.virtualSize - o)
    }
    if (c && s.loop) {
        const B = b[0] + C;
        if (s.slidesPerGroup > 1) {
            const U = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup),
                ce = B * s.slidesPerGroup;
            for (let Y = 0; Y < U; Y += 1) m.push(m[m.length - 1] + ce)
        }
        for (let U = 0; U < e.virtual.slidesBefore + e.virtual.slidesAfter; U += 1) s.slidesPerGroup === 1 && m.push(m[m.length - 1] + B), y.push(y[y.length - 1] + B), e.virtualSize += B
    }
    if (m.length === 0 && (m = [0]), C !== 0) {
        const B = e.isHorizontal() && l ? "marginLeft" : e.getDirectionLabel("marginRight");
        d.filter((U, ce) => !s.cssMode || s.loop ? !0 : ce !== d.length - 1).forEach(U => {
            U.style[B] = `${C}px`
        })
    }
    if (s.centeredSlides && s.centeredSlidesBounds) {
        let B = 0;
        b.forEach(ce => {
            B += ce + (C || 0)
        }), B -= C;
        const U = B - o;
        m = m.map(ce => ce <= 0 ? -M : ce > U ? U + V : ce)
    }
    if (s.centerInsufficientSlides) {
        let B = 0;
        if (b.forEach(U => {
                B += U + (C || 0)
            }), B -= C, B < o) {
            const U = (o - B) / 2;
            m.forEach((ce, Y) => {
                m[Y] = ce - U
            }), y.forEach((ce, Y) => {
                y[Y] = ce + U
            })
        }
    }
    if (Object.assign(e, {
            slides: d,
            snapGrid: m,
            slidesGrid: y,
            slidesSizesGrid: b
        }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
        x0(a, "--swiper-centered-offset-before", `${-m[0]}px`), x0(a, "--swiper-centered-offset-after", `${e.size/2-b[b.length-1]/2}px`);
        const B = -e.snapGrid[0],
            U = -e.slidesGrid[0];
        e.snapGrid = e.snapGrid.map(ce => ce + B), e.slidesGrid = e.slidesGrid.map(ce => ce + U)
    }
    if (h !== f && e.emit("slidesLengthChange"), m.length !== S && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), y.length !== Z && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !c && !s.cssMode && (s.effect === "slide" || s.effect === "fade")) {
        const B = `${s.containerModifierClass}backface-hidden`,
            U = e.el.classList.contains(B);
        h <= s.maxBackfaceHiddenSlides ? U || e.el.classList.add(B) : U && e.el.classList.remove(B)
    }
}

function Yk(e) {
    const t = this,
        s = [],
        a = t.virtual && t.params.virtual.enabled;
    let i = 0,
        o;
    typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
    const l = r => a ? t.slides[t.getSlideIndexByData(r)] : t.slides[r];
    if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)(t.visibleSlides || []).forEach(r => {
            s.push(r)
        });
        else
            for (o = 0; o < Math.ceil(t.params.slidesPerView); o += 1) {
                const r = t.activeIndex + o;
                if (r > t.slides.length && !a) break;
                s.push(l(r))
            } else s.push(l(t.activeIndex));
    for (o = 0; o < s.length; o += 1)
        if (typeof s[o] < "u") {
            const r = s[o].offsetHeight;
            i = r > i ? r : i
        }(i || i === 0) && (t.wrapperEl.style.height = `${i}px`)
}

function Kk() {
    const e = this,
        t = e.slides,
        s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
    for (let a = 0; a < t.length; a += 1) t[a].swiperSlideOffset = (e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop) - s - e.cssOverflowAdjustment()
}

function Jk(e) {
    e === void 0 && (e = this && this.translate || 0);
    const t = this,
        s = t.params,
        {
            slides: a,
            rtlTranslate: i,
            snapGrid: o
        } = t;
    if (a.length === 0) return;
    typeof a[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
    let l = -e;
    i && (l = e), a.forEach(c => {
        c.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass)
    }), t.visibleSlidesIndexes = [], t.visibleSlides = [];
    let r = s.spaceBetween;
    typeof r == "string" && r.indexOf("%") >= 0 ? r = parseFloat(r.replace("%", "")) / 100 * t.size : typeof r == "string" && (r = parseFloat(r));
    for (let c = 0; c < a.length; c += 1) {
        const f = a[c];
        let d = f.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (d -= a[0].swiperSlideOffset);
        const h = (l + (s.centeredSlides ? t.minTranslate() : 0) - d) / (f.swiperSlideSize + r),
            m = (l - o[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (f.swiperSlideSize + r),
            y = -(l - d),
            b = y + t.slidesSizesGrid[c],
            M = y >= 0 && y <= t.size - t.slidesSizesGrid[c];
        (y >= 0 && y < t.size - 1 || b > 1 && b <= t.size || y <= 0 && b >= t.size) && (t.visibleSlides.push(f), t.visibleSlidesIndexes.push(c), a[c].classList.add(s.slideVisibleClass)), M && a[c].classList.add(s.slideFullyVisibleClass), f.progress = i ? -h : h, f.originalProgress = i ? -m : m
    }
}

function Qk(e) {
    const t = this;
    if (typeof e > "u") {
        const d = t.rtlTranslate ? -1 : 1;
        e = t && t.translate && t.translate * d || 0
    }
    const s = t.params,
        a = t.maxTranslate() - t.minTranslate();
    let {
        progress: i,
        isBeginning: o,
        isEnd: l,
        progressLoop: r
    } = t;
    const c = o,
        f = l;
    if (a === 0) i = 0, o = !0, l = !0;
    else {
        i = (e - t.minTranslate()) / a;
        const d = Math.abs(e - t.minTranslate()) < 1,
            h = Math.abs(e - t.maxTranslate()) < 1;
        o = d || i <= 0, l = h || i >= 1, d && (i = 0), h && (i = 1)
    }
    if (s.loop) {
        const d = t.getSlideIndexByData(0),
            h = t.getSlideIndexByData(t.slides.length - 1),
            m = t.slidesGrid[d],
            y = t.slidesGrid[h],
            b = t.slidesGrid[t.slidesGrid.length - 1],
            M = Math.abs(e);
        M >= m ? r = (M - m) / b : r = (M + b - y) / b, r > 1 && (r -= 1)
    }
    Object.assign(t, {
        progress: i,
        progressLoop: r,
        isBeginning: o,
        isEnd: l
    }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), o && !c && t.emit("reachBeginning toEdge"), l && !f && t.emit("reachEnd toEdge"), (c && !o || f && !l) && t.emit("fromEdge"), t.emit("progress", i)
}

function Xk() {
    const e = this,
        {
            slides: t,
            params: s,
            slidesEl: a,
            activeIndex: i
        } = e,
        o = e.virtual && s.virtual.enabled,
        l = e.grid && s.grid && s.grid.rows > 1,
        r = h => _t(a, `.${s.slideClass}${h}, swiper-slide${h}`)[0];
    t.forEach(h => {
        h.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass)
    });
    let c, f, d;
    if (o)
        if (s.loop) {
            let h = i - e.virtual.slidesBefore;
            h < 0 && (h = e.virtual.slides.length + h), h >= e.virtual.slides.length && (h -= e.virtual.slides.length), c = r(`[data-swiper-slide-index="${h}"]`)
        } else c = r(`[data-swiper-slide-index="${i}"]`);
    else l ? (c = t.filter(h => h.column === i)[0], d = t.filter(h => h.column === i + 1)[0], f = t.filter(h => h.column === i - 1)[0]) : c = t[i];
    c && (c.classList.add(s.slideActiveClass), l ? (d && d.classList.add(s.slideNextClass), f && f.classList.add(s.slidePrevClass)) : (d = Ik(c, `.${s.slideClass}, swiper-slide`)[0], s.loop && !d && (d = t[0]), d && d.classList.add(s.slideNextClass), f = Bk(c, `.${s.slideClass}, swiper-slide`)[0], s.loop && !f === 0 && (f = t[t.length - 1]), f && f.classList.add(s.slidePrevClass))), e.emitSlidesClasses()
}
const T0 = (e, t) => {
        if (!e || e.destroyed || !e.params) return;
        const s = () => e.isElement ? "swiper-slide" : `.${e.params.slideClass}`,
            a = t.closest(s());
        if (a) {
            let i = a.querySelector(`.${e.params.lazyPreloaderClass}`);
            !i && e.isElement && (a.shadowRoot ? i = a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
                a.shadowRoot && (i = a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), i && i.remove())
            })), i && i.remove()
        }
    },
    Is = (e, t) => {
        if (!e.slides[t]) return;
        const s = e.slides[t].querySelector('[loading="lazy"]');
        s && s.removeAttribute("loading")
    },
    ha = e => {
        if (!e || e.destroyed || !e.params) return;
        let t = e.params.lazyPreloadPrevNext;
        const s = e.slides.length;
        if (!s || !t || t < 0) return;
        t = Math.min(t, s);
        const a = e.params.slidesPerView === "auto" ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
            i = e.activeIndex;
        if (e.params.grid && e.params.grid.rows > 1) {
            const l = i,
                r = [l - t];
            r.push(...Array.from({
                length: t
            }).map((c, f) => l + a + f)), e.slides.forEach((c, f) => {
                r.includes(c.column) && Is(e, f)
            });
            return
        }
        const o = i + a - 1;
        if (e.params.rewind || e.params.loop)
            for (let l = i - t; l <= o + t; l += 1) {
                const r = (l % s + s) % s;
                (r < i || r > o) && Is(e, r)
            } else
                for (let l = Math.max(i - t, 0); l <= Math.min(o + t, s - 1); l += 1) l !== i && (l > o || l < i) && Is(e, l)
    };

function eP(e) {
    const {
        slidesGrid: t,
        params: s
    } = e, a = e.rtlTranslate ? e.translate : -e.translate;
    let i;
    for (let o = 0; o < t.length; o += 1) typeof t[o + 1] < "u" ? a >= t[o] && a < t[o + 1] - (t[o + 1] - t[o]) / 2 ? i = o : a >= t[o] && a < t[o + 1] && (i = o + 1) : a >= t[o] && (i = o);
    return s.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i
}

function tP(e) {
    const t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        {
            snapGrid: a,
            params: i,
            activeIndex: o,
            realIndex: l,
            snapIndex: r
        } = t;
    let c = e,
        f;
    const d = y => {
        let b = y - t.virtual.slidesBefore;
        return b < 0 && (b = t.virtual.slides.length + b), b >= t.virtual.slides.length && (b -= t.virtual.slides.length), b
    };
    if (typeof c > "u" && (c = eP(t)), a.indexOf(s) >= 0) f = a.indexOf(s);
    else {
        const y = Math.min(i.slidesPerGroupSkip, c);
        f = y + Math.floor((c - y) / i.slidesPerGroup)
    }
    if (f >= a.length && (f = a.length - 1), c === o && !t.params.loop) {
        f !== r && (t.snapIndex = f, t.emit("snapIndexChange"));
        return
    }
    if (c === o && t.params.loop && t.virtual && t.params.virtual.enabled) {
        t.realIndex = d(c);
        return
    }
    const h = t.grid && i.grid && i.grid.rows > 1;
    let m;
    if (t.virtual && i.virtual.enabled && i.loop) m = d(c);
    else if (h) {
        const y = t.slides.filter(M => M.column === c)[0];
        let b = parseInt(y.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(b) && (b = Math.max(t.slides.indexOf(y), 0)), m = Math.floor(b / i.grid.rows)
    } else if (t.slides[c]) {
        const y = t.slides[c].getAttribute("data-swiper-slide-index");
        y ? m = parseInt(y, 10) : m = c
    } else m = c;
    Object.assign(t, {
        previousSnapIndex: r,
        snapIndex: f,
        previousRealIndex: l,
        realIndex: m,
        previousIndex: o,
        activeIndex: c
    }), t.initialized && ha(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (l !== m && t.emit("realIndexChange"), t.emit("slideChange"))
}

function sP(e, t) {
    const s = this,
        a = s.params;
    let i = e.closest(`.${a.slideClass}, swiper-slide`);
    !i && s.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(r => {
        !i && r.matches && r.matches(`.${a.slideClass}, swiper-slide`) && (i = r)
    });
    let o = !1,
        l;
    if (i) {
        for (let r = 0; r < s.slides.length; r += 1)
            if (s.slides[r] === i) {
                o = !0, l = r;
                break
            }
    }
    if (i && o) s.clickedSlide = i, s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = l;
    else {
        s.clickedSlide = void 0, s.clickedIndex = void 0;
        return
    }
    a.slideToClickedSlide && s.clickedIndex !== void 0 && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide()
}
var aP = {
    updateSize: Gk,
    updateSlides: Uk,
    updateAutoHeight: Yk,
    updateSlidesOffset: Kk,
    updateSlidesProgress: Jk,
    updateProgress: Qk,
    updateSlidesClasses: Xk,
    updateActiveIndex: tP,
    updateClickedSlide: sP
};

function iP(e) {
    e === void 0 && (e = this.isHorizontal() ? "x" : "y");
    const t = this,
        {
            params: s,
            rtlTranslate: a,
            translate: i,
            wrapperEl: o
        } = t;
    if (s.virtualTranslate) return a ? -i : i;
    if (s.cssMode) return i;
    let l = Lk(o, e);
    return l += t.cssOverflowAdjustment(), a && (l = -l), l || 0
}

function nP(e, t) {
    const s = this,
        {
            rtlTranslate: a,
            params: i,
            wrapperEl: o,
            progress: l
        } = s;
    let r = 0,
        c = 0;
    const f = 0;
    s.isHorizontal() ? r = a ? -e : e : c = e, i.roundLengths && (r = Math.floor(r), c = Math.floor(c)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? r : c, i.cssMode ? o[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -r : -c : i.virtualTranslate || (s.isHorizontal() ? r -= s.cssOverflowAdjustment() : c -= s.cssOverflowAdjustment(), o.style.transform = `translate3d(${r}px, ${c}px, ${f}px)`);
    let d;
    const h = s.maxTranslate() - s.minTranslate();
    h === 0 ? d = 0 : d = (e - s.minTranslate()) / h, d !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
}

function oP() {
    return -this.snapGrid[0]
}

function lP() {
    return -this.snapGrid[this.snapGrid.length - 1]
}

function rP(e, t, s, a, i) {
    e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), s === void 0 && (s = !0), a === void 0 && (a = !0);
    const o = this,
        {
            params: l,
            wrapperEl: r
        } = o;
    if (o.animating && l.preventInteractionOnTransition) return !1;
    const c = o.minTranslate(),
        f = o.maxTranslate();
    let d;
    if (a && e > c ? d = c : a && e < f ? d = f : d = e, o.updateProgress(d), l.cssMode) {
        const h = o.isHorizontal();
        if (t === 0) r[h ? "scrollLeft" : "scrollTop"] = -d;
        else {
            if (!o.support.smoothScroll) return rl({
                swiper: o,
                targetPosition: -d,
                side: h ? "left" : "top"
            }), !0;
            r.scrollTo({
                [h ? "left" : "top"]: -d,
                behavior: "smooth"
            })
        }
        return !0
    }
    return t === 0 ? (o.setTransition(0), o.setTranslate(d), s && (o.emit("beforeTransitionStart", t, i), o.emit("transitionEnd"))) : (o.setTransition(t), o.setTranslate(d), s && (o.emit("beforeTransitionStart", t, i), o.emit("transitionStart")), o.animating || (o.animating = !0, o.onTranslateToWrapperTransitionEnd || (o.onTranslateToWrapperTransitionEnd = function (m) {
        !o || o.destroyed || m.target === this && (o.wrapperEl.removeEventListener("transitionend", o.onTranslateToWrapperTransitionEnd), o.onTranslateToWrapperTransitionEnd = null, delete o.onTranslateToWrapperTransitionEnd, s && o.emit("transitionEnd"))
    }), o.wrapperEl.addEventListener("transitionend", o.onTranslateToWrapperTransitionEnd))), !0
}
var cP = {
    getTranslate: iP,
    setTranslate: nP,
    minTranslate: oP,
    maxTranslate: lP,
    translateTo: rP
};

function dP(e, t) {
    const s = this;
    s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`, s.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : ""), s.emit("setTransition", e, t)
}

function pl(e) {
    let {
        swiper: t,
        runCallbacks: s,
        direction: a,
        step: i
    } = e;
    const {
        activeIndex: o,
        previousIndex: l
    } = t;
    let r = a;
    if (r || (o > l ? r = "next" : o < l ? r = "prev" : r = "reset"), t.emit(`transition${i}`), s && o !== l) {
        if (r === "reset") {
            t.emit(`slideResetTransition${i}`);
            return
        }
        t.emit(`slideChangeTransition${i}`), r === "next" ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
    }
}

function uP(e, t) {
    e === void 0 && (e = !0);
    const s = this,
        {
            params: a
        } = s;
    a.cssMode || (a.autoHeight && s.updateAutoHeight(), pl({
        swiper: s,
        runCallbacks: e,
        direction: t,
        step: "Start"
    }))
}

function pP(e, t) {
    e === void 0 && (e = !0);
    const s = this,
        {
            params: a
        } = s;
    s.animating = !1, !a.cssMode && (s.setTransition(0), pl({
        swiper: s,
        runCallbacks: e,
        direction: t,
        step: "End"
    }))
}
var fP = {
    setTransition: dP,
    transitionStart: uP,
    transitionEnd: pP
};

function hP(e, t, s, a, i) {
    e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), s === void 0 && (s = !0), typeof e == "string" && (e = parseInt(e, 10));
    const o = this;
    let l = e;
    l < 0 && (l = 0);
    const {
        params: r,
        snapGrid: c,
        slidesGrid: f,
        previousIndex: d,
        activeIndex: h,
        rtlTranslate: m,
        wrapperEl: y,
        enabled: b
    } = o;
    if (o.animating && r.preventInteractionOnTransition || !b && !a && !i || o.destroyed) return !1;
    const M = Math.min(o.params.slidesPerGroupSkip, l);
    let V = M + Math.floor((l - M) / o.params.slidesPerGroup);
    V >= c.length && (V = c.length - 1);
    const S = -c[V];
    if (r.normalizeSlideIndex)
        for (let C = 0; C < f.length; C += 1) {
            const E = -Math.floor(S * 100),
                z = Math.floor(f[C] * 100),
                j = Math.floor(f[C + 1] * 100);
            typeof f[C + 1] < "u" ? E >= z && E < j - (j - z) / 2 ? l = C : E >= z && E < j && (l = C + 1) : E >= z && (l = C)
        }
    if (o.initialized && l !== h && (!o.allowSlideNext && (m ? S > o.translate && S > o.minTranslate() : S < o.translate && S < o.minTranslate()) || !o.allowSlidePrev && S > o.translate && S > o.maxTranslate() && (h || 0) !== l)) return !1;
    l !== (d || 0) && s && o.emit("beforeSlideChangeStart"), o.updateProgress(S);
    let Z;
    if (l > h ? Z = "next" : l < h ? Z = "prev" : Z = "reset", m && -S === o.translate || !m && S === o.translate) return o.updateActiveIndex(l), r.autoHeight && o.updateAutoHeight(), o.updateSlidesClasses(), r.effect !== "slide" && o.setTranslate(S), Z !== "reset" && (o.transitionStart(s, Z), o.transitionEnd(s, Z)), !1;
    if (r.cssMode) {
        const C = o.isHorizontal(),
            E = m ? S : -S;
        if (t === 0) {
            const z = o.virtual && o.params.virtual.enabled;
            z && (o.wrapperEl.style.scrollSnapType = "none", o._immediateVirtual = !0), z && !o._cssModeVirtualInitialSet && o.params.initialSlide > 0 ? (o._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                y[C ? "scrollLeft" : "scrollTop"] = E
            })) : y[C ? "scrollLeft" : "scrollTop"] = E, z && requestAnimationFrame(() => {
                o.wrapperEl.style.scrollSnapType = "", o._immediateVirtual = !1
            })
        } else {
            if (!o.support.smoothScroll) return rl({
                swiper: o,
                targetPosition: E,
                side: C ? "left" : "top"
            }), !0;
            y.scrollTo({
                [C ? "left" : "top"]: E,
                behavior: "smooth"
            })
        }
        return !0
    }
    return o.setTransition(t), o.setTranslate(S), o.updateActiveIndex(l), o.updateSlidesClasses(), o.emit("beforeTransitionStart", t, a), o.transitionStart(s, Z), t === 0 ? o.transitionEnd(s, Z) : o.animating || (o.animating = !0, o.onSlideToWrapperTransitionEnd || (o.onSlideToWrapperTransitionEnd = function (E) {
        !o || o.destroyed || E.target === this && (o.wrapperEl.removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.onSlideToWrapperTransitionEnd = null, delete o.onSlideToWrapperTransitionEnd, o.transitionEnd(s, Z))
    }), o.wrapperEl.addEventListener("transitionend", o.onSlideToWrapperTransitionEnd)), !0
}

function mP(e, t, s, a) {
    e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), s === void 0 && (s = !0), typeof e == "string" && (e = parseInt(e, 10));
    const i = this;
    if (i.destroyed) return;
    const o = i.grid && i.params.grid && i.params.grid.rows > 1;
    let l = e;
    if (i.params.loop)
        if (i.virtual && i.params.virtual.enabled) l = l + i.virtual.slidesBefore;
        else {
            let r;
            if (o) {
                const m = l * i.params.grid.rows;
                r = i.slides.filter(y => y.getAttribute("data-swiper-slide-index") * 1 === m)[0].column
            } else r = i.getSlideIndexByData(l);
            const c = o ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length,
                {
                    centeredSlides: f
                } = i.params;
            let d = i.params.slidesPerView;
            d === "auto" ? d = i.slidesPerViewDynamic() : (d = Math.ceil(parseFloat(i.params.slidesPerView, 10)), f && d % 2 === 0 && (d = d + 1));
            let h = c - r < d;
            if (f && (h = h || r < Math.ceil(d / 2)), h) {
                const m = f ? r < i.activeIndex ? "prev" : "next" : r - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
                i.loopFix({
                    direction: m,
                    slideTo: !0,
                    activeSlideIndex: m === "next" ? r + 1 : r - c + 1,
                    slideRealIndex: m === "next" ? i.realIndex : void 0
                })
            }
            if (o) {
                const m = l * i.params.grid.rows;
                l = i.slides.filter(y => y.getAttribute("data-swiper-slide-index") * 1 === m)[0].column
            } else l = i.getSlideIndexByData(l)
        } return requestAnimationFrame(() => {
        i.slideTo(l, t, s, a)
    }), i
}

function gP(e, t, s) {
    e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
    const a = this,
        {
            enabled: i,
            params: o,
            animating: l
        } = a;
    if (!i || a.destroyed) return a;
    let r = o.slidesPerGroup;
    o.slidesPerView === "auto" && o.slidesPerGroup === 1 && o.slidesPerGroupAuto && (r = Math.max(a.slidesPerViewDynamic("current", !0), 1));
    const c = a.activeIndex < o.slidesPerGroupSkip ? 1 : r,
        f = a.virtual && o.virtual.enabled;
    if (o.loop) {
        if (l && !f && o.loopPreventsSliding) return !1;
        if (a.loopFix({
                direction: "next"
            }), a._clientLeft = a.wrapperEl.clientLeft, a.activeIndex === a.slides.length - 1 && o.cssMode) return requestAnimationFrame(() => {
            a.slideTo(a.activeIndex + c, e, t, s)
        }), !0
    }
    return o.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + c, e, t, s)
}

function vP(e, t, s) {
    e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
    const a = this,
        {
            params: i,
            snapGrid: o,
            slidesGrid: l,
            rtlTranslate: r,
            enabled: c,
            animating: f
        } = a;
    if (!c || a.destroyed) return a;
    const d = a.virtual && i.virtual.enabled;
    if (i.loop) {
        if (f && !d && i.loopPreventsSliding) return !1;
        a.loopFix({
            direction: "prev"
        }), a._clientLeft = a.wrapperEl.clientLeft
    }
    const h = r ? a.translate : -a.translate;

    function m(S) {
        return S < 0 ? -Math.floor(Math.abs(S)) : Math.floor(S)
    }
    const y = m(h),
        b = o.map(S => m(S));
    let M = o[b.indexOf(y) - 1];
    if (typeof M > "u" && i.cssMode) {
        let S;
        o.forEach((Z, C) => {
            y >= Z && (S = C)
        }), typeof S < "u" && (M = o[S > 0 ? S - 1 : S])
    }
    let V = 0;
    if (typeof M < "u" && (V = l.indexOf(M), V < 0 && (V = a.activeIndex - 1), i.slidesPerView === "auto" && i.slidesPerGroup === 1 && i.slidesPerGroupAuto && (V = V - a.slidesPerViewDynamic("previous", !0) + 1, V = Math.max(V, 0))), i.rewind && a.isBeginning) {
        const S = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
        return a.slideTo(S, e, t, s)
    } else if (i.loop && a.activeIndex === 0 && i.cssMode) return requestAnimationFrame(() => {
        a.slideTo(V, e, t, s)
    }), !0;
    return a.slideTo(V, e, t, s)
}

function yP(e, t, s) {
    e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
    const a = this;
    if (!a.destroyed) return a.slideTo(a.activeIndex, e, t, s)
}

function _P(e, t, s, a) {
    e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), a === void 0 && (a = .5);
    const i = this;
    if (i.destroyed) return;
    let o = i.activeIndex;
    const l = Math.min(i.params.slidesPerGroupSkip, o),
        r = l + Math.floor((o - l) / i.params.slidesPerGroup),
        c = i.rtlTranslate ? i.translate : -i.translate;
    if (c >= i.snapGrid[r]) {
        const f = i.snapGrid[r],
            d = i.snapGrid[r + 1];
        c - f > (d - f) * a && (o += i.params.slidesPerGroup)
    } else {
        const f = i.snapGrid[r - 1],
            d = i.snapGrid[r];
        c - f <= (d - f) * a && (o -= i.params.slidesPerGroup)
    }
    return o = Math.max(o, 0), o = Math.min(o, i.slidesGrid.length - 1), i.slideTo(o, e, t, s)
}

function xP() {
    const e = this;
    if (e.destroyed) return;
    const {
        params: t,
        slidesEl: s
    } = e, a = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
    let i = e.clickedIndex,
        o;
    const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
    if (t.loop) {
        if (e.animating) return;
        o = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? i < e.loopedSlides - a / 2 || i > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), i = e.getSlideIndex(_t(s, `${l}[data-swiper-slide-index="${o}"]`)[0]), fa(() => {
            e.slideTo(i)
        })) : e.slideTo(i) : i > e.slides.length - a ? (e.loopFix(), i = e.getSlideIndex(_t(s, `${l}[data-swiper-slide-index="${o}"]`)[0]), fa(() => {
            e.slideTo(i)
        })) : e.slideTo(i)
    } else e.slideTo(i)
}
var bP = {
    slideTo: hP,
    slideToLoop: mP,
    slideNext: gP,
    slidePrev: vP,
    slideReset: yP,
    slideToClosest: _P,
    slideToClickedSlide: xP
};

function wP(e) {
    const t = this,
        {
            params: s,
            slidesEl: a
        } = t;
    if (!s.loop || t.virtual && t.params.virtual.enabled) return;
    const i = () => {
            _t(a, `.${s.slideClass}, swiper-slide`).forEach((h, m) => {
                h.setAttribute("data-swiper-slide-index", m)
            })
        },
        o = t.grid && s.grid && s.grid.rows > 1,
        l = s.slidesPerGroup * (o ? s.grid.rows : 1),
        r = t.slides.length % l !== 0,
        c = o && t.slides.length % s.grid.rows !== 0,
        f = d => {
            for (let h = 0; h < d; h += 1) {
                const m = t.isElement ? F0("swiper-slide", [s.slideBlankClass]) : F0("div", [s.slideClass, s.slideBlankClass]);
                t.slidesEl.append(m)
            }
        };
    if (r) {
        if (s.loopAddBlankSlides) {
            const d = l - t.slides.length % l;
            f(d), t.recalcSlides(), t.updateSlides()
        } else D0("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        i()
    } else if (c) {
        if (s.loopAddBlankSlides) {
            const d = s.grid.rows - t.slides.length % s.grid.rows;
            f(d), t.recalcSlides(), t.updateSlides()
        } else D0("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        i()
    } else i();
    t.loopFix({
        slideRealIndex: e,
        direction: s.centeredSlides ? void 0 : "next"
    })
}

function $P(e) {
    let {
        slideRealIndex: t,
        slideTo: s = !0,
        direction: a,
        setTranslate: i,
        activeSlideIndex: o,
        byController: l,
        byMousewheel: r
    } = e === void 0 ? {} : e;
    const c = this;
    if (!c.params.loop) return;
    c.emit("beforeLoopFix");
    const {
        slides: f,
        allowSlidePrev: d,
        allowSlideNext: h,
        slidesEl: m,
        params: y
    } = c, {
        centeredSlides: b
    } = y;
    if (c.allowSlidePrev = !0, c.allowSlideNext = !0, c.virtual && y.virtual.enabled) {
        s && (!y.centeredSlides && c.snapIndex === 0 ? c.slideTo(c.virtual.slides.length, 0, !1, !0) : y.centeredSlides && c.snapIndex < y.slidesPerView ? c.slideTo(c.virtual.slides.length + c.snapIndex, 0, !1, !0) : c.snapIndex === c.snapGrid.length - 1 && c.slideTo(c.virtual.slidesBefore, 0, !1, !0)), c.allowSlidePrev = d, c.allowSlideNext = h, c.emit("loopFix");
        return
    }
    let M = y.slidesPerView;
    M === "auto" ? M = c.slidesPerViewDynamic() : (M = Math.ceil(parseFloat(y.slidesPerView, 10)), b && M % 2 === 0 && (M = M + 1));
    const V = y.slidesPerGroupAuto ? M : y.slidesPerGroup;
    let S = V;
    S % V !== 0 && (S += V - S % V), S += y.loopAdditionalSlides, c.loopedSlides = S;
    const Z = c.grid && y.grid && y.grid.rows > 1;
    f.length < M + S ? D0("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : Z && y.grid.fill === "row" && D0("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const C = [],
        E = [];
    let z = c.activeIndex;
    typeof o > "u" ? o = c.getSlideIndex(f.filter(Y => Y.classList.contains(y.slideActiveClass))[0]) : z = o;
    const j = a === "next" || !a,
        se = a === "prev" || !a;
    let O = 0,
        k = 0;
    const B = Z ? Math.ceil(f.length / y.grid.rows) : f.length,
        ce = (Z ? f[o].column : o) + (b && typeof i > "u" ? -M / 2 + .5 : 0);
    if (ce < S) {
        O = Math.max(S - ce, V);
        for (let Y = 0; Y < S - ce; Y += 1) {
            const de = Y - Math.floor(Y / B) * B;
            if (Z) {
                const be = B - de - 1;
                for (let fe = f.length - 1; fe >= 0; fe -= 1) f[fe].column === be && C.push(fe)
            } else C.push(B - de - 1)
        }
    } else if (ce + M > B - S) {
        k = Math.max(ce - (B - S * 2), V);
        for (let Y = 0; Y < k; Y += 1) {
            const de = Y - Math.floor(Y / B) * B;
            Z ? f.forEach((be, fe) => {
                be.column === de && E.push(fe)
            }) : E.push(de)
        }
    }
    if (c.__preventObserver__ = !0, requestAnimationFrame(() => {
            c.__preventObserver__ = !1
        }), se && C.forEach(Y => {
            f[Y].swiperLoopMoveDOM = !0, m.prepend(f[Y]), f[Y].swiperLoopMoveDOM = !1
        }), j && E.forEach(Y => {
            f[Y].swiperLoopMoveDOM = !0, m.append(f[Y]), f[Y].swiperLoopMoveDOM = !1
        }), c.recalcSlides(), y.slidesPerView === "auto" ? c.updateSlides() : Z && (C.length > 0 && se || E.length > 0 && j) && c.slides.forEach((Y, de) => {
            c.grid.updateSlide(de, Y, c.slides)
        }), y.watchSlidesProgress && c.updateSlidesOffset(), s) {
        if (C.length > 0 && se) {
            if (typeof t > "u") {
                const Y = c.slidesGrid[z],
                    be = c.slidesGrid[z + O] - Y;
                r ? c.setTranslate(c.translate - be) : (c.slideTo(z + O, 0, !1, !0), i && (c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - be, c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - be))
            } else if (i) {
                const Y = Z ? C.length / y.grid.rows : C.length;
                c.slideTo(c.activeIndex + Y, 0, !1, !0), c.touchEventsData.currentTranslate = c.translate
            }
        } else if (E.length > 0 && j)
            if (typeof t > "u") {
                const Y = c.slidesGrid[z],
                    be = c.slidesGrid[z - k] - Y;
                r ? c.setTranslate(c.translate - be) : (c.slideTo(z - k, 0, !1, !0), i && (c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - be, c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - be))
            } else {
                const Y = Z ? E.length / y.grid.rows : E.length;
                c.slideTo(c.activeIndex - Y, 0, !1, !0)
            }
    }
    if (c.allowSlidePrev = d, c.allowSlideNext = h, c.controller && c.controller.control && !l) {
        const Y = {
            slideRealIndex: t,
            direction: a,
            setTranslate: i,
            activeSlideIndex: o,
            byController: !0
        };
        Array.isArray(c.controller.control) ? c.controller.control.forEach(de => {
            !de.destroyed && de.params.loop && de.loopFix({
                ...Y,
                slideTo: de.params.slidesPerView === y.slidesPerView ? s : !1
            })
        }) : c.controller.control instanceof c.constructor && c.controller.control.params.loop && c.controller.control.loopFix({
            ...Y,
            slideTo: c.controller.control.params.slidesPerView === y.slidesPerView ? s : !1
        })
    }
    c.emit("loopFix")
}

function AP() {
    const e = this,
        {
            params: t,
            slidesEl: s
        } = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled) return;
    e.recalcSlides();
    const a = [];
    e.slides.forEach(i => {
        const o = typeof i.swiperSlideIndex > "u" ? i.getAttribute("data-swiper-slide-index") * 1 : i.swiperSlideIndex;
        a[o] = i
    }), e.slides.forEach(i => {
        i.removeAttribute("data-swiper-slide-index")
    }), a.forEach(i => {
        s.append(i)
    }), e.recalcSlides(), e.slideTo(e.realIndex, 0)
}
var SP = {
    loopCreate: wP,
    loopFix: $P,
    loopDestroy: AP
};

function MP(e) {
    const t = this;
    if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
    const s = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
    t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
        t.__preventObserver__ = !1
    })
}

function CP() {
    const e = this;
    e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
        e.__preventObserver__ = !1
    }))
}
var HP = {
    setGrabCursor: MP,
    unsetGrabCursor: CP
};

function ZP(e, t) {
    t === void 0 && (t = this);

    function s(a) {
        if (!a || a === Ht() || a === lt()) return null;
        a.assignedSlot && (a = a.assignedSlot);
        const i = a.closest(e);
        return !i && !a.getRootNode ? null : i || s(a.getRootNode().host)
    }
    return s(t)
}

function dn(e, t, s) {
    const a = lt(),
        {
            params: i
        } = e,
        o = i.edgeSwipeDetection,
        l = i.edgeSwipeThreshold;
    return o && (s <= l || s >= a.innerWidth - l) ? o === "prevent" ? (t.preventDefault(), !0) : !1 : !0
}

function TP(e) {
    const t = this,
        s = Ht();
    let a = e;
    a.originalEvent && (a = a.originalEvent);
    const i = t.touchEventsData;
    if (a.type === "pointerdown") {
        if (i.pointerId !== null && i.pointerId !== a.pointerId) return;
        i.pointerId = a.pointerId
    } else a.type === "touchstart" && a.targetTouches.length === 1 && (i.touchId = a.targetTouches[0].identifier);
    if (a.type === "touchstart") {
        dn(t, a, a.targetTouches[0].pageX);
        return
    }
    const {
        params: o,
        touches: l,
        enabled: r
    } = t;
    if (!r || !o.simulateTouch && a.pointerType === "mouse" || t.animating && o.preventInteractionOnTransition) return;
    !t.animating && o.cssMode && o.loop && t.loopFix();
    let c = a.target;
    if (o.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(c) || "which" in a && a.which === 3 || "button" in a && a.button > 0 || i.isTouched && i.isMoved) return;
    const f = !!o.noSwipingClass && o.noSwipingClass !== "",
        d = a.composedPath ? a.composedPath() : a.path;
    f && a.target && a.target.shadowRoot && d && (c = d[0]);
    const h = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
        m = !!(a.target && a.target.shadowRoot);
    if (o.noSwiping && (m ? ZP(h, c) : c.closest(h))) {
        t.allowClick = !0;
        return
    }
    if (o.swipeHandler && !c.closest(o.swipeHandler)) return;
    l.currentX = a.pageX, l.currentY = a.pageY;
    const y = l.currentX,
        b = l.currentY;
    if (!dn(t, a, y)) return;
    Object.assign(i, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }), l.startX = y, l.startY = b, i.touchStartTime = t1(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, o.threshold > 0 && (i.allowThresholdMove = !1);
    let M = !0;
    c.matches(i.focusableElements) && (M = !1, c.nodeName === "SELECT" && (i.isTouched = !1)), s.activeElement && s.activeElement.matches(i.focusableElements) && s.activeElement !== c && s.activeElement.blur();
    const V = M && t.allowTouchMove && o.touchStartPreventDefault;
    (o.touchStartForcePreventDefault || V) && !c.isContentEditable && a.preventDefault(), o.freeMode && o.freeMode.enabled && t.freeMode && t.animating && !o.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", a)
}

function VP(e) {
    const t = Ht(),
        s = this,
        a = s.touchEventsData,
        {
            params: i,
            touches: o,
            rtlTranslate: l,
            enabled: r
        } = s;
    if (!r || !i.simulateTouch && e.pointerType === "mouse") return;
    let c = e;
    if (c.originalEvent && (c = c.originalEvent), c.type === "pointermove" && (a.touchId !== null || c.pointerId !== a.pointerId)) return;
    let f;
    if (c.type === "touchmove") {
        if (f = [...c.changedTouches].filter(j => j.identifier === a.touchId)[0], !f || f.identifier !== a.touchId) return
    } else f = c;
    if (!a.isTouched) {
        a.startMoving && a.isScrolling && s.emit("touchMoveOpposite", c);
        return
    }
    const d = f.pageX,
        h = f.pageY;
    if (c.preventedByNestedSwiper) {
        o.startX = d, o.startY = h;
        return
    }
    if (!s.allowTouchMove) {
        c.target.matches(a.focusableElements) || (s.allowClick = !1), a.isTouched && (Object.assign(o, {
            startX: d,
            startY: h,
            currentX: d,
            currentY: h
        }), a.touchStartTime = t1());
        return
    }
    if (i.touchReleaseOnEdges && !i.loop) {
        if (s.isVertical()) {
            if (h < o.startY && s.translate <= s.maxTranslate() || h > o.startY && s.translate >= s.minTranslate()) {
                a.isTouched = !1, a.isMoved = !1;
                return
            }
        } else if (d < o.startX && s.translate <= s.maxTranslate() || d > o.startX && s.translate >= s.minTranslate()) return
    }
    if (t.activeElement && c.target === t.activeElement && c.target.matches(a.focusableElements)) {
        a.isMoved = !0, s.allowClick = !1;
        return
    }
    a.allowTouchCallbacks && s.emit("touchMove", c), o.previousX = o.currentX, o.previousY = o.currentY, o.currentX = d, o.currentY = h;
    const m = o.currentX - o.startX,
        y = o.currentY - o.startY;
    if (s.params.threshold && Math.sqrt(m ** 2 + y ** 2) < s.params.threshold) return;
    if (typeof a.isScrolling > "u") {
        let j;
        s.isHorizontal() && o.currentY === o.startY || s.isVertical() && o.currentX === o.startX ? a.isScrolling = !1 : m * m + y * y >= 25 && (j = Math.atan2(Math.abs(y), Math.abs(m)) * 180 / Math.PI, a.isScrolling = s.isHorizontal() ? j > i.touchAngle : 90 - j > i.touchAngle)
    }
    if (a.isScrolling && s.emit("touchMoveOpposite", c), typeof a.startMoving > "u" && (o.currentX !== o.startX || o.currentY !== o.startY) && (a.startMoving = !0), a.isScrolling) {
        a.isTouched = !1;
        return
    }
    if (!a.startMoving) return;
    s.allowClick = !1, !i.cssMode && c.cancelable && c.preventDefault(), i.touchMoveStopPropagation && !i.nested && c.stopPropagation();
    let b = s.isHorizontal() ? m : y,
        M = s.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
    i.oneWayMovement && (b = Math.abs(b) * (l ? 1 : -1), M = Math.abs(M) * (l ? 1 : -1)), o.diff = b, b *= i.touchRatio, l && (b = -b, M = -M);
    const V = s.touchesDirection;
    s.swipeDirection = b > 0 ? "prev" : "next", s.touchesDirection = M > 0 ? "prev" : "next";
    const S = s.params.loop && !i.cssMode,
        Z = s.touchesDirection === "next" && s.allowSlideNext || s.touchesDirection === "prev" && s.allowSlidePrev;
    if (!a.isMoved) {
        if (S && Z && s.loopFix({
                direction: s.swipeDirection
            }), a.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
            const j = new window.CustomEvent("transitionend", {
                bubbles: !0,
                cancelable: !0
            });
            s.wrapperEl.dispatchEvent(j)
        }
        a.allowMomentumBounce = !1, i.grabCursor && (s.allowSlideNext === !0 || s.allowSlidePrev === !0) && s.setGrabCursor(!0), s.emit("sliderFirstMove", c)
    }
    let C;
    if (new Date().getTime(), a.isMoved && a.allowThresholdMove && V !== s.touchesDirection && S && Z && Math.abs(b) >= 1) {
        Object.assign(o, {
            startX: d,
            startY: h,
            currentX: d,
            currentY: h,
            startTranslate: a.currentTranslate
        }), a.loopSwapReset = !0, a.startTranslate = a.currentTranslate;
        return
    }
    s.emit("sliderMove", c), a.isMoved = !0, a.currentTranslate = b + a.startTranslate;
    let E = !0,
        z = i.resistanceRatio;
    if (i.touchReleaseOnEdges && (z = 0), b > 0 ? (S && Z && !C && a.allowThresholdMove && a.currentTranslate > (i.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] : s.minTranslate()) && s.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
        }), a.currentTranslate > s.minTranslate() && (E = !1, i.resistance && (a.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + a.startTranslate + b) ** z))) : b < 0 && (S && Z && !C && a.allowThresholdMove && a.currentTranslate < (i.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] : s.maxTranslate()) && s.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: s.slides.length - (i.slidesPerView === "auto" ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10)))
        }), a.currentTranslate < s.maxTranslate() && (E = !1, i.resistance && (a.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - a.startTranslate - b) ** z))), E && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && s.swipeDirection === "next" && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate), !s.allowSlidePrev && s.swipeDirection === "prev" && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate), !s.allowSlidePrev && !s.allowSlideNext && (a.currentTranslate = a.startTranslate), i.threshold > 0)
        if (Math.abs(b) > i.threshold || a.allowThresholdMove) {
            if (!a.allowThresholdMove) {
                a.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, a.currentTranslate = a.startTranslate, o.diff = s.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY;
                return
            }
        } else {
            a.currentTranslate = a.startTranslate;
            return
        }! i.followFinger || i.cssMode || ((i.freeMode && i.freeMode.enabled && s.freeMode || i.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), i.freeMode && i.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(a.currentTranslate), s.setTranslate(a.currentTranslate))
}

function kP(e) {
    const t = this,
        s = t.touchEventsData;
    let a = e;
    a.originalEvent && (a = a.originalEvent);
    let i;
    if (a.type === "touchend" || a.type === "touchcancel") {
        if (i = [...a.changedTouches].filter(z => z.identifier === s.touchId)[0], !i || i.identifier !== s.touchId) return
    } else {
        if (s.touchId !== null || a.pointerId !== s.pointerId) return;
        i = a
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(a.type) && !(["pointercancel", "contextmenu"].includes(a.type) && (t.browser.isSafari || t.browser.isWebView))) return;
    s.pointerId = null, s.touchId = null;
    const {
        params: l,
        touches: r,
        rtlTranslate: c,
        slidesGrid: f,
        enabled: d
    } = t;
    if (!d || !l.simulateTouch && a.pointerType === "mouse") return;
    if (s.allowTouchCallbacks && t.emit("touchEnd", a), s.allowTouchCallbacks = !1, !s.isTouched) {
        s.isMoved && l.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, s.startMoving = !1;
        return
    }
    l.grabCursor && s.isMoved && s.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
    const h = t1(),
        m = h - s.touchStartTime;
    if (t.allowClick) {
        const z = a.path || a.composedPath && a.composedPath();
        t.updateClickedSlide(z && z[0] || a.target, z), t.emit("tap click", a), m < 300 && h - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", a)
    }
    if (s.lastClickTime = t1(), fa(() => {
            t.destroyed || (t.allowClick = !0)
        }), !s.isTouched || !s.isMoved || !t.swipeDirection || r.diff === 0 && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset) {
        s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
        return
    }
    s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
    let y;
    if (l.followFinger ? y = c ? t.translate : -t.translate : y = -s.currentTranslate, l.cssMode) return;
    if (l.freeMode && l.freeMode.enabled) {
        t.freeMode.onTouchEnd({
            currentPos: y
        });
        return
    }
    const b = y >= -t.maxTranslate() && !t.params.loop;
    let M = 0,
        V = t.slidesSizesGrid[0];
    for (let z = 0; z < f.length; z += z < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup) {
        const j = z < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
        typeof f[z + j] < "u" ? (b || y >= f[z] && y < f[z + j]) && (M = z, V = f[z + j] - f[z]) : (b || y >= f[z]) && (M = z, V = f[f.length - 1] - f[f.length - 2])
    }
    let S = null,
        Z = null;
    l.rewind && (t.isBeginning ? Z = l.virtual && l.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (S = 0));
    const C = (y - f[M]) / V,
        E = M < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
    if (m > l.longSwipesMs) {
        if (!l.longSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.swipeDirection === "next" && (C >= l.longSwipesRatio ? t.slideTo(l.rewind && t.isEnd ? S : M + E) : t.slideTo(M)), t.swipeDirection === "prev" && (C > 1 - l.longSwipesRatio ? t.slideTo(M + E) : Z !== null && C < 0 && Math.abs(C) > l.longSwipesRatio ? t.slideTo(Z) : t.slideTo(M))
    } else {
        if (!l.shortSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.navigation && (a.target === t.navigation.nextEl || a.target === t.navigation.prevEl) ? a.target === t.navigation.nextEl ? t.slideTo(M + E) : t.slideTo(M) : (t.swipeDirection === "next" && t.slideTo(S !== null ? S : M + E), t.swipeDirection === "prev" && t.slideTo(Z !== null ? Z : M))
    }
}

function un() {
    const e = this,
        {
            params: t,
            el: s
        } = e;
    if (s && s.offsetWidth === 0) return;
    t.breakpoints && e.setBreakpoint();
    const {
        allowSlideNext: a,
        allowSlidePrev: i,
        snapGrid: o
    } = e, l = e.virtual && e.params.virtual.enabled;
    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
    const r = l && t.loop;
    (t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !r ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.params.loop && !l ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
    }, 500)), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow()
}

function PP(e) {
    const t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
}

function LP() {
    const e = this,
        {
            wrapperEl: t,
            rtlTranslate: s,
            enabled: a
        } = e;
    if (!a) return;
    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, e.translate === 0 && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
    let i;
    const o = e.maxTranslate() - e.minTranslate();
    o === 0 ? i = 0 : i = (e.translate - e.minTranslate()) / o, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
}

function EP(e) {
    const t = this;
    T0(t, e.target), !(t.params.cssMode || t.params.slidesPerView !== "auto" && !t.params.autoHeight) && t.update()
}

function BP() {
    const e = this;
    e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
}
const fl = (e, t) => {
    const s = Ht(),
        {
            params: a,
            el: i,
            wrapperEl: o,
            device: l
        } = e,
        r = !!a.nested,
        c = t === "on" ? "addEventListener" : "removeEventListener",
        f = t;
    s[c]("touchstart", e.onDocumentTouchStart, {
        passive: !1,
        capture: r
    }), i[c]("touchstart", e.onTouchStart, {
        passive: !1
    }), i[c]("pointerdown", e.onTouchStart, {
        passive: !1
    }), s[c]("touchmove", e.onTouchMove, {
        passive: !1,
        capture: r
    }), s[c]("pointermove", e.onTouchMove, {
        passive: !1,
        capture: r
    }), s[c]("touchend", e.onTouchEnd, {
        passive: !0
    }), s[c]("pointerup", e.onTouchEnd, {
        passive: !0
    }), s[c]("pointercancel", e.onTouchEnd, {
        passive: !0
    }), s[c]("touchcancel", e.onTouchEnd, {
        passive: !0
    }), s[c]("pointerout", e.onTouchEnd, {
        passive: !0
    }), s[c]("pointerleave", e.onTouchEnd, {
        passive: !0
    }), s[c]("contextmenu", e.onTouchEnd, {
        passive: !0
    }), (a.preventClicks || a.preventClicksPropagation) && i[c]("click", e.onClick, !0), a.cssMode && o[c]("scroll", e.onScroll), a.updateOnWindowResize ? e[f](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", un, !0) : e[f]("observerUpdate", un, !0), i[c]("load", e.onLoad, {
        capture: !0
    })
};

function IP() {
    const e = this,
        {
            params: t
        } = e;
    e.onTouchStart = TP.bind(e), e.onTouchMove = VP.bind(e), e.onTouchEnd = kP.bind(e), e.onDocumentTouchStart = BP.bind(e), t.cssMode && (e.onScroll = LP.bind(e)), e.onClick = PP.bind(e), e.onLoad = EP.bind(e), fl(e, "on")
}

function OP() {
    fl(this, "off")
}
var NP = {
    attachEvents: IP,
    detachEvents: OP
};
const pn = (e, t) => e.grid && t.grid && t.grid.rows > 1;

function zP() {
    const e = this,
        {
            realIndex: t,
            initialized: s,
            params: a,
            el: i
        } = e,
        o = a.breakpoints;
    if (!o || o && Object.keys(o).length === 0) return;
    const l = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
    if (!l || e.currentBreakpoint === l) return;
    const c = (l in o ? o[l] : void 0) || e.originalParams,
        f = pn(e, a),
        d = pn(e, c),
        h = a.enabled;
    f && !d ? (i.classList.remove(`${a.containerModifierClass}grid`, `${a.containerModifierClass}grid-column`), e.emitContainerClasses()) : !f && d && (i.classList.add(`${a.containerModifierClass}grid`), (c.grid.fill && c.grid.fill === "column" || !c.grid.fill && a.grid.fill === "column") && i.classList.add(`${a.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(S => {
        if (typeof c[S] > "u") return;
        const Z = a[S] && a[S].enabled,
            C = c[S] && c[S].enabled;
        Z && !C && e[S].disable(), !Z && C && e[S].enable()
    });
    const m = c.direction && c.direction !== a.direction,
        y = a.loop && (c.slidesPerView !== a.slidesPerView || m),
        b = a.loop;
    m && s && e.changeDirection(), nt(e.params, c);
    const M = e.params.enabled,
        V = e.params.loop;
    Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev
    }), h && !M ? e.disable() : !h && M && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", c), s && (y ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !b && V ? (e.loopCreate(t), e.updateSlides()) : b && !V && e.loopDestroy()), e.emit("breakpoint", c)
}

function jP(e, t, s) {
    if (t === void 0 && (t = "window"), !e || t === "container" && !s) return;
    let a = !1;
    const i = lt(),
        o = t === "window" ? i.innerHeight : s.clientHeight,
        l = Object.keys(e).map(r => {
            if (typeof r == "string" && r.indexOf("@") === 0) {
                const c = parseFloat(r.substr(1));
                return {
                    value: o * c,
                    point: r
                }
            }
            return {
                value: r,
                point: r
            }
        });
    l.sort((r, c) => parseInt(r.value, 10) - parseInt(c.value, 10));
    for (let r = 0; r < l.length; r += 1) {
        const {
            point: c,
            value: f
        } = l[r];
        t === "window" ? i.matchMedia(`(min-width: ${f}px)`).matches && (a = c) : f <= s.clientWidth && (a = c)
    }
    return a || "max"
}
var RP = {
    setBreakpoint: zP,
    getBreakpoint: jP
};

function DP(e, t) {
    const s = [];
    return e.forEach(a => {
        typeof a == "object" ? Object.keys(a).forEach(i => {
            a[i] && s.push(t + i)
        }) : typeof a == "string" && s.push(t + a)
    }), s
}

function FP() {
    const e = this,
        {
            classNames: t,
            params: s,
            rtl: a,
            el: i,
            device: o
        } = e,
        l = DP(["initialized", s.direction, {
            "free-mode": e.params.freeMode && s.freeMode.enabled
        }, {
            autoheight: s.autoHeight
        }, {
            rtl: a
        }, {
            grid: s.grid && s.grid.rows > 1
        }, {
            "grid-column": s.grid && s.grid.rows > 1 && s.grid.fill === "column"
        }, {
            android: o.android
        }, {
            ios: o.ios
        }, {
            "css-mode": s.cssMode
        }, {
            centered: s.cssMode && s.centeredSlides
        }, {
            "watch-progress": s.watchSlidesProgress
        }], s.containerModifierClass);
    t.push(...l), i.classList.add(...t), e.emitContainerClasses()
}

function qP() {
    const e = this,
        {
            el: t,
            classNames: s
        } = e;
    t.classList.remove(...s), e.emitContainerClasses()
}
var WP = {
    addClasses: FP,
    removeClasses: qP
};

function GP() {
    const e = this,
        {
            isLocked: t,
            params: s
        } = e,
        {
            slidesOffsetBefore: a
        } = s;
    if (a) {
        const i = e.slides.length - 1,
            o = e.slidesGrid[i] + e.slidesSizesGrid[i] + a * 2;
        e.isLocked = e.size > o
    } else e.isLocked = e.snapGrid.length === 1;
    s.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked), s.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
}
var UP = {
        checkOverflow: GP
    },
    ma = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

function YP(e, t) {
    return function (a) {
        a === void 0 && (a = {});
        const i = Object.keys(a)[0],
            o = a[i];
        if (typeof o != "object" || o === null) {
            nt(t, a);
            return
        }
        if (e[i] === !0 && (e[i] = {
                enabled: !0
            }), i === "navigation" && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0), ["pagination", "scrollbar"].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0), !(i in e && "enabled" in o)) {
            nt(t, a);
            return
        }
        typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0), e[i] || (e[i] = {
            enabled: !1
        }), nt(t, a)
    }
}
const Os = {
        eventsEmitter: Wk,
        update: aP,
        translate: cP,
        transition: fP,
        slide: bP,
        loop: SP,
        grabCursor: HP,
        events: NP,
        breakpoints: RP,
        checkOverflow: UP,
        classes: WP
    },
    Ns = {};
let Ga = class St {
    constructor() {
        let t, s;
        for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
        i.length === 1 && i[0].constructor && Object.prototype.toString.call(i[0]).slice(8, -1) === "Object" ? s = i[0] : [t, s] = i, s || (s = {}), s = nt({}, s), t && !s.el && (s.el = t);
        const l = Ht();
        if (s.el && typeof s.el == "string" && l.querySelectorAll(s.el).length > 1) {
            const d = [];
            return l.querySelectorAll(s.el).forEach(h => {
                const m = nt({}, s, {
                    el: h
                });
                d.push(new St(m))
            }), d
        }
        const r = this;
        r.__swiper__ = !0, r.support = dl(), r.device = ul({
            userAgent: s.userAgent
        }), r.browser = Dk(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], s.modules && Array.isArray(s.modules) && r.modules.push(...s.modules);
        const c = {};
        r.modules.forEach(d => {
            d({
                params: s,
                swiper: r,
                extendParams: YP(s, c),
                on: r.on.bind(r),
                once: r.once.bind(r),
                off: r.off.bind(r),
                emit: r.emit.bind(r)
            })
        });
        const f = nt({}, ma, c);
        return r.params = nt({}, f, Ns, s), r.originalParams = nt({}, r.params), r.passedParams = nt({}, s), r.params && r.params.on && Object.keys(r.params.on).forEach(d => {
            r.on(d, r.params.on[d])
        }), r.params && r.params.onAny && r.onAny(r.params.onAny), Object.assign(r, {
            enabled: r.params.enabled,
            el: t,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return r.params.direction === "horizontal"
            },
            isVertical() {
                return r.params.direction === "vertical"
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: r.params.allowSlideNext,
            allowSlidePrev: r.params.allowSlidePrev,
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: r.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null
            },
            allowClick: !0,
            allowTouchMove: r.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }), r.emit("_swiper"), r.params.init && r.init(), r
    }
    getDirectionLabel(t) {
        return this.isHorizontal() ? t : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        } [t]
    }
    getSlideIndex(t) {
        const {
            slidesEl: s,
            params: a
        } = this, i = _t(s, `.${a.slideClass}, swiper-slide`), o = rn(i[0]);
        return rn(t) - o
    }
    getSlideIndexByData(t) {
        return this.getSlideIndex(this.slides.filter(s => s.getAttribute("data-swiper-slide-index") * 1 === t)[0])
    }
    recalcSlides() {
        const t = this,
            {
                slidesEl: s,
                params: a
            } = t;
        t.slides = _t(s, `.${a.slideClass}, swiper-slide`)
    }
    enable() {
        const t = this;
        t.enabled || (t.enabled = !0, t.params.grabCursor && t.setGrabCursor(), t.emit("enable"))
    }
    disable() {
        const t = this;
        t.enabled && (t.enabled = !1, t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable"))
    }
    setProgress(t, s) {
        const a = this;
        t = Math.min(Math.max(t, 0), 1);
        const i = a.minTranslate(),
            l = (a.maxTranslate() - i) * t + i;
        a.translateTo(l, typeof s > "u" ? 0 : s), a.updateActiveIndex(), a.updateSlidesClasses()
    }
    emitContainerClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el) return;
        const s = t.el.className.split(" ").filter(a => a.indexOf("swiper") === 0 || a.indexOf(t.params.containerModifierClass) === 0);
        t.emit("_containerClasses", s.join(" "))
    }
    getSlideClasses(t) {
        const s = this;
        return s.destroyed ? "" : t.className.split(" ").filter(a => a.indexOf("swiper-slide") === 0 || a.indexOf(s.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el) return;
        const s = [];
        t.slides.forEach(a => {
            const i = t.getSlideClasses(a);
            s.push({
                slideEl: a,
                classNames: i
            }), t.emit("_slideClass", a, i)
        }), t.emit("_slideClasses", s)
    }
    slidesPerViewDynamic(t, s) {
        t === void 0 && (t = "current"), s === void 0 && (s = !1);
        const a = this,
            {
                params: i,
                slides: o,
                slidesGrid: l,
                slidesSizesGrid: r,
                size: c,
                activeIndex: f
            } = a;
        let d = 1;
        if (typeof i.slidesPerView == "number") return i.slidesPerView;
        if (i.centeredSlides) {
            let h = o[f] ? Math.ceil(o[f].swiperSlideSize) : 0,
                m;
            for (let y = f + 1; y < o.length; y += 1) o[y] && !m && (h += Math.ceil(o[y].swiperSlideSize), d += 1, h > c && (m = !0));
            for (let y = f - 1; y >= 0; y -= 1) o[y] && !m && (h += o[y].swiperSlideSize, d += 1, h > c && (m = !0))
        } else if (t === "current")
            for (let h = f + 1; h < o.length; h += 1)(s ? l[h] + r[h] - l[f] < c : l[h] - l[f] < c) && (d += 1);
        else
            for (let h = f - 1; h >= 0; h -= 1) l[f] - l[h] < c && (d += 1);
        return d
    }
    update() {
        const t = this;
        if (!t || t.destroyed) return;
        const {
            snapGrid: s,
            params: a
        } = t;
        a.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach(l => {
            l.complete && T0(t, l)
        }), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();

        function i() {
            const l = t.rtlTranslate ? t.translate * -1 : t.translate,
                r = Math.min(Math.max(l, t.maxTranslate()), t.minTranslate());
            t.setTranslate(r), t.updateActiveIndex(), t.updateSlidesClasses()
        }
        let o;
        if (a.freeMode && a.freeMode.enabled && !a.cssMode) i(), a.autoHeight && t.updateAutoHeight();
        else {
            if ((a.slidesPerView === "auto" || a.slidesPerView > 1) && t.isEnd && !a.centeredSlides) {
                const l = t.virtual && a.virtual.enabled ? t.virtual.slides : t.slides;
                o = t.slideTo(l.length - 1, 0, !1, !0)
            } else o = t.slideTo(t.activeIndex, 0, !1, !0);
            o || i()
        }
        a.watchOverflow && s !== t.snapGrid && t.checkOverflow(), t.emit("update")
    }
    changeDirection(t, s) {
        s === void 0 && (s = !0);
        const a = this,
            i = a.params.direction;
        return t || (t = i === "horizontal" ? "vertical" : "horizontal"), t === i || t !== "horizontal" && t !== "vertical" || (a.el.classList.remove(`${a.params.containerModifierClass}${i}`), a.el.classList.add(`${a.params.containerModifierClass}${t}`), a.emitContainerClasses(), a.params.direction = t, a.slides.forEach(o => {
            t === "vertical" ? o.style.width = "" : o.style.height = ""
        }), a.emit("changeDirection"), s && a.update()), a
    }
    changeLanguageDirection(t) {
        const s = this;
        s.rtl && t === "rtl" || !s.rtl && t === "ltr" || (s.rtl = t === "rtl", s.rtlTranslate = s.params.direction === "horizontal" && s.rtl, s.rtl ? (s.el.classList.add(`${s.params.containerModifierClass}rtl`), s.el.dir = "rtl") : (s.el.classList.remove(`${s.params.containerModifierClass}rtl`), s.el.dir = "ltr"), s.update())
    }
    mount(t) {
        const s = this;
        if (s.mounted) return !0;
        let a = t || s.params.el;
        if (typeof a == "string" && (a = document.querySelector(a)), !a) return !1;
        a.swiper = s, a.parentNode && a.parentNode.host && a.parentNode.host.nodeName === s.params.swiperElementNodeName.toUpperCase() && (s.isElement = !0);
        const i = () => `.${(s.params.wrapperClass||"").trim().split(" ").join(".")}`;
        let l = a && a.shadowRoot && a.shadowRoot.querySelector ? a.shadowRoot.querySelector(i()) : _t(a, i())[0];
        return !l && s.params.createElements && (l = F0("div", s.params.wrapperClass), a.append(l), _t(a, `.${s.params.slideClass}`).forEach(r => {
            l.append(r)
        })), Object.assign(s, {
            el: a,
            wrapperEl: l,
            slidesEl: s.isElement && !a.parentNode.host.slideSlots ? a.parentNode.host : l,
            hostEl: s.isElement ? a.parentNode.host : a,
            mounted: !0,
            rtl: a.dir.toLowerCase() === "rtl" || Nt(a, "direction") === "rtl",
            rtlTranslate: s.params.direction === "horizontal" && (a.dir.toLowerCase() === "rtl" || Nt(a, "direction") === "rtl"),
            wrongRTL: Nt(l, "display") === "-webkit-box"
        }), !0
    }
    init(t) {
        const s = this;
        if (s.initialized || s.mount(t) === !1) return s;
        s.emit("beforeInit"), s.params.breakpoints && s.setBreakpoint(), s.addClasses(), s.updateSize(), s.updateSlides(), s.params.watchOverflow && s.checkOverflow(), s.params.grabCursor && s.enabled && s.setGrabCursor(), s.params.loop && s.virtual && s.params.virtual.enabled ? s.slideTo(s.params.initialSlide + s.virtual.slidesBefore, 0, s.params.runCallbacksOnInit, !1, !0) : s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit, !1, !0), s.params.loop && s.loopCreate(), s.attachEvents();
        const i = [...s.el.querySelectorAll('[loading="lazy"]')];
        return s.isElement && i.push(...s.hostEl.querySelectorAll('[loading="lazy"]')), i.forEach(o => {
            o.complete ? T0(s, o) : o.addEventListener("load", l => {
                T0(s, l.target)
            })
        }), ha(s), s.initialized = !0, ha(s), s.emit("init"), s.emit("afterInit"), s
    }
    destroy(t, s) {
        t === void 0 && (t = !0), s === void 0 && (s = !0);
        const a = this,
            {
                params: i,
                el: o,
                wrapperEl: l,
                slides: r
            } = a;
        return typeof a.params > "u" || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), s && (a.removeClasses(), o.removeAttribute("style"), l.removeAttribute("style"), r && r.length && r.forEach(c => {
            c.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), c.removeAttribute("style"), c.removeAttribute("data-swiper-slide-index")
        })), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(c => {
            a.off(c)
        }), t !== !1 && (a.el.swiper = null, kk(a)), a.destroyed = !0), null
    }
    static extendDefaults(t) {
        nt(Ns, t)
    }
    static get extendedDefaults() {
        return Ns
    }
    static get defaults() {
        return ma
    }
    static installModule(t) {
        St.prototype.__modules__ || (St.prototype.__modules__ = []);
        const s = St.prototype.__modules__;
        typeof t == "function" && s.indexOf(t) < 0 && s.push(t)
    }
    static use(t) {
        return Array.isArray(t) ? (t.forEach(s => St.installModule(s)), St) : (St.installModule(t), St)
    }
};
Object.keys(Os).forEach(e => {
    Object.keys(Os[e]).forEach(t => {
        Ga.prototype[t] = Os[e][t]
    })
});
Ga.use([Fk, qk]);
const hl = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

function a1(e) {
    return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object" && !e.__swiper__
}

function y1(e, t) {
    const s = ["__proto__", "constructor", "prototype"];
    Object.keys(t).filter(a => s.indexOf(a) < 0).forEach(a => {
        typeof e[a] > "u" ? e[a] = t[a] : a1(t[a]) && a1(e[a]) && Object.keys(t[a]).length > 0 ? t[a].__swiper__ ? e[a] = t[a] : y1(e[a], t[a]) : e[a] = t[a]
    })
}

function ml(e) {
    return e === void 0 && (e = {}), e.navigation && typeof e.navigation.nextEl > "u" && typeof e.navigation.prevEl > "u"
}

function gl(e) {
    return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u"
}

function vl(e) {
    return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u"
}

function yl(e) {
    e === void 0 && (e = "");
    const t = e.split(" ").map(a => a.trim()).filter(a => !!a),
        s = [];
    return t.forEach(a => {
        s.indexOf(a) < 0 && s.push(a)
    }), s.join(" ")
}

function KP(e) {
    return e === void 0 && (e = ""), e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
}

function JP(e) {
    let {
        swiper: t,
        slides: s,
        passedParams: a,
        changedParams: i,
        nextEl: o,
        prevEl: l,
        scrollbarEl: r,
        paginationEl: c
    } = e;
    const f = i.filter(k => k !== "children" && k !== "direction" && k !== "wrapperClass"),
        {
            params: d,
            pagination: h,
            navigation: m,
            scrollbar: y,
            virtual: b,
            thumbs: M
        } = t;
    let V, S, Z, C, E, z, j, se;
    i.includes("thumbs") && a.thumbs && a.thumbs.swiper && d.thumbs && !d.thumbs.swiper && (V = !0), i.includes("controller") && a.controller && a.controller.control && d.controller && !d.controller.control && (S = !0), i.includes("pagination") && a.pagination && (a.pagination.el || c) && (d.pagination || d.pagination === !1) && h && !h.el && (Z = !0), i.includes("scrollbar") && a.scrollbar && (a.scrollbar.el || r) && (d.scrollbar || d.scrollbar === !1) && y && !y.el && (C = !0), i.includes("navigation") && a.navigation && (a.navigation.prevEl || l) && (a.navigation.nextEl || o) && (d.navigation || d.navigation === !1) && m && !m.prevEl && !m.nextEl && (E = !0);
    const O = k => {
        t[k] && (t[k].destroy(), k === "navigation" ? (t.isElement && (t[k].prevEl.remove(), t[k].nextEl.remove()), d[k].prevEl = void 0, d[k].nextEl = void 0, t[k].prevEl = void 0, t[k].nextEl = void 0) : (t.isElement && t[k].el.remove(), d[k].el = void 0, t[k].el = void 0))
    };
    i.includes("loop") && t.isElement && (d.loop && !a.loop ? z = !0 : !d.loop && a.loop ? j = !0 : se = !0), f.forEach(k => {
        if (a1(d[k]) && a1(a[k])) Object.assign(d[k], a[k]), (k === "navigation" || k === "pagination" || k === "scrollbar") && "enabled" in a[k] && !a[k].enabled && O(k);
        else {
            const B = a[k];
            (B === !0 || B === !1) && (k === "navigation" || k === "pagination" || k === "scrollbar") ? B === !1 && O(k): d[k] = a[k]
        }
    }), f.includes("controller") && !S && t.controller && t.controller.control && d.controller && d.controller.control && (t.controller.control = d.controller.control), i.includes("children") && s && b && d.virtual.enabled ? (b.slides = s, b.update(!0)) : i.includes("virtual") && b && d.virtual.enabled && (s && (b.slides = s), b.update(!0)), i.includes("children") && s && d.loop && (se = !0), V && M.init() && M.update(!0), S && (t.controller.control = d.controller.control), Z && (t.isElement && (!c || typeof c == "string") && (c = document.createElement("div"), c.classList.add("swiper-pagination"), c.part.add("pagination"), t.el.appendChild(c)), c && (d.pagination.el = c), h.init(), h.render(), h.update()), C && (t.isElement && (!r || typeof r == "string") && (r = document.createElement("div"), r.classList.add("swiper-scrollbar"), r.part.add("scrollbar"), t.el.appendChild(r)), r && (d.scrollbar.el = r), y.init(), y.updateSize(), y.setTranslate()), E && (t.isElement && ((!o || typeof o == "string") && (o = document.createElement("div"), o.classList.add("swiper-button-next"), o.innerHTML = t.hostEl.constructor.nextButtonSvg, o.part.add("button-next"), t.el.appendChild(o)), (!l || typeof l == "string") && (l = document.createElement("div"), l.classList.add("swiper-button-prev"), l.innerHTML = t.hostEl.constructor.prevButtonSvg, l.part.add("button-prev"), t.el.appendChild(l))), o && (d.navigation.nextEl = o), l && (d.navigation.prevEl = l), m.init(), m.update()), i.includes("allowSlideNext") && (t.allowSlideNext = a.allowSlideNext), i.includes("allowSlidePrev") && (t.allowSlidePrev = a.allowSlidePrev), i.includes("direction") && t.changeDirection(a.direction, !1), (z || se) && t.loopDestroy(), (j || se) && t.loopCreate(), t.update()
}

function fn(e, t) {
    e === void 0 && (e = {}), t === void 0 && (t = !0);
    const s = {
            on: {}
        },
        a = {},
        i = {};
    y1(s, ma), s._emitClasses = !0, s.init = !1;
    const o = {},
        l = hl.map(c => c.replace(/_/, "")),
        r = Object.assign({}, e);
    return Object.keys(r).forEach(c => {
        typeof e[c] > "u" || (l.indexOf(c) >= 0 ? a1(e[c]) ? (s[c] = {}, i[c] = {}, y1(s[c], e[c]), y1(i[c], e[c])) : (s[c] = e[c], i[c] = e[c]) : c.search(/on[A-Z]/) === 0 && typeof e[c] == "function" ? t ? a[`${c[2].toLowerCase()}${c.substr(3)}`] = e[c] : s.on[`${c[2].toLowerCase()}${c.substr(3)}`] = e[c] : o[c] = e[c])
    }), ["navigation", "pagination", "scrollbar"].forEach(c => {
        s[c] === !0 && (s[c] = {}), s[c] === !1 && delete s[c]
    }), {
        params: s,
        passedParams: i,
        rest: o,
        events: a
    }
}

function QP(e, t) {
    let {
        el: s,
        nextEl: a,
        prevEl: i,
        paginationEl: o,
        scrollbarEl: l,
        swiper: r
    } = e;
    ml(t) && a && i && (r.params.navigation.nextEl = a, r.originalParams.navigation.nextEl = a, r.params.navigation.prevEl = i, r.originalParams.navigation.prevEl = i), gl(t) && o && (r.params.pagination.el = o, r.originalParams.pagination.el = o), vl(t) && l && (r.params.scrollbar.el = l, r.originalParams.scrollbar.el = l), r.init(s)
}

function XP(e, t, s, a, i) {
    const o = [];
    if (!t) return o;
    const l = c => {
        o.indexOf(c) < 0 && o.push(c)
    };
    if (s && a) {
        const c = a.map(i),
            f = s.map(i);
        c.join("") !== f.join("") && l("children"), a.length !== s.length && l("children")
    }
    return hl.filter(c => c[0] === "_").map(c => c.replace(/_/, "")).forEach(c => {
        if (c in e && c in t)
            if (a1(e[c]) && a1(t[c])) {
                const f = Object.keys(e[c]),
                    d = Object.keys(t[c]);
                f.length !== d.length ? l(c) : (f.forEach(h => {
                    e[c][h] !== t[c][h] && l(c)
                }), d.forEach(h => {
                    e[c][h] !== t[c][h] && l(c)
                }))
            } else e[c] !== t[c] && l(c)
    }), o
}
const eL = e => {
    !e || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
};

function zs(e, t, s) {
    e === void 0 && (e = {});
    const a = [],
        i = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
        },
        o = (l, r) => {
            Array.isArray(l) && l.forEach(c => {
                const f = typeof c.type == "symbol";
                r === "default" && (r = "container-end"), f && c.children ? o(c.children, r) : c.type && (c.type.name === "SwiperSlide" || c.type.name === "AsyncComponentWrapper") ? a.push(c) : i[r] && i[r].push(c)
            })
        };
    return Object.keys(e).forEach(l => {
        if (typeof e[l] != "function") return;
        const r = e[l]();
        o(r, l)
    }), s.value = t.value, t.value = a, {
        slides: a,
        slots: i
    }
}

function tL(e, t, s) {
    if (!s) return null;
    const a = d => {
            let h = d;
            return d < 0 ? h = t.length + d : h >= t.length && (h = h - t.length), h
        },
        i = e.value.isHorizontal() ? {
            [e.value.rtlTranslate ? "right" : "left"]: `${s.offset}px`
        } : {
            top: `${s.offset}px`
        },
        {
            from: o,
            to: l
        } = s,
        r = e.value.params.loop ? -t.length : 0,
        c = e.value.params.loop ? t.length * 2 : t.length,
        f = [];
    for (let d = r; d < c; d += 1) d >= o && d <= l && f.push(t[a(d)]);
    return f.map(d => (d.props || (d.props = {}), d.props.style || (d.props.style = {}), d.props.swiperRef = e, d.props.style = i, De(d.type, {
        ...d.props
    }, d.children)))
}
const t0 = {
        name: "Swiper",
        props: {
            tag: {
                type: String,
                default: "div"
            },
            wrapperTag: {
                type: String,
                default: "div"
            },
            modules: {
                type: Array,
                default: void 0
            },
            init: {
                type: Boolean,
                default: void 0
            },
            direction: {
                type: String,
                default: void 0
            },
            oneWayMovement: {
                type: Boolean,
                default: void 0
            },
            swiperElementNodeName: {
                type: String,
                default: "SWIPER-CONTAINER"
            },
            touchEventsTarget: {
                type: String,
                default: void 0
            },
            initialSlide: {
                type: Number,
                default: void 0
            },
            speed: {
                type: Number,
                default: void 0
            },
            cssMode: {
                type: Boolean,
                default: void 0
            },
            updateOnWindowResize: {
                type: Boolean,
                default: void 0
            },
            resizeObserver: {
                type: Boolean,
                default: void 0
            },
            nested: {
                type: Boolean,
                default: void 0
            },
            focusableElements: {
                type: String,
                default: void 0
            },
            width: {
                type: Number,
                default: void 0
            },
            height: {
                type: Number,
                default: void 0
            },
            preventInteractionOnTransition: {
                type: Boolean,
                default: void 0
            },
            userAgent: {
                type: String,
                default: void 0
            },
            url: {
                type: String,
                default: void 0
            },
            edgeSwipeDetection: {
                type: [Boolean, String],
                default: void 0
            },
            edgeSwipeThreshold: {
                type: Number,
                default: void 0
            },
            autoHeight: {
                type: Boolean,
                default: void 0
            },
            setWrapperSize: {
                type: Boolean,
                default: void 0
            },
            virtualTranslate: {
                type: Boolean,
                default: void 0
            },
            effect: {
                type: String,
                default: void 0
            },
            breakpoints: {
                type: Object,
                default: void 0
            },
            spaceBetween: {
                type: [Number, String],
                default: void 0
            },
            slidesPerView: {
                type: [Number, String],
                default: void 0
            },
            maxBackfaceHiddenSlides: {
                type: Number,
                default: void 0
            },
            slidesPerGroup: {
                type: Number,
                default: void 0
            },
            slidesPerGroupSkip: {
                type: Number,
                default: void 0
            },
            slidesPerGroupAuto: {
                type: Boolean,
                default: void 0
            },
            centeredSlides: {
                type: Boolean,
                default: void 0
            },
            centeredSlidesBounds: {
                type: Boolean,
                default: void 0
            },
            slidesOffsetBefore: {
                type: Number,
                default: void 0
            },
            slidesOffsetAfter: {
                type: Number,
                default: void 0
            },
            normalizeSlideIndex: {
                type: Boolean,
                default: void 0
            },
            centerInsufficientSlides: {
                type: Boolean,
                default: void 0
            },
            watchOverflow: {
                type: Boolean,
                default: void 0
            },
            roundLengths: {
                type: Boolean,
                default: void 0
            },
            touchRatio: {
                type: Number,
                default: void 0
            },
            touchAngle: {
                type: Number,
                default: void 0
            },
            simulateTouch: {
                type: Boolean,
                default: void 0
            },
            shortSwipes: {
                type: Boolean,
                default: void 0
            },
            longSwipes: {
                type: Boolean,
                default: void 0
            },
            longSwipesRatio: {
                type: Number,
                default: void 0
            },
            longSwipesMs: {
                type: Number,
                default: void 0
            },
            followFinger: {
                type: Boolean,
                default: void 0
            },
            allowTouchMove: {
                type: Boolean,
                default: void 0
            },
            threshold: {
                type: Number,
                default: void 0
            },
            touchMoveStopPropagation: {
                type: Boolean,
                default: void 0
            },
            touchStartPreventDefault: {
                type: Boolean,
                default: void 0
            },
            touchStartForcePreventDefault: {
                type: Boolean,
                default: void 0
            },
            touchReleaseOnEdges: {
                type: Boolean,
                default: void 0
            },
            uniqueNavElements: {
                type: Boolean,
                default: void 0
            },
            resistance: {
                type: Boolean,
                default: void 0
            },
            resistanceRatio: {
                type: Number,
                default: void 0
            },
            watchSlidesProgress: {
                type: Boolean,
                default: void 0
            },
            grabCursor: {
                type: Boolean,
                default: void 0
            },
            preventClicks: {
                type: Boolean,
                default: void 0
            },
            preventClicksPropagation: {
                type: Boolean,
                default: void 0
            },
            slideToClickedSlide: {
                type: Boolean,
                default: void 0
            },
            loop: {
                type: Boolean,
                default: void 0
            },
            loopedSlides: {
                type: Number,
                default: void 0
            },
            loopPreventsSliding: {
                type: Boolean,
                default: void 0
            },
            rewind: {
                type: Boolean,
                default: void 0
            },
            allowSlidePrev: {
                type: Boolean,
                default: void 0
            },
            allowSlideNext: {
                type: Boolean,
                default: void 0
            },
            swipeHandler: {
                type: Boolean,
                default: void 0
            },
            noSwiping: {
                type: Boolean,
                default: void 0
            },
            noSwipingClass: {
                type: String,
                default: void 0
            },
            noSwipingSelector: {
                type: String,
                default: void 0
            },
            passiveListeners: {
                type: Boolean,
                default: void 0
            },
            containerModifierClass: {
                type: String,
                default: void 0
            },
            slideClass: {
                type: String,
                default: void 0
            },
            slideActiveClass: {
                type: String,
                default: void 0
            },
            slideVisibleClass: {
                type: String,
                default: void 0
            },
            slideFullyVisibleClass: {
                type: String,
                default: void 0
            },
            slideBlankClass: {
                type: String,
                default: void 0
            },
            slideNextClass: {
                type: String,
                default: void 0
            },
            slidePrevClass: {
                type: String,
                default: void 0
            },
            wrapperClass: {
                type: String,
                default: void 0
            },
            lazyPreloaderClass: {
                type: String,
                default: void 0
            },
            lazyPreloadPrevNext: {
                type: Number,
                default: void 0
            },
            runCallbacksOnInit: {
                type: Boolean,
                default: void 0
            },
            observer: {
                type: Boolean,
                default: void 0
            },
            observeParents: {
                type: Boolean,
                default: void 0
            },
            observeSlideChildren: {
                type: Boolean,
                default: void 0
            },
            a11y: {
                type: [Boolean, Object],
                default: void 0
            },
            autoplay: {
                type: [Boolean, Object],
                default: void 0
            },
            controller: {
                type: Object,
                default: void 0
            },
            coverflowEffect: {
                type: Object,
                default: void 0
            },
            cubeEffect: {
                type: Object,
                default: void 0
            },
            fadeEffect: {
                type: Object,
                default: void 0
            },
            flipEffect: {
                type: Object,
                default: void 0
            },
            creativeEffect: {
                type: Object,
                default: void 0
            },
            cardsEffect: {
                type: Object,
                default: void 0
            },
            hashNavigation: {
                type: [Boolean, Object],
                default: void 0
            },
            history: {
                type: [Boolean, Object],
                default: void 0
            },
            keyboard: {
                type: [Boolean, Object],
                default: void 0
            },
            mousewheel: {
                type: [Boolean, Object],
                default: void 0
            },
            navigation: {
                type: [Boolean, Object],
                default: void 0
            },
            pagination: {
                type: [Boolean, Object],
                default: void 0
            },
            parallax: {
                type: [Boolean, Object],
                default: void 0
            },
            scrollbar: {
                type: [Boolean, Object],
                default: void 0
            },
            thumbs: {
                type: Object,
                default: void 0
            },
            virtual: {
                type: [Boolean, Object],
                default: void 0
            },
            zoom: {
                type: [Boolean, Object],
                default: void 0
            },
            grid: {
                type: [Object],
                default: void 0
            },
            freeMode: {
                type: [Boolean, Object],
                default: void 0
            },
            enabled: {
                type: Boolean,
                default: void 0
            }
        },
        emits: ["_beforeBreakpoint", "_containerClasses", "_slideClass", "_slideClasses", "_swiper", "_freeModeNoMomentumRelease", "activeIndexChange", "afterInit", "autoplay", "autoplayStart", "autoplayStop", "autoplayPause", "autoplayResume", "autoplayTimeLeft", "beforeDestroy", "beforeInit", "beforeLoopFix", "beforeResize", "beforeSlideChangeStart", "beforeTransitionStart", "breakpoint", "breakpointsBase", "changeDirection", "click", "disable", "doubleTap", "doubleClick", "destroy", "enable", "fromEdge", "hashChange", "hashSet", "init", "keyPress", "lock", "loopFix", "momentumBounce", "navigationHide", "navigationShow", "navigationPrev", "navigationNext", "observerUpdate", "orientationchange", "paginationHide", "paginationRender", "paginationShow", "paginationUpdate", "progress", "reachBeginning", "reachEnd", "realIndexChange", "resize", "scroll", "scrollbarDragEnd", "scrollbarDragMove", "scrollbarDragStart", "setTransition", "setTranslate", "slidesUpdated", "slideChange", "slideChangeTransitionEnd", "slideChangeTransitionStart", "slideNextTransitionEnd", "slideNextTransitionStart", "slidePrevTransitionEnd", "slidePrevTransitionStart", "slideResetTransitionStart", "slideResetTransitionEnd", "sliderMove", "sliderFirstMove", "slidesLengthChange", "slidesGridLengthChange", "snapGridLengthChange", "snapIndexChange", "swiper", "tap", "toEdge", "touchEnd", "touchMove", "touchMoveOpposite", "touchStart", "transitionEnd", "transitionStart", "unlock", "update", "virtualUpdate", "zoomChange"],
        setup(e, t) {
            let {
                slots: s,
                emit: a
            } = t;
            const {
                tag: i,
                wrapperTag: o
            } = e, l = le("swiper"), r = le(null), c = le(!1), f = le(!1), d = le(null), h = le(null), m = le(null), y = {
                value: []
            }, b = {
                value: []
            }, M = le(null), V = le(null), S = le(null), Z = le(null), {
                params: C,
                passedParams: E
            } = fn(e, !1);
            zs(s, y, b), m.value = E, b.value = y.value;
            const z = () => {
                zs(s, y, b), c.value = !0
            };
            C.onAny = function (O) {
                for (var k = arguments.length, B = new Array(k > 1 ? k - 1 : 0), U = 1; U < k; U++) B[U - 1] = arguments[U];
                a(O, ...B)
            }, Object.assign(C.on, {
                _beforeBreakpoint: z,
                _containerClasses(O, k) {
                    l.value = k
                }
            });
            const j = {
                ...C
            };
            if (delete j.wrapperClass, h.value = new Ga(j), h.value.virtual && h.value.params.virtual.enabled) {
                h.value.virtual.slides = y.value;
                const O = {
                    cache: !1,
                    slides: y.value,
                    renderExternal: k => {
                        r.value = k
                    },
                    renderExternalUpdate: !1
                };
                y1(h.value.params.virtual, O), y1(h.value.originalParams.virtual, O)
            }
            ts(() => {
                !f.value && h.value && (h.value.emitSlidesClasses(), f.value = !0);
                const {
                    passedParams: O
                } = fn(e, !1), k = XP(O, m.value, y.value, b.value, B => B.props && B.props.key);
                m.value = O, (k.length || c.value) && h.value && !h.value.destroyed && JP({
                    swiper: h.value,
                    slides: y.value,
                    passedParams: O,
                    changedParams: k,
                    nextEl: M.value,
                    prevEl: V.value,
                    scrollbarEl: Z.value,
                    paginationEl: S.value
                }), c.value = !1
            }), m1("swiper", h), Ct(r, () => {
                H1(() => {
                    eL(h.value)
                })
            }), Tt(() => {
                d.value && (QP({
                    el: d.value,
                    nextEl: M.value,
                    prevEl: V.value,
                    paginationEl: S.value,
                    scrollbarEl: Z.value,
                    swiper: h.value
                }, C), a("swiper", h.value))
            }), ss(() => {
                h.value && !h.value.destroyed && h.value.destroy(!0, !1)
            });

            function se(O) {
                return C.virtual ? tL(h, O, r.value) : (O.forEach((k, B) => {
                    k.props || (k.props = {}), k.props.swiperRef = h, k.props.swiperSlideIndex = B
                }), O)
            }
            return () => {
                const {
                    slides: O,
                    slots: k
                } = zs(s, y, b);
                return De(i, {
                    ref: d,
                    class: yl(l.value)
                }, [k["container-start"], De(o, {
                    class: KP(C.wrapperClass)
                }, [k["wrapper-start"], se(O), k["wrapper-end"]]), ml(e) && [De("div", {
                    ref: V,
                    class: "swiper-button-prev"
                }), De("div", {
                    ref: M,
                    class: "swiper-button-next"
                })], vl(e) && De("div", {
                    ref: Z,
                    class: "swiper-scrollbar"
                }), gl(e) && De("div", {
                    ref: S,
                    class: "swiper-pagination"
                }), k["container-end"]])
            }
        }
    },
    s0 = {
        name: "SwiperSlide",
        props: {
            tag: {
                type: String,
                default: "div"
            },
            swiperRef: {
                type: Object,
                required: !1
            },
            swiperSlideIndex: {
                type: Number,
                default: void 0,
                required: !1
            },
            zoom: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            lazy: {
                type: Boolean,
                default: !1,
                required: !1
            },
            virtualIndex: {
                type: [String, Number],
                default: void 0
            }
        },
        setup(e, t) {
            let {
                slots: s
            } = t, a = !1;
            const {
                swiperRef: i
            } = e, o = le(null), l = le("swiper-slide"), r = le(!1);

            function c(h, m, y) {
                m === o.value && (l.value = y)
            }
            Tt(() => {
                !i || !i.value || (i.value.on("_slideClass", c), a = !0)
            }), no(() => {
                a || !i || !i.value || (i.value.on("_slideClass", c), a = !0)
            }), ts(() => {
                !o.value || !i || !i.value || (typeof e.swiperSlideIndex < "u" && (o.value.swiperSlideIndex = e.swiperSlideIndex), i.value.destroyed && l.value !== "swiper-slide" && (l.value = "swiper-slide"))
            }), ss(() => {
                !i || !i.value || i.value.off("_slideClass", c)
            });
            const f = v(() => ({
                isActive: l.value.indexOf("swiper-slide-active") >= 0,
                isVisible: l.value.indexOf("swiper-slide-visible") >= 0,
                isPrev: l.value.indexOf("swiper-slide-prev") >= 0,
                isNext: l.value.indexOf("swiper-slide-next") >= 0
            }));
            m1("swiperSlide", f);
            const d = () => {
                r.value = !0
            };
            return () => De(e.tag, {
                class: yl(`${l.value}`),
                ref: o,
                "data-swiper-slide-index": typeof e.virtualIndex > "u" && i && i.value && i.value.params.loop ? e.swiperSlideIndex : e.virtualIndex,
                onLoadCapture: d
            }, e.zoom ? De("div", {
                class: "swiper-zoom-container",
                "data-swiper-zoom": typeof e.zoom == "number" ? e.zoom : void 0
            }, [s.default && s.default(f.value), e.lazy && !r.value && De("div", {
                class: "swiper-lazy-preloader"
            })]) : [s.default && s.default(f.value), e.lazy && !r.value && De("div", {
                class: "swiper-lazy-preloader"
            })])
        }
    },
    sL = {
        class: "stp-15 sbp-15 container grid grid-cols-12 gap-6 border-b border-strokeColor"
    },
    aL = n("div", {
        class: "col-span-12 sm:col-span-6 xl:col-span-4"
    }, [n("p", {
        class: "text-xl lg:text-2xl text-bodyText relative after:absolute after:top-[55%] after:right-0 after:w-[50px] after:h-[2px] after:bg-bodyText max-xxl:after:content-none"
    }, [n("span", {
        class: "font-bold text-mainTextColor"
    }, "15,000+"), ee(" businesses from small startups to household names ")])], -1),
    iL = {
        class: "col-span-12 sm:col-span-6 xl:col-span-8 flex pt-4"
    },
    nL = ["src"],
    oL = H({
        __name: "CompanySlider",
        setup(e) {
            const t = ["/images/logo1.png", "/images/logo2.png", "/images/logo3.png", "/images/logo4.png", "/images/logo4.png", "/images/logo2.png", "/images/logo1.png", "/images/logo3.png"];
            return (s, a) => {
                const i = Ae("router-link");
                return u(), p("section", sL, [aL, n("div", iL, [g(A(t0), {
                    class: "!flex !justify-center !items-center sponsors",
                    modules: [A(e0), A(X1)],
                    autoplay: {
                        delay: 1,
                        disableOnInteraction: !1
                    },
                    "slides-per-view": 1,
                    loop: !0,
                    freeMode: !0,
                    speed: 6e3,
                    centeredSlides: !0,
                    breakpoints: {
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                            centeredSlides: !1
                        },
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                            centeredSlides: !1
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                            centeredSlides: !0
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                            centeredSlides: !0
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 24,
                            centeredSlides: !0
                        }
                    }
                }, {
                    default: ne(() => [(u(), p(G, null, oe(t, o => g(A(s0), null, {
                        default: ne(() => [g(i, {
                            to: "#",
                            class: "flex justify-center items-center"
                        }, {
                            default: ne(() => [n("img", {
                                src: o,
                                alt: "sponsor image"
                            }, null, 8, nL)]),
                            _: 2
                        }, 1024)]),
                        _: 2
                    }, 1024)), 64))]),
                    _: 1
                }, 8, ["modules"])])])
            }
        }
    });
var q0 = function () {
        return q0 = Object.assign || function (e) {
            for (var t, s = 1, a = arguments.length; s < a; s++)
                for (var i in t = arguments[s]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }, q0.apply(this, arguments)
    },
    lL = function () {
        function e(t, s, a) {
            var i = this;
            this.endVal = s, this.options = a, this.version = "2.6.2", this.defaults = {
                startVal: 0,
                decimalPlaces: 0,
                duration: 2,
                useEasing: !0,
                useGrouping: !0,
                useIndianSeparators: !1,
                smartEasingThreshold: 999,
                smartEasingAmount: 333,
                separator: ",",
                decimal: ".",
                prefix: "",
                suffix: "",
                enableScrollSpy: !1,
                scrollSpyDelay: 200,
                scrollSpyOnce: !1
            }, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = "", this.startVal = 0, this.paused = !0, this.once = !1, this.count = function (o) {
                i.startTime || (i.startTime = o);
                var l = o - i.startTime;
                i.remaining = i.duration - l, i.useEasing ? i.countDown ? i.frameVal = i.startVal - i.easingFn(l, 0, i.startVal - i.endVal, i.duration) : i.frameVal = i.easingFn(l, i.startVal, i.endVal - i.startVal, i.duration) : i.frameVal = i.startVal + (i.endVal - i.startVal) * (l / i.duration);
                var r = i.countDown ? i.frameVal < i.endVal : i.frameVal > i.endVal;
                i.frameVal = r ? i.endVal : i.frameVal, i.frameVal = Number(i.frameVal.toFixed(i.options.decimalPlaces)), i.printValue(i.frameVal), l < i.duration ? i.rAF = requestAnimationFrame(i.count) : i.finalEndVal !== null ? i.update(i.finalEndVal) : i.options.onCompleteCallback && i.options.onCompleteCallback()
            }, this.formatNumber = function (o) {
                var l, r, c, f, d = o < 0 ? "-" : "";
                l = Math.abs(o).toFixed(i.options.decimalPlaces);
                var h = (l += "").split(".");
                if (r = h[0], c = h.length > 1 ? i.options.decimal + h[1] : "", i.options.useGrouping) {
                    f = "";
                    for (var m = 3, y = 0, b = 0, M = r.length; b < M; ++b) i.options.useIndianSeparators && b === 4 && (m = 2, y = 1), b !== 0 && y % m == 0 && (f = i.options.separator + f), y++, f = r[M - b - 1] + f;
                    r = f
                }
                return i.options.numerals && i.options.numerals.length && (r = r.replace(/[0-9]/g, function (V) {
                    return i.options.numerals[+V]
                }), c = c.replace(/[0-9]/g, function (V) {
                    return i.options.numerals[+V]
                })), d + i.options.prefix + r + c + i.options.suffix
            }, this.easeOutExpo = function (o, l, r, c) {
                return r * (1 - Math.pow(2, -10 * o / c)) * 1024 / 1023 + l
            }, this.options = q0(q0({}, this.defaults), a), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(s), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, this.options.separator === "" && (this.options.useGrouping = !1), this.el = typeof t == "string" ? document.getElementById(t) : t, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", typeof window < "u" && this.options.enableScrollSpy && (this.error ? console.error(this.error, t) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function () {
                return i.handleScroll(i)
            }), window.onscroll = function () {
                window.onScrollFns.forEach(function (o) {
                    return o()
                })
            }, this.handleScroll(this)))
        }
        return e.prototype.handleScroll = function (t) {
            if (t && window && !t.once) {
                var s = window.innerHeight + window.scrollY,
                    a = t.el.getBoundingClientRect(),
                    i = a.top + window.pageYOffset,
                    o = a.top + a.height + window.pageYOffset;
                o < s && o > window.scrollY && t.paused ? (t.paused = !1, setTimeout(function () {
                    return t.start()
                }, t.options.scrollSpyDelay), t.options.scrollSpyOnce && (t.once = !0)) : (window.scrollY > o || i > s) && !t.paused && t.reset()
            }
        }, e.prototype.determineDirectionAndSmartEasing = function () {
            var t = this.finalEndVal ? this.finalEndVal : this.endVal;
            this.countDown = this.startVal > t;
            var s = t - this.startVal;
            if (Math.abs(s) > this.options.smartEasingThreshold && this.options.useEasing) {
                this.finalEndVal = t;
                var a = this.countDown ? 1 : -1;
                this.endVal = t + a * this.options.smartEasingAmount, this.duration = this.duration / 2
            } else this.endVal = t, this.finalEndVal = null;
            this.finalEndVal !== null ? this.useEasing = !1 : this.useEasing = this.options.useEasing
        }, e.prototype.start = function (t) {
            this.error || (t && (this.options.onCompleteCallback = t), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal))
        }, e.prototype.pauseResume = function () {
            this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused
        }, e.prototype.reset = function () {
            cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal)
        }, e.prototype.update = function (t) {
            cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t), this.endVal !== this.frameVal && (this.startVal = this.frameVal, this.finalEndVal == null && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count))
        }, e.prototype.printValue = function (t) {
            var s;
            if (this.el) {
                var a = this.formattingFn(t);
                !((s = this.options.plugin) === null || s === void 0) && s.render ? this.options.plugin.render(this.el, a) : this.el.tagName === "INPUT" ? this.el.value = a : this.el.tagName === "text" || this.el.tagName === "tspan" ? this.el.textContent = a : this.el.innerHTML = a
            }
        }, e.prototype.ensureNumber = function (t) {
            return typeof t == "number" && !isNaN(t)
        }, e.prototype.validateValue = function (t) {
            var s = Number(t);
            return this.ensureNumber(s) ? s : (this.error = "[CountUp] invalid start or end value: ".concat(t), null)
        }, e.prototype.resetDuration = function () {
            this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration
        }, e
    }();

function rL(e, t = 1) {
    const s = le(-1);
    let a;

    function i(l) {
        a || (a = l), l - a < t * 1e3 ? s.value = requestAnimationFrame(i) : e()
    }
    s.value = requestAnimationFrame(i);

    function o() {
        window.cancelAnimationFrame(s.value)
    }
    return {
        cancel: o
    }
}
const cL = {
        class: "countup-wrap"
    },
    dL = {
        name: "CountUp"
    },
    js = H({
        ...dL,
        props: {
            endVal: null,
            startVal: {
                default: 0
            },
            duration: {
                default: 2.5
            },
            decimalPlaces: {
                default: 0
            },
            autoplay: {
                type: Boolean,
                default: !0
            },
            loop: {
                type: [Boolean, Number],
                default: !1
            },
            delay: {
                default: 0
            },
            options: {
                default: void 0
            }
        },
        emits: ["init", "finished"],
        setup(e, {
            expose: t,
            emit: s
        }) {
            const a = e;
            let i = le(),
                o = le(),
                l = 0;
            const r = le(!1);
            let c;

            function f() {
                if (!i.value) {
                    console.warn("[vue-countup-v3]", "elRef can't found");
                    return
                }
                l = 0, r.value = !1;
                const m = Number(a.startVal),
                    y = Number(a.endVal),
                    b = Number(a.duration);
                if (o.value = new lL(i.value, y, {
                        startVal: m,
                        duration: b,
                        decimalPlaces: a.decimalPlaces,
                        ...a.options
                    }), o.value.error) {
                    console.error("[vue-countup-v3]", o.value.error);
                    return
                }
                s("init", o.value)
            }

            function d() {
                var m;
                o.value || f(), (m = o.value) == null || m.start(y), l++;

                function y() {
                    typeof a.loop == "boolean" && a.loop || a.loop > l ? c = rL(() => {
                        var b;
                        (b = o.value) == null || b.reset(), d()
                    }, a.delay) : r.value = !0
                }
            }

            function h() {
                c == null || c.cancel(), f(), d()
            }
            return Ct([() => a.startVal, () => a.endVal], () => {
                a.autoplay && h()
            }), Ct(r, m => {
                var y;
                m && ((y = a.options) != null && y.onCompleteCallback && a.options.onCompleteCallback(), s("finished"))
            }), Tt(() => {
                f(), a.autoplay && d()
            }), Z1(() => {
                var m;
                c == null || c.cancel(), (m = o.value) == null || m.reset()
            }), t({
                init: f,
                restart: h
            }), (m, y) => (u(), p("div", cL, [te(m.$slots, "prefix"), n("span", {
                ref_key: "elRef",
                ref: i
            }, null, 512), te(m.$slots, "suffix")]))
        }
    }),
    uL = {
        style: {
            "background-image": "url('/images/counter_bg.png')"
        },
        class: "bg-cover stp-30 sbp-30 relative"
    },
    pL = {
        class: "container text-white flex justify-between items-center gap-8 sm:gap-4 md:gap-8 lg:gap-16 max-sm:flex-col"
    },
    fL = {
        class: "text-center max-w-[280px]"
    },
    hL = {
        class: "display-4 pb-3 inline-flex"
    },
    mL = n("span", null, "hrs", -1),
    gL = n("p", null, " Average time saved per month running payroll and HR after switching to Accupay. ", -1),
    vL = n("div", {
        class: "h-[120px] w-[2px] bg-white/70 mt-8 max-sm:hidden"
    }, null, -1),
    yL = {
        class: "text-center max-w-[280px]"
    },
    _L = {
        class: "display-4 pb-3 counters inline-flex"
    },
    xL = n("span", null, "$", -1),
    bL = n("p", null, " Average savings made per year running payroll and HR after switching to Accupay. ", -1),
    wL = n("div", {
        class: "h-[120px] w-[2px] bg-white/70 mt-8 max-sm:hidden"
    }, null, -1),
    $L = {
        class: "text-center max-w-[280px]"
    },
    AL = {
        class: "display-4 pb-3 counters inline-flex"
    },
    SL = n("span", null, "Weeks", -1),
    ML = n("p", null, "average time it takes to switch to Accupay - and often less", -1),
    Ua = H({
        __name: "Counter",
        setup(e) {
            return (t, s) => (u(), p("section", uL, [n("div", pL, [n("div", fL, [n("p", hL, [g(A(js), {
                "end-val": 68,
                options: {
                    enableScrollSpy: !0
                }
            }), mL]), gL]), vL, n("div", yL, [n("p", _L, [xL, g(A(js), {
                "end-val": 256689,
                options: {
                    enableScrollSpy: !0
                }
            })]), bL]), wL, n("div", $L, [n("p", AL, [g(A(js), {
                "end-val": 6,
                options: {
                    enableScrollSpy: !0
                }
            }), SL]), ML])])]))
        }
    }),
    CL = "/images/contact_illus.png",
    HL = {},
    ZL = {
        class: "bg-p1 pt-15 overflow-hidden"
    },
    TL = {
        class: "max-xxl:container xxl:ml-[calc((100%-1296px)/2)] flex justify-between text-white sm:max-xxl:gap-6 max-lg:flex-col"
    },
    VL = {
        class: "flex flex-col justify-center items-start w-full lg:max-xxl:w-1/2 xxl:max-w-[550px] max-xxl:pb-8 max-xxl:overflow-hidden"
    },
    kL = n("p", {
        class: "text-lg font-medium underline wow animate__animated animate__fadeInUp"
    }, " Experience AccuPay ", -1),
    PL = n("h1", {
        class: "display-4 pb-6 pt-4 wow animate__animated animate__fadeInDown"
    }, " We’ve got everything you need? ", -1),
    LL = n("p", {
        class: "pb-8 wow animate__animated animate__fadeInUp"
    }, " We save you from all that boring paperwork! From global hiring, to instant payments, and taxes, we’ve got your back. ", -1),
    EL = n("span", {
        class: "group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl"
    }, [n("i", {
        class: "ph-bold ph-arrow-up-right"
    })], -1),
    BL = n("div", {
        class: "w-full lg:max-xxl:w-1/2 self-stretch flex justify-center max-xxl:items-center lg:pt-10 wow animate__animated animate__fadeInUp"
    }, [n("img", {
        src: CL,
        alt: "",
        class: "object-cover"
    })], -1);

function IL(e, t) {
    const s = Ae("router-link");
    return u(), p("div", ZL, [n("div", TL, [n("div", VL, [kL, PL, LL, g(s, {
        to: "/contact",
        class: "flex justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border border-mainTextColor text-mainTextColor group font-medium"
    }, {
        default: ne(() => [ee(" Contact Us "), EL]),
        _: 1
    })]), BL])])
}
const _l = r0(HL, [
        ["render", IL]
    ]),
    OL = {
        class: "bg-softBg1 stp-30 sbp-30"
    },
    NL = {
        class: "container"
    },
    zL = we('<div class="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start"><div class="max-w-[600px] flex justify-center items-start flex-col"><p class="bg-p1 py-3 px-5 rounded-full text-white wow animate__animated animate__fadeInUp"> Features </p><h1 class="display-4 pt-4 wow animate__animated animate__fadeInDown"> Perfect solutions for your business </h1></div><p class="text-bodyText max-w-[500px]"> We’re simplifying every aspect of managing a world-wide team, from benefits and equity to working visas and equipment. It’s one platform made to get you set up. </p></div>', 1),
    jL = {
        class: "grid grid-cols-12 gap-6 stp-15"
    },
    RL = {
        class: "bg-white p-6 xl:p-8 flex flex-col border border-white group hover:border-mainTextColor duration-700 hover:bg-s2"
    },
    DL = {
        class: "text-4xl text-s1 pb-6 group-hover:text-mainTextColor duration-500"
    },
    FL = {
        class: "heading-4 pb-5"
    },
    qL = {
        class: "text-bodyText pb-6"
    },
    WL = H({
        __name: "Features",
        setup(e) {
            return (t, s) => {
                const a = Ae("router-link");
                return u(), p("section", OL, [n("div", NL, [zL, n("div", jL, [(u(!0), p(G, null, oe(A(LH), ({
                    id: i,
                    icon: o,
                    name: l,
                    desc: r
                }) => (u(), p("div", {
                    class: "col-span-12 sm:col-span-6 lg:col-span-3",
                    key: i
                }, [n("div", RL, [n("div", DL, [(u(), ye(Ve(o), {
                    weight: "fill"
                }))]), n("h4", FL, P(l), 1), n("p", qL, P(r), 1), g(a, {
                    to: "/contact",
                    class: "flex justify-start items-center gap-2 font-medium"
                }, {
                    default: ne(() => [ee(" Learn more "), g(A(o1))]),
                    _: 1
                })])]))), 128))])])])
            }
        }
    }),
    GL = {
        class: "container"
    },
    UL = we('<div class="flex justify-center items-center"><div class="flex justify-center items-center max-xxl:overflow-hidden"><div class="max-w-[700px] text-center flex justify-center items-center flex-col"><p class="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white wow animate__animated animate__zoomIn"> Contact </p><h1 class="display-4 pt-4 pb-4 lg:pb-6">Questions? Meet Answer</h1><p class="text-bodyText wow animate__animated animate__fadeInDown"> Startups thrive with AccuPay. Their flexible payroll solutions have been instrumental in our journey, providing the support </p></div></div></div>', 1),
    YL = {
        class: "grid grid-cols-12 gap-6 stp-15"
    },
    KL = {
        class: "flex justify-center items-center flex-col"
    },
    JL = {
        class: "text-7xl text-s1"
    },
    QL = {
        class: "heading-4 pb-4 pt-3"
    },
    XL = {
        class: "pb-5 text-center"
    },
    ms = H({
        __name: "GotQuestions",
        props: {
            isTopPadding: {
                type: Boolean
            }
        },
        setup(e) {
            return (t, s) => {
                const a = Ae("router-link");
                return u(), p("section", {
                    class: Se(["sbp-30 overflow-hidden", {
                        "stp-30": t.isTopPadding
                    }])
                }, [n("div", GL, [UL, n("div", YL, [(u(!0), p(G, null, oe(A(zH), ({
                    id: i,
                    icon: o,
                    title: l,
                    desc: r,
                    linkText: c
                }) => (u(), p("div", {
                    class: "col-span-12 min-[450px]:col-span-6 md:col-span-3",
                    key: i
                }, [n("div", KL, [n("div", JL, [(u(), ye(Ve(o), {
                    weight: "fill"
                }))]), n("h4", QL, P(l), 1), n("p", XL, P(r), 1), g(a, {
                    to: "/contact",
                    class: "text-s1 underline font-medium"
                }, {
                    default: ne(() => [ee(P(c), 1)]),
                    _: 2
                }, 1024)])]))), 128))])])], 2)
            }
        }
    }),
    eE = "/images/hero_bg_element1.png",
    tE = "/images/hero_bg_element2.png",
    sE = "/images/hero_bg_element3.png",
    aE = "/images/hero_illus.png",
    iE = {},
    nE = {
        class: "bg-repeat stp-30 hero_bg_gradient overflow-hidden"
    },
    oE = n("img", {
        src: eE,
        alt: "",
        class: "absolute top-0 left-0 xxxl:left-36 max-lg:w-[300px] max-xxl:w-[500px] max-md:hidden"
    }, null, -1),
    lE = n("img", {
        src: tE,
        alt: "",
        class: "absolute top-0 right-0 max-xxl:w-[300px] max-sm:hidden"
    }, null, -1),
    rE = n("div", {
        class: "absolute -left-[200px] -bottom-1/2 bg-white blur-[200px] rounded-[1176px] max-w-full lg:w-[1176px] h-[1176px] overflow-hidden"
    }, null, -1),
    cE = {
        class: "xxl:ml-[calc((100%-1296px)/2)] lg:max-xxl:py-10 max-xxl:container relative z-20 max-lg:pt-15 text-s1 grid grid-cols-12"
    },
    dE = n("img", {
        src: sE,
        alt: "",
        class: "absolute top-1/3 left-1/3 max-sm:hidden"
    }, null, -1),
    uE = {
        class: "col-span-12 lg:col-span-5 flex flex-col justify-center gap-2"
    },
    pE = n("p", {
        class: "uppercase text-base lg:text-xl font-semibold animate__animated animate__fadeInUp"
    }, " Efficiency Payroll and workforce mastery ", -1),
    fE = n("div", {
        class: "display-2"
    }, [ee(" We Make "), n("div", {
        class: "text-s3 inline-flex"
    }, "Payroll"), n("br"), ee(" Painless. ")], -1),
    hE = n("p", {
        class: "max-w-[550px]"
    }, " We get your employees paid while providing online access to paystubs, tax reports & payroll tax filings. ", -1),
    mE = {
        class: "flex justify-start items-center gap-4 pt-6 lg:pt-8 pb-15"
    },
    gE = n("div", {
        class: "col-span-12 lg:col-span-6 lg:col-start-7"
    }, [n("img", {
        src: aE,
        alt: ""
    })], -1);

function vE(e, t) {
    const s = Ae("router-link");
    return u(), p("section", nE, [oE, lE, rE, n("div", cE, [dE, n("div", uE, [pE, fE, hE, n("div", mE, [g(s, {
        to: "/contact",
        class: "font-medium bg-s2 py-2 lg:py-3 px-4 lg:px-6 rounded-full text-mainTextColor"
    }, {
        default: ne(() => [ee(" Get Started ")]),
        _: 1
    }), g(s, {
        to: "/faq",
        class: "underline font-medium"
    }, {
        default: ne(() => [ee(" Learn More ")]),
        _: 1
    })])]), gE])])
}
const yE = r0(iE, [
        ["render", vE]
    ]),
    _E = {
        class: "stp-30 sbp-30"
    },
    xE = {
        class: "container grid grid-cols-12"
    },
    bE = we('<div class="flex justify-start items-start col-span-12 lg:col-span-5 max-lg:sbp-15"><div class="max-w-[600px] flex justify-start items-start flex-col"><p class="bg-p1 py-3 px-5 rounded-full text-white wow animate__animated animate__fadeInUp"> Integrations </p><h1 class="display-4 pt-4 pb-6 wow animate__animated animate__fadeInDown"> All in One Place All in Sync. </h1><p class="text-bodyText wow animate__animated animate__fadeInUp"> Experience seamless coordination with our comprehensive services. From accounting to payroll, we bring everything together in one place, </p></div></div>', 1),
    wE = {
        class: "text-4xl rounded-full text-s1 leading-[0] p-4 bg-white"
    },
    $E = {
        class: "heading-4 pt-6 w-[200px]"
    },
    AE = {
        class: "flex justify-end items-end w-full pt-10 lg:pt-15 text-xl font-medium"
    },
    SE = H({
        __name: "IntegrationSection",
        setup(e) {
            return (t, s) => {
                const a = Ae("router-link");
                return u(), p("section", _E, [n("div", xE, [bE, (u(!0), p(G, null, oe(A(jH), ({
                    id: i,
                    icon: o,
                    title: l
                }, r) => (u(), p("div", {
                    class: Se(["col-span-12 min-[500px]:col-span-6 lg:col-span-3 hover:bg-s2 border hover:border-mainTextColor duration-500 min-h-[250px] lg:min-h-[300px] flex justify-start items-start flex-col p-8", {
                        "lg:col-start-4 min-[500px]:max-lg:order-2": r === 2,
                        "lg:col-start-7": r === 0,
                        "bg-softBg1 border-softBg1": r % 2 === 0,
                        "border-white": r % 2 !== 0
                    }]),
                    key: i
                }, [n("div", wE, [(u(), ye(Ve(o), {
                    weight: "fill"
                }))]), n("h4", $E, P(l), 1), n("div", AE, [g(a, {
                    to: "/contact",
                    class: "bg-white p-2 rounded-full shadow2 leading-[0]"
                }, {
                    default: ne(() => [g(A(o1))]),
                    _: 1
                })])], 2))), 128))])])
            }
        }
    }),
    ME = {
        class: "container"
    },
    CE = {
        class: "flex justify-center items-center"
    },
    HE = {
        class: "text-center flex justify-center items-center flex-col"
    },
    ZE = we('<div class="flex justify-center items-center"><div class="flex justify-center items-center"><div class="max-w-[700px] text-center flex justify-center items-center flex-col"><p class="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white wow animate__animated animate__fadeInUp"> Pricing </p><h1 class="display-4 pt-4 pb-4 lg:pb-6 wow animate__animated animate__fadeInDown"> Our Pricing </h1><p class="text-bodyText wow animate__animated animate__fadeInUp"> At Accupay, we believe in providing clear and flexible pricing options tailored to your business needs. </p></div></div></div>', 1),
    TE = {
        class: "relative z-10 flex gap-14"
    },
    VE = ["onClick"],
    kE = {
        class: "grid grid-cols-12 gap-6 stp-15"
    },
    PE = {
        key: 0,
        class: "absolute top-9 py-1 right-4 uppercase text-[13px] text-white bg-s1 rotate-90 px-4 flex justify-center items-center"
    },
    LE = n("p", {
        class: "pr-2"
    }, "popular", -1),
    EE = {
        class: "rotate-90 text-7xl !leading-none absolute right-0 pb-16 group-hover:text-s2 duration-700"
    },
    BE = {
        class: "p-4 bg-softBg group-hover:bg-mainTextColor duration-500 border group-hover:text-white text-4xl border-strokeColor group-hover:border-mainTextColor rounded-full"
    },
    IE = {
        class: "heading-3 pt-5 pb-4"
    },
    OE = {
        class: "text-bodyText pb-8"
    },
    NE = {
        class: "pb-6"
    },
    zE = {
        key: 0,
        class: "display-4"
    },
    jE = {
        key: 1,
        class: "display-4"
    },
    RE = n("span", {
        class: "text-bodyText"
    }, "- monthly", -1),
    DE = {
        class: "inline-flex gap-3"
    },
    FE = {
        class: "text-p1 group-hover:text-mainTextColor duration-500 leading-[0] flex justify-center items-center text-2xl"
    },
    gs = H({
        __name: "PricingSection",
        props: {
            isWhiteBg: {
                type: Boolean
            }
        },
        setup(e) {
            const t = le("Monthly"),
                s = le(!0),
                a = ["Monthly", "Yearly"];

            function i(o) {
                t.value = o, s.value = o !== "Yearly"
            }
            return (o, l) => {
                const r = Ae("router-link");
                return u(), p("section", {
                    class: Se(["stp-30 sbp-30", {
                        "bg-softBg1": !o.isWhiteBg
                    }])
                }, [n("div", ME, [n("div", CE, [n("div", HE, [ZE, n("div", {
                    class: Se(["bg-mainTextColor mt-8 py-3 px-6 rounded-full relative after:absolute after:bg-s2 after:top-0 after:bottom-0 after:w-1/2 after:rounded-full after:duration-500", {
                        "after:left-[-1px]": s.value,
                        "after:left-1/2": !s.value
                    }])
                }, [n("div", TE, [(u(), p(G, null, oe(a, (c, f) => n("button", {
                    class: Se(["duration-500", {
                        "text-mainTextColor": t.value === c,
                        "text-white": t.value !== c
                    }]),
                    key: f,
                    onClick: d => i(c)
                }, P(c), 11, VE)), 64))])], 2)])]), n("div", kE, [(u(!0), p(G, null, oe(A(OH), ({
                    id: c,
                    icon: f,
                    planName: d,
                    desc: h,
                    isPopular: m,
                    monthlyPrice: y,
                    features: b
                }) => (u(), p("div", {
                    class: "col-span-12 md:col-span-6 lg:col-span-4 p-6 sm:p-10 border border-strokeColor hover:border-mainTextColor flex flex-col justify-start items-start bg-white hover:bg-s2 duration-700 group relative",
                    key: c
                }, [m ? (u(), p("div", PE, [LE, n("span", EE, [g(A(K1), {
                    weight: "fill"
                })])])) : D("", !0), n("div", BE, [(u(), ye(Ve(f), {
                    weight: "fill"
                }))]), n("h3", IE, P(d), 1), n("p", OE, P(h), 1), n("p", NE, [s.value ? (u(), p("span", zE, " $" + P(y), 1)) : D("", !0), s.value ? D("", !0) : (u(), p("span", jE, " $" + P(Number(y) * 12), 1)), RE]), (u(!0), p(G, null, oe(b, (M, V) => (u(), p("ul", {
                    class: "text-bodyText flex flex-col gap-5 pb-8",
                    key: V
                }, [n("li", DE, [n("span", FE, [g(A(Ne), {
                    weight: "fill"
                })]), ee(" " + P(M), 1)])]))), 128)), g(r, {
                    to: "/contact",
                    class: "py-4 w-full text-white font-medium bg-s1 rounded-full flex justify-center items-center gap-3 group-hover:bg-mainTextColor"
                }, {
                    default: ne(() => [ee(" Get Started "), g(A(qt), {
                        class: "text-xl leading-[0]"
                    })]),
                    _: 1
                })]))), 128))])])], 2)
            }
        }
    }),
    xl = "/images/circleIcon.png",
    qE = "/images/solution_illustrations.png",
    WE = {
        class: "stp-30 sbp-30 relative"
    },
    GE = n("div", {
        class: ""
    }, null, -1),
    UE = n("img", {
        src: xl,
        alt: "",
        class: "absolute top-10 left-0 max-xxl:hidden xxl:-left-72 xxxl:-left-40"
    }, null, -1),
    YE = n("img", {
        src: ds,
        alt: "",
        class: "absolute right-0 sm:right-2 lg:right-10 top-10 xl:top-32 max-md:h-[80px]"
    }, null, -1),
    KE = {
        class: "container z-10 relative"
    },
    JE = we('<div class="flex justify-center items-center"><div class="flex justify-center items-center max-xxl:overflow-hidden"><div class="max-w-[700px] text-center flex justify-center items-center flex-col"><p class="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white wow animate__animated animate__fadeInUp"> Solutions </p><h1 class="display-4 pt-4 pb-4 lg:pb-6 wow animate__animated animate__fadeInDown"> The global payroll solution </h1><p class="text-bodyText wow animate__animated animate__fadeInDown"> When it comes to payroll solutions, we have a variety of options that benefit both your company and your contractor. </p></div></div></div>', 1),
    QE = {
        class: "grid grid-cols-12 stp-15 max-lg:gap-6"
    },
    XE = n("div", {
        class: "col-span-12 lg:col-span-6"
    }, [n("div", {
        class: "flex justify-center items-center overflow-hidden self-stretch"
    }, [n("img", {
        src: qE,
        alt: "",
        class: "hover:scale-110 duration-500 w-full"
    })])], -1),
    eB = {
        class: "col-span-12 lg:col-start-8 lg:col-span-5 flex justify-center items-start flex-col"
    },
    tB = n("h1", {
        class: "heading-1 pb-5"
    }, "Consolidate Payroll Processing", -1),
    sB = n("p", {
        class: "text-bodyText"
    }, " We have designed a fast and effective payroll system that streamlines your payment process. ", -1),
    aB = {
        class: "grid grid-cols-2 gap-4 lg:gap-6 py-6 lg:py-10 w-full"
    },
    iB = {
        class: "rounded-full border border-strokeColor bg-softBg w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] text-4xl text-s1 group-hover:text-mainTextColor group-hover:bg-s2 group-hover:border-mainTextColor duration-500 !leading-[0] flex justify-center items-center"
    },
    nB = {
        class: "text-lg font-medium group-hover:text-s1 duration-500"
    },
    oB = {
        class: "flex justify-start items-start"
    },
    lB = {
        class: "group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl !leading-[0]"
    },
    rB = H({
        __name: "Solutions",
        setup(e) {
            return (t, s) => {
                const a = Ae("router-link");
                return u(), p("section", WE, [GE, UE, YE, n("div", KE, [JE, n("div", QE, [XE, n("div", eB, [tB, sB, n("div", aB, [(u(!0), p(G, null, oe(A(PH), ({
                    id: i,
                    name: o,
                    icon: l
                }) => (u(), p("div", {
                    class: "group col-span-2 sm:col-span-1 flex justify-start items-center gap-5",
                    key: i
                }, [n("span", iB, [(u(), ye(Ve(l), {
                    weight: "fill"
                }))]), n("p", nB, P(o), 1)]))), 128))]), n("div", oB, [g(a, {
                    to: "/contact",
                    class: "flex justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border border-mainTextColor text-mainTextColor group font-medium"
                }, {
                    default: ne(() => [ee(" Contact Us "), n("span", lB, [g(A(o1), {
                        weight: "bold"
                    })])]),
                    _: 1
                })])])])])])
            }
        }
    }),
    cB = "/images/stepArrow1.png",
    dB = "/images/stepArrow2.png",
    uB = {
        class: "stp-30 sbp-30"
    },
    pB = {
        class: "container"
    },
    fB = we('<div class="flex justify-center items-center"><div class="flex justify-center items-center max-xxl:overflow-hidden"><div class="max-w-[700px] text-center flex justify-center items-center flex-col"><p class="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white wow animate__animated animate__fadeInUp"> How it works </p><h1 class="display-4 pt-4 pb-4 lg:pb-6 wow animate__animated animate__fadeInDown"> A Step-by-Step Guide to Our Platform </h1><p class="text-bodyText wow animate__animated animate__fadeInUp"> Explore our platform with ease! Sign up, select your industry, and seamlessly integrate our tailored payment solutions. </p></div></div></div>', 1),
    hB = {
        class: "flex justify-between items-center gap-6 md:gap-4 lg:gap-6 stp-15 relative max-md:flex-col"
    },
    mB = n("img", {
        src: cB,
        alt: "",
        class: "absolute top-28 right-[22%] max-xxl:right-[23%] max-xxl:top-24 max-xxl:w-[200px] max-lg:right-[25%] max-lg:w-[100px] max-md:hidden"
    }, null, -1),
    gB = n("img", {
        src: dB,
        alt: "",
        class: "absolute top-16 left-[21%] max-xxl:top-20 max-xxl:left-[23%] max-xxl:w-[200px] max-lg:left-[25%] max-lg:w-[100px] max-md:hidden"
    }, null, -1),
    vB = {
        class: "text-s1 bg-softBg border border-strokeColor rounded-full p-6 lg:p-7 text-3xl lg:text-5xl"
    },
    yB = {
        class: "heading-4 pt-8 pb-6"
    },
    _B = {
        class: "text-bodyText"
    },
    d0 = H({
        __name: "StepByStepGuide",
        setup(e) {
            return (t, s) => (u(), p("section", uB, [n("div", pB, [fB, n("div", hB, [mB, gB, (u(!0), p(G, null, oe(A(EH), ({
                id: a,
                title: i,
                desc: o,
                icon: l
            }) => (u(), p("div", {
                class: "flex justify-center items-center text-center flex-col max-w-[350px]",
                key: a
            }, [n("div", vB, [(u(), ye(Ve(l), {
                weight: "fill"
            }))]), n("h4", yB, P(i), 1), n("p", _B, P(o), 1)]))), 128))])])]))
        }
    }),
    xB = {
        class: "stp-30 sbp-30 relative"
    },
    bB = we('<div class="overflow-hidden"><img src="' + ds + '" alt="" class="absolute top-0 right-2 -rotate-90 max-md:h-[80px]"></div><div class="container"><div class="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start"><div class="max-w-[600px] flex justify-center items-start flex-col"><p class="bg-p1 py-3 px-5 rounded-full text-white">Testimonial</p><h1 class="display-4 pt-4">Accupay Customer Stories</h1></div><p class="text-bodyText max-w-[500px]"> Startups thrive with AccuPay. Their flexible payroll solutions have been instrumental in our journey, providing the support </p></div></div>', 2),
    wB = {
        class: "sponsors stp-15"
    },
    $B = {
        class: "border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700"
    },
    AB = {
        class: "text-bodyText text-center"
    },
    SB = {
        class: "flex gap-3 pt-3"
    },
    MB = {
        class: ""
    },
    CB = ["src"],
    HB = {
        class: ""
    },
    ZB = {
        class: "text-lg font-medium"
    },
    TB = {
        class: "sponsors pt-6"
    },
    VB = {
        class: "border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700"
    },
    kB = {
        class: "text-bodyText text-center"
    },
    PB = {
        class: "flex gap-3 pt-3"
    },
    LB = {
        class: ""
    },
    EB = ["src"],
    BB = {
        class: ""
    },
    IB = {
        class: "text-lg font-medium"
    },
    k1 = H({
        __name: "Testimonial",
        setup(e) {
            return (t, s) => (u(), p("section", xB, [bB, n("div", wB, [g(A(t0), {
                class: "",
                modules: [A(e0), A(X1)],
                autoplay: {
                    delay: 1,
                    disableOnInteraction: !1
                },
                "slides-per-view": 1,
                loop: !0,
                freeMode: !0,
                speed: 12e3,
                centeredSlides: !0,
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        centeredSlides: !1
                    },
                    674: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        centeredSlides: !1
                    },
                    1050: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                        centeredSlides: !0
                    },
                    1400: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                        centeredSlides: !0
                    }
                }
            }, {
                default: ne(() => [(u(!0), p(G, null, oe(A(z0), ({
                    id: a,
                    img: i,
                    name: o,
                    designation: l,
                    review: r
                }) => (u(), ye(A(s0), {
                    key: a
                }, {
                    default: ne(() => [n("div", $B, [n("p", AB, '"' + P(r) + '"', 1), n("div", SB, [n("div", MB, [n("img", {
                        src: i,
                        alt: "",
                        class: "rounded-full"
                    }, null, 8, CB)]), n("div", HB, [n("p", ZB, P(o), 1), n("p", null, P(l), 1)])])])]),
                    _: 2
                }, 1024))), 128))]),
                _: 1
            }, 8, ["modules"])]), n("div", TB, [g(A(t0), {
                class: "",
                modules: [A(e0), A(X1)],
                autoplay: {
                    delay: 1,
                    disableOnInteraction: !1,
                    reverseDirection: !0
                },
                "slides-per-view": 1,
                loop: !0,
                freeMode: !0,
                speed: 12e3,
                centeredSlides: !0,
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        centeredSlides: !1
                    },
                    674: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        centeredSlides: !1
                    },
                    1050: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                        centeredSlides: !0
                    },
                    1400: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                        centeredSlides: !0
                    }
                }
            }, {
                default: ne(() => [(u(!0), p(G, null, oe(A(z0), ({
                    id: a,
                    img: i,
                    name: o,
                    designation: l,
                    review: r
                }) => (u(), ye(A(s0), {
                    key: a
                }, {
                    default: ne(() => [n("div", VB, [n("p", kB, '"' + P(r) + '"', 1), n("div", PB, [n("div", LB, [n("img", {
                        src: i,
                        alt: "",
                        class: "rounded-full"
                    }, null, 8, EB)]), n("div", BB, [n("p", IB, P(o), 1), n("p", null, P(l), 1)])])])]),
                    _: 2
                }, 1024))), 128))]),
                _: 1
            }, 8, ["modules"])])]))
        }
    }),
    OB = {
        class: "bg-softBg1 stp-30 sbp-30 overflow-hidden"
    },
    NB = {
        class: "container"
    },
    zB = we('<div class="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start"><div class="max-w-[600px] flex justify-center items-start flex-col"><p class="bg-p1 py-3 px-5 rounded-full text-white">Why Accupay</p><h1 class="display-4 pt-4">A platform for your global team</h1></div><p class="text-bodyText max-w-[500px]"> Your dependable guide to achieving freedom from manual HR work and building that perfect workplace you have always aspired to build. Your dependable guide to achieving freedom. </p></div>', 1),
    jB = {
        class: "grid grid-cols-12 gap-6 stp-15"
    },
    RB = {
        class: ""
    },
    DB = ["src"],
    FB = {
        class: "pt-8 heading-4"
    },
    vs = H({
        __name: "WhyAccupaySection",
        setup(e) {
            return (t, s) => (u(), p("section", OB, [n("div", NB, [zB, n("div", jB, [(u(!0), p(G, null, oe(A(BH), ({
                id: a,
                img: i,
                title: o
            }) => (u(), p("div", {
                class: "col-span-12 sm:col-span-6 lg:col-span-4 bg-white p-6 xl:py-10 xl:px-15 flex flex-col items-center border border-white group hover:border-mainTextColor duration-700 hover:bg-s2",
                key: a
            }, [n("div", RB, [n("img", {
                src: i,
                alt: ""
            }, null, 8, DB)]), n("h4", FB, P(o), 1)]))), 128))])])]))
        }
    }),
    qB = {
        class: "relative overflow-hidden"
    },
    WB = H({
        __name: "Home",
        setup(e) {
            return (t, s) => (u(), p("main", qB, [g(yE), g(oL), g(rB), g(WL), g(Ua), g(d0), g(vs), g(SE), g(_l), g(k1), g(gs), g(Zk), g(ms)]))
        }
    }),
    GB = "/images/404.png",
    UB = {
        class: "container flex flex-col justify-center items-center stp-30 h-screen"
    },
    YB = n("div", {
        class: ""
    }, [n("img", {
        src: GB,
        alt: ""
    })], -1),
    KB = n("h1", {
        class: "display-4"
    }, "Page Not Found", -1),
    JB = n("p", {
        class: "text-lg text-bodyText text-center py-8"
    }, " We’re sorry, the page you requested could not be found please go back to the homepage ", -1),
    hn = H({
        __name: "NotFound",
        setup(e) {
            return (t, s) => (u(), p("main", null, [n("div", UB, [YB, KB, JB, g(c0, {
                link: "/",
                text: "Go Home"
            })])]))
        }
    }),
    QB = "/images/about_vector.png",
    XB = {
        class: "pt-24 lg:pt-30 sbp-30 bg-softBg1 relative"
    },
    eI = n("img", {
        src: xl,
        alt: "",
        class: "absolute top-60 -left-20 max-lg:h-[400px] max-sm:hidden"
    }, null, -1),
    tI = n("img", {
        src: QB,
        alt: "",
        class: "absolute top-36 right-0 xl:right-28 max-lg:hidden"
    }, null, -1),
    sI = {
        class: "container pb-10"
    },
    aI = {
        class: "flex justify-start items-center gap-1"
    },
    iI = {
        class: "flex justify-start items-center gap-1"
    },
    nI = {
        class: "flex justify-start items-center gap-1"
    },
    oI = {
        class: "flex justify-center items-center flex-col"
    },
    lI = we('<div class="flex justify-center items-center pb-10 lg:pb-16 xl:pb-24"><div class="max-w-[600px] text-center flex justify-center items-center flex-col"><p class="bg-p1 py-3 px-5 rounded-full text-white">About</p><h1 class="display-4 pt-4 pb-6">Work with AccuPay</h1><p class="text-bodyText"> Welcome to AccuPay, where financial excellence meets personalized service. At AccuPay, we understand the intricacies of accounting and payroll processing. </p></div></div>', 1),
    rI = {
        class: "bg-[url('/images/aboutVideoImg.png')] stp-30 sbp-30 w-[80%] h-[300px] bg-cover md:h-[400px] lg:h-[500px] xl:h-[600px] xxl:h-[800px] flex justify-center items-center z-10 relative after:absolute after:inset-0 after:bg-black/20"
    },
    cI = {
        class: "relative z-[999]"
    },
    dI = {
        class: "w-full flex justify-end items-end absolute -top-10 sm:-top-2 right-0 sm:-right-9 lg:-right-12 z-[9999]"
    },
    uI = {
        class: "text-4xl lg:text-[44px] text-white"
    },
    pI = n("iframe", {
        src: "https://www.youtube.com/embed/ynLpZGegiJE?si=_KfsQPkSeEHF238S",
        title: "YouTube video player",
        frameborder: "0",
        class: "w-[300px] h-[200px] sm:w-[500px] sm:h-[300px] lg:w-[800px] lg:h-[500px]",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        allowfullscreen: ""
    }, null, -1),
    fI = H({
        __name: "AboutSection",
        setup(e) {
            const t = le(!1),
                s = () => {
                    t.value = !t.value
                };
            return (a, i) => (u(), p("section", XB, [eI, tI, n("div", sI, [n("ul", aI, [n("li", iI, [g(A(Mo), {
                weight: "light"
            }), ee(" Home ")]), n("li", nI, [g(A(O0), {
                weight: "light"
            }), ee(" About ")])])]), n("div", oI, [lI, n("div", rI, [n("button", {
                class: "bg-softBg1 text-s1 p-6 lg:p-6 rounded-full text-3xl lg:text-5xl hover:bg-s2 hover:text-white duration-500 relative z-20",
                onClick: s
            }, [g(A(Zo), {
                weight: "fill"
            })])])]), n("div", {
                class: Se(["fixed inset-0 bg-black/60 z-[998]", {
                    "invisible opacity-0 duration-500": !t.value,
                    "visible opacity-100 duration-500": t.value
                }])
            }, null, 2), n("div", {
                class: Se(["fixed inset-0 z-[999] flex justify-center items-center videoModal videoModalClose", {
                    "invisible opacity-0 translate-y-6 duration-500": !t.value,
                    "visible opacity-100 translate-y-0 duration-500": t.value
                }])
            }, [n("div", cI, [n("div", dI, [n("button", {
                class: "hover:rotate-90 duration-300 videoModalButtonClose",
                onClick: s
            }, [n("i", uI, [g(A(Po))])])]), pI])], 2)]))
        }
    }),
    hI = "/images/accupay_developer.png",
    mI = {
        class: "stp-30 sbp-30"
    },
    gI = {
        class: "container grid grid-cols-12 max-lg:gap-6"
    },
    vI = we('<div class="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col justify-center items-start"><p class="bg-p1 py-3 px-5 rounded-full text-white">Accupay Story</p><h1 class="display-4 pt-4 pb-6"> In 2012, an exciting journey began with a daring vision. </h1><p class="uppercase text-bodyText font-medium text-base lg:text-xl"> message from our ceo. </p><p class="heading-3 pt-4 pb-6"> “A successful team requires members with complementary skill sets.” </p><div class="flex justify-start items-center gap-3"><img src="' + hI + '" alt="" class="rounded-full"><div class=""><p>Sa Kibb</p><p class="text-bodyText text-sm">CEO Accupay</p></div></div></div>', 1),
    yI = {
        class: "lg:col-start-7 col-span-12 md:col-span-6 flex flex-col gap-6 lg:gap-10 max-md:pt-6"
    },
    _I = {
        class: "heading-4 pb-6"
    },
    xI = {
        class: "text-bodyText"
    },
    bI = H({
        __name: "StorySection",
        setup(e) {
            return (t, s) => (u(), p("section", mI, [n("div", gI, [vI, n("div", yI, [(u(!0), p(G, null, oe(A(RH), ({
                id: a,
                title: i,
                desc: o
            }) => (u(), p("div", {
                class: "border-b pb-6 lg:pb-10",
                key: a
            }, [n("h4", _I, P(i), 1), n("p", xI, P(o), 1)]))), 128))])])]))
        }
    }),
    wI = {
        class: "flex justify-center items-center max-xxl:overflow-hidden"
    },
    $I = {
        class: "max-w-[700px] text-center flex justify-center items-center flex-col"
    },
    AI = {
        class: "bg-p1 py-2 sm:py-3 px-5 rounded-full text-white"
    },
    SI = {
        class: "display-4 pt-4 pb-4 lg:pb-6"
    },
    MI = {
        class: "text-bodyText"
    },
    P1 = H({
        __name: "SectionHeading",
        props: {
            sectionName: {},
            sectionTitle: {},
            sectionDesc: {}
        },
        setup(e) {
            return (t, s) => (u(), p("div", wI, [n("div", $I, [n("p", AI, P(t.sectionName), 1), n("h1", SI, P(t.sectionTitle), 1), n("p", MI, P(t.sectionDesc), 1)])]))
        }
    }),
    CI = {
        class: "stp-30 sbp-30 bg-softBg1"
    },
    HI = {
        class: "container"
    },
    ZI = {
        class: "grid grid-cols-12 gap-6 stp-15"
    },
    TI = {
        class: "text-6xl text-s1"
    },
    VI = {
        class: "heading-4 pb-4 pt-3"
    },
    kI = {
        class: "pb-5 text-center"
    },
    PI = H({
        __name: "OurValues",
        setup(e) {
            return (t, s) => (u(), p("section", CI, [n("div", HI, [g(P1, {
                sectionName: "Our Values",
                sectionTitle: "Our Values",
                sectionDesc: "At AccuPay, our values are the foundation of everything we do. They reflect our commitment to excellence, integrity, and client success."
            }), n("div", ZI, [(u(!0), p(G, null, oe(A(DH), ({
                id: a,
                icon: i,
                title: o,
                desc: l
            }) => (u(), p("div", {
                key: a,
                class: "col-span-12 min-[450px]:col-span-6 md:col-span-3 flex justify-center items-center flex-col"
            }, [n("div", TI, [(u(), ye(Ve(i), {
                weight: "fill"
            }))]), n("h4", VI, P(o), 1), n("p", kI, P(l), 1)]))), 128))])])]))
        }
    }),
    LI = "/images/award_element.png",
    EI = "/images/award_icon.png",
    BI = {
        class: "stp-30 sbp-30"
    },
    II = {
        class: "container grid grid-cols-12 gap-6"
    },
    OI = we('<div class="flex flex-col justify-star items-start col-span-12 min-[500px]:col-span-6 lg:col-span-5 max-[500px]:pb-15"><p class="bg-p1 py-3 px-5 rounded-full text-white">Our Awards</p><h2 class="display-4 pt-3">Award &amp; Achievement</h2><div class="flex flex-col justify-end items-start lg:items-end relative w-full"><img src="' + LI + '" alt="" class="absolute min-[500px]:-bottom-14 lg:bottom-0 min-[500px]:right-0 xl:right-20 bottom-0 right-4"><p class="text-[60px] md:text-[100px] xl:text-[150px] font-bold !leading-none text-outline -rotate-12 min-[500px]:-rotate-45 min-[500px]:pt-28 pt-8 lg:pt-40"> Award </p><p class="text-s1 text-[60px] md:text-[100px] xl:text-[150px] font-bold leading-none -rotate-12 min-[500px]:-rotate-45 min-[500px]:max-lg:pt-6 lg:pr-0 xl:pr-11"> Award </p></div></div>', 1),
    NI = {
        class: "col-span-12 min-[500px]:col-span-6 lg:col-start-7 flex flex-col justify-start items-start gap-6 lg:gap-10 relative"
    },
    zI = ["onMouseenter"],
    jI = {
        class: ""
    },
    RI = {
        class: "heading-4 group-hover:text-s2 duration-500"
    },
    DI = {
        class: "absolute top-4 lg:top-0 left-10 xl:left-1/2 w-[150px] lg:w-[250px] bg-s2 py-10 flex flex-col justify-center items-center border border-mainTextColor -translate-y-4 duration-500 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:z-10 group-hover:translate-y-4"
    },
    FI = n("img", {
        src: EI,
        alt: ""
    }, null, -1),
    qI = {
        class: "heading-4 max-w-[100px] text-center pt-8"
    },
    WI = H({
        __name: "AwardSection",
        setup(e) {
            const t = le(""),
                s = a => {
                    t.value = a
                };
            return (a, i) => {
                const o = Ae("router-link");
                return u(), p("section", BI, [n("div", II, [OI, n("div", NI, [(u(!0), p(G, null, oe(A(FH), ({
                    id: l,
                    name: r,
                    desc: c
                }) => (u(), p("div", {
                    class: "flex justify-between items-center border-b pb-6 lg:pb-10 w-full group relative group",
                    key: l,
                    onMouseenter: f => s(r)
                }, [n("div", jI, [n("p", RI, P(r), 1), n("p", null, P(c), 1)]), g(o, {
                    to: "#",
                    class: "p-3 rounded-full bg-s1 text-2xl text-white group-hover:bg-s2 duration-500"
                }, {
                    default: ne(() => [g(A(o1))]),
                    _: 1
                }), n("div", DI, [FI, n("h4", qI, P(t.value), 1)])], 40, zI))), 128))])])])
            }
        }
    }),
    GI = H({
        __name: "AboutPage",
        setup(e) {
            return (t, s) => (u(), p(G, null, [g(fI), g(bI), g(PI), g(WI), g(Ua), g(vs), g(k1), g(gs), g(ms, {
                "is-top-padding": !0
            })], 64))
        }
    }),
    UI = {};

function YI(e, t) {
    const s = Ae("router-view");
    return u(), ye(s)
}
const b0 = r0(UI, [
        ["render", YI]
    ]),
    KI = "/images/breadcrump_icon.png",
    JI = {
        class: "stp-30 bg-softBg1 relative max-xxl:overflow-hidden"
    },
    QI = n("img", {
        src: KI,
        alt: "",
        class: "absolute bottom-0 left-[-10%] xxl:left-0 max-lg:hidden"
    }, null, -1),
    XI = {
        class: "container grid grid-cols-12 gap-6 max-md:stp-15 relative z-10"
    },
    eO = {
        class: "col-span-12 md:col-span-6 flex justify-center items-start flex-col"
    },
    tO = {
        class: "flex justify-start items-center gap-1 flex-wrap"
    },
    sO = n("span", {
        class: "hover:text-s2 duration-300"
    }, "Home", -1),
    aO = {
        key: 0
    },
    iO = {
        class: "hover:text-s2 duration-300"
    },
    nO = {
        class: "flex justify-start items-center gap-1"
    },
    oO = {
        class: "display-3 pt-4"
    },
    lO = {
        class: "text-bodyText pt-6"
    },
    rO = {
        class: "col-span-12 md:col-span-6 flex justify-center items-center"
    },
    cO = ["src"],
    ze = H({
        __name: "BreadcrumbSection",
        props: {
            pageDesc: {},
            pageTitle: {},
            middlePage: {},
            pageName: {},
            img: {}
        },
        setup(e) {
            return (t, s) => {
                const a = Ae("router-link");
                return u(), p("section", JI, [QI, n("div", XI, [n("div", eO, [n("ul", tO, [n("li", null, [g(a, {
                    to: "/",
                    class: "flex justify-start items-center gap-1"
                }, {
                    default: ne(() => [g(A(Mo)), sO]),
                    _: 1
                })]), t.middlePage ? (u(), p("li", aO, [g(a, {
                    to: "/" + t.middlePage.toLowerCase().replaceAll(" ", "-"),
                    class: "flex justify-start items-center gap-1"
                }, {
                    default: ne(() => [g(A(O0)), n("span", iO, P(t.middlePage), 1)]),
                    _: 1
                }, 8, ["to"])])) : D("", !0), n("li", nO, [g(A(O0)), ee(" " + P(t.pageName), 1)])]), n("h1", oO, P(t.pageTitle), 1), n("p", lO, P(t.pageDesc), 1)]), n("div", rO, [n("img", {
                    src: t.img,
                    alt: "",
                    class: "object-fit max-sm:max-h-[300px]"
                }, null, 8, cO)])])])
            }
        }
    }),
    dO = {
        class: "stp-30 sbp-30"
    },
    uO = {
        class: "container"
    },
    pO = n("div", {
        class: "flex justify-center items-center"
    }, [n("div", {
        class: "flex justify-center items-center max-w-[600px] flex-col"
    }, [n("h1", {
        class: "display-4"
    }, "Our Core Services"), n("p", {
        class: "text-bodyText text-center pt-6"
    }, " hile we go so much further and do so much more for clients, these core services help provide a framework to provide you with relevant, reliable & real-time reporting. ")])], -1),
    fO = {
        class: "grid grid-cols-12 stp-15 gap-6"
    },
    hO = {
        class: "flex justify-start items-start flex-col p-6 lg:p-10 group border border-strokeColor hover:bg-s2 hover:border-mainTextColor duration-500"
    },
    mO = {
        class: "bg-softBg1 p-4 rounded-full text-s1 group-hover:bg-mainTextColor group-hover:text-white duration-500 text-5xl"
    },
    gO = {
        class: "heading-4 pb-5 pt-8"
    },
    vO = {
        class: "text-bodyText lg:pr-4"
    },
    yO = H({
        __name: "CoreServices",
        setup(e) {
            return (t, s) => {
                const a = Ae("router-link");
                return u(), p("section", dO, [n("div", uO, [pO, n("div", fO, [(u(!0), p(G, null, oe(A(qH), ({
                    id: i,
                    icon: o,
                    title: l,
                    desc: r,
                    link: c
                }) => (u(), p("div", {
                    class: "col-span-12 sm:col-span-6 md:col-span-4",
                    key: i
                }, [n("div", hO, [n("div", mO, [(u(), ye(Ve(o), {
                    weight: "fill"
                }))]), g(a, {
                    to: c
                }, {
                    default: ne(() => [n("h4", gO, P(l), 1)]),
                    _: 2
                }, 1032, ["to"]), n("p", vO, P(r), 1)])]))), 128))])])])
            }
        }
    }),
    _O = "/images/faq_illus.png",
    xO = {
        class: "stp-30 sbp-30 relative"
    },
    bO = n("img", {
        src: ds,
        alt: "",
        class: "absolute top-0 left-0 -rotate-90 max-md:h-[80px]"
    }, null, -1),
    wO = {
        class: "container"
    },
    $O = {
        class: "grid grid-cols-12 stp-15 max-xl:gap-6"
    },
    AO = n("div", {
        class: "col-span-12 lg:col-span-6 xl:col-span-5 flex justify-center items-center overflow-hidden"
    }, [n("img", {
        src: _O,
        alt: "",
        class: "hover:scale-110 duration-500 w-full h-full"
    })], -1),
    SO = {
        class: "col-span-12 lg:col-span-6 xl:col-start-7 flex flex-col gap-4 md:gap-6"
    },
    MO = ["onClick"],
    CO = {
        class: ""
    },
    HO = {
        class: "heading-4"
    },
    ZO = {
        class: "pt-5"
    },
    TO = {
        class: "relative"
    },
    ys = H({
        __name: "FAQSection",
        setup(e) {
            const t = le(0);

            function s(a) {
                a === t.value ? t.value = NaN : t.value = a
            }
            return (a, i) => (u(), p("section", xO, [bO, n("div", wO, [g(P1, {
                sectionName: "FAQS",
                sectionTitle: "Frequently asked questions answers",
                sectionDesc: "Explore our FAQ section for quick answers to common queries about our Accounting & Payroll Processing Services. "
            }), n("div", $O, [AO, n("div", SO, [(u(!0), p(G, null, oe(A(IH), ({
                id: o,
                question: l,
                answer: r
            }, c) => (u(), p("div", {
                class: Se(["flex justify-between items-start gap-2 p-3 md:p-5 xl:p-6 border duration-500 cursor-pointer", {
                    "border-mainTextColor bg-s2": t.value === c,
                    "border-strokeColor": t.value !== c
                }]),
                key: o,
                onClick: f => s(c)
            }, [n("div", CO, [n("h4", HO, P(l), 1), g(A(ja), {
                duration: 700,
                height: t.value === c ? "auto" : 0
            }, {
                default: ne(() => [n("p", ZO, P(r), 1)]),
                _: 2
            }, 1032, ["height"])]), n("div", TO, [g(A(N0)), n("span", {
                class: Se(["absolute top-0 right-0 duration-700", {
                    "invisible duration-500": t.value === c,
                    " -rotate-[450deg]": t.value !== c
                }])
            }, [g(A(N0))], 2)])], 10, MO))), 128))])])])]))
        }
    }),
    VO = H({
        __name: "Services",
        setup(e) {
            return (t, s) => (u(), p(G, null, [g(ze, {
                img: "/images/breadcrumb_img_1.png",
                pageName: "Services",
                pageDesc: `Welcome to AccuPay, your trusted partner for comprehensive financial
            solutions. Explore our range of services tailored to meet your
            business needs.`,
                pageTitle: "Our All Services"
            }), g(yO), g(vs), g(d0), g(_l), g(gs), g(ys)], 64))
        }
    }),
    kO = "/images/we_help.png",
    PO = {
        class: "stp-30 sbp-30"
    },
    LO = {
        class: "container grid grid-cols-12 gap-6"
    },
    EO = {
        class: "col-span-12 md:col-span-6"
    },
    BO = n("h1", {
        class: "display-4"
    }, "We help you with payroll processing services", -1),
    IO = n("p", {
        class: "text-bodyText pt-4 pb-6 lg:pb-8"
    }, " At AccuPay, we understand the critical importance of accurate and timely payroll processing. Our comprehensive payroll solutions ", -1),
    OO = n("h3", {
        class: "heading-3 pb-6"
    }, "Our Payroll Processing Offerings:", -1),
    NO = {
        class: "flex flex-col gap-5 justify-start items-start"
    },
    zO = {
        class: "flex justify-start items-center gap-2"
    },
    jO = {
        class: "text-2xl text-s1"
    },
    RO = n("div", {
        class: "xxl:col-start-8 col-span-12 md:col-span-6 xxl:col-span-5 overflow-hidden flex justify-center items-center"
    }, [n("img", {
        src: kO,
        alt: "",
        class: "object-fit hover:scale-110 duration-500"
    })], -1),
    DO = H({
        __name: "WeHelpSection",
        setup(e) {
            const t = ["Efficient Payroll Management", "Compliance Assurance", "Direct Deposit Service", "Tax Filing and Reporting", "Employee Self-Service Portals"];
            return (s, a) => (u(), p("section", PO, [n("div", LO, [n("div", EO, [BO, IO, OO, n("ul", NO, [(u(), p(G, null, oe(t, (i, o) => n("li", {
                key: o
            }, [n("div", zO, [n("span", jO, [g(A(Ne), {
                weight: "fill"
            })]), ee(" " + P(i), 1)])])), 64))])]), RO])]))
        }
    }),
    FO = "/images/what_we_do.png",
    qO = {
        class: "bg-softBg1 stp-30 sbp-30"
    },
    WO = {
        class: "container"
    },
    GO = {
        class: "flex justify-center items-center"
    },
    UO = {
        class: "grid grid-cols-12 gap-6 stp-15"
    },
    YO = n("div", {
        class: "col-span-12 lg:col-span-6 xl:col-span-5 flex overflow-hidden justify-center items-center self-stretch"
    }, [n("img", {
        src: FO,
        alt: "",
        class: "hover:scale-110 duration-500 w-full h-full"
    })], -1),
    KO = {
        class: "col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col gap-6 xl:gap-10 justify-start items-start"
    },
    JO = {
        class: "text-white bg-s1 w-10 h-10 rounded-full flex justify-center items-center !leading-none"
    },
    QO = {
        class: "heading-4"
    },
    XO = {
        class: "text-bodyText pt-4 pb-6 xl:pb-10"
    },
    eN = H({
        __name: "WhatWeDo",
        setup(e) {
            return (t, s) => (u(), p("section", qO, [n("div", WO, [n("div", GO, [g(P1, {
                sectionName: "What We Do",
                sectionTitle: "Payroll services we provide for the client",
                sectionDesc: "At AccuPay, we specialize in delivering comprehensive Accounting and Payroll Processing services"
            })]), n("div", UO, [YO, n("div", KO, [(u(!0), p(G, null, oe(A(Cs), ({
                id: a,
                title: i,
                desc: o
            }, l) => (u(), p("div", {
                class: "flex justify-start items-start gap-4 sm:gap-6 group",
                key: a
            }, [n("div", {
                class: Se(["heading-4 group-hover:bg-s2 p-4 rounded-full relative duration-500", {
                    "after:absolute after:bg-strokeColor after:h-[200px] min-[340px]:after:h-[170px] min-[450px]:after:h-[130px] lg:after:h-[150px] after:w-[1px] after:right-1/2 group-hover:after:bg-s2 after:duration-500 group-hover:after:w-[3px]": l + 1 !== A(Cs).length
                }])
            }, [n("span", JO, P(l + 1), 1)], 2), n("div", {
                class: Se(["border-strokeColor", {
                    "border-b": l + 1 !== A(Cs).length
                }])
            }, [n("h4", QO, P(i), 1), n("p", XO, P(o), 1)], 2)]))), 128))])])])]))
        }
    }),
    tN = H({
        __name: "PayrollProcessing",
        setup(e) {
            return (t, s) => (u(), p("main", null, [g(ze, {
                img: "/images/breadcrumb_img_2.png",
                middlePage: "Services",
                pageName: "Payroll Processing",
                pageDesc: "Welcome to AccuPay, your trusted partner for comprehensive financial solutions. Explore our range of services tailored to meet your business needs.",
                pageTitle: "Payroll Processing"
            }), g(DO), g(eN), g(d0), g(Ua), g(vs), g(ms, {
                isTopPadding: !0
            })]))
        }
    }),
    sN = "/images/taxation_services_img.png",
    aN = {
        class: "stp-30 sbp-30"
    },
    iN = {
        class: "container grid grid-cols-12 gap-6 max-xxl:overflow-hidden"
    },
    nN = we('<div class="col-span-12 lg:col-span-6 xxl:col-span-5"><div class="flex justify-start items-start flex-col"><p class="bg-p1 py-3 px-5 rounded-full text-white">Taxation</p><h2 class="display-4 pt-4 pb-6">AccuPay&#39;s Taxation Expertise</h2><p class="text-bodyText pb-10"> Feel neglected by your accountant? Experience the attentive and personalized service you deserve with AccuPay. </p><div class="flex justify-center items-center w-full overflow-hidden"><img src="' + sN + '" alt="" class="hover:scale-110 duration-500 w-full h-full"></div></div></div>', 1),
    oN = {
        class: "col-span-12 lg:col-span-6 xxl:col-start-7 flex flex-col gap-6 xl:gap-10 justify-center items-center"
    },
    lN = {
        key: "{id}",
        class: "flex justify-start items-start gap-4"
    },
    rN = {
        class: "text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1"
    },
    cN = {
        class: ""
    },
    dN = {
        class: "heading-4"
    },
    uN = {
        class: "text-bodyText pt-3"
    },
    pN = H({
        __name: "TaxationSection",
        setup(e) {
            return (t, s) => (u(), p("section", aN, [n("div", iN, [nN, n("div", oN, [(u(!0), p(G, null, oe(A(UH), ({
                id: a,
                title: i,
                desc: o,
                icon: l
            }) => (u(), p("div", {
                class: "",
                key: a
            }, [n("div", lN, [n("div", rN, [(u(), ye(Ve(l), {
                weight: "fill"
            }))]), n("div", cN, [n("h4", dN, P(i), 1), n("p", uN, P(o), 1)])])]))), 128))])])]))
        }
    }),
    fN = {
        class: "bg-softBg1 stp-30 sbp-30"
    },
    hN = {
        class: "container grid grid-cols-12 gap-6 max-xxl:overflow-hidden"
    },
    mN = we('<div class="col-span-12 lg:col-span-6"><div class="flex justify-center items-start flex-col"><h2 class="display-4">How Small Business Tax Returns Are Prepared</h2><p class="font-medium py-5"> They help clients meet deadlines, maintain proper documentation, and fulfill reporting requirements, including income tax, sales tax, payroll tax,{&quot; &quot;} </p><p class="text-bodyText"> They help clients meet deadlines, maintain proper documentation, and fulfill reporting requirements, including income tax, sales tax, payroll tax, and other applicable taxes. In the event of a tax audit or examination by tax authorities, taxation services provide support and representation.{&quot; &quot;} </p></div></div>', 1),
    gN = {
        class: "col-span-12 lg:col-span-5 xl:col-start-8"
    },
    vN = {
        class: "relative flex justify-center items-center bg-[url('/images/taxation_video_img.png')] bg-no-repeat bg-cover max-[400px]:h-[250px] max-[500px]:h-[300px] h-[370px] sm:h-[400px]"
    },
    yN = {
        class: "relative z-[999]"
    },
    _N = {
        class: "w-full flex justify-end items-end absolute -top-10 sm:-top-2 right-0 sm:-right-9 lg:-right-12 z-[9999]"
    },
    xN = {
        class: "text-4xl lg:text-[44px] text-white"
    },
    bN = n("iframe", {
        src: "https://www.youtube.com/embed/ynLpZGegiJE?si=_KfsQPkSeEHF238S",
        title: "YouTube video player",
        frameborder: "0",
        class: "w-[300px] h-[200px] sm:w-[500px] sm:h-[300px] lg:w-[800px] lg:h-[500px]",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        allowfullscreen: ""
    }, null, -1),
    wN = H({
        __name: "TaxationVideoSection",
        setup(e) {
            const t = le(!1),
                s = () => {
                    t.value = !t.value
                };
            return (a, i) => (u(), p("section", fN, [n("div", hN, [mN, n("div", gN, [n("div", vN, [n("button", {
                class: "bg-softBg1 text-s1 p-4 lg:p-6 rounded-full text-3xl lg:text-4xl hover:bg-s2 hover:text-white duration-500 z-20 relative",
                onClick: s
            }, [g(A(Zo), {
                weight: "fill"
            })])])])]), n("div", {
                class: Se(["fixed inset-0 bg-black/60 z-[998]", {
                    "invisible opacity-0 duration-500": !t.value,
                    "visible opacity-100 duration-500": t.value
                }])
            }, null, 2), n("div", {
                class: Se(["fixed inset-0 z-[999] flex justify-center items-center videoModal videoModalClose", {
                    "invisible opacity-0 translate-y-6 duration-500": !t.value,
                    "visible opacity-100 translate-y-0 duration-500": t.value
                }])
            }, [n("div", yN, [n("div", _N, [n("button", {
                class: "hover:rotate-90 duration-300 videoModalButtonClose",
                onClick: s
            }, [n("i", xN, [g(A(Po))])])]), bN])], 2)]))
        }
    }),
    $N = {
        class: "bg-softBg1 stp-30 sbp-30"
    },
    AN = {
        class: "container"
    },
    SN = we('<div class="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start"><div class="max-w-[600px] flex justify-center items-start flex-col"><p class="bg-p1 py-3 px-5 rounded-full text-white">What We Do</p><h1 class="display-4 pt-4"> Why Choose AccuPay for Taxation Services? </h1></div><p class="text-bodyText max-w-[500px]"> Accounting, Taxation &amp; Payroll Processing Services refer to a range of professional services provided by accounting firms or specialized firms that assist businesses </p></div>', 1),
    MN = {
        class: "grid grid-cols-12 gap-6 stp-15"
    },
    CN = {
        class: "bg-white p-6 xl:p-8 flex flex-col border border-white group hover:border-mainTextColor duration-700 hover:bg-s2 group items-start justify-start"
    },
    HN = {
        class: "text-4xl text-s1 p-3 group-hover:text-mainTextColor duration-500 bg-softBg1 group-hover:bg-white rounded-full"
    },
    ZN = {
        class: "heading-4 pb-5 pt-8"
    },
    TN = {
        class: "text-bodyText"
    },
    VN = H({
        __name: "WhatWeDoTaxation",
        setup(e) {
            return (t, s) => (u(), p("section", $N, [n("div", AN, [SN, n("div", MN, [(u(!0), p(G, null, oe(A(YH), ({
                id: a,
                icon: i,
                title: o,
                desc: l
            }) => (u(), p("div", {
                class: "col-span-12 sm:col-span-6 md:col-span-4",
                key: a
            }, [n("div", CN, [n("div", HN, [(u(), ye(Ve(i), {
                weight: "fill"
            }))]), n("h4", ZN, P(o), 1), n("p", TN, P(l), 1)])]))), 128))])])]))
        }
    }),
    kN = H({
        __name: "TaxationServices",
        setup(e) {
            return (t, s) => (u(), p(G, null, [n("main", null, [g(ze, {
                img: "/images/breadcrumb_img_4.png",
                middlePage: "Services",
                pageName: "Taxations Services",
                pageDesc: "AccuPay takes the complexity out of taxes, offering a range of services to ensure your business stays compliant and maximizes.",
                pageTitle: "Taxations Services"
            })]), g(pN), g(VN), g(d0), g(wN), g(k1)], 64))
        }
    }),
    PN = "/images/real_state_section_img.png",
    LN = {
        class: "stp-30 sbp-30"
    },
    EN = {
        class: "container grid grid-cols-12 gap-6"
    },
    BN = we('<div class="col-span-12 lg:col-span-6 xxl:col-span-5 flex justify-start items-start flex-col"><p class="bg-p1 py-3 px-5 rounded-full text-white">Real-estate</p><h2 class="display-4 pt-4 pb-6">Real estate payroll, real simple</h2><p class="text-bodyText pb-6 lg:pb-10"> With reliable commission payments and support for both employees and independent contractors, Gusto takes the complexity out of payroll for real estate. </p><div class="flex justify-center items-center w-full overflow-hidden"><img src="' + PN + '" alt="" class="hover:scale-110 duration-500 w-full h-full"></div></div>', 1),
    IN = {
        class: "col-span-12 lg:col-span-6 xxl:col-start-7 flex flex-col gap-6 xl:gap-10 justify-center items-center"
    },
    ON = {
        class: "text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1"
    },
    NN = {
        class: ""
    },
    zN = {
        class: "heading-4"
    },
    jN = {
        class: "text-bodyText pt-3"
    },
    RN = H({
        __name: "RealStateSection",
        setup(e) {
            return (t, s) => (u(), p("section", LN, [n("div", EN, [BN, n("div", IN, [(u(!0), p(G, null, oe(A(KH), ({
                id: a,
                title: i,
                desc: o,
                icon: l
            }) => (u(), p("div", {
                class: "flex justify-start items-start gap-4",
                key: a
            }, [n("div", ON, [(u(), ye(Ve(l), {
                weight: "fill"
            }))]), n("div", NN, [n("h4", zN, P(i), 1), n("p", jN, P(o), 1)])]))), 128))])])]))
        }
    }),
    DN = "/images/save_time_money_section.png",
    FN = {
        class: "stp-30 sbp-30 bg-softBg1 overflow-hidden"
    },
    qN = n("img", {
        src: DN,
        alt: "",
        class: "w-full h-full"
    }, null, -1),
    WN = [qN],
    GN = n("div", {
        class: "col-span-12 lg:col-span-6 flex justify-center items-start flex-col"
    }, [n("p", {
        class: "bg-p1 py-3 px-5 rounded-full text-white"
    }, "Save time & money"), n("h2", {
        class: "display-4 pt-4 pb-6"
    }, " Time-Saving Solutions for Business Growth "), n("p", {
        class: "text-bodyText"
    }, " Our built-in commission tool gets your agents paid quickly and accurately every time they close. Pay your salaried employees on AutoPilot, and easily approve hours for any support staff and contractors. ")], -1),
    Ya = H({
        __name: "SaveTimeMoney",
        props: {
            isImgRight: {
                type: Boolean
            }
        },
        setup(e) {
            return (t, s) => (u(), p("section", FN, [n("div", {
                class: Se(["max-xxl:container grid grid-cols-12 lg:gap-6 xxl:gap-32", {
                    "xxl:ml-[calc((100%-1296px)/2)]": t.isImgRight,
                    "xxl:mr-[calc((100%-1296px)/2)]": !t.isImgRight
                }])
            }, [n("div", {
                class: Se(["col-span-12 lg:col-span-6 flex justify-start items-start self-stretch", {
                    "order-2": t.isImgRight,
                    "max-lg:order-2": !t.isImgRight
                }])
            }, WN, 2), GN], 2)]))
        }
    }),
    UN = {
        class: "bg-softBg1 stp-30 sbp-30"
    },
    YN = {
        class: "container grid grid-cols-12 gap-6"
    },
    KN = {
        class: "flex justify-start items-center flex-col"
    },
    JN = {
        class: "text-5xl text-s1"
    },
    QN = {
        class: "heading-4 pt-6 pb-3 text-center"
    },
    XN = {
        class: "text-center lg:px-4 xxl:px-8"
    },
    bl = H({
        __name: "ServicesFeatures",
        setup(e) {
            return (t, s) => (u(), p("section", UN, [n("div", YN, [(u(!0), p(G, null, oe(A(JH), ({
                id: a,
                title: i,
                desc: o,
                icon: l
            }) => (u(), p("div", {
                class: "col-span-12 md:col-span-4",
                key: a
            }, [n("div", KN, [n("div", JN, [(u(), ye(Ve(l), {
                weight: "fill"
            }))]), n("h4", QN, P(i), 1), n("p", XN, P(o), 1)])]))), 128))])]))
        }
    }),
    ez = "/images/unlimited_payrolls_img.png",
    tz = {},
    sz = {
        class: "stp-30 sbp-30"
    },
    az = we('<div class="container grid grid-cols-12 gap-6 max-xxl:overflow-hidden"><div class="col-span-12 md:col-span-6"><div class="flex justify-start items-start flex-col"><p class="bg-p1 py-3 px-5 rounded-full text-white"> Unlimited Payrolls </p><h2 class="display-4 pt-4 pb-6"> Covering Payroll Hourly, Salaried, or Commission </h2><p class="text-bodyText"> Our built-in commission tool gets your agents paid quickly and accurately every time they close. Pay your salaried employees on AutoPilot, and easily approve hours for any support staff and contractors. </p></div></div><div class="col-span-12 md:col-span-6 xxl:col-start-8"><div class="flex justify-center items-center"><img src="' + ez + '" alt=""></div></div></div>', 1),
    iz = [az];

function nz(e, t) {
    return u(), p("section", sz, iz)
}
const oz = r0(tz, [
        ["render", nz]
    ]),
    lz = H({
        __name: "RealStateServices",
        setup(e) {
            return (t, s) => (u(), p("main", null, [g(ze, {
                img: "/images/breadcrumb_img_5.png",
                middlePage: "Services",
                pageName: "Real Estate Services",
                pageDesc: "AccuPay's Real Estate Services are designed to simplify the complexities of real estate transactions, investments, and property management.",
                pageTitle: "Real-estate Services"
            }), g(RN), g(bl), g(oz), g(Ya), g(k1)]))
        }
    }),
    rz = "/images/healthcare_section_img.png",
    cz = {
        class: "stp-30 sbp-30"
    },
    dz = {
        class: "container"
    },
    uz = {
        class: "grid grid-cols-12 gap-6 stp-15"
    },
    pz = n("div", {
        class: "col-span-12 lg:col-span-6 xl:col-span-5 flex justify-center items-center overflow-hidden"
    }, [n("img", {
        src: rz,
        alt: "",
        class: "hover:scale-110 duration-500 w-full h-full"
    })], -1),
    fz = {
        class: "col-span-12 lg:col-span-6 xxl:col-start-7 flex flex-col gap-6 xl:gap-10 justify-center items-center"
    },
    hz = {
        class: "text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1"
    },
    mz = {
        class: ""
    },
    gz = {
        class: "heading-4"
    },
    vz = {
        class: "text-bodyText pt-3"
    },
    yz = H({
        __name: "HealthCareSection",
        setup(e) {
            return (t, s) => (u(), p("section", cz, [n("div", dz, [g(P1, {
                sectionName: "Healthcare",
                sectionTitle: "Healthcare payroll without the headaches.",
                sectionDesc: "We get it—managing payroll for healthcare is complex. That’s why we’ve designed our platform to streamline your workflow from start to finish."
            }), n("div", uz, [pz, n("div", fz, [(u(!0), p(G, null, oe(A(QH), ({
                id: a,
                title: i,
                desc: o,
                icon: l
            }) => (u(), p("div", {
                class: "flex justify-start items-start gap-4",
                key: a
            }, [n("div", hz, [(u(), ye(Ve(l), {
                weight: "fill"
            }))]), n("div", mz, [n("h4", gz, P(i), 1), n("p", vz, P(o), 1)])]))), 128))])])])]))
        }
    }),
    _z = "/images/manage_health_section_img.png",
    xz = {
        class: "stp-30 sbp-30"
    },
    bz = {
        class: "container grid grid-cols-12 gap-6 max-xxl:overflow-hidden"
    },
    wz = {
        class: "col-span-12 md:col-span-6"
    },
    $z = {
        class: "flex justify-start items-start"
    },
    Az = {
        class: "max-w-[600px] flex justify-start items-start flex-col"
    },
    Sz = n("p", {
        class: "bg-p1 py-3 px-5 rounded-full text-white"
    }, "Healthcare", -1),
    Mz = n("h1", {
        class: "display-4 pt-4 pb-6"
    }, " Manage Your Home Health Business. ", -1),
    Cz = n("p", {
        class: "text-bodyText pb-8"
    }, " Discover the freedom to oversee and optimize your home health care operations from anywhere with AccuPay's mobile-friendly management solutions. ", -1),
    Hz = {
        class: "grid grid-cols-2 gap-6"
    },
    Zz = {
        class: "flex justify-start items-center gap-2"
    },
    Tz = {
        class: "block bg-softBg1 rounded-full p-3 text-s1 text-2xl"
    },
    Vz = n("div", {
        class: "col-span-12 md:col-span-6 xl:col-span-5 xxl:col-start-8 flex justify-center items-center"
    }, [n("img", {
        src: _z,
        alt: ""
    })], -1),
    kz = H({
        __name: "ManageHealth",
        setup(e) {
            return (t, s) => (u(), p("section", xz, [n("div", bz, [n("div", wz, [n("div", $z, [n("div", Az, [Sz, Mz, Cz, n("ul", Hz, [(u(!0), p(G, null, oe(A(XH), ({
                id: a,
                icon: i,
                title: o
            }) => (u(), p("li", {
                class: "col-span-1",
                key: a
            }, [n("div", Zz, [n("span", Tz, [(u(), ye(Ve(i), {
                weight: "fill"
            }))]), ee(" " + P(o), 1)])]))), 128))])])])]), Vz])]))
        }
    }),
    Pz = H({
        __name: "HealthCareServices",
        setup(e) {
            return (t, s) => (u(), p("main", null, [g(ze, {
                img: "/images/breadcrumb_img_6.png",
                middlePage: "Services",
                pageName: "Healthcare Services",
                pageDesc: "AccuPay's Healthcare Services are designed to support the financial health of your medical practice or healthcare facility",
                pageTitle: "Healthcare Services"
            }), g(yz), g(bl), g(kz), g(Ya), g(k1)]))
        }
    }),
    Lz = "/images/dedicated_img.png",
    Ez = {
        class: "stp-30 sbp-30 bg-softBg1"
    },
    Bz = {
        class: "container grid grid-cols-12 gap-6"
    },
    Iz = n("div", {
        class: "col-span-12 md:col-span-6 lg:col-span-5 max-md:order-2 overflow-hidden"
    }, [n("img", {
        src: Lz,
        alt: "",
        class: "hover:scale-110 duration-500 w-full h-full"
    })], -1),
    Oz = {
        class: "col-span-12 md:col-span-6 lg:col-start-7 flex justify-center items-start flex-col"
    },
    Nz = n("p", {
        class: "bg-p1 py-3 px-5 rounded-full text-white"
    }, "Dedicated Support", -1),
    zz = n("h2", {
        class: "display-4 pt-4 pb-6"
    }, "Run a Smarter Dental Practice", -1),
    jz = n("p", {
        class: "text-bodyText pb-8"
    }, " At Accupay, we don’t think payroll should feel like pulling teeth. That’s why we’ve made the process as painless as possible. But if you should have any questions, our best-in-class support team is just a call, chat, or email away. ", -1),
    Rz = H({
        __name: "DedicatedSupport",
        setup(e) {
            return (t, s) => (u(), p("section", Ez, [n("div", Bz, [Iz, n("div", Oz, [Nz, zz, jz, g(c0, {
                link: "/contact",
                text: "Contact Us"
            })])])]))
        }
    }),
    Dz = "/images/dentist_section_img.png",
    Fz = {
        class: "stp-30 sbp-30"
    },
    qz = {
        class: "container grid grid-cols-12 gap-6"
    },
    Wz = we('<div class="col-span-12 lg:col-span-6 xxl:col-span-5 flex justify-start items-start flex-col"><p class="bg-p1 py-3 px-5 rounded-full text-white">Dentist</p><h2 class="display-4 pt-4 pb-6">Tailored Solutions for Dentists</h2><p class="text-bodyText pb-6 lg:pb-10"> AccuPay is dedicated to supporting the financial health of your dental practice. From payroll solutions for dental professionals to compliance management, </p><div class="flex justify-center items-center w-full overflow-hidden"><img src="' + Dz + '" alt="" class="hover:scale-110 duration-500 w-full h-full"></div></div>', 1),
    Gz = {
        class: "col-span-12 lg:col-span-6 xxl:col-start-7 flex flex-col gap-6 xl:gap-10 justify-center items-center"
    },
    Uz = {
        class: "text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1"
    },
    Yz = {
        class: ""
    },
    Kz = {
        class: "heading-4"
    },
    Jz = {
        class: "text-bodyText pt-3"
    },
    Qz = H({
        __name: "DentistSection",
        setup(e) {
            return (t, s) => (u(), p("section", Fz, [n("div", qz, [Wz, n("div", Gz, [(u(!0), p(G, null, oe(A(eZ), ({
                id: a,
                title: i,
                desc: o,
                icon: l
            }) => (u(), p("div", {
                class: "flex justify-start items-start gap-4",
                key: a
            }, [n("div", Uz, [(u(), ye(Ve(l), {
                weight: "fill"
            }))]), n("div", Yz, [n("h4", Kz, P(i), 1), n("p", Jz, P(o), 1)])]))), 128))])])]))
        }
    }),
    Xz = H({
        __name: "DentistServices",
        setup(e) {
            return (t, s) => (u(), p("main", null, [g(ze, {
                img: "/images/breadcrumb_img_7.png",
                middlePage: "Services",
                pageName: "Dentist Services ",
                pageDesc: "AccuPay is dedicated to supporting the financial health of your dental practice. From payroll solutions for dental professionals",
                pageTitle: "Dentist Services "
            }), g(Qz), g(Ya, {
                isImgRight: !0
            }), g(ms, {
                "is-top-padding": !0
            }), g(Rz), g(k1)]))
        }
    }),
    ej = {
        class: "stp-30 sbp-30"
    },
    tj = {
        class: "container"
    },
    sj = {
        class: "grid grid-cols-12 stp-15 gap-6"
    },
    aj = {
        class: "flex justify-start items-start flex-col p-6 xl:p-10 group border border-strokeColor hover:bg-s2 hover:border-mainTextColor duration-500"
    },
    ij = {
        class: "bg-softBg1 p-4 rounded-full text-s1 group-hover:bg-mainTextColor group-hover:text-white duration-500 text-5xl"
    },
    nj = {
        class: "heading-4 pb-5 pt-8"
    },
    oj = {
        class: "text-bodyText lg:pr-4"
    },
    lj = H({
        __name: "AccountingServices",
        setup(e) {
            return (t, s) => (u(), p("section", ej, [n("div", tj, [g(P1, {
                sectionName: "Accounting Services",
                sectionTitle: "Explore Our Accounting Services",
                sectionDesc: "At AccuPay, our Accounting Services are designed to provide you with a comprehensive and accurate financial picture. "
            }), n("div", sj, [(u(!0), p(G, null, oe(A(WH), ({
                id: a,
                icon: i,
                title: o,
                desc: l
            }) => (u(), p("div", {
                class: "col-span-12 sm:col-span-6 xl:col-span-3",
                key: a
            }, [n("div", aj, [n("div", ij, [(u(), ye(Ve(i), {
                weight: "fill"
            }))]), n("h4", nj, P(o), 1), n("p", oj, P(l), 1)])]))), 128))])])]))
        }
    }),
    rj = "/images/never_worry_img.png",
    cj = {
        class: "bg-softBg1 stp-30 sbp-30 max-xxl:overflow-hidden"
    },
    dj = {
        class: "container grid grid-cols-12 gap-6"
    },
    uj = n("div", {
        class: "col-span-12 lg:col-span-6 xl:col-span-5 flex justify-center items-center max-lg:order-2 max-lg:stp-15 overflow-hidden"
    }, [n("img", {
        src: rj,
        alt: "",
        class: "hover:scale-110 duration-500 w-full h-full"
    })], -1),
    pj = {
        class: "xxl:col-start-7 col-span-12 lg:col-span-6"
    },
    fj = n("h1", {
        class: "display-4"
    }, "Never Worry About Your Accounting Again", -1),
    hj = n("p", {
        class: "pt-6 text-bodyText pb-6 xl:pb-8"
    }, " Experience peace of mind with AccuPay. Our comprehensive accounting services ensure accuracy and compliance, so you can focus on growing your business ", -1),
    mj = {
        class: "flex flex-col gap-6 xl:gap-10 justify-start items-start pb-6 xl:pb-12"
    },
    gj = {
        class: "text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-white"
    },
    vj = {
        class: ""
    },
    yj = {
        class: "heading-4"
    },
    _j = {
        class: "text-bodyText pt-2"
    },
    xj = H({
        __name: "NeverWorrySection",
        setup(e) {
            return (t, s) => {
                const a = Ae("router-link");
                return u(), p("section", cj, [n("div", dj, [uj, n("div", pj, [fj, hj, n("div", mj, [(u(!0), p(G, null, oe(A(GH), ({
                    id: i,
                    title: o,
                    desc: l,
                    icon: r
                }) => (u(), p("div", {
                    class: "flex justify-start items-center gap-4",
                    key: i
                }, [n("div", gj, [(u(), ye(Ve(r), {
                    weight: "fill"
                }))]), n("div", vj, [n("h4", yj, P(o), 1), n("p", _j, P(l), 1)])]))), 128))]), g(a, {
                    to: "/contact",
                    class: "bg-s2 rounded-full py-3 px-6 font-medium"
                }, {
                    default: ne(() => [ee(" Contact Us ")]),
                    _: 1
                })])])])
            }
        }
    }),
    bj = "/images/account_section_img.png",
    wj = {
        class: "bg-softBg1 stp-30 sbp-30"
    },
    $j = {
        class: "container grid grid-cols-12 gap-6"
    },
    Aj = {
        class: "col-span-12 lg:col-span-6"
    },
    Sj = {
        class: "flex flex-col justify-start items-start"
    },
    Mj = n("p", {
        class: "bg-p1 py-3 px-5 rounded-full text-white"
    }, "Accountant", -1),
    Cj = n("h1", {
        class: "display-4 pt-4 pb-4 lg:pb-6"
    }, " Time for a Proactive Accountant ", -1),
    Hj = n("p", {
        class: "text-bodyText pb-6 lg:pb-8"
    }, " Feel neglected by your accountant? Experience the attentive and personalized service you deserve with AccuPay. ", -1),
    Zj = {
        class: "flex flex-col gap-6 justify-start items-start w-full"
    },
    Tj = {
        class: "text-s1 text-3xl"
    },
    Vj = {
        class: ""
    },
    kj = {
        class: "heading-4"
    },
    Pj = {
        class: "text-bodyText pt-2"
    },
    Lj = n("div", {
        class: "xxl:col-start-8 col-span-12 lg:col-span-6 xxl:col-span-5 overflow-hidden flex justify-center items-center"
    }, [n("img", {
        src: bj,
        alt: "",
        class: "object-fit hover:scale-110 duration-500 w-full h-full"
    })], -1),
    Ej = H({
        __name: "AccountantTimeSection",
        setup(e) {
            return (t, s) => (u(), p("section", wj, [n("div", $j, [n("div", Aj, [n("div", Sj, [Mj, Cj, Hj, n("ul", Zj, [(u(!0), p(G, null, oe(A(Oi), ({
                id: a,
                title: i,
                desc: o
            }, l) => (u(), p("li", {
                class: Se(["flex justify-start items-start gap-3 pb-5", {
                    "border-b": l + 1 !== A(Oi).length
                }]),
                key: a
            }, [n("div", Tj, [g(A(Ne), {
                weight: "fill"
            })]), n("div", Vj, [n("h4", kj, P(i), 1), n("p", Pj, P(o), 1)])], 2))), 128))])])]), Lj])]))
        }
    }),
    Bj = H({
        __name: "AccountingServices",
        setup(e) {
            return (t, s) => (u(), p(G, null, [n("main", null, [g(ze, {
                img: "/images/breadcrumb_img_3.png",
                middlePage: "Services",
                pageName: "Accounting Services",
                pageDesc: "Discover comprehensive accounting services tailored to your business needs. From bookkeeping to financial reporting,",
                pageTitle: "Accounting Services"
            })]), g(lj), g(xj), g(d0), g(Ej), g(ys)], 64))
        }
    }),
    Ij = "/images/appointment_form_bg.png",
    Oj = ["onClick"],
    ga = H({
        __name: "DropDownModal",
        props: {
            items: {},
            showModal: {
                type: Boolean
            },
            handleClick: {
                type: Function
            },
            handleSelectItem: {
                type: Function
            }
        },
        setup(e) {
            const t = e;

            function s(a) {
                t.handleClick(), t.handleSelectItem(a)
            }
            return (a, i) => (u(), p("ul", {
                class: Se(["absolute top-[90px] left-0 bg-s2 py-4 w-full duration-500 max-h-[250px] overflow-y-auto overflow-x-hidden", {
                    "visible opacity-100 translate-y-0 scale-100": a.showModal,
                    "invisible opacity-0 translate-y-4 scale-75": !a.showModal
                }])
            }, [(u(!0), p(G, null, oe(a.items, (o, l) => (u(), p("li", {
                class: "px-6 w-full py-1 text-mainTextColor hover:translate-x-2 duration-300 cursor-pointer",
                key: l,
                onClick: r => s(o)
            }, P(o), 9, Oj))), 128))], 2))
        }
    }),
    Nj = {
        class: "container stp-30 sbp-30 grid grid-cols-12"
    },
    zj = n("div", {
        class: "col-span-12 max-md:sbp-15"
    }, [n("img", {
        src: Ij,
        alt: ""
    })], -1),
    jj = {
        class: "col-span-12 md:col-span-10 lg:col-span-8 md:col-start-2 lg:col-start-3 bg-p1 p-6 sm:p-10 text-white relative md:mt-[-200px] lg:mt-[-400px] z-10"
    },
    Rj = n("h2", {
        class: "display-4 relative after:absolute after:w-[100px] after:h-[3px] after:bg-white after:-bottom-4 after:left-0"
    }, " Get A Free Quote Today ", -1),
    Dj = {
        class: "grid grid-cols-12 gap-3 sm:gap-6 stp-15"
    },
    Fj = we('<div class="col-span-12 sm:col-span-6"><p class="pb-3">Name</p><input type="text" class="bg-white outline-none py-3 sm:py-4 px-4 sm:px-8 text-bodyText placeholder:text-bodyText w-full" placeholder="Enter your name" required></div><div class="col-span-12 sm:col-span-6"><p class="pb-3">Phone</p><input type="text" class="bg-white outline-none py-3 sm:py-4 px-4 sm:px-8 text-bodyText placeholder:text-bodyText w-full" placeholder="Enter your number" required></div><div class="col-span-12 sm:col-span-6"><p class="pb-3">Email</p><input type="text" class="bg-white outline-none py-3 sm:py-4 px-4 sm:px-8 text-bodyText placeholder:text-bodyText w-full" placeholder="Enter your email" required></div><div class="col-span-12 sm:col-span-6"><p class="pb-3">Business Name</p><input type="text" class="bg-white outline-none py-3 sm:py-4 px-4 sm:px-8 text-bodyText placeholder:text-bodyText w-full" placeholder="Enter your business name" required></div><div class="col-span-12 sm:col-span-6"><p class="pb-3">Appointment Date</p><input type="date" class="bg-white outline-none py-3 sm:py-4 px-4 sm:px-8 text-bodyText placeholder:text-bodyText w-full" placeholder="Enter your name" required></div>', 5),
    qj = {
        class: "col-span-12 sm:col-span-6 relative"
    },
    Wj = n("p", {
        class: "pb-3"
    }, "I'm Interested in", -1),
    Gj = n("div", {
        class: "col-span-12"
    }, [n("p", {
        class: "pb-3"
    }, "Your Message"), n("textarea", {
        class: "bg-white outline-none py-3 sm:py-4 px-4 sm:px-8 text-bodyText placeholder:text-bodyText w-full h-[200px]",
        placeholder: "Write your message here...",
        required: ""
    })], -1),
    Uj = n("button", {
        class: "col-span-12 py-4 bg-s2 border border-mainTextColor text-mainTextColor font-medium hover:bg-mainTextColor hover:text-white duration-700"
    }, " Request A Quote ", -1),
    Yj = n("section", null, [n("iframe", {
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528000654!2d-74.14448744699546!3d40.69763123333061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1706173862928!5m2!1sen!2sbd",
        height: "450",
        class: "w-full mb-[-230px]"
    })], -1),
    Kj = H({
        __name: "Appointment",
        setup(e) {
            const t = ["Accounting Service", "Payroll Service", "Tax Service", "Real State Service", "Dentist Service"],
                s = le(t[0]),
                a = le(!1);

            function i() {
                a.value = !a.value
            }

            function o(l) {
                s.value = l
            }
            return (l, r) => (u(), p("main", null, [g(ze, {
                img: "/images/breadcrumb_img_8.png",
                pageName: "Appointment",
                pageDesc: "At AccuPay, we understand the importance of personalized service. Book an appointment with our experts to discuss your accounting.",
                pageTitle: "Appointment"
            }), n("section", Nj, [zj, n("form", jj, [Rj, n("div", Dj, [Fj, n("div", qj, [Wj, n("p", {
                class: "bg-white outline-none py-3 sm:py-4 px-4 sm:px-8 text-bodyText w-full flex justify-between items-center cursor-pointer",
                onClick: i
            }, [ee(P(s.value) + " ", 1), g(A(K1), {
                weight: "fill"
            })]), g(ga, {
                items: t,
                showModal: a.value,
                handleClick: i,
                handleSelectItem: o
            }, null, 8, ["showModal"])]), Gj, Uj])])]), Yj]))
        }
    }),
    Jj = {
        class: "container stp-30 sbp-30"
    },
    Qj = {
        class: "grid grid-cols-12 gap-6 stp-15"
    },
    Xj = {
        class: "border border-mainTextColor flex flex-col justify-start items-start relative group"
    },
    eR = {
        class: "w-full self-stretch overflow-hidden"
    },
    tR = ["src"],
    sR = {
        class: "bg-p1 text-white heading-2 py-3 px-4 absolute top-6 right-6 group-hover:bg-s2 duration-500 group-hover:text-mainTextColor"
    },
    aR = {
        class: "p-6 flex flex-col justify-start items-start"
    },
    iR = {
        class: "heading-4 pb-6"
    },
    nR = {
        class: "stp-15"
    },
    oR = {
        class: "flex justify-center items-center gap-2"
    },
    lR = n("li", {
        class: "text-lg font-medium text-white border border-p1 bg-p1 w-[45px] h-[50px] flex justify-center items-center"
    }, " 1 ", -1),
    rR = n("li", {
        class: "text-lg font-medium border border-strokeColor w-[45px] h-[50px] flex justify-center items-center hover:bg-p1 hover:text-white hover:border-p1 duration-500"
    }, " 2 ", -1),
    cR = {
        class: "text-lg font-medium border border-strokeColor w-[45px] h-[50px] flex justify-center items-center"
    },
    dR = H({
        __name: "CaseStudy",
        setup(e) {
            return (t, s) => {
                const a = Ae("router-link");
                return u(), p("main", null, [g(ze, {
                    img: "/images/breadcrumb_img_9.png",
                    pageName: "Case Study",
                    pageDesc: "Dive into real-world success stories. Our case studies showcase how our accounting and payroll solutions have transformed businesses",
                    pageTitle: "Case Study"
                }), n("section", Jj, [g(P1, {
                    sectionName: "Case Study",
                    sectionTitle: "Explore Our Recently Completed Cases",
                    sectionDesc: "Explore how AccuPay has partnered with businesses like yours to deliver tailored accounting and payroll solutions. "
                }), n("div", Qj, [(u(!0), p(G, null, oe(A(Eo), ({
                    id: i,
                    img: o,
                    name: l
                }, r) => (u(), p("div", {
                    class: "col-span-12 sm:col-span-6 lg:col-span-4",
                    key: i
                }, [n("div", Xj, [n("div", eR, [n("img", {
                    src: o,
                    alt: "",
                    class: "object-cover w-full hover:scale-110 duration-500 h-full"
                }, null, 8, tR)]), n("p", sR, " 0" + P(r + 1), 1), n("div", aR, [n("h4", iR, P(l), 1), g(a, {
                    to: "/case-study/" + l.toLowerCase().replaceAll(" ", "-"),
                    class: "bg-p1 py-3 px-5 font-medium text-white flex justify-start items-center gap-1 group-hover:bg-s2 border border-p1 group-hover:border-mainTextColor duration-500 group-hover:text-mainTextColor"
                }, {
                    default: ne(() => [ee(" Learn More "), g(A(o1))]),
                    _: 2
                }, 1032, ["to"])])])]))), 128))]), n("div", nR, [n("ul", oR, [lR, rR, n("li", cR, [g(A(qt))])])])])])
            }
        }
    }),
    uR = "/images/case_study_details_post_thumbnail.png",
    pR = "/images/case_study_post_image.png",
    fR = {
        class: "container grid grid-cols-12 gap-6 stp-30 sbp-30"
    },
    hR = {
        class: "col-span-12 lg:col-span-8"
    },
    mR = n("div", {
        class: "overflow-hidden"
    }, [n("img", {
        src: uR,
        alt: "",
        class: "hover:scale-110 duration-500 w-full h-full"
    })], -1),
    gR = {
        key: 0,
        class: "display-4 pt-6 lg:pt-10"
    },
    vR = {
        key: 1,
        class: "display-4 pt-6 lg:pt-10"
    },
    yR = n("p", {
        class: "pt-4 lg:pt-6"
    }, " Discover how our optimal payroll processing solution transformed David operations. We streamlined manual processes, ensuring efficiency and compliance with changing regulations. By implementing advanced payroll software, we achieved significant time savings and reduced errors. The result? ", -1),
    _R = n("h3", {
        class: "heading-1 pt-6 lg:pt-10"
    }, "Challenges Faced", -1),
    xR = n("p", {
        class: "py-6"
    }, " David Warner confronted multifaceted challenges in payroll processing, including cumbersome manual procedures, frequent errors, and the complexity of staying compliant with evolving tax and labor regulations. The manual processes not only consumed valuable time but also resulted in dissatisfaction among employees due to errors in payroll calculations. Navigating the intricacies of compliance proved to be a significant hurdle. This case study delves into how our team identified and addressed these challenges head-on, implementing a tailored solution ", -1),
    bR = {
        class: "flex flex-col gap-5"
    },
    wR = {
        class: "flex justify-start items-start gap-3"
    },
    $R = {
        class: "text-p1 text-3xl"
    },
    AR = {
        class: ""
    },
    SR = n("h5", {
        class: "heading-5"
    }, "Manual Processes", -1),
    MR = {
        class: "flex justify-center items-center text-bodyText"
    },
    CR = {
        class: "text-4xl !leading-[0]"
    },
    HR = {
        class: "flex justify-start items-start gap-3"
    },
    ZR = {
        class: "text-p1 text-3xl"
    },
    TR = {
        class: ""
    },
    VR = n("h5", {
        class: "heading-5"
    }, "Payroll Complexity", -1),
    kR = {
        class: "flex justify-center items-center text-bodyText"
    },
    PR = {
        class: "text-4xl !leading-[0]"
    },
    LR = {
        class: "flex justify-start items-start gap-3"
    },
    ER = {
        class: "text-p1 text-3xl"
    },
    BR = {
        class: ""
    },
    IR = n("h5", {
        class: "heading-5"
    }, "Efficiency Concerns", -1),
    OR = {
        class: "flex justify-center items-center text-bodyText"
    },
    NR = {
        class: "text-4xl !leading-[0]"
    },
    zR = n("h3", {
        class: "heading-2 pt-6 lg:pt-10"
    }, "Our Approach", -1),
    jR = n("p", null, ' Our approach involved a meticulous audit of existing processes, identifying pain points, and tailoring solutions to meet the unique needs of David Warner. By seamlessly integrating advanced accounting and payroll software, we automated workflows, enhancing both speed and precision. Throughout the transition, our team provided comprehensive training to ensure a smooth adaptation.{" "} ', -1),
    RR = n("h4", {
        class: "heading-3 pt-6 lg:pt-10 pb-4 lg:pb-6"
    }, "Implementation", -1),
    DR = n("p", null, " During implementation, we executed a seamless transition from manual to automated processes, ensuring minimal disruption to [Client Name]'s operations. Comprehensive employee training facilitated a smooth adaptation to the new systems ", -1),
    FR = {
        class: "pt-6 xl:pt-10 flex justify-between items-center gap-6 max-md:flex-col"
    },
    qR = n("div", {
        class: "flex justify-between items-center gap-6 overflow-hidden"
    }, [n("img", {
        src: pR,
        alt: "",
        class: "hover:scale-110 duration-500 w-full h-full"
    })], -1),
    WR = {
        class: ""
    },
    GR = {
        class: "flex flex-col gap-5"
    },
    UR = {
        class: "flex justify-start items-start gap-3"
    },
    YR = {
        class: "text-p1 text-3xl"
    },
    KR = {
        class: ""
    },
    JR = n("h5", {
        class: "heading-5"
    }, "Smooth Transition", -1),
    QR = {
        class: "flex justify-center items-center text-bodyText"
    },
    XR = {
        class: "text-4xl !leading-[0]"
    },
    eD = {
        class: "flex justify-start items-start gap-3"
    },
    tD = {
        class: "text-p1 text-3xl"
    },
    sD = {
        class: ""
    },
    aD = n("h5", {
        class: "heading-5"
    }, "Employee Training", -1),
    iD = {
        class: "flex justify-center items-center text-bodyText"
    },
    nD = {
        class: "text-4xl !leading-[0]"
    },
    oD = {
        class: "flex justify-start items-start gap-3"
    },
    lD = {
        class: "text-p1 text-3xl"
    },
    rD = {
        class: ""
    },
    cD = n("h5", {
        class: "heading-5"
    }, "Testing and Quality", -1),
    dD = {
        class: "flex justify-center items-center text-bodyText"
    },
    uD = {
        class: "text-4xl !leading-[0]"
    },
    pD = {
        class: "flex justify-start items-start gap-3"
    },
    fD = {
        class: "text-p1 text-3xl"
    },
    hD = {
        class: ""
    },
    mD = n("h5", {
        class: "heading-5"
    }, "Efficiency Gains", -1),
    gD = {
        class: "flex justify-center items-center text-bodyText"
    },
    vD = {
        class: "text-4xl !leading-[0]"
    },
    yD = we('<h4 class="heading-3 pt-6 xl:pt-10 pb-6">Results Achieved</h4><p class="pb-10"> The implemented solutions yielded remarkable results for David. Processing time significantly reduced, leading to increased overall efficiency. Notably, errors were minimized, enhancing accuracy and financial integrity. Adherence to tax regulations and industry-specific compliance standards improved significantly, </p><p class="bg-s2 border border-mainTextColor p-10 font-medium text-xl"> &quot;David has seen a remarkable transformation in our accounting and payroll processes. Accupay tailored solutions have not only saved us time but also enhanced accuracy, providing a level of efficiency we didn&#39;t think possible.&quot; </p><h4 class="heading-3 py-10 pb-6">Conclusion</h4><p class="pb-10"> In conclusion, our Accounting &amp; Payroll Processing Services have proven to be instrumental in overcoming challenges, fostering efficiency, and ensuring compliance for David Warner. </p>', 5),
    _D = {
        class: "col-span-12 lg:col-span-4"
    },
    xD = {
        class: "flex flex-col gap-6 sticky top-32"
    },
    bD = {
        class: "border p-6 lg:p-8 flex flex-col gap-6 justify-start items-start"
    },
    wD = {
        class: "text-2xl bg-p1 text-white p-4"
    },
    $D = {
        class: ""
    },
    AD = {
        class: "heading-5"
    },
    SD = {
        class: "text-bodyText"
    },
    MD = {
        class: "border p-6 lg:p-10"
    },
    CD = n("h5", {
        class: "heading-5 pb-2 relative after:absolute after:bottom-0 after:left-0 after:w-[20px] after:h-[2px] after:bg-p1"
    }, " Follow Us ", -1),
    HD = {
        class: "flex justify-start items-center gap-2 text-white group pt-5"
    },
    mn = H({
        __name: "CaseStudyDetails",
        setup(e) {
            const t = V1(),
                s = le({}),
                a = le(!1);
            return a0(() => {
                const i = Eo.filter(o => o.name.replaceAll(" ", "-").toLowerCase() === t.params.name);
                s.value = i[0], i.length > 0 && (a.value = !0)
            }), (i, o) => {
                const l = Ae("router-link");
                return u(), p("main", null, [g(ze, {
                    img: "/images/breadcrumb_img_10.png",
                    middlePage: "Case Study",
                    pageName: "Case Study Details",
                    pageDesc: "Optimize your business with our seamless Payroll Processing services. From accurate calculations to compliance assurance,",
                    pageTitle: "Case Study Details"
                }), n("section", fR, [n("div", hR, [mR, a.value ? D("", !0) : (u(), p("h2", gR, " A Case Study On Optimal Payroll Processing. ")), a.value ? (u(), p("h2", vR, P(s.value.name), 1)) : D("", !0), yR, _R, xR, n("ul", bR, [n("li", wR, [n("div", $R, [g(A(Ne))]), n("div", AR, [SR, n("p", MR, [n("span", CR, [g(A(Kt))]), ee(" Relying on time-consuming and error-prone manual accounting procedures. ")])])]), n("li", HR, [n("div", ZR, [g(A(Ne))]), n("div", TR, [VR, n("p", kR, [n("span", PR, [g(A(Kt))]), ee(" Struggling with the complexities of payroll processing and compliance. ")])])]), n("li", LR, [n("div", ER, [g(A(Ne))]), n("div", BR, [IR, n("p", OR, [n("span", NR, [g(A(Kt))]), ee(" Facing inefficiencies in their financial workflows affecting overall productivity. ")])])])]), zR, jR, RR, DR, n("div", FR, [qR, n("div", WR, [n("ul", GR, [n("li", UR, [n("div", YR, [g(A(Ne))]), n("div", KR, [JR, n("p", QR, [n("span", XR, [g(A(Kt))]), ee(" Executed a seamless transition from manual to ")])])]), n("li", eD, [n("div", tD, [g(A(Ne))]), n("div", sD, [aD, n("p", iD, [n("span", nD, [g(A(Kt))]), ee(" Provided training sessions to ensure a smooth ")])])]), n("li", oD, [n("div", lD, [g(A(Ne))]), n("div", rD, [cD, n("p", dD, [n("span", uD, [g(A(Kt))]), ee(" Rigorous testing to guarantee accuracy, security, ")])])]), n("li", pD, [n("div", fD, [g(A(Ne))]), n("div", hD, [mD, n("p", gD, [n("span", vD, [g(A(Kt))]), ee(" Marked reduction in processing time ")])])])])])]), yD]), n("div", _D, [n("div", xD, [n("div", bD, [(u(!0), p(G, null, oe(A(tZ), ({
                    id: r,
                    name: c,
                    desc: f,
                    icon: d
                }) => (u(), p("div", {
                    class: "flex justify-start items-center gap-4 pb-6 lg:pb-6 border-b w-full last:border-none last:pb-0",
                    key: r
                }, [n("div", wD, [(u(), ye(Ve(d), {
                    weight: "fill"
                }))]), n("div", $D, [n("h5", AD, P(c), 1), n("p", SD, P(f), 1)])]))), 128))]), n("div", MD, [CD, n("ul", HD, [(u(!0), p(G, null, oe(A(o0), ({
                    id: r,
                    icon: c
                }) => (u(), p("li", {
                    key: r
                }, [g(l, {
                    to: "/",
                    class: "bg-p1 rounded-full p-3 text-xl hover:text-mainTextColor hover:bg-s2 duration-500 hover:-translate-y-1 block"
                }, {
                    default: ne(() => [(u(), ye(Ve(c)))]),
                    _: 2
                }, 1024)]))), 128))])])])])])])
            }
        }
    }),
    ZD = {
        class: "stp-30 overflow-hidden"
    },
    TD = {
        class: "container grid grid-cols-12 gap-6 md:gap-16 xl:gap-20 xxl:gap-24 pr-10"
    },
    VD = {
        class: "relative group",
        key: "{id}"
    },
    kD = {
        class: "overflow-hidden relative z-20 max-xl:mr-6"
    },
    PD = ["src"],
    LD = {
        class: "absolute z-30 text-white bottom-6 right-6 left-6 linear-gradient-bg-team flex justify-center items-center flex-col py-6 invisible opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 duration-500 group-hover:visible"
    },
    ED = {
        class: "font-medium"
    },
    BD = {
        class: "absolute right-0 group-hover:-right-6 md:group-hover:-right-8 lg:group-hover:-right-6 xl:group-hover:-right-12 left-20 top-8 bottom-10 z-10 group-hover:rotate-[8deg] invisible opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 bg-[rgba(0,81,81,0.05)] duration-500 group-hover:visible rounded-xl"
    },
    ID = {
        class: "flex justify-start flex-col items-center gap-2 text-white group absolute top-6 right-4"
    },
    OD = H({
        __name: "OurTeam",
        setup(e) {
            return (t, s) => {
                const a = Ae("router-link");
                return u(), p("main", null, [g(ze, {
                    img: "/images/breadcrumb_img_11.png",
                    pageName: "Our Team",
                    pageDesc: "Meet our dedicated team of accounting and payroll experts. Committed to delivering excellence.",
                    pageTitle: "Our Team"
                }), n("section", ZD, [n("div", TD, [(u(!0), p(G, null, oe(A(Bo), ({
                    id: i,
                    name: o,
                    designation: l,
                    img: r
                }) => (u(), p("div", {
                    class: "col-span-12 md:col-span-6 xl:col-span-4",
                    key: i
                }, [n("div", VD, [n("div", kD, [n("img", {
                    src: r,
                    alt: "",
                    class: "rounded-lg object-cover w-full"
                }, null, 8, PD), n("div", LD, [n("p", ED, P(l), 1), g(a, {
                    to: "/team/" + o.toLowerCase().replaceAll(" ", "-"),
                    class: "heading-4"
                }, {
                    default: ne(() => [ee(P(o), 1)]),
                    _: 2
                }, 1032, ["to"])])]), n("div", BD, [n("ul", ID, [(u(!0), p(G, null, oe(A(o0).slice(0, 3), ({
                    id: c,
                    icon: f
                }) => (u(), p("li", {
                    key: c
                }, [g(a, {
                    to: "#",
                    class: "rounded-full p-2 text-lg hover:text-white text-mainTextColor border border-strokeColor hover:bg-p1 duration-500 hover:-translate-y-1 block"
                }, {
                    default: ne(() => [(u(), ye(Ve(f)))]),
                    _: 2
                }, 1024)]))), 128))])])])]))), 128))])]), g(ys)])
            }
        }
    }),
    ND = "/images/team_member_full_img.png",
    zD = {
        class: "stp-30 lg:sbp-30 relative xxl:h-[1400px] flex justify-end items-center overflow-hidden max-lg:flex-col"
    },
    jD = n("div", {
        class: "xxl:absolute top-28 left-0 bg-strokeColor"
    }, [n("img", {
        src: ND,
        alt: ""
    })], -1),
    RD = {
        class: "container flex justify-end items-center -mt-[250px] sm:max-lg:-mt-[500px] lg:max-xxl:mt-0 xxl:mt-10"
    },
    DD = {
        class: "flex justify-end items-center relative z-10 bg-white p-6 sm:p-10 xl:p-20 xxxl:p-30 md:mt-10"
    },
    FD = {
        class: "flex justify-start items-start flex-col max-w-[600px]"
    },
    qD = n("p", {
        class: "bg-p1 py-3 px-5 rounded-full text-white"
    }, "Our Team", -1),
    WD = {
        key: 0,
        class: "display-4 pt-3 pb-6"
    },
    GD = {
        key: 1,
        class: "display-4 pt-3 pb-6"
    },
    UD = n("p", {
        class: "text-bodyText"
    }, " Welcome to the heart of Accupay. Our dedicated team of accounting and payroll professionals is committed to providing unparalleled services to meet your financial needs. Get to know the individuals who make up our dynamic team ", -1),
    YD = {
        class: "flex flex-col gap-3 pt-8"
    },
    KD = {
        class: "bg-softBg1 border border-p1/20 p-3 rounded-full text-p1 text-3xl"
    },
    JD = {
        class: "pt-6 lg:pt-10"
    },
    QD = {
        class: "container stp-15 lg:max-xxl:-mt-20 xxl:pt-15 sbp-30"
    },
    XD = n("h2", {
        class: "heading-1"
    }, "Personal experience", -1),
    eF = n("p", {
        class: "text-bodyText pt-6 pb-6 lg:pb-10"
    }, " Each team member at Accupay brings a unique blend of professional expertise and personal commitment to our clients. With a shared passion for accounting and payroll excellence, we understand the intricacies of financial management. Our collaborative approach ensures that each client receives personalized attention and solutions tailored to their specific needs. We don't just offer services; we build lasting partnerships. That commitment to personalized service defines our team and contributes to the success stories we create for our clients every day. ", -1),
    tF = {
        class: "grid grid-cols-12 gap-6 pb-6 lg:pb-10"
    },
    sF = {
        class: "col-span-12 md:col-span-6 lg:col-span-5 flex flex-col justify-center items-start gap-8",
        ref: "{ref}"
    },
    aF = {
        class: "w-full"
    },
    iF = {
        class: "flex font-medium justify-between items-center"
    },
    nF = n("p", null, "70%", -1),
    oF = n("div", {
        class: "w-full pt-4"
    }, [n("div", {
        class: "h-0.5 bg-strokeColor w-full relative"
    }, [n("div", {
        class: "h-[6px] bg-p1 absolute lineAnimation left-0 -top-0.5 w-[70%]"
    })])], -1),
    lF = n("div", {
        class: "col-span-12 md:col-span-6 md:col-start-7 flex flex-col justify-center items-start"
    }, [n("h3", {
        class: "heading-2"
    }, "Why Chooses Our Team"), n("p", {
        class: "text-bodyText pt-6"
    }, " Choosing our team at Accupay means partnering with a dedicated group of accounting and payroll professionals committed to your financial success. "), n("p", {
        class: "pt-6"
    }, " With years of collective experience, we bring a deep understanding of industry intricacies and stay at the forefront of regulatory changes. Our client-centric approach ensures personalized solutions tailored to your unique needs. ")], -1),
    rF = n("h4", {
        class: "heading-3"
    }, "Why Chooses Our Team", -1),
    cF = n("p", {
        class: "text-bodyText pt-6"
    }, " Choosing our team at Accupay means partnering with a dedicated group of accounting and payroll professionals committed to your financial success. With years of collective experience, we bring a deep understanding of industry intricacies and stay at the forefront of regulatory changes. Our client-centric approach ensures personalized solutions tailored to your unique needs. ", -1),
    gn = H({
        __name: "TeamDetails",
        setup(e) {
            const t = V1(),
                s = le({}),
                a = le(!1);
            return a0(() => {
                const i = Bo.filter(o => o.name.replaceAll(" ", "-").toLowerCase() === t.params.name);
                s.value = i[0], i.length > 0 && (a.value = !0)
            }), (i, o) => {
                const l = Ae("router-link");
                return u(), p("main", null, [g(ze, {
                    img: "/images/breadcrumb_img_12.png",
                    pageName: "Team Details",
                    pageDesc: `Meet our dedicated team of experts committed to delivering
    unparalleled accounting and payroll services.`,
                    pageTitle: "Team Details"
                }), n("section", zD, [jD, n("div", RD, [n("div", DD, [n("div", FD, [qD, a.value ? D("", !0) : (u(), p("h2", WD, " David Warner ")), a.value ? (u(), p("h2", GD, P(s.value.name), 1)) : D("", !0), UD, n("ul", YD, [(u(!0), p(G, null, oe(A(kH), ({
                    id: r,
                    name: c,
                    link: f,
                    icon: d
                }) => (u(), p("li", {
                    class: "flex justify-start items-center gap-3",
                    key: r
                }, [n("div", KD, [(u(), ye(Ve(d), {
                    weight: "fill"
                }))]), g(l, {
                    to: f,
                    class: ""
                }, {
                    default: ne(() => [ee(P(c), 1)]),
                    _: 2
                }, 1032, ["to"])]))), 128))]), n("div", JD, [g(c0, {
                    link: "/contact",
                    text: "Gen In Touch"
                })])])])])]), n("section", QD, [XD, eF, n("div", tF, [n("div", sF, [(u(!0), p(G, null, oe(A(sZ), r => (u(), p("div", aF, [n("div", iF, [n("p", null, P(r.name), 1), nF]), oF]))), 256))], 512), lF]), rF, cF])])
            }
        }
    }),
    dF = {
        class: "col-span-12 min-[450px]:col-span-6 md:col-span-4 relative group"
    },
    uF = {
        class: "relative overflow-hidden"
    },
    pF = ["src"],
    fF = n("button", {
        class: "bg-p1 text-white font-medium py-2 lg:py-3 px-4 lg:px-6 absolute bottom-6 right-6 hover:bg-s2 hover:border-mainTextColor border border-p1 hover:text-mainTextColor duration-500"
    }, " Add to Cart ", -1),
    hF = {
        class: ""
    },
    mF = {
        class: "font-medium text-lg"
    },
    wl = H({
        __name: "ProductCard",
        props: {
            img: {},
            name: {},
            price: {}
        },
        setup(e) {
            return (t, s) => {
                const a = Ae("router-link");
                return u(), p("div", dF, [n("div", uF, [n("img", {
                    src: t.img,
                    alt: "",
                    class: "hover:scale-110 duration-500 w-full h-full"
                }, null, 8, pF), fF]), n("div", hF, [g(a, {
                    to: "/shop/" + t.name.toLowerCase().replaceAll(" ", "-"),
                    class: "heading-3 pt-6 pb-2 block hover:underline"
                }, {
                    default: ne(() => [ee(P(t.name), 1)]),
                    _: 1
                }, 8, ["to"]), n("p", mF, "$" + P(t.price) + ".000", 1)])])
            }
        }
    }),
    gF = {
        class: "grid grid-cols-12 gap-6 container stp-30 sbp-30"
    },
    vF = {
        class: "pt-6 flex justify-center items-center col-span-12"
    },
    yF = {
        class: "flex justify-center items-center gap-2"
    },
    _F = n("li", {
        class: "text-lg font-medium text-white border border-p1 bg-p1 w-[45px] h-[50px] flex justify-center items-center"
    }, " 1 ", -1),
    xF = n("li", {
        class: "text-lg font-medium border border-strokeColor w-[45px] h-[50px] flex justify-center items-center hover:bg-p1 hover:text-white hover:border-p1 duration-500"
    }, " 2 ", -1),
    bF = {
        class: "text-lg font-medium border border-strokeColor w-[45px] h-[50px] flex justify-center items-center"
    },
    wF = H({
        __name: "OurtShop",
        setup(e) {
            return (t, s) => (u(), p("main", null, [g(ze, {
                img: "/images/breadcrumb_img_13.png",
                pageName: "Shop",
                pageDesc: "Explore our range of products and services designed to elevate your accounting and payroll experience. From essential tools to informative resources,",
                pageTitle: "Welcome to Our Shop"
            }), n("section", gF, [(u(!0), p(G, null, oe(A(ea), (a, i) => (u(), ye(wl, {
                key: i,
                img: a.img,
                price: Number(a.price),
                name: a.name
            }, null, 8, ["img", "price", "name"]))), 128)), n("div", vF, [n("ul", yF, [_F, xF, n("li", bF, [g(A(qt))])])])])]))
        }
    }),
    $F = "/images/product_img.png",
    $l = pk("cart", {
        state: () => ({
            cartItems: [],
            itemPrice: 0,
            shippingPrice: 50,
            taxPrice: 0,
            totalPrice: 0,
            vat: 0
        }),
        actions: {
            addToCart(e) {
                const t = this.cartItems.find(s => s.id === e.id);
                t ? t.qty = (t.qty || 0) + 1 : (e.qty = 1, this.cartItems.push(e)), this.calculatePrices()
            },
            removeProducts(e) {
                const t = this.cartItems.find(s => s.id === e.id);
                if (t) t.qty = (t.qty || 0) - 1, t.qty <= 0 && (this.cartItems = this.cartItems.filter(s => s.id !== e.id));
                else return;
                this.calculatePrices()
            },
            addToCartButton(e) {
                const t = this.cartItems.find(s => s.id === e.id);
                t ? t.qty = (t.qty || 0) + (e.inputQty || 1) : (e.qty = e.inputQty || 1, this.cartItems.push(e)), this.calculatePrices()
            },
            removeFromTheCart(e) {
                this.cartItems = this.cartItems.filter(t => t.id !== e), this.calculatePrices()
            },
            emptyCart() {
                this.cartItems = []
            },
            calculatePrices() {
                this.itemPrice = parseFloat(this.cartItems.reduce((e, t) => e + t.price * (t.qty || 0), 0).toFixed(2))
            }
        }
    }),
    AF = {
        class: "container stp-30 sbp-15 grid grid-cols-12 gap-6"
    },
    SF = n("div", {
        class: "col-span-12 md:col-span-6 flex justify-center items-center overflow-hidden"
    }, [n("img", {
        src: $F,
        alt: "",
        class: "hover:scale-110 duration-500 w-full h-full"
    })], -1),
    MF = {
        class: "col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8 flex flex-col justify-center items-start"
    },
    CF = {
        class: "display-4 pb-2 lg:pb-5"
    },
    HF = {
        class: "flex justify-start items-center gap-1 text-s2 pb-2"
    },
    ZF = we('<div class="flex justify-start items-center gap-5"><h3 class="heading-3">$ 430.00 USD</h3><h3 class="heading-3 relative line-through">$ 799.00 USD</h3></div><div class="flex justify-start items-center gap-3 pt-3 lg:pt-5"><p class="bg-softBg rounded-full px-3 py-2">Course</p><p class="bg-softBg1 rounded-full px-3 py-2">On Sale</p></div><p class="text-xl pt-4 lg:pt-6">Item Description</p><p class="text-bodyText pt-3 pb-3 lg:pb-6 border-b"> Empower your business with our cutting-edge Payroll Processing Tools, designed to streamline your payroll operations and ensure accuracy and compliance. </p>', 4),
    TF = {
        class: ""
    },
    VF = n("p", {
        class: "text-xl pt-3 lg:pt-6 font-medium pb-3"
    }, "Quantity", -1),
    kF = {
        class: "flex justify-start items-center gap-5"
    },
    PF = {
        class: "flex justify-between items-center text-xl sm:text-2xl border border-strokeColor w-[140px] px-3"
    },
    LF = {
        class: "flex justify-center items-center"
    },
    EF = {
        class: "w-[50px] outline-none border-x pl-4 py-1 sm:py-2"
    },
    BF = {
        class: "pt-6 lg:pt-6"
    },
    IF = n("h5", {
        class: "heading-5 pb-2 relative after:absolute after:bottom-0 after:left-0 after:w-[20px] after:h-[2px] after:bg-p1"
    }, " Follow Us ", -1),
    OF = {
        class: "flex justify-start items-center gap-2 text-white group pt-5"
    },
    NF = {
        class: "container stp-15 sbp-30"
    },
    zF = {
        class: "flex justify-start items-center gap-20 border-b"
    },
    jF = ["onClick"],
    RF = {
        key: 0,
        class: "text-bodyText pt-8"
    },
    DF = {
        key: 1,
        class: "text-bodyText pt-8"
    },
    FF = n("p", null, "There are no reviews yet.", -1),
    qF = n("p", {
        class: "py-4"
    }, "Be the first to review “Online Courses”", -1),
    WF = n("p", null, " Your email address will not be published. Required fields are marked * ", -1),
    GF = n("p", {
        class: "text-mainTextColor pt-8"
    }, "Rate this item", -1),
    UF = {
        class: "flex justify-start items-center gap-1 text-xl text-s2"
    },
    YF = we('<div class="grid grid-cols-2 pt-5 gap-6"><div class="col-span-2"><textarea class="h-[200px] w-full border outline-none p-2 border-strokeColor bg-softBg" placeholder="Write your review*"></textarea></div><div class="col-span-2 sm:col-span-1"><input type="text" class="w-full border p-4 outline-none border-strokeColor bg-softBg" placeholder="Name*"></div><div class="col-span-2 sm:col-span-1"><input type="text" class="w-full border p-4 outline-none border-strokeColor bg-softBg" placeholder="Email"></div><div class="col-span-2 table-checkbox"><label class="flex justify-start items-center gap-2 pb-5"><input type="checkbox" class="min-w-4"><p> Save my name, email, and website in this browser for the next time I comment. </p></label><button class="py-2 sm:py-3 px-4 sm:px-6 bg-p1 text-white block text-center border border-p1 hover:bg-s2 hover:border-mainTextColor hover:text-mainTextColor duration-500"> Submit </button></div></div>', 1),
    KF = {
        class: "container sbp-30"
    },
    JF = {
        class: "flex justify-between items-center"
    },
    QF = n("h3", {
        class: "display-4"
    }, "Recent Products", -1),
    XF = {
        class: "grid grid-cols-12 gap-6 stp-15"
    },
    vn = H({
        __name: "ShopDetails",
        setup(e) {
            const t = ["Description", "Reviews (0)"],
                s = le(0),
                a = m => {
                    m !== s.value && (s.value = m)
                },
                i = V1(),
                o = le({}),
                l = le(!1);
            a0(() => {
                r()
            }), Ct(() => i.params.name, () => {
                r()
            });

            function r() {
                const m = ea.filter(y => y.name.replaceAll(" ", "-").toLowerCase() === i.params.name);
                o.value = m[0], m.length > 0 && (l.value = !0)
            }
            const c = le(1),
                f = $l();

            function d(m) {
                m === "add" && c.value++, m === "remove" && c.value--
            }
            const h = () => {
                const m = o.value;
                f.addToCartButton({
                    id: m.id,
                    name: m.name,
                    price: parseFloat(m.price),
                    inputQty: c.value
                })
            };
            return (m, y) => {
                var M, V;
                const b = Ae("router-link");
                return u(), p("main", null, [g(ze, {
                    img: "/images/breadcrumb_img_14.png",
                    pageName: "Shop Details",
                    pageDesc: "Explore our Shop for essential accounting and payroll tools. From innovative software to expert-guided courses, empower your business",
                    pageTitle: "Shop Details"
                }), n("section", AF, [SF, n("div", MF, [n("h2", CF, P((M = o.value) != null && M.name ? (V = o.value) == null ? void 0 : V.name : "Online Courses"), 1), n("div", HF, [g(A(dt), {
                    weight: "fill"
                }), g(A(dt), {
                    weight: "fill"
                }), g(A(dt), {
                    weight: "fill"
                }), g(A(dt), {
                    weight: "fill"
                }), g(A(dt), {
                    weight: "fill"
                })]), ZF, n("div", TF, [VF, n("div", kF, [n("div", PF, [n("button", {
                    class: "pr-2",
                    onClick: y[0] || (y[0] = S => d("remove"))
                }, [g(A(N0))]), n("div", LF, [n("p", EF, P(c.value), 1)]), n("button", {
                    class: "pl-2",
                    onClick: y[1] || (y[1] = S => d("add"))
                }, [g(A(To))])]), n("div", {
                    class: ""
                }, [n("button", {
                    class: "bg-p1 border border-p1 py-2 sm:py-3 px-4 sm:px-6 font-medium text-white hover:border-mainTextColor hover:bg-s2 hover:text-mainTextColor duration-500",
                    onClick: h
                }, " Add to Cart ")])])]), n("div", BF, [IF, n("ul", OF, [(u(!0), p(G, null, oe(A(o0), ({
                    id: S,
                    icon: Z
                }) => (u(), p("li", {
                    key: S
                }, [g(b, {
                    to: "#",
                    class: "bg-p1 rounded-full p-3 text-xl hover:text-mainTextColor hover:bg-s2 duration-500 hover:-translate-y-1 block"
                }, {
                    default: ne(() => [(u(), ye(Ve(Z)))]),
                    _: 2
                }, 1024)]))), 128))])])])]), n("section", NF, [n("div", zF, [(u(), p(G, null, oe(t, (S, Z) => n("button", {
                    key: Z,
                    class: Se(["heading-4 pb-3 border-b-[3px] mb-[-2px]", {
                        "border-p1": Z === s.value,
                        "border-b-transparent": Z !== s.value
                    }]),
                    onClick: C => a(Z)
                }, P(S), 11, jF)), 64))]), s.value === 0 ? (u(), p("p", RF, " Enrich your knowledge and skills with our comprehensive Online Courses on accounting and payroll management. Tailored for professionals and businesses, our courses cover topics such as tax compliance, payroll optimization, and financial reporting. Access engaging content, expert insights, and practical case studies at your own pace. Stay ahead in the financial landscape and empower yourself or your team with the essential skills needed for success. ")) : D("", !0), s.value === 1 ? (u(), p("div", DF, [FF, qF, WF, GF, n("div", UF, [g(A(dt)), g(A(dt)), g(A(dt)), g(A(dt)), g(A(dt))]), YF])) : D("", !0)]), n("section", KF, [n("div", JF, [QF, g(c0, {
                    link: "/shop",
                    text: "Show more"
                })]), n("div", XF, [(u(!0), p(G, null, oe(A(ea).slice(0, 3), (S, Z) => (u(), ye(wl, {
                    key: Z,
                    img: S.img,
                    price: Number(S.price),
                    name: S.name
                }, null, 8, ["img", "price", "name"]))), 128))])])])
            }
        }
    }),
    eq = "/images/product_cart_img.png",
    tq = {
        key: 0,
        class: "heading-2 text-center py-[200px]"
    },
    sq = {
        key: 1,
        class: "stp-30 container overflow-hidden"
    },
    aq = {
        class: "overflow-x-auto"
    },
    iq = {
        class: "min-w-[774px] w-full whitespace-nowrap"
    },
    nq = n("thead", {
        class: ""
    }, [n("tr", {
        class: "w-full border-b"
    }, [n("th", {
        class: "text-start pb-4"
    }, "Product"), n("th", {
        class: "text-start pb-4"
    }, "Name"), n("th", {
        class: "text-start pb-4"
    }, "Unit Price"), n("th", {
        class: "text-start pb-4"
    }, "Quantity"), n("th", {
        class: "text-start pb-4"
    }, "Subtotal"), n("th", {
        class: "text-start pb-4"
    })])], -1),
    oq = {
        class: "w-full border-b"
    },
    lq = n("td", {
        class: "py-3"
    }, [n("img", {
        src: eq,
        alt: ""
    })], -1),
    rq = {
        class: "text-start"
    },
    cq = {
        class: "text-start"
    },
    dq = {
        class: "text-start"
    },
    uq = {
        class: "flex justify-between items-center text-lg border border-strokeColor w-[130px] px-3"
    },
    pq = ["onClick"],
    fq = {
        class: "flex justify-center items-center"
    },
    hq = {
        class: "w-[50px] outline-none border-x pl-4 py-1 sm:py-2"
    },
    mq = ["onClick"],
    gq = {
        class: "text-start"
    },
    vq = {
        class: "text-start"
    },
    yq = ["onClick"],
    _q = {
        class: "flex justify-between items-center pt-6 gap-6 w-full max-sm:flex-col-reverse"
    },
    xq = n("div", {
        class: "flex justify-start items-center sm:w-2/3"
    }, [n("input", {
        type: "text",
        class: "border outline-none px-2 md:px-8 py-2 sm:py-3 text-bodyText placeholder:text-bodyText max-w-[150px] sm:max-w-[200px] lg:max-w-[250px]",
        placeholder: "Coupon Code"
    }), n("button", {
        class: "bg-p1 border border-p1 py-2 sm:py-3 px-2 sm:px-6 font-medium text-white hover:border-mainTextColor hover:bg-s2 hover:text-mainTextColor duration-500"
    }, " Coupon Code ")], -1),
    bq = {
        key: 2,
        class: "stp-15 grid grid-cols-12 container sbp-30"
    },
    wq = {
        class: "border p-8 col-span-12 md:col-span-6 md:col-start-4"
    },
    $q = {
        class: "flex justify-between items-center pb-6 border-b text-bodyText"
    },
    Aq = n("p", null, "Subtotal", -1),
    Sq = {
        class: "flex justify-between items-center font-medium pt-6 pb-6 border-b mb-8"
    },
    Mq = n("p", null, "Subtotal", -1),
    Cq = H({
        __name: "Cart",
        setup(e) {
            const t = $l(),
                s = (l, r, c) => {
                    t.addToCart({
                        id: l,
                        name: r,
                        price: c
                    })
                },
                a = (l, r, c) => {
                    t.removeProducts({
                        id: l,
                        name: r,
                        price: c
                    })
                },
                i = l => {
                    t.removeFromTheCart(l)
                },
                o = () => {
                    t.emptyCart()
                };
            return (l, r) => {
                const c = Ae("router-link");
                return u(), p("main", null, [g(ze, {
                    img: "/images/breadcrumb_img_9.png",
                    pageName: "Cart",
                    pageDesc: "Optimize your financial journey by reviewing your selections on our secure cart page. Streamline the checkout process.",
                    pageTitle: "Cart"
                }), A(t).cartItems.length <= 0 ? (u(), p("h2", tq, " Please add products to your cart! ")) : D("", !0), A(t).cartItems.length > 0 ? (u(), p("section", sq, [n("div", aq, [n("table", iq, [nq, n("tbody", null, [(u(!0), p(G, null, oe(A(t).cartItems, f => (u(), p("tr", oq, [lq, n("td", rq, P(f.name), 1), n("td", cq, "$" + P(f.price) + ".00", 1), n("td", dq, [n("div", uq, [n("button", {
                    class: "pr-2",
                    onClick: d => a(f.id, f.name, f.price)
                }, [g(A(N0))], 8, pq), n("div", fq, [n("p", hq, P(f.qty), 1)]), n("button", {
                    class: "pl-2",
                    onClick: d => s(f.id, f.name, f.price)
                }, [g(A(To))], 8, mq)])]), n("td", gq, "$" + P(f.qty * f.price), 1), n("td", vq, [n("span", {
                    class: "cursor-pointer",
                    onClick: d => i(f.id)
                }, [g(A(SA), {
                    weight: "fill"
                })], 8, yq)])]))), 256))])])]), n("div", _q, [xq, n("button", {
                    class: "bg-p1 border border-p1 py-2 sm:py-3 px-4 sm:px-6 font-medium text-white hover:border-mainTextColor hover:bg-s2 hover:text-mainTextColor duration-500",
                    onClick: r[0] || (r[0] = f => o())
                }, " Empty Cart ")])])) : D("", !0), A(t).cartItems.length > 0 ? (u(), p("section", bq, [n("div", wq, [n("div", $q, [Aq, n("p", null, "$" + P(A(t).itemPrice), 1)]), n("div", Sq, [Mq, n("p", null, "$" + P(A(t).itemPrice), 1)]), g(c, {
                    to: "checkout",
                    class: "bg-p1 border border-p1 py-2 sm:py-3 px-4 sm:px-6 font-medium text-white hover:border-mainTextColor hover:bg-s2 hover:text-mainTextColor duration-500"
                }, {
                    default: ne(() => [ee(" Proceed To Checkout ")]),
                    _: 1
                })])])) : D("", !0)])
            }
        }
    }),
    yn = ["United States", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas (the)", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia (Plurinational State of)", "Bonaire, Sint Eustatius and Saba", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory (the)", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Cayman Islands (the)", "Central African Republic (the)", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands (the)", "Colombia", "Comoros (the)", "Congo (the Democratic Republic of the)", "Congo (the)", "Cook Islands (the)", "Costa Rica", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czechia", "Côte d'Ivoire", "Denmark", "Djibouti", "Dominica", "Dominican Republic (the)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Falkland Islands (the) [Malvinas]", "Faroe Islands (the)", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories (the)", "Gabon", "Gambia (the)", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (the)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea (the Democratic People's Republic of)", "Korea (the Republic of)", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic (the)", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands (the)", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia (Federated States of)", "Moldova (the Republic of)", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands (the)", "New Caledonia", "New Zealand", "Nicaragua", "Niger (the)", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands (the)", "Norway", "Oman", "Pakistan", "Palau", "Palestine, State of", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines (the)", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Republic of North Macedonia", "Romania", "Russian Federation (the)", "Rwanda", "Réunion", "Saint Barthélemy", "Saint Helena, Ascension and Tristan da Cunha", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin (French part)", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten (Dutch part)", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "Sudan (the)", "Suriname", "Svalbard and Jan Mayen", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands (the)", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates (the)", "United Kingdom of Great Britain and Northern Ireland (the)", "United States Minor Outlying Islands (the)", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela (Bolivarian Republic of)", "Viet Nam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe", "Åland Islands"],
    _n = ["New York", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"],
    Hq = {
        class: "container stp-30 sbp-30 grid grid-cols-12 gap-6"
    },
    Zq = {
        class: "col-span-12 border flex justify-between items-center text-bodyText px-6 py-8"
    },
    Tq = {
        class: "flex justify-start items-center gap-2"
    },
    Vq = n("input", {
        type: "text",
        class: "outline-none placeholder:text-bodyText border px-6 py-8 text-bodyText w-full",
        placeholder: "Please enter a coupon code."
    }, null, -1),
    kq = {
        class: "col-span-12 lg:col-span-6 grid grid-cols-2 gap-6 pt-4"
    },
    Pq = we('<h4 class="heading-4 col-span-2">Billings Details</h4><div class="col-span-2 sm:col-span-1"><p class="pb-2">First Name <span class="text-red-600">*</span></p><input type="text" class="outline-none border py-5 px-6 placeholder:text-bodyText w-full" placeholder="First Name"></div><div class="col-span-2 sm:col-span-1"><p class="pb-2">Last Name <span class="text-red-600">*</span></p><input type="text" class="outline-none border py-5 px-6 placeholder:text-bodyText w-full" placeholder="Last Name"></div><div class="col-span-2"><p class="pb-2">Company Name (Optional)</p><input type="text" class="outline-none border py-5 px-6 placeholder:text-bodyText w-full" placeholder="Company Name"></div>', 4),
    Lq = {
        class: "col-span-2 relative"
    },
    Eq = n("p", {
        class: "pb-2"
    }, [ee(" Country / Region "), n("span", {
        class: "text-red-600"
    }, "*")], -1),
    Bq = we('<div class="col-span-2"><p class="pb-2">Street Address <span class="text-red-600">*</span></p><input type="text" class="outline-none border py-5 px-6 placeholder:text-bodyText w-full" placeholder="Address line 1"></div><div class="col-span-2"><input type="text" class="outline-none border py-5 px-6 placeholder:text-bodyText w-full" placeholder="Address line 2"></div><div class="col-span-2"><p class="pb-2">Town / City <span class="text-red-600">*</span></p><input type="text" class="outline-none border py-5 px-6 placeholder:text-bodyText w-full" placeholder="New York"></div>', 3),
    Iq = {
        class: "col-span-2 relative"
    },
    Oq = n("p", {
        class: "pb-2"
    }, [ee("State "), n("span", {
        class: "text-red-600"
    }, "*")], -1),
    Nq = we('<div class="col-span-2"><p class="pb-2">Postcode / Zip (optional)</p><input type="text" class="outline-none border py-5 px-6 placeholder:text-bodyText w-full" placeholder="1000"></div><div class="col-span-2"><p class="pb-2">Phone <span class="text-red-600">*</span></p><input type="number" class="outline-none border py-5 px-6 placeholder:text-bodyText w-full" placeholder="Pnone number"></div><div class="col-span-2"><p class="pb-2">Email Address <span class="text-red-600">*</span></p><input type="text" class="outline-none border py-5 px-6 placeholder:text-bodyText w-full" placeholder="Email address"></div><h4 class="heading-4">Additional Information&#39;s</h4><div class="col-span-2"><p class="pb-2">Order notes (optional)</p><input type="text" class="outline-none border py-5 px-6 placeholder:text-bodyText w-full" placeholder="Notes about your order, e.g. special notes for delivery."></div>', 5),
    zq = {
        class: "col-span-12 lg:col-span-6"
    },
    jq = {
        class: "sticky top-32"
    },
    Rq = we('<h4 class="heading-4 pb-6 lg:pb-8 pt-4">Your Order</h4><div class="shadow2 flex justify-between items-center gap-1 p-6 font-medium w-full"><div class="border w-full"><p class="py-3 px-2 sm:px-6 border-b">Product</p><p class="py-3 px-2 sm:px-6 border-b text-bodyText"> Online Courses x 2 </p><p class="py-3 px-2 sm:px-6 border-b text-bodyText">Subtotal</p><p class="py-3 px-2 sm:px-6 font-semibold">Total</p></div><div class="border sm:w-full"><p class="py-3 px-2 sm:px-6 border-b">Subtotal</p><p class="py-3 px-2 sm:px-6 border-b text-bodyText">$900.00</p><p class="py-3 px-2 sm:px-6 border-b text-bodyText">$900.00</p><p class="py-3 px-2 sm:px-6 font-semibold">$900.00</p></div></div>', 2),
    Dq = {
        class: "mt-8 bg-p1 p-6 w-full"
    },
    Fq = {
        class: "text-bodyText p-6 bg-white flex justify-start items-start gap-2"
    },
    qq = {
        class: "text-2xl"
    },
    Wq = n("p", null, " Sorry, it seems that there are no available payment methods for your state. Please contact us if you require assistance or wish to make alternate arrangements. ", -1),
    Gq = n("p", {
        class: "text-white py-6"
    }, " Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy. ", -1),
    Uq = H({
        __name: "Checkout",
        setup(e) {
            const t = le(!1);

            function s() {
                t.value = !t.value
            }
            const a = le(_n[0]),
                i = le(yn[0]),
                o = le(!1),
                l = le(!1);

            function r() {
                o.value = !o.value
            }

            function c() {
                l.value = !l.value
            }

            function f(h) {
                a.value = h
            }

            function d(h) {
                i.value = h
            }
            return (h, m) => {
                const y = Ae("router-link");
                return u(), p("main", null, [g(ze, {
                    img: "/images/breadcrumb_img_16.png",
                    pageName: "Checkout",
                    pageDesc: "Finalize your order seamlessly on our secure Checkout page. Review your selected services, enter billing information",
                    pageTitle: "Checkout"
                }), n("section", Hq, [n("div", Zq, [n("p", Tq, [g(A(Ei)), ee(" Have a coupon? ")]), n("button", {
                    class: "hover:text-s2 duration-500",
                    onClick: s
                }, " Click here ")]), g(A(ja), {
                    height: t.value ? "auto" : 0,
                    duration: 500,
                    class: "col-span-12 w-full"
                }, {
                    default: ne(() => [Vq]),
                    _: 1
                }, 8, ["height"]), n("div", kq, [Pq, n("div", Lq, [Eq, n("p", {
                    class: "border py-5 px-6 text-bodyText w-full cursor-pointer flex justify-between items-center",
                    onClick: c
                }, [ee(P(i.value) + " ", 1), g(A(K1), {
                    weight: "fill"
                })]), g(ga, {
                    items: A(yn),
                    showModal: l.value,
                    handleClick: c,
                    handleSelectItem: d
                }, null, 8, ["items", "showModal"])]), Bq, n("div", Iq, [Oq, n("p", {
                    class: "border py-5 px-6 text-bodyText w-full cursor-pointer flex justify-between items-center",
                    onClick: r
                }, [ee(P(a.value) + " ", 1), g(A(K1), {
                    weight: "fill"
                })]), g(ga, {
                    items: A(_n),
                    showModal: o.value,
                    handleClick: r,
                    handleSelectItem: f
                }, null, 8, ["items", "showModal"])]), Nq]), n("div", zq, [n("div", jq, [Rq, n("div", Dq, [n("div", Fq, [n("div", qq, [g(A(Ei))]), Wq]), Gq, g(y, {
                    to: "#",
                    class: "bg-s2 border border-mainTextColor py-2 sm:py-3 font-medium text-mainTextColor hover:border-mainTextColor hover:bg-mainTextColor hover:text-white duration-500 block text-center"
                }, {
                    default: ne(() => [ee(" Place Order ")]),
                    _: 1
                })])])])])])
            }
        }
    }),
    Yq = {
        class: "sticky top-32 flex flex-col gap-6 lg:gap-10"
    },
    Kq = {
        class: "border p-6 sm:p-8"
    },
    Jq = n("h4", {
        class: "heading-4 pb-5"
    }, "Search", -1),
    Qq = {
        class: "flex justify-between items-center"
    },
    Xq = n("input", {
        type: "text",
        class: "border px-6 py-3 outline-none placeholder:text-bodyText text-bodyText w-full",
        placeholder: "Search here..."
    }, null, -1),
    eW = {
        class: "block text-2xl text-white bg-p1 p-3 border border-p1 hover:bg-s2 hover:text-mainTextColor duration-500 hover:border-mainTextColor"
    },
    tW = {
        class: "border p-6 sm:p-8"
    },
    sW = n("h4", {
        class: "heading-4 mb-4 md:mb-6 pb-2 relative after:absolute after:w-[20%] after:h-[2px] after:bottom-0 after:left-0 after:bg-p1"
    }, " Categories ", -1),
    aW = {
        class: "flex flex-col gap-4 justify-start items-start"
    },
    iW = {
        class: "border p-6 sm:p-8"
    },
    nW = n("h4", {
        class: "heading-4 mb-4 md:mb-6 pb-2 relative after:absolute after:w-[20%] after:h-[2px] after:bottom-0 after:left-0 after:bg-p1"
    }, " Recent Post ", -1),
    oW = {
        class: "flex justify-start items-start flex-col gap-5"
    },
    lW = {
        class: "overflow-hidden self-stretch flex justify-center items-center"
    },
    rW = ["src"],
    cW = {
        class: "w-full"
    },
    dW = {
        class: "pb-2"
    },
    uW = {
        class: "border p-6 sm:p-8"
    },
    pW = n("h4", {
        class: "heading-4 mb-4 md:mb-6 pb-2 relative after:absolute after:w-[20%] after:h-[2px] after:bottom-0 after:left-0 after:bg-p1"
    }, " Recent Post ", -1),
    fW = {
        class: "flex justify-start items-start flex-wrap gap-2"
    },
    Al = H({
        __name: "BlogSidebar",
        setup(e) {
            return (t, s) => {
                const a = Ae("router-link");
                return u(), p("div", Yq, [n("div", Kq, [Jq, n("div", Qq, [Xq, n("button", eW, [g(A(Z9), {
                    weight: "bold"
                })])])]), n("div", tW, [sW, n("ul", aW, [(u(!0), p(G, null, oe(A(aZ), ({
                    id: i,
                    name: o,
                    count: l
                }) => (u(), p("li", {
                    class: "w-full border-b last:border-none",
                    key: i
                }, [g(a, {
                    to: "/blog",
                    class: "flex justify-between items-center pb-4 border-b last:border-transparent w-full hover:text-s2 duration-300"
                }, {
                    default: ne(() => [n("span", null, P(o), 1), n("span", null, "(" + P(l) + ")", 1)]),
                    _: 2
                }, 1024)]))), 128))])]), n("div", iW, [nW, n("div", oW, [(u(!0), p(G, null, oe(A(iZ), ({
                    id: i,
                    img: o,
                    date: l,
                    title: r
                }) => (u(), p("div", {
                    class: "flex justify-center items-center gap-4",
                    key: i
                }, [n("div", lW, [n("img", {
                    src: o,
                    alt: "",
                    class: "overflow-hidden object-cover w-[100px]"
                }, null, 8, rW)]), n("div", cW, [n("p", dW, P(l) + ", " + P(new Date().getFullYear()), 1), g(a, {
                    to: "/blog-details",
                    class: "font-bold hover:text-s3 duration-300"
                }, {
                    default: ne(() => [ee(P(r), 1)]),
                    _: 2
                }, 1024)])]))), 128))])]), n("div", uW, [pW, n("div", fW, [(u(!0), p(G, null, oe(A(oZ), ({
                    id: i,
                    name: o
                }) => (u(), ye(a, {
                    to: "/blog",
                    class: "flex justify-center items-center border text-bodyText px-4 py-2 hover:text-mainTextColor hover:bg-s2 hover:border-mainTextColor duration-300",
                    key: i
                }, {
                    default: ne(() => [ee(P(o), 1)]),
                    _: 2
                }, 1024))), 128))])])])
            }
        }
    }),
    hW = {
        class: "container grid grid-cols-12 gap-6 stp-30 sbp-30"
    },
    mW = {
        class: "col-span-12 lg:col-span-8 flex flex-col gap-6 lg:gap-10"
    },
    gW = {
        class: "flex justify-start items-center gap-3"
    },
    vW = {
        class: "border-l pl-3 border-bodyText"
    },
    yW = {
        class: "heading-3 pt-5 pb-6"
    },
    _W = {
        class: "overflow-hidden"
    },
    xW = ["src"],
    bW = {
        class: "pt-6 pb-6 text-bodyText"
    },
    wW = {
        class: "flex justify-start items-center"
    },
    $W = {
        class: "text-xl group-hover:translate-x-1 duration-500"
    },
    AW = {
        class: "col-span-12 lg:col-span-4"
    },
    SW = H({
        __name: "Blog",
        setup(e) {
            return (t, s) => {
                const a = Ae("router-link");
                return u(), p("main", null, [g(ze, {
                    img: "/images/breadcrumb_img_17.png",
                    pageName: "Blog",
                    pageDesc: "Explore our insightful blog for expert perspectives on accounting, taxation, and payroll processing.",
                    pageTitle: "Our Blog"
                }), n("section", hW, [n("div", mW, [(u(!0), p(G, null, oe(A(Io), ({
                    id: i,
                    img: o,
                    title: l,
                    desc: r,
                    date: c,
                    tag: f
                }) => (u(), p("div", {
                    class: "",
                    key: i
                }, [n("div", gW, [g(a, {
                    to: "#",
                    class: "bg-p1 py-2 lg:py-3 px-3 lg:px-5 rounded-full text-white max-lg:text-sm"
                }, {
                    default: ne(() => [ee(P(f), 1)]),
                    _: 2
                }, 1024), n("p", vW, P(c) + ", " + P(new Date().getFullYear()), 1)]), n("h2", yW, P(l), 1), n("div", _W, [n("img", {
                    src: o,
                    alt: "",
                    class: "hover:scale-110 duration-500 w-full h-full"
                }, null, 8, xW)]), n("p", bW, P(r), 1), n("div", wW, [g(a, {
                    to: "/blog/" + l.toLowerCase().replaceAll(" ", "-"),
                    class: "flex justify-start items-center gap-1 border-b border-mainTextColor hover:border-s2 duration-300 group font-medium"
                }, {
                    default: ne(() => [ee(" Read More "), n("span", $W, [g(A(qt))])]),
                    _: 2
                }, 1032, ["to"])])]))), 128))]), n("div", AW, [g(Al)])])])
            }
        }
    }),
    MW = "/images/blog_details_img3.png",
    CW = "/images/blog_details_img1.png",
    HW = "/images/blog_details_img2.png",
    ZW = "/images/comment_people_2.png",
    TW = "/images/comment_people_1.png",
    VW = {
        class: "container stp-30 sbp-30 grid grid-cols-12 gap-6"
    },
    kW = {
        class: "col-span-12 lg:col-span-8 overflow-hidden"
    },
    PW = {
        class: "flex justify-start items-center gap-3"
    },
    LW = {
        class: "border-l pl-3 border-bodyText"
    },
    EW = {
        key: 0,
        class: "display-4 pt-5 pb-10"
    },
    BW = {
        key: 1,
        class: "display-4 pt-5 pb-10"
    },
    IW = we('<div class="overflow-hidden"><img src="' + MW + '" alt="" class="hover:scale-110 duration-500 w-full h-full"></div><p class="text-bodyText py-10"> Embark on a journey of operational efficiency and employee satisfaction by unlocking the full value of our Payroll Processing Services. Beyond mere paycheck processing, our comprehensive solution ensures accuracy, compliance, and timely payments. Experience streamlined payroll operations, from automated calculations to precise tax withholdings. By entrusting us with your payroll,{&quot; &quot;} </p><h3 class="heading-1">Assess Your Business Needs</h3><p class="py-6 text-bodyText"> Assessing your business needs is a pivotal step in achieving sustained success. Begin by comprehensively evaluating your current operations, identifying pain points, and setting clear objectives. Scrutinize financial processes, from accounting to payroll, ensuring they align with industry standards and legal requirements. </p><p class="text-bodyText pb-10"> Finally, align your business needs with strategic goals. Whether it&#39;s optimizing operational efficiency, enhancing customer experiences, or expanding market reach, a thorough assessment ensures that your resources are strategically allocated. Regular reassessment allows for agility, enabling your business to pivot in response to emerging opportunities or challenges. By understanding and responding to your business needs, you pave the way for sustained growth and resilience in a dynamic marketplace. </p><h4 class="heading-2 pb-6">Experience And Expertise</h4><p class="pb-10"> Our team brings a wealth of experience and expertise to deliver unparalleled financial services. With years of proven success, we navigate the intricate landscapes of accounting, taxation, and payroll processing. Our seasoned professionals stay abreast of industry changes, ensuring your business benefits from the latest insights and compliance standards. Trust in our dedicated team to leverage their comprehensive expertise,{&quot; &quot;} </p><div class="flex justify-between items-center gap-6"><div class="overflow-hidden"><img src="' + CW + '" alt="" class="hover:scale-110 duration-500 w-full h-full"></div><div class="overflow-hidden"><img src="' + HW + '" alt="" class="hover:scale-110 duration-500 w-full h-full"></div></div><p class="py-10"> we navigate complex financial landscapes with precision and innovation. Whether streamlining accounting processes, ensuring tax compliance, or optimizing payroll operations, our team is dedicated to delivering unparalleled results. Trust us to transform your financial challenges into opportunities, backed by a track record of success and a commitment to fostering your business growth. </p>', 9),
    OW = {
        class: "flex justify-start items-start gap-5 px-4 sm:px-8 lg:px-20 bg-s2 py-8 border border-mainTextColor"
    },
    NW = {
        class: "text-2xl sm:text-6xl"
    },
    zW = n("div", {
        class: ""
    }, [n("p", {
        class: "text-lg sm:text-xl md:text-2xl pb-3"
    }, ' "Incredible customer service. Their responsiveness and dedication to understanding our unique needs make them a trusted ally in our financial journey." '), n("p", {
        class: "text-xl sm:text-2xl"
    }, "By: Steve Smith")], -1),
    jW = n("h4", {
        class: "heading-3 pt-10 pb-6"
    }, "Technology And Software", -1),
    RW = n("p", null, " Embrace the future of financial management with our cutting-edge technology and software solutions. Streamline your accounting and payroll processes with user-friendly interfaces and innovative tools designed for efficiency. Our advanced software leverages automation, ensuring accuracy and compliance while providing real-time insights. ", -1),
    DW = n("h4", {
        class: "heading-3 pt-10"
    }, "Conclusion", -1),
    FW = n("p", null, " Our commitment to excellence in accounting, taxation, and payroll processing is unwavering. With a team of experienced professionals and cutting-edge technology, we empower businesses to navigate the complexities ", -1),
    qW = {
        class: "my-10 flex border-y py-6 justify-between items-center max-sm:flex-col gap-3"
    },
    WW = n("p", {
        class: "text-bodyText"
    }, "Payroll / Business / Finance", -1),
    GW = {
        class: "flex justify-start items-center gap-2"
    },
    UW = n("p", {
        class: "font-medium"
    }, "Share:", -1),
    YW = {
        class: "flex justify-start items-center gap-2"
    },
    KW = {
        class: "border-b pb-10 border-strokeColor"
    },
    JW = n("h4", {
        class: "heading-4 pb-10"
    }, "03 Comments", -1),
    QW = {
        class: "grid grid-cols-8 gap-2 sm:gap-6"
    },
    XW = n("div", {
        class: "col-span-1 pt-2"
    }, [n("img", {
        src: ZW,
        alt: "",
        class: "rounded-full"
    })], -1),
    eG = {
        class: "col-span-7"
    },
    tG = n("div", {
        class: "flex justify-between items-center pb-3"
    }, [n("h5", {
        class: "heading-5"
    }, "Andera Piacquadio"), n("button", {
        class: "text-bodyText hover:text-white hover:bg-p1 border border-bodyText hover:border-p1 px-2 sm:px-4 sm:py-0.5 rounded-full duration-300"
    }, " Reply ")], -1),
    sG = n("p", {
        class: "text-bodyText pb-6 sm:pb-10"
    }, ' " Our payroll processing has never been smoother. Timely and error-free – a testament to their commitment to excellence." ', -1),
    aG = {
        class: "flex justify-between items-center bg-softBg rounded-full py-3 px-6"
    },
    iG = n("input", {
        placeholder: "Reply to Andera Piacquadio",
        class: "w-full placeholder:text-bodyText pr-6 bg-softBg outline-none"
    }, null, -1),
    nG = {
        class: "text-bodyText text-xl"
    },
    oG = {
        class: "grid grid-cols-8 gap-6 mt-6 sm:mt-10"
    },
    lG = n("div", {
        class: "col-span-1"
    }, [n("img", {
        src: TW,
        alt: "",
        class: "rounded-full max-sm:max-w-[30px]"
    })], -1),
    rG = {
        class: "col-span-7"
    },
    cG = n("div", {
        class: "flex justify-between items-center pb-3"
    }, [n("h5", {
        class: "heading-5"
    }, "Andera Piacquadio"), n("button", {
        class: "text-bodyText hover:text-white hover:bg-p1 border max-sm:text-sm border-bodyText hover:border-p1 px-2 sm:px-4 sm:py-0.5 rounded-full duration-300"
    }, " Reply ")], -1),
    dG = n("p", {
        class: "text-bodyText pb-6 sm:pb-10"
    }, ' "Our payroll processing has never been smoother. Timely and error-free – a testament to their commitment to excellence." ', -1),
    uG = {
        class: "flex justify-between items-center bg-softBg rounded-full py-3 px-6"
    },
    pG = n("input", {
        placeholder: "Reply to Andera Piacquadio",
        class: "w-full placeholder:text-bodyText pr-6 bg-softBg outline-none"
    }, null, -1),
    fG = {
        class: "text-bodyText text-xl"
    },
    hG = we('<div class="pt-10"><h4 class="heading-4">Leave A Reply</h4><p class="text-bodyText pt-4"> Your email address will not be published. Required fields are marked * </p><div class="grid grid-cols-2 pt-5 gap-6"><div class="col-span-2"><p class="text-black pb-2">Comment*</p><textarea class="h-[200px] w-full border outline-none p-2"></textarea></div><div class="col-span-2 sm:col-span-1"><p class="text-black pb-2">Name*</p><input type="text" class="w-full border p-2 outline-none"></div><div class="col-span-2 sm:col-span-1"><p class="text-black pb-2">Email*</p><input type="text" class="w-full border p-2 outline-none"></div><div class="col-span-2"><p class="text-black pb-2">Website*</p><input type="text" class="w-full border outline-none p-2"></div><div class="col-span-2 table-checkbox"><label class="flex justify-start items-center gap-2 pb-5"><input type="checkbox" class=""><p>Subscribe to our newsletter.</p></label><button class="py-2 sm:py-3 px-4 sm:px-6 bg-p1 text-white block text-center border border-p1 hover:bg-s2 hover:border-mainTextColor hover:text-mainTextColor duration-500"> Post A Comment </button></div></div></div>', 1),
    mG = {
        class: "col-span-12 lg:col-span-4"
    },
    xn = H({
        __name: "BlogDetails",
        setup(e) {
            const t = V1(),
                s = le({}),
                a = le(!1);
            return a0(() => {
                const i = Io.filter(o => o.title.replaceAll(" ", "-").toLowerCase() === t.params.name);
                s.value = i[0], i.length > 0 && (a.value = !0)
            }), (i, o) => {
                const l = Ae("router-link");
                return u(), p("main", null, [g(ze, {
                    img: "/images/breadcrumb_img_18.png",
                    pageName: "Blog Details",
                    pageDesc: "Dive into our insightful blog, where financial expertise meets practical guidance. Explore articles on accounting, taxation.",
                    pageTitle: "Blog Details"
                }), n("section", VW, [n("div", kW, [n("div", PW, [g(l, {
                    to: "#",
                    class: "bg-p1 py-2 lg:py-3 px-3 lg:px-5 rounded-full text-white max-lg:text-sm"
                }, {
                    default: ne(() => [ee(" Payroll Processing ")]),
                    _: 1
                }), n("p", LW, " Jan 15, " + P(new Date().getFullYear()), 1)]), a.value ? D("", !0) : (u(), p("h2", EW, " Unlocking the Full Value of Payroll Processing ")), a.value ? (u(), p("h2", BW, P(s.value.title), 1)) : D("", !0), IW, n("div", OW, [n("div", NW, [g(A(Ib), {
                    weight: "fill"
                })]), zW]), jW, RW, DW, FW, n("div", qW, [WW, n("div", GW, [UW, n("ul", YW, [(u(!0), p(G, null, oe(A(o0), ({
                    id: r,
                    link: c,
                    icon: f
                }) => (u(), p("li", {
                    key: r
                }, [g(l, {
                    to: c,
                    class: "text-bodyText p-3 rounded-full border duration-300 hover:text-white text-xl block hover:bg-p1"
                }, {
                    default: ne(() => [(u(), ye(Ve(f)))]),
                    _: 2
                }, 1032, ["to"])]))), 128))])])]), n("div", KW, [JW, n("div", QW, [XW, n("div", eG, [tG, sG, n("div", aG, [iG, n("button", nG, [g(A(Li), {
                    weight: "bold"
                })])]), n("div", oG, [lG, n("div", rG, [cG, dG, n("div", uG, [pG, n("button", fG, [g(A(Li), {
                    weight: "bold"
                })])])])])])])]), hG]), n("div", mG, [g(Al)])])])
            }
        }
    }),
    gG = H({
        __name: "FAQ",
        setup(e) {
            return (t, s) => (u(), p("main", null, [g(ze, {
                img: "/images/breadcrumb_img_19.png",
                pageName: "FAQ",
                pageDesc: "Discover seamless accounting and payroll processing services tailored to your business needs. Our expert team ensures accuracy,",
                pageTitle: "FAQ"
            }), g(ys)]))
        }
    }),
    vG = H({
        __name: "Pricing",
        setup(e) {
            return (t, s) => (u(), p("main", null, [g(ze, {
                img: "/images/breadcrumb_img_20.png",
                pageName: "Pricing",
                pageDesc: "Discover transparent and competitive pricing for our Accounting & Payroll Processing Services. Tailored solutions to fit your business needs,",
                pageTitle: "Pricing"
            }), g(gs, {
                isWhiteBg: !0
            })]))
        }
    }),
    yG = "/images/contact_page_img.png",
    _G = {
        class: "container grid grid-cols-12 stp-30 sbp-30"
    },
    xG = {
        class: "col-span-12 lg:col-span-8 lg:col-start-3 grid grid-cols-12 gap-4 lg:gap-6"
    },
    bG = {
        class: "bg-white text-p1 text-2xl rounded-full p-4 group-hover:text-white group-hover:bg-mainTextColor duration-500"
    },
    wG = {
        class: "heading-4 pt-5 pb-2"
    },
    $G = ["href"],
    AG = {
        key: 1
    },
    SG = {
        class: "col-span-12 lg:col-span-8 lg:col-start-3 border p-4 sm:p-6 lg:p-10"
    },
    MG = n("h4", {
        class: "heading-4 pb-6"
    }, "Fill the From Below", -1),
    CG = {
        class: "grid grid-cols-2 gap-6"
    },
    HG = n("div", {
        class: "col-span-2 sm:col-span-1"
    }, [n("input", {
        type: "text",
        placeholder: "First Name",
        class: "placeholder:text-bodyText py-4 px-8 border w-full outline-none",
        required: ""
    })], -1),
    ZG = n("div", {
        class: "col-span-2 sm:col-span-1"
    }, [n("input", {
        type: "text",
        placeholder: "Last Name",
        class: "placeholder:text-bodyText py-4 px-8 border w-full outline-none"
    })], -1),
    TG = {
        class: "col-span-2 sm:col-span-1 py-4 px-8 border flex justify-start items-center gap-2"
    },
    VG = {
        class: "text-xl text-bodyText"
    },
    kG = n("input", {
        type: "text",
        placeholder: "Type email address",
        class: "placeholder:text-bodyText w-full outline-none"
    }, null, -1),
    PG = {
        class: "col-span-2 sm:col-span-1 py-4 px-8 border flex justify-start items-center gap-2"
    },
    LG = {
        class: "text-xl text-bodyText"
    },
    EG = n("input", {
        type: "text",
        placeholder: "Subject",
        class: "placeholder:text-bodyText w-full outline-none"
    }, null, -1),
    BG = we('<div class="col-span-2 py-4 px-8 border flex justify-start items-center gap-2"><textarea placeholder="Type Your message..." class="placeholder:text-bodyText w-full outline-none h-[200px]" required></textarea></div><div class="col-span-2 table-checkbox flex justify-between items-center max-[400px]:flex-col max-[400px]:items-start gap-5"><label class="flex justify-start items-center gap-2"><input type="checkbox" class=""><p>Subscribe to our newsletter.</p></label><button class="py-2 sm:py-3 px-4 sm:px-6 bg-p1 text-white block text-center border border-p1 hover:bg-s2 hover:border-mainTextColor hover:text-mainTextColor duration-500"> Submit </button></div>', 2),
    IG = {
        class: "container grid grid-cols-12 gap-6 sbp-30"
    },
    OG = {
        class: "col-span-12 md:col-span-5 xl:col-span-4 flex flex-col justify-center items-start"
    },
    NG = n("h2", {
        class: "display-4 pb-5"
    }, "Our Office", -1),
    zG = n("p", {
        class: "text-bodyText pb-8 lg:pb-15"
    }, " If you prefer an in-person meeting, our office is open during business hours. ", -1),
    jG = {
        class: "flex flex-col gap-6 lg:gap-10"
    },
    RG = {
        class: "flex justify-start items-start gap-3"
    },
    DG = {
        class: "bg-mainTextColor text-white text-3xl p-3 rounded-full"
    },
    FG = n("div", {
        class: ""
    }, [n("h4", {
        class: "heading-4 pb-1"
    }, "New York, USA:"), n("p", null, "29 Park Avenue New York, New York 172")], -1),
    qG = {
        class: "flex justify-start items-start gap-3"
    },
    WG = {
        class: "bg-mainTextColor text-white text-3xl p-3 rounded-full"
    },
    GG = n("div", {
        class: ""
    }, [n("h4", {
        class: "heading-4 pb-1"
    }, "Switzerland, Bern:"), n("p", null, "30 Stamford Street,London SE1 9LQ")], -1),
    UG = {
        class: "flex justify-start items-start gap-3"
    },
    YG = {
        class: "bg-mainTextColor text-white text-3xl p-3 rounded-full"
    },
    KG = n("div", {
        class: ""
    }, [n("h4", {
        class: "heading-4 pb-1"
    }, "New York, USA:"), n("p", null, "891 Daudkandi, Chattogram 58201")], -1),
    JG = n("div", {
        class: "col-span-12 md:col-span-7 xl:col-start-6 overflow-hidden"
    }, [n("img", {
        src: yG,
        alt: "",
        class: "hover:scale-110 duration-500 w-full h-full"
    })], -1),
    QG = H({
        __name: "Contact",
        setup(e) {
            return (t, s) => (u(), p("main", null, [g(ze, {
                img: "/images/breadcrumb_img_21.png",
                pageName: "Course",
                pageDesc: "Connect with us for expert accounting and payroll services. Reach out via the form or contact information below.",
                pageTitle: "Connect With Us"
            }), n("section", _G, [n("div", xG, [(u(!0), p(G, null, oe(A(nZ), ({
                id: a,
                icon: i,
                name: o,
                link: l,
                address: r,
                linkText: c
            }) => (u(), p("div", {
                class: "flex flex-col justify-start items-start p-4 lg:p-8 bg-p1 text-white w-full col-span-12 sm:col-span-4 border border-p1 hover:bg-s2 hover:text-mainTextColor hover:border-mainTextColor duration-500 group",
                key: a
            }, [n("div", bG, [(u(), ye(Ve(i), {
                weight: "fill"
            }))]), n("h4", wG, P(o), 1), l ? (u(), p("a", {
                key: 0,
                href: l
            }, P(c), 9, $G)) : D("", !0), r ? (u(), p("p", AG, P(r), 1)) : D("", !0)]))), 128))]), n("div", SG, [MG, n("form", CG, [HG, ZG, n("div", TG, [n("span", VG, [g(A(n0), {
                weight: "fill"
            })]), kG]), n("div", PG, [n("span", LG, [g(A(v_), {
                weight: "fill"
            })]), EG]), BG])])]), n("section", IG, [n("div", OG, [NG, zG, n("ul", jG, [n("li", RG, [n("div", DG, [g(A(g1), {
                weight: "fill"
            })]), FG]), n("li", qG, [n("div", WG, [g(A(g1), {
                weight: "fill"
            })]), GG]), n("li", UG, [n("div", YG, [g(A(g1), {
                weight: "fill"
            })]), KG])])]), JG])]))
        }
    }),
    XG = {
        class: "container stp-30 sbp-30 flex flex-col gap-2"
    },
    eU = n("div", {
        class: "flex justify-start items-start flex-col"
    }, [n("p", {
        class: "bg-p1 py-3 px-5 text-white rounded-full"
    }, "Privacy Policy"), n("h2", {
        class: "display-4 py-6"
    }, "Privacy Policy"), n("p", {
        class: "text-bodyText"
    }, " We collect necessary information to provide our Accounting & Payroll Processing Services, including personal details (e.g., names, addresses), contact information, and financial data required for payroll and accounting purpose ")], -1),
    tU = {
        class: ""
    },
    sU = n("h3", {
        class: "heading-1 py-6"
    }, "Information we collect", -1),
    aU = n("p", {
        class: "text-bodyText"
    }, " In the course of providing Accounting & Payroll Processing Services, we collect essential information to ensure accurate and efficient service delivery. This may include personal details such as names, addresses, and contact information, as well as financial data necessary for payroll and accounting purposes. We prioritize the security and confidentiality of this information, employing industry-standard measures to safeguard it. Rest assured, our data collection is guided by a commitment to transparency, ", -1),
    iU = {
        class: "pt-6 flex flex-col gap-4"
    },
    nU = {
        class: "flex justify-start items-center gap-1"
    },
    oU = {
        class: "text-2xl text-p1"
    },
    lU = {
        class: "flex justify-start items-center gap-1"
    },
    rU = {
        class: "text-2xl text-p1"
    },
    cU = {
        class: "flex justify-start items-center gap-1"
    },
    dU = {
        class: "text-2xl text-p1"
    },
    uU = we('<div class=""><h3 class="heading-2 py-6">Use of information</h3><p class="text-bodyText"> The information collected during the provision of Accounting &amp; Payroll Processing Services is used solely for the purpose of delivering accurate and efficient financial services. We employ this data to facilitate payroll processing, accounting tasks, and related functions essential to your business operations. Your information is handled with the utmost care, ensuring confidentiality and compliance with relevant data protection regulations. We do not use your data for purposes beyond the scope of our services, and it is not shared with unauthorized third parties. Our commitment is to utilize your information responsibly, enhancing the quality and precision of the financial services we provide. For further details, please consult our comprehensive Privacy Policy. </p></div><div class=""><h3 class="heading-3 py-6">Data security</h3><p class="text-bodyText"> At Accupay, we prioritize the security of your data. Rigorous measures are in place to safeguard the confidentiality and integrity of the information entrusted to us. This includes robust encryption protocols, access controls, and regular security audits. We are committed to protecting your data from unauthorized access, disclosure, alteration, or destruction. Our dedicated security team ensures compliance with industry best practices and relevant data protection regulations. </p></div><div class=""><h3 class="heading-3 py-6">Data sharing and third parties</h3><p class="text-bodyText"> We understand the importance of your privacy. Your data, collected for Accounting &amp; Payroll Processing Services, is treated with utmost confidentiality. We do not share your information with third parties unless essential for service delivery. In such cases, strict contractual agreements ensure that third parties adhere to our privacy standards. Rest assured, your data is never sold, traded, or used for unrelated purposes. Our commitment is to transparency and responsible data handling. For more details on data sharing practices and the involvement of third parties, please review our comprehensive Privacy Policy. Your trust is paramount, and we take every measure to protect the security and confidentiality of your information </p></div>', 3),
    pU = {
        class: ""
    },
    fU = n("h3", {
        class: "heading-3 py-6"
    }, "Data retention", -1),
    hU = n("p", {
        class: "text-bodyText"
    }, " At [Accupay], we value your privacy and adhere to responsible data practices. Your data, collected for Accounting & Payroll Processing Services, is retained only for as long as necessary to fulfill the purposes outlined in our services. We follow clear retention policies, considering legal requirements and operational needs. Once the retention period expires, your data is securely and permanently deleted. ", -1),
    mU = {
        class: "pt-6 flex flex-col gap-4"
    },
    gU = {
        class: "flex justify-start items-center gap-1"
    },
    vU = {
        class: "text-2xl text-p1"
    },
    yU = {
        class: "flex justify-start items-center gap-1"
    },
    _U = {
        class: "text-2xl text-p1"
    },
    xU = {
        class: "flex justify-start items-center gap-1"
    },
    bU = {
        class: "text-2xl text-p1"
    },
    wU = we('<div class=""><h3 class="heading-3 py-6">Cookies and tracking technologies</h3><p class="text-bodyText"> At [Accupay], we utilize cookies and tracking technologies to enhance your experience with our Accounting &amp; Payroll Processing Services. These technologies help us improve service functionality, personalize content, and analyze usage patterns. Cookies may be used for session management, and tracking technologies enable us to understand user preferences. Rest assured, we prioritize your privacy, and you have the option to manage cookie preferences. Our use of these technologies aligns with industry standards and regulations </p></div><div class=""><h3 class="heading-3 py-6">Children&#39;s privacy</h3><p class="text-bodyText"> At Accupay, we are committed to protecting the privacy of all users, including children. Our Accounting &amp; Payroll Processing Services are not intended for individuals under the age of 18. We do not knowingly collect or process personal information from children. If you believe that we have inadvertently collected information from a child, please contact us immediately, and we will take prompt steps to delete such data. </p></div><div class=""><h3 class="heading-3 py-6">Changes to the privacy policy</h3><p class="text-bodyText"> At [Accupay], we are committed to maintaining transparency in our data practices. As we continually strive to enhance our Accounting &amp; Payroll Processing Services, updates to our Privacy Policy may occur. Any changes made will be communicated to you through prominent notifications on our website or other appropriate channels. We encourage you to periodically review our Privacy Policy for the latest information on how we handle your data. Rest assured, our commitment to your privacy remains steadfast, and changes are made to ensure compliance with evolving regulations and to enhance your overall experience. If you have any questions about changes to the policy, please contact us for clarification </p></div><div class=""><h3 class="heading-3 py-6">Contact information</h3><p class="text-bodyText"> If you have any questions or concerns regarding our Privacy Policy or the handling of your personal information, please contact us at <span class="text-p1">accupay@gmail.com</span></p></div>', 4),
    $U = H({
        __name: "PrivacyPolicy",
        setup(e) {
            return (t, s) => (u(), p("main", null, [g(ze, {
                img: "/images/breadcrumb_img_22.png",
                pageName: "Privacy Policy",
                pageDesc: "Your privacy matters. Our Privacy Policy outlines how we handle your data in providing Accounting & Payroll Processing Services.",
                pageTitle: "Privacy Policy"
            }), n("section", XG, [eU, n("div", tU, [sU, aU, n("ul", iU, [n("li", nU, [n("span", oU, [g(A(Ne))]), ee(" Accounting & Payroll Processing Services, we collect essential information ")]), n("li", lU, [n("span", rU, [g(A(Ne))]), ee(" commitment to transparency, compliance with relevant regulations ")]), n("li", cU, [n("span", dU, [g(A(Ne))]), ee(" We prioritize the security and confidentiality of this information, ")])])]), uU, n("div", pU, [fU, hU, n("ul", mU, [n("li", gU, [n("span", vU, [g(A(Ne))]), ee(" We believe in minimizing data storage while ensuring compliance with regulations ")]), n("li", yU, [n("span", _U, [g(A(Ne))]), ee(" For specific details on our data retention practices ")]), n("li", xU, [n("span", bU, [g(A(Ne))]), ee(" please refer to our comprehensive Privacy Policy. Your trust is paramount ")])])]), wU])]))
        }
    }),
    AU = {
        class: "container stp-30 sbp-30 flex flex-col gap-2"
    },
    SU = we('<div class="flex justify-start items-start flex-col"><p class="bg-p1 py-3 px-5 text-white rounded-full"> Terms &amp; Conditions </p><h2 class="display-4 py-6">Terms &amp; Conditions</h2><p class="text-bodyText"> Creating a robust and clear Terms &amp; Conditions page for your Accounting &amp; Payroll Processing Services is essential for setting expectations and outlining the contractual framework. Below are key elements you may want to include </p></div><div class=""><h3 class="heading-1 py-6">Introduction</h3><p class="text-bodyText"> Welcome to [accupay], where we are dedicated to providing exceptional Accounting &amp; Payroll Processing Services. These Terms &amp; Conditions outline the mutual agreement between [accupay] and our valued clients. By accessing and using our services, you acknowledge and agree to comply with the terms set forth herein. </p><p class="text-bodyText pt-6"> By accessing and using our services, you acknowledge and agree to comply with the terms set forth herein. These terms govern the relationship between you and [Your Company] and outline the rights, responsibilities, and obligations of both parties. We encourage you to read these Terms &amp; Conditions carefully before engaging with our services. If you have any questions or concerns, please contact us for clarification. Your use of our services indicates your acceptance of these terms. Thank you for choosing [Your Company]. </p></div>', 2),
    MU = {
        class: ""
    },
    CU = n("h3", {
        class: "heading-2 py-6"
    }, "Service Description", -1),
    HU = n("p", {
        class: "text-bodyText"
    }, " [Accupay] is pleased to offer comprehensive Accounting & Payroll Processing Services tailored to meet the financial needs of businesses. Our services encompass a range of professional accounting and payroll solutions designed to streamline and optimize your financial processes. ", -1),
    ZU = {
        class: "pt-6 flex flex-col gap-4"
    },
    TU = {
        class: "flex justify-start items-center gap-1"
    },
    VU = {
        class: "text-2xl text-p1"
    },
    kU = {
        class: "flex justify-start items-center gap-1"
    },
    PU = {
        class: "text-2xl text-p1"
    },
    LU = {
        class: "flex justify-start items-center gap-1"
    },
    EU = {
        class: "text-2xl text-p1"
    },
    BU = {
        class: "flex justify-start items-center gap-1"
    },
    IU = {
        class: "text-2xl text-p1"
    },
    OU = {
        class: "flex justify-start items-center gap-1"
    },
    NU = {
        class: "text-2xl text-p1"
    },
    zU = {
        class: "flex justify-start items-center gap-1"
    },
    jU = {
        class: "text-2xl text-p1"
    },
    RU = we('<div class=""><h3 class="heading-3 py-6">Client Responsibilities</h3><p class="text-bodyText"> As a valued client of [accupay], your cooperation is essential for the success of our Accounting &amp; Payroll Processing Services. Please ensure the timely and accurate provision of all necessary financial information. Collaborate with us in addressing queries promptly to facilitate efficient service delivery. Adherence to agreed-upon timelines and communication of any significant changes or updates is crucial. Your commitment to providing accurate data and promptly responding to our requests enables us to deliver the high-quality services you deserve. Thank you for entrusting [Your Company] with your financial needs.&quot; </p></div><div class=""><h3 class="heading-3 py-6">Payment Terms</h3><p class="text-bodyText"> At [accupay], we strive to provide transparent and fair payment terms for our Accounting &amp; Payroll Processing Services. Invoices will be issued in accordance with the agreed-upon billing cycle. Payment is due [insert number of days] days from the invoice date. Late payments may incur [insert percentage]% interest per month. We accept payments through [list accepted payment methods]. Any concerns regarding invoices or payment terms can be addressed by contacting our billing department at [billing email/phone]. Your prompt and timely payments are appreciated, ensuring the continued smooth provision of our services </p></div><div class=""><h3 class="heading-3 py-6">Service Delivery and Timelines</h3><p class="text-bodyText"> At [accupay], we are committed to delivering timely and efficient Accounting &amp; Payroll Processing Services. Our aim is to ensure that all tasks are completed within agreed-upon timelines. The specific delivery schedules for various services will be communicated upon engagement. We strive to meet deadlines with precision, providing you with reliable and prompt financial solutions. Any unforeseen delays will be promptly communicated, and our team is dedicated to maintaining transparency throughout the service delivery process. Your satisfaction is our priority, and we appreciate your understanding and collaboration in achieving seamless service delivery.&quot; </p></div><div class=""><h3 class="heading-3 py-6">Data Accuracy</h3><p class="text-bodyText"> Data accuracy is paramount in our Accounting &amp; Payroll Processing Services at [Your Company]. We rely on the precise and timely provision of your financial information to ensure the integrity of our services. It is essential that you verify the accuracy of the data submitted and promptly communicate any corrections or updates. Our commitment to delivering accurate and reliable results is reinforced by your collaboration in maintaining the precision of the information shared. Your diligence in upholding data accuracy facilitates the smooth functioning of our financial processes and contributes to the success of our services </p></div><div class=""><h3 class="heading-3 py-6">Confidentiality</h3><p class="text-bodyText"> At [accupay], we prioritize the confidentiality of your sensitive information. Our commitment to safeguarding your data is unwavering. During the provision of our Accounting &amp; Payroll Processing Services, all client-related information is treated with the utmost confidentiality. We implement robust security measures, access controls, and encryption protocols to protect your data from unauthorized access or disclosure. Rest assured, your financial and personal information is handled with the highest level of discretion and in compliance with data protection regulations. For further details on our confidentiality practices, please refer to our comprehensive Privac </p></div><div class=""><h3 class="heading-3 py-6">Intellectual Property</h3><p class="text-bodyText"> At [Accupay], we are committed to maintaining transparency in our data practices. As we continually strive to enhance our Accounting &amp; Payroll Processing Services, updates to our Privacy Policy may occur. Any changes made will be communicated to you through prominent notifications on our website or other appropriate channels. </p></div><div class=""><h3 class="heading-3 py-6">Termination of Services</h3><p class="text-bodyText"> Either party, [Your Company] or the client, reserves the right to terminate Accounting &amp; Payroll Processing Services under certain conditions. Termination may occur for reasons such as breach of contract, non-payment, or mutual agreement. A notice period and specific termination procedures are outlined in our Terms &amp; Conditions. Upon termination, any outstanding fees become due, and relevant data and documents are returned promptly. We value transparent and respectful communication throughout our engagement, and termination </p><ul class="pt-6"><li><p class="font-medium pb-4">1. Ownership</p><p class="pl-4 relative text-bodyText after:absolute after:left-0 after:top-3 after:w-[4px] after:h-[4px] after:rounded-full after:bg-bodyText"> Any intellectual property, including but not limited to software, tools, and proprietary methodologies developed by [Your Company] during the provision of services, shall remain the exclusive property of [accupay]. </p></li><li><p class="font-medium pb-4">2. License</p><p class="pl-4 relative text-bodyText after:absolute after:left-0 after:top-3 after:w-[4px] after:h-[4px] after:rounded-full after:bg-bodyText"> Clients are granted a non-exclusive, non-transferable license to use any deliverables or intellectual property provided by [Your Company] solely for the purpose of utilizing the Accounting &amp; Payroll Processing Services. </p></li><li><p class="font-medium pb-4">3. Confidentiality</p><p class="pl-4 relative text-bodyText after:absolute after:left-0 after:top-3 after:w-[4px] after:h-[4px] after:rounded-full after:bg-bodyText"> Clients agree to treat all intellectual property and proprietary information as confidential, refraining from disclosing or reproducing such materials without explicit written consent from [Accupay]. </p></li></ul></div><div class=""><h3 class="heading-3 py-6">Dispute Resolution</h3><p class="text-bodyText"> Dispute Resolution for Accounting &amp; Payroll Processing Services: In the event of any dispute arising from the use of [Your Company]s Accounting &amp; Payroll Processing Services, both parties agree to engage in good-faith negotiations to reach a resolution. If a resolution cannot be achieved through negotiation, the parties agree to pursue mediation or arbitration in accordance with [Applicable Jurisdiction] laws. Any legal proceedings shall take place in the courts of [Applicable Jurisdiction]. Both [Your Company] and the client commit to cooperating in the resolution process to ensure a fair and timely outcome. </p></div>', 8),
    DU = H({
        __name: "TermsConditions",
        setup(e) {
            return (t, s) => (u(), p("main", null, [g(ze, {
                img: "/images/breadcrumb_img_24.png",
                pageName: "Terms & Conditions",
                pageDesc: "By using our Accounting & Payroll Processing Services, you agree to comply with the outlined terms and conditions. ",
                pageTitle: "Terms & Conditions"
            }), n("section", AU, [SU, n("div", MU, [CU, HU, n("ul", ZU, [n("li", TU, [n("span", VU, [g(A(Ne))]), ee(" Dentist Services ")]), n("li", kU, [n("span", PU, [g(A(Ne))]), ee(" Healthcare Services ")]), n("li", LU, [n("span", EU, [g(A(Ne))]), ee(" Real Estate Services ")]), n("li", BU, [n("span", IU, [g(A(Ne))]), ee(" Taxations Services ")]), n("li", OU, [n("span", NU, [g(A(Ne))]), ee(" Accounting Services ")]), n("li", zU, [n("span", jU, [g(A(Ne))]), ee(" Payroll processing ")])])]), RU])]))
        }
    }),
    FU = "/images/register_bg_img.png",
    Sl = "/images/google.png",
    qU = {
        class: "flex justify-start items-center gap-8 xl:gap-20 xxl:gap-32 max-xl:flex-col"
    },
    WU = {
        class: "relative lg:max-h-screen lg:min-h-screen overflow-hidden max-xl:order-2"
    },
    GU = n("img", {
        src: FU,
        alt: "",
        class: "object-cover h-full"
    }, null, -1),
    UU = {
        class: "absolute bottom-10 xl:bottom-20 left-4 xl:left-16 xxl:left-24 xxxl:left-32 testimonial-bg p-4 sm:p-8 max-xl:container lg:w-[550px] rounded-xl overflow-hidden"
    },
    YU = {
        class: "relative"
    },
    KU = {
        class: "text-lg sm:text-xl"
    },
    JU = {
        class: "flex gap-3 pt-3 justify-between"
    },
    QU = {
        class: ""
    },
    XU = {
        class: "text-lg sm:text-2xl font-medium"
    },
    eY = {
        class: "max-sm:text-xs"
    },
    tY = {
        class: "flex justify-end items-center gap-3 absolute right-0 sm:right-4 bottom-4 z-20"
    },
    sY = {
        class: "bg-mainTextColor rounded-full text-white p-3 ara-prev"
    },
    aY = {
        class: "bg-mainTextColor rounded-full text-white p-3 ara-next"
    },
    iY = {
        class: "max-xl:container xl:w-[650px] xl:pr-8 max-xl:stp-30"
    },
    nY = n("img", {
        src: ls,
        alt: ""
    }, null, -1),
    oY = we('<h2 class="display-4 py-5">Register</h2><p class="text-bodyText pb-6 lg:pb-10"> Join Our Community: Register for Exclusive Access </p><button class="flex justify-center items-center gap-2 font-semibold bg-softBg py-4 rounded-xl w-full"><span><img src="' + Sl + '" alt=""></span> Sign up with Google </button><div class="py-6 lg:py-8 text-center"><p class="relative after:absolute after:top-3 after:left-0 after:h-px after:bg-strokeColor after:w-[40%] before:absolute before:top-3 before:right-0 before:h-px before:bg-strokeColor max-md:before:content-none max-md:after:content-none before:w-[40%]"> Or Sign In With </p></div>', 4),
    lY = {
        class: "grid grid-cols-2 gap-6"
    },
    rY = n("div", {
        class: "col-span-2 sm:col-span-1"
    }, [n("input", {
        type: "text",
        placeholder: "First Name",
        class: "placeholder:text-bodyText py-4 px-8 border w-full outline-none"
    })], -1),
    cY = n("div", {
        class: "col-span-2 sm:col-span-1"
    }, [n("input", {
        type: "text",
        placeholder: "Last Name",
        class: "placeholder:text-bodyText py-4 px-8 border w-full outline-none"
    })], -1),
    dY = {
        class: "col-span-2 py-4 px-8 border flex justify-start items-center gap-2"
    },
    uY = {
        class: "text-xl text-bodyText"
    },
    pY = n("input", {
        type: "text",
        placeholder: "Type email address",
        class: "placeholder:text-bodyText w-full outline-none"
    }, null, -1),
    fY = {
        class: "col-span-2 py-4 px-8 border flex justify-start items-center gap-2"
    },
    hY = {
        class: "text-xl text-bodyText"
    },
    mY = n("input", {
        type: "password",
        placeholder: "Password",
        class: "placeholder:text-bodyText w-full outline-none"
    }, null, -1),
    gY = n("div", {
        class: "col-span-2 table-checkbox"
    }, [n("label", {
        class: "flex justify-start items-center gap-2"
    }, [n("input", {
        type: "checkbox",
        class: ""
    }), n("p", null, [ee(" Agree With "), n("span", {
        class: "font-semibold underline"
    }, " Privacy & Policy ")])])], -1),
    vY = {
        class: "col-span-2"
    },
    yY = H({
        __name: "Register",
        setup(e) {
            return (t, s) => {
                const a = Ae("router-link");
                return u(), p("main", null, [n("section", qU, [n("div", WU, [GU, n("div", UU, [g(A(t0), {
                    class: "!flex !justify-center !items-center relative",
                    modules: [A(e0), A(X1), A(cl)],
                    spaceBetween: 40,
                    navigation: {
                        nextEl: ".ara-next",
                        prevEl: ".ara-prev"
                    },
                    "slides-per-view": 1,
                    loop: !0
                }, {
                    default: ne(() => [(u(!0), p(G, null, oe(A(z0), ({
                        id: i,
                        name: o,
                        designation: l,
                        review: r
                    }) => (u(), ye(A(s0), {
                        key: i
                    }, {
                        default: ne(() => [n("div", YU, [n("p", KU, '"' + P(r) + '"', 1), n("div", JU, [n("div", QU, [n("p", XU, P(o), 1), n("p", eY, P(l), 1)])])])]),
                        _: 2
                    }, 1024))), 128)), n("div", tY, [n("button", sY, [g(A(wo))]), n("button", aY, [g(A(qt))])])]),
                    _: 1
                }, 8, ["modules", "navigation"])])]), n("div", iY, [g(a, {
                    to: "/"
                }, {
                    default: ne(() => [nY]),
                    _: 1
                }), oY, n("div", lY, [rY, cY, n("div", dY, [n("span", uY, [g(A(n0), {
                    weight: "fill"
                })]), pY]), n("div", fY, [n("span", hY, [g(A(Ho), {
                    weight: "fill"
                })]), mY]), gY, n("div", vY, [g(a, {
                    to: "/login",
                    class: "py-4 bg-p1 text-white block text-center border border-p1 hover:bg-s2 hover:border-mainTextColor hover:text-mainTextColor duration-500"
                }, {
                    default: ne(() => [ee(" Register ")]),
                    _: 1
                })])])])])])
            }
        }
    }),
    _Y = "/images/login_bg_img.png",
    xY = {
        class: "flex justify-start items-center gap-8 xl:gap-20 xxl:gap-32 max-xl:flex-col"
    },
    bY = {
        class: "relative lg:max-h-screen lg:min-h-screen overflow-hidden max-xl:order-2"
    },
    wY = n("img", {
        src: _Y,
        alt: "",
        class: "object-cover h-full"
    }, null, -1),
    $Y = {
        class: "absolute bottom-10 xl:bottom-20 left-4 xl:left-16 lg:max-xxl:mr-8 xxl:left-24 xxxl:left-32 testimonial-bg p-4 sm:p-8 max-xl:container lg:w-[550px] rounded-xl overflow-hidden"
    },
    AY = {
        class: "relative"
    },
    SY = {
        class: "text-lg sm:text-xl"
    },
    MY = {
        class: "flex gap-3 pt-3 justify-between"
    },
    CY = {
        class: ""
    },
    HY = {
        class: "text-lg sm:text-2xl font-medium"
    },
    ZY = {
        class: "max-sm:text-xs"
    },
    TY = {
        class: "flex justify-end items-center gap-3 absolute right-0 sm:right-4 bottom-4 z-20"
    },
    VY = {
        class: "bg-mainTextColor rounded-full text-white p-3 ara-prev"
    },
    kY = {
        class: "bg-mainTextColor rounded-full text-white p-3 ara-next"
    },
    PY = {
        class: "max-xl:container xl:w-[650px] xl:pr-8 max-xl:stp-30"
    },
    LY = n("img", {
        src: ls,
        alt: ""
    }, null, -1),
    EY = we('<h2 class="display-4 py-5">Login</h2><p class="text-bodyText pb-6 lg:pb-10"> Grow with expert consulting support. </p><button class="flex justify-center items-center gap-2 font-semibold bg-softBg py-4 rounded-xl w-full"><span><img src="' + Sl + '" alt=""></span> Sign up with Google </button><div class="py-6 lg:py-8 text-center"><p class="relative after:absolute after:top-3 after:left-0 after:h-px after:bg-strokeColor after:w-[40%] before:absolute before:top-3 before:right-0 before:h-px before:bg-strokeColor max-md:before:content-none max-md:after:content-none before:w-[40%]"> Or Sign In With </p></div>', 4),
    BY = {
        class: "grid grid-cols-2 gap-6"
    },
    IY = {
        class: "col-span-2 py-4 px-8 border flex justify-start items-center gap-2"
    },
    OY = {
        class: "text-xl text-bodyText"
    },
    NY = n("input", {
        type: "text",
        placeholder: "Type email address",
        class: "placeholder:text-bodyText w-full outline-none"
    }, null, -1),
    zY = {
        class: "col-span-2 py-4 px-8 border flex justify-start items-center gap-2"
    },
    jY = {
        class: "text-xl text-bodyText"
    },
    RY = n("input", {
        type: "password",
        placeholder: "Password",
        class: "placeholder:text-bodyText w-full outline-none"
    }, null, -1),
    DY = {
        class: "col-span-2 table-checkbox flex justify-between items-center"
    },
    FY = n("label", {
        class: "flex justify-start items-center gap-2"
    }, [n("input", {
        type: "checkbox",
        class: ""
    }), n("p", null, "Remember me")], -1),
    qY = {
        class: "col-span-2"
    },
    WY = H({
        __name: "Login",
        setup(e) {
            return (t, s) => {
                const a = Ae("router-link");
                return u(), p("main", null, [n("section", xY, [n("div", bY, [wY, n("div", $Y, [g(A(t0), {
                    class: "!flex !justify-center !items-center relative",
                    modules: [A(e0), A(X1), A(cl)],
                    spaceBetween: 40,
                    navigation: {
                        nextEl: ".ara-next",
                        prevEl: ".ara-prev"
                    },
                    "slides-per-view": 1,
                    loop: !0
                }, {
                    default: ne(() => [(u(!0), p(G, null, oe(A(z0), ({
                        id: i,
                        name: o,
                        designation: l,
                        review: r
                    }) => (u(), ye(A(s0), {
                        key: i
                    }, {
                        default: ne(() => [n("div", AY, [n("p", SY, '"' + P(r) + '"', 1), n("div", MY, [n("div", CY, [n("p", HY, P(o), 1), n("p", ZY, P(l), 1)])])])]),
                        _: 2
                    }, 1024))), 128)), n("div", TY, [n("button", VY, [g(A(wo))]), n("button", kY, [g(A(qt))])])]),
                    _: 1
                }, 8, ["modules", "navigation"])])]), n("div", PY, [g(a, {
                    to: "/"
                }, {
                    default: ne(() => [LY]),
                    _: 1
                }), EY, n("div", BY, [n("div", IY, [n("span", OY, [g(A(n0), {
                    weight: "fill"
                })]), NY]), n("div", zY, [n("span", jY, [g(A(Ho), {
                    weight: "fill"
                })]), RY]), n("div", DY, [FY, g(a, {
                    to: "/contact",
                    class: "font-medium"
                }, {
                    default: ne(() => [ee(" Forget Password? ")]),
                    _: 1
                })]), n("div", qY, [g(a, {
                    to: "/",
                    class: "py-4 bg-p1 text-white block text-center border border-p1 hover:bg-s2 hover:border-mainTextColor hover:text-mainTextColor duration-500"
                }, {
                    default: ne(() => [ee(" Login ")]),
                    _: 1
                })])])])])])
            }
        }
    }),
    Ml = pT({
        history: HZ(),
        routes: [{
            path: "/",
            component: WB,
            meta: {
                title: "Home - Accupay Vue App"
            }
        }, {
            path: "/about",
            component: GI,
            meta: {
                title: "About - Accupay Vue App"
            }
        }, {
            path: "/services",
            component: VO,
            meta: {
                title: "All Services - Accupay Vue App"
            }
        }, {
            path: "/services/payroll-processing",
            component: tN,
            meta: {
                title: "Payroll Processing - Accupay Vue App"
            }
        }, {
            path: "/services/accounting-services",
            component: Bj,
            meta: {
                title: "Accounting Services - Accupay Vue App"
            }
        }, {
            path: "/services/taxation-services",
            component: kN,
            meta: {
                title: "Taxation Services - Accupay Vue App"
            }
        }, {
            path: "/services/real-state-services",
            component: lz,
            meta: {
                title: "Real State Services - Accupay Vue App"
            }
        }, {
            path: "/services/healthcare-services",
            component: Pz,
            meta: {
                title: "Healthcare Services - Accupay Vue App"
            }
        }, {
            path: "/services/dentist-services",
            component: Xz,
            meta: {
                title: "Dentist Services - Accupay Vue App"
            }
        }, {
            path: "/appointment",
            component: Kj,
            meta: {
                title: "Appointment - Accupay Vue App"
            }
        }, {
            path: "/case-study",
            component: dR,
            meta: {
                title: "Case Study - Accupay Vue App"
            }
        }, {
            path: "/case-study/case-study-details",
            component: mn,
            meta: {
                title: "Case Study Details - Accupay Vue App"
            }
        }, {
            path: "/case-study/:name",
            component: mn,
            meta: {
                title: "Case Study Details - Accupay Vue App"
            }
        }, {
            path: "/team",
            component: OD,
            meta: {
                title: "Our Team - Accupay Vue App"
            }
        }, {
            path: "/team/:name",
            component: gn,
            meta: {
                title: "Team Details - Accupay Vue App"
            }
        }, {
            path: "/team/team-details",
            component: gn,
            meta: {
                title: "Team Details - Accupay Vue App"
            }
        }, {
            path: "/shop",
            component: wF,
            meta: {
                title: "Our Shop - Accupay Vue App"
            }
        }, {
            path: "/shop/:name",
            component: vn,
            meta: {
                title: "Shop Details - Accupay Vue App"
            }
        }, {
            path: "/shop/shop-details",
            component: vn,
            meta: {
                title: "Shop Details - Accupay Vue App"
            }
        }, {
            path: "/cart",
            component: Cq,
            meta: {
                title: "Cart - Accupay Vue App"
            }
        }, {
            path: "/checkout",
            component: Uq,
            meta: {
                title: "Checkout - Accupay Vue App"
            }
        }, {
            path: "/blog",
            component: SW,
            meta: {
                title: "Blog - Accupay Vue App"
            }
        }, {
            path: "/blog/:name",
            component: xn,
            meta: {
                title: "Blog Details - Accupay Vue App"
            }
        }, {
            path: "/blog-details",
            component: xn,
            meta: {
                title: "Blog Details - Accupay Vue App"
            }
        }, {
            path: "/faq",
            component: gG,
            meta: {
                title: "FAQ - Accupay Vue App"
            }
        }, {
            path: "/pricing",
            component: vG,
            meta: {
                title: "Pricing - Accupay Vue App"
            }
        }, {
            path: "/contact",
            component: QG,
            meta: {
                title: "Contact Us - Accupay Vue App"
            }
        }, {
            path: "/privacy-policy",
            component: $U,
            meta: {
                title: "Privacy Policy - Accupay Vue App"
            }
        }, {
            path: "/terms-conditions",
            component: DU,
            meta: {
                title: "Terms & Conditions - Accupay Vue App"
            }
        }, {
            path: "/register",
            component: yY,
            meta: {
                layout: b0,
                title: "Register - Accupay Vue App"
            }
        }, {
            path: "/login",
            component: WY,
            meta: {
                layout: b0,
                title: "Login - Accupay Vue App"
            }
        }, {
            path: "/not-found",
            component: hn,
            meta: {
                layout: b0,
                title: "Not Found - Accupay Vue App"
            }
        }, {
            path: "/:pathMatch(.*)*",
            component: hn,
            meta: {
                layout: b0,
                title: "Not Found - Accupay Vue App"
            }
        }]
    });
Ml.beforeEach(e => {
    e.meta && typeof e.meta.title == "string" ? document.title = e.meta.title : document.title = "Default Title", window.scrollTo(0, 0)
});
const Ka = bo(ik);
Ka.use(Ml);
Ka.use(ok());
Ka.mount("#app");
