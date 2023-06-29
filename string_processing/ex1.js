/*
Problem:
-input: string
-output: boolean
-explicit rules:
-implicit rules:
-questions:
Examples / test cases: see below
Data structures:
Algorithm:
*/


function isUppercase(str) {
  return str.toUpperCase() === str;
}


console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true