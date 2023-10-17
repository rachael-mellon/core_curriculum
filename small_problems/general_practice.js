// Easy 4
// 1) searching 101
// P: program, input- 6 user-solicited numbers, output, log message whether 6th number appears
// as user for 6 numbers, store numbers, if 6th number is stored, log yes message
// E:
// D: number, array, number
// A: readline sync, ask for numbers 1, 2, 3, 4, 5, push to array, ask for number 6, if array
// includes number 6, log yes message if not log no message
// C:
let rls = require('readline-sync');
let numbers = [];
let num1 = rls.question('Please enter a number: ');
numbers.push(num1);
let num2 = rls.question('Please enter a 2nd number: ');
numbers.push(num2);
let num3 = rls.question('Please enter a 3rd number: ');
numbers.push(num3);
let num4 = rls.question('Please enter a 4th number: ');
numbers.push(num4);
let num5 = rls.question('Please enter a 5th number: ');
numbers.push(num5);
let num6 = rls.question('Please enter a 6th number: ');
if (numbers.includes(num6)) {
  console.log(`${num6} appears in ${numbers}`);
} else {
  console.log(`${num6} does not appear in ${numbers}`);
}

// 2) palindromic strings
// P: function, input- string, output- returns boolean is string a palindrome
// case sensitive, all characters matter
// D: string, array, string, boolean
// A: get rid of spaces and non numeric characters of string, split characters to array, test if
// reversed array is equal to non reversed array
function isPalindrome(string) {
  let palindrome;
  let characters = string.split('');
  let reverseString = characters.reverse().join('')
  if (string === reverseString) {
    palindrome = true;
  } else {
    palindrome = false;
  }
  return palindrome;
}


// E:
console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true

// 3) palindromic strings part 2
// P: function, input- string, output- return boolean for palindrome, case sensitive, only
// alphanumeric characters
// D: string, array, string, boolean
// A: call isPalindrome functio, add regex and toLowerCase method that cleans string
// C:
function isPalindrome2(string) {
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

// 4) palindromic numbers
// P: function, input-number, output, return boolean if number is palindromic
// call ispalindrome function, coerce number to string
// D: number, string, boolean
// A: call isRealPalindrome, coerce number to string
// C:
function isPalindromicNumber(number) {
  let string = String(number);
  return isRealPalindrome(string);
}

// E:
console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true


// 5) Running totals
// P: function, input- array, output- array same # of elements elements = running totals
// create new array, go through each element of array, add previous elements, push sum to new array
// D: array, array
// A: set empty array, set sum, iterate with for loop, for each index add index to sum and push 
// sum to new array
// C:
function runningTotal(array) {
  let totalsArray = [];
  let sum = 0;
  for (i = 0; i < array.length; i += 1) {
   totalsArray.push((sum += array[i]));
  }
  return totalsArray;
};

// E:
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

// 6) letter counter
// P: function, input- string, output- return object with keys as number of characters and 
// values as number of words in the string that contain that many characters
// separate words into list, for each word, count length, add length to object, if length already
// exists in object, make value += 1
// D: string, array, object
// A: split string to array, set empty object, for loop, for each index, store word length in 
// variable, if that property does not exist in object, initialize it and set it to 0, then 
// increment by 1
// C:
function wordSizes(string) {
  let wordsArray = string.split(' ');
  let letterCounter = {};
  for (i = 0; i < wordsArray.length; i += 1) {
    wordSize = wordsArray[i].length;
    if (wordSize === 0) {
      continue;
    }
    if (!letterCounter[wordSize]) {
      letterCounter[wordSize] = 0;
    }
    letterCounter[wordSize] += 1;
  }
  return letterCounter;
}



// E:
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

// 7) letter counter pt 2
// P: modify previous function, input same, output- dependent on only alphanumeric characters
// D: string, object
// A: add regex to previous function
// C:
function wordSizes(string) {
  let cleanString = string.replace(/[^a-z0-9]/gi, '')
  let wordsArray = string.split(' ');
  let letterCounter = {};
  for (i = 0; i < wordsArray.length; i += 1) {
    wordSize = wordsArray[i].length;
    if (wordSize === 0) {
      continue;
    }
    if (!letterCounter[wordSize]) {
      letterCounter[wordSize] = 0;
    }
    letterCounter[wordSize] += 1;
  }
  return letterCounter;
}




// E:
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}


// CODEWARS STUFF
// P: function, input- string of words w numbers in words, output- string of words w numbers order
// go through each word, find the number, put in number order
// D: string, array, string
// A: split words into array, set empty array, for each word, push the word to the new array index
// equal to the number in the word + 1, isolate the number with a regex
// C:


//
// E:
// console.log(order("is2 Thi1s T4est 3a"));
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"));


// P: function input- array, output return index where sum of elements to right equal sum of
// elements to left, if none, return -1
// go through each element, if sum = sum of all remaining elements, return that index
// D: array
// A: iterate through each element calculating sum: let right = slice array from index 0 to current
// index, reduce that shallow copy let left = slice array from current index + 1 to index.length,
// if sum of right is less than left, move to next iteration, if equal, return that index
// if more, return -1

function findEvenIndex(arr) {
  let evenIndex;
  for (i = 0; i < arr.length; i += 1) {
    let right = arr.slice(0, (i + 1));
    let rightSum = right.reduce(function(accumulator, element) {
      return accumulator + element
    });
    let left = arr.slice((i + 1), (arr.length - (i + 1)));
    let leftSum = left.reduce(function(accumulator, element) {
      return accumulator + element
    });
    if (rightSum === leftSum) {
      evenIndex = i;
    } else if (rightSum > leftSum) {
      evenIndex = -1;
    }
  }
  return evenIndex;
}


// E:
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3
console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1

let arr = [1, 2, 3, 4, 5, 6]
let i = 2
let left = arr.slice(0, 2);

console.log(arr.slice(0, 2));


function wordSizes(string) {
  let wordsArray = string.split(' ');
  let letterCounter = {};
  for (i = 0; i < wordsArray.length; i += 1) {
    wordSize = wordsArray[i].length;
    if (wordSize === 0) {
      continue;
    }
    if (!letterCounter[wordSize]) {
      letterCounter[wordSize] = 0;
    }
    letterCounter[wordSize] += 1;
  }
  return letterCounter;
}



// E:
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}


function sumTwoSmallestNumbers(numbers) {  
  let lowest = numbers[0];
  let newNumbers = [];
  for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 1 !== 0) {
      continue;
    } else if (numbers[i] < 0) {
      continue;
    } else if (numbers[i] < lowest) {
      numbers[i] = lowest;
    } else if (numbers[i] > lowest) {
      newNumbers.push(numbers[i]);
    }
  }
  let secondLowest = newNumbers[0];
  for (i = 0; i < newNumbers.length; i += 1) {
     if (newNumbers[i] % 1 !== 0) {
      continue;
    } else if (newNumbers[i] < 0) {
      continue;
    } else if (newNumbers[i] < secondLowest) {
      newNumbers[i] = secondLowest;
    }
  }
  return secondLowest + lowest;
}

console.log(sumTwoSmallestNumbers([2, 3, 4, 5, 6, 6,]));
