class ArrayOfNumbers {
    constructor(public collection: number[]) {}

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayofStrings {
    constructor(public collection: string[]) {}
    get(index: number): string {
        return this.collection[index];
    }
}

// use T as convention for type in genrics

class ArrayOfSomething<T> {
    constructor(public collection: T[]) {}
    get(index: number): T {
        return this.collection[index];
    }
}

//  type inference comes into play if we donot pass anything as generic

// Generics with functions

function printStrings(arr: string[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printNumbers(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printAnything<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// printAnything<string>(["shishir", "name"]);

// Generic Constraints

class CarNew {
    print() {
        console.log('I am a car');
    }
}

class House {
    print() {
        console.log('I am a house');
    }
}

interface Printable {
    print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}

printHousesOrCars([new CarNew(), new House()]);
