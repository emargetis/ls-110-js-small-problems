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

function reverseWords(str) {
  return str.split(' ').map(word => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    }
    return word;
  }).join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"