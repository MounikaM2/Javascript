let arr = [ [1,2,3],
[4,5,6,7,8],
[9,10,11,12,13,14]
];
console.log(arr.length); //this will print 3 because it has 3 rows. basically number of rows defines the length of an array.
console.log(arr[1].length); //this will give the result as 5 because the 2nd row contains 5 elements.
console.log(arr[1][0]); //this will give the result as 4 because 4 is present at the 1st row and 0th index.

//for loop with index approach:
for(let i=0; i<=arr.length-1; i++){
    //for value i=0, j will run 3 times
    //for value i=1, j will run 5 times
    //for value i=2; j will run 6 times
for(let j=0; j<=arr[i].length-1; j++) {
console.log(arr[i][j]);
}
}