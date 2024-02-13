// Truthy Falsy
// In js, truthy and falsy are values taht are treated as either true or false when evaluated in a boolean context, such as in a conditional statement (if statements)
// It is important to know what values are truthy or falsy, they help in javascripts conditional operation and helps write cleaner code

// Falsy values
// false
// 0
// '' - empty string
// null
// undefined
// NaN - certain invalid mathematical orperations like divide by 0

// Truthy
// everything else
// non zero numbers
// true
// objects
// arrays, even empty ones

if (true) {
  console.log("true is truthy");
}

if (false) {
  console.log("false is falsy"); // This block will not execute.
}

if (0) {
  console.log("0 is falsy"); // This block will not execute.
}

if ('Hello') {
  console.log("'Hello' is truthy");
}

if ([]) {
  console.log("An empty array is truthy");
}

if ({}) {
  console.log("An empty object is truthy");
}

// In conditional statements, you can use truthy and falsy nature of values to write concise and expressive code
