const books = [
  {
    id: 1,
    title: "Java Programming",
    author: "James",
    price: 650,
    available: true,
    rating: 4.5
  },
  {
    id: 2,
    title: "JavaScript Basics",
    author: "David",
    price: 500,
    available: false,
    rating: 4.2
  },
  {
    id: 3,
    title: "Data Structures",
    author: "Robert",
    price: 800,
    available: true,
    rating: 4.8
  },
  {
    id: 4,
    title: "Web Development",
    author: "John",
    price: 450,
    available: true,
    rating: 4.1
  },
  {
    id: 5,
    title: "Node.js Guide",
    author: "Alex",
    price: 700,
    available: false,
    rating: 4.6
  }
];

// 1. Show all book titles
const titles = books.map(book => {
  return book.title;
});

console.log("Book Titles:");
console.log(titles);


// 2. Find available books
const availableBooks = books.filter(book => {
  return book.available === true;
});

console.log("\nAvailable Books:");
console.log(availableBooks);


// 3. Find books with rating 4.5 or above
const topRatedBooks = books.filter(book => {
  return book.rating >= 4.5;
});

console.log("\nTop Rated Books:");
console.log(topRatedBooks);


// 4. Search book by ID
const searchId = 3;

const searchedBook = books.find(book => {
  return book.id === searchId;
});

console.log("\nSearched Book:");
console.log(searchedBook);


// 5. Calculate total price of all books
const totalPrice = books.reduce((total, book) => {
  return total + book.price;
}, 0);

console.log("\nTotal Price:", totalPrice);


// 6. Find the most expensive book
const expensiveBook = books.reduce((highest, book) => {
  return book.price > highest.price ? book : highest;
});

console.log("\nMost Expensive Book:");
console.log(expensiveBook);


// 7. Sort books by rating
const sortedBooks = [...books].sort((a, b) => {
  return b.rating - a.rating;
});

console.log("\nBooks Sorted By Rating:");
console.log(sortedBooks);


// 8. Check if any book is unavailable
const unavailableBook = books.some(book => {
  return book.available === false;
});

console.log("\nAny Unavailable Book:", unavailableBook);


// 9. Check whether every book has rating above 4
const goodBooks = books.every(book => {
  return book.rating > 4;
});

console.log("\nAll Books Have Rating Above 4:", goodBooks);


// 10. Create book status
const bookStatus = books.map(book => {
  return {
    title: book.title,
    status: book.available ? "Available" : "Issued"
  };
});

console.log("\nBook Status:");
console.log(bookStatus);


// 11. Find books cheaper than 600
const affordableBooks = books.filter(book => {
  return book.price < 600;
});

console.log("\nBooks Under 600:");
console.log(affordableBooks);