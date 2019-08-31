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
	//прикручиваем попап
	$('.preview__btn').on('click', function(){
		$('.popup').addClass('popup_active')
	})
	$('.cutaway-right__btn').on('click', function () {
		$('.popup').addClass('popup_active')
	})
	$('.popup__exit').on('click', function () {
		$('.popup').removeClass('popup_active')
	})
	// плавная прокрутка якорей
	$('a[name="anchor-bid"').on('click', function (e) {
		$('html,body').stop().animate({
			scrollTop: $('#bid').offset().top
		}, 1000);
		e.preventDefault();
	});
	$('a[name="anchor-about"').on('click', function (e) {
		$('html,body').stop().animate({
			scrollTop: $('#about').offset().top
		}, 1000);
		e.preventDefault();
	});
	$('a[name="anchor-product"').on('click', function (e) {
		$('html,body').stop().animate({
			scrollTop: $('#product').offset().top
		}, 1000);
		e.preventDefault();
	});
	$('a[name="anchor-production"').on('click', function (e) {
		$('html,body').stop().animate({
			scrollTop: $('#production').offset().top
		}, 1000);
		e.preventDefault();
	});
	$('a[name="anchor-feedback"').on('click', function (e) {
		$('html,body').stop().animate({
			scrollTop: $('#feedback').offset().top
		}, 1000);
		e.preventDefault();
	});
	$('a[name="anchor-promotions"').on('click', function (e) {
		$('html,body').stop().animate({
			scrollTop: $('#promotions').offset().top
		}, 1000);
		e.preventDefault();
	});
	$('a[name="anchor-cutaway"').on('click', function (e) {
		$('html,body').stop().animate({
			scrollTop: $('#cutaway').offset().top
		}, 1000);
		e.preventDefault();
	});
	$.scrollify({
		section: ".slide",
		sectionName: "section-name",
		easing: "easeOutExpo",
		scrollSpeed: 1100,
		offset: 10,
		scrollbars: false,
		standardScrollElements: "",
		setHeights: true,
		overflowScroll: true,
		updateHash: true,
		touchScroll: true
	});
	// по блочная прокрутка страницы
	
	/*var windowHeight = $(window).height();

	 $(document).on('scroll', function () {
				height = 0;
			var selfAbout = $('#about'),
				height1 = selfAbout.height() + 20;
			var selfProduct = $('#product'),
				height2 = selfProduct.height() + selfProduct.height();
			// var selfProduction = $('#production'),
			// 	height3 = selfProduction.height() + 20;
			// var selfFeedback = $('#feedback'),
			// 	height4 = selfFeedback.height() + 20;
			// var selfPromotions = $('#promotions'),
			// 	height5 = selfPromotions.height() + 20;
			// var selfCutaway = $('#cutaway'),
			// 	height6 = selfCutaway.height() + 20;
			console.log(height)
			console.log(height1)
			console.log($(document).scrollTop() )
			
		
			if (($(document).scrollTop() + windowHeight >= height1) && ($(document).scrollTop() + windowHeight <= height2)) {
				$('html,body').stop().animate({
					scrollTop: $('#about').offset().top
				}, 50);
			} else if (($(document).scrollTop() < height1) && ($(document).scrollTop() >= height)) {
				$('html,body').stop().animate({
					scrollTop: $('#top').offset().top
				}, 50);
			}
		
			// if ($(document).scrollTop() + windowHeight >= height) {
			// 	$('html,body').stop().animate({
			// 		scrollTop: $('#product').offset().top
			// 	}, 100);
			// } else if ($(document).scrollTop() + windowHeight == height2){
			// 	$('html,body').stop().animate({
			// 		scrollTop: $('#about').offset().top
			// 	}, 100);
			// }		
	}); */
})
