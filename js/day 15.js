// Day 16 - JavaScript Expense Tracker

const expenses = [
    { id: 1, title: "Food", category: "Food", amount: 250, date: "2026-08-10" },
    { id: 2, title: "Bus", category: "Travel", amount: 80, date: "2026-08-10" },
    { id: 3, title: "Movie", category: "Entertainment", amount: 500, date: "2026-08-11" },
    { id: 4, title: "Groceries", category: "Food", amount: 1200, date: "2026-08-11" },
    { id: 5, title: "Internet", category: "Bills", amount: 700, date: "2026-08-12" },
    { id: 6, title: "Auto", category: "Travel", amount: 150, date: "2026-08-12" },
    { id: 7, title: "Shopping", category: "Shopping", amount: 2500, date: "2026-08-13" },
    { id: 8, title: "Coffee", category: "Food", amount: 180, date: "2026-08-13" }
];

// 1. Display all expenses
console.log("========== ALL EXPENSES ==========");

expenses.forEach(expense => {
    console.log(
        `${expense.id}. ${expense.title} - ₹${expense.amount} - ${expense.category}`
    );
});

// 2. Calculate total expense
const totalExpense = expenses.reduce((total, expense) => {
    return total + expense.amount;
}, 0);

console.log("\nTotal Expense:", `₹${totalExpense}`);

// 3. Calculate average expense
const averageExpense = totalExpense / expenses.length;

console.log("Average Expense:", `₹${averageExpense.toFixed(2)}`);

// 4. Find expenses above ₹500
const highExpenses = expenses.filter(expense => expense.amount > 500);

console.log("\n========== EXPENSES ABOVE ₹500 ==========");

highExpenses.forEach(expense => {
    console.log(`${expense.title}: ₹${expense.amount}`);
});

// 5. Get only Food expenses
const foodExpenses = expenses.filter(expense => {
    return expense.category === "Food";
});

console.log("\n========== FOOD EXPENSES ==========");

foodExpenses.forEach(expense => {
    console.log(`${expense.title}: ₹${expense.amount}`);
});

// 6. Calculate Food category total
const foodTotal = foodExpenses.reduce((total, expense) => {
    return total + expense.amount;
}, 0);

console.log("Food Total:", `₹${foodTotal}`);

// 7. Calculate Travel category total
const travelTotal = expenses
    .filter(expense => expense.category === "Travel")
    .reduce((total, expense) => total + expense.amount, 0);

console.log("Travel Total:", `₹${travelTotal}`);

// 8. Find the highest expense
const highestExpense = expenses.reduce((highest, expense) => {
    return expense.amount > highest.amount ? expense : highest;
});

console.log("\nHighest Expense:");
console.log(highestExpense);

// 9. Find the lowest expense
const lowestExpense = expenses.reduce((lowest, expense) => {
    return expense.amount < lowest.amount ? expense : lowest;
});

console.log("\nLowest Expense:");
console.log(lowestExpense);

// 10. Create expense titles array
const expenseTitles = expenses.map(expense => expense.title);

console.log("\nExpense Titles:");
console.log(expenseTitles);

// 11. Add 10% tax to every expense
const expensesWithTax = expenses.map(expense => {
    return {
        ...expense,
        finalAmount: expense.amount + (expense.amount * 10 / 100)
    };
});

console.log("\n========== EXPENSES WITH TAX ==========");

console.log(expensesWithTax);

// 12. Find unique categories
const categories = [...new Set(
    expenses.map(expense => expense.category)
)];

console.log("\nCategories:");
console.log(categories);

// 13. Search expense by title
const searchTitle = "Movie";

const searchedExpense = expenses.find(expense => {
    return expense.title.toLowerCase() === searchTitle.toLowerCase();
});

console.log("\nSearch Result:");
console.log(searchedExpense);

// 14. Check if any expense is above ₹2000
const hasBigExpense = expenses.some(expense => expense.amount > 2000);

console.log("\nAny expense above ₹2000:", hasBigExpense);

// 15. Check if all expenses are below ₹5000
const allBelowLimit = expenses.every(expense => expense.amount < 5000);

console.log("All expenses below ₹5000:", allBelowLimit);

// 16. Sort expenses from highest to lowest
const sortedExpenses = [...expenses].sort((a, b) => {
    return b.amount - a.amount;
});

console.log("\n========== SORTED EXPENSES ==========");

sortedExpenses.forEach(expense => {
    console.log(`${expense.title}: ₹${expense.amount}`);
});

// 17. Monthly budget
const budget = 8000;

const remainingBudget = budget - totalExpense;

console.log("\n========== BUDGET ==========");
console.log("Budget:", `₹${budget}`);
console.log("Spent:", `₹${totalExpense}`);
console.log("Remaining:", `₹${remainingBudget}`);

if (remainingBudget > 0) {
    console.log("Status: Budget is under control ✅");
} else {
    console.log("Status: Budget exceeded ❌");
}

// 18. Final summary
console.log("\n========== FINAL SUMMARY ==========");

console.log("Total Transactions:", expenses.length);
console.log("Total Expense:", `₹${totalExpense}`);
console.log("Average Expense:", `₹${averageExpense.toFixed(2)}`);
console.log("Highest Expense:", `₹${highestExpense.amount}`);
console.log("Lowest Expense:", `₹${lowestExpense.amount}`);
console.log("Food Expense:", `₹${foodTotal}`);
console.log("Travel Expense:", `₹${travelTotal}`);
console.log("Remaining Budget:", `₹${remainingBudget}`);