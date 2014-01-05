/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
 */

// https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

var startTime = new Date();

var num = 600851475143;
var x = 2;
while( x * x < num){
    while (num % x === 0)
        num = num / x;
    x = x + 1;
}
console.log(num);
console.log("Elapsed Time: " + (new Date() - startTime) / 1000 +" s");