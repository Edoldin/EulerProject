//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

//Find the largest palindrome made from the product of two 3-digit numbers.
const {isPalindrome} = require('./common/palindrome');
palindromes=[];
for(var k=999;k>1;k--){
    for(var j=k;j>1;j--){
        if (isPalindrome(k*j)) palindromes.push(k*j);
    }
}
console.log(Math.max.apply(null, palindromes));
