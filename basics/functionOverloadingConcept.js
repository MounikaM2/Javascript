//there is no function overloading concept in javascript 

// function login() {
// console.log("login to application 1");
// }

// function login(a,b){
// console.log("login to application 2");
// }

// login(); //we get syntax error saying that the 'login' has already been declared.


//but we can assign different variables and call them/use them
let login1 = function login() {
 console.log("login to application 1");
 }

 let login2 = function login(a,b){
console.log("login to application 2");
 }

 login1();
 login2();