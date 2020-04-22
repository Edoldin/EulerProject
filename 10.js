//The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

//Find the sum of all the primes below two million.
const {isPrime}=require("mathjs")
var sum=2,
    prime=3;
while(prime<2*Math.pow(10,6)){
    sum+=prime;
    prime+=2;
    while(!isPrime(prime))  prime+=2;
}
console.log(sum)