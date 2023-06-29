/*
Problem:
-Input: array of numbers 0-19
-Output: array of numbers 0-19 sorted according to english pronunciation
-Explicit rules:
-Implicit rules:
-Questions:
Examples: see below
Data structure: array
Algorithm:
-create an object to map the name to the number (key is name)
-get object keys as an array
-sort object keys alphabetically
-create blank array
-iterate through sorted object keys and push corresponding value to blank array
-return blank array pointer
*/

function alphabeticNumberSort(arr) {
  let numericMapping = {
    0: 'zero',
    1: 'one',
    2: 'two', 
    3: 'three',
    4: 'four', 
    5: 'five', 
    6: 'six', 
    7: 'seven', 
    8: 'eight', 
    9: 'nine', 
    10: 'ten', 
    11: 'eleven', 
    12: 'twelve', 
    13: 'thirteen', 
    14: 'fourteen', 
    15: 'fifteen', 
    16: 'sixteen', 
    17: 'seventeen', 
    18: 'eighteen', 
    19: 'nineteen'
  };
  
  return arr.slice().sort((a, b) => {
    if (numericMapping[a] < numericMapping[b]) {
      return -1;
    } else if (numericMapping[a] < numericMapping[b]) {
      return 1;
    } else {
      return 0;
    }
  });
}



console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]