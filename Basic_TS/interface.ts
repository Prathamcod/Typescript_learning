/* interface Users {
  name: string;
  age: number;
}
const userObj: User = {
  name: "pratham",
  age: 21,
};
console.log(userObj); */

//  Optional
/* interface ProductData {
  title: string;
  price?: number;
}
const prodObj: ProductData = {
  title: "React",
};
console.log(prodObj); */

// interface function
/* interface Add {
  (a: number, b: number): number;
}
const sum: Add = (a, b) => a + b;
console.log(sum(10, 20));
*/

// multiply number using the interface
/* interface Multiply {
  (a: number, b: number): number;
}
const multiply: Multiply = (a, b) => {
  return a * b;
};

console.log(multiply(10, 20)); */
//  Greeting function
/* 
interface greeting {
  (name: string): string;
}

const greet: greeting = (name) => {
  return `Hello , ${name}`;
};

console.log(greet("Pratham")); */

// Extending Interface in TypeScript
// What is Extending?

// Extending means:

// Create a new interface
// using properties of another interface

/* interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}
const dog: Dog = {
  name: "Tommy",
  breed: "labrador",
};
console.log(dog); */

//  Student Extend
/* interface Student {
  name: string;
  age: number;
}
interface course extends Student {
  course: string;
}
const students: course = {
  name: "pratham",
  age: 21,
  course: "Btech IT",
};
console.log(students) */

// Array Interface'

/* interface User12 {
  name: string;
}

const users: User12[] = [];

users.push({
  name: "Pratham",
});

users.push({
  name: "Aman",
});

console.log(users); */
/* 

interface People{
    name: string
    age:number
}
const people:People[]=[]

people.push({
    name:"Bhavik",
    age:21
})
people.push({
    name:"anand",
    age:22
})
console.log(people)
 */
// Read only
/* interface Laptop {
  readonly brand: string;
  price: number;
}

const laptop: Laptop = {
  brand: "Apple",
  price: 150000,
};

console.log(laptop.brand);
 */

//Nested Object
// Object inside another object

interface Address {
  city: string;
  state: string;
}

interface userData {
  name: string;
  address: Address;
}

const user_name: userData = {
  name: "Pratham",
  address: {
    city: "Ahmedabad",
    state: "Gujarat",
  },
};

console.log(user_name);
console.log(user_name.address.city);

type status = "success" | "error";
let apiStatus: status;
apiStatus = "success";
console.log(apiStatus);

interface ApiResponse {
  success: boolean;
  data: string[];
}
const response: ApiResponse = {
  success: true,
  data: ["HTML", "CSS", "TypeScipt"],
};

console.log(response);


// Todo 
/* interface Todo {
  title: string;
  completed: boolean;
}

const todo: Todo = {
  title: "Learn TypeScript",
  completed: false,
};

console.log(todo.title);
console.log(todo.completed); */

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const todos: Todo[] = [
  {
    id: 1,
    title: "Learn TS",
    completed: false,
  },
  {
    id: 2,
    title: "Build Project",
    completed: true,
  },
];

console.log(todos);