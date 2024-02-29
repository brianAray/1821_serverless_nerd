var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function methodDecorator(target, key, descriptor) {
    console.log("Method decorator called for ".concat(key));
    console.log(target);
    console.log(descriptor);
    target.greet();
}
var MyMethodDecoratedClass = /** @class */ (function () {
    function MyMethodDecoratedClass() {
    }
    MyMethodDecoratedClass.prototype.greet = function () {
        console.log("Hello from typescript!");
    };
    __decorate([
        methodDecorator
    ], MyMethodDecoratedClass.prototype, "greet", null);
    return MyMethodDecoratedClass;
}());
var obj = new MyMethodDecoratedClass();
// obj.greet();
