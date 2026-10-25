export type Ticket = {
  id: number;
  title: string;
  assignee?: string;
};

export function owner(t: Ticket): string {
  return t.assignee ?? "nobody";
}
