const { Author, Book } = require('./Ex1')
const { Customer, Invoice } = require('./Ex2')
const { Person, Student, Staff } = require('./Ex3')
const { DiscountRate, Customers, Visit } = require('./Ex5')
const { Shape, Circle, Rectangle, Square} = require('./Ex4')

console.log('############## Ex1 ##############')

const author1 = new Author("Phongsakorn tangpok", "zny@gmail.com")
const author2 = new Author("za", "lnw@gmail.com")


const book = new Book('Ty', [author1, author2], 999, 5)

console.log(book.toString())
console.log('#################################')


console.log('############## Ex2 ##############')

const customer1 = new Customer(1, 'Boom', 0.2)
const invoice1 = new Invoice(1, customer1, 10000)

console.log(invoice1.getAmountAfterDiscount())

console.log(invoice1.toString())

console.log('#################################')

console.log('############## Ex3 ##############')

const person1 = new Person('Boom', 'London')
const person2 = new Person('Jaz', 'Switzerland')

const student1 = new Student('John', 'Japan', 'EN', 2001, 14000)

const staff1 = new Staff('Doe', 'Ireland', 'Harvard', 40000)


console.log(staff1.toString())

console.log('#################################')

console.log('############## Ex4 ##############')
const shape = new Shape("Red", true)
console.log(shape.toString()) 

const circle = new Circle("Blue", false, 5)
console.log(circle.toString()) 
console.log(`Area of Circle: ${circle.getArea()}`) 
console.log(`Perimeter of Circle: ${circle.getPerimeter()}`) 

const rectangle = new Rectangle("Green", true, 4, 6)
console.log(rectangle.toString()) 
console.log(`Area of Rectangle: ${rectangle.getArea()}`) 
const square = new Square(4, "Yellow", true)
console.log(square.toString()) 
console.log(`Area of Square: ${square.getArea()}`) 
console.log(`Perimeter of Square: ${square.getPerimeter()}`) 
console.log('#################################')

console.log('############## Ex5 ##############')

const cus1 = new Customers('Ice', false, 'Gold')
const visit1 = new Visit(cus1, 12252024, 100, 500)

console.log(cus1.toString())
console.log(visit1.toString())

console.log('#################################')