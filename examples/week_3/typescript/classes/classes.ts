// Classes
// They have the basic functionality from JS
// There is inheritance, constructors, properties, and methods
// In addition there are some features from TS

class PersonClass {

    // properties
    fullName: string;
    age: number;

    constructor(fullName: string, age: number){
        this.fullName = fullName;
        this.age = age;
    }

    // method
    sayHello(){
        console.log(`Hello, my name is ${this.fullName}`);
    }
}


const bob: PersonClass = new PersonClass("Bob", 35);


// We have Access Modifiers
class MyClass {
    publicField: string;
    private privateField: string;
    protected protectedField: string;

    constructor(publicField: string, privateField: string, protectedField: string){
        this.publicField = publicField;
        this.privateField = privateField;
        this.protectedField = protectedField;
    }
}

let accessModObj: MyClass = new MyClass("public", "private", "protected");

console.log(accessModObj.publicField);
// console.log(accessModObj.privateField); // error, private field


// static
class MathUtils {
    static PI: number = 3.14;

    static calculateCircleArea(radius: number): number {
        return this.PI * radius * radius;
    }
}

console.log(MathUtils.calculateCircleArea(2));