// function add(a, b){
//     return a + b;
// }

// function subtract(a, b){
//     return a -b;
// }

// function multiply(a, b){
//     return a * b;
// }

// function divide(a, b){
//     if (!b){
//         throw new Error('Cannot divide by NaN or 0')
//     }
//     return a / b;
// }

// module.exports = {
//     add,
//     subtract,
//     multiply,
//     divide
// }


const mathOperations = {
    sum: (a, b) => a + b,
    diff: (a, b ) => a - b,
    product: (a, b) => a * b
}

module.exports = mathOperations