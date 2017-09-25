var readline = require("readline-sync");
var name = readline.question("What is your name?");
while (name === "") {
    name = readline.question("Please enter your name?");
}
console.log("You are in a room with a door and a hole in the wall, " + name + "...");
console.log("You have three options, put your hand in the hole, find the key or open the door");
console.log("Please press 'h' to put hand in hole, 'k' to look for key or 'd' to try door");
var answer = readline.question("What is your choice?");

//if statement if hand in hole==>dies, else open door==>door locked(while?) else look for key==> find key  
var isActive = true;
while (isActive) {
    if (answer === 'h') {
        console.log("You have died, game over..");
        isActive = false;
    } else if (answer === 'k') {
        console.log("You can unlock door, you win!");
        isActive = false;
    } else {
        answer = readline.question("Door is locked, try again.");
    }
}
