/*
Problem:
  -input: string
  -output: string with every consonant repeated twice
  -implicit rules:
    - empty string should return empty string
    - numbers should not be doubled
  -explicit rules:
  -questions:
Examples / test cases: see below
Data structure:
Algorithm:
 - split string into array
 - use map to return new array with consonants doubled

*/

function doubleConsonants(str) {
  return str.split('').map(letter => {
    if ('bcdfghjklmnpqrstvwxyz'.includes(letter.toLowerCase())) {
      return letter + letter;
    }
    return letter;
  }).join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""            // ""

