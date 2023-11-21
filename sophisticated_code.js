/*
* Filename: sophisticated_code.js
* Description: This code is a complex implementation of a bookstore inventory management system using JavaScript.
* Author: Developer
*/

// Class representing a book
class Book {
  constructor(title, author, genre, price, quantity) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
    this.quantity = quantity;
  }

  getFormattedPrice() {
    return `$${this.price.toFixed(2)}`;
  }

  getBookInfo() {
    return `${this.title} by ${this.author}`;
  }

  increaseQuantity(amount) {
    this.quantity += amount;
  }

  decreaseQuantity(amount) {
    this.quantity -= amount;
  }
}

// Class representing the bookstore inventory
class BookstoreInventory {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  getTotalQuantity() {
    let totalQuantity = 0;
    for (const book of this.books) {
      totalQuantity += book.quantity;
    }
    return totalQuantity;
  }

  searchBooksByTitle(title) {
    const foundBooks = [];
    for (const book of this.books) {
      if (book.title.toLowerCase().includes(title.toLowerCase())) {
        foundBooks.push(book);
      }
    }
    return foundBooks;
  }

  searchBooksByAuthor(author) {
    const foundBooks = [];
    for (const book of this.books) {
      if (book.author.toLowerCase().includes(author.toLowerCase())) {
        foundBooks.push(book);
      }
    }
    return foundBooks;
  }

  calculateInventoryValue() {
    let totalInventoryValue = 0;
    for (const book of this.books) {
      totalInventoryValue += book.price * book.quantity;
    }
    return totalInventoryValue;
  }

  getGenreStats() {
    const genreStats = {};
    for (const book of this.books) {
      if (genreStats.hasOwnProperty(book.genre)) {
        genreStats[book.genre]++;
      } else {
        genreStats[book.genre] = 1;
      }
    }
    return genreStats;
  }
}

// Instantiate the BookstoreInventory class
const inventory = new BookstoreInventory();

// Add sample books to the inventory
inventory.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald", "Classic", 9.99, 10));
inventory.addBook(new Book("To Kill a Mockingbird", "Harper Lee", "Classic", 12.99, 5));
inventory.addBook(new Book("1984", "George Orwell", "Dystopian", 14.99, 15));
inventory.addBook(new Book("The Hobbit", "J.R.R. Tolkien", "Fantasy", 11.99, 20));
inventory.addBook(new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", "Fantasy", 19.99, 30));
inventory.addBook(new Book("The Catcher in the Rye", "J.D. Salinger", "Classic", 10.99, 8));

// Usage examples
console.log(`Total books in inventory: ${inventory.getTotalQuantity()}`);
console.log(`Books containing 'the' in the title: ${inventory.searchBooksByTitle("the")}`);
console.log(`Books by author 'J.R.R. Tolkien': ${inventory.searchBooksByAuthor("J.R.R. Tolkien")}`);
console.log(`Total inventory value: ${inventory.calculateInventoryValue()}`);
console.log(`Genre statistics: ${JSON.stringify(inventory.getGenreStats())}`);