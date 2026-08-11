const accounts = [
  {
    id: 101,
    name: "Suhani",
    balance: 25000,
    type: "Savings",
    active: true
  },
  {
    id: 102,
    name: "Riya",
    balance: 18000,
    type: "Savings",
    active: true
  },
  {
    id: 103,
    name: "Ankit",
    balance: 45000,
    type: "Current",
    active: false
  },
  {
    id: 104,
    name: "Priya",
    balance: 32000,
    type: "Savings",
    active: true
  },
  {
    id: 105,
    name: "Rahul",
    balance: 12000,
    type: "Current",
    active: true
  }
];

// 1. Total money in all accounts
const totalBalance = accounts.reduce((total, account) => {
  return total + account.balance;
}, 0);

console.log("Total Balance:", totalBalance);


// 2. Find active accounts
const activeAccounts = accounts.filter(account => {
  return account.active === true;
});

console.log("\nActive Accounts:");
console.log(activeAccounts);


// 3. Find accounts having balance greater than 20000
const richAccounts = accounts.filter(account => {
  return account.balance > 20000;
});

console.log("\nAccounts Above 20000:");
console.log(richAccounts);


// 4. Get only account holders' names
const accountNames = accounts.map(account => {
  return account.name;
});

console.log("\nAccount Holders:");
console.log(accountNames);


// 5. Find a particular account
const searchId = 103;

const account = accounts.find(account => {
  return account.id === searchId;
});

console.log("\nSearched Account:");
console.log(account);


// 6. Check whether any account has balance above 40000
const hasHighBalance = accounts.some(account => {
  return account.balance > 40000;
});

console.log("\nAny Account Above 40000:", hasHighBalance);


// 7. Sort accounts by balance
const sortedAccounts = [...accounts].sort((a, b) => {
  return b.balance - a.balance;
});

console.log("\nAccounts Sorted By Balance:");
console.log(sortedAccounts);


// 8. Calculate average balance
const averageBalance = totalBalance / accounts.length;

console.log("\nAverage Balance:", averageBalance.toFixed(2));


// 9. Add status to every account
const accountStatus = accounts.map(account => {
  return {
    ...account,
    status: account.active ? "Active" : "Inactive"
  };
});

console.log("\nAccount Status:");
console.log(accountStatus);


// 10. Find the account with highest balance
const highestBalance = accounts.reduce((highest, account) => {
  return account.balance > highest.balance ? account : highest;
});

console.log("\nHighest Balance Account:");
console.log(highestBalance);