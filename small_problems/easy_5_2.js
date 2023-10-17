// 1) cute angles
// P: function, input- float representing angle, output- string, angle in minutes, degreesm seconds
// 
// D: number, string
// A: create const variable `MINUTES_IN_DEGREE = 60` `SECONDS_IN_MINUTE = 60`
// create variable `degrees = parseInt(number)`
// create variable `rawMinutes = (number - degrees) * MINUTES_IN_DEGREE`
// create variable `minutes = parseInt(rawMinutes)`
// create variable `rawSeconds = (rawMinutes - minutes) * SECONDS_IN_MINUTE`
// create variable `seconds = parseInt(rawSeconds)
// declare function `leadingZeros`
// if number < 10
// return '0' + number
const MINUTES_IN_DEGREE = 60;
const SECONDS_IN_MINUTE = 60;

function leadingZeros(number) {
  if (number < 10) {
    return '0' + number;
  } else {
    return '' + number;
  }
}

function dms(number) {
  let degrees = parseInt(number);
  let rawMinutes = (number - degrees) * MINUTES_IN_DEGREE;
  let minutes = parseInt(rawMinutes);
  let rawSeconds = (rawMinutes - minutes) * SECONDS_IN_MINUTE;
  let seconds = parseInt(rawSeconds);
  return `${degrees}°${leadingZeros(minutes)}'${leadingZeros(seconds)}`;
}

// E:
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

// 2) combining arrays
// P: function input- two arrays output- return combined array with values from both
// no duplicate values
// arguments will always be arrays
// iterate through both arrays, push values to new array if not already included in it
// concat both arrays, filter arrays for duplicates
// D: arrays
// A: 
// declare function `union` define parameters `array1` and `array2`
// create new variable `concatArr` set equal to `array1.concat(array2)`
// call `filter` method on `concatArr` pass callback function
// if `concatArr` does not include element, select it

function union(array1, array2) {
  let concatArr = array1.concat(array2);
  let nonDupesArr = [];
  for (i = 0; i < concatArr.length; i += 1) {
    if (!nonDupesArr.includes(concatArr[i])){
      nonDupesArr.push(concatArr[i]);
    }
  }
  return nonDupesArr;
}

// E:
console.log(union(['a', 'a', 'b', 'b', 'c', 'd'], ['q', 'b', 's']));
console.log(union(['no', 'me'], ['no', 'ff']));
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

// 3) Halvsies
// P: input- array output- array with 2 nested arrays as elements
// 1st half of input array will be 1st nested array, second half will be 2nd nested array
// rules:
// Explicit:
// if array has odd number length put middle index in first array
// implicit:
// if array length is 1, 1st nested array contains single element, 2nd is empty array
// mental model
// set two variables = empty arrays
// find array length, divide by 2
// push first half to one array, push second half to other
// 
// D: arrays 
// A: 
// set `firstHalf = []`
// set `secondHalf = []`
// set `halfedArray = []`
// let halfIndex = Math.round(array.length / 2) - 1
// [0, 1, 2, 3, 4,]
// for loop, init i = 0, i < array.length; i += 1
// if statement condition:
//     i <= halfIndex
//      firstHalf.push(array[i])
//      - > halfIndex
//      secondHalf.push(array[i])
// set `halfedArray[0] = `firstHalf`
// set `haldedArray[1] = `secondHalf`
// return 
// C:
function halvsies(array) {
  let firstHalf = [];
  let secondHalf = [];
  let halfedArray = [];
  let halfIndex = Math.round(array.length / 2) - 1;
  for (i = 0; i < array.length; i += 1) {
    if (i <= halfIndex) {
      firstHalf.push(array[i]);
    } else if (i > halfIndex) {
      secondHalf.push(array[i]);
    }
  }
  halfedArray[0] = firstHalf;
  halfedArray[1] = secondHalf;

  return halfedArray;
}
// or could use slice 


// E:
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

// 4) find Duplicate:
// P: input- unordered array output- value that occurs twice in array
// will elements always be primitve values? will elements be nested arrays?
// look through every element stop when you find duplicate
// D: array, primitive elements
// A:
// set empty array `nonDupesArray` = []
// iterate through input array
// for loop:
// initialize i = 0; i < array.length; i += 1
// for each value, if `nonDupesArray` does not include value, push to `nonDupesArray`
// if `nonDupesArray` does include value, break from loop, return that value
// C:
function findDup(array) {
  let nonDupesArray = [];
  for (i = 0; i < array.length; i += 1) {
    if (!nonDupesArray.includes(array[i])) {
      nonDupesArray.push(array[i]);
    } else if (nonDupesArray.includes(array[i])) {
      return array[i];
    }
  }
}


// E:
console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73



// 5) Combine Two lists
// function input- two arrays, output- one array with elements from input arrays 1 & 2 alternating
// Explicit rules:
// both arrays are non empty
// both arrays have same number of elements
// Implicit rules
// indeces of each array can be accessed at the same time while iterating
// array length in condition of iteration will be the same
// D: arrays
// A:
// set empty array `combined` = []
// for loop i = 0; i < array1.length; i += 1
// `combined.push(array1[i]]);`
// `combined.push(array2[i]);`
// return `combined`
// C:

function interleave(array1, array2) {
  let combined = []
  for (i = 0; i < array1.length; i += 1) {
    combined.push(array1[i]);
    combined.push(array2[i]);
  }
  return combined;
}



// E:
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]


// 6) Multiplicative Average
// P: input- array, output- return value string multiplicative average rounded to 3 decimals
// Explicit rules:
// return value must have 3 decimal places
// Implicit rules:
// array values will always be integers
// multiply all numbers together with reduce, divide by 3, round to 3 decimal places, coerce to str
// D: array, number, string
// A:
// set variable = call reduce on the array, takes callback function and accumulator
// callback defines element, accumulator, => element * accumulator
// divide variable by array.length
// call Math.round pass variable and desired decimal place length

function multiplicativeAverage(array) {
  let product = array.reduce((element, accumulator) => element * accumulator, 1);
  let average = (product / array.length).toFixed(3);
  return String(average);
}

// E:
multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

// 7) Multiply Lists
// P: input- two arrays of numbers, output- new array elements are products of pairs
// Explicit rules:
// arrays have same number of elements
// pair = elements from arguments that have same index
// mental model:
// set empty array, iterate through both arrays at same time, push product of array1[index] and
// array[2][index] (same index) to empty array
// D: arrays
// A:
// set `products = []`
// iterate with for loop, init i = 0; i < array1.length; i += 1
// call push on `products` and pass `array1[i] * array2[i]`
// return `product`
// C:
function multiplyList(array1, array2) {
  let products = [];
  for (i = 0; i < array1.length; i += 1) {
    products.push(array1[i] * array2[i]);
  }
  return products;
}


// E:
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]


// 8) List of digits

// P: input- number, output- array of digits
// explicit rules:
// argument will be a positive integer
// array elements are digits
// D: number, array, string
// A:
// Coerce input to string with String() function
// set variable charArray = split string into array
// set variable digitsArray = call map on the array, pass callback that transform string to number
// with Number() function
// C:

function digitList(number) {
  let charArray = String(number).split('');
  let digitsArray = charArray.map(element => element = Number(element));
  return digitsArray;
}


// E:
console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]


// 9) How many?
// P: function input- array, output- log to console element of array + number of occurances
// set empty object, iterate through array, for each element, set count variable,
// if object[element] doesn't exist set it = 0, increase count by one
// if it does exist, increase count by 1
// D: array, string, object
// A:
// set variable occurences = {}
// for loop, i = 0; i < array.length; i += 1
// set array[i] = item
// if occurences[item], occurences[] += 1
// else if !occurences[array[i]], set occurences[array[i]] = 0, occurences[array[i]] += 1
// console.log(`{$item} => ${occurences[item]}`);
// C:
function countOccurrences(array) {
  let occurences = {};
  for (i = 0; i < array.length; i += 1) {
    let item = array[i];
    if (occurences[item]) {
      occurences[item] += 1;
    } else if (!occurences[item]) {
      occurences[item] = 1;
    }
  }
  
  logOccurences(occurences);
}

function logOccurences(object) {
  for (let key in object) {
    console.log(`${key} => ${object[key]}`);
  }
}

logOccurences

// E:
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

console.log(countOccurrences(vehicles));

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1

// 10) Array Average
// P: function input- array, output- number, average of array
// add all numbers of array up with reduce method, divide that sum by length of array
// rules:
// explict rules
// number must be rounded down to integer
// arrays will never be empty
// arrays will always contain positive integers
// D: arrays, numbers
// A: 
// set variable `sum` 
// call reduce on array, pass reduce callback function that adds element and accumulator,
// initilize acculator to 1
// set variable `avg` = divide sum by array.length
// C:
function average(array) {
  let sum = array.reduce((element, accumulator) => element + accumulator, 1);
  let avg = sum / array.length;
  return Math.round(avg);
}



// E:
average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40

// 11) after midnight
// P: function input- signed integer, output- string representing time before/after midnight hh:mm
// rules:
// input can be any integer
// negative integer means time before midnight, positive integer means time after midnight
// cannot use Date class methods
// mental model 
// take minutes, divide by mins/hour, divide by hours/day, = hh multiply remainder by 60 = mm
// ex. 3000 / 60 = 50 (hours) 50 / 24 = 2.0833 (hours since midnight) .0833 * 60 = 5 (mins)
// ex 800 / 60 = 13.333 
// D: number, strings
// A:
// set const variable `HOURS_PER_DAY`
// set const variable `MINUTES_PER_HOUR`
// set const variabale `MINUTES_PER_DAY`
// declare function for leading 0s takes number as argument
// if number < 10 return '0' + number, else return String(number)
// declare function for formatting takes hours, minutes as arguments
// return `${leadingZeros(hours)}:${leadingZeroes(minutes)}`


const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);

// E:
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");