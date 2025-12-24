// //? Type Annotation
let person1 = { name: "tahmid", age: 1 };
class Product {
    name;
    price;
    quantity;
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    greet() {
        console.log(this.name);
    }
}
class Pro2 extends Product {
    description;
    constructor(name, price, quantity, description) {
        super(name, price, quantity);
        this.description = description;
    }
}
const product1 = new Pro2("Iphone", 12000, 1, "hello");
console.log(product1);
product1.greet();
export {};
