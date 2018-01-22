
var hashtag = "#";

for(var i = 0; i<8; i++){
	console.log(hashtag);	
	hashtag = hashtag + "#";
}

// i++ shorthand i = i+1

// x+=y shorthand for x = x + y


for(var j = 1; j<101; j++){
	if( (j%3 ==0)&&(j%5 == 0) ){
		console.log('FizzBuzz');
	}
	else if( (j%3) == 0 ){
		console.log('Fizz');
	}else if( (j%5) == 0 ){
		console.log('Buzz');
	}
	else{
		console.log(j);
	}
}


var board = "";

for(var k = 1; k<64; k++){
	console.log(k);
	if( (k%2)==0 ){
		console.log(k%2);
		board = board + "#";
	}if( !((k%2)==0) ){
		board = board + " ";
	}if( (k%9)==0){
		console.log(k%9);
		board = board + "\n";
	}
}

console.log('––––––');
console.log(board);

var chess = "";
for(var k = 1; k<64; k++){
	console.log(k);
	if( (k%9)==0){
		console.log(k%9);
		chess = chess + "\n";
	}else if( (k%2)==0 ){
		console.log(k%2);
		chess = chess + "#";
	}else{
		chess = chess + " ";
	}
	
}

console.log('––––––');
console.log(chess);