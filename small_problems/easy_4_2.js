// 6) Letter Counter Pt 1
// P: function, input- string, output-object keys are word sizes values are elements of that length
// D: string, array, object
// A: set empty object, split string into array by word
// iterate through array with for loop
// if an object key of the elements length does not exist, set it and assign to 1
// if it does exist increase it by 1
// C:
function wordSizes(string) {
  let count = {};
  let words = string.split(' ');
  for (i = 0; i < words.length; i += 1) {
    let wordSize = words[i].length;
    if (wordSize === 0) {
      continue;
    }
    if (!count[wordSize]) {
      count[wordSize] = 0
    }
    count[wordSize] += 1
  }
  return count;
}



wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

// 7) letter counter prt 2
// P: modify wordSizes function to not include non letters
// Q: all non letters or non alphanumeric?
// D: string, array, object
// A: add regex to function
// C:
function wordSizes(string) {
  let count = {};
  let words = string.split(' ');
  for (i = 0; i < words.length; i += 1) {
    let cleanWord = words[i].replace(/[^a-z]/gi, '');
    let wordSize = cleanWord.length;
    if (wordSize === 0) {
      continue;
    }
    if (!count[wordSize]) {
      count[wordSize] = 0
    }
    count[wordSize] += 1
  }
  return count;
}

// E:
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}

// 8) letter swap
// P: function, input- string, output- return each words of string with 1st and last letters swap
// D: string, array, string
// A: 
// C:
// split string into array of words
// iterate through array with for loop, for each index pass the word to a swapping function
// create function that swaps letters
// takes word as argument
// returns last index of the word, middle of the word, then first index of word
// return array joined with ' '
// C:
function swapLetters(word) {
  if (word.length === 1) {
    return word;
  }
  return word[word.length - 1] + word.slice(1, -1) + word[0];
}

function swap(string) {
  let words = string.split(' ');
  for (i = 0; i < words.length; i += 1) {
    words[i] = swapLetters(words[i]);
  }
  return words.join(' ');
}


// E:
console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"



// 9) convert string to number
// EASY WAY
// P: function input-string output-number, no Number() or parseInt()
// D: string, number
// A: put input into numeric expression, JS will implicitly coerce to number
// C:
function stringToInteger(string) {
  return string * 1;
}

// HARD WAY
// D: string, array, object, number
// A: store object with key value pairs of integers, keys are strings
// split string into array, for each element element = object key
// set variable to 0
// to combine digits to number- 
// set variable to zero 
// for each digit- set variable = to variable * 10 and add digit of array
// this keeps the 10s place going up as you add digits to the end of the number
// return variable
// C:
const NUMBERS = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9};
function stringToInteger(string) {
  let digits = string.split('').map(char => NUMBERS[char]);
  let value = 0;
  digits.forEach(digit => value = (10 * value) + digit);
  return value;
}

// E
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true


// 10) convert string to signed number
// EASY WAY
// P: function, input-string, output-signed number, 
// D: string, array, number
// A: function that determines if number is positive or negative
// regex on string
// C:

function isNegative(string) {
  let charArray = string.split('');
    if (charArray.includes('-')) {
      return true;
    } else {
      return false;
    }
}

function stringToSignedInteger(string) {
  let sign = isNegative(string);
  let cleanString = string.replace(/[^0-9]/gi, '');
  let number = stringToInteger(cleanString);
  return sign === true ? number * -1 : number;
}



// E:
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

// 11) convert number to string
// EASY WAY:
function numToStr(num) {
  return num + '';
}
// HARD WAY
// P: function, input-number, output-string,
// D: number, array, string,
// A: store digits in an array
//
// C:
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

// E:
integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"

