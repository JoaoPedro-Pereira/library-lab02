import { Student } from "./models/Student";
import { Librarian } from "./models/Librarian";
import { IBook } from "./interfaces/IBook";

const book: IBook = {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    available: true
};

const student = new Student(
    1,
    "João",
    22,
    "Engenharia de Software"
);

const librarian = new Librarian(
    2,
    "Maria",
    35
);

console.log(student.introduce());
console.log(student.borrowBook(book.title));

console.log(librarian.introduce());
console.log(librarian.addBook("Design Patterns"));

console.log(student.getAge());