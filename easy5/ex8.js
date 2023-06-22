/*
Problem:
  - input: number
  - output: array containing each digit
  - exlicit rules:
    - the return elements should each be digits
  - implicit rules:
  - questions:
Examples / test cases:
Data structure: arrays
Algorithm:
  - intake number
  - convert number to string
  - split string into array of values
  
*/


function digitList(num) {
  let strArr = String(num).split('');
  
  return strArr.map(str => Number(str));
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]