const students = [
  {
    id: 1,
    name: "Suhani",
    course: "CSE",
    marks: 85,
    city: "Bhopal"
  },
  {
    id: 2,
    name: "Rahul",
    course: "CSE",
    marks: 72,
    city: "Indore"
  },
  {
    id: 3,
    name: "Priya",
    course: "IT",
    marks: 91,
    city: "Bhopal"
  },
  {
    id: 4,
    name: "Ankit",
    course: "CSE",
    marks: 65,
    city: "Gwalior"
  },
  {
    id: 5,
    name: "Neha",
    course: "IT",
    marks: 78,
    city: "Indore"
  }
];

// 1. Display all students
function displayStudents() {
  students.forEach((student) => {
    console.log(
      `${student.id} - ${student.name} - ${student.marks}`
    );
  });
}

// 2. Students who scored 80+
function getTopStudents() {
  return students.filter((student) => student.marks >= 80);
}

// 3. Get only student names
function getStudentNames() {
  return students.map((student) => student.name);
}

// 4. Calculate total marks
function getTotalMarks() {
  return students.reduce((total, student) => {
    return total + student.marks;
  }, 0);
}

// 5. Calculate average marks
function getAverageMarks() {
  let total = getTotalMarks();

  return total / students.length;
}

// 6. Find student by ID
function findStudent(id) {
  return students.find((student) => student.id === id);
}

// 7. CSE students
function getCSEStudents() {
  return students.filter((student) => student.course === "CSE");
}

// 8. Bhopal students
function getBhopalStudents() {
  return students.filter((student) => student.city === "Bhopal");
}

// 9. Sort students by marks
function sortByMarks() {
  return [...students].sort((a, b) => b.marks - a.marks);
}

// 10. Find topper
function getTopper() {
  return students.reduce((topper, student) => {
    return student.marks > topper.marks ? student : topper;
  });
}


// ---------- OUTPUT ----------

console.log("===== ALL STUDENTS =====");
displayStudents();

console.log("\n===== TOP STUDENTS =====");
console.log(getTopStudents());

console.log("\n===== STUDENT NAMES =====");
console.log(getStudentNames());

console.log("\n===== TOTAL MARKS =====");
console.log(getTotalMarks());

console.log("\n===== AVERAGE MARKS =====");
console.log(getAverageMarks());

console.log("\n===== FIND STUDENT =====");
console.log(findStudent(3));

console.log("\n===== CSE STUDENTS =====");
console.log(getCSEStudents());

console.log("\n===== BHOPAL STUDENTS =====");
console.log(getBhopalStudents());

console.log("\n===== SORTED BY MARKS =====");
console.log(sortByMarks());

console.log("\n===== TOPPER =====");
console.log(getTopper());