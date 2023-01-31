"use strict";
const carMakers = ["ford", "tata", "toyota"];
const dates = [new Date(), new Date()];
const carsByMake = [["f130"], ["neu"], ["camaro"]];
// Helo with inference whtn extracting values
const myCar = carMakers.pop();
//Prevent incompatible values
// carMakers.push(134); //will show error
// Help with iterators
carMakers.map((car) => {
    return `my car - ${car}`;
});
// Flexible types in arrays
const importantDates = [
    new Date(),
    Date.now(),
    "2030-10-10",
];
importantDates.push("2034-12-24");
