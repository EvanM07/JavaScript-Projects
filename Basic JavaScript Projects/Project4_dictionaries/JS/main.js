//THIS IS THE DICTIONARY ABOUT FOR A CAR
function first_dictionary() {
    var Car = {
        Make: "Chevrolet",
        Model: "Equinox",
        Type: "SUV",
        Year: 2011,
        Doors: "four door",
        Engine: "4 cylinder eco_boost"
    };
    // THE DELETE STATEMENT
    delete Car.Year;
    document.getElementById("Dictionary").innerHTML = Car.Year; 
}

