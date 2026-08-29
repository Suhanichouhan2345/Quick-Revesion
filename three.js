// Expense Tracker

let expenses = [
    { id: 1, title: "Food", amount: 250, category: "Food" },
    { id: 2, title: "Travel", amount: 500, category: "Travel" },
    { id: 3, title: "Movie", amount: 300, category: "Entertainment" },
    { id: 4, title: "Books", amount: 700, category: "Education" }
];

// Add Expense
function addExpense(title, amount, category) {
    let newExpense = {
        id: expenses.length + 1,
        title: title,
        amount: amount,
        category: category
    };

    expenses.push(newExpense);
    console.log("Expense added successfully!");
}

// Show All Expenses
function showExpenses() {
    console.log("\nAll Expenses:");

    expenses.forEach(expense => {
        console.log(
            `${expense.id}. ${expense.title} - ₹${expense.amount} [${expense.category}]`
        );
    });
}

// Calculate Total Expense
function calculateTotal() {
    let total = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);

    console.log(`\nTotal Expense: ₹${total}`);
}

// Filter By Category
function filterByCategory(category) {
    let result = expenses.filter(expense => {
        return expense.category.toLowerCase() === category.toLowerCase();
    });

    console.log(`\n${category} Expenses:`);

    result.forEach(expense => {
        console.log(`${expense.title} - ₹${expense.amount}`);
    });
}

// Find Expensive Expense
function findExpensiveExpense() {
    let expensive = expenses.reduce((max, expense) => {
        return expense.amount > max.amount ? expense : max;
    });

    console.log(
        `\nHighest Expense: ${expensive.title} - ₹${expensive.amount}`
    );
}

// Sort Expenses
function sortExpenses() {
    let sorted = [...expenses].sort((a, b) => {
        return a.amount - b.amount;
    });

    console.log("\nExpenses from Low to High:");

    sorted.forEach(expense => {
        console.log(`${expense.title} - ₹${expense.amount}`);
    });
}


// Function Calls
showExpenses();

addExpense("Shopping", 1200, "Shopping");

showExpenses();

calculateTotal();

filterByCategory("Food");

findExpensiveExpense();

sortExpenses();