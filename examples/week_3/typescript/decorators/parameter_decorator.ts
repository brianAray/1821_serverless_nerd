function parameterDecorator(target: any, key: string, index: number){
    console.log(`Parameter decorator called for parameter ${index} of ${key}`);
}

class MyParameterDecoratedClass{
    greet(@parameterDecorator name: string, @parameterDecorator age: number){
        console.log(`Hello ${name}, you are this old: ${age}`);
    }
}


const obj3 = new MyParameterDecoratedClass();
obj3.greet("Jim", 55);