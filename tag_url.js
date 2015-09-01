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
