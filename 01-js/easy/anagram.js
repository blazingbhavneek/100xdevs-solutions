/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let mp = new Array(300).fill(0);
  for(let i=0; i<str1.length; i++){
    mp[str1.charAt(i).toLowerCase().codePointAt(0)]++;
  }
  for(let i=0; i<str2.length; i++){
    mp[str2.charAt(i).toLowerCase().codePointAt(0)]--;
  }
  for(let i=0; i<300; i++){
    if(mp[i]!==0){
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
