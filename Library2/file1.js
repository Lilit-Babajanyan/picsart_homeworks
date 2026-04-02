class Book{
    constructor(title, author, year){
        this.title = title,
        this.author = author,
        this.year = year,
        this.isAvailable = true;
    }

    getInfo(){
        return `
            Title: ${this.title}
            Author: ${this.author}
            Year: ${this.year}
            Available: ${this.isAvailable}`;
    }

    borrowBook(){
        if(this.isAvailable === true){
            this.isAvailable = false;
            return;
        }
        return "the book is unavailable";

    }
    
    returnBook(){
        if(this.isAvailable === false){
            this.isAvailable = true;
            return;
        }
        return "the book is already available";

    }

    matchesAuthor(authorName) {
        return this.author.toLowerCase() === authorName.toLowerCase();
    }

    matchesTitle(word){
        return this.title.includes(word);    
    
}
}

class Library {
    constructor(){
        this.books = [];
    }

    addBook(book){
        this.books.push(book);
    }

    removeBook(title){
        for(let i =0; i<this.books.length; i++){
            if(this.books[i].title === title){
                this.books.splice(i, 1);  
                return `the book with ${this.books[i].title} is removed`;                
            }
        }
        return;
    }

    findBookByTitle(title){
        for(let i =0; i<this.books.length; i++){
            if(this.books[i].title === title){
                return this.books[i];                
            }
        }
        return null;
    }

    findBooksByAuthor(authorName){
        let newArr = [];
        for(let i = 0; i < this.books.length; i++){
            if(this.books[i].author === authorName){
                newArr.push(this.books[i]);                
            }
        }
        return newArr;
    }

    getAvailableBooks(){
        return(this.books.filter(b => b.isAvailable === true));
    }

    borrowBook(title){
            for(let i = 0; i < this.books.length; i++){
                if(this.books[i].title === title){
                    this.books[i].borrowBook();            
            }
        }
    }
    borrowBook(title){
    for (let i = 0; i < this.books.length; i++){
        if (this.books[i].title === title){
            return this.books[i].borrowBook();
        }
    }
    return "Book not found";
}

    returnBook(title){
        for (let i = 0; i < this.books.length; i++){
        if (this.books[i].title === title){
            return this.books[i].returnBook();
        }
    }
    return "Book not found";
    }

    showAllBooks(){
        for(let i = 0; i < this.books.length; i++){
            console.log(this.books[i].getInfo());
        }
        return;
    }

    countBooks(){
        return this.books.length;
    }

    countAvailableBooks(){
    let res = this.getAvailableBooks();
    return res.length; 
    }

    searchBooks(word){
        let arr=[];
        for(let i = 0; i<this.books.length; i++){
            if(this.books[i].matchesTitle(word)){
                arr.push(this.books[i]);
            }
        }
        return arr;
    }

    
    getOldestBook(){
    if(this.books.length === 0){
        return null;
    }
    let oldest = this.books[0];
    for(let i = 1; i < this.books.length; i++){
        if(this.books[i].year < oldest.year){
            oldest = this.books[i];
        }
    }

    return oldest;
}

}

const myLibrary =new Library();

const book1 = new Book("1984", "George Orwell", 1949);
const book2 = new Book("Animal Farm", "George Orwell", 1945);
const book3 = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 1997);
const book4 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
const book6 = new Book("Homage to Catalonia", "George Orwell", 1938);

myLibrary.addBook(book1);
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);
myLibrary.addBook(book6);

// console.log(myLibrary.findBooksByAuthor("George Orwell"));
// console.log(myLibrary.getAvailableBooks());
// myLibrary.showAllBooks();
// console.log(myLibrary.countBooks());
// console.log(myLibrary.countAvailableBooks());
// console.log(myLibrary.searchBooks("Hom"))
// console.log(myLibrary.getOldestBook()); 

