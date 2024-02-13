// Type Coercion
// Refers to the automatic conversion of one data type to another when performing operations or comparisons that involve different data types
// Because JS is a loosely typed language, this means it doesn't require explicity data types being declared with a variable
// It will instead attempt to convert the values as needed
// This can lead to unintended behaviors if not understood correctly

// implicit coersion (auto-conversion)
const num = 5;
const str = "10";
const result = num + str; // the number is coerced to a string, and concatenation occurs

console.log(result); // output is 510

// Comparison with loose equality (==)
let x = 10;
let y = "10";
console.log(x == y);

// Explicit Type Conversion
// you can do this explicitly with functions
// Number(), String(), and Boolean(), etc

const numStr = "42";
const numConvert = Number(numStr);
console.log(numConvert);
console.log(typeof numConvert);
