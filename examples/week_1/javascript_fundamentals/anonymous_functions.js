// Anonymous Functions
// in JS a anonymous function is a function that does not have a name
// Instead of defining a name with the function keyword, we define it as an expression

// These are often used as arguments to other functions or to  create immediately invoked function expression (IIFE)

// Function Expression

const add = function (a, b) {
  return a + b;
};

const result = add(3, 4); // 7
console.log(result);

// Callback function
// these are functions passed to other higher order functions like forEach, map, filter, and event handlers

const number = [1, 2, 3, 4, 5];

number.forEach(function (number) {
  console.log(number);
});

// IIFE (Immediately Invoked Function Expression)
// This is often used to create a private scope for variables to avoid polluting the global scope

(function () {
  const message = "This is an IIFE";
  console.log(message);
})();

// Passing functions as arguments

function processNumbers(numbers, callback) {
  const result = callback(numbers);
  console.log(`Result: ${result}`);
}

const sum = (numbers) => numbers.reduce((acc, num) => acc + num, 0);
const product = (numbers) => numbers.reduce((acc, num) => acc * num, 1);

processNumbers(number, sum);
processNumbers(number, product);

// To inherit the this binding in a object, we can do this

function Person(name) {
  this.name = name;
  this.sayHello = () => {
    console.log(`Hello, ${this.name}`);
  };
}

const person = new Person("John");
person.sayHello();
