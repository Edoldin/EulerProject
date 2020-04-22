//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
const { isPrime } = require('mathjs');


var numberlist=[];
var divisorList=[];
for(let k=1;k<=20;k++) numberlist.push(k);

for(let k=0;k<numberlist.length;k++){
    var j=2;
    while(numberlist[k]!=1)
    {
        while(!isPrime(j))  j++
        if(numberlist[k]%j==0)
        {
            numberlist=numberlist.map(e=>e%j==0?e/j:e)
            divisorList.push(j)
        }
        else   j++
    }
}

console.log(divisorList.reduce((accumulator,element)=> accumulator*element));

