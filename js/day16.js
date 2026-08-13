// Day 18 - JavaScript Library Management System

let books = [
    {
        id: 1,
        title: "JavaScript Basics",
        author: "John Smith",
        category: "Programming",
        price: 500,
        available: true
    },
    {
        id: 2,
        title: "Clean Code",
        author: "Robert Martin",
        category: "Programming",
        price: 800,
        available: true
    },
    {
        id: 3,
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "Novel",
        price: 450,
        available: false
    },
    {
        id: 4,
        title: "Atomic Habits",
        author: "James Clear",
        category: "Self Help",
        price: 600,
        available: true
    },
    {
        id: 5,
        title: "Data Structures",
        author: "Mark Allen",
        category: "Programming",
        price: 900,
        available: true
    }
];

let members = [
    {
        id: 101,
        name: "Rahul",
        borrowedBooks: []
    },
    {
        id: 102,
        name: "Priya",
        borrowedBooks: []
    },
    {
        id: 103,
        name: "Aman",
        borrowedBooks: []
    }
];

// Find book
function findBook(bookId) {
    return books.find(book => book.id === bookId);
}

// Find member
function findMember(memberId) {
    return members.find(member => member.id === memberId);
}

// Display all books
function showAllBooks() {
    console.log("\n========== ALL BOOKS ==========");

    books.forEach(book => {
        console.log(
            `${book.id}. ${book.title} | ${book.author} | ₹${book.price} | ${
                book.available ? "Available" : "Issued"
            }`
        );
    });
}

// Search book
function searchBook(keyword) {
    const result = books.filter(book =>
        book.title.toLowerCase().includes(keyword.toLowerCase()) ||
        book.author.toLowerCase().includes(keyword.toLowerCase())
    );

    console.log(`\n========== SEARCH: ${keyword} ==========`);

    if (result.length === 0) {
        console.log("No books found.");
        return;
    }

    result.forEach(book => {
        console.log(
            `${book.title} - ${book.author}`
        );
    });
}

// Issue book
function issueBook(bookId, memberId) {
    const book = findBook(bookId);
    const member = findMember(memberId);

    if (!book) {
        console.log("Book not found ❌");
        return;
    }

    if (!member) {
        console.log("Member not found ❌");
        return;
    }

    if (!book.available) {
        console.log("Book is already issued ❌");
        return;
    }

    book.available = false;
    member.borrowedBooks.push(bookId);

    console.log(
        `"${book.title}" issued to ${member.name} ✅`
    );
}

// Return book
function returnBook(bookId, memberId) {
    const book = findBook(bookId);
    const member = findMember(memberId);

    if (!book || !member) {
        console.log("Invalid book or member ❌");
        return;
    }

    const index = member.borrowedBooks.indexOf(bookId);

    if (index === -1) {
        console.log("This member did not borrow this book ❌");
        return;
    }

    member.borrowedBooks.splice(index, 1);
    book.available = true;

    console.log(
        `"${book.title}" returned by ${member.name} ✅`
    );
}

// Show available books
function showAvailableBooks() {
    const availableBooks = books.filter(book => book.available);

    console.log("\n========== AVAILABLE BOOKS ==========");

    availableBooks.forEach(book => {
        console.log(
            `${book.title} - ₹${book.price}`
        );
    });
}

// Show programming books
function showProgrammingBooks() {
    const programmingBooks = books.filter(
        book => book.category === "Programming"
    );

    console.log("\n========== PROGRAMMING BOOKS ==========");

    programmingBooks.forEach(book => {
        console.log(book.title);
    });
}

// Calculate total library book value
function totalLibraryValue() {
    return books.reduce((total, book) => {
        return total + book.price;
    }, 0);
}

// Find expensive books
function expensiveBooks(price) {
    return books.filter(book => book.price > price);
}

// Sort books by price
function sortBooksByPrice() {
    const sortedBooks = [...books].sort(
        (a, b) => a.price - b.price
    );

    console.log("\n========== BOOKS BY PRICE ==========");

    sortedBooks.forEach(book => {
        console.log(
            `${book.title} → ₹${book.price}`
        );
    });
}

// Show member details
function showMember(memberId) {
    const member = findMember(memberId);

    if (!member) {
        console.log("Member not found ❌");
        return;
    }

    console.log("\n========== MEMBER DETAILS ==========");
    console.log("ID:", member.id);
    console.log("Name:", member.name);

    if (member.borrowedBooks.length === 0) {
        console.log("No books borrowed.");
        return;
    }

    console.log("Borrowed Books:");

    member.borrowedBooks.forEach(bookId => {
        const book = findBook(bookId);
        console.log(`- ${book.title}`);
    });
}


// ================================
// TESTING
// ================================

console.log("📚 LIBRARY MANAGEMENT SYSTEM");

showAllBooks();

searchBook("JavaScript");

issueBook(1, 101);

issueBook(2, 102);

showMember(101);

showMember(102);

showAvailableBooks();

returnBook(1, 101);

showMember(101);

showProgrammingBooks();

console.log(
    "\nTotal Library Value:",
    `₹${totalLibraryValue()}`
);

console.log("\n========== BOOKS ABOVE ₹500 ==========");

const costlyBooks = expensiveBooks(500);

costlyBooks.forEach(book => {
    console.log(
        `${book.title} → ₹${book.price}`
    );
});

sortBooksByPrice();

console.log("\n========== FINAL BOOK STATUS ==========");

books.forEach(book => {
    console.log(
        `${book.title} → ${
            book.available ? "Available ✅" : "Issued ❌"
        }`
    );
});