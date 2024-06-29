class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isBorrowed = false;
    }

    borrow(){
        if(!this.isBorrowed){
            this.isBorrowed = true;
            console.log(`${this.title} has been borrowed`);
        }else{
            console.log(`${this.title} is already borrowed`);
        }
    }

    return(){
        if(this.isBorrowed){
            this.isBorrowed = false;
            console.log(`${this.title} has been returned`);
        }else{
            console.log(`${this.title} was not borrowed`);
        }
    }
}

class User{
    constructor(name){
        this.name = name;
        this.borrowedBooks = [];
    }

    borrowBook(book){
        if(!book.isBorrowed){
            book.borrow();
            this.borrowedBooks.push(book);
            console.log(`${this.name} borrowed ${book.title}`);
        }else{
            console.log(`${this.name} cannot borrow ${book.title} because it's already borrowed`)
        }
    }

    returnBook(book){
        const index = this.borrowedBooks.indexOf(book);
        if(index > -1){
            book.returnBook();
            this.borrowedBooks.splice(index, 1);
            console.log(`${this.name} returned ${book.title}`);
        }else{
            console.log(`${this.name} does not have ${book.title} borrowed`);
        }
    }
}

const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '9780743273565');
const book2 = new Book('1984', 'George Orwell', '9780451524935');
const user1 = new User("Bob");
const user2 = new User("Mike");

user1.borrowBook(book1);
user2.borrowBook(book1);