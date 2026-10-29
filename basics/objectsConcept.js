//data types of objects in javascript are non-primitive which means they dont have fixed memory and thye are dynamic in nature.
//objects are the collection of properties which are representated by the key and value pair.
let user = {
    empName: "Mounika",
    age: 32,
    status: 'active',
    salary: 30000.47
} //here user is a object reference variable which has collection of properties on the right side which is known as object.
console.log(typeof user); //it will give the result as object.
console.log(user);
console.log(user.empName + "," + user.age); //one way of fetching the values using keys
console.log(user['empName'] + "," + user['age']); //another way of fetching the values using keys
//to add another key value pair 
user.postalcode = "k1s3e9";
user.city = "Ottawa";
console.log(user);
//to delete any key value pair, we can provide the key like below.
delete user.salary;
delete user.age;
console.log(user);

//for..in loop to fetch the data:
for(let emp in user){
    console.log(emp + "==>" + user[emp]);
}

//null reference object
let user2= {
    empName: "Viswa",
    age:33,
    salary: 45678,
    status: 'active'
}
user2=null;
console.log(user2.empName); //will get an typeerror: cannot read properties of null.

