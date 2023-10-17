// 1) Daily double
function shorten(string) {
  for (index = 0; index <= string.length; index += 1) {
    if (string.substring[index] == string.substring[index + 1]) {
      return string.splice(index, index + 1);
    }
  }
}
// 2) Banner
function inBox(text) {
  console.log('+' + '-'.repeat(text.length + 2) + '+');
  console.log('|' + ' '.repeat(text.length + 2) + '|');
  console.log(`|  ${text}  |`);
  console.log('|' + ' '.repeat(text.length + 2) + '|');
  console.log('+' + '-'.repeat(text.length + 2) + '+');
}

// 3) Stringy
// P: function, input- integer, output- returns string of alternating 1's and 0's length of int
// D: integer, string
// A: set empty string, increment variable, when variable is even add 1 to empty string, when
// variable is odd add 0 to empty string while variable <= integer
// C:
function stringy(int) {
  let stringyString = '';
  let i = 1;
  while (i <= int) {
    if (i % 2 !== 0) {
      stringyString += '1';
    } else {
      stringyString += '0';
    }
    i += 1;
  }
  return stringyString;
}


// E: 
console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"

// 5 right triangle
function triangle(n) {
  let spaces = Number(n) - 1
  let stars = 1
  while (n >= stars) {
    console.log(' '.repeat(spaces) + stars);
    spaces -= 1
    stars +=1
  }
}

// 6) madlibs
let rl = require('readline-sync');
console.log('Hi! welcome to madlibs');
let adjective1 = rl.question('Enter an adjective ');
let noun1 = rl.question('Enter a noun');
let verb1 = rl.question('Enter a verb');
// etc etc...

console.log(`Today my ${adjective1} dog broke my ${noun1} when he tried to ${verb1}`);
// etc etc...

// 7) double number 
function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

function isDoubleNumber(number) {
  let stringNumber = String(number);
  let center = Math.floor(stringNumber.length / 2);
  let leftNumber = stringNumber.substring(0, center);
  let rightNumber = stringNumber.substring(center);

  return leftNumber === rightNumber;
}


// 8) Grade book
function gradeAverage(grade1, grade2, grade3) {
  let average = (grade1 + grade2 + grade3) / 3;
  switch (true) {
    case average >= 90:
      console.log(`Your grade is a ${average}%. You have an A`);
      break;
    case average >= 80:
      console.log(`Your grade is a ${average}%. You have a B`);
      break;
    case average >= 70:
      console.log(`Your grade is a ${average}%. You have a C`);
      break;
    case average >= 60:
      console.log(`Your grade is a ${average}%. You have a D`);
      break;
    default:
      console.log(`Your grade is a ${average}%. You have an F`);
      break;
  }
}
// 9) Clean up
function cleanUp(text) {
  return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
}
// 10) What century
function century(year) {
  let centuryNumber = Math.floor((Number(year) / 100) + 1);
  let centuryString = String(centuryNumber);
  if (centuryString[centuryString.length - 1] == '1') {
    return `${centuryString}st`;
  } else if (centuryString[centuryString.length - 1] == '2') {
    return `${centuryString}nd`;
  } else {
    return `${centuryString}th`;
  }
  
}