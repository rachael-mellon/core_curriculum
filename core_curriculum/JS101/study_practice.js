// SMALL PROBLEMS EASY 1 //

// 1) Isn't it odd?
function isOdd(num) {
  if (Math.abs(num) % 2 === 0) {
    return false
  } else {
    return true
  }
}

// 2) Odd Numbers
let num = 1
while (num < 100) {
  console.log(num);
  num += 2;
}

// 3) Even Numbers
for (let num = 1; num < 100; num += 2) {
  console.log(num);
}

// 4) How big is the room
let rlsync = require('readline-sync');

const SQ_METERS_TO_FT = 10.7639

function getSqareMeters(width, length) {
  let width = rlsync.question('What is the width of the room? ');
  let length = rlsync.question('What is the length of the room? ');
  let SqareMeters = length * width;
  let SquareFeet = SquareMeters * SQ_METERS_TO_FT;
  console.log(`The room is ${SqareMeters} square meters, or ${SquareFeet} square feet`);
}

// 5) Tip calculator
function tipCalculator(bill, tipPercent) {
  let rlsync = require('readline-sync');
  let bill = rlsync.question('Enter the total bill amount ');
  let tipPercent = rlsync('Enter the tip percentage as a whole number ');
  let tipAmount = (bill * (tipPercent / 100)).toFixed;
  let total = (tipAmount + bill).toFixed(2);
  console.log(`The tip amount is ${tipAmount}`);
  console.log(`The total amount is ${total}`)
}


// 6) Sum or Product

// get integer from user
// get s or p from user
// for loop that computes sum
// for loop that computes product
// log sum or product to console

let rlsync = require('readline-sync');

function sum(int)
  let totalS = 0;
  for (let counter = 1; counter <= int; counter += 1) {
    totalS += counter
  }
  return totalS

function product(int)
  let totalP = 1;
  for (let counter = 1; counter <= int; counter += 1) {
    totalP *= counter
  }
  return totalP

let integer = rlsync.question('Please enter an integer greater than 5');
let operation = rlsync.question('To compute the sum, enter s. To compute the product, enter p');

if (operation === 's') {
  let totalSum = sum(integer);
  console.log(`The sum of integers from 1 to ${integer} is ${totalSum}`)
} else if (operation === 'p') {
  let totalProduct = product(integer);
  console.log(`The product of integers from 1 to ${integer} is ${totalProduct}`)
} else {
  console.log('Oops, there was an error');
}
  
// 7) Short Long Short

function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    return string1 + string2 + string1;
  } else if (string2.length > string1.length) {
    return string2 + string1 + string2;
  } else {
    console.log('The string lengths are equal');
  }
}

// 8) Leap Years part 1

// function to determine if year is leap year, input year, output boolean, check conditions
// ex. input: 2015 output: false
// data structure checking conditions
// algorithm logical and and or to check if number meets conditions

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
    return true
  } else {
    return false
  }
}

// 9)

// 10) Multiples
// P: function, input target number, output sum, go from 1 to target and count multiples inclusive
// E: ex input target num 20, output 98
// D: iterate over numbers 1-target store multiples total in a variable
// A: for loop with if condition
// C:

function multiplesSum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i += 1) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
      sum += i
    }
  } 
  return sum;
}




/***************************************************************************************/

// SMALL PROBLEMS EASY 2 //

// 1) Welcome stranger

// P: create function input-2 arguments output-returns greeting for name and occupation
// E: name = ['Conner' 'Durose'];
//    profession = { title: 'Senior', occupation: 'Editor' };
//    greeting(name, profession); -> returns 'Hello Conner Durose, nice to have a Senior Editor!'
// D: string concatenation
// A: use input from outer scope for name and job info, use template literals to concatenate
// C:

userName = ['Conner', 'Durose'];
userProfession = { title: 'Senior', occupation: 'Editor' };

function greeting(name, profession) {
  return `Hi, ${name.join(' ')}, nice to have a ${profession.title} ${profession.occupation} around!`
}

// 2) Greeting user

// P: write a program, input- user name output- personalized greet, ask for name & input name
//    personalized greet option for ! in user name
// E: What is your name? Alex
//    Hello, Alex.
//    What is your name? Alex!
//    HELLO ALEX! WHY ARE WE SCREAMING?
// D: string concatenation and if condition for input
// A: template literals to input name info in console.log statement
//    if statement checking if name includes !, includes method
// C:

let rlsync = require('readline-sync');

let yourName = rlsync.question('What is your name? ');

if (yourName.includes('!')) {
  yourName = yourName.slice(0, (yourName.length - 1))
  console.log(`HELLO ${yourName.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello, ${yourName}.`)
}

// 3) Multiplying

// P: create a function input- 2 numbers output- product
// E: multiply(2, 4) -> returns 8
// D: multiplication
// A: num1 * num2
// C:
function multiply(num1, num2) {
  return num1 * num2;
}
// 4)

// P: create function, uses multiply function, input- number output- square rt
// E: squares(2); -> returns 4
// D: callback function
// A: call multiply function, make input number both num1 and num2
// C:

function square(number) {
  return multiply(number, number);
}

// 5) arithmetic integer

// P: write program, input- 2 user input integers output- operations on integers
// E: Please enter integer: 2
//    Please enter another integer: 2
//    2 + 2 = 4
//    2 - 2 = 0 etc etc
// D: operations, string concatenation
// A: ask user for input, perform operations, template literals
// C:
let rlsync = require('readline-sync');

let int1 = rlsync.question('Please enter an integer: ');
let int2 = rlsync.question('Please enter another integer');

let sum = int1 + int2;
let difference = int1 - int2;
let product = int1 * int2;
let quotient = int1 / int2;
let remainder = int1 % int2;
let exponent = Math.pow(int1, int2);

console.log(`${int1} + ${int2} = ${sum}`);
console.log(`${int1} - ${int2} = ${difference}`)
// etc etc etc

// 6) The end is near

// P: function, input- string output- returns next to last word
// E: secondToLast('I love halloween'); returns 'love'
// D: split string into array, pick index of 2nd to last
// A: split method, index is array.length -2
// C:
function secondToLast(string) {
  arr = string.split(" ");
  return arr[arr.length - 2];
}

// 7) Exclusive or

// P: function input - 2 values output- boolean test if one is false and one is true
// E: xor(5, 0) -> returns true
// D: if condition, && logic
// A: if logic returns true if input 1 is true && input 2 is false
//    else returns true if input 1 is flase && input 2 is true else returns false
// C:
function xor(value1, value2) {
  if (value1 == true && value2 == false) {
    return true;
  } else if (value1 == false && value2 == true){
    return true;
  } else {
    return false
  }
}

// 8) Odd lists

// P: write function, input- array output- returns array of every other element of array
//    go through each index, only count those that are odd
// E: oddities(array) -> returns every other element [5, 7, 6, 3]
// D: iterate over each index, check for odd numbers
// A: forEach method
// C:

let myArray = ['he', 'you', 'butt', 'did', 'la', 'it', 'ok', 'right'];
function oddities(array) {
  let oddElements = []
  for (let index = 0; index < array.length; index += 2) {
    oddElements.push(array[index]);
  }
  return oddElements;
}

// 9) How old is teddy
// P: program input- - output- random number
// E: teddy is x years old
// D: generate random number, concatenation
// A: Math.random, template literals
// C:
let teddysAge = Math.random() * (120 - 20 + 1) - 20;
console.log(`Teddy is ${teddysAge} years old!`);

// 10) Retirememt
let rlsync = require("readline-sync");

let currentAge = Number(readlineSync.question("What is your age? "));
let retirementAge = Number(
  readlineSync.question("At what age would you like to retire? ")
);

let today = new Date();
let currentYear = today.getFullYear();

let workYearsToGo = retirementAge - currentAge;
let retirementYear = currentYear + workYearsToGo;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}. `);
console.log(`You have only ${workYearsToGo} years of work to go!`);

// 11) Middle String
// P: function, input- string output- return middle characters
//  count each character in string, if odd, subtract one, divide by 2, add 1 pick that
//  if even, divide by 2, pick that number and the next
// E: getMiddle('halloween') -> returns 'o'
// D: if condition, access index of substrings
// A: if string length even, perform operation to obtain both middles
//    if string length odd, perform operation to obtain middle
// C:
function getMiddle(string) {
  if (string.length % 2 === 1) {
    return string[(string.length - 1) / 2];
  } else {
    return string[(string.length / 2) - 1] + string[string.length / 2];
  }
}
// 12) Always negative
// P: function, input number, output- always negative number
// E: alwaysNeg(32) -> returns -32
// D: convert to absolute value then multiply by negative 1
// A: use Math.abs
// C:
function alwaysNeg(num) {
  return Math.abs(num) * (-1);
}




/***************************************************************************************/

// SMALL PROBLEMS EASY 3 //

// 1)
// P: function, input- string output- string with no repeating characters
// go through each character, if character does not match character before, keep it
// E: crunch(doouble) -> returns double
// D: iterate through each substring and check if it matches the previous, if not add to
// new empty string
// A: for loop, if condition
// C:
function crunch(string) {
  let crunchText = '';
  for (index = 0; index < string.length; index += 1) {
    if (string[index] !== string[index - 1]) {
      crunchText += string[index];
    }
  }
  return crunchText;
}

// 2) Bannerizer
// P: function, input- text output- log to console text in box,
// build box, insert input in middle
// E:
// D: console log lines of + and - to build a box, input text in the middle
// A: use repeat method with length of text and template literals
// C:

function banner(text) {
  console.log('+' + '-'.repeat(text.length + 4) + '+');
  console.log('|' + ' '.repeat(text.length + 4) + '|');
  console.log('|  ' + text + '  |');
  console.log('|' + ' '.repeat(text.length + 4) + '|');
  console.log('+' + '-'.repeat(text.length + 4) + '+');
}

// 3) Stringy strings

// P: function input- integer output- returns list of 1,0 amount integer is
// E: stringy(6) -> returns 101010
// D: set empty string, add 1 to even index 2 to odd until target number is reached
// A: for loop, ternary
// C:
function stringy(number) {
  let string = '';
  let substring;
  for (let index = 0; index < number; index += 1) {
    let substring = index % 2 === 0 ? 1 : 0;
    string += substring;
  }
}

// 4) Right triangle

// P: function, input- number, output- log triangle with side length equal to that number
// create new line of triangle until target number of side length is reached
// E:
// D: 
// A: while loop, increment number of stars and spaces in relation to target num
// (stars go up, spaces go down), log with repeat method for star and space variables
// C:
function displayTriangle(number) {
  let numberOfStars = 1;
  let spaces = number - 1;
  while (numberOfStars <= number) {
    console.log(' '.repeat(spaces) + '*'.repeat(numberOfStars));
    numberOfStars += 1;
    spaces -=1;
  }
}

// 5) Madlibs
// This one is super easy and time consuming I'm skipping to spend time on problems
// I struggle more with

// 6) Double Doubles
// P: function input- number output- number * 2 unless double number
// check if first half of number is same as second half
// E: twice(3333) -> returns 3333 twice(4) -> returns 8
// D: turn number to string, slice string in half, if first half matches second return number
// A: string method, if statement to check even or odd
// slice method (0, string.length / 2) (string.length / 2), assign each half to varible
// nested if statement check if halves match if not return number * 2 if yes return number

function twice(number) {
  let stringNum = String(number);
  let firstHalf = stringNum.slice(0, stringNum.length / 2);
  let secondHalf = stringNum.slice(stringNum.length / 2)
  if (firstHalf === secondHalf) {
    return Number(stringNum);
  } else {
    return Number(stringNum) * 2;
  }
}

// 7) Clean up the words // COME BACK TO THIS ONE 
// P: function, input- string output- return string of only alphabetic characters
// E: '-=.what's09`'.':up?' -> returns 'what s up'
// D: iterate over characters of string, check if character is alphabetic, if not 
// replace with space, if space is previous character do not include new space
// A: const array to store alphabetic characters, empty string for new text,
// replace method, for loop
// C: 

const ALPHABETIC = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g',
'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 
's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]
// need to add uppercase to alphabetic
function lastChar(text) {
  return text[text.length - 1];
}

function cleanUp(text) {
  let cleanText = '';
  for (index = 0; index < text.length; index += 1) {
    if (ALPHABETIC.includes(text[index])) {
      cleanText += text[index];
    } else if (index === 0 || lastChar(cleanText) !== ' ') {
      cleanText += ' ';
    }
  }
  return cleanText;
}

// to test if something is alphabetic
function isLowerCase(char) {
  return char >= 'a' && char <= 'z'
}

// 10) What Century?
// P: function, input- year output- return century + th, st, etc
// E: whatCentury(1970) -> returns 20th
// D: calculate math on the year then check which ending it needs
// A: year math, if condition, st if ends in 1, nd if ends in 2, rd if ends in 3 except 13
// C:
function whatCentury(year) {
  let century = Math.floor((year / 100) + 1);
  let centString = String(century);
  if ((centString[centString.length - 1] === '1') && (centString[centString.length - 2] !== '1')) {
    return `${centString}st`;
  } else if ((centString[centString.length - 1] === '2') && (centString[centString.length - 2] !== '1')) {
    return `${centString}nd`;
  } else if ((centString[centString.length - 1] === '3') && (centString[centString.length - 2] !== '1')) {
    return `${centString}rd`;
  } else {
    return `${centString}th`;
  }
  
}

/***************************************************************************************/

// JS101 PRACTICE PROBLEMS: EASY 1 //

// 1)
// This code will not raise an error, it will create the element at index 6 & assign to value 5

// Bonus:
// This will return undefined. This code will create each index through index 6 as an empty
// slot, which returns undefined

// 2)
// string.includes method 
str1.includes('!');
// Question asked for ends with specifically
// use string.endsWith method
str1.endsWith('!');

// 3) 
// use .hasOwnProperty()
ages.hasOwnProperty('Spot');

// 4) COME BACK TO THIS ONE- look up slice method, charAt method, substring method
let munstersDescription = "the Munsters are CREEPY and Spooky.";

// 5)
// Line one wil log true because it is using loose equality and the string '0'
// will be coerced to the number 0 which evaluates to falsy
// Line two will log false because it is testing strict equality and comparing
// different data types

// 6)
// use object.assign method
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };
Object.assign(ages, additionalAges);

// 7)
// use the string.includes method
let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";
str1.includes('Dino')

// 8)
// use the push method
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push('Dino');
// or
flintstones.concat('Dino');
// or
flintstones[flintstones.length] = 'Dino'

// 9)
// use push method
flintstones.push('Dino', 'Hoppy')

// 10)
let advice = "Few things in life are as important as house training your pet dinosaur.";

advice.slice(0, advice.indexOf('house'));