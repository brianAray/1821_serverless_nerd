// Arrow Functions
// Introduced in ES6, they are a concise way of writing anonymous functions
// They provide shorter syntax compared to traditional function expressions
// Especially for one line code

// Basic Syntax
/*

normal function

function nameOfFunction(parameterList){
    functionBody
    return statement
}

const functionName = function (){
    return thing;
}

const functionName = (parameters) => {
    // function body
}


If you want to return something in an arrow function, it depends on how many lines you have
If you have more than one line of code then you will need to use {} and the return statement

If you have one line of code, it is implied to return and you do not need to use {}
This is known as implicit return

*/

// if there is only one paraemter, you can omit the parenthesis
const square = x => x * x;

// If there are no parameters, you need to use an empty parenthesis
const sayHello = () => {
    console.log("hello!");
}


// NO this binding
/*
    Arrow functions do not have their own this binding, they inherit the this value from their enclosing
    lexical context
    This can be beneficial in certain situations, but it also can lead to unexpected behaviors if understood incorrectly
*/

