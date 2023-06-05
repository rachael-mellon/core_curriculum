const rl = require('readline-sync');
// Ask user for first number
console.log('Welcome to the calculator');
let num1 = rl.question('What is the first number? ');
// Ask user for second number
let num2 = rl.question('What is the second number? ');
// Ask user for operation
let operation = rl.question('Which operation would you like to perform? Select a number:\n 1) Add, 2) Subtract, 3) Multiply, 4) Divide ');
// Perform operation
let output;
if (operation === '1') {
  output = Number(num1) + Number(num2);
} else if (operation === '2') {
  output = Number(num1) - Number(num2);
} else if (operation === '3') {
  output = Number(num1) * Number(num2);
} else if (operation === '4') {
  output = Number(num1) / Number(num2);
} else {
  console.log('Sorry, you did not enter a valid operation');
}
// Log result
console.log(`The result equals ${output}`);
