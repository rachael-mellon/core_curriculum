// 1)
// P: input- positive integer, output- sum of all digits in integer
// rules:
// cannot use for, while, or do/while loop
// call String() and pass number, call split(), call reduce
// D: number, string, array
// A:
// set variable `stringNum` = `Sting(inputNum)`
// set variable `digitsArray` = `stringNum.split('')`
// set variable `sum` = call `reduce()` on digitsArray, callback, accumulator
// callback body `accumulator` + `element` 
// `accumulator` = 0
// C:
function sum(number) {
  return String(number)
    .split("")
    .reduce((accum, digit) => accum + Number(digit), 0);
}
// or

function sumOfDigits(number) {
  let stringNum = String(number);
  let stringDigitsArray = stringNum.split('');
  let digitsArray = stringDigitsArray.map(element => Number(element));
  let sum = digitsArray.reduce((element, accumulator) => element + accumulator, 0);
  return sum;
}

// E:
console.log(sumOfDigits(23));           // 5
console.log(sumOfDigits(496));          // 19
console.log(sumOfDigits(123456789));    // 45

// 2) Alphabetic Numbers
// P: input-array of numbers, output-array of numbers, sorted alphabetically by #'s english name
// Rules:
// array will contain numbers from 0 - 19 
// integers will be positive
// store number names in a constant array, index = number name, call sort on input array, call sort
// callback function will access indexes of const array based on elements of input array, and sort
// based on elements at indexes of const array
// A:
// set const variable `NUMBER_NAMES` = array containing number names at corresponding indexes
// declare function `alphabeticNumberSort` define parameter `array`
// call `sort()` on `array`
// `sort()` callback define `a`, `b`, return array sorted based on if `a` index of `NUMBER_NAMES`
// C:

const NUMBER_NAMES = ['zero', 'one', 'two', 'three', 'four', 'five',
                      'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
                      'twelve', 'thirteen', 'fourteen', 'fifteen',
                      'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function alphabeticNumberSort(array) {
  return array.sort((a, b) => {
    if (NUMBER_NAMES[a] > NUMBER_NAMES[b]) {
      return 1;
    } else if (NUMBER_NAMES[a] < NUMBER_NAMES[b]) {
      return -1;
    } else {
      return 0;
    }
  });
}



// E:
console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// 3)
// P: input-two arrays of numbers, output-one array of products of all number pairs from input arrs
// Q- inter-array numlitplication or just inner? A-inter ONLY
// Q- if a combo already exists should it be skipped? no?
// Rules:
// return array should be in ascending order
// set empty products, iterate through array 1, for each number, iterate through array 2, push
// product of array 1 element * array 2 element to products array, sort products array with sort()
// D: arrays, numbers
// A:
// declare function `multiplyAllPairs()` define parameters array1 and array2
// set variable `products` = []
// call `forEach()` on `array1` define parameter `number1`
// for each `number1` 
//      call `forEach()` on `array2` define parameter `number2`
//        for each `number2`
//          push `number1` * `number2` to `products`
// C:
function multiplyAllPairs(array1, array2) {
  let products = [];
  array1.forEach(number1 => {
    array2.forEach(number2 => {
      products.push(number1 * number2);
    });
  });
  return products.sort((a, b) => a - b);
}
// E:
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

// 4) Leading Substrings
// P: input-string, output-array of substrings,
// Rules:
// substrings must start with first character of input string
// list should be sorted from shortest to longest
// set empty array, iterate through string with for loop, call slice() on string, pass 0 and current
// length at iteration, push that to array return that array
// D: string, arrays
// A:
// declare function `leadingSubstrings` define parameter `string`
// set variable `substringArray` = []
// for loop `(length = 1; length < string.length; length += 1)`
// call `push()` on `substringArray` pass- call `slice()` on string and pass 0, length, 
// return `substringArray`
// C:
function leadingSubstrings(string) {
  let substringArray = [];
  for (length = 1; length <= string.length; length += 1) {
    substringArray.push(string.slice(0, length));
  }
  return substringArray;
}

// OR

function leadingSubstrings(string) {
  let charsArr = string.split('');
  let substringTotal = '';
  let leadingSubstringsArr = [];
  charsArr.forEach(char => {
    substringTotal += char;
    leadingSubstringsArr.push(substringTotal);
  });
  return leadingSubstringsArr;
}


// E:
console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// 5)
// P: input-string, output-array of substrings, all possible substrings from each index
// Rules:
// should use leadingSubstrings method
// order of list should be based on index of leading character of substring
// mental model
// set empty array, for loop, for each iteration, currentstring = string.slice[i], pass current 
// string to leadingSubstrings
// D: strings, arrays
// A:
// declare function `substrings` that defines parameter `string
// set variable `allSubstringsArr` = []
// for loop `(i = 0; i < string.length; i += 1)`
//  for each start index, set variable `currentSubstring` = call `slice()` on string, pass i
//    `currentSubstring` will equal the string minus the previous character for each iteration
//   call `push` on `allSubstringsArr` and pass the result of passing `currentSubstring` to 
//        `leadingsubstrings`
// return `allSubstringsArr` and call `flat` on it 
// A:
function substrings(string) {
  let allSubstringsArr = [];
  let currentSubstring;
  for (i = 0; i < string.length; i += 1) {
    currentSubstring = string.slice(i);
    allSubstringsArr.push(leadingSubstrings(currentSubstring));
  }
  return allSubstringsArr.flat();
}
// E:
console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]


// 6) Palindromic strings
// P: input-string, output-array of all palindromic strings
// Rules:
// palindromic = same forwards and backwards
// case insensitive
// sensitive to non alphanumeric characters
// should use substrings function
// sorted by order of appearance in string
// duplicate palindromes should be displayed as many times as they appear
// strings with no palindromes should return empty array
// mental model
// create variable = passing input string to substrings, iterate through variable with filter
// if logic- select item if paindromic
// to test if palindromic, split element then reverse it then join it and test for equality
// D: string, array
// A:
// declare function `isPalindrome` define parameter string
//  if logic with ternary expression:
// string.split('').reverse().join('') === string ? true : false
// ^^ add logic for string.length > 1
// declare function `palindromes` define parameter string
//  set variable `substringsArr` = call `substrings` on `string`
//  set variable `palindromicSubstrings` = call `filter()` on `substringsArr` 
// for each element, select element if `isPalindrome(element)` === true
// return `palindromicSubstrings`
// C:
function isPalindrome(string) {
  return string.split('').reverse().join('') === string && string.length > 1 ? true : false;
}

function palindromes(string) {
  let substringsArr = substrings(string);
  let palindromicSubstrings = substringsArr.filter(element => isPalindrome(element));
  return palindromicSubstrings;
}
// OR
function palindromes(string) {
  let substringsArray = substrings(string);
  let palindromesArr = substringsArray.filter(substring => {
    return (substring.split('').reverse().join('') === substring) && (substring.length > 1) ? true : false;
  });
  return palindromesArr;
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]


// 7) sum of sums
// P: input-array, output-sum of all sums of each leading subsequence
// Rules:
// array always contains at least one number
// mental model
// set empty array, iterate through array with for loop, for each iteration, keep a running total,
// push totals to array then reduce array
// D: arrays, numbers
// A:
// declare function `sumOfSums` define paramter `numbers`
// set variable `sumsArr` = []
// set variable `currentTotal` = 0
// call `forEach` on `numbers 
// for each number `currentTotal` += `number`
// push `currentTotal` to `sumsArr`
// reduce `sumsArr`
// C:
function sumOfSums(numbers) {
  let currentTotal = 0;
  let sumsArr = [];
  numbers.forEach(number => {
    currentTotal += number;
    sumsArr.push(currentTotal);
  });
  return sumsArr.reduce((accum, elem) => accum + elem, 0);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35


// 8) Grocery List
// P: input-array of nested arrays of fruit and amount, output-flat array of fruit names in the
// specified amount
// mental model
// set empty array
// use Object.fromEntries to generate object from nested array 
// iterate through input array, for each element, let count = element[1]
//  while loop- while count >= 1, push element[0] to the empty array, decrement count by 1
// D: string, array, object
// A:
// declare function `buyFruit` define parameter `fruitList`
// set variable `fruitTotals` = []
// call `forEach` on `fruitList` for each `fruit` => 
//  count = fruit[1]
//  while loop `(while count >= 1)`
//    call `push` on `fruitTotals` pass `fruit[0]`
//    decrement `count` by 1
// C:

function buyFruit(fruitList) {
  let fruitTotals = [];
  fruitList.forEach(fruitPair => {
    let count = fruitPair[1];
    while (count >= 1) {
      fruitTotals.push(fruitPair[0]);
      count -= 1;
    }
  });
  return fruitTotals;
}

// E
console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// 9) Inventory Item Transactions
// P: input-id number, array of nested objects containing transactions, output-array of nested
//  objects containing transactions only of the desired id
// mental model
// iterate through transactions array with filter, select elements if element['id'] === id number
// D: array, object
// A:
// declare function `transactionsFor` define parameters `inputId` and `transactions`
// return call `filter` on `transactions` for each transactions, return true if
//  transactions['id'] === inputId
// C:

function transactionsFor(inputId, transactions) {
  return transactions.filter(transaction => transaction['id'] === inputId);
}


// E:
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

transactionsFor(101, transactions);
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

// 10)
// Inventory Item Availability
// P: input-item id and transaction list, output-boolean representing item availability
// Rules:
// should use `transactionsFor` function from last problem
// take note of movement key, in means added out means subtracted
// available means sum of quantities of each transaction > 0
// mental model
// create new array of specific id transactions with `transactionsFor`, 
// set variable total = 0
// iterate through the created array, for each element, if movement = in, total += quantity
//  if movement = out, total -= quantity, return quantity > 0
// D: array, object, numbers
// A:
// declare function `isItemAvailable` define parameters `inputId`, transactions
// set variable `idTransactions` = `transactionsFor(inputId, transactions)`
// set variable `sum` = 0
// call `forEach` on idTransactions`
// for each `transaction` =>
// if statement- if `transaction[movement]` === 'in'
//    sum += `transaction['quantity']`
//  if `transaction[movement]` === 'out'
//    sum -= `transaction['quantity']
// return sum > 0
// C:

function isItemAvailable(inputId, transactions) {
  let idTransactions = transactionsFor(inputId, transactions);
  let sum = 0;
  idTransactions.forEach(transaction => {
    if (transaction['movement'] === 'in') {
      sum += transaction['quantity'];
    } else if (transaction['movement'] === 'out') {
      sum -= transaction['quantity'];
    }
  });
  return sum > 0;
}

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true