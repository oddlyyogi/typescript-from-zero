import {
  assign,
  close,
  describe,
} from "./state.ts";
import type { OpenTicket } from "./state.ts";

const t: OpenTicket = {
  status: "open",
  id: 1,
};
const a = assign(t, "Mina");
const done = close(a, 100);
console.log(describe(t));
console.log(describe(a));
console.log(describe(done));
