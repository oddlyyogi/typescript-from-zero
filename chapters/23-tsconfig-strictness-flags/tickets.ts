function greet(name: string) {
  return "Hi " + name;
}
const title: string | null = null;
console.log(greet("Mina"), title);

const names: string[] = ["Mina"];
console.log(names[3]?.length);

type Ticket = {
  title: string;
  assignee?: string;
};
const t: Ticket = {
  title: "Login",
};

function grade(n: number) {
  if (n > 5) {
    return "high";
  }
  return "low";
}
console.log(grade(9), grade(1));
