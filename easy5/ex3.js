/*
problem:
  -input: one array
  -output: two arrays
  -implicit rules:
  -explicit rules:
    - If the array contains an odd number of elements then place it in first half array
  -questions:
examples/test cases: see below
data structure:
algorithm:
  - intake array
  - Determine number of elements in the first half
    - Divide length by 2 and use floor to get the stopping value
  - slice elements from start to midpoint (ceiling)
  - slice elements from midpoint (ceiling) to end
  
*/

function halvsies(arr) {
  let midpoint = Math.ceil(arr.length / 2);
  let firstHalf = arr.slice(0, midpoint);
  let secondHalf = arr.slice(midpoint);

  return [firstHalf, secondHalf];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]