// Numeric Enums
/**
 * Create a defiend set of named integer values that can be used as a type
 */
var Day;
(function (Day) {
    Day[Day["Sunday"] = 0] = "Sunday";
    Day[Day["Monday"] = 1] = "Monday";
    Day[Day["Tuesday"] = 2] = "Tuesday";
    Day[Day["Wednesday"] = 3] = "Wednesday";
    Day[Day["Thursday"] = 4] = "Thursday";
    Day[Day["Friday"] = 5] = "Friday";
    Day[Day["Saturday"] = 6] = "Saturday"; // 6
})(Day || (Day = {}));
// It by default starts from the number 0 and increments by 1 for additional entry
var currentDay = Day.Monday;
if (currentDay === Day.Monday) {
    console.log("It is monday!");
}
else {
    console.log("It is not monday");
}
// changing the starting value
var Status;
(function (Status) {
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Completed"] = 2] = "Completed";
    Status[Status["Cancelled"] = 300] = "Cancelled";
})(Status || (Status = {}));
console.log(Status.Cancelled);
