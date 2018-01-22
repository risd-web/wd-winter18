var text = "some text";

var x = 1;
var y = "1";
var z = true;

console.log("x!=y is " + (x!=y) + " y!=z is " + (y!=z));
console.log("x!==y is " + (x!==y) + " y!==z is " + (y!==z));

// var width;
// var height;
var area;

function getArea(x,y){
	area = x * y;
	console.log(area);
} // gets area of rectangle

// getArea(4,5);

var fruits = [
	"pineapple",
	"banana",
	"strawberry",
	"apple",
	"tomato",
	"mango"
];

console.log("number of fruits: " + fruits.length);

for(var j = 0; j<fruits.length; j++){
	console.log(fruits[j]);
}

$(document).ready(function(){

	var elem = '<div class="element"></div>';

	for(var i = 0; i<50; i++){
		// console.log(i);
		$('.elementcontainer').append(elem);
	}


	//if the user clicks #makelist
	$('#makelist').click(function(){
		console.log('list clicked');
		//then get list
		var fruitList = fruits;

		//display every item in list
		for(var k = 0; k<fruitList.length; k++){
			console.log(fruitList[k]);
			/* for each item, format item as list
			 then display add it in ul.fruits*/

			$('ul.fruits').append('<li>' + fruitList[k] + '</li>');
		}
	});
	
	
		
		


	// $('.button').click(function(){
	// 	console.log('click detected');
	// 	$('h1').toggleClass('reveal');
	// });

	// $(".element").click(function(){
	// 	console.log("clicking element");
	// 	$(this).toggleClass('play');
	// });

});

