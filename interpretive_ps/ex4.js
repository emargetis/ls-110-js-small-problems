/*
Problem:
-input: number representing grid side
-output: printed version of an eight sided star
-explicit rules:
  -input will be odd integer >= 7
-implicit rules:
-questions:
Examples: see below
Data structure: 
Algorithm:
-create function that takes one number argument
-print top half of star
  - for each row up to middle ()
    - define left padding
    - define middle left and right padding
    - combine into string an output string
-print middle row of star
  - print middle
-print bottom half of star
  -use same logic as first half, but reverse the order
*/

const STAR = '*';
const SPACE = ' ';

function star(num) {
  topHalf(num)
  middleRow(num);
  bottomHalf(num);
  
}

function topHalf(num) {
  for (let i = 1; i <= Math.floor(num / 2); i += 1) {
    let leftPad = i - 1;
    let middlePad = Math.floor(num/2) - i;
    console.log(SPACE.repeat(leftPad) + STAR + SPACE.repeat(middlePad) + STAR + SPACE.repeat(middlePad) + STAR);
  }
   
}

function middleRow(num) {
  console.log(STAR.repeat(num));
}

function bottomHalf(num) {
  for (let i = Math.floor(num / 2); i >= 1; i -= 1) {
    let leftPad = i - 1;
    let middlePad = Math.floor(num/2) - i;
    console.log(SPACE.repeat(leftPad) + STAR + SPACE.repeat(middlePad) + STAR + SPACE.repeat(middlePad) + STAR);
  }
}





star(7);
/* logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *
*/

star(9);
/* logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *
*/

star(39);