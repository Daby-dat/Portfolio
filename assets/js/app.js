$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 150);
});


$(document).ready(function () {
    $('.venobox').venobox({
        framewidth : '',                     
        frameheight: '',                        
        spinner: 'rotating-plane',
        spinColor: '#DCD31D',
    });
});

$("#firstlink").venobox().trigger('click');


$(".carousel").on("mouseenter", function () {
    $(this).carousel('cycle');
}).on("mouseleave", function () {
    $(this).carousel('pause');
});

