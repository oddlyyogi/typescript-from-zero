export type Ticket = {
  readonly id: number;
  title: string;
  status: "open" | "closed";
};

export function isTicket(x: unknown): x is Ticket {
  return (
    typeof x === "object" &&
    x !== null &&
    "id" in x &&
    typeof x.id === "number" &&
    "title" in x &&
    typeof x.title === "string" &&
    "status" in x &&
    (
      x.status === "open" ||
      x.status === "closed"
    )
  );
}
