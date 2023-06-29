/*
Problem:
-input: number (representing an ID) and an array containing object literals
-output: array containing object literals where one of the values from a KV pair equals the number passed in
-explicit rules:
-implicit rules:
-questions:
Examples / test cases: see below
Data structures:
Algorithm:
- intake number and nested array
- filter nested array accessing each element key
*/

function transactionsFor (num, list) {
  return list.filter(item => item['id'] === num);
}


function isItemAvailable (num, list) {
  let filteredList = transactionsFor(num, list);
  
  let inventory = filteredList.reduce((sum, transaction) => {
                    if (transaction['movement'] === 'in') {
                      return sum += transaction['quantity'];
                    } else if (transaction['movement'] === 'out') {
                      return sum -= transaction['quantity'];
                    }
                    
                  }, 0);

  return inventory > 0;
}


let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true