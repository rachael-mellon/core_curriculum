// 1)
let numbers = [1, 2, 3, 4];
numbers.pop();
numbers.length = 0;
numbers.splice(0, numbers.length);
// 2) 
// 1, 2, 34, 5
// 3)
// hello there
// 4)
[ { first: 42 }, { second: "value2" }, 3, 4, 5 ]
// 5)

function isColorValid(color) {
  return (color === "blue" || color === "green")
}