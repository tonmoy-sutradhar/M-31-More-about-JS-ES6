// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.
const numbers = [2, 4, 6, 7, 8];
const players = [22, 45, 66, 90, 10, 49];

// const selected = players.filter((n) => n > 90);
// const selected = players.filter((n) => n % 2 !== 0);
const selected = players.filter((n) => n % 2 === 0);
console.log(selected);

// --------->>

const friends = ["Tonmoy", "Sagor", "Sourov", "Trishma", "jon"];
const findLength = friends.filter((frnd) => frnd.length > 4);
console.log(findLength);
