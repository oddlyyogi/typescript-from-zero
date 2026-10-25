import { type Ticket, label } from "./index.ts";

console.log(label({ id: 1, title: "Login" }));

const t: Ticket = { id: 2, title: "Crash" };
console.log(label(t));

const mod = await import("./ticket.ts");
console.log(mod.label({ id: 3, title: "Slow" }));
