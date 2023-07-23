// 1) Welcome stranger
function welcome(name, status) {
  console.log(`Hello, ${name.join(' ')}. Nice to have a ${status['title']} ${status['job']} around.`);
}
// 2) Greeting a user
const rl = require('readline-sync');
function greet(name) {
  let name = rl.question('What is your name? ');
  if (name.includes('!')) {
    name = name.slice(0, -1);
    console.log(`HELLO ${name.toUpperCase()}, WHY ARE WE SCREAMING `);
  } else {
    console.log(`Hello, ${name}`);
  }
}

// 3)
function multiply(num1, num2) {
  return num1 * num2;
 };

 // 4)
 function square(num) {
  return multiply(num, num);
 };

 // 5)
let num1 = rl.question('Please enter a number ');
let num2 = rl.question('Please enter another number ');

function operations(num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
  console.log(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
  console.log(`${num1} % ${num2} = ${num1 % num2}`);
  console.log(`${num1} ** ${num2} = ${Math.floor(Math.pow(num1 * num2))}`);
}
// 6) The end is near but not here
function penultimate(string) {
  string = string.split(' ');
  return string[string.length -2];
}

// 7) XOR
function xor(op1, op2) {
  if (op1 == false && op2 == false) {
    return false;
  } else if (op1 == true && op2 == true) {
    return false;
  } else {
    return true;
  }
}
// or
function xor(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    return true;
  }
  return false;
}
// 8)
function oddIndexes(array) {
  let newArray = []
  for (let index = 1; index <= array.length; index += 2){
    newArray.push(array[index]);
  }
  return newArray;
}
// 9) Teddy's age
function teddyAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(teddyAge(20, 120))

// 10) retire
const year = new Date().getFullYear()
function retireStats(age, retireAge) {
  let yearsTilRetire = retireAge - age
  console.log(`It is ${year}. You will retire in ${year + yearsTilRetire}`);
  console.log(`You have ${yearsTilRetire} years to go!`);
}

// 11) Middle Character
function middleCharacter(string) {
  if (string.length % 2 !== 0) {
    return string[(string.length - 1) / 2];
  } else {
    return string[(string.length / 2) - 1] + string[string.length / 2];
  }
}

// 12) Negative
function returnNegative(number) {
  return Math.abs(number) * -1;
}
