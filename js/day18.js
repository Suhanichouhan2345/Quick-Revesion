// Day 15 - Bank Management System

const accounts = [
    {
        id: 101,
        name: "Rahul Sharma",
        accountType: "Savings",
        balance: 45000,
        city: "Indore",
        active: true
    },
    {
        id: 102,
        name: "Priya Verma",
        accountType: "Current",
        balance: 85000,
        city: "Bhopal",
        active: true
    },
    {
        id: 103,
        name: "Aman Singh",
        accountType: "Savings",
        balance: 32000,
        city: "Gwalior",
        active: false
    },
    {
        id: 104,
        name: "Neha Gupta",
        accountType: "Savings",
        balance: 67000,
        city: "Bhopal",
        active: true
    },
    {
        id: 105,
        name: "Rohit Jain",
        accountType: "Current",
        balance: 125000,
        city: "Indore",
        active: true
    },
    {
        id: 106,
        name: "Sneha Patel",
        accountType: "Savings",
        balance: 28000,
        city: "Ujjain",
        active: true
    }
];

// 1. Display all accounts

function displayAccounts() {
    console.log("========== ALL ACCOUNTS ==========");

    accounts.forEach((account) => {
        console.log(
            `${account.id} | ${account.name} | ₹${account.balance}`
        );
    });
}

// 2. Find account by ID

function findAccount(id) {
    const account = accounts.find((account) => {
        return account.id === id;
    });

    if (account) {
        console.log("\n========== ACCOUNT FOUND ==========");
        console.log(account);
    } else {
        console.log("\nAccount not found");
    }
}

// 3. Deposit money

function depositMoney(id, amount) {
    const account = accounts.find((account) => {
        return account.id === id;
    });

    if (!account) {
        console.log("\nAccount not found");
        return;
    }

    if (!account.active) {
        console.log("\nAccount is inactive");
        return;
    }

    if (amount <= 0) {
        console.log("\nInvalid deposit amount");
        return;
    }

    account.balance += amount;

    console.log(
        `\n₹${amount} deposited successfully`
    );

    console.log(
        `New Balance: ₹${account.balance}`
    );
}

// 4. Withdraw money

function withdrawMoney(id, amount) {
    const account = accounts.find((account) => {
        return account.id === id;
    });

    if (!account) {
        console.log("\nAccount not found");
        return;
    }

    if (!account.active) {
        console.log("\nAccount is inactive");
        return;
    }

    if (amount <= 0) {
        console.log("\nInvalid withdrawal amount");
        return;
    }

    if (amount > account.balance) {
        console.log("\nInsufficient balance");
        return;
    }

    account.balance -= amount;

    console.log(
        `\n₹${amount} withdrawn successfully`
    );

    console.log(
        `Remaining Balance: ₹${account.balance}`
    );
}

// 5. Find high balance accounts

function highBalanceAccounts() {
    const result = accounts.filter((account) => {
        return account.balance >= 60000;
    });

    console.log("\n========== HIGH BALANCE ACCOUNTS ==========");
    console.log(result);
}

// 6. Find active accounts

function activeAccounts() {
    const result = accounts.filter((account) => {
        return account.active === true;
    });

    console.log("\n========== ACTIVE ACCOUNTS ==========");
    console.log(result);
}

// 7. Calculate total bank balance

function totalBankBalance() {
    const total = accounts.reduce((sum, account) => {
        return sum + account.balance;
    }, 0);

    console.log("\nTotal Bank Balance:", total);
}

// 8. Calculate average balance

function averageBalance() {
    const total = accounts.reduce((sum, account) => {
        return sum + account.balance;
    }, 0);

    const average = total / accounts.length;

    console.log(
        "\nAverage Account Balance:",
        average.toFixed(2)
    );
}

// 9. Find richest customer

function richestCustomer() {
    const customer = accounts.reduce((richest, account) => {
        return account.balance > richest.balance
            ? account
            : richest;
    });

    console.log("\n========== RICHEST CUSTOMER ==========");
    console.log(customer);
}

// 10. Find Bhopal customers

function bhopalCustomers() {
    const result = accounts.filter((account) => {
        return account.city === "Bhopal";
    });

    console.log("\n========== BHOPAL CUSTOMERS ==========");
    console.log(result);
}

// 11. Get customer names

function customerNames() {
    const names = accounts.map((account) => {
        return account.name;
    });

    console.log("\n========== CUSTOMER NAMES ==========");
    console.log(names);
}

// 12. Sort accounts by balance

function sortByBalance() {
    const result = [...accounts].sort((a, b) => {
        return b.balance - a.balance;
    });

    console.log("\n========== SORTED BY BALANCE ==========");

    result.forEach((account) => {
        console.log(
            `${account.name} - ₹${account.balance}`
        );
    });
}

// 13. Count account types

function accountTypeCount() {
    const result = accounts.reduce((count, account) => {

        if (!count[account.accountType]) {
            count[account.accountType] = 0;
        }

        count[account.accountType]++;

        return count;

    }, {});

    console.log("\n========== ACCOUNT TYPE COUNT ==========");
    console.log(result);
}

// 14. Minimum balance check

function minimumBalanceCheck() {
    const result = accounts.filter((account) => {
        return account.balance < 30000;
    });

    console.log("\n========== LOW BALANCE ACCOUNTS ==========");
    console.log(result);
}


// Function Calls

displayAccounts();

findAccount(104);

depositMoney(101, 5000);

withdrawMoney(102, 10000);

highBalanceAccounts();

activeAccounts();

totalBankBalance();

averageBalance();

richestCustomer();

bhopalCustomers();

customerNames();

sortByBalance();

accountTypeCount();

minimumBalanceCheck();