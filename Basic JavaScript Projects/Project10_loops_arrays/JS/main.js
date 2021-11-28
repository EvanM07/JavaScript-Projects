//WHILE LOOP
function Call_Loop() {
    var number = "";
    var A = 1;
    while (A <3534) {
        number += "<br>" + A
        A++
    }
    document.getElementById("Loop").innerHTML = number;
}

// STRING LENGTH
function Find_out() {
  let text ="Hey, how's it going?";
let length = text.length;
document.getElementById("How_long").innerHTML = length;
}

//FOR LOOPS
var Instrument = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instrument.length; Y++) {
        Content += Instrument [Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//FOR LOOP 2
var Instruments = ["Trombone", "Clarinet", "Vocal cords", "Harmonica"]
var list = "";
var A;
function For_loop() {
    for (A = 0; A < Instruments.length; A++) {
        list += Instruments [A] + "<br>";
    }
    document.getElementById("list_of_Instruments").innerHTML = list;
}

//ARRAY
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("cat").innerHTML = "In this picture, the cat is " +
    Cat_Picture[2] + ".";
}

//ARRAY 2
function array_function() {
    var Picture_of_Bob = [];
    Picture_of_Bob [0] = "eating";
    Picture_of_Bob [1] = "sleeping";
    Picture_of_Bob [2] = "hiking";
    Picture_of_Bob [3] = "jumping";
    Picture_of_Bob [4] = "driving";
    Picture_of_Bob [5] = "dancing";
    document.getElementById("array").innerHTML = "In this picture, bob is " + Picture_of_Bob [3] + ".";
}

//CONSTANT
function constant_function() {
    const Musical_Instrument = { Type:"Guitar", Brand:"Fender", Color: "Black"};
    Musical_Instrument.Color = "Blue";
    Musical_Instrument.Price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
    Musical_Instrument.Type + " was " + Musical_Instrument.Price;
}

//CONSTANT 2
function Constant_Function() {
    const Car = {Make:"Ford", Model:"Escape", Engine:"V8", Color:"black"};
    Car.Engine = "V6";
    Car.Price = "$60,000";
    document.getElementById("constant").innerHTML = "The cost of the " + 
    Car.Make + Car.Model + "is " + Car.Price;
}

// LET KEYWORD
var Apple = "Red";
document.write(Apple);
{
    let apple = "Round";
    document.write("<br>" + "Apple");
}

// RETURN() FUNCTION
var x = myFunction(4, 3);

function myFunction(a, b) {
  return a * b;
}