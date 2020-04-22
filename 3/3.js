//The prime factors of 13195 are 5, 7, 13 and 29.

//What is the largest prime factor of the number 600851475143

/*function primeFactors(n){
    lastFactor=1;
    var factors=[]
    while (n!=1){
        for(k=lastFactor)
    }
}^*/

class Primes extends Array {
    constructor(n) {
        super()
        for(let k=3;k<=n;k++){
            var prime=true
            var j=0
            while (prime && j<this.length){
                if(k%this[j]==0)    prime=false
                j++
            }
            if(prime) this.push(k)
        }
    }
    static lastN=0;
    if
}
console.log(new Primes(100))