/*
Problem:
-input: string
-output: boolean
-explicit rules:
-implicit rules:
-questions:
Examples / test cases: see below
Data structures:
Algorithm:
*/

function letterCaseCount(str) {
  let lowercaseCount = 0;
  let uppercaseCount = 0;
  let neitherCount = 0;
  
  [...str].forEach(char => {
    if (char.toUpperCase() === char.toLowerCase()) {
      neitherCount += 1;
    } else if (char === char.toLowerCase()) {
      lowercaseCount += 1;
    } else if (char === char.toUpperCase()) {
      uppercaseCount += 1;
    }
  })
  
  return {lowercase: lowercaseCount, uppercase: uppercaseCount, neither: neitherCount};
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }