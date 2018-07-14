import { Book, DamageLogger, Author, Librarian } from './interfaces';

class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;

    assistCustomer(customerName: string): void {
        console.log(this.name + ' is assisting ' + customerName);
    }
}

class ReferenceItem {
    private _publisher: string;
    private static department: string = 'Research';

    constructor(public title: string, protected year: number) {
        console.log('Creating a reference item...');
    }

    print(): void {
        console.log(`${this.title} was published in ${this.year}.`);
        console.log(`Department: ${ReferenceItem.department}`);
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }
}

class Encyclopedia extends ReferenceItem {
    constructor(title: string, year: number, private edition: number) {
        super(title, year);
    }

    print(): void {
        super.print();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }
}

export { UniversityLibrarian, ReferenceItem, Encyclopedia };