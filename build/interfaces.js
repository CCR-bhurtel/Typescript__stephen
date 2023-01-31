"use strict";
const oldCivic = {
    name: 'civic',
    year: new Date(1997),
    parts: ['cars', 'doors'],
    broken: false,
    summary() {
        return `Name:${this.name}`;
    },
};
const drink = {
    name: 'coca cola',
    color: 'brown',
    carbonated: true,
    sugar: 50,
    summary() {
        return `${this.name} has ${this.sugar} grams of sugar`;
    },
};
const printSummary = (item) => {
    console.log(item.summary());
};
printSummary(oldCivic);
printSummary(drink);
