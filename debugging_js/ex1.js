let ladder = ''; //<==== error

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail

//WRONG - You can't call the for each method on an array literal since it does not have a length property
//JS performs automatic semicolon insertion which combines first few lines when the commas are left out. JS thinks the array literal is an accessor (e.g. str[1] on the empty string)