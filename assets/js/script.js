$(document).ready(function(){

	// change mode code
	$('.black-mode').on('click',function(){
		$('.black-mode, .mode-button').addClass('active');
		$('body').addClass('night-mode');
		$('.night, .white-mode').removeClass('active');
		$('.responsive-menu').removeClass('active');
	});
    $('.white-mode').on('click',function(){
		$('.black-mode, .mode-button').removeClass('active');
		$('.white-mode, .night').addClass('active');
		$('body').removeClass('night-mode');
		$('.responsive-menu').removeClass('active');
	});
    $('.mode-button').on('click',function(){
    	$('.responsive-menu').removeClass('active');
    	if($('.white-mode').hasClass('active')){
			$('.black-mode, .mode-button').addClass('active');
			$('body').addClass('night-mode');
			$('.night, .white-mode').removeClass('active');
    	} else {
			$('.black-mode, .mode-button').removeClass('active');
			$('body').removeClass('night-mode');
			$('.night, .white-mode').addClass('active');    		
    	}
	});

	// slashes between social links
	$('.socials li + li').prepend('/');

	// materialize tabs
	$('.tabs').tabs({
	  	swipeable : true,
	  	responsiveThreshold : Infinity
	});
	$('.tabs-content.carousel.carousel-slider').css("height","auto");


	// popup height function
	function popupHeight(){
		if($(window).width() > 600){
			setTimeout(function(){
				$('.popup-content .text').css('height',$('.popup-content .image-block').height() - 120);
			},500);
		}
	}
	popupHeight();
	$(window).on('resize', function(){
    	popupHeight();  	
	});

	$('.each-work .image').on('click',function(){
		$('.popup-content').addClass('active');
	})
	$('.popup-content .close').on('click',function(){
		$('.popup-content').removeClass('active');
	})

	var animateHTML = function() {
		var elems;
		var windowHeight;
		function init() {
			elems = document.querySelectorAll('.hidden');
			windowHeight = window.innerHeight;
			addEventHandlers();
			checkPosition();
		}
		function addEventHandlers() {
			window.addEventListener('scroll', checkPosition);
			window.addEventListener('resize', init);
		}
		function checkPosition() {
			for (var i = 0; i < elems.length; i++) {
				var positionFromTop = elems[i].getBoundingClientRect().top;
				if (positionFromTop - windowHeight <= 0) {
					elems[i].className = elems[i].className.replace(
					'hidden',
					'fade-in-element'
					);
				}
			}
		}
		return {
			init: init
		};
	};
	animateHTML().init();

	$('.burger-bar').on('click', function(){
		$('.responsive-menu').addClass('active')
	});
	$('.responsive-menu .close').on('click', function(){
		$('.responsive-menu').removeClass('active')
	})
});