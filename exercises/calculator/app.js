document.getElementById("calcadd").addEventListener("click", function(){
    var addOne = parseInt(document.getElementById("add-one").value);
    var addTwo = parseInt(document.getElementById("add-two").value);
    document.getElementById("add-total").innerHTML = addTwo + addOne;
});

document.getElementById("calcsub").addEventListener("click", function(){
    var subOne = parseInt(document.getElementById("sub-one").value);
    var subTwo = parseInt(document.getElementById("sub-two").value);
    document.getElementById("sub-total").innerHTML = subOne - subTwo;
});

document.getElementById("calcmult").addEventListener("click", function(){
    var multOne = parseInt(document.getElementById("mult-one").value);
    var multTwo = parseInt(document.getElementById("mult-two").value);
    document.getElementById("mult-total").innerHTML = multTwo * multOne;
});