//An Array is a data structure that can hold more than one value at a time. It is a collection of similar data types. 
//In JS, there is no ocncept of static arrays, we only have dynamic arrays in JS. We can add or remove elements from an array at any time.
//In JS, we dont have any concept of object arrays.

//three ways to declate arrays in JS
//1. direct declaration:
let a = []; //empty array
console.log(a.length); //It will give result as 0 because there are no elements in the array.
let arr = [3, 8, 9, 10];
console.log(arr.length); //It will give the result as 4 because there are 4 elements in the array.
console.log(arr[-4]); //It will give the result as undefined because there is no element at index -4 in the array. 
arr[10] = 100; //It will add the element 100 at index 10 in the array.
console.log(arr.length); //It will give the result as 11 because there are 11 elements in the array.
console.log(arr); //It will give the result as [3, 8, 9, 10, <6 empty items>, 100]
console.log(arr[6]); //I will give the result as undefined because there is no element at index 6 in the array.
arr[0] = 13; //It will change the element at index 0 from 3 to 13.
console.log(arr[0]); //It will give the result as 13 because we have changed the element at index 0 from 3 to 13.
console.log(typeof arr); //It will give the result as object because arrays are objects in JS.
//we cannot redeclare the array variable using let keyword but we can reassign the array variable using let keyword.
arr = [20, 30, 40];
console.log(arr); //It will give the result as [20, 30, 40] because we have reassigned the array variable arr to a new array [20, 30, 40].

const arr2 = [1, 2, 3, 4];
console.log(arr2);
// arr2=[5,6,7,8]; //It will give an type error because we cannot reassign a const variable.

let arr3 = ["Mounika", 31, 423674674773, "abcd"];
console.log(arr3.length);
console.log(arr3);

//2. using arrays constructor:
let arr4 = new Array(10, 20, 30, 40, 50);
console.log(arr4.length);
console.log(arr4);

let arr5 = new Array("Mounika", 31, 34567332, "cbch");
console.log(arr5.length);
console.log(arr5);
console.log(typeof arr5);
console.log(arr5[2]);

//3. array.of() method:
let arr6 = Array.of("abcd", "efgh", 12, 45, 67);
console.log(arr6.length);
console.log(arr6);
console.log(typeof arr6);
console.log(arr6[3]);

//why do JS arrays are dynamic in nature?
//we can add more elements to the array at runtime and we can remove elements from the array at runtime. We can also change the elements of the array at runtime. This is why JS arrays are dynamic in nature.
arr6.push(100); //It will add the element 100 at the end of the array.
console.log(arr6.length);
console.log(arr6);

arr6.unshift(200); //It will add the element 200 at the beginning of the array.
console.log(arr6.length);
console.log(arr6);

let removedValue = arr6.pop(); //It will remove the last element from the array.
console.log(removedValue); //It will give the result as 100 because we have removed the last element from the array.
console.log("array length after removing the element: " + arr6.length);
let RemoveFirstElement = arr6.shift(); //it will remove the first element from the array.
console.log(RemoveFirstElement);

//quick notes: 
//push- adds an element at the end of the array.
//unshift- adds an element at the beginning of the array.
//pop- removes the last element from the array.
//shift- removes the first element from the array.

//normal for loop to print the elements of the array:
for (let i = 0; i <= arr6.length - 1; i++) {
    console.log(arr6[i]);
}

//for..of loop to print the elements of the array:
for (let element of arr6) {
    console.log(element);
}

//for..in loop to print the elements of the array:
for (let element in arr6) {
    console.log(element); //It will print the index of elements of the array.
}

//to print index and value of the array using for..in loop:
for (let element in arr6) {
    console.log(element + " ==> " + arr6[element]);
}

//very important Array methods:
let empName = ["Mounika", "viswa", "Dhrithi"];
console.log(empName);
empName.reverse();
console.log(empName);
let sentence = empName.join("-"); //it adds all the elements of an array into a string, seperated by -
console.log(sentence);
console.log(typeof sentence);

let arr1 = [1, 2, 3, 4];
let arr9 = [5, 6, 7, 8];
let addingOfTwoArrays = [...arr1, ...arr9]; //this is known as spread operator
console.log(addingOfTwoArrays);
console.log(typeof addingOfTwoArrays);

//another method to concat arrays
let arr10 = arr1.concat((arr9));
console.log(arr10);
console.log(typeof arr10);

let fruits = ['apple', 'banana', 'orange', 'mango'];
console.log(fruits);
// fruits.splice(1,1) //it removes the specific index value: it removes the 1 index value and one element.
console.log(fruits);
// fruits.splice(1,2) //it removes the 2 index values from index 1.
console.log(fruits);
fruits.splice(1, 2, "papaya", "watermelon") //this way it adds the removed 2 eleemnts by "papaya" and "watermelon";
console.log(fruits);

//to get the index value of the particular element 
console.log(fruits.indexOf("papaya"));
console.log(fruits.indexOf("musk"));

//to check if the array contains a particular value or not
console.log(fruits.includes("apple")); //it will return true because the array contains apple.

let languages = "Java_Javascript_python_swift";
let splittedarray = languages.split("_"); //this will split the string into substrings based on _ and return them as array.
console.log(splittedarray);
console.log(typeof splittedarray); //it returns object because array is an object.

let normalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let slicedArray = normalArray.slice(2, 5);
console.log(slicedArray);
let Last3Values = normalArray.slice(-3);
console.log(Last3Values);

// let message = ["Hi", "this", "is", "my", "javascript"];
//to print in reverse
// for (let i = message.length - 1; i >= 0; i--) {
//     console.log(message[i]);
// }

//to print each element reverese in array
let message = ["Hi", "this", "is", "my", "javascript"];
let result = [];
for(let i=message.length-1; i>=0; i--) {
let word = message[i];
let reversedword = "";
for(let j=word.length-1; j>=0; j--) {
reversedword = reversedword + word[j];
}
result.push(reversedword);
}
console.log(result);
