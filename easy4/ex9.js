/*
Problem:
  - Input: string
  - Output: number
  - Questions:
  - Explicit rules:
    - cannot use bid in coversion methods:
      - parseInt
      - Number
      - String
  - Implicit rules:
Example / test cases:
  console.log(stringToInteger("4321") === 4321); // logs true
  console.log(stringToInteger("570") === 570); // logs true
Data structure:
Algorithm:
  - Accept string
  - For each character, multiply the result by decreasing powers of 10 starting with length and add it to sum
  - return number
  
*/

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

function stringToInteger(inputString) {
  let number = 0;
  
  for (let i = 0; i < inputString.length; i += 1) {
    let additiveAmount = inputString[i] * 10 ** (inputString.length - (1 + i));
    
    number += additiveAmount;
  }
  
  return number;
}



console.log(hexadecimalToInteger('4D9f'));

function hexadecimalToInteger(inputString) {
  let number = 0;
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
  };

  
  for (let i = 0; i < inputString.length; i += 1) {
    console.log(inputString[i]);
    let additiveAmount = DIGITS[inputString[i].toUpperCase()] * 16 ** (inputString.length - (1 + i));
    
    number += additiveAmount;
  }
  
  return number;
}

  