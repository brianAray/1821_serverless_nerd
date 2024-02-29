/**
 * In TS, type aliases and interfaces are used to define custom data types
 */

// Type Alias
/**
 * Lets you create custom names for complex types, making code more readable and maintainable
 */

// type User = {
//     id: number;
//     email: string;
// }

// Interfaces
/**
 * Interfaces define a contract that classes or objects must adhere to
 * They are used to enforce a specific structure on objects and classes
 */

interface User {
    id: number;
    email: string;
}

function getUserInfo(user: User): string{
    return `ID: ${user.id}, Email: ${user.email}`;
}

// Differences
/**
 * Extending / Implementing
 * 
 * Interfaces support extending and implementing other interfaces, allowing you to create complex type hierarchies
 */

interface PersonInterface {
    name: string;
}

interface AddressInterface{
    street: string;
}

interface Contact extends PersonInterface, AddressInterface {
    email: string;
}

// Type aliases do not explicitly have this feature, instead you must use unions or & to do something similar

/**
 * Compatibilty
 * 
 * Interafaces are open ended by default, meaning you can add properties to an interface even after it is defined
 * 
 * Type aliases are not, and cannot be extended after they are defined
 */

/**
 * Intersection
 * 
 * Type aliases can represent intersection types using the & operator
 * 
 * Interfaces do not support this
 */

type A = {x: number};
type B = {y: string};
type C = A & B; // intersection of types A and B

const double: C = {x: 1, y: "hello"};


/**
 * Preferences
 * 
 * Use interfaces when defining the shape of objects or when creating contracts for classes to adhere to
 * 
 * Use type aliases for creating complex, reusable types that may not necessarily represent objects or classes
 */

