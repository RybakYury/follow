/* BURGER */

$(document).ready(function() {
	$('.header__menu').click(function(event) {
		 $('.header__menu, .menu__body').toggleClass('active');
		 $('body').toggleClass('lock');
		 $('.menu li').click(function(event) {
			$('.bg__burger, .menu').removeClass('active');
			$('body').removeClass('lock');
	  });
 });

});

/*  BURGER 2*/

