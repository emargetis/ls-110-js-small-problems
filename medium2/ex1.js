/*
Problem:
-input: string of characters
-output: object
-explicit rules:
  - input string will contain at least one letter
-implicit rules:
  - space characters count against the denominator
-questions:
Examples:
Data structure:
Algorithm:
- create a function that accepts one argument
- determine length of string and save it as denominator variable
-iterate through each character
  - count number of upper case characters
  - count number of lowercase characters
  - count number of 
- return object literal with values calculated
  - number of each / denominator

*/

function letterPercentages(str) {
  let denominator = str.length;
  let upperCount = 0;
  let lowerCount = 0;
  let neitherCount = 0;
  
  for (let i = 0; i < denominator; i += 1) {
    if (str[i].toLowerCase() === str[i].toUpperCase()) {
      neitherCount += 1;
    } else if (str[i] === str[i].toUpperCase()) {
      upperCount += 1;
    } else if (str[i] === str[i].toLowerCase()) {
      lowerCount += 1;
    }
  }
  
  
  return { 
          lowercase: ((lowerCount / denominator) * 100).toFixed(2),
          uppercase: ((upperCount / denominator) * 100).toFixed(2),
          neither: ((neitherCount / denominator) * 100).toFixed(2),
          };
}


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }