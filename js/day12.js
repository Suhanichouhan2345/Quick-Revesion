// ==========================================
// BANK MANAGEMENT SYSTEM
// JavaScript Practice Project
// ==========================================

class BankAccount {
    constructor(accountNumber, holderName, accountType, balance = 0) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.accountType = accountType;
        this.balance = balance;
        this.transactions = [];
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("Invalid deposit amount!");
            return;
        }

        this.balance += amount;

        this.transactions.push({
            type: "DEPOSIT",
            amount: amount,
            balance: this.balance,
            date: new Date().toLocaleString()
        });

        console.log(
            `₹${amount} deposited successfully into ${this.accountNumber}`
        );
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log("Invalid withdrawal amount!");
            return;
        }

        if (amount > this.balance) {
            console.log("Insufficient balance!");
            return;
        }

        this.balance -= amount;

        this.transactions.push({
            type: "WITHDRAW",
            amount: amount,
            balance: this.balance,
            date: new Date().toLocaleString()
        });

        console.log(
            `₹${amount} withdrawn successfully from ${this.accountNumber}`
        );
    }

    getBalance() {
        return this.balance;
    }

    getDetails() {
        return {
            accountNumber: this.accountNumber,
            holderName: this.holderName,
            accountType: this.accountType,
            balance: this.balance
        };
    }

    printStatement() {
        console.log("\n================================");
        console.log(`ACCOUNT STATEMENT`);
        console.log("================================");

        console.log(`Account : ${this.accountNumber}`);
        console.log(`Holder  : ${this.holderName}`);

        if (this.transactions.length === 0) {
            console.log("No transactions available.");
            return;
        }

        this.transactions.forEach((transaction, index) => {
            console.log(`\nTransaction ${index + 1}`);
            console.log(`Type    : ${transaction.type}`);
            console.log(`Amount  : ₹${transaction.amount}`);
            console.log(`Balance : ₹${transaction.balance}`);
            console.log(`Date    : ${transaction.date}`);
        });
    }
}


// ==========================================
// BANK CLASS
// ==========================================

class Bank {

    constructor(name) {
        this.name = name;
        this.accounts = [];
    }

    createAccount(
        accountNumber,
        holderName,
        accountType,
        initialBalance
    ) {

        const existingAccount = this.accounts.find(
            account => account.accountNumber === accountNumber
        );

        if (existingAccount) {
            console.log("Account already exists!");
            return;
        }

        const account = new BankAccount(
            accountNumber,
            holderName,
            accountType,
            initialBalance
        );

        this.accounts.push(account);

        console.log(
            `Account created successfully for ${holderName}`
        );
    }


    findAccount(accountNumber) {

        return this.accounts.find(
            account => account.accountNumber === accountNumber
        );
    }


    deleteAccount(accountNumber) {

        const index = this.accounts.findIndex(
            account => account.accountNumber === accountNumber
        );

        if (index === -1) {
            console.log("Account not found!");
            return;
        }

        const deletedAccount = this.accounts.splice(index, 1);

        console.log(
            `Account ${deletedAccount[0].accountNumber} deleted successfully!`
        );
    }


    transferMoney(fromAccount, toAccount, amount) {

        const sender = this.findAccount(fromAccount);
        const receiver = this.findAccount(toAccount);

        if (!sender || !receiver) {
            console.log("One or both accounts not found!");
            return;
        }

        if (amount <= 0) {
            console.log("Invalid transfer amount!");
            return;
        }

        if (sender.balance < amount) {
            console.log("Insufficient balance!");
            return;
        }

        sender.balance -= amount;
        receiver.balance += amount;

        sender.transactions.push({
            type: "TRANSFER SENT",
            amount: amount,
            balance: sender.balance,
            date: new Date().toLocaleString()
        });

        receiver.transactions.push({
            type: "TRANSFER RECEIVED",
            amount: amount,
            balance: receiver.balance,
            date: new Date().toLocaleString()
        });

        console.log(
            `₹${amount} transferred successfully`
        );
    }


    searchByName(name) {

        return this.accounts.filter(account =>
            account.holderName
                .toLowerCase()
                .includes(name.toLowerCase())
        );
    }


    getAccountsByType(type) {

        return this.accounts.filter(
            account =>
                account.accountType.toLowerCase() ===
                type.toLowerCase()
        );
    }


    getTotalMoney() {

        return this.accounts.reduce(
            (total, account) =>
                total + account.balance,
            0
        );
    }


    getRichestAccount() {

        if (this.accounts.length === 0) {
            return null;
        }

        return this.accounts.reduce(
            (richest, account) =>
                account.balance > richest.balance
                    ? account
                    : richest
        );
    }


    displayAllAccounts() {

        console.log("\n================================");
        console.log("ALL BANK ACCOUNTS");
        console.log("================================");

        this.accounts.forEach((account, index) => {

            console.log(`\nAccount ${index + 1}`);

            console.log(
                `Number : ${account.accountNumber}`
            );

            console.log(
                `Name   : ${account.holderName}`
            );

            console.log(
                `Type   : ${account.accountType}`
            );

            console.log(
                `Balance: ₹${account.balance}`
            );
        });
    }


    bankSummary() {

        console.log("\n================================");
        console.log("BANK SUMMARY");
        console.log("================================");

        console.log(
            `Bank Name       : ${this.name}`
        );

        console.log(
            `Total Accounts  : ${this.accounts.length}`
        );

        console.log(
            `Total Money     : ₹${this.getTotalMoney()}`
        );

        const richest = this.getRichestAccount();

        if (richest) {
            console.log(
                `Richest Account : ${richest.holderName}`
            );

            console.log(
                `Balance         : ₹${richest.balance}`
            );
        }
    }
}


// ==========================================
// CREATE BANK
// ==========================================

const bank = new Bank("National JavaScript Bank");


// ==========================================
// CREATE ACCOUNTS
// ==========================================

bank.createAccount(
    "ACC1001",
    "Rahul Sharma",
    "Savings",
    50000
);

bank.createAccount(
    "ACC1002",
    "Priya Singh",
    "Savings",
    75000
);

bank.createAccount(
    "ACC1003",
    "Aman Verma",
    "Current",
    120000
);

bank.createAccount(
    "ACC1004",
    "Neha Gupta",
    "Savings",
    35000
);

bank.createAccount(
    "ACC1005",
    "Rohit Patel",
    "Current",
    90000
);


// ==========================================
// DISPLAY ACCOUNTS
// ==========================================

bank.displayAllAccounts();


// ==========================================
// FIND ACCOUNT
// ==========================================

console.log("\n================================");
console.log("FIND ACCOUNT");
console.log("================================");

const account = bank.findAccount("ACC1002");

console.log(account.getDetails());


// ==========================================
// DEPOSIT
// ==========================================

console.log("\n================================");
console.log("DEPOSIT");
console.log("================================");

account.deposit(10000);


// ==========================================
// WITHDRAW
// ==========================================

console.log("\n================================");
console.log("WITHDRAW");
console.log("================================");

account.withdraw(5000);


// ==========================================
// TRANSFER
// ==========================================

console.log("\n================================");
console.log("TRANSFER MONEY");
console.log("================================");

bank.transferMoney(
    "ACC1002",
    "ACC1001",
    15000
);


// ==========================================
// SEARCH BY NAME
// ==========================================

console.log("\n================================");
console.log("SEARCH BY NAME");
console.log("================================");

console.log(
    bank.searchByName("rahul")
);


// ==========================================
// SEARCH SAVINGS ACCOUNTS
// ==========================================

console.log("\n================================");
console.log("SAVINGS ACCOUNTS");
console.log("================================");

console.log(
    bank.getAccountsByType("Savings")
);


// ==========================================
// RICHEST ACCOUNT
// ==========================================

console.log("\n================================");
console.log("RICHEST ACCOUNT");
console.log("================================");

const richest = bank.getRichestAccount();

console.log(
    `${richest.holderName} has ₹${richest.balance}`
);


// ==========================================
// TOTAL MONEY
// ==========================================

console.log("\n================================");
console.log("TOTAL MONEY IN BANK");
console.log("================================");

console.log(
    `₹${bank.getTotalMoney()}`
);


// ==========================================
// ACCOUNT STATEMENT
// ==========================================

const rahulAccount = bank.findAccount("ACC1001");

rahulAccount.printStatement();


// ==========================================
// BANK SUMMARY
// ==========================================

bank.bankSummary();


// ==========================================
// DELETE ACCOUNT
// ==========================================

console.log("\n================================");
console.log("DELETE ACCOUNT");
console.log("================================");

bank.deleteAccount("ACC1005");


// ==========================================
// FINAL DISPLAY
// ==========================================

bank.displayAllAccounts();

console.log("\n================================");
console.log("PROGRAM FINISHED");
console.log("================================");