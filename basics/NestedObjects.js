//nested objects are mainly used in api automation
let user = {
    name: "Mounii",
    age: 23,
    status: 'active',

    address: {
        flatnumber: 123,
strretname: "abcd street",
landmark: 'near main building'
    }
}

console.log(user.name);
console.log(user.address.flatnumber);
//we can also write this way to fetch
console.log(user['address'].landmark);