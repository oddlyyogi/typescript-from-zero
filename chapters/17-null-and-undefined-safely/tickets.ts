type Ticket = {
  id: number;
  title: string;
  assignee?: string;
};

const all: Ticket[] = [
  { id: 1, title: "Login", assignee: "Mina" },
  { id: 2, title: "Crash" },
];

function byId(id: number) {
  return all.find((t) => t.id === id);
}

const t = byId(2);
if (t) {
  console.log(t.title);
}
console.log(t?.title);
console.log(t?.assignee?.length);
console.log(t?.assignee ?? "nobody");

const zero = 0;
console.log(zero || 10);
console.log(zero ?? 10);

const ghost = byId(99);
console.log(ghost?.title);
