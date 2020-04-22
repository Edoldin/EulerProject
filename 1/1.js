//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//Find the sum of all the multiples of 3 or 5 below 1000.

var sum=0;
var number=10000;
const maxM3=number/3;
const maxM5=number/5;
for(let k=0;k<maxM3;k++)
{
    sum+=k*3;
    if (k<maxM5 && k%3!=0) sum+=k*5;
}
console.log(sum);