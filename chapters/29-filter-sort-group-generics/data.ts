import type { Ticket } from "./types.ts";

export const list: readonly Ticket[] = [
  {
    id: 1,
    title: "Login fails",
    status: "open",
    priority: 2,
  },
  {
    id: 2,
    title: "Slow search",
    status: "open",
    priority: 1,
  },
  {
    id: 3,
    title: "Typo on home",
    status: "closed",
    priority: 3,
  },
  {
    id: 4,
    title: "Crash on save",
    status: "open",
    priority: 1,
  },
];
