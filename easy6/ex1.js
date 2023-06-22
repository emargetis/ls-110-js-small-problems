/*
Problem:
  -input: string
  -output: string with every letter repeated twice
  -implicit rules:
    - empty string should return empty string
  -explicit rules:
  -questions:
Examples / test cases: see below
Data structure:
Algorithm:
*/

function repeater(str) {
  let outputStr = '';
  
  for (let i = 0; i < str.length; i += 1) {
    outputStr += str[i].repeat(2);
  }
  
  return outputStr;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""

