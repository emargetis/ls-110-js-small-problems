/*
Problem:
  -input: array
  -output: reference to same array as input array
  -implicit rules:
  -explicit rules:
  -questions:
Examples / test cases: see below
Data structure:
Algorithm:
  - intake array
  - copy elements into a new array
  - go one by one and replace the elements in the original array starting from the other side of the copied array
  - return original array

*/

function reverse(arr) {
  let holderArr = arr.slice();
  
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = holderArr.pop();
  }
  
  return arr;
}


let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true



//Book solution
function reverseBook(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < array.length / 2) {
    [array[leftIndex], array[rightIndex]] = [array[rightIndex], array[leftIndex]];
    leftIndex += 1;
    rightIndex -= 1;
  }
  return array;
}