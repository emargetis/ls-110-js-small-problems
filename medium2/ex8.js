/*
Problem:
-input: paragraph
-output: print longest sentence with ending puncuation attached and the word count of the sentence
-explicit rules:
  - sentences end with . or ! or ?
  - any sequence of characters that are not sentence ending are counted towards length
-implicit rules:
-questions:
Examples:
Data structure: nested array
Algorithm:
-create a function that takes one argument
-separate strings into sentences
  -create empty string
  -create a loop that goes character by character and adds characters to the empty string
  -once an end puncuation is encountered:
    -add that string (after trimming it) to an array for sentences
    -reset empty string.
- find longest string in array and record index of that longest along with the length of that sentence
- print output of string by referencing array
*/

function longestSentence(text) {
  let sentenceBuilder = '';
  let sentenceStart = 0;
  let sentenceArr = [];
  
  for (let i = sentenceStart; i < text.length; i++) {
    sentenceBuilder += text[i];
    if ('.!?'.includes(text[i])) {
      sentenceArr.push([sentenceBuilder.trim()]);
      sentenceBuilder = '';
    }
  }
  
  sentenceArr.forEach(sentenceText => {
    sentenceText[1] = sentenceText[0].split(' ').length;
  })
  
  sentenceArr.sort((a, b) => a[1] - b[1]);
  
  console.log(sentenceArr[sentenceArr.length - 1][0]);
  console.log(`\nThe longest sentence has ${sentenceArr[sentenceArr.length - 1][1]} words`);
}

// function longestSentence(text) {
//   let words = text.split(' ');
//   let longestSentence = ['', 0];
//   let startIdx = 0;
//   words.forEach((word, idx) => {
//     if (word.endsWith('.') || word.endsWith('?') || word.endsWith('!')) {
//       let sentence = words.slice(startIdx, idx + 1);
//       let length = sentence.length;
//       if (length > longestSentence[1]) {
//         longestSentence = [sentence, length];
//       }
//       startIdx = idx + 1;
//     }
//   });
//   console.log(longestSentence[0].join(' '));
//   console.log(`The longest sentence has ${longestSentence[1]} words.`)
// }


let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.