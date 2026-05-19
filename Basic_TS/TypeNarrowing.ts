/* function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}

print("Hello")

 */

/* function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value * 2);
  }
}

print(4)
print("second") */

/* function format(value: string | number) {
  if (typeof value === "number") {
    console.log(value.toFixed(2));
  }
}

format(23.323423);
 */

/* if (Array.isArray(data)) {
  console.log(data.length);
}
 */
/* function check(data: string | string[]) {
  if (Array.isArray(data)) {
    console.log(data.length);
  }
}
check(["A", "B", "C"]);
 */

/* type Dog = {
  bark: string;
};
type Cat = {
  meow: string;
};

function animal(a: Dog | Cat) {
  if ("bark" in a) {
    console.log(a.bark);
  }
}

animal({
  bark: "Bow Bow",
});
 */

type fork = {
  name:string;
};

function printUser(
  user:fork | null
) {

  if(user) {

    console.log(user.name);

  }

}

printUser({
    name: "Pratham",
});