let students = [
    {
        id: 1,
        name: "Rahul",
        age: 20,
        course: "CSE",
        marks: 85,
        city: "Bhopal"
    },
    {
        id: 2,
        name: "Priya",
        age: 21,
        course: "IT",
        marks: 72,
        city: "Indore"
    },
    {
        id: 3,
        name: "Aman",
        age: 19,
        course: "CSE",
        marks: 91,
        city: "Gwalior"
    },
    {
        id: 4,
        name: "Neha",
        age: 20,
        course: "ECE",
        marks: 68,
        city: "Bhopal"
    },
    {
        id: 5,
        name: "Rohit",
        age: 22,
        course: "CSE",
        marks: 77,
        city: "Jabalpur"
    }
];


// ------------------------------------
// 1. Show All Students
// ------------------------------------

function showStudents() {
    console.log("\n===== ALL STUDENTS =====");

    students.forEach((student) => {
        console.log(
            `ID: ${student.id} | Name: ${student.name} | Course: ${student.course} | Marks: ${student.marks}`
        );
    });
}


// ------------------------------------
// 2. Add Student
// ------------------------------------

function addStudent(name, age, course, marks, city) {

    const newStudent = {
        id: students.length + 1,
        name,
        age,
        course,
        marks,
        city
    };

    students.push(newStudent);

    console.log("\nStudent added successfully!");
}


// ------------------------------------
// 3. Find Student By ID
// ------------------------------------

function findStudent(id) {

    const student = students.find((student) => {
        return student.id === id;
    });

    if (student) {
        console.log("\nStudent Found:");
        console.log(student);
    } else {
        console.log("\nStudent not found!");
    }

    return student;
}


// ------------------------------------
// 4. Filter By Course
// ------------------------------------

function filterByCourse(course) {

    const result = students.filter((student) => {
        return student.course.toLowerCase() === course.toLowerCase();
    });

    console.log(`\n===== ${course} STUDENTS =====`);

    result.forEach((student) => {
        console.log(
            `${student.name} - ${student.marks} marks`
        );
    });

    return result;
}


// ------------------------------------
// 5. Filter By City
// ------------------------------------

function filterByCity(city) {

    const result = students.filter((student) => {
        return student.city.toLowerCase() === city.toLowerCase();
    });

    console.log(`\n===== STUDENTS FROM ${city} =====`);

    result.forEach((student) => {
        console.log(
            `${student.name} - ${student.course}`
        );
    });

    return result;
}


// ------------------------------------
// 6. Students With Marks Above 80
// ------------------------------------

function topStudents() {

    const result = students.filter((student) => {
        return student.marks >= 80;
    });

    console.log("\n===== TOP STUDENTS =====");

    result.forEach((student) => {
        console.log(
            `${student.name} - ${student.marks}`
        );
    });

    return result;
}


// ------------------------------------
// 7. Calculate Average Marks
// ------------------------------------

function averageMarks() {

    const total = students.reduce((sum, student) => {
        return sum + student.marks;
    }, 0);

    const average = total / students.length;

    console.log(
        "\nAverage Marks:",
        average.toFixed(2)
    );

    return average;
}


// ------------------------------------
// 8. Highest Marks
// ------------------------------------

function highestMarks() {

    const topper = students.reduce((max, student) => {

        return student.marks > max.marks
            ? student
            : max;

    });

    console.log("\n===== TOPPER =====");

    console.log(
        `${topper.name} scored ${topper.marks} marks`
    );

    return topper;
}


// ------------------------------------
// 9. Lowest Marks
// ------------------------------------

function lowestMarks() {

    const lowest = students.reduce((min, student) => {

        return student.marks < min.marks
            ? student
            : min;

    });

    console.log("\n===== LOWEST MARKS =====");

    console.log(
        `${lowest.name} scored ${lowest.marks} marks`
    );

    return lowest;
}


// ------------------------------------
// 10. Sort Students By Marks
// ------------------------------------

function sortByMarks() {

    const sortedStudents = [...students].sort(
        (a, b) => b.marks - a.marks
    );

    console.log("\n===== SORTED BY MARKS =====");

    sortedStudents.forEach((student) => {

        console.log(
            `${student.name} -> ${student.marks}`
        );

    });

    return sortedStudents;
}


// ------------------------------------
// 11. Update Student
// ------------------------------------

function updateStudent(id, newMarks, newCity) {

    const student = students.find((student) => {
        return student.id === id;
    });

    if (!student) {
        console.log("\nStudent not found!");
        return;
    }

    student.marks = newMarks;
    student.city = newCity;

    console.log("\nStudent updated successfully!");
}


// ------------------------------------
// 12. Delete Student
// ------------------------------------

function deleteStudent(id) {

    const index = students.findIndex((student) => {
        return student.id === id;
    });

    if (index === -1) {
        console.log("\nStudent not found!");
        return;
    }

    students.splice(index, 1);

    console.log("\nStudent deleted successfully!");
}


// ------------------------------------
// 13. Search Student
// ------------------------------------

function searchStudent(keyword) {

    const result = students.filter((student) => {

        return (
            student.name
                .toLowerCase()
                .includes(keyword.toLowerCase())
            ||
            student.course
                .toLowerCase()
                .includes(keyword.toLowerCase())
            ||
            student.city
                .toLowerCase()
                .includes(keyword.toLowerCase())
        );

    });

    console.log(
        `\n===== SEARCH RESULT: ${keyword} =====`
    );

    result.forEach((student) => {

        console.log(
            `${student.name} | ${student.course} | ${student.city}`
        );

    });

    return result;
}


// ------------------------------------
// 14. Grade Calculator
// ------------------------------------

function getGrade(marks) {

    if (marks >= 90) {
        return "A+";
    }

    if (marks >= 80) {
        return "A";
    }

    if (marks >= 70) {
        return "B";
    }

    if (marks >= 60) {
        return "C";
    }

    if (marks >= 50) {
        return "D";
    }

    return "F";
}


// ------------------------------------
// 15. Display Students With Grades
// ------------------------------------

function showGrades() {

    console.log("\n===== STUDENT GRADES =====");

    students.forEach((student) => {

        const grade = getGrade(student.marks);

        console.log(
            `${student.name} -> ${student.marks} -> Grade ${grade}`
        );

    });
}


// ------------------------------------
// 16. Course Wise Student Count
// ------------------------------------

function courseCount() {

    const result = {};

    students.forEach((student) => {

        if (result[student.course]) {
            result[student.course]++;
        } else {
            result[student.course] = 1;
        }

    });

    console.log("\n===== COURSE COUNT =====");

    Object.entries(result).forEach(
        ([course, count]) => {

            console.log(
                `${course}: ${count} students`
            );

        }
    );

    return result;
}


// ------------------------------------
// 17. Students Who Passed
// ------------------------------------

function passedStudents() {

    const result = students.filter((student) => {
        return student.marks >= 40;
    });

    console.log("\n===== PASSED STUDENTS =====");

    result.forEach((student) => {

        console.log(
            `${student.name} - ${student.marks}`
        );

    });

    return result;
}


// ------------------------------------
// 18. Students Who Failed
// ------------------------------------

function failedStudents() {

    const result = students.filter((student) => {
        return student.marks < 40;
    });

    console.log("\n===== FAILED STUDENTS =====");

    if (result.length === 0) {
        console.log("No student failed.");
    }

    result.forEach((student) => {

        console.log(
            `${student.name} - ${student.marks}`
        );

    });

    return result;
}


// ------------------------------------
// TESTING
// ------------------------------------

showStudents();

addStudent(
    "Sakshi",
    20,
    "CSE",
    88,
    "Bhopal"
);

showStudents();

findStudent(3);

filterByCourse("CSE");

filterByCity("Bhopal");

topStudents();

averageMarks();

highestMarks();

lowestMarks();

sortByMarks();

searchStudent("CSE");

showGrades();

courseCount();

passedStudents();

failedStudents();

updateStudent(
    2,
    82,
    "Bhopal"
);

showStudents();

deleteStudent(4);

showStudents();