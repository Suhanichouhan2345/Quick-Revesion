// ===============================
// JAVASCRIPT QUICK REVISION
// ===============================


// 1. VARIABLES
let name = "Suhani";
const age = 20;
var city = "Bhopal";

console.log(name);
console.log(age);
console.log(city);


// 2. DATA TYPES
let str = "Hello";       // String
let num = 10;            // Number
let bool = true;         // Boolean
let value;               // Undefined
let empty = null;        // Null

console.log(typeof str);
console.log(typeof num);


// 3. OPERATORS
let a = 10;
let b = 5;

console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Remainder


// 4. IF ELSE
let marks = 75;

if (marks >= 60) {
    console.log("First Division");
} else {
    console.log("Second Division");
}


// 5. TERNARY OPERATOR
let ageCheck = 20;

let result = ageCheck >= 18 ? "Adult" : "Minor";

console.log(result);


// 6. FOR LOOP
for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// 7. WHILE LOOP
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}


// ===============================
// FUNCTIONS
// ===============================


// 8. NORMAL FUNCTION
function greet() {
    console.log("Hello JavaScript");
}

greet();


// 9. FUNCTION WITH PARAMETER
function welcome(name) {
    console.log("Hello " + name);
}

welcome("Suhani");


// 10. FUNCTION WITH RETURN
function add(x, y) {
    return x + y;
}

let sum = add(10, 20);

console.log(sum);


// 11. MULTIPLE PARAMETERS
function multiply(a, b) {
    return a * b;
}

console.log(multiply(5, 4));


// 12. DEFAULT PARAMETER
function sayHello(name = "User") {
    console.log("Hello " + name);
}

sayHello();
sayHello("Suhani");


// 13. FUNCTION EXPRESSION
const subtract = function (a, b) {
    return a - b;
};

console.log(subtract(20, 10));


// 14. ARROW FUNCTION
const square = (n) => {
    return n * n;
};

console.log(square(5));


// 15. SHORT ARROW FUNCTION
const cube = n => n * n * n;

console.log(cube(3));


// 16. FUNCTION CALLING ANOTHER FUNCTION
function calculate(a, b) {
    return add(a, b);
}

console.log(calculate(10, 20));


// 17. ARRAY
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits);
console.log(fruits[0]);


// 18. ARRAY METHODS
fruits.push("Orange");       // Add at end
fruits.pop();                // Remove from end
fruits.unshift("Grapes");    // Add at beginning
fruits.shift();              // Remove from beginning

console.log(fruits);


// 19. MAP
let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(n => n * 2);

console.log(doubled);


// 20. FILTER
let evenNumbers = numbers.filter(n => n % 2 === 0);

console.log(evenNumbers);


// 21. FIND
let found = numbers.find(n => n > 3);

console.log(found);


// 22. REDUCE
let total = numbers.reduce((sum, n) => sum + n, 0);

console.log(total);


// 23. OBJECT
let student = {
    name: "Suhani",
    age: 20,
    course: "B.Tech"
};

console.log(student.name);
console.log(student.age);


// 24. OBJECT DESTRUCTURING
const { name: studentName, course } = student;

console.log(studentName);
console.log(course);


// 25. ARRAY DESTRUCTURING
let nums = [10, 20, 30];

const [first, second, third] = nums;

console.log(first);
console.log(second);
console.log(third);


// 26. SPREAD OPERATOR
let arr1 = [1, 2, 3];

let arr2 = [...arr1, 4, 5];

console.log(arr2);


// 27. TEMPLATE LITERAL
let userName = "Suhani";

console.log(`Hello ${userName}`);


// 28. STRING METHODS
let text = "JavaScript";

console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.includes("Script"));
console.log(text.slice(0, 4));


// 29. JSON
let user = {
    name: "Suhani",
    age: 20
};

let jsonData = JSON.stringify(user);

console.log(jsonData);

let normalObject = JSON.parse(jsonData);

console.log(normalObject);


// 30. PROMISE
const promise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});

promise
    .then(result => console.log(result))
    .catch(error => console.log(error));


// 31. ASYNC / AWAIT
async function getData() {

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.log(error);
    }
}


// 32. CALLBACK FUNCTION
function calculateNumber(a, b, callback) {

    let result = a + b;

    callback(result);
}

calculateNumber(10, 20, function (result) {
    console.log(result);
});