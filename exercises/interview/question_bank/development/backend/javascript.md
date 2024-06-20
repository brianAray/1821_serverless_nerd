# JavaScript Question Bank

## Level 1: Basic

1. What is JavaScript, and how is it used in web development?
    <details>
    <summary>Answer</summary>
    JavaScript is a programming language that is used to add interactivity and dynamic behavior to web pages. It is used in web development to create interactive user interfaces, validate form data, and perform other tasks that require client-side scripting.
    </details><br>
2. What is a variable in JavaScript, and how is it used to store data?
    <details>
    <summary>Answer</summary>
    A variable in JavaScript is a container that is used to store data, such as strings, numbers, and objects. Variables can be declared using the var, let, or const keywords, and can be assigned values using the = operator. They are used to store data that can be manipulated or used in calculations later in the program.
    </details><br>
3. What is an array in JavaScript, and how is it used to store and manipulate collections of data?
    <details>
    <summary>Answer</summary>
    An array in JavaScript is a collection of values that can be stored and manipulated as a single object. Arrays can contain any type of data, including strings, numbers, and objects. They are used to store and manipulate collections of data, such as a list of names or a set of coordinates.
    </details><br>
4. What is a function in JavaScript, and how is it used to encapsulate code and make it reusable?
    <details>
    <summary>Answer</summary>
    A function in JavaScript is a block of code that performs a specific task, and can be called from other parts of the program. Functions are used to encapsulate code and make it reusable, so that the same code can be used in multiple parts of the program without duplicating it. They are also used to break down complex tasks into smaller, more manageable pieces.
    </details><br>
5. What is an if statement in JavaScript, and how is it used to perform conditional logic?
    <details>
    <summary>Answer</summary>
    An if statement in JavaScript is used to perform conditional logic, based on a specified condition. It allows developers to execute different blocks of code depending on whether a condition is true or false. If statements are used to make decisions in a program based on input or data that is not known at the time the code is written.
    </details><br>
6. What is the difference between null and undefined in JavaScript, and how are they used to represent missing or non-existent values?
    <details>
    <summary>Answer</summary>
    Null and undefined are both used in JavaScript to represent missing or non-existent values, but they have different meanings. Null is a value that is explicitly assigned by the developer to indicate that a variable or object has no value. Undefined, on the other hand, is a value that is assigned automatically by JavaScript when a variable or object has not been assigned a value.
    </details><br>
7. What is a loop in JavaScript, and how is it used to iterate over arrays or perform repetitive tasks?
    <details>
    <summary>Answer</summary>
    A loop in JavaScript is used to perform repetitive tasks, such as iterating over an array or performing a set of instructions a certain number of times. The most common types of loops in JavaScript are the for loop, while loop, and do-while loop.
    </details><br>
8. What is the difference between == and === in JavaScript, and how are they used to compare values?
    <details>
    <summary>Answer</summary>
    == and === are both used to compare values in JavaScript, but they have different meanings. == compares values without regard to their type, and can perform type coercion if the types do not match. ===, on the other hand, compares values without performing type coercion, and only returns true if the values are of the same type and have the same value.
    </details><br>
9. What is an object in JavaScript, and how is it used to represent complex data structures?
    <details>
    <summary>Answer</summary>
    An object in JavaScript is a complex data structure that consists of key-value pairs, where each key is a string and each value can be any data type, including strings, numbers, arrays, and other objects. Objects are used to represent more complex data structures than simple variables or arrays, and can be used to model real-world objects or entities.
    </details><br>
10. What is a callback function in JavaScript, and how is it used to handle asynchronous code?
    <details>
    <summary>Answer</summary>
    A callback function in JavaScript is a function that is passed as an argument to another function, and is executed after the first function has completed. Callback functions are used to handle asynchronous code, such as fetching data from a server, where the result is not available immediately. The callback function is executed when the data is available, and can then be used to update the UI or perform other actions.
    </details><br>
11. What is the difference between let, const, and var in JavaScript, and how are they used to declare variables?
    <details>
    <summary>Answer</summary>
    let, const, and var are all used to declare variables in JavaScript, but they have different scopes and behaviors. var declares a variable with function scope, which means that the variable can be accessed anywhere within the function. let and const, on the other hand, declare variables with block scope, which means that the variable is only accessible within the block where it was declared. const is used to declare variables that should not be reassigned, while let is used for variables that may be reassigned.
    </details><br>
12. What is an error in JavaScript, and how are they handled in a program?
    <details>
    <summary>Answer</summary>
    An error in JavaScript is a condition that occurs when the program encounters an unexpected situation, such as a syntax error or a runtime error. Errors can be handled using try-catch statements, which allow developers to catch and handle specific types of errors.
    </details><br>
13. What is the difference between a syntax error and a runtime error in JavaScript?
    <details>
    <summary>Answer</summary>
    A syntax error in JavaScript occurs when the program contains an error in its syntax, such as a missing or misplaced semicolon or a misspelled keyword. A runtime error, on the other hand, occurs when the program encounters an error during execution, such as a division by zero or a reference to an undefined variable.
    </details><br>
14. What is a try-catch statement in JavaScript, and how is it used to handle errors in a program?
    <details>
    <summary>Answer</summary>
    A try-catch statement in JavaScript is used to catch and handle errors in a program. It works by wrapping the code that might produce an error in a try block, and specifying the code to be executed if an error occurs in a catch block. If an error occurs in the try block, the catch block is executed and the error is handled.
    </details><br>
15. What is the difference between a throw statement and an error object in JavaScript?
    <details>
    <summary>Answer</summary>
    A throw statement in JavaScript is used to throw an error manually, and can be used to handle situations where the program encounters a problem that cannot be handled by the standard error handling mechanisms. An error object, on the other hand, is created automatically by JavaScript when an error occurs, and contains information about the type and cause of the error.
    </details><br>
16. What is the role of the finally block in a try-catch statement, and how is it used to perform cleanup tasks?
   <details>
    <summary>Answer</summary>
    The finally block in a try-catch statement is used to specify code that should be executed regardless of whether an error occurs in the try block or not. It is used to perform cleanup tasks, such as closing database connections or releasing system resources, that should be performed regardless of the outcome of the try block.
    </details><br>
17. What are the three states of a Promise in JavaScript, and what do they represent?
   <details>
    <summary>Answer</summary>
    The three states of a Promise in JavaScript are pending, fulfilled, and rejected. The pending state represents a Promise that is neither fulfilled nor rejected, and is still waiting for the asynchronous operation to complete. The fulfilled state represents a Promise that has completed successfully, and contains a value. The rejected state represents a Promise that has completed with an error, and contains an error object.
    </details><br>
18. What is the difference between a resolved Promise and a rejected Promise in JavaScript?
   <details>
    <summary>Answer</summary>
    A resolved Promise in JavaScript is a Promise that has completed successfully, and contains a value. A rejected Promise, on the other hand, is a Promise that has completed with an error, and contains an error object.
    </details><br>

## Level 2: Intermediate

1. What is closure in JavaScript, and how is it used to encapsulate and protect data?
    <details>
    <summary>Answer</summary>
    Closure in JavaScript is a mechanism that allows a function to access and use variables from its outer scope, even after the outer function has completed. This is achieved by creating a "closure" around the variables, which allows them to be accessed by the inner function. Closures are often used to encapsulate and protect data, by creating private variables and functions that are not accessible from outside the closure.
    </details><br>
2. What is a prototype in JavaScript, and how is it used to add or modify methods and properties of an object?
    <details>
    <summary>Answer</summary>
    A prototype in JavaScript is a mechanism that allows developers to add or modify methods and properties of an object, without having to modify the object itself. Prototypes are used to create new objects based on existing objects, and can be used to create complex data structures and share functionality between objects. They are also used to provide inheritance in JavaScript, by allowing child objects to inherit methods and properties from their parent objects.
    </details><br>
3. What is the difference between synchronous and asynchronous code in JavaScript, and how is each used to handle different types of tasks?
    <details>
    <summary>Answer</summary>
    Synchronous code in JavaScript is code that is executed in a sequential manner, where each line of code is executed in turn. Asynchronous code, on the other hand, is code that is executed in a non-blocking manner, where the program can continue to execute while waiting for a particular task to complete. Asynchronous code is used to handle I/O operations, such as fetching data from a server, where the result is not available immediately. Synchronous code is used for tasks that can be completed quickly and do not require I/O operations.
    </details><br>
4. What is a Promise in JavaScript, and how is it used to handle asynchronous code?
    <details>
    <summary>Answer</summary>
    A Promise in JavaScript is an object that represents the eventual completion of an asynchronous operation, and is used to handle asynchronous code in a more structured way than callbacks. Promises provide a way to chain multiple asynchronous operations together, and handle errors in a consistent way. They also provide a cleaner and more readable syntax than nested callbacks.
    </details><br>
5. What is async/await in JavaScript, and how is it used to handle asynchronous code?
    <details>
    <summary>Answer</summary>
    Async/await in JavaScript is a syntactical sugar that simplifies the syntax of Promises, and makes it easier to write and read asynchronous code. It allows developers to write asynchronous code that looks synchronous, by using the async and await keywords. The async keyword is used to define a function as asynchronous, while the await keyword is used to wait for the completion of a Promise before executing the next line of code.
    </details><br>
6. What is the difference between async/await and Promises in JavaScript, and when would you use one over the other?
    <details>
    <summary>Answer</summary>
    Async/await and Promises in JavaScript are both used to handle asynchronous code, but they have different syntax and behavior. Async/await is often preferred over Promises for its simpler and more readable syntax, and its ability to make asynchronous code look synchronous. Promises, on the other hand, provide more flexibility and control over asynchronous code, and can be used in situations where more fine-grained control over the Promise's behavior is required.
    </details><br>
7. What is the try-catch statement in async/await, and how is it used to handle errors in an asynchronous function?
    <details>
    <summary>Answer</summary>
    The try-catch statement in async/await is used to handle errors in an asynchronous function, in the same way as a try-catch statement in synchronous code. It works by wrapping the code that might produce an error in a try block, and specifying the code
    </details><br>

## Level 3: Advanced

1. What is the Event Loop in JavaScript, and how does it work?
    <details>
    <summary>Answer</summary>
    The Event Loop in JavaScript is a mechanism that allows the program to handle I/O operations efficiently and asynchronously. It works by continuously looping through a queue of events and callbacks, and executing them when the corresponding I/O operation is completed. The Event Loop is implemented using the V8 engine, and is designed to be efficient and performant.
    </details><br>
2. What is a higher-order function in JavaScript, and how is it used to create more reusable and modular code?
    <details>
    <summary>Answer</summary>
    A higher-order function in JavaScript is a function that takes another function as an argument or returns a function as a result. Higher-order functions are used to create more reusable and modular code, by separating the core functionality from the specific details of the implementation. They are often used to create libraries or frameworks that can be used in a wide variety of contexts.
    </details><br>
3. What is functional programming in JavaScript, and how is it used to create more maintainable and testable code?
    <details>
    <summary>Answer</summary>
    Functional programming in JavaScript is a programming paradigm that emphasizes the use of pure functions, immutability, and functional composition. It is used to create more maintainable and testable code, by reducing the number of side effects and increasing the predictability of the code. Functional programming is often used in combination with libraries and frameworks like Lodash or Ramda.
    </details><br>
4. What is a closure in JavaScript, and how is it used to create private variables and methods?
    <details>
    <summary>Answer</summary>
    A closure in JavaScript is a function that has access to variables in its outer scope, even after the outer function has completed. Closures are used to create private variables and methods, by creating a function that has access to a private variable and returning it as a public method. This allows developers to encapsulate and protect data and functionality, and prevent accidental modification of private variables.
    </details><br>