$(document).ready(function() {

	var $max = $('span#max');
	var max = parseInt($max.text(), 10);

	function update() {

		var $count = $('span#char');
		var $textarea = $('textarea#content');

		var length = $textarea.val().length;

		if (length > max) {
			$count.parent().addClass('error');
			$textarea.addClass('error');
		} else {
			$count.parent().removeClass('error');
			$textarea.removeClass('error');
		}

		$count.text(length);
	}

	$('textarea#content').on('change', update);
	$('textarea#content').on('keyup', update);
});
