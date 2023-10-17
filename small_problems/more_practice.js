// Easy 1

// 1) isnt it odd
// P: function, input-integer pos neg or 0 output- returns boolean is odd or not
// divide number by 2, if there is a remainder it's odd
// D: number- pos neg or 0, boolean
// A:
// if number % 2 === 0 return false else return true
// C:
function isOdd(number) {
 return Math.abs(number) % 2 === 0 ? false : true;
}

// E:
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

// 2) Odd Numbers
// P: program, input-none, output- log all odd numbers from 1-99, inclusive
// go through each number 1-99 if odd log if not continue
// D: numbers
// A: for loop set variable i while i < 100 increment i by 1
// if i is odd log the number if i is even continue

for (i = 0; i < 100; i += 1) {
  if (isOdd(i) === true) {
    console.log(i);
  } else {
    continue;
  }
}

// Sum or product
// P: program, input- number greater than 0, sum or product, output- summ or product of all ints
// between 1 and that integer, inclusive
// get number, get s or p, go through each number between 1 and input int and keep adding running t
// D: number, string
// A:
// readline sync ask for int and s or p
// let count = 0 
// for loop, i = 1, i <= input int, i += 1
// count += i return count
// C:

let rls = require('readline-sync');
let int = rls.question('Please enter a number greater than 0: ');
let operation = rls.question('To calculate the sum, enter "s", to calculate product, enter "p": ')
let sum = 0;
let product = 1;
for (i = 0; i <= int; i += 1) {
  sum += i;
}
for (i = 1; i <= int; i += 1) {
  product *= i;
}
if (operation.toLowerCase() === 's') {
  console.log(`The sum of all integers between 1 and ${int} is ${sum}`)
} else if (operation.toLowerCase() === 'p') {
  console.log(`The product of all integers between 1 and ${int} is ${product}`)
} else {
  console.log('You did not enter a valid operation');
}


// Easy 4:
// Searching 101
// P: program, input- 6 numbers from user, output, does 6th number already appear
// D: number, array, string
// A: readline sync to solicit numbers
// push first 5 to array
// ternary operator array includes 6th number ? return true
// if true log message 6th number appears
// C:
let rls = require('readline-sync');
let numbers = [];
let num1 = rls.question('Please enter a number: ');
numbers.push(num1);
let num2 = rls.question('Please enter another number: ');
numbers.push(num2);
let num3 = rls.question('Please enter another number: ');
numbers.push(num3);
let num4 = rls.question('Please enter another number: ');
numbers.push(num4);
let num5 = rls.question('Please enter another number: ');
numbers.push(num5);
let num6 = rls.question('Please enter another number: ');

let included = numbers.includes(num6) ? true : false;
let yesMessage = `${num6} appears in ${numbers}`;
let noMessage = `${num6} does not appear in ${numbers}`;
if (included === true) {
  console.log(yesMessage);
} else {
  console.log(noMessage);
}

// E:

// Palindromic Strings
// P: function, input- string, output- boolean for if string is palindrome
// reverse string, if same then yes
// D: string, array, string boolean
// A: split string into array, reverse array then join, if same as original string then true
// C:
function isPalindrome(string) {
  let backwardsString = string.split('').reverse().join('');
  return backwardsString === string ? true : false
}

// E:
console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true

// Palindromic strings 2
// P: function, input-string, output- return boolean if is palindrome, non case-sensitive, non
// alphanumeric characters don't matter
// D: string, array, string, boolean
// A: clean text with regex and toLowerCase method
// pass clean string to isPalindrome
// C:
function isRealPalindrome(string) {
  let cleanString = string.replace(/[^a-z0-9]/gi, '').toLowerCase();
  return isPalindrome(cleanString);
}

// E:
isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

// Palindromic numbers
// P: function, input- integer, output- boolean is palindrome
// convert integer to string and pass to isRealPalindrome
// D: number, string, array, string, boolean
// A: string method on integer, pass new string to isRealPalindrome
// C:
function isPalindromicNumber(number) {
  let numString = String(number);
  return isRealPalindrome(numString);
}
// E:
isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

// Running totals
// P: function, input- array, output- array of running totals from input array, same amount of elem
// D: array
// A: set empty array, set sum variable
// iterate through array, for loop, each index:
// sum += array[i] push array[i] to empty array
// return totals array
// C:
function runningTotal(array) {
  let totalsArray = [];
  let sum = 0;
  for (i = 0; i < array.lenth; i += 1) {
    totalsArray.push((sum += array[i]));
  }
  return totalsArray;
}

// E:
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

// Letter counter
// P:
// D:
// A:
// C:

// E:

// Letter counter pt 2
// P:
// D:
// A:
// C:

// E:

// Letter swap
// P:
// D:
// A:
// C:

// E:

// Convert String to number
// P:
// D:
// A:
// C:

// E:

// Convert String to Signed Number
// P:
// D:
// A:
// C:

// E:

// Convert number to string
// P:
// D:
// A:
// C:

// E:


// Convert string to signed number
// P:
// D:
// A:
// C:

// E:
