/*
problem:
  -input: two arrays
  -output: single array of combined elements in alternating order
  -implicit rules:
    - return new array and do not mutate original arrays
  -explicit rules:
    - Arrays are non-empty
    - They contain same number of elements
  -questions:
examples/test cases: see below
data structure:
algorithm:
  - intake 2 arrays
  - declare new blank array
  - loop through both arrays
  - push one element each to new array
  - return new array
*/

//original
function interleave(arr1, arr2) {
  let returnArray = [];
  
  for (let i = 0; i < arr1.length; i += 1) {
    returnArray.push(arr1[i], arr2[i]);  
  }
  
  return returnArray;
}

//For each
function interleaveForEach(arr1, arr2) {
  let returnArray = [];

  arr1.forEach((element, index) => {
    returnArray.push(arr1[index], arr2[index]);
  });

  return returnArray;
}

//Map
function interleaveMap(arr1, arr2) {
  
  return arr1.map((subArray, index) => {
    return [subArray, arr2[index]];
  }).flat();
  
}

//Reduce
function interleaveReduce(arr1, arr2) {
  
  return arr1.reduce((accumulator, currentValue, currentIndex) => {
    // accumulator.push(currentValue);
    // accumulator.push(arr2[currentIndex]);
    // return accumulator;
    return [...accumulator, currentValue, arr2[currentIndex]];
  }, []);
  
}


console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
console.log(interleaveForEach([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
console.log(interleaveMap([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
console.log(interleaveReduce([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]


let words = ['go', 'ahead', 'and', 'jump'];

words.sort((a, b) => a.length - b.length);

console.log(words); //short to long



