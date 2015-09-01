function resizeThumb(el, from, to) {
    $(el).each(function () {
        $(this).attr({
            'src': $(this).attr('src').replace('/s' + from + '-c/', '/w' + to),
                'width': to,
        });
    });
}
$(function () {
    resizeThumb('#PopularPosts1 img', '72', '80');
    resizeThumb('div .post-body img', '1600', '225');
    resizeThumb('div .post-body img', '320', '225');
    resizeThumb('div #related-posts img', '1600', '175');
    resizeThumb('div #related-posts img', '320', '175');
});
