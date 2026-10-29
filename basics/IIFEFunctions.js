//IIFE= Immediately invoked function expressions
//it is one more type of anonymous functions.
//this is also a different type of no name function.
//this function is created inside ()
//this function gets invoked immediately once its created.
//its almost like we have static block in java
//we cannot call this function manually manytimes. it will be called single time.
//when we dont have any return, we cannot store this function inside function expression.
//when we have a return statement,  we have to store it inside the function expression.

(function() {
    console.log("This is an IIFE function");
})(); //her (); is basically used to call the function

let username = (function (name) {
// console.log("my name is:"+ name);
return name;
})("Mounika");

console.log(username);
