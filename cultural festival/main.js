$(window).on('load', function() {
    setTimeout(function() {
        $('.loading').stop().fadeOut();
        $('.wrap').addClass('on');
    }, 500);
});
