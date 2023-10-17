//P
// input- array of strings output- new array with strings sorted by which has the longest run of
// adjacent consonants
// Explicit rules:
// if two strings have same length run of consonants-
//    order them in order they were originally
// adjacent consonants include- 
//    consonants next to eachother, two consonants separated by a space
// implicit rules:
// a string can be more than one word

// question- are the elements of the new array strings that are extractions of runs of consonants
// or are they alike to the elements of the original array, just ordered differently? alike to og
// should strings be sorted in ascending or descending order? ascending # of adjacent consonants
// do strings always have more than one word? no, can be one

// mental model
// iterate through each element and count up consonants, keep track of count until character is a
// vowel save count, restart count again until character is a vowel, save highest count for each
// element, then sort elements by count
// split each element into array by vowels, 
// E:
console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); 
// ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); 
// ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); 
// ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); 
// ['month', 'day', 'week', 'year']

// D array, string, maybe object
// A:
// remove spaces from input string
// initialize count to 0
// initialize temp string to empty string
// iterate through input string for each letter:
//    if letter is consonant, concat it to temp string
//    if letter is vowel:
//        if temp string is greater than 1 and greater than current count, set count = temp string
//    reset temp string to empty string
//    return count

function countMaxAdjacentConsonants(string) {
  string = string.split(' ').join('');
  let count = 0;
  let tempString = '';
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];

    if ('bcdfghjklmnpqrstvwxyz'.includes(letter)) {
      tempString += letter;
    } else {
      if (tempString.length > 1 && tempString.length > count) {
        count = tempString.length;
      }

      tempString = '';
    }
  }

  return count;
}