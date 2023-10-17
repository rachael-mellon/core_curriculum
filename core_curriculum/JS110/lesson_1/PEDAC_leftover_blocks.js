// P:
// input- number of blocks, output- number of blocks leftover after tallest possible tower is built
// rules: 
// structure is built of cube blocks
// -cubes are 6 sided, square faces, equal lengths on all sides
// top layer must be a single block
// block in a lower layer can support more than one block in upper layer
// block in upper layer must be supported by 4 blocks 
// no gaps between blocks
// --Questions--
// Is a lower layer still valid if it has more blocks than it needs? no
// Will there always be left-over blocks? no
// mental model
// each layer goes up by squares, 1 squared 2 squared 3 squared etc.
// start ant 1, keep counting up and adding squares together until a whole layer cannot be made
// add up layer blocks if next layer is more than left in target number stop
// E: 
console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true
// D: numbers, for loop, maybe array
// A: 
// set `totalBlocks` = input
// set counter = 1
// set blocks needed for layer = counter * counter
// increment counter by 1
// subtract `blocksNeeded` from total
// while blocks needed <= total
// return total


function calculateLeftoverBlocks(total) {
  let layer = 1;
  let blocksNeededLayer = layer * layer;
  while(blocksNeededLayer <= total) {
    layer += 1;
    total -= blocksNeededLayer;
  }
  return total;
}

