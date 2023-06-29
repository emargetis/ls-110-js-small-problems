function leadingSubstrings(str) {
  let arr = [];
  
  str.split('').reduce((accum, element) => {
    arr.push(accum + element);
    return accum + element;
  }, '');
  
  return arr;
}

// const leadingSubstrings = str => {
//   return Array.from(str, (_, idx) => {
//     return [...str].slice(0, idx + 1).join('');
//   });
// }

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]