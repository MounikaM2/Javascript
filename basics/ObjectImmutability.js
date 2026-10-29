let user = {
    empName: "Mouni",
    age: 34,
    status: 'active',
    postalcode: 'k1s3e9'
}

//immutability means we cannot chnage the state of the object
console.log(user.empName);


//Method1: freeze();
// Object.freeze(user); //with the freeze method, we cannot add, delete or modify
//adding a property
// user.city = "Ottawa";

//updating a property
// user.empName = "visswa";
// console.log(user.empName);

//deleting a property
// delete user.status;
// console.log(user);

//Method 2: seal()
Object.seal(user);
user.empName = "Dk"; //we can modify the property with seal method
// user.city = "Ott"; //with the seal method we cannot add or delete properties but we can modify
console.log(user); 




