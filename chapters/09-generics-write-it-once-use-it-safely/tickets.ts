function first<T>(items: T[]): T | undefined {
  return items[0];
}


const n = first([1, 2, 3]) ?? 0;
const w = first(["a", "b"]) ?? "";

function findById<T extends { id: number }>(
  items: T[],
  id: number,
): T | undefined {
  return items.find((i) => i.id === id);
}

const tickets = [
  { id: 1, title: "Login" },
  { id: 2, title: "Crash" },
];
const hit = findById(tickets, 2);
console.log(hit?.title);

type Result<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };

function parse(text: string): Result<number> {
  const v = Number(text);
  if (Number.isNaN(v)) {
    return { ok: false, error: "invalid" };
  }
  return { ok: true, value: v };
}

const r = parse("42");
if (r.ok) {
  console.log(r.value + 1);
}
