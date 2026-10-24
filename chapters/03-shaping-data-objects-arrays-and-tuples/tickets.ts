type Ticket = {
  readonly id: number;
  title: string;
  done: boolean;
  assignee?: string;
  reporter?: {
    name: string;
    team: string;
  };
};

const first: Ticket = {
  id: 1,
  title: "Login fails",
  done: false,
  reporter: { name: "Sam", team: "Support" },
  assignee: "Mina",
};
console.log(first);

const second: Ticket = {
  id: 2,
  title: "App crashes",
  done: false,
};
console.log(second.assignee?.length);

console.log(first.reporter?.team);

function show(t: Ticket): string {
  return `#${t.id} ${t.title}`;
}

const draft = {
  id: 4,
  title: "Typo in footer",
  done: false,
};
console.log(show(draft));

const tickets: Ticket[] = [first, second];
console.log(tickets.length);
tickets.push({
  id: 3,
  title: "Slow search",
  done: false,
});

const hit = tickets.find((t) => t.id === 3);
if (hit) {
  console.log(hit.title);
}

const byId: Record<number, Ticket> = {
  1: first,
  2: second,
};
console.log(byId[2].title);

const frozen: readonly Ticket[] = tickets;
console.log(frozen.length);

interface Comment {
  author: string;
  text: string;
}

interface Reply extends Comment {
  parentId: number;
}

const reply: Reply = {
  author: "Mina",
  text: "Fixed in the next release",
  parentId: 1,
};
console.log(reply.text);

const pair: [number, string] = [1, "Login"];
const [id, title] = pair;
console.log(id, title);
