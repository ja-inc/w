$(document).ready(function () {
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
        if (console.log(n), t.length > 1 && n.match(/^(Producers|Genre|Writers|Stars|Genres|Directors)$/)) {
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
