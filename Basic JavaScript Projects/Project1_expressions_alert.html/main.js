//WINDOW POPUP ALERT WHEN THE PERSON OPENS THE DOCUMENT:
var pop = "okay now what?"

window.alert (pop);

document.write('Hello, World!');

var A = "AYYYYEEEEE now this is something";

document.write(A);

document.write ("I walked up to Tony and said \"hey how are you doing?\" Tony then said \"Good thanks for asking");

document.write ("\"Be who you are and say what you feel,"
+ " because those who mind don\'t matter and those who matter don\'t mind.\""
+"-Dr.Seuss");

document.write ("we don\'t know how this will go\""
+ "but we know it will go.....");

var C = "say what now?" + "I don\'t know...."
document.write (C)

//MULTIPLE VARIABLES SEPARATED BY COMMA'S:
var Ford = "Car Company", Mustang = "Muscle Car", Escape = "Suv", Fusion = "Sedan", F150 = "Truck";
document.write(Escape)

var blues = "I have the blues.";
var blues = blues.fontcolor("blue");
document.write(blues);

//THIS IS FOR ADDING COLOR:
var Ford = Ford.fontcolor ("red");
var Mustang = Mustang.fontcolor ("blue");
var Escape = Escape.fontcolor ("green");
var Fusion = Fusion.fontcolor ("purple");
var F150 = F150.fontcolor ("pink");
document.write (Ford);
document.write (Mustang);
document.write (Escape);
document.write (Fusion);
document.write (F150);
 
// THIS AN EXAMPLE OF AN EXPRESSION and a statement
document.write(45*2)

// THIS IS A FUNCTION THAT WHEN YOU CLICK ON THE BOX IT TURNS THE TEXT GREEN:
function My_First_Function() {
    var str = "This text is green!";
    var result = str.fontcolor ("green");
    document.getElementById("Green_Text").innerHTML= result;
}