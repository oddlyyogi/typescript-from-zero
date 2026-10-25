export type Status = "open" | "closed";

export type Ticket = {
  id: number;
  title: string;
  status: Status;
};

export const Priority = {
  Low: 0,
  High: 1,
} as const;
