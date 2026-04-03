class Book {
    #title;
    #author;
    #year;
    #isAvailable;

    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
        this.#isAvailable = true;
    }

    get title(){
         return this.#title; 
        }
    set title(value) {
        if (value === "") {
            throw new Error("title cannot be empty");
        }
        this.#title = value;
    }
    get author(){ 
        return this.#author; 
    }
    set author(value) {
        if (value === ""){
            throw new Error("author field cannot be empty");
        }
        this.#author = value;
    }
    get year(){ 
        return this.#year; 
    }
    set year(value){
        if (value <= 0){
            throw new Error("Year must be positive");
        }
        this.#year = value;
    }
    get isAvailable(){ 
        return this.#isAvailable; 
    }

    borrowBook(){
        if (this.#isAvailable){
            this.#isAvailable = false;
        }else{
            return "Book is already borrowed";
        }
    }
    returnBook(){
        if(!this.#isAvailable){
            this.#isAvailable = true;
        }else{
            return "Book is already available";
        }
    }

    matchesTitle(word){
        return this.#title.includes(word);
    }

    getInfo(){
        return `
            Title: ${this.#title}, 
            Author: ${this.#author}, 
            Year: ${this.#year}, 
            Availability: ${this.#isAvailable}`;
        }

}

class Reader{
    #name;
    #borrowedBooks;

    constructor(name){
        this.name=name;
        this.#borrowedBooks = [];
    }

    get name(){
        return this.#name; 
    }
    set name(value){
        if (value === ""){
            throw new Error("Name cannot be empty");
        }
        this.#name = value;
    }

    get borrowedBooks(){
        return this.#borrowedBooks; 
    }
    get borrowedBooksCount(){
        return this.#borrowedBooks.length;
    }

    takeBook(book){
        this.#borrowedBooks.push(book);
        if (book.isAvailable){
            book.borrowBook();
        }else{
            return "Book is not available";
        }
    }
    giveBackBook(book) {
        this.#borrowedBooks = this.#borrowedBooks.filter(b => b !== book);
        book.returnBook();
    }   
    hasBook(book){
        return this.#borrowedBooks.includes(book);
    }

    showBorrowedBooks(){
        return this.#borrowedBooks.map(b => b.title);
    }
    getInfo(){
        return `${this.#name} has ${this.borrowedBooksCount} borrowed books`;
    }
}


class Library {
    #name;
    #books;
    #readers;

    constructor(name){
        this.name = name;
        this.#books = [];
        this.#readers = [];
    }

    
    get name(){ 
        return this.#name; 
    }
    set name(value){
        if (value === ""){
            throw new Error("Library name cannot be empty");
        }
        this.#name = value;
    
    }

    get books(){
        return this.#books;
    }
    get readers(){
        return this.#readers;
    }

    addBook(book){
        this.#books.push(book); 
    }
    registerReader(reader){ 
        this.#readers.push(reader);
    }
    findBookByTitle(title){
        const Book= this.#books.find(b => b.title === title);
        if(Book){
            return Book;
        }
        return null;
        }
    

    findBooksByAuthor(authorName){
        return this.#books.filter(b => b.author === authorName);
    }

    giveBookToReader(title, reader) {
        const book = this.findBookByTitle(title);
        if (book){
            reader.takeBook(book);
        }
        return "Book not found";
    }

    acceptBookFromReader(title, reader){
        const book = this.findBookByTitle(title);
        if(book){
            reader.giveBackBook(book);
        }
        return "Book not found";
    }

    showAvailableBooks(){
        return this.#books.filter(b => b.isAvailable);
    }

    showAllBooks(){
        return this.#books.map(b => b.getInfo());
    }

    getLibraryInfo() {
        return `
        ${this.#name},
        ${this.#books.length} books, 
        ${this.#readers.length} readers`;
    }
}

const book1 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);
const book2 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book3 = new Book("1984", "George Orwell", 1949);

const reader1 = new Reader("Anna");
const reader2 = new Reader("David");

const library = new Library("Central Library");

library.addBook(book1);

library.addBook(book2);
library.addBook(book3);

library.registerReader(reader1);
library.registerReader(reader2);

// console.log("=== Library info ===");
// console.log(library.getLibraryInfo());

// console.log("=== All books ===");
// console.log(library.showAllBooks());

// console.log("=== Find by title ===");
// console.log(library.findBookByTitle("1984"));

// console.log("=== Find by author ===");
// console.log(library.findBooksByAuthor("George Orwell"));

// console.log("=== Available books ===");

// console.log(library.showAvailableBooks());

// console.log("=== Give book to reader ===");
// library.giveBookToReader("The Hobbit", reader1);
// console.log(reader1.showBorrowedBooks());
// console.log(book1.getInfo());

// console.log("=== Give another book to reader ===");
// library.giveBookToReader("Harry Potter", reader1);
// console.log(reader1.getInfo());

// console.log("=== Try to borrow same book again ===");
// library.giveBookToReader("The Hobbit", reader2);

// console.log("=== Return book ===");
// library.acceptBookFromReader("The Hobbit", reader1);
// console.log(reader1.showBorrowedBooks());
// console.log(book1.getInfo());

// console.log("=== Final available books ===");
// console.log(library.showAvailableBooks());

console.log("=== Final library info ===");
console.log(library.getLibraryInfo());
