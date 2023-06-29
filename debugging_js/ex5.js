function range(start, end = -1) {
  if (end === -1) {
    end = start;
    start = 0;
  }
  
  
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// Examples

console.log(range(10, 20));
console.log(range(5));

/*
There are two functions with the same name when there should only be one. We
can just reverse the parameters in the first one and eliminated the second one.

The ability to utilize multiple functions of the same name with different 
signatures is called function overloading.
*/

/*FURTHER EXPLORATION
1. You can't reassign start to 0 and then end to 0 because nothing will happen
2. The block will get triggered if end is 0
*/