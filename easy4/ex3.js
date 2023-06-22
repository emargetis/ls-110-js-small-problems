/*
Problem:
  -input: string
  -output: boolean
  -explicit rules: 
    - case DOES NOT matters
    - non-alphabetic characters should be ignored
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
  2. convert string to lowercase
  2. split string into an array
  3. filter array for only alphanumeric characters
  4. join array back to create string
  4. create copy of string before reversal
  3. pass string into helper function and return value

*/

function isRealPalindrome(str) {
  let strFiltered = filterNonLetterNumbers(str.toLowerCase());
  
  return isPalindrome(strFiltered);
}

function filterNonLetterNumbers(str) {
  return str.split('').filter(char => isNumberLetter(char)).join('');
}

function isNumberLetter(char) {
  return 'abcdefghijklmnopqrstuvwxyz1234567890'.includes(char);
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false