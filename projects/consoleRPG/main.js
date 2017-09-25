var readlineSync = require("readline-sync");
var inventory = [];

function walk(){
    var options = ["walk", "check inventory"];
    var option = readlineSync.keyInSelect(options, "What would you like to do? ");
    if (option === 0){
        whatHappenOnOurWalk();
    } else {
        checkInventory();
    }
}

function whatHappenOnOurWalk(){
    console.log("walk");
}

function checkInventory(){
    console.log(inventory);
}

while(true){
    walk();
}