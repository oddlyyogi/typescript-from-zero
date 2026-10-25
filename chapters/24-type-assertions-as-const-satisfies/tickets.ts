type Ticket = {
  id: number;
  title: string;
};

const colors = {
  open: "green",
  closed: [255, 0, 0],
} satisfies Record<
  string,
  string | number[]
>;
console.log(colors.open.toUpperCase());
