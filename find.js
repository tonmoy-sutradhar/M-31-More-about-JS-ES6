const players = [22, 45, 66, 90, 10, 49];
const findPlayersF = players.find((n) => n > 50); // 90 er theke bor 1st element k output hishebe dibe
const findPlayers = players.find((n) => n > 90); // undefined
console.log(findPlayersF);
console.log(findPlayers);

/**
 * 1. map
 * 2. forEach
 * 3. filter
 * 4. find
 * 5. reduce
 */
