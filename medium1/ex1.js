/*
Problem:
-input: array reference
-output: new array reference with first element moved to the end of the array
-explicit rules:
  - if input is not an array, return undefined
  - if input is an empty array, return empty array
-implicit rules:
-questions:
Examples:
Data structure:
Algorithm:
-create function that accepts argument
-check if argument is an array, if not, return undefined (guard clause)
-check if argument is empty array, if so, return empty array (guard clause)
-create copy of array
-remove first element from copy of array
-append above element to end of copy of array
-return array copy
*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];
  
  let arrCopy = [...arr];
  let firstEle = arrCopy.shift();
  arrCopy[arrCopy.length] = firstEle;
  
  return arrCopy;
}


console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]