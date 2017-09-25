var ask = require("readline-sync");

function createArray(amount) {
    var arr = []
    for (var i = 0; i < amount; i++) {
        var battle = [];
        for (var j = 0; j < amount; j++) {
            battle.push(0);
        }
        arr.push(battle)
    }
    return arr;
}
var grid = createArray(10)

var x = parseInt(ask.question("Enter x(1 to 10):")) - 1;
var y = parseInt(ask.question("Enter y(1 to 10):")) - 1;

grid[x][y] = grid[x][y] + 1

console.log(grid);

var isActive = true;
if //(ship is at coordinates) {
    answer = readline.question("You sunk one of my battleships, choose again");

    //update object
    //if user hits three game over

} else if {
    answer = readline.question("You missed my battleship, choose again");
}
