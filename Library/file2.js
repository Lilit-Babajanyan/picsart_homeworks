class Book{
    constructor(id, title, author, year){
    this.id = id;
    this.title=title;
    this.author=author;
    this.year=year;
    this.isAvailable = true;
}
}

class Library{
constructor(name){
    this.name=name;
    this.books=[];
}

addBook(book){
    if(!book.id){
        throw new Error("Book must have an id");
    }

    if(!book.title){
        throw new Error("Book must have a title");
    }

    if(!book.author){
        throw new Error("Book must have an author");
    }

    if(typeof book.year !== "number"){
        throw new Error("Book's year must be a number");
    }

    const bookId = this.books.some(b => b.id === book.id);
    if (bookId) {
        throw new Error("The book with this id already exists");
    }
    this.books.push(book);
    console.log("Book added successfully");
}

removeBook(id){
    const exists = this.books.findIndex(book=>book.id===id);
    if(exists===-1){
        console.log("Error");
    }
    this.books=this.books.filter(book => book.id === id);
    console.log("The books with this id is removed");
}

borrowBook(id){
   const theBook = this.books.find(book => book.id === id);

   if (!theBook) {
       throw new Error("The book with this id does not exist");}
    if(!theBook.isAvailable){
        throw new Error("Error");
    }else {
       theBook.isAvailable=false;
   }
}
returnBook(id){
    const bookId=this.books.find(book=>book.id===id);
    if(!bookId){
        throw new Error("The book does not exist");
    }
    if(bookId.isAvailable){
        throw new Error("Error");
    }else {
       bookId.isAvailable=true;
   }
}

findBookByTitle(title){
    let book = this.books.find(book=> book.title === title);
    return book;
    }

findBookByAuthor(author){
    let authorOfTheBook= this.books.filter(book=> book.author === author);
    return authorOfTheBook;
}
listAvailableBooks(){
    const availables= this.books.filter(book => book.isAvailable);
    return availables;
}
listBorrowedBooks(){
    const borrowedBooks=this.books.filter(book => !book.isAvailable);
    return borrowedBooks;
}
showLibraryInfo(){
    console.log(this.books.length);
    console.log(this.name);
    console.log(this.listAvailableBooks().length);
    console.log(this.listBorrowedBooks().length);
}
}

const myLibrary=new Library("Lilit's Library");

const book1 = new Book(1, "1984", "George Orwell", 1949);
const book2=new Book(2, "The Hobbit", "J.R.R. Tolkien", 1937);
const book3 = new Book(3, "Dune", "Frank Herbert", 1965);
const book4 = new Book(4, "To Kill a Mockingbird", "Harper Lee", 1960);
const book5 = new Book(5, "Pride and Prejudice", "Jane Austen", 1813);

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);
myLibrary.addBook(book5);

//myLibrary.removeBook(2);
//myLibrary.borrowBook(3);
//myLibrary.borrowBook(3);
//console.log(myLibrary.findBookByTitle("Dune"));
//console.log(myLibrary.findBookByAuthor("Harper Lee"));
//console.log(myLibrary.books);
//console.log(myLibrary.listAvailableBooks());
//console.log(myLibrary.listBorrowedBooks());
myLibrary.showLibraryInfo();