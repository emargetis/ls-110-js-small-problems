/*
Problem:
-input: array of numbers
-output: returns sum of the sums of each leading subsequence in that array
-explicit rules:
-implicit rules:
-questions:
Examples / test cases: see below
Data structures:
Algorithm:
*/

function sumOfSums(arr) {
  let overallSum = 0;
  
  for (let i = 1; i <= arr.length; i++) {
    overallSum += arr.slice(0, i).reduce((sum, num) => sum + num); 
  }
  
  return overallSum;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35