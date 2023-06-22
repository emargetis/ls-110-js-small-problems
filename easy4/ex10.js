console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

// function stringToSignedInteger(inputString) {
//   let number = 0;
//   const DIGITS = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9,
//   };
//   const SIGNMULTIPLIER = {
//     '+': 1,
//     '-': -1,
//   }
//   let sign = '+';
  
//   for (let i = 0; i < inputString.length; i += 1) {
//     if (!DIGITS.hasOwnProperty(inputString[i])) {
//       sign = inputString[i];
//       continue;
//     }
    
//     let additiveAmount = inputString[i] * 10 ** (inputString.length - (1 + i));
    
//     number += additiveAmount;
//   }
  
//   return SIGNMULTIPLIER[sign] * number;
// }

function stringToInteger(inputString) {
  let number = 0;
  
  for (let i = 0; i < inputString.length; i += 1) {
    let additiveAmount = inputString[i] * 10 ** (inputString.length - (1 + i));
    
    number += additiveAmount;
  }
  
  return number;
}

function stringToSignedInteger(string) {
  switch (string[0]) {
    case '+':
      return stringToInteger(string.slice(1));
    case '-':
      return -stringToInteger(string.slice(1));
    default:
      return stringToInteger(string);// code
  }
}