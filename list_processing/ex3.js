function multiplyAllPairs(arr1, arr2) {
  let returnArr = [];
  
  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
      returnArr.push(num1 * num2);
    });
  });
  
  returnArr.sort((a, b) => a - b);
  
  return returnArr;
}


console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]