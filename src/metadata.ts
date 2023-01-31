import 'reflect-metadata';

export const plane = {
    color: 'white',
};

Reflect.defineMetadata('note', 'helloworld', plane);
Reflect.defineMetadata('width', 100, plane);

const note = Reflect.getMetadata('note', plane);
const width = Reflect.getMetadata('width', plane);
