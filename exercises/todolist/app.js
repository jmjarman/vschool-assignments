document.getElementById("add-todo").addEventListener("click", function() {
    var newTodo = document.getElementById("new-todo-text");
    
    // Easier way
    var list = document.getElementById("todo-list");
    list.innerHTML = "<li>" + newTodo.value + "</li>" + list.innerHTML;
    
    newTodo.value = "";