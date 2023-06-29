/*
Problem:
-input: two arguments - long number, integer representing # of digits to rotate one space
-output: long number
-explicit rules:
  - the number selected should be moved to the end 
-implicit rules:
  - count should never exceed the length of digits
-questions:
Examples:
Data structure:
Algorithm:
-create function that accepts 2 arguments - long number and one digit
-turn long number into a string
-turn string into an array of each digit
-remove given digit based on the second argument
-append removed digit to end of array
-join array into string
-convert string into number
-return number
*/

function rotateRightmostDigits(number, index) {
  let numArr = [...String(number)];
  let removedNum = numArr.splice(-index, 1);
  
  return Number(numArr.concat(removedNum).join(''));
  
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917