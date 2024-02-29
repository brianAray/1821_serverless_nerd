// Timing Events
/**
 * These allow you to execute code in a specific time or interval
 * useful for scheduling tasks
 */

setTimeout(() => {
    console.log("Runs afte 2 seconds")
}, 2000);


// Set Interval
// Used to repeatedly execute a function at a specified interval until it is cleared with clearInterval()

const intervalId = setInterval(() => {
    console.log("runs every second");
}, 1000);

// to stop the interval after a certain period
setTimeout(() => {
    clearInterval(intervalId)
}, 5000); // stops after 5 seconds