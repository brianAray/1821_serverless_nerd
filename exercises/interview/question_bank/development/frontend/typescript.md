# TypeScript Question Bank

## Level 1: Basic

<ol>
<li>What is TypeScript?</li>
<li>What are the benefits of using TypeScript?</li>
<li>How is TypeScript different from JavaScript?</li>
<li>What is a type in TypeScript?</li>
<li>What is type inference in TypeScript?</li>
<li>What are interfaces in TypeScript?</li>
<li>What is the any type in TypeScript?</li>
<li>What is the unknown type in TypeScript?</li>
<li>What is the difference between null and undefined in TypeScript?</li>
<li>What are enums in TypeScript?</li>
<li>What are classes in TypeScript?</li>
<li>What is inheritance in TypeScript?</li>
<li>What is a constructor in TypeScript?</li>
<li>What is a decorator in TypeScript?</li>
<li>What is a namespace in TypeScript?</li>
<li>What are generics in TypeScript?</li>
<li>What is the purpose of the keyof keyword in TypeScript?</li>
<li>What is the difference between type and interface in TypeScript?</li>
<li>What is a tuple in TypeScript?</li>
<li>What is the purpose of the readonly keyword in TypeScript?</li>
</ol>

<details>
<summary>Answers</summary>
<ol>
<li>TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.</li>
<li>TypeScript provides a way to catch errors early, improve tooling and development experience, and enforce type safety throughout your codebase.</li>
<li>TypeScript adds optional static typing to JavaScript and introduces new language features, such as interfaces and classes.</li>
<li>A type in TypeScript defines the shape of data, including the expected properties, methods, and values.</li>
<li>Type inference in TypeScript allows the compiler to automatically deduce the type of a variable based on its usage.</li>
<li>Interfaces in TypeScript define a set of properties and methods that a class or object should have. They can also be used to define function types and callback signatures.</li>
<li>The any type in TypeScript is a way to opt out of type checking for a particular value or variable. It is not recommended to use any more than necessary.</li>
<li>The unknown type in TypeScript is a way to represent a value whose type is not known. It is more restrictive than any, and requires type checking or casting to access its properties or methods.</li>
<li>Null and undefined in TypeScript represent missing or absent values. Null is a value that represents intentional absence, while undefined is a value that represents uninitialized or absent values.</li>
<li>Enums in TypeScript provide a way to define a set of named constants that have integer values. They can be used for flags, options, or status codes.</li>
<li>Classes in TypeScript provide a way to define blueprints for objects, including properties and methods. They can be used to encapsulate data and behavior and provide inheritance and polymorphism.</li>
<li>Inheritance in TypeScript allows a class to inherit properties and methods from a parent class, and override or extend them as needed.</li>
<li>A constructor in TypeScript is a special method that is called when a new instance of a class is created. It is used to initialize the properties and state of the object.</li>
<li>A decorator in TypeScript is a special function that can be used to modify or add behavior to a class or property. They can be used for dependency injection, metadata, or aspect-oriented programming.</li>
<li>A namespace in TypeScript is a way to group related code and prevent naming conflicts. They can be used to organize large codebases or to provide module-like behavior.</li>
<li>Generics in TypeScript provide a way to create reusable functions, classes, or interfaces that can work with a variety of types. They can be used to improve type safety and code reuse.</li>
<li>The keyof keyword in TypeScript is used to access the keys of an object or the names of the properties of a type. It can be used to provide generic algorithms or to enforce property naming conventions.</li>
<li>The main difference between type and interface in TypeScript is that a type can be a union, intersection, or a primitive, while an interface can only be an object type. Additionally, interfaces can be extended or implemented, while types can only be aliased.</li>
<li>A tuple in TypeScript is a type that represents an array with a fixed number of elements, each with its own type.</li>
<li>The readonly keyword in TypeScript is used to indicate that a property or array element cannot be changed once it has been initialized.</li>
</ol>
</details>

## Level 2: Intermediate

<ol>
<li>How do you declare a variable with a specific type in TypeScript?</li>
<li>What is type checking in TypeScript?</li>
<li>What are optional and default parameters in TypeScript?</li>
<li>What is the purpose of the 'as' keyword in TypeScript?</li>
<li>What is a union type in TypeScript?</li>
<li>What is an intersection type in TypeScript?</li>
<li>What is a type guard in TypeScript?</li>
<li>What is a type alias in TypeScript?</li>
<li>What are modules in TypeScript?</li>
<li>What is a namespace in TypeScript, and how is it different from a module?</li>
<li>What is an abstract class in TypeScript?</li>
<li>What is a mixin in TypeScript?</li>
<li>How do you use async/await in TypeScript?</li>
<li>What is the purpose of the 'in' keyword in TypeScript?</li>
<li>What is the 'never' type in TypeScript?</li>
</ol>

<details>
<summary>Answers</summary>
<li>To declare a variable with a specific type in TypeScript, you can use the syntax variableName: type.</li>
<li>Type checking in TypeScript is the process of verifying that your code is correctly typed and that the types are used consistently throughout your codebase. It is performed by the TypeScript compiler and can catch type errors at compile time rather than runtime.</li>
<li>Optional parameters in TypeScript are declared using a question mark after the parameter name, while default parameters are declared using an equal sign and a default value. Optional and default parameters can be used to provide more flexibility and prevent errors in function calls.</li>
<li>The 'as' keyword in TypeScript is used to perform type assertions, which allow you to tell the TypeScript compiler that a value is of a certain type, even if it cannot be statically checked.</li>
<li>A union type in TypeScript is a type that represents a value that can be one of several types. It is represented using the pipe symbol (|) between the types.</li>
<li>An intersection type in TypeScript is a type that represents a value that has all the properties and methods of two or more types. It is represented using the ampersand symbol (&) between the types.</li>
<li>A type guard in TypeScript is a way to narrow the type of a variable based on a condition or a type check. It can be used to provide more precise types and prevent errors.</li>
<li>A type alias in TypeScript is a way to create a new name for an existing type, either to make it more readable or to provide a more descriptive name. Type aliases can be used for complex types, unions, and intersections.</li>
<li>Modules in TypeScript provide a way to organize code into reusable and independent units of functionality. They can be used to provide encapsulation, dependency management, and code reuse.</li>
<li>A namespace in TypeScript is a way to group related code and prevent naming conflicts, similar to a module. However, namespaces are more limited in scope and cannot be used to provide import/export functionality.</li>
<li>An abstract class in TypeScript is a class that cannot be instantiated directly and must be extended by a subclass. It can define abstract methods that must be implemented by the subclass, as well as concrete methods that can be inherited or overridden.</li>
<li>A mixin in TypeScript is a way to combine the behavior of two or more classes into a single class. It can be used to provide code reuse and modularity, and can be implemented using inheritance or object composition.</li>
<li>Async/await in TypeScript allows you to write asynchronous code using synchronous syntax, making it easier to read and write. It works by using the async keyword to mark a function as asynchronous and the await keyword to wait for the result of a promise.</li>
<li>The 'in' keyword in TypeScript is used to check if a property or method exists on an object or a type. It can be used to provide more precise types and prevent errors.</li>
<li>The 'never' type in TypeScript is a type that represents a value that can never occur. It is used to indicate errors, infinite loops, or functions that never return.</li>
</details>

## Level 3: Advanced

<ol>
<li>What is the difference between an interface and a type alias in TypeScript?</li>
<li>How do you create a custom type guard in TypeScript?</li>
<li>What is the purpose of the keyof and typeof operators in TypeScript?</li>
<li>What is a conditional type in TypeScript?</li>
<li>What is a mapped type in TypeScript?</li>
<li>How do you create a higher-order component in TypeScript?</li>
<li>What are decorators used for in TypeScript, and what are some common use cases?</li>
<li>What is the purpose of the 'as const' assertion in TypeScript?</li>
<li>What is the purpose of the 'infer' keyword in TypeScript?</li>
<li>How do you integrate TypeScript with a front-end framework like React?</li>
</ol>

<details>
<summary>Answers</summary>
<li>The main difference between an interface and a type alias in TypeScript is that an interface can be extended or implemented, while a type alias can only be aliased. Additionally, interfaces can be used for object types, while types can be used for unions, intersections, and primitive types.</li>
<li>To create a custom type guard in TypeScript, you can create a function that takes a value and returns a boolean, and use the type assertion syntax to narrow the type of the value based on the result of the function.</li>
<li>The keyof operator in TypeScript is used to access the keys of an object or the names of the properties of a type. The typeof operator is used to create a type that represents the type of a value or a variable.</li>
<li>A conditional type in TypeScript is a type that depends on a condition, such as the type of an argument or the return type of a function. It can be used to provide more precise types and to create generic functions and types.</li>
<li>A mapped type in TypeScript is a type that transforms an existing type by applying a mapping function to its properties. It can be used to create new types that share the properties of an existing type, but with different modifiers, types, or values.</li>
<li>To create a higher-order component in TypeScript, you can use a function that takes a component as an argument and returns a new component that adds or modifies its behavior. You can use generics and type inference to ensure that the input and output components have the correct types and props.</li>
<li>Decorators in TypeScript are used to modify or add behavior to a class, property, or method at runtime. They can be used for dependency injection, logging, validation, or performance monitoring, among other things.</li>
<li>The 'as const' assertion in TypeScript is used to create a readonly type that is inferred from a value. It can be used to provide more precise types and to prevent accidental modification of values.</li>
<li>The 'infer' keyword in TypeScript is used to infer a type from another type, such as a parameter or a return type of a function. It can be used to create generic functions and types that depend on the input or output types.</li>
<li>To integrate TypeScript with a front-end framework like React, you can use the framework-specific types and features, such as React.FC and React.ComponentProps. You can also use tools like TypeScript's strict mode and linting plugins to ensure type safety and consistency throughout your codebase. Additionally, you can use interfaces and type aliases to define the props and state of your components and to enforce type checking in your templates and controllers.</li>
</details>