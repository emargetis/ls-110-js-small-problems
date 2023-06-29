/*
Problem:
-input: sentence string
-output: string with word numbers replaced with digits
-explicit rules:
  -replace each number word with a digit
-implicit rules:
-questions:
Examples:
Data structure:
Algorithm:
-create function that accepts 1 argument which is a string of words
-declare object literal with key as word and digit as value
-convert string into an array of words
-iterate through each word in the array
  -if array is within a key within an objec
  -replace it with the value digit
-join array back together into string
- return string
*/

// //INCORRECT SOLUTION BECAUSE IT DOES NOT ADDRESS THE "four." because of the period
// function wordToDigit(str) {
//   let numberWordMap = {
//     zero: '0',
//     one: '1',
//     two: '2',
//     three: '3',
//     four: '4',
//     five: '5',
//     six: '6',
//     seven: '7',
//     eight: '8',
//     nine: '9'
//   };
  
//   return str.split(' ').map(word => {
//     if (numberWordMap.hasOwnProperty(word)) {
//       return numberWordMap[word];
//     } else {
//       return word;
//     }
//   }).join(' ');
// }


function wordToDigit(str) {
  let numberWordMap = {
    zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9'
  };
  
  for (let key in numberWordMap) {
    str = str.replaceAll(key, numberWordMap[key]);
  }
  
  return str;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."