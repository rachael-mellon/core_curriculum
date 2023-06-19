// 1) This logs Hello and Hello to the console because the variable myOtherWord is
// set equal to the string held in myWord
// 2) This logs Goodbye then Hello. The variables act independently of one another and the value
// of myWord is reassigned after the variable myOtherWord is set equal to the value stores in myWord
// 3) This logs ['Hi', 'Goodbye'] twice. The variable myOtherWords is set equal to myWords so
// it is its alias and will store the same values unless one is reassigned and the pointer is 
// changed. The array is mutated so the referenced value changes but the pointer does not so both
// variables still refer to the same object.
// 4) This will log ['Hi', 'Bye'] then ['Hello', 'Goodbye'] because the object myWords is
// reassigned so its alias no longer has the same pointer value and stores the values from
// before the object was reassigned.
// 5) This will log ['Hi', 'Goodbye'] then Hello. myWords is mutated to store the string 'Hi'
// at index 0. The variable myWord was assigned the string at index 0 of myWords before this
// mutation occured, and the variable, which stores a primitive value, acts independently.
// 6) This will log ['Hi', 'Goodbye'] then Hello