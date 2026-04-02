function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.isAvailable = true;
}

Book.prototype.getInfo = function() {
    return `
        Title: ${this.title}
        Author: ${this.author}
        Year: ${this.year}
        Available: ${this.isAvailable}`;
}

Book.prototype.borrowBook = function(){
    if(this.isAvailable){
        this.isAvailable = false;
        return;
    }
    return "the book is unavailable";
}

Book.prototype.returnBook = function(){
    if(!this.isAvailable){
        this.isAvailable = true;
        return;
    }
    return "the book is already available";
}

Book.prototype.matchesAuthor = function(authorName) {
    return this.author.toLowerCase() === authorName.toLowerCase();
}

Book.prototype.matchesTitle = function(word){
    return this.title.toLowerCase().includes(word.toLowerCase());
}

function Library() {
    this.books = [];
}

Library.prototype.addBook = function(book){
    this.books.push(book);
}

Library.prototype.removeBook = function(title){
    for(var i = 0; i < this.books.length; i++){
        if(this.books[i].title === title){
            var removedTitle = this.books[i].title;
            this.books.splice(i, 1);
            return "the book with " + removedTitle + " is removed";
        }
    }
    return null;
}

Library.prototype.findBookByTitle = function(title){
    for(var i = 0; i < this.books.length; i++){
        if(this.books[i].title === title){
            return this.books[i];
        }
    }
    return null;
}

Library.prototype.findBooksByAuthor = function(authorName){
    var result = [];
    for(var i = 0; i < this.books.length; i++){
        if(this.books[i].matchesAuthor(authorName)){
            result.push(this.books[i]);
        }
    }
    return result;
}

Library.prototype.getAvailableBooks = function(){
    return this.books.filter(function(b){ return b.isAvailable; });
}

Library.prototype.borrowBook = function(title){
    for(var i = 0; i < this.books.length; i++){
        if(this.books[i].title === title){
            return this.books[i].borrowBook();
        }
    }
    return "Book not found";
}

Library.prototype.returnBook = function(title){
    for(var i = 0; i < this.books.length; i++){
        if(this.books[i].title === title){
            return this.books[i].returnBook();
        }
    }
    return "Book not found";
}

Library.prototype.showAllBooks = function(){
    for(var i = 0; i < this.books.length; i++){
        console.log(this.books[i].getInfo());
    }
}

Library.prototype.countBooks = function(){
    return this.books.length;
}

Library.prototype.countAvailableBooks = function(){
    return this.getAvailableBooks().length;
}

Library.prototype.searchBooks = function(word){
    var result = [];
    for(var i = 0; i < this.books.length; i++){
        if(this.books[i].matchesTitle(word)){
            result.push(this.books[i]);
        }
    }
    return result;
}

Library.prototype.getOldestBook = function(){
    if(this.books.length === 0) return null;
    var oldest = this.books[0];
    for(var i = 1; i < this.books.length; i++){
        if(this.books[i].year < oldest.year){
            oldest = this.books[i];
        }
    }
    return oldest;
}

var myLibrary = new Library();

var book1 = new Book("1984", "George Orwell", 1949);
var book2 = new Book("Animal Farm", "George Orwell", 1945);
var book3 = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 1997);
var book4 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
var book5 = new Book("Homage to Catalonia", "George Orwell", 1938);

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);
myLibrary.addBook(book5);

//console.log(myLibrary.findBooksByAuthor("George Orwell"));
// console.log(myLibrary.getAvailableBooks());
// myLibrary.showAllBooks();
// console.log(myLibrary.countBooks());
// console.log(myLibrary.countAvailableBooks());
// console.log(myLibrary.searchBooks("Hom"))
// console.log(myLibrary.getOldestBook()); 

