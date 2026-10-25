import { add, all } from "./store.ts";
import { Priority } from "./types.ts";

add("Login fails");
add("Slow search");
console.log(all());
console.log(Priority.High);
