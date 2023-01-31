@classDecorator
class Boat {
    @testDecorator
    color: string = 'blue';

    @testDecorator
    get formattedColor(): string {
        return this.color;
    }

    @logError('Oops the boat was sunk of the ocean') // using factories
    captain(@params speed: string): void {
        if (speed === 'fast') {
            console.log('swish');
        } else {
            throw new Error();
        }
    }
}

function classDecorator(constructor: typeof Boat) {}

function testDecorator(target: any, key: string) {
    console.log('Key:', key);
}
function logError(errorMessage: string): Function {
    return function (target: any, key: string, desc: PropertyDescriptor): void {
        const method = desc.value;
        desc.value = function () {
            try {
                method();
            } catch (err) {
                console.log(errorMessage);
            }
        };
    };
}

function params(target: any, key: string, index: number) {
    console.log(key, index);
}
