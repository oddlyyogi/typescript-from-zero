function format(v: string | number): string {
  if (typeof v === "number") {
    return v.toFixed(1);
  }
  return v;
}

console.log(format(3.14159));
console.log(format("n/a"));

function greet(who: string | null): string {
  if (!who) return "Hello, stranger";
  return `Hello, ${who.toUpperCase()}`;
}

console.log(greet("Mina"));
console.log(greet(null));
console.log(greet(""));

type Status = "open" | "closed";
function archive(s: "closed"): string {
  return `archived (${s})`;
}
function tidy(s: Status): string {
  if (s === "closed") return archive(s);
  return "still open";
}

type Email = { address: string };
type Phone = { number: string };
function reach(c: Email | Phone): string {
  if ("address" in c) return c.address;
  return c.number;
}

console.log(reach({ address: "a@b.dev" }));
console.log(reach({ number: "555-0100" }));

function year(d: Date | string): string {
  if (d instanceof Date) {
    return String(d.getFullYear());
  }
  return d;
}

function list(x: string | string[]): string[] {
  return Array.isArray(x) ? x : [x];
}

console.log(year(new Date(2026, 0, 5)));
console.log(year("unknown"));
console.log(list("a"), list(["b", "c"]));

type Ticket = { id: number; title: string };
function summary(t: Ticket | null): string {
  if (t === null) return "no ticket";
  return `#${t.id} ${t.title}`;
}

console.log(
  summary({ id: 1, title: "Login" }),
);
console.log(summary(null));

let value: string | number = "hello";
console.log(value.toUpperCase());
value = 42;
console.log(value.toFixed(2));

type Change =
  | { kind: "created"; title: string }
  | { kind: "closed"; by: string };
function what(c: Change): string {
  if (c.kind === "created") return c.title;
  return c.by;
}

console.log(
  what({ kind: "created", title: "Login" }),
);
console.log(
  what({ kind: "closed", by: "Mina" }),
);

const mixed = [1, "a", 2, "b"];
const words = mixed.filter(
  isString,
);
console.log(words.map((w) => w.toUpperCase()));

function isString(x: unknown): x is string {
  return typeof x === "string";
}
