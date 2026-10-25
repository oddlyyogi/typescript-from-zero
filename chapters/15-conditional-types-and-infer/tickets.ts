type Label<T> = T extends string
  ? "text"
  : "other";

const a: Label<string> = "text";
const b: Label<number> = "other";

type Plain<T> = T extends Promise<infer U>
  ? U
  : T;

const p: Plain<Promise<number>> = 5;

function newTicket(title: string) {
  return { id: 1, title, done: false };
}

type Ticket = ReturnType<typeof newTicket>;

const t: Ticket = {
  id: 2,
  title: "x",
  done: true,
};

type Yes<T> = T extends string ? "yes" : "no";

const mixed: Yes<string | number> = "yes";

type Ev =
  | { kind: "open"; msg: string }
  | { kind: "close" }
  | { kind: "note"; msg: string };

type WithMsg<T> = T extends { msg: string }
  ? T
  : never;

const k: WithMsg<Ev>["kind"] = "close";
