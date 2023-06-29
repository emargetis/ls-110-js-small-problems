/*
Problem:
-input: three number arguments
-output: string for type of triangle ('right', 'acute', 'obtuse', 'invalid')
-explicit rules:
  - sum of angles must be exactly 180 degrees
  - every angle is greater than 0
  - all angles have integer values and there will be no floating points
-implicit rules:
  - there will only be three numeric arguments every time
-questions:
Examples:
Data structure:
Algorithm:
- check that all angles are greater than 0, if not return invalid
- check that sum of all angles is is 180, if not return invalid
- check to see if any angle is 90 degrees, if so return right
- check to see if any anle is greater than 90 degrees, if so return obtuse
- check to see if all angles are less than 90 degrees, if so return acute

*/


function triangle(a1, a2, a3) {
  if (a1 <= 0 || a2 <= 0 || a3 <= 0) return 'invalid';
  
  if (a1 + a2 + a3 !== 180) return 'invalid';
  
  if (a1 === 90 || a2 === 90 || a3 === 90) return 'right';
  
  if (a1 > 90 || a2 > 90 || a3 > 90) return 'obtuse';
  
  if (a1 < 90 && a2 < 90 && a3 < 90) return 'acute';
}



console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"