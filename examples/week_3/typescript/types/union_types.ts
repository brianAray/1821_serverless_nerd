// Union Types
/**
 * It allows you to specify a variable or parameter can have multiple possible types
 */

let ageOrName: number | string;

ageOrName = 40; // valid
ageOrName = "Mike"; // valid


// a function that accepts either a number of a string as an argument
function display(value: number | string){
    console.log(value);
}

display(42);
display("Value");


// object properties

type phoneAddress = {
    phoneNumber: string | number;
    address ?: string
};


// When working with union types, use type guards to narrow down the possibility of the types to make sure you are using the right methods

function displayValue(value: number | string){
    if (typeof value === "number"){
        console.log(`Value is a number: ${value}`);
    }else{
        console.log(`Value is a string: ${value}`);
    }
}



