document.getElementById("submit").addEventListener("click", function(){
    var destination = []
    var meal = []
    if(document.myform.place[0].checked)
        destination.push(document.myform.place[0].value)
    if(document.myform.place[1].checked)
        destination.push(document.myform.place[1].value)
    if(document.myform.place[2].checked)
        destination.push(document.myform.place[2].value)
    if(document.myform.menu[0].checked)
        meal.push(document.myform.menu[0].value)
    if(document.myform.menu[1].checked)    
        meal.push(document.myform.menu[1].value)
    if(document.myform.menu[2].checked)
        meal.push(document.myform.menu[2].value)
    alert("First name: "+document.myform.firstname.value + "\n Last name: " + document.myform.lastname.value + "\n Age: " + document.myform.age.value + "\n Gender: " + document.myform.gender.value + "\n Destination: " + destination + "\n Meal: " + meal)
//    console.log(document.myform.lastname.value)
//    console.log(document.myform.age.value)
//    console.log(document.myform.gender.value)
//    console.log(document.myform.place.value)
//    console.log(document.myform.menu.value)
    
});