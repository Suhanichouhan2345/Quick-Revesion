// Day 17 - Library Management System

const books = [
    {
        id: 1,
        title: "JavaScript Complete Guide",
        author: "John Smith",
        category: "Programming",
        price: 850,
        available: true,
        rating: 4.6
    },
    {
        id: 2,
        title: "Clean Code",
        author: "Robert Martin",
        category: "Programming",
        price: 950,
        available: true,
        rating: 4.8
    },
    {
        id: 3,
        title: "Atomic Habits",
        author: "James Clear",
        category: "Self Help",
        price: 550,
        available: false,
        rating: 4.7
    },
    {
        id: 4,
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "Fiction",
        price: 450,
        available: true,
        rating: 4.5
    },
    {
        id: 5,
        title: "Data Structures",
        author: "Mark Allen",
        category: "Programming",
        price: 750,
        available: false,
        rating: 4.3
    },
    {
        id: 6,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        category: "Finance",
        price: 600,
        available: true,
        rating: 4.4
    },
    {
        id: 7,
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        category: "Self Help",
        price: 500,
        available: true,
        rating: 4.6
    }
];


// 1. Display all books

function displayBooks() {
    console.log("========== ALL BOOKS ==========");

    books.forEach((book) => {
        console.log(
            `${book.id}. ${book.title} - ${book.author}`
        );
    });
}


// 2. Find book by ID

function findBook(id) {
    const book = books.find((book) => {
        return book.id === id;
    });

    if (book) {
        console.log("\n========== BOOK FOUND ==========");
        console.log(book);
    } else {
        console.log("\nBook not found");
    }
}


// 3. Find books by category

function getBooksByCategory(category) {
    const result = books.filter((book) => {
        return book.category === category;
    });

    console.log(
        `\n========== ${category.toUpperCase()} BOOKS ==========`
    );

    console.log(result);
}


// 4. Find available books

function availableBooks() {
    const result = books.filter((book) => {
        return book.available === true;
    });

    console.log("\n========== AVAILABLE BOOKS ==========");
    console.log(result);
}


// 5. Find borrowed books

function borrowedBooks() {
    const result = books.filter((book) => {
        return book.available === false;
    });

    console.log("\n========== BORROWED BOOKS ==========");
    console.log(result);
}


// 6. Find highly rated books

function topRatedBooks() {
    const result = books.filter((book) => {
        return book.rating >= 4.5;
    });

    console.log("\n========== TOP RATED BOOKS ==========");
    console.log(result);
}


// 7. Calculate total library value

function totalLibraryValue() {
    const total = books.reduce((sum, book) => {
        return sum + book.price;
    }, 0);

    console.log("\nTotal Library Value:", total);
}


// 8. Calculate average book price

function averageBookPrice() {
    const total = books.reduce((sum, book) => {
        return sum + book.price;
    }, 0);

    const average = total / books.length;

    console.log(
        "\nAverage Book Price:",
        average.toFixed(2)
    );
}


// 9. Find most expensive book

function mostExpensiveBook() {
    const book = books.reduce((expensive, current) => {
        return current.price > expensive.price
            ? current
            : expensive;
    });

    console.log("\n========== MOST EXPENSIVE BOOK ==========");
    console.log(book);
}


// 10. Find cheapest book

function cheapestBook() {
    const book = books.reduce((cheap, current) => {
        return current.price < cheap.price
            ? current
            : cheap;
    });

    console.log("\n========== CHEAPEST BOOK ==========");
    console.log(book);
}


// 11. Get only book titles

function getBookTitles() {
    const titles = books.map((book) => {
        return book.title;
    });

    console.log("\n========== BOOK TITLES ==========");
    console.log(titles);
}


// 12. Search book

function searchBook(keyword) {
    const result = books.filter((book) => {
        return (
            book.title.toLowerCase().includes(
                keyword.toLowerCase()
            ) ||
            book.author.toLowerCase().includes(
                keyword.toLowerCase()
            )
        );
    });

    console.log("\n========== SEARCH RESULT ==========");
    console.log(result);
}


// 13. Sort books by rating

function sortByRating() {
    const result = [...books].sort((a, b) => {
        return b.rating - a.rating;
    });

    console.log("\n========== BOOKS BY RATING ==========");

    result.forEach((book) => {
        console.log(
            `${book.title} - Rating: ${book.rating}`
        );
    });
}


// 14. Sort books by price

function sortByPrice() {
    const result = [...books].sort((a, b) => {
        return a.price - b.price;
    });

    console.log("\n========== BOOKS BY PRICE ==========");

    result.forEach((book) => {
        console.log(
            `${book.title} - ₹${book.price}`
        );
    });
}


// 15. Borrow a book

function borrowBook(id) {
    const book = books.find((book) => {
        return book.id === id;
    });

    if (!book) {
        console.log("\nBook not found");
        return;
    }

    if (!book.available) {
        console.log("\nBook is already borrowed");
        return;
    }

    book.available = false;

    console.log(
        `\n"${book.title}" borrowed successfully`
    );
}


// 16. Return a book

function returnBook(id) {
    const book = books.find((book) => {
        return book.id === id;
    });

    if (!book) {
        console.log("\nBook not found");
        return;
    }

    if (book.available) {
        console.log("\nBook is already available");
        return;
    }

    book.available = true;

    console.log(
        `\n"${book.title}" returned successfully`
    );
}


// 17. Category-wise book count

function categoryCount() {
    const result = books.reduce((count, book) => {

        if (!count[book.category]) {
            count[book.category] = 0;
        }

        count[book.category]++;

        return count;

    }, {});

    console.log("\n========== CATEGORY COUNT ==========");
    console.log(result);
}


// 18. Books cheaper than given price

function booksUnderPrice(price) {
    const result = books.filter((book) => {
        return book.price < price;
    });

    console.log(
        `\n========== BOOKS UNDER ₹${price} ==========`
    );

    console.log(result);
}


// Function Calls

displayBooks();

findBook(3);

getBooksByCategory("Programming");

availableBooks();

borrowedBooks();

topRatedBooks();

totalLibraryValue();

averageBookPrice();

mostExpensiveBook();

cheapestBook();

getBookTitles();

searchBook("Robert");

sortByRating();

sortByPrice();

borrowBook(1);

returnBook(3);

categoryCount();

booksUnderPrice(600);