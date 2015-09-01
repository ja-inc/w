// media-nav menu
$(document).ready(function () {
    selectnav( 'menu-main', {
        label: 'Menu here ', nested: true,
        autoselect: false,
        indent: '-'
    });
});
//menu page highlight
$(function () {
    var url = window.location.href;
    $('#menu-wrapper a').each(function () {
        if (url == (this.href)) {
            $(this).closest('ul').parent('li').addClass('active');
            $(this).closest("li").addClass('active');
        }
    });
});
