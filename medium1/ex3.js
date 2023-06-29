/*
Problem:
-input: number
-output: max rotated number, meaning every digit has been rotated to the right once starting from the left
-explicit rules:
-implicit rules:
  - any leading 0s will get dropped
-questions:
Examples:
Data structure:
Algorithm:
-iterate through number place from left to right
  - for each number place, call the rotate rightmostdigit and pass in the length of the number
  - reassign number to number
  - iterate all the way to i
return final number
*/

function maxRotation(number) {
  for (let i = String(number).length; i > 0; i -= 1) {
    number = rotateRightmostDigits(number, i);
  }
  
  return number;
}


function rotateRightmostDigits(number, index) {
  let numArr = [...String(number)];
  let removedNum = numArr.splice(-index, 1);
  
  return Number(numArr.concat(removedNum).join(''));
  
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845