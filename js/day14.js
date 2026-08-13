// Day 15 - JavaScript Practice
// Student Result System

const students = [
    { name: "Rahul", marks: 85 },
    { name: "Aman", marks: 45 },
    { name: "Priya", marks: 92 },
    { name: "Neha", marks: 67 },
    { name: "Rohit", marks: 38 }
];

// Check Pass / Fail
const results = students.map(student => {
    return {
        name: student.name,
        marks: student.marks,
        result: student.marks >= 40 ? "Pass" : "Fail"
    };
});

// Find students who scored 80+
const toppers = students.filter(student => student.marks >= 80);

// Calculate average marks
const totalMarks = students.reduce(
    (sum, student) => sum + student.marks,
    0
);

const average = totalMarks / students.length;

// Find highest marks
const highest = Math.max(...students.map(student => student.marks));

console.log("Student Results:");
console.log(results);

console.log("Toppers:");
console.log(toppers);

console.log("Average Marks:", average);

console.log("Highest Marks:", highest);