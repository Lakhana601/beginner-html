function print() {
    console.log("Hello " + arguments[0]);
    document.write(person.id + person.name);

}

function Add(a, b) {
    var c;
    c = a + b;
    console.log("The addition of 2 no is " + c);
}
var Sub = function(a, b) {
    var c = a - b;
    console.log("Sub:" + c)
}

function Multiply(x, y) {
    var z;
    z = x * y;
    console.log("The Mul is " + z);
}

var person = {
    id: 1,
    name: "Tahir",
    manufacturer: "Ahmed Tapadhar",

}