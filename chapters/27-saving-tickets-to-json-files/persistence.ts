import {
  readFile,
  writeFile,
} from "node:fs/promises";
import { isTicket } from "./types.ts";
import type { Ticket } from "./types.ts";

export async function saveTickets(
  file: string,
  list: readonly Ticket[],
): Promise<void> {
  const text = JSON.stringify(list, null, 2);
  await writeFile(file, text);
}

function isMissing(e: unknown): boolean {
  return (
    e instanceof Error &&
    "code" in e &&
    e.code === "ENOENT"
  );
}

export async function loadTickets(
  file: string,
): Promise<Ticket[]> {
  let text: string;
  try {
    text = await readFile(file, "utf8");
  } catch (e) {
    if (isMissing(e)) return [];
    throw e;
  }
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(`${file}: invalid JSON`);
  }
  if (
    !Array.isArray(data) ||
    !data.every(isTicket)
  ) {
    throw new Error(`${file} has bad data`);
  }
  return data;
}
