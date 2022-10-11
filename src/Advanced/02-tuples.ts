// Tuples are a strongly typed array

//Array of nums
const prices: (number | string)[] = [1,2,3, "solidity"];
prices.push(1);
prices.push("Tesla");

//This is a tuple, where I'm strongly typing the first and second position of
//the array and I cannot add any more elements
const user: [string,number] = ["MirandaLuna", 15];




// Another example

let user2: [string,number, boolean];
user2 = ["Algarabia", 200, false];
//Deconstruction of the duple to assign values
const [username, age] = user2;
