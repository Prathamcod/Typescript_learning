// var username: string = "Pratham";

// console.log(username);

// let age: number = 21;
// console.log(age)

/* type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "prathamn",
  age: 21,
};

console.log(user)

 */

type student = {
  name: string;
  age: number;
  stream: string;
  course: string;
};

const s1: student = {
  name: "Pratham",
  age: 21,
  stream: "IT",
  course: "BTech",
};
const s2: student = {
  name: "Bhavik",
  age: 20,
  stream: "IT",
  course: "BTech",
};

console.log(s1);
console.log(s2);

// Optoinal Property

type Employee = {
  name: string;
  salary?: number;
};
const emp: Employee = {
  name: "Pratham",
  // salary: 21212
};
console.log(emp);

// ReadOnly \

/* type Car = {
  readonly brand: string;
};
const car: Car = {
  brand: "AUDI",
};
console.log(car);
car.brand = "BMW"; // Error: Cannot assign to 'brand' because it is a read-only property.

 */
// without readonly property
type Car = {
  brand: string;
};
const car: Car = {
  brand: "AUDI",
};
console.log(car);

car.brand = "BMW";
console.log(car);
// it able to change the value of the brand using bot notation

// Array Type
type Numbers = number[];
const arr: Numbers = [1, 2, 3, 4];
console.log(arr);

type Strings = string[];
const StringArr: Strings = ["apple", "banana"];
console.log(StringArr);

//  Nested Object
type Product = {
  name: string;
  price: number;
  details: {
    company_name: string;
  };
};

const product: Product = {
  name: "Hp Victus",
  price: 150000,
  details: {
    company_name: "Hp",
  },
};

console.log(product);

// Union Type
type Id = string | number;
let userId: Id = 101;
console.log(userId);
// let userId: Id = "A101B"
// console.log(userId)
// console.log(userId.length)

// function printId(id: string | number) {
//   if (typeof id === "string") {
//     console.log(id.length);
//   } else {
//     console.log(id);
//   }
// }
// printId("A101")
// printId(101)

// type result = string | boolean;
// const resultStd: result = "failed";
// console.log(resultStd);

// let value: boolean | string | number;

// value = true;
// console.log(value);

// value = "Pratham";
// console.log(value);

// value = 100;
// console.log(value);

/* type User = {
  name: string;
  age: number;
} | null;
let user: User = {
  name: "Pratham",
  age: 21,
};

console.log(user);
user = null;
console.log(user); */

//  Literal Union Types
type direction = "Left " | "right" | "up" | "down";

let move: direction;
move = "Left ";
move = "right";
// move = "reverse"
console.log(move);

// Union Type with Array

// let data : (string | number)[];

let data: (string | number)[] = ["Pratham", 21, "Aman", 40];

console.log(data);

// Union Type with Object

type username = {
  name: string;
  age: number;
};

type Admin = {
  name: string;
  role: string;
};

// Union Type with Object full example

type Person = username | Admin;

let person: Person;

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

let value: any;

value = 10;
value = [];
value = {};
value = true;
value = "Hello";
console.log(value);

// Function Inside Type

// type MathOperation = {
//   add: (a: number, b: number) => number;
// };

// function createMathOperation(): MathOperation {
//   return {
//     add: (a: number, b: number) => a + b,
//   };
// }

// const math = createMathOperation();

// console.log(math.add(10, 20));

// type MathOperation = {
//   result: number;
// };

// function createMathOperation(a: number, b: number): MathOperation {
//   return {
//     result: a + b,
//   };
// }

// const math = createMathOperation(10, 20);

// console.log(math.result);

// Object Array

type User1 = {
  name: string;
};
const username: User1[] = [
  {
    name: "A",
  },
  {
    name: "B",
  },
];
console.log(username);

//  Combining Types

type Person1 = {
  name: string;
};

type Worker2 = {
  salary: number;
};

type Staff = Person1 & Worker2;

const obj: Staff = {
  name: "Pratham",
  salary: 50000,
};

console.log(obj);