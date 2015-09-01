function resizeThumb(i, e, s) {
    $(i).each(function () {
        $(this).attr({
            src: $(this).attr("src").replace("/s" + e, "/w" + s),
            width: s
        })
    })
}
$(function () {
    resizeThumb("div .post-body img", "1600", "225"), resizeThumb("div .post-body img", "320", "225"), resizeThumb("div #related-posts img", "1600", "175"), resizeThumb("div #related-posts img", "320", "175")
});
function resizeThumb(t, i, s) {
    $(t).each(function () {
        $(this).attr({
            src: $(this).attr("src").replace("/s" + i + "-c", "/w" + s),
            width: s
        })
    })
}
$(function () {
    resizeThumb("#PopularPosts1 img", "72", "180")
});
