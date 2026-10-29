// 1. Find out the greatest number out of three different given numbers.
// Input the 1st number: 25
// Input the 2nd number: 78
// Input the 3rd number: 87
// Expected Output:
// The greatest: 87

let a = 25, b = 78, c = 87;
if (a > b && a > c) {
    console.log("The greatest number is: " + a);
} else if (b > a && b > c) {
    console.log("The greatest number is: " + b);
} else {
    console.log("The greatest number is: " + c);
}

//2. Find out the greatest number out of four different given numbers.
// Input the 1st number: 25
// Input the 2nd number: 78
// Input the 3rd number: 87
// Input the 4th number: 97
// Expected Output:
// The greatest: 97

let d = 25, e = 78, f = 87, g = 97;
if (d > e && d > f && d > g) {
    console.log("The greatest number is :" + d);
} else if (e > f && e > g && e > d) {
    console.log("The greatest number is :" + e);
} else if (f > g && f > d && f > e) {
    console.log("The greatest number is: " + f);
} else {
    console.log("The greatest number is: " + g);
}

//3. 3. Write a JavaScript program to test whether a number is positive or negative.
// Test Data:
// Input number: 35
// Expected Output: Positive number

// Input number: -11
// Expected Output: Negative number

let num = -11;
if (num > 0) {
    console.log("The number is positive: " + num);
} else {
    console.log("The number is negative: " + num);
}

//4. WAP to check whether a number is odd or even using If-Else.
let num1 = 102;
if (num1 % 2 === 0) {
    console.log("The given number is even: " + num1);
} else {
    console.log("The given number is odd: " + num1);
}

//5. WAP to check whether the given alphabet character is a Vowel or Consonant using Switch-Case.
let alphabet = 'o';
switch (alphabet) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("given alphabet is vowel " + alphabet);
        break;
    default:
        console.log("given alphabet is consonant: " + alphabet);

}

//6. WAP to run your test cases in a specific environment such as QA, Stage, Dev, UAT, or Prod using Switch-Case.
let environment = "Dev";
switch (environment.toLowerCase().trim()) {
    case "qa":
        console.log("run all the test cases in QA environemnt");
        break;
    case "stage":
        console.log("run all the test cases in staging environemnt");
        break;
    case "dev":
        console.log("run all the test cases in dev environemnt");
        break;
    case "uat":
        console.log("run all the test cases in uat environment");
        break;
    case "prod":
        console.log("run all the test cases in production environmnet");
        break;
    default:
        console.log("this environment is not supported");
}

// 7. WAP to book a specific type of car from the Uber app using Switch-Case.
// Car Type:
// Mini, Sedan, SUV, Premium

// If the user passes the wrong car type, print:
// "Please select the right car type."
let carType = "sedan";
switch (carType.toLowerCase().trim()) {
    case "mini":
        console.log("mini cartype is booked from the uber app");
        break;
    case "sedan":
        console.log("sedan cartype is booked from the uber app");
        break;
    case "suv":
        console.log("suv cartype is booked from the uber app");
        break;
    case "premium":
        console.log("premium is booked from the uber app");
        break;
    default:
        console.log("Please select the right car type");
}

//8. 8. WAP to launch browsers using If-ElseIf and Switch-Case.
// Browser:
// Chrome, Firefox, Edge, Safari
// If the user passes the wrong browser, print:
// "Please pass the right browser name."

//using if-elseif
let browser = "safari";
if (browser.toLowerCase().trim() === "chrome") {
    console.log("launching chrome browser");
} else if (browser.toLowerCase().trim() === "firefox") {
    console.log("launching firefox browser");
} else if (browser.toLowerCase().trim() === "edge") {
    console.log("launching edge browser");
} else if (browser.toLowerCase().trim() == "safari") {
    console.log("launching safari browser");
} else {
    console.log("Please pass the right browser name");
}
//using switch
let browserName = "safari";
switch (browserName.toLowerCase().trim()) {
    case "chrome":
        console.log("launching chrome browser");
        break;
    case "safari":
        console.log("launching safari browser");
        break;
    case "edge":
        console.log("launching edge browser");
    case "firefox":
        console.log("launching firefox browser");
    default:
        console.log("Please pass the right browser name")
}

//9.WAP to define the interest rate based on the Loan Type using Switch-Case.
// Loan Type:
// Car Loan, Housing Loan, Personal Loan, Education Loan
// For Housing Loan, if the user's salary is less than 35000 USD, print:
// "NOT APPLICABLE FOR Housing Loan"

let loantype = "housing loan";
let salary = 20000;
switch (loantype.toLowerCase().trim()) {
    case "car loan":
        console.log("interest rate for car loan is 3.2%");
        break;
    case "housing loan":
        if (salary < 35000) {
            console.log("not applicable for housing loan");
        } else {
            console.log("interest rate for housing loan is 6.5%");
        }
        break;
    case "personal loan":
        console.log("interest rate for personal loan is 1.8%");
        break;
    case "education loan":
        console.log("interest rate for education loan is 2.2%");
        break;
    default:
        console.log("Please select the valid loan type");

}

//10. 10. Check whether a given year is a Leap Year using If-Else.
// Test Data:
// 2024 -> 2024 is a Leap Year
// 2023 -> 2023 is not a Leap Year

let year = 2026
if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
    console.log(year + " -> is a Leap year");
} else {
    console.log(year + " -> is not a Leap year");
}

//11. Find the Smallest Number Out of Three Numbers using If-Else.
// Input 1: 45
// Input 2: 12
// Input 3: 78
// Expected Output:
// The smallest: 12
let input1 = 45;
let input2 = 12;
let input3 = 78;
if (input1 < input2 && input1 < input3) {
    console.log("The smallest: " + input1);
} else if (input2 < input3 && input2 < input1) {
    console.log("The smallest: " + input2);
} else {
    console.log("The smallest: " + input3);
}

//12. 12. Check Whether a Number is Divisible by Both 5 and 11 using If-Else.
// Input: 55
// Expected Output: 55 is divisible by both 5 and 11
// Input: 25
// Expected Output: 25 is not divisible by both 5 and 11

let number = 65;
if (number % 5 === 0 && number % 11 === 0) {
    console.log(number + " is divisible by both 5 and 11");
} else {
    console.log(number + " is not divisible by both 5 and 11");
}

//13.Find Whether a Number is Positive, Negative, or Zero using If-Else-If.
// 25 -> Positive Number
// -15 -> Negative Number
// 0 -> Zero
let number1 = -16;
if (number1 > 0) {
    console.log(number1 + " -> is a positive number");
} else if (number1 < 0) {
    console.log(number1 + " -> is a negative number");
} else {
    console.log(number1 + "-> is zero")
}

//14.Check Eligibility for Driving License.
// Age >= 18 -> Eligible
// Age < 18 -> Not Eligible

let age = 18;
if (age >= 18) {
    console.log(age + " -> eligible");
} else {
    console.log(age + " -> Not eligible");
}

//15.Student Grade Calculator using If-Else-If.
// 90 - 100 -> Grade A
// 80 - 89 -> Grade B
// 70 - 79 -> Grade C
// 60 - 69 -> Grade D
// Below 60 -> Grade F

let score = 90;
if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade c");
} else if (score >= 60) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}

//16. Check Valid Triangle.
// Check whether three given sides can form a valid triangle.
// Conditions:
// a + b > c
// a + c > b
// b + c > a
// If all conditions are satisfied: Valid Triangle
// Otherwise: Invalid Triangle

let a1 = 30;
let b1 = 35;
let c1 = 40;
if (a1 + b1 > c1 && a1 + c1 > b1 && b1 + c1 > a1) {
    console.log("Its a valid triangle");
} else {
    console.log("Invalid triangle");
}

//17. 17. Identify the Type of Triangle using If-Else-If.
// Identify whether a triangle is:
// Equilateral
// Isosceles
// Scalene
let d1 = 30;
let e1 = 30;
let f1 = 40;
//equilateral- all three sides should be equal
//isoscles- any 2 sides should be equal

if (d1 === e1 && e1 === f1 && f1 === d1) {
    console.log("Equilateral");
} else if (d1 === e1 || e1 === f1 || f1 === d1) {
    console.log("Isoscles");
} else {
    console.log("Scalene");
}

//18. Check Whether a Character is Uppercase, Lowercase, Digit, or Special Character.
// A -> Uppercase Alphabet
// b -> Lowercase Alphabet
// 7 -> Digit
// @ -> Special Character
let ch = '^';
if (ch >= '0' && ch <= '9') {
    console.log("Digit");
} else if (ch >= 'A' && ch <= 'Z') {
    console.log("Uppercase Alphabet");
} else if (ch >= 'a' && ch <= 'z') {
    console.log("Lowercase Alphabet");
} else {
    console.log("Special Character");
}

//19.Day of the Week Using Switch-Case.

// 1 -> Monday
// 2 -> Tuesday
// 3 -> Wednesday
// 4 -> Thursday
// 5 -> Friday
// 6 -> Saturday
// 7 -> Sunday
// Outside 1-7 -> Invalid Day
let day = 7;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day");

}

//20. Month Name Using Switch-Case.
// 1 -> January
// 2 -> February
// 3 -> March
// 4 -> April
// 5 -> May
// 6 -> June
// 7 -> July
// 8 -> August
// 9 -> September
// 10 -> October
// 11 -> November
// 12 -> December
// Invalid number -> Invalid Month

let month = 1;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid Month");

}

//21. 21. Calculator Using Switch-Case.
// Operations:
// + -> Addition
// - -> Subtraction
// * -> Multiplication
// / -> Division
// % -> Modulus
// If an invalid operator is provided:
// Invalid Operator
let operator = "+";
switch (operator) {
    case "+":
        console.log("Addition");
        break;
    case "-":
        console.log("Subtraction");
        break;
    case "*":
        console.log("Multiplication");
        break;
    case "/":
        console.log("Division");
        break;
    case "%":
        console.log("Modulus");
        break;
    default:
        console.log("Invalid Operator");
}

//22. 22. Login Profile Using Switch-Case.
// Profiles:
// admin
// buyer
// seller
// guest

// Expected:
// admin -> Login with Admin Profile
// buyer -> Login with Buyer Profile
// seller -> Login with Seller Profile
// guest -> Login with Guest Profile
// Invalid profile -> Invalid User Profile
let profile = "buyer";
switch (profile) {
    case "admin":
        console.log(profile + " -> Login with Admin Profile");
        break;
    case "buyer":
        console.log(profile + " -> Login with Buyer Profile");
        break;
    case "seller":
        console.log(profile + " -> Login with Seller Profile");
        break;
    case "guest":
        console.log(profile + " -> Login with Guest Profile");
        break;
    default:
        console.log("Invalid User Profile");
}

//23. Test Execution Based on Environment using Switch-Case.
// Environment:
// QA
// STAGE
// DEV
// UAT
// PROD
// QA -> Running Regression Test Suite
// STAGE -> Running Sanity Test Suite
// DEV -> Running Smoke Test Suite
// UAT -> Running UAT Test Suite
// PROD -> Running Production Smoke Test Suite
// Invalid environment -> Invalid Environment

let ItEnvironment = "UAT";
switch (ItEnvironment) {
    case "QA":
        console.log(ItEnvironment + " -> Running Regression Test Suite");
        break;
    case "STAGE":
        console.log(ItEnvironment + " -> Running Sanity test Suite");
        break;
    case "DEV":
        console.log(ItEnvironment + " ->Running Smoke Test Suite");
        break;
    case "UAT":
        console.log(ItEnvironment + " ->Running UAT Test Suite");
        break;
    case "PROD":
        console.log(ItEnvironment + "->Running Production Smoke Test suite");
        break;
    default:
        console.log("Invalid Environment");
}

//24. 24. Browser Launch Based on User Selection.
// Browser:
// Chrome
// Firefox
// Edge
// Safari
// Expected:
// Chrome -> Launching Chrome Browser
// Firefox -> Launching Firefox Browser
// Edge -> Launching Edge Browser
// Safari -> Launching Safari Browser
// Invalid browser -> Invalid Browser

let browserLaunch = "Chrome";
switch (browserLaunch) {
    case "Chrome":
        console.log(browserLaunch + " -> Launching Chrome Broswer");
        break;
    case "Firefox":
        console.log(browserLaunch + "-> Launching Firefox Browser");
        break;
    case "Edge":
        console.log(browserLaunch + "-> Launching Edge Browser");
        break;
    case "Safari":
        console.log(browserLaunch + "-> Launching Safari Browser");
        break;
    default:
        console.log("Invalid Browser");
}

//25. 25. Employee Bonus Calculation using Switch-Case.
// Rating:
// 5 -> 20% Bonus
// 4 -> 15% Bonus

// 3 -> 10% Bonus
// 2 -> 5% Bonus
// 1 -> No Bonus
let Rating = 3;
switch (Rating) {
    case 1:
        console.log("No Bonus");
        break;
    case 2:
        console.log("5% Bonus");
        break;
    case 3:
        console.log("10% Bonus");
        break;
    case 4:
        console.log("15% Bonus");
        break;
    case 5:
        console.log("20% Bonus");
        break;
    default:
        console.log("Please provide valid rating");
}

//26. ATM Menu Using Switch-Case.
// Options:
// 1 -> Check Balance
// 2 -> Withdraw Money
// 3 -> Deposit Money
// 4 -> Change PIN
// 5 -> Exit
// Invalid option -> Invalid Option

let option = 2;
switch (option) {
    case 1:
        console.log("Check Balance");
        break;
    case 2:
        console.log("Withdraw Money");
        break;
    case 3:
        console.log("Deposit Money");
        break;
    case 4:
        console.log("Change PIN");
        break;
    case 5:
        console.log("Exit");
        break;
    default:
        console.log("Invalid Option");
}


//27. 27. Check Login Credentials using If-Else.
// Expected Credentials:
// Username: admin
// Password: admin123
// Both correct -> Login Successful
// Wrong username -> Invalid Username
// Wrong password -> Invalid Password
// Both wrong -> Invalid Username and Password

let Username = "admin";
let Password = "admin123";
if (Username === "admin" && Password === "admin123") {
    console.log("Both correct -> Login Successful");
} else if (Usernamesername !== "admin" && Password === "admin123") {
    console.log("Wrong username -> Invalid Username");
} else if (Usernamesername === "admin" && Password !== "admin123") {
    console.log("Wrong password -> Invalid Password");
} else {
    console.log("Invalid Username and Password");
}


//28.E-Commerce Discount Calculator.
// Conditions:
// Amount >= 1000 -> 20% Discount
// Amount >= 500 -> 10% Discount
// Amount >= 250 -> 5% Discount
// Below 250 -> No Discount
// Display:
// Original Amount
// Discount
// Final Amount
let amount = 5000;
let discountPercent = 0;
if (amount >= 1000) {
    discountPercent = 20;
} else if (amount >= 500) {
    discountPercent = 10;
} else if (amount >= 250) {
    discountPercent = 5;
}
let discount = amount * discountPercent / 100;
let FinalAmount = amount - discount;
console.log("Original amount: " + amount);
console.log("Discount: " + discount);
console.log("FinalAmount:" + FinalAmount);

//29. Uber Ride Eligibility.
// Conditions:
// 1-3 passengers -> Mini
// 4 passengers -> Sedan
// 5-6 passengers -> SUV

// More than 6 passengers:
// Please select a larger vehicle.

let passengers = 5;
if (passengers >= 1 && passengers <= 3) {
    console.log("Mini");
} else if (passengers === 4) {
    console.log("Sedan");
} else if (passengers >= 5 && passengers <= 6) {
    console.log("SUV");
} else if (passengers > 6) {
    console.log("Please select a larger vehicle");
}


//30. Application Access Based on User Role using Switch-Case.
// Roles:
// Admin
// Manager
// Tester
// Developer
// Guest
// Admin -> Full Application Access
// Manager -> Reports + User Management
// Tester -> Test Management
// Developer -> Development Module
// Guest -> Read Only Access
let role = "Tester";
switch (role) {
    case "Admin":
        console.log(role + " -> Full Application Access");
        break;
    case "Manager":
        console.log(role + " -> Manager -> Reports + User Management");
        break;
    case "Tester":
        console.log(role + " -> Test Management");
        break;
    case "Developer":
        console.log(role + " -> Development Module");
        break;
    case "Guest":
        console.log(role + " -> Read Only Access");
        break;
    default:
        console.log("Please provide a valid role")
}

//31. Select Test Suite Based on Execution Type using Switch-Case.
// Execution Types:
// smoke
// sanity
// regression
// e2e
// smoke -> Executing Smoke Tests
// sanity -> Executing Sanity Tests
// regression -> Executing Regression Tests
// e2e -> Executing End-to-End Tests

let testSuite = "Regression";
switch (testSuite.toLowerCase().trim()) {
    case "smoke":
        console.log(testSuite + " -> Executing Smoke Tests");
        break;
    case "sanity":
        console.log(testSuite + " -> Executing Sanity Tests");
        break;
    case "regression":
        console.log(testSuite + " -> Executing Regression Tests");
        break;
    case "e2e":
        console.log(testSuite + " -> Executing End-to-End Tests");
        break;
    default:
        console.log("Please provide valid testSuite");
}

//32. Select Playwright Browser.
// Browsers:
// chromium
// firefox
// webkit
// chromium -> Launching Chromium
// firefox -> Launching Firefox
// webkit -> Launching WebKit
// Invalid browser -> Unsupported Browser

let PlaywrightBrowser = "Chromium";
switch (PlaywrightBrowser.toLowerCase().trim()) {
    case "chromium":
        console.log(PlaywrightBrowser + " -> Launching Chromium");
        break;
    case "firefox":
        console.log(PlaywrightBrowser + " -> Launching Firefox");
        break;
    case "webkit":
        console.log(PlaywrightBrowser + " -> Launching Webkit");
        break;
    default:
        console.log("Invalid browser -> Unsupported Browser");
}

//33. Environment + User Profile using Nested Switch-Case.
// Environment:
// QA
// STAGE
// PROD
// User Profile:
// admin
// seller
// buyer
// Example:
// Environment: QA
// User: admin
// Expected:
// Running tests in QA
// Login with Admin Profile

let envnmt = "QA";
let usrProf = "buyer";
switch (envnmt) {
    case "QA":
        console.log("Running tests in QA");
        switch (usrProf) {
            case "admin":
                console.log("Login with Admin Profile");
                break;
            case "seller":
                console.log("Login with Seller Profile");
                break;
            case "buyer":
                console.log("Login with Buyer Profile");
                break;
        }
        break;
    case "STAGE":
        console.log("Running tests in STAGE");
        switch (usrProf) {
            case "admin":
                console.log("Login with Admin Profile");
                break;
            case "seller":
                console.log("Login with Seller Profile");
                break;
            case "buyer":
                console.log("Login with Buyer Profile");
                break;
        }
        break;
    case "PROD":
        console.log("Running tests in PROD");
        switch (usrProf) {
            case "admin":
                console.log("Login with Admin Profile");
                break;
            case "seller":
                console.log("Login with Seller Profile");
                break;
            case "buyer":
                console.log("Login with Buyer Profile");
                break;
        }
        break;
}

//34.Environment + Test Type.
// Accept both Environment and Test Type.
// Example:
// Environment: QA
// Test Type: regression
// Expected:
// Running Regression Tests on QA Environment
// Environment:
// QA
// STAGE
// UAT
// PROD
// Test Type:
// Smoke
// Sanity
// Regression
let environmentType = "QA";
let TestType = "Regression";
switch (environmentType) {
    case "QA":
        switch (TestType) {
            case "Smoke":
                console.log("Running Smoke Tests on QA Environment");
                break;
            case "Sanity":
                console.log("Running Sanity Tests on QA Environment");
                break;
            case "Regression":
                console.log("Running Regression Tests on QA Environment");
                break;
        }
        break;
    case "STAGE":
        switch (TestType) {
            case "Smoke":
                console.log("Running Smoke Tests on STAGE Environment");
                break;
            case "Sanity":
                console.log("Running Sanity Tests on STAGE Environment");
                break;
            case "Regression":
                console.log("Running Regression Tests on STAGE Environment");
                break;
        }
        break;
    case "UAT":
        switch (TestType) {
            case "Smoke":
                console.log("Running Smoke Tests on UAT Environment");
                break;
            case "Sanity":
                console.log("Running Sanity Tests on UAT Environment");
                break;
            case "Regression":
                console.log("Running Regression Tests on UAT Environment");
                break;
        }
        break;
    case "PROD":
        switch (TestType) {
            case "Smoke":
                console.log("Running Smoke Tests on PROD Environment");
                break;
            case "Sanity":
                console.log("Running Sanity Tests on PROD Environment");
                break;
            case "Regression":
                console.log("Running Regression Tests on PROD Environment");
                break;
        }
        break;
}