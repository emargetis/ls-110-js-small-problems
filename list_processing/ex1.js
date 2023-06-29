function sum(num) {
  return num.toString().split('').reduce((sum, digit) => {
    return sum += Number(digit);
  }, 0);
}
console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45