/*
Problem:
  - input: integer, poitive or negative
  - output: string value represending the time of day in 24 hour format (hh:mm)
  - exlicit rules:
    - If the number of minutes is positive, the time is after midnight
    - if the number of minutes is negative, the time is before midnight
  - implicit rules:
  - questions:
Examples / test cases:
Data structure:
Algorithm:
  - intake numbers
  - if number is 0, return "00:00"
  - determine remainder of 1440 bc that will represent more than 24 hours
  - determine number of hours from value above, if any (using floor)
  - determin number of remaining remaining minute, if any
  
  - if OG number is negative:
    - subtract hours from 24
    - subtract minutes from 60
    
  - concatenate hours and minutes for output string
*/

const MIN_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const DAYS_PER_WEEK = 7;
const MIN_PER_DAY = MIN_PER_HOUR*HOURS_PER_DAY;
const MIN_PER_WEEK = MIN_PER_DAY*DAYS_PER_WEEK;
const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function timeOfDay(inputMinutes) {
  let remainingMinutes = inputMinutes % MIN_PER_DAY;
  
  let hours = Math.floor(remainingMinutes / MIN_PER_HOUR);
  let minutes = remainingMinutes % MIN_PER_HOUR;
  
  if (remainingMinutes < 0) {
    hours = HOURS_PER_DAY + hours;
    minutes = MIN_PER_HOUR + minutes;
  }
  
  return formatTime(hours, minutes);
}

function formatTime(hours, minutes) {
  return `${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}`
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");


//Further exploration -------------------------------------
function timeOfDayDate(inputMinutes) {
  let remainingMinutesWeek = inputMinutes % MIN_PER_WEEK;
  let days = Math.floor(remainingMinutesWeek / MIN_PER_DAY);
  
  let remainingMinutes = remainingMinutesWeek % MIN_PER_DAY;
  let hours = Math.floor(remainingMinutes / MIN_PER_HOUR);
  let minutes = remainingMinutes % MIN_PER_HOUR;
  
  if (remainingMinutes < 0) {
    days = DAYS_PER_WEEK + days;
    hours = HOURS_PER_DAY + hours;
    minutes = MIN_PER_HOUR + minutes;
  }
  
  return formatTimeDate(days, hours, minutes);
}

function formatTimeDate(days, hours, minutes) {
  return `${DAY_NAMES[days]} ${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}`;
}

console.log(timeOfDayDate(-4231));