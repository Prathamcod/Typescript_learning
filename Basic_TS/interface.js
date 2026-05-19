"use strict";
/* interface Users {
  name: string;
  age: number;
}
const userObj: User = {
  name: "pratham",
  age: 21,
};
console.log(userObj); */
const user_name = {
    name: "Pratham",
    address: {
        city: "Ahmedabad",
        state: "Gujarat",
    },
};
console.log(user_name);
console.log(user_name.address.city);
let apiStatus;
apiStatus = "success";
console.log(apiStatus);
const response = {
    success: true,
    data: ["HTML", "CSS", "TypeScipt"],
};
console.log(response);
const todos = [
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
