!
        function a(h, i, j) {
            function k(b, c) {
                if (!i[b]) {
                    if (!h[b]) {
                        var d = "function" == typeof require && require;
                        if (!c && d) {
                            return d(b, !0)
                        }
                        if (l) {
                            return l(b, !0)
                        }
                        var e = new Error("Cannot find module '" + b + "'");
                        throw e.code = "MODULE_NOT_FOUND",
                                e
                    }
                    var f = i[b] = {
                        exports: {}
                    };
                    h[b][0].call(f.exports,
                            function (g) {
                                var n = h[b][1][g];
                                return k(n ? n : g)
                            },
                            f, f.exports, a, h, i, j)
                }
                return i[b].exports
            }
            for (var l = "function" == typeof require && require,
                    m = 0; m < j.length; m++) {
                k(j[m])
            }
            return k
        }({
    1: [function (d, e, f) {
            (function (b) {
                (function () {
                    function ah(g) {
                        if (Array.isArray(g)) {
                            for (var h = 0,
                                    i = Array(g.length); h < g.length; h++) {
                                i[h] = g[h]
                            }
                            return i
                        }
                        return Array.from(g)
                    }
                    function ak(g, h) {
                        var i = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2];
                        this.obs = g,
                                this.sync = h,
                                this.lazy = i,
                                this.queue = []
                    }
                    function an() {
                        ak.apply(this, arguments)
                    }
                    function aq(c) {
                        ak.call(this, c, !0)
                    }
                    function au(g, h, i) {
                        this.context = g,
                                this.method = h,
                                this.args = i
                    }
                    function ax(c) {
                        this.value = c
                    }
                    function aA() {
                        this.id = ++am
                    }
                    function aD(c, g) {
                        return this instanceof aD ? (aA.call(this), void(!g && aN.isFunction(c) || (null != c ? c._isNext : void 0) ? (this.valueF = c, this.valueInternal = void 0) : (this.valueF = void 0, this.valueInternal = c))) : new aD(c, g)
                    }
                    function aG(c, g) {
                        return this instanceof aG ? void aD.call(this, c, g) : new aG(c, g)
                    }
                    function aJ() {
                        return this instanceof aJ ? void aA.call(this) : new aJ
                    }
                    function aM(c) {
                        return this instanceof aM ? (this.error = c, void aA.call(this)) : new aM(c)
                    }
                    function aP(c) {
                        this.desc = c,
                                this.id = ++aC,
                                this.initialDesc = this.desc
                    }
                    function aS() {
                        var g = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0];
                        this.unsubscribe = aN.bind(this.unsubscribe, this),
                                this.unsubscribed = !1,
                                this.subscriptions = [],
                                this.starting = [];
                        for (var h, i = 0; i < g.length; i++) {
                            h = g[i],
                                    this.add(h)
                        }
                    }
                    function aV(c, g) {
                        this._subscribe = c,
                                this._handleEvent = g,
                                this.subscribe = aN.bind(this.subscribe, this),
                                this.handleEvent = aN.bind(this.handleEvent, this),
                                this.pushing = !1,
                                this.ended = !1,
                                this.prevError = void 0,
                                this.unsubSrc = void 0,
                                this.subscriptions = [],
                                this.queue = []
                    }
                    function aY(g, h, i) {
                        return this instanceof aY ? (aN.isFunction(g) && (i = h, h = g, g = au.empty), aP.call(this, g), ar(h), this.dispatcher = new aV(h, i), void aF(this)) : new aY(g, h, i)
                    }
                    function a1(g, h, i) {
                        aV.call(this, h, i),
                                this.property = g,
                                this.subscribe = aN.bind(this.subscribe, this),
                                this.current = ag,
                                this.currentValueRootId = void 0,
                                this.propertyEnded = !1
                    }
                    function a4(g, h, i) {
                        aP.call(this, g),
                                ar(h),
                                this.dispatcher = new a1(this, h, i),
                                aF(this)
                    }
                    function a7() {
                        return this instanceof a7 ? (this.unsubAll = aN.bind(this.unsubAll, this), this.subscribeAll = aN.bind(this.subscribeAll, this), this.guardedSink = aN.bind(this.guardedSink, this), this.sink = void 0, this.subscriptions = [], this.ended = !1, void aY.call(this, new bh.Desc(bh, "Bus", []), this.subscribeAll)) : new a7
                    }
                    function bb(c) {
                        return [c, aw()]
                    }
                    var be = Array.prototype.slice,
                            bh = {
                                toString: function () {
                                    return "Bacon"
                                }
                            };
                    bh.version = "0.7.82";
                    var bk = ("undefined" != typeof b && null !== b ? b : this).Error,
                            bn = function () {},
                            bp = function (c, g) {
                                return c
                            },
                            ad = function (c) {
                                return c.slice(0)
                            },
                            af = function (c, g) {
                                if (!g) {
                                    throw new bk(c)
                                }
                            },
                            ai = function (c) {
                                if ((null != c ? c._isObservable : void 0) && !(null != c ? c._isProperty : void 0)) {
                                    throw new bk("Observable is not a Property : " + c)
                                }
                            },
                            al = function (c) {
                                if (!(null != c ? c._isEventStream : void 0)) {
                                    throw new bk("not an EventStream : " + c)
                                }
                            },
                            ao = function (c) {
                                if (!(null != c ? c._isObservable : void 0)) {
                                    throw new bk("not an Observable : " + c)
                                }
                            },
                            ar = function (c) {
                                return af("not a function : " + c, aN.isFunction(c))
                            },
                            av = function (c) {
                                return c instanceof Array
                            },
                            ay = function (c) {
                                return c && c._isObservable
                            },
                            aB = function (c) {
                                if (!av(c)) {
                                    throw new bk("not an array : " + c)
                                }
                            },
                            aE = function (c) {
                                return af("no arguments supported", 0 === c.length)
                            },
                            aH = function (g) {
                                for (var h = arguments.length,
                                        i = 1; h > 1 ? h > i : i > h; h > 1 ? i++ : i--) {
                                    for (var j in arguments[i]) {
                                        g[j] = arguments[i][j]
                                    }
                                }
                                return g
                            },
                            aK = function (g, h) {
                                var i = {}.hasOwnProperty,
                                        j = function () {};
                                j.prototype = h.prototype,
                                        g.prototype = new j;
                                for (var k in h) {
                                    i.call(h, k) && (g[k] = h[k])
                                }
                                return g
                            },
                            aN = {
                                indexOf: function () {
                                    return Array.prototype.indexOf ?
                                            function (c, g) {
                                                return c.indexOf(g)
                                            } : function (g, h) {
                                        for (var i, j = 0; j < g.length; j++) {
                                            if (i = g[j], h === i) {
                                                return j
                                            }
                                        }
                                        return -1
                                    }
                                }(),
                                indexWhere: function (g, h) {
                                    for (var i, j = 0; j < g.length; j++) {
                                        if (i = g[j], h(i)) {
                                            return j
                                        }
                                    }
                                    return -1
                                },
                                head: function (c) {
                                    return c[0]
                                },
                                always: function (c) {
                                    return function () {
                                        return c
                                    }
                                },
                                negate: function (c) {
                                    return function (g) {
                                        return !c(g)
                                    }
                                },
                                empty: function (c) {
                                    return 0 === c.length
                                },
                                tail: function (c) {
                                    return c.slice(1, c.length)
                                },
                                filter: function (g, h) {
                                    for (var i, j = [], k = 0; k < h.length; k++) {
                                        i = h[k],
                                                g(i) && j.push(i)
                                    }
                                    return j
                                },
                                map: function (c, g) {
                                    return function () {
                                        for (var h, i = [], j = 0; j < g.length; j++) {
                                            h = g[j],
                                                    i.push(c(h))
                                        }
                                        return i
                                    }()
                                },
                                each: function (g, h) {
                                    for (var i in g) {
                                        if (Object.prototype.hasOwnProperty.call(g, i)) {
                                            var j = g[i];
                                            h(i, j)
                                        }
                                    }
                                },
                                toArray: function (c) {
                                    return av(c) ? c : [c]
                                },
                                contains: function (c, g) {
                                    return -1 !== aN.indexOf(c, g)
                                },
                                id: function (c) {
                                    return c
                                },
                                last: function (c) {
                                    return c[c.length - 1]
                                },
                                all: function (g) {
                                    for (var h, i = arguments.length <= 1 || void 0 === arguments[1] ? aN.id : arguments[1], j = 0; j < g.length; j++) {
                                        if (h = g[j], !i(h)) {
                                            return !1
                                        }
                                    }
                                    return !0
                                },
                                any: function (g) {
                                    for (var h, i = arguments.length <= 1 || void 0 === arguments[1] ? aN.id : arguments[1], j = 0; j < g.length; j++) {
                                        if (h = g[j], i(h)) {
                                            return !0
                                        }
                                    }
                                    return !1
                                },
                                without: function (c, g) {
                                    return aN.filter(function (h) {
                                        return h !== c
                                    },
                                            g)
                                },
                                remove: function (g, h) {
                                    var i = aN.indexOf(h, g);
                                    return i >= 0 ? h.splice(i, 1) : void 0
                                },
                                fold: function (g, h, i) {
                                    for (var j, k = 0; k < g.length; k++) {
                                        j = g[k],
                                                h = i(h, j)
                                    }
                                    return h
                                },
                                flatMap: function (c, g) {
                                    return aN.fold(g, [],
                                            function (h, i) {
                                                return h.concat(c(i))
                                            })
                                },
                                cached: function (c) {
                                    var g = ag;
                                    return function () {
                                        return ("undefined" != typeof g && null !== g ? g._isNone : void 0) && (g = c(), c = void 0),
                                                g
                                    }
                                },
                                bind: function (c, g) {
                                    return function () {
                                        return c.apply(g, arguments)
                                    }
                                },
                                isFunction: function (c) {
                                    return "function" == typeof c
                                },
                                toString: function (g) {
                                    var h, i, j, k = {}.hasOwnProperty;
                                    try {
                                        return aQ++,
                                                null == g ? "undefined" : aN.isFunction(g) ? "function" : av(g) ? aQ > 5 ? "[..]" : "[" + aN.map(aN.toString, g).toString() + "]": null != (null != g ? g.toString : void 0) && g.toString !== Object.prototype.toString ? g.toString() : "object" == typeof g ? aQ > 5 ? "{..}" : (h = function () {
                                            var c = [];
                                            for (i in g) {
                                                k.call(g, i) && (j = function () {
                                                    var l;
                                                    try {
                                                        return g[i]
                                                    } catch (l) {
                                                        return l
                                                    }
                                                }(), c.push(aN.toString(i) + ":" + aN.toString(j)))
                                            }
                                            return c
                                        }(), "{" + h + "}") : g
                                    } finally {
                                        aQ--
                                    }
                                }
                            },
                            aQ = 0;
                    bh._ = aN;
                    var aT = bh.UpdateBarrier = function () {
                        var p, q = [],
                                r = {},
                                s = [],
                                t = 0,
                                u = {},
                                v = function (c) {
                                    return p ? s.push(c) : c()
                                },
                                w = function (c, g) {
                                    if (p) {
                                        var h = r[c.id];
                                        return "undefined" == typeof h || null === h ? (h = r[c.id] = [g], q.push(c)) : h.push(g)
                                    }
                                    return g()
                                },
                                x = function () {
                                    for (; q.length > 0; ) {
                                        y(0, !0)
                                    }
                                    u = {}
                                },
                                y = function (c, j) {
                                    var k = q[c],
                                            l = k.id,
                                            m = r[l];
                                    q.splice(c, 1),
                                            delete r[l],
                                            j && q.length > 0 && z(k);
                                    for (var n, o = 0; o < m.length; o++) {
                                        (n = m[o])()
                                    }
                                },
                                z = function (c) {
                                    if (!u[c.id]) {
                                        for (var i, j = c.internalDeps(), k = 0; k < j.length; k++) {
                                            if (i = j[k], z(i), r[i.id]) {
                                                var l = aN.indexOf(q, i);
                                                y(l, !1)
                                            }
                                        }
                                        u[c.id] = !0
                                    }
                                },
                                A = function (i, k, l, m) {
                                    if (p) {
                                        return l.apply(k, m)
                                    }
                                    p = i;
                                    try {
                                        var n = l.apply(k, m);
                                        x()
                                    } finally {
                                        for (p = void 0; t < s.length; ) {
                                            var o = s[t];
                                            t++,
                                                    o()
                                        }
                                        t = 0,
                                                s = []
                                    }
                                    return n
                                },
                                B = function () {
                                    return p ? p.id : void 0
                                },
                                C = function (g, h) {
                                    var i = !1,
                                            j = !1,
                                            k = function () {
                                                return j = !0
                                            },
                                            l = function () {
                                                return i = !0,
                                                        k()
                                            };
                                    return k = g.dispatcher.subscribe(function (c) {
                                        return v(function () {
                                            if (!i) {
                                                var m = h(c);
                                                if (m === bh.noMore) {
                                                    return l()
                                                }
                                            }
                                        })
                                    }),
                                            j && k(),
                                            l
                                },
                                D = function () {
                                    return q.length > 0
                                };
                        return {
                            whenDoneWith: w,
                            hasWaiters: D,
                            inTransaction: A,
                            currentEventId: B,
                            wrappedSubscribe: C,
                            afterTransaction: v
                        }
                    }();
                    aH(ak.prototype, {
                        _isSource: !0,
                        subscribe: function (c) {
                            return this.obs.dispatcher.subscribe(c)
                        },
                        toString: function () {
                            return this.obs.toString()
                        },
                        markEnded: function () {
                            return this.ended = !0,
                                    !0
                        },
                        consume: function () {
                            return this.lazy ? {
                                value: aN.always(this.queue[0])
                            } : this.queue[0]
                        },
                        push: function (c) {
                            return this.queue = [c],
                                    [c]
                        },
                        mayHave: function () {
                            return !0
                        },
                        hasAtLeast: function () {
                            return this.queue.length
                        },
                        flatten: !0
                    }),
                            aK(an, ak),
                            aH(an.prototype, {
                                consume: function () {
                                    return this.queue.shift()
                                },
                                push: function (c) {
                                    return this.queue.push(c)
                                },
                                mayHave: function (c) {
                                    return !this.ended || this.queue.length >= c
                                },
                                hasAtLeast: function (c) {
                                    return this.queue.length >= c
                                },
                                flatten: !1
                            }),
                            aK(aq, ak),
                            aH(aq.prototype, {
                                consume: function () {
                                    var c = this.queue;
                                    return this.queue = [],
                                            {
                                                value: function () {
                                                    return c
                                                }
                                            }
                                },
                                push: function (c) {
                                    return this.queue.push(c.value())
                                },
                                hasAtLeast: function () {
                                    return !0
                                }
                            }),
                            ak.isTrigger = function (c) {
                                return (null != c ? c._isSource : void 0) ? c.sync : null != c ? c._isEventStream : void 0
                            },
                            ak.fromObservable = function (c) {
                                return (null != c ? c._isSource : void 0) ? c: (null != c ? c._isProperty : void 0) ? new ak(c, !1) : new an(c, !0)
                            },
                            aH(au.prototype, {
                                _isDesc: !0,
                                deps: function () {
                                    return this.cached || (this.cached = a2([this.context].concat(this.args))),
                                            this.cached
                                },
                                toString: function () {
                                    return aN.toString(this.context) + "." + aN.toString(this.method) + "(" + aN.map(aN.toString, this.args) + ")"
                                }
                            });
                    var aW = function (g, h) {
                        var i = g || h;
                        if (i && i._isDesc) {
                            return g || h
                        }
                        for (var j = arguments.length,
                                k = Array(j > 2 ? j - 2 : 0), l = 2; j > l; l++) {
                            k[l - 2] = arguments[l]
                        }
                        return new au(g, h, k)
                    },
                            aZ = function (c, g) {
                                return g.desc = c,
                                        g
                            },
                            a2 = function (c) {
                                return av(c) ? aN.flatMap(a2, c) : ay(c) ? [c] : ("undefined" != typeof c && null !== c ? c._isSource : void 0) ? [c.obs] : []
                            };
                    bh.Desc = au,
                            bh.Desc.empty = new bh.Desc("", "", []);
                    var a5 = function (c) {
                        return function (i) {
                            for (var j = arguments.length,
                                    k = Array(j > 1 ? j - 1 : 0), l = 1; j > l; l++) {
                                k[l - 1] = arguments[l]
                            }
                            if ("object" == typeof i && k.length) {
                                var m = i,
                                        n = k[0];
                                i = function () {
                                    return m[n].apply(m, arguments)
                                },
                                        k = k.slice(1)
                            }
                            return c.apply(void 0, [i].concat(ah(k)))
                        }
                    },
                            a8 = function (c) {
                                return c = Array.prototype.slice.call(c),
                                        bo.apply(void 0, ah(c))
                            },
                            bc = function (c, g) {
                                return function () {
                                    for (var h = arguments.length,
                                            i = Array(h), j = 0; h > j; j++) {
                                        i[j] = arguments[j]
                                    }
                                    return c.apply(void 0, ah(g.concat(i)))
                                }
                            },
                            bf = function (c) {
                                return function (g) {
                                    return function (h) {
                                        if ("undefined" != typeof h && null !== h) {
                                            var i = h[g];
                                            return aN.isFunction(i) ? i.apply(h, c) : i
                                        }
                                    }
                                }
                            },
                            bi = function (g, h) {
                                var i = g.slice(1).split("."),
                                        j = aN.map(bf(h), i);
                                return function (k) {
                                    for (var l, m = 0; m < j.length; m++) {
                                        l = j[m],
                                                k = l(k)
                                    }
                                    return k
                                }
                            },
                            bl = function (c) {
                                return "string" == typeof c && c.length > 1 && "." === c.charAt(0)
                            },
                            bo = a5(function (g) {
                                for (var h = arguments.length,
                                        i = Array(h > 1 ? h - 1 : 0), j = 1; h > j; j++) {
                                    i[j - 1] = arguments[j]
                                }
                                return aN.isFunction(g) ? i.length ? bc(g, i) : g : bl(g) ? bi(g, i) : aN.always(g)
                            }),
                            bq = function (c, g) {
                                return bo.apply(void 0, [c].concat(ah(g)))
                            },
                            ab = function (g, h, i, j) {
                                if ("undefined" != typeof h && null !== h ? h._isProperty : void 0) {
                                    var k = h.sampledBy(g,
                                            function (c, l) {
                                                return [c, l]
                                            });
                                    return j.call(k,
                                            function (c) {
                                                var l = c[0];
                                                c[1];
                                                return l
                                            }).map(function (c) {
                                        var l = (c[0], c[1]);
                                        return l
                                    })
                                }
                                return h = bq(h, i),
                                        j.call(g, h)
                            },
                            ac = function (c) {
                                if (aN.isFunction(c)) {
                                    return c
                                }
                                if (bl(c)) {
                                    var g = ae(c);
                                    return function (h, i) {
                                        return h[g](i)
                                    }
                                }
                                throw new bk("not a function or a field key: " + c)
                            },
                            ae = function (c) {
                                return c.slice(1)
                            };
                    aH(ax.prototype, {
                        _isSome: !0,
                        getOrElse: function () {
                            return this.value
                        },
                        get: function () {
                            return this.value
                        },
                        filter: function (c) {
                            return c(this.value) ? new ax(this.value) : ag
                        },
                        map: function (c) {
                            return new ax(c(this.value))
                        },
                        forEach: function (c) {
                            return c(this.value)
                        },
                        isDefined: !0,
                        toArray: function () {
                            return [this.value]
                        },
                        inspect: function () {
                            return "Some(" + this.value + ")"
                        },
                        toString: function () {
                            return this.inspect()
                        }
                    });
                    var ag = {
                        _isNone: !0,
                        getOrElse: function (c) {
                            return c
                        },
                        filter: function () {
                            return ag
                        },
                        map: function () {
                            return ag
                        },
                        forEach: function () {},
                        isDefined: !1,
                        toArray: function () {
                            return []
                        },
                        inspect: function () {
                            return "None"
                        },
                        toString: function () {
                            return this.inspect()
                        }
                    },
                            aj = function (c) {
                                return ("undefined" != typeof c && null !== c ? c._isSome : void 0) || ("undefined" != typeof c && null !== c ? c._isNone : void 0) ? c : new ax(c)
                            };
                    bh.noMore = "<no-more>",
                            bh.more = "<more>";
                    var am = 0;
                    aA.prototype._isEvent = !0,
                            aA.prototype.isEvent = function () {
                                return !0
                            },
                            aA.prototype.isEnd = function () {
                                return !1
                            },
                            aA.prototype.isInitial = function () {
                                return !1
                            },
                            aA.prototype.isNext = function () {
                                return !1
                            },
                            aA.prototype.isError = function () {
                                return !1
                            },
                            aA.prototype.hasValue = function () {
                                return !1
                            },
                            aA.prototype.filter = function () {
                                return !0
                            },
                            aA.prototype.inspect = function () {
                                return this.toString()
                            },
                            aA.prototype.log = function () {
                                return this.toString()
                            },
                            aK(aD, aA),
                            aD.prototype.isNext = function () {
                                return !0
                            },
                            aD.prototype.hasValue = function () {
                                return !0
                            },
                            aD.prototype.value = function () {
                                var c;
                                return (null != (c = this.valueF) ? c._isNext : void 0) ? (this.valueInternal = this.valueF.value(), this.valueF = void 0) : this.valueF && (this.valueInternal = this.valueF(), this.valueF = void 0),
                                        this.valueInternal
                            },
                            aD.prototype.fmap = function (g) {
                                var h, i;
                                return this.valueInternal ? (i = this.valueInternal, this.apply(function () {
                                    return g(i)
                                })) : (h = this, this.apply(function () {
                                    return g(h.value())
                                }))
                            },
                            aD.prototype.apply = function (c) {
                                return new aD(c)
                            },
                            aD.prototype.filter = function (c) {
                                return c(this.value())
                            },
                            aD.prototype.toString = function () {
                                return aN.toString(this.value())
                            },
                            aD.prototype.log = function () {
                                return this.value()
                            },
                            aD.prototype._isNext = !0,
                            aK(aG, aD),
                            aG.prototype._isInitial = !0,
                            aG.prototype.isInitial = function () {
                                return !0
                            },
                            aG.prototype.isNext = function () {
                                return !1
                            },
                            aG.prototype.apply = function (c) {
                                return new aG(c)
                            },
                            aG.prototype.toNext = function () {
                                return new aD(this)
                            },
                            aK(aJ, aA),
                            aJ.prototype.isEnd = function () {
                                return !0
                            },
                            aJ.prototype.fmap = function () {
                                return this
                            },
                            aJ.prototype.apply = function () {
                                return this
                            },
                            aJ.prototype.toString = function () {
                                return "<end>"
                            },
                            aK(aM, aA),
                            aM.prototype.isError = function () {
                                return !0
                            },
                            aM.prototype.fmap = function () {
                                return this
                            },
                            aM.prototype.apply = function () {
                                return this
                            },
                            aM.prototype.toString = function () {
                                return "<error> " + aN.toString(this.error)
                            },
                            bh.Event = aA,
                            bh.Initial = aG,
                            bh.Next = aD,
                            bh.End = aJ,
                            bh.Error = aM;
                    var ap = function (c) {
                        return new aG(c, !0)
                    },
                            at = function (c) {
                                return new aD(c, !0)
                            },
                            aw = function () {
                                return new aJ
                            },
                            az = function (c) {
                                return c && c._isEvent ? c : at(c)
                            },
                            aC = 0,
                            aF = function () {};
                    aH(aP.prototype, {
                        _isObservable: !0,
                        subscribe: function (c) {
                            return aT.wrappedSubscribe(this, c)
                        },
                        subscribeInternal: function (c) {
                            return this.dispatcher.subscribe(c)
                        },
                        onValue: function () {
                            var c = a8(arguments);
                            return this.subscribe(function (g) {
                                return g.hasValue() ? c(g.value()) : void 0
                            })
                        },
                        onValues: function (c) {
                            return this.onValue(function (g) {
                                return c.apply(void 0, ah(g))
                            })
                        },
                        onError: function () {
                            var c = a8(arguments);
                            return this.subscribe(function (g) {
                                return g.isError() ? c(g.error) : void 0
                            })
                        },
                        onEnd: function () {
                            var c = a8(arguments);
                            return this.subscribe(function (g) {
                                return g.isEnd() ? c() : void 0
                            })
                        },
                        name: function (c) {
                            return this._name = c,
                                    this
                        },
                        withDescription: function () {
                            return this.desc = aW.apply(void 0, arguments),
                                    this
                        },
                        toString: function () {
                            return this._name ? this._name : this.desc.toString()
                        },
                        internalDeps: function () {
                            return this.initialDesc.deps()
                        }
                    }),
                            aP.prototype.assign = aP.prototype.onValue,
                            aP.prototype.forEach = aP.prototype.onValue,
                            aP.prototype.inspect = aP.prototype.toString,
                            bh.Observable = aP,
                            aH(aS.prototype, {
                                add: function (g) {
                                    var h = this;
                                    if (!this.unsubscribed) {
                                        var i = !1,
                                                j = bn;
                                        this.starting.push(g);
                                        var k = function () {
                                            return h.unsubscribed ? void 0 : (i = !0, h.remove(j), aN.remove(g, h.starting))
                                        };
                                        return j = g(this.unsubscribe, k),
                                                this.unsubscribed || i ? j() : this.subscriptions.push(j),
                                                aN.remove(g, this.starting),
                                                j
                                    }
                                },
                                remove: function (c) {
                                    return this.unsubscribed ? void 0 : void 0 !== aN.remove(c, this.subscriptions) ? c() : void 0
                                },
                                unsubscribe: function () {
                                    if (!this.unsubscribed) {
                                        this.unsubscribed = !0;
                                        for (var c = this.subscriptions,
                                                g = 0; g < c.length; g++) {
                                            c[g]()
                                        }
                                        return this.subscriptions = [],
                                                this.starting = [],
                                                []
                                    }
                                },
                                count: function () {
                                    return this.unsubscribed ? 0 : this.subscriptions.length + this.starting.length
                                },
                                empty: function () {
                                    return 0 === this.count()
                                }
                            }),
                            bh.CompositeUnsubscribe = aS,
                            aV.prototype.hasSubscribers = function () {
                                return this.subscriptions.length > 0
                            },
                            aV.prototype.removeSub = function (c) {
                                return this.subscriptions = aN.without(c, this.subscriptions),
                                        this.subscriptions
                            },
                            aV.prototype.push = function (c) {
                                return c.isEnd() && (this.ended = !0),
                                        aT.inTransaction(c, this, this.pushIt, [c])
                            },
                            aV.prototype.pushToSubscriptions = function (h) {
                                try {
                                    for (var i = this.subscriptions,
                                            j = i.length,
                                            k = 0; j > k; k++) {
                                        var l = i[k],
                                                m = l.sink(h);
                                        (m === bh.noMore || h.isEnd()) && this.removeSub(l)
                                    }
                                    return !0
                                } catch (n) {
                                    throw this.pushing = !1,
                                            this.queue = [],
                                            n
                                }
                            },
                            aV.prototype.pushIt = function (c) {
                                if (this.pushing) {
                                    return this.queue.push(c),
                                            bh.more
                                }
                                if (c !== this.prevError) {
                                    for (c.isError() && (this.prevError = c), this.pushing = !0, this.pushToSubscriptions(c), this.pushing = !1; this.queue.length; ) {
                                        c = this.queue.shift(),
                                                this.push(c)
                                    }
                                    return this.hasSubscribers() ? bh.more : (this.unsubscribeFromSource(), bh.noMore)
                                }
                            },
                            aV.prototype.handleEvent = function (c) {
                                return this._handleEvent ? this._handleEvent(c) : this.push(c)
                            },
                            aV.prototype.unsubscribeFromSource = function () {
                                this.unsubSrc && this.unsubSrc(),
                                        this.unsubSrc = void 0
                            },
                            aV.prototype.subscribe = function (c) {
                                var g;
                                return this.ended ? (c(aw()), bn) : (ar(c), g = {
                                    sink: c
                                },
                                        this.subscriptions.push(g), 1 === this.subscriptions.length && (this.unsubSrc = this._subscribe(this.handleEvent), ar(this.unsubSrc)),
                                        function (h) {
                                            return function () {
                                                return h.removeSub(g),
                                                        h.hasSubscribers() ? void 0 : h.unsubscribeFromSource()
                                            }
                                        }(this))
                            },
                            bh.Dispatcher = aV,
                            aK(aY, aP),
                            aH(aY.prototype, {
                                _isEventStream: !0,
                                toProperty: function (g) {
                                    var h = 0 === arguments.length ? ag : aj(function () {
                                        return g
                                    }),
                                            i = this.dispatcher,
                                            j = new bh.Desc(this, "toProperty", [g]);
                                    return new a4(j,
                                            function (c) {
                                                var k = !1,
                                                        l = !1,
                                                        m = bn,
                                                        n = bh.more,
                                                        o = function () {
                                                            return k ? void 0 : h.forEach(function (p) {
                                                                return k = !0,
                                                                        n = c(new aG(p)),
                                                                        n === bh.noMore ? (m(), m = bn, bn) : void 0
                                                            })
                                                        };
                                                return m = i.subscribe(function (p) {
                                                    return p.hasValue() ? p.isInitial() && !l ? (h = new ax(function () {
                                                        return p.value()
                                                    }), bh.more) : (p.isInitial() || o(), k = !0, h = new ax(p), c(p)) : (p.isEnd() && (n = o()), n !== bh.noMore ? c(p) : void 0)
                                                }),
                                                        l = !0,
                                                        o(),
                                                        m
                                            })
                                },
                                toEventStream: function () {
                                    return this
                                },
                                withHandler: function (c) {
                                    return new aY(new bh.Desc(this, "withHandler", [c]), this.dispatcher.subscribe, c)
                                }
                            }),
                            bh.EventStream = aY,
                            bh.never = function () {
                                return new aY(aW(bh, "never"),
                                        function (c) {
                                            return c(aw()),
                                                    bn
                                        })
                            },
                            bh.when = function () {
                                if (0 === arguments.length) {
                                    return bh.never()
                                }
                                var c = arguments.length,
                                        q = "when: expecting arguments in the form (Observable+,function)+";
                                af(q, c % 2 === 0);
                                for (var v = [], w = [], x = 0, y = []; c > x; ) {
                                    y[x] = arguments[x],
                                            y[x + 1] = arguments[x + 1];
                                    for (var z, A = aN.toArray(arguments[x]), B = aL(arguments[x + 1]), C = {
                                        f: B,
                                        ixs: []
                                    },
                                            D = !1, E = 0; E < A.length; E++) {
                                        z = A[E];
                                        var F = aN.indexOf(v, z);
                                        D || (D = ak.isTrigger(z)),
                                                0 > F && (v.push(z), F = v.length - 1);
                                        for (var G, H = 0; H < C.ixs.length; H++) {
                                            G = C.ixs[H],
                                                    G.index === F && G.count++
                                        }
                                        C.ixs.push({
                                            index: F,
                                            count: 1
                                        })
                                    }
                                    af("At least one EventStream required", D || !A.length),
                                            A.length > 0 && w.push(C),
                                            x += 2
                                }
                                if (!v.length) {
                                    return bh.never()
                                }
                                v = aN.map(ak.fromObservable, v);
                                var I = aN.any(v,
                                        function (g) {
                                            return g.flatten
                                        }) && aI(aN.map(function (g) {
                                    return g.obs
                                },
                                        v)),
                                        J = new bh.Desc(bh, "when", y),
                                        K = new aY(J,
                                                function (l) {
                                                    var m = [],
                                                            n = !1,
                                                            o = function (g) {
                                                                for (var h, i = 0; i < g.ixs.length; i++) {
                                                                    if (h = g.ixs[i], !v[h.index].hasAtLeast(h.count)) {
                                                                        return !1
                                                                    }
                                                                }
                                                                return !0
                                                            },
                                                            p = function (g) {
                                                                return !g.sync || g.ended
                                                            },
                                                            r = function (g) {
                                                                for (var h, i = 0; i < g.ixs.length; i++) {
                                                                    if (h = g.ixs[i], !v[h.index].mayHave(h.count)) {
                                                                        return !0
                                                                    }
                                                                }
                                                            },
                                                            s = function (g) {
                                                                return !g.source.flatten
                                                            },
                                                            t = function (g) {
                                                                return function (h) {
                                                                    var i = function () {
                                                                        return aT.whenDoneWith(K, k)
                                                                    },
                                                                            j = function () {
                                                                                if (!(m.length > 0)) {
                                                                                    return bh.more
                                                                                }
                                                                                for (var u, L = bh.more,
                                                                                        M = m.pop(), N = 0; N < w.length; N++) {
                                                                                    if (u = w[N], o(u)) {
                                                                                        var O = function () {
                                                                                            for (var P, Q = [], R = 0; R < u.ixs.length; R++) {
                                                                                                P = u.ixs[R],
                                                                                                        Q.push(v[P.index].consume())
                                                                                            }
                                                                                            return Q
                                                                                        }();
                                                                                        return L = l(M.e.apply(function () {
                                                                                            var P, Q = function () {
                                                                                                for (var R, S = [], T = 0; T < O.length; T++) {
                                                                                                    R = O[T],
                                                                                                            S.push(R.value())
                                                                                                }
                                                                                                return S
                                                                                            }();
                                                                                            return (P = u).f.apply(P, ah(Q))
                                                                                        })),
                                                                                                m.length && (m = aN.filter(s, m)),
                                                                                                L === bh.noMore ? L : j()
                                                                                    }
                                                                                }
                                                                            },
                                                                            k = function () {
                                                                                var u = j();
                                                                                return n && (aN.all(v, p) || aN.all(w, r)) && (u = bh.noMore, l(aw())),
                                                                                        u === bh.noMore && h(),
                                                                                        u
                                                                            };
                                                                    return g.subscribe(function (u) {
                                                                        if (u.isEnd()) {
                                                                            n = !0,
                                                                                    g.markEnded(),
                                                                                    i()
                                                                        } else {
                                                                            if (u.isError()) {
                                                                                var L = l(u)
                                                                            } else {
                                                                                g.push(u),
                                                                                        g.sync && (m.push({
                                                                                            source: g,
                                                                                            e: u
                                                                                        }), I || aT.hasWaiters() ? i() : k())
                                                                            }
                                                                        }
                                                                        return L === bh.noMore && h(),
                                                                                L || bh.more
                                                                    })
                                                                }
                                                            };
                                                    return new bh.CompositeUnsubscribe(function () {
                                                        for (var g, h = [], i = 0; i < v.length; i++) {
                                                            g = v[i],
                                                                    h.push(t(g))
                                                        }
                                                        return h
                                                    }()).unsubscribe
                                                });
                                return K
                            };
                    var aI = function (g) {
                        var h = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1],
                                i = function (c) {
                                    if (aN.contains(h, c)) {
                                        return !0
                                    }
                                    var j = c.internalDeps();
                                    return j.length ? (h.push(c), aN.any(j, i)) : (h.push(c), !1)
                                };
                        return aN.any(g, i)
                    },
                            aL = function (c) {
                                return aN.isFunction(c) ? c : aN.always(c)
                            };
                    bh.groupSimultaneous = function () {
                        for (var g = arguments.length,
                                h = Array(g), i = 0; g > i; i++) {
                            h[i] = arguments[i]
                        }
                        1 === h.length && av(h[0]) && (h = h[0]);
                        var j = function () {
                            for (var k, l = [], m = 0; m < h.length; m++) {
                                k = h[m],
                                        l.push(new aq(k))
                            }
                            return l
                        }();
                        return aZ(new bh.Desc(bh, "groupSimultaneous", h), bh.when(j,
                                function () {
                                    for (var k = arguments.length,
                                            l = Array(k), m = 0; k > m; m++) {
                                        l[m] = arguments[m]
                                    }
                                    return l
                                }))
                    },
                            aK(a1, aV),
                            aH(a1.prototype, {
                                push: function (c) {
                                    return c.isEnd() && (this.propertyEnded = !0),
                                            c.hasValue() && (this.current = new ax(c), this.currentValueRootId = aT.currentEventId()),
                                            aV.prototype.push.call(this, c)
                                },
                                maybeSubSource: function (c, g) {
                                    return g === bh.noMore ? bn : this.propertyEnded ? (c(aw()), bn) : aV.prototype.subscribe.call(this, c)
                                },
                                subscribe: function (g) {
                                    var h = this,
                                            i = bh.more;
                                    if (this.current.isDefined && (this.hasSubscribers() || this.propertyEnded)) {
                                        var j = aT.currentEventId(),
                                                k = this.currentValueRootId;
                                        return !this.propertyEnded && k && j && j !== k ? (aT.whenDoneWith(this.property,
                                                function () {
                                                    return h.currentValueRootId === k ? g(ap(h.current.get().value())) : void 0
                                                }), this.maybeSubSource(g, i)) : (aT.inTransaction(void 0, this,
                                                function () {
                                                    return i = g(ap(this.current.get().value()))
                                                },
                                                []), this.maybeSubSource(g, i))
                                    }
                                    return this.maybeSubSource(g, i)
                                }
                            }),
                            aK(a4, aP),
                            aH(a4.prototype, {
                                _isProperty: !0,
                                changes: function () {
                                    var c = this;
                                    return new aY(new bh.Desc(this, "changes", []),
                                            function (g) {
                                                return c.dispatcher.subscribe(function (h) {
                                                    return h.isInitial() ? void 0 : g(h)
                                                })
                                            })
                                },
                                withHandler: function (c) {
                                    return new a4(new bh.Desc(this, "withHandler", [c]), this.dispatcher.subscribe, c)
                                },
                                toProperty: function () {
                                    return aE(arguments),
                                            this
                                },
                                toEventStream: function () {
                                    var c = this;
                                    return new aY(new bh.Desc(this, "toEventStream", []),
                                            function (g) {
                                                return c.dispatcher.subscribe(function (h) {
                                                    return h.isInitial() && (h = h.toNext()),
                                                            g(h)
                                                })
                                            })
                                }
                            }),
                            bh.Property = a4,
                            bh.constant = function (c) {
                                return new a4(new bh.Desc(bh, "constant", [c]),
                                        function (g) {
                                            return g(ap(c)),
                                                    g(aw()),
                                                    bn
                                        })
                            },
                            bh.fromBinder = function (g) {
                                var h = arguments.length <= 1 || void 0 === arguments[1] ? aN.id : arguments[1],
                                        i = new bh.Desc(bh, "fromBinder", [g, h]);
                                return new aY(i,
                                        function (j) {
                                            var k = !1,
                                                    l = !1,
                                                    m = function () {
                                                        return k ? void 0 : "undefined" != typeof n && null !== n ? (n(), k = !0) : l = !0
                                                    },
                                                    n = g(function () {
                                                        for (var c, o = arguments.length,
                                                                p = Array(o), q = 0; o > q; q++) {
                                                            p[q] = arguments[q]
                                                        }
                                                        var r = h.apply(this, p);
                                                        av(r) && (null != (c = aN.last(r)) ? c._isEvent : void 0) || (r = [r]);
                                                        for (var s, t = bh.more,
                                                                u = 0; u < r.length; u++) {
                                                            if (s = r[u], t = j(s = az(s)), t === bh.noMore || s.isEnd()) {
                                                                return m(),
                                                                        t
                                                            }
                                                        }
                                                        return t
                                                    });
                                            return l && m(),
                                                    m
                                        })
                            },
                            bh.Observable.prototype.map = function (g) {
                                for (var h = arguments.length,
                                        i = Array(h > 1 ? h - 1 : 0), j = 1; h > j; j++) {
                                    i[j - 1] = arguments[j]
                                }
                                return ab(this, g, i,
                                        function (c) {
                                            return aZ(new bh.Desc(this, "map", [c]), this.withHandler(function (k) {
                                                return this.push(k.fmap(c))
                                            }))
                                        })
                            };
                    var aO = function (c) {
                        return av(c[0]) ? c[0] : Array.prototype.slice.call(c)
                    },
                            aR = function (c) {
                                return aN.isFunction(c[0]) ? [aO(Array.prototype.slice.call(c, 1)), c[0]] : [aO(Array.prototype.slice.call(c, 0, c.length - 1)), aN.last(c)]
                            };
                    bh.combineAsArray = function () {
                        for (var g, h = aO(arguments), i = 0; i < h.length; i++) {
                            g = h[i],
                                    ay(g) || (h[i] = bh.constant(g))
                        }
                        if (h.length) {
                            var j = function () {
                                for (var k, l = [], m = 0; m < h.length; m++) {
                                    k = h[m],
                                            l.push(new ak(k, !0))
                                }
                                return l
                            }();
                            return aZ(new bh.Desc(bh, "combineAsArray", h), bh.when(j,
                                    function () {
                                        for (var k = arguments.length,
                                                l = Array(k), m = 0; k > m; m++) {
                                            l[m] = arguments[m]
                                        }
                                        return l
                                    }).toProperty())
                        }
                        return bh.constant([])
                    },
                            bh.onValues = function () {
                                for (var g = arguments.length,
                                        h = Array(g), i = 0; g > i; i++) {
                                    h[i] = arguments[i]
                                }
                                return bh.combineAsArray(h.slice(0, h.length - 1)).onValues(h[h.length - 1])
                            },
                            bh.combineWith = function () {
                                var c = aR(arguments),
                                        g = c[0],
                                        h = c[1],
                                        i = new bh.Desc(bh, "combineWith", [h].concat(ah(g)));
                                return aZ(i, bh.combineAsArray(g).map(function (j) {
                                    return h.apply(void 0, ah(j))
                                }))
                            },
                            bh.Observable.prototype.combine = function (g, h) {
                                var i = ac(h),
                                        j = new bh.Desc(this, "combine", [g, h]);
                                return aZ(j, bh.combineAsArray(this, g).map(function (c) {
                                    return i(c[0], c[1])
                                }))
                            },
                            bh.Observable.prototype.withStateMachine = function (g, h) {
                                var i = g,
                                        j = new bh.Desc(this, "withStateMachine", [g, h]);
                                return aZ(j, this.withHandler(function (c) {
                                    var k = h(i, c),
                                            l = k[0],
                                            m = k[1];
                                    i = l;
                                    for (var n, o = bh.more,
                                            p = 0; p < m.length; p++) {
                                        if (n = m[p], o = this.push(n), o === bh.noMore) {
                                            return o
                                        }
                                    }
                                    return o
                                }))
                            };
                    var aU = function (c, g) {
                        return c === g
                    },
                            aX = function (c) {
                                return "undefined" != typeof c && null !== c ? c._isNone : !1
                            };
                    bh.Observable.prototype.skipDuplicates = function () {
                        var c = arguments.length <= 0 || void 0 === arguments[0] ? aU : arguments[0],
                                g = new bh.Desc(this, "skipDuplicates", []);
                        return aZ(g, this.withStateMachine(ag,
                                function (h, i) {
                                    return i.hasValue() ? i.isInitial() || aX(h) || !c(h.get(), i.value()) ? [new ax(i.value()), [i]] : [h, []] : [h, [i]]
                                }))
                    },
                            bh.Observable.prototype.awaiting = function (c) {
                                var g = new bh.Desc(this, "awaiting", [c]);
                                return aZ(g, bh.groupSimultaneous(this, c).map(function (h) {
                                    return 0 === h[1].length
                                }).toProperty(!1).skipDuplicates())
                            },
                            bh.Observable.prototype.not = function () {
                                return aZ(new bh.Desc(this, "not", []), this.map(function (c) {
                                    return !c
                                }))
                            },
                            bh.Property.prototype.and = function (c) {
                                return aZ(new bh.Desc(this, "and", [c]), this.combine(c,
                                        function (g, h) {
                                            return g && h
                                        }))
                            },
                            bh.Property.prototype.or = function (c) {
                                return aZ(new bh.Desc(this, "or", [c]), this.combine(c,
                                        function (g, h) {
                                            return g || h
                                        }))
                            },
                            bh.scheduler = {
                                setTimeout: function (c, g) {
                                    return setTimeout(c, g)
                                },
                                setInterval: function (c, g) {
                                    return setInterval(c, g)
                                },
                                clearInterval: function (c) {
                                    return clearInterval(c)
                                },
                                clearTimeout: function (c) {
                                    return clearTimeout(c)
                                },
                                now: function () {
                                    return (new Date).getTime()
                                }
                            },
                            bh.EventStream.prototype.bufferWithTime = function (c) {
                                return aZ(new bh.Desc(this, "bufferWithTime", [c]), this.bufferWithTimeOrCount(c, Number.MAX_VALUE))
                            },
                            bh.EventStream.prototype.bufferWithCount = function (c) {
                                return aZ(new bh.Desc(this, "bufferWithCount", [c]), this.bufferWithTimeOrCount(void 0, c))
                            },
                            bh.EventStream.prototype.bufferWithTimeOrCount = function (g, h) {
                                var i = function (k) {
                                    return k.values.length === h ? k.flush() : void 0 !== g ? k.schedule() : void 0
                                },
                                        j = new bh.Desc(this, "bufferWithTimeOrCount", [g, h]);
                                return aZ(j, this.buffer(g, i, i))
                            },
                            bh.EventStream.prototype.buffer = function (g) {
                                var h = arguments.length <= 1 || void 0 === arguments[1] ? bn : arguments[1],
                                        i = arguments.length <= 2 || void 0 === arguments[2] ? bn : arguments[2],
                                        j = {
                                            scheduled: null,
                                            end: void 0,
                                            values: [],
                                            flush: function () {
                                                if (this.scheduled && (bh.scheduler.clearTimeout(this.scheduled), this.scheduled = null), this.values.length > 0) {
                                                    var c = this.values;
                                                    this.values = [];
                                                    var m = this.push(at(c));
                                                    if (null != this.end) {
                                                        return this.push(this.end)
                                                    }
                                                    if (m !== bh.noMore) {
                                                        return i(this)
                                                    }
                                                } else {
                                                    if (null != this.end) {
                                                        return this.push(this.end)
                                                    }
                                                }
                                            },
                                            schedule: function () {
                                                var c = this;
                                                return this.scheduled ? void 0 : this.scheduled = g(function () {
                                                    return c.flush()
                                                })
                                            }
                                        },
                                        k = bh.more;
                                if (!aN.isFunction(g)) {
                                    var l = g;
                                    g = function (c) {
                                        return bh.scheduler.setTimeout(c, l)
                                    }
                                }
                                return aZ(new bh.Desc(this, "buffer", []), this.withHandler(function (m) {
                                    var n = this;
                                    return j.push = function (c) {
                                        return n.push(c)
                                    },
                                            m.isError() ? k = this.push(m) : m.isEnd() ? (j.end = m, j.scheduled || j.flush()) : (j.values.push(m.value()), h(j)),
                                            k
                                }))
                            },
                            bh.Observable.prototype.filter = function (g) {
                                ai(g);
                                for (var h = arguments.length,
                                        i = Array(h > 1 ? h - 1 : 0), j = 1; h > j; j++) {
                                    i[j - 1] = arguments[j]
                                }
                                return ab(this, g, i,
                                        function (c) {
                                            return aZ(new bh.Desc(this, "filter", [c]), this.withHandler(function (k) {
                                                return k.filter(c) ? this.push(k) : bh.more
                                            }))
                                        })
                            },
                            bh.once = function (c) {
                                return new aY(new au(bh, "once", [c]),
                                        function (g) {
                                            return g(az(c)),
                                                    g(aw()),
                                                    bn
                                        })
                            },
                            bh.EventStream.prototype.concat = function (c) {
                                var g = this;
                                return new aY(new bh.Desc(g, "concat", [c]),
                                        function (h) {
                                            var i = bn,
                                                    j = g.dispatcher.subscribe(function (k) {
                                                        return k.isEnd() ? i = c.dispatcher.subscribe(h) : h(k)
                                                    });
                                            return function () {
                                                return j(),
                                                        i()
                                            }
                                        })
                            },
                            bh.Observable.prototype.flatMap = function () {
                                return a6(this, a0(arguments))
                            },
                            bh.Observable.prototype.flatMapFirst = function () {
                                return a6(this, a0(arguments), !0)
                            };
                    var a0 = function (c) {
                        return 1 === c.length && ay(c[0]) ? aN.always(c[0]) : a8(c)
                    },
                            a3 = function (c) {
                                return ay(c) ? c : bh.once(c)
                            },
                            a6 = function (i, j, k, l) {
                                var m = [i],
                                        n = [],
                                        o = new bh.Desc(i, "flatMap" + (k ? "First" : ""), [j]),
                                        p = new aY(o,
                                                function (c) {
                                                    var q = new aS,
                                                            r = [],
                                                            s = function (g) {
                                                                var h = a3(j(g.value()));
                                                                return n.push(h),
                                                                        q.add(function (v, w) {
                                                                            return h.dispatcher.subscribe(function (x) {
                                                                                if (x.isEnd()) {
                                                                                    return aN.remove(h, n),
                                                                                            t(),
                                                                                            u(w),
                                                                                            bh.noMore
                                                                                }
                                                                                ("undefined" != typeof x && null !== x ? x._isInitial : void 0) && (x = x.toNext());
                                                                                var y = c(x);
                                                                                return y === bh.noMore && v(),
                                                                                        y
                                                                            })
                                                                        })
                                                            },
                                                            t = function () {
                                                                var g = r.shift();
                                                                return g ? s(g) : void 0
                                                            },
                                                            u = function (g) {
                                                                return g(),
                                                                        q.empty() ? c(aw()) : void 0
                                                            };
                                                    return q.add(function (g, h) {
                                                        return i.dispatcher.subscribe(function (v) {
                                                            return v.isEnd() ? u(h) : v.isError() ? c(v) : k && q.count() > 1 ? bh.more : q.unsubscribed ? bh.noMore : l && q.count() > l ? r.push(v) : s(v)
                                                        })
                                                    }),
                                                            q.unsubscribe
                                                });
                                return p.internalDeps = function () {
                                    return n.length ? m.concat(n) : m
                                },
                                        p
                            };
                    bh.Observable.prototype.flatMapWithConcurrencyLimit = function (g) {
                        for (var h = arguments.length,
                                i = Array(h > 1 ? h - 1 : 0), j = 1; h > j; j++) {
                            i[j - 1] = arguments[j]
                        }
                        var k = new bh.Desc(this, "flatMapWithConcurrencyLimit", [g].concat(i));
                        return aZ(k, a6(this, a0(i), !1, g))
                    },
                            bh.Observable.prototype.flatMapConcat = function () {
                                var c = new bh.Desc(this, "flatMapConcat", Array.prototype.slice.call(arguments, 0));
                                return aZ(c, this.flatMapWithConcurrencyLimit.apply(this, [1].concat(be.call(arguments))))
                            },
                            bh.later = function (c, g) {
                                return aZ(new bh.Desc(bh, "later", [c, g]), bh.fromBinder(function (h) {
                                    var i = function () {
                                        return h([g, aw()])
                                    },
                                            j = bh.scheduler.setTimeout(i, c);
                                    return function () {
                                        return bh.scheduler.clearTimeout(j)
                                    }
                                }))
                            },
                            bh.Observable.prototype.bufferingThrottle = function (c) {
                                var g = new bh.Desc(this, "bufferingThrottle", [c]);
                                return aZ(g, this.flatMapConcat(function (h) {
                                    return bh.once(h).concat(bh.later(c).filter(!1))
                                }))
                            },
                            bh.Property.prototype.bufferingThrottle = function () {
                                return bh.Observable.prototype.bufferingThrottle.apply(this, arguments).toProperty()
                            },
                            aK(a7, aY),
                            aH(a7.prototype, {
                                unsubAll: function () {
                                    for (var g, h = this.subscriptions,
                                            i = 0; i < h.length; i++) {
                                        g = h[i],
                                                "function" == typeof g.unsub && g.unsub()
                                    }
                                },
                                subscribeAll: function (g) {
                                    if (this.ended) {
                                        g(aw())
                                    } else {
                                        this.sink = g;
                                        for (var h, i = ad(this.subscriptions), j = 0; j < i.length; j++) {
                                            h = i[j],
                                                    this.subscribeInput(h)
                                        }
                                    }
                                    return this.unsubAll
                                },
                                guardedSink: function (c) {
                                    var g = this;
                                    return function (h) {
                                        return h.isEnd() ? (g.unsubscribeInput(c), bh.noMore) : g.sink(h)
                                    }
                                },
                                subscribeInput: function (c) {
                                    return c.unsub = c.input.dispatcher.subscribe(this.guardedSink(c.input)),
                                            c.unsub
                                },
                                unsubscribeInput: function (g) {
                                    for (var h, i = this.subscriptions,
                                            j = 0; j < i.length; j++) {
                                        if (h = i[j], h.input === g) {
                                            return "function" == typeof h.unsub && h.unsub(),
                                                    void this.subscriptions.splice(j, 1)
                                        }
                                    }
                                },
                                plug: function (g) {
                                    var h = this;
                                    if (ao(g), !this.ended) {
                                        var i = {
                                            input: g
                                        };
                                        return this.subscriptions.push(i),
                                                "undefined" != typeof this.sink && this.subscribeInput(i),
                                                function () {
                                                    return h.unsubscribeInput(g)
                                                }
                                    }
                                },
                                end: function () {
                                    return this.ended = !0,
                                            this.unsubAll(),
                                            "function" == typeof this.sink ? this.sink(aw()) : void 0
                                },
                                push: function (c) {
                                    return this.ended || "function" != typeof this.sink ? void 0 : this.sink(at(c))
                                },
                                error: function (c) {
                                    return "function" == typeof this.sink ? this.sink(new aM(c)) : void 0
                                }
                            }),
                            bh.Bus = a7;
                    var a9 = function (c, g) {
                        return a5(function (i) {
                            for (var j = bc(g, [function (h, n) {
                                    return i.apply(void 0, ah(h).concat([n]))
                                }]), k = arguments.length, l = Array(k > 1 ? k - 1 : 0), m = 1; k > m; m++) {
                                l[m - 1] = arguments[m]
                            }
                            return aZ(new bh.Desc(bh, c, [i].concat(l)), bh.combineAsArray(l).flatMap(j))
                        })
                    };
                    bh.fromCallback = a9("fromCallback",
                            function (g) {
                                for (var h = arguments.length,
                                        i = Array(h > 1 ? h - 1 : 0), j = 1; h > j; j++) {
                                    i[j - 1] = arguments[j]
                                }
                                return bh.fromBinder(function (c) {
                                    return bq(g, i)(c),
                                            bn
                                },
                                        function (c) {
                                            return [c, aw()]
                                        })
                            }),
                            bh.fromNodeCallback = a9("fromNodeCallback",
                                    function (g) {
                                        for (var h = arguments.length,
                                                i = Array(h > 1 ? h - 1 : 0), j = 1; h > j; j++) {
                                            i[j - 1] = arguments[j]
                                        }
                                        return bh.fromBinder(function (c) {
                                            return bq(g, i)(c),
                                                    bn
                                        },
                                                function (c, k) {
                                                    return c ? [new aM(c), aw()] : [k, aw()]
                                                })
                                    }),
                            bh.combineTemplate = function (m) {
                                function n(c) {
                                    return c[c.length - 1]
                                }
                                function o(g, h, i) {
                                    return n(g)[h] = i,
                                            i
                                }
                                function p(c, g) {
                                    return function (h, i) {
                                        return o(h, c, i[g])
                                    }
                                }
                                function q(c, g) {
                                    return function (h) {
                                        return o(h, c, g)
                                    }
                                }
                                function r(c) {
                                    return av(c) ? [] : {}
                                }
                                function s(c, g) {
                                    return function (h) {
                                        var i = r(g);
                                        return o(h, c, i),
                                                h.push(i)
                                    }
                                }
                                function t(g, h) {
                                    if (ay(h)) {
                                        return x.push(h),
                                                w.push(p(g, x.length - 1))
                                    }
                                    if (!h || h.constructor != Object && h.constructor != Array) {
                                        return w.push(q(g, h))
                                    }
                                    var i = function (c) {
                                        return c.pop()
                                    };
                                    return w.push(s(g, h)),
                                            v(h),
                                            w.push(i)
                                }
                                function u(h) {
                                    for (var i, j = r(m), k = [j], l = 0; l < w.length; l++) {
                                        (i = w[l])(k, h)
                                    }
                                    return j
                                }
                                function v(c) {
                                    return aN.each(c, t)
                                }
                                var w = [],
                                        x = [];
                                return v(m),
                                        aZ(new bh.Desc(bh, "combineTemplate", [m]), bh.combineAsArray(x).map(u))
                            };
                    var bd = function (g, h) {
                        var i = new aY(aW(g, "justInitValue"),
                                function (c) {
                                    var j = void 0,
                                            k = g.dispatcher.subscribe(function (l) {
                                                return l.isEnd() || (j = l),
                                                        bh.noMore
                                            });
                                    return aT.whenDoneWith(i,
                                            function () {
                                                return "undefined" != typeof j && null !== j && c(j),
                                                        c(aw())
                                            }),
                                            k
                                });
                        return i.concat(h).toProperty()
                    };
                    bh.Observable.prototype.mapEnd = function () {
                        var c = a8(arguments);
                        return aZ(new bh.Desc(this, "mapEnd", [c]), this.withHandler(function (g) {
                            return g.isEnd() ? (this.push(at(c(g))), this.push(aw()), bh.noMore) : this.push(g)
                        }))
                    },
                            bh.Observable.prototype.skipErrors = function () {
                                return aZ(new bh.Desc(this, "skipErrors", []), this.withHandler(function (c) {
                                    return c.isError() ? bh.more : this.push(c)
                                }))
                            },
                            bh.EventStream.prototype.takeUntil = function (c) {
                                var g = {};
                                return aZ(new bh.Desc(this, "takeUntil", [c]), bh.groupSimultaneous(this.mapEnd(g), c.skipErrors()).withHandler(function (i) {
                                    if (i.hasValue()) {
                                        var j = i.value(),
                                                k = j[0],
                                                l = j[1];
                                        if (l.length) {
                                            return this.push(aw())
                                        }
                                        for (var m, n = bh.more,
                                                o = 0; o < k.length; o++) {
                                            m = k[o],
                                                    n = m === g ? this.push(aw()) : this.push(at(m))
                                        }
                                        return n
                                    }
                                    return this.push(i)
                                }))
                            },
                            bh.Property.prototype.takeUntil = function (c) {
                                var g = this.changes().takeUntil(c);
                                return aZ(new bh.Desc(this, "takeUntil", [c]), bd(this, g))
                            },
                            bh.Observable.prototype.flatMapLatest = function () {
                                var c = a0(arguments),
                                        g = this.toEventStream();
                                return aZ(new bh.Desc(this, "flatMapLatest", [c]), g.flatMap(function (h) {
                                    return a3(c(h)).takeUntil(g)
                                }))
                            },
                            bh.Property.prototype.delayChanges = function (c, g) {
                                return aZ(c, bd(this, g(this.changes())))
                            },
                            bh.EventStream.prototype.delay = function (c) {
                                return aZ(new bh.Desc(this, "delay", [c]), this.flatMap(function (g) {
                                    return bh.later(c, g)
                                }))
                            },
                            bh.Property.prototype.delay = function (c) {
                                return this.delayChanges(new bh.Desc(this, "delay", [c]),
                                        function (g) {
                                            return g.delay(c)
                                        })
                            },
                            bh.EventStream.prototype.debounce = function (c) {
                                return aZ(new bh.Desc(this, "debounce", [c]), this.flatMapLatest(function (g) {
                                    return bh.later(c, g)
                                }))
                            },
                            bh.Property.prototype.debounce = function (c) {
                                return this.delayChanges(new bh.Desc(this, "debounce", [c]),
                                        function (g) {
                                            return g.debounce(c)
                                        })
                            },
                            bh.EventStream.prototype.debounceImmediate = function (c) {
                                return aZ(new bh.Desc(this, "debounceImmediate", [c]), this.flatMapFirst(function (g) {
                                    return bh.once(g).concat(bh.later(c).filter(!1))
                                }))
                            },
                            bh.Observable.prototype.decode = function (c) {
                                return aZ(new bh.Desc(this, "decode", [c]), this.combine(bh.combineTemplate(c),
                                        function (g, h) {
                                            return h[g]
                                        }))
                            },
                            bh.Observable.prototype.scan = function (h, i) {
                                var j, k = this;
                                i = ac(i);
                                var l = aj(h),
                                        m = !1,
                                        n = function (c) {
                                            var o = !1,
                                                    p = bn,
                                                    q = bh.more,
                                                    r = function () {
                                                        return o ? void 0 : l.forEach(function (g) {
                                                            return o = m = !0,
                                                                    q = c(new aG(function () {
                                                                        return g
                                                                    })),
                                                                    q === bh.noMore ? (p(), p = bn) : void 0
                                                        })
                                                    };
                                            return p = k.dispatcher.subscribe(function (g) {
                                                if (g.hasValue()) {
                                                    if (m && g.isInitial()) {
                                                        return bh.more
                                                    }
                                                    g.isInitial() || r(),
                                                            o = m = !0;
                                                    var s = l.getOrElse(void 0),
                                                            t = i(s, g.value());
                                                    return l = new ax(t),
                                                            c(g.apply(function () {
                                                                return t
                                                            }))
                                                }
                                                return g.isEnd() && (q = r()),
                                                        q !== bh.noMore ? c(g) : void 0
                                            }),
                                                    aT.whenDoneWith(j, r),
                                                    p
                                        };
                                return j = new a4(new bh.Desc(this, "scan", [h, i]), n)
                            },
                            bh.Observable.prototype.diff = function (c, g) {
                                return g = ac(g),
                                        aZ(new bh.Desc(this, "diff", [c, g]), this.scan([c],
                                                function (h, i) {
                                                    return [i, g(h[0], i)]
                                                }).filter(function (h) {
                                            return 2 === h.length
                                        }).map(function (h) {
                                            return h[1]
                                        }))
                            },
                            bh.Observable.prototype.doAction = function () {
                                var c = a8(arguments);
                                return aZ(new bh.Desc(this, "doAction", [c]), this.withHandler(function (g) {
                                    return g.hasValue() && c(g.value()),
                                            this.push(g)
                                }))
                            },
                            bh.Observable.prototype.doEnd = function () {
                                var c = a8(arguments);
                                return aZ(new bh.Desc(this, "doEnd", [c]), this.withHandler(function (g) {
                                    return g.isEnd() && c(),
                                            this.push(g)
                                }))
                            },
                            bh.Observable.prototype.doError = function () {
                                var c = a8(arguments);
                                return aZ(new bh.Desc(this, "doError", [c]), this.withHandler(function (g) {
                                    return g.isError() && c(g.error),
                                            this.push(g)
                                }))
                            },
                            bh.Observable.prototype.doLog = function () {
                                for (var g = arguments.length,
                                        h = Array(g), i = 0; g > i; i++) {
                                    h[i] = arguments[i]
                                }
                                return aZ(new bh.Desc(this, "doLog", h), this.withHandler(function (c) {
                                    return "undefined" != typeof console && null !== console && "function" == typeof console.log && console.log.apply(console, h.concat([c.log()])),
                                            this.push(c)
                                }))
                            },
                            bh.Observable.prototype.endOnError = function (g) {
                                ("undefined" == typeof g || null === g) && (g = !0);
                                for (var h = arguments.length,
                                        i = Array(h > 1 ? h - 1 : 0), j = 1; h > j; j++) {
                                    i[j - 1] = arguments[j]
                                }
                                return ab(this, g, i,
                                        function (c) {
                                            return aZ(new bh.Desc(this, "endOnError", []), this.withHandler(function (k) {
                                                return k.isError() && c(k.error) ? (this.push(k), this.push(aw())) : this.push(k)
                                            }))
                                        })
                            },
                            aP.prototype.errors = function () {
                                return aZ(new bh.Desc(this, "errors", []), this.filter(function () {
                                    return !1
                                }))
                            },
                            bh.Observable.prototype.take = function (c) {
                                return 0 >= c ? bh.never() : aZ(new bh.Desc(this, "take", [c]), this.withHandler(function (g) {
                                    return g.hasValue() ? (c--, c > 0 ? this.push(g) : (0 === c && this.push(g), this.push(aw()), bh.noMore)) : this.push(g)
                                }))
                            },
                            bh.Observable.prototype.first = function () {
                                return aZ(new bh.Desc(this, "first", []), this.take(1))
                            },
                            bh.Observable.prototype.mapError = function () {
                                var c = a8(arguments);
                                return aZ(new bh.Desc(this, "mapError", [c]), this.withHandler(function (g) {
                                    return g.isError() ? this.push(at(c(g.error))) : this.push(g)
                                }))
                            },
                            bh.Observable.prototype.flatMapError = function (c) {
                                var g = new bh.Desc(this, "flatMapError", [c]);
                                return aZ(g, this.mapError(function (h) {
                                    return new aM(h)
                                }).flatMap(function (h) {
                                    return h instanceof aM ? c(h.error) : bh.once(h)
                                }))
                            },
                            bh.EventStream.prototype.sampledBy = function (c, g) {
                                return aZ(new bh.Desc(this, "sampledBy", [c, g]), this.toProperty().sampledBy(c, g))
                            },
                            bh.Property.prototype.sampledBy = function (i, j) {
                                var k = !1;
                                "undefined" != typeof j && null !== j ? j = ac(j) : (k = !0, j = function (c) {
                                    return c.value()
                                });
                                var l = new ak(this, !1, k),
                                        m = new ak(i, !0, k),
                                        n = bh.when([l, m], j),
                                        o = i._isProperty ? n.toProperty() : n;
                                return aZ(new bh.Desc(this, "sampledBy", [i, j]), o)
                            },
                            bh.Property.prototype.sample = function (c) {
                                return aZ(new bh.Desc(this, "sample", [c]), this.sampledBy(bh.interval(c, {})))
                            },
                            bh.Observable.prototype.map = function (g) {
                                if (g && g._isProperty) {
                                    return g.sampledBy(this, bp)
                                }
                                for (var h = arguments.length,
                                        i = Array(h > 1 ? h - 1 : 0), j = 1; h > j; j++) {
                                    i[j - 1] = arguments[j]
                                }
                                return ab(this, g, i,
                                        function (c) {
                                            return aZ(new bh.Desc(this, "map", [c]), this.withHandler(function (k) {
                                                return this.push(k.fmap(c))
                                            }))
                                        })
                            },
                            bh.Observable.prototype.fold = function (c, g) {
                                return aZ(new bh.Desc(this, "fold", [c, g]), this.scan(c, g).sampledBy(this.filter(!1).mapEnd().toProperty()))
                            },
                            aP.prototype.reduce = aP.prototype.fold;
                    var bg = [["addEventListener", "removeEventListener"], ["addListener", "removeListener"], ["on", "off"], ["bind", "unbind"]],
                            bj = function (g) {
                                for (var h, i = 0; i < bg.length; i++) {
                                    h = bg[i];
                                    var j = [g[h[0]], g[h[1]]];
                                    if (j[0] && j[1]) {
                                        return j
                                    }
                                }
                                for (var k = 0; k < bg.length; k++) {
                                    h = bg[k];
                                    var l = g[h[0]];
                                    if (l) {
                                        return [l,
                                            function () {}]
                                    }
                                }
                                throw new aM("No suitable event methods in " + g)
                            };
                    bh.fromEventTarget = function (h, i, j) {
                        var k = bj(h),
                                l = k[0],
                                m = k[1],
                                n = new bh.Desc(bh, "fromEvent", [h, i]);
                        return aZ(n, bh.fromBinder(function (g) {
                            return l.call(h, i, g),
                                    function () {
                                        return m.call(h, i, g)
                                    }
                        },
                                j))
                    },
                            bh.fromEvent = bh.fromEventTarget,
                            bh.fromPoll = function (g, h) {
                                var i = new bh.Desc(bh, "fromPoll", [g, h]);
                                return aZ(i, bh.fromBinder(function (j) {
                                    var k = bh.scheduler.setInterval(j, g);
                                    return function () {
                                        return bh.scheduler.clearInterval(k)
                                    }
                                },
                                        h))
                            },
                            bh.fromPromise = function (g, h) {
                                var i = arguments.length <= 2 || void 0 === arguments[2] ? bb : arguments[2];
                                return aZ(new bh.Desc(bh, "fromPromise", [g]), bh.fromBinder(function (j) {
                                    var k = g.then(j,
                                            function (c) {
                                                return j(new aM(c))
                                            });
                                    return k && "function" == typeof k.done && k.done(),
                                            h ?
                                            function () {
                                                return "function" == typeof g.abort ? g.abort() : void 0
                                            } : function () {}
                                },
                                        i))
                            },
                            bh.Observable.prototype.groupBy = function (g) {
                                var h = arguments.length <= 1 || void 0 === arguments[1] ? bh._.id : arguments[1],
                                        i = {},
                                        j = this;
                                return j.filter(function (c) {
                                    return !i[g(c)]
                                }).map(function (c) {
                                    var k = g(c),
                                            l = j.filter(function (o) {
                                                return g(o) === k
                                            }),
                                            m = bh.once(c).concat(l),
                                            n = h(m, c).withHandler(function (o) {
                                        return this.push(o),
                                                o.isEnd() ? delete i[k] : void 0
                                    });
                                    return i[k] = n,
                                            n
                                })
                            },
                            bh.fromArray = function (c) {
                                if (aB(c), c.length) {
                                    var g = 0;
                                    return new aY(new bh.Desc(bh, "fromArray", [c]),
                                            function (i) {
                                                var j = !1,
                                                        k = bh.more,
                                                        l = !1,
                                                        m = !1,
                                                        n = function () {
                                                            if (m = !0, !l) {
                                                                for (l = !0; m; ) {
                                                                    if (m = !1, k !== bh.noMore && !j) {
                                                                        var h = c[g++];
                                                                        k = i(az(h)),
                                                                                k !== bh.noMore && (g === c.length ? i(aw()) : aT.afterTransaction(n))
                                                                    }
                                                                }
                                                                return l = !1
                                                            }
                                                        };
                                                return n(),
                                                        function () {
                                                            return j = !0
                                                        }
                                            })
                                }
                                return aZ(new bh.Desc(bh, "fromArray", c), bh.never())
                            },
                            bh.EventStream.prototype.holdWhen = function (g) {
                                var h = !1,
                                        i = [],
                                        j = this;
                                return new aY(new bh.Desc(this, "holdWhen", [g]),
                                        function (c) {
                                            var k = new aS,
                                                    l = !1,
                                                    m = function (n) {
                                                        return "function" == typeof n && n(),
                                                                k.empty() && l ? c(aw()) : void 0
                                                    };
                                            return k.add(function (n, o) {
                                                return g.subscribeInternal(function (p) {
                                                    if (!p.hasValue()) {
                                                        return p.isEnd() ? m(o) : c(p)
                                                    }
                                                    if (h = p.value(), !h) {
                                                        var q = i;
                                                        return i = [],
                                                                function () {
                                                                    for (var r, s = [], t = 0; t < q.length; t++) {
                                                                        r = q[t],
                                                                                s.push(c(at(r)))
                                                                    }
                                                                    return s
                                                                }()
                                                    }
                                                })
                                            }),
                                                    k.add(function (n, o) {
                                                        return j.subscribeInternal(function (p) {
                                                            return h && p.hasValue() ? i.push(p.value()) : p.isEnd() && i.length ? m(o) : c(p)
                                                        })
                                                    }),
                                                    l = !0,
                                                    m(),
                                                    k.unsubscribe
                                        })
                            },
                            bh.interval = function (c) {
                                var g = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                                return aZ(new bh.Desc(bh, "interval", [c, g]), bh.fromPoll(c,
                                        function () {
                                            return at(g)
                                        }))
                            },
                            bh.$ = {},
                            bh.$.asEventStream = function (g, h, i) {
                                var j = this;
                                return aN.isFunction(h) && (i = h, h = void 0),
                                        aZ(new bh.Desc(this.selector || this, "asEventStream", [g]), bh.fromBinder(function (k) {
                                            return j.on(g, h, k),
                                                    function () {
                                                        return j.off(g, h, k)
                                                    }
                                        },
                                                i))
                            },
                            "undefined" != typeof jQuery && jQuery && (jQuery.fn.asEventStream = bh.$.asEventStream),
                            "undefined" != typeof Zepto && Zepto && (Zepto.fn.asEventStream = bh.$.asEventStream),
                            bh.Observable.prototype.last = function () {
                                var c;
                                return aZ(new bh.Desc(this, "last", []), this.withHandler(function (g) {
                                    return g.isEnd() ? (c && this.push(c), this.push(aw()), bh.noMore) : void(c = g)
                                }))
                            },
                            bh.Observable.prototype.log = function () {
                                for (var g = arguments.length,
                                        h = Array(g), i = 0; g > i; i++) {
                                    h[i] = arguments[i]
                                }
                                return this.subscribe(function (c) {
                                    "undefined" != typeof console && "function" == typeof console.log && console.log.apply(console, h.concat([c.log()]))
                                }),
                                        this
                            },
                            bh.EventStream.prototype.merge = function (c) {
                                al(c);
                                var g = this;
                                return aZ(new bh.Desc(g, "merge", [c]), bh.mergeAll(this, c))
                            },
                            bh.mergeAll = function () {
                                var c = aO(arguments);
                                return c.length ? new aY(new bh.Desc(bh, "mergeAll", c),
                                        function (g) {
                                            var h = 0,
                                                    i = function (k) {
                                                        return function (l) {
                                                            return k.dispatcher.subscribe(function (m) {
                                                                if (m.isEnd()) {
                                                                    return h++,
                                                                            h === c.length ? g(aw()) : bh.more
                                                                }
                                                                var n = g(m);
                                                                return n === bh.noMore && l(),
                                                                        n
                                                            })
                                                        }
                                                    },
                                                    j = aN.map(i, c);
                                            return new bh.CompositeUnsubscribe(j).unsubscribe
                                        }) : bh.never()
                            },
                            bh.repeatedly = function (g, h) {
                                var i = 0;
                                return aZ(new bh.Desc(bh, "repeatedly", [g, h]), bh.fromPoll(g,
                                        function () {
                                            return h[i++ % h.length]
                                        }))
                            },
                            bh.repeat = function (c) {
                                var g = 0;
                                return bh.fromBinder(function (i) {
                                    function j(h) {
                                        return h.isEnd() ? l ? k() : l = !0 : m = i(h)
                                    }
                                    function k() {
                                        var h;
                                        for (l = !0; l && m !== bh.noMore; ) {
                                            h = c(g++),
                                                    l = !1,
                                                    h ? n = h.subscribeInternal(j) : i(aw())
                                        }
                                        return l = !0
                                    }
                                    var l = !1,
                                            m = bh.more,
                                            n = function () {};
                                    return k(),
                                            function () {
                                                return n()
                                            }
                                })
                            },
                            bh.retry = function (i) {
                                if (!aN.isFunction(i.source)) {
                                    throw new bk("'source' option has to be a function")
                                }
                                var j = i.source,
                                        k = i.retries || 0,
                                        l = i.maxRetries || k,
                                        m = i.delay ||
                                        function () {
                                            return 0
                                        },
                                        n = i.isRetryable ||
                                        function () {
                                            return !0
                                        },
                                        o = !1,
                                        p = null;
                                return aZ(new bh.Desc(bh, "retry", [i]), bh.repeat(function () {
                                    function c() {
                                        return j().endOnError().withHandler(function (q) {
                                            return q.isError() ? (p = q, n(p.error) && k > 0 ? void 0 : (o = !0, this.push(q))) : (q.hasValue() && (p = null, o = !0), this.push(q))
                                        })
                                    }
                                    if (o) {
                                        return null
                                    }
                                    if (p) {
                                        var g = {
                                            error: p.error,
                                            retriesDone: l - k
                                        },
                                                h = bh.later(m(g)).filter(!1);
                                        return k -= 1,
                                                h.concat(bh.once().flatMap(c))
                                    }
                                    return c()
                                }))
                            },
                            bh.sequentially = function (g, h) {
                                var i = 0;
                                return aZ(new bh.Desc(bh, "sequentially", [g, h]), bh.fromPoll(g,
                                        function () {
                                            var c = h[i++];
                                            return i < h.length ? c : i === h.length ? [c, aw()] : aw()
                                        }))
                            },
                            bh.Observable.prototype.skip = function (c) {
                                return aZ(new bh.Desc(this, "skip", [c]), this.withHandler(function (g) {
                                    return g.hasValue() && c > 0 ? (c--, bh.more) : this.push(g)
                                }))
                            },
                            bh.EventStream.prototype.skipUntil = function (c) {
                                var g = c.take(1).map(!0).toProperty(!1);
                                return aZ(new bh.Desc(this, "skipUntil", [c]), this.filter(g))
                            },
                            bh.EventStream.prototype.skipWhile = function (g) {
                                ai(g);
                                for (var h = !1,
                                        i = arguments.length,
                                        j = Array(i > 1 ? i - 1 : 0), k = 1; i > k; k++) {
                                    j[k - 1] = arguments[k]
                                }
                                return ab(this, g, j,
                                        function (c) {
                                            return aZ(new bh.Desc(this, "skipWhile", [c]), this.withHandler(function (l) {
                                                return !h && l.hasValue() && c(l.value()) ? bh.more : (l.hasValue() && (h = !0), this.push(l))
                                            }))
                                        })
                            },
                            bh.Observable.prototype.slidingWindow = function (c) {
                                var g = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1];
                                return aZ(new bh.Desc(this, "slidingWindow", [c, g]), this.scan([],
                                        function (h, i) {
                                            return h.concat([i]).slice(-c)
                                        }).filter(function (h) {
                                    return h.length >= g
                                }))
                            };
                    var bm = [],
                            aF = function (c) {
                                if (bm.length && !aF.running) {
                                    try {
                                        aF.running = !0,
                                                bm.forEach(function (g) {
                                                    g(c)
                                                })
                                    } finally {
                                        delete aF.running
                                    }
                                }
                            };
                    bh.spy = function (c) {
                        return bm.push(c)
                    },
                            bh.Property.prototype.startWith = function (c) {
                                return aZ(new bh.Desc(this, "startWith", [c]), this.scan(c,
                                        function (g, h) {
                                            return h
                                        }))
                            },
                            bh.EventStream.prototype.startWith = function (c) {
                                return aZ(new bh.Desc(this, "startWith", [c]), bh.once(c).concat(this))
                            },
                            bh.Observable.prototype.takeWhile = function (g) {
                                ai(g);
                                for (var h = arguments.length,
                                        i = Array(h > 1 ? h - 1 : 0), j = 1; h > j; j++) {
                                    i[j - 1] = arguments[j]
                                }
                                return ab(this, g, i,
                                        function (c) {
                                            return aZ(new bh.Desc(this, "takeWhile", [c]), this.withHandler(function (k) {
                                                return k.filter(c) ? this.push(k) : (this.push(aw()), bh.noMore)
                                            }))
                                        })
                            },
                            bh.EventStream.prototype.throttle = function (c) {
                                return aZ(new bh.Desc(this, "throttle", [c]), this.bufferWithTime(c).map(function (g) {
                                    return g[g.length - 1]
                                }))
                            },
                            bh.Property.prototype.throttle = function (c) {
                                return this.delayChanges(new bh.Desc(this, "throttle", [c]),
                                        function (g) {
                                            return g.throttle(c)
                                        })
                            },
                            aP.prototype.firstToPromise = function (c) {
                                var g = this;
                                if ("function" != typeof c) {
                                    if ("function" != typeof Promise) {
                                        throw new bk("There isn't default Promise, use shim or parameter")
                                    }
                                    c = Promise
                                }
                                return new c(function (h, i) {
                                    return g.subscribe(function (j) {
                                        return j.hasValue() && h(j.value()),
                                                j.isError() && i(j.error),
                                                bh.noMore
                                    })
                                })
                            },
                            aP.prototype.toPromise = function (c) {
                                return this.last().firstToPromise(c)
                            },
                            bh["try"] = function (c) {
                        return function (g) {
                            try {
                                return bh.once(c(g))
                            } catch (h) {
                                return new bh.Error(h)
                            }
                        }
                    },
                            bh.update = function (c) {
                                function h(g) {
                                    return function () {
                                        for (var m = arguments.length,
                                                n = Array(m), o = 0; m > o; o++) {
                                            n[o] = arguments[o]
                                        }
                                        return function (p) {
                                            return g.apply(void 0, ah([p].concat(n)))
                                        }
                                    }
                                }
                                for (var i = arguments.length,
                                        j = Array(i > 1 ? i - 1 : 0), k = 1; i > k; k++) {
                                    j[k - 1] = arguments[k]
                                }
                                for (var l = j.length - 1; l > 0; ) {
                                    j[l] instanceof Function || (j[l] = aN.always(j[l])),
                                            j[l] = h(j[l]),
                                            l -= 2
                                }
                                return aZ(new bh.Desc(bh, "update", [c].concat(j)), bh.when.apply(bh, j).scan(c,
                                        function (g, m) {
                                            return m(g)
                                        }))
                            },
                            bh.zipAsArray = function () {
                                for (var g = arguments.length,
                                        h = Array(g), i = 0; g > i; i++) {
                                    h[i] = arguments[i]
                                }
                                var j = aO(h);
                                return aZ(new bh.Desc(bh, "zipAsArray", j), bh.zipWith(j,
                                        function () {
                                            for (var k = arguments.length,
                                                    l = Array(k), m = 0; k > m; m++) {
                                                l[m] = arguments[m]
                                            }
                                            return l
                                        }))
                            },
                            bh.zipWith = function () {
                                for (var g = arguments.length,
                                        h = Array(g), i = 0; g > i; i++) {
                                    h[i] = arguments[i]
                                }
                                var j = aR(h),
                                        k = j[0],
                                        l = j[1];
                                return k = aN.map(function (c) {
                                    return c.toEventStream()
                                },
                                        k),
                                        aZ(new bh.Desc(bh, "zipWith", [l].concat(k)), bh.when(k, l))
                            },
                            bh.Observable.prototype.zip = function (c, g) {
                                return aZ(new bh.Desc(this, "zip", [c]), bh.zipWith([this, c], g || Array))
                            },
                            "undefined" != typeof define && null !== define && null != define.amd ? (define([],
                                    function () {
                                        return bh
                                    }), "undefined" != typeof this && null !== this && (this.Bacon = bh)) : "undefined" != typeof e && null !== e && null != e.exports ? (e.exports = bh, bh.Bacon = bh) : this.Bacon = bh
                }).call(this)
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        },
        {}],
    2: [function (f, g, h) {
            function i(c, d) {
                return Object.prototype.hasOwnProperty.call(c, d)
            }
            g.exports = function (d, e, r, s) {
                e = e || "&",
                        r = r || "=";
                var t = {};
                if ("string" != typeof d || 0 === d.length) {
                    return t
                }
                var u = /\+/g;
                d = d.split(e);
                var v = 1000;
                s && "number" == typeof s.maxKeys && (v = s.maxKeys);
                var w = d.length;
                v > 0 && w > v && (w = v);
                for (var x = 0; w > x; ++x) {
                    var y, z, A, B, C = d[x].replace(u, "%20"),
                            D = C.indexOf(r);
                    D >= 0 ? (y = C.substr(0, D), z = C.substr(D + 1)) : (y = C, z = ""),
                            A = decodeURIComponent(y),
                            B = decodeURIComponent(z),
                            i(t, A) ? j(t[A]) ? t[A].push(B) : t[A] = [t[A], B] : t[A] = B
                }
                return t
            };
            var j = Array.isArray ||
                    function (b) {
                        return "[object Array]" === Object.prototype.toString.call(b)
                    }
        },
        {}],
    3: [function (h, i, j) {
            function k(e, f) {
                if (e.map) {
                    return e.map(f)
                }
                for (var g = [], o = 0; o < e.length; o++) {
                    g.push(f(e[o], o))
                }
                return g
            }
            var l = function (b) {
                switch (typeof b) {
                    case "string":
                        return b;
                    case "boolean":
                        return b ? "true" : "false";
                    case "number":
                        return isFinite(b) ? b : "";
                    default:
                        return ""
                }
            };
            i.exports = function (d, e, f, g) {
                return e = e || "&",
                        f = f || "=",
                        null === d && (d = void 0),
                        "object" == typeof d ? k(n(d),
                                function (b) {
                                    var c = encodeURIComponent(l(b)) + f;
                                    return m(d[b]) ? k(d[b],
                                            function (o) {
                                                return c + encodeURIComponent(l(o))
                                            }).join(e) : c + encodeURIComponent(l(d[b]))
                                }).join(e) : g ? encodeURIComponent(l(g)) + f + encodeURIComponent(l(d)) : ""
            };
            var m = Array.isArray ||
                    function (b) {
                        return "[object Array]" === Object.prototype.toString.call(b)
                    },
                    n = Object.keys ||
                    function (d) {
                        var e = [];
                        for (var f in d) {
                            Object.prototype.hasOwnProperty.call(d, f) && e.push(f)
                        }
                        return e
                    }
        },
        {}],
    4: [function (d, e, f) {
            f.decode = f.parse = d("./decode"),
                    f.encode = f.stringify = d("./encode")
        },
        {
            "./decode": 2,
            "./encode": 3
        }],
    5: [function (a, b, c) {
            !
                    function (a, c) {
                        "object" == typeof b && "object" == typeof b.exports ? b.exports = a.document ? c(a, !0) : function (a) {
                            if (!a.document) {
                                throw new Error("jQuery requires a window with a document")
                            }
                            return c(a)
                        } : c(a)
                    }("undefined" != typeof window ? window : this,
                    function (a, b) {
                        function c(a) {
                            var b = "length" in a && a.length,
                                    c = _.type(a);
                            return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
                        }
                        function d(a, b, c) {
                            if (_.isFunction(b)) {
                                return _.grep(a,
                                        function (a, d) {
                                            return !!b.call(a, d, a) !== c
                                        })
                            }
                            if (b.nodeType) {
                                return _.grep(a,
                                        function (a) {
                                            return a === b !== c
                                        })
                            }
                            if ("string" == typeof b) {
                                if (ha.test(b)) {
                                    return _.filter(b, a, c)
                                }
                                b = _.filter(b, a)
                            }
                            return _.grep(a,
                                    function (a) {
                                        return U.call(b, a) >= 0 !== c
                                    })
                        }
                        function e(a, b) {
                            for (; (a = a[b]) && 1 !== a.nodeType; ) {
                            }
                            return a
                        }
                        function f(a) {
                            var b = oa[a] = {};
                            return _.each(a.match(na) || [],
                                    function (a, c) {
                                        b[c] = !0
                                    }),
                                    b
                        }
                        function g() {
                            Z.removeEventListener("DOMContentLoaded", g, !1),
                                    a.removeEventListener("load", g, !1),
                                    _.ready()
                        }
                        function h() {
                            Object.defineProperty(this.cache = {},
                                    0, {
                                        get: function () {
                                            return {}
                                        }
                                    }),
                                    this.expando = _.expando + h.uid++
                        }
                        function i(a, b, c) {
                            var d;
                            if (void 0 === c && 1 === a.nodeType) {
                                if (d = "data-" + b.replace(ua, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                                    try {
                                        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ta.test(c) ? _.parseJSON(c) : c
                                    } catch (e) {
                                    }
                                    sa.set(a, b, c)
                                } else {
                                    c = void 0
                                }
                            }
                            return c
                        }
                        function j() {
                            return !0
                        }
                        function k() {
                            return !1
                        }
                        function l() {
                            try {
                                return Z.activeElement
                            } catch (a) {
                            }
                        }
                        function m(a, b) {
                            return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
                        }
                        function n(a) {
                            return a.type = (null !== a.getAttribute("type")) + "/" + a.type,
                                    a
                        }
                        function o(a) {
                            var b = Ka.exec(a.type);
                            return b ? a.type = b[1] : a.removeAttribute("type"),
                                    a
                        }
                        function p(a, b) {
                            for (var c = 0,
                                    d = a.length; d > c; c++) {
                                ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"))
                            }
                        }
                        function q(a, b) {
                            var c, d, e, f, g, h, i, j;
                            if (1 === b.nodeType) {
                                if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events)) {
                                    delete g.handle,
                                            g.events = {};
                                    for (e in j) {
                                        for (c = 0, d = j[e].length; d > c; c++) {
                                            _.event.add(b, e, j[e][c])
                                        }
                                    }
                                }
                                sa.hasData(a) && (h = sa.access(a), i = _.extend({},
                                        h), sa.set(b, i))
                            }
                        }
                        function r(a, b) {
                            var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
                            return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
                        }
                        function s(a, b) {
                            var c = b.nodeName.toLowerCase();
                            "input" === c && ya.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
                        }
                        function t(b, c) {
                            var d, e = _(c.createElement(b)).appendTo(c.body),
                                    f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
                            return e.detach(),
                                    f
                        }
                        function u(a) {
                            var b = Z,
                                    c = Oa[a];
                            return c || (c = t(a, b), "none" !== c && c || (Na = (Na || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c),
                                    c
                        }
                        function v(a, b, c) {
                            var d, e, f, g, h = a.style;
                            return c = c || Ra(a),
                                    c && (g = c.getPropertyValue(b) || c[b]),
                                    c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)),
                                    void 0 !== g ? g + "" : g
                        }
                        function w(a, b) {
                            return {
                                get: function () {
                                    return a() ? void delete this.get : (this.get = b).apply(this, arguments)
                                }
                            }
                        }
                        function x(a, b) {
                            if (b in a) {
                                return b
                            }
                            for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--; ) {
                                if (b = Xa[e] + c, b in a) {
                                    return b
                                }
                            }
                            return d
                        }
                        function y(a, b, c) {
                            var d = Ta.exec(b);
                            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
                        }
                        function z(a, b, c, d, e) {
                            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
                                "margin" === c && (g += _.css(a, c + wa[f], !0, e)),
                                        d ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wa[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wa[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wa[f] + "Width", !0, e)))
                            }
                            return g
                        }
                        function A(a, b, c) {
                            var d = !0,
                                    e = "width" === b ? a.offsetWidth : a.offsetHeight,
                                    f = Ra(a),
                                    g = "border-box" === _.css(a, "boxSizing", !1, f);
                            if (0 >= e || null == e) {
                                if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qa.test(e)) {
                                    return e
                                }
                                d = g && (Y.boxSizingReliable() || e === a.style[b]),
                                        e = parseFloat(e) || 0
                            }
                            return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
                        }
                        function B(a, b) {
                            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
                                d = a[g],
                                        d.style && (f[g] = ra.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xa(d) && (f[g] = ra.access(d, "olddisplay", u(d.nodeName)))) : (e = xa(d), "none" === c && e || ra.set(d, "olddisplay", e ? c : _.css(d, "display"))))
                            }
                            for (g = 0; h > g; g++) {
                                d = a[g],
                                        d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"))
                            }
                            return a
                        }
                        function C(a, b, c, d, e) {
                            return new C.prototype.init(a, b, c, d, e)
                        }
                        function D() {
                            return setTimeout(function () {
                                Ya = void 0
                            }),
                                    Ya = _.now()
                        }
                        function E(a, b) {
                            var c, d = 0,
                                    e = {
                                        height: a
                                    };
                            for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
                                c = wa[d],
                                        e["margin" + c] = e["padding" + c] = a
                            }
                            return b && (e.opacity = e.width = a),
                                    e
                        }
                        function F(a, b, c) {
                            for (var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length; g > f; f++) {
                                if (d = e[f].call(c, b, a)) {
                                    return d
                                }
                            }
                        }
                        function G(a, b, c) {
                            var d, e, f, g, h, i, j, k, l = this,
                                    m = {},
                                    n = a.style,
                                    o = a.nodeType && xa(a),
                                    p = ra.get(a, "fxshow");
                            c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
                                h.unqueued || i()
                            }), h.unqueued++, l.always(function () {
                                l.always(function () {
                                    h.unqueued--,
                                            _.queue(a, "fx").length || h.empty.fire()
                                })
                            })),
                                    1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")),
                                    c.overflow && (n.overflow = "hidden", l.always(function () {
                                        n.overflow = c.overflow[0],
                                                n.overflowX = c.overflow[1],
                                                n.overflowY = c.overflow[2]
                                    }));
                            for (d in b) {
                                if (e = b[d], $a.exec(e)) {
                                    if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                                        if ("show" !== e || !p || void 0 === p[d]) {
                                            continue
                                        }
                                        o = !0
                                    }
                                    m[d] = p && p[d] || _.style(a, d)
                                } else {
                                    j = void 0
                                }
                            }
                            if (_.isEmptyObject(m)) {
                                "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j)
                            } else {
                                p ? "hidden" in p && (o = p.hidden) : p = ra.access(a, "fxshow", {}),
                                        f && (p.hidden = !o),
                                        o ? _(a).show() : l.done(function () {
                                    _(a).hide()
                                }),
                                        l.done(function () {
                                            var b;
                                            ra.remove(a, "fxshow");
                                            for (b in m) {
                                                _.style(a, b, m[b])
                                            }
                                        });
                                for (d in m) {
                                    g = F(o ? p[d] : 0, d, l),
                                            d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
                                }
                            }
                        }
                        function H(a, b) {
                            var c, d, e, f, g;
                            for (c in a) {
                                if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
                                    f = g.expand(f),
                                            delete a[d];
                                    for (c in f) {
                                        c in a || (a[c] = f[c], b[c] = e)
                                    }
                                } else {
                                    b[d] = e
                                }
                            }
                        }
                        function I(a, b, c) {
                            var d, e, f = 0,
                                    g = bb.length,
                                    h = _.Deferred().always(function () {
                                delete i.elem
                            }),
                                    i = function () {
                                        if (e) {
                                            return !1
                                        }
                                        for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
                                            j.tweens[g].run(f)
                                        }
                                        return h.notifyWith(a, [j, f, c]),
                                                1 > f && i ? c : (h.resolveWith(a, [j]), !1)
                                    },
                                    j = h.promise({
                                        elem: a,
                                        props: _.extend({},
                                                b),
                                        opts: _.extend(!0, {
                                            specialEasing: {}
                                        },
                                                c),
                                        originalProperties: b,
                                        originalOptions: c,
                                        startTime: Ya || D(),
                                        duration: c.duration,
                                        tweens: [],
                                        createTween: function (b, c) {
                                            var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                                            return j.tweens.push(d),
                                                    d
                                        },
                                        stop: function (b) {
                                            var c = 0,
                                                    d = b ? j.tweens.length : 0;
                                            if (e) {
                                                return this
                                            }
                                            for (e = !0; d > c; c++) {
                                                j.tweens[c].run(1)
                                            }
                                            return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                                                    this
                                        }
                                    }),
                                    k = j.props;
                            for (H(k, j.opts.specialEasing); g > f; f++) {
                                if (d = bb[f].call(j, a, k, j.opts)) {
                                    return d
                                }
                            }
                            return _.map(k, F, j),
                                    _.isFunction(j.opts.start) && j.opts.start.call(a, j),
                                    _.fx.timer(_.extend(i, {
                                        elem: a,
                                        anim: j,
                                        queue: j.opts.queue
                                    })),
                                    j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
                        }
                        function J(a) {
                            return function (b, c) {
                                "string" != typeof b && (c = b, b = "*");
                                var d, e = 0,
                                        f = b.toLowerCase().match(na) || [];
                                if (_.isFunction(c)) {
                                    for (; d = f[e++]; ) {
                                        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
                                    }
                                }
                            }
                        }
                        function K(a, b, c, d) {
                            function e(h) {
                                var i;
                                return f[h] = !0,
                                        _.each(a[h] || [],
                                                function (a, h) {
                                                    var j = h(b, c, d);
                                                    return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
                                                }),
                                        i
                            }
                            var f = {},
                                    g = a === tb;
                            return e(b.dataTypes[0]) || !f["*"] && e("*")
                        }
                        function L(a, b) {
                            var c, d, e = _.ajaxSettings.flatOptions || {};
                            for (c in b) {
                                void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c])
                            }
                            return d && _.extend(!0, a, d),
                                    a
                        }
                        function M(a, b, c) {
                            for (var d, e, f, g, h = a.contents,
                                    i = a.dataTypes;
                                    "*" === i[0]; ) {
                                i.shift(),
                                        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"))
                            }
                            if (d) {
                                for (e in h) {
                                    if (h[e] && h[e].test(d)) {
                                        i.unshift(e);
                                        break
                                    }
                                }
                            }
                            if (i[0] in c) {
                                f = i[0]
                            } else {
                                for (e in c) {
                                    if (!i[0] || a.converters[e + " " + i[0]]) {
                                        f = e;
                                        break
                                    }
                                    g || (g = e)
                                }
                                f = f || g
                            }
                            return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
                        }
                        function N(a, b, c, d) {
                            var e, f, g, h, i, j = {},
                                    k = a.dataTypes.slice();
                            if (k[1]) {
                                for (g in a.converters) {
                                    j[g.toLowerCase()] = a.converters[g]
                                }
                            }
                            for (f = k.shift(); f; ) {
                                if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) {
                                    if ("*" === f) {
                                        f = i
                                    } else {
                                        if ("*" !== i && i !== f) {
                                            if (g = j[i + " " + f] || j["* " + f], !g) {
                                                for (e in j) {
                                                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                                        break
                                                    }
                                                }
                                            }
                                            if (g !== !0) {
                                                if (g && a["throws"]) {
                                                    b = g(b)
                                                } else {
                                                    try {
                                                        b = g(b)
                                                    } catch (l) {
                                                        return {
                                                            state: "parsererror",
                                                            error: g ? l : "No conversion from " + i + " to " + f
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return {
                                state: "success",
                                data: b
                            }
                        }
                        function O(a, b, c, d) {
                            var e;
                            if (_.isArray(b)) {
                                _.each(b,
                                        function (b, e) {
                                            c || yb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
                                        })
                            } else {
                                if (c || "object" !== _.type(b)) {
                                    d(a, b)
                                } else {
                                    for (e in b) {
                                        O(a + "[" + e + "]", b[e], c, d)
                                    }
                                }
                            }
                        }
                        function P(a) {
                            return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
                        }
                        var Q = [],
                                R = Q.slice,
                                S = Q.concat,
                                T = Q.push,
                                U = Q.indexOf,
                                V = {},
                                W = V.toString,
                                X = V.hasOwnProperty,
                                Y = {},
                                Z = a.document,
                                $ = "2.1.4",
                                _ = function (a, b) {
                                    return new _.fn.init(a, b)
                                },
                                aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                                ba = /^-ms-/,
                                ca = /-([\da-z])/gi,
                                da = function (a, b) {
                                    return b.toUpperCase()
                                };
                        _.fn = _.prototype = {
                            jquery: $,
                            constructor: _,
                            selector: "",
                            length: 0,
                            toArray: function () {
                                return R.call(this)
                            },
                            get: function (a) {
                                return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
                            },
                            pushStack: function (a) {
                                var b = _.merge(this.constructor(), a);
                                return b.prevObject = this,
                                        b.context = this.context,
                                        b
                            },
                            each: function (a, b) {
                                return _.each(this, a, b)
                            },
                            map: function (a) {
                                return this.pushStack(_.map(this,
                                        function (b, c) {
                                            return a.call(b, c, b)
                                        }))
                            },
                            slice: function () {
                                return this.pushStack(R.apply(this, arguments))
                            },
                            first: function () {
                                return this.eq(0)
                            },
                            last: function () {
                                return this.eq(-1)
                            },
                            eq: function (a) {
                                var b = this.length,
                                        c = +a + (0 > a ? b : 0);
                                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
                            },
                            end: function () {
                                return this.prevObject || this.constructor(null)
                            },
                            push: T,
                            sort: Q.sort,
                            splice: Q.splice
                        },
                                _.extend = _.fn.extend = function () {
                                    var a, b, c, d, e, f, g = arguments[0] || {},
                                            h = 1,
                                            i = arguments.length,
                                            j = !1;
                                    for ("boolean" == typeof g && (j = g, g = arguments[h] || {},
                                            h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
                                        if (null != (a = arguments[h])) {
                                            for (b in a) {
                                                c = g[b],
                                                        d = a[b],
                                                        g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {},
                                                                g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d))
                                            }
                                        }
                                    }
                                    return g
                                },
                                _.extend({
                                    expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
                                    isReady: !0,
                                    error: function (a) {
                                        throw new Error(a)
                                    },
                                    noop: function () {},
                                    isFunction: function (a) {
                                        return "function" === _.type(a)
                                    },
                                    isArray: Array.isArray,
                                    isWindow: function (a) {
                                        return null != a && a === a.window
                                    },
                                    isNumeric: function (a) {
                                        return !_.isArray(a) && a - parseFloat(a) + 1 >= 0
                                    },
                                    isPlainObject: function (a) {
                                        return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
                                    },
                                    isEmptyObject: function (a) {
                                        var b;
                                        for (b in a) {
                                            return !1
                                        }
                                        return !0
                                    },
                                    type: function (a) {
                                        return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
                                    },
                                    globalEval: function (a) {
                                        var b, c = eval;
                                        a = _.trim(a),
                                                a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
                                    },
                                    camelCase: function (a) {
                                        return a.replace(ba, "ms-").replace(ca, da)
                                    },
                                    nodeName: function (a, b) {
                                        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
                                    },
                                    each: function (a, b, d) {
                                        var e, f = 0,
                                                g = a.length,
                                                h = c(a);
                                        if (d) {
                                            if (h) {
                                                for (; g > f && (e = b.apply(a[f], d), e !== !1); f++) {
                                                }
                                            } else {
                                                for (f in a) {
                                                    if (e = b.apply(a[f], d), e === !1) {
                                                        break
                                                    }
                                                }
                                            }
                                        } else {
                                            if (h) {
                                                for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++) {
                                                }
                                            } else {
                                                for (f in a) {
                                                    if (e = b.call(a[f], f, a[f]), e === !1) {
                                                        break
                                                    }
                                                }
                                            }
                                        }
                                        return a
                                    },
                                    trim: function (a) {
                                        return null == a ? "" : (a + "").replace(aa, "")
                                    },
                                    makeArray: function (a, b) {
                                        var d = b || [];
                                        return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)),
                                                d
                                    },
                                    inArray: function (a, b, c) {
                                        return null == b ? -1 : U.call(b, a, c)
                                    },
                                    merge: function (a, b) {
                                        for (var c = +b.length,
                                                d = 0,
                                                e = a.length; c > d; d++) {
                                            a[e++] = b[d]
                                        }
                                        return a.length = e,
                                                a
                                    },
                                    grep: function (a, b, c) {
                                        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
                                            d = !b(a[f], f),
                                                    d !== h && e.push(a[f])
                                        }
                                        return e
                                    },
                                    map: function (a, b, d) {
                                        var e, f = 0,
                                                g = a.length,
                                                h = c(a),
                                                i = [];
                                        if (h) {
                                            for (; g > f; f++) {
                                                e = b(a[f], f, d),
                                                        null != e && i.push(e)
                                            }
                                        } else {
                                            for (f in a) {
                                                e = b(a[f], f, d),
                                                        null != e && i.push(e)
                                            }
                                        }
                                        return S.apply([], i)
                                    },
                                    guid: 1,
                                    proxy: function (a, b) {
                                        var c, d, e;
                                        return "string" == typeof b && (c = a[b], b = a, a = c),
                                                _.isFunction(a) ? (d = R.call(arguments, 2), e = function () {
                                            return a.apply(b || this, d.concat(R.call(arguments)))
                                        },
                                                e.guid = a.guid = a.guid || _.guid++, e) : void 0
                                    },
                                    now: Date.now,
                                    support: Y
                                }),
                                _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
                                        function (a, b) {
                                            V["[object " + b + "]"] = b.toLowerCase()
                                        });
                        var ea = function (a) {
                            function b(a, b, c, d) {
                                var e, f, g, h, i, j, l, n, o, p;
                                if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) {
                                    return c
                                }
                                if (!d && I) {
                                    if (11 !== h && (e = sa.exec(a))) {
                                        if (g = e[1]) {
                                            if (9 === h) {
                                                if (f = b.getElementById(g), !f || !f.parentNode) {
                                                    return c
                                                }
                                                if (f.id === g) {
                                                    return c.push(f),
                                                            c
                                                }
                                            } else {
                                                if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) {
                                                    return c.push(f),
                                                            c
                                                }
                                            }
                                        } else {
                                            if (e[2]) {
                                                return $.apply(c, b.getElementsByTagName(a)),
                                                        c
                                            }
                                            if ((g = e[3]) && v.getElementsByClassName) {
                                                return $.apply(c, b.getElementsByClassName(g)),
                                                        c
                                            }
                                        }
                                    }
                                    if (v.qsa && (!J || !J.test(a))) {
                                        if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                                            for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--; ) {
                                                j[i] = n + m(j[i])
                                            }
                                            o = ta.test(a) && k(b.parentNode) || b,
                                                    p = j.join(",")
                                        }
                                        if (p) {
                                            try {
                                                return $.apply(c, o.querySelectorAll(p)),
                                                        c
                                            } catch (q) {
                                            } finally {
                                                l || b.removeAttribute("id")
                                            }
                                        }
                                    }
                                }
                                return B(a.replace(ia, "$1"), b, c, d)
                            }
                            function c() {
                                function a(c, d) {
                                    return b.push(c + " ") > w.cacheLength && delete a[b.shift()],
                                            a[c + " "] = d
                                }
                                var b = [];
                                return a
                            }
                            function d(a) {
                                return a[N] = !0,
                                        a
                            }
                            function e(a) {
                                var b = G.createElement("div");
                                try {
                                    return !!a(b)
                                } catch (c) {
                                    return !1
                                } finally {
                                    b.parentNode && b.parentNode.removeChild(b),
                                            b = null
                                }
                            }
                            function f(a, b) {
                                for (var c = a.split("|"), d = a.length; d--; ) {
                                    w.attrHandle[c[d]] = b
                                }
                            }
                            function g(a, b) {
                                var c = b && a,
                                        d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
                                if (d) {
                                    return d
                                }
                                if (c) {
                                    for (; c = c.nextSibling; ) {
                                        if (c === b) {
                                            return -1
                                        }
                                    }
                                }
                                return a ? 1 : -1
                            }
                            function h(a) {
                                return function (b) {
                                    var c = b.nodeName.toLowerCase();
                                    return "input" === c && b.type === a
                                }
                            }
                            function i(a) {
                                return function (b) {
                                    var c = b.nodeName.toLowerCase();
                                    return ("input" === c || "button" === c) && b.type === a
                                }
                            }
                            function j(a) {
                                return d(function (b) {
                                    return b = +b,
                                            d(function (c, d) {
                                                for (var e, f = a([], c.length, b), g = f.length; g--; ) {
                                                    c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                                                }
                                            })
                                })
                            }
                            function k(a) {
                                return a && "undefined" != typeof a.getElementsByTagName && a
                            }
                            function l() {}
                            function m(a) {
                                for (var b = 0,
                                        c = a.length,
                                        d = ""; c > b; b++) {
                                    d += a[b].value
                                }
                                return d
                            }
                            function n(a, b, c) {
                                var d = b.dir,
                                        e = c && "parentNode" === d,
                                        f = Q++;
                                return b.first ?
                                        function (b, c, f) {
                                            for (; b = b[d]; ) {
                                                if (1 === b.nodeType || e) {
                                                    return a(b, c, f)
                                                }
                                            }
                                        } : function (b, c, g) {
                                    var h, i, j = [P, f];
                                    if (g) {
                                        for (; b = b[d]; ) {
                                            if ((1 === b.nodeType || e) && a(b, c, g)) {
                                                return !0
                                            }
                                        }
                                    } else {
                                        for (; b = b[d]; ) {
                                            if (1 === b.nodeType || e) {
                                                if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) {
                                                    return j[2] = h[2]
                                                }
                                                if (i[d] = j, j[2] = a(b, c, g)) {
                                                    return !0
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            function o(a) {
                                return a.length > 1 ?
                                        function (b, c, d) {
                                            for (var e = a.length; e--; ) {
                                                if (!a[e](b, c, d)) {
                                                    return !1
                                                }
                                            }
                                            return !0
                                        } : a[0]
                            }
                            function p(a, c, d) {
                                for (var e = 0,
                                        f = c.length; f > e; e++) {
                                    b(a, c[e], d)
                                }
                                return d
                            }
                            function q(a, b, c, d, e) {
                                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
                                    (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h))
                                }
                                return g
                            }
                            function r(a, b, c, e, f, g) {
                                return e && !e[N] && (e = r(e)),
                                        f && !f[N] && (f = r(f, g)),
                                        d(function (d, g, h, i) {
                                            var j, k, l, m = [],
                                                    n = [],
                                                    o = g.length,
                                                    r = d || p(b || "*", h.nodeType ? [h] : h, []),
                                                    s = !a || !d && b ? r : q(r, m, a, h, i),
                                                    t = c ? f || (d ? a : o || e) ? [] : g : s;
                                            if (c && c(s, t, h, i), e) {
                                                for (j = q(t, n), e(j, [], h, i), k = j.length; k--; ) {
                                                    (l = j[k]) && (t[n[k]] = !(s[n[k]] = l))
                                                }
                                            }
                                            if (d) {
                                                if (f || a) {
                                                    if (f) {
                                                        for (j = [], k = t.length; k--; ) {
                                                            (l = t[k]) && j.push(s[k] = l)
                                                        }
                                                        f(null, t = [], j, i)
                                                    }
                                                    for (k = t.length; k--; ) {
                                                        (l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                                                    }
                                                }
                                            } else {
                                                t = q(t === g ? t.splice(o, t.length) : t),
                                                        f ? f(null, g, t, i) : $.apply(g, t)
                                            }
                                        })
                            }
                            function s(a) {
                                for (var b, c, d, e = a.length,
                                        f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function (a) {
                                    return a === b
                                },
                                        g, !0), j = n(function (a) {
                                    return aa(b, a) > -1
                                },
                                        g, !0), k = [function (a, c, d) {
                                        var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                                        return b = null,
                                                e
                                    }]; e > h; h++) {
                                    if (c = w.relative[a[h].type]) {
                                        k = [n(o(k), c)]
                                    } else {
                                        if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                                            for (d = ++h; e > d && !w.relative[a[d].type]; d++) {
                                            }
                                            return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                                                value: " " === a[h - 2].type ? "*" : ""
                                            })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                                        }
                                        k.push(c)
                                    }
                                }
                                return o(k)
                            }
                            function t(a, c) {
                                var e = c.length > 0,
                                        f = a.length > 0,
                                        g = function (d, g, h, i, j) {
                                            var k, l, m, n = 0,
                                                    o = "0",
                                                    p = d && [],
                                                    r = [],
                                                    s = C,
                                                    t = d || f && w.find.TAG("*", j),
                                                    u = P += null == s ? 1 : Math.random() || 0.1,
                                                    v = t.length;
                                            for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                                                if (f && k) {
                                                    for (l = 0; m = a[l++]; ) {
                                                        if (m(k, g, h)) {
                                                            i.push(k);
                                                            break
                                                        }
                                                    }
                                                    j && (P = u)
                                                }
                                                e && ((k = !m && k) && n--, d && p.push(k))
                                            }
                                            if (n += o, e && o !== n) {
                                                for (l = 0; m = c[l++]; ) {
                                                    m(p, r, g, h)
                                                }
                                                if (d) {
                                                    if (n > 0) {
                                                        for (; o--; ) {
                                                            p[o] || r[o] || (r[o] = Y.call(i))
                                                        }
                                                    }
                                                    r = q(r)
                                                }
                                                $.apply(i, r),
                                                        j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                                            }
                                            return j && (P = u, C = s),
                                                    p
                                        };
                                return e ? d(g) : g
                            }
                            var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
                                    O = a.document,
                                    P = 0,
                                    Q = 0,
                                    R = c(),
                                    S = c(),
                                    T = c(),
                                    U = function (a, b) {
                                        return a === b && (E = !0),
                                                0
                                    },
                                    V = 1 << 31,
                                    W = {}.hasOwnProperty,
                                    X = [],
                                    Y = X.pop,
                                    Z = X.push,
                                    $ = X.push,
                                    _ = X.slice,
                                    aa = function (a, b) {
                                        for (var c = 0,
                                                d = a.length; d > c; c++) {
                                            if (a[c] === b) {
                                                return c
                                            }
                                        }
                                        return -1
                                    },
                                    ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                                    ca = "[\\x20\\t\\r\\n\\f]",
                                    da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                                    ea = da.replace("w", "w#"),
                                    fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
                                    ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
                                    ha = new RegExp(ca + "+", "g"),
                                    ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
                                    ja = new RegExp("^" + ca + "*," + ca + "*"),
                                    ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
                                    la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
                                    ma = new RegExp(ga),
                                    na = new RegExp("^" + ea + "$"),
                                    oa = {
                                        ID: new RegExp("^#(" + da + ")"),
                                        CLASS: new RegExp("^\\.(" + da + ")"),
                                        TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
                                        ATTR: new RegExp("^" + fa),
                                        PSEUDO: new RegExp("^" + ga),
                                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                                        bool: new RegExp("^(?:" + ba + ")$", "i"),
                                        needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
                                    },
                                    pa = /^(?:input|select|textarea|button)$/i,
                                    qa = /^h\d$/i,
                                    ra = /^[^{]+\{\s*\[native \w/,
                                    sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                                    ta = /[+~]/,
                                    ua = /'|\\/g,
                                    va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
                                    wa = function (a, b, c) {
                                        var d = "0x" + b - 65536;
                                        return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                                    },
                                    xa = function () {
                                        F()
                                    };
                            try {
                                $.apply(X = _.call(O.childNodes), O.childNodes),
                                        X[O.childNodes.length].nodeType
                            } catch (ya) {
                                $ = {
                                    apply: X.length ?
                                            function (a, b) {
                                                Z.apply(a, _.call(b))
                                            } : function (a, b) {
                                        for (var c = a.length,
                                                d = 0; a[c++] = b[d++]; ) {
                                        }
                                        a.length = c - 1
                                    }
                                }
                            }
                            v = b.support = {},
                                    y = b.isXML = function (a) {
                                        var b = a && (a.ownerDocument || a).documentElement;
                                        return b ? "HTML" !== b.nodeName : !1
                                    },
                                    F = b.setDocument = function (a) {
                                        var b, c, d = a ? a.ownerDocument || a : O;
                                        return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function (a) {
                                            return a.className = "i",
                                                    !a.getAttribute("className")
                                        }), v.getElementsByTagName = e(function (a) {
                                            return a.appendChild(d.createComment("")),
                                                    !a.getElementsByTagName("*").length
                                        }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function (a) {
                                            return H.appendChild(a).id = N,
                                                    !d.getElementsByName || !d.getElementsByName(N).length
                                        }), v.getById ? (w.find.ID = function (a, b) {
                                            if ("undefined" != typeof b.getElementById && I) {
                                                var c = b.getElementById(a);
                                                return c && c.parentNode ? [c] : []
                                            }
                                        },
                                                w.filter.ID = function (a) {
                                                    var b = a.replace(va, wa);
                                                    return function (a) {
                                                        return a.getAttribute("id") === b
                                                    }
                                                }) : (delete w.find.ID, w.filter.ID = function (a) {
                                            var b = a.replace(va, wa);
                                            return function (a) {
                                                var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                                                return c && c.value === b
                                            }
                                        }), w.find.TAG = v.getElementsByTagName ?
                                                function (a, b) {
                                                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
                                                } : function (a, b) {
                                            var c, d = [],
                                                    e = 0,
                                                    f = b.getElementsByTagName(a);
                                            if ("*" === a) {
                                                for (; c = f[e++]; ) {
                                                    1 === c.nodeType && d.push(c)
                                                }
                                                return d
                                            }
                                            return f
                                        },
                                                w.find.CLASS = v.getElementsByClassName &&
                                                function (a, b) {
                                                    return I ? b.getElementsByClassName(a) : void 0
                                                },
                                                K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function (a) {
                                            H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>",
                                                    a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"),
                                                    a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"),
                                                    a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="),
                                                    a.querySelectorAll(":checked").length || J.push(":checked"),
                                                    a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
                                        }), e(function (a) {
                                            var b = d.createElement("input");
                                            b.setAttribute("type", "hidden"),
                                                    a.appendChild(b).setAttribute("name", "D"),
                                                    a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="),
                                                    a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"),
                                                    a.querySelectorAll("*,:x"),
                                                    J.push(",.*:")
                                        })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function (a) {
                                            v.disconnectedMatch = L.call(a, "div"),
                                                    L.call(a, "[s!='']:x"),
                                                    K.push("!=", ga)
                                        }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ?
                                                function (a, b) {
                                                    var c = 9 === a.nodeType ? a.documentElement : a,
                                                            d = b && b.parentNode;
                                                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                                                } : function (a, b) {
                                            if (b) {
                                                for (; b = b.parentNode; ) {
                                                    if (b === a) {
                                                        return !0
                                                    }
                                                }
                                            }
                                            return !1
                                        },
                                                U = b ?
                                                function (a, b) {
                                                    if (a === b) {
                                                        return E = !0,
                                                                0
                                                    }
                                                    var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                                                    return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
                                                } : function (a, b) {
                                            if (a === b) {
                                                return E = !0,
                                                        0
                                            }
                                            var c, e = 0,
                                                    f = a.parentNode,
                                                    h = b.parentNode,
                                                    i = [a],
                                                    j = [b];
                                            if (!f || !h) {
                                                return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0
                                            }
                                            if (f === h) {
                                                return g(a, b)
                                            }
                                            for (c = a; c = c.parentNode; ) {
                                                i.unshift(c)
                                            }
                                            for (c = b; c = c.parentNode; ) {
                                                j.unshift(c)
                                            }
                                            for (; i[e] === j[e]; ) {
                                                e++
                                            }
                                            return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
                                        },
                                                d) : G
                                    },
                                    b.matches = function (a, c) {
                                        return b(a, null, null, c)
                                    },
                                    b.matchesSelector = function (a, c) {
                                        if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), v.matchesSelector && I && (!K || !K.test(c)) && (!J || !J.test(c))) {
                                            try {
                                                var d = L.call(a, c);
                                                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) {
                                                    return d
                                                }
                                            } catch (e) {
                                            }
                                        }
                                        return b(c, G, null, [a]).length > 0
                                    },
                                    b.contains = function (a, b) {
                                        return (a.ownerDocument || a) !== G && F(a),
                                                M(a, b)
                                    },
                                    b.attr = function (a, b) {
                                        (a.ownerDocument || a) !== G && F(a);
                                        var c = w.attrHandle[b.toLowerCase()],
                                                d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
                                        return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
                                    },
                                    b.error = function (a) {
                                        throw new Error("Syntax error, unrecognized expression: " + a)
                                    },
                                    b.uniqueSort = function (a) {
                                        var b, c = [],
                                                d = 0,
                                                e = 0;
                                        if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                                            for (; b = a[e++]; ) {
                                                b === a[e] && (d = c.push(e))
                                            }
                                            for (; d--; ) {
                                                a.splice(c[d], 1)
                                            }
                                        }
                                        return D = null,
                                                a
                                    },
                                    x = b.getText = function (a) {
                                        var b, c = "",
                                                d = 0,
                                                e = a.nodeType;
                                        if (e) {
                                            if (1 === e || 9 === e || 11 === e) {
                                                if ("string" == typeof a.textContent) {
                                                    return a.textContent
                                                }
                                                for (a = a.firstChild; a; a = a.nextSibling) {
                                                    c += x(a)
                                                }
                                            } else {
                                                if (3 === e || 4 === e) {
                                                    return a.nodeValue
                                                }
                                            }
                                        } else {
                                            for (; b = a[d++]; ) {
                                                c += x(b)
                                            }
                                        }
                                        return c
                                    },
                                    w = b.selectors = {
                                        cacheLength: 50,
                                        createPseudo: d,
                                        match: oa,
                                        attrHandle: {},
                                        find: {},
                                        relative: {
                                            ">": {
                                                dir: "parentNode",
                                                first: !0
                                            },
                                            " ": {
                                                dir: "parentNode"
                                            },
                                            "+": {
                                                dir: "previousSibling",
                                                first: !0
                                            },
                                            "~": {
                                                dir: "previousSibling"
                                            }
                                        },
                                        preFilter: {
                                            ATTR: function (a) {
                                                return a[1] = a[1].replace(va, wa),
                                                        a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa),
                                                        "~=" === a[2] && (a[3] = " " + a[3] + " "),
                                                        a.slice(0, 4)
                                            },
                                            CHILD: function (a) {
                                                return a[1] = a[1].toLowerCase(),
                                                        "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]),
                                                        a
                                            },
                                            PSEUDO: function (a) {
                                                var b, c = !a[6] && a[2];
                                                return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                                            }
                                        },
                                        filter: {
                                            TAG: function (a) {
                                                var b = a.replace(va, wa).toLowerCase();
                                                return "*" === a ?
                                                        function () {
                                                            return !0
                                                        } : function (a) {
                                                    return a.nodeName && a.nodeName.toLowerCase() === b
                                                }
                                            },
                                            CLASS: function (a) {
                                                var b = R[a + " "];
                                                return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a,
                                                        function (a) {
                                                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                                                        })
                                            },
                                            ATTR: function (a, c, d) {
                                                return function (e) {
                                                    var f = b.attr(e, a);
                                                    return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                                                }
                                            },
                                            CHILD: function (a, b, c, d, e) {
                                                var f = "nth" !== a.slice(0, 3),
                                                        g = "last" !== a.slice(-4),
                                                        h = "of-type" === b;
                                                return 1 === d && 0 === e ?
                                                        function (a) {
                                                            return !!a.parentNode
                                                        } : function (b, c, i) {
                                                    var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                                            q = b.parentNode,
                                                            r = h && b.nodeName.toLowerCase(),
                                                            s = !i && !h;
                                                    if (q) {
                                                        if (f) {
                                                            for (; p; ) {
                                                                for (l = b; l = l[p]; ) {
                                                                    if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) {
                                                                        return !1
                                                                    }
                                                                }
                                                                o = p = "only" === a && !o && "nextSibling"
                                                            }
                                                            return !0
                                                        }
                                                        if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                                            for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); ) {
                                                                if (1 === l.nodeType && ++m && l === b) {
                                                                    k[a] = [P, n, m];
                                                                    break
                                                                }
                                                            }
                                                        } else {
                                                            if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) {
                                                                m = j[1]
                                                            } else {
                                                                for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)); ) {
                                                                }
                                                            }
                                                        }
                                                        return m -= e,
                                                                m === d || m % d === 0 && m / d >= 0
                                                    }
                                                }
                                            },
                                            PSEUDO: function (a, c) {
                                                var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                                                return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b) {
                                                    for (var d, e = f(a, c), g = e.length; g--; ) {
                                                        d = aa(a, e[g]),
                                                                a[d] = !(b[d] = e[g])
                                                    }
                                                }) : function (a) {
                                                    return f(a, 0, e)
                                                }) : f
                                            }
                                        },
                                        pseudos: {
                                            not: d(function (a) {
                                                var b = [],
                                                        c = [],
                                                        e = A(a.replace(ia, "$1"));
                                                return e[N] ? d(function (a, b, c, d) {
                                                    for (var f, g = e(a, null, d, []), h = a.length; h--; ) {
                                                        (f = g[h]) && (a[h] = !(b[h] = f))
                                                    }
                                                }) : function (a, d, f) {
                                                    return b[0] = a,
                                                            e(b, null, f, c),
                                                            b[0] = null,
                                                            !c.pop()
                                                }
                                            }),
                                            has: d(function (a) {
                                                return function (c) {
                                                    return b(a, c).length > 0
                                                }
                                            }),
                                            contains: d(function (a) {
                                                return a = a.replace(va, wa),
                                                        function (b) {
                                                            return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                                                        }
                                            }),
                                            lang: d(function (a) {
                                                return na.test(a || "") || b.error("unsupported lang: " + a),
                                                        a = a.replace(va, wa).toLowerCase(),
                                                        function (b) {
                                                            var c;
                                                            do {
                                                                if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) {
                                                                    return c = c.toLowerCase(),
                                                                            c === a || 0 === c.indexOf(a + "-")
                                                                }
                                                            } while ((b = b.parentNode) && 1 === b.nodeType);
                                                            return !1
                                                        }
                                            }),
                                            target: function (b) {
                                                var c = a.location && a.location.hash;
                                                return c && c.slice(1) === b.id
                                            },
                                            root: function (a) {
                                                return a === H
                                            },
                                            focus: function (a) {
                                                return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                                            },
                                            enabled: function (a) {
                                                return a.disabled === !1
                                            },
                                            disabled: function (a) {
                                                return a.disabled === !0
                                            },
                                            checked: function (a) {
                                                var b = a.nodeName.toLowerCase();
                                                return "input" === b && !!a.checked || "option" === b && !!a.selected
                                            },
                                            selected: function (a) {
                                                return a.parentNode && a.parentNode.selectedIndex,
                                                        a.selected === !0
                                            },
                                            empty: function (a) {
                                                for (a = a.firstChild; a; a = a.nextSibling) {
                                                    if (a.nodeType < 6) {
                                                        return !1
                                                    }
                                                }
                                                return !0
                                            },
                                            parent: function (a) {
                                                return !w.pseudos.empty(a)
                                            },
                                            header: function (a) {
                                                return qa.test(a.nodeName)
                                            },
                                            input: function (a) {
                                                return pa.test(a.nodeName)
                                            },
                                            button: function (a) {
                                                var b = a.nodeName.toLowerCase();
                                                return "input" === b && "button" === a.type || "button" === b
                                            },
                                            text: function (a) {
                                                var b;
                                                return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                                            },
                                            first: j(function () {
                                                return [0]
                                            }),
                                            last: j(function (a, b) {
                                                return [b - 1]
                                            }),
                                            eq: j(function (a, b, c) {
                                                return [0 > c ? c + b : c]
                                            }),
                                            even: j(function (a, b) {
                                                for (var c = 0; b > c; c += 2) {
                                                    a.push(c)
                                                }
                                                return a
                                            }),
                                            odd: j(function (a, b) {
                                                for (var c = 1; b > c; c += 2) {
                                                    a.push(c)
                                                }
                                                return a
                                            }),
                                            lt: j(function (a, b, c) {
                                                for (var d = 0 > c ? c + b : c; --d >= 0; ) {
                                                    a.push(d)
                                                }
                                                return a
                                            }),
                                            gt: j(function (a, b, c) {
                                                for (var d = 0 > c ? c + b : c; ++d < b; ) {
                                                    a.push(d)
                                                }
                                                return a
                                            })
                                        }
                                    },
                                    w.pseudos.nth = w.pseudos.eq;
                            for (u in {
                                radio: !0,
                                checkbox: !0,
                                file: !0,
                                password: !0,
                                image: !0
                            }) {
                                w.pseudos[u] = h(u)
                            }
                            for (u in {
                                submit: !0,
                                reset: !0
                            }) {
                                w.pseudos[u] = i(u)
                            }
                            return l.prototype = w.filters = w.pseudos,
                                    w.setFilters = new l,
                                    z = b.tokenize = function (a, c) {
                                        var d, e, f, g, h, i, j, k = S[a + " "];
                                        if (k) {
                                            return c ? 0 : k.slice(0)
                                        }
                                        for (h = a, i = [], j = w.preFilter; h; ) {
                                            (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])),
                                                    d = !1,
                                                    (e = ka.exec(h)) && (d = e.shift(), f.push({
                                                value: d,
                                                type: e[0].replace(ia, " ")
                                            }), h = h.slice(d.length));
                                            for (g in w.filter) {
                                                !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                                                    value: d,
                                                    type: g,
                                                    matches: e
                                                }), h = h.slice(d.length))
                                            }
                                            if (!d) {
                                                break
                                            }
                                        }
                                        return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
                                    },
                                    A = b.compile = function (a, b) {
                                        var c, d = [],
                                                e = [],
                                                f = T[a + " "];
                                        if (!f) {
                                            for (b || (b = z(a)), c = b.length; c--; ) {
                                                f = s(b[c]),
                                                        f[N] ? d.push(f) : e.push(f)
                                            }
                                            f = T(a, t(e, d)),
                                                    f.selector = a
                                        }
                                        return f
                                    },
                                    B = b.select = function (a, b, c, d) {
                                        var e, f, g, h, i, j = "function" == typeof a && a,
                                                l = !d && z(a = j.selector || a);
                                        if (c = c || [], 1 === l.length) {
                                            if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                                                if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) {
                                                    return c
                                                }
                                                j && (b = b.parentNode),
                                                        a = a.slice(f.shift().value.length)
                                            }
                                            for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]); ) {
                                                if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                                                    if (f.splice(e, 1), a = d.length && m(f), !a) {
                                                        return $.apply(c, d),
                                                                c
                                                    }
                                                    break
                                                }
                                            }
                                        }
                                        return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b),
                                                c
                                    },
                                    v.sortStable = N.split("").sort(U).join("") === N,
                                    v.detectDuplicates = !!E,
                                    F(),
                                    v.sortDetached = e(function (a) {
                                        return 1 & a.compareDocumentPosition(G.createElement("div"))
                                    }),
                                    e(function (a) {
                                        return a.innerHTML = "<a href='#'></a>",
                                                "#" === a.firstChild.getAttribute("href")
                                    }) || f("type|href|height|width",
                                    function (a, b, c) {
                                        return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
                                    }),
                                    v.attributes && e(function (a) {
                                        return a.innerHTML = "<input/>",
                                                a.firstChild.setAttribute("value", ""),
                                                "" === a.firstChild.getAttribute("value")
                                    }) || f("value",
                                    function (a, b, c) {
                                        return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
                                    }),
                                    e(function (a) {
                                        return null == a.getAttribute("disabled")
                                    }) || f(ba,
                                    function (a, b, c) {
                                        var d;
                                        return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
                                    }),
                                    b
                        }(a);
                        _.find = ea,
                                _.expr = ea.selectors,
                                _.expr[":"] = _.expr.pseudos,
                                _.unique = ea.uniqueSort,
                                _.text = ea.getText,
                                _.isXMLDoc = ea.isXML,
                                _.contains = ea.contains;
                        var fa = _.expr.match.needsContext,
                                ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                                ha = /^.[^:#\[\.,]*$/;
                        _.filter = function (a, b, c) {
                            var d = b[0];
                            return c && (a = ":not(" + a + ")"),
                                    1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b,
                                    function (a) {
                                        return 1 === a.nodeType
                                    }))
                        },
                                _.fn.extend({
                                    find: function (a) {
                                        var b, c = this.length,
                                                d = [],
                                                e = this;
                                        if ("string" != typeof a) {
                                            return this.pushStack(_(a).filter(function () {
                                                for (b = 0; c > b; b++) {
                                                    if (_.contains(e[b], this)) {
                                                        return !0
                                                    }
                                                }
                                            }))
                                        }
                                        for (b = 0; c > b; b++) {
                                            _.find(a, e[b], d)
                                        }
                                        return d = this.pushStack(c > 1 ? _.unique(d) : d),
                                                d.selector = this.selector ? this.selector + " " + a : a,
                                                d
                                    },
                                    filter: function (a) {
                                        return this.pushStack(d(this, a || [], !1))
                                    },
                                    not: function (a) {
                                        return this.pushStack(d(this, a || [], !0))
                                    },
                                    is: function (a) {
                                        return !!d(this, "string" == typeof a && fa.test(a) ? _(a) : a || [], !1).length
                                    }
                                });
                        var ia, ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                                ka = _.fn.init = function (a, b) {
                                    var c, d;
                                    if (!a) {
                                        return this
                                    }
                                    if ("string" == typeof a) {
                                        if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ja.exec(a), !c || !c[1] && b) {
                                            return !b || b.jquery ? (b || ia).find(a) : this.constructor(b).find(a)
                                        }
                                        if (c[1]) {
                                            if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), ga.test(c[1]) && _.isPlainObject(b)) {
                                                for (c in b) {
                                                    _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c])
                                                }
                                            }
                                            return this
                                        }
                                        return d = Z.getElementById(c[2]),
                                                d && d.parentNode && (this.length = 1, this[0] = d),
                                                this.context = Z,
                                                this.selector = a,
                                                this
                                    }
                                    return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ia.ready ? ia.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
                                };
                        ka.prototype = _.fn,
                                ia = _(Z);
                        var la = /^(?:parents|prev(?:Until|All))/,
                                ma = {
                                    children: !0,
                                    contents: !0,
                                    next: !0,
                                    prev: !0
                                };
                        _.extend({
                            dir: function (a, b, c) {
                                for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; ) {
                                    if (1 === a.nodeType) {
                                        if (e && _(a).is(c)) {
                                            break
                                        }
                                        d.push(a)
                                    }
                                }
                                return d
                            },
                            sibling: function (a, b) {
                                for (var c = []; a; a = a.nextSibling) {
                                    1 === a.nodeType && a !== b && c.push(a)
                                }
                                return c
                            }
                        }),
                                _.fn.extend({
                                    has: function (a) {
                                        var b = _(a, this),
                                                c = b.length;
                                        return this.filter(function () {
                                            for (var a = 0; c > a; a++) {
                                                if (_.contains(this, b[a])) {
                                                    return !0
                                                }
                                            }
                                        })
                                    },
                                    closest: function (a, b) {
                                        for (var c, d = 0,
                                                e = this.length,
                                                f = [], g = fa.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++) {
                                            for (c = this[d]; c && c !== b; c = c.parentNode) {
                                                if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                                                    f.push(c);
                                                    break
                                                }
                                            }
                                        }
                                        return this.pushStack(f.length > 1 ? _.unique(f) : f)
                                    },
                                    index: function (a) {
                                        return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                                    },
                                    add: function (a, b) {
                                        return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
                                    },
                                    addBack: function (a) {
                                        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
                                    }
                                }),
                                _.each({
                                    parent: function (a) {
                                        var b = a.parentNode;
                                        return b && 11 !== b.nodeType ? b : null
                                    },
                                    parents: function (a) {
                                        return _.dir(a, "parentNode")
                                    },
                                    parentsUntil: function (a, b, c) {
                                        return _.dir(a, "parentNode", c)
                                    },
                                    next: function (a) {
                                        return e(a, "nextSibling")
                                    },
                                    prev: function (a) {
                                        return e(a, "previousSibling")
                                    },
                                    nextAll: function (a) {
                                        return _.dir(a, "nextSibling")
                                    },
                                    prevAll: function (a) {
                                        return _.dir(a, "previousSibling")
                                    },
                                    nextUntil: function (a, b, c) {
                                        return _.dir(a, "nextSibling", c)
                                    },
                                    prevUntil: function (a, b, c) {
                                        return _.dir(a, "previousSibling", c)
                                    },
                                    siblings: function (a) {
                                        return _.sibling((a.parentNode || {}).firstChild, a)
                                    },
                                    children: function (a) {
                                        return _.sibling(a.firstChild)
                                    },
                                    contents: function (a) {
                                        return a.contentDocument || _.merge([], a.childNodes)
                                    }
                                },
                                        function (a, b) {
                                            _.fn[a] = function (c, d) {
                                                var e = _.map(this, b, c);
                                                return "Until" !== a.slice(-5) && (d = c),
                                                        d && "string" == typeof d && (e = _.filter(d, e)),
                                                        this.length > 1 && (ma[a] || _.unique(e), la.test(a) && e.reverse()),
                                                        this.pushStack(e)
                                            }
                                        });
                        var na = /\S+/g,
                                oa = {};
                        _.Callbacks = function (a) {
                            a = "string" == typeof a ? oa[a] || f(a) : _.extend({},
                                    a);
                            var b, c, d, e, g, h, i = [],
                                    j = !a.once && [],
                                    k = function (f) {
                                        for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++) {
                                            if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                                                b = !1;
                                                break
                                            }
                                        }
                                        d = !1,
                                                i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
                                    },
                                    l = {
                                        add: function () {
                                            if (i) {
                                                var c = i.length;
                                                !
                                                        function f(b) {
                                                            _.each(b,
                                                                    function (b, c) {
                                                                        var d = _.type(c);
                                                                        "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                                                                    })
                                                        }(arguments),
                                                        d ? g = i.length : b && (e = c, k(b))
                                            }
                                            return this
                                        },
                                        remove: function () {
                                            return i && _.each(arguments,
                                                    function (a, b) {
                                                        for (var c; (c = _.inArray(b, i, c)) > -1; ) {
                                                            i.splice(c, 1),
                                                                    d && (g >= c && g--, h >= c && h--)
                                                        }
                                                    }),
                                                    this
                                        },
                                        has: function (a) {
                                            return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
                                        },
                                        empty: function () {
                                            return i = [],
                                                    g = 0,
                                                    this
                                        },
                                        disable: function () {
                                            return i = j = b = void 0,
                                                    this
                                        },
                                        disabled: function () {
                                            return !i
                                        },
                                        lock: function () {
                                            return j = void 0,
                                                    b || l.disable(),
                                                    this
                                        },
                                        locked: function () {
                                            return !j
                                        },
                                        fireWith: function (a, b) {
                                            return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)),
                                                    this
                                        },
                                        fire: function () {
                                            return l.fireWith(this, arguments),
                                                    this
                                        },
                                        fired: function () {
                                            return !!c
                                        }
                                    };
                            return l
                        },
                                _.extend({
                                    Deferred: function (a) {
                                        var b = [["resolve", "done", _.Callbacks("once memory"), "resolved"], ["reject", "fail", _.Callbacks("once memory"), "rejected"], ["notify", "progress", _.Callbacks("memory")]],
                                                c = "pending",
                                                d = {
                                                    state: function () {
                                                        return c
                                                    },
                                                    always: function () {
                                                        return e.done(arguments).fail(arguments),
                                                                this
                                                    },
                                                    then: function () {
                                                        var a = arguments;
                                                        return _.Deferred(function (c) {
                                                            _.each(b,
                                                                    function (b, f) {
                                                                        var g = _.isFunction(a[b]) && a[b];
                                                                        e[f[1]](function () {
                                                                            var a = g && g.apply(this, arguments);
                                                                            a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                                                        })
                                                                    }),
                                                                    a = null
                                                        }).promise()
                                                    },
                                                    promise: function (a) {
                                                        return null != a ? _.extend(a, d) : d
                                                    }
                                                },
                                                e = {};
                                        return d.pipe = d.then,
                                                _.each(b,
                                                        function (a, f) {
                                                            var g = f[2],
                                                                    h = f[3];
                                                            d[f[1]] = g.add,
                                                                    h && g.add(function () {
                                                                        c = h
                                                                    },
                                                                            b[1 ^ a][2].disable, b[2][2].lock),
                                                                    e[f[0]] = function () {
                                                                return e[f[0] + "With"](this === e ? d : this, arguments),
                                                                        this
                                                            },
                                                                    e[f[0] + "With"] = g.fireWith
                                                        }),
                                                d.promise(e),
                                                a && a.call(e, e),
                                                e
                                    },
                                    when: function (a) {
                                        var b, c, d, e = 0,
                                                f = R.call(arguments),
                                                g = f.length,
                                                h = 1 !== g || a && _.isFunction(a.promise) ? g : 0,
                                                i = 1 === h ? a : _.Deferred(),
                                                j = function (a, c, d) {
                                                    return function (e) {
                                                        c[a] = this,
                                                                d[a] = arguments.length > 1 ? R.call(arguments) : e,
                                                                d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                                                    }
                                                };
                                        if (g > 1) {
                                            for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) {
                                                f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h
                                            }
                                        }
                                        return h || i.resolveWith(d, f),
                                                i.promise()
                                    }
                                });
                        var pa;
                        _.fn.ready = function (a) {
                            return _.ready.promise().done(a),
                                    this
                        },
                                _.extend({
                                    isReady: !1,
                                    readyWait: 1,
                                    holdReady: function (a) {
                                        a ? _.readyWait++ : _.ready(!0)
                                    },
                                    ready: function (a) {
                                        (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
                                    }
                                }),
                                _.ready.promise = function (b) {
                                    return pa || (pa = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))),
                                            pa.promise(b)
                                },
                                _.ready.promise();
                        var qa = _.access = function (a, b, c, d, e, f, g) {
                            var h = 0,
                                    i = a.length,
                                    j = null == c;
                            if ("object" === _.type(c)) {
                                e = !0;
                                for (h in c) {
                                    _.access(a, b, h, c[h], !0, f, g)
                                }
                            } else {
                                if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                                    return j.call(_(a), c)
                                })), b)) {
                                    for (; i > h; h++) {
                                        b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)))
                                    }
                                }
                            }
                            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
                        };
                        _.acceptData = function (a) {
                            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
                        },
                                h.uid = 1,
                                h.accepts = _.acceptData,
                                h.prototype = {
                                    key: function (a) {
                                        if (!h.accepts(a)) {
                                            return 0
                                        }
                                        var b = {},
                                                c = a[this.expando];
                                        if (!c) {
                                            c = h.uid++;
                                            try {
                                                b[this.expando] = {
                                                    value: c
                                                },
                                                        Object.defineProperties(a, b)
                                            } catch (d) {
                                                b[this.expando] = c,
                                                        _.extend(a, b)
                                            }
                                        }
                                        return this.cache[c] || (this.cache[c] = {}),
                                                c
                                    },
                                    set: function (a, b, c) {
                                        var d, e = this.key(a),
                                                f = this.cache[e];
                                        if ("string" == typeof b) {
                                            f[b] = c
                                        } else {
                                            if (_.isEmptyObject(f)) {
                                                _.extend(this.cache[e], b)
                                            } else {
                                                for (d in b) {
                                                    f[d] = b[d]
                                                }
                                            }
                                        }
                                        return f
                                    },
                                    get: function (a, b) {
                                        var c = this.cache[this.key(a)];
                                        return void 0 === b ? c : c[b]
                                    },
                                    access: function (a, b, c) {
                                        var d;
                                        return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
                                    },
                                    remove: function (a, b) {
                                        var c, d, e, f = this.key(a),
                                                g = this.cache[f];
                                        if (void 0 === b) {
                                            this.cache[f] = {}
                                        } else {
                                            _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(na) || [])),
                                                    c = d.length;
                                            for (; c--; ) {
                                                delete g[d[c]]
                                            }
                                        }
                                    },
                                    hasData: function (a) {
                                        return !_.isEmptyObject(this.cache[a[this.expando]] || {})
                                    },
                                    discard: function (a) {
                                        a[this.expando] && delete this.cache[a[this.expando]]
                                    }
                                };
                        var ra = new h,
                                sa = new h,
                                ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                                ua = /([A-Z])/g;
                        _.extend({
                            hasData: function (a) {
                                return sa.hasData(a) || ra.hasData(a)
                            },
                            data: function (a, b, c) {
                                return sa.access(a, b, c)
                            },
                            removeData: function (a, b) {
                                sa.remove(a, b)
                            },
                            _data: function (a, b, c) {
                                return ra.access(a, b, c)
                            },
                            _removeData: function (a, b) {
                                ra.remove(a, b)
                            }
                        }),
                                _.fn.extend({
                                    data: function (a, b) {
                                        var c, d, e, f = this[0],
                                                g = f && f.attributes;
                                        if (void 0 === a) {
                                            if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))) {
                                                for (c = g.length; c--; ) {
                                                    g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])))
                                                }
                                                ra.set(f, "hasDataAttrs", !0)
                                            }
                                            return e
                                        }
                                        return "object" == typeof a ? this.each(function () {
                                            sa.set(this, a)
                                        }) : qa(this,
                                                function (b) {
                                                    var c, d = _.camelCase(a);
                                                    if (f && void 0 === b) {
                                                        if (c = sa.get(f, a), void 0 !== c) {
                                                            return c
                                                        }
                                                        if (c = sa.get(f, d), void 0 !== c) {
                                                            return c
                                                        }
                                                        if (c = i(f, d, void 0), void 0 !== c) {
                                                            return c
                                                        }
                                                    } else {
                                                        this.each(function () {
                                                            var c = sa.get(this, d);
                                                            sa.set(this, d, b),
                                                                    -1 !== a.indexOf("-") && void 0 !== c && sa.set(this, a, b)
                                                        })
                                                    }
                                                },
                                                null, b, arguments.length > 1, null, !0)
                                    },
                                    removeData: function (a) {
                                        return this.each(function () {
                                            sa.remove(this, a)
                                        })
                                    }
                                }),
                                _.extend({
                                    queue: function (a, b, c) {
                                        var d;
                                        return a ? (b = (b || "fx") + "queue", d = ra.get(a, b), c && (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
                                    },
                                    dequeue: function (a, b) {
                                        b = b || "fx";
                                        var c = _.queue(a, b),
                                                d = c.length,
                                                e = c.shift(),
                                                f = _._queueHooks(a, b),
                                                g = function () {
                                                    _.dequeue(a, b)
                                                };
                                        "inprogress" === e && (e = c.shift(), d--),
                                                e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)),
                                                !d && f && f.empty.fire()
                                    },
                                    _queueHooks: function (a, b) {
                                        var c = b + "queueHooks";
                                        return ra.get(a, c) || ra.access(a, c, {
                                            empty: _.Callbacks("once memory").add(function () {
                                                ra.remove(a, [b + "queue", c])
                                            })
                                        })
                                    }
                                }),
                                _.fn.extend({
                                    queue: function (a, b) {
                                        var c = 2;
                                        return "string" != typeof a && (b = a, a = "fx", c--),
                                                arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                                            var c = _.queue(this, a, b);
                                            _._queueHooks(this, a),
                                                    "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
                                        })
                                    },
                                    dequeue: function (a) {
                                        return this.each(function () {
                                            _.dequeue(this, a)
                                        })
                                    },
                                    clearQueue: function (a) {
                                        return this.queue(a || "fx", [])
                                    },
                                    promise: function (a, b) {
                                        var c, d = 1,
                                                e = _.Deferred(),
                                                f = this,
                                                g = this.length,
                                                h = function () {
                                                    --d || e.resolveWith(f, [f])
                                                };
                                        for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--; ) {
                                            c = ra.get(f[g], a + "queueHooks"),
                                                    c && c.empty && (d++, c.empty.add(h))
                                        }
                                        return h(),
                                                e.promise(b)
                                    }
                                });
                        var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                                wa = ["Top", "Right", "Bottom", "Left"],
                                xa = function (a, b) {
                                    return a = b || a,
                                            "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
                                },
                                ya = /^(?:checkbox|radio)$/i;
                        !
                                function () {
                                    var a = Z.createDocumentFragment(),
                                            b = a.appendChild(Z.createElement("div")),
                                            c = Z.createElement("input");
                                    c.setAttribute("type", "radio"),
                                            c.setAttribute("checked", "checked"),
                                            c.setAttribute("name", "t"),
                                            b.appendChild(c),
                                            Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
                                            b.innerHTML = "<textarea>x</textarea>",
                                            Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
                                }();
                        var za = "undefined";
                        Y.focusinBubbles = "onfocusin" in a;
                        var Aa = /^key/,
                                Ba = /^(?:mouse|pointer|contextmenu)|click/,
                                Ca = /^(?:focusinfocus|focusoutblur)$/,
                                Da = /^([^.]*)(?:\.(.+)|)$/;
                        _.event = {
                            global: {},
                            add: function (a, b, c, d, e) {
                                var f, g, h, i, j, k, l, m, n, o, p, q = ra.get(a);
                                if (q) {
                                    for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
                                        return typeof _ !== za && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
                                    }), b = (b || "").match(na) || [""], j = b.length; j--; ) {
                                        h = Da.exec(b[j]) || [],
                                                n = p = h[1],
                                                o = (h[2] || "").split(".").sort(),
                                                n && (l = _.event.special[n] || {},
                                                        n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {},
                                                        k = _.extend({
                                                            type: n,
                                                            origType: p,
                                                            data: d,
                                                            handler: c,
                                                            guid: c.guid,
                                                            selector: e,
                                                            needsContext: e && _.expr.match.needsContext.test(e),
                                                            namespace: o.join(".")
                                                        },
                                                                f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
                                    }
                                }
                            },
                            remove: function (a, b, c, d, e) {
                                var f, g, h, i, j, k, l, m, n, o, p, q = ra.hasData(a) && ra.get(a);
                                if (q && (i = q.events)) {
                                    for (b = (b || "").match(na) || [""], j = b.length; j--; ) {
                                        if (h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                                            for (l = _.event.special[n] || {},
                                                    n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--; ) {
                                                k = m[f],
                                                        !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k))
                                            }
                                            g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
                                        } else {
                                            for (n in i) {
                                                _.event.remove(a, n + b[j], c, d, !0)
                                            }
                                        }
                                    }
                                    _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"))
                                }
                            },
                            trigger: function (b, c, d, e) {
                                var f, g, h, i, j, k, l, m = [d || Z],
                                        n = X.call(b, "type") ? b.type : b,
                                        o = X.call(b, "namespace") ? b.namespace.split(".") : [];
                                if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {},
                                        e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                                    if (!e && !l.noBubble && !_.isWindow(d)) {
                                        for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode) {
                                            m.push(g),
                                                    h = g
                                        }
                                        h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
                                    }
                                    for (f = 0; (g = m[f++]) && !b.isPropagationStopped(); ) {
                                        b.type = f > 1 ? i : l.bindType || n,
                                                k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle"),
                                                k && k.apply(g, c),
                                                k = j && g[j],
                                                k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault())
                                    }
                                    return b.type = n,
                                            e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)),
                                            b.result
                                }
                            },
                            dispatch: function (a) {
                                a = _.event.fix(a);
                                var b, c, d, e, f, g = [],
                                        h = R.call(arguments),
                                        i = (ra.get(this, "events") || {})[a.type] || [],
                                        j = _.event.special[a.type] || {};
                                if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                                    for (g = _.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped(); ) {
                                        for (a.currentTarget = e.elem, c = 0; (f = e.handlers[c++]) && !a.isImmediatePropagationStopped(); ) {
                                            (!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                                        }
                                    }
                                    return j.postDispatch && j.postDispatch.call(this, a),
                                            a.result
                                }
                            },
                            handlers: function (a, b) {
                                var c, d, e, f, g = [],
                                        h = b.delegateCount,
                                        i = a.target;
                                if (h && i.nodeType && (!a.button || "click" !== a.type)) {
                                    for (; i !== this; i = i.parentNode || this) {
                                        if (i.disabled !== !0 || "click" !== a.type) {
                                            for (d = [], c = 0; h > c; c++) {
                                                f = b[c],
                                                        e = f.selector + " ",
                                                        void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length),
                                                        d[e] && d.push(f)
                                            }
                                            d.length && g.push({
                                                elem: i,
                                                handlers: d
                                            })
                                        }
                                    }
                                }
                                return h < b.length && g.push({
                                    elem: this,
                                    handlers: b.slice(h)
                                }),
                                        g
                            },
                            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                            fixHooks: {},
                            keyHooks: {
                                props: "char charCode key keyCode".split(" "),
                                filter: function (a, b) {
                                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                                            a
                                }
                            },
                            mouseHooks: {
                                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                                filter: function (a, b) {
                                    var c, d, e, f = b.button;
                                    return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)),
                                            a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                                            a
                                }
                            },
                            fix: function (a) {
                                if (a[_.expando]) {
                                    return a
                                }
                                var b, c, d, e = a.type,
                                        f = a,
                                        g = this.fixHooks[e];
                                for (g || (this.fixHooks[e] = g = Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--; ) {
                                    c = d[b],
                                            a[c] = f[c]
                                }
                                return a.target || (a.target = Z),
                                        3 === a.target.nodeType && (a.target = a.target.parentNode),
                                        g.filter ? g.filter(a, f) : a
                            },
                            special: {
                                load: {
                                    noBubble: !0
                                },
                                focus: {
                                    trigger: function () {
                                        return this !== l() && this.focus ? (this.focus(), !1) : void 0
                                    },
                                    delegateType: "focusin"
                                },
                                blur: {
                                    trigger: function () {
                                        return this === l() && this.blur ? (this.blur(), !1) : void 0
                                    },
                                    delegateType: "focusout"
                                },
                                click: {
                                    trigger: function () {
                                        return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
                                    },
                                    _default: function (a) {
                                        return _.nodeName(a.target, "a")
                                    }
                                },
                                beforeunload: {
                                    postDispatch: function (a) {
                                        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                                    }
                                }
                            },
                            simulate: function (a, b, c, d) {
                                var e = _.extend(new _.Event, c, {
                                    type: a,
                                    isSimulated: !0,
                                    originalEvent: {}
                                });
                                d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e),
                                        e.isDefaultPrevented() && c.preventDefault()
                            }
                        },
                                _.removeEvent = function (a, b, c) {
                                    a.removeEventListener && a.removeEventListener(b, c, !1)
                                },
                                _.Event = function (a, b) {
                                    return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b)
                                },
                                _.Event.prototype = {
                                    isDefaultPrevented: k,
                                    isPropagationStopped: k,
                                    isImmediatePropagationStopped: k,
                                    preventDefault: function () {
                                        var a = this.originalEvent;
                                        this.isDefaultPrevented = j,
                                                a && a.preventDefault && a.preventDefault()
                                    },
                                    stopPropagation: function () {
                                        var a = this.originalEvent;
                                        this.isPropagationStopped = j,
                                                a && a.stopPropagation && a.stopPropagation()
                                    },
                                    stopImmediatePropagation: function () {
                                        var a = this.originalEvent;
                                        this.isImmediatePropagationStopped = j,
                                                a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
                                                this.stopPropagation()
                                    }
                                },
                                _.each({
                                    mouseenter: "mouseover",
                                    mouseleave: "mouseout",
                                    pointerenter: "pointerover",
                                    pointerleave: "pointerout"
                                },
                                        function (a, b) {
                                            _.event.special[a] = {
                                                delegateType: b,
                                                bindType: b,
                                                handle: function (a) {
                                                    var c, d = this,
                                                            e = a.relatedTarget,
                                                            f = a.handleObj;
                                                    return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b),
                                                            c
                                                }
                                            }
                                        }),
                                Y.focusinBubbles || _.each({
                                    focus: "focusin",
                                    blur: "focusout"
                                },
                                        function (a, b) {
                                            var c = function (a) {
                                                _.event.simulate(b, a.target, _.event.fix(a), !0)
                                            };
                                            _.event.special[b] = {
                                                setup: function () {
                                                    var d = this.ownerDocument || this,
                                                            e = ra.access(d, b);
                                                    e || d.addEventListener(a, c, !0),
                                                            ra.access(d, b, (e || 0) + 1)
                                                },
                                                teardown: function () {
                                                    var d = this.ownerDocument || this,
                                                            e = ra.access(d, b) - 1;
                                                    e ? ra.access(d, b, e) : (d.removeEventListener(a, c, !0), ra.remove(d, b))
                                                }
                                            }
                                        }),
                                _.fn.extend({
                                    on: function (a, b, c, d, e) {
                                        var f, g;
                                        if ("object" == typeof a) {
                                            "string" != typeof b && (c = c || b, b = void 0);
                                            for (g in a) {
                                                this.on(g, b, c, a[g], e)
                                            }
                                            return this
                                        }
                                        if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) {
                                            d = k
                                        } else {
                                            if (!d) {
                                                return this
                                            }
                                        }
                                        return 1 === e && (f = d, d = function (a) {
                                            return _().off(a),
                                                    f.apply(this, arguments)
                                        },
                                                d.guid = f.guid || (f.guid = _.guid++)),
                                                this.each(function () {
                                                    _.event.add(this, a, d, c, b)
                                                })
                                    },
                                    one: function (a, b, c, d) {
                                        return this.on(a, b, c, d, 1)
                                    },
                                    off: function (a, b, c) {
                                        var d, e;
                                        if (a && a.preventDefault && a.handleObj) {
                                            return d = a.handleObj,
                                                    _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                                                    this
                                        }
                                        if ("object" == typeof a) {
                                            for (e in a) {
                                                this.off(e, b, a[e])
                                            }
                                            return this
                                        }
                                        return (b === !1 || "function" == typeof b) && (c = b, b = void 0),
                                                c === !1 && (c = k),
                                                this.each(function () {
                                                    _.event.remove(this, a, c, b)
                                                })
                                    },
                                    trigger: function (a, b) {
                                        return this.each(function () {
                                            _.event.trigger(a, b, this)
                                        })
                                    },
                                    triggerHandler: function (a, b) {
                                        var c = this[0];
                                        return c ? _.event.trigger(a, b, c, !0) : void 0
                                    }
                                });
                        var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                                Fa = /<([\w:]+)/,
                                Ga = /<|&#?\w+;/,
                                Ha = /<(?:script|style|link)/i,
                                Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
                                Ja = /^$|\/(?:java|ecma)script/i,
                                Ka = /^true\/(.*)/,
                                La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                                Ma = {
                                    option: [1, "<select multiple='multiple'>", "</select>"],
                                    thead: [1, "<table>", "</table>"],
                                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                                    tr: [2, "<table><tbody>", "</tbody></table>"],
                                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                                    _default: [0, "", ""]
                                };
                        Ma.optgroup = Ma.option,
                                Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead,
                                Ma.th = Ma.td,
                                _.extend({
                                    clone: function (a, b, c) {
                                        var d, e, f, g, h = a.cloneNode(!0),
                                                i = _.contains(a.ownerDocument, a);
                                        if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a))) {
                                            for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) {
                                                s(f[d], g[d])
                                            }
                                        }
                                        if (b) {
                                            if (c) {
                                                for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) {
                                                    q(f[d], g[d])
                                                }
                                            } else {
                                                q(a, h)
                                            }
                                        }
                                        return g = r(h, "script"),
                                                g.length > 0 && p(g, !i && r(a, "script")),
                                                h
                                    },
                                    buildFragment: function (a, b, c, d) {
                                        for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++) {
                                            if (e = a[m], e || 0 === e) {
                                                if ("object" === _.type(e)) {
                                                    _.merge(l, e.nodeType ? [e] : e)
                                                } else {
                                                    if (Ga.test(e)) {
                                                        for (f = f || k.appendChild(b.createElement("div")), g = (Fa.exec(e) || ["", ""])[1].toLowerCase(), h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2], j = h[0]; j--; ) {
                                                            f = f.lastChild
                                                        }
                                                        _.merge(l, f.childNodes),
                                                                f = k.firstChild,
                                                                f.textContent = ""
                                                    } else {
                                                        l.push(b.createTextNode(e))
                                                    }
                                                }
                                            }
                                        }
                                        for (k.textContent = "", m = 0; e = l[m++]; ) {
                                            if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c)) {
                                                for (j = 0; e = f[j++]; ) {
                                                    Ja.test(e.type || "") && c.push(e)
                                                }
                                            }
                                        }
                                        return k
                                    },
                                    cleanData: function (a) {
                                        for (var b, c, d, e, f = _.event.special,
                                                g = 0; void 0 !== (c = a[g]); g++) {
                                            if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e]))) {
                                                if (b.events) {
                                                    for (d in b.events) {
                                                        f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle)
                                                    }
                                                }
                                                ra.cache[e] && delete ra.cache[e]
                                            }
                                            delete sa.cache[c[sa.expando]]
                                        }
                                    }
                                }),
                                _.fn.extend({
                                    text: function (a) {
                                        return qa(this,
                                                function (a) {
                                                    return void 0 === a ? _.text(this) : this.empty().each(function () {
                                                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                                                    })
                                                },
                                                null, a, arguments.length)
                                    },
                                    append: function () {
                                        return this.domManip(arguments,
                                                function (a) {
                                                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                                        var b = m(this, a);
                                                        b.appendChild(a)
                                                    }
                                                })
                                    },
                                    prepend: function () {
                                        return this.domManip(arguments,
                                                function (a) {
                                                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                                        var b = m(this, a);
                                                        b.insertBefore(a, b.firstChild)
                                                    }
                                                })
                                    },
                                    before: function () {
                                        return this.domManip(arguments,
                                                function (a) {
                                                    this.parentNode && this.parentNode.insertBefore(a, this)
                                                })
                                    },
                                    after: function () {
                                        return this.domManip(arguments,
                                                function (a) {
                                                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                                                })
                                    },
                                    remove: function (a, b) {
                                        for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) {
                                            b || 1 !== c.nodeType || _.cleanData(r(c)),
                                                    c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c))
                                        }
                                        return this
                                    },
                                    empty: function () {
                                        for (var a, b = 0; null != (a = this[b]); b++) {
                                            1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "")
                                        }
                                        return this
                                    },
                                    clone: function (a, b) {
                                        return a = null == a ? !1 : a,
                                                b = null == b ? a : b,
                                                this.map(function () {
                                                    return _.clone(this, a, b)
                                                })
                                    },
                                    html: function (a) {
                                        return qa(this,
                                                function (a) {
                                                    var b = this[0] || {},
                                                            c = 0,
                                                            d = this.length;
                                                    if (void 0 === a && 1 === b.nodeType) {
                                                        return b.innerHTML
                                                    }
                                                    if ("string" == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]) {
                                                        a = a.replace(Ea, "<$1></$2>");
                                                        try {
                                                            for (; d > c; c++) {
                                                                b = this[c] || {},
                                                                        1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a)
                                                            }
                                                            b = 0
                                                        } catch (e) {
                                                        }
                                                    }
                                                    b && this.empty().append(a)
                                                },
                                                null, a, arguments.length)
                                    },
                                    replaceWith: function () {
                                        var a = arguments[0];
                                        return this.domManip(arguments,
                                                function (b) {
                                                    a = this.parentNode,
                                                            _.cleanData(r(this)),
                                                            a && a.replaceChild(b, this)
                                                }),
                                                a && (a.length || a.nodeType) ? this : this.remove()
                                    },
                                    detach: function (a) {
                                        return this.remove(a, !0)
                                    },
                                    domManip: function (a, b) {
                                        a = S.apply([], a);
                                        var c, d, e, f, g, h, i = 0,
                                                j = this.length,
                                                k = this,
                                                l = j - 1,
                                                m = a[0],
                                                p = _.isFunction(m);
                                        if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m)) {
                                            return this.each(function (c) {
                                                var d = k.eq(c);
                                                p && (a[0] = m.call(this, c, d.html())),
                                                        d.domManip(a, b)
                                            })
                                        }
                                        if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                                            for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) {
                                                g = c,
                                                        i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))),
                                                        b.call(this[i], g, i)
                                            }
                                            if (f) {
                                                for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) {
                                                    g = e[i],
                                                            Ja.test(g.type || "") && !ra.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(La, "")))
                                                }
                                            }
                                        }
                                        return this
                                    }
                                }),
                                _.each({
                                    appendTo: "append",
                                    prependTo: "prepend",
                                    insertBefore: "before",
                                    insertAfter: "after",
                                    replaceAll: "replaceWith"
                                },
                                        function (a, b) {
                                            _.fn[a] = function (a) {
                                                for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) {
                                                    c = g === f ? this : this.clone(!0),
                                                            _(e[g])[b](c),
                                                            T.apply(d, c.get())
                                                }
                                                return this.pushStack(d)
                                            }
                                        });
                        var Na, Oa = {},
                                Pa = /^margin/,
                                Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"),
                                Ra = function (b) {
                                    return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
                                };
                        !
                                function () {
                                    function b() {
                                        g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                                                g.innerHTML = "",
                                                e.appendChild(f);
                                        var b = a.getComputedStyle(g, null);
                                        c = "1%" !== b.top,
                                                d = "4px" === b.width,
                                                e.removeChild(f)
                                    }
                                    var c, d, e = Z.documentElement,
                                            f = Z.createElement("div"),
                                            g = Z.createElement("div");
                                    g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {
                                        pixelPosition: function () {
                                            return b(),
                                                    c
                                        },
                                        boxSizingReliable: function () {
                                            return null == d && b(),
                                                    d
                                        },
                                        reliableMarginRight: function () {
                                            var b, c = g.appendChild(Z.createElement("div"));
                                            return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                                                    c.style.marginRight = c.style.width = "0",
                                                    g.style.width = "1px",
                                                    e.appendChild(f),
                                                    b = !parseFloat(a.getComputedStyle(c, null).marginRight),
                                                    e.removeChild(f),
                                                    g.removeChild(c),
                                                    b
                                        }
                                    }))
                                }(),
                                _.swap = function (a, b, c, d) {
                                    var e, f, g = {};
                                    for (f in b) {
                                        g[f] = a.style[f],
                                                a.style[f] = b[f]
                                    }
                                    e = c.apply(a, d || []);
                                    for (f in b) {
                                        a.style[f] = g[f]
                                    }
                                    return e
                                };
                        var Sa = /^(none|table(?!-c[ea]).+)/,
                                Ta = new RegExp("^(" + va + ")(.*)$", "i"),
                                Ua = new RegExp("^([+-])=(" + va + ")", "i"),
                                Va = {
                                    position: "absolute",
                                    visibility: "hidden",
                                    display: "block"
                                },
                                Wa = {
                                    letterSpacing: "0",
                                    fontWeight: "400"
                                },
                                Xa = ["Webkit", "O", "Moz", "ms"];
                        _.extend({
                            cssHooks: {
                                opacity: {
                                    get: function (a, b) {
                                        if (b) {
                                            var c = v(a, "opacity");
                                            return "" === c ? "1" : c
                                        }
                                    }
                                }
                            },
                            cssNumber: {
                                columnCount: !0,
                                fillOpacity: !0,
                                flexGrow: !0,
                                flexShrink: !0,
                                fontWeight: !0,
                                lineHeight: !0,
                                opacity: !0,
                                order: !0,
                                orphans: !0,
                                widows: !0,
                                zIndex: !0,
                                zoom: !0
                            },
                            cssProps: {
                                "float": "cssFloat"
                            },
                            style: function (a, b, c, d) {
                                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                                    var e, f, g, h = _.camelCase(b),
                                            i = a.style;
                                    return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)),
                                            g = _.cssHooks[b] || _.cssHooks[h],
                                            void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
                                }
                            },
                            css: function (a, b, c, d) {
                                var e, f, g, h = _.camelCase(b);
                                return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)),
                                        g = _.cssHooks[b] || _.cssHooks[h],
                                        g && "get" in g && (e = g.get(a, !0, c)),
                                        void 0 === e && (e = v(a, b, d)),
                                        "normal" === e && b in Wa && (e = Wa[b]),
                                        "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
                            }
                        }),
                                _.each(["height", "width"],
                                        function (a, b) {
                                            _.cssHooks[b] = {
                                                get: function (a, c, d) {
                                                    return c ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Va,
                                                            function () {
                                                                return A(a, b, d)
                                                            }) : A(a, b, d) : void 0
                                                },
                                                set: function (a, c, d) {
                                                    var e = d && Ra(a);
                                                    return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
                                                }
                                            }
                                        }),
                                _.cssHooks.marginRight = w(Y.reliableMarginRight,
                                        function (a, b) {
                                            return b ? _.swap(a, {
                                                display: "inline-block"
                                            },
                                                    v, [a, "marginRight"]) : void 0
                                        }),
                                _.each({
                                    margin: "",
                                    padding: "",
                                    border: "Width"
                                },
                                        function (a, b) {
                                            _.cssHooks[a + b] = {
                                                expand: function (c) {
                                                    for (var d = 0,
                                                            e = {},
                                                            f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
                                                        e[a + wa[d] + b] = f[d] || f[d - 2] || f[0]
                                                    }
                                                    return e
                                                }
                                            },
                                                    Pa.test(a) || (_.cssHooks[a + b].set = y)
                                        }),
                                _.fn.extend({
                                    css: function (a, b) {
                                        return qa(this,
                                                function (a, b, c) {
                                                    var d, e, f = {},
                                                            g = 0;
                                                    if (_.isArray(b)) {
                                                        for (d = Ra(a), e = b.length; e > g; g++) {
                                                            f[b[g]] = _.css(a, b[g], !1, d)
                                                        }
                                                        return f
                                                    }
                                                    return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
                                                },
                                                a, b, arguments.length > 1)
                                    },
                                    show: function () {
                                        return B(this, !0)
                                    },
                                    hide: function () {
                                        return B(this)
                                    },
                                    toggle: function (a) {
                                        return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                                            xa(this) ? _(this).show() : _(this).hide()
                                        })
                                    }
                                }),
                                _.Tween = C,
                                C.prototype = {
                                    constructor: C,
                                    init: function (a, b, c, d, e, f) {
                                        this.elem = a,
                                                this.prop = c,
                                                this.easing = e || "swing",
                                                this.options = b,
                                                this.start = this.now = this.cur(),
                                                this.end = d,
                                                this.unit = f || (_.cssNumber[c] ? "" : "px")
                                    },
                                    cur: function () {
                                        var a = C.propHooks[this.prop];
                                        return a && a.get ? a.get(this) : C.propHooks._default.get(this)
                                    },
                                    run: function (a) {
                                        var b, c = C.propHooks[this.prop];
                                        return this.options.duration ? this.pos = b = _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
                                                this.now = (this.end - this.start) * b + this.start,
                                                this.options.step && this.options.step.call(this.elem, this.now, this),
                                                c && c.set ? c.set(this) : C.propHooks._default.set(this),
                                                this
                                    }
                                },
                                C.prototype.init.prototype = C.prototype,
                                C.propHooks = {
                                    _default: {
                                        get: function (a) {
                                            var b;
                                            return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
                                        },
                                        set: function (a) {
                                            _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                                        }
                                    }
                                },
                                C.propHooks.scrollTop = C.propHooks.scrollLeft = {
                                    set: function (a) {
                                        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
                                    }
                                },
                                _.easing = {
                                    linear: function (a) {
                                        return a
                                    },
                                    swing: function (a) {
                                        return 0.5 - Math.cos(a * Math.PI) / 2
                                    }
                                },
                                _.fx = C.prototype.init,
                                _.fx.step = {};
                        var Ya, Za, $a = /^(?:toggle|show|hide)$/,
                                _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
                                ab = /queueHooks$/,
                                bb = [G],
                                cb = {
                                    "*": [function (a, b) {
                                            var c = this.createTween(a, b),
                                                    d = c.cur(),
                                                    e = _a.exec(b),
                                                    f = e && e[3] || (_.cssNumber[a] ? "" : "px"),
                                                    g = (_.cssNumber[a] || "px" !== f && +d) && _a.exec(_.css(c.elem, a)),
                                                    h = 1,
                                                    i = 20;
                                            if (g && g[3] !== f) {
                                                f = f || g[3],
                                                        e = e || [],
                                                        g = +d || 1;
                                                do {
                                                    h = h || ".5", g /= h, _.style(c.elem, a, g + f)
                                                } while (h !== (h = c.cur() / d) && 1 !== h && --i)
                                            }
                                            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
                                                    c
                                        }]
                                };
                        _.Animation = _.extend(I, {
                            tweener: function (a, b) {
                                _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                                for (var c, d = 0,
                                        e = a.length; e > d; d++) {
                                    c = a[d],
                                            cb[c] = cb[c] || [],
                                            cb[c].unshift(b)
                                }
                            },
                            prefilter: function (a, b) {
                                b ? bb.unshift(a) : bb.push(a)
                            }
                        }),
                                _.speed = function (a, b, c) {
                                    var d = a && "object" == typeof a ? _.extend({},
                                            a) : {
                                        complete: c || !c && b || _.isFunction(a) && a,
                                        duration: a,
                                        easing: c && b || b && !_.isFunction(b) && b
                                    };
                                    return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default,
                                            (null == d.queue || d.queue === !0) && (d.queue = "fx"),
                                            d.old = d.complete,
                                            d.complete = function () {
                                                _.isFunction(d.old) && d.old.call(this),
                                                        d.queue && _.dequeue(this, d.queue)
                                            },
                                            d
                                },
                                _.fn.extend({
                                    fadeTo: function (a, b, c, d) {
                                        return this.filter(xa).css("opacity", 0).show().end().animate({
                                            opacity: b
                                        },
                                                a, c, d)
                                    },
                                    animate: function (a, b, c, d) {
                                        var e = _.isEmptyObject(a),
                                                f = _.speed(b, c, d),
                                                g = function () {
                                                    var b = I(this, _.extend({},
                                                            a), f);
                                                    (e || ra.get(this, "finish")) && b.stop(!0)
                                                };
                                        return g.finish = g,
                                                e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                                    },
                                    stop: function (a, b, c) {
                                        var d = function (a) {
                                            var b = a.stop;
                                            delete a.stop,
                                                    b(c)
                                        };
                                        return "string" != typeof a && (c = b, b = a, a = void 0),
                                                b && a !== !1 && this.queue(a || "fx", []),
                                                this.each(function () {
                                                    var b = !0,
                                                            e = null != a && a + "queueHooks",
                                                            f = _.timers,
                                                            g = ra.get(this);
                                                    if (e) {
                                                        g[e] && g[e].stop && d(g[e])
                                                    } else {
                                                        for (e in g) {
                                                            g[e] && g[e].stop && ab.test(e) && d(g[e])
                                                        }
                                                    }
                                                    for (e = f.length; e--; ) {
                                                        f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1))
                                                    }
                                                    (b || !c) && _.dequeue(this, a)
                                                })
                                    },
                                    finish: function (a) {
                                        return a !== !1 && (a = a || "fx"),
                                                this.each(function () {
                                                    var b, c = ra.get(this),
                                                            d = c[a + "queue"],
                                                            e = c[a + "queueHooks"],
                                                            f = _.timers,
                                                            g = d ? d.length : 0;
                                                    for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--; ) {
                                                        f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1))
                                                    }
                                                    for (b = 0; g > b; b++) {
                                                        d[b] && d[b].finish && d[b].finish.call(this)
                                                    }
                                                    delete c.finish
                                                })
                                    }
                                }),
                                _.each(["toggle", "show", "hide"],
                                        function (a, b) {
                                            var c = _.fn[b];
                                            _.fn[b] = function (a, d, e) {
                                                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
                                            }
                                        }),
                                _.each({
                                    slideDown: E("show"),
                                    slideUp: E("hide"),
                                    slideToggle: E("toggle"),
                                    fadeIn: {
                                        opacity: "show"
                                    },
                                    fadeOut: {
                                        opacity: "hide"
                                    },
                                    fadeToggle: {
                                        opacity: "toggle"
                                    }
                                },
                                        function (a, b) {
                                            _.fn[a] = function (a, c, d) {
                                                return this.animate(b, a, c, d)
                                            }
                                        }),
                                _.timers = [],
                                _.fx.tick = function () {
                                    var a, b = 0,
                                            c = _.timers;
                                    for (Ya = _.now(); b < c.length; b++) {
                                        a = c[b],
                                                a() || c[b] !== a || c.splice(b--, 1)
                                    }
                                    c.length || _.fx.stop(),
                                            Ya = void 0
                                },
                                _.fx.timer = function (a) {
                                    _.timers.push(a),
                                            a() ? _.fx.start() : _.timers.pop()
                                },
                                _.fx.interval = 13,
                                _.fx.start = function () {
                                    Za || (Za = setInterval(_.fx.tick, _.fx.interval))
                                },
                                _.fx.stop = function () {
                                    clearInterval(Za),
                                            Za = null
                                },
                                _.fx.speeds = {
                                    slow: 600,
                                    fast: 200,
                                    _default: 400
                                },
                                _.fn.delay = function (a, b) {
                                    return a = _.fx ? _.fx.speeds[a] || a : a,
                                            b = b || "fx",
                                            this.queue(b,
                                                    function (b, c) {
                                                        var d = setTimeout(b, a);
                                                        c.stop = function () {
                                                            clearTimeout(d)
                                                        }
                                                    })
                                },
                                function () {
                                    var a = Z.createElement("input"),
                                            b = Z.createElement("select"),
                                            c = b.appendChild(Z.createElement("option"));
                                    a.type = "checkbox",
                                            Y.checkOn = "" !== a.value,
                                            Y.optSelected = c.selected,
                                            b.disabled = !0,
                                            Y.optDisabled = !c.disabled,
                                            a = Z.createElement("input"),
                                            a.value = "t",
                                            a.type = "radio",
                                            Y.radioValue = "t" === a.value
                                }();
                        var db, eb, fb = _.expr.attrHandle;
                        _.fn.extend({
                            attr: function (a, b) {
                                return qa(this, _.attr, a, b, arguments.length > 1)
                            },
                            removeAttr: function (a) {
                                return this.each(function () {
                                    _.removeAttr(this, a)
                                })
                            }
                        }),
                                _.extend({
                                    attr: function (a, b, c) {
                                        var d, e, f = a.nodeType;
                                        if (a && 3 !== f && 8 !== f && 2 !== f) {
                                            return typeof a.getAttribute === za ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b))
                                        }
                                    },
                                    removeAttr: function (a, b) {
                                        var c, d, e = 0,
                                                f = b && b.match(na);
                                        if (f && 1 === a.nodeType) {
                                            for (; c = f[e++]; ) {
                                                d = _.propFix[c] || c,
                                                        _.expr.match.bool.test(c) && (a[d] = !1),
                                                        a.removeAttribute(c)
                                            }
                                        }
                                    },
                                    attrHooks: {
                                        type: {
                                            set: function (a, b) {
                                                if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                                                    var c = a.value;
                                                    return a.setAttribute("type", b),
                                                            c && (a.value = c),
                                                            b
                                                }
                                            }
                                        }
                                    }
                                }),
                                eb = {
                                    set: function (a, b, c) {
                                        return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c),
                                                c
                                    }
                                },
                                _.each(_.expr.match.bool.source.match(/\w+/g),
                                        function (a, b) {
                                            var c = fb[b] || _.find.attr;
                                            fb[b] = function (a, b, d) {
                                                var e, f;
                                                return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fb[b] = f),
                                                        e
                                            }
                                        });
                        var gb = /^(?:input|select|textarea|button)$/i;
                        _.fn.extend({
                            prop: function (a, b) {
                                return qa(this, _.prop, a, b, arguments.length > 1)
                            },
                            removeProp: function (a) {
                                return this.each(function () {
                                    delete this[_.propFix[a] || a]
                                })
                            }
                        }),
                                _.extend({
                                    propFix: {
                                        "for": "htmlFor",
                                        "class": "className"
                                    },
                                    prop: function (a, b, c) {
                                        var d, e, f, g = a.nodeType;
                                        if (a && 3 !== g && 8 !== g && 2 !== g) {
                                            return f = 1 !== g || !_.isXMLDoc(a),
                                                    f && (b = _.propFix[b] || b, e = _.propHooks[b]),
                                                    void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
                                        }
                                    },
                                    propHooks: {
                                        tabIndex: {
                                            get: function (a) {
                                                return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href ? a.tabIndex : -1
                                            }
                                        }
                                    }
                                }),
                                Y.optSelected || (_.propHooks.selected = {
                                    get: function (a) {
                                        var b = a.parentNode;
                                        return b && b.parentNode && b.parentNode.selectedIndex,
                                                null
                                    }
                                }),
                                _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
                                        function () {
                                            _.propFix[this.toLowerCase()] = this
                                        });
                        var hb = /[\t\r\n\f]/g;
                        _.fn.extend({
                            addClass: function (a) {
                                var b, c, d, e, f, g, h = "string" == typeof a && a,
                                        i = 0,
                                        j = this.length;
                                if (_.isFunction(a)) {
                                    return this.each(function (b) {
                                        _(this).addClass(a.call(this, b, this.className))
                                    })
                                }
                                if (h) {
                                    for (b = (a || "").match(na) || []; j > i; i++) {
                                        if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : " ")) {
                                            for (f = 0; e = b[f++]; ) {
                                                d.indexOf(" " + e + " ") < 0 && (d += e + " ")
                                            }
                                            g = _.trim(d),
                                                    c.className !== g && (c.className = g)
                                        }
                                    }
                                }
                                return this
                            },
                            removeClass: function (a) {
                                var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                                        i = 0,
                                        j = this.length;
                                if (_.isFunction(a)) {
                                    return this.each(function (b) {
                                        _(this).removeClass(a.call(this, b, this.className))
                                    })
                                }
                                if (h) {
                                    for (b = (a || "").match(na) || []; j > i; i++) {
                                        if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : "")) {
                                            for (f = 0; e = b[f++]; ) {
                                                for (; d.indexOf(" " + e + " ") >= 0; ) {
                                                    d = d.replace(" " + e + " ", " ")
                                                }
                                            }
                                            g = a ? _.trim(d) : "",
                                                    c.className !== g && (c.className = g)
                                        }
                                    }
                                }
                                return this
                            },
                            toggleClass: function (a, b) {
                                var c = typeof a;
                                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : _.isFunction(a) ? this.each(function (c) {
                                    _(this).toggleClass(a.call(this, c, this.className, b), b)
                                }) : this.each(function () {
                                    if ("string" === c) {
                                        for (var b, d = 0,
                                                e = _(this), f = a.match(na) || []; b = f[d++]; ) {
                                            e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                                        }
                                    } else {
                                        (c === za || "boolean" === c) && (this.className && ra.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ra.get(this, "__className__") || "")
                                    }
                                })
                            },
                            hasClass: function (a) {
                                for (var b = " " + a + " ",
                                        c = 0,
                                        d = this.length; d > c; c++) {
                                    if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0) {
                                        return !0
                                    }
                                }
                                return !1
                            }
                        });
                        var ib = /\r/g;
                        _.fn.extend({
                            val: function (a) {
                                var b, c, d, e = this[0];
                                if (arguments.length) {
                                    return d = _.isFunction(a),
                                            this.each(function (c) {
                                                var e;
                                                1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e,
                                                        function (a) {
                                                            return null == a ? "" : a + ""
                                                        })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                                            })
                                }
                                if (e) {
                                    return b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()],
                                            b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)
                                }
                            }
                        }),
                                _.extend({
                                    valHooks: {
                                        option: {
                                            get: function (a) {
                                                var b = _.find.attr(a, "value");
                                                return null != b ? b : _.trim(_.text(a))
                                            }
                                        },
                                        select: {
                                            get: function (a) {
                                                for (var b, c, d = a.options,
                                                        e = a.selectedIndex,
                                                        f = "select-one" === a.type || 0 > e,
                                                        g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
                                                    if (c = d[i], (c.selected || i === e) && (Y.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !_.nodeName(c.parentNode, "optgroup"))) {
                                                        if (b = _(c).val(), f) {
                                                            return b
                                                        }
                                                        g.push(b)
                                                    }
                                                }
                                                return g
                                            },
                                            set: function (a, b) {
                                                for (var c, d, e = a.options,
                                                        f = _.makeArray(b), g = e.length; g--; ) {
                                                    d = e[g],
                                                            (d.selected = _.inArray(d.value, f) >= 0) && (c = !0)
                                                }
                                                return c || (a.selectedIndex = -1),
                                                        f
                                            }
                                        }
                                    }
                                }),
                                _.each(["radio", "checkbox"],
                                        function () {
                                            _.valHooks[this] = {
                                                set: function (a, b) {
                                                    return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
                                                }
                                            },
                                                    Y.checkOn || (_.valHooks[this].get = function (a) {
                                                        return null === a.getAttribute("value") ? "on" : a.value
                                                    })
                                        }),
                                _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
                                        function (a, b) {
                                            _.fn[b] = function (a, c) {
                                                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
                                            }
                                        }),
                                _.fn.extend({
                                    hover: function (a, b) {
                                        return this.mouseenter(a).mouseleave(b || a)
                                    },
                                    bind: function (a, b, c) {
                                        return this.on(a, null, b, c)
                                    },
                                    unbind: function (a, b) {
                                        return this.off(a, null, b)
                                    },
                                    delegate: function (a, b, c, d) {
                                        return this.on(b, a, c, d)
                                    },
                                    undelegate: function (a, b, c) {
                                        return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
                                    }
                                });
                        var jb = _.now(),
                                kb = /\?/;
                        _.parseJSON = function (a) {
                            return JSON.parse(a + "")
                        },
                                _.parseXML = function (a) {
                                    var b, c;
                                    if (!a || "string" != typeof a) {
                                        return null
                                    }
                                    try {
                                        c = new DOMParser,
                                                b = c.parseFromString(a, "text/xml")
                                    } catch (d) {
                                        b = void 0
                                    }
                                    return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a),
                                            b
                                };
                        var lb = /#.*$/,
                                mb = /([?&])_=[^&]*/,
                                nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                                ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                                pb = /^(?:GET|HEAD)$/,
                                qb = /^\/\//,
                                rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
                                sb = {},
                                tb = {},
                                ub = "*/".concat("*"),
                                vb = a.location.href,
                                wb = rb.exec(vb.toLowerCase()) || [];
                        _.extend({
                            active: 0,
                            lastModified: {},
                            etag: {},
                            ajaxSettings: {
                                url: vb,
                                type: "GET",
                                isLocal: ob.test(wb[1]),
                                global: !0,
                                processData: !0,
                                async: !0,
                                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                                accepts: {
                                    "*": ub,
                                    text: "text/plain",
                                    html: "text/html",
                                    xml: "application/xml, text/xml",
                                    json: "application/json, text/javascript"
                                },
                                contents: {
                                    xml: /xml/,
                                    html: /html/,
                                    json: /json/
                                },
                                responseFields: {
                                    xml: "responseXML",
                                    text: "responseText",
                                    json: "responseJSON"
                                },
                                converters: {
                                    "* text": String,
                                    "text html": !0,
                                    "text json": _.parseJSON,
                                    "text xml": _.parseXML
                                },
                                flatOptions: {
                                    url: !0,
                                    context: !0
                                }
                            },
                            ajaxSetup: function (a, b) {
                                return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
                            },
                            ajaxPrefilter: J(sb),
                            ajaxTransport: J(tb),
                            ajax: function (a, b) {
                                function c(a, b, c, g) {
                                    var i, k, r, s, u, w = b;
                                    2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
                                }
                                "object" == typeof a && (b = a, a = void 0),
                                        b = b || {};
                                var d, e, f, g, h, i, j, k, l = _.ajaxSetup({},
                                        b),
                                        m = l.context || l,
                                        n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
                                        o = _.Deferred(),
                                        p = _.Callbacks("once memory"),
                                        q = l.statusCode || {},
                                        r = {},
                                        s = {},
                                        t = 0,
                                        u = "canceled",
                                        v = {
                                            readyState: 0,
                                            getResponseHeader: function (a) {
                                                var b;
                                                if (2 === t) {
                                                    if (!g) {
                                                        for (g = {}; b = nb.exec(f); ) {
                                                            g[b[1].toLowerCase()] = b[2]
                                                        }
                                                    }
                                                    b = g[a.toLowerCase()]
                                                }
                                                return null == b ? null : b
                                            },
                                            getAllResponseHeaders: function () {
                                                return 2 === t ? f : null
                                            },
                                            setRequestHeader: function (a, b) {
                                                var c = a.toLowerCase();
                                                return t || (a = s[c] = s[c] || a, r[a] = b),
                                                        this
                                            },
                                            overrideMimeType: function (a) {
                                                return t || (l.mimeType = a),
                                                        this
                                            },
                                            statusCode: function (a) {
                                                var b;
                                                if (a) {
                                                    if (2 > t) {
                                                        for (b in a) {
                                                            q[b] = [q[b], a[b]]
                                                        }
                                                    } else {
                                                        v.always(a[v.status])
                                                    }
                                                }
                                                return this
                                            },
                                            abort: function (a) {
                                                var b = a || u;
                                                return d && d.abort(b),
                                                        c(0, b),
                                                        this
                                            }
                                        };
                                if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vb) + "").replace(lb, "").replace(qb, wb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(na) || [""], null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wb[1] && i[2] === wb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wb[3] || ("http:" === wb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sb, l, b, v), 2 === t) {
                                    return v
                                }
                                j = _.event && l.global,
                                        j && 0 === _.active++ && _.event.trigger("ajaxStart"),
                                        l.type = l.type.toUpperCase(),
                                        l.hasContent = !pb.test(l.type),
                                        e = l.url,
                                        l.hasContent || (l.data && (e = l.url += (kb.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = mb.test(e) ? e.replace(mb, "$1_=" + jb++) : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)),
                                        l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])),
                                        (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType),
                                        v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : l.accepts["*"]);
                                for (k in l.headers) {
                                    v.setRequestHeader(k, l.headers[k])
                                }
                                if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) {
                                    return v.abort()
                                }
                                u = "abort";
                                for (k in {
                                    success: 1,
                                    error: 1,
                                    complete: 1
                                }) {
                                    v[k](l[k])
                                }
                                if (d = K(tb, l, b, v)) {
                                    v.readyState = 1,
                                            j && n.trigger("ajaxSend", [v, l]),
                                            l.async && l.timeout > 0 && (h = setTimeout(function () {
                                                v.abort("timeout")
                                            },
                                                    l.timeout));
                                    try {
                                        t = 1,
                                                d.send(r, c)
                                    } catch (w) {
                                        if (!(2 > t)) {
                                            throw w
                                        }
                                        c(-1, w)
                                    }
                                } else {
                                    c(-1, "No Transport")
                                }
                                return v
                            },
                            getJSON: function (a, b, c) {
                                return _.get(a, b, c, "json")
                            },
                            getScript: function (a, b) {
                                return _.get(a, void 0, b, "script")
                            }
                        }),
                                _.each(["get", "post"],
                                        function (a, b) {
                                            _[b] = function (a, c, d, e) {
                                                return _.isFunction(c) && (e = e || d, d = c, c = void 0),
                                                        _.ajax({
                                                            url: a,
                                                            type: b,
                                                            dataType: e,
                                                            data: c,
                                                            success: d
                                                        })
                                            }
                                        }),
                                _._evalUrl = function (a) {
                                    return _.ajax({
                                        url: a,
                                        type: "GET",
                                        dataType: "script",
                                        async: !1,
                                        global: !1,
                                        "throws": !0
                                    })
                                },
                                _.fn.extend({
                                    wrapAll: function (a) {
                                        var b;
                                        return _.isFunction(a) ? this.each(function (b) {
                                            _(this).wrapAll(a.call(this, b))
                                        }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                                            for (var a = this; a.firstElementChild; ) {
                                                a = a.firstElementChild
                                            }
                                            return a
                                        }).append(this)), this)
                                    },
                                    wrapInner: function (a) {
                                        return _.isFunction(a) ? this.each(function (b) {
                                            _(this).wrapInner(a.call(this, b))
                                        }) : this.each(function () {
                                            var b = _(this),
                                                    c = b.contents();
                                            c.length ? c.wrapAll(a) : b.append(a)
                                        })
                                    },
                                    wrap: function (a) {
                                        var b = _.isFunction(a);
                                        return this.each(function (c) {
                                            _(this).wrapAll(b ? a.call(this, c) : a)
                                        })
                                    },
                                    unwrap: function () {
                                        return this.parent().each(function () {
                                            _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
                                        }).end()
                                    }
                                }),
                                _.expr.filters.hidden = function (a) {
                                    return a.offsetWidth <= 0 && a.offsetHeight <= 0
                                },
                                _.expr.filters.visible = function (a) {
                                    return !_.expr.filters.hidden(a)
                                };
                        var xb = /%20/g,
                                yb = /\[\]$/,
                                zb = /\r?\n/g,
                                Ab = /^(?:submit|button|image|reset|file)$/i,
                                Bb = /^(?:input|select|textarea|keygen)/i;
                        _.param = function (a, b) {
                            var c, d = [],
                                    e = function (a, b) {
                                        b = _.isFunction(b) ? b() : null == b ? "" : b,
                                                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                                    };
                            if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) {
                                _.each(a,
                                        function () {
                                            e(this.name, this.value)
                                        })
                            } else {
                                for (c in a) {
                                    O(c, a[c], b, e)
                                }
                            }
                            return d.join("&").replace(xb, "+")
                        },
                                _.fn.extend({
                                    serialize: function () {
                                        return _.param(this.serializeArray())
                                    },
                                    serializeArray: function () {
                                        return this.map(function () {
                                            var a = _.prop(this, "elements");
                                            return a ? _.makeArray(a) : this
                                        }).filter(function () {
                                            var a = this.type;
                                            return this.name && !_(this).is(":disabled") && Bb.test(this.nodeName) && !Ab.test(a) && (this.checked || !ya.test(a))
                                        }).map(function (a, b) {
                                            var c = _(this).val();
                                            return null == c ? null : _.isArray(c) ? _.map(c,
                                                    function (a) {
                                                        return {
                                                            name: b.name,
                                                            value: a.replace(zb, "\r\n")
                                                        }
                                                    }) : {
                                                name: b.name,
                                                value: c.replace(zb, "\r\n")
                                            }
                                        }).get()
                                    }
                                }),
                                _.ajaxSettings.xhr = function () {
                                    try {
                                        return new XMLHttpRequest
                                    } catch (a) {
                                    }
                                };
                        var Cb = 0,
                                Db = {},
                                Eb = {
                                    0: 200,
                                    1223: 204
                                },
                                Fb = _.ajaxSettings.xhr();
                        a.attachEvent && a.attachEvent("onunload",
                                function () {
                                    for (var a in Db) {
                                        Db[a]()
                                    }
                                }),
                                Y.cors = !!Fb && "withCredentials" in Fb,
                                Y.ajax = Fb = !!Fb,
                                _.ajaxTransport(function (a) {
                                    var b;
                                    return Y.cors || Fb && !a.crossDomain ? {
                                        send: function (c, d) {
                                            var e, f = a.xhr(),
                                                    g = ++Cb;
                                            if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) {
                                                for (e in a.xhrFields) {
                                                    f[e] = a.xhrFields[e]
                                                }
                                            }
                                            a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
                                                    a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                                            for (e in c) {
                                                f.setRequestHeader(e, c[e])
                                            }
                                            b = function (a) {
                                                return function () {
                                                    b && (delete Db[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Eb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                                                        text: f.responseText
                                                    } : void 0, f.getAllResponseHeaders()))
                                                }
                                            },
                                                    f.onload = b(),
                                                    f.onerror = b("error"),
                                                    b = Db[g] = b("abort");
                                            try {
                                                f.send(a.hasContent && a.data || null)
                                            } catch (h) {
                                                if (b) {
                                                    throw h
                                                }
                                            }
                                        },
                                        abort: function () {
                                            b && b()
                                        }
                                    } : void 0
                                }),
                                _.ajaxSetup({
                                    accepts: {
                                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                                    },
                                    contents: {
                                        script: /(?:java|ecma)script/
                                    },
                                    converters: {
                                        "text script": function (a) {
                                            return _.globalEval(a),
                                                    a
                                        }
                                    }
                                }),
                                _.ajaxPrefilter("script",
                                        function (a) {
                                            void 0 === a.cache && (a.cache = !1),
                                                    a.crossDomain && (a.type = "GET")
                                        }),
                                _.ajaxTransport("script",
                                        function (a) {
                                            if (a.crossDomain) {
                                                var b, c;
                                                return {
                                                    send: function (d, e) {
                                                        b = _("<script>").prop({
                                                            async: !0,
                                                            charset: a.scriptCharset,
                                                            src: a.url
                                                        }).on("load error", c = function (a) {
                                                            b.remove(),
                                                                    c = null,
                                                                    a && e("error" === a.type ? 404 : 200, a.type)
                                                        }),
                                                                Z.head.appendChild(b[0])
                                                    },
                                                    abort: function () {
                                                        c && c()
                                                    }
                                                }
                                            }
                                        });
                        var Gb = [],
                                Hb = /(=)\?(?=&|$)|\?\?/;
                        _.ajaxSetup({
                            jsonp: "callback",
                            jsonpCallback: function () {
                                var a = Gb.pop() || _.expando + "_" + jb++;
                                return this[a] = !0,
                                        a
                            }
                        }),
                                _.ajaxPrefilter("json jsonp",
                                        function (b, c, d) {
                                            var e, f, g, h = b.jsonp !== !1 && (Hb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hb.test(b.data) && "data");
                                            return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
                                                return g || _.error(e + " was not called"),
                                                        g[0]
                                            },
                                                    b.dataTypes[0] = "json", f = a[e], a[e] = function () {
                                                g = arguments
                                            },
                                                    d.always(function () {
                                                        a[e] = f,
                                                                b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)),
                                                                g && _.isFunction(f) && f(g[0]),
                                                                g = f = void 0
                                                    }), "script") : void 0
                                        }),
                                _.parseHTML = function (a, b, c) {
                                    if (!a || "string" != typeof a) {
                                        return null
                                    }
                                    "boolean" == typeof b && (c = b, b = !1),
                                            b = b || Z;
                                    var d = ga.exec(a),
                                            e = !c && [];
                                    return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
                                };
                        var Ib = _.fn.load;
                        _.fn.load = function (a, b, c) {
                            if ("string" != typeof a && Ib) {
                                return Ib.apply(this, arguments)
                            }
                            var d, e, f, g = this,
                                    h = a.indexOf(" ");
                            return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)),
                                    _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"),
                                    g.length > 0 && _.ajax({
                                        url: a,
                                        type: e,
                                        dataType: "html",
                                        data: b
                                    }).done(function (a) {
                                f = arguments,
                                        g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
                            }).complete(c &&
                                    function (a, b) {
                                        g.each(c, f || [a.responseText, b, a])
                                    }),
                                    this
                        },
                                _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
                                        function (a, b) {
                                            _.fn[b] = function (a) {
                                                return this.on(b, a)
                                            }
                                        }),
                                _.expr.filters.animated = function (a) {
                                    return _.grep(_.timers,
                                            function (b) {
                                                return a === b.elem
                                            }).length
                                };
                        var Jb = a.document.documentElement;
                        _.offset = {
                            setOffset: function (a, b, c) {
                                var d, e, f, g, h, i, j, k = _.css(a, "position"),
                                        l = _(a),
                                        m = {};
                                "static" === k && (a.style.position = "relative"),
                                        h = l.offset(),
                                        f = _.css(a, "top"),
                                        i = _.css(a, "left"),
                                        j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1,
                                        j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0),
                                        _.isFunction(b) && (b = b.call(a, c, h)),
                                        null != b.top && (m.top = b.top - h.top + g),
                                        null != b.left && (m.left = b.left - h.left + e),
                                        "using" in b ? b.using.call(a, m) : l.css(m)
                            }
                        },
                                _.fn.extend({
                                    offset: function (a) {
                                        if (arguments.length) {
                                            return void 0 === a ? this : this.each(function (b) {
                                                _.offset.setOffset(this, a, b)
                                            })
                                        }
                                        var b, c, d = this[0],
                                                e = {
                                                    top: 0,
                                                    left: 0
                                                },
                                                f = d && d.ownerDocument;
                                        if (f) {
                                            return b = f.documentElement,
                                                    _.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), c = P(f), {
                                                top: e.top + c.pageYOffset - b.clientTop,
                                                left: e.left + c.pageXOffset - b.clientLeft
                                            }) : e
                                        }
                                    },
                                    position: function () {
                                        if (this[0]) {
                                            var a, b, c = this[0],
                                                    d = {
                                                        top: 0,
                                                        left: 0
                                                    };
                                            return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)),
                                                    {
                                                        top: b.top - d.top - _.css(c, "marginTop", !0),
                                                        left: b.left - d.left - _.css(c, "marginLeft", !0)
                                                    }
                                        }
                                    },
                                    offsetParent: function () {
                                        return this.map(function () {
                                            for (var a = this.offsetParent || Jb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position"); ) {
                                                a = a.offsetParent
                                            }
                                            return a || Jb
                                        })
                                    }
                                }),
                                _.each({
                                    scrollLeft: "pageXOffset",
                                    scrollTop: "pageYOffset"
                                },
                                        function (b, c) {
                                            var d = "pageYOffset" === c;
                                            _.fn[b] = function (e) {
                                                return qa(this,
                                                        function (b, e, f) {
                                                            var g = P(b);
                                                            return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
                                                        },
                                                        b, e, arguments.length, null)
                                            }
                                        }),
                                _.each(["top", "left"],
                                        function (a, b) {
                                            _.cssHooks[b] = w(Y.pixelPosition,
                                                    function (a, c) {
                                                        return c ? (c = v(a, b), Qa.test(c) ? _(a).position()[b] + "px" : c) : void 0
                                                    })
                                        }),
                                _.each({
                                    Height: "height",
                                    Width: "width"
                                },
                                        function (a, b) {
                                            _.each({
                                                padding: "inner" + a,
                                                content: b,
                                                "": "outer" + a
                                            },
                                                    function (c, d) {
                                                        _.fn[d] = function (d, e) {
                                                            var f = arguments.length && (c || "boolean" != typeof d),
                                                                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                                                            return qa(this,
                                                                    function (b, c, d) {
                                                                        var e;
                                                                        return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
                                                                    },
                                                                    b, f ? d : void 0, f, null)
                                                        }
                                                    })
                                        }),
                                _.fn.size = function () {
                                    return this.length
                                },
                                _.fn.andSelf = _.fn.addBack,
                                "function" == typeof define && define.amd && define("jquery", [],
                                        function () {
                                            return _
                                        });
                        var Kb = a.jQuery,
                                Lb = a.$;
                        return _.noConflict = function (b) {
                            return a.$ === _ && (a.$ = Lb),
                                    b && a.jQuery === _ && (a.jQuery = Kb),
                                    _
                        },
                                typeof b === za && (a.jQuery = a.$ = _),
                                _
                    })
        },
        {}],
    6: [function (d, e, f) {
            (function (b) {
                (function () {
                    function ar(i, j) {
                        if (i !== j) {
                            var k = null === i,
                                    l = i === bV,
                                    m = i === i,
                                    n = null === j,
                                    o = j === bV,
                                    p = j === j;
                            if (i > j && !n || !m || k && !o && p || l && p) {
                                return 1
                            }
                            if (j > i && !k || !p || n && !l && m || o && m) {
                                return -1
                            }
                        }
                        return 0
                    }
                    function ax(g, h, i) {
                        for (var j = g.length,
                                k = i ? j : -1; i ? k-- : ++k < j; ) {
                            if (h(g[k], k, g)) {
                                return k
                            }
                        }
                        return -1
                    }
                    function aB(g, h, i) {
                        if (h !== h) {
                            return bl(g, i)
                        }
                        for (var j = i - 1,
                                k = g.length; ++j < k; ) {
                            if (g[j] === h) {
                                return j
                            }
                        }
                        return -1
                    }
                    function aF(g) {
                        return "function" == typeof g || !1
                    }
                    function aJ(g) {
                        return null == g ? "" : g + ""
                    }
                    function aN(g, h) {
                        for (var i = -1,
                                j = g.length; ++i < j && h.indexOf(g.charAt(i)) > -1; ) {
                        }
                        return i
                    }
                    function aR(g, h) {
                        for (var i = g.length; i-- && h.indexOf(g.charAt(i)) > -1; ) {
                        }
                        return i
                    }
                    function aV(g, h) {
                        return ar(g.criteria, h.criteria) || g.index - h.index
                    }
                    function aZ(l, m, n) {
                        for (var o = -1,
                                p = l.criteria,
                                q = m.criteria,
                                r = p.length,
                                s = n.length; ++o < r; ) {
                            var t = ar(p[o], q[o]);
                            if (t) {
                                if (o >= s) {
                                    return t
                                }
                                var u = n[o];
                                return t * ("asc" === u || u === !0 ? 1 : -1)
                            }
                        }
                        return l.index - m.index
                    }
                    function a3(g) {
                        return bw[g]
                    }
                    function a7(g) {
                        return bA[g]
                    }
                    function bd(g, h, i) {
                        return h ? g = bM[g] : i && (g = bQ[g]),
                                "\\" + g
                    }
                    function bh(g) {
                        return "\\" + bQ[g]
                    }
                    function bl(g, h, i) {
                        for (var j = g.length,
                                k = h + (i ? 0 : -1); i ? k-- : ++k < j; ) {
                            var l = g[k];
                            if (l !== l) {
                                return k
                            }
                        }
                        return -1
                    }
                    function bp(g) {
                        return !!g && "object" == typeof g
                    }
                    function bt(g) {
                        return 160 >= g && g >= 9 && 13 >= g || 32 == g || 160 == g || 5760 == g || 6158 == g || g >= 8192 && (8202 >= g || 8232 == g || 8233 == g || 8239 == g || 8287 == g || 12288 == g || 65279 == g)
                    }
                    function bx(g, h) {
                        for (var i = -1,
                                j = g.length,
                                k = -1,
                                l = []; ++i < j; ) {
                            g[i] === h && (g[i] = bu, l[++k] = i)
                        }
                        return l
                    }
                    function bB(j, k) {
                        for (var l, m = -1,
                                n = j.length,
                                o = -1,
                                p = []; ++m < n; ) {
                            var q = j[m],
                                    r = k ? k(q, m, j) : q;
                            m && l === r || (l = r, p[++o] = q)
                        }
                        return p
                    }
                    function bF(g) {
                        for (var h = -1,
                                i = g.length; ++h < i && bt(g.charCodeAt(h)); ) {
                        }
                        return h
                    }
                    function bJ(g) {
                        for (var h = g.length; h-- && bt(g.charCodeAt(h)); ) {
                        }
                        return h
                    }
                    function bN(g) {
                        return bE[g]
                    }
                    function bR(x) {
                        function N(s) {
                            if (bp(s) && !ck(s) && !(s instanceof h3)) {
                                if (s instanceof f7) {
                                    return s
                                }
                                if (I.call(s, "__chain__") && I.call(s, "__wrapped__")) {
                                    return eI(s)
                                }
                            }
                            return new f7(s)
                        }
                        function b0() {}
                        function f7(s, Z, cc) {
                            this.__wrapped__ = s,
                                    this.__actions__ = cc || [],
                                    this.__chain__ = !!Z
                        }
                        function h3(s) {
                            this.__wrapped__ = s,
                                    this.__actions__ = [],
                                    this.__dir__ = 1,
                                    this.__filtered__ = !1,
                                    this.__iteratees__ = [],
                                    this.__takeCount__ = ab,
                                    this.__views__ = []
                        }
                        function O() {
                            var s = new h3(this.__wrapped__);
                            return s.__actions__ = y(this.__actions__),
                                    s.__dir__ = this.__dir__,
                                    s.__filtered__ = this.__filtered__,
                                    s.__iteratees__ = y(this.__iteratees__),
                                    s.__takeCount__ = this.__takeCount__,
                                    s.__views__ = y(this.__views__),
                                    s
                        }
                        function cm() {
                            if (this.__filtered__) {
                                var s = new h3(this);
                                s.__dir__ = -1,
                                        s.__filtered__ = !0
                            } else {
                                s = this.clone(),
                                        s.__dir__ *= -1
                            }
                            return s
                        }
                        function f8() {
                            var Z = this.__wrapped__.value(),
                                    cc = this.__dir__,
                                    cd = ck(Z),
                                    ce = 0 > cc,
                                    cf = cd ? Z.length : 0,
                                    cg = gy(0, cf, this.__views__),
                                    ch = cg.start,
                                    ci = cg.end,
                                    da = ci - ch,
                                    dc = ce ? ci : ch - 1,
                                    dd = this.__iteratees__,
                                    de = dd.length,
                                    df = 0,
                                    dg = hv(da, this.__takeCount__);
                            if (!cd || be > cf || cf == da && dg == da) {
                                return b2(ce && cd ? Z.reverse() : Z, this.__actions__)
                            }
                            var dh = [];
                            Z: for (; da-- && dg > df; ) {
                                dc += cc;
                                for (var di = -1,
                                        eb = Z[dc]; ++di < de; ) {
                                    var ec = dd[di],
                                            ed = ec.iteratee,
                                            ee = ec.type,
                                            ef = ed(eb);
                                    if (ee == bm) {
                                        eb = ef
                                    } else {
                                        if (!ef) {
                                            if (ee == bi) {
                                                continue Z
                                            }
                                            break Z
                                        }
                                    }
                                }
                                dh[df++] = eb
                            }
                            return dh
                        }
                        function gu() {
                            this.__data__ = {}
                        }
                        function gJ(s) {
                            return this.has(s) && delete this.__data__[s]
                        }
                        function gY(s) {
                            return "__proto__" == s ? bV : this.__data__[s]
                        }
                        function hk(s) {
                            return "__proto__" != s && I.call(this.__data__, s)
                        }
                        function hz(s, Z) {
                            return "__proto__" != s && (this.__data__[s] = Z),
                                    this
                        }
                        function hO(s) {
                            var Z = s ? s.length : 0;
                            for (this.data = {
                                hash: fP(null),
                                set: new em
                            }; Z--; ) {
                                this.push(s[Z])
                            }
                        }
                        function h4(s, Z) {
                            var cc = s.data,
                                    cd = "string" == typeof Z || dx(Z) ? cc.set.has(Z) : cc.hash[Z];
                            return cd ? 0 : -1
                        }
                        function g(s) {
                            var Z = this.data;
                            "string" == typeof s || dx(s) ? Z.set.add(s) : Z.hash[s] = !0
                        }
                        function o(s, Z) {
                            for (var cc = -1,
                                    cd = s.length,
                                    ce = -1,
                                    cf = Z.length,
                                    cg = fm(cd + cf); ++cc < cd; ) {
                                cg[cc] = s[cc]
                            }
                            for (; ++ce < cf; ) {
                                cg[cc++] = Z[ce]
                            }
                            return cg
                        }
                        function y(s, Z) {
                            var cc = -1,
                                    cd = s.length;
                            for (Z || (Z = fm(cd)); ++cc < cd; ) {
                                Z[cc] = s[cc]
                            }
                            return Z
                        }
                        function P(s, Z) {
                            for (var cc = -1,
                                    cd = s.length; ++cc < cd && Z(s[cc], cc, s) !== !1; ) {
                            }
                            return s
                        }
                        function cB(s, Z) {
                            for (var cc = s.length; cc-- && Z(s[cc], cc, s) !== !1; ) {
                            }
                            return s
                        }
                        function cP(s, Z) {
                            for (var cc = -1,
                                    cd = s.length; ++cc < cd; ) {
                                if (!Z(s[cc], cc, s)) {
                                    return !1
                                }
                            }
                            return !0
                        }
                        function c3(s, Z, cc, cd) {
                            for (var ce = -1,
                                    cf = s.length,
                                    cg = cd,
                                    ch = cg; ++ce < cf; ) {
                                var ci = s[ce],
                                        da = +Z(ci);
                                cc(da, cg) && (cg = da, ch = ci)
                            }
                            return ch
                        }
                        function dq(s, Z) {
                            for (var cc = -1,
                                    cd = s.length,
                                    ce = -1,
                                    cf = []; ++cc < cd; ) {
                                var cg = s[cc];
                                Z(cg, cc, s) && (cf[++ce] = cg)
                            }
                            return cf
                        }
                        function dE(s, Z) {
                            for (var cc = -1,
                                    cd = s.length,
                                    ce = fm(cd); ++cc < cd; ) {
                                ce[cc] = Z(s[cc], cc, s)
                            }
                            return ce
                        }
                        function dR(s, Z) {
                            for (var cc = -1,
                                    cd = Z.length,
                                    ce = s.length; ++cc < cd; ) {
                                s[ce + cc] = Z[cc]
                            }
                            return s
                        }
                        function d5(s, Z, cc, cd) {
                            var ce = -1,
                                    cf = s.length;
                            for (cd && cf && (cc = s[++ce]); ++ce < cf; ) {
                                cc = Z(cc, s[ce], ce, s)
                            }
                            return cc
                        }
                        function eq(s, Z, cc, cd) {
                            var ce = s.length;
                            for (cd && ce && (cc = s[--ce]); ce--; ) {
                                cc = Z(cc, s[ce], ce, s)
                            }
                            return cc
                        }
                        function eE(s, Z) {
                            for (var cc = -1,
                                    cd = s.length; ++cc < cd; ) {
                                if (Z(s[cc], cc, s)) {
                                    return !0
                                }
                            }
                            return !1
                        }
                        function eS(s, Z) {
                            for (var cc = s.length,
                                    cd = 0; cc--; ) {
                                cd += +Z(s[cc]) || 0
                            }
                            return cd
                        }
                        function e6(s, Z) {
                            return s === bV ? Z : s
                        }
                        function fr(s, Z, cc, cd) {
                            return s !== bV && I.call(cd, cc) ? s : Z
                        }
                        function fF(s, Z, cc) {
                            for (var cd = -1,
                                    ce = e5(Z), cf = ce.length; ++cd < cf; ) {
                                var cg = ce[cd],
                                        ch = s[cg],
                                        ci = cc(ch, Z[cg], cg, s, Z);
                                (ci === ci ? ci === ch : ch !== ch) && (ch !== bV || cg in s) || (s[cg] = ci)
                            }
                            return s
                        }
                        function fT(s, Z) {
                            return null == Z ? s : gv(Z, e5(Z), s)
                        }
                        function f9(s, Z) {
                            for (var cc = -1,
                                    cd = null == s,
                                    ce = !cd && hS(s), cf = ce ? s.length : 0, cg = Z.length, ch = fm(cg); ++cc < cg; ) {
                                var ci = Z[cc];
                                ce ? ch[cc] = h8(ci, cf) ? s[ci] : bV : ch[cc] = cd ? bV : s[ci]
                            }
                            return ch
                        }
                        function gv(s, Z, cc) {
                            cc || (cc = {});
                            for (var cd = -1,
                                    ce = Z.length; ++cd < ce; ) {
                                var cf = Z[cd];
                                cc[cf] = s[cf]
                            }
                            return cc
                        }
                        function gK(s, Z, cc) {
                            var cd = typeof s;
                            return "function" == cd ? Z === bV ? s : cR(s, Z, cc) : null == s ? Y : "object" == cd ? eT(s) : Z === bV ? dz(s) : e7(s, Z)
                        }
                        function gZ(s, Z, cc, cd, ce, cf, cg) {
                            var ch;
                            if (cc && (ch = ce ? cc(s, cd, ce) : cc(s)), ch !== bV) {
                                return ch
                            }
                            if (!dx(s)) {
                                return s
                            }
                            var ci = ck(s);
                            if (ci) {
                                if (ch = gN(s), !Z) {
                                    return y(s, ch)
                                }
                            } else {
                                var da = ca.call(s),
                                        dc = da == bS;
                                if (da != ad && da != by && (!dc || ce)) {
                                    return bs[da] ? ho(s, da, Z) : ce ? s : {}
                                }
                                if (ch = g2(dc ? {} : s), !Z) {
                                    return fT(ch, s)
                                }
                            }
                            cf || (cf = []),
                                    cg || (cg = []);
                            for (var dd = cf.length; dd--; ) {
                                if (cf[dd] == s) {
                                    return cg[dd]
                                }
                            }
                            return cf.push(s),
                                    cg.push(ch),
                                    (ci ? P : cQ)(s,
                                    function (de, df) {
                                        ch[df] = gZ(de, Z, cc, df, s, cf, cg)
                                    }),
                                    ch
                        }
                        function hl(s, Z, cc) {
                            if ("function" != typeof s) {
                                throw new hJ(bq)
                            }
                            return eA(function () {
                                s.apply(bV, cc)
                            },
                                    Z)
                        }
                        function hA(s, Z) {
                            var cc = s ? s.length : 0,
                                    cd = [];
                            if (!cc) {
                                return cd
                            }
                            var ce = -1,
                                    cf = fI(),
                                    cg = cf == aB,
                                    ch = cg && Z.length >= be ? e8(Z) : null,
                                    ci = Z.length;
                            ch && (cf = h4, cg = !1, Z = ch);
                            s: for (; ++ce < cc; ) {
                                var da = s[ce];
                                if (cg && da === da) {
                                    for (var dc = ci; dc--; ) {
                                        if (Z[dc] === da) {
                                            continue s
                                        }
                                    }
                                    cd.push(da)
                                } else {
                                    cf(Z, da, 0) < 0 && cd.push(da)
                                }
                            }
                            return cd
                        }
                        function hP(s, Z) {
                            var cc = !0;
                            return d2(s,
                                    function (cd, ce, cf) {
                                        return cc = !!Z(cd, ce, cf)
                                    }),
                                    cc
                        }
                        function h5(s, Z, cc, cd) {
                            var ce = cd,
                                    cf = ce;
                            return d2(s,
                                    function (cg, ch, ci) {
                                        var da = +Z(cg, ch, ci);
                                        (cc(da, ce) || da === cd && da === cf) && (ce = da, cf = cg)
                                    }),
                                    cf
                        }
                        function z(s, Z, cc, cd) {
                            var ce = s.length;
                            for (cc = null == cc ? 0 : +cc || 0, 0 > cc && (cc = -cc > ce ? 0 : ce + cc), cd = cd === bV || cd > ce ? ce : +cd || 0, 0 > cd && (cd += ce), ce = cc > cd ? 0 : cd >>> 0, cc >>>= 0; ce > cc; ) {
                                s[cc++] = Z
                            }
                            return s
                        }
                        function Q(s, Z) {
                            var cc = [];
                            return d2(s,
                                    function (cd, ce, cf) {
                                        Z(cd, ce, cf) && cc.push(cd)
                                    }),
                                    cc
                        }
                        function b1(s, Z, cc, cd) {
                            var ce;
                            return cc(s,
                                    function (cf, cg, ch) {
                                        return Z(cf, cg, ch) ? (ce = cd ? cg : cf, !1) : void 0
                                    }),
                                    ce
                        }
                        function cn(s, Z, cc, cd) {
                            cd || (cd = []);
                            for (var ce = -1,
                                    cf = s.length; ++ce < cf; ) {
                                var cg = s[ce];
                                bp(cg) && hS(cg) && (cc || ck(cg) || hV(cg)) ? Z ? cn(cg, Z, cc, cd) : dR(cd, cg) : cc || (cd[cd.length] = cg)
                            }
                            return cd
                        }
                        function cC(s, Z) {
                            return eB(s, Z, t)
                        }
                        function cQ(s, Z) {
                            return eB(s, Z, e5)
                        }
                        function c4(s, Z) {
                            return eP(s, Z, e5)
                        }
                        function dr(s, Z) {
                            for (var cc = -1,
                                    cd = Z.length,
                                    ce = -1,
                                    cf = []; ++cc < cd; ) {
                                var cg = Z[cc];
                                db(s[cg]) && (cf[++ce] = cg)
                            }
                            return cf
                        }
                        function dF(s, Z, cc) {
                            if (null != s) {
                                cc !== bV && cc in d9(s) && (Z = [cc]);
                                for (var cd = 0,
                                        ce = Z.length; null != s && ce > cd; ) {
                                    s = s[Z[cd++]]
                                }
                                return cd && cd == ce ? s : bV
                            }
                        }
                        function dS(s, Z, cc, cd, ce, cf) {
                            return s === Z ? !0 : null == s || null == Z || !dx(s) && !bp(Z) ? s !== s && Z !== Z : d6(s, Z, dS, cc, cd, ce, cf)
                        }
                        function d6(s, Z, cc, cd, ce, cf, cg) {
                            var ch = ck(s),
                                    ci = ck(Z),
                                    da = bC,
                                    dc = bC;
                            ch || (da = ca.call(s), da == by ? da = ad : da != ad && (ch = fM(s))),
                                    ci || (dc = ca.call(Z), dc == by ? dc = ad : dc != ad && (ci = fM(Z)));
                            var dd = da == ad,
                                    de = dc == ad,
                                    df = da == dc;
                            if (df && !ch && !dd) {
                                return eH(s, Z, da)
                            }
                            if (!ce) {
                                var dg = dd && I.call(s, "__wrapped__"),
                                        dh = de && I.call(Z, "__wrapped__");
                                if (dg || dh) {
                                    return cc(dg ? s.value() : s, dh ? Z.value() : Z, cd, ce, cf, cg)
                                }
                            }
                            if (!df) {
                                return !1
                            }
                            cf || (cf = []),
                                    cg || (cg = []);
                            for (var di = cf.length; di--; ) {
                                if (cf[di] == s) {
                                    return cg[di] == Z
                                }
                            }
                            cf.push(s),
                                    cg.push(Z);
                            var eb = (ch ? et : eV)(s, Z, cc, cd, ce, cf, cg);
                            return cf.pop(),
                                    cg.pop(),
                                    eb
                        }
                        function er(s, Z, cc) {
                            var cd = Z.length,
                                    ce = cd,
                                    cf = !cc;
                            if (null == s) {
                                return !ce
                            }
                            for (s = d9(s); cd--; ) {
                                var cg = Z[cd];
                                if (cf && cg[2] ? cg[1] !== s[cg[0]] : !(cg[0] in s)) {
                                    return !1
                                }
                            }
                            for (; ++cd < ce; ) {
                                cg = Z[cd];
                                var ch = cg[0],
                                        ci = s[ch],
                                        da = cg[1];
                                if (cf && cg[2]) {
                                    if (ci === bV && !(ch in s)) {
                                        return !1
                                    }
                                } else {
                                    var dc = cc ? cc(ci, da, ch) : bV;
                                    if (!(dc === bV ? dS(da, ci, cc, !0) : dc)) {
                                        return !1
                                    }
                                }
                            }
                            return !0
                        }
                        function eF(s, Z) {
                            var cc = -1,
                                    cd = hS(s) ? fm(s.length) : [];
                            return d2(s,
                                    function (ce, cf, cg) {
                                        cd[++cc] = Z(ce, cf, cg)
                                    }),
                                    cd
                        }
                        function eT(s) {
                            var Z = fW(s);
                            if (1 == Z.length && Z[0][2]) {
                                var cc = Z[0][0],
                                        cd = Z[0][1];
                                return function (ce) {
                                    return null == ce ? !1 : ce[cc] === cd && (cd !== bV || cc in d9(ce))
                                }
                            }
                            return function (ce) {
                                return er(ce, Z)
                            }
                        }
                        function e7(s, Z) {
                            var cc = ck(s),
                                    cd = q(s) && b4(Z),
                                    ce = s + "";
                            return s = eu(s),
                                    function (cf) {
                                        if (null == cf) {
                                            return !1
                                        }
                                        var cg = ce;
                                        if (cf = d9(cf), (cc || !cd) && !(cg in cf)) {
                                            if (cf = 1 == s.length ? cf : dF(cf, hm(s, 0, -1)), null == cf) {
                                                return !1
                                            }
                                            cg = h9(s),
                                                    cf = d9(cf)
                                        }
                                        return cf[cg] === Z ? Z !== bV || cg in cf : dS(Z, cf[cg], bV, !0)
                                    }
                        }
                        function fs(s, Z, cc, cd, ce) {
                            if (!dx(s)) {
                                return s
                            }
                            var cf = hS(Z) && (ck(Z) || fM(Z)),
                                    cg = cf ? bV : e5(Z);
                            return P(cg || Z,
                                    function (ch, ci) {
                                        if (cg && (ci = ch, ch = Z[ci]), bp(ch)) {
                                            cd || (cd = []),
                                                    ce || (ce = []),
                                                    fG(s, Z, ci, fs, cc, cd, ce)
                                        } else {
                                            var da = s[ci],
                                                    dc = cc ? cc(da, ch, ci, s, Z) : bV,
                                                    dd = dc === bV;
                                            dd && (dc = ch),
                                                    dc === bV && (!cf || ci in s) || !dd && (dc === dc ? dc === da : da !== da) || (s[ci] = dc)
                                        }
                                    }),
                                    s
                        }
                        function fG(s, Z, cc, cd, ce, cf, cg) {
                            for (var ch = cf.length,
                                    ci = Z[cc]; ch--; ) {
                                if (cf[ch] == ci) {
                                    return void(s[cc] = cg[ch])
                                }
                            }
                            var da = s[cc],
                                    dc = ce ? ce(da, ci, cc, s, Z) : bV,
                                    dd = dc === bV;
                            dd && (dc = ci, hS(ci) && (ck(ci) || fM(ci)) ? dc = ck(da) ? da : hS(da) ? y(da) : [] : eZ(ci) || hV(ci) ? dc = hV(da) ? g6(da) : eZ(da) ? da : {} : dd = !1),
                                    cf.push(ci),
                                    cg.push(dc),
                                    dd ? s[cc] = cd(dc, ci, ce, cf, cg) : (dc === dc ? dc !== da : da === da) && (s[cc] = dc)
                        }
                        function fU(s) {
                            return function (Z) {
                                return null == Z ? bV : Z[s]
                            }
                        }
                        function ga(s) {
                            var Z = s + "";
                            return s = eu(s),
                                    function (cc) {
                                        return dF(cc, s, Z)
                                    }
                        }
                        function gw(s, Z) {
                            for (var cc = s ? Z.length : 0; cc--; ) {
                                var cd = Z[cc];
                                if (cd != ce && h8(cd)) {
                                    var ce = cd;
                                    eO.call(s, cd, 1)
                                }
                            }
                            return s
                        }
                        function gL(s, Z) {
                            return s + f3(im() * (Z - s + 1))
                        }
                        function g0(s, Z, cc, cd, ce) {
                            return ce(s,
                                    function (cf, cg, ch) {
                                        cc = cd ? (cd = !1, cf) : Z(cc, cf, cg, ch)
                                    }),
                                    cc
                        }
                        function hm(s, Z, cc) {
                            var cd = -1,
                                    ce = s.length;
                            Z = null == Z ? 0 : +Z || 0,
                                    0 > Z && (Z = -Z > ce ? 0 : ce + Z),
                                    cc = cc === bV || cc > ce ? ce : +cc || 0,
                                    0 > cc && (cc += ce),
                                    ce = Z > cc ? 0 : cc - Z >>> 0,
                                    Z >>>= 0;
                            for (var cf = fm(ce); ++cd < ce; ) {
                                cf[cd] = s[cd + Z]
                            }
                            return cf
                        }
                        function hB(s, Z) {
                            var cc;
                            return d2(s,
                                    function (cd, ce, cf) {
                                        return cc = Z(cd, ce, cf),
                                                !cc
                                    }),
                                    !!cc
                        }
                        function hQ(s, Z) {
                            var cc = s.length;
                            for (s.sort(Z); cc--; ) {
                                s[cc] = s[cc].value
                            }
                            return s
                        }
                        function h6(s, Z, cc) {
                            var cd = e9(),
                                    ce = -1;
                            Z = dE(Z,
                                    function (cg) {
                                        return cd(cg)
                                    });
                            var cf = eF(s,
                                    function (cg) {
                                        var ch = dE(Z,
                                                function (ci) {
                                                    return ci(cg)
                                                });
                                        return {
                                            criteria: ch,
                                            index: ++ce,
                                            value: cg
                                        }
                                    });
                            return hQ(cf,
                                    function (cg, ch) {
                                        return aZ(cg, ch, cc)
                                    })
                        }
                        function h(s, Z) {
                            var cc = 0;
                            return d2(s,
                                    function (cd, ce, cf) {
                                        cc += +Z(cd, ce, cf) || 0
                                    }),
                                    cc
                        }
                        function p(s, Z) {
                            var cc = -1,
                                    cd = fI(),
                                    ce = s.length,
                                    cf = cd == aB,
                                    cg = cf && ce >= be,
                                    ch = cg ? e8() : null,
                                    ci = [];
                            ch ? (cd = h4, cf = !1) : (cg = !1, ch = Z ? [] : ci);
                            s: for (; ++cc < ce; ) {
                                var da = s[cc],
                                        dc = Z ? Z(da, cc, s) : da;
                                if (cf && da === da) {
                                    for (var dd = ch.length; dd--; ) {
                                        if (ch[dd] === dc) {
                                            continue s
                                        }
                                    }
                                    Z && ch.push(dc),
                                            ci.push(da)
                                } else {
                                    cd(ch, dc, 0) < 0 && ((Z || cg) && ch.push(dc), ci.push(da))
                                }
                            }
                            return ci
                        }
                        function A(s, Z) {
                            for (var cc = -1,
                                    cd = Z.length,
                                    ce = fm(cd); ++cc < cd; ) {
                                ce[cc] = s[Z[cc]]
                            }
                            return ce
                        }
                        function R(s, Z, cc, cd) {
                            for (var ce = s.length,
                                    cf = cd ? ce : -1; (cd ? cf-- : ++cf < ce) && Z(s[cf], cf, s); ) {
                            }
                            return cc ? hm(s, cd ? 0 : cf, cd ? cf + 1 : ce) : hm(s, cd ? cf + 1 : 0, cd ? ce : cf)
                        }
                        function b2(s, Z) {
                            var cc = s;
                            cc instanceof h3 && (cc = cc.value());
                            for (var cd = -1,
                                    ce = Z.length; ++cd < ce; ) {
                                var cf = Z[cd];
                                cc = cf.func.apply(cf.thisArg, dR([cc], cf.args))
                            }
                            return cc
                        }
                        function co(s, Z, cc) {
                            var cd = 0,
                                    ce = s ? s.length : cd;
                            if ("number" == typeof Z && Z === Z && cM >= ce) {
                                for (; ce > cd; ) {
                                    var cf = cd + ce >>> 1,
                                            cg = s[cf];
                                    (cc ? Z >= cg : Z > cg) && null !== cg ? cd = cf + 1 : ce = cf
                                }
                                return ce
                            }
                            return cD(s, Z, Y, cc)
                        }
                        function cD(s, Z, cc, cd) {
                            Z = cc(Z);
                            for (var ce = 0,
                                    cf = s ? s.length : 0, cg = Z !== Z, ch = null === Z, ci = Z === bV; cf > ce; ) {
                                var da = f3((ce + cf) / 2),
                                        dc = cc(s[da]),
                                        dd = dc !== bV,
                                        de = dc === dc;
                                if (cg) {
                                    var df = de || cd
                                } else {
                                    df = ch ? de && dd && (cd || null != dc) : ci ? de && (cd || dd) : null == dc ? !1 : cd ? Z >= dc : Z > dc
                                }
                                df ? ce = da + 1 : cf = da
                            }
                            return hv(cf, cx)
                        }
                        function cR(s, Z, cc) {
                            if ("function" != typeof s) {
                                return Y
                            }
                            if (Z === bV) {
                                return s
                            }
                            switch (cc) {
                                case 1:
                                    return function (cd) {
                                        return s.call(Z, cd)
                                    };
                                case 3:
                                    return function (cd, ce, cf) {
                                        return s.call(Z, cd, ce, cf)
                                    };
                                case 4:
                                    return function (cd, ce, cf, cg) {
                                        return s.call(Z, cd, ce, cf, cg)
                                    };
                                case 5:
                                    return function (cd, ce, cf, cg, ch) {
                                        return s.call(Z, cd, ce, cf, cg, ch)
                                    }
                            }
                            return function () {
                                return s.apply(Z, arguments)
                            }
                        }
                        function c5(s) {
                            var Z = new cZ(s.byteLength),
                                    cc = new e2(Z);
                            return cc.set(new e2(s)),
                                    Z
                        }
                        function ds(s, Z, cc) {
                            for (var cd = cc.length,
                                    ce = -1,
                                    cf = g9(s.length - cd, 0), cg = -1, ch = Z.length, ci = fm(ch + cf); ++cg < ch; ) {
                                ci[cg] = Z[cg]
                            }
                            for (; ++ce < cd; ) {
                                ci[cc[ce]] = s[ce]
                            }
                            for (; cf--; ) {
                                ci[cg++] = s[ce++]
                            }
                            return ci
                        }
                        function dG(s, Z, cc) {
                            for (var cd = -1,
                                    ce = cc.length,
                                    cf = -1,
                                    cg = g9(s.length - ce, 0), ch = -1, ci = Z.length, da = fm(cg + ci); ++cf < cg; ) {
                                da[cf] = s[cf]
                            }
                            for (var dc = cf; ++ch < ci; ) {
                                da[dc + ch] = Z[ch]
                            }
                            for (; ++cd < ce; ) {
                                da[dc + cc[cd]] = s[cf++]
                            }
                            return da
                        }
                        function dT(s, Z) {
                            return function (cc, cd, ce) {
                                var cf = Z ? Z() : {};
                                if (cd = e9(cd, ce, 3), ck(cc)) {
                                    for (var cg = -1,
                                            ch = cc.length; ++cg < ch; ) {
                                        var ci = cc[cg];
                                        s(cf, ci, cd(ci, cg, cc), cc)
                                    }
                                } else {
                                    d2(cc,
                                            function (da, dc, dd) {
                                                s(cf, da, cd(da, dc, dd), dd)
                                            })
                                }
                                return cf
                            }
                        }
                        function d7(s) {
                            return fL(function (Z, cc) {
                                var cd = -1,
                                        ce = null == Z ? 0 : cc.length,
                                        cf = ce > 2 ? cc[ce - 2] : bV,
                                        cg = ce > 2 ? cc[2] : bV,
                                        ch = ce > 1 ? cc[ce - 1] : bV;
                                for ("function" == typeof cf ? (cf = cR(cf, ch, 5), ce -= 2) : (cf = "function" == typeof ch ? ch : bV, ce -= cf ? 1 : 0), cg && i(cc[0], cc[1], cg) && (cf = 3 > ce ? bV : cf, ce = 1); ++cd < ce; ) {
                                    var ci = cc[cd];
                                    ci && s(Z, ci, cf)
                                }
                                return Z
                            })
                        }
                        function es(s, Z) {
                            return function (cc, cd) {
                                var ce = cc ? fC(cc) : 0;
                                if (!T(ce)) {
                                    return s(cc, cd)
                                }
                                for (var cf = Z ? ce : -1, cg = d9(cc); (Z ? cf-- : ++cf < ce) && cd(cg[cf], cf, cg) !== !1; ) {
                                }
                                return cc
                            }
                        }
                        function eG(s) {
                            return function (Z, cc, cd) {
                                for (var ce = d9(Z), cf = cd(Z), cg = cf.length, ch = s ? cg : -1; s ? ch-- : ++ch < cg; ) {
                                    var ci = cf[ch];
                                    if (cc(ce[ci], ci, ce) === !1) {
                                        break
                                    }
                                }
                                return Z
                            }
                        }
                        function eU(s, Z) {
                            function cc() {
                                var ce = this && this !== aq && this instanceof cc ? cd : s;
                                return ce.apply(Z, arguments)
                            }
                            var cd = fH(s);
                            return cc
                        }
                        function e8(s) {
                            return fP && em ? new hO(s) : null
                        }
                        function ft(s) {
                            return function (Z) {
                                for (var cc = -1,
                                        cd = hX(ek(Z)), ce = cd.length, cf = ""; ++cc < ce; ) {
                                    cf = s(cf, cd[cc], cc)
                                }
                                return cf
                            }
                        }
                        function fH(s) {
                            return function () {
                                var Z = arguments;
                                switch (Z.length) {
                                    case 0:
                                        return new s;
                                    case 1:
                                        return new s(Z[0]);
                                    case 2:
                                        return new s(Z[0], Z[1]);
                                    case 3:
                                        return new s(Z[0], Z[1], Z[2]);
                                    case 4:
                                        return new s(Z[0], Z[1], Z[2], Z[3]);
                                    case 5:
                                        return new s(Z[0], Z[1], Z[2], Z[3], Z[4]);
                                    case 6:
                                        return new s(Z[0], Z[1], Z[2], Z[3], Z[4], Z[5]);
                                    case 7:
                                        return new s(Z[0], Z[1], Z[2], Z[3], Z[4], Z[5], Z[6])
                                }
                                var cc = dO(s.prototype),
                                        cd = s.apply(cc, Z);
                                return dx(cd) ? cd : cc
                            }
                        }
                        function fV(s) {
                            function Z(cc, cd, ce) {
                                ce && i(cc, cd, ce) && (cd = bV);
                                var cf = d8(cc, s, bV, bV, bV, bV, bV, cd);
                                return cf.placeholder = Z.placeholder,
                                        cf
                            }
                            return Z
                        }
                        function gi(s, Z) {
                            return fL(function (cc) {
                                var cd = cc[0];
                                return null == cd ? cd : (cc.push(Z), s.apply(bV, cc))
                            })
                        }
                        function gx(s, Z) {
                            return function (cc, cd, ce) {
                                if (ce && i(cc, cd, ce) && (cd = bV), cd = e9(cd, ce, 3), 1 == cd.length) {
                                    cc = ck(cc) ? cc : dV(cc);
                                    var cf = c3(cc, cd, s, Z);
                                    if (!cc.length || cf !== Z) {
                                        return cf
                                    }
                                }
                                return h5(cc, cd, s, Z)
                            }
                        }
                        function gM(s, Z) {
                            return function (cc, cd, ce) {
                                if (cd = e9(cd, ce, 3), ck(cc)) {
                                    var cf = ax(cc, cd, Z);
                                    return cf > -1 ? cc[cf] : bV
                                }
                                return b1(cc, cd, s)
                            }
                        }
                        function g1(s) {
                            return function (Z, cc, cd) {
                                return Z && Z.length ? (cc = e9(cc, cd, 3), ax(Z, cc, s)) : -1
                            }
                        }
                        function hn(s) {
                            return function (Z, cc, cd) {
                                return cc = e9(cc, cd, 3),
                                        b1(Z, cc, s, !0)
                            }
                        }
                        function hC(s) {
                            return function () {
                                for (var Z, cc = arguments.length,
                                        cd = s ? cc : -1, ce = 0, cf = fm(cc); s ? cd-- : ++cd < cc; ) {
                                    var cg = cf[ce++] = arguments[cd];
                                    if ("function" != typeof cg) {
                                        throw new hJ(bq)
                                    }
                                    !Z && f7.prototype.thru && "wrapper" == fu(cg) && (Z = new f7([], !0))
                                }
                                for (cd = Z ? -1 : cc; ++cd < cc; ) {
                                    cg = cf[cd];
                                    var ch = fu(cg),
                                            ci = "wrapper" == ch ? fo(cg) : bV;
                                    Z = ci && C(ci[0]) && ci[1] == (aO | ay | aG | aS) && !ci[4].length && 1 == ci[9] ? Z[fu(ci[0])].apply(Z, ci[3]) : 1 == cg.length && C(cg) ? Z[ch]() : Z.thru(cg)
                                }
                                return function () {
                                    var da = arguments,
                                            dc = da[0];
                                    if (Z && 1 == da.length && ck(dc) && dc.length >= be) {
                                        return Z.plant(dc).value()
                                    }
                                    for (var dd = 0,
                                            de = cc ? cf[dd].apply(this, da) : dc; ++dd < cc; ) {
                                        de = cf[dd].call(this, de)
                                    }
                                    return de
                                }
                            }
                        }
                        function hR(s, Z) {
                            return function (cc, cd, ce) {
                                return "function" == typeof cd && ce === bV && ck(cc) ? s(cc, cd) : Z(cc, cR(cd, ce, 3))
                            }
                        }
                        function h7(s) {
                            return function (Z, cc, cd) {
                                return ("function" != typeof cc || cd !== bV) && (cc = cR(cc, cd, 3)),
                                        s(Z, cc, t)
                            }
                        }
                        function B(s) {
                            return function (Z, cc, cd) {
                                return ("function" != typeof cc || cd !== bV) && (cc = cR(cc, cd, 3)),
                                        s(Z, cc)
                            }
                        }
                        function S(s) {
                            return function (Z, cc, cd) {
                                var ce = {};
                                return cc = e9(cc, cd, 3),
                                        cQ(Z,
                                                function (cf, cg, ch) {
                                                    var ci = cc(cf, cg, ch);
                                                    cg = s ? ci : cg,
                                                            cf = s ? cf : ci,
                                                            ce[cg] = cf
                                                }),
                                        ce
                            }
                        }
                        function b3(s) {
                            return function (Z, cc, cd) {
                                return Z = aJ(Z),
                                        (s ? Z : "") + c6(Z, cc, cd) + (s ? "" : Z)
                            }
                        }
                        function cp(s) {
                            var Z = fL(function (cc, cd) {
                                var ce = bx(cd, Z.placeholder);
                                return d8(cc, s, bV, cd, ce)
                            });
                            return Z
                        }
                        function cE(s, Z) {
                            return function (cc, cd, ce, cf) {
                                var cg = arguments.length < 3;
                                return "function" == typeof cd && cf === bV && ck(cc) ? s(cc, cd, ce, cg) : g0(cc, e9(cd, cf, 4), ce, cg, Z)
                            }
                        }
                        function cS(s, Z, cc, cd, ce, cf, cg, ch, ci, da) {
                            function dc() {
                                for (var fe = arguments.length,
                                        ff = fe,
                                        fg = fm(fe); ff--; ) {
                                    fg[ff] = arguments[ff]
                                }
                                if (cd && (fg = ds(fg, cd, ce)), cf && (fg = dG(fg, cf, cg)), dg || di) {
                                    var fh = dc.placeholder,
                                            gb = bx(fg, fh);
                                    if (fe -= gb.length, da > fe) {
                                        var gc = ch ? y(ch) : bV,
                                                ec = g9(da - fe, 0),
                                                ed = dg ? gb : bV,
                                                ee = dg ? bV : gb,
                                                ef = dg ? fg : bV,
                                                eg = dg ? bV : fg;
                                        Z |= dg ? aG : aK,
                                                Z &= ~(dg ? aK : aG),
                                                dh || (Z &= ~(aj | an));
                                        var eh = [s, Z, cc, ef, ed, eg, ee, gc, ci, ec],
                                                fb = cS.apply(bV, eh);
                                        return C(s) && fQ(fb, eh),
                                                fb.placeholder = fh,
                                                fb
                                    }
                                }
                                var fc = de ? cc : this,
                                        fd = df ? fc[s] : s;
                                return ch && (fg = du(fg, ch)),
                                        dd && ci < fg.length && (fg.length = ci),
                                        this && this !== aq && this instanceof dc && (fd = eb || fH(s)),
                                        fd.apply(fc, fg)
                            }
                            var dd = Z & aO,
                                    de = Z & aj,
                                    df = Z & an,
                                    dg = Z & ay,
                                    dh = Z & at,
                                    di = Z & aC,
                                    eb = df ? bV : fH(s);
                            return dc
                        }
                        function c6(s, Z, cc) {
                            var cd = s.length;
                            if (Z = +Z, cd >= Z || !gF(Z)) {
                                return ""
                            }
                            var ce = Z - cd;
                            return cc = null == cc ? " " : cc + "",
                                    fN(cc, fB(ce / cc.length)).slice(0, ce)
                        }
                        function dt(s, Z, cc, cd) {
                            function ce() {
                                for (var ch = -1,
                                        ci = arguments.length,
                                        da = -1,
                                        dc = cd.length,
                                        dd = fm(dc + ci); ++da < dc; ) {
                                    dd[da] = cd[da]
                                }
                                for (; ci--; ) {
                                    dd[da++] = arguments[++ch]
                                }
                                var de = this && this !== aq && this instanceof ce ? cg : s;
                                return de.apply(cf ? cc : this, dd)
                            }
                            var cf = Z & aj,
                                    cg = fH(s);
                            return ce
                        }
                        function dH(s) {
                            var Z = gp[s];
                            return function (cc, cd) {
                                return cd = cd === bV ? 0 : +cd || 0,
                                        cd ? (cd = dN(10, cd), Z(cc * cd) / cd) : Z(cc)
                            }
                        }
                        function dU(s) {
                            return function (Z, cc, cd, ce) {
                                var cf = e9(cd);
                                return null == cd && cf === gK ? co(Z, cc, s) : cD(Z, cc, cf(cd, ce, 1), s)
                            }
                        }
                        function d8(s, Z, cc, cd, ce, cf, cg, ch) {
                            var ci = Z & an;
                            if (!ci && "function" != typeof s) {
                                throw new hJ(bq)
                            }
                            var da = cd ? cd.length : 0;
                            if (da || (Z &= ~(aG | aK), cd = ce = bV), da -= ce ? ce.length : 0, Z & aK) {
                                var dc = cd,
                                        dd = ce;
                                cd = ce = bV
                            }
                            var de = ci ? bV : fo(s),
                                    df = [s, Z, cc, cd, ce, dc, dd, cf, cg, ch];
                            if (de && (cq(df, de), Z = df[1], ch = df[9]), df[9] = null == ch ? ci ? 0 : s.length : g9(ch - da, 0) || 0, Z == aj) {
                                var dg = eU(df[0], df[2])
                            } else {
                                dg = Z != aG && Z != (aj | aG) || df[4].length ? cS.apply(bV, df) : dt.apply(bV, df)
                            }
                            var dh = de ? e3 : fQ;
                            return dh(dg, df)
                        }
                        function et(s, Z, cc, cd, ce, cf, cg) {
                            var ch = -1,
                                    ci = s.length,
                                    da = Z.length;
                            if (ci != da && !(ce && da > ci)) {
                                return !1
                            }
                            for (; ++ch < ci; ) {
                                var dc = s[ch],
                                        dd = Z[ch],
                                        de = cd ? cd(ce ? dd : dc, ce ? dc : dd, ch) : bV;
                                if (de !== bV) {
                                    if (de) {
                                        continue
                                    }
                                    return !1
                                }
                                if (ce) {
                                    if (!eE(Z,
                                            function (df) {
                                                return dc === df || cc(dc, df, cd, ce, cf, cg)
                                            })) {
                                        return !1
                                    }
                                } else {
                                    if (dc !== dd && !cc(dc, dd, cd, ce, cf, cg)) {
                                        return !1
                                    }
                                }
                            }
                            return !0
                        }
                        function eH(s, Z, cc) {
                            switch (cc) {
                                case bG:
                                case bK:
                                    return +s == +Z;
                                case bO:
                                    return s.name == Z.name && s.message == Z.message;
                                case c:
                                    return s != +s ? Z != +Z : s == +Z;
                                case ag:
                                case ao:
                                    return s == Z + ""
                            }
                            return !1
                        }
                        function eV(Z, cc, cd, ce, cf, cg, ch) {
                            var ci = e5(Z),
                                    da = ci.length,
                                    dc = e5(cc),
                                    dd = dc.length;
                            if (da != dd && !cf) {
                                return !1
                            }
                            for (var de = da; de--; ) {
                                var df = ci[de];
                                if (!(cf ? df in cc : I.call(cc, df))) {
                                    return !1
                                }
                            }
                            for (var dg = cf; ++de < da; ) {
                                df = ci[de];
                                var dh = Z[df],
                                        di = cc[df],
                                        eb = ce ? ce(cf ? di : dh, cf ? dh : di, df) : bV;
                                if (!(eb === bV ? cd(dh, di, ce, cf, cg, ch) : eb)) {
                                    return !1
                                }
                                dg || (dg = "constructor" == df)
                            }
                            if (!dg) {
                                var ec = Z.constructor,
                                        ed = cc.constructor;
                                if (ec != ed && "constructor" in Z && "constructor" in cc && !("function" == typeof ec && ec instanceof ec && "function" == typeof ed && ed instanceof ed)) {
                                    return !1
                                }
                            }
                            return !0
                        }
                        function e9(s, Z, cc) {
                            var cd = N.callback || ik;
                            return cd = cd === ik ? gK : cd,
                                    cc ? cd(s, Z, cc) : cd
                        }
                        function fu(s) {
                            for (var Z = s.name,
                                    cc = dB[Z], cd = cc ? cc.length : 0; cd--; ) {
                                var ce = cc[cd],
                                        cf = ce.func;
                                if (null == cf || cf == s) {
                                    return ce.name
                                }
                            }
                            return Z
                        }
                        function fI(s, Z, cc) {
                            var cd = N.indexOf || hE;
                            return cd = cd === hE ? aB : cd,
                                    s ? cd(s, Z, cc) : cd
                        }
                        function fW(s) {
                            for (var Z = G(s), cc = Z.length; cc--; ) {
                                Z[cc][2] = b4(Z[cc][1])
                            }
                            return Z
                        }
                        function gj(s, Z) {
                            var cc = null == s ? bV : s[Z];
                            return ej(cc) ? cc : bV
                        }
                        function gy(s, Z, cc) {
                            for (var cd = -1,
                                    ce = cc.length; ++cd < ce; ) {
                                var cf = cc[cd],
                                        cg = cf.size;
                                switch (cf.type) {
                                    case "drop":
                                        s += cg;
                                        break;
                                    case "dropRight":
                                        Z -= cg;
                                        break;
                                    case "take":
                                        Z = hv(Z, s + cg);
                                        break;
                                    case "takeRight":
                                        s = g9(s, Z - cg)
                                }
                            }
                            return {
                                start: s,
                                end: Z
                            }
                        }
                        function gN(s) {
                            var Z = s.length,
                                    cc = new s.constructor(Z);
                            return Z && "string" == typeof s[0] && I.call(s, "index") && (cc.index = s.index, cc.input = s.input),
                                    cc
                        }
                        function g2(s) {
                            var Z = s.constructor;
                            return "function" == typeof Z && Z instanceof Z || (Z = gT),
                                    new Z
                        }
                        function ho(s, Z, cc) {
                            var cd = s.constructor;
                            switch (Z) {
                                case az:
                                    return c5(s);
                                case bG:
                                case bK:
                                    return new cd(+s);
                                case aD:
                                case aH:
                                case aL:
                                case aP:
                                case aT:
                                case aX:
                                case a1:
                                case a5:
                                case a9:
                                    var ce = s.buffer;
                                    return new cd(cc ? c5(ce) : ce, s.byteOffset, s.length);
                                case c:
                                case ao:
                                    return new cd(s);
                                case ag:
                                    var cf = new cd(s.source, aI.exec(s));
                                    cf.lastIndex = s.lastIndex
                            }
                            return cf
                        }
                        function hD(s, Z, cc) {
                            null == s || q(Z, s) || (Z = eu(Z), s = 1 == Z.length ? s : dF(s, hm(Z, 0, -1)), Z = h9(Z));
                            var cd = null == s ? s : s[Z];
                            return null == cd ? bV : cd.apply(s, cc)
                        }
                        function hS(s) {
                            return null != s && T(fC(s))
                        }
                        function h8(s, Z) {
                            return s = "number" == typeof s || aU.test(s) ? +s : -1,
                                    Z = null == Z ? c0 : Z,
                                    s > -1 && s % 1 == 0 && Z > s
                        }
                        function i(s, Z, cc) {
                            if (!dx(cc)) {
                                return !1
                            }
                            var cd = typeof Z;
                            if ("number" == cd ? hS(cc) && h8(Z, cc.length) : "string" == cd && Z in cc) {
                                var ce = cc[Z];
                                return s === s ? s === ce : ce !== ce
                            }
                            return !1
                        }
                        function q(s, Z) {
                            var cc = typeof s;
                            if ("string" == cc && bX.test(s) || "number" == cc) {
                                return !0
                            }
                            if (ck(s)) {
                                return !1
                            }
                            var cd = !bT.test(s);
                            return cd || null != Z && s in d9(Z)
                        }
                        function C(s) {
                            var Z = fu(s);
                            if (!(Z in h3.prototype)) {
                                return !1
                            }
                            var cc = N[Z];
                            if (s === cc) {
                                return !0
                            }
                            var cd = fo(cc);
                            return !!cd && s === cd[0]
                        }
                        function T(s) {
                            return "number" == typeof s && s > -1 && s % 1 == 0 && c0 >= s
                        }
                        function b4(s) {
                            return s === s && !dx(s)
                        }
                        function cq(s, Z) {
                            var cc = s[1],
                                    cd = Z[1],
                                    ce = cc | cd,
                                    cf = aO > ce,
                                    cg = cd == aO && cc == ay || cd == aO && cc == aS && s[7].length <= Z[8] || cd == (aO | aS) && cc == ay;
                            if (!cf && !cg) {
                                return s
                            }
                            cd & aj && (s[2] = Z[2], ce |= cc & aj ? 0 : at);
                            var ch = Z[3];
                            if (ch) {
                                var ci = s[3];
                                s[3] = ci ? ds(ci, ch, Z[4]) : y(ch),
                                        s[4] = ci ? bx(s[3], bu) : y(Z[4])
                            }
                            return ch = Z[5],
                                    ch && (ci = s[5], s[5] = ci ? dG(ci, ch, Z[6]) : y(ch), s[6] = ci ? bx(s[5], bu) : y(Z[6])),
                                    ch = Z[7],
                                    ch && (s[7] = y(ch)),
                                    cd & aO && (s[8] = null == s[8] ? Z[8] : hv(s[8], Z[8])),
                                    null == s[9] && (s[9] = Z[9]),
                                    s[0] = Z[0],
                                    s[1] = ce,
                                    s
                        }
                        function cF(s, Z) {
                            return s === bV ? Z : cz(s, Z, cF)
                        }
                        function cT(s, Z) {
                            s = d9(s);
                            for (var cc = -1,
                                    cd = Z.length,
                                    ce = {}; ++cc < cd; ) {
                                var cf = Z[cc];
                                cf in s && (ce[cf] = s[cf])
                            }
                            return ce
                        }
                        function c7(s, Z) {
                            var cc = {};
                            return cC(s,
                                    function (cd, ce, cf) {
                                        Z(cd, ce, cf) && (cc[ce] = cd)
                                    }),
                                    cc
                        }
                        function du(s, Z) {
                            for (var cc = s.length,
                                    cd = hv(Z.length, cc), ce = y(s); cd--; ) {
                                var cf = Z[cd];
                                s[cd] = h8(cf, cc) ? ce[cf] : bV
                            }
                            return s
                        }
                        function dI(s) {
                            for (var Z = t(s), cc = Z.length, cd = cc && s.length, ce = !!cd && T(cd) && (ck(s) || hV(s)), cf = -1, cg = []; ++cf < cc; ) {
                                var ch = Z[cf];
                                (ce && h8(ch, cd) || I.call(s, ch)) && cg.push(ch)
                            }
                            return cg
                        }
                        function dV(s) {
                            return null == s ? [] : hS(s) ? dx(s) ? s : gT(s) : cJ(s)
                        }
                        function d9(s) {
                            return dx(s) ? s : gT(s)
                        }
                        function eu(s) {
                            if (ck(s)) {
                                return s
                            }
                            var Z = [];
                            return aJ(s).replace(ah,
                                    function (cc, cd, ce, cf) {
                                        Z.push(ce ? cf.replace(aA, "$1") : cd || cc)
                                    }),
                                    Z
                        }
                        function eI(s) {
                            return s instanceof h3 ? s.clone() : new f7(s.__wrapped__, s.__chain__, y(s.__actions__))
                        }
                        function eW(s, Z, cc) {
                            Z = (cc ? i(s, Z, cc) : null == Z) ? 1 : g9(f3(Z) || 1, 1);
                            for (var cd = 0,
                                    ce = s ? s.length : 0, cf = -1, cg = fm(fB(ce / Z)); ce > cd; ) {
                                cg[++cf] = hm(s, cd, cd += Z)
                            }
                            return cg
                        }
                        function fa(s) {
                            for (var Z = -1,
                                    cc = s ? s.length : 0, cd = -1, ce = []; ++Z < cc; ) {
                                var cf = s[Z];
                                cf && (ce[++cd] = cf)
                            }
                            return ce
                        }
                        function fv(s, Z, cc) {
                            var cd = s ? s.length : 0;
                            return cd ? ((cc ? i(s, Z, cc) : null == Z) && (Z = 1), hm(s, 0 > Z ? 0 : Z)) : []
                        }
                        function fJ(s, Z, cc) {
                            var cd = s ? s.length : 0;
                            return cd ? ((cc ? i(s, Z, cc) : null == Z) && (Z = 1), Z = cd - (+Z || 0), hm(s, 0, 0 > Z ? 0 : Z)) : []
                        }
                        function fX(s, Z, cc) {
                            return s && s.length ? R(s, e9(Z, cc, 3), !0, !0) : []
                        }
                        function gk(s, Z, cc) {
                            return s && s.length ? R(s, e9(Z, cc, 3), !0) : []
                        }
                        function gz(s, Z, cc, cd) {
                            var ce = s ? s.length : 0;
                            return ce ? (cc && "number" != typeof cc && i(s, Z, cc) && (cc = 0, cd = ce), z(s, Z, cc, cd)) : []
                        }
                        function gO(s) {
                            return s ? s[0] : bV
                        }
                        function g3(s, Z, cc) {
                            var cd = s ? s.length : 0;
                            return cc && i(s, Z, cc) && (Z = !1),
                                    cd ? cn(s, Z) : []
                        }
                        function hp(s) {
                            var Z = s ? s.length : 0;
                            return Z ? cn(s, !0) : []
                        }
                        function hE(s, Z, cc) {
                            var cd = s ? s.length : 0;
                            if (!cd) {
                                return -1
                            }
                            if ("number" == typeof cc) {
                                cc = 0 > cc ? g9(cd + cc, 0) : cc
                            } else {
                                if (cc) {
                                    var ce = co(s, Z);
                                    return cd > ce && (Z === Z ? Z === s[ce] : s[ce] !== s[ce]) ? ce : -1
                                }
                            }
                            return aB(s, Z, cc || 0)
                        }
                        function hT(s) {
                            return fJ(s, 1)
                        }
                        function h9(s) {
                            var Z = s ? s.length : 0;
                            return Z ? s[Z - 1] : bV
                        }
                        function D(s, Z, cc) {
                            var cd = s ? s.length : 0;
                            if (!cd) {
                                return -1
                            }
                            var ce = cd;
                            if ("number" == typeof cc) {
                                ce = (0 > cc ? g9(cd + cc, 0) : hv(cc || 0, cd - 1)) + 1
                            } else {
                                if (cc) {
                                    ce = co(s, Z, !0) - 1;
                                    var cf = s[ce];
                                    return (Z === Z ? Z === cf : cf !== cf) ? ce : -1
                                }
                            }
                            if (Z !== Z) {
                                return bl(s, ce, !0)
                            }
                            for (; ce--; ) {
                                if (s[ce] === Z) {
                                    return ce
                                }
                            }
                            return -1
                        }
                        function U() {
                            var s = arguments,
                                    Z = s[0];
                            if (!Z || !Z.length) {
                                return Z
                            }
                            for (var cc = 0,
                                    cd = fI(), ce = s.length; ++cc < ce; ) {
                                for (var cf = 0,
                                        cg = s[cc]; (cf = cd(Z, cg, cf)) > -1; ) {
                                    eO.call(Z, cf, 1)
                                }
                            }
                            return Z
                        }
                        function b5(s, Z, cc) {
                            var cd = [];
                            if (!s || !s.length) {
                                return cd
                            }
                            var ce = -1,
                                    cf = [],
                                    cg = s.length;
                            for (Z = e9(Z, cc, 3); ++ce < cg; ) {
                                var ch = s[ce];
                                Z(ch, ce, s) && (cd.push(ch), cf.push(ce))
                            }
                            return gw(s, cf),
                                    cd
                        }
                        function cr(s) {
                            return fv(s, 1)
                        }
                        function cG(s, Z, cc) {
                            var cd = s ? s.length : 0;
                            return cd ? (cc && "number" != typeof cc && i(s, Z, cc) && (Z = 0, cc = cd), hm(s, Z, cc)) : []
                        }
                        function cU(s, Z, cc) {
                            var cd = s ? s.length : 0;
                            return cd ? ((cc ? i(s, Z, cc) : null == Z) && (Z = 1), hm(s, 0, 0 > Z ? 0 : Z)) : []
                        }
                        function c8(s, Z, cc) {
                            var cd = s ? s.length : 0;
                            return cd ? ((cc ? i(s, Z, cc) : null == Z) && (Z = 1), Z = cd - (+Z || 0), hm(s, 0 > Z ? 0 : Z)) : []
                        }
                        function dv(s, Z, cc) {
                            return s && s.length ? R(s, e9(Z, cc, 3), !1, !0) : []
                        }
                        function dJ(s, Z, cc) {
                            return s && s.length ? R(s, e9(Z, cc, 3)) : []
                        }
                        function dW(s, Z, cc, cd) {
                            var ce = s ? s.length : 0;
                            if (!ce) {
                                return []
                            }
                            null != Z && "boolean" != typeof Z && (cd = cc, cc = i(s, Z, cd) ? bV : Z, Z = !1);
                            var cf = e9();
                            return (null != cc || cf !== gK) && (cc = cf(cc, cd, 3)),
                                    Z && fI() == aB ? bB(s, cc) : p(s, cc)
                        }
                        function ea(s) {
                            if (!s || !s.length) {
                                return []
                            }
                            var Z = -1,
                                    cc = 0;
                            s = dq(s,
                                    function (ce) {
                                        return hS(ce) ? (cc = g9(ce.length, cc), !0) : void 0
                                    });
                            for (var cd = fm(cc); ++Z < cc; ) {
                                cd[Z] = dE(s, fU(Z))
                            }
                            return cd
                        }
                        function ev(s, Z, cc) {
                            var cd = s ? s.length : 0;
                            if (!cd) {
                                return []
                            }
                            var ce = ea(s);
                            return null == Z ? ce : (Z = cR(Z, cc, 4), dE(ce,
                                    function (cf) {
                                        return d5(cf, Z, bV, !0)
                                    }))
                        }
                        function eJ() {
                            for (var s = -1,
                                    Z = arguments.length; ++s < Z; ) {
                                var cc = arguments[s];
                                if (hS(cc)) {
                                    var cd = cd ? dR(hA(cd, cc), hA(cc, cd)) : cc
                                }
                            }
                            return cd ? p(cd) : []
                        }
                        function eX(s, Z) {
                            var cc = -1,
                                    cd = s ? s.length : 0,
                                    ce = {};
                            for (!cd || Z || ck(s[0]) || (Z = []); ++cc < cd; ) {
                                var cf = s[cc];
                                Z ? ce[cf] = Z[cc] : cf && (ce[cf[0]] = cf[1])
                            }
                            return ce
                        }
                        function fi(s) {
                            var Z = N(s);
                            return Z.__chain__ = !0,
                                    Z
                        }
                        function fw(s, Z, cc) {
                            return Z.call(cc, s),
                                    s
                        }
                        function fK(s, Z, cc) {
                            return Z.call(cc, s)
                        }
                        function fY() {
                            return fi(this)
                        }
                        function gl() {
                            return new f7(this.value(), this.__chain__)
                        }
                        function gA(s) {
                            for (var Z, cc = this; cc instanceof b0; ) {
                                var cd = eI(cc);
                                Z ? ce.__wrapped__ = cd : Z = cd;
                                var ce = cd;
                                cc = cc.__wrapped__
                            }
                            return ce.__wrapped__ = s,
                                    Z
                        }
                        function gP() {
                            var s = this.__wrapped__,
                                    Z = function (cd) {
                                        return cc && cc.__dir__ < 0 ? cd : cd.reverse()
                                    };
                            if (s instanceof h3) {
                                var cc = s;
                                return this.__actions__.length && (cc = new h3(this)),
                                        cc = cc.reverse(),
                                        cc.__actions__.push({
                                            func: fK,
                                            args: [Z],
                                            thisArg: bV
                                        }),
                                        new f7(cc, this.__chain__)
                            }
                            return this.thru(Z)
                        }
                        function g4() {
                            return this.value() + ""
                        }
                        function hq() {
                            return b2(this.__wrapped__, this.__actions__)
                        }
                        function hF(s, Z, cc) {
                            var cd = ck(s) ? cP : hP;
                            return cc && i(s, Z, cc) && (Z = bV),
                                    ("function" != typeof Z || cc !== bV) && (Z = e9(Z, cc, 3)),
                                    cd(s, Z)
                        }
                        function hU(s, Z, cc) {
                            var cd = ck(s) ? dq : Q;
                            return Z = e9(Z, cc, 3),
                                    cd(s, Z)
                        }
                        function ia(s, Z) {
                            return cy(s, eT(Z))
                        }
                        function j(s, Z, cc, cd) {
                            var ce = s ? fC(s) : 0;
                            return T(ce) || (s = cJ(s), ce = s.length),
                                    cc = "number" != typeof cc || cd && i(Z, cc, cd) ? 0 : 0 > cc ? g9(ce + cc, 0) : cc || 0,
                                    "string" == typeof s || !ck(s) && fy(s) ? ce >= cc && s.indexOf(Z, cc) > -1 : !!ce && fI(s, Z, cc) > -1
                        }
                        function r(s, Z, cc) {
                            var cd = ck(s) ? dE : eF;
                            return Z = e9(Z, cc, 3),
                                    cd(s, Z)
                        }
                        function E(s, Z) {
                            return r(s, dz(Z))
                        }
                        function V(s, Z, cc) {
                            var cd = ck(s) ? dq : Q;
                            return Z = e9(Z, cc, 3),
                                    cd(s,
                                            function (ce, cf, cg) {
                                                return !Z(ce, cf, cg)
                                            })
                        }
                        function b6(s, Z, cc) {
                            if (cc ? i(s, Z, cc) : null == Z) {
                                s = dV(s);
                                var cd = s.length;
                                return cd > 0 ? s[gL(0, cd - 1)] : bV
                            }
                            var ce = -1,
                                    cf = gR(s),
                                    cd = cf.length,
                                    cg = cd - 1;
                            for (Z = hv(0 > Z ? 0 : +Z || 0, cd); ++ce < Z; ) {
                                var ch = gL(ce, cg),
                                        ci = cf[ch];
                                cf[ch] = cf[ce],
                                        cf[ce] = ci
                            }
                            return cf.length = Z,
                                    cf
                        }
                        function cs(s) {
                            return b6(s, ab)
                        }
                        function cH(s) {
                            var Z = s ? fC(s) : 0;
                            return T(Z) ? Z : e5(s).length
                        }
                        function cV(s, Z, cc) {
                            var cd = ck(s) ? eE : hB;
                            return cc && i(s, Z, cc) && (Z = bV),
                                    ("function" != typeof Z || cc !== bV) && (Z = e9(Z, cc, 3)),
                                    cd(s, Z)
                        }
                        function c9(s, Z, cc) {
                            if (null == s) {
                                return []
                            }
                            cc && i(s, Z, cc) && (Z = bV);
                            var cd = -1;
                            Z = e9(Z, cc, 3);
                            var ce = eF(s,
                                    function (cf, cg, ch) {
                                        return {
                                            criteria: Z(cf, cg, ch),
                                            index: ++cd,
                                            value: cf
                                        }
                                    });
                            return hQ(ce, aV)
                        }
                        function dw(s, Z, cc, cd) {
                            return null == s ? [] : (cd && i(Z, cc, cd) && (cc = bV), ck(Z) || (Z = null == Z ? [] : [Z]), ck(cc) || (cc = null == cc ? [] : [cc]), h6(s, Z, cc))
                        }
                        function dK(s, Z) {
                            return hU(s, eT(Z))
                        }
                        function dX(s, Z) {
                            if ("function" != typeof Z) {
                                if ("function" != typeof s) {
                                    throw new hJ(bq)
                                }
                                var cc = s;
                                s = Z,
                                        Z = cc
                            }
                            return s = gF(s = +s) ? s : 0,
                                    function () {
                                        return--s < 1 ? Z.apply(this, arguments) : void 0
                                    }
                        }
                        function ei(s, Z, cc) {
                            return cc && i(s, Z, cc) && (Z = bV),
                                    Z = s && null == Z ? s.length : g9(+Z || 0, 0),
                                    d8(s, aO, bV, bV, bV, bV, Z)
                        }
                        function ew(s, Z) {
                            var cc;
                            if ("function" != typeof Z) {
                                if ("function" != typeof s) {
                                    throw new hJ(bq)
                                }
                                var cd = s;
                                s = Z,
                                        Z = cd
                            }
                            return function () {
                                return--s > 0 && (cc = Z.apply(this, arguments)),
                                        1 >= s && (Z = bV),
                                        cc
                            }
                        }
                        function eK(Z, cc, cd) {
                            function ce() {
                                dg && dl(dg),
                                        dc && dl(dc),
                                        di = 0,
                                        dc = dg = dh = bV
                            }
                            function cf(s, ee) {
                                ee && dl(ee),
                                        dc = dg = dh = bV,
                                        s && (di = fp(), dd = Z.apply(df, da), dg || dc || (da = df = bV))
                            }
                            function cg() {
                                var s = cc - (fp() - de);
                                0 >= s || s > cc ? cf(dh, dc) : dg = eA(cg, s)
                            }
                            function ch() {
                                cf(ec, dg)
                            }
                            function ci() {
                                if (da = arguments, de = fp(), df = this, dh = ec && (dg || !ed), eb === !1) {
                                    var s = ed && !dg
                                } else {
                                    dc || ed || (di = de);
                                    var ee = eb - (de - di),
                                            ef = 0 >= ee || ee > eb;
                                    ef ? (dc && (dc = dl(dc)), di = de, dd = Z.apply(df, da)) : dc || (dc = eA(ch, ee))
                                }
                                return ef && dg ? dg = dl(dg) : dg || cc === eb || (dg = eA(cg, cc)),
                                        s && (ef = !0, dd = Z.apply(df, da)),
                                        !ef || dg || dc || (da = df = bV),
                                        dd
                            }
                            var da, dc, dd, de, df, dg, dh, di = 0,
                                    eb = !1,
                                    ec = !0;
                            if ("function" != typeof Z) {
                                throw new hJ(bq)
                            }
                            if (cc = 0 > cc ? 0 : +cc || 0, cd === !0) {
                                var ed = !0;
                                ec = !1
                            } else {
                                dx(cd) && (ed = !!cd.leading, eb = "maxWait" in cd && g9(+cd.maxWait || 0, cc), ec = "trailing" in cd ? !!cd.trailing : ec)
                            }
                            return ci.cancel = ce,
                                    ci
                        }
                        function eY(s, Z) {
                            if ("function" != typeof s || Z && "function" != typeof Z) {
                                throw new hJ(bq)
                            }
                            var cc = function () {
                                var cd = arguments,
                                        ce = Z ? Z.apply(this, cd) : cd[0],
                                        cf = cc.cache;
                                if (cf.has(ce)) {
                                    return cf.get(ce)
                                }
                                var cg = s.apply(this, cd);
                                return cc.cache = cf.set(ce, cg),
                                        cg
                            };
                            return cc.cache = new eY.Cache,
                                    cc
                        }
                        function fj(s) {
                            if ("function" != typeof s) {
                                throw new hJ(bq)
                            }
                            return function () {
                                return !s.apply(this, arguments)
                            }
                        }
                        function fx(s) {
                            return ew(2, s)
                        }
                        function fL(s, Z) {
                            if ("function" != typeof s) {
                                throw new hJ(bq)
                            }
                            return Z = g9(Z === bV ? s.length - 1 : +Z || 0, 0),
                                    function () {
                                        for (var cc = arguments,
                                                cd = -1,
                                                ce = g9(cc.length - Z, 0), cf = fm(ce); ++cd < ce; ) {
                                            cf[cd] = cc[Z + cd]
                                        }
                                        switch (Z) {
                                            case 0:
                                                return s.call(this, cf);
                                            case 1:
                                                return s.call(this, cc[0], cf);
                                            case 2:
                                                return s.call(this, cc[0], cc[1], cf)
                                        }
                                        var cg = fm(Z + 1);
                                        for (cd = -1; ++cd < Z; ) {
                                            cg[cd] = cc[cd]
                                        }
                                        return cg[Z] = cf,
                                                s.apply(this, cg)
                                    }
                        }
                        function fZ(s) {
                            if ("function" != typeof s) {
                                throw new hJ(bq)
                            }
                            return function (Z) {
                                return s.apply(this, Z)
                            }
                        }
                        function gm(s, Z, cc) {
                            var cd = !0,
                                    ce = !0;
                            if ("function" != typeof s) {
                                throw new hJ(bq)
                            }
                            return cc === !1 ? cd = !1 : dx(cc) && (cd = "leading" in cc ? !!cc.leading : cd, ce = "trailing" in cc ? !!cc.trailing : ce),
                                    eK(s, Z, {
                                        leading: cd,
                                        maxWait: +Z,
                                        trailing: ce
                                    })
                        }
                        function gB(s, Z) {
                            return Z = null == Z ? Y : Z,
                                    d8(Z, aG, bV, [s], [])
                        }
                        function gQ(s, Z, cc, cd) {
                            return Z && "boolean" != typeof Z && i(s, Z, cc) ? Z = !1 : "function" == typeof Z && (cd = cc, cc = Z, Z = !1),
                                    "function" == typeof cc ? gZ(s, Z, cR(cc, cd, 1)) : gZ(s, Z)
                        }
                        function g5(s, Z, cc) {
                            return "function" == typeof Z ? gZ(s, !0, cR(Z, cc, 1)) : gZ(s, !0)
                        }
                        function hr(s, Z) {
                            return s > Z
                        }
                        function hG(s, Z) {
                            return s >= Z
                        }
                        function hV(s) {
                            return bp(s) && hS(s) && I.call(s, "callee") && !d1.call(s, "callee")
                        }
                        function ii(s) {
                            return s === !0 || s === !1 || bp(s) && ca.call(s) == bG
                        }
                        function F(s) {
                            return bp(s) && ca.call(s) == bK
                        }
                        function W(s) {
                            return !!s && 1 === s.nodeType && bp(s) && !eZ(s)
                        }
                        function b7(s) {
                            return null == s ? !0 : hS(s) && (ck(s) || fy(s) || hV(s) || bp(s) && db(s.splice)) ? !s.length : !e5(s).length
                        }
                        function ct(s, Z, cc, cd) {
                            cc = "function" == typeof cc ? cR(cc, cd, 3) : bV;
                            var ce = cc ? cc(s, Z) : bV;
                            return ce === bV ? dS(s, Z, cc) : !!ce
                        }
                        function cI(s) {
                            return bp(s) && "string" == typeof s.message && ca.call(s) == bO
                        }
                        function cW(s) {
                            return "number" == typeof s && gF(s)
                        }
                        function db(s) {
                            return dx(s) && ca.call(s) == bS
                        }
                        function dx(s) {
                            var Z = typeof s;
                            return !!s && ("object" == Z || "function" == Z)
                        }
                        function dL(s, Z, cc, cd) {
                            return cc = "function" == typeof cc ? cR(cc, cd, 3) : bV,
                                    er(s, fW(Z), cc)
                        }
                        function dY(s) {
                            return eL(s) && s != +s
                        }
                        function ej(s) {
                            return null == s ? !1 : db(s) ? cL.test(u.call(s)) : bp(s) && aQ.test(s)
                        }
                        function ex(s) {
                            return null === s
                        }
                        function eL(s) {
                            return "number" == typeof s || bp(s) && ca.call(s) == c
                        }
                        function eZ(s) {
                            var Z;
                            if (!bp(s) || ca.call(s) != ad || hV(s) || !I.call(s, "constructor") && (Z = s.constructor, "function" == typeof Z && !(Z instanceof Z))) {
                                return !1
                            }
                            var cc;
                            return cC(s,
                                    function (cd, ce) {
                                        cc = ce
                                    }),
                                    cc === bV || I.call(s, cc)
                        }
                        function fk(s) {
                            return dx(s) && ca.call(s) == ag
                        }
                        function fy(s) {
                            return "string" == typeof s || bp(s) && ca.call(s) == ao
                        }
                        function fM(s) {
                            return bp(s) && T(s.length) && !!bo[ca.call(s)]
                        }
                        function f0(s) {
                            return s === bV
                        }
                        function gn(s, Z) {
                            return Z > s
                        }
                        function gC(s, Z) {
                            return Z >= s
                        }
                        function gR(s) {
                            var Z = s ? fC(s) : 0;
                            return T(Z) ? Z ? y(s) : [] : cJ(s)
                        }
                        function g6(s) {
                            return gv(s, t(s))
                        }
                        function hs(s, Z, cc) {
                            var cd = dO(s);
                            return cc && i(s, Z, cc) && (Z = bV),
                                    Z ? fT(cd, Z) : cd
                        }
                        function hH(s) {
                            return dr(s, t(s))
                        }
                        function hW(s, Z, cc) {
                            var cd = null == s ? bV : dF(s, eu(Z), Z + "");
                            return cd === bV ? cc : cd
                        }
                        function ij(s, Z) {
                            if (null == s) {
                                return !1
                            }
                            var cc = I.call(s, Z);
                            if (!cc && !q(Z)) {
                                if (Z = eu(Z), s = 1 == Z.length ? s : dF(s, hm(Z, 0, -1)), null == s) {
                                    return !1
                                }
                                Z = h9(Z),
                                        cc = I.call(s, Z)
                            }
                            return cc || T(s.length) && h8(Z, s.length) && (ck(s) || hV(s))
                        }
                        function k(s, Z, cc) {
                            cc && i(s, Z, cc) && (Z = bV);
                            for (var cd = -1,
                                    ce = e5(s), cf = ce.length, cg = {}; ++cd < cf; ) {
                                var ch = ce[cd],
                                        ci = s[ch];
                                Z ? I.call(cg, ci) ? cg[ci].push(ch) : cg[ci] = [ch] : cg[ci] = ch
                            }
                            return cg
                        }
                        function t(s) {
                            if (null == s) {
                                return []
                            }
                            dx(s) || (s = gT(s));
                            var Z = s.length;
                            Z = Z && T(Z) && (ck(s) || hV(s)) && Z || 0;
                            for (var cc = s.constructor,
                                    cd = -1,
                                    ce = "function" == typeof cc && cc.prototype === s,
                                    cf = fm(Z), cg = Z > 0; ++cd < Z; ) {
                                cf[cd] = cd + ""
                            }
                            for (var ch in s) {
                                cg && h8(ch, Z) || "constructor" == ch && (ce || !I.call(s, ch)) || cf.push(ch)
                            }
                            return cf
                        }
                        function G(s) {
                            s = d9(s);
                            for (var Z = -1,
                                    cc = e5(s), cd = cc.length, ce = fm(cd); ++Z < cd; ) {
                                var cf = cc[Z];
                                ce[Z] = [cf, s[cf]]
                            }
                            return ce
                        }
                        function X(s, Z, cc) {
                            var cd = null == s ? bV : s[Z];
                            return cd === bV && (null == s || q(Z, s) || (Z = eu(Z), s = 1 == Z.length ? s : dF(s, hm(Z, 0, -1)), cd = null == s ? bV : s[h9(Z)]), cd = cd === bV ? cc : cd),
                                    db(cd) ? cd.call(s) : cd
                        }
                        function b8(s, Z, cc) {
                            if (null == s) {
                                return s
                            }
                            var cd = Z + "";
                            Z = null != s[cd] || q(Z, s) ? [cd] : eu(Z);
                            for (var ce = -1,
                                    cf = Z.length,
                                    cg = cf - 1,
                                    ch = s; null != ch && ++ce < cf; ) {
                                var ci = Z[ce];
                                dx(ch) && (ce == cg ? ch[ci] = cc : null == ch[ci] && (ch[ci] = h8(Z[ce + 1]) ? [] : {})),
                                        ch = ch[ci]
                            }
                            return s
                        }
                        function cu(s, Z, cc, cd) {
                            var ce = ck(s) || fM(s);
                            if (Z = e9(Z, cd, 4), null == cc) {
                                if (ce || dx(s)) {
                                    var cf = s.constructor;
                                    cc = ce ? ck(s) ? new cf : [] : dO(db(cf) ? cf.prototype : bV)
                                } else {
                                    cc = {}
                                }
                            }
                            return (ce ? P : cQ)(s,
                                    function (cg, ch, ci) {
                                        return Z(cc, cg, ch, ci)
                                    }),
                                    cc
                        }
                        function cJ(s) {
                            return A(s, e5(s))
                        }
                        function cX(s) {
                            return A(s, t(s))
                        }
                        function dj(s, Z, cc) {
                            return Z = +Z || 0,
                                    cc === bV ? (cc = Z, Z = 0) : cc = +cc || 0,
                                    s >= hv(Z, cc) && s < g9(Z, cc)
                        }
                        function dy(s, Z, cc) {
                            cc && i(s, Z, cc) && (Z = cc = bV);
                            var cd = null == s,
                                    ce = null == Z;
                            if (null == cc && (ce && "boolean" == typeof s ? (cc = s, s = 1) : "boolean" == typeof Z && (cc = Z, ce = !0)), cd && ce && (Z = 1, ce = !1), s = +s || 0, ce ? (Z = s, s = 0) : Z = +Z || 0, cc || s % 1 || Z % 1) {
                                var cf = im();
                                return hv(s + cf * (Z - s + dA("1e-" + ((cf + "").length - 1))), Z)
                            }
                            return gL(s, Z)
                        }
                        function dZ(s) {
                            return s = aJ(s),
                                    s && s.charAt(0).toUpperCase() + s.slice(1)
                        }
                        function ek(s) {
                            return s = aJ(s),
                                    s && s.replace(aY, a3).replace(av, "")
                        }
                        function ey(s, Z, cc) {
                            s = aJ(s),
                                    Z += "";
                            var cd = s.length;
                            return cc = cc === bV ? cd : hv(0 > cc ? 0 : +cc || 0, cd),
                                    cc -= Z.length,
                                    cc >= 0 && s.indexOf(Z, cc) == cc
                        }
                        function eM(s) {
                            return s = aJ(s),
                                    s && bD.test(s) ? s.replace(bv, a7) : s
                        }
                        function e0(s) {
                            return s = aJ(s),
                                    s && ap.test(s) ? s.replace(al, bd) : s || "(?:)"
                        }
                        function fl(s, Z, cc) {
                            s = aJ(s),
                                    Z = +Z;
                            var cd = s.length;
                            if (cd >= Z || !gF(Z)) {
                                return s
                            }
                            var ce = (Z - cd) / 2,
                                    cf = f3(ce),
                                    cg = fB(ce);
                            return cc = c6("", cg, cc),
                                    cc.slice(0, cf) + s + cc
                        }
                        function fz(s, Z, cc) {
                            return (cc ? i(s, Z, cc) : null == Z) ? Z = 0 : Z && (Z = +Z),
                                    s = gD(s),
                                    hZ(s, Z || (aM.test(s) ? 16 : 10))
                        }
                        function fN(s, Z) {
                            var cc = "";
                            if (s = aJ(s), Z = +Z, 1 > Z || !s || !gF(Z)) {
                                return cc
                            }
                            do {
                                Z % 2 && (cc += s), Z = f3(Z / 2), s += s
                            } while (Z);
                            return cc
                        }
                        function f1(s, Z, cc) {
                            return s = aJ(s),
                                    cc = null == cc ? 0 : hv(0 > cc ? 0 : +cc || 0, s.length),
                                    s.lastIndexOf(Z, cc) == cc
                        }
                        function go(Z, cc, cd) {
                            var ce = N.templateSettings;
                            cd && i(Z, cc, cd) && (cc = cd = bV),
                                    Z = aJ(Z),
                                    cc = fF(fT({},
                                            cd || cc), ce, fr);
                            var cf, cg, ch = fF(fT({},
                                    cc.imports), ce.imports, fr),
                                    ci = e5(ch),
                                    da = A(ch, ci),
                                    dc = 0,
                                    dd = cc.interpolate || a2,
                                    de = "__p += '",
                                    df = g8((cc.escape || a2).source + "|" + dd.source + "|" + (dd === bP ? aE : a2).source + "|" + (cc.evaluate || a2).source + "|$", "g"),
                                    dg = "//# sourceURL=" + ("sourceURL" in cc ? cc.sourceURL : "lodash.templateSources[" + ++bk + "]") + "\n";
                            Z.replace(df,
                                    function (s, eb, ec, ed, ee, ef) {
                                        return ec || (ec = ed),
                                                de += Z.slice(dc, ef).replace(a6, bh),
                                                eb && (cf = !0, de += "' +\n__e(" + eb + ") +\n'"),
                                                ee && (cg = !0, de += "';\n" + ee + ";\n__p += '"),
                                                ec && (de += "' +\n((__t = (" + ec + ")) == null ? '' : __t) +\n'"),
                                                dc = ef + s.length,
                                                s
                                    }),
                                    de += "';\n";
                            var dh = cc.variable;
                            dh || (de = "with (obj) {\n" + de + "\n}\n"),
                                    de = (cg ? de.replace(bf, "") : de).replace(bj, "$1").replace(bn, "$1;"),
                                    de = "function(" + (dh || "obj") + ") {\n" + (dh ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (cf ? ", __e = _.escape" : "") + (cg ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + de + "return __p\n}";
                            var di = h2(function () {
                                return f2(ci, dg + "return " + de).apply(bV, da)
                            });
                            if (di.source = de, cI(di)) {
                                throw di
                            }
                            return di
                        }
                        function gD(s, Z, cc) {
                            var cd = s;
                            return (s = aJ(s)) ? (cc ? i(cd, Z, cc) : null == Z) ? s.slice(bF(s), bJ(s) + 1) : (Z += "", s.slice(aN(s, Z), aR(s, Z) + 1)) : s
                        }
                        function gS(s, Z, cc) {
                            var cd = s;
                            return s = aJ(s),
                                    s ? (cc ? i(cd, Z, cc) : null == Z) ? s.slice(bF(s)) : s.slice(aN(s, Z + "")) : s
                        }
                        function g7(s, Z, cc) {
                            var cd = s;
                            return s = aJ(s),
                                    s ? (cc ? i(cd, Z, cc) : null == Z) ? s.slice(0, bJ(s) + 1) : s.slice(0, aR(s, Z + "") + 1) : s
                        }
                        function ht(s, Z, cc) {
                            cc && i(s, Z, cc) && (Z = bV);
                            var cd = aW,
                                    ce = a0;
                            if (null != Z) {
                                if (dx(Z)) {
                                    var cf = "separator" in Z ? Z.separator : cf;
                                    cd = "length" in Z ? +Z.length || 0 : cd,
                                            ce = "omission" in Z ? aJ(Z.omission) : ce
                                } else {
                                    cd = +Z || 0
                                }
                            }
                            if (s = aJ(s), cd >= s.length) {
                                return s
                            }
                            var cg = cd - ce.length;
                            if (1 > cg) {
                                return ce
                            }
                            var ch = s.slice(0, cg);
                            if (null == cf) {
                                return ch + ce
                            }
                            if (fk(cf)) {
                                if (s.slice(cg).search(cf)) {
                                    var ci, da, dc = s.slice(0, cg);
                                    for (cf.global || (cf = g8(cf.source, (aI.exec(cf) || "") + "g")), cf.lastIndex = 0; ci = cf.exec(dc); ) {
                                        da = ci.index
                                    }
                                    ch = ch.slice(0, null == da ? cg : da)
                                }
                            } else {
                                if (s.indexOf(cf, cg) != cg) {
                                    var dd = ch.lastIndexOf(cf);
                                    dd > -1 && (ch = ch.slice(0, dd))
                                }
                            }
                            return ch + ce
                        }
                        function hI(s) {
                            return s = aJ(s),
                                    s && bz.test(s) ? s.replace(br, bN) : s
                        }
                        function hX(s, Z, cc) {
                            return cc && i(s, Z, cc) && (Z = bV),
                                    s = aJ(s),
                                    s.match(Z || bc) || []
                        }
                        function ik(s, Z, cc) {
                            return cc && i(s, Z, cc) && (Z = bV),
                                    bp(s) ? b9(s) : gK(s, Z)
                        }
                        function H(s) {
                            return function () {
                                return s
                            }
                        }
                        function Y(s) {
                            return s
                        }
                        function b9(s) {
                            return eT(gZ(s, !0))
                        }
                        function cv(s, Z) {
                            return e7(s, gZ(Z, !0))
                        }
                        function cK(s, Z, cc) {
                            if (null == cc) {
                                var cd = dx(Z),
                                        ce = cd ? e5(Z) : bV,
                                        cf = ce && ce.length ? dr(Z, ce) : bV;
                                (cf ? cf.length : cd) || (cf = !1, cc = Z, Z = s, s = this)
                            }
                            cf || (cf = dr(Z, e5(Z)));
                            var cg = !0,
                                    ch = -1,
                                    ci = db(s),
                                    da = cf.length;
                            cc === !1 ? cg = !1 : dx(cc) && "chain" in cc && (cg = cc.chain);
                            for (; ++ch < da; ) {
                                var dc = cf[ch],
                                        dd = Z[dc];
                                s[dc] = dd,
                                        ci && (s.prototype[dc] = function (de) {
                                            return function () {
                                                var df = this.__chain__;
                                                if (cg || df) {
                                                    var dg = s(this.__wrapped__),
                                                            dh = dg.__actions__ = y(this.__actions__);
                                                    return dh.push({
                                                        func: de,
                                                        args: arguments,
                                                        thisArg: s
                                                    }),
                                                            dg.__chain__ = df,
                                                            dg
                                                }
                                                return de.apply(s, dR([this.value()], arguments))
                                            }
                                        }(dd))
                            }
                            return s
                        }
                        function cY() {
                            return aq._ = cw,
                                    this
                        }
                        function dk() {}
                        function dz(s) {
                            return q(s) ? fU(s) : ga(s)
                        }
                        function dM(s) {
                            return function (Z) {
                                return dF(s, eu(Z), Z + "")
                            }
                        }
                        function d0(s, Z, cc) {
                            cc && i(s, Z, cc) && (Z = cc = bV),
                                    s = +s || 0,
                                    cc = null == cc ? 1 : +cc || 0,
                                    null == Z ? (Z = s, s = 0) : Z = +Z || 0;
                            for (var cd = -1,
                                    ce = g9(fB((Z - s) / (cc || 1)), 0), cf = fm(ce); ++cd < ce; ) {
                                cf[cd] = s,
                                        s += cc
                            }
                            return cf
                        }
                        function el(s, Z, cc) {
                            if (s = f3(s), 1 > s || !gF(s)) {
                                return []
                            }
                            var cd = -1,
                                    ce = fm(hv(s, cb));
                            for (Z = cR(Z, cc, 1); ++cd < s; ) {
                                cb > cd ? ce[cd] = Z(cd) : Z(cd)
                            }
                            return ce
                        }
                        function ez(s) {
                            var Z = ++aa;
                            return aJ(s) + Z
                        }
                        function eN(s, Z) {
                            return (+s || 0) + (+Z || 0)
                        }
                        function e1(s, Z, cc) {
                            return cc && i(s, Z, cc) && (Z = bV),
                                    Z = e9(Z, cc, 3),
                                    1 == Z.length ? eS(ck(s) ? s : dV(s), Z) : h(s, Z)
                        }
                        x = x ? aw.defaults(aq.Object(), x, aw.pick(aq, bg)) : aq;
                        var fm = x.Array,
                                fA = x.Date,
                                fO = x.Error,
                                f2 = x.Function,
                                gp = x.Math,
                                gE = x.Number,
                                gT = x.Object,
                                g8 = x.RegExp,
                                hu = x.String,
                                hJ = x.TypeError,
                                hY = fm.prototype,
                                il = gT.prototype,
                                l = hu.prototype,
                                u = f2.prototype.toString,
                                I = il.hasOwnProperty,
                                aa = 0,
                                ca = il.toString,
                                cw = aq._,
                                cL = g8("^" + u.call(I).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                                cZ = x.ArrayBuffer,
                                dl = x.clearTimeout,
                                dA = x.parseFloat,
                                dN = gp.pow,
                                d1 = il.propertyIsEnumerable,
                                em = gj(x, "Set"),
                                eA = x.setTimeout,
                                eO = hY.splice,
                                e2 = x.Uint8Array,
                                fn = gj(x, "WeakMap"),
                                fB = gp.ceil,
                                fP = gj(gT, "create"),
                                f3 = gp.floor,
                                gq = gj(fm, "isArray"),
                                gF = x.isFinite,
                                gU = gj(gT, "keys"),
                                g9 = gp.max,
                                hv = gp.min,
                                hK = gj(fA, "now"),
                                hZ = x.parseInt,
                                im = gp.random,
                                J = gE.NEGATIVE_INFINITY,
                                ab = gE.POSITIVE_INFINITY,
                                cb = 4294967295,
                                cx = cb - 1,
                                cM = cb >>> 1,
                                c0 = 9007199254740991,
                                dm = fn && new fn,
                                dB = {};
                        N.support = {};
                        N.templateSettings = {
                            escape: bH,
                            evaluate: bL,
                            interpolate: bP,
                            variable: "",
                            imports: {
                                _: N
                            }
                        };
                        var dO = function () {
                            function s() {}
                            return function (Z) {
                                if (dx(Z)) {
                                    s.prototype = Z;
                                    var cc = new s;
                                    s.prototype = bV
                                }
                                return cc || {}
                            }
                        }(),
                                d2 = es(cQ),
                                en = es(c4, !0),
                                eB = eG(),
                                eP = eG(!0),
                                e3 = dm ?
                                function (s, Z) {
                                    return dm.set(s, Z),
                                            s
                                } : Y,
                                fo = dm ?
                                function (s) {
                                    return dm.get(s)
                                } : dk,
                                fC = fU("length"),
                                fQ = function () {
                                    var s = 0,
                                            Z = 0;
                                    return function (cc, cd) {
                                        var ce = fp(),
                                                cf = a8 - (ce - Z);
                                        if (Z = ce, cf > 0) {
                                            if (++s >= a4) {
                                                return cc
                                            }
                                        } else {
                                            s = 0
                                        }
                                        return e3(cc, cd)
                                    }
                                }(),
                                f4 = fL(function (s, Z) {
                                    return bp(s) && hS(s) ? hA(s, cn(Z, !1, !0)) : []
                                }),
                                gr = g1(),
                                gG = g1(!0),
                                gV = fL(function (s) {
                                    for (var Z = s.length,
                                            cc = Z,
                                            cd = fm(dc), ce = fI(), cf = ce == aB, cg = []; cc--; ) {
                                        var ch = s[cc] = hS(ch = s[cc]) ? ch : [];
                                        cd[cc] = cf && ch.length >= 120 ? e8(cc && ch) : null
                                    }
                                    var ci = s[0],
                                            da = -1,
                                            dc = ci ? ci.length : 0,
                                            dd = cd[0];
                                    s: for (; ++da < dc; ) {
                                        if (ch = ci[da], (dd ? h4(dd, ch) : ce(cg, ch, 0)) < 0) {
                                            for (var cc = Z; --cc; ) {
                                                var de = cd[cc];
                                                if ((de ? h4(de, ch) : ce(s[cc], ch, 0)) < 0) {
                                                    continue s
                                                }
                                            }
                                            dd && dd.push(ch),
                                                    cg.push(ch)
                                        }
                                    }
                                    return cg
                                }),
                                ha = fL(function (s, Z) {
                                    Z = cn(Z);
                                    var cc = f9(s, Z);
                                    return gw(s, Z.sort(ar)),
                                            cc
                                }),
                                hw = dU(),
                                hL = dU(!0),
                                h0 = fL(function (s) {
                                    return p(cn(s, !1, !0))
                                }),
                                io = fL(function (s, Z) {
                                    return hS(s) ? hA(s, Z) : []
                                }),
                                m = fL(ea),
                                v = fL(function (s) {
                                    var Z = s.length,
                                            cc = Z > 2 ? s[Z - 2] : bV,
                                            cd = Z > 1 ? s[Z - 1] : bV;
                                    return Z > 2 && "function" == typeof cc ? Z -= 2 : (cc = Z > 1 && "function" == typeof cd ? (--Z, cd) : bV, cd = bV),
                                            s.length = Z,
                                            ev(s, cc, cd)
                                }),
                                K = fL(function (s) {
                                    return s = cn(s),
                                            this.thru(function (Z) {
                                                return o(ck(Z) ? Z : [d9(Z)], s)
                                            })
                                }),
                                ba = fL(function (s, Z) {
                                    return f9(s, cn(Z))
                                }),
                                cj = dT(function (s, Z, cc) {
                                    I.call(s, cc) ? ++s[cc] : s[cc] = 1
                                }),
                                cy = gM(d2),
                                cN = gM(en, !0),
                                c1 = hR(P, d2),
                                dn = hR(cB, en),
                                dC = dT(function (s, Z, cc) {
                                    I.call(s, cc) ? s[cc].push(Z) : s[cc] = [Z]
                                }),
                                dP = dT(function (s, Z, cc) {
                                    s[cc] = Z
                                }),
                                d3 = fL(function (s, Z, cc) {
                                    var cd = -1,
                                            ce = "function" == typeof Z,
                                            cf = q(Z),
                                            cg = hS(s) ? fm(s.length) : [];
                                    return d2(s,
                                            function (ch) {
                                                var ci = ce ? Z : cf && null != ch ? ch[Z] : bV;
                                                cg[++cd] = ci ? ci.apply(ch, cc) : hD(ch, Z, cc)
                                            }),
                                            cg
                                }),
                                eo = dT(function (s, Z, cc) {
                                    s[cc ? 0 : 1].push(Z)
                                },
                                        function () {
                                            return [[], []]
                                        }),
                                eC = cE(d5, d2),
                                eQ = cE(eq, en),
                                e4 = fL(function (s, Z) {
                                    if (null == s) {
                                        return []
                                    }
                                    var cc = Z[2];
                                    return cc && i(Z[0], Z[1], cc) && (Z.length = 1),
                                            h6(s, cn(Z), [])
                                }),
                                fp = hK ||
                                function () {
                                    return (new fA).getTime()
                                },
                                fD = fL(function (s, Z, cc) {
                                    var cd = aj;
                                    if (cc.length) {
                                        var ce = bx(cc, fD.placeholder);
                                        cd |= aG
                                    }
                                    return d8(s, cd, Z, cc, ce)
                                }),
                                fR = fL(function (s, Z) {
                                    Z = Z.length ? cn(Z) : hH(s);
                                    for (var cc = -1,
                                            cd = Z.length; ++cc < cd; ) {
                                        var ce = Z[cc];
                                        s[ce] = d8(s[ce], aj, s)
                                    }
                                    return s
                                }),
                                f5 = fL(function (s, Z, cc) {
                                    var cd = aj | an;
                                    if (cc.length) {
                                        var ce = bx(cc, f5.placeholder);
                                        cd |= aG
                                    }
                                    return d8(Z, cd, s, cc, ce)
                                }),
                                gs = fV(ay),
                                gH = fV(aC),
                                gW = fL(function (s, Z) {
                                    return hl(s, 1, Z)
                                }),
                                hi = fL(function (s, Z, cc) {
                                    return hl(s, Z, cc)
                                }),
                                hx = hC(),
                                hM = hC(!0),
                                h1 = fL(function (s, Z) {
                                    if (Z = cn(Z), "function" != typeof s || !cP(Z, aF)) {
                                        throw new hJ(bq)
                                    }
                                    var cc = Z.length;
                                    return fL(function (cd) {
                                        for (var ce = hv(cd.length, cc); ce--; ) {
                                            cd[ce] = Z[ce](cd[ce])
                                        }
                                        return s.apply(this, cd)
                                    })
                                }),
                                ip = cp(aG),
                                L = cp(aK),
                                bb = fL(function (s, Z) {
                                    return d8(s, aS, bV, bV, bV, cn(Z))
                                }),
                                ck = gq ||
                                function (s) {
                                    return bp(s) && T(s.length) && ca.call(s) == bC
                                },
                                cz = d7(fs),
                                cO = d7(function (s, Z, cc) {
                                    return cc ? fF(s, Z, cc) : fT(s, Z)
                                }),
                                c2 = gi(cO, e6),
                                dp = gi(cz, cF),
                                dD = hn(cQ),
                                dQ = hn(c4),
                                d4 = h7(eB),
                                ep = h7(eP),
                                eD = B(cQ),
                                eR = B(c4),
                                e5 = gU ?
                                function (s) {
                                    var Z = null == s ? bV : s.constructor;
                                    return "function" == typeof Z && Z.prototype === s || "function" != typeof s && hS(s) ? dI(s) : dx(s) ? gU(s) : []
                                } : dI,
                                fq = S(!0),
                                fE = S(),
                                fS = fL(function (s, Z) {
                                    if (null == s) {
                                        return {}
                                    }
                                    if ("function" != typeof Z[0]) {
                                        var Z = dE(cn(Z), hu);
                                        return cT(s, hA(t(s), Z))
                                    }
                                    var cc = cR(Z[0], Z[1], 3);
                                    return c7(s,
                                            function (cd, ce, cf) {
                                                return !cc(cd, ce, cf)
                                            })
                                }),
                                f6 = fL(function (s, Z) {
                                    return null == s ? {} : "function" == typeof Z[0] ? c7(s, cR(Z[0], Z[1], 3)) : cT(s, cn(Z))
                                }),
                                gt = ft(function (s, Z, cc) {
                                    return Z = Z.toLowerCase(),
                                            s + (cc ? Z.charAt(0).toUpperCase() + Z.slice(1) : Z)
                                }),
                                gI = ft(function (s, Z, cc) {
                                    return s + (cc ? "-" : "") + Z.toLowerCase()
                                }),
                                gX = b3(),
                                hj = b3(!0),
                                hy = ft(function (s, Z, cc) {
                                    return s + (cc ? "_" : "") + Z.toLowerCase()
                                }),
                                hN = ft(function (s, Z, cc) {
                                    return s + (cc ? " " : "") + (Z.charAt(0).toUpperCase() + Z.slice(1))
                                }),
                                h2 = fL(function (s, Z) {
                                    try {
                                        return s.apply(bV, Z)
                                    } catch (cc) {
                                        return cI(cc) ? cc : new fO(cc)
                                    }
                                }),
                                iq = fL(function (s, Z) {
                                    return function (cc) {
                                        return hD(cc, s, Z)
                                    }
                                }),
                                n = fL(function (s, Z) {
                                    return function (cc) {
                                        return hD(s, cc, Z)
                                    }
                                }),
                                w = dH("ceil"),
                                M = dH("floor"),
                                bZ = gx(hr, J),
                                cl = gx(gn, ab),
                                cA = dH("round");
                        return N.prototype = b0.prototype,
                                f7.prototype = dO(b0.prototype),
                                f7.prototype.constructor = f7,
                                h3.prototype = dO(b0.prototype),
                                h3.prototype.constructor = h3,
                                gu.prototype["delete"] = gJ,
                                gu.prototype.get = gY,
                                gu.prototype.has = hk,
                                gu.prototype.set = hz,
                                hO.prototype.push = g,
                                eY.Cache = gu,
                                N.after = dX,
                                N.ary = ei,
                                N.assign = cO,
                                N.at = ba,
                                N.before = ew,
                                N.bind = fD,
                                N.bindAll = fR,
                                N.bindKey = f5,
                                N.callback = ik,
                                N.chain = fi,
                                N.chunk = eW,
                                N.compact = fa,
                                N.constant = H,
                                N.countBy = cj,
                                N.create = hs,
                                N.curry = gs,
                                N.curryRight = gH,
                                N.debounce = eK,
                                N.defaults = c2,
                                N.defaultsDeep = dp,
                                N.defer = gW,
                                N.delay = hi,
                                N.difference = f4,
                                N.drop = fv,
                                N.dropRight = fJ,
                                N.dropRightWhile = fX,
                                N.dropWhile = gk,
                                N.fill = gz,
                                N.filter = hU,
                                N.flatten = g3,
                                N.flattenDeep = hp,
                                N.flow = hx,
                                N.flowRight = hM,
                                N.forEach = c1,
                                N.forEachRight = dn,
                                N.forIn = d4,
                                N.forInRight = ep,
                                N.forOwn = eD,
                                N.forOwnRight = eR,
                                N.functions = hH,
                                N.groupBy = dC,
                                N.indexBy = dP,
                                N.initial = hT,
                                N.intersection = gV,
                                N.invert = k,
                                N.invoke = d3,
                                N.keys = e5,
                                N.keysIn = t,
                                N.map = r,
                                N.mapKeys = fq,
                                N.mapValues = fE,
                                N.matches = b9,
                                N.matchesProperty = cv,
                                N.memoize = eY,
                                N.merge = cz,
                                N.method = iq,
                                N.methodOf = n,
                                N.mixin = cK,
                                N.modArgs = h1,
                                N.negate = fj,
                                N.omit = fS,
                                N.once = fx,
                                N.pairs = G,
                                N.partial = ip,
                                N.partialRight = L,
                                N.partition = eo,
                                N.pick = f6,
                                N.pluck = E,
                                N.property = dz,
                                N.propertyOf = dM,
                                N.pull = U,
                                N.pullAt = ha,
                                N.range = d0,
                                N.rearg = bb,
                                N.reject = V,
                                N.remove = b5,
                                N.rest = cr,
                                N.restParam = fL,
                                N.set = b8,
                                N.shuffle = cs,
                                N.slice = cG,
                                N.sortBy = c9,
                                N.sortByAll = e4,
                                N.sortByOrder = dw,
                                N.spread = fZ,
                                N.take = cU,
                                N.takeRight = c8,
                                N.takeRightWhile = dv,
                                N.takeWhile = dJ,
                                N.tap = fw,
                                N.throttle = gm,
                                N.thru = fK,
                                N.times = el,
                                N.toArray = gR,
                                N.toPlainObject = g6,
                                N.transform = cu,
                                N.union = h0,
                                N.uniq = dW,
                                N.unzip = ea,
                                N.unzipWith = ev,
                                N.values = cJ,
                                N.valuesIn = cX,
                                N.where = dK,
                                N.without = io,
                                N.wrap = gB,
                                N.xor = eJ,
                                N.zip = m,
                                N.zipObject = eX,
                                N.zipWith = v,
                                N.backflow = hM,
                                N.collect = r,
                                N.compose = hM,
                                N.each = c1,
                                N.eachRight = dn,
                                N.extend = cO,
                                N.iteratee = ik,
                                N.methods = hH,
                                N.object = eX,
                                N.select = hU,
                                N.tail = cr,
                                N.unique = dW,
                                cK(N, N),
                                N.add = eN,
                                N.attempt = h2,
                                N.camelCase = gt,
                                N.capitalize = dZ,
                                N.ceil = w,
                                N.clone = gQ,
                                N.cloneDeep = g5,
                                N.deburr = ek,
                                N.endsWith = ey,
                                N.escape = eM,
                                N.escapeRegExp = e0,
                                N.every = hF,
                                N.find = cy,
                                N.findIndex = gr,
                                N.findKey = dD,
                                N.findLast = cN,
                                N.findLastIndex = gG,
                                N.findLastKey = dQ,
                                N.findWhere = ia,
                                N.first = gO,
                                N.floor = M,
                                N.get = hW,
                                N.gt = hr,
                                N.gte = hG,
                                N.has = ij,
                                N.identity = Y,
                                N.includes = j,
                                N.indexOf = hE,
                                N.inRange = dj,
                                N.isArguments = hV,
                                N.isArray = ck,
                                N.isBoolean = ii,
                                N.isDate = F,
                                N.isElement = W,
                                N.isEmpty = b7,
                                N.isEqual = ct,
                                N.isError = cI,
                                N.isFinite = cW,
                                N.isFunction = db,
                                N.isMatch = dL,
                                N.isNaN = dY,
                                N.isNative = ej,
                                N.isNull = ex,
                                N.isNumber = eL,
                                N.isObject = dx,
                                N.isPlainObject = eZ,
                                N.isRegExp = fk,
                                N.isString = fy,
                                N.isTypedArray = fM,
                                N.isUndefined = f0,
                                N.kebabCase = gI,
                                N.last = h9,
                                N.lastIndexOf = D,
                                N.lt = gn,
                                N.lte = gC,
                                N.max = bZ,
                                N.min = cl,
                                N.noConflict = cY,
                                N.noop = dk,
                                N.now = fp,
                                N.pad = fl,
                                N.padLeft = gX,
                                N.padRight = hj,
                                N.parseInt = fz,
                                N.random = dy,
                                N.reduce = eC,
                                N.reduceRight = eQ,
                                N.repeat = fN,
                                N.result = X,
                                N.round = cA,
                                N.runInContext = bR,
                                N.size = cH,
                                N.snakeCase = hy,
                                N.some = cV,
                                N.sortedIndex = hw,
                                N.sortedLastIndex = hL,
                                N.startCase = hN,
                                N.startsWith = f1,
                                N.sum = e1,
                                N.template = go,
                                N.trim = gD,
                                N.trimLeft = gS,
                                N.trimRight = g7,
                                N.trunc = ht,
                                N.unescape = hI,
                                N.uniqueId = ez,
                                N.words = hX,
                                N.all = hF,
                                N.any = cV,
                                N.contains = j,
                                N.eq = ct,
                                N.detect = cy,
                                N.foldl = eC,
                                N.foldr = eQ,
                                N.head = gO,
                                N.include = j,
                                N.inject = eC,
                                cK(N,
                                        function () {
                                            var s = {};
                                            return cQ(N,
                                                    function (Z, cc) {
                                                        N.prototype[cc] || (s[cc] = Z)
                                                    }),
                                                    s
                                        }(), !1),
                                N.sample = b6,
                                N.prototype.sample = function (s) {
                                    return this.__chain__ || null != s ? this.thru(function (Z) {
                                        return b6(Z, s)
                                    }) : b6(this.value())
                                },
                                N.VERSION = af,
                                P(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"],
                                        function (s) {
                                            N[s].placeholder = N
                                        }),
                                P(["drop", "take"],
                                        function (s, Z) {
                                            h3.prototype[s] = function (cc) {
                                                var cd = this.__filtered__;
                                                if (cd && !Z) {
                                                    return new h3(this)
                                                }
                                                cc = null == cc ? 1 : g9(f3(cc) || 0, 0);
                                                var ce = this.clone();
                                                return cd ? ce.__takeCount__ = hv(ce.__takeCount__, cc) : ce.__views__.push({
                                                    size: cc,
                                                    type: s + (ce.__dir__ < 0 ? "Right" : "")
                                                }),
                                                        ce
                                            },
                                                    h3.prototype[s + "Right"] = function (cc) {
                                                return this.reverse()[s](cc).reverse()
                                            }
                                        }),
                                P(["filter", "map", "takeWhile"],
                                        function (s, Z) {
                                            var cc = Z + 1,
                                                    cd = cc != bm;
                                            h3.prototype[s] = function (ce, cf) {
                                                var cg = this.clone();
                                                return cg.__iteratees__.push({
                                                    iteratee: e9(ce, cf, 1),
                                                    type: cc
                                                }),
                                                        cg.__filtered__ = cg.__filtered__ || cd,
                                                        cg
                                            }
                                        }),
                                P(["first", "last"],
                                        function (s, Z) {
                                            var cc = "take" + (Z ? "Right" : "");
                                            h3.prototype[s] = function () {
                                                return this[cc](1).value()[0]
                                            }
                                        }),
                                P(["initial", "rest"],
                                        function (s, Z) {
                                            var cc = "drop" + (Z ? "" : "Right");
                                            h3.prototype[s] = function () {
                                                return this.__filtered__ ? new h3(this) : this[cc](1)
                                            }
                                        }),
                                P(["pluck", "where"],
                                        function (s, Z) {
                                            var cc = Z ? "filter" : "map",
                                                    cd = Z ? eT : dz;
                                            h3.prototype[s] = function (ce) {
                                                return this[cc](cd(ce))
                                            }
                                        }),
                                h3.prototype.compact = function () {
                                    return this.filter(Y)
                                },
                                h3.prototype.reject = function (s, Z) {
                                    return s = e9(s, Z, 1),
                                            this.filter(function (cc) {
                                                return !s(cc)
                                            })
                                },
                                h3.prototype.slice = function (s, Z) {
                                    s = null == s ? 0 : +s || 0;
                                    var cc = this;
                                    return cc.__filtered__ && (s > 0 || 0 > Z) ? new h3(cc) : (0 > s ? cc = cc.takeRight(-s) : s && (cc = cc.drop(s)), Z !== bV && (Z = +Z || 0, cc = 0 > Z ? cc.dropRight(-Z) : cc.take(Z - s)), cc)
                                },
                                h3.prototype.takeRightWhile = function (s, Z) {
                                    return this.reverse().takeWhile(s, Z).reverse()
                                },
                                h3.prototype.toArray = function () {
                                    return this.take(ab)
                                },
                                cQ(h3.prototype,
                                        function (s, Z) {
                                            var cc = /^(?:filter|map|reject)|While$/.test(Z),
                                                    cd = /^(?:first|last)$/.test(Z),
                                                    ce = N[cd ? "take" + ("last" == Z ? "Right" : "") : Z];
                                            ce && (N.prototype[Z] = function () {
                                                var cf = cd ? [1] : arguments,
                                                        cg = this.__chain__,
                                                        ch = this.__wrapped__,
                                                        ci = !!this.__actions__.length,
                                                        da = ch instanceof h3,
                                                        dc = cf[0],
                                                        dd = da || ck(ch);
                                                dd && cc && "function" == typeof dc && 1 != dc.length && (da = dd = !1);
                                                var de = function (di) {
                                                    return cd && cg ? ce(di, 1)[0] : ce.apply(bV, dR([di], cf))
                                                },
                                                        df = {
                                                            func: fK,
                                                            args: [de],
                                                            thisArg: bV
                                                        },
                                                        dg = da && !ci;
                                                if (cd && !cg) {
                                                    return dg ? (ch = ch.clone(), ch.__actions__.push(df), s.call(ch)) : ce.call(bV, this.value())[0]
                                                }
                                                if (!cd && dd) {
                                                    ch = dg ? ch : new h3(this);
                                                    var dh = s.apply(ch, cf);
                                                    return dh.__actions__.push(df),
                                                            new f7(dh, cg)
                                                }
                                                return this.thru(de)
                                            })
                                        }),
                                P(["join", "pop", "push", "replace", "shift", "sort", "splice", "split", "unshift"],
                                        function (s) {
                                            var Z = (/^(?:replace|split)$/.test(s) ? l : hY)[s],
                                                    cc = /^(?:push|sort|unshift)$/.test(s) ? "tap" : "thru",
                                                    cd = /^(?:join|pop|replace|shift)$/.test(s);
                                            N.prototype[s] = function () {
                                                var ce = arguments;
                                                return cd && !this.__chain__ ? Z.apply(this.value(), ce) : this[cc](function (cf) {
                                                    return Z.apply(cf, ce)
                                                })
                                            }
                                        }),
                                cQ(h3.prototype,
                                        function (s, Z) {
                                            var cc = N[Z];
                                            if (cc) {
                                                var cd = cc.name,
                                                        ce = dB[cd] || (dB[cd] = []);
                                                ce.push({
                                                    name: Z,
                                                    func: cc
                                                })
                                            }
                                        }),
                                dB[cS(bV, an).name] = [{
                                name: "wrapper",
                                func: bV
                            }],
                                h3.prototype.clone = O,
                                h3.prototype.reverse = cm,
                                h3.prototype.value = f8,
                                N.prototype.chain = fY,
                                N.prototype.commit = gl,
                                N.prototype.concat = K,
                                N.prototype.plant = gA,
                                N.prototype.reverse = gP,
                                N.prototype.toString = g4,
                                N.prototype.run = N.prototype.toJSON = N.prototype.valueOf = N.prototype.value = hq,
                                N.prototype.collect = N.prototype.map,
                                N.prototype.head = N.prototype.first,
                                N.prototype.select = N.prototype.filter,
                                N.prototype.tail = N.prototype.rest,
                                N
                    }
                    var bV, af = "3.10.1",
                            aj = 1,
                            an = 2,
                            at = 4,
                            ay = 8,
                            aC = 16,
                            aG = 32,
                            aK = 64,
                            aO = 128,
                            aS = 256,
                            aW = 30,
                            a0 = "...",
                            a4 = 150,
                            a8 = 16,
                            be = 200,
                            bi = 1,
                            bm = 2,
                            bq = "Expected a function",
                            bu = "__lodash_placeholder__",
                            by = "[object Arguments]",
                            bC = "[object Array]",
                            bG = "[object Boolean]",
                            bK = "[object Date]",
                            bO = "[object Error]",
                            bS = "[object Function]",
                            bW = "[object Map]",
                            c = "[object Number]",
                            ad = "[object Object]",
                            ag = "[object RegExp]",
                            ak = "[object Set]",
                            ao = "[object String]",
                            au = "[object WeakMap]",
                            az = "[object ArrayBuffer]",
                            aD = "[object Float32Array]",
                            aH = "[object Float64Array]",
                            aL = "[object Int8Array]",
                            aP = "[object Int16Array]",
                            aT = "[object Int32Array]",
                            aX = "[object Uint8Array]",
                            a1 = "[object Uint8ClampedArray]",
                            a5 = "[object Uint16Array]",
                            a9 = "[object Uint32Array]",
                            bf = /\b__p \+= '';/g,
                            bj = /\b(__p \+=) '' \+/g,
                            bn = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                            br = /&(?:amp|lt|gt|quot|#39|#96);/g,
                            bv = /[&<>"'`]/g,
                            bz = RegExp(br.source),
                            bD = RegExp(bv.source),
                            bH = /<%-([\s\S]+?)%>/g,
                            bL = /<%([\s\S]+?)%>/g,
                            bP = /<%=([\s\S]+?)%>/g,
                            bT = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
                            bX = /^\w*$/,
                            ah = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
                            al = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
                            ap = RegExp(al.source),
                            av = /[\u0300-\u036f\ufe20-\ufe23]/g,
                            aA = /\\(\\)?/g,
                            aE = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                            aI = /\w*$/,
                            aM = /^0[xX]/,
                            aQ = /^\[object .+?Constructor\]$/,
                            aU = /^\d+$/,
                            aY = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
                            a2 = /($^)/,
                            a6 = /['\n\r\u2028\u2029\\]/g,
                            bc = function () {
                                var g = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
                                        h = "[a-z\\xdf-\\xf6\\xf8-\\xff]+";
                                return RegExp(g + "+(?=" + g + h + ")|" + g + "?" + h + "|" + g + "+|[0-9]+", "g")
                            }(),
                            bg = ["Array", "ArrayBuffer", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Math", "Number", "Object", "RegExp", "Set", "String", "_", "clearTimeout", "isFinite", "parseFloat", "parseInt", "setTimeout", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap"],
                            bk = -1,
                            bo = {};
                    bo[aD] = bo[aH] = bo[aL] = bo[aP] = bo[aT] = bo[aX] = bo[a1] = bo[a5] = bo[a9] = !0,
                            bo[by] = bo[bC] = bo[az] = bo[bG] = bo[bK] = bo[bO] = bo[bS] = bo[bW] = bo[c] = bo[ad] = bo[ag] = bo[ak] = bo[ao] = bo[au] = !1;
                    var bs = {};
                    bs[by] = bs[bC] = bs[az] = bs[bG] = bs[bK] = bs[aD] = bs[aH] = bs[aL] = bs[aP] = bs[aT] = bs[c] = bs[ad] = bs[ag] = bs[ao] = bs[aX] = bs[a1] = bs[a5] = bs[a9] = !0,
                            bs[bO] = bs[bS] = bs[bW] = bs[ak] = bs[au] = !1;
                    var bw = {
                        "ÃƒÆ’Ã¢â€šÂ¬": "A",
                        "ÃƒÆ’Ã‚Â": "A",
                        "ÃƒÆ’Ã¢â‚¬Å¡": "A",
                        "ÃƒÆ’Ã†â€™": "A",
                        "ÃƒÆ’Ã¢â‚¬Å¾": "A",
                        "ÃƒÆ’Ã¢â‚¬Â¦": "A",
                        "ÃƒÆ’ ": "a",
                        "ÃƒÆ’Ã‚Â¡": "a",
                        "ÃƒÆ’Ã‚Â¢": "a",
                        "ÃƒÆ’Ã‚Â£": "a",
                        "ÃƒÆ’Ã‚Â¤": "a",
                        "ÃƒÆ’Ã‚Â¥": "a",
                        "ÃƒÆ’Ã¢â‚¬Â¡": "C",
                        "ÃƒÆ’Ã‚Â§": "c",
                        "ÃƒÆ’Ã‚Â": "D",
                        "ÃƒÆ’Ã‚Â°": "d",
                        "ÃƒÆ’Ã‹â€ ": "E",
                        "ÃƒÆ’Ã¢â‚¬Â°": "E",
                        "ÃƒÆ’Ã… ": "E",
                        "ÃƒÆ’Ã¢â‚¬Â¹": "E",
                        "ÃƒÆ’Ã‚Â¨": "e",
                        "ÃƒÆ’Ã‚Â©": "e",
                        "ÃƒÆ’Ã‚Âª": "e",
                        "ÃƒÆ’Ã‚Â«": "e",
                        "ÃƒÆ’Ã…â€™": "I",
                        "ÃƒÆ’Ã‚Â": "I",
                        "ÃƒÆ’Ã…Â½": "I",
                        "ÃƒÆ’Ã‚Â": "I",
                        "ÃƒÆ’Ã‚Â¬": "i",
                        "ÃƒÆ’Ã‚Â­": "i",
                        "ÃƒÆ’Ã‚Â®": "i",
                        "ÃƒÆ’Ã‚Â¯": "i",
                        "ÃƒÆ’Ã¢â‚¬Ëœ": "N",
                        "ÃƒÆ’Ã‚Â±": "n",
                        "ÃƒÆ’Ã¢â‚¬â„¢": "O",
                        "ÃƒÆ’Ã¢â‚¬Å“": "O",
                        "ÃƒÆ’Ã¢â‚¬Â": "O",
                        "ÃƒÆ’Ã¢â‚¬Â¢": "O",
                        "ÃƒÆ’Ã¢â‚¬â€œ": "O",
                        "ÃƒÆ’Ã‹Å“": "O",
                        "ÃƒÆ’Ã‚Â²": "o",
                        "ÃƒÆ’Ã‚Â³": "o",
                        "ÃƒÆ’Ã‚Â´": "o",
                        "ÃƒÆ’Ã‚Âµ": "o",
                        "ÃƒÆ’Ã‚Â¶": "o",
                        "ÃƒÆ’Ã‚Â¸": "o",
                        "ÃƒÆ’Ã¢â€žÂ¢": "U",
                        "ÃƒÆ’Ã…Â¡": "U",
                        "ÃƒÆ’Ã¢â‚¬Âº": "U",
                        "ÃƒÆ’Ã…â€œ": "U",
                        "ÃƒÆ’Ã‚Â¹": "u",
                        "ÃƒÆ’Ã‚Âº": "u",
                        "ÃƒÆ’Ã‚Â»": "u",
                        "ÃƒÆ’Ã‚Â¼": "u",
                        "ÃƒÆ’Ã‚Â": "Y",
                        "ÃƒÆ’Ã‚Â½": "y",
                        "ÃƒÆ’Ã‚Â¿": "y",
                        "ÃƒÆ’Ã¢â‚¬ ": "Ae",
                        "ÃƒÆ’Ã‚Â¦": "ae",
                        "ÃƒÆ’Ã…Â¾": "Th",
                        "ÃƒÆ’Ã‚Â¾": "th",
                        "ÃƒÆ’Ã…Â¸": "ss"
                    },
                            bA = {
                                "&": "&amp;",
                                "<": "&lt;",
                                ">": "&gt;",
                                '"': "&quot;",
                                "'": "&#39;",
                                "`": "&#96;"
                            },
                            bE = {
                                "&amp;": "&",
                                "&lt;": "<",
                                "&gt;": ">",
                                "&quot;": '"',
                                "&#39;": "'",
                                "&#96;": "`"
                            },
                            bI = {
                                "function": !0,
                                object: !0
                            },
                            bM = {
                                0: "x30",
                                1: "x31",
                                2: "x32",
                                3: "x33",
                                4: "x34",
                                5: "x35",
                                6: "x36",
                                7: "x37",
                                8: "x38",
                                9: "x39",
                                A: "x41",
                                B: "x42",
                                C: "x43",
                                D: "x44",
                                E: "x45",
                                F: "x46",
                                a: "x61",
                                b: "x62",
                                c: "x63",
                                d: "x64",
                                e: "x65",
                                f: "x66",
                                n: "x6e",
                                r: "x72",
                                t: "x74",
                                u: "x75",
                                v: "x76",
                                x: "x78"
                            },
                            bQ = {
                                "\\": "\\",
                                "'": "'",
                                "\n": "n",
                                "\r": "r",
                                "\u2028": "u2028",
                                "\u2029": "u2029"
                            },
                            bU = bI[typeof f] && f && !f.nodeType && f,
                            bY = bI[typeof e] && e && !e.nodeType && e,
                            ac = bU && bY && "object" == typeof b && b && b.Object && b,
                            ae = bI[typeof self] && self && self.Object && self,
                            ai = bI[typeof window] && window && window.Object && window,
                            am = bY && bY.exports === bU && bU,
                            aq = ac || ai !== (this && this.window) && ai || ae || this,
                            aw = bR();
                    "function" == typeof define && "object" == typeof define.amd && define.amd ? (aq._ = aw, define(function () {
                        return aw
                    })) : bU && bY ? am ? (bY.exports = aw)._ = aw : bU._ = aw : aq._ = aw
                }).call(this)
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        },
        {}],
    7: [function (d, e, f) {
            e.exports = function () {
                var b = {};
                return b.format = function (g, h) {
                    h = "number" == typeof h ? h : 2;
                    var i = Math.round(g * Math.pow(10, h)) / Math.pow(10, h),
                            j = i.toString().split(".")[0],
                            k = i.toString().split(".")[1] || "",
                            l = function (m, n, o) {
                                var p = n.shift() || "0";
                                return 0 == o ? m : l(m + p, n, o - 1)
                            };
                    return 0 == h ? j : j + "." + l("", k.split(""), h)
                },
                        b
            }()
        },
        {}],
    8: [function (d, e, f) {
            e.exports = {
                BITLY_API: "https://api-ssl.bitly.com/v3/shorten",
                BITLY_TOKEN: "b13ddea25f1098c80eb892ef7033e87326a973e3"
            }
        },
        {}],
    9: [function (d, e, f) {
            if ("undefined" == typeof jQuery) {
                throw new Error("Bootstrap's JavaScript requires jQuery")
            }
            +
                    function (c) {
                        var g = c.fn.jquery.split(" ")[0].split(".");
                        if (g[0] < 2 && g[1] < 9 || 1 == g[0] && 9 == g[1] && g[2] < 1) {
                            throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
                        }
                    }(jQuery),
                    +
                    function (c) {
                        function g() {
                            var h = document.createElement("bootstrap"),
                                    i = {
                                        WebkitTransition: "webkitTransitionEnd",
                                        MozTransition: "transitionend",
                                        OTransition: "oTransitionEnd otransitionend",
                                        transition: "transitionend"
                                    };
                            for (var j in i) {
                                if (void 0 !== h.style[j]) {
                                    return {
                                        end: i[j]
                                    }
                                }
                            }
                            return !1
                        }
                        c.fn.emulateTransitionEnd = function (h) {
                            var i = !1,
                                    j = this;
                            c(this).one("bsTransitionEnd",
                                    function () {
                                        i = !0
                                    });
                            var k = function () {
                                i || c(j).trigger(c.support.transition.end)
                            };
                            return setTimeout(k, h),
                                    this
                        },
                                c(function () {
                                    c.support.transition = g(),
                                            c.support.transition && (c.event.special.bsTransitionEnd = {
                                                bindType: c.support.transition.end,
                                                delegateType: c.support.transition.end,
                                                handle: function (h) {
                                                    return c(h.target).is(this) ? h.handleObj.handler.apply(this, arguments) : void 0
                                                }
                                            })
                                })
                    }(jQuery),
                    +
                    function (g) {
                        function h(c) {
                            return this.each(function () {
                                var b = g(this),
                                        l = b.data("bs.alert");
                                l || b.data("bs.alert", l = new j(this)),
                                        "string" == typeof c && l[c].call(b)
                            })
                        }
                        var i = '[data-dismiss="alert"]',
                                j = function (c) {
                                    g(c).on("click", i, this.close)
                                };
                        j.VERSION = "3.3.4",
                                j.TRANSITION_DURATION = 150,
                                j.prototype.close = function (l) {
                                    function m() {
                                        p.detach().trigger("closed.bs.alert").remove()
                                    }
                                    var n = g(this),
                                            o = n.attr("data-target");
                                    o || (o = n.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
                                    var p = g(o);
                                    l && l.preventDefault(),
                                            p.length || (p = n.closest(".alert")),
                                            p.trigger(l = g.Event("close.bs.alert")),
                                            l.isDefaultPrevented() || (p.removeClass("in"), g.support.transition && p.hasClass("fade") ? p.one("bsTransitionEnd", m).emulateTransitionEnd(j.TRANSITION_DURATION) : m())
                                };
                        var k = g.fn.alert;
                        g.fn.alert = h,
                                g.fn.alert.Constructor = j,
                                g.fn.alert.noConflict = function () {
                                    return g.fn.alert = k,
                                            this
                                },
                                g(document).on("click.bs.alert.data-api", i, j.prototype.close)
                    }(jQuery),
                    +
                    function (g) {
                        function h(c) {
                            return this.each(function () {
                                var b = g(this),
                                        k = b.data("bs.button"),
                                        l = "object" == typeof c && c;
                                k || b.data("bs.button", k = new i(this, l)),
                                        "toggle" == c ? k.toggle() : c && k.setState(c)
                            })
                        }
                        var i = function (c, k) {
                            this.$element = g(c),
                                    this.options = g.extend({},
                                            i.DEFAULTS, k),
                                    this.isLoading = !1
                        };
                        i.VERSION = "3.3.4",
                                i.DEFAULTS = {
                                    loadingText: "loading..."
                                },
                                i.prototype.setState = function (k) {
                                    var l = "disabled",
                                            m = this.$element,
                                            n = m.is("input") ? "val" : "html",
                                            o = m.data();
                                    k += "Text",
                                            null == o.resetText && m.data("resetText", m[n]()),
                                            setTimeout(g.proxy(function () {
                                                m[n](null == o[k] ? this.options[k] : o[k]),
                                                        "loadingText" == k ? (this.isLoading = !0, m.addClass(l).attr(l, l)) : this.isLoading && (this.isLoading = !1, m.removeClass(l).removeAttr(l))
                                            },
                                                    this), 0)
                                },
                                i.prototype.toggle = function () {
                                    var k = !0,
                                            l = this.$element.closest('[data-toggle="buttons"]');
                                    if (l.length) {
                                        var m = this.$element.find("input");
                                        "radio" == m.prop("type") && (m.prop("checked") && this.$element.hasClass("active") ? k = !1 : l.find(".active").removeClass("active")),
                                                k && m.prop("checked", !this.$element.hasClass("active")).trigger("change")
                                    } else {
                                        this.$element.attr("aria-pressed", !this.$element.hasClass("active"))
                                    }
                                    k && this.$element.toggleClass("active")
                                };
                        var j = g.fn.button;
                        g.fn.button = h,
                                g.fn.button.Constructor = i,
                                g.fn.button.noConflict = function () {
                                    return g.fn.button = j,
                                            this
                                },
                                g(document).on("click.bs.button.data-api", '[data-toggle^="button"]',
                                function (b) {
                                    var k = g(b.target);
                                    k.hasClass("btn") || (k = k.closest(".btn")),
                                            h.call(k, "toggle"),
                                            b.preventDefault()
                                }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]',
                                function (c) {
                                    g(c.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(c.type))
                                })
                    }(jQuery),
                    +
                    function (g) {
                        function h(c) {
                            return this.each(function () {
                                var b = g(this),
                                        l = b.data("bs.carousel"),
                                        m = g.extend({},
                                                i.DEFAULTS, b.data(), "object" == typeof c && c),
                                        n = "string" == typeof c ? c : m.slide;
                                l || b.data("bs.carousel", l = new i(this, m)),
                                        "number" == typeof c ? l.to(c) : n ? l[n]() : m.interval && l.pause().cycle()
                            })
                        }
                        var i = function (l, m) {
                            this.$element = g(l),
                                    this.$indicators = this.$element.find(".carousel-indicators"),
                                    this.options = m,
                                    this.paused = null,
                                    this.sliding = null,
                                    this.interval = null,
                                    this.$active = null,
                                    this.$items = null,
                                    this.options.keyboard && this.$element.on("keydown.bs.carousel", g.proxy(this.keydown, this)),
                                    "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", g.proxy(this.pause, this)).on("mouseleave.bs.carousel", g.proxy(this.cycle, this))
                        };
                        i.VERSION = "3.3.4",
                                i.TRANSITION_DURATION = 600,
                                i.DEFAULTS = {
                                    interval: 5000,
                                    pause: "hover",
                                    wrap: !0,
                                    keyboard: !0
                                },
                                i.prototype.keydown = function (b) {
                                    if (!/input|textarea/i.test(b.target.tagName)) {
                                        switch (b.which) {
                                            case 37:
                                                this.prev();
                                                break;
                                            case 39:
                                                this.next();
                                                break;
                                            default:
                                                return
                                        }
                                        b.preventDefault()
                                    }
                                },
                                i.prototype.cycle = function (c) {
                                    return c || (this.paused = !1),
                                            this.interval && clearInterval(this.interval),
                                            this.options.interval && !this.paused && (this.interval = setInterval(g.proxy(this.next, this), this.options.interval)),
                                            this
                                },
                                i.prototype.getItemIndex = function (b) {
                                    return this.$items = b.parent().children(".item"),
                                            this.$items.index(b || this.$active)
                                },
                                i.prototype.getItemForDirection = function (l, m) {
                                    var n = this.getItemIndex(m),
                                            o = "prev" == l && 0 === n || "next" == l && n == this.$items.length - 1;
                                    if (o && !this.options.wrap) {
                                        return m
                                    }
                                    var p = "prev" == l ? -1 : 1,
                                            q = (n + p) % this.$items.length;
                                    return this.$items.eq(q)
                                },
                                i.prototype.to = function (l) {
                                    var m = this,
                                            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
                                    return l > this.$items.length - 1 || 0 > l ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel",
                                            function () {
                                                m.to(l)
                                            }) : n == l ? this.pause().cycle() : this.slide(l > n ? "next" : "prev", this.$items.eq(l))
                                },
                                i.prototype.pause = function (c) {
                                    return c || (this.paused = !0),
                                            this.$element.find(".next, .prev").length && g.support.transition && (this.$element.trigger(g.support.transition.end), this.cycle(!0)),
                                            this.interval = clearInterval(this.interval),
                                            this
                                },
                                i.prototype.next = function () {
                                    return this.sliding ? void 0 : this.slide("next")
                                },
                                i.prototype.prev = function () {
                                    return this.sliding ? void 0 : this.slide("prev")
                                },
                                i.prototype.slide = function (c, n) {
                                    var o = this.$element.find(".item.active"),
                                            p = n || this.getItemForDirection(c, o),
                                            q = this.interval,
                                            r = "next" == c ? "left" : "right",
                                            s = this;
                                    if (p.hasClass("active")) {
                                        return this.sliding = !1
                                    }
                                    var t = p[0],
                                            u = g.Event("slide.bs.carousel", {
                                                relatedTarget: t,
                                                direction: r
                                            });
                                    if (this.$element.trigger(u), !u.isDefaultPrevented()) {
                                        if (this.sliding = !0, q && this.pause(), this.$indicators.length) {
                                            this.$indicators.find(".active").removeClass("active");
                                            var v = g(this.$indicators.children()[this.getItemIndex(p)]);
                                            v && v.addClass("active")
                                        }
                                        var w = g.Event("slid.bs.carousel", {
                                            relatedTarget: t,
                                            direction: r
                                        });
                                        return g.support.transition && this.$element.hasClass("slide") ? (p.addClass(c), p[0].offsetWidth, o.addClass(r), p.addClass(r), o.one("bsTransitionEnd",
                                                function () {
                                                    p.removeClass([c, r].join(" ")).addClass("active"),
                                                            o.removeClass(["active", r].join(" ")),
                                                            s.sliding = !1,
                                                            setTimeout(function () {
                                                                s.$element.trigger(w)
                                                            },
                                                                    0)
                                                }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (o.removeClass("active"), p.addClass("active"), this.sliding = !1, this.$element.trigger(w)),
                                                q && this.cycle(),
                                                this
                                    }
                                };
                        var j = g.fn.carousel;
                        g.fn.carousel = h,
                                g.fn.carousel.Constructor = i,
                                g.fn.carousel.noConflict = function () {
                                    return g.fn.carousel = j,
                                            this
                                };
                        var k = function (b) {
                            var l, m = g(this),
                                    n = g(m.attr("data-target") || (l = m.attr("href")) && l.replace(/.*(?=#[^\s]+$)/, ""));
                            if (n.hasClass("carousel")) {
                                var o = g.extend({},
                                        n.data(), m.data()),
                                        p = m.attr("data-slide-to");
                                p && (o.interval = !1),
                                        h.call(n, o),
                                        p && n.data("bs.carousel").to(p),
                                        b.preventDefault()
                            }
                        };
                        g(document).on("click.bs.carousel.data-api", "[data-slide]", k).on("click.bs.carousel.data-api", "[data-slide-to]", k),
                                g(window).on("load",
                                function () {
                                    g('[data-ride="carousel"]').each(function () {
                                        var b = g(this);
                                        h.call(b, b.data())
                                    })
                                })
                    }(jQuery),
                    +
                    function (g) {
                        function h(l) {
                            var m, n = l.attr("data-target") || (m = l.attr("href")) && m.replace(/.*(?=#[^\s]+$)/, "");
                            return g(n)
                        }
                        function i(c) {
                            return this.each(function () {
                                var b = g(this),
                                        l = b.data("bs.collapse"),
                                        m = g.extend({},
                                                j.DEFAULTS, b.data(), "object" == typeof c && c);
                                !l && m.toggle && /show|hide/.test(c) && (m.toggle = !1),
                                        l || b.data("bs.collapse", l = new j(this, m)),
                                        "string" == typeof c && l[c]()
                            })
                        }
                        var j = function (l, m) {
                            this.$element = g(l),
                                    this.options = g.extend({},
                                            j.DEFAULTS, m),
                                    this.$trigger = g('[data-toggle="collapse"][href="#' + l.id + '"],[data-toggle="collapse"][data-target="#' + l.id + '"]'),
                                    this.transitioning = null,
                                    this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
                                    this.options.toggle && this.toggle()
                        };
                        j.VERSION = "3.3.4",
                                j.TRANSITION_DURATION = 350,
                                j.DEFAULTS = {
                                    toggle: !0
                                },
                                j.prototype.dimension = function () {
                                    var b = this.$element.hasClass("width");
                                    return b ? "width" : "height"
                                },
                                j.prototype.show = function () {
                                    if (!this.transitioning && !this.$element.hasClass("in")) {
                                        var c, l = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                                        if (!(l && l.length && (c = l.data("bs.collapse"), c && c.transitioning))) {
                                            var m = g.Event("show.bs.collapse");
                                            if (this.$element.trigger(m), !m.isDefaultPrevented()) {
                                                l && l.length && (i.call(l, "hide"), c || l.data("bs.collapse", null));
                                                var n = this.dimension();
                                                this.$element.removeClass("collapse").addClass("collapsing")[n](0).attr("aria-expanded", !0),
                                                        this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                                                        this.transitioning = 1;
                                                var o = function () {
                                                    this.$element.removeClass("collapsing").addClass("collapse in")[n](""),
                                                            this.transitioning = 0,
                                                            this.$element.trigger("shown.bs.collapse")
                                                };
                                                if (!g.support.transition) {
                                                    return o.call(this)
                                                }
                                                var p = g.camelCase(["scroll", n].join("-"));
                                                this.$element.one("bsTransitionEnd", g.proxy(o, this)).emulateTransitionEnd(j.TRANSITION_DURATION)[n](this.$element[0][p])
                                            }
                                        }
                                    }
                                },
                                j.prototype.hide = function () {
                                    if (!this.transitioning && this.$element.hasClass("in")) {
                                        var l = g.Event("hide.bs.collapse");
                                        if (this.$element.trigger(l), !l.isDefaultPrevented()) {
                                            var m = this.dimension();
                                            this.$element[m](this.$element[m]())[0].offsetHeight,
                                                    this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                                                    this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                                                    this.transitioning = 1;
                                            var n = function () {
                                                this.transitioning = 0,
                                                        this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                                            };
                                            return g.support.transition ? void this.$element[m](0).one("bsTransitionEnd", g.proxy(n, this)).emulateTransitionEnd(j.TRANSITION_DURATION) : n.call(this)
                                        }
                                    }
                                },
                                j.prototype.toggle = function () {
                                    this[this.$element.hasClass("in") ? "hide" : "show"]()
                                },
                                j.prototype.getParent = function () {
                                    return g(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(g.proxy(function (b, l) {
                                        var m = g(l);
                                        this.addAriaAndCollapsedClass(h(m), m)
                                    },
                                            this)).end()
                                },
                                j.prototype.addAriaAndCollapsedClass = function (l, m) {
                                    var n = l.hasClass("in");
                                    l.attr("aria-expanded", n),
                                            m.toggleClass("collapsed", !n).attr("aria-expanded", n)
                                };
                        var k = g.fn.collapse;
                        g.fn.collapse = i,
                                g.fn.collapse.Constructor = j,
                                g.fn.collapse.noConflict = function () {
                                    return g.fn.collapse = k,
                                            this
                                },
                                g(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]',
                                function (b) {
                                    var c = g(this);
                                    c.attr("data-target") || b.preventDefault();
                                    var l = h(c),
                                            m = l.data("bs.collapse"),
                                            n = m ? "toggle" : c.data();
                                    i.call(l, n)
                                })
                    }(jQuery),
                    +
                    function (i) {
                        function j(c) {
                            c && 3 === c.which || (i(m).remove(), i(n).each(function () {
                                var b = i(this),
                                        g = k(b),
                                        h = {
                                            relatedTarget: this
                                        };
                                g.hasClass("open") && (g.trigger(c = i.Event("hide.bs.dropdown", h)), c.isDefaultPrevented() || (b.attr("aria-expanded", "false"), g.removeClass("open").trigger("hidden.bs.dropdown", h)))
                            }))
                        }
                        function k(g) {
                            var h = g.attr("data-target");
                            h || (h = g.attr("href"), h = h && /#[A-Za-z]/.test(h) && h.replace(/.*(?=#[^\s]*$)/, ""));
                            var q = h && i(h);
                            return q && q.length ? q : g.parent()
                        }
                        function l(c) {
                            return this.each(function () {
                                var b = i(this),
                                        g = b.data("bs.dropdown");
                                g || b.data("bs.dropdown", g = new o(this)),
                                        "string" == typeof c && g[c].call(b)
                            })
                        }
                        var m = ".dropdown-backdrop",
                                n = '[data-toggle="dropdown"]',
                                o = function (c) {
                                    i(c).on("click.bs.dropdown", this.toggle)
                                };
                        o.VERSION = "3.3.4",
                                o.prototype.toggle = function (b) {
                                    var c = i(this);
                                    if (!c.is(".disabled, :disabled")) {
                                        var q = k(c),
                                                r = q.hasClass("open");
                                        if (j(), !r) {
                                            "ontouchstart" in document.documentElement && !q.closest(".navbar-nav").length && i('<div class="dropdown-backdrop"/>').insertAfter(i(this)).on("click", j);
                                            var s = {
                                                relatedTarget: this
                                            };
                                            if (q.trigger(b = i.Event("show.bs.dropdown", s)), b.isDefaultPrevented()) {
                                                return
                                            }
                                            c.trigger("focus").attr("aria-expanded", "true"),
                                                    q.toggleClass("open").trigger("shown.bs.dropdown", s)
                                        }
                                        return !1
                                    }
                                },
                                o.prototype.keydown = function (c) {
                                    if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
                                        var q = i(this);
                                        if (c.preventDefault(), c.stopPropagation(), !q.is(".disabled, :disabled")) {
                                            var r = k(q),
                                                    s = r.hasClass("open");
                                            if (!s && 27 != c.which || s && 27 == c.which) {
                                                return 27 == c.which && r.find(n).trigger("focus"),
                                                        q.trigger("click")
                                            }
                                            var t = " li:not(.disabled):visible a",
                                                    u = r.find('[role="menu"]' + t + ', [role="listbox"]' + t);
                                            if (u.length) {
                                                var v = u.index(c.target);
                                                38 == c.which && v > 0 && v--,
                                                        40 == c.which && v < u.length - 1 && v++,
                                                        ~v || (v = 0),
                                                        u.eq(v).trigger("focus")
                                            }
                                        }
                                    }
                                };
                        var p = i.fn.dropdown;
                        i.fn.dropdown = l,
                                i.fn.dropdown.Constructor = o,
                                i.fn.dropdown.noConflict = function () {
                                    return i.fn.dropdown = p,
                                            this
                                },
                                i(document).on("click.bs.dropdown.data-api", j).on("click.bs.dropdown.data-api", ".dropdown form",
                                function (b) {
                                    b.stopPropagation()
                                }).on("click.bs.dropdown.data-api", n, o.prototype.toggle).on("keydown.bs.dropdown.data-api", n, o.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', o.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', o.prototype.keydown)
                    }(jQuery),
                    +
                    function (g) {
                        function h(c, k) {
                            return this.each(function () {
                                var b = g(this),
                                        l = b.data("bs.modal"),
                                        m = g.extend({},
                                                i.DEFAULTS, b.data(), "object" == typeof c && c);
                                l || b.data("bs.modal", l = new i(this, m)),
                                        "string" == typeof c ? l[c](k) : m.show && l.show(k)
                            })
                        }
                        var i = function (k, l) {
                            this.options = l,
                                    this.$body = g(document.body),
                                    this.$element = g(k),
                                    this.$dialog = this.$element.find(".modal-dialog"),
                                    this.$backdrop = null,
                                    this.isShown = null,
                                    this.originalBodyPad = null,
                                    this.scrollbarWidth = 0,
                                    this.ignoreBackdropClick = !1,
                                    this.options.remote && this.$element.find(".modal-content").load(this.options.remote, g.proxy(function () {
                                this.$element.trigger("loaded.bs.modal")
                            },
                                    this))
                        };
                        i.VERSION = "3.3.4",
                                i.TRANSITION_DURATION = 300,
                                i.BACKDROP_TRANSITION_DURATION = 150,
                                i.DEFAULTS = {
                                    backdrop: !0,
                                    keyboard: !0,
                                    show: !0
                                },
                                i.prototype.toggle = function (b) {
                                    return this.isShown ? this.hide() : this.show(b)
                                },
                                i.prototype.show = function (c) {
                                    var k = this,
                                            l = g.Event("show.bs.modal", {
                                                relatedTarget: c
                                            });
                                    this.$element.trigger(l),
                                            this.isShown || l.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', g.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal",
                                            function () {
                                                k.$element.one("mouseup.dismiss.bs.modal",
                                                        function (m) {
                                                            g(m.target).is(k.$element) && (k.ignoreBackdropClick = !0)
                                                        })
                                            }), this.backdrop(function () {
                                        var b = g.support.transition && k.$element.hasClass("fade");
                                        k.$element.parent().length || k.$element.appendTo(k.$body),
                                                k.$element.show().scrollTop(0),
                                                k.adjustDialog(),
                                                b && k.$element[0].offsetWidth,
                                                k.$element.addClass("in").attr("aria-hidden", !1),
                                                k.enforceFocus();
                                        var m = g.Event("shown.bs.modal", {
                                            relatedTarget: c
                                        });
                                        b ? k.$dialog.one("bsTransitionEnd",
                                                function () {
                                                    k.$element.trigger("focus").trigger(m)
                                                }).emulateTransitionEnd(i.TRANSITION_DURATION) : k.$element.trigger("focus").trigger(m)
                                    }))
                                },
                                i.prototype.hide = function (c) {
                                    c && c.preventDefault(),
                                            c = g.Event("hide.bs.modal"),
                                            this.$element.trigger(c),
                                            this.isShown && !c.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), g(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), g.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", g.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
                                },
                                i.prototype.enforceFocus = function () {
                                    g(document).off("focusin.bs.modal").on("focusin.bs.modal", g.proxy(function (b) {
                                        this.$element[0] === b.target || this.$element.has(b.target).length || this.$element.trigger("focus")
                                    },
                                            this))
                                },
                                i.prototype.escape = function () {
                                    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", g.proxy(function (b) {
                                        27 == b.which && this.hide()
                                    },
                                            this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
                                },
                                i.prototype.resize = function () {
                                    this.isShown ? g(window).on("resize.bs.modal", g.proxy(this.handleUpdate, this)) : g(window).off("resize.bs.modal")
                                },
                                i.prototype.hideModal = function () {
                                    var b = this;
                                    this.$element.hide(),
                                            this.backdrop(function () {
                                                b.$body.removeClass("modal-open"),
                                                        b.resetAdjustments(),
                                                        b.resetScrollbar(),
                                                        b.$element.trigger("hidden.bs.modal")
                                            })
                                },
                                i.prototype.removeBackdrop = function () {
                                    this.$backdrop && this.$backdrop.remove(),
                                            this.$backdrop = null
                                },
                                i.prototype.backdrop = function (c) {
                                    var k = this,
                                            l = this.$element.hasClass("fade") ? "fade" : "";
                                    if (this.isShown && this.options.backdrop) {
                                        var m = g.support.transition && l;
                                        if (this.$backdrop = g('<div class="modal-backdrop ' + l + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", g.proxy(function (b) {
                                            return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(b.target === b.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                                        },
                                                this)), m && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !c) {
                                            return
                                        }
                                        m ? this.$backdrop.one("bsTransitionEnd", c).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : c()
                                    } else {
                                        if (!this.isShown && this.$backdrop) {
                                            this.$backdrop.removeClass("in");
                                            var n = function () {
                                                k.removeBackdrop(),
                                                        c && c()
                                            };
                                            g.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", n).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : n()
                                        } else {
                                            c && c()
                                        }
                                    }
                                },
                                i.prototype.handleUpdate = function () {
                                    this.adjustDialog()
                                },
                                i.prototype.adjustDialog = function () {
                                    var b = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                                    this.$element.css({
                                        paddingLeft: !this.bodyIsOverflowing && b ? this.scrollbarWidth : "",
                                        paddingRight: this.bodyIsOverflowing && !b ? this.scrollbarWidth : ""
                                    })
                                },
                                i.prototype.resetAdjustments = function () {
                                    this.$element.css({
                                        paddingLeft: "",
                                        paddingRight: ""
                                    })
                                },
                                i.prototype.checkScrollbar = function () {
                                    var c = window.innerWidth;
                                    if (!c) {
                                        var k = document.documentElement.getBoundingClientRect();
                                        c = k.right - Math.abs(k.left)
                                    }
                                    this.bodyIsOverflowing = document.body.clientWidth < c,
                                            this.scrollbarWidth = this.measureScrollbar()
                                },
                                i.prototype.setScrollbar = function () {
                                    var b = parseInt(this.$body.css("padding-right") || 0, 10);
                                    this.originalBodyPad = document.body.style.paddingRight || "",
                                            this.bodyIsOverflowing && this.$body.css("padding-right", b + this.scrollbarWidth)
                                },
                                i.prototype.resetScrollbar = function () {
                                    this.$body.css("padding-right", this.originalBodyPad)
                                },
                                i.prototype.measureScrollbar = function () {
                                    var c = document.createElement("div");
                                    c.className = "modal-scrollbar-measure",
                                            this.$body.append(c);
                                    var k = c.offsetWidth - c.clientWidth;
                                    return this.$body[0].removeChild(c),
                                            k
                                };
                        var j = g.fn.modal;
                        g.fn.modal = h,
                                g.fn.modal.Constructor = i,
                                g.fn.modal.noConflict = function () {
                                    return g.fn.modal = j,
                                            this
                                },
                                g(document).on("click.bs.modal.data-api", '[data-toggle="modal"]',
                                function (b) {
                                    var k = g(this),
                                            l = k.attr("href"),
                                            m = g(k.attr("data-target") || l && l.replace(/.*(?=#[^\s]+$)/, "")),
                                            n = m.data("bs.modal") ? "toggle" : g.extend({
                                        remote: !/#/.test(l) && l
                                    },
                                            m.data(), k.data());
                                    k.is("a") && b.preventDefault(),
                                            m.one("show.bs.modal",
                                                    function (c) {
                                                        c.isDefaultPrevented() || m.one("hidden.bs.modal",
                                                                function () {
                                                                    k.is(":visible") && k.trigger("focus")
                                                                })
                                                    }),
                                            h.call(m, n, this)
                                })
                    }(jQuery),
                    +
                    function (g) {
                        function h(c) {
                            return this.each(function () {
                                var b = g(this),
                                        k = b.data("bs.tooltip"),
                                        l = "object" == typeof c && c;
                                (k || !/destroy|hide/.test(c)) && (k || b.data("bs.tooltip", k = new i(this, l)), "string" == typeof c && k[c]())
                            })
                        }
                        var i = function (c, k) {
                            this.type = null,
                                    this.options = null,
                                    this.enabled = null,
                                    this.timeout = null,
                                    this.hoverState = null,
                                    this.$element = null,
                                    this.init("tooltip", c, k)
                        };
                        i.VERSION = "3.3.4",
                                i.TRANSITION_DURATION = 150,
                                i.DEFAULTS = {
                                    animation: !0,
                                    placement: "top",
                                    selector: !1,
                                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                                    trigger: "hover focus",
                                    title: "",
                                    delay: 0,
                                    html: !1,
                                    container: !1,
                                    viewport: {
                                        selector: "body",
                                        padding: 0
                                    }
                                },
                                i.prototype.init = function (k, l, m) {
                                    if (this.enabled = !0, this.type = k, this.$element = g(l), this.options = this.getOptions(m), this.$viewport = this.options.viewport && g(this.options.viewport.selector || this.options.viewport), this.$element[0] instanceof document.constructor && !this.options.selector) {
                                        throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!")
                                    }
                                    for (var n = this.options.trigger.split(" "), o = n.length; o--; ) {
                                        var p = n[o];
                                        if ("click" == p) {
                                            this.$element.on("click." + this.type, this.options.selector, g.proxy(this.toggle, this))
                                        } else {
                                            if ("manual" != p) {
                                                var q = "hover" == p ? "mouseenter" : "focusin",
                                                        r = "hover" == p ? "mouseleave" : "focusout";
                                                this.$element.on(q + "." + this.type, this.options.selector, g.proxy(this.enter, this)),
                                                        this.$element.on(r + "." + this.type, this.options.selector, g.proxy(this.leave, this))
                                            }
                                        }
                                    }
                                    this.options.selector ? this._options = g.extend({},
                                            this.options, {
                                                trigger: "manual",
                                                selector: ""
                                            }) : this.fixTitle()
                                },
                                i.prototype.getDefaults = function () {
                                    return i.DEFAULTS
                                },
                                i.prototype.getOptions = function (c) {
                                    return c = g.extend({},
                                            this.getDefaults(), this.$element.data(), c),
                                            c.delay && "number" == typeof c.delay && (c.delay = {
                                                show: c.delay,
                                                hide: c.delay
                                            }),
                                            c
                                },
                                i.prototype.getDelegateOptions = function () {
                                    var k = {},
                                            l = this.getDefaults();
                                    return this._options && g.each(this._options,
                                            function (b, c) {
                                                l[b] != c && (k[b] = c)
                                            }),
                                            k
                                },
                                i.prototype.enter = function (k) {
                                    var l = k instanceof this.constructor ? k : g(k.currentTarget).data("bs." + this.type);
                                    return l && l.$tip && l.$tip.is(":visible") ? void(l.hoverState = "in") : (l || (l = new this.constructor(k.currentTarget, this.getDelegateOptions()), g(k.currentTarget).data("bs." + this.type, l)), clearTimeout(l.timeout), l.hoverState = "in", l.options.delay && l.options.delay.show ? void(l.timeout = setTimeout(function () {
                                        "in" == l.hoverState && l.show()
                                    },
                                            l.options.delay.show)) : l.show())
                                },
                                i.prototype.leave = function (k) {
                                    var l = k instanceof this.constructor ? k : g(k.currentTarget).data("bs." + this.type);
                                    return l || (l = new this.constructor(k.currentTarget, this.getDelegateOptions()), g(k.currentTarget).data("bs." + this.type, l)),
                                            clearTimeout(l.timeout),
                                            l.hoverState = "out",
                                            l.options.delay && l.options.delay.hide ? void(l.timeout = setTimeout(function () {
                                                "out" == l.hoverState && l.hide()
                                            },
                                                    l.options.delay.hide)) : l.hide()
                                },
                                i.prototype.show = function () {
                                    var c = g.Event("show.bs." + this.type);
                                    if (this.hasContent() && this.enabled) {
                                        this.$element.trigger(c);
                                        var s = g.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                                        if (c.isDefaultPrevented() || !s) {
                                            return
                                        }
                                        var t = this,
                                                u = this.tip(),
                                                v = this.getUID(this.type);
                                        this.setContent(),
                                                u.attr("id", v),
                                                this.$element.attr("aria-describedby", v),
                                                this.options.animation && u.addClass("fade");
                                        var w = "function" == typeof this.options.placement ? this.options.placement.call(this, u[0], this.$element[0]) : this.options.placement,
                                                x = /\s?auto?\s?/i,
                                                y = x.test(w);
                                        y && (w = w.replace(x, "") || "top"),
                                                u.detach().css({
                                            top: 0,
                                            left: 0,
                                            display: "block"
                                        }).addClass(w).data("bs." + this.type, this),
                                                this.options.container ? u.appendTo(this.options.container) : u.insertAfter(this.$element);
                                        var z = this.getPosition(),
                                                A = u[0].offsetWidth,
                                                B = u[0].offsetHeight;
                                        if (y) {
                                            var C = w,
                                                    D = this.options.container ? g(this.options.container) : this.$element.parent(),
                                                    E = this.getPosition(D);
                                            w = "bottom" == w && z.bottom + B > E.bottom ? "top" : "top" == w && z.top - B < E.top ? "bottom" : "right" == w && z.right + A > E.width ? "left" : "left" == w && z.left - A < E.left ? "right" : w,
                                                    u.removeClass(C).addClass(w)
                                        }
                                        var F = this.getCalculatedOffset(w, z, A, B);
                                        this.applyPlacement(F, w);
                                        var G = function () {
                                            var b = t.hoverState;
                                            t.$element.trigger("shown.bs." + t.type),
                                                    t.hoverState = null,
                                                    "out" == b && t.leave(t)
                                        };
                                        g.support.transition && this.$tip.hasClass("fade") ? u.one("bsTransitionEnd", G).emulateTransitionEnd(i.TRANSITION_DURATION) : G()
                                    }
                                },
                                i.prototype.applyPlacement = function (o, p) {
                                    var q = this.tip(),
                                            r = q[0].offsetWidth,
                                            s = q[0].offsetHeight,
                                            t = parseInt(q.css("margin-top"), 10),
                                            u = parseInt(q.css("margin-left"), 10);
                                    isNaN(t) && (t = 0),
                                            isNaN(u) && (u = 0),
                                            o.top = o.top + t,
                                            o.left = o.left + u,
                                            g.offset.setOffset(q[0], g.extend({
                                                using: function (b) {
                                                    q.css({
                                                        top: Math.round(b.top),
                                                        left: Math.round(b.left)
                                                    })
                                                }
                                            },
                                                    o), 0),
                                            q.addClass("in");
                                    var v = q[0].offsetWidth,
                                            w = q[0].offsetHeight;
                                    "top" == p && w != s && (o.top = o.top + s - w);
                                    var x = this.getViewportAdjustedDelta(p, o, v, w);
                                    x.left ? o.left += x.left : o.top += x.top;
                                    var y = /top|bottom/.test(p),
                                            z = y ? 2 * x.left - r + v : 2 * x.top - s + w,
                                            A = y ? "offsetWidth" : "offsetHeight";
                                    q.offset(o),
                                            this.replaceArrow(z, q[0][A], y)
                                },
                                i.prototype.replaceArrow = function (k, l, m) {
                                    this.arrow().css(m ? "left" : "top", 50 * (1 - k / l) + "%").css(m ? "top" : "left", "")
                                },
                                i.prototype.setContent = function () {
                                    var c = this.tip(),
                                            k = this.getTitle();
                                    c.find(".tooltip-inner")[this.options.html ? "html" : "text"](k),
                                            c.removeClass("fade in top bottom left right")
                                },
                                i.prototype.hide = function (c) {
                                    function k() {
                                        "in" != l.hoverState && m.detach(),
                                                l.$element.removeAttr("aria-describedby").trigger("hidden.bs." + l.type),
                                                c && c()
                                    }
                                    var l = this,
                                            m = g(this.$tip),
                                            n = g.Event("hide.bs." + this.type);
                                    return this.$element.trigger(n),
                                            n.isDefaultPrevented() ? void 0 : (m.removeClass("in"), g.support.transition && m.hasClass("fade") ? m.one("bsTransitionEnd", k).emulateTransitionEnd(i.TRANSITION_DURATION) : k(), this.hoverState = null, this)
                                },
                                i.prototype.fixTitle = function () {
                                    var b = this.$element;
                                    (b.attr("title") || "string" != typeof b.attr("data-original-title")) && b.attr("data-original-title", b.attr("title") || "").attr("title", "")
                                },
                                i.prototype.hasContent = function () {
                                    return this.getTitle()
                                },
                                i.prototype.getPosition = function (k) {
                                    k = k || this.$element;
                                    var l = k[0],
                                            m = "BODY" == l.tagName,
                                            n = l.getBoundingClientRect();
                                    null == n.width && (n = g.extend({},
                                            n, {
                                                width: n.right - n.left,
                                                height: n.bottom - n.top
                                            }));
                                    var o = m ? {
                                        top: 0,
                                        left: 0
                                    } : k.offset(),
                                            p = {
                                                scroll: m ? document.documentElement.scrollTop || document.body.scrollTop : k.scrollTop()
                                            },
                                            q = m ? {
                                                width: g(window).width(),
                                                height: g(window).height()
                                            } : null;
                                    return g.extend({},
                                            n, p, q, o)
                                },
                                i.prototype.getCalculatedOffset = function (k, l, m, n) {
                                    return "bottom" == k ? {
                                        top: l.top + l.height,
                                        left: l.left + l.width / 2 - m / 2
                                    } : "top" == k ? {
                                        top: l.top - n,
                                        left: l.left + l.width / 2 - m / 2
                                    } : "left" == k ? {
                                        top: l.top + l.height / 2 - n / 2,
                                        left: l.left - m
                                    } : {
                                        top: l.top + l.height / 2 - n / 2,
                                        left: l.left + l.width
                                    }
                                },
                                i.prototype.getViewportAdjustedDelta = function (l, m, n, o) {
                                    var p = {
                                        top: 0,
                                        left: 0
                                    };
                                    if (!this.$viewport) {
                                        return p
                                    }
                                    var q = this.options.viewport && this.options.viewport.padding || 0,
                                            r = this.getPosition(this.$viewport);
                                    if (/right|left/.test(l)) {
                                        var s = m.top - q - r.scroll,
                                                t = m.top + q - r.scroll + o;
                                        s < r.top ? p.top = r.top - s : t > r.top + r.height && (p.top = r.top + r.height - t)
                                    } else {
                                        var u = m.left - q,
                                                v = m.left + q + n;
                                        u < r.left ? p.left = r.left - u : v > r.width && (p.left = r.left + r.width - v)
                                    }
                                    return p
                                },
                                i.prototype.getTitle = function () {
                                    var k, l = this.$element,
                                            m = this.options;
                                    return k = l.attr("data-original-title") || ("function" == typeof m.title ? m.title.call(l[0]) : m.title)
                                },
                                i.prototype.getUID = function (b) {
                                    do {
                                        b += ~~(1000000 * Math.random())
                                    } while (document.getElementById(b));
                                    return b
                                },
                                i.prototype.tip = function () {
                                    return this.$tip = this.$tip || g(this.options.template)
                                },
                                i.prototype.arrow = function () {
                                    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
                                },
                                i.prototype.enable = function () {
                                    this.enabled = !0
                                },
                                i.prototype.disable = function () {
                                    this.enabled = !1
                                },
                                i.prototype.toggleEnabled = function () {
                                    this.enabled = !this.enabled
                                },
                                i.prototype.toggle = function (k) {
                                    var l = this;
                                    k && (l = g(k.currentTarget).data("bs." + this.type), l || (l = new this.constructor(k.currentTarget, this.getDelegateOptions()), g(k.currentTarget).data("bs." + this.type, l))),
                                            l.tip().hasClass("in") ? l.leave(l) : l.enter(l)
                                },
                                i.prototype.destroy = function () {
                                    var b = this;
                                    clearTimeout(this.timeout),
                                            this.hide(function () {
                                                b.$element.off("." + b.type).removeData("bs." + b.type)
                                            })
                                };
                        var j = g.fn.tooltip;
                        g.fn.tooltip = h,
                                g.fn.tooltip.Constructor = i,
                                g.fn.tooltip.noConflict = function () {
                                    return g.fn.tooltip = j,
                                            this
                                }
                    }(jQuery),
                    +
                    function (g) {
                        function h(c) {
                            return this.each(function () {
                                var b = g(this),
                                        k = b.data("bs.popover"),
                                        l = "object" == typeof c && c;
                                (k || !/destroy|hide/.test(c)) && (k || b.data("bs.popover", k = new i(this, l)), "string" == typeof c && k[c]())
                            })
                        }
                        var i = function (c, k) {
                            this.init("popover", c, k)
                        };
                        if (!g.fn.tooltip) {
                            throw new Error("Popover requires tooltip.js")
                        }
                        i.VERSION = "3.3.4",
                                i.DEFAULTS = g.extend({},
                                        g.fn.tooltip.Constructor.DEFAULTS, {
                                            placement: "right",
                                            trigger: "click",
                                            content: "",
                                            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
                                        }),
                                i.prototype = g.extend({},
                                        g.fn.tooltip.Constructor.prototype),
                                i.prototype.constructor = i,
                                i.prototype.getDefaults = function () {
                                    return i.DEFAULTS
                                },
                                i.prototype.setContent = function () {
                                    var k = this.tip(),
                                            l = this.getTitle(),
                                            m = this.getContent();
                                    k.find(".popover-title")[this.options.html ? "html" : "text"](l),
                                            k.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof m ? "html" : "append" : "text"](m),
                                            k.removeClass("fade top bottom left right in"),
                                            k.find(".popover-title").html() || k.find(".popover-title").hide()
                                },
                                i.prototype.hasContent = function () {
                                    return this.getTitle() || this.getContent()
                                },
                                i.prototype.getContent = function () {
                                    var c = this.$element,
                                            k = this.options;
                                    return c.attr("data-content") || ("function" == typeof k.content ? k.content.call(c[0]) : k.content)
                                },
                                i.prototype.arrow = function () {
                                    return this.$arrow = this.$arrow || this.tip().find(".arrow")
                                };
                        var j = g.fn.popover;
                        g.fn.popover = h,
                                g.fn.popover.Constructor = i,
                                g.fn.popover.noConflict = function () {
                                    return g.fn.popover = j,
                                            this
                                }
                    }(jQuery),
                    +
                    function (g) {
                        function h(b, k) {
                            this.$body = g(document.body),
                                    this.$scrollElement = g(g(b).is(document.body) ? window : b),
                                    this.options = g.extend({},
                                            h.DEFAULTS, k),
                                    this.selector = (this.options.target || "") + " .nav li > a",
                                    this.offsets = [],
                                    this.targets = [],
                                    this.activeTarget = null,
                                    this.scrollHeight = 0,
                                    this.$scrollElement.on("scroll.bs.scrollspy", g.proxy(this.process, this)),
                                    this.refresh(),
                                    this.process()
                        }
                        function i(b) {
                            return this.each(function () {
                                var c = g(this),
                                        k = c.data("bs.scrollspy"),
                                        l = "object" == typeof b && b;
                                k || c.data("bs.scrollspy", k = new h(this, l)),
                                        "string" == typeof b && k[b]()
                            })
                        }
                        h.VERSION = "3.3.4",
                                h.DEFAULTS = {
                                    offset: 10
                                },
                                h.prototype.getScrollHeight = function () {
                                    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
                                },
                                h.prototype.refresh = function () {
                                    var k = this,
                                            l = "offset",
                                            m = 0;
                                    this.offsets = [],
                                            this.targets = [],
                                            this.scrollHeight = this.getScrollHeight(),
                                            g.isWindow(this.$scrollElement[0]) || (l = "position", m = this.$scrollElement.scrollTop()),
                                            this.$body.find(this.selector).map(function () {
                                        var c = g(this),
                                                n = c.data("target") || c.attr("href"),
                                                o = /^#./.test(n) && g(n);
                                        return o && o.length && o.is(":visible") && [[o[l]().top + m, n]] || null
                                    }).sort(function (c, n) {
                                        return c[0] - n[0]
                                    }).each(function () {
                                        k.offsets.push(this[0]),
                                                k.targets.push(this[1])
                                    })
                                },
                                h.prototype.process = function () {
                                    var k, l = this.$scrollElement.scrollTop() + this.options.offset,
                                            m = this.getScrollHeight(),
                                            n = this.options.offset + m - this.$scrollElement.height(),
                                            o = this.offsets,
                                            p = this.targets,
                                            q = this.activeTarget;
                                    if (this.scrollHeight != m && this.refresh(), l >= n) {
                                        return q != (k = p[p.length - 1]) && this.activate(k)
                                    }
                                    if (q && l < o[0]) {
                                        return this.activeTarget = null,
                                                this.clear()
                                    }
                                    for (k = o.length; k--; ) {
                                        q != p[k] && l >= o[k] && (void 0 === o[k + 1] || l < o[k + 1]) && this.activate(p[k])
                                    }
                                },
                                h.prototype.activate = function (k) {
                                    this.activeTarget = k,
                                            this.clear();
                                    var l = this.selector + '[data-target="' + k + '"],' + this.selector + '[href="' + k + '"]',
                                            m = g(l).parents("li").addClass("active");
                                    m.parent(".dropdown-menu").length && (m = m.closest("li.dropdown").addClass("active")),
                                            m.trigger("activate.bs.scrollspy")
                                },
                                h.prototype.clear = function () {
                                    g(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
                                };
                        var j = g.fn.scrollspy;
                        g.fn.scrollspy = i,
                                g.fn.scrollspy.Constructor = h,
                                g.fn.scrollspy.noConflict = function () {
                                    return g.fn.scrollspy = j,
                                            this
                                },
                                g(window).on("load.bs.scrollspy.data-api",
                                function () {
                                    g('[data-spy="scroll"]').each(function () {
                                        var c = g(this);
                                        i.call(c, c.data())
                                    })
                                })
                    }(jQuery),
                    +
                    function (g) {
                        function h(c) {
                            return this.each(function () {
                                var b = g(this),
                                        l = b.data("bs.tab");
                                l || b.data("bs.tab", l = new i(this)),
                                        "string" == typeof c && l[c]()
                            })
                        }
                        var i = function (c) {
                            this.element = g(c)
                        };
                        i.VERSION = "3.3.4",
                                i.TRANSITION_DURATION = 150,
                                i.prototype.show = function () {
                                    var l = this.element,
                                            m = l.closest("ul:not(.dropdown-menu)"),
                                            n = l.data("target");
                                    if (n || (n = l.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !l.parent("li").hasClass("active")) {
                                        var o = m.find(".active:last a"),
                                                p = g.Event("hide.bs.tab", {
                                                    relatedTarget: l[0]
                                                }),
                                                q = g.Event("show.bs.tab", {
                                                    relatedTarget: o[0]
                                                });
                                        if (o.trigger(p), l.trigger(q), !q.isDefaultPrevented() && !p.isDefaultPrevented()) {
                                            var r = g(n);
                                            this.activate(l.closest("li"), m),
                                                    this.activate(r, r.parent(),
                                                            function () {
                                                                o.trigger({
                                                                    type: "hidden.bs.tab",
                                                                    relatedTarget: l[0]
                                                                }),
                                                                        l.trigger({
                                                                            type: "shown.bs.tab",
                                                                            relatedTarget: o[0]
                                                                        })
                                                            })
                                        }
                                    }
                                },
                                i.prototype.activate = function (c, l, m) {
                                    function n() {
                                        o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
                                                c.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
                                                p ? (c[0].offsetWidth, c.addClass("in")) : c.removeClass("fade"),
                                                c.parent(".dropdown-menu").length && c.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
                                                m && m()
                                    }
                                    var o = l.find("> .active"),
                                            p = m && g.support.transition && (o.length && o.hasClass("fade") || !!l.find("> .fade").length);
                                    o.length && p ? o.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(),
                                            o.removeClass("in")
                                };
                        var j = g.fn.tab;
                        g.fn.tab = h,
                                g.fn.tab.Constructor = i,
                                g.fn.tab.noConflict = function () {
                                    return g.fn.tab = j,
                                            this
                                };
                        var k = function (b) {
                            b.preventDefault(),
                                    h.call(g(this), "show")
                        };
                        g(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', k).on("click.bs.tab.data-api", '[data-toggle="pill"]', k)
                    }(jQuery),
                    +
                    function (g) {
                        function h(c) {
                            return this.each(function () {
                                var b = g(this),
                                        k = b.data("bs.affix"),
                                        l = "object" == typeof c && c;
                                k || b.data("bs.affix", k = new i(this, l)),
                                        "string" == typeof c && k[c]()
                            })
                        }
                        var i = function (c, k) {
                            this.options = g.extend({},
                                    i.DEFAULTS, k),
                                    this.$target = g(this.options.target).on("scroll.bs.affix.data-api", g.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", g.proxy(this.checkPositionWithEventLoop, this)),
                                    this.$element = g(c),
                                    this.affixed = null,
                                    this.unpin = null,
                                    this.pinnedOffset = null,
                                    this.checkPosition()
                        };
                        i.VERSION = "3.3.4",
                                i.RESET = "affix affix-top affix-bottom",
                                i.DEFAULTS = {
                                    offset: 0,
                                    target: window
                                },
                                i.prototype.getState = function (k, l, m, n) {
                                    var o = this.$target.scrollTop(),
                                            p = this.$element.offset(),
                                            q = this.$target.height();
                                    if (null != m && "top" == this.affixed) {
                                        return m > o ? "top" : !1
                                    }
                                    if ("bottom" == this.affixed) {
                                        return null != m ? o + this.unpin <= p.top ? !1 : "bottom" : k - n >= o + q ? !1 : "bottom"
                                    }
                                    var r = null == this.affixed,
                                            s = r ? o : p.top,
                                            t = r ? q : l;
                                    return null != m && m >= o ? "top" : null != n && s + t >= k - n ? "bottom" : !1
                                },
                                i.prototype.getPinnedOffset = function () {
                                    if (this.pinnedOffset) {
                                        return this.pinnedOffset
                                    }
                                    this.$element.removeClass(i.RESET).addClass("affix");
                                    var c = this.$target.scrollTop(),
                                            k = this.$element.offset();
                                    return this.pinnedOffset = k.top - c
                                },
                                i.prototype.checkPositionWithEventLoop = function () {
                                    setTimeout(g.proxy(this.checkPosition, this), 1)
                                },
                                i.prototype.checkPosition = function () {
                                    if (this.$element.is(":visible")) {
                                        var c = this.$element.height(),
                                                k = this.options.offset,
                                                l = k.top,
                                                m = k.bottom,
                                                n = g(document.body).height();
                                        "object" != typeof k && (m = l = k),
                                                "function" == typeof l && (l = k.top(this.$element)),
                                                "function" == typeof m && (m = k.bottom(this.$element));
                                        var o = this.getState(n, c, l, m);
                                        if (this.affixed != o) {
                                            null != this.unpin && this.$element.css("top", "");
                                            var p = "affix" + (o ? "-" + o : ""),
                                                    q = g.Event(p + ".bs.affix");
                                            if (this.$element.trigger(q), q.isDefaultPrevented()) {
                                                return
                                            }
                                            this.affixed = o,
                                                    this.unpin = "bottom" == o ? this.getPinnedOffset() : null,
                                                    this.$element.removeClass(i.RESET).addClass(p).trigger(p.replace("affix", "affixed") + ".bs.affix")
                                        }
                                        "bottom" == o && this.$element.offset({
                                            top: n - c - m
                                        })
                                    }
                                };
                        var j = g.fn.affix;
                        g.fn.affix = h,
                                g.fn.affix.Constructor = i,
                                g.fn.affix.noConflict = function () {
                                    return g.fn.affix = j,
                                            this
                                },
                                g(window).on("load",
                                function () {
                                    g('[data-spy="affix"]').each(function () {
                                        var b = g(this),
                                                k = b.data();
                                        k.offset = k.offset || {},
                                                null != k.offsetBottom && (k.offset.bottom = k.offsetBottom),
                                                null != k.offsetTop && (k.offset.top = k.offsetTop),
                                                h.call(b, k)
                                    })
                                })
                    }(jQuery)
        },
        {}],
    10: [function (d, e, f) {
            (function () {
                var p, q, r, s, t, u, v, w, x, y, z, A, B, C, D;
                if (y = {
                    triangles: 10,
                    speed: 2,
                    redMin: 0,
                    redMax: 83,
                    greenMin: 0,
                    greenMax: 100,
                    blueMin: 100,
                    blueMax: 180,
                    opacityMin: 0.05,
                    opacityMax: 0.2
                },
                        x = function (g, h, i) {
                            return Math.min(Math.max(g, h), i)
                        },
                        B = function (c, g) {
                            return null == c && (c = 0),
                                    null == g && (g = 1),
                                    Math.random() * (g - c) + c
                        },
                        window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
                        function (c, g) {
                            return window.setTimeout(c, 1000 / 60)
                        },
                        t = function () {
                            function b(c, g) {
                                this.x = null != c ? c : 0,
                                        this.y = null != g ? g : 0
                            }
                            return b.prototype.x = 0,
                                    b.prototype.y = 0,
                                    b.random = function (g) {
                                        var h, i;
                                        return h = B(g.minX(), g.maxX()),
                                                i = B(g.minY(), g.maxY()),
                                                new b(h, i)
                                    },
                                    b.prototype.outOfBounds = function (c) {
                                        return c.minX() >= this.x || c.maxX() <= this.x || c.minY() >= this.y || c.maxY() <= this.y
                                    },
                                    b.prototype.clamp = function (c) {
                                        return this.x = x(this.x, c.minX(), c.maxX()),
                                                this.y = x(this.y, c.minY(), c.maxY()),
                                                this
                                    },
                                    b.prototype.addVector = function (c) {
                                        return this.x += c.x,
                                                this.y += c.y,
                                                this
                                    },
                                    b.prototype.scalarProduct = function (c) {
                                        return this.x *= c,
                                                this.y *= c,
                                                this
                                    },
                                    b.prototype.reflectAndClamp = function (c, g) {
                                        return this.outOfBounds(c) ? ((this.x <= c.minX() || this.x >= c.maxX()) && (g.x *= -1), (this.y <= c.minY() || this.y >= c.maxY()) && (g.y *= -1), this.clamp(c), this) : this
                                    },
                                    b
                        }(), q = function () {
                    function b(c, g) {
                        this.topLeft = null != c ? c : new t,
                                this.bottomRight = null != g ? g : new t,
                                window.bounds = this
                    }
                    return b.prototype.topLeft = void 0,
                            b.prototype.bottomRight = void 0,
                            b.prototype.minX = function () {
                                return this.topLeft.x
                            },
                            b.prototype.maxX = function () {
                                return this.bottomRight.x
                            },
                            b.prototype.minY = function () {
                                return this.topLeft.y
                            },
                            b.prototype.maxY = function () {
                                return this.bottomRight.y
                            },
                            b
                }(), s = function () {
                    function b(g) {
                        var h;
                        for (this.bounds = null != g ? g : new q, this.red = Math.floor(B(y.redMin, y.redMax)), this.green = Math.floor(B(y.greenMin, y.greenMax)), this.blue = Math.floor(B(y.blueMin, y.blueMax)), this.opacity = B(y.opacityMin, y.opacityMax), this.vertices = [], this.bearings = [], h = 0; 3 > h; h++) {
                            this.vertices.push(t.random(this.bounds)),
                                    this.bearings.push(t.random(this.bearingBounds).scalarProduct(y.speed))
                        }
                    }
                    return b.prototype.red = void 0,
                            b.prototype.green = void 0,
                            b.prototype.blue = void 0,
                            b.prototype.opacity = void 0,
                            b.prototype.bounds = void 0,
                            b.prototype.vertices = void 0,
                            b.prototype.bearings = void 0,
                            b.prototype.bearingBounds = new q(new t(-1, -1), new t(1, 1)),
                            b.prototype.update = function () {
                                var g, h, i, j, k;
                                for (j = [], h = i = 0; 3 > i; h = ++i) {
                                    k = this.vertices[h],
                                            g = this.bearings[h],
                                            k.addVector(g),
                                            j.push(k.reflectAndClamp(this.bounds, g))
                                }
                                return j
                            },
                            b.prototype.render = function (i, j) {
                                var k, l, m, n, o, E;
                                for (null == j && (j = 0), o = [], l = m = 0; 3 > m; l = ++m) {
                                    k = this.bearings[l],
                                            E = this.vertices[l],
                                            o.push({
                                                x: parseInt(E.x + j * k.x),
                                                y: parseInt(E.y + j * k.y)
                                            })
                                }
                                for (i.fillStyle = "rgba(" + this.red + "," + this.green + "," + this.blue + "," + this.opacity + ")", i.beginPath(), i.moveTo(o[0].x, o[0].y), l = n = 2; n >= 0; l = --n) {
                                    i.lineTo(o[l].x, o[l].y)
                                }
                                return i.closePath(),
                                        i.fill(),
                                        this
                            },
                            b
                }(), r = function () {
                    function b(c) {
                        this.el = c,
                                this.context = this.el.getContext("2d"),
                                this.triangles = [],
                                this.previous = (new Date).getTime(),
                                this.lag = 0
                    }
                    return b.prototype.updateStep = 1000 / 60,
                            b.prototype.el = void 0,
                            b.prototype.context = void 0,
                            b.prototype.triangles = void 0,
                            b.prototype.previous = void 0,
                            b.prototype.lag = void 0,
                            b.prototype.addTriangle = function (c) {
                                return this.triangles.push(c)
                            },
                            b.prototype.update = function () {
                                var g, h, i, j;
                                for (i = this.triangles, g = 0, h = i.length; h > g; g++) {
                                    j = i[g],
                                            j.update()
                                }
                            },
                            b.prototype.render = function (g) {
                                var h, i, j, k;
                                for (this.context.clearRect(0, 0, this.el.width, this.el.height), j = this.triangles, h = 0, i = j.length; i > h; h++) {
                                    k = j[h],
                                            k.render(this.context, g)
                                }
                            },
                            b.prototype.loop = function () {
                                var c;
                                for (c = (new Date).getTime(), this.lag += c - this.previous, this.previous = c; this.lag >= this.updateStep; ) {
                                    this.update(),
                                            this.lag -= this.updateStep
                                }
                                return this.render(this.lag / this.updateStep)
                            },
                            b.prototype.start = function () {
                                return window.requestAnimFrame(function (c) {
                                    return function () {
                                        return c.start()
                                    }
                                }(this)),
                                        this.loop()
                            },
                            b
                }(), z = document.getElementById("canvas"), null === z) {
                    return !1
                }
                for (p = $(z), z.width = p.innerWidth(), z.height = p.parent().innerHeight(), D = new t, D.x -= 0.25 * z.width, D.y -= 0.25 * z.height, u = new t(z.width, z.height), u.x += 0.25 * z.width, u.y += 0.25 * z.height, v = new q(D, u), w = new r(z), A = 0, C = y.triangles; C >= 0 ? C > A : A > C; C >= 0 ? A++ : A--) {
                    w.addTriangle(new s(v))
                }
                w.start()
            }).call(this)
        },
        {}],
    11: [function (h, i, j) {
            function k() {
                var b = $("body").find('[data-toggle="modal"]');
                b.click(function () {
                    var d = $(this).data("target"),
                            e = $(this).attr("data-theVideo"),
                            f = e + "?autoplay=1";
                    $(d + " iframe").attr("src", f),
                            $(d + " button.close").click(function () {
                        $(d + " iframe").attr("src", e)
                    }),
                            $(".modal").click(function () {
                        $(d + " iframe").attr("src", e)
                    })
                })
            }
            function l(b) {
                b.removeClass("navbar-inverse").addClass("navbar-default").addClass("navbar-fixed-top")
            }
            function m(b) {
                b.addClass("navbar-inverse").removeClass("navbar-default").removeClass("navbar-fixed-top")
            }
            var n = h("jquery");
            window.jQuery = n,
                    window.$ = n,
                    h("./pricer.js"),
                    h("./animation.js"),
                    h("../bootstrap/bootstrap.js"),
                    h("../slick/slick.min.js"),
                    k(),
                    n(document).ready(function () {
                var b = function (d, e) {
                    try {
                        __adroll.record_user({
                            adroll_segments: "dbee6c0d"
                        })
                    } catch (f) {
                    }
                    fbq("track", "CompleteRegistration"),
                            dataLayer.push({
                                event: "join",
                                eventCategory: d,
                                eventAction: e,
                                eventLabel: "first_button",
                                eventValue: "1"
                            })
                };
                n(".header_enterprise_intro") && n(".header_enterprise_intro").addClass("animated fadeIn"),
                        $("#cta-enterprise-contact").on("click",
                        function (c) {
                            twttr.conversion.trackPid("nuxqs", {
                                tw_sale_amount: 0,
                                tw_order_quantity: 0
                            })
                        }),
                        $("#cta-home").on("click",
                        function (c) {
                            b("sign_up_github", "Sign Up Github Home")
                        }),
                        $("#cta-pricing-top").on("click",
                        function (c) {
                            b("sign_up_github", "Sign Up Github Pricing")
                        }),
                        $(".contact-enterprise").on("click",
                        function (c) {
                            b("Contact Enterprise", "contact enterprise main page")
                        }),
                        $("#video-redis").on("click",
                        function (c) {
                            b("Video", "Play")
                        }),
                        $("#addon-redis").on("click",
                        function (c) {
                            b("Check Addon Pricing", "Redis")
                        }),
                        $("#addon-es").on("click",
                        function (c) {
                            b("Check Addon Pricing", "Elasticsearch")
                        }),
                        $("#addon-postgresql").on("click",
                        function (c) {
                            b("Check Addon Pricing", "Postgresql")
                        }),
                        $("#addon-mysql").on("click",
                        function (c) {
                            b("Check Addon Pricing", "Mysql")
                        })
            }),
                    n(document).ready(function () {
                $(".single-item").length > 0 && $(".single-item").slick({
                    dots: !0,
                    arrows: !1,
                    autoplay: !0,
                    autoplaySpeed: 5000,
                    infinite: !0
                })
            }),
                    $(function () {
                        $("div.team") && ($.fn.randomize = function (b) {
                            return this.each(function () {
                                var e = $(this),
                                        f = e.children(b);
                                f.sort(function () {
                                    return Math.round(Math.random()) - 0.5
                                }),
                                        e.remove(b);
                                for (var g = 0; g < f.length; g++) {
                                    e.append(f[g])
                                }
                            })
                        },
                                0 === window.location.pathname.indexOf("/pricing") && $("div.team").randomize("div.member"))
                    }),
                    $(function () {
                        var c;
                        if (0 === window.location.pathname.indexOf("/pricing")) {
                            c = $("section.summary"),
                                    c.affix({
                                        offset: {
                                            top: c.position().top
                                        }
                                    })
                        } else {
                       
                        }
                    })
        },
        {
            "../bootstrap/bootstrap.js": 9,
            "../slick/slick.min.js": 13,
            "./animation.js": 10,
            "./pricer.js": 12,
            jquery: 5
        }],
    12: [function (o, p, q) {
            var r = o("baconjs"),
                    s = o("lodash"),
                    t = o("jquery"),
                    u = o("querystring"),
                    v = o("../../../../NumberFormat.js"),
                    w = o("../../../../configuration.js"),
                    x = s.template('<div class="addon-plans-container collapse"></div>'),
                    y = s.template('<div class="addon-plans col-md-3"><div class="plans-list"><ul class="plans"><% plans.forEach(function(plan){ %><li class="plan" data-plan-id="<%- plan.id %>"><span class="plan-name"><%- plan.name %></span><span class="plan-price price" data-raw-price="<%- plan.rawPrice %>"><%- plan.price %><%- currencySymbol %> / Mo</span></li><% }) %></ul></div></div>'),
                    z = s.template('<div class="plan-features col-md-9"><div class="plan-wrapper"><% features.forEach(function(feature){ %><div class="plan-feature"><span class="plan-feature-name"><%- feature.name %></span><span class="plan-feature-value"><%- feature.value %></span></div><% }) %><button class="plan-add btn" data-plan-id="<%- id %>">Add to selection</button><div class="plan-create-cli"><pre class="plan-cli-command">> clever addon create --plan <%- slug %> <%- providerId %> myNewAddon</pre><div class="plan-cli-command-explain">To provision, copy above snippet to clipboard or Login to provision on Clever Cloud</div></div></div></div>'),
                    A = s.template('<li><span class="remove-item" data-item-type="<%- type %>" data-item-id="<%- id %>"> </span><span class="order-item price" data-raw-price="<%- price %>"><%- number %> <%- name %></span><span class="order-item-price"><%- price %></span></li>'),
                    B = function (b) {
                        this.flavors = b.flavors,
                                this.addonProviders = b.addonProviders,
                                this.b_order = new r.Bus,
                                this.s_order = this.b_order.toProperty({
                                    addons: {},
                                    flavors: {}
                                }),
                                this.rates = b.rates,
                                this.currentRate = b.currentRate,
                                this.b_rates = new r.Bus,
                                this.orderFlavors(),
                                this.selectAddon(),
                                this.updateSummary(),
                                this.listenPriceChange(),
                                this.exportData(),
                                this.importData(),
                                this.openAddonAnchor()
                    };
            B.prototype.countItems = function (b) {
                return s.reduce(b,
                        function (c, d) {
                            return c += d.items
                        },
                        0)
            },
                    B.prototype.updateSummary = function () {
                        var c = this;
                        this.s_order.map(".flavors").map(this.countItems).assign(t(".summary .flavors-count"), "text"),
                                this.s_order.map(".addons").map(this.countItems).assign(t(".summary .addons-count"), "text");
                        var d = r.mergeAll(this.s_order, this.s_order.sampledBy(this.b_rates)).map(function (e) {
                            var f = s.mapValues(e.flavors,
                                    function (b) {
                                        return b.flavor.monthlyPrice = 6 * b.flavor.price * 0.0097 * 24 * 30,
                                                b
                                    });
                            return {
                                flavors: f,
                                addons: e.addons
                            }
                        });
                        d.map(function (e) {
                            var g = c.currentRate.val / c.rates.EUR.val,
                                    h = s.reduce(e.addons,
                                            function (f, j) {
                                                return f += j.plan.price * g * j.items
                                            },
                                            0),
                                    i = s.reduce(e.flavors,
                                            function (f, j) {
                                                return f += j.flavor.monthlyPrice * g * j.items
                                            },
                                            0);
                            return v.format(h + i, 2).toString() + c.currentRate.symbol
                        }).assign(t(".summary .total-price, .order-summary .order-items-price-total"), "text"),
                                d.onValue(s.bind(this.displaySummaryOrders, this))
                    },
                    B.prototype.listenPriceChange = function () {
                        var e = this,
                                f = t(".change-rate label.btn"),
                                g = this.rates.EUR.val,
                                h = f.asEventStream("click").doAction("preventDefault").map(function (d) {
                            var i = e.rates[d.target.getAttribute("data-rate").trim().toUpperCase()];
                            return e.currentRate = i,
                                    i
                        });
                        h.onValue(function (b) {
                            s.each(t(".flavors-list .price[data-raw-price]"),
                                    function (c) {
                                        var i = parseFloat(c.getAttribute("data-raw-price").trim()),
                                                j = v.format(6 * i * 0.0097 * (b.val / g) * 24 * 30, 2);
                                        t(c).text(j.toString() + b.symbol + " / Mo")
                                    }),
                                    s.each(t(".addons-list .price[data-raw-price]"),
                                            function (c) {
                                                var i = parseFloat(c.getAttribute("data-raw-price").trim()),
                                                        j = v.format(i * (b.val / g));
                                                t(c).text(j.toString() + b.symbol + " / Mo")
                                            })
                        }),
                                this.b_rates.plug(h)
                    },
                    B.prototype.exportData = function () {
                        var b = this;
                        t("button.share").asEventStream("click").doAction("preventDefault").flatMapLatest(function () {
                            return b.s_order.first()
                        }).map(function (e) {
                            var f = s.mapValues(e.flavors,
                                    function (c) {
                                        return c.items
                                    }),
                                    g = s.mapValues(e.addons,
                                            function (c) {
                                                return c.items
                                            });
                            return {
                                addons: g,
                                flavors: f,
                                rate: b.currentRate.name
                            }
                        }).map(JSON.stringify).map(btoa).map(function (c) {
                            var d = window.location;
                            return d.protocol + "//" + d.host + d.pathname + "?share=" + c
                        }).flatMapLatest(function (d) {
                            var e = w.BITLY_API + "?access_token=" + w.BITLY_TOKEN + "&longUrl=" + encodeURIComponent(d);
                            return b.doRequest(e).map(function (c) {
                                return c.data.url
                            })
                        }).onValue(function (c) {
                            t(".share-link").text(c),
                                    t(".share-link").attr("href", c)
                        })
                    },
                    B.prototype.doRequest = function (b) {
                        return r.fromBinder(function (d) {
                            var e = new XMLHttpRequest;
                            return e.onreadystatechange = function () {
                                if (4 === e.readyState) {
                                    try {
                                        var c = JSON.parse(e.responseText);
                                        d(e.status >= 400 ? new r.Error(c) : new r.Next(c))
                                    } catch (f) {
                                        d(new r.Error(f))
                                    }
                                    d(new r.End)
                                }
                            },
                                    e.open("GET", b, !0),
                                    e.send(),
                                    function () {
                                        e.abort()
                                    }
                        })
                    },
                    B.prototype.importData = function () {
                        var e = this,
                                f = u.parse(window.location.search.substr(1));
                        if (f.share) {
                            try {
                                var g = JSON.parse(atob(f.share));
                                t('.change-rate label[data-rate="' + g.rate + '"]').click(),
                                        e.currentRate = e.rates[g.rate];
                                var l = s.chain(e.addonProviders).map(".plans").flatten().value(),
                                        m = s.mapValues(g.addons,
                                                function (d, h) {
                                                    var i = s.find(l,
                                                            function (b) {
                                                                return b.id === h
                                                            }),
                                                            j = s.find(e.addonProviders,
                                                                    function (c) {
                                                                        var k = s.find(c.plans,
                                                                                function (b) {
                                                                                    return b.id === i.id
                                                                                });
                                                                        return k ? c : !1
                                                                    });
                                                    return {
                                                        items: d,
                                                        plan: s.extend({},
                                                                i, {
                                                                    provider: j
                                                                })
                                                    }
                                                }),
                                        n = s.mapValues(g.flavors,
                                                function (h, i) {
                                                    var j = s.find(e.flavors,
                                                            function (b) {
                                                                return b.name === i
                                                            });
                                                    return {
                                                        items: h,
                                                        flavor: j
                                                    }
                                                }),
                                        C = {
                                            addons: m,
                                            flavors: n
                                        };
                                e.b_order.push(C)
                            } catch (D) {
                                console.error(D),
                                        alert("Invalid share")
                            }
                        }
                    },
                    B.prototype.orderFlavors = function () {
                        var c = this,
                                d = t(".flavors .add-flavor").asEventStream("click").doAction(".preventDefault").map(function (e) {
                            var f = e.currentTarget.getAttribute("data-flavor-name").trim();
                            return s.find(c.flavors,
                                    function (b) {
                                        return b.name === f
                                    })
                        }).flatMapLatest(function (e) {
                            return c.s_order.first().map(function (b) {
                                return b.flavors[e.name] ? ++b.flavors[e.name].items : b.flavors[e.name] = {
                                    items: 1,
                                    flavor: e
                                },
                                        b
                            })
                        });
                        this.b_order.plug(d)
                    },
                    B.prototype.selectAddon = function () {
                        t(".addons .addon").asEventStream("click").doAction(".preventDefault").map(".currentTarget").map(t).onValue(s.bind(this.displayProviderPlans, this))
                    },
                    B.prototype.displayProviderPlans = function (e) {
                        var f = this,
                                h = this.currentRate.val / this.rates.EUR.val,
                                l = t(".addon-plans-container"),
                                m = e.attr("data-provider-id").trim(),
                                n = s.find(this.addonProviders,
                                        function (b) {
                                            return b.id === m
                                        }),
                                C = s.chain(n.plans).map(function (b) {
                            return s.extend({},
                                    b, {
                                        rawPrice: b.price,
                                        price: v.format(b.price * h, 2)
                                    })
                        }).sortBy(function (b) {
                            return parseInt(b.price)
                        }).map(function (c) {
                            var d = c.features.sort(function (g, i) {
                                return g.name < i.name ? -1 : g.name > i.name ? 1 : 0
                            });
                            return s.extend({},
                                    c, {
                                        features: d
                                    })
                        }).value(),
                                D = s.extend({},
                                        n, {
                                            plans: C,
                                            currencySymbol: f.currentRate.symbol
                                        });
                        e.hasClass("active") ? (l.one("hidden.bs.collapse",
                                function () {
                                    l.remove()
                                }), l.collapse("hide"), e.removeClass("active")) : (l.length > 0 ? (l.one("hidden.bs.collapse",
                                function () {
                                    l.remove(),
                                            f.renderProviderPlans(D, n, C, e)
                                }), l.collapse("hide")) : f.renderProviderPlans(D, n, C, e), t(".addons-list .addon.active").removeClass("active"), e.addClass("active"))
                    },
                    B.prototype.renderProviderPlans = function (e, f, i, j) {
                        var k = t(x()),
                                l = s.first(i);
                        k.append(t(y(e))).find(".plans li.plan:first").addClass("active"),
                                k.append(t(z(s.extend({},
                                        l, {
                                            providerId: f.id
                                        })))),
                                j.parents(".addon-group").after(k),
                                k.collapse({
                                    toggle: !1
                                }),
                                k.collapse("show"),
                                this.changePlan(k, f),
                                this.orderPlan(k, f)
                    },
                    B.prototype.changePlan = function (c, d) {
                        c.find("li.plan").asEventStream("click").doAction(".preventDefault").map(function (b) {
                            var e = b.currentTarget,
                                    g = e.getAttribute("data-plan-id").trim(),
                                    h = s.find(d.plans,
                                            function (f) {
                                                return f.id === g
                                            });
                            return {
                                plan: h,
                                element: e
                            }
                        }).onValue(function (b) {
                            c.find(".plan-features").remove(),
                                    c.append(t(z(s.extend({},
                                            b.plan, {
                                                providerId: d.id
                                            })))),
                                    c.find(".plans li.plan.active").removeClass("active"),
                                    t(b.element).addClass("active")
                        })
                    },
                    B.prototype.orderPlan = function (e, f) {
                        var g = this,
                                h = e.asEventStream("click", ".plan-add").doAction(".preventDefault").map(function (b) {
                            var i = b.currentTarget.getAttribute("data-plan-id").trim(),
                                    j = s.find(f.plans,
                                            function (c) {
                                                return c.id === i
                                            });
                            return s.extend({},
                                    j, {
                                        provider: f
                                    })
                        }).flatMapLatest(function (b) {
                            return g.s_order.first().map(function (c) {
                                return c.addons[b.id] ? ++c.addons[b.id].items : c.addons[b.id] = {
                                    items: 1,
                                    plan: b
                                },
                                        c
                            })
                        });
                        this.b_order.plug(h)
                    },
                    B.prototype.displaySummaryOrders = function (e) {
                        var f = this,
                                h = t(".order-summary ul.order-items").empty(),
                                j = t(".order-summary .no-order-items"),
                                k = this.currentRate.val / this.rates.EUR.val;
                        if (0 === s.size(e.flavors) && 0 === s.size(e.addons)) {
                            j.removeClass("hidden"),
                                    h.addClass("hidden")
                        } else {
                            s.each(e.flavors,
                                    function (b, c) {
                                        var g = "scaler" + (b.items > 1 ? "s" : "");
                                        h.append(A({
                                            type: "flavors",
                                            number: b.items,
                                            name: g + " " + b.flavor.name,
                                            price: v.format(b.flavor.monthlyPrice * b.items * k, 2).toString() + f.currentRate.symbol,
                                            id: c
                                        }))
                                    }),
                                    s.each(e.addons,
                                            function (b, c) {
                                                h.append(A({
                                                    type: "addons",
                                                    number: b.items,
                                                    name: b.plan.provider.name + " - " + b.plan.name,
                                                    price: v.format(b.plan.price * b.items * k, 2).toString() + f.currentRate.symbol,
                                                    id: c
                                                }))
                                            });
                            var l = h.find("li .remove-item").asEventStream("click").doAction(".preventDefault").map(".currentTarget").flatMapLatest(function (b) {
                                var g = b.getAttribute("data-item-type").trim(),
                                        i = b.getAttribute("data-item-id").trim();
                                return f.s_order.first().map(function (c) {
                                    return c[g] && c[g][i] ? c[g][i].items - 1 > 0 ? --c[g][i].items : c[g] = s.omit(c[g], i) : console.error("Something is wrong, I don't have", g, i, "in my records"),
                                            c
                                })
                            });
                            f.b_order.plug(l),
                                    j.addClass("hidden"),
                                    h.removeClass("hidden")
                        }
                    },
                    B.prototype.openAddonAnchor = function () {
                        var c = window.location.hash;
                        if (c) {
                            var d = t(c);
                            d.length && d.click()
                        }
                    },
                    window.Pricer = B
        },
        {
            "../../../../NumberFormat.js": 7,
            "../../../../configuration.js": 8,
            baconjs: 1,
            jquery: 5,
            lodash: 6,
            querystring: 4
        }],
    13: [function (d, e, f) {
            !
                    function (b) {
                        "function" == typeof define && define.amd ? define(["jquery"], b) : "undefined" != typeof f ? e.exports = b(d("jquery")) : b(jQuery)
                    }(function (c) {
                var g = window.Slick || {};
                g = function () {
                    function h(j, k) {
                        var l, m, n, o = this;
                        if (o.defaults = {
                            accessibility: !0,
                            adaptiveHeight: !1,
                            appendArrows: c(j),
                            appendDots: c(j),
                            arrows: !0,
                            asNavFor: null,
                            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',
                            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',
                            autoplay: !1,
                            autoplaySpeed: 3000,
                            centerMode: !1,
                            centerPadding: "50px",
                            cssEase: "ease",
                            customPaging: function (p, q) {
                                return '<button type="button" data-role="none">' + (q + 1) + "</button>"
                            },
                            dots: !1,
                            dotsClass: "slick-dots",
                            draggable: !0,
                            easing: "linear",
                            edgeFriction: 0.35,
                            fade: !1,
                            focusOnSelect: !1,
                            infinite: !0,
                            initialSlide: 0,
                            lazyLoad: "ondemand",
                            mobileFirst: !1,
                            pauseOnHover: !0,
                            pauseOnDotsHover: !1,
                            respondTo: "window",
                            responsive: null,
                            rows: 1,
                            rtl: !1,
                            slide: "",
                            slidesPerRow: 1,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            speed: 500,
                            swipe: !0,
                            swipeToSlide: !1,
                            touchMove: !0,
                            touchThreshold: 5,
                            useCSS: !0,
                            variableWidth: !1,
                            vertical: !1,
                            verticalSwiping: !1,
                            waitForAnimate: !0
                        },
                                o.initials = {
                                    animating: !1,
                                    dragging: !1,
                                    autoPlayTimer: null,
                                    currentDirection: 0,
                                    currentLeft: null,
                                    currentSlide: 0,
                                    direction: 1,
                                    $dots: null,
                                    listWidth: null,
                                    listHeight: null,
                                    loadIndex: 0,
                                    $nextArrow: null,
                                    $prevArrow: null,
                                    slideCount: null,
                                    slideWidth: null,
                                    $slideTrack: null,
                                    $slides: null,
                                    sliding: !1,
                                    slideOffset: 0,
                                    swipeLeft: null,
                                    $list: null,
                                    touchObject: {},
                                    transformsEnabled: !1
                                },
                                c.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.hidden = "hidden", o.paused = !1, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = c(j), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, l = c(j).data("slick") || {},
                                o.options = c.extend({},
                                        o.defaults, l, k), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, m = o.options.responsive || null, m && m.length > -1) {
                            o.respondTo = o.options.respondTo || "window";
                            for (n in m) {
                                m.hasOwnProperty(n) && (o.breakpoints.push(m[n].breakpoint), o.breakpointSettings[m[n].breakpoint] = m[n].settings)
                            }
                            o.breakpoints.sort(function (p, q) {
                                return o.options.mobileFirst === !0 ? p - q : q - p
                            })
                        }
                        "undefined" != typeof document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (o.hidden = "msHidden", o.visibilityChange = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"),
                                o.autoPlay = c.proxy(o.autoPlay, o),
                                o.autoPlayClear = c.proxy(o.autoPlayClear, o),
                                o.changeSlide = c.proxy(o.changeSlide, o),
                                o.clickHandler = c.proxy(o.clickHandler, o),
                                o.selectHandler = c.proxy(o.selectHandler, o),
                                o.setPosition = c.proxy(o.setPosition, o),
                                o.swipeHandler = c.proxy(o.swipeHandler, o),
                                o.dragHandler = c.proxy(o.dragHandler, o),
                                o.keyHandler = c.proxy(o.keyHandler, o),
                                o.autoPlayIterator = c.proxy(o.autoPlayIterator, o),
                                o.instanceUid = i++,
                                o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
                                o.init(),
                                o.checkResponsive(!0)
                    }
                    var i = 0;
                    return h
                }(),
                        g.prototype.addSlide = g.prototype.slickAdd = function (h, i, j) {
                            var k = this;
                            if ("boolean" == typeof i) {
                                j = i,
                                        i = null
                            } else {
                                if (0 > i || i >= k.slideCount) {
                                    return !1
                                }
                            }
                            k.unload(),
                                    "number" == typeof i ? 0 === i && 0 === k.$slides.length ? c(h).appendTo(k.$slideTrack) : j ? c(h).insertBefore(k.$slides.eq(i)) : c(h).insertAfter(k.$slides.eq(i)) : j === !0 ? c(h).prependTo(k.$slideTrack) : c(h).appendTo(k.$slideTrack),
                                    k.$slides = k.$slideTrack.children(this.options.slide),
                                    k.$slideTrack.children(this.options.slide).detach(),
                                    k.$slideTrack.append(k.$slides),
                                    k.$slides.each(function (l, m) {
                                        c(m).attr("data-slick-index", l)
                                    }),
                                    k.$slidesCache = k.$slides,
                                    k.reinit()
                        },
                        g.prototype.animateHeight = function () {
                            var h = this;
                            if (1 === h.options.slidesToShow && h.options.adaptiveHeight === !0 && h.options.vertical === !1) {
                                var i = h.$slides.eq(h.currentSlide).outerHeight(!0);
                                h.$list.animate({
                                    height: i
                                },
                                        h.options.speed)
                            }
                        },
                        g.prototype.animateSlide = function (h, i) {
                            var j = {},
                                    k = this;
                            k.animateHeight(),
                                    k.options.rtl === !0 && k.options.vertical === !1 && (h = -h),
                                    k.transformsEnabled === !1 ? k.options.vertical === !1 ? k.$slideTrack.animate({
                                        left: h
                                    },
                                            k.options.speed, k.options.easing, i) : k.$slideTrack.animate({
                                top: h
                            },
                                    k.options.speed, k.options.easing, i) : k.cssTransitions === !1 ? (k.options.rtl === !0 && (k.currentLeft = -k.currentLeft), c({
                                animStart: k.currentLeft
                            }).animate({
                                animStart: h
                            },
                                    {
                                        duration: k.options.speed,
                                        easing: k.options.easing,
                                        step: function (b) {
                                            b = Math.ceil(b),
                                                    k.options.vertical === !1 ? (j[k.animType] = "translate(" + b + "px, 0px)", k.$slideTrack.css(j)) : (j[k.animType] = "translate(0px," + b + "px)", k.$slideTrack.css(j))
                                        },
                                        complete: function () {
                                            i && i.call()
                                        }
                                    })) : (k.applyTransition(), h = Math.ceil(h), j[k.animType] = k.options.vertical === !1 ? "translate3d(" + h + "px, 0px, 0px)" : "translate3d(0px," + h + "px, 0px)", k.$slideTrack.css(j), i && setTimeout(function () {
                                k.disableTransition(),
                                        i.call()
                            },
                                    k.options.speed))
                        },
                        g.prototype.asNavFor = function (h) {
                            var i = this,
                                    j = null !== i.options.asNavFor ? c(i.options.asNavFor).slick("getSlick") : null;
                            null !== j && j.slideHandler(h, !0)
                        },
                        g.prototype.applyTransition = function (h) {
                            var i = this,
                                    j = {};
                            j[i.transitionType] = i.options.fade === !1 ? i.transformType + " " + i.options.speed + "ms " + i.options.cssEase : "opacity " + i.options.speed + "ms " + i.options.cssEase,
                                    i.options.fade === !1 ? i.$slideTrack.css(j) : i.$slides.eq(h).css(j)
                        },
                        g.prototype.autoPlay = function () {
                            var b = this;
                            b.autoPlayTimer && clearInterval(b.autoPlayTimer),
                                    b.slideCount > b.options.slidesToShow && b.paused !== !0 && (b.autoPlayTimer = setInterval(b.autoPlayIterator, b.options.autoplaySpeed))
                        },
                        g.prototype.autoPlayClear = function () {
                            var b = this;
                            b.autoPlayTimer && clearInterval(b.autoPlayTimer)
                        },
                        g.prototype.autoPlayIterator = function () {
                            var b = this;
                            b.options.infinite === !1 ? 1 === b.direction ? (b.currentSlide + 1 === b.slideCount - 1 && (b.direction = 0), b.slideHandler(b.currentSlide + b.options.slidesToScroll)) : (0 === b.currentSlide - 1 && (b.direction = 1), b.slideHandler(b.currentSlide - b.options.slidesToScroll)) : b.slideHandler(b.currentSlide + b.options.slidesToScroll)
                        },
                        g.prototype.buildArrows = function () {
                            var h = this;
                            h.options.arrows === !0 && h.slideCount > h.options.slidesToShow && (h.$prevArrow = c(h.options.prevArrow), h.$nextArrow = c(h.options.nextArrow), h.htmlExpr.test(h.options.prevArrow) && h.$prevArrow.appendTo(h.options.appendArrows), h.htmlExpr.test(h.options.nextArrow) && h.$nextArrow.appendTo(h.options.appendArrows), h.options.infinite !== !0 && h.$prevArrow.addClass("slick-disabled"))
                        },
                        g.prototype.buildDots = function () {
                            var h, i, j = this;
                            if (j.options.dots === !0 && j.slideCount > j.options.slidesToShow) {
                                for (i = '<ul class="' + j.options.dotsClass + '">', h = 0; h <= j.getDotCount(); h += 1) {
                                    i += "<li>" + j.options.customPaging.call(this, j, h) + "</li>"
                                }
                                i += "</ul>",
                                        j.$dots = c(i).appendTo(j.options.appendDots),
                                        j.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
                            }
                        },
                        g.prototype.buildOut = function () {
                            var h = this;
                            h.$slides = h.$slider.children(":not(.slick-cloned)").addClass("slick-slide"),
                                    h.slideCount = h.$slides.length,
                                    h.$slides.each(function (i, j) {
                                        c(j).attr("data-slick-index", i)
                                    }),
                                    h.$slidesCache = h.$slides,
                                    h.$slider.addClass("slick-slider"),
                                    h.$slideTrack = 0 === h.slideCount ? c('<div class="slick-track"/>').appendTo(h.$slider) : h.$slides.wrapAll('<div class="slick-track"/>').parent(),
                                    h.$list = h.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),
                                    h.$slideTrack.css("opacity", 0),
                                    (h.options.centerMode === !0 || h.options.swipeToSlide === !0) && (h.options.slidesToScroll = 1),
                                    c("img[data-lazy]", h.$slider).not("[src]").addClass("slick-loading"),
                                    h.setupInfinite(),
                                    h.buildArrows(),
                                    h.buildDots(),
                                    h.updateDots(),
                                    h.options.accessibility === !0 && h.$list.prop("tabIndex", 0),
                                    h.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0),
                                    h.options.draggable === !0 && h.$list.addClass("draggable")
                        },
                        g.prototype.buildRows = function () {
                            var l, m, n, o, p, q, r, s = this;
                            if (o = document.createDocumentFragment(), q = s.$slider.children(), s.options.rows > 1) {
                                for (r = s.options.slidesPerRow * s.options.rows, p = Math.ceil(q.length / r), l = 0; p > l; l++) {
                                    var t = document.createElement("div");
                                    for (m = 0; m < s.options.rows; m++) {
                                        var u = document.createElement("div");
                                        for (n = 0; n < s.options.slidesPerRow; n++) {
                                            var v = l * r + (m * s.options.slidesPerRow + n);
                                            q.get(v) && u.appendChild(q.get(v))
                                        }
                                        t.appendChild(u)
                                    }
                                    o.appendChild(t)
                                }
                                s.$slider.html(o),
                                        s.$slider.children().children().children().width(100 / s.options.slidesPerRow + "%").css({
                                    display: "inline-block"
                                })
                            }
                        },
                        g.prototype.checkResponsive = function (i) {
                            var j, k, l, m = this,
                                    n = m.$slider.width(),
                                    o = window.innerWidth || c(window).width();
                            if ("window" === m.respondTo ? l = o : "slider" === m.respondTo ? l = n : "min" === m.respondTo && (l = Math.min(o, n)), m.originalSettings.responsive && m.originalSettings.responsive.length > -1 && null !== m.originalSettings.responsive) {
                                k = null;
                                for (j in m.breakpoints) {
                                    m.breakpoints.hasOwnProperty(j) && (m.originalSettings.mobileFirst === !1 ? l < m.breakpoints[j] && (k = m.breakpoints[j]) : l > m.breakpoints[j] && (k = m.breakpoints[j]))
                                }
                                null !== k ? null !== m.activeBreakpoint ? k !== m.activeBreakpoint && (m.activeBreakpoint = k, "unslick" === m.breakpointSettings[k] ? m.unslick() : (m.options = c.extend({},
                                        m.originalSettings, m.breakpointSettings[k]), i === !0 && (m.currentSlide = m.options.initialSlide), m.refresh())) : (m.activeBreakpoint = k, "unslick" === m.breakpointSettings[k] ? m.unslick() : (m.options = c.extend({},
                                        m.originalSettings, m.breakpointSettings[k]), i === !0 && (m.currentSlide = m.options.initialSlide), m.refresh())) : null !== m.activeBreakpoint && (m.activeBreakpoint = null, m.options = m.originalSettings, i === !0 && (m.currentSlide = m.options.initialSlide), m.refresh())
                            }
                        },
                        g.prototype.changeSlide = function (j, k) {
                            var l, m, n, o = this,
                                    p = c(j.target);
                            switch (p.is("a") && j.preventDefault(), n = 0 !== o.slideCount % o.options.slidesToScroll, l = n ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, j.data.message) {
                                case "previous":
                                    m = 0 === l ? o.options.slidesToScroll : o.options.slidesToShow - l,
                                            o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - m, !1, k);
                                    break;
                                case "next":
                                    m = 0 === l ? o.options.slidesToScroll : l,
                                            o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + m, !1, k);
                                    break;
                                case "index":
                                    var q = 0 === j.data.index ? 0 : j.data.index || c(j.target).parent().index() * o.options.slidesToScroll;
                                    o.slideHandler(o.checkNavigable(q), !1, k);
                                    break;
                                default:
                                    return
                            }
                        },
                        g.prototype.checkNavigable = function (h) {
                            var i, j, k = this;
                            if (i = k.getNavigableIndexes(), j = 0, h > i[i.length - 1]) {
                                h = i[i.length - 1]
                            } else {
                                for (var l in i) {
                                    if (h < i[l]) {
                                        h = j;
                                        break
                                    }
                                    j = i[l]
                                }
                            }
                            return h
                        },
                        g.prototype.cleanUpEvents = function () {
                            var h = this;
                            h.options.dots === !0 && h.slideCount > h.options.slidesToShow && c("li", h.$dots).off("click.slick", h.changeSlide),
                                    h.options.dots === !0 && h.options.pauseOnDotsHover === !0 && h.options.autoplay === !0 && c("li", h.$dots).off("mouseenter.slick", h.setPaused.bind(h, !0)).off("mouseleave.slick", h.setPaused.bind(h, !1)),
                                    h.options.arrows === !0 && h.slideCount > h.options.slidesToShow && (h.$prevArrow && h.$prevArrow.off("click.slick", h.changeSlide), h.$nextArrow && h.$nextArrow.off("click.slick", h.changeSlide)),
                                    h.$list.off("touchstart.slick mousedown.slick", h.swipeHandler),
                                    h.$list.off("touchmove.slick mousemove.slick", h.swipeHandler),
                                    h.$list.off("touchend.slick mouseup.slick", h.swipeHandler),
                                    h.$list.off("touchcancel.slick mouseleave.slick", h.swipeHandler),
                                    h.$list.off("click.slick", h.clickHandler),
                                    h.options.autoplay === !0 && c(document).off(h.visibilityChange, h.visibility),
                                    h.$list.off("mouseenter.slick", h.setPaused.bind(h, !0)),
                                    h.$list.off("mouseleave.slick", h.setPaused.bind(h, !1)),
                                    h.options.accessibility === !0 && h.$list.off("keydown.slick", h.keyHandler),
                                    h.options.focusOnSelect === !0 && c(h.$slideTrack).children().off("click.slick", h.selectHandler),
                                    c(window).off("orientationchange.slick.slick-" + h.instanceUid, h.orientationChange),
                                    c(window).off("resize.slick.slick-" + h.instanceUid, h.resize),
                                    c("[draggable!=true]", h.$slideTrack).off("dragstart", h.preventDefault),
                                    c(window).off("load.slick.slick-" + h.instanceUid, h.setPosition),
                                    c(document).off("ready.slick.slick-" + h.instanceUid, h.setPosition)
                        },
                        g.prototype.cleanUpRows = function () {
                            var h, i = this;
                            i.options.rows > 1 && (h = i.$slides.children().children(), h.removeAttr("style"), i.$slider.html(h))
                        },
                        g.prototype.clickHandler = function (h) {
                            var i = this;
                            i.shouldClick === !1 && (h.stopImmediatePropagation(), h.stopPropagation(), h.preventDefault())
                        },
                        g.prototype.destroy = function () {
                            var h = this;
                            h.autoPlayClear(),
                                    h.touchObject = {},
                                    h.cleanUpEvents(),
                                    c(".slick-cloned", h.$slider).remove(),
                                    h.$dots && h.$dots.remove(),
                                    h.$prevArrow && "object" != typeof h.options.prevArrow && h.$prevArrow.remove(),
                                    h.$nextArrow && "object" != typeof h.options.nextArrow && h.$nextArrow.remove(),
                                    h.$slides && (h.$slides.removeClass("slick-slide slick-active slick-center slick-visible").attr("aria-hidden", "true").removeAttr("data-slick-index").css({
                                        position: "",
                                        left: "",
                                        top: "",
                                        zIndex: "",
                                        opacity: "",
                                        width: ""
                                    }), h.$slider.html(h.$slides)),
                                    h.cleanUpRows(),
                                    h.$slider.removeClass("slick-slider"),
                                    h.$slider.removeClass("slick-initialized")
                        },
                        g.prototype.disableTransition = function (h) {
                            var i = this,
                                    j = {};
                            j[i.transitionType] = "",
                                    i.options.fade === !1 ? i.$slideTrack.css(j) : i.$slides.eq(h).css(j)
                        },
                        g.prototype.fadeSlide = function (h, i) {
                            var j = this;
                            j.cssTransitions === !1 ? (j.$slides.eq(h).css({
                                zIndex: 1000
                            }), j.$slides.eq(h).animate({
                                opacity: 1
                            },
                                    j.options.speed, j.options.easing, i)) : (j.applyTransition(h), j.$slides.eq(h).css({
                                opacity: 1,
                                zIndex: 1000
                            }), i && setTimeout(function () {
                                j.disableTransition(h),
                                        i.call()
                            },
                                    j.options.speed))
                        },
                        g.prototype.filterSlides = g.prototype.slickFilter = function (h) {
                            var i = this;
                            null !== h && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.filter(h).appendTo(i.$slideTrack), i.reinit())
                        },
                        g.prototype.getCurrent = g.prototype.slickCurrentSlide = function () {
                            var b = this;
                            return b.currentSlide
                        },
                        g.prototype.getDotCount = function () {
                            var h = this,
                                    i = 0,
                                    j = 0,
                                    k = 0;
                            if (h.options.infinite === !0) {
                                k = Math.ceil(h.slideCount / h.options.slidesToScroll)
                            } else {
                                if (h.options.centerMode === !0) {
                                    k = h.slideCount
                                } else {
                                    for (; i < h.slideCount; ) {
                                        ++k,
                                                i = j + h.options.slidesToShow,
                                                j += h.options.slidesToScroll <= h.options.slidesToShow ? h.options.slidesToScroll : h.options.slidesToShow
                                    }
                                }
                            }
                            return k - 1
                        },
                        g.prototype.getLeft = function (h) {
                            var i, j, k, l = this,
                                    m = 0;
                            return l.slideOffset = 0,
                                    j = l.$slides.first().outerHeight(),
                                    l.options.infinite === !0 ? (l.slideCount > l.options.slidesToShow && (l.slideOffset = -1 * l.slideWidth * l.options.slidesToShow, m = -1 * j * l.options.slidesToShow), 0 !== l.slideCount % l.options.slidesToScroll && h + l.options.slidesToScroll > l.slideCount && l.slideCount > l.options.slidesToShow && (h > l.slideCount ? (l.slideOffset = -1 * (l.options.slidesToShow - (h - l.slideCount)) * l.slideWidth, m = -1 * (l.options.slidesToShow - (h - l.slideCount)) * j) : (l.slideOffset = -1 * l.slideCount % l.options.slidesToScroll * l.slideWidth, m = -1 * l.slideCount % l.options.slidesToScroll * j))) : h + l.options.slidesToShow > l.slideCount && (l.slideOffset = (h + l.options.slidesToShow - l.slideCount) * l.slideWidth, m = (h + l.options.slidesToShow - l.slideCount) * j),
                                    l.slideCount <= l.options.slidesToShow && (l.slideOffset = 0, m = 0),
                                    l.options.centerMode === !0 && l.options.infinite === !0 ? l.slideOffset += l.slideWidth * Math.floor(l.options.slidesToShow / 2) - l.slideWidth : l.options.centerMode === !0 && (l.slideOffset = 0, l.slideOffset += l.slideWidth * Math.floor(l.options.slidesToShow / 2)),
                                    i = l.options.vertical === !1 ? -1 * h * l.slideWidth + l.slideOffset : -1 * h * j + m,
                                    l.options.variableWidth === !0 && (k = l.slideCount <= l.options.slidesToShow || l.options.infinite === !1 ? l.$slideTrack.children(".slick-slide").eq(h) : l.$slideTrack.children(".slick-slide").eq(h + l.options.slidesToShow), i = k[0] ? -1 * k[0].offsetLeft : 0, l.options.centerMode === !0 && (k = l.options.infinite === !1 ? l.$slideTrack.children(".slick-slide").eq(h) : l.$slideTrack.children(".slick-slide").eq(h + l.options.slidesToShow + 1), i = k[0] ? -1 * k[0].offsetLeft : 0, i += (l.$list.width() - k.outerWidth()) / 2)),
                                    i
                        },
                        g.prototype.getOption = g.prototype.slickGetOption = function (h) {
                            var i = this;
                            return i.options[h]
                        },
                        g.prototype.getNavigableIndexes = function () {
                            var h, i = this,
                                    j = 0,
                                    k = 0,
                                    l = [];
                            for (i.options.infinite === !1 ? (h = i.slideCount - i.options.slidesToShow + 1, i.options.centerMode === !0 && (h = i.slideCount)) : (j = -1 * i.options.slidesToScroll, k = -1 * i.options.slidesToScroll, h = 2 * i.slideCount); h > j; ) {
                                l.push(j),
                                        j = k + i.options.slidesToScroll,
                                        k += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow
                            }
                            return l
                        },
                        g.prototype.getSlick = function () {
                            return this
                        },
                        g.prototype.getSlideCount = function () {
                            var h, i, j, k = this;
                            return j = k.options.centerMode === !0 ? k.slideWidth * Math.floor(k.options.slidesToShow / 2) : 0,
                                    k.options.swipeToSlide === !0 ? (k.$slideTrack.find(".slick-slide").each(function (l, m) {
                                        return m.offsetLeft - j + c(m).outerWidth() / 2 > -1 * k.swipeLeft ? (i = m, !1) : void 0
                                    }), h = Math.abs(c(i).attr("data-slick-index") - k.currentSlide) || 1) : k.options.slidesToScroll
                        },
                        g.prototype.goTo = g.prototype.slickGoTo = function (h, i) {
                            var j = this;
                            j.changeSlide({
                                data: {
                                    message: "index",
                                    index: parseInt(h)
                                }
                            },
                                    i)
                        },
                        g.prototype.init = function () {
                            var h = this;
                            c(h.$slider).hasClass("slick-initialized") || (c(h.$slider).addClass("slick-initialized"), h.buildRows(), h.buildOut(), h.setProps(), h.startLoad(), h.loadSlider(), h.initializeEvents(), h.updateArrows(), h.updateDots()),
                                    h.$slider.trigger("init", [h])
                        },
                        g.prototype.initArrowEvents = function () {
                            var b = this;
                            b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow.on("click.slick", {
                                message: "previous"
                            },
                                    b.changeSlide), b.$nextArrow.on("click.slick", {
                                message: "next"
                            },
                                    b.changeSlide))
                        },
                        g.prototype.initDotEvents = function () {
                            var h = this;
                            h.options.dots === !0 && h.slideCount > h.options.slidesToShow && c("li", h.$dots).on("click.slick", {
                                message: "index"
                            },
                                    h.changeSlide),
                                    h.options.dots === !0 && h.options.pauseOnDotsHover === !0 && h.options.autoplay === !0 && c("li", h.$dots).on("mouseenter.slick", h.setPaused.bind(h, !0)).on("mouseleave.slick", h.setPaused.bind(h, !1))
                        },
                        g.prototype.initializeEvents = function () {
                            var h = this;
                            h.initArrowEvents(),
                                    h.initDotEvents(),
                                    h.$list.on("touchstart.slick mousedown.slick", {
                                        action: "start"
                                    },
                                            h.swipeHandler),
                                    h.$list.on("touchmove.slick mousemove.slick", {
                                        action: "move"
                                    },
                                            h.swipeHandler),
                                    h.$list.on("touchend.slick mouseup.slick", {
                                        action: "end"
                                    },
                                            h.swipeHandler),
                                    h.$list.on("touchcancel.slick mouseleave.slick", {
                                        action: "end"
                                    },
                                            h.swipeHandler),
                                    h.$list.on("click.slick", h.clickHandler),
                                    h.options.autoplay === !0 && c(document).on(h.visibilityChange, h.visibility.bind(h)),
                                    h.$list.on("mouseenter.slick", h.setPaused.bind(h, !0)),
                                    h.$list.on("mouseleave.slick", h.setPaused.bind(h, !1)),
                                    h.options.accessibility === !0 && h.$list.on("keydown.slick", h.keyHandler),
                                    h.options.focusOnSelect === !0 && c(h.$slideTrack).children().on("click.slick", h.selectHandler),
                                    c(window).on("orientationchange.slick.slick-" + h.instanceUid, h.orientationChange.bind(h)),
                                    c(window).on("resize.slick.slick-" + h.instanceUid, h.resize.bind(h)),
                                    c("[draggable!=true]", h.$slideTrack).on("dragstart", h.preventDefault),
                                    c(window).on("load.slick.slick-" + h.instanceUid, h.setPosition),
                                    c(document).on("ready.slick.slick-" + h.instanceUid, h.setPosition)
                        },
                        g.prototype.initUI = function () {
                            var b = this;
                            b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow.show(), b.$nextArrow.show()),
                                    b.options.dots === !0 && b.slideCount > b.options.slidesToShow && b.$dots.show(),
                                    b.options.autoplay === !0 && b.autoPlay()
                        },
                        g.prototype.keyHandler = function (h) {
                            var i = this;
                            37 === h.keyCode && i.options.accessibility === !0 ? i.changeSlide({
                                data: {
                                    message: "previous"
                                }
                            }) : 39 === h.keyCode && i.options.accessibility === !0 && i.changeSlide({
                                data: {
                                    message: "next"
                                }
                            })
                        },
                        g.prototype.lazyLoad = function () {
                            function h(n) {
                                c("img[data-lazy]", n).each(function () {
                                    var o = c(this),
                                            p = c(this).attr("data-lazy"),
                                            q = document.createElement("img");
                                    q.onload = function () {
                                        o.animate({
                                            opacity: 1
                                        },
                                                200)
                                    },
                                            q.src = p,
                                            o.css({
                                                opacity: 0
                                            }).attr("src", p).removeAttr("data-lazy").removeClass("slick-loading")
                                })
                            }
                            var i, j, k, l, m = this;
                            m.options.centerMode === !0 ? m.options.infinite === !0 ? (k = m.currentSlide + (m.options.slidesToShow / 2 + 1), l = k + m.options.slidesToShow + 2) : (k = Math.max(0, m.currentSlide - (m.options.slidesToShow / 2 + 1)), l = 2 + (m.options.slidesToShow / 2 + 1) + m.currentSlide) : (k = m.options.infinite ? m.options.slidesToShow + m.currentSlide : m.currentSlide, l = k + m.options.slidesToShow, m.options.fade === !0 && (k > 0 && k--, l <= m.slideCount && l++)),
                                    i = m.$slider.find(".slick-slide").slice(k, l),
                                    h(i),
                                    m.slideCount <= m.options.slidesToShow ? (j = m.$slider.find(".slick-slide"), h(j)) : m.currentSlide >= m.slideCount - m.options.slidesToShow ? (j = m.$slider.find(".slick-cloned").slice(0, m.options.slidesToShow), h(j)) : 0 === m.currentSlide && (j = m.$slider.find(".slick-cloned").slice(-1 * m.options.slidesToShow), h(j))
                        },
                        g.prototype.loadSlider = function () {
                            var b = this;
                            b.setPosition(),
                                    b.$slideTrack.css({
                                        opacity: 1
                                    }),
                                    b.$slider.removeClass("slick-loading"),
                                    b.initUI(),
                                    "progressive" === b.options.lazyLoad && b.progressiveLazyLoad()
                        },
                        g.prototype.next = g.prototype.slickNext = function () {
                            var b = this;
                            b.changeSlide({
                                data: {
                                    message: "next"
                                }
                            })
                        },
                        g.prototype.orientationChange = function () {
                            var b = this;
                            b.checkResponsive(),
                                    b.setPosition()
                        },
                        g.prototype.pause = g.prototype.slickPause = function () {
                            var b = this;
                            b.autoPlayClear(),
                                    b.paused = !0
                        },
                        g.prototype.play = g.prototype.slickPlay = function () {
                            var b = this;
                            b.paused = !1,
                                    b.autoPlay()
                        },
                        g.prototype.postSlide = function (h) {
                            var i = this;
                            i.$slider.trigger("afterChange", [i, h]),
                                    i.animating = !1,
                                    i.setPosition(),
                                    i.swipeLeft = null,
                                    i.options.autoplay === !0 && i.paused === !1 && i.autoPlay()
                        },
                        g.prototype.prev = g.prototype.slickPrev = function () {
                            var b = this;
                            b.changeSlide({
                                data: {
                                    message: "previous"
                                }
                            })
                        },
                        g.prototype.preventDefault = function (b) {
                            b.preventDefault()
                        },
                        g.prototype.progressiveLazyLoad = function () {
                            var h, i, j = this;
                            h = c("img[data-lazy]", j.$slider).length,
                                    h > 0 && (i = c("img[data-lazy]", j.$slider).first(), i.attr("src", i.attr("data-lazy")).removeClass("slick-loading").load(function () {
                                        i.removeAttr("data-lazy"),
                                                j.progressiveLazyLoad(),
                                                j.options.adaptiveHeight === !0 && j.setPosition()
                                    }).error(function () {
                                        i.removeAttr("data-lazy"),
                                                j.progressiveLazyLoad()
                                    }))
                        },
                        g.prototype.refresh = function () {
                            var h = this,
                                    i = h.currentSlide;
                            h.destroy(),
                                    c.extend(h, h.initials),
                                    h.init(),
                                    h.changeSlide({
                                        data: {
                                            message: "index",
                                            index: i
                                        }
                                    },
                                            !1)
                        },
                        g.prototype.reinit = function () {
                            var h = this;
                            h.$slides = h.$slideTrack.children(h.options.slide).addClass("slick-slide"),
                                    h.slideCount = h.$slides.length,
                                    h.currentSlide >= h.slideCount && 0 !== h.currentSlide && (h.currentSlide = h.currentSlide - h.options.slidesToScroll),
                                    h.slideCount <= h.options.slidesToShow && (h.currentSlide = 0),
                                    h.setProps(),
                                    h.setupInfinite(),
                                    h.buildArrows(),
                                    h.updateArrows(),
                                    h.initArrowEvents(),
                                    h.buildDots(),
                                    h.updateDots(),
                                    h.initDotEvents(),
                                    h.options.focusOnSelect === !0 && c(h.$slideTrack).children().on("click.slick", h.selectHandler),
                                    h.setSlideClasses(0),
                                    h.setPosition(),
                                    h.$slider.trigger("reInit", [h])
                        },
                        g.prototype.resize = function () {
                            var h = this;
                            c(window).width() !== h.windowWidth && (clearTimeout(h.windowDelay), h.windowDelay = window.setTimeout(function () {
                                h.windowWidth = c(window).width(),
                                        h.checkResponsive(),
                                        h.setPosition()
                            },
                                    50))
                        },
                        g.prototype.removeSlide = g.prototype.slickRemove = function (h, i, j) {
                            var k = this;
                            return "boolean" == typeof h ? (i = h, h = i === !0 ? 0 : k.slideCount - 1) : h = i === !0 ? --h : h,
                                    k.slideCount < 1 || 0 > h || h > k.slideCount - 1 ? !1 : (k.unload(), j === !0 ? k.$slideTrack.children().remove() : k.$slideTrack.children(this.options.slide).eq(h).remove(), k.$slides = k.$slideTrack.children(this.options.slide), k.$slideTrack.children(this.options.slide).detach(), k.$slideTrack.append(k.$slides), k.$slidesCache = k.$slides, void k.reinit())
                        },
                        g.prototype.setCSS = function (h) {
                            var i, j, k = this,
                                    l = {};
                            k.options.rtl === !0 && (h = -h),
                                    i = "left" == k.positionProp ? Math.ceil(h) + "px" : "0px",
                                    j = "top" == k.positionProp ? Math.ceil(h) + "px" : "0px",
                                    l[k.positionProp] = h,
                                    k.transformsEnabled === !1 ? k.$slideTrack.css(l) : (l = {},
                                    k.cssTransitions === !1 ? (l[k.animType] = "translate(" + i + ", " + j + ")", k.$slideTrack.css(l)) : (l[k.animType] = "translate3d(" + i + ", " + j + ", 0px)", k.$slideTrack.css(l)))
                        },
                        g.prototype.setDimensions = function () {
                            var h = this;
                            h.options.vertical === !1 ? h.options.centerMode === !0 && h.$list.css({
                                padding: "0px " + h.options.centerPadding
                            }) : (h.$list.height(h.$slides.first().outerHeight(!0) * h.options.slidesToShow), h.options.centerMode === !0 && h.$list.css({
                                padding: h.options.centerPadding + " 0px"
                            })),
                                    h.listWidth = h.$list.width(),
                                    h.listHeight = h.$list.height(),
                                    h.options.vertical === !1 && h.options.variableWidth === !1 ? (h.slideWidth = Math.ceil(h.listWidth / h.options.slidesToShow), h.$slideTrack.width(Math.ceil(h.slideWidth * h.$slideTrack.children(".slick-slide").length))) : h.options.variableWidth === !0 ? h.$slideTrack.width(5000 * h.slideCount) : (h.slideWidth = Math.ceil(h.listWidth), h.$slideTrack.height(Math.ceil(h.$slides.first().outerHeight(!0) * h.$slideTrack.children(".slick-slide").length)));
                            var i = h.$slides.first().outerWidth(!0) - h.$slides.first().width();
                            h.options.variableWidth === !1 && h.$slideTrack.children(".slick-slide").width(h.slideWidth - i)
                        },
                        g.prototype.setFade = function () {
                            var h, i = this;
                            i.$slides.each(function (b, j) {
                                h = -1 * i.slideWidth * b,
                                        i.options.rtl === !0 ? c(j).css({
                                    position: "relative",
                                    right: h,
                                    top: 0,
                                    zIndex: 800,
                                    opacity: 0
                                }) : c(j).css({
                                    position: "relative",
                                    left: h,
                                    top: 0,
                                    zIndex: 800,
                                    opacity: 0
                                })
                            }),
                                    i.$slides.eq(i.currentSlide).css({
                                zIndex: 900,
                                opacity: 1
                            })
                        },
                        g.prototype.setHeight = function () {
                            var h = this;
                            if (1 === h.options.slidesToShow && h.options.adaptiveHeight === !0 && h.options.vertical === !1) {
                                var i = h.$slides.eq(h.currentSlide).outerHeight(!0);
                                h.$list.css("height", i)
                            }
                        },
                        g.prototype.setOption = g.prototype.slickSetOption = function (h, i, j) {
                            var k = this;
                            k.options[h] = i,
                                    j === !0 && (k.unload(), k.reinit())
                        },
                        g.prototype.setPosition = function () {
                            var b = this;
                            b.setDimensions(),
                                    b.setHeight(),
                                    b.options.fade === !1 ? b.setCSS(b.getLeft(b.currentSlide)) : b.setFade(),
                                    b.$slider.trigger("setPosition", [b])
                        },
                        g.prototype.setProps = function () {
                            var h = this,
                                    i = document.body.style;
                            h.positionProp = h.options.vertical === !0 ? "top" : "left",
                                    "top" === h.positionProp ? h.$slider.addClass("slick-vertical") : h.$slider.removeClass("slick-vertical"),
                                    (void 0 !== i.WebkitTransition || void 0 !== i.MozTransition || void 0 !== i.msTransition) && h.options.useCSS === !0 && (h.cssTransitions = !0),
                                    void 0 !== i.OTransform && (h.animType = "OTransform", h.transformType = "-o-transform", h.transitionType = "OTransition", void 0 === i.perspectiveProperty && void 0 === i.webkitPerspective && (h.animType = !1)),
                                    void 0 !== i.MozTransform && (h.animType = "MozTransform", h.transformType = "-moz-transform", h.transitionType = "MozTransition", void 0 === i.perspectiveProperty && void 0 === i.MozPerspective && (h.animType = !1)),
                                    void 0 !== i.webkitTransform && (h.animType = "webkitTransform", h.transformType = "-webkit-transform", h.transitionType = "webkitTransition", void 0 === i.perspectiveProperty && void 0 === i.webkitPerspective && (h.animType = !1)),
                                    void 0 !== i.msTransform && (h.animType = "msTransform", h.transformType = "-ms-transform", h.transitionType = "msTransition", void 0 === i.msTransform && (h.animType = !1)),
                                    void 0 !== i.transform && h.animType !== !1 && (h.animType = "transform", h.transformType = "transform", h.transitionType = "transition"),
                                    h.transformsEnabled = null !== h.animType && h.animType !== !1
                        },
                        g.prototype.setSlideClasses = function (h) {
                            var i, j, k, l, m = this;
                            m.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true").removeClass("slick-center"),
                                    j = m.$slider.find(".slick-slide"),
                                    m.options.centerMode === !0 ? (i = Math.floor(m.options.slidesToShow / 2), m.options.infinite === !0 && (h >= i && h <= m.slideCount - 1 - i ? m.$slides.slice(h - i, h + i + 1).addClass("slick-active").attr("aria-hidden", "false") : (k = m.options.slidesToShow + h, j.slice(k - i + 1, k + i + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === h ? j.eq(j.length - 1 - m.options.slidesToShow).addClass("slick-center") : h === m.slideCount - 1 && j.eq(m.options.slidesToShow).addClass("slick-center")), m.$slides.eq(h).addClass("slick-center")) : h >= 0 && h <= m.slideCount - m.options.slidesToShow ? m.$slides.slice(h, h + m.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : j.length <= m.options.slidesToShow ? j.addClass("slick-active").attr("aria-hidden", "false") : (l = m.slideCount % m.options.slidesToShow, k = m.options.infinite === !0 ? m.options.slidesToShow + h : h, m.options.slidesToShow == m.options.slidesToScroll && m.slideCount - h < m.options.slidesToShow ? j.slice(k - (m.options.slidesToShow - l), k + l).addClass("slick-active").attr("aria-hidden", "false") : j.slice(k, k + m.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")),
                                    "ondemand" === m.options.lazyLoad && m.lazyLoad()
                        },
                        g.prototype.setupInfinite = function () {
                            var h, i, j, k = this;
                            if (k.options.fade === !0 && (k.options.centerMode = !1), k.options.infinite === !0 && k.options.fade === !1 && (i = null, k.slideCount > k.options.slidesToShow)) {
                                for (j = k.options.centerMode === !0 ? k.options.slidesToShow + 1 : k.options.slidesToShow, h = k.slideCount; h > k.slideCount - j; h -= 1) {
                                    i = h - 1,
                                            c(k.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - k.slideCount).prependTo(k.$slideTrack).addClass("slick-cloned")
                                }
                                for (h = 0; j > h; h += 1) {
                                    i = h,
                                            c(k.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + k.slideCount).appendTo(k.$slideTrack).addClass("slick-cloned")
                                }
                                k.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                                    c(this).attr("id", "")
                                })
                            }
                        },
                        g.prototype.setPaused = function (h) {
                            var i = this;
                            i.options.autoplay === !0 && i.options.pauseOnHover === !0 && (i.paused = h, i.autoPlayClear())
                        },
                        g.prototype.selectHandler = function (h) {
                            var i = this,
                                    j = c(h.target).is(".slick-slide") ? c(h.target) : c(h.target).parents(".slick-slide"),
                                    k = parseInt(j.attr("data-slick-index"));
                            return k || (k = 0),
                                    i.slideCount <= i.options.slidesToShow ? (i.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true"), i.$slides.eq(k).addClass("slick-active").attr("aria-hidden", "false"), i.options.centerMode === !0 && (i.$slider.find(".slick-slide").removeClass("slick-center"), i.$slides.eq(k).addClass("slick-center")), void i.asNavFor(k)) : void i.slideHandler(k)
                        },
                        g.prototype.slideHandler = function (j, k, l) {
                            var m, n, o, p, q = null,
                                    r = this;
                            return k = k || !1,
                                    r.animating === !0 && r.options.waitForAnimate === !0 || r.options.fade === !0 && r.currentSlide === j || r.slideCount <= r.options.slidesToShow ? void 0 : (k === !1 && r.asNavFor(j), m = j, q = r.getLeft(m), p = r.getLeft(r.currentSlide), r.currentLeft = null === r.swipeLeft ? p : r.swipeLeft, r.options.infinite === !1 && r.options.centerMode === !1 && (0 > j || j > r.getDotCount() * r.options.slidesToScroll) ? void(r.options.fade === !1 && (m = r.currentSlide, l !== !0 ? r.animateSlide(p,
                                            function () {
                                                r.postSlide(m)
                                            }) : r.postSlide(m))) : r.options.infinite === !1 && r.options.centerMode === !0 && (0 > j || j > r.slideCount - r.options.slidesToScroll) ? void(r.options.fade === !1 && (m = r.currentSlide, l !== !0 ? r.animateSlide(p,
                                            function () {
                                                r.postSlide(m)
                                            }) : r.postSlide(m))) : (r.options.autoplay === !0 && clearInterval(r.autoPlayTimer), n = 0 > m ? 0 !== r.slideCount % r.options.slidesToScroll ? r.slideCount - r.slideCount % r.options.slidesToScroll : r.slideCount + m : m >= r.slideCount ? 0 !== r.slideCount % r.options.slidesToScroll ? 0 : m - r.slideCount : m, r.animating = !0, r.$slider.trigger("beforeChange", [r, r.currentSlide, n]), o = r.currentSlide, r.currentSlide = n, r.setSlideClasses(r.currentSlide), r.updateDots(), r.updateArrows(), r.options.fade === !0 ? (l !== !0 ? r.fadeSlide(n,
                                            function () {
                                                r.postSlide(n)
                                            }) : r.postSlide(n), void r.animateHeight()) : void(l !== !0 ? r.animateSlide(q,
                                            function () {
                                                r.postSlide(n)
                                            }) : r.postSlide(n))))
                        },
                        g.prototype.startLoad = function () {
                            var b = this;
                            b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow.hide(), b.$nextArrow.hide()),
                                    b.options.dots === !0 && b.slideCount > b.options.slidesToShow && b.$dots.hide(),
                                    b.$slider.addClass("slick-loading")
                        },
                        g.prototype.swipeDirection = function () {
                            var h, i, j, k, l = this;
                            return h = l.touchObject.startX - l.touchObject.curX,
                                    i = l.touchObject.startY - l.touchObject.curY,
                                    j = Math.atan2(i, h),
                                    k = Math.round(180 * j / Math.PI),
                                    0 > k && (k = 360 - Math.abs(k)),
                                    45 >= k && k >= 0 ? l.options.rtl === !1 ? "left" : "right" : 360 >= k && k >= 315 ? l.options.rtl === !1 ? "left" : "right" : k >= 135 && 225 >= k ? l.options.rtl === !1 ? "right" : "left" : l.options.verticalSwiping === !0 ? k >= 35 && 135 >= k ? "left" : "right" : "vertical"
                        },
                        g.prototype.swipeEnd = function () {
                            var h, i = this;
                            if (i.dragging = !1, i.shouldClick = i.touchObject.swipeLength > 10 ? !1 : !0, void 0 === i.touchObject.curX) {
                                return !1
                            }
                            if (i.touchObject.edgeHit === !0 && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
                                switch (i.swipeDirection()) {
                                    case "left":
                                        h = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(),
                                                i.slideHandler(h),
                                                i.currentDirection = 0,
                                                i.touchObject = {},
                                                i.$slider.trigger("swipe", [i, "left"]);
                                        break;
                                    case "right":
                                        h = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(),
                                                i.slideHandler(h),
                                                i.currentDirection = 1,
                                                i.touchObject = {},
                                                i.$slider.trigger("swipe", [i, "right"])
                                }
                            } else {
                                i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
                            }
                        },
                        g.prototype.swipeHandler = function (h) {
                            var i = this;
                            if (!(i.options.swipe === !1 || "ontouchend" in document && i.options.swipe === !1 || i.options.draggable === !1 && -1 !== h.type.indexOf("mouse"))) {
                                switch (i.touchObject.fingerCount = h.originalEvent && void 0 !== h.originalEvent.touches ? h.originalEvent.touches.length : 1, i.touchObject.minSwipe = i.listWidth / i.options.touchThreshold, i.options.verticalSwiping === !0 && (i.touchObject.minSwipe = i.listHeight / i.options.touchThreshold), h.data.action) {
                                    case "start":
                                        i.swipeStart(h);
                                        break;
                                    case "move":
                                        i.swipeMove(h);
                                        break;
                                    case "end":
                                        i.swipeEnd(h)
                                }
                            }
                        },
                        g.prototype.swipeMove = function (h) {
                            var i, j, k, l, m, n = this;
                            return m = void 0 !== h.originalEvent ? h.originalEvent.touches : null,
                                    !n.dragging || m && 1 !== m.length ? !1 : (i = n.getLeft(n.currentSlide), n.touchObject.curX = void 0 !== m ? m[0].pageX : h.clientX, n.touchObject.curY = void 0 !== m ? m[0].pageY : h.clientY, n.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(n.touchObject.curX - n.touchObject.startX, 2))), n.options.verticalSwiping === !0 && (n.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(n.touchObject.curY - n.touchObject.startY, 2)))), j = n.swipeDirection(), "vertical" !== j ? (void 0 !== h.originalEvent && n.touchObject.swipeLength > 4 && h.preventDefault(), l = (n.options.rtl === !1 ? 1 : -1) * (n.touchObject.curX > n.touchObject.startX ? 1 : -1), n.options.verticalSwiping === !0 && (l = n.touchObject.curY > n.touchObject.startY ? 1 : -1), k = n.touchObject.swipeLength, n.touchObject.edgeHit = !1, n.options.infinite === !1 && (0 === n.currentSlide && "right" === j || n.currentSlide >= n.getDotCount() && "left" === j) && (k = n.touchObject.swipeLength * n.options.edgeFriction, n.touchObject.edgeHit = !0), n.swipeLeft = n.options.vertical === !1 ? i + k * l : i + k * (n.$list.height() / n.listWidth) * l, n.options.verticalSwiping === !0 && (n.swipeLeft = i + k * l), n.options.fade === !0 || n.options.touchMove === !1 ? !1 : n.animating === !0 ? (n.swipeLeft = null, !1) : void n.setCSS(n.swipeLeft)) : void 0)
                        },
                        g.prototype.swipeStart = function (h) {
                            var i, j = this;
                            return 1 !== j.touchObject.fingerCount || j.slideCount <= j.options.slidesToShow ? (j.touchObject = {},
                                    !1) : (void 0 !== h.originalEvent && void 0 !== h.originalEvent.touches && (i = h.originalEvent.touches[0]), j.touchObject.startX = j.touchObject.curX = void 0 !== i ? i.pageX : h.clientX, j.touchObject.startY = j.touchObject.curY = void 0 !== i ? i.pageY : h.clientY, void(j.dragging = !0))
                        },
                        g.prototype.unfilterSlides = g.prototype.slickUnfilter = function () {
                            var b = this;
                            null !== b.$slidesCache && (b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.appendTo(b.$slideTrack), b.reinit())
                        },
                        g.prototype.unload = function () {
                            var h = this;
                            c(".slick-cloned", h.$slider).remove(),
                                    h.$dots && h.$dots.remove(),
                                    h.$prevArrow && "object" != typeof h.options.prevArrow && h.$prevArrow.remove(),
                                    h.$nextArrow && "object" != typeof h.options.nextArrow && h.$nextArrow.remove(),
                                    h.$slides.removeClass("slick-slide slick-active slick-visible").attr("aria-hidden", "true").css("width", "")
                        },
                        g.prototype.unslick = function () {
                            var b = this;
                            b.destroy()
                        },
                        g.prototype.updateArrows = function () {
                            var h, i = this;
                            h = Math.floor(i.options.slidesToShow / 2),
                                    i.options.arrows === !0 && i.options.infinite !== !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.removeClass("slick-disabled"), i.$nextArrow.removeClass("slick-disabled"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled"), i.$nextArrow.removeClass("slick-disabled")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && i.options.centerMode === !1 ? (i.$nextArrow.addClass("slick-disabled"), i.$prevArrow.removeClass("slick-disabled")) : i.currentSlide >= i.slideCount - 1 && i.options.centerMode === !0 && (i.$nextArrow.addClass("slick-disabled"), i.$prevArrow.removeClass("slick-disabled")))
                        },
                        g.prototype.updateDots = function () {
                            var b = this;
                            null !== b.$dots && (b.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), b.$dots.find("li").eq(Math.floor(b.currentSlide / b.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
                        },
                        g.prototype.visibility = function () {
                            var b = this;
                            document[b.hidden] ? (b.paused = !0, b.autoPlayClear()) : (b.paused = !1, b.autoPlay())
                        },
                        c.fn.slick = function () {
                            var b, h = this,
                                    i = arguments[0],
                                    j = Array.prototype.slice.call(arguments, 1),
                                    k = h.length,
                                    l = 0;
                            for (l; k > l; l++) {
                                if ("object" == typeof i || "undefined" == typeof i ? h[l].slick = new g(h[l], i) : b = h[l].slick[i].apply(h[l].slick, j), "undefined" != typeof b) {
                                    return b
                                }
                            }
                            return h
                        }
            })
        },
        {
            jquery: 5
        }]
},
        {},
        [11]);