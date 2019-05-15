setTimeout(function() {
    $('.logo-img, .phone-container, .fade-in').addClass('active');
}, 500)

$('.container-01').on('wheel', function(e) {
    var delta = e.originalEvent.deltaY;
    if (delta > 0) {
        $('.container-02').addClass('active')
        $('.container-01').addClass('prepare')
        $('.indicator-inner').addClass('step-02')
    }
    return false;
});

$('.container-01').on('swipeleft', function(e) {
        $('.container-02').addClass('active')
        $('.container-01').addClass('prepare')
        $('.indicator-inner').addClass('step-02')
});

$('.container-02').on('wheel', function(e) {
    var delta = e.originalEvent.deltaY;
    if (delta > 0) {
        $('.container-03').addClass('active')
        $('.container-02').addClass('prepare')
        $('.indicator-inner').addClass('step-03')
    } else {
        $('.container-02').removeClass('active')
        $('.container-01').removeClass('prepare')
        $('.indicator-inner').removeClass('step-02')
    }
    return false;
});

$('.container-02').on('swipeleft', function(e) {
    $('.container-03').addClass('active')
    $('.container-02').addClass('prepare')
    $('.indicator-inner').addClass('step-03')
});

$('.container-02').on('swiperight', function(e) {
    $('.container-02').removeClass('active')
    $('.container-01').removeClass('prepare')
    $('.indicator-inner').removeClass('step-02')
});

$('.container-03').on('wheel', function(e) {
    var delta = e.originalEvent.deltaY;
    if (delta > 0) {

    } else {
        $('.container-03').removeClass('active')
        $('.container-02').removeClass('prepare').addClass('active')
        $('.indicator-inner').removeClass('step-03')
    }
    return false;
});

$('.container-03').on('swiperight', function(e) {
    $('.container-03').removeClass('active')
    $('.container-02').removeClass('prepare').addClass('active')
    $('.indicator-inner').removeClass('step-03')
});
