import type { Ticket } from "./types.ts";

export function add(
  list: readonly Ticket[],
  title: string,
): Ticket[] {
  const id = list.length + 1;
  return [...list, { status: "open", id, title }];
}

export function assign(
  list: readonly Ticket[],
  id: number,
  assignee: string,
): Ticket[] {
  return list.map((t) =>
    t.status === "open" && t.id === id
      ? { ...t, status: "assigned", assignee }
      : t,
  );
}

export function close(
  list: readonly Ticket[],
  id: number,
): Ticket[] {
  return list.map((t) =>
    t.status === "assigned" && t.id === id
      ? { ...t, status: "closed" }
      : t,
  );
}
