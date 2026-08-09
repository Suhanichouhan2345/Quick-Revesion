const accounts = [
    {
        id: 101,
        name: "Rahul",
        balance: 25000,
        transactions: []
    },
    {
        id: 102,
        name: "Priya",
        balance: 18000,
        transactions: []
    },
    {
        id: 103,
        name: "Aman",
        balance: 32000,
        transactions: []
    },
    {
        id: 104,
        name: "Neha",
        balance: 15000,
        transactions: []
    }
];

// Find account
function findAccount(id) {
    return accounts.find((account) => account.id === id);
}

// Deposit money
function deposit(id, amount) {
    const account = findAccount(id);

    if (!account) {
        console.log("Account not found.");
        return;
    }

    if (amount <= 0) {
        console.log("Invalid deposit amount.");
        return;
    }

    account.balance += amount;

    account.transactions.push({
        type: "Deposit",
        amount: amount
    });

    console.log(
        `₹${amount} deposited successfully into ${account.name}'s account.`
    );
}

// Withdraw money
function withdraw(id, amount) {
    const account = findAccount(id);

    if (!account) {
        console.log("Account not found.");
        return;
    }

    if (amount <= 0) {
        console.log("Invalid withdrawal amount.");
        return;
    }

    if (amount > account.balance) {
        console.log("Insufficient balance.");
        return;
    }

    account.balance -= amount;

    account.transactions.push({
        type: "Withdrawal",
        amount: amount
    });

    console.log(
        `₹${amount} withdrawn successfully from ${account.name}'s account.`
    );
}

// Check balance
function checkBalance(id) {
    const account = findAccount(id);

    if (!account) {
        console.log("Account not found.");
        return;
    }

    console.log(
        `${account.name}'s Balance: ₹${account.balance}`
    );
}

// Display all accounts
function displayAccounts() {
    console.log("\n----- All Accounts -----");

    accounts.forEach((account) => {
        console.log(
            `ID: ${account.id} | Name: ${account.name} | Balance: ₹${account.balance}`
        );
    });
}

// Find accounts having balance above 20000
function richAccounts() {
    const result = accounts.filter((account) => {
        return account.balance > 20000;
    });

    console.log("\n----- Accounts Above ₹20,000 -----");

    result.forEach((account) => {
        console.log(
            `${account.name} - ₹${account.balance}`
        );
    });
}

// Calculate total bank balance
function totalBankBalance() {
    const total = accounts.reduce((sum, account) => {
        return sum + account.balance;
    }, 0);

    console.log("\nTotal Bank Balance: ₹" + total);
}

// Show account transactions
function showTransactions(id) {
    const account = findAccount(id);

    if (!account) {
        console.log("Account not found.");
        return;
    }

    console.log(`\n----- ${account.name}'s Transactions -----`);

    if (account.transactions.length === 0) {
        console.log("No transactions found.");
        return;
    }

    account.transactions.forEach((transaction, index) => {
        console.log(
            `${index + 1}. ${transaction.type} - ₹${transaction.amount}`
        );
    });
}

// Create account summary using map()
function accountSummary() {
    const summary = accounts.map((account) => {
        return {
            id: account.id,
            name: account.name,
            balance: account.balance
        };
    });

    console.log("\n----- Account Summary -----");
    console.log(summary);
}


// -----------------------------
// Program Execution
// -----------------------------

displayAccounts();

console.log("\n----- Deposits -----");
deposit(101, 5000);
deposit(103, 3000);

console.log("\n----- Withdrawals -----");
withdraw(102, 2000);
withdraw(104, 18000);

console.log("\n----- Balance Check -----");
checkBalance(101);
checkBalance(102);

richAccounts();

totalBankBalance();

showTransactions(101);
showTransactions(102);

accountSummary();

console.log("\n----- Final Accounts -----");
displayAccounts();

