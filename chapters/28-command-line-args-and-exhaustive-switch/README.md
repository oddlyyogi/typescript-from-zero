# Chapter 28: Command Line Arguments and Exhaustive Switch

Give the ticket tracker a command line. We read process.argv, model commands as a discriminated union, parse text safely (the NaN trap), and use assertNever so a forgotten command becomes a compile error.

```bash
npm install
npm start
npm run check
```
