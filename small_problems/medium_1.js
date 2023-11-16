// 1) Rotation
// P: input-array, output-new array with frist item moved to last
// Rules:
// return must be a new array
// if input is not array return undefined
// if input is empty array return empty array
// mental model
// call slice on input array to make copy array, call shift on copy array store shifted element in
// a variable, push that variable to end of copy array
// D: arrays
// A:
// declare function `rotateArray` define parameter `arr`
// if statement
//    if `!Array.isArray(arr)`
//      return `undefinded`
//    if `Array.isArray(arr)` && length of `array` < 1
//      return [];
//    else:
//      set variable `newArr` = call `slice()` on `arr`
//       set variable `shiftedElement` = call `shift()` on `newArr` with no arguments
//      call `push()` on `newArr` and pass `shiftedElement` as argument
//      return `newArr`
// C:
function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length === 0) {
    return [];
  } else {
    let newArr = arr.slice();
    let shiftedElement = newArr.shift();
    newArr.push(shiftedElement);
    return newArr;
  }
}

// E:
console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]

// Rotation Pt 2
// P: input-number and count, output-number with specified digit moved to end
// Rules
// move count digit from the right all the way to right, move remaining to the left
// assume input will never be empty
// mental model
// coerce number to string to array, splice -count from array, store in variable, push that 
// variable to end, join array and coerce back to number
// D: number, string, array
// A:
// declare function `rotateRightmostDigit` define parameter `number` and `count`
// set variable strNum = call `String()` on `number`
// set variable numArr = call `split('')` on `strNum`
// set variable `countDigit` = `numArr[numArr.length - count]`
// call `splice()` on `numArr` pass `-count` and 1 as args
// call `push` on `numArr` pass `countDigit`
// return call `Number()` on call `join('')` on `numArr`
// C:
function rotateRightmostDigits(number, count) {
  let strNum = String(number);
  let numArr = strNum.split('');
  let countDigit = numArr[numArr.length - count]
  numArr.splice(-count, 1);
  numArr.push(countDigit);
  return Number(numArr.join(''));
}


// E:
console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917


// 3) Rotation Pt 3
// P: input-number, output-max rotation of number
// Rules:
// should use rotateRightmostDigits
// leading zeroes not returned
// mental model 
// store length in numLength variable, call rRD function pass length as argument, call rrd function
// pass length - 1 as argument, call rrd pass length - 2, call rrd pass length - 3, call rrd pass
// length - 4
// D: number, string, array
// A:
// declare function `maxRotation()` defines parameter `number`
// set `count` = call `String()` pass `number` as argument get length property
// while loop condition `count >= 2` (because at max rotation last  2 are left untouched)
// number = call `rotateRighmostDigits()` pass number, count
// return number
// C:
function maxRotation(number) {
  let count = String(number).length;
  while (count >= 2) {
    number = rotateRightmostDigits(number, count);
    count -= 1;
  }
  return number;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845

// 4) Stack


// 5) Word to Digit
// P: input-string, output-string with number words converted to digits
// Rules:
// digits from 0-9
// mental model
// store object of number words, words are keys digits are values, create array of keys
// iterate through array, for each key, create regex expression and replace all instances of regex
// in sentence with object[word]
// D: object, string, number, array
// A:
// set const variable `NUMBERS` = {'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4 'five': 5, 
//                                  'six': 6 'seven': 7 'eight': 8, 'nine': 9}
// declare function `wordToDigit` define parameter `sentence`
// set variable `numberWords` = call `Object.keys()` pass `NUMBERS`
// call `forEach()` on `numberWords` pass callback
// for each `word` =>
//    set variable 'regex' = new RegExp (word, 'g')
//    call `replace()` on sentence and pass as arguments `regex`, and `NUMBERS[word]`
// return sentence
// C:
const NUMBERS = { 'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 
                'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9};
function wordToDigit(sentence) {
  let numberWords = Object.keys(NUMBERS);
  numberWords.forEach(word => {
    let regex = new RegExp (word, 'g');
    sentence.replace(regex, NUMBERS[word]);
  });
  return sentence;
}


// E:
wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

// 6) Fibonacci Number Location
// P: input- length, output, first index of fibonacci sequence where number of digits is length
// Rules:
// use BigInt numbers
// mental model
// create fibonacci sequence keep sequence going until String(number).length = input length
// D: BigInt
// A: 
// declare function `findFibonacciIndexByLength` define parameter `length`
// set variable `first` = 1n
// set variable `second` = 1n
// set variable `count` = 2n
// set variable `fibonacci`
// do while loop
// do
// assign `fibonacci` = `first` + `second`
// reassign `first` = `second`
// reassign `second` = `fibonacci`
// increment `count` += 1n
// while (call `String()` on `fibonacci` < `length`)
// return count
// C:
function findFibonacciIndexByLength(length) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonacci;
  do {
    fibonacci = first + second;
    first = second;
    second = fibonacci;
    count += 1n;
  } while(String(fibonacci).length < length);
  return count;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.

// 7) Recursive Fibonacci

// 8) Fibonacci (Procedural)
// P: input-number output- input number of the fibonacci sequence
// mental model 
// set first and second variables, set fibonacci variable, set count variable, when count ===
// input number, return fibonacci
// D: numbers
// A:
// declare function fibonacci define parameter `number`
// set variable `first` = 1
// set variable `second` = 1
// set variable fibonacci
// set count = 2
// do while loop
// `do` assign `fibonacci` = first + second
// reassign first = second
// reassign second = fibonacci
// count += 1
// `while` `count < number`
// return fibonacci;
// C:
function fibonacci(number) {
  let first = 1;
  let second = 1;
  let count = 2;
  let fibonacci;
  do {
    fibonacci = first + second;
    first = second;
    second = fibonacci;
    count += 1
  } while (count < number);
  return fibonacci;
}

// E
fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050