/**
 * 
 * @param {string} custName 
 */
function getProductName(custName) {
    console.log("cust name is:"+ custName);
    let product = [];
    switch (custName.toLowerCase().trim()) {
        case "mounika":
            product.push("moisturiser");
            product.push("toner");
            product.push("cleanser");
            break;
        case "dk":
            product.push("car");
            product.push("bike");
            product.push("watch");
            break;
        case "visw":
            product.push("imac");
            product.push("iphone");
            product.push("watch");
            break;
        default:
            console.log("please provide valid custName");
            break;
    }
    return product;
}
let result = getProductName("dk");
console.log(result);

let result1 = getProductName("nehh");
console.log(result1);