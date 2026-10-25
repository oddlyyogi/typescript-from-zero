const counts: {
  [team: string]: number;
} = {};
counts["support"] = 2;
counts["dev"] = 5;
console.log(counts["support"]);


const byTeam = new Map<string, number>();
byTeam.set("support", 2);
byTeam.set("dev", 5);

const m = byTeam.get("sales");
console.log((m ?? 0).toFixed(1));

console.log(byTeam.size);
console.log(byTeam.has("dev"));

for (const [team, n] of byTeam) {
  console.log(team, n);
}

type Status = "open" | "closed";

const totals: Record<Status, number> = {
  open: 3,
  closed: 7,
};
console.log(totals.closed);
