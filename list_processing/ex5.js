function substrings(str) {
  let substrings = [];
  for (let i = 0; i < str.length; i++) {
    substrings.push(leadingSubstrings(str.slice(i, str.length - 1)));
  }
  
  return substrings.flat();
}

// function substrings(str) {
//   let returnArr = str.split('').map((_, idx, arr) => {
//     return leadingSubstrings(arr.slice(idx).join(''));
//   });
  
//   return returnArr.flat();
// }

function leadingSubstrings(str) {
  let arr = [];
  
  str.split('').reduce((accum, element) => {
    arr.push(accum + element);
    return accum + element;
  }, '');
  
  return arr.sort();
}


console.log(substrings('abcde'));

/* returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/