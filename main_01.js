//---------------------------------
//----- media navbar menu
//---------------------------------
$(document).ready(function () {
    selectnav( 'menu-main', {
        label: 'Menu here ', nested: true,
        autoselect: false,
        indent: '-'
    });
});
//---------------------------------
//----- menu page highlight
//---------------------------------
$(function () {
    var url = window.location.href;
    $('#menu-wrapper a').each(function () {
        if (url == (this.href)) {
            $(this).closest('ul').parent('li').addClass('active');
            $(this).closest("li").addClass('active');
        }
    });
});
//---------------------------------
//----- auto tag url (text-to-url)
//---------------------------------
$(document).ready(function () {
    var p = $("div .post-body div").contents().filter(function () {
        return this.nodeType === 3
    }).replaceWith(function () {
        var t = $(this).text()
        var spl = t.split(/:\s*/);
        var topic = $.trim(spl[0])
        console.log(topic)
        if (spl.length > 1 && topic.match(/^(Producers|Genre|Writers|Stars|Genres|Directors)$/)) {
            var words = spl[1].split(/\s*,\s*/)
            return topic + ": " + $.map(words, function (e) {
                e = e.replace(/L$/,"")
                var q = e.replace(/\(.*?\)/g,"")
				var q = q.replace(/\./g,"")
                var l = '<a href="/search/?q=' + q + '">' + e + '</a>';
                return l;
            }).join(", ")
        }else{
            return t
        }
    });
})
