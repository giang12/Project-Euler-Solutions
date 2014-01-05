/*
215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 21000?
 */

/*
This is a problem requiring storage of big number (similar to #13)
With big number storage solution this problem becomes trivical

php 1 liner
array_sum(str_split(bcpow(2,1000)))
 */