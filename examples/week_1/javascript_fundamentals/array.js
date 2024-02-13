// Arrays
// basic data structure in JS, used to store and manipulate collections of values
// Arrays can hold values of various data types
// JS arrays are ordered, indexed, and can grow or shrink in size dynamically

// creating an arry
const fruits = ["apple", "banana", "orange"];

// accessing array elements
console.log(fruits[0]);
console.log(fruits[1]);

// modifying elements
fruits[2] = "grape";

console.log(fruits);

// Methods of the array
// there are numerous built in methods

fruits.push("pear"); // add "pear" to the end of the array
console.log(fruits);
fruits.pop(); // removes the element of the array
console.log(fruits);

fruits.forEach(function (fruit) {
  console.log(fruit);
});

// Array destructuring
// introduced in ES6, allows you to extract values from arrays into individual variables

const [first, second, thing] = fruits;
console.log(first);
console.log(second);
console.log(thing);
