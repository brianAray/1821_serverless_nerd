/**
 * Decorators are a powerful feature of TS
 * IT allows you to add metadata and behavior to classes, methods, properties, and parameters
 *
 * You will have to use this command:
 *
 * tsc --experimentalDecorators
 *
 * It will show errors, ignore this
 */

function classDecorator(constructor: Function) {
  console.log("Class Decorator Called");
  console.log(constructor());
}

@classDecorator
class MyDecoratedClass {
  constructor() {
    console.log("Class Instance Created!");
  }
}
