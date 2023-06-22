/*
Problem:
  - input: array
  - output: none, but it should log each value
  - exlicit rules:
    - the return elements should each be digits
  - implicit rules:
  - questions:
Examples / test cases:
Data structure: arrays
Algorithm:
  - intake array
  - declare blank object
  - loop through array
    - Add each new unique element to the object as a key
    - When an existing object key is encountered increment the value
  - Loop through object using for in and log a string to the console
  
*/


let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(arr) {
  let obj = {};
  
  arr.forEach(ele => {
    ele = ele.toUpperCase();
    if (obj.hasOwnProperty(ele)) {
      obj[ele] += 1;
    } else {
      obj[ele] = 1;
    }
  });
  
  for (let key in obj) {
    console.log(`${key} => ${obj[key]}`);
  }
}

countOccurrences(vehicles);

/* console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/