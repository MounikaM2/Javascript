let user = {
    name: "Mounii",
    age: 23,
    status: 'active',

}
console.log(typeof user); //this will print object

//1. JS object to JSON conversion:
let jsonValue = JSON.stringify(user);
console.log(jsonValue);
console.log(typeof jsonValue);

let personData = `{
    name: 'viiswa',
    age: 32,
    status: 'Active'
}`;
console.log(personData);
console.log(typeof personData);
let jsobject = JSON.parse(personData); //converts the JSON string to an object.
console.log(jsobject);
console.log(typeof personData);