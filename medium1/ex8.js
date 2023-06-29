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

*/


function fibonacci(n) {
  let fib1 = 1;
  let fib2 = 1;
  let fibCurrent;
  
  if (n < 3) return 1;
  
  for (let i = 3; i <= n; i++) {
    fibCurrent = fib1 + fib2;
    
    fib2 = fib1;
    fib1 = fibCurrent;
    
  }
  
  return fibCurrent;
}

// function fibonacci (digit) {
//   let previousNum = 0;
//   let currentNum = 1;

//   for (let i = 1; i < digit; i += 1) {
//     currentNum += previousNum;
//     previousNum = currentNum - previousNum;
//   }

//   return currentNum;
// }

console.log(fibonacci(2));
console.log(fibonacci(5)); 
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050