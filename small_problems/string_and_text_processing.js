// 1) Uppercase Check
// P: input-string, output-boolean signifying if all alphabetic characters are uppercase
// Rules:
// ignore nonalphabetic characters
// mental model- check if string.toUpperCase === string
// D: string
// A:
// declare function `isUppercase` define parameter `string`
// return `string` === call `toUpperCase` on `string`
// C:
function isUppercase(string) {
  return string === string.toUpperCase();
}


// E:
console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true

// 2) Delete Vowels
// P: input-array of strings, output-array of same strings without vowels
// rules:
// strings are in same format
// strings of all vowels return empty strings
// mental model
// store constant array of vowels, iterate through each element, split element, iterate through
// characters with filter, if character is included in vowels constant, do not select item
// D: strings, arrays
// A:
// set variable `VOWELS` = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
// declare function `removeVowels()` define parameter `strArr`
// set variable `noVowelStrings` = [];
// iterate through `strArr` with `forEach()` 
//  for each `element`, set variable call `split()` on `element` pass empty string
//  call `filter()`
//    for each `char` return element if `!VOWELS.includes(element)`
//    call `join()` on filtered array of charactres and pass empty string as argument
//    push joined element to `noVowelStrings`
// C:
const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

function removeVowels(strArr) {
  let noVowelStrings = [];
  strArr.forEach(element => {
    noVowelStrings.push(element.split('').filter(char => !VOWELS.includes(char)).join(''));
  });
  return noVowelStrings;
}
// OR

function removeVowels(strings) {
  return strings.map(string => string.replace(/[aeiou]/gi, ""));
}

// E:
console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

// 3) Lettercase Counter
// P: input-string, output-object containing lowercase, uppercase, and neither counts 
// rules:
// neither means any non alphabetic character
// mental model
// set object variable containing uppercase lowercase and neither properties
// split string into array, iterate through array, if uppercase, uppercase key += 1 etc
// D: string, array, object
// A:
// declare function `letterCaseCount` define paramter `string`
// set variable `count` = {lowercase: 0, uppercase: 0, neither: 0}
// set variable `charsArr` = call `split` on `string` pass empty string
// call `forEach` on `charsArr` for each `char`
//  if `char` >= 'a' && `char` =< 'z'
//    `count['lowercase']` += 1
//  else if `char` >= 'A' && `char` =< 'Z'
//    `count['uppercase']` += 1
//  else
//    `count['neither']` += 1
// return `count`
// C:
function letterCaseCount(string) {
  let count = {lowercase: 0, uppercase: 0, neither: 0};
  let charsArr = string.split('');
  charsArr.forEach(char => {
    if ((char >= 'a') && (char <= 'z')) {
      count['lowercase'] += 1;
    } else if ((char >= 'A') && (char <= 'Z')) {
      count['uppercase'] += 1;
    } else {
      count['neither'] += 1;
    }
  });
  return count;
}


// E:
console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }


// 4) Capitalize words
// P: input-string output-string with 1st char of each word capitalized and rest lowercase
// Rules:
// word = chars separated by spaces
// if there is an uppercase char in middle of word, it should be lowercase
// mental model
// split string into array of words, iterate over array with map for each word, return result
// call slice and pass index 0  and 1 as argument call toUpperCase method concatenated with 
// call slice pass index 1 as argument call toLowerCase
// E:
// D: string, array
// A:
// declare function `wordCap` define parameter `string`
// set variable `wordsArr` = call `split` on `string` pass space as argument
// set variable `cappedArr` =
//  call `map` on `wordsArr` for each `word` =>
//    return calling `slice` on `word` pass 0, 1 as args + call `slice` on `word` pass 1 as arg
// return call `join` on `cappedArr
// C:
function wordCap(string) {
  let wordsArr = string.split(' ');
  let capArr = wordsArr.map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase());
  return capArr.join(' ');
}
console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'

// 5) Swap Case
// P: input-string, output-string with lowercase made uppercase, uppercase letters made lowercase
// Rules:
// non-alphabetic characters should be unchanged
// mental model
// split string into array of characters, iterate through that array, for each character,
// check if char is uppercase, if yes, change to lowercase, and vice versa
// D: strings, arrays
// A:
// declare function `swapCase()` define parameter `string`
// set variable `charactersArr` = call `split()` on `string` pass '' as argument
// set variable `swappedCharacters` =
//  call `map()` on `charactersArr` for each `char`:
//    if statement condition- check for === between `char` and `character.toUpperCase()`
//      if true `return` call `toLowerCase()` on `char`
//    else `return` call `toUpperCase()` on `char`
// return call `join()` on `swappedCharacters` pass '' as argument
// C:
function swapCase(string) {
  let charactersArr = string.split('');
  let swappedCharactersArr = charactersArr.map(char => {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  });
  return swappedCharactersArr.join('');
}

// E:
console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"


// 6) Staggered Caps
// P: input-string, output-string with staggered uppercase and lowercase characters
// Rules:
// non-alphabetic characters count towards staggered order, do not need to be changed
// stagger order should start with capital
// mental model
// split string into array, iterate through array, if index is even, capitalize character, if
// index is odd, change character to lowercase
// D: strings, arrays
// A:
// declare function `staggeredCase()` define parameter `string`
// set variable `charsArr` = call `split()` on `string` pass empty string as argument
// iterate with for loop initialize `i = 0`, condition `i < charsArr.length` increment `i += 1`
// for each index if statement-
//    if `(i % 2 === 0)`
//    reassign `charsArr[i]` to call `toUpperCase()` on `charsArr[i]`
//    else reassign `charsArr[i]` to call `toLowerCase()` on `charsArr[i]`
// return call `join()` on `charsArr` pass '' as argument
// C:
function staggeredCase(string) {
  let charsArr = string.split('');
  for (i = 0; i < charsArr.length; i += 1) {
    if (i % 2 === 0) {
      charsArr[i] = charsArr[i].toUpperCase();
    } else {
      charsArr[i] = charsArr[i].toLowerCase();
    }
  }
  return charsArr.join('');
}


// E:
console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"


// 7) Staggered Case Pt 2
// P: input-string, output-string with staggered uppercase and lowercase letters
// Rules:
// non alphabetic characters do not count towards stagger pattern


// 8) How Long Are You
// P: input-string, output-array, elements are each word with a space and number = word length
// Rules:
// each word of string separated by space
// if empty string, return empty array
// mental model
// split string into array of words, for each word, reassign word = word + ' ' + length of word
// D: strings, arrays,
// A:
// declare function `wordLengths` define parameter `string`
// set variable `wordsArr` = call `split()` on `string` pass ' ' as argument
// set variable `wordLengthsArr` = 
//    call `map()` on `wordsArr`
//      for each `word` return `word` + ' ' + `word.length`
// return `wordLengthsArr`
// C:
function wordLengths(string) {
  if ( (arguments.length === 0) || (string.length === 0)) {
    return [];
  } else {
    let wordsArr = string.split(' ');
    return wordsArr.map(word => word + ' ' + word.length);
  }
}



// E:
console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []

// 9) Search Words
// P: input-word, string of text, output-number of times word appears in text
// Rules:
// words separated by spaces
// case insensitive
// word and text will always be provided
// mental model
// set count variable, split text into array of words, iterate through array, if element === input
// word, increment count by 1
// return count
// D: strings, arrays, numbers
// A:
// declare function `searchWord` define parameters `word` and `text`
// set variable `count` = 0
// set variable `wordsArr` = call `split()` on `text` pass space as argument
// call `forEach()` on `wordsArr` for each `element` =>
//    if statment:
//    if  `element` === `word` call `toLowerCase()` on both true
//        increment count by 1
// return count variable
// C:
function searchWord(word, text) {
  let count = 0;
  let wordsArr = text.split(' ');
  wordsArr.forEach(element => {
    if (element.toLowerCase() === word.toLowerCase()) {
      count += 1;
    }
  });
  return count;
}

let text = 'Sed and let my name say sed and theres a lot of words so well say sed';
console.log(searchWord('sed', text));      // 3
let text2 = `the dog and the other dog played with the bone`
console.log(searchWord('dog', text2)); // 2


// 10) Search Words
// P: input-word, text output-text with each instance of word highlighted
// Rules:
// highlight means **** around word and word capitalized
// D: string, array
// A:
// declare function `searchWord2` define parameter `word` and `text`
// set variable `wordsArr` = call `split()` on `text` 
// set variable `highlightedWordsArr` =
//    call `map()` on `wordsArr` pass callback function 
//      for each `element` if statement `element` === `word` call `toLowerCase()` on both
//       if true return '**' + `word.toUpperCase()` + ''
//        else return word
// return call `join()` on `highlightedWordsArr`
// C:
function searchWord2(word, text) {
  let wordsArr = text.split(' ');
  let highlightedWordsArr = wordsArr.map(element => {
    if (element.toLowerCase() === word.toLowerCase()) {
      return '**' + word.toUpperCase() + '**';
    } else {
      return element;
    }
  });
  return highlightedWordsArr.join(' ');
}




// E:
let text1 = 'Sed and let my name say sed and theres a lot of words so well say sed';
console.log(searchWord2('sed', text1));
let text12 = `the dog and the other dog played with the bone`
console.log(searchWord2('dog', text12)); 