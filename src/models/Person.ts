export class Person {

    private age: number;

    constructor(
        public id: number,
        public name: string,
        age: number
    ) {
        this.age = age;
    }

    public getAge(): number {
        return this.age;
    }

    public introduce(): string {
        return `Meu nome é ${this.name}.`;
    }
}