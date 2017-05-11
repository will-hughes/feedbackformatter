$(document).ready(function() {

	var $el = $('textarea#content');
	var $copy = $('button.js-clipboard');

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

	function copied() {
		$copy.addClass('success');
		setTimeout(function () {
			$copy.removeClass('success');
		}, 2000);
	}

	function getText() {
		return mangle($el.val());
	}

	function onClick() {
		var content = getText();

		$el.val(content);
		$el.trigger('input');

		$('html, body').scrollTop( $(document).height() );
	}

	autoresize();

	var clipboard = new Clipboard('.js-clipboard', {
		text: function () {
			var content = getText();
			var mangled = content.replace(/\n\n/g, '\<br/>\<br/>\n');
			console.log(mangled);
			return mangled;
		}
	});
	clipboard.on('success', copied);

	$('button').on('click', onClick);
});
