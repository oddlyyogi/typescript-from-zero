function need(name: string): string {
  const v = process.env[name];
  if (v === undefined) {
    throw new Error(`missing setting ${name}`);
  }
  return v;
}

function needNumber(name: string): number {
  const n = Number(need(name));
  if (Number.isNaN(n)) {
    throw new Error(`${name} is not a number`);
  }
  return n;
}

export const config = {
  port: needNumber("PORT"),
  level: process.env.LEVEL ?? "info",
};
