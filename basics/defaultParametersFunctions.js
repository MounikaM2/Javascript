function login(username, password, role = "admin") { //here role="admin" is the default parameter
    console.log(username,password,role)
}
login("nltech@gmail.com", "nltech", "seller"); //in this case it will override the role of admin to seller 

//rest parameters:
function selectCountry(...countryName){
console.log(countryName);
}
selectCountry("US", "CAN", "IND", "AUS");