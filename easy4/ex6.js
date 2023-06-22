/*
Problem:
  -input: string
  -output: object that shows count of words of different sizes
  -explicit rules: 
    - words consisted of any sequence of non-space characters
  -implicit rules:
    - return blank object if input is empty
  -questions:
Examples / Test cases:
  wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
  wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
  wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
  wordSizes('');                                            // {}
Data structure: array
Algorithm:
  - accept string
  - split string into an array using spaces as separator
  - Iterate through each string
    - determine length of string
    - check if length already exists in object
      -if so increment count in object
      -add length to array and set count to 1
  - return object
*/

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}

function wordSizes(inputString) {
  let wordArray = inputString.split(' ');
  let outputObject = {};
  
  if (inputString === '') return outputObject;
  
  wordArray.forEach(word => {
    let wordLength = String(word.length);
    
    if (Object.keys(outputObject).includes(wordLength)) {
      outputObject[wordLength] += 1;
    } else {
      outputObject[wordLength] = 1;
    }
  });
  
  return outputObject;
}