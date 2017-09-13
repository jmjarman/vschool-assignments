var goombaPrice = parseInt(document.getElementById("goomba-price").innerHTML);

var cheepPrice = parseInt(document.getElementById("cheep-price").innerHTML);

var bobPrice = parseInt(document.getElementById("bob-price").innerHTML);
document.getElementById("goomba-count").addEventListener("input", function(){
    var goombaCount = parseInt(document.getElementById("goomba-count").value);
    var goombaTotal = goombaPrice * goombaCount;
    document.getElementById("goomba-total").innerHTML = goombaTotal
});

document.getElementById("cheep-count").addEventListener("input", function(){
    var cheepCount = parseInt(document.getElementById("cheep-count").value);
    var goombaTotal = cheepPrice * cheepCount;
    document.getElementById("cheep-total").innerHTML = goombaTotal
});

var gtotal = parseInt(document.getElementById("goomba-total").innerHTML);
var ctotal = parseInt(document.getElementById("cheep-total").innerHTML);
var btotal = parseInt(document.getElementById("bob-total").innerHTML);
document.getElementById("total").innerHTML = gtotal + ctotal + btotal

