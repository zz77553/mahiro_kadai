function init(){

	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 3,
		nav: true,
		smartSpeed: 500,
		autoplay: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 1,
			},
			769: {
				items: 2,
			},
			1024: {
				items: 3,
			}
		}
	})

}

window.addEventListener("load", init);