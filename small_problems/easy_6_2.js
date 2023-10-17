// 1) Double Char Pt 1
// P: function input- string, output- string, each character doubled
// rules:
// empty string returns empty string
// will input always be string? yes
// do spaces count? yes
// split string to array, iterate over array for each element, duplicate the element
// D: string, arrays
// A:
// set variable `charactersList = string.split('')
// let variable `doubleCharacters` = call map method on `characters`
// callback function 
//    parameter: element
//    body: element + element
// set variable `doubleString` = `doubleCharacters`
// return `doubleString`
// C:
function repeater(string) {
  let charactersList = string.split('');
  let doubleCharacters = charactersList.map(element => element + element);
  let doubleString = doubleCharacters.join('');
  return doubleString;
}

// E:
console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""

// 2) Double Char Pt 2
// P function input- string output- string with consonant characters doubled
// rules: 
// do not double vowels, digits, punctuation, or whitespace
// Mental Model:
// store consonants in a constant array, set new empty array, split input string into array iterate
// through array, at each iteration, check if character exists in consonants const, if yes, push
// element + element to new array, if no, push element to new array
// D: string, array
// A:
// set const `consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm'
//                          'n', 'p', 'q' 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
// set variable `doubleCharList = []`
// set variable `charList = string.split('')`
// for loop i = 0; i < charList.length; i += 1
// if `consonants.includes(charList[i])`
//  push `charList[i] + charList[i]` to `doubleCharList`
// else 
//  push `charList[i]` to `doubleCharList`
// set variable `doubledString = doubleCharList.join`
// return `doubledString`
// C:

const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
                  'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
function doubleConsonants(string) {
  let doubleCharList = [];
  let charList = string.split('');
  for (i = 0; i < charList.length; i += 1) {
    if (consonants.includes(charList[i])){
      doubleCharList.push(charList[i] + charList[i]);
    } else {
      doubleCharList.push(charList[i]);
    }
  }
  let doubledString = doubleCharList.join('');
  return doubledString;
}

// E:
console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""


// 3) Reverse Number
// P: input- positive integer, output- number with digits reversed
// Rules:
// leading zeros are dropped for reversed number
// input integer is positve
// coerce input number to string, split string into array, reverse the array, join the array,
// coerce that joined array to number using method that gets rid of leading 0s
// D: number, string, array
// A:
// set variable `strNum` = calling `String()` function on input number
// set variable `strNumReverse` = calling `split()` method on `strNum`, call `reverse()` method,
// call `join()` method
// call `Number()` to coerce reversed joined array to number
// C:
function reverseNumber(number) {
  let strNum = String(number);
  let strNumReverse = strNum.split('').reverse().join('');
  let reverseNum = Number(strNumReverse);
  return reverseNum;
}



// E:
console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1


// 4) Counting up
// P: input-integer, output- array containing all integers between 1 and input integer
// Rules:
// array should be in ascending order, should include input number
// mental model
// set empty array, use while loop, initialze count variable, condtion of while loop- 
// while count is <= input integer push count to empty array, return that array
// D: number, array
// A:
// set variable `sequenceArray = []`
// initialize `count` variable to 1
// while loop condition: `(count <= num)`
// push `count` to `sequenceArray`
// increment `count` by 1
// C:
function sequence(num) {
  let sequenceArray = [];
  let count = 1
  while (count <= num) {
    sequenceArray.push(count);
    count += 1;
  }
  return sequenceArray;
}

// E
console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]


// 5) Name swapping
// P: input- string- firstname, lastname output- string with first and last name reversed
// Rules:
// input and output string contain a comma and a space
// input string will always contain 2 words
// mental model
// remove comma from string
// split string into array by ' ', reverse array, join array by ', '
// D: string, array
// A:
// set variable cleanString = call `replace()` on input and pass ',', ''
// on `cleanString` call `reverse()` then call `join()` and pass ', '
// C:
function swapName(name) {
  let cleanString = name.replace(',', '');
  let reverseName = cleanString.split(' ').reverse().join(', ');
  return reverseName;
}


// E:
console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Conner Durose'));    // "Durose, Conner"


// 6) sequence
// P: input- two integers, count and start of sequence, output- array, length = count argument
// element values will follow sequence based on start argument
// Rules:
// array returned must contain same number of elements as count argument
// array elements are mulitples of start value
// count will always be positive, >= 0
// if count 0, return empty array
// looping logic, while loop, set empty array, set a separate counter variable, while separate
// counter variable is <= count argument, increment start value and push values to empty array
// D: number, array
// A:
// set variable `mulitples = []`
// set variable counter = 1
// while loop: while `counter` <= `count`
// push input to `multiples`
// increment input by input
// increment counter by 1
// C:
function sequence(count, startValue) {
  let multiples = [];
  let counter = 1;
  while (counter <= count) {
    multiples.push(startValue * counter);
    counter += 1;
  }
  return multiples;
}

// E:
sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []

// 7) Reverse it
// P: input- string, output- string with words in reverse order
// Rules:
// words are separated by ' '
// split string into array by spaces, reverse array, join array by spaces
// D: strings, arrays
// A:
// call `split()` on input string, pass `' '` as argument, call `reverse()`, call `join(' ')
// C:
function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}

// E:
console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"

// 8) Reverse it Pt 2
// P: input- string, output- string, words with 5 or more characters reversed
// Rules:
// string contain only letters and spaces
// words are separated by space
// mental model
// split string into array by ' ', iterate through each element of array, if length of element >= 5
// split into nested array by character, reverse nested array, join nested array 
// D: strings and arrays
// A:
// set variable wordsArray = call `split('')` on input string
// for loop `(i = 0; i < wordsArray; i += 1)`
// if statement `(wordsArray[i] <= 5)`
// reassign `wordsArray[i]` = wordsArray[i].split('').reverse().join('')
// return wordsArray.join(' ');
// C:
function reverseWords(string) {
  let wordsArray = string.split(' ')
  let reverseWordsArray = [];
  for (i = 0; i < wordsArray; i += 1) {
    if (wordsArray[i].length >= 5) {
      reverseWordsArray.push(wordsArray[i].split('').reverse().join(''));
    }
  }
  return reverseWordsArray.join(' ');
}


console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"