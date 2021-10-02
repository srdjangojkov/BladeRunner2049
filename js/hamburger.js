jQuery(document).ready(function(){
	$( ".cross" ).hide();
	$( ".hamburger" ).click(function() {
		$( ".navbar" ).slideToggle( "slow", function() {
			$( ".hamburger" ).hide();
			$( ".cross" ).show();
		});
	});

	$( ".cross" ).click(function() {
		$( ".navbar" ).slideToggle( "slow", function() {
			$( ".cross" ).hide();
			$( ".hamburger" ).show();
		});
	});
});