export type Open = {
  status: "open";
  id: number;
  title: string;
};

export type Assigned = {
  status: "assigned";
  id: number;
  title: string;
  assignee: string;
};

export type Closed = {
  status: "closed";
  id: number;
  title: string;
  assignee: string;
};

export type Ticket = Open | Assigned | Closed;
