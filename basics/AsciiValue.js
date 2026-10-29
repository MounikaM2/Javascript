// A-Z = 65-90
//a-z = 97-122
//0-9= 48-57
console.log("A".charCodeAt(0)); //It will give the result as 65 because the ASCII value of A is 65.
console.log("a".charCodeAt(0)); //It will give the result as 97 because the ASCII value of a is 97.
console.log("0".charCodeAt(0)); //It will give the result as 48 because the ASCII value of 0 is 48.
console.log("9".charCodeAt(0)); //It will give the result as 57 because the ASCII value of 9 is 57.
console.log("&".charCodeAt(0)); //It will give the result as 38 because the ASCII value of & is 38.
console.log("ABCD".charCodeAt(1)); //It will give the result as 66 because the ASCII value of B is 66.
console.log("ABCD".charCodeAt(2)); //It will give the result as 67 because the ASCII value of C is 67.
console.log("ABCD".charCodeAt(3)); //It will give the result as 68 because the ASCII value of D is 68.
console.log("abcd".charCodeAt(4)); //It will give the result as NaN because the index 4 is out of range for the string "abcd".
console.log("A".charCodeAt(0) + "B".charCodeAt(0)); //It will give the result as 131 because the ASCII value of A is 65 and B is 66 and their sum is 131.  
