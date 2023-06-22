/*
Problem:
  - input: array
  - output: number representing the average all elements in the array
  - exlicit rules:
    - output value should be rouded down to the nearest integer (floor)
    - arrays will never be empty
    - number in array will always be positive
  - implicit rules:
    - arithmetic average = sum of elements / # of elements
  - questions:
Examples / test cases:
Data structure: arrays
Algorithm:
  - intake array
  - find sum of all elements
  - divide sum by number of elements
  - round down above # to nearest int and return this value
  
*/

function average(arr) {
  let sum = arr.reduce((sum, ele) => sum += ele, 0);
  return Math.floor(sum / arr.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40