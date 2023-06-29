/*
Problem:
-input: number representing the index of fibonacci term desired
-output: Number representing the number at the index given
-explicit rules:
-implicit rules:
-questions:
Examples:
Data structure:
Algorithm:
- create a function that accepts one argument
- create a baseline condition where a value is returned
- create a call to fibonacci twice if condition not met
  - modify the value passed into fibonacci

*/

function fibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765