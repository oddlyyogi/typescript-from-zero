import { owner } from "./tickets.ts";
import type { Ticket } from "./tickets.ts";

const t: Ticket = { id: 1, title: "Login" };
console.log(owner(t));
