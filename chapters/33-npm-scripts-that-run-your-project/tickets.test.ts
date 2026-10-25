import { test } from "node:test";
import assert from "node:assert/strict";
import { double } from "./tickets.ts";

test("doubles a number", () => {
  assert.equal(double(4), 8);
});
