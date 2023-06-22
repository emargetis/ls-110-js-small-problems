/*
Problem:
  - Input: string
  - Output: string where the first letter and letter of each word is swapped
  - Questions:
  - Explicit rules:
    - every word has at least one letter
    - each string contains at least one word
    - no leading, trailing or repeated spaces
  - Implicit rules:
Example / test cases:
  swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
  swap('Abcde');                          // "ebcdA"
  swap('a');                              // "a"
Data structure: string to array
Algorithm:
  - Accept string
  - Convert string to array
  - For each word in the array:
    - get the first letter
    - get the last letter
    - get everything in between and concatenate
  - Join array back together in one string
  - Return string
  
*/

function swap(str) {
  let wordsArray = str.split(' ');
  
  let modifiedWords = wordsArray.map( word => {
    if (word.length === 1) return word;
  
    return word[word.length - 1] + word.slice(1, -1) + word[0];
  });
  
  return modifiedWords.join(' ');
  
  
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"

