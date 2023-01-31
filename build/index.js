"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1.default.get(url).then((response) => {
    const data = response.data;
    // logTodo(data.id, data.title);
});
const logTodo = (id, title) => {
    console.log(`
    the id is ${id} \n the title is ${title}`);
};
// Function
function logNumber() {
    console.log("Hello world");
}
// When to us annotations
// 1> Function that returns the 'any' type
const json = `{
  "x":10, "y":20,  "bool":false
}`;
const coordinates = JSON.parse(json);
// console.log(coordinates)
// 2> Declare a variable in one line and initialize it later
let words = ["red", "green", "blue"];
let foundWord;
for (let i = 0; i < words.length; i++) {
    if (words[i] == "green")
        foundWord = true;
}
// console.log(foundWord)
// 3> Variable whose type cannot be inferred correctly
let numbers = [-10, -3, 12];
let numberAboveZero = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0)
        numberAboveZero = numbers[i];
}
