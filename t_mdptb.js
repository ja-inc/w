window.selectnav = function () {
    return function (e, t) {
        var n, o = function (e) {
            var t;
            e || (e = window.event), e.target ? t = e.target : e.srcElement && (t = e.srcElement), 3 === t.nodeType && (t = t.parentNode), t.value && (window.location.href = t.value)
        }, i = function (e) {
            return e = e.nodeName.toLowerCase(), "ul" === e || "ol" === e
        }, a = function (e) {
            for (var t = 1; document.getElementById("selectnav" + t); t++);
            return e ? "selectnav" + t : "selectnav" + (t - 1)
        }, s = function (e) {
            m++;
            var t = e.children.length,
                n = "",
                o = "",
                l = m - 1;
            if (t) {
                if (l) {
                    for (; l--;) o += p;
                    o += " "
                }
                for (l = 0; t > l; l++) {
                    var h = e.children[l].children[0];
                    if ("undefined" != typeof h) {
                        var f = h.innerText || h.textContent,
                            v = "";
                        r && (v = -1 !== h.className.search(r) || -1 !== h.parentElement.className.search(r) ? g : ""), c && !v && (v = h.href === document.URL ? g : ""), n += '<option value="' + h.href + '" ' + v + ">" + o + f + "</option>", d && (h = e.children[l].children[1]) && i(h) && (n += s(h))
                    }
                }
                return 1 === m && u && (n = '<option value="">' + u + "</option>" + n), 1 === m && (n = '<select class="selectnav" id="' + a(!0) + '">' + n + "</select>"), m--, n
            }
        };
        if ((n = document.getElementById(e)) && i(n)) {
            document.documentElement.className += " js";
            var l = t || {}, r = l.activeclass || "active",
                c = "boolean" == typeof l.autoselect ? l.autoselect : !0,
                d = "boolean" == typeof l.nested ? l.nested : !0,
                p = l.indent || "→",
                u = l.label || "- Navigation -",
                m = 0,
                g = " selected ";
            n.insertAdjacentHTML("afterend", s(n)), n = document.getElementById(a()), n.addEventListener && n.addEventListener("change", o), n.attachEvent && n.attachEvent("onchange", o)
        }
    }
}(), eval(function (e, t, n, o, i, a) {
    if (i = function (e) {
        return (t > e ? "" : i(parseInt(e / t))) + ((e %= t) > 35 ? String.fromCharCode(e + 29) : e.toString(36))
    }, !"".replace(/^/, String)) {
        for (; n--;) a[i(n)] = o[n] || i(n);
        o = [function (e) {
            return a[e]
        }], i = function () {
            return "\\w+"
        }, n = 1
    }
    for (; n--;) o[n] && (e = e.replace(new RegExp("\\b" + i(n) + "\\b", "g"), o[n]));
    return e
}("(4($){$.y=$.y||{};$.y.T={3:{l:1,A:1,R:'x',E:b,u:8,J:8,13:1m,1l:8,14:b,H:1k,M:1j}};$.p.1n=4(3){7 3=$.1o({},$.y.T.3,3);6.1s(4(){$(6).q('r',1i U($(6),3))});i 6};$.p.1q=4(){$(6).q('r').l()};$.p.1p=4(){$(6).q('r').D()};$.p.1g=4(W){$(6).q('r').f(W-1,b)};4 U(e,3){7 c=6;7 s=$('.1c:n',e);7 B=$('.1f:n',e);7 h=B.1e();7 v=$('.1d:n',e);7 w=$('.1r:n',e);7 C=$('.u:n',e);7 m,d,5,o,z,t=b,g=3.R=='x';4 18(){m=g?$(h[0]).O(b):$(h[0]).X(b);7 S=k.Q(((g?s.O():s.X())/(m*3.A))-1);d=k.V(1,k.Q(h.j/3.A)-S);5=k.1J(d,k.V(1,3.l))-2;B.1L(g?'1F':'1E',(m*h.j));s.1y().Z(g?'':'1x');c.f(1);Y();i c};4 Y(){9(3.E&&w.j>0&&v.j>0){w.F(4(){c.f(-1);i 8});v.F(4(){c.f(1);i 8})}9(3.J){e.1v(c.D,c.l)}9(3.u&&C.j>0){$('a',C).F(17)}};4 12(){9(3.E){w.N('P',!(5>0));v.N('P',!(5+1<d))}9(3.u){7 I=$('.10',C);I.1I('16');$(I[5]).Z('16')}};4 17(1C){9($(6).1D('10')){c.f(1A(6.1z),b)}i 8};4 K(){9(3.J&&!z){11(o);o=1w(4(){5=5+1==d?-1:5;t=5+1==d?8:5==0?b:t;c.f(t?1:-1)},3.13)}};6.D=4(){11(o);z=b};6.l=4(){z=8;K()};6.f=4(L,15){5=15?L:5+=L;9(5>-1&&5<d){7 G={};G[g?'1K':'1G']=-(5*(m*3.A));B.D().1H(G,{1u:8,H:3.14?3.H:0,1h:\"1b\",1a:4(){9(19 3.M=='4')3.M.1t(6,h[5],5)}});12();K()}};i 18()}})(1B);", 62, 110, "|||options|function|iCurrent|this|var|false|if||true|oSelf|iSteps|root|move|bAxis|oPages|return|length|Math|start|iPageSize|first|oTimer|fn|data|tcl|oViewport|bForward|pager|oBtnNext|oBtnPrev||tiny|bPause|display|oContent|oPager|stop|controls|click|oPosition|duration|oNumbers|interval|setTimer|iDirection|callback|toggleClass|outerWidth|disable|ceil|axis|iLeftover|carousel|Carousel|max|iNum|outerHeight|setEvents|addClass|pagenum|clearTimeout|setButtons|intervaltime|animation|bPublic|active|setPager|initialize|typeof|complete|swing|viewport|next|children|overview|tinycarousel_move|easing|new|null|1000|rewind|3000|tinycarousel|extend|tinycarousel_stop|tinycarousel_start|prev|each|call|queue|hover|setTimeout|vertical|parent|rel|parseInt|jQuery|oEvent|hasClass|height|width|top|animate|removeClass|min|left|css".split("|"), 0, {}))(function (e) {
    e.wdxnewpost = function (t, n) {
        var o = this;
        o.$el = e(t), o.init = function () {
            o.options = e.extend({}, e.wdxnewpost.defaultOptions, n), o.$el.html('<div class="wdxtaglistco ' + o.options.postType + '"><ul class="wdxnewponew"></ul></div>').addClass(o.options.loadingClass), e.get(("" === o.options.blogURL ? window.location.protocol + "//" + window.location.host : o.options.blogURL) + "/feeds/posts/default" + (o.options.tagName === !1 ? "" : "/-/" + o.options.tagName) + "?max-results=" + o.options.MaxPost + "&orderby=published&alt=json-in-script", function (n) {
                var i, a, s, l, r, c, d, p, u, m, g, h, f = "",
                    v = n.feed.entry;
                if (void 0 !== v) {
                    for (var w = 0, b = v.length; b > w; w++) {
                        for (var $ = 0, y = v[w].link.length; y > $; $++) if ("alternate" == v[w].link[$].rel) {
                            i = v[w].link[$].href;
                            break
                        }
                        for (var x = 0, C = v[w].link.length; C > x; x++) if ("replies" == v[w].link[x].rel && "text/html" == v[w].link[x].type) {
                            l = v[w].link[x].title.split(" ")[0];
                            break
                        }
                        s = "content" in v[w] ? v[w].content.$t : "summary" in v[w] ? v[w].summary.$t : "";
                        var S = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
                        r = e("<div></div>").append(s.replace(S, "")), c = r.find("img"), "media$thumbnail" in v[w] ? (d = v[w].media$thumbnail.url.replace(/\/s[0-9]+\-c/g, "/" + o.options.ImageSize), v[w] === v[0] && "s" !== o.options.postType ? d = v[w].media$thumbnail.url.replace(/\/s[0-9]+\-c/g, "/" + o.options.FirstImageSize) : -1 != v[w].media$thumbnail.url.indexOf("img.youtube.com") && (d = v[w].media$thumbnail.url.replace("default", "0"))) : d = 0 != c.length ? c[0].src : o.options.pBlank, s = s.replace(/<\S[^>]*>/g, ""), s.length > o.options.Summarylength && (s = s.substring(0, o.options.Summarylength) + "..."), a = v[w].title.$t, h = v[w].published.$t.substring(0, 10), p = h.substring(0, 4), u = h.substring(5, 7), m = h.substring(8, 10), g = o.options.MonthNames[parseInt(u, 10) - 1], f += '<li class="a' + w + '"><div class="inner" ><a title="' + a + '" class="imagethubnailwithtagin" href="' + i + '"><img src="' + d + '"/></a><strong><a href="' + i + '">' + a + '</a></strong><div class="info">' + (o.options.ShowDate === !0 ? '<span id="dayclass">' + g + " " + m + ", " + p + "</span>" : "") + (o.options.ShowComment === !0 ? '<span id="comclass"><a href="' + i + '#comment-form">' + l + "</a> Comment(s)</span>" : "") + "</div><p " + (o.options.ShowDesc === !1 ? "" : 'style="display:block"') + ">" + s + "</p></div></li>"
                    }
                    if (e("ul", o.$el).append(f), "s" === o.options.postType) {
                        var k = e(t).parents(".widget"),
                            A = k.children("h2");
                        0 != o.options.tagName && A.wrapInner('<a href="/search/label/' + encodeURIComponent(o.options.tagName) + '"/>');
                        var E, I, N = o.$el.width();
                        e(window).width() < 479 ? (I = 1, E = N / I) : e(window).width() < 979 ? (I = 2, E = N / I) : e(window).width() < 1025 ? (I = 3, E = N / I) : (I = 4, E = N / I), e(".wdxtaglistco", o.$el).flexslider({
                            animation: "slide",
                            selector: ".wdxnewponew > li",
                            animationLoop: !0,
                            itemWidth: E,
                            minItems: 1,
                            move: I,
                            mousewheel: !0,
                            maxItems: 3
                        }), o.$el.removeClass(o.options.loadingClass)
                    }
                    o.$el.removeClass(o.options.loadingClass)
                } else o.$el.html("<span>No result! Or Error Loading Feed</span>")
            }, "jsonp")
        }, o.init()
    }, e.wdxnewpost.defaultOptions = {
        blogURL: "",
        MaxPost: 6,
        FirstImageSize: "s360-p",
        ImageSize: "s200-p",
        ShowDesc: !1,
        ShowDate: !0,
        ShowComment: !0,
        Summarylength: 170,
        postType: "v",
        loadingClass: "loadingxxnewcontent",
        pBlank: "http://1.bp.blogspot.com/-htG7vy9vIAA/Tp0KrMUdoWI/AAAAAAAABAU/e7XkFtErqsU/s72-c/grey.gif",
        MonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        tagName: !1
    }, e.fn.wdxnewpost = function (t) {
        return this.each(function () {
            new e.wdxnewpost(this, t)
        })
    }
})(jQuery);
