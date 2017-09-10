function sum(a, b) {
    return (a + b);
}
console.log(sum(2, 3));

//

var myArray = [4, 5, 6];
var biggestNum = 0;
for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] > biggestNum) {
        biggestNum = myArray[i];
    }
}
console.log(biggestNum);

//

function isEven(a) {
    if (a % 2 === 0) {
        return ("even");

    } else {
        return ("odd");
    }

}
console.log(isEven(2))

//
var myString = (str);

if (str.length <= 20) {
    return str.concate(str) {

    } else if (str.length > 20) {
        return str.slice(str.length / 2)

    }

}
//

function fibonacci(num) {
    if (num < 2) {
        return 1;
    } else {

        return fibonacci(num - 1) + fibonacci(num - 2);
    }

}

//

function solve(a, b, c) {
    var result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    return result + "<br>" + result2;

    //
    var str = 'thisisatest';
    var letters = new Object;

    for (x = 0, length = str.length; x < length; x++) {
        var l = str.charAt(x)
        letters[l] = (isNaN(letters[l]) ? 1 : letters[l] + 1);
    }
    for (key in letters) {
        console.log(key + ' :: ' + letters[key]);
    }
