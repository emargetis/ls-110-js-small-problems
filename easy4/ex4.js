/*
Problem:
  -input: number
  -output: boolean
  -explicit rules: 
    - palindrome reads same forwards and backwards
  -implicit rules:
    - string inlcudes non-alphabetic characters
  -questions:
Examples / Test cases:
  isPalindromicNumber(34543);        // true
  isPalindromicNumber(123210);       // false
  isPalindromicNumber(22);           // true
  isPalindromicNumber(5);            // true
Data structure: string array
Algorithm:
  - accept number
  - convert number to string
  - convert string to array
  - reverse array
  - join array back together and compare to original number string
  - return boolean

*/


function isPalindromicNumber(num) {
  console.log(num.toString().split('').reverse().join(''));
  return num.toString() === num.toString().split('').reverse().join('');
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true

//leading 0s are not allowed as numbers...