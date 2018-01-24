console.log('Hello from external script');
$(document).ready(function(){

	$('.button').click(function(){
		console.log('click detected');
		$('h1').toggle();
	});

	$('.element').click(function(){
		console.log('element clicked');
		$(this).toggleClass('play');
		$(this).next().toggle();
	});

	$('h2').click(function(){
		var sample = $(this).text();
		console.log(sample);
		$('.a').text(sample).toggle();
		$('.b').toggle();
	});

});

