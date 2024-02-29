// Closures

// A closure occurs when a function is defined within another function and has access to the otuer functions variables
// This allows for data encapsulation and the presevation of state within a function ev en after the outer function has finished executing

function outer() {
  const outerVariable = 15;

  function inner() {
    console.log(outerVariable); // inner fucntion has access to the outerVariable
  }

  return inner; // return the inner function
}

const closureFunction = outer(); // closure is formed here

closureFunction();

// data encapsulation
// closures are used often to create private variables and methods within a function

function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount());

// This example has a createCounter function that returns an object with two method that can manipulate and access the count variable
// count remains private to the closure, and hidden from external access

