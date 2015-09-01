$(function () {
    $('.sompret-image').hover(function () {
        $(this).find('img').animate({
            top: '260px',
            right: '200px'
        }, {
            queue: false,
            duration: 500
        });
    }, function () {
        $(this).find('img').animate({
            top: '0px',
            right: '0px'
        }, {
            queue: false,
            duration: 500
        });
    });
})
