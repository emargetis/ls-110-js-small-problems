/*
Problem:
-input: array of at least two numbers
-output: array of same numbers in ascending order
-explicit rules:
  - sort in place, meaning we are mutating the array
-implicit rules:
-questions:
Examples:
Data structure:
Algorithm:
- set a switch to 0 that is incremented each time to you make a switch on a pass from left to right of an array
- iterate through array from left to right
  - compare index 0 with index 1. If 1 is less than 0, then switch values
  - compare index 1 with index 2. If 2 is less than 1, then switch values
  - if switch was triggered then sort again
  - if switch was not triggered then end and return array

*/

function bubbleSort(arr) {
  
  while (true) {
    let swaps = 0;
    let passes = 0;
    
    for (let i = 0; i < (arr.length - passes); i ++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
        swaps += 1;
      }
    }
    
    passes += 1;
    if (swaps === 0) break;
  }
  
  return arr;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]