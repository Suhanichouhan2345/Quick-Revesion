// Student Management System
// JavaScript Practice - Day 20

let students = [
    {
        id: 1,
        name: "Rahul Sharma",
        age: 20,
        course: "B.Tech",
        branch: "CSE",
        city: "Bhopal",
        marks: {
            java: 85,
            dsa: 78,
            dbms: 88,
            javascript: 92
        }
    },
    {
        id: 2,
        name: "Priya Verma",
        age: 21,
        course: "B.Tech",
        branch: "IT",
        city: "Indore",
        marks: {
            java: 90,
            dsa: 86,
            dbms: 82,
            javascript: 89
        }
    },
    {
        id: 3,
        name: "Aman Khan",
        age: 22,
        course: "BCA",
        branch: "CSE",
        city: "Gwalior",
        marks: {
            java: 72,
            dsa: 80,
            dbms: 75,
            javascript: 84
        }
    },
    {
        id: 4,
        name: "Neha Singh",
        age: 20,
        course: "B.Tech",
        branch: "CSE",
        city: "Bhopal",
        marks: {
            java: 95,
            dsa: 91,
            dbms: 94,
            javascript: 96
        }
    },
    {
        id: 5,
        name: "Rohit Jain",
        age: 23,
        course: "BCA",
        branch: "IT",
        city: "Raipur",
        marks: {
            java: 68,
            dsa: 74,
            dbms: 70,
            javascript: 79
        }
    }
];


// ----------------------------------------
// 1. Display All Students
// ----------------------------------------

function displayStudents() {

    console.log("\n========== ALL STUDENTS ==========");

    students.forEach((student) => {

        console.log(
            `${student.id}. ${student.name} | ${student.course} | ${student.branch}`
        );

    });
}

displayStudents();


// ----------------------------------------
// 2. Find Student By ID
// ----------------------------------------

function findStudent(id) {

    const student = students.find((student) => {
        return student.id === id;
    });

    if (!student) {
        console.log("Student not found");
        return;
    }

    console.log("\n========== STUDENT FOUND ==========");
    console.log(student);
}

findStudent(3);


// ----------------------------------------
// 3. Students From CSE
// ----------------------------------------

const cseStudents = students.filter((student) => {

    return student.branch === "CSE";

});

console.log("\n========== CSE STUDENTS ==========");
console.log(cseStudents);


// ----------------------------------------
// 4. Students From Bhopal
// ----------------------------------------

const bhopalStudents = students.filter((student) => {

    return student.city === "Bhopal";

});

console.log("\n========== BHOPAL STUDENTS ==========");
console.log(bhopalStudents);


// ----------------------------------------
// 5. Calculate Total Marks
// ----------------------------------------

function calculateTotal(student) {

    return Object.values(student.marks).reduce(
        (total, mark) => total + mark,
        0
    );
}

students.forEach((student) => {

    student.total = calculateTotal(student);

});

console.log("\n========== TOTAL MARKS ==========");
console.log(students);


// ----------------------------------------
// 6. Calculate Percentage
// ----------------------------------------

students.forEach((student) => {

    student.percentage =
        student.total / 4;

});

console.log("\n========== PERCENTAGES ==========");

students.forEach((student) => {

    console.log(
        student.name,
        student.percentage.toFixed(2) + "%"
    );

});


// ----------------------------------------
// 7. Assign Grade
// ----------------------------------------

function getGrade(percentage) {

    if (percentage >= 90) {
        return "A+";
    }

    if (percentage >= 80) {
        return "A";
    }

    if (percentage >= 70) {
        return "B";
    }

    if (percentage >= 60) {
        return "C";
    }

    if (percentage >= 50) {
        return "D";
    }

    return "F";
}

students.forEach((student) => {

    student.grade = getGrade(student.percentage);

});


// ----------------------------------------
// 8. Display Student Result
// ----------------------------------------

console.log("\n========== STUDENT RESULTS ==========");

students.forEach((student) => {

    console.log(
        `${student.name} | ${student.percentage.toFixed(2)}% | Grade: ${student.grade}`
    );

});


// ----------------------------------------
// 9. Find Topper
// ----------------------------------------

const topper = students.reduce((highest, student) => {

    return student.percentage > highest.percentage
        ? student
        : highest;

});

console.log("\n========== TOPPER ==========");
console.log(topper);


// ----------------------------------------
// 10. Find Lowest Scorer
// ----------------------------------------

const lowestScorer = students.reduce((lowest, student) => {

    return student.percentage < lowest.percentage
        ? student
        : lowest;

});

console.log("\n========== LOWEST SCORER ==========");
console.log(lowestScorer);


// ----------------------------------------
// 11. Students Above 80%
// ----------------------------------------

const excellentStudents = students.filter((student) => {

    return student.percentage >= 80;

});

console.log("\n========== ABOVE 80% ==========");
console.log(excellentStudents);


// ----------------------------------------
// 12. Failed Students
// ----------------------------------------

const failedStudents = students.filter((student) => {

    return student.percentage < 50;

});

console.log("\n========== FAILED STUDENTS ==========");
console.log(failedStudents);


// ----------------------------------------
// 13. Sort By Percentage
// ----------------------------------------

const sortedStudents = [...students].sort((a, b) => {

    return b.percentage - a.percentage;

});

console.log("\n========== RANKING ==========");

sortedStudents.forEach((student, index) => {

    console.log(
        `Rank ${index + 1}: ${student.name} - ${student.percentage.toFixed(2)}%`
    );

});


// ----------------------------------------
// 14. Get Only Student Names
// ----------------------------------------

const studentNames = students.map((student) => {

    return student.name;

});

console.log("\n========== STUDENT NAMES ==========");
console.log(studentNames);


// ----------------------------------------
// 15. Find Java Topper
// ----------------------------------------

const javaTopper = students.reduce((highest, student) => {

    return student.marks.java > highest.marks.java
        ? student
        : highest;

});

console.log("\n========== JAVA TOPPER ==========");
console.log(javaTopper);


// ----------------------------------------
// 16. Find DSA Topper
// ----------------------------------------

const dsaTopper = students.reduce((highest, student) => {

    return student.marks.dsa > highest.marks.dsa
        ? student
        : highest;

});

console.log("\n========== DSA TOPPER ==========");
console.log(dsaTopper);


// ----------------------------------------
// 17. Search Student By Name
// ----------------------------------------

function searchStudent(name) {

    const result = students.filter((student) => {

        return student.name
            .toLowerCase()
            .includes(name.toLowerCase());

    });

    console.log("\n========== SEARCH RESULT ==========");
    console.log(result);

}

searchStudent("rahul");


// ----------------------------------------
// 18. Add New Student
// ----------------------------------------

function addStudent(student) {

    students.push(student);

    console.log("\nStudent Added Successfully");

}

addStudent({
    id: 6,
    name: "Vikas Patel",
    age: 21,
    course: "B.Tech",
    branch: "CSE",
    city: "Raipur",
    marks: {
        java: 82,
        dsa: 88,
        dbms: 80,
        javascript: 91
    }
});


// ----------------------------------------
// 19. Update Student Marks
// ----------------------------------------

function updateMarks(id, subject, marks) {

    const student = students.find((student) => {

        return student.id === id;

    });

    if (!student) {

        console.log("Student not found");
        return;

    }

    if (!student.marks[subject]) {

        console.log("Subject not found");
        return;

    }

    student.marks[subject] = marks;

    console.log("Marks updated successfully");

}

updateMarks(2, "java", 95);


// ----------------------------------------
// 20. Delete Student
// ----------------------------------------

function deleteStudent(id) {

    const index = students.findIndex((student) => {

        return student.id === id;

    });

    if (index === -1) {

        console.log("Student not found");
        return;

    }

    students.splice(index, 1);

    console.log("Student deleted successfully");

}

deleteStudent(6);


// ----------------------------------------
// 21. Check Any Student Above 90%
// ----------------------------------------

const topperCheck = students.some((student) => {

    return student.percentage >= 90;

});

console.log(
    "\nAny student above 90%:",
    topperCheck
);


// ----------------------------------------
// 22. Check All Students Passed
// ----------------------------------------

const allPassed = students.every((student) => {

    return student.percentage >= 33;

});

console.log(
    "All students passed:",
    allPassed
);


// ----------------------------------------
// 23. Course Wise Count
// ----------------------------------------

const courseCount = students.reduce((result, student) => {

    if (!result[student.course]) {

        result[student.course] = 0;

    }

    result[student.course]++;

    return result;

}, {});

console.log("\n========== COURSE COUNT ==========");
console.log(courseCount);


// ----------------------------------------
// 24. Branch Wise Count
// ----------------------------------------

const branchCount = students.reduce((result, student) => {

    if (!result[student.branch]) {

        result[student.branch] = 0;

    }

    result[student.branch]++;

    return result;

}, {});

console.log("\n========== BRANCH COUNT ==========");
console.log(branchCount);


// ----------------------------------------
// 25. Average Percentage
// ----------------------------------------

const averagePercentage = students.reduce(
    (total, student) => {

        return total + student.percentage;

    },
    0
) / students.length;

console.log(
    "\nAverage Percentage:",
    averagePercentage.toFixed(2) + "%"
);


// ----------------------------------------
// 26. Final Student Count
// ----------------------------------------

console.log(
    "\nTotal Students:",
    students.length
);


// ----------------------------------------
// 27. Final Data
// ----------------------------------------

console.log("\n========== FINAL STUDENT DATA ==========");
console.log(students);