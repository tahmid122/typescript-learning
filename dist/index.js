"use strict";
// * Array and its methods and iterations
// const fruits: string[] = ["apple", "banana", "orange", "mango"];
// let pushed = fruits.push("watermelon");
// fruits.unshift("Guava");
// let poped = fruits.pop();
// let shifted = fruits.shift();
// console.log(fruits);
// console.log(pushed);
// console.log(poped);
// console.log(shifted);
Object.defineProperty(exports, "__esModule", { value: true });
const student1 = {
    name: "tahmid",
    age: 21,
    gender: "male",
    greet: (country) => `my name is ${student1.name} and age is ${student1.age} and ${country}`,
};
const introduction = (student1) => {
    const { name, age } = student1;
    return `Welcome my name is ${name} and I'am ${age} years old`;
};
console.log(introduction(student1));
console.log(student1.greet("BD"));
