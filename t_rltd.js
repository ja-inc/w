function removeHtmlTag(e, t) {
    for (var r = e.split("<"), l = 0; l < r.length; l++) - 1 != r[l].indexOf(">") && (r[l] = r[l].substring(r[l].indexOf(">") + 1, r[l].length));
    return r = r.join(""), r = r.substring(0, t - 1)
}
function showrecentposts(e) {
    j = showRandomImg ? Math.floor((imgr.length + 1) * Math.random()) : 0, img = new Array;
    for (var t = 0; t < numposts; t++) {
        var r, l, i = e.feed.entry[t],
            n = i.title.$t;
        if (t == e.feed.entry.length) break;
        for (var o = 0; o < i.link.length; o++) if ("alternate" == i.link[o].rel) {
            l = i.link[o].href;
            break
        }
        for (var o = 0; o < i.link.length; o++) if ("replies" == i.link[o].rel && "text/html" == i.link[o].type) {
            r = i.link[o].title.split(" ")[0];
            break
        }
        if ("content" in i) var m = i.content.$t;
        else if ("summary" in i) var m = i.summary.$t;
        else var m = "";
        postdate = i.published.$t, j > imgr.length - 1 && (j = 0), img[t] = imgr[j], s = m, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), -1 != a && -1 != b && -1 != c && "" != d && (img[t] = d);
        for (var u = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], h = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], g = (postdate.split("-")[2].substring(0, 2), postdate.split("-")[1]), f = (postdate.split("-")[0], 0); f < u.length; f++) if (parseInt(g) == u[f]) {
            g = h[f];
            break
        }
        var p = '<div class="infos"><h2><a href="' + l + '">' + n + "</a></h2><p>" + removeHtmlTag(m, summaryPost) + '...</p><div class="carousel_buttons"><a class="carousel_link" href="' + l + '"><span>Watch Now</span></a></div></div><div class="attachment-full"><a class="carouselImageLink" href="' + l + '"><img src="' + img[t] + '"/></a></div>';
        document.write(p), j++
    }
}
function showrecentposts1(e) {
    j = showRandomImg ? Math.floor((imgr.length + 1) * Math.random()) : 0, img = new Array;
    for (var t = 0; t < numposts1; t++) {
        var r, l, i = e.feed.entry[t],
            n = i.title.$t;
        if (t == e.feed.entry.length) break;
        for (var o = 0; o < i.link.length; o++) if ("alternate" == i.link[o].rel) {
            l = i.link[o].href;
            break
        }
        for (var o = 0; o < i.link.length; o++) if ("replies" == i.link[o].rel && "text/html" == i.link[o].type) {
            r = i.link[o].title.split(" ")[0];
            break
        }
        if ("content" in i) var m = i.content.$t;
        else if ("summary" in i) var m = i.summary.$t;
        else var m = "";
        postdate = i.published.$t, j > imgr.length - 1 && (j = 0), img[t] = imgr[j], s = m, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), -1 != a && -1 != b && -1 != c && "" != d && (img[t] = d);
        for (var u = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], h = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], g = (postdate.split("-")[2].substring(0, 2), postdate.split("-")[1]), f = (postdate.split("-")[0], 0); f < u.length; f++) if (parseInt(g) == u[f]) {
            g = h[f];
            break
        }
        var p = '<div class="crott"><a href="' + l + '">' + n + "</a><p>" + removeHtmlTag(m, summaryPost1) + "... </p></div>";
        document.write(p), j++
    }
}
function showrecentposts2(e) {
    j = showRandomImg ? Math.floor((imgr.length + 1) * Math.random()) : 0, img = new Array;
    for (var t = 0; t < numposts1; t++) {
        {
            var r, l, i = e.feed.entry[t];
            i.title.$t
        }
        if (t == e.feed.entry.length) break;
        for (var n = 0; n < i.link.length; n++) if ("alternate" == i.link[n].rel) {
            l = i.link[n].href;
            break
        }
        for (var n = 0; n < i.link.length; n++) if ("replies" == i.link[n].rel && "text/html" == i.link[n].type) {
            r = i.link[n].title.split(" ")[0];
            break
        }
        if ("content" in i) var o = i.content.$t;
        else if ("summary" in i) var o = i.summary.$t;
        else var o = "";
        postdate = i.published.$t, j > imgr.length - 1 && (j = 0), img[t] = imgr[j], s = o, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), -1 != a && -1 != b && -1 != c && "" != d && (img[t] = d);
        for (var m = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], u = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], h = (postdate.split("-")[2].substring(0, 2), postdate.split("-")[1]), g = (postdate.split("-")[0], 0); g < m.length; g++) if (parseInt(h) == m[g]) {
            h = u[g];
            break
        }
        var f = '<a href="' + l + '"><img src="' + img[t] + '"/></a>';
        document.write(f), j++
    }
}
function related_results_labels_thumbs(e) {
    for (var t = 0; t < e.feed.entry.length; t++) {
        var r = e.feed.entry[t];
        relatedTitles[relatedTitlesNum] = r.title.$t;
        try {
            thumburl[relatedTitlesNum] = r.gform_foot.url
        } catch (l) {
            s = r.content.$t, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), thumburl[relatedTitlesNum] = -1 != a && -1 != b && -1 != c && "" != d ? d : "http://2.bp.blogspot.com/-uitX7ROPtTU/Tyv-G4NA_uI/AAAAAAAAFBY/NcWLPVnYEnU/w450/no+image.jpg"
        }
        relatedTitles[relatedTitlesNum].length > 35 && (relatedTitles[relatedTitlesNum] = relatedTitles[relatedTitlesNum].substring(0, 35) + "...");
        for (var i = 0; i < r.link.length; i++) "alternate" == r.link[i].rel && (relatedUrls[relatedTitlesNum] = r.link[i].href, relatedTitlesNum++)
    }
}
function removeRelatedDuplicates_thumbs() {
    for (var e = new Array(0), t = new Array(0), r = new Array(0), l = 0; l < relatedUrls.length; l++) contains_thumbs(e, relatedUrls[l]) || (e.length += 1, e[e.length - 1] = relatedUrls[l], t.length += 1, r.length += 1, t[t.length - 1] = relatedTitles[l], r[r.length - 1] = thumburl[l]);
    relatedTitles = t, relatedUrls = e, thumburl = r
}
function contains_thumbs(e, t) {
    for (var r = 0; r < e.length; r++) if (e[r] == t) return !0;
    return !1
}
function printRelatedLabels_thumbs() {
    for (var e = 0; e < relatedUrls.length; e++) relatedUrls[e] != currentposturl && relatedTitles[e] || (relatedUrls.splice(e, 1), relatedTitles.splice(e, 1), thumburl.splice(e, 1), e--);
    var t = Math.floor((relatedTitles.length - 1) * Math.random()),
        e = 0;
    for (relatedTitles.length > 0 && document.write("<h3>" + relatedpoststitle + "</h3>"), document.write('<div style="clear: both;"/>'); e < relatedTitles.length && 20 > e && e < maxresults;) document.write('<a style="text-decoration:none;margin:0 9px 10px 0;float:left;'), document.write(0 != e ? '"' : '"'), document.write(' href="' + relatedUrls[t] + '"><img class="maskolis_img" src="' + thumburl[t] + '"/><br/><div style="width:165px;padding:0 10px;color:#333;height:38px;text-align:center;margin:0px 0px; font:12px Oswald; line-height:16px;">' + relatedTitles[t] + "</div></a>"), t < relatedTitles.length - 1 ? t++ : t = 0, e++;
    document.write("</div>"), relatedUrls.splice(0, relatedUrls.length), thumburl.splice(0, thumburl.length), relatedTitles.splice(0, relatedTitles.length)
}
imgr = new Array, imgr[0] = "http://2.bp.blogspot.com/-uitX7ROPtTU/Tyv-G4NA_uI/AAAAAAAAFBY/NcWLPVnYEnU/w500/no+image.jpg", showRandomImg = !0, aBold = !0, summaryPost = 380, summaryPost1 = 380, summaryTitle = 20, numposts = 1, numposts1 = 6;
var relatedTitles = new Array,
    relatedTitlesNum = 0,
    relatedUrls = new Array,
    thumburl = new Array;
