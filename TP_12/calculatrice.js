import { argv } from "node:process";

const operation = argv[2];
const numbers = argv.slice(3).map(Number);

console.log({
  operation,
  numbers,
});

let result;

switch (operation) {
  case "add":
    result = numbers.reduce((acc, num) => acc + num, 0);
    break;
  case "substract":
    const first = numbers[0];
    const rest = numbers.slice(1);
    result = rest.reduce((acc, num) => acc - num, first);
    break;
  case "multiply":
    result = numbers.reduce((acc, num) => acc * num, 1);
    break;
}

console.log("Result", result);
