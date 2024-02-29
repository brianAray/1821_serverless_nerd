// Enhanced Object Literal

/**
 * This is introduced in ES6 and provides a concise and convenient way to create objects in JS
 */

// Property and method shorthand

const name = "John";
const age = 30;

// traditional object literal
const person = {
    name: name,
    age: age,
    sayHello: function () {
        console.log("Hello!");
    }
};

// enhanced object literal (property shorthand)

const enhancedPerson = {
    name,
    age,
    sayHello() {
        console.log("Hello!");
    }
}

// Computed Property names
// This is for dynamic property assignment

const dynamicKey = "color";

const car = {
    make: "Toyota",
    [dynamicKey]: "blue"
}

console.log(car.color);