interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(1997),
    parts: ['cars', 'doors'],
    broken: false,
    summary(): string {
        return `Name:${this.name}`;
    },
};

const drink = {
    name: 'coca cola',
    color: 'brown',
    carbonated: true,
    sugar: 50,
    summary(): string {
        return `${this.name} has ${this.sugar} grams of sugar`;
    },
};

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
