function imgrs01(i, e, s) {
    $(i).each(function () {
        $(this).attr({
            src: $(this).attr("src").replace("/s" + e, "/w" + s),
            width: s
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
            width: s
        })
    })
}
$(function () {
    imgrs02("#PopularPosts1 img", "72", "180")
});
