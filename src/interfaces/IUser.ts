export interface IUser {
    id: number;
    name: string;

    borrowBook(bookTitle: string): string;
}