
// const a= prompt("Enter your first number")
// const b= prompt("Enter your second number")

// const cal=prompt("Enter the caluculation sign +,-,*,/")

var a = 5;
var b = 4;
var cal = "+";
let x=Math.random();

if (x <= 0.1) {


    function faulty(a, b) {
        if (cal == "+") {

            return (a - b);
        }
        else if (cal == "-") {
            return (a / b)
        }
        else if (cal == "*") {
            return (a + b)
        }
        else if (cal == "/") {
            return (a ** b)
        }
    }
    result = faulty(a, b);

    console.log("=", result)
}
else {
    function calculator(a, b) {

        if (cal == "+") {

            return (a + b);
        }
        else if (cal == "-") {
            return (a - b)
        }
        else if (cal == "*") {
            return (a * b)
        }
        else if (cal == "/") {
            return (a / b)
        }
    }
    result = calculator(a, b);
    console.log("=", result)
}