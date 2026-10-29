//concept of switch case
let browser = "firefox ";
//trim is a method that only trims the spaces before and after the word and not between the characters.
switch (browser.toLowerCase().trim()) {
    case "firefox":
        console.log("launch all scripts in firefox browser");
        break;
    case "edge":
        console.log("launch all scripts in edge browser");
        break;
    case "opera":
        console.log("launch all scripts in opera");
        break;
    case "chrome":
        console.log("launch all scripts in chrome");
        break;
    default:
        console.log("This browser is not supported");
        break;
}
console.log("Enter the url of the browser");

//In js, we can have duplicate cases but it only picks whatever comes first and ignore the second one and we cannot write default twice-only once default is allowed in switch case.
let browser1 = "chrome";
switch (browser1) {
    case "firefox":
        console.log("launch all scripts in firefox browser");
        break;
    case "edge":
        console.log("launch all scripts in edge browser");
        break;
    case "opera":
        console.log("launch all scripts in opera");
        break;
    case "chrome":
        console.log("launch all scripts in chrome1");
        break;
    case "chrome":
        console.log("launch all scripts in chrome2");
        break;
    default:
        console.log("This browser is not supported");
        break;
}
console.log("Enter the url of the browser");

//write a program to print if the given letter is vowel or consonant
//vowels=a,e,i,o,u
//consonants=anything apart from vowels is a consonant

let letter = "j";
switch (letter.toLowerCase()) {
    case "a":
        console.log("given letter is a vowel");
        break;
    case "e":
        console.log("given letter is a vowel");
        break;
    case "i":
        console.log("given letter is a vowel");
        break;
    case "o":
        console.log("given letter is a vowel");
        break;
    case "u":
        console.log("given letter is a vowel");
        break;
    default:
        console.log("given letter is consonant:" + letter);
}

//practical uses of switch cases: 
// Cross-browser execution — selecting the browser driver or launch configuration (Chrome, Firefox, Safari) based on a parameter passed to the test run.
// Cross-platform support — branching OS-specific setup or locator behavior when the same suite runs on Windows, macOS, or mobile platforms.
// Multi-environment testing — mapping environment names (QA, staging, production) to their base URLs, credentials, and test data.
// Payment flow coverage — routing test logic through different payment method paths (credit card, PayPal, e-transfer) in e-commerce or insurance premium flows.
//Role-based access testing — switching on user roles (admin, manager, guest) to load the right credentials and verify each role sees only what it's allowed to.
//API test routing — branching on the HTTP method (GET, POST, PUT, DELETE) to apply the right assertions, like checking response bodies for GET but confirming resource state changes for PUT and DELETE.


//practical uses of ief else:
//Conditional setup — if an element or popup appears, handle it; else continue (cookie banners, login modals).
//Feature flags — if a flag is enabled in config, run the new flow; else run the legacy one.
//Test result handling — if the API returns an empty list, assert the empty state UI; else validate the populated rows.
//Environment guards — if running in production, skip destructive tests (like cancelling real policies); else run the full suite.
//Data validation — if a field is optional and present, validate its format; else skip it.
//Retry/fallback logic — if the primary locator fails, try a fallback; else fail the test.
