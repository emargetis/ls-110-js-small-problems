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

function staggeredCase(str, ignoreNonAlpha = true) {
  let upperSignal = 1;
  
  return [...str].map((char, idx) => {
    if (char.toUpperCase() === char.toLowerCase()) {
      return char;
    } else if (upperSignal === 1) {
      upperSignal = 0;
      return char.toUpperCase();
    } else if (upperSignal === 0) {
      upperSignal = 1;
      return char.toLowerCase();
    }
  }).join('');
}

function staggeredCaseFurtherExp(str, ignoreNonAlpha = true) {
  let upperSignal = 1;
  
  if (ignoreNonAlpha === true) {
    return [...str].map((char, idx) => {
    if (idx % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join('');
  } else {
    return [...str].map((char, idx) => {
      if (char.toUpperCase() === char.toLowerCase()) {
        return char;
      } else if (upperSignal === 1) {
        upperSignal = 0;
        return char.toUpperCase();
      } else if (upperSignal === 0) {
        upperSignal = 1;
        return char.toLowerCase();
      }
    }).join('');
    
  }
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"