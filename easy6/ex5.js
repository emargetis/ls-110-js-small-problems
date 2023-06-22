/*
Problem:
  -input: string consisting of first name, a space, and a last name
  -output: a new string consisting of last name, a comma, a space, and the first name
  -implicit rules:
  -explicit rules:
  -questions:
Examples / test cases: see below
Data structure:
Algorithm:
 - intake string
 - split string into array
 - combine array elements into return template litaral

*/

// Original solution
// function swapName(str) {
//   let nameArray = str.split(' ');
//   return `${nameArray[1]}, ${nameArray[0]}`;
// }

//further exploration
// function swapName(name) {
//   let nameArray = name.split(' ');
//   return nameArray.slice(nameArray.length - 1) + ', ' + nameArray.slice(0, nameArray.length - 1).join(' ');
// }

//Elegant Solution
function swapName(name) {
  let nameArray = name.split(' ');
  return `${nameArray.pop()}, ${nameArray.join(' ')}`;
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"