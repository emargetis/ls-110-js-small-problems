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
let lookUp = {
            };

//First Attempt
function fibonacciMem(n) {
  if (n <= 1) {
    return n;
  }
  
  let fibMinus1;
  let fibMinus2;
  
  if(lookUp.hasOwnProperty(String(n - 2))) {
    fibMinus2 = lookUp[String(n - 2)];
  } else {
    fibMinus2 = fibonacciMem(n-2);
    lookUp[String(n-2)] = fibMinus2;
  }
  
  if(lookUp.hasOwnProperty(String(n - 1))) {
    fibMinus1 = lookUp[String(n - 1)];
  } else {
    fibMinus1 = fibonacciMem(n-1);
    lookUp[String(n-1)] = fibMinus1;
  }

  return fibMinus1 + fibMinus2;
}


// function fibonacciMem(n) {
//   if (n <= 2) {
//     return 1;
//   } else if(lookUp[n]) {
//     return lookUp[n];
//   } else {
//     lookUp[n] = fibonacciMem(n - 1) + fibonacciMem(n - 2);
//     return lookUp[n];
//   }
// }

console.log(fibonacciMem(0));       // 1
console.log(fibonacciMem(1));       // 1
console.log(fibonacciMem(2));       // 1
console.log(fibonacciMem(3));       // 2
console.log(fibonacciMem(4));       // 3
console.log(fibonacciMem(5));       // 5
console.log(fibonacciMem(12));      // 144
console.log(fibonacciMem(20));      // 6765