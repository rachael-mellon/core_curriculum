// 1) Letter Case Percentage
// P: input- string, output- object 3 properties- % uppercase, % lowercase, % neither
// Rules:
// spaces count as neither
// string will always contain at least one character
// mental model
// set object with 3 properties, set uppercase lowercase and neither variables
// split string into array, iterate over array with forEach, if char is uppercase, uppercase +=1
// etc set object property = variable / length * 100
// D: string, array, object
// A:
// declare function `letterPercentages` defines parameter `string`
// set variable `letterPercentageObj` = set keys `uppercase` = 0, `lowercase` = 0, `neither` = 0
// set variables `upperCount`, `lowerCount` and `neitherCount`
// set variable `charsArr` = call `split()` on `string` pass '' as arg
// call `forEach` on `charsArr` => define parameter char
// if statement with 2 conditions:
// if `(char >= 'a')` && `(char <= 'z')`
// set `lowerCount` += 1
// if `(char >= 'A')` && `(char <= 'Z')`
// set `upperCount` += 1
// else set `neitherCount` += 1
// set `letterPercentageObj[uppercase]` = `upperCount` / charsArr.length * 100
// set `letterPercentageObj[lowercase]` = `lowerCount` / charsArr.length * 100
// set `letterPercentageObj[neither]` = `neitherCount` / charsArr.length * 100
// C: THIS IS INCORRECT CHECK SOLUTION AND TRY AGAIN
let letterPercentageObj = { uppercase: 0, lowercase: 0, neither: 0 };
let upperCount = 0;
let lowerCount = 0;
let neitherCount = 0;
function letterPercentages(string) {
  let charsArr = string.split('');
  charsArr.forEach(char => {
    if ((char >= 'A') && (char <= 'Z')) {
      upperCount += 1;
    } else if ((char >= 'a') && (char <= 'z')) {
      lowerCount += 1;
    } else {
      neitherCount += 1;
    }
  });
  letterPercentageObj[uppercase] = (upperCount / charsArr.length) * 100;
  letterPercentageObj[lowercase] = (lowerCount / charsArr.length) * 100;
  letterPercentageObj[neither] = (neitherCount / charsArr.length) * 100
  return letterPercentageObj;
}


// E:
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

// 2) Triangles
// P: input- 3 numbers, output- type of triangle of invalid
// Rules:
// valid triangle = 2 shortest sides  sum > longest side
// equilateral= all sides equal
// isoceles= 2 sides same legnth 1 different
// scalene= all sides different
// input will be 3 numbers
// put input numbers in array, sort array in ascending order 
// guard clauses for invalid-
// if index 0 + index 1 <= index 2 
// if index 0 === 0
// check for equilateral
// if index 0 === index 1 && index 1 === index 2
// check for scalene
// if index 0 === index 1 && index 1 !== index 2
// D: numbers, array
// A:
// declare function `triangle` define parameters `num1` `num2` `num3`
// set variable anglesArr = call push on an empty array pass `num1` `num2` `num3`
// call sort on `anglesArr` pass callback `(a, b) => a - b` to sort in ascending order
// if statement
//  if index 0 + index 1 <= index 2 
//  if index 0 === 0
//    return 'invalid`
//  if index 0 === index 1 && index 1 === index 2
//    return `equilateral`
//  if index 0 === index 1 && index 1 !== index 2
//    return `isoceles`
// C:
function triangle(num1, num2, num3) {
  let anglesArr = [];
  anglesArr.push(num1, num2, num3);
  anglesArr.sort((a, b) => a - b);
  if (anglesArr[0] + anglesArr[1] <= anglesArr[2]) {
    return 'invalid';
  } else if (anglesArr[0] === 0) {
      return 'invalid';
  } else if ((anglesArr[0] === anglesArr[1]) && (anglesArr[1] === anglesArr[2])) {
      return 'equilateral';
  } else if (((anglesArr[0] === anglesArr[1]) && (anglesArr[1] !== anglesArr[2])) || ((anglesArr[1] === anglesArr[2]) && (anglesArr[1] !== anglesArr[0]))) {
    return 'isoceles';
  } else if ((anglesArr[0] !== anglesArr[1]) && (anglesArr[0] !== anglesArr[2]) && (anglesArr[1] !== anglesArr[2])) {
    return 'scalene';
  }
}

// E:
console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"

// 3) Tri-Angles
// P: input- 3 angles in degrees, output- string indicating triangle classificatin
// Rules:
// assume all inputs are integers and in degrees
// invalid triangle- angles do not add up to 180, angle = 0
// right triangle- one angle = 90
// obtuse- one angle > 90
// acute- all angles < 90
// mental model 
// push inputs to an array, iterate over array, if includes value = 90, return right
// if includes value < 90, return obtuse, if no value >= 90 return acute
// D: numbers, array
// A:
// declare function `isValid()` define parameter `angles`
//  if call `includes()` on `angles` pass `0`
//    return false
//   if call `reduce` on `angles` pass callback w/ parameters accum, elem => accum + elem, accum = 0
//    if !== 180 return false
//   else return true
//
// declare function `triangle` define parameters `angle1`, `angle2`, `angle3`
//  set variable `anglesArr` = [];
//  call `push()` on `anglesArr` pass `angle1`, `angle2`, `angle3`
// 
//  if statement:
//  if call `some()` on `anglesArr` pass callback (angle) => angle === 90
//    return `right`
//  else if call `some` on `anglesArr` pass callback (angle) => angle > 90
//    return `obtuse`
//  else return `acute`
// C:
function isValid(angles) {
  let total = angles.reduce((accum, elem) => accum + elem, 0)
  if (!angles.includes(0) && total === 180) {
    return true;
  } else {
    return false;
  }
}

function triangle1(angle1, angle2, angle3) {
  let anglesArr = []
  anglesArr.push(angle1, angle2, angle3);
  if (!isValid(anglesArr)) {
    return 'invalid';
  } else if (anglesArr.some((angle) => angle === 90)) {
    return 'right';
  } else if (anglesArr.some((angle) => angle > 90)) {
    return 'obtuse';
  } else {
    return 'acute';
  }
}


// E:
console.log(triangle1(60, 70, 50));       // "acute"
console.log(triangle1(30, 90, 60));       // "right"
console.log(triangle1(120, 50, 10));      // "obtuse"
console.log(triangle1(0, 90, 90));        // "invalid"
console.log(triangle1(50, 50, 50));       // "invalid"

// 4) Unlucky Days


// 5) Next Featured Number
// P: input-number, output-next highest featured number
// Rules:
// Featured number =
// odd, multiple of 7, each digit occurs once
// max possible featured number = 9876543201
// mental model
// create functions to determine if odd, if multiple of 7, if all digits unique
// while loop, while number < max featured, increment number by 1, if number is odd, is mult of 7
// and is unique, return number else, continue
// D: numbers
// A:
// set const variable `MAX_FEATURED` = 9876543201
//
// declare function `isOdd` defines paramter `number`
//  if `number` % 2 !== 0 return true else return false
//
// declare function `isMultipleOf7`
//  if number % 7 === 0 return true else return false
//
// declare function `allDigitsUnique` defines parameter `number`
//  set variable `strNum` = call `String()` pass `number`
//  set variable `digitsArr` = call `split()` on `strNum` pass ''
//  set variable `nonDupesArr` = []
//  set variable `result` = `true`
//  for loop `(i = 0; i < digitsArr.length; i += 1)`
//    if ! call `includes()` on `nonDupesArr` pass `digitsArr[i]` 
//        call push() on `nonDupesArr` pass `digitsArr[i]`
//    else if call `includes()` on `nonDupesArr` pass `digitsArr[i]`
//    reassign `answer` = false 
//
// declare function `isFeatured()` define parameter `number`
//  if pass `number to `isOdd` && pass `number` to `isMultipleOf7` && pass `number` to `allDigitsUnique`
//    return `true`
//  else return `false`
//
// declare function `featured` define parameter `number`
//  if `number` >= `MAX_FEATURED`
//    return 'there are no possible higher featured numbers'
//  while loop 
//   while `number` < `MAX_FEATURED`
//  `number` += 1
//  if pass `number` to `isFeatured`
//  return `number`
//  else continue;
// C:
const MAX_FEATURED = 9876543201
function isOdd(number) {
  return number % 2 !== 0 ? true : false;
}

function isMultipleOf7(number) {
  return number % 7 === 0 ? true : false;
}

function allDigitsUnique(number) {
  let strNum = String(number);
  let digitsArr = strNum.split('');
  let nonDupesArr = [];
  let result = true;
  for (i = 0; i < digitsArr.length; i += 1) {
    if (!nonDupesArr.includes(digitsArr[i])) {
      nonDupesArr.push(digitsArr[i]);
    } else if (nonDupesArr.includes(digitsArr[i])) {
      result = false;
    }
  }
  return result;
}

function isFeatured(number) {
  return isOdd(number) && isMultipleOf7(number) && allDigitsUnique(number);
}

function featured(number) {
  if (number >= MAX_FEATURED) {
    return 'Error: There is no higher possible featured number'
  }
  while (number < MAX_FEATURED) {
    number += 1
    if (isFeatured(number)) {
      return number;
    } else {
      continue;
    }
  }
}


// E:
featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."

// 6) Sum Square - Squares Sum
// P: input-count, output-difference between square of sum of all numbers 1-count inclusive and 
// sum of all numbers 1-count squared inclusive
// Rules:
// input all positive integers
// mental model:
// create array of all integers 1-count
// for sum squared- iterate through array with reduce then square result
// for squares sum- iterate through array with map then reduce
// A:
// declare function `sumSquareDifference` define parameter `count`
// set variable `countDigits` = []
// for loop
// for `(i = 1; i <= count; i +=1)`
//  call `push` on `countDigits` pass `i` as argument
// set variable `sum` =  call `reduce` on `countDigits` pass callback `(accum, elem) => accum + elem, 0`
// set variable `sumSquared` = `sum` ** 2
// set variable `squares` = call `map` on `countDigits` pass callback `(num => num ** 2)`
// set variable `squaresSum` = call `reduce` on `squares` pass callback `(accum, elem) => accum + elem, 0`
// return `sumSquared` - `squaresSum`
// C:
function sumSquareDifference(count) {
  let countDigits = [];
  for (i = 1; i <= count; i +=1) {
    countDigits.push(i);
  }
  let sum = countDigits.reduce((accum, elem) => accum + elem, 0);
  let sumSquared = sum ** 2;
  let squares = countDigits.map(num => num ** 2);
  let squaresSum = squares.reduce((accum, elem) => accum + elem, 0);
  return (sumSquared - squaresSum);
}



// E:
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150

// 7) Bubble Sort

// 8) Longest Sentence
// P: input-string of sentences output-longest sentence + number of words
// Rules:
// sentences are separated by punctuation, punctuation includes !.?
// sentence must be logged at end with all punctuation intact
// mental model,
// split string into array of sentences by calling match with regex
// map array so all elements are length of sentences
// find index of largest length in mapped array, access that index of original array
// print that sentence and the length
// D: string, array, number
// A:
// declare function `longestSentence` define parameter `string`
// set variable `sentenceArr` = call `match` on `string` pass regex that represents a sentence
// set variable `sentenceLengths` = call `map` on `sentenceArr` pass 
//      callback (element => element.split(' ').length)
// set variable `longestIndex` = call `indexOf` on `sentenceLengths` pass 
//    call `Math.max` and pass `sentenceLengths` with spread syntax
// return `sentenceArr[longestIndex]` and a string with `sentenceLengths[longestIndex]`
// C:
function longestSentence(string) {
  let sentenceArr = string.match(/\w.*?[.!?]/g);
  let sentenceLengths = sentenceArr.map(sentence => sentence.split(' ').length);
  let longestIndex = sentenceLengths.indexOf(Math.max(...sentenceLengths));
  console.log(sentenceArr[longestIndex]);
  console.log(`The longest sentence has ${sentenceLengths[longestIndex]} words`);
}


// E:
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