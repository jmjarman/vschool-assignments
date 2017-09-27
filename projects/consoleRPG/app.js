var readline = require("readline-sync");

var user = {
    name: (''),
    life: 10,
    inventory: ["potato"]
}

var weapon = ["shotgun", "sword", "baton"];
var enemyNames = ["zombie", "vampire", "werewolf"];
//var inventory = ["potato"];



/////////////////////INTRO/////////////////////////////
var name = readline.question("Excuse me, I believe I know you. What is your name?");
user.name = name

console.log("I'm so glad to finally find you. Be careful, there are zombies everywhere! Press 'w' to walk to avoid attracting attenton or 'i' for inventory.");

/////////////////Actions///////////////////

//inventory.
function checkInventory() {
    console.log(user);
}

//doesEnemyAppear
function doesEnemyAppear() {
    var randomNumber = Math.floor((Math.random() * 3) + 1);
    if (randomNumber === 2) {
        return true;
    } else {
        return false;
    }

}

//run
var runOrDie = Math.floor((Math.random() * 2) + 1)

function run() {
    runOrDie = Math.floor((Math.random() * 2) + 1)
    if (runOrDie === 1) {
        console.log("Sorry, you have been caught and eaten alive. Try again")
    } else {
        console.log("You have escaped the monster!")
    }
}


//attack
var charPower = Math.floor((Math.random() * 10) + 1)
console.log(charPower)

function attack() {}

var enemyPower = Math.floor((Math.random() * 10) + 1)

function enemyAttack() {}

//fight
function fight() {
    enemyPower = Math.floor((Math.random() * 10) + 1)
    charPower = Math.floor((Math.random() * 10) + 1)
    if (charPower < enemyPower) {
        console.log("You have died!")
    } else {
        console.log("You killed the enemy and been awarded a new weapon!! Press 'i' for inventory or 'w' to continue playing.")
        user.inventory.push(weapon[Math.floor(Math.random() * 3)])
    }
}

//while
while (user.life > 0) {
    var action = readline.question("Push 'w' to walk or 'i' to check inventory").toLowerCase();

    if (action === 'i') {
        console.log(user)

    } else if (action === 'w' && doesEnemyAppear()) {
        var attack = readline.question("You have encountered a monster. Press 'a' to attack or 'r' to run. The monster is a " + enemyNames[Math.floor(Math.random() * 3)]).toLowerCase();

        if (attack === 'a') {
            fight()
        } else {
            run()
        }

    }
}
