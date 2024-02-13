// function
// These are fundamental to JS, allowing you to group and encapsulate a block of code that can be executed

function greet(name) {
  return `Hello ${name}`;
}

// Parameters of a function do not have type safety
console.log(greet("Mike"));
console.log(greet(123412));

// Function Scope
// variables declared inside a function are scoped to the function and are not accessible from outside
// Variables declared outside a function (global scope) can be accessed within the function

let global_var = 340;

function scopeCheck() {
  let function_scope = "I am only accesible within this function";
  console.log(global_var);
  console.log(function_scope);
}

scopeCheck();

console.log(global_var);
// console.log(function_scope) // reference error

// Function Closures
// Functions can form closures in JS, which means they can remember and access varaibles from their containing (enclosing) scope even after the otuer function has finished executing

function outer() {
  const message = "Hello, ";

  function inner(name) {
    console.log(message + name);
  }

  return inner;
}

const greetFunc = outer();
greetFunc("John");

// default parameters

function greetWithDefault(name = "Guest") {
  return `Hello, ${name}`;
}

console.log(greetWithDefault());
console.log(greetWithDefault("John"));

// Function Hoisting
// hoisting is a process in JS files where declared variables are brought to the top of the script and placed there within runtime
// If a function is declared, it is hoisted to the top of the code and can be ran anywhere in runtime
