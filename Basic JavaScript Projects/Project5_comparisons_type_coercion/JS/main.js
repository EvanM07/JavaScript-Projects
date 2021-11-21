document.write(typeof "Word");

document.write(typeof 56);

// NAN
function function1() {
    document.getElementById("Test").innerHTML = 0/0;
}

//ISNaN
function function2() {
    document.getElementById("Test2").innerHTML = isNaN('hi there');
}

//ISNaN pt.2
function function3() {
    document.getElementById("Test3").innerHTML = isNaN('456');
}

// INFINITY
document.write(2E310);

// NEGATIVE INFINITY
document.write(-3E310);

// BOOLEAN FALSE 
document.write(32<4);

// BOOLEAN TRUE 
document.write(100>87);

// CONSOLE LOG METHOD
console.log(10*10);

// TYPE COERCION 
document.write("25" + 5);

//FALSE FOR BOOLEAN LOGIC IN A CONSOLE LOG
console.log(49<1);

// DOUBLE EQUAL SIGN TRUE 
document.write(300==300);

// DOUBLE EQUAL SIGN FALSE 
document.write(213==4983);

// TRIPLE EQUAL SIGN TRUE 
A = "Evan";
B = "Evan";
document.write(A===B);

// TRIPLE EQUAL SIGN FALSE
// ALONG WITH DIFFERENT VARIANTS OF DATA TYPE AND VALUE
C = "David";
D = "Evan";
E = "twenty seven";
F = "27";
G = "log";
H = 30;
document.write(C===D);
document.write(E===F);
document.write(G===H);

//AND OPERATOR
document.write(3>1 && 10>2);

// OR OPERATOR
document.write(20<3 || 30>100);

//NOT OPERATOR
function not_function() {
    document.getElementById("not").innerHTML = !(30>20);
}

//NOT OPERATOR DOUBLE NEGATIVE 
function double_neg() {
    document.getElementById("not2").innerHTML = !(5>10);
}