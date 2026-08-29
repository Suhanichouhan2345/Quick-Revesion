
// Student Management System

let students = [
  {
    id: 1,
    name: "Rahul",
    age: 20,
    course: "Java",
    marks: 85
  },
  {
    id: 2,
    name: "Priya",
    age: 21,
    course: "JavaScript",
    marks: 92
  },
  {
    id: 3,
    name: "Aman",
    age: 19,
    course: "Python",
    marks: 76
  },
  {
    id: 4,
    name: "Sneha",
    age: 20,
    course: "JavaScript",
    marks: 88
  },
  {
    id: 5,
    name: "Vikas",
    age: 22,
    course: "Java",
    marks: 69
  }
];

// Display all students
function showStudents() {
  console.log("\n===== ALL STUDENTS =====");

  students.forEach((student) => {
    console.log(
      `${student.id}. ${student.name} | ${student.course} | Marks: ${student.marks}`
    );
  });
}

// Add student
function addStudent(name, age, course, marks) {
  const newStudent = {
    id: students.length + 1,
    name,
    age,
    course,
    marks
  };

  students.push(newStudent);

  console.log(`\n${name} added successfully.`);
}

// Find student by ID
function findStudent(id) {
  const student = students.find(
    (student) => student.id === id
  );

  if (student) {
    console.log("\nStudent Found:");
    console.log(student);
  } else {
    console.log("\nStudent not found.");
  }
}

// Filter students by course
function filterByCourse(course) {
  const result = students.filter(
    (student) =>
      student.course.toLowerCase() === course.toLowerCase()
  );

  console.log(`\n===== ${course} STUDENTS =====`);

  if (result.length === 0) {
    console.log("No students found.");
    return;
  }

  result.forEach((student) => {
    console.log(
      `${student.name} - Marks: ${student.marks}`
    );
  });
}

// Find students who passed
function getPassedStudents() {
  const passed = students.filter(
    (student) => student.marks >= 40
  );

  console.log("\n===== PASSED STUDENTS =====");

  passed.forEach((student) => {
    console.log(`${student.name} - ${student.marks}`);
  });
}

// Calculate average marks
function calculateAverage() {
  const total = students.reduce(
    (sum, student) => sum + student.marks,
    0
  );

  const average = total / students.length;

  console.log(`\nAverage Marks: ${average.toFixed(2)}`);
}

// Find topper
function findTopper() {
  const topper = students.reduce(
    (top, student) =>
      student.marks > top.marks ? student : top
  );

  console.log(
    `\nTopper: ${topper.name} - ${topper.marks} marks`
  );
}

// Sort students by marks
function sortByMarks() {
  const sortedStudents = [...students].sort(
    (a, b) => b.marks - a.marks
  );

  console.log("\n===== STUDENTS BY MARKS =====");

  sortedStudents.forEach((student) => {
    console.log(
      `${student.name} - ${student.marks}`
    );
  });
}

// Update marks
function updateMarks(id, newMarks) {
  const student = students.find(
    (student) => student.id === id
  );

  if (!student) {
    console.log("\nStudent not found.");
    return;
  }

  student.marks = newMarks;

  console.log(
    `\n${student.name}'s marks updated to ${newMarks}`
  );
}

// Delete student
function deleteStudent(id) {
  const index = students.findIndex(
    (student) => student.id === id
  );

  if (index === -1) {
    console.log("\nStudent not found.");
    return;
  }

  const deletedStudent = students.splice(index, 1);

  console.log(
    `\n${deletedStudent[0].name} deleted successfully.`
  );
}


// ========== TESTING ==========

showStudents();

addStudent("Neha", 21, "React", 95);

showStudents();

findStudent(3);

filterByCourse("JavaScript");

getPassedStudents();

calculateAverage();

findTopper();

sortByMarks();

updateMarks(5, 82);

deleteStudent(2);

showStudents();

calculateAverage();
