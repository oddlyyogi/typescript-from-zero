type Status = "open" | "closed" | "blocked";

let current: Status = "open";
console.log(current);
current = "closed";
console.log(current);

function label(s: Status): string {
  return s.toUpperCase();
}
console.log(label(current));

function icon(s: Status): string {
  switch (s) {
    case "open":
      return "[ ]";
    case "closed":
      return "[x]";
    case "blocked":
      return "[!]";
  }
}

type Priority = 1 | 2 | 3;
const p: Priority = 2;

type Id = number | string;

function showId(id: Id): string {
  if (typeof id === "string") {
    return id.toUpperCase();
  }
  return `#${id}`;
}

console.log(showId("ab-7"));
console.log(showId(42));

type Ticket = {
  title: string;
  status: Status;
  assignee: string | null;
  priority: Priority;
};

const t: Ticket = {
  title: "Login fails",
  status: "open",
  assignee: null,
  priority: 1,
};
if (t.assignee !== null) {
  console.log(t.assignee.toUpperCase());
} else {
  console.log("nobody");
}

const u: Ticket = {
  title: "App crashes",
  status: "open",
  assignee: "Mina",
  priority: 3,
};

let next: Status = "closed";
console.log(label(next));

const ids: (number | string)[] = [1, "b-2", 3];
console.log(ids.map(showId));
