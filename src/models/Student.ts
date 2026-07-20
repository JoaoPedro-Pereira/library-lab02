import { Person } from "./Person";
import { IUser } from "../interfaces/IUser";

export class Student extends Person implements IUser {

    constructor(
        id: number,
        name: string,
        age: number,
        public course: string
    ) {
        super(id, name, age);
    }

    public borrowBook(bookTitle: string): string {
        return `${this.name} pegou emprestado "${bookTitle}".`;
    }

}