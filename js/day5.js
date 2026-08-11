const expenses = [
  { id: 1, title: "Food", amount: 250, category: "Food" },
  { id: 2, title: "Bus Ticket", amount: 80, category: "Travel" },
  { id: 3, title: "Movie", amount: 300, category: "Entertainment" },
  { id: 4, title: "Groceries", amount: 650, category: "Food" },
  { id: 5, title: "Auto", amount: 150, category: "Travel" },
  { id: 6, title: "Game", amount: 200, category: "Entertainment" }
];

// 1. Calculate total expense
const totalExpense = expenses.reduce((total, expense) => {
  return total + expense.amount;
}, 0);

console.log("Total Expense:", totalExpense);

// 2. Find Food expenses
const foodExpenses = expenses.filter(expense => {
  return expense.category === "Food";
});

console.log("\nFood Expenses:");
console.log(foodExpenses);

// 3. Find Travel expenses
const travelExpenses = expenses.filter(expense => {
  return expense.category === "Travel";
});

console.log("\nTravel Expenses:");
console.log(travelExpenses);

// 4. Get only expense titles
const expenseTitles = expenses.map(expense => {
  return expense.title;
});

console.log("\nExpense Titles:");
console.log(expenseTitles);

// 5. Find expensive items
const expensiveItems = expenses.filter(expense => {
  return expense.amount > 200;
});

console.log("\nExpenses Above 200:");
console.log(expensiveItems);

// 6. Find highest expense
const highestExpense = expenses.reduce((highest, expense) => {
  return expense.amount > highest.amount ? expense : highest;
});

console.log("\nHighest Expense:");
console.log(highestExpense);

// 7. Sort expenses from highest to lowest
const sortedExpenses = [...expenses].sort((a, b) => {
  return b.amount - a.amount;
});

console.log("\nSorted Expenses:");
console.log(sortedExpenses);

// 8. Find expense by ID
const searchId = 4;

const foundExpense = expenses.find(expense => {
  return expense.id === searchId;
});

console.log("\nSearched Expense:");
console.log(foundExpense);

// 9. Calculate average expense
const averageExpense = totalExpense / expenses.length;

console.log("\nAverage Expense:", averageExpense.toFixed(2));

// 10. Create a simple summary
const summary = {
  totalItems: expenses.length,
  totalAmount: totalExpense,
  averageAmount: averageExpense.toFixed(2),
  highestExpense: highestExpense.title
};

console.log("\nExpense Summary:");
console.log(summary);