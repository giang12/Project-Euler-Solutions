/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?
 */
/*
Solution: Combinatorial Probabilities(read more here : http://www.math.uiuc.edu/~hildebr/408/408combinatorial.pdf)
This is a Combinatorial Probabilities problem
For grid size NxN
There are 2N moves needed to get to end point, in which N moves are down moves, N moves are right moves, the order of moves does not matter
Choose N combination from total 2N moves, order doesnt matter

Solution formula 
| n |   nPr       n!
|   | = --- = ----------
| r |    r!    r!(n-r)!
 */

var startTime = new Date();

function factorial(num){
	if (num === 0)
      return 1;
   else
      return (num * factorial(num-1));

}

//for 40 moves (2N) choose 20 moves (N), where order doesnt matter
var result = factorial(40)/(factorial(20)*(factorial(40-20)));

console.log(result);
console.log("Elapsed Time: " + (new Date() - startTime) / 1000 +" s");