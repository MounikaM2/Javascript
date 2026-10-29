// 1. Create a Simple Object
// Create a JavaScript object named `student` with the following properties:
// name
// age
// course
// city
// Use the following data:
// Name: Rahul
// Age: 25
// Course: Playwright Automation
// City: Delhi
// Print all the property values using console.log().

let student = {
    name: 'Rahul',
    Age: 25,
    Course: 'Playwright Automation',
    City: 'Delhi'
}
console.log(student.name);
console.log(student.Age);
console.log(student.Course);
console.log(student.City);


// 2. Access Object Properties
// Given:
// let employee = {
// name: "John",
// age: 30,
// department: "QA",
// salary: 75000
// };
// Print the following individually:
// Employee Name:
// Employee Age:
// Employee Department:
// Employee Salary:

// Access the properties using dot notation.

let employee = {
name: "John",
age: 30,
department: "QA",
salary: 75000
};
console.log("Employee Name: " + employee.name);
console.log("Employee Age: " + employee.age);
console.log("Employee Department: " + employee.department);
console.log("Employee Salary: " + employee.salary);

//3. Access Properties Using Bracket Notation
// Using the same `employee` object, access all properties using bracket
// notation.
// For example:
// employee["name"]
console.log("employee name is: " + employee["name"]);
console.log(employee["age"]);
console.log(employee["department"]);
console.log(employee["salary"]);


//4. Add New Properties
// Given:
// let employee = {
// name: "John",
// age: 30,
// department: "QA"
// };
// Add the following properties:
//company: "ABC Technologies"
// experience: 6
// location: "Bangalore"
// Print the updated object.
employee.company = "ABC Technologies";
employee.experience = 6;
employee.location = "Bangalore";
console.log(employee);


//5. 5. Modify Object Properties
// Given:
// let employee = {
// name: "John",
// age: 30,
// salary: 60000

// };
// Perform the following:
// 1. Change age to 31.
// 2. Change salary to 75000.
// 3. Add designation: "Automation Tester".
// Print the updated object.
employee.age = 31;
employee.salary = 75000;
employee.designation = "Automation Tester";
console.log(employee);

//6. Delete Object Properties
// Given:
// let employee = {
// name: "John",
// age: 30,
// department: "QA",
// salary: 75000
// };
// Remove the salary property using the delete operator.
// Print the resulting object.

let employee1 = {
     name: "John",
age: 30,
department: "QA",
salary: 75000
}
delete employee1.salary; //this will remove salary property
console.log(employee1);

//7 Create a Nested Object
// Create an object named `employee` with the following structure:
// let employee = {
// name: "John",
// age: 30,
// address: {
// city: "Bangalore",
// state: "Karnataka",
// country: "India"
// }
// };

// Print:
// Employee Name
// City
// State
// Country

let employee2 = {
name: "John",
age: 30,
address: {
city: "Bangalore",
state: "Karnataka",
country: "India"
}
};

console.log(employee2.name);
console.log(employee2.address.city);
console.log(employee2.address.state);
console.log(employee2.address.country);

//8. Access Nested Object Properties
// Given:
// let student = {
// name: "Rahul",
// course: {
// name: "Playwright Automation",
// duration: "3 Months",
// mode: "Online"
// }
// };
// Print:
// Student Name:
// Course Name:
// Course Duration:
// Course Mode:


let student1 = {
name: "Rahul",
course: {
name: "Playwright Automation",
duration: "3 Months",
mode: "Online"
}
};
console.log(student1.name);
console.log(student1.course.name);
console.log(student1.course.duration);
console.log(student1.course.mode);


//9. Modify Nested Object Properties
// Given:
// let employee = {
// name: "John",
// address: {
// city: "Delhi",
// state: "Delhi"
// }

// };
// Change:
// city → Mumbai
// state → Maharashtra
// Print the updated object.

let employee4 = {
name: "John",
address: {
city: "Delhi",
state: "Delhi"
}
};
employee4.address.city = "Mumbai";
employee4.address.state = "Maharashtra";
console.log(employee4);

//10. Add Properties to a Nested Object
// Given:
// let employee = {
// name: "John",
// address: {
// city: "Delhi"
// }
// };
// Add:
// state: "Delhi"
// country: "India"
// pincode: 110001
// Print the complete object.

 let employee11 = {
name: "John",
address: {
city: "Delhi"
}
};
employee11.address.state = "Delhi";
employee11.address.country = "India";
employee11.address.pincode = 110001;
console.log(employee11);

// 11. Multi-Level Nested Object
// Create an object with the following structure:
// let employee = {
// name: "John",
// company: {
// name: "ABC Technologies",
// location: {
// city: "Bangalore",

// state: "Karnataka",
// country: "India"
// }
// }
// };
// Print:
// Employee Name
// Company Name
// City
// State
// Country

let employee3 = {
name: "John",
company: {
name: "ABC Technologies",
location: {
city: "Bangalore",
state: "Karnataka",
country: "India"
}
}
};
console.log(employee3.name);
console.log(employee3.company.name);
console.log(employee3.company.location.city);
console.log(employee3.company.location.state);
console.log(employee3.company.location.country);

//12. Nested Object with Multiple Objects
// Create the following object:
// let employee = {
// name: "John",
// personalDetails: {
// age: 30,
// gender: "Male"
// },
// professionalDetails: {
// designation: "Automation Tester",
// experience: 6
// }
// };
// Print all the values from the object.
let employee10 = {
name: "John",
personalDetails: {
age: 30,
gender: "Male"
},
professionalDetails: {
designation: "Automation Tester",
experience: 6
}
};
console.log(employee10.name);
console.log(employee10.personalDetails.age);
console.log(employee10.personalDetails.gender);
console.log(employee10.professionalDetails.designation);
console.log(employee10.professionalDetails.designation);
console.log(employee10.professionalDetails.experience);

// 14. Convert JSON String to JavaScript Object
// Given the following JSON string:
// let jsonData = '{"name":"John","age":30,"department":"QA"}';
// Convert it into a JavaScript object using:
// JSON.parse()
// Then print:
// Name
// Age
// Department
let jsonData = '{"name":"John","age":30,"department":"QA"}';
let jsobject = JSON.parse(jsonData); //this converts JSON text to JS object.
console.log(jsobject.name);
console.log(jsobject.age);
console.log(jsobject.department);

//15. Convert JavaScript Object to JSON
// let employee = {
// name: "John",
// age: 30,
// department: "QA"

// };
// Convert the JavaScript object into a JSON string using:
// JSON.stringify()
// Print the result.

let employee12 = {
name: "John",
age: 30,
department: "QA"
};
let jsontext = JSON.stringify(employee12); //this converts JS object to JSON text.
console.log(jsontext);

