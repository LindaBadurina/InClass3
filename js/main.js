$ ('.signin') .on ('click', function(e) {
	$('.modal').fadeIn ('350');

});

$ ('.close') .on ('click', function(e) {
	$('.modal').fadeOut ('350');
	
});


$ ('.submit') .on ('click', function(e) {
	$('input'). addClass ('error');
	
});


$ ('input') .on ('click', function(e) {
	$(this). removeClass ('error');
	
});

