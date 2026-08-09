const accounts = [
  {
    id: 101,
    name: "Suhani",
    balance: 25000,
    type: "Savings"
  },
  {
    id: 102,
    name: "Rahul",
    balance: 18000,
    type: "Savings"
  },
  {
    id: 103,
    name: "Priya",
    balance: 45000,
    type: "Current"
  },
  {
    id: 104,
    name: "Ankit",
    balance: 12000,
    type: "Savings"
  },
  {
    id: 105,
    name: "Neha",
    balance: 32000,
    type: "Current"
  }
];

// 1. Display all accounts
function displayAccounts() {
  accounts.forEach((account) => {
    console.log(
      `${account.id} | ${account.name} | ₹${account.balance} | ${account.type}`
    );
  });
}

// 2. Find account by ID
function findAccount(id) {
  return accounts.find((account) => {
    return account.id === id;
  });
}

// 3. Get accounts with balance above 20000
function getRichAccounts() {
  return accounts.filter((account) => {
    return account.balance > 20000;
  });
}

// 4. Get only account holders' names
function getNames() {
  return accounts.map((account) => {
    return account.name;
  });
}

// 5. Calculate total bank balance
function getTotalBalance() {
  return accounts.reduce((total, account) => {
    return total + account.balance;
  }, 0);
}

// 6. Find account with highest balance
function getHighestBalance() {
  return accounts.reduce((highest, account) => {
    return account.balance > highest.balance
      ? account
      : highest;
  });
}

// 7. Get Savings accounts
function getSavingsAccounts() {
  return accounts.filter((account) => {
    return account.type === "Savings";
  });
}

// 8. Sort accounts by balance
function sortByBalance() {
  return [...accounts].sort((a, b) => {
    return b.balance - a.balance;
  });
}

// 9. Check if any account has balance below 15000
function checkLowBalance() {
  return accounts.some((account) => {
    return account.balance < 15000;
  });
}

// 10. Calculate average balance
function getAverageBalance() {
  return getTotalBalance() / accounts.length;
}


// ================= OUTPUT =================

console.log("===== ALL ACCOUNTS =====");
displayAccounts();

console.log("\n===== FIND ACCOUNT =====");
console.log(findAccount(103));

console.log("\n===== BALANCE ABOVE 20000 =====");
console.log(getRichAccounts());

console.log("\n===== ACCOUNT HOLDERS =====");
console.log(getNames());

console.log("\n===== TOTAL BALANCE =====");
console.log("₹" + getTotalBalance());

console.log("\n===== HIGHEST BALANCE =====");
console.log(getHighestBalance());

console.log("\n===== SAVINGS ACCOUNTS =====");
console.log(getSavingsAccounts());

console.log("\n===== SORTED ACCOUNTS =====");
console.log(sortByBalance());

console.log("\n===== LOW BALANCE EXISTS =====");
console.log(checkLowBalance());

console.log("\n===== AVERAGE BALANCE =====");
console.log(getAverageBalance());