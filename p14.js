/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
 */

var startTime = new Date();
var MAX = 1000000;

var result = {length: 1, num: 1};
var num;
var tempLength = 1;

while(MAX > 1){
  
 num = MAX;
 tempLength = 1;
  
 while(num !== 1){
   if(num % 2 === 0)
     num = num / 2;
   else
     num = num * 3 + 1;
   tempLength++;
 }
  
 if(tempLength > result.length){
   result.length = tempLength;
   result.num = MAX;
 }
  
 MAX--;
}

console.log("Terms: "+ result.length +" | Number: "+ result.num);
console.log("Elapsed Time: " + (new Date() - startTime) / 1000 +" s");