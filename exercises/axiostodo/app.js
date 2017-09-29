document.getElementById("submit").addEventListener("click", function () {
    var title = document.myform.title.value;
    var price = document.myform.price.value;
    var description = document.myform.description.value;
    var newList = document.getElementById("todo");
    var newItem = new ToDoItem(title, price, description);
  axios.post("https://api.vschool.io/jarman/todo", newItem).then(function (response) {
    })});

function ToDoItem(title, price, description){
    this.title = title;
    this.price = price;
    this.description = description;
};



axios.get("https://api.vschool.io/jarman/todo").then(function (response) {
var newList = document.getElementById("todo")
    for (var i = 0; i < response.data.length; i++) {
//        document.getElementById("todo").innerHTML += response.data[i].title;
   
    newList.innerHTML +=  
        `<div> Title: <li> ${response.data[i].title} </li> </div>
         <div> Title: <li> ${response.data[i].price} </li> </div>
         <div> Title: <li> ${response.data[i].description} </li> </div>`
    }
});


