# TypeScript

TypeScript is an open-source programming language developed by Microsoft and is still maintained by them. It is a strict syntactical superset of JavaScript, adding optional static typing to the language. The added static types in TS can help make code more readable and can also aid in catching errors early in the development process.
TS type system can also be used to generate type definitions for JavaScript libraries, making it easier to use those libraries in TS projects.
TS transpiles to JavaScript, so it can run in any JavaScript runtime, such as web browsers, Node.js, and more. 

- TypeScript is a language that is a superset of JavaScript
    - JS syntax is therefore legal in TS
    - Syntax just refers to the way we write text to form a program
- TS doesn't consider any JS code to be an error because of its syntax
    - You can use any working JS code and put it into a TS file without any worries
- As TS is a typed superset, it means that it adds rules about how different kinds of values can be used
- TS is also a programming language that preserves the runtime behavior of JS
    - If you move code from JS to TS, it is guaranteed to run the same way, even if the TS transpiler things the code has type errors