/*
Problem:
-input: word string
-output: boolean representing whether the word can be spelled with given word blocks
-explicit rules:
  - blocks are pairs of words
  - blocks limit the words  you can spell bc you can only use 1 letter from each block, not both
  - letters are case insensitive
  - you can only use each block once
-implicit rules:
-questions:
Examples: see below
Data structure: array for eligible characters, nested array to represent the pairs
Algorithm:
- create eligible letters array
- iterate through word character by character (after making it all uppercase)
  - check to make sure the letter is in the eligible character array
    - if so, check to see if it's pair has been eliminated from the array
      - if not, eliminate it frome the eligible characters array
      - if so, do nothing
    - if not, return exit program and return false
*/

// //Original Solution
// function isBlockWord(str) {
//   let wordPairs = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'], ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'], ['V', 'I'], ['L', 'Y'], ['Z', 'M']];
//   let eligibleWords = wordPairs.flat();
//   let strUp = str.toUpperCase();
  
//   for (let i = 0; i < strUp.length; i += 1) {
//     if (eligibleWords.includes(strUp[i])) {
//       let pairLetter = wordPairs.filter(pair => {
//                         return pair[0] === strUp[i] || pair[1] === strUp[i];
//                       })[0].filter(letter => letter !== strUp[i])[0];
//       if (eligibleWords.includes(pairLetter)) {
//         eligibleWords.splice(eligibleWords.indexOf(pairLetter), 1);
//       }
//       eligibleWords.splice(eligibleWords.indexOf(strUp[i]), 1);
//     } else {
//       return false;
//     }
//   }
  
//   return true;
// }

function isBlockWord(str) {
  let wordPairs = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'], ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'], ['V', 'I'], ['L', 'Y'], ['Z', 'M']];
  let eligibleWords = wordPairs.flat();
  let strUp = str.toUpperCase();
  
  for (let i = 0; i < strUp.length; i += 1) {
    if (eligibleWords.includes(strUp[i])) {
      let pair = wordPairs.filter(pair => {
                        return pair[0] === strUp[i] || pair[1] === strUp[i];
                      })[0];
      if (eligibleWords.includes(pair[0])) {
        eligibleWords.splice(eligibleWords.indexOf(pair[0]), 1);
      }
      if (eligibleWords.includes(pair[1])) {
        eligibleWords.splice(eligibleWords.indexOf(pair[1]), 1);
      }
    } else {
      return false;
    }
  }
  
  return true;
}


console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('juju'));       // false
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false