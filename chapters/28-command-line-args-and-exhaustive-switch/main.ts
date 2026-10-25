import { parse } from "./commands.ts";
import type { Command } from "./commands.ts";

function assertNever(x: never): never {
  throw new Error("Unhandled command");
}

function run(cmd: Command): void {
  switch (cmd.kind) {
    case "add":
      console.log("adding", cmd.title);
      break;
    case "list":
      console.log("listing tickets");
      break;
    case "close":
      console.log("closing", cmd.id);
      break;
    case "delete":
      console.log("deleting", cmd.id);
      break;
    default:
      assertNever(cmd);
  }
}

const cmd = parse(process.argv.slice(2));
if (cmd) {
  run(cmd);
} else {
  console.error(
    "usage: add <title> | list | close <id>",
  );
  process.exitCode = 1;
}
