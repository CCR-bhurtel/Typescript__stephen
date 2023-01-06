import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
}
axios.get(url).then((response) => {
  const data: Todo = response.data;
  // logTodo(data.id, data.title);
});

const logTodo: (id: number, title: string) => void = (id, title) => {
  console.log(`
    the id is ${id} \n the title is ${title}`);
};

// Function

function logNumber(): void {
  console.log("Hello world");
}

// When to us annotations
// 1> Function that returns the 'any' type
const json = `{
  "x":10, "y":20,  "bool":false
}`;

const coordinates: { x: number; y: number; bool: boolean } = JSON.parse(json);
// console.log(coordinates)
// 2> Declare a variable in one line and initialize it later
let words = ["red", "green", "blue"];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] == "green") foundWord = true;
}

// console.log(foundWord)

// 3> Variable whose type cannot be inferred correctly
let numbers = [-10, -3, 12];

let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) numberAboveZero = numbers[i];
}
