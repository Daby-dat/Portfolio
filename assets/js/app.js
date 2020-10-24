$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 295);
});

$(document).ready(function () {
    $('.venobox').venobox({
        spinner: 'rotating-plane',
        spinColor: '#DCD31D',
    });
});
$(".carousel").on("mouseenter", function () {
    $(this).carousel('cycle');
}).on("mouseleave", function () {
    $(this).carousel('pause');
});

