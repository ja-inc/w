$(document).ready(function () {
// append css dynamically to head
var head = document.getElementsByTagName('head');
var mcss = document.createElement('link');
mcss.rel = 'stylesheet';
mcss.type = 'text/css';
mcss.href = '//cdn.rawgit.com/ja-inc/w/master/a/css/main01.css';
mcss.media = 'non-existant-media';

head.appendChild(mcss, head.firstChild);
setTimeout(function () {
    mcss.media = 'all';
});
}), $(document).ready(function () {
    selectnav("menu-main", {
        label: "Menu here ",
        nested: !0,
        autoselect: !1,
        indent: "-"
    })
}), $(function () {
    var e = window.location.href;
    $("#menu-wrapper a").each(function () {
        e == this.href && ($(this).closest("ul").parent("li").addClass("active"), $(this).closest("li").addClass("active"))
    })
}), $(document).ready(function () {
    $("div .post-body div").contents().filter(function () {
        return 3 === this.nodeType
    }).replaceWith(function () {
        var e = $(this).text(),
            t = e.split(/:\s*/),
            n = $.trim(t[0]);
        if (console.log(n), t.length > 1 && n.match(/^(Producers|Genre|Writers|Stars|Genres|Directors|Label)$/)) {
            var i = t[1].split(/\s*,\s*/);
            return n + ": " + $.map(i, function (e) {
                e = e.replace(/L$/, "");
                var t = e.replace(/\(.*?\)/g, ""),
                    t = t.replace(/\./g, ""),
                    n = '<a href="/search/?q=' + t + '">' + e + "</a>";
                return n
            }).join(", ")
        }
        return e
    })
}), $(function () {
    $(".sompret-image").hover(function () {
        $(this).find("img").animate({
            top: "260px",
            right: "200px"
        }, {
            queue: !1,
            duration: 500
        })
    }, function () {
        $(this).find("img").animate({
            top: "0px",
            right: "0px"
        }, {
            queue: !1,
            duration: 500
        })
    })
});
function imgrs01(i, e, s) {
    $(i).each(function () {
        $(this).attr({
            src: $(this).attr("src").replace("/s" + e, "/w" + s),
            width: "auto",
            height: "auto",
            style: "max-width:500px;max-height:350px;"
        })
    })
}
$(function () {
    imgrs01("div .post-body img", "1600", "225"), imgrs01("div .post-body img", "320", "225"), imgrs01("div #related-posts img", "1600", "175"), imgrs01("div #related-posts img", "320", "175")
});
function imgrs02(t, i, s) {
    $(t).each(function () {
        $(this).attr({
            src: $(this).attr("src").replace("/s" + i + "-c", "/w" + s),
            width: s,
            height: "auto"
        })
    })
}
$(function () {
    imgrs02("#PopularPosts1 img", "72", "80")
});
function imgsrc(i, s) {
    $(i).each(function () {
        $(this).attr({
            href: $(this).attr("href").replace("/s" + s, "/w1600")
        })
    })
};
$(function () {
    imgsrc("div .post-body a", "1600"), imgsrc("div .post-body a", "320")
});
