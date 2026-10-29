var a=10; // global variable
console.log(a);

function test() {
    var a=20;
    console.log(a); //It will print 20 because the variable a is declared inside the function and it has local scope.
    if(true) {
        var a=30;
        console.log(a); //It will print 30 because the variable a is declared inside the if block and it has local scope.
    }
    console.log("value of var a is: " +a); 
    }
    test();
    console.log("Value of a is:" + a); 

    let b=20; //global variable
    console.log(b);

    function test1() {
        let b=30;
        console.log(b); //It will print 30 because the variable b is declared inside the fucntion and it has local scope.
    if(true) {
        let b=40;
        console.log("Value of b is: " + b); 
    }
    console.log(b); 
    }
test1();
console.log("Value of b is:" + b);


//Redeclaration of var is allowed but redeclaration of let is not allowed.
var number=30;
var number=40; //It will not give any error because redeclaration of var is allowed.
console.log("Value of number is: " + number);

let num=50;
// let num=60; //It will give an error because redeclaration of let is not allowed.
console.log("Value of num is: " + num);

//Reassignment of var and let is allowed.
var number1 = 70;
number1 = 80;
console.log("Value of number1 is: " + number1);

let num1 = 90;
num1=100;
console.log("Value of num1 is: " +num1);


//Hoisted
console.log("Value of x is: " + x); // It will print undefined because the variable x is hoisted to the top of the scope but it is not initialized yet.
var x=10;

//console.log("Value of y is: " + y); //It will give an error (ReferenceError) because the variable y is not hoisted to the top of the scope.
let y=20;


//const
const d = 20;
d = 90; //reassignment of const is not allowed. It will give an error (TypeError).
console.log("Value of d is: " +d);


const e = 14;
// const e = 15;
console.log("Value of e is: " +e); //redeclaration of const is not allowed. It will give an syntax error saying that the identifier 'e' has already been declared.

 //hoisting of const
 console.log("Value of f is: " + f);
 const f =34; 