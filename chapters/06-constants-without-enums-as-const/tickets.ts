type Status =
  (typeof STATUS)[keyof typeof STATUS];

function label(s: Status): string {
  return s.toUpperCase();
}

const STATUS = {
  open: "open",
  closed: "closed",
  blocked: "blocked",
} as const;
console.log(label(STATUS.open));

console.log(label(STATUS.blocked));

const PRIORITIES = [1, 2, 3] as const;
type Priority = (typeof PRIORITIES)[number];
const p: Priority = 2;

const LABELS: Record<Status, string> = {
  open: "Open",
  closed: "Closed",
  blocked: "Blocked",
};
console.log(LABELS[STATUS.blocked]);

function show(k: keyof typeof LABELS) {
  console.log(LABELS[k]);
}
show("blocked");

const COLORS = {
  open: "green",
  closed: "gray",
  blocked: "red",
} as const satisfies Record<Status, string>;
const c: "green" = COLORS.open;

for (const s of Object.values(STATUS)) {
  console.log(s, LABELS[s]);
}
