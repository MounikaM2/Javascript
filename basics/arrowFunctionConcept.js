//Arrow functions are coming from anonymous function category
//this function is similar to the one in java where we use concept of lamda functions.
//we dont have any name of the function and we dont even write the function keyword.
//it is representated by "()=>" and then followed by any code.
//the function has to be stored in the function expression and then call with that name.
//one way we can write is:
let arrowFunc=()=> {
    console.log("This is a arrow function");
}
arrowFunc();

//we can also write like this with out brackets in single line
let arrowFunction=()=> console.log("This is another arrow function");
arrowFunction();

//with parameter
let addition = (number)=> {
return number+10;
}
let addedNumber = addition(11);
console.log("after adding number: "+ addedNumber);

//when we are having only 1 line, we can write this way without even mentioning return because javascript understands it.
let add = (number)=> number +12;
let addednumber = add(13); 
console.log(addednumber);

let addit = (a,b)=> {
    let sum = a+b;
    // return sum;
    console.log(sum);
}
addit(1,2); //call by value

//we can write the samething in 1 line as below
let additi = (a,b)=> a+b;
let as = additi(10,20);
console.log(as);

//WAP where you have to use the arrow function concept to launch any browser

/**
 * 
 * @param {String} browserName 
 */
let browser=(browserName)=> {
switch(browserName.toLowerCase().trim()) {
case "chrome":
    console.log("launching chrome browser");
    break;
    case "firefox":
          console.log("launching firefox browser");
          break;
          case "edge":
             console.log("launching edge browser");
             break;
             case "safari":
                 console.log("launching safari browser");
                 break;
                 default:
                    console.log("please provide valid browserName");
                    break;
}
}
browser("firefox");
browser("safari");
