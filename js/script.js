$(window).on('scroll', function () {
	if ($(window).scrollTop() > 50) {
		$('.header').addClass('active');
	} else {
		$('.header').removeClass('active');
	}
});

function playVideo() {
	const vid = document.getElementById('teaser-vid');
	vid.play();
}

function isValidEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

function showRating(el) {
	el.innerText = 'Ocena: ☆☆☆☆☆';
}

function toggleReview() {
	let el = document.getElementById('percentage');
	let text = el.innerText;
	let review = 'Vizuelno zapanjujući i narativno zadovoljavajući, Blade Runner 2049 produbljuje i proširuje priču svog prethodnika dok uspeva i kao samostalno impresivno filmsko dostignuće.';
	el.innerText = text == review ? 'Ocena: ☆☆☆☆☆' : review;
}
