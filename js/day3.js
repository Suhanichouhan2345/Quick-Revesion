const students = [
  { name: "Suhani", marks: [85, 78, 92, 88] },
  { name: "Aman", marks: [72, 81, 69, 75] },
  { name: "Riya", marks: [95, 91, 89, 94] },
  { name: "Rahul", marks: [60, 67, 72, 65] },
  { name: "Neha", marks: [88, 84, 90, 86] }
];

// Calculate total and percentage
const result = students.map((student) => {
  const total = student.marks.reduce((sum, mark) => sum + mark, 0);
  const percentage = total / student.marks.length;

  let grade;

  if (percentage >= 90) {
    grade = "A+";
  } else if (percentage >= 80) {
    grade = "A";
  } else if (percentage >= 70) {
    grade = "B";
  } else if (percentage >= 60) {
    grade = "C";
  } else {
    grade = "D";
  }

  return {
    name: student.name,
    total: total,
    percentage: percentage.toFixed(2),
    grade: grade
  };
});

console.log("Student Results:");
console.table(result);

// Students scoring above 80%
const topStudents = result.filter(
  (student) => Number(student.percentage) >= 80
);

console.log("\nStudents above 80%:");
console.table(topStudents);

// Find topper
const topper = result.reduce((best, student) => {
  return Number(student.percentage) > Number(best.percentage)
    ? student
    : best;
});

console.log("\nTopper:");
console.log(topper);

// Average percentage of all students
const average =
  result.reduce(
    (sum, student) => sum + Number(student.percentage),
    0
  ) / result.length;

console.log("\nClass Average:", average.toFixed(2) + "%");