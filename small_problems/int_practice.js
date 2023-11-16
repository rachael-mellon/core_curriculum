// 1)
// P: input- array of numbers output, array of numbers representing for each element how many
// numbers in the array are smaller than that element
// Rules:
// do not count duplicate numbers in count of how many are smaller
// mental model
// set empty array, make a remove duplicates from array function,
// iterate through input array, for each number, filter for numbers less than number, 
// pass that result to remove duplicates function, push length of that result to empty array
// D: arrays, numbers
// A:
// declare function `removeDuplicates` define parameter `array`
//  let nonDupesArr = [];
//  call `forEach` on `array` callback `element` =>
//    if ! call `includes` on `nonDupesArr` 
//      call `push` on `nonDupesArr` pass `element`
//  return nonDupesArr;
// declare function `smallerNumbersThanCurrent` define parameter `array`
// let `lengths` = []
// call `forEach` on `array` callback for each `number` =>
//    set variable `smallerNums` = call `filter` on `array` callback for each `num` =>
//        num < number
//    call `push` on `lengths` pass call `removeDuplicates(smallerNums).length`
// return `lengths`
// C:
function removeDuplicates(array) {
  let nonDupesArr = [];
  array.forEach(element => {
    if (!nonDupesArr.includes(element)) {
      nonDupesArr.push(element);
    }
  });
  return nonDupesArr;
}

function smallerNumbersThanCurrent(array) {
  let lengths = [];
  array.forEach(number => {
    let smallerNums = array.filter(num => num < number);
    lengths.push(removeDuplicates(smallerNums).length);
  });
  return lengths;
}

// E:
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]

// 2) 
// P: input-array of integers, output- lowest sum of 5 consecutive integers in array
// Rules:
// if array length < 5, return null
// mental model
// iterate through array, for each element, if sum !== NaN, push sum of element + next 4 elements
// to array, return lowest element of that array
// D: array, number
// A:
// declare function `minimumSum` define parameter `array`
// set variable `sumsArr` = `[]`
// for loop `(i = 0; i < array.length; i += 1)`
//    set variable `sum` = array[i] + array[i + 1] + array[i + 2] + array[i + 3] + array[i + 4]
//    if ! call `Number.isNaN` pass `sum`
//      call `push` on `sumsArr` pass `sum` as arg
// return call `Math.min` on `...sumsArr`
// C:
function minimumSum(array) {
  if (array.length < 5) {
    return null;
  }
  let sumsArr = [];
  for (i = 0; i < array.length; i += 1) {
    let sum = array[i] + array[i + 1] + array[i + 2] + array[i + 3] + array[i + 4];
    if (!Number.isNaN(sum)) {
      sumsArr.push(sum);
    }
  }
  return Math.min(...sumsArr);
}

// E:
console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// 3)
// P: input-string, output- string with every 4th char of every 2nd word uppercase
// Rules:
// other characters remain the same
// mental model
// split string into array of words, set empty array, iterate over words aray with for loop, 
// for even indexes, push to new array, for odd indexes, push to new array with every 4th char cap
// return joined array
// D: string, array
// A:
// declare function `everyfourthUpper` define parameter `string`
// set variable `charsArr` = call `split` on `string` pass '' as arg
// iterate over `charsArr` with for loop
// `(i = 3; i < charsArr.length; i += 4)`
//      charsArr[i] = charsArr[i].toUpperCase
// return call `join` on `charsArr` pass '' as arg
//
// declare function `toWeirdCase` define parameter `string`
// set variable `wordsArr` = call `split` on `string` pass ' '
// set variable `newWordsArr` = `[]`
// for loop `(i = 0; i < wordsArr.length; i += 1)`
//    if `i` % 2 === 0
//      call `push` on `newWordsArr` pass `wordsArr[i]`
//    else if `wordsArr[i].length` < 4
//      call `push` on `newWordsArr` pass `wordsArr[i]`
//    else
//      set variable weirdWord = pass `wordsArr[i]` to `fourthUpper`
//      call `push` on `newWordsArr` pass weirdWord`
// return call `join` on `newWordsArr` pass space
// C:
function fourthUpper(string) {
  let charsArr = string.split('');
  for (i = 3; i < charsArr.length; i += 4) {
    charsArr[i] = charsArr[i].toUpperCase();
  }
  return charsArr.join('');
}

function toWeirdCase(string) {
  let wordsArr = string.split(' ');
  let newWordsArr = [];
  for (i = 0; i < wordsArr.length; i += 1) {
    if (i % 2 === 0) {
      newWordsArr.push(wordsArr[i]);
    } else if (words[i].length < 4) {
      newWordsArr.push(wordsArr[i])
    } else {
      let weirdWord = fourthUpper(wordsArr[i])
      newWordsArr.push(weirdWord);
    }
  }
  return newWordsArr.join(' ');
}
console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// 4)
// P:
// input-array of integers, output, pair of integers of array that are closest
// mental model
// sort array in ascending order, set new empty array
// for each index, place given index and following index in nested array and push to new array
// iterate through new array, for each index determine difference, set lowest variable = to
// difference if difference is lower than current lowest
// D: array, numbers
// A:
// declare function `closestNumbers` define parameter `numbers`
// call `sort` on `numbers` pass callback `(a, b) => a - b`
// set variable `pairsArr` = []
// for loop `(i = 0; i < numbers.length - 1; i += 1)`
//    set variable `pair` = [numbers[i], numbers[i + 1]];
//    call `push` on `pairsArr` and pass 'pair`
// let `lowestPair` = `pairsArr[0]`
// let `lowest` = `pairsArr[0][0]` - `pairsArr[0][1]`
// 
// call `forEach` on `pairsArr` for each `pair` =>
//    `difference` = pair[0] - pair[1]
//    if (`difference` < `lowest`)
//    lowestPair = pair
// return `lowestPair`
function closestNumbers(numbers) {
  numbers.sort((a,b) => a - b);
  let pairsArr = [];
  for (i = 0; i < numbers.length - 1; i += 1) {
    let pair = [numbers[i], numbers[i + 1]];
    pairsArr.push(pair);
  }
  let closestPair = pairsArr[0];
  let lowest = Math.abs(pairsArr[0][0] - pairsArr[0][1]);
  pairsArr.forEach(pair => {
    let difference = Math.abs(pair[0] - pair[1]);
    if (difference < lowest) {
      lowest = difference;
      closestPair = pair;
    }
  });
  return closestPair;
}


console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]

// 5)
// P: input-string, output-character that occurs least often
// Rules:
// if multiple characters occur the same lowest amount, return the one that occurs first
// mental model
// declare a howManyOccurances function, declare a least common character function
// how many occurrances takes char and string and returns number of how many times char occurs
// leastCommonChar takes a string
// split string to array of chars, iterate over array, for each char, pass char and string to 
// howManyOccurances function and store value in lowest variable, if lowest is lower than previous
// iteration, reassign
// D: string, array
// A:
// declare function `howManyOccurances` define parameter `targetChar` and `string`
//  set variable `charsArr` call `split` on `string` pass ''
//  set variable `count`
//  call `forEach` on `charsArr` for each `char` => 
//      if `char.toLowerCase()` === `targetChar.toLowerCase()`
//        count += 1
//  return `count`
// declare function `leastCommonChar` define parameter `string`
//  set variable `charsArr` = call `split` on `string` pass ''
//  set variable `lowest` = call `howManyOccurrances` pass `charsArr[0]` and `string`
//  set variable `lowestChar` = charsArr[0]
//  call `forEach` method on `charsArr` for each => `char`
//    set variable `count` = call `howManyOccurrances` pass `char` and `string`
//    if `count` < `lowest`
//      reassign `lowest` = `count`
//      reassign `lowestChar` = `char`
// return `lowestChar`
// C:
function howManyOccurrances(targetChar, string) {
  let charsArr = string.split('');
  let count = 0;
  charsArr.forEach(char => {
    if (char.toLowerCase() === targetChar.toLowerCase()) {
      count += 1;
    }
  });
  return count;
}

function leastCommonChar(string) {
  let charsArr = string.split('');
  let lowest = howManyOccurrances(charsArr[0], string);
  let lowestChar = charsArr[0];
  charsArr.forEach(char => {
    let count = howManyOccurrances(char, string);
    if (count < lowest) {
      lowest = count;
      lowestChar = char;
    }
  });
  return lowestChar.toLowerCase();
}

// E:
console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// 1) count letters
// P: input-string, output-object with each key letter in string and value count of letter in str
// Rules:
// all lowercase
// mental model
// create empty object, split string into array of chars, iteratate over that array, for each
// char, object[char] += 1
// D: string, array, object
// A:
// declare function `letterCount` define parameter `string`
// set variable `letterCountObj` = {}
// set variable `charsArr` = call `split` on `string` pass ''
// call `forEach` on `charsArr` for each `char` => 
//  if `!letterCountObj[char]` 
//   init `letterCountObj[char]` = 1
//  else
//    letterCountObj[char] += 1
// return letterCountObj
// C:
function letterCount(string) {
  let letterCountObj = {};
  let charsArr = string.split('');
  charsArr.forEach(char => {
    if (!letterCountObj[char]) {
      letterCountObj[char] = 1
    } else {
      letterCountObj[char] += 1;
    }
  });
  return letterCountObj;
}

console.log(letterCount('codewars'));
console.log(letterCount('activity'));
console.log(letterCount('arithmetics'));

// 2) Find All Pairs
// P: input-arry, output- number of pairs in array
// Rules: if array empty or contains 1 element return 0
// mental model
// for each element, determine how many occurrances there are of that element, divide those
// occurrances by 2 round down, add all pairs up
// A:
// declare function `howManyOccurrances` define parameter `targetElement`, `array`
//  set variable `count` = `0`
//  call `forEach` on `array` for each `element` =>
//    if `element` === `targetElement` `count` += 1
//  return `count`
// declare function `howManyPairs` define parameter `array`
// set variable `allOccurrancesArr` = []
// set variable `alreadyChecked` = []
// call `forEach` on `array` for each `element` =>
//  if ! call `includes` on `alreadyChecked` pass `element`
//  call `push` on `allOccurrancesArr` pass result of pass `element` and `array` to `howManyOccurrances`
//  call `push` on `alreadyChecked` pass `element`
// set variable pairsArr = call `map` on `allOccurrancesArr` for each `element` =>
//    return call `Math.floor` pass `element` / 2
// set variable pairs = call `reduce` on `pairsArr` pass callback 
//    (accum, element) => accum + element, 0
// return `pairs`
// C:
function howManyOccurrances(targetElement, array) {
  let count = 0;
  array.forEach(element => {
    if (element === targetElement) {
      count += 1;
    }
  });
  return count;
}

function howManyPairs(array) {
  let allOccurrancesArr = [];
  let alreadyChecked = [];
  array.forEach(element => {
    if (!alreadyChecked.includes(element)) {
      allOccurrancesArr.push(howManyOccurrances(element, array));
      alreadyChecked.push(element);
    }
  });
  let pairsArr = allOccurrancesArr.map(element => Math.floor(element / 2));
  return pairsArr.reduce((accum, elem )=> accum + elem, 0);
}
// E
console.log(howManyPairs([1, 2, 2, 20, 6, 20, 2, 6, 2])) //  -->4
console.log(howManyPairs([1, 2, 5, 6, 5, 2])) // 2
let arr = [2, 3, 3, 4, 3, 5, 6, 7]
console.log(howManyPairs(arr)); // 1

// 3) Substring Instance Count
// P: input-string, substring, output-occurrances of that substring in the string
// Rules: no overlap
// mental model
// call string.match and return length of return value
// D: string, array
// A:
// declare function `instanceCount` define parameter `string`, `substring`
// return length of call `matchAll` on `...string` pass `substring` surround with []
// C:
function instanceCount(string, substring) {
  return string.match(substring).length;
}

console.log(instanceCount('abcdeb','b'));
console.log(instanceCount('abc','b'));
console.log(instanceCount('abbcb','bb'));

// 4) Longest Vowel Chain
// P: input-string, output-length of longest vowel chain
// rules: no spaces, all lowercase
// mental model
// store const array of vowels
// split string into array of characters, set count variable, if character is vowel
// increase count by 1, if not check if count is higher than highest, if yes, reassign
// highest to count, reassign count to 0
// D: string, array
// A:
// set variable const `VOWELS` = ['a', 'e', 'i', 'o', 'u',]
// declare function `longestVowelCount` define parameter `string`
// set variable `charsArr` = call `split` on `string` pass ''
// set variable `count` = 0
// set variable `highest` = 0
// for loop `(i = 0; i < string.length; i += 1)
//  if call `includes` on `VOWELS` `string[i]`
//    reassign `count` += 1
//    if `count` > `highest`
//      `highest` = `count`
//  else
//    `count` = 0
// return `highest`
// C:
const VOWELS = ['a', 'e', 'i', 'o', 'u'];
function longestVowelCount(string) {
  let count = 0;
  let highest = 0;
  for (i = 0; i < string.length; i += 1) {
    if (VOWELS.includes(string[i])) {
      count += 1;
      if (count > highest) {
        highest = count;
      }
    } else {
      count = 0;
    }
  }
  return highest;
}

// E:
console.log(longestVowelCount("codewarriors")) // 2
console.log(longestVowelCount("suoidea")) // 3
console.log(longestVowelCount("ultrarevolutionariees")) // 3

// 5) Non-Even Substrings
// P: input-string of integers output- number of odd substrings that can be formed
// mental model
// create function that determines leading substrings, create function that determines all substrs
// filter results from that function to substrings that, when coerced to number are odd
// for leading substrings function- set empty array, iterate through string with for loop, call 
// slice() on string, pass 0 and current length at iteration, push that to array return that array
// for all substrings function- take string, set empty array, set current substring variable,
// iterate over string with for loop, initialize i to 0 and increment by 1, while i < string.length
// pass current string to leading substrings, push result to empty array reassing string
// reassign current substring to string,slice(i)
// return flattened array
// create odd only function
// pass string to all substrings function 
// call filter on result, return truthy if Number(element) % 2 !== 0
// D: string; number, array
// A:
// declare function `leadingSubstrings` define parameter `string`
//  set variable leadingSubsArr = []
//  for loop `(i = 1; i < string.length; i += 1)`
//    call `push` on `leadingSubsArr` pass `string.slice(0, i)
//  return `leadingSubstringsArr`
// declare function `allSubstrings` define parameter `string`
//  set variable `allSubsArr` = []
//  for loop (i = 1; - < string.length; i += 1)
//    set variable currentSubstring = string.slice(i)
//    call `push` on `allSubsArr` pass call `leadingSubstrings` pass `currentSubstring`
//  return call `flat` on `allSubsArr`
// declare function `oddSubstrings` define parameter `string`
//  set variable substrings = call `allSubstrings` pass `string`
//  call `filter` on `substrings` for each `substring` => call `Number` pass substring % 2 !== 0
//  return length
// C:
function leadingSubstrings(string) {
  let leadingSubsArr = [];
  for (i = 1; i < string.length; i += 1) {
    leadingSubsArr.push(string.slice(0, i));
  }
  return leadingSubsArr;
}

function substrings(string) {
  let allSubstringsArr = [];
  for (i = 1; i < string.length; i += 1) {
    let currentSubstring = string.slice(i);
    allSubstringsArr.concat(leadingSubstrings(currentSubstring));
  }
  return allSubstringsArr;
}

function oddSubstrings(string) {
  let substrings = allSubstrings(string);
  let oddSubsArr = substrings.filter(substring => Number(substring) % 2 !== 0);
  return oddSubsArr.length
}