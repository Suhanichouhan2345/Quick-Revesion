// Expense Tracker
// JavaScript Practice Project

let expenses = [
    {
        id: 1,
        title: "Food",
        category: "Food",
        amount: 250,
        date: "2026-08-20"
    },
    {
        id: 2,
        title: "Bus Ticket",
        category: "Travel",
        amount: 80,
        date: "2026-08-21"
    },
    {
        id: 3,
        title: "Movie",
        category: "Entertainment",
        amount: 350,
        date: "2026-08-22"
    },
    {
        id: 4,
        title: "Books",
        category: "Education",
        amount: 500,
        date: "2026-08-23"
    }
];

// Add Expense
function addExpense(title, category, amount, date) {
    const newExpense = {
        id: expenses.length + 1,
        title: title,
        category: category,
        amount: amount,
        date: date
    };

    expenses.push(newExpense);

    console.log("Expense added successfully!");
}

// Display All Expenses
function showExpenses() {
    console.log("\n----- All Expenses -----");

    expenses.forEach((expense) => {
        console.log(
            `ID: ${expense.id} | ${expense.title} | ${expense.category} | ₹${expense.amount} | ${expense.date}`
        );
    });
}

// Calculate Total Expense
function getTotalExpense() {
    const total = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);

    console.log("\nTotal Expense: ₹" + total);

    return total;
}

// Find Expense By ID
function findExpense(id) {
    const expense = expenses.find((expense) => {
        return expense.id === id;
    });

    if (expense) {
        console.log("\nExpense Found:");
        console.log(expense);
    } else {
        console.log("\nExpense not found!");
    }

    return expense;
}

// Filter By Category
function filterByCategory(category) {
    const result = expenses.filter((expense) => {
        return expense.category.toLowerCase() === category.toLowerCase();
    });

    console.log(`\n----- ${category} Expenses -----`);

    if (result.length === 0) {
        console.log("No expenses found.");
        return;
    }

    result.forEach((expense) => {
        console.log(
            `${expense.title} - ₹${expense.amount}`
        );
    });

    return result;
}

// Sort Expenses By Amount
function sortByAmount() {
    const sorted = [...expenses].sort((a, b) => {
        return a.amount - b.amount;
    });

    console.log("\n----- Expenses Sorted By Amount -----");

    sorted.forEach((expense) => {
        console.log(`${expense.title} - ₹${expense.amount}`);
    });

    return sorted;
}

// Highest Expense
function getHighestExpense() {
    const highest = expenses.reduce((max, expense) => {
        return expense.amount > max.amount ? expense : max;
    });

    console.log("\nHighest Expense:");
    console.log(highest);

    return highest;
}

// Lowest Expense
function getLowestExpense() {
    const lowest = expenses.reduce((min, expense) => {
        return expense.amount < min.amount ? expense : min;
    });

    console.log("\nLowest Expense:");
    console.log(lowest);

    return lowest;
}

// Update Expense
function updateExpense(id, newAmount, newTitle) {
    const expense = expenses.find((expense) => {
        return expense.id === id;
    });

    if (!expense) {
        console.log("Expense not found!");
        return;
    }

    expense.amount = newAmount;
    expense.title = newTitle;

    console.log("Expense updated successfully!");
}

// Delete Expense
function deleteExpense(id) {
    const index = expenses.findIndex((expense) => {
        return expense.id === id;
    });

    if (index === -1) {
        console.log("Expense not found!");
        return;
    }

    expenses.splice(index, 1);

    console.log("Expense deleted successfully!");
}

// Category Wise Total
function categoryWiseTotal() {
    const result = {};

    expenses.forEach((expense) => {
        if (result[expense.category]) {
            result[expense.category] += expense.amount;
        } else {
            result[expense.category] = expense.amount;
        }
    });

    console.log("\n----- Category Wise Total -----");

    Object.entries(result).forEach(([category, amount]) => {
        console.log(`${category}: ₹${amount}`);
    });

    return result;
}

// Average Expense
function getAverageExpense() {
    if (expenses.length === 0) {
        console.log("No expenses available.");
        return 0;
    }

    const total = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);

    const average = total / expenses.length;

    console.log("\nAverage Expense: ₹" + average.toFixed(2));

    return average;
}

// Expenses Above Given Amount
function expensesAbove(amount) {
    const result = expenses.filter((expense) => {
        return expense.amount > amount;
    });

    console.log(`\nExpenses above ₹${amount}:`);

    result.forEach((expense) => {
        console.log(`${expense.title} - ₹${expense.amount}`);
    });

    return result;
}

// Search Expense
function searchExpense(keyword) {
    const result = expenses.filter((expense) => {
        return (
            expense.title.toLowerCase().includes(keyword.toLowerCase()) ||
            expense.category.toLowerCase().includes(keyword.toLowerCase())
        );
    });

    console.log(`\nSearch Result for "${keyword}":`);

    result.forEach((expense) => {
        console.log(
            `${expense.title} | ${expense.category} | ₹${expense.amount}`
        );
    });

    return result;
}


// ------------------------------
// Function Calls
// ------------------------------

showExpenses();

addExpense(
    "Coffee",
    "Food",
    120,
    "2026-08-28"
);

showExpenses();

getTotalExpense();

findExpense(2);

filterByCategory("Food");

sortByAmount();

getHighestExpense();

getLowestExpense();

categoryWiseTotal();

getAverageExpense();

expensesAbove(200);

searchExpense("book");

updateExpense(2, 100, "Auto Ticket");

showExpenses();

deleteExpense(3);

showExpenses();

getTotalExpense();