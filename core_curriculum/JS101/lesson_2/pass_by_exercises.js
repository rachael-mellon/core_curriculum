// 1) This will log Hello then Hello to the console. Within the function, the console.log 
// statement appears before any operation is performed on the argument, so it will log the 
// arguement to the console as is. The second console.log statement is performed on the variable
// itself which, as a primitive value passed by value, is not altered by the function so it logs
// as is.
// 2) This will log Hello then HELLO to the console. The variable myWord is reassigned to the 
// return value of invoking the function on the variable, and the return value of the function 
// is explicitly stated as calling the .toUpperCaseFunction on the parameter. It will log 'Hello'
// first because the function logs the parameter to the console before any operation is performed
// and the function is called on the word later in the program.
// 3) This will log Hello, then Hello, then HELLO. The last two strings are logged for the same 
// reason as the previous example. The first Hello is logged because the myWord variable is
// passed to the function by value and not altered by it.
// 4) This will log ['Hello', 'Goodbye'], then ['Hi', 'Goodbye'].
// This is because the function includes the console.log statement before any operation is 
// performed on the array. The array is passed by reference then mutated, so when the
// array is logged to the console after the funciton is invoked it is then mutated.
// 5) This logs ['Hello', 'Goodbye'] to the console twice, because the console.log statement
// is included in the function before any operation is performed on it, and the function
// reassigns the object, which does not mutate the caller, thus when the variable myWords
// is logged to the console again it is unaltered.