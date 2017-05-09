$(document).ready(function() {

	var $el = $('textarea#content');

	function mangle(text) {
		return text.replace(/\t\t/g, '\t')	// Change TAB TAB to TAB
			.replace(/\t/g, '\n\n')	// Change TAB to Para Para
			.replace(/\.,/g, '. ')	// Change ., to .SPACE
			.replace(/\. ,/g, '. ')	// Change .SPACE, to .SPACE
			.replace(/\,\,/g, ', ')	// Change ,, to ,SPACE
			.replace(/-,/g, ' ')		// Change -, to SPACE
			.replace(/;,/g, ';')		// Change ;, to ;
			.replace(/:,/g, ':')		// Change :, to :
			.replace(/!,/g, '!')		// Change !, to !
			.replace(/\?,/g, '?')	// Change ?, to ?
			.replace(/  /g, ' ');	// Change SPACE SPACE to SPACE
	}

	function autoresize() {
		$el.attr('style', 'height:' + ($el.scrollHeight) + 'px;overflow-y:hidden;');
		$el.on('input', function () {
			this.style.height = 'auto';
			this.style.height = (this.scrollHeight) + 'px';
		});
	}

	function update() {
		var content = $el.val();

		$el.val(mangle(content));

		$el.trigger('input');

		$('html, body').scrollTop( $(document).height() );
	}

	autoresize();

	new Clipboard('.js-clipboard');

	$('button').on('click', update);
});
