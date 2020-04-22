//The sum of the squares of the first ten natural numbers is,

//1^2+2^2+...+10^2=385
//The square of the sum of the first ten natural numbers is,

//(1+2+...+10)^2=55^2=3025
//Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025−385=2640.

//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
const num=100
var sum=0
for(var a=1;a<=num;a++){
    for(var b=1;b<=num;b++){
        sum+=(a==b)?0:a*b
    }
}
console.log(sum)