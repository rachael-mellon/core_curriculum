// 1)
function indentTitle(string) {
  for (padding = 1; padding <= 10; padding += 1) {
    console.log(string.padstart(padding));
  }
}
// First attempt, logged the string 10 times but no indent ^^
function indentTitle(string) {
  for (padding = 1; padding <= 10; padding += 1) {
    console.log(' '.repeat(padding) + string);
  }
}
// 2)
function changeCase(string) {
  string.split('').map(char => {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  }).join('')
}
// 3) come back to this one
function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0); {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
}

// 4) 
// mutating the caller with .push() vs creating a new array with concat

// 5) 
// .89999999 and false because all computer operations use floating point numbers

// 6) false because === compares numbers and NaN is not a number, and Number.isNaN to test for NaN
// 7) 34
// 8) yes, because objects get passed by reference and the functions mutate it
// 9) come back to this one
// 10) returns no