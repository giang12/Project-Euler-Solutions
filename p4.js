/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
 */

var startTime = new Date();

function isPalindrome(num){
	num = num.toString();
    return num == num.split('').reverse().join('');
}

var largestPalind = 0;
var product;
for(var x = 100; x < 999 ; x++){
	for(var y = 100; y < 999; y++){
		product = x * y;
		if(isPalindrome(product) && product > largestPalind)
			largestPalind = product;
	}
}

console.log(largestPalind);
console.log("Elapsed Time: " + (new Date() - startTime) / 1000 +" s");