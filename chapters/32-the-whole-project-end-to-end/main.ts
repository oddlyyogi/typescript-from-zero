import { load, save } from "./io.ts";
import { add, assign, close } from "./ops.ts";

const [cmd, a, b] = process.argv.slice(2);
let list = await load();

switch (cmd) {
  case "add":
    list = add(list, a);
    break;
  case "assign":
    list = assign(list, Number(a), b);
    break;
  case "close":
    list = close(list, Number(a));
    break;
}

await save(list);
for (const t of list) {
  console.log(`#${t.id} ${t.status} ${t.title}`);
}
