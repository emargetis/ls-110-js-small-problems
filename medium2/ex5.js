/*
Problem:
-input: number
-output: number representing a featured number
-explicit rules:
  - return featured number that is just greater than the supplied argument
  - featured number characteristics:
    - multiple of 7
    - all digits occue exactly once each
    - odd number
-implicit rules:
-questions:
Examples:
Data structure:
Algorithm:
- create function that takes one argument
- declared feature number and assign it a primitive value of 7
- create a true loop
- break true loop if all criteria is met:
  - multiple of 7
  - all digits occue exactly once each
  - odd number
  - greater than argument
ALTERNATIVE:
 - to start divide number by 7 and take the floor
 - add the remainder to that value
*/

function featured(min) {
  const MAX_FEATURED = 9876543201;
  let featuredNum = (Math.ceil(min / 7) * 7); //find closest multiple of 7 at or above number then check it
  
  while (true) {
    if(uniqueDigits(featuredNum) && featuredNum % 2 === 1 && featuredNum > min) {
      return featuredNum;
    } else if (featuredNum > MAX_FEATURED) {
      return 'There is no possible number that fulfills those requirements';
    }
    
    featuredNum += 7;
  }
}

function uniqueDigits(num) {
  let numArr = String(num).split('');
  let testArr =[];
  
  for (let i = 0; i < numArr.length; i++) {
    if (testArr.includes(numArr[i])) return false;
    testArr.push(numArr[i]);
  }
  
  return true;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
