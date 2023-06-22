/*
Problem:
  -input: string
  -output: boolean that returns true if all parentheses in the string are properly balanced
  -implicit rules:
  -explicit rules:
    - parenthese occure in matching () pairs
    - a balance pair starts with ( and not )
  -questions:
Examples / test cases: see below
Data structure:
Algorithm:
  - intake string
  - split string into array
  - filter array into ( and )
  - initialize a balancer to 0
  - if we encounter ( then increment balancer
  - if we encounter ) then decrement balancer
  - if balancer is ever negative during iteration return false
  - if we have a positive number at the end return false
*/

function isBalanced(str) {

  return balanceCheck(str, '(', ')') &&
         balanceCheck(str, '[', ']') &&
         balanceCheck(str, '{', '}') &&
         balanceCheck(str, '"', '"') &&
         balanceCheck(str, "'", "'");

}

function balanceCheck(string, charOne, charTwo) {
  let balancer = 0;
  
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === charOne) {
      balancer += 1;
    } else if (string[i] === charTwo) {
      balancer -= 1;
    }
    
    if (balancer < 0) return false;
  }
  
  return !balancer;
}


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);