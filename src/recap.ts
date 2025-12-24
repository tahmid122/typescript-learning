// //? Type Annotation

// let a: number = 5;
// let sentence: string = "Hello world";
// let isMarried: boolean = true;
// isMarried = false;
// let six: any = "Hello";
// six = 5;
// six = true;
// let seven: unknown;
// seven = 5;
// seven = "";

// // ? Function
// function add(num1: number, num2: number, str?: string): number {
//   return num1 + num2;
// }
// console.log(add(1, 2));

// const add2 = (n1: number, n2: number = 0): number => {
//   return n1 + n2;
// };
// console.log(add2(2));

// // ? Type Inference
// let infer = 5;

// // ? Array

// let fruits: string[] = ["mango", "banana"];
// fruits[2] = "hello";
// console.log(fruits[0]);
// console.log(fruits.length);
// console.log(fruits);

// // ? Array methods
// const friends: string[] = ["milon", "jakir", "fardin"];
// friends.push("tajim");
// friends.unshift("ashikur");
// console.log(friends);

// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }
// for (const name of friends) {
//   console.log(name);
// }

// const mapArr = friends.map((friend) => friend + " hi");
// console.log(mapArr);
// const filterArr = friends.filter((friend) => friend.startsWith("a"));
// console.log(filterArr);

// ? Objects

// const person: { name: string; age: number } = { name: "Tahmid", age: 21 };

// type Person = {
//   name: string;
//   age: number;
//   gender?: boolean;
//   greet: (value: string) => void;
// };
// const person1: Person = {
//   name: "medha",
//   age: 21,
//   greet: (value: string) => console.log(value),
// };
// console.log(person1);
// person1.greet("helo");

//? enum

// enum Roles {
//   user = "user",
//   admin = "admin",
// }
// console.log(Roles.admin);

// // ? Tuples

// const arr: [string, number] = ["", 1];

// // ? Union and Intersection
// let a: string | number = "";

// const generic = <T, U>(value: T, value2: U): T => {
//   console.log(typeof value);
//   return value;
// };
// console.log(generic<string, number>("1", 1));

// ? Inter face
interface Person {
  name: string;
  age: number;
}

let person1: Person = { name: "tahmid", age: 1 };

class Product {
  name: string;
  price: number;
  quantity: number;
  constructor(name: string, price: number, quantity: number) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  greet() {
    console.log(this.name);
  }
}
class Pro2 extends Product {
  description: string;
  constructor(
    name: string,
    price: number,
    quantity: number,
    description: string
  ) {
    super(name, price, quantity);
    this.description = description;
  }
}
const product1: Product = new Pro2("Iphone", 12000, 1, "hello");
console.log(product1);
product1.greet();
