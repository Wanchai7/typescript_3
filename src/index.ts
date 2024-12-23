const {Author, Book} = require("./Ex1");

const author1 = new Author("Wanchai","wanchai@webmail.npru.ac.th");
console.log(author1.toString());
const author2 = new Author("Chiangfung","chiangfung@webmail.npru.ac.th");
console.log(author2.toString());

const book1 =new Book("Basic Programming",[author1,author2],180,300);
console.log(book1.toString());
console.log(book1.getAuthorNames());


console.log("######### Ex1 ##########")