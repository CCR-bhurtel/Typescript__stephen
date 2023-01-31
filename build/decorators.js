"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function VehicleDecorator(constructor) {
    constructor.prototype.date = new Date();
    constructor.prototype.giveMeDate = function () {
        return this.date;
    };
}
function OtherDecorator(name) {
    if (name === 'Shishir') {
        return function (constructor) {
            constructor.prototype.other = 'Other value';
        };
    }
    else {
        return () => { };
    }
}
let Vehicle = class Vehicle {
    constructor(color) {
        this.color = color;
    }
};
Vehicle = __decorate([
    OtherDecorator('Shishir'),
    VehicleDecorator,
    __metadata("design:paramtypes", [String])
], Vehicle);
const vehicle = new Vehicle('blue');
console.log(vehicle.other);
