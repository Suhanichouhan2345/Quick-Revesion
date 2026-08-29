
// Expense Tracker
// GitHub Contribution Project

let expenses = [
  { id: 1, title: "Food", amount: 250, category: "Food" },
  { id: 2, title: "Bus Ticket", amount: 80, category: "Travel" },
  { id: 3, title: "Movie", amount: 300, category: "Entertainment" },
  { id: 4, title: "Books", amount: 500, category: "Education" },
  { id: 5, title: "Coffee", amount: 120, category: "Food" }
];

// 1. Display all expenses
function showExpenses() {
  console.log("\n--- All Expenses ---");

  expenses.forEach((expense) => {
    console.log(
      `${expense.id}. ${expense.title} - ₹${expense.amount} (${expense.category})`
    );
  });
}

// 2. Add new expense
function addExpense(title, amount, category) {
  const newExpense = {
    id: expenses.length + 1,
    title: title,
    amount: amount,
    category: category
  };

  expenses.push(newExpense);

  console.log(`\nExpense "${title}" added successfully!`);
}

// 3. Delete expense
function deleteExpense(id) {
  const oldLength = expenses.length;

  expenses = expenses.filter((expense) => expense.id !== id);

  if (expenses.length < oldLength) {
    console.log(`\nExpense with ID ${id} deleted.`);
  } else {
    console.log(`\nExpense with ID ${id} not found.`);
  }
}

// 4. Find expense by category
function findByCategory(category) {
  const result = expenses.filter(
    (expense) =>
      expense.category.toLowerCase() === category.toLowerCase()
  );

  console.log(`\n--- ${category} Expenses ---`);

  if (result.length === 0) {
    console.log("No expenses found.");
    return;
  }

  result.forEach((expense) => {
    console.log(
      `${expense.title} - ₹${expense.amount}`
    );
  });
}

// 5. Calculate total expense
function getTotalExpense() {
  const total = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  console.log(`\nTotal Expense: ₹${total}`);
}

// 6. Find highest expense
function getHighestExpense() {
  if (expenses.length === 0) {
    console.log("No expenses available.");
    return;
  }

  const highest = expenses.reduce((max, expense) =>
    expense.amount > max.amount ? expense : max
  );

  console.log(
    `\nHighest Expense: ${highest.title} - ₹${highest.amount}`
  );
}

// 7. Sort expenses by amount
function sortByAmount() {
  const sorted = [...expenses].sort(
    (a, b) => a.amount - b.amount
  );

  console.log("\n--- Expenses Sorted By Amount ---");

  sorted.forEach((expense) => {
    console.log(`${expense.title} - ₹${expense.amount}`);
  });
}

// 8. Update expense
function updateExpense(id, newAmount) {
  const expense = expenses.find(
    (expense) => expense.id === id
  );

  if (!expense) {
    console.log("\nExpense not found.");
    return;
  }

  expense.amount = newAmount;

  console.log(
    `\n${expense.title} updated to ₹${newAmount}`
  );
}


// ----------- TESTING -----------

showExpenses();

addExpense("Gym", 1000, "Health");

showExpenses();

findByCategory("Food");

getTotalExpense();

getHighestExpense();

sortByAmount();

updateExpense(2, 100);

deleteExpense(3);

showExpenses();

getTotalExpense();

