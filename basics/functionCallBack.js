//function callback is neither a method nor a keyword, its a concept

let sum=(a,b)=>(a+b);
let sub=(a,b)=>(a-b);
let mul=(a,b)=>(a*b);
let div=(a,b)=>(a/b);
/**
 * 
 * @param {*} functionName 
 * @param {number} a 
 * @param {number} b 
 */
function Calculator(functionName, a,b) {
let results = functionName(a,b) //this is called callback - calling the parameterised function in the main function.
return results;
}
let res = Calculator(sum, 10,20);
console.log(res);

function launchBrowser(function1, url) {
function1();
console.log("Open thr url: "+ url);
}

//we can pass functionname or also anonymous function or also arrow function directly as shown below by passing the arrow function.
launchBrowser(()=> { 
console.log("Launching the chrome broswer...");
}, "https://www.google.com");
