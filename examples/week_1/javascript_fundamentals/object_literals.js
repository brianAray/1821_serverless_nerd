// Object Literals
// in JS a object literal is a way to create an object by specifiying its properties and values in curly braces
// They are simple, and commonly used to define and initialize objects

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john@example.com",
};

console.log(person.firstName); // John

// We can add properties or change properties after initialization
person.address = "123 Main Street";
person.age = 31;

// To delete a property, we use the delete keyword
delete person.email;

// Object methods
// We can include functions as object properties, making them methods
const objectWithMethod = {
  sayHello: function () {
    console.log("Hello there!!");
  },
};

objectWithMethod.sayHello();


// Short Hand property names ES6
// You can use shorthand property names when the property name matches the variable name

let firstName = "Jane";
let lastName = "Smith";

const person2 = {
    firstName,
    lastName
}