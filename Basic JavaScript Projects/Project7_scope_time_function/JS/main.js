// GLOBAL VARIABLE
var x = 10;
function Add_numbers_1() {
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write (x + 100);
}
Add_numbers_1();
Add_numbers_2();

//  LOCAL VARIABLE
function Add_numbers_3() {
    var y = 20;
    document.write(20 + y + "<br>");
}
function Add_numbers_4() {
    document.write(y = 100);
}
Add_numbers_3
Add_numbers_4

// LOCAL VARIABLE WITH CONSOLE LOG
function Add_numbers_5() {
    var z = 30();
    console.log(30 + z)
}
function Add_numbers_6() {
    console.log(x + 100)
}
Add_numbers_5
Add_numbers_6

//IF STATEMENT
function get_Date() {
    if (new Date().getTime() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

// IF STATEMENT TWO
        function time() {
            if (new Date().getTime() >20) {
            document.getElementById("goodnight").innerHTML = "think about how you will sleep tonight";
            }
        }

//ELSE STATEMENT
function Age_function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

//ELSE STATEMENT 2
function Height_measurement () {
    Height = document.getElementById("Height").value;
    if (Height >= 5.5) {
        go = "You can go on this ride";
    }
    else {
        go = "You can not go on this ride";
    }
    document.getElementById("How_tall_are_you?").innerHTML = go;
}

//ELSE IF STATEMENT
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time <12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time > 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}