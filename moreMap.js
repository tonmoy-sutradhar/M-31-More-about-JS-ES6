const numbers = [2, 4, 6, 3, 1, 5];

const doubled = numbers.map((num) => num * 2);
console.log(doubled);

const fiveBonus = numbers.map((num) => num + 5);
console.log(fiveBonus);

const frds = ["Tonmoy", "Sagor", "Tapos"];
const length = frds.map((frnd) => frnd.length);
console.log(length); //string er length provide korbe.

const first = frds.map((frnd) => frnd[0]); // 1st letter return korbe
console.log(first);
