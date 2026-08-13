// Day 13 - JavaScript Practice
// Array Methods: map, filter, reduce

const students = [
    { name: "Rahul", marks: 85 },
    { name: "Priya", marks: 72 },
    { name: "Aman", marks: 91 },
    { name: "Neha", marks: 64 },
    { name: "Rohit", marks: 78 }
];

// Students who scored 75+
const passedStudents = students.filter(student => student.marks >= 75);

// Add 5 bonus marks
const bonusMarks = students.map(student => ({
    ...student,
    marks: student.marks + 5
}));

// Calculate total marks
const totalMarks = students.reduce(
    (total, student) => total + student.marks,
    0
);

console.log("Passed Students:");
console.log(passedStudents);

console.log("Marks after Bonus:");
console.log(bonusMarks);

console.log("Total Marks:", totalMarks);