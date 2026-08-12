// Student Management System
// GitHub Practice Project

const students = [
    {
        id: 1,
        name: "Rahul",
        age: 21,
        course: "Java",
        marks: [85, 78, 92, 88, 76],
        city: "Bhopal"
    },
    {
        id: 2,
        name: "Priya",
        age: 20,
        course: "JavaScript",
        marks: [91, 87, 95, 89, 93],
        city: "Indore"
    },
    {
        id: 3,
        name: "Aman",
        age: 22,
        course: "Python",
        marks: [72, 68, 81, 75, 79],
        city: "Gwalior"
    },
    {
        id: 4,
        name: "Neha",
        age: 21,
        course: "Java",
        marks: [95, 91, 89, 94, 96],
        city: "Bhopal"
    },
    {
        id: 5,
        name: "Rohit",
        age: 23,
        course: "MERN",
        marks: [78, 82, 75, 80, 85],
        city: "Jabalpur"
    }
];

// Calculate total marks
function calculateTotal(marks) {
    return marks.reduce((total, mark) => total + mark, 0);
}

// Calculate average
function calculateAverage(marks) {
    return calculateTotal(marks) / marks.length;
}

// Calculate grade
function calculateGrade(average) {
    if (average >= 90) {
        return "A+";
    } else if (average >= 80) {
        return "A";
    } else if (average >= 70) {
        return "B";
    } else if (average >= 60) {
        return "C";
    } else {
        return "D";
    }
}

// Add calculated information
students.forEach(student => {
    student.total = calculateTotal(student.marks);
    student.average = calculateAverage(student.marks);
    student.grade = calculateGrade(student.average);
});

// Display all students
function displayStudents(data) {
    console.log("\n========== STUDENT LIST ==========\n");

    data.forEach(student => {
        console.log(`ID       : ${student.id}`);
        console.log(`Name     : ${student.name}`);
        console.log(`Age      : ${student.age}`);
        console.log(`Course   : ${student.course}`);
        console.log(`City     : ${student.city}`);
        console.log(`Marks    : ${student.marks.join(", ")}`);
        console.log(`Total    : ${student.total}`);
        console.log(`Average  : ${student.average.toFixed(2)}`);
        console.log(`Grade    : ${student.grade}`);
        console.log("----------------------------------");
    });
}

// Find student by ID
function findStudentById(id) {
    return students.find(student => student.id === id);
}

// Find students by course
function findByCourse(course) {
    return students.filter(
        student => student.course.toLowerCase() === course.toLowerCase()
    );
}

// Find students by city
function findByCity(city) {
    return students.filter(
        student => student.city.toLowerCase() === city.toLowerCase()
    );
}

// Find students who passed
function getPassedStudents() {
    return students.filter(student => student.average >= 60);
}

// Find students who failed
function getFailedStudents() {
    return students.filter(student => student.average < 60);
}

// Find topper
function findTopper() {
    return students.reduce((topper, student) => {
        return student.average > topper.average ? student : topper;
    });
}

// Sort students by marks
function sortByMarks() {
    return [...students].sort((a, b) => b.average - a.average);
}

// Search student by name
function searchStudent(name) {
    return students.filter(student =>
        student.name.toLowerCase().includes(name.toLowerCase())
    );
}

// Get course statistics
function courseStatistics() {
    const courses = {};

    students.forEach(student => {
        if (!courses[student.course]) {
            courses[student.course] = {
                students: 0,
                totalMarks: 0
            };
        }

        courses[student.course].students++;
        courses[student.course].totalMarks += student.average;
    });

    Object.keys(courses).forEach(course => {
        const data = courses[course];

        data.average = data.totalMarks / data.students;
    });

    return courses;
}

// Add new student
function addStudent(name, age, course, marks, city) {
    const newStudent = {
        id: students.length + 1,
        name,
        age,
        course,
        marks,
        city
    };

    newStudent.total = calculateTotal(marks);
    newStudent.average = calculateAverage(marks);
    newStudent.grade = calculateGrade(newStudent.average);

    students.push(newStudent);

    console.log(`\n${name} added successfully!`);
}

// Remove student
function removeStudent(id) {
    const index = students.findIndex(student => student.id === id);

    if (index === -1) {
        console.log("Student not found!");
        return;
    }

    const removedStudent = students.splice(index, 1);

    console.log(
        `${removedStudent[0].name} removed successfully!`
    );
}

// Update student marks
function updateMarks(id, newMarks) {
    const student = findStudentById(id);

    if (!student) {
        console.log("Student not found!");
        return;
    }

    student.marks = newMarks;
    student.total = calculateTotal(newMarks);
    student.average = calculateAverage(newMarks);
    student.grade = calculateGrade(student.average);

    console.log(`${student.name}'s marks updated successfully!`);
}


// -----------------------------
// PROGRAM EXECUTION
// -----------------------------

displayStudents(students);

console.log("\n========== FIND STUDENT ==========\n");

const student = findStudentById(2);
console.log(student);

console.log("\n========== JAVA STUDENTS ==========\n");

const javaStudents = findByCourse("Java");
console.log(javaStudents);

console.log("\n========== BHOPAL STUDENTS ==========\n");

const bhopalStudents = findByCity("Bhopal");
console.log(bhopalStudents);

console.log("\n========== PASSED STUDENTS ==========\n");

console.log(getPassedStudents());

console.log("\n========== TOPPER ==========\n");

const topper = findTopper();
console.log(
    `Topper: ${topper.name} - ${topper.average.toFixed(2)}%`
);

console.log("\n========== SORTED STUDENTS ==========\n");

const sortedStudents = sortByMarks();

sortedStudents.forEach((student, index) => {
    console.log(
        `${index + 1}. ${student.name} - ${student.average.toFixed(2)}%`
    );
});

console.log("\n========== SEARCH ==========\n");

console.log(searchStudent("rah"));

console.log("\n========== COURSE STATISTICS ==========\n");

console.log(courseStatistics());

console.log("\n========== ADD STUDENT ==========\n");

addStudent(
    "Sakshi",
    20,
    "Java",
    [88, 91, 85, 90, 87],
    "Bhopal"
);

console.log("\n========== UPDATE MARKS ==========\n");

updateMarks(
    1,
    [90, 92, 88, 95, 91]
);

console.log("\n========== REMOVE STUDENT ==========\n");

removeStudent(5);

console.log("\n========== FINAL STUDENT LIST ==========\n");

displayStudents(students);