type Ticket = {
  id: number;
  title: string;
  status: "open" | "closed";
  assignee?: string;
};

type NewTicket = Omit<Ticket, "id">;

function save(t: NewTicket): Ticket {
  return { id: 1, ...t };
}

console.log(save({
  title: "Login",
  status: "open",
}));

function update(
  t: Ticket,
  changes: Partial<Ticket>,
): Ticket {
  return { ...t, ...changes };
}

const base: Ticket = {
  id: 1,
  title: "Login",
  status: "open",
};
console.log(update(base, { status: "closed" }));

type Row = Pick<Ticket, "id" | "title">;

function toRow(t: Ticket): Row {
  return { id: t.id, title: t.title };
}
console.log(toRow(base));

const frozen: Readonly<Ticket> = base;

type Changes = Partial<Omit<Ticket, "id">>;

function edit(c: Changes) {
  console.log(c);
}
edit({ title: "New" });
