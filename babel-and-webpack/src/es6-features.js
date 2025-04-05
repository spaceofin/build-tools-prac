// let, const
let count = 0;
const greeting = "Hello, World";

// Arrow function
const square = (x) => x * x;

// Object Destructing
const user = { id: 1, name: "Alice", age: 25 };
const { name, age } = user;
// Template Literals
console.log(`name: ${name}, age: ${age}`);

// Spread/Rest Operator
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
const [a, b, ...restNumbers] = moreNumbers;
console.log(moreNumbers);
console.log(restNumbers);

// for...of loop
for (const fruit of ["apple", "banana", "orange"]) {
  console.log(fruit);
}

// Map, Set
const myMap = new Map();
myMap.set("a", 1);
myMap.set("b", 2);
for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}
const mySet = new Set([1, 2, 2, 3]);
console.log([...mySet]);
