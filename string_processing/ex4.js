/*
Problem:
-input: string of words
-output: string with first letter of every word capitalized 
-explicit rules:
-implicit rules:
-questions:
Examples / test cases: see below
Data structures:
Algorithm:
*/

let wordCap = (str) => {
  return str.split(' ')
  .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
  .join(' ');
};

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'