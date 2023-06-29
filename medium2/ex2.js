/*
Problem:
-input: three number arguments
-output: string for type of triangle ('equilateral', 'isosceles', 'scalene', 'invalid')
-explicit rules:
  - the sume of lengths of two shortest sides must be greater than length of longest side
  - every side must be greater than 0
-implicit rules:
  - there will only be three numeric arguments every time
-questions:
Examples:
Data structure:
Algorithm:
- create a function that accepts three arguments
- check to make sure all arguments are greater than 0
  - if not return invalid
  - if so, proceed
- put sides into array
- sort array from smallest to largest
- check to see if shortest sides sum is greater than longest side
  - compare some of two smallest to largest
    - if so, proceed
    - if not then return 'invalid'
- check to see if all three sides are equal to eachother
  - if so return equilateral
  - if not, proceed
- check to see if two smallest are equal and third is not
  - if so, return isosceles
  - if not, return scalene

*/

function triangle(s1, s2, s3) {
  let sides = [s1, s2, s3].sort((a, b) => a - b);
   
  if (sides[0] <= 0 || sides[1] <= 0 || sides[2] <= 0) return 'invalid';
  
  if (sides[0] + sides[1] < sides[2]) return 'invalid';
  
  if ((sides[0] === sides[1]) && (sides[0] === sides[2])) return 'equilateral';
  
  if (sides[0] === sides[1] || sides[0] == sides[2] || sides[1] == sides[2]) return 'isosceles';
  
  return 'scalene';
  
}


console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"