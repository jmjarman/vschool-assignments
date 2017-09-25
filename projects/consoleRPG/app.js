var readline = require("readline-sync");
var user = {
    life: 10,
    inventory: [],
    killed: 0,
    name: " "
}

//var enemyNames = ["zombie", "vampire", "werewolf"];
//var inventory = ["shotgun", "machete", "baton"];
//var Enemy = function () {
//    this.life = 10;
//    this.names = enemyNames Math.floor((Math.random() * 3) + 1);
//    this.items = items Math.floor(Math.random() * 3) + 1);
//}

/////////////////////INTRO/////////////////////////////
var name = readline.question("Excuse me, what is your name?");
user.name = name

readline.question("I'm so glad to finally find you. Be careful,there are zombies everywhere! Press 'w' to walk to avoid attracting attenton.");
while (user.life > 0) {
    var action = readline.question("Push 'w' to walk.").toLowerCase();

    if (action === 'w' && doesEnemyAppear()) {
        var attack = readline.question("You have encountered a monster. Press 'a' to attack or 'r' to run.").toLowerCase();
        if (attack === 'a') {
            attack()
        } else {
            run()
        }

    }
}
/////////////////Actions///////////////////

//function die(){
//    
//}
//
//function enemyDie(){
//    
//}
//
function checkInventory(){
    console.log(inventory);
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
function run() {
    var randomNumber = Math.floor((Math.random() * 2) + 1);
    if (randomNumber === 1) {
        return true;
    } else {
        return false;
    }
}

//attack
//function attack() {
//    var charPower = Math.floor((Math.random() * 10) + 1);
}

//function enemyAttack() {
//    var enemyPower = Math.floor((Math.random() * 10) + 1;
}

//function fight() {
//    if (charPower > enemyPower); {
//        console.log("You killed the enemy!");
//    } else {
//        (enemyPower > charPower);
//        console.log("You have died");
//
//    } 
//
//}



