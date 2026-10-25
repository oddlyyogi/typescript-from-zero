function on(
  event: EventName,
) {
  console.log("listening to", event);
}


type Thing = "ticket" | "user";
type Action = "created" | "closed";

type EventName = `${Thing}:${Action}`;

on("user:closed");

type Handler = `on${Capitalize<Action>}`;

const h: Handler = "onCreated";

type ActionOf<S> =
  S extends `${string}:${infer A}`
    ? A
    : never;

const a: ActionOf<"ticket:created"> = "created";
