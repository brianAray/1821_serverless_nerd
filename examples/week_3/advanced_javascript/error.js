// Error
// Errors are issues that occur during the execution of a program
// it prevents the program from running as intended
// Errors can have many reason, there are different types and different purposes for each

// Syntax Errors, runtime issues, logical errors, etc

// Custom Errors
// Custom errors use the Error constructor
// THese can be thrown like built-in errors to provide a more meaningful response to specific issues in code

function divide(a, b){

    if (!b){
        throw new Error("Division by falsy or ZERO is not allowed");
    }

    return a / b;
}

// handle errors using try catch
try{
    // code that may throw an error
}catch(error){
    // handle the error
}