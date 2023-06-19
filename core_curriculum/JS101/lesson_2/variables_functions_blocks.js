// 1) This will log ['red', 'green', 'blue', 'yellow'] to the console because the function is
// invoked on the array colors then mutates it
// 2) This will log ['red', 'green', 'blue', undefined] because the color variable is initialized
// as a parameter in the function and is not given a value, so when the function is invoked
// and pushes the variable color without any value for the varible given it pushes 'undefined'.
// 3) This will log ['red', 'green', 'blue', 'purple', 'pink'] because the function is invoked
// and passed both an array and a variable to push to the array. The push method mutates the 
// caller and arrays are passed by reference so the function mutates the array.
// 4) This will log ['red', 'green', 'blue', 'purple', 'pink'] to the console. This is because 
// the object newColors is set equal to the return value of invoking the function on colors, 
// which mutates the array and pushes 'purple' to it. The arrays are set equal to eachother now,
// and when then function is imvokes on newColors 'pink' is pushed to the array. So colors and
// newColors represent the same array
// 5) This will log ['red', 'green', 'blue'] to the console. This is because the removeColor
// function invoked on the variable colors pops the last element off the array, and sets
// the variable equal to that color. The variable newColors is set equal to the mutated colors
// array which now just contains the strings 'red' and 'green'. Then the addColor funciton is
// invoked and passed the colors variable and color variable, so the array is again mutated 
// to contain the string 'blue'. This array is equal to newColors, so when newColors is logged
// to the console it also contains ['red', 'green', 'blue'].
// 6) This will log hello then Hello then hello!!! to the console. This is because the variable
// word is set to hello so the first console.log statement logs hello. The second console.log
// statement logs the result of invoking the capitalize funciton on the variable word which
// returns Hello. The variable is unaltered by this function because it is a primitive value
// passed by value. The next console.log statement logs the result of invoking the exclaim 
// funciton on the variable word which returns hello!!!
// 7) This will log hello then Hello then Hello!!! to the console