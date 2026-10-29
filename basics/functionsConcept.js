//functions are non-primitive in nature and therefore it doesn't have a fixed memory.

//Named functions:
//1.1 simple functions: has no input and has no return
function test() {
    console.log("print this function");
}
test();

function addition() {
    console.log("print this addition");
    let sum = 10 + 20;
    console.log(sum);
}
addition();

//1.2. function that has some input but no return
function subtraction(a, b) {
    console.log("print this subtraction");
    let sub = a - b;
    console.log(sub);
}
subtraction(20, 10);

//1.3. function that has some input and also returning something
function multiplication(c, d) {
    console.log("print this multiplication function");
    let mult = c * d;
    return mult;
}
let multiplicationReturn = multiplication(10, 20);
console.log("value of multiplication return is: " + multiplicationReturn);

function subtract(f, e) {
    let subt = f - e
    console.log(subt);
}
subtract(multiplicationReturn, 2);

function getmyname() {
    return "mounika";
}
let myname = getmyname();
console.log(myname);

//WAF where u are expecting a input a browserName and on the basic of that browsername, return true
function launchbrowser(browserName) {
    switch (browserName.toLowerCase()) {
        case "chrome":
            console.log("launching chrome browser");
            return true;
        case "firefox":
            console.log("launching firefox browser");
            return true;
        case "opera":
            console.log("launching opera browser");
            return true;
        case "safari":
            console.log("launching safari browser");
            return true;
        case "edge":
            console.log("launching edge browser");
            return true;
        default:
            console.log("please provide valid browsername");
            return false;
    }
}
launchbrowser("firefox");