function init(){

	$('.inner_box').click(function () {

		if ($(this).find('.inner_sub_box').css('opacity') == '0') {
			$(this).find(".word ").css({
				'border-bottom-color': 'transparent',
			})
			$(this).find(".word .arrow").css({
				'transform': 'rotate(90deg)',
				'transition': '.3s',
			})
			$(this).find(".inner_sub_box p").css({
				'border-bottom': '1px solid #c4c4c4',
			})
			$(this).find(".inner_sub_box").css({
				'opacity': '1',
				'height': 'auto',
			}).show()

		} else {

			$(this).find(".word").css({
				'border-bottom': '1px solid #c4c4c4',
			})
			$(this).find(".word .arrow").css({
				'transform': 'rotate(-90deg)',
				'transition': '.3s',
			})
			$(this).find(".inner_sub_box p").css({
				'border-bottom': 'transparent',
			})
			$(this).find(".inner_sub_box").hide().css({
				'opacity': '0',
				'height': '0',
				'display': 'block',
			})
		}
	});
}

window.addEventListener("load", init);