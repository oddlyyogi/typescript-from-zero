import type { Ticket } from "./types.ts";

const tickets = new Map<number, Ticket>();
let nextId = 1;

type Changes = Partial<Omit<Ticket, "id">>;

export function add(title: string): Ticket {
  const t: Ticket = {
    id: nextId++,
    title,
    status: "open",
  };
  tickets.set(t.id, t);
  return t;
}

export function get(id: number) {
  return tickets.get(id);
}

export function all(): readonly Ticket[] {
  return [...tickets.values()];
}

export function update(
  id: number,
  changes: Changes,
): Ticket | undefined {
  const old = tickets.get(id);
  if (!old) return undefined;
  const next = { ...old, ...changes };
  tickets.set(id, next);
  return next;
}
