// Scrolling animations for links in the header and footer
$(document).on('click', '.navbar-right > li > a, .list-inline > li > a', function(e) {
    $('html, body').animate({ scrollTop: $(e.target.hash).offset().top }, 1500, 'easeInOutQuad');
});

var amountScrolled = 300;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});

$('a.back-to-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});
