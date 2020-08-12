/* Ejercicio propuesto por Dorian Desing en el curso de Udemy de JavaScript 
https://www.udemy.com/course/curso-de-javascript-2020 */

class Book {
    constructor(title, author, year, genre){
        this.title = title,
        this.author = author,
        this.year = year,
        this.genre = genre
    }
    bookInfo(){
        return `
            Título: ${this.title}
            Autor: ${this.author}
            Año de publicación: ${this.year}
            Género: ${this.genre}
            `
    }
    getAuthors(){
        return this.author
    }
    getGenre(){
        return this.genre
    }
}

let books = [];

while (books.length < 3) {
    let title = prompt("Introduce el título de un libro"),
        author = prompt("Introduce su autor"),
        year = prompt("Introduce su año de publicación"),
        genre = prompt("Introduce su género literario");

    if (title != "" && 
        author != "" && 
        !isNaN(year) && 
        year.length == 4 && 
        (genre == "fantasía" || genre == "terror" || genre == "ciencia ficción")) {
        books.push(new Book(title, author, year, genre));
    }
}

const showBooks = () => {
    console.log(books)
}

const showAuthors = () => {
    let authors = [];

    for  (let book of books) {
        authors.push(book.getAuthors())
    }
    console.log(authors.sort());
}

const showBooksByGenre = () => {
    let insertGenre = prompt("Introduce el género del libro que te interesa leer");

    for (let book of books) {
        if (book.getGenre() == insertGenre){
            console.log(book.bookInfo());
        }
    }
}

showBooks();
showAuthors();
showBooksByGenre();