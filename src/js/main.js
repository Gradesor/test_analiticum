$(document).ready(function () {	
	$('.nav-burg').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('nav-burg_active');
		$('.nav-burg__menu').toggleClass('nav-burg__menu_active');
		$('#menu1').removeClass('nav-popup_active');
	})
})
