$(window).on("scroll", function () {
	if ($(window).scrollTop() > 50) {
		$(".header").addClass("active");
	} else {
		$(".header").removeClass("active");
	}
});
let vid = document.getElementById("teaser-vid");
function playVideo() {
	vid.play();
}
function isValidEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
document.getElementById("card-1").addEventListener("click", myFunction1);
document.getElementById("card-2").addEventListener("click", myFunction2);
document.getElementById("card-3").addEventListener("click", myFunction3);
document.getElementById("percentage").addEventListener("click", myFunction4);
function myFunction1() {
	document.getElementById("card-1").innerHTML = "Ocena: ☆☆☆☆☆";
}
function myFunction2() {
	document.getElementById("card-2").innerHTML = "Ocena: ☆☆☆☆☆";
}
function myFunction3() {
	document.getElementById("card-3").innerHTML = "Ocena: ☆☆☆☆";
}
function myFunction4() {
	document.getElementById("percentage").innerHTML = "Vizuelno zapanjujući i narativno zadovoljavajući, Blade Runner 2049 produbljuje i proširuje priču svog prethodnika dok uspeva i kao samostalno impresivno filmsko dostignuće.";
}
