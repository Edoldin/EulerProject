const { isPrime } = require('mathjs');

function divisors(n){
    const f=factorice(n);
    for(let k=1;k<f.length;k++) if(f[k]%f[k-1]==0) f[k]=f[k]*f[k-1]
    var d=[1];
    for(let k=0;k<f.length;k++){
        for(let j=k+1;j<f.length;j++){
            d.push(f[k]*f[j]);
        }
    }
    return d
}
function factorice(n){
    var f=[1];
    var prime=1;
    while(n!=1){
        prime++
        while(!isPrime(prime))  prime++
        while(n%prime==0){
            f.push(prime)
            n=n/prime;
        }   
    }
    return f
}


exports.factorice=factorice;
exports.divisors=divisors;