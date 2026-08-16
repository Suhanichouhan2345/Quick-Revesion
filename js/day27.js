// ==========================================
//          BANK MANAGEMENT SYSTEM
// ==========================================

let accounts = [
    {
        id: 101,
        name: "Rahul Sharma",
        age: 22,
        city: "Bhopal",
        balance: 45000,
        type: "Savings",
        transactions: []
    },
    {
        id: 102,
        name: "Priya Singh",
        age: 24,
        city: "Indore",
        balance: 72000,
        type: "Savings",
        transactions: []
    },
    {
        id: 103,
        name: "Aman Verma",
        age: 25,
        city: "Gwalior",
        balance: 38000,
        type: "Current",
        transactions: []
    },
    {
        id: 104,
        name: "Neha Patel",
        age: 21,
        city: "Bhopal",
        balance: 56000,
        type: "Savings",
        transactions: []
    },
    {
        id: 105,
        name: "Rohit Jain",
        age: 27,
        city: "Indore",
        balance: 91000,
        type: "Current",
        transactions: []
    }
];


// ==========================================
// 1. DISPLAY ALL ACCOUNTS
// ==========================================

function displayAccounts() {

    console.log("\n===== ALL BANK ACCOUNTS =====");

    accounts.forEach((account) => {

        console.log(
            `ID: ${account.id} | ${account.name} | Balance: ₹${account.balance}`
        );

    });
}

displayAccounts();


// ==========================================
// 2. FIND ACCOUNT
// ==========================================

function findAccount(id) {

    const account = accounts.find((account) => {

        return account.id === id;

    });

    if (account) {

        console.log("\n===== ACCOUNT FOUND =====");
        console.log(account);

    } else {

        console.log("\nAccount not found");

    }
}

findAccount(103);


// ==========================================
// 3. DEPOSIT MONEY
// ==========================================

function depositMoney(id, amount) {

    const account = accounts.find((account) => {

        return account.id === id;

    });

    if (!account) {

        console.log("\nAccount not found");
        return;

    }

    if (amount <= 0) {

        console.log("\nInvalid deposit amount");
        return;

    }

    account.balance += amount;

    account.transactions.push({
        type: "Deposit",
        amount: amount,
        date: new Date().toLocaleString()
    });

    console.log("\n===== MONEY DEPOSITED =====");
    console.log("Account:", account.name);
    console.log("Amount:", `₹${amount}`);
    console.log("New Balance:", `₹${account.balance}`);
}

depositMoney(101, 5000);


// ==========================================
// 4. WITHDRAW MONEY
// ==========================================

function withdrawMoney(id, amount) {

    const account = accounts.find((account) => {

        return account.id === id;

    });

    if (!account) {

        console.log("\nAccount not found");
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

    account.transactions.push({
        type: "Withdrawal",
        amount: amount,
        date: new Date().toLocaleString()
    });

    console.log("\n===== MONEY WITHDRAWN =====");
    console.log("Account:", account.name);
    console.log("Amount:", `₹${amount}`);
    console.log("Remaining Balance:", `₹${account.balance}`);
}

withdrawMoney(102, 8000);


// ==========================================
// 5. TRANSFER MONEY
// ==========================================

function transferMoney(senderId, receiverId, amount) {

    const sender = accounts.find((account) => {

        return account.id === senderId;

    });

    const receiver = accounts.find((account) => {

        return account.id === receiverId;

    });

    if (!sender || !receiver) {

        console.log("\nInvalid sender or receiver");
        return;

    }

    if (amount <= 0) {

        console.log("\nInvalid amount");
        return;

    }

    if (sender.balance < amount) {

        console.log("\nInsufficient balance");
        return;

    }

    sender.balance -= amount;
    receiver.balance += amount;

    sender.transactions.push({
        type: "Transfer Sent",
        amount: amount,
        to: receiver.name,
        date: new Date().toLocaleString()
    });

    receiver.transactions.push({
        type: "Transfer Received",
        amount: amount,
        from: sender.name,
        date: new Date().toLocaleString()
    });

    console.log("\n===== TRANSFER SUCCESSFUL =====");
    console.log(`${sender.name} sent ₹${amount} to ${receiver.name}`);

}

transferMoney(101, 104, 3000);


// ==========================================
// 6. TOTAL BANK BALANCE
// ==========================================

function totalBankBalance() {

    const total = accounts.reduce((sum, account) => {

        return sum + account.balance;

    }, 0);

    console.log("\nTotal Bank Balance:", `₹${total}`);

}

totalBankBalance();


// ==========================================
// 7. AVERAGE BALANCE
// ==========================================

function averageBalance() {

    const total = accounts.reduce((sum, account) => {

        return sum + account.balance;

    }, 0);

    const average = total / accounts.length;

    console.log(
        "\nAverage Account Balance:",
        `₹${average.toFixed(2)}`
    );

}

averageBalance();


// ==========================================
// 8. RICHEST ACCOUNT
// ==========================================

function richestAccount() {

    const account = accounts.reduce((max, current) => {

        return current.balance > max.balance
            ? current
            : max;

    });

    console.log("\n===== RICHEST ACCOUNT =====");
    console.log(account);

}

richestAccount();


// ==========================================
// 9. LOW BALANCE ACCOUNTS
// ==========================================

function lowBalanceAccounts() {

    const result = accounts.filter((account) => {

        return account.balance < 50000;

    });

    console.log("\n===== LOW BALANCE ACCOUNTS =====");
    console.log(result);

}

lowBalanceAccounts();


// ==========================================
// 10. BHOPAL ACCOUNTS
// ==========================================

function bhopalAccounts() {

    const result = accounts.filter((account) => {

        return account.city === "Bhopal";

    });

    console.log("\n===== BHOPAL ACCOUNTS =====");
    console.log(result);

}

bhopalAccounts();


// ==========================================
// 11. SAVINGS ACCOUNTS
// ==========================================

function savingsAccounts() {

    const result = accounts.filter((account) => {

        return account.type === "Savings";

    });

    console.log("\n===== SAVINGS ACCOUNTS =====");
    console.log(result);

}

savingsAccounts();


// ==========================================
// 12. GET ALL ACCOUNT HOLDERS
// ==========================================

function getAccountHolders() {

    const names = accounts.map((account) => {

        return account.name;

    });

    console.log("\n===== ACCOUNT HOLDERS =====");
    console.log(names);

}

getAccountHolders();


// ==========================================
// 13. SORT BY BALANCE
// ==========================================

function sortByBalance() {

    const sorted = [...accounts].sort((a, b) => {

        return b.balance - a.balance;

    });

    console.log("\n===== BALANCE HIGH TO LOW =====");
    console.log(sorted);

}

sortByBalance();


// ==========================================
// 14. SEARCH ACCOUNT BY NAME
// ==========================================

function searchAccount(keyword) {

    const result = accounts.filter((account) => {

        return account.name
            .toLowerCase()
            .includes(keyword.toLowerCase());

    });

    console.log("\n===== SEARCH RESULT =====");
    console.log(result);

}

searchAccount("rahul");


// ==========================================
// 15. CHECK IF ANY ACCOUNT HAS > 1 LAKH
// ==========================================

function checkMillionaireAccount() {

    const result = accounts.some((account) => {

        return account.balance >= 100000;

    });

    console.log(
        "\nAny account with ₹1,00,000+?",
        result
    );

}

checkMillionaireAccount();


// ==========================================
// 16. CHECK ALL ACCOUNTS VALID
// ==========================================

function checkAllAccounts() {

    const result = accounts.every((account) => {

        return account.balance >= 0;

    });

    console.log(
        "\nAll accounts have valid balance?",
        result
    );

}

checkAllAccounts();


// ==========================================
// 17. ADD NEW ACCOUNT
// ==========================================

function createAccount(
    name,
    age,
    city,
    balance,
    type
) {

    if (age < 18) {

        console.log("\nAccount holder must be 18+");
        return;

    }

    if (balance < 1000) {

        console.log("\nMinimum balance should be ₹1000");
        return;

    }

    const newAccount = {

        id: 100 + accounts.length + 1,
        name: name,
        age: age,
        city: city,
        balance: balance,
        type: type,
        transactions: []

    };

    accounts.push(newAccount);

    console.log("\n===== ACCOUNT CREATED =====");
    console.log(newAccount);

}

createAccount(
    "Karan Malviya",
    23,
    "Bhopal",
    35000,
    "Savings"
);


// ==========================================
// 18. DELETE ACCOUNT
// ==========================================

function deleteAccount(id) {

    const index = accounts.findIndex((account) => {

        return account.id === id;

    });

    if (index === -1) {

        console.log("\nAccount not found");
        return;

    }

    const deleted = accounts.splice(index, 1);

    console.log("\n===== ACCOUNT DELETED =====");
    console.log(deleted[0]);

}

deleteAccount(103);


// ==========================================
// 19. ACCOUNT STATEMENT
// ==========================================

function accountStatement(id) {

    const account = accounts.find((account) => {

        return account.id === id;

    });

    if (!account) {

        console.log("\nAccount not found");
        return;

    }

    console.log("\n================================");
    console.log("         ACCOUNT STATEMENT");
    console.log("================================");

    console.log("Account Holder:", account.name);
    console.log("Account ID:", account.id);
    console.log("Balance:", `₹${account.balance}`);

    console.log("\nTransactions:");

    if (account.transactions.length === 0) {

        console.log("No transactions available");

    } else {

        account.transactions.forEach((transaction) => {

            console.log(
                `${transaction.type} | ₹${transaction.amount} | ${transaction.date}`
            );

        });

    }

}

accountStatement(101);


// ==========================================
// 20. FINAL BANK REPORT
// ==========================================

function bankReport() {

    const totalBalance = accounts.reduce((sum, account) => {

        return sum + account.balance;

    }, 0);

    const highestAccount = accounts.reduce((max, account) => {

        return account.balance > max.balance
            ? account
            : max;

    });

    console.log("\n");
    console.log("======================================");
    console.log("          FINAL BANK REPORT");
    console.log("======================================");

    console.log("Total Accounts :", accounts.length);
    console.log("Total Balance  :", `₹${totalBalance}`);
    console.log("Highest Balance:", highestAccount.name);
    console.log("Amount         :", `₹${highestAccount.balance}`);

    console.log("======================================");
    console.log("       BANK SYSTEM COMPLETED");
    console.log("======================================");

}

bankReport();