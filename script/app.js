$(window).on('load', function () {
	$('body').delay('1000').addClass('is-loaded');
	
	$('.thisYear').text(new Date().getFullYear());

	
	$('.back-top').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});

	$('.header__burger button').on('click', function () {
		$('.header').addClass('is-open');
		$('.is-open .header__overlay').on('click', function () {
			$('.header').removeClass('is-open');
		});
	});
});

$('.product-slider').slick({
	dots: true,
	infinite: false,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
	{
		breakpoint: 1199,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 991,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		}
	},
	{
		breakpoint: 520,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}
	]
});

$('.product-slider').on('wheel', (function(e) {
	e.preventDefault();
	if (e.originalEvent.deltaY < 0) {
		$(this).slick('slickNext');
	} else {
		$(this).slick('slickPrev');
	}
}));

var lastScroll =  $(window).scrollTop();
$(window).scroll(function() {
	var currentScroll = $(window).scrollTop();
	if (lastScroll > currentScroll) {
		$('.header').addClass('header--visible');
	} else {
		$('.header').removeClass('header--visible');
	}
	lastScroll = currentScroll;
	if (lastScroll < 50){
		$('.header').removeClass('header--fixed');
	}else{
		$('.header').addClass('header--fixed');
	}
});