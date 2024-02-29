// OOP
/**
 * OOP is supported in JavaScript
 *
 * Some of the features of OOP in JavaScript are:
 *
 */

// objects

// classes
// in ES6, there is the class syntax which allows you to create classes as blueprints for objects


class Person {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person("John", 30);
person1.greet();

// Constructor
// The constructor method is used to initialize the object properties when an object is created from a class

// Methods
// Functions defined within a class that can be called on objects created from that class

// properties
// variables defined within a class that represents the characteristics or attributes of the objects from that class

// inheritance
// JS supports inheritance through the use of classes and the extend keyword

class Student extends Person{
    constructor(name, age, studentId){
        super(name, age); // call the parent constructor
        this.studentId = studentId;
    }

    study(){
        console.log(`${this.name} is studying!`);
    }
}

const student = new Student("Alice", 26, "23523");
student.greet();
student.study();


// Encapusulation is not straightforward due to the lack of access modifiers in JS
// You can still use closures to simulate it

// Polymorphism
// JS supports it through method overriding, a subclass can provide its implementation of a method with the same name as the parent

// Abstraction
// In JS, this is supported through the use of classes and objects to model real world entities

// Static Methods and properties

class MathUtils{
    static add(x, y){
        return x + y;
    }
}

const result = MathUtils.add(5, 3); // access the static method directly on the class