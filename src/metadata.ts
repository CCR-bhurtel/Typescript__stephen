import 'reflect-metadata';

export const plane = {
    color: 'white',
};

Reflect.defineMetadata('note', 'not being racist tho', plane, 'color');

const colorNote = Reflect.getMetadata('note', plane, 'color');

console.log(colorNote);
