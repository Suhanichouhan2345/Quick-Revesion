// Employee Management System
// JavaScript Practice - Day 16

let employees = [
    {
        id: 1,
        name: "Rahul Sharma",
        age: 24,
        department: "Development",
        designation: "Frontend Developer",
        salary: 55000,
        experience: 2,
        city: "Bhopal",
        skills: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: 2,
        name: "Priya Verma",
        age: 26,
        department: "Development",
        designation: "Backend Developer",
        salary: 70000,
        experience: 4,
        city: "Indore",
        skills: ["Node.js", "Express", "MongoDB"]
    },
    {
        id: 3,
        name: "Aman Khan",
        age: 28,
        department: "Testing",
        designation: "QA Engineer",
        salary: 60000,
        experience: 5,
        city: "Bhopal",
        skills: ["Manual Testing", "Selenium", "Java"]
    },
    {
        id: 4,
        name: "Neha Singh",
        age: 23,
        department: "HR",
        designation: "HR Executive",
        salary: 45000,
        experience: 2,
        city: "Gwalior",
        skills: ["Communication", "Management"]
    },
    {
        id: 5,
        name: "Rohit Jain",
        age: 30,
        department: "Development",
        designation: "Full Stack Developer",
        salary: 85000,
        experience: 7,
        city: "Bhopal",
        skills: ["JavaScript", "React", "Node.js", "MongoDB"]
    },
    {
        id: 6,
        name: "Anjali Gupta",
        age: 27,
        department: "Design",
        designation: "UI/UX Designer",
        salary: 65000,
        experience: 4,
        city: "Indore",
        skills: ["Figma", "UI Design", "UX Design"]
    }
];

// --------------------------------------------------
// 1. Display All Employees
// --------------------------------------------------

function displayEmployees() {
    console.log("\n========== ALL EMPLOYEES ==========");

    employees.forEach((employee) => {
        console.log(
            employee.id,
            employee.name,
            employee.designation,
            employee.salary
        );
    });
}

displayEmployees();


// --------------------------------------------------
// 2. Find Employee By ID
// --------------------------------------------------

function findEmployee(id) {
    const employee = employees.find((employee) => {
        return employee.id === id;
    });

    if (!employee) {
        console.log("Employee not found");
        return;
    }

    console.log("\nEmployee Found:");
    console.log(employee);
}

findEmployee(3);


// --------------------------------------------------
// 3. Get All Developers
// --------------------------------------------------

function getDevelopers() {
    const developers = employees.filter((employee) => {
        return employee.department === "Development";
    });

    console.log("\n========== DEVELOPERS ==========");
    console.log(developers);
}

getDevelopers();


// --------------------------------------------------
// 4. Employees From Bhopal
// --------------------------------------------------

function getEmployeesByCity(city) {
    const result = employees.filter((employee) => {
        return employee.city.toLowerCase() === city.toLowerCase();
    });

    console.log(`\nEmployees from ${city}:`);
    console.log(result);
}

getEmployeesByCity("Bhopal");


// --------------------------------------------------
// 5. Employees With Salary Greater Than 60000
// --------------------------------------------------

const highSalaryEmployees = employees.filter((employee) => {
    return employee.salary > 60000;
});

console.log("\n========== HIGH SALARY EMPLOYEES ==========");
console.log(highSalaryEmployees);


// --------------------------------------------------
// 6. Calculate Total Salary
// --------------------------------------------------

const totalSalary = employees.reduce((total, employee) => {
    return total + employee.salary;
}, 0);

console.log("\nTotal Salary:", totalSalary);


// --------------------------------------------------
// 7. Calculate Average Salary
// --------------------------------------------------

const averageSalary = totalSalary / employees.length;

console.log("Average Salary:", averageSalary);


// --------------------------------------------------
// 8. Find Highest Paid Employee
// --------------------------------------------------

const highestPaid = employees.reduce((highest, employee) => {

    if (employee.salary > highest.salary) {
        return employee;
    }

    return highest;

});

console.log("\n========== HIGHEST PAID ==========");
console.log(highestPaid);


// --------------------------------------------------
// 9. Find Lowest Paid Employee
// --------------------------------------------------

const lowestPaid = employees.reduce((lowest, employee) => {

    if (employee.salary < lowest.salary) {
        return employee;
    }

    return lowest;

});

console.log("\n========== LOWEST PAID ==========");
console.log(lowestPaid);


// --------------------------------------------------
// 10. Sort Employees By Salary
// --------------------------------------------------

const sortedEmployees = [...employees].sort((a, b) => {
    return b.salary - a.salary;
});

console.log("\n========== SORTED BY SALARY ==========");
console.log(sortedEmployees);


// --------------------------------------------------
// 11. Give 10% Salary Increment
// --------------------------------------------------

const incrementedEmployees = employees.map((employee) => {

    return {
        ...employee,
        salary: employee.salary + employee.salary * 0.10
    };

});

console.log("\n========== AFTER 10% INCREMENT ==========");
console.log(incrementedEmployees);


// --------------------------------------------------
// 12. Get Only Employee Names
// --------------------------------------------------

const employeeNames = employees.map((employee) => {
    return employee.name;
});

console.log("\nEmployee Names:");
console.log(employeeNames);


// --------------------------------------------------
// 13. Get Names With Salary
// --------------------------------------------------

const employeeDetails = employees.map((employee) => {

    return {
        name: employee.name,
        salary: employee.salary
    };

});

console.log("\nEmployee Name & Salary:");
console.log(employeeDetails);


// --------------------------------------------------
// 14. Employees Having More Than 3 Years Experience
// --------------------------------------------------

const experiencedEmployees = employees.filter((employee) => {
    return employee.experience > 3;
});

console.log("\n========== EXPERIENCED EMPLOYEES ==========");
console.log(experiencedEmployees);


// --------------------------------------------------
// 15. Check Any Employee Salary > 1 Lakh
// --------------------------------------------------

const salaryCheck = employees.some((employee) => {
    return employee.salary > 100000;
});

console.log("\nSalary greater than 1 Lakh:", salaryCheck);


// --------------------------------------------------
// 16. Check All Employees Have Experience
// --------------------------------------------------

const experienceCheck = employees.every((employee) => {
    return employee.experience > 0;
});

console.log("All employees have experience:", experienceCheck);


// --------------------------------------------------
// 17. Department Wise Employee Count
// --------------------------------------------------

const departmentCount = employees.reduce((result, employee) => {

    if (!result[employee.department]) {
        result[employee.department] = 0;
    }

    result[employee.department]++;

    return result;

}, {});

console.log("\n========== DEPARTMENT COUNT ==========");
console.log(departmentCount);


// --------------------------------------------------
// 18. Add New Employee
// --------------------------------------------------

function addEmployee(newEmployee) {

    employees.push(newEmployee);

    console.log("\nEmployee Added Successfully");
}

addEmployee({
    id: 7,
    name: "Vikas Patel",
    age: 25,
    department: "Development",
    designation: "Java Developer",
    salary: 62000,
    experience: 3,
    city: "Bhopal",
    skills: ["Java", "Spring Boot", "MySQL"]
});


// --------------------------------------------------
// 19. Update Employee Salary
// --------------------------------------------------

function updateSalary(id, newSalary) {

    const employee = employees.find((employee) => {
        return employee.id === id;
    });

    if (!employee) {
        console.log("Employee not found");
        return;
    }

    employee.salary = newSalary;

    console.log("\nSalary Updated Successfully");
}

updateSalary(2, 75000);


// --------------------------------------------------
// 20. Delete Employee
// --------------------------------------------------

function deleteEmployee(id) {

    const index = employees.findIndex((employee) => {
        return employee.id === id;
    });

    if (index === -1) {
        console.log("Employee not found");
        return;
    }

    employees.splice(index, 1);

    console.log("\nEmployee Deleted Successfully");
}

deleteEmployee(6);


// --------------------------------------------------
// 21. Search Employee By Name
// --------------------------------------------------

function searchEmployee(name) {

    const result = employees.filter((employee) => {

        return employee.name
            .toLowerCase()
            .includes(name.toLowerCase());

    });

    console.log("\n========== SEARCH RESULT ==========");
    console.log(result);
}

searchEmployee("rahul");


// --------------------------------------------------
// 22. Get All Skills
// --------------------------------------------------

const allSkills = employees.flatMap((employee) => {
    return employee.skills;
});

console.log("\n========== ALL SKILLS ==========");
console.log(allSkills);


// --------------------------------------------------
// 23. Remove Duplicate Skills
// --------------------------------------------------

const uniqueSkills = [...new Set(allSkills)];

console.log("\n========== UNIQUE SKILLS ==========");
console.log(uniqueSkills);


// --------------------------------------------------
// 24. Final Employee Count
// --------------------------------------------------

console.log("\nTotal Employees:", employees.length);


// --------------------------------------------------
// 25. Final Data
// --------------------------------------------------

console.log("\n========== FINAL EMPLOYEE DATA ==========");
console.log(employees);