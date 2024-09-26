// map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns the array.

const numbers = [2, 3, 4, 5, 6, 7];

// 2nd way
// function doubleIt(num) {
//   console.log("Num now", num);
//   return num * 2;
// }

// const result = numbers.map(doubleIt);
// console.log(result);

// 3rd way
const double2 = (n) => n * 2;
const output = numbers.map(double2);
console.log(output);

// very short-cut
const output2 = numbers.map((n) => n * 2);
console.log(output2);

// 1st way
// const doubled = [];
// for (const num of numbers) {
//   const double = num * 2;
//   doubled.push(double);
// }
// console.log(doubled);
