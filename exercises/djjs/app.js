var box = document.getElementById("box");

box.addEventListener("mouseover", function () {
    box.style.backgroundColor = "blue"
})

box.addEventListener("mousedown", function () {
    box.style.backgroundColor = "red"
})

box.addEventListener("mouseup", function () {
    box.style.backgroundColor = "yellow"
})

box.addEventListener("dblclick", function () {
    box.style.backgroundColor = "green"
})

box.addEventListener("mousemove", function () {
    box.style.backgroundColor = "orange"
})


box.style.backgroundColor = "purple";
//blue mouseover 66, red mousedown 82, yellow mouseup 89,  green dblclick 71, orange mousemove 79
document.addEventListener("keydown", function (event) {
    console.log(event.which);
    if (event.which === 66) {
        box.style.backgroundColor = "blue"
    }
});


document.addEventListener("keydown", function (event) {
    console.log(event.which);
    if (event.which === 82) {
        box.style.backgroundColor = "red"
    }
});

document.addEventListener("keydown", function (event) {
    console.log(event.which);
    if (event.which === 89) {
        box.style.backgroundColor = "yellow"
    }
});

document.addEventListener("keydown", function (event) {
    console.log(event.which);
    if (event.which === 71) {
        box.style.backgroundColor = "green"
    }
});

document.addEventListener("keydown", function (event) {
    console.log(event.which);
    if (event.which === 79) {
        box.style.backgroundColor = "orange"
    }
});


