/*
Problem:
  - input: array of integers
  - output: string of multiplicative avarage
  - exlicit rules:
    - multiplicative averages = product of terms / number of terms
    - string should be rounded to three digits
  - implicit rules:
  - questions:
Examples / test cases:
Data structure:
Algorithm:
*/

function multiplicativeAverage(arr) {
  let product = arr.reduce((prod, current) => prod *= current, 1);
  return (product / arr.length).toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"