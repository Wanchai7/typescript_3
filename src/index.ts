
const {Author, Book} = require("./Ex1");
const { Customer, Invoice } = require("./Ex2")
const { Person, Student, Staff } = require("./Ex3")
const { Shape, Circle, Rectangle, Square } = require("./Ex4")

console.log("######### Ex1 ##########");
const author1 = new Author("Wanchai","wanchai@webmail.npru.ac.th");
console.log(author1.toString());
const author2 = new Author("Chiangfung","chiangfung@webmail.npru.ac.th");
console.log(author2.toString());
const book1 =new Book("Basic Programming",[author1,author2],180,300);
console.log(book1.toString());
console.log(book1.getAuthorNames());

console.log("######################## Ex2 ##################");
const customer1 = new Customer (1, "Wanchai Chiangfung", 100);
console.log(customer1.toString());

const invoice1 = new Invoice (77, customer1, 99);
console.log(invoice1.toString());
console.log(invoice1.getAmountAfterDiscount());

const student1 = new Student ("View" ,"Nakhon Pathom" ,"SE" ,2566 ,99999);
console.log(student1.toString());
const staff1 = new Staff ("Worachet Uttha" ,"Nakhon Pathom" ,"SE" ,88888)
console.log(staff1.toString());

const 
square.setSide(5)
console.log(suare.toString())