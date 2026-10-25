class Ticket {
  readonly id: number;
  title: string;
  #notes: string[] = [];
  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }
  label(): string {
    return `#${this.id} ${this.title}`;
  }

  addNote(text: string): void {
    this.#notes.push(text);
  }

  get noteCount(): number {
    return this.#notes.length;
  }

  static fromText(text: string): Ticket {
    return new Ticket(0, text);
  }
}

const t = new Ticket(1, "Login");
console.log(t.label());
t.addNote("Reproduced");
console.log(t.noteCount);
console.log(Ticket.fromText("Crash").label());

class Note {
  text: string;
  constructor(text: string) {
    this.text = text;
  }
}
console.log(new Note("Hi").text);
