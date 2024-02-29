// Numeric Enums
/**
 * Create a defiend set of named integer values that can be used as a type
 */

enum Day {
    Sunday,     // 0
    Monday,     // 1
    Tuesday,    // 2
    Wednesday,  // 3
    Thursday,   // 4
    Friday,     // 5
    Saturday    // 6
}

// It by default starts from the number 0 and increments by 1 for additional entry

let currentDay: Day = Day.Monday;

if (currentDay === Day.Monday){
    console.log("It is monday!");
}else{
    console.log("It is not monday");
}


// changing the starting value

enum Status {
    InProgress = 1,
    Completed,
    Cancelled = 300
}

console.log(Status.Cancelled)

enum HTTPStatusCode {
    OK = 200,
    CREATED = 201
}

// console.log(HTTPStatusCode.CREATED)