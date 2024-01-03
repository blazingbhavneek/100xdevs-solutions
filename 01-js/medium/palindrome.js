/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let n = str.length;
  let i =0;
  while(i<n){
    if(str.charAt(i)!==str.charAt(n-i-1)){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
