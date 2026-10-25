import { add, all, get, update } from "./store.ts";

add("Login fails");
add("Slow search");
const t = get(1);
console.log(t?.title);
console.log(get(9)?.title);
update(1, { status: "closed" });
console.log(get(1)?.status);
console.log(all().length);
