
const expenses = [
    { id: 1, title: "Food", category: "Food", amount: 250 },
    { id: 2, title: "Bus Ticket", category: "Travel", amount: 80 },
    { id: 3, title: "Movie", category: "Entertainment", amount: 350 },
    { id: 4, title: "Groceries", category: "Food", amount: 600 },
    { id: 5, title: "Auto", category: "Travel", amount: 120 },
    { id: 6, title: "Book", category: "Education", amount: 450 },
    { id: 7, title: "Course", category: "Education", amount: 1200 },
    { id: 8, title: "Coffee", category: "Food", amount: 150 }
];

// 1. Display all expenses
console.log("----- All Expenses -----");

expenses.forEach((expense) => {
    console.log(
        `${expense.id}. ${expense.title} - ₹${expense.amount}`
    );
});

// 2. Find total expense
const totalExpense = expenses.reduce((total, expense) => {
    return total + expense.amount;
}, 0);

console.log("\nTotal Expense: ₹" + totalExpense);

// 3. Find expenses above ₹500
const expensiveItems = expenses.filter((expense) => {
    return expense.amount > 500;
});

console.log("\n----- Expenses Above ₹500 -----");
console.log(expensiveItems);

// 4. Find Food expenses
const foodExpenses = expenses.filter((expense) => {
    return expense.category === "Food";
});

console.log("\n----- Food Expenses -----");
console.log(foodExpenses);

// 5. Calculate Food expenses
const foodTotal = foodExpenses.reduce((total, expense) => {
    return total + expense.amount;
}, 0);

console.log("\nTotal Food Expense: ₹" + foodTotal);

// 6. Find a particular expense
const foundExpense = expenses.find((expense) => {
    return expense.title === "Book";
});

console.log("\n----- Search Expense -----");
console.log(foundExpense);

// 7. Add 10% tax to every expense
const expensesWithTax = expenses.map((expense) => {
    return {
        ...expense,
        tax: expense.amount * 0.10,
        finalAmount: expense.amount * 1.10
    };
});

console.log("\n----- Expenses With Tax -----");
console.log(expensesWithTax);

// 8. Sort expenses from highest to lowest
const sortedExpenses = [...expenses].sort((a, b) => {
    return b.amount - a.amount;
});

console.log("\n----- Highest Expenses -----");

sortedExpenses.forEach((expense, index) => {
    console.log(
        `${index + 1}. ${expense.title} - ₹${expense.amount}`
    );
});

// 9. Check if any expense is above ₹1000
const hasLargeExpense = expenses.some((expense) => {
    return expense.amount > 1000;
});

console.log("\nAny expense above ₹1000:", hasLargeExpense);

// 10. Find cheapest expense
const cheapestExpense = expenses.reduce((cheapest, expense) => {
    if (expense.amount < cheapest.amount) {
        return expense;
    }

    return cheapest;
});

console.log("\nCheapest Expense:");
console.log(cheapestExpense);

// 11. Calculate average expense
const averageExpense = totalExpense / expenses.length;

console.log(
    "\nAverage Expense: ₹" + averageExpense.toFixed(2)
);

// 12. Create expense summary
const summary = expenses.map((expense) => {
    return `${expense.title}: ₹${expense.amount}`;
});

console.log("\n----- Expense Summary -----");
console.log(summary);

// 13. Group expenses by category
const categories = {};

expenses.forEach((expense) => {
    if (!categories[expense.category]) {
        categories[expense.category] = 0;
    }

    categories[expense.category] += expense.amount;
});

console.log("\n----- Category Wise Expenses -----");
console.log(categories);

// 14. Find highest spending category
let highestCategory = "";
let highestAmount = 0;

for (const category in categories) {
    if (categories[category] > highestAmount) {
        highestAmount = categories[category];
        highestCategory = category;
    }
}

console.log(
    `\nHighest Spending Category: ${highestCategory} - ₹${highestAmount}`
);

