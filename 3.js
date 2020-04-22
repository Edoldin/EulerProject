//The prime factors of 13195 are 5, 7, 13 and 29.

//What is the largest prime factor of the number 600851475143

const { isPrime } = require('mathjs');
var n=600851475143
k=1
while(n!=1){
    k++
    while(!isPrime(k))  k++
    while(n%k==0)   n=n/k;
}
console.log(k);