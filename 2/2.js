var max=4*Math.pow(10,6);
var sum=0;
var n1=1;
var n2=2;
while(n2<max)
{
    sum+=n2%2==0?n2:0
    const n3=n2;
    n2=n1+n2;
    n1=n3;
}
console.log(sum);