/*
problem:
  -input: floating point number between 0 and 360
  -output: string representing angle in degrees (°), minutes('), seconds(")
  -implicit rules:
  -explicit rules:
    - 60 min in a degree
    - 60 seconds in a min
  -questions:
examples/test cases: see below
data structure:
algorithm:
  - intake floating point number
  - remove everything before decimal and make that amount degrees
  - multiply remaining decimal by 60
  - remove everything before decimal and make that amount minutes
  - multiply remaining decimal by 60
  - remove everything before decimal and make that amount seconds
*/

const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;

function dms(num) {
  if (num < 0) {
    num = 360 + num % 360;
  } else if (num > 360) {
    num = num % 360;
  }
  
  let degrees = num - (num % 1);
  let minutes = ((num % 1) * MINUTES_PER_DEGREE) - (((num % 1) * MINUTES_PER_DEGREE) % 1);
  let seconds = ((((num % 1) * MINUTES_PER_DEGREE) % 1) * SECONDS_PER_MINUTE) - (((((num % 1) * MINUTES_PER_DEGREE) % 1) * SECONDS_PER_MINUTE) % 1);
  
  return `${degrees}°${String(minutes).padStart(2, '0')}'${String(seconds).padStart(2, '0')}"`;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

console.log('\n'); 

console.log(dms(-1));   // -1°00'00"
console.log(dms(400));  // 400°00'00"
console.log(dms(-40));  // -40°00'00"
console.log(dms(-420)); // 420°00'00"