/*var str = "appleisgood";
for (var i = 0; i < str.length; i++){
    console.log(str.charAt(i));
}

function findP(str, n) {

    for (var i = 0; i < str.length; i++);
    if (str.indexOf(n) === -1) {
        console.log("no character found")
    }else{
        console.log(str.indexOf(n));
    }
}
findP("appleisgood", "p")

function fortyTwo(array){
    
    for (var i = 0; i < str.length; i++)
        if(i === 42){
            console.log("found 42")
            break
        }else{
            console.log("42 not found")
            
        }
}
fortyTwo[1, 5, 10, 20, 25, 42]*/


var myArray = [4, 5, 6];
var biggestNum = 0;
for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] > biggestNum) {
        biggestNum = myArray[i];
    }
}