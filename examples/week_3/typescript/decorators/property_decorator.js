var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function propertyDecorator(target, key) {
    console.log("Property decorator called for ".concat(key));
    console.log(target);
}
var MyPropertyDecoratedClass = /** @class */ (function () {
    function MyPropertyDecoratedClass() {
        this.message = "Hello there!";
    }
    __decorate([
        propertyDecorator
    ], MyPropertyDecoratedClass.prototype, "message", void 0);
    return MyPropertyDecoratedClass;
}());
var obj2 = new MyPropertyDecoratedClass();
console.log(obj2.message);
obj2.message = "New Property Value";
