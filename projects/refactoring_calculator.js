const rl = require('readline-sync');
function prompt(message) {
  console.log(`=> ${message}`);
}
function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}
While (true) {
  prompt('Welcome to the calculator');
  prompt('What is the first number?');
  let num1 = rl.question();
  while (invalidNumber(num1)) {
    prompt('Hmm... that doesn\'t look like a valid number.');
    num1 = rl.question();
  }
// Ask user for second number
  prompt('What is the second number?');
  let num2 = rl.question();
  while (invalidNumber(num2)) {
    prompt('Hmm... that doesnn\'t look like a valid number.');
    num2 = rl.question();
  }
// Ask user for operation
  prompt('Which operation would you like to perform? Select a number:\n 1) Add, 2) Subtract, 3) Multiply, 4) Divide')
  let operation = rl.question();
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3 or 4');
    operation = readline.question();
  }
// Perform operation
  let output;
  switch (operation) {
    case '1': 
      output = Number(num1) + Number(num2);
      break;
    case '2':
      output = Number(num1) - Number(num2);
      break;
    case '3':
      output = Number(num1) * Number(num2);
      break;
    case '4':
      output = Number(num1) / Number(num2);
      break;
  }
// Log result
  prompt(`The result equals ${output}`);

  prompt('Do you want to perform another calculation? Enter \'y\' or \'n\'');
  let answer = (rl.question);
  if (answer.toLowerCase() !== 'y') {
    break;
  }
}