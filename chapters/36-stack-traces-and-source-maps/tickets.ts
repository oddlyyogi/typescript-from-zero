export type Ticket = {
  id: number;
  title?: string;
};

export function titleOf(t: Ticket): string {
  if (!t.title) {
    throw new Error("ticket has no title");
  }
  return t.title.trim();
}
