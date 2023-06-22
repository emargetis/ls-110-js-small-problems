/*
Problem:
  - input: two arrays of numbers
  - output: one array of numbers (see explicit rules for number values)
  - exlicit rules:
    - tThe return array should contain the product of each pair of numbers from the arguments that have the same index
    - The argument arrays contain the same number of arguments
  - implicit rules:
  - questions:
Examples / test cases:
Data structure: arrays
Algorithm:
  - intake 2 arrays
  - declare a new blank array (or use map)
  - loop through one array and multiply values together
  
*/

function multiplyList(arr1, arr2) {
  return arr1.map((num, index) => {
    return num * arr2[index];
  });
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]