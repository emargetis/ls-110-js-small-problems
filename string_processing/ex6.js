/*
Problem:
-input: string
-output: string with case staggered
-explicit rules:
  -every other character starting from first should be capitalized
  -every other character starting from second should be lowercase
-implicit rules:
-questions:
Examples / test cases: see below
Data structures:
Algorithm:
*/

function staggeredCase(str) {
  return [...str].map((char, idx) => {
    if (idx % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"