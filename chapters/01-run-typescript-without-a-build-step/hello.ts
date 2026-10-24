function greet(name: string): string {
  return `Hello, ${name}`;
}

const user: string = "Mina";
console.log(greet(user));
console.log(greet("Ravi"));

let count = 3;
count = 4;

const limit = 10;

const priority: number = 2;
const done: boolean = false;
const labels: string[] = ["bug", "urgent"];
labels.push("login");
console.log(priority, done, labels);

type Ticket = {
  id: number;
  title: string;
  done: boolean;
};

function describe(t: Ticket): string {
  return `#${t.id} ${t.title}`;
}

const ticket: Ticket = {
  id: 1,
  title: "Login fails",
  done: false,
};
console.log(describe(ticket));
