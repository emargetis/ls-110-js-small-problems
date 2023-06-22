/*
Problem:
  - Input: number
  - Output: string
  - Questions:
  - Explicit rules:
    - cannot use built in coversion methods:
      - String()
      - Number.toString()
      - '' + number
  - Implicit rules:
Example / test cases:
  integerToString(4321);        // "4321"
  integerToString(0);           // "0"
  integerToString(5000);        // "5000"
  integerToString(1234567890);  // "1234567890"
Algorithm:
  - Accept number
  - Declare empty string
  - Isolate each digit by dividing by increasing powers of 10 until the number is equal to 0
  - Match that number in an object with a lookup
  - Append value to a string
  
*/

function integerToString(num) {
  let outputString = '';
  let remainder = 0;
  const DIGITS = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ];
  
  
  do {
    remainder = num % 10;
    outputString = DIGITS[remainder].concat(outputString);
    num = (num - remainder) / 10;
  } while (num > 0);
  
  return outputString;
}

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"