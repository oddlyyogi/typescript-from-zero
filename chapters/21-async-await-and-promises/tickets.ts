type Ticket = {
  id: number;
  title: string;
};

function loadTicket(
  id: number,
): Promise<Ticket> {
  return new Promise((resolve, reject) => {
    if (id > 5) {
      reject(new Error("no ticket"));
      return;
    }
    const title = id === 1 ? "Login" : "Crash";
    setTimeout(() => resolve({ id, title }), 50);
  });
}

async function titleOf(id: number) {
  const t = await loadTicket(id);
  return t.title;
}

async function main() {
  const t = await loadTicket(1);
  console.log(t.title);
  const s: string = await titleOf(1);
  console.log(s);
  console.log((await loadTicket(2)).title);
  const [a, b] = await Promise.all([
    loadTicket(1),
    loadTicket(2),
  ]);
  console.log(a.title, b.title);
  try {
    await loadTicket(9);
  } catch (e) {
    if (e instanceof Error) {
      console.log("failed:", e.message);
    }
  }
}
main();
