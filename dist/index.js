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
// for (let i = 0; i <= fruits.length; i++) {
//   console.log(fruits[i]);
// }
// fruits.forEach((curVal: string): void => console.log(curVal));
// * Array map and filter
const numbers = [1, 2, 3, 4, 5];
const double = numbers.map((num) => {
    return num * 2;
});
console.log(double);
const filteredEven = numbers.filter((number) => number % 20 === 0);
console.log(filteredEven);
//! Homework 1
const names = ["tahmid", "medha"];
const uppercase = names.map((name) => name.toUpperCase());
console.log(uppercase);
//! Homework 2
const numbersArr = [1, 2, 3, 4, 5];
const squares = numbersArr.map((num) => Math.pow(num, 2));
console.log(squares);
// !Homework 3
const namesFil = ["tahmid", "medha", "etul"];
const filteredNames = namesFil.filter((name) => name.length > 4);
console.log(filteredNames);
//! Homework 4
const filterNames = ["alice", "bob"];
const filterNamesStartA = filterNames.filter((name) => name.startsWith("a"));
console.log(filterNamesStartA);
