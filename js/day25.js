// ==========================================
//       EXPENSE TRACKER - JAVASCRIPT
// ==========================================

const expenses = [
    {
        id: 1,
        title: "Grocery Shopping",
        category: "Food",
        amount: 1250,
        payment: "UPI",
        date: "2026-08-01"
    },
    {
        id: 2,
        title: "Netflix Subscription",
        category: "Entertainment",
        amount: 649,
        payment: "Card",
        date: "2026-08-02"
    },
    {
        id: 3,
        title: "Electricity Bill",
        category: "Bills",
        amount: 1850,
        payment: "UPI",
        date: "2026-08-03"
    },
    {
        id: 4,
        title: "College Books",
        category: "Education",
        amount: 2300,
        payment: "Cash",
        date: "2026-08-04"
    },
    {
        id: 5,
        title: "Coffee",
        category: "Food",
        amount: 180,
        payment: "UPI",
        date: "2026-08-05"
    },
    {
        id: 6,
        title: "Bus Pass",
        category: "Travel",
        amount: 900,
        payment: "Cash",
        date: "2026-08-06"
    },
    {
        id: 7,
        title: "Movie Ticket",
        category: "Entertainment",
        amount: 450,
        payment: "Card",
        date: "2026-08-07"
    },
    {
        id: 8,
        title: "Internet Bill",
        category: "Bills",
        amount: 799,
        payment: "UPI",
        date: "2026-08-08"
    },
    {
        id: 9,
        title: "Java Course",
        category: "Education",
        amount: 1499,
        payment: "Card",
        date: "2026-08-09"
    },
    {
        id: 10,
        title: "Auto Ride",
        category: "Travel",
        amount: 250,
        payment: "UPI",
        date: "2026-08-10"
    }
];


// ==========================================
// 1. Display All Expenses
// ==========================================

function displayExpenses() {
    expenses.forEach((expense) => {
        console.log(
            `${expense.id}. ${expense.title} - ₹${expense.amount}`
        );
    });
}

displayExpenses();


// ==========================================
// 2. Calculate Total Expenses
// ==========================================

function calculateTotal() {
    const total = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);

    console.log("\nTotal Expense:", `₹${total}`);
}

calculateTotal();


// ==========================================
// 3. Find Highest Expense
// ==========================================

function highestExpense() {
    const result = expenses.reduce((max, expense) => {
        return expense.amount > max.amount ? expense : max;
    });

    console.log("\nHighest Expense:");
    console.log(result);
}

highestExpense();


// ==========================================
// 4. Find Lowest Expense
// ==========================================

function lowestExpense() {
    const result = expenses.reduce((min, expense) => {
        return expense.amount < min.amount ? expense : min;
    });

    console.log("\nLowest Expense:");
    console.log(result);
}

lowestExpense();


// ==========================================
// 5. Food Expenses
// ==========================================

function getFoodExpenses() {
    const food = expenses.filter((expense) => {
        return expense.category === "Food";
    });

    console.log("\nFood Expenses:");
    console.log(food);
}

getFoodExpenses();


// ==========================================
// 6. Expenses Greater Than 1000
// ==========================================

function expensiveTransactions() {
    const result = expenses.filter((expense) => {
        return expense.amount > 1000;
    });

    console.log("\nExpenses Greater Than ₹1000:");
    console.log(result);
}

expensiveTransactions();


// ==========================================
// 7. Find Expense By ID
// ==========================================

function findExpense(id) {
    const expense = expenses.find((expense) => {
        return expense.id === id;
    });

    if (expense) {
        console.log("\nExpense Found:");
        console.log(expense);
    } else {
        console.log("\nExpense Not Found");
    }
}

findExpense(5);


// ==========================================
// 8. Get Only Expense Titles
// ==========================================

function getTitles() {
    const titles = expenses.map((expense) => {
        return expense.title;
    });

    console.log("\nExpense Titles:");
    console.log(titles);
}

getTitles();


// ==========================================
// 9. Get All Categories
// ==========================================

function getCategories() {
    const categories = expenses.map((expense) => {
        return expense.category;
    });

    console.log("\nCategories:");
    console.log(categories);
}

getCategories();


// ==========================================
// 10. Remove Duplicate Categories
// ==========================================

function uniqueCategories() {
    const categories = expenses.map((expense) => {
        return expense.category;
    });

    const unique = [...new Set(categories)];

    console.log("\nUnique Categories:");
    console.log(unique);
}

uniqueCategories();


// ==========================================
// 11. Calculate Average Expense
// ==========================================

function averageExpense() {
    const total = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);

    const average = total / expenses.length;

    console.log("\nAverage Expense:", `₹${average.toFixed(2)}`);
}

averageExpense();


// ==========================================
// 12. Sort Expenses - Low To High
// ==========================================

function sortLowToHigh() {
    const sorted = [...expenses].sort((a, b) => {
        return a.amount - b.amount;
    });

    console.log("\nLow To High:");
    console.log(sorted);
}

sortLowToHigh();


// ==========================================
// 13. Sort Expenses - High To Low
// ==========================================

function sortHighToLow() {
    const sorted = [...expenses].sort((a, b) => {
        return b.amount - a.amount;
    });

    console.log("\nHigh To Low:");
    console.log(sorted);
}

sortHighToLow();


// ==========================================
// 14. UPI Payments
// ==========================================

function getUPIExpenses() {
    const result = expenses.filter((expense) => {
        return expense.payment === "UPI";
    });

    console.log("\nUPI Expenses:");
    console.log(result);
}

getUPIExpenses();


// ==========================================
// 15. Calculate Category Wise Expense
// ==========================================

function categoryWiseExpense() {

    const categoryTotal = {};

    expenses.forEach((expense) => {

        if (!categoryTotal[expense.category]) {
            categoryTotal[expense.category] = 0;
        }

        categoryTotal[expense.category] += expense.amount;
    });

    console.log("\nCategory Wise Expense:");
    console.log(categoryTotal);
}

categoryWiseExpense();


// ==========================================
// 16. Add New Expense
// ==========================================

function addExpense(title, category, amount, payment, date) {

    const newExpense = {
        id: expenses.length + 1,
        title: title,
        category: category,
        amount: amount,
        payment: payment,
        date: date
    };

    expenses.push(newExpense);

    console.log("\nNew Expense Added:");
    console.log(newExpense);
}

addExpense(
    "Stationery",
    "Education",
    350,
    "UPI",
    "2026-08-11"
);


// ==========================================
// 17. Delete Expense
// ==========================================

function deleteExpense(id) {

    const index = expenses.findIndex((expense) => {
        return expense.id === id;
    });

    if (index !== -1) {
        const deleted = expenses.splice(index, 1);

        console.log("\nDeleted Expense:");
        console.log(deleted[0]);
    } else {
        console.log("\nExpense Not Found");
    }
}

deleteExpense(3);


// ==========================================
// 18. Update Expense
// ==========================================

function updateExpense(id, newAmount) {

    const expense = expenses.find((expense) => {
        return expense.id === id;
    });

    if (expense) {

        expense.amount = newAmount;

        console.log("\nUpdated Expense:");
        console.log(expense);

    } else {
        console.log("\nExpense Not Found");
    }
}

updateExpense(2, 699);


// ==========================================
// 19. Search Expense By Title
// ==========================================

function searchExpense(keyword) {

    const result = expenses.filter((expense) => {

        return expense.title
            .toLowerCase()
            .includes(keyword.toLowerCase());

    });

    console.log("\nSearch Result:");
    console.log(result);
}

searchExpense("bill");


// ==========================================
// 20. Monthly Expense Report
// ==========================================

function monthlyReport() {

    const total = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);

    const highest = expenses.reduce((max, expense) => {
        return expense.amount > max.amount
            ? expense
            : max;
    });

    const lowest = expenses.reduce((min, expense) => {
        return expense.amount < min.amount
            ? expense
            : min;
    });

    console.log("\n================================");
    console.log("       MONTHLY REPORT");
    console.log("================================");

    console.log("Total Transactions:", expenses.length);
    console.log("Total Expense:", `₹${total}`);
    console.log("Average Expense:", `₹${(total / expenses.length).toFixed(2)}`);
    console.log("Highest Expense:", `₹${highest.amount}`);
    console.log("Lowest Expense:", `₹${lowest.amount}`);

    console.log("================================");
}

monthlyReport();


// ==========================================
// END
// ==========================================

console.log("\nExpense Tracker Program Completed!");