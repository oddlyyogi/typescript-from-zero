type Ticket = {
  id: number;
  title: string;
  done: boolean;
  assignee?: string;
};

type Flags<T> = {
  [K in keyof T]: boolean;
};

const touched: Flags<Ticket> = {
  id: true,
  title: false,
  done: true,
};

type Maybe<T> = {
  [K in keyof T]?: T[K];
};

const edit: Maybe<Ticket> = {
  title: "New title",
};
console.log(edit);

type Frozen<T> = {
  readonly [K in keyof T]: T[K];
};

const f: Frozen<Ticket> = {
  id: 1,
  title: "Login",
  done: false,
};

type Complete<T> = {
  [K in keyof T]-?: T[K];
};

const c: Complete<Ticket> = {
  id: 1,
  title: "Login",
  done: false,
  assignee: "Mina",
};

type Getters<T> = {
  [K in keyof T as
    `get${Capitalize<string & K>}`]:
    () => T[K];
};

const g: Getters<Pick<Ticket, "title">> = {
  getTitle: () => "x",
};
