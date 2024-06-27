// Define the Book Object
function Book(title, author, ISBN, isAvailable){
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isAvailable = isAvailable;
};

const book1 = new Book('Tenggelamnya', 'Araihan', '123456789', true);
const book2 = new Book('Kahit', 'Zain', '987654321', true);

console.log(book1);
console.log(book2);

//  Create Library Object
function Library(book){
    this.books = [];
};

// Method to add book to the library
Library.prototype.addBook = function(book){
    this.books.push(book);
};

// Method to borrow new book from the library
Library.prototype.borrowBook = function(ISBN){
    const book = this.books.find(b => b.ISBN === ISBN);

    if (book && book.isAvailable){
        book.isAvailable = false;
        console.log('You have successfully borrowed ' + book.title);
    }else{
        console.log('book is not avalaible');
    }
};

// Method to return a book to the library
Library.prototype.returnBook = function(ISBN){
    const book = this.books.find(b => b.ISBN === ISBN);
    if(book){
        book.isAvailable = true;
        console.log('You have successfully returned ' + book.title);
    }else{
        console.log('The not found in the library');
    }
}

// Method to display avalaible books
Library.prototype.displayBooks = function(){
    const isAvailable = this.books.filter(b => b.isAvailable);
    console.log('Book Avalaible : ');
    isAvailable.forEach(b => {
        console.log(`${b.title} by ${b.author}`);
    })
}

const library = new Library();
library.addBook(book1);
library.addBook(book2);
console.log('---------------------------------');
console.log(library.books)

library.borrowBook('123456789');
library.borrowBook('123456789');
library.returnBook('123456789');

library.displayBooks()
