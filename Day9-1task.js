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
tracker.displayExpenses();