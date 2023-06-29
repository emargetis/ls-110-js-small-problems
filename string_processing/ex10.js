/*
Problem:
-input: word as a string and longer string of text
-output: number representing he number of times the word appears in the tex
-explicit rules:
  -both args will always be provided
  -all word breaks are spaces
  -words are case insensitive
-implicit rules:
-questions:
Examples / test cases: see below
Data structures:
Algorithm:
-intake word and string
-separate long string into an array
-filter array based on lowercase version of word matching the longer word with puncuation stripped out
*/

function searchWord(string, text) {
  return text.split(' ').map(word => {
    if (word.toLowerCase() === string.toLowerCase()) {
      return `**${word}**`;
    } else {
      return word;
    }
  }).join(' ');
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3