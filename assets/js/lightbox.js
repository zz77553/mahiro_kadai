function init(){

	// lightbox for scroll


	$('.item_box').on('click', function () {
		$(this).parents('body').addClass('noscroll');
		$(this).parents('body').find('.light_box').show();
	});

	// close lightbox
	$('.light_box').on('click', function () {
		$(this).parents('body').removeClass('noscroll');
        $(this).parents('body').find('.light_box').hide();
	});
	$('.close_button').on('click', function () {
		$(this).parents('body').removeClass('noscroll');
        $(this).parents('body').find('.light_box').hide();
	});

}

window.addEventListener("load", init);