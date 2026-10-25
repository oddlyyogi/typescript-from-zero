import type { Ticket } from "./types.ts";

const tickets: Ticket[] = [];

export function add(title: string): Ticket {
  const t: Ticket = {
    id: tickets.length + 1,
    title,
    status: "open",
  };
  tickets.push(t);
  return t;
}

export function all(): Ticket[] {
  return tickets;
}
