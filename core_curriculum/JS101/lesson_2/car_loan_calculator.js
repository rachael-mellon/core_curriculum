const rl = require('readline-sync');
// create function for invlaid number
function invalidNumber(number) {
  return Number.isNaN(number);
}
console.log('Welcome to the loan calculator');
// get loan amount from user
let loanAmount = rl.question('Enter your total loan amount ');
while (invalidNumber(loanAmount)) {
  loanAmount = rl.question('Please enter a valid number. ');
}
// get interest rate from user in whole number and convert to decimal
let interestRate = (rl.question('Enter your monthly interest rate\nExample: 3.5 for 3.5% ')) / 100;
while (invalidNumber(interestRate)) {
  interestRate = rl.question('Please enter a valid number. ');
}
// get duration of loan in months
let duration = rl.question('Enter the duration of your loan in months ');
while (invalidNumber(duration)) {
  duration = rl.question('Please enter a valid number. ');
}
// calculate payment
const monthlyPayment = loanAmount * (interestRate / (1 - Math.pow((1 + interestRate), (-duration))));
console.log(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);
