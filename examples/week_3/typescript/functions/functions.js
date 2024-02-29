// Functions
// basic
// function greet(name: string): string{
//     return `Hello ${name}`;
// }
var greetExpression = function (name) {
    return "Hello ".concat(name);
};
// Optionals
function greetOptionals(name, age) {
    if (age) {
        return "Hello ".concat(name, ", you are this age ").concat(age, " ");
    }
    else {
        return "Hello ".concat(name);
    }
}
// rest parameters
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0);
}
function greet(person, age) {
    if (age) {
        return "Hello ".concat(person, ", your age is this: ").concat(age);
    }
    else {
        return "Hello ".concat(person);
    }
}
console.log(greet("Mike"));
console.log(greet("Mike", 50));
