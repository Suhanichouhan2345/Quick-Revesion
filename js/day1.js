const employees = [
  {
    id: 1,
    name: "Aman",
    department: "IT",
    salary: 45000,
    experience: 3
  },
  {
    id: 2,
    name: "Priya",
    department: "HR",
    salary: 38000,
    experience: 2
  },
  {
    id: 3,
    name: "Rahul",
    department: "IT",
    salary: 60000,
    experience: 5
  },
  {
    id: 4,
    name: "Neha",
    department: "Finance",
    salary: 52000,
    experience: 4
  },
  {
    id: 5,
    name: "Ankit",
    department: "IT",
    salary: 35000,
    experience: 1
  }
];

// 1. Display all employees
function displayEmployees() {
  employees.forEach((employee) => {
    console.log(
      `${employee.id}. ${employee.name} | ${employee.department} | ₹${employee.salary}`
    );
  });
}

// 2. Find employee by ID
function findEmployee(id) {
  return employees.find((employee) => {
    return employee.id === id;
  });
}

// 3. Get IT employees
function getITEmployees() {
  return employees.filter((employee) => {
    return employee.department === "IT";
  });
}

// 4. Get employee names
function getEmployeeNames() {
  return employees.map((employee) => {
    return employee.name;
  });
}

// 5. Calculate total salary
function getTotalSalary() {
  return employees.reduce((total, employee) => {
    return total + employee.salary;
  }, 0);
}

// 6. Find highest paid employee
function getHighestPaid() {
  return employees.reduce((highest, employee) => {
    return employee.salary > highest.salary
      ? employee
      : highest;
  });
}

// 7. Employees with 3+ years experience
function getExperiencedEmployees() {
  return employees.filter((employee) => {
    return employee.experience >= 3;
  });
}

// 8. Sort employees by salary
function sortBySalary() {
  return [...employees].sort((a, b) => {
    return b.salary - a.salary;
  });
}

// 9. Check if any employee earns above 50000
function checkHighSalary() {
  return employees.some((employee) => {
    return employee.salary > 50000;
  });
}

// 10. Calculate average salary
function getAverageSalary() {
  return getTotalSalary() / employees.length;
}


// ================= OUTPUT =================

console.log("===== ALL EMPLOYEES =====");
displayEmployees();

console.log("\n===== FIND EMPLOYEE =====");
console.log(findEmployee(3));

console.log("\n===== IT EMPLOYEES =====");
console.log(getITEmployees());

console.log("\n===== EMPLOYEE NAMES =====");
console.log(getEmployeeNames());

console.log("\n===== TOTAL SALARY =====");
console.log("₹" + getTotalSalary());

console.log("\n===== HIGHEST PAID EMPLOYEE =====");
console.log(getHighestPaid());

console.log("\n===== EXPERIENCED EMPLOYEES =====");
console.log(getExperiencedEmployees());

console.log("\n===== SORTED BY SALARY =====");
console.log(sortBySalary());

console.log("\n===== SALARY ABOVE 50000 EXISTS =====");
console.log(checkHighSalary());

console.log("\n===== AVERAGE SALARY =====");
console.log(getAverageSalary());