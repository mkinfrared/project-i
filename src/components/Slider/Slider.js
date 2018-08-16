import React from 'react';
import './Slider.css';


export default function Slider() {
// 	var slideIndex = 1;
//
//
// // Next/previous controls
// 	function plusSlides(n) {
// 		showSlides(slideIndex += n);
// 	}
//
// // Thumbnail image controls
// 	function currentSlide(n) {
// 		showSlides(slideIndex = n);
// 	}
//
// 	function showSlides(n) {
// 		var i;
// 		let slideWidth = document.getElementsByClassName("slider__slideshow-wrapper")[0].off;
// 		console.log(slideWidth);
// 		var slides     = document.getElementsByClassName("slider__slide");
// 		var dots       = document.getElementsByClassName("slider__dot");
// 		if (n > slides.length) {slideIndex = 1}
// 		if (n < 1) {slideIndex = slides.length}
// 		// for (i = 0; i < slides.length; i++) {
// 		// 	slides[i].style.display = "none";
// 		// }
// 		for (i = 0; i < dots.length; i++) {
// 			dots[i].className = dots[i].className.replace("fas", "far");
// 		}
// 		slides[slideIndex - 1].style.marginLeft = -(slideWidth * slideIndex);
// 		dots[slideIndex - 1].className.replace("fas", "far");
// 	}
	
	return (
		<div className="slider__slideshow-wrapper">
			<div className="slider__slides-container">
				<div className="slider__slide">
					<img src="/images/slider/mountain.jpg" alt="mountain"/>
				</div>
				<div className="slider__slide">
					<img src="/images/slider/spider-man.jpg" alt="spider-man"/>
				</div>
				<div className="slider__slide">
					<img src="/images/slider/iron-man.jpg" alt="iron-man"/>
				</div>
				<div className="slider__slide">
					<img src="/images/slider/captain-america.jpg" alt="captain"/>
					{/*<div className="slider__image-effect"></div>*/}
				</div>
				<a href="#" className="slider__prev"><i className="ion-ios-arrow-left"></i></a>
				<a href="#" className="slider__next"><i className="ion-ios-arrow-right"></i></a>
				<br/>
				<div className="slider__dot-section">
					<i className="slider__dot fas fa-circle"></i>
					<i className="slider__dot far fa-circle"></i>
					<i className="slider__dot far fa-circle"></i>
					<i className="slider__dot far fa-circle"></i>
				</div>
			</div>
			<script>
				showSlides(slideIndex);
			</script>
		</div>
	);
};