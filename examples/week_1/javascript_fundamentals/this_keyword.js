// this keyword

/*
    The this keywrod is JS is a special identifier that refers to the current object or context within which the code is executing
    THe value of this can change depending on how and where a fucntion is called
    Understanding this is crucial when working with objects, functions, and constructors in JS
*/

// Global Context
// In global context, this is outside of any function or scope, this refers to the global object
// In a browser this is widnow, in nodeJS it is global

// Function Context
// Inside a fucntion, the value of this can vary depending on how the function is called
// In a regular function (not an arrow function), this refers to the object that called the function
// If called directly, it refers to the global object

function greet() {
  console.log(this === window); // true in a browser
  console.log(this === global); // true in Node.js
}

// In an object method, this refers to the object that contains the method

const person = {
  name: "Josh",
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};

person.greet();

// Constructor Context
// Inside a constructor function (a function used to create objects with the new keyword), this refers to the newly created instance of the object

function Person(name) {
  this.name = name;
}

const john = new Person("John");
console.log(john.name);

// Arrow Function
// Arrow functions do not have their own this context, instead, they inherit the this value from their enclosing lexical scope

const person2 = {
  name: "Mike",
  sayHello: () => {
    console.log(`Hello, ${this.name}`);
  },
};

person2.sayHello();
