// Generic Interface
// usage
var numberBox = { value: 42 };
var stringBox = { value: "hello" };
// generic class
var Pair = /** @class */ (function () {
    function Pair(first, second) {
        this.first = first;
        this.second = second;
    }
    return Pair;
}());
// usage
var numberAndString = new Pair(42, "Hello");
var booleanAndDate = new Pair(true, new Date());
console.log(numberAndString.first);
console.log(booleanAndDate.second);
