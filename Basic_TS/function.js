"use strict";
function add(a, b) {
    return a + b;
}
add(10, 20);
function message() {
    console.log("Hello void ");
}
message();
//Arrow Function
//syntax
// const functionName = {
//   params:type
// }:returnType => {
// }
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(10, 20));
// Optional parameter
/* function greet(name: string, age: number) {
  return `name : ${name} , age : ${age}`;
}
console.log(greet("pratham", 21)); */
/* function Employee(name: string, salary?: number): string {
  console.log(typeof salary)
  return `${name} and salary : ${salary}`;
}
console.log(Employee("Pratham",20000));
 */
// Default parameter
function hello(name = "Guest") {
    console.log(name);
}
hello();
hello("Pratham");
// Object parameter
function userInfo(user) {
    console.log(user.name);
    console.log(user.age);
}
userInfo({
    name: "Pratham",
    age: 21,
});
//Array parameter
function total(nums) {
    return nums.reduce((a, b) => a + b, 0);
}
console.log(total([1, 2, 3, 4]));
// Function Type variable
let sum;
sum = (a, b) => {
    return a + b;
};
console.log(sum(5, 5));
//callback
function process(callback) {
    console.log("Processing");
    callback();
}
process(() => {
    console.log("Callback executed");
});
// DOM EVENT FUNCTION
let button = document.createElement("button");
button.classList.add("btn");
button.innerHTML = "Click me";
document.body.appendChild(button);
button.addEventListener("click", () => {
    console.log("Clicked");
});
function test(a, b) {
    return String(a) + String(b);
}
test;
