//A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

//a^2 + b^2 = c^2
//For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

//There exists exactly one Pythagorean triplet for which a + b + c = 1000.
//Find the product abc.
const {pow}=Math
var a=1,b=1;
c=998
while(pow(c,2)!=(pow(a,2)+pow(b,2))){
    a++
    c=1000-a-b
    if(c<=a){b++;a=1}
}
console.log(a,"*",b,"*",c,"=",a*b*c,)