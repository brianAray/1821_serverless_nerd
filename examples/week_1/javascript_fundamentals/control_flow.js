// Control Flow
// Most of the control flow statements from Java are in JS as well

// If Else

const age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}else{
    console.log("You are not yet an adult")
}

// else ifs
const temperature = 25;

if (temperature < 0) {
  console.log("It's freezing!");
} else if (temperature >= 0 && temperature < 20) {
  console.log("It's cold.");
} else {
  console.log("It's warm.");
}

// Ternary Operators
// ? : providing a concise way to write conditional statements

const age2 = 10;
const message = age2 >= 18 ? "You are an adult." : "You are not yet an adult.";
console.log(message);


// Switch Statements
// Useful for when you need to compare a single value to multiple possible values

const day = "Wednesday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Wednesday":
    console.log("It's the middle of the week.");
    break;
  case "Friday":
    console.log("It's the end of the week.");
    break;
  default:
    console.log("It's not a significant day.");
}


// For, while, do-while loops

// for loops
// initialization, condition, iteration

for(let i = 0; i < 5; i++){
    console.log(i)
}

// while loop
// will repeat a loop for as long as a condition evaluates to true
// while (condition){ .. code to be executed}

// do while loop
// do while loops will always do the code once, even if the condition is false, unlike a while loop


// loop control statements
// break and continue
// break terminates the loop prematurely and is usually based on a some condition
// continue will skip the rest of the current iteration and continue with the next one

for(let i = 0; i < 5; i++){
    if (i == 2){
        continue;
    }
    console.log(i);
}