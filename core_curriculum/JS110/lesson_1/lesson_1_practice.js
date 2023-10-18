// 1)
[1, 2, 3].filter(num => 'hi');
// The return value of the `filter` method call below will be [1, 2, 3], because the filter method
// returns a new array containing elements selected based on the criteria that when passed to the
// callback function as an argument, the callback function returns a truthy value. This callback 
// function always returns 'hi`, a truthy value, so all elements in the original array will be
// selected and returned in the new array

// 2)
[1, 2, 3].map(num => {
  num * num;
});
// This code will return [undefined, undefined, undefined] because arrow functions with brackets 
// need an explicit return statement or they will return the default return value of functions- 
// undefined. The map method returns a new array containing the return values of the callback
// at each iteration, and, since there is no explicit return statement, the callback will return
// undefined for each iteration

// 3)
[1, 2, 3].map(num => num * num);
// This code will return [1, 4, 9]. Arrow functions that are a single line do not need an explicit
// return statement because the return statement is implied. The map method call will return a new
// array with elements that are the return values of the callback function at each iteration

// 4)
['ant', 'bear', 'caterpillar'].pop().length;
// The return value of this code will be 11, the length of 'caterpillar'. The pop() method call
// will return the last element of the array, the length property will then access the length of
// this element returned by the pop() call that came before it.

// 5)
[1, 2, 3].every(num => {
  return num = num * 2;
});
// The return value of the callback is 2, 4, and 6. The return value of the every() method call is
// true because the every method returns a boolean signifying whether or not the callback returns a
// truthy value when each value of the caller is passed as an argument. In the body of the callback
// a reassignment follows a return statement. Assignments evaluate as the expression on the right-
// hand side of the =, so this callback will always return a truthy value for each element passed
// to it as an argument from the caller

// 6)
let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);
// to find out if .fill() is destructive, we can run the code, then print the original array to the
// console and see if it was modified. We can also check the documentation.
// fill() is destructive

// 7)
['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});
// The return value of this map() call will be [undefined, 'bear']
// The map() method returns a new array containing the return values of the callback function
// The callback function provides an explicit return statment, indicating that if the length
// of the argument passed is greater than 3, return that element. The first element of the caller
// passed to the callback does not have a length greater than 3, so this explicit return statement
// does not apply, thus, the callback implicitly returns undefined. 

// 8)
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
// P: function, input- array, output- object with array indexes as values and elements as keys
// create empty object, iterate through array, for each index, set a new object property with elem
// as key and index as value
// D: array, object
// A:
// set variable `flintstonesObj = {}`
// use for loop to iterate through `flintstones`
// `(i = 0; i < flintstones.length; i += 1)
// body of for loop:
// set property `flintstonesObj[flintstones[i]] = i
// return flintstonesObj
// C:
let flintstonesObj = {};
for (i = 0; i < flintstones.length; i += 1) {
  flintstonesObj[flintstones[i]] = i
}

// E:
// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

// 9)
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
let agesArr = Object.values(ages);
let ageSum = agesArr.reduce((element, accum) => element + accum, 0)

// 10)
let agesArrSort = agesArr.sort((a, b) => a - b)
let youngest = agesArrSort.shift();
// ^^ did not test that
// easier version:
Math.min(...agesArr); // => 10

// 11)
// P: input- string, output- object with keys as substrings and values of number of occurrences
// mental model:
// set empty object, split string to array, iterate over array, if object property of element does
// not exist, initialize it to 0 and increment by 1, if it does exist, increment by 1
// D: string, array, object
// A:
// set variable `charCount = {}`
// set variable `characters` = `string.split('')`
// iterate over `characters` with for loop:
// `(i = 0, i < characters.length; i += 1)`
// loop body:
// if statement with condition `(!charCount[characters[i]])`
// if true:
// set object property `charCount[characters[i]] = 1`
// else:
// increment `charCount[characters[i]]` by 1
// C:
let statement = "The Flintstones Rock";
let charCount = {};
let characters = statement.split('');
for (i = 0; i < characters.length; i += 1) {
  if (!charCount[characters[i]]) {
    charCount[characters[i]] = 1
  } else {
    charCount[characters[i]] += 1
  }
}
console.log(charCount);

// or

let charsInStatement = statement.split('').filter(char => char !== ' ');
let result = {};

charsInStatement.forEach(char => {
  if (Object.keys(result).includes(char)) {
    result[char] += 1;
  } else {
    result[char] = 1;
  }
});
// E
// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }