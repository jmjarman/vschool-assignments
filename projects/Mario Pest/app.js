var goombaTotal = 0
var cheepTotal = 0
var bobTotal = 0

//insert goomba function
document.getElementById("goomba-count").addEventListener("input", function(){
    var goombaCount = parseInt(document.getElementById("goomba-count").value);
    var goombaPrice = parseInt(document.getElementById("goomba-price").innerHTML);
    goombaTotal = goombaPrice * goombaCount;
    document.getElementById("goomba-total").innerHTML = goombaTotal
    computeTotal()    
});

//insert cheep function
document.getElementById("cheep-count").addEventListener("input", function(){
    var cheepCount = parseInt(document.getElementById("cheep-count").value);
    var cheepPrice = parseInt(document.getElementById("cheep-price").innerHTML);
    cheepTotal = cheepPrice * cheepCount;
    document.getElementById("cheep-total").innerHTML = cheepTotal
    computeTotal()
});

//insert bob function
document.getElementById("bob-count").addEventListener("input", function(){
    var bobCount = parseInt(document.getElementById("bob-count").value);
    var bobPrice = parseInt(document.getElementById("bob-price").innerHTML);
    bobTotal = bobPrice * bobCount;
    document.getElementById("bob-total").innerHTML = bobTotal
    computeTotal()
});
       
//grand total
function computeTotal(){
    document.getElementById("total").innerHTML = goombaTotal + cheepTotal + bobTotal
}
