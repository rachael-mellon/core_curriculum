const rl = require('readline-sync');

const MESSAGES = require('./calculator_messages.JSON');

function prompt(message) {
  console.log(`=> ${message}`);
}
function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

function calculator() {
  prompt(MESSAGES.welcome);
  prompt(MESSAGES.firstNumber);
  let num1 = rl.question();
  while (invalidNumber(num1)) {
    prompt(MESSAGES.invalidInput);
    num1 = rl.question();
  }

  prompt(MESSAGES.secondNumber);
  let num2 = rl.question();
  while (invalidNumber(num2)) {
    prompt(MESSAGES.invalidInput);
    num2 = rl.question();
  }

  prompt(MESSAGES.operationChoice);
  let operation = rl.question();
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES.invalidOperation);
    operation = rl.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = num1 + num2;
      break;
    case '2':
      output = num1 - num2;
      break;
    case '3':
      output = num1 * num2;
      break;
    case '4':
      output = num1 / num2;
      break;
  }

  prompt(MESSAGES.result + output);

  prompt(MESSAGES.newCalculation);
  const cont = rl.question;
  if (cont === 'y') {
    calculator();
  } else {
    prompt(MESSAGES.end);
  }
}
calculator();
