export type Ticket = {
  id: number;
  title: string;

export function label(t: Ticket): string {
  return `#${t.id} ${t.title}`;
}

}
