$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 150);
});

$("#firstlink").venobox().trigger('click');

$('.venobox').venobox({
    framewidth : '400px',                            // default: ''
    frameheight: '300px',                            // default: ''
    border     : '10px',                             // default: '0'
    bgcolor    : '#5dff5e',                          // default: '#fff'
    titleattr  : 'data-title',                       // default: 'title'
    numeratio  : true,                               // default: false
    infinigall : true,                               // default: false
    share      : ['facebook', 'twitter', 'download'] // default: []
});



$(".carousel").on("mouseenter", function () {
    $(this).carousel('cycle');
}).on("mouseleave", function () {
    $(this).carousel('pause');
});

