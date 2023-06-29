/*
Problem:
-input: number representing a year
-output: number representing number of friday the 13ths in that year
-explicit rules:
  - assume the year is greater than 1752
-implicit rules:
-questions:
Examples:
Data structure:
Algorithm:
- iterate over each month of a given year
- add day of week that falls on 13 of every month to an array
- filter array for fridays
- return length of filtered array

*/

function fridayThe13ths(year) {
  let months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  let fridayCount = 0;
  
  months.forEach(mon => {
    let thirteenth = new Date(`${year}-${mon}-13`);
    
    if (thirteenth.getDay() === 5) {
      fridayCount += 1;
    }
  });
  
  return fridayCount;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2