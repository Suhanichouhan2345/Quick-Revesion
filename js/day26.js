// ==========================================
//      STUDENT MANAGEMENT SYSTEM
// ==========================================

let students = [
    {
        id: 1,
        name: "Rahul Sharma",
        age: 20,
        course: "CSE",
        city: "Bhopal",
        marks: 85,
        attendance: 92
    },
    {
        id: 2,
        name: "Priya Singh",
        age: 21,
        course: "IT",
        city: "Indore",
        marks: 91,
        attendance: 95
    },
    {
        id: 3,
        name: "Aman Verma",
        age: 20,
        course: "CSE",
        city: "Gwalior",
        marks: 72,
        attendance: 78
    },
    {
        id: 4,
        name: "Neha Patel",
        age: 22,
        course: "ECE",
        city: "Bhopal",
        marks: 88,
        attendance: 89
    },
    {
        id: 5,
        name: "Rohit Jain",
        age: 21,
        course: "CSE",
        city: "Indore",
        marks: 64,
        attendance: 71
    },
    {
        id: 6,
        name: "Anjali Mehta",
        age: 20,
        course: "IT",
        city: "Bhopal",
        marks: 95,
        attendance: 97
    },
    {
        id: 7,
        name: "Vikas Yadav",
        age: 22,
        course: "ME",
        city: "Jabalpur",
        marks: 58,
        attendance: 69
    },
    {
        id: 8,
        name: "Sneha Gupta",
        age: 21,
        course: "CSE",
        city: "Bhopal",
        marks: 82,
        attendance: 90
    }
];


// ==========================================
// 1. DISPLAY ALL STUDENTS
// ==========================================

function displayStudents() {

    console.log("\n===== ALL STUDENTS =====");

    students.forEach((student) => {

        console.log(
            `${student.id}. ${student.name} | ${student.course} | ${student.marks} Marks`
        );

    });
}

displayStudents();


// ==========================================
// 2. FIND STUDENT BY ID
// ==========================================

function findStudent(id) {

    const student = students.find((student) => {
        return student.id === id;
    });

    if (student) {

        console.log("\n===== STUDENT FOUND =====");
        console.log(student);

    } else {

        console.log("\nStudent not found");

    }
}

findStudent(4);


// ==========================================
// 3. FILTER CSE STUDENTS
// ==========================================

function getCSEStudents() {

    const result = students.filter((student) => {
        return student.course === "CSE";
    });

    console.log("\n===== CSE STUDENTS =====");
    console.log(result);
}

getCSEStudents();


// ==========================================
// 4. FILTER STUDENTS FROM BHOPAL
// ==========================================

function getBhopalStudents() {

    const result = students.filter((student) => {
        return student.city === "Bhopal";
    });

    console.log("\n===== BHOPAL STUDENTS =====");
    console.log(result);
}

getBhopalStudents();


// ==========================================
// 5. STUDENTS WITH MARKS GREATER THAN 80
// ==========================================

function getTopStudents() {

    const result = students.filter((student) => {
        return student.marks >= 80;
    });

    console.log("\n===== TOP STUDENTS =====");
    console.log(result);

}

getTopStudents();


// ==========================================
// 6. STUDENT NAMES USING MAP
// ==========================================

function getStudentNames() {

    const names = students.map((student) => {
        return student.name;
    });

    console.log("\n===== STUDENT NAMES =====");
    console.log(names);

}

getStudentNames();


// ==========================================
// 7. CALCULATE TOTAL MARKS
// ==========================================

function totalMarks() {

    const total = students.reduce((sum, student) => {

        return sum + student.marks;

    }, 0);

    console.log("\nTotal Marks:", total);
}

totalMarks();


// ==========================================
// 8. CALCULATE AVERAGE MARKS
// ==========================================

function averageMarks() {

    const total = students.reduce((sum, student) => {
        return sum + student.marks;
    }, 0);

    const average = total / students.length;

    console.log("\nAverage Marks:", average.toFixed(2));
}

averageMarks();


// ==========================================
// 9. HIGHEST MARKS
// ==========================================

function highestMarks() {

    const student = students.reduce((max, current) => {

        return current.marks > max.marks
            ? current
            : max;

    });

    console.log("\n===== HIGHEST MARKS =====");
    console.log(student);

}

highestMarks();


// ==========================================
// 10. LOWEST MARKS
// ==========================================

function lowestMarks() {

    const student = students.reduce((min, current) => {

        return current.marks < min.marks
            ? current
            : min;

    });

    console.log("\n===== LOWEST MARKS =====");
    console.log(student);

}

lowestMarks();


// ==========================================
// 11. SORT BY MARKS HIGH TO LOW
// ==========================================

function sortByMarks() {

    const sorted = [...students].sort((a, b) => {

        return b.marks - a.marks;

    });

    console.log("\n===== SORTED BY MARKS =====");
    console.log(sorted);

}

sortByMarks();


// ==========================================
// 12. SORT BY NAME
// ==========================================

function sortByName() {

    const sorted = [...students].sort((a, b) => {

        return a.name.localeCompare(b.name);

    });

    console.log("\n===== SORTED BY NAME =====");
    console.log(sorted);

}

sortByName();


// ==========================================
// 13. CHECK IF ANY STUDENT FAILED
// ==========================================

function checkFailedStudents() {

    const failed = students.some((student) => {

        return student.marks < 40;

    });

    console.log("\nAny student failed?", failed);

}

checkFailedStudents();


// ==========================================
// 14. CHECK ATTENDANCE
// ==========================================

function checkAttendance() {

    const result = students.filter((student) => {

        return student.attendance < 75;

    });

    console.log("\n===== LOW ATTENDANCE =====");
    console.log(result);

}

checkAttendance();


// ==========================================
// 15. COUNT CSE STUDENTS
// ==========================================

function countCSEStudents() {

    const count = students.filter((student) => {

        return student.course === "CSE";

    }).length;

    console.log("\nTotal CSE Students:", count);

}

countCSEStudents();


// ==========================================
// 16. ADD NEW STUDENT
// ==========================================

function addStudent(
    name,
    age,
    course,
    city,
    marks,
    attendance
) {

    const newStudent = {

        id: students.length + 1,
        name: name,
        age: age,
        course: course,
        city: city,
        marks: marks,
        attendance: attendance

    };

    students.push(newStudent);

    console.log("\n===== STUDENT ADDED =====");
    console.log(newStudent);
}

addStudent(
    "Karan Malviya",
    21,
    "CSE",
    "Bhopal",
    87,
    91
);


// ==========================================
// 17. DELETE STUDENT
// ==========================================

function deleteStudent(id) {

    const index = students.findIndex((student) => {

        return student.id === id;

    });

    if (index !== -1) {

        const deletedStudent = students.splice(index, 1);

        console.log("\n===== STUDENT DELETED =====");
        console.log(deletedStudent[0]);

    } else {

        console.log("\nStudent not found");

    }
}

deleteStudent(7);


// ==========================================
// 18. UPDATE STUDENT MARKS
// ==========================================

function updateMarks(id, newMarks) {

    const student = students.find((student) => {

        return student.id === id;

    });

    if (student) {

        student.marks = newMarks;

        console.log("\n===== MARKS UPDATED =====");
        console.log(student);

    } else {

        console.log("\nStudent not found");

    }
}

updateMarks(3, 81);


// ==========================================
// 19. SEARCH STUDENT BY NAME
// ==========================================

function searchStudent(keyword) {

    const result = students.filter((student) => {

        return student.name
            .toLowerCase()
            .includes(keyword.toLowerCase());

    });

    console.log("\n===== SEARCH RESULT =====");
    console.log(result);

}

searchStudent("rahul");


// ==========================================
// 20. COURSE WISE STUDENT COUNT
// ==========================================

function courseWiseCount() {

    const result = {};

    students.forEach((student) => {

        if (!result[student.course]) {

            result[student.course] = 0;

        }

        result[student.course]++;

    });

    console.log("\n===== COURSE WISE COUNT =====");
    console.log(result);

}

courseWiseCount();


// ==========================================
// 21. CITY WISE STUDENT COUNT
// ==========================================

function cityWiseCount() {

    const result = {};

    students.forEach((student) => {

        if (!result[student.city]) {

            result[student.city] = 0;

        }

        result[student.city]++;

    });

    console.log("\n===== CITY WISE COUNT =====");
    console.log(result);

}

cityWiseCount();


// ==========================================
// 22. GRADE CALCULATOR
// ==========================================

function calculateGrade(marks) {

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


// ==========================================
// 23. DISPLAY GRADES
// ==========================================

function displayGrades() {

    console.log("\n===== STUDENT GRADES =====");

    students.forEach((student) => {

        const grade = calculateGrade(student.marks);

        console.log(
            `${student.name} -> ${student.marks} -> Grade ${grade}`
        );

    });

}

displayGrades();


// ==========================================
// 24. STUDENTS WHO PASSED
// ==========================================

function passedStudents() {

    const result = students.filter((student) => {

        return student.marks >= 50;

    });

    console.log("\n===== PASSED STUDENTS =====");
    console.log(result);

}

passedStudents();


// ==========================================
// 25. FINAL REPORT
// ==========================================

function finalReport() {

    const totalStudents = students.length;

    const totalMarks = students.reduce((sum, student) => {

        return sum + student.marks;

    }, 0);

    const average = totalMarks / totalStudents;

    const topper = students.reduce((max, student) => {

        return student.marks > max.marks
            ? student
            : max;

    });

    console.log("\n");
    console.log("======================================");
    console.log("        STUDENT FINAL REPORT");
    console.log("======================================");

    console.log("Total Students :", totalStudents);
    console.log("Average Marks  :", average.toFixed(2));
    console.log("Topper         :", topper.name);
    console.log("Topper Marks   :", topper.marks);

    console.log("======================================");
    console.log("       PROGRAM COMPLETED");
    console.log("======================================");

}

finalReport();