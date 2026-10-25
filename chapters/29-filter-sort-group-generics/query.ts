import type { Status, Ticket } from "./types.ts";

export type Predicate = (t: Ticket) => boolean;

export const isOpen: Predicate = (t) =>
  t.status === "open";

export const isUrgent: Predicate = (t) =>
  t.priority === 1;

export function and(
  a: Predicate,
  b: Predicate,
): Predicate {
  return (t) => a(t) && b(t);
}

export const byPriority = (
  a: Ticket,
  b: Ticket,
) => a.priority - b.priority;

export function sortBy<T, K extends keyof T>(
  items: readonly T[],
  key: K,
): T[] {
  return items.toSorted((a, b) =>
    a[key] < b[key] ? -1 : 1,
  );
}

export function group(
  items: readonly Ticket[],
): Record<Status, Ticket[]> {
  const out: Record<Status, Ticket[]> = {
    open: [],
    closed: [],
  };
  for (const t of items) {
    out[t.status].push(t);
  }
  return out;
}
