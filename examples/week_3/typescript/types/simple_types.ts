//number 
let age: number = 30;
let price: number = 19.99;

// string 
let names: string = "Alice";
let greeting: string = `Hello, ${names}`;

// boolean
let isActive: boolean = false;

// array
let numbers: number[] = [1, 2, 3];

// tuple
// A typed array with a pre-defined length and type for each index
// These are useuful as they allow each element in the array to be a known type of value

let person: [string, number] = ["Alice", 30];
let singleTupleType: [number, number, number] = [1, 2, 3];

// Any type
// this lets you behave like JS
let data: any = 34;
data = "Hello";
data = [2, 3, 4];


// void
// used to indicate a function does not return anything

function logMessage(message: string): void{
    console.log(message);
}

// null and undefined
// primitives of JS

let nullableValue: null = null;
let undefinedValue: undefined = undefined;