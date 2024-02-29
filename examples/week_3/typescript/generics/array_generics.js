// Generics
/**
 * TS supports generics, which allow you to create reusable functions, classes and interfaces that work with various data types
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// generic functions for arrays
function reverseArray(array) {
    return __spreadArray([], array, true).reverse();
}
var numberArray = [1, 2, 3, 4, 5];
var reversedNumberArray = reverseArray(numberArray);
console.log(reversedNumberArray);
var strings = ["1", "Apple", "Hello1"];
var reversedStringsArray = reverseArray(strings);
console.log(reversedStringsArray);
