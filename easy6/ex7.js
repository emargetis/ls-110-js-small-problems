/*
Problem:
  -input: string argument
  -output: new string containing words from string arg in reverse order
  -implicit rules:
    - blank should return blank string
  -explicit rules:
  -questions:
Examples / test cases: see below
Data structure:
Algorithm:
  - intake string
  - convert string to array of words
  - reverse array
  - join array back together into string

*/

function reverseSentence(str) {
  return str.split(' ').reverse().join(' ');
}


console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"