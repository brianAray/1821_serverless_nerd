// Spread and Rest Operator
// ...
// These two are used for working with objects and arrays
// They provide a concise way to manipulate and destructure data

// Spread Operator

// Copy an Array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; // create a shallow copy of the array
// console.log(originalArray);
// console.log(copiedArray);

// Concatenate the Array
const array1 = [1, 2];
const array2 = [3, 4];
const concatenatedArray = [...array1, ...array2]; // combine the two arrays
// console.log(concatenatedArray);


// Cloning Objects
const originalObject = {a: 1, b: 2};
const clonedObject = { ...originalObject};

// merge Object
const object1 = {a: 1, b:2};
const object2 = {c: 3, d: 4};
const mergedObject = {...object1, ...object2};


// Rest Operator
// Rest operator is used in function parameter lists and destructuring assignments to gather multiple values into a single variable

function sum(...numbers){
    return numbers.reduce((acc, num) => acc + num, 0);
};

console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 4));
console.log(sum(1, 100, 33, 523, 2, 4));

// Destructuring Assignment
const [first, second, ...rest] = [1, 2, 3, 4, 5];

console.log(first);
console.log(second);
console.log(rest);

// destructuring with rest
const {a, ...objectRest} = {a:1 , b:2, c:3, d:4};
console.log(a);
console.log(objectRest);
