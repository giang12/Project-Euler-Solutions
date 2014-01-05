/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

var startTime = new Date();

function divisibleForAll(num,range){
	for(var x = 1; x < range + 1; x++){
		if( num % x !== 0)
			return false;
	}
	return true;
}

var num = 20;
while(divisibleForAll(num,20) === false){
	num++;
}

console.log(num);
console.log("Elapsed Time: " + (new Date() - startTime) / 1000 +" s");