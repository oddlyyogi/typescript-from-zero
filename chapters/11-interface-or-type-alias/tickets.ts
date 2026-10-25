type TicketA = {
  id: number;
  title: string;
};

interface TicketB {
  id: number;
  title: string;
}

const a: TicketA = { id: 1, title: "Login" };
const b: TicketB = a;
console.log(b);

interface Bug extends TicketB {
  severity: "low" | "high";
}

const bug: Bug = {
  id: 2,
  title: "Crash",
  severity: "high",
};

type Feature = TicketA & {
  votes: number;
};

const f: Feature = {
  id: 3,
  title: "Dark mode",
  votes: 12,
};
console.log(f.votes);

type Status = "open" | "closed";

interface TicketB {
  assignee?: string;
}

b.assignee = "Mina";
console.log(b);


interface Labeled {
  label(): string;
}

class Note implements Labeled {
  text = "hi";
  label() {
    return this.text;
  }
}
