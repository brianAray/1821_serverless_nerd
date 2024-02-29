// String enums
/**
 * Define a set of named string values that can be used as a type
 * 
 * Useful when you want to create a set of named constants with string values
 */

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

// defined a direction enum with four members each representing a string value

let currentDirection: Direction = Direction.Up;

if (currentDirection === Direction.Up){
    console.log("Moving Up");
}else if (currentDirection === Direction.Down){
    console.log("moving Down");
}else{
    console.log("Not moving up or down");
}

console.log(Direction.Up);


/**
 * Use Cases
 * 
 * Defining a set of string constants, such as error codes, status values, or API response types
 * 
 * Creating self-descriptive enums in your code
 * 
 * Ensuring consistency and readbility when working with predefined string set values
 */