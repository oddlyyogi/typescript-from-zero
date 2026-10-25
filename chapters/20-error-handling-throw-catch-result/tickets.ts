type Ticket = {
  id: number;
  title: string;
};

const all: Ticket[] = [
  { id: 1, title: "Login" },
];

class NotFoundError extends Error {
  id: number;
  constructor(id: number) {
    super(`No ticket ${id}`);
    this.id = id;
  }
}

function byId(id: number): Ticket {
  const t = all.find((x) => x.id === id);
  if (!t) {
    throw new NotFoundError(id);
  }
  return t;
}

console.log(byId(1).title);
try {
  console.log(byId(9).title);
} catch (e) {
  if (e instanceof NotFoundError) {
    console.log("missing id", e.id);
  } else {
    throw e;
  }
}

type Result<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };

function find(id: number): Result<Ticket> {
  const t = all.find((x) => x.id === id);
  if (!t) {
    return { ok: false, error: `No ticket ${id}` };
  }
  return { ok: true, value: t };
}

const r = find(9);
if (r.ok) {
  console.log(r.value.title);
} else {
  console.log(r.error);
}
