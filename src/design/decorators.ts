function VehicleDecorator(constructor: Function) {
    constructor.prototype.date = new Date();
    constructor.prototype.giveMeDate = function () {
        return this.date;
    };
}

function OtherDecorator(name: string) {
    if (name === 'Shishir') {
        return function (constructor: Function) {
            constructor.prototype.other = 'Other value';
        };
    } else {
        return () => {};
    }
}

@OtherDecorator('Shishir')
@VehicleDecorator
class Vehicle {
    color: string;
    constructor(color: string) {
        this.color = color;
    }
}

const vehicle = new Vehicle('blue');
console.log((<any>vehicle).other);
