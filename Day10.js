// Student Result Management System

const students = [
    { id: 1, name: "Rahul", course: "Java", marks: 85 },
    { id: 2, name: "Aman", course: "JavaScript", marks: 72 },
    { id: 3, name: "Riya", course: "Java", marks: 91 },
    { id: 4, name: "Neha", course: "Python", marks: 68 },
    { id: 5, name: "Arjun", course: "JavaScript", marks: 88 },
    { id: 6, name: "Priya", course: "Python", marks: 95 }
];

// 1. Display all students
console.log("----- All Students -----");

students.forEach((student) => {
    console.log(
        `${student.id}. ${student.name} - ${student.course} - ${student.marks}`
    );
});

// 2. Students who scored 80 or more
const toppers = students.filter((student) => student.marks >= 80);

console.log("\n----- Toppers -----");
console.log(toppers);

// 3. Find student by name
const student = students.find((student) => student.name === "Riya");

console.log("\n----- Search Result -----");
console.log(student);

// 4. Add 5 bonus marks
const updatedStudents = students.map((student) => {
    return {
        ...student,
        marks: student.marks + 5
    };
});

console.log("\n----- After Bonus Marks -----");
console.log(updatedStudents);

// 5. Calculate average marks
const totalMarks = students.reduce((total, student) => {
    return total + student.marks;
}, 0);

const average = totalMarks / students.length;

console.log("\nAverage Marks:", average.toFixed(2));

// 6. Find highest marks
const highestMarks = Math.max(
    ...students.map((student) => student.marks)
);

console.log("\nHighest Marks:", highestMarks);

// 7. Sort students by marks
const sortedStudents = [...students].sort((a, b) => b.marks - a.marks);

console.log("\n----- Ranking -----");

sortedStudents.forEach((student, index) => {
    console.log(
        `${index + 1}. ${student.name} - ${student.marks}`
    );
});

// 8. Group students according to result
const result = students.map((student) => {
    let grade;

    if (student.marks >= 90) {
        grade = "A+";
    } else if (student.marks >= 80) {
        grade = "A";
    } else if (student.marks >= 70) {
        grade = "B";
    } else if (student.marks >= 60) {
        grade = "C";
    } else {
        grade = "D";
    }

    return {
        name: student.name,
        marks: student.marks,
        grade: grade
    };
});

console.log("\n----- Final Result -----");
console.log(result);