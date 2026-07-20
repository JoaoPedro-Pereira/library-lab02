import { Person } from "./Person";
import { IUser } from "../interfaces/IUser";

export class Librarian extends Person implements IUser {

    constructor(
        id: number,
        name: string,
        age: number
    ) {
        super(id, name, age);
    }

    public borrowBook(bookTitle: string): string {
        return `Bibliotecário registrou o empréstimo de "${bookTitle}".`;
    }

    public addBook(title: string): string {
        return `Livro "${title}" adicionado ao catálogo.`;
    }

}