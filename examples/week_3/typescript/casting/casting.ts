// Casting
/**
 * You can override what the compoiler thinks a data type is if you know better

 */

// Old way
// <> angle bracket

let value : any = "Hello there";
let lengths: number = (<string>value).length;

// as-syntax (new way)
let value2 : any = "Hello Again";
let length2: number = (value2 as string).length;


/**
 * Be careful when you are casting with custom data types
 * This may not always be safe and could lead to runtime errors if the types are incompatible
 * 
 * Type casting should be used sparingly and with caution, as it bypasses TSs type checking
 * 
 * Only type cast when you are certain about the type and have no alternative way to achieve your goal
 */

