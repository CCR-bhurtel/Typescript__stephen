import 'reflect-metadata';

@printMetadata
class Plane {
    color: string = 'white';

    @markFunction('234sd234FFFFXXXX233')
    fly(): void {
        console.log('vrrrrrrrrrrrrrrrrrrrrrroooooooooooommmmmmmmm');
    }
}

function markFunction(secretInfo: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
        Reflect.defineMetadata('secret', secretInfo, target, key);
    };
}

function printMetadata(target: typeof Plane) {
    console.log(Object.keys(target.prototype));
    for (let key in Object.keys(target)) {
        console.log(key);
    }
}

// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
