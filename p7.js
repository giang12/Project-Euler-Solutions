/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
 */

//building prime list, use more space, less time.

var startTime = new Date();

var primeList = [];
var num = 1;

function isPrime(num){

	if(num === 2){
		return true;
	}

	for(var x = 0; x < primeList.length; x++){
		if(num % primeList[x] === 0)
			return false;
	}

	return true;
}

while(primeList.length < 10001){
	num++;
	if(isPrime(num))
		primeList.push(num);
	
}

console.log(num);
console.log("Elapsed Time: " + (new Date() - startTime) / 1000 +" s");