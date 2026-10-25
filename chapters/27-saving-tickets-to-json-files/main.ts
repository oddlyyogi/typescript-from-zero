import {
  loadTickets,
  saveTickets,
} from "./persistence.ts";

const file = "tickets.json";
const list = await loadTickets(file);
console.log("loaded", list.length);
await saveTickets(file, [
  ...list,
  {
    id: list.length + 1,
    title: "Login",
    status: "open",
  },
]);
