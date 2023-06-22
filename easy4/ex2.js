/*
Problem:
  -input: string
  -output: boolean
  -explicit rules: 
    - case matters
    - non-alphabetic characters matter
  -implicit rules:
    - string inlcudes non-alphabetic characters
  -questions:
Examples / Test cases:
  isPalindrome('madam');               // true
  isPalindrome('Madam');               // false (case matters)
  isPalindrome("madam i'm adam");      // false (all characters matter)
  isPalindrome('356653');              // true
Data structure: string
Algorithm:
  1. accept string
  2. split string into an array
  3. reverse array
  4. join array back
  5. compare it to the original string using strict equality

*/

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true