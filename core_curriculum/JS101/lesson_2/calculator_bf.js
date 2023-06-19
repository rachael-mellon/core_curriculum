const rl = require('readline-sync');

const MESSAGES = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}
function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

function calculator() {
  prompt(MESSAGES['en']['welcome']);
  prompt(MESSAGES['en']['firstNumber']);
  let num1 = rl.question();
  while (invalidNumber(num1)) {
    prompt(MESSAGES['en']['invalidInput']);
    num1 = rl.question();
  }

  prompt(MESSAGES['en']['secondNumber']);
  let num2 = rl.question();
  while (invalidNumber(num2)) {
    prompt(MESSAGES['en']['invalidInput']);
    num2 = rl.question();
  }

  prompt(MESSAGES['en']['operationChoice'];
  let operation = rl.question();
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES['en']['invalidOperation'];
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

  prompt(MESSAGES['en']['result'] + output);

  prompt(MESSAGES['en']['newCalculation'];
  const cont = rl.question();
  while (cont === 'y') {
    calculator();
  }
  prompt(MESSAGES['en']['end'];
  
}
calculator();
