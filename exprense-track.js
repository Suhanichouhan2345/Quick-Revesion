const expenses = [
  {
    id: 1,
    title: "Food",
    amount: 250,
    category: "Food"
  },
  {
    id: 2,
    title: "Travel",
    amount: 500,
    category: "Travel"
  },
  {
    id: 3,
    title: "Shopping",
    amount: 1200,
    category: "Shopping"
  },
  {
    id: 4,
    title: "Movie",
    amount: 350,
    category: "Entertainment"
  },
  {
    id: 5,
    title: "Dinner",
    amount: 450,
    category: "Food"
  },
  {
    id: 6,
    title: "Bus",
    amount: 100,
    category: "Travel"
  }
];

// 1. Display all expenses
function showExpenses() {
  expenses.forEach((expense) => {
    console.log(
      `${expense.id}. ${expense.title} - ₹${expense.amount}`
    );
  });
}

// 2. Calculate total expense
function getTotalExpense() {
  return expenses.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);
}

// 3. Find expensive items
function getExpensiveItems() {
  return expenses.filter((expense) => {
    return expense.amount > 400;
  });
}

// 4. Get all expense names
function getExpenseNames() {
  return expenses.map((expense) => expense.title);
}

// 5. Find expense by ID
function findExpense(id) {
  return expenses.find((expense) => expense.id === id);
}

// 6. Get Food expenses
function getFoodExpenses() {
  return expenses.filter((expense) => {
    return expense.category === "Food";
  });
}

// 7. Calculate Food expense
function getFoodTotal() {
  return expenses
    .filter((expense) => expense.category === "Food")
    .reduce((total, expense) => {
      return total + expense.amount;
    }, 0);
}

// 8. Sort expenses from highest to lowest
function sortExpenses() {
  return [...expenses].sort((a, b) => {
    return b.amount - a.amount;
  });
}

// 9. Find highest expense
function getHighestExpense() {
  return expenses.reduce((highest, expense) => {
    return expense.amount > highest.amount
      ? expense
      : highest;
  });
}

// 10. Calculate average expense
function getAverageExpense() {
  return getTotalExpense() / expenses.length;
}


// ================= OUTPUT =================

console.log("===== ALL EXPENSES =====");
showExpenses();

console.log("\n===== TOTAL EXPENSE =====");
console.log("₹" + getTotalExpense());

console.log("\n===== EXPENSIVE ITEMS =====");
console.log(getExpensiveItems());

console.log("\n===== EXPENSE NAMES =====");
console.log(getExpenseNames());

console.log("\n===== FIND EXPENSE =====");
console.log(findExpense(3));

console.log("\n===== FOOD EXPENSES =====");
console.log(getFoodExpenses());

console.log("\n===== FOOD TOTAL =====");
console.log("₹" + getFoodTotal());

console.log("\n===== SORTED EXPENSES =====");
console.log(sortExpenses());

console.log("\n===== HIGHEST EXPENSE =====");
console.log(getHighestExpense());

console.log("\n===== AVERAGE EXPENSE =====");
console.log("₹" + getAverageExpense());