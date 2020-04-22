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