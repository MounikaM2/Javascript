//Grading system in schools.
let num = 85;
if (num >= 90) {
    console.log("Grade A");
    if (num >= 95) {
        console.log("You are eligible for membership")
        if (num == 100) {
            console.log("You are a gold medalist")
        }
    }
} else {
    console.log("You are not eligible for 100% membership")
    if (num <= 80) {
        console.log("Grade B");
        if (num <= 70) {
            console.log("Grade C");
            if(num<40){
                console.log("you are failed...");
            }
        }
    }
    else {
        console.log("since your number is between 81-89, you are eligible for only 50% membership");
    }
} 