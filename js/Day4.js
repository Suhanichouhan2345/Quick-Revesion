const students = [
  { id: 1, name: "Suhani", marks: 88, course: "Java" },
  { id: 2, name: "Riya", marks: 76, course: "MERN" },
  { id: 3, name: "Ankit", marks: 92, course: "Java" },
  { id: 4, name: "Priya", marks: 64, course: "MERN" },
  { id: 5, name: "Rahul", marks: 81, course: "Java" }
];

// 1. Students who scored 80 or more
const toppers = students.filter(student => student.marks >= 80);

console.log("Toppers:");
console.log(toppers);

// 2. Get only student names
const names = students.map(student => student.name);

console.log("\nStudent Names:");
console.log(names);

// 3. Calculate total marks
const totalMarks = students.reduce((sum, student) => {
  return sum + student.marks;
}, 0);

console.log("\nTotal Marks:", totalMarks);

// 4. Calculate average marks
const averageMarks = totalMarks / students.length;

console.log("Average Marks:", averageMarks.toFixed(2));

// 5. Sort students by marks
const sortedStudents = [...students].sort((a, b) => b.marks - a.marks);

console.log("\nStudents Sorted By Marks:");
console.log(sortedStudents);

// 6. Find Java students
const javaStudents = students.filter(student => {
  return student.course === "Java";
});

console.log("\nJava Students:");
console.log(javaStudents);

// 7. Find student with highest marks
const highest = students.reduce((max, student) => {
  return student.marks > max.marks ? student : max;
});

console.log("\nHighest Scorer:");
console.log(highest);

// 8. Add result to every student
const result = students.map(student => {
  return {
    ...student,
    result: student.marks >= 40 ? "PASS" : "FAIL"
  };
});

console.log("\nFinal Result:");
console.log(result);
