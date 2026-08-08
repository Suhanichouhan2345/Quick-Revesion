import java.util.*;

public class day11 {

    static class Book {
        int id;
        String title;
        String author;
        boolean issued;

        Book(int id, String title, String author) {
            this.id = id;
            this.title = title;
            this.author = author;
            this.issued = false;
        }
        void displayBook() {
            System.out.println(
                "ID: " + id +
                " | Title: " + title +
                " | Author: " + author +
                " | Status: " + (issued ? "Issued" : "Available")
            );
        }
    }

    static ArrayList<Book> books = new ArrayList<>();

    // Add book
    static void addBook(int id, String title, String author) {
        books.add(new Book(id, title, author));
        System.out.println("Book added successfully: " + title);
    }

    // Display all books
    static void displayBooks() {
        System.out.println("\n----- All Books -----");

        if (books.isEmpty()) {
            System.out.println("No books available.");
            return;
        }

        for (Book book : books) {
            book.displayBook();
        }
    }

    // Search book by ID
    static void searchBook(int id) {
        for (Book book : books) {
            if (book.id == id) {
                System.out.println("\nBook Found:");
                book.displayBook();
                return;
            }
        }

        System.out.println("Book not found.");
    }

    // Search book by title
    static void searchByTitle(String title) {
        boolean found = false;

        for (Book book : books) {
            if (book.title.equalsIgnoreCase(title)) {
                book.displayBook();
                found = true;
            }
        }

        if (!found) {
            System.out.println("No book found with title: " + title);
        }
    }

    // Issue book
    static void issueBook(int id) {
        for (Book book : books) {
            if (book.id == id) {

                if (book.issued) {
                    System.out.println("Book is already issued.");
                } else {
                    book.issued = true;
                    System.out.println("Book issued successfully.");
                }

                return;
            }
        }

        System.out.println("Book not found.");
    }

    // Return book
    static void returnBook(int id) {
        for (Book book : books) {
            if (book.id == id) {

                if (!book.issued) {
                    System.out.println("Book was not issued.");
                } else {
                    book.issued = false;
                    System.out.println("Book returned successfully.");
                }

                return;
            }
        }

        System.out.println("Book not found.");
    }

    // Display available books
    static void availableBooks() {
        System.out.println("\n----- Available Books -----");

        for (Book book : books) {
            if (!book.issued) {
                book.displayBook();
            }
        }
    }

    // Count issued books
    static int countIssuedBooks() {
        int count = 0;

        for (Book book : books) {
            if (book.issued) {
                count++;
            }
        }

        return count;
    }

    public static void main(String[] args) {

        // Add books
        addBook(101, "Java Programming", "James Gosling");
        addBook(102, "Data Structures", "Robert Lafore");
        addBook(103, "Clean Code", "Robert Martin");
        addBook(104, "JavaScript Guide", "David Flanagan");
        addBook(105, "Algorithms", "Thomas Cormen");

        // Display all books
        displayBooks();

        // Search book
        System.out.println("\n----- Search By ID -----");
        searchBook(103);

        // Search by title
        System.out.println("\n----- Search By Title -----");
        searchByTitle("Algorithms");

        // Issue books
        System.out.println("\n----- Issue Books -----");
        issueBook(102);
        issueBook(105);

        // Try issuing same book
        issueBook(102);

        // Display available books
        availableBooks();

        // Count issued books
        System.out.println(
            "\nTotal Issued Books: " + countIssuedBooks()
        );

        // Return book
        System.out.println("\n----- Return Book -----");
        returnBook(102);

        // Final result
        displayBooks();

        System.out.println(
            "\nTotal Issued Books: " + countIssuedBooks()
        );
    }
}
