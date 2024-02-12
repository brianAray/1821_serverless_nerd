# Introduction to JavaScript
1. JavaScript is dynamic and weakly typed
    - Dynamic means the type of value that the variable holds can change
    - Weakly means you don't need to specify the type of a variable when you declare it
2. Object-oriented
    - Allows you to define and manipulate objects that represent real-world entities
    - Objects in JS are collections of key-value pairs that are known as properties
    - JS objects are different than objects in Java, for example, because we don't need a class defined to create a JS object
3. Functional
    - JavaScript treats functions as first-class citizens
        - Pass functions as arguments when calling another function
        - Assign functions to variables
        - Return functions from another function
    - Allows us to write code using a "functional programming" paradigm
4. Cross-platform
    - JavaScript is supported by all modern browsers, which means we can use it to write code that can run on any device that can run a web browser (client-sided)
    - JavaScript can also be run on the server-side using a runtime environmment called Node.js (server-sided)
    - This makes JavaScript a powerful choice for building client-side and server-side applications
5. Single-threaded
    - Thread: a flow of execution where instructions (lines of code) are executed one at a time, line by line, top to bottom
    - JavaScript supports asynchronous operations that allow it to execute multiple pieces of code in a non-blocking manner
        - This is achieved through the use of promises, async-await, callback functions, and the event loop
        - Asynchronous operations allow JS to perform long-running tasks, such as making network requests, reading large files, etc. without blocking other code from running (other code does not need to wait for the long-running task to finish)

## Naming Conventions for JS
- For variables: camelCase
- For functions: camelCase
- For constants: UPPERCASE_FOR_CONSTANTS
- For classes and function constructors: PascalCase