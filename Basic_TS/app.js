"use strict";
// var username: string = "Pratham";
const s1 = {
    name: "Pratham",
    age: 21,
    stream: "IT",
    course: "BTech",
};
const s2 = {
    name: "Bhavik",
    age: 20,
    stream: "IT",
    course: "BTech",
};
console.log(s1);
console.log(s2);
const emp = {
    name: "Pratham",
    // salary: 21212
};
console.log(emp);
const car = {
    brand: "AUDI",
};
console.log(car);
car.brand = "BMW";
console.log(car);
const arr = [1, 2, 3, 4];
console.log(arr);
const StringArr = ["apple", "banana"];
console.log(StringArr);
const product = {
    name: "Hp Victus",
    price: 150000,
    details: {
        company_name: "Hp",
    },
};
console.log(product);
let userId = 101;
console.log(userId);
let user = {
    name: "Pratham",
    age: 21,
};
console.log(user);
user = null;
console.log(user);
let move;
move = "Left ";
move = "right";
// move = "reverse"
console.log(move);
// Union Type with Array
// let data : (string | number)[];
let data = ["Pratham", 21, "Aman", 40];
console.log(data);
let person;
person = {
    name: "pratham",
    age: 21,
};
// person = {
//   name: "Dr. Admin",
//   role: "Teacher",
// };
console.log(person);
if ("age" in person) {
    console.log(person.age);
}
// any means:
// Disable TypeScript checking
let value;
value = 10;
value = [];
value = {};
value = true;
value = "Hello";
console.log(value);
const username = [
    {
        name: "A",
    },
    {
        name: "B",
    },
];
console.log(username);
const obj = {
    name: "Pratham",
    salary: 50000,
};
console.log(obj);
