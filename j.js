
	$(document).ready(function() {
							   
		var currentPosition = 0;
		var slideWidth = $('#slideshow #slideshowWindow').attr('width');
		var slides = $('.slide');
		var numberOfSlides = slides.length;
		var slideShowInterval;
		var speed = 2000;

		
		slideShowInterval = setInterval(changePosition, speed);
		
		slides.wrapAll('<div id="slidesHolder"></div>')
		
		slides.css({ 'float' : 'left' });
		
		$('#slideshow','#slidesHolder').css('width', slideWidth * numberOfSlides);
		
		
		function changePosition() {
			if(currentPosition == numberOfSlides - 1) {
				currentPosition = 0;
			} else {
				currentPosition++;
			}
			moveSlide();
		}
		
		
		function moveSlide() {
				$('#slidesHolder')
				  .animate({'marginLeft' : slideWidth*(-currentPosition)});
		}

	});