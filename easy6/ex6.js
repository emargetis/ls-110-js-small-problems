/*
Problem:
  -input: two integers - first is a count, the second is the starting number of a sequence your function will create
  -output: array of x multiples of the second argument
  -implicit rules:
    - we include the original number
  -explicit rules:
    -count will be greater than or equal to 0
    - starting number can be any int, pos or neg
    - if array is 0, it should return empty array
  -questions:
Examples / test cases: see below
Data structure:
Algorithm:
  - intake arguments - count and base
  - declare blank array
  - loop from 1 to count
    - add index of iterator * base to array
  - return array

*/

function sequence(count, base) {
  let outputArr = [];
  
  for (let i = 1; i <= count; i += 1) {
    outputArr.push(i * base);
  }
  
  return outputArr;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []