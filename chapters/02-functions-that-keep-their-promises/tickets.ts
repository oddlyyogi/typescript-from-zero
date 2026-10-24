type Ticket = {
  id: number;
  title: string;
  priority: number;
};

function newTicket(
  id: number,
  title: string,
  priority = 2,
): Ticket {
  return { id, title, priority };
}

const login = newTicket(1, "Login fails", 2);
console.log(login);

const crash = newTicket(2, "App crashes");
console.log(crash);

const slow = newTicket(3, "Slow search", 1);
console.log(slow);

function describe(
  t: Ticket,
  prefix?: string,
): string {
  const tag = prefix ?? "ticket";
  return `${tag} #${t.id}: ${t.title}`;
}

console.log(describe(login));
console.log(describe(crash, "bug"));

function titleOf({ title }: Ticket): string {
  return title;
}
console.log(titleOf(login));

const isUrgent = (t: Ticket): boolean =>
  t.priority === 1;
console.log(isUrgent(crash));

const tickets = [login, crash, slow];
const urgent = tickets.filter(
  (t) => t.priority === 1,
);
console.log(urgent.map((t) => t.title));

function printTicket(t: Ticket): void {
  console.log(describe(t));
}

printTicket(slow);
