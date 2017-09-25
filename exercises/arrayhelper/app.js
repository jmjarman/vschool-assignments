var cars = [
    {
        make: "Ford",
        model: "E150",
        price: 10000
    },
    {
        make: "Chevy",
        model: "Camaro",
        price: 20010
    },
    {
        make: "Toyota",
        model: "Tacoma",
        price: 30900
    },
    {
        make: "Ford",
        model: "Explorer",
        price: 9000
    },
    {
        make: "Ford",
        model: "F250",
        price: 2400
    },
]

cars.forEach(function(car) {
    console.log(car)
});

var cars = cars.map(function(car) {
    return car
});
var fords = cars.filter(function(car){
    return car make === "Ford";   
});


var searchCar = cars.find(function(car){  
    return car.model === "Camaro";
});

var areAllCarsReasonablyPriced = cars.every(function(car){  
    return car.price < 100000
});
                          
