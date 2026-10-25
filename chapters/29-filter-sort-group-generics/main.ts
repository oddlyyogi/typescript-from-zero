import { list } from "./data.ts";
import {
  and,
  byPriority,
  group,
  isOpen,
  isUrgent,
  sortBy,
} from "./query.ts";

const open = list.filter(
  (t) => t.status === "open",
);
console.log(open.map((t) => t.title));

const hot = list.filter(
  and(isOpen, isUrgent),
);
console.log(hot.map((t) => t.title));

const sorted = sortBy(list, "title");
console.log(sorted.map((t) => t.title));
const g = group(list);
console.log(g.open.length, g.closed.length);
