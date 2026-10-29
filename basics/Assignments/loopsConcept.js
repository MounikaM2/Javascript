//concept of loops
//loops are used to repeat a block of code multiple times until the condition is false.
//there are 3 basictypes of loops in js
//1. for loop
//2. while loop
//3. do while loop
//there are 3 more types of advanced loops in js
//1. for..in loop
//2. for..of loop
//3. forEach loop

//1. while loop
//while loop is used to repeat a block of code until the condition is false.
//syntax:

//WAP to print numbers form 1 to 10 and print "Hello 5" when the number is 5 and continue the loop until 10.
// let i = 1;
// while (i < 10) {  //1<10, 2<10, 3<10
//     console.log(i); 123
//     if (i == 5) {
//         console.log("Hello 5");
//         break;
//     }
//     i++;
// }
let i = 1;
while (i <= 10) {
    console.log(i);
    if (i % 2 == 0) {
        console.log("the number is divisible by 2: " + i);
    }
    i++;
}

// while(true) {
//     console.log("Heloo.."); //since there is no condiiton here, it will orint heloo infinitely until we stop the execution of the program.
// }
// console.log("How are you.."); //this line will not be executed because the while loop is infinite loop. this is unreachable code.

// while(false) {
//     console.log("Heloo again.."); //this line will not be executed because the while loop is false. this is unreachable code.
// }
// console.log("who are you.."); //this line will be executed because the while loop is false. this is reachable code.

// let flag = true;
// while(flag){
// console.log("Heloo..");  //this will print once and then break the loop.
// break; //this will break the loop and exit the loop.
// }

// while(5) {
//     console.log("ghuj"); //this is truthy value in js, so this will print infinitely until we stop the execution of the program.
// }
// console.log("how arrre you.."); //this line will be executed because the while loop is true. 


//2. for loop
//WAP to print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//we can also write the for loop in a different way
let j = 1;
for (; j <= 10; j++) {
    console.log(j);
}

//we can also write the for loop in a different way
let k = 1;
for (; k <= 10;) {
    console.log(k);
    k++;
}

//WAP to print numbers from 1 to 10 and if the number if even or odd number.
for (let i = 1; i <= 10; i++) {
    console.log(i);
    if (i % 2 == 0) {
        console.log("the number is even: " + i);
    } else {
        console.log("the number is odd: " + i);
    }
}

//WAP to print numbers from 10 to 1 in reverse orser using for loop.
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//3.do while loop: it will first execute the block of code and then check the condition.
let f = 1;
do {
    console.log("value of f is:" + f);
    if (f === 5) {
        console.log("Heloo 5");
    }
    f++;
}
while (f <= 10);


//practical use cases of loops:

//use cases of while loops:
//1. when there are no fixed number of iterations.
// 2. calendar handling when we have to choose a specific date from the 
// calendar, we dont know how many times we have to click on the next button to reach the specific date, so we can use while loop to click on the next button until we reach the specific date.
//3. web table pagination.
//4. infinite scrolling on social media apps like facebook, instagram, twitter, linkedin etc.


//use cases of for loops:
//1. when the number of iterations are fixed.
//2. months of the years
//3. days of the week
//4. handling the fixed number of dropdowns
//5. footers and headers can be counted based on loops

//use cases of do while loops:
//1.