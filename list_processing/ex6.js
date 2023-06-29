/*
Problem:
-input: string
-output: array of strings containing palindromes
-explicit rules:
  - palindrome = each substring reads the same forward and backward
  - strings should be sorted by their order of appearance in the input string
  - duplicate substrings should be included multiple times
  - this is case sensitive meaning that 
-implicit rules:
-questions:
Examples / test cases: see below
Data structures:
Algorithm:
- declare empty palindrome array
- get list of all substrings by calling the substring function
- iterate through each substring:
  - find midpoint of substring and divide substring into two smaller substrings of equal length
    - if odd number of characters, include everything up to middle character in first smaller substring and everything after middle character in second smaller substring
    - if even number of characters, include total number of letters / 2 in first smaller substring
  - compare a reverse version of the second substring to the first substring
    - if equal push to palindrome array
  - return array
*/

function leadingSubstrings(str) {
  let arr = [];
  
  str.split('').reduce((accum, element) => {
    arr.push(accum + element);
    return accum + element;
  }, '');
  
  return arr.sort();
}


function substrings(str) {
  let substrings = [];
  for (let i = 0; i < str.length; i++) {
    substrings.push(leadingSubstrings(str.slice(i, str.length - 1)));
  }
  
  return substrings.flat();
}

function palindromes(str) {
  let palindromeSubs = [];
  let subs = substrings(str);
  
  subs.forEach(sub => {
    if (sub === sub.split('').reverse().join('') &&
        sub.length > 1) {
      palindromeSubs.push(sub);
    } 
  });
  
  return palindromeSubs;
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]
console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]
console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]