const rl = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

while (true) {
prompt(`Let's play Rock, Paper, Scissors. Choose one: ${VALID_CHOICES.join(', ')}`);
let choice = rl.question();

while (!VALID_CHOICES.includes(choice)) {
  prompt('That\'s not a valid choice!');
  choice = rl.question();
}

let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
let computerChoice = VALID_CHOICES[randomIndex];

function displayWinner(choice, computerChoice); {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
  (choice === 'paper' && computerChoice === 'rock') ||
  (choice === 'scissors' && computerChoice === 'paper')) {
    prompt('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
  (choice === 'paper' && computerChoice === 'scissors') ||
  (choice === 'scissors' && computerChoice === 'rock')) {
    prompt('Computer wins!');
  } else {
    prompt('It\'s a tie!');
  }
}

  prompt('Do you want to play again (y/n)?');
  let answer = rl.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = rl.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}