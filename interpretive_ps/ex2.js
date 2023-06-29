/*
Problem:
-input: odd integer
-output: diamond pattern printed to the console
-explicit rules:
  - diamond should be in an nXn pattern
  - n is an odd integer always
-implicit rules:
-questions:
Examples: see below
Data structure: 
Algorithm:
-create function that takes 1 argument n
-print top of diamond up to the middle row
  - start at 1 and iterate up to n, counting by 2
    - for each row print current number of diamonds padded by spaces up to n on either side
-print bottom of diamond from middle row to bottom
  - start at n-2 and iterate down to 1, counting by 2
    - for each row print current number of diamonds padded by spaces up to n on either side
*/

const STAR = '*';

function diamond(num) {
  for(let i = 1; i <= num; i += 2) {
    let padLeft = (num - i) / 2;
    let str = STAR.repeat(i);
    console.log(' '.repeat(padLeft) + str);
  }
  
  for(let w = (num - 2); w >= 1; w -= 2) {
    let padLeft = (num - w) / 2;
    let str = STAR.repeat(w);
    console.log(' '.repeat(padLeft) + str);
  }
}

function hollowDiamond(num) {
  for(let i = 1; i <= num; i += 2) {
    if (i === 1) {
      let padLeft = (num - i) / 2;
      let str = STAR.repeat(i);
      console.log(' '.repeat(padLeft) + str);
    } else {
      let padLeft = (num - i) / 2;
      let middleSpace = (i - 2);
      console.log(' '.repeat(padLeft) + STAR + ' '.repeat(middleSpace) + STAR);
    }
  }
  
  for(let w = (num - 2); w >= 1; w -= 2) {
    if (w === 1) {
      let padLeft = (num - w) / 2;
      let str = STAR.repeat(w);
      console.log(' '.repeat(padLeft) + str);
    } else {
      let padLeft = (num - w) / 2;
      let middleSpace = (w - 2);
      console.log(' '.repeat(padLeft) + STAR + ' '.repeat(middleSpace) + STAR);
    }
  }
}


diamond(1);
/* logs
*
*/

diamond(3);
/* logs
 *
***
 *
*/

diamond(9);
/* logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/

hollowDiamond(1);
/* logs
*
*/

hollowDiamond(3);
/* logs
 *
***
 *
*/

hollowDiamond(9);