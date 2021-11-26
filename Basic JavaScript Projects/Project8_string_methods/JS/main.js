//CONCAT() METHOD 
function sentence_here() {
    var words_1 ="So here we are. ";
    var words_2 ="Can't wait to play video games, ";
    var words_3 ="battlefield 2042 is a shame. ";
    var words_4 ="Shaking my head ";
    var put_this_all_together = words_1.concat(words_2,words_3,words_4);
    document.getElementById("words").innerHTML = put_this_all_together;
}

// SLICE() METHOD
function slice_Method() {
    var Sentence ="All work and no play Johnny a dull boy";
    var section = Sentence.slice(16,27);
    document.getElementById("Slice").innerHTML = section;
}

// SLICE() METHOD 2
function dice_and_slice() {
    var more_words ="Call of duty Vanguard is also a bust this year";
    var space = more_words.slice(12,36);
    document.getElementById("dice").innerHTML = space;  
}

//TO UPPERCASE() METHOD
const str = "this will be all upper case";
console.log(str.toUpperCase());

//SEARCH() METHOD
let text ="So here we are going to search some text";
let position =text.search("search");

//NUMBERS METHOD
function string_Method() {
    var x =182;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

//NUMBERS METHOD
function numbers_mason() {
    var y =687;
    document.getElementById("hey_number").innerHTML = y.toString();
}

//TO PRECISION() METHOD
function precision_Method() {
    var x = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}

//TO PRECISION() METHOD 2
function getting_there() {
    var B = 1597;
    document.getElementById("close").innerHTML = B.toPrecision(2);
}

//TO FIXED() METHOD 
let num = 5.56789;
let n = num.toFixed(2);
document.write(num)