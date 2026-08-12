// ==========================================
// EXPENSE TRACKER - JAVASCRIPT PROJECT
// ==========================================

let expenses = [
    {
        id: 1,
        title: "College Fees",
        amount: 25000,
        category: "Education",
        date: "2026-08-01",
        payment: "UPI"
    },
    {
        id: 2,
        title: "Grocery",
        amount: 2500,
        category: "Food",
        date: "2026-08-03",
        payment: "Cash"
    },
    {
        id: 3,
        title: "Internet Bill",
        amount: 799,
        category: "Bills",
        date: "2026-08-04",
        payment: "UPI"
    },
    {
        id: 4,
        title: "Movie",
        amount: 500,
        category: "Entertainment",
        date: "2026-08-05",
        payment: "Card"
    },
    {
        id: 5,
        title: "Bus Pass",
        amount: 1200,
        category: "Travel",
        date: "2026-08-06",
        payment: "Cash"
    },
    {
        id: 6,
        title: "Restaurant",
        amount: 950,
        category: "Food",
        date: "2026-08-07",
        payment: "UPI"
    },
    {
        id: 7,
        title: "Books",
        amount: 1800,
        category: "Education",
        date: "2026-08-08",
        payment: "Card"
    }
];


// ==========================================
// 1. DISPLAY ALL EXPENSES
// ==========================================

function displayExpenses(data) {

    console.log("\n========== ALL EXPENSES ==========\n");

    data.forEach(expense => {

        console.log(`ID       : ${expense.id}`);
        console.log(`Title    : ${expense.title}`);
        console.log(`Amount   : ₹${expense.amount}`);
        console.log(`Category : ${expense.category}`);
        console.log(`Date     : ${expense.date}`);
        console.log(`Payment  : ${expense.payment}`);
        console.log("----------------------------------");
    });
}


// ==========================================
// 2. CALCULATE TOTAL EXPENSE
// ==========================================

function calculateTotal() {

    return expenses.reduce(
        (total, expense) => total + expense.amount,
        0
    );
}


// ==========================================
// 3. FIND HIGHEST EXPENSE
// ==========================================

function highestExpense() {

    return expenses.reduce((highest, expense) => {

        return expense.amount > highest.amount
            ? expense
            : highest;

    });
}


// ==========================================
// 4. FIND LOWEST EXPENSE
// ==========================================

function lowestExpense() {

    return expenses.reduce((lowest, expense) => {

        return expense.amount < lowest.amount
            ? expense
            : lowest;

    });
}


// ==========================================
// 5. FILTER BY CATEGORY
// ==========================================

function getByCategory(category) {

    return expenses.filter(expense =>
        expense.category.toLowerCase() ===
        category.toLowerCase()
    );
}


// ==========================================
// 6. FILTER BY PAYMENT METHOD
// ==========================================

function getByPaymentMethod(payment) {

    return expenses.filter(expense =>
        expense.payment.toLowerCase() ===
        payment.toLowerCase()
    );
}


// ==========================================
// 7. SEARCH EXPENSE
// ==========================================

function searchExpense(keyword) {

    return expenses.filter(expense =>
        expense.title
            .toLowerCase()
            .includes(keyword.toLowerCase())
    );
}


// ==========================================
// 8. CATEGORY-WISE TOTAL
// ==========================================

function categoryWiseTotal() {

    const result = {};

    expenses.forEach(expense => {

        if (!result[expense.category]) {
            result[expense.category] = 0;
        }

        result[expense.category] += expense.amount;
    });

    return result;
}


// ==========================================
// 9. SORT EXPENSES - HIGH TO LOW
// ==========================================

function sortHighToLow() {

    return [...expenses].sort(
        (a, b) => b.amount - a.amount
    );
}


// ==========================================
// 10. SORT EXPENSES - LOW TO HIGH
// ==========================================

function sortLowToHigh() {

    return [...expenses].sort(
        (a, b) => a.amount - b.amount
    );
}


// ==========================================
// 11. ADD NEW EXPENSE
// ==========================================

function addExpense(
    title,
    amount,
    category,
    date,
    payment
) {

    const newExpense = {

        id: expenses.length + 1,
        title: title,
        amount: amount,
        category: category,
        date: date,
        payment: payment
    };

    expenses.push(newExpense);

    console.log(
        `\nExpense "${title}" added successfully!`
    );
}


// ==========================================
// 12. DELETE EXPENSE
// ==========================================

function deleteExpense(id) {

    const index = expenses.findIndex(
        expense => expense.id === id
    );

    if (index === -1) {

        console.log("Expense not found!");
        return;
    }

    const deleted = expenses.splice(index, 1);

    console.log(
        `\n"${deleted[0].title}" deleted successfully!`
    );
}


// ==========================================
// 13. UPDATE EXPENSE
// ==========================================

function updateExpense(id, newAmount) {

    const expense = expenses.find(
        expense => expense.id === id
    );

    if (!expense) {

        console.log("Expense not found!");
        return;
    }

    expense.amount = newAmount;

    console.log(
        `\n${expense.title} updated successfully!`
    );
}


// ==========================================
// 14. MONTHLY SUMMARY
// ==========================================

function monthlySummary() {

    const total = calculateTotal();

    const count = expenses.length;

    const average = total / count;

    console.log("\n========== MONTHLY SUMMARY ==========\n");

    console.log(`Total Expenses   : ₹${total}`);
    console.log(`Number of Bills  : ${count}`);
    console.log(`Average Expense  : ₹${average.toFixed(2)}`);
}


// ==========================================
// 15. BUDGET CHECK
// ==========================================

function checkBudget(budget) {

    const total = calculateTotal();

    console.log("\n========== BUDGET ==========\n");

    console.log(`Budget : ₹${budget}`);
    console.log(`Spent  : ₹${total}`);

    if (total > budget) {

        console.log(
            `Status : Budget Exceeded by ₹${total - budget}`
        );

    } else {

        console.log(
            `Remaining : ₹${budget - total}`
        );
    }
}


// ==========================================
// PROGRAM START
// ==========================================

displayExpenses(expenses);


// TOTAL
console.log("\n========== TOTAL EXPENSE ==========\n");

console.log(
    `Total: ₹${calculateTotal()}`
);


// HIGHEST
console.log("\n========== HIGHEST EXPENSE ==========\n");

console.log(highestExpense());


// LOWEST
console.log("\n========== LOWEST EXPENSE ==========\n");

console.log(lowestExpense());


// FOOD EXPENSES
console.log("\n========== FOOD EXPENSES ==========\n");

console.log(getByCategory("Food"));


// UPI EXPENSES
console.log("\n========== UPI EXPENSES ==========\n");

console.log(getByPaymentMethod("UPI"));


// SEARCH
console.log("\n========== SEARCH RESULT ==========\n");

console.log(searchExpense("bill"));


// CATEGORY TOTAL
console.log("\n========== CATEGORY TOTAL ==========\n");

console.log(categoryWiseTotal());


// SORT HIGH TO LOW
console.log("\n========== HIGH TO LOW ==========\n");

sortHighToLow().forEach(expense => {

    console.log(
        `${expense.title} -> ₹${expense.amount}`
    );
});


// SORT LOW TO HIGH
console.log("\n========== LOW TO HIGH ==========\n");

sortLowToHigh().forEach(expense => {

    console.log(
        `${expense.title} -> ₹${expense.amount}`
    );
});


// ADD EXPENSE
console.log("\n========== ADD EXPENSE ==========\n");

addExpense(
    "Laptop Accessories",
    3500,
    "Shopping",
    "2026-08-10",
    "UPI"
);


// UPDATE EXPENSE
console.log("\n========== UPDATE EXPENSE ==========\n");

updateExpense(2, 3000);


// DELETE EXPENSE
console.log("\n========== DELETE EXPENSE ==========\n");

deleteExpense(4);


// MONTHLY SUMMARY
monthlySummary();


// BUDGET
checkBudget(40000);


// FINAL TOTAL
console.log("\n========== FINAL TOTAL ==========\n");

console.log(
    `Final Expense: ₹${calculateTotal()}`
);