/**
 * 1. var, let, const
 * 2. default parameter
 * 3. template string
 * 4. arrow function
 * 5. Destructuring and spread operator
 * 6. object.key, object.values, object.entries
 * 7. for of(use hoi array & string), for in(use in object)
 *
 **/

const x = 50;
const number = [4, 6, 2];
const person = {
  name: "Tonmoy sutradhar",
};

const message = `Hi, ${person.name} has a: ${x} access to ${number[1]}`;

console.log(message);

const square = (x) => x * x;
const sum = (a, b) => a + b;

const { age, z, ...others } = { x: 2, z: 4, name: "Tonmoy sutradhar", age: 22 };

const [first, second, ...remaining] = ["ram", "sita", "lokkhi"];
