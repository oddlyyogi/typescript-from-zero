export type Command =
  | { kind: "add"; title: string }
  | { kind: "list" }
  | { kind: "close"; id: number }
  | { kind: "delete"; id: number };

export function parse(
  args: string[],
): Command | undefined {
  const [name, arg] = args;
  switch (name) {
    case "add":
      return arg
        ? { kind: "add", title: arg }
        : undefined;
    case "list":
      return { kind: "list" };
    case "close":
      return /^\d+$/.test(arg ?? "")
        ? { kind: "close", id: Number(arg) }
        : undefined;
    case "delete":
      return /^\d+$/.test(arg ?? "")
        ? { kind: "delete", id: Number(arg) }
        : undefined;
    default:
      return undefined;
  }
}
