// 1. Print a Message 5 Times
// Write a JavaScript program to print the following output 5 times using a for loop:
// I am Batman
// I am Batman
// I am Batman
// I am Batman
// I am Batman
for (let i = 0; i < 5; i++) {
    console.log("I am Batman");
}

//2. Print a Message with Counter
// Write a JavaScript program to print the following output using a loop:
// I am Batman 1
// I am Batman 2
// I am Batman 3
// I am Batman 4
// I am Batman 5
// I am Batman 6
// I am Batman 7
// I am Batman 8
// I am Batman 9
for (let i = 1; i < 10; i++) {
    console.log("I am Batman " + i);
}

//3. Print Numbers from 10 to 1
// Write a JavaScript program to print numbers from 10 to 1 using:
// - for loop
// - while loop
// - do...while loop
// Expected Output:
// 10
// 9
// 8
// 7
// 6

// 5
// 4
// 3
// 2
// 1

//using for loop
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//using while loop
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

//using do while loop
let k = 10;
do {
    console.log(k);
    k--;
} while (k >= 1)

//4.Print "Hello World" 10 Times
// Write a JavaScript program to print:
// Hello World
// 10 times using a while loop.
let f = 1;
while (f <= 10) {
    console.log("Hello World");
    f++;
}

//5. Print Multiples of 5
// Write a JavaScript program to print all the multiples of 5 between 1 and 100.
// Implement the solution using:
// - for loop
// - while loop
// - do...while loop

//using for loop
for (let h = 1; h <= 100; h++) {
    if (h % 5 === 0) {
        console.log("multiple of 5 is:" + h);
    }
}

//using while loop
let p = 1;
while (p <= 100) {
    if (p % 5 === 0) {
        console.log("multiple of 5 is:" + p);
    }
    p++;
}

//using do while loop
let s = 1;
do {
    if (s % 5 === 0) {
        console.log("multiple of 5 is:" + s);
    }
    s++;
} while (s <= 100) {
}

//6. Print Odd and Even Numbers
// Write a JavaScript program to print all odd and even numbers between 1 and 100.
// Expected Output:
// Even Numbers:

// 2
// 4
// 6
// ...
// 100
// Odd Numbers:
// 1
// 3
// 5
// ...
// 99
let evens = "Even Numbers:\n";
let odds = "Odd Numbers:\n";
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        evens += i + "\n";
    } else {
        odds += i + "\n";
    }
}
console.log(evens);
console.log(odds);

// 8. Print Characters with Character Codes
// Write a JavaScript program to print:
// - A-Z
// - a-z
// - 0-9
// along with their respective character codes.
// Example:

// A = 65
// B = 66
// C = 67
// ...
// Z = 90
// and:
// a = 97
// b = 98
// c = 99
// ...
// z = 122
// Use:
// - for loop
// - while loop
// Hint:
// You can use JavaScript methods such as:
// charCodeAt()
// String.fromCharCode()

//using for loop
for (let i = 65; i <= 90; i++) {
    console.log(String.fromCharCode(i) + "=" + i);
}

for (let i = 97; i <= 122; i++) {
    console.log(String.fromCharCode(i) + "=" + i);
}

for (let i = 48; i <= 57; i++) {
    console.log(String.fromCharCode(i) + "=" + i);
}
//using while loop
let q = 65;
while (q <= 90) {
    console.log(String.fromCharCode(q) + "=" + q);
    q++;
}

let w = 97;
while (w <= 122) {
    console.log(String.fromCharCode(w) + "=" + w);
    w++;
}

let r = 48;
while (r <= 57) {
    console.log(String.fromCharCode(r) + "=" + r);
    r++;
}

//9. 9. Print the Following Series
// Write JavaScript programs to print the following series.
// A.
// 1.0
// 2.0
// 3.0
// 4.0
// 5.0
// 6.0
// 7.0
// 8.0
// 9.0
// 10.0
// B.

// 0
// 9
// 18
// 27
// 36
// 45
// 54
// 63
// 72
// 81
// 90
// 99
// Use a loop to generate the series instead of hardcoding the values.

for (let i = 1; i <= 10; i++) {
    console.log(i + ".0");
}

for (let i = 0; i <= 99; i++) {
    if (i % 9 === 0) {
        console.log(i);
    }
}

//10.Print Only Vowels
// Write a JavaScript program to print only the vowels:
// a
// e
// i
// o
// u
// Start the loop from 'a' and continue until 'z'.
// Use:
// - for loop
// - while loop
// Hint:
// "aeiou".includes(character)

//using for loop
for (let i = 97; i <= 122; i++) {
    let ch = String.fromCharCode(i);
    if ("aeiou".includes(ch)) {
        console.log(ch);
    }
}

//using while loop
let z = 97;
while (z <= 122) {
    let ch1 = String.fromCharCode(z);
    if ("aeiou".includes(ch1)) {
        console.log(ch1);
    }
    z++;
}

//11. Use break in a Loop
// Write a JavaScript program to print numbers from 1 to 10.

// However, when you reach the number whose multiplication by 7 is being evaluated,
// stop the loop and print:
// Bye, see you tomorrow
// The solution should demonstrate the use of:
// break;
for (let i = 1; i <= 10; i++) {
    if (i % 7 === 0) {
        console.log("Bye, see you tomorrow");
        break;
    }
    console.log(i);
}

//12. Print Numbers from 1 to 100
// Write a JavaScript program to print numbers from 1 to 100 using a for loop.

for(let i=1; i<=100; i++){
    console.log(i);
}

//13. 13. Print Numbers Divisible by 3
// Write a JavaScript program to print all numbers between 1 and 100 that are divisible
// by 3.
// Expected Output:
// 3
// 6
// 9
// 12
// ...
// 99

for(let i=1; i<=100; i++){
    if(i%3===0){
        console.log(i);
    }
}

//14. Print Numbers Divisible by Both 3 and 5
// Write a JavaScript program to print all numbers between 1 and 100 that are divisible
// by both 3 and 5.
// Expected Output:
// 15
// 30
// 45
// 60
// 75
// 90
for(let i=1; i<=100; i++) {
if(i%3===0 && i%5===0) {
console.log(i);
}
}

//15. Calculate the Sum of Numbers
// Write a JavaScript program to calculate the sum of numbers from 1 to 100.
// Expected Output:
// Sum = 5050
let sum=0
for(let i=1; i<=100;i++){
   sum += i;
}
console.log("Sum:" + sum);

//16. Calculate the Factorial of a Number
// Write a JavaScript program to calculate the factorial of a given number using a loop.
// Test Data:
// Input: 5
// Expected Output:
// Factorial = 120
//Hint: 5! = 5*4*3*2*1 = 120
let num = 5;
let factorial=1;

for(let i=1; i<=num; i++) {
factorial *= i;
}
console.log("Factorial:" +factorial);

//17. Reverse a Number
// Write a JavaScript program to reverse a given number using a loop.
// Test Data:
// Input: 12345
// Expected Output:
// 54321
let inputNum = 12345;
let reversed = inputNum.toString().split("").reverse().join("");
console.log("reversedNumber is:" +reversed);

//another way of writing the code is:
let inputNumber=12345;
let reversedNumber = 0;
for(; inputNumber>0; inputNumber = Math.floor(inputNumber/10)) {
reversedNumber = reversedNumber*10+(inputNumber%10);
}
console.log("ReveresedNum:" + reversedNumber); 


//using string
let stringValue = "Hello";
let reveredString = "";
for(let i=stringValue.length-1; i>=0;i--){
    reveredString = reveredString+stringValue[i];
}
console.log(reveredString);

// 18. Count the Number of Digits
// Write a JavaScript program to count the number of digits in a given number.
// Test Data:
// Input: 123456

// Expected Output:
// Number of digits = 6

let Input = 123456;
let count = 0;
while(Input>0){
    Input=Math.floor(Input/10); //this line will chop off the last digit 
    count++; //this will count the chop
}
console.log(count);

//to count the number of characters in a string
let string1 = "mounika";
let countofString = string1.length;
console.log("countOfString is:" +countofString);

//19. 19. Print a Multiplication Table
// Write a JavaScript program to print the multiplication table of a given number.
// Test Data:
// Input: 7
// Expected Output:
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70

let input = 7;
for(let i=1; i<=10; i++){
    console.log(input+ "x" + i  + "=" + (input*i));
}

