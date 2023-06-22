/*
Problem:
  -input: positive integer
  -output: array containing all integers between 1 and the argument inclusive in ascending order
  -implicit rules:
  -explicit rules:
  -questions:
Examples / test cases: see below
Data structure:
Algorithm:
 - intake number
 - declare an empty array
 - loop from 1 to the digit
    - push each iterator to the empty array

*/

function sequence(num) {
  let outputArr = [];
  
  for (let i = 1; i <= num; i += 1) {
    outputArr.push(i);
  }
  
  return outputArr;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]