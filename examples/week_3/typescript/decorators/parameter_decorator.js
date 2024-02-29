var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function parameterDecorator(target, key, index) {
    console.log("Parameter decorator called for parameter ".concat(index, " of ").concat(key));
}
var MyParameterDecoratedClass = /** @class */ (function () {
    function MyParameterDecoratedClass() {
    }
    MyParameterDecoratedClass.prototype.greet = function (name, age) {
        console.log("Hello ".concat(name, ", you are this old: ").concat(age));
    };
    __decorate([
        __param(0, parameterDecorator),
        __param(1, parameterDecorator)
    ], MyParameterDecoratedClass.prototype, "greet", null);
    return MyParameterDecoratedClass;
}());
var obj3 = new MyParameterDecoratedClass();
obj3.greet("Jim", 55);
