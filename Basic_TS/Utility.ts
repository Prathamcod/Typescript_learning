 /* interface User {
  name: string;
  age: number;
}
const user_TYPE: Partial<User> = {
  name: "Pratham",
};
console.log(user_TYPE);
 */

// interface User {
//   name?: string;
//   age?: number;
// }
// const ya: Required<User> = {
//   name: "Pratham",
//   age: 21,
// };
// console.log(ya);

// interface U {
//   name: string;
//   age: number;
//   email: string;
// }

// type uname = Pick<User, "name">;
// const unameValue: uname = {
//   name: "Pratham",
// };
// console.log(unameValue);

/* const users: Record<string, string> = {
  name: "Pratham",
  city: "Ahmedabad",
};
console.log(users);

type Status = "success" | "error" | "loading";

type result = Exclude<Status, "loading">; */


type ProductData = {
  title: string;
  price: number;
  stock: number;
};

type ProductWithoutStock =
  Omit<ProductData, "stock">;

  