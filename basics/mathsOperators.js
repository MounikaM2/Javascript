console.log(1+1);
console.log(1+"1"); //It will give the result as 11 because of the concatenation of a number and a string.
console.log("1"+1); 
console.log("1"+"1"); //It will give the result as 11 because of the concatenation of two strings.
console.log(1-1);
console.log("1"-1);
console.log('1'-1);
console.log('8'-'5'); //It will give the result as 3 because of the subtraction of two strings.
console.log('5'-'Mounika'); //It will give the result as NaN because 'Mounika' is not a number and it cannot be converted to a number.
console.log('Mounika'-4); //It will give the result as NaN because 'Mounika' is not a number and it cannot be converted to a number.
console.log(5*'2'); //It will give the result as 10 because of the multiplication of a number and a string.
console.log("3"+ "4"); //It will give the result as 34 because of the concatenation of two strings.
//anything other than + operator with a string is converted to a number and then the operation is performed. If the string cannot be converted to a number, it will give NaN as the result.


let price=1000;
console.log(price+5); //Jt will the result as 1005 because of the addition of two numbers.
console.log(price+"5"); //It will give the result as 10005
console.log(price-"5"); //It will give the result as 995 because of the subtraction of two numbers. In javascript, the string "5" is converted to a number 5 and then the subtraction is performed.


//few other concepts with division operator
console.log(9/0); //It will give the result as Infinity because of the division of a number by 0.
console.log(-9/0); //It will give the result as -Infinity because of the division of a negative number by 0.
console.log(0/0); //It will give the result as NaN because of the division by 0/0 in javascript.
console.log(0/9); //It will give the result as 0 because 0 divided by any number is 0 in javascript.
console.log(3.4/0); //It will give the result as Infinity because of the division of a number by 0.

//modulus operator
console.log(10%3); //It will give the result as 1 because 10 divided by 3 gives a remainder of 1.
console.log(10.0%3) //It will give the result as 1 because 10.0 divided by 3 gives a remainder of 1.