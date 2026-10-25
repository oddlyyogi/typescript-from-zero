type Ticket = {
  id: number;
  title: string;
  done: boolean;
};

const tickets: Ticket[] = [
  { id: 1, title: "Login", done: false },
  { id: 2, title: "Crash", done: true },
  { id: 3, title: "Dark mode", done: false },
];

type Check = (t: Ticket) => boolean;

function isOpen(t: Ticket): boolean {
  return !t.done;
}

function countIf(
  list: Ticket[],
  check: Check,
): number {
  let n = 0;
  for (const t of list) {
    if (check(t)) n++;
  }
  return n;
}

console.log(countIf(tickets, isOpen));
const long = countIf(
  tickets,
  (t) => t.title.length > 5,
);
console.log(long);

tickets.forEach((t) => {
  console.log(t.title);
});

function longerThan(min: number): Check {
  return (t) => t.title.length > min;
}
console.log(countIf(tickets, longerThan(7)));
