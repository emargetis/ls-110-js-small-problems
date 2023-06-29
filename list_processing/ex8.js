/*
Problem:
-input: nested array where each subarray contains string and quantity
-output: one dimensional array containing repeated strings
-explicit rules:
-implicit rules:
-questions:
Examples / test cases: see below
Data structures:
Algorithm:
- intake nested array
- declare empty repeat array
- iterate through outer array
  - access the second element of each subarray to determine number of times to iterate
    - push the original string to a new array each time
- return repeat array
*/

function buyFruit(arr) {
  let repeatArr = [];
  
  arr.forEach(sub => {
    for (let i = 0; i < sub[1]; i++) {
      repeatArr.push(sub[0]);
    }
  });
  
  return repeatArr;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]