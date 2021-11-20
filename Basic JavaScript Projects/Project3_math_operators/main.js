//  ADDITION
function addition_Function() {
    var addition = 36 + 56;
    document.getElementById("Math").innerHTML = "36 + 56 =" + addition;
}

// SUBTRACTION
function subtraction_function() {
    var subtraction = 56-30;
    document.getElementById("math2").innerHTML = "56 - 30 =" + subtraction;    
}

//MULTIPLICATION
function multiplication_function() {
    var multiplication = 10*10;
    document.getElementById("math3").innerHTML = "10 * 10 =" + multiplication;    
}

//DIVISION
function division_function() {
    var division = 5/2;
    document.getElementById("math4").innerHTML = "5 / 2 =" + division
}

// MULTIPLE OPERATIONS
function multiple_problems() {
    var many = (34*3) + 100 / 4 - 60;
    document.getElementById("math5").innerHTML = "34 multiplied by 3, plus 100, divided by 4 and then subtracted by 60 equals" + many;
}

// REMAINDERS 
function remainders() {
    var remain = 41 % 10;
    document.getElementById("math6").innerHTML = "When you divide 41 by 10 you have a remainder of: " + remain;
}

//NEGATION
function negation() {
    var x = 20;
    document.getElementById("math7").innerHTML = -x;
}

//INCREMENT
function up() {
    var y = 69;
    y++;
    document.write(y);
}

//DECREMENT
function down() {
    var z =50;
    z--;
    document.write(z);
}

// RANDOM NUMBER 
window.alert(Math.random());

//RANDOM NUMBER FROM 200 AND UNDER
window.alert(Math.random()* 200)

//MATH OBJECT METHOD 
function round() {
    var g = 456.32645
    Math.round(g)
    document.getElementById("math8").innerHTML = Math.round(g)
}