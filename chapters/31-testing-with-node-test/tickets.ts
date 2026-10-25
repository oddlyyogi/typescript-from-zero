export type Ticket = {
  id: number;
  status: "open" | "closed";
};

export function openCount(
  list: readonly Ticket[],
): number {
  return list.filter(
    (t) => t.status === "open",
  ).length;
}

export function openIds(
  list: readonly Ticket[],
): number[] {
  return list
    .filter((t) => t.status === "open")
    .map((t) => t.id);
}
