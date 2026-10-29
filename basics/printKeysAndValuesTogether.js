let user = {
    name: "mounii",
    age: 44,
    status: 'active'
};

//to print only keys
let objectKeys = Object.keys(user);
console.log(objectKeys);

//to print only values
let ObjectValues = objectKeys.values(user);
console.log(ObjectValues);

//to print keys and values together
let userPairData = Object.entries(user);
console.log(userPairData);
