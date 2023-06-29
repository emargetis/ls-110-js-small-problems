/*
Problem:
-input: string
-output: string with case staggered
-explicit rules:
  -every other character starting from first should be capitalized
  -every other character starting from second should be lowercase
-implicit rules:
-questions:
Examples / test cases: see below
Data structures:
Algorithm:
*/

function wordLengths(str = '') {
  if (str === '') return [];
  
  return str.split(' ').map((word) => {
    return `${word} ${word.length}`;
  });

}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []