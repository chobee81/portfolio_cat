// JavaScript Document


$(document).ready(function() {
    $('div#popup').hide();
	function setCookie(name, value, expiredays) {
		var todayDate = new Date();
		todayDate.setDate( todayDate.getDate() + expiredays );
		document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
	};

	function closeWin() {
		if ( $('#chkbox').prop('checked') == true){
			setCookie( 'maindiv', 'done', 1 );
		}
		$('div#popup').slideUp('fast');
	};

	cookiedata = document.cookie;
	if(cookiedata.indexOf('maindiv=done') < 0 ){
		$('div#popup').slideDown();
	}else{
		$('div#popup').hide();
	}

	$('div#popup a').click(function() {
		closeWin();
	});
	$(window).scroll(function() {
		$('div#popup').hide();
    });
});
