/*
problem:
  -input: one array
  -output: number
  -implicit rules:
  -explicit rules:
    - There is one value in the array that is duplicated. Find it an return the value.
  -questions:
examples/test cases: see below
data structure:
algorithm:
  - intake array
  - loop through each value in the array
    - loop through the rest of the array
    - find a matching value
    - when value is found increment count
  - use for loops so we can exit the loops early instead of built in methods
  - return value
*/

function findDup(arr) {
  
  for (let i = 0; i < arr.length; i += 1) {
    let count = 0;
    
    for (let w = 0; w < arr.length; w += 1) {
      if (arr[i] === arr[w]) {
        count += 1;
      }
      
      if (count === 2) return arr[w];

    }
  }
}



console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73
