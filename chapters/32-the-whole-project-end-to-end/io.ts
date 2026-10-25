import {
  readFile,
  writeFile,
} from "node:fs/promises";
import type { Ticket } from "./types.ts";

export async function load(): Promise<Ticket[]> {
  try {
    const text = await readFile(
      "tickets.json",
      "utf8",
    );
    return JSON.parse(text) as Ticket[];
  } catch {
    return [];
  }
}

export async function save(
  list: readonly Ticket[],
): Promise<void> {
  const text = JSON.stringify(list, null, 2);
  await writeFile("tickets.json", text);
}
