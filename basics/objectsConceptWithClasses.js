class Product{
    constructor(name, price){
this.name = name;
this.price = price; //assigning the global variable to the local variable.
    }
}

//creating a object of a class
let product1 = new Product("iPhone", 1200)
console.log(product1.name + ":" + product1.price);
console.log(product1);