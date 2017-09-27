var form = document.getElementByID("airline-form");
var submit = document.getElementByID(submit);
var query = document.querySelectorAll;

function formAlert{} {
    var firstName = form.elements["firstName"].value;
    var lastName = form.elements["lastName"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["location"].value;
    var diet = {};
    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById('vegan').value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['kosher'].checked) {
        diet.push(document.getElementById('kosher').value);
    }


    alert("First Name: " + firstName + "\n Last Name: " + lastName + "\n Age: " + age + "\nGender: " + gender + "\n Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


submit.addEventListener("click", alert);