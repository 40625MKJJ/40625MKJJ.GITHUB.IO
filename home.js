$(window).on('load',function(){
    $('.loading').slideUp(800);
});

$(document).on("mousemove", function (t) {
    var o = t.clientX,
        n = t.clientY;
    $(".cursor").css({
        top: n,
        left: o
    })
});

