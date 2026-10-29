// <,>, <=,>=
let a=20;
let b=29;

if(a>b) {
console.log("a is greater than b");
} else {
console.log("b is greater than a");
}

//this type of code is not recommended to use as the else block is not reachable/called as reachable/dead code
// if(true) {
//     console.log("Hello"); //only this gets executed
// } else {
//     console.log("yup");
// }

let flag=true;
if(flag){
console.log("Helloo..");
} else {
console.log("Byee");
}

//In js, there are 2 types of operators to compare two values. one is == and the other one is ===. == is called as eual and === stirctly equal.
let e=3;
let f=4;
let g="4";

//1. we can use == which only compares the value
console.log(f==g); //it prints true because it compares only the values.
//2. we can use === which compares the data type and values.
console.log(f===g); //it will print false because one is number and the other one is string.

console.log(true==1); //It will print true 
console.log(true===1); //It will print false
console.log(false==1); //It will print false
console.log(""==0); //It will print true becasue in JS, the empty string value is 0.
console.log(""===0); //it will print false

