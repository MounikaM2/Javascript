//function without any name 
let welcome = function() {
    console.log("Welcome to my world");
    
}
welcome();

//parameterised

let add = function(a,b) {
    console.log("Its an addition function");
let sum = a+b;
return sum;
}

let s = add(10,20);
console.log(s);