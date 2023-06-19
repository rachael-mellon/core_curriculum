// 1) This will log 10 to the console because the function is invoked which reassigns num to 10
// 2) This will log 5 then 10 because the function logs num to the console before it is
// reassigned so it takes the variable from the outer scope, then in the function num is 
// afterwards reassigned to 10 and logged to the console
// 3) This will log 5 to the console because a new variable is declared in the function rather 
// than reassigned
// 4) This will log 5 then 5 to the console because num is declared as a new variable, and the
// function logs num to the console before this, so it takes from the outer scope. 
// ^incorrect. This code will produce an error because it will try to access the variable 
// declared in the function before it was initialized. Note the difference from the previous
// answer- an action is called on the new variable in the function before it is initialized here
// 5) This will log 5 to the console because within the function num is a parameter, so it is a
// new variable, meaning the variable initialized outside of the scope is not reassigned
// 6) This will log 3 to the console, because the while statement increments num up by 1 as long
// as it is below 3. It is logged to the console after the while statement
// 7) This logs an error because the declaration of the variable in the while statement makes
// the condition impossible
//^incorrect, nothing is logged to the console, an infinite loop occurs for the above reason
