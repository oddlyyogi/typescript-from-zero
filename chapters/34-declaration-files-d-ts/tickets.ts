export type Ticket = {
  id: number;
  status: "open" | "closed";
};

export const DEFAULT_PRIORITY = 2;

export function openCount(
  list: readonly Ticket[],
) {
  return list.filter(
    (t) => t.status === "open",
  ).length;
}

function secret(n: number): number {
  return n * 7;
}
