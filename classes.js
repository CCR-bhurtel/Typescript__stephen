var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(color) {
        this.color = color;
        this.honk = function () {
            //accessed in the same class and child class
            console.log("beep");
        };
    }
    return Vehicle;
}());
// inheritance
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(color, name) {
        var _this = _super.call(this, color) || this;
        _this.color = color;
        _this.name = name;
        _this.drive = function () {
            //can only be accessed inside the class
            console.log(_this.name, "goes", "chuga chuga");
        };
        return _this;
    }
    Car.prototype.startDriving = function () {
        this.drive();
        this.honk();
    };
    return Car;
}(Vehicle));
var vehicle = new Vehicle("orange");
var labmo = new Car("blue", "labmo");
