// 1) 
let advice = "Few things in life are as important as house training your pet dinosaur.";
advice.replace('important', 'urgent');
// 2) 
let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = numbers.slice().reverse();
let reversedNumbers2 = [...numbers].sort((num1, num2) => num2 - num1);
let reversedNumbers3 = [];
for (let i = numbers.length; i >= 0; i -= 1) {
  reversedNumbers3.push(numbers[i]);
}
let reversedNumbers4 = [];
numbers.forEach(function(numbers) {
  reversedNumbers4.unshift(number);
}
// 3)
let numbers2 = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
let number1 = 8;
let number2 = 95;
numbers2.includes(number1);
// 4)
let famousWords = "seven years ago...";
'four score and' + famousWords;
`four score and ${famousWords}`;
'four score and'.concat(famousWords);
// 5)
let numbers3 = [1, 2, 3, 4, 5]
numbers3.splice(2, 1);
// 6) 
let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
flintstones.flat();
// or
flintstones.reduce((accumulator, element) => {
  return accumulator.concat(element);
}, []);
// or
flintstones = [].concat(...flintstones);
// or
let newFlinstones = flintstones.forEach(element => {
  newFlinstones = flintstones.concat(element);
})
// 7) // come back to this one
let flintstones2 = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
Object.entries(flintstones2[1])
// 8) 
Array.isArray(numbers);
Array.isArray(table);
// 9)
let title = "Flintstone Family Members";
let padding = Math.floor((40 - title.length) / 2)
title.padStart(padding + title.length);
// 10) 
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
statement1.split('').filter(char => char === 't').length
statement2.split('').filter(char => char === 't').length