export type Status = "open" | "closed";

export type Ticket = {
  readonly id: number;
  title: string;
  status: Status;
};
