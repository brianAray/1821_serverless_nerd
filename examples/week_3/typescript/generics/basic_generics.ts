// Generic Interface

interface Box<T> {
    value: T;
}

// usage
const numberBox: Box<number> = {value: 42};
const stringBox: Box<string> = {value: "hello"};


// generic class
class Pair<T, U>{
    constructor(public first: T, public second: U){}
}

// usage
const numberAndString = new Pair<number, string>(42, "Hello");
const booleanAndDate = new Pair<boolean, Date>(true, new Date());

console.log(numberAndString.first);
console.log(booleanAndDate.second);