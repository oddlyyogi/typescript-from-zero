type Ticket = {
  id: number;
  title: string;
};

const raw: unknown = JSON.parse(
  '{"id": "x", "title": 5}',
);

function isTicket(
  value: unknown,
): value is Ticket {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    typeof value.id === "number" &&
    "title" in value &&
    typeof value.title === "string"
  );
}

if (isTicket(raw)) {
  console.log(raw.title.toUpperCase());
}

const list: unknown[] = [
  { id: 1, title: "Login" },
  42,
  "hello",
];

const tickets: Ticket[] = list.filter(isTicket);
console.log(tickets.length);

function assertTicket(
  value: unknown,
): asserts value is Ticket {
  if (!isTicket(value)) {
    throw new Error("not a ticket");
  }
}

const first: unknown = list[0];
assertTicket(first);
console.log(first.title);
