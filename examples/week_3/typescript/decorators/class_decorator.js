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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function classDecorator(constructor) {
    console.log("Class Decorator Called");
    console.log(constructor());
}
var MyDecoratedClass = /** @class */ (function () {
    function MyDecoratedClass() {
        console.log("Class Instance Created!");
    }
    MyDecoratedClass = __decorate([
        classDecorator
    ], MyDecoratedClass);
    return MyDecoratedClass;
}());
