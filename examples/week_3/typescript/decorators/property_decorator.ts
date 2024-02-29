function propertyDecorator(target: any, key: string) {
  console.log(`Property decorator called for ${key}`);
  console.log(target);
}

class MyPropertyDecoratedClass {
  @propertyDecorator
  message: string = "Hello there!";
}

const obj2 = new MyPropertyDecoratedClass();
console.log(obj2.message);

// obj2.message = "New Property Value";
