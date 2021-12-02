// TERNARY OPERATOR
function Ride_Function() {
    var Height, can_ride;
    Height = document.getElementById("Height").value;
    can_ride = (Height >=52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = can_ride + " to ride.";
}
// TERNARY OPERATOR 2
function vote_function() {
    age = document.getElementById("age").value;
    can_vote = (age >=18) ? "You are old enough":"You are not old enough";
    document.getElementById("vote").innerHTML = can_vote + " to vote.";
}

// NEW AND THIS KEYWORDS
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make;
    this.Vehicle_Model;
    this.Vehicle_Year;
    this.Vehicle_Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function my_Function() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erick drives a " + Erik.Vehicle_Make + "the color is  " + Erik.Vehicle_Model + "manufactured in  " + Erik.Vehicle_Year;
}

//TESTING IN VALID VALUES FOR VARIABLES 
function test1() {
    var abstract = 2;
    window.alert(abstract)
}

// OBJECT CONSTRUCTOR FUNCTION 
function Phone(Screen_size, Resolution, CPU, RAM,) {
    this.Screen_size;
    this.Resolution;
    this.CPU;
    this.RAM
}
var Samsung_Galaxy_S10 = new Phone(6.1, 1440, "Snapdragon855", "8 gigabytes")
function object_mine() {
    document.getElementById("New_and_This").innerHTML = "The Samsung Galaxy S10 has a " + this.Screen_size + "the resolution of the screen is " + Samsung_Galaxy_S10.Resolution + "the CPU is a " + Samsung_Galaxy_S10.CPU + "last but not least it has " + Samsung_Galaxy_S10.RAM;
}

//NESTED FUNCTIONS 
function count_Function() {
    document.getElementById("Nested_function").innerHTML = Count();
    function Count() {
        var Starting_point = 20;
        function Plus_6() {Starting_point += 6;} {
            Plus_6();
            return Starting_point;
        }
    }
}

function get_Date() {
    if (new Date ().getHours() <18) {
        document.getElementById("Greeting").innerHTML
    }
}