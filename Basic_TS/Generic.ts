// function Generic<T>(value:T):T{
//     return value
// }
/* function identity<T>(value: T): T {
  return value;
}
console.log(identity<string>("Hello")); */

/* function generic<T>(value:T):T{
    return value;
}
console.log(
    identity<number>(19)
) */

/* function generic<T>(value: T): T {
  return value;
}
console.log(generic<boolean>(true)); */

/* function generic<T>(value: T): T {
  return value;
}
console.log(generic(true));
 */

//  Array  function
/* 
function getArray<T>(items: T[]): T[] {
  return items;
}
console.log(getArray([1, 2, 3, 4, 5]));

const nums = getArray<number>([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(nums);

const names = getArray<string>(["A", "B", "C", "D"]);
console.log(names);

 Multiple Generic

function pair<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

const result = pair<string, number>("Age", 21);
 */
// console.log(result);

//  Api Style Generic

/* interface user_name {
  name: string;
  age: number;
}

interface Api<T> {
  data: T;
  success: boolean;
}

type User21 = user_name;

const resp: Api<User21> = {
  data: {
    name: "Pratham",
    age: 21,
  },
  success: true,
};

console.log(resp);

interface ProductInfo {
  title: string;
  price: number;
}

const productApi: Api<ProductInfo> = {
  data: {
    title: "laptop",
    price: 500000,
  },
  success: true,
};
console.log(productApi);

 */

//Practice
/* 
function generic<T>(value: T): T {
  return value;
}
console.log(generic<string>("Hello"));

function arrFunc<T>(items: T[]): T[] {
  return items;
}

console.log(arrFunc<number>([1, 2, 3, 4]));
 */
// Object
/* interface Box<T> {
  value: T;
}

const numberBox: Box<number> = {
  value: 100,
};
console.log(numberBox);

const stringBox: Box<string> = {
  value: "Hello from string Box",
};
console.log(stringBox); */

// Pair Function
/* 
function pair<T, U>(first: T, second: U) {
  return {
    first,
    second,
  };
}
const result = pair<string, number>("Age", 21);
console.log(result);

const Info = pair<boolean, string>(true, "Success");

console.log(Info); */

interface ApiResponseData<T> {
  dataInfo: T;
  success: boolean;
}
interface user_main {
  name: string;
  age: number;
}

const respo: ApiResponseData<user_main> = {
  dataInfo: {
    name: "Pratham",
    age: 21,
  },
  success: true,
};

console.log(respo);

