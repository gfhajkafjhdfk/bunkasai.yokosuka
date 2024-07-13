$(window).on('load', function() {
    setTimeout(function() {
        $('.loading').stop().fadeOut();
        $('.wrap').addClass('on');
    }, 5000); // 5000ミリ秒（5秒）の遅延を追加
       )
});
