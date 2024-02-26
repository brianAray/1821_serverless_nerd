# Asynchronous JavaScript

Asynchronous JS allows you to execute multiple tasks concurrently without blocking the main thread. It's essential for building responsibe web apps and handling time-consuming operations like network requests, file I/O, and animations.

Asynchronous code ensures that your app can continue to respond to client interactions while waiting for time consuming tasks to complete.

## Common Use Cases for Async JavaScript

1. HTTP requests
2. File Operations
3. Timers
4. UI events
5. Animations
6. Concurrency

## Asynchronous Patterns

1. Callback functions
    - Callbacks are functions that are passed as arguments to other functions
    - They are executed once the asynchronous task is completed
2. Promises
    - A more structured way of handling asynchronous opertaions
    - They represent a value that may not be available just yet but will be resolved or rejected in the future
3. Async/Await
    - Introduced later on, the `async` and `await` keywords simplify asynchronous coding
    - It makes it appear as synchronous code while maintaining non-blocking behavior

## Callback Queue

The callback queue, also known as the message queue or task queue, is a critical component of the event-driven model in JS. It's crucial in managing async code execution, and ensuring that callback functions are executed in a specific order

1. Event Loop
    - The callback queue is essential to the event loop, which is responsible for handling async tasks and events in a non-blocking way
2. Execution Stack
    - The JS runtime maintains an execution stack (call stack) to keep track of funciton calls that are currently being executed
    - When a function is called, it's pushed onto the stack, and when it returns, it is popped off the stack
3. Callback Functions
    - Async operations like timers, network requests, file i/o, can result in callback functions that need to be executed once the operation completed
    - These callback functions are placed in the callback queue

## Event Loop Process

The event loop constantly checks the state of the call stack, and the callback queue

- When a script is executed, the main code is pushed onto the stack and executed
- Async operations, like timer functions, are initiated, and their associated callback functions are placed in the callback queue when the specified time or condition is met
- The event loop repeatedly checks if the call stack is empty
    - When it is empty, the event loops picks the first callback function from the queue and pushes it onto the call stack for execution
- If the callback queue is not empty and the call stack is empty, the event loops picks the first callback function from the queue adn pushes it onto the call stack for execution
- The callback function is executed, and if it contains further async operations or callback, they follow the same process
- The cycle continues until both the call stack and the callback queue are empty

## Call Stack

The call stack is a data structure that keeps track of function calls in a program. When a function is called, a new entry (a "frame") is added to the top of the call stack, represetnign the context of that function call. When the function returns, its frame is removed from the stack. This mechanism ensures that functions are executed in a predicatable order, following LIFO (Last In First Out) Principle.

1. Function Invocation
    - When a function is called, a new frame for that function is created and pushed onto the stack
    - This frame contains the information about the function's parameters, local variabels, and execution context
2. Execution
    - The functions code is executed within its frame, and any subsequent function calls within that function will result in additional frames being pushed onto the stack
3. Function completion
    - When a function completes its execution, its frame is removedd from the top of the stack (popped)
    - Control returns to the previous function in the stack, continuing its execution from where it left off