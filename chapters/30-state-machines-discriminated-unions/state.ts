export type OpenTicket = {
  status: "open";
  id: number;
};

export type AssignedTicket = {
  status: "assigned";
  id: number;
  assignee: string;
};

export type ClosedTicket = {
  status: "closed";
  id: number;
  assignee: string;
  closedAt: number;
};

export type Ticket =
  | OpenTicket
  | AssignedTicket
  | ClosedTicket;

export function describe(t: Ticket): string {
  switch (t.status) {
    case "open":
      return `#${t.id} is waiting`;
    case "assigned":
      return `#${t.id} is with ${t.assignee}`;
    case "closed":
      return `#${t.id} closed by ${t.assignee}`;
  }
}

export function assign(
  t: OpenTicket,
  assignee: string,
): AssignedTicket {
  return { ...t, status: "assigned", assignee };
}

export function close(
  t: AssignedTicket,
  closedAt: number,
): ClosedTicket {
  return { ...t, status: "closed", closedAt };
}
