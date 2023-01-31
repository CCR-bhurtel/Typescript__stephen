"use strict";
class ArrayOfNumbers {
    constructor(collection) {
        this.collection = collection;
    }
    get(index) {
        return this.collection[index];
    }
}
class ArrayofStrings {
    constructor(collection) {
        this.collection = collection;
    }
    get(index) {
        return this.collection[index];
    }
}
// use T as convention for type in genrics
class ArrayOfSomething {
    constructor(collection) {
        this.collection = collection;
    }
    get(index) {
        return this.collection[index];
    }
}
//  type inference comes into play if we donot pass anything as generic
// Generics with functions
function printStrings(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function printNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function printAnything(arr) {
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
function printHousesOrCars(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}
printHousesOrCars([new CarNew(), new House()]);
