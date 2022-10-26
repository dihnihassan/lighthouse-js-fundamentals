const isOdd = function (num){ 
	return num % 2 !== 0;
} 

const oddAddress = isOdd()

console.log(isOdd(4));

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
