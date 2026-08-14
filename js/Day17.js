// Day 14 - Employee Management System

const employees = [
    {
        id: 101,
        name: "Rahul Sharma",
        department: "Development",
        designation: "Frontend Developer",
        salary: 55000,
        experience: 2,
        city: "Indore",
        skills: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: 102,
        name: "Priya Verma",
        department: "Development",
        designation: "Backend Developer",
        salary: 72000,
        experience: 3,
        city: "Bhopal",
        skills: ["Node.js", "Express", "MongoDB"]
    },
    {
        id: 103,
        name: "Aman Singh",
        department: "Testing",
        designation: "QA Engineer",
        salary: 48000,
        experience: 2,
        city: "Gwalior",
        skills: ["Manual Testing", "Selenium"]
    },
    {
        id: 104,
        name: "Neha Gupta",
        department: "HR",
        designation: "HR Manager",
        salary: 68000,
        experience: 5,
        city: "Bhopal",
        skills: ["Recruitment", "Communication"]
    },
    {
        id: 105,
        name: "Rohit Jain",
        department: "Development",
        designation: "Full Stack Developer",
        salary: 85000,
        experience: 4,
        city: "Indore",
        skills: ["JavaScript", "React", "Node.js", "MongoDB"]
    },
    {
        id: 106,
        name: "Sneha Patel",
        department: "Design",
        designation: "UI/UX Designer",
        salary: 60000,
        experience: 3,
        city: "Ujjain",
        skills: ["Figma", "UI Design", "UX Design"]
    },
    {
        id: 107,
        name: "Vikas Yadav",
        department: "Development",
        designation: "Java Developer",
        salary: 75000,
        experience: 3,
        city: "Gwalior",
        skills: ["Java", "Spring Boot", "MySQL"]
    }
];

// 1. Display all employees
function displayEmployees() {
    console.log("========== ALL EMPLOYEES ==========");

    employees.forEach((employee) => {
        console.log(
            `${employee.id} - ${employee.name} - ${employee.designation} - ₹${employee.salary}`
        );
    });
}

// 2. Find employee by ID
function findEmployee(id) {
    const employee = employees.find((employee) => {
        return employee.id === id;
    });

    if (employee) {
        console.log("\n========== EMPLOYEE FOUND ==========");
        console.log(employee);
    } else {
        console.log("\nEmployee not found");
    }
}

// 3. Filter Development department
function getDevelopers() {
    const developers = employees.filter((employee) => {
        return employee.department === "Development";
    });

    console.log("\n========== DEVELOPMENT TEAM ==========");
    console.log(developers);
}

// 4. Employees having salary above 70000
function highSalaryEmployees() {
    const result = employees.filter((employee) => {
        return employee.salary > 70000;
    });

    console.log("\n========== HIGH SALARY EMPLOYEES ==========");
    console.log(result);
}

// 5. Calculate total salary
function calculateTotalSalary() {
    const totalSalary = employees.reduce((total, employee) => {
        return total + employee.salary;
    }, 0);

    console.log("\nTotal Salary:", totalSalary);
}

// 6. Calculate average salary
function calculateAverageSalary() {
    const totalSalary = employees.reduce((total, employee) => {
        return total + employee.salary;
    }, 0);

    const average = totalSalary / employees.length;

    console.log("\nAverage Salary:", average.toFixed(2));
}

// 7. Find highest paid employee
function highestPaidEmployee() {
    const employee = employees.reduce((highest, current) => {
        return current.salary > highest.salary ? current : highest;
    });

    console.log("\n========== HIGHEST PAID ==========");
    console.log(employee);
}

// 8. Find most experienced employee
function mostExperienced() {
    const employee = employees.reduce((experienced, current) => {
        return current.experience > experienced.experience
            ? current
            : experienced;
    });

    console.log("\n========== MOST EXPERIENCED ==========");
    console.log(employee);
}

// 9. Get employee names using map
function getEmployeeNames() {
    const names = employees.map((employee) => {
        return employee.name;
    });

    console.log("\n========== EMPLOYEE NAMES ==========");
    console.log(names);
}

// 10. Sort employees by salary
function sortBySalary() {
    const sorted = [...employees].sort((a, b) => {
        return b.salary - a.salary;
    });

    console.log("\n========== SALARY SORTED ==========");
    sorted.forEach((employee) => {
        console.log(`${employee.name} - ₹${employee.salary}`);
    });
}

// 11. Find employees from Bhopal
function getBhopalEmployees() {
    const result = employees.filter((employee) => {
        return employee.city === "Bhopal";
    });

    console.log("\n========== BHOPAL EMPLOYEES ==========");
    console.log(result);
}

// 12. Find employees having Node.js skill
function getNodeDevelopers() {
    const result = employees.filter((employee) => {
        return employee.skills.includes("Node.js");
    });

    console.log("\n========== NODE.JS DEVELOPERS ==========");
    console.log(result);
}

// 13. Department-wise employee count
function departmentCount() {
    const departments = employees.reduce((result, employee) => {

        if (!result[employee.department]) {
            result[employee.department] = 0;
        }

        result[employee.department]++;

        return result;
    }, {});

    console.log("\n========== DEPARTMENT COUNT ==========");
    console.log(departments);
}

// 14. Employees with experience >= 3 years
function experiencedEmployees() {
    const result = employees
        .filter((employee) => {
            return employee.experience >= 3;
        })
        .map((employee) => {
            return {
                name: employee.name,
                experience: employee.experience,
                designation: employee.designation
            };
        });

    console.log("\n========== EXPERIENCED EMPLOYEES ==========");
    console.log(result);
}

// Calling functions

displayEmployees();

findEmployee(105);

getDevelopers();

highSalaryEmployees();

calculateTotalSalary();

calculateAverageSalary();

highestPaidEmployee();

mostExperienced();

getEmployeeNames();

sortBySalary();

getBhopalEmployees();

getNodeDevelopers();

departmentCount();

experiencedEmployees();