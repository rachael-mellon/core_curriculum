// 1) This logs 'Hello' to the console because the method called creates a new string and doesn't
// change the old one
// 2) This will log 'Hello' each time the console log method is called. The methods do not affect
// the original string
// 3) This is an array with a method call that mutates the caller. The value 'Goodbye' is being
// pushed as a new element in the array. This will log '['Hello', 'Goodbye']
// 4) Though it is an array, the .concat method does not mutate the caller, so it will still log
// ['Hello'] to the console
// 5) The .toUpperCase method does not mutate the caller, and it is being called specifically on
// the string at index 0 of the array. This returns a new string but nothing is done with that
// value. This logs ['Hello'] to the console.
// 6) This is reassigning the value at index 0 of the array, which does mutate the array, so this
// will log ['HELLO']