function getElementsByClassName(t, e, a) {
    var s = t.getElementsByTagName(e);
    if (!a) return s;
    for (var l = [], n = 0; n < s.length; n++) matchClass(s[n], a) && (l[l.length] = s[n]);
    return l
}
function addClass(t, e) {
    replaceClass(t, e, "")
}
function removeClass(t, e) {
    replaceClass(t, "", e)
}
function replaceClass(t, e, a) {
    var s = e;
    a && a.length && (a = a.replace(/\s+(\S)/g, "|$1"), s.length && (s += "|"), s += a), t.className = t.className.replace(new RegExp("(^|\\s+)(" + s + ")($|\\s+)", "g"), "$1"), t.className += (t.className.length ? " " : "") + e
}
function matchClass(t, e) {
    return t && t.className.length && t.className.match(new RegExp("(^|\\s+)(" + e + ")($|\\s+)"))
}
function addEvent(t, e, a) {
    t.addEventListener ? t.addEventListener(e, a, !1) : t.attachEvent && t.attachEvent("on" + e, a)
}
function removeEvent(t, e, a) {
    t.removeEventListener ? t.removeEventListener(e, a, !1) : t.detachEvent && t.detachEvent("on" + e, a)
}
function getPageY(t) {
    for (var e = t.offsetTop; null != t.offsetParent && (t = t.offsetParent, e += t.offsetTop, "BODY" != t.tagName););
    return e
}
function getPageX(t) {
    for (var e = t.offsetLeft; null != t.offsetParent && (t = t.offsetParent, e += t.offsetLeft, "BODY" != t.tagName););
    return e
}
function getMousePosition(t) {
    if (t.pageX || t.pageY) var e = t.pageX,
        a = t.pageY;
    else if (t.clientX || t.clientY) var e = t.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
        a = t.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    return {
        x: e,
        y: a
    }
}
function loophalaman(t) {
    maksimal = parseInt(t / postperpage) + 1;
    var e = document.getElementById("blog-pager");
    html = '<div class="paginator" id="paginator1"></div>', e && (e.innerHTML = html), pag1 = new Paginator("paginator1", maksimal, numshowpage, nomerhal, "")
}
function hitungtotaldata(t) {
    var e = t.feed,
        a = parseInt(e.openSearch$totalResults.$t, 10);
    loophalaman(a)
}
function halamanblogger() {
    var t = urlactivepage; - 1 != t.indexOf("/search/label/") && (lblname1 = -1 != t.indexOf("?updated-max") ? t.substring(t.indexOf("/search/label/") + 14, t.indexOf("?updated-max")) : t.substring(t.indexOf("/search/label/") + 14, t.indexOf("?&max"))), -1 == t.indexOf("?q=") && -1 == t.indexOf(".html") && (-1 == t.indexOf("/search/label/") ? (jenis = "page", nomerhal = -1 != urlactivepage.indexOf("#PageNo=") ? urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length) : 1, document.write('<script src="' + home_page + 'feeds/posts/summary?max-results=1&alt=json-in-script&callback=hitungtotaldata"></script>')) : (jenis = "label", -1 == t.indexOf("&max-results=") && (postperpage = 20), nomerhal = -1 != urlactivepage.indexOf("#PageNo=") ? urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length) : 1, document.write('<script src="' + home_page + "feeds/posts/summary/-/" + lblname1 + '?alt=json-in-script&callback=hitungtotaldata&max-results=1" ></script>')))
}
function redirectpage(t) {
    if (1 != t) {
        jsonstart = (t - 1) * postperpage, nopage = t;
        var e = document.getElementsByTagName("head")[0],
            a = document.createElement("script");
        a.type = "text/javascript", a.setAttribute("src", home_page + "feeds/posts/summary?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost"), e.appendChild(a)
    } else alamat = home_page, location.href = alamat
}
function redirectlabel(t) {
    if (1 != t) {
        jsonstart = (t - 1) * postperpage, nopage = t;
        var e = document.getElementsByTagName("head")[0],
            a = document.createElement("script");
        a.type = "text/javascript", a.setAttribute("src", home_page + "feeds/posts/summary/-/" + lblname1 + "?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost"), e.appendChild(a)
    } else alamat = home_page + "search/label/" + lblname1 + "?&max-results=" + postperpage, location.href = alamat
}
function finddatepost(t) {
    post = t.feed.entry[0];
    var e = post.published.$t.substring(0, 19) + post.published.$t.substring(23, 29),
        a = encodeURIComponent(e);
    if ("page" == jenis) var s = home_page + "search?updated-max=" + a + "&max-results=" + postperpage + "#PageNo=" + nopage;
    else var s = home_page + "search/label/" + lblname1 + "?updated-max=" + a + "&max-results=" + postperpage + "#PageNo=" + nopage;
    location.href = s
}
var Paginator = function (t, e, a, s, l) {
    return document.getElementById(t) && e && a ? (this.inputData = {
        paginatorHolderId: t,
        pagesTotal: e,
        pagesSpan: e > a ? a : e,
        pageCurrent: s,
        baseUrl: l ? l : "/pages/"
    }, this.html = {
        holder: null,
        table: null,
        trPages: null,
        trScrollBar: null,
        tdsPages: null,
        scrollBar: null,
        scrollThumb: null,
        pageCurrentMark: null
    }, this.prepareHtml(), this.initScrollThumb(), this.initPageCurrentMark(), this.initEvents(), void this.scrollToPageCurrent()) : !1
};
Paginator.prototype.prepareHtml = function () {
    this.html.holder = document.getElementById(this.inputData.paginatorHolderId), this.html.holder.innerHTML = this.makePagesTableHtml(), this.html.table = this.html.holder.getElementsByTagName("table")[0];
    var t = this.html.table.getElementsByTagName("tr")[0];
    this.html.tdsPages = t.getElementsByTagName("td"), this.html.scrollBar = getElementsByClassName(this.html.table, "div", "scroll_bar")[0], this.html.scrollThumb = getElementsByClassName(this.html.table, "div", "scroll_thumb")[0], this.html.pageCurrentMark = getElementsByClassName(this.html.table, "div", "current_page_mark")[0], this.inputData.pagesSpan == this.inputData.pagesTotal && addClass(this.html.holder, "fullsize")
}, Paginator.prototype.makePagesTableHtml = function () {
    for (var t = 100 / this.inputData.pagesSpan + "%", e = '<table width="100%"><tr>', a = 1; a <= this.inputData.pagesSpan; a++) e += '<td width="' + t + '"></td>';
    return e += '</tr><tr><td colspan="' + this.inputData.pagesSpan + '"><div class="scroll_bar"><div class="scroll_trough"></div><div class="scroll_thumb"><div class="scroll_knob"></div></div><div class="current_page_mark"></div></div></td></tr></table>'
}, Paginator.prototype.initScrollThumb = function () {
    this.html.scrollThumb.widthMin = "8", this.html.scrollThumb.widthPercent = this.inputData.pagesSpan / this.inputData.pagesTotal * 100, this.html.scrollThumb.xPosPageCurrent = (this.inputData.pageCurrent - Math.round(this.inputData.pagesSpan / 2)) / this.inputData.pagesTotal * this.html.table.offsetWidth, this.html.scrollThumb.xPos = this.html.scrollThumb.xPosPageCurrent, this.html.scrollThumb.xPosMin = 0, this.html.scrollThumb.xPosMax, this.html.scrollThumb.widthActual, this.setScrollThumbWidth()
}, Paginator.prototype.setScrollThumbWidth = function () {
    this.html.scrollThumb.style.width = this.html.scrollThumb.widthPercent + "%", this.html.scrollThumb.widthActual = this.html.scrollThumb.offsetWidth, this.html.scrollThumb.widthActual < this.html.scrollThumb.widthMin && (this.html.scrollThumb.style.width = this.html.scrollThumb.widthMin + "px"), this.html.scrollThumb.xPosMax = this.html.table.offsetWidth - this.html.scrollThumb.widthActual
}, Paginator.prototype.moveScrollThumb = function () {
    this.html.scrollThumb.style.left = this.html.scrollThumb.xPos + "px"
}, Paginator.prototype.initPageCurrentMark = function () {
    this.html.pageCurrentMark.widthMin = "3", this.html.pageCurrentMark.widthPercent = 100 / this.inputData.pagesTotal, this.html.pageCurrentMark.widthActual, this.setPageCurrentPointWidth(), this.movePageCurrentPoint()
}, Paginator.prototype.setPageCurrentPointWidth = function () {
    this.html.pageCurrentMark.style.width = this.html.pageCurrentMark.widthPercent + "%", this.html.pageCurrentMark.widthActual = this.html.pageCurrentMark.offsetWidth, this.html.pageCurrentMark.widthActual < this.html.pageCurrentMark.widthMin && (this.html.pageCurrentMark.style.width = this.html.pageCurrentMark.widthMin + "px")
}, Paginator.prototype.movePageCurrentPoint = function () {
    this.html.pageCurrentMark.style.left = this.html.pageCurrentMark.widthActual < this.html.pageCurrentMark.offsetWidth ? (this.inputData.pageCurrent - 1) / this.inputData.pagesTotal * this.html.table.offsetWidth - this.html.pageCurrentMark.offsetWidth / 2 + "px" : (this.inputData.pageCurrent - 1) / this.inputData.pagesTotal * this.html.table.offsetWidth + "px"
}, Paginator.prototype.initEvents = function () {
    var t = this;
    this.html.scrollThumb.onmousedown = function (e) {
        if (!e) var e = window.event;
        e.cancelBubble = !0, e.stopPropagation && e.stopPropagation();
        var a = getMousePosition(e).x - this.xPos;
        document.onmousemove = function (e) {
            if (!e) var e = window.event;
            t.html.scrollThumb.xPos = getMousePosition(e).x - a, t.moveScrollThumb(), t.drawPages()
        }, document.onmouseup = function () {
            document.onmousemove = null, t.enableSelection()
        }, t.disableSelection()
    }, this.html.scrollBar.onmousedown = function (e) {
        if (!e) var e = window.event;
        matchClass(t.paginatorBox, "fullsize") || (t.html.scrollThumb.xPos = getMousePosition(e).x - getPageX(t.html.scrollBar) - t.html.scrollThumb.offsetWidth / 2, t.moveScrollThumb(), t.drawPages())
    }, addEvent(window, "resize", function () {
        Paginator.resizePaginator(t)
    })
}, Paginator.prototype.drawPages = function () {
    var t = this.html.scrollThumb.xPos / this.html.table.offsetWidth,
        e = Math.round(t * this.inputData.pagesTotal),
        a = "";
    1 > e ? (e = 1, this.html.scrollThumb.xPos = 0, this.moveScrollThumb()) : e >= this.inputData.pagesTotal - this.inputData.pagesSpan && (e = this.inputData.pagesTotal - this.inputData.pagesSpan + 1, this.html.scrollThumb.xPos = this.html.table.offsetWidth - this.html.scrollThumb.offsetWidth, this.moveScrollThumb());
    for (var s = 0; s < this.html.tdsPages.length; s++) {
        var l = e + s;
        a = l == this.inputData.pageCurrent ? "<span><strong>" + l + "</strong></span>" : "<span><a href='#'  onclick='redirect" + jenis + "(" + l + ");return false'>" + l + "</a></span>", this.html.tdsPages[s].innerHTML = a
    }
}, Paginator.prototype.scrollToPageCurrent = function () {
    this.html.scrollThumb.xPosPageCurrent = (this.inputData.pageCurrent - Math.round(this.inputData.pagesSpan / 2)) / this.inputData.pagesTotal * this.html.table.offsetWidth, this.html.scrollThumb.xPos = this.html.scrollThumb.xPosPageCurrent, this.moveScrollThumb(), this.drawPages()
}, Paginator.prototype.disableSelection = function () {
    document.onselectstart = function () {
        return !1
    }, this.html.scrollThumb.focus()
}, Paginator.prototype.enableSelection = function () {
    document.onselectstart = function () {
        return !0
    }
}, Paginator.resizePaginator = function (t) {
    t.setPageCurrentPointWidth(), t.movePageCurrentPoint(), t.setScrollThumbWidth(), t.scrollToPageCurrent()
};
var home_page = "/",
    urlactivepage = location.href,
    postperpage = 12,
    numshowpage = 20,
    nopage, jenis, nomerhal, lblname1;
halamanblogger();
