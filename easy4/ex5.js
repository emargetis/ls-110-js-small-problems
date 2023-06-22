function runningTotal(array) {
  return array.reduce((accumulator, element, index) => {
    let priorValue = accumulator[index - 1] ?? 0;
    
    accumulator.push(priorValue + element);
    
    return accumulator;
  }, []);
}

// function runningTotal(array) {
//   let sum = 0;
  
//   return array.map((element) => {
//     sum += element;
//     return sum;
//   });
// }


console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []