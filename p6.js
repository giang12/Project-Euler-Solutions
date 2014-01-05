/*
The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */

var startTime = new Date();



var sumOfSq = 0;
for(var x = 0 ; x < 101; x++){
	sumOfSq += x*x;
}

var sqOfSum = 0;
for(var x = 0 ; x < 101; x++){
	sqOfSum += x;
}
sqOfSum *= sqOfSum;

console.log(sqOfSum - sumOfSq);
console.log("Elapsed Time: " + (new Date() - startTime) / 1000 +" s");