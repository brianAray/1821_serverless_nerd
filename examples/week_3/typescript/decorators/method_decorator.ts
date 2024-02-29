function methodDecorator(target: any, key: string, descriptor: PropertyDescriptor){
    console.log(`Method decorator called for ${key}`);
    console.log(target);
    console.log(descriptor);
    target.greet();
}

class MyMethodDecoratedClass{

    @methodDecorator
    greet(){
        console.log("Hello from typescript!")
    }
}

const obj = new MyMethodDecoratedClass();
// obj.greet();