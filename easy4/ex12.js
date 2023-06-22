function integerToString(num) {
  let outputString = '';
  let remainder = 0;
  const DIGITS = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ];

  do {
    remainder = num % 10;
    outputString = DIGITS[remainder].concat(outputString);
    num = (num - remainder) / 10;
  } while (num > 0);
  
  return outputString;
}

function signedIntegerToString(num) {
  let sign = Math.sign(num);
   
  if (sign === 1) {
    return '+' + integerToString(num);
  } else if (sign === -1) {
    return '-' + integerToString(-num);
  } else if (Object.is(num, -0)) {
    return '-' + integerToString(num);
  } else {
    return integerToString(num);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
console.log(signedIntegerToString(-0) === "-0");