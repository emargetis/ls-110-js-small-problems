/*
Problem:
  - input: string value represending the time of day in 24 hour format (hh:mm)
  - output: return number of mintutes before or after midnight
  - exlicit rules:
  - implicit rules:
  - questions:
Examples / test cases: see below
Data structure: arrays
Algorithm:
  Before
    - intake string of 24 hour format (HH:MM)
    - get hours from string
    - subtract hours from 24 and multiply by 60
    - get minutes from string
    - subtract number of minutes from value above
  After
    - intake string of 24 hour format (HH:MM)
    - get hours from string
    - multiply by 60 by hours
    - get minutes from string
    - Add number of minutes to value above
*/

function afterMidnight(str) {
  let hourValue = Number(str.slice(0,2));
  if (hourValue === 24) hourValue = 0;
  let minValue = Number(str.slice(3));
  
  let minFromHours = hourValue * 60;
  
  return minFromHours + minValue;
}

function beforeMidnight(str) {
  let hourValue = Number(str.slice(0,2)) || 24;
  let minValue = Number(str.slice(3));
  
  let minFromHours = (24 - hourValue) * 60;
  
  return minFromHours - minValue;
  
}



console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);