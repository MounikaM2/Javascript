//There are two types of Increment and Decerement Operators in Javascript. 
//Increment Operators: 1. Pre Increment Operator 2. Post Inscrement Operator.
// 1. PostIncrement Operator: In this case, the value of the variable is assigned first and the value is increased by 1 after the assignment.
 let a=20;
 let b=a++; //In this case, the value of a is assigned to b first and then the value of a is increased by 1.
 console.log(a); //It will give the result as 21 because the value of a is increased by 1 after the assignment.
 console.log(b); //It will give the result as 20 because the value of a is assigned to b first and then the value of a is increased by 1.

 
 let c = -99;
 let d = c++; 
 console.log(c); //-99+1 = -98
 console.log(d); //It will give the result as -99 because the value of c is assigned to d first and then the value of c is increased by 1.

 let total=1000;
 let sum=total++;
 console.log(total); 
 console.log(sum);

 let s=8;
 console.log(s++); //It will give the result as 8 because the value of s is assigned to the console first and then the value of s is increased by 1.
 console.log(s); //It will give the result as 9 because the value of s is increased by 1 after the assignment.

 //2. post Decrement Operator: In this case, the value of the variable is assigned first and the value is decreased by 1 after the assignment.

let q=2;
let w=q--;
console.log(w);
console.log(q);

let e=-99;
let r=e--;
console.log(e); //It will give the result as -100 because the value of e is decreased by 1 after the assignment.
console.log(r); //It will give the result as -99 because the value of e is assigned to r first and then the value of e is decreased by 1.

let tot=1100;
let subtr = tot--;
console.log(tot); //It will give the result as 1099 because the value of tot is decreased by 1 after the assignment.
console.log(subtr); //It will give the result as 1100 because the value of tot is assigned to subtr first and then the value of tot is decreased by 1.


let t=9;
console.log(t--); //It will give the result as 9 because the value of t is assigned to the console first and then the value of t is decreased by 1.
console.log(t); //It will give the result as 8 because the value of t is decreased by 1 after the assignment.

//Pre Increment Operator: In this case, the value of the variable is increased by 1 first and then the value is assigned.
let x=10;
let y=++x;
console.log(x); //It will give the result as 11 because the value of x is increased by 1 first and then assigned to y.
console.log(y); //It will give the result as 11 because the value of x is increased by 1 first and then assigned to y.

let p=5;
let q1=++p;
console.log(p); //It will give the result as 6 because the value of p is increased by 1 first and then assigned to q1.
console.log(q1); //It will give the result as 6 because the value of p is increased by 1 first and then assigned to q1.

let p2=-5;
let q3=++p2;
console.log(p2); //It will give the result as -4 because the value of p2 is increased by 1 first and then assigned to q3.
console.log(q3); //It will give the result as -4 because the value of p2 is increased by 1 first and then assigned to q3.

let total1=1000;
let sum1=++total1;
console.log(total1); //It will give the result as 1001 because the value of total1 is increased by 1 first and then assigned to sum1.
console.log(sum1); //It will give the result as 1001 because the value of total1 is increased by 1 first and then assigned to sum1.

let s1=8;
console.log(++s1); //It will give the result as 9 because the value of s1 is increased by 1 first and then assigned to the console.
console.log(s1); //It will give the result as 9 because the value of s1 is increased by 1 first and then assigned to the console.

let f="4";
let g=++f;
console.log(f); //It will give the result as 5
console.log(g); 

//Pre Decrement Operator: In this case, the value of the variable is decreased by 1 first and then the value is assigned.
let x1=10;
let y1=--x1;
console.log(x1); //It will give the result as 9
console.log(y1); //It will give the reuslt as 9

let p1=5;
let q2=--p1;
console.log(p1); //It will give the result as 4
console.log(q2); //It will give the resultas 4

let p3=-5;
let q4=++p3;
console.log(p3); //It will give the result as -4 because the value of p3 is increased by 1 first and then assigned to q3.
console.log(q4); //It will give the result as -4 because the value of p3 is increased by 1 first and then assigned to q3.

let total2=1000;
let sum2=--total2;
console.log(total2); //It will give the result as 999
console.log(sum2); //It will give the result as 999

let s2=8;
console.log(--s2); //it will give the result as 7
console.log(s2); //It will give the result as 7
