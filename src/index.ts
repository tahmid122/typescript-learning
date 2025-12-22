const fruits: string[] = ["apple", "banana", "orange", "mango"];
let pushed = fruits.push("watermelon");
fruits.unshift("Guava");
let poped = fruits.pop();
let shifted = fruits.shift();
console.log(fruits);
console.log(pushed);
console.log(poped);
console.log(shifted);

for (let i = 0; i <= fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.forEach((curVal: string): void => console.log(curVal));
