let product = {
    name: "imac",
    brand: "apple",
    price: 2000,
    availability: 'available'
}

function getProductDetails(productdata) {
console.log(productdata);
}

getProductDetails(product); //calling a function by passing the object reference. CALL BY REFERENCE.

