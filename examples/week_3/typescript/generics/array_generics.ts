// Generics
/**
 * TS supports generics, which allow you to create reusable functions, classes and interfaces that work with various data types
 */

// generic functions for arrays

function reverseArray<T>(array: T[]): T[]{
    return [...array].reverse();
}

const numberArray = [1, 2, 3, 4, 5];
const reversedNumberArray = reverseArray(numberArray);
console.log(reversedNumberArray);

const strings = ["1", "Apple", "Hello1"];
const reversedStringsArray = reverseArray(strings);
console.log(reversedStringsArray)

