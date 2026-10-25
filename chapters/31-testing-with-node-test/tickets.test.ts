import { test } from "node:test";
import assert from "node:assert/strict";
import { openCount, openIds } from "./tickets.ts";

test("counts only the open tickets", () => {
  const list = [
    { id: 1, status: "open" },
    { id: 2, status: "closed" },
    { id: 3, status: "open" },
  ] as const;
  assert.equal(openCount(list), 2);
});

test("an empty list has no open tickets", () => {
  assert.equal(openCount([]), 0);
});

test("lists the ids of open tickets", () => {
  const list = [
    { id: 1, status: "open" },
    { id: 2, status: "closed" },
  ] as const;
  assert.deepEqual(openIds(list), [1]);
});

