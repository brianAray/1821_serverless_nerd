# Node JS Question Bank

## Level 1: Basic

1. What is Node.js, and how is it used in software development?
    <details>
    <summary>Answer</summary>
    Node.js is a JavaScript runtime that allows developers to run JavaScript code outside of a web browser, on the server side. It is used in software development to build web servers, command line tools, and other applications that require server-side functionality.
    </details><br>
2. What is NPM, and how is it used to manage packages and dependencies in a Node.js project?
    <details>
    <summary>Answer</summary>
    NPM (Node Package Manager) is a package manager for Node.js that allows developers to download and install third-party packages, manage dependencies, and share code with others. It is used in Node.js projects to simplify the process of managing external libraries and packages.
    </details><br>
3. What is a module in Node.js, and how is it used to organize code?
    <details>
    <summary>Answer</summary>
    A module in Node.js is a self-contained block of code that can be imported and used in other parts of an application. It is used to organize code and make it more modular and reusable. Each module can export a set of functions, variables, or objects that can be used by other parts of the application.
    </details><br>
4. What is the difference between require and import statements in Node.js, and when should you use each?
    <details>
    <summary>Answer</summary>
    The require statement in Node.js is used to import modules into a program. It is a commonJS syntax that is supported by Node.js. The import statement, on the other hand, is an ES6 syntax that is used to import modules in modern JavaScript applications. The main difference between the two is that import statements support named exports and provide better support for tree-shaking and static analysis, while require statements are more flexible and work better with dynamic loading of modules.
    </details><br>
5. What is the difference between synchronous and asynchronous programming in Node.js, and when should you use each?
    <details>
    <summary>Answer</summary>
    Synchronous programming in Node.js is a style of programming where each operation is executed in sequence, one after the other. Asynchronous programming, on the other hand, allows multiple operations to be executed in parallel, without blocking the execution of other code. Synchronous programming is simpler and easier to understand, but can lead to slower performance and longer response times. Asynchronous programming is more complex, but can lead to faster performance and shorter response times.
    </details><br>
6. What is the Node.js Event Loop, and how does it work?
    <details>
    <summary>Answer</summary>
    The Node.js Event Loop is a key feature of the Node.js runtime that allows it to handle I/O operations efficiently and asynchronously. It works by keeping a queue of I/O operations and callbacks, and continuously looping through the queue, executing callbacks when I/O operations are completed.
    </details><br>
7. What is a callback function in Node.js, and how is it used to handle asynchronous code?
    <details>
    <summary>Answer</summary>
    A callback function in Node.js is a function that is passed as an argument to another function, and is called when an asynchronous operation is completed. It is used to handle asynchronous code by allowing the program to continue executing while the operation is being performed, and then executing the callback function when the operation is complete.
    </details><br>
8. What is the role of the process object in Node.js, and how is it used to access environment variables and command line arguments?
    <details>
    <summary>Answer</summary>
    The process object in Node.js is a global object that provides information about the current Node.js process, such as its ID, version, and memory usage. It is used to access environment variables, command line arguments, and other process-related information.
    </details><br>

## Level 2: Intermediate

1. What is a promise in Node.js, and how is it used to handle asynchronous code?
    <details>
    <summary>Answer</summary>
    A promise in Node.js is an object that represents the eventual completion of an asynchronous operation. It is used to handle asynchronous code by allowing developers to chain multiple asynchronous operations together, and handle errors in a consistent way. Promises provide a more intuitive and cleaner syntax for asynchronous programming than callbacks.
    </details><br>
2. What is the difference between a callback and a promise in Node.js, and when should you use each?
    <details>
    <summary>Answer</summary>
    Callbacks and promises are both used to handle asynchronous code in Node.js, but they have different syntax and functionality. Callbacks are functions that are called when an asynchronous operation is completed, and are passed as arguments to the function that initiates the operation. Promises are objects that represent the eventual completion of an asynchronous operation, and can be chained together to create more complex workflows. Promises provide a more intuitive and cleaner syntax than callbacks, but are not supported by all Node.js APIs.
    </details><br>
3. What is the V8 engine in Node.js, and how does it work?
    <details>
    <summary>Answer</summary>
    The V8 engine is a JavaScript execution engine that is used in Node.js and Google Chrome. It is responsible for interpreting and executing JavaScript code in a performant and efficient way. The V8 engine works by compiling JavaScript code into machine code, using just-in-time (JIT) compilation techniques, and optimizing the code for faster execution.
    </details><br>