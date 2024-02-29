// Functions
// basic

// function greet(name: string): string{
//     return `Hello ${name}`;
// }

const greetExpression = (name: string): string => {
    return `Hello ${name}`;
}

// Optionals
function greetOptionals(name: string, age?: number): string {
    if (age){
        return `Hello ${name}, you are this age ${age} `;
    }else{
        return `Hello ${name}`;
    }
}

// rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}


// Function Overloads
function greet(person: string):string;
function greet(person: string, age: number): string;
function greet(person: string, age?: number):string {
    if(age){
        return `Hello ${person}, your age is this: ${age}`
    }else{
        return `Hello ${person}`;
    }
}

console.log(greet("Mike"));
console.log(greet("Mike", 50));