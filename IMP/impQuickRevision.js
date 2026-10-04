// 1. Variables
let name = "Suhani";
const age = 20;
var city = "Bhopal";

// 2. Data Types
let str = "Hello";       // String
let num = 10;            // Number
let bool = true;         // Boolean
let x;                   // Undefined
let y = null;             // Null

// 3. Conditions
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// 4. Ternary
let result = age >= 18 ? "Adult" : "Minor";

// 5. Loops
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// 6. Function
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));

// 7. Arrow Function
const multiply = (a, b) => {
    return a * b;
};

// Short form
const square = n => n * n;

// 8. Array
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[0]);

fruits.push("Orange");
fruits.pop();
fruits.shift();
fruits.unshift("Grapes");

// 9. Array Methods
let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(n => n * 2);

let even = numbers.filter(n => n % 2 === 0);

let found = numbers.find(n => n > 3);

let sum = numbers.reduce((total, n) => total + n, 0);

// 10. Object
let student = {
    name: "Suhani",
    age: 20,
    course: "B.Tech"
};

console.log(student.name);
console.log(student["age"]);

// 11. Destructuring
const { name, course } = student;

const [a, b] = numbers;

// 12. Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];

let student2 = {
    ...student,
    city: "Bhopal"
};

// 13. Template Literal
console.log(`My name is ${name}`);

// 14. String Methods
let text = "JavaScript";

console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.includes("Script"));
console.log(text.slice(0, 4));

// 15. DOM
const heading = document.querySelector("h1");

heading.textContent = "Hello JavaScript";
heading.style.color = "red";

// 16. Event
const button = document.querySelector("button");

button.addEventListener("click", () => {
    alert("Button clicked!");
});

// 17. Local Storage
localStorage.setItem("name", "Suhani");

let savedName = localStorage.getItem("name");

localStorage.removeItem("name");

// 18. JSON
let user = {
    name: "Suhani",
    age: 20
};

let jsonData = JSON.stringify(user);

let normalObject = JSON.parse(jsonData);

// 19. Promise
const promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});

// 20. Async / Await
async function getData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}