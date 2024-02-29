// Asynchronous JavaScript

/**
 * Async JS allows you to execute multiple tasks concurrently without blocking the main execution thread
 * It is essential for responsive web applications and handling time consuming operations like:
 *  - network requests
 *  - file I/O
 *  - Animations
 * 
 * Async code ensures that your application can continue to respond to user interactions and other events while waiting
 * for time consuming operations to complete
 * 
 */


// Call Stack
/**
 * The call stack is a fundamental concept in JS's execution model
 * It is a data structure that keeps track of function calls in a program
 * When a function is called, a new entry (a "frame") is added to the top of the call stack
 * The frame represents the context of the function call
 * 
 * When the function reaches completion, then its frame is removed from the call stack
 * 
 * This mechanism that functions are completed in a predictable order, following LIFO (Last In First Out) principle
 */

// function foo(){
//     console.log("inside foo");
//     bar();
//     console.log("Back inside foo");
// }

// function bar(){
//     console.log("inside bar");
// }

// foo();

/**
 * foo() is called, and the frame for foo is pushed onto the stack
 * 
 * inside foo, bar() is called and the frame for bar is pushed onto the stack
 * 
 * inside bar, there is no more function calls, so bar completes and its frame is popped from the stack
 * 
 * Control returns to foo, and the rest of the function completes
 * 
 * When foo is completed, its frame is popped from the stack
 * 
 * The main program is now left with an empty call stack
 */

/**
 * The call stack is a critical part of JS's single threaded event-driven architecture
 * It ensures that functions are executed in a predicatble order
 */


/**
 * Event Loop
 * 
 * The event loop is a fundamental part of JS's concurrency model, enabling async operations to be handled efficeintly in a single threaded
 * environment
 * It is responsible for manaing the execution of code, handling events, and processing asynchronous tasks
 * 
 * How it works:
 * 
 * 1. Main Execution Thread
 * JS is inherently single threaded, meaning it has only one execution thread that processes code sequentially
 * 
 * 2. Call Stack
 * The call stack keeps track of the function calls and their execution context
 * 
 * 3. Event Queue (call back queue)
 * This stores callback functions and messages from asynchronous operations
 * 
 * 4. Event Loop
 * Loop through continuously checking two things
 *  - Whether the call stack is empty
 *  - Whether there are tasks in the event queue
 * 
 * 5. Event Processing
 * When the call stack is empty  and there are no tasks in the event queue, the event loops takes the first
 * task from the queue and pushes its associated callback function onto the call stack for execution
 * 
 * 6. Asynchronous Executions
 * Asynchronous tasks like callbacks or I/O operations, are not executed immediately, instead they are placed in the event queue
 * and processes when the stack is empty
 * 
 * 7. Non-Blocking Behavior
 * The event loop ensures that the main execution thread remains non-blocking
 * It allows JS to handle multiple tasks concurrently without freezing the entire application
 */


/**
 * Callback Queue (event queue)
 * 
 * This is also known as message queue, task queue, event queue, etc
 * It is a critical component of the event-driven model in JS
 * 
 * Asynchronous operations like times, network requests, and user interactions can result in callback functions that need to be executed
 * once the operation completes
 * These callback functions are placed in the callback queue
 * 
 * 
 * 
 */

console.log("Start");

setTimeout(() => {
    console.log("Timeout Callback")
}, 3000);

console.log("End");