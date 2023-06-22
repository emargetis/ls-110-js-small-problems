/*
problem:
  -input: two arrays
  -output: single array of combined, deduplicated elements
  -implicit rules:
  -explicit rules:
    - combine elements
    - remove duplicates
  -questions:
    - should we mutate the arrays? assume no
examples/test cases: see below
data structure:
algorithm:
  - intake array 1 and 2
  - loop through array 2 elements
    - if array 1 contains array 2 element do not add
    - if array 1 does not contain array 2 element then add 
*/


console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

function union(arr1, arr2) {
  let newArray = arr1.slice();
  
  arr2.forEach(function(element) {
    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  });
  
  return newArray;
}