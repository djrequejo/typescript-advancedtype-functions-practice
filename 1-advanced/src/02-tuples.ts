const prices: (number | string)[] = [1,3,4,12,312];

prices.push(1);
prices.push("1");

let user: [string, number, boolean] = ["dj", 36, true];
// user = ["ana", 34];
// user = ["12312", 454];

// user = [];
// user = ["diego"];

const [username, age] = user;
console.log(username);
console.log(age);

