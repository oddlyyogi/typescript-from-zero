type Status = "open" | "closed";

type Ticket = {
  id: number;
  title: string;
  status: Status;
};

type Result<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };

function fail(error: string): Result<never> {
  return { ok: false, error };
}

function isStatus(x: unknown): x is Status {
  return x === "open" || x === "closed";
}

function parseTicket(
  input: unknown,
): Result<Ticket> {
  if (typeof input !== "object" || input === null) {
    return fail("not an object");
  }
  if (
    !("id" in input) ||
    typeof input.id !== "number"
  ) {
    return fail("id must be a number");
  }
  if (
    !("title" in input) ||
    typeof input.title !== "string"
  ) {
    return fail("title must be a string");
  }
  if (
    !("status" in input) ||
    !isStatus(input.status)
  ) {
    return fail("status must be open or closed");
  }
  return {
    ok: true,
    value: {
      id: input.id,
      title: input.title,
      status: input.status,
    },
  };
}

function show(text: string) {
  const r = parseTicket(JSON.parse(text));
  console.log(r.ok ? r.value.title : r.error);
}

show('{"id":1,"title":"Login","status":"open"}');
show("null");

show('{"id":"1","title":"Login"}');

show('{"id":1,"title":"Login","status":"done"}');
