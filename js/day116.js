// Day 17 - JavaScript Bank Account Management System

let accounts = [
    {
        id: 101,
        name: "Rahul",
        balance: 25000,
        type: "Savings",
        transactions: []
    },
    {
        id: 102,
        name: "Priya",
        balance: 40000,
        type: "Savings",
        transactions: []
    },
    {
        id: 103,
        name: "Aman",
        balance: 15000,
        type: "Current",
        transactions: []
    }
];

// Find account
function findAccount(accountId) {
    return accounts.find(account => account.id === accountId);
}

// Deposit money
function deposit(accountId, amount) {
    const account = findAccount(accountId);

    if (!account) {
        console.log("Account not found ❌");
        return;
    }

    if (amount <= 0) {
        console.log("Invalid amount ❌");
        return;
    }

    account.balance += amount;

    account.transactions.push({
        type: "Deposit",
        amount: amount,
        date: new Date().toLocaleDateString()
    });

    console.log(
        `₹${amount} deposited successfully into ${account.name}'s account ✅`
    );
}

// Withdraw money
function withdraw(accountId, amount) {
    const account = findAccount(accountId);

    if (!account) {
        console.log("Account not found ❌");
        return;
    }

    if (amount <= 0) {
        console.log("Invalid amount ❌");
        return;
    }

    if (amount > account.balance) {
        console.log("Insufficient balance ❌");
        return;
    }

    account.balance -= amount;

    account.transactions.push({
        type: "Withdrawal",
        amount: amount,
        date: new Date().toLocaleDateString()
    });

    console.log(
        `₹${amount} withdrawn successfully from ${account.name}'s account ✅`
    );
}

// Show account details
function showAccount(accountId) {
    const account = findAccount(accountId);

    if (!account) {
        console.log("Account not found ❌");
        return;
    }

    console.log("\n========== ACCOUNT DETAILS ==========");
    console.log("Account ID:", account.id);
    console.log("Name:", account.name);
    console.log("Account Type:", account.type);
    console.log("Balance:", `₹${account.balance}`);
}

// Show transaction history
function showTransactions(accountId) {
    const account = findAccount(accountId);

    if (!account) {
        console.log("Account not found ❌");
        return;
    }

    console.log(`\n========== ${account.name}'S TRANSACTIONS ==========`);

    if (account.transactions.length === 0) {
        console.log("No transactions found.");
        return;
    }

    account.transactions.forEach((transaction, index) => {
        console.log(
            `${index + 1}. ${transaction.type} - ₹${transaction.amount} - ${transaction.date}`
        );
    });
}

// Find accounts having balance above a limit
function highBalanceAccounts(limit) {
    return accounts.filter(account => account.balance > limit);
}

// Calculate total money in bank
function totalBankBalance() {
    return accounts.reduce((total, account) => {
        return total + account.balance;
    }, 0);
}

// Add new account
function createAccount(name, type, initialBalance) {
    const newId = accounts.length
        ? Math.max(...accounts.map(account => account.id)) + 1
        : 101;

    const newAccount = {
        id: newId,
        name: name,
        balance: initialBalance,
        type: type,
        transactions: []
    };

    accounts.push(newAccount);

    console.log(
        `New account created for ${name} with ID ${newId} ✅`
    );
}

// Sort accounts by balance
function sortByBalance() {
    const sorted = [...accounts].sort((a, b) => {
        return b.balance - a.balance;
    });

    console.log("\n========== ACCOUNTS SORTED BY BALANCE ==========");

    sorted.forEach(account => {
        console.log(
            `${account.name} → ₹${account.balance}`
        );
    });
}


// ================================
// TESTING THE SYSTEM
// ================================

console.log("========== BANK MANAGEMENT SYSTEM ==========");

showAccount(101);

deposit(101, 5000);

withdraw(101, 3000);

showAccount(101);

showTransactions(101);

createAccount("Neha", "Savings", 30000);

console.log("\n========== HIGH BALANCE ACCOUNTS ==========");

const richAccounts = highBalanceAccounts(25000);

richAccounts.forEach(account => {
    console.log(
        `${account.name}: ₹${account.balance}`
    );
});

console.log("\nTotal Money in Bank:");

console.log(`₹${totalBankBalance()}`);

sortByBalance();

console.log("\n========== ALL ACCOUNTS ==========");

accounts.forEach(account => {
    console.log(
        `${account.id} | ${account.name} | ${account.type} | ₹${account.balance}`
    );
});