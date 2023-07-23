// 1)
// these functions return different results because in the first code the 
// curly brackets start on the same line as the return statement, whereas in 
// the second code, the return statement is on its own line, and the curly brackets
// start under it. Since its on its own line, JS inserts a semicolon after the
// return statement, so it returns undefined.

// 2)
{ first: [ 1, 2 ] }
// when objects (arrays are objects) are set equal to each other the pointers
// are set equal so changes to one apply to the other. numArray was set equal to
// the value under the key "first" in object, so when numArray was mutated, the
// value under "first" in object was also mutated

// 3)
// a) one is: one
//    two is: two
//    three is: three
// the reassignments of the variables within the function does not have effect on 
// the variables defined in the global scope after the function
// b) one is: one
//    two is: two
//    three is: three
// the function does not affect changes on the global variables
// c) one is: two
//    two is: three
//    three is: one
// the destructive splice method mutates the arrays passed to the function
// 4) 
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}
