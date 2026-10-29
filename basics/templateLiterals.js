console.log("Welcome");
// "", '', ``

//case 1 : when we have tp print 1 line.
console.log(`welcome to the main part of Javascript`);

//case 2: when we have to print multiple lines
console.log(`we can print multiple lines of code using backtick here
    which is something helpful`);

    let text = `life is not always about moving quickly; sometimes, 
    It is about moving forward with purpose`;
console.log(text);

//case 3: we can use backtick when we have punctuations sign in our text
let data = 'Hi It\'s my birthday today'; //here \ is acting as a escape
console.log(data);

let data1 = `Hi it's my birthday again`;
console.log(data1);

//case 4: backticks can be used with placeholders also.
let empName = "Mounika";
let age=33;
console.log(`Name is:${empName} and age is:${age}`);

let c=4;
let d=9;
console.log(`Addition is:${c+d}`);
