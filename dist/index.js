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
const person = {
    name: "tahmid",
    age: 21,
    greet: (country) => 1,
};
const product1 = { name: "1", price: 12000, quantity: 10 };
const calculateTotalPrice = (product) => {
    return product.price * product.quantity;
};
console.log(calculateTotalPrice(product1));
