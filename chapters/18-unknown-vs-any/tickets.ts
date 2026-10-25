const text = '{"id": 1, "title": "Login"}';
const data: unknown = JSON.parse(text);


if (typeof data === "object" && data !== null) {
  if ("title" in data) {
    const v = data.title;
    if (typeof v === "string") {
      console.log(v.toUpperCase());
    }
  }
}

try {
  JSON.parse("{oops");
} catch (e) {
  if (e instanceof Error) {
    console.log("bad json");
  }
}
