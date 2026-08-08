class Expense {
    constructor(id, title, amount, category) {
        this.id = id;
        this.title = title;
        this.amount = amount;
        this.category = category;
    }
}

class ExpenseTracker {
    constructor() {
        this.expenses = [];
    }

    addExpense(title, amount, category) {
        const id = this.expenses.length + 1;
        const expense = new Expense(id, title, amount, category);
        this.expenses.push(expense);
        console.log(`Added: ${title}`);
    }

    removeExpense(id) {
        this.expenses = this.expenses.filter(expense => expense.id !== id);
        console.log(`Expense ${id} removed`);
    }

    updateExpense(id, amount) {
        const expense = this.expenses.find(expense => expense.id === id);
        if (expense) {
            expense.amount = amount;
            console.log(`Expense ${id} updated`);
        }
    }

    totalExpense() {
        return this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
    }

    highestExpense() {
        return this.expenses.reduce((max, expense) =>
            expense.amount > max.amount ? expense : max
        );
    }

    filterByCategory(category) {
        return this.expenses.filter(
            expense => expense.category.toLowerCase() === category.toLowerCase()
        );
    }

    displayExpenses() {
        console.table(this.expenses);
    }
}

const tracker = new ExpenseTracker();

tracker.addExpense("Pizza", 450, "Food");
tracker.addExpense("Movie", 300, "Entertainment");
tracker.addExpense("Petrol", 1200, "Travel");
tracker.addExpense("Book", 600, "Education");
tracker.addExpense("Coffee", 200, "Food");

tracker.displayExpenses();

console.log("Total Expense:", tracker.totalExpense());

console.log("Highest Expense:");
console.log(tracker.highestExpense());

console.log("Food Expenses:");
console.table(tracker.filterByCategory("Food"));

tracker.updateExpense(2, 500);

tracker.removeExpense(5);

console.log("After Update & Delete");
tracker.displayExpenses();const students = [
  { id: 1, name: "Rahul", course: "Java", marks: 85 },
  { id: 2, name: "Aman", course: "MERN", marks: 72 },
  { id: 3, name: "Riya", course: "Java", marks: 91 },
  { id: 4, name: "Neha", course: "Python", marks: 65 },
  { id: 5, name: "Arjun", course: "MERN", marks: 88 },
  { id: 6, name: "Priya", course: "Python", marks: 78 }
];

// 1. Display all students
console.log("All Students:");
students.forEach((student) => {
  console.log(student.name, student.course, student.marks);
});

// 2. Students who scored 80+
const toppers = students.filter((student) => student.marks >= 80);

console.log("\nToppers:");
console.log(toppers);

// 3. Get only student names
const names = students.map((student) => student.name);

console.log("\nStudent Names:");
console.log(names);

// 4. Find a particular student
const student = students.find((student) => student.id === 3);

console.log("\nStudent with ID 3:");
console.log(student);

// 5. Sort students by marks
const sortedStudents = [...students].sort((a, b) => b.marks - a.marks);

console.log("\nStudents Sorted by Marks:");
console.log(sortedStudents);

// 6. Calculate total marks
const totalMarks = students.reduce((total, student) => {
  return total + student.marks;
}, 0);

console.log("\nTotal Marks:", totalMarks);

// 7. Calculate average marks
const averageMarks = totalMarks / students.length;

console.log("Average Marks:", averageMarks);

// 8. Count students by course
const courseCount = students.reduce((count, student) => {
  count[student.course] = (count[student.course] || 0) + 1;
  return count;
}, {});

console.log("\nCourse Count:");
console.log(courseCount);

// 9. Students who passed
const passedStudents = students.filter((student) => student.marks >= 40);

console.log("\nPassed Students:");
console.log(passedStudents);

// 10. Add grade to every student
const studentsWithGrade = students.map((student) => {
  let grade;

  if (student.marks >= 90) {
    grade = "A+";
  } else if (student.marks >= 80) {
    grade = "A";
  } else if (student.marks >= 70) {
    grade = "B";
  } else if (student.marks >= 60) {
    grade = "C";
  } else {
    grade = "D";
  }

  return {
    ...student,
    grade: grade
  };
});

console.log("\nStudents With Grade:");
console.log(studentsWithGrade);