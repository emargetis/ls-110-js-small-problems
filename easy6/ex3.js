/*
Problem:
  -input: positive number
  -output: reversed positivenumber
  -implicit rules:
    - leading zeroes will get dropped
  -explicit rules:
  -questions:
Examples / test cases: see below
Data structure:
Algorithm:
 - intake number
 - convert number to string
 - put string into array
 - reverse array
 - convert array back to string
 - convert string back to number and return

*/

function reverseNumber(num) {
  return Number(String(num).split('').reverse().join(''));
} 


console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1