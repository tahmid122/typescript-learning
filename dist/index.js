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
    name: "Tahmid",
    age: 21,
    isStudent: true,
    address: {
        city: "Jashore",
        country: "BD",
    },
};
const product1 = {
    name: "Infinix hot 11 play",
    quantity: 10,
    price: 12000,
};
const calculatePrice = (obj) => {
    return obj.quantity * obj.price;
};
console.log(calculatePrice(product1));
