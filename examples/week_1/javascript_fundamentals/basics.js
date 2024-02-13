// Datatypes
// Primitives
// Integers and floats are both NUMBER

let age = 30;
let price = 19.99;

// String
let name = "John";
let message = "Hello, World!";

// booleans
let isStudent = true;
let isLoggedIn = false;

// Undefined
// Represents a variables that has been declared but not assigned a value
let undefinedVariable;
console.log(undefinedVariable);

// null
// Represents the intentional absence of any object value or no value at all
let emptyValue = null;

// Symbol
// ES6
// Represents unique and immutable values, used often as object property keys
const uniqueKey = Symbol("description");
const uniqueKey2 = Symbol("description");

console.log(uniqueKey == uniqueKey2);

// BigInt
// Represents arbitralily large numbers
// ES11
const bigNumber = 1234567890123456789012345678901234567890n;

// Reference Types
// Objects
// represents a collection of key-value pairs

const person = {
  firstName: "Mike",
  lastName: "Doe",
};

// Arrays
// arrays can have any data type
const numbers = [1, 2, 3, 4, 5];
const mix = [1, "2", { number: 3 }, `4`];

// functions
function greet(name) {
  return `
  Hello 
  ${name}
  `;
}

console.log(greet("Mike"));
