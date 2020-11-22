$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 150);
});

$(document).ready(function () {
    $('.venobox').venobox({
        spinner: 'rotating-plane',
        spinColor: '#DCD31D',
    });
});

// $("#firstlink").venobox().trigger('click');


$(".carousel").on("mouseenter", function () {
    $(this).carousel('cycle');
}).on("mouseleave", function () {
    $(this).carousel('pause');
});


$('.nav-link').click(function(e){				
		e.preventDefault();		//evitar el eventos del enlace normal
		var strAncla=$(this).attr('href'); //id del ancla
			$('body,html').stop(true,true).animate({				
				scrollTop: $(strAncla).offset().top
			},0);
		
	});