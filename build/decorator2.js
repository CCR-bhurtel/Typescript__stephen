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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
class Boat {
    constructor() {
        this.color = 'blue';
    }
    get formattedColor() {
        return this.color;
    }
    captain(speed) {
        if (speed === 'fast') {
            console.log('swish');
        }
        else {
            throw new Error();
        }
    }
}
__decorate([
    testDecorator,
    __metadata("design:type", String)
], Boat.prototype, "color", void 0);
__decorate([
    testDecorator,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Boat.prototype, "formattedColor", null);
__decorate([
    logError('Oops the boat was sunk of the ocean') // using factories
    ,
    __param(0, params),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Boat.prototype, "captain", null);
function testDecorator(target, key) {
    console.log('Key:', key);
}
function logError(errorMessage) {
    return function (target, key, desc) {
        const method = desc.value;
        desc.value = function () {
            try {
                method();
            }
            catch (err) {
                console.log(errorMessage);
            }
        };
    };
}
function params(target, key, index) {
    console.log(key, index);
}
