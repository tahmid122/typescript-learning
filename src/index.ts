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

// for (let i = 0; i <= fruits.length; i++) {
//   console.log(fruits[i]);
// }

// fruits.forEach((curVal: string): void => console.log(curVal));

// * Array map and filter
// const numbers: number[] = [1, 2, 3, 4, 5];
// const double: number[] = numbers.map((num: number): number => {
//   return num * 2;
// });
// console.log(double);

// const filteredEven: number[] = numbers.filter(
//   (number: number) => number % 20 === 0
// );
// console.log(filteredEven);

// //! Homework 1
// const names: string[] = ["tahmid", "medha"];
// const uppercase: string[] = names.map((name: string) => name.toUpperCase());
// console.log(uppercase);

// //! Homework 2
// const numbersArr: number[] = [1, 2, 3, 4, 5];
// const squares: number[] = numbersArr.map((num: number) => num ** 2);
// console.log(squares);

// // !Homework 3
// const namesFil: string[] = ["tahmid", "medha", "etul"];
// const filteredNames: string[] = namesFil.filter(
//   (name: string) => name.length > 4
// );
// console.log(filteredNames);

// //! Homework 4
// const filterNames: string[] = ["alice", "bob"];
// const filterNamesStartA: string[] = filterNames.filter((name: string) =>
//   name.startsWith("a")
// );
// console.log(filterNamesStartA);

//* Object

// const person: {
//   name: string;
//   age: number;
//   isStudent: boolean;
//   address: {
//     city: string;
//     country: string;
//   };
// } = {
//   name: "Tahmid",
//   age: 21,
//   isStudent: true,
//   address: {
//     city: "Jashore",
//     country: "Bangladesh",
//   },
// };
// console.log(person.name);

// //! Home work 1
// const product: { name: string; quantity: number; price: number } = {
//   name: "Iphone",
//   quantity: 1,
//   price: 111000,
// };

// * Type aliases
// type Person = {
//   name: string;
//   age: number;
//   isStudent: boolean;
//   address: {
//     city: string;
//     country: string;
//   };
// };

// const person: Person = {
//   name: "Tahmid",
//   age: 21,
//   isStudent: true,
//   address: {
//     city: "Jashore",
//     country: "BD",
//   },
// };

// type Product = {
//   name: string;
//   quantity: number;
//   price: number;
// };

// const product1: Product = {
//   name: "Infinix hot 11 play",
//   quantity: 10,
//   price: 12000,
// };

// const calculatePrice = (obj: Product): number => {
//   return obj.quantity * obj.price;
// };
// console.log(calculatePrice(product1));

//* Call signature

// type Student = {
//   name: string;
//   age: number;
//   gender?: string;
//   greet: (country: string) => string; //call signature
// };
// const student1: Student = {
//   name: "tahmid",
//   age: 21,
//   gender: "male",
//   greet: (country) =>
//     `my name is ${student1.name} and age is ${student1.age} and ${country}`,
// };

// const introduction = (student1: Student) => {
//   const { name, age } = student1;
//   return `Welcome my name is ${name} and I'am ${age} years old`;
// };
// console.log(introduction(student1));
// console.log(student1.greet("BD"));

//* Enums
// enum Roles {
//   user = "user",
//   admin = "admin",
// }
// type LoginDetails = {
//   name?: string;
//   email: string;
//   password: string;
//   role: Roles;
// };
// let person1: LoginDetails = {
//   email: "tahmid@gmail.com",
//   password: "1234",
//   role: Roles.admin,
// };
// console.log(person1);

// * Tuples
// type PersonInfo = readonly [string, number, boolean];

// let person1: PersonInfo = ["tahmid", 2, true];
// let person2: PersonInfo = ["", 1, false];

//* Unions and Intersection
// const inputVAlue = (
//   value: string | number | boolean
// ): string | number | boolean => {
//   return value;
// };
// inputVAlue(55);
// inputVAlue("Hello world");
// inputVAlue(true);

// //! Home work 1
// const checking = (
//   value: number | string | boolean
// ): number | string | boolean => {
//   if (typeof value === "number") {
//     return `$${value.toExponential(2)}`;
//   } else if (typeof value === "boolean") {
//     value ? "Yes" : "False";
//   } else if (typeof value === "string") {
//     return value[0]?.toUpperCase() + value.slice(1);
//   }
//   return 0;
// };
// console.log(checking(5));
// console.log(checking(true));
// console.log(checking("medha"));

// type Person = {
//   name: string;
//   age: number;
// };
// type Employee = {
//   id: number;
//   department: string;
// };
// type EmployeeDetails = Person & Employee;
// let person1: EmployeeDetails = {
//   name: "tahmid",
//   age: 21,
//   id: 1,
//   department: "",
// };

// type User = {
//   id: number;
//   name: string;
//   email: string;
// };
// type Account = {
//   accountId: number;
//   accountType: string;
//   balance: number;
// };
// type Combine = User & Account;
// const user1: User = {
//   id: 1,
//   name: "tahmid",
//   email: "mdtahmidalam122@gmail.com",
// };
// const account1: Account = {
//   accountId: 1111,
//   accountType: "savings",
//   balance: 23000,
// };

// const combineUserAndAccount = (user: User, account: Account): Combine => {
//   return { ...user, ...account };
// };
// const both: Combine = combineUserAndAccount(user1, account1);
// console.log(both);

//* Generics

function logAndReturn<T>(value: T): T {
  return value;
}

const numberResult = logAndReturn<number>(1);
const stringResult = logAndReturn<string>("hello");
console.log(numberResult);
console.log(stringResult);

// ! Homework 1

const add = <T>(value: T, value2: T): T => {
  return value;
};
console.log(add(1, 2));
console.log(add("tahmid ", "alam"));
