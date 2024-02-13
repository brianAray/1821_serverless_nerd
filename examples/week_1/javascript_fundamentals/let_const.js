// Let and Const
// The let and const keywords are used for variable declaration
// Introduced in ES6 for better variable scoping and management compared to the var keyword

// let
// is used to declare variables within block scope
// they are only accessible within the block or function they are defined
// You can reassign values to variables declared with let

let x = 10; // declare and assign a variable

if (true) {
  let x = 20; // creating a new variable 'x' with block scope
  console.log(x); // output 20
}
console.log(x); // output 10

// const
// is used to declare block scope as well
// however, variables declared with const cannot be reassined after they are initialized, they are constants

const PI = 3.14159; // declaration and initialization of a constant variable
//PI = 3.14; // error: assignment to constant variable

// Variable Hoisting
// If you use var as a keyword for declaration, then those variables will be brought to the top of the code
// This will not move the assignment of the variable, only the declaration which can lead to unintended undefined variables
// let and const do not do variable hoisting

console.log(firstName);
var firstName = "Mike";
