let a=100;
let b=200;
let c = a+b;
let d= a-b;
let e=a*b;
let f=a/b;
console.log(c);
console.log(d);
console.log(e);
console.log(f);

let x = "Hello";
let y="world";
let z = x+y;
console.log(z);
console.log("The value of z is: " + x + " " +y);
console.log(a+b+x+y); //In this case, the addition of a and b will be done first and then the concatenation of x and y will be done.
console.log(x+y+a+b); //here, the concetenation of x and y will be done first but it will not add the value of a and b. Result will be HelloWorld100200 because of no brackets to a+b specified..
console.log(x+y+(a+b)); //here, the concetenation of x and y will be done first but it will add the value of a and b because of the brackets specified. Result will be Helloworld300.
console.log(x+y+a+b+x+y); //this will give the result as HelloWorld100200HelloWorld because of no brackets to a+b specified.
console.log(x+y+(a+b)+x+y); //this will give the result as HelloWorld300HelloWorld because of brackets to a+b specified.
console.log(a+b+x+y+a+b); //this will give the result as 300Helloworld100200 as the Javascript will work from left to right.
console.log("The value of a is:" + a);
console.log("The value of a and b is:" +a+b); //this will give the result as The value of a and b is:100200 because of no brackets to a+b specified.
console.log("The value of a and b is:" +(a+b)); //this will give the result as The value of a and b is:300 because of brackets to a+b specified.
console.log(12.57+23.87+x+y+a+b); //this will give the result as 36.44Helloworld100200 as the Javascript will work from left to right.
console.log(true+"Hello"+false); //this will give the result as trueHellofalse because of no brackets to a+b specified.
