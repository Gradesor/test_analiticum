$(document).ready(function () {	
	$('.nav-burg').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('nav-burg_active');
		$('.nav-burg__menu').toggleClass('nav-burg__menu_active');
		$('#menu1').removeClass('nav-popup_active');
	})
	// слайдер с кухнями
	var mySwiper = new Swiper('.product-slider', {
		loop: true,
		loopFillGroupWithBlank: true,
		slidesPerView: 'auto',
		slidesPerGroup: 1,
		spaceBetween: 0,
		centeredSlides: true,
		navigation: {
			nextEl: '.product-slider__prev',
			prevEl: '.product-slider__next',
		},
	})
})
