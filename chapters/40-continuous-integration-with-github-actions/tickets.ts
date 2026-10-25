import assert from "node:assert/strict";

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

assert.equal(
  openCount([{ id: 1, status: "open" }]),
  1,
);
console.log("ok");
