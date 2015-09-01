! function (e) {
    function t(t) {
        e.fn.cycle.debug && n(t)
    }
    function n() {
        window.console && console.log && console.log("[cycle] " + Array.prototype.join.call(arguments, " "))
    }
    function i(t, i, r) {
        function s(t, i, r) {
            if (!t && i === !0) {
                var c = e(r).data("cycle.opts");
                if (!c) return n("options not found, can not resume"), !1;
                r.cycleTimeout && (clearTimeout(r.cycleTimeout), r.cycleTimeout = 0), u(c.elements, c, 1, !c.backwards)
            }
        }
        if (void 0 == t.cycleStop && (t.cycleStop = 0), (void 0 === i || null === i) && (i = {}), i.constructor == String) {
            switch (i) {
                case "destroy":
                case "stop":
                    var o = e(t).data("cycle.opts");
                    return o ? (t.cycleStop++, t.cycleTimeout && clearTimeout(t.cycleTimeout), t.cycleTimeout = 0, e(t).removeData("cycle.opts"), "destroy" == i && c(o), !1) : !1;
                case "toggle":
                    return t.cyclePause = 1 === t.cyclePause ? 0 : 1, s(t.cyclePause, r, t), !1;
                case "pause":
                    return t.cyclePause = 1, !1;
                case "resume":
                    return t.cyclePause = 0, s(!1, r, t), !1;
                case "prev":
                case "next":
                    var o = e(t).data("cycle.opts");
                    return o ? (e.fn.cycle[i](o), !1) : (n('options not found, "prev/next" ignored'), !1);
                default:
                    i = {
                        fx: i
                    }
            }
            return i
        }
        if (i.constructor == Number) {
            var a = i;
            return (i = e(t).data("cycle.opts")) ? 0 > a || a >= i.elements.length ? (n("invalid slide index: " + a), !1) : (i.nextSlide = a, t.cycleTimeout && (clearTimeout(t.cycleTimeout), t.cycleTimeout = 0), "string" == typeof r && (i.oneTimeFx = r), u(i.elements, i, 1, a >= i.currSlide), !1) : (n("options not found, can not advance slide"), !1)
        }
        return i
    }
    function r(t, n) {
        if (!e.support.opacity && n.cleartype && t.style.filter) try {
            t.style.removeAttribute("filter")
        } catch (i) {}
    }
    function c(t) {
        t.next && e(t.next).unbind(t.prevNextEvent), t.prev && e(t.prev).unbind(t.prevNextEvent), (t.pager || t.pagerAnchorBuilder) && e.each(t.pagerAnchors || [], function () {
            this.unbind().remove()
        }), t.pagerAnchors = null, t.destroy && t.destroy(t)
    }
    function s(t, i, c, s, d) {
        var p = e.extend({}, e.fn.cycle.defaults, s || {}, e.metadata ? t.metadata() : e.meta ? t.data() : {});
        p.autostop && (p.countdown = p.autostopCount || c.length);
        var y = t[0];
        if (t.data("cycle.opts", p), p.$cont = t, p.stopCount = y.cycleStop, p.elements = c, p.before = p.before ? [p.before] : [], p.after = p.after ? [p.after] : [], !e.support.opacity && p.cleartype && p.after.push(function () {
            r(this, p)
        }), p.continuous && p.after.push(function () {
            u(c, p, 0, !p.backwards)
        }), o(p), e.support.opacity || !p.cleartype || p.cleartypeNoBg || g(i), "static" == t.css("position") && t.css("position", "relative"), p.width && t.width(p.width), p.height && "auto" != p.height && t.height(p.height), p.startingSlide ? p.startingSlide = parseInt(p.startingSlide) : p.backwards && (p.startingSlide = c.length - 1), p.random) {
            p.randomMap = [];
            for (var m = 0; m < c.length; m++) p.randomMap.push(m);
            p.randomMap.sort(function () {
                return Math.random() - .5
            }), p.randomIndex = 1, p.startingSlide = p.randomMap[1]
        } else p.startingSlide >= c.length && (p.startingSlide = 0);
        p.currSlide = p.startingSlide || 0;
        var x = p.startingSlide;
        i.css({
            position: "absolute",
            top: 0,
            left: 0
        }).hide().each(function (t) {
            var n;
            n = p.backwards ? x ? x >= t ? c.length + (t - x) : x - t : c.length - t : x ? t >= x ? c.length - (t - x) : x - t : c.length - t, e(this).css("z-index", n)
        }), e(c[x]).css("opacity", 1).show(), r(c[x], p), p.fit && p.width && i.width(p.width), p.fit && p.height && "auto" != p.height && i.height(p.height);
        var v = p.containerResize && !t.innerHeight();
        if (v) {
            for (var S = 0, b = 0, w = 0; w < c.length; w++) {
                var A = e(c[w]),
                    T = A[0],
                    I = A.outerWidth(),
                    P = A.outerHeight();
                I || (I = T.offsetWidth || T.width || A.attr("width")), P || (P = T.offsetHeight || T.height || A.attr("height")), S = I > S ? I : S, b = P > b ? P : b
            }
            S > 0 && b > 0 && t.css({
                width: S + "px",
                height: b + "px"
            })
        }
        if (p.pause && t.hover(function () {
            this.cyclePause++
        }, function () {
            this.cyclePause--
        }), a(p) === !1) return !1;
        var k = !1;
        if (s.requeueAttempts = s.requeueAttempts || 0, i.each(function () {
            var t = e(this);
            if (this.cycleH = p.fit && p.height ? p.height : t.height() || this.offsetHeight || this.height || t.attr("height") || 0, this.cycleW = p.fit && p.width ? p.width : t.width() || this.offsetWidth || this.width || t.attr("width") || 0, t.is("img")) {
                var i = e.browser.msie && 28 == this.cycleW && 30 == this.cycleH && !this.complete,
                    r = e.browser.mozilla && 34 == this.cycleW && 19 == this.cycleH && !this.complete,
                    c = e.browser.opera && (42 == this.cycleW && 19 == this.cycleH || 37 == this.cycleW && 17 == this.cycleH) && !this.complete,
                    o = 0 == this.cycleH && 0 == this.cycleW && !this.complete;
                if (i || r || c || o) {
                    if (d.s && p.requeueOnImageNotLoaded && ++s.requeueAttempts < 100) return n(s.requeueAttempts, " - img slide not loaded, requeuing slideshow: ", this.src, this.cycleW, this.cycleH), setTimeout(function () {
                        e(d.s, d.c).cycle(s)
                    }, p.requeueTimeout), k = !0, !1;
                    n("could not determine size of image: " + this.src, this.cycleW, this.cycleH)
                }
            }
            return !0
        }), k) return !1;
        if (p.cssBefore = p.cssBefore || {}, p.cssAfter = p.cssAfter || {}, p.cssFirst = p.cssFirst || {}, p.animIn = p.animIn || {}, p.animOut = p.animOut || {}, i.not(":eq(" + x + ")").css(p.cssBefore), e(i[x]).css(p.cssFirst), p.timeout) {
            p.timeout = parseInt(p.timeout), p.speed.constructor == String && (p.speed = e.fx.speeds[p.speed] || parseInt(p.speed)), p.sync || (p.speed = p.speed / 2);
            for (var F = "none" == p.fx ? 0 : "shuffle" == p.fx ? 500 : 250; p.timeout - p.speed < F;) p.timeout += p.speed
        }
        if (p.easing && (p.easeIn = p.easeOut = p.easing), p.speedIn || (p.speedIn = p.speed), p.speedOut || (p.speedOut = p.speed), p.slideCount = c.length, p.currSlide = p.lastSlide = x, p.random ? (++p.randomIndex == c.length && (p.randomIndex = 0), p.nextSlide = p.randomMap[p.randomIndex]) : p.nextSlide = p.backwards ? 0 == p.startingSlide ? c.length - 1 : p.startingSlide - 1 : p.startingSlide >= c.length - 1 ? 0 : p.startingSlide + 1, !p.multiFx) {
            var O = e.fn.cycle.transitions[p.fx];
            if (e.isFunction(O)) O(t, i, p);
            else if ("custom" != p.fx && !p.multiFx) return n("unknown transition: " + p.fx, "; slideshow terminating"), !1
        }
        var B = i[x];
        return p.before.length && p.before[0].apply(B, [B, B, p, !0]), p.after.length && p.after[0].apply(B, [B, B, p, !0]), p.next && e(p.next).bind(p.prevNextEvent, function () {
            return f(p, 1)
        }), p.prev && e(p.prev).bind(p.prevNextEvent, function () {
            return f(p, 0)
        }), (p.pager || p.pagerAnchorBuilder) && h(c, p), l(p, c), p
    }
    function o(t) {
        t.original = {
            before: [],
            after: []
        }, t.original.cssBefore = e.extend({}, t.cssBefore), t.original.cssAfter = e.extend({}, t.cssAfter), t.original.animIn = e.extend({}, t.animIn), t.original.animOut = e.extend({}, t.animOut), e.each(t.before, function () {
            t.original.before.push(this)
        }), e.each(t.after, function () {
            t.original.after.push(this)
        })
    }
    function a(i) {
        var r, c, s = e.fn.cycle.transitions;
        if (i.fx.indexOf(",") > 0) {
            for (i.multiFx = !0, i.fxs = i.fx.replace(/\s*/g, "").split(","), r = 0; r < i.fxs.length; r++) {
                var o = i.fxs[r];
                c = s[o], c && s.hasOwnProperty(o) && e.isFunction(c) || (n("discarding unknown transition: ", o), i.fxs.splice(r, 1), r--)
            }
            if (!i.fxs.length) return n("No valid transitions named; slideshow terminating."), !1
        } else if ("all" == i.fx) {
            i.multiFx = !0, i.fxs = [];
            for (p in s) c = s[p], s.hasOwnProperty(p) && e.isFunction(c) && i.fxs.push(p)
        }
        if (i.multiFx && i.randomizeEffects) {
            var a = Math.floor(20 * Math.random()) + 30;
            for (r = 0; a > r; r++) {
                var l = Math.floor(Math.random() * i.fxs.length);
                i.fxs.push(i.fxs.splice(l, 1)[0])
            }
            t("randomized fx sequence: ", i.fxs)
        }
        return !0
    }
    function l(t, n) {
        t.addSlide = function (i, r) {
            var c = e(i),
                s = c[0];
            t.autostopCount || t.countdown++, n[r ? "unshift" : "push"](s), t.els && t.els[r ? "unshift" : "push"](s), t.slideCount = n.length, c.css("position", "absolute"), c[r ? "prependTo" : "appendTo"](t.$cont), r && (t.currSlide++, t.nextSlide++), e.support.opacity || !t.cleartype || t.cleartypeNoBg || g(c), t.fit && t.width && c.width(t.width), t.fit && t.height && "auto" != t.height && c.height(t.height), s.cycleH = t.fit && t.height ? t.height : c.height(), s.cycleW = t.fit && t.width ? t.width : c.width(), c.css(t.cssBefore), (t.pager || t.pagerAnchorBuilder) && e.fn.cycle.createPagerAnchor(n.length - 1, s, e(t.pager), n, t), e.isFunction(t.onAddSlide) ? t.onAddSlide(c) : c.hide()
        }
    }
    function u(n, i, r, c) {
        if (r && i.busy && i.manualTrump && (t("manualTrump in go(), stopping active transition"), e(n).stop(!0, !0), i.busy = 0), i.busy) return void t("transition active, ignoring new tx request");
        var s = i.$cont[0],
            o = n[i.currSlide],
            a = n[i.nextSlide];
        if (s.cycleStop == i.stopCount && (0 !== s.cycleTimeout || r)) {
            if (!r && !s.cyclePause && !i.bounce && (i.autostop && --i.countdown <= 0 || i.nowrap && !i.random && i.nextSlide < i.currSlide)) return void(i.end && i.end(i));
            var l = !1;
            if ((r || !s.cyclePause) && i.nextSlide != i.currSlide) {
                l = !0;
                var f = i.fx;
                o.cycleH = o.cycleH || e(o).height(), o.cycleW = o.cycleW || e(o).width(), a.cycleH = a.cycleH || e(a).height(), a.cycleW = a.cycleW || e(a).width(), i.multiFx && ((void 0 == i.lastFx || ++i.lastFx >= i.fxs.length) && (i.lastFx = 0), f = i.fxs[i.lastFx], i.currFx = f), i.oneTimeFx && (f = i.oneTimeFx, i.oneTimeFx = null), e.fn.cycle.resetState(i, f), i.before.length && e.each(i.before, function (e, t) {
                    s.cycleStop == i.stopCount && t.apply(a, [o, a, i, c])
                });
                var h = function () {
                    i.busy = 0, e.each(i.after, function (e, t) {
                        s.cycleStop == i.stopCount && t.apply(a, [o, a, i, c])
                    })
                };
                t("tx firing(" + f + "); currSlide: " + i.currSlide + "; nextSlide: " + i.nextSlide), i.busy = 1, i.fxFn ? i.fxFn(o, a, i, h, c, r && i.fastOnEvent) : e.isFunction(e.fn.cycle[i.fx]) ? e.fn.cycle[i.fx](o, a, i, h, c, r && i.fastOnEvent) : e.fn.cycle.custom(o, a, i, h, c, r && i.fastOnEvent)
            }
            if (l || i.nextSlide == i.currSlide) if (i.lastSlide = i.currSlide, i.random) i.currSlide = i.nextSlide, ++i.randomIndex == n.length && (i.randomIndex = 0), i.nextSlide = i.randomMap[i.randomIndex], i.nextSlide == i.currSlide && (i.nextSlide = i.currSlide == i.slideCount - 1 ? 0 : i.currSlide + 1);
            else if (i.backwards) {
                var p = i.nextSlide - 1 < 0;
                p && i.bounce ? (i.backwards = !i.backwards, i.nextSlide = 1, i.currSlide = 0) : (i.nextSlide = p ? n.length - 1 : i.nextSlide - 1, i.currSlide = p ? 0 : i.nextSlide + 1)
            } else {
                var p = i.nextSlide + 1 == n.length;
                p && i.bounce ? (i.backwards = !i.backwards, i.nextSlide = n.length - 2, i.currSlide = n.length - 1) : (i.nextSlide = p ? 0 : i.nextSlide + 1, i.currSlide = p ? n.length - 1 : i.nextSlide - 1)
            }
            l && i.pager && i.updateActivePagerLink(i.pager, i.currSlide, i.activePagerClass);
            var g = 0;
            i.timeout && !i.continuous ? g = d(n[i.currSlide], n[i.nextSlide], i, c) : i.continuous && s.cyclePause && (g = 10), g > 0 && (s.cycleTimeout = setTimeout(function () {
                u(n, i, 0, !i.backwards)
            }, g))
        }
    }
    function d(e, n, i, r) {
        if (i.timeoutFn) {
            for (var c = i.timeoutFn.call(e, e, n, i, r);
            "none" != i.fx && c - i.speed < 250;) c += i.speed;
            if (t("calculated timeout: " + c + "; speed: " + i.speed), c !== !1) return c
        }
        return i.timeout
    }
    function f(t, n) {
        var i = n ? 1 : -1,
            r = t.elements,
            c = t.$cont[0],
            s = c.cycleTimeout;
        if (s && (clearTimeout(s), c.cycleTimeout = 0), t.random && 0 > i) t.randomIndex--, -2 == --t.randomIndex ? t.randomIndex = r.length - 2 : -1 == t.randomIndex && (t.randomIndex = r.length - 1), t.nextSlide = t.randomMap[t.randomIndex];
        else if (t.random) t.nextSlide = t.randomMap[t.randomIndex];
        else if (t.nextSlide = t.currSlide + i, t.nextSlide < 0) {
            if (t.nowrap) return !1;
            t.nextSlide = r.length - 1
        } else if (t.nextSlide >= r.length) {
            if (t.nowrap) return !1;
            t.nextSlide = 0
        }
        var o = t.onPrevNextEvent || t.prevNextClick;
        return e.isFunction(o) && o(i > 0, t.nextSlide, r[t.nextSlide]), u(r, t, 1, n), !1
    }
    function h(t, n) {
        var i = e(n.pager);
        e.each(t, function (r, c) {
            e.fn.cycle.createPagerAnchor(r, c, i, t, n)
        }), n.updateActivePagerLink(n.pager, n.startingSlide, n.activePagerClass)
    }
    function g(n) {
        function i(e) {
            return e = parseInt(e).toString(16), e.length < 2 ? "0" + e : e
        }
        function r(t) {
            for (; t && "html" != t.nodeName.toLowerCase(); t = t.parentNode) {
                var n = e.css(t, "background-color");
                if (n && n.indexOf("rgb") >= 0) {
                    var r = n.match(/\d+/g);
                    return "#" + i(r[0]) + i(r[1]) + i(r[2])
                }
                if (n && "transparent" != n) return n
            }
            return "#ffffff"
        }
        t("applying clearType background-color hack"), n.each(function () {
            e(this).css("background-color", r(this))
        })
    }
    var y = "2.99";
    void 0 == e.support && (e.support = {
        opacity: !e.browser.msie
    }), e.expr[":"].paused = function (e) {
        return e.cyclePause
    }, e.fn.cycle = function (r, c) {
        var o = {
            s: this.selector,
            c: this.context
        };
        return 0 === this.length && "stop" != r ? !e.isReady && o.s ? (n("DOM not ready, queuing slideshow"), e(function () {
            e(o.s, o.c).cycle(r, c)
        }), this) : (n("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this) : this.each(function () {
            var a = i(this, r, c);
            if (a !== !1) {
                a.updateActivePagerLink = a.updateActivePagerLink || e.fn.cycle.updateActivePagerLink, this.cycleTimeout && clearTimeout(this.cycleTimeout), this.cycleTimeout = this.cyclePause = 0;
                var l = e(this),
                    f = a.slideExpr ? e(a.slideExpr, this) : l.children(),
                    h = f.get();
                if (h.length < 2) return void n("terminating; too few slides: " + h.length);
                var p = s(l, f, h, a, o);
                if (p !== !1) {
                    var g = p.continuous ? 10 : d(h[p.currSlide], h[p.nextSlide], p, !p.backwards);
                    g && (g += p.delay || 0, 10 > g && (g = 10), t("first timeout: " + g), this.cycleTimeout = setTimeout(function () {
                        u(h, p, 0, !a.backwards)
                    }, g))
                }
            }
        })
    }, e.fn.cycle.resetState = function (t, n) {
        n = n || t.fx, t.before = [], t.after = [], t.cssBefore = e.extend({}, t.original.cssBefore), t.cssAfter = e.extend({}, t.original.cssAfter), t.animIn = e.extend({}, t.original.animIn), t.animOut = e.extend({}, t.original.animOut), t.fxFn = null, e.each(t.original.before, function () {
            t.before.push(this)
        }), e.each(t.original.after, function () {
            t.after.push(this)
        });
        var i = e.fn.cycle.transitions[n];
        e.isFunction(i) && i(t.$cont, e(t.elements), t)
    }, e.fn.cycle.updateActivePagerLink = function (t, n, i) {
        e(t).each(function () {
            e(this).children().removeClass(i).eq(n).addClass(i)
        })
    }, e.fn.cycle.next = function (e) {
        f(e, 1)
    }, e.fn.cycle.prev = function (e) {
        f(e, 0)
    }, e.fn.cycle.createPagerAnchor = function (n, i, r, c, s) {
        var o;
        if (e.isFunction(s.pagerAnchorBuilder) ? (o = s.pagerAnchorBuilder(n, i), t("pagerAnchorBuilder(" + n + ", el) returned: " + o)) : o = '<a href="#">' + (n + 1) + "</a>", o) {
            var a = e(o);
            if (0 === a.parents("body").length) {
                var l = [];
                r.length > 1 ? (r.each(function () {
                    var t = a.clone(!0);
                    e(this).append(t), l.push(t[0])
                }), a = e(l)) : a.appendTo(r)
            }
            s.pagerAnchors = s.pagerAnchors || [], s.pagerAnchors.push(a), a.bind(s.pagerEvent, function (t) {
                t.preventDefault(), s.nextSlide = n;
                var i = s.$cont[0],
                    r = i.cycleTimeout;
                r && (clearTimeout(r), i.cycleTimeout = 0);
                var o = s.onPagerEvent || s.pagerClick;
                e.isFunction(o) && o(s.nextSlide, c[s.nextSlide]), u(c, s, 1, s.currSlide < n)
            }), /^click/.test(s.pagerEvent) || s.allowPagerClickBubble || a.bind("click.cycle", function () {
                return !1
            }), s.pauseOnPagerHover && a.hover(function () {
                s.$cont[0].cyclePause++
            }, function () {
                s.$cont[0].cyclePause--
            })
        }
    }, e.fn.cycle.hopsFromLast = function (e, t) {
        var n, i = e.lastSlide,
            r = e.currSlide;
        return n = t ? r > i ? r - i : e.slideCount - i : i > r ? i - r : i + e.slideCount - r
    }, e.fn.cycle.commonReset = function (t, n, i, r, c, s) {
        e(i.elements).not(t).hide(), "undefined" == typeof i.cssBefore.opacity && (i.cssBefore.opacity = 1), i.cssBefore.display = "block", i.slideResize && r !== !1 && n.cycleW > 0 && (i.cssBefore.width = n.cycleW), i.slideResize && c !== !1 && n.cycleH > 0 && (i.cssBefore.height = n.cycleH), i.cssAfter = i.cssAfter || {}, i.cssAfter.display = "none", e(t).css("zIndex", i.slideCount + (s === !0 ? 1 : 0)), e(n).css("zIndex", i.slideCount + (s === !0 ? 0 : 1))
    }, e.fn.cycle.custom = function (t, n, i, r, c, s) {
        var o = e(t),
            a = e(n),
            l = i.speedIn,
            u = i.speedOut,
            d = i.easeIn,
            f = i.easeOut;
        a.css(i.cssBefore), s && (l = u = "number" == typeof s ? s : 1, d = f = null);
        var h = function () {
            a.animate(i.animIn, l, d, function () {
                r()
            })
        };
        o.animate(i.animOut, u, f, function () {
            o.css(i.cssAfter), i.sync || h()
        }), i.sync && h()
    }, e.fn.cycle.transitions = {
        fade: function (t, n, i) {
            n.not(":eq(" + i.currSlide + ")").css("opacity", 0), i.before.push(function (t, n, i) {
                e.fn.cycle.commonReset(t, n, i), i.cssBefore.opacity = 0
            }), i.animIn = {
                opacity: 1
            }, i.animOut = {
                opacity: 0
            }, i.cssBefore = {
                top: 0,
                left: 0
            }
        }
    }, e.fn.cycle.ver = function () {
        return y
    }, e.fn.cycle.defaults = {
        activePagerClass: "activeSlide",
        after: null,
        allowPagerClickBubble: !1,
        animIn: null,
        animOut: null,
        autostop: 0,
        autostopCount: 0,
        backwards: !1,
        before: null,
        cleartype: !e.support.opacity,
        cleartypeNoBg: !1,
        containerResize: 1,
        continuous: 0,
        cssAfter: null,
        cssBefore: null,
        delay: 0,
        easeIn: null,
        easeOut: null,
        easing: null,
        end: null,
        fastOnEvent: 0,
        fit: 0,
        fx: "fade",
        fxFn: null,
        height: "auto",
        manualTrump: !0,
        next: null,
        nowrap: 0,
        onPagerEvent: null,
        onPrevNextEvent: null,
        pager: null,
        pagerAnchorBuilder: null,
        pagerEvent: "click.cycle",
        pause: 0,
        pauseOnPagerHover: 0,
        prev: null,
        prevNextEvent: "click.cycle",
        random: 0,
        randomizeEffects: 1,
        requeueOnImageNotLoaded: !0,
        requeueTimeout: 250,
        rev: 0,
        shuffle: null,
        slideExpr: null,
        slideResize: 1,
        speed: 1e3,
        speedIn: null,
        speedOut: null,
        startingSlide: 0,
        sync: 1,
        timeout: 4e3,
        timeoutFn: null,
        updateActivePagerLink: null
    }
}(jQuery);
