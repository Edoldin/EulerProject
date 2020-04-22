//By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

//What is the 10 001st prime number?
const { isPrime } = require('mathjs');
var count=2
var prime=3
while (count<10001){
    prime=prime+2
    if(isPrime(prime)) count++
}
console.log(prime)