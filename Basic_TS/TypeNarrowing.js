"use strict";
/* function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}

print("Hello")

 */
function printUser(user) {
    if (user) {
        console.log(user.name);
    }
}
printUser({
    name: "Pratham",
});
