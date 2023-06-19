// 1) Isn't it odd?
function oddNumber(number) {
  if (number % 2 !== 0) {
    return true;
  }
}

// 2) Odd Numbers
for (let num = 1; num < 100; i += 2) {
  console.log(num);
}

// 3) Even numbers
for (let num = 2; num < 100; i += 2) {
  console.log(num);
}

// alternate solution
for (let num = 1; 1 < 100; num += 1) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

// 4) How big is the room?
const rl = require('readline-sync');
let length = Number(rl.prompt('Please enter the length of the room in meters'));
let width = Number(rl.prompt('Please enter the width of the room in meters'));
const areaInMeters = length * width;
const areaInFeet = area / 10.7639;
console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet)`);

// 5) Tip calculator
const rl = require('readline-sync');
let bill = (rl.question('Enter the amount of your bill '));
let tipPercentage = (rl.question('Enter the tip percentage ')) / 100;
const tip = bill * tipPercentage;
const totalBill = bill + tip;
console.log(`Your tip is ${tip.toFixed(2)}. Your total bill is ${totalBill.toFixed(2)}`);

// 6) Sum or Product
function invalidInput(number) {
  return number.trimStart() == '' || Number.isNaN(number)
}
// ask user for number > 0
const rl = require('readline-sync');
let userNumber = rl.question('Please enter a number greater than 0 ');
while (invalidInput(userNumber)) {
  userNumber = rl.question('Please enter a valid number ')
}
// ask user for sum or product
let computation = rl.question('Enter "s" to compute the sum, or "p" to compute the product ');
// iterate through digits in number and compound for sum
let sum = 0
let product = 1
if (computation == 's') {
  for (i = 1; i <= userNumber; i += 1) {
    sum += i;
  }
  console.log(`The sum of the integers between 1 and ${userNumber} equals ${sum}`);
} else if (computation == 'p') {
  for (i = 1; i <= userNumber; i += 1) {
    product *= i;
  }
  console.log(`The product of the integers between 1 and ${userNumber} equals ${product}`);
}
// 7) Short long short
function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    return string2 + string1 + string2;
  } else {
    return string1 + string2 + string1;
  }
}

console.log(shortLongShort('and', 'butter'));

// 8) Leap Years (part 1)
function isLeapYear(year) {
  if ((year % 2 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

// 9) Leap Years (part 2)
function isLeapYear(year) {
  if (year >= 1752) {
    if ((year % 2 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  } else if (year < 1752) {
    if (year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  }
}

// 10) Multiples of 3 and 5
function multisum(num) {
  for (let i = 1; (i % 3 === 0 || i % 5 === 0) && i <= num; i += 1);
  console.log(num);
}

// 11) UTF-16 string value
function utf16Value(string) {
  let sum = 0
  for (i = 0; i < string.length; i += 1) {
    sum += string.charCodeAt(i)
  }
  return sum
}