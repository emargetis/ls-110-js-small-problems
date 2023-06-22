/*
Problem:
  -input: 6 different numbers
  -output: string containing the the list of numbers and whether it is contained
  -explicit:
    - get six numbers from user
    - determin if last number is in the first 5 numbers
    - state whether that's true
Examples / test cases:
  - given in problem statement
Data structure:
  array
Algorithm:
  1. Ask user for value and push it to array (repeat 6 times)
    a. create an array for verbiage of template literal and put this in the prompt function
  2. Look for last value in array
    a. if there output a string confirming
    b. if not there output a string denying
*/

let readline = require('readline-sync');
let verbiage = ['1st', '2nd', '3rd', '4th', '5th', 'last' ];
let inputArray = [];

for (let i = 0; i < 6; i+= 1) {
  inputArray.push(readline.question(`Enter the ${verbiage[i]} number: `));
}

let lastNumber = inputArray.pop();

if (inputArray.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${inputArray.join()}.`);
} else {
  console.log(`The number ${lastNumber} does not appear in ${inputArray.join()}.`);
}

function isIncluded(arr, val) {
  return arr.some(element => element > val);
}