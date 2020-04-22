
function isPalindrome(number,base=10)
{
    const numStr=number.toString(base);
    var bool=true;
    const halflength=Math.floor((numStr.length)/2)
    for (let k=0; k<halflength;k++)
    {
        if (numStr[k]!=numStr[numStr.length-1-k]) bool=false;
    }
    return bool
}
exports.isPalindrome=isPalindrome;