/*
Problem:
-input: string
-output: string with case swapped
-explicit rules:
-implicit rules:
-questions:
Examples / test cases: see below
Data structures:
Algorithm:
*/

function swapCase(str) {
  return [...str].map((char) => {
    if (char.toUpperCase() === char) {
      return char.toLowerCase();
    } else if (char.toLowerCase() === char) {
      return char.toUpperCase();
    }
  }).join('');
}


console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"