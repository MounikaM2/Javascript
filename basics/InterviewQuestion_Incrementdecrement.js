let i=11;
let j=i++ + ++i; // current value of i=11 and since its post increment the value of i is 11 and since there is a preincrement operatot the value of ++i becaomes 13 and the addition of 11+13 = 24
console.log(i); //13
console.log(j); //it will give the result ad 25


let x=20;
x++; //when ++ is alone in line it just increment in this case
++x; //when ++ is alone in line it increment in this case
x--; //when -- is alone un line it just decrements in this case
 //so 20+1+1-1 = 21
console.log(x); //It will print 21

let d=1.5;
let D=2.5;
let output= d++ + ++D; //1.5+3.5=5
console.log(output); //it will print 5
console.log(d); // it will print 2.5
console.log(D); //it will print 3.5

let l=1.5;
let u=2.5;
let result= l-- + --u; //1.5+1.5=3
console.log(result); //it will result 3
console.log(l); //it will result 0.5
console.log(u); //it will result 1.5