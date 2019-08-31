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
		nested:true,
		centeredSlides: true,
		navigation: {
			nextEl: '.product-slider__prev',
			prevEl: '.product-slider__next',
		},
	})
	// слайдер с акциями
	var mySwipe2 = new Swiper('.promotions-slider', {
		loop: true,
		loopFillGroupWithBlank: true,
		slidesPerView: 2,
		slidesPerGroup: 1,
		spaceBetween: 30,
		nested:true,
		pagination: {
		el: '.promotions-slider__pagination',
		},
		breakpoints: {			
			1060: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			768: {
				slidesPerView: 2
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 10
			}
		}

	})
	// слайдер с отзывами
	var mySwipe3 = new Swiper('.feedback-slider', {
		loop: true,
		loopFillGroupWithBlank: true,
		slidesPerView: 2,
		slidesPerGroup: 1,
		spaceBetween: 30,
		nested: true,
		pagination: {
			el: '.feedback-slider__pagination',
		},
		breakpoints: {
			1030: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			768: {
				slidesPerView: 2
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 10
			}
		}
	})
	// маска телефона
	$('input[name="phone"]').mask('+7 (999) 999-99-99')
	// валидация формы
	$('.bid-form').validate({
		errorClass: "bid__invalid",
		errorElement: "div",
		rules: {
			username: {
				required: true,
				minlength: 2,
				maxlength: 15
			},
			phone: {
				required: true
			},
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			username: {
				required: "Заполните поле",
				minlength: jQuery.validator.format("Минимальная длинна: 2"),
				maxlength: jQuery.validator.format("Максимальная длинна: 15")
			},
			phone: {
				required: "Укажите телефон",
			},
			email: {
				required: "Заполните поле",
				email: "Введите корректный email"
			}
		}
	})
})
