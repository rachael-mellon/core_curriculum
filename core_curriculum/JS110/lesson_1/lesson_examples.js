// Iterate over an object
let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
};

let pets = Object.keys(numberOfPets);
let counter = 0;

while (counter < pets.length) {
  let currentPet = pets[counter];
  let currentNumber = numberOfPets[currentPet];
  console.log(`I have ${currentNumber} ${currentPet}!`);
}


// Iterate over an object and select based on criteria
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

// p: function input- object output- object with only keys with value 'fruit'
// D: object, array
// A:
// create array `produceKeys` with Object.keys method
// create an empty object `fruitsOnly`
// iterate through `produce` keys with `for` loop
// inititalization: `i = 0`; condition: i < `produceKeys.length`; increment: `i += 1`
// create variable `currentProduce` = `produceKeys[i]`
// create variable `currentValue` = `produce[currentProduce]`
// if statement with condition `currentValue === 'Fruit`
// if `true`, set `fruitsOnly[currentProduce] = currentValue`
// return fruitsOnly
// C:
let produceKeys = Object.keys(produce);
let fruitsOnly = {};

for (i = 0; i < produceKeys.length; i += 1) {
  let currentProduce = produceKeys[i];
  let currentValue = produce[currentProduce];

  if (currentValue === 'Fruit') {
    fruitsOnly[currentProduce] = currentValue;
  }
  return fruitsOnly;
}


