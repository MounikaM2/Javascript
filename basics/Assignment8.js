//Create a function insertAt(array, index, elements) that uses splice() to insert multiple elements at a specific index.

function insertAt(array, index, elements) {
array.splice(index, 0, ...elements);
return array;
}

//eg:
let arr = [1, 2, 3];
insertAt(arr, 1, ['a', 'b']);
console.log(arr);  // [1, 'a', 'b', 2, 3]


//1. Shopping Cart Manager:
// Create an array with 5 products

// Remove the product at index 2
// Add 2 new products at that position
// Remove the last product
// Print the final cart


let array = ['apple', 'microsoft', 'google', 'tesla', 'netflix'];
array.splice(2, 1, 'nbis', 'spcx');
array.splice(-1, 1); //it removes last element
console.log(array);

//3. 2. Playlist Editor:
// Start with an array of 6 song names
// Remove songs from index 2 to 4
// Add 3 new songs at index 2
// Replace the first song with a new one
// Show the playlist after each operation

// answer: 

let array1 = ['abcd', 'efgh', 'hijk', 'lmno', 'pqrs', 'tuvw'];
array1.splice(2, 3, 'gdveh', 'crfr', 'crrf');
array1.splice(0,1,'gvyhb');
console.log(array1);

//1. Write a program that:
// • Creates an array of 5 browser names
// • Uses a for...of loop to find if 'Chrome' exists
// • If found, print "Chrome browser found!" and stop the loop

let browsers = ['Chrome', 'Firefox', 'Opera', 'Edge', 'Safari'];

for (let browser of browsers) {
    if (browser === 'Chrome') {
        console.log("Chrome browser found!");
        break;
    }
}

//2. Create a function that takes an array of words and returns a sentence by joining them with spaces.
// Test with: (['I', 'love', 'JavaScript']

let array2 = ['I', 'love', 'JavaScript'];
let sentence = array2.join(" "); //join method adds all the elements into a string.
console.log(sentence);

//3. Write a program that:
// • Creates an array of employee data with mixed data types (name, age, salary, isActive)
// • Prints each element with its index using for...in loop
// • Format: "Index 0: John"
let array3 = ["Mouni", 32, 324323, true];
for(let i in array3){
    console.log("Index "+ i + ": "+ array3[i]);
}

//4. Create a shopping cart system:

// • Start with an empty array
// • Add 3 items using push()
// • Remove the last item
// • Add an item at the beginning
// • Join all items with commas and print as "Shopping List: item1, item2, item3"

let array4 = [];
array4.push("phone", "case", "battery");
array4.pop();
array4.unshift("watch");
console.log("ShoppingList: " + array4.join(", "));