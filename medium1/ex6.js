/*
Problem:
-input: number of digits in fibonacci number
-output: index of first fibonacci number that has the number of digits specified by the argument
-explicit rules:
  - first fibonnaci number has an index of 1
-implicit rules:
-questions:
Examples:
Data structure:
Algorithm:
-create function which intakes argument of value bigint
-declare variables for current fibonnaci number and trailing fibonacci number
-declare a counter variable
-make a for loop that checks length of current fibonnaci number
-break loop and return value of counter

*/

function findFibonacciIndexByLength(len) {
  let firstFib = 1n; //current
  let secondFib = 1n; //trailing
  let currentFib;
  let index = 2n;

  
  while (true) {
    currentFib = firstFib + secondFib;
    index += 1n;
    
    if (BigInt(String(currentFib).length) === len) return index;
    
    secondFib = firstFib;
    firstFib = currentFib;
  }
}



console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.