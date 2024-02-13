// In JS variable scopes refer to the context in which a variable is declared and where it can be accessed
// Variable Scope (Local or Function Scope)
// Global Scope
// The scope decides where you can use the variable, where it is visible or accessible

// Global Scope
// Variables declared outside of any function or block have global scope
// glboal variabels are accessible from anywhere in your JS code
// Be careful with global scope as they can lead to naming conflicts

// Local (Function) Scope
// variables declared inside a function
// local variables are only accessible within the function
// they are not visible outside of the function

function exampleFunction() {
  let localVar = 20;
  console.log(localVar);
}

exampleFunction();
// console.log(localVar) // Reference error

// Block Scopes (ES6)
// Introduced in EcmaScript 2015, block scope allows variables to be scoped to code blocks
// e.g. if statements and loops in additon to functions
// variables declared with let and const have block scope
// they are only accessible within the block they are defined

// example of why var is bad
function loopTest() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i);
}

loopTest();

// to resolve this, you would need to use let or const to enforce block scope


// Lexical Scope (Closure)
// JS has lexical scope, which means that functions are able to access variables from their containing (enclosing) scopes, even after the otuer function has finished executing
// This behavior is known as a closure

function outer() {
  const message = "Hello, ";

  function inner(name) {
    console.log(message + name);
  }

  return inner;
}

const greetFunc = outer();
greetFunc("John");