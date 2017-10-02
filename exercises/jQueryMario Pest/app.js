const goombaTotal = 0
const cheepTotal = 0
const bobTotal = 0

//insert goomba function
$("#goomba-count").input,
    function () {
        let goombaCount = parseInt$("#goomba-count").value;
        let goombaPrice = parseInt$("#goomba-price").innerHTML;
        goombaTotal = goombaPrice * goombaCount;
        $("#goomba-total").innerHTML = goombaTotal
        computeTotal()
    };

//insert cheep function
$("#cheep-count").input,
    function () {
        let cheepCount = parseInt$("#cheep-count").value;
        let cheepPrice = parseInt$("#cheep-price").innerHTML;
        cheepTotal = cheepPrice * cheepCount;
        $("#cheep-total").innerHTML = cheepTotal
        computeTotal()
    };

//insert bob function
$("#bob-count").input,
    function () {
        let bobCount = parseInt$("#bob-count").value;
        let bobPrice = parseInt$("#bob-price").innerHTML;
        bobTotal = bobPrice * bobCount;
        $("#bob-total").innerHTML = bobTotal
        computeTotal()
    };

//grand total
function computeTotal() {
    $("#total").innerHTML = goombaTotal + cheepTotal + bobTotal
}
