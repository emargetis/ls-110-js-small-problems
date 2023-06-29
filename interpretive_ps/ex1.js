/*
Problem:
-input: number representing total number of switches
-output: array of all swithches that are on
-explicit rules:
  - all lights start in the off position
  - return an array with the numbers of switches that are on...
-implicit rules:
  - start count at two
-questions:
  - is count going to be more than 2 every time?
  - will count be a positive number every time?
Examples: see below
Data structure: object
Algorithm:
-create object containing containing keys for 1 to count and give them all a value of "on"
-iterate from 1 to count
  -go through multiples of each number above from 1 to count and toggle each switch which is a multiple
-get array of switches that are still on at the end and return this value
*/


function lightsOn(switches) {
  let bank = {}
  
  for (let i = 1; i <= switches; i++) {
    bank[i] = "on";
  }
  
  for (let i = 2; i <= switches; i += 1) {
    for (let w = i; w <= switches; w += i) {
      if (bank[w] === 'on') {
        bank[w] = 'off';
      } else if (bank[w] === 'off') {
        bank[w] = 'on';
      }
    }
  }
  
  return Object.entries(bank).filter(flipper => {
    return flipper[1] === 'on';
  }).map(control => Number(control[0]));
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]