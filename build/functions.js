"use strict";
const add = (a, b) => {
    //We donot get inference in arguments/params
    return a + b; //We can get type inference here but we don't use it
};
// Must use annotation for return value too
const subtract = (a, b) => {
    a - b;
};
function divide(a, b) {
    return a / b;
}
const multiply = function (a, b = 3) {
    return a * b;
};
const logger = (message) => {
    console.log(message);
};
const throwError = (message) => {
    throw new Error(message);
};
// Destructuring with annotations
const forecast = {
    date: new Date(),
    weather: "sunny",
};
// const todaysForecast: { date: Date; weather: string } = { ...forecast };
const logWeather = ({ date, weather, }) => {
    console.log(date);
    console.log(weather);
};
logWeather(forecast);
