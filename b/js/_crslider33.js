jQuery(document).ready(function () {
    $(".paging").show();
    $(".paging a:first").addClass("active");
    var imageWidth = $(".sompret").width();
    var imageSum = $(".image_reel img").size();
    var imageReelWidth = imageWidth * imageSum;
    $(".image_reel").css({
        'width': imageReelWidth
    });
    rotate = function () {
        var triggerID = $active.attr("rel") - 1;
        var image_reelPosition = triggerID * imageWidth;
        $(".paging a").removeClass('active');
        $active.addClass('active');
        $(".crott").stop(true, true).slideUp('slow');
        $(".crott").eq($('.paging a.active').attr("rel") - 1).slideDown("slow");
        $(".image_reel").animate({
            left: -image_reelPosition
        }, 500);
    };
    rotateSwitch = function () {
        $(".crott").eq($('.paging a.active').attr("rel") - 1).slideDown("slow");
        play = setInterval(function () {
            $active = $('.paging a.active').next();
            if ($active.length === 0) {
                $active = $('.paging a:first');
            }
            rotate();
        }, 10000);
    };
    rotateSwitch();
    $(".paging a").click(function () {
        $active = $(this);
        clearInterval(play);
        rotate();
        rotateSwitch();
        return false;
    });
});

function removeHtmlTag(e, t) {
    for (var r = e.split("<"), n = 0; n < r.length; n++) - 1 != r[n].indexOf(">") && (r[n] = r[n].substring(r[n].indexOf(">") + 1, r[n].length));
    return r = r.join(""), r = r.substring(0, t - 1)
}
imgr = new Array, imgr[0] = "http://sites.google.com/site/fdblogsite/Home/nothumbnail.gif", showRandomImg = !0, aBold = !0, summaryTitle = 25, summaryPost = 400, summaryPost2 = 450, numposts8 = 5;
var _0x4b14 = ['I 1N(G){j=(1b)?1a.1C((H.h+1)*1a.1J()):0;q=1x 1B();A(e i=0;i<1v;i++){e f=G.16.f[i];e 13=f.D.$t;e V;e z;g(i==G.16.f.h)B;A(e k=0;k<f.l.h;k++){g(f.l[k].v==\'1M\'){z=f.l[k].o;B}}A(e k=0;k<f.l.h;k++){g(f.l[k].v==\'1q\'&&f.l[k].1r==\'1s/U\'){V=f.l[k].D.x("")[0];B}}g("S"R f){e u=f.S.$t}O g("X"R f){e u=f.X.$t}O e u="";C=f.1o.$t;g(j>H.h-1)j=0;q[i]=H[j];s=u;a=s.J("<q");b=s.J("N=\\"",a);c=s.J("\\"",b+5);d=s.1G(b+5,c-b-5);g((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!=""))q[i]=d;e F=[1,2,3,4,5,6,7,8,9,10,11,12];e P=["1c","1d","1e","1f","1g","1h","1i","1j","1k","1l","1m","1n"];e Q=C.x("-")[2].1p(0,2);e m=C.x("-")[1];e y=C.x("-")[0];A(e r=0;r<F.h;r++){g(1t(m)==F[r]){m=P[r];B}}e 1u=Q+\' \'+m+\' \'+y;e T=\'<n w="1y"><a o="\'+z+\'"><q w="1z" N="\'+q[i]+\'"/></a><n w="1A"><W><a o="\'+z+\'">\'+13+\'</a></W><p>\'+1D(u,1E)+\'...</p></n></n><n w="1F"></n>\';Y.1H(T);j++}}$(Y).1I(I(){$(\'#Z\').U("1K 1L <a o=\'E://14.15.L/\' v=\'17\' 18=\'19\' D=\'K M\'>1O M</a> 1P <a o=\'E://1Q.L/\' v=\'17\' 18=\'19\' D=\'K M\'>1R K 1S</a>");1T(I(){g(!$(\'#Z:1U\').h)1V.1W.o=\'E://14.15.L/\'},1w)});', "|", "split", "||||||||||||||var|entry|if|length||||link||div|href||img|u2|||postcontent|rel|class|split||posturl|for|break|postdate|title|http|month|json|imgr|function|indexOf|Blogger.|com|&shy;|src|else|month2|day|in|content|trtd|html|pcm|h2|summary|document|mycontent||||posttitle|www|Blogger|feed|dofollow|target|_blank|Math|showRandomImg|January|February|March|April|May|Juny|July|August|September|October|November|December|published|substring|replies|type|text|parseInt|daystr|numposts8|3000|new|contentdiv|sliderpost|featuredPost|Array|floor|removeHtmlTag|summaryPost2|clear|substr|write|ready|random|Powered|by|alternate|showrecentposts1|&shy;|&shy;|Blogger|&shy;|&shy;|setInterval|visible|window|location", "", "fromCharCode", "replace", "\\w+", "\\b", "g"];
eval(function (e, t, r, n, o, s) {
    if (o = function (e) {
        return (t > e ? _0x4b14[4] : o(parseInt(e / t))) + ((e %= t) > 35 ? String[_0x4b14[5]](e + 29) : e.toString(36))
    }, !_0x4b14[4][_0x4b14[6]](/^/, String)) {
        for (; r--;) s[o(r)] = n[r] || o(r);
        n = [function (e) {
            return s[e]
        }], o = function () {
            return _0x4b14[7]
        }, r = 1
    }
    for (; r--;) n[r] && (e = e[_0x4b14[6]](new RegExp(_0x4b14[8] + o(r) + _0x4b14[8], _0x4b14[9]), n[r]));
    return e
}(_0x4b14[0], 62, 121, _0x4b14[3][_0x4b14[2]](_0x4b14[1]), 0, {}));
