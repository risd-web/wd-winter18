$(document).ready(function(){

	$('.button').click(function(){
		console.log('click detected');
		$('h1').toggleClass('reveal');
	});

	$(".element").click(function(){
		console.log("clicking element");
		$(this).toggleClass('play');
	});

});

