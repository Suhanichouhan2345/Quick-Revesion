const employees = [
  {
    id: 101,
    name: "Aman",
    department: "IT",
    salary: 45000,
    experience: 2
  },
  {
    id: 102,
    name: "Riya",
    department: "HR",
    salary: 38000,
    experience: 3
  },
  {
    id: 103,
    name: "Rahul",
    department: "IT",
    salary: 62000,
    experience: 5
  },
  {
    id: 104,
    name: "Priya",
    department: "Finance",
    salary: 52000,
    experience: 4
  },
  {
    id: 105,
    name: "Neha",
    department: "IT",
    salary: 70000,
    experience: 6
  }
];

// 1. Display employee names
const employeeNames = employees.map(employee => {
  return employee.name;
});

console.log("Employee Names:");
console.log(employeeNames);


// 2. Find IT employees
const itEmployees = employees.filter(employee => {
  return employee.department === "IT";
});

console.log("\nIT Employees:");
console.log(itEmployees);


// 3. Find employees earning more than 50000
const highSalaryEmployees = employees.filter(employee => {
  return employee.salary > 50000;
});

console.log("\nEmployees With Salary Above 50000:");
console.log(highSalaryEmployees);


// 4. Find employee by ID
const searchId = 103;

const employee = employees.find(employee => {
  return employee.id === searchId;
});

console.log("\nSearched Employee:");
console.log(employee);


// 5. Calculate total salary
const totalSalary = employees.reduce((total, employee) => {
  return total + employee.salary;
}, 0);

console.log("\nTotal Salary:", totalSalary);


// 6. Calculate average salary
const averageSalary = totalSalary / employees.length;

console.log("Average Salary:", averageSalary.toFixed(2));


// 7. Find most experienced employee
const experiencedEmployee = employees.reduce((highest, employee) => {
  return employee.experience > highest.experience
    ? employee
    : highest;
});

console.log("\nMost Experienced Employee:");
console.log(experiencedEmployee);


// 8. Sort employees by salary
const sortedEmployees = [...employees].sort((a, b) => {
  return b.salary - a.salary;
});

console.log("\nEmployees Sorted By Salary:");
console.log(sortedEmployees);


// 9. Give bonus to employees with 5+ years experience
const bonusEmployees = employees.map(employee => {
  const bonus = employee.experience >= 5
    ? employee.salary * 0.10
    : 0;

  return {
    ...employee,
    bonus: bonus
  };
});

console.log("\nEmployees With Bonus:");
console.log(bonusEmployees);


// 10. Check if any employee earns more than 65000
const highEarner = employees.some(employee => {
  return employee.salary > 65000;
});

console.log("\nAny Employee Earning Above 65000:", highEarner);


// 11. Get only employee names and departments
const employeeDetails = employees.map(employee => {
  return {
    name: employee.name,
    department: employee.department
  };
});

console.log("\nEmployee Details:");
console.log(employeeDetails);


// 12. Find employees with 4+ years experience
const experiencedEmployees = employees.filter(employee => {
  return employee.experience >= 4;
});

console.log("\nExperienced Employees:");
console.log(experiencedEmployees);