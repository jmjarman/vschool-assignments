var items = [];

var tacos = {
    meat: "chicken",
    bread: "flour"
}

var enchiladas = {
    meat: "shredded pork",
    bread: "corn"
    
}

var burrito = {
    meat: "steak",
    bread: "flour"
}


function Item(meat, bread){
    this.meat = meat;
    this.bread = bread;
}

var tostada = new Item("beef", "corn");
var taquitos = new Item("hamburger, corn");
var hamburger = new Item("hamburger, bun");


items.push(tostada, taquitos, hamburger);
for(var i = 0; i < items.length; i++){
 var par = document.createElement("p");
 var text = document.createTextNode(i);
  par.appendChild(text)
}
